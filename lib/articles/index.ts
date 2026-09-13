import type { Article, Paragraph } from './types'
import queLoPagueTuEmpresaEs from './que-lo-pague-tu-empresa.es'
import queLoPagueTuEmpresaEn from './que-lo-pague-tu-empresa.en'

export type { Article, ArticleSection, Paragraph, Run } from './types'

// One entry per slug per locale. A slug can exist in one language or in both.
export const articles: Article[] = [queLoPagueTuEmpresaEs, queLoPagueTuEmpresaEn]

export function articlesFor(locale: string): Article[] {
  return articles.filter((a) => a.locale === locale)
}

export function getArticle(slug: string, locale: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.locale === locale)
}

/** Locales a slug is published in, for static params, hreflang and the sitemap. */
export function localesOf(slug: string): string[] {
  return articles.filter((a) => a.slug === slug).map((a) => a.locale)
}

/** Unique slugs across locales. */
export function articleSlugs(): string[] {
  return Array.from(new Set(articles.map((a) => a.slug)))
}

/** Plain text of a paragraph, for schema answers and meta fields. */
export function plainText(paragraphs: Paragraph[]): string {
  return paragraphs
    .map((p) => p.map((r) => (typeof r === 'string' ? r : r.text)).join(''))
    .join(' ')
}
