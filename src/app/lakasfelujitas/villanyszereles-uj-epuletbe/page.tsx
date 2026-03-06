import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Villanyszerelés Új Épületbe – Új Építés Villanyszerelő Pest Megye | Villanymester',
  description: 'Új építés villanyszerelő Pest megyében ✓ Tervektől az átadásig ✓ Elektromos rendszer tervezés és kivitelezés ✓ MSZ HD 60364 szerint ✓ Garanciális munka ➤ Ingyenes árajánlat!',
  alternates: { canonical: `${SITE.url}/lakasfelujitas/villanyszereles-uj-epuletbe/` },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phone,
    url: `${SITE.url}/lakasfelujitas/villanyszereles-uj-epuletbe/`,
    address: { '@type': 'PostalAddress', addressRegion: 'Pest', addressCountry: 'HU' },
    description: 'Új építés villanyszerelő Pest megyében. Teljes elektromos rendszer tervezés és kivitelezés új épületekbe, hatósági engedélyekkel.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Lakásfelújítás villanyszerelés', item: `${SITE.url}/lakasfelujitas/` },
      { '@type': 'ListItem', position: 3, name: 'Villanyszerelés új épületbe', item: `${SITE.url}/lakasfelujitas/villanyszereles-uj-epuletbe/` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Mikor kell villanyszerelőt hívni új építésnél?', acceptedAnswer: { '@type': 'Answer', text: 'Az elektromos rendszer tervezésével és az első konzultációval még a falak felhúzása előtt el kell kezdeni. Az előkészítő munkákat (csőhálózat, dobozok) a vakolás előtt, a végleges bekötést a burkolás és festés után végezzük.' }},
      { '@type': 'Question', name: 'Milyen engedélyek kellenek új épület villanyszereléshez?', acceptedAnswer: { '@type': 'Answer', text: 'Új építésű ingatlanhoz hatósági engedély és a hálózati csatlakozáshoz ELMŰ/ÉMÁSZ hozzájárulás szükséges. Segítünk az engedélyezési folyamatban és az összes szükséges dokumentum elkészítésében.' }},
      { '@type': 'Question', name: 'Mennyibe kerül az új építés villanyszerelése?', acceptedAnswer: { '@type': 'Answer', text: 'Új építésű lakásnál az elektromos rendszer kiépítése 1 200–2 000 Ft/m²-től indul, a tervezett körök számától és a felhasznált anyagoktól függően. Egy 80 m²-es háznál ez 96 000–160 000 Ft anyag nélkül.' }},
      { '@type': 'Question', name: 'Mi a különbség az új építés és a felújítás villanyszerelése között?', acceptedAnswer: { '@type': 'Answer', text: 'Új építésnél a rendszert a nulláról tervezzük, nincs bontási és falbontási munka. A nyomvonalakat a falak elkészülte előtt alakítjuk ki, ami pontosabb és olcsóbb megoldást tesz lehetővé.' }},
      { '@type': 'Question', name: 'Hogyan tervezzék meg az aljzatok számát és elhelyezkedését?', acceptedAnswer: { '@type': 'Answer', text: 'Minimum szobánként 4–6 aljzatot javaslunk, konyhában 8–10-et, fürdőszobában 2–3-at megfelelő IP-védettséggel. Villanyszerelőink segítenek az optimális elrendezés megtervezésében az életviteli szokásokhoz igazítva.' }},
    ]
  }
]

const steps = [
  { n: '1', t: 'Tervezési konzultáció', d: 'Még az építési engedélyezés fázisában egyeztetünk az elektromos rendszer terveiről. Meghatározzuk az elosztótábla helyét, a körök számát, az aljzatok és kapcsolók elrendezését. Ez a lépés hosszú távon spórol meg sok pénzt és gondot.' },
  { n: '2', t: 'Csőhálózat és dobozok elhelyezése', d: 'A falak felhúzása után, de a vakolás előtt kerülnek be az elektromos csövek és dobozok. Ez az a pont, ahol a nyomvonalakat kialakítjuk – a vakolás után ez már drága és nehéz utómunka lenne.' },
  { n: '3', t: 'Kábelfektetés', d: 'A vakolás után a csövekbe behúzzuk a megfelelő keresztmetszetű rézkábeleket. Minden kör – világítás, aljzat, klíma, főző, mosógép – külön biztosítékos körön fut.' },
  { n: '4', t: 'Elosztótábla szerelése', d: 'Modern, felcímkézett kismegszakítós tábla, FI-relével, esetleg túlfeszültség-védelemmel. Az elosztótáblát a falba süllyesztve vagy falon kívül is kialakíthatjuk az igények szerint.' },
  { n: '5', t: 'Szerelvényezés és végső bekötések', d: 'A burkolás és festés befejezése után kerülnek fel az aljzatok, kapcsolók, lámpatartók. Ekkor csatlakoztatjuk a gépeket (klíma, tűzhely, bojler) is.' },
  { n: '6', t: 'Hatósági átadás és dokumentáció', d: 'Elvégezzük a szükséges méréseket, elkészítjük az átadási dokumentumot, tűzvédelmi nyilatkozatot, és segítünk a ELMŰ/ÉMÁSZ felé intézendő csatlakozási eljárásban.' },
]

export default function UjEpuletPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/lakasfelujitas/" className="hover:text-amber-600">Lakásfelújítás villanyszerelés</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Villanyszerelés új épületbe</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-4xl">
          <div className="badge mb-5">🏗️ Új Építés Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Villanyszerelés Új Épületbe –<br/>
            <span className="text-amber-400">Tervektől az Átadásig</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Új építés villanyszerelő Pest megyében. Teljes elektromos rendszer tervezés és kivitelezés, hatósági engedélyezés, ELMŰ/ÉMÁSZ csatlakozás. Garanciális munka, átlátható árak, MSZ HD 60364 szerint.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Tervezés és kivitelezés','✅ Hatósági engedélyezés','✅ ELMŰ/ÉMÁSZ csatlakozás','✅ Ingyenes árajánlat'].map(f => (
              <span key={f} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">📞 {SITE.phoneDisplay}</a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">📋 Ingyenes árajánlat</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Miért fontos az új építés villanyszerelőt időben bevonni?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Az <strong>új építés villanyszerelő</strong> bevonása nem az utolsó pillanatra való feladat. A legjobb döntés az, ha még a tervek véglegesítése előtt egyeztetünk – ekkor lehet a legolcsóbban és a leghatékonyabban kialakítani a nyomvonalakat, a csőhálózatot és az elosztótábla helyét. Az utólagos módosítás nemcsak drágább, hanem esztétikailag is kompromisszumokhoz vezet.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            A <strong>lakásfelújítás villanyszerelés</strong>hez képest az új építésnél óriási előny, hogy nem kell semmit bontani: a falak üresek, a csövek a tervezett helyükre kerülnek, és az egész rendszer a modern igényekre szabható. Pest megye egész területén vállalunk új építésű ház és lakás teljes elektromos kivitelezését.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Az új építés villanyszerelés folyamata</h2>
          <div className="space-y-4 mb-10">
            {steps.map(s => (
              <div key={s.n} className="flex gap-4">
                <div className="w-9 h-9 bg-amber-500 text-white rounded-full flex items-center justify-center font-black shrink-0 text-sm">{s.n}</div>
                <div className="pt-1">
                  <div className="font-bold text-gray-900 mb-1">{s.t}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Mit tervezzünk az elektromos rendszerbe?</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Egy jól megtervezett <strong>elektromos rendszer</strong> évtizedekig problémamentesen üzemel. Az alábbi elemekre mindenképpen érdemes odafigyelni az új építésnél:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: '⚡', title: 'Elegendő kör a táblában', desc: 'Legalább 1 kör/szoba világításra, 1–2 kör/szoba aljzatokra, külön körök a nagy fogyasztóknak (főző, bojler, klíma, mosógép, szárítógép).' },
              { icon: '🔌', title: 'Aljzatok száma és elhelyezése', desc: 'Szobánként minimum 4–6 aljzat, konyhában 8–10, hogy ne legyen szükség hosszabbítókra. Külső téren és garázsban is érdemes aljzatot tervezni.' },
              { icon: '💡', title: 'Világítási körök', desc: 'Terasz, kert, garázs, folyosó külön körön. LED-dimmer kompatibilis kapcsolók tervezése, ha dimmelhető fényforrásokat tervezünk.' },
              { icon: '📡', title: 'Gyenge áramú rendszerek', desc: 'Internet (CAT6 kábel), TV antennajel, kaputelefon és riasztó csövezése egy időben, hogy utólag ne kelljen falat bontani.' },
              { icon: '🚗', title: 'EV töltő előkészítés', desc: 'Ha az autóbeálló a közelben van, érdemes már most előkészíteni a 32A-es kört a jövőbeli elektromos autó töltőhöz. Utólag ez jóval többe kerül.' },
              { icon: '☀️', title: 'Napelem előkészítés', desc: 'Napelem bekötéshez szükséges inverter helye, kétirányú mérő és kábel nyomvonal előre tervezve – ez az energia-önellátás alapfeltétele.' },
            ].map(s => (
              <div key={s.title} className="flex gap-4 p-5 border border-gray-100 rounded-xl hover:border-amber-200 transition-colors">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <div className="font-bold text-gray-900 mb-1 text-sm">{s.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Árak – Új építés villanyszerelés</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Az új építés villanyszerelés díja a tervezett rendszer összetettségétől függ. Az alábbi árak iránymutatók; a pontos összeget az ingyenes helyszíni konzultáció és az elektromos terv alapján adjuk meg.
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
                  ['Új lakás teljes villanyszerelés (anyag nélkül)','1 200–2 000 Ft/m²'],
                  ['Új ház teljes villanyszerelés (anyag nélkül)','1 500–2 500 Ft/m²'],
                  ['Elektromos terv készítés','20 000–50 000 Ft'],
                  ['Elosztótábla tervezés és szerelés','50 000–120 000 Ft'],
                  ['ELMŰ/ÉMÁSZ csatlakozási ügyintézés','15 000–30 000 Ft'],
                  ['EV töltő előkészítő kör kialakítása','25 000–40 000 Ft'],
                ].map(([m,a]) => (
                  <tr key={m} className="hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{m}</td>
                    <td className="p-3 text-right font-bold text-amber-600">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Új építés villanyszerelő – Pest megye városai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-xl">🏗️</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Új építés villanyszerelő {c.name}</div>
                  <div className="text-xs text-gray-400">{c.county}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-4 mb-10">
            <Link href="/lakasfelujitas/furdoszoba-villanyszereles/"
              className="flex-1 card hover:border-amber-200 transition-all group text-center">
              <div className="text-2xl mb-2">🚿</div>
              <div className="font-bold text-sm text-gray-900 group-hover:text-amber-600">Fürdőszoba villanyszerelés</div>
              <div className="text-xs text-gray-400 mt-1">Biztonsági zónák, IP védettség</div>
            </Link>
            <Link href="/lakasfelujitas/"
              className="flex-1 card hover:border-amber-200 transition-all group text-center">
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-bold text-sm text-gray-900 group-hover:text-amber-600">Lakásfelújítás villanyszerelés</div>
              <div className="text-xs text-gray-400 mt-1">Elektromos rendszer felújítás</div>
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Gyakori kérdések – Új építés villanyszerelés</h2>
          <div className="space-y-4">
            {[
              { q: 'Mikor kell villanyszerelőt hívni új építésnél?', a: 'Az elektromos rendszer tervezésével és az első konzultációval még a falak felhúzása előtt el kell kezdeni. Az előkészítő munkákat (csőhálózat, dobozok) a vakolás előtt, a végleges bekötést a burkolás és festés után végezzük.' },
              { q: 'Milyen engedélyek kellenek új épület villanyszereléshez?', a: 'Új építésű ingatlanhoz hatósági engedély és a hálózati csatlakozáshoz ELMŰ/ÉMÁSZ hozzájárulás szükséges. Segítünk az engedélyezési folyamatban és az összes szükséges dokumentum elkészítésében.' },
              { q: 'Mennyibe kerül az új építés villanyszerelése?', a: 'Új építésű lakásnál az elektromos rendszer kiépítése 1 200–2 000 Ft/m²-től indul, a tervezett körök számától és a felhasznált anyagoktól függően. Egy 80 m²-es háznál ez 96 000–160 000 Ft anyag nélkül.' },
              { q: 'Mi a különbség az új építés és a felújítás villanyszerelése között?', a: 'Új építésnél a rendszert a nulláról tervezzük, nincs bontási és falbontási munka. A nyomvonalakat a falak elkészülte előtt alakítjuk ki, ami pontosabb és olcsóbb megoldást tesz lehetővé.' },
              { q: 'Hogyan tervezzék meg az aljzatok számát és elhelyezkedését?', a: 'Minimum szobánként 4–6 aljzatot javaslunk, konyhában 8–10-et, fürdőszobában 2–3-at megfelelő IP-védettséggel. Villanyszerelőink segítenek az optimális elrendezés megtervezésében az életviteli szokásokhoz igazítva.' },
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
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Kérjen árajánlatot az új építéshez!</h2>
          <p className="text-amber-100 mb-8 text-lg">Ingyenes konzultáció és árajánlat – Pest megye egész területén.</p>
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
