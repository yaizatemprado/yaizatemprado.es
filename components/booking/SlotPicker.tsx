'use client'

import { useState } from 'react'
import type { AvailabilitySlot } from '@/lib/types'

interface Props {
  slots: Pick<AvailabilitySlot, 'id' | 'starts_at'>[]
  onSelect: (slotId: string) => void
  selectedId: string | null
}

function groupByDate(slots: Props['slots']) {
  const groups: Record<string, Props['slots']> = {}
  for (const slot of slots) {
    const key = new Intl.DateTimeFormat('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Europe/Madrid',
    }).format(new Date(slot.starts_at))
    if (!groups[key]) groups[key] = []
    groups[key].push(slot)
  }
  return groups
}

function formatTime(startsAt: string) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Madrid',
    timeZoneName: 'short',
  }).format(new Date(startsAt))
}

export default function SlotPicker({ slots, onSelect, selectedId }: Props) {
  const groups = groupByDate(slots)
  const dates = Object.keys(groups)

  if (dates.length === 0) {
    return (
      <p className="text-slate text-[1rem] leading-[1.7]">
        No slots available right now. Please check back soon or{' '}
        <a href="mailto:yaiza@temprado.es" className="text-rose underline">
          get in touch
        </a>{' '}
        directly.
      </p>
    )
  }

  return (
    <div className="grid gap-8">
      {dates.map((date) => (
        <div key={date}>
          <p className="text-[0.78rem] font-extrabold tracking-[0.18em] uppercase text-slate mb-3">
            {date}
          </p>
          <div className="flex flex-wrap gap-3">
            {groups[date].map((slot) => {
              const selected = slot.id === selectedId
              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => onSelect(slot.id)}
                  className="px-5 py-2.5 rounded-full text-[0.9rem] font-semibold border transition-all duration-150"
                  style={
                    selected
                      ? {
                          background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
                          color: '#fff',
                          border: '1.5px solid transparent',
                          boxShadow: '0 8px 20px rgba(204,108,78,0.25)',
                        }
                      : {
                          background: '#fff',
                          color: '#2e2324',
                          border: '1.5px solid #e3d2cc',
                        }
                  }
                >
                  {formatTime(slot.starts_at)}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
