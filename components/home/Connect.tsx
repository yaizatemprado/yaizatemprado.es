import type { Dictionary } from '@/lib/i18n/types'
import SubscribeForm from '@/components/newsletter/SubscribeForm'

type Props = {
  dict: Dictionary['connect']
  newsletterDict: Dictionary['newsletter']
}

const socialLinks = [
  {
    href: 'mailto:hola@yaizatemprado.es',
    label: 'Email',
    icon: (
      <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.01L12 13l8-4.99V8H4Zm0 10h16V10l-8 5-8-5Z" />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/yaiza/',
    label: 'LinkedIn',
    icon: (
      <path d="M6.94 8.5H4.25V20h2.69V8.5Zm-1.34-4a1.56 1.56 0 1 0 0 3.12 1.56 1.56 0 0 0 0-3.12ZM20 14.25V20h-2.69v-5.1c0-1.28-.46-2.15-1.61-2.15-.88 0-1.4.59-1.63 1.16-.08.2-.1.48-.1.76V20H11.28s.03-9.34 0-10.3h2.69v1.46c.36-.55 1-1.33 2.43-1.33 1.77 0 3.1 1.16 3.1 3.92Z" />
    ),
  },
  {
    href: 'https://www.instagram.com/yaizatemprado',
    label: 'Instagram',
    icon: (
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5Zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5Zm5.25-3.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
    ),
  },
  {
    href: 'https://www.tiktok.com/@yaizatemprado',
    label: 'TikTok',
    icon: (
      <path d="M14.5 3c.33 2.2 1.86 3.75 4 4.08v2.42c-1.5.04-2.9-.43-4-1.26V15a6 6 0 1 1-5-5.9v2.5a3.5 3.5 0 1 0 2.5 3.36V3h2.5Z" />
    ),
  },
]

const iconClass =
  'w-10 h-10 rounded-full bg-white/10 border border-white/15 grid place-items-center text-cream transition-transform duration-200 hover:-translate-y-px hover:bg-white/20 hover:border-peach'

// A wide band: the pitch on the left, the form and the social links on the right (Yaiza, 25/11: the old centred
// column looked tiny). On phones everything stacks.
export default function Connect({ dict, newsletterDict }: Props) {
  return (
    <section
      id="contact"
      className="max-w-[1080px] mx-auto w-full bg-anchor text-cream rounded-[24px] px-6 py-10 sm:px-12 sm:py-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center"
    >
      <div className="grid gap-4">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-peach">
          {dict.eyebrow}
        </span>
        <h2
          className="font-serif text-cream leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
          style={{ fontSize: 'clamp(1.7rem, 4.2vw, 2.9rem)' }}
        >
          {dict.heading}
        </h2>
        <p className="text-cream/85 leading-[1.7] text-[0.98rem] sm:text-[1.05rem]">{dict.body}</p>
      </div>

      <div className="grid gap-3">
        <SubscribeForm dict={newsletterDict} />
        <p className="text-cream/75 text-[0.82rem]">{dict.note}</p>

        <div className="mt-5 pt-5 border-t border-white/15 flex flex-wrap items-center gap-3">
          <p className="w-full sm:w-auto text-cream/75 text-[0.88rem] mr-1">{dict.lead}</p>
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noreferrer'}
              aria-label={label}
              className={iconClass}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] fill-current">
                {icon}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
