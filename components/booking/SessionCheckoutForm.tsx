'use client'

import { useState } from 'react'

export default function SessionCheckoutForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })

    if (!res.ok) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6 max-w-[480px]">
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

      {error && <p className="text-[0.9rem] text-rose">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="justify-self-start rounded-full px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-all duration-200 hover:-translate-y-px disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
        style={{
          background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
          boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
        }}
      >
        {loading ? 'Redirecting…' : 'Continue to payment →'}
      </button>
    </form>
  )
}
