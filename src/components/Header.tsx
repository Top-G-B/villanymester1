'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE, CITIES } from '@/lib/data'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-main">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="font-black text-gray-900 text-lg leading-none">{SITE.name}</div>
              <div className="text-xs text-amber-600 font-medium">Pest megye</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <div className="relative group">
              <button className="text-gray-700 hover:text-amber-600 transition-colors py-2">
                Városok ▾
              </button>
              <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl border border-gray-100 p-3 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {CITIES.map(c => (
                  <Link key={c.slug} href={`/${c.slug}/`}
                    className="block px-3 py-2 rounded-lg hover:bg-amber-50 text-gray-700 hover:text-amber-700 transition-colors">
                    🏙️ Villanyszerelő {c.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/szolgaltatasok/" className="text-gray-700 hover:text-amber-600 transition-colors">Szolgáltatások</Link>
            <Link href="/arak/" className="text-gray-700 hover:text-amber-600 transition-colors">Árak</Link>
            <Link href="/rolunk/" className="text-gray-700 hover:text-amber-600 transition-colors">Rólunk</Link>
            <Link href="/kapcsolat/" className="text-gray-700 hover:text-amber-600 transition-colors">Kapcsolat</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-sm py-2.5">
              📞 {SITE.phoneDisplay}
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}/>
            <div className={`w-5 h-0.5 bg-gray-700 my-1 transition-all ${open ? 'opacity-0' : ''}`}/>
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}/>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 mb-2">Városok</div>
            {CITIES.map(c => (
              <Link key={c.slug} href={`/${c.slug}/`} onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg hover:bg-amber-50 text-gray-700 font-medium">
                Villanyszerelő {c.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 mt-3 pt-3">
              {['Szolgáltatások:/szolgaltatasok/', 'Árak:/arak/', 'Rólunk:/rolunk/', 'Kapcsolat:/kapcsolat/'].map(item => {
                const [label, href] = item.split(':')
                return <Link key={href} href={href} onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg hover:bg-amber-50 text-gray-700 font-medium">{label}</Link>
              })}
            </div>
            <a href={`tel:${SITE.phone}`} className="btn-primary w-full justify-center mt-4">
              📞 Hívjon most: {SITE.phoneDisplay}
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
