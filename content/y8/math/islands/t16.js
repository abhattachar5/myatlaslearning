// math-y8-t16.js — Year 8 Maths Topic 16: Solving Equations
// Islands: m8i-16-1 .. m8i-16-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-16-1 — Solve One-Step Equations
  {id:"m8fc-16-1-1",islandId:"m8i-16-1",front:"What is an inverse operation, and why do we use it to solve equations?",
   back:"An inverse operation undoes another operation:\n• Addition ↔ Subtraction\n• Multiplication ↔ Division\n\nWe apply the inverse to both sides to isolate the variable.\nExample: x + 7 = 15 → subtract 7 from both sides → x = 8.",difficulty:1,category:"concept"},
  {id:"m8fc-16-1-2",islandId:"m8i-16-1",front:"Solve: x + 9 = 20",
   back:"x = 11\n\nSubtract 9 from both sides:\nx + 9 − 9 = 20 − 9\nx = 11\n\nCheck: 11 + 9 = 20 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-16-1-3",islandId:"m8i-16-1",front:"Solve: y − 6 = 13",
   back:"y = 19\n\nAdd 6 to both sides:\ny − 6 + 6 = 13 + 6\ny = 19\n\nCheck: 19 − 6 = 13 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-16-1-4",islandId:"m8i-16-1",front:"Solve: 4m = 28",
   back:"m = 7\n\nDivide both sides by 4:\n4m ÷ 4 = 28 ÷ 4\nm = 7\n\nCheck: 4 × 7 = 28 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-16-1-5",islandId:"m8i-16-1",front:"Solve: n ÷ 5 = 9",
   back:"n = 45\n\nMultiply both sides by 5:\n(n ÷ 5) × 5 = 9 × 5\nn = 45\n\nCheck: 45 ÷ 5 = 9 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-16-1-6",islandId:"m8i-16-1",front:"A number increased by 14 equals 31. Write and solve the equation.",
   back:"Equation: x + 14 = 31\n\nSubtract 14 from both sides:\nx = 31 − 14\nx = 17\n\nCheck: 17 + 14 = 31 ✓",difficulty:2,category:"application"},

  // m8i-16-2 — Solve Two-Step Equations
  {id:"m8fc-16-2-1",islandId:"m8i-16-2",front:"What is the correct order of inverse operations when solving a two-step equation such as 2x + 3 = 11?",
   back:"Reverse BODMAS: deal with addition/subtraction first, then multiplication/division.\n\nStep 1 — Subtract 3 from both sides: 2x = 8\nStep 2 — Divide both sides by 2: x = 4\n\nCheck: 2(4) + 3 = 11 ✓",difficulty:2,category:"concept"},
  {id:"m8fc-16-2-2",islandId:"m8i-16-2",front:"Solve: 3x + 5 = 20",
   back:"x = 5\n\nStep 1: Subtract 5 from both sides → 3x = 15\nStep 2: Divide both sides by 3 → x = 5\n\nCheck: 3(5) + 5 = 15 + 5 = 20 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-2-3",islandId:"m8i-16-2",front:"Solve: 4y − 7 = 17",
   back:"y = 6\n\nStep 1: Add 7 to both sides → 4y = 24\nStep 2: Divide both sides by 4 → y = 6\n\nCheck: 4(6) − 7 = 24 − 7 = 17 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-2-4",islandId:"m8i-16-2",front:"Solve: n/3 + 4 = 10",
   back:"n = 18\n\nStep 1: Subtract 4 from both sides → n/3 = 6\nStep 2: Multiply both sides by 3 → n = 18\n\nCheck: 18/3 + 4 = 6 + 4 = 10 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-2-5",islandId:"m8i-16-2",front:"Solve: 5p − 3 = 22",
   back:"p = 5\n\nStep 1: Add 3 to both sides → 5p = 25\nStep 2: Divide both sides by 5 → p = 5\n\nCheck: 5(5) − 3 = 25 − 3 = 22 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-2-6",islandId:"m8i-16-2",front:"A taxi charges £3 plus £2 per mile. The total fare is £11. Write and solve an equation to find the number of miles.",
   back:"Equation: 2m + 3 = 11\n\nStep 1: Subtract 3 from both sides → 2m = 8\nStep 2: Divide both sides by 2 → m = 4\n\nThe journey was 4 miles.\nCheck: 2(4) + 3 = 8 + 3 = 11 ✓",difficulty:3,category:"application"},

  // m8i-16-3 — Equations with Like Terms & Distributive Property
  {id:"m8fc-16-3-1",islandId:"m8i-16-3",front:"Solve: 3x + 2x = 25",
   back:"x = 5\n\nStep 1: Collect like terms → 5x = 25\nStep 2: Divide both sides by 5 → x = 5\n\nCheck: 3(5) + 2(5) = 15 + 10 = 25 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-3-2",islandId:"m8i-16-3",front:"Solve: 7y − 2y + 3 = 23",
   back:"y = 4\n\nStep 1: Collect like terms → 5y + 3 = 23\nStep 2: Subtract 3 from both sides → 5y = 20\nStep 3: Divide both sides by 5 → y = 4\n\nCheck: 7(4) − 2(4) + 3 = 28 − 8 + 3 = 23 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-3-3",islandId:"m8i-16-3",front:"Solve: 2(x + 4) = 18",
   back:"x = 5\n\nStep 1: Expand the bracket → 2x + 8 = 18\nStep 2: Subtract 8 from both sides → 2x = 10\nStep 3: Divide both sides by 2 → x = 5\n\nCheck: 2(5 + 4) = 2(9) = 18 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-3-4",islandId:"m8i-16-3",front:"Solve: 3(2x − 1) = 21",
   back:"x = 4\n\nStep 1: Expand the bracket → 6x − 3 = 21\nStep 2: Add 3 to both sides → 6x = 24\nStep 3: Divide both sides by 6 → x = 4\n\nCheck: 3(2×4 − 1) = 3(8 − 1) = 3(7) = 21 ✓",difficulty:3,category:"calculation"},
  {id:"m8fc-16-3-5",islandId:"m8i-16-3",front:"Solve: 4(x + 2) + x = 28",
   back:"x = 4\n\nStep 1: Expand → 4x + 8 + x = 28\nStep 2: Collect like terms → 5x + 8 = 28\nStep 3: Subtract 8 → 5x = 20\nStep 4: Divide by 5 → x = 4\n\nCheck: 4(4 + 2) + 4 = 4(6) + 4 = 24 + 4 = 28 ✓",difficulty:3,category:"calculation"},
  {id:"m8fc-16-3-6",islandId:"m8i-16-3",front:"What is the first step when solving an equation that has brackets?",
   back:"Expand the brackets using the distributive property.\n\nMultiply the term outside by every term inside:\na(b + c) = ab + ac\n\nExample: 3(x + 5) = 3x + 15\n\nOnce expanded, collect any like terms, then use inverse operations to solve.",difficulty:1,category:"concept"},

  // m8i-16-4 — Solve Multi-Step Equations
  {id:"m8fc-16-4-1",islandId:"m8i-16-4",front:"What are the properties of equality, and how do they help solve equations?",
   back:"Properties of equality: whatever you do to one side of an equation, you must do to the other.\n\n• Addition property: if a = b, then a + c = b + c\n• Subtraction property: if a = b, then a − c = b − c\n• Multiplication property: if a = b, then ac = bc\n• Division property: if a = b, then a/c = b/c (c ≠ 0)\n\nThese keep the equation balanced at every step.",difficulty:2,category:"concept"},
  {id:"m8fc-16-4-2",islandId:"m8i-16-4",front:"Solve: 2(3x − 4) + 5x = 25",
   back:"x = 3\n\nStep 1: Expand → 6x − 8 + 5x = 25\nStep 2: Collect like terms → 11x − 8 = 25\nStep 3: Add 8 to both sides → 11x = 33\nStep 4: Divide by 11 → x = 3\n\nCheck: 2(9 − 4) + 15 = 2(5) + 15 = 10 + 15 = 25 ✓",difficulty:3,category:"calculation"},
  {id:"m8fc-16-4-3",islandId:"m8i-16-4",front:"Solve: 3(x + 2) − 2(x − 1) = 13",
   back:"x = 5\n\nStep 1: Expand → 3x + 6 − 2x + 2 = 13\nStep 2: Collect like terms → x + 8 = 13\nStep 3: Subtract 8 from both sides → x = 5\n\nCheck: 3(7) − 2(4) = 21 − 8 = 13 ✓",difficulty:3,category:"calculation"},
  {id:"m8fc-16-4-4",islandId:"m8i-16-4",front:"Solve: 4(2x + 3) = 5x + 24",
   back:"x = 4\n\nStep 1: Expand → 8x + 12 = 5x + 24\nStep 2: Subtract 5x from both sides → 3x + 12 = 24\nStep 3: Subtract 12 from both sides → 3x = 12\nStep 4: Divide by 3 → x = 4\n\nCheck: 4(8 + 3) = 4(11) = 44 and 5(4) + 24 = 20 + 24 = 44 ✓",difficulty:3,category:"calculation"},
  {id:"m8fc-16-4-5",islandId:"m8i-16-4",front:"Solve: 5x + 3 = 3x + 11",
   back:"x = 4\n\nStep 1: Subtract 3x from both sides → 2x + 3 = 11\nStep 2: Subtract 3 from both sides → 2x = 8\nStep 3: Divide by 2 → x = 4\n\nCheck: 5(4) + 3 = 23 and 3(4) + 11 = 23 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-16-4-6",islandId:"m8i-16-4",front:"The perimeter of a rectangle is 38 cm. Its length is (2x + 1) cm and its width is x cm. Find x and both dimensions.",
   back:"x = 6, width = 6 cm, length = 13 cm\n\nPerimeter equation: 2(2x + 1) + 2x = 38\nStep 1: Expand → 4x + 2 + 2x = 38\nStep 2: Collect like terms → 6x + 2 = 38\nStep 3: Subtract 2 → 6x = 36\nStep 4: Divide by 6 → x = 6\n\nWidth = 6 cm, length = 2(6) + 1 = 13 cm.\nCheck: 2(13) + 2(6) = 26 + 12 = 38 ✓",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-16-1":[
    {q:"Solve: x + 13 = 30",opts:["x = 43","x = 17","x = 15","x = 27"],c:1,e:"Subtract 13 from both sides: x = 30 − 13 = 17. Check: 17 + 13 = 30 ✓"},
    {q:"Solve: 6m = 54",opts:["m = 9","m = 48","m = 60","m = 8"],c:0,e:"Divide both sides by 6: m = 54 ÷ 6 = 9. Check: 6 × 9 = 54 ✓"},
    {q:"Solve: y − 8 = 15",opts:["y = 7","y = 23","y = 17","y = 13"],c:1,e:"Add 8 to both sides: y = 15 + 8 = 23. Check: 23 − 8 = 15 ✓"},
    {q:"Solve: n ÷ 4 = 12",opts:["n = 3","n = 16","n = 48","n = 8"],c:2,e:"Multiply both sides by 4: n = 12 × 4 = 48. Check: 48 ÷ 4 = 12 ✓"},
    {q:"A number decreased by 9 equals 21. What is the number?",opts:["12","29","30","13"],c:2,e:"Equation: x − 9 = 21. Add 9 to both sides: x = 30. Check: 30 − 9 = 21 ✓"}
  ],
  "m8i-16-2":[
    {q:"Solve: 2x + 5 = 19",opts:["x = 12","x = 7","x = 4","x = 9"],c:1,e:"Subtract 5: 2x = 14. Divide by 2: x = 7. Check: 2(7)+5=14+5=19 ✓"},
    {q:"Solve: 3y − 4 = 11",opts:["y = 5","y = 3","y = 7","y = 9"],c:0,e:"Add 4: 3y = 15. Divide by 3: y = 5. Check: 3(5)−4=15−4=11 ✓"},
    {q:"Solve: n/2 + 6 = 13",opts:["n = 14","n = 38","n = 3","n = 19"],c:0,e:"Subtract 6: n/2 = 7. Multiply by 2: n = 14. Check: 14/2+6=7+6=13 ✓"},
    {q:"A cinema ticket costs £p. Two tickets plus a £1.50 booking fee cost £13.50. What is the price of one ticket?",opts:["£6.00","£7.50","£6.50","£5.00"],c:0,e:"Equation: 2p + 1.5 = 13.5. Subtract 1.5: 2p = 12. Divide by 2: p = 6. One ticket costs £6.00."},
    {q:"Solve: 5k − 8 = 22",opts:["k = 6","k = 3","k = 2","k = 14"],c:0,e:"Add 8: 5k = 30. Divide by 5: k = 6. Check: 5(6)−8=30−8=22 ✓"}
  ],
  "m8i-16-3":[
    {q:"Solve: 5x + 2x = 42",opts:["x = 6","x = 7","x = 8","x = 5"],c:0,e:"Collect like terms: 7x = 42. Divide by 7: x = 6. Check: 5(6)+2(6)=30+12=42 ✓"},
    {q:"Solve: 3(x + 2) = 18",opts:["x = 4","x = 6","x = 8","x = 5"],c:0,e:"Expand: 3x + 6 = 18. Subtract 6: 3x = 12. Divide by 3: x = 4. Check: 3(4+2)=3(6)=18 ✓"},
    {q:"Solve: 4y − y + 5 = 26",opts:["y = 7","y = 9","y = 3","y = 5"],c:0,e:"Collect like terms: 3y + 5 = 26. Subtract 5: 3y = 21. Divide by 3: y = 7. Check: 4(7)−7+5=28−7+5=26 ✓"},
    {q:"Solve: 2(3x − 5) = 14",opts:["x = 4","x = 2","x = 6","x = 3"],c:0,e:"Expand: 6x − 10 = 14. Add 10: 6x = 24. Divide by 6: x = 4. Check: 2(12−5)=2(7)=14 ✓"},
    {q:"Which is the correct first step when solving 5(x − 3) = 20?",opts:["Expand to get 5x − 15 = 20","Add 3 to both sides","Divide both sides by 5","Subtract 20 from the right"],c:0,e:"The first step is to expand the bracket using the distributive property: 5(x−3) = 5x − 15, giving 5x − 15 = 20."}
  ],
  "m8i-16-4":[
    {q:"Solve: 3(2x + 1) + x = 24",opts:["x = 3","x = 4","x = 5","x = 6"],c:0,e:"Expand: 6x + 3 + x = 24. Collect: 7x + 3 = 24. Subtract 3: 7x = 21. Divide by 7: x = 3. Check: 3(7)+3=21+3=24 ✓"},
    {q:"Solve: 5x + 4 = 3x + 12",opts:["x = 4","x = 2","x = 8","x = 6"],c:0,e:"Subtract 3x: 2x + 4 = 12. Subtract 4: 2x = 8. Divide by 2: x = 4. Check: 5(4)+4=24 and 3(4)+12=24 ✓"},
    {q:"Solve: 2(x + 5) − 3(x − 1) = 8",opts:["x = 5","x = 9","x = 3","x = 7"],c:0,e:"Expand: 2x + 10 − 3x + 3 = 8. Collect like terms: −x + 13 = 8. Subtract 13 from both sides: −x = −5. Multiply both sides by −1: x = 5. Check: 2(5+5)−3(5−1) = 2(10)−3(4) = 20−12 = 8 ✓"},
    {q:"Solve: 4(x + 3) = 2x + 22",opts:["x = 4","x = 5","x = 6","x = 8"],c:1,e:"Expand: 4x + 12 = 2x + 22. Subtract 2x: 2x + 12 = 22. Subtract 12: 2x = 10. Divide by 2: x = 5. Check: 4(8)=32 and 2(5)+22=32 ✓"},
    {q:"The sum of two consecutive even numbers is 54. What is the smaller number?",opts:["24","26","28","22"],c:1,e:"Let smaller = n, larger = n+2. Equation: n + (n+2) = 54 → 2n + 2 = 54 → 2n = 52 → n = 26. Check: 26 + 28 = 54 ✓"}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-16-1': `
<h2>Solve One-Step Equations</h2>
<p>An <strong>equation</strong> is a mathematical statement that two expressions are equal. Solving an equation means finding the value of the variable that makes it true. We use <strong>inverse operations</strong> to isolate the variable — keeping the equation balanced by doing the same thing to both sides.</p>

<h3>The balance model</h3>
<p>Think of an equation as a set of scales. Whatever you add, subtract, multiply or divide on one side, you must do the same on the other side to keep the scales balanced.</p>

<h3>Solving addition and subtraction equations</h3>
<div class="example-box">
<p><strong>Example 1:</strong> Solve x + 9 = 20</p>
<p>The inverse of + 9 is − 9. Subtract 9 from both sides:<br>
x + 9 − 9 = 20 − 9<br>
<strong>x = 11</strong><br>
Check: 11 + 9 = 20 ✓</p>
</div>
<div class="example-box">
<p><strong>Example 2:</strong> Solve y − 6 = 13</p>
<p>The inverse of − 6 is + 6. Add 6 to both sides:<br>
y − 6 + 6 = 13 + 6<br>
<strong>y = 19</strong><br>
Check: 19 − 6 = 13 ✓</p>
</div>

<h3>Solving multiplication and division equations</h3>
<div class="example-box">
<p><strong>Example 3:</strong> Solve 4m = 28</p>
<p>The inverse of × 4 is ÷ 4. Divide both sides by 4:<br>
4m ÷ 4 = 28 ÷ 4<br>
<strong>m = 7</strong><br>
Check: 4 × 7 = 28 ✓</p>
</div>
<div class="example-box">
<p><strong>Example 4:</strong> Solve n ÷ 5 = 9</p>
<p>The inverse of ÷ 5 is × 5. Multiply both sides by 5:<br>
(n ÷ 5) × 5 = 9 × 5<br>
<strong>n = 45</strong><br>
Check: 45 ÷ 5 = 9 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Equation</dt><dd>A statement that two expressions are equal, containing an equals sign.</dd>
<dt>Variable</dt><dd>A letter (e.g. x, y, n) that represents an unknown number.</dd>
<dt>Inverse operation</dt><dd>The operation that undoes another: + undoes −, × undoes ÷.</dd>
<dt>Solution</dt><dd>The value of the variable that makes the equation true.</dd>
<dt>Substitution</dt><dd>Replacing the variable with a number to check the solution.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Only performing the operation on one side — ✅ always do the same to BOTH sides.</li>
<li>❌ Using the same operation instead of the inverse — ✅ addition undoes subtraction, multiplication undoes division.</li>
<li>❌ Forgetting to check the answer — ✅ substitute your solution back into the original equation.</li>
</ul>`,

'm8i-16-2': `
<h2>Solve Two-Step Equations</h2>
<p>A <strong>two-step equation</strong> requires two inverse operations to solve. The key is to apply the inverse operations in <strong>reverse BODMAS order</strong>: undo addition or subtraction first, then undo multiplication or division.</p>

<h3>The two-step strategy</h3>
<p>For an equation like 3x + 5 = 20:</p>
<ol style="margin:0.5em 0 1em 1.5em">
<li>Undo the + 5 first (subtract 5 from both sides).</li>
<li>Undo the × 3 next (divide both sides by 3).</li>
</ol>

<div class="example-box">
<p><strong>Example 1:</strong> Solve 3x + 5 = 20</p>
<p>Step 1 — Subtract 5 from both sides: 3x = 15<br>
Step 2 — Divide both sides by 3: x = 5<br>
<strong>x = 5</strong><br>
Check: 3(5) + 5 = 15 + 5 = 20 ✓</p>
</div>
<div class="example-box">
<p><strong>Example 2:</strong> Solve 4y − 7 = 17</p>
<p>Step 1 — Add 7 to both sides: 4y = 24<br>
Step 2 — Divide both sides by 4: y = 6<br>
<strong>y = 6</strong><br>
Check: 4(6) − 7 = 24 − 7 = 17 ✓</p>
</div>
<div class="example-box">
<p><strong>Example 3:</strong> Solve n/3 + 4 = 10</p>
<p>Step 1 — Subtract 4 from both sides: n/3 = 6<br>
Step 2 — Multiply both sides by 3: n = 18<br>
<strong>n = 18</strong><br>
Check: 18/3 + 4 = 6 + 4 = 10 ✓</p>
</div>

<h3>Setting up equations from word problems</h3>
<div class="example-box">
<p><strong>Example 4:</strong> A taxi charges £3 plus £2 per mile. The total fare is £11. How many miles was the journey?</p>
<p>Let m = number of miles.<br>
Equation: 2m + 3 = 11<br>
Step 1 — Subtract 3: 2m = 8<br>
Step 2 — Divide by 2: m = 4<br>
<strong>The journey was 4 miles.</strong> Check: 2(4) + 3 = 11 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Two-step equation</dt><dd>An equation that requires two inverse operations to isolate the variable.</dd>
<dt>Reverse BODMAS</dt><dd>When solving, undo + and − before undoing × and ÷.</dd>
<dt>Isolate</dt><dd>Get the variable on its own on one side of the equation.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Undoing multiplication before undoing addition — ✅ reverse BODMAS: undo + / − first.</li>
<li>❌ Dividing the wrong term — ✅ once you have ax = b, divide the WHOLE of b by a.</li>
<li>❌ Sign errors when adding or subtracting negative numbers — ✅ take extra care with negatives.</li>
</ul>`,

'm8i-16-3': `
<h2>Equations with Like Terms &amp; the Distributive Property</h2>
<p>Many equations have <strong>like terms</strong> that can be simplified, or <strong>brackets</strong> that need expanding before you can solve. Always simplify the equation fully before applying inverse operations.</p>

<h3>Collecting like terms first</h3>
<p>If the same variable appears more than once on the same side, collect (add/subtract) those terms together.</p>
<div class="example-box">
<p><strong>Example 1:</strong> Solve 7y − 2y + 3 = 23</p>
<p>Step 1 — Collect like terms: 5y + 3 = 23<br>
Step 2 — Subtract 3: 5y = 20<br>
Step 3 — Divide by 5: y = 4<br>
<strong>y = 4</strong> &nbsp; Check: 7(4) − 2(4) + 3 = 28 − 8 + 3 = 23 ✓</p>
</div>

<h3>Expanding brackets first</h3>
<p>Use the <strong>distributive property</strong>: a(b + c) = ab + ac. Multiply the term outside by every term inside the bracket.</p>
<div class="example-box">
<p><strong>Example 2:</strong> Solve 2(x + 4) = 18</p>
<p>Step 1 — Expand: 2x + 8 = 18<br>
Step 2 — Subtract 8: 2x = 10<br>
Step 3 — Divide by 2: x = 5<br>
<strong>x = 5</strong> &nbsp; Check: 2(5 + 4) = 2(9) = 18 ✓</p>
</div>
<div class="example-box">
<p><strong>Example 3:</strong> Solve 3(2x − 1) = 21</p>
<p>Step 1 — Expand: 6x − 3 = 21<br>
Step 2 — Add 3: 6x = 24<br>
Step 3 — Divide by 6: x = 4<br>
<strong>x = 4</strong> &nbsp; Check: 3(2×4 − 1) = 3(7) = 21 ✓</p>
</div>

<h3>Combining both skills</h3>
<div class="example-box">
<p><strong>Example 4:</strong> Solve 4(x + 2) + x = 28</p>
<p>Step 1 — Expand: 4x + 8 + x = 28<br>
Step 2 — Collect like terms: 5x + 8 = 28<br>
Step 3 — Subtract 8: 5x = 20<br>
Step 4 — Divide by 5: x = 4<br>
<strong>x = 4</strong> &nbsp; Check: 4(6) + 4 = 24 + 4 = 28 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Like terms</dt><dd>Terms with the same variable and power, e.g. 3x and 5x are like terms.</dd>
<dt>Distributive property</dt><dd>a(b + c) = ab + ac — multiply the outside term by each term inside the bracket.</dd>
<dt>Expand</dt><dd>Remove brackets by multiplying, e.g. 3(x + 2) → 3x + 6.</dd>
<dt>Collect like terms</dt><dd>Simplify by combining terms with the same variable.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to multiply every term in the bracket — ✅ 3(x + 4) = 3x + 12, not 3x + 4.</li>
<li>❌ Collecting unlike terms (e.g. adding x and a number) — ✅ only combine terms with the same variable.</li>
<li>❌ Expanding before collecting when like terms are already visible outside the bracket — ✅ expand first, then collect.</li>
</ul>`,

'm8i-16-4': `
<h2>Solve Multi-Step Equations</h2>
<p>Multi-step equations combine all the skills you have practised: expanding brackets, collecting like terms, and applying inverse operations — sometimes with the variable appearing on <strong>both sides</strong> of the equation.</p>

<h3>When the variable appears on both sides</h3>
<p>Collect all variable terms onto one side first by adding or subtracting the appropriate term from both sides.</p>
<div class="example-box">
<p><strong>Example 1:</strong> Solve 5x + 4 = 3x + 12</p>
<p>Step 1 — Subtract 3x from both sides: 2x + 4 = 12<br>
Step 2 — Subtract 4 from both sides: 2x = 8<br>
Step 3 — Divide by 2: x = 4<br>
<strong>x = 4</strong> &nbsp; Check: 5(4)+4 = 24 and 3(4)+12 = 24 ✓</p>
</div>

<h3>Expanding then solving with variables on both sides</h3>
<div class="example-box">
<p><strong>Example 2:</strong> Solve 4(2x + 3) = 5x + 24</p>
<p>Step 1 — Expand: 8x + 12 = 5x + 24<br>
Step 2 — Subtract 5x from both sides: 3x + 12 = 24<br>
Step 3 — Subtract 12: 3x = 12<br>
Step 4 — Divide by 3: x = 4<br>
<strong>x = 4</strong> &nbsp; Check: 4(11) = 44 and 5(4)+24 = 44 ✓</p>
</div>

<h3>Equations with two sets of brackets</h3>
<div class="example-box">
<p><strong>Example 3:</strong> Solve 3(x + 2) − 2(x − 1) = 13</p>
<p>Step 1 — Expand both brackets: 3x + 6 − 2x + 2 = 13<br>
Step 2 — Collect like terms: x + 8 = 13<br>
Step 3 — Subtract 8: x = 5<br>
<strong>x = 5</strong> &nbsp; Check: 3(7) − 2(4) = 21 − 8 = 13 ✓</p>
</div>

<h3>Properties of equality (summary)</h3>
<p>At every step, apply the same operation to both sides:</p>
<ul style="margin:0.5em 0 1em 1.5em">
<li>Add the same value to both sides.</li>
<li>Subtract the same value from both sides.</li>
<li>Multiply both sides by the same non-zero value.</li>
<li>Divide both sides by the same non-zero value.</li>
</ul>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Multi-step equation</dt><dd>An equation that requires three or more steps to solve.</dd>
<dt>Properties of equality</dt><dd>Rules that allow the same operation on both sides while preserving equality.</dd>
<dt>Variables on both sides</dt><dd>Equations such as 5x + 4 = 3x + 12 where the unknown appears on each side.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Subtracting the wrong term when moving variables — ✅ always subtract the smaller variable term so you get a positive coefficient.</li>
<li>❌ Sign error when expanding a bracket with a minus outside, e.g. −2(x − 1) — ✅ −2 × (−1) = +2, not −2.</li>
<li>❌ Stopping after one or two steps when more are needed — ✅ keep going until the variable is fully isolated.</li>
</ul>`

});
