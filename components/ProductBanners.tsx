'use client'
import Image from 'next/image'
import Link from 'next/link'

const bannerData = [
  {
    title: 'Crank Pre-Workout',
    subtitle: 'EXPLOSIVE ENERGY',
    image: '/images/new-product.png',
    href: '/products/crank-pre-workout-250g',
    bg: 'linear-gradient(180deg, #1e0208 0%, #080002 100%)',
    accentColor: '#f43f5e',
    callouts: [
      { text: 'EXPLOSIVE PUMP', x: '15%', y: '35%', align: 'left' },
      { text: 'LASER FOCUS', x: '10%', y: '60%', align: 'left' },
      { text: 'ZERO CRASH', x: '70%', y: '78%', align: 'right' }
    ],
    glowClass: 'bg-rose-500/10',
    iconPath: (
      <svg className="w-5 h-5 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Whey Isolate',
    subtitle: 'PURE RECOVERY',
    image: 'https://www.ddmynutrition.in/assets/Pimages/resized_1740480843-4761.jpg',
    href: '/products/whey-protein-isolate-2kg',
    bg: 'linear-gradient(180deg, #1c1100 0%, #070400 100%)',
    accentColor: '#C9A84C',
    callouts: [
      { text: '28G PURE ISOLATE', x: '10%', y: '28%', align: 'left' },
      { text: 'EASY DIGESTION', x: '12%', y: '52%', align: 'left' },
      { text: 'FAST RECOVERY', x: '68%', y: '72%', align: 'right' }
    ],
    glowClass: 'bg-amber-500/10',
    iconPath: (
      <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Anabolic Gainer',
    subtitle: 'MASSIVE GAINS',
    image: 'https://www.ddmynutrition.in/assets/Pimages/resized_1733734586-5898.jpg',
    href: '/products/anabolic-gainer-5kg',
    bg: 'linear-gradient(180deg, #021a0e 0%, #000703 100%)',
    accentColor: '#10b981',
    callouts: [
      { text: 'HIGH CALORIES', x: '10%', y: '30%', align: 'left' },
      { text: 'COMPLEX CARBS', x: '8%', y: '58%', align: 'left' },
      { text: 'MAXIMUM MASS', x: '72%', y: '75%', align: 'right' }
    ],
    glowClass: 'bg-emerald-500/10',
    iconPath: (
      <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Fish Oil Softgels',
    subtitle: 'DAILY ESSENTIALS',
    image: 'https://www.ddmynutrition.in/assets/Pimages/resized_1766489842-4591.jpg',
    href: '/products/fish-oil-softgel',
    bg: 'linear-gradient(180deg, #021124 0%, #00040a 100%)',
    accentColor: '#3b82f6',
    callouts: [
      { text: 'OMEGA-3 RICH', x: '12%', y: '32%', align: 'left' },
      { text: 'JOINT HEALTH', x: '10%', y: '54%', align: 'left' },
      { text: 'HEART SUPPORT', x: '70%', y: '70%', align: 'right' }
    ],
    glowClass: 'bg-blue-500/10',
    iconPath: (
      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
]

export default function ProductBanners() {
  return (
    <section className="bg-black py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {bannerData.map((banner, idx) => (
          <div
            key={idx}
            className="relative h-[650px] overflow-hidden border-r border-b border-zinc-900 group"
            style={{ background: banner.bg }}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute inset-0 transition-opacity duration-700 opacity-40 group-hover:opacity-75 blur-[120px] ${banner.glowClass}`} />

            {/* Title / Header */}
            <div className="absolute top-10 left-8 right-8 z-20">
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: banner.accentColor }}>
                {banner.subtitle}
              </span>
              <h3 className="text-3xl font-black text-white mt-1 uppercase tracking-tight leading-none">
                {banner.title}
              </h3>
            </div>

            {/* Floating Product Bottle in center */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-transform duration-500 group-hover:scale-105">
              <div className="relative w-[180px] h-[240px] mt-10 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
            </div>

            {/* Custom SVG Callouts / Lines connecting text to bottle */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {banner.callouts.map((callout, cIdx) => (
                <div
                  key={cIdx}
                  className="absolute"
                  style={{ left: callout.x, top: callout.y }}
                >
                  <div className={`flex items-center gap-2 ${callout.align === 'right' ? 'flex-row-reverse' : ''}`}>
                    {/* Badge Pill */}
                    <span
                      className="text-[10px] font-black tracking-widest text-white px-3 py-1.5 rounded-full uppercase border shadow-md whitespace-nowrap"
                      style={{
                        background: `${banner.accentColor}dd`,
                        borderColor: banner.accentColor,
                      }}
                    >
                      {callout.text}
                    </span>

                    {/* Styled Connecting Line */}
                    <div className="w-8 h-0.5 bg-white/40 relative">
                      <div
                        className="absolute w-1.5 h-1.5 rounded-full bg-white"
                        style={{
                          left: callout.align === 'right' ? '0' : '100%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Add To Cart Button at bottom left */}
            <Link
              href={banner.href}
              className="absolute bottom-8 left-8 z-30 w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center hover:bg-amber-400 hover:scale-110 active:scale-95 transition-all shadow-lg animate-pulse"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </Link>

            {/* Decorative Icon inside background */}
            <div className="absolute bottom-8 right-8 z-10 opacity-25 group-hover:opacity-50 transition-opacity">
              {banner.iconPath}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
