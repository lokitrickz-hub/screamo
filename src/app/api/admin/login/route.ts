import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { getAdminClient } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json({ error: "Hasło jest wymagane" }, { status: 400 });
    }

    const hash = process.env.ADMIN_PASSWORD_HASH;
    if (!hash) {
      return NextResponse.json({ error: "Brak konfiguracji" }, { status: 500 });
    }

    const valid = bcrypt.compareSync(password, hash);
    if (!valid) {
      return NextResponse.json({ error: "Nieprawidłowe hasło" }, { status: 401 });
    }

    // Create session
    const token = crypto.randomBytes(48).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h

    const supabase = getAdminClient();
    await supabase.from("admin_sessions").insert({
      token,
      expires_at: expiresAt.toISOString(),
    });

    // Clean up old expired sessions
    await supabase
      .from("admin_sessions")
      .delete()
      .lt("expires_at", new Date().toISOString());

    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 24 * 60 * 60, // 24h
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Błąd serwera" }, { status: 500 });
  }
}
