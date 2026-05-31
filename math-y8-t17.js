// math-y8-t17.js — Year 8 Maths Topic 17: Inequalities
// Islands: m8i-17-1 .. m8i-17-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-17-1 — Graph & Write Inequalities
  {id:"m8fc-17-1-1",islandId:"m8i-17-1",front:"What do the four inequality symbols mean?",
   back:"< means 'less than'\n> means 'greater than'\n≤ means 'less than or equal to'\n≥ means 'greater than or equal to'\n\nExample: x > 3 means x can be 4, 5, 100 … but NOT 3 itself.",difficulty:1,category:"definition"},
  {id:"m8fc-17-1-2",islandId:"m8i-17-1",front:"When do you use an open circle on a number line, and when a closed (filled) circle?",
   back:"Open circle ○ — the endpoint is NOT included (use with < or >).\nClosed circle ● — the endpoint IS included (use with ≤ or ≥).\n\nExample: x > 4 → open circle at 4, arrow pointing right.\nx ≥ 4 → closed circle at 4, arrow pointing right.",difficulty:1,category:"concept"},
  {id:"m8fc-17-1-3",islandId:"m8i-17-1",front:"Is x = 5 a solution to the inequality x < 8?",
   back:"Yes ✓\n\nSubstitute: 5 < 8 is TRUE, so x = 5 satisfies the inequality.\n\nAlso check x = 8: 8 < 8 is FALSE — the endpoint is NOT included.",difficulty:1,category:"application"},
  {id:"m8fc-17-1-4",islandId:"m8i-17-1",front:"Write an inequality for: 'a number n is at most 12'.",
   back:"n ≤ 12\n\n'At most 12' means 12 is the maximum — 12 is allowed, so use ≤.\n\nOther key phrases:\n• 'at least 5' → n ≥ 5\n• 'fewer than 7' → n < 7\n• 'more than 3' → n > 3",difficulty:2,category:"application"},
  {id:"m8fc-17-1-5",islandId:"m8i-17-1",front:"A number line shows a closed circle at −2 with an arrow going to the left. Write the inequality.",
   back:"x ≤ −2\n\nClosed circle → −2 is included, so use ≤ (not <).\nArrow goes left → values smaller than −2.\nReading: 'x is less than or equal to −2'.",difficulty:2,category:"concept"},
  {id:"m8fc-17-1-6",islandId:"m8i-17-1",front:"List three values that satisfy x > −1 and two values that do NOT.",
   back:"Solutions (x > −1): 0, 1, 2.5 (any value greater than −1).\nNot solutions: −1, −3 (−1 itself fails because > is strict; −3 < −1).\n\nGraph: open circle at −1, arrow pointing right.",difficulty:2,category:"calculation"},

  // m8i-17-2 — Solve One-Step Inequalities
  {id:"m8fc-17-2-1",islandId:"m8i-17-2",front:"Solve x + 5 < 9.",
   back:"x < 4\n\nSubtract 5 from both sides:\nx + 5 − 5 < 9 − 5\nx < 4\n\nGraph: open circle at 4, arrow pointing left.",difficulty:1,category:"calculation"},
  {id:"m8fc-17-2-2",islandId:"m8i-17-2",front:"Why must you REVERSE the inequality sign when multiplying or dividing by a negative number?",
   back:"Because multiplying/dividing by a negative flips the number line.\n\nExample: 3 > 1, but multiplying both sides by −1 gives −3 < −1 — the order reverses.\n\nRule: −x < 6 → x > −6 (sign flips when dividing by −1).",difficulty:2,category:"concept"},
  {id:"m8fc-17-2-3",islandId:"m8i-17-2",front:"Solve 3x ≥ 12.",
   back:"x ≥ 4\n\nDivide both sides by 3 (positive — sign stays the same):\n3x ÷ 3 ≥ 12 ÷ 3\nx ≥ 4\n\nGraph: closed circle at 4, arrow pointing right.",difficulty:1,category:"calculation"},
  {id:"m8fc-17-2-4",islandId:"m8i-17-2",front:"Solve −4x > 20.",
   back:"x < −5\n\nDivide both sides by −4 — REVERSE the sign because you are dividing by a negative:\n−4x ÷ (−4) < 20 ÷ (−4)\nx < −5\n\nGraph: open circle at −5, arrow pointing left.",difficulty:2,category:"calculation"},
  {id:"m8fc-17-2-5",islandId:"m8i-17-2",front:"Solve x − 7 ≤ −3 and graph the solution.",
   back:"x ≤ 4\n\nAdd 7 to both sides:\nx − 7 + 7 ≤ −3 + 7\nx ≤ 4\n\nGraph: closed circle at 4, arrow pointing left.\n\nCheck: let x = 0: 0 − 7 = −7 ≤ −3 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-17-2-6",islandId:"m8i-17-2",front:"Solve −x ≥ 3.",
   back:"x ≤ −3\n\nMultiply both sides by −1 — REVERSE the sign:\n(−1)(−x) ≤ (−1)(3)\nx ≤ −3\n\nAlternatively, divide both sides by −1 and reverse: same result.\n\nCheck: x = −5 → −(−5) = 5 ≥ 3 ✓",difficulty:2,category:"calculation"},

  // m8i-17-3 — Solve Two-Step Inequalities
  {id:"m8fc-17-3-1",islandId:"m8i-17-3",front:"What order of steps do you use to solve a two-step inequality?",
   back:"Step 1: Add or subtract to isolate the term with the variable.\nStep 2: Multiply or divide to find the variable — reverse the sign if dividing/multiplying by a negative.\nStep 3: Graph the solution on a number line.\n\nSame process as two-step equations, but watch the sign!",difficulty:1,category:"concept"},
  {id:"m8fc-17-3-2",islandId:"m8i-17-3",front:"Solve 2x + 3 > 11.",
   back:"x > 4\n\nStep 1: Subtract 3 from both sides:\n2x > 8\nStep 2: Divide both sides by 2 (positive — sign unchanged):\nx > 4\n\nGraph: open circle at 4, arrow pointing right.",difficulty:1,category:"calculation"},
  {id:"m8fc-17-3-3",islandId:"m8i-17-3",front:"Solve 4 − 3x ≤ 13.",
   back:"x ≥ −3\n\nStep 1: Subtract 4 from both sides:\n−3x ≤ 9\nStep 2: Divide both sides by −3 — REVERSE the sign:\nx ≥ −3\n\nGraph: closed circle at −3, arrow pointing right.\n\nCheck: x = 0 → 4 − 0 = 4 ≤ 13 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-17-3-4",islandId:"m8i-17-3",front:"Solve 3x − 5 ≥ 1 and describe the solution set in words.",
   back:"x ≥ 2\n\nStep 1: Add 5 to both sides:\n3x ≥ 6\nStep 2: Divide by 3:\nx ≥ 2\n\nIn words: 'x is 2 or greater' (all numbers from 2 upwards, including 2).",difficulty:2,category:"application"},
  {id:"m8fc-17-3-5",islandId:"m8i-17-3",front:"A two-step inequality gives the solution x < −1. Which graph is correct: open or closed circle, and which direction?",
   back:"Open circle at −1 (because < is strict, −1 is NOT included).\nArrow pointing LEFT (values smaller than −1).\n\nRemember: < and > → open circle; ≤ and ≥ → closed circle.",difficulty:1,category:"concept"},
  {id:"m8fc-17-3-6",islandId:"m8i-17-3",front:"A cinema sells children's tickets for £5 each. A parent has at most £32 to spend. Write and solve an inequality to find the maximum number of children's tickets, n.",
   back:"5n ≤ 32\n\nDivide both sides by 5:\nn ≤ 6.4\n\nSince n must be a whole number, the maximum is n = 6 tickets.\n\nCheck: 6 × £5 = £30 ≤ £32 ✓; 7 × £5 = £35 > £32 ✗",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-17-1":[
    {q:"Which value is a solution to x ≤ −3?",opts:["0","−2","−3","2"],c:2,e:"−3 satisfies x ≤ −3 because −3 ≤ −3 is true (the endpoint is included with ≤). 0, −2 and 2 are all greater than −3 so they fail."},
    {q:"A number line shows an open circle at 6 with an arrow pointing to the right. Which inequality does this represent?",opts:["x ≤ 6","x ≥ 6","x > 6","x < 6"],c:2,e:"An open circle means 6 is NOT included (ruling out ≤ and ≥). The arrow points right (greater than), giving x > 6."},
    {q:"Which inequality matches the phrase 'a temperature t is at least −5 °C'?",opts:["t < −5","t > −5","t ≤ −5","t ≥ −5"],c:3,e:"'At least −5' means −5 is the minimum, so −5 is allowed. Use ≥: t ≥ −5."},
    {q:"How many of the values −4, 0, 3, 7 satisfy x < 3?",opts:["1","2","3","4"],c:1,e:"Only −4 and 0 are less than 3. The value 3 itself is NOT included (strict <), and 7 > 3. So 2 values satisfy x < 3."},
    {q:"A number line has a closed circle at 2 and an arrow going left. Which inequality is shown?",opts:["x > 2","x < 2","x ≥ 2","x ≤ 2"],c:3,e:"Closed circle → 2 is included (≤ or ≥). Arrow points left → less than. So x ≤ 2."}
  ],
  "m8i-17-2":[
    {q:"What is the solution to x + 4 > 10?",opts:["x > 14","x > 6","x < 6","x < 14"],c:1,e:"Subtract 4 from both sides: x > 10 − 4 = 6. The sign stays the same because we subtracted a positive number."},
    {q:"Solve −2x < 8.",opts:["x < −4","x > −4","x < 4","x > 4"],c:1,e:"Divide both sides by −2 and REVERSE the sign (dividing by a negative): x > 8 ÷ (−2) = −4. Answer: x > −4."},
    {q:"Which step is required when solving x/−3 ≥ 6?",opts:["Add 3 to both sides","Multiply both sides by −3 and reverse the inequality","Divide both sides by 6","Multiply both sides by 3 without changing the sign"],c:1,e:"To isolate x, multiply both sides by −3. Because you are multiplying by a negative, you must reverse the ≥ to ≤, giving x ≤ −18."},
    {q:"Solve 5x ≤ −15.",opts:["x ≤ −3","x ≥ −3","x ≤ 3","x ≥ 3"],c:0,e:"Divide both sides by 5 (positive, so sign unchanged): x ≤ −15 ÷ 5 = −3. Answer: x ≤ −3."},
    {q:"A closed circle at −1 with an arrow pointing right represents which solution?",opts:["x > −1","x < −1","x ≥ −1","x ≤ −1"],c:2,e:"Closed circle → −1 is included (use ≤ or ≥). Arrow to the right → values greater than −1. Combined: x ≥ −1."}
  ],
  "m8i-17-3":[
    {q:"What is the solution to 2x + 1 > 9?",opts:["x > 5","x > 4","x < 4","x < 5"],c:1,e:"Step 1: subtract 1 from both sides → 2x > 8. Step 2: divide by 2 → x > 4. The divisor is positive so the sign stays the same."},
    {q:"Solve 3x − 2 ≤ 7.",opts:["x ≤ 3","x ≥ 3","x ≤ 5","x ≥ 5"],c:0,e:"Step 1: add 2 → 3x ≤ 9. Step 2: divide by 3 → x ≤ 3. Sign unchanged (dividing by positive 3)."},
    {q:"Solve 5 − 2x > 11.",opts:["x > −3","x < −3","x > 3","x < 3"],c:1,e:"Step 1: subtract 5 → −2x > 6. Step 2: divide by −2 and REVERSE the sign → x < −3. Always reverse when dividing by a negative."},
    {q:"Jake has £20 and buys a book for £3.50. He wants to buy pens costing £1.25 each. Write and solve an inequality for the number of pens p he can buy.",opts:["p ≤ 11","p ≤ 13","p ≤ 10","p ≤ 12"],c:1,e:"Money left: £20 − £3.50 = £16.50. Inequality: 1.25p ≤ 16.50. Divide both sides by 1.25: p ≤ 13.2. Since p must be a whole number, the maximum is p = 13. Check: 13 × £1.25 = £16.25 ≤ £16.50 ✓; 14 × £1.25 = £17.50 > £16.50 ✗."},
    {q:"Which graph correctly shows the solution to 4x + 3 ≥ −5?",opts:["Open circle at −2, arrow right","Closed circle at −2, arrow right","Open circle at −2, arrow left","Closed circle at −2, arrow left"],c:1,e:"Step 1: subtract 3 → 4x ≥ −8. Step 2: divide by 4 → x ≥ −2. ≥ gives a closed circle; arrow points right (greater than). Closed circle at −2, arrow right."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-17-1': `
<h2>Graph &amp; Write Inequalities</h2>
<p>An <strong>inequality</strong> is a mathematical statement that two expressions are not necessarily equal. Instead of an equals sign, inequalities use symbols such as &lt;, &gt;, ≤ or ≥. Unlike an equation (which usually has one answer), an inequality typically has infinitely many solutions — a whole range of numbers.</p>

<h3>The four inequality symbols</h3>
<dl>
<dt>&lt; (less than)</dt><dd>x &lt; 5 means x can be any value smaller than 5 (not including 5).</dd>
<dt>&gt; (greater than)</dt><dd>x &gt; 5 means x can be any value larger than 5 (not including 5).</dd>
<dt>≤ (less than or equal to)</dt><dd>x ≤ 5 means x can be 5 or any smaller value (5 is included).</dd>
<dt>≥ (greater than or equal to)</dt><dd>x ≥ 5 means x can be 5 or any larger value (5 is included).</dd>
</dl>

<h3>Graphing inequalities on a number line</h3>
<p>Draw a circle at the boundary value and shade an arrow in the correct direction.</p>
<ul>
<li><strong>Open circle ○</strong> — the boundary is NOT included (use with &lt; or &gt;).</li>
<li><strong>Closed (filled) circle ●</strong> — the boundary IS included (use with ≤ or ≥).</li>
</ul>

<div class="example-box">
<p><strong>Example 1:</strong> Graph x &gt; 3.</p>
<p>Open circle at 3 (3 not included), arrow pointing right.<br>
Any value to the right of 3 is a solution: 4, 5, 3.1, 100 …</p>
</div>

<div class="example-box">
<p><strong>Example 2:</strong> Graph x ≤ −1.</p>
<p>Closed circle at −1 (−1 is included), arrow pointing left.<br>
Solutions: −1, −2, −5, −100 …</p>
</div>
<div class="lesson-diagram" data-diagram="math-inequality-line"></div>

<h3>Writing inequalities from words</h3>
<p>Look out for key phrases:</p>
<dl>
<dt>'at least n' / 'no less than n'</dt><dd>→ ≥ n</dd>
<dt>'at most n' / 'no more than n'</dt><dd>→ ≤ n</dd>
<dt>'more than n' / 'greater than n'</dt><dd>→ &gt; n</dd>
<dt>'fewer than n' / 'less than n'</dt><dd>→ &lt; n</dd>
</dl>

<div class="example-box">
<p><strong>Example 3:</strong> "A bag can hold at most 15 kg." Write and graph an inequality for the mass m.</p>
<p>m ≤ 15.<br>
Closed circle at 15, arrow pointing left.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Inequality</dt><dd>A mathematical statement using &lt;, &gt;, ≤ or ≥ instead of =.</dd>
<dt>Solution set</dt><dd>All values that make the inequality true.</dd>
<dt>Open circle</dt><dd>Shows that the boundary value is NOT part of the solution set.</dd>
<dt>Closed circle</dt><dd>Shows that the boundary value IS part of the solution set.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using a closed circle with &lt; or &gt; — ✅ strict inequalities always use an open circle.</li>
<li>❌ Pointing the arrow in the wrong direction — ✅ &lt; points left, &gt; points right.</li>
<li>❌ Forgetting that ≤ and ≥ include the boundary — ✅ if the word says "at least" or "at most", the endpoint counts.</li>
</ul>`,

'm8i-17-2': `
<h2>Solve One-Step Inequalities</h2>
<p>Solving a one-step inequality is very similar to solving a one-step equation — you use an inverse operation to isolate the variable. The important difference is the <strong>sign-reversal rule</strong>: if you multiply or divide both sides by a <strong>negative number</strong>, you must <strong>reverse the inequality sign</strong>.</p>

<h3>Adding and subtracting (sign stays the same)</h3>
<div class="example-box">
<p><strong>Example 1:</strong> Solve x + 7 &lt; 10.</p>
<p>Subtract 7 from both sides:<br>
x + 7 − 7 &lt; 10 − 7<br>
x &lt; 3<br>
Graph: open circle at 3, arrow left.</p>
</div>

<div class="example-box">
<p><strong>Example 2:</strong> Solve x − 4 ≥ −2.</p>
<p>Add 4 to both sides:<br>
x − 4 + 4 ≥ −2 + 4<br>
x ≥ 2<br>
Graph: closed circle at 2, arrow right.</p>
</div>

<h3>Multiplying and dividing by a positive (sign stays the same)</h3>
<div class="example-box">
<p><strong>Example 3:</strong> Solve 3x ≤ 15.</p>
<p>Divide both sides by 3 (positive — no reversal):<br>
x ≤ 5<br>
Graph: closed circle at 5, arrow left.</p>
</div>

<h3>Multiplying and dividing by a negative (sign REVERSES)</h3>
<p>When you multiply or divide both sides by a negative number, the inequality sign flips direction.</p>
<div class="example-box">
<p><strong>Example 4:</strong> Solve −5x &gt; 20.</p>
<p>Divide both sides by −5 — REVERSE the sign:<br>
x &lt; 20 ÷ (−5)<br>
x &lt; −4<br>
Graph: open circle at −4, arrow left.<br>
Check: x = −6 → −5 × (−6) = 30 &gt; 20 ✓</p>
</div>

<div class="example-box">
<p><strong>Example 5:</strong> Solve −x ≥ 6.</p>
<p>Multiply both sides by −1 — REVERSE the sign:<br>
x ≤ −6<br>
Graph: closed circle at −6, arrow left.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Inverse operation</dt><dd>The opposite operation used to isolate a variable (e.g. subtraction undoes addition).</dd>
<dt>Sign-reversal rule</dt><dd>When multiplying or dividing both sides of an inequality by a negative number, the inequality sign must be reversed.</dd>
<dt>Solution set</dt><dd>All values of the variable that make the inequality true.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to reverse the sign when dividing by a negative — ✅ always check whether your divisor or multiplier is negative.</li>
<li>❌ Reversing the sign when adding or subtracting (never needed) — ✅ only multiplication/division by a negative causes reversal.</li>
<li>❌ Using an open circle for ≤ or ≥ — ✅ these include the endpoint, so use a closed circle.</li>
</ul>`,

'm8i-17-3': `
<h2>Solve Two-Step Inequalities</h2>
<p>A <strong>two-step inequality</strong> requires two inverse operations to isolate the variable — just like a two-step equation. The same critical rule applies: <strong>reverse the inequality sign whenever you multiply or divide by a negative number</strong>.</p>

<h3>The two-step method</h3>
<ol>
<li><strong>Undo addition or subtraction first</strong> (add or subtract the constant from both sides).</li>
<li><strong>Undo multiplication or division next</strong> (divide or multiply both sides — reverse the sign if the number is negative).</li>
<li>Write and graph the solution set.</li>
</ol>

<div class="example-box">
<p><strong>Example 1:</strong> Solve 2x + 5 &lt; 13.</p>
<p>Step 1: Subtract 5 from both sides:<br>
2x &lt; 8<br>
Step 2: Divide by 2 (positive — sign unchanged):<br>
x &lt; 4<br>
Graph: open circle at 4, arrow left.</p>
</div>

<div class="example-box">
<p><strong>Example 2:</strong> Solve 7 − 3x ≥ 16.</p>
<p>Step 1: Subtract 7 from both sides:<br>
−3x ≥ 9<br>
Step 2: Divide by −3 — REVERSE the sign:<br>
x ≤ −3<br>
Graph: closed circle at −3, arrow left.<br>
Check: x = −4 → 7 − 3(−4) = 7 + 12 = 19 ≥ 16 ✓</p>
</div>

<div class="example-box">
<p><strong>Example 3 (word problem):</strong> A plumber charges a £20 call-out fee plus £15 per hour. A customer can spend at most £95. Find the maximum number of hours h.</p>
<p>15h + 20 ≤ 95<br>
Step 1: Subtract 20:<br>
15h ≤ 75<br>
Step 2: Divide by 15:<br>
h ≤ 5<br>
The plumber can work at most 5 hours.</p>
</div>

<h3>Checking your answer</h3>
<p>Always substitute a value from your solution set back into the original inequality to verify.</p>
<p>For Example 1 (x &lt; 4): try x = 0 → 2(0) + 5 = 5 &lt; 13 ✓. Try x = 4 → 2(4) + 5 = 13, which is NOT &lt; 13 ✗ — confirms 4 is excluded.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Two-step inequality</dt><dd>An inequality requiring two inverse operations to isolate the variable.</dd>
<dt>Inverse operations</dt><dd>Pairs of operations that undo each other: addition &amp; subtraction, multiplication &amp; division.</dd>
<dt>Sign reversal</dt><dd>Changing &lt; to &gt; (or ≤ to ≥) when multiplying or dividing by a negative number.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing by the coefficient before removing the constant — ✅ always undo addition/subtraction first.</li>
<li>❌ Forgetting to reverse the inequality when the variable has a negative coefficient — ✅ check the sign of your divisor every time.</li>
<li>❌ Using an open circle for ≤ or ≥ on the graph — ✅ closed circle when the endpoint is included.</li>
</ul>`

});
