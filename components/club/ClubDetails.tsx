import { club, BRAND } from '@/lib/clubpericia'
import { Ctas } from './ClubSections'

const h2 = 'font-sans font-extrabold text-[1.5rem] sm:text-[1.85rem] leading-[1.2] tracking-[-0.01em]'
const body = 'text-slate leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'

export function Edition() {
  return (
    <section className="grid gap-4 rounded-[14px] px-6 py-6 border" style={{ background: BRAND.cream, borderColor: '#EADFD8' }}>
      <h2 className={h2} style={{ color: BRAND.night }}>{club.editionHeading}</h2>
      <ul className="grid gap-1.5 list-disc pl-5 text-slate text-[0.94rem] leading-[1.6]">
        {club.editionBullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p className="text-[1rem] font-extrabold" style={{ color: BRAND.terracotta }}>{club.editionNote}</p>
      <Ctas primaryOnly />
    </section>
  )
}

export function Who() {
  return (
    <section className="grid gap-2">
      <h2 className={h2} style={{ color: BRAND.night }}>{club.whoHeading}</h2>
      <p className={body}>{club.whoBody}</p>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="grid gap-4">
      <h2 className={h2} style={{ color: BRAND.night }}>{club.testimonialsHeading}</h2>
      {club.testimonials.map((t) => (
        <figure key={t.name} className="m-0 rounded-[14px] border bg-white px-6 py-6 grid gap-3" style={{ borderColor: '#EADFD8' }}>
          <blockquote className="m-0 text-[1.02rem] leading-[1.7]" style={{ color: BRAND.night }}>
            «{t.quote}»
          </blockquote>
          <figcaption className="text-[0.9rem] font-bold" style={{ color: BRAND.terracotta }}>{t.name}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export function Faq() {
  return (
    <section className="grid gap-3">
      <h2 className={h2} style={{ color: BRAND.night }}>{club.faqHeading}</h2>
      <div className="grid gap-2">
        {club.faq.map((f) => (
          <details key={f.q} className="rounded-[12px] border bg-white px-5 py-4" style={{ borderColor: '#EADFD8' }}>
            <summary className="cursor-pointer font-bold text-[0.98rem]" style={{ color: BRAND.night }}>{f.q}</summary>
            <p className="mt-2 text-slate text-[0.94rem] leading-[1.6]">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function Closing() {
  return (
    <div className="grid gap-5 justify-items-center text-center rounded-[20px] px-6 py-10" style={{ background: BRAND.night, color: BRAND.cream }}>
      <p className="text-[1.15rem] font-extrabold max-w-[520px]">{club.closing}</p>
      <Ctas onDark />
    </div>
  )
}
