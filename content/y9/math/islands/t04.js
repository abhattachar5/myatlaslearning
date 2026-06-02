// content/y9/math/islands/t04.js — Year 9 Maths Topic 4: Standard Form
// Islands m9i-04-1 .. m9i-04-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-04-1 — Writing & Converting Standard Form
  {id:"m9fc-04-1-1", islandId:"m9i-04-1", front:"What does standard form look like?",
   back:"A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.\n\nExample: 6 400 = 6.4 × 10³. The 'A' part must be a single non-zero digit before the point.", difficulty:1, category:"definition"},
  {id:"m9fc-04-1-2", islandId:"m9i-04-1", front:"Write 52 000 in standard form.",
   back:"5.2 × 10⁴\n\nPut the point after the first digit (5.2) then count how many places it moved: 4 places, so × 10⁴.", difficulty:1, category:"calculation"},
  {id:"m9fc-04-1-3", islandId:"m9i-04-1", front:"Write 0.0008 in standard form.",
   back:"8 × 10⁻⁴\n\nSmall numbers use a NEGATIVE power. The 8 sits in the fourth place after the point, so × 10⁻⁴.", difficulty:2, category:"calculation"},
  {id:"m9fc-04-1-4", islandId:"m9i-04-1", front:"Convert 3.1 × 10⁵ to an ordinary number.",
   back:"310 000\n\nA power of 5 means move the decimal point 5 places to the right, filling with zeros.", difficulty:2, category:"calculation"},
  {id:"m9fc-04-1-5", islandId:"m9i-04-1", front:"Why is 14 × 10³ NOT in standard form?",
   back:"Because 14 is not between 1 and 10.\n\nFix it: 14 × 10³ = 1.4 × 10⁴. The 'A' part must satisfy 1 ≤ A < 10.", difficulty:2, category:"application"},
  {id:"m9fc-04-1-6", islandId:"m9i-04-1", front:"Does a negative power mean a negative number?",
   back:"No. A negative power means a SMALL positive number.\n\n7 × 10⁻³ = 0.007, which is positive. The sign of the power is about size, not sign.", difficulty:2, category:"concept"},

  // m9i-04-2 — Calculating with Standard Form
  {id:"m9fc-04-2-1", islandId:"m9i-04-2", front:"How do you multiply numbers in standard form?",
   back:"Multiply the A parts, and ADD the powers of 10.\n\n(2 × 10³) × (4 × 10²) = 8 × 10⁵.", difficulty:2, category:"definition"},
  {id:"m9fc-04-2-2", islandId:"m9i-04-2", front:"How do you divide numbers in standard form?",
   back:"Divide the A parts, and SUBTRACT the powers of 10.\n\n(8 × 10⁷) ÷ (2 × 10³) = 4 × 10⁴.", difficulty:2, category:"definition"},
  {id:"m9fc-04-2-3", islandId:"m9i-04-2", front:"Work out (3 × 10⁴) × (5 × 10²).",
   back:"1.5 × 10⁷\n\n3 × 5 = 15 and 10⁴ × 10² = 10⁶, giving 15 × 10⁶. But 15 is too big, so re-adjust: 1.5 × 10⁷.", difficulty:3, category:"calculation"},
  {id:"m9fc-04-2-4", islandId:"m9i-04-2", front:"Why does 15 × 10⁶ need re-adjusting?",
   back:"Because 15 is not between 1 and 10.\n\n15 × 10⁶ = 1.5 × 10⁷ — move the point one place left and add 1 to the power.", difficulty:2, category:"concept"},
  {id:"m9fc-04-2-5", islandId:"m9i-04-2", front:"How do you ADD numbers in standard form like 3×10⁴ + 5×10³?",
   back:"Give them the same power first.\n\n5 × 10³ = 0.5 × 10⁴, so 3 × 10⁴ + 0.5 × 10⁴ = 3.5 × 10⁴.", difficulty:3, category:"application"},
  {id:"m9fc-04-2-6", islandId:"m9i-04-2", front:"Work out (8 × 10⁵) ÷ (2 × 10⁻²).",
   back:"4 × 10⁷\n\n8 ÷ 2 = 4. Powers: 5 − (−2) = 7. So the answer is 4 × 10⁷.", difficulty:3, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m9i-04-1": [
    {q:"Write 4 700 000 in standard form.", opts:["4.7 × 10⁶","47 × 10⁵","4.7 × 10⁷","0.47 × 10⁷"], c:0,
     e:"Point after the first digit gives 4.7; it moved 6 places, so 4.7 × 10⁶. 47 × 10⁵ isn't standard form (47 ≥ 10)."},
    {q:"Write 0.00056 in standard form.", opts:["5.6 × 10⁻⁴","5.6 × 10⁴","56 × 10⁻⁵","5.6 × 10⁻³"], c:0,
     e:"The 5 is in the fourth decimal place, so 5.6 × 10⁻⁴. A small number takes a negative power."},
    {q:"Convert 2.05 × 10⁴ to an ordinary number.", opts:["20 500","2050","205 000","2 050 000"], c:0,
     e:"Move the point 4 places right: 2.05 → 20 500."},
    {q:"Which of these is correctly written in standard form?", opts:["6.3 × 10⁵","12 × 10⁴","0.9 × 10⁶","63 × 10⁴"], c:0,
     e:"Only 6.3 × 10⁵ has 1 ≤ A < 10. The others have A = 12, 0.9 or 63, which break the rule."},
    {q:"Convert 9 × 10⁻³ to an ordinary number.", opts:["0.009","0.0009","9000","−0.009"], c:0,
     e:"A power of −3 moves the point 3 places left: 9 → 0.009. The value is positive."}
  ],
  "m9i-04-2": [
    {q:"Work out (2 × 10³) × (4 × 10⁴).", opts:["8 × 10⁷","8 × 10¹²","6 × 10⁷","8 × 10⁵"], c:0,
     e:"Multiply 2 × 4 = 8 and add the powers 3 + 4 = 7, giving 8 × 10⁷."},
    {q:"Work out (9 × 10⁸) ÷ (3 × 10²).", opts:["3 × 10⁶","3 × 10⁴","6 × 10⁶","3 × 10¹⁰"], c:0,
     e:"Divide 9 ÷ 3 = 3 and subtract the powers 8 − 2 = 6, giving 3 × 10⁶."},
    {q:"Work out (5 × 10⁴) × (6 × 10³) in standard form.", opts:["3 × 10⁸","30 × 10⁷","3 × 10⁷","3.0 × 10¹²"], c:0,
     e:"5 × 6 = 30 and 10⁴ × 10³ = 10⁷, giving 30 × 10⁷. Re-adjust: 30 × 10⁷ = 3 × 10⁸."},
    {q:"Work out (7 × 10⁵) ÷ (2 × 10⁻¹).", opts:["3.5 × 10⁶","3.5 × 10⁴","3.5 × 10⁵","5 × 10⁶"], c:0,
     e:"7 ÷ 2 = 3.5 and 5 − (−1) = 6, giving 3.5 × 10⁶."},
    {q:"Work out 6 × 10⁴ + 3 × 10³.", opts:["6.3 × 10⁴","9 × 10⁷","6.3 × 10⁷","9 × 10⁴"], c:0,
     e:"Match powers: 3 × 10³ = 0.3 × 10⁴, so 6 × 10⁴ + 0.3 × 10⁴ = 6.3 × 10⁴. You cannot just add the powers."}
  ]
});

Object.assign(LESSONS, {
  "m9i-04-1": `<h2>Writing &amp; Converting Standard Form</h2>
<p><strong>Standard form</strong> writes any number as A × 10ⁿ, where A is at least 1 but less than 10, and n is a whole number. It is a tidy way to handle very large or very small numbers.</p>
<div class="lesson-diagram" data-diagram="math-standard-form"><p class="diagram-caption">Big numbers take a positive power; small numbers take a negative power</p></div>
<h3>Worked example</h3>
<p>Write 52 000 in standard form.</p>
<ul>
<li>Put the point after the first digit: 5.2.</li>
<li>Count how many places the point moved: 4.</li>
<li>So 52 000 = <strong>5.2 × 10⁴</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>A negative power does not mean a negative number — 7 × 10⁻³ = 0.007, which is positive. And 14 × 10³ is not standard form because 14 ≥ 10; tidy it to 1.4 × 10⁴.</p>`,

  "m9i-04-2": `<h2>Calculating with Standard Form</h2>
<p>To <strong>multiply</strong>: multiply the A parts and ADD the powers. To <strong>divide</strong>: divide the A parts and SUBTRACT the powers. Always check the answer is still standard form and re-adjust if A falls outside 1–10.</p>
<h3>Worked example</h3>
<p>Work out (5 × 10⁴) × (6 × 10³).</p>
<ul>
<li>A parts: 5 × 6 = 30. Powers: 10⁴ × 10³ = 10⁷. So far 30 × 10⁷.</li>
<li>30 is too big, so re-adjust: 30 × 10⁷ = <strong>3 × 10⁸</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>To add or subtract you must give a <em>common power</em> first: 6 × 10⁴ + 3 × 10³ = 6 × 10⁴ + 0.3 × 10⁴ = 6.3 × 10⁴. You cannot simply add the powers.</p>`
});
