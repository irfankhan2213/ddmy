'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/products'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= rating ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={product.href} className="group flex-shrink-0 w-[280px] flex flex-col">
      {/* Image Container - Sharper corners */}
      <div className="relative w-full h-[280px] rounded-md overflow-hidden mb-4 bg-zinc-100/50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Sale badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-black text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-widest z-10">
            {product.badge}
          </div>
        )}

        {/* Quick view overlay */}
        <div className="product-overlay absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <span className="bg-white text-black text-xs font-bold px-5 py-2.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Quick View</span>
        </div>
      </div>

      {/* Product Details - Centered exactly like Nitrogen */}
      <div className="flex flex-col items-center text-center px-2">
        <h3 className="text-black font-semibold text-sm mb-2 group-hover:text-[#C9A84C] transition-colors truncate w-full">{product.name}</h3>
        
        <div className="flex justify-center mb-2">
          <StarRating rating={product.rating} />
        </div>
        
        <div className="flex items-center justify-center gap-2">
          <span className="text-black font-black text-[13px]">₹{product.price} INR</span>
          {product.salePrice && product.salePrice > product.price && (
            <span className="text-zinc-400 text-xs line-through font-medium">₹{product.salePrice} INR</span>
          )}
        </div>
      </div>
    </Link>
  )
}

interface Props {
  title: string
  products: Product[]
  dark?: boolean
}

export default function ProductsCarousel({ title, products, dark = false }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = 300
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className={`py-20 ${dark ? 'bg-[#0a0a0a] border-t border-zinc-800 shadow-inner' : 'bg-white border-t border-zinc-200'}`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className={`text-3xl font-black tracking-wide uppercase ${dark ? 'text-white' : 'text-black'}`}>
            {title}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${dark ? 'border-zinc-800 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]' : 'border-zinc-300 text-black hover:border-black hover:bg-black hover:text-white'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${dark ? 'border-zinc-800 text-white hover:border-[#C9A84C] hover:text-[#C9A84C]' : 'border-zinc-300 text-black hover:border-black hover:bg-black hover:text-white'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
