-- Enable RLS on booking tables
ALTER TABLE availability_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- availability_slots: anyone can read, only service role can write
CREATE POLICY slots_anon_select ON availability_slots
  FOR SELECT TO anon USING (true);

CREATE POLICY slots_service_all ON availability_slots
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- bookings: anon can insert (booking flow), only service role can read/update/delete
CREATE POLICY bookings_anon_insert ON bookings
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY bookings_service_all ON bookings
  FOR ALL TO service_role USING (true) WITH CHECK (true);
