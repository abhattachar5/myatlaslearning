// math-y8-t07.js — Year 8 Maths Topic 7: Indices & Roots
// Islands: m8i-07-1 .. m8i-07-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-07-1 — Understand & Evaluate Indices
  {id:"m8fc-07-1-1",islandId:"m8i-07-1",front:"What does index notation mean? Define base, index and power.",
   back:"In the expression 3⁵:\n• 3 is the BASE — the number being multiplied\n• 5 is the INDEX (or exponent) — how many times the base is multiplied by itself\n• 3⁵ is called a POWER\n\n3⁵ = 3 × 3 × 3 × 3 × 3 = 243",difficulty:1,category:"definition"},
  {id:"m8fc-07-1-2",islandId:"m8i-07-1",front:"Evaluate 2⁶.",
   back:"2⁶ = 64\n\nWrite out the multiplication:\n2 × 2 = 4\n4 × 2 = 8\n8 × 2 = 16\n16 × 2 = 32\n32 × 2 = 64\n\nSo 2⁶ = 64.",difficulty:1,category:"calculation"},
  {id:"m8fc-07-1-3",islandId:"m8i-07-1",front:"Evaluate 5³.",
   back:"5³ = 125\n\n5 × 5 = 25\n25 × 5 = 125\n\nA cube means three repeated multiplications of the base.",difficulty:1,category:"calculation"},
  {id:"m8fc-07-1-4",islandId:"m8i-07-1",front:"Solve: x² = 81. What are the possible values of x?",
   back:"x = 9 or x = −9\n\nBoth 9² = 81 and (−9)² = 81.\nAlways consider both the positive and negative square root when solving x² = k.",difficulty:2,category:"application"},
  {id:"m8fc-07-1-5",islandId:"m8i-07-1",front:"What is any non-zero number raised to the power 0?",
   back:"Any non-zero number raised to the power 0 equals 1.\n\nExamples:\n5⁰ = 1\n100⁰ = 1\n(−3)⁰ = 1\n\nThis follows from the index law aⁿ ÷ aⁿ = a⁰ = 1.",difficulty:2,category:"concept"},
  {id:"m8fc-07-1-6",islandId:"m8i-07-1",front:"Evaluate the expression 3² + 4².",
   back:"3² + 4² = 9 + 16 = 25\n\nStep 1: 3² = 9\nStep 2: 4² = 16\nStep 3: 9 + 16 = 25\n\nNote: 25 = 5² — this is related to the 3-4-5 Pythagorean triple!",difficulty:2,category:"calculation"},

  // m8i-07-2 — Indices with Special Bases
  {id:"m8fc-07-2-1",islandId:"m8i-07-2",front:"What is (−2)³? Explain the sign.",
   back:"(−2)³ = −8\n\n(−2)³ = (−2) × (−2) × (−2)\n= 4 × (−2)\n= −8\n\nODD power of a negative → NEGATIVE result.",difficulty:2,category:"calculation"},
  {id:"m8fc-07-2-2",islandId:"m8i-07-2",front:"What is (−3)⁴? How does the sign work?",
   back:"(−3)⁴ = 81\n\n(−3)⁴ = (−3) × (−3) × (−3) × (−3)\n= 9 × 9\n= 81\n\nEVEN power of a negative → POSITIVE result.\nRule: negative base, even index → positive; odd index → negative.",difficulty:2,category:"concept"},
  {id:"m8fc-07-2-3",islandId:"m8i-07-2",front:"Evaluate (0.2)³.",
   back:"(0.2)³ = 0.008\n\n0.2 × 0.2 = 0.04\n0.04 × 0.2 = 0.008\n\nDecimal powers get smaller quickly. Check: (2/10)³ = 8/1000 = 0.008 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-07-2-4",islandId:"m8i-07-2",front:"Evaluate (½)⁴.",
   back:"(½)⁴ = 1/16\n\n(½)⁴ = ½ × ½ × ½ × ½\n= ¼ × ¼\n= 1/16\n\nAs a decimal: 1/16 = 0.0625\n\nFractional bases produce smaller fractions as the power increases.",difficulty:2,category:"calculation"},
  {id:"m8fc-07-2-5",islandId:"m8i-07-2",front:"Which is greater: (−2)⁴ or (−2)⁵? Explain.",
   back:"(−2)⁴ = 16 is greater.\n\n(−2)⁴ = 16 (even power → positive)\n(−2)⁵ = −32 (odd power → negative)\n\n16 > −32, so (−2)⁴ is greater.",difficulty:2,category:"application"},
  {id:"m8fc-07-2-6",islandId:"m8i-07-2",front:"Evaluate (2/3)².",
   back:"(2/3)² = 4/9\n\nSquare both the numerator and denominator:\n(2/3)² = 2²/3² = 4/9\n\nAs a decimal: 4 ÷ 9 ≈ 0.444…",difficulty:2,category:"calculation"},

  // m8i-07-3 — Square Roots & Cube Roots
  {id:"m8fc-07-3-1",islandId:"m8i-07-3",front:"What is a perfect square? List the perfect squares from 1 to 225.",
   back:"A perfect square is the result of squaring a whole number.\n\n1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225\n\n(1², 2², 3², … 15²)\n\nKnowing these by heart speeds up all root calculations.",difficulty:1,category:"definition"},
  {id:"m8fc-07-3-2",islandId:"m8i-07-3",front:"Find √144.",
   back:"√144 = 12\n\nBecause 12 × 12 = 144.\n\nCheck: 12² = 144 ✓\n\nThe square root symbol (√) asks: 'What number, when squared, gives this result?'",difficulty:1,category:"calculation"},
  {id:"m8fc-07-3-3",islandId:"m8i-07-3",front:"Estimate √50 to one decimal place.",
   back:"√50 ≈ 7.1\n\nStep 1: Find surrounding perfect squares: 49 = 7² and 64 = 8².\nStep 2: 50 is just above 49, so √50 is just above 7.\nStep 3: 7.1² = 50.41 (close), 7.07² ≈ 50 ✓\n\nSo √50 ≈ 7.1 (1 d.p.)",difficulty:2,category:"calculation"},
  {id:"m8fc-07-3-4",islandId:"m8i-07-3",front:"What is the cube root of 125? Write using the ∛ symbol.",
   back:"∛125 = 5\n\nBecause 5 × 5 × 5 = 125.\n\nThe cube root asks: 'What number, cubed, gives this result?'\n\nOther key cube roots: ∛8 = 2, ∛27 = 3, ∛64 = 4, ∛216 = 6, ∛1000 = 10.",difficulty:2,category:"calculation"},
  {id:"m8fc-07-3-5",islandId:"m8i-07-3",front:"Between which two consecutive integers does √83 lie?",
   back:"Between 9 and 10.\n\n9² = 81 and 10² = 100.\nSince 81 < 83 < 100, we have 9 < √83 < 10.\n\nTo refine: 9.1² = 82.81 and 9.2² = 84.64, so √83 ≈ 9.1",difficulty:2,category:"application"},
  {id:"m8fc-07-3-6",islandId:"m8i-07-3",front:"Can square roots be negative? Is √9 equal to 3 or ±3?",
   back:"√9 = 3 (positive only).\n\nThe square root symbol (√) always refers to the PRINCIPAL (positive) root.\n\nSo √9 = 3, not ±3.\n\nHowever, when solving x² = 9, both x = 3 and x = −3 are solutions because we are looking for ALL values that satisfy the equation.",difficulty:3,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-07-1":[
    {q:"What is 4³?",opts:["12","48","64","81"],c:2,e:"4³ = 4 × 4 × 4 = 16 × 4 = 64. Do not confuse 4³ with 4 × 3 = 12."},
    {q:"Which expression equals 32?",opts:["2⁴","2⁵","3²","5²"],c:1,e:"2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Check: 2⁴ = 16, 3² = 9, 5² = 25."},
    {q:"Solve x³ = 27. What is x?",opts:["3","7","9","27"],c:0,e:"x = 3 because 3³ = 3 × 3 × 3 = 27."},
    {q:"What is the value of 7⁰?",opts:["0","1","7","49"],c:1,e:"Any non-zero number raised to the power 0 equals 1. So 7⁰ = 1."},
    {q:"Evaluate 2³ + 3².",opts:["13","17","24","30"],c:1,e:"2³ = 8 and 3² = 9. 8 + 9 = 17. Remember to evaluate each power before adding."}
  ],
  "m8i-07-2":[
    {q:"What is (−3)³?",opts:["9","−9","27","−27"],c:3,e:"(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27. Odd power of a negative gives a negative result."},
    {q:"What is (−4)²?",opts:["−16","−8","8","16"],c:3,e:"(−4)² = (−4) × (−4) = 16. Even power of a negative gives a positive result."},
    {q:"Evaluate (0.3)².",opts:["0.06","0.09","0.6","0.9"],c:1,e:"0.3 × 0.3 = 0.09. Count decimal places: each factor has 1 d.p., so the product has 2 d.p."},
    {q:"What is (1/3)²?",opts:["1/6","1/9","2/3","2/9"],c:1,e:"(1/3)² = 1²/3² = 1/9. Square both the numerator and the denominator separately."},
    {q:"Which of the following is positive?",opts:["(−2)³","(−2)⁵","(−2)⁷","(−2)⁴"],c:3,e:"(−2)⁴ = 16, which is positive because 4 is an even index. All odd powers of −2 are negative."}
  ],
  "m8i-07-3":[
    {q:"What is √169?",opts:["12","13","14","15"],c:1,e:"13 × 13 = 169, so √169 = 13. Check: 12² = 144 and 14² = 196, confirming the answer is 13."},
    {q:"What is ∛64?",opts:["4","6","8","16"],c:0,e:"4³ = 4 × 4 × 4 = 64, so ∛64 = 4. Do not confuse with √64 = 8."},
    {q:"Between which two consecutive integers does √40 lie?",opts:["5 and 6","6 and 7","7 and 8","4 and 5"],c:1,e:"6² = 36 and 7² = 49. Since 36 < 40 < 49, √40 lies between 6 and 7."},
    {q:"Which is a perfect square?",opts:["50","72","81","90"],c:2,e:"81 = 9², so it is a perfect square. 50, 72 and 90 cannot be written as whole number squares."},
    {q:"What is √196?",opts:["13","14","15","16"],c:1,e:"14 × 14 = 196, so √196 = 14. Check: 13² = 169 and 15² = 225, confirming 14² = 196."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-07-1': `
<h2>Understand &amp; Evaluate Indices</h2>
<p><strong>Index notation</strong> is a shorthand for repeated multiplication. Instead of writing 2 × 2 × 2 × 2 × 2, we write <strong>2⁵</strong>. The small raised number is called the <strong>index</strong> (or exponent), and the number being multiplied is the <strong>base</strong>.</p>

<h3>Parts of a power</h3>
<div class="example-box">
<p><strong>Example:</strong> Identify the base, index and value of 3⁴.</p>
<p><strong>Solution:</strong><br>
Base = 3, Index = 4<br>
3⁴ = 3 × 3 × 3 × 3<br>
= 9 × 9<br>
= <strong>81</strong></p>
</div>

<h3>Evaluating powers step by step</h3>
<p>Multiply the base by itself as many times as the index tells you. Work through each step carefully — don't try to do it all in one go.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate 2⁶.</p>
<p><strong>Solution:</strong><br>
2¹ = 2<br>
2² = 4<br>
2³ = 8<br>
2⁴ = 16<br>
2⁵ = 32<br>
2⁶ = <strong>64</strong></p>
</div>

<h3>Solving equations with indices</h3>
<p>When an equation has an unknown base or index, think about which power produces the given value.</p>
<div class="example-box">
<p><strong>Example:</strong> Solve x² = 49.</p>
<p><strong>Solution:</strong><br>
Ask: what number squared gives 49?<br>
7² = 49, so x = 7 or x = −7.<br>
Both values are valid solutions.</p>
</div>

<h3>The zero index</h3>
<p>Any non-zero number raised to the power 0 equals 1: <strong>a⁰ = 1</strong>. This follows from dividing equal powers: 5³ ÷ 5³ = 1 and also = 5⁰.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Base</dt><dd>The number that is multiplied by itself repeatedly.</dd>
<dt>Index (exponent)</dt><dd>The raised number showing how many times the base is multiplied.</dd>
<dt>Power</dt><dd>The whole expression, e.g. 3⁴, or the result of evaluating it.</dd>
<dt>Square</dt><dd>A number raised to the power 2 (e.g. 5² = 25).</dd>
<dt>Cube</dt><dd>A number raised to the power 3 (e.g. 4³ = 64).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Confusing 3⁴ with 3 × 4 = 12 — ✅ 3⁴ means 3 × 3 × 3 × 3 = 81.</li>
<li>❌ Forgetting that x² = 25 has two solutions — ✅ both x = 5 and x = −5 are valid.</li>
<li>❌ Thinking anything to the power 0 is 0 — ✅ a⁰ = 1 for any non-zero a.</li>
</ul>`,

'm8i-07-2': `
<h2>Indices with Special Bases</h2>
<p>The rules of index notation apply to <strong>all</strong> bases — including negative numbers, decimals and fractions. The key skill is handling the sign carefully when working with negative bases.</p>

<h3>Negative bases</h3>
<p>When the base is negative, the sign of the answer depends on whether the index is even or odd:</p>
<ul>
<li><strong>Even index → positive result</strong>: (−3)² = 9</li>
<li><strong>Odd index → negative result</strong>: (−3)³ = −27</li>
</ul>
<div class="example-box">
<p><strong>Example:</strong> Evaluate (−2)⁴ and (−2)⁵.</p>
<p><strong>Solution:</strong><br>
(−2)⁴ = (−2) × (−2) × (−2) × (−2) = 4 × 4 = <strong>16</strong> (positive — even index)<br>
(−2)⁵ = 16 × (−2) = <strong>−32</strong> (negative — odd index)</p>
</div>

<h3>Decimal bases</h3>
<p>Raising a decimal between 0 and 1 to a power makes the result <em>smaller</em>.</p>
<div class="example-box">
<p><strong>Example:</strong> Evaluate (0.4)².</p>
<p><strong>Solution:</strong><br>
0.4 × 0.4 = 0.16<br>
Or: (4/10)² = 16/100 = <strong>0.16</strong></p>
</div>

<h3>Fractional bases</h3>
<p>Square or cube both the numerator and denominator separately.</p>
<div class="example-box">
<p><strong>Example:</strong> Evaluate (3/4)³.</p>
<p><strong>Solution:</strong><br>
(3/4)³ = 3³/4³ = 27/64<br>
As a decimal: 27 ÷ 64 = 0.421875</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Negative base</dt><dd>A base that is a negative number, e.g. −3 in (−3)².</dd>
<dt>Even index</dt><dd>A power of 2, 4, 6, 8, … — always gives a positive result with any real base.</dd>
<dt>Odd index</dt><dd>A power of 1, 3, 5, 7, … — preserves the sign of a negative base.</dd>
<dt>Fractional base</dt><dd>A base written as a fraction, e.g. ½ — apply the index to numerator and denominator separately.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing −3² = 9 — ✅ this means −(3²) = −9; use brackets: (−3)² = 9.</li>
<li>❌ Thinking a decimal base always gives a smaller result — ✅ a decimal greater than 1 (e.g. 1.5²) gives a larger result.</li>
<li>❌ Applying the index only to the numerator of a fraction — ✅ (2/5)³ = 8/125, not 8/5.</li>
</ul>`,

'm8i-07-3': `
<h2>Square Roots &amp; Cube Roots</h2>
<p>A <strong>square root</strong> is the inverse of squaring. A <strong>cube root</strong> is the inverse of cubing. Knowing your perfect squares and perfect cubes by heart makes these calculations fast and reliable.</p>

<h3>Square roots of perfect squares</h3>
<p>The square root symbol √ asks: "What number, when squared, gives this value?"</p>
<div class="example-box">
<p><strong>Example:</strong> Find √196.</p>
<p><strong>Solution:</strong><br>
Ask: what number × itself = 196?<br>
14 × 14 = 196<br>
So √196 = <strong>14</strong>.</p>
</div>

<h3>Perfect squares to memorise</h3>
<p>1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225 (1² to 15²)</p>

<h3>Estimating non-perfect square roots</h3>
<p>Find the two consecutive integers that the root falls between, then narrow it down.</p>
<div class="example-box">
<p><strong>Example:</strong> Estimate √72 to 1 decimal place.</p>
<p><strong>Solution:</strong><br>
8² = 64 and 9² = 81, so 8 &lt; √72 &lt; 9.<br>
8.4² = 70.56, 8.5² = 72.25 ✓<br>
So √72 ≈ <strong>8.5</strong>.</p>
</div>

<h3>Cube roots</h3>
<p>The cube root symbol ∛ asks: "What number, when cubed, gives this value?" Cube roots of negative numbers exist and are negative.</p>
<div class="example-box">
<p><strong>Example:</strong> Find ∛216.</p>
<p><strong>Solution:</strong><br>
6³ = 6 × 6 × 6 = 216<br>
So ∛216 = <strong>6</strong>.</p>
</div>
<p>Perfect cubes to know: ∛1 = 1, ∛8 = 2, ∛27 = 3, ∛64 = 4, ∛125 = 5, ∛216 = 6, ∛1000 = 10.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Square root (√)</dt><dd>A number which, when squared, gives the value under the root sign.</dd>
<dt>Perfect square</dt><dd>A whole number that is the square of another whole number, e.g. 49 = 7².</dd>
<dt>Cube root (∛)</dt><dd>A number which, when cubed, gives the value under the root sign.</dd>
<dt>Perfect cube</dt><dd>A whole number that is the cube of another whole number, e.g. 27 = 3³.</dd>
<dt>Principal root</dt><dd>The positive square root, indicated by the √ symbol.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking √9 = ±3 — ✅ the √ symbol means the positive (principal) root only: √9 = 3.</li>
<li>❌ Confusing square roots and cube roots — ✅ √64 = 8 but ∛64 = 4.</li>
<li>❌ Guessing a root without checking — ✅ always verify by squaring or cubing your answer.</li>
</ul>`

});
