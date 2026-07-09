'use client'

const messages = [
  'FREE SHIPPING ORDERS OVER ₹999',
  'LAB TESTED & QUALITY ASSURED',
  'MADE FOR INDIA — PROUDLY INDIAN BRAND',
  '100% AUTHENTIC SUPPLEMENTS',
  'TRUSTED BY 10,000+ ATHLETES',
  // Duplicate set for seamless infinite scroll
  'FREE SHIPPING ORDERS OVER ₹999',
  'LAB TESTED & QUALITY ASSURED',
  'MADE FOR INDIA — PROUDLY INDIAN BRAND',
  '100% AUTHENTIC SUPPLEMENTS',
  'TRUSTED BY 10,000+ ATHLETES',
]

export default function AnnouncementBar() {
  return (
    <div className="bg-zinc-950 border-b border-zinc-800/50 overflow-hidden h-10 flex items-center shadow-inner">
      <div className="ticker-track flex items-center gap-16 whitespace-nowrap">
        {messages.map((text, i) => (
          <div key={i} className="flex items-center gap-16 flex-shrink-0">
            <span className="text-zinc-300 text-xs font-semibold tracking-wider uppercase">
              {text}
            </span>
            <span className="text-amber-500 text-lg leading-none">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
