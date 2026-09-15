'use client'
import { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { products } from '@/data/products'
import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopDropdown, setShopDropdown] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const searchInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Track scroll position for subtle shadow without layout shift
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-focus search input when opened
  useEffect(() => {
    if (searchOpen) {
      const timer = setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setSearchQuery('')
    }
  }, [searchOpen])

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [mobileOpen])

  // Close search/menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  // Instant search results
  const instantResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return products
      .filter((p) => {
        return (
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.series && p.series.toLowerCase().includes(q)) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.features && p.features.some((f) => f.toLowerCase().includes(q)))
        )
      })
      .slice(0, 5)
  }, [searchQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (!q) return
    setSearchOpen(false)
    setMobileOpen(false)
    router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  const navigateToProduct = (href: string) => {
    setSearchOpen(false)
    setMobileOpen(false)
    router.push(href)
  }

  return (
    <>
      <header
        id="site-header"
        className={`sticky top-0 z-50 bg-white border-b border-zinc-200 transition-all duration-200 ${
          scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : ''
        }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 xl:px-16 h-[72px] sm:h-[80px] md:h-[92px] flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] gap-3 sm:gap-6">
          {/* Logo (Firmly anchored on Left) */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center transition-transform duration-200 hover:scale-105"
            onClick={() => {
              setMobileOpen(false)
              setSearchOpen(false)
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Psycho Nutrition"
              width={190}
              height={56}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0"
            />
          </Link>

          {/* Desktop Nav (Center) - Bebas Neue condensed athletic font */}
          <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
            <Link
              href="/"
              className="text-zinc-900 text-[15px] xl:text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2"
            >
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setShopDropdown(true)}
              onMouseLeave={() => setShopDropdown(false)}
            >
              <button
                className="flex items-center gap-1.5 text-zinc-900 text-[15px] xl:text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group"
                onClick={() => router.push('/collections/shop-all')}
              >
                PRODUCTS
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    shopDropdown ? 'rotate-180 text-[#E50914]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Animated Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white border border-zinc-200 rounded-b-md shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top ${
                  shopDropdown
                    ? 'opacity-100 scale-y-100 pointer-events-auto'
                    : 'opacity-0 scale-y-95 pointer-events-none'
                }`}
              >
                <div className="py-2 border-t-2 border-[#E50914]">
                  {[
                    { label: 'All Formulations', href: '/collections/shop-all' },
                    { label: 'Pre-Workout & Pumps', href: '/collections/pre-workout' },
                    { label: 'Whey Protein & Isolates', href: '/collections/protein' },
                    { label: 'Pump & Performance', href: '/collections/performance' },
                    { label: 'Aminos & Recovery', href: '/collections/recovery' },
                    { label: 'Vitality & Wellness', href: '/collections/vitality' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-[#E50914] hover:pl-8 transition-all duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/collections/pre-workout"
              className="text-zinc-900 text-[15px] xl:text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2"
            >
              PRE-WORKOUT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/collections/protein"
              className="text-zinc-900 text-[15px] xl:text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2"
            >
              PROTEIN
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/collections/performance"
              className="text-zinc-900 text-[15px] xl:text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2"
            >
              PERFORMANCE
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/pages/contact"
              className="text-zinc-900 text-[15px] xl:text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2"
            >
              CONTACT
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right Actions: Search & Mobile Menu */}
          <div className="flex items-center justify-end gap-2 sm:gap-4">
            {/* Search Toggle Button with touch target */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen)
                if (mobileOpen) setMobileOpen(false)
              }}
              aria-label="Search"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                searchOpen
                  ? 'bg-red-50 text-[#E50914]'
                  : 'text-zinc-800 hover:text-[#E50914] hover:bg-zinc-100 active:scale-95'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth={2}></circle>
                <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth={2}></line>
              </svg>
            </button>

            {/* Desktop Explore CTA */}
            <Link
              href="/collections/shop-all"
              className="hidden md:inline-flex items-center gap-2 bg-[#E50914] hover:bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-sm font-display text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-200 shadow-sm hover:shadow-md"
            >
              EXPLORE ARSENAL
            </Link>

            {/* Mobile Hamburger Button with 44px+ hit area */}
            <button
              className="lg:hidden w-11 h-11 rounded-md flex items-center justify-center text-zinc-900 hover:text-[#E50914] hover:bg-zinc-100 active:scale-95 transition-all -mr-2"
              onClick={() => {
                setMobileOpen(!mobileOpen)
                if (searchOpen) setSearchOpen(false)
              }}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── SEARCH DRAWER & LIVE RESULTS ── */}
        <div
          className={`absolute top-full left-0 right-0 bg-white border-t border-zinc-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden z-50 ${
            searchOpen ? 'opacity-100 max-h-[85vh] visible' : 'opacity-0 max-h-0 invisible pointer-events-none'
          }`}
        >
          <div className="max-w-[840px] mx-auto px-4 sm:px-6 py-4">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center">
              <div className="relative w-full">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pre-workout, whey isolate, creatine, aminos..."
                  className="w-full bg-zinc-100 text-zinc-950 placeholder-zinc-500 pl-11 pr-20 py-3 sm:py-3.5 rounded-full outline-none border border-zinc-300 focus:border-[#E50914] focus:bg-white transition-all text-sm sm:text-base shadow-inner"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" strokeWidth={2}></circle>
                    <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth={2}></line>
                  </svg>
                </div>

                {/* Clear input button */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('')
                      searchInputRef.current?.focus()
                    }}
                    className="absolute right-12 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-zinc-300 hover:bg-zinc-400 text-zinc-700 flex items-center justify-center text-xs transition-colors"
                    aria-label="Clear search input"
                  >
                    ✕
                  </button>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#E50914] hover:bg-black text-white p-2 rounded-full transition-colors"
                  aria-label="Execute search"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              {/* Close search button */}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="ml-3 text-zinc-500 hover:text-zinc-900 text-xs sm:text-sm font-semibold uppercase tracking-wider px-2 py-2"
                aria-label="Close search"
              >
                Close
              </button>
            </form>

            {/* Live Instant Results Dropdown */}
            {searchQuery.trim().length > 0 && (
              <div className="mt-4 border-t border-zinc-100 pt-3 max-h-[50vh] overflow-y-auto">
                <div className="text-[11px] font-display font-bold uppercase tracking-widest text-zinc-400 mb-2 px-2">
                  {instantResults.length > 0
                    ? `Matching Formulations (${instantResults.length})`
                    : 'No Formulations Found'}
                </div>

                {instantResults.length > 0 ? (
                  <div className="space-y-1.5">
                    {instantResults.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => navigateToProduct(product.href)}
                        className="flex items-center gap-3.5 p-2 rounded-lg hover:bg-zinc-50 transition-colors cursor-pointer group"
                      >
                        <div className="relative w-12 h-12 bg-black rounded-md overflow-hidden flex-shrink-0 border border-zinc-200">
                          <Image
                            src={optimizeCloudinaryUrl(product.image, { width: 100 })}
                            alt={product.name}
                            fill
                            className="object-cover md:group-hover:scale-105 transition-transform"
                            unoptimized={true}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-zinc-900 font-bold text-sm truncate group-hover:text-[#E50914] transition-colors">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-display uppercase tracking-wider text-[#E50914] font-bold">
                              {product.category}
                            </span>
                            {product.price > 0 && (
                              <span className="text-xs font-bold text-zinc-700">
                                ${product.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="text-zinc-400 group-hover:text-[#E50914] transition-colors text-sm pr-2">
                          →
                        </span>
                      </div>
                    ))}

                    <div className="pt-2 pb-1 text-center">
                      <button
                        type="button"
                        onClick={handleSearchSubmit}
                        className="text-xs font-display font-bold uppercase tracking-widest text-[#E50914] hover:text-black transition-colors"
                      >
                        View all results for &ldquo;{searchQuery.trim()}&rdquo; →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="py-6 text-center text-zinc-500 text-xs sm:text-sm">
                    No products found for &ldquo;{searchQuery}&rdquo;. Try searching for{' '}
                    <button
                      type="button"
                      onClick={() => setSearchQuery('Pre-Workout')}
                      className="text-[#E50914] font-bold underline ml-1"
                    >
                      Pre-Workout
                    </button>
                    ,{' '}
                    <button
                      type="button"
                      onClick={() => setSearchQuery('Whey')}
                      className="text-[#E50914] font-bold underline"
                    >
                      Whey
                    </button>
                    , or{' '}
                    <button
                      type="button"
                      onClick={() => setSearchQuery('Creatine')}
                      className="text-[#E50914] font-bold underline"
                    >
                      Creatine
                    </button>
                    .
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── MOBILE FULL-FEATURED NAVIGATION MENU ── */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-zinc-200 shadow-2xl transition-all duration-300 origin-top overflow-hidden z-50 ${
            mobileOpen ? 'opacity-100 max-h-[85vh] visible' : 'opacity-0 max-h-0 invisible pointer-events-none'
          }`}
        >
          <div className="overflow-y-auto max-h-[85vh] px-4 py-4 space-y-4">
            {/* Quick Search inside Mobile Menu */}
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-zinc-100 text-zinc-900 placeholder-zinc-400 pl-10 pr-10 py-2.5 rounded-lg outline-none text-sm border border-zinc-200 focus:border-[#E50914]"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" strokeWidth={2}></circle>
                  <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth={2}></line>
                </svg>
              </div>
              {searchQuery && (
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#E50914] text-white p-1 rounded-md text-xs"
                >
                  Go
                </button>
              )}
            </form>

            {/* Navigation links */}
            <div className="divide-y divide-zinc-100">
              {[
                { label: 'Home', href: '/', badge: null },
                { label: 'All Formulations (Arsenal)', href: '/collections/shop-all', badge: 'ALL' },
                { label: 'Pre-Workout & Pumps', href: '/collections/pre-workout', badge: 'HIGH STIM' },
                { label: 'Whey Protein & Isolates', href: '/collections/protein', badge: 'PURE' },
                { label: 'Pump & Performance', href: '/collections/performance', badge: 'CREATINE' },
                { label: 'Aminos & Recovery', href: '/collections/recovery', badge: 'EAA/BCAA' },
                { label: 'Vitality & Wellness', href: '/collections/vitality', badge: 'HEALTH' },
                { label: 'Science & Research', href: '/blogs/news', badge: null },
                { label: 'Contact & Support', href: '/pages/contact', badge: null },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-2 text-zinc-900 font-display text-base tracking-wider uppercase hover:text-[#E50914] hover:bg-zinc-50 rounded transition-all"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Call to Action */}
            <div className="pt-2">
              <Link
                href="/collections/shop-all"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-[#E50914] hover:bg-black text-white font-display text-sm tracking-widest uppercase py-3.5 rounded shadow-md transition-colors"
              >
                EXPLORE COMPLETE ARSENAL
              </Link>
            </div>

            {/* Quality Statement */}
            <div className="pt-2 pb-1 text-center border-t border-zinc-100">
              <p className="text-[10px] font-display tracking-[0.25em] uppercase text-zinc-400 font-bold">
                100% PURE LAB TESTED • ZERO FILLERS
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu or search */}
      {(mobileOpen || searchOpen) && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => {
            setMobileOpen(false)
            setSearchOpen(false)
          }}
          aria-hidden="true"
        />
      )}
    </>
  )
}
