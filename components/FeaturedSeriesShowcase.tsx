'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedSeriesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-black text-white py-16 border-t border-zinc-900 overflow-hidden">
      
      {/* ============================================================ */}
      {/* 1. TOP TRUST FEATURES BAR (Matching Screenshot)               */}
      {/* ============================================================ */}
      <div className="w-full bg-black border-y border-zinc-850 py-10 mb-16">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Item 1: Free Shipping */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-3 flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4zM3 4h4l2.5 10.5a1 1 0 001 .8h9a1 1 0 001-.8L22 6H7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V6M13 11V6" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm text-white tracking-tight">Free Shipping</h4>
            <p className="text-zinc-400 text-xs mt-1">All Orders Over ₹999</p>
          </div>

          {/* Item 2: Secure Payment */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-3 flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm text-white tracking-tight">Secure payment</h4>
            <p className="text-zinc-400 text-xs mt-1">100% Encrypted & Safe</p>
          </div>

          {/* Item 3: Order Tracking */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-3 flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm text-white tracking-tight">Order Tracking</h4>
            <p className="text-zinc-400 text-xs mt-1">Every Step of the Way</p>
          </div>

          {/* Item 4: Trusted Service */}
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 mb-3 flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-extrabold text-sm text-white tracking-tight">Trusted Service</h4>
            <p className="text-zinc-400 text-xs mt-1">24/7 Customer Service</p>
          </div>

        </div>
      </div>


      {/* ============================================================ */}
      {/* 2. CAROUSEL SHOWCASE (Matching 4 Cards in Screenshot)          */}
      {/* ============================================================ */}
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          {/* ================= CARD 1: PROBURN ================= */}
          <Link
            href="/collections/weight-loss"
            className="group relative flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] h-[500px] bg-[#0c0c0e] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-zinc-700 block snap-start"
          >
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Title */}
            <div className="relative z-10 pt-6 text-center">
              <h3 className="text-3xl font-black uppercase tracking-wider text-white">
                Proburn
              </h3>
            </div>

            {/* Product Center Area */}
            <div className="relative w-full h-[360px] flex items-center justify-center p-4">
              <Image
                src="/images/product-2.png"
                alt="Proburn"
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />

              {/* Callout 1: Powerful Thermogenic */}
              <div className="absolute top-[35%] left-3 flex items-center gap-2 pointer-events-none z-20">
                <div className="w-8 h-8 rounded-full border border-zinc-700 bg-black/90 flex items-center justify-center text-amber-500 shadow-md">
                  🔥
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-white uppercase leading-tight max-w-[90px]">
                    POWERFUL THERMOGENIC
                  </span>
                  <div className="w-12 h-[1px] bg-white/40 mt-0.5" />
                </div>
              </div>

              {/* Callout 2: Increased Energy */}
              <div className="absolute bottom-[32%] left-3 flex items-center gap-2 pointer-events-none z-20">
                <div className="w-8 h-8 rounded-full border border-zinc-700 bg-black/90 flex items-center justify-center text-yellow-400 shadow-md">
                  ⚡
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-white uppercase leading-tight max-w-[90px]">
                    INCREASED ENERGY
                  </span>
                  <div className="w-12 h-[1px] bg-white/40 mt-0.5" />
                </div>
              </div>

              {/* Callout 3: Appetite Control */}
              <div className="absolute bottom-[10%] left-12 flex items-center gap-2 pointer-events-none z-20">
                <div className="w-8 h-8 rounded-full border border-zinc-700 bg-black/90 flex items-center justify-center text-amber-400 shadow-md">
                  🍴
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-white uppercase leading-tight max-w-[90px]">
                    APPETITE CONTROL
                  </span>
                  <div className="w-12 h-[1px] bg-white/40 mt-0.5" />
                </div>
              </div>
            </div>

            {/* Bottom-left Gold Cart Action Button */}
            <div className="absolute bottom-5 left-5 z-30">
              <div className="w-11 h-11 rounded-full bg-[#E5C158] text-black flex items-center justify-center font-black shadow-[0_4px_20px_rgba(229,193,88,0.5)] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          </Link>


          {/* ================= CARD 2: GREENS ================= */}
          <Link
            href="/collections/vitamins-supplements"
            className="group relative flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] h-[500px] bg-[#0c0c0e] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-zinc-700 block snap-start"
          >
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Title */}
            <div className="relative z-10 pt-6 text-center">
              <h3 className="text-3xl font-black uppercase tracking-wider text-white">
                Greens
              </h3>
            </div>

            {/* Product Center Area */}
            <div className="relative w-full h-[360px] flex items-center justify-center p-4">
              <Image
                src="/images/product-1.png"
                alt="Greens"
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />

              {/* Bronze Badge 1: Probiotics Blend */}
              <div className="absolute top-[30%] left-3 pointer-events-none z-20">
                <span className="bg-[#5c3e21] border border-[#8a5d32] text-amber-200 text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block">
                  PROBIOTICS BLEND
                </span>
              </div>

              {/* Bronze Badge 2: Nutritious Greens */}
              <div className="absolute bottom-[10%] left-3 pointer-events-none z-20">
                <span className="bg-[#5c3e21] border border-[#8a5d32] text-amber-200 text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block">
                  NUTRITIOUS GREENS
                </span>
              </div>

              {/* Bronze Badge 3: Phytonutrient Rich Berries */}
              <div className="absolute bottom-[12%] right-3 pointer-events-none z-20">
                <span className="bg-[#5c3e21] border border-[#8a5d32] text-amber-200 text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block">
                  PHYTONUTRIENT RICH BERRIES
                </span>
              </div>
            </div>

            {/* Bottom-left Gold Cart Action Button */}
            <div className="absolute bottom-5 left-5 z-30">
              <div className="w-11 h-11 rounded-full bg-[#E5C158] text-black flex items-center justify-center font-black shadow-[0_4px_20px_rgba(229,193,88,0.5)] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          </Link>


          {/* ================= CARD 3: CREATINE ================= */}
          <Link
            href="/collections/pre-workout"
            className="group relative flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] h-[500px] bg-[#0c0c0e] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-zinc-700 block snap-start"
          >
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Title */}
            <div className="relative z-10 pt-6 text-center">
              <h3 className="text-3xl font-black uppercase tracking-wider text-white">
                Creatine
              </h3>
            </div>

            {/* Product Center Area */}
            <div className="relative w-full h-[360px] flex items-center justify-center p-4">
              <Image
                src="/images/product-3.png"
                alt="Creatine"
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />

              {/* Callout 1: Aids in Recovery */}
              <div className="absolute top-[45%] right-3 flex items-center gap-2 pointer-events-none z-20 flex-row-reverse text-right">
                <div className="w-8 h-8 rounded-full border border-zinc-700 bg-black/90 flex items-center justify-center text-[#C9A84C] shadow-md">
                  ✚
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-white uppercase leading-tight max-w-[80px]">
                    AIDS IN RECOVERY
                  </span>
                </div>
              </div>

              {/* Callout 2: Drastic Output */}
              <div className="absolute bottom-[28%] left-3 flex items-center gap-2 pointer-events-none z-20">
                <div className="w-8 h-8 rounded-full border border-zinc-700 bg-black/90 flex items-center justify-center text-amber-400 shadow-md">
                  ⚡
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-white uppercase leading-tight max-w-[80px]">
                    DRASTIC OUTPUT
                  </span>
                </div>
              </div>

              {/* Callout 3: Improve Muscle Mass & Endurance */}
              <div className="absolute bottom-[8%] right-4 flex items-center gap-2 pointer-events-none z-20 flex-row-reverse text-right">
                <div className="w-8 h-8 rounded-full border border-zinc-700 bg-black/90 flex items-center justify-center text-amber-400 shadow-md">
                  ⏱
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-white uppercase leading-tight max-w-[120px]">
                    IMPROVE MUSCLE MASS & ENDURANCE
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom-left Gold Cart Action Button */}
            <div className="absolute bottom-5 left-5 z-30">
              <div className="w-11 h-11 rounded-full bg-[#E5C158] text-black flex items-center justify-center font-black shadow-[0_4px_20px_rgba(229,193,88,0.5)] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          </Link>


          {/* ================= CARD 4: PROTEIN ================= */}
          <Link
            href="/collections/protein"
            className="group relative flex-shrink-0 w-[300px] sm:w-[320px] md:w-[340px] h-[500px] bg-[#0c0c0e] border border-zinc-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-zinc-700 block snap-start"
          >
            {/* Background geometric pattern */}
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            {/* Title */}
            <div className="relative z-10 pt-6 text-center">
              <h3 className="text-3xl font-black uppercase tracking-wider text-white">
                Protein
              </h3>
            </div>

            {/* Product Center Area */}
            <div className="relative w-full h-[360px] flex items-center justify-center p-4">
              <Image
                src="/images/new-product.png"
                alt="Protein Isolate"
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />

              {/* Red Stacked Badges on Left */}
              <div className="absolute top-[22%] left-3 space-y-2 pointer-events-none z-20">
                <span className="bg-[#d92626] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block max-w-[130px]">
                  QUICK & EASY DIGESTION
                </span>
                <span className="bg-[#d92626] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block max-w-[130px]">
                  WEIGHT MANAGEMENT
                </span>
                <span className="bg-[#d92626] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block max-w-[130px]">
                  IMPROVED RECOVERY
                </span>
                <span className="bg-[#d92626] text-white text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-md shadow-md block max-w-[130px]">
                  IMPROVED MUSCLE MASS
                </span>
              </div>
            </div>

            {/* Bottom-left Gold Cart Action Button */}
            <div className="absolute bottom-5 left-5 z-30">
              <div className="w-11 h-11 rounded-full bg-[#E5C158] text-black flex items-center justify-center font-black shadow-[0_4px_20px_rgba(229,193,88,0.5)] group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            </div>
          </Link>

        </div>

        {/* Carousel Bottom Pagination & Controls */}
        <div className="flex items-center justify-between mt-8 px-2">
          {/* Progress Lines */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-0.5 bg-white" />
            <div className="w-8 h-0.5 bg-zinc-800" />
            <div className="w-8 h-0.5 bg-zinc-800" />
            <div className="w-8 h-0.5 bg-zinc-800" />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll('left')}
              className="text-white hover:text-[#C9A84C] transition-colors p-2"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="text-white hover:text-[#C9A84C] transition-colors p-2"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
