import type React from "react"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Desa Lembah Indah - Rumah Kayu Tradisional",
  description:
    "Jelajahi koleksi rumah kayu tradisional di Desa Lembah Indah dengan desain arsitektur yang indah dan berkelanjutan.",
  keywords: "rumah kayu, desa, lembah indah, properti tradisional, arsitektur tradisional",
  authors: [{ name: "Desa Lembah Indah" }],
  openGraph: {
    title: "Desa Lembah Indah - Rumah Kayu Tradisional",
    description: "Jelajahi koleksi rumah kayu tradisional yang menakjubkan",
    type: "website",
    locale: "id_ID",
  },
  robots: "index, follow",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Desa Lembah Indah",
              description: "Rumah Kayu Tradisional",
              url: process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com",
              image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com"}/traditional-wooden-village-houses-with-architectur.jpg`,
              sameAs: [],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "info@desalembahindah.com",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} bg-background text-foreground`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
