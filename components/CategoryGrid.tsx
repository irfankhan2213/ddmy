'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    label: 'BUILD MUSCLE',
    count: 5,
    href: '/collections/mass-gainer',
  },
  {
    label: 'PRE-WORKOUT ENERGY',
    count: 4,
    href: '/collections/pre-workout',
  },
  {
    label: 'PURE PROTEIN ISOLATE',
    count: 6,
    href: '/collections/protein',
  },
  {
    label: 'DAILY ESSENTIALS',
    count: 4,
    href: '/collections/fish-oils',
  },
  {
    label: 'VITALITY & RECOVERY',
    count: 5,
    href: '/collections/vitamins-supplements',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const }
  }
}

export default function CategoryGrid() {
  return (
    <section className="bg-white pb-24 pt-8 relative border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-zinc-200">
          <div>
            <span className="text-[#E50914] font-display text-xs tracking-[0.25em] uppercase font-bold block mb-1">
              CATEGORY DIRECTORY
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-wider uppercase text-zinc-900">
              EXPLORE BY GOAL
            </h2>
          </div>
          <Link
            href="/collections/shop-all"
            className="mt-3 md:mt-0 inline-flex items-center gap-2 text-xs font-display tracking-widest uppercase text-zinc-600 hover:text-[#E50914] transition-colors"
          >
            VIEW ALL COLLECTIONS
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Top row: 3 cards (matching Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {categories.slice(0, 3).map((cat) => (
              <motion.div key={cat.href} variants={itemVariants}>
                <Link
                  href={cat.href}
                  className="group relative overflow-hidden rounded-2xl h-[280px] md:h-[300px] bg-gradient-to-b from-[#18181c] to-[#0d0d10] border border-white/5 block shadow-md hover:shadow-xl hover:border-red-600/30 transition-all duration-300"
                >
                  {/* Subtle ambient accent glow */}
                  <div className="absolute -right-8 -top-8 w-44 h-44 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Glassmorphic Box (Matching Image 2) */}
                  <div className="absolute inset-x-5 bottom-5 z-20 bg-white/45 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg border border-white/40">
                    <h4 className="font-extrabold text-sm md:text-base tracking-wider uppercase text-zinc-950 mb-0.5 font-display">
                      {cat.label}
                    </h4>
                    <p className="text-xs text-zinc-800 font-medium mb-3">
                      Total: {cat.count}
                    </p>
                    <span className="inline-block bg-[#ccff00] text-black font-bold text-xs uppercase px-7 py-2 rounded-full shadow-md group-hover:brightness-105 transition-all">
                      View all
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 cards (matching Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.slice(3, 5).map((cat) => (
              <motion.div key={cat.href} variants={itemVariants}>
                <Link
                  href={cat.href}
                  className="group relative overflow-hidden rounded-2xl h-[280px] md:h-[300px] bg-gradient-to-b from-[#18181c] to-[#0d0d10] border border-white/5 block shadow-md hover:shadow-xl hover:border-red-600/30 transition-all duration-300"
                >
                  {/* Subtle ambient accent glow */}
                  <div className="absolute -right-8 -top-8 w-44 h-44 bg-red-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/20 transition-all" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Glassmorphic Box (Matching Image 2) */}
                  <div className="absolute inset-x-8 bottom-5 z-20 bg-white/45 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg border border-white/40">
                    <h4 className="font-extrabold text-sm md:text-base tracking-wider uppercase text-zinc-950 mb-0.5 font-display">
                      {cat.label}
                    </h4>
                    <p className="text-xs text-zinc-800 font-medium mb-3">
                      Total: {cat.count}
                    </p>
                    <span className="inline-block bg-[#ccff00] text-black font-bold text-xs uppercase px-7 py-2 rounded-full shadow-md group-hover:brightness-105 transition-all">
                      View all
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
