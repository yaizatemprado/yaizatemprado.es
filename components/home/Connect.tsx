import type { Dictionary } from '@/lib/i18n/types'
import SubscribeForm from '@/components/newsletter/SubscribeForm'

type Props = {
  dict: Dictionary['connect']
  newsletterDict: Dictionary['newsletter']
}

const socialLinks = [
  {
    href: 'mailto:yaiza@temprado.es',
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
  'w-10 h-10 rounded-full bg-[#f4ece8] border border-[#ead9d3] grid place-items-center text-plum transition-transform duration-200 hover:-translate-y-px hover:bg-peach hover:border-rose'

export default function Connect({ dict, newsletterDict }: Props) {
  return (
    <section
      id="contact"
      className="grid gap-10 justify-items-center text-center pb-6 max-w-[560px] mx-auto"
    >
      {/* Newsletter — primary action */}
      <div className="grid gap-4 justify-items-center w-full">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {dict.eyebrow}
        </span>
        <h2
          className="font-serif text-anchor leading-[1.1] tracking-[-0.005em]"
          style={{ fontSize: 'clamp(2.3rem, 3.2vw, 3.35rem)' }}
        >
          {dict.heading}
        </h2>
        <p className="text-slate max-w-[480px] leading-[1.7] text-[1rem]">
          {newsletterDict.body}
        </p>
        <div className="w-full max-w-[480px] mt-1">
          <SubscribeForm dict={newsletterDict} />
        </div>
      </div>

      {/* Social — secondary */}
      <div className="grid gap-3 justify-items-center">
        <p className="text-slate text-[0.85rem]">{dict.lead}</p>
        <div className="flex gap-3">
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
