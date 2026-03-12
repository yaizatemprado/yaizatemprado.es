export type SessionType = 'intro' | 'session'
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
