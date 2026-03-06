import { MetadataRoute } from 'next'
import { SITE, CITIES, SERVICES } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/arak/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/rolunk/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/kapcsolat/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/referenciak/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/szolgaltatasok/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
  const cities: MetadataRoute.Sitemap = CITIES.map(c => ({
    url: `${SITE.url}/${c.slug}/`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9
  }))
  const services: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url: `${SITE.url}/szolgaltatasok/${s.slug}/`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7
  }))
  return [...base, ...cities, ...services]
}
