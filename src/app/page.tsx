import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[70vh] px-6">
      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Selamat Datang di
        <span className="text-pink-600"> My Blog</span>
      </h1>
      
      <p className="max-w-xl text-gray-600 text-lg mb-8">
        Blog sederhana untuk praktikum Teknologi Web yang membahas
        Next.js, React, TypeScript, dan pengembangan web modern
        menggunakan App Router.
      </p>

      
      <div className="flex gap-4">
        <Link
  href="/blog"
  className="px-6 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
>
          Lihat Artikel
        </Link>

        <Link
          href="/about"
          className="px-6 py-3 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
        >
          Tentang Proyek
        </Link>
      </div>
    </section>
  )
}
