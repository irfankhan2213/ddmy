'use client'
import { useMemo } from 'react'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { articlesContent } from '@/data/articles'

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const article = useMemo(() => articlesContent[params.id], [params.id])

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col justify-between">
        <AnnouncementBar />
        <Header />
        <div className="text-center py-16 sm:py-24">
          <h1 className="text-3xl font-black uppercase">Article Not Found</h1>
          <p className="text-zinc-500 mt-2">The article you are looking for does not exist.</p>
          <Link href="/blogs/news" className="mt-6 inline-block bg-[#E50914] hover:bg-red-600 text-white font-display text-base tracking-wider px-6 py-3 rounded-sm uppercase transition-colors">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const articleJsonLd = article ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "datePublished": new Date(article.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Psycho Nutrition",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thepsychonutrition.com/images/logo.png"
      }
    }
  } : null;

  return (
    <main className="min-h-screen bg-black text-white">
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      <AnnouncementBar />
      <Header />

      <div className="pt-6 sm:pt-8 md:pt-10 max-w-[800px] mx-auto px-4 sm:px-6 pb-20">
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
          <Link href="/blogs/news" className="text-sm font-bold uppercase tracking-wider text-[#E50914] hover:underline flex items-center gap-2">
            ← Back to All Articles
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}
