'use client'

import { useState } from 'react'
import pb from '@/lib/pocketbase'

export default function DashboardPage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      
      const authorName = pb.authStore.model?.name || "Farah A.I"

      await pb.collection('posts').create({
        title: title,
        content: content,
        author: authorName, 
        published: true,
      })

      setSuccess('Blog berhasil diterbitkan! 🎉')
      setTitle('')
      setContent('')
    } catch (err) {
      console.error(err)
      setError('Gagal menyimpan blog. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50/50 py-10">
      <section className="max-w-5xl mx-auto px-6">
        
        
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">
            Dashboard<span className="text-pink-500">.</span>
          </h1>
          <p className="text-gray-500 mt-2">Selamat datang kembali! Apa yang ingin kamu bagikan hari ini?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition">
              <h3 className="text-sm font-bold text-pink-600 uppercase tracking-wider mb-1">Profil Penulis</h3>
              <p className="text-gray-900 font-bold text-lg">
                {pb.authStore.model?.name || "Farah A.I"}
              </p>
              <p className="text-gray-500 text-sm">{pb.authStore.model?.email}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-600 font-semibold">Status: Online</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-rose-400 p-6 rounded-3xl text-white shadow-lg shadow-pink-200">
              <h3 className="text-lg font-bold mb-1">Tips Menulis 💡</h3>
              <p className="text-pink-50 text-sm leading-relaxed">
                Pastikan konten yang kamu tulis bermanfaat dan menggunakan bahasa yang mudah dimengerti.
              </p>
            </div>
          </div>

          
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-pink-50/50 px-8 py-4 border-b border-pink-100">
                <h2 className="text-xl font-bold text-pink-700">Buat Artikel Baru</h2>
              </div>

              <div className="p-8">
                {success && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                    <span className="text-lg">✅</span>
                    <span className="font-medium">{success}</span>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 flex items-center gap-3">
                    <span className="text-lg">❌</span>
                    <span className="font-medium">{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Judul Artikel
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan judul yang menarik..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-400 outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Isi Konten
                    </label>
                    <textarea
                      placeholder="Tuliskan cerita atau informasi di sini..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                      rows={8}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-4 focus:ring-pink-100 focus:border-pink-400 outline-none transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`
                        flex items-center gap-2 px-8 py-3 rounded-2xl font-bold text-white transition-all
                        ${loading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-pink-500 hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-200 active:scale-95'}
                      `}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Menyimpan...
                        </>
                      ) : 'Terbitkan Sekarang'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}