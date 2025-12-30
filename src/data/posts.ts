export type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
}

export const posts: Post[] = [
  {
    slug: 'belajar-nextjs',
    title: 'Belajar Next.js Dasar',
    excerpt: 'Pengenalan Next.js sebagai framework React modern.',
    content:
      'Next.js adalah framework React yang mendukung server-side rendering, routing berbasis folder, dan performa tinggi.',
    author: 'Farah A.I',
    date: '2025-12-18',
  },
  {
    slug: 'routing-mudah',
    title: 'Belajar Routing',
    excerpt: 'Routing otomatis berbasis folder di Next.js.',
    content:
      'Dengan App Router di Next.js, kita tidak perlu lagi mendefinisikan routing secara manual.',
    author: 'Farah A.I',
    date: '2025-12-18',
  },
]
