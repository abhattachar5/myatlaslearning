// content/y11/math/islands/t03.js — Year 11 Maths Topic 3: Simultaneous Equations (linear & quadratic)
// Islands m11i-03-1 .. m11i-03-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-03-1 — Linear & Quadratic by Substitution
  {id:"m11fc-03-1-1", islandId:"m11i-03-1", front:"How do you solve a linear and a quadratic equation together?",
   back:"Rearrange the LINEAR one for a variable, then substitute it into the quadratic.\n\nThis gives a single quadratic to solve.", difficulty:2, category:"definition"},
  {id:"m11fc-03-1-2", islandId:"m11i-03-1", front:"How many solution pairs does a line-and-curve system usually have?",
   back:"Up to two.\n\nA line can cross a curve at two points, touch it at one, or miss it.", difficulty:2, category:"concept"},
  {id:"m11fc-03-1-3", islandId:"m11i-03-1", front:"Solve y = x + 2 and y = x².",
   back:"(2, 4) and (−1, 1)\n\nx² = x + 2 → x² − x − 2 = 0 → (x − 2)(x + 1) = 0, so x = 2 (y = 4) or x = −1 (y = 1).", difficulty:3, category:"calculation"},
  {id:"m11fc-03-1-4", islandId:"m11i-03-1", front:"After substituting, what do you do with the quadratic?",
   back:"Set it to zero and solve (factorise or use the formula).\n\nEach x-value gives a matching y-value from the linear equation.", difficulty:2, category:"concept"},
  {id:"m11fc-03-1-5", islandId:"m11i-03-1", front:"Solve y = x² and y = 2x + 3.",
   back:"(3, 9) and (−1, 1)\n\nx² = 2x + 3 → x² − 2x − 3 = 0 → (x − 3)(x + 1) = 0, so x = 3 or x = −1.", difficulty:3, category:"calculation"},
  {id:"m11fc-03-1-6", islandId:"m11i-03-1", front:"Why must each x-value be paired with its own y-value?",
   back:"Because each intersection point is a coordinate (x, y).\n\nSubstitute each x back into the linear equation to get its y.", difficulty:2, category:"application"},

  // m11i-03-2 — Graphical Solutions & Problems
  {id:"m11fc-03-2-1", islandId:"m11i-03-2", front:"What do the solutions represent on a graph?",
   back:"The points where the line meets the curve.\n\nThe coordinates of each intersection are a solution pair.", difficulty:2, category:"definition"},
  {id:"m11fc-03-2-2", islandId:"m11i-03-2", front:"What does it mean if the line only touches the curve once?",
   back:"There is exactly one solution (a repeated root).\n\nThe line is a tangent to the curve at that point.", difficulty:3, category:"concept"},
  {id:"m11fc-03-2-3", islandId:"m11i-03-2", front:"What if the substituted quadratic has no real solutions?",
   back:"The line and curve do not meet — there are no solutions.\n\nThe discriminant b² − 4ac is negative.", difficulty:3, category:"concept"},
  {id:"m11fc-03-2-4", islandId:"m11i-03-2", front:"To solve graphically, what do you draw?",
   back:"Both graphs on the same axes and read off the intersection points.", difficulty:2, category:"concept"},
  {id:"m11fc-03-2-5", islandId:"m11i-03-2", front:"A line meets a circle x² + y² = 25. How many solutions are possible?",
   back:"Zero, one or two.\n\nA line can miss the circle, touch it (tangent), or cut through it at two points.", difficulty:3, category:"application"},
  {id:"m11fc-03-2-6", islandId:"m11i-03-2", front:"How do you check a solution pair?",
   back:"Substitute both values into BOTH original equations.\n\nIf both equations are satisfied, the pair is correct.", difficulty:2, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-03-1": [
    {q:"Solve y = x² and y = 2x + 3. One solution is:", opts:["(3, 9)","(3, 6)","(2, 4)","(1, 5)"], c:0,
     e:"x² = 2x + 3 → x² − 2x − 3 = 0 → x = 3 or −1; x = 3 gives y = 9."},
    {q:"To solve a linear and quadratic pair, first:", opts:["Substitute the linear into the quadratic","Add the equations","Square the linear equation","Divide them"], c:0,
     e:"Rearrange the linear equation and substitute it into the quadratic."},
    {q:"After substituting you get x² − 5x + 6 = 0. The x-values are:", opts:["2 and 3","−2 and −3","1 and 6","5 and 6"], c:0,
     e:"(x − 2)(x − 3) = 0, so x = 2 or x = 3."},
    {q:"Solve y = x² − 1 and y = x + 1. One solution pair is:", opts:["(2, 3)","(2, 1)","(1, 0)","(−1, 0)"], c:0,
     e:"x² − 1 = x + 1 → x² − x − 2 = 0 → (x − 2)(x + 1) = 0; x = 2 gives y = 3."},
    {q:"Each x-value found should be paired with a y from:", opts:["The linear equation","The discriminant","A new equation","The graph only"], c:0,
     e:"Substitute each x into the (simpler) linear equation to get its y."}
  ],
  "m11i-03-2": [
    {q:"Graphically, the solutions are where:", opts:["The line meets the curve","The curve meets the y-axis","The gradient is zero","The line is horizontal"], c:0,
     e:"Each intersection of the line and curve is a solution pair."},
    {q:"If a line is a tangent to a curve, there is:", opts:["One solution","Two solutions","No solution","Infinite solutions"], c:0,
     e:"A tangent touches once — a single (repeated) solution."},
    {q:"If the substituted quadratic has b² − 4ac < 0:", opts:["No real solutions","Two solutions","One solution","Three solutions"], c:0,
     e:"A negative discriminant means the line and curve do not meet."},
    {q:"A line can cut a circle at most:", opts:["Twice","Once","Three times","Four times"], c:0,
     e:"A straight line meets a circle in at most two points."},
    {q:"To check a solution pair you substitute it into:", opts:["Both equations","Only the quadratic","Only the linear","Neither"], c:0,
     e:"A correct pair satisfies both original equations."}
  ]
});

Object.assign(LESSONS, {
  "m11i-03-1": `<h2>Linear &amp; Quadratic by Substitution</h2>
<p>To solve a linear and a quadratic equation together, rearrange the <strong>linear</strong> one for a variable and <strong>substitute</strong> it into the quadratic. That leaves a single quadratic to solve — usually giving two solution pairs (the line can cross the curve twice).</p>
<h3>Worked example</h3>
<p>Solve y = x² and y = 2x + 3.</p>
<ul>
<li>Set equal: x² = 2x + 3 → x² − 2x − 3 = 0.</li>
<li>Factorise: (x − 3)(x + 1) = 0, so x = 3 or x = −1.</li>
<li>Pair each with y from the line: (3, 9) and (−1, 1).</li>
</ul>
<h3>Common mistake</h3>
<p>Find a y for <em>each</em> x — every intersection is a coordinate pair. Don't stop at the x-values.</p>`,

  "m11i-03-2": `<h2>Graphical Solutions &amp; Problems</h2>
<p>The solutions are the points where the <strong>line meets the curve</strong>. Drawing both graphs on the same axes and reading the intersections gives the same answers as the algebra.</p>
<h3>Number of solutions</h3>
<ul>
<li>Two intersections → two solutions.</li>
<li>The line just touches (a tangent) → one (repeated) solution.</li>
<li>The line misses the curve → no real solutions (discriminant b² − 4ac &lt; 0).</li>
</ul>
<h3>Common mistake</h3>
<p>Always check a pair by substituting into <em>both</em> original equations — it catches arithmetic slips from the substitution step.</p>`
});
