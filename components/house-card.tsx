"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";

interface HouseCardProps {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  mainImage: any;
}

export default function HouseCard({
  _id,
  title,
  slug,
  price,
  size,
  bedrooms,
  bathrooms,
  mainImage,
}: HouseCardProps) {
  const slugPath = typeof slug === "string" ? slug : slug?.current;

  // If there's no slug, render a non-clickable card to avoid navigating to a 404.
  const href = slugPath ? `/houses/${slugPath}` : undefined;

  return (
    <Link href={href || "/houses"}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fadeInUp">
        {/* Image Container */}
        <div className="relative w-full h-48 overflow-hidden bg-border">
          {mainImage && (
            <Image
              src={
                urlFor(mainImage).width(400).height(300).url() ||
                "/placeholder.svg"
              }
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )}
          <div className="absolute top-3 right-3 bg-accent text-card px-3 py-1 rounded text-sm font-semibold animate-slideInRight">
            Rp {(price / 1000).toFixed(0)}K
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-4 text-sm text-foreground/70">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" />
                </svg>
                {size}m²
              </span>
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.5 1.5h-1v4h1v-4zm3 4h-1v4h1v-4zm-6 0h-1v4h1v-4zm6 5h-8v6.5a2 2 0 002 2h4a2 2 0 002-2v-6.5z" />
                </svg>
                {bedrooms} KT
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-foreground/70">
              <span className="flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4h12v2H4V4zm0 4h12v6H4V8zm0 8h12v2H4v-2z" />
                </svg>
                {bathrooms} KM
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
