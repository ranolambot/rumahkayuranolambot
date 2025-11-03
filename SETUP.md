# Desa Lembah Indah - Setup Guide

Panduan lengkap untuk mengatur dan menjalankan website Desa Lembah Indah.

## Prerequisites

- Node.js 18.17 atau lebih baru
- npm atau yarn
- Akun Sanity CMS (gratis di https://www.sanity.io)

## Langkah 1: Setup Sanity CMS

### 1.1 Buat Proyek Sanity Baru

\`\`\`bash
npm create sanity@latest
\`\`\`

Jawab pertanyaan setup:
- **Project name**: Desa Lembah Indah
- **Use TypeScript**: Pilih Yes
- **Create dataset**: Pilih Yes
- **Dataset name**: production

### 1.2 Konfigurasi Sanity

1. Buka folder `sanity.config.ts` di proyek Anda
2. Ganti `schemaTypes` dengan skema yang sudah kami sediakan:
   - `sanity/schemaTypes/house.ts`
   - `sanity/schemaTypes/village.ts`
   - `sanity/schemaTypes/blockContent.ts`

### 1.3 Deploy Sanity

\`\`\`bash
npm run deploy
\`\`\`

## Langkah 2: Setup Proyek Next.js

### 2.1 Install Dependencies

\`\`\`bash
npm install
# atau
yarn install
\`\`\`

### 2.2 Konfigurasi Environment Variables

1. Buat file `.env.local` di root direktori
2. Copy dari `.env.example` dan isi dengan nilai Anda:

\`\`\`bash
cp .env.example .env.local
\`\`\`

3. Isi variabel berikut:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`: Dari dashboard Sanity
   - `NEXT_PUBLIC_SANITY_DATASET`: `production` (atau dataset name Anda)
   - `NEXT_PUBLIC_SITE_URL`: URL website Anda (untuk local: `http://localhost:3000`)

### 2.3 Jalankan Development Server

\`\`\`bash
npm run dev
\`\`\`

Website akan tersedia di `http://localhost:3000`

## Langkah 3: Add Content di Sanity CMS

### 3.1 Akses Sanity Studio

1. Jalankan: `npm run dev` di folder Sanity
2. Studio akan terbuka di `http://localhost:3333`
3. atau akses di `https://[project-id].sanity.studio`

### 3.2 Add Village Information

1. Di Sanity Studio, klik "Create"
2. Pilih "Desa (Village)"
3. Isi semua field:
   - **Nama Desa**: Desa Lembah Indah
   - **Deskripsi Singkat**: Deskripsi singkat tentang desa
   - **Deskripsi Lengkap**: Deskripsi detail (bisa dengan formatting)
   - **Lokasi**: Alamat lengkap
   - **Tahun Didirikan**: Tahun
   - **Foto Desa**: Upload gambar
   - **Daya Tarik**: Tambahkan list attractions

### 3.3 Add Rumah (House)

1. Di Sanity Studio, klik "Create"
2. Pilih "Rumah Kayu (Wooden House)"
3. Isi semua field:
   - **Nama Rumah**: Nama/judul rumah
   - **Slug**: Akan auto-generate dari nama (URL-friendly)
   - **Deskripsi**: Detail lengkap tentang rumah
   - **Harga**: Dalam USD (contoh: 250000)
   - **Ukuran**: Dalam m² (contoh: 150)
   - **Kamar Tidur**: Jumlah
   - **Kamar Mandi**: Jumlah
   - **Fitur-fitur**: List fitur (contoh: "Teras depan", "Dapur modern")
   - **Gambar Utama**: Upload gambar utama
   - **Galeri**: Upload multiple gambar
   - **Penjual**: Isi informasi:
     - **Nama Penjual**: Nama seller
     - **Nomor Telepon**: Format: +62 XXX XXXX XXXX
     - **Email**: Email seller (opsional)
     - **WhatsApp**: Format sama seperti telepon (opsional)

## Langkah 4: Deploy ke Vercel

### 4.1 Push ke GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/desa-lembah-indah.git
git push -u origin main
\`\`\`

### 4.2 Deploy di Vercel

1. Kunjungi https://vercel.com
2. Klik "New Project"
3. Import repository GitHub Anda
4. Di **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SITE_URL` (URL Vercel Anda)
5. Klik "Deploy"

## Langkah 5: Konfigurasi Domain

### 5.1 Domain Custom di Vercel

1. Di project Vercel, buka "Settings" > "Domains"
2. Tambahkan domain custom Anda
3. Update DNS records sesuai instruksi Vercel

### 5.2 Update NEXT_PUBLIC_SITE_URL

Update environment variable `NEXT_PUBLIC_SITE_URL` dengan domain baru Anda

## Features

✅ **SEO Optimized**
- Dynamic sitemaps
- Robots.txt
- JSON-LD schema markup
- Meta tags untuk setiap halaman

✅ **Responsive Design**
- Mobile-first approach
- Works on all devices
- Touch-friendly interface

✅ **Property Filters**
- Filter by price range
- Filter by size range
- Sort by newest, price, size

✅ **Image Optimization**
- Next.js Image component
- Automatic resizing
- Lazy loading

✅ **Easy Content Management**
- Sanity CMS for non-technical users
- Rich text editor
- Image upload

✅ **Performance**
- Static generation untuk pages
- Incremental Static Regeneration
- Fast loading times
- Optimized for Vercel free tier

## Troubleshooting

### Images tidak muncul?
- Pastikan Sanity project ID benar di `.env.local`
- Check NEXT_PUBLIC_SANITY_DATASET sesuai dengan dataset name di Sanity

### Halaman blank?
- Check browser console untuk errors
- Pastikan Sanity API accessible
- Verify environment variables

### Filter tidak bekerja?
- Pastikan ada data rumah di Sanity
- Clear browser cache
- Refresh page

## Support

Untuk bantuan lebih lanjut:
- Sanity Docs: https://www.sanity.io/docs
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs

---

**Created with Next.js, Tailwind CSS, and Sanity CMS**
