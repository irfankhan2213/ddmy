'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Mass Gainer',
    href: '/collections/mass-gainer',
    description: 'Anabolic High Calorie Gainers',
    tag: 'DDMY Elite Line'
  },
  {
    label: 'Pre-Workout',
    href: '/collections/pre-workout',
    description: 'CRANK Fruit Punch & Energy Formula',
    tag: 'DDMY Elite Line'
  },
  {
    label: 'Protein',
    href: '/collections/protein',
    description: 'Pure Isolate & 100% Whey',
    tag: 'DDMY Elite Line'
  },
  {
    label: 'Fish Oils & Essentials',
    href: '/collections/fish-oils',
    description: 'Omega 3 and recovery essentials',
    tag: 'DDMY Vitality'
  },
  {
    label: 'Vitamins & Supplements',
    href: '/collections/vitamins-supplements',
    description: 'ZMA Sleep & Organ Health Support',
    tag: 'DDMY Vitality'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function CategoryGrid() {
  return (
    <section className="bg-white pb-32">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {/* Top row: 3 large grid columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {categories.slice(0, 3).map((cat) => (
              <motion.div key={cat.href} variants={itemVariants}>
                <Link
                  href={cat.href}
                  className="relative overflow-hidden rounded-md h-[420px] group flex flex-col justify-end p-10 transition-all duration-500 hover:shadow-2xl block"
                >
                  {/* Full Card Picture Placeholder */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="w-full h-full bg-zinc-200 border-4 border-dashed border-zinc-400 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
                      <span className="text-zinc-500 font-bold text-lg md:text-xl tracking-[0.3em] uppercase">Picture Here</span>
                    </div>
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A84C]">{cat.tag}</span>
                    <h3 className="text-3xl font-black mt-2 leading-none uppercase text-white">{cat.label}</h3>
                    <p className="text-sm mt-3 text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      Explore Category
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom row: 2 grid columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.slice(3, 5).map((cat) => (
              <motion.div key={cat.href} variants={itemVariants}>
                <Link
                  href={cat.href}
                  className="relative overflow-hidden rounded-md h-[360px] group flex flex-col justify-end p-10 transition-all duration-500 hover:shadow-2xl block"
                >
                  {/* Full Card Picture Placeholder */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="w-full h-full bg-zinc-200 border-4 border-dashed border-zinc-400 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 ease-out">
                      <span className="text-zinc-500 font-bold text-xl tracking-[0.3em] uppercase">Picture Here</span>
                    </div>
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A84C]">{cat.tag}</span>
                    <h3 className="text-3xl font-black mt-2 leading-none uppercase text-white">{cat.label}</h3>
                    <p className="text-sm mt-3 text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{cat.description}</p>
                    
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      Explore Category
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
