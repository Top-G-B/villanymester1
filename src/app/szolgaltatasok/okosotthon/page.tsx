import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Okosotthon Telepítés Villanyszerelő – Pest Megye | Villanymester',
  description: 'Okosotthon rendszer telepítése Pest megyében ✓ Shelly, KNX, Loxone ✓ Okos kapcsolók, dimmerek, riasztó, redőny vezérlés ✓ Ingyenes konzultáció ➤',
  keywords: ['okosotthon telepítés pest megye', 'smart home villanyszerelő', 'shelly telepítés', 'okos kapcsoló bekötés', 'knx villanyszerelő', 'loxone telepítés'],
  alternates: { canonical: `${SITE.url}/szolgaltatasok/okosotthon/` },
}

const systems = [
  { name:'Shelly / Tuya (WiFi)', tier:'Belépő', price:'150 000–400 000 Ft', pro:'Olcsó, könnyen bővíthető, app vezérlés', con:'Internet függő', color:'bg-blue-50 border-blue-200' },
  { name:'Zigbee / Z-Wave', tier:'Közép', price:'300 000–800 000 Ft', pro:'Nem internet függő, megbízható, lokális vezérlés', con:'Drágább eszközök', color:'bg-green-50 border-green-200' },
  { name:'KNX / Loxone', tier:'Prémium', price:'1 500 000 Ft+', pro:'Ipari megbízhatóság, teljesen egyedi, ingatlanérték növelő', con:'Magas belépési ár', color:'bg-purple-50 border-purple-200' },
]

export default function OkosotthonPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Okosotthon telepítés</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="badge mb-5">🤖 Smart Home Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Okosotthon Telepítés<br/>
            <span className="text-amber-400">Pest Megye</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Shelly, Zigbee, KNX és Loxone alapú okosotthon rendszerek profi telepítése. Okos kapcsolók, dimmerek, riasztó, redőnyvezérlés – minden egy rendszerben.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Shelly / Tuya','✅ Zigbee / Z-Wave','✅ KNX / Loxone','✅ Ingyenes konzultáció'].map(f => (
              <span key={f} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">📞 {SITE.phoneDisplay}</a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">📋 Ingyenes konzultáció</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Mit telepítünk?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon:'💡', t:'Okos kapcsolók és dimmerek', d:'Fényerőszabályzók, jelenlétvezérelt világítás, időzítők bekötése.' },
                    { icon:'🏠', t:'Redőny és napellenző vezérlés', d:'Motor vezérlők bekötése, automatikus ütemezés, szélszenzor kapcsolat.' },
                    { icon:'🔒', t:'Riasztórendszer', d:'Mozgásérzékelők, nyílásjelzők, sziréna bekötése és programozása.' },
                    { icon:'🌡️', t:'Okos termosztát és fűtés', d:'Zónánkénti fűtésszabályozás, ütemezés, távelérés.' },
                    { icon:'📊', t:'Fogyasztásmérés', d:'Körönkénti energiafogyasztás mérése és megjelenítése appban.' },
                    { icon:'🔌', t:'Okos aljzatok', d:'Távolról kapcsolható, fogyasztást mérő okos dugók telepítése.' },
                  ].map(s => (
                    <div key={s.t} className="card hover:border-amber-200 transition-colors">
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <div className="font-bold text-gray-900 mb-1 text-sm">{s.t}</div>
                      <p className="text-xs text-gray-500">{s.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-5">Rendszer összehasonlítás</h2>
                <div className="space-y-4">
                  {systems.map(s => (
                    <div key={s.name} className={`rounded-2xl border-2 p-5 ${s.color}`}>
                      <div className="flex flex-wrap gap-3 justify-between items-start mb-3">
                        <div>
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{s.tier}</span>
                          <div className="font-black text-gray-900 text-lg">{s.name}</div>
                        </div>
                        <div className="font-black text-amber-600">{s.price}</div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2 text-sm">
                        <div className="flex gap-2"><span className="text-green-600">✓</span><span className="text-gray-700">{s.pro}</span></div>
                        <div className="flex gap-2"><span className="text-red-400">–</span><span className="text-gray-500">{s.con}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-gray-900 mb-4">Okosotthon telepítés városonként</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CITIES.map(c => (
                    <Link key={c.slug} href={`/${c.slug}/`}
                      className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                      <span className="text-xl">🤖</span>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600 transition-colors">Okosotthon {c.suffixOn}</div>
                        <div className="text-xs text-gray-400">{c.county}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/blog/okosotthon-villanyszerelo-szerepe/"
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-2xl">📖</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Okosotthon telepítés: mit csinál a villanyszerelő? Útmutató 2025</div>
                  <div className="text-xs text-gray-400 mt-0.5">8 perces olvasás · Okosotthon</div>
                </div>
              </Link>
            </div>

            <div className="space-y-5">
              <div className="bg-amber-500 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="font-black text-lg mb-2">Ingyenes konzultáció</h3>
                <p className="text-amber-100 text-sm mb-4">Segítünk kiválasztani a megfelelő rendszert</p>
                <a href={`tel:${SITE.phone}`} className="block bg-white text-amber-600 font-black py-3 rounded-xl text-center mb-3 hover:bg-amber-50 transition-colors">
                  {SITE.phoneDisplay}
                </a>
                <Link href="/kapcsolat/" className="block bg-amber-600 text-white font-bold py-2.5 rounded-xl text-center hover:bg-amber-700 transition-colors text-sm border border-amber-400">
                  📋 Online ajánlatkérés
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
