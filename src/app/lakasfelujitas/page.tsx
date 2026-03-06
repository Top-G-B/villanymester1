import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Lakásfelújítás Villanyszerelés Pest Megye 2025 | Villanymester',
  description: 'Teljes lakásfelújítás villanyszerelés Pest megyében ✓ Elektromos rendszer felújítás, biztosítéktábla csere, kábelezés ✓ 800–1200 Ft/m² ✓ Garanciális munka ➤ Ingyenes felmérés!',
  alternates: { canonical: `${SITE.url}/lakasfelujitas/` },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phone,
    url: `${SITE.url}/lakasfelujitas/`,
    address: { '@type': 'PostalAddress', addressRegion: 'Pest', addressCountry: 'HU' },
    description: 'Lakásfelújítás villanyszerelés Pest megyében. Elektromos rendszer felújítás, biztosítéktábla csere, teljes kábelezés.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Mennyibe kerül a lakásfelújítás villanyszerelés?', acceptedAnswer: { '@type': 'Answer', text: 'A teljes lakás elektromos rendszer felújítása 800–1 200 Ft/m²-től indul. Egy 60 m²-es lakásnál ez 48 000–72 000 Ft anyag nélkül. Pontos árajánlatot ingyenes helyszíni felmérésen adunk.' }},
      { '@type': 'Question', name: 'Meddig tart egy lakás villanyszerelésének felújítása?', acceptedAnswer: { '@type': 'Answer', text: 'Egy átlagos 60–80 m²-es lakás teljes elektromos felújítása 3–5 munkanapot vesz igénybe. A kivitelezést mindig a burkolás és festés előtt kell elvégezni.' }},
      { '@type': 'Question', name: 'Mikor kötelező felújítani az elektromos rendszert?', acceptedAnswer: { '@type': 'Answer', text: 'Törvény nem ír elő kötelező felújítási időszakot, de 1990 előtt épült, azóta nem felújított épületeknél erősen ajánlott. Különösen, ha alumínium kábelezés vagy olvadóbiztosíték van a lakásban.' }},
      { '@type': 'Question', name: 'Kell-e engedély a lakás villanyszerelés felújításához?', acceptedAnswer: { '@type': 'Answer', text: 'Meglévő rendszer felújítása általában nem igényel hatósági engedélyt, de a munkát csak szakképzített villanyszerelő végezheti. A befejezésről átadási dokumentumot és tűzvédelmi nyilatkozatot állítunk ki.' }},
      { '@type': 'Question', name: 'Milyen garanciát adnak a villanyszerelésre?', acceptedAnswer: { '@type': 'Answer', text: 'Minden elvégzett villanyszerelési munkára 2 év garanciát vállalunk. A felhasznált anyagokra a gyártói garancia érvényes (általában 5 év).' }},
    ]
  }
]

export default function LakasfelujitasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Lakásfelújítás villanyszerelés</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-4xl">
          <div className="badge mb-5">🏠 Lakásfelújítás Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Lakásfelújítás Villanyszerelés –<br/>
            <span className="text-amber-400">Pest Megye</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Teljes elektromos rendszer felújítás, biztosítéktábla csere, új kábelezés. Pest megye 5 városában gyors kiszállás, garanciális munka, átlátható árak. 800–1 200 Ft/m²-től.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Teljes rendszer felújítás','✅ Biztosítéktábla csere','✅ Fürdőszoba villanyszerelés','✅ Ingyenes felmérés'].map(f => (
              <span key={f} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">📞 {SITE.phoneDisplay}</a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">📋 Ingyenes felmérés</Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section bg-white">
        <div className="container-main max-w-4xl">

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Mi az a lakásfelújítás villanyszerelés?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A <strong>lakásfelújítás villanyszerelés</strong> magában foglalja az épület teljes elektromos rendszerének felülvizsgálatát, korszerűsítését és szükség szerint cseréjét. Ez lehet részleges – például egyetlen szoba újrakábelezése – vagy teljes körű, amely az elosztótáblától az utolsó aljzatig mindent lefed. Pest megyében különösen sok az 1970–1990 között épült lakótelep, ahol az eredeti alumínium vagy régi szigetelésű rézkábel felújítása már nem halasztható.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Az <strong>elektromos rendszer felújítás</strong> nem csupán kényelmi kérdés: a kopott szigetelés és az elavult biztosítéktábla tűzveszélyes, sőt életveszélyes lehet. Villanyszerelőink Érden, Gödöllőn, Dunakeszin, Szentendrén és Vácon is elérhetők, és ingyenes helyszíni felméréssel segítik a döntést.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Mikor szükséges a villanyszerelés felújítása?</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {[
              '1990 előtt épült lakás, azóta nem volt felújítás',
              'Alumínium kábelezés (tűzveszélyes, biztosítási kizáró ok)',
              'Nincs földelés – csak 2 eres régi rendszer',
              'Még olvadóbiztosíték van, nem kismegszakító',
              'Rendszeresen kiesik az áram terhelés alatt',
              'Kevés aljzat – hosszabbítók és elosztók mindenhol',
              'Barnuló, melegedő kapcsolók és aljzatok',
              'Biztosítéktábla rozsdás, feliratok olvashatatlanok',
            ].map(w => (
              <div key={w} className="flex gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                <span className="text-red-500 shrink-0">⚠️</span>
                <span className="text-sm text-red-800 font-medium">{w}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Mit tartalmaz a teljes elektromos rendszer felújítás?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            A <strong>lakásfelújítás villanyszerelés</strong> során minden munkát a hatályos MSZ HD 60364 szabvány szerint végzünk. A csomag jellemzően az alábbi elemeket foglalja magában, de az ingyenes felmérésen pontosítjuk az elvégzendő munkák körét:
          </p>
          <div className="space-y-4 mb-10">
            {[
              { icon: '🔌', title: 'Biztosítéktábla csere', desc: 'Régi olvadóbiztosítékos tábla helyett modern kismegszakítós elosztó, FI-relével és túlfeszültség-védelemmel. Pest megye területén 35 000–60 000 Ft-tól vállaljuk.' },
              { icon: '🔧', title: 'Teljes újrakábelezés', desc: 'Megfelelő keresztmetszetű (2,5 mm² vagy 4 mm²) rézkábelek fektése falon belül, vakolat alatt. Minden kör külön biztosítékon fut.' },
              { icon: '💡', title: 'Aljzatok és kapcsolók cseréje', desc: 'Elegendő számú aljzat a modern igényekhez – konyha, nappali, hálószoba, fürdő. Minden kör megfelelő áramerősségű vezetéket kap.' },
              { icon: '🚿', title: 'Fürdőszoba villanyszerelés', desc: 'Vizes helyiségekre vonatkozó biztonsági zónák betartása, IP-védett szerelvények, tükörvilágítás, fürdőszoba ventilátor bekötése.' },
              { icon: '📋', title: 'Átadási dokumentáció', desc: 'Tűzvédelmi megfelelőségi nyilatkozat, átadási dokumentum – minden, ami a biztosítónak és a hatóságnak kell.' },
              { icon: '🛡️', title: '2 év garancia', desc: 'Minden elvégzett munkára 2 éves garanciát vállalunk. Az anyagokra gyártói garancia érvényes.' },
            ].map(s => (
              <div key={s.title} className="flex gap-4 p-5 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors">
                <span className="text-3xl shrink-0">{s.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1">{s.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Lakásfelújítás villanyszerelés árak 2025</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Az alábbi árak tájékoztató jellegűek. A pontos végösszeget az ingyenes helyszíni felmérés alapján adjuk meg, figyelembe véve a lakás méretét, az elvégzendő munkák körét és az anyagköltségeket. A <strong>biztosítéktábla csere Pest megye</strong> területén általában 35 000–60 000 Ft, a teljes lakás újrakábelezése 800–1 200 Ft/m²-től indul.
          </p>
          <div className="overflow-hidden rounded-xl border border-gray-200 mb-10">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Munka</th>
                  <th className="text-right p-3 font-semibold text-gray-700">Ártól</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ['Teljes lakás elektromos rendszer felújítás','800–1 200 Ft/m²'],
                  ['Részleges felújítás (1–2 szoba)','40 000–80 000 Ft'],
                  ['Biztosítéktábla csere','35 000–60 000 Ft'],
                  ['Fürdőszoba villanyszerelés','25 000–50 000 Ft'],
                  ['Aljzat / kapcsoló csere','5 000 Ft/db-tól'],
                  ['Kismegszakító csere','8 000 Ft/db-tól'],
                  ['Kábel fektetés','2 000–3 500 Ft/fm'],
                ].map(([m,a]) => (
                  <tr key={m} className="hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{m}</td>
                    <td className="p-3 text-right font-bold text-amber-600">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Részletes útmutatók a témában</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <Link href="/lakasfelujitas/villanyszereles-uj-epuletbe/"
              className="card hover:border-amber-200 hover:-translate-y-1 transition-all group">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 mb-2">Villanyszerelés új épületbe</h3>
              <p className="text-sm text-gray-500">Tervektől az átadásig: mit kell tudni az új építésű ingatlan elektromos rendszeréről?</p>
            </Link>
            <Link href="/lakasfelujitas/furdoszoba-villanyszereles/"
              className="card hover:border-amber-200 hover:-translate-y-1 transition-all group">
              <div className="text-3xl mb-3">🚿</div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 mb-2">Fürdőszoba villanyszerelés</h3>
              <p className="text-sm text-gray-500">Biztonsági zónák, IP védettség, fűtött padló – minden, amit a fürdőszobai villanyszerelésről tudni kell.</p>
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Vállaljuk Pest megye összes városában</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-xl">🏠</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Lakásfelújítás villanyszerelés {c.name}</div>
                  <div className="text-xs text-gray-400">{c.county}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Gyakori kérdések</h2>
          <div className="space-y-4">
            {[
              { q: 'Mennyibe kerül a lakásfelújítás villanyszerelés?', a: 'A teljes lakás elektromos rendszer felújítása 800–1 200 Ft/m²-től indul. Egy 60 m²-es lakásnál ez 48 000–72 000 Ft anyag nélkül. Pontos árajánlatot ingyenes helyszíni felmérésen adunk.' },
              { q: 'Meddig tart egy lakás villanyszerelésének felújítása?', a: 'Egy átlagos 60–80 m²-es lakás teljes elektromos felújítása 3–5 munkanapot vesz igénybe. A kivitelezést mindig a burkolás és festés előtt kell elvégezni.' },
              { q: 'Mikor kötelező felújítani az elektromos rendszert?', a: 'Törvény nem ír elő kötelező felújítási időszakot, de 1990 előtt épült, azóta nem felújított épületeknél erősen ajánlott. Különösen, ha alumínium kábelezés vagy olvadóbiztosíték van a lakásban.' },
              { q: 'Kell-e engedély a lakás villanyszerelés felújításához?', a: 'Meglévő rendszer felújítása általában nem igényel hatósági engedélyt, de a munkát csak szakképzített villanyszerelő végezheti. A befejezésről átadási dokumentumot és tűzvédelmi nyilatkozatot állítunk ki.' },
              { q: 'Milyen garanciát adnak a villanyszerelésre?', a: 'Minden elvégzett villanyszerelési munkára 2 év garanciát vállalunk. A felhasznált anyagokra a gyártói garancia érvényes (általában 5 év).' },
            ].map((faq, i) => (
              <details key={i} className="card group">
                <summary className="cursor-pointer font-semibold text-gray-900 flex justify-between items-center list-none">
                  {faq.q}
                  <span className="text-amber-500 ml-3 shrink-0 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-14">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Kérjen ingyenes felmérést!</h2>
          <p className="text-amber-100 mb-8 text-lg">Díjmentes helyszíni felmérés – Pest megye egész területén.</p>
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
