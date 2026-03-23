import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { getAdminClient } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  const { searchParams } = new URL(req.url);
  const month = parseInt(searchParams.get("month") || String(new Date().getMonth() + 1));
  const year = parseInt(searchParams.get("year") || String(new Date().getFullYear()));

  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from("payments")
    .select("*, members(first_name, last_name, groups(name))")
    .eq("month", month)
    .eq("year", year)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
