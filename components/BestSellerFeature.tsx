'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import cloudinaryImages from '@/data/cloudinary-images.json'

const ANATOMY_IMAGE_URL =
  (cloudinaryImages as Record<string, string>)['best_seller_anatomy.png'] ||
  'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_1000/v1788965297/psycho_nutrition/psycho_best_seller_citrulline_anatomy_1788965261.png'

const features = [
  {
    id: 1,
    title: 'Pure L-Citrulline',
    bullets: [
      'Nitric Oxide Precursor',
      'Dietary Supplement',
    ],
    top: '36%',
    width: '45%',
    side: 'left',
  },
  {
    id: 2,
    title: 'Pump • Endurance • Recovery',
    bullets: [
      'Supports Intense Muscle Pumps',
      'Promotes Athletic Training Endurance',
      'Aids Fast Post-Workout Recovery',
    ],
    top: '65%',
    width: '42%',
    side: 'right',
  },
  {
    id: 3,
    title: '40 Servings • Net Weight 100g',
    bullets: [
      '40 Measured Servings per Tub',
      'Net Weight 100gm Container',
      'Easily Stackable with Any Pre-Workout',
    ],
    top: '75%',
    width: '46%',
    side: 'left',
  },
]

export default function BestSellerFeature() {
  return (
    <section className="bg-black py-12 sm:py-24 overflow-hidden border-t border-zinc-900 relative">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center mb-8 sm:mb-16">
          <span className="text-red-600 font-display text-xs tracking-[0.25em] uppercase font-bold block mb-1">
            LAB FORMULA TELEMETRY
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center text-white tracking-wider uppercase"
          >
            BEST SELLER ANATOMY
          </motion.h2>
        </div>

        {/* Desktop View with Lines */}
        <div className="hidden lg:block relative w-full h-[700px]">
          
          {/* Centered Image - Enlarged */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            <div className="relative w-[800px] h-[800px] scale-110">
              <Image 
                src={ANATOMY_IMAGE_URL} 
                alt="Psycho Nutrition Pure L-Citrulline"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(229,9,20,0.15)]"
                priority
                unoptimized={true}
              />
            </div>
          </motion.div>

          {/* Features and Connecting Lines */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {features.map((f, i) => (
              <motion.div 
                key={f.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.2, delayChildren: i * 0.3 } }
                }}
                className={`absolute flex items-end ${f.side === 'left' ? 'left-0' : 'right-0'}`}
                style={{ top: f.top, width: f.width }}
              >
                {/* The Line Container */}
                <div className="relative w-full h-[1px]">
                  
                  {/* The Animated Horizontal Line */}
                  <motion.div 
                    variants={{
                      hidden: { width: "0%" },
                      visible: { width: "100%", transition: { duration: 0.8, ease: "easeInOut" } }
                    }}
                    className={`absolute bottom-0 h-[1.5px] bg-gradient-to-r from-red-600 via-red-500 to-zinc-700 ${f.side === 'left' ? 'left-0' : 'right-0'}`}
                  />
                  
                  {/* The Dot */}
                  <motion.div 
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: "spring" } }
                    }}
                    className={`absolute bottom-0 translate-y-1/2 w-7 h-7 bg-[#E50914] text-white rounded-full flex items-center justify-center font-display font-bold text-sm shadow-[0_0_18px_rgba(229,9,20,0.85)] pointer-events-auto ${
                      f.side === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    }`}
                  >
                    {f.id}
                  </motion.div>

                  {/* The Text Block */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className={`absolute bottom-3 w-[400px] pointer-events-auto flex flex-col ${
                      f.side === 'left' ? 'left-0 items-start' : 'right-0 items-end'
                    }`}
                  >
                    <div className="text-left bg-black/60 backdrop-blur-sm p-3 rounded-md border border-white/5">
                      <h3 className="text-white font-display text-xl mb-1 tracking-wide uppercase">
                        {f.title}
                      </h3>
                      <div className="space-y-1 text-zinc-400 text-xs font-medium">
                        {f.bullets.map((b, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="text-red-500">•</span> {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View (Stacked) */}
        <div className="lg:hidden flex flex-col items-center gap-6 sm:gap-10 mt-4 sm:mt-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-square mb-2 sm:mb-4"
          >
            <Image 
              src={ANATOMY_IMAGE_URL} 
              alt="Psycho Nutrition Pure L-Citrulline"
              fill
              className="object-contain"
              unoptimized={true}
            />
          </motion.div>
          
          <div className="space-y-4 sm:space-y-6 w-full px-1 sm:px-2">
            {features.map((f, i) => (
              <motion.div 
                key={f.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#0E0E12] border border-white/5 rounded-md p-4 sm:p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 bg-[#E50914] text-white rounded-full font-display font-bold text-sm mb-3 shadow-[0_0_15px_rgba(229,9,20,0.6)]">
                  {f.id}
                </div>
                <div className="text-white font-display text-lg sm:text-xl mb-1.5 sm:mb-2 tracking-wide uppercase font-bold">{f.title}</div>
                <div className="space-y-1.5 text-zinc-400 text-xs font-medium">
                  {f.bullets.map((b, i) => (
                    <div key={i}>{b}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
