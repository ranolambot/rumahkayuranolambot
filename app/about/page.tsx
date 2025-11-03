import type { Metadata } from "next"
import Image from "next/image"
import { getVillageInfo } from "@/lib/sanity-queries"

export const metadata: Metadata = {
  title: "Tentang Kami - Desa Lembah Indah",
  description:
    "Pelajari lebih lanjut tentang Desa Lembah Indah, misi kami, dan komitmen terhadap keberlanjutan dan kualitas.",
}

export default async function AboutPage() {
  const villageInfo = await getVillageInfo()

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4">Tentang Kami</h1>
          <p className="text-xl text-foreground/70">Mengenal lebih jauh tentang Desa Lembah Indah</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Kisah Kami</h2>
            <div className="space-y-6">
              <p className="text-foreground/80 leading-relaxed text-lg">
                {villageInfo?.fullDescription ||
                  villageInfo?.description ||
                  "Desa Lembah Indah adalah sebuah komunitas yang didedikasikan untuk melestarikan warisan arsitektur tradisional Indonesia sambil memenuhi kebutuhan modern."}
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Setiap rumah kayu yang kami buat adalah hasil dari keahlian tangan yang telah diwariskan turun temurun,
                dikombinasikan dengan standar kualitas internasional dan perhatian terhadap detail.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Kami percaya bahwa rumah bukan hanya sebuah struktur, tetapi mencerminkan identitas, budaya, dan
                nilai-nilai keluarga yang tinggal di dalamnya.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden shadow-xl">
            <Image src="/traditional-wooden-architecture-craftmanship-detai.jpg" alt="Desa Lembah Indah" fill className="object-cover" />
          </div>
        </div>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-card" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
            <p className="text-foreground/80 leading-relaxed">
              Menyediakan rumah kayu berkualitas tinggi yang menggabungkan keindahan tradisional dengan kenyamanan
              modern, sambil menjaga keberlanjutan lingkungan dan mendukung komunitas lokal.
            </p>
          </div>

          {/* Values */}
          <div className="bg-card rounded-lg border border-border p-8">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-card" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Nilai-Nilai Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Kualitas tanpa kompromi
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Keberlanjutan lingkungan
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Kepercayaan dan transparansi
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Inovasi tradisional
              </li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-card rounded-lg border border-border p-12 mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Mengapa Memilih Desa Lembah Indah?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Keahlian Tradisional",
                description:
                  "Dibangun oleh pengrajin berpengalaman dengan keahlian turun-temurun dalam arsitektur kayu.",
              },
              {
                title: "Bahan Berkualitas",
                description: "Menggunakan kayu pilihan terbaik dari sumber yang berkelanjutan dan bertanggung jawab.",
              },
              {
                title: "Desain Unik",
                description: "Setiap rumah dirancang khusus dengan sentuhan personal sesuai kebutuhan Anda.",
              },
              {
                title: "Layanan Purna Jual",
                description: "Tim profesional kami siap membantu dengan garansi dan dukungan jangka panjang.",
              },
              {
                title: "Harga Kompetitif",
                description: "Kami menawarkan nilai terbaik tanpa mengorbankan kualitas dan keindahan.",
              },
              {
                title: "Komitmen Keberlanjutan",
                description: "Semua proses produksi kami ramah lingkungan dan mendukung komunitas lokal.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-background rounded-lg p-6 border border-border">
                <h3 className="font-bold text-lg text-primary mb-3">{item.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-primary text-card rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Punya Pertanyaan?</h2>
          <p className="text-lg mb-8 text-card/90">
            Hubungi kami untuk mempelajari lebih lanjut tentang rumah kayu kami dan menemukan solusi sempurna untuk
            kebutuhan Anda.
          </p>
          <a
            href="mailto:info@desalembahindah.com"
            className="inline-block px-8 py-3 bg-card text-primary rounded-lg font-semibold hover:bg-secondary hover:text-foreground transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  )
}
