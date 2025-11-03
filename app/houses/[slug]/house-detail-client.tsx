"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";

interface Seller {
  name: string;
  phone: string;
  email?: string;
  whatsapp?: string;
}

interface House {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  features?: string[];
  mainImage: any;
  gallery?: any[];
  seller: Seller;
  publishedAt: string;
}

interface Props {
  house: House;
}

export default function HouseDetailClient({ house }: Props) {
  const [selectedImage, setSelectedImage] = useState(house.mainImage);
  const allImages = [house.mainImage, ...(house.gallery || [])];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/houses"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Kembali ke Daftar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            {/* Main Image */}
            <div className="relative w-full h-96 mb-4 rounded-lg overflow-hidden bg-border">
              {selectedImage && (
                <Image
                  src={
                    urlFor(selectedImage).width(800).height(600).url() ||
                    "/placeholder.svg"
                  }
                  alt={house.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            {/* Thumbnail Gallery */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative h-20 rounded overflow-hidden border-2 transition-all ${
                      selectedImage === image
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    <Image
                      src={
                        urlFor(image).width(100).height(100).url() ||
                        "/placeholder.svg"
                      }
                      alt={`${house.title} - ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Description */}
            <div className="mt-8 bg-card rounded-lg border border-border p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Deskripsi
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                {house.description}
              </p>
            </div>

            {/* Features */}
            {house.features && house.features.length > 0 && (
              <div className="mt-8 bg-card rounded-lg border border-border p-6">
                <h2 className="text-2xl font-bold text-primary mb-4">
                  Fitur-Fitur
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {house.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-secondary mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Specifications Card */}
            <div className="bg-card rounded-lg border border-border p-6 mb-6 sticky top-20">
              <div className="mb-6">
                <p className="text-foreground/70 text-sm mb-1">Harga</p>
                <p className="text-4xl font-bold text-accent">
                  Rp{(house.price / 1000000).toFixed(2)}M
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-border">
                <div>
                  <p className="text-foreground/70 text-xs font-semibold mb-1">
                    UKURAN
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {house.size}m²
                  </p>
                </div>
                <div>
                  <p className="text-foreground/70 text-xs font-semibold mb-1">
                    KAMAR TIDUR
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {house.bedrooms}
                  </p>
                </div>
                <div>
                  <p className="text-foreground/70 text-xs font-semibold mb-1">
                    KAMAR MANDI
                  </p>
                  <p className="text-lg font-bold text-primary">
                    {house.bathrooms}
                  </p>
                </div>
              </div>

              {/* Seller Info */}
              <div className="mb-6 pb-6 border-b border-border">
                <h3 className="font-bold text-lg text-primary mb-4">Penjual</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-foreground/70 text-xs font-semibold mb-1">
                      NAMA
                    </p>
                    <p className="text-foreground font-semibold">
                      {house.seller.name}
                    </p>
                  </div>
                  {house.seller.whatsapp && (
                    <div>
                      <p className="text-foreground/70 text-xs font-semibold mb-1">
                        WHATSAPP
                      </p>
                      <a
                        href={`https://wa.me/${house.seller.whatsapp.replace(
                          /\D/g,
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                      >
                        {house.seller.whatsapp}
                      </a>
                    </div>
                  )}
                  {house.seller.email && (
                    <div>
                      <p className="text-foreground/70 text-xs font-semibold mb-1">
                        EMAIL
                      </p>
                      <a
                        href={`mailto:${house.seller.email}`}
                        className="text-primary hover:text-secondary transition-colors break-all"
                      >
                        {house.seller.email}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                {house.seller.whatsapp && (
                  <a
                    href={`https://wa.me/${house.seller.whatsapp.replace(
                      /\D/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-secondary text-foreground py-3 rounded-lg font-semibold hover:bg-accent transition-colors text-center block"
                  >
                    Chat WhatsApp
                  </a>
                )}
                {house.seller.email && (
                  <a
                    href={`mailto:${house.seller.email}?subject=Inquiry about ${house.title}`}
                    className="w-full bg-primary text-card py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center block"
                  >
                    Hubungi Email
                  </a>
                )}
                {!house.seller.whatsapp && house.seller.phone && (
                  <a
                    href={`tel:${house.seller.phone}`}
                    className="w-full bg-primary text-card py-3 rounded-lg font-semibold hover:bg-secondary transition-colors text-center block"
                  >
                    Hubungi Telepon
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
