// Loads be3415 files the way a browser would (window properties become globals).
// Files come from $BEFILES so a test script's own path is never loaded.
const fs = require('fs'), vm = require('vm');
const ctx = vm.createContext({});
ctx.window = ctx;
ctx.console = console;
for (const f of (process.env.BEFILES || '').split(':').filter(Boolean))
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
module.exports = ctx;
