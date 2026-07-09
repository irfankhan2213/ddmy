import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import TrustBadges from '@/components/TrustBadges'
import OurProductsBanner from '@/components/OurProductsBanner'

import CategoryGrid from '@/components/CategoryGrid'
import ProductsCarousel from '@/components/ProductsCarousel'
import BestSellerFeature from '@/components/BestSellerFeature'
import ReviewsSection from '@/components/ReviewsSection'
import StoreVideoShowcase from '@/components/StoreVideoShowcase'
import ScrollReveal from '@/components/ScrollReveal'
import Footer from '@/components/Footer'
import { bestSellers, healthLineProducts } from '@/data/products'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* ======================================= */}
      {/* BLOCK 1: THE DARK INTRODUCTION          */}
      {/* ======================================= */}
      
      {/* Fixed/sticky navigation header */}
      <AnnouncementBar />
      <Header />

      {/* Hero section */}
      <div className="pt-[72px]">
        <HeroSlider />
      </div>

      {/* Trust Badges */}
      <ScrollReveal direction="up" delay={100}>
        <TrustBadges />
      </ScrollReveal>

      {/* ======================================= */}
      {/* BLOCK 2: THE LIGHT CATALOG              */}
      {/* ======================================= */}
      
      <div className="bg-white">
        {/* Featured Products (Best Sellers) */}
        <ScrollReveal direction="up">
          <ProductsCarousel title="Best Sellers" products={bestSellers} dark={false} />
        </ScrollReveal>

        {/* Our Products Banner */}
        <ScrollReveal direction="up">
          <OurProductsBanner />
        </ScrollReveal>

        {/* Category Grid */}
        <ScrollReveal direction="up">
          <CategoryGrid />
        </ScrollReveal>

        {/* Health Line Products */}
        <ScrollReveal direction="up">
          <ProductsCarousel title="Health & Vitality Line" products={healthLineProducts} dark={false} />
        </ScrollReveal>
      </div>

      {/* ======================================= */}
      {/* BLOCK 3: THE DARK SPOTLIGHT & PROOF     */}
      {/* ======================================= */}

      {/* Interactive Best Seller Spotlights */}
      <ScrollReveal direction="up">
        <BestSellerFeature />
      </ScrollReveal>

      {/* Customer reviews (Now Dark Mode) */}
      <ScrollReveal direction="up">
        <ReviewsSection />
      </ScrollReveal>

      {/* Interactive Store Video Showcase */}
      <StoreVideoShowcase />

      {/* Footer */}
      <Footer />
    </main>
  )
}
