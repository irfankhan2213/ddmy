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
    <section className="bg-[#F6F5F2] pt-12 pb-6 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex items-center justify-between border border-zinc-800">
          
          {/* Background subtle geometric / smoke texture overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-zinc-900/40 z-10 pointer-events-none" />

          {/* Left Text Area: "Our products" */}
          <div className="relative z-20 pl-8 sm:pl-12 md:pl-16 max-w-[45%]">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-wider leading-none drop-shadow-md">
              Our <br />
              <span className="text-zinc-100">products</span>
            </h2>
          </div>

          {/* Right Image Area */}
          <div className="relative z-10 w-[60%] sm:w-[55%] h-full flex items-center justify-end pr-4 sm:pr-8">
            <div className="relative w-full h-[85%] sm:h-[90%]">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                className="object-contain object-right drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
