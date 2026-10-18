import { getDictionary, locales } from '@/lib/i18n'
import { SITE_URL } from '@/lib/seo'
import { articleHref, articlesFor } from '@/lib/articles'

export const dynamic = 'force-static'

/**
 * llms.txt (llmstxt.org): a plain map of the site for language models, so they
 * know what is here and which URL answers what. Built from the dictionaries and
 * lib/articles, like the sitemap, so new pages enter on their own.
 *
 * No copy of its own: every line is a title or description the site already
 * publishes. Spanish first, it is the default locale.
 */
const headings: Record<string, { programs: string; companies: string; articles: string; guides: string }> = {
  es: { programs: 'Programas', companies: 'Empresas', articles: 'Artículos', guides: 'Guías' },
  en: { programs: 'Programmes', companies: 'Companies', articles: 'Articles', guides: 'Guides' },
}

const link = (title: string, path: string, note?: string) =>
  `- [${title}](${SITE_URL}${path})${note ? `: ${note}` : ''}`

async function section(locale: string): Promise<string[]> {
  const dict = await getDictionary(locale)
  const h = headings[locale]
  const lang = locale === 'es' ? 'Español' : 'English'

  return [
    `## ${lang}`,
    '',
    link(dict.meta.title, `/${locale}/`, dict.meta.description),
    '',
    `### ${h.programs}`,
    '',
    ...dict.programs.items.map((p) => link(p.title, `/${locale}/programas/${p.slug}/`, p.forWho)),
    '',
    `### ${h.companies}`,
    '',
    link(dict.companies.heading, `/${locale}/empresas/`, dict.companies.lead),
    '',
    `### ${h.articles}`,
    '',
    ...articlesFor(locale).map((a) =>
      link(a.title, articleHref(a.translationOf ?? a.slug, locale), a.description),
    ),
    '',
    `### ${h.guides}`,
    '',
    ...dict.resources.items.map((g) => link(g.title, `/${locale}/recursos/${g.slug}/`, g.summary)),
    '',
  ]
}

export async function GET() {
  const es = await getDictionary('es')
  const body = [
    '# Yaiza Temprado',
    '',
    `> ${es.meta.description}`,
    '',
    ...(await Promise.all(locales.map(section))).flat(),
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
