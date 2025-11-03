"use client"

import { useEffect, useState, useMemo } from "react"
import HouseCard from "@/components/house-card"
import { getAllHouses } from "@/lib/sanity-queries"

interface House {
  _id: string
  title: string
  slug: { current: string }
  price: number
  size: number
  bedrooms: number
  bathrooms: number
  mainImage: any
}

export default function HousesClient() {
  const [houses, setHouses] = useState<House[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [priceRange, setPriceRange] = useState([0, 1000000])
  const [sizeRange, setSizeRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState("newest")

  useEffect(() => {
    async function loadHouses() {
      try {
        const data = await getAllHouses()
        setHouses(data)

        // Calculate price and size ranges
        if (data.length > 0) {
          const prices = data.map((h: House) => h.price)
          const sizes = data.map((h: House) => h.size)
          setPriceRange([Math.min(...prices), Math.max(...prices)])
          setSizeRange([Math.min(...sizes), Math.max(...sizes)])
        }
      } catch (error) {
        console.error("Error loading houses:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadHouses()
  }, [])

  const filteredAndSortedHouses = useMemo(() => {
    const filtered = houses.filter(
      (house) =>
        house.price >= priceRange[0] &&
        house.price <= priceRange[1] &&
        house.size >= sizeRange[0] &&
        house.size <= sizeRange[1],
    )

    // Sort
    if (sortBy === "price-low") {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      filtered.sort((a, b) => b.price - a.price)
    } else if (sortBy === "size-small") {
      filtered.sort((a, b) => a.size - b.size)
    } else if (sortBy === "size-large") {
      filtered.sort((a, b) => b.size - a.size)
    } else if (sortBy === "newest") {
      // Default - already sorted by Sanity query
    }

    return filtered
  }, [houses, priceRange, sizeRange, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Koleksi Rumah Kayu</h1>
          <p className="text-foreground/70">Temukan rumah impian Anda di Desa Lembah Indah</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="bg-card rounded-lg border border-border p-6 sticky top-20">
              <h2 className="font-bold text-lg mb-6 text-primary">Filter</h2>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">Urutkan</label>
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

              {/* Price Filter */}
              <div className="mb-6 pb-6 border-b border-border">
                <label className="block text-sm font-semibold text-foreground mb-2">Rentang Harga (USD)</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Min"
                    />
                    <span className="py-1">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 0])}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Max"
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1000000}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">Rentang Ukuran (m²)</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={sizeRange[0]}
                      onChange={(e) => setSizeRange([Number.parseInt(e.target.value) || 0, sizeRange[1]])}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Min"
                    />
                    <span className="py-1">-</span>
                    <input
                      type="number"
                      value={sizeRange[1]}
                      onChange={(e) => setSizeRange([sizeRange[0], Number.parseInt(e.target.value) || 0])}
                      className="w-full px-2 py-1 border border-border rounded text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Max"
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={500}
                    value={sizeRange[1]}
                    onChange={(e) => setSizeRange([sizeRange[0], Number.parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSortBy("newest")
                  setPriceRange([0, 1000000])
                  setSizeRange([0, 500])
                }}
                className="w-full px-4 py-2 rounded border border-primary text-primary hover:bg-primary hover:text-card transition-colors text-sm font-semibold"
              >
                Reset Filter
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {isLoading ? (
              <div className="flex items-center justify-center min-h-96">
                <p className="text-foreground/60">Memuat rumah...</p>
              </div>
            ) : filteredAndSortedHouses.length === 0 ? (
              <div className="flex items-center justify-center min-h-96">
                <p className="text-foreground/60">Tidak ada rumah yang sesuai dengan filter Anda.</p>
              </div>
            ) : (
              <>
                <p className="text-sm text-foreground/70 mb-6">
                  Menampilkan {filteredAndSortedHouses.length} dari {houses.length} rumah
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
  )
}
