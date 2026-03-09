import { SITE } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Villanyszerelő Árak 2025 – Átlátható Díjszabás | Villanymester Kft.',
  description: 'Villanyszerelő árak 2025 ✓ Kiszállási díj, óradíj, munkadíj táblázat ✓ Pest megye ✓ Díjmentes árajánlat ➤ Hívjon most: +36 70 293 3659',
}

export default function ArakPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-amber-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Villanyszerelő Árak 2025</h1>
            <p className="text-xl">Átlátható Díjszabás – Semmilyen Rejtett Költség</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Kiszállási díj és óradíj 2025-ben</h2>
          <p className="text-gray-600 mb-6">
            Az óradíj és a kiszállási díj az elvégzett munka jellegétől és az időponttól függ. Az alábbi táblázat a 2025-ös aktuális díjainkat tartalmazza.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead className="bg-amber-500 text-white">
                <tr>
                  <th className="text-left p-4">Időszak</th>
                  <th className="text-left p-4">Kiszállási díj</th>
                  <th className="text-left p-4">Óradíj</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100"><td className="p-4">Munkanapon 8–17h</td><td className="p-4 font-medium">15 000 Ft</td><td className="p-4 font-medium">12 000 Ft/h</td></tr>
                <tr className="border-b border-gray-100 bg-gray-50"><td className="p-4">Munkanapon 17–22h</td><td className="p-4 font-medium">20 000 Ft</td><td className="p-4 font-medium">15 000 Ft/h</td></tr>
                <tr><td className="p-4">Hétvége / ünnep / éjszaka</td><td className="p-4 font-medium">25 000 Ft</td><td className="p-4 font-medium">18 000 Ft/h</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">* Az óradíj az anyagköltséget nem tartalmazza. Minden munkához ingyenes árajánlatot adunk.</p>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Munka típusonkénti árak 2025</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { munka: 'Hibaelhárítás, diagnózis', ar: '15 000 Ft-tól' },
                { munka: 'Konnektor / kapcsoló csere', ar: '5 000–8 000 Ft/db' },
                { munka: 'Biztosítékszekrény csere', ar: '40 000–80 000 Ft' },
                { munka: 'Lakás villanyszerelés (felújítás)', ar: '800–1 200 Ft/m²' },
                { munka: 'EV töltő telepítés (11 kW)', ar: '120 000–180 000 Ft' },
                { munka: 'Napelem rendszer bekötés', ar: 'Egyedi árajánlat' },
                { munka: 'Főbiztosíték méret növelés', ar: '30 000–60 000 Ft' },
                { munka: 'Okosotthon alaprendszer', ar: '150 000 Ft-tól' },
              ].map((item) => (
                <div key={item.munka} className="flex justify-between items-center p-4 bg-white rounded-xl border border-gray-200">
                  <span className="text-gray-700">{item.munka}</span>
                  <span className="font-bold text-amber-600 whitespace-nowrap ml-4">{item.ar}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Mire figyeljen az árajánlatnál?</h2>
          <div className="space-y-4 text-gray-600">
            <p>✅ <strong>Kérjen tételes árajánlatot</strong> – az anyagköltség és a munkadíj legyen külön feltüntetve.</p>
            <p>✅ <strong>Az óradíj mellé kérjen becsült munkaórát</strong> – így tudja kalkulálni a végső összeget.</p>
            <p>✅ <strong>Ellenőrizze a képesítést</strong> – csak regisztrált, engedéllyel rendelkező villanyszerelőt alkalmazzon.</p>
            <p>✅ <strong>Kérjen számlát</strong> – a számlával ellátott munka garanciális és levonható az adóból (SZJA).</p>
          </div>
        </section>

        <section className="bg-amber-500 text-white py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Kérjen ingyenes árajánlatot!</h2>
            <p className="mb-6 text-amber-100">Írja le a feladatot és 24 órán belül visszahívjuk pontos árajánlattal.</p>
            <a href={`tel:${SITE.phone}`} className="inline-block bg-white text-amber-600 font-bold text-xl px-10 py-4 rounded-xl hover:bg-amber-50 transition">
              📞 {SITE.phoneDisplay}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}