// content/y9/math/islands/t11.js — Year 9 Maths Topic 11: Angles & Properties of Shapes
// Islands m9i-11-1 .. m9i-11-3. Flashcards, static question banks, lessons.
// Reuses shared geometry diagrams (math-angle-types, math-polygon-angles,
// math-circle-parts). Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-11-1 — Angle Rules on Lines & in Triangles
  {id:"m9fc-11-1-1", islandId:"m9i-11-1", front:"What do angles on a straight line add up to?",
   back:"180°.\n\nSo if one angle on a line is 110°, the other is 180° − 110° = 70°.", difficulty:1, category:"definition"},
  {id:"m9fc-11-1-2", islandId:"m9i-11-1", front:"What do angles around a point add up to?",
   back:"360°.\n\nAll the angles meeting at a single point make a full turn.", difficulty:1, category:"definition"},
  {id:"m9fc-11-1-3", islandId:"m9i-11-1", front:"What are vertically opposite angles?",
   back:"The equal angles formed opposite each other when two lines cross.\n\nThey are always equal.", difficulty:1, category:"concept"},
  {id:"m9fc-11-1-4", islandId:"m9i-11-1", front:"What do the angles in a triangle add up to?",
   back:"180°.\n\nSo a triangle with angles 90° and 35° has a third angle of 180° − 90° − 35° = 55°.", difficulty:1, category:"calculation"},
  {id:"m9fc-11-1-5", islandId:"m9i-11-1", front:"On parallel lines, what are alternate (Z) angles?",
   back:"Equal angles in a 'Z' shape between two parallel lines crossed by another line.\n\nCorresponding (F) angles are also equal; co-interior (C) angles add to 180°.", difficulty:2, category:"concept"},
  {id:"m9fc-11-1-6", islandId:"m9i-11-1", front:"Find the exterior angle of a triangle with interior angles 50° and 60° at the other two vertices.",
   back:"110°.\n\nThe exterior angle equals the sum of the two opposite interior angles: 50° + 60° = 110°.", difficulty:3, category:"application"},

  // m9i-11-2 — Angles in Polygons
  {id:"m9fc-11-2-1", islandId:"m9i-11-2", front:"What do the exterior angles of any polygon add up to?",
   back:"360°.\n\nThis is true for every polygon, no matter how many sides.", difficulty:1, category:"definition"},
  {id:"m9fc-11-2-2", islandId:"m9i-11-2", front:"What is each exterior angle of a regular hexagon?",
   back:"60°.\n\nExterior angles sum to 360°, and a hexagon has 6 equal ones: 360° ÷ 6 = 60°.", difficulty:2, category:"calculation"},
  {id:"m9fc-11-2-3", islandId:"m9i-11-2", front:"What is the interior-angle sum of a polygon with n sides?",
   back:"(n − 2) × 180°.\n\nFor a pentagon (n = 5): (5 − 2) × 180° = 540°.", difficulty:2, category:"definition"},
  {id:"m9fc-11-2-4", islandId:"m9i-11-2", front:"Find each interior angle of a regular octagon.",
   back:"135°.\n\nInterior sum = (8 − 2) × 180° = 1080°. Each of 8 equal angles: 1080° ÷ 8 = 135°.", difficulty:3, category:"calculation"},
  {id:"m9fc-11-2-5", islandId:"m9i-11-2", front:"A regular polygon has exterior angles of 40°. How many sides?",
   back:"9 sides.\n\nNumber of sides = 360° ÷ exterior angle = 360° ÷ 40° = 9.", difficulty:3, category:"application"},
  {id:"m9fc-11-2-6", islandId:"m9i-11-2", front:"How are an interior angle and its exterior angle related?",
   back:"They add up to 180° (they lie on a straight line).\n\nSo interior = 180° − exterior.", difficulty:2, category:"concept"},

  // m9i-11-3 — Quadrilaterals & Circle Parts
  {id:"m9fc-11-3-1", islandId:"m9i-11-3", front:"What do the angles in a quadrilateral add up to?",
   back:"360°.\n\nA quadrilateral splits into two triangles, and 2 × 180° = 360°.", difficulty:1, category:"definition"},
  {id:"m9fc-11-3-2", islandId:"m9i-11-3", front:"Name two properties of a parallelogram.",
   back:"Opposite sides are equal and parallel; opposite angles are equal.\n\nIts diagonals also bisect each other.", difficulty:2, category:"concept"},
  {id:"m9fc-11-3-3", islandId:"m9i-11-3", front:"How is a rhombus different from a rectangle?",
   back:"A rhombus has 4 equal SIDES (but angles needn't be 90°); a rectangle has 4 right ANGLES (but sides needn't be equal).\n\nA square is both.", difficulty:2, category:"concept"},
  {id:"m9fc-11-3-4", islandId:"m9i-11-3", front:"What is the radius and the diameter of a circle?",
   back:"The radius is the distance from the centre to the edge; the diameter goes all the way across through the centre.\n\nDiameter = 2 × radius.", difficulty:1, category:"definition"},
  {id:"m9fc-11-3-5", islandId:"m9i-11-3", front:"What is a chord and what is an arc?",
   back:"A chord is a straight line joining two points on the circle (not through the centre). An arc is a curved part of the circumference.", difficulty:2, category:"definition"},
  {id:"m9fc-11-3-6", islandId:"m9i-11-3", front:"Three angles of a quadrilateral are 90°, 100° and 80°. Find the fourth.",
   back:"90°.\n\nThe angles total 360°, so the fourth is 360° − 90° − 100° − 80° = 90°.", difficulty:2, category:"application"}
);

Object.assign(QUESTIONS, {
  "m9i-11-1": [
    {q:"Two angles on a straight line are x and 125°. Find x.", opts:["55°","235°","65°","75°"], c:0,
     e:"Angles on a line sum to 180°, so x = 180° − 125° = 55°."},
    {q:"A triangle has angles 40° and 75°. Find the third angle.", opts:["65°","75°","115°","55°"], c:0,
     e:"Angles in a triangle sum to 180°: 180° − 40° − 75° = 65°."},
    {q:"Two straight lines cross. One angle is 70°. What is the vertically opposite angle?", opts:["70°","110°","20°","140°"], c:0,
     e:"Vertically opposite angles are equal, so it is also 70°."},
    {q:"On parallel lines, an angle is 65°. Its alternate (Z) angle is:", opts:["65°","115°","25°","130°"], c:0,
     e:"Alternate angles between parallel lines are equal, so it is 65°."},
    {q:"Angles around a point are 150°, 90° and x. Find x.", opts:["120°","90°","60°","240°"], c:0,
     e:"Angles around a point sum to 360°: 360° − 150° − 90° = 120°."}
  ],
  "m9i-11-2": [
    {q:"What is each exterior angle of a regular pentagon?", opts:["72°","108°","60°","90°"], c:0,
     e:"Exterior angles sum to 360°: 360° ÷ 5 = 72°."},
    {q:"What is the interior-angle sum of a hexagon?", opts:["720°","540°","1080°","360°"], c:0,
     e:"(n − 2) × 180° = (6 − 2) × 180° = 720°."},
    {q:"Each interior angle of a regular polygon is 150°. How many sides?", opts:["12","10","8","15"], c:0,
     e:"Exterior angle = 180° − 150° = 30°; sides = 360° ÷ 30° = 12."},
    {q:"Find each interior angle of a regular pentagon.", opts:["108°","120°","90°","72°"], c:0,
     e:"Interior sum = 540°; each angle = 540° ÷ 5 = 108°."},
    {q:"A regular polygon has 9 sides. What is each exterior angle?", opts:["40°","45°","36°","60°"], c:0,
     e:"360° ÷ 9 = 40°."}
  ],
  "m9i-11-3": [
    {q:"Three angles of a quadrilateral are 85°, 95° and 110°. Find the fourth.", opts:["70°","80°","90°","60°"], c:0,
     e:"Angles sum to 360°: 360° − 85° − 95° − 110° = 70°."},
    {q:"Which shape has four equal sides but angles that need not be 90°?", opts:["Rhombus","Rectangle","Trapezium","Kite"], c:0,
     e:"A rhombus has four equal sides; only a square also has right angles."},
    {q:"A line from the centre of a circle to its edge is called the:", opts:["Radius","Diameter","Chord","Tangent"], c:0,
     e:"The radius runs from the centre to the circumference; the diameter goes all the way across."},
    {q:"The diameter of a circle is 14 cm. What is the radius?", opts:["7 cm","28 cm","14 cm","3.5 cm"], c:0,
     e:"Radius = diameter ÷ 2 = 14 ÷ 2 = 7 cm."},
    {q:"Which is NOT a property of a rectangle?", opts:["All sides equal","Opposite sides equal","All angles 90°","Diagonals equal"], c:0,
     e:"A rectangle need not have all sides equal (that is a square). The others are true."}
  ]
});

Object.assign(LESSONS, {
  "m9i-11-1": `<h2>Angle Rules on Lines &amp; in Triangles</h2>
<p>A handful of facts solve most angle problems: angles on a straight line add to <strong>180°</strong>, angles around a point add to <strong>360°</strong>, vertically opposite angles are <strong>equal</strong>, and the angles in a triangle add to <strong>180°</strong>.</p>
<div class="lesson-diagram" data-diagram="math-angle-types"><p class="diagram-caption">Acute, right, obtuse and reflex angles</p></div>
<h3>Parallel lines</h3>
<p>When a line crosses two parallel lines: alternate (Z) angles are equal, corresponding (F) angles are equal, and co-interior (C) angles add to 180°.</p>
<h3>Worked example</h3>
<p>A triangle has angles of 90° and 35°. The third is 180° − 90° − 35° = <strong>55°</strong>.</p>
<h3>Common mistake</h3>
<p>Always give a reason with each step ('angles on a line', 'alternate angles') — in exams the reasons earn marks, not just the number.</p>`,

  "m9i-11-2": `<h2>Angles in Polygons</h2>
<p>Two rules unlock polygon angles. The <strong>exterior angles</strong> of any polygon always add to <strong>360°</strong>. The <strong>interior angles</strong> add to <strong>(n − 2) × 180°</strong>, where n is the number of sides.</p>
<div class="lesson-diagram" data-diagram="math-polygon-angles"><p class="diagram-caption">Interior and exterior angles of a polygon</p></div>
<h3>Worked example</h3>
<p>Find each interior angle of a regular octagon.</p>
<ul>
<li>Interior sum = (8 − 2) × 180° = 1080°.</li>
<li>Each of 8 equal angles = 1080° ÷ 8 = <strong>135°</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>For a regular polygon, the quickest route is often the exterior angle: number of sides = 360° ÷ exterior angle, and interior = 180° − exterior.</p>`,

  "m9i-11-3": `<h2>Quadrilaterals &amp; Circle Parts</h2>
<p>The angles in any <strong>quadrilateral</strong> add to <strong>360°</strong>. Special quadrilaterals have their own properties: a parallelogram has equal opposite sides and angles; a rhombus has four equal sides; a rectangle has four right angles; a square has both.</p>
<div class="lesson-diagram" data-diagram="math-circle-parts"><p class="diagram-caption">Radius, diameter, chord, arc and circumference</p></div>
<h3>Worked example</h3>
<p>Three angles of a quadrilateral are 90°, 100° and 80°. The fourth is 360° − 90° − 100° − 80° = <strong>90°</strong>.</p>
<h3>Circle vocabulary</h3>
<p>The <strong>radius</strong> runs from the centre to the edge; the <strong>diameter</strong> (= 2 × radius) crosses through the centre; a <strong>chord</strong> joins two points on the circle; an <strong>arc</strong> is part of the curved edge.</p>`
});
