import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/data'

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
  '@type': 'ElectricalContractor',
  name: 'Villanymester Kft.',
  url: SITE.url,
  telephone: '+36 70 293 3659',
  email: 'info@mateklap.hu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Példa utca 1.',
    addressLocality: 'Érd',
    postalCode: '2030',
    addressCountry: 'HU',
  },
  areaServed: ['Érd', 'Gödöllő', 'Dunakeszi', 'Szentendre', 'Vác', 'Pest megye'],
  priceRange: '$$',
  openingHours: 'Mo-Fr 08:00-18:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '128',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
