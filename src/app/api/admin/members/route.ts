import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { getAdminClient } from "@/lib/supabase";

export async function GET() {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from("members")
    .select("*, groups(name, age_range)")
    .order("last_name");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  try {
    const body = await req.json();
    const { first_name, last_name, group_id, parent_name, parent_email, parent_phone } = body;

    if (!first_name || !last_name || !group_id) {
      return NextResponse.json(
        { error: "Imię, nazwisko i grupa są wymagane" },
        { status: 400 }
      );
    }

    const supabase = getAdminClient();
    const { data, error } = await supabase
      .from("members")
      .insert({ first_name, last_name, group_id, parent_name, parent_email, parent_phone })
      .select("*, groups(name, age_range)")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
