const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  const file = 'file://' + path.resolve('be3415/index.html');
  await page.goto(file);
  await page.waitForTimeout(400);

  const views = ['home','map','plan','study','review','problems','cards','practice','exams','weak','cram'];
  for (const v of views) {
    await page.goto(file + '#' + v);
    await page.waitForTimeout(220);
    const h1 = await page.locator('main h1').first().innerText().catch(() => '(none)');
    const txt = await page.locator('main').innerText();
    console.log(`  ${v.padEnd(9)} h1="${h1.slice(0,46)}" ${txt.length} chars`);
    if (txt.length < 200) errors.push(v + ': view looks empty');
    if (/undefined|\[object Object\]|NaN/.test(txt)) {
      const m = txt.match(/.{0,60}(undefined|\[object Object\]|NaN).{0,60}/);
      errors.push(v + ': suspicious text -> ' + m[0].replace(/\n/g,' '));
    }
  }
  // a topic page
  await page.goto(file + '#topic-primer');
  await page.waitForTimeout(250);
  const tt = await page.locator('article.topic h1').innerText();
  console.log('  topic page h1 =', tt);

  console.log(errors.length ? '\nPROBLEMS:\n' + errors.join('\n') : '\nNo console errors, every view rendered');
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
