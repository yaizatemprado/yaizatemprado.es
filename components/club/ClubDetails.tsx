import { club, BRAND } from '@/lib/clubpericia'
import { Ctas, SectionTitle, line } from './ClubSections'

// Right under the hero (Yaiza, 25/11): the facts someone checks before buying, in one row between lines, and the button.
export function Edition() {
  return (
    <section id="lista" className="grid gap-5 scroll-mt-24">
      <p className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase" style={{ color: BRAND.terracotta }}>
        {club.editionHeading}
      </p>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center border-y py-6" style={{ borderColor: line }}>
        <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 m-0">
          {club.editionFacts.map((f) => (
            <div key={f.label} className="grid gap-1 content-start">
              <dt className="text-[0.72rem] font-extrabold tracking-[0.14em] uppercase" style={{ color: BRAND.terracotta }}>{f.label}</dt>
              <dd className="m-0 text-[0.96rem] font-semibold leading-[1.45]" style={{ color: BRAND.night }}>{f.value}</dd>
            </div>
          ))}
        </dl>
        <Ctas primaryOnly />
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="grid gap-6 md:grid-cols-[minmax(0,340px)_minmax(0,1fr)] md:gap-12">
      <SectionTitle>{club.faqHeading}</SectionTitle>
      <div className="border-b" style={{ borderColor: line }}>
        {club.faq.map((f) => (
          <details key={f.q} className="group border-t py-4" style={{ borderColor: line }}>
            <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-[0.98rem]" style={{ color: BRAND.night }}>
              {f.q}
              <span aria-hidden="true" className="shrink-0 text-[1.3rem] leading-none transition-transform duration-200 group-open:rotate-45" style={{ color: BRAND.terracotta }}>+</span>
            </summary>
            <p className="mt-2 text-slate text-[0.95rem] leading-[1.65] pr-8">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
