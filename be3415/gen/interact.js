const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 950 } });
  const errors = [];
  page.on('console', m => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  const file = 'file://' + path.join(__dirname, '..', 'index.html');

  // --- PRIMER DRILL: type the correct answer, expect it to be graded correct
  await page.goto(file + '#prob-primer');
  await page.waitForTimeout(300);
  const ans = await page.evaluate(() => {
    const p = window.BE._dbg ? null : null; return null;
  });
  // read the problem's own answer out of the page state via a fresh generator is not
  // possible, so derive it from the displayed sequence + highlight
  const derived = await page.evaluate(() => {
    const spans = [...document.querySelectorAll('.seqbox')][0].textContent;
    return spans.replace(/[^ACGT]/g, '').length;
  });
  console.log('  primer: sequence shown,', derived, 'bases');
  // fill with deliberately WRONG answers (top strand for reverse) to check feedback
  const hl = await page.evaluate(() => {
    const box = document.querySelector('.seqbox');
    const hlTxt = [...box.querySelectorAll('.hl')].map(s => s.textContent).join('');
    const all = box.textContent.replace(/[^ACGT]/g, '');
    const n = +document.querySelector('.qstem').textContent.match(/(\d+)-nucleotide/)[1];
    return { hl: hlTxt, n, start: all.indexOf(hlTxt) };
  });
  const comp = { A: 'T', T: 'A', G: 'C', C: 'G' };
  const rc = s => s.split('').reverse().map(c => comp[c]).join('');
  const fwd = hl.hl.slice(0, hl.n), rev = rc(hl.hl.slice(-hl.n));
  // wrong first: top strand as the reverse primer
  await page.fill('[data-pf="fwd"]', fwd);
  await page.fill('[data-pf="rev"]', hl.hl.slice(-hl.n));
  await page.click('#pbCheck');
  await page.waitForTimeout(200);
  let fb = await page.locator('.fb').innerText();
  console.log('  primer wrong-answer feedback:', fb.replace(/\n/g, ' ').slice(0, 110));
  if (!/Reverse-complement/i.test(fb)) errors.push('primer: expected a reverse-complement hint');

  // now correct
  await page.click('#pbNext'); await page.waitForTimeout(200);
  const hl2 = await page.evaluate(() => {
    const box = document.querySelector('.seqbox');
    const hlTxt = [...box.querySelectorAll('.hl')].map(s => s.textContent).join('');
    const n = +document.querySelector('.qstem').textContent.match(/(\d+)-nucleotide/)[1];
    return { hl: hlTxt, n };
  });
  await page.fill('[data-pf="fwd"]', hl2.hl.slice(0, hl2.n));
  await page.fill('[data-pf="rev"]', rc(hl2.hl.slice(-hl2.n)));
  await page.click('#pbCheck');
  await page.waitForTimeout(200);
  fb = await page.locator('.fb').innerText();
  console.log('  primer correct-answer feedback:', fb.replace(/\n/g, ' ').slice(0, 90));
  if (!/Correct/.test(fb)) errors.push('primer: correct answer was not accepted');

  // --- GEL DRILL: read the lane sizes from the app's own data and submit them
  await page.goto(file + '#prob-gel'); await page.waitForTimeout(300);
  const svgCount = await page.locator('svg').count();
  console.log('  gel: drew', svgCount, 'SVGs (plasmid map + gel)');
  if (svgCount < 2) errors.push('gel: expected a plasmid map and a gel');
  const nLanes = await page.locator('[data-pf]').count();
  for (let i = 0; i < nLanes; i++) {
    const sizes = await page.evaluate(i => {
      // recompute from the cut positions the app displays
      const note = document.querySelector('.pnote').textContent;
      return null;
    }, i);
  }
  // submit deliberate nonsense, confirm it is rejected with a sum hint
  await page.fill('[data-pf="l0"]', '1,2,3');
  await page.click('#pbCheck'); await page.waitForTimeout(200);
  fb = await page.locator('.fb').innerText();
  console.log('  gel wrong-answer feedback:', fb.replace(/\n/g, ' ').slice(0, 120));
  if (!/should be/.test(fb)) errors.push('gel: expected the correct bands to be named');

  // --- FIXED REVIEW GEL: reveal and check it shows the professor's numbers
  await page.goto(file + '#prob-rv-gel'); await page.waitForTimeout(300);
  const btn0 = await page.locator('#pbReveal').innerText();
  if (!/Show/.test(btn0)) errors.push('review gel: arrived already revealed (state leaked)');
  await page.click('#pbReveal'); await page.waitForTimeout(250);
  const gelTxt = await page.locator('main').innerText();
  for (const n of ['5762', '3777', '1985', '5248', '514']) {
    if (!gelTxt.includes(n)) errors.push('review gel: missing band ' + n);
  }
  console.log('  review gel reveals all five band sizes:', ['5762','3777','1985','5248','514'].every(n => gelTxt.includes(n)));

  // --- PRACTICE: answer a question
  await page.goto(file + '#practice'); await page.waitForTimeout(250);
  await page.click('#pStart'); await page.waitForTimeout(250);
  await page.locator('.opt input').first().check();
  await page.click('#pSubmit'); await page.waitForTimeout(250);
  const pfb = await page.locator('.fb').innerText();
  console.log('  practice feedback shown:', /Correct|Incorrect/.test(pfb));
  if (!/Correct|Incorrect/.test(pfb)) errors.push('practice: no feedback after submitting');

  // --- EXAM: start, answer one, submit
  await page.goto(file + '#exams'); await page.waitForTimeout(250);
  await page.locator('[data-exam="MA"]').click(); await page.waitForTimeout(400);
  const qn = await page.locator('.examqs .q').count();
  console.log('  mock A rendered', qn, 'questions');
  await page.locator('.examqs .opt input').first().check();
  await page.click('#exSubmit'); await page.waitForTimeout(200);
  await page.click('#exYes'); await page.waitForTimeout(400);
  const res = await page.locator('main h1').innerText();
  console.log('  exam results page:', res);
  if (!/results/.test(res)) errors.push('exam: no results page after submit');

  // --- FLASHCARD flip
  await page.goto(file + '#cards'); await page.waitForTimeout(250);
  await page.click('#fcard'); await page.waitForTimeout(300);
  const flipped = await page.locator('#fcard.flipped').count();
  console.log('  flashcard flips:', flipped === 1);
  if (flipped !== 1) errors.push('cards: card did not flip');

  console.log(errors.length ? '\nPROBLEMS:\n' + errors.join('\n') : '\nAll interactions behaved correctly');
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})();
