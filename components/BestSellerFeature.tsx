'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    id: 1,
    title: 'Multi-Stage Energy',
    bullets: ['175mg of Fast Release Caffeine', '70mg Infinergy™ Slow Release Caffeine'],
    top: '36%',
    width: '45%',
    side: 'left',
  },
  {
    id: 2,
    title: 'Triple System Pump',
    bullets: ['7g of Citrulline', '1g of Taurine', '1g of AgMass™'],
    top: '65%',
    width: '42%',
    side: 'right',
  },
  {
    id: 3,
    title: 'AstraGin® Bioavailability',
    bullets: ['Aids in complete nutrient absorption', 'Increases hydration delivery directly to muscle cells'],
    top: '75%',
    width: '46%',
    side: 'left',
  },
]

export default function BestSellerFeature() {
  return (
    <section className="bg-black py-24 overflow-hidden border-t border-zinc-900">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[40px] font-bold text-center text-white tracking-widest uppercase mb-20 font-mono"
        >
          BEST SELLER
        </motion.h2>

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
                src="/images/ChatGPT Image Jul 9, 2026, 03_48_58 PM.png" 
                alt="Nitro Flow Pre-Workout"
                fill
                className="object-contain"
                priority
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
                    className={`absolute bottom-0 h-[1px] bg-zinc-400 ${f.side === 'left' ? 'left-0' : 'right-0'}`}
                  />
                  
                  {/* The Dot */}
                  <motion.div 
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: "spring" } }
                    }}
                    className={`absolute bottom-0 translate-y-1/2 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center font-black text-[11px] shadow-[0_0_10px_rgba(255,255,255,0.3)] pointer-events-auto ${
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
                    className={`absolute bottom-2 w-[400px] pointer-events-auto flex flex-col ${
                      f.side === 'left' ? 'left-0 items-start' : 'right-0 items-end'
                    }`}
                  >
                    <div className="text-left">
                      <h3 className="text-white font-bold text-[17px] mb-2 tracking-wide">
                        {f.title}
                      </h3>
                      <div className="space-y-1.5 text-[#a1a1aa] text-[13px] font-medium">
                        {f.bullets.map((b, i) => (
                          <div key={i}>• {b}</div>
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
        <div className="lg:hidden flex flex-col items-center gap-12 mt-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[500px] aspect-square mb-8"
          >
            <Image 
              src="/images/ChatGPT Image Jul 9, 2026, 03_48_58 PM.png" 
              alt="Nitro Flow Pre-Workout"
              fill
              className="object-contain"
            />
          </motion.div>
          
          <div className="space-y-10 w-full px-4">
            {features.map((f, i) => (
              <motion.div 
                key={f.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 bg-white text-black rounded-full font-black text-sm mb-4">
                  {f.id}
                </div>
                <h3 className="text-white font-bold text-lg mb-3 tracking-wide">{f.title}</h3>
                <div className="space-y-2 text-[#a1a1aa] text-sm font-medium">
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
