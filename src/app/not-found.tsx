import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl font-black text-amber-400 mb-4">404</div>
        <h1 className="text-2xl font-black text-gray-900 mb-3">Az oldal nem található</h1>
        <p className="text-gray-500 mb-8">A keresett oldal nem létezik vagy áthelyezték.</p>
        <Link href="/" className="btn-primary">← Vissza a főoldalra</Link>
      </div>
    </div>
  )
}
