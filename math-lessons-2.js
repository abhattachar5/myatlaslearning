// math-lessons-2.js — Lesson HTML for Topics 5-8
// Aligned to island names in math-data.js

Object.assign(LESSONS, {

// ── mi-05-1: Decimal Place Values & Ordering ─────────────────────────────────
'mi-05-1': `
<h2>Decimal Place Values &amp; Ordering</h2>
<p>The decimal point separates whole numbers (on the left) from parts less than one (on the right). Each column to the right is ten times smaller than the column before it.</p>

<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Hundreds</th>
    <th style="padding:8px;border:1px solid #ccc">Tens</th>
    <th style="padding:8px;border:1px solid #ccc">Units</th>
    <th style="padding:8px;border:1px solid #ccc;background:#fff9c4;font-size:1.2em">•</th>
    <th style="padding:8px;border:1px solid #ccc">Tenths</th>
    <th style="padding:8px;border:1px solid #ccc">Hundredths</th>
    <th style="padding:8px;border:1px solid #ccc">Thousandths</th>
  </tr>
  <tr style="text-align:center;font-size:1.15em;font-weight:bold">
    <td style="padding:10px;border:1px solid #ccc;color:#1565c0">3</td>
    <td style="padding:10px;border:1px solid #ccc;color:#1565c0">4</td>
    <td style="padding:10px;border:1px solid #ccc;color:#1565c0">5</td>
    <td style="padding:10px;border:1px solid #ccc;background:#fff9c4;color:#f57f17">.</td>
    <td style="padding:10px;border:1px solid #ccc;color:#c62828">6</td>
    <td style="padding:10px;border:1px solid #ccc;color:#c62828">7</td>
    <td style="padding:10px;border:1px solid #ccc;color:#c62828">8</td>
  </tr>
  <tr style="text-align:center;font-size:0.8em;color:#666">
    <td style="padding:4px;border:1px solid #ccc">300</td>
    <td style="padding:4px;border:1px solid #ccc">40</td>
    <td style="padding:4px;border:1px solid #ccc">5</td>
    <td style="padding:4px;border:1px solid #ccc;background:#fff9c4"></td>
    <td style="padding:4px;border:1px solid #ccc">6/10</td>
    <td style="padding:4px;border:1px solid #ccc">7/100</td>
    <td style="padding:4px;border:1px solid #ccc">8/1000</td>
  </tr>
</table>
<p>In 345.678, the digit 7 is in the hundredths column, so its value is 7/100 = 0.07. Notice the decimal point does not move — only your understanding of which column each digit sits in changes.</p>

<h3>Ordering Decimals</h3>
<p>Add trailing zeros to make all decimals the same length, then compare digit by digit from left to right — just like ordering whole numbers.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Order: 0.45 &nbsp; 0.5 &nbsp; 0.409</strong><br><br>
  Step 1 — rewrite with 3 decimal places: &nbsp; 0.450 &nbsp; 0.500 &nbsp; 0.409<br>
  Step 2 — compare tenths: 4, 5, 4 → 0.500 is largest.<br>
  Step 3 — compare hundredths of the two 0.4__ : 5 &gt; 0 → 0.450 &gt; 0.409<br>
  <br>
  <svg width="100%" height="40" viewBox="0 0 380 40" style="max-width:380px;display:block">
    <rect x="0" y="10" width="380" height="20" rx="4" fill="#e8f5e9"/>
    <text x="10" y="25" font-size="13" fill="#2e7d32" font-weight="bold">0.409 &lt; 0.45 &lt; 0.5</text>
  </svg>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Common mistake:</strong> 0.5 looks "smaller" than 0.409 because it has fewer digits — but 0.5 = 0.500 which is clearly larger. Always equalise decimal places before comparing.
</div>`,

// ── mi-05-2: Rounding Decimals ────────────────────────────────────────────────
'mi-05-2': `
<h2>Rounding Decimals</h2>
<p>Use exactly the same rule as rounding whole numbers — look at the digit immediately to the right of your target place. That digit is the <strong>decider</strong>.</p>

<svg width="100%" height="80" viewBox="0 0 420 80" style="max-width:420px;display:block;margin:0.75em 0">
  <rect x="0" y="5" width="200" height="70" rx="8" fill="#e8f5e9"/>
  <rect x="210" y="5" width="200" height="70" rx="8" fill="#fff9c4"/>
  <text x="100" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">Decider is 0–4</text>
  <text x="100" y="48" text-anchor="middle" font-size="12" fill="#2e7d32">→ Round DOWN</text>
  <text x="100" y="65" text-anchor="middle" font-size="11" fill="#555">(keep target digit)</text>
  <text x="310" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#e65100">Decider is 5–9</text>
  <text x="310" y="48" text-anchor="middle" font-size="12" fill="#e65100">→ Round UP</text>
  <text x="310" y="65" text-anchor="middle" font-size="11" fill="#555">(add 1 to target digit)</text>
</svg>

<h3>Rounding to Decimal Places</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 3.4729 to 2 decimal places (2 d.p.)</strong><br>
  Target digit: 7 (2nd decimal place). &nbsp; Decider: 2 (next digit) → round down.<br>
  Answer: <strong>3.47</strong>
</div>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 5.896 to 1 d.p.</strong><br>
  Target digit: 8 (1st decimal place). &nbsp; Decider: 9 → round up (8 becomes 9).<br>
  Answer: <strong>5.9</strong>
</div>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 7.995 to 2 d.p.</strong><br>
  Target digit: 9 (2nd decimal place). &nbsp; Decider: 5 → round up (9 becomes 10 → carry over).<br>
  Answer: <strong>8.00</strong> — this is why we must write the trailing zeros: 8 rounded to 2 d.p. is 8.00, not just 8.
</div>

<h3>Rounding to Significant Figures</h3>
<p>Start counting significant figures (s.f.) from the first <em>non-zero</em> digit, wherever it appears.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 0.004572 to 2 s.f.</strong><br>
  Leading zeros are not significant. First s.f. = 4, second s.f. = 5. Decider = 7 → round up.<br>
  Answer: <strong>0.0046</strong>
</div>

<h3>When to Use Which</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:1em 0">
  <div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Decimal places</strong><br>Money (£3.75), measurements, scientific readings</div>
  <div style="background:#f3e5f5;padding:10px;border-radius:8px"><strong>Significant figures</strong><br>Large estimates, scientific data, where scale matters</div>
</div>`,

// ── mi-05-3: Add & Subtract Decimals ─────────────────────────────────────────
'mi-05-3': `
<h2>Add &amp; Subtract Decimals</h2>

<p style="font-size:1.05em;text-align:center;background:#e8f5e9;padding:0.6em;border-radius:6px;margin:1em 0"><strong>Golden rule: always line up the decimal points.</strong></p>
<p>Once the decimal points are aligned, the calculation is identical to adding or subtracting whole numbers — with carrying and exchanging working exactly the same way.</p>

<h3>Column Addition</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="220" height="75" viewBox="0 0 220 75" style="display:block">
    <text x="10" y="22" font-family="monospace" font-size="17" fill="#333">  1 2 . 3 4 0</text>
    <text x="10" y="42" font-family="monospace" font-size="17" fill="#333">+  4 . 8 7 6</text>
    <line x1="5" y1="48" x2="175" y2="48" stroke="#555" stroke-width="1.5"/>
    <text x="10" y="68" font-family="monospace" font-size="17" fill="#2e7d32" font-weight="bold">  1 7 . 2 1 6</text>
  </svg>
  <p style="font-size:0.85em;color:#555;margin:0.5em 0 0">Fill the empty space with a zero (4.876 → 4.876<strong>0</strong>) before adding, so every column has a digit.</p>
</div>

<h3>Column Subtraction</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="200" height="75" viewBox="0 0 200 75" style="display:block">
    <text x="10" y="22" font-family="monospace" font-size="17" fill="#333">  8 . 3 0 0</text>
    <text x="10" y="42" font-family="monospace" font-size="17" fill="#333">− 2 . 4 7 6</text>
    <line x1="5" y1="48" x2="160" y2="48" stroke="#555" stroke-width="1.5"/>
    <text x="10" y="68" font-family="monospace" font-size="17" fill="#2e7d32" font-weight="bold">  5 . 8 2 4</text>
  </svg>
  <p style="font-size:0.85em;color:#555;margin:0.5em 0 0">Fill 8.3 as 8.300 — this gives placeholder zeros to exchange from when subtracting.</p>
</div>

<h3>Real-Life Context</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Shopping:</strong> Three items cost £4.75, £2.30, and £1.99.<br>
  Total = £4.75 + £2.30 + £1.99 = <strong>£9.04</strong><br>
  Change from £10 = £10.00 − £9.04 = <strong>£0.96</strong>
</div>`,

// ── mi-05-4: Multiply & Divide Decimals ──────────────────────────────────────
'mi-05-4': `
<h2>Multiply &amp; Divide Decimals</h2>

<h3>Multiplying Decimals — Ignore, Multiply, Replace</h3>
<ol>
  <li><strong>Ignore</strong> the decimal points and multiply as whole numbers.</li>
  <li><strong>Count</strong> the total decimal places in both original numbers.</li>
  <li><strong>Replace</strong> the decimal point that many places from the right in your answer.</li>
</ol>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>3.4 × 2.6</strong><br>
  Treat as: 34 × 26 = 884<br>
  Decimal places: 1 + 1 = 2<br>
  Place decimal 2 from right: 8.84 → Answer: <strong>8.84</strong><br><br>
  <strong>Estimate check:</strong> 3 × 3 = 9. Our answer 8.84 is close ✓
</div>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>0.07 × 0.4</strong><br>
  Treat as: 7 × 4 = 28<br>
  Decimal places: 2 + 1 = 3<br>
  Answer: <strong>0.028</strong>
</div>

<h3>Dividing Decimals — Make the Divisor Whole</h3>
<p>Multiply both numbers by 10, 100, or 1000 to eliminate the decimal in the divisor. The quotient stays the same.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>7.2 ÷ 0.4</strong><br>
  Multiply both by 10: 72 ÷ 4 = <strong>18</strong>
</div>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>3.6 ÷ 0.09</strong><br>
  Multiply both by 100: 360 ÷ 9 = <strong>40</strong>
</div>

<h3>Key Shortcuts</h3>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#e8f5e9;padding:8px;border-radius:8px">× 0.1 = ÷ 10</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:8px">× 0.01 = ÷ 100</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:8px">÷ 0.5 = × 2</div>
</div>`,

// ── mi-05-5: Advanced Decimal Operations ─────────────────────────────────────
'mi-05-5': `
<h2>Advanced Decimal Operations</h2>

<h3>Multiplying a Decimal by a Decimal</h3>
<p>Use the <strong>Ignore → Multiply → Replace</strong> method:</p>
<ol>
  <li><strong>Ignore</strong> all decimal points and multiply as whole numbers.</li>
  <li><strong>Count</strong> the total number of decimal places in both original numbers.</li>
  <li><strong>Place</strong> the decimal point that many places from the right.</li>
</ol>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> 0.3 × 0.7<br>
  Step 1: 3 × 7 = 21<br>
  Step 2: 0.3 has 1 d.p. + 0.7 has 1 d.p. = 2 d.p. total<br>
  Step 3: 21 → 0.21<br>
  <strong>Answer: 0.21</strong>
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> 2.5 × 0.4<br>
  Step 1: 25 × 4 = 100<br>
  Step 2: 1 d.p. + 1 d.p. = 2 d.p.<br>
  Step 3: 100 → 1.00 = <strong>1</strong>
</div>

<h3>Dividing by a Decimal Divisor</h3>
<p>Convert to a <strong>whole-number divisor</strong> by multiplying both numbers by the same power of 10.</p>

<div style="background:#e3f2fd;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Key idea:</strong> a ÷ b = (a × 10) ÷ (b × 10) — the answer stays the same!
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> 4.8 ÷ 0.6<br>
  Multiply both by 10: 48 ÷ 6 = <strong>8</strong><br>
  Check: 8 × 0.6 = 4.8 ✓
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> 3.6 ÷ 0.04<br>
  Multiply both by 100: 360 ÷ 4 = <strong>90</strong><br>
  Check: 90 × 0.04 = 3.6 ✓
</div>

<h3>Inequalities with Decimal Operations</h3>
<p>Useful rules for comparing without calculating:</p>
<ul>
  <li>Multiplying by a number <strong>less than 1</strong> makes the result <strong>smaller</strong>.</li>
  <li>Multiplying by a number <strong>greater than 1</strong> makes the result <strong>larger</strong>.</li>
  <li>Dividing by a number <strong>less than 1</strong> makes the result <strong>larger</strong>.</li>
</ul>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> Without calculating, compare 5 × 0.3 and 5 × 0.7.<br>
  Since 0.3 < 0.7, we know 5 × 0.3 < 5 × 0.7.<br>
  (1.5 < 3.5 ✓)
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Top tip:</strong> Always check by reversing — if 4.8 ÷ 0.6 = 8, then 8 × 0.6 should equal 4.8.
</div>`,

// ── mi-06-1: Equivalent Fractions & Simplifying ──────────────────────────────
'mi-06-1': `
<h2>Equivalent Fractions &amp; Simplifying</h2>

<h3>What is a Fraction?</h3>
<p>A fraction shows part of a whole. In ³⁄₅, the <strong>numerator</strong> (3) tells you how many parts you have; the <strong>denominator</strong> (5) tells you how many equal parts the whole is split into.</p>

<svg width="100%" height="75" viewBox="0 0 380 75" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="10"  y="10" width="55" height="35" rx="5" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1.5"/>
  <rect x="75"  y="10" width="55" height="35" rx="5" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1.5"/>
  <rect x="140" y="10" width="55" height="35" rx="5" fill="#c8e6c9" stroke="#2e7d32" stroke-width="1.5"/>
  <rect x="205" y="10" width="55" height="35" rx="5" fill="#eee" stroke="#aaa" stroke-width="1.5"/>
  <rect x="270" y="10" width="55" height="35" rx="5" fill="#eee" stroke="#aaa" stroke-width="1.5"/>
  <text x="37"  y="32" text-anchor="middle" font-size="12" fill="#2e7d32" font-weight="bold">✓</text>
  <text x="102" y="32" text-anchor="middle" font-size="12" fill="#2e7d32" font-weight="bold">✓</text>
  <text x="167" y="32" text-anchor="middle" font-size="12" fill="#2e7d32" font-weight="bold">✓</text>
  <text x="10" y="65" font-size="11" fill="#555">³⁄₅ — 3 of the 5 equal parts are shaded</text>
</svg>

<h3>Equivalent Fractions</h3>
<p>Multiply or divide both numerator and denominator by the same non-zero number — the value of the fraction stays exactly the same.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="100%" height="45" viewBox="0 0 400 45" style="max-width:400px;display:block">
    <text x="10"  y="25" font-size="14" fill="#333" font-weight="bold">²⁄₃</text>
    <text x="40"  y="25" font-size="14" fill="#555">=</text>
    <text x="55"  y="25" font-size="14" fill="#1565c0" font-weight="bold">⁴⁄₆</text>
    <text x="85"  y="25" font-size="14" fill="#555">=</text>
    <text x="100" y="25" font-size="14" fill="#6a1b9a" font-weight="bold">⁶⁄₉</text>
    <text x="130" y="25" font-size="14" fill="#555">=</text>
    <text x="145" y="25" font-size="14" fill="#c62828" font-weight="bold">¹⁰⁄₁₅</text>
    <text x="190" y="25" font-size="12" fill="#555">all equal the same value</text>
    <text x="55"  y="42" font-size="9"  fill="#1565c0">×2</text>
    <text x="100" y="42" font-size="9"  fill="#6a1b9a">×3</text>
    <text x="145" y="42" font-size="9"  fill="#c62828">×5</text>
  </svg>
</div>

<h3>Simplifying (Cancelling to Lowest Terms)</h3>
<p>Divide both numerator and denominator by their HCF. A fraction is fully simplified when the HCF of the numerator and denominator is 1.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Simplify 24/36</strong><br>
  HCF(24, 36) = 12<br>
  24 ÷ 12 = 2 &nbsp;|&nbsp; 36 ÷ 12 = 3<br>
  Answer: <strong>2/3</strong>
</div>

<h3>Converting to a Common Denominator</h3>
<p>Find the LCM of the denominators, then scale each fraction up. This is needed for adding and comparing fractions.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Convert 1/4 and 1/6 to a common denominator:<br>
  LCM(4, 6) = 12 &nbsp;→&nbsp; 1/4 = 3/12 &nbsp; and &nbsp; 1/6 = 2/12
</div>`,

// ── mi-06-2: Compare & Order Fractions ───────────────────────────────────────
'mi-06-2': `
<h2>Compare &amp; Order Fractions</h2>

<h3>Method 1: Common Denominator</h3>
<p>Convert fractions to the same denominator (using the LCM), then compare numerators directly. This is the most reliable method for any fractions.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Compare 3/4 and 5/7</strong><br>
  LCM(4, 7) = 28.<br>
  3/4 = 21/28 &nbsp;&nbsp; 5/7 = 20/28<br>
  21 &gt; 20, so <strong>3/4 &gt; 5/7</strong>
</div>

<h3>Method 2: Convert to Decimals</h3>
<p>Divide numerator by denominator to get a decimal, then compare. This is faster on a calculator and works well for ordering multiple fractions.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Order: 2/5, 3/8, 1/2</strong><br>
  2/5 = 0.400 &nbsp; 3/8 = 0.375 &nbsp; 1/2 = 0.500<br>
  Order: <strong>3/8 &lt; 2/5 &lt; 1/2</strong>
</div>

<h3>Key Fraction–Decimal–Percentage Equivalences</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:7px;border:1px solid #ccc">Fraction</th>
    <th style="padding:7px;border:1px solid #ccc">Decimal</th>
    <th style="padding:7px;border:1px solid #ccc">Percentage</th>
  </tr>
  <tr><td style="padding:7px;border:1px solid #ccc">1/2</td><td style="padding:7px;border:1px solid #ccc">0.5</td><td style="padding:7px;border:1px solid #ccc">50%</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">1/4</td><td style="padding:7px;border:1px solid #ccc">0.25</td><td style="padding:7px;border:1px solid #ccc">25%</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc">3/4</td><td style="padding:7px;border:1px solid #ccc">0.75</td><td style="padding:7px;border:1px solid #ccc">75%</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">1/5</td><td style="padding:7px;border:1px solid #ccc">0.2</td><td style="padding:7px;border:1px solid #ccc">20%</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc">1/8</td><td style="padding:7px;border:1px solid #ccc">0.125</td><td style="padding:7px;border:1px solid #ccc">12.5%</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">1/3</td><td style="padding:7px;border:1px solid #ccc">0.333…</td><td style="padding:7px;border:1px solid #ccc">33.3…%</td></tr>
  <tr><td style="padding:7px;border:1px solid #ccc">3/8</td><td style="padding:7px;border:1px solid #ccc">0.375</td><td style="padding:7px;border:1px solid #ccc">37.5%</td></tr>
</table>`,

// ── mi-06-3: Add & Subtract Fractions ────────────────────────────────────────
'mi-06-3': `
<h2>Add &amp; Subtract Fractions</h2>

<h3>Same Denominator — Straightforward</h3>
<p>Add or subtract the numerators only. The denominator stays the same. Simplify the result if possible.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  3/8 + 1/8 = 4/8 = <strong>1/2</strong> &nbsp; (simplified by dividing by 4)
</div>

<h3>Different Denominators — Four Steps</h3>
<ol>
  <li>Find the <strong>LCM</strong> of the denominators.</li>
  <li>Convert both fractions to equivalent fractions with that denominator.</li>
  <li>Add or subtract the numerators.</li>
  <li>Simplify if possible.</li>
</ol>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>2/3 + 3/4</strong><br>
    LCM(3, 4) = 12<br>
    8/12 + 9/12 = 17/12<br>
    = <strong>1 5/12</strong>
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>5/6 − 1/4</strong><br>
    LCM(6, 4) = 12<br>
    10/12 − 3/12 = 7/12<br>
    = <strong>7/12</strong> (already simplified)
  </div>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Common mistake:</strong> Adding denominators directly — 1/3 + 1/4 ≠ 2/7. Always find a common denominator first.
</div>`,

// ── mi-06-4: Add & Subtract Mixed Numbers ────────────────────────────────────
'mi-06-4': `
<h2>Add &amp; Subtract Mixed Numbers</h2>

<h3>Converting Between Mixed Numbers and Improper Fractions</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>Mixed → Improper: 2¾</strong><br>
    Whole × denominator: 2 × 4 = 8<br>
    Add numerator: 8 + 3 = 11<br>
    Answer: <strong>11/4</strong>
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>Improper → Mixed: 17/5</strong><br>
    17 ÷ 5 = 3 remainder 2<br>
    Answer: <strong>3 2/5</strong>
  </div>
</div>

<h3>Adding Mixed Numbers</h3>
<p>The most reliable method is to convert both to improper fractions first, then add as normal fractions.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>2¾ + 1½</strong><br>
  Convert: 11/4 + 3/2<br>
  Common denominator (LCM = 4): 11/4 + 6/4 = 17/4<br>
  Convert back: 17 ÷ 4 = 4 r1 → <strong>4¼</strong>
</div>

<h3>Subtracting Mixed Numbers</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>4¼ − 1⅔</strong><br>
  Convert: 17/4 − 5/3<br>
  LCM(4, 3) = 12: &nbsp; 51/12 − 20/12 = 31/12<br>
  Convert back: 31 ÷ 12 = 2 r7 → <strong>2 7/12</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Tip:</strong> Always convert to improper fractions before operating — trying to add or subtract the whole number and fractional parts separately can lead to errors when borrowing is needed.
</div>`,

// ── mi-06-5: Recurring Decimals & Fractions as Division ──────────────────────
'mi-06-5': `
<h2>Recurring Decimals &amp; Fractions as Division</h2>

<h3>Terminating vs Recurring Decimals</h3>
<p>When you divide the numerator by the denominator:</p>
<ul>
  <li><strong>Terminating</strong> — the division ends: 1/4 = 0.25</li>
  <li><strong>Recurring</strong> — one or more digits repeat forever: 1/3 = 0.333...</li>
</ul>

<div style="background:#e3f2fd;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Quick test:</strong> A fraction (in simplest form) gives a terminating decimal only if the denominator has no prime factors other than <strong>2</strong> and <strong>5</strong>.
</div>

<h3>Dot Notation</h3>
<p>Place a dot over the <strong>first and last</strong> digit of the repeating block:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
<tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Fraction</th><th style="padding:8px;border:1px solid #ccc">Decimal</th><th style="padding:8px;border:1px solid #ccc">Dot notation</th></tr>
<tr><td style="padding:8px;border:1px solid #ccc">1/3</td><td style="padding:8px;border:1px solid #ccc">0.333...</td><td style="padding:8px;border:1px solid #ccc">0.3̇</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">2/3</td><td style="padding:8px;border:1px solid #ccc">0.666...</td><td style="padding:8px;border:1px solid #ccc">0.6̇</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">1/6</td><td style="padding:8px;border:1px solid #ccc">0.1666...</td><td style="padding:8px;border:1px solid #ccc">0.16̇</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">2/11</td><td style="padding:8px;border:1px solid #ccc">0.181818...</td><td style="padding:8px;border:1px solid #ccc">0.1̇8̇</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">1/7</td><td style="padding:8px;border:1px solid #ccc">0.142857142857...</td><td style="padding:8px;border:1px solid #ccc">0.1̇42857̇</td></tr>
</table>

<h3>Fractions as Division</h3>
<p>Every fraction <strong>is</strong> a division. The fraction a/b means "a divided by b".</p>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> 3 pizzas shared among 7 people.<br>
  Each person gets 3 ÷ 7 = <strong>3/7</strong> of a pizza.
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> 5 bars of chocolate shared among 4 children.<br>
  Each child gets 5 ÷ 4 = 5/4 = <strong>1 1/4</strong> bars.
</div>

<h3>Reading Fractions from Graphs and Tables</h3>
<p>To find a fraction from data, write <strong>part / total</strong> and simplify:</p>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> A bar chart shows 12 out of 30 students chose football.<br>
  Fraction = 12/30 = <strong>2/5</strong> (÷ HCF of 6).
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Remember:</strong> A pie chart angle of 90° out of 360° = 90/360 = <strong>1/4</strong>.
</div>`,

// ── mi-06-6: Fraction Inequalities ───────────────────────────────────────────
'mi-06-6': `
<h2>Fraction Inequalities</h2>
<p>An inequality compares two values using <strong>&lt;</strong> (less than), <strong>&gt;</strong> (greater than) or <strong>=</strong> (equals). You can compare fraction sums and differences the same way you compare individual fractions — convert to a <strong>common denominator</strong>.</p>

<h3>Method</h3>
<ol>
  <li><strong>Calculate</strong> both sides (or just the side that needs work).</li>
  <li><strong>Convert</strong> to the same denominator.</li>
  <li><strong>Compare</strong> the numerators.</li>
</ol>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 1:</strong> Is 1/4 + 1/3 greater than 1/2?<br>
  LCD = 12: &nbsp; 3/12 + 4/12 = 7/12<br>
  1/2 = 6/12<br>
  7/12 &gt; 6/12 → <strong>1/4 + 1/3 &gt; 1/2</strong> ✓
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 2:</strong> Insert &lt;, &gt; or =: &nbsp; 3/4 − 1/3 ___ 1/2<br>
  LCD = 12: &nbsp; 9/12 − 4/12 = 5/12<br>
  1/2 = 6/12<br>
  5/12 &lt; 6/12 → <strong>3/4 − 1/3 &lt; 1/2</strong>
</div>

<h3>With Mixed Numbers</h3>
<p>The same method works — convert to improper fractions or work with whole and fractional parts separately.</p>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 3:</strong> Is 2 1/3 + 1 1/4 greater than 3 1/2?<br>
  Whole parts: 2 + 1 = 3<br>
  Fractional parts: 1/3 + 1/4 = 4/12 + 3/12 = 7/12<br>
  Total = 3 7/12<br>
  3 1/2 = 3 6/12<br>
  3 7/12 &gt; 3 6/12 → <strong>2 1/3 + 1 1/4 &gt; 3 1/2</strong> ✓
</div>

<div style="background:#e3f2fd;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Quick check:</strong> If both fractions are less than 1/2, their sum is less than 1.<br>
  If both fractions are greater than 1/2, their sum is greater than 1.
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Top tip:</strong> You don't always need to calculate exactly — estimating by comparing to benchmark fractions (0, 1/4, 1/2, 3/4, 1) is often enough.
</div>`,

// ── mi-07-1: Multiply Fractions by Whole Numbers ─────────────────────────────
'mi-07-1': `
<h2>Multiply Fractions by Whole Numbers</h2>

<h3>The Rule</h3>
<p>Multiply the <strong>numerator</strong> by the whole number. Keep the denominator unchanged. Then simplify if possible.</p>

<svg width="100%" height="50" viewBox="0 0 380 50" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="380" height="40" rx="8" fill="#e8f5e9"/>
  <text x="20" y="32" font-size="16" fill="#333">3 × 2/5 = (3×2)/5 = 6/5 = </text>
  <text x="265" y="32" font-size="16" font-weight="bold" fill="#2e7d32">1 1/5</text>
</svg>

<h3>Why This Works</h3>
<p>3 × 2/5 means adding 2/5 three times: 2/5 + 2/5 + 2/5 = 6/5. Multiplication is just efficient repeated addition.</p>

<h3>With Mixed Numbers — Convert First</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>4 × 2⅓</strong><br>
  Convert: 2⅓ = 7/3<br>
  4 × 7/3 = 28/3 = <strong>9⅓</strong>
</div>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>5 × 3⅖</strong><br>
  Convert: 3⅖ = 17/5<br>
  5 × 17/5 = 85/5 = <strong>17</strong> (the 5s cancel perfectly)
</div>

<h3>Word Problem</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  A recipe needs ¾ cup of sugar. How much sugar for 6 batches?<br>
  6 × ¾ = 18/4 = 4½ cups = <strong>4½ cups</strong>
</div>`,

// ── mi-07-2: Multiply Two Fractions ──────────────────────────────────────────
'mi-07-2': `
<h2>Multiply Two Fractions</h2>

<h3>The Rule</h3>
<p>Multiply numerators together, and denominators together. The result is often a smaller fraction — multiplying fractions less than 1 gives an even smaller result.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="100%" height="40" viewBox="0 0 380 40" style="max-width:380px;display:block">
    <text x="10" y="28" font-size="16" fill="#333">2/3 × 4/5 = (2×4)/(3×5) = 8/15</text>
  </svg>
</div>

<h3>Cross-Cancelling First (Simplify Before Multiplying)</h3>
<p>Divide any numerator and any denominator by a common factor <em>before</em> multiplying. This keeps numbers small and avoids simplifying a large fraction afterwards.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>4/9 × 3/8</strong><br>
  Cancel 4 and 8 (both ÷4): 4/9 × 3/8 → 1/9 × 3/2<br>
  Cancel 3 and 9 (both ÷3): 1/3 × 1/2 = <strong>1/6</strong><br>
  <span style="font-size:0.85em;color:#555">Check: 4×3 = 12, 9×8 = 72. 12/72 = 1/6 ✓</span>
</div>

<h3>"Of" Means Multiply</h3>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  "¾ of ⅖" means ¾ × ⅖ = 6/20 = <strong>3/10</strong>
</div>

<h3>Mixed Numbers — Convert First</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>1½ × 2⅔</strong><br>
  Convert: 3/2 × 8/3<br>
  Cancel 3s: 1/2 × 8/1 = 8/2 = <strong>4</strong>
</div>`,

// ── mi-07-3: Divide Fractions ─────────────────────────────────────────────────
'mi-07-3': `
<h2>Divide Fractions</h2>

<h3>Keep, Change, Flip (KCF)</h3>
<p>To divide by a fraction, multiply by its <strong>reciprocal</strong> (flip it upside down). This is because dividing by a number is the same as multiplying by its inverse.</p>

<svg width="100%" height="65" viewBox="0 0 380 65" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="0"   y="5" width="110" height="55" rx="8" fill="#e8f5e9"/>
  <rect x="130" y="5" width="110" height="55" rx="8" fill="#fff9c4"/>
  <rect x="260" y="5" width="110" height="55" rx="8" fill="#e3f2fd"/>
  <text x="55"  y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">1. KEEP</text>
  <text x="55"  y="48" text-anchor="middle" font-size="11" fill="#2e7d32">first fraction</text>
  <text x="185" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#e65100">2. CHANGE</text>
  <text x="185" y="48" text-anchor="middle" font-size="11" fill="#e65100">÷ becomes ×</text>
  <text x="315" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#1565c0">3. FLIP</text>
  <text x="315" y="48" text-anchor="middle" font-size="11" fill="#1565c0">second fraction</text>
</svg>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>3/4 ÷ 2/5</strong><br>
  Keep: 3/4 &nbsp; Change: × &nbsp; Flip: 5/2<br>
  = 3/4 × 5/2 = 15/8 = <strong>1⅞</strong>
</div>

<h3>Dividing a Whole Number by a Fraction</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>4 ÷ ⅔</strong><br>
  = 4 × 3/2 = 12/2 = <strong>6</strong><br>
  <span style="font-size:0.85em;color:#555">Check: "How many ⅔s fit into 4?" → 6 lots of ⅔ = 6 × 2/3 = 4 ✓</span>
</div>

<h3>Mixed Numbers</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>2½ ÷ 1¼</strong><br>
  Convert: 5/2 ÷ 5/4<br>
  KCF: 5/2 × 4/5 = 20/10 = <strong>2</strong>
</div>`,

// ── mi-07-4: Mixed Number Operations ─────────────────────────────────────────
'mi-07-4': `
<h2>Mixed Number Operations</h2>

<h3>All Four Operations — Summary</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Operation</th>
    <th style="padding:8px;border:1px solid #ccc">Key step</th>
    <th style="padding:8px;border:1px solid #ccc">Then…</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Add / Subtract</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Convert to improper fractions</td>
    <td style="padding:8px;border:1px solid #ccc">Find common denominator, add/subtract numerators</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="padding:8px;border:1px solid #ccc"><strong>Multiply</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Convert to improper fractions</td>
    <td style="padding:8px;border:1px solid #ccc">Multiply numerators × numerators, denominators × denominators</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Divide</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Convert to improper fractions</td>
    <td style="padding:8px;border:1px solid #ccc">Keep, Change, Flip — then multiply</td>
  </tr>
</table>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>3⅔ + 2¾</strong><br>
    = 11/3 + 11/4<br>
    LCM = 12: 44/12 + 33/12<br>
    = 77/12 = <strong>6 5/12</strong>
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>2½ × 1⅗</strong><br>
    = 5/2 × 8/5<br>
    Cancel 5s: 1/2 × 8/1<br>
    = 8/2 = <strong>4</strong>
  </div>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Always convert to improper fractions first</strong> — operating directly on the whole number and fractional parts separately is error-prone and only works reliably for addition.
</div>`,

// ── mi-07-5: Scaling & Estimating with Fractions ─────────────────────────────
'mi-07-5': `
<h2>Scaling &amp; Estimating with Fractions</h2>

<h3>Scaling by a Fraction</h3>
<p>When you multiply a number by a fraction, you are <strong>scaling</strong> it:</p>

<div style="background:#e3f2fd;padding:0.75em 1em;border-radius:8px;margin:1em 0">
  <ul style="margin:0">
    <li>Multiply by a fraction <strong>less than 1</strong> → result is <strong>smaller</strong> than the original.</li>
    <li>Multiply by a fraction <strong>equal to 1</strong> → result is the <strong>same</strong>.</li>
    <li>Multiply by a fraction <strong>greater than 1</strong> → result is <strong>larger</strong> than the original.</li>
  </ul>
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 1:</strong> 3/4 × 20<br>
  3/4 &lt; 1, so the answer must be less than 20.<br>
  3/4 × 20 = 15 ✓ (15 &lt; 20)
</div>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 2:</strong> 5/3 × 12<br>
  5/3 &gt; 1 (it equals 1⅔), so the answer must be more than 12.<br>
  5/3 × 12 = 20 ✓ (20 &gt; 12)
</div>

<h3>Estimating Products</h3>
<p>To estimate a fraction × a number:</p>
<ol>
  <li><strong>Round</strong> the number to a nearby "friendly" number (one that divides easily by the denominator).</li>
  <li><strong>Calculate</strong> the fraction of the friendly number.</li>
</ol>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 3:</strong> Estimate 2/5 × 47.<br>
  Round 47 to 50 (friendly for fifths).<br>
  2/5 × 50 = 20. Good estimate: <strong>about 20</strong>.
</div>

<h3>Estimating with Mixed Numbers</h3>
<p>Round the mixed number to the nearest whole number, then multiply.</p>

<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 4:</strong> Estimate 2 3/4 × 3 1/5.<br>
  Round: 3 × 3 = 9. Exact: 8.8. Estimate is close!
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Benchmark fractions:</strong> Use 1/4 ≈ 0.25, 1/3 ≈ 0.33, 1/2 = 0.5, 2/3 ≈ 0.67, 3/4 = 0.75 to quickly check if your answer is in the right ballpark.
</div>`,

// ── mi-08-1: Understanding Integers ──────────────────────────────────────────
'mi-08-1': `
<h2>Understanding Integers</h2>
<p>Integers are all whole numbers — positive, negative, and zero. They extend infinitely in both directions: …−3, −2, −1, 0, 1, 2, 3…</p>

<svg width="100%" height="60" viewBox="0 0 480 60" style="max-width:480px;display:block;margin:0.75em 0">
  <line x1="20" y1="30" x2="460" y2="30" stroke="#555" stroke-width="1.5"/>
  <polygon points="460,30 452,26 452,34" fill="#555"/>
  <polygon points="20,30 28,26 28,34" fill="#555"/>
  <g font-size="12" text-anchor="middle" fill="#333">
    <line x1="60"  y1="25" x2="60"  y2="35" stroke="#555"/><text x="60"  y="50">−5</text>
    <line x1="110" y1="25" x2="110" y2="35" stroke="#555"/><text x="110" y="50">−4</text>
    <line x1="160" y1="25" x2="160" y2="35" stroke="#555"/><text x="160" y="50">−3</text>
    <line x1="210" y1="25" x2="210" y2="35" stroke="#555"/><text x="210" y="50">−2</text>
    <line x1="260" y1="25" x2="260" y2="35" stroke="#555"/><text x="260" y="50">−1</text>
    <line x1="310" y1="22" x2="310" y2="38" stroke="#2e7d32" stroke-width="2"/>
    <text x="310" y="50" font-weight="bold" fill="#2e7d32">0</text>
    <line x1="360" y1="25" x2="360" y2="35" stroke="#555"/><text x="360" y="50">1</text>
    <line x1="410" y1="25" x2="410" y2="35" stroke="#555"/><text x="410" y="50">2</text>
  </g>
  <text x="30"  y="18" font-size="10" fill="#c62828">← smaller</text>
  <text x="400" y="18" font-size="10" fill="#2e7d32">larger →</text>
</svg>

<ul>
  <li>Numbers <strong>increase</strong> going right — even negative numbers.</li>
  <li>−3 &gt; −7 (−3 is closer to 0, so it is the greater value).</li>
  <li>−10 &lt; −1 (further left = smaller value).</li>
</ul>

<h3>Real-Life Contexts</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Context</th>
    <th style="padding:8px;border:1px solid #ccc">Positive means…</th>
    <th style="padding:8px;border:1px solid #ccc">Negative means…</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Temperature</td><td style="padding:8px;border:1px solid #ccc">Above 0°C</td><td style="padding:8px;border:1px solid #ccc">Below 0°C (freezing)</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Altitude</td><td style="padding:8px;border:1px solid #ccc">Above sea level</td><td style="padding:8px;border:1px solid #ccc">Below sea level (Dead Sea ≈ −430 m)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Finance</td><td style="padding:8px;border:1px solid #ccc">Money in account</td><td style="padding:8px;border:1px solid #ccc">Debt / overdraft</td></tr>
</table>`,

// ── mi-08-2: Add Integers ─────────────────────────────────────────────────────
'mi-08-2': `
<h2>Add Integers</h2>

<h3>Two Core Rules</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:12px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px;color:#2e7d32">Adding a positive →</strong>
    Move RIGHT on the number line<br>
    −3 + 5 = <strong>2</strong>
  </div>
  <div style="background:#fce4ec;padding:12px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px;color:#c62828">Adding a negative →</strong>
    Move LEFT on the number line<br>
    5 + (−8) = <strong>−3</strong>
  </div>
</div>

<h3>Using a Number Line</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>−4 + 7:</strong> Start at −4, move 7 right → land on <strong>3</strong> ✓<br>
  <strong>3 + (−9):</strong> Start at 3, move 9 left → land on <strong>−6</strong> ✓<br>
  <strong>(−4) + (−3):</strong> Start at −4, move 3 more left → <strong>−7</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Quick shortcut:</strong> Adding two numbers with the same sign — add their sizes and keep the sign.<br>
  (−4) + (−3): sizes are 4 and 3, add to 7, both negative → <strong>−7</strong>
</div>

<h3>Real-Life Example</h3>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  Temperature at midnight: −8°C. Rises 13°C by morning.<br>
  −8 + 13 = <strong>5°C</strong>
</div>`,

// ── mi-08-3: Subtract Integers ────────────────────────────────────────────────
'mi-08-3': `
<h2>Subtract Integers</h2>

<h3>The Key Insight — Subtracting a Negative</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:12px;border-radius:8px">
    <strong>Subtracting a positive → move LEFT</strong><br>
    5 − 8 = <strong>−3</strong>
  </div>
  <div style="background:#e3f2fd;padding:12px;border-radius:8px">
    <strong>Subtracting a negative = adding</strong><br>
    5 − (−3) = 5 + 3 = <strong>8</strong>
  </div>
</div>

<svg width="100%" height="55" viewBox="0 0 380 55" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="0" y="8" width="380" height="40" rx="8" fill="#fff9c4"/>
  <text x="20" y="28" font-size="13" fill="#333"><tspan font-weight="bold">− −</tspan> = +</text>
  <text x="80" y="28" font-size="13" fill="#555">Two negatives combine to make a positive.</text>
  <text x="20" y="44" font-size="11" fill="#e65100">Subtracting a negative is the same as adding its positive value.</text>
</svg>

<h3>Worked Examples</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  2 − 8 = <strong>−6</strong> &nbsp; (start at 2, move 8 left)<br>
  −5 − 3 = <strong>−8</strong> &nbsp; (start at −5, move 3 more left)<br>
  −1 − (−6) = −1 + 6 = <strong>5</strong> &nbsp; (subtracting −6 means adding 6)
</div>

<h3>Temperature Difference</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Moscow: −12°C. London: 4°C. What is the difference?<br>
  Difference = 4 − (−12) = 4 + 12 = <strong>16°C</strong>
</div>`,

// ── mi-08-4: Multiply & Divide Integers ──────────────────────────────────────
'mi-08-4': `
<h2>Multiply &amp; Divide Integers</h2>

<h3>Sign Rules — Apply to Both × and ÷</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0;text-align:center">
  <div style="background:#e8f5e9;padding:14px;border-radius:8px">
    <strong style="color:#2e7d32;font-size:1.1em">Same signs → Positive</strong><br>
    (+) × (+) = <strong>+</strong><br>
    (−) × (−) = <strong>+</strong><br>
    (−) ÷ (−) = <strong>+</strong>
  </div>
  <div style="background:#fce4ec;padding:14px;border-radius:8px">
    <strong style="color:#c62828;font-size:1.1em">Different signs → Negative</strong><br>
    (+) × (−) = <strong>−</strong><br>
    (−) × (+) = <strong>−</strong><br>
    (+) ÷ (−) = <strong>−</strong>
  </div>
</div>

<h3>Examples</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    4 × (−3) = <strong>−12</strong><br>
    (−5) × (−2) = <strong>+10</strong>
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    (−12) ÷ 4 = <strong>−3</strong><br>
    (−20) ÷ (−5) = <strong>+4</strong>
  </div>
</div>

<h3>Powers of Negative Numbers</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  (−2)³ = (−2) × (−2) × (−2) = (+4) × (−2) = <strong>−8</strong><br><br>
  <strong>Key pattern:</strong><br>
  Even power of a negative → always <strong>positive</strong> &nbsp; (−3)² = +9<br>
  Odd power of a negative → always <strong>negative</strong> &nbsp; (−3)³ = −27
</div>

<div style="background:#fce4ec;padding:1em;border-radius:8px;margin:1em 0">
  <strong>⚠️ Watch out:</strong> −3² = −9 (NOT +9) because the square applies to 3, then the minus sign is placed in front. Only (−3)² = +9.
</div>`,

// ── mi-08-5: Integer Input/Output Tables ────────────────────────────────
'mi-08-5': `<h2>Integer Input/Output Tables</h2>

<h3>What Is an Input/Output Table?</h3>
<p>An input/output table applies a <strong>rule</strong> to each input value to produce an output value. When working with integers, the rules involve adding or subtracting positive and negative numbers.</p>

<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example — Rule: add −4</strong><br><br>
  <table style="border-collapse:collapse;width:100%">
    <tr><th style="border:1px solid #90caf9;padding:8px;background:#bbdefb">Input</th><td style="border:1px solid #90caf9;padding:8px;text-align:center">5</td><td style="border:1px solid #90caf9;padding:8px;text-align:center">−2</td><td style="border:1px solid #90caf9;padding:8px;text-align:center">0</td><td style="border:1px solid #90caf9;padding:8px;text-align:center">−7</td></tr>
    <tr><th style="border:1px solid #90caf9;padding:8px;background:#bbdefb">Output</th><td style="border:1px solid #90caf9;padding:8px;text-align:center">1</td><td style="border:1px solid #90caf9;padding:8px;text-align:center">−6</td><td style="border:1px solid #90caf9;padding:8px;text-align:center">−4</td><td style="border:1px solid #90caf9;padding:8px;text-align:center">−11</td></tr>
  </table>
  <br>Each output = input + (−4) = input − 4
</div>

<h3>Finding the Rule</h3>
<p>To find the rule, calculate <strong>Output − Input</strong> for any pair. The result tells you what was added.</p>

<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Input 3 → Output −2<br>
  Output − Input = −2 − 3 = −5<br>
  Rule: <strong>add −5</strong> (same as subtract 5)<br><br>
  Check with another pair: Input −1 → Output should be −1 + (−5) = −6 ✓
</div>

<h3>Finding a Missing Input</h3>
<p>If you know the rule and the output, work backwards:</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Rule: add 7. Output = 3. What was the input?<br>
  Input + 7 = 3<br>
  Input = 3 − 7 = <strong>−4</strong>
</div>

<h3>Tips</h3>
<div style="background:#fce4ec;padding:1em;border-radius:8px;margin:1em 0">
  <strong>⚠️ Common mistakes:</strong><br>
  • Forgetting sign rules when subtracting negatives: −3 − (−5) = −3 + 5 = 2<br>
  • Mixing up the direction: Output − Input gives the rule, NOT Input − Output<br>
  • Always check your rule with at least two pairs from the table
</div>`

});
