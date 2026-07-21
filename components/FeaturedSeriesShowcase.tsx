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
      { label: 'PROBIOTICS BLEND', className: 'absolute left-3 top-[42%] z-10' },
      { label: 'NUTRITIOUS GREENS', className: 'absolute left-3 bottom-[18%] z-10' },
      { label: 'PHYTONUTRIENT RICH BERRIES', className: 'absolute right-3 bottom-[12%] z-10' },
    ],
    badgeColor: 'bg-[#c8973a] text-white',
  },
  {
    id: 2,
    title: 'Creatine',
    href: '/collections/pre-workout',
    image: '/images/product-3.png',
    badges: [
      { label: 'AIDS IN RECOVERY', className: 'absolute right-3 top-[38%] z-10' },
      { label: 'DRASTIC OUTPUT', className: 'absolute left-3 bottom-[28%] z-10' },
      { label: 'IMPROVE MUSCLE MASS & ENDURANCE', className: 'absolute right-3 bottom-[12%] z-10' },
    ],
    badgeColor: 'bg-zinc-800/90 border border-zinc-500 text-white',
  },
  {
    id: 3,
    title: 'Proteins',
    href: '/collections/protein',
    image: '/images/new-product.png',
    badges: [
      { label: 'QUICK & EASY DIGESTION', className: 'absolute left-3 top-[32%] z-10' },
      { label: 'WEIGHT MANAGEMENT', className: 'absolute left-3 top-[43%] z-10' },
      { label: 'IMPROVED RECOVERY', className: 'absolute left-3 top-[54%] z-10' },
      { label: 'IMPROVED MUSCLE MASS', className: 'absolute left-3 top-[65%] z-10' },
    ],
    badgeColor: 'bg-[#cc2929] text-white',
  },
  {
    id: 4,
    title: 'Proburn',
    href: '/collections/weight-loss',
    image: '/images/product-2.png',
    badges: [
      { label: 'POWERFUL THERMOGENIC', className: 'absolute right-3 top-[38%] z-10' },
      { label: 'INCREASED ENERGY', className: 'absolute right-3 top-[50%] z-10' },
      { label: 'APPETITE CONTROL', className: 'absolute right-3 top-[62%] z-10' },
    ],
    badgeColor: 'bg-zinc-800/90 border border-zinc-500 text-white',
  },
]

export default function FeaturedSeriesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let rafId: number
    const speed = 0.6

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed
        // reset to 0 when we've scrolled through one full set of cards
        const half = el.scrollWidth / 2
        if (el.scrollLeft >= half) {
          el.scrollLeft = 0
        }
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [isPaused])

  const scroll = (dir: 'l' | 'r') => {
    scrollRef.current?.scrollBy({ left: dir === 'l' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#F6F5F2] select-none">

      {/* ── BLACK TRUST STRIP ── */}
      <div className="bg-black py-7">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: 'Free Shipping',
              sub: 'All Orders Over $99',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
                </svg>
              ),
            },
            {
              label: 'Secure payment',
              sub: 'Shopify™ Secured',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              label: 'Order Tracking',
              sub: 'Every Step of the Way',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              label: 'Trusted Service',
              sub: '24/7 Customer Service',
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center text-center gap-2 text-white">
              {f.icon}
              <div>
                <p className="font-semibold text-sm">{f.label}</p>
                <p className="text-zinc-400 text-xs">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── OFF-WHITE GAP BETWEEN STRIP AND CARDS ── */}
      <div className="h-14 bg-[#F6F5F2]" />

      {/* ── AUTO-SCROLL CARD STRIP ── */}
      <div className="relative overflow-hidden">

        {/* Left Arrow */}
        <button
          onClick={() => scroll('l')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('r')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scroll container — cards flush, no side padding */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...CARDS, ...CARDS].map((card, idx) => (
            <Link
              key={`${card.id}-${idx}`}
              href={card.href}
              className="group relative flex-shrink-0 overflow-hidden rounded-xl block"
              style={{ width: '25vw', minWidth: 240, height: 460 }}
            >
              {/* Full-bleed product image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

              {/* Card title — top left */}
              <span className="absolute top-4 left-4 z-10 text-white font-bold text-xl tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {card.title}
              </span>

              {/* Badges */}
              {card.badges.map((b, bi) => (
                <span
                  key={bi}
                  className={`${b.className} ${card.badgeColor} text-[8px] font-black uppercase tracking-wide px-2 py-[3px] rounded-sm shadow-lg whitespace-nowrap pointer-events-none`}
                >
                  {b.label}
                </span>
              ))}

              {/* Gold cart button — bottom left */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="w-10 h-10 rounded-full bg-[#E5C158] text-black flex items-center justify-center shadow-[0_4px_16px_rgba(229,193,88,0.55)] group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── BOTTOM OFF-WHITE PADDING ── */}
      <div className="h-14 bg-[#F6F5F2]" />

    </section>
  )
}
