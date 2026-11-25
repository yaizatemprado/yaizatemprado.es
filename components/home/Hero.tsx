import Image from 'next/image'
import Button from '@/components/ui/Button'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['hero'] }

// The two buttons read as a pair: same width and height.
const pair = 'w-full sm:w-[250px] h-[62px]'

// Laura's photo 19 (Nov 2026), cropped just above the head (yaiza-19-hero.webp, 1383×1500). Yaiza chose it on
// 25/11 after the Jacqueline Misla reference: the photo itself turns transparent into the cream page (never a blur):
// from the left and the bottom on large screens, from the bottom on phones, where it is a band above the text.
const fadeDesktop =
  'linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 18%, rgba(0,0,0,.85) 36%, #000 48%), linear-gradient(180deg, #000 80%, transparent 100%)'
const fadeMobile = 'linear-gradient(180deg, #000 75%, transparent 100%)'

export default function Hero({ dict }: Props) {
  return (
    <section className="relative grid lg:min-h-[640px] lg:items-center">
      <div
        className="hero-photo order-first -mx-5 sm:-mx-6 -mt-4 mb-6 h-[100vw] max-h-[640px] lg:m-0 lg:max-h-none lg:h-auto lg:absolute lg:-top-4 lg:bottom-0 lg:right-[calc((100%-100vw)/2)] lg:w-[min(56vw,820px)] overflow-hidden"
        style={{ ['--fade-mobile' as string]: fadeMobile, ['--fade-desktop' as string]: fadeDesktop }}
      >
        <Image
          src="/assets/yaiza-19-hero.webp"
          alt="Yaiza Temprado"
          width={1383}
          height={1500}
          priority
          className="w-full h-full object-cover object-[50%_20%] lg:object-[100%_0%]"
        />
      </div>

      <div className="relative flex flex-col gap-5 max-w-[640px] lg:max-w-[600px] lg:py-10">
        {/* An eyebrow with " · " shows each part on its own line instead of wrapping mid-phrase. */}
        <span className="flex flex-col gap-1 text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {dict.eyebrow.split(' · ').map((part) => (
            <span key={part}>{part}</span>
          ))}
        </span>

        <h1
          className="font-serif text-anchor leading-[1.08] sm:leading-[1.05] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(2.05rem, 5.2vw, 4.1rem)' }}
        >
          {dict.heading}
        </h1>

        <p className="text-slate text-[0.98rem] sm:text-[1.05rem] leading-[1.7] max-w-[540px]">
          <Lead text={dict.lead} link={dict.leadLink} />
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Button href={dict.ctaPrimaryHref ?? '#services'} sub={dict.ctaPrimary.split(' · ')[1]} className={pair}>
            {dict.ctaPrimary.split(' · ')[0]}
          </Button>
          <Button href={dict.ctaSecondaryHref ?? '#contact'} variant="secondary" external={(dict.ctaSecondaryHref ?? '').startsWith('http')} className={pair}>
            {dict.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  )
}

function Lead({ text, link }: { text: string; link?: { text: string; href: string } }) {
  const at = link ? text.indexOf(link.text) : -1
  if (!link || at < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, at)}
      <a href={link.href} className="font-semibold text-rose underline underline-offset-[3px] decoration-1 hover:text-anchor">
        {link.text}
      </a>
      {text.slice(at + link.text.length)}
    </>
  )
}
