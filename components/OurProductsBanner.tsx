'use client'
import Image from 'next/image'

interface OurProductsBannerProps {
  imageSrc?: string
  altText?: string
}

export default function OurProductsBanner({ 
  imageSrc = '/images/banner_whey.png',
  altText = 'Our Products Lineup' 
}: OurProductsBannerProps) {
  return (
    <section className="bg-transparent pt-12 pb-4 px-6 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] bg-gradient-to-r from-[#0C0C10] via-[#0E0E14] to-[#140D10] rounded-md overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center justify-between border border-zinc-850 hover:border-red-600/40 transition-all duration-300">
          
          {/* Background subtle crimson ambient glow & texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10 pointer-events-none" />
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text Area: "Our products" */}
          <div className="relative z-20 pl-8 sm:pl-12 md:pl-16 max-w-[50%]">
            <span className="text-red-600 font-display text-xs sm:text-sm tracking-[0.25em] uppercase font-bold block mb-2">
              ENGINEERED SUPREMACY
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white uppercase tracking-wider leading-none drop-shadow-lg">
              OUR <br />
              <span className="text-red-600">PRODUCTS</span>
            </h2>
          </div>

          {/* Right Image Area */}
          <div className="relative z-10 w-[60%] sm:w-[55%] h-full flex items-center justify-end pr-4 sm:pr-8">
            <div className="relative w-full h-[85%] sm:h-[90%]">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-contain object-right drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
