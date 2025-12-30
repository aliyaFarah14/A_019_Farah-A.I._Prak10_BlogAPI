import Link from 'next/link'
import { posts } from '@/data/posts'

export default function BlogPage() {
  return (
    <section className="p-6">
      
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-pink-600">
          Blog
        </h1>
        <p className="text-gray-600 max-w-xl">
          Kumpulan artikel seputar pembelajaran Next.js, React,
          dan pengembangan web modern.
        </p>
      </header>

      
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group border border-pink-200 rounded-xl p-6 bg-white/60 backdrop-blur transition hover:shadow-xl hover:border-pink-300"
            >

            <span className="inline-block text-xs font-medium bg-pink-100 text-pink-600 px-3 py-1 rounded-full mb-4">
              Artikel
            </span>

           
            <h2 className="text-2xl font-bold mb-1 group-hover:text-pink-600 transition">
              {post.title}
            </h2>

            
            <p className="text-sm text-gray-500 mb-3">
              {post.author} • {post.date}
            </p>

          
            <p className="text-gray-700 mb-6">
              {post.excerpt}
            </p>

            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-pink-600 hover:text-pink-700 hover:underline"
            >
              Baca Selengkapnya
              <span className="transition group-hover:translate-x-1">
                →
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
