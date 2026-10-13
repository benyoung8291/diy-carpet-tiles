// Run after npm run build: verify search metadata, crawl paths and form context.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function loadData(file) {
  const context = { exports: {} };
  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  vm.runInNewContext(compiled, context);
  return context.exports;
}
function decode(text) {
  return text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}
const { sectorPages } = loadData('src/lib/sector-pages.ts');
const { sectorNavigation, isSectorSlug } = loadData('src/lib/sector-navigation.ts');
const origin = 'https://www.modularcarpet.com.au';
const homepage = fs.readFileSync('.next/server/app/index.html', 'utf8');
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const fullDescriptions = fs.readFileSync('public/llms-full.txt', 'utf8');
const shortDescriptions = fs.readFileSync('public/llms.txt', 'utf8');
for (const field of ['slug', 'title', 'description', 'heading']) {
  assert.equal(new Set(sectorPages.map(page => page[field])).size, sectorPages.length, `Duplicate ${field}`);
}
assert.equal(sectorPages.length, 8);
assert.equal(sectorNavigation.length, sectorPages.length);
assert.equal(isSectorSlug('unrecognised-context'), false);
for (const page of sectorPages) {
  const html = fs.readFileSync(`.next/server/app/${page.slug}.html`, 'utf8');
  const url = `${origin}/${page.slug}`;
  assert(isSectorSlug(page.slug), `${page.slug}: missing from menu`);
  assert(homepage.includes(`href="/${page.slug}"`), `${page.slug}: orphaned from homepage`);
  assert(sitemap.includes(`<loc>${url}</loc>`), `${page.slug}: absent from sitemap`);
  assert(shortDescriptions.includes(url) && fullDescriptions.includes(url), `${page.slug}: public description absent`);
  assert(html.includes(`<link rel="canonical" href="${url}"`), `${page.slug}: wrong canonical`);
  assert.equal(decode(html.match(/<title>(.*?)<\/title>/s)[1]), page.title);
  assert.equal(decode(html.match(/<h1[^>]*>(.*?)<\/h1>/s)[1].replace(/<[^>]*>/g, '')), page.heading);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert(html.includes(`name="sector" value="${page.slug}"`), `${page.slug}: form context absent`);
  const required = [...html.matchAll(/<input\b[^>]*>/g)].filter(match => /\brequired=/.test(match[0])).map(match => match[0].match(/name="([^"]*)"/)[1]);
  assert.deepEqual(required.sort(), ['email', 'name']);
  assert(decode(html).includes(`request=samples&sector=${page.slug}#enquiry`), `${page.slug}: sample context absent`);
  const schema = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(match => {
    const parsed = JSON.parse(match[1]); return Array.isArray(parsed) ? parsed : [parsed];
  });
  const faq = schema.find(item => item['@type'] === 'FAQPage');
  assert(faq && faq.mainEntity.length === page.faqs.length);
  for (const item of page.faqs) {
    assert(faq.mainEntity.some(question => question.name === item.question && question.acceptedAnswer.text === item.answer));
    assert(decode(html).includes(item.question) && decode(html).includes(item.answer), `${page.slug}: schema differs from visible FAQs`);
  }
  assert(schema.some(item => item['@type'] === 'Service' && item.url === url));
  for (const related of page.related) assert(sectorPages.some(item => item.slug === related), `${page.slug}: broken related link`);
}
console.log('Eight sector pages passed: unique metadata and H1s, canonicals, crawl links, sitemap, visible FAQs, quote forms and sample context.');
