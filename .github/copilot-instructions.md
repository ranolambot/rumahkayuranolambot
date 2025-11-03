### Quick orientation

This is a Next.js 16 + React 19 project that uses Sanity as the CMS. The app lives in the Next "app/" directory (server components by default) and Sanity configuration and schemas are in `sanity/`.

Key files to read first:

- `app/layout.tsx` — global layout, fonts, JSON-LD and the header/footer usage.
- `app/page.tsx` — example of server-side data fetching via `lib/sanity-queries.ts`.
- `lib/sanity-queries.ts` — all GROQ queries used by the frontend (getAllHouses, getHouseBySlug, getVillageInfo).
- `sanity/lib/client.ts` — the Sanity client (next-sanity createClient) and how environment variables are read.
- `sanity/sanity.config.ts` — studio config; basePath is `/studio`.
- `next.config.mjs` — image remote patterns and TypeScript build flag (ignoreBuildErrors = true).

Developer workflows (explicit)

- Start dev server (Next app): `npm run dev` → http://localhost:3000
- Build: `npm run build` (uses `next build`)
- Lint: `npm run lint` (runs eslint on the repo)
- There is no dedicated `sanity` package.json in the repo; SETUP.md describes provisioning a Sanity Studio. Check `SETUP.md` for Sanity setup steps. Environment vars used by the app are documented in `sanity/env.ts` and SETUP.md.

Important environment variables (check `.env.local` / SETUP.md):

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Sanity project id (required)
- `NEXT_PUBLIC_SANITY_DATASET` — dataset (default: `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` — Sanity API version (optional)
- `NEXT_PUBLIC_SITE_URL` — canonical site URL used in metadata and JSON-LD

Architecture & data flow (practical summary)

- Pages in `app/` call helper functions in `lib/sanity-queries.ts` (server functions) which use the client from `sanity/lib/client.ts`. Those functions return POJOs consumed directly by server components (see `app/page.tsx`).
- Images are rendered with `next/image`; `next.config.mjs` allows `cdn.sanity.io` as a remote host.
- The Sanity client is configured with `useCdn: true` for cached reads — staging/preview behavior will require toggling this if you need fresh reads.

Conventions & patterns to follow

- File-based routing in `app/`. Default behaviour: server components. Add `"use client"` at top of a file for client components (see `components/header.tsx`).
- Data access: place GROQ queries in `lib/sanity-queries.ts` and call them from server components or server actions. Avoid inline complex queries in page files — reuse the helpers.
- Path alias `@/` is configured in `tsconfig.json`. Use `@/` imports in new files.
- UI: `components/` and `ui/` contain shared presentational primitives (Radix wrappers and design tokens). Follow the existing component props and tailwind classes.

Notes and gotchas discovered in the repo

- `next.config.mjs` sets `typescript.ignoreBuildErrors = true`. CI or production builds might pass despite TypeScript errors. Prefer fixing types locally.
- Some README/SETUP instructions mention running a separate Sanity dev server in a `sanity` folder — this repo has `sanity/` configs but no package.json. Follow SETUP.md to provision or run a Sanity Studio (the Studio may be external or require `npm create sanity` as described).
- Metadata and JSON-LD are set in `app/layout.tsx` — update `NEXT_PUBLIC_SITE_URL` when deploying.

Examples (quick copy-paste snippets referencing repo files)

- How pages fetch data (server component): see `app/page.tsx` — it calls `const houses = await getAllHouses()` from `lib/sanity-queries.ts`.
- Sanity client: `export const client = createClient({ apiVersion, dataset, projectId, useCdn: true })` in `sanity/lib/client.ts`.

If you need to change data shape

- Update the GROQ query in `lib/sanity-queries.ts`, then update consuming components in `app/` and `components/` accordingly. Prefer adding a small migration helper (or doc) if large schema changes are needed.

Where to look for more context

- Project setup and Sanity onboarding: `SETUP.md`
- High-level README: `README.md`
- Sanity schema types: `sanity/schemaTypes/` (house, village, blockContent)

When in doubt

- Read `lib/sanity-queries.ts` + `sanity/lib/client.ts` first to understand the data contract.
- For UI conventions, inspect `components/` and `ui/` — they show how styling and state are handled.

Feedback

- If any section here is missing details you rely on, tell me which workflow (e.g., running Sanity Studio locally, preview/unpublished content, or CI deploys) you'd like expanded and I'll update this file.
