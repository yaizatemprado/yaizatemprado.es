-- Enrichment columns for subscriber classification pipeline
ALTER TABLE subscribers
  ADD COLUMN email_domain TEXT GENERATED ALWAYS AS (split_part(email, '@', 2)) STORED,
  ADD COLUMN name TEXT,
  ADD COLUMN company TEXT,
  ADD COLUMN job_title TEXT,
  ADD COLUMN linkedin_url TEXT,
  ADD COLUMN raw_enrichment_data JSONB,
  ADD COLUMN classification TEXT CHECK (classification IN ('potential_mentee', 'corporate_contact', 'general_interest')),
  ADD COLUMN classification_reason TEXT,
  ADD COLUMN enriched_at TIMESTAMPTZ;
