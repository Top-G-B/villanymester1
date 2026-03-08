import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Kapcsolat – Díjmentes Árajánlat | Villanymester',
  description: 'Vegye fel velünk a kapcsolatot! Ingyenes árajánlat villanyszerelési munkákhoz Pest megyében. Hívjon vagy töltse ki az online űrlapot.',
  alternates: { canonical: `${SITE.url}/kapcsolat/` },
  openGraph: {
    title: 'Kapcsolat – Díjmentes Árajánlat | Villanymester',
    description: 'Vegye fel velünk a kapcsolatot! Ingyenes árajánlat villanyszerelési munkákhoz Pest megyében.',
    url: `${SITE.url}/kapcsolat/`,
    type: 'website',
    locale: 'hu_HU',
  },
}

export default function KapcsolatPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kapcsolat | Villanymester Kft.',
    description: 'Vegye fel velünk a kapcsolatot! Ingyenes árajánlat villanyszerelési munkákhoz Pest megyében.',
    url: `${SITE.url}/kapcsolat/`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Villanymester Kft.',
      telephone: '+36 70 293 3659',
      email: 'info@mateklap.hu',
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Kapcsolat</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14">
        <div className="container-main max-w-2xl text-center">
          <div className="badge mb-4">📞 Kapcsolat</div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Kérjen díjmentes árajánlatot!</h1>
          <p className="text-gray-300">Hívjon telefonon vagy töltse ki az űrlapot – 24 órán belül visszajelzünk.</p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Contact info */}
            <div className="space-y-5">
              <div className="card">
                <h2 className="font-black text-gray-900 text-xl mb-5">Elérhetőségeink</h2>
                <div className="space-y-4">
                  {[
                    { icon: '📞', label: 'Telefon', val: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
                    { icon: '✉️', label: 'E-mail', val: SITE.email, href: `mailto:${SITE.email}` },
                    { icon: '📍', label: 'Telephely', val: 'Érd, Pest megye', href: undefined },
                  ].map(c => (
                    <div key={c.label} className="flex gap-4 items-start">
                      <span className="text-2xl">{c.icon}</span>
                      <div>
                        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">{c.label}</div>
                        {c.href
                          ? <a href={c.href} className="font-bold text-amber-600 hover:text-amber-700 text-lg">{c.val}</a>
                          : <div className="font-bold text-gray-900">{c.val}</div>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">⏰ Nyitvatartás</h3>
                <div className="space-y-2 text-sm">
                  {[['Hétfő – Péntek', '8:00–18:00'], ['Szombat', '9:00–14:00'], ['Vasárnap', 'Zárva'], ['Sürgős eset', '0–24 óra']].map(([d, t]) => (
                    <div key={d} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{d}</span>
                      <span className={`font-semibold ${t === 'Zárva' ? 'text-gray-400' : t.includes('0–24') ? 'text-green-600' : 'text-gray-900'}`}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3">🏙️ Kiszállási területek</h3>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map(c => (
                    <Link key={c.slug} href={`/${c.slug}/`}
                      className="bg-amber-50 text-amber-700 text-sm font-medium px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card">
              <h2 className="font-black text-gray-900 text-xl mb-5">Online árajánlatkérő</h2>
              <form className="space-y-4" action="#" method="post">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Neve *</label>
                    <input type="text" name="name" required placeholder="Kovács István"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Telefon *</label>
                    <input type="tel" name="phone" required placeholder="+36 20 123 4567"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">E-mail</label>
                  <input type="email" name="email" placeholder="kovacs@email.hu"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Város *</label>
                  <select name="city" required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white">
                    <option value="">Válasszon várost...</option>
                    {CITIES.map(c => <option key={c.slug} value={c.name}>Villanyszerelő {c.name}</option>)}
                    <option value="egyeb">Egyéb</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Munka típusa</label>
                  <select name="type" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white">
                    <option value="">Válasszon...</option>
                    {['Hibaelhárítás', 'Lakásfelújítás', 'EV töltő telepítés', 'Napelem bekötés', 'Ipari villanyszerelés', 'Okosotthon', 'Egyéb'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Rövid leírás</label>
                  <textarea name="message" rows={4} placeholder="Írja le röviden, milyen munkára van szüksége..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                  📋 Árajánlat kérése →
                </button>
                <p className="text-xs text-gray-400 text-center">24 órán belül visszajelzünk. Adatait bizalmasan kezeljük.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 w-full relative bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108000!2d18.8!3d47.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddb3e41b953d%3A0x400c4290c1e11a0!2zQnVkYXBlc3QsIMODcmQsIEh1bmdhcnk!5e0!3m2!1sen!2sus!4v1714150334800!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Villanymester Kft. Érd - Google Térkép"
        ></iframe>
      </section>
    </>
  )
}
