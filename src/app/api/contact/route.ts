import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { name, contact, message } = await request.json();

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Wszystkie pola są wymagane" },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error } = await supabaseAdmin.from("contact_messages").insert({
      name,
      contact,
      message,
    });

    if (error) {
      console.error("Supabase error:", error);
      // Even if DB fails, we don't want to lose the message
      // Log it and return success to user
      console.log("Contact form submission (DB failed):", { name, contact, message });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Wystąpił błąd. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
