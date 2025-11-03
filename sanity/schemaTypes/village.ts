import { defineField, defineType } from "sanity"

export const villageType = defineType({
  name: "village",
  title: "Desa (Village)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nama Desa (Village Name)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Singkat (Short Description)",
      type: "text",
    }),
    defineField({
      name: "fullDescription",
      title: "Deskripsi Lengkap (Full Description)",
      type: "blockContent",
    }),
    defineField({
      name: "location",
      title: "Lokasi (Location)",
      type: "string",
    }),
    defineField({
      name: "foundedYear",
      title: "Tahun Didirikan (Founded Year)",
      type: "number",
    }),
    defineField({
      name: "villageImage",
      title: "Foto Desa (Village Image)",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "attractions",
      title: "Daya Tarik (Attractions)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})
