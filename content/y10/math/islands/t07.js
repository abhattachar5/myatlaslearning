// content/y10/math/islands/t07.js — Year 10 Maths Topic 7: Pythagoras' Theorem
// Islands m10i-07-1 .. m10i-07-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-07-1 — Finding the Hypotenuse
  {id:"m10fc-07-1-1", islandId:"m10i-07-1", front:"State Pythagoras' theorem.",
   back:"a² + b² = c², where c is the hypotenuse.\n\nIt only works in RIGHT-angled triangles.", difficulty:1, category:"definition"},
  {id:"m10fc-07-1-2", islandId:"m10i-07-1", front:"Which side is the hypotenuse?",
   back:"The longest side — always opposite the right angle.\n\nIt is the c in a² + b² = c².", difficulty:1, category:"definition"},
  {id:"m10fc-07-1-3", islandId:"m10i-07-1", front:"Find the hypotenuse of a right triangle with legs 3 cm and 4 cm.",
   back:"5 cm\n\nc² = 3² + 4² = 9 + 16 = 25, so c = √25 = 5 cm.", difficulty:2, category:"calculation"},
  {id:"m10fc-07-1-4", islandId:"m10i-07-1", front:"Find the hypotenuse with legs 5 cm and 12 cm.",
   back:"13 cm\n\nc² = 25 + 144 = 169, so c = √169 = 13 cm.", difficulty:2, category:"calculation"},
  {id:"m10fc-07-1-5", islandId:"m10i-07-1", front:"Legs of 6 cm and 8 cm — find the hypotenuse.",
   back:"10 cm\n\nc² = 36 + 64 = 100, so c = 10 cm.", difficulty:2, category:"calculation"},
  {id:"m10fc-07-1-6", islandId:"m10i-07-1", front:"When finding the hypotenuse, do you add or subtract the squares?",
   back:"ADD.\n\nThe hypotenuse is the longest side, so you add the two shorter squares and square-root.", difficulty:2, category:"concept"},

  // m10i-07-2 — Finding a Shorter Side & Problems
  {id:"m10fc-07-2-1", islandId:"m10i-07-2", front:"How do you find a shorter side with Pythagoras?",
   back:"SUBTRACT: a² = c² − b².\n\nRearrange a² + b² = c² to make the unknown shorter side the subject.", difficulty:2, category:"definition"},
  {id:"m10fc-07-2-2", islandId:"m10i-07-2", front:"The hypotenuse is 13 cm and one leg is 5 cm. Find the other leg.",
   back:"12 cm\n\na² = 13² − 5² = 169 − 25 = 144, so a = √144 = 12 cm.", difficulty:2, category:"calculation"},
  {id:"m10fc-07-2-3", islandId:"m10i-07-2", front:"How do you know whether to add or subtract?",
   back:"Add to find the hypotenuse; subtract to find a shorter side.\n\nIdentify the hypotenuse first (opposite the right angle).", difficulty:2, category:"concept"},
  {id:"m10fc-07-2-4", islandId:"m10i-07-2", front:"A 10 m ladder reaches 8 m up a wall. How far is its base from the wall?",
   back:"6 m\n\nThe ladder is the hypotenuse: base² = 10² − 8² = 100 − 64 = 36, so base = 6 m.", difficulty:3, category:"application"},
  {id:"m10fc-07-2-5", islandId:"m10i-07-2", front:"Find the leg when the hypotenuse is 25 cm and the other leg is 7 cm.",
   back:"24 cm\n\na² = 25² − 7² = 625 − 49 = 576, so a = 24 cm.", difficulty:3, category:"calculation"},
  {id:"m10fc-07-2-6", islandId:"m10i-07-2", front:"When does an answer need rounding?",
   back:"When the square root is not exact.\n\n√50 ≈ 7.07 — give it to a sensible number of decimal places or as a surd.", difficulty:2, category:"concept"},

  // m10i-07-3 — 3D Pythagoras
  {id:"m10fc-07-3-1", islandId:"m10i-07-3", front:"What is the space diagonal of a cuboid?",
   back:"The longest diagonal — corner to opposite corner through the inside of the solid.\n\nd = √(l² + w² + h²).", difficulty:2, category:"definition"},
  {id:"m10fc-07-3-2", islandId:"m10i-07-3", front:"Give the formula for the space diagonal of a cuboid l × w × h.",
   back:"d = √(l² + w² + h²).\n\nIt applies Pythagoras twice: once across the base, once up to the far corner.", difficulty:2, category:"definition"},
  {id:"m10fc-07-3-3", islandId:"m10i-07-3", front:"Describe the two-step method for a space diagonal.",
   back:"1) Find the base diagonal: √(l² + w²).\n2) Combine it with the height: √((base diagonal)² + h²).", difficulty:2, category:"concept"},
  {id:"m10fc-07-3-4", islandId:"m10i-07-3", front:"Find the space diagonal of a cuboid 3 cm × 4 cm × 12 cm.",
   back:"13 cm\n\nd = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.", difficulty:2, category:"calculation"},
  {id:"m10fc-07-3-5", islandId:"m10i-07-3", front:"In the two-step method, why is the base diagonal a leg of the second triangle?",
   back:"The base diagonal lies flat in the base; the height is vertical and perpendicular to it.\n\nSo they form a right-angled triangle whose hypotenuse is the space diagonal.", difficulty:3, category:"concept"},

  // m10i-07-4 — Distance Between Two Points
  {id:"m10fc-07-4-1", islandId:"m10i-07-4", front:"State the distance formula between two points.",
   back:"distance = √((x₂ − x₁)² + (y₂ − y₁)²).\n\nIt is Pythagoras applied to the horizontal and vertical gaps.", difficulty:2, category:"definition"},
  {id:"m10fc-07-4-2", islandId:"m10i-07-4", front:"How does the distance formula relate to a right-angled triangle?",
   back:"The horizontal gap (x₂ − x₁) and vertical gap (y₂ − y₁) are the two legs.\n\nThe distance between the points is the hypotenuse.", difficulty:2, category:"concept"},
  {id:"m10fc-07-4-3", islandId:"m10i-07-4", front:"Find the distance from (1, 2) to (4, 6).",
   back:"5\n\nd = √((4 − 1)² + (6 − 2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5.", difficulty:2, category:"calculation"},
  {id:"m10fc-07-4-4", islandId:"m10i-07-4", front:"Does it matter which point you subtract first?",
   back:"No — the differences are squared, so the sign cancels.\n\n(4 − 1)² and (1 − 4)² both equal 9.", difficulty:2, category:"concept"},
  {id:"m10fc-07-4-5", islandId:"m10i-07-4", front:"Find the distance from (0, 0) to (5, 12).",
   back:"13\n\nd = √(5² + 12²) = √(25 + 144) = √169 = 13.", difficulty:3, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m10i-07-1": [
    {q:"Find the hypotenuse with legs 8 cm and 15 cm.", opts:["17 cm","23 cm","13 cm","12 cm"], c:0,
     e:"c² = 64 + 225 = 289, so c = √289 = 17 cm."},
    {q:"Which side is the hypotenuse?", opts:["The side opposite the right angle","The shortest side","Any of the sides","The vertical side"], c:0,
     e:"The hypotenuse is the longest side, opposite the right angle."},
    {q:"Find the hypotenuse with legs 9 cm and 12 cm.", opts:["15 cm","21 cm","16 cm","225 cm"], c:0,
     e:"c² = 81 + 144 = 225, so c = 15 cm."},
    {q:"To find the hypotenuse you should:", opts:["Add the squares of the two legs","Subtract the squares","Add the two legs","Multiply the two legs"], c:0,
     e:"c² = a² + b²: add the squares of the legs, then square-root."},
    {q:"Find the hypotenuse with legs 7 cm and 24 cm.", opts:["25 cm","31 cm","23 cm","17 cm"], c:0,
     e:"c² = 49 + 576 = 625, so c = 25 cm."}
  ],
  "m10i-07-2": [
    {q:"Hypotenuse 17 cm, one leg 8 cm. Find the other leg.", opts:["15 cm","19 cm","9 cm","25 cm"], c:0,
     e:"a² = 17² − 8² = 289 − 64 = 225, so a = 15 cm."},
    {q:"To find a shorter side you should:", opts:["Subtract the squares","Add the squares","Add the sides","Halve the hypotenuse"], c:0,
     e:"a² = c² − b²: subtract the known leg's square from the hypotenuse's square."},
    {q:"A ladder 13 m long reaches 12 m up a wall. Distance of the base from the wall?", opts:["5 m","1 m","25 m","17 m"], c:0,
     e:"base² = 13² − 12² = 169 − 144 = 25, so base = 5 m."},
    {q:"Hypotenuse 26 cm, one leg 10 cm. Find the other leg.", opts:["24 cm","16 cm","28 cm","36 cm"], c:0,
     e:"a² = 26² − 10² = 676 − 100 = 576, so a = 24 cm."},
    {q:"A right triangle has hypotenuse 10 and leg 6. The other leg is:", opts:["8","4","16","14"], c:0,
     e:"a² = 100 − 36 = 64, so a = 8."}
  ],
  "m10i-07-3": [
    {q:"The space diagonal of a cuboid l × w × h is:", opts:["√(l² + w² + h²)","l + w + h","√(l² + w²)","l × w × h"], c:0,
     e:"d = √(l² + w² + h²): Pythagoras applied across the base then up to the far corner."},
    {q:"Find the space diagonal of a cuboid 3 cm × 4 cm × 12 cm.", opts:["13 cm","19 cm","12 cm","169 cm"], c:0,
     e:"d = √(9 + 16 + 144) = √169 = 13 cm."},
    {q:"A cuboid has base diagonal 5 cm and height 12 cm. Its space diagonal is:", opts:["13 cm","17 cm","7 cm","60 cm"], c:0,
     e:"d = √(5² + 12²) = √(25 + 144) = √169 = 13 cm."},
    {q:"Find the space diagonal of a cube of side 2 cm.", opts:["√12 ≈ 3.46 cm","6 cm","2√2 cm","4 cm"], c:0,
     e:"d = √(2² + 2² + 2²) = √12 ≈ 3.46 cm."},
    {q:"In the two-step method, the first step finds the:", opts:["Diagonal of the base rectangle","Height of the cuboid","Volume","Area of one face"], c:0,
     e:"Step 1 finds the base diagonal √(l² + w²); step 2 combines it with the height."}
  ],
  "m10i-07-4": [
    {q:"The distance between two points is:", opts:["√((x₂ − x₁)² + (y₂ − y₁)²)","(x₂ − x₁) + (y₂ − y₁)","√(x₂ − x₁) + √(y₂ − y₁)","(x₂ − x₁)² + (y₂ − y₁)²"], c:0,
     e:"It is Pythagoras on the horizontal and vertical gaps, then square-root."},
    {q:"Find the distance from (1, 2) to (4, 6).", opts:["5","7","25","√7"], c:0,
     e:"d = √(3² + 4²) = √(9 + 16) = √25 = 5."},
    {q:"Find the distance from (0, 0) to (5, 12).", opts:["13","17","7","60"], c:0,
     e:"d = √(5² + 12²) = √(25 + 144) = √169 = 13."},
    {q:"In the distance formula, the two differences form the:", opts:["Legs of a right-angled triangle","Hypotenuse","Area of the triangle","Gradient"], c:0,
     e:"The horizontal and vertical gaps are the legs; the distance is the hypotenuse."},
    {q:"Does the order of subtracting the points matter?", opts:["No, the differences are squared","Yes, always largest first","Yes, x before y only","Only for negative coordinates"], c:0,
     e:"Squaring removes the sign, so (a − b)² = (b − a)²."}
  ]
});

Object.assign(LESSONS, {
  "m10i-07-1": `<h2>Finding the Hypotenuse</h2>
<p><strong>Pythagoras' theorem</strong> connects the three sides of a right-angled triangle: <strong>a² + b² = c²</strong>, where c is the <strong>hypotenuse</strong> — the longest side, opposite the right angle. To find the hypotenuse, square the two shorter sides, add, then square-root.</p>
<div class="lesson-diagram" data-diagram="math-pythagoras"><p class="diagram-caption">The hypotenuse c is opposite the right angle: a² + b² = c²</p></div>
<h3>Worked example</h3>
<p>Legs 6 cm and 8 cm: c² = 6² + 8² = 36 + 64 = 100, so c = √100 = <strong>10 cm</strong>.</p>
<h3>Common mistake</h3>
<p>Always square-root at the end — c² = 100 means c = 10, not 100. And only add the squares when you are looking for the hypotenuse.</p>`,

  "m10i-07-2": `<h2>Finding a Shorter Side &amp; Problems</h2>
<p>To find a <strong>shorter side</strong>, rearrange to <strong>a² = c² − b²</strong> and <em>subtract</em>. The trick is to spot the hypotenuse first (it's opposite the right angle and is the largest number in the problem).</p>
<h3>Worked example</h3>
<p>A 10 m ladder reaches 8 m up a wall. How far is the base from the wall?</p>
<ul>
<li>The ladder is the hypotenuse: base² = 10² − 8² = 100 − 64 = 36.</li>
<li>base = √36 = <strong>6 m</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Decide add vs subtract by finding the hypotenuse: add the squares to find it, subtract to find a shorter side.</p>`,

  "m10i-07-3": `<h2>3D Pythagoras</h2>
<p>To find the longest diagonal of a cuboid — the <strong>space diagonal</strong> running from one corner to the opposite corner — apply Pythagoras twice, or use the formula directly.</p>
<h3>The two-step method</h3>
<ol>
<li>Find the diagonal of the <strong>base</strong> rectangle: √(l² + w²).</li>
<li>Form a right-angled triangle from that base diagonal and the <strong>height</strong>, then find the space diagonal: √(base² + h²).</li>
</ol>
<p>Combined into one formula: <strong>d = √(l² + w² + h²)</strong>.</p>
<h3>Worked example</h3>
<p>A cuboid measures 3 cm × 4 cm × 12 cm.</p>
<ul>
<li>Base diagonal = √(3² + 4²) = √25 = 5 cm.</li>
<li>Space diagonal = √(5² + 12²) = √(25 + 144) = √169 = <strong>13 cm</strong>.</li>
</ul>
<p>(Or directly: √(3² + 4² + 12²) = √169 = 13 cm.)</p>
<h3>Common mistake</h3>
<p>Using only two of the three dimensions. The space diagonal needs all three — length, width and height.</p>`,

  "m10i-07-4": `<h2>Distance Between Two Points</h2>
<p>The distance between two points on a coordinate grid is Pythagoras in disguise. The horizontal gap and the vertical gap are the two shorter sides of a right-angled triangle; the straight-line distance is the hypotenuse.</p>
<h3>The distance formula</h3>
<p style="text-align:center;padding:0.4em;background:#eff6ff;border-radius:6px"><strong>distance = √((x₂ − x₁)² + (y₂ − y₁)²)</strong></p>
<h3>Worked example</h3>
<p>Find the distance from (1, 2) to (4, 6).</p>
<ul>
<li>Horizontal gap: 4 − 1 = 3.</li>
<li>Vertical gap: 6 − 2 = 4.</li>
<li>Distance = √(3² + 4²) = √25 = <strong>5</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>It doesn't matter which point you subtract first — the differences are squared, so a negative becomes positive. Just be consistent and always square before adding.</p>`
});
