'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SlotPicker from './SlotPicker'
import type { AvailabilitySlot } from '@/lib/types'

interface Props {
  slots: Pick<AvailabilitySlot, 'id' | 'starts_at'>[]
}

export default function IntroBookingForm({ slots }: Props) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedSlotId) {
      setError('Please select a time slot.')
      return
    }
    setLoading(true)
    setError(null)

    const res = await fetch('/api/book-intro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, slotId: selectedSlotId }),
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
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-[0.88rem] font-semibold text-anchor">
            Full name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[#e3d2cc] bg-white px-4 py-3 text-[0.95rem] text-anchor placeholder:text-slate/50 focus:outline-none focus:border-rose transition-colors duration-200"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-[0.88rem] font-semibold text-anchor">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[#e3d2cc] bg-white px-4 py-3 text-[0.95rem] text-anchor placeholder:text-slate/50 focus:outline-none focus:border-rose transition-colors duration-200"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-4">
        <p className="text-[0.88rem] font-semibold text-anchor">Choose a time</p>
        <SlotPicker slots={slots} onSelect={setSelectedSlotId} selectedId={selectedSlotId} />
      </div>

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
        {loading ? 'Booking…' : 'Confirm booking'}
      </button>
    </form>
  )
}
