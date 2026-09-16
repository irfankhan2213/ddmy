'use client'
import { useState, useMemo, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products, Product } from '@/data/products'
import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex justify-center items-center gap-1 my-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-3.5 h-3.5 fill-black text-black"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ProductGridCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col bg-transparent transition-transform duration-300 min-w-0 w-full">
      <Link
        href={product.href}
        className="block relative w-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-black transition-all duration-300 md:group-hover:shadow-lg min-w-0"
      >
        <Image
          src={optimizeCloudinaryUrl(product.image, { width: 500 })}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 md:group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          unoptimized={true}
        />
      </Link>

      <div className="pt-3 sm:pt-4 flex flex-col items-center text-center min-w-0 w-full px-0.5 sm:px-1">
        <Link href={product.href} className="block group-hover:text-[#E50914] transition-colors w-full min-w-0">
          <h3 className="text-zinc-900 font-bold text-xs sm:text-base md:text-lg tracking-normal leading-snug truncate w-full">
            {product.name}
          </h3>
        </Link>

        <span className="text-[9px] sm:text-[10px] font-display font-bold uppercase tracking-widest text-[#E50914] mt-0.5 truncate w-full">
          {product.category}
        </span>

        <StarRating rating={product.rating} />

        {product.price > 0 ? (
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
            <span className="text-[#E50914] font-bold text-sm sm:text-base">
              ${product.price.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="text-[10px] sm:text-[11px] font-display font-bold uppercase tracking-[0.2em] text-zinc-400 mt-1">
            Price on request
          </span>
        )}

        <Link
          href={product.href}
          className="mt-2.5 sm:mt-3 w-full text-center bg-zinc-900 hover:bg-[#E50914] text-white font-display text-[9px] sm:text-xs tracking-wider sm:tracking-widest uppercase py-2 sm:py-2.5 rounded transition-colors"
        >
          View Formulation
        </Link>
      </div>
    </div>
  )
}

function SearchContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialQuery = searchParams.get('q') || ''

  const [query, setQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [sortBy, setSortBy] = useState<'relevance' | 'price-low' | 'price-high' | 'name'>('relevance')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  // Filtered products
  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = products

    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.series && p.series.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.features && p.features.some((f) => f.toLowerCase().includes(q)))
      )
    }

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Sort
    const sorted = [...list]
    if (sortBy === 'price-low') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      sorted.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    }

    return sorted
  }, [query, selectedCategory, sortBy])

  const categories = ['All', 'Pre-Workout', 'Protein', 'Performance', 'Recovery', 'Vitality']

  return (
    <div className="w-full max-w-[1440px] mx-auto px-3.5 sm:px-6 py-6 sm:py-10 md:py-12 min-w-0">
      {/* Breadcrumbs */}
      <div className="text-zinc-500 text-xs uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-zinc-900 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-zinc-900 font-bold">Search Arsenal</span>
      </div>

      {/* Header & Search Input Box */}
      <div className="max-w-2xl mx-auto text-center mb-6 sm:mb-10 w-full min-w-0">
        <span className="text-[#E50914] font-display text-[11px] sm:text-xs tracking-[0.25em] uppercase font-bold block mb-1.5 sm:mb-2">
          LABORATORY CATALOG SEARCH
        </span>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wider text-zinc-900 mb-4 sm:mb-6 break-words max-w-full px-2">
          {initialQuery ? `RESULTS FOR: "${initialQuery}"` : 'SEARCH THE ARSENAL'}
        </h1>

        <form onSubmit={handleSearch} className="relative flex items-center w-full min-w-0 max-w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by ingredient, formula..."
            className="w-full bg-zinc-100 text-zinc-900 placeholder-zinc-400 pl-9 sm:pl-12 pr-20 sm:pr-28 py-2.5 sm:py-4 rounded-full outline-none border border-zinc-300 focus:border-[#E50914] focus:bg-white transition-all text-xs sm:text-base shadow-sm min-w-0"
          />
          <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth={2}></circle>
              <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth={2}></line>
            </svg>
          </div>
          <button
            type="submit"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-[#E50914] hover:bg-black text-white px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-display text-[10px] sm:text-xs tracking-wider uppercase transition-colors shrink-0"
          >
            Search
          </button>
        </form>
      </div>

      {/* Filters and Controls */}
      <div className="w-full max-w-full pb-4 sm:pb-6 border-b border-zinc-200 mb-6 sm:mb-8 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
        {/* Category Pills with horizontal scroll */}
        <div className="w-full min-w-0 overflow-x-auto scroll-touch -mx-3.5 px-3.5 sm:mx-0 sm:px-0" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-nowrap w-max pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-display tracking-wider uppercase whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-black text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Count */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
          <span className="text-zinc-500 font-medium text-xs whitespace-nowrap">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Product' : 'Products'}
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-zinc-100 border border-zinc-200 text-zinc-800 rounded px-2.5 sm:px-3 py-1.5 outline-none focus:border-[#E50914] text-xs font-medium cursor-pointer"
          >
            <option value="relevance">Sort: Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Alphabetical: A-Z</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8 w-full min-w-0">
          {filteredProducts.map((product) => (
            <ProductGridCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center bg-zinc-50 rounded-2xl border border-dashed border-zinc-200 px-6">
          <div className="w-16 h-16 rounded-full bg-red-50 text-[#E50914] flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-display font-bold uppercase text-zinc-900 mb-2">
            No Formulations Found
          </h2>
          <p className="text-zinc-500 text-sm max-w-md mx-auto mb-6">
            We couldn&apos;t find any products matching &ldquo;{query}&rdquo;. Check spelling or explore our popular categories below.
          </p>

          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8">
            {['Pre-Workout', 'Whey Isolate', 'Citrulline', 'Creatine', 'Fish Oil'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setQuery(suggestion)}
                className="bg-white border border-zinc-200 text-zinc-800 text-xs px-3.5 py-1.5 rounded-full hover:border-[#E50914] hover:text-[#E50914] transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <Link
            href="/collections/shop-all"
            className="inline-block bg-[#E50914] hover:bg-black text-white font-display text-sm tracking-wider uppercase px-8 py-3 rounded transition-colors shadow-md"
          >
            Browse Full Arsenal
          </Link>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between overflow-x-hidden w-full max-w-full">
      <AnnouncementBar />
      <Header />
      <div className="w-full flex-1 min-w-0">
        <Suspense
          fallback={
            <div className="py-24 text-center text-zinc-400 font-display tracking-widest uppercase">
              Loading Catalog Search...
            </div>
          }
        >
          <SearchContent />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}
