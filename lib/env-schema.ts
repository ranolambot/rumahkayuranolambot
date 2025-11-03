// Environment variables validation
export const requiredEnvVars = {
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "https://desalembahindah.com",
}

export function validateEnv() {
  const missing = []
  for (const [key, value] of Object.entries(requiredEnvVars)) {
    if (!value && key.includes("PROJECT_ID")) {
      missing.push(key)
    }
  }
  if (missing.length > 0) {
    console.warn(`Missing environment variables: ${missing.join(", ")}. Add them to your .env.local file.`)
  }
}
