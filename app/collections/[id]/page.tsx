'use client'
import { useState, useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCollectionName, getCollectionProducts } from '@/data/collections'
import Link from 'next/link'
import Image from 'next/image'
import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

export default function CollectionPage({ params }: { params: { id: string } }) {
  const collectionId = params.id

  // Determine collection name
  const collectionName = useMemo(() => getCollectionName(collectionId), [collectionId])

  // Filter products based on collection category
  const collectionProducts = useMemo(() => getCollectionProducts(collectionId), [collectionId])

  // State for filters
  const [inStockOnly, setInStockOnly] = useState(false)
  const [maxPrice, setMaxPrice] = useState(150)
  const [sortBy, setSortBy] = useState('best-selling')

  // Available highest price for the range slider
  const maxAvailablePrice = useMemo(() => {
    if (collectionProducts.length === 0) return 150
    return Math.ceil(Math.max(...collectionProducts.map(p => p.price)))
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
    <main className="min-h-screen bg-white text-zinc-900">
      <AnnouncementBar />
      <Header />

      <div className="pt-[140px] sm:pt-[152px] md:pt-[168px] max-w-[1400px] mx-auto px-6 pb-20">
        {/* Breadcrumb / Title */}
        <div className="mb-10">
          <div className="text-zinc-500 text-xs uppercase tracking-wider mb-2">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link> / <span className="text-zinc-900 font-bold">{collectionName}</span>
          </div>
          <h1 className="text-4xl font-display font-bold tracking-wide uppercase text-zinc-900">{collectionName}</h1>
          <p className="text-zinc-500 text-sm mt-1">{processedProducts.length} formulations available</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar - Filters */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="border border-zinc-200 rounded-xl p-6 bg-zinc-50 sticky top-[162px]">
              <h2 className="text-lg font-display font-bold tracking-wide uppercase mb-6 border-b border-zinc-200 pb-3 text-zinc-900">
                Filter & Sort
              </h2>

              {/* In Stock Filter */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded border-zinc-300 text-[#E50914] focus:ring-0 focus:ring-offset-0 bg-white"
                  />
                  <span className="text-sm font-medium text-zinc-700">In stock only</span>
                </label>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6 border-t border-zinc-200 pt-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-display font-bold uppercase tracking-wider text-zinc-900">Max Price</span>
                  <span className="text-sm font-bold text-[#E50914]">${maxPrice}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxAvailablePrice}
                  step="1"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#E50914] bg-zinc-200"
                />
              </div>

              {/* Sort By Dropdown */}
              <div className="border-t border-zinc-200 pt-6">
                <label className="block text-sm font-display font-bold uppercase tracking-wider mb-2 text-zinc-900">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-white border border-zinc-200 text-zinc-800 rounded px-3 py-2 text-sm outline-none focus:border-[#E50914]"
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
              <div className="text-center py-20 border border-zinc-200 rounded-lg">
                <p className="text-zinc-500">No products found matching filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col items-center">
                    {/* Image Area - Borderless with rounded corners & Sale badge */}
                    <Link href={`/products/${product.id}`} className="relative w-full aspect-square bg-black rounded-2xl overflow-hidden block mb-3.5 group-hover:shadow-md transition-all duration-300">
                      {product.price > 0 && (
                        <span className="absolute top-3.5 right-3.5 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full z-10 tracking-tight">
                          Sale!
                        </span>
                      )}
                      <Image
                        src={optimizeCloudinaryUrl(product.image, { width: 600 })}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        unoptimized={true}
                      />
                    </Link>

                    {/* Centered Product Details */}
                    <div className="text-center w-full px-2">
                      <Link href={`/products/${product.id}`} className="block">
                        <h3 className="font-sans font-bold text-zinc-900 text-base sm:text-lg hover:text-[#E50914] transition-colors truncate">
                          {product.name}
                        </h3>
                      </Link>

                      {/* 5 Solid Black Stars */}
                      <div className="flex items-center justify-center gap-1 my-1.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <svg key={s} className="w-3.5 h-3.5 text-black fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Centered Price in Crimson Red + Dark Strikethrough in USD (hidden until pricing is set) */}
                      {product.price > 0 ? (
                        <div className="flex items-baseline justify-center gap-2 mb-2">
                          <span className="text-base sm:text-lg font-bold text-[#E50914]">${product.price.toFixed(2)}</span>
                          <span className="text-xs sm:text-sm text-zinc-500 line-through">
                            ${(product.salePrice || product.price * 1.25).toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="block text-[11px] font-display font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">
                          Price on request
                        </span>
                      )}

                      {/* Centered Circular Variant Swatches */}
                      <div className="flex items-center justify-center gap-1.5 mt-1 pb-2">
                        {(product.gallery && product.gallery.length > 0 ? product.gallery.map(g => g.url) : [product.image]).slice(0, 4).map((thumb, idx) => (
                          <div
                            key={idx}
                            className={`w-7 h-7 rounded-full border-2 overflow-hidden bg-white flex items-center justify-center transition-all ${
                              idx === 0 ? 'border-zinc-900 ring-1 ring-zinc-900' : 'border-zinc-300 opacity-70 hover:opacity-100 hover:border-zinc-600'
                            }`}
                          >
                            <div className="relative w-5 h-5">
                              <Image src={optimizeCloudinaryUrl(thumb, { width: 80 })} alt="Preview" fill className="object-contain" sizes="20px" unoptimized={true} />
                            </div>
                          </div>
                        ))}
                      </div>
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
