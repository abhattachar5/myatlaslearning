// math-y8-t04.js — Year 8 Maths Topic 4: Multiply & Divide Fractions
// Islands: m8i-04-1 .. m8i-04-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-04-1 — Multiply Fractions & Whole Numbers
  {id:"m8fc-04-1-1",islandId:"m8i-04-1",front:"How do you multiply a fraction by a whole number?",
   back:"Write the whole number as a fraction over 1, then multiply numerators together and denominators together.\n\nExample: 3 × ²⁄₅ = ³⁄₁ × ²⁄₅ = ⁶⁄₅ = 1¹⁄₅",difficulty:1,category:"concept"},
  {id:"m8fc-04-1-2",islandId:"m8i-04-1",front:"Calculate ³⁄₄ × 8.",
   back:"6\n\n³⁄₄ × 8 = ³⁄₄ × ⁸⁄₁ = ²⁴⁄₄ = 6.\nAlternatively, 8 ÷ 4 = 2, then 2 × 3 = 6.",difficulty:1,category:"calculation"},
  {id:"m8fc-04-1-3",islandId:"m8i-04-1",front:"Find ²⁄₅ of 30.",
   back:"12\n\n'Of' means multiply: ²⁄₅ × 30.\nMethod: 30 ÷ 5 = 6 (one fifth of 30), then 6 × 2 = 12.",difficulty:1,category:"application"},
  {id:"m8fc-04-1-4",islandId:"m8i-04-1",front:"Estimate 4 × ⁵⁄₉ without an exact calculation.",
   back:"About 2.\n\n⁵⁄₉ is close to ½, so 4 × ½ = 2.\nExact answer: ²⁰⁄₉ = 2²⁄₉, confirming the estimate is good.",difficulty:2,category:"application"},
  {id:"m8fc-04-1-5",islandId:"m8i-04-1",front:"A recipe needs ²⁄₃ cup of flour. How much flour is needed for 6 batches?",
   back:"4 cups\n\n²⁄₃ × 6 = ¹²⁄₃ = 4.\nSix batches need 4 cups of flour.",difficulty:2,category:"application"},
  {id:"m8fc-04-1-6",islandId:"m8i-04-1",front:"What does it mean to multiply a number by a proper fraction, and will the answer be bigger or smaller than the original?",
   back:"Multiplying by a proper fraction (less than 1) scales the number DOWN.\n\nThe answer will be SMALLER than the original number.\nExample: 12 × ¹⁄₃ = 4, which is less than 12.",difficulty:2,category:"concept"},

  // m8i-04-2 — Multiply Fractions & Mixed Numbers
  {id:"m8fc-04-2-1",islandId:"m8i-04-2",front:"What is the rule for multiplying two fractions?",
   back:"Multiply numerators together and multiply denominators together, then simplify.\n\na/b × c/d = (a × c)/(b × d)\n\nExample: ²⁄₃ × ³⁄₅ = ⁶⁄₁₅ = ²⁄₅",difficulty:1,category:"definition"},
  {id:"m8fc-04-2-2",islandId:"m8i-04-2",front:"Calculate ³⁄₄ × ⁸⁄₉, simplifying before multiplying.",
   back:"²⁄₃\n\nCancel cross-wise first: 3 and 9 share factor 3 → ¹⁄₄ × ⁸⁄₃. Then 4 and 8 share factor 4 → ¹⁄₁ × ²⁄₃ = ²⁄₃.\nCancelling first keeps numbers smaller.",difficulty:2,category:"calculation"},
  {id:"m8fc-04-2-3",islandId:"m8i-04-2",front:"How do you multiply mixed numbers?",
   back:"Convert each mixed number to an improper fraction first, then multiply numerators and denominators.\n\nExample: 1½ × 2¹⁄₃ = ³⁄₂ × ⁷⁄₃ = ²¹⁄₆ = ³½",difficulty:2,category:"concept"},
  {id:"m8fc-04-2-4",islandId:"m8i-04-2",front:"Calculate 2¹⁄₂ × 1³⁄₅.",
   back:"4\n\nConvert: 2½ = ⁵⁄₂ and 1³⁄₅ = ⁸⁄₅.\nMultiply: ⁵⁄₂ × ⁸⁄₅ = ⁴⁰⁄₁₀ = 4.",difficulty:2,category:"calculation"},
  {id:"m8fc-04-2-5",islandId:"m8i-04-2",front:"Calculate ¹⁄₃ × ¹⁄₄ × ³⁄₅.",
   back:"¹⁄₂₀\n\nMultiply all numerators: 1 × 1 × 3 = 3.\nMultiply all denominators: 3 × 4 × 5 = 60.\n³⁄₆₀ = ¹⁄₂₀.",difficulty:3,category:"calculation"},
  {id:"m8fc-04-2-6",islandId:"m8i-04-2",front:"A field is 2¹⁄₄ km long and ¹⁄₂ km wide. What is its area?",
   back:"1⅛ km²\n\n2¼ × ½ = ⁹⁄₄ × ½ = ⁹⁄₈ = 1⅛.\nArea = length × width, so the field has area 1⅛ km².",difficulty:3,category:"application"},

  // m8i-04-3 — Divide Fractions
  {id:"m8fc-04-3-1",islandId:"m8i-04-3",front:"What is the reciprocal of a fraction?",
   back:"The reciprocal is obtained by flipping the fraction (swapping numerator and denominator).\n\nThe reciprocal of ²⁄₅ is ⁵⁄₂.\nThe reciprocal of 4 (= ⁴⁄₁) is ¼.\nAny number × its reciprocal = 1.",difficulty:1,category:"definition"},
  {id:"m8fc-04-3-2",islandId:"m8i-04-3",front:"State the rule for dividing by a fraction.",
   back:"'Keep, Change, Flip' (KCF): keep the first fraction, change ÷ to ×, flip the second fraction.\n\na/b ÷ c/d = a/b × d/c\n\nExample: ²⁄₃ ÷ ¹⁄₄ = ²⁄₃ × ⁴⁄₁ = ⁸⁄₃ = 2²⁄₃",difficulty:1,category:"concept"},
  {id:"m8fc-04-3-3",islandId:"m8i-04-3",front:"Calculate 5 ÷ ¹⁄₄.",
   back:"20\n\n5 ÷ ¼ = 5 × 4 = 20.\nDividing by ¼ is the same as multiplying by 4 — it asks 'how many quarters fit in 5?'",difficulty:1,category:"calculation"},
  {id:"m8fc-04-3-4",islandId:"m8i-04-3",front:"Calculate ³⁄₄ ÷ ³⁄₈.",
   back:"2\n\nKeep ³⁄₄, change to ×, flip to ⁸⁄₃:\n³⁄₄ × ⁸⁄₃ = ²⁴⁄₁₂ = 2.",difficulty:2,category:"calculation"},
  {id:"m8fc-04-3-5",islandId:"m8i-04-3",front:"A ribbon ³⁄₄ m long is cut into pieces each ¹⁄₈ m long. How many pieces are there?",
   back:"6 pieces\n\n³⁄₄ ÷ ¹⁄₈ = ³⁄₄ × ⁸⁄₁ = ²⁴⁄₄ = 6.",difficulty:2,category:"application"},
  {id:"m8fc-04-3-6",islandId:"m8i-04-3",front:"Why does dividing by a proper fraction give an answer larger than the original number?",
   back:"Because you are asking 'how many of these small pieces fit?'\nDividing by a number less than 1 is the same as multiplying by its reciprocal, which is greater than 1.\n\nExample: 3 ÷ ¹⁄₂ = 6. Six halves fit inside 3.",difficulty:2,category:"concept"},

  // m8i-04-4 — Mixed Fraction Operations
  {id:"m8fc-04-4-1",islandId:"m8i-04-4",front:"How do you divide a mixed number by a fraction?",
   back:"Convert the mixed number to an improper fraction first, then use Keep-Change-Flip.\n\nExample: 2½ ÷ ⁵⁄₆ = ⁵⁄₂ ÷ ⁵⁄₆ = ⁵⁄₂ × ⁶⁄₅ = ³⁰⁄₁₀ = 3.",difficulty:2,category:"concept"},
  {id:"m8fc-04-4-2",islandId:"m8i-04-4",front:"Calculate 3¹⁄₃ ÷ 1²⁄₃.",
   back:"2\n\nConvert: 3⅓ = ¹⁰⁄₃ and 1²⁄₃ = ⁵⁄₃.\nDivide: ¹⁰⁄₃ ÷ ⁵⁄₃ = ¹⁰⁄₃ × ³⁄₅ = ³⁰⁄₁₅ = 2.",difficulty:2,category:"calculation"},
  {id:"m8fc-04-4-3",islandId:"m8i-04-4",front:"Evaluate: (¹⁄₂ + ¹⁄₃) × ⁶⁄₅",
   back:"1\n\nStep 1: ¹⁄₂ + ¹⁄₃ = ³⁄₆ + ²⁄₆ = ⁵⁄₆.\nStep 2: ⁵⁄₆ × ⁶⁄₅ = ³⁰⁄₃₀ = 1.",difficulty:3,category:"calculation"},
  {id:"m8fc-04-4-4",islandId:"m8i-04-4",front:"Estimate 2⁷⁄₈ ÷ 1¹⁄₉ and state whether the exact answer will be more or less than your estimate.",
   back:"About 3 (slightly less).\n\nRound to 3 ÷ 1 = 3.\nSince 2⁷⁄₈ < 3 and 1¹⁄₉ > 1, the exact answer is slightly less than 3.\nExact: ²³⁄₈ ÷ ¹⁰⁄₉ = ²³⁄₈ × ⁹⁄₁₀ = ²⁰⁷⁄₈₀ = 2⁴⁷⁄₈₀.",difficulty:3,category:"application"},
  {id:"m8fc-04-4-5",islandId:"m8i-04-4",front:"When solving a fraction word problem, how do you decide whether to multiply or divide?",
   back:"Multiply when you find a fraction OF a quantity (scaling down) or combine groups.\nDivide when you split a quantity INTO equal parts or ask 'how many fit?'\n\nExample: '¾ of 20' → multiply. 'Share ¾ into groups of ¼' → divide.",difficulty:2,category:"concept"},
  {id:"m8fc-04-4-6",islandId:"m8i-04-4",front:"Calculate ²⁄₃ × 1½ ÷ ¹⁄₄.",
   back:"4\n\nStep 1: ²⁄₃ × ³⁄₂ = ⁶⁄₆ = 1.\nStep 2: 1 ÷ ¼ = 1 × 4 = 4.",difficulty:3,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-04-1":[
    {q:"Calculate ⁵⁄₆ × 12.",opts:["8","9","10","11"],c:2,e:"⁵⁄₆ × 12: divide 12 by 6 to get 2, then multiply by 5 to get 10. So ⁵⁄₆ × 12 = 10."},
    {q:"What is ²⁄₇ of 35?",opts:["5","8","10","14"],c:2,e:"²⁄₇ of 35: 35 ÷ 7 = 5 (one seventh), then 5 × 2 = 10."},
    {q:"Which answer is the best estimate for 5 × ³⁄₇?",opts:["About 1","About 2","About 3","About 5"],c:1,e:"³⁄₇ is close to ½. So 5 × ½ = 2.5, making 'about 2' the closest option. Exact value is ¹⁵⁄₇ ≈ 2.1."},
    {q:"A jug holds ³⁄₄ litre. How many litres do 8 identical jugs hold?",opts:["4 litres","5 litres","6 litres","7 litres"],c:2,e:"³⁄₄ × 8 = ²⁴⁄₄ = 6 litres."},
    {q:"Multiplying a positive number by a proper fraction will always give a result that is…",opts:["Larger than the original","Equal to the original","Smaller than the original","Negative"],c:2,e:"A proper fraction is between 0 and 1, so multiplying by it scales the number down, giving a smaller result."}
  ],
  "m8i-04-2":[
    {q:"Calculate ²⁄₃ × ³⁄₄.",opts:["⁵⁄₇","⁶⁄₁₂","½","⁵⁄₁₂"],c:2,e:"²⁄₃ × ³⁄₄ = ⁶⁄₁₂ = ½. Cancel before multiplying: the 2 and 4 share factor 2, the 3s cancel, giving 1/2."},
    {q:"Calculate 1¹⁄₂ × 2²⁄₃.",opts:["3","3¼","4","4½"],c:2,e:"Convert: 1½ = ³⁄₂ and 2²⁄₃ = ⁸⁄₃. Multiply: ³⁄₂ × ⁸⁄₃ = ²⁴⁄₆ = 4."},
    {q:"What is the first step when multiplying two mixed numbers?",opts:["Find the LCM of the denominators","Convert both to improper fractions","Cross-multiply","Simplify both fractions"],c:1,e:"You must convert each mixed number to an improper fraction before you can multiply across the top and bottom."},
    {q:"Calculate ⁵⁄₆ × ³⁄₁₀.",opts:["¼","¹⁄₃","½","¹⁵⁄₁₆"],c:0,e:"⁵⁄₆ × ³⁄₁₀: cancel 5 with 10 → ¹⁄₂, and cancel 3 with 6 → ¹⁄₂. Product = ¹⁄₄."},
    {q:"A rectangle is 2¹⁄₄ m by ⁴⁄₅ m. What is its area?",opts:["1⁴⁄₅ m²","1¹⁄₅ m²","1⅗ m²","2 m²"],c:0,e:"2¼ × ⁴⁄₅ = ⁹⁄₄ × ⁴⁄₅ = ³⁶⁄₂₀ = ⁹⁄₅ = 1⁴⁄₅ m²."}
  ],
  "m8i-04-3":[
    {q:"What is the reciprocal of ²⁄₇?",opts:["²⁄₇","⁷⁄₂","2","⁷⁄₄"],c:1,e:"The reciprocal is formed by flipping the fraction: the reciprocal of ²⁄₇ is ⁷⁄₂."},
    {q:"Calculate 6 ÷ ¹⁄₃.",opts:["2","3","12","18"],c:3,e:"6 ÷ ¹⁄₃ = 6 × 3 = 18. Dividing by ¹⁄₃ is the same as multiplying by 3."},
    {q:"Calculate ⁴⁄₅ ÷ ²⁄₅.",opts:["⁸⁄₂₅","⁴⁄₁₀","2","⁵⁄₄"],c:2,e:"⁴⁄₅ ÷ ²⁄₅ = ⁴⁄₅ × ⁵⁄₂ = ²⁰⁄₁₀ = 2."},
    {q:"A plank of wood is ⁵⁄₆ m long. It is cut into pieces each ⁵⁄₁₂ m long. How many pieces are there?",opts:["2","3","4","5"],c:0,e:"⁵⁄₆ ÷ ⁵⁄₁₂ = ⁵⁄₆ × ¹²⁄₅ = ⁶⁰⁄₃₀ = 2 pieces."},
    {q:"Which statement about dividing by a fraction less than 1 is TRUE?",opts:["The result is always less than the original","The result is always equal to the original","The result is always greater than the original","The result is always negative"],c:2,e:"Dividing by a proper fraction (less than 1) is the same as multiplying by its reciprocal (greater than 1), so the result is always greater than the original."}
  ],
  "m8i-04-4":[
    {q:"Calculate 2½ ÷ ⁵⁄₈.",opts:["2","3","4","5"],c:2,e:"2½ = ⁵⁄₂. ⁵⁄₂ ÷ ⁵⁄₈ = ⁵⁄₂ × ⁸⁄₅ = ⁴⁰⁄₁₀ = 4."},
    {q:"Evaluate ¹⁄₂ × (⅔ + ¾).",opts:["¹⁷⁄₂₄","¹⁷⁄₄₈","⁷⁄₁₂","⁵⁄₁₂"],c:0,e:"Step 1: ²⁄₃ + ³⁄₄ = ⁸⁄₁₂ + ⁹⁄₁₂ = ¹⁷⁄₁₂. Step 2: ½ × ¹⁷⁄₁₂ = ¹⁷⁄₂₄."},
    {q:"Calculate 1⅔ ÷ 2½.",opts:["³⁄₅","²⁄₃","³⁄₄","1¹⁄₁₅"],c:1,e:"1⅔ = ⁵⁄₃ and 2½ = ⁵⁄₂. Apply KCF: ⁵⁄₃ × ²⁄₅ = ¹⁰⁄₁₅ = ²⁄₃."},
    {q:"Which of these is the correct first step when dividing 3¼ ÷ 1⅓?",opts:["Find the LCM of 4 and 3","Write 3¼ = ¹³⁄₄ and 1⅓ = ⁴⁄₃","Multiply the whole number parts: 3 × 1","Add the fractions: ¼ + ⅓"],c:1,e:"When dividing mixed numbers, always convert both to improper fractions first. 3¼ = ¹³⁄₄ and 1⅓ = ⁴⁄₃, then apply Keep-Change-Flip."},
    {q:"Estimate 3⅞ ÷ 1¹⁄₁₀. Which answer is closest?",opts:["About 2","About 3","About 4","About 5"],c:2,e:"Round to 4 ÷ 1 = 4. Since 3⅞ ≈ 4 and 1¹⁄₁₀ ≈ 1, the answer is approximately 4. Exact: ³¹⁄₈ ÷ ¹¹⁄₁₀ = ³¹⁄₈ × ¹⁰⁄₁₁ = ³¹⁰⁄₈₈ ≈ 3.5."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-04-1': `
<h2>Multiply Fractions &amp; Whole Numbers</h2>
<p>Multiplying a fraction by a whole number is one of the most useful fraction skills — it lets you find a fraction <strong>of</strong> any quantity. The key idea is that <em>multiplying by a fraction less than 1 makes the answer smaller</em>.</p>

<h3>Method: fraction of a whole number</h3>
<p>To find ²⁄₅ of 20, divide by the denominator first, then multiply by the numerator.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate ³⁄₄ of 28.</p>
<p><strong>Solution:</strong><br>
Step 1 — divide by the denominator: 28 ÷ 4 = 7.<br>
Step 2 — multiply by the numerator: 7 × 3 = <strong>21</strong>.<br>
Or using fraction notation: ³⁄₄ × ²⁸⁄₁ = ⁸⁴⁄₄ = 21.</p>
</div>

<h3>Writing the whole number as a fraction</h3>
<p>Any whole number <em>n</em> can be written as ⁿ⁄₁. Then multiply numerators together and denominators together.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate ⁵⁄₆ × 12.</p>
<p><strong>Solution:</strong><br>
⁵⁄₆ × ¹²⁄₁ = ⁶⁰⁄₆ = <strong>10</strong>.<br>
Alternatively: 12 ÷ 6 = 2, then 2 × 5 = 10.</p>
</div>

<h3>Estimating products with fractions</h3>
<p>Round the fraction to the nearest ½ or whole number to get a quick estimate. This is useful to check your answer makes sense.</p>
<div class="example-box">
<p><strong>Example:</strong> Estimate 7 × ⁴⁄₉.</p>
<p>⁴⁄₉ ≈ ½, so 7 × ½ = 3.5. Exact answer: ²⁸⁄₉ = 3¹⁄₉. ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Numerator</dt><dd>The top number of a fraction — how many parts we have.</dd>
<dt>Denominator</dt><dd>The bottom number of a fraction — how many equal parts the whole is split into.</dd>
<dt>Fraction of an amount</dt><dd>Divide by the denominator, then multiply by the numerator.</dd>
<dt>Proper fraction</dt><dd>A fraction where the numerator is less than the denominator (value less than 1).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Multiplying the denominator by the whole number — ✅ write the whole number as ⁿ⁄₁ and multiply across.</li>
<li>❌ Forgetting to simplify — ✅ always check if the answer can be reduced to its lowest terms.</li>
<li>❌ Expecting the answer to be bigger than the original — ✅ multiplying by a proper fraction always gives a smaller result.</li>
</ul>`,

'm8i-04-2': `
<h2>Multiply Fractions &amp; Mixed Numbers</h2>
<p>Once you can multiply fractions by whole numbers, the next step is multiplying <strong>two fractions</strong> together, and then tackling <strong>mixed numbers</strong> by converting them to improper fractions first.</p>

<h3>Multiplying two fractions</h3>
<p>Multiply the numerators together and the denominators together, then simplify.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate ²⁄₃ × ³⁄₅.</p>
<p><strong>Solution:</strong><br>
Numerators: 2 × 3 = 6.<br>
Denominators: 3 × 5 = 15.<br>
Result: ⁶⁄₁₅ = <strong>²⁄₅</strong>.</p>
</div>

<h3>Cancelling before multiplying (cross-cancelling)</h3>
<p>If a numerator and a denominator share a common factor, cancel first. This keeps the numbers smaller and reduces simplifying work at the end.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate ³⁄₄ × ⁸⁄₉.</p>
<p><strong>Solution using cross-cancelling:</strong><br>
3 and 9 share a factor of 3: divide both by 3 → ¹⁄₄ × ⁸⁄₃.<br>
4 and 8 share a factor of 4: divide both by 4 → ¹⁄₁ × ²⁄₃.<br>
Result: <strong>²⁄₃</strong>.</p>
</div>

<h3>Multiplying mixed numbers</h3>
<p>Always convert mixed numbers to improper fractions <em>before</em> multiplying. To convert: multiply the whole number by the denominator, then add the numerator.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate 1¹⁄₂ × 2²⁄₃.</p>
<p><strong>Solution:</strong><br>
Convert: 1½ = ³⁄₂ and 2²⁄₃ = ⁸⁄₃.<br>
Multiply: ³⁄₂ × ⁸⁄₃ = ²⁴⁄₆ = <strong>4</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Improper fraction</dt><dd>A fraction where the numerator is greater than or equal to the denominator (e.g. ⁷⁄₃).</dd>
<dt>Mixed number</dt><dd>A whole number combined with a proper fraction (e.g. 2¹⁄₃).</dd>
<dt>Cross-cancelling</dt><dd>Simplifying a numerator with a denominator from the other fraction before multiplying.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Multiplying whole number parts and fraction parts separately — ✅ always convert to improper fractions first.</li>
<li>❌ Forgetting to simplify the final answer — ✅ check for common factors after multiplying.</li>
<li>❌ Only cancelling within the same fraction — ✅ you can cancel across the multiplication sign too.</li>
</ul>`,

'm8i-04-3': `
<h2>Divide Fractions</h2>
<p>Dividing by a fraction might look tricky, but there is one simple rule: <strong>Keep, Change, Flip</strong> (KCF). Instead of dividing by a fraction, you multiply by its reciprocal.</p>

<h3>Reciprocals</h3>
<p>The <strong>reciprocal</strong> of a fraction is found by swapping the numerator and denominator. Every number (except 0) has a reciprocal, and a number multiplied by its reciprocal always equals 1.</p>
<ul>
  <li>Reciprocal of ³⁄₅ is ⁵⁄₃.</li>
  <li>Reciprocal of 4 (= ⁴⁄₁) is ¼.</li>
</ul>

<h3>The Keep-Change-Flip rule</h3>
<p>To divide by a fraction: <strong>Keep</strong> the first number, <strong>Change</strong> ÷ to ×, <strong>Flip</strong> the second fraction.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate ²⁄₃ ÷ ¹⁄₄.</p>
<p><strong>Solution:</strong><br>
Keep: ²⁄₃ &nbsp;|&nbsp; Change: ÷ → × &nbsp;|&nbsp; Flip: ¼ → ⁴⁄₁.<br>
²⁄₃ × ⁴⁄₁ = ⁸⁄₃ = <strong>2²⁄₃</strong>.</p>
</div>

<h3>Dividing a whole number by a fraction</h3>
<div class="example-box">
<p><strong>Example:</strong> Calculate 6 ÷ ¾.</p>
<p><strong>Solution:</strong><br>
6 ÷ ¾ = ⁶⁄₁ × ⁴⁄₃ = ²⁴⁄₃ = <strong>8</strong>.<br>
This means 8 three-quarter portions fit inside 6.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Reciprocal</dt><dd>A number's reciprocal is 1 divided by that number. For a fraction ᵃ⁄ᵦ, the reciprocal is ᵇ⁄ₐ.</dd>
<dt>Keep-Change-Flip (KCF)</dt><dd>The rule for dividing fractions: keep the first, change ÷ to ×, flip the second.</dd>
<dt>Division by a fraction</dt><dd>Asks "how many times does the divisor fit into the dividend?"</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Flipping the first fraction instead of the second — ✅ only flip the fraction you are <em>dividing by</em> (the one after ÷).</li>
<li>❌ Forgetting to convert whole numbers to fractions before applying KCF — ✅ write n as ⁿ⁄₁ first.</li>
<li>❌ Expecting the answer to be smaller — ✅ dividing by a proper fraction gives a <em>larger</em> result.</li>
</ul>`,

'm8i-04-4': `
<h2>Mixed Fraction Operations</h2>
<p>This island brings together all four operations with fractions and mixed numbers. The key is always to <strong>convert mixed numbers to improper fractions first</strong>, apply the correct operation, and simplify the result.</p>

<h3>Dividing mixed numbers</h3>
<p>Convert both mixed numbers to improper fractions, then apply Keep-Change-Flip.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate 3¹⁄₃ ÷ 1²⁄₃.</p>
<p><strong>Solution:</strong><br>
Convert: 3⅓ = ¹⁰⁄₃ and 1²⁄₃ = ⁵⁄₃.<br>
Keep-Change-Flip: ¹⁰⁄₃ × ³⁄₅ = ³⁰⁄₁₅ = <strong>2</strong>.</p>
</div>

<h3>Multi-step expressions with fractions</h3>
<p>Follow the order of operations (BODMAS): work out any <strong>brackets first</strong>, then multiplication and division, then addition and subtraction.</p>
<div class="example-box">
<p><strong>Example:</strong> Evaluate (¹⁄₂ + ¹⁄₃) × ⁶⁄₅.</p>
<p><strong>Solution:</strong><br>
Step 1 — bracket: ½ + ⅓ = ³⁄₆ + ²⁄₆ = ⁵⁄₆.<br>
Step 2 — multiply: ⁵⁄₆ × ⁶⁄₅ = ³⁰⁄₃₀ = <strong>1</strong>.</p>
</div>

<h3>Estimating products and quotients</h3>
<p>Round each mixed number to the nearest whole number (or ½) to quickly estimate. Then decide whether the exact answer will be slightly above or below the estimate.</p>
<div class="example-box">
<p><strong>Example:</strong> Estimate 2⁷⁄₈ × 3¹⁄₁₀.</p>
<p>Round to 3 × 3 = 9. Since both values are slightly less than the rounded numbers, the exact answer is slightly less than 9.</p>
</div>

<h3>Choosing the correct operation</h3>
<ul>
  <li><strong>Multiply</strong> when finding a fraction <em>of</em> a quantity or combining equal groups.</li>
  <li><strong>Divide</strong> when splitting into equal parts or asking "how many fit?"</li>
</ul>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>BODMAS</dt><dd>The order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction.</dd>
<dt>Improper fraction</dt><dd>A fraction with numerator ≥ denominator, e.g. ¹¹⁄₄.</dd>
<dt>Reciprocal</dt><dd>Flip a fraction to get its reciprocal; used in division.</dd>
<dt>Estimate</dt><dd>A quick approximate answer used to check reasonableness.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Skipping conversion to improper fractions — ✅ always convert mixed numbers before multiplying or dividing.</li>
<li>❌ Ignoring BODMAS in multi-step problems — ✅ brackets must be evaluated before multiplication or division.</li>
<li>❌ Applying KCF to multiplication — ✅ KCF (Keep-Change-Flip) is only used when <em>dividing</em> by a fraction.</li>
</ul>`

});
