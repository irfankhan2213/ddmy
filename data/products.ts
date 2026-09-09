export interface ProductImage {
  view: string
  url: string
  altText?: string
}

export interface NutritionFacts {
  calories: number
  protein: number
  bcaa: number
  eaa: number
  glutamine?: number
  leucine?: number
  carbohydrates: number
  sugars: number
  fat: number
  saturatedFat: number
  sodium: number
  cholesterol: number
}

export interface Product {
  id: string
  name: string
  series?: string
  price: number
  salePrice?: number
  originalPrice?: number
  rating: number
  reviewCount: number
  badge?: string
  category: string
  href: string
  accent: string
  image: string
  gallery?: ProductImage[]
  description: string
  flavors?: string[]
  size?: string
  servingsCount?: number
  servingSize?: string
  features?: string[]
  nutritionFacts?: NutritionFacts
  ingredients?: string
  usageDirections?: string
  certifications?: string[]
}

export const products: Product[] = [
  {
    id: 'psycho-whey-valrhona-chocolate-1kg',
    name: 'Whey Protein Concentrate (1kg)',
    series: 'MUSCLE BUILDING FORMULA',
    price: 42.05,
    salePrice: 51.99,
    originalPrice: 51.99,
    rating: 5,
    reviewCount: 142,
    badge: 'BESTSELLER',
    category: 'Protein',
    href: '/products/psycho-whey-valrhona-chocolate-1kg',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
    gallery: [
      {
        view: 'Front Hero 3/4 Floating View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
        altText: 'Psycho Nutrition Whey Protein Concentrate 1kg Pouch front view'
      },
      {
        view: 'Back Nutrition Facts & Verification',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959150/psycho_nutrition/psycho_whey_valrhona_chocolate_back_view.jpg',
        altText: 'Psycho Nutrition Whey Protein Concentrate 1kg Pouch back nutrition facts label'
      }
    ],
    size: '1 kg (2.2 lbs)',
    servingsCount: 29,
    servingSize: '34 g (About 1 Scoop)',
    description: 'Ultra-pure Whey Protein Concentrate health supplement engineered for explosive lean muscle growth and athletic recovery. Formulated in the USA with 24g pure protein, 5.28g BCAAs, and 11.4g EAAs per scoop. Zero fillers, clinical purity.',
    features: [
      '24g of 100% Muscle-Building Whey Protein Blend',
      '5.28g BCAAs & 11.4g EAAs for fast muscular repair',
      '4.1g L-Glutamine cell-volumizing recovery matrix',
      'Low in fat (1g) with zero added sugars',
      'GMP Certified, Dope Free & Made in USA'
    ],
    nutritionFacts: {
      calories: 123,
      protein: 24.0,
      bcaa: 5.28,
      eaa: 11.4,
      glutamine: 4.1,
      carbohydrates: 4.5,
      sugars: 1.0,
      fat: 1.0,
      saturatedFat: 0.5,
      sodium: 113,
      cholesterol: 110
    },
    ingredients: 'Protein Blend (91%) [Whey Protein Concentrate, Whey Protein Isolate] (Emulsifier: INS 322i), Natural Flavour (Processed with Alkali), Artificial Flavours, Sodium Chloride, Thickeners (INS 466, INS 415, INS 407), Sweeteners (INS 955, INS 950). Contains Milk.',
    usageDirections: 'Mix 1 scoop (34g) with 200-250 ml (6.7-8.4 fl oz) of cold water, milk or beverage of your choice. Shake or blend for 30 seconds until dissolved. Recommended 30-60 minutes post-workout or as a daily high-protein boost.',
    certifications: ['Made in USA', 'Dope Free', 'Gluten Free', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-isolate-chocolate-frappe-1kg',
    name: '1 Whey Isolate (1kg)',
    series: 'PURE ISOLATE SERIES',
    price: 52.56,
    salePrice: 64.99,
    originalPrice: 64.99,
    rating: 5,
    reviewCount: 98,
    badge: 'HOT DROP',
    category: 'Protein',
    href: '/products/psycho-isolate-chocolate-frappe-1kg',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959140/psycho_nutrition/psycho_isolate_chocolate_frappe_front_hero.jpg',
    gallery: [
      {
        view: 'Front Hero 3/4 Floating View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959140/psycho_nutrition/psycho_isolate_chocolate_frappe_front_hero.jpg',
        altText: 'Psycho Nutrition 1 Whey Isolate 1kg front view'
      },
      {
        view: 'Back Nutrition Facts & Verification',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959127/psycho_nutrition/psycho_isolate_chocolate_frappe_back_view.jpg',
        altText: 'Psycho Nutrition 1 Whey Isolate 1kg back nutrition facts label'
      }
    ],
    size: '1 kg (2.2 lbs)',
    servingsCount: 28,
    servingSize: '36 g (About 1 Scoop)',
    description: 'Premium ultra-filtered Whey Isolate delivering 30g pure protein and 2.6g Leucine per scoop with only 2.25g carbs and ultra-low cholesterol. Engineered for lean, dry vascular definition and immediate post-workout muscle protein synthesis.',
    features: [
      '30g Pure Whey Isolate Protein per serving (83.5% concentration)',
      '2.6g Leucine anabolic trigger for peak protein synthesis',
      '5.5g BCAAs & 11.4g EAAs fast-uptake amino profile',
      'Ultra-low carb (2.25g) and low cholesterol (3.6mg)',
      'Dope Free, Gluten Free and Made in USA'
    ],
    nutritionFacts: {
      calories: 140,
      protein: 30.0,
      bcaa: 5.5,
      eaa: 11.4,
      leucine: 2.6,
      carbohydrates: 2.25,
      sugars: 0.23,
      fat: 1.19,
      saturatedFat: 0.85,
      sodium: 110.5,
      cholesterol: 3.6
    },
    ingredients: 'Protein Blend (91%) [Whey Protein Concentrate, Whey Protein Isolate] (Emulsifier: INS 322i), Natural Flavour (Processed with Alkali), Artificial Flavours, Sodium Chloride, Thickeners (INS 466, INS 415, INS 407), Sweeteners (INS 955, INS 950). Contains Milk.',
    usageDirections: 'Mix 1 scoop (36g) with 200-250 ml (6.7-8.4 fl oz) cold water, milk or beverage. Stir, shake or blend for 30 seconds until completely dissolved. Consume 30-60 minutes post-workout or between meals.',
    certifications: ['Made in USA', 'Dope Free', 'Gluten Free', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-insane-whey-2kg-valrhona-chocolate',
    name: 'Insane Whey 100% (2kg Tub)',
    series: 'INSANE PERFORMANCE SERIES',
    price: 80.96,
    salePrice: 99.99,
    originalPrice: 99.99,
    rating: 5,
    reviewCount: 215,
    badge: 'POPULAR',
    category: 'Protein',
    href: '/products/psycho-insane-whey-2kg-valrhona-chocolate',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788963008/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_front_hero.jpg',
    gallery: [
      {
        view: 'Front Tub 3D Splash View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788963008/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_front_hero.jpg',
        altText: 'Psycho Nutrition Insane Whey 2kg Tub front hero angle in chocolate splash'
      },
      {
        view: 'Supplement Facts & Verification View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788963013/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_facts.jpg',
        altText: 'Psycho Nutrition Insane Whey 2kg Tub side supplement facts and verification seal'
      }
    ],
    size: '2 kg (4.4 lbs)',
    servingsCount: 58,
    servingSize: '34 g (About 1 Scoop)',
    description: 'High-potency 100% Insane Whey Protein formulated in a massive 2kg tub with 58 explosive servings. Features 24g pure whey protein blend, 4.1g glutamine, 11.4g EAAs, and 5.28g BCAAs. Guaranteed zero amino spiking for authentic athletic performance.',
    features: [
      '24g of 100% Whey Protein (Unique Whey Protein & Isolate combo)',
      '58 Heavyweight Servings per heavy-duty wide screw tub',
      'Engineered for rapid muscular hypertrophy, recovery, and mental focus',
      'Zero Amino Spiking laboratory-tested guarantee',
      'Low in Fat, 100% Gluten Free & GMP Certified'
    ],
    nutritionFacts: {
      calories: 123,
      protein: 24.0,
      bcaa: 5.28,
      eaa: 11.4,
      glutamine: 4.1,
      carbohydrates: 4.5,
      sugars: 1.0,
      fat: 1.0,
      saturatedFat: 0.5,
      sodium: 113,
      cholesterol: 110
    },
    ingredients: 'Protein Blend (91%) [Whey Protein Concentrate, Whey Protein Isolate] (Emulsifier: INS 322i), Natural Flavour (Processed with Alkali), Artificial Flavours, Sodium Chloride, Thickeners (INS 466, INS 415, INS 407), Sweeteners (INS 955, INS 950). Contains Milk.',
    usageDirections: 'Mix 3/4 to 1 scoop in 5-6 oz cold water or milk. Consume pre-workout, post-workout, or whenever high quality protein is required.',
    certifications: ['Made in USA', 'No Amino Spiking', 'GMP Certified', 'Laboratory Tested Certified', 'Gluten Free', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-iso-2kg-chocolate-frappe',
    name: 'Ripped ISO 100% Isolate (2kg Tub)',
    series: 'RIPPED ISOLATE SERIES',
    price: 100.93,
    salePrice: 124.99,
    originalPrice: 124.99,
    rating: 5,
    reviewCount: 312,
    badge: 'FLAGSHIP',
    category: 'Protein',
    href: '/products/psycho-iso-2kg-chocolate-frappe',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959083/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_front_hero.jpg',
    gallery: [
      {
        view: 'Front Tub 3D View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959083/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_front_hero.jpg',
        altText: 'Psycho Nutrition Ripped ISO 2kg Tub front hero angle'
      },
      {
        view: 'Side Supplement Facts & Certifications',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1788959101/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_side_facts.jpg',
        altText: 'Psycho Nutrition Ripped ISO 2kg Tub side supplement facts'
      }
    ],
    size: '2 kg (4.4 lbs)',
    servingsCount: 56,
    servingSize: '36 g (About 1 Scoop)',
    description: 'The pinnacle of ripped conditioning and pure isolate performance. Psycho Nutrition Ripped ISO delivers 30g of fast-acting isolate protein per scoop, 5.5g BCAAs, and 2.6g Leucine across 56 servings. Formulated to shred fat and build dense, rock-hard muscle.',
    features: [
      '30g of 100% Pure Whey Protein Isolate matrix',
      'Ripped formula to maximize vascular strength, gain lean muscle, and drop body fat',
      '56 Servings of ultra-pure isolate in heavy-duty 2kg container',
      'Guaranteed Zero Amino Spiking (Laboratory Certified)',
      'Low in Fat, Gluten Free, and Dope-Free Tested'
    ],
    nutritionFacts: {
      calories: 140,
      protein: 30.0,
      bcaa: 5.5,
      eaa: 11.4,
      leucine: 2.6,
      carbohydrates: 2.25,
      sugars: 0.23,
      fat: 1.19,
      saturatedFat: 0.85,
      sodium: 110.5,
      cholesterol: 3.6
    },
    ingredients: 'Protein Blend (91%) [Whey Protein Concentrate, Whey Protein Isolate] (Emulsifier: INS 322i), Natural Flavour, Artificial Flavours, Sodium Chloride, Thickeners (INS 466, INS 415, INS 407), Sweeteners (INS 955, INS 950). Contains Milk.',
    usageDirections: 'Mix 3/4 to 1 scoop in 5-6 oz cold water. Consume pre-workout and/or post-workout for rapid amino replenishment.',
    certifications: ['Made in USA', 'No Amino Spiking', 'GMP Certified', 'Laboratory Tested Certified', 'Gluten Free']
  }
]

export const bestSellers: Product[] = products
export const healthLineProducts: Product[] = products
