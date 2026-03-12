-- Slots that Yaiza adds manually via the Supabase dashboard
CREATE TABLE availability_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  starts_at TIMESTAMPTZ NOT NULL,
  duration_minutes INTEGER NOT NULL CHECK (duration_minutes IN (15, 60)),
  session_type TEXT NOT NULL CHECK (session_type IN ('intro', 'session')),
  is_booked BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- A booking is created once the user has picked a slot
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slot_id UUID REFERENCES availability_slots(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  session_type TEXT NOT NULL CHECK (session_type IN ('intro', 'session')),
  -- pending_schedule: paid but slot not yet chosen (60-min only)
  -- confirmed: slot picked and emails sent
  status TEXT NOT NULL DEFAULT 'confirmed' CHECK (status IN ('pending_schedule', 'confirmed')),
  stripe_session_id TEXT UNIQUE,
  follow_up_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Service role bypasses RLS so we disable it for server-side access
ALTER TABLE availability_slots DISABLE ROW LEVEL SECURITY;
ALTER TABLE bookings DISABLE ROW LEVEL SECURITY;
