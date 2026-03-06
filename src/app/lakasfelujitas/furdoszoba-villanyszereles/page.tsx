import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Fürdőszoba Villanyszerelés Pest Megye 2025 | Villanymester',
  description: 'Fürdőszoba villanyszerelés Pest megyében ✓ Biztonsági zónák, IP védettség, padlófűtés, tükörvilágítás ✓ Garanciális munka ✓ Lakásfelújítás villanyszerelés ➤ Ingyenes felmérés!',
  alternates: { canonical: `${SITE.url}/lakasfelujitas/furdoszoba-villanyszereles/` },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phone,
    url: `${SITE.url}/lakasfelujitas/furdoszoba-villanyszereles/`,
    address: { '@type': 'PostalAddress', addressRegion: 'Pest', addressCountry: 'HU' },
    description: 'Fürdőszoba villanyszerelés Pest megyében. Biztonsági zónák betartása, IP-védett szerelvények, elektromos padlófűtés, tükörvilágítás.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Lakásfelújítás villanyszerelés', item: `${SITE.url}/lakasfelujitas/` },
      { '@type': 'ListItem', position: 3, name: 'Fürdőszoba villanyszerelés', item: `${SITE.url}/lakasfelujitas/furdoszoba-villanyszereles/` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Milyen aljzatot lehet a fürdőszobában elhelyezni?', acceptedAnswer: { '@type': 'Answer', text: 'A fürdőszobában csak a 2. zónában (60 cm-nél távolabb a zuhanytól/kádtól) és azon kívül helyezhető el aljzat, minimum IP44 védettséggel és SELV (12V) vagy FI-relés védelemmel. Az 1. zónában (zuhanyfej vagy kád közvetlen közelében) aljzat nem helyezhető el.' }},
      { '@type': 'Question', name: 'Kötelező-e FI-relé a fürdőszobában?', acceptedAnswer: { '@type': 'Answer', text: 'Igen, a hatályos MSZ HD 60364-7-701 szabvány szerint a fürdőszoba minden áramköréhez 30 mA érzékenységű FI-relés védelem szükséges. Ez érintésvédelmi szempontból alapvető biztonsági követelmény.' }},
      { '@type': 'Question', name: 'Mennyibe kerül a fürdőszoba villanyszerelés?', acceptedAnswer: { '@type': 'Answer', text: 'Egy átlagos fürdőszoba teljes villanyszerelése (aljzat, kapcsoló, tükörvilágítás, ventilátor, törölközőszárító bekötése) 25 000–50 000 Ft-tól indul, a mérettől és a tervezett szerelvényektől függően.' }},
      { '@type': 'Question', name: 'Szükséges-e engedély a fürdőszoba villanyszerelés felújításához?', acceptedAnswer: { '@type': 'Answer', text: 'Meglévő fürdőszoba elektromos rendszerének felújítása általában nem igényel hatósági engedélyt, de a munkát kizárólag szakképzített villanyszerelő végezheti. Elvégzés után átadási dokumentumot és tűzvédelmi nyilatkozatot állítunk ki.' }},
      { '@type': 'Question', name: 'Beköthetünk elektromos padlófűtést a fürdőszobába?', acceptedAnswer: { '@type': 'Answer', text: 'Igen, elektromos padlófűtés a fürdőszobában teljesen megoldható, sőt nagyon népszerű. A fűtőkábel vagy fűtőszőnyeg bekötéséhez külön áramkör és termosztát szükséges. Az anyag és a bekötés együtt 40 000–80 000 Ft körül van.' }},
    ]
  }
]

const zones = [
  { zone: '0. zóna', desc: 'Kád vagy zuhanykabin belseje', rule: 'Semmilyen elektromos szerelvény nem helyezhető el', color: 'bg-red-100 border-red-300 text-red-900' },
  { zone: '1. zóna', desc: '0,6 m a kád/zuhany fölött és oldalán', rule: 'Csak IPX4+ védettségű rögzített eszköz (pl. vízálló lámpa)', color: 'bg-orange-100 border-orange-300 text-orange-900' },
  { zone: '2. zóna', desc: '0,6–1,2 m-re a kád/zuhanytól', rule: 'IPX4+ lámpa, aljzat csak SELV vagy FI-relével', color: 'bg-yellow-100 border-yellow-300 text-yellow-900' },
  { zone: 'Külső zóna', desc: '1,2 m-nél távolabb minden irányban', rule: 'Normál szerelvények, de FI-relé kötelező az egész fürdőhöz', color: 'bg-green-100 border-green-300 text-green-900' },
]

export default function FurdoszobaPage() {
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
            <span className="text-gray-700 font-medium">Fürdőszoba villanyszerelés</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-4xl">
          <div className="badge mb-5">🚿 Fürdőszoba Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Fürdőszoba Villanyszerelés –<br/>
            <span className="text-amber-400">Biztonságosan, Szabályosan</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
            Fürdőszoba villanyszerelés Pest megyében. Biztonsági zónák pontos betartása, IP-védett szerelvények, FI-relés védelem, elektromos padlófűtés bekötése. Garanciális munka, MSZ HD 60364-7-701 szerint.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Biztonsági zónák','✅ IP védett szerelvények','✅ FI-relés védelem','✅ Padlófűtés bekötés'].map(f => (
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

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Miért különleges a fürdőszoba villanyszerelés?</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A <strong>fürdőszoba villanyszerelés</strong> az egyik legkritikusabb feladat egy lakás elektromos rendszerének kiépítésekor vagy felújításakor. A vizes helyiségekben az elektromos áram és a víz kombinációja közvetlen életveszélyt jelent, ezért szigorú szabványok vonatkoznak a szerelvények elhelyezésére, védettségi fokozatára és az áramköri védelemre. A hatályos MSZ HD 60364-7-701 szabvány pontosan meghatározza, hogy melyik zónában milyen eszköz helyezhető el.
          </p>
          <p className="text-gray-600 mb-10 leading-relaxed">
            A <strong>lakásfelújítás villanyszerelés</strong> részeként a fürdőszoba rendszerint az első és legfontosabb elvégzendő feladat. Ha a fürdőszobában az elektromos rendszer elavult – nincs FI-relé, hiányzik a földelés, vagy nem megfelelő IP-védettségű szerelvények vannak beépítve – azt mielőbb orvosolni kell. Pest megye egész területén vállaljuk a fürdőszobai villanyszerelési munkákat.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Biztonsági zónák a fürdőszobában</h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Az MSZ HD 60364-7-701 szabvány 4 zónát határoz meg, amelyek meghatározzák, hogy milyen elektromos eszközök helyezhetők el az egyes területeken. Ezeket minden <strong>fürdőszoba villanyszerelés</strong>nél szigorúan be kell tartani:
          </p>
          <div className="space-y-3 mb-10">
            {zones.map(z => (
              <div key={z.zone} className={`flex gap-4 p-4 border rounded-xl ${z.color}`}>
                <div className="font-black text-sm shrink-0 w-24">{z.zone}</div>
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-0.5">{z.desc}</div>
                  <div className="text-xs opacity-80">{z.rule}</div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Mit tartalmaz a fürdőszoba villanyszerelés?</h2>
          <div className="space-y-4 mb-10">
            {[
              { icon: '🛡️', title: 'FI-relés védelem (kötelező)', desc: 'A hatályos szabvány szerint a fürdőszoba minden áramköréhez 30 mA érzékenységű FI-relés védelmet kell alkalmazni. Ez az érintésvédelem alapkövetelménye – ha nincs, azonnal pótolni kell.' },
              { icon: '💡', title: 'IP-védett lámpatestek', desc: 'A zuhanyzó és kád közelében legalább IP44, de inkább IP65 védettségű lámpatesteket szabad beépíteni. A tükörvilágításhoz külön, vízálló LED-spot vagy tükör-lámpa kerül.' },
              { icon: '🔌', title: 'Aljzat elhelyezése szabályosan', desc: 'A fürdőszobai aljzat csak a 2. és külső zónában, minimum IP44 védelemmel és FI-relés körön helyezhető el. Ideális helye a tükör melletti fal, a kádtól/zuhanytól legalább 60 cm-re.' },
              { icon: '🌡️', title: 'Elektromos padlófűtés', desc: 'Fűtőkábel vagy fűtőszőnyeg bekötése termosztáttal – külön áramkörön. A burkolás előtt kell lefektetni, utólag már nem tehető be rombolás nélkül. Bekötési ára 15 000–25 000 Ft.' },
              { icon: '💨', title: 'Ventilátor és páraelszívó', desc: 'Fürdőszobai szellőztető ventilátor bekötése: általában a kapcsolóval párhuzamosan vagy önálló időzítővel. Késleltetett kikapcsoló opciója is megoldható.' },
              { icon: '🔥', title: 'Törölközőszárító és bojler', desc: 'Elektromos törölközőszárítók, villany-bojler vagy azonnali vízmelegítő bekötése külön biztosítékos körre. A bojler általában 16A-es, a törölközőszárító 10A-es kört igényel.' },
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

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Fürdőszoba villanyszerelés árak 2025</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A <strong>fürdőszoba villanyszerelés</strong> ára a helyiség méretétől, a tervezett szerelvényektől és a szükséges munkáktól függ. Az alábbiakban tájékoztató árakat adunk meg; a pontos összeg az ingyenes helyszíni felmérésen derül ki.
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
                  ['Teljes fürdőszoba villanyszerelés','25 000–50 000 Ft'],
                  ['FI-relé beépítés (ha hiányzik)','12 000–20 000 Ft'],
                  ['IP-védett lámpatest csere','5 000–12 000 Ft/db'],
                  ['Fürdőszobai aljzat beépítése','8 000–15 000 Ft/db'],
                  ['Elektromos padlófűtés bekötése','15 000–25 000 Ft'],
                  ['Törölközőszárító bekötése','8 000–12 000 Ft'],
                  ['Villany-bojler bekötése','15 000–25 000 Ft'],
                  ['Ventilátor bekötése','8 000–12 000 Ft'],
                ].map(([m,a]) => (
                  <tr key={m} className="hover:bg-gray-50">
                    <td className="p-3 text-gray-700">{m}</td>
                    <td className="p-3 text-right font-bold text-amber-600">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">Fürdőszoba villanyszerelés – Pest megye városai</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-xl">🚿</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Fürdőszoba villanyszerelés {c.name}</div>
                  <div className="text-xs text-gray-400">{c.county}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex gap-4 mb-10">
            <Link href="/lakasfelujitas/villanyszereles-uj-epuletbe/"
              className="flex-1 card hover:border-amber-200 transition-all group text-center">
              <div className="text-2xl mb-2">🏗️</div>
              <div className="font-bold text-sm text-gray-900 group-hover:text-amber-600">Villanyszerelés új épületbe</div>
              <div className="text-xs text-gray-400 mt-1">Tervektől az átadásig</div>
            </Link>
            <Link href="/lakasfelujitas/"
              className="flex-1 card hover:border-amber-200 transition-all group text-center">
              <div className="text-2xl mb-2">🏠</div>
              <div className="font-bold text-sm text-gray-900 group-hover:text-amber-600">Lakásfelújítás villanyszerelés</div>
              <div className="text-xs text-gray-400 mt-1">Elektromos rendszer felújítás</div>
            </Link>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">Gyakori kérdések – Fürdőszoba villanyszerelés</h2>
          <div className="space-y-4">
            {[
              { q: 'Milyen aljzatot lehet a fürdőszobában elhelyezni?', a: 'A fürdőszobában csak a 2. zónában (60 cm-nél távolabb a zuhanytól/kádtól) és azon kívül helyezhető el aljzat, minimum IP44 védettséggel és SELV (12V) vagy FI-relés védelemmel. Az 1. zónában aljzat nem helyezhető el.' },
              { q: 'Kötelező-e FI-relé a fürdőszobában?', a: 'Igen, a hatályos MSZ HD 60364-7-701 szabvány szerint a fürdőszoba minden áramköréhez 30 mA érzékenységű FI-relés védelem szükséges. Ez érintésvédelmi szempontból alapvető biztonsági követelmény.' },
              { q: 'Mennyibe kerül a fürdőszoba villanyszerelés?', a: 'Egy átlagos fürdőszoba teljes villanyszerelése (aljzat, kapcsoló, tükörvilágítás, ventilátor, törölközőszárító bekötése) 25 000–50 000 Ft-tól indul, a mérettől és a tervezett szerelvényektől függően.' },
              { q: 'Szükséges-e engedély a fürdőszoba villanyszerelés felújításához?', a: 'Meglévő fürdőszoba elektromos rendszerének felújítása általában nem igényel hatósági engedélyt, de a munkát kizárólag szakképzített villanyszerelő végezheti. Elvégzés után átadási dokumentumot és tűzvédelmi nyilatkozatot állítunk ki.' },
              { q: 'Beköthetünk elektromos padlófűtést a fürdőszobába?', a: 'Igen, elektromos padlófűtés a fürdőszobában teljesen megoldható, sőt nagyon népszerű. A fűtőkábel vagy fűtőszőnyeg bekötéséhez külön áramkör és termosztát szükséges. Az anyag és a bekötés együtt 40 000–80 000 Ft körül van.' },
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
          <p className="text-amber-100 mb-8 text-lg">Fürdőszoba villanyszerelés szabályosan, garanciával – Pest megye egész területén.</p>
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
