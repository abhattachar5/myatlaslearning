// content/y10/math/islands/t01.js — Year 10 Maths Topic 1: Linear Equations & Inequalities
// Islands m10i-01-1 .. m10i-01-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m10i-01-1 — Solving Linear Equations
  {id:"m10fc-01-1-1", islandId:"m10i-01-1", front:"What does 'solve an equation' mean?",
   back:"Find the value of the letter that makes both sides equal.\n\nUse inverse operations to undo what has been done to the unknown, keeping the equation balanced.", difficulty:1, category:"definition"},
  {id:"m10fc-01-1-2", islandId:"m10i-01-1", front:"Solve x + 7 = 12.",
   back:"x = 5\n\nThe inverse of + 7 is − 7: subtract 7 from both sides, 12 − 7 = 5.", difficulty:1, category:"calculation"},
  {id:"m10fc-01-1-3", islandId:"m10i-01-1", front:"Solve 3x = 21.",
   back:"x = 7\n\nThe inverse of × 3 is ÷ 3: 21 ÷ 3 = 7.", difficulty:1, category:"calculation"},
  {id:"m10fc-01-1-4", islandId:"m10i-01-1", front:"Solve 2x + 5 = 17.",
   back:"x = 6\n\nUndo in reverse order: subtract 5 (→ 2x = 12), then divide by 2 (→ x = 6).", difficulty:2, category:"calculation"},
  {id:"m10fc-01-1-5", islandId:"m10i-01-1", front:"How do you check a solution?",
   back:"Substitute it back into the original equation and confirm both sides match.\n\nFor 2x + 5 = 17 with x = 6: 2×6 + 5 = 17 ✓.", difficulty:2, category:"concept"},
  {id:"m10fc-01-1-6", islandId:"m10i-01-1", front:"Solve x/4 = 3.",
   back:"x = 12\n\nThe inverse of ÷ 4 is × 4: 3 × 4 = 12.", difficulty:2, category:"application"},

  // m10i-01-2 — Brackets & Unknowns on Both Sides
  {id:"m10fc-01-2-1", islandId:"m10i-01-2", front:"How do you solve an equation with a bracket, like 3(x + 2) = 18?",
   back:"Expand the bracket first, then solve.\n\n3(x + 2) = 18 → 3x + 6 = 18 → 3x = 12 → x = 4.", difficulty:2, category:"definition"},
  {id:"m10fc-01-2-2", islandId:"m10i-01-2", front:"How do you solve when x is on both sides, e.g. 5x + 1 = 2x + 13?",
   back:"Collect the x terms on one side and numbers on the other.\n\n5x − 2x = 13 − 1 → 3x = 12 → x = 4.", difficulty:2, category:"concept"},
  {id:"m10fc-01-2-3", islandId:"m10i-01-2", front:"Solve 4(x − 1) = 2x + 6.",
   back:"x = 5\n\nExpand: 4x − 4 = 2x + 6. Collect: 4x − 2x = 6 + 4 → 2x = 10 → x = 5.", difficulty:3, category:"calculation"},
  {id:"m10fc-01-2-4", islandId:"m10i-01-2", front:"When x is on both sides, which side should you move it to?",
   back:"Move it to the side with the LARGER x-coefficient, so x stays positive.\n\nIt avoids negative coefficients and reduces slips.", difficulty:2, category:"concept"},
  {id:"m10fc-01-2-5", islandId:"m10i-01-2", front:"Solve (x + 3)/2 = 5.",
   back:"x = 7\n\nMultiply both sides by 2: x + 3 = 10, then subtract 3: x = 7.", difficulty:3, category:"application"},
  {id:"m10fc-01-2-6", islandId:"m10i-01-2", front:"Solve 2(3x − 1) = 4(x + 2).",
   back:"x = 5\n\nExpand both: 6x − 2 = 4x + 8. Collect: 2x = 10 → x = 5.", difficulty:3, category:"calculation"},

  // m10i-01-3 — Inequalities & Number Lines
  {id:"m10fc-01-3-1", islandId:"m10i-01-3", front:"What do the inequality symbols <, ≤, >, ≥ mean?",
   back:"< less than · ≤ less than or equal to · > greater than · ≥ greater than or equal to.\n\n'Or equal to' versions include the boundary value.", difficulty:1, category:"definition"},
  {id:"m10fc-01-3-2", islandId:"m10i-01-3", front:"Solve 3x + 1 < 16.",
   back:"x < 5\n\nSolve like an equation: 3x < 15 → x < 5. The inequality sign stays the same.", difficulty:2, category:"calculation"},
  {id:"m10fc-01-3-3", islandId:"m10i-01-3", front:"On a number line, when do you use an open circle vs a filled circle?",
   back:"Open circle ○ for < or > (boundary NOT included).\nFilled circle ● for ≤ or ≥ (boundary included).", difficulty:2, category:"concept"},
  {id:"m10fc-01-3-4", islandId:"m10i-01-3", front:"List the integer values that satisfy −2 < x ≤ 3.",
   back:"−1, 0, 1, 2, 3\n\n−2 is excluded (strict <), but 3 is included (≤).", difficulty:2, category:"application"},
  {id:"m10fc-01-3-5", islandId:"m10i-01-3", front:"What happens to the inequality sign when you multiply or divide by a negative?",
   back:"It FLIPS (reverses).\n\nFor −2x < 6, divide by −2 and flip: x > −3.", difficulty:3, category:"concept"},
  {id:"m10fc-01-3-6", islandId:"m10i-01-3", front:"Solve 4x − 3 ≥ 9.",
   back:"x ≥ 3\n\nAdd 3: 4x ≥ 12, then divide by 4: x ≥ 3. The ≥ is unchanged (dividing by a positive).", difficulty:2, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m10i-01-1": [
    {q:"Solve x − 6 = 10.", opts:["16","4","−4","60"], c:0,
     e:"Add 6 to both sides: x = 10 + 6 = 16."},
    {q:"Solve 5x = 35.", opts:["7","30","40","175"], c:0,
     e:"Divide both sides by 5: x = 35 ÷ 5 = 7."},
    {q:"Solve 3x + 4 = 19.", opts:["5","7.7","15","45"], c:0,
     e:"Subtract 4 (→ 3x = 15), then divide by 3 (→ x = 5)."},
    {q:"Solve x/3 = 6.", opts:["18","2","9","3"], c:0,
     e:"Multiply both sides by 3: x = 6 × 3 = 18."},
    {q:"Solve 2x − 7 = 5.", opts:["6","−1","9","2.4"], c:0,
     e:"Add 7 (→ 2x = 12), then divide by 2 (→ x = 6)."}
  ],
  "m10i-01-2": [
    {q:"Solve 2(x + 4) = 20.", opts:["6","8","12","16"], c:0,
     e:"Expand: 2x + 8 = 20 → 2x = 12 → x = 6."},
    {q:"Solve 6x − 5 = 4x + 7.", opts:["6","1","12","−6"], c:0,
     e:"Collect: 6x − 4x = 7 + 5 → 2x = 12 → x = 6."},
    {q:"Solve 5(x − 2) = 3x + 4.", opts:["7","3","14","−3"], c:0,
     e:"Expand: 5x − 10 = 3x + 4. Collect: 2x = 14 → x = 7."},
    {q:"Solve (x − 1)/3 = 4.", opts:["13","11","15","5"], c:0,
     e:"Multiply by 3: x − 1 = 12, then add 1: x = 13."},
    {q:"Solve 3(2x + 1) = 2(x + 9).", opts:["3.75","4","2","7.5"], c:0,
     e:"Expand: 6x + 3 = 2x + 18. Collect: 4x = 15 → x = 3.75."}
  ],
  "m10i-01-3": [
    {q:"Solve 2x + 3 < 11.", opts:["x < 4","x > 4","x < 7","x ≤ 4"], c:0,
     e:"2x < 8 → x < 4. The sign stays < (dividing by a positive)."},
    {q:"Solve 5x − 2 ≥ 13.", opts:["x ≥ 3","x ≤ 3","x ≥ 2.2","x > 3"], c:0,
     e:"5x ≥ 15 → x ≥ 3."},
    {q:"How many integers satisfy −1 ≤ x < 4?", opts:["5","4","6","3"], c:0,
     e:"The integers are −1, 0, 1, 2, 3 — that is 5 values (−1 included, 4 excluded)."},
    {q:"Solve −3x > 12.", opts:["x < −4","x > −4","x < 4","x > 4"], c:0,
     e:"Divide by −3 and FLIP the sign: x < −4."},
    {q:"Which circle shows x > 2 at the value 2 on a number line?", opts:["Open circle","Filled circle","No circle","Two circles"], c:0,
     e:"> does not include the boundary, so 2 is marked with an open circle."}
  ]
});

Object.assign(LESSONS, {
  "m10i-01-1": `<h2>Solving Linear Equations</h2>
<p>To <strong>solve</strong> an equation, find the value of the letter that balances both sides. Use <strong>inverse operations</strong> — the opposite of what has been done to the unknown — and always do the same to both sides to keep it balanced.</p>
<div class="lesson-diagram" data-diagram="math-equation-balance"><p class="diagram-caption">An equation is a balance: do the same to both sides to keep it level</p></div>
<h3>Worked example</h3>
<p>Solve 2x + 5 = 17.</p>
<ul>
<li>Undo + 5 first: subtract 5 from both sides → 2x = 12.</li>
<li>Undo × 2: divide both sides by 2 → <strong>x = 6</strong>.</li>
<li>Check: 2 × 6 + 5 = 17 ✓.</li>
</ul>
<h3>Common mistake</h3>
<p>Undo operations in reverse order (BIDMAS backwards): deal with + and − before × and ÷. Subtracting the 5 before dividing keeps the working clean.</p>`,

  "m10i-01-2": `<h2>Brackets &amp; Unknowns on Both Sides</h2>
<p>When an equation has a <strong>bracket</strong>, expand it first. When the unknown appears on <strong>both sides</strong>, collect the letter terms on one side and the numbers on the other.</p>
<h3>Worked example</h3>
<p>Solve 4(x − 1) = 2x + 6.</p>
<ul>
<li>Expand the bracket: 4x − 4 = 2x + 6.</li>
<li>Collect x on the left, numbers on the right: 4x − 2x = 6 + 4 → 2x = 10.</li>
<li>Divide by 2: <strong>x = 5</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Move the x-terms to the side with the <em>larger</em> coefficient so x stays positive, and remember to multiply <em>every</em> term inside a bracket — 4(x − 1) is 4x − 4, not 4x − 1.</p>`,

  "m10i-01-3": `<h2>Inequalities &amp; Number Lines</h2>
<p>An <strong>inequality</strong> is solved almost exactly like an equation — but it describes a <em>range</em> of values, not a single one. Solve it the same way, then show the answer on a number line.</p>
<div class="lesson-diagram" data-diagram="math-inequality-line"><p class="diagram-caption">Open circle for &lt; or &gt;; filled circle for ≤ or ≥</p></div>
<h3>Worked example</h3>
<p>Solve 3x + 1 < 16.</p>
<ul>
<li>Subtract 1: 3x < 15.</li>
<li>Divide by 3: <strong>x < 5</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>If you multiply or divide both sides by a <strong>negative</strong> number, the inequality sign <em>flips</em>. For −2x < 6, dividing by −2 gives x > −3, not x < −3.</p>`
});
