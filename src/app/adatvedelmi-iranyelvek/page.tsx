import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Adatvédelmi Irányelvek | Villanymester',
  description: 'Adatvédelmi tájékoztató – Villanymester adatkezelési gyakorlata, GDPR megfelelés.',
  robots: { index: false, follow: false },
}

export default function AdatvedelmiPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Adatvédelmi irányelvek</span>
          </nav>
        </div>
      </div>

      <section className="section bg-white">
        <div className="container-main max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Adatvédelmi Irányelvek</h1>
          <p className="text-sm text-gray-400 mb-10">Utoljára frissítve: 2025. január 1.</p>

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">1. Az adatkezelő adatai</h2>
              <div className="card text-sm space-y-1">
                <p><strong>Név:</strong> {SITE.name}</p>
                <p><strong>Székhely:</strong> {SITE.address}</p>
                <p><strong>E-mail:</strong> <a href={`mailto:${SITE.email}`} className="text-amber-600 hover:underline">{SITE.email}</a></p>
                <p><strong>Telefon:</strong> <a href={`tel:${SITE.phone}`} className="text-amber-600 hover:underline">{SITE.phoneDisplay}</a></p>
                <p><strong>Weboldal:</strong> <a href={SITE.url} className="text-amber-600 hover:underline">{SITE.domain}</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">2. Milyen adatokat gyűjtünk?</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Kapcsolatfelvételi adatok:</strong> Név, e-mail cím, telefonszám, amelyeket Ön önkéntesen ad meg az ajánlatkérő űrlapon keresztül.</li>
                <li><strong>Technikai adatok:</strong> IP-cím, böngésző típusa, meglátogatott oldalak, látogatás időpontja – automatikusan gyűjtve a webszerver és az analitikai eszközök által.</li>
                <li><strong>Süti (cookie) adatok:</strong> Lásd részletesen a <Link href="/sutik/" className="text-amber-600 hover:underline">Cookie tájékoztató</Link> oldalunkon.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">3. Mire használjuk az adatokat?</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Árajánlat készítéséhez, időpontegyeztetéshez és villanyszerelési munkák elvégzéséhez.</li>
                <li>Kérdéseire való válaszadáshoz, ügyfélszolgálati célokra.</li>
                <li>Weboldal teljesítményének méréséhez és fejlesztéséhez (Google Analytics).</li>
                <li>Jogszabályi kötelezettségek teljesítéséhez (számviteli, adózási előírások).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">4. Az adatkezelés jogalapja</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Szerződés teljesítése (GDPR 6. cikk (1) b)):</strong> Árajánlatkérés, munka elvégzése.</li>
                <li><strong>Hozzájárulás (GDPR 6. cikk (1) a)):</strong> Hírlevel, marketing kommunikáció (ha alkalmazandó).</li>
                <li><strong>Jogos érdek (GDPR 6. cikk (1) f)):</strong> Webanalitika, biztonság.</li>
                <li><strong>Jogi kötelezettség (GDPR 6. cikk (1) c)):</strong> Számviteli, adózási adatmegőrzés.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">5. Meddig tároljuk az adatokat?</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 text-sm">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-gray-700">Adatkategória</th>
                      <th className="text-left p-3 font-semibold text-gray-700">Megőrzési idő</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Árajánlatkérési adatok', '1 év (el nem fogadott ajánlatnál)'],
                      ['Elvégzett munka dokumentumai', '8 év (számviteli kötelezettség)'],
                      ['Analitikai adatok (Google Analytics)', '14 hónap'],
                      ['Süti adatok', 'Süti típustól függő, lásd Cookie tájékoztató'],
                    ].map(([k, v]) => (
                      <tr key={k} className="hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{k}</td>
                        <td className="p-3 text-gray-600">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">6. Adattovábbítás, harmadik felek</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Google Analytics:</strong> Webanalitikai célokra. Google adatvédelmi irányelvek: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">policies.google.com/privacy</a></li>
                <li><strong>Vercel Inc.:</strong> Webhosting szolgáltatás. Adatok EU/US adatközpontokban tárolhatók.</li>
                <li>Személyes adatait harmadik félnek marketing célra nem adjuk át.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">7. Az Ön jogai</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>Hozzáférési jog:</strong> Tájékoztatást kérhet az általunk kezelt adatairól.</li>
                <li><strong>Helyesbítési jog:</strong> Kérheti pontatlan adatai javítását.</li>
                <li><strong>Törlési jog („elfeledtetés"):</strong> Kérheti adatai törlését, ha azok kezelése már nem szükséges.</li>
                <li><strong>Adathordozhatóság:</strong> Jogosult az adatait géppel olvasható formátumban megkapni.</li>
                <li><strong>Tiltakozási jog:</strong> Tiltakozhat adatai jogos érdek alapján történő kezelése ellen.</li>
              </ul>
              <p className="text-sm mt-3">Kérelmét az alábbi e-mail címre küldheti: <a href={`mailto:${SITE.email}`} className="text-amber-600 hover:underline">{SITE.email}</a>. Válaszidő: 30 nap.</p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">8. Panasztétel, hatóság</h2>
              <p className="text-sm mb-2">Ha úgy érzi, hogy adatait jogellenesen kezeljük, panaszt nyújthat be a Nemzeti Adatvédelmi és Információszabadság Hatóságnál:</p>
              <div className="card text-sm space-y-1">
                <p><strong>NAIH – Nemzeti Adatvédelmi és Információszabadság Hatóság</strong></p>
                <p>Weboldal: <a href="https://www.naih.hu" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">www.naih.hu</a></p>
                <p>Cím: 1055 Budapest, Falk Miksa utca 9–11.</p>
                <p>Telefon: +36 1 391 1400</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
