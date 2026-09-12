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

export interface SupplementFactRow {
  label: string
  value: string
}

export interface SupplementFacts {
  headline?: string
  rows: SupplementFactRow[]
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
  supplementFacts?: SupplementFacts
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
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
    gallery: [
      {
        view: 'Front Hero 3/4 Floating View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959168/psycho_nutrition/psycho_whey_valrhona_chocolate_front_hero.jpg',
        altText: 'Psycho Nutrition Whey Protein Concentrate 1kg Pouch front view'
      },
      {
        view: 'Back Nutrition Facts & Verification',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959150/psycho_nutrition/psycho_whey_valrhona_chocolate_back_view.jpg',
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
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959140/psycho_nutrition/psycho_isolate_chocolate_frappe_front_hero.jpg',
    gallery: [
      {
        view: 'Front Hero 3/4 Floating View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959140/psycho_nutrition/psycho_isolate_chocolate_frappe_front_hero.jpg',
        altText: 'Psycho Nutrition 1 Whey Isolate 1kg front view'
      },
      {
        view: 'Back Nutrition Facts & Verification',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959127/psycho_nutrition/psycho_isolate_chocolate_frappe_back_view.jpg',
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
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788963008/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_front_hero.jpg',
    gallery: [
      {
        view: 'Front Tub 3D Splash View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788963008/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_front_hero.jpg',
        altText: 'Psycho Nutrition Insane Whey 2kg Tub front hero angle in chocolate splash'
      },
      {
        view: 'Supplement Facts & Verification View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788963013/psycho_nutrition/psycho_insane_whey_2kg_valrhona_chocolate_facts.jpg',
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
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959083/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_front_hero.jpg',
    gallery: [
      {
        view: 'Front Tub 3D View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959083/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_front_hero.jpg',
        altText: 'Psycho Nutrition Ripped ISO 2kg Tub front hero angle'
      },
      {
        view: 'Side Supplement Facts & Certifications',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/f_auto,q_auto,w_800/v1788959101/psycho_nutrition/psycho_iso_2kg_chocolate_frappe_side_facts.jpg',
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
  },
  // ─────────────────────────────────────────────
  // NEW CATALOGUE (scanned from product images, Sep 2026)
  // Prices intentionally left at 0 until pricing is confirmed.
  // ─────────────────────────────────────────────
  {
    id: 'psycho-killer-clown-pineapple-mango',
    name: 'Killer Clown Loaded (Pineapple Mango)',
    series: 'LIMITED EDITION PRE-WORKOUT',
    price: 0,
    rating: 5,
    reviewCount: 41,
    badge: 'NEW',
    category: 'Pre-Workout',
    href: '/products/psycho-killer-clown-pineapple-mango',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120308/psycho_nutrition/psycho_killer_clown_pineapple_mango_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120308/psycho_nutrition/psycho_killer_clown_pineapple_mango_hero.png',
        altText: 'Psycho Nutrition Killer Clown Loaded pre-workout Pineapple Mango front view'
      }
    ],
    size: '300 gm',
    servingsCount: 30,
    servingSize: '1 Scoop (10g)',
    description: 'Limited edition Killer Clown Loaded pre-workout in Pineapple Mango. Built for lifters who train loud — explosive training energy, skin-splitting pumps and razor-sharp focus before every session.',
    flavors: ['Pineapple Mango'],
    features: [
      'Limited edition Killer Clown series artwork',
      'Pineapple Mango flavour profile',
      '6g Citrulline Malate + 2g Beta-Alanine per serving',
      'Focus, pump, strength and growth complex'
    ],
    supplementFacts: {
      headline: 'Game-Changing Prime Ingredients (per 10g scoop)',
      rows: [
        { label: 'Calories', value: '5 kcal' },
        { label: 'Vitamin B12', value: '100 mcg' },
        { label: 'Sodium', value: '45 mg' },
        { label: 'Citrulline Malate 2:1', value: '6000 mg' },
        { label: 'Beta-Alanine', value: '2000 mg' },
        { label: 'AlphaSize Alpha-GPC 50%', value: '200 mg' },
        { label: 'Taurine', value: '200 mg' },
        { label: 'Himalayan Rock Salt', value: '200 mg' },
        { label: 'Deer Antler Velvet Extract', value: '100 mg' },
        { label: 'AstraGin', value: '50 mg' },
        { label: 'Senactiv + Rosa Roxburghii', value: '25 mg' },
      ],
    },
    ingredients: 'Citrulline Malate 2:1, Beta-Alanine, AlphaSize Alpha-GPC, Taurine, Himalayan Rock Salt, Deer Antler Velvet Extract, AstraGin, Senactiv, Rosa Roxburghii Fruit Extract, Vitamin B12, Natural Flavours, Calcium Silicate, Silicon Dioxide, Sucralose, Beta Carotene (for color).',
    usageDirections: 'Mix 1 well-rounded scoop in 6-8 oz of cold water 15-30 minutes prior to physical activity. Do not exceed 2 servings in a 24-hour period.',
    certifications: ['Limited Edition', 'Lab Tested', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-murphy-pre-workout',
    name: 'Murphy Pre Workout',
    series: 'BEAST MODE PRE-WORKOUT',
    price: 0,
    rating: 5,
    reviewCount: 37,
    badge: 'NEW',
    category: 'Pre-Workout',
    href: '/products/psycho-murphy-pre-workout',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120317/psycho_nutrition/psycho_murphy_preworkout_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120317/psycho_nutrition/psycho_murphy_preworkout_hero.png',
        altText: 'Psycho Nutrition Murphy pre-workout front view'
      }
    ],
    description: 'Murphy unleashed — a hardcore pre-workout for athletes who refuse light sessions. Formulated to drive brutal training intensity, lasting energy and relentless drive from first rep to last.',
    features: [
      'Hardcore pre-training intensity formula',
      'Sustained energy for long sessions',
      'Training drive and focus support',
      'Scan-to-verify authenticity seal'
    ],
    usageDirections: 'Mix 1 scoop with 250-300 ml of cold water 20-30 minutes before training. Start with half a scoop to assess tolerance.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-whizz-extreme-pre-workout',
    name: 'Whizz Extreme Legend Pre-Workout (Pineapple)',
    series: 'LEGEND PRE-WORKOUT SERIES',
    price: 0,
    rating: 5,
    reviewCount: 29,
    badge: 'NEW',
    category: 'Pre-Workout',
    href: '/products/psycho-whizz-extreme-pre-workout',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120337/psycho_nutrition/psycho_whizz_extreme_preworkout_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120337/psycho_nutrition/psycho_whizz_extreme_preworkout_hero.png',
        altText: 'Psycho Nutrition Whizz Extreme Legend pre-workout Pineapple front view'
      }
    ],
    size: '300 gm',
    servingsCount: 30,
    servingSize: '1 Scoop (10g)',
    description: 'Whizz Extreme Legend pre-workout in Pineapple — 300 gm of fast-acting training fuel. Engineered for explosive energy, tunnel-vision focus and powerful muscle pumps.',
    flavors: ['Pineapple'],
    features: [
      '300 gm Legend pre-workout formula',
      'Pineapple flavour',
      'Explosive pre-training energy and focus',
      'Pump-driving performance blend'
    ],
    supplementFacts: {
      headline: 'Legend Pump + Smart Energy Complex (per 10g scoop)',
      rows: [
        { label: 'L-Citrulline (Vegan Fermented)', value: '2000 mg' },
        { label: 'Beta-Alanine', value: '1600 mg' },
        { label: 'Nitrosigine (Arginine Silicate)', value: '1000 mg' },
        { label: 'Senactiv (Botanical Extracts)', value: '50 mg' },
        { label: 'L-Tyrosine', value: '800 mg' },
        { label: 'Taurine', value: '800 mg' },
        { label: 'Alpha-GPC', value: '300 mg' },
        { label: 'Natural Caffeine', value: '250 mg' },
        { label: 'Theobromine', value: '100 mg' },
        { label: 'AstraGin', value: '50 mg' },
        { label: 'Rauwolfia Root Extract', value: '1.5 mg' },
      ],
    },
    usageDirections: 'Mix 1 scoop with 250-300 ml of cold water 20-30 minutes before training.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-crea3-creatine-300g',
    name: 'Crea-3 100% Pure Creatine (Unflavored)',
    series: 'STRENGTH & POWER SERIES',
    price: 0,
    rating: 5,
    reviewCount: 64,
    badge: 'BESTSELLER',
    category: 'Performance',
    href: '/products/psycho-crea3-creatine-300g',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120492/psycho_nutrition/psycho_crea3_creatine_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120492/psycho_nutrition/psycho_crea3_creatine_hero.png',
        altText: 'Psycho Nutrition Crea-3 100 percent pure creatine front view'
      }
    ],
    size: '300 gm',
    servingsCount: 60,
    servingSize: '1 Scoop (5g)',
    description: 'Crea-3 is 100% pure unflavored creatine — 60 servings per 300 gm tub. Triple creatine matrix (HCl + Micronized + Monohydrate) for strength power, energy, endurance and recovery with zero fillers, carbs or fats.',
    features: [
      'Triple creatine matrix: HCl + Micronized + Mono',
      '5g total creatine per serving, 60 servings',
      'Zero fillers, carbs or fats',
      'Strength, ATP energy and recovery support'
    ],
    supplementFacts: {
      headline: 'Triple Creatine Matrix (per 5g scoop)',
      rows: [
        { label: 'Sodium', value: '5 mg' },
        { label: 'Creatine HCl', value: '2000 mg' },
        { label: 'Creatine Micronized', value: '1995 mg' },
        { label: 'Creatine Monohydrate', value: '1000 mg' },
      ],
    },
    usageDirections: 'Mix one level scoop (5g) with 200 ml of water immediately following your workout.',
    certifications: ['100% Pure', 'Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-l-citrulline-powder-100g',
    name: 'L-Citrulline Powder (100 gm)',
    series: 'PUMP & NITRIC OXIDE SERIES',
    price: 0,
    rating: 5,
    reviewCount: 22,
    badge: 'NEW',
    category: 'Performance',
    href: '/products/psycho-l-citrulline-powder-100g',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120467/psycho_nutrition/psycho_l_citrulline_powder_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120467/psycho_nutrition/psycho_l_citrulline_powder_hero.png',
        altText: 'Psycho Nutrition L-Citrulline powder front view'
      }
    ],
    size: '100 gm',
    servingsCount: 40,
    servingSize: '1 Scoop (2.5g)',
    description: 'Pure L-Citrulline powder — 40 servings per 100 gm tub. A nitric oxide precursor that supports intense muscle pumps, training endurance and fast post-workout recovery. Easily stacks with any pre-workout.',
    features: [
      'Pure free-acid L-Citrulline, 2500mg per serving',
      '40 measured servings per tub',
      'Zero fillers, carbs or fats',
      'Supports pumps, ATP synthesis and recovery'
    ],
    supplementFacts: {
      headline: 'Ultra-Pure Free-Acid Citrulline (per 2.5g scoop)',
      rows: [
        { label: 'Total Fat', value: '0 g' },
        { label: 'Total Carbohydrate', value: '0 g' },
        { label: 'Citrulline', value: '2500 mg' },
      ],
    },
    usageDirections: 'Mix one level scoop (2.5g) with 200 ml of water following your workout.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-l-citrulline-capsules-60',
    name: 'L-Citrulline Capsules (60 Caps)',
    series: 'PUMP & NITRIC OXIDE SERIES',
    price: 0,
    rating: 5,
    reviewCount: 18,
    category: 'Performance',
    href: '/products/psycho-l-citrulline-capsules-60',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120322/psycho_nutrition/psycho_l_citrulline_capsules_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120322/psycho_nutrition/psycho_l_citrulline_capsules_hero.png',
        altText: 'Psycho Nutrition L-Citrulline 60 capsules front view'
      }
    ],
    size: '60 Capsules',
    servingsCount: 60,
    description: 'L-Citrulline in convenient rapid-release capsules — 60 capsules per bottle. Supports blood flow and nitric oxide production, skin clearance and training energy without mixing a drink.',
    features: [
      'L-Citrulline in easy capsule form',
      '60 capsules per bottle',
      'Supports blood flow and pump',
      'Supports skin clearance and energy'
    ],
    usageDirections: 'Take the suggested serving with water 20-30 minutes before training, or as directed on the label.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-l-arginine-powder-100g',
    name: 'L-Arginine Powder (100 gm)',
    series: 'PUMP & PERFORMANCE SERIES',
    price: 0,
    rating: 5,
    reviewCount: 16,
    category: 'Performance',
    href: '/products/psycho-l-arginine-powder-100g',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120359/psycho_nutrition/psycho_l_arginine_powder_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120359/psycho_nutrition/psycho_l_arginine_powder_hero.png',
        altText: 'Psycho Nutrition L-Arginine powder front view'
      }
    ],
    size: '100 gm',
    servingsCount: 20,
    servingSize: '1 Scoop (5g)',
    description: 'L-Arginine powder — 20 servings per 100 gm tub. Built for more pump and better performance, supporting strength, endurance, circulation and recovery around every workout.',
    features: [
      'Ultra-pure free-acid L-Arginine, 5000mg per serving',
      '20 servings per 100 gm tub',
      'Zero fillers, carbs or fats',
      'Supports strength, circulation and recovery'
    ],
    supplementFacts: {
      headline: 'Ultra-Pure Free-Acid L-Arginine (per 5g scoop)',
      rows: [
        { label: 'Total Fat', value: '0 g' },
        { label: 'Total Carbohydrate', value: '0 g' },
        { label: 'L-Arginine', value: '5000 mg' },
      ],
    },
    usageDirections: 'Mix one level scoop (5g) with 200 ml of water.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-l-arginine-capsules-90',
    name: 'L-Arginine Capsules (90 Caps)',
    series: 'PUMP & PERFORMANCE SERIES',
    price: 0,
    rating: 5,
    reviewCount: 14,
    category: 'Performance',
    href: '/products/psycho-l-arginine-capsules-90',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120350/psycho_nutrition/psycho_l_arginine_capsules_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120350/psycho_nutrition/psycho_l_arginine_capsules_hero.png',
        altText: 'Psycho Nutrition L-Arginine 90 capsules front view'
      }
    ],
    size: '90 Capsules',
    servingsCount: 90,
    description: 'L-Arginine in capsule form — 90 capsules per bottle. Supports blood flow, training energy and recovery for pump, focus and endurance without any mixing.',
    features: [
      'L-Arginine in convenient capsule form',
      '90 capsules per bottle',
      'Supports blood flow and energy',
      'Supports pump, focus and endurance'
    ],
    usageDirections: 'Take the suggested serving with water before training, or as directed on the label.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-metadrol-anabolic-activator',
    name: 'Metadrol Anabolic Activator (30 Caps)',
    series: 'HARDCORE MASS SERIES',
    price: 0,
    rating: 5,
    reviewCount: 26,
    badge: 'NEW',
    category: 'Performance',
    href: '/products/psycho-metadrol-anabolic-activator',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120428/psycho_nutrition/psycho_metadrol_anabolic_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120428/psycho_nutrition/psycho_metadrol_anabolic_hero.png',
        altText: 'Psycho Nutrition Metadrol anabolic activator front view'
      }
    ],
    size: '30 Rapid Release Capsules',
    servingsCount: 30,
    description: 'Metadrol Anabolic Activator — 30 rapid release capsules engineered for muscle mass and power, supercharged recovery and extreme hardness, density and strength.',
    features: [
      'Anabolic activator capsule formula',
      '30 rapid release capsules',
      'Supports muscle mass and power',
      'Supports recovery, hardness and strength'
    ],
    usageDirections: 'Take the suggested serving with water daily, or as directed on the label.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-eaa-energy-blue-raspberry',
    name: 'EAA Energy (Blue Raspberry, 500 gm)',
    series: 'AMINO ENERGY SERIES',
    price: 0,
    rating: 5,
    reviewCount: 33,
    badge: 'NEW',
    category: 'Recovery',
    href: '/products/psycho-eaa-energy-blue-raspberry',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120476/psycho_nutrition/psycho_eaa_energy_blue_raspberry_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120476/psycho_nutrition/psycho_eaa_energy_blue_raspberry_hero.png',
        altText: 'Psycho Nutrition EAA Energy Blue Raspberry front view'
      }
    ],
    size: '500 gm',
    servingsCount: 55,
    servingSize: '1 Scoop (9g)',
    description: 'EAA Energy in Blue Raspberry — 55 servings per 500 gm tub. Full-spectrum essential amino acids with energizing support to fuel training, protect lean muscle and speed up recovery.',
    flavors: ['Blue Raspberry'],
    features: [
      'Full-spectrum 9-amino EAA profile per scoop',
      '2500mg L-Leucine + 2000mg L-Glutamine',
      '55 servings per 500 gm tub, zero sugars',
      'Energy, hydration and recovery support'
    ],
    supplementFacts: {
      headline: 'EAA Amino-Hydrate Profile (per 9g scoop)',
      rows: [
        { label: 'Energy', value: '27 kcal' },
        { label: 'Carbohydrates', value: '3.8 g / 100g' },
        { label: 'L-Leucine', value: '2500 mg' },
        { label: 'L-Glutamine', value: '2000 mg' },
        { label: 'L-Isoleucine', value: '1000 mg' },
        { label: 'L-Valine', value: '1000 mg' },
        { label: 'L-Lysine', value: '500 mg' },
        { label: 'L-Threonine', value: '250 mg' },
        { label: 'L-Histidine', value: '250 mg' },
        { label: 'L-Phenylalanine', value: '170 mg' },
        { label: 'L-Methionine', value: '75 mg' },
      ],
    },
    usageDirections: 'Mix 1 full scoop with 8-10 oz of water. Drink immediately after mixing.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-bcaa-blender-pina-colada',
    name: 'BCAA Blender (Pina Colada, 500 gm)',
    series: 'AMINO RECOVERY SERIES',
    price: 0,
    rating: 5,
    reviewCount: 31,
    category: 'Recovery',
    href: '/products/psycho-bcaa-blender-pina-colada',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120438/psycho_nutrition/psycho_bcaa_blender_pina_colada_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120438/psycho_nutrition/psycho_bcaa_blender_pina_colada_hero.png',
        altText: 'Psycho Nutrition BCAA Blender Pina Colada front view'
      }
    ],
    size: '500 gm',
    servingsCount: 72,
    servingSize: '1 Scoop (7g)',
    description: 'BCAA Blender in Pina Colada — 72 servings per 500 gm tub. Branched-chain amino acids plus glutamine and citrulline built to hydrate, fuel and recover: hydrate, recover, perform, repeat.',
    flavors: ['Pina Colada'],
    features: [
      '3600mg BCAAs per scoop (1800/900/900)',
      '900mg L-Glutamine + 500mg Citrulline',
      'Electrolyte minerals + Vitamin B6',
      '72 servings per 500 gm tub, zero sugars'
    ],
    supplementFacts: {
      headline: 'BCAA Amino-Hydrate Profile (per 7g scoop)',
      rows: [
        { label: 'Energy', value: '0 kcal' },
        { label: 'Carbohydrates', value: '0.24 g' },
        { label: 'BCAAs (Total)', value: '3600 mg' },
        { label: 'L-Leucine', value: '1800 mg' },
        { label: 'L-Isoleucine', value: '900 mg' },
        { label: 'L-Valine', value: '900 mg' },
        { label: 'L-Glutamine', value: '900 mg' },
        { label: 'Citrulline', value: '500 mg' },
        { label: 'Calcium', value: '37.8 mg' },
        { label: 'Potassium', value: '108.25 mg' },
        { label: 'Sodium', value: '115.5 mg' },
        { label: 'Vitamin B6', value: '0.5 mg' },
      ],
    },
    usageDirections: 'Mix 1 full scoop with 8-10 oz of water. Drink immediately after mixing.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-collagen-peptide-powder',
    name: 'Collagen Peptide Powder (150 Caps)',
    series: 'JOINTS SKIN & RECOVERY SERIES',
    price: 0,
    rating: 5,
    reviewCount: 19,
    category: 'Recovery',
    href: '/products/psycho-collagen-peptide-powder',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120457/psycho_nutrition/psycho_collagen_peptide_powder_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120457/psycho_nutrition/psycho_collagen_peptide_powder_hero.png',
        altText: 'Psycho Nutrition Collagen peptide powder front view'
      }
    ],
    size: '150 Capsules',
    servingsCount: 30,
    servingSize: '5 Capsules',
    description: 'Collagen Peptide formula — 150 capsules per bottle. Supports skin health, helps decrease inflammation, and supports joint, bone and muscle health for athletes who demand longevity.',
    features: [
      'Collagen peptide daily formula',
      '150 capsules per bottle (30 servings)',
      '2.5g collagen peptides per serving',
      'Supports skin, joints, bones and muscles'
    ],
    supplementFacts: {
      headline: 'Collagen Recovery Panel (per 5-capsule serving)',
      rows: [
        { label: 'Calories', value: '10 kcal' },
        { label: 'Protein', value: '2 g' },
        { label: 'Collagen Peptide Powder', value: '2.5 g' },
      ],
    },
    ingredients: 'Collagen Powder (99%), Microcrystalline Cellulose, Gelatin (Capsule), Silica, Vegetable Magnesium Stearate.',
    usageDirections: 'As a dietary supplement, adults take 5 capsules daily with meals or as directed by a healthcare practitioner.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-testo-pro-90',
    name: 'Testo Pro Advanced Testo Booster (90 Caps)',
    series: 'VITALITY & POWER SERIES',
    price: 0,
    rating: 5,
    reviewCount: 24,
    badge: 'NEW',
    category: 'Vitality',
    href: '/products/psycho-testo-pro-90',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120344/psycho_nutrition/psycho_testo_pro_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120344/psycho_nutrition/psycho_testo_pro_hero.png',
        altText: 'Psycho Nutrition Testo Pro advanced testo booster front view'
      }
    ],
    size: '90 Capsules',
    servingsCount: 45,
    servingSize: '2 Capsules',
    description: 'Testo Pro Advanced Testo Booster — 90 capsules per bottle. Built for better muscle mass and increased stamina using safe, tested ingredients for daily male vitality.',
    features: [
      'Advanced daily testo support formula',
      '90 capsules per bottle (45 servings)',
      'Tribulus 250mg + DIM 100mg per serving',
      'Zinc, magnesium, fenugreek and longjack complex'
    ],
    supplementFacts: {
      headline: 'Advanced Male Vitality Panel (per 2-capsule serving)',
      rows: [
        { label: 'Vitamin B6', value: '5 mg' },
        { label: 'Folate', value: '250 mcg DFE' },
        { label: 'Vitamin B12', value: '25 mcg' },
        { label: 'Magnesium', value: '225 mg' },
        { label: 'Zinc', value: '7.5 mg' },
        { label: 'Selenium', value: '25 mg' },
        { label: 'Tribulus Terrestris Extract', value: '250 mg' },
        { label: 'DIM (Diindolylmethane)', value: '100 mg' },
        { label: 'L-Arginine HCl', value: '75 mg' },
        { label: 'Avena Sativa', value: '50 mg' },
        { label: 'Shilajit Extract', value: '50 mg' },
        { label: 'Fenugreek Seed', value: '50 mg' },
        { label: 'Longjack Root', value: '50 mg' },
        { label: 'Epimedium Extract', value: '50 mg' },
        { label: 'Ginkgo Biloba Leaf', value: '25 mg' },
        { label: 'Saw Palmetto Berry', value: '25 mg' },
        { label: 'Cnidium Monnieri', value: '15 mg' },
      ],
    },
    usageDirections: 'Adult men, take 2 capsules every day on a light or empty stomach. Cycle 8 weeks on and 2 weeks off.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  },
  {
    id: 'psycho-fish-oil-omega3-1000mg',
    name: 'Fish Oil Omega 3 1000mg (60 Softgels)',
    series: 'DAILY WELLNESS SERIES',
    price: 0,
    rating: 5,
    reviewCount: 21,
    category: 'Vitality',
    href: '/products/psycho-fish-oil-omega3-1000mg',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120449/psycho_nutrition/psycho_fish_oil_omega3_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120449/psycho_nutrition/psycho_fish_oil_omega3_hero.png',
        altText: 'Psycho Nutrition Fish Oil Omega 3 front view'
      }
    ],
    size: '60 Softgel Capsules | 1000mg',
    servingsCount: 60,
    description: 'High quality 100% natural Omega 3 Fish Oil — 1000 mg per softgel, 60 softgels per bottle. Daily essential support for heart health, brain function and joint support.',
    features: [
      '100% natural Omega 3 fish oil, 1000 mg',
      '60 softgel capsules per bottle',
      'Supports heart health',
      'Supports brain function and joints'
    ],
    usageDirections: 'Take the suggested serving with water and a meal daily, or as directed on the label.',
    certifications: ['100% Natural', 'Lab Tested', 'GMP Certified']
  },
  {
    id: 'psycho-l-carnitine-4000-pina-colada',
    name: 'L-Carnitine 4000 Liquid (Pina Colada, 450 ml)',
    series: 'LEAN & SHREDDED SERIES',
    price: 0,
    rating: 5,
    reviewCount: 28,
    badge: 'NEW',
    category: 'Vitality',
    href: '/products/psycho-l-carnitine-4000-pina-colada',
    accent: '#E50914',
    image: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120376/psycho_nutrition/psycho_l_carnitine_4000_pina_colada_hero.png',
    gallery: [
      {
        view: 'Front Hero View',
        url: 'https://res.cloudinary.com/q6k0oxwk/image/upload/v1789120376/psycho_nutrition/psycho_l_carnitine_4000_pina_colada_hero.png',
        altText: 'Psycho Nutrition L-Carnitine 4000 Pina Colada front view'
      }
    ],
    size: '450 ml Liquid Formula',
    servingsCount: 33,
    description: 'L-Carnitine 4000 liquid formula in Pina Colada — 450 ml bottle with 33 servings. Enhances fat loss, increases energy levels and improves training performance. Leaner, stronger, fitter you.',
    flavors: ['Pina Colada'],
    features: [
      '4000 mg L-Carnitine liquid formula',
      '450 ml bottle, 33 servings',
      'Pina Colada flavour',
      'Enhances fat loss, energy and performance'
    ],
    usageDirections: 'Shake well. Take the suggested serving 20-30 minutes before training or cardio.',
    certifications: ['Lab Tested', 'GMP Certified', 'Authenticity QR Verification']
  }
]

export const bestSellers: Product[] = products
export const healthLineProducts: Product[] = products
