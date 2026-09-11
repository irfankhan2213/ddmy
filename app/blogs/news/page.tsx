'use client'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

const articles = [
  {
    id: 'maximize-your-workout',
    title: 'How to Maximize Your Pre-Workout Pump',
    excerpt: 'Learn the science behind citrulline, tyrosine, and hydration to take your muscle pumps and focus to the next level.',
    date: 'July 5, 2026',
    readTime: '5 min read',
    author: 'Dr. Sarah Jameson',
    emoji: '⚡',
    accent: '#4ade80',
  },
  {
    id: 'protein-isolate-benefits',
    title: 'The Truth About Whey Protein Isolate vs Concentrate',
    excerpt: 'Why premium isolate is the gold standard for rapid digestion, low calories, and maximum muscle recovery post-workout.',
    date: 'June 28, 2026',
    readTime: '4 min read',
    author: 'Coach Marcus Vance',
    emoji: '💪',
    accent: '#e07b39',
  },
  {
    id: 'importance-of-organ-health',
    title: 'Why Athletes Neglect Kidney & Liver Support',
    excerpt: 'High protein diets and intensive training place heavy demand on organs. Discover how proper detoxification improves overall longevity.',
    date: 'June 15, 2026',
    readTime: '6 min read',
    author: 'Dr. Sarah Jameson',
    emoji: '🫀',
    accent: '#E50914',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <AnnouncementBar />
      <Header />

      <div className="pt-[144px] sm:pt-[156px] md:pt-[170px] max-w-[1000px] mx-auto px-6 pb-20">
        {/* Breadcrumbs */}
        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-8 text-center font-medium">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <span className="mx-2 text-zinc-300">/</span>
          <span className="text-zinc-900 font-bold">Research & Articles</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-display font-bold uppercase text-center tracking-wide mb-3 text-zinc-900">
          Science & Formulation Insights
        </h1>
        <p className="text-zinc-500 text-sm text-center max-w-md mx-auto mb-12">
          Your direct source for sports nutrition science, clinical ergogenic research, and transparent manufacturing standards.
        </p>

        {/* Article list */}
        <div className="space-y-6">
          {articles.map(article => (
            <article
              key={article.id}
              className="border border-zinc-200 bg-zinc-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-[#E50914] shadow-sm hover:shadow-md transition-all group"
            >
              {/* Graphic Icon representation */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl bg-white flex-shrink-0 border border-zinc-200 shadow-sm"
              >
                {article.emoji}
              </div>

              {/* Text content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span className="text-zinc-700 font-medium">By {article.author}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-display font-bold uppercase tracking-wide group-hover:text-[#E50914] transition-colors mb-2 text-zinc-900">
                  {article.title}
                </h2>

                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <span
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-zinc-900 group-hover:text-[#E50914] transition-colors"
                >
                  Read Clinical Article
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
