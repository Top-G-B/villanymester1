import { MetadataRoute } from 'next'
import { SITE, CITIES } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/arak/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/rolunk/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/kapcsolat/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE.url}/szolgaltatasok/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/hibaelharitas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/lakas-felujitas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/elektromos-auto-tolto/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/napelem-bekotes/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/okosotthon/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE.url}/szolgaltatasok/ipari-villanyszereles/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    ...CITIES.map(c => ({ url: `${SITE.url}/${c.slug}/`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 })),
  ]
}
