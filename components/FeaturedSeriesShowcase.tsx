'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

interface SeriesCard {
  id: number
  title: string
  price: string
  href: string
  image: string
  badges: { label: string; className: string }[]
  badgeColor: string
}

const CARDS: SeriesCard[] = [
  {
    id: 1,
    title: 'Whey Concentrate',
    price: '$42.05',
    href: '/products/psycho-whey-valrhona-chocolate-1kg',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
    badges: [
      { label: '24G PURE PROTEIN', className: 'absolute left-3 top-[32%] z-10' },
      { label: '5.28G BCAAS', className: 'absolute left-3 bottom-[32%] z-10' },
      { label: '4.1G GLUTAMINE', className: 'absolute right-3 bottom-[26%] z-10' },
    ],
    badgeColor: 'bg-[#E50914] text-white',
  },
  {
    id: 2,
    title: 'Whey Isolate',
    price: '$52.56',
    href: '/products/psycho-isolate-chocolate-frappe-1kg',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959140/psycho_nutrition/psycho_isolate_chocolate_frappe_front_hero.jpg',
    badges: [
      { label: '30G ISOLATE', className: 'absolute right-3 top-[32%] z-10' },
      { label: '2.6G LEUCINE', className: 'absolute left-3 bottom-[32%] z-10' },
      { label: 'ULTRA-LOW CARB', className: 'absolute right-3 bottom-[26%] z-10' },
    ],
    badgeColor: 'bg-zinc-900/90 border border-zinc-700 text-white',
  },
  {
    id: 3,
    title: 'Insane Whey 2kg',
    price: '$80.96',
    href: '/products/psycho-insane-whey-2kg-valrhona-chocolate',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788963008/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_front_hero.jpg',
    badges: [
      { label: '58 FULL SERVINGS', className: 'absolute left-3 top-[30%] z-10' },
      { label: 'NO AMINO SPIKING', className: 'absolute right-3 top-[42%] z-10' },
      { label: '11.4G EAAS', className: 'absolute right-3 bottom-[26%] z-10' },
    ],
    badgeColor: 'bg-[#E50914] text-white',
  },
  {
    id: 4,
    title: 'Ripped ISO 2kg',
    price: '$100.93',
    href: '/products/psycho-iso-2kg-chocolate-frappe',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959083/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_front_hero.jpg',
    badges: [
      { label: '30G PURE ISOLATE', className: 'absolute right-3 top-[32%] z-10' },
      { label: '56 PRO SERVINGS', className: 'absolute left-3 top-[42%] z-10' },
      { label: 'SHRED CONDITIONING', className: 'absolute left-3 bottom-[26%] z-10' },
    ],
    badgeColor: 'bg-zinc-900/90 border border-zinc-700 text-white',
  },
]

export default function FeaturedSeriesShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isPausedRef = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-scroll loop
  useEffect(() => {
    if (CARDS.length === 0) return
    const el = scrollRef.current
    if (!el) return
    let rafId: number
    const speed = 0.8

    const step = () => {
      if (!isPausedRef.current && el) {
        el.scrollLeft += speed
        const half = el.scrollWidth / 2
        if (el.scrollLeft >= half) {
          el.scrollLeft = 0
        }
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    if (CARDS.length === 0) return
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const half = el.scrollWidth / 2
      const pos = el.scrollLeft % half
      const cardWidth = half / CARDS.length
      setActiveIndex(Math.round(pos / cardWidth) % CARDS.length)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const scroll = (dir: 'l' | 'r') => {
    scrollRef.current?.scrollBy({ left: dir === 'l' ? -320 : 320, behavior: 'smooth' })
  }

  return (
    <section className="bg-white select-none border-t border-zinc-200">

      {/* ── CLEAN TRUST STRIP ── */}
      <div className="bg-zinc-50 py-4 sm:py-8 border-b border-zinc-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            {
              label: 'FREE SHIPPING',
              sub: 'On All Orders Above $50',
              icon: (
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
                </svg>
              ),
            },
            {
              label: '100% AUTHENTIC',
              sub: 'Scratch-to-Verify Security',
              icon: (
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              label: 'LIVE TRACKING',
              sub: 'SMS & WhatsApp Updates',
              icon: (
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              label: 'DIRECT LAB TO DOOR',
              sub: 'No Middlemen Markup',
              icon: (
                <svg className="w-5 h-5 sm:w-7 sm:h-7 text-[#E50914]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              ),
            },
          ].map((f) => (
            <div key={f.label} className="flex items-center gap-2 sm:gap-3.5">
              <div className="flex-shrink-0 p-1.5 sm:p-2.5 rounded-sm bg-red-50 border border-red-100">
                {f.icon}
              </div>
              <div>
                <p className="font-display font-bold text-[10px] sm:text-base tracking-wider uppercase text-zinc-900">{f.label}</p>
                <p className="text-zinc-500 text-[9px] sm:text-xs hidden sm:block">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── AUTO-SCROLL CARD STRIP (MATCHING IMAGE 3) ── */}
      {CARDS.length > 0 && (
        <>
          <div className="relative overflow-hidden py-6 sm:py-14">

            {/* Left Arrow */}
            <button
              onClick={() => scroll('l')}
              aria-label="Previous card"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-sm bg-white/95 border border-zinc-200 text-zinc-800 flex items-center justify-center hover:border-[#E50914] hover:text-[#E50914] hover:bg-white transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('r')}
              aria-label="Next card"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-sm bg-white/95 border border-zinc-200 text-zinc-800 flex items-center justify-center hover:border-[#E50914] hover:text-[#E50914] hover:bg-white transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scroll container */}
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-8 overflow-x-auto px-4 sm:px-6 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              onMouseEnter={() => { isPausedRef.current = true }}
              onMouseLeave={() => { isPausedRef.current = false }}
            >
              {[...CARDS, ...CARDS].map((card, idx) => (
                <Link
                  key={`${card.id}-${idx}`}
                  href={card.href}
                  className="group relative flex-shrink-0 overflow-hidden rounded-2xl block bg-gradient-to-b from-[#111116] via-[#09090c] to-[#040405] shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ width: '60vw', minWidth: 220, maxWidth: 380, height: 'clamp(320px, 60vw, 480px)' }}
                >
                  {/* Product poster image */}
                  <div className="absolute inset-0 p-6 flex items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 640px) 60vw, 380px"
                      unoptimized={true}
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                  {/* Card title — top centered (matching Image 3) */}
                  <div className="absolute top-6 inset-x-6 text-center z-10">
                    <span className="text-white font-display font-bold text-lg sm:text-2xl md:text-3xl tracking-wider uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {card.title}
                    </span>
                  </div>

                  {/* Feature callout pill badges */}
                  {card.badges.map((b, bi) => (
                    <span
                      key={bi}
                      className={`${b.className} ${card.badgeColor} text-[10px] md:text-[11px] font-display font-bold px-2.5 py-1 uppercase tracking-wider rounded shadow-md pointer-events-none`}
                    >
                      {b.label}
                    </span>
                  ))}

                  {/* Floating White Info Card at Bottom (Matching Image 3) */}
                  <div className="absolute inset-x-4 bottom-4 z-20 bg-white rounded-xl p-3 flex items-center justify-between shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                    {/* Left: Thumbnail */}
                    <div className="relative w-12 h-12 flex-shrink-0 bg-[#f4f4f5] rounded-lg overflow-hidden flex items-center justify-center border border-zinc-200">
                      <Image
                        src={optimizeCloudinaryUrl(card.image, { width: 100 })}
                        alt=""
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                        unoptimized={true}
                      />
                    </div>

                    {/* Middle: Title & Price */}
                    <div className="flex-1 min-w-0 px-3">
                      <p className="font-bold text-sm text-zinc-950 truncate font-sans">
                        {card.title}
                      </p>
                      <p className="text-xs font-bold text-zinc-900">
                        {card.price}
                      </p>
                    </div>

                    {/* Right: Round Neon-Lime Quick View / Eye Button */}
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#ccff00] text-black flex items-center justify-center shadow-md hover:scale-105 transition-all">
                      <svg className="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex items-center justify-center gap-2 pb-6 sm:pb-14 bg-white">
            {CARDS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = scrollRef.current.scrollWidth / (CARDS.length * 2)
                    scrollRef.current.scrollTo({ left: cardWidth * i, behavior: 'smooth' })
                  }
                }}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-8 bg-[#E50914]' : 'w-6 bg-zinc-300'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}

    </section>
  )
}
