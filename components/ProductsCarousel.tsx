'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/products'

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex justify-center items-center gap-1 my-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-4 h-4 fill-black text-black"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const originalPrice = product.originalPrice || product.salePrice || Math.round(product.price * 1.2)

  return (
    <div className="group flex-shrink-0 w-[280px] md:w-[310px] flex flex-col bg-transparent transition-transform duration-300">
      {/* Media Container: Clean rounded-2xl with NO outer card border */}
      <Link 
        href={product.href} 
        className="block relative w-full aspect-square rounded-2xl overflow-hidden bg-black transition-all duration-300 group-hover:shadow-md"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 280px, 310px"
        />

        {/* Black "Sale!" pill in top right corner (matching Nitrogen reference) */}
        <span className="absolute top-3 right-3 bg-black text-white text-[12px] font-bold px-3.5 py-1 rounded-full shadow-sm z-10 tracking-wide">
          Sale!
        </span>
      </Link>

      {/* Details: strictly centered (matching Nitrogen reference) */}
      <div className="pt-4 flex flex-col items-center text-center">
        {/* Product Title */}
        <Link href={product.href} className="block group-hover:text-[#E50914] transition-colors">
          <h3 className="text-zinc-900 font-bold text-base md:text-lg tracking-normal leading-snug line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* 5 Solid Black Stars */}
        <StarRating rating={product.rating} />

        {/* Pricing: Red Sale Price + Strikethrough Original Price in USD */}
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="text-[#E50914] font-bold text-base md:text-lg">
            ${product.price.toFixed(2)}
          </span>
          {originalPrice > product.price && (
            <span className="text-zinc-500 line-through text-sm font-medium">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Miniature view thumbnails below */}
        <div className="flex items-center justify-center gap-2 mt-3">
          {(product.gallery && product.gallery.length > 0 ? product.gallery : [{ url: product.image }]).slice(0, 4).map((thumb, idx) => (
            <div
              key={idx}
              className={`w-7 h-7 rounded-full border overflow-hidden p-0.5 relative transition-all ${
                idx === 0 ? 'border-zinc-800 ring-1 ring-zinc-800' : 'border-zinc-300 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
                <Image
                  src={thumb.url || product.image}
                  alt="thumbnail preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface Props {
  title?: string
  products: Product[]
  dark?: boolean
}

export default function ProductsCarousel({ title, products }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 320
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="py-16 bg-white relative border-t border-zinc-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        {/* Header with Title and Nav Arrows */}
        <div className="flex items-end justify-between mb-8 pb-4 border-b border-zinc-200">
          <div>
            <span className="text-[#E50914] font-display text-xs tracking-[0.25em] uppercase font-bold block mb-1">
              THE ARSENAL
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider uppercase text-zinc-900">
              {title || 'FEATURED ARSENAL'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous products"
              className="w-10 h-10 rounded-sm bg-white border border-zinc-300 text-zinc-800 hover:border-[#E50914] hover:text-[#E50914] hover:bg-zinc-50 transition-all duration-200 flex items-center justify-center shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next products"
              className="w-10 h-10 rounded-sm bg-white border border-zinc-300 text-zinc-800 hover:border-[#E50914] hover:text-[#E50914] hover:bg-zinc-50 transition-all duration-200 flex items-center justify-center shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        {products.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-zinc-200 rounded-2xl bg-zinc-50/50">
            <p className="text-zinc-400 font-display tracking-widest text-sm uppercase">
              No products currently listed. Add new products in data/products.ts.
            </p>
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 pt-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
