import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/constants'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Psycho Nutrition – Elite Sports Supplements',
    template: '%s | Psycho Nutrition'
  },
  description: 'Premium sports nutrition supplements by Psycho Nutrition. Pre-workouts, whey protein, mass gainers, vitamins & more. Lab tested, pure quality.',
  keywords: ['Psycho Nutrition', 'psychonutrition', 'whey protein isolate', 'mass gainer', 'pre workout', 'creatine', 'sports supplements'],
  authors: [{ name: 'Psycho Nutrition' }],
  creator: 'Psycho Nutrition',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Psycho Nutrition – Elite Sports Supplements',
    description: 'Premium sports nutrition supplements by Psycho Nutrition. Pre-workouts, whey protein, mass gainers, vitamins & more. Lab tested, pure quality.',
    siteName: 'Psycho Nutrition',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Psycho Nutrition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psycho Nutrition – Elite Sports Supplements',
    description: 'Premium sports nutrition supplements by Psycho Nutrition. Pre-workouts, whey protein, mass gainers, vitamins & more. Lab tested, pure quality.',
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased font-sans selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  )
}
