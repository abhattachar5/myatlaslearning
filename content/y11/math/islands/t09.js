// content/y11/math/islands/t09.js — Year 11 Maths Topic 9: Vectors
// Islands m11i-09-1 .. m11i-09-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-09-1 — Vector Arithmetic
  {id:"m11fc-09-1-1", islandId:"m11i-09-1", front:"What does a vector describe?",
   back:"A movement: a size (magnitude) and a direction.\n\nWritten as a column vector, the top is horizontal and the bottom is vertical.", difficulty:1, category:"definition"},
  {id:"m11fc-09-1-2", islandId:"m11i-09-1", front:"How do you add two column vectors?",
   back:"Add the top numbers and add the bottom numbers separately.\n\n(2,1) + (3,4) = (5,5).", difficulty:2, category:"definition"},
  {id:"m11fc-09-1-3", islandId:"m11i-09-1", front:"Work out (4, 3) − (1, 5).",
   back:"(3, −2)\n\nSubtract componentwise: 4 − 1 = 3 and 3 − 5 = −2.", difficulty:2, category:"calculation"},
  {id:"m11fc-09-1-4", islandId:"m11i-09-1", front:"What does multiplying a vector by a scalar do?",
   back:"Multiplies each component by that number.\n\n3 × (2, −1) = (6, −3). The direction stays the same (scaled).", difficulty:2, category:"concept"},
  {id:"m11fc-09-1-5", islandId:"m11i-09-1", front:"Work out 2(1, 3) + (4, −1).",
   back:"(6, 5)\n\n2(1,3) = (2,6); add (4,−1): (2+4, 6−1) = (6, 5).", difficulty:3, category:"calculation"},
  {id:"m11fc-09-1-6", islandId:"m11i-09-1", front:"What is the resultant of two vectors?",
   back:"The single vector from start to finish — found by adding them.\n\nIt is the overall journey of doing one then the other.", difficulty:2, category:"concept"},

  // m11i-09-2 — Geometric Vector Proof
  {id:"m11fc-09-2-1", islandId:"m11i-09-2", front:"How do you write a path like AC in terms of AB and BC?",
   back:"AC = AB + BC.\n\nFollow the journey: go from A to B, then B to C.", difficulty:2, category:"concept"},
  {id:"m11fc-09-2-2", islandId:"m11i-09-2", front:"What does BA mean compared with AB?",
   back:"BA = −AB.\n\nGoing the opposite way reverses the vector (same length, opposite direction).", difficulty:2, category:"definition"},
  {id:"m11fc-09-2-3", islandId:"m11i-09-2", front:"How do you show two vectors are parallel?",
   back:"Show one is a scalar multiple of the other.\n\nIf PQ = k × RS for some number k, then PQ and RS are parallel.", difficulty:3, category:"concept"},
  {id:"m11fc-09-2-4", islandId:"m11i-09-2", front:"If AB = 2a + b and CD = 4a + 2b, are they parallel?",
   back:"Yes.\n\nCD = 2(2a + b) = 2 × AB, a scalar multiple, so they are parallel.", difficulty:3, category:"application"},
  {id:"m11fc-09-2-5", islandId:"m11i-09-2", front:"What extra condition makes points A, B, C collinear?",
   back:"Two of the vectors between them are parallel AND share a point.\n\nE.g. if AB = k × BC, then A, B and C lie on a straight line.", difficulty:3, category:"concept"},
  {id:"m11fc-09-2-6", islandId:"m11i-09-2", front:"M is the midpoint of AB. Write AM in terms of AB.",
   back:"AM = ½ AB.\n\nThe midpoint is halfway along the vector from A to B.", difficulty:2, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-09-1": [
    {q:"Work out (3, 2) + (1, 4).", opts:["(4, 6)","(2, −2)","(3, 8)","(4, 8)"], c:0,
     e:"Add componentwise: (3+1, 2+4) = (4, 6)."},
    {q:"Work out (5, 1) − (2, 3).", opts:["(3, −2)","(3, 2)","(7, 4)","(−3, 2)"], c:0,
     e:"(5−2, 1−3) = (3, −2)."},
    {q:"Work out 4 × (2, −1).", opts:["(8, −4)","(6, 3)","(8, 4)","(2, −4)"], c:0,
     e:"Multiply each component by 4: (8, −4)."},
    {q:"Work out 2(3, 1) + (1, 2).", opts:["(7, 4)","(6, 2)","(4, 3)","(7, 2)"], c:0,
     e:"2(3,1) = (6,2); add (1,2): (7, 4)."},
    {q:"The resultant of two vectors is found by:", opts:["Adding them","Subtracting them","Multiplying them","Squaring them"], c:0,
     e:"Add the vectors to get the overall (resultant) journey."}
  ],
  "m11i-09-2": [
    {q:"AC in terms of AB and BC is:", opts:["AB + BC","AB − BC","BC − AB","AB × BC"], c:0,
     e:"Follow the path A→B→C: AC = AB + BC."},
    {q:"BA equals:", opts:["−AB","AB","2AB","½AB"], c:0,
     e:"Reversing the direction negates the vector: BA = −AB."},
    {q:"Two vectors are parallel if one is:", opts:["A scalar multiple of the other","Perpendicular","Equal in length only","Horizontal"], c:0,
     e:"PQ = k × RS (a scalar multiple) means they are parallel."},
    {q:"PQ = 3a + 6b and RS = a + 2b. Are they parallel?", opts:["Yes (PQ = 3RS)","No","Only if a = b","Cannot tell"], c:0,
     e:"PQ = 3(a + 2b) = 3 × RS, so they are parallel."},
    {q:"M is the midpoint of AB. AM =", opts:["½AB","AB","2AB","−AB"], c:0,
     e:"The midpoint is halfway: AM = ½AB."}
  ]
});

Object.assign(LESSONS, {
  "m11i-09-1": `<h2>Vector Arithmetic</h2>
<p>A <strong>vector</strong> has size and direction, written as a column vector (top = horizontal, bottom = vertical). <strong>Add or subtract</strong> componentwise, and <strong>multiply by a scalar</strong> by multiplying each component.</p>
<div class="lesson-diagram" data-diagram="math-vectors"><p class="diagram-caption">Adding vectors tip-to-tail gives the resultant</p></div>
<h3>Worked example</h3>
<p>2(1, 3) + (4, −1): first 2(1,3) = (2,6), then add (4,−1) to get <strong>(6, 5)</strong>.</p>
<h3>Resultant</h3>
<p>Adding two vectors gives the <strong>resultant</strong> — the single vector from the start of the first to the end of the second.</p>`,

  "m11i-09-2": `<h2>Geometric Vector Proof</h2>
<p>Write journeys in terms of given vectors: <strong>AC = AB + BC</strong>, and reversing a direction negates it, <strong>BA = −AB</strong>. To prove two vectors are <strong>parallel</strong>, show one is a <strong>scalar multiple</strong> of the other.</p>
<h3>Worked example</h3>
<p>If AB = 2a + b and CD = 4a + 2b, then CD = 2(2a + b) = 2 × AB — a scalar multiple — so AB and CD are <strong>parallel</strong>.</p>
<h3>Collinear points</h3>
<p>If AB = k × BC (parallel vectors sharing the point B), then A, B and C lie on a straight line (collinear).</p>`
});
