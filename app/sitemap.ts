import type { MetadataRoute } from 'next'
import { defaultLocale, getDictionary, locales } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'
import { articles } from '@/lib/articles'

export const dynamic = 'force-static'

/**
 * One entry per page per language, each declaring the other language as an
 * alternate. Slugs are the same in both dictionaries, so the Spanish one is
 * enough to enumerate them.
 *
 * Articles are written in one locale only, so they get one entry and no
 * alternate in the other language.
 *
 * Deliberately out: /detector (a closed campaign landing living in public/) and
 * the deja-de-pedir-permiso stubs, which are noindex redirects to the renamed
 * programme and should not be offered up for indexing.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const dict = await getDictionary(defaultLocale)

  const pages: Array<{ path: string; priority: number; only?: string[] }> = [
    { path: '', priority: 1 },
    { path: 'empresas', priority: 0.9 },
    ...dict.programs.items.map((i) => ({
      path: `programas/${i.slug}`,
      priority: 0.8,
    })),
    ...dict.resources.items.map((i) => ({
      path: `recursos/${i.slug}`,
      priority: 0.7,
    })),
    ...articles.map((a) => ({ path: `recursos/${a.slug}`, priority: 0.7, only: [a.locale] })),
    { path: 'recursos', priority: 0.6 },
    { path: 'newsletter', priority: 0.5 },
  ]

  const url = (locale: string, path: string) =>
    `${SITE_URL}/${locale}/${path ? `${path}/` : ''}`

  const lastModified = new Date()

  return pages.flatMap(({ path, priority, only }) => {
    const langs = only ?? [...locales]
    return langs.map((locale) => ({
      url: url(locale, path),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(langs.map((l) => [l, url(l, path)])),
          'x-default': url(langs.includes(defaultLocale) ? defaultLocale : langs[0], path),
        },
      },
    }))
  })
}
