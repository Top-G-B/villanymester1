import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE, CITIES, SERVICES, REVIEWS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Villanyszerelő Pest Megye – Megbízható, Gyors Kiszállás | Villanymester',
  description: 'Profi villanyszerelő Pest megye 5 városában ✓ Érd, Gödöllő, Dunakeszi, Szentendre, Vác ✓ Gyors kiszállás ✓ Garanciális munka ✓ Díjmentes árajánlat ➤ Hívjon most!',
  alternates: { canonical: SITE.url },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Melyik városokba szállnak ki Pest megyében?', acceptedAnswer: { '@type': 'Answer', text: 'Pest megye 5 városába szállunk ki: Érd, Gödöllő, Dunakeszi, Szentendre és Vác területén vállalunk villanyszerelési munkákat.' }},
    { '@type': 'Question', name: 'Milyen gyorsan tud kiszállni egy villanyszerelő?', acceptedAnswer: { '@type': 'Answer', text: 'Sürgős esetben 2-4 óra, normál esetben 24 órán belül tudunk időpontot egyeztetni.' }},
    { '@type': 'Question', name: 'Mennyibe kerül a villanyszerelés Pest megyében?', acceptedAnswer: { '@type': 'Answer', text: 'Hibaelhárítás 15 000 Ft-tól, lakás villanyszerelés 800-1 200 Ft/m²-től. Pontos árajánlatot ingyenesen adunk.' }},
    { '@type': 'Question', name: 'Vállalnak elektromos autó töltő telepítést?', acceptedAnswer: { '@type': 'Answer', text: 'Igen, otthoni és társasházi EV töltők beszerelése az egyik fő szakterületünk.' }},
  ]
}

const stats = [
  { v: '500+', l: 'Elvégzett munka' },
  { v: '10+ év', l: 'Tapasztalat' },
  { v: '4.9★', l: 'Átlagos értékelés' },
  { v: '24h', l: 'Sürgős kiszállás' },
]

const whyUs = [
  { icon: '⚡', title: 'Gyors kiszállás', desc: 'Sürgős esetben 2-4 órán belül nálad vagyunk Pest megye bármely pontján.' },
  { icon: '🎓', title: 'Képzett szakemberek', desc: 'Minden villanyszerelőnk megfelelő képesítéssel és engedéllyel dolgozik.' },
  { icon: '🛡️', title: 'Garanciális munka', desc: 'Minden elvégzett munkánkra garanciát vállalunk.' },
  { icon: '💶', title: 'Átlátható árazás', desc: 'Rejtett költségek nélkül, előre megadott áron dolgozunk.' },
  { icon: '📋', title: 'Teljes dokumentáció', desc: 'Szabályos átadási dokumentumok, tűzvédelmi nyilatkozat minden munkánál.' },
  { icon: '📞', title: 'Ingyenes árajánlat', desc: 'Telefonon vagy helyszínen díjmentesen felmérjük az igényeket.' },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}/>

      {/* ── HERO ── */}
      <section className="text-white py-20 md:py-28 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&q=80"
          alt="Villanyszerelő Pest megye"
          fill
          priority
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60"/>
        <div className="container-main relative">
          <div className="max-w-3xl">
            <div className="badge mb-6 text-sm">⚡ Pest megye megbízható villanyszerelője</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Villanyszerelő<br/>
              <span className="text-amber-400">Pest Megye</span><br/>
              5 városában
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Profi villanyszerelési szolgáltatások Érden, Gödöllőn, Dunakeszin, Szentendrén és Vácon.
              Gyors kiszállás, garanciális munka, átlátható árak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">
                📞 Hívjon most – {SITE.phoneDisplay}
              </a>
              <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">
                📋 Díjmentes árajánlat
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-10">
              {stats.map(s => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black text-amber-400">{s.v}</div>
                  <div className="text-xs text-gray-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CITIES GRID ── */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="badge mb-3">📍 Területünk</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Villanyszerelő Pest Megye – 5 városban
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Saját csapattal jelen vagyunk Pest megye 5 legnagyobb városában. Gyors kiszállás, helyi szakértelem.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map(city => (
              <Link key={city.slug} href={`/${city.slug}/`}
                className="card hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all duration-200 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-amber-600 transition-colors">
                      Villanyszerelő {city.name}
                    </h3>
                    <div className="text-sm text-gray-400">{city.county} · {city.population} lakos</div>
                  </div>
                  <span className="text-2xl">🏙️</span>
                </div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{city.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs bg-green-50 text-green-700 font-semibold px-2.5 py-1 rounded-full">
                    🔍 {city.searchVolume}/hó keresés
                  </span>
                  <span className="text-amber-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Részletek →
                  </span>
                </div>
              </Link>
            ))}
            {/* CTA card */}
            <div className="card bg-gradient-to-br from-amber-500 to-amber-600 border-amber-500 text-white flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-black text-xl mb-2">Gyors árajánlat</h3>
                <p className="text-amber-100 text-sm">Nem biztos melyik városra kell? Hívjon, segítünk!</p>
              </div>
              <a href={`tel:${SITE.phone}`} className="mt-6 bg-white text-amber-600 font-bold py-3 px-4 rounded-xl text-center hover:bg-amber-50 transition-colors">
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="badge mb-3">🔧 Szolgáltatások</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Villanyszerelési munkáink</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Minden elektromos munkát vállalunk – hibaelhárítástól az okosotthon kiépítéséig.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/szolgaltatasok/${s.slug}/`}
                className="card hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all duration-200 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{s.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="badge mb-3">🏆 Miért mi?</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Miért válassza a Villanymestert?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(w => (
              <div key={w.title} className="flex gap-4 p-5 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="text-3xl shrink-0">{w.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="badge mb-3">⭐ Vélemények</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Mit mondanak ügyfeleink?</h2>
            <div className="text-5xl font-black text-amber-500 mb-1">4.9 / 5</div>
            <div className="text-gray-400 text-sm">120+ értékelés alapján</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center font-bold text-amber-700">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-xs text-gray-400">{r.city}</div>
                  </div>
                  <div className="ml-auto text-amber-400 text-sm">{'★'.repeat(r.stars)}</div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic">"{r.text}"</p>
                <div className="text-xs text-gray-300 mt-3">{r.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section bg-white">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <div className="badge mb-3">❓ GYIK</div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Gyakori kérdések</h2>
          </div>
          <div className="space-y-4">
            {schemaFaq.mainEntity.map((faq, i) => (
              <details key={i} className="card group">
                <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center list-none">
                  {faq.name}
                  <span className="text-amber-500 ml-3 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-amber-500 py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Kérjen díjmentes árajánlatot!</h2>
          <p className="text-amber-100 mb-8 text-lg">Hívjon vagy írjon – 24 órán belül visszajelzünk.</p>
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
