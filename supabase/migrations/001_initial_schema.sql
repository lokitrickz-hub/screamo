-- ============================================
-- UKS ScreamoTrickz - Schema bazy danych
-- ============================================

-- Tabela: groups (grupy wiekowe)
CREATE TABLE IF NOT EXISTS groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  age_range text,
  monthly_fee integer NOT NULL DEFAULT 0,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Tabela: members (zawodnicy)
CREATE TABLE IF NOT EXISTS members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  group_id uuid REFERENCES groups(id),
  parent_name text,
  parent_email text,
  parent_phone text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabela: payments (platnosci)
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id uuid REFERENCES members(id),
  month integer NOT NULL CHECK (month >= 1 AND month <= 12),
  year integer NOT NULL,
  amount integer NOT NULL DEFAULT 0,
  status text DEFAULT 'unpaid' CHECK (status IN ('unpaid','pending','paid','failed')),
  stripe_payment_intent_id text UNIQUE,
  stripe_checkout_session_id text,
  paid_at timestamptz,
  created_at timestamptz DEFAULT now(),
  UNIQUE(member_id, month, year)
);

-- Tabela: admin_sessions
CREATE TABLE IF NOT EXISTS admin_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz NOT NULL
);

-- Indeksy
CREATE INDEX IF NOT EXISTS idx_members_group ON members(group_id);
CREATE INDEX IF NOT EXISTS idx_members_active ON members(is_active);
CREATE INDEX IF NOT EXISTS idx_payments_member ON payments(member_id);
CREATE INDEX IF NOT EXISTS idx_payments_month_year ON payments(month, year);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_admin_sessions_token ON admin_sessions(token);

-- Wstaw grupy wiekowe
INSERT INTO groups (name, age_range, monthly_fee, sort_order) VALUES
  ('Maluchy', '5-7 lat', 0, 1),
  ('Juniorzy', '8-12 lat', 0, 2),
  ('Zaawansowani', '13+ lat', 0, 3),
  ('Kadra Zawodnicza', 'Po kwalifikacji', 0, 4)
ON CONFLICT DO NOTHING;

-- RLS (Row Level Security)
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;

-- Polityki RLS: anon moze czytac grupy i imiona czlonkow (do formularza platnosci)
CREATE POLICY "Public can read groups" ON groups FOR SELECT USING (true);
CREATE POLICY "Public can read member names" ON members FOR SELECT USING (true);

-- Polityki RLS: service_role ma pelny dostep (pomija RLS automatycznie)
-- Nie trzeba tworzyc polityk dla service_role - on omija RLS
