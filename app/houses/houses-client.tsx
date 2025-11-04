"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import HouseCard from "@/components/house-card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface House {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  size: number;
  bedrooms: number;
  bathrooms: number;
  mainImage: any;
}

export default function HousesClient() {
  const {
    data: houses = [],
    isLoading,
    error,
  } = useSWR("/api/houses", fetcher);

  if (typeof window !== "undefined") {
    console.log("[v0] Houses data:", houses);
    console.log("[v0] Loading:", isLoading);
    console.log("[v0] Error:", error);
  }

  const [sortBy, setSortBy] = useState("newest");

  const filteredAndSortedHouses = useMemo(() => {
    const filtered = houses;

    // Sort
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === "size-small") {
      filtered.sort((a, b) => a.size - b.size);
    } else if (sortBy === "size-large") {
      filtered.sort((a, b) => b.size - a.size);
    } else if (sortBy === "newest") {
      // Default - already sorted by Sanity query
    }

    return filtered;
  }, [houses, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Koleksi Rumah Kayu
          </h1>
          <p className="text-foreground/70">
            Temukan rumah impian Anda di Desa Lembah Indah
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-20">
              <h2 className="font-bold text-lg mb-6 text-primary">Filter</h2>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Urutkan
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="newest">Terbaru</option>
                  <option value="price-low">Harga: Termurah</option>
                  <option value="price-high">Harga: Termahal</option>
                  <option value="size-small">Ukuran: Terkecil</option>
                  <option value="size-large">Ukuran: Terbesar</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-96">
                <p className="text-foreground/60">Memuat rumah...</p>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center min-h-96">
                <p className="text-foreground/60">
                  Gagal memuat rumah. Silakan coba lagi.
                </p>
              </div>
            ) : filteredAndSortedHouses.length === 0 ? (
              <div className="flex items-center justify-center min-h-96">
                <p className="text-foreground/60">
                  Tidak ada rumah yang sesuai dengan filter Anda.
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-foreground/70 mb-6">
                  Menampilkan {filteredAndSortedHouses.length} dari{" "}
                  {houses.length} rumah
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredAndSortedHouses.map((house) => (
                    <HouseCard key={house._id} {...house} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
