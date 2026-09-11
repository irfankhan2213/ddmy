'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cloudinaryImages from '@/data/cloudinary-images.json'

const MAIN_BANNER_URL =
  cloudinaryImages['main_banner.png'] ||
  'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_1920/v1788964851/psycho_nutrition/psycho_main_hero_banner_1788964833.png'

export default function HeroSlider() {
  // Mirror Header.tsx scroll state so the banner sits flush under the nav:
  // at the top the offset clears announcement (40px) + header, once scrolled
  // it clears just the docked header, and collapses when the header hides.
  const [atTop, setAtTop] = useState(true)
  const [hideHeader, setHideHeader] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY

      setAtTop(currentScrollY <= 36)

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setHideHeader(true)
      } else {
        setHideHeader(false)
      }

      lastScrollY = currentScrollY
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`bg-black transition-[padding] duration-300 ${
      hideHeader ? 'pt-0' : atTop
        ? 'pt-[124px] sm:pt-[136px] md:pt-[150px]'
        : 'pt-[84px] sm:pt-[96px] md:pt-[110px]'
    }`}>
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
