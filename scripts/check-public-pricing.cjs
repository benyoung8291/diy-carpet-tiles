// Run after npm run build: verify amounts are absent from all published content.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
function files(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? files(target) : [target];
  });
}
const monetaryKeys = new Set(['price', 'priceCurrency', 'priceSpecification', 'shippingRate', 'priceRange']);
function checkSchema(value, file) {
  if (!value || typeof value !== 'object') return;
  for (const [key, nested] of Object.entries(value)) {
    assert(!monetaryKeys.has(key), `${file}: public pricing schema field ${key}`);
    checkSchema(nested, file);
  }
}
const pages = files('.next/server/app').filter(file => file.endsWith('.html'));
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    checkSchema(JSON.parse(match[1]), file);
  }
  const content = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/g, '').replace(/<!--[\s\S]*?-->/g, '').replace(/<[^>]*>/g, '').replace(/&#36;|&dollar;/g, '$');
  assert(!/\$\s*\d/.test(content), `${file}: displayed currency amount`);
  for (const match of html.matchAll(/<meta\s[^>]*content="([^"]*)"/g)) {
    assert(!/\$\s*\d/.test(match[1]), `${file}: pricing in metadata`);
  }
}
for (const file of ['public/llms.txt', 'public/llms-full.txt']) {
  assert(!/\$\s*\d/.test(fs.readFileSync(file, 'utf8')), `${file}: public currency amount`);
}
for (const file of files('.next/static/chunks').filter(file => file.endsWith('.js'))) {
  assert(!fs.readFileSync(file, 'utf8').includes('66.55'), `${file}: original unit price in a client bundle`);
}
console.log(`Public pricing checks passed across ${pages.length} HTML pages, schema, metadata, machine-readable files and client bundles.`);
