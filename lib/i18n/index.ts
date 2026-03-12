import type { Dictionary } from './types'

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./en').then((m) => m.default),
  es: () => import('./es').then((m) => m.default),
}

export async function getDictionary(locale: string): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en
  return loader()
}

export const locales = ['en', 'es'] as const
export const defaultLocale = 'en'
export type Locale = (typeof locales)[number]
