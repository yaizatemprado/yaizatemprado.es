import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yaizatemprado.es'),
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/yaiza-og.png',
        width: 1200,
        height: 630,
        alt: 'Yaiza Temprado — Comunicación, influencia y liderazgo en tech',
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Default locale is Spanish. The Header swaps <html lang> on the client for /en.
  return (
    <html lang="es" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        {/* Many aggregators ask for /favicon.ico by name and read a 404 as "no icon". */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
      </head>
      <body className="font-sans text-plum">{children}</body>
    </html>
  )
}
