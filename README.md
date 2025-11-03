# Desa Lembah Indah - Wooden House Showcase Website

Selamat datang ke Desa Lembah Indah - Website modern untuk showcase rumah kayu tradisional dengan content management system yang user-friendly.

## Fitur Utama

🏠 **Property Showcase**
- Gallery gambar untuk setiap rumah
- Detail spesifikasi lengkap (harga, ukuran, kamar tidur, kamar mandi)
- Informasi penjual dengan kontak WhatsApp/Email

🔍 **Smart Filters**
- Filter berdasarkan rentang harga
- Filter berdasarkan ukuran (m²)
- Sorting: Terbaru, Harga, Ukuran

📱 **Responsive Design**
- Mobile-first design
- Bekerja sempurna di semua perangkat
- Touch-friendly interface

⚡ **Performance**
- Static generation untuk kecepatan maksimal
- Image optimization otomatis
- SEO-friendly dengan sitemap dan schema markup

🎨 **Beautiful UI**
- Warm, earthy color palette
- Smooth animations dan transitions
- Professional layout

📝 **Easy Content Management**
- Sanity CMS backend
- Non-technical users bisa edit content
- Rich text editor dan image upload

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4
- **CMS**: Sanity CMS
- **Deployment**: Vercel + Sanity (free tiers)
- **Images**: Next.js Image component
- **Database**: Sanity data lake

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local dengan Sanity project ID Anda

# Run development server
npm run dev
\`\`\`

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

Lihat [SETUP.md](./SETUP.md) untuk panduan setup lengkap.

## Project Structure

\`\`\`
desa-lembah-indah/
├── app/
│   ├── page.tsx              # Home page
│   ├── about/page.tsx        # About page
│   ├── houses/
│   │   ├── page.tsx          # Listing page
│   │   └── [slug]/page.tsx   # Detail page
│   ├── layout.tsx
│   ├── globals.css
│   └── ...
├── components/
│   ├── header.tsx
│   ├── footer.tsx
│   ├── house-card.tsx
│   └── ...
├── sanity/
│   ├── schemaTypes/          # Sanity schemas
│   ├── lib/client.ts
│   └── env.ts
├── lib/
│   ├── sanity-queries.ts     # Sanity queries
│   └── sanity-image.ts       # Image builder
├── public/
│   ├── sitemap.ts
│   └── robots.txt
└── ...
\`\`\`

## Content Management

Akses Sanity Studio untuk mengelola content:

\`\`\`bash
# Di folder Sanity
npm run dev

# Studio akan terbuka di http://localhost:3333
\`\`\`

### Add New House:
1. Klik "Create"
2. Pilih "Rumah Kayu"
3. Isi semua field (nama, harga, gambar, dll)
4. Publish

### Edit Village Info:
1. Klik "Village"
2. Edit deskripsi, attractions, dll
3. Publish

Perubahan akan langsung ter-reflect di website!

## Deployment

### Deploy ke Vercel

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy!

Lihat [SETUP.md](./SETUP.md) untuk instruksi detail.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

Optimized untuk Vercel + Sanity free tiers:
- ⚡ Static generation untuk pages
- 📦 Automatic code splitting
- 🖼️ Image optimization
- 🚀 CDN-powered delivery

## License

MIT - Feel free to use ini sebagai template untuk proyek Anda!

## Support

Untuk bantuan:
- 📧 Email: info@desalembahindah.com
- 📱 WhatsApp: +62 812-3456-7890

---

**Dibuat dengan ❤️ menggunakan Next.js, Tailwind CSS, dan Sanity CMS**
