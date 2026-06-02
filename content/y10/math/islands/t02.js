// content/y10/math/islands/t02.js — Year 10 Maths Topic 2: Simultaneous Equations
// Islands m10i-02-1 .. m10i-02-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-02-1 — Elimination Method
  {id:"m10fc-02-1-1", islandId:"m10i-02-1", front:"What are simultaneous equations?",
   back:"Two equations with two unknowns that are true at the same time.\n\nThe solution is the pair (x, y) that satisfies BOTH equations.", difficulty:1, category:"definition"},
  {id:"m10fc-02-1-2", islandId:"m10i-02-1", front:"How does the elimination method work?",
   back:"Add or subtract the equations so one variable cancels.\n\nIf a variable has the same coefficient with opposite signs, ADD; with the same sign, SUBTRACT.", difficulty:2, category:"concept"},
  {id:"m10fc-02-1-3", islandId:"m10i-02-1", front:"Solve x + y = 10 and x − y = 4.",
   back:"x = 7, y = 3\n\nAdd the equations: 2x = 14 → x = 7. Substitute back: 7 + y = 10 → y = 3.", difficulty:2, category:"calculation"},
  {id:"m10fc-02-1-4", islandId:"m10i-02-1", front:"Why might you scale an equation before eliminating?",
   back:"To make the coefficients of one variable match.\n\nFor 2x + y = 8 and x + y = 5, the y already matches; otherwise multiply an equation through to line them up.", difficulty:2, category:"concept"},
  {id:"m10fc-02-1-5", islandId:"m10i-02-1", front:"Solve 3x + 2y = 16 and x + 2y = 8.",
   back:"x = 4, y = 2\n\nSubtract (same 2y): 2x = 8 → x = 4. Then 4 + 2y = 8 → y = 2.", difficulty:3, category:"calculation"},
  {id:"m10fc-02-1-6", islandId:"m10i-02-1", front:"How do you check a simultaneous-equation solution?",
   back:"Substitute both values into the OTHER equation.\n\nIf both sides match in both equations, the solution is correct.", difficulty:2, category:"application"},

  // m10i-02-2 — Substitution & Setting Up
  {id:"m10fc-02-2-1", islandId:"m10i-02-2", front:"When is substitution the easier method?",
   back:"When one equation already gives a variable on its own, e.g. y = 2x + 1.\n\nSubstitute that expression into the other equation.", difficulty:2, category:"concept"},
  {id:"m10fc-02-2-2", islandId:"m10i-02-2", front:"Solve y = x + 1 and 2x + y = 7.",
   back:"x = 2, y = 3\n\nSubstitute y: 2x + (x + 1) = 7 → 3x + 1 = 7 → x = 2, so y = 3.", difficulty:2, category:"calculation"},
  {id:"m10fc-02-2-3", islandId:"m10i-02-2", front:"How do you turn a word problem into simultaneous equations?",
   back:"Choose letters for the two unknowns, then write one equation per piece of information.\n\nTwo facts → two equations.", difficulty:3, category:"concept"},
  {id:"m10fc-02-2-4", islandId:"m10i-02-2", front:"3 coffees and 2 teas cost £11; 1 coffee and 2 teas cost £7. Find each price.",
   back:"Coffee £2, tea £2.50\n\n3c + 2t = 11 and c + 2t = 7. Subtract: 2c = 4 → c = 2, then 2 + 2t = 7 → t = 2.50.", difficulty:3, category:"application"},
  {id:"m10fc-02-2-5", islandId:"m10i-02-2", front:"What does the solution of two linear equations mean graphically?",
   back:"The point where the two lines cross.\n\nEach equation is a straight line; the simultaneous solution is their intersection point.", difficulty:2, category:"concept"},
  {id:"m10fc-02-2-6", islandId:"m10i-02-2", front:"Solve y = 2x and x + y = 9.",
   back:"x = 3, y = 6\n\nSubstitute: x + 2x = 9 → 3x = 9 → x = 3, so y = 6.", difficulty:2, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m10i-02-1": [
    {q:"Solve x + y = 9 and x − y = 1.", opts:["x=5, y=4","x=4, y=5","x=6, y=3","x=8, y=1"], c:0,
     e:"Add: 2x = 10 → x = 5. Then 5 + y = 9 → y = 4."},
    {q:"Solve 2x + y = 11 and x + y = 7.", opts:["x=4, y=3","x=3, y=4","x=5, y=1","x=4, y=4"], c:0,
     e:"Subtract (same y): x = 4. Then 4 + y = 7 → y = 3."},
    {q:"To eliminate y from 3x + 2y = 12 and 5x − 2y = 4, you should:", opts:["Add the equations","Subtract the equations","Multiply the first by 2","Divide by y"], c:0,
     e:"The y-terms are +2y and −2y (opposite signs), so adding cancels y."},
    {q:"Solve 4x + y = 14 and 2x + y = 8.", opts:["x=3, y=2","x=2, y=3","x=3, y=4","x=4, y=2"], c:0,
     e:"Subtract: 2x = 6 → x = 3. Then 2×3 + y = 8 → y = 2."},
    {q:"Solve x + 2y = 10 and 3x + 2y = 18.", opts:["x=4, y=3","x=3, y=4","x=2, y=4","x=4, y=2"], c:0,
     e:"Subtract (same 2y): 2x = 8 → x = 4. Then 4 + 2y = 10 → y = 3."}
  ],
  "m10i-02-2": [
    {q:"Solve y = x + 2 and 2x + y = 11.", opts:["x=3, y=5","x=5, y=3","x=2, y=4","x=4, y=6"], c:0,
     e:"Substitute: 2x + (x + 2) = 11 → 3x = 9 → x = 3, so y = 5."},
    {q:"Solve y = 3x and x + y = 8.", opts:["x=2, y=6","x=6, y=2","x=3, y=5","x=2, y=4"], c:0,
     e:"Substitute: x + 3x = 8 → 4x = 8 → x = 2, so y = 6."},
    {q:"Two numbers add to 20 and differ by 6. What are they?", opts:["13 and 7","14 and 6","12 and 8","15 and 5"], c:0,
     e:"x + y = 20, x − y = 6. Add: 2x = 26 → x = 13, y = 7."},
    {q:"4 pens and 1 ruler cost £6; 2 pens and 1 ruler cost £4. Find the pen price.", opts:["£1","£2","£1.50","£0.50"], c:0,
     e:"4p + r = 6, 2p + r = 4. Subtract: 2p = 2 → p = £1."},
    {q:"The solution of two linear equations is graphically:", opts:["Where the lines cross","Where they are parallel","The y-intercept","The midpoint"], c:0,
     e:"Each equation is a line; the simultaneous solution is their intersection point."}
  ]
});

Object.assign(LESSONS, {
  "m10i-02-1": `<h2>Elimination Method</h2>
<p><strong>Simultaneous equations</strong> are two equations true at the same time; the solution is the (x, y) pair that fits both. In the <strong>elimination method</strong> you add or subtract the equations to cancel one variable.</p>
<p>Match a variable's coefficients first. Same sign → <strong>subtract</strong>; opposite signs → <strong>add</strong>.</p>
<h3>Worked example</h3>
<p>Solve 3x + 2y = 16 and x + 2y = 8.</p>
<ul>
<li>The y-terms match (2y), so subtract: 2x = 8 → x = 4.</li>
<li>Substitute back: 4 + 2y = 8 → <strong>y = 2</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Watch the signs when subtracting every term, and always substitute back to find the second variable — and check in the other equation.</p>`,

  "m10i-02-2": `<h2>Substitution &amp; Setting Up</h2>
<p>When one equation gives a variable on its own (like y = 2x + 1), <strong>substitution</strong> is quickest: put that expression into the other equation. The solution is also the point where the two lines would cross.</p>
<h3>Worked example</h3>
<p>Solve y = x + 1 and 2x + y = 7.</p>
<ul>
<li>Substitute y: 2x + (x + 1) = 7 → 3x + 1 = 7 → x = 2.</li>
<li>Then y = 2 + 1 = <strong>3</strong>.</li>
</ul>
<h3>Setting up from a problem</h3>
<p>Choose a letter for each unknown and write one equation per fact. '3 coffees and 2 teas cost £11' becomes 3c + 2t = 11; a second fact gives a second equation, then solve.</p>`
});
