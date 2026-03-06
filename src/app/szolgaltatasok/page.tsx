import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, SERVICES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Villanyszerelési Szolgáltatások Pest Megye | Villanymester',
  description: 'Teljes körű villanyszerelési szolgáltatások Pest megyében ✓ Hibaelhárítás, EV töltő, napelem, okosotthon ✓ Gyors kiszállás ✓ Garanciális munka',
  alternates: { canonical: `${SITE.url}/szolgaltatasok/` },
}

export default function SzolgaltatasokPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Szolgáltatások</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
        <div className="container-main max-w-2xl text-center">
          <div className="badge mb-4">🔧 Szolgáltatások</div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">Villanyszerelési szolgáltatásaink</h1>
          <p className="text-gray-300">Minden elektromos munkát vállalunk Pest megyében.</p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Link key={s.slug} href={`/szolgaltatasok/${s.slug}/`}
                className="card hover:shadow-md hover:border-amber-200 hover:-translate-y-1 transition-all duration-200 group">
                <div className="text-5xl mb-4">{s.icon}</div>
                <h2 className="font-black text-xl text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{s.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-amber-600 text-sm font-semibold group-hover:translate-x-1 transition-transform inline-block">Részletek →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
