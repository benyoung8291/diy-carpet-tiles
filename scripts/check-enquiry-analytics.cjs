// Keep failed submissions out of lead totals, and work with analytics blocked.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const source = ts.transpileModule(fs.readFileSync('src/lib/analytics.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const events = [];
const context = {
  exports: {}, process: { env: {} },
  window: { location: { pathname: '/contact' }, gtag: (...args) => events.push(args) },
};
vm.runInNewContext(source, context);
const analytics = context.exports;
analytics.trackGenerateLeadOnSuccess({ ok: false }, 'quote', 'airbnb-flooring');
assert.equal(events.length, 0);
analytics.trackGenerateLeadOnSuccess({ ok: true }, 'samples', 'airbnb-flooring');
assert.equal(events.length, 1);
assert.equal(events[0][1], 'generate_lead');
assert.equal(events[0][2].request_type, 'samples');
assert.equal(events[0][2].sector, 'airbnb-flooring');
assert.equal(events[0][2].page_path, '/contact');
analytics.trackEnquiryEvent('enquiry_error', { error_type: 'network' });
assert.equal(events[1][1], 'enquiry_error');
assert.equal(events.filter(event => event[1] === 'generate_lead').length, 1);
delete context.window.gtag;
assert.doesNotThrow(() => analytics.trackGenerateLead());
delete context.window;
assert.doesNotThrow(() => analytics.trackGenerateLead());
console.log('Enquiry analytics checks passed: success-only leads, error events, blocked analytics and SSR.');
