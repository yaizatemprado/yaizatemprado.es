import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Button from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Section'

// GitHub Pages serves out/404.html for any address that doesn't exist. It has no locale,
// so it's in Spanish (the default) with one line for English readers.
export const metadata: Metadata = {
  title: 'Esta página no existe — Yaiza Temprado',
  robots: { index: false, follow: true },
}

export default async function NotFound() {
  const dict = await getDictionary('es')

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <Header locale="es" dict={dict.nav} />

      <section className="grid gap-6 justify-items-center text-center max-w-[640px] mx-auto py-20">
        <Eyebrow>Error 404</Eyebrow>
        <h1
          className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
          style={{ fontSize: 'clamp(1.7rem, 5.5vw, 3.35rem)' }}
        >
          Esta página no existe
        </h1>
        <p className="text-slate leading-[1.7] text-[1rem]">
          Puede que el enlace esté mal escrito o que la página ya no esté. Por aquí puedes seguir:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
          <Button href="/es/" className="sm:w-[250px]">
            Ir al inicio →
          </Button>
          <Button href="/es/clubpericia/" variant="secondary" className="sm:w-[250px]">
            Conoce el Club Pericia →
          </Button>
        </div>
        <p className="text-slate text-[0.9rem] mt-4">
          Page not found.{' '}
          <Link href="/en/" className="font-semibold text-rose hover:text-anchor no-underline">
            Go to the English site →
          </Link>
        </p>
      </section>

      <Footer dict={dict.footer} nav={dict.nav} locale="es" />
    </main>
  )
}
