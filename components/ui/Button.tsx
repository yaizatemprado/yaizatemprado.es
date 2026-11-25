import Link from 'next/link'

// The one button of the site. Variants map to the .btn-* classes in app/globals.css, which hold the look.
// `sub` adds a smaller second line (e.g. the edition date under «Conoce el Club Pericia»).
export type ButtonVariant = 'primary' | 'secondary' | 'onDark'

const variantClass: Record<ButtonVariant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  onDark: 'btn-on-dark',
}

export function buttonClass(variant: ButtonVariant = 'primary', extra = '') {
  return `${variantClass[variant]} ${extra}`.trim()
}

type Props = {
  href: string
  variant?: ButtonVariant
  external?: boolean
  download?: boolean
  sub?: string
  className?: string
  children: React.ReactNode
}

export default function Button({ href, variant = 'primary', external, download, sub, className, children }: Props) {
  const cls = buttonClass(variant, className)
  const content = (
    <>
      <span>{children}</span>
      {sub && <span className="mt-1 text-[0.8rem] font-medium opacity-90">{sub}</span>}
    </>
  )
  if (external || download || href.startsWith('mailto:') || href.startsWith('#')) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...(download ? { download: true } : {})}
      >
        {content}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
