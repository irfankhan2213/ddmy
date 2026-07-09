'use client'
import { motion } from 'framer-motion'

export default function OurProductsBanner() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
        >
          Performance Architecture
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-black tracking-tight uppercase leading-[0.9]"
        >
          Engineered For <br />
          <span className="text-[#C9A84C]">
            Excellence
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-zinc-500 text-sm md:text-base font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Every scoop, every pill, and every formula is meticulously crafted in certified facilities to guarantee raw power, uncompromised purity, and absolute results.
        </motion.p>
      </div>
    </section>
  )
}
