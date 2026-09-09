'use client'

const messages = [
  'EXPLORE PSYCHO NUTRITION OFFICIAL ARSENAL',
  'FREE DOMESTIC SHIPPING ON ORDERS OVER $50',
  '100% PURE LAB TESTED & AUTHENTIC RAW INGREDIENTS',
  'ENGINEERED FOR ELITE STRENGTH & METABOLIC POWER',
  'ZERO FILLERS • CLINICAL DOSES • UNCOMPROMISING PURITY',
  // Duplicate set for seamless infinite scroll
  'EXPLORE PSYCHO NUTRITION OFFICIAL ARSENAL',
  'FREE DOMESTIC SHIPPING ON ORDERS OVER $50',
  '100% PURE LAB TESTED & AUTHENTIC RAW INGREDIENTS',
  'ENGINEERED FOR ELITE STRENGTH & METABOLIC POWER',
  'ZERO FILLERS • CLINICAL DOSES • UNCOMPROMISING PURITY',
]

export default function AnnouncementBar() {
  return (
    <div className="bg-black border-b border-zinc-800 overflow-hidden h-10 flex items-center shadow-inner relative z-50">
      <div className="ticker-track flex items-center gap-16 whitespace-nowrap">
        {messages.map((text, i) => (
          <div key={i} className="flex items-center gap-16 flex-shrink-0">
            <span className="text-zinc-200 font-display text-[13px] font-bold tracking-[0.18em] uppercase">
              {text}
            </span>
            <span className="text-[#E50914] text-lg leading-none drop-shadow-[0_0_8px_rgba(229,9,20,0.8)]">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

