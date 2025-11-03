import type { MetadataRoute } from "next"
import { client } from "@/sanity/lib/client"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const houses = await client.fetch(`
    *[_type == "house"] { slug, publishedAt } | order(publishedAt desc)
  `)

  const houseUrls: MetadataRoute.Sitemap = houses.map((house: any) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com"}/houses/${house.slug.current}`,
    lastModified: new Date(house.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com"}/houses`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com"}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...houseUrls,
  ]
}
