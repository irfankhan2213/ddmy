'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-200 py-8 sm:py-16 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
        {/* Column 1: Logo */}
        <div className="flex flex-col items-start text-left gap-3 sm:gap-4 col-span-2 md:col-span-1">
          <Link href="/" className="inline-flex flex-col items-start leading-none group mb-2 text-left">
            <Image
              src="/images/logo.png"
              alt="Psycho Nutrition"
              width={170}
              height={60}
              className="h-9 sm:h-10 md:h-12 w-auto object-contain mb-2 brightness-0"
            />
            <span className="text-[#E50914] text-[10px] sm:text-xs font-display font-bold tracking-[0.3em] uppercase mt-1 text-left">
              Pure Performance • Las Vegas, NV
            </span>
          </Link>
          <p className="text-zinc-500 text-xs max-w-xs leading-relaxed text-left">
            Engineered sports nutrition crafted for athletes who demand clinical purity, transparent dosing, and uncompromising performance.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-zinc-900 mb-3 sm:mb-5">Quick Links</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-600">
            <li>
              <Link href="/collections/shop-all" className="hover:text-[#E50914] transition-colors">
                Arsenal Catalog
              </Link>
            </li>
            <li>
              <Link href="/blogs/news" className="hover:text-[#E50914] transition-colors">
                Science & Research
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="hover:text-[#E50914] transition-colors">
                Contact & Support
              </Link>
            </li>
            <li>
              <Link href="/pages/privacy-policy" className="hover:text-[#E50914] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/pages/terms-of-service" className="hover:text-[#E50914] transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h4 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-zinc-900 mb-3 sm:mb-5">Formulations</h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-600">
            <li>
              <Link href="/collections/pre-workout" className="hover:text-[#E50914] transition-colors">
                High-Stim Pre-Workout
              </Link>
            </li>
            <li>
              <Link href="/collections/protein" className="hover:text-[#E50914] transition-colors">
                Whey Isolate & Hydro
              </Link>
            </li>
            <li>
              <Link href="/collections/performance" className="hover:text-[#E50914] transition-colors">
                Pump & Performance
              </Link>
            </li>
            <li>
              <Link href="/collections/recovery" className="hover:text-[#E50914] transition-colors">
                Aminos & Recovery
              </Link>
            </li>
            <li>
              <Link href="/collections/vitality" className="hover:text-[#E50914] transition-colors">
                Vitality & Wellness
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Athlete Support */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="font-display font-bold text-sm sm:text-base uppercase tracking-wider text-zinc-900 mb-3 sm:mb-5">Athlete Support</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-red-50 text-[#E50914] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs text-zinc-600 leading-relaxed">
                <strong className="text-zinc-900 block font-semibold text-[13px]">PSYCHO NUTRITION</strong>
                5651 S Edmond Street<br />
                Las Vegas, NV 89118, U.S.A.
              </div>
            </li>
            <li className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-red-50 text-[#E50914] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:psychonutrition@yahoo.com" className="hover:text-[#E50914] transition-colors text-xs font-semibold text-zinc-700">
                psychonutrition@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright and compliance */}
      <div className="max-w-[1440px] mx-auto mt-8 sm:mt-14 pt-6 sm:pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-zinc-500">
        <div>
          © {new Date().getFullYear()} Psycho Nutrition. All rights reserved. Built for Elite Performance.
        </div>
        <div className="max-w-xl text-center md:text-right leading-relaxed text-zinc-400">
          *These statements have not been evaluated by the FSSAI or FDA. Products are not intended to diagnose, treat, cure, or prevent any medical condition.
        </div>
      </div>
    </footer>
  )
}
