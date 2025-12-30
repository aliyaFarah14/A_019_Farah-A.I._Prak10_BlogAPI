import './globals.css'
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-b from-pink-600 via-pink-50 to-white text-gray-900 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
