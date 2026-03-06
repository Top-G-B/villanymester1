import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Napelem Bekötés Villanyszerelő – Pest Megye 2025 | Villanymester',
  description: 'Napelem rendszer villanyszerelési munkái Pest megyében ✓ Inverter telepítés, hálózati bekötés, védelem ✓ Engedélyek intézve ✓ Garanciális munka ➤ Árajánlat!',
  keywords: ['napelem bekötés villanyszerelő', 'napelem telepítés pest megye', 'inverter bekötés', 'napelem rendszer villanyszerelés', 'napelem hálózati bekötés'],
  alternates: { canonical: `${SITE.url}/szolgaltatasok/napelem-bekotes/` },
}

const faqs = [
  { q: 'Mit végez el pontosan a villanyszerelő a napelem telepítésnél?', a: 'Az inverter telepítését és bekötését, a DC kábelezést (panel→inverter), védelmi berendezések telepítését, a hálózati csatlakozást és az összes szükséges dokumentum elkészítését.' },
  { q: 'Szükséges engedély a napelem bekötéséhez?', a: 'Igen – hálózatra táplálós rendszernél áramszolgáltatói engedély (E.ON/NKM) és mérőcsere szükséges. Ezeket mi koordináljuk.' },
  { q: 'Mennyi ideig tart a villanyszerelési munka napelemnél?', a: 'Egy átlagos 5-10 kWp rendszer villanyszerelési munkája 1-2 nap alatt elvégezhető.' },
  { q: 'Akkumulátoros rendszerhez is értenek?', a: 'Igen, akkumulátor rendszerek bekötése és védelme is a szolgáltatásaink közé tartozik.' },
  { q: 'Pest megye melyik részein dolgoznak?', a: 'Érd, Gödöllő, Dunakeszi, Szentendre, Vác és ezek vonzáskörzetében.' },
]

export default function NapelemPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Napelem bekötés</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="badge mb-5">☀️ Napelem Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Napelem Bekötés –<br/>
            <span className="text-amber-400">Villanyszerelő Pest Megye</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Napelem rendszerek teljes villanyszerelési munkája: inverter telepítés, hálózati bekötés, védelmi rendszerek kiépítése – minden szükséges engedéllyel.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Inverter telepítés','✅ Hálózati bekötés','✅ Engedélyek intézve','✅ Akkumulátor bekötés'].map(f => (
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

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Mit vállalunk napelem telepítésnél?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon:'⚡', t:'Inverter telepítés és bekötés', d:'Minden inverter típushoz: string, mikro-inverter, hibrid. Programozás és beüzemelés.' },
                    { icon:'🔌', t:'DC kábelezés', d:'UV-álló, megfelelő keresztmetszetű DC kábelek fektetése panel és inverter között.' },
                    { icon:'🛡️', t:'Védelmi rendszerek', d:'DC és AC oldali túlfeszültség-védelem, leválasztó berendezés, FI relé, földelés.' },
                    { icon:'🌐', t:'Hálózati bekötés', d:'E.ON/NKM engedélyeztetés koordinálása, kétirányú mérő csere megszervezése.' },
                    { icon:'🔋', t:'Akkumulátor bekötés', d:'Tárolórendszerek villanyszerelési munkái, BMS bekötés, védelmi rendszer.' },
                    { icon:'📋', t:'Teljes dokumentáció', d:'Átadási dokumentum, tűzvédelmi nyilatkozat, sémarajz, teljesítményadatok.' },
                  ].map(s => (
                    <div key={s.t} className="card hover:border-amber-200 transition-colors">
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <div className="font-bold text-gray-900 mb-1 text-sm">{s.t}</div>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Napelem bekötés városonként</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CITIES.map(c => (
                    <Link key={c.slug} href={`/${c.slug}/`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                      <span className="text-xl">☀️</span>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600 transition-colors">Napelem bekötés {c.suffixOn}</div>
                        <div className="text-xs text-gray-400">{c.county}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Gyakori kérdések</h2>
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

              <Link href="/blog/napelem-villanyszerelo-feladatai/"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-2xl">📖</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Napelem rendszer: mit csinál a villanyszerelő? – Teljes útmutató</div>
                  <div className="text-xs text-gray-400 mt-0.5">7 perces olvasás · Napelem</div>
                </div>
              </Link>
            </div>

            <div className="space-y-5">
              <div className="bg-amber-500 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-3xl mb-3">☀️</div>
                <h3 className="font-black text-lg mb-2">Napelem felmérés</h3>
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
                  {[['🔌 EV töltő telepítés','/szolgaltatasok/elektromos-auto-tolto/'],['🏠 Lakásfelújítás','/szolgaltatasok/lakas-felujitas/'],['🤖 Okosotthon','/szolgaltatasok/okosotthon/'],['⚡ Hibaelhárítás','/szolgaltatasok/hibaelharitas/'],['🏭 Ipari villanyszerelés','/szolgaltatasok/ipari-villanyszereles/']].map(([l,h]) => (
                    <li key={h}><Link href={h} className="text-gray-600 hover:text-amber-600 transition-colors">{l}</Link></li>
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
