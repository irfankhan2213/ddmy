'use client'
import Link from 'next/link'
import Image from 'next/image'
import cloudinaryImages from '@/data/cloudinary-images.json'

const MAIN_BANNER_URL =
  cloudinaryImages['main_banner.png'] ||
  'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788964851/psycho_nutrition/psycho_main_hero_banner_1788964833.png'

export default function HeroSlider() {
  return (
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
          quality={100}
          unoptimized={true}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </Link>
    </div>
  )
}
