async function getProductDetail(id) {
  const res = await fetch('https://api2.cocoan.mx/public/products/get', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ product_id: id, images: true, categories: true, metadata: true })
  });
  const data = await res.json();
  console.log(`Product ${id}:`, JSON.stringify(data, null, 2));
}

getProductDetail(9368);
