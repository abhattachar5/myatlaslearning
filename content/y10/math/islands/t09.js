// content/y10/math/islands/t09.js — Year 10 Maths Topic 9: Transformations
// Islands m10i-09-1 .. m10i-09-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-09-1 — Reflections & Rotations
  {id:"m10fc-09-1-1", islandId:"m10i-09-1", front:"What stays the same after a reflection or rotation?",
   back:"Size and shape (the image is congruent to the original).\n\nOnly the position and orientation change.", difficulty:1, category:"definition"},
  {id:"m10fc-09-1-2", islandId:"m10i-09-1", front:"What do you need to describe a reflection fully?",
   back:"The mirror line (its equation).\n\nE.g. 'reflection in the line x = 2' or 'in the line y = x'.", difficulty:2, category:"concept"},
  {id:"m10fc-09-1-3", islandId:"m10i-09-1", front:"Reflect the point (3, 2) in the y-axis.",
   back:"(−3, 2)\n\nReflecting in the y-axis changes the sign of the x-coordinate.", difficulty:2, category:"calculation"},
  {id:"m10fc-09-1-4", islandId:"m10i-09-1", front:"What three things describe a rotation fully?",
   back:"Angle, direction (clockwise/anticlockwise) and centre of rotation.\n\nE.g. 'rotation 90° clockwise about the origin'.", difficulty:2, category:"definition"},
  {id:"m10fc-09-1-5", islandId:"m10i-09-1", front:"Reflect the point (4, 1) in the line y = x.",
   back:"(1, 4)\n\nReflecting in y = x swaps the coordinates.", difficulty:3, category:"application"},
  {id:"m10fc-09-1-6", islandId:"m10i-09-1", front:"After a 180° rotation about the origin, where does (2, 5) go?",
   back:"(−2, −5)\n\nA 180° rotation about the origin changes the sign of both coordinates.", difficulty:3, category:"application"},

  // m10i-09-2 — Translations & Vectors
  {id:"m10fc-09-2-1", islandId:"m10i-09-2", front:"What is a translation?",
   back:"A slide — every point moves the same distance in the same direction.\n\nIt is described by a column vector.", difficulty:1, category:"definition"},
  {id:"m10fc-09-2-2", islandId:"m10i-09-2", front:"What do the numbers in a column vector mean?",
   back:"Top = movement right (+) or left (−); bottom = movement up (+) or down (−).\n\nE.g. (3, −2) means 3 right and 2 down.", difficulty:2, category:"definition"},
  {id:"m10fc-09-2-3", islandId:"m10i-09-2", front:"Translate (1, 1) by the vector (4, 2).",
   back:"(5, 3)\n\nAdd the vector: 1 + 4 = 5 and 1 + 2 = 3.", difficulty:2, category:"calculation"},
  {id:"m10fc-09-2-4", islandId:"m10i-09-2", front:"Translate (5, 4) by the vector (−2, −3).",
   back:"(3, 1)\n\n5 + (−2) = 3 and 4 + (−3) = 1.", difficulty:2, category:"calculation"},
  {id:"m10fc-09-2-5", islandId:"m10i-09-2", front:"What vector translates a shape back to its original position?",
   back:"The negative of the original vector.\n\nIf you moved by (3, −2), moving by (−3, 2) reverses it.", difficulty:3, category:"concept"},
  {id:"m10fc-09-2-6", islandId:"m10i-09-2", front:"Combine the translations (2, 1) then (3, −4) into one vector.",
   back:"(5, −3)\n\nAdd the vectors: (2 + 3, 1 + (−4)) = (5, −3).", difficulty:3, category:"application"},

  // m10i-09-3 — Enlargements
  {id:"m10fc-09-3-1", islandId:"m10i-09-3", front:"What two things describe an enlargement?",
   back:"The scale factor and the centre of enlargement.\n\nThe scale factor tells you how many times bigger; the centre fixes the position.", difficulty:2, category:"definition"},
  {id:"m10fc-09-3-2", islandId:"m10i-09-3", front:"What does a scale factor of 3 do to the lengths?",
   back:"Multiplies every length by 3.\n\nThe shape becomes 3 times as wide and 3 times as tall.", difficulty:1, category:"concept"},
  {id:"m10fc-09-3-3", islandId:"m10i-09-3", front:"What does a fractional scale factor like ½ do?",
   back:"Makes the shape SMALLER.\n\nA scale factor of ½ halves every length.", difficulty:2, category:"concept"},
  {id:"m10fc-09-3-4", islandId:"m10i-09-3", front:"What does a negative scale factor do?",
   back:"Enlarges AND turns the shape upside down through the centre.\n\nThe image appears on the opposite side of the centre.", difficulty:3, category:"concept"},
  {id:"m10fc-09-3-5", islandId:"m10i-09-3", front:"A square of side 4 cm is enlarged by scale factor 2.5. New side length?",
   back:"10 cm\n\n4 × 2.5 = 10 cm. Each length is multiplied by the scale factor.", difficulty:2, category:"calculation"},
  {id:"m10fc-09-3-6", islandId:"m10i-09-3", front:"Is an enlargement congruent to the original?",
   back:"No (unless the scale factor is 1 or −1).\n\nThe shape changes size, so it is SIMILAR but not congruent.", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m10i-09-1": [
    {q:"Reflect (5, 3) in the x-axis.", opts:["(5, −3)","(−5, 3)","(3, 5)","(−5, −3)"], c:0,
     e:"Reflecting in the x-axis changes the sign of the y-coordinate."},
    {q:"To describe a reflection fully you give:", opts:["The mirror line","The centre","A vector","An angle"], c:0,
     e:"A reflection needs the equation of the mirror line."},
    {q:"Reflect (2, 6) in the line y = x.", opts:["(6, 2)","(−2, 6)","(2, −6)","(−6, −2)"], c:0,
     e:"Reflecting in y = x swaps the coordinates: (2, 6) → (6, 2)."},
    {q:"To describe a rotation fully you need angle, centre and:", opts:["Direction","A vector","A mirror line","Scale factor"], c:0,
     e:"A rotation needs the angle, the direction (clockwise/anticlockwise) and the centre."},
    {q:"After a 180° rotation about the origin, (−3, 4) maps to:", opts:["(3, −4)","(−3, −4)","(4, −3)","(3, 4)"], c:0,
     e:"A 180° rotation about the origin negates both coordinates."}
  ],
  "m10i-09-2": [
    {q:"Translate (2, 3) by the vector (5, −1).", opts:["(7, 2)","(−3, 4)","(7, 4)","(3, 2)"], c:0,
     e:"Add the vector: (2 + 5, 3 + (−1)) = (7, 2)."},
    {q:"The vector (−4, 2) means:", opts:["4 left, 2 up","4 right, 2 down","2 left, 4 up","4 up, 2 left"], c:0,
     e:"Top is horizontal (−4 = left), bottom is vertical (+2 = up)."},
    {q:"Translate (0, 0) by (−3, −5).", opts:["(−3, −5)","(3, 5)","(−5, −3)","(0, −8)"], c:0,
     e:"(0 + (−3), 0 + (−5)) = (−3, −5)."},
    {q:"To undo a translation by (6, −2), use the vector:", opts:["(−6, 2)","(6, 2)","(−6, −2)","(2, −6)"], c:0,
     e:"The reverse vector negates both components: (−6, 2)."},
    {q:"Combine the translations (1, 4) then (2, −1):", opts:["(3, 3)","(3, 5)","(2, 3)","(1, 3)"], c:0,
     e:"Add the vectors: (1 + 2, 4 + (−1)) = (3, 3)."}
  ],
  "m10i-09-3": [
    {q:"An enlargement is described by a centre and:", opts:["A scale factor","A vector","A mirror line","An angle"], c:0,
     e:"An enlargement needs the scale factor and the centre."},
    {q:"A line of length 5 cm is enlarged by scale factor 4. New length?", opts:["20 cm","9 cm","1.25 cm","45 cm"], c:0,
     e:"5 × 4 = 20 cm."},
    {q:"A scale factor of ½ makes a shape:", opts:["Half the size","Twice the size","The same size","Upside down only"], c:0,
     e:"A fractional scale factor between 0 and 1 shrinks the shape."},
    {q:"A negative scale factor:", opts:["Enlarges and inverts through the centre","Only shrinks","Reflects in the x-axis","Translates"], c:0,
     e:"A negative scale factor enlarges and rotates the image 180° through the centre."},
    {q:"A 6 cm side is enlarged by scale factor 1.5. New length?", opts:["9 cm","7.5 cm","4 cm","12 cm"], c:0,
     e:"6 × 1.5 = 9 cm."}
  ]
});

Object.assign(LESSONS, {
  "m10i-09-1": `<h2>Reflections &amp; Rotations</h2>
<p>Reflections and rotations keep a shape <strong>congruent</strong> — same size and shape, only the position changes. Describe a <strong>reflection</strong> by its mirror line, and a <strong>rotation</strong> by its angle, direction and centre.</p>
<div class="lesson-diagram" data-diagram="math-reflection"><p class="diagram-caption">A reflection flips a shape across a mirror line</p></div>
<h3>Coordinate rules</h3>
<ul>
<li>Reflect in the x-axis: (x, y) → (x, −y). In the y-axis: (x, y) → (−x, y).</li>
<li>Reflect in y = x: swap the coordinates, (x, y) → (y, x).</li>
<li>Rotate 180° about the origin: (x, y) → (−x, −y).</li>
</ul>
<h3>Common mistake</h3>
<p>Describe transformations <em>fully</em> — a reflection needs the mirror line, a rotation needs angle, direction and centre. Missing one loses marks.</p>`,

  "m10i-09-2": `<h2>Translations &amp; Vectors</h2>
<p>A <strong>translation</strong> slides every point the same way, described by a <strong>column vector</strong>: the top number is horizontal (right +, left −) and the bottom is vertical (up +, down −).</p>
<div class="lesson-diagram" data-diagram="math-translation"><p class="diagram-caption">Every point moves the same distance and direction</p></div>
<h3>Worked example</h3>
<p>Translate (1, 1) by (4, 2): add the vector, (1 + 4, 1 + 2) = <strong>(5, 3)</strong>. To reverse a translation, negate the vector.</p>
<h3>Combining</h3>
<p>Two translations one after another add together: (2, 1) then (3, −4) is the single vector (5, −3).</p>`,

  "m10i-09-3": `<h2>Enlargements</h2>
<p>An <strong>enlargement</strong> changes size by a <strong>scale factor</strong> from a <strong>centre of enlargement</strong>. Every length is multiplied by the scale factor; the centre fixes where the image sits.</p>
<div class="lesson-diagram" data-diagram="math-enlargement"><p class="diagram-caption">Each length multiplies by the scale factor from the centre</p></div>
<h3>Scale factors</h3>
<ul>
<li>Greater than 1 → bigger; between 0 and 1 (fractional) → smaller.</li>
<li>Negative → enlarges <em>and</em> turns the image upside down through the centre.</li>
</ul>
<h3>Common mistake</h3>
<p>An enlargement (unless the factor is ±1) is <em>similar</em> but not congruent — the size changes, so don't call it congruent.</p>`
});
