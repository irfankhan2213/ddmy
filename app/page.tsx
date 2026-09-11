import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import TrustBadges from '@/components/TrustBadges'

import CategoryGrid from '@/components/CategoryGrid'
import ProductsCarousel from '@/components/ProductsCarousel'
import BestSellerFeature from '@/components/BestSellerFeature'
import ReviewsSection from '@/components/ReviewsSection'
import FeaturedSeriesShowcase from '@/components/FeaturedSeriesShowcase'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'
import { bestSellers } from '@/data/products'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-900">
      {/* ======================================= */}
      {/* BLOCK 1: THE INTRODUCTION              */}
      {/* ======================================= */}
      
      {/* Fixed/sticky navigation header */}
      <AnnouncementBar />
      <Header />

      {/* Hero section - padding matches announcement (40px) + taller header (84/96/110px), bg-black so no white bar shows */}
      <div className="pt-[124px] sm:pt-[136px] md:pt-[150px] bg-black">
        <HeroSlider />
      </div>

      {/* Trust Badges */}
      <ScrollReveal direction="up" delay={100}>
        <TrustBadges />
      </ScrollReveal>

      {/* ======================================= */}
      {/* BLOCK 2: THE ARSENAL CATALOG (WHITE)   */}
      {/* ======================================= */}
      
      <div className="bg-white relative overflow-hidden border-t border-zinc-200">

        {/* Featured Products Carousel */}
        <ScrollReveal direction="up">
          <ProductsCarousel products={bestSellers} />
        </ScrollReveal>

        {/* Category Grid */}
        <ScrollReveal direction="up">
          <CategoryGrid />
        </ScrollReveal>
      </div>

      {/* ======================================= */}
      {/* BLOCK 3: THE DARK SPOTLIGHT & PROOF     */}
      {/* ======================================= */}

      {/* Interactive Best Seller Spotlights */}
      <ScrollReveal direction="up">
        <BestSellerFeature />
      </ScrollReveal>

      {/* Customer reviews */}
      <ScrollReveal direction="up">
        <ReviewsSection />
      </ScrollReveal>

      {/* Trust Strip & Series Showcase (After Reviews) */}
      <ScrollReveal direction="up">
        <FeaturedSeriesShowcase />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </main>
  )
}
