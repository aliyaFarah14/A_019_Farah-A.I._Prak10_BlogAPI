'use client'

import { useEffect, useState } from 'react'
import pb from '@/lib/pocketbase'

export default function BlogPocketBasePage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    try {
      const data = await pb.collection('posts').getFullList({
        filter: 'published = true',
        sort: '-created',
        requestKey: null, 
      })
      setPosts(data)
    } catch (error: any) {
      if (!error.isAbort) {
        console.error("Gagal mengambil data:", error)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        <p className="mt-4 text-pink-600 font-medium">Memuat artikel cantik...</p>
      </div>
    )
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          PocketBase <span className="text-pink-600">Feed</span>
        </h1>
        <p className="text-gray-500">Kumpulan artikel yang diambil langsung dari database.</p>
      </div>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-[2rem] p-8 shadow-sm border border-pink-50 hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-300 relative"
          >
            

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-pink-500 bg-pink-50 px-3 py-1 rounded-full uppercase">
                  {new Date(post.created).toLocaleDateString('id-ID', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </span>
              </div>

            
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                {post.title}
              </h2>

              <div
                className="text-gray-600 prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="flex items-center justify-between mt-4 border-t border-pink-50 pt-4">
                <p className="text-sm font-semibold text-gray-500 italic">
                  ✍️ <span className="text-pink-600 font-bold">{post.author || 'Admin'}</span>
                </p>
              </div>
            </div>
          </article>
        ))}

        {posts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-dashed border-pink-200">
            <p className="text-gray-400">Belum ada postingan. Ayo buat satu di Dashboard!</p>
          </div>
        )}
      </div>
    </section>
  )
}