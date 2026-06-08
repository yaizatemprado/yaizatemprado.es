'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  dict: Dictionary['resources']
  kitFormId: string
  // compact embeds the form inside another card (e.g. the free plan column):
  // no outer card, no heading, stacked input + button to fit a narrow column.
  compact?: boolean
}

type Status = 'idle' | 'loading' | 'success' | 'error'

// Each guide posts to its OWN Kit form. That form's incentive email delivers
// the PDF, and subscribing to it is the newsletter opt-in (double opt-in in Kit
// is the consent record). Capture and consent are the same action.
export default function ResourceForm({ dict, kitFormId, compact = false }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const body = new FormData()
      body.append('email_address', email)

      await fetch(`https://app.kit.com/forms/${kitFormId}/subscriptions`, {
        method: 'POST',
        body,
        mode: 'no-cors',
      })

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className={
        compact
          ? 'grid gap-3'
          : 'grid gap-4 w-full bg-card rounded-[20px] px-6 py-8 border border-[#f0e5e1]'
      }
    >
      {!compact && (
        <h2 className="text-[1.15rem] font-bold text-anchor text-center">
          {dict.formHeading}
        </h2>
      )}

      <form
        onSubmit={handleSubmit}
        className={compact ? 'flex flex-col gap-2.5' : 'flex flex-col sm:flex-row gap-3'}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.placeholder}
          className={`${
            compact ? 'w-full' : 'flex-1 min-w-0'
          } bg-white border border-[#ead9d3] rounded-full px-6 py-3 font-sans text-plum placeholder:text-slate/50 focus:outline-none focus:border-rose transition-colors duration-200`}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`${
            compact ? 'w-full px-6' : 'flex-none px-8'
          } rounded-full py-3 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed`}
          style={{
            background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
            boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
          }}
        >
          {status === 'loading' ? dict.sending : dict.submit}
        </button>
      </form>

      {status === 'success' ? (
        <p
          className={`${
            compact ? 'text-[0.82rem]' : 'text-sm'
          } text-emerald-700 bg-emerald-50/60 border border-emerald-200 rounded-2xl px-4 py-2.5 ${
            compact ? '' : 'text-center'
          }`}
        >
          {dict.success}
        </p>
      ) : status === 'error' ? (
        <p
          className={`${
            compact ? 'text-[0.82rem]' : 'text-sm'
          } text-rose border border-[#ead9d3] bg-[#fff5f2] rounded-2xl px-4 py-2.5 ${
            compact ? '' : 'text-center'
          }`}
        >
          {dict.error}
        </p>
      ) : (
        <p
          className={`text-slate ${
            compact
              ? 'text-[0.78rem] leading-[1.5] text-center'
              : 'text-[0.82rem] leading-[1.6] text-center'
          }`}
        >
          {dict.formNote}
        </p>
      )}
    </div>
  )
}
