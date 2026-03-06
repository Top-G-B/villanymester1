# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Static export to /out directory
npm run start    # Serve production build
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a Next.js 14 **static export** site (`output: 'export'` in `next.config.js`) for a Hungarian electrician business targeting Pest county cities. All URLs use trailing slashes (`trailingSlash: true`).

### Single Source of Truth

All business content lives in two files:
- **`src/lib/data.ts`** – exports `SITE` (contact info, domain), `CITIES` (5 city objects with slugs, FAQs, meta tags), `SERVICES` (6 service objects), `REVIEWS`
- **`src/lib/blog.ts`** – exports `BLOG_POSTS` with inline HTML content strings

Adding a new city: add an object to `CITIES` in `data.ts` — the dynamic route, sitemap, and static params all derive from it automatically.

### Routing

| Route | Source |
|---|---|
| `/[slug]/` | City pages — `generateStaticParams()` maps over `CITIES` |
| `/szolgaltatasok/[slug]/` | Service pages — `generateStaticParams()` maps over `SERVICES` |
| `/blog/[slug]/` | Blog pages — `generateStaticParams()` maps over `BLOG_POSTS` |
| `/sitemap.xml`, `/robots.txt` | Auto-generated from `src/app/sitemap.ts` and `robots.ts` |

Each dynamic page calls `notFound()` if the slug isn't found in its data array.

### SEO / Schema

Every page embeds JSON-LD structured data inline via `<script type="application/ld+json">`. The root layout (`src/app/layout.tsx`) injects global `WebSite` + `LocalBusiness` schemas. City pages add `LocalBusiness` (city-specific), `FAQPage`, and `BreadcrumbList` schemas.

### Styling

Tailwind CSS with custom brand colors (amber scale mapped to `brand.*`). Reusable utility classes defined in `src/app/globals.css`:
- `.btn-primary` / `.btn-outline` — CTA buttons
- `.container-main` — max-w-6xl centered container
- `.section` — vertical padding block
- `.card` — white rounded panel
- `.badge` — amber pill label

### Deployment

Deployed to Vercel. The build outputs static HTML to `/out`. `vercel.json` contains any redirect/header config.
