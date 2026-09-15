import { Metadata } from 'next'
import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { SITE_URL } from '@/lib/constants'

const pagesContent: Record<string, {
  title: string
  content: string[]
}> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: [
      'At Psycho Nutrition, we value your privacy. We collect information you provide directly to us (e.g. name, email address, payment details) when making a purchase or signing up for updates.',
      'We use this information to fulfill orders, process payments, communicate updates, and customize your experience. We do not sell or lease your personal information to third parties.',
      'We use cookies and similar tracking technologies to analyze site traffic, personalize content, and serve relevant advertisements. You can configure your browser to disable cookies if preferred.',
      'If you have any questions or would like to request removal of your personal data, contact us at psychonutrition@yahoo.com.',
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    content: [
      'Welcome to Psycho Nutrition. By visiting our site or purchasing products from us, you agree to be bound by the following terms and conditions.',
      'All products are subject to availability. We reserve the right to limit quantities or discontinue products without notice. Prices are subject to change.',
      'You agree to provide current, complete, and accurate purchase and account information for all purchases. We reserve the right to refuse any order.',
      'All content on this site, including text, logos, graphics, and product names, is the property of Psycho Nutrition and protected by intellectual property laws.',
    ],
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = pagesContent[params.slug]
  if (!page) return {}

  const url = `${SITE_URL}/pages/${params.slug}`

  return {
    title: `${page.title} | Psycho Nutrition`,
    description: `Read our ${page.title} to learn more about Psycho Nutrition.`,
    openGraph: {
      title: `${page.title} | Psycho Nutrition`,
      description: `Read our ${page.title} to learn more about Psycho Nutrition.`,
      url,
      type: 'website',
    },
    alternates: {
      canonical: url,
    }
  }
}

export default function InfoPage({ params }: { params: { slug: string } }) {
  const page = pagesContent[params.slug]

  if (!page) {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col justify-between">
        <AnnouncementBar />
        <Header />
        <div className="text-center py-16 sm:py-24">
          <h1 className="text-3xl font-black uppercase">Page Not Found</h1>
          <p className="text-zinc-500 mt-2">The page you are looking for does not exist.</p>
          <Link href="/" className="mt-6 inline-block bg-white text-black px-6 py-3 font-bold rounded">
            Back to Home
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

      <div className="pt-6 sm:pt-8 md:pt-10 max-w-[800px] mx-auto px-4 sm:px-6 pb-20">
        {/* Breadcrumbs */}
        <div className="text-zinc-500 text-xs uppercase tracking-wider mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link> /{' '}
          <span className="text-white">{page.title}</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
          {page.title}
        </h1>

        <div className="space-y-6 text-zinc-300 text-base leading-relaxed border-t border-zinc-900 pt-8">
          {page.content.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
