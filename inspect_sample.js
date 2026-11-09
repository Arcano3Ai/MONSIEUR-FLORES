import fs from 'fs';

const raw = JSON.parse(fs.readFileSync('cocoan_products.json', 'utf8'));
const sample = raw.products.find(p => p.product_id === 9368); // Chocolate Dubai
console.log('Sample product keys:', Object.keys(sample));
console.log('Sample product:', JSON.stringify(sample, null, 2));
