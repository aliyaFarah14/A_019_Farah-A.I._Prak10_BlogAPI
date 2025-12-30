'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import pb from '@/lib/pocketbase'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const linkClass = (path: string) => {
   
    const isActive =
      pathname === path || (path !== '/' && pathname.startsWith(path + '/'))

    return isActive
      ? 'text-pink-700 font-semibold border-b-2 border-pink-500 pb-1'
      : 'text-gray-700 hover:text-pink-600 transition'
  }

  const blogActive = pathname.startsWith('/blog') || pathname.startsWith('/blog-api') || pathname.startsWith('/blog-pb')

  const handleLogout = () => {
    pb.authStore.clear()
    router.push('/login')
  }

  return (
    <nav className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 border-b border-pink-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT MENU */}
        <div className="flex items-center gap-10">

          <Link href="/" className={linkClass('/')}>
            Home
          </Link>

          
          <Link href="/dashboard" className={linkClass('/dashboard')}>
            Dashboard
          </Link>

         
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className={`flex items-center gap-1 transition-all ${
                blogActive
                  ? 'text-pink-700 font-semibold border-b-2 border-pink-500 pb-1'
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Blog
              <span className={`text-sm transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>

            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3
                w-56 bg-white rounded-xl shadow-lg border border-pink-100
                transition-all duration-150 z-50
                ${open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
              `}
            >
              <Link
                href="/blog"
                className="block px-4 py-3 text-sm hover:bg-pink-50 first:rounded-t-xl"
              >
                Blog (Local Data)
              </Link>
              <Link
                href="/blog-api"
                className="block px-4 py-3 text-sm hover:bg-pink-50"
              >
                Blog API
              </Link>
              <Link
                href="/blog-pb"
                className="block px-4 py-3 text-sm hover:bg-pink-50 last:rounded-b-xl"
              >
                Blog PocketBase
              </Link>
            </div>
          </div>

          <Link href="/about" className={linkClass('/about')}>
            About
          </Link>
        </div>

      
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="text-sm text-pink-700 border border-pink-400 px-4 py-2 rounded-lg hover:bg-pink-100 transition active:scale-95"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  )
}