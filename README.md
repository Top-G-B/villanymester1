# ⚡ Villanymester – Next.js SEO Site
### solampas.hu – Villanyszerelő Pest Megye | Top 5 Város

---

## 📁 Projekt struktúra

```
villanymester/
├── src/
│   ├── app/
│   │   ├── page.tsx              ← Főoldal
│   │   ├── layout.tsx            ← Globális layout + schema
│   │   ├── [slug]/page.tsx       ← 5 városoldal (dinamikus)
│   │   ├── arak/page.tsx         ← Ároldal
│   │   ├── kapcsolat/page.tsx    ← Kapcsolat + form
│   │   ├── rolunk/page.tsx       ← Rólunk
│   │   ├── szolgaltatasok/       ← Szolgáltatások
│   │   ├── sitemap.ts            ← Auto sitemap.xml
│   │   └── robots.ts             ← robots.txt
│   ├── components/
│   │   ├── Header.tsx            ← Navigáció
│   │   └── Footer.tsx            ← Lábléc
│   └── lib/
│       └── data.ts               ← MINDEN adat itt van (városok, árak, FAQs)
├── package.json
├── next.config.js
├── tailwind.config.ts
└── vercel.json
```

---

## 🚀 DEPLOY – Lépésről lépésre (nem kell programozni!)

### 1. LÉPÉS – Fiókokat csinálni (5 perc)

1. **GitHub fiók**: https://github.com → Sign up (ingyenes)
2. **Vercel fiók**: https://vercel.com → Sign up with GitHub (ingyenes)

---

### 2. LÉPÉS – Projekt feltöltése GitHub-ra (10 perc)

**Opció A – GitHub Desktop (legegyszerűbb, nem kell parancssor):**
1. Töltsd le: https://desktop.github.com
2. Nyisd meg → File → New Repository
3. Name: `villanymester`
4. Local Path: válaszd ki a letöltött `villanymester` mappát
5. Kattints: **Publish repository** → Public

**Opció B – Parancssor (ha ismered):**
```bash
cd villanymester
git init
git add .
git commit -m "Initial commit - Villanymester SEO site"
git remote add origin https://github.com/FELHASZNALONEVED/villanymester.git
git push -u origin main
```

---

### 3. LÉPÉS – Vercel deploy (5 perc)

1. Menj: https://vercel.com/dashboard
2. Kattints: **"Add New Project"**
3. **Import Git Repository** → válaszd a `villanymester` repót
4. **Framework Preset**: Next.js (automatikusan felismeri)
5. Kattints: **Deploy** → várj 2-3 percet
6. ✅ Kész! Kapsz egy `villanymester.vercel.app` URL-t

---

### 4. LÉPÉS – Saját domain bekötése (10 perc)

#### A) Cloudflare-re vigyed a DNS-t (AJÁNLOTT – gyorsabb, jobb SEO)
1. Regisztrálj: https://cloudflare.com
2. Add Sites → írd be: `solampas.hu`
3. Cloudflare megmutatja az új nameserver-eket (pl. `aria.ns.cloudflare.com`)
4. Menj a domained regisztrátorához → Nameserver beállítás → cseréld le

#### B) Vercel-ben domain hozzáadás
1. Vercel Dashboard → Project → Settings → Domains
2. Add Domain → `solampas.hu`
3. Vercel megmutatja a DNS rekordot (A rekord vagy CNAME)
4. Cloudflare-ben: DNS → Add Record → A rekord → `76.76.21.21`

**Propagálás: 5-30 perc.** Utána `https://solampas.hu` élőben van! 🎉

---

### 5. LÉPÉS – Google Search Console bekötés (15 perc)

1. https://search.google.com/search-console
2. Add Property → URL prefix → `https://solampas.hu`
3. Verify: HTML tag → másold be a meta taget
4. Vercel-ben: `src/app/layout.tsx` fájlban a `metadata` blokkba:
   ```typescript
   verification: { google: 'IDE_JÖN_A_KÓDOD' }
   ```
5. Vercel-ben: Settings → Environment Variables → rebuild

**Sitemap beküldése:**
- Search Console → Sitemaps → Add sitemap → `sitemap.xml`

---

### 6. LÉPÉS – Google Analytics 4 (opcionális, 10 perc)

1. https://analytics.google.com → Create property
2. Másold a `G-XXXXXXXXXX` measurement ID-t
3. `src/app/layout.tsx`-be add hozzá:
```typescript
// A <head> blokkba:
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}/>
<script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}}/>
```

---

## ✏️ Tartalom szerkesztése

**MINDEN adatot egy fájlban szerkesztesz:**
```
src/lib/data.ts
```

Ami itt megváltoztatható:
- `SITE` → cégnév, telefon, email, cím
- `CITIES` → városok adatai, FAQ-k, meta leírások
- `SERVICES` → szolgáltatások
- `REVIEWS` → vélemények

**Hogyan szerkeszd:**
1. GitHub-on nyisd meg a fájlt
2. Kattints a ceruza ikonra (✏️ Edit)
3. Módosíts
4. Commit changes → Vercel automatikusan újrabuildeláz (1-2 perc)

---

## 🆕 Város hozzáadása

1. Nyisd meg: `src/lib/data.ts`
2. A `CITIES` tömbhöz adj hozzá egy új objektumot (kövesd a meglévő formátumot)
3. Commit → automatikus deploy

---

## 📊 SEO amit az oldal automatikusan csinál

- ✅ Minden oldalnak egyedi `<title>` és `<meta description>`
- ✅ `sitemap.xml` automatikusan generálva (minden URL benne)
- ✅ `robots.txt` automatikusan generálva
- ✅ **LocalBusiness schema** minden városoldalon (JSON-LD)
- ✅ **FAQPage schema** városoldalanként 5 kérdéssel
- ✅ **BreadcrumbList schema** minden oldalon
- ✅ **WebSite + Organization schema** a főoldalon
- ✅ OpenGraph tagek (Facebook/LinkedIn megosztáshoz)
- ✅ Canonical URL minden oldalon
- ✅ `lang="hu"` HTML attribútum
- ✅ Mobile-first responsive design
- ✅ Static HTML export → max. Page Speed

---

## 🏁 Ellenőrző lista deploy után

- [ ] Oldal betölt: https://solampas.hu
- [ ] HTTPS működik (zöld lakat)
- [ ] 5 városoldal elérhető (pl. /villanyszerelo-erd/)
- [ ] Sitemap elérhető: https://solampas.hu/sitemap.xml
- [ ] Robots.txt: https://solampas.hu/robots.txt
- [ ] Google Search Console: sitemap beküldve
- [ ] PageSpeed Insights: https://pagespeed.web.dev (cél: 90+)
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results

---

## 💰 Költségek

| Szolgáltatás | Ár |
|---|---|
| Domain (solampas.hu) | Már megvan |
| Vercel hosting | **Ingyenes** (Hobby tier) |
| Cloudflare DNS | **Ingyenes** |
| GitHub | **Ingyenes** |
| **ÖSSZESEN** | **0 Ft/hó** |

---

## 📞 Következő lépések Claudenál

Ha megvan a deploy, kérj tőlem:
1. Google My Business profil optimalizálás útmutató
2. Blog bejegyzés generálás (long-tail kulcsszavakra)
3. Backlink stratégia Pest megye lokális SEO-hoz
4. A többi 15 Pest megyei város oldal generálása
