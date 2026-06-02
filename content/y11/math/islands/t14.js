// content/y11/math/islands/t14.js — Year 11 Maths Topic 14: Gradients, Areas under Graphs & Proof
// Islands m11i-14-1 .. m11i-14-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-14-1 — Gradients & Areas under Graphs
  {id:"m11fc-14-1-1", islandId:"m11i-14-1", front:"How do you estimate the gradient of a curve at a point?",
   back:"Draw a TANGENT at that point and find its gradient (rise ÷ run).\n\nThe tangent's steepness is the curve's gradient there.", difficulty:3, category:"definition"},
  {id:"m11fc-14-1-2", islandId:"m11i-14-1", front:"On a speed–time graph, what does the gradient represent?",
   back:"Acceleration (rate of change of speed).\n\nGradient = change in speed ÷ change in time.", difficulty:3, category:"concept"},
  {id:"m11fc-14-1-3", islandId:"m11i-14-1", front:"On a speed–time graph, what does the AREA under the graph represent?",
   back:"The distance travelled.\n\nArea under speed–time = distance.", difficulty:3, category:"concept"},
  {id:"m11fc-14-1-4", islandId:"m11i-14-1", front:"How do you estimate the area under a curve?",
   back:"Split it into strips (trapeziums) and add their areas.\n\nMore, thinner strips give a better estimate.", difficulty:3, category:"concept"},
  {id:"m11fc-14-1-5", islandId:"m11i-14-1", front:"A speed–time graph is a straight line from 0 to 20 m/s over 10 s. Distance?",
   back:"100 m\n\nArea of the triangle = ½ × 10 × 20 = 100 m.", difficulty:3, category:"calculation"},
  {id:"m11fc-14-1-6", islandId:"m11i-14-1", front:"Why is the area-under-a-curve answer only an estimate?",
   back:"Because straight-sided trapeziums don't fit a curve exactly.\n\nThey slightly over- or under-shoot, so the total is approximate.", difficulty:3, category:"concept"},

  // m11i-14-2 — Algebraic Proof
  {id:"m11fc-14-2-1", islandId:"m11i-14-2", front:"How do you write 'any even number' and 'any odd number' in algebra?",
   back:"Even: 2n. Odd: 2n + 1 (or 2n − 1).\n\nUsing n keeps it general for ALL such numbers.", difficulty:2, category:"definition"},
  {id:"m11fc-14-2-2", islandId:"m11i-14-2", front:"How do you write three consecutive integers?",
   back:"n, n + 1, n + 2.\n\nThey go up by 1 each time.", difficulty:2, category:"definition"},
  {id:"m11fc-14-2-3", islandId:"m11i-14-2", front:"What does a proof need that an example does not?",
   back:"It must show a statement is ALWAYS true, using algebra — not just check one case.\n\nOne example only shows it works once.", difficulty:3, category:"concept"},
  {id:"m11fc-14-2-4", islandId:"m11i-14-2", front:"Prove the sum of two even numbers is even.",
   back:"2a + 2b = 2(a + b).\n\nThe result is 2 × (a whole number), which is even. ∎", difficulty:3, category:"application"},
  {id:"m11fc-14-2-5", islandId:"m11i-14-2", front:"How do you finish an algebraic proof clearly?",
   back:"Factor out what shows the property, then state the conclusion in words.\n\nE.g. '= 2(…), which is even, as required.'", difficulty:3, category:"concept"},
  {id:"m11fc-14-2-6", islandId:"m11i-14-2", front:"Prove the sum of three consecutive integers is a multiple of 3.",
   back:"n + (n+1) + (n+2) = 3n + 3 = 3(n + 1).\n\nA multiple of 3, as required. ∎", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-14-1": [
    {q:"To estimate a curve's gradient at a point you draw a:", opts:["Tangent","Chord","Vertical line","Box"], c:0,
     e:"The gradient of the tangent at that point estimates the curve's gradient."},
    {q:"On a speed–time graph the gradient is the:", opts:["Acceleration","Distance","Speed","Time"], c:0,
     e:"Gradient = change in speed ÷ time = acceleration."},
    {q:"On a speed–time graph the area under the line is the:", opts:["Distance","Acceleration","Speed","Average"], c:0,
     e:"Area under a speed–time graph gives the distance travelled."},
    {q:"A speed–time graph rises straight from 0 to 12 m/s over 8 s. Distance?", opts:["48 m","96 m","20 m","12 m"], c:0,
     e:"Area of the triangle = ½ × 8 × 12 = 48 m."},
    {q:"Area estimates with trapeziums are:", opts:["Approximate","Always exact","Always too big","Always too small"], c:0,
     e:"Straight-sided strips don't fit a curve exactly, so the area is an estimate."}
  ],
  "m11i-14-2": [
    {q:"Any even number can be written as:", opts:["2n","2n + 1","n + 2","n²"], c:0,
     e:"2n is a multiple of 2, i.e. even."},
    {q:"Three consecutive integers are:", opts:["n, n+1, n+2","n, 2n, 3n","n, n+2, n+4","n², n, 1"], c:0,
     e:"Consecutive integers increase by 1: n, n+1, n+2."},
    {q:"2a + 2b = 2(a + b) proves the sum of two evens is:", opts:["Even","Odd","Prime","A square"], c:0,
     e:"2 × (whole number) is even."},
    {q:"A proof must show a statement is:", opts:["Always true","True for one example","Sometimes true","Never true"], c:0,
     e:"A proof establishes the result for all cases, using algebra."},
    {q:"n + (n+1) + (n+2) simplifies to:", opts:["3n + 3","3n","n + 3","3n + 6"], c:0,
     e:"= 3n + 3 = 3(n + 1), a multiple of 3."}
  ]
});

Object.assign(LESSONS, {
  "m11i-14-1": `<h2>Gradients &amp; Areas under Graphs</h2>
<p>To estimate the <strong>gradient</strong> of a curve at a point, draw a <strong>tangent</strong> there and find its rise ÷ run. To estimate the <strong>area under</strong> a graph, split it into strips (trapeziums) and add them. On a speed–time graph, the gradient is acceleration and the area is distance.</p>
<div class="lesson-diagram" data-diagram="math-area-under-graph"><p class="diagram-caption">Estimate the area under a curve with trapezium strips</p></div>
<h3>Worked example</h3>
<p>A speed–time graph rises straight from 0 to 20 m/s over 10 s. The distance is the triangle's area: ½ × 10 × 20 = <strong>100 m</strong>.</p>
<h3>Common mistake</h3>
<p>Areas found with straight-sided strips are <em>estimates</em> — thinner strips improve accuracy but won't be exact for a curve.</p>`,

  "m11i-14-2": `<h2>Algebraic Proof</h2>
<p>A <strong>proof</strong> shows a statement is <em>always</em> true using algebra — not just for one example. Write numbers generally: an even number is <strong>2n</strong>, an odd number is <strong>2n + 1</strong>, and consecutive integers are <strong>n, n + 1, n + 2</strong>.</p>
<h3>Worked example</h3>
<p>Prove the sum of three consecutive integers is a multiple of 3.</p>
<ul>
<li>n + (n + 1) + (n + 2) = 3n + 3 = <strong>3(n + 1)</strong>.</li>
<li>This is 3 × (a whole number), so it is a multiple of 3, as required.</li>
</ul>
<h3>Common mistake</h3>
<p>Checking one example is not a proof. Use algebra to cover every case, then factor out the property and state the conclusion in words.</p>`
});
