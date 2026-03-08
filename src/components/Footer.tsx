import Link from 'next/link'
import { SITE, CITIES, SERVICES } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-black text-white text-lg leading-none">{SITE.name}</div>
                <div className="text-xs text-amber-400 font-medium">Pest megye villanyszerelője</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">{SITE.description}</p>
            <div className="space-y-1.5 text-sm">
              <div>📞 <a href={`tel:${SITE.phone}`} className="text-amber-400 hover:text-amber-300">{SITE.phoneDisplay}</a></div>
              <div>✉️ <a href={`mailto:${SITE.email}`} className="text-amber-400 hover:text-amber-300">{SITE.email}</a></div>
              <div>📍 {SITE.address}</div>
            </div>
          </div>

          {/* Cities */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Városok</h3>
            <ul className="space-y-2 text-sm">
              {CITIES.map(c => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}/`} className="hover:text-amber-400 transition-colors">
                    Villanyszerelő {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Szolgáltatások</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link href={`/szolgaltatasok/${s.slug}/`} className="hover:text-amber-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Információk</h3>
            <ul className="space-y-2 text-sm mb-6">
              {[['Rólunk','/rolunk/'],['Árak','/arak/'],['Referenciák','/referenciak/'],['Kapcsolat','/kapcsolat/']].map(([l,h]) => (
                <li key={h}><Link href={h} className="hover:text-amber-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <div className="text-amber-400 font-bold text-sm mb-1">⏰ Nyitvatartás</div>
              <div className="text-xs text-gray-400 space-y-0.5">
                <div>H–P: 8:00–18:00</div>
                <div>Szombat: 9:00–14:00</div>
                <div className="text-amber-400 font-medium">Sürgős: 0–24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container-main py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {SITE.name} – Minden jog fenntartva</span>
          <div className="flex gap-4">
            <Link href="/adatvedelmi-iranyelvek/" className="hover:text-gray-300">Adatvédelem</Link>
            <Link href="/sutik/" className="hover:text-gray-300">Sütik</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
