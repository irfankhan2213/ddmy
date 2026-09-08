import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Psycho Nutrition – Elite Sports Supplements India',
  description: 'Premium sports nutrition supplements by Psycho Nutrition. Pre-workouts, whey protein, mass gainers, vitamins & more. Lab tested, pure quality.',
  keywords: 'Psycho Nutrition, psychonutrition, whey protein isolate, mass gainer, pre workout, creatine, sports supplements India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
