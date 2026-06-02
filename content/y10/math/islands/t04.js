// content/y10/math/islands/t04.js — Year 10 Maths Topic 4: Solving Quadratics
// Islands m10i-04-1 .. m10i-04-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-04-1 — Solving by Factorising
  {id:"m10fc-04-1-1", islandId:"m10i-04-1", front:"What is the zero-product rule?",
   back:"If two things multiply to give 0, at least one of them must be 0.\n\nSo if (x + a)(x + b) = 0, then x + a = 0 OR x + b = 0.", difficulty:2, category:"definition"},
  {id:"m10fc-04-1-2", islandId:"m10i-04-1", front:"What is the first step in solving a quadratic by factorising?",
   back:"Make sure it equals zero, then factorise.\n\nRearrange everything onto one side so the equation reads (…)(…) = 0.", difficulty:2, category:"concept"},
  {id:"m10fc-04-1-3", islandId:"m10i-04-1", front:"Solve (x − 2)(x + 5) = 0.",
   back:"x = 2 or x = −5\n\nSet each bracket to zero: x − 2 = 0 → x = 2; x + 5 = 0 → x = −5.", difficulty:2, category:"calculation"},
  {id:"m10fc-04-1-4", islandId:"m10i-04-1", front:"Solve x² + 7x + 12 = 0.",
   back:"x = −3 or x = −4\n\nFactorise: (x + 3)(x + 4) = 0, so x = −3 or x = −4.", difficulty:3, category:"calculation"},
  {id:"m10fc-04-1-5", islandId:"m10i-04-1", front:"Solve x² − 3x − 10 = 0.",
   back:"x = 5 or x = −2\n\nFactorise: (x − 5)(x + 2) = 0, so x = 5 or x = −2.", difficulty:3, category:"calculation"},
  {id:"m10fc-04-1-6", islandId:"m10i-04-1", front:"Solve x² = 9x.",
   back:"x = 0 or x = 9\n\nMove all to one side: x² − 9x = 0 → x(x − 9) = 0. Never divide by x — you would lose the x = 0 solution.", difficulty:3, category:"application"},

  // m10i-04-2 — Roots, Graphs & Problems
  {id:"m10fc-04-2-1", islandId:"m10i-04-2", front:"What do the solutions of a quadratic tell you on its graph?",
   back:"Where the curve crosses the x-axis (the roots).\n\nIf x² + bx + c = 0 has solutions p and q, the parabola cuts the x-axis at x = p and x = q.", difficulty:2, category:"concept"},
  {id:"m10fc-04-2-2", islandId:"m10i-04-2", front:"The graph of y = (x − 2)(x − 6) crosses the x-axis where?",
   back:"x = 2 and x = 6.\n\nThe curve is zero when each bracket is zero.", difficulty:2, category:"application"},
  {id:"m10fc-04-2-3", islandId:"m10i-04-2", front:"A rectangle has width x and length x + 3 and area 40. Form an equation.",
   back:"x(x + 3) = 40, i.e. x² + 3x − 40 = 0.\n\nFactorise: (x + 8)(x − 5) = 0, so x = 5 (reject x = −8, a length can't be negative).", difficulty:3, category:"application"},
  {id:"m10fc-04-2-4", islandId:"m10i-04-2", front:"Why do you sometimes reject one solution of a quadratic?",
   back:"Because it doesn't fit the context.\n\nLengths, ages and counts can't be negative, so a negative solution is rejected even though it solves the equation.", difficulty:3, category:"concept"},
  {id:"m10fc-04-2-5", islandId:"m10i-04-2", front:"How many times can a parabola cross the x-axis?",
   back:"Twice, once, or not at all.\n\nTwo roots (two crossings), a repeated root (it just touches), or no real roots (it misses the axis).", difficulty:2, category:"concept"},
  {id:"m10fc-04-2-6", islandId:"m10i-04-2", front:"Solve x² − 4 = 0 and link to the graph.",
   back:"x = 2 or x = −2.\n\nx² − 4 = (x + 2)(x − 2) = 0. The graph y = x² − 4 crosses the x-axis at −2 and 2.", difficulty:2, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m10i-04-1": [
    {q:"Solve (x − 4)(x + 1) = 0.", opts:["x = 4 or x = −1","x = −4 or x = 1","x = 4 or x = 1","x = −4 or x = −1"], c:0,
     e:"Each bracket = 0: x − 4 = 0 → x = 4; x + 1 = 0 → x = −1."},
    {q:"Solve x² + 5x + 6 = 0.", opts:["x = −2 or x = −3","x = 2 or x = 3","x = −1 or x = −6","x = 2 or x = −3"], c:0,
     e:"(x + 2)(x + 3) = 0, so x = −2 or x = −3."},
    {q:"Solve x² − x − 12 = 0.", opts:["x = 4 or x = −3","x = −4 or x = 3","x = 4 or x = 3","x = 6 or x = −2"], c:0,
     e:"(x − 4)(x + 3) = 0, so x = 4 or x = −3."},
    {q:"Solve x² = 6x.", opts:["x = 0 or x = 6","x = 6 only","x = 0 or x = −6","x = 1 or x = 6"], c:0,
     e:"x² − 6x = 0 → x(x − 6) = 0, so x = 0 or x = 6. Don't divide by x."},
    {q:"Solve x² − 16 = 0.", opts:["x = 4 or x = −4","x = 4 only","x = 8 or x = −8","x = 16 or x = −16"], c:0,
     e:"(x + 4)(x − 4) = 0, so x = ±4."}
  ],
  "m10i-04-2": [
    {q:"The graph y = (x + 1)(x − 5) crosses the x-axis at:", opts:["x = −1 and x = 5","x = 1 and x = −5","x = −1 and x = −5","x = 1 and x = 5"], c:0,
     e:"The curve is zero when each bracket is zero: x = −1 and x = 5."},
    {q:"A rectangle has width x and length x + 2 with area 35. Find the width.", opts:["5","7","6","35"], c:0,
     e:"x(x + 2) = 35 → x² + 2x − 35 = 0 → (x + 7)(x − 5) = 0. Reject −7, so x = 5."},
    {q:"Which solution should be rejected for a length: x = 8 or x = −3?", opts:["x = −3","x = 8","Both","Neither"], c:0,
     e:"A length cannot be negative, so x = −3 is rejected."},
    {q:"If a quadratic graph just touches the x-axis, it has:", opts:["One (repeated) root","Two roots","No roots","Three roots"], c:0,
     e:"Touching the axis once means a repeated root — the two solutions are equal."},
    {q:"The solutions of x² − 7x + 10 = 0 are also the x-axis crossings of:", opts:["y = x² − 7x + 10","y = x − 7","y = 7x","y = x² + 10"], c:0,
     e:"The roots of x² − 7x + 10 = 0 are where y = x² − 7x + 10 meets the x-axis (x = 2 and x = 5)."}
  ]
});

Object.assign(LESSONS, {
  "m10i-04-1": `<h2>Solving by Factorising</h2>
<p>To solve a quadratic, get it equal to <strong>zero</strong>, factorise, then use the <strong>zero-product rule</strong>: if two things multiply to 0, one of them must be 0. So set each bracket to zero in turn.</p>
<p>If you need a reminder of <em>how</em> to factorise a quadratic, that is the previous topic — <strong>Expanding &amp; Factorising Quadratics</strong>. The quick recap: find two numbers that <strong>multiply to the last number</strong> and <strong>add to the middle number</strong>.</p>
<h3>Worked example</h3>
<p>Solve x² − 3x − 10 = 0.</p>
<ul>
<li><strong>Factorise first.</strong> We need two numbers that multiply to −10 and add to −3. Testing pairs: −5 and +2 give (−5) × (+2) = −10 ✓ and (−5) + (+2) = −3 ✓.</li>
<li>So x² − 3x − 10 = (x − 5)(x + 2), and the equation is (x − 5)(x + 2) = 0.</li>
<li><strong>Zero-product rule.</strong> One bracket must be 0: x − 5 = 0 → x = 5, or x + 2 = 0 → <strong>x = −2</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>For x² = 9x, don't divide by x — that loses the x = 0 solution. Rearrange to x² − 9x = 0, then factorise x(x − 9) = 0 to get x = 0 or x = 9.</p>`,

  "m10i-04-2": `<h2>Roots, Graphs &amp; Problems</h2>
<p>The solutions of a quadratic are its <strong>roots</strong> — the x-values where its graph (a parabola) crosses the x-axis. A parabola can cross twice, touch once (a repeated root), or miss the axis (no real roots).</p>
<h3>Worked example</h3>
<p>A rectangle has width x and length x + 3 with area 40.</p>
<ul>
<li>x(x + 3) = 40 → x² + 3x − 40 = 0 → (x + 8)(x − 5) = 0.</li>
<li>x = 5 or x = −8. A length can't be negative, so <strong>x = 5</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>In worded problems, always check both solutions against the context and reject any that make no sense (negative lengths, ages or counts).</p>`
});
