'use client'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between">
      <AnnouncementBar />
      <Header />

      <div className="pt-[152px] sm:pt-[164px] md:pt-[178px] max-w-[800px] mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-red-50 text-[#E50914] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <span className="text-[#E50914] font-display text-sm font-bold tracking-[0.25em] uppercase block mb-2">
          OFFICIAL BRAND SHOWCASE
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-bold uppercase tracking-wider text-zinc-900 mb-4">
          EXPLORE THE ARSENAL
        </h1>
        <p className="text-zinc-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Psycho Nutrition formulations are available for showcase and laboratory inquiry. Explore our full lineup of high-performance supplements.
        </p>
        <Link
          href="/collections/shop-all"
          className="inline-block bg-[#E50914] hover:bg-red-600 text-white font-display text-base tracking-wider px-8 py-3.5 rounded-sm uppercase transition-all shadow-md"
        >
          Browse All Formulations
        </Link>
      </div>

      <Footer />
    </main>
  )
}
