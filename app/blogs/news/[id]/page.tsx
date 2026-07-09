'use client'
import { useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const articlesContent: Record<string, {
  title: string
  date: string
  readTime: string
  author: string
  emoji: string
  accent: string
  content: string[]
}> = {
  'maximize-your-workout': {
    title: 'How to Maximize Your Pre-Workout Pump',
    date: 'July 5, 2026',
    readTime: '5 min read',
    author: 'Dr. Sarah Jameson',
    emoji: '⚡',
    accent: '#4ade80',
    content: [
      'The coveted "muscle pump" isn\'t just for aesthetics. Under the hood, this biological phenomenon represents cellular hydration, nutrient-dense blood flow delivery, and metabolic stimulation. Optimizing this state leads directly to better mechanical tension and accelerated muscle growth.',
      'To maximize your pre-workout pump, the first ingredient to master is L-Citrulline. Unlike standard Citrulline, look for pure L-Citrulline which doesn\'t contain malic acid fillers, giving you a full 7-8 grams of nitric oxide precursors. Nitric oxide relaxes blood vessels, dilating them to carry more oxygen and nutrients to active muscles.',
      'Hydration is the second crucial component. Muscles are roughly 75% water. When you train dehydrated, blood volume decreases, significantly reducing your pump potential. Pair L-Citrulline with electrolytes (Sodium, Potassium, Magnesium) and Glycerol to draw fluid directly inside muscle fibers (cellular volumization).',
      'Lastly, don\'t underestimate the role of focus. Ingredients like L-Tyrosine cross the blood-brain barrier to promote synthesis of dopamine and norepinephrine, heightening the mind-muscle connection. With enhanced focus, you recruit more muscle fibers per repetition, further compounding the pump.',
    ],
  },
  'protein-isolate-benefits': {
    title: 'The Truth About Whey Protein Isolate vs Concentrate',
    date: 'June 28, 2026',
    readTime: '4 min read',
    author: 'Coach Marcus Vance',
    emoji: '💪',
    accent: '#e07b39',
    content: [
      'When picking a protein powder, the options can be overwhelming. The primary choice most lifters face is between Whey Protein Isolate and Whey Protein Concentrate. While both derive from dairy, the refinement process sets them apart dramatically.',
      'Whey Protein Isolate undergoes a rigorous filtration process that removes almost all fat, cholesterol, and lactose. What remains is a highly purified powder that contains 90% or more protein by weight. This makes it extremely fast-digesting and perfect for post-workout muscle recovery when your body needs amino acids immediately.',
      'Whey Protein Concentrate, on the other hand, is less processed and typically contains 70-80% protein. The remaining percentage consists of fats, carbs, and lactose. While concentrate is more budget-friendly, it can cause bloating or digestive issues for lactose-sensitive individuals.',
      'If you are monitoring calories closely or want a protein that digests smoothly without bloating, Isolate is the clear winner. With just 115 calories and 28 grams of pure isolate per scoop, ISO-CRUSH provides maximum purity and utility for lean muscle building.',
    ],
  },
  'importance-of-organ-health': {
    title: 'Why Athletes Neglect Kidney & Liver Support',
    date: 'June 15, 2026',
    readTime: '6 min read',
    author: 'Dr. Sarah Jameson',
    emoji: '🫀',
    accent: '#C9A84C',
    content: [
      'In the pursuit of bigger lifts, faster run times, or leaner physiques, athletes place a massive load on their internal organs. While high protein intakes, pre-workout stimulants, and heavy supplementation support performance, they require the liver and kidneys to work overtime.',
      'The liver acts as your body\'s primary chemical processing plant. It breaks down supplements, metabolizes protein, and filters waste. When overloaded, liver enzymes rise, which can impact energy levels, joint health, and overall performance.',
      'The kidneys filter blood, regulating electrolytes and excreting urea (a byproduct of protein breakdown). Chronic dehydration combined with high protein intake forces kidneys to filter under high pressure, leading to long-term strain.',
      'A comprehensive organ support stack featuring Milk Thistle, N-Acetyl L-Cysteine (NAC), and kidney-cleansing herbs acts as insurance. By reducing oxidative stress and promoting detoxification, organ support ensures your body can continue to process supplements efficiently and sustain high performance for decades to come.',
    ],
  },
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const article = useMemo(() => articlesContent[params.id], [params.id])

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col justify-between">
        <AnnouncementBar />
        <Header />
        <div className="pt-32 text-center py-20">
          <h1 className="text-3xl font-black uppercase">Article Not Found</h1>
          <p className="text-zinc-500 mt-2">The article you are looking for does not exist.</p>
          <Link href="/blogs/news" className="mt-6 inline-block bg-white text-black px-6 py-3 font-bold rounded">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />

      <div className="pt-24 max-w-[800px] mx-auto px-6 pb-20">
        {/* Breadcrumbs */}
        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> /{' '}
          <Link href="/blogs/news" className="hover:text-white transition-colors">Blog</Link> /{' '}
          <span className="text-white">{article.title}</span>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-zinc-950 border mx-auto mb-6"
            style={{ borderColor: article.accent + '33' }}
          >
            {article.emoji}
          </div>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs text-zinc-500">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="text-zinc-400">Written by {article.author}</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-zinc-300 text-base md:text-lg leading-relaxed border-t border-zinc-900 pt-10">
          {article.content.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-zinc-900">
          <Link href="/blogs/news" className="text-sm font-bold uppercase tracking-wider text-[#C9A84C] hover:underline flex items-center gap-2">
            ← Back to All Articles
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
