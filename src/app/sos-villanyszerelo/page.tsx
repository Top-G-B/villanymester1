import { SITE } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'SOS Villanyszerelő – 0-24 Ügyeletes Kiszállás | Villanymester Kft.',
  description: 'SOS villanyszerelő Pest megyében ✓ 0-24 ügyeletes kiszállás ✓ Áramszünet, rövidzárlat ✓ Azonnali segítség ➤ Hívjon most: +36 70 293 3659',
}

export default function SosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">SOS Villanyszerelő</h1>
            <p className="text-xl mb-2">0-24 Ügyeletes Kiszállás Pest Megyében</p>
            <a href={`tel:${SITE.phone}`} className="inline-block mt-6 bg-white text-red-600 font-bold text-2xl px-8 py-4 rounded-xl hover:bg-red-50 transition">
              📞 {SITE.phoneDisplay}
            </a>
            <p className="mt-3 text-red-100">Azonnali segítség – hívjon most!</p>
          </div>
        </section>
        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Mikor hívjon SOS villanyszerelőt?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '⚡', title: 'Teljes áramszünet', desc: 'Ha a lakásban teljesen megszűnt az áram és a biztosíték visszakapcsolása sem segít.' },
              { icon: '🔥', title: 'Szikrázás, füst', desc: 'Ha a kapcsolóból szikra jön vagy égett szagot érez – azonnal hívjon!' },
              { icon: '💡', title: 'Folyamatosan kiold a biztosíték', desc: 'Ha a főbiztosíték újra és újra kiold, az komoly hiba jele.' },
              { icon: '🌊', title: 'Vízkár utáni ellenőrzés', desc: 'Csőtörés, beázás után az elektromos rendszer azonnali ellenőrzése kötelező.' },
              { icon: '🔌', title: 'Hibás konnektorfoglalat', desc: 'Laza, törött konnektor – ne húzogassa, hívjon szakembert.' },
              { icon: '🏠', title: 'Sürgős felülvizsgálat', desc: 'Ingatlanátadás, bérleti szerződés előtt azonnali ellenőrzés szükséges.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 border border-gray-200 rounded-xl">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">SOS kiszállási díjaink</h2>
            <table className="w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4">Időszak</th>
                  <th className="text-left p-4">Kiszállási díj</th>
                  <th className="text-left p-4">Óradíj</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200"><td className="p-4">Munkanapon 8–17h</td><td className="p-4">15 000 Ft</td><td className="p-4">12 000 Ft/h</td></tr>
                <tr className="border-b border-gray-200 bg-amber-50"><td className="p-4 font-medium">Munkanapon 17–22h</td><td className="p-4">20 000 Ft</td><td className="p-4">15 000 Ft/h</td></tr>
                <tr><td className="p-4">Éjszaka / hétvége / ünnep</td><td className="p-4">25 000 Ft</td><td className="p-4">18 000 Ft/h</td></tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-red-600 text-white py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Elektromos vészhelyzet esetén hívjon azonnal!</h2>
            <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-red-600 font-bold text-2xl px-10 py-5 rounded-xl hover:bg-red-50 transition">
              📞 {SITE.phoneDisplay}
            </a>
            <p className="mt-4 text-red-100">0-24 óra, minden nap – Pest megye egész területén</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}