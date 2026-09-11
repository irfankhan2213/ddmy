'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { collections } from '@/data/collections'
import { products } from '@/data/products'
import { optimizeCloudinaryUrl } from '@/lib/cloudinary'

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
  const cards = collections.map(c => ({
    ...c,
    href: `/collections/${c.id}`,
    count: products.filter(p => p.category === c.category).length,
  }))

  return (
    <section className="bg-white pb-12 sm:pb-24 pt-6 sm:pt-8 relative border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-3 sm:pb-4 border-b border-zinc-200">
          <div>
            <span className="text-[#E50914] font-display text-xs tracking-[0.25em] uppercase font-bold block mb-1">
              SHOP BY GOAL
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold tracking-wider uppercase text-zinc-900">
              FEATURED COLLECTIONS
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
          {/* Single swipe carousel on mobile (all collections), 3+2 grid on desktop */}
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 sm:gap-6 md:grid md:grid-cols-6 md:overflow-visible md:pb-0 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((cat, i) => (
              <motion.div
                key={cat.href}
                variants={itemVariants}
                className={`min-w-[74vw] sm:min-w-[54vw] shrink-0 snap-center md:min-w-0 ${i < 3 ? 'md:col-span-2' : 'md:col-span-3'}`}
              >
                <Link
                  href={cat.href}
                  className="group relative overflow-hidden rounded-xl sm:rounded-2xl h-[260px] sm:h-[340px] md:h-[420px] bg-[#0d0d10] border border-white/5 block shadow-md hover:shadow-xl hover:border-red-600/30 transition-all duration-300"
                >
                  {/* Collection image */}
                  <Image
                    src={optimizeCloudinaryUrl(cat.image, { width: 700 })}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 74vw, 33vw"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                  {/* Floating Glassmorphic Box */}
                  <div className="absolute inset-x-3 sm:inset-x-5 bottom-3 sm:bottom-5 z-20 bg-white/45 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center shadow-lg border border-white/40">
                    <h4 className="font-extrabold text-xs sm:text-sm md:text-base tracking-wider uppercase text-zinc-950 mb-1 font-display">
                      {cat.name}
                    </h4>
                    <p className="text-zinc-800 text-[10px] sm:text-xs font-medium mb-2 sm:mb-3">
                      Total: {cat.count}
                    </p>
                    <span className="inline-block bg-[#ccff00] text-black font-bold text-[10px] sm:text-xs uppercase px-4 sm:px-7 py-1.5 sm:py-2 rounded-full shadow-md group-hover:brightness-105 transition-all">
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
