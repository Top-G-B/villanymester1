import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie (Süti) Tájékoztató | Villanymester',
  description: 'Tájékoztató a Villanymester weboldalán használt cookie-król.',
  robots: { index: false, follow: false },
}

const cookies = [
  {
    name: '_ga',
    provider: 'Google Analytics',
    purpose: 'Egyedi felhasználói azonosítás az analitikához. Megkülönbözteti az egyedi felhasználókat és munkameneteket.',
    expiry: '2 év',
    type: 'Analitikai',
  },
  {
    name: '_ga_*',
    provider: 'Google Analytics',
    purpose: 'Google Analytics 4 munkamenet-azonosító. Megőrzi a munkamenet állapotát.',
    expiry: '2 év',
    type: 'Analitikai',
  },
  {
    name: '__vercel_live_token',
    provider: 'Vercel',
    purpose: 'Vercel hosting platform technikai süti. Csak fejlesztői előnézetek esetén aktív.',
    expiry: 'Munkamenet végéig',
    type: 'Technikai',
  },
]

export default function SutikPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Cookie tájékoztató</span>
          </nav>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Cookie (Süti) Tájékoztató</h1>
          <p className="text-sm text-gray-400 mb-10">Utoljára frissítve: 2025. január 1.</p>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">Mi az a cookie (süti)?</h2>
              <p className="text-sm">
                A cookie egy kis szöveges fájl, amelyet a weboldal tárol az Ön böngészőjében. A sütik segítenek a weboldal megfelelő működésében, a látogatói statisztikák gyűjtésében és a felhasználói élmény javításában. Ez az oldal analitikai és technikai sütiket használ.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-4">Az oldalon használt sütik</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-700">Süti neve</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Szolgáltató</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Cél</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Lejárat</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Típus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {cookies.map(c => (
                      <tr key={c.name} className="hover:bg-gray-50">
                        <td className="p-3 font-mono text-xs text-gray-900 font-semibold">{c.name}</td>
                        <td className="p-3 text-gray-600 whitespace-nowrap">{c.provider}</td>
                        <td className="p-3 text-gray-600">{c.purpose}</td>
                        <td className="p-3 text-gray-600 whitespace-nowrap">{c.expiry}</td>
                        <td className="p-3">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.type === 'Analitikai' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                            {c.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-4">Sütik letiltása böngészőnként</h2>
              <p className="text-sm mb-4">A legtöbb böngészőben beállíthatja, hogy ne fogadjon el sütiket, vagy értesítést kérjen, ha egy weboldal sütit próbál elhelyezni. A sütik letiltása esetén egyes oldalfunkciók nem biztos, hogy megfelelően működnek.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: 'Google Chrome',
                    icon: '🔵',
                    steps: 'Beállítások → Adatvédelem és biztonság → Cookie-k és egyéb webhelyadatok → Összes cookie és webhelyadat megtekintése',
                  },
                  {
                    name: 'Mozilla Firefox',
                    icon: '🦊',
                    steps: 'Beállítások → Adatvédelem és biztonság → Fokozott védelmi mód → Egyéni → Sütik kezelése',
                  },
                  {
                    name: 'Apple Safari',
                    icon: '🧭',
                    steps: 'Beállítások → Adatvédelem → Webhelyek webhelyközi nyomon követésének megakadályozása → Minden cookie blokkolása',
                  },
                  {
                    name: 'Microsoft Edge',
                    icon: '🔷',
                    steps: 'Beállítások → Cookie-k és webhelyadatok-kezelési engedélyek → Cookie-k és tárolt adatok kezelése',
                  },
                ].map(b => (
                  <div key={b.name} className="card text-sm">
                    <div className="flex items-center gap-2 font-bold text-gray-900 mb-2">
                      <span>{b.icon}</span> {b.name}
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">{b.steps}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">Google Analytics letiltása</h2>
              <p className="text-sm">
                A Google Analytics nyomon követést böngészőbővítménnyel is letilthatja:{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">További információ</h2>
              <p className="text-sm">
                Az adatkezelési gyakorlatunkról bővebben tájékozódhat{' '}
                <Link href="/adatvedelmi-iranyelvek/" className="text-amber-600 hover:underline">Adatvédelmi Irányelvek</Link>{' '}
                oldalunkon. Ha kérdése van, írjon a{' '}
                <a href="mailto:info@mateklap.hu" className="text-amber-600 hover:underline">info@mateklap.hu</a>{' '}
                címre.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
