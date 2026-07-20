-- ============================================================
-- DDMY CLOUD / NITROGEN NUTRITION SUPABASE SEED DATA
-- Run this in your Supabase SQL Editor after schema.sql
-- ============================================================

-- 1. SEED CATEGORIES
INSERT INTO public.categories (id, name, slug, description, image) VALUES
('protein', 'Protein', 'protein', 'Premium whey protein isolates, concentrates, and plant blends for maximum recovery.', '/images/new-product.png'),
('pre-workout', 'Pre-Workout', 'pre-workout', 'High energy, laser focus, and explosive pumps pre-workout formulas.', '/images/product-3.png'),
('weight-loss', 'Weight Loss', 'weight-loss', 'Thermogenic fat burners and fat-to-energy conversion liquids.', '/images/product-2.png'),
('vitamins', 'Vitamins & Supplements', 'vitamins-supplements', 'Essential micronutrients, ZMA, fish oils, and health boosters.', '/images/product-1.png')
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name,
slug = EXCLUDED.slug,
description = EXCLUDED.description,
image = EXCLUDED.image;

-- 2. SEED PRODUCTS
INSERT INTO public.products (
    id, name, price, sale_price, rating, review_count, badge, category, category_id, href, accent, image, description, flavors, features, in_stock
) VALUES
(
    'whey-protein-isolate-new',
    'Whey Protein Isolate',
    5399.00,
    5999.00,
    5.0,
    124,
    'Top Rated',
    'Protein',
    'protein',
    '/products/whey-protein-isolate-new',
    '#f43f5e',
    '/images/new-product.png',
    'Premium Whey Protein Isolate for lean muscle growth. Delicious milk chocolate flavor with rapid absorption.',
    ARRAY['Milk Chocolate', 'Vanilla Ice Cream', 'Double Rich Chocolate'],
    ARRAY['Rapid Absorption', '66 Servings per tub', '27g Protein per scoop', '0g Added Sugar'],
    TRUE
),
(
    'zma-capsules-new',
    'ZMA Zinc & Magnesium',
    1799.00,
    1999.00,
    5.0,
    45,
    'Bestseller',
    'Vitamins',
    'vitamins',
    '/products/zma-capsules-new',
    '#8b5cf6',
    '/images/product-1.png',
    'ZMA - Zinc, Magnesium and Vitamin B6 formula for deep sleep, hormonal recovery, and cellular health.',
    ARRAY['Unflavored'],
    ARRAY['Muscle Strength Boost', 'Immunity & Recovery Support', '90 Capsules'],
    TRUE
),
(
    'l-carnitine-liquid',
    'L-Carnitine Liquid 3000mg',
    2159.00,
    NULL,
    4.0,
    89,
    NULL,
    'Weight Loss',
    'weight-loss',
    '/products/l-carnitine-liquid',
    '#f97316',
    '/images/product-2.png',
    'L-Carnitine Liquid helps convert body fat into clean cellular energy. Refreshing Orange flavor.',
    ARRAY['Orange Blast', 'Tangy Lemon'],
    ARRAY['Helps Convert Fat Into Energy', 'Suppresses Appetite', 'Fast Liquid Absorption'],
    TRUE
),
(
    'crank-pre-workout-new',
    'CRANK Pre-Workout',
    1999.00,
    NULL,
    5.0,
    201,
    'New',
    'Pre-Workout',
    'pre-workout',
    '/products/crank-pre-workout-new',
    '#f59e0b',
    '/images/product-3.png',
    'Advanced high-stimulant pre-workout formula engineered for increased strength, power, and vascular pumps.',
    ARRAY['Fruit Punch', 'Blue Raspberry', 'Electric Watermelon'],
    ARRAY['Explosive Energy', 'Laser-Sharp Focus', 'Pure Unadulterated Formula'],
    TRUE
)
ON CONFLICT (id) DO UPDATE SET
name = EXCLUDED.name,
price = EXCLUDED.price,
sale_price = EXCLUDED.sale_price,
rating = EXCLUDED.rating,
review_count = EXCLUDED.review_count,
badge = EXCLUDED.badge,
category = EXCLUDED.category,
category_id = EXCLUDED.category_id,
href = EXCLUDED.href,
accent = EXCLUDED.accent,
image = EXCLUDED.image,
description = EXCLUDED.description,
flavors = EXCLUDED.flavors,
features = EXCLUDED.features,
in_stock = EXCLUDED.in_stock;

-- 3. SEED REVIEWS
INSERT INTO public.reviews (product_id, user_name, rating, comment, verified_purchase) VALUES
('whey-protein-isolate-new', 'Vikram R.', 5, 'Best protein isolate I have used in India! Mixes smoothly with zero clumps.', TRUE),
('whey-protein-isolate-new', 'Aman Sharma', 5, 'Chocolate flavor is 10/10. Great recovery after heavy squat sessions.', TRUE),
('crank-pre-workout-new', 'Rahul Verma', 5, 'Clean energy boost without any crash afterwards. Pushes me through 2-hour sessions easily.', TRUE),
('zma-capsules-new', 'Siddharth M.', 5, 'Noticeable improvement in sleep quality and muscle soreness recovery.', TRUE);
