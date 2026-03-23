import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { getAdminClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  try {
    const { month, year } = await req.json();

    if (!month || !year) {
      return NextResponse.json({ error: "Miesiąc i rok są wymagane" }, { status: 400 });
    }

    const supabase = getAdminClient();

    // Get all active members with their group fees
    const { data: members, error: membersError } = await supabase
      .from("members")
      .select("id, groups(monthly_fee)")
      .eq("is_active", true);

    if (membersError) {
      return NextResponse.json({ error: membersError.message }, { status: 500 });
    }

    if (!members || members.length === 0) {
      return NextResponse.json({ error: "Brak aktywnych członków" }, { status: 400 });
    }

    // Create unpaid records for each member (skip if already exists)
    const records = members.map((m) => ({
      member_id: m.id,
      month,
      year,
      amount: (m.groups as unknown as { monthly_fee: number })?.monthly_fee || 0,
      status: "unpaid" as const,
    }));

    const { data, error } = await supabase
      .from("payments")
      .upsert(records, { onConflict: "member_id,month,year", ignoreDuplicates: true })
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      generated: data?.length || 0,
      message: `Wygenerowano płatności na ${month}/${year}`,
    });
  } catch {
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
