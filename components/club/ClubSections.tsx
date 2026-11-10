import { club, BRAND, PRIMARY, DIAGNOSTIC_URL, SALES_OPEN, WAITLIST_FORM_ACTION } from '@/lib/clubpericia'

// Pericia look: night blue, terracotta and cream, Manrope throughout (no Playfair),
// so the club reads as its own brand inside the personal site.
const h2 = 'font-sans font-extrabold text-[1.5rem] sm:text-[1.85rem] leading-[1.2] tracking-[-0.01em]'
const body = 'leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'
const card = 'rounded-[14px] px-5 py-5 border'
// «CLUB» and «LIDERAZGO CON IA» around the wordmark, eyebrow size. With leading-none the baseline sits
// 0.117 em above the box bottom (Manrope), hence the translate to rest the tagline on the triangle's base.
// The tagline's tracking stretches it to end where the white bar ends (Yaiza, 10/11): its glyphs are 9.28 em
// wide, so 15 gaps fill 141 px on mobile (170 px wordmark, 12.5 px type) and 174 px on desktop (210 px, 15 px type,
// bigger so the letters don't drift apart).
const lockup = 'text-[0.78rem] font-extrabold tracking-[0.2em] uppercase leading-none'

const pill = 'px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline transition-opacity'

// Before sales open the main action is an email box posting straight to the Kit form, so people join the
// waitlist without leaving the page. `toForm` (the closing box) links down to the form in «Primera edición»
// instead of repeating it.
export function WaitlistForm({ onDark = false }: { onDark?: boolean }) {
  return (
    <form action={WAITLIST_FORM_ACTION} method="post" className="grid gap-2 w-full max-w-[460px]">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor={onDark ? 'waitlist-email-top' : 'waitlist-email'} className="sr-only">Email</label>
        <input
          id={onDark ? 'waitlist-email-top' : 'waitlist-email'}
          type="email"
          name="email_address"
          required
          autoComplete="email"
          placeholder={club.waitlistPlaceholder}
          className="flex-1 min-w-0 px-5 py-3 rounded-full text-[0.95rem] outline-none border focus:ring-2"
          style={{ background: onDark ? BRAND.cream : '#fff', color: BRAND.night, borderColor: onDark ? BRAND.cream : '#EADFD8' }}
        />
        <button
          type="submit"
          className={`${pill} hover:opacity-90 whitespace-nowrap`}
          style={{ background: BRAND.terracotta, color: BRAND.cream }}
        >
          {PRIMARY.label}
        </button>
      </div>
      <p className={`text-[0.75rem] leading-[1.5] ${onDark ? 'opacity-70' : 'text-slate'}`}>{club.waitlistNote}</p>
    </form>
  )
}

export function Ctas({ onDark = false, primaryOnly = false, toForm = false }: { onDark?: boolean; primaryOnly?: boolean; toForm?: boolean }) {
  const secondary = !primaryOnly && (
    <a
      href={DIAGNOSTIC_URL}
      target="_blank"
      rel="noreferrer"
      className={`${pill} border hover:opacity-80`}
      style={{ borderColor: onDark ? BRAND.cream : BRAND.night, color: onDark ? BRAND.cream : BRAND.night }}
    >
      {club.ctaSecondary}
    </a>
  )

  if (!SALES_OPEN && !toForm) {
    return (
      <div className="grid gap-4">
        <WaitlistForm onDark={onDark} />
        {secondary && <div className="flex flex-wrap gap-3">{secondary}</div>}
      </div>
    )
  }

  const primaryHref = SALES_OPEN ? PRIMARY.href : '#lista'
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <a
        href={primaryHref}
        {...(SALES_OPEN ? { target: '_blank', rel: 'noreferrer' } : {})}
        className={`${pill} hover:opacity-90`}
        style={{ background: BRAND.terracotta, color: BRAND.cream }}
      >
        {PRIMARY.label}
      </a>
      {secondary}
    </div>
  )
}

export function ClubLockup() {
  return (
    <>
      {/* Lockup drawn by Yaiza (10/11): «CLUB» above Ali's wordmark, and «LIDERAZGO CON IA» running out from
          the triangle, both terracotta. The wordmark is pericia-wordmark-*.png (navy box cropped off), so its
          left edge is the «p» stem; the triangle sits at 79-100 % of its height and ends at ~14 % of its width. */}
      <div className="grid">
        <span className={`${lockup} block !text-[20px] -mb-[1.7px]`} style={{ color: BRAND.terracotta }}>Club</span>
        <div className="relative w-[170px] sm:w-[210px] mb-5 sm:mb-6">
          <img
            src="/assets/pericia-wordmark-400.png"
            srcSet="/assets/pericia-wordmark-400.png 1x, /assets/pericia-wordmark-800.png 2x"
            alt="Pericia"
            width={400}
            height={189}
            className="block w-full h-auto"
          />
          <span
            className={`${lockup} !tracking-[0.135em] sm:!text-[15px] sm:!tracking-[0.156em] absolute left-[17%] bottom-[0.3%] translate-y-[0.117em] whitespace-nowrap`}
            style={{ color: BRAND.terracotta }}
          >
            {club.eyebrow}
          </span>
        </div>
      </div>
    </>
  )
}

export function Hero() {
  return (
    <header className="grid gap-5 rounded-[20px] px-6 py-10 sm:px-12 sm:py-14" style={{ background: BRAND.night, color: BRAND.cream }}>
      <ClubLockup />
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
