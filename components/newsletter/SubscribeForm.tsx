'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  dict: Dictionary['newsletter']
  locale: string
}

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

export default function SubscribeForm({ dict, locale }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, locale }),
      })
      const data = await res.json()

      if (data.status === 'duplicate') {
        setStatus('duplicate')
      } else if (data.status === 'ok') {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="grid gap-4 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.placeholder}
          className="flex-1 bg-white border border-[#ead9d3] rounded-full px-6 py-3 font-sans text-plum placeholder:text-slate/50 focus:outline-none focus:border-rose transition-colors duration-200"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full px-8 py-3 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
            boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
          }}
        >
          {status === 'loading' ? '...' : dict.submit}
        </button>
      </form>

      {status === 'success' && (
        <p className="text-sm text-emerald-700 bg-emerald-50/60 border border-emerald-200 rounded-full px-5 py-2.5 text-center">
          {dict.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-rose border border-[#ead9d3] bg-[#fff5f2] rounded-full px-5 py-2.5 text-center">
          {dict.error}
        </p>
      )}
      {status === 'duplicate' && (
        <p className="text-sm text-plum bg-[#f4ece8] border border-[#ead9d3] rounded-full px-5 py-2.5 text-center">
          {dict.duplicate}
        </p>
      )}
    </div>
  )
}
