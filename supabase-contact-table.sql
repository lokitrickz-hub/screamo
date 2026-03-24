-- Run this in Supabase SQL Editor to create the contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  contact TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  read BOOLEAN DEFAULT FALSE
);

-- Allow service role to insert
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can do everything" ON contact_messages
  FOR ALL USING (true) WITH CHECK (true);
