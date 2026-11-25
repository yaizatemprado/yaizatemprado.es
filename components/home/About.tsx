import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/types'
import { SectionHeader } from '@/components/ui/Section'

type Props = { dict: Dictionary['about'] }

// Photo left, text right: the mirror of the hero, so the page reads in a zigzag. Laura's photo 21 (Nov 2026)
// flipped horizontally (yaiza-21-espejo.webp) so Yaiza turns towards the text (her call, 25/11).
// On phones the heading comes first, then the photo, then the text.
export default function About({ dict }: Props) {
  return (
    <section
      id="about"
      className="grid gap-8 lg:gap-x-16 lg:gap-y-6 items-start lg:grid-rows-[auto_1fr] lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] max-w-[1080px] mx-auto"
    >
      <div className="lg:col-start-2 lg:row-start-1">
        <SectionHeader eyebrow={dict.eyebrow} title={dict.heading} />
      </div>

      <div
        className="lg:col-start-1 lg:row-start-1 lg:row-span-2 w-full max-w-[420px] mx-auto lg:mx-0 aspect-[2/3] rounded-[20px] overflow-hidden border border-line bg-white"
        style={{ boxShadow: '0 20px 40px rgba(46, 35, 36, 0.12)' }}
      >
        <Image
          src="/assets/yaiza-21-espejo.webp"
          alt="Yaiza Temprado"
          width={1000}
          height={1500}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid gap-[18px] text-slate text-[0.95rem] sm:text-[1rem] leading-[1.7] lg:col-start-2 lg:row-start-2">
        <p>{dict.p1}</p>
        <p>{dict.p2}</p>
        <p>{dict.p3}</p>
      </div>
    </section>
  )
}
