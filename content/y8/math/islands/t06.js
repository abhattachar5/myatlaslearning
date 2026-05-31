// math-y8-t06.js — Year 8 Maths Topic 6: Rational Numbers
// Islands: m8i-06-1 .. m8i-06-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-06-1 — Identify & Compare Rational Numbers
  {id:"m8fc-06-1-1",islandId:"m8i-06-1",front:"What is a rational number? Give three examples.",
   back:"A rational number is any number that can be written as a fraction a/b where a and b are integers and b ≠ 0.\n\nExamples:\n• ¾ (fraction)\n• −2 = −2/1 (negative integer)\n• 0.6 = 3/5 (terminating decimal)",difficulty:1,category:"definition"},
  {id:"m8fc-06-1-2",islandId:"m8i-06-1",front:"Place −¾, 0.5 and −1.25 in order from smallest to largest.",
   back:"−1.25, −¾, 0.5\n\nConvert to decimals:\n−¾ = −0.75\n−1.25 = −1.25\n0.5 = 0.5\n\nOn a number line, more negative = smaller: −1.25 < −0.75 < 0.5.",difficulty:2,category:"application"},
  {id:"m8fc-06-1-3",islandId:"m8i-06-1",front:"Which is greater: −²⁄₃ or −³⁄₄? Explain.",
   back:"−²⁄₃ is greater.\n\n−²⁄₃ ≈ −0.667\n−³⁄₄ = −0.75\n\nSince −0.667 > −0.75 (less negative), −²⁄₃ > −³⁄₄.\nRule: for negative fractions, the one closer to zero is greater.",difficulty:2,category:"calculation"},
  {id:"m8fc-06-1-4",islandId:"m8i-06-1",front:"How do you plot −2⅓ on a number line?",
   back:"−2⅓ lies between −3 and −2, one-third of the way from −2 towards −3.\n\nConvert: −2⅓ = −7/3 ≈ −2.333\n\nDivide the gap between −3 and −2 into thirds and mark the first third past −2 (going left).",difficulty:2,category:"concept"},
  {id:"m8fc-06-1-5",islandId:"m8i-06-1",front:"Is every terminating decimal a rational number? Why?",
   back:"Yes.\n\nA terminating decimal like 0.35 can always be written as a fraction:\n0.35 = 35/100 = 7/20.\n\nSince it can be expressed as a/b with integer a and b ≠ 0, it is rational.",difficulty:1,category:"concept"},
  {id:"m8fc-06-1-6",islandId:"m8i-06-1",front:"Write 0.4̄ (0.444…) as a fraction.",
   back:"0.444… = 4/9\n\nLet x = 0.444…\n10x = 4.444…\n10x − x = 4\n9x = 4\nx = 4/9\n\nRecurring decimals are always rational.",difficulty:3,category:"calculation"},

  // m8i-06-2 — Add & Subtract Rational Numbers
  {id:"m8fc-06-2-1",islandId:"m8i-06-2",front:"What is the rule for adding two negative numbers?",
   back:"Add their absolute values and keep the negative sign.\n\nExample: (−2.3) + (−1.7)\n= −(2.3 + 1.7)\n= −4.0\n\nBoth terms are negative, so the result is negative.",difficulty:1,category:"concept"},
  {id:"m8fc-06-2-2",islandId:"m8i-06-2",front:"Calculate: −¼ + ³⁄₄",
   back:"½\n\nSame denominator, so just add the numerators:\n−¼ + ³⁄₄ = (−1 + 3)/4 = 2/4 = ½\n\nThe positive fraction is larger, so the answer is positive.",difficulty:1,category:"calculation"},
  {id:"m8fc-06-2-3",islandId:"m8i-06-2",front:"Calculate: −⅓ + (−⅔)",
   back:"−1\n\nSame denominator:\n(−1 + (−2))/3 = −3/3 = −1\n\nBoth fractions are negative, so add magnitudes and keep the negative sign.",difficulty:1,category:"calculation"},
  {id:"m8fc-06-2-4",islandId:"m8i-06-2",front:"Calculate: −1.8 − (−2.5)",
   back:"0.7\n\nSubtracting a negative = adding a positive:\n−1.8 − (−2.5) = −1.8 + 2.5\n\n2.5 − 1.8 = 0.7\nThe positive term is larger, so the answer is +0.7.",difficulty:2,category:"calculation"},
  {id:"m8fc-06-2-5",islandId:"m8i-06-2",front:"Calculate: ⅖ − (−⅗)",
   back:"1\n\nSubtracting a negative = adding a positive:\n⅖ − (−⅗) = ⅖ + ⅗ = 5/5 = 1",difficulty:2,category:"calculation"},
  {id:"m8fc-06-2-6",islandId:"m8i-06-2",front:"A diver is at −4.5 m. She descends a further 2¼ m. What is her new depth?",
   back:"−6¾ m (or −6.75 m)\n\n−4.5 + (−2¼)\n= −4.5 + (−2.25)\n= −(4.5 + 2.25)\n= −6.75 = −6¾ m\n\nBoth movements are downward (negative), so add magnitudes.",difficulty:3,category:"application"},

  // m8i-06-3 — Multiply & Divide Rational Numbers
  {id:"m8fc-06-3-1",islandId:"m8i-06-3",front:"State the sign rules for multiplying and dividing rational numbers.",
   back:"Same signs → POSITIVE result\nDifferent signs → NEGATIVE result\n\nExamples:\n(+) × (+) = (+)\n(−) × (−) = (+)\n(+) × (−) = (−)\n(−) × (+) = (−)\n\nThe same rules apply to division.",difficulty:1,category:"definition"},
  {id:"m8fc-06-3-2",islandId:"m8i-06-3",front:"Calculate: (−0.4) × (−1.5)",
   back:"0.6\n\nIgnore signs first: 0.4 × 1.5\n= 4 × 15 ÷ 100\n= 60 ÷ 100 = 0.6\n\nSame signs (both negative) → positive: 0.6",difficulty:2,category:"calculation"},
  {id:"m8fc-06-3-3",islandId:"m8i-06-3",front:"Calculate: (−³⁄₅) × (²⁄₃)",
   back:"−²⁄₅\n\nDifferent signs → negative.\nMultiply numerators and denominators:\n3 × 2 = 6, 5 × 3 = 15\n−6/15 = −2/5",difficulty:2,category:"calculation"},
  {id:"m8fc-06-3-4",islandId:"m8i-06-3",front:"Calculate: (−²⁄₇) ÷ (⁴⁄₇)",
   back:"−½\n\nDivide fractions: flip the second and multiply.\n(−2/7) × (7/4) = −14/28 = −½\n\nDifferent signs → negative answer.",difficulty:2,category:"calculation"},
  {id:"m8fc-06-3-5",islandId:"m8i-06-3",front:"Calculate: −3.6 ÷ (−0.9)",
   back:"4\n\nSame signs → positive.\n3.6 ÷ 0.9: multiply both by 10 → 36 ÷ 9 = 4\n\nAnswer: +4",difficulty:2,category:"calculation"},
  {id:"m8fc-06-3-6",islandId:"m8i-06-3",front:"Explain why (−½)² is positive but −½² is negative.",
   back:"(−½)² = (−½) × (−½) = +¼ (the negative is squared)\n\n−½² = −(½ × ½) = −¼ (the square applies only to ½, then the negative sign is applied)\n\nBrackets determine what the square acts on.",difficulty:3,category:"concept"},

  // m8i-06-4 — Evaluate Rational Number Expressions
  {id:"m8fc-06-4-1",islandId:"m8i-06-4",front:"What does BODMAS stand for and in what order do you apply it?",
   back:"B — Brackets\nO — Orders (powers and roots)\nD — Division\nM — Multiplication\nA — Addition\nS — Subtraction\n\nDivision and Multiplication are equal priority (left to right).\nAddition and Subtraction are equal priority (left to right).",difficulty:1,category:"definition"},
  {id:"m8fc-06-4-2",islandId:"m8i-06-4",front:"Evaluate: (−2) + 3 × (−½)",
   back:"−½\n\nStep 1 — Multiplication first: 3 × (−½) = −3/2\nStep 2 — Addition: (−2) + (−3/2) = −2 − 1.5 = −3.5 = −7/2\n\nWait — let me restate:\n−2 + (−3/2) = −4/2 + (−3/2) = −7/2 = −3½",difficulty:2,category:"calculation"},
  {id:"m8fc-06-4-3",islandId:"m8i-06-4",front:"Evaluate: (−¾ + ¼) ÷ (−½)",
   back:"1\n\nStep 1 — Brackets: −¾ + ¼ = −2/4 = −½\nStep 2 — Division: (−½) ÷ (−½) = 1\n\nSame signs → positive.",difficulty:2,category:"calculation"},
  {id:"m8fc-06-4-4",islandId:"m8i-06-4",front:"Evaluate: −0.5 × (3 − 4.2)",
   back:"0.6\n\nStep 1 — Brackets: 3 − 4.2 = −1.2\nStep 2 — Multiply: −0.5 × (−1.2) = 0.6\n\nSame signs (both negative) → positive.",difficulty:2,category:"calculation"},
  {id:"m8fc-06-4-5",islandId:"m8i-06-4",front:"Evaluate: ⅔ ÷ (−⅓) + (−2)",
   back:"−4\n\nStep 1 — Division first: ⅔ ÷ (−⅓) = ⅔ × (−3) = −2\nStep 2 — Addition: (−2) + (−2) = −4",difficulty:3,category:"calculation"},
  {id:"m8fc-06-4-6",islandId:"m8i-06-4",front:"Evaluate: (−1.5)² − 2 × (−0.5)",
   back:"3.25\n\nStep 1 — Order: (−1.5)² = 2.25\nStep 2 — Multiply: 2 × (−0.5) = −1\nStep 3 — Subtract: 2.25 − (−1) = 2.25 + 1 = 3.25",difficulty:3,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-06-1":[
    {q:"Which of these numbers is rational?",opts:["π","√3","−⁵⁄₈","√5"],c:2,e:"−5/8 is a fraction a/b with integer numerator and denominator, so it is rational. π, √3 and √5 are irrational — their decimals never end and never repeat."},
    {q:"Which list is in order from smallest to largest?",opts:["−½, −0.75, 0.3","−0.75, −½, 0.3","0.3, −½, −0.75","−½, 0.3, −0.75"],c:1,e:"Convert to decimals: −0.75, −0.5, 0.3. On the number line: −0.75 < −0.5 < 0.3, so the order is −0.75, −½, 0.3."},
    {q:"Which is greater: −³⁄₅ or −⁷⁄₁₀?",opts:["−³⁄₅","−⁷⁄₁₀","They are equal","Cannot tell"],c:0,e:"−3/5 = −6/10 and −7/10. Since −6/10 > −7/10 (closer to zero), −3/5 is greater."},
    {q:"Where does −1¾ appear on a number line?",opts:["Between 1 and 2","Between −1 and 0","Between −2 and −1","To the left of −2"],c:2,e:"−1¾ = −1.75 which lies between −2 and −1, three-quarters of the way from −1 towards −2."},
    {q:"Which set of numbers are ALL rational?",opts:["π, ½, 3","0.7, ⅓, −5","√2, 4, 0.1","π, √2, √3"],c:1,e:"0.7 = 7/10, ⅓ is a fraction, −5 = −5/1 — all rational. The other sets contain at least one irrational number."}
  ],
  "m8i-06-2":[
    {q:"Calculate: (−0.6) + (−0.9)",opts:["0.3","−0.3","1.5","−1.5"],c:3,e:"Both negative: add the magnitudes and keep the negative sign. 0.6 + 0.9 = 1.5, so the answer is −1.5."},
    {q:"Calculate: −⅗ + ²⁄₅",opts:["−⅕","⅕","1","−1"],c:0,e:"Same denominator: (−3 + 2)/5 = −1/5. The negative term has larger magnitude, so the answer is negative: −1/5."},
    {q:"Calculate: −2.4 − (−1.6)",opts:["−4","4","−0.8","0.8"],c:2,e:"Subtracting a negative becomes adding a positive: −2.4 + 1.6. |2.4| > |1.6| and the larger term is negative, so: −(2.4 − 1.6) = −0.8."},
    {q:"A submarine is at −35.5 m. It rises 12¾ m. What is its new depth?",opts:["−22.75 m","22.75 m","−48.25 m","−48 m"],c:0,e:"−35.5 + 12.75 = −22.75 m. Rising means adding a positive number; since 35.5 > 12.75 the sub is still below zero."},
    {q:"Calculate: ¾ − (−¼)",opts:["½","1","−½","−1"],c:1,e:"Subtracting a negative becomes adding: ¾ + ¼ = 4/4 = 1."}
  ],
  "m8i-06-3":[
    {q:"Calculate: (−0.3) × 0.5",opts:["0.15","−0.15","1.5","−1.5"],c:1,e:"Different signs → negative. 0.3 × 0.5 = 0.15, so the answer is −0.15."},
    {q:"Calculate: (−²⁄₃) × (−³⁄₄)",opts:["−½","½","−6/12","2"],c:1,e:"Same signs (both negative) → positive. 2/3 × 3/4 = 6/12 = 1/2."},
    {q:"Calculate: −1.2 ÷ 0.4",opts:["3","−3","0.48","−0.48"],c:1,e:"Different signs → negative. 1.2 ÷ 0.4 = 3 (multiply both by 10: 12 ÷ 4 = 3). Answer: −3."},
    {q:"Calculate: (−⁴⁄₅) ÷ (−²⁄₅)",opts:["−2","2","8/25","−8/25"],c:1,e:"Same signs → positive. (4/5) ÷ (2/5) = (4/5) × (5/2) = 20/10 = 2."},
    {q:"Which expression gives a positive result?",opts:["(−0.5) × 3","(−⅓) × (−6)","2 × (−¼)","(−4) × 0.25"],c:1,e:"(−⅓) × (−6): same signs (both negative) → positive result = 2. The other three all involve different signs giving negative results."}
  ],
  "m8i-06-4":[
    {q:"Evaluate: (−3) + 4 × (−½)",opts:["−1","−5","2","1"],c:1,e:"BODMAS: multiplication first: 4 × (−½) = −2. Then: (−3) + (−2) = −5."},
    {q:"Evaluate: (−½ + ³⁄₄) × (−4)",opts:["−1","1","5","−5"],c:0,e:"Brackets first: −½ + ¾ = −2/4 + 3/4 = 1/4. Then: (1/4) × (−4) = −1. Different signs → negative."},
    {q:"Evaluate: −0.6 ÷ 0.3 + (−1)",opts:["−3","−1","3","1"],c:0,e:"Division first: −0.6 ÷ 0.3 = −2. Then: (−2) + (−1) = −3."},
    {q:"Evaluate: (−1)² + (−1)³",opts:["0","2","−2","−1"],c:0,e:"Orders first: (−1)² = 1 and (−1)³ = −1. Then: 1 + (−1) = 0."},
    {q:"Evaluate: ½ × (−6) − (−⅔) × 3",opts:["−1","−5","1","5"],c:0,e:"Multiplication first (left to right): ½ × (−6) = −3; (−⅔) × 3 = −2. Then: −3 − (−2) = −3 + 2 = −1."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-06-1': `
<h2>Identify &amp; Compare Rational Numbers</h2>
<p>A <strong>rational number</strong> is any number that can be written as a fraction a/b, where a and b are integers and b ≠ 0. This large family includes integers, fractions, terminating decimals and recurring decimals.</p>

<h3>Recognising rational numbers</h3>
<p>All of the following are rational:</p>
<ul>
<li>Integers: −7, 0, 4 (write as −7/1, 0/1, 4/1)</li>
<li>Fractions: ¾, −²⁄₅</li>
<li>Terminating decimals: 0.6 = 3/5, −1.25 = −5/4</li>
<li>Recurring decimals: 0.333… = ⅓, 0.181818… = 2/11</li>
</ul>
<p>Numbers like π and √2 are <em>irrational</em> — their decimals never end and never repeat.</p>

<h3>Comparing rational numbers</h3>
<p>Convert all numbers to decimals (or a common denominator), then use the number line: further <strong>right</strong> = greater, further <strong>left</strong> = smaller.</p>
<div class="example-box">
<p><strong>Example:</strong> Write −⅔, 0.5 and −0.75 in order from smallest to largest.</p>
<p><strong>Solution:</strong><br>
Convert: −⅔ ≈ −0.667, &nbsp; 0.5 = 0.5, &nbsp; −0.75 = −0.75.<br>
Order on number line: −0.75 &lt; −0.667 &lt; 0.5.<br>
Answer: <strong>−0.75, −⅔, 0.5</strong>.</p>
</div>

<h3>Plotting on a number line</h3>
<p>For mixed numbers such as −2⅓, note that it lies between −3 and −2. Divide that interval into thirds and mark the first third to the left of −2.</p>

<h3>Converting recurring decimals to fractions</h3>
<div class="example-box">
<p><strong>Example:</strong> Write 0.444… as a fraction.</p>
<p>Let x = 0.444…<br>
10x = 4.444…<br>
10x − x = 4 → 9x = 4 → x = <strong>4/9</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Rational number</dt><dd>Any number expressible as a/b where a, b are integers and b ≠ 0.</dd>
<dt>Irrational number</dt><dd>A number whose decimal expansion never ends and never repeats, e.g. π, √2.</dd>
<dt>Terminating decimal</dt><dd>A decimal that ends after a finite number of digits, e.g. 0.35.</dd>
<dt>Recurring decimal</dt><dd>A decimal where one or more digits repeat infinitely, e.g. 0.333…</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking −5 is not rational — ✅ every integer is rational (write it over 1).</li>
<li>❌ Saying a bigger digit means a bigger negative — ✅ −0.75 &lt; −0.5 because −0.75 is further left on the number line.</li>
<li>❌ Confusing recurring decimals with irrational numbers — ✅ recurring decimals are always rational.</li>
</ul>`,

'm8i-06-2': `
<h2>Add &amp; Subtract Rational Numbers</h2>
<p>Adding and subtracting <strong>positive and negative</strong> fractions and decimals uses the same sign rules you learnt for integers — just applied carefully to fractional values.</p>

<h3>Sign rules for addition</h3>
<ul>
<li><strong>Same signs:</strong> add the magnitudes and keep the sign.<br>e.g. (−1.2) + (−0.8) = −2.0</li>
<li><strong>Different signs:</strong> subtract the smaller magnitude from the larger; the sign of the result matches the larger magnitude.<br>e.g. (−1.5) + 0.7 = −0.8</li>
</ul>

<h3>Subtracting a negative</h3>
<p>Always rewrite first: <strong>a − (−b) = a + b</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate −2.4 − (−1.6).</p>
<p>Rewrite: −2.4 + 1.6<br>
Different signs: |2.4| &gt; |1.6|, so the result is negative.<br>
2.4 − 1.6 = 0.8 → Answer: <strong>−0.8</strong>.</p>
</div>

<h3>Adding and subtracting fractions</h3>
<p>Find a common denominator, then apply sign rules to the numerators.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate −⅓ + ⅚.</p>
<p>LCD of 3 and 6 is 6.<br>
−⅓ = −²⁄₆<br>
−²⁄₆ + ⁵⁄₆ = 3/6 = <strong>½</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Magnitude (absolute value)</dt><dd>The size of a number without its sign, e.g. |−3.2| = 3.2.</dd>
<dt>Lowest common denominator (LCD)</dt><dd>The smallest common multiple of the denominators.</dd>
<dt>Additive inverse</dt><dd>The opposite of a number; adding them gives zero (e.g. ¾ and −¾).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to rewrite subtraction of a negative — ✅ always replace − (−b) with + b first.</li>
<li>❌ Adding denominators instead of finding LCD — ✅ the denominator stays the same once you have a common one.</li>
<li>❌ Giving the wrong sign when magnitudes are close — ✅ the sign of the result belongs to whichever number has the larger absolute value.</li>
</ul>`,

'm8i-06-3': `
<h2>Multiply &amp; Divide Rational Numbers</h2>
<p>Multiplying and dividing rational numbers follows the same <strong>sign rules as integers</strong>. Mastering these rules lets you handle any combination of positive and negative fractions or decimals.</p>

<h3>Sign rules</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Operation</th><th style="padding:8px;border:1px solid #ccc">Same signs</th><th style="padding:8px;border:1px solid #ccc">Different signs</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">× or ÷</td><td style="padding:8px;border:1px solid #ccc">Positive result</td><td style="padding:8px;border:1px solid #ccc">Negative result</td></tr>
</table>

<h3>Multiplying fractions</h3>
<p>Multiply numerators together, denominators together, then simplify and apply the sign rule.</p>
<div class="example-box">
<p><strong>Example:</strong> (−³⁄₅) × (²⁄₃)</p>
<p>Different signs → negative.<br>
3 × 2 = 6, &nbsp; 5 × 3 = 15.<br>
6/15 = 2/5. Answer: <strong>−²⁄₅</strong>.</p>
</div>

<h3>Dividing fractions</h3>
<p>Apply the sign rule, then <em>flip the second fraction</em> and multiply (keep-change-flip).</p>
<div class="example-box">
<p><strong>Example:</strong> (−²⁄₇) ÷ (⁴⁄₇)</p>
<p>Different signs → negative.<br>
(2/7) × (7/4) = 14/28 = 1/2. Answer: <strong>−½</strong>.</p>
</div>

<h3>Multiplying and dividing decimals</h3>
<p>Work with the magnitudes using column methods or mental maths, then apply the sign rule last.</p>
<div class="example-box">
<p><strong>Example:</strong> (−0.4) × (−1.5)</p>
<p>Same signs → positive.<br>
4 × 15 = 60, so 0.4 × 1.5 = 0.60. Answer: <strong>0.6</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Reciprocal</dt><dd>The number you multiply a fraction by to get 1. The reciprocal of a/b is b/a.</dd>
<dt>Keep-Change-Flip</dt><dd>To divide by a fraction: keep the first, change ÷ to ×, flip the second.</dd>
<dt>Absolute value</dt><dd>The non-negative magnitude of a number, ignoring its sign.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting the sign rule — ✅ determine the sign first, then calculate the magnitude.</li>
<li>❌ Flipping the first fraction when dividing — ✅ only the <em>second</em> fraction is flipped.</li>
<li>❌ Thinking (−½)² = −¼ — ✅ (−½)² = +¼; the square makes it positive because (−)(−) = (+).</li>
</ul>`,

'm8i-06-4': `
<h2>Evaluate Rational Number Expressions</h2>
<p>When an expression mixes fractions, decimals and negative numbers, you must follow <strong>BODMAS</strong> to get the correct answer every time.</p>

<h3>BODMAS order</h3>
<ol>
<li><strong>B</strong>rackets — evaluate innermost first</li>
<li><strong>O</strong>rders — powers and roots</li>
<li><strong>D</strong>ivision and <strong>M</strong>ultiplication — left to right, equal priority</li>
<li><strong>A</strong>ddition and <strong>S</strong>ubtraction — left to right, equal priority</li>
</ol>

<div class="example-box">
<p><strong>Example 1:</strong> Evaluate (−¾ + ¼) ÷ (−½).</p>
<p>Step 1 — Brackets: −¾ + ¼ = −2/4 = −½.<br>
Step 2 — Division: (−½) ÷ (−½) = 1.<br>
Same signs → positive. Answer: <strong>1</strong>.</p>
</div>

<div class="example-box">
<p><strong>Example 2:</strong> Evaluate (−1.5)² − 2 × (−0.5).</p>
<p>Step 1 — Orders: (−1.5)² = 2.25.<br>
Step 2 — Multiplication: 2 × (−0.5) = −1.<br>
Step 3 — Subtraction: 2.25 − (−1) = 2.25 + 1 = <strong>3.25</strong>.</p>
</div>

<h3>Common expression structures</h3>
<p>Watch for these patterns:</p>
<ul>
<li>Subtraction of a negative inside brackets: rewrite as addition first.</li>
<li>A power on a negative base: check whether the brackets include the negative sign.</li>
<li>Mixed fractions and decimals: convert to the same form before operating.</li>
</ul>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>BODMAS</dt><dd>The UK order of operations: Brackets, Orders, Division/Multiplication, Addition/Subtraction.</dd>
<dt>Expression</dt><dd>A mathematical phrase combining numbers and operations, e.g. (−½ + ¼) × 3.</dd>
<dt>Evaluate</dt><dd>To calculate the numerical value of an expression.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Doing addition before multiplication — ✅ always multiply and divide before adding and subtracting.</li>
<li>❌ Treating −x² the same as (−x)² — ✅ −x² means −(x²), which is negative; (−x)² is always positive.</li>
<li>❌ Ignoring sign rules mid-calculation — ✅ check the sign at each step, especially after subtracting a negative.</li>
</ul>`

});
