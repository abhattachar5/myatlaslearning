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
  <div class="lesson-diagram" data-diagram="y7-math-1-0"></div>
</div>

<h3>Negative Numbers on a Number Line</h3>
<p>Numbers below zero are <strong>negative</strong>. They sit to the left of 0 on the number line. The further left a number is, the smaller its value — so −8 is less than −3, even though 8 &gt; 3 as whole numbers.</p>

<div class="lesson-diagram" data-diagram="y7-math-1-1"></div>
<p style="margin-top:0.3em">−8 &lt; −3 &lt; 0 &lt; 2 &lt; 7</p>`,

// ── mi-01-2: Rounding Whole Numbers ──────────────────────────────────────────
'mi-01-2': `
<h2>Rounding Whole Numbers</h2>
<p>Rounding replaces a number with a simpler approximate value. It is essential for estimation, checking answers, and presenting data sensibly.</p>

<h3>The Rounding Rule</h3>

<div class="lesson-diagram" data-diagram="y7-math-1-2"></div>

<ol>
  <li>Find the digit at the place you are rounding to.</li>
  <li>Look at the very next digit to the right — this is the "decider".</li>
  <li>Apply the rule above, then replace all digits to the right with zeros.</li>
</ol>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Round 47,382 to the nearest thousand.</strong><br><br>
  <div class="lesson-diagram" data-diagram="y7-math-1-3"></div>
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
  <div class="lesson-diagram" data-diagram="y7-math-1-4"></div>
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
  <div class="lesson-diagram" data-diagram="y7-math-1-5"></div>
</div>

<h3>Column Subtraction</h3>
<p>When a digit on top is smaller than the digit below, <strong>exchange</strong> (borrow) 10 from the column to the left. That column loses 1, and this column gains 10.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <div class="lesson-diagram" data-diagram="y7-math-1-6"></div>
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

<div class="lesson-diagram" data-diagram="y7-math-1-7"></div>

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
  <div class="lesson-diagram" data-diagram="y7-math-1-8"></div>
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
  <div class="lesson-diagram" data-diagram="y7-math-1-9"></div>
</div>

<h3>Long Division</h3>
<p>Use long division when the divisor has two or more digits. Write out the working clearly at each step: divide → multiply → subtract → bring down.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Calculate 2,856 ÷ 12</strong><br><br>
  <div class="lesson-diagram" data-diagram="y7-math-1-10"></div>
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

<div class="lesson-diagram" data-diagram="y7-math-1-11"></div>

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
  <div class="lesson-diagram" data-diagram="y7-math-1-12"></div>
</div>`,

// ── mi-03-3: Square Roots of Perfect Squares ─────────────────────────────────
'mi-03-3': `
<h2>Square Roots of Perfect Squares</h2>
<p>The <strong>square root</strong> (√) is the inverse of squaring. √n asks: "What number, multiplied by itself, gives n?" A <strong>perfect square</strong> is a whole number whose square root is also a whole number.</p>

<div class="lesson-diagram" data-diagram="y7-math-1-13"></div>

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

<div class="lesson-diagram" data-diagram="y7-math-1-14"></div>

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

// ── mi-03-5: Standard Form (A × 10ⁿ) ────────────────────────────────────────
'mi-03-5': `
<h2>Standard Form (A × 10<sup>n</sup>)</h2>
<p><strong>Standard form</strong> is a way of writing very large or very small numbers neatly. A number in standard form looks like:</p>
<p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center;font-size:1.1em"><strong>A × 10<sup>n</sup></strong> &nbsp; where &nbsp; <strong>1 ≤ A < 10</strong> &nbsp; and &nbsp; <strong>n is an integer</strong></p>

<h3>Large Numbers (positive powers)</h3>
<p>Move the decimal point <strong>left</strong> until you have a number between 1 and 10. The number of places you moved becomes the positive power of 10.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Write 4,500,000 in standard form.<br>
  4,500,000 → 4.5 (moved 6 places left)<br>
  = <strong>4.5 × 10⁶</strong>
</div>

<h3>Small Numbers (negative powers)</h3>
<p>Move the decimal point <strong>right</strong> until you have a number between 1 and 10. The number of places you moved becomes the negative power of 10.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Write 0.00032 in standard form.<br>
  0.00032 → 3.2 (moved 4 places right)<br>
  = <strong>3.2 × 10⁻⁴</strong>
</div>

<h3>Converting Back to Ordinary Numbers</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e3f2fd;padding:10px;border-radius:8px">
    <strong>Positive power → move right</strong><br>
    6.1 × 10³ = 6,100<br>
    <span style="font-size:0.85em;color:#555">Move decimal 3 places right</span>
  </div>
  <div style="background:#fff3e0;padding:10px;border-radius:8px">
    <strong>Negative power → move left</strong><br>
    7.04 × 10⁻² = 0.0704<br>
    <span style="font-size:0.85em;color:#555">Move decimal 2 places left</span>
  </div>
</div>

<h3>Ordering Numbers in Standard Form</h3>
<p>Compare the <strong>powers of 10 first</strong> — a larger power means a larger number. If the powers are the same, compare the values of A.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Order these from smallest to largest:<br>
  3.1 × 10⁴, &nbsp; 8.2 × 10³, &nbsp; 1.5 × 10⁴<br><br>
  8.2 × 10³ = 8,200 &nbsp;|&nbsp; 1.5 × 10⁴ = 15,000 &nbsp;|&nbsp; 3.1 × 10⁴ = 31,000<br>
  Answer: <strong>8.2 × 10³, 1.5 × 10⁴, 3.1 × 10⁴</strong>
</div>

<h3>Common Mistakes</h3>
<p>❌ Writing 45 × 10³ — A must be between 1 and 10 → ✅ 4.5 × 10⁴</p>
<p>❌ Writing 0.3 × 10⁵ — A must be at least 1 → ✅ 3 × 10⁴</p>`,

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
  <div class="lesson-diagram" data-diagram="y7-math-1-15"></div>
</div>

<h3>Method 2: Division Ladder</h3>
<p>Divide repeatedly by the smallest prime that goes exactly, working downward.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Decompose 72</strong><br>
  <div class="lesson-diagram" data-diagram="y7-math-1-16"></div>
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
  <div class="lesson-diagram" data-diagram="y7-math-1-17"></div>
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
  <div class="lesson-diagram" data-diagram="y7-math-1-18"></div>
  LCM = 2² × 3² = 4 × 9 = <strong>36</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Real-life problem:</strong> Bus A runs every 15 min. Bus B runs every 20 min. Both depart together at 9:00 am. When do they next leave together?<br>
  LCM(15, 20) = 60 minutes → they next depart together at <strong>10:00 am</strong>.
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Useful check:</strong> HCF(a, b) × LCM(a, b) = a × b<br>
  HCF(12, 18) × LCM(12, 18) = 6 × 36 = 216 = 12 × 18 ✓
</div>`,

// ── mi-04-5: Multiplicative Inverses ──────────────────────────────────────
'mi-04-5': `
<h2>Multiplicative Inverses (Reciprocals)</h2>
<p>The <strong>multiplicative inverse</strong> of a number is the value you multiply it by to get <strong>1</strong>. It is also called the <strong>reciprocal</strong>.</p>

<div style="background:#e3f2fd;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center;font-size:1.1em">
  <strong>Key rule:</strong> n × 1/n = 1
</div>

<h3>Finding the Reciprocal</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
<tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Number type</th><th style="padding:8px;border:1px solid #ccc">Number</th><th style="padding:8px;border:1px solid #ccc">Reciprocal</th><th style="padding:8px;border:1px solid #ccc">Check</th></tr>
<tr><td style="padding:8px;border:1px solid #ccc">Whole number</td><td style="padding:8px;border:1px solid #ccc">5</td><td style="padding:8px;border:1px solid #ccc">1/5</td><td style="padding:8px;border:1px solid #ccc">5 × 1/5 = 1 ✓</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">Fraction</td><td style="padding:8px;border:1px solid #ccc">3/4</td><td style="padding:8px;border:1px solid #ccc">4/3</td><td style="padding:8px;border:1px solid #ccc">3/4 × 4/3 = 12/12 = 1 ✓</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">Mixed number</td><td style="padding:8px;border:1px solid #ccc">2½ = 5/2</td><td style="padding:8px;border:1px solid #ccc">2/5</td><td style="padding:8px;border:1px solid #ccc">5/2 × 2/5 = 10/10 = 1 ✓</td></tr>
<tr><td style="padding:8px;border:1px solid #ccc">Decimal</td><td style="padding:8px;border:1px solid #ccc">0.25 = 1/4</td><td style="padding:8px;border:1px solid #ccc">4</td><td style="padding:8px;border:1px solid #ccc">0.25 × 4 = 1 ✓</td></tr>
</table>

<h3>Quick Method</h3>
<ul>
  <li><strong>Whole number n</strong> → reciprocal is <strong>1/n</strong></li>
  <li><strong>Fraction a/b</strong> → flip it to <strong>b/a</strong></li>
  <li><strong>Decimal</strong> → convert to a fraction first, then flip</li>
  <li><strong>Mixed number</strong> → convert to improper fraction, then flip</li>
</ul>

<h3>Worked Examples</h3>
<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 1:</strong> Find the reciprocal of 7.<br>
  Reciprocal = 1/7. Check: 7 × 1/7 = 1 ✓
</div>
<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 2:</strong> Find the reciprocal of 0.2.<br>
  0.2 = 1/5 → reciprocal = 5/1 = 5. Check: 0.2 × 5 = 1 ✓
</div>
<div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0">
  <strong>Example 3:</strong> Find the reciprocal of 1¾.<br>
  1¾ = 7/4 → reciprocal = 4/7. Check: 7/4 × 4/7 = 28/28 = 1 ✓
</div>

<div style="background:#ffebee;padding:0.75em 1em;border-radius:8px;margin:1em 0">
  <strong>⚠ Special case:</strong> 0 has <strong>no reciprocal</strong>. There is no number that multiplied by 0 gives 1, because 0 × anything = 0. Division by zero is undefined.
</div>

<div style="background:#e8f5e9;padding:0.75em 1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>Remember:</strong> The reciprocal of 1 is 1 (since 1 × 1 = 1), and the reciprocal of −1 is −1 (since −1 × −1 = 1).
</div>`

});
