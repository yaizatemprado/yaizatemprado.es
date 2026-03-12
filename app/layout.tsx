import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import { headers } from 'next/headers'
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
        alt: 'Yaiza Temprado — Engineering leadership and decision-making',
      },
    ],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = headers().get('x-locale') ?? 'en'

  return (
    <html lang={locale} className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Yaiza Temprado',
              jobTitle: 'Senior Director of Engineering',
              description:
                'Yaiza Temprado helps women in engineering leadership be heard in senior decision forums — with clearer framing, stronger influence, and sustainable delivery.',
              url: 'https://yaizatemprado.es',
              sameAs: ['https://www.linkedin.com/in/yaiza/'],
            }),
          }}
        />
      </head>
      <body className="font-sans text-plum">{children}</body>
    </html>
  )
}
