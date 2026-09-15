import type { MetadataRoute } from 'next'
import { products } from '@/data/products'
import { collections } from '@/data/collections'
import { SITE_URL } from '@/lib/constants'

const BASE = SITE_URL

const staticRoutes = [
  '',
  '/cart',
  '/blogs/news',
  '/pages/contact',
  '/pages/privacy-policy',
  '/pages/terms-of-service',
  '/collections/shop-all',
]

const blogIds = ['maximize-your-workout', 'protein-isolate-benefits', 'importance-of-organ-health']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticRoutes.map(path => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...collections.map(c => ({
      url: `${BASE}/collections/${c.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...products.map(p => ({
      url: `${BASE}/products/${p.id}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...blogIds.map(id => ({
      url: `${BASE}/blogs/news/${id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
