import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center animate-fadeInUp">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-foreground mb-4">Halaman Tidak Ditemukan</p>
        <p className="text-foreground/70 mb-8">Maaf, halaman yang Anda cari tidak tersedia.</p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-primary text-card rounded-lg font-semibold hover:bg-secondary transition-colors duration-300"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  )
}
