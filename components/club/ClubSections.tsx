import { club, BRAND, PRIMARY, DIAGNOSTIC_URL } from '@/lib/clubpericia'

// Pericia look: night blue, terracotta and cream, Manrope throughout (no Playfair),
// so the club reads as its own brand inside the personal site.
const h2 = 'font-sans font-extrabold text-[1.5rem] sm:text-[1.85rem] leading-[1.2] tracking-[-0.01em]'
const body = 'leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'
const card = 'rounded-[14px] px-5 py-5 border'

export function Ctas({ onDark = false, primaryOnly = false }: { onDark?: boolean; primaryOnly?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={PRIMARY.href}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline transition-opacity hover:opacity-90"
        style={{ background: BRAND.terracotta, color: BRAND.cream }}
      >
        {PRIMARY.label}
      </a>
      {!primaryOnly && (
      <a
        href={DIAGNOSTIC_URL}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline border transition-opacity hover:opacity-80"
        style={{ borderColor: onDark ? BRAND.cream : BRAND.night, color: onDark ? BRAND.cream : BRAND.night }}
      >
        {club.ctaSecondary}
      </a>
      )}
    </div>
  )
}

export function Hero() {
  return (
    <header className="grid gap-5 rounded-[20px] px-6 py-10 sm:px-12 sm:py-14" style={{ background: BRAND.night, color: BRAND.cream }}>
      <span className="text-[0.78rem] font-extrabold tracking-[0.2em] uppercase" style={{ color: BRAND.terracotta }}>
        {club.eyebrow}
      </span>
      <h1 className="font-sans font-extrabold leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.1rem)' }}>
        {club.heading}
      </h1>
      <p className={`${body} opacity-90 max-w-[640px]`}>{club.lead}</p>
      <div className="mt-2">
        <Ctas onDark />
      </div>
    </header>
  )
}

export function Scenes() {
  return (
    <section className="grid gap-4">
      <h2 className={h2} style={{ color: BRAND.night }}>{club.scenesHeading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {club.scenes.map((s) => (
          <div key={s.title} className={`${card} grid gap-2 bg-white`} style={{ borderColor: '#EADFD8' }}>
            <h3 className="text-[1.05rem] font-bold" style={{ color: BRAND.night }}>{s.title}</h3>
            <p className="text-slate text-[0.95rem] leading-[1.65]">{s.body}</p>
          </div>
        ))}
      </div>
      <p className={`${body} font-semibold`} style={{ color: BRAND.night }}>{club.scenesClose}</p>
    </section>
  )
}

export function Outcomes() {
  return (
    <section className="grid gap-4">
      <h2 className={h2} style={{ color: BRAND.night }}>{club.outcomesHeading}</h2>
      <ul className="grid gap-3 list-none p-0 m-0">
        {club.outcomes.map((o) => (
          <li key={o} className="flex gap-3 items-start text-slate text-[0.98rem] leading-[1.6]">
            <span className="shrink-0 mt-[0.45rem] w-2.5 h-2.5 rotate-45" style={{ background: BRAND.terracotta }} />
            {o}
          </li>
        ))}
      </ul>
    </section>
  )
}

export function Numbered({ heading, items }: { heading: string; items: { title: string; body: string }[] }) {
  return (
    <section className="grid gap-4">
      <h2 className={h2} style={{ color: BRAND.night }}>{heading}</h2>
      <ol className="grid gap-3 list-none p-0 m-0">
        {items.map((m, i) => (
          <li key={m.title} className={`${card} flex gap-4 items-start bg-white`} style={{ borderColor: '#EADFD8' }}>
            <span
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[0.9rem] font-extrabold"
              style={{ background: BRAND.night, color: BRAND.cream }}
            >
              {i + 1}
            </span>
            <div className="grid gap-1">
              <h3 className="text-[1rem] font-bold" style={{ color: BRAND.night }}>{m.title}</h3>
              <p className="text-slate text-[0.93rem] leading-[1.6]">{m.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
