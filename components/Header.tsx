'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shopDropdown, setShopDropdown] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      
      setAtTop(currentScrollY <= 36)
      setScrolled(currentScrollY > 10)

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down
        setHideHeader(true)
      } else {
        // Scrolling up
        setHideHeader(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
      atTop ? 'top-10 bg-white/95 backdrop-blur-md border-b border-zinc-200' : 'top-0'
    } ${scrolled && !atTop ? 'bg-white/98 backdrop-blur-xl border-b border-zinc-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : ''} ${
      hideHeader ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 xl:px-16 h-[80px] grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Logo (Left) - Inverted to black on crisp white */}
        <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 flex items-center">
          <Image
            src="/images/logo.png"
            alt="Psycho Nutrition"
            width={180}
            height={68}
            priority
            className="h-10 md:h-11 w-auto object-contain brightness-0"
          />
        </Link>

        {/* Desktop Nav (Center) - Bebas Neue condensed athletic font */}
        <nav className="hidden lg:flex items-center justify-center gap-9">
          <Link href="/" className="text-zinc-900 text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2">
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <div className="relative py-6" onMouseEnter={() => setShopDropdown(true)} onMouseLeave={() => setShopDropdown(false)}>
            <button className="flex items-center gap-1.5 text-zinc-900 text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group">
              PRODUCTS
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${shopDropdown ? 'rotate-180 text-[#E50914]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Animated Dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-white/98 backdrop-blur-2xl border border-zinc-200 rounded-b-md shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top ${shopDropdown ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
              <div className="py-2 border-t-2 border-[#E50914]">
                {[
                  { label: 'All Formulations', href: '/collections/shop-all' },
                  { label: 'Pre-Workout & Pumps', href: '/collections/pre-workout' },
                  { label: 'Whey Protein Isolates', href: '/collections/protein' },
                  { label: 'Anabolic Mass Gainers', href: '/collections/mass-gainer' },
                  { label: 'Weight Gainer', href: '/collections/weight-gainer' },
                  { label: 'Amino Acids & EAAs', href: '/collections/amino-acids' },
                  { label: 'Omega 3 Fish Oils', href: '/collections/fish-oils' },
                  { label: 'Vitamins & ZMA', href: '/collections/vitamins-supplements' },
                  { label: 'Daily Essentials', href: '/collections/essentials' },
                ].map(item => (
                  <Link key={item.href} href={item.href} className="block px-6 py-3 text-sm font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-[#E50914] hover:pl-8 transition-all duration-200">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/collections/pre-workout" className="text-zinc-900 text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2">
            PRE-WORKOUT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/collections/protein" className="text-zinc-900 text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2">
            PROTEIN
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/collections/mass-gainer" className="text-zinc-900 text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2">
            MASS GAINER
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/pages/contact" className="text-zinc-900 text-[16px] font-display font-bold tracking-[0.14em] hover:text-[#E50914] transition-colors uppercase relative group py-2">
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E50914] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Actions: Showcase Search & Explore (NO CART) */}
        <div className="flex items-center justify-end gap-5">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
            className={`transition-all duration-200 ${searchOpen ? 'text-[#E50914]' : 'text-zinc-800 hover:text-[#E50914]'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth={2}></circle>
              <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth={2}></line>
            </svg>
          </button>
          
          <Link
            href="/collections/shop-all"
            className="hidden sm:inline-flex items-center gap-2 bg-[#E50914] hover:bg-black text-white px-4 py-2 rounded-sm font-display text-xs tracking-widest uppercase transition-all duration-200 shadow-sm"
          >
            EXPLORE ARSENAL
          </Link>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-zinc-900 hover:text-[#E50914]" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu">
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className={`absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-t border-zinc-200 shadow-xl overflow-hidden transition-all duration-300 origin-top ${searchOpen ? 'opacity-100 scale-y-100 h-20' : 'opacity-0 scale-y-95 h-0'}`}>
        <div className="max-w-[800px] mx-auto px-6 h-full flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search whey isolate, pre-workouts, creatine..."
              className="w-full bg-zinc-50 text-zinc-900 placeholder-zinc-400 px-6 py-3 rounded-full outline-none border border-zinc-300 focus:border-[#E50914] transition-colors text-base shadow-inner"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-[#E50914] transition-colors" aria-label="Execute search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-2xl border-t border-zinc-200 shadow-2xl overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="py-2 overflow-y-auto max-h-[80vh]">
          {[
            { label: 'Home', href: '/' },
            { label: 'All Products', href: '/collections/shop-all' },
            { label: 'Pre-Workout', href: '/collections/pre-workout' },
            { label: 'Protein', href: '/collections/protein' },
            { label: 'Mass Gainer', href: '/collections/mass-gainer' },
            { label: 'Fish Oils', href: '/collections/fish-oils' },
            { label: 'Vitamins & Supplements', href: '/collections/vitamins-supplements' },
            { label: 'Contact', href: '/pages/contact' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-8 py-4 text-zinc-900 font-display text-lg tracking-widest uppercase border-b border-zinc-100 hover:text-[#E50914] hover:bg-zinc-50 hover:pl-10 transition-all duration-200"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
