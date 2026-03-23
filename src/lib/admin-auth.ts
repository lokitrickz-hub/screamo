import { cookies } from "next/headers";
import { getAdminClient } from "./supabase";

export async function verifyAdminSession(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;
  if (!token) return false;

  const supabase = getAdminClient();
  const { data } = await supabase
    .from("admin_sessions")
    .select("id, expires_at")
    .eq("token", token)
    .single();

  if (!data) return false;

  // Check expiry
  if (new Date(data.expires_at) < new Date()) {
    // Clean up expired session
    await supabase.from("admin_sessions").delete().eq("id", data.id);
    return false;
  }

  return true;
}

export function unauthorizedResponse() {
  return new Response(JSON.stringify({ error: "Unauthorized" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}
