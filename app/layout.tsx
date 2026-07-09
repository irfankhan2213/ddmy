import type { Metadata } from 'next'
import './globals.css'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'DDMY Nutrition – Elite Sports Supplements India',
  description: 'Premium sports nutrition supplements in India. Pre-workouts, whey protein, mass gainers, vitamins & more. Lab tested, pure quality.',
  keywords: 'DDMY nutrition, whey protein isolate, mass gainer, pre workout, creatine, sports supplements India, CRANK pre workout',
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
