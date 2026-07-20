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

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
    <header className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
      atTop ? 'top-9 bg-black border-b border-transparent' : 'top-0'
    } ${scrolled && !atTop ? 'bg-black/95 backdrop-blur-xl border-b border-zinc-800 shadow-2xl' : ''} ${
      hideHeader ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="w-full max-w-[1920px] mx-auto px-8 md:px-16 xl:px-24 h-[110px] grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Logo (Left) */}
        <Link href="/" className="flex-shrink-0 transition-transform duration-300 hover:scale-105 flex flex-col items-center justify-center leading-none">
          <div className="flex justify-center items-center h-10 mb-1">
            <span className="text-white font-black text-3xl md:text-4xl uppercase tracking-widest" style={{ transform: 'scaleX(1.5)' }}>DDMY</span>
          </div>
          <span className="text-white text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase">Nutrition</span>
        </Link>

        {/* Desktop Nav (Center) */}
        <nav className="hidden lg:flex items-center justify-center gap-10">
          <Link href="/" className="text-white text-[13px] font-bold tracking-[0.15em] hover:text-[#C9A84C] transition-colors uppercase relative group">
            Home
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <div className="relative py-7" onMouseEnter={() => setShopDropdown(true)} onMouseLeave={() => setShopDropdown(false)}>
            <button className="flex items-center gap-2 text-white text-[13px] font-bold tracking-[0.15em] hover:text-[#C9A84C] transition-colors uppercase relative group">
              Shop All
              <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${shopDropdown ? 'rotate-180 text-[#C9A84C]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            {/* Animated Dropdown */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 w-64 bg-black/95 backdrop-blur-2xl border border-zinc-800 rounded-b-xl shadow-2xl z-50 overflow-hidden transition-all duration-300 origin-top ${shopDropdown ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
              <div className="py-2">
                {[
                  { label: 'All Products', href: '/collections/shop-all' },
                  { label: 'Pre-Workout', href: '/collections/pre-workout' },
                  { label: 'Protein', href: '/collections/protein' },
                  { label: 'Mass Gainer', href: '/collections/mass-gainer' },
                  { label: 'Weight Gainer', href: '/collections/weight-gainer' },
                  { label: 'Amino Acids', href: '/collections/amino-acids' },
                  { label: 'Fish Oils', href: '/collections/fish-oils' },
                  { label: 'Vitamins & Supplements', href: '/collections/vitamins-supplements' },
                  { label: 'Essentials', href: '/collections/essentials' },
                ].map(item => (
                  <Link key={item.href} href={item.href} className="block px-6 py-3.5 text-sm font-semibold text-zinc-300 hover:bg-white/10 hover:text-white hover:pl-8 transition-all duration-300">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/collections/pre-workout" className="text-white text-[13px] font-bold tracking-[0.15em] hover:text-[#C9A84C] transition-colors uppercase relative group">
            Pre-Workout
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/collections/protein" className="text-white text-[13px] font-bold tracking-[0.15em] hover:text-[#C9A84C] transition-colors uppercase relative group">
            Protein
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/collections/mass-gainer" className="text-white text-[13px] font-bold tracking-[0.15em] hover:text-[#C9A84C] transition-colors uppercase relative group">
            Mass Gainer
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link href="/pages/contact" className="text-white text-[13px] font-bold tracking-[0.15em] hover:text-[#C9A84C] transition-colors uppercase relative group">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center justify-end gap-5">
          <button onClick={() => setSearchOpen(!searchOpen)} className={`transition-all duration-300 ${searchOpen ? 'text-[#C9A84C]' : 'text-white hover:text-[#C9A84C]'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth={1.5}></circle>
              <line x1="16.5" y1="16.5" x2="22" y2="22" strokeWidth={1.5}></line>
            </svg>
          </button>
          
          <Link href="/account" className="hidden sm:block text-white hover:text-[#C9A84C] transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" />
            </svg>
          </Link>
          
          <Link href="/cart" className="relative text-white hover:text-[#C9A84C] transition-all duration-300 flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#C9A84C] text-black text-[10px] font-black flex items-center justify-center shadow-[0_0_10px_rgba(201,168,76,0.6)]">0</span>
          </Link>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white hover:text-[#C9A84C]" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className={`absolute top-full left-0 right-0 bg-black/80 backdrop-blur-2xl border-t border-white/10 overflow-hidden transition-all duration-300 origin-top ${searchOpen ? 'opacity-100 scale-y-100 h-24' : 'opacity-0 scale-y-95 h-0'}`}>
        <div className="max-w-[800px] mx-auto px-6 h-full flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for supplements, proteins, pre-workouts..."
              className="w-full bg-white/5 text-white placeholder-zinc-500 px-6 py-4 rounded-full outline-none border border-white/10 focus:border-[#C9A84C] transition-colors text-lg shadow-inner"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-[#C9A84C] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="py-2 overflow-y-auto max-h-[80vh]">
          {[
            { label: 'Home', href: '/' },
            { label: 'Shop All', href: '/collections/shop-all' },
            { label: 'Pre-Workout', href: '/collections/pre-workout' },
            { label: 'Protein', href: '/collections/protein' },
            { label: 'Mass Gainer', href: '/collections/mass-gainer' },
            { label: 'Fish Oils', href: '/collections/fish-oils' },
            { label: 'Vitamins & Supplements', href: '/collections/vitamins-supplements' },
            { label: 'Essentials', href: '/collections/essentials' },
            { label: 'Contact', href: '/pages/contact' },
          ].map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-8 py-5 text-white text-base font-bold uppercase tracking-widest border-b border-white/5 hover:text-[#C9A84C] hover:bg-white/5 hover:pl-10 transition-all duration-300"
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
