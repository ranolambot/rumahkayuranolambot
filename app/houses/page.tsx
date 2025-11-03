import type { Metadata } from "next";
import HousesClient from "./houses-client";
import { getAllHouses } from "@/lib/sanity-queries";

export const metadata: Metadata = {
  title: "Daftar Rumah Kayu - Desa Lembah Indah",
  description:
    "Jelajahi koleksi lengkap rumah kayu tradisional kami dengan berbagai pilihan harga dan ukuran.",
  openGraph: {
    title: "Daftar Rumah Kayu - Desa Lembah Indah",
  },
};

export default async function HousesPage() {
  // Server-side fetch: get initial list of houses and pass as prop to the client component.
  const houses = await getAllHouses();

  return <HousesClient initialHouses={houses} />;
}
