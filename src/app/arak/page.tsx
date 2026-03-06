import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Villanyszerelés Árak 2025 – Díjak és Kalkulátor | Villanymester',
  description: 'Villanyszerelés árak 2025-ben Pest megyében ✓ Hibaelhárítás, lakásfelújítás, EV töltő telepítés árai ✓ Ingyenes helyszíni árajánlat ➤ Hívjon most!',
  alternates: { canonical: `${SITE.url}/arak/` },
}

const priceTable = [
  { category: '🔧 Hibaelhárítás', items: [
    { name: 'Diagnózis, hibafelderítés', price: '15 000 Ft', note: 'Munkadíjba beleszámít' },
    { name: 'Kismegszakító csere', price: '8 000–15 000 Ft', note: 'Anyag nélkül' },
    { name: 'Aljzat / kapcsoló csere', price: '5 000–8 000 Ft/db', note: 'Anyag nélkül' },
    { name: 'Biztosítéktábla ellenőrzés', price: '12 000 Ft', note: '' },
  ]},
  { category: '🏠 Lakás villanyszerelés', items: [
    { name: 'Teljes lakás felújítás', price: '800–1 200 Ft/m²', note: 'Anyag nélkül' },
    { name: 'Részleges felújítás (1 szoba)', price: '40 000–80 000 Ft', note: 'Anyagtól függően' },
    { name: 'Biztosítéktábla csere', price: '35 000–60 000 Ft', note: 'Anyag nélkül' },
    { name: 'Új elektromos tűzhely bekötés', price: '12 000 Ft', note: '' },
  ]},
  { category: '🔌 EV Töltő telepítés', items: [
    { name: '3,7 kW fali töltő (Mode 2)', price: '80 000–120 000 Ft', note: 'Töltővel együtt' },
    { name: '11 kW fali töltő (Mode 3)', price: '120 000–180 000 Ft', note: 'Töltővel együtt' },
    { name: '22 kW fali töltő', price: '180 000–250 000 Ft', note: 'Töltővel együtt' },
    { name: 'Társasházi töltő egyedi', price: 'Árajánlat alapján', note: '' },
  ]},
  { category: '☀️ Napelem bekötés', items: [
    { name: 'Napelem rendszer bekötés', price: 'Árajánlat alapján', note: 'Rendszer méretétől függ' },
    { name: 'Hálózati csatlakozási munkák', price: 'Árajánlat alapján', note: '' },
    { name: 'Akkumulátor rendszer bekötés', price: 'Árajánlat alapján', note: '' },
  ]},
]

export default function ArakPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Villanyszerelés árak</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl text-center">
          <div className="badge mb-4">💶 Áraink</div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">Villanyszerelés árak 2025-ben</h1>
          <p className="text-gray-300 text-lg">Átlátható, rejtett költségek nélküli árazás Pest megyében.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4">
            <span className="text-2xl shrink-0">ℹ️</span>
            <div>
              <div className="font-bold text-amber-800 mb-1">Fontos tudnivaló az árakról</div>
              <p className="text-amber-700 text-sm">Az alábbi árak tájékoztató jellegűek és az anyagköltséget nem tartalmazzák (ha nincs jelölve). Pontos, végleges árajánlatot minden esetben helyszíni felmérés után adunk – <strong>ez ingyenes</strong>.</p>
            </div>
          </div>

          <div className="space-y-10">
            {priceTable.map(section => (
              <div key={section.category}>
                <h2 className="text-xl font-black text-gray-900 mb-4">{section.category}</h2>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-3 font-semibold text-gray-700">Munka</th>
                        <th className="text-right p-3 font-semibold text-gray-700">Ár (tájékoztató)</th>
                        <th className="text-right p-3 font-semibold text-gray-500 hidden sm:table-cell">Megjegyzés</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {section.items.map(item => (
                        <tr key={item.name} className="hover:bg-gray-50">
                          <td className="p-3 text-gray-700">{item.name}</td>
                          <td className="p-3 text-right font-bold text-amber-600 whitespace-nowrap">{item.price}</td>
                          <td className="p-3 text-right text-gray-400 text-xs hidden sm:table-cell">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-amber-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-black mb-3">Ingyenes árajánlat</h2>
            <p className="text-amber-100 mb-6">Hívjon vagy írjon – 24 órán belül pontos árajánlatot küldünk!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE.phone}`} className="bg-white text-amber-600 font-black px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors">
                📞 {SITE.phoneDisplay}
              </a>
              <Link href="/kapcsolat/" className="bg-amber-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-amber-700 transition-colors border border-amber-400">
                📋 Online ajánlatkérés
              </Link>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-black text-gray-900 mb-5">Kiszállási területeink</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {CITIES.map(c => (
                <Link key={c.slug} href={`/${c.slug}/`}
                  className="card text-center hover:border-amber-300 hover:bg-amber-50 transition-all text-sm font-medium text-gray-700 hover:text-amber-700 py-3">
                  Villanyszerelő<br/><span className="font-bold">{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
