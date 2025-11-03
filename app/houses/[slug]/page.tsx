import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getHouseBySlug, getAllHouses } from "@/lib/sanity-queries";
import HouseDetailClient from "./house-detail-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const houses = await getAllHouses();
  // Only generate params for houses that have a slug (avoid undefined routes)
  return houses
    .filter((house: any) => house?.slug && house.slug.current)
    .map((house: any) => ({
      slug: house.slug.current,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const house = await getHouseBySlug(slug);

  if (!house) {
    return {};
  }

  return {
    title: `${house.title} - Desa Lembah Indah`,
    description:
      house.description || `Rumah kayu ${house.title} di Desa Lembah Indah`,
    openGraph: {
      title: `${house.title} - Desa Lembah Indah`,
      description: house.description,
      images: house.mainImage
        ? [
            {
              url: `${
                process.env.NEXT_PUBLIC_SANITY_CONTENT_URL ||
                "https://cdn.sanity.io"
              }/images/${house.mainImage.asset._ref}`,
              width: 1200,
              height: 630,
            },
          ]
        : undefined,
    },
  };
}

export default async function HouseDetailPage({ params }: Props) {
  const { slug } = await params;
  const house = await getHouseBySlug(slug);

  if (!house) {
    notFound();
  }

  return <HouseDetailClient house={house} />;
}
