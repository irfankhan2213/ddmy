'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CARDS = [
  {
    id: 1,
    title: 'Greens',
    href: '/collections/vitamins-supplements',
    image: '/images/product-1.png',
    badges: [
      { label: 'PROBIOTICS BLEND', position: 'left-3 top-[45%]', color: 'bg-[#b5813e] border border-[#d4a256]' },
      { label: 'NUTRITIOUS GREENS', position: 'left-3 bottom-[12%]', color: 'bg-[#b5813e] border border-[#d4a256]' },
      { label: 'PHYTONUTRIENT RICH BERRIES', position: 'right-3 bottom-[8%]', color: 'bg-[#b5813e] border border-[#d4a256]' },
    ],
  },
  {
    id: 2,
    title: 'Creatine',
    href: '/collections/pre-workout',
    image: '/images/product-3.png',
    badges: [
      { label: 'AIDS IN RECOVERY', position: 'right-3 top-[40%]', color: 'bg-transparent border border-zinc-400 text-zinc-200' },
      { label: 'DRASTIC OUTPUT', position: 'left-3 bottom-[25%]', color: 'bg-transparent border border-zinc-400 text-zinc-200' },
      { label: 'IMPROVE MUSCLE MASS & ENDURANCE', position: 'right-3 bottom-[10%]', color: 'bg-transparent border border-zinc-400 text-zinc-200' },
    ],
  },
  {
    id: 3,
    title: 'Proteins',
    href: '/collections/protein',
    image: '/images/new-product.png',
    badges: [
      { label: 'QUICK & EASY DIGESTION', position: 'left-3 top-[35%]', color: 'bg-[#cc2929]' },
      { label: 'WEIGHT MANAGEMENT', position: 'left-3 top-[46%]', color: 'bg-[#cc2929]' },
      { label: 'IMPROVED RECOVERY', position: 'left-3 top-[57%]', color: 'bg-[#cc2929]' },
      { label: 'IMPROVED MUSCLE MASS', position: 'left-3 top-[68%]', color: 'bg-[#cc2929]' },
    ],
  },
  {
    id: 4,
    title: 'Proburn',
    href: '/collections/weight-loss',
    image: '/images/product-2.png',
    badges: [
      { label: 'POWERFUL THERMOGENIC', position: 'right-3 top-[38%]', color: 'bg-transparent border border-zinc-400 text-zinc-200', icon: '🔥' },
      { label: 'INCREASED ENERGY', position: 'right-3 top-[52%]', color: 'bg-transparent border border-zinc-400 text-zinc-200', icon: '⚡' },
      { label: 'APPETITE CONTROL', position: 'right-3 top-[66%]', color: 'bg-transparent border border-zinc-400 text-zinc-200', icon: '🍴' },
    ],
  },
]

export default function FeaturedSeriesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-scroll logic
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const speed = 0.8 // px per frame

    const animate = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed
        // Loop back to start when reaching end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 2) {
          el.scrollLeft = 0
        }
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [isPaused])

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -360 : 360,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="bg-[#F6F5F2] text-black select-none overflow-hidden">

      {/* ============================================================ */}
      {/* 1. BLACK TRUST STRIP                                          */}
      {/* ============================================================ */}
      <div className="w-full bg-black py-8">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
            <div>
              <p className="font-bold text-sm text-white">Free Shipping</p>
              <p className="text-zinc-400 text-xs">All Orders Over $99</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="font-bold text-sm text-white">Secure payment</p>
              <p className="text-zinc-400 text-xs">Shopify™ Secured</p>
            </div>
          </div>

          {/* Order Tracking */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
              <p className="font-bold text-sm text-white">Order Tracking</p>
              <p className="text-zinc-400 text-xs">Every Step of the Way</p>
            </div>
          </div>

          {/* Trusted Service */}
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-bold text-sm text-white">Trusted Service</p>
              <p className="text-zinc-400 text-xs">24/7 Customer Service</p>
            </div>
          </div>

        </div>
      </div>


      {/* ============================================================ */}
      {/* 2. AUTO-SCROLLING CARDS                                       */}
      {/* ============================================================ */}
      <div className="relative py-10">

        {/* Left arrow */}
        <button
          onClick={() => handleManualScroll('left')}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => handleManualScroll('right')}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-0 overflow-x-auto scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate cards for seamless loop */}
          {[...CARDS, ...CARDS].map((card, idx) => (
            <Link
              key={`${card.id}-${idx}`}
              href={card.href}
              className="group relative flex-shrink-0 w-[calc(25vw)] min-w-[260px] max-w-[340px] h-[420px] overflow-hidden block"
              style={{ cursor: 'pointer' }}
            >
              {/* Full-bleed product image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30 pointer-events-none" />

              {/* Card title top-left */}
              <div className="absolute top-4 left-4 z-10">
                <h3 className="text-white font-bold text-xl tracking-wide drop-shadow-lg">
                  {card.title}
                </h3>
              </div>

              {/* Badge callouts */}
              {card.badges.map((badge, bi) => (
                <div key={bi} className={`absolute ${badge.position} z-10 pointer-events-none`}>
                  <span className={`${badge.color ?? 'bg-[#b5813e]'} text-white text-[8px] font-black uppercase tracking-wider px-2 py-1 rounded-full shadow block whitespace-nowrap`}>
                    {badge.icon && <span className="mr-1">{badge.icon}</span>}
                    {badge.label}
                  </span>
                </div>
              ))}

              {/* Gold cart button bottom-left */}
              <div className="absolute bottom-4 left-4 z-10">
                <div
                  className="w-10 h-10 rounded-full bg-[#E5C158] text-black flex items-center justify-center shadow-[0_4px_20px_rgba(229,193,88,0.6)] group-hover:scale-110 transition-transform"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  )
}
