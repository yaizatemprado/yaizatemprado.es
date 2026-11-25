import { club, BRAND, PRIMARY, SALES_OPEN, WAITLIST_FORM_ACTION } from '@/lib/clubpericia'
import ProofCarousel from './ProofCarousel'
import Button from '@/components/ui/Button'

// Pericia look: night blue, terracotta and cream, Manrope throughout (no Playfair),
// so the club reads as its own brand inside the personal site.
const h2 = 'font-sans font-extrabold text-[1.5rem] sm:text-[1.85rem] leading-[1.2] tracking-[-0.01em]'
const body = 'leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'
// «CLUB» and «LIDERAZGO CON IA» around the wordmark, eyebrow size. With leading-none the baseline sits
// 0.117 em above the box bottom (Manrope), hence the translate to rest the tagline on the triangle's base.
// The tagline's tracking stretches it to end where the white bar ends (Yaiza, 10/11): its glyphs are 9.28 em
// wide, so 15 gaps fill 141 px on mobile (170 px wordmark, 12.5 px type) and 174 px on desktop (210 px, 15 px type,
// bigger so the letters don't drift apart).
const lockup = 'text-[0.78rem] font-extrabold tracking-[0.2em] uppercase leading-none'


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
        <button type="submit" className="btn-primary whitespace-nowrap">
          {PRIMARY.label}
        </button>
      </div>
      <p className={`text-[0.75rem] leading-[1.5] ${onDark ? 'opacity-70' : 'text-slate'}`}>{club.waitlistNote}</p>
    </form>
  )
}

export function Ctas({ onDark = false, primaryOnly = false, toForm = false, center = false }: { onDark?: boolean; primaryOnly?: boolean; toForm?: boolean; center?: boolean }) {
  // Sin botón secundario desde el 25/11/2026: el diagnóstico de 15 min sale de todos los CTA del Club (Yaiza).
  const secondary = null

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
    <div className={`flex flex-wrap gap-3 ${center ? 'justify-center' : ''}`}>
      <Button href={primaryHref} external={SALES_OPEN}>
        {PRIMARY.label}
      </Button>
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

// Look aligned with the home (Yaiza, 25/11): same 1080 px column as the menu, lists between thin lines instead of
// boxes, terracotta bars. Pericia colours and Manrope stay, so the club still reads as its own brand.
export const line = '#EADFD8'

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={h2} style={{ color: BRAND.night }}>{children}</h2>
}

export function Hero() {
  return (
    <header
      className="grid lg:grid-cols-[minmax(0,1fr)_400px] rounded-[20px] overflow-hidden"
      style={{ background: BRAND.night, color: BRAND.cream }}
    >
      <div className="grid gap-5 content-center px-6 py-10 sm:px-12 sm:py-14 order-2 lg:order-1">
        <ClubLockup />
        <h1 className="font-sans font-extrabold leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.9rem, 4.4vw, 3.1rem)' }}>
          {club.heading}
        </h1>
        <p className={`${body} opacity-90 max-w-[600px]`}>{club.lead}</p>
        <div className="mt-2">
          <Ctas onDark />
        </div>
      </div>
      {/* Laura's photo 29 (Nov 2026), blue wall: it sits on the night blue and fills its column edge to edge. */}
      <img
        src="/assets/yaiza-29.webp"
        alt="Yaiza Temprado"
        width={800}
        height={1200}
        className="order-1 lg:order-2 w-full h-[80vw] max-h-[480px] lg:max-h-none lg:h-full object-cover object-[50%_30%]"
      />
    </header>
  )
}

// Two-column row: title with a terracotta bar on the left, text on the right. Same as the home's lists.
export function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 md:gap-12 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] py-6 border-t" style={{ borderColor: line }}>
      <h3 className="self-start border-l-[3px] pl-3.5 text-[1.15rem] sm:text-[1.25rem] font-bold leading-[1.35]" style={{ borderColor: BRAND.terracotta, color: BRAND.night }}>
        {title}
      </h3>
      <div className="text-slate text-[0.98rem] leading-[1.7]">{children}</div>
    </div>
  )
}

export function Scenes() {
  return (
    <section className="grid gap-6">
      <SectionTitle>{club.scenesHeading}</SectionTitle>
      <div className="border-b" style={{ borderColor: line }}>
        {club.scenes.map((s) => (
          <Row key={s.title} title={s.title}>{s.body}</Row>
        ))}
      </div>
      <p className={`${body} font-semibold max-w-[760px]`} style={{ color: BRAND.night }}>{club.scenesClose}</p>
    </section>
  )
}

export function Outcomes() {
  return (
    <section className="grid gap-6">
      <SectionTitle>{club.outcomesHeading}</SectionTitle>
      <ul className="grid gap-x-12 gap-y-4 md:grid-cols-2 list-none p-0 m-0">
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

export function Proof() {
  return (
    <section className="grid gap-6">
      <SectionTitle>{club.proofHeading}</SectionTitle>
      <ProofCarousel items={club.proof} />
    </section>
  )
}

export function Numbered({ heading, items }: { heading: string; items: { title: string; body: string }[] }) {
  return (
    <section className="grid gap-6">
      <SectionTitle>{heading}</SectionTitle>
      <div className="border-b" style={{ borderColor: line }}>
        {items.map((m) => (
          <Row key={m.title} title={m.title}>{m.body}</Row>
        ))}
      </div>
    </section>
  )
}
