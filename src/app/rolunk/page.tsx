import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SITE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Rólunk | Villanymester Kft. – Megbízható villanyszerelő Pest megyében',
  description: 'Több mint 10 éves szakmai tapasztalattal rendelkező, garanciális munkát végző villanyszerelő csapat. Ismerje meg a Villanymester Kft. történetét és értékeit!',
  alternates: { canonical: `${SITE.url}/rolunk/` },
  openGraph: {
    title: 'Rólunk | Villanymester Kft. – Megbízható villanyszerelő Pest megyében',
    description: 'Több mint 10 éves szakmai tapasztalattal rendelkező, garanciális munkát végző villanyszerelő csapat.',
    url: `${SITE.url}/rolunk/`,
    type: 'website',
    locale: 'hu_HU',
  },
}

const stats = [
  { v: '10+', l: 'Év tapasztalat' },
  { v: '500+', l: 'Elégedett ügyfél' },
  { v: '100%', l: 'Garancia' },
  { v: '5', l: 'Kiszállási város' },
]

export default function Rolunk() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Rólunk | Villanymester Kft.',
    description: 'Több mint 10 éves szakmai tapasztalattal rendelkező, garanciális munkát végző villanyszerelő csapat.',
    url: `${SITE.url}/rolunk/`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Rólunk</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="container-main relative max-w-4xl text-center">
          <div className="badge mb-6">🤝 Rólunk</div>
          <h1 className="text-3xl md:text-5xl font-black mb-6">A Villanymester Kft. Története</h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Célunk, hogy Pest megye lakosai számára a legmagasabb minőségű, biztonságos és tartós elektromos megoldásokat nyújtsuk, kompromisszumok nélkül.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map(s => (
              <div key={s.l} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-black text-amber-400 mb-2">{s.v}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="prose prose-gray prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-black text-gray-900 mb-6">Hogyan kezdtük?</h2>
            <p>
              A <strong>Villanymester Kft.</strong> története több mint tíz évvel ezelőtt kezdődött, amikor néhány lelkes és magasan képzett villanyszerelő úgy döntött, hogy egyesítik tudásukat. A kezdetekkor még csak egy kis furgonnal és rengeteg motivációval indultunk neki Pest megye útjainak, hogy megoldjuk a legkisebb hibaelhárítási feladatokat is.
            </p>
            <p>
              Az évek során azonban a legfontosabb reklámunk az elégedett ügyfelek ajánlása lett. Ma már egy több gépjárműből álló flottával, összeszokott és precíz szakértői csapattal állunk rendelkezésre Érd, Gödöllő, Dunakeszi, Szentendre és Vác területén.
            </p>

            <h2 className="text-3xl font-black text-gray-900 mb-6 mt-12">Filozófiánk</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biztonság és Szabványok</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Nem kötünk kompromisszumot. Minden kivitelezés a legszigorúbb tűzvédelmi és érintésvédelmi előírások szerint történik.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Korrektség</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Hisszük, hogy a tartós üzleti kapcsolat alapja a bizalom. Nincsenek rejtett költségek, nincsenek "elfelejtett" határidők.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black text-gray-900 mb-6 mt-12">Kiknek segítünk?</h2>
            <p>
              Ügyfélkörünk rendkívül széles. Dolgozunk magánszemélyeknek, akik lakásfelújításhoz, okosotthon kiépítéséhez vagy épp egy meghibásodott konnektor cseréjéhez keresnek szakembert.
              Emellett büszkék vagyunk arra, hogy egyre több társasház, közös képviselő és ipari létesítmény választ minket állandó partneréül az elektromos hálózatok karbantartására és EV töltők telepítésére.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-500 py-16 text-center">
        <div className="container-main max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Bízza profikra az elektromos feladatokat!</h2>
          <p className="text-amber-100 mb-10 text-lg">Vegye fel velünk a kapcsolatot, és kérjen díjmentes helyszíni felmérést!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${SITE.phone}`} className="bg-white text-amber-600 font-black px-10 py-4 rounded-xl text-lg hover:bg-amber-50 transition-colors shadow-xl shadow-amber-600/20">
              📞 {SITE.phoneDisplay}
            </a>
            <Link href="/kapcsolat/" className="bg-amber-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-amber-700 transition-colors border border-amber-400">
              📋 Árajánlatkérés
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
