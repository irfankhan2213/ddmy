'use client'
import Image from 'next/image'

interface OurProductsBannerProps {
  imageSrc?: string
  altText?: string
}

export default function OurProductsBanner({ 
  imageSrc = 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
  altText = 'Our Products Lineup' 
}: OurProductsBannerProps) {
  return (
    <section className="bg-transparent pt-6 sm:pt-12 pb-2 sm:pb-4 px-4 sm:px-6 relative z-10">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative w-full h-[160px] sm:h-[220px] md:h-[320px] bg-gradient-to-r from-[#0C0C10] via-[#0E0E14] to-[#140D10] rounded-md overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] flex items-center justify-between border border-zinc-850 hover:border-red-600/40 transition-all duration-300">
          
          {/* Background subtle crimson ambient glow & texture */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10 pointer-events-none" />
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text Area: "Our products" */}
          <div className="relative z-20 pl-5 sm:pl-12 md:pl-16 max-w-[50%]">
            <span className="text-red-600 font-display text-[8px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold block mb-1 sm:mb-2">
              ENGINEERED SUPREMACY
            </span>
            <h2 className="text-2xl sm:text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-wider leading-none drop-shadow-lg">
              OUR <br />
              <span className="text-red-600">PRODUCTS</span>
            </h2>
          </div>

          {/* Right Image Area */}
          <div className="relative z-10 w-[55%] sm:w-[55%] h-full flex items-center justify-end pr-2 sm:pr-8">
            <div className="relative w-full h-[85%] sm:h-[90%]">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-contain object-right drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                priority
                unoptimized={true}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
