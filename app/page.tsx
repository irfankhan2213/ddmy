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
    <main className="min-h-screen bg-white text-zinc-900">
      {/* ======================================= */}
      {/* BLOCK 1: THE INTRODUCTION              */}
      {/* ======================================= */}
      
      {/* Fixed/sticky navigation header */}
      <AnnouncementBar />
      <Header />

      {/* Hero section */}
      <div className="pt-[120px]">
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
