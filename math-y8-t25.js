// math-y8-t25.js — Year 8 Maths Topic 25: Pythagoras' Theorem
// Islands: m8i-25-1 .. m8i-25-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-25-1 — Find the Hypotenuse
  {id:"m8fc-25-1-1",islandId:"m8i-25-1",front:"State Pythagoras' theorem and label the sides.",
   back:"In any right-angled triangle: a² + b² = c²\n\nwhere c is the HYPOTENUSE (the longest side, opposite the right angle) and a and b are the two shorter sides (legs).\n\nRemember: the hypotenuse is always opposite the right angle.",difficulty:1,category:"definition"},
  {id:"m8fc-25-1-2",islandId:"m8i-25-1",front:"How do you identify the hypotenuse in a right-angled triangle?",
   back:"The hypotenuse is always:\n• The longest side\n• Opposite the right angle (the 90° corner)\n\nIt is NEVER one of the sides that forms the right angle — those are called the legs.",difficulty:1,category:"concept"},
  {id:"m8fc-25-1-3",islandId:"m8i-25-1",front:"A right-angled triangle has legs of 3 cm and 4 cm. Find the hypotenuse.",
   back:"c = 5 cm\n\nUsing a² + b² = c²:\n3² + 4² = c²\n9 + 16 = c²\n25 = c²\nc = √25 = 5 cm\n\nThis is the famous 3-4-5 Pythagorean triple.",difficulty:1,category:"calculation"},
  {id:"m8fc-25-1-4",islandId:"m8i-25-1",front:"A right-angled triangle has legs of 5 cm and 12 cm. Find the hypotenuse.",
   back:"c = 13 cm\n\nUsing a² + b² = c²:\n5² + 12² = c²\n25 + 144 = c²\n169 = c²\nc = √169 = 13 cm\n\nThis is the 5-12-13 Pythagorean triple.",difficulty:2,category:"calculation"},
  {id:"m8fc-25-1-5",islandId:"m8i-25-1",front:"What is a Pythagorean triple? Give two examples.",
   back:"A Pythagorean triple is a set of three positive whole numbers (a, b, c) that satisfy a² + b² = c².\n\nExamples:\n• 3, 4, 5 (since 9 + 16 = 25)\n• 5, 12, 13 (since 25 + 144 = 169)\n• Multiples also work: 6, 8, 10 and 8, 15, 17.",difficulty:2,category:"definition"},
  {id:"m8fc-25-1-6",islandId:"m8i-25-1",front:"A right-angled triangle has legs of 8 cm and 15 cm. Find the hypotenuse.",
   back:"c = 17 cm\n\nUsing a² + b² = c²:\n8² + 15² = c²\n64 + 225 = c²\n289 = c²\nc = √289 = 17 cm\n\nThis is the 8-15-17 Pythagorean triple.",difficulty:2,category:"calculation"},

  // m8i-25-2 — Find a Missing Leg
  {id:"m8fc-25-2-1",islandId:"m8i-25-2",front:"How do you rearrange a² + b² = c² to find a missing leg?",
   back:"To find leg a: a² = c² − b², so a = √(c² − b²)\nTo find leg b: b² = c² − a², so b = √(c² − a²)\n\nKey step: subtract the known leg squared FROM the hypotenuse squared.\nDo NOT add when finding a leg.",difficulty:1,category:"concept"},
  {id:"m8fc-25-2-2",islandId:"m8i-25-2",front:"A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. Find the missing leg.",
   back:"Missing leg = 12 cm\n\nUsing b² = c² − a²:\nb² = 13² − 5²\nb² = 169 − 25\nb² = 144\nb = √144 = 12 cm",difficulty:1,category:"calculation"},
  {id:"m8fc-25-2-3",islandId:"m8i-25-2",front:"A right-angled triangle has hypotenuse 17 cm and one leg 8 cm. Find the missing leg.",
   back:"Missing leg = 15 cm\n\nUsing b² = c² − a²:\nb² = 17² − 8²\nb² = 289 − 64\nb² = 225\nb = √225 = 15 cm",difficulty:2,category:"calculation"},
  {id:"m8fc-25-2-4",islandId:"m8i-25-2",front:"A right-angled triangle has hypotenuse 10 cm and one leg 6 cm. Find the missing leg and the perimeter.",
   back:"Missing leg = 8 cm; Perimeter = 24 cm\n\nb² = 10² − 6² = 100 − 36 = 64\nb = √64 = 8 cm\n\nPerimeter = 6 + 8 + 10 = 24 cm\n\n(This is a 6-8-10 triple, which is a multiple of 3-4-5.)",difficulty:2,category:"application"},
  {id:"m8fc-25-2-5",islandId:"m8i-25-2",front:"What is the key difference between finding the hypotenuse and finding a missing leg?",
   back:"Finding the hypotenuse (c): ADD the two legs squared.\nc² = a² + b², then c = √(a² + b²)\n\nFinding a missing leg: SUBTRACT the known leg squared from the hypotenuse squared.\na² = c² − b², then a = √(c² − b²)\n\nCommon mistake: adding when you should subtract.",difficulty:2,category:"concept"},
  {id:"m8fc-25-2-6",islandId:"m8i-25-2",front:"A right-angled triangle has hypotenuse 26 cm and one leg 10 cm. Find the missing leg.",
   back:"Missing leg = 24 cm\n\nb² = c² − a²\nb² = 26² − 10²\nb² = 676 − 100\nb² = 576\nb = √576 = 24 cm\n\n(This is a 10-24-26 triple, a multiple of 5-12-13.)",difficulty:3,category:"calculation"},

  // m8i-25-3 — Word Problems & Converse
  {id:"m8fc-25-3-1",islandId:"m8i-25-3",front:"State the converse of Pythagoras' theorem.",
   back:"If a² + b² = c², then the triangle is right-angled (with the right angle opposite side c).\n\nConverse: if the RESULT of a² + b² equals c², the angle between sides a and b is exactly 90°.\n\nUse this to TEST whether a triangle is right-angled.",difficulty:2,category:"definition"},
  {id:"m8fc-25-3-2",islandId:"m8i-25-3",front:"A triangle has sides 5 cm, 12 cm and 13 cm. Is it right-angled? Show your working.",
   back:"Yes, it is right-angled.\n\nCheck: does a² + b² = c²?\n5² + 12² = 25 + 144 = 169\n13² = 169 ✓\n\nSince 5² + 12² = 13², the triangle has a right angle opposite the 13 cm side.",difficulty:2,category:"application"},
  {id:"m8fc-25-3-3",islandId:"m8i-25-3",front:"A ladder 13 m long leans against a wall. The foot of the ladder is 5 m from the wall. How high up the wall does it reach?",
   back:"Height = 12 m\n\nThe wall, ground and ladder form a right-angled triangle.\nLadder = hypotenuse = 13 m; base = 5 m\n\nb² = 13² − 5²\nb² = 169 − 25 = 144\nb = √144 = 12 m",difficulty:2,category:"application"},
  {id:"m8fc-25-3-4",islandId:"m8i-25-3",front:"A triangle has sides 7 cm, 8 cm and 11 cm. Is it right-angled?",
   back:"No, it is NOT right-angled.\n\nTest with the longest side as c:\n7² + 8² = 49 + 64 = 113\n11² = 121\n\n113 ≠ 121, so a² + b² ≠ c². The triangle is not right-angled.",difficulty:2,category:"application"},
  {id:"m8fc-25-3-5",islandId:"m8i-25-3",front:"A rectangular field is 9 m wide and 40 m long. What is the length of the diagonal?",
   back:"Diagonal = 41 m\n\nThe diagonal of a rectangle is the hypotenuse of a right-angled triangle.\nc² = 9² + 40²\nc² = 81 + 1600\nc² = 1681\nc = √1681 = 41 m\n\n(9-40-41 is a Pythagorean triple.)",difficulty:3,category:"application"},
  {id:"m8fc-25-3-6",islandId:"m8i-25-3",front:"Two ships leave port. One travels 6 km north and the other 8 km east. How far apart are they?",
   back:"Distance = 10 km\n\nThe north and east directions are at right angles, forming a right-angled triangle.\nc² = 6² + 8²\nc² = 36 + 64\nc² = 100\nc = √100 = 10 km\n\n(This is a 6-8-10 triple, a multiple of 3-4-5.)",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-25-1":[
    {q:"A right-angled triangle has legs of 3 cm and 4 cm. What is the length of the hypotenuse?",opts:["5 cm","6 cm","7 cm","√7 cm"],c:0,e:"Using a² + b² = c²: 3² + 4² = 9 + 16 = 25, so c = √25 = 5 cm. This is the 3-4-5 Pythagorean triple."},
    {q:"A right-angled triangle has legs of 5 cm and 12 cm. What is the hypotenuse?",opts:["13 cm","14 cm","17 cm","11 cm"],c:0,e:"5² + 12² = 25 + 144 = 169, so c = √169 = 13 cm. This is the 5-12-13 triple."},
    {q:"Which side of a right-angled triangle is the hypotenuse?",opts:["The shortest side","Either leg","The side opposite the right angle","The side adjacent to the right angle"],c:2,e:"The hypotenuse is always the longest side and is always opposite the right angle."},
    {q:"A right-angled triangle has legs of 6 cm and 8 cm. What is the hypotenuse?",opts:["9 cm","10 cm","11 cm","14 cm"],c:1,e:"6² + 8² = 36 + 64 = 100, so c = √100 = 10 cm. This is the 6-8-10 triple (a multiple of 3-4-5)."},
    {q:"Which set of numbers is a Pythagorean triple?",opts:["2, 3, 4","5, 10, 13","8, 15, 17","6, 7, 10"],c:2,e:"Check: 8² + 15² = 64 + 225 = 289 = 17². So 8, 15, 17 is a Pythagorean triple. The others do not satisfy a² + b² = c²."}
  ],
  "m8i-25-2":[
    {q:"A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. What is the missing leg?",opts:["8 cm","10 cm","12 cm","11 cm"],c:2,e:"b² = c² − a² = 13² − 5² = 169 − 25 = 144, so b = √144 = 12 cm."},
    {q:"A right-angled triangle has hypotenuse 17 cm and one leg 15 cm. What is the missing leg?",opts:["6 cm","8 cm","10 cm","2 cm"],c:1,e:"a² = 17² − 15² = 289 − 225 = 64, so a = √64 = 8 cm. This is the 8-15-17 triple."},
    {q:"A right-angled triangle has hypotenuse 10 cm and one leg 6 cm. What is the perimeter of the triangle?",opts:["20 cm","22 cm","24 cm","26 cm"],c:2,e:"Missing leg: b² = 10² − 6² = 100 − 36 = 64, b = 8 cm. Perimeter = 6 + 8 + 10 = 24 cm."},
    {q:"When finding a missing leg, which calculation is correct?",opts:["leg = √(a² + b²)","leg = √(c² + a²)","leg = √(c² − a²)","leg = c² − a²"],c:2,e:"To find a missing leg, rearrange a² + b² = c² to get b² = c² − a², so b = √(c² − a²). You subtract, not add."},
    {q:"A right-angled triangle has hypotenuse 26 cm and one leg 24 cm. What is the other leg?",opts:["8 cm","10 cm","12 cm","14 cm"],c:1,e:"a² = 26² − 24² = 676 − 576 = 100, so a = √100 = 10 cm. This is a 10-24-26 triple (multiple of 5-12-13)."}
  ],
  "m8i-25-3":[
    {q:"A ladder 10 m long leans against a wall. The foot is 6 m from the wall. How high up the wall does the ladder reach?",opts:["6 m","7 m","8 m","9 m"],c:2,e:"Height² = 10² − 6² = 100 − 36 = 64, so height = √64 = 8 m. The wall, ground and ladder form a right-angled triangle."},
    {q:"A triangle has sides 9 cm, 40 cm and 41 cm. Is it right-angled?",opts:["No, because 9 + 40 ≠ 41","Yes, because 9² + 40² = 41²","No, because the numbers are too large","Yes, because all three sides are different lengths"],c:1,e:"Check: 9² + 40² = 81 + 1600 = 1681 = 41². Since a² + b² = c², the triangle is right-angled by the converse of Pythagoras' theorem."},
    {q:"A triangle has sides 5 cm, 7 cm and 9 cm. Is it right-angled?",opts:["Yes, because the longest side is 9 cm","Yes, because 5 + 7 > 9","No, because 5² + 7² ≠ 9²","No, because there is no right angle symbol shown"],c:2,e:"Check: 5² + 7² = 25 + 49 = 74. But 9² = 81. Since 74 ≠ 81, this is NOT a right-angled triangle."},
    {q:"A rectangular garden is 12 m long and 5 m wide. What is the length of the diagonal path across it?",opts:["13 m","15 m","17 m","11 m"],c:0,e:"The diagonal is the hypotenuse: c² = 12² + 5² = 144 + 25 = 169, so c = √169 = 13 m. This is the 5-12-13 triple."},
    {q:"Two paths leave a crossroads at right angles. One path is 8 m long and the other is 15 m long. How far is it in a straight line between the two endpoints?",opts:["17 m","20 m","23 m","13 m"],c:0,e:"The two paths form the legs of a right-angled triangle: c² = 8² + 15² = 64 + 225 = 289, so c = √289 = 17 m. The 8-15-17 triple."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-25-1': `
<h2>Find the Hypotenuse</h2>
<p><strong>Pythagoras' theorem</strong> is one of the most important results in mathematics. It tells us the relationship between the three sides of any right-angled triangle: <strong>a² + b² = c²</strong>, where <em>c</em> is the hypotenuse and <em>a</em> and <em>b</em> are the two shorter sides (the legs).</p>

<h3>Identifying the hypotenuse</h3>
<p>Before you use the theorem, you must correctly identify the hypotenuse. It is always the <strong>longest side</strong>, and it is always <strong>opposite the right angle</strong>. It is never one of the two sides that meet at the right angle.</p>
<div class="lesson-diagram" data-diagram="math-pythagoras"></div>

<h3>Using the theorem to find the hypotenuse</h3>
<p>When you know both legs, square them, add the results, then take the square root to find c.</p>
<div class="example-box">
<p><strong>Example 1:</strong> A right-angled triangle has legs of 3 cm and 4 cm. Find the hypotenuse.</p>
<p><strong>Solution:</strong><br>
a² + b² = c²<br>
3² + 4² = c²<br>
9 + 16 = c²<br>
25 = c²<br>
c = √25 = <strong>5 cm</strong></p>
</div>

<div class="example-box">
<p><strong>Example 2:</strong> A right-angled triangle has legs of 5 cm and 12 cm. Find the hypotenuse.</p>
<p><strong>Solution:</strong><br>
5² + 12² = c²<br>
25 + 144 = c²<br>
169 = c²<br>
c = √169 = <strong>13 cm</strong></p>
</div>

<h3>Pythagorean triples</h3>
<p>Some sets of three whole numbers satisfy a² + b² = c² exactly — these are called <strong>Pythagorean triples</strong>. Recognising common triples saves calculation time.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">a</th><th style="padding:8px;border:1px solid #ccc">b</th><th style="padding:8px;border:1px solid #ccc">c</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">3</td><td style="padding:8px;border:1px solid #ccc">4</td><td style="padding:8px;border:1px solid #ccc">5</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">5</td><td style="padding:8px;border:1px solid #ccc">12</td><td style="padding:8px;border:1px solid #ccc">13</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">8</td><td style="padding:8px;border:1px solid #ccc">15</td><td style="padding:8px;border:1px solid #ccc">17</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">6</td><td style="padding:8px;border:1px solid #ccc">8</td><td style="padding:8px;border:1px solid #ccc">10</td></tr>
</table>
<p>Multiples of a triple are also triples: 6, 8, 10 is just 2 × (3, 4, 5).</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Hypotenuse</dt><dd>The longest side of a right-angled triangle, always opposite the right angle.</dd>
<dt>Legs</dt><dd>The two shorter sides that meet at the right angle.</dd>
<dt>Pythagorean triple</dt><dd>A set of three positive whole numbers that satisfy a² + b² = c².</dd>
<dt>Right-angled triangle</dt><dd>A triangle containing one angle of exactly 90°.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Labelling one of the legs as the hypotenuse — ✅ the hypotenuse is always opposite the right angle.</li>
<li>❌ Finding c by calculating a + b instead of √(a² + b²) — ✅ you must square, add, then take the square root.</li>
<li>❌ Forgetting to take the square root at the end — ✅ c² = 25 means c = 5, not 25.</li>
</ul>`,

'm8i-25-2': `
<h2>Find a Missing Leg</h2>
<p>Pythagoras' theorem can be <strong>rearranged</strong> to find either leg when you know the hypotenuse and the other leg. Instead of adding the squares, you <strong>subtract</strong>: a² = c² − b².</p>

<h3>Rearranging the formula</h3>
<p>Starting from a² + b² = c², subtract b² from both sides:<br>
<strong>a² = c² − b²</strong>, so <strong>a = √(c² − b²)</strong></p>
<p>This means: square the hypotenuse, subtract the square of the known leg, then take the square root.</p>

<div class="example-box">
<p><strong>Example 1:</strong> A right-angled triangle has hypotenuse 13 cm and one leg 5 cm. Find the missing leg.</p>
<p><strong>Solution:</strong><br>
b² = c² − a²<br>
b² = 13² − 5²<br>
b² = 169 − 25<br>
b² = 144<br>
b = √144 = <strong>12 cm</strong></p>
</div>

<div class="example-box">
<p><strong>Example 2:</strong> A right-angled triangle has hypotenuse 10 cm and one leg 6 cm. Find the missing leg and the perimeter.</p>
<p><strong>Solution:</strong><br>
b² = 10² − 6² = 100 − 36 = 64<br>
b = √64 = 8 cm<br>
Perimeter = 6 + 8 + 10 = <strong>24 cm</strong></p>
</div>

<h3>Choosing the right formula</h3>
<p>Before you start, ask yourself: <em>which side am I finding?</em></p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Finding</th><th style="padding:8px;border:1px solid #ccc">Formula</th><th style="padding:8px;border:1px solid #ccc">Operation</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Hypotenuse (c)</td><td style="padding:8px;border:1px solid #ccc">c = √(a² + b²)</td><td style="padding:8px;border:1px solid #ccc">ADD the squares</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Missing leg (a or b)</td><td style="padding:8px;border:1px solid #ccc">a = √(c² − b²)</td><td style="padding:8px;border:1px solid #ccc">SUBTRACT the squares</td></tr>
</table>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Rearranging</dt><dd>Changing the subject of a formula by applying inverse operations to both sides.</dd>
<dt>Perimeter</dt><dd>The total distance around the outside of a shape — for a triangle, add all three sides.</dd>
<dt>Inverse operation</dt><dd>The opposite operation; squaring and square-rooting are inverses.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding instead of subtracting when finding a leg — ✅ use a² = c² − b², not c² + b².</li>
<li>❌ Subtracting the hypotenuse squared from a leg — ✅ always subtract the leg from the hypotenuse: c² − b².</li>
<li>❌ Forgetting to find the square root at the end — ✅ b² = 144 means b = 12, not 144.</li>
</ul>`,

'm8i-25-3': `
<h2>Pythagoras' Theorem: Word Problems &amp; Converse</h2>
<p>Pythagoras' theorem is not just an abstract rule — it solves real problems involving distances, heights and diagonal lengths. You can also use the <strong>converse</strong> to test whether a triangle contains a right angle.</p>

<h3>Applying the theorem to word problems</h3>
<p>When you see a word problem, look for a right angle (walls meet the ground at 90°, north and east are perpendicular, rectangles have 90° corners). Sketch a right-angled triangle, label the sides, then apply the theorem.</p>
<div class="example-box">
<p><strong>Example 1 — Ladder problem:</strong> A ladder 13 m long leans against a vertical wall. The foot of the ladder is 5 m from the base of the wall. How high up the wall does the ladder reach?</p>
<p><strong>Solution:</strong><br>
Ladder = hypotenuse = 13 m; base = 5 m<br>
height² = 13² − 5² = 169 − 25 = 144<br>
height = √144 = <strong>12 m</strong></p>
</div>

<div class="example-box">
<p><strong>Example 2 — Diagonal of a rectangle:</strong> A rectangular field is 9 m wide and 40 m long. What is the length of the diagonal?</p>
<p><strong>Solution:</strong><br>
c² = 9² + 40² = 81 + 1600 = 1681<br>
c = √1681 = <strong>41 m</strong></p>
</div>

<h3>The converse of Pythagoras' theorem</h3>
<p>The converse states: <em>if a² + b² = c² for a triangle's three sides, then the triangle has a right angle opposite the longest side.</em></p>
<p>To test a triangle: square all three sides, then check whether the sum of the two smaller squares equals the largest square.</p>
<div class="example-box">
<p><strong>Example 3 — Is it right-angled?</strong> A triangle has sides 5 cm, 12 cm and 13 cm.</p>
<p>Test: 5² + 12² = 25 + 144 = 169 = 13² ✓<br>
The equation holds, so the triangle <strong>is</strong> right-angled.</p>
<p><strong>Non-example:</strong> A triangle has sides 7 cm, 8 cm and 11 cm.<br>
7² + 8² = 49 + 64 = 113 ≠ 121 = 11²<br>
The equation does NOT hold, so this is NOT a right-angled triangle.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Converse</dt><dd>The reverse of a statement — if the result holds, the condition must be true.</dd>
<dt>Diagonal</dt><dd>A straight line joining two non-adjacent corners of a shape.</dd>
<dt>Perpendicular</dt><dd>At right angles (90°) to something.</dd>
<dt>Hypotenuse</dt><dd>The longest side of a right-angled triangle, opposite the right angle.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Not drawing a diagram for word problems — ✅ always sketch the right-angled triangle first.</li>
<li>❌ Testing the converse using the wrong side as c — ✅ always use the LONGEST side as c.</li>
<li>❌ Confusing "the converse is true" with the original theorem — ✅ both directions work for right-angled triangles only.</li>
</ul>`

});
