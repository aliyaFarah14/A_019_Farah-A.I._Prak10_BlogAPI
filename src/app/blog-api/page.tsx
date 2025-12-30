import Link from 'next/link'

type Post = {
  id: number
  title: string
  body: string
}

export default async function BlogApiPage() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    { cache: 'no-store' }
  )

  const posts: Post[] = await res.json()

  return (
    <section className="max-w-6xl mx-auto p-6">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-2">
          Blog API 🌐
        </h1>
        <p className="text-gray-600">
          Data artikel diambil dari API eksternal menggunakan fetch().
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.slice(0, 10).map((post) => (
          <article
            key={post.id}
            className="bg-pink-50 border border-pink-100 rounded-xl p-6 hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg mb-2">
              {post.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              {post.body.substring(0, 80)}...
            </p>

            <Link
              href={`/blog-api/${post.id}`}
              className="text-pink-600 font-medium hover:underline"
            >
              Baca Detail →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
