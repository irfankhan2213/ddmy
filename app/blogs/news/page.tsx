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
    accent: '#C9A84C',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <AnnouncementBar />
      <Header />

      <div className="pt-24 max-w-[1000px] mx-auto px-6 pb-20">
        {/* Breadcrumbs */}
        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-8 text-center">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> /{' '}
          <span className="text-white">Blog</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black uppercase text-center tracking-wide mb-4">News & Articles</h1>
        <p className="text-zinc-400 text-sm text-center max-w-md mx-auto mb-12">
          Your source for the latest sports nutrition science, training guides, and product insights from the Nitrogen team.
        </p>

        {/* Article list */}
        <div className="space-y-10">
          {articles.map(article => (
            <article
              key={article.id}
              className="border border-zinc-900 bg-zinc-900/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-zinc-800 transition-all group"
            >
              {/* Graphic Icon representation */}
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl bg-zinc-950 flex-shrink-0 border"
                style={{ borderColor: article.accent + '22' }}
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
                  <span className="text-zinc-400">By {article.author}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-black uppercase group-hover:text-[#C9A84C] transition-colors mb-2">
                  {article.title}
                </h2>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                <Link
                  href={`/blogs/news/${article.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#C9A84C] transition-colors"
                >
                  Read Full Article
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
