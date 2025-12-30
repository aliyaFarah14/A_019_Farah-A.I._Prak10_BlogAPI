export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Praktikum Teknologi Web</p>
        <p className="mt-1">
          Next.js • TypeScript • Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
