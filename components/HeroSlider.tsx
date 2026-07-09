'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const slides = [
  {
    id: 1,
    image: '/images/Firefly-2.jpg',
    alt: 'DDMY Nutrition - Ignite Your Performance',
  },
  {
    id: 2,
    image: '/images/e780c1edaebcc8bf5b75146e0f866ac488e83febca281867ab031bbdf7b8e24a-2.png',
    alt: 'DDMY Nutrition - Premium Quality Supplements',
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full aspect-[2/1] sm:aspect-[2.1/1] md:aspect-[2.1/1] lg:aspect-[2.1/1] overflow-hidden bg-black select-none border-b border-zinc-900 group">
      <Link
        href="/collections/shop-all"
        className="block relative w-full h-full cursor-pointer"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={100}
              unoptimized={true}
              className="object-contain sm:object-cover"
            />
          </div>
        ))}
      </Link>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-[#C9A84C] w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
