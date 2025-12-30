import { posts } from '@/data/posts'
import Link from 'next/link'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetail({ params }: Props) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-red-500 text-lg font-medium">
          Artikel tidak ditemukan
        </p>
        <Link
          href="/blog"
          className="text-pink-600 hover:text-pink-700 hover:underline"
           >
          ← Kembali ke Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-10">
      
      <h1 className="text-4xl font-extrabold mb-4 leading-tight">
        {post.title}
      </h1>

      
      <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
        <span>{post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
      </div>

      
      <div className="prose prose-gray max-w-none">
        <p>{post.content}</p>
      </div>

      
      <hr className="my-10" />

      
      <Link
        href="/blog"
        className="text-pink-600 hover:text-pink-700 hover:underline"
        >
        ← Kembali ke daftar artikel
      </Link>
    </article>
  )
}
