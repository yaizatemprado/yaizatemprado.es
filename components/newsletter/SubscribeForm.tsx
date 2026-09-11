'use client'

import { useState } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  dict: Dictionary['newsletter']
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const KIT_FORM_URL = 'https://app.kit.com/forms/9195993/subscriptions'

export default function SubscribeForm({ dict }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    try {
      const body = new FormData()
      body.append('email_address', email)

      const res = await fetch(KIT_FORM_URL, {
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
    <div className="grid gap-4 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.placeholder}
          className="flex-1 bg-white border border-line rounded-xl px-5 py-3 font-sans text-plum placeholder:text-slate/50 focus:outline-none focus:border-rose transition-colors duration-200"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl px-8 py-3 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
          style={{
            background: '#cc6c4e',
            boxShadow: '0 6px 14px rgba(46, 35, 36, 0.12)',
          }}
        >
          {status === 'loading' ? '...' : dict.submit}
        </button>
      </form>

      {status === 'success' && (
        <p className="text-sm text-emerald-700 bg-emerald-50/60 border border-emerald-200 rounded-xl px-5 py-2.5 text-center">
          {dict.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-rose border border-line bg-stone rounded-xl px-5 py-2.5 text-center">
          {dict.error}
        </p>
      )}
    </div>
  )
}
