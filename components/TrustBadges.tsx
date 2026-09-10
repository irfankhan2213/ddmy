'use client'

const badges = [
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-7 h-7 sm:w-10 sm:h-10">
        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="3" fill="none"/>
        <text x="50%" y="38%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="900">GMP</text>
        <path d="M10 40 Q30 55 50 40" stroke="currentColor" strokeWidth="3" fill="none"/>
      </svg>
    ),
    label: 'GMP CERTIFIED',
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-7 h-7 sm:w-10 sm:h-10">
        <path d="M30 5 L35 20 H50 L38 29 L43 44 L30 35 L17 44 L22 29 L10 20 H25 Z" fill="none" stroke="currentColor" strokeWidth="3"/>
        <circle cx="30" cy="30" r="8" fill="none" stroke="currentColor" strokeWidth="3"/>
      </svg>
    ),
    label: 'LAB TESTED',
  },
  {
    icon: (
      <svg viewBox="0 0 60 60" className="w-10 h-10">
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="3"/>
        <path d="M20 30 L28 38 L42 22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: '100% AUTHENTIC',
  },
]

const repeatedBadges = [...badges, ...badges, ...badges, ...badges, ...badges]

export default function TrustBadges() {
  return (
    <div className="bg-white border-y border-zinc-200 py-3 sm:py-6 overflow-hidden shadow-sm relative z-10">
      <div className="badge-ticker flex items-center gap-12 sm:gap-24">
        {repeatedBadges.map((badge, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center gap-1.5 sm:gap-3 min-w-[80px] sm:min-w-[120px]">
            <div className="text-zinc-900 hover:text-[#E50914] transition-colors">{badge.icon}</div>
            <span className="text-[9px] sm:text-xs font-display font-bold tracking-[0.15em] sm:tracking-[0.2em] text-zinc-900 text-center whitespace-nowrap uppercase">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
