'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white text-zinc-900 border-t border-zinc-200 py-16 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex flex-col leading-none group mb-2">
            <Image
              src="/images/logo.png"
              alt="Psycho Nutrition"
              width={160}
              height={60}
              className="h-9 md:h-11 w-auto object-contain mb-2 brightness-0"
            />
            <span className="text-[#E50914] text-[10px] font-display font-bold tracking-[0.3em] uppercase mt-1">
              Pure Performance • India
            </span>
          </Link>
          <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
            Engineered sports nutrition crafted for athletes who demand clinical purity, transparent dosing, and uncompromising performance.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-display font-bold text-base uppercase tracking-wider text-zinc-900 mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
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
          <h4 className="font-display font-bold text-base uppercase tracking-wider text-zinc-900 mb-5">Formulations</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
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
              <Link href="/collections/mass-gainer" className="hover:text-[#E50914] transition-colors">
                Anabolic Mass Matrix
              </Link>
            </li>
            <li>
              <Link href="/collections/vitamins-supplements" className="hover:text-[#E50914] transition-colors">
                Vitamins & Performance
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Athlete Support */}
        <div>
          <h4 className="font-display font-bold text-base uppercase tracking-wider text-zinc-900 mb-5">Athlete Support</h4>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-sm bg-red-50 text-[#E50914] flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:support@psychonutrition.in" className="hover:text-[#E50914] transition-colors">
                support@psychonutrition.in
              </a>
            </li>
            <li className="text-xs text-zinc-500 leading-relaxed pt-2">
              Batch Verification & Lab Reports available for all manufactured production lots.
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright and compliance */}
      <div className="max-w-[1440px] mx-auto mt-14 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
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
