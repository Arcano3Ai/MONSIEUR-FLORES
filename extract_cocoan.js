import fs from 'fs';

const bundle = fs.readFileSync('cocoan_bundle.js', 'utf8');
console.log(bundle.slice(331200, 332600));
