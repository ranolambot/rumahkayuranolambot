import { client } from "@/sanity/lib/client";

export async function getAllHouses() {
  const query = `*[_type == "house"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    price,
    size,
    bedrooms,
    bathrooms,
    features,
    mainImage,
    seller,
    publishedAt
  }`;
  return client.fetch(query);
}

export async function getHouseBySlug(slug: string) {
  // Try matching on slug.current or fallback to matching the document _id.
  // This helps avoid 404s when a slug is missing or data was imported with _id references.
  const query = `*[_type == "house" && (slug.current == $slug || _id == $slug)][0] {
    _id,
    title,
    slug,
    description,
    price,
    size,
    bedrooms,
    bathrooms,
    features,
    mainImage,
    gallery,
    seller,
    publishedAt
  }`;
  return client.fetch(query, { slug });
}

export async function getVillageInfo() {
  const query = `*[_type == "village"][0] {
    title,
    description,
    fullDescription,
    location,
    foundedYear,
    villageImage,
    attractions
  }`;
  return client.fetch(query);
}
