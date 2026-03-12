'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  locale: string
  dict: Dictionary['nav']
}

const NAV_SECTIONS = ['about', 'expertise', 'contact'] as const

export default function Header({ locale, dict }: Props) {
  const [activeHash, setActiveHash] = useState('#about')
  const observerRef = useRef<IntersectionObserver | null>(null)
  const otherLocale = locale === 'en' ? 'es' : 'en'

  useEffect(() => {
    const hash = window.location.hash
    if (hash) setActiveHash(hash)

    const sections = NAV_SECTIONS.map((id) =>
      document.querySelector<HTMLElement>(`#${id}`)
    ).filter(Boolean) as HTMLElement[]

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )

    sections.forEach((s) => observerRef.current?.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  const navLinks = [
    { href: '#about', label: dict.about },
    { href: '#expertise', label: dict.expertise },
    { href: '#contact', label: dict.contact },
  ]

  return (
    <header className="flex items-center justify-between gap-6 mb-10">
      <Link
        href={`/${locale}`}
        className="font-serif text-2xl tracking-[0.08em] uppercase text-anchor no-underline"
      >
        Yaiza Temprado
      </Link>

      <nav aria-label="Primary" className="flex items-center gap-7 text-[0.9rem]">
        {navLinks.map(({ href, label }) => {
          const isActive = activeHash === href
          return (
            <a
              key={href}
              href={href}
              className={[
                'no-underline font-medium transition-colors duration-200 relative pb-1.5',
                isActive
                  ? 'text-anchor after:absolute after:left-0 after:bottom-0 after:w-4 after:h-0.5 after:rounded-full after:bg-anchor'
                  : 'text-slate hover:text-rose',
              ].join(' ')}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
            </a>
          )
        })}

        <Link
          href={`/${locale}/newsletter`}
          className="no-underline font-medium text-slate hover:text-rose transition-colors duration-200 relative pb-1.5"
        >
          {dict.book}
        </Link>

        <div className="flex items-center gap-1.5 ml-1 text-[0.82rem] font-semibold tracking-wide" aria-label="Language">
          {locale === 'en' ? (
            <span className="text-anchor">EN</span>
          ) : (
            <Link href="/en" className="text-slate hover:text-rose transition-colors duration-200 no-underline">
              EN
            </Link>
          )}
          <span className="text-slate opacity-40" aria-hidden="true">|</span>
          {locale === 'es' ? (
            <span className="text-anchor">ES</span>
          ) : (
            <Link href="/es" className="text-slate hover:text-rose transition-colors duration-200 no-underline">
              ES
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
