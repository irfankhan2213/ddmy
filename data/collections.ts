import { products, Product } from './products'

export interface Collection {
  id: string
  name: string
  tagline: string
  description: string
  image: string
  /** Product.category value this collection pulls from */
  category: string
}

export const collections: Collection[] = [
  {
    id: 'pre-workout',
    name: 'Pre-Workout',
    tagline: 'Explosive Training Energy',
    description: 'High-intensity pre-training formulas for energy, focus and skin-splitting pumps.',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120308/psycho_nutrition/psycho_killer_clown_pineapple_mango_hero.png',
    category: 'Pre-Workout',
  },
  {
    id: 'protein',
    name: 'Protein',
    tagline: 'Build Lean Muscle',
    description: 'Whey concentrates and isolates engineered for lean muscle growth and recovery.',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
    category: 'Protein',
  },
  {
    id: 'performance',
    name: 'Pump & Performance',
    tagline: 'Strength, Pump & Power',
    description: 'Creatine, nitric-oxide pump agents and hardcore activators for strength and density.',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120492/psycho_nutrition/psycho_crea3_creatine_hero.png',
    category: 'Performance',
  },
  {
    id: 'recovery',
    name: 'Aminos & Recovery',
    tagline: 'Recover. Rebuild. Repeat.',
    description: 'EAAs, BCAAs and collagen to fuel training, protect muscle and speed up recovery.',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120476/psycho_nutrition/psycho_eaa_energy_blue_raspberry_hero.png',
    category: 'Recovery',
  },
  {
    id: 'vitality',
    name: 'Vitality & Wellness',
    tagline: 'Daily Health Essentials',
    description: 'Testo support, omega-3s and metabolic formulas for everyday health and leanness.',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120449/psycho_nutrition/psycho_fish_oil_omega3_hero.png',
    category: 'Vitality',
  },
]

export function getCollectionById(id: string): Collection | undefined {
  return collections.find(c => c.id === id)
}

export function getCollectionName(id: string): string {
  if (id === 'shop-all') return 'Shop All'
  return getCollectionById(id)?.name ?? 'Products'
}

export function getCollectionProducts(id: string): Product[] {
  if (id === 'shop-all') return products
  const collection = getCollectionById(id)
  if (!collection) return products
  return products.filter(p => p.category === collection.category)
}
