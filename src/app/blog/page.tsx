import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/data'
import { BLOG_POSTS } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Villanyszerelés Blog – Tippek, Árak, Útmutatók | Villanymester',
  description: 'Villanyszerelési tippek, árlista 2025, EV töltő útmutató, napelem bekötés, okosotthon – minden ami az elektromos munkákhoz kell Pest megyében.',
  alternates: { canonical: `${SITE.url}/blog/` },
}

export default function BlogPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100">
        <div className="container-main py-3">
          <nav className="text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-amber-600">Főoldal</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Blog</span>
          </nav>
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14">
        <div className="container-main max-w-2xl text-center">
          <div className="badge mb-4">📖 Blog</div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Villanyszerelés Blog</h1>
          <p className="text-gray-300">Hasznos tippek, reális árak, útmutatók – minden elektromos munkáról.</p>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container-main max-w-4xl">
          <div className="grid gap-5">
            {BLOG_POSTS.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}
                className="card hover:shadow-md hover:border-amber-200 transition-all group">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">{post.date} · {post.readTime}</span>
                    </div>
                    <h2 className="font-black text-lg text-gray-900 mb-1.5 group-hover:text-amber-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed">{post.excerpt}</p>
                  </div>
                  <span className="text-amber-600 font-semibold text-sm shrink-0 group-hover:translate-x-1 transition-transform">
                    Olvasd el →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-amber-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-black mb-2">Kérdése van? Hívjon minket!</h2>
            <p className="text-amber-100 mb-5 text-sm">Ingyenes tanácsadás és árajánlat Pest megyében.</p>
            <a href={`tel:${SITE.phone}`} className="bg-white text-amber-600 font-black px-8 py-3 rounded-xl hover:bg-amber-50 transition-colors">
              📞 {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
