'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-900 py-16 px-6">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-block">
            <Image
              src="https://www.ddmynutrition.in/website/image/demo/logos/website.png"
              alt="DDMY Nutrition Logo"
              width={140}
              height={48}
              className="h-10 w-auto object-contain mb-2"
            />
          </Link>
          <p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
            Premium sports supplements engineered for elite athletes who demand absolute purity, power, and performance.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Quick links</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li>
              <Link href="/collections/shop-all" className="hover:text-white transition-colors">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/pages/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/pages/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Categories</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li>
              <Link href="/collections/pre-workout" className="hover:text-white transition-colors">
                Pre-Workout
              </Link>
            </li>
            <li>
              <Link href="/collections/protein" className="hover:text-white transition-colors">
                Protein
              </Link>
            </li>
            <li>
              <Link href="/collections/mass-gainer" className="hover:text-white transition-colors">
                Mass Gainer
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Information */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-zinc-400">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:support@ddmynutrition.in" className="hover:text-white transition-colors">
                support@ddmynutrition.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright and compliance */}
      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div>
          © {new Date().getFullYear()}, DDMY Nutrition. All rights reserved.
        </div>
        <div className="max-w-xl text-center md:text-right leading-relaxed opacity-60">
          *These statements have not been evaluated by the FSSAI or FDA. These products are not intended to diagnose, treat, cure, or prevent any disease.
        </div>
      </div>
    </footer>
  )
}
