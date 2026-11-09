import fetch from 'node-fetch';

async function testCocoan() {
  try {
    const res = await fetch('https://api2.cocoan.mx/public/shop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        categories: [],
        query: '',
        offset: 0,
        count: 50
      })
    });
    
    const data = await res.json();
    console.log('Success! Data keys:', Object.keys(data));
    if (data.products) {
      console.log('Products count:', data.products.length);
      console.log('First 3 products:', JSON.stringify(data.products.slice(0, 3), null, 2));
    } else {
      console.log('Response:', data);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

testCocoan();
