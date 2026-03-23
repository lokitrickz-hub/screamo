import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAdminClient } from "@/lib/supabase";

export async function POST() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (token) {
    const supabase = getAdminClient();
    await supabase.from("admin_sessions").delete().eq("token", token);
  }

  const response = NextResponse.json({ success: true });
  response.cookies.delete("admin_token");
  return response;
}
