// math-lessons-1.js — Lesson HTML for Topics 1-4
// Aligned to island names in math-data.js

Object.assign(LESSONS, {

// ── mi-01-1: Place Values in Whole Numbers ───────────────────────────────────
'mi-01-1': `
<h2>Place Values in Whole Numbers</h2>
<p>Every digit in a number has a <strong>place value</strong> — its worth depends entirely on its position. The same digit can mean 4, 40, 400, or 4,000,000 depending on where it sits.</p>

<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Millions</th>
    <th style="padding:8px;border:1px solid #ccc">Hundred-Thousands</th>
    <th style="padding:8px;border:1px solid #ccc">Ten-Thousands</th>
    <th style="padding:8px;border:1px solid #ccc">Thousands</th>
    <th style="padding:8px;border:1px solid #ccc">Hundreds</th>
    <th style="padding:8px;border:1px solid #ccc">Tens</th>
    <th style="padding:8px;border:1px solid #ccc">Units</th>
  </tr>
  <tr style="text-align:center;font-size:1.2em;font-weight:bold">
    <td style="padding:10px;border:1px solid #ccc;color:#2e7d32">4</td>
    <td style="padding:10px;border:1px solid #ccc;color:#1565c0">3</td>
    <td style="padding:10px;border:1px solid #ccc;color:#6a1b9a">2</td>
    <td style="padding:10px;border:1px solid #ccc;color:#e65100">5</td>
    <td style="padding:10px;border:1px solid #ccc;color:#c62828">7</td>
    <td style="padding:10px;border:1px solid #ccc;color:#4527a0">0</td>
    <td style="padding:10px;border:1px solid #ccc;color:#00695c">9</td>
  </tr>
  <tr style="text-align:center;font-size:0.8em;color:#666">
    <td style="padding:4px;border:1px solid #ccc">4,000,000</td>
    <td style="padding:4px;border:1px solid #ccc">300,000</td>
    <td style="padding:4px;border:1px solid #ccc">20,000</td>
    <td style="padding:4px;border:1px solid #ccc">5,000</td>
    <td style="padding:4px;border:1px solid #ccc">700</td>
    <td style="padding:4px;border:1px solid #ccc">0</td>
    <td style="padding:4px;border:1px solid #ccc">9</td>
  </tr>
</table>
<p>The number above is <strong>4,325,709</strong>. The digit 3 is in the hundred-thousands place, so its value is 300,000. Notice that the digit 0 in the tens column is a <em>placeholder</em> — without it, the number would read as 432,579 (a completely different number!).</p>

<h3>Ordering Whole Numbers</h3>
<p>Compare digits from left to right. A number with more digits is always larger. When digit counts are equal, compare column by column from the left.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Order: 45,312 &nbsp; 45,132 &nbsp; 46,000</strong><br><br>
  <svg width="100%" height="80" viewBox="0 0 480 80" style="max-width:480px;display:block">
    <text x="10" y="18" font-size="12" fill="#555">Ten-thousands: 4 = 4 = 4 → tied, check thousands</text>
    <text x="10" y="36" font-size="12" fill="#555">Thousands: 5 = 5 &lt; 6 → <tspan font-weight="bold" fill="#2e7d32">46,000 is largest</tspan></text>
    <text x="10" y="54" font-size="12" fill="#555">Hundreds of remaining: 3 &gt; 1 → <tspan font-weight="bold" fill="#2e7d32">45,312 &gt; 45,132</tspan></text>
    <rect x="0" y="64" width="460" height="14" rx="3" fill="#e8f5e9"/>
    <text x="10" y="75" font-size="12" fill="#2e7d32" font-weight="bold">Final order: 45,132 &lt; 45,312 &lt; 46,000</text>
  </svg>
</div>

<h3>Negative Numbers on a Number Line</h3>
<p>Numbers below zero are <strong>negative</strong>. They sit to the left of 0 on the number line. The further left a number is, the smaller its value — so −8 is less than −3, even though 8 &gt; 3 as whole numbers.</p>

<svg width="100%" height="60" viewBox="0 0 480 60" style="max-width:480px;display:block;margin:0.5em 0">
  <line x1="20" y1="30" x2="460" y2="30" stroke="#555" stroke-width="1.5"/>
  <polygon points="460,30 452,26 452,34" fill="#555"/>
  <g font-size="11" text-anchor="middle" fill="#333">
    <line x1="60"  y1="25" x2="60"  y2="35" stroke="#555"/><text x="60"  y="48">−8</text>
    <line x1="120" y1="25" x2="120" y2="35" stroke="#555"/><text x="120" y="48">−5</text>
    <line x1="180" y1="25" x2="180" y2="35" stroke="#555"/><text x="180" y="48">−3</text>
    <line x1="240" y1="22" x2="240" y2="38" stroke="#2e7d32" stroke-width="2"/><text x="240" y="48" font-weight="bold" fill="#2e7d32">0</text>
    <line x1="300" y1="25" x2="300" y2="35" stroke="#555"/><text x="300" y="48">2</text>
    <line x1="360" y1="25" x2="360" y2="35" stroke="#555"/><text x="360" y="48">5</text>
    <line x1="420" y1="25" x2="420" y2="35" stroke="#555"/><text x="420" y="48">7</text>
  </g>
  <text x="20" y="18" font-size="10" fill="#c62828">← smaller</text>
  <text x="390" y="18" font-size="10" fill="#2e7d32">larger →</text>
</svg>
<p style="margin-top:0.3em">−8 &lt; −3 &lt; 0 &lt; 2 &lt; 7</p>`,

// ── mi-01-2: Rounding Whole Numbers ──────────────────────────────────────────
'mi-01-2': `
<h2>Rounding Whole Numbers</h2>
<p>Rounding replaces a number with a simpler approximate value. It is essential for estimation, checking answers, and presenting data sensibly.</p>

<h3>The Rounding Rule</h3>

<svg width="100%" height="110" viewBox="0 0 480 110" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="480" height="100" rx="8" fill="#f1f8e9"/>
  <text x="240" y="28" font-size="13" text-anchor="middle" font-weight="bold" fill="#1b5e20">The Two-Step Rule</text>
  <rect x="20" y="38" width="200" height="56" rx="6" fill="#c8e6c9"/>
  <text x="120" y="58" font-size="12" text-anchor="middle" fill="#1b5e20" font-weight="bold">Next digit is 0–4</text>
  <text x="120" y="76" font-size="11" text-anchor="middle" fill="#2e7d32">→ Round DOWN</text>
  <text x="120" y="90" font-size="11" text-anchor="middle" fill="#2e7d32">(keep digit the same)</text>
  <rect x="260" y="38" width="200" height="56" rx="6" fill="#fff9c4"/>
  <text x="360" y="58" font-size="12" text-anchor="middle" fill="#f57f17" font-weight="bold">Next digit is 5–9</text>
  <text x="360" y="76" font-size="11" text-anchor="middle" fill="#e65100">→ Round UP</text>
  <text x="360" y="90" font-size="11" text-anchor="middle" fill="#e65100">(add 1 to digit)</text>
</svg>

<ol>
  <li>Find the digit at the place you are rounding to.</li>
  <li>Look at the very next digit to the right — this is the "decider".</li>
  <li>Apply the rule above, then replace all digits to the right with zeros.</li>
</ol>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 47,382 to the nearest thousand.</strong><br><br>
  <svg width="100%" height="55" viewBox="0 0 400 55" style="max-width:400px;display:block">
    <text x="10"  y="22" font-size="20" font-family="monospace" fill="#333">4</text>
    <text x="30"  y="22" font-size="20" font-family="monospace" fill="#1565c0" font-weight="bold">7</text>
    <text x="50"  y="22" font-size="20" font-family="monospace" fill="#c62828">3</text>
    <text x="70"  y="22" font-size="20" font-family="monospace" fill="#999">8</text>
    <text x="90"  y="22" font-size="20" font-family="monospace" fill="#999">2</text>
    <rect x="25" y="26" width="18" height="3" rx="1" fill="#1565c0"/>
    <rect x="46" y="26" width="18" height="3" rx="1" fill="#c62828"/>
    <text x="28"  y="44" font-size="9" fill="#1565c0">rounding here</text>
    <text x="48"  y="44" font-size="9" fill="#c62828">decider: 3 &lt; 5</text>
    <text x="160" y="22" font-size="14" fill="#2e7d32" font-weight="bold">→ Round down → 47,000</text>
  </svg>
</div>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 6,850 to the nearest hundred.</strong><br><br>
  Hundreds digit = 8. Decider = 5 (≥ 5) → round up.<br>
  8 becomes 9, digits to the right become zeros. Answer: <strong>6,900</strong>
</div>

<h3>Significant Figures</h3>
<p>Significant figures (s.f.) are counted from the <strong>first non-zero digit</strong>. Rounding to s.f. keeps the most important digits regardless of the size of the number.</p>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 34,762 to 2 significant figures.</strong><br>
  1st s.f. = 3 (ten-thousands), 2nd s.f. = 4 (thousands). Decider = 7 ≥ 5 → round up.<br>
  4 becomes 5. All digits to the right become zeros. Answer: <strong>35,000</strong><br><br>
  <strong>Round 0.004572 to 2 s.f.</strong><br>
  Zeros after the decimal point are not significant — start counting at 4.<br>
  1st s.f. = 4, 2nd s.f. = 5. Decider = 7 → round up. Answer: <strong>0.0046</strong>
</div>`,

// ── mi-01-3: Word Names & Roman Numerals ─────────────────────────────────────
'mi-01-3': `
<h2>Word Names &amp; Roman Numerals</h2>

<h3>Writing Numbers in Words</h3>
<p>Break the number into groups of three digits from the right, then name each group.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="100%" height="70" viewBox="0 0 480 70" style="max-width:480px;display:block">
    <text x="30"  y="24" font-size="18" font-family="monospace" font-weight="bold" fill="#333">3,</text>
    <text x="56"  y="24" font-size="18" font-family="monospace" font-weight="bold" fill="#1565c0">405,</text>
    <text x="108" y="24" font-size="18" font-family="monospace" font-weight="bold" fill="#6a1b9a">072</text>
    <rect x="24"  y="30" width="28" height="3" rx="1" fill="#2e7d32"/>
    <rect x="55"  y="30" width="50" height="3" rx="1" fill="#1565c0"/>
    <rect x="108" y="30" width="42" height="3" rx="1" fill="#6a1b9a"/>
    <text x="38"  y="50" font-size="10" text-anchor="middle" fill="#2e7d32">millions</text>
    <text x="80"  y="50" font-size="10" text-anchor="middle" fill="#1565c0">thousands</text>
    <text x="130" y="50" font-size="10" text-anchor="middle" fill="#6a1b9a">units</text>
  </svg>
  <p style="margin:0.5em 0 0">
    <strong>three million</strong>, <strong>four hundred and five thousand</strong>, and <strong>seventy-two</strong>
  </p>
</div>

<h3>Roman Numerals</h3>
<p>Roman numerals use letters as symbols. They were used across the Roman Empire and are still seen today on clock faces, film titles, and building dates.</p>

<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Symbol</th>
    <th style="padding:8px;border:1px solid #ccc">I</th><th style="padding:8px;border:1px solid #ccc">V</th>
    <th style="padding:8px;border:1px solid #ccc">X</th><th style="padding:8px;border:1px solid #ccc">L</th>
    <th style="padding:8px;border:1px solid #ccc">C</th><th style="padding:8px;border:1px solid #ccc">D</th>
    <th style="padding:8px;border:1px solid #ccc">M</th>
  </tr>
  <tr style="text-align:center;font-weight:bold">
    <td style="padding:8px;border:1px solid #ccc">Value</td>
    <td style="padding:8px;border:1px solid #ccc">1</td><td style="padding:8px;border:1px solid #ccc">5</td>
    <td style="padding:8px;border:1px solid #ccc">10</td><td style="padding:8px;border:1px solid #ccc">50</td>
    <td style="padding:8px;border:1px solid #ccc">100</td><td style="padding:8px;border:1px solid #ccc">500</td>
    <td style="padding:8px;border:1px solid #ccc">1000</td>
  </tr>
</table>

<p><strong>The subtraction rule:</strong> Placing a smaller symbol <em>before</em> a larger one means subtract it. Only these six combinations are valid:</p>

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:1em 0;text-align:center">
  <div style="background:#e8f5e9;padding:8px;border-radius:6px"><strong>IV</strong> = 4</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:6px"><strong>IX</strong> = 9</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:6px"><strong>XL</strong> = 40</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:6px"><strong>XC</strong> = 90</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:6px"><strong>CD</strong> = 400</div>
  <div style="background:#e8f5e9;padding:8px;border-radius:6px"><strong>CM</strong> = 900</div>
</div>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Write 2024 in Roman numerals:</strong><br>
  2000 = MM &nbsp;|&nbsp; 24 = XXIV (20 + 4)<br>
  Answer: <strong>MMXXIV</strong>
</div>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Convert MCMLXXXIV to a number:</strong><br>
  M=1000, CM=900, L=50, XXX=30, IV=4<br>
  1000 + 900 + 50 + 30 + 4 = <strong>1984</strong>
</div>`,

// ── mi-01-4: Add & Subtract Whole Numbers ────────────────────────────────────
'mi-01-4': `
<h2>Add &amp; Subtract Whole Numbers</h2>

<h3>Column Addition</h3>
<p>Line up digits by place value — units under units, tens under tens. Add from right to left, <strong>carrying</strong> whenever a column total reaches 10 or more.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="200" height="100" viewBox="0 0 200 100" style="display:block">
    <text x="20" y="22" font-family="monospace" font-size="18" fill="#333">  4 7 8 6</text>
    <text x="20" y="44" font-family="monospace" font-size="18" fill="#333">+ 2 5 3 9</text>
    <line x1="10" y1="50" x2="150" y2="50" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="70" font-family="monospace" font-size="18" fill="#2e7d32" font-weight="bold">  7 3 2 5</text>
    <text x="160" y="70" font-size="10" fill="#888">carry: 1 1 1</text>
    <text x="10" y="90" font-size="10" fill="#555">6+9=15 → write 5, carry 1. Then 8+3+1=12 → write 2, carry 1…</text>
  </svg>
</div>

<h3>Column Subtraction</h3>
<p>When a digit on top is smaller than the digit below, <strong>exchange</strong> (borrow) 10 from the column to the left. That column loses 1, and this column gains 10.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="200" height="75" viewBox="0 0 200 75" style="display:block">
    <text x="20" y="22" font-family="monospace" font-size="18" fill="#333">  6 0 0 3</text>
    <text x="20" y="44" font-family="monospace" font-size="18" fill="#333">− 2 4 6 8</text>
    <line x1="10" y1="50" x2="150" y2="50" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="70" font-family="monospace" font-size="18" fill="#2e7d32" font-weight="bold">  3 5 3 5</text>
  </svg>
  <p style="margin:0.5em 0 0;font-size:0.9em;color:#555">Numbers like 6,003 need careful exchanging — borrow across the zeros step by step.</p>
</div>

<h3>Mental Strategies</h3>
<p>For many calculations, mental methods are faster than written ones. Learn to choose the best tool.</p>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:1em 0">
  <div style="background:#e8f5e9;padding:10px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px">Compensation</strong>
    <span style="font-size:0.9em">498 + 356<br>= 500 + 356 − 2<br>= <strong>854</strong></span>
  </div>
  <div style="background:#e3f2fd;padding:10px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px">Count Up</strong>
    <span style="font-size:0.9em">802 − 397<br>397 → 400 → 802<br>= 3 + 402 = <strong>405</strong></span>
  </div>
  <div style="background:#fff3e0;padding:10px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px">Partitioning</strong>
    <span style="font-size:0.9em">634 + 253<br>= 800 + 80 + 7<br>= <strong>887</strong></span>
  </div>
</div>`,

// ── mi-02-1: Multiply Whole Numbers ──────────────────────────────────────────
'mi-02-1': `
<h2>Multiply Whole Numbers</h2>

<h3>Times Table Fluency</h3>
<p>Confident recall of all tables up to 12×12 is essential — it makes every other calculation faster. Notice that multiplication is <strong>commutative</strong>: 7 × 9 = 9 × 7, so learning one fact gives you two.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Useful patterns to remember:</strong>
  <ul style="margin:0.5em 0">
    <li><strong>×9 trick:</strong> 9 × 7 = (10 × 7) − 7 = 70 − 7 = 63</li>
    <li><strong>Doubling:</strong> 8 × table = double the 4 × table (8 × 6 = 2 × 24 = 48)</li>
    <li><strong>Near square:</strong> 7 × 8 — know 7 × 7 = 49, then add one more 7 → 56</li>
    <li><strong>×11 up to 9:</strong> repeat the digit (11 × 7 = 77, 11 × 4 = 44)</li>
  </ul>
</div>

<h3>Multiplying by 10, 100, 1000</h3>
<p>Digits <strong>shift left</strong> by the number of zeros. It is not simply "adding zeros" — that only works for whole numbers, not decimals.</p>

<svg width="100%" height="80" viewBox="0 0 480 80" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="0" width="480" height="80" rx="8" fill="#e8f5e9"/>
  <text x="20"  y="30" font-size="14" fill="#333">36 × <tspan font-weight="bold">10</tspan>  = </text>
  <text x="110" y="30" font-size="14" fill="#1565c0" font-weight="bold">360</text>
  <text x="20"  y="52" font-size="14" fill="#333">36 × <tspan font-weight="bold">100</tspan> = </text>
  <text x="110" y="52" font-size="14" fill="#6a1b9a" font-weight="bold">3,600</text>
  <text x="20"  y="72" font-size="14" fill="#333">36 × <tspan font-weight="bold">1000</tspan>= </text>
  <text x="110" y="72" font-size="14" fill="#c62828" font-weight="bold">36,000</text>
  <text x="230" y="30" font-size="12" fill="#555">digits move 1 place left</text>
  <text x="230" y="52" font-size="12" fill="#555">digits move 2 places left</text>
  <text x="230" y="72" font-size="12" fill="#555">digits move 3 places left</text>
</svg>

<h3>Mental Multiplication Strategies</h3>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:1em 0">
  <div style="background:#f3e5f5;padding:10px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px">Partitioning</strong>
    <span style="font-size:0.9em">7 × 46<br>= 7×40 + 7×6<br>= 280 + 42<br>= <strong>322</strong></span>
  </div>
  <div style="background:#e3f2fd;padding:10px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px">Halve &amp; Double</strong>
    <span style="font-size:0.9em">16 × 25<br>= 8 × 50<br>= <strong>400</strong></span>
  </div>
  <div style="background:#fff3e0;padding:10px;border-radius:8px">
    <strong style="display:block;margin-bottom:4px">Near Multiples</strong>
    <span style="font-size:0.9em">99 × 8<br>= 100×8 − 8<br>= <strong>792</strong></span>
  </div>
</div>`,

// ── mi-02-2: Multiply Large Numbers ──────────────────────────────────────────
'mi-02-2': `
<h2>Multiply Large Numbers</h2>

<h3>Grid Method</h3>
<p>The grid method breaks each number into its place value parts, multiplies all combinations, then adds the results. It makes every step visible and easy to check.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Calculate 342 × 26</strong>
  <table style="border-collapse:collapse;margin-top:0.75em;font-size:0.95em">
    <tr>
      <th style="padding:8px;border:1px solid #ccc;background:#c8e6c9">×</th>
      <th style="padding:8px;border:1px solid #ccc;background:#c8e6c9">300</th>
      <th style="padding:8px;border:1px solid #ccc;background:#c8e6c9">40</th>
      <th style="padding:8px;border:1px solid #ccc;background:#c8e6c9">2</th>
      <th style="padding:8px;border:1px solid #ccc;background:#c8e6c9">Row total</th>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #ccc;background:#c8e6c9"><strong>20</strong></td>
      <td style="padding:8px;border:1px solid #ccc">6,000</td>
      <td style="padding:8px;border:1px solid #ccc">800</td>
      <td style="padding:8px;border:1px solid #ccc">40</td>
      <td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#1565c0">6,840</td>
    </tr>
    <tr>
      <td style="padding:8px;border:1px solid #ccc;background:#c8e6c9"><strong>6</strong></td>
      <td style="padding:8px;border:1px solid #ccc">1,800</td>
      <td style="padding:8px;border:1px solid #ccc">240</td>
      <td style="padding:8px;border:1px solid #ccc">12</td>
      <td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#1565c0">2,052</td>
    </tr>
  </table>
  <p style="margin:0.5em 0 0">6,840 + 2,052 = <strong>8,892</strong></p>
</div>

<h3>Long Multiplication (Column Method)</h3>
<p>The column method is more compact once you are confident. Multiply by each digit separately, remembering to add a zero placeholder for the tens row.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="200" height="110" viewBox="0 0 200 110" style="display:block">
    <text x="20" y="22" font-family="monospace" font-size="17" fill="#333">   3 4 2</text>
    <text x="20" y="42" font-family="monospace" font-size="17" fill="#333">×    2 6</text>
    <line x1="10" y1="48" x2="160" y2="48" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="66" font-family="monospace" font-size="17" fill="#1565c0"> 2 0 5 2</text>
    <text x="162" y="66" font-size="10" fill="#888">342 × 6</text>
    <text x="20" y="86" font-family="monospace" font-size="17" fill="#6a1b9a">6 8 4 0</text>
    <text x="162" y="86" font-size="10" fill="#888">342 × 20</text>
    <line x1="10" y1="92" x2="160" y2="92" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="108" font-family="monospace" font-size="17" fill="#2e7d32" font-weight="bold">8 8 9 2</text>
  </svg>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>💡 Always estimate first:</strong> 340 × 26 ≈ 350 × 25 = 8,750. Our answer of 8,892 is close — that's a good sign!
</div>`,

// ── mi-02-3: Divisibility Rules ───────────────────────────────────────────────
'mi-02-3': `
<h2>Divisibility Rules</h2>
<p>These quick checks tell you whether a number divides exactly — without doing any division. They are especially useful when simplifying fractions, finding factors, and checking answers.</p>

<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Divisible by</th>
    <th style="padding:8px;border:1px solid #ccc">Rule</th>
    <th style="padding:8px;border:1px solid #ccc">Example</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">2</td><td style="padding:8px;border:1px solid #ccc">Last digit is even (0, 2, 4, 6, 8)</td><td style="padding:8px;border:1px solid #ccc">134 ✓ (ends in 4)</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">3</td><td style="padding:8px;border:1px solid #ccc">Sum of all digits is divisible by 3</td><td style="padding:8px;border:1px solid #ccc">231: 2+3+1=6 ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">4</td><td style="padding:8px;border:1px solid #ccc">Last two digits form a number divisible by 4</td><td style="padding:8px;border:1px solid #ccc">1,324: 24÷4=6 ✓</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">5</td><td style="padding:8px;border:1px solid #ccc">Last digit is 0 or 5</td><td style="padding:8px;border:1px solid #ccc">245 ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">6</td><td style="padding:8px;border:1px solid #ccc">Divisible by both 2 <em>and</em> 3</td><td style="padding:8px;border:1px solid #ccc">312: even ✓, 3+1+2=6 ✓</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">9</td><td style="padding:8px;border:1px solid #ccc">Sum of all digits is divisible by 9</td><td style="padding:8px;border:1px solid #ccc">729: 7+2+9=18 ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;font-weight:bold;text-align:center">10</td><td style="padding:8px;border:1px solid #ccc">Last digit is 0</td><td style="padding:8px;border:1px solid #ccc">530 ✓</td></tr>
</table>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Worked example — Is 4,536 divisible by 6?</strong><br>
  Check ÷2: last digit is 6 (even) ✓<br>
  Check ÷3: 4+5+3+6 = 18, and 18÷3 = 6 ✓<br>
  Both rules pass → <strong>Yes, 4,536 ÷ 6 = 756</strong>
</div>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Is 5,841 divisible by 9?</strong><br>
  5+8+4+1 = 18. 18÷9 = 2 ✓ → <strong>Yes.</strong><br><br>
  <strong>Is 4,207 divisible by 3?</strong><br>
  4+2+0+7 = 13. 13 is not divisible by 3 → <strong>No.</strong>
</div>`,

// ── mi-02-4: Divide Whole Numbers ────────────────────────────────────────────
'mi-02-4': `
<h2>Divide Whole Numbers</h2>

<h3>Short Division (Bus Stop Method)</h3>
<p>Short division is efficient when dividing by a single-digit number. Work left to right, carrying remainders into the next column.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Calculate 936 ÷ 4</strong><br><br>
  <svg width="260" height="75" viewBox="0 0 260 75" style="display:block">
    <text x="20"  y="30" font-family="monospace" font-size="20" fill="#333">4 </text>
    <line x1="36" y1="0"  x2="36"  y2="40" stroke="#555" stroke-width="1.5"/>
    <line x1="36" y1="10" x2="160" y2="10" stroke="#555" stroke-width="1.5"/>
    <text x="44"  y="30" font-family="monospace" font-size="20" fill="#333">9 3 6</text>
    <text x="44"  y="55" font-family="monospace" font-size="20" fill="#2e7d32" font-weight="bold">2 3 4</text>
    <text x="170" y="22" font-size="11" fill="#888">9÷4=2 r1</text>
    <text x="170" y="38" font-size="11" fill="#888">13÷4=3 r1</text>
    <text x="170" y="54" font-size="11" fill="#888">16÷4=4</text>
  </svg>
</div>

<h3>Long Division</h3>
<p>Use long division when the divisor has two or more digits. Write out the working clearly at each step: divide → multiply → subtract → bring down.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Calculate 2,856 ÷ 12</strong><br><br>
  <svg width="300" height="105" viewBox="0 0 300 105" style="display:block">
    <text x="10"  y="25" font-family="monospace" font-size="16" fill="#333">12 </text>
    <line x1="38" y1="0"  x2="38"  y2="30" stroke="#555" stroke-width="1.5"/>
    <line x1="38" y1="8"  x2="170" y2="8"  stroke="#555" stroke-width="1.5"/>
    <text x="44"  y="25" font-family="monospace" font-size="16" fill="#333">2 8 5 6</text>
    <text x="44"  y="45" font-family="monospace" font-size="16" fill="#2e7d32" font-weight="bold">  2 3 8</text>
    <text x="180" y="25" font-size="11" fill="#1565c0">28÷12=2, 28−24=4</text>
    <text x="180" y="42" font-size="11" fill="#1565c0">bring down 5 → 45</text>
    <text x="180" y="59" font-size="11" fill="#1565c0">45÷12=3, 45−36=9</text>
    <text x="180" y="76" font-size="11" fill="#1565c0">bring down 6 → 96</text>
    <text x="180" y="93" font-size="11" fill="#1565c0">96÷12=8, remainder 0</text>
  </svg>
</div>

<h3>Expressing Remainders</h3>
<p>A remainder can be written in three ways — choose the form that best fits the context.</p>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:1em 0">
  <div style="background:#e3f2fd;padding:10px;border-radius:8px;text-align:center">
    <strong>23 ÷ 4</strong><br>
    = <strong>5 remainder 3</strong><br>
    <span style="font-size:0.85em;color:#555">Use for: "how many full boxes?"</span>
  </div>
  <div style="background:#f3e5f5;padding:10px;border-radius:8px;text-align:center">
    <strong>23 ÷ 4</strong><br>
    = <strong>5¾</strong><br>
    <span style="font-size:0.85em;color:#555">Use for: sharing equally</span>
  </div>
  <div style="background:#e8f5e9;padding:10px;border-radius:8px;text-align:center">
    <strong>23 ÷ 4</strong><br>
    = <strong>5.75</strong><br>
    <span style="font-size:0.85em;color:#555">Use for: money, decimals</span>
  </div>
</div>`,

// ── mi-03-1: Index Notation ───────────────────────────────────────────────────
'mi-03-1': `
<h2>Index Notation</h2>
<p><strong>Index notation</strong> is shorthand for repeated multiplication. Instead of writing 2 × 2 × 2 × 2 × 2, we write 2⁵ — much more compact, especially with large powers.</p>

<svg width="100%" height="130" viewBox="0 0 480 130" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="480" height="60" rx="8" fill="#e8f5e9"/>
  <text x="30" y="48" font-size="38" font-family="serif" fill="#1565c0" font-weight="bold">2</text>
  <text x="62" y="28" font-size="18" font-family="serif" fill="#c62828" font-weight="bold">5</text>
  <text x="88" y="48" font-size="18" fill="#333">= 2 × 2 × 2 × 2 × 2 = 32</text>
  <!-- Base label: left zone, text-anchor start -->
  <line x1="42" y1="66" x2="42" y2="76" stroke="#555" stroke-width="1.2"/>
  <text x="10" y="89" font-size="11" text-anchor="start" font-weight="bold" fill="#1565c0">base</text>
  <text x="10" y="103" font-size="10" text-anchor="start" fill="#555">(the number being multiplied)</text>
  <!-- Index label: right zone starting at x=240, well clear of base label -->
  <line x1="66" y1="66" x2="66" y2="76" stroke="#c62828" stroke-width="1.2"/>
  <line x1="66" y1="76" x2="238" y2="84" stroke="#c62828" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="240" y="89" font-size="11" text-anchor="start" font-weight="bold" fill="#c62828">index / exponent</text>
  <text x="240" y="103" font-size="10" text-anchor="start" fill="#c62828">(how many times it is multiplied)</text>
</svg>

<h3>Square Numbers</h3>
<p>n² means n × n — the area of a square with side length n. Learn these by heart; they appear constantly across all of maths.</p>

<div style="display:grid;grid-template-columns:repeat(6,1fr);gap:5px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#e8f5e9;padding:6px;border-radius:5px">1²=<strong>1</strong></div>
  <div style="background:#e8f5e9;padding:6px;border-radius:5px">2²=<strong>4</strong></div>
  <div style="background:#e8f5e9;padding:6px;border-radius:5px">3²=<strong>9</strong></div>
  <div style="background:#e8f5e9;padding:6px;border-radius:5px">4²=<strong>16</strong></div>
  <div style="background:#e8f5e9;padding:6px;border-radius:5px">5²=<strong>25</strong></div>
  <div style="background:#e8f5e9;padding:6px;border-radius:5px">6²=<strong>36</strong></div>
  <div style="background:#c8e6c9;padding:6px;border-radius:5px">7²=<strong>49</strong></div>
  <div style="background:#c8e6c9;padding:6px;border-radius:5px">8²=<strong>64</strong></div>
  <div style="background:#c8e6c9;padding:6px;border-radius:5px">9²=<strong>81</strong></div>
  <div style="background:#c8e6c9;padding:6px;border-radius:5px">10²=<strong>100</strong></div>
  <div style="background:#c8e6c9;padding:6px;border-radius:5px">11²=<strong>121</strong></div>
  <div style="background:#c8e6c9;padding:6px;border-radius:5px">12²=<strong>144</strong></div>
</div>

<h3>Cube Numbers</h3>
<p>n³ means n × n × n — the volume of a cube with side length n.</p>

<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:5px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#fff3e0;padding:6px;border-radius:5px">1³=<strong>1</strong></div>
  <div style="background:#fff3e0;padding:6px;border-radius:5px">2³=<strong>8</strong></div>
  <div style="background:#fff3e0;padding:6px;border-radius:5px">3³=<strong>27</strong></div>
  <div style="background:#ffe0b2;padding:6px;border-radius:5px">4³=<strong>64</strong></div>
  <div style="background:#ffe0b2;padding:6px;border-radius:5px">5³=<strong>125</strong></div>
</div>`,

// ── mi-03-2: Evaluate Indices ─────────────────────────────────────────────────
'mi-03-2': `
<h2>Evaluate Indices</h2>

<h3>Index Laws</h3>
<p>When the <strong>base is the same</strong>, there are elegant shortcuts — you never need to multiply everything out.</p>

<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Law</th>
    <th style="padding:8px;border:1px solid #ccc">Rule</th>
    <th style="padding:8px;border:1px solid #ccc">Why it works</th>
    <th style="padding:8px;border:1px solid #ccc">Example</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Multiply (same base)</td>
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold">aᵐ × aⁿ = aᵐ⁺ⁿ</td>
    <td style="padding:8px;border:1px solid #ccc;font-size:0.85em">Counting all the multiplications together</td>
    <td style="padding:8px;border:1px solid #ccc">3² × 3⁴ = 3⁶ = 729</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="padding:8px;border:1px solid #ccc">Divide (same base)</td>
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold">aᵐ ÷ aⁿ = aᵐ⁻ⁿ</td>
    <td style="padding:8px;border:1px solid #ccc;font-size:0.85em">Cancelling n of the multiplications</td>
    <td style="padding:8px;border:1px solid #ccc">5⁵ ÷ 5² = 5³ = 125</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Power of a power</td>
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold">(aᵐ)ⁿ = aᵐⁿ</td>
    <td style="padding:8px;border:1px solid #ccc;font-size:0.85em">Multiplying the indices together</td>
    <td style="padding:8px;border:1px solid #ccc">(2³)² = 2⁶ = 64</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="padding:8px;border:1px solid #ccc">Zero index</td>
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold">a⁰ = 1</td>
    <td style="padding:8px;border:1px solid #ccc;font-size:0.85em">aⁿ ÷ aⁿ = 1, and also aⁿ⁻ⁿ = a⁰</td>
    <td style="padding:8px;border:1px solid #ccc">7⁰ = 1</td>
  </tr>
</table>

<h3>BIDMAS with Indices</h3>
<p>Indices sit above multiplication and division in the order of operations — evaluate them before × and ÷, but after brackets.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Evaluate: 3 + 2³ × 4</strong>
  <svg width="100%" height="65" viewBox="0 0 400 65" style="max-width:400px;display:block;margin-top:0.5em">
    <rect x="0" y="0" width="400" height="65" rx="6" fill="#e8f5e9"/>
    <text x="10" y="20" font-size="13" fill="#333">Step 1 — Indices:  3 + <tspan font-weight="bold" fill="#c62828">2³</tspan> × 4 = 3 + <tspan font-weight="bold" fill="#c62828">8</tspan> × 4</text>
    <text x="10" y="40" font-size="13" fill="#333">Step 2 — Multiply: 3 + <tspan font-weight="bold" fill="#1565c0">8 × 4</tspan> = 3 + <tspan font-weight="bold" fill="#1565c0">32</tspan></text>
    <text x="10" y="58" font-size="13" fill="#2e7d32" font-weight="bold">Step 3 — Add:     3 + 32 = 35</text>
  </svg>
</div>`,

// ── mi-03-3: Square Roots of Perfect Squares ─────────────────────────────────
'mi-03-3': `
<h2>Square Roots of Perfect Squares</h2>
<p>The <strong>square root</strong> (√) is the inverse of squaring. √n asks: "What number, multiplied by itself, gives n?" A <strong>perfect square</strong> is a whole number whose square root is also a whole number.</p>

<svg width="100%" height="55" viewBox="0 0 480 55" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="480" height="45" rx="8" fill="#e3f2fd"/>
  <text x="30"  y="33" font-size="15" fill="#333">5² = 25</text>
  <text x="110" y="33" font-size="20" fill="#555">↔</text>
  <text x="140" y="33" font-size="15" fill="#1565c0" font-weight="bold">√25 = 5</text>
  <text x="240" y="33" font-size="13" fill="#666">They are inverses of each other</text>
</svg>

<h3>All Perfect Squares up to 144</h3>

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">√<strong>1</strong> = 1</div>
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">√<strong>4</strong> = 2</div>
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">√<strong>9</strong> = 3</div>
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">√<strong>16</strong> = 4</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">√<strong>25</strong> = 5</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">√<strong>36</strong> = 6</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">√<strong>49</strong> = 7</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">√<strong>64</strong> = 8</div>
  <div style="background:#a5d6a7;padding:7px;border-radius:5px">√<strong>81</strong> = 9</div>
  <div style="background:#a5d6a7;padding:7px;border-radius:5px">√<strong>100</strong> = 10</div>
  <div style="background:#a5d6a7;padding:7px;border-radius:5px">√<strong>121</strong> = 11</div>
  <div style="background:#a5d6a7;padding:7px;border-radius:5px">√<strong>144</strong> = 12</div>
</div>

<h3>Cube Roots</h3>
<p>∛n finds the number that, cubed, gives n. The ³ inside the root sign means "cube root", not "square root".</p>

<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#fff3e0;padding:7px;border-radius:5px">∛<strong>1</strong> = 1</div>
  <div style="background:#fff3e0;padding:7px;border-radius:5px">∛<strong>8</strong> = 2</div>
  <div style="background:#ffe0b2;padding:7px;border-radius:5px">∛<strong>27</strong> = 3</div>
  <div style="background:#ffe0b2;padding:7px;border-radius:5px">∛<strong>64</strong> = 4</div>
  <div style="background:#ffcc80;padding:7px;border-radius:5px">∛<strong>125</strong> = 5</div>
</div>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Useful check:</strong> √(n²) = n &nbsp;and&nbsp; (√n)² = n for n ≥ 0<br>
  So √49 = 7 because 7² = 49 ✓
</div>`,

// ── mi-03-4: Mixed Powers & Roots Problems ────────────────────────────────────
'mi-03-4': `
<h2>Mixed Powers &amp; Roots Problems</h2>
<p>This lesson brings together index notation, squares, cubes, and roots in multi-step calculations. The key is always to apply BIDMAS carefully.</p>

<h3>Step-by-Step Strategy</h3>

<svg width="100%" height="100" viewBox="0 0 480 100" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0"   y="20" width="90"  height="60" rx="8" fill="#e3f2fd"/>
  <rect x="110" y="20" width="90"  height="60" rx="8" fill="#f3e5f5"/>
  <rect x="220" y="20" width="90"  height="60" rx="8" fill="#fff3e0"/>
  <rect x="330" y="20" width="140" height="60" rx="8" fill="#e8f5e9"/>
  <text x="45"  y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#1565c0">1. Brackets</text>
  <text x="45"  y="62" text-anchor="middle" font-size="11" fill="#1565c0">( ) first</text>
  <text x="155" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#6a1b9a">2. Indices</text>
  <text x="155" y="62" text-anchor="middle" font-size="11" fill="#6a1b9a">² ³ √ ∛</text>
  <text x="265" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#e65100">3. × and ÷</text>
  <text x="265" y="62" text-anchor="middle" font-size="11" fill="#e65100">left to right</text>
  <text x="400" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#2e7d32">4. + and −</text>
  <text x="400" y="62" text-anchor="middle" font-size="11" fill="#2e7d32">left to right</text>
  <line x1="90"  y1="50" x2="110" y2="50" stroke="#999" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="200" y1="50" x2="220" y2="50" stroke="#999" stroke-width="1.5"/>
  <line x1="310" y1="50" x2="330" y2="50" stroke="#999" stroke-width="1.5"/>
  <polygon points="108,46 116,50 108,54" fill="#999"/>
  <polygon points="218,46 226,50 218,54" fill="#999"/>
  <polygon points="328,46 336,50 328,54" fill="#999"/>
</svg>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Evaluate: √(4² + 3²)</strong><br>
  Brackets first: 4² + 3² = 16 + 9 = 25<br>
  Then root: √25 = <strong>5</strong><br>
  <span style="font-size:0.85em;color:#555">(This is Pythagoras' theorem in disguise!)</span>
</div>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Evaluate: (2³ − ∛27) × 4</strong><br>
  Inside brackets: 2³ = 8, ∛27 = 3 → 8 − 3 = 5<br>
  Then multiply: 5 × 4 = <strong>20</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Simplify: 2⁴ + √81 − 3²</strong><br>
  Indices/roots: 2⁴ = 16, √81 = 9, 3² = 9<br>
  Then: 16 + 9 − 9 = <strong>16</strong>
</div>

<h3>Standard Form Preview</h3>
<p>Powers of 10 let us write very large or very small numbers compactly.<br>3,400,000 = 3.4 × 10⁶ &nbsp;|&nbsp; 0.000052 = 5.2 × 10⁻⁵</p>`,

// ── mi-04-1: Prime & Composite Numbers ───────────────────────────────────────
'mi-04-1': `
<h2>Prime &amp; Composite Numbers</h2>

<h3>The Key Definitions</h3>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:12px;border-radius:8px;border-left:4px solid #2e7d32">
    <strong style="display:block;color:#2e7d32">Prime</strong>
    Exactly 2 factors: 1 and itself<br>
    <span style="font-size:0.85em;color:#555">2, 3, 5, 7, 11, 13…</span>
  </div>
  <div style="background:#fff3e0;padding:12px;border-radius:8px;border-left:4px solid #e65100">
    <strong style="display:block;color:#e65100">Composite</strong>
    More than 2 factors<br>
    <span style="font-size:0.85em;color:#555">4, 6, 8, 9, 10, 12…</span>
  </div>
  <div style="background:#f3e5f5;padding:12px;border-radius:8px;border-left:4px solid #6a1b9a">
    <strong style="display:block;color:#6a1b9a">Special: 1</strong>
    Neither prime nor composite<br>
    <span style="font-size:0.85em;color:#555">Only 1 factor: itself</span>
  </div>
</div>

<p><strong>Note:</strong> 2 is the only even prime number. All other even numbers are composite because they are divisible by 2.</p>

<h3>Primes up to 50 (Sieve of Eratosthenes)</h3>
<p>Cross out all multiples of each prime in turn. What remains are the primes.</p>

<div style="display:grid;grid-template-columns:repeat(10,1fr);gap:4px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">2</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">3</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">4</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">5</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">6</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">7</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">8</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">9</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">10</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">11</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">12</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">13</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">14</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">15</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">16</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">17</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">18</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">19</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">20</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">21</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">22</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">23</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">24</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">25</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">26</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">27</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">28</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">29</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">30</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">31</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">32</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">33</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">34</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">35</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">36</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">37</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">38</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">39</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">40</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">41</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">42</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">43</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">44</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">45</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">46</div>
  <div style="background:#c8e6c9;padding:5px;border-radius:4px;font-weight:bold">47</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">48</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">49</div>
  <div style="background:#eee;padding:5px;border-radius:4px;color:#bbb">50</div>
</div>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Is 97 prime?</strong> √97 ≈ 9.9. Only need to test primes up to 9: 2, 3, 5, 7.<br>
  97 is odd ✓. 9+7=16 (not ÷3) ✓. Doesn't end in 0 or 5 ✓. 97÷7=13.8… ✓<br>
  None divide it exactly → <strong>97 is prime.</strong>
</div>`,

// ── mi-04-2: Prime Factorisation ─────────────────────────────────────────────
'mi-04-2': `
<h2>Prime Factorisation</h2>
<p>Every whole number greater than 1 can be written as a <strong>unique product of primes</strong> — this is the Fundamental Theorem of Arithmetic. There is exactly one way to do this for any number (ignoring order).</p>

<h3>Method 1: Factor Tree</h3>
<p>Split the number into any two factors, then keep splitting each branch until every branch ends in a prime.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Decompose 60</strong><br>
  <svg width="220" height="130" viewBox="0 0 220 130" style="display:block;margin:0.5em auto">
    <text x="105" y="20" text-anchor="middle" font-size="18" font-weight="bold" fill="#1565c0">60</text>
    <line x1="105" y1="24" x2="60"  y2="50" stroke="#555" stroke-width="1.5"/>
    <line x1="105" y1="24" x2="155" y2="50" stroke="#555" stroke-width="1.5"/>
    <text x="55"  y="65" text-anchor="middle" font-size="16" fill="#333">6</text>
    <text x="155" y="65" text-anchor="middle" font-size="16" fill="#333">10</text>
    <line x1="55"  y1="68" x2="30"  y2="94" stroke="#555" stroke-width="1.5"/>
    <line x1="55"  y1="68" x2="80"  y2="94" stroke="#555" stroke-width="1.5"/>
    <line x1="155" y1="68" x2="130" y2="94" stroke="#555" stroke-width="1.5"/>
    <line x1="155" y1="68" x2="180" y2="94" stroke="#555" stroke-width="1.5"/>
    <circle cx="30"  cy="104" r="12" fill="#c8e6c9" stroke="#2e7d32"/>
    <circle cx="80"  cy="104" r="12" fill="#c8e6c9" stroke="#2e7d32"/>
    <circle cx="130" cy="104" r="12" fill="#c8e6c9" stroke="#2e7d32"/>
    <circle cx="180" cy="104" r="12" fill="#c8e6c9" stroke="#2e7d32"/>
    <text x="30"  y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">2</text>
    <text x="80"  y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">3</text>
    <text x="130" y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">2</text>
    <text x="180" y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#2e7d32">5</text>
    <text x="110" y="128" text-anchor="middle" font-size="11" fill="#555">60 = 2 × 3 × 2 × 5 = 2² × 3 × 5</text>
  </svg>
</div>

<h3>Method 2: Division Ladder</h3>
<p>Divide repeatedly by the smallest prime that goes exactly, working downward.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Decompose 72</strong><br>
  <svg width="160" height="150" viewBox="0 0 160 150" style="display:block;margin:0.5em 0">
    <text x="20" y="22"  font-family="monospace" font-size="15" fill="#c62828">2</text>
    <text x="10" y="22" font-size="15" fill="#555">│</text>
    <text x="36" y="22" font-family="monospace" font-size="15" fill="#333">72</text>
    <line x1="8" y1="26" x2="80" y2="26" stroke="#555"/>
    <text x="20" y="42"  font-family="monospace" font-size="15" fill="#c62828">2</text>
    <text x="10" y="42" font-size="15" fill="#555">│</text>
    <text x="36" y="42" font-family="monospace" font-size="15" fill="#333">36</text>
    <line x1="8" y1="46" x2="80" y2="46" stroke="#555"/>
    <text x="20" y="62"  font-family="monospace" font-size="15" fill="#c62828">2</text>
    <text x="10" y="62" font-size="15" fill="#555">│</text>
    <text x="36" y="62" font-family="monospace" font-size="15" fill="#333">18</text>
    <line x1="8" y1="66" x2="80" y2="66" stroke="#555"/>
    <text x="20" y="82"  font-family="monospace" font-size="15" fill="#6a1b9a">3</text>
    <text x="10" y="82" font-size="15" fill="#555">│</text>
    <text x="36" y="82" font-family="monospace" font-size="15" fill="#333">9</text>
    <line x1="8" y1="86" x2="80" y2="86" stroke="#555"/>
    <text x="20" y="102"  font-family="monospace" font-size="15" fill="#6a1b9a">3</text>
    <text x="10" y="102" font-size="15" fill="#555">│</text>
    <text x="36" y="102" font-family="monospace" font-size="15" fill="#333">3</text>
    <line x1="8" y1="106" x2="80" y2="106" stroke="#555"/>
    <text x="36" y="122" font-family="monospace" font-size="15" fill="#2e7d32" font-weight="bold">1</text>
    <text x="10" y="140" font-size="12" fill="#555">72 = 2³ × 3²</text>
  </svg>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Why does this matter?</strong> Prime factorisation is the essential tool for finding HCF and LCM efficiently — the next two lessons depend on it.
</div>`,

// ── mi-04-3: Highest Common Factor (HCF) ─────────────────────────────────────
'mi-04-3': `
<h2>Highest Common Factor (HCF)</h2>
<p>The HCF — also called the Greatest Common Factor (GCF) or Greatest Common Divisor (GCD) — is the <strong>largest factor shared</strong> by two or more numbers.</p>

<h3>Method: Prime Factorisation + Venn Diagram</h3>
<ol>
  <li>Write each number as a product of prime factors.</li>
  <li>Place shared primes in the overlap — take the <strong>lower</strong> power.</li>
  <li>Multiply the shared primes to find the HCF.</li>
</ol>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Find HCF(36, 48)</strong><br>
  36 = 2² × 3² &nbsp;&nbsp; 48 = 2⁴ × 3<br><br>
  <svg width="320" height="110" viewBox="0 0 320 110" style="max-width:320px;display:block;margin:0.5em auto">
    <ellipse cx="110" cy="55" rx="100" ry="45" fill="#bbdefb" fill-opacity="0.5" stroke="#1565c0" stroke-width="1.5"/>
    <ellipse cx="200" cy="55" rx="100" ry="45" fill="#c8e6c9" fill-opacity="0.5" stroke="#2e7d32" stroke-width="1.5"/>
    <text x="65"  y="50" text-anchor="middle" font-size="13" fill="#1565c0" font-weight="bold">2²</text>
    <text x="65"  y="68" text-anchor="middle" font-size="12" fill="#1565c0">(only 36)</text>
    <text x="155" y="44" text-anchor="middle" font-size="13" fill="#555" font-weight="bold">2²</text>
    <text x="155" y="60" text-anchor="middle" font-size="13" fill="#555" font-weight="bold">3</text>
    <text x="155" y="76" text-anchor="middle" font-size="10" fill="#777">shared</text>
    <text x="248" y="50" text-anchor="middle" font-size="13" fill="#2e7d32" font-weight="bold">3</text>
    <text x="248" y="68" text-anchor="middle" font-size="12" fill="#2e7d32">(only 48)</text>
    <text x="55"  y="108" font-size="11" fill="#1565c0">36</text>
    <text x="265" y="108" font-size="11" fill="#2e7d32">48</text>
  </svg>
  HCF = 2² × 3 = 4 × 3 = <strong>12</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Real-life problem:</strong> You have 48 red and 36 blue beads. You want to make identical necklaces using ALL the beads. What is the maximum number of necklaces?<br>
  HCF(48, 36) = 12 necklaces → each has 4 red and 3 blue beads.
</div>`,

// ── mi-04-4: Lowest Common Multiple (LCM) ────────────────────────────────────
'mi-04-4': `
<h2>Lowest Common Multiple (LCM)</h2>
<p>The LCM is the <strong>smallest positive number</strong> that is a multiple of all the given numbers. It is used whenever things need to line up — timetables, fractions with different denominators, repeating cycles.</p>

<h3>Method: Prime Factorisation</h3>
<ol>
  <li>Write each number as a product of prime factors.</li>
  <li>Collect <em>all</em> distinct prime factors.</li>
  <li>For each prime, take the <strong>highest</strong> power that appears in any factorisation.</li>
  <li>Multiply these together.</li>
</ol>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Find LCM(12, 18)</strong><br>
  12 = 2² × 3 &nbsp;&nbsp; 18 = 2 × 3²<br><br>
  <svg width="320" height="110" viewBox="0 0 320 110" style="max-width:320px;display:block;margin:0.5em auto">
    <ellipse cx="110" cy="55" rx="100" ry="45" fill="#bbdefb" fill-opacity="0.5" stroke="#1565c0" stroke-width="1.5"/>
    <ellipse cx="200" cy="55" rx="100" ry="45" fill="#c8e6c9" fill-opacity="0.5" stroke="#2e7d32" stroke-width="1.5"/>
    <text x="65"  y="50" text-anchor="middle" font-size="13" fill="#1565c0" font-weight="bold">2²</text>
    <text x="65"  y="68" text-anchor="middle" font-size="11" fill="#1565c0">highest power of 2</text>
    <text x="155" y="52" text-anchor="middle" font-size="12" fill="#555">2, 3</text>
    <text x="155" y="66" text-anchor="middle" font-size="10" fill="#777">shared</text>
    <text x="248" y="50" text-anchor="middle" font-size="13" fill="#2e7d32" font-weight="bold">3²</text>
    <text x="248" y="68" text-anchor="middle" font-size="11" fill="#2e7d32">highest power of 3</text>
    <text x="55"  y="108" font-size="11" fill="#1565c0">12</text>
    <text x="265" y="108" font-size="11" fill="#2e7d32">18</text>
  </svg>
  LCM = 2² × 3² = 4 × 9 = <strong>36</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Real-life problem:</strong> Bus A runs every 15 min. Bus B runs every 20 min. Both depart together at 9:00 am. When do they next leave together?<br>
  LCM(15, 20) = 60 minutes → they next depart together at <strong>10:00 am</strong>.
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Useful check:</strong> HCF(a, b) × LCM(a, b) = a × b<br>
  HCF(12, 18) × LCM(12, 18) = 6 × 36 = 216 = 12 × 18 ✓
</div>`

});
