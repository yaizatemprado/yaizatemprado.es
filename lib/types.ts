export type SessionType = 'intro' | 'session'
export type SubscriberClassification = 'potential_mentee' | 'corporate_contact' | 'general_interest'

export interface Subscriber {
  id: string
  email: string
  email_domain: string
  locale: string
  subscribed_at: string
  confirmed: boolean
  name: string | null
  company: string | null
  job_title: string | null
  linkedin_url: string | null
  raw_enrichment_data: Record<string, unknown> | null
  classification: SubscriberClassification | null
  classification_reason: string | null
  enriched_at: string | null
}

export interface EnrichmentResult {
  name: string | null
  company: string | null
  job_title: string | null
  linkedin_url: string | null
  raw_enrichment_data: Record<string, unknown>
}


export type BookingStatus = 'pending_schedule' | 'confirmed'

export interface AvailabilitySlot {
  id: string
  starts_at: string
  duration_minutes: number
  session_type: SessionType
  is_booked: boolean
  created_at: string
}

export interface Booking {
  id: string
  slot_id: string | null
  name: string
  email: string
  session_type: SessionType
  status: BookingStatus
  stripe_session_id: string | null
  follow_up_sent: boolean
  created_at: string
}
