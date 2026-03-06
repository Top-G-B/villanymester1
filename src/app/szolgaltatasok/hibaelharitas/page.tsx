// ═══════════════════════════════════════════════
// FÁJL 1: src/app/szolgaltatasok/hibaelharitas/page.tsx
// ═══════════════════════════════════════════════
import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Villanyszerelő Hibaelhárítás Pest Megye – Sürgős Kiszállás | Villanymester',
  description: 'Sürgős villanyszerelő hibaelhárítás Pest megyében ✓ 2-4 óra kiszállás ✓ Rövidzárlat, áramkimaradás, biztosítéktábla ✓ 0-24h ➤ Hívjon most!',
  keywords: ['villanyszerelő hibaelhárítás', 'sürgős villanyszerelő pest megye', 'áramkimaradás villanyszerelő', 'rövidzárlat elhárítás', 'villanyszerelő 24 óra'],
  alternates: { canonical: `${SITE.url}/szolgaltatasok/hibaelharitas/` },
}

export default function HibaelharitasPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/szolgaltatasok/" className="hover:text-amber-600">Szolgáltatások</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Hibaelhárítás</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-red-900 via-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            ⚡ Sürgős? Hívjon most!
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">
            Villanyszerelő Hibaelhárítás<br/>
            <span className="text-amber-400">2-4 Óra Alatt Kiszállunk</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            Áramkimaradás, rövidzárlat, kiugrott biztosíték, égett szag – minden elektromos hibát gyorsan és megbízhatóan megoldunk Pest megye 5 városában.
          </p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-xl px-10 py-5 shadow-2xl">
            📞 HÍVJON MOST – {SITE.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Milyen hibákat hárítunk el?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {[
              { icon:'💥', t:'Rövidzárlat elhárítás', d:'Gyors diagnózis és javítás. Megtaláljuk a hibát, nem csak reseteljük.' },
              { icon:'🔌', t:'Áramkimaradás', d:'Részleges vagy teljes áramkimaradás okának felderítése és megszüntetése.' },
              { icon:'🔧', t:'Kismegszakító csere', d:'Ha folyamatosan kiugrik a biztosíték – megoldjuk a valódi okát.' },
              { icon:'💡', t:'Világítási hibák', d:'Villogó fény, nem működő körök, hibás csillárok javítása.' },
              { icon:'🔥', t:'Égett szag, szikra', d:'AZONNALI beavatkozás szükséges – hívjon most!' },
              { icon:'📊', t:'Biztosítéktábla hiba', d:'Régi, elöregedett tábla cseréje modern kismegszakítós rendszerre.' },
            ].map(s => (
              <div key={s.t} className="card hover:border-red-200 transition-colors">
                <div className="text-2xl mb-2">{s.icon}</div>
                <div className="font-bold text-gray-900 mb-1 text-sm">{s.t}</div>
                <p className="text-xs text-gray-500">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-10 text-center">
            <div className="text-3xl mb-2">🚨</div>
            <h3 className="font-black text-red-900 text-lg mb-2">Égett szagot érez? Szikrát lát?</h3>
            <p className="text-red-700 text-sm mb-4">Ez tűzveszélyes helyzet – kapcsolja le a főkapcsolót és hívjon azonnal!</p>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 bg-red-600 text-white font-black px-8 py-3 rounded-xl hover:bg-red-700 transition-colors">
              📞 Azonnali segítség – {SITE.phoneDisplay}
            </a>
          </div>

          <h2 className="text-2xl font-black text-gray-900 mb-4">Kiszállási területek</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`}
                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all group">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="font-semibold text-sm text-gray-900 group-hover:text-red-600 transition-colors">Sürgős villanyszerelő {c.suffixOn}</div>
                  <div className="text-xs text-gray-400">{c.county} · 2-4 óra kiszállás</div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/blog/aramkimaradas-mit-tegyek/"
            className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
            <span className="text-2xl">📖</span>
            <div>
              <div className="font-semibold text-sm text-gray-900 group-hover:text-amber-600">Áramkimaradás – mit tegyek? Lépések és mikor hívjak villanyszerelőt</div>
              <div className="text-xs text-gray-400 mt-0.5">5 perces olvasás · Hibaelhárítás</div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
