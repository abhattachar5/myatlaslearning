// math-y8-t15.js — Year 8 Maths Topic 15: Expressions & Properties
// Islands: m8i-15-1 .. m8i-15-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-15-1 — Write & Evaluate Expressions
  {id:"m8fc-15-1-1",islandId:"m8i-15-1",front:"Write an algebraic expression for 'five more than three times a number n'.",
   back:"3n + 5\n\n'Three times a number n' → 3n\n'Five more than' → + 5\nSo the expression is 3n + 5.",difficulty:1,category:"definition"},
  {id:"m8fc-15-1-2",islandId:"m8i-15-1",front:"Evaluate 4x − 3 when x = 5.",
   back:"17\n\nSubstitute x = 5:\n4(5) − 3 = 20 − 3 = 17",difficulty:1,category:"calculation"},
  {id:"m8fc-15-1-3",islandId:"m8i-15-1",front:"What are the terms, coefficients and constant in the expression 7x + 2y − 9?",
   back:"Terms: 7x, 2y, −9\nCoefficients: 7 (of x) and 2 (of y)\nConstant: −9\n\nA coefficient is the number multiplying a variable; a constant has no variable.",difficulty:2,category:"concept"},
  {id:"m8fc-15-1-4",islandId:"m8i-15-1",front:"Evaluate 3a² + 2b when a = 2 and b = −4.",
   back:"4\n\nSubstitute a = 2, b = −4:\n3(2²) + 2(−4)\n= 3(4) + (−8)\n= 12 − 8 = 4",difficulty:2,category:"calculation"},
  {id:"m8fc-15-1-5",islandId:"m8i-15-1",front:"Write an expression for 'the cost of n tickets at £6 each plus a £2 booking fee'.",
   back:"6n + 2\n\nEach ticket costs £6, so n tickets cost 6n.\nAdd the fixed booking fee of £2.\nExpression: 6n + 2",difficulty:1,category:"application"},
  {id:"m8fc-15-1-6",islandId:"m8i-15-1",front:"What is the difference between an expression and an equation?",
   back:"An expression has no equals sign (e.g. 3x + 5).\nAn equation has an equals sign and states that two things are equal (e.g. 3x + 5 = 20).\n\nExpressions can be evaluated; equations can be solved.",difficulty:1,category:"concept"},

  // m8i-15-2 — Simplify Linear Expressions
  {id:"m8fc-15-2-1",islandId:"m8i-15-2",front:"What are 'like terms'? Give an example.",
   back:"Like terms have the same variable(s) raised to the same power.\nExamples of like terms: 3x and 7x; −2y and 5y.\nNon-examples: 3x and 3x² (different powers); 3x and 3y (different variables).",difficulty:1,category:"definition"},
  {id:"m8fc-15-2-2",islandId:"m8i-15-2",front:"Simplify 5x + 3y − 2x + 6y.",
   back:"3x + 9y\n\nCollect x-terms: 5x − 2x = 3x\nCollect y-terms: 3y + 6y = 9y\nAnswer: 3x + 9y",difficulty:1,category:"calculation"},
  {id:"m8fc-15-2-3",islandId:"m8i-15-2",front:"Simplify 4a − 7 + 2a + 3.",
   back:"6a − 4\n\nCollect a-terms: 4a + 2a = 6a\nCollect constants: −7 + 3 = −4\nAnswer: 6a − 4",difficulty:1,category:"calculation"},
  {id:"m8fc-15-2-4",islandId:"m8i-15-2",front:"Simplify 3m + 5n − m − 8n + 4.",
   back:"2m − 3n + 4\n\nCollect m-terms: 3m − m = 2m\nCollect n-terms: 5n − 8n = −3n\nConstant: 4\nAnswer: 2m − 3n + 4",difficulty:2,category:"calculation"},
  {id:"m8fc-15-2-5",islandId:"m8i-15-2",front:"A rectangle has length (3x + 2) and width (x + 5). Write and simplify the perimeter.",
   back:"8x + 14\n\nPerimeter = 2(length + width)\n= 2((3x + 2) + (x + 5))\n= 2(4x + 7)\n= 8x + 14",difficulty:2,category:"application"},
  {id:"m8fc-15-2-6",islandId:"m8i-15-2",front:"Why can't you simplify 4x² + 3x?",
   back:"4x² and 3x are not like terms — they have different powers of x (x² ≠ x).\nYou can only add or subtract terms that are alike.\nThe expression 4x² + 3x is already in its simplest form.",difficulty:2,category:"concept"},

  // m8i-15-3 — Distributive Property & Factorising
  {id:"m8fc-15-3-1",islandId:"m8i-15-3",front:"State the distributive property.",
   back:"a(b + c) = ab + ac\n\nMultiply the term outside the bracket by each term inside.\nExample: 3(x + 4) = 3x + 12",difficulty:1,category:"definition"},
  {id:"m8fc-15-3-2",islandId:"m8i-15-3",front:"Expand 5(2x + 3).",
   back:"10x + 15\n\n5 × 2x = 10x\n5 × 3 = 15\nAnswer: 10x + 15",difficulty:1,category:"calculation"},
  {id:"m8fc-15-3-3",islandId:"m8i-15-3",front:"Expand and simplify 3(2x + 4) − 2(x − 1).",
   back:"4x + 14\n\nExpand: 6x + 12 − 2x + 2\nCollect like terms: (6x − 2x) + (12 + 2) = 4x + 14",difficulty:2,category:"calculation"},
  {id:"m8fc-15-3-4",islandId:"m8i-15-3",front:"Factorise 6x + 10.",
   back:"2(3x + 5)\n\nFind the HCF of 6 and 10, which is 2.\nDivide each term by 2: 6x ÷ 2 = 3x and 10 ÷ 2 = 5.\nAnswer: 2(3x + 5)\nCheck: 2(3x + 5) = 6x + 10 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-15-3-5",islandId:"m8i-15-3",front:"Factorise 12x − 8.",
   back:"4(3x − 2)\n\nHCF of 12 and 8 is 4.\n12x ÷ 4 = 3x; 8 ÷ 4 = 2.\nAnswer: 4(3x − 2)\nCheck: 4(3x − 2) = 12x − 8 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-15-3-6",islandId:"m8i-15-3",front:"Expand −2(3x − 5). What is the key sign rule?",
   back:"−6x + 10\n\n−2 × 3x = −6x\n−2 × (−5) = +10\nAnswer: −6x + 10\n\nKey rule: multiplying two negatives gives a positive.",difficulty:2,category:"concept"},

  // m8i-15-4 — Equivalent Expressions
  {id:"m8fc-15-4-1",islandId:"m8i-15-4",front:"State the commutative property of addition and give an example.",
   back:"a + b = b + a — the order of addition does not matter.\nExample: 3x + 7 = 7 + 3x\n\nThe commutative property also holds for multiplication: ab = ba.",difficulty:1,category:"definition"},
  {id:"m8fc-15-4-2",islandId:"m8i-15-4",front:"Are 2(3x + 1) and 6x + 2 equivalent expressions? Show why.",
   back:"Yes, they are equivalent.\n\nExpand 2(3x + 1):\n2 × 3x = 6x\n2 × 1 = 2\nSo 2(3x + 1) = 6x + 2 ✓\n\nTwo expressions are equivalent if they give the same value for every value of x.",difficulty:1,category:"application"},
  {id:"m8fc-15-4-3",islandId:"m8i-15-4",front:"State the associative property of addition and give an example.",
   back:"(a + b) + c = a + (b + c) — the grouping of terms does not change the sum.\nExample: (2x + 3) + 4 = 2x + (3 + 4) = 2x + 7",difficulty:2,category:"definition"},
  {id:"m8fc-15-4-4",islandId:"m8i-15-4",front:"Show that 5x + 3x and 8x are equivalent.",
   back:"5x + 3x = (5 + 3)x = 8x ✓\n\nThis uses the distributive property in reverse: both terms share the factor x, so you can add the coefficients.\nSubstituting any value confirms they are equal: if x = 2, 5(2)+3(2)=16 and 8(2)=16 ✓",difficulty:1,category:"application"},
  {id:"m8fc-15-4-5",islandId:"m8i-15-4",front:"Are 3(x + 2) and 3x + 2 equivalent? Explain.",
   back:"No, they are NOT equivalent.\n\n3(x + 2) expands to 3x + 6 (the 3 multiplies both terms).\n3x + 2 has a constant of 2, not 6.\n\nIf x = 1: 3(1+2)=9 but 3(1)+2=5. They give different values.",difficulty:2,category:"concept"},
  {id:"m8fc-15-4-6",islandId:"m8i-15-4",front:"Write an equivalent expression to 4x − 8 using the distributive property.",
   back:"4(x − 2)\n\nFactor out 4 from each term:\n4x ÷ 4 = x; 8 ÷ 4 = 2\nSo 4x − 8 = 4(x − 2)\n\nCheck: 4(x − 2) = 4x − 8 ✓",difficulty:2,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-15-1":[
    {q:"Evaluate 3x + 7 when x = 4.",opts:["16","19","21","28"],c:1,e:"Substitute x = 4: 3(4) + 7 = 12 + 7 = 19."},
    {q:"Which expression means '8 less than twice a number n'?",opts:["8 − 2n","2n − 8","2(n − 8)","2n + 8"],c:1,e:"'Twice a number n' is 2n. '8 less than' means we subtract 8 from it: 2n − 8."},
    {q:"Evaluate 2a² − b when a = 3 and b = 5.",opts:["13","16","22","49"],c:0,e:"2(3²) − 5 = 2(9) − 5 = 18 − 5 = 13."},
    {q:"What is the coefficient of y in the expression 5x + 3y − 12?",opts:["3","5","−12","y"],c:0,e:"The coefficient is the number multiplying the variable. In 3y, the coefficient is 3."},
    {q:"A bag contains n apples. Tom takes 4 away. Which expression shows how many are left?",opts:["n + 4","4n","n − 4","4 − n"],c:2,e:"Starting with n apples and removing 4 gives n − 4."}
  ],
  "m8i-15-2":[
    {q:"Simplify 6x + 4 − 2x + 3.",opts:["4x + 7","4x − 7","8x + 7","4x + 1"],c:0,e:"Collect x-terms: 6x − 2x = 4x. Collect constants: 4 + 3 = 7. Answer: 4x + 7."},
    {q:"Which pair of terms are like terms?",opts:["3x and 3y","5x and 5x²","7a and −2a","4xy and 4x"],c:2,e:"Like terms must have identical variable parts. 7a and −2a both have 'a', so they are like terms."},
    {q:"Simplify 5p − 3q + 2p + 7q.",opts:["7p + 10q","7p + 4q","3p + 10q","7p − 4q"],c:1,e:"p-terms: 5p + 2p = 7p. q-terms: −3q + 7q = 4q. Answer: 7p + 4q."},
    {q:"What is the simplified form of 9m − 4m + 2 − 10?",opts:["5m + 12","5m − 8","13m − 8","5m − 12"],c:1,e:"m-terms: 9m − 4m = 5m. Constants: 2 − 10 = −8. Answer: 5m − 8."},
    {q:"A shape has sides of length (2x + 1), (3x − 2) and (x + 5). What is the simplified perimeter?",opts:["6x + 4","6x + 8","5x + 4","6x − 4"],c:0,e:"Add all sides: (2x + 1) + (3x − 2) + (x + 5). x-terms: 2x + 3x + x = 6x. Constants: 1 − 2 + 5 = 4. Perimeter = 6x + 4."}
  ],
  "m8i-15-3":[
    {q:"Expand 4(3x + 2).",opts:["7x + 2","12x + 8","12x + 2","12x + 6"],c:1,e:"4 × 3x = 12x and 4 × 2 = 8. Answer: 12x + 8."},
    {q:"Factorise 15x + 10.",opts:["5(3x + 2)","5(3x + 10)","10(x + 5)","3(5x + 2)"],c:0,e:"HCF of 15 and 10 is 5. 15x ÷ 5 = 3x; 10 ÷ 5 = 2. Answer: 5(3x + 2)."},
    {q:"Expand and simplify 2(x + 3) + 3(x − 1).",opts:["5x + 9","5x + 3","5x + 6","5x − 3"],c:1,e:"2x + 6 + 3x − 3. x-terms: 5x. Constants: 6 − 3 = 3. Answer: 5x + 3."},
    {q:"Expand −3(2x − 4).",opts:["−6x − 12","−6x + 12","6x − 12","6x + 12"],c:1,e:"−3 × 2x = −6x; −3 × (−4) = +12. Answer: −6x + 12. Remember: negative × negative = positive."},
    {q:"What is the fully factorised form of 8x + 20?",opts:["2(4x + 10)","4(2x + 5)","8(x + 20)","4(2x + 20)"],c:1,e:"HCF of 8 and 20 is 4. 8x ÷ 4 = 2x; 20 ÷ 4 = 5. Fully factorised: 4(2x + 5). Note 2(4x + 10) is correct but not fully factorised."}
  ],
  "m8i-15-4":[
    {q:"Which expression is equivalent to 3(2x + 4)?",opts:["6x + 4","5x + 7","6x + 12","2x + 12"],c:2,e:"Expand: 3 × 2x = 6x and 3 × 4 = 12. So 3(2x + 4) = 6x + 12."},
    {q:"Using the commutative property, which is equivalent to 5 + 4x?",opts:["4 + 5x","4x + 5","5x + 4","4x − 5"],c:1,e:"The commutative property of addition says a + b = b + a. So 5 + 4x = 4x + 5."},
    {q:"Are the expressions 4(x + 3) and 4x + 3 equivalent?",opts:["Yes, always","No, the first equals 4x + 12","No, the first equals x + 12","Yes, when x = 0"],c:1,e:"4(x + 3) = 4x + 12, not 4x + 3. The 4 must multiply both terms inside the bracket."},
    {q:"Which expression is equivalent to 10x − 15?",opts:["5(2x − 3)","5(2x − 15)","2(5x − 15)","5(x − 3)"],c:0,e:"HCF of 10 and 15 is 5. 10x ÷ 5 = 2x; 15 ÷ 5 = 3. So 10x − 15 = 5(2x − 3). Check: 5(2x − 3) = 10x − 15 ✓"},
    {q:"Using the associative property, which is equivalent to (2x + 3) + 5?",opts:["2x + (3 + 5)","2x × (3 + 5)","(2x + 3) × 5","2x + 3 − 5"],c:0,e:"The associative property of addition lets you regroup terms: (2x + 3) + 5 = 2x + (3 + 5) = 2x + 8."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-15-1': `
<h2>Write &amp; Evaluate Expressions</h2>
<p>An <strong>algebraic expression</strong> uses letters (variables) to represent unknown quantities. You can write expressions from words and evaluate them by substituting numbers for the variables.</p>

<h3>Writing expressions from words</h3>
<p>Translate key words into algebraic operations:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Words</th><th style="padding:8px;border:1px solid #ccc">Operation</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">more than, sum, plus</td><td style="padding:8px;border:1px solid #ccc">+</td><td style="padding:8px;border:1px solid #ccc">5 more than n → n + 5</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">less than, difference, minus</td><td style="padding:8px;border:1px solid #ccc">−</td><td style="padding:8px;border:1px solid #ccc">8 less than n → n − 8</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">times, product, multiplied by</td><td style="padding:8px;border:1px solid #ccc">×</td><td style="padding:8px;border:1px solid #ccc">3 times n → 3n</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">divided by, quotient of</td><td style="padding:8px;border:1px solid #ccc">÷</td><td style="padding:8px;border:1px solid #ccc">n divided by 4 → n/4</td></tr>
</table>

<h3>Evaluating expressions</h3>
<p>To evaluate an expression, <strong>substitute</strong> the given value for each variable and calculate the result.</p>
<div class="example-box">
<p><strong>Example:</strong> Evaluate 4x − 3 when x = 5.</p>
<p><strong>Solution:</strong> Replace x with 5:<br>
4(5) − 3 = 20 − 3 = <strong>17</strong></p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Evaluate 3a² + 2b when a = 2 and b = −4.</p>
<p><strong>Solution:</strong> Replace a with 2 and b with −4:<br>
3(2²) + 2(−4) = 3(4) − 8 = 12 − 8 = <strong>4</strong></p>
</div>

<h3>Parts of an expression</h3>
<p>In the expression <strong>7x + 2y − 9</strong>:<br>
The <em>terms</em> are 7x, 2y and −9.<br>
The <em>coefficients</em> are 7 (of x) and 2 (of y).<br>
The <em>constant</em> is −9 (no variable).</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Variable</dt><dd>A letter that represents an unknown number (e.g. x, y, n).</dd>
<dt>Term</dt><dd>A single number, variable, or product of numbers and variables (e.g. 3x, −9).</dd>
<dt>Coefficient</dt><dd>The number multiplying a variable in a term (in 7x, the coefficient is 7).</dd>
<dt>Constant</dt><dd>A term with no variable; its value does not change.</dd>
<dt>Evaluate</dt><dd>Find the numerical value of an expression by substituting values.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing 8 − n for 'n less than 8' — ✅ 'less than' reverses the order: n − 8.</li>
<li>❌ Forgetting to square first: 3a² when a = 2 is 3(4) = 12, not (3 × 2)² = 36.</li>
<li>❌ Confusing an expression with an equation — ✅ expressions have no equals sign.</li>
</ul>`,

'm8i-15-2': `
<h2>Simplify Linear Expressions</h2>
<p><strong>Collecting like terms</strong> (also called simplifying) means combining terms that have the same variable and power into a single term. This makes expressions shorter and easier to work with.</p>

<h3>What are like terms?</h3>
<p>Like terms have <strong>identical variable parts</strong>. You can only add or subtract like terms.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Like terms</th><th style="padding:8px;border:1px solid #ccc">NOT like terms</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">3x and 7x (both have x)</td><td style="padding:8px;border:1px solid #ccc">3x and 3x² (different powers)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">−2y and 5y (both have y)</td><td style="padding:8px;border:1px solid #ccc">3x and 3y (different variables)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">4 and −9 (both constants)</td><td style="padding:8px;border:1px solid #ccc">4 and 4x (one has a variable)</td></tr>
</table>

<h3>Collecting like terms</h3>
<div class="example-box">
<p><strong>Example:</strong> Simplify 5x + 3y − 2x + 6y.</p>
<p><strong>Solution:</strong><br>
x-terms: 5x − 2x = <strong>3x</strong><br>
y-terms: 3y + 6y = <strong>9y</strong><br>
Answer: <strong>3x + 9y</strong></p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Simplify 3m + 5n − m − 8n + 4.</p>
<p><strong>Solution:</strong><br>
m-terms: 3m − m = <strong>2m</strong><br>
n-terms: 5n − 8n = <strong>−3n</strong><br>
Constant: <strong>4</strong><br>
Answer: <strong>2m − 3n + 4</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Like terms</dt><dd>Terms with exactly the same variable(s) raised to the same power.</dd>
<dt>Collecting like terms</dt><dd>Adding or subtracting like terms to simplify an expression.</dd>
<dt>Simplify</dt><dd>Write an expression in its shortest equivalent form.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding unlike terms: 4x + 3y ≠ 7xy — ✅ different variables cannot be combined.</li>
<li>❌ Combining 3x and 3x²: they have different powers — ✅ they are unlike terms.</li>
<li>❌ Losing a negative sign: in 5x − 8x the result is −3x, not +3x — ✅ keep track of signs.</li>
</ul>`,

'm8i-15-3': `
<h2>Distributive Property &amp; Factorising</h2>
<p>The <strong>distributive property</strong> lets you multiply a bracket by expanding it, or reverse the process — <strong>factorising</strong> — to write an expression as a product.</p>

<h3>Expanding brackets (Distributive Property)</h3>
<p>Multiply the term outside the bracket by <em>every</em> term inside:</p>
<p style="text-align:center;font-size:1.1em"><strong>a(b + c) = ab + ac</strong></p>

<div class="example-box">
<p><strong>Example:</strong> Expand 5(2x + 3).</p>
<p>5 × 2x = 10x &nbsp;&nbsp; 5 × 3 = 15<br>
Answer: <strong>10x + 15</strong></p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Expand and simplify 3(2x + 4) − 2(x − 1).</p>
<p>Expand: 6x + 12 − 2x + 2<br>
Collect like terms: (6x − 2x) + (12 + 2) = <strong>4x + 14</strong></p>
</div>

<h3>Expanding with a negative multiplier</h3>
<p>When the term outside is negative, remember: <strong>negative × negative = positive</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> Expand −2(3x − 5).</p>
<p>−2 × 3x = −6x &nbsp;&nbsp; −2 × (−5) = +10<br>
Answer: <strong>−6x + 10</strong></p>
</div>

<h3>Factorising linear expressions</h3>
<p>Factorising is the <em>reverse</em> of expanding. Find the <strong>HCF</strong> of all terms and place it outside the bracket.</p>
<div class="example-box">
<p><strong>Example:</strong> Factorise 12x − 8.</p>
<p>HCF of 12 and 8 is 4.<br>
12x ÷ 4 = 3x &nbsp;&nbsp; 8 ÷ 4 = 2<br>
Answer: <strong>4(3x − 2)</strong><br>
Check: 4(3x − 2) = 12x − 8 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Distributive property</dt><dd>a(b + c) = ab + ac — multiply the factor outside by each term inside.</dd>
<dt>Expanding</dt><dd>Removing brackets by multiplying out.</dd>
<dt>Factorising</dt><dd>Writing an expression as a product using the HCF.</dd>
<dt>HCF</dt><dd>Highest Common Factor — the largest factor shared by all terms.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Only multiplying the first term: 3(x + 4) ≠ 3x + 4 — ✅ the 3 must multiply both x and 4 to give 3x + 12.</li>
<li>❌ Sign errors with negatives: −2(3x − 5) ≠ −6x − 10 — ✅ negative × negative = positive, so the −5 becomes +10.</li>
<li>❌ Partial factorising: for 12x − 8 writing 2(6x − 4) — ✅ always use the HCF to fully factorise.</li>
</ul>`,

'm8i-15-4': `
<h2>Equivalent Expressions</h2>
<p>Two expressions are <strong>equivalent</strong> if they give the same value for every possible value of the variable. Properties of operations help you rewrite expressions in different but equal forms.</p>

<h3>Properties of operations</h3>
<dl>
<dt>Commutative property of addition</dt><dd>a + b = b + a &nbsp; (order doesn't matter)<br>Example: 3x + 7 = 7 + 3x</dd>
<dt>Commutative property of multiplication</dt><dd>ab = ba<br>Example: 4 × x = x × 4</dd>
<dt>Associative property of addition</dt><dd>(a + b) + c = a + (b + c) &nbsp; (grouping doesn't matter)<br>Example: (2x + 3) + 4 = 2x + (3 + 4) = 2x + 7</dd>
<dt>Identity property of addition</dt><dd>a + 0 = a</dd>
<dt>Distributive property</dt><dd>a(b + c) = ab + ac &nbsp; (links multiplication and addition)</dd>
</dl>

<h3>Checking equivalence</h3>
<p>To check if two expressions are equivalent, expand both fully and simplify, then compare. You can also substitute a value and check the results match.</p>
<div class="example-box">
<p><strong>Example:</strong> Are 2(3x + 1) and 6x + 2 equivalent?</p>
<p>Expand 2(3x + 1): 2 × 3x = 6x, 2 × 1 = 2 → <strong>6x + 2</strong><br>
Both expressions equal 6x + 2, so <strong>yes, they are equivalent</strong>.</p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Are 3(x + 2) and 3x + 2 equivalent?</p>
<p>Expand 3(x + 2) = 3x + 6 ≠ 3x + 2.<br>
Test x = 1: 3(1 + 2) = 9 but 3(1) + 2 = 5. <strong>Not equivalent.</strong></p>
</div>

<h3>Writing equivalent forms</h3>
<p>You can use factorising and expanding to move between equivalent forms:</p>
<p>4x − 8 &nbsp;=&nbsp; 4(x − 2) &nbsp; (factorised form)<br>
6x + 12 &nbsp;=&nbsp; 6(x + 2) &nbsp; (factorised form)</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Equivalent expressions</dt><dd>Expressions that have the same value for all values of the variable.</dd>
<dt>Commutative property</dt><dd>Changing the order of addition or multiplication does not change the result.</dd>
<dt>Associative property</dt><dd>Changing the grouping of addition or multiplication does not change the result.</dd>
<dt>Identity element</dt><dd>The value that leaves a number unchanged: 0 for addition, 1 for multiplication.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking 3(x + 2) = 3x + 2 — ✅ always expand fully: 3(x + 2) = 3x + 6.</li>
<li>❌ Applying commutativity to subtraction: a − b ≠ b − a in general — ✅ subtraction is not commutative.</li>
<li>❌ Stopping at a partial factorisation — ✅ always use the HCF to write the fully equivalent factorised form.</li>
</ul>`

});
