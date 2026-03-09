import { SITE } from '@/lib/data'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Regisztrált Villanyszerelő – EON, MVM, MEEVET Partner | Villanymester Kft.',
  description: 'Regisztrált villanyszerelő ✓ EON, MVM és MEEVET bejegyzett partner ✓ Hivatalos kivitelezői nyilatkozat ✓ Pest megye ➤ Hívjon most: +36 70 293 3659',
}

export default function RegisztraltPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-amber-500 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Regisztrált Villanyszerelő</h1>
            <p className="text-xl mb-2">EON, MVM és MEEVET Bejegyzett Partner</p>
            <a href={`tel:${SITE.phone}`} className="inline-block mt-6 bg-white text-amber-600 font-bold text-xl px-8 py-4 rounded-xl hover:bg-amber-50 transition">
              📞 {SITE.phoneDisplay}
            </a>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Mi az a regisztrált villanyszerelő?</h2>
          <p className="text-gray-600 mb-4">
            A regisztrált villanyszerelő olyan szakember, akit az áramszolgáltatók – EON, MVM Next vagy a MEEVET – nyilvántartásukba vettek. Ez azt jelenti, hogy jogosult hivatalos <strong>kivitelezői nyilatkozatot</strong> kiállítani, ami szükséges minden olyan munkához, amit az áramszolgáltatónak be kell jelenteni.
          </p>
          <p className="text-gray-600">
            Ilyen munkák például az új fogyasztásmérő bekötése, a napelem csatlakoztatása, a hálózati csatlakozódoboz cseréje, vagy nagyteljesítményű gépek (pl. elektromos autó töltő, klíma) beüzemelése.
          </p>
        </section>

        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Partnerségeink</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'EON', icon: '⚡', desc: 'EON regisztrált kivitelező partnere. EON hálózatán csatlakozó munkákhoz, mérőcsere, főbiztosíték növelés.' },
                { name: 'MVM Next', icon: '🔋', desc: 'MVM Next bejegyzett villanyszerelő. MVM hálózatán végzett csatlakozási és bekötési munkákhoz.' },
                { name: 'MEEVET', icon: '📜', desc: 'MEEVET tagvállalat. Magyar Elektrotechnikai Ellenőrző és Vizsgáló Kft. nyilvántartásában szerepelünk.' },
              ].map((p) => (
                <div key={p.name} className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                  <div className="text-4xl mb-3">{p.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Mikor van szükség regisztrált villanyszerelőre?</h2>
          <div className="space-y-3">
            {[
              'Napelem rendszer hálózatra kötésekor',
              'Elektromos autó töltő (wallbox) telepítésekor',
              'Főbiztosíték méretének növelésekor',
              'Új fogyasztásmérő bekötésekor',
              'Csatlakozási nyilatkozat igénylésekor',
              'Hálózati csatlakozódoboz cseréjekor',
              'Ipari vagy kereskedelmi ingatlan csatlakozásakor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                <span className="text-amber-500 font-bold text-lg">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-amber-500 text-white py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Kérjen díjmentes árajánlatot!</h2>
            <p className="mb-6 text-amber-100">Regisztrált villanyszerelőként minden szükséges dokumentumot kiállítunk, legyen szó EON, MVM vagy MEEVET bejelentésről.</p>
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