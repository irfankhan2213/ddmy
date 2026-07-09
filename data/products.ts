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

export const products: Product[] = [
  {
    id: 'whey-protein-isolate-new',
    name: 'Whey Protein Isolate',
    price: 5399,
    salePrice: 5999,
    rating: 5,
    reviewCount: 124,
    badge: 'Top Rated',
    category: 'Protein',
    href: '/products/whey-protein-isolate-new',
    accent: '#f43f5e',
    image: '/images/new-product.png',
    description: 'Premium Whey Protein Isolate for lean muscle growth. Delicious milk chocolate flavor.',
    flavors: ['Milk Chocolate'],
    features: ['Rapid Absorption', '66 Servings'],
  },
  {
    id: 'zma-capsules-new',
    name: 'ZMA Zinc & Magnesium',
    price: 1799,
    salePrice: 1999,
    rating: 5,
    reviewCount: 45,
    badge: 'Bestseller',
    category: 'Vitamins',
    href: '/products/zma-capsules-new',
    accent: '#8b5cf6',
    image: '/images/product-1.png',
    description: 'ZMA - Zinc, Magnesium and Vitamin B6 formula for deep sleep and recovery.',
    flavors: ['Unflavored'],
    features: ['Muscle Strength', 'Immunity Support', '90 Caps'],
  },
  {
    id: 'l-carnitine-liquid',
    name: 'L-Carnitine Liquid 3000mg',
    price: 2159,
    rating: 4,
    reviewCount: 89,
    category: 'Weight Loss',
    href: '/products/l-carnitine-liquid',
    accent: '#f97316',
    image: '/images/product-2.png',
    description: 'L-Carnitine Liquid helps convert fat into energy. Orange flavor.',
    flavors: ['Orange'],
    features: ['Helps Convert Fat Into Energy', 'Suppresses Appetite'],
  },
  {
    id: 'crank-pre-workout-new',
    name: 'CRANK Pre-Workout',
    price: 1999,
    rating: 5,
    reviewCount: 201,
    badge: 'New',
    category: 'Pre-Workout',
    href: '/products/crank-pre-workout-new',
    accent: '#f59e0b',
    image: '/images/product-3.png',
    description: 'Advanced pre-workout for increased strength, power and muscle endurance.',
    flavors: ['Fruit Punch'],
    features: ['Explosive Energy', 'Pure Formula'],
  },
]

export const bestSellers = products
export const healthLineProducts = products
