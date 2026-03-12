import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['footer'] }

export default function Footer({ dict }: Props) {
  return (
    <footer className="mt-24 py-8 border-t border-blush text-center text-[0.85rem] text-slate">
      <p>© {new Date().getFullYear()} Yaiza Temprado. {dict.rights}</p>
    </footer>
  )
}
