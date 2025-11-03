import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllHouses, getVillageInfo } from "@/lib/sanity-queries";
import HouseCard from "@/components/house-card";
import ProcessSection from "@/components/process-section";

export const metadata: Metadata = {
  title: "Desa Lembah Indah - Rumah Kayu Tradisional",
  description:
    "Selamat datang di Desa Lembah Indah. Jelajahi koleksi rumah kayu tradisional dengan desain arsitektur yang indah dan berkelanjutan.",
};

export default async function HomePage() {
  const houses = await getAllHouses();
  const villageInfo = await getVillageInfo();
  const featuredHouses = houses.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[50vh] overflow-hidden">
        {/* Background image */}
        <Image
          src="/traditional-wooden-village-houses-with-architectur.jpg"
          alt="Desa Lembah Indah"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text overlay centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-card">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-balance drop-shadow-lg">
                Rumah Kayu Ranolambot
              </h1>
              <p className="text-lg sm:text-xl mb-8 leading-relaxed text-card/95 drop-shadow-md max-w-2xl mx-auto">
                Temukan keindahan arsitektur tradisional dengan rumah kayu
                berkualitas tinggi yang dirancang untuk kenyamanan Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/houses"
                  className="px-8 py-3 bg-primary text-card rounded-lg font-semibold hover:bg-secondary transition-colors hover-lift"
                >
                  Lihat Koleksi Rumah
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border-2 border-card text-card rounded-lg font-semibold hover:bg-card hover:text-primary transition-colors hover-lift"
                >
                  Tentang Kami
                </Link>
              </div>
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
      <ProcessSection />
    </div>
  );
}
