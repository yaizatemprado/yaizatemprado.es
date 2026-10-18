import type { Article, Paragraph } from './types'
import queLoPagueTuEmpresaEs from './que-lo-pague-tu-empresa.es'
import queLoPagueTuEmpresaEn from './que-lo-pague-tu-empresa.en'
import presenciaEjecutivaEs from './presencia-ejecutiva.es'
import executivePresenceEn from './executive-presence.en'
import comoHablarEnReunionesEs from './como-hablar-en-reuniones-de-trabajo.es'
import howToSpeakUpEn from './how-to-speak-up-in-meetings.en'
import comoHablarConTuJefeEs from './como-hablar-con-tu-jefe-de-un-problema.es'
import howToTalkToYourBossEn from './how-to-talk-to-your-boss-about-a-problem.en'
import comoGestionarLasEmocionesEs from './como-gestionar-las-emociones-en-el-trabajo.es'
import howToManageEmotionsEn from './how-to-manage-emotions-at-work.en'
import comoTenerAutoridadEs from './como-tener-autoridad-en-el-trabajo.es'
import howToHaveAuthorityEn from './how-to-have-authority-at-work.en'
import comoConseguirUnAscensoEs from './como-conseguir-un-ascenso-en-el-trabajo.es'
import howToGetPromotedEn from './how-to-get-promoted-to-director.en'
import mePrometieronUnAscensoEs from './me-prometieron-un-ascenso-y-no-me-lo-dieron.es'
import promisedAPromotionEn from './promised-a-promotion-and-didnt-get-it.en'
import noMeValoranEs from './no-me-valoran-en-el-trabajo.es'
import iFeelUndervaluedEn from './i-feel-undervalued-at-work.en'
import miedoAEquivocarmeEs from './miedo-a-equivocarme-en-el-trabajo.es'
import fearOfMakingMistakesEn from './fear-of-making-mistakes-at-work.en'

export type { Article, ArticleSection, Block, ListItem, Paragraph, Run } from './types'

// One entry per locale. An English copy has its own slug and points at the
// Spanish one with translationOf.
export const articles: Article[] = [
  queLoPagueTuEmpresaEs,
  queLoPagueTuEmpresaEn,
  presenciaEjecutivaEs,
  executivePresenceEn,
  comoHablarEnReunionesEs,
  howToSpeakUpEn,
  comoHablarConTuJefeEs,
  howToTalkToYourBossEn,
  comoGestionarLasEmocionesEs,
  howToManageEmotionsEn,
  comoTenerAutoridadEs,
  howToHaveAuthorityEn,
  comoConseguirUnAscensoEs,
  howToGetPromotedEn,
  mePrometieronUnAscensoEs,
  promisedAPromotionEn,
  noMeValoranEs,
  iFeelUndervaluedEn,
  miedoAEquivocarmeEs,
  fearOfMakingMistakesEn,
]

export function articlesFor(locale: string): Article[] {
  return articles.filter((a) => a.locale === locale)
}

export function getArticle(slug: string, locale: string): Article | undefined {
  return articles.find((a) => a.slug === slug && a.locale === locale)
}

/** Locales a slug is published in, for static params. */
export function localesOf(slug: string): string[] {
  return articles.filter((a) => a.slug === slug).map((a) => a.locale)
}

/** The Spanish slug that groups an article with its translations. */
export function keyOf(article: Article): string {
  return article.translationOf ?? article.slug
}

/** Every copy of the article published under `slug`, as locale → slug. */
export function translationsOf(slug: string): Record<string, string> {
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  const key = keyOf(article)
  return Object.fromEntries(articles.filter((a) => keyOf(a) === key).map((a) => [a.locale, a.slug]))
}

/** Route of each copy, locale → 'recursos/<slug>', for hreflang. */
export function articlePaths(slug: string): Record<string, string> {
  return Object.fromEntries(Object.entries(translationsOf(slug)).map(([l, s]) => [l, `recursos/${s}`]))
}

/** Link to an article in `locale`, by its Spanish slug. */
export function articleHref(key: string, locale: string): string {
  const slug = translationsOf(key)[locale] ?? key
  return `/${locale}/recursos/${slug}/`
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

/** Plain text of a FAQ answer, list items included, for the FAQPage schema. */
export function faqText(item: Article['faq'][number]): string {
  const listItems = (item.blocks ?? []).flatMap((b) =>
    b.kind === 'list'
      ? b.items.flatMap((li) => (Array.isArray(li) ? [li] : [li.text, ...li.items]))
      : b.kind === 'p'
        ? [b.text]
        : [],
  )
  return plainText([...item.answer, ...listItems])
}
