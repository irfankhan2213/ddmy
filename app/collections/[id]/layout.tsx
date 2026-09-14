import { Metadata } from 'next'
import { getCollectionName } from '@/data/collections'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const collectionName = getCollectionName(params.id)
  if (!collectionName) return {}

  const url = `https://thepsychonutrition.com/collections/${params.id}`

  return {
    title: `${collectionName} Collection`,
    description: `Shop the best ${collectionName} supplements from Psycho Nutrition.`,
    openGraph: {
      title: `${collectionName} | Psycho Nutrition`,
      description: `Shop the best ${collectionName} supplements from Psycho Nutrition.`,
      url,
      type: 'website',
    },
    alternates: {
      canonical: url,
    }
  }
}

export default function CollectionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
