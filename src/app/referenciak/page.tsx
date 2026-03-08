import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Referenciák – Elvégzett Munkáink Pest Megyében | Villanymester',
  description: 'Villanyszerelési referenciáink Pest megyében ✓ 200+ elvégzett munka ✓ Lakásfelújítás, EV töltő, napelem, okosotthon, ipari villanyszerelés ✓ 4.9 ★ értékelés',
  alternates: { canonical: `${SITE.url}/referenciak/` },
  openGraph: {
    title: 'Referenciák – Elvégzett Munkáink Pest Megyében | Villanymester',
    description: 'Villanyszerelési referenciáink Pest megyében ✓ 200+ elvégzett munka ✓ Lakásfelújítás, EV töltő, napelem, okosotthon, ipari villanyszerelés.',
    url: `${SITE.url}/referenciak/`,
    type: 'website',
    locale: 'hu_HU',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  telephone: SITE.phone,
  url: `${SITE.url}/referenciak/`,
  address: { '@type': 'PostalAddress', addressRegion: 'Pest', addressCountry: 'HU' },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
}

const refs = [
  {
    city: 'Érd',
    type: 'Teljes lakásfelújítás villanyszerelés',
    icon: '🏠',
    desc: '85 m²-es panellakás teljes elektromos rendszer cseréje. Alumínium kábelezés kiváltása, modern kismegszakítós tábla, 18 új aljzatkör. Munkaidő: 4 munkanap.',
    tag: 'Lakásfelújítás',
    tagColor: 'bg-amber-100 text-amber-800',
    year: '2024',
  },
  {
    city: 'Dunakeszi',
    type: 'EV töltő telepítés – Keba KeContact P30',
    icon: '🔌',
    desc: 'Társasházi garázsba 11 kW-os wallbox telepítése. Engedélyeztetés az áramszolgáltatónál, külön mérő, dedikált 32A-es kör. Átadás: 1 nap.',
    tag: 'EV Töltő',
    tagColor: 'bg-green-100 text-green-800',
    year: '2024',
  },
  {
    city: 'Gödöllő',
    type: 'Napelem rendszer villanyszerelési munkái',
    icon: '☀️',
    desc: '12 paneles, 6 kWp teljesítményű napelem rendszer inverter bekötése, kétirányú mérő telepítése, hálózati csatlakoztatás ELMŰ felé. Dokumentáció teljes.',
    tag: 'Napelem',
    tagColor: 'bg-yellow-100 text-yellow-800',
    year: '2024',
  },
  {
    city: 'Szentendre',
    type: 'Okosotthon kiépítés – műemlékes ház',
    icon: '🤖',
    desc: 'Barokk kori műemlékes polgárházban okosotthon rendszer telepítése. Philips Hue világítás, okos termosztát, redőnyvezérlés – látható nyomvonalak nélkül.',
    tag: 'Okosotthon',
    tagColor: 'bg-purple-100 text-purple-800',
    year: '2023',
  },
  {
    city: 'Vác',
    type: 'Ipari csarnok villanyszerelés',
    icon: '🏭',
    desc: '1 400 m²-es logisztikai csarnok teljes elektromos kivitelezése. Háromfázisú elosztótábla, ipari aljzatok, LED-es csarnokmegvilágítás, tűzjelző bekötés.',
    tag: 'Ipari',
    tagColor: 'bg-gray-100 text-gray-700',
    year: '2023',
  },
  {
    city: 'Szentendre',
    type: 'Műemlékes ház felújítás',
    icon: '🏛️',
    desc: '19. századi kőház teljes elektromos felújítása. Látható, fehér kábelcsatornás megoldás a védett belső terek megtartásával. FI-relé, biztosítéktábla csere.',
    tag: 'Lakásfelújítás',
    tagColor: 'bg-amber-100 text-amber-800',
    year: '2024',
  },
  {
    city: 'Dunakeszi',
    type: 'Új építés villanyszerelés – 140 m²-es ház',
    icon: '🏗️',
    desc: 'Új építésű családi ház teljes villanyszerelése tervektől az átadásig. 28 kör a táblában, 62 aljzat, EV töltő előkészítés, napelem előkészítés, CAT6 hálózat.',
    tag: 'Új Építés',
    tagColor: 'bg-blue-100 text-blue-800',
    year: '2024',
  },
  {
    city: 'Érd',
    type: 'Irodaház villanyszerelés – 6 szintes épület',
    icon: '🏢',
    desc: 'Érdi irodaház 6 emeletének teljes elektromos felújítása. Emeleti altáblák, UPS rendszer, szünetmentes tápellátás, hálózati kábelezés. 3 hét munkaidő.',
    tag: 'Ipari',
    tagColor: 'bg-gray-100 text-gray-700',
    year: '2023',
  },
  {
    city: 'Gödöllő',
    type: 'Sürgős hibaelhárítás – lakótelep',
    icon: '⚡',
    desc: 'Gödöllői lakótelep egyik lépcsőházában éjszakai áramkimaradás. Helyszínre érés: 2,5 óra. Elégett főbiztosíték csere, sérült kábel lokalizálás és javítás.',
    tag: 'Hibaelhárítás',
    tagColor: 'bg-red-100 text-red-800',
    year: '2024',
  },
]

const stats = [
  { v: '200+', l: 'Elvégzett munka' },
  { v: '5', l: 'Pest megyei város' },
  { v: '10+ év', l: 'Tapasztalat' },
  { v: '4.9★', l: 'Átlagos értékelés' },
]

export default function Referenciak() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Referenciák</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-4xl">
          <div className="badge mb-5">🏆 Elvégzett munkáink</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Elvégzett Munkáink<br />
            <span className="text-amber-400">Pest Megyében</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            200+ sikeresen befejezett projekt Pest megye 5 városában. Lakásfelújítástól az ipari villanyszerelésig – minden munkánkra garanciát vállalunk.
          </p>
          <div className="flex flex-wrap gap-6">
            {stats.map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-black text-amber-400">{s.v}</div>
                <div className="text-xs text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference cards */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {refs.map((r, i) => (
              <div key={i} className="card hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.tagColor}`}>{r.tag}</span>
                  <span className="text-xs text-gray-400">{r.year} · {r.city}</span>
                </div>
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{r.type}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          {/* City links */}
          <h2 className="text-2xl font-black text-gray-900 mb-5 text-center">Villanyszerelő szolgáltatásaink városonként</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-xl">🏙️</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Villanyszerelő {c.name}</div>
                  <div className="text-xs text-gray-400">{c.county} · {c.population} lakos</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Legyen Ön a következő elégedett ügyfelünk!</h2>
          <p className="text-amber-100 mb-8 text-lg">Ingyenes helyszíni felmérés – Pest megye egész területén.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phone}`} className="bg-white text-amber-600 font-black px-8 py-4 rounded-xl text-lg hover:bg-amber-50 transition-colors shadow-lg">
              📞 {SITE.phoneDisplay}
            </a>
            <Link href="/kapcsolat/" className="bg-amber-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-amber-700 transition-colors">
              📋 Online ajánlatkérés
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
