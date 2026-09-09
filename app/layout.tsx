import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

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
  title: 'Psycho Nutrition – Elite Sports Supplements',
  description: 'Premium sports nutrition supplements by Psycho Nutrition. Pre-workouts, whey protein, mass gainers, vitamins & more. Lab tested, pure quality.',
  keywords: 'Psycho Nutrition, psychonutrition, whey protein isolate, mass gainer, pre workout, creatine, sports supplements',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
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
