'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cloudinaryImages from '@/data/cloudinary-images.json'

const MAIN_BANNER_URL =
  cloudinaryImages['main_banner.png'] ||
  'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_1920/v1788964851/psycho_nutrition/psycho_main_hero_banner_1788964833.png'

export default function HeroSlider() {
  // Measure the real header height at runtime so the banner always sits
  // flush under the nav: announcement + header at the top, docked header
  // once scrolled, zero when the header slides away on scroll-down.
  // Static classes below are only the pre-mount fallback.
  const [offset, setOffset] = useState<number | null>(null)

  useEffect(() => {
    const measure = () => {
      const el = document.getElementById('site-header')
      setOffset(el ? Math.max(0, Math.round(el.getBoundingClientRect().bottom)) : 0)
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        measure()
      })
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      className="bg-black transition-[padding] duration-300 pt-[140px] sm:pt-[152px] md:pt-[168px]"
      style={offset !== null ? { paddingTop: offset } : undefined}
    >
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-black select-none border-b border-zinc-900 group">
        <Link
          href="/collections/shop-all"
          className="block relative w-full h-full cursor-pointer overflow-hidden"
        >
          <Image
            src={MAIN_BANNER_URL}
            alt="Psycho Nutrition - Performance Nutrition"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1920px"
            unoptimized={true}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </Link>
      </div>
    </div>
  )
}
