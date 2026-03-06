import { MetadataRoute } from 'next'
import { SITE, CITIES, SERVICES } from '@/lib/data'
import { BLOG_POSTS } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/arak/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/rolunk/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/kapcsolat/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/referenciak/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/szolgaltatasok/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ]
  const cities: MetadataRoute.Sitemap = CITIES.map(c => ({
    url: `${SITE.url}/${c.slug}/`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9
  }))
  const services: MetadataRoute.Sitemap = [
    ...SERVICES.map(s => ({
      url: `${SITE.url}/szolgaltatasok/${s.slug}/`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.75
    })),
    { url: `${SITE.url}/szolgaltatasok/elektromos-auto-tolto/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/napelem-bekotes/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/okosotthon/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE.url}/szolgaltatasok/hibaelharitas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/lakas-felujitas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/szolgaltatasok/ipari-villanyszereles/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]
  const blog: MetadataRoute.Sitemap = BLOG_POSTS.map(p => ({
    url: `${SITE.url}/blog/${p.slug}/`, lastModified: new Date(p.date), changeFrequency: 'monthly' as const, priority: 0.65
  }))
  const lakasfelujitas: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/lakasfelujitas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/lakasfelujitas/villanyszereles-uj-epuletbe/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE.url}/lakasfelujitas/furdoszoba-villanyszereles/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
  ]
  return [...base, ...cities, ...services, ...blog, ...lakasfelujitas]
}
