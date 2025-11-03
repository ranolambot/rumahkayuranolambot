import { defineField, defineType } from "sanity"

export const houseType = defineType({
  name: "house",
  title: "Rumah Kayu (Wooden House)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Rumah (House Name)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL-friendly name)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi (Description)",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Harga (Price in USD)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "size",
      title: "Ukuran (Size in m²)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "bedrooms",
      title: "Kamar Tidur (Bedrooms)",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "bathrooms",
      title: "Kamar Mandi (Bathrooms)",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "features",
      title: "Fitur-fitur (Features)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "mainImage",
      title: "Gambar Utama (Main Image)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeri (Image Gallery)",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "seller",
      title: "Penjual (Seller Information)",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Nama Penjual (Seller Name)",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "phone",
          title: "Nomor Telepon (Phone Number)",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "email",
          title: "Email",
          type: "string",
        }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp Number",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publikasi (Published Date)",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
})
