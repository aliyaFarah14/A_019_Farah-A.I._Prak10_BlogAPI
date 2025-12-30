export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      
      <div className="bg-rose-50/60 border border-rose-100 rounded-2xl shadow-sm p-8">
        
        <h1 className="text-4xl font-extrabold mb-4 text-pink-700">
          About This Project
        </h1>

        
        <p className="text-gray-700 mb-8 max-w-2xl leading-relaxed">
          Proyek ini dibuat sebagai bagian dari praktikum
          Teknologi Web untuk memahami konsep dasar pengembangan
          aplikasi web modern berbasis React dan Next.js.
        </p>

        
        <div className="grid md:grid-cols-2 gap-8">
          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-pink-600">
              Tujuan Pengembangan
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Website ini bertujuan untuk mempelajari penggunaan
              App Router pada Next.js, dynamic routing berbasis slug,
              serta pemisahan komponen, layout, dan data secara terstruktur.
            </p>
          </div>

          
          <div>
            <h2 className="text-xl font-semibold mb-3 text-pink-600">
              Teknologi yang Digunakan
            </h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Next.js (App Router)</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        
        <div className="mt-10 border-t border-pink-200 pt-6 text-sm text-gray-500">
          Dibuat oleh <span className="font-medium text-pink-600">
            Farah A.I
          </span> • 2025
        </div>
      </div>
    </section>
  )
}
