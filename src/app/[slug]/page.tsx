import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE, CITIES, SERVICES } from '@/lib/data'

export function generateStaticParams() {
  return CITIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const city = CITIES.find(c => c.slug === params.slug)
  if (!city) return {}
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${SITE.url}/${city.slug}/` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${SITE.url}/${city.slug}/`,
      type: 'website',
      locale: 'hu_HU',
    },
  }
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = CITIES.find(c => c.slug === params.slug)
  if (!city) notFound()

  const otherCities = CITIES.filter(c => c.slug !== city.slug)

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE.name} – Villanyszerelő ${city.name}`,
    '@id': `${SITE.url}/${city.slug}/`,
    url: `${SITE.url}/${city.slug}/`,
    telephone: SITE.phone,
    email: SITE.email,
    description: city.metaDescription,
    areaServed: { '@type': 'City', name: city.name, containedInPlace: { '@type': 'AdministrativeArea', name: 'Pest megye' }},
    address: { '@type': 'PostalAddress', addressLocality: city.name, addressRegion: 'Pest megye', addressCountry: 'HU' },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '14:00' },
    ],
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '47', bestRating: '5' },
    priceRange: '$$',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: `Villanyszerelő ${city.name}`, item: `${SITE.url}/${city.slug}/` },
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Villanyszerelő {city.name}</span>
          </nav>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="badge mb-5">📍 {city.name}, {city.county}</div>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
              {city.h1}
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {city.localFact} Profi villanyszerelési csapatunk gyorsan és megbízhatóan oldja meg az elektromos problémákat.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['⚡ Sürgős kiszállás 2-4h','🛡️ Garanciális munka','💶 Ingyenes árajánlat','📋 Teljes dokumentáció'].map(f => (
                <span key={f} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{f}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">
                📞 Hívjon most – {SITE.phoneDisplay}
              </a>
              <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">
                📋 Árajánlat kérés
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main text */}
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              <h2 className="text-2xl font-black text-gray-900 mb-4">
                Villanyszerelési szolgáltatások {city.suffixOn}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A <strong>{SITE.name}</strong> Pest megye megbízható villanyszerelő vállalkozása, amely {city.suffixOn} és közvetlen környékén kínál professzionális elektromos szolgáltatásokat. Csapatunk tapasztalt, képesített szakemberekből áll, akik minden villanyszerelési feladatot elvégeznek – a kis hibaelhárítástól a teljes lakásfelújításig.
              </p>

              <h2 className="text-2xl font-black text-gray-900 mb-4 mt-8">
                Miért éppen minket válasszon {city.suffixOn}?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {city.suffixOn} rengeteg villanyszerelő hirdet, de nem mindegyik garantálja a gyors kiszállást, a megfelelő dokumentációt és a hosszú távú garanciát. Mi igen. Az alábbiakban összefoglaljuk, miért dönt mellettünk egyre több {city.suffixAdj} ügyfél:
              </p>
              <ul className="space-y-2 mb-6">
                {['Dokumentált, tűzvédelmi előírásoknak megfelelő munkavégzés', 'Átlátható árazás – nem éri meglepetés a munkavégzés végén', 'Minden munkatársunk rendelkezik villanyszerelői engedéllyel', `${city.name} összes városrészén kiszállunk: ${city.districts.join(', ')}`].map(i => (
                  <li key={i} className="flex gap-2 text-gray-600 text-sm"><span className="text-green-500 mt-0.5 shrink-0">✓</span>{i}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-black text-gray-900 mb-4 mt-8">
                Villanyszerelési munkák árai {city.suffixOn} 2025-ben
              </h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-700">Munka típusa</th>
                      <th className="text-right p-3 font-semibold text-gray-700">Ártól</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Hibaelhárítás, diagnózis','15 000 Ft'],
                      ['Kismegszakító csere','8 000 Ft'],
                      ['Aljzat, kapcsoló csere','5 000 Ft/db'],
                      ['Lakás villanyszerelés (felújítás)','800–1 200 Ft/m²'],
                      ['EV töltő telepítés (11 kW)','120 000 Ft'],
                      ['Napelem rendszer bekötése','egyedi árajánlat'],
                    ].map(([m,a]) => (
                      <tr key={m} className="hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{m}</td>
                        <td className="p-3 text-right font-semibold text-amber-600">{a}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mb-8">* Az árak tájékoztató jellegűek. Pontos árajánlatot helyszíni felmérés után adunk.</p>

              <h2 className="text-2xl font-black text-gray-900 mb-4 mt-8">
                Villanyszerelő {city.name} – Gyakran ismételt kérdések
              </h2>
              <div className="space-y-3">
                {city.faqs.map((faq, i) => (
                  <details key={i} className="border border-gray-200 rounded-xl p-4 group">
                    <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center list-none">
                      {faq.q}
                      <span className="text-amber-500 ml-3 shrink-0 group-open:rotate-180 transition-transform text-lg">▾</span>
                    </summary>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-5">
              {/* CTA box */}
              <div className="bg-amber-500 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-black text-xl mb-2">Hívjon most!</h3>
                <p className="text-amber-100 text-sm mb-4">Ingyenes árajánlat {city.suffixOn}</p>
                <a href={`tel:${SITE.phone}`} className="block bg-white text-amber-600 font-black py-3 px-4 rounded-xl text-center hover:bg-amber-50 transition-colors mb-3">
                  {SITE.phoneDisplay}
                </a>
                <Link href="/kapcsolat/" className="block bg-amber-600 text-white font-bold py-3 px-4 rounded-xl text-center hover:bg-amber-700 transition-colors text-sm">
                  📋 Online ajánlatkérés
                </Link>
                <div className="mt-4 pt-4 border-t border-amber-400/50 text-xs text-amber-100 space-y-1">
                  <div>⏰ H–P: 8:00–18:00</div>
                  <div>⏰ Szo: 9:00–14:00</div>
                  <div className="text-white font-semibold">⚡ Sürgős: 0–24h</div>
                </div>
              </div>

              {/* Services mini list */}
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">🔧 Szolgáltatásaink</h3>
                <ul className="space-y-2">
                  {SERVICES.map(s => (
                    <li key={s.slug}>
                      <Link href={`/szolgaltatasok/${s.slug}/`}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-amber-600 transition-colors py-1">
                        <span>{s.icon}</span>{s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other cities */}
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">🏙️ Más városok</h3>
                <ul className="space-y-1">
                  {otherCities.map(c => (
                    <li key={c.slug}>
                      <Link href={`/${c.slug}/`}
                        className="text-sm text-gray-600 hover:text-amber-600 transition-colors py-1 block">
                        Villanyszerelő {c.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-gray-900 text-white py-14">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Villanyszerelőt keres {city.suffixOn}?</h2>
          <p className="text-gray-400 mb-8">Hívjon most vagy kérjen online árajánlatot – gyorsan visszajelzünk!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">
              📞 {SITE.phoneDisplay}
            </a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4">
              📋 Árajánlat kérés
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
