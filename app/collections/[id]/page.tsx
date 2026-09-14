import AnnouncementBar from '@/components/AnnouncementBar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getCollectionName, getCollectionProducts } from '@/data/collections'
import { Metadata } from 'next'
import CollectionClient from './CollectionClient'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const collectionName = getCollectionName(params.id)
  if (!collectionName) return {}

  const url = `https://thepsychonutrition.com/collections/${params.id}`

  return {
    title: `${collectionName} | Psycho Nutrition`,
    description: `Explore our ${collectionName} collection of premium supplements and formulations.`,
    openGraph: {
      title: `${collectionName} | Psycho Nutrition`,
      description: `Explore our ${collectionName} collection of premium supplements and formulations.`,
      url,
      type: 'website',
    },
    alternates: {
      canonical: url,
    }
  }
}

export default function CollectionPage({ params }: { params: { id: string } }) {
  const collectionId = params.id
  const collectionName = getCollectionName(collectionId)
  const collectionProducts = getCollectionProducts(collectionId)

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thepsychonutrition.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": collectionName,
        "item": `https://thepsychonutrition.com/collections/${collectionId}`
      }
    ]
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": collectionProducts.map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://thepsychonutrition.com/products/${product.id}`
    }))
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <AnnouncementBar />
      <Header />
      <CollectionClient 
        collectionName={collectionName} 
        collectionProducts={collectionProducts} 
      />
      <Footer />
    </main>
  )
}
