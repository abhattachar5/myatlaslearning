// math-y8-t03.js — Year 8 Maths Topic 3: Fractions & Mixed Numbers
// Islands: m8i-03-1 .. m8i-03-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-03-1 — Simplify, Compare & Order Fractions
  {id:"m8fc-03-1-1",islandId:"m8i-03-1",front:"How do you simplify a fraction to its lowest terms?",
   back:"Divide the numerator and denominator by their HCF.\n\nExample: Simplify 18/24.\nHCF(18, 24) = 6.\n18 ÷ 6 = 3, 24 ÷ 6 = 4.\nAnswer: 3/4.",difficulty:1,category:"definition"},
  {id:"m8fc-03-1-2",islandId:"m8i-03-1",front:"What is the Lowest Common Denominator (LCD) of 1/4 and 5/6?",
   back:"LCD = 12\n\nFind the LCM of 4 and 6.\n4 = 2², 6 = 2 × 3. LCM = 2² × 3 = 12.\nConvert: 1/4 = 3/12, 5/6 = 10/12.",difficulty:2,category:"calculation"},
  {id:"m8fc-03-1-3",islandId:"m8i-03-1",front:"Which is greater: 3/5 or 7/12? Show your working.",
   back:"3/5 is greater.\n\nFind the LCD of 5 and 12 → LCD = 60.\n3/5 = 36/60\n7/12 = 35/60\n36/60 > 35/60, so 3/5 > 7/12.",difficulty:2,category:"calculation"},
  {id:"m8fc-03-1-4",islandId:"m8i-03-1",front:"Simplify 36/48 fully.",
   back:"3/4\n\nHCF(36, 48) = 12.\n36 ÷ 12 = 3, 48 ÷ 12 = 4.\nSo 36/48 = 3/4.",difficulty:1,category:"calculation"},
  {id:"m8fc-03-1-5",islandId:"m8i-03-1",front:"Put these fractions in order from smallest to largest: 1/2, 2/5, 3/8.",
   back:"3/8, 2/5, 1/2\n\nLCD of 2, 5 and 8 is 40.\n1/2 = 20/40, 2/5 = 16/40, 3/8 = 15/40.\nOrder: 15/40 < 16/40 < 20/40, so 3/8 < 2/5 < 1/2.",difficulty:2,category:"application"},
  {id:"m8fc-03-1-6",islandId:"m8i-03-1",front:"What does it mean for a fraction to be in lowest terms?",
   back:"A fraction is in lowest terms (simplest form) when the HCF of the numerator and denominator is 1 — there is no whole number (other than 1) that divides into both.\n\nExample: 3/7 is in lowest terms. 6/14 is NOT (HCF = 2).",difficulty:1,category:"concept"},

  // m8i-03-2 — Convert Fractions, Decimals & Mixed Numbers
  {id:"m8fc-03-2-1",islandId:"m8i-03-2",front:"Convert the mixed number 3 2/5 to an improper fraction.",
   back:"17/5\n\nMultiply the whole number by the denominator and add the numerator:\n3 × 5 + 2 = 17.\nPlace over the denominator: 17/5.",difficulty:1,category:"calculation"},
  {id:"m8fc-03-2-2",islandId:"m8i-03-2",front:"Convert the improper fraction 23/6 to a mixed number.",
   back:"3 5/6\n\nDivide 23 ÷ 6 = 3 remainder 5.\nWhole number = 3, remainder = 5 over the denominator 6.\nAnswer: 3 5/6.",difficulty:1,category:"calculation"},
  {id:"m8fc-03-2-3",islandId:"m8i-03-2",front:"Convert 7/8 to a decimal.",
   back:"0.875\n\nDivide the numerator by the denominator:\n7 ÷ 8 = 0.875.\n\nCheck: 0.875 × 8 = 7 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-03-2-4",islandId:"m8i-03-2",front:"Convert the decimal 0.35 to a fraction in its lowest terms.",
   back:"7/20\n\n0.35 = 35/100 (two decimal places → denominator 100).\nSimplify: HCF(35, 100) = 5.\n35 ÷ 5 = 7, 100 ÷ 5 = 20.\nAnswer: 7/20.",difficulty:2,category:"calculation"},
  {id:"m8fc-03-2-5",islandId:"m8i-03-2",front:"Place 2 3/4, 2.6 and 11/4 in order from smallest to largest.",
   back:"11/4, 2.6, 2 3/4\n\nConvert all to decimals:\n2 3/4 = 2.75\n11/4 = 2.75 — wait: 11 ÷ 4 = 2.75 also.\nActually 11/4 = 2.75 and 2 3/4 = 2.75, so they are equal.\nOrder: 2.6 < 2.75 = 2.75.\nSo: 2.6, then 11/4 and 2 3/4 (equal).",difficulty:3,category:"application"},
  {id:"m8fc-03-2-6",islandId:"m8i-03-2",front:"How do you convert a fraction to a decimal?",
   back:"Divide the numerator by the denominator.\n\nExample: 3/8 → 3 ÷ 8 = 0.375.\n\nThe decimal may terminate (e.g. 1/4 = 0.25) or recur (e.g. 1/3 = 0.333…).",difficulty:1,category:"concept"},

  // m8i-03-3 — Add & Subtract Fractions
  {id:"m8fc-03-3-1",islandId:"m8i-03-3",front:"Add 2/5 + 1/3.",
   back:"11/15\n\nLCD(5, 3) = 15.\n2/5 = 6/15, 1/3 = 5/15.\n6/15 + 5/15 = 11/15.\n11 and 15 share no common factor, so this is fully simplified.",difficulty:1,category:"calculation"},
  {id:"m8fc-03-3-2",islandId:"m8i-03-3",front:"Calculate 7/8 − 1/6.",
   back:"17/24\n\nLCD(8, 6) = 24.\n7/8 = 21/24, 1/6 = 4/24.\n21/24 − 4/24 = 17/24.",difficulty:2,category:"calculation"},
  {id:"m8fc-03-3-3",islandId:"m8i-03-3",front:"What is the method for adding fractions with different denominators?",
   back:"1. Find the LCD of the two denominators.\n2. Convert each fraction to an equivalent fraction with the LCD.\n3. Add the numerators; keep the denominator.\n4. Simplify if possible.\n\nExample: 1/4 + 1/6 → LCD = 12 → 3/12 + 2/12 = 5/12.",difficulty:1,category:"concept"},
  {id:"m8fc-03-3-4",islandId:"m8i-03-3",front:"Subtract 3/10 from 4/5.",
   back:"1/2\n\nLCD(5, 10) = 10.\n4/5 = 8/10.\n8/10 − 3/10 = 5/10 = 1/2.",difficulty:1,category:"calculation"},
  {id:"m8fc-03-3-5",islandId:"m8i-03-3",front:"Estimate whether 3/7 + 5/9 is closer to 0, 1/2, 1 or 1 1/2.",
   back:"Closer to 1.\n\n3/7 is just under 1/2 (since 3.5/7 = 1/2).\n5/9 is just over 1/2 (since 4.5/9 = 1/2).\nSo the sum is approximately 1/2 + 1/2 = 1.\n\nExact answer: 27/63 + 35/63 = 62/63 ≈ 1.",difficulty:2,category:"application"},
  {id:"m8fc-03-3-6",islandId:"m8i-03-3",front:"A recipe uses 2/3 cup of flour and 1/4 cup of oats. How much is that in total?",
   back:"11/12 cup\n\nLCD(3, 4) = 12.\n2/3 = 8/12, 1/4 = 3/12.\n8/12 + 3/12 = 11/12.",difficulty:2,category:"application"},

  // m8i-03-4 — Add & Subtract Mixed Numbers
  {id:"m8fc-03-4-1",islandId:"m8i-03-4",front:"Add 2 1/3 + 1 1/4.",
   back:"3 7/12\n\nLCD(3, 4) = 12.\nFraction parts: 1/3 = 4/12, 1/4 = 3/12.\n4/12 + 3/12 = 7/12.\nWhole parts: 2 + 1 = 3.\nAnswer: 3 7/12.",difficulty:1,category:"calculation"},
  {id:"m8fc-03-4-2",islandId:"m8i-03-4",front:"Subtract 1 3/4 from 4 1/6.",
   back:"2 5/12\n\nLCD(4, 6) = 12.\n1 3/4 = 1 9/12, 4 1/6 = 4 2/12.\n4 2/12 − 1 9/12: fraction part needs regrouping.\nBorrow 1 from 4: 3 + 12/12 + 2/12 = 3 14/12.\n3 14/12 − 1 9/12 = 2 5/12.",difficulty:3,category:"calculation"},
  {id:"m8fc-03-4-3",islandId:"m8i-03-4",front:"When do you need to 'borrow' (regroup) when subtracting mixed numbers?",
   back:"You need to borrow when the fraction in the number being subtracted is LARGER than the fraction in the number you are subtracting from.\n\nExample: 5 1/4 − 2 3/4. Since 3/4 > 1/4, regroup 5 1/4 as 4 5/4, then 4 5/4 − 2 3/4 = 2 2/4 = 2 1/2.",difficulty:2,category:"concept"},
  {id:"m8fc-03-4-4",islandId:"m8i-03-4",front:"Calculate 5 2/3 + 3 5/6.",
   back:"9 1/2\n\nLCD(3, 6) = 6.\n5 2/3 = 5 4/6.\n5 4/6 + 3 5/6 = 8 9/6.\n9/6 = 1 3/6 = 1 1/2, so 8 + 1 1/2 = 9 1/2.",difficulty:2,category:"calculation"},
  {id:"m8fc-03-4-5",islandId:"m8i-03-4",front:"Estimate 4 7/8 − 1 1/5. Is the answer closer to 3 or 4?",
   back:"Closer to 4.\n\n4 7/8 ≈ 5 (since 7/8 rounds to 1).\n1 1/5 ≈ 1.\n5 − 1 = 4.\n\nExact: LCD = 40. 4 35/40 − 1 8/40 = 3 27/40, which is indeed closer to 4 than 3.",difficulty:2,category:"application"},
  {id:"m8fc-03-4-6",islandId:"m8i-03-4",front:"A plank is 6 1/2 m long. You cut off 2 3/8 m. How much is left?",
   back:"4 1/8 m\n\nLCD(2, 8) = 8.\n6 1/2 = 6 4/8.\n6 4/8 − 2 3/8 = 4 1/8.",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-03-1":[
    {q:"Which of the following is 24/36 simplified to its lowest terms?",opts:["4/6","2/3","3/4","6/9"],c:1,e:"HCF(24, 36) = 12. 24 ÷ 12 = 2, 36 ÷ 12 = 3. Answer: 2/3. Note 4/6 and 6/9 are not fully simplified."},
    {q:"What is the lowest common denominator (LCD) of 1/3 and 3/8?",opts:["11","16","24","32"],c:2,e:"LCM(3, 8): 3 = 3, 8 = 2³. LCM = 2³ × 3 = 24. Check: 24 ÷ 3 = 8 ✓, 24 ÷ 8 = 3 ✓."},
    {q:"Which fraction is greater: 5/9 or 4/7?",opts:["5/9","4/7","They are equal","Cannot be determined"],c:1,e:"LCD(9, 7) = 63. 5/9 = 35/63, 4/7 = 36/63. 36 > 35 so 4/7 > 5/9. Answer: 4/7."},
    {q:"Put in order smallest to largest: 3/4, 2/3, 7/12.",opts:["2/3, 7/12, 3/4","7/12, 2/3, 3/4","3/4, 2/3, 7/12","2/3, 3/4, 7/12"],c:1,e:"LCD = 12. 3/4 = 9/12, 2/3 = 8/12, 7/12 = 7/12. Order: 7/12 < 8/12 < 9/12, so 7/12 < 2/3 < 3/4."},
    {q:"A fraction is in lowest terms when:",opts:["The numerator is less than the denominator","The numerator and denominator are both odd","The HCF of the numerator and denominator is 1","The denominator is a prime number"],c:2,e:"Lowest terms means HCF(numerator, denominator) = 1 — no whole number other than 1 divides both."}
  ],
  "m8i-03-2":[
    {q:"Convert 4 3/7 to an improper fraction.",opts:["15/7","28/7","31/7","34/7"],c:2,e:"4 × 7 + 3 = 28 + 3 = 31. Place over 7: 31/7."},
    {q:"Convert 47/9 to a mixed number.",opts:["4 9/9","5 2/9","5 3/9","6 1/9"],c:1,e:"47 ÷ 9 = 5 remainder 2. So 47/9 = 5 2/9."},
    {q:"What is 3/8 as a decimal?",opts:["0.267","0.325","0.375","0.38"],c:2,e:"3 ÷ 8 = 0.375. Check: 0.375 × 8 = 3 ✓."},
    {q:"Convert 0.6 to a fraction in its lowest terms.",opts:["6/10","3/5","2/3","60/100"],c:1,e:"0.6 = 6/10. HCF(6, 10) = 2. 6 ÷ 2 = 3, 10 ÷ 2 = 5. Answer: 3/5."},
    {q:"Which of these is equivalent to 2 1/4?",opts:["5/4","7/4","9/4","11/4"],c:2,e:"2 × 4 + 1 = 9. So 2 1/4 = 9/4."}
  ],
  "m8i-03-3":[
    {q:"Calculate 1/3 + 1/5.",opts:["2/8","2/15","8/15","1/4"],c:2,e:"LCD(3, 5) = 15. 1/3 = 5/15, 1/5 = 3/15. 5/15 + 3/15 = 8/15."},
    {q:"Calculate 5/6 − 1/4.",opts:["4/2","7/12","1/2","4/6"],c:1,e:"LCD(6, 4) = 12. 5/6 = 10/12, 1/4 = 3/12. 10/12 − 3/12 = 7/12."},
    {q:"A string is 3/4 m long. After cutting off 1/6 m, how much remains?",opts:["7/12 m","2/3 m","1/2 m","5/6 m"],c:0,e:"LCD(4, 6) = 12. 3/4 = 9/12, 1/6 = 2/12. 9/12 − 2/12 = 7/12 m."},
    {q:"Which sum is greater than 1?",opts:["3/8 + 1/4","2/3 + 2/5","1/4 + 3/8","5/12 + 1/6"],c:1,e:"2/3 + 2/5: LCD = 15, gives 10/15 + 6/15 = 16/15 > 1. All others: 3/8+1/4=5/8, 5/8 < 1; 1/4+3/8=5/8 < 1; 5/12+1/6=7/12 < 1."},
    {q:"Estimate 7/8 + 5/9 without calculating exactly.",opts:["About 1/2","About 1","About 1 1/2","About 2"],c:2,e:"7/8 ≈ 1 (just below). 5/9 ≈ 1/2 (just above). Sum ≈ 1 + 1/2 = 1 1/2. Exact: 63/72 + 40/72 = 103/72 = 1 31/72 ≈ 1.43, confirming about 1 1/2."}
  ],
  "m8i-03-4":[
    {q:"Calculate 3 1/4 + 2 1/3.",opts:["5 2/7","5 7/12","5 1/2","6 1/12"],c:1,e:"LCD(4, 3) = 12. 3 1/4 = 3 3/12, 2 1/3 = 2 4/12. Whole parts: 3+2=5. Fraction parts: 3/12+4/12=7/12. Answer: 5 7/12."},
    {q:"Calculate 6 − 2 3/8.",opts:["3 5/8","4 3/8","3 3/8","4 5/8"],c:0,e:"Rewrite 6 as 5 8/8. 5 8/8 − 2 3/8 = 3 5/8."},
    {q:"Calculate 5 1/6 − 3 5/6.",opts:["1 1/3","2 2/3","1 2/3","2 1/3"],c:0,e:"5/6 > 1/6 so regroup: 5 1/6 = 4 7/6. 4 7/6 − 3 5/6 = 1 2/6 = 1 1/3."},
    {q:"A bucket holds 8 3/4 litres. After pouring out 3 5/8 litres, how much remains?",opts:["4 7/8 l","5 1/8 l","5 3/8 l","4 5/8 l"],c:1,e:"LCD(4, 8) = 8. 8 3/4 = 8 6/8. 8 6/8 − 3 5/8 = 5 1/8 litres."},
    {q:"Estimate 7 1/9 + 4 8/9.",opts:["About 10","About 11","About 12","About 13"],c:2,e:"7 1/9 ≈ 7. 4 8/9 ≈ 5. Sum ≈ 12. Exact: fraction parts 1/9 + 8/9 = 9/9 = 1 extra whole. 7 + 4 + 1 = 12. Answer: exactly 12."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-03-1': `
<h2>Simplify, Compare &amp; Order Fractions</h2>
<p>Before you can add, subtract or compare fractions, you need to be able to write them in their simplest form and convert them to a common denominator. These two skills unlock everything else in this topic.</p>

<h3>Simplifying fractions to lowest terms</h3>
<p>A fraction is in <strong>lowest terms</strong> (simplest form) when the only whole number that divides both the numerator and denominator is 1. To simplify, divide both parts by their <strong>Highest Common Factor (HCF)</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> Simplify 18/24.</p>
<p><strong>Solution:</strong><br>
Find HCF(18, 24). Factors of 18: 1, 2, 3, 6, 9, 18. Factors of 24: 1, 2, 3, 4, 6, 8, 12, 24. HCF = 6.<br>
18 ÷ 6 = 3, 24 ÷ 6 = 4.<br>
18/24 = <strong>3/4</strong>.</p>
</div>

<h3>Lowest Common Denominator (LCD)</h3>
<p>To compare or order fractions with different denominators, find the <strong>LCD</strong> — the LCM of the denominators. Then rewrite each fraction as an equivalent fraction with the LCD.</p>
<div class="example-box">
<p><strong>Example:</strong> Which is greater, 3/5 or 7/12?</p>
<p><strong>Solution:</strong><br>
LCD(5, 12) = 60 (since 5 and 12 share no common prime).<br>
3/5 = 36/60 &nbsp;&nbsp; 7/12 = 35/60.<br>
36 &gt; 35, so <strong>3/5 &gt; 7/12</strong>.</p>
</div>

<h3>Ordering a list of fractions</h3>
<div class="example-box">
<p><strong>Example:</strong> Order 1/2, 2/5, 3/8 from smallest to largest.</p>
<p><strong>Solution:</strong><br>
LCD(2, 5, 8) = 40.<br>
1/2 = 20/40, 2/5 = 16/40, 3/8 = 15/40.<br>
Order: 15/40 &lt; 16/40 &lt; 20/40, so <strong>3/8 &lt; 2/5 &lt; 1/2</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Lowest terms / simplest form</dt><dd>A fraction where the HCF of numerator and denominator is 1.</dd>
<dt>Equivalent fractions</dt><dd>Fractions that have the same value, e.g. 1/2 = 2/4 = 3/6.</dd>
<dt>LCD (Lowest Common Denominator)</dt><dd>The smallest number that all the denominators divide into exactly.</dd>
<dt>Numerator</dt><dd>The top number of a fraction — how many parts you have.</dd>
<dt>Denominator</dt><dd>The bottom number of a fraction — how many equal parts the whole is split into.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing only the numerator — ✅ always divide BOTH the numerator and denominator by the same number.</li>
<li>❌ Stopping too early (e.g. 18/24 → 9/12 → stopping there) — ✅ keep simplifying until the HCF is 1.</li>
<li>❌ Comparing fractions by looking at numerators alone — ✅ always find the LCD first, then compare.</li>
</ul>`,

'm8i-03-2': `
<h2>Convert Fractions, Decimals &amp; Mixed Numbers</h2>
<p>Fractions can appear in three forms: as a <strong>proper or improper fraction</strong>, as a <strong>mixed number</strong>, or as a <strong>decimal</strong>. Being able to switch fluently between these forms is an essential Year 8 skill.</p>

<h3>Mixed numbers and improper fractions</h3>
<p>A <strong>mixed number</strong> has a whole-number part and a fraction part (e.g. 3 2/5). An <strong>improper fraction</strong> has a numerator larger than the denominator (e.g. 17/5). They represent the same value.</p>
<div class="example-box">
<p><strong>Example A:</strong> Convert 3 2/5 to an improper fraction.</p>
<p>Multiply the whole number by the denominator, then add the numerator:<br>
3 × 5 + 2 = 17. Place over 5: <strong>17/5</strong>.</p>
</div>
<div class="example-box">
<p><strong>Example B:</strong> Convert 23/6 to a mixed number.</p>
<p>Divide: 23 ÷ 6 = 3 remainder 5.<br>
Answer: <strong>3 5/6</strong>.</p>
</div>

<h3>Fractions to decimals</h3>
<p>Divide the numerator by the denominator. The decimal will either <em>terminate</em> (e.g. 3/4 = 0.75) or <em>recur</em> (e.g. 1/3 = 0.333…).</p>
<div class="example-box">
<p><strong>Example:</strong> Convert 7/8 to a decimal.</p>
<p>7 ÷ 8 = <strong>0.875</strong>. &nbsp; Check: 0.875 × 8 = 7 ✓</p>
</div>

<h3>Decimals to fractions</h3>
<p>Write the decimal over a power of 10 (10 for one decimal place, 100 for two, etc.), then simplify.</p>
<div class="example-box">
<p><strong>Example:</strong> Convert 0.35 to a fraction.</p>
<p>0.35 = 35/100. HCF(35, 100) = 5.<br>
35 ÷ 5 = 7, 100 ÷ 5 = 20. Answer: <strong>7/20</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Improper fraction</dt><dd>A fraction where the numerator is greater than or equal to the denominator (e.g. 11/4).</dd>
<dt>Mixed number</dt><dd>A number with a whole part and a fraction part (e.g. 2 3/4).</dd>
<dt>Terminating decimal</dt><dd>A decimal that ends after a finite number of digits (e.g. 0.25).</dd>
<dt>Recurring decimal</dt><dd>A decimal with a repeating pattern of digits (e.g. 0.333…).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Mixed number to improper: adding the whole number to the numerator only — ✅ multiply the whole number by the denominator first, then add the numerator.</li>
<li>❌ Forgetting to simplify after converting a decimal to a fraction — ✅ always check the HCF and divide.</li>
<li>❌ Confusing which way to divide when converting fractions to decimals — ✅ it is always numerator ÷ denominator.</li>
</ul>`,

'm8i-03-3': `
<h2>Add &amp; Subtract Fractions</h2>
<p>You can only add or subtract fractions directly when they share the same denominator. If the denominators differ, you must first find the <strong>Lowest Common Denominator (LCD)</strong> and create equivalent fractions.</p>

<h3>Adding fractions — step by step</h3>
<div class="example-box">
<p><strong>Example:</strong> Calculate 2/5 + 1/3.</p>
<p><strong>Step 1:</strong> Find the LCD of 5 and 3. LCM(5, 3) = 15.<br>
<strong>Step 2:</strong> Convert: 2/5 = 6/15 and 1/3 = 5/15.<br>
<strong>Step 3:</strong> Add the numerators: 6/15 + 5/15 = <strong>11/15</strong>.<br>
<strong>Step 4:</strong> Simplify if possible (11 and 15 share no common factor, so this is the final answer).</p>
</div>

<h3>Subtracting fractions</h3>
<div class="example-box">
<p><strong>Example:</strong> Calculate 7/8 − 1/6.</p>
<p>LCD(8, 6) = 24.<br>
7/8 = 21/24, &nbsp; 1/6 = 4/24.<br>
21/24 − 4/24 = <strong>17/24</strong>.</p>
</div>

<h3>Estimating fraction sums and differences</h3>
<p>Before calculating, estimate by rounding each fraction to 0, 1/2 or 1 (whichever is nearest). This lets you check your answer is sensible.</p>
<div class="example-box">
<p><strong>Example:</strong> Estimate 7/8 + 5/9.</p>
<p>7/8 ≈ 1 (very close to 1).<br>
5/9 ≈ 1/2 (just over 1/2, since 4.5/9 = 1/2).<br>
Estimate ≈ 1 + 1/2 = 1 1/2. ✓ (Exact: 103/72 ≈ 1.43.)</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>LCD</dt><dd>Lowest Common Denominator — the LCM of the denominators.</dd>
<dt>Equivalent fraction</dt><dd>A fraction with the same value obtained by multiplying top and bottom by the same number.</dd>
<dt>Benchmark fractions</dt><dd>Common reference fractions (0, 1/4, 1/2, 3/4, 1) used for estimating.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding the denominators together (e.g. 1/3 + 1/5 = 2/8) — ✅ find the LCD and keep the denominator.</li>
<li>❌ Converting one fraction but not the other — ✅ both fractions must be changed to the same denominator.</li>
<li>❌ Forgetting to simplify the final answer — ✅ always check whether the result can be reduced.</li>
</ul>`,

'm8i-03-4': `
<h2>Add &amp; Subtract Mixed Numbers</h2>
<p>Adding and subtracting mixed numbers extends the fraction skills you already have. Work with the whole-number parts and the fraction parts separately — but watch out for situations where you need to <strong>regroup (borrow)</strong>.</p>

<h3>Adding mixed numbers</h3>
<div class="example-box">
<p><strong>Example:</strong> Calculate 2 1/3 + 1 1/4.</p>
<p>LCD(3, 4) = 12.<br>
Convert fraction parts: 1/3 = 4/12 and 1/4 = 3/12.<br>
Add fraction parts: 4/12 + 3/12 = 7/12.<br>
Add whole parts: 2 + 1 = 3.<br>
Answer: <strong>3 7/12</strong>.<br>
(If the fraction sum had been ≥ 1, carry 1 to the whole part.)</p>
</div>

<h3>Subtracting mixed numbers — with regrouping</h3>
<p>When the fraction being subtracted is <em>larger</em> than the fraction you are subtracting from, you must <strong>borrow 1</strong> from the whole-number part and add it as a fraction.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate 5 1/6 − 3 5/6.</p>
<p>5/6 &gt; 1/6, so we need to regroup.<br>
Borrow 1 from 5: write 5 1/6 as 4 + 1 + 1/6 = 4 + 6/6 + 1/6 = 4 7/6.<br>
4 7/6 − 3 5/6 = 1 2/6 = <strong>1 1/3</strong>.</p>
</div>
<div class="example-box">
<p><strong>Example:</strong> Calculate 6 − 2 3/8.</p>
<p>Rewrite 6 as 5 8/8.<br>
5 8/8 − 2 3/8 = <strong>3 5/8</strong>.</p>
</div>

<h3>Estimating mixed number sums and differences</h3>
<p>Round each mixed number to the nearest whole number (or half), then add or subtract. Check your exact answer is close to your estimate.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Mixed number</dt><dd>A number with a whole-number part and a fraction part, e.g. 4 3/5.</dd>
<dt>Regrouping (borrowing)</dt><dd>Taking 1 from the whole-number part and writing it as a fraction to make the subtraction possible.</dd>
<dt>Improper fraction sum</dt><dd>When fraction parts add to 1 or more, convert the excess to add to the whole-number part.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to find the LCD before adding or subtracting the fraction parts — ✅ always convert to a common denominator first.</li>
<li>❌ When the fraction sum exceeds 1 (e.g. 7/6), leaving it as an improper fraction — ✅ convert: 7/6 = 1 1/6 and add the 1 to the whole-number part.</li>
<li>❌ When subtracting, trying to take a bigger fraction from a smaller one without regrouping — ✅ borrow 1 from the whole-number part before subtracting.</li>
</ul>`

});
