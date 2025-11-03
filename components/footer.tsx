import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-card mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Desa Lembah Indah</h3>
            <p className="text-card/80 text-sm leading-relaxed">
              Kami menyediakan rumah kayu tradisional dengan desain arsitektur yang indah dan berkelanjutan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-card/80 hover:text-card transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/houses" className="text-card/80 hover:text-card transition-colors">
                  Rumah Kayu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-card/80 hover:text-card transition-colors">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Hubungi Kami</h3>
            <p className="text-card/80 text-sm mb-2">Email: info@desalembahindah.com</p>
            <p className="text-card/80 text-sm mb-2">WhatsApp: +62 812-3456-7890</p>
            <p className="text-card/80 text-sm">Indonesia</p>
          </div>
        </div>

        <div className="border-t border-card/20 pt-8 text-center text-sm text-card/70">
          <p>&copy; {currentYear} Desa Lembah Indah. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
