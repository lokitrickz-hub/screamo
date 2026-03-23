import { NextResponse } from "next/server";
import { verifyAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { getAdminClient } from "@/lib/supabase";

export async function GET() {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  const supabase = getAdminClient();
  const { data, error } = await supabase
    .from("groups")
    .select("*")
    .order("sort_order");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
