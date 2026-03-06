import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Lakás Villanyszerelés Felújítás Pest Megye 2025 | Villanymester',
  description: 'Lakás villanyszerelés felújítás Pest megyében ✓ Teljes rendszer csere, biztosítéktábla, kábelezés ✓ 800–1200 Ft/m² ✓ Garanciális munka ➤ Ingyenes felmérés!',
  keywords: ['lakás villanyszerelés felújítás', 'villanyszerelés felújítás pest megye', 'elektromos rendszer felújítás', 'biztosítéktábla csere', 'lakásfelújítás villanyszerelő'],
  alternates: { canonical: `${SITE.url}/szolgaltatasok/lakas-felujitas/` },
}

export default function LakasPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Lakás villanyszerelés</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="badge mb-5">🏠 Lakásfelújítás Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Lakás Villanyszerelés –<br/>
            <span className="text-amber-400">Felújítás és Korszerűsítés</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Teljes lakás elektromos rendszer felújítása, biztosítéktábla csere, kábelezés. 800–1 200 Ft/m²-től, garanciális munka, teljes dokumentációval.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Teljes rendszer csere','✅ Biztosítéktábla','✅ Fürdőszoba villamosság','✅ 800 Ft/m²-től'].map(f => (
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
        <div className="container-main max-w-4xl">

          <h2 className="text-2xl font-black text-gray-900 mb-5">Mikor muszáj felújítani az elektromos rendszert?</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              '1990 előtt épült épület, nem volt felújítás azóta',
              'Alumínium kábelezés van (tűzveszélyes!)',
              'Nincs földelés (csak 2 eres rendszer)',
              'Még olvadóbiztosíték van (nem kismegszakító)',
              'Folyamatosan kiugrik a biztosíték',
              'Kevés aljzat – hosszabbítók mindenhol',
            ].map(w => (
              <div key={w} className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <span className="text-red-500 shrink-0">⚠️</span>
                <span className="text-sm text-red-800 font-medium">{w}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-5">A felújítás folyamata</h2>
          <div className="space-y-4 mb-10">
            {[
              { n:'1', t:'Ingyenes helyszíni felmérés', d:'Megvizsgáljuk az aktuális állapotot, meghatározzuk mit szükséges cserélni. 0 Ft.' },
              { n:'2', t:'Írásos árajánlat', d:'Részletes, tételes árajánlat. Meglepetés nélküli végeredmény.' },
              { n:'3', t:'Nyomvonal fektetés (falnyitás előtt!)', d:'Mindig a vakolás és burkolás ELŐTT – utólag nagyon drága pótolni.' },
              { n:'4', t:'Biztosítéktábla csere', d:'Modern tábla: kismegszakítók, FI relé, túlfeszültség védelem.' },
              { n:'5', t:'Kábelezés és szerelvények', d:'Megfelelő keresztmetszetű réz kábelek, elegendő aljzat tervezéssel.' },
              { n:'6', t:'Átadás és dokumentáció', d:'Átadási dokumentum, tűzvédelmi nyilatkozat – minden papír rendben.' },
            ].map(s => (
              <div key={s.n} className="flex gap-4">
                <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-black shrink-0 text-sm">{s.n}</div>
                <div className="pt-1">
                  <div className="font-bold text-gray-900 mb-0.5">{s.t}</div>
                  <p className="text-sm text-gray-600">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4">Árak</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200 mb-10">
            <table className="w-full text-sm">
              <thead className="bg-gray-50"><tr>
                <th className="text-left p-3 font-semibold text-gray-700">Munka</th>
                <th className="text-right p-3 font-semibold text-gray-700">Ártól</th>
              </tr></thead>
              <tbody className="divide-y divide-gray-100">
                {[['Teljes lakás felújítás','800–1 200 Ft/m²'],['Részleges felújítás (1 szoba)','40 000–80 000 Ft'],['Biztosítéktábla csere','35 000–60 000 Ft'],['Fürdőszoba villanyszerelés','25 000–50 000 Ft'],['Kismegszakító csere','8 000 Ft/db'],['Aljzat / kapcsoló csere','5 000 Ft/db']].map(([m,a]) => (
                  <tr key={m} className="hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{m}</td>
                    <td className="p-3 text-right font-bold text-amber-600">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-xl">🏠</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Lakásfelújítás villanyszerelés {c.suffixOn}</div>
                  <div className="text-xs text-gray-400">{c.county}</div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/blog/villanyszereles-felujitas-mire-figyelj/"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
            <span className="text-2xl">📖</span>
            <div>
              <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Lakásfelújítás villanyszerelés – mire figyeljen? Teljes checklist</div>
              <div className="text-xs text-gray-400 mt-0.5">9 perces olvasás · Felújítás</div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
