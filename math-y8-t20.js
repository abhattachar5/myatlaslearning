// math-y8-t20.js — Year 8 Maths Topic 20: 2D Shapes & Angles
// Islands: m8i-20-1 .. m8i-20-5
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-20-1 — Classify Polygons & Angles
  {id:"m8fc-20-1-1",islandId:"m8i-20-1",front:"What is a polygon? Give three examples.",
   back:"A polygon is a closed 2D shape with straight sides.\n\nExamples: triangle (3 sides), pentagon (5 sides), octagon (8 sides).\n\nPolygons can be regular (all sides and angles equal) or irregular.",difficulty:1,category:"definition"},
  {id:"m8fc-20-1-2",islandId:"m8i-20-1",front:"State the four main angle types and their size ranges.",
   back:"• Acute: between 0° and 90°\n• Right angle: exactly 90°\n• Obtuse: between 90° and 180°\n• Reflex: between 180° and 360°\n\nA straight line = 180°; a full turn = 360°.",difficulty:1,category:"definition"},
  {id:"m8fc-20-1-3",islandId:"m8i-20-1",front:"How do you classify a triangle by its sides?",
   back:"• Equilateral: all 3 sides equal (and all angles = 60°)\n• Isosceles: exactly 2 sides equal (base angles also equal)\n• Scalene: no sides equal (no angles equal)\n\nTip: mark equal sides with tick marks.",difficulty:1,category:"definition"},
  {id:"m8fc-20-1-4",islandId:"m8i-20-1",front:"Name five types of quadrilateral and a key property of each.",
   back:"• Square: 4 equal sides, 4 right angles\n• Rectangle: opposite sides equal, 4 right angles\n• Parallelogram: 2 pairs of parallel sides, opposite angles equal\n• Rhombus: 4 equal sides, opposite angles equal\n• Trapezium: exactly 1 pair of parallel sides",difficulty:2,category:"definition"},
  {id:"m8fc-20-1-5",islandId:"m8i-20-1",front:"What is the difference between a regular and an irregular polygon?",
   back:"Regular polygon: ALL sides equal AND all interior angles equal (e.g. equilateral triangle, regular hexagon).\nIrregular polygon: sides or angles are not all equal (e.g. scalene triangle, a general quadrilateral).",difficulty:1,category:"concept"},
  {id:"m8fc-20-1-6",islandId:"m8i-20-1",front:"An angle measures 145°. How is it classified, and what is its supplementary angle?",
   back:"145° is an obtuse angle (between 90° and 180°).\n\nSupplementary angles sum to 180°.\n180° − 145° = 35°.\n\nThe supplementary angle is 35° (an acute angle).",difficulty:2,category:"application"},

  // m8i-20-2 — Angles in Polygons
  {id:"m8fc-20-2-1",islandId:"m8i-20-2",front:"What is the sum of interior angles in a triangle?",
   back:"180°\n\nThe three interior angles of ANY triangle always sum to 180°.\nExample: a triangle with angles 50° and 70° has a third angle of 180° − 50° − 70° = 60°.",difficulty:1,category:"definition"},
  {id:"m8fc-20-2-2",islandId:"m8i-20-2",front:"What is the sum of interior angles in any quadrilateral?",
   back:"360°\n\nA quadrilateral can be split into 2 triangles. Each triangle has 180°, so 2 × 180° = 360°.\nExample: a quadrilateral with angles 80°, 110°, 95° has a fourth angle of 360° − 285° = 75°.",difficulty:1,category:"definition"},
  {id:"m8fc-20-2-3",islandId:"m8i-20-2",front:"State the formula for the sum of interior angles of any polygon with n sides.",
   back:"Sum = (n − 2) × 180°\n\nExamples:\n• Pentagon (n = 5): (5−2) × 180° = 540°\n• Hexagon (n = 6): (6−2) × 180° = 720°\n• Octagon (n = 8): (8−2) × 180° = 1080°",difficulty:2,category:"definition"},
  {id:"m8fc-20-2-4",islandId:"m8i-20-2",front:"What does the Exterior Angle Theorem state?",
   back:"The exterior angle of a triangle equals the sum of the two non-adjacent (remote) interior angles.\n\nExample: if the remote interior angles are 40° and 65°, the exterior angle = 40° + 65° = 105°.",difficulty:2,category:"concept"},
  {id:"m8fc-20-2-5",islandId:"m8i-20-2",front:"Find the size of each interior angle of a regular hexagon.",
   back:"Each interior angle = 120°\n\nStep 1: Sum of interior angles = (6−2) × 180° = 720°\nStep 2: Divide by 6 sides: 720° ÷ 6 = 120°\n\nCheck: each exterior angle = 180° − 120° = 60°, and 6 × 60° = 360° ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-20-2-6",islandId:"m8i-20-2",front:"A triangle has angles x, 2x and 3x. Find x and name the triangle type.",
   back:"x + 2x + 3x = 180°\n6x = 180°\nx = 30°\n\nAngles: 30°, 60°, 90° — this is a right-angled scalene triangle (all angles different, one is 90°).",difficulty:3,category:"calculation"},

  // m8i-20-3 — Parallel Lines & Transversals
  {id:"m8fc-20-3-1",islandId:"m8i-20-3",front:"What are alternate angles, and are they equal?",
   back:"Alternate angles form a Z-shape (or N-shape) when a transversal crosses parallel lines. They lie on opposite sides of the transversal and between the parallel lines.\n\nAlternate angles are EQUAL.\nExample: if one is 65°, so is the alternate angle.",difficulty:1,category:"definition"},
  {id:"m8fc-20-3-2",islandId:"m8i-20-3",front:"What are corresponding angles, and are they equal?",
   back:"Corresponding angles form an F-shape when a transversal crosses parallel lines. They lie on the same side of the transversal and the same side of each parallel line.\n\nCorresponding angles are EQUAL.",difficulty:1,category:"definition"},
  {id:"m8fc-20-3-3",islandId:"m8i-20-3",front:"What are co-interior angles? What do they sum to?",
   back:"Co-interior angles (also called same-side interior or allied angles) form a C-shape or U-shape. They lie between the parallel lines and on the same side of the transversal.\n\nCo-interior angles are SUPPLEMENTARY — they sum to 180°.",difficulty:2,category:"definition"},
  {id:"m8fc-20-3-4",islandId:"m8i-20-3",front:"A transversal crosses two parallel lines. One co-interior angle is 112°. Find the other.",
   back:"Co-interior angles sum to 180°.\n180° − 112° = 68°\n\nThe other co-interior angle is 68°.\nCheck: 112° + 68° = 180° ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-20-3-5",islandId:"m8i-20-3",front:"Two lines are cut by a transversal. Corresponding angles measure 75° and 3x°. Find x, and state whether the lines are parallel.",
   back:"If the lines are parallel, corresponding angles are equal:\n3x = 75\nx = 25\n\nWith x = 25, both angles are 75°, confirming the lines are parallel.",difficulty:2,category:"application"},
  {id:"m8fc-20-3-6",islandId:"m8i-20-3",front:"Name the three angle relationships for parallel lines and state the rule for each.",
   back:"1. Alternate angles: EQUAL (Z-shape)\n2. Corresponding angles: EQUAL (F-shape)\n3. Co-interior angles: SUPPLEMENTARY (add to 180°, C-shape)\n\nAll three only hold when lines are parallel.",difficulty:2,category:"concept"},

  // m8i-20-4 — Angle Relationships & Circle Parts
  {id:"m8fc-20-4-1",islandId:"m8i-20-4",front:"What are complementary angles?",
   back:"Two angles are complementary if they sum to 90°.\n\nExample: 34° and 56° are complementary (34 + 56 = 90).\nIf one angle is a°, its complement is (90 − a)°.",difficulty:1,category:"definition"},
  {id:"m8fc-20-4-2",islandId:"m8i-20-4",front:"What are supplementary angles?",
   back:"Two angles are supplementary if they sum to 180°.\n\nExample: 120° and 60° are supplementary (120 + 60 = 180).\nAngles on a straight line are always supplementary.",difficulty:1,category:"definition"},
  {id:"m8fc-20-4-3",islandId:"m8i-20-4",front:"What are vertically opposite angles, and what is their key property?",
   back:"Vertically opposite angles are formed opposite each other when two lines intersect. They share the same vertex.\n\nVertically opposite angles are always EQUAL.\nExample: if one pair is 70°, the opposite pair is also 70°.",difficulty:1,category:"definition"},
  {id:"m8fc-20-4-4",islandId:"m8i-20-4",front:"Name six key parts of a circle.",
   back:"• Radius: from centre to edge\n• Diameter: chord through centre (= 2 × radius)\n• Chord: any straight line from one edge to another\n• Arc: part of the circumference\n• Sector: pie-slice region bounded by two radii and an arc\n• Tangent: line that touches the circle at exactly one point",difficulty:2,category:"definition"},
  {id:"m8fc-20-4-5",islandId:"m8i-20-4",front:"Two intersecting lines form four angles: a, b, c, d in order. Angle a = 48°. Find all four angles.",
   back:"Vertically opposite: a = c = 48°.\nAngles on a straight line: a + b = 180°, so b = 132°.\nVertically opposite: b = d = 132°.\n\nFour angles: 48°, 132°, 48°, 132°. Check: 48 + 132 + 48 + 132 = 360° ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-20-4-6",islandId:"m8i-20-4",front:"An angle is 18° more than its complement. Find both angles.",
   back:"Let the angle be x. Its complement is (90 − x).\nx = (90 − x) + 18\nx = 108 − x\n2x = 108\nx = 54°\n\nThe angles are 54° and 36°. Check: 54 + 36 = 90° ✓",difficulty:3,category:"calculation"},

  // m8i-20-5 — Geometric Constructions
  {id:"m8fc-20-5-1",islandId:"m8i-20-5",front:"Describe the steps to construct the perpendicular bisector of a line segment AB.",
   back:"1. Open your compass to more than half AB.\n2. Draw arcs above and below AB from centre A.\n3. Without changing the radius, draw arcs from centre B — they cross the first arcs.\n4. Join the two crossing points.\n\nThis line is perpendicular to AB and passes through its midpoint.",difficulty:2,category:"concept"},
  {id:"m8fc-20-5-2",islandId:"m8i-20-5",front:"Describe the steps to bisect an angle.",
   back:"1. Place compass at the vertex; draw an arc cutting both arms.\n2. From each point where the arc cuts, draw equal arcs that cross inside the angle.\n3. Draw a ray from the vertex through the crossing point.\n\nThis ray divides the angle into two equal halves.",difficulty:2,category:"concept"},
  {id:"m8fc-20-5-3",islandId:"m8i-20-5",front:"How do you construct an equilateral triangle given side length AB?",
   back:"1. Draw segment AB.\n2. Set compass radius = AB; draw arc from A above AB.\n3. Keep same radius; draw arc from B — it crosses the first arc at C.\n4. Join A to C and B to C.\n\nAB = AC = BC, so the triangle is equilateral (all angles = 60°).",difficulty:2,category:"concept"},
  {id:"m8fc-20-5-4",islandId:"m8i-20-5",front:"How is a regular hexagon constructed inside a circle?",
   back:"A regular hexagon fits exactly inside a circle of radius r:\n1. Draw a circle of radius r.\n2. Place the compass on the circle and mark off chords equal to r all the way round — this gives 6 equally spaced points.\n3. Join consecutive points to form the hexagon.\n\nEach side equals the radius.",difficulty:2,category:"concept"},
  {id:"m8fc-20-5-5",islandId:"m8i-20-5",front:"What is a perpendicular bisector, and what property does every point on it have?",
   back:"A perpendicular bisector of a segment AB is a line that:\n• is perpendicular (90°) to AB\n• passes through the midpoint of AB\n\nEvery point on the perpendicular bisector is equidistant from A and B.",difficulty:1,category:"definition"},
  {id:"m8fc-20-5-6",islandId:"m8i-20-5",front:"Why must you NOT change the compass setting during a construction?",
   back:"Constructions rely on equal radii to create equal lengths and ensure accuracy.\n\nIf you change the compass width mid-construction, the arcs will not intersect at the correct points, and the construction will be wrong.\n\nAlways keep the compass set at the same radius until that step is complete.",difficulty:1,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-20-1":[
    {q:"Which of these is a regular polygon?",opts:["Scalene triangle","Rectangle","Equilateral triangle","Isosceles trapezium"],c:2,e:"An equilateral triangle has all three sides equal and all angles equal (60°), satisfying both conditions for a regular polygon. A rectangle has equal angles but unequal sides (unless it is a square), so it is only regular if it is a square."},
    {q:"An angle measures 217°. What type of angle is it?",opts:["Obtuse","Right","Straight","Reflex"],c:3,e:"A reflex angle is between 180° and 360°. Since 217° is between 180° and 360°, it is reflex. Obtuse is 90°–180°, right is exactly 90°, and straight is exactly 180°."},
    {q:"A triangle has sides 5 cm, 5 cm and 8 cm. How should it be classified by its sides?",opts:["Equilateral","Isosceles","Scalene","Right-angled"],c:1,e:"Two sides are equal (both 5 cm), making it isosceles. Equilateral requires all three sides equal; scalene requires no sides equal. Right-angled describes the angle type, not the sides."},
    {q:"Which quadrilateral has exactly one pair of parallel sides?",opts:["Parallelogram","Rhombus","Trapezium","Rectangle"],c:2,e:"A trapezium has exactly one pair of parallel sides. A parallelogram, rhombus and rectangle all have two pairs of parallel sides."},
    {q:"How many sides does a decagon have?",opts:["8","9","10","12"],c:2,e:"A decagon has 10 sides. Octagon = 8, nonagon = 9, dodecagon = 12."}
  ],
  "m8i-20-2":[
    {q:"In a triangle, two angles are 54° and 73°. What is the third angle?",opts:["43°","53°","63°","127°"],c:1,e:"Angles in a triangle sum to 180°. Third angle = 180° − 54° − 73° = 53°."},
    {q:"What is the sum of interior angles of a pentagon?",opts:["360°","450°","540°","720°"],c:2,e:"Sum = (n − 2) × 180° = (5 − 2) × 180° = 3 × 180° = 540°."},
    {q:"In a quadrilateral, three angles are 85°, 110° and 95°. Find the fourth angle.",opts:["60°","70°","80°","90°"],c:1,e:"Angles in a quadrilateral sum to 360°. Fourth angle = 360° − 85° − 110° − 95° = 70°."},
    {q:"An exterior angle of a triangle is 118°. The two remote interior angles are equal. Find each interior angle.",opts:["29°","59°","62°","69°"],c:1,e:"Each remote interior angle = 118° ÷ 2 = 59° (Exterior Angle Theorem: exterior angle = sum of two remote interior angles). The third interior angle = 180° − 118° = 62°."},
    {q:"Find each interior angle of a regular octagon.",opts:["120°","135°","140°","150°"],c:1,e:"Sum = (8 − 2) × 180° = 1080°. Each angle = 1080° ÷ 8 = 135°."}
  ],
  "m8i-20-3":[
    {q:"Two parallel lines are cut by a transversal. One alternate angle is 72°. What is the other alternate angle?",opts:["18°","72°","108°","144°"],c:1,e:"Alternate angles are equal when lines are parallel, so the other alternate angle is also 72°."},
    {q:"A transversal cuts two parallel lines. One co-interior angle is 67°. Find the other.",opts:["23°","67°","113°","123°"],c:2,e:"Co-interior angles sum to 180°. Other angle = 180° − 67° = 113°."},
    {q:"Which angle relationship forms an F-shape with a transversal and two parallel lines?",opts:["Alternate angles","Co-interior angles","Corresponding angles","Vertically opposite angles"],c:2,e:"Corresponding angles form an F-shape. Alternate angles form a Z-shape and co-interior angles form a C-shape."},
    {q:"A transversal crosses two lines. Alternate angles are 58° and 4x − 6°. Find x, given the lines are parallel.",opts:["x = 13","x = 14","x = 16","x = 64"],c:1,e:"Alternate angles are equal: 4x − 6 = 58 → 4x = 64 → x = 16. Check: 4(16) − 6 = 58° ✓"},
    {q:"Which statement about co-interior angles is correct?",opts:["They are always equal","They sum to 90°","They sum to 180°","They sum to 360°"],c:2,e:"Co-interior (same-side interior) angles between two parallel lines sum to 180°. Alternate and corresponding angles are equal, not supplementary."}
  ],
  "m8i-20-4":[
    {q:"Two angles are complementary. One angle is 37°. What is the other?",opts:["37°","53°","63°","143°"],c:1,e:"Complementary angles sum to 90°. Other angle = 90° − 37° = 53°."},
    {q:"Two lines intersect. One angle formed is 124°. What is the vertically opposite angle?",opts:["56°","66°","124°","236°"],c:2,e:"Vertically opposite angles are equal, so the opposite angle is also 124°."},
    {q:"Which part of a circle is a straight line that joins two points on the circumference but does NOT pass through the centre?",opts:["Radius","Diameter","Chord","Tangent"],c:2,e:"A chord connects any two points on the circumference. A diameter is a special chord that passes through the centre. A radius goes from centre to circumference. A tangent just touches the circle."},
    {q:"Two supplementary angles are in the ratio 2:3. Find the larger angle.",opts:["36°","72°","108°","120°"],c:2,e:"Supplementary angles sum to 180°. Parts: 2 + 3 = 5. Each part = 180° ÷ 5 = 36°. Larger angle = 3 × 36° = 108°."},
    {q:"An angle is three times its complement. Find the angle.",opts:["22.5°","45°","60°","67.5°"],c:3,e:"Let the angle be x. Complement = 90° − x. Then x = 3(90° − x) → x = 270° − 3x → 4x = 270° → x = 67.5°."}
  ],
  "m8i-20-5":[
    {q:"When constructing the perpendicular bisector of AB, why must the compass radius be set to more than half of AB?",opts:["To make the arcs meet on the line AB","To ensure the arcs from A and B cross above and below AB","To draw a smaller arc","To avoid using the whole compass"],c:1,e:"If the radius is less than or equal to half of AB, the arcs from A and B will not intersect. Setting it to more than half guarantees they cross both above and below the line, giving two points to define the bisector."},
    {q:"Which of these is constructed using the perpendicular bisector technique?",opts:["Finding the midpoint of a segment","Drawing a 30° angle","Dividing an angle into three","Drawing parallel lines"],c:0,e:"The perpendicular bisector passes through the midpoint of a segment, so this technique locates the midpoint. Angle constructions use the angle bisector method."},
    {q:"An angle bisector divides an angle into two angles each measuring 38°. What was the original angle?",opts:["19°","38°","76°","90°"],c:2,e:"The bisector splits the angle into two equal parts of 38° each. Original angle = 2 × 38° = 76°."},
    {q:"When constructing a regular hexagon inscribed in a circle of radius 5 cm, what length should the compass be set to for marking the six vertices?",opts:["2.5 cm","5 cm","10 cm","There is no fixed length"],c:1,e:"The side length of a regular hexagon inscribed in a circle equals the radius of the circle. So the compass stays set at 5 cm throughout."},
    {q:"What is the defining property of every point that lies on the perpendicular bisector of segment PQ?",opts:["It is closer to P than to Q","It is equidistant from P and Q","It lies on the segment PQ","It is the midpoint of PQ"],c:1,e:"Every point on the perpendicular bisector is the same distance from P as from Q. The midpoint is just one such point — the bisector extends infinitely in both directions."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-20-1': `
<h2>Classify Polygons &amp; Angles</h2>
<p>Understanding the names and properties of shapes and angles is the foundation of all geometry. A <strong>polygon</strong> is any closed 2D shape made of straight sides. Angles describe the amount of turn between two lines meeting at a point.</p>

<h3>Types of polygon</h3>
<p>Polygons are named by the number of sides: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10).</p>
<p>A polygon is <strong>regular</strong> if all its sides are equal AND all its angles are equal (e.g. equilateral triangle, regular hexagon). Otherwise it is <strong>irregular</strong>.</p>

<h3>Angle types</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Type</th><th style="padding:8px;border:1px solid #ccc">Size</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Acute</td><td style="padding:8px;border:1px solid #ccc">0° &lt; angle &lt; 90°</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Right</td><td style="padding:8px;border:1px solid #ccc">Exactly 90°</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Obtuse</td><td style="padding:8px;border:1px solid #ccc">90° &lt; angle &lt; 180°</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Straight</td><td style="padding:8px;border:1px solid #ccc">Exactly 180°</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Reflex</td><td style="padding:8px;border:1px solid #ccc">180° &lt; angle &lt; 360°</td></tr>
</table>

<h3>Classifying triangles</h3>
<p><strong>By sides:</strong> equilateral (all sides equal), isosceles (2 sides equal), scalene (no sides equal).<br>
<strong>By angles:</strong> acute (all angles under 90°), right-angled (one angle = 90°), obtuse (one angle over 90°).</p>

<h3>Common quadrilaterals</h3>
<div class="example-box">
<p><strong>Square:</strong> 4 equal sides, 4 right angles.<br>
<strong>Rectangle:</strong> opposite sides equal, 4 right angles.<br>
<strong>Parallelogram:</strong> 2 pairs of parallel sides, opposite angles equal.<br>
<strong>Rhombus:</strong> 4 equal sides, opposite angles equal (no right angles unless it is a square).<br>
<strong>Trapezium:</strong> exactly 1 pair of parallel sides.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Polygon</dt><dd>A closed 2D shape with straight sides.</dd>
<dt>Regular polygon</dt><dd>All sides equal AND all angles equal.</dd>
<dt>Vertex (plural: vertices)</dt><dd>A corner where two sides of a polygon meet.</dd>
<dt>Reflex angle</dt><dd>An angle greater than 180° but less than 360°.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Calling a rectangle regular — ✅ a rectangle only qualifies if all sides are equal (a square).</li>
<li>❌ Forgetting that reflex angles exist — ✅ angles can be greater than 180°.</li>
<li>❌ Classifying a right-angled triangle as obtuse — ✅ right-angled means one angle is exactly 90°, not greater.</li>
</ul>`,

'm8i-20-2': `
<h2>Angles in Polygons</h2>
<p>Once you know how to classify angles and polygons, you can use powerful rules to find missing angles without a protractor. These rules rely on the fact that polygons can be divided into triangles.</p>

<h3>Triangle angle sum</h3>
<p>The interior angles of any triangle sum to <strong>180°</strong>. Use this to find a missing angle.</p>
<div class="example-box">
<p><strong>Example:</strong> A triangle has angles 47° and 83°. Find the third angle.</p>
<p>Third angle = 180° − 47° − 83° = <strong>50°</strong>.</p>
</div>

<h3>Quadrilateral angle sum</h3>
<p>The interior angles of any quadrilateral sum to <strong>360°</strong> (because it splits into 2 triangles: 2 × 180° = 360°).</p>

<h3>Interior angle sum of any polygon</h3>
<p>For a polygon with <em>n</em> sides: <strong>Sum = (n − 2) × 180°</strong></p>
<p>For a <em>regular</em> polygon, each interior angle = Sum ÷ n.</p>
<div class="example-box">
<p><strong>Example:</strong> Find each interior angle of a regular pentagon.</p>
<p>Sum = (5 − 2) × 180° = 540°.<br>
Each angle = 540° ÷ 5 = <strong>108°</strong>.</p>
</div>

<h3>Exterior Angle Theorem</h3>
<p>The exterior angle of a triangle equals the sum of the two <em>non-adjacent</em> (remote) interior angles.</p>
<div class="example-box">
<p><strong>Example:</strong> Remote interior angles are 52° and 61°. Find the exterior angle.</p>
<p>Exterior angle = 52° + 61° = <strong>113°</strong>.<br>
Check: third interior angle = 180° − 113° = 67°; then 52° + 61° + 67° = 180° ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Interior angle</dt><dd>An angle inside a polygon at one of its vertices.</dd>
<dt>Exterior angle</dt><dd>The angle formed outside a polygon when a side is extended.</dd>
<dt>Regular polygon</dt><dd>A polygon with all sides and all angles equal.</dd>
<dt>Exterior Angle Theorem</dt><dd>Exterior angle of a triangle = sum of the two remote interior angles.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using 360° for a triangle — ✅ triangles sum to 180°; 360° is for quadrilaterals.</li>
<li>❌ Forgetting to subtract 2 in the formula — ✅ it is (n − 2) × 180°, not n × 180°.</li>
<li>❌ Confusing interior and exterior angles — ✅ interior + exterior = 180° at each vertex.</li>
</ul>`,

'm8i-20-3': `
<h2>Parallel Lines &amp; Transversals</h2>
<p>When a straight line (the <strong>transversal</strong>) crosses two parallel lines, it creates several pairs of angles with special relationships. Spotting the shape formed by the angle pair reveals the rule instantly.</p>

<h3>The three key angle pairs</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Pair</th><th style="padding:8px;border:1px solid #ccc">Shape hint</th><th style="padding:8px;border:1px solid #ccc">Rule</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Alternate angles</td><td style="padding:8px;border:1px solid #ccc">Z- or N-shape</td><td style="padding:8px;border:1px solid #ccc">Equal</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Corresponding angles</td><td style="padding:8px;border:1px solid #ccc">F-shape</td><td style="padding:8px;border:1px solid #ccc">Equal</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Co-interior angles</td><td style="padding:8px;border:1px solid #ccc">C- or U-shape</td><td style="padding:8px;border:1px solid #ccc">Sum to 180°</td></tr>
</table>

<h3>Alternate angles (Z-shape)</h3>
<p>Alternate angles lie <em>between</em> the parallel lines on <em>opposite</em> sides of the transversal.</p>
<div class="example-box">
<p><strong>Example:</strong> An alternate angle pair. One is 58°. Find the other.</p>
<p>Alternate angles are equal → the other is also <strong>58°</strong>.</p>
</div>

<h3>Co-interior angles (C-shape)</h3>
<p>Co-interior angles lie between the parallel lines on the <em>same</em> side of the transversal. They are supplementary.</p>
<div class="example-box">
<p><strong>Example:</strong> One co-interior angle is 105°. Find the other.</p>
<p>105° + x = 180° → x = <strong>75°</strong>.</p>
</div>

<h3>Finding missing angles — worked example</h3>
<div class="example-box">
<p><strong>Example:</strong> Lines are parallel. A corresponding angle is (2x + 10)° and another corresponding angle is 80°.</p>
<p>2x + 10 = 80 (corresponding angles are equal)<br>
2x = 70 → x = <strong>35</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Transversal</dt><dd>A line that crosses two or more other lines.</dd>
<dt>Alternate angles</dt><dd>Equal angles on opposite sides of a transversal between parallel lines (Z-shape).</dd>
<dt>Corresponding angles</dt><dd>Equal angles in the same position at each intersection (F-shape).</dd>
<dt>Co-interior angles</dt><dd>Supplementary angles on the same side of the transversal between parallel lines (C-shape).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding alternate angles to 180° — ✅ alternate angles are EQUAL, not supplementary.</li>
<li>❌ Saying co-interior angles are equal — ✅ they add to 180°, they are NOT equal (unless both are 90°).</li>
<li>❌ Applying these rules to non-parallel lines — ✅ the rules ONLY work for parallel lines.</li>
</ul>`,

'm8i-20-4': `
<h2>Angle Relationships &amp; Circle Parts</h2>
<p>Several fundamental angle relationships arise whenever lines intersect or meet. Knowing these shortcuts lets you find missing angles with a single calculation. You also need to recognise the key parts of a circle in geometry problems.</p>

<h3>Complementary angles</h3>
<p>Two angles are <strong>complementary</strong> if they sum to <strong>90°</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> One angle is 28°. Find its complement.</p>
<p>Complement = 90° − 28° = <strong>62°</strong>. Check: 28 + 62 = 90 ✓</p>
</div>

<h3>Supplementary angles</h3>
<p>Two angles are <strong>supplementary</strong> if they sum to <strong>180°</strong>. Angles on a straight line are always supplementary.</p>
<div class="example-box">
<p><strong>Example:</strong> Angles on a straight line are 3x° and 57°. Find x.</p>
<p>3x + 57 = 180 → 3x = 123 → x = <strong>41</strong>.</p>
</div>

<h3>Vertically opposite angles</h3>
<p>When two straight lines cross, four angles are formed. Opposite pairs are called <strong>vertically opposite</strong> and they are always <strong>equal</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> Two lines intersect. One angle is 115°. Find all four angles.</p>
<p>Vertically opposite: also 115°.<br>
On a straight line: 180° − 115° = 65°.<br>
Vertically opposite: also 65°.<br>
Angles: 115°, 65°, 115°, 65°. Sum = 360° ✓</p>
</div>

<h3>Parts of a circle</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Part</th><th style="padding:8px;border:1px solid #ccc">Description</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Centre</td><td style="padding:8px;border:1px solid #ccc">The middle point, equidistant from all circumference points</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Radius</td><td style="padding:8px;border:1px solid #ccc">From centre to circumference</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Diameter</td><td style="padding:8px;border:1px solid #ccc">A chord through the centre; diameter = 2 × radius</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Chord</td><td style="padding:8px;border:1px solid #ccc">Any straight line from one circumference point to another</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Arc</td><td style="padding:8px;border:1px solid #ccc">Part of the circumference</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Sector</td><td style="padding:8px;border:1px solid #ccc">Pie-slice region bounded by two radii and an arc</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Tangent</td><td style="padding:8px;border:1px solid #ccc">A line touching the circle at exactly one point</td></tr>
</table>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Complementary</dt><dd>Two angles summing to 90°.</dd>
<dt>Supplementary</dt><dd>Two angles summing to 180°.</dd>
<dt>Vertically opposite</dt><dd>Equal angles formed opposite each other when two lines cross.</dd>
<dt>Tangent</dt><dd>A line that touches a circle at exactly one point, perpendicular to the radius at that point.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Confusing complementary (90°) with supplementary (180°) — ✅ C comes before S, 90° comes before 180°.</li>
<li>❌ Saying the diameter is just "the longest chord" — ✅ the diameter is specifically the chord through the centre.</li>
<li>❌ Forgetting that vertically opposite angles are equal, not supplementary — ✅ they are equal.</li>
</ul>`,

'm8i-20-5': `
<h2>Geometric Constructions</h2>
<p>Geometric constructions use only a <strong>compass</strong> and <strong>straightedge</strong> (ruler without markings) to draw shapes and lines with exact properties. The key is equal radii creating equal lengths or distances.</p>

<h3>Perpendicular bisector of a segment</h3>
<p>The perpendicular bisector passes through the <strong>midpoint</strong> of a segment at <strong>90°</strong>. Every point on it is <em>equidistant</em> from the two endpoints.</p>
<div class="example-box">
<p><strong>Steps for perpendicular bisector of AB:</strong></p>
<p>1. Set compass to more than half of AB.<br>
2. Draw arcs from A, above and below the line.<br>
3. Keep the same radius; draw arcs from B.<br>
4. Join the two crossing points — this is the perpendicular bisector.</p>
</div>

<h3>Angle bisector</h3>
<p>An angle bisector divides an angle into <strong>two equal halves</strong>.</p>
<div class="example-box">
<p><strong>Steps:</strong></p>
<p>1. Place compass at the vertex; draw an arc crossing both arms.<br>
2. From each intersection point, draw equal-radius arcs that cross inside the angle.<br>
3. Draw a ray from the vertex through the new crossing point.</p>
</div>

<h3>Equilateral triangle</h3>
<div class="example-box">
<p><strong>Steps (given side AB):</strong></p>
<p>1. Draw AB.<br>
2. Set compass = AB; draw arc from A.<br>
3. Same radius from B — cross the arc at C.<br>
4. Join AC and BC. All three sides = AB, so all angles = 60°.</p>
</div>

<h3>Regular hexagon in a circle</h3>
<p>A regular hexagon fits exactly inside a circle of radius r, with each side also equal to r.</p>
<div class="example-box">
<p><strong>Steps:</strong></p>
<p>1. Draw a circle of radius r.<br>
2. Starting anywhere on the circle, mark off chords of length r six times around the circumference.<br>
3. Join the six points to form the hexagon.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Compass</dt><dd>A drawing instrument used to draw circles and arcs of a fixed radius.</dd>
<dt>Perpendicular bisector</dt><dd>A line at 90° to a segment, passing through its midpoint.</dd>
<dt>Angle bisector</dt><dd>A ray that divides an angle into two equal parts.</dd>
<dt>Inscribed polygon</dt><dd>A polygon drawn inside a circle with all vertices on the circle.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Changing the compass setting mid-construction — ✅ keep it the same until that step is complete.</li>
<li>❌ Drawing arcs that are too small to intersect — ✅ open the compass to more than half the segment length.</li>
<li>❌ Using the ruler's markings to measure during a construction — ✅ constructions use compass radii, not rulers, to transfer equal lengths.</li>
</ul>`

});
