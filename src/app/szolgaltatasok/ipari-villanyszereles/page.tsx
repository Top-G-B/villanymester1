import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Ipari Villanyszerelés Pest Megye – Gyár, Iroda, Üzlet | Villanymester',
  description: 'Ipari villanyszerelés Pest megyében ✓ Gyárak, irodaházak, raktárak, üzletek ✓ 3 fázisú rendszerek ✓ Karbantartás ✓ Garanciális munka ➤ Árajánlat!',
  keywords: ['ipari villanyszerelés pest megye', 'háromfázisú villanyszerelő', 'ipari elektromos szerelés', 'raktár villanyszerelés', 'irodaház villanyszerelés'],
  alternates: { canonical: `${SITE.url}/szolgaltatasok/ipari-villanyszereles/` },
}

export default function IpariPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Ipari villanyszerelés</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="badge mb-5">🏭 Ipari Specialista</div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Ipari Villanyszerelés<br/>
            <span className="text-amber-400">Pest Megye</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Gyárak, raktárak, irodaházak, üzletek és kereskedelmi ingatlanok elektromos rendszerei. Háromfázisú rendszerek, ipari elosztók, karbantartás.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {['✅ Háromfázisú rendszerek','✅ Ipari elosztók','✅ Karbantartási szerződés','✅ Gyors reagálás'].map(f => (
              <span key={f} className="bg-white/10 text-white text-sm px-3 py-1.5 rounded-full">{f}</span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8 py-4">📞 {SITE.phoneDisplay}</a>
            <Link href="/kapcsolat/" className="btn-outline text-base px-8 py-4 border-white text-white hover:bg-white/10">📋 Egyedi árajánlat</Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-black text-gray-900 mb-6">Ipari munkáink</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { icon:'🏭', t:'Gyárak és üzemek', d:'Gépek bekötése, ipari elosztók telepítése, 3 fázisú rendszerek kiépítése.' },
              { icon:'🏢', t:'Irodaházak', d:'Strukturált kábelezés, szerver szoba, UPS rendszerek, tartalék tápellátás.' },
              { icon:'📦', t:'Raktárak és logisztika', d:'Ipari világítás, targonca töltők, tűzjelző rendszer bekötése.' },
              { icon:'🛒', t:'Üzletek, éttermek', d:'Kereskedelmi ingatlanok elektromos kialakítása, konyhai gépek bekötése.' },
              { icon:'🔧', t:'Karbantartás', d:'Rendszeres elektromos karbantartás, éves felülvizsgálat, hibaelhárítás.' },
              { icon:'📋', t:'Villamos felülvizsgálat', d:'Kötelező 5 éves villamos felülvizsgálat elvégzése és dokumentálása.' },
            ].map(s => (
              <div key={s.t} className="card hover:border-amber-200 transition-colors">
                <div className="text-3xl mb-3">{s.icon}</div>
                <div className="font-bold text-gray-900 mb-1">{s.t}</div>
                <p className="text-sm text-gray-500">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 text-white rounded-2xl p-6 mb-10">
            <h3 className="font-black text-lg mb-3">💼 Karbantartási szerződés</h3>
            <p className="text-gray-300 text-sm mb-4">Vállalkozások számára karbantartási szerződést kínálunk – előre egyeztetett ütemezéssel, prioritásos hibaelhárítással, havonta fix díjért.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`tel:${SITE.phone}`} className="btn-primary text-sm">📞 Érdeklődjön</a>
              <Link href="/kapcsolat/" className="btn-outline border-gray-500 text-gray-300 hover:bg-gray-800 text-sm">📋 Ajánlatkérés</Link>
            </div>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4">Ipari villanyszerelés városonként</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                <span className="text-xl">🏭</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Ipari villanyszerelés {c.name}ban</div>
                  <div className="text-xs text-gray-400">{c.county}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
