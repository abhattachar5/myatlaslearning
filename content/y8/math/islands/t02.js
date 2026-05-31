// math-y8-t02.js — Year 8 Maths Topic 2: Decimals & Operations
// Islands: m8i-02-1 .. m8i-02-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-02-1 — Decimal Place Value & Ordering
  {id:"m8fc-02-1-1",islandId:"m8i-02-1",front:"Name the place value of each digit in 47.358.",
   back:"4 → tens\n7 → ones (units)\n3 → tenths\n5 → hundredths\n8 → thousandths\n\nThe decimal point separates the whole-number part from the fractional part.",difficulty:1,category:"definition"},
  {id:"m8fc-02-1-2",islandId:"m8i-02-1",front:"Write 7 hundredths as a decimal.",
   back:"0.07\n\nHundredths occupy the second decimal place.\n7 hundredths = 7 ÷ 100 = 0.07.\nNote the zero placeholder in the tenths column.",difficulty:1,category:"calculation"},
  {id:"m8fc-02-1-3",islandId:"m8i-02-1",front:"Put these decimals in order from smallest to largest: 0.5, 0.45, 0.509, 0.5.",
   back:"0.45 < 0.5 = 0.500 < 0.509\n\nAlign the decimal points and compare column by column:\nTenths: 4 < 5 → 0.45 is smallest.\nAmong those with tenths digit 5: 0.500 vs 0.509 → hundredths both 0, thousandths 0 vs 9, so 0.500 < 0.509.\n0.5 and 0.500 are equal.",difficulty:2,category:"application"},
  {id:"m8fc-02-1-4",islandId:"m8i-02-1",front:"Round 6.3748 to 2 decimal places.",
   back:"6.37\n\nLook at the third decimal place: 4 (less than 5).\nRound down — the second decimal place stays as 7.\nAnswer: 6.37.",difficulty:1,category:"calculation"},
  {id:"m8fc-02-1-5",islandId:"m8i-02-1",front:"Round 0.0856 to 3 significant figures.",
   back:"0.0856\n\nThe first significant figure is 8 (ignore leading zeros).\nSo the three significant figures are 8, 5, 6.\nThe digit after the 3rd s.f. is... there is no 4th digit, so 0.0856 to 3 s.f. is 0.0856.\n\nActually: 0.0856 already has exactly 3 s.f. (8, 5, 6). Answer: 0.0856.",difficulty:2,category:"calculation"},
  {id:"m8fc-02-1-6",islandId:"m8i-02-1",front:"Which is larger: 0.6 or 0.06? Explain.",
   back:"0.6 is larger.\n\n0.6 = 6 tenths = 0.60\n0.06 = 6 hundredths = 0.060\n\nComparing tenths: 6 > 0, so 0.6 > 0.06.\nAlternatively: 0.6 ÷ 0.06 = 10, confirming 0.6 is ten times bigger.",difficulty:1,category:"concept"},

  // m8i-02-2 — Add & Subtract Decimals
  {id:"m8fc-02-2-1",islandId:"m8i-02-2",front:"What is the key rule when adding or subtracting decimals in columns?",
   back:"Line up the decimal points.\n\nThis ensures tenths align with tenths, hundredths with hundredths, etc.\nFill in missing decimal places with zeros to avoid errors.\nExample: 3.4 + 1.27 → write as 3.40 + 1.27.",difficulty:1,category:"concept"},
  {id:"m8fc-02-2-2",islandId:"m8i-02-2",front:"Calculate 5.63 + 2.9.",
   back:"8.53\n\n  5.63\n+ 2.90\n------\n  8.53\n\nWrite 2.9 as 2.90. Add columns right to left: 3+0=3, 6+9=15 (write 5 carry 1), 5+2+1=8.",difficulty:1,category:"calculation"},
  {id:"m8fc-02-2-3",islandId:"m8i-02-2",front:"Calculate 8.3 − 4.76.",
   back:"3.54\n\n  8.30\n− 4.76\n------\n  3.54\n\nWrite 8.3 as 8.30. Borrowing: 0 < 6, borrow from tens place → 10 − 6 = 4; 2 < 7, borrow → 12 − 7 = 5; 7 − 4 = 3 (after lending).\nAnswer: 3.54.",difficulty:2,category:"calculation"},
  {id:"m8fc-02-2-4",islandId:"m8i-02-2",front:"A shelf is 1.2 m long. A book is 0.35 m wide. How much shelf space is left?",
   back:"0.85 m\n\n1.20 − 0.35 = ?\n  1.20\n− 0.35\n------\n  0.85\n\nThere is 0.85 m of shelf space remaining.",difficulty:2,category:"application"},
  {id:"m8fc-02-2-5",islandId:"m8i-02-2",front:"What is the missing number? □ + 3.47 = 7.2",
   back:"3.73\n\n□ = 7.2 − 3.47 = 7.20 − 3.47\n  7.20\n− 3.47\n------\n  3.73",difficulty:2,category:"calculation"},
  {id:"m8fc-02-2-6",islandId:"m8i-02-2",front:"Add 0.75 + 1.4 + 2.06.",
   back:"4.21\n\nLine up decimal points:\n  0.75\n  1.40\n+ 2.06\n------\n  4.21\n\nAdd right to left: 5+0+6=11 (write 1, carry 1); 7+4+0+1=12 (write 2, carry 1); 0+1+2+1=4.",difficulty:2,category:"calculation"},

  // m8i-02-3 — Multiply & Divide Decimals
  {id:"m8fc-02-3-1",islandId:"m8i-02-3",front:"How do you multiply a decimal by a whole number?",
   back:"Ignore the decimal point, multiply as whole numbers, then place the decimal point back.\n\nCount the total number of decimal places in all factors — the product has the same total.\n\nExample: 3.6 × 4 → 36 × 4 = 144, then 1 decimal place → 14.4.",difficulty:1,category:"concept"},
  {id:"m8fc-02-3-2",islandId:"m8i-02-3",front:"Calculate 2.4 × 1.5.",
   back:"3.6\n\n24 × 15 = 360.\nTotal decimal places: 1 + 1 = 2.\n360 → insert 2 decimal places → 3.60 = 3.6.\n\nCheck: approximately 2.5 × 1.5 = 3.75, so 3.6 is reasonable.",difficulty:2,category:"calculation"},
  {id:"m8fc-02-3-3",islandId:"m8i-02-3",front:"Multiply 6.3 × 100.",
   back:"630\n\nMultiplying by 100 moves the decimal point 2 places to the right.\n6.3 → 63.0 → 630.\n\nRule: multiply by 10ⁿ → move point n places RIGHT.",difficulty:1,category:"calculation"},
  {id:"m8fc-02-3-4",islandId:"m8i-02-3",front:"Calculate 9.6 ÷ 4.",
   back:"2.4\n\nDivide as normal: 9.6 ÷ 4.\n9 ÷ 4 = 2 remainder 1.\nBring down 6 → 16 ÷ 4 = 4.\nAnswer: 2.4.\n\nCheck: 2.4 × 4 = 9.6 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-02-3-5",islandId:"m8i-02-3",front:"Divide 4.56 ÷ 0.3.",
   back:"15.2\n\nMake the divisor a whole number: multiply both by 10.\n4.56 ÷ 0.3 = 45.6 ÷ 3 = 15.2.\n\nCheck: 15.2 × 0.3 = 4.56 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-02-3-6",islandId:"m8i-02-3",front:"Estimate 4.87 × 6.2.",
   back:"Approximately 30.\n\nRound each value: 4.87 ≈ 5, 6.2 ≈ 6.\n5 × 6 = 30.\n\nActual: 4.87 × 6.2 = 30.194, so the estimate is very close.",difficulty:2,category:"application"},

  // m8i-02-4 — Multi-Step Decimal Problems
  {id:"m8fc-02-4-1",islandId:"m8i-02-4",front:"Evaluate 3.2 + 1.5 × 2.",
   back:"6.2\n\nFollow BODMAS: multiplication before addition.\n1.5 × 2 = 3.0\n3.2 + 3.0 = 6.2\n\nCommon error: doing 3.2 + 1.5 = 4.7 first, then × 2 = 9.4. That is wrong.",difficulty:2,category:"application"},
  {id:"m8fc-02-4-2",islandId:"m8i-02-4",front:"A map has scale 1 cm : 5 km. Two towns are 3.8 cm apart on the map. What is the real distance?",
   back:"19 km\n\nReal distance = map distance × scale factor.\n3.8 × 5 = 19 km.\n\nCheck: 4 × 5 = 20, so 19 is a reasonable answer.",difficulty:2,category:"application"},
  {id:"m8fc-02-4-3",islandId:"m8i-02-4",front:"Is 2.4 × 3 > 7? Show your working.",
   back:"Yes.\n\n2.4 × 3 = 7.2\n7.2 > 7 ✓\n\nThe inequality is true.",difficulty:1,category:"application"},
  {id:"m8fc-02-4-4",islandId:"m8i-02-4",front:"A plank is 2.75 m long. Three equal pieces are cut from it, each 0.6 m. How much is left?",
   back:"0.95 m\n\nTotal cut = 3 × 0.6 = 1.8 m\nRemaining = 2.75 − 1.8 = 0.95 m\n\nCheck: 1.8 + 0.95 = 2.75 ✓",difficulty:3,category:"application"},
  {id:"m8fc-02-4-5",islandId:"m8i-02-4",front:"Evaluate (4.5 − 1.2) × 2 + 0.7.",
   back:"7.3\n\nStep 1: brackets → 4.5 − 1.2 = 3.3\nStep 2: multiply → 3.3 × 2 = 6.6\nStep 3: add → 6.6 + 0.7 = 7.3",difficulty:2,category:"calculation"},
  {id:"m8fc-02-4-6",islandId:"m8i-02-4",front:"Petrol costs £1.549 per litre. How much does 12 litres cost? Give your answer to the nearest penny.",
   back:"£18.59\n\n1.549 × 12 = 18.588\nRound to 2 decimal places (nearest penny): £18.59.\n\nCheck: £1.55 × 12 = £18.60, so £18.59 is sensible.",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-02-1":[
    {q:"What is the value of the digit 7 in the number 3.074?",opts:["7 tenths","7 hundredths","7 thousandths","7 ones"],c:1,e:"In 3.074, the digits after the decimal point are: 0 (tenths), 7 (hundredths), 4 (thousandths). The 7 is in the hundredths column."},
    {q:"Which list shows the decimals in order from smallest to largest?",opts:["0.3, 0.32, 0.302, 0.32","0.3, 0.302, 0.32, 0.4","0.32, 0.302, 0.3, 0.4","0.4, 0.32, 0.302, 0.3"],c:1,e:"Align decimal places: 0.300, 0.302, 0.320, 0.400. Comparing: 0.3 < 0.302 < 0.32 < 0.4."},
    {q:"Round 4.0852 to 2 decimal places.",opts:["4.08","4.09","4.1","4.085"],c:1,e:"Look at the third decimal place: 5. Since 5 ≥ 5, round the second decimal place up: 8 → 9. Answer: 4.09."},
    {q:"Which number is closest to 0.5 on a number line?",opts:["0.48","0.52","0.505","0.45"],c:2,e:"0.505 is 0.005 from 0.5. 0.52 is 0.02 away, 0.48 is 0.02 away, 0.45 is 0.05 away. So 0.505 is closest."},
    {q:"What is 0.035 written as a fraction?",opts:["35/100","35/10","7/200","35/1000"],c:2,e:"0.035 = 35/1000. Simplify: divide by 5 → 7/200. So the simplified fraction is 7/200."}
  ],
  "m8i-02-2":[
    {q:"Calculate 4.7 + 2.85.",opts:["6.55","7.55","6.555","7.35"],c:1,e:"4.70 + 2.85 = 7.55. Line up the decimal points: 0+5=5, 7+8=15 (write 5 carry 1), 4+2+1=7. Answer: 7.55."},
    {q:"Calculate 9.4 − 3.67.",opts:["5.73","6.27","5.63","6.37"],c:0,e:"9.40 − 3.67: borrowing gives 0 → 10−7=3, 3→12−6=6 (after borrow), 8−3=5. Wait — 9.40−3.67: units: 9−3=6? Let's be careful. 9.40−3.67: hundredths 0<7 borrow→10−7=3; tenths 3<6 borrow→13−6=7? No. 9.40−3.67: start from hundredths: 0<7, borrow from tenths (4→3), 10−7=3; tenths 3<6, borrow from ones (9→8), 13−6=7; ones 8−3=5. Answer: 5.73."},
    {q:"A bottle holds 1.5 litres. Emma drinks 0.85 litres. How much is left?",opts:["0.75 litres","0.65 litres","1.35 litres","0.55 litres"],c:1,e:"1.50 − 0.85: hundredths 0<5, borrow → 10−5=5; tenths 4<8, borrow → 14−8=6; ones 0. Answer: 0.65 litres."},
    {q:"What is the missing number? □ − 2.4 = 5.83",opts:["3.43","8.23","7.43","8.33"],c:1,e:"□ = 5.83 + 2.40 = 8.23. Check: 8.23 − 2.40 = 5.83 ✓"},
    {q:"What is 0.6 + 0.7?",opts:["0.13","1.3","13.0","0.013"],c:1,e:"0.6 + 0.7 = 1.3. The tenths digits add to 13 tenths = 1 whole and 3 tenths = 1.3."}
  ],
  "m8i-02-3":[
    {q:"Calculate 3.6 × 5.",opts:["1.8","15.0","18.0","180"],c:2,e:"36 × 5 = 180. One decimal place in the question, so place the decimal to give 18.0."},
    {q:"Calculate 0.8 × 0.4.",opts:["3.2","0.32","0.032","32"],c:1,e:"8 × 4 = 32. Two decimal places in total (one from each factor), so 0.32."},
    {q:"Divide 7.2 ÷ 0.9.",opts:["0.8","8","80","0.08"],c:1,e:"Multiply both by 10: 72 ÷ 9 = 8. Answer: 8. Check: 8 × 0.9 = 7.2 ✓"},
    {q:"What is 0.45 × 1000?",opts:["4.5","45","450","4500"],c:2,e:"Multiplying by 1000 moves the decimal point 3 places right: 0.45 → 450."},
    {q:"Estimate 5.83 × 3.9 by rounding each number to the nearest whole number.",opts:["18","24","20","22"],c:1,e:"Round: 5.83 ≈ 6, 3.9 ≈ 4. Estimate: 6 × 4 = 24. (Exact answer is approximately 22.7, but the question asks for the rounded-values estimate.)"}
  ],
  "m8i-02-4":[
    {q:"Evaluate 1.5 + 2.4 × 3.",opts:["11.7","8.7","5.9","9.3"],c:1,e:"BODMAS: multiplication first. 2.4 × 3 = 7.2. Then 1.5 + 7.2 = 8.7."},
    {q:"A map uses a scale of 1 cm : 8 km. Two cities are 4.5 cm apart on the map. What is the real distance?",opts:["3.6 km","36 km","0.5625 km","32 km"],c:1,e:"Real distance = 4.5 × 8 = 36 km."},
    {q:"Evaluate (6.4 − 2.1) × 3.",opts:["16.1","12.9","13.3","14.4"],c:1,e:"Brackets first: 6.4 − 2.1 = 4.3. Then 4.3 × 3 = 12.9."},
    {q:"Which correctly solves: a jar contains 2.4 litres. 5 friends each take 0.3 litres. How much is left?",opts:["2.4 × 5 − 0.3 = 11.7 litres","2.4 − 5 × 0.3 = 0.9 litres","(2.4 − 5) × 0.3 = −0.78 litres","2.4 ÷ 0.3 − 5 = 3 litres"],c:1,e:"Total taken = 5 × 0.3 = 1.5 litres. Remaining = 2.4 − 1.5 = 0.9 litres. BODMAS applies: 2.4 − (5 × 0.3) = 2.4 − 1.5 = 0.9."},
    {q:"Is the statement 3.6 ÷ 1.2 > 2.5 true or false?",opts:["True, because 3.6 ÷ 1.2 = 3","False, because 3.6 ÷ 1.2 = 3","True, because 3.6 ÷ 1.2 = 2.5","False, because 3.6 ÷ 1.2 = 2"],c:0,e:"3.6 ÷ 1.2 = 36 ÷ 12 = 3. Since 3 > 2.5, the statement is TRUE."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-02-1': `
<h2>Decimal Place Value &amp; Ordering</h2>
<p>Decimals extend our number system to represent amounts smaller than one. Each position to the right of the decimal point is ten times smaller than the one before it.</p>

<h3>Place value chart</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Thousands</th>
    <th style="padding:8px;border:1px solid #ccc">Hundreds</th>
    <th style="padding:8px;border:1px solid #ccc">Tens</th>
    <th style="padding:8px;border:1px solid #ccc">Ones</th>
    <th style="padding:8px;border:1px solid #ccc">.</th>
    <th style="padding:8px;border:1px solid #ccc">Tenths</th>
    <th style="padding:8px;border:1px solid #ccc">Hundredths</th>
    <th style="padding:8px;border:1px solid #ccc">Thousandths</th>
  </tr>
  <tr style="text-align:center">
    <td style="padding:8px;border:1px solid #ccc">1000</td>
    <td style="padding:8px;border:1px solid #ccc">100</td>
    <td style="padding:8px;border:1px solid #ccc">10</td>
    <td style="padding:8px;border:1px solid #ccc">1</td>
    <td style="padding:8px;border:1px solid #ccc"><strong>.</strong></td>
    <td style="padding:8px;border:1px solid #ccc">1/10</td>
    <td style="padding:8px;border:1px solid #ccc">1/100</td>
    <td style="padding:8px;border:1px solid #ccc">1/1000</td>
  </tr>
</table>

<h3>Comparing and ordering decimals</h3>
<p>To compare decimals, align the decimal points and compare digit by digit from left to right (highest place value first).</p>
<div class="example-box">
<p><strong>Example:</strong> Order 0.6, 0.58, 0.605 from smallest to largest.</p>
<p>Write each with 3 decimal places:<br>
0.600, 0.580, 0.605<br>
Tenths: 6 = 6 = 6 → move to hundredths.<br>
Hundredths: 0, 8, 0 → 0.580 has 8, largest in this column.<br>
Remaining: compare 0.600 and 0.605 → thousandths: 0 vs 5 → 0.605 is larger.<br>
Order: <strong>0.58 &lt; 0.6 &lt; 0.605</strong></p>
</div>

<h3>Rounding decimals</h3>
<p>To round a decimal, look at the digit one place to the right of the required accuracy. If it is 5 or more, round up; if less than 5, round down (leave the last digit unchanged).</p>
<div class="example-box">
<p><strong>Example:</strong> Round 3.847 to 1 decimal place.</p>
<p>The digit in the second decimal place is 4 (&lt; 5).<br>
Round down: <strong>3.8</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Decimal point</dt><dd>The dot separating the whole-number part from the fractional part.</dd>
<dt>Tenths, hundredths, thousandths</dt><dd>Place values immediately to the right of the decimal point (1/10, 1/100, 1/1000).</dd>
<dt>Rounding</dt><dd>Replacing a number with an approximation to a given accuracy.</dd>
<dt>Significant figure</dt><dd>The first non-zero digit and those that follow — used to show precision.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking 0.8 &lt; 0.45 because "45 &gt; 8" — ✅ compare digit by digit: tenths 8 &gt; 4, so 0.8 &gt; 0.45.</li>
<li>❌ Forgetting to fill with zeros when comparing — ✅ write 0.5 as 0.50 to compare with 0.47 clearly.</li>
<li>❌ Rounding without looking at the next digit — ✅ always check the digit immediately to the right.</li>
</ul>`,

'm8i-02-2': `
<h2>Add &amp; Subtract Decimals</h2>
<p>Adding and subtracting decimals uses the same column method as whole numbers. The <strong>golden rule</strong> is always to line up the decimal points so that values of the same size are in the same column.</p>

<h3>Adding decimals in columns</h3>
<div class="example-box">
<p><strong>Example:</strong> Calculate 5.63 + 2.9.</p>
<p>Write 2.9 as 2.90 (fill the empty hundredths with zero).<br>
<pre>  5.63
+ 2.90
------
  8.53</pre>
Hundredths: 3 + 0 = 3<br>
Tenths: 6 + 9 = 15 → write 5, carry 1<br>
Ones: 5 + 2 + 1 = 8<br>
Answer: <strong>8.53</strong></p>
</div>

<h3>Subtracting decimals with borrowing</h3>
<div class="example-box">
<p><strong>Example:</strong> Calculate 8.3 − 4.76.</p>
<p>Write 8.3 as 8.30.<br>
<pre>  8.30
− 4.76
------
  3.54</pre>
Hundredths: 0 &lt; 6, borrow from tenths → 10 − 6 = 4<br>
Tenths: (3 − 1) = 2 &lt; 7, borrow from ones → 12 − 7 = 5<br>
Ones: (8 − 1) − 4 = 3<br>
Answer: <strong>3.54</strong></p>
</div>

<h3>Solving word problems</h3>
<p>Identify what you are finding (total or difference), write the calculation in columns, and always check your answer makes sense.</p>
<div class="example-box">
<p><strong>Example:</strong> A journey is 12.5 km. Sarah has already walked 4.85 km. How far remains?</p>
<p>12.50 − 4.85:<br>
<pre>  12.50
−  4.85
-------
   7.65</pre>
Sarah still has <strong>7.65 km</strong> to walk.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Column addition/subtraction</dt><dd>A written method where digits are aligned by place value.</dd>
<dt>Carrying (addition)</dt><dd>Moving the tens digit of a column total into the next column.</dd>
<dt>Borrowing (subtraction)</dt><dd>Taking 10 from the next column left when a digit is too small to subtract from.</dd>
<dt>Placeholder zero</dt><dd>A zero added to fill an empty decimal place so columns align correctly.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding without lining up decimal points (e.g. treating 3.4 + 1.27 as 3.4 + 12.7) — ✅ always align the decimal points first.</li>
<li>❌ Forgetting to write a placeholder zero — ✅ write 3.4 as 3.40 when subtracting 1.27.</li>
<li>❌ Losing track of borrows — ✅ cross out and rewrite digits clearly when borrowing.</li>
</ul>`,

'm8i-02-3': `
<h2>Multiply &amp; Divide Decimals</h2>
<p>Multiplying and dividing decimals builds on whole-number methods. The key is to handle the decimal point systematically rather than guessing its position.</p>

<h3>Multiplying decimals</h3>
<p>Multiply ignoring the decimal points, then count the total decimal places across all factors and insert the point in the product.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate 2.4 × 1.5.</p>
<p>Ignore points: 24 × 15 = 360.<br>
Decimal places: 2.4 has 1, 1.5 has 1 → total 2.<br>
Insert 2 decimal places: 360 → <strong>3.60 = 3.6</strong></p>
</div>

<h3>Multiplying and dividing by powers of ten</h3>
<p>Multiplying by 10, 100 or 1000 moves the decimal point right. Dividing moves it left. Count the zeros to know how many places.</p>
<div class="example-box">
<p>4.73 × 100 = 473 (point moves 2 right)<br>
8.2 ÷ 1000 = 0.0082 (point moves 3 left)</p>
</div>

<h3>Dividing decimals</h3>
<p>If the divisor is a decimal, multiply both the dividend and divisor by the appropriate power of 10 to make the divisor a whole number, then divide normally.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate 4.56 ÷ 0.3.</p>
<p>Multiply both by 10: 45.6 ÷ 3.<br>
45.6 ÷ 3 = 15.2<br>
Check: 15.2 × 0.3 = 4.56 ✓<br>
Answer: <strong>15.2</strong></p>
</div>

<h3>Estimating products and quotients</h3>
<p>Round each number to 1 significant figure before calculating. This gives a quick check on whether your precise answer is sensible.</p>
<div class="example-box">
<p>Estimate 4.87 × 6.2: round to 5 × 6 = <strong>30</strong>. Exact answer ≈ 30.19.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Product</dt><dd>The result of a multiplication.</dd>
<dt>Quotient</dt><dd>The result of a division.</dd>
<dt>Power of ten</dt><dd>10, 100, 1000, … — multiplying or dividing by these shifts the decimal point.</dd>
<dt>Estimation</dt><dd>Finding an approximate answer by rounding, used to check exact calculations.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Placing the decimal point by guessing — ✅ count total decimal places in the factors carefully.</li>
<li>❌ Dividing a decimal by a decimal without converting — ✅ always make the divisor a whole number first.</li>
<li>❌ Moving the decimal the wrong way for ÷ 10 — ✅ dividing makes numbers smaller, so the point moves LEFT.</li>
</ul>`,

'm8i-02-4': `
<h2>Multi-Step Decimal Problems</h2>
<p>Real-world problems often combine addition, subtraction, multiplication and division of decimals in a single question. The key tools are <strong>BODMAS</strong>, careful equation setup, and checking that your answer is reasonable.</p>

<h3>Order of operations (BODMAS) with decimals</h3>
<p>BODMAS stands for Brackets, Order (powers), Division, Multiplication, Addition, Subtraction. Always work through the operations in this priority order.</p>
<div class="example-box">
<p><strong>Example:</strong> Evaluate 3.2 + 1.5 × 2.</p>
<p>Multiplication first: 1.5 × 2 = 3.0<br>
Then addition: 3.2 + 3.0 = <strong>6.2</strong></p>
</div>

<h3>Decimal inequalities</h3>
<p>After evaluating each side, compare them using &lt;, &gt; or =.</p>
<div class="example-box">
<p>Is 2.4 × 3 &gt; 7? → 2.4 × 3 = 7.2 → 7.2 &gt; 7 ✓ True.</p>
</div>

<h3>Map distances</h3>
<p>A map scale such as 1 cm : 5 km means every centimetre on the map represents 5 km in reality. Multiply the map distance by the scale factor to find the real distance.</p>
<div class="example-box">
<p><strong>Example:</strong> Scale 1 cm : 5 km. Map distance = 3.8 cm.<br>
Real distance = 3.8 × 5 = <strong>19 km</strong></p>
</div>

<h3>Multi-step word problems</h3>
<p>Read the question carefully, identify each step, set up the calculation, and check the answer makes sense with an estimate.</p>
<div class="example-box">
<p><strong>Example:</strong> Petrol costs £1.549 per litre. A driver buys 12 litres. How much does it cost (to the nearest penny)?</p>
<p>Cost = 1.549 × 12 = 18.588<br>
Round to 2 decimal places: <strong>£18.59</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>BODMAS</dt><dd>The order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction.</dd>
<dt>Inequality</dt><dd>A statement comparing two expressions using &lt;, &gt;, ≤ or ≥.</dd>
<dt>Map scale</dt><dd>The ratio of a distance on a map to the real-world distance it represents.</dd>
<dt>Multi-step problem</dt><dd>A problem requiring more than one calculation to reach the answer.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Doing addition before multiplication — ✅ BODMAS: multiply and divide before adding and subtracting.</li>
<li>❌ Forgetting to apply the scale factor in both directions — ✅ check whether you need to multiply (map → real) or divide (real → map).</li>
<li>❌ Not rounding money to 2 decimal places — ✅ money answers should always be given in pounds and pence (2 d.p.).</li>
</ul>`

});
