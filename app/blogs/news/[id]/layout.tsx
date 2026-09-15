import { Metadata } from 'next'
import { articlesContent } from '@/data/articles'
import { SITE_URL } from '@/lib/constants'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = articlesContent[params.id]
  if (!article) return {}

  const url = `${SITE_URL}/blogs/news/${params.id}`

  return {
    title: article.title,
    description: `Read ${article.title} by ${article.author}. ${article.readTime}.`,
    openGraph: {
      title: `${article.title} | Psycho Nutrition`,
      description: `Read ${article.title} by ${article.author}. ${article.readTime}.`,
      url,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
    },
    alternates: {
      canonical: url,
    }
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
