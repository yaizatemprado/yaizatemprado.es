# Next.js migration + i18n design

## Goal

Migrate the static HTML/CSS site to Next.js 14 (App Router) with English and Spanish support. English is the default locale. Users can switch via URL (`/en`, `/es`) and a visible toggle in the nav.

## Routing

- `/` redirects to `/en` via middleware
- `/en` serves the English site
- `/es` serves the Spanish site
- Unknown locales fall back to `/en`

No legacy `i18n` config in `next.config.ts` — routing is handled purely through the `[locale]` App Router segment and middleware.

## Project structure

```
app/
  [locale]/
    layout.tsx      sets <html lang>, loads fonts, wraps page
    page.tsx        composes all section components
middleware.ts       enforces locale routing
src/
  i18n/
    types.ts        Dictionary type shared by both locale files
    en.ts           English strings
    es.ts           Spanish strings
    index.ts        getDictionary(locale) helper
  components/
    Nav.tsx         includes locale toggle (links to /en or /es)
    Hero.tsx
    About.tsx
    Expertise.tsx
    Proof.tsx
    Connect.tsx
```

## Translation files

A shared `Dictionary` TypeScript type enforces that both locale files stay in sync. `getDictionary` dynamically imports the right file — Next.js code-splits them so Spanish strings are never sent to English users.

```ts
// src/i18n/types.ts
export type Dictionary = {
  nav: { about: string; expertise: string; contact: string }
  hero: { eyebrow: string; heading: string; lead: string; ctaPrimary: string; ctaSecondary: string }
  about: {
    eyebrow: string; heading: string
    p1: string; p2: string; p3: string
    metrics: {
      years: { value: string; label: string }
      engineers: { value: string; label: string }
      companies: { value: string; label: string }
      transitions: { value: string; label: string }
    }
  }
  expertise: {
    eyebrow: string; heading: string
    cards: { heading: string; body: string }[]
  }
  proof: {
    eyebrow: string; heading: string
    cards: { label: string; body: string }[]
  }
  connect: { eyebrow: string; heading: string; lead: string }
}
```

## Locale toggle

The `Nav` component receives `locale` as a prop and renders a text toggle in the top-right nav:

```
About   Expertise   Contact   EN | ES
```

The active locale is visually distinct (font weight). The toggle is a plain `<Link>` — no client-side JS needed. It always points to `/{otherLocale}`.

## Tech stack

- Next.js 14 App Router
- TypeScript (strict)
- Tailwind CSS (replicating existing styles)
- shadcn/ui for any interactive components
- No i18n library — plain TS objects are sufficient for a single-page site

## Content

Spanish translations are derived from the existing English copy. Both files satisfy the `Dictionary` type.
