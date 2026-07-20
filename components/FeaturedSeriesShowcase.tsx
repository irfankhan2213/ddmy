'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const seriesCards = [
  {
    id: 'proburn',
    title: 'Proburn',
    category: 'Weight Loss',
    image: '/images/product-2.png',
    href: '/collections/weight-loss',
    highlights: [
      { text: 'POWERFUL THERMOGENIC', position: 'top-1/3 left-4' },
      { text: 'INCREASED ENERGY', position: 'bottom-1/3 left-4' },
      { text: 'APPETITE CONTROL', position: 'bottom-12 left-10' },
    ]
  },
  {
    id: 'greens',
    title: 'Greens',
    category: 'Vitamins & Supplements',
    image: '/images/product-1.png',
    href: '/collections/vitamins-supplements',
    highlights: [
      { text: 'PROBIOTICS BLEND', position: 'top-1/3 left-4' },
      { text: 'NUTRITIOUS GREENS', position: 'bottom-12 left-4' },
      { text: 'PHYTONUTRIENT RICH BERRIES', position: 'bottom-12 right-4' },
    ]
  },
  {
    id: 'creatine',
    title: 'Creatine',
    category: 'Pre-Workout',
    image: '/images/product-3.png',
    href: '/collections/pre-workout',
    highlights: [
      { text: 'DRASTIC OUTPUT', position: 'bottom-1/3 left-4' },
      { text: 'AIDS IN RECOVERY', position: 'top-1/2 right-4' },
      { text: 'IMPROVE MUSCLE MASS & ENDURANCE', position: 'bottom-8 right-6' },
    ]
  },
  {
    id: 'protein',
    title: 'Protein',
    category: 'Protein',
    image: '/images/new-product.png',
    href: '/collections/protein',
    highlights: [
      { text: 'QUICK & EASY DIGESTION', position: 'top-1/4 left-4' },
      { text: 'WEIGHT MANAGEMENT', position: 'top-1/2 left-4' },
      { text: 'IMPROVED RECOVERY', position: 'bottom-1/3 left-4' },
      { text: 'IMPROVED MUSCLE MASS', position: 'bottom-12 left-4' },
    ]
  }
]

export default function FeaturedSeriesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-black text-white py-16 border-t border-zinc-900 overflow-hidden">
      
      {/* 1. TRUST FEATURES STRIP */}
      <div className="w-full bg-zinc-950 border-y border-zinc-850 py-8 mb-16">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-white group-hover:text-[#C9A84C] transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Free Shipping</h4>
            <p className="text-zinc-400 text-xs mt-1">All Orders Over ₹999</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-white group-hover:text-[#C9A84C] transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Secure payment</h4>
            <p className="text-zinc-400 text-xs mt-1">100% Encrypted & Safe</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-white group-hover:text-[#C9A84C] transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Order Tracking</h4>
            <p className="text-zinc-400 text-xs mt-1">Every Step of the Way</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-white group-hover:text-[#C9A84C] transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-white">Trusted Service</h4>
            <p className="text-zinc-400 text-xs mt-1">24/7 Customer Support</p>
          </div>

        </div>
      </div>

      {/* 2. CAROUSEL SHOWCASE */}
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {seriesCards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] h-[460px] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-zinc-700 snap-start block"
            >
              {/* Background Geometric / Tech Pattern */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Title Header */}
              <div className="relative z-10 pt-6 px-6 text-center">
                <h3 className="text-2xl font-black uppercase tracking-widest text-white group-hover:text-[#C9A84C] transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Center Image */}
              <div className="relative z-10 w-full h-[300px] flex items-center justify-center p-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                />

                {/* Feature Pills floating around the product */}
                {card.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className={`absolute ${item.position} bg-black/80 backdrop-blur-md border border-zinc-700/80 text-[9px] font-black text-white uppercase px-2.5 py-1 rounded-full shadow-lg pointer-events-none tracking-wider whitespace-nowrap`}
                  >
                    {item.text}
                  </span>
                ))}
              </div>

              {/* Floating Gold Cart Action Button at bottom-left */}
              <div className="absolute bottom-5 left-5 z-20">
                <div className="w-11 h-11 rounded-full bg-[#C9A84C] text-black flex items-center justify-center font-black shadow-[0_4px_20px_rgba(201,168,76,0.5)] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Bottom Controls */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-1.5 bg-[#C9A84C] rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
            <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleScroll('left')}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-[#C9A84C] hover:text-[#C9A84C] flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
