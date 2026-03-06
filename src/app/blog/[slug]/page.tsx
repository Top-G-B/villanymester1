import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SITE } from '@/lib/data'
import { BLOG_POSTS } from '@/lib/blog'

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}/` },
    keywords: post.keywords,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      locale: 'hu_HU',
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3)

  const blogImages: Record<string, string> = {
    'villanyszereles-ar-lista-2025': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    'elektromos-auto-tolto-otthon-telepites': 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    'napelem-villanyszerelo-feladatai': 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    'aramkimaradas-mit-tegyek': 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    'okosotthon-villanyszerelo-szerepe': 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    'villanyszereles-felujitas-mire-figyelj': 'https://images.unsplash.com/photo-1581092334651-ddf19d979f4f?w=800&q=80',
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    inLanguage: 'hu-HU',
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${post.slug}/` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Főoldal', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog/` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}/` },
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}/>

      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <Link href="/blog/" className="hover:text-amber-600">Blog</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor}`}>{post.category}</span>
            <span className="text-gray-400 text-sm">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-black leading-tight">{post.title}</h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

            <article className="lg:col-span-2 min-w-0">
              {blogImages[post.slug] && (
                <img src={blogImages[post.slug]} alt={post.title} className="w-full h-64 object-cover rounded-2xl mb-8" />
              )}
              <div
                className="prose prose-gray prose-headings:font-black prose-h2:text-xl prose-h2:mt-8 prose-h3:text-lg prose-a:text-amber-600 prose-strong:text-gray-900 prose-ul:space-y-1 max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-lg mb-2">Ingyenes árajánlat Pest megyében</h3>
                <p className="text-gray-600 text-sm mb-4">Hívjon vagy kérjen online árajánlatot – 24 órán belül visszajelzünk.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${SITE.phone}`} className="btn-primary text-sm">📞 {SITE.phoneDisplay}</a>
                  <Link href="/kapcsolat/" className="btn-outline text-sm">📋 Online ajánlatkérés</Link>
                </div>
              </div>

              {related.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-black text-gray-900 text-lg mb-4">Kapcsolódó cikkek</h3>
                  <div className="grid gap-3">
                    {related.map(r => (
                      <Link key={r.slug} href={`/blog/${r.slug}/`}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-all group">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${r.categoryColor}`}>{r.category}</span>
                        <span className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{r.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            <div className="space-y-5">
              <div className="bg-amber-500 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-black text-lg mb-2">Kérjen árajánlatot!</h3>
                <p className="text-amber-100 text-sm mb-4">Ingyenes felmérés Pest megyében</p>
                <a href={`tel:${SITE.phone}`} className="block bg-white text-amber-600 font-black py-3 rounded-xl text-center mb-3 hover:bg-amber-50 transition-colors text-sm">
                  {SITE.phoneDisplay}
                </a>
                <Link href="/kapcsolat/" className="block bg-amber-600 text-white font-bold py-2.5 rounded-xl text-center hover:bg-amber-700 transition-colors text-sm border border-amber-400">
                  📋 Online ajánlatkérés
                </Link>
              </div>
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">📖 Összes cikk</h3>
                <ul className="space-y-1.5">
                  {BLOG_POSTS.map(p => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}/`}
                        className={`text-sm transition-colors block py-0.5 ${p.slug === post.slug ? 'text-amber-600 font-semibold' : 'text-gray-600 hover:text-amber-600'}`}>
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
