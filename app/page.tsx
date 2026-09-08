import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import TrustBadges from '@/components/TrustBadges'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Fixed/sticky navigation header */}
      <AnnouncementBar />
      <Header />

      {/* Hero Section - Pure Typography & Brand Identity (No Images / No Videos) */}
      <section className="relative pt-48 pb-32 px-6 overflow-hidden flex items-center justify-center flex-1">
        {/* Ambient background glow / subtle gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C]/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-zinc-800/30 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-[#C9A84C] text-xs font-bold uppercase tracking-[0.25em] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            Pure Performance Nutrition
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.95] mb-8">
            Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#C9A84C]">
              For The Elite
            </span>
          </h1>

          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-12">
            Clinical-grade formulations engineered for athletes who refuse to compromise. Maximum purity, unmatched potency, zero fillers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections/shop-all"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#C9A84C] hover:bg-[#d9b85c] text-black font-extrabold text-sm uppercase tracking-widest transition-all duration-300 shadow-[0_0_25px_rgba(201,168,76,0.3)] hover:shadow-[0_0_35px_rgba(201,168,76,0.5)] hover:scale-105"
            >
              Explore Products
            </Link>
            <Link
              href="/pages/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 rounded-full border border-zinc-800 hover:border-zinc-600 bg-zinc-950/60 hover:bg-zinc-900 text-white font-bold text-sm uppercase tracking-widest transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <ScrollReveal direction="up" delay={100}>
        <TrustBadges />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </main>
  )
}

