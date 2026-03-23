import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://oiampgefyjnujwzjcrdn.supabase.co",
  // service_role key - full access
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pYW1wZ2VmeWpudWp3empjcmRuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NDI3ODczOCwiZXhwIjoyMDg5ODU0NzM4fQ.2HbpslUSZuUOLfKnPG0CmY_RSUbdQQcezahJW1opCE0",
  { auth: { autoRefreshToken: false, persistSession: false } }
);

// Test connection
const { data, error } = await supabase.from("groups").select("*").limit(1);

if (error && error.code === "42P01") {
  console.log("Table 'groups' does not exist yet. You need to create tables via Supabase Dashboard SQL Editor.");
  console.log("");
  console.log("Go to: https://supabase.com/dashboard/project/oiampgefyjnujwzjcrdn/sql/new");
  console.log("Paste the SQL from: supabase/migrations/001_initial_schema.sql");
  console.log("Click 'Run'");
} else if (error) {
  console.log("Connection error:", error.message);
} else {
  console.log("Connected! Groups table exists with", data.length, "rows");

  // Check if groups are seeded
  const { data: groups } = await supabase.from("groups").select("*").order("sort_order");
  if (groups && groups.length === 0) {
    console.log("Seeding groups...");
    const { error: seedError } = await supabase.from("groups").insert([
      { name: "Maluchy", age_range: "5-7 lat", monthly_fee: 0, sort_order: 1 },
      { name: "Juniorzy", age_range: "8-12 lat", monthly_fee: 0, sort_order: 2 },
      { name: "Zaawansowani", age_range: "13+ lat", monthly_fee: 0, sort_order: 3 },
      { name: "Kadra Zawodnicza", age_range: "Po kwalifikacji", monthly_fee: 0, sort_order: 4 },
    ]);
    if (seedError) console.log("Seed error:", seedError.message);
    else console.log("Groups seeded!");
  } else {
    console.log("Groups already seeded:", groups?.map(g => g.name).join(", "));
  }
}
