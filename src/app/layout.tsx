import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/data'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} – Villanyszerelő Pest Megye | Gyors Kiszállás`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ['villanyszerelő pest megye', 'villanyszerelő érd', 'villanyszerelő dunakeszi', 'villanyszerelő gödöllő', 'villanyszerelő szentendre', 'villanyszerelő vác'],
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} – Megbízható Villanyszerelő Pest Megyében`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  verification: { google: 'Y5rvs2wu1F3oSZc1bh8lS_nHEfOOAqcGNftJq0mwQMY' },
  alternates: { canonical: SITE.url },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/kereses?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Érd',
    addressRegion: 'Pest megye',
    addressCountry: 'HU',
  },
  areaServed: ['Érd', 'Gödöllő', 'Dunakeszi', 'Szentendre', 'Vác', 'Pest megye'],
  priceRange: '$$',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}/>
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
