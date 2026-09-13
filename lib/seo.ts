import type { Metadata } from 'next'
import { defaultLocale, locales } from './i18n'

export const SITE_URL = 'https://yaizatemprado.es'

export const SAME_AS = [
  'https://www.linkedin.com/in/yaiza/',
  'https://www.instagram.com/yaizatemprado',
  'https://www.tiktok.com/@yaizatemprado',
]

/**
 * Canonical + hreflang for one page in every locale.
 *
 * `path` is the part of the route the two languages share, with no locale and
 * no slashes at the ends: '' for the home, 'empresas', 'programas/<slug>'.
 * x-default points at Spanish: it is the default locale and the one the bare
 * domain resolves to.
 *
 * `available` narrows the locales for pages written in one language only (the
 * Spanish articles), so no hreflang points at a page that does not exist.
 */
export function alternates(
  locale: string,
  path = '',
  available: readonly string[] = locales,
): Metadata['alternates'] {
  const tail = path ? `${path}/` : ''
  const languages: Record<string, string> = {}
  for (const l of available) languages[l] = `/${l}/${tail}`
  languages['x-default'] = `/${available.includes(defaultLocale) ? defaultLocale : available[0]}/${tail}`
  return { canonical: `/${locale}/${tail}`, languages }
}

/**
 * The social card. Pages that declare their own `openGraph` replace the one in
 * the root layout, image included, so every page that sets a title has to hand
 * the image back or it ships without a card.
 */
export function openGraph(
  locale: string,
  title: string,
  description: string,
  path = '',
): Metadata['openGraph'] {
  const tail = path ? `${path}/` : ''
  return {
    type: 'website',
    title,
    description,
    url: `${SITE_URL}/${locale}/${tail}`,
    locale: locale === 'en' ? 'en_GB' : 'es_ES',
    images: [
      {
        url: '/assets/yaiza-og.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }
}

/**
 * Pulls the euro figure out of a visible price line, so the schema always
 * quotes the same number the reader sees instead of a hardcoded copy of it.
 * Handles both '790 €' and '€790', and both '1.200' and '1,200'. Whole euros
 * only, which is what the site quotes.
 */
export function euroAmount(text: string): string | null {
  const match = text.match(/([\d][\d.,]*)\s*€/) ?? text.match(/€\s*([\d][\d.,]*)/)
  if (!match) return null
  const digits = match[1].replace(/\D/g, '')
  return digits || null
}
