import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Elektromos Autó Töltő Telepítés Pest Megye – Wallbox | Villanymester',
  description: 'Elektromos autó töltő telepítés Pest megyében ✓ 11 kW wallbox, 22 kW, társasházi töltő ✓ Engedélyek, dokumentumok ✓ Garanciális munka ➤ Árajánlat!',
  keywords: ['elektromos autó töltő telepítés', 'wallbox telepítés pest megye', 'ev töltő szerelés', 'otthoni töltő villanyszerelő', 'elektromos autó töltő érd', 'elektromos autó töltő dunakeszi'],
  alternates: { canonical: `${SITE.url}/szolgaltatasok/elektromos-auto-tolto/` },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Elektromos autó töltő telepítés',
  description: 'Otthoni és társasházi EV töltők beszerelése Pest megyében',
  provider: { '@type': 'LocalBusiness', name: SITE.name, url: SITE.url },
  areaServed: CITIES.map(c => c.name),
  serviceType: 'Villanyszerelés',
}

const faqs = [
  { q: 'Mennyi ideig tart egy wallbox telepítése?', a: 'Átlagosan 4-8 óra. Ez magában foglalja a kábelfektetést, biztosítéktábla bővítést és a töltő beprogramozást.' },
  { q: 'Mennyibe kerül a wallbox telepítés Pest megyében?', a: '11 kW-os fali töltő telepítése 120 000–180 000 Ft, töltővel együtt. Pontos árajánlat helyszíni felmérés után.' },
  { q: 'Kell engedély az EV töltő telepítéséhez?', a: 'Igen – villamos energia elosztói hozzájárulás (E.ON/NKM), átadási dokumentum és tűzvédelmi nyilatkozat szükséges. Ezeket mi intézzük.' },
  { q: 'Társasházban is telepíthetnek töltőt?', a: 'Igen. Társasházi telepítésnél közös képviseleti hozzájárulás szükséges. Tapasztaltak vagyunk ilyen projektekben.' },
  { q: 'Melyik töltőmárkákat szerelik?', a: 'Márkafüggetlen szolgáltatást nyújtunk – Keba, Webasto, ABB, Nrgkick és más márkákhoz.' },
]

export default function EVToltoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Elektromos autó töltő telepítés</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="badge mb-5">🔌 EV Töltő Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Elektromos Autó Töltő Telepítés<br/>
            <span className="text-amber-400">Pest Megye</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Otthoni és társasházi EV töltők profi beszerelése. 11 kW wallbox, 22 kW töltő, minden szükséges engedéllyel és dokumentummal.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Összes engedély intézve','✅ Garanciális munka','✅ Minden márkához','✅ 4-8 óra telepítés'].map(f => (
              <span key={f} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">📞 {SITE.phoneDisplay}</a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">📋 Ingyenes felmérés</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* Types */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Töltő típusok és árak</h2>
                <div className="grid gap-4">
                  {[
                    { kw:'3,7 kW', type:'Lassú töltő', time:'12–18 óra / töltés', price:'50 000–80 000 Ft', best:false, desc:'Megerősített aljzat, gyári töltőkábellel. Ideális kis megtett kilométerhez.', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', imgAlt:'Lassú EV töltő', recommend:'🏷️ Ajánlott: Keba P20, Schneider Electric EVlink – megbízható belépő szintű megoldás.' },
                    { kw:'11 kW', type:'Wallbox – LEGNÉPSZERŰBB', time:'4–6 óra / töltés', price:'120 000–180 000 Ft', best:true, desc:'Az otthoni töltés aranystandardja. Minden elektromos autóhoz megfelelő.', img:'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80', imgAlt:'11 kW Wallbox', recommend:'🏷️ Ajánlott: Keba KeContact P30 (legnépszerűbb HU-ban), Wallbox Pulsar Plus, ABB Terra AC W11 – WiFi/app vezérléssel.' },
                    { kw:'22 kW', type:'Háromfázisú gyorstöltő', time:'2–3 óra / töltés', price:'180 000–250 000 Ft', best:false, desc:'Ha az autó támogatja. Nagy megtett kilométerekhez ideális.', img:'https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?w=400&q=80', imgAlt:'22 kW háromfázisú töltő', recommend:'🏷️ Ajánlott: Keba KeContact P30 22kW, Wallbox Commander 2, ABB Terra AC W22 – pl. Renault Zoe, BMW i3 tulajdonosoknak.' },
                  ].map(t => (
                    <div key={t.kw} className={`rounded-2xl border-2 p-6 ${t.best ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-white'}`}>
                      <img src={t.img} alt={t.imgAlt} className="w-full h-36 object-cover rounded-xl mb-4" />
                      <div className="flex flex-wrap gap-3 items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xl font-black text-gray-900">{t.kw}</span>
                            {t.best && <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">AJÁNLOTT</span>}
                          </div>
                          <div className="text-gray-600 text-sm font-medium">{t.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-black text-amber-600 text-lg">{t.price}</div>
                          <div className="text-xs text-gray-400">töltővel együtt</div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{t.desc}</p>
                      <div className="text-xs text-gray-400">⏱ Töltési idő (60 kWh): {t.time}</div>
                      <p className="text-xs text-gray-500 italic mt-2">{t.recommend}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-6">Hogyan zajlik a telepítés?</h2>
                <div className="space-y-4">
                  {[
                    { n:'1', t:'Ingyenes helyszíni felmérés', d:'Megvizsgáljuk az elektromos rendszert, felmérjük a töltő helyét, meghatározzuk a szükséges munkákat.' },
                    { n:'2', t:'Árajánlat és töltőválasztás', d:'Részletes, írásos árajánlat. Segítünk kiválasztani az autójához és igényeihez legmegfelelőbb töltőt.' },
                    { n:'3', t:'Engedélyeztetés', d:'Beadjuk a kérelmet az áramszolgáltatónak (E.ON/NKM). Ez általában 1-2 hét.' },
                    { n:'4', t:'Telepítés (4-8 óra)', d:'Kábelfektetés, biztosítéktábla bővítés, töltő felszerelés és beprogramozás.' },
                    { n:'5', t:'Átadás, dokumentumok', d:'Átadási dokumentum, tűzvédelmi nyilatkozat, garanciadokumentumok – minden papír rendben.' },
                  ].map(s => (
                    <div key={s.n} className="flex gap-4">
                      <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-black shrink-0 text-sm">{s.n}</div>
                      <div>
                        <div className="font-bold text-gray-900 mb-1">{s.t}</div>
                        <p className="text-sm text-gray-600">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* City links */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">EV töltő telepítés városonként</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CITIES.map(c => (
                    <Link key={c.slug} href={`/${c.slug}/`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                      <span className="text-xl">🔌</span>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600 transition-colors">EV töltő telepítés {c.suffixOn}</div>
                        <div className="text-xs text-gray-400">{c.county}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Gyakori kérdések – EV töltő telepítés</h2>
                <div className="space-y-3">
                  {faqs.map((f, i) => (
                    <details key={i} className="border border-gray-200 rounded-xl p-4 group">
                      <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center list-none">
                        {f.q}
                        <span className="text-amber-500 ml-3 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                      </summary>
                      <p className="mt-3 text-gray-600 text-sm leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-3">Kapcsolódó blog cikkek</h2>
                <Link href="/blog/elektromos-auto-tolto-otthon-telepites/"
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                  <span className="text-2xl">📖</span>
                  <div>
                    <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Elektromos autó töltő otthoni telepítése – Teljes útmutató 2025</div>
                    <div className="text-xs text-gray-400 mt-0.5">10 perces olvasás · EV Töltő</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-amber-500 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-3xl mb-3">🔌</div>
                <h3 className="font-black text-lg mb-2">EV töltő felmérés</h3>
                <p className="text-amber-100 text-sm mb-4">Ingyenes helyszíni felmérés Pest megyében</p>
                <a href={`tel:${SITE.phone}`} className="block bg-white text-amber-600 font-black py-3 rounded-xl text-center mb-3 hover:bg-amber-50 transition-colors">
                  {SITE.phoneDisplay}
                </a>
                <Link href="/kapcsolat/" className="block bg-amber-600 text-white font-bold py-2.5 rounded-xl text-center hover:bg-amber-700 transition-colors text-sm border border-amber-400">
                  📋 Online árajánlatkérés
                </Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">🔧 Más szolgáltatások</h3>
                <ul className="space-y-2 text-sm">
                  {[['☀️ Napelem bekötés','/szolgaltatasok/napelem-bekotes/'],['🏠 Lakásfelújítás','/szolgaltatasok/lakas-felujitas/'],['🤖 Okosotthon','/szolgaltatasok/okosotthon/'],['⚡ Hibaelhárítás','/szolgaltatasok/hibaelharitas/'],['🏭 Ipari villanyszerelés','/szolgaltatasok/ipari-villanyszereles/']].map(([l,h]) => (
                    <li key={h}><Link href={h} className="text-gray-600 hover:text-amber-600 transition-colors flex items-center gap-2">{l}</Link></li>
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
