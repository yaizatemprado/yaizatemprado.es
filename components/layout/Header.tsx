'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  locale: string
  dict: Dictionary['nav']
}

const NAV_SECTIONS = ['about', 'expertise', 'services', 'contact'] as const

export default function Header({ locale, dict }: Props) {
  const [activeHash, setActiveHash] = useState('#about')
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

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
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sections.forEach((s) => observerRef.current?.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  const navLinks = [
    { href: `/${locale}#about`, label: dict.about },
    { href: `/${locale}#expertise`, label: dict.expertise },
    { href: `/${locale}#services`, label: dict.services },
    { href: `/${locale}#contact`, label: dict.contact },
  ]

  const linkClass = (href: string) => {
    const isActive = href.includes(activeHash)
    return [
      'no-underline font-medium transition-colors duration-200 relative pb-1.5',
      isActive
        ? 'text-anchor after:absolute after:left-0 after:bottom-0 after:w-4 after:h-0.5 after:rounded-full after:bg-anchor'
        : 'text-slate hover:text-rose',
    ].join(' ')
  }

  return (
    <header className="flex items-center justify-between gap-6 mb-10">
      <Link
        href={`/${locale}`}
        className="font-serif text-2xl tracking-[0.08em] uppercase text-anchor no-underline"
      >
        Yaiza Temprado
      </Link>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 text-anchor"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
          {menuOpen ? (
            <path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
          ) : (
            <path d="M3 18h18v-2H3v2Zm0-5h18v-2H3v2Zm0-7v2h18V6H3Z" />
          )}
        </svg>
      </button>

      {/* Desktop nav */}
      <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-[0.9rem]">
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} className={linkClass(href)}>
            {label}
          </a>
        ))}
        <LanguageSwitcher locale={locale} />
      </nav>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          aria-label="Primary"
          className="absolute top-20 left-0 right-0 z-50 bg-cream border-b border-[#ead9d3] px-6 py-6 flex flex-col gap-5 text-[1rem] md:hidden"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={linkClass(href)}
            >
              {label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>
      )}
    </header>
  )
}

function LanguageSwitcher({ locale }: { locale: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[0.82rem] font-semibold tracking-wide">
      {locale === 'es' ? (
        <span className="text-anchor">ES</span>
      ) : (
        <Link href="/es" className="text-slate hover:text-rose transition-colors duration-200 no-underline">
          ES
        </Link>
      )}
      <span className="text-slate opacity-40" aria-hidden="true">|</span>
      {locale === 'en' ? (
        <span className="text-anchor">EN</span>
      ) : (
        <Link href="/en" className="text-slate hover:text-rose transition-colors duration-200 no-underline">
          EN
        </Link>
      )}
    </div>
  )
}
