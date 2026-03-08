import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE, SERVICES, CITIES } from '@/lib/data'

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const service = SERVICES.find(s => s.slug === params.slug)
  if (!service) return {}

  const description = `Keresi a ${service.name.toLowerCase()} szakértőjét? A Villanymester Kft. megbízható ${service.name.toLowerCase()} szolgáltatást nyújt Pest megye területén: Érd, Gödöllő, Dunakeszi, Szentendre és Vác.`
  return {
    title: `${service.name} Pest megye | Villanymester Kft.`,
    description,
    alternates: { canonical: `https://www.mateklap.hu/szolgaltatasok/${params.slug}` },
    openGraph: {
      title: `${service.name} Pest megye | Villanymester Kft.`,
      description,
      url: `https://www.mateklap.hu/szolgaltatasok/${params.slug}`,
      type: 'website',
      locale: 'hu_HU',
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find(s => s.slug === params.slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'ElectricalContractor',
      name: 'Villanymester Kft.',
      telephone: '+36 70 293 3659',
      image: `${SITE.url}/logo.png`,
      priceRange: '$$',
    },
    areaServed: [
      { '@type': 'City', name: 'Érd' },
      { '@type': 'City', name: 'Gödöllő' },
      { '@type': 'City', name: 'Dunakeszi' },
      { '@type': 'City', name: 'Szentendre' },
      { '@type': 'City', name: 'Vác' },
      { '@type': 'AdministrativeArea', name: 'Pest megye' }
    ],
    description: service.desc,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">{service.name}</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="badge mb-4">{service.icon} {service.name}</div>
          <h1 className="text-3xl md:text-5xl font-black mb-5">{service.name} – Pest Megye</h1>
          <p className="text-gray-300 text-lg mb-8">{service.desc} Pest megye 5 városában: Érd, Gödöllő, Dunakeszi, Szentendre, Vác.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">📞 {SITE.phoneDisplay}</a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">📋 Árajánlat</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black text-gray-900 mb-4">{service.name} Pest megyében</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                A <strong>{SITE.name}</strong> professzionális {service.name.toLowerCase()} szolgáltatást nyújt Pest megye 5 városában. Tapasztalt, képesített csapatunk gyorsan és megbízhatóan végzi el a munkát.
              </p>
              <h2 className="text-2xl font-black text-gray-900 mb-4 mt-8">Melyik városokban végezzük?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CITIES.map(c => (
                  <Link key={c.slug} href={`/${c.slug}/`}
                    className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all">
                    <span className="text-xl">🏙️</span>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{service.name} {c.suffixOn}</div>
                      <div className="text-xs text-gray-400">{c.county}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <div className="bg-amber-500 rounded-2xl p-6 text-white">
                <h3 className="font-black text-lg mb-3">Ajánlatkérés</h3>
                <a href={`tel:${SITE.phone}`} className="block bg-white text-amber-600 font-black py-3 rounded-xl text-center mb-3 hover:bg-amber-50 transition-colors">
                  📞 {SITE.phoneDisplay}
                </a>
                <Link href="/kapcsolat/" className="block bg-amber-600 text-white font-bold py-3 rounded-xl text-center hover:bg-amber-700 transition-colors text-sm border border-amber-400">
                  📋 Online ajánlatkérés
                </Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">🔧 Többi szolgáltatás</h3>
                <ul className="space-y-1">
                  {SERVICES.filter(s => s.slug !== service.slug).map(s => (
                    <li key={s.slug}>
                      <Link href={`/szolgaltatasok/${s.slug}/`} className="text-sm text-gray-600 hover:text-amber-600 transition-colors py-1 flex items-center gap-2">
                        {s.icon} {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
