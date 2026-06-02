// content/y11/math/islands/t01.js — Year 11 Maths Topic 1: Quadratic Formula & Completing the Square
// Islands m11i-01-1 .. m11i-01-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-01-1 — The Quadratic Formula
  {id:"m11fc-01-1-1", islandId:"m11i-01-1", front:"State the quadratic formula.",
   back:"For ax² + bx + c = 0, x = (−b ± √(b² − 4ac)) / 2a.\n\nIt solves ANY quadratic, even those that don't factorise.", difficulty:2, category:"definition"},
  {id:"m11fc-01-1-2", islandId:"m11i-01-1", front:"In 2x² − 5x + 1 = 0, what are a, b and c?",
   back:"a = 2, b = −5, c = 1.\n\nMatch the coefficients carefully, keeping the signs.", difficulty:2, category:"concept"},
  {id:"m11fc-01-1-3", islandId:"m11i-01-1", front:"What is the discriminant and what does it tell you?",
   back:"b² − 4ac. It tells you the number of real solutions.\n\n> 0: two solutions; = 0: one (repeated); < 0: no real solutions.", difficulty:3, category:"concept"},
  {id:"m11fc-01-1-4", islandId:"m11i-01-1", front:"Why is the quadratic formula useful?",
   back:"It works when a quadratic won't factorise nicely.\n\nThe ± gives the two solutions; you often round to a required accuracy.", difficulty:2, category:"concept"},
  {id:"m11fc-01-1-5", islandId:"m11i-01-1", front:"Solve x² + 4x + 1 = 0 to 2 d.p.",
   back:"x ≈ −0.27 or x ≈ −3.73\n\nx = (−4 ± √(16 − 4))/2 = (−4 ± √12)/2.", difficulty:3, category:"calculation"},
  {id:"m11fc-01-1-6", islandId:"m11i-01-1", front:"What is the most common error using the formula?",
   back:"Sign mistakes with b and the −b term.\n\nUse brackets: −(−5) = +5, and (−5)² = 25 (not −25).", difficulty:2, category:"application"},

  // m11i-01-2 — Completing the Square
  {id:"m11fc-01-2-1", islandId:"m11i-01-2", front:"What form does completing the square give?",
   back:"(x + p)² + q.\n\nFor x² + bx + c, p is half of b and q adjusts the constant.", difficulty:2, category:"definition"},
  {id:"m11fc-01-2-2", islandId:"m11i-01-2", front:"Complete the square for x² + 6x.",
   back:"(x + 3)² − 9\n\nHalve 6 to get 3: (x + 3)² = x² + 6x + 9, so subtract 9 to keep it equal.", difficulty:2, category:"calculation"},
  {id:"m11fc-01-2-3", islandId:"m11i-01-2", front:"Complete the square for x² + 8x + 5.",
   back:"(x + 4)² − 11\n\nHalf of 8 is 4: (x + 4)² = x² + 8x + 16. Then +5 − 16 = −11.", difficulty:3, category:"calculation"},
  {id:"m11fc-01-2-4", islandId:"m11i-01-2", front:"How does completing the square solve a quadratic?",
   back:"Isolate the bracket, square-root both sides, then solve.\n\n(x + 3)² = 9 → x + 3 = ±3 → x = 0 or x = −6.", difficulty:3, category:"concept"},
  {id:"m11fc-01-2-5", islandId:"m11i-01-2", front:"Complete the square for x² − 10x + 2.",
   back:"(x − 5)² − 23\n\nHalf of −10 is −5: (x − 5)² = x² − 10x + 25. Then +2 − 25 = −23.", difficulty:3, category:"calculation"},
  {id:"m11fc-01-2-6", islandId:"m11i-01-2", front:"In (x + p)² + q, how do p and q relate to b and c?",
   back:"p = b/2 and q = c − p².\n\nYou halve b for p, then subtract p² from c for q.", difficulty:3, category:"concept"},

  // m11i-01-3 — Turning Points & Sketching
  {id:"m11fc-01-3-1", islandId:"m11i-01-3", front:"How do you read the turning point from (x + p)² + q?",
   back:"The turning point is (−p, q).\n\nThe bracket is smallest (zero) when x = −p, giving the minimum value q.", difficulty:3, category:"definition"},
  {id:"m11fc-01-3-2", islandId:"m11i-01-3", front:"Find the turning point of y = (x − 3)² + 2.",
   back:"(3, 2)\n\nThe bracket is zero when x = 3, giving the minimum y = 2.", difficulty:2, category:"calculation"},
  {id:"m11fc-01-3-3", islandId:"m11i-01-3", front:"What is the line of symmetry of y = (x + 4)² − 1?",
   back:"x = −4\n\nA parabola is symmetric about the vertical line through its turning point.", difficulty:2, category:"calculation"},
  {id:"m11fc-01-3-4", islandId:"m11i-01-3", front:"How do you know if a parabola has a minimum or maximum?",
   back:"Positive x² → a minimum (U shape). Negative x² → a maximum (∩ shape).", difficulty:2, category:"concept"},
  {id:"m11fc-01-3-5", islandId:"m11i-01-3", front:"What key points help you sketch a quadratic?",
   back:"The turning point, the y-intercept (set x = 0), and the roots (set y = 0).\n\nPlot these, then draw a smooth curve.", difficulty:3, category:"concept"},
  {id:"m11fc-01-3-6", islandId:"m11i-01-3", front:"y = x² − 6x + 5 has turning point where?",
   back:"(3, −4)\n\nComplete the square: (x − 3)² − 4, so the minimum is at (3, −4).", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-01-1": [
    {q:"In 3x² + 2x − 7 = 0, the values of a, b, c are:", opts:["3, 2, −7","3, 2, 7","2, 3, −7","3, −2, 7"], c:0,
     e:"Match the coefficients with their signs: a = 3, b = 2, c = −7."},
    {q:"The quadratic formula is x =", opts:["(−b ± √(b² − 4ac))/2a","(b ± √(b² − 4ac))/2a","(−b ± √(b² + 4ac))/2a","−b/2a"], c:0,
     e:"x = (−b ± √(b² − 4ac))/2a."},
    {q:"If b² − 4ac < 0, the equation has:", opts:["No real solutions","Two solutions","One solution","Infinite solutions"], c:0,
     e:"A negative discriminant means the square root is not real, so there are no real solutions."},
    {q:"For x² − 4x + 1 = 0, b² − 4ac =", opts:["12","20","8","−12"], c:0,
     e:"(−4)² − 4(1)(1) = 16 − 4 = 12."},
    {q:"Solve x² + 2x − 4 = 0 to 1 d.p.", opts:["1.2 or −3.2","1.0 or −4.0","2.2 or −4.2","0.2 or −2.2"], c:0,
     e:"x = (−2 ± √(4 + 16))/2 = (−2 ± √20)/2 ≈ 1.2 or −3.2."}
  ],
  "m11i-01-2": [
    {q:"Complete the square for x² + 4x.", opts:["(x + 2)² − 4","(x + 4)² − 16","(x + 2)² + 4","(x + 2)²"], c:0,
     e:"Half of 4 is 2: (x + 2)² = x² + 4x + 4, so subtract 4."},
    {q:"Complete the square for x² + 10x + 3.", opts:["(x + 5)² − 22","(x + 5)² + 3","(x + 10)² − 97","(x + 5)² − 28"], c:0,
     e:"Half of 10 is 5: (x + 5)² = x² + 10x + 25; then 3 − 25 = −22."},
    {q:"Complete the square for x² − 6x + 1.", opts:["(x − 3)² − 8","(x − 3)² + 1","(x − 6)² − 35","(x − 3)² − 10"], c:0,
     e:"Half of −6 is −3: (x − 3)² = x² − 6x + 9; then 1 − 9 = −8."},
    {q:"Solve (x + 2)² = 9.", opts:["x = 1 or x = −5","x = 1 or x = 5","x = 7 or x = −11","x = 3 or x = −3"], c:0,
     e:"x + 2 = ±3, so x = 1 or x = −5."},
    {q:"In (x + p)² + q from x² + bx + c, p equals:", opts:["b/2","b","2b","c/2"], c:0,
     e:"You halve the coefficient of x: p = b/2."}
  ],
  "m11i-01-3": [
    {q:"The turning point of y = (x − 2)² + 5 is:", opts:["(2, 5)","(−2, 5)","(2, −5)","(5, 2)"], c:0,
     e:"The bracket is zero at x = 2, giving the minimum y = 5: (2, 5)."},
    {q:"The line of symmetry of y = (x + 3)² − 4 is:", opts:["x = −3","x = 3","x = −4","y = −4"], c:0,
     e:"It is the vertical line through the turning point: x = −3."},
    {q:"y = (x − 1)² + 2 has a:", opts:["Minimum","Maximum","Root at x = 1","No turning point"], c:0,
     e:"Positive x² gives a U shape, so a minimum (at (1, 2))."},
    {q:"Where does y = x² − 4x + 7 turn? (complete the square)", opts:["(2, 3)","(−2, 3)","(2, −3)","(4, 7)"], c:0,
     e:"(x − 2)² + 3, so the turning point is (2, 3)."},
    {q:"To find the roots when sketching, you set:", opts:["y = 0","x = 0","y = turning point","x = symmetry line"], c:0,
     e:"Roots are where the curve crosses the x-axis, i.e. y = 0."}
  ]
});

Object.assign(LESSONS, {
  "m11i-01-1": `<h2>The Quadratic Formula</h2>
<p>The <strong>quadratic formula</strong> solves any equation ax² + bx + c = 0, even when it won't factorise:</p>
<p style="text-align:center"><strong>x = (−b ± √(b² − 4ac)) / 2a</strong></p>
<p>Identify a, b and c (with their signs), substitute carefully, and use the ± to get both solutions. The part under the root, <strong>b² − 4ac</strong> (the discriminant), tells you how many real solutions there are: positive → two, zero → one, negative → none.</p>
<h3>Worked example</h3>
<p>Solve x² + 4x + 1 = 0. Here a = 1, b = 4, c = 1, so x = (−4 ± √(16 − 4))/2 = (−4 ± √12)/2 ≈ <strong>−0.27 or −3.73</strong> (2 d.p.).</p>
<h3>Common mistake</h3>
<p>Watch the signs: −b means −(b), and b² is always positive. Put values in brackets on a calculator to avoid sign slips.</p>`,

  "m11i-01-2": `<h2>Completing the Square</h2>
<p>Completing the square rewrites x² + bx + c as <strong>(x + p)² + q</strong>, where <strong>p = b/2</strong>. Because (x + p)² expands to x² + bx + p², you subtract p² to keep the expression equal, then combine with c.</p>
<h3>Worked example</h3>
<p>Complete the square for x² + 8x + 5.</p>
<ul>
<li>Half of 8 is 4, so start with (x + 4)² = x² + 8x + 16.</li>
<li>Adjust the constant: 5 − 16 = −11, giving <strong>(x + 4)² − 11</strong>.</li>
</ul>
<h3>Solving with it</h3>
<p>To solve, isolate the bracket and square-root: (x + 3)² = 9 → x + 3 = ±3 → x = 0 or x = −6.</p>`,

  "m11i-01-3": `<h2>Turning Points &amp; Sketching</h2>
<p>The completed-square form makes the <strong>turning point</strong> easy to read: y = (x + p)² + q has its turning point at <strong>(−p, q)</strong>, because the bracket is smallest (zero) when x = −p. The <strong>line of symmetry</strong> is x = −p.</p>
<div class="lesson-diagram" data-diagram="math-parabola"><p class="diagram-caption">A parabola: turning point, line of symmetry, roots and y-intercept</p></div>
<h3>Worked example</h3>
<p>y = x² − 6x + 5 = (x − 3)² − 4, so the turning point is <strong>(3, −4)</strong> and the line of symmetry is x = 3.</p>
<h3>Sketching checklist</h3>
<p>Plot the turning point, the y-intercept (set x = 0) and the roots (set y = 0). A positive x² gives a U-shaped minimum; a negative x² gives an ∩-shaped maximum.</p>`
});
