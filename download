import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Rólunk – Villanymester Kft. | Pest Megye Villanyszerelője',
  description: 'Ismerje meg a Villanymestert – 10+ éves tapasztalat, képzett szakemberek, garanciális munka Pest megyében. Érd, Gödöllő, Dunakeszi, Szentendre, Vác.',
  alternates: { canonical: `${SITE.url}/rolunk/` },
}

const team = [
  { name: 'Horváth Gábor', role: 'Vezető villanyszerelő', exp: '15 év tapasztalat', icon: '👷' },
  { name: 'Kiss Norbert', role: 'Elektrotechnikus', exp: '10 év tapasztalat', icon: '⚡' },
  { name: 'Molnár Ádám', role: 'Villanyszerelő', exp: '7 év tapasztalat', icon: '🔧' },
  { name: 'Balogh Tamás', role: 'EV töltő specialista', exp: '5 év tapasztalat', icon: '🔌' },
]

export default function RolunkPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Rólunk</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-2xl text-center">
          <div className="badge mb-4">🏆 Rólunk</div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">Villanymester – Pest megye villanyszerelője</h1>
          <p className="text-gray-300 text-lg">2015 óta nyújtunk megbízható elektromos szolgáltatásokat Pest megye 5 városában.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">A Villanymesterről</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Villanymester 2015-ben alakult azzal a céllal, hogy Pest megye lakói és vállalkozásai számára megbízható, szakszerű és átlátható villanyszerelési szolgáltatásokat nyújtson.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Csapatunk tapasztalt, képesített villanyszerelőkből áll, akik a legújabb technológiákat – elektromos autó töltőket, napelem rendszereket, okosotthon megoldásokat – is tökéletesen ismerik.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Minden munkánkat dokumentáltan, garanciával végezzük. Nem engedjük el az ügyfelet addig, amíg minden papír nincs rendben.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { v:'2015', l:'Alapítás éve' },
                { v:'500+', l:'Elvégzett munka' },
                { v:'4.9★', l:'Google értékelés' },
                { v:'5 város', l:'Kiszállási terület' },
              ].map(s => (
                <div key={s.l} className="card text-center">
                  <div className="text-3xl font-black text-amber-500 mb-1">{s.v}</div>
                  <div className="text-xs text-gray-500">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Csapatunk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-16">
            {team.map(m => (
              <div key={m.name} className="card text-center">
                <div className="text-5xl mb-3">{m.icon}</div>
                <div className="font-bold text-gray-900">{m.name}</div>
                <div className="text-amber-600 text-sm font-medium">{m.role}</div>
                <div className="text-gray-400 text-xs mt-1">{m.exp}</div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Dolgozzunk együtt!</h2>
            <p className="text-gray-600 mb-6">Keressen minket bizalommal – Pest megye bármely pontján kiszállunk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE.phone}`} className="btn-primary">📞 {SITE.phoneDisplay}</a>
              <Link href="/kapcsolat/" className="btn-outline">📋 Árajánlat kérés</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
