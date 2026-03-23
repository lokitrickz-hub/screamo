import { NextResponse } from "next/server";
import { verifyAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { getAdminClient } from "@/lib/supabase";

export async function GET() {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  const supabase = getAdminClient();
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  // Total active members
  const { count: totalMembers } = await supabase
    .from("members")
    .select("*", { count: "exact", head: true })
    .eq("is_active", true);

  // Payments this month
  const { data: monthPayments } = await supabase
    .from("payments")
    .select("status, amount")
    .eq("month", currentMonth)
    .eq("year", currentYear);

  const paid = monthPayments?.filter((p) => p.status === "paid") || [];
  const unpaid = monthPayments?.filter((p) => p.status === "unpaid") || [];
  const totalPaidAmount = paid.reduce((sum, p) => sum + p.amount, 0);

  // Last 10 payments
  const { data: recentPayments } = await supabase
    .from("payments")
    .select("*, members(first_name, last_name, groups(name))")
    .eq("status", "paid")
    .order("paid_at", { ascending: false })
    .limit(10);

  return NextResponse.json({
    totalMembers: totalMembers || 0,
    currentMonth: {
      month: currentMonth,
      year: currentYear,
      paid: paid.length,
      unpaid: unpaid.length,
      totalPaidAmount,
    },
    recentPayments: recentPayments || [],
  });
}
