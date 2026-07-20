'use client'
import { useState, useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products, Product } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'

export default function CollectionPage({ params }: { params: { id: string } }) {
  const collectionId = params.id

  // Determine collection name
  const collectionName = useMemo(() => {
    switch (collectionId) {
      case 'shop-all': return 'Shop All'
      case 'pre-workout': return 'Pre-Workout'
      case 'protein': return 'Protein'
      case 'mass-gainer': return 'Mass Gainer'
      case 'weight-gainer': return 'Weight Gainer'
      case 'amino-acids': return 'Amino Acids'
      case 'fish-oils': return 'Fish Oils'
      case 'vitamins-supplements': return 'Vitamins & Supplements'
      case 'essentials': return 'Essentials'
      default: return 'Products'
    }
  }, [collectionId])

  // Filter products based on collection category
  const collectionProducts = useMemo(() => {
    if (collectionId === 'shop-all') {
      return products
    }
    const catMap: Record<string, string> = {
      'pre-workout': 'Pre-Workout',
      'protein': 'Protein',
      'mass-gainer': 'Mass Gainer',
      'weight-gainer': 'Weight Gainer',
      'amino-acids': 'Amino Acids',
      'fish-oils': 'Fish Oils',
      'vitamins-supplements': 'Vitamins & Supplements',
      'essentials': 'Essentials',
    }
    const targetCat = catMap[collectionId]
    if (!targetCat) return products
    return products.filter(p => p.category === targetCat)
  }, [collectionId])

  // State for filters
  const [inStockOnly, setInStockOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(15000)
  const [sortBy, setSortBy] = useState('best-selling')

  // Available highest price for the range slider
  const maxAvailablePrice = useMemo(() => {
    if (collectionProducts.length === 0) return 15000
    return Math.max(...collectionProducts.map(p => p.price))
  }, [collectionProducts])

  // Processed products
  const processedProducts = useMemo(() => {
    let result = [...collectionProducts]

    // Price Filter
    result = result.filter(p => p.price <= maxPrice)

    // Sort
    if (sortBy === 'price-low-high') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high-low') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'alphabetical-az') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [collectionProducts, maxPrice, sortBy])

  return (
    <main className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />

      <div className="pt-24 max-w-[1400px] mx-auto px-6 pb-20">
        {/* Breadcrumb / Title */}
        <div className="mb-10">
          <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> / <span className="text-white">{collectionName}</span>
          </div>
          <h1 className="text-4xl font-black tracking-wide uppercase">{collectionName}</h1>
          <p className="text-zinc-400 text-sm mt-2">{processedProducts.length} products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/30 sticky top-28">
              <h2 className="text-lg font-black tracking-wide uppercase mb-6 border-b border-zinc-850 pb-3">
                Filter and Sort
              </h2>

              {/* Availability */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-300 mb-3">Availability</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 text-sm text-zinc-400 cursor-pointer hover:text-white">
                    <input
                      type="checkbox"
                      checked={!inStockOnly}
                      onChange={() => setInStockOnly(false)}
                      className="accent-[#C9A84C] rounded border-zinc-700 bg-zinc-850 w-4 h-4"
                    />
                    In stock ({collectionProducts.length})
                  </label>
                  <label className="flex items-center gap-3 text-sm text-zinc-400 cursor-pointer hover:text-white">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={() => setInStockOnly(true)}
                      className="accent-[#C9A84C] rounded border-zinc-700 bg-zinc-850 w-4 h-4"
                    />
                    Out of stock (0)
                  </label>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-300 mb-3">Price</h3>
                <div className="space-y-2">
                  <div className="text-xs text-zinc-500">The highest price is ₹{maxAvailablePrice}</div>
                  <input
                    type="range"
                    min="0"
                    max={maxAvailablePrice}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full accent-[#C9A84C]"
                  />
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>₹ 0</span>
                    <span className="font-bold text-white">₹ {maxPrice}</span>
                  </div>
                </div>
              </div>

              {/* Sort by */}
              <div>
                <h3 className="font-bold text-sm uppercase tracking-wider text-zinc-300 mb-3">Sort by</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white rounded px-3 py-2 text-sm outline-none focus:border-[#C9A84C]"
                >
                  <option value="best-selling">Best selling</option>
                  <option value="price-low-high">Price, low to high</option>
                  <option value="price-high-low">Price, high to low</option>
                  <option value="alphabetical-az">Alphabetically, A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="flex-1">
            {processedProducts.length === 0 ? (
              <div className="text-center py-20 border border-zinc-800 rounded-lg">
                <p className="text-zinc-500">No products found matching filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedProducts.map((product) => (
                  <div key={product.id} className="group border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/10 hover:border-zinc-700 transition-colors">
                    {/* Image Area */}
                    <Link href={`/products/${product.id}`} className="relative block overflow-hidden bg-gradient-to-br from-zinc-900 to-black h-72 p-4">
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#C9A84C] text-black font-extrabold text-[10px] uppercase px-2 py-0.5 rounded-full z-10">
                          {product.badge}
                        </span>
                      )}
                      
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                        />
                      </div>

                      {/* Accent glow on hover */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                        style={{ background: `radial-gradient(circle, ${product.accent} 0%, transparent 70%)` }}
                      />
                    </Link>

                    {/* Product Details */}
                    <div className="p-4">
                      <Link href={`/products/${product.id}`} className="block">
                        <h3 className="font-bold text-white text-base hover:text-[#C9A84C] transition-colors truncate">
                          {product.name}
                        </h3>
                      </Link>

                      {/* Stars */}
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(i => (
                            <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-[11px] text-zinc-500 font-medium">({product.reviewCount})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mt-3">
                        <span className="text-base font-extrabold text-white">₹{product.price} INR</span>
                        {product.salePrice && product.salePrice > product.price && (
                          <span className="text-xs text-zinc-500 line-through">₹{product.salePrice} INR</span>
                        )}
                      </div>

                      {/* Flavor swatches (if available) */}
                      {product.flavors && product.flavors.length > 0 && (
                        <div className="flex gap-1.5 mt-4 overflow-x-auto py-1 scrollbar-none">
                          {product.flavors.map((f, i) => (
                            <span
                              key={i}
                              title={f}
                              className="px-2.5 py-0.5 rounded-full border border-zinc-800 text-[10px] bg-zinc-900 text-zinc-300 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors cursor-pointer select-none"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
