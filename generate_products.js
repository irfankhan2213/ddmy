const fs = require('fs');

const data = JSON.parse(fs.readFileSync('/Users/irfan/.gemini/antigravity/scratch/supplement_store_batch2/products.json', 'utf8'));
const urls = JSON.parse(fs.readFileSync('batch2_urls.json', 'utf8'));

let out = '';

for (const p of data.products) {
  const frontImage = urls[p.images.front_hero];
  const backImage = urls[p.images.back_view];
  
  let supplementFactsStr = '';
  if (p.supplement_facts) {
    const rows = [];
    for (const [k, v] of Object.entries(p.supplement_facts)) {
      const label = k.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      rows.push(`{ label: '${label}', value: '${v}' }`);
    }
    supplementFactsStr = `supplementFacts: {\n      rows: [\n        ${rows.join(',\n        ')}\n      ]\n    },`;
  }
  
  const productCode = `
  {
    id: '${p.id}',
    name: '${p.product_name}',
    series: '${p.brand} ${data.collection_name}',
    price: 34.99, // default placeholder
    rating: 5,
    reviewCount: Math.floor(Math.random() * 50) + 10,
    category: '${p.category}',
    href: '/products/${p.id}',
    accent: '#000000',
    image: '${frontImage}',
    gallery: [
      { view: 'Front Hero', url: '${frontImage}', altText: '${p.product_name} Front View' },
      { view: 'Back Label', url: '${backImage}', altText: '${p.product_name} Back Label' }
    ],
    size: '${p.size}',
    servingsCount: ${p.servings_per_container},
    servingSize: '${p.serving_size}',
    description: '${p.product_name} by ${p.brand}. Category: ${p.category}.',
    features: [
      '${p.other_ingredients.replace(/'/g, "\\'")}'
    ],
    ${supplementFactsStr}
    ingredients: '${p.other_ingredients.replace(/'/g, "\\'")}',
    certifications: ${JSON.stringify(p.certifications)}
  },`;
  out += productCode;
}

const targetFile = 'data/products.ts';
let tsContent = fs.readFileSync(targetFile, 'utf8');

// Find the end of the array `]` before bestSellers
const closingBracketIndex = tsContent.lastIndexOf('\n]');
if (closingBracketIndex !== -1) {
  tsContent = tsContent.slice(0, closingBracketIndex) + out + '\n' + tsContent.slice(closingBracketIndex);
  fs.writeFileSync(targetFile, tsContent, 'utf8');
  console.log('Successfully injected products into data/products.ts');
} else {
  console.log('Failed to find closing bracket in data/products.ts');
}
