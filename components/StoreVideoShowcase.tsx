'use client'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'

export default function StoreVideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const containerHeight = rect.height
      
      // Calculate how much we have scrolled through this component
      // When rect.top is 0, progress is 0. 
      // When rect.bottom is windowHeight, progress is 1.
      const scrollableDistance = containerHeight - windowHeight
      const scrollPosition = -rect.top
      
      let newProgress = scrollPosition / scrollableDistance
      // Clamp between 0 and 1
      newProgress = Math.max(0, Math.min(1, newProgress))
      
      setProgress(newProgress)

      // Scrub the video
      if (videoRef.current && !Number.isNaN(videoRef.current.duration)) {
        requestAnimationFrame(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = videoRef.current.duration * newProgress
          }
        })
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    const video = videoRef.current
    if (video) {
      // Re-trigger scroll calculation once video metadata is loaded
      video.addEventListener('loadedmetadata', handleScroll)
    }

    // Initial call
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (video) {
        video.removeEventListener('loadedmetadata', handleScroll)
      }
    }
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[300vh] bg-black"
    >
      {/* Sticky container that stays in view while scrolling past the 300vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/videos/DDMY_NUTRITION.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          muted
          playsInline
          preload="auto"
        />

        {/* Overlay Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pointer-events-none">
          
          {/* Phase 1: Intro Text (Fades out smoothly) */}
          <div 
            className="absolute top-1/2 left-6 md:left-20 -translate-y-1/2 transition-opacity duration-75"
            style={{ opacity: Math.max(0, 1 - progress * 3) }}
          >
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
              Step Inside <br /> The Store
            </h2>
            <p className="text-xl text-zinc-300 max-w-md">
              Scroll down to explore our premium physical locations and experience the elite standard.
            </p>
          </div>

          {/* Phase 2: "Gooing" Glassmorphism UI & Product Showcase (Fades in middle) */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl flex flex-col items-center pointer-events-auto"
            style={{ 
              opacity: progress > 0.15 && progress < 0.85 ? Math.sin(((progress - 0.15) / 0.7) * Math.PI) : 0,
              transform: `translate(-50%, calc(-50% + ${(0.5 - progress) * 150}px))`
            }}
          >
            <div className="bg-black/40 backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-3xl shadow-2xl text-center flex flex-col items-center relative overflow-hidden">
              <div className="w-32 h-32 bg-[#C9A84C]/30 rounded-full blur-3xl absolute -top-10 -left-10 mix-blend-screen animate-pulse" />
              <div className="w-32 h-32 bg-red-500/30 rounded-full blur-3xl absolute -bottom-10 -right-10 mix-blend-screen animate-pulse" />
              
              <h3 className="text-4xl md:text-6xl font-black uppercase text-white mb-6 relative z-10 drop-shadow-md">
                Uncompromising Quality
              </h3>
              <p className="text-zinc-200 text-lg md:text-xl mb-10 max-w-lg relative z-10 font-medium">
                Every product on these shelves is formulated for maximum absorption, raw power, and clinically dosed performance.
              </p>
              
              <Link 
                href="/collections/shop-all" 
                className="relative z-10 bg-white text-black hover:bg-[#C9A84C] hover:text-white transition-colors duration-300 font-bold uppercase tracking-widest px-10 py-5 rounded-sm text-lg"
              >
                Shop The Collection
              </Link>
            </div>
          </div>

          {/* Phase 3: Final CTA (Fades in at the end) */}
          <div 
            className="absolute bottom-32 left-1/2 -translate-x-1/2 text-center w-full px-6 pointer-events-auto"
            style={{ 
              opacity: Math.max(0, (progress - 0.7) * 3.33),
              transform: `translate(-50%, ${Math.max(0, (1 - progress) * 50)}px)`
            }}
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase text-white mb-8 drop-shadow-2xl">
              Join The Elite
            </h2>
            <Link 
              href="/pages/contact" 
              className="inline-block bg-[#e63946] text-white hover:bg-white hover:text-black transition-colors duration-300 font-black uppercase tracking-widest px-12 py-6 rounded-sm text-xl shadow-[0_0_30px_rgba(230,57,70,0.4)]"
            >
              Find a Store Near You
            </Link>
          </div>

        </div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
          <div 
            className="h-full bg-[#C9A84C]"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
