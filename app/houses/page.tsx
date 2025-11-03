import type { Metadata } from "next"
import HousesClient from "./houses-client"

export const metadata: Metadata = {
  title: "Daftar Rumah Kayu - Desa Lembah Indah",
  description: "Jelajahi koleksi lengkap rumah kayu tradisional kami dengan berbagai pilihan harga dan ukuran.",
  openGraph: {
    title: "Daftar Rumah Kayu - Desa Lembah Indah",
  },
}

export default function HousesPage() {
  return <HousesClient />
}
