import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllHouses, getVillageInfo } from "@/lib/sanity-queries";
import HouseCard from "@/components/house-card";

export const metadata: Metadata = {
  title: "Desa Ranolambot - Rumah Kayu Tradisional",
  description:
    "Selamat datang di Desa Ranolambot. Jelajahi koleksi rumah kayu tradisional dengan desain arsitektur yang indah dan berkelanjutan.",
};

export default async function HomePage() {
  const houses = await getAllHouses();
  const villageInfo = await getVillageInfo();
  const featuredHouses = houses.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-6 text-balance">
                Desa Lembah Indah
              </h1>
              <p className="text-xl text-foreground/70 mb-4 leading-relaxed">
                Temukan keindahan arsitektur tradisional dengan rumah kayu
                berkualitas tinggi yang dirancang untuk kenyamanan Anda.
              </p>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                Setiap rumah mencerminkan keahlian tangan dan keberlanjutan
                lingkungan yang kami junjung tinggi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/houses"
                  className="px-8 py-3 bg-primary text-card rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
                >
                  Lihat Koleksi Rumah
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-card transition-colors text-center"
                >
                  Tentang Kami
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/traditional-wooden-village-houses-with-architectur.jpg"
                alt="Desa Lembah Indah"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Village Overview */}
      {villageInfo && (
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Sekilas Tentang Kami
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                  {villageInfo.description}
                </p>
                {villageInfo.attractions &&
                  villageInfo.attractions.length > 0 && (
                    <div>
                      <h3 className="font-bold text-lg text-primary mb-4">
                        Daya Tarik
                      </h3>
                      <ul className="space-y-2">
                        {villageInfo.attractions.map(
                          (attraction: string, index: number) => (
                            <li key={index} className="flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-secondary"></span>
                              <span className="text-foreground/80">
                                {attraction}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
              </div>
              {villageInfo.villageImage && (
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={villageInfo.villageImage || "/placeholder.svg"}
                    alt={villageInfo.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Featured Houses */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Rumah Unggulan
            </h2>
            <p className="text-foreground/70 text-lg">
              Pilihan rumah kayu terbaik kami
            </p>
          </div>

          {houses.length === 0 ? (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <p className="text-foreground/70 mb-4">
                Belum ada rumah yang tersedia.
              </p>
              <p className="text-foreground/50 text-sm">
                Silakan kembali lagi nanti.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {featuredHouses.map((house) => (
                  <HouseCard key={house._id} {...house} />
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/houses"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-card transition-colors"
                >
                  Lihat Semua Rumah
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">{houses.length}+</p>
              <p className="text-card/80">Rumah Kayu</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-card/80">Keluarga Puas</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">20+</p>
              <p className="text-card/80">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
