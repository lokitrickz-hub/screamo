import { NextRequest, NextResponse } from "next/server";
import { verifyAdminSession, unauthorizedResponse } from "@/lib/admin-auth";
import { getAdminClient } from "@/lib/supabase";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  try {
    const { id } = await params;
    const body = await req.json();
    const { first_name, last_name, group_id, parent_name, parent_email, parent_phone, is_active } = body;

    const supabase = getAdminClient();
    const { data, error } = await supabase
      .from("members")
      .update({
        first_name,
        last_name,
        group_id,
        parent_name,
        parent_email,
        parent_phone,
        is_active,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select("*, groups(name, age_range)")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await verifyAdminSession())) return unauthorizedResponse();

  const { id } = await params;
  const supabase = getAdminClient();

  // Soft delete
  const { error } = await supabase
    .from("members")
    .update({ is_active: false, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
