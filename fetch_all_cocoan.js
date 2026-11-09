import fs from 'fs';

async function fetchAllCocoan() {
  const res = await fetch('https://api2.cocoan.mx/public/shop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ categories: [], query: '', offset: 0, count: 100 })
  });
  const json = await res.json();
  const products = json.data.products;
  console.log(`Retrieved ${products.length} products.`);

  // Fetch categories as well
  const catRes = await fetch('https://api2.cocoan.mx/public/categories', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({})
  });
  const catJson = await catRes.json();
  console.log('Categories:', catJson);

  fs.writeFileSync('cocoan_products.json', JSON.stringify({
    products,
    categories: catJson.data || catJson
  }, null, 2));

  // Print summary of products
  products.forEach((p, i) => {
    console.log(`${i + 1}. [ID: ${p.product_id}] ${p.product_name} - $${p.cost_single || p.price} MXN (Brand/Cat: ${p.category_name || p.brand || 'COCOAN'})`);
  });
}

fetchAllCocoan();
