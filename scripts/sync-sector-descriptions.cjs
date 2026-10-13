// Keep public machine-readable sector descriptions aligned with the page content.
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const compiled = ts.transpileModule(fs.readFileSync('src/lib/sector-pages.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(compiled, context);
const pages = context.exports.sectorPages;
const origin = 'https://www.modularcarpet.com.au';
const start = '<!-- sector-pages:start -->';
const end = '<!-- sector-pages:end -->';
function replaceBlock(file, content) {
  let text = fs.readFileSync(file, 'utf8');
  const position = text.indexOf(start);
  if (position !== -1) {
    const finish = text.indexOf(end, position);
    if (finish === -1) throw new Error(`Missing marker in ${file}`);
    text = text.slice(0, position) + text.slice(finish + end.length);
  }
  fs.writeFileSync(file, text.trimEnd() + '\n\n' + start + '\n' + content + '\n' + end + '\n');
}
replaceBlock('public/llms.txt', '## Flooring by Property Type\n\n' + pages.map(page => `- [${page.label}](${origin}/${page.slug}): ${page.description}`).join('\n'));
replaceBlock('public/llms-full.txt', pages.map(page => [
  '---', `# Page: ${page.label} Flooring`, `URL: ${origin}/${page.slug}`, `# ${page.heading}`,
  page.audience, page.intro, `## ${page.overviewHeading}`, page.overview,
  ...page.benefits.flatMap(item => [`### ${item.title}`, item.body]),
  `## ${page.areasHeading}`, ...page.areas.flatMap(item => [`### ${item.title}`, item.body]),
  `## ${page.checklistHeading}`, page.checklist.map(item => '- ' + item).join('\n'),
  `## ${page.quoteHeading}`, page.quoteIntro,
  `Quote form: name and email required. Project details optional. Enquiry sector: ${page.slug}.`,
  `Free samples: ${origin}/contact?request=samples&sector=${page.slug}#enquiry`,
  'Supply-only Australia-wide; supply and installation in Melbourne, Sydney and Brisbane. Other installation locations require individual discussion.',
  '## Common Questions', ...page.faqs.flatMap(item => [`### ${item.question}`, item.answer]),
  '## Related Flooring Briefs', page.related.map(slug => `- ${origin}/${slug}`).join('\n'),
].join('\n\n')).join('\n\n'));
console.log(`Updated public descriptions for ${pages.length} sector pages.`);
