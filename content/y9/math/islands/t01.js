// content/y9/math/islands/t01.js — Year 9 Maths Topic 1: Surds
// Islands m9i-01-1 .. m9i-01-4. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m9i-01-1 — Simplifying Surds
  {id:"m9fc-01-1-1", islandId:"m9i-01-1", front:"What is a surd?",
   back:"A surd is a root that is irrational — it cannot be written exactly as a whole number or fraction.\n\n√2 and √5 are surds.\n√9 = 3 is NOT a surd, because it simplifies to a rational number.", difficulty:1, category:"definition"},
  {id:"m9fc-01-1-2", islandId:"m9i-01-1", front:"How do you simplify a surd like √n?",
   back:"Find the LARGEST square factor of n, then split the root.\n\n√n = √(square × rest) = √square × √rest.\nExample: √50 = √(25 × 2) = 5√2.", difficulty:1, category:"concept"},
  {id:"m9fc-01-1-3", islandId:"m9i-01-1", front:"Simplify √50.",
   back:"5√2\n\n50 = 25 × 2, and √25 = 5, so √50 = 5√2.", difficulty:1, category:"calculation"},
  {id:"m9fc-01-1-4", islandId:"m9i-01-1", front:"Simplify √72.",
   back:"6√2\n\nThe largest square factor of 72 is 36: 72 = 36 × 2.\n√72 = √36 × √2 = 6√2.", difficulty:2, category:"calculation"},
  {id:"m9fc-01-1-5", islandId:"m9i-01-1", front:"Is √15 in its simplest form?",
   back:"Yes.\n\n15 = 3 × 5 — neither factor is a perfect square, so √15 cannot be simplified.", difficulty:2, category:"application"},
  {id:"m9fc-01-1-6", islandId:"m9i-01-1", front:"Simplify √200.",
   back:"10√2\n\n200 = 100 × 2, and √100 = 10, so √200 = 10√2.\nTip: always take out the LARGEST square factor in one step.", difficulty:2, category:"calculation"},

  // m9i-01-2 — Adding & Subtracting Surds
  {id:"m9fc-01-2-1", islandId:"m9i-01-2", front:"What are 'like surds'?",
   back:"Surds with the SAME number under the root sign.\n\n3√2 and 7√2 are like surds.\n√2 and √3 are NOT like surds.", difficulty:1, category:"concept"},
  {id:"m9fc-01-2-2", islandId:"m9i-01-2", front:"Work out 3√2 + 5√2.",
   back:"8√2\n\nAdd the numbers in front (the coefficients): 3 + 5 = 8. The √2 stays the same.", difficulty:1, category:"calculation"},
  {id:"m9fc-01-2-3", islandId:"m9i-01-2", front:"Work out 7√5 − 2√5.",
   back:"5√5\n\nSubtract the coefficients: 7 − 2 = 5. The √5 is unchanged.", difficulty:1, category:"calculation"},
  {id:"m9fc-01-2-4", islandId:"m9i-01-2", front:"Can 2√3 + 4√5 be simplified to one term?",
   back:"No.\n\n√3 and √5 are different (unlike surds), so the two terms cannot be combined. The answer stays 2√3 + 4√5.", difficulty:2, category:"application"},
  {id:"m9fc-01-2-5", islandId:"m9i-01-2", front:"Work out √8 + √2.",
   back:"3√2\n\nSimplify first: √8 = 2√2. Then 2√2 + √2 = 3√2.\nAlways simplify each surd before deciding if they are like terms.", difficulty:2, category:"calculation"},
  {id:"m9fc-01-2-6", islandId:"m9i-01-2", front:"Write the rule for adding like surds.",
   back:"a√c + b√c = (a + b)√c\n\nYou add the coefficients and keep the same surd. Subtraction works the same way.", difficulty:1, category:"concept"},

  // m9i-01-3 — Multiplying & Dividing Surds
  {id:"m9fc-01-3-1", islandId:"m9i-01-3", front:"State the product rule for surds.",
   back:"√a × √b = √(ab)\n\nMultiply the numbers under the roots together.\nExample: √3 × √5 = √15.", difficulty:1, category:"definition"},
  {id:"m9fc-01-3-2", islandId:"m9i-01-3", front:"Work out √3 × √12.",
   back:"6\n\n√3 × √12 = √36 = 6. The product happened to be a perfect square.", difficulty:2, category:"calculation"},
  {id:"m9fc-01-3-3", islandId:"m9i-01-3", front:"What is (√7)²?",
   back:"7\n\nSquaring a square root undoes it: (√7)² = √7 × √7 = √49 = 7.", difficulty:1, category:"calculation"},
  {id:"m9fc-01-3-4", islandId:"m9i-01-3", front:"Work out 2√3 × 5√2.",
   back:"10√6\n\nMultiply the coefficients: 2 × 5 = 10. Multiply the surds: √3 × √2 = √6. Result: 10√6.", difficulty:2, category:"calculation"},
  {id:"m9fc-01-3-5", islandId:"m9i-01-3", front:"State the quotient rule for surds.",
   back:"√a ÷ √b = √(a/b)\n\nDivide the numbers under the roots.\nExample: √20 ÷ √5 = √4 = 2.", difficulty:1, category:"definition"},
  {id:"m9fc-01-3-6", islandId:"m9i-01-3", front:"Work out √20 ÷ √5.",
   back:"2\n\n√20 ÷ √5 = √(20 ÷ 5) = √4 = 2.", difficulty:1, category:"calculation"},

  // m9i-01-4 — Rationalising the Denominator
  {id:"m9fc-01-4-1", islandId:"m9i-01-4", front:"What does 'rationalise the denominator' mean?",
   back:"It means rewriting a fraction so there is NO surd on the bottom.\n\nWe do this because a rational (whole-number) denominator is the standard, tidier form.", difficulty:1, category:"concept"},
  {id:"m9fc-01-4-2", islandId:"m9i-01-4", front:"How do you rationalise a fraction like a/√b?",
   back:"Multiply the top AND bottom by √b.\n\nThis works because √b × √b = b, which is rational.\na/√b = a√b / b.", difficulty:2, category:"concept"},
  {id:"m9fc-01-4-3", islandId:"m9i-01-4", front:"Rationalise 1/√2.",
   back:"√2 / 2\n\nMultiply top and bottom by √2: (1 × √2)/(√2 × √2) = √2/2.", difficulty:2, category:"calculation"},
  {id:"m9fc-01-4-4", islandId:"m9i-01-4", front:"Rationalise 3/√5.",
   back:"3√5 / 5\n\nMultiply top and bottom by √5: (3 × √5)/(√5 × √5) = 3√5/5.", difficulty:2, category:"calculation"},
  {id:"m9fc-01-4-5", islandId:"m9i-01-4", front:"Rationalise and simplify 6/√3.",
   back:"2√3\n\nMultiply by √3/√3: 6√3/3. Then 6 ÷ 3 = 2, so the answer simplifies to 2√3.", difficulty:3, category:"application"},
  {id:"m9fc-01-4-6", islandId:"m9i-01-4", front:"Why does multiplying by √b/√b rationalise a denominator of √b?",
   back:"Because √b × √b = b.\n\n√b/√b is equal to 1, so the fraction's value is unchanged, but the denominator becomes the rational number b.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS (test fallback) ───────────────────────────────────
Object.assign(QUESTIONS, {
  "m9i-01-1": [
    {q:"Simplify √50.", opts:["5√2","2√5","25√2","√50"], c:0,
     e:"50 = 25 × 2 and √25 = 5, so √50 = 5√2. 2√5 = √20, which is too small."},
    {q:"Simplify √48.", opts:["4√3","2√6","16√3","8√3"], c:0,
     e:"The largest square factor of 48 is 16: 48 = 16 × 3, so √48 = 4√3."},
    {q:"Which surd is already in its simplest form?", opts:["√18","√20","√21","√50"], c:2,
     e:"21 = 3 × 7 has no square factor. The others do: 18 = 9×2, 20 = 4×5, 50 = 25×2."},
    {q:"Simplify √200.", opts:["10√2","2√10","100√2","20√2"], c:0,
     e:"200 = 100 × 2 and √100 = 10, so √200 = 10√2."},
    {q:"Simplify √72.", opts:["6√2","8√2","12√2","36√2"], c:0,
     e:"72 = 36 × 2 and √36 = 6, so √72 = 6√2."}
  ],
  "m9i-01-2": [
    {q:"Work out 3√7 + 4√7.", opts:["7√7","7√14","12√7","7√49"], c:0,
     e:"Like surds: add the coefficients 3 + 4 = 7 and keep √7, giving 7√7. The number under the root never changes."},
    {q:"Work out 9√3 − 5√3.", opts:["4√3","14√3","4√9","45√3"], c:0,
     e:"Subtract the coefficients: 9 − 5 = 4, so 9√3 − 5√3 = 4√3."},
    {q:"Work out √12 + √3.", opts:["3√3","√15","2√15","4√3"], c:0,
     e:"Simplify first: √12 = 2√3. Then 2√3 + √3 = 3√3. You cannot just add the numbers under the roots."},
    {q:"Which expression can be simplified to a single surd term?", opts:["2√3 + 5√3","√2 + √3","4√5 − √7","√6 + √10"], c:0,
     e:"2√3 + 5√3 are like surds, so they combine to 7√3. The others all mix unlike surds, which cannot be combined."},
    {q:"Work out √50 − √18.", opts:["2√2","√32","8√2","2√68"], c:0,
     e:"Simplify each: √50 = 5√2 and √18 = 3√2. Then 5√2 − 3√2 = 2√2."}
  ],
  "m9i-01-3": [
    {q:"Work out √6 × √2.", opts:["2√3","√8","6","√6"], c:0,
     e:"√6 × √2 = √12, and √12 = √(4 × 3) = 2√3."},
    {q:"What is (√11)²?", opts:["11","√11","121","2√11"], c:0,
     e:"Squaring a square root undoes it: (√11)² = √11 × √11 = √121 = 11."},
    {q:"Work out 3√2 × 4√5.", opts:["12√10","7√10","12√7","12√100"], c:0,
     e:"Multiply coefficients 3 × 4 = 12 and surds √2 × √5 = √10, giving 12√10."},
    {q:"Work out √45 ÷ √5.", opts:["3","9","√50","√40"], c:0,
     e:"√45 ÷ √5 = √(45 ÷ 5) = √9 = 3."},
    {q:"Work out √8 × √2.", opts:["4","√10","2√2","16"], c:0,
     e:"√8 × √2 = √16 = 4."}
  ],
  "m9i-01-4": [
    {q:"Rationalise 1/√3.", opts:["√3/3","3/√3","√3","1/3"], c:0,
     e:"Multiply top and bottom by √3: (1 × √3)/(√3 × √3) = √3/3."},
    {q:"Rationalise 5/√2.", opts:["5√2/2","5/2","√10/2","2√5/5"], c:0,
     e:"Multiply top and bottom by √2: (5 × √2)/(√2 × √2) = 5√2/2."},
    {q:"To rationalise a/√7, what do you multiply the fraction by?", opts:["√7/√7","7/7","√7","1/√7"], c:0,
     e:"Multiply by √7/√7 (which equals 1) so the denominator becomes √7 × √7 = 7."},
    {q:"Rationalise and simplify 8/√2.", opts:["4√2","8√2","4","√8"], c:0,
     e:"Multiply by √2/√2: 8√2/2. Then 8 ÷ 2 = 4, so the answer is 4√2."},
    {q:"Rationalise 2/√5.", opts:["2√5/5","2/5","√10/5","5√2/2"], c:0,
     e:"Multiply top and bottom by √5: (2 × √5)/(√5 × √5) = 2√5/5."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {
  "m9i-01-1": `<h2>Simplifying Surds</h2>
<p>A <strong>surd</strong> is a root that does not work out to a whole number, like √2 or √5. We leave surds in root form because their decimals never end and never repeat.</p>
<p>To <strong>simplify</strong> a surd, look for the <strong>largest square factor</strong> of the number under the root (4, 9, 16, 25, 36, …), then split the root into two.</p>
<h3>Worked example</h3>
<p>Simplify √72.</p>
<ul>
<li>The largest square factor of 72 is 36, because 72 = 36 × 2.</li>
<li>√72 = √36 × √2 = 6√2.</li>
</ul>
<div class="lesson-diagram" data-diagram="math-surd-simplify"><p class="diagram-caption">√72 = √(36 × 2) = √36 × √2 = 6√2</p></div>
<h3>Common mistake</h3>
<p>Taking out a square factor that is <em>not</em> the largest leaves more work to do. √72 = √(4 × 18) = 2√18 is correct but not finished, because √18 still simplifies. Always take the largest square factor in one step.</p>`,

  "m9i-01-2": `<h2>Adding &amp; Subtracting Surds</h2>
<p>You can only add or subtract surds when the number under the root is the <strong>same</strong> — these are called <strong>like surds</strong>. Treat √2 like a unit (similar to collecting like terms in algebra).</p>
<p><strong>Rule:</strong> a√c + b√c = (a + b)√c. Add or subtract the numbers in front; the surd stays the same.</p>
<h3>Worked example</h3>
<p>Work out √50 − √18.</p>
<ul>
<li>Simplify each surd first: √50 = 5√2 and √18 = 3√2.</li>
<li>Now they are like surds: 5√2 − 3√2 = 2√2.</li>
</ul>
<h3>Common mistake</h3>
<p>√50 − √18 is <em>not</em> √(50 − 18) = √32. You cannot add or subtract the numbers under the roots — you must simplify and collect like surds.</p>`,

  "m9i-01-3": `<h2>Multiplying &amp; Dividing Surds</h2>
<p>Two simple rules do all the work:</p>
<ul>
<li><strong>Product rule:</strong> √a × √b = √(ab)</li>
<li><strong>Quotient rule:</strong> √a ÷ √b = √(a/b)</li>
</ul>
<p>When there are numbers in front (coefficients), multiply the coefficients together and the surds together separately.</p>
<h3>Worked example</h3>
<p>Work out 2√3 × 5√2.</p>
<ul>
<li>Coefficients: 2 × 5 = 10.</li>
<li>Surds: √3 × √2 = √6.</li>
<li>Answer: 10√6.</li>
</ul>
<p>A useful special case: (√a)² = √a × √a = a. For example (√7)² = 7.</p>
<h3>Common mistake</h3>
<p>Always simplify the final surd. √6 × √8 = √48, and √48 = 4√3 — leaving it as √48 is not fully simplified.</p>`,

  "m9i-01-4": `<h2>Rationalising the Denominator</h2>
<p>A fraction with a surd on the bottom, like 1/√2, is not in standard form. <strong>Rationalising</strong> means rewriting it so the denominator is a rational number.</p>
<p><strong>Method:</strong> multiply the top and bottom by the surd in the denominator. This works because √b × √b = b, which is rational, and multiplying top and bottom by the same thing does not change the value.</p>
<h3>Worked example</h3>
<p>Rationalise and simplify 6/√3.</p>
<ul>
<li>Multiply top and bottom by √3: (6 × √3)/(√3 × √3) = 6√3/3.</li>
<li>Simplify: 6 ÷ 3 = 2, so the answer is 2√3.</li>
</ul>
<h3>Common mistake</h3>
<p>Don't forget the final simplify step. 6√3/3 is correct but not finished — the 6 and 3 cancel to give 2√3.</p>`
});
