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
   back:"When the square root is not exact.\n\n√50 ≈ 7.07 — give it to a sensible number of decimal places or as a surd.", difficulty:2, category:"concept"}
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
<p>Decide add vs subtract by finding the hypotenuse: add the squares to find it, subtract to find a shorter side.</p>`
});
