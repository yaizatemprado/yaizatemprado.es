import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'

type Props = {
  dict: Dictionary['footer']
  nav: Dictionary['nav']
  locale: string
}

export default function Footer({ dict, nav, locale }: Props) {
  const links = [
    { href: `/${locale}#about`, label: nav.about },
    { href: `/${locale}#services`, label: nav.services },
    { href: `/${locale}/recursos`, label: nav.resources },
    { href: `/${locale}#contact`, label: nav.contact },
  ]

  return (
    <footer className="mt-24 py-8 border-t border-blush text-center text-[0.85rem] text-slate">
      <nav
        aria-label="Footer"
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4"
      >
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="no-underline text-slate hover:text-rose transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>
      <p>© {new Date().getFullYear()} Yaiza Temprado. {dict.rights}</p>
    </footer>
  )
}
