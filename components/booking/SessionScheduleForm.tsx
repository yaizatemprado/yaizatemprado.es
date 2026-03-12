'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SlotPicker from './SlotPicker'
import type { AvailabilitySlot } from '@/lib/types'

interface Props {
  slots: Pick<AvailabilitySlot, 'id' | 'starts_at'>[]
  stripeSessionId: string
}

export default function SessionScheduleForm({ slots, stripeSessionId }: Props) {
  const router = useRouter()
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedSlotId) return
    setLoading(true)
    setError(null)

    const res = await fetch('/api/book-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stripeSessionId, slotId: selectedSlotId }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.error ?? 'Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    router.push('/book/confirmed')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 max-w-[600px]">
      <SlotPicker slots={slots} onSelect={setSelectedSlotId} selectedId={selectedSlotId} />

      {error && <p className="text-[0.9rem] text-rose">{error}</p>}

      <button
        type="submit"
        disabled={loading || !selectedSlotId}
        className="justify-self-start rounded-full px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
          boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
        }}
      >
        {loading ? 'Confirming…' : 'Confirm booking'}
      </button>
    </form>
  )
}
