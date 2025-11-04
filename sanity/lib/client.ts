import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable. " +
      "Please set it in your Vercel environment variables or .env.local file."
  );
}

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
});
