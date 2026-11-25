'use client'

import { useEffect, useRef, useState } from 'react'
import { BRAND } from '@/lib/clubpericia'

type Quote = { quote: string; who: string }

// Standard reviews carousel (Yaiza, 25/11, with a reference): initial in a circle, name and role, stars, the
// quote, and dots underneath. Two per page on wide screens, one on phones. Moves by page; swipe works on touch.
export default function ProofCarousel({ items }: { items: Quote[] }) {
  const [perPage, setPerPage] = useState(2)
  const [page, setPage] = useState(0)
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setPerPage(mq.matches ? 2 : 1)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const pages = Math.ceil(items.length / perPage)
  const current = Math.min(page, pages - 1)
  const go = (p: number) => setPage((p + pages) % pages)

  return (
    <div className="grid gap-6">
      <div
        className="overflow-hidden -mx-3"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 40) go(current + (dx < 0 ? 1 : -1))
          touchX.current = null
        }}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((t) => {
            const [name, ...rest] = t.who.split(', ')
            return (
              <figure
                key={t.who}
                className="shrink-0 px-3 m-0"
                style={{ width: `${100 / perPage}%` }}
                aria-roledescription="opinión"
              >
                <div className="grid gap-4 h-full pb-6 border-b" style={{ borderColor: '#EADFD8' }}>
                  <figcaption className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="w-11 h-11 rounded-full grid place-items-center text-[1.1rem] font-extrabold shrink-0"
                      style={{ background: BRAND.night, color: BRAND.cream }}
                    >
                      {name.charAt(0)}
                    </span>
                    <span className="grid min-h-[2.6rem] content-center">
                      <span className="font-bold text-[0.98rem]" style={{ color: BRAND.night }}>{name}</span>
                      {rest.length > 0 && <span className="text-slate text-[0.85rem]">{rest.join(', ')}</span>}
                    </span>
                  </figcaption>
                  <p aria-label="5 estrellas" className="m-0 text-[1.15rem] tracking-[0.12em]" style={{ color: BRAND.terracotta }}>
                    ★★★★★
                  </p>
                  <blockquote className="m-0 text-[1rem] leading-[1.65]" style={{ color: BRAND.night }}>
                    {t.quote}
                  </blockquote>
                </div>
              </figure>
            )
          })}
        </div>
      </div>

      {pages > 1 && (
        <div className="flex justify-center gap-2.5" role="tablist" aria-label="Opiniones">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Página ${i + 1}`}
              onClick={() => go(i)}
              className="w-2.5 h-2.5 rounded-full transition-colors duration-200"
              style={{ background: i === current ? BRAND.night : '#D9D0CA' }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
