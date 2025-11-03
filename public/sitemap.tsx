import { client } from "@/sanity/lib/client"

async function generateSitemapUrl(url: string, lastmod?: string, changefreq?: string, priority?: number) {
  return {
    url,
    lastmod: lastmod || new Date().toISOString().split("T")[0],
    changefreq: changefreq || "weekly",
    priority: priority || 0.8,
  }
}

export async function GET() {
  const houses = await client.fetch(`*[_type == "house"] { slug, publishedAt }`)

  const sitemapUrls = [
    await generateSitemapUrl("/", new Date().toISOString().split("T")[0], "daily", 1),
    await generateSitemapUrl("/houses", new Date().toISOString().split("T")[0], "daily", 0.9),
    await generateSitemapUrl("/about", new Date().toISOString().split("T")[0], "monthly", 0.7),
    ...houses.map((house: any) =>
      generateSitemapUrl(
        `/houses/${house.slug.current}`,
        new Date(house.publishedAt).toISOString().split("T")[0],
        "weekly",
        0.8,
      ),
    ),
  ]

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls
    .map(
      (url) => `
  <url>
    <loc>${process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com"}${url.url}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
