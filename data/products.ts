export interface Product {
  id: string
  name: string
  price: number
  salePrice?: number
  rating: number
  reviewCount: number
  badge?: string
  category: string
  href: string
  accent: string
  image: string
  description: string
  flavors?: string[]
  features?: string[]
}

export const products: Product[] = []

export const bestSellers: Product[] = []
export const healthLineProducts: Product[] = []
