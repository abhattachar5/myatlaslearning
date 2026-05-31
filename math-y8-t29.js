// math-y8-t29.js — Year 8 Maths Topic 29: Rounding & Accuracy
// Islands: m8i-29-1 (Rounding & Significant Figures), m8i-29-2 (Upper & Lower Bounds)
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-29-1 — Rounding & Significant Figures
  {id:"m8fc-29-1-1",islandId:"m8i-29-1",front:"How do you round a number to a given number of decimal places?",
   back:"Look at the digit ONE place to the right of where you are rounding.\n• If it is 5 or more → round UP\n• If it is 4 or less → round DOWN (leave the digit)\n\nExample: 3.7482 to 2 d.p. → look at the 3rd decimal (8) → 8 ≥ 5 → round up → 3.75",difficulty:1,category:"definition"},
  {id:"m8fc-29-1-2",islandId:"m8i-29-1",front:"Round 3.7482 to 2 decimal places.",
   back:"3.75\n\nThe 3rd decimal digit is 8. Since 8 ≥ 5, round the 2nd decimal (4) up to 5.\n3.74|82 → 3.75",difficulty:1,category:"calculation"},
  {id:"m8fc-29-1-3",islandId:"m8i-29-1",front:"What is the FIRST significant figure of a number?",
   back:"The first significant figure is the first NON-ZERO digit, reading from the left.\n\n• 0.00417 → first s.f. is 4\n• 38,200 → first s.f. is 3\nZeros at the start (before the first non-zero digit) are NOT significant.",difficulty:2,category:"definition"},
  {id:"m8fc-29-1-4",islandId:"m8i-29-1",front:"Round 0.004917 to 2 significant figures.",
   back:"0.0049\n\nFirst s.f. = 4, second s.f. = 9. Look at the next digit (1): 1 < 5 → round down.\nThe two significant figures are 4 and 9, so the answer is 0.0049.",difficulty:2,category:"calculation"},
  {id:"m8fc-29-1-5",islandId:"m8i-29-1",front:"Round 48,361 to 2 significant figures.",
   back:"48,000\n\nFirst s.f. = 4, second s.f. = 8. The next digit is 3 (3 < 5) → round down.\nKeep 48, replace the remaining digits with zeros (place-holders): 48,000",difficulty:2,category:"calculation"},
  {id:"m8fc-29-1-6",islandId:"m8i-29-1",front:"Estimate (4.8 × 21) ÷ 0.49 by rounding each number to 1 significant figure.",
   back:"≈ 200\n\nRound to 1 s.f.: 4.8 ≈ 5, 21 ≈ 20, 0.49 ≈ 0.5\n(5 × 20) ÷ 0.5 = 100 ÷ 0.5 = 200\n\nEstimation checks whether an answer is sensible — the exact value (≈ 205.7) is close.",difficulty:3,category:"application"},

  // m8i-29-2 — Upper & Lower Bounds
  {id:"m8fc-29-2-1",islandId:"m8i-29-2",front:"How do you find the upper and lower bounds of a rounded value?",
   back:"Go HALF of the rounding unit above and below the value.\n\nRounded to the nearest 1 → ±0.5\nRounded to the nearest 10 → ±5\nRounded to the nearest 0.1 → ±0.05\n\nThe lower bound uses ≤ and the upper bound uses < (it would round up).",difficulty:1,category:"definition"},
  {id:"m8fc-29-2-2",islandId:"m8i-29-2",front:"A length is 24 cm to the nearest cm. What are its bounds?",
   back:"23.5 cm ≤ length < 24.5 cm\n\nHalf a unit (0.5 cm) either side of 24.\nLower bound 23.5 (rounds up to 24); upper bound 24.5 is NOT included because 24.5 would round to 25.",difficulty:1,category:"calculation"},
  {id:"m8fc-29-2-3",islandId:"m8i-29-2",front:"What is an error interval?",
   back:"An error interval shows the range of possible values for a rounded number, written with inequalities.\n\nFor 24 cm (nearest cm): 23.5 ≤ x < 24.5\nThe lower bound uses ≤ (included); the upper bound uses < (not included).",difficulty:2,category:"definition"},
  {id:"m8fc-29-2-4",islandId:"m8i-29-2",front:"A mass is 30 g to the nearest 10 g. Write the error interval.",
   back:"25 ≤ m < 35\n\nThe rounding unit is 10, so half a unit is 5.\n30 − 5 = 25 (lower bound, included)\n30 + 5 = 35 (upper bound, not included)",difficulty:2,category:"calculation"},
  {id:"m8fc-29-2-5",islandId:"m8i-29-2",front:"Why does the upper bound use < and not ≤?",
   back:"Because the upper bound value itself would round UP to the next value.\n\nFor 24 cm (nearest cm), 24.5 would round to 25, not 24. So 24.5 is the boundary but is NOT included — we write length < 24.5.",difficulty:2,category:"concept"},
  {id:"m8fc-29-2-6",islandId:"m8i-29-2",front:"x = 3.6 correct to 1 decimal place. Write the error interval for x.",
   back:"3.55 ≤ x < 3.65\n\n1 d.p. means rounded to the nearest 0.1, so half a unit is 0.05.\n3.6 − 0.05 = 3.55 (included); 3.6 + 0.05 = 3.65 (not included).",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-29-1":[
    {q:"Round 7.396 to 1 decimal place.",opts:["7.3","7.4","7.40","8.0"],c:1,e:"Look at the 2nd decimal digit (9). Since 9 ≥ 5, round the 1st decimal (3) up to 4: 7.4."},
    {q:"Round 0.05728 to 3 significant figures.",opts:["0.057","0.0573","0.0572","0.06"],c:1,e:"The significant figures start at 5: 5, 7, 2. The next digit is 8 (≥ 5), so round the 2 up to 3: 0.0573."},
    {q:"Round 26,548 to 2 significant figures.",opts:["26,000","27,000","26,500","30,000"],c:1,e:"First two significant figures are 2 and 6. The next digit is 5 (≥ 5), so round 6 up to 7, then fill with place-holding zeros: 27,000."},
    {q:"Estimate 312 × 4.9 by rounding each number to 1 significant figure.",opts:["1,200","1,500","1,600","15,000"],c:1,e:"312 ≈ 300 and 4.9 ≈ 5. So 300 × 5 = 1,500. (The exact answer, 1,528.8, is close.)"},
    {q:"Round 9.96 to 1 decimal place.",opts:["9.9","9.96","10.0","10"],c:2,e:"The 2nd decimal is 6 (≥ 5), so round the 9 up. 9.9 rounds up to 10.0 (the carry ripples through). Written to 1 d.p. it is 10.0."}
  ],
  "m8i-29-2":[
    {q:"A length is 8 m, measured to the nearest metre. What is the lower bound?",opts:["7 m","7.5 m","8.5 m","7.9 m"],c:1,e:"To the nearest metre, the bounds are half a metre either side of 8: lower bound 7.5 m, upper bound 8.5 m. The lower bound is 7.5 m."},
    {q:"A mass is 450 g to the nearest 10 g. Write the error interval.",opts:["449 ≤ m < 451","445 ≤ m < 455","440 ≤ m < 460","445 < m ≤ 455"],c:1,e:"The rounding unit is 10 g, so half a unit is 5 g. 450 − 5 = 445 (included, ≤) and 450 + 5 = 455 (not included, <): 445 ≤ m < 455."},
    {q:"A distance is 24 cm to the nearest cm. What is the upper bound?",opts:["24.4 cm","24.5 cm","25 cm","24.9 cm"],c:1,e:"Half a centimetre above 24 is 24.5 cm. This is the upper bound — though 24.5 itself is not included (it would round up to 25)."},
    {q:"x = 3.6 correct to 1 decimal place. Which is the error interval for x?",opts:["3.5 ≤ x < 3.7","3.55 ≤ x < 3.65","3.59 ≤ x < 3.61","3.55 < x ≤ 3.65"],c:1,e:"1 d.p. means nearest 0.1, so half a unit is 0.05. 3.6 − 0.05 = 3.55 (included) and 3.6 + 0.05 = 3.65 (not included): 3.55 ≤ x < 3.65."},
    {q:"A number rounds to 200 when rounded to the nearest 100. Which value is NOT possible?",opts:["152","199","249","251"],c:3,e:"To the nearest 100, values from 150 up to (but not including) 250 round to 200. 251 rounds to 300, so it is not possible. 152, 199 and 249 all round to 200."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-29-1': `
<h2>Rounding &amp; Significant Figures</h2>
<p>Rounding makes numbers simpler to work with and lets you <strong>estimate</strong> answers quickly. You need to round both to <strong>decimal places (d.p.)</strong> and to <strong>significant figures (s.f.)</strong>.</p>

<h3>Rounding to decimal places</h3>
<p>Look at the digit <strong>one place to the right</strong> of where you are rounding. If it is 5 or more, round up; if 4 or less, round down.</p>
<div class="example-box">
<p><strong>Example:</strong> Round 3.7482 to 2 decimal places.</p>
<p>The 3rd decimal digit is <strong>8</strong>. Since 8 ≥ 5, round the 2nd decimal (4) up to 5.<br>
Answer: <strong>3.75</strong></p>
</div>

<h3>Significant figures</h3>
<p>The <strong>first significant figure</strong> is the first non-zero digit, reading from the left. Count significant figures from there.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Number</th><th style="padding:8px;border:1px solid #ccc">To 2 s.f.</th><th style="padding:8px;border:1px solid #ccc">Why</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">0.004917</td><td style="padding:8px;border:1px solid #ccc">0.0049</td><td style="padding:8px;border:1px solid #ccc">1st s.f. = 4, next digit 1 &lt; 5</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">48,361</td><td style="padding:8px;border:1px solid #ccc">48,000</td><td style="padding:8px;border:1px solid #ccc">keep 4 and 8; fill with zeros</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">26,548</td><td style="padding:8px;border:1px solid #ccc">27,000</td><td style="padding:8px;border:1px solid #ccc">next digit 5 → round 6 up to 7</td></tr>
</table>
<p>The zeros after rounding a large number are <strong>place-holders</strong> — they keep the digits in the right columns.</p>

<h3>Estimating calculations</h3>
<div class="example-box">
<p><strong>Example:</strong> Estimate (4.8 × 21) ÷ 0.49.</p>
<p>Round each number to 1 s.f.: 4.8 ≈ 5, 21 ≈ 20, 0.49 ≈ 0.5<br>
(5 × 20) ÷ 0.5 = 100 ÷ 0.5 = <strong>200</strong><br>
Use estimates to check a calculator answer is sensible.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Decimal place</dt><dd>The position of a digit after the decimal point.</dd>
<dt>Significant figure</dt><dd>A digit that contributes to the accuracy of a number, counted from the first non-zero digit.</dd>
<dt>Estimate</dt><dd>An approximate answer, usually found by rounding to 1 s.f.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Counting leading zeros as significant — ✅ 0.0049 has 2 s.f. (the 4 and the 9).</li>
<li>❌ Forgetting place-holding zeros — ✅ 26,548 to 2 s.f. is 27,000, not 27.</li>
<li>❌ Ignoring the carry — ✅ 9.96 to 1 d.p. rounds up to 10.0, not 9.9.</li>
</ul>`,

'm8i-29-2': `
<h2>Upper &amp; Lower Bounds</h2>
<p>A rounded measurement is not exact — the true value lies within a range. The smallest possible value is the <strong>lower bound</strong> and the largest is the <strong>upper bound</strong>.</p>

<h3>Finding the bounds</h3>
<p>Go <strong>half of the rounding unit</strong> above and below the rounded value.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Rounded to nearest…</th><th style="padding:8px;border:1px solid #ccc">Half a unit</th><th style="padding:8px;border:1px solid #ccc">Example value</th><th style="padding:8px;border:1px solid #ccc">Bounds</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1</td><td style="padding:8px;border:1px solid #ccc">0.5</td><td style="padding:8px;border:1px solid #ccc">24</td><td style="padding:8px;border:1px solid #ccc">23.5 to 24.5</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">10</td><td style="padding:8px;border:1px solid #ccc">5</td><td style="padding:8px;border:1px solid #ccc">450</td><td style="padding:8px;border:1px solid #ccc">445 to 455</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">0.1 (1 d.p.)</td><td style="padding:8px;border:1px solid #ccc">0.05</td><td style="padding:8px;border:1px solid #ccc">3.6</td><td style="padding:8px;border:1px solid #ccc">3.55 to 3.65</td></tr>
</table>

<h3>Error intervals (inequality notation)</h3>
<p>Write the range using inequalities. The lower bound is <strong>included</strong> (≤); the upper bound is <strong>not included</strong> (&lt;), because it would round up.</p>
<div class="example-box">
<p><strong>Example:</strong> A length is 24 cm to the nearest cm. Write the error interval.</p>
<p>Half a unit is 0.5 cm.<br>
Lower bound = 24 − 0.5 = 23.5 cm (included)<br>
Upper bound = 24 + 0.5 = 24.5 cm (not included — 24.5 rounds up to 25)<br>
Error interval: <strong>23.5 ≤ length &lt; 24.5</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Lower bound</dt><dd>The smallest value that rounds to the given measurement.</dd>
<dt>Upper bound</dt><dd>The boundary above which values round to the next number (not itself included).</dd>
<dt>Error interval</dt><dd>The range of possible true values, written with ≤ and &lt;.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using ± the whole unit — ✅ use HALF the rounding unit (nearest 10 → ±5, not ±10).</li>
<li>❌ Writing ≤ for the upper bound — ✅ the upper bound uses &lt; because it would round up.</li>
<li>❌ Halving the wrong unit for decimals — ✅ to 1 d.p. the unit is 0.1, so half is 0.05.</li>
</ul>`

});
