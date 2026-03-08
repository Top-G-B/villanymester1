'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-[#0a0a0a] sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-black text-white text-lg leading-none">{SITE.name}</div>
              <div className="text-xs text-[#FFD338] font-medium">Pest megye</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <div className="relative group">
              <button className="text-gray-300 hover:text-[#FFD338] transition-colors py-2">Városok ▾</button>
              <div className="absolute top-full left-0 bg-[#1a1a1a] shadow-xl rounded-xl border border-gray-700 p-3 min-w-[210px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {CITIES.map(c => (
                  <Link key={c.slug} href={`/${c.slug}/`}
                    className="block px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-[#FFD338] transition-colors text-sm">
                    🏙️ Villanyszerelő {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-[#FFD338] transition-colors py-2">Szolgáltatások ▾</button>
              <div className="absolute top-full left-0 bg-[#1a1a1a] shadow-xl rounded-xl border border-gray-700 p-3 min-w-[210px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {[
                  ['⚡ Hibaelhárítás','/szolgaltatasok/hibaelharitas/'],
                  ['🏠 Lakásfelújítás','/szolgaltatasok/lakas-felujitas/'],
                  ['🔧 Lakásfelújítás útmutatók','/lakasfelujitas/'],
                  ['🔌 EV töltő telepítés','/szolgaltatasok/elektromos-auto-tolto/'],
                  ['☀️ Napelem bekötés','/szolgaltatasok/napelem-bekotes/'],
                  ['🤖 Okosotthon','/szolgaltatasok/okosotthon/'],
                  ['🏭 Ipari villanyszerelés','/szolgaltatasok/ipari-villanyszereles/'],
                ].map(([l,h]) => (
                  <Link key={h} href={h} className="block px-3 py-2 rounded-lg hover:bg-gray-800 text-gray-300 hover:text-[#FFD338] transition-colors text-sm">{l}</Link>
                ))}
              </div>
            </div>
            <Link href="/blog/" className="text-gray-300 hover:text-[#FFD338] transition-colors">Blog</Link>
            <Link href="/arak/" className="text-gray-300 hover:text-[#FFD338] transition-colors">Árak</Link>
            <Link href="/rolunk/" className="text-gray-300 hover:text-[#FFD338] transition-colors">Rólunk</Link>
            <Link href="/kapcsolat/" className="text-gray-300 hover:text-[#FFD338] transition-colors">Kapcsolat</Link>
          </nav>

          <a href={`tel:${SITE.phone}`} className="hidden md:flex btn-primary text-sm py-2.5">
            📞 {SITE.phoneDisplay}
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100" aria-label="Menü megnyitása">
            <div className={`w-5 h-0.5 bg-gray-300 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}/>
            <div className={`w-5 h-0.5 bg-gray-300 my-1 transition-all ${open ? 'opacity-0' : ''}`}/>
            <div className={`w-5 h-0.5 bg-gray-300 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}/>
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">Városok</div>
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`} onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-300 font-medium text-sm">
                Villanyszerelő {c.name}
              </Link>
            ))}
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mt-3 mb-2">Szolgáltatások</div>
            {[['Hibaelhárítás','/szolgaltatasok/hibaelharitas/'],['Lakásfelújítás','/szolgaltatasok/lakas-felujitas/'],['Lakásfelújítás útmutatók','/lakasfelujitas/'],['EV töltő','/szolgaltatasok/elektromos-auto-tolto/'],['Napelem bekötés','/szolgaltatasok/napelem-bekotes/'],['Okosotthon','/szolgaltatasok/okosotthon/'],['Ipari','/szolgaltatasok/ipari-villanyszereles/']].map(([l,h]) => (
              <Link key={h} href={h} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-300 font-medium text-sm">{l}</Link>
            ))}
            <div className="border-t border-gray-700 mt-3 pt-3">
              {[['Blog','/blog/'],['Árak','/arak/'],['Rólunk','/rolunk/'],['Kapcsolat','/kapcsolat/']].map(([l,h]) => (
                <Link key={h} href={h} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-gray-800 text-gray-300 font-medium text-sm">{l}</Link>
              ))}
            </div>
            <a href={`tel:${SITE.phone}`} className="btn-primary w-full justify-center mt-4">📞 {SITE.phoneDisplay}</a>
          </div>
        )}
      </div>
    </header>
  )
}
