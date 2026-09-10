'use client'
import { useState, useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { products, Product } from '@/data/products'
import Link from 'next/link'
import Image from 'next/image'
import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = params.id
  const product = useMemo(() => products.find(p => p.id === productId), [productId])

  // Gallery state for active image
  const galleryImages = useMemo(() => {
    if (!product) return []
    if (product.gallery && product.gallery.length > 0) {
      return product.gallery
    }
    return [{ view: 'Hero View', url: product.image, altText: product.name }]
  }, [product])

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between">
        <AnnouncementBar />
        <Header />
        <div className="pt-32 text-center py-24 px-6">
          <span className="text-red-600 font-display text-xs tracking-widest uppercase font-bold block mb-2">
            CATALOG NOTIFICATION
          </span>
          <h1 className="text-4xl font-display font-bold uppercase tracking-wider text-zinc-900">
            Formulation Not Found
          </h1>
          <p className="text-zinc-500 mt-2 text-sm max-w-md mx-auto">
            The requested formulation does not exist or may have been updated. Explore our full performance lineup below.
          </p>
          <Link 
            href="/collections/shop-all" 
            className="mt-6 inline-block bg-[#E50914] hover:bg-red-600 text-white font-display text-sm tracking-widest px-8 py-3.5 rounded-sm uppercase transition-all shadow-md"
          >
            Explore Full Arsenal
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // Related products (exclude current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3)
  const activeImage = galleryImages[activeImageIndex] || galleryImages[0]

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <AnnouncementBar />
      <Header />

      <div className="pt-28 max-w-[1440px] mx-auto px-6 pb-24">
        {/* Breadcrumb Navigation */}
        <nav className="text-zinc-500 text-xs uppercase tracking-wider mb-8 font-medium flex items-center flex-wrap gap-2">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span className="text-zinc-300">/</span>
          <Link href="/collections/shop-all" className="hover:text-zinc-900 transition-colors">Arsenal</Link>
          <span className="text-zinc-300">/</span>
          <Link href={`/collections/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-zinc-900 transition-colors">
            {product.category}
          </Link>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-900 font-bold truncate max-w-[300px]">{product.name}</span>
        </nav>

        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* ── LEFT: INTERACTIVE IMAGE GALLERY (6 COLS) ── */}
          <div className="lg:col-span-6 relative sticky top-28">
            {/* Primary Main Image Frame */}
            <div className="relative w-full aspect-square bg-[#f5f5f7] rounded-2xl overflow-hidden border border-zinc-200/80 p-8 shadow-sm flex flex-col items-center justify-center">
              {product.badge && (
                <span className="absolute top-5 left-5 bg-black text-white font-display text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full z-10 font-bold shadow-md">
                  {product.badge}
                </span>
              )}

              {/* View Label Badge */}
              <span className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm border border-zinc-200 text-zinc-700 font-display text-[10px] uppercase tracking-widest px-3 py-1 rounded-full z-10 font-semibold shadow-xs">
                {activeImage.view}
              </span>

              {/* Main Image Viewport */}
              <div className="relative w-full h-[88%] flex items-center justify-center">
                <Image
                  src={optimizeCloudinaryUrl(activeImage.url, { width: 1000 })}
                  alt={activeImage.altText || product.name}
                  fill
                  priority
                  className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized={true}
                />
              </div>

              {/* Purity & Authentic Lot Indicator */}
              <div className="w-full flex items-center justify-between border-t border-zinc-200/80 pt-3 mt-1">
                <span className="text-zinc-500 font-display text-[11px] uppercase tracking-widest">
                  SIZE: <span className="text-zinc-900 font-bold">{product.size || 'Standard'}</span>
                </span>
                <span className="text-emerald-700 font-display text-[11px] uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AUTHENTIC LAB VERIFIED
                </span>
              </div>
            </div>

            {/* Thumbnails Gallery Selector */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-4">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`group relative aspect-square rounded-xl bg-[#f5f5f7] p-2 border-2 transition-all duration-200 overflow-hidden text-left ${
                      idx === activeImageIndex
                        ? 'border-[#E50914] shadow-md ring-2 ring-red-600/20'
                        : 'border-zinc-200 hover:border-zinc-400 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={optimizeCloudinaryUrl(img.url, { width: 160 })}
                        alt={img.view}
                        fill
                        className="object-contain p-1"
                        sizes="100px"
                        unoptimized={true}
                      />
                    </div>
                    <span className="absolute bottom-1 inset-x-1 bg-black/75 backdrop-blur-xs text-white text-[9px] font-display font-medium uppercase px-1 py-0.5 rounded text-center truncate pointer-events-none">
                      {img.view.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: PRODUCT SPECS & DETAILS (6 COLS) ── */}
          <div className="lg:col-span-6 flex flex-col">
            {product.series && (
              <span className="text-[#E50914] font-display text-xs md:text-sm font-bold tracking-[0.25em] uppercase mb-1">
                {product.series}
              </span>
            )}
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-wide text-zinc-950 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Stars & Athlete Ratings */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex gap-0.5 text-zinc-900">
                {'★★★★★'}
              </div>
              <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
                {product.reviewCount} Verified Athlete Reviews
              </span>
            </div>

            {/* Price & Savings in USD */}
            <div className="flex items-baseline gap-3 pb-6 border-b border-zinc-200">
              <span className="text-3xl sm:text-4xl font-display font-bold text-[#E50914] tracking-wide">
                ${product.price.toFixed(2)}
              </span>
              {product.salePrice && product.salePrice > product.price && (
                <>
                  <span className="text-base text-zinc-400 line-through">
                    ${product.salePrice.toFixed(2)}
                  </span>
                  <span className="text-emerald-700 text-xs font-display font-bold px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-sm uppercase tracking-wider">
                    {Math.round(((product.salePrice - product.price) / product.salePrice) * 100)}% SAVINGS
                  </span>
                </>
              )}
            </div>

            {/* Serving & Container Highlights Pill Bar */}
            <div className="grid grid-cols-3 gap-2 py-4 my-2 border-b border-zinc-200 bg-zinc-50/70 p-3 rounded-xl">
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">NET WEIGHT</span>
                <span className="text-sm font-bold text-zinc-900 font-display">{product.size || '1 kg'}</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">TOTAL SERVINGS</span>
                <span className="text-sm font-bold text-zinc-900 font-display">{product.servingsCount || 28} Servings</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block">SERVING SIZE</span>
                <span className="text-sm font-bold text-zinc-900 font-display">{product.servingSize || '1 Scoop'}</span>
              </div>
            </div>

            {/* Product Description */}
            <p className="text-zinc-600 text-sm leading-relaxed py-4 border-b border-zinc-200">
              {product.description}
            </p>

            {/* ── CLINICAL MACRO HIGHLIGHTS ── */}
            {product.nutritionFacts && (
              <div className="py-5 border-b border-zinc-200">
                <span className="font-display font-bold text-xs tracking-widest uppercase text-zinc-500 block mb-3">
                  CORE POTENCY BREAKDOWN (PER SERVING)
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 bg-red-50/60 border border-red-100 rounded-xl text-center">
                    <p className="font-display font-bold text-xl text-[#E50914]">{product.nutritionFacts.protein}g</p>
                    <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mt-0.5">PROTEIN</p>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
                    <p className="font-display font-bold text-xl text-zinc-900">{product.nutritionFacts.bcaa}g</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-0.5">BCAAs</p>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
                    <p className="font-display font-bold text-xl text-zinc-900">{product.nutritionFacts.eaa}g</p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-0.5">EAAs</p>
                  </div>
                  <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-center">
                    <p className="font-display font-bold text-xl text-zinc-900">
                      {product.nutritionFacts.glutamine ? `${product.nutritionFacts.glutamine}g` : `${product.nutritionFacts.leucine || 2.6}g`}
                    </p>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-0.5">
                      {product.nutritionFacts.glutamine ? 'GLUTAMINE' : 'LEUCINE'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── SHOWCASE ACTION BUTTONS (SHOWCASE ONLY) ── */}
            <div className="pt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/collections/shop-all"
                className="flex-1 bg-[#E50914] hover:bg-red-600 text-white font-display font-bold text-sm py-4 rounded-sm uppercase tracking-wider transition-all text-center shadow-md hover:shadow-lg"
              >
                Explore Full Arsenal
              </Link>
              <Link
                href="/pages/contact"
                className="flex-1 bg-white hover:bg-zinc-50 border border-zinc-300 text-zinc-900 font-display font-bold text-sm py-4 rounded-sm uppercase tracking-wider transition-all text-center"
              >
                Inquire & Order Info
              </Link>
            </div>

            {/* Certifications Badge Line */}
            {product.certifications && (
              <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-wrap items-center gap-2">
                {product.certifications.map((cert, ci) => (
                  <span
                    key={ci}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-zinc-100 text-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {cert}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── DETAILED SUPPLEMENT FACTS & INGREDIENTS TABS ── */}
        <div className="mt-20 pt-12 border-t border-zinc-200 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Complete Nutrition Facts Table (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-[#E50914] font-display text-xs font-bold tracking-[0.25em] uppercase block mb-1">
              LABORATORY PROFILE
            </span>
            <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-wider text-zinc-950 mb-6">
              Supplement Facts & Nutritional Assay
            </h3>

            {product.nutritionFacts ? (
              <div className="border border-zinc-900 rounded-xl overflow-hidden shadow-xs bg-white">
                <div className="bg-black text-white p-4">
                  <h4 className="font-display font-extrabold text-xl uppercase tracking-wider">Supplement Facts</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Serving Size: {product.servingSize || '34g'} | Servings Per Container: {product.servingsCount || 29}
                  </p>
                </div>

                <div className="divide-y divide-zinc-200 text-sm">
                  <div className="flex justify-between px-4 py-2.5 font-bold bg-zinc-50">
                    <span>Amount Per Serving</span>
                    <span>% Daily Value*</span>
                  </div>
                  <div className="flex justify-between px-4 py-2.5">
                    <span className="font-bold text-zinc-900">Calories: {product.nutritionFacts.calories} kcal</span>
                    <span className="text-zinc-500">6%</span>
                  </div>
                  <div className="flex justify-between px-4 py-2.5 font-bold text-zinc-950 bg-red-50/40">
                    <span>Protein: {product.nutritionFacts.protein}g</span>
                    <span className="text-[#E50914]">48%</span>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-zinc-700 pl-8">
                    <span>BCAAs (Branched Chain Amino Acids)</span>
                    <span className="font-semibold">{product.nutritionFacts.bcaa}g</span>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-zinc-700 pl-8">
                    <span>EAAs (Essential Amino Acids)</span>
                    <span className="font-semibold">{product.nutritionFacts.eaa}g</span>
                  </div>
                  {product.nutritionFacts.glutamine && (
                    <div className="flex justify-between px-4 py-2 text-zinc-700 pl-8">
                      <span>L-Glutamine Recovery Complex</span>
                      <span className="font-semibold">{product.nutritionFacts.glutamine}g</span>
                    </div>
                  )}
                  {product.nutritionFacts.leucine && (
                    <div className="flex justify-between px-4 py-2 text-zinc-700 pl-8">
                      <span>L-Leucine (Anabolic Trigger)</span>
                      <span className="font-semibold">{product.nutritionFacts.leucine}g</span>
                    </div>
                  )}
                  <div className="flex justify-between px-4 py-2.5">
                    <span className="font-semibold text-zinc-900">Total Carbohydrates: {product.nutritionFacts.carbohydrates}g</span>
                    <span className="text-zinc-500">1%</span>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-zinc-600 pl-8">
                    <span>Total Sugars (0g Added)</span>
                    <span>{product.nutritionFacts.sugars}g</span>
                  </div>
                  <div className="flex justify-between px-4 py-2.5">
                    <span className="font-semibold text-zinc-900">Total Fat: {product.nutritionFacts.fat}g</span>
                    <span className="text-zinc-500">1%</span>
                  </div>
                  <div className="flex justify-between px-4 py-2 text-zinc-600 pl-8">
                    <span>Saturated Fat</span>
                    <span>{product.nutritionFacts.saturatedFat}g</span>
                  </div>
                  <div className="flex justify-between px-4 py-2.5">
                    <span className="font-semibold text-zinc-900">Sodium: {product.nutritionFacts.sodium}mg</span>
                    <span className="text-zinc-500">5%</span>
                  </div>
                  <div className="flex justify-between px-4 py-2.5">
                    <span className="font-semibold text-zinc-900">Cholesterol: {product.nutritionFacts.cholesterol}mg</span>
                    <span className="text-zinc-500">1%</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-50 text-[11px] text-zinc-500 border-t border-zinc-200">
                  *Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                </div>
              </div>
            ) : null}
          </div>

          {/* Right: Ingredients, Directions & Benefits (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Ingredients Box */}
            <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl">
              <h4 className="font-display font-bold text-base uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
                Ingredients Breakdown
              </h4>
              <p className="text-xs leading-relaxed text-zinc-700">
                {product.ingredients || 'Protein Blend (91%) [Whey Protein Concentrate, Whey Protein Isolate] (Emulsifier: INS 322i), Natural & Artificial Flavours, Sodium Chloride, Thickeners (INS 466, INS 415, INS 407), Sweeteners (INS 955, INS 950).'}
              </p>
              <p className="text-[11px] font-bold text-red-700 mt-3 uppercase tracking-wider">
                Allergen Warning: Contains Milk and Soy (Lecithin).
              </p>
            </div>

            {/* Directions for Use */}
            <div className="p-6 bg-zinc-50 border border-zinc-200 rounded-xl">
              <h4 className="font-display font-bold text-base uppercase tracking-wider text-zinc-900 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]" />
                Suggested Directions
              </h4>
              <p className="text-xs leading-relaxed text-zinc-700">
                {product.usageDirections || 'Mix 1 scoop with 200-250 ml of cold water, skim milk, or your preferred beverage. Shake vigorously for 30 seconds. Consume 30-60 minutes post-workout or as a high-protein supplement throughout the day.'}
              </p>
            </div>

            {/* Features Checklist */}
            {product.features && (
              <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-xs">
                <h4 className="font-display font-bold text-base uppercase tracking-wider text-zinc-900 mb-3">
                  Engineered Advantages
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-700 font-medium">
                  {product.features.map((feat, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <span className="text-[#E50914] font-bold mt-0.5">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ── RELATED FORMULATIONS ── */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-12 border-t border-zinc-200">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-zinc-200">
              <div>
                <span className="text-[#E50914] font-display text-xs font-bold tracking-[0.25em] uppercase block mb-1">
                  RELATED FORMULATIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider text-zinc-900">
                  Complete Your Supplement Protocol
                </h3>
              </div>
              <Link 
                href="/collections/shop-all" 
                className="text-xs font-display font-bold tracking-widest text-zinc-600 hover:text-[#E50914] uppercase transition-colors"
              >
                View Full Lineup →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((item) => (
                <div key={item.id} className="group flex flex-col items-center">
                  {/* Image Card */}
                  <Link 
                    href={`/products/${item.id}`} 
                    className="relative w-full aspect-square bg-black rounded-2xl overflow-hidden block mb-4 group-hover:shadow-md transition-all duration-300"
                  >
                    {item.badge && (
                      <span className="absolute top-3.5 right-3.5 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full z-10 tracking-tight">
                        {item.badge}
                      </span>
                    )}
                    <Image
                      src={optimizeCloudinaryUrl(item.image, { width: 500 })}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized={true}
                    />
                  </Link>

                  {/* Details */}
                  <div className="text-center w-full px-2">
                    <Link href={`/products/${item.id}`} className="block">
                      <h4 className="font-sans font-bold text-zinc-950 text-base hover:text-[#E50914] transition-colors truncate">
                        {item.name}
                      </h4>
                    </Link>

                    {/* 5 solid black stars */}
                    <div className="flex justify-center text-zinc-900 text-xs my-1 tracking-widest">
                      {'★★★★★'}
                    </div>

                    {/* Price in USD */}
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-base font-bold text-[#E50914]">${item.price.toFixed(2)}</span>
                      {item.salePrice && item.salePrice > item.price && (
                        <span className="text-xs text-zinc-500 line-through">
                          ${item.salePrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/products/${item.id}`}
                      className="inline-block mt-1 text-xs font-display font-bold uppercase tracking-widest text-zinc-800 hover:text-[#E50914] transition-colors"
                    >
                      View Formulation →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
    </main>
  )
}
