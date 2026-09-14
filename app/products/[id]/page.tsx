import { products } from '@/data/products'
import { Metadata } from 'next'
import ProductClient from './ProductClient'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = products.find(p => p.id === params.id)
  if (!product) return {}

  const url = `https://thepsychonutrition.com/products/${product.id}`

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Psycho Nutrition`,
      description: product.description,
      url,
      images: [
        {
          url: product.image,
          alt: product.name,
        }
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: url,
    }
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return <ProductClient productId={params.id} />
}
