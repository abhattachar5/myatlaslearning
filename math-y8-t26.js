// math-y8-t26.js — Year 8 Maths Topic 26: Constructions
// Islands: m8i-26-1 (Bisectors & Perpendiculars), m8i-26-2 (Construct Polygons)
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-26-1 — Bisectors & Perpendiculars
  {id:"m8fc-26-1-1",islandId:"m8i-26-1",front:"What does it mean to construct a perpendicular bisector of a line segment?",
   back:"A perpendicular bisector is a line that crosses the original segment at exactly 90° and passes through its midpoint.\n\nIt divides the segment into two equal halves AND is at right angles to it.",difficulty:1,category:"definition"},
  {id:"m8fc-26-1-2",islandId:"m8i-26-1",front:"Describe the compass-and-straightedge steps to construct the perpendicular bisector of segment AB.",
   back:"1. Open the compass to more than half the length of AB.\n2. Place the compass point on A and draw an arc above and below the segment.\n3. Keep the same compass width, place the point on B and draw arcs that cross the first pair.\n4. The two arc intersections are equidistant from A and B — join them with a straight line.\nThis line is the perpendicular bisector.",difficulty:2,category:"concept"},
  {id:"m8fc-26-1-3",islandId:"m8i-26-1",front:"Why must the compass width be more than half of AB when constructing the perpendicular bisector?",
   back:"If the radius is exactly half or less, the two pairs of arcs will not intersect.\n\nThe arcs must cross on both sides of the segment to give the two points needed to draw the bisector line.",difficulty:2,category:"application"},
  {id:"m8fc-26-1-4",islandId:"m8i-26-1",front:"Describe how to bisect an angle using compass and straightedge.",
   back:"1. Place the compass point at the angle's vertex and draw an arc that cuts both arms of the angle.\n2. Label the two intersection points P and Q.\n3. Without changing the compass width, place it on P and draw an arc inside the angle.\n4. Repeat from Q — the two arcs cross at point R.\n5. Draw a ray from the vertex through R. This ray bisects the angle.",difficulty:2,category:"concept"},
  {id:"m8fc-26-1-5",islandId:"m8i-26-1",front:"What is the angle bisector theorem property that the construction relies on?",
   back:"Every point on an angle bisector is equidistant from both arms (sides) of the angle.\n\nIn the construction, point R is the same distance from both arms because it was found using equal compass radii from P and Q, which were equidistant from the vertex.",difficulty:3,category:"concept"},
  {id:"m8fc-26-1-6",islandId:"m8i-26-1",front:"How do you construct a perpendicular line from a point P that lies ON a given line?",
   back:"1. Place the compass on P and draw two arcs of equal radius that cut the line at points A and B on either side.\n2. Increase the compass radius (more than PA).\n3. Draw arcs above the line from A and from B — they intersect at point Q.\n4. Draw the line PQ. PQ is perpendicular to the original line at P.",difficulty:2,category:"concept"},

  // m8i-26-2 — Construct Polygons
  {id:"m8fc-26-2-1",islandId:"m8i-26-2",front:"What are the three properties of an equilateral triangle?",
   back:"1. All three sides are equal in length.\n2. All three interior angles are equal (each is 60°).\n3. The angle sum is 60° + 60° + 60° = 180°.\n\nBecause the angles equal 60°, an equilateral triangle can be constructed using only a compass and straightedge.",difficulty:1,category:"definition"},
  {id:"m8fc-26-2-2",islandId:"m8i-26-2",front:"Describe how to construct an equilateral triangle with side length AB using compass and straightedge.",
   back:"1. Draw the base AB.\n2. Open the compass to the length AB.\n3. Place the compass on A and draw an arc above AB.\n4. Without changing the width, place the compass on B and draw another arc — it crosses the first at point C.\n5. Draw lines AC and BC.\nTriangle ABC is equilateral because AC = BC = AB.",difficulty:2,category:"concept"},
  {id:"m8fc-26-2-3",islandId:"m8i-26-2",front:"Why does the standard equilateral triangle construction work geometrically?",
   back:"Because AC = AB (both equal the compass radius set from A) and BC = AB (radius from B).\n\nAll three sides are equal → equilateral.\nEqual sides force all angles to be 60° by the isosceles triangle property applied three ways.",difficulty:3,category:"concept"},
  {id:"m8fc-26-2-4",islandId:"m8i-26-2",front:"What is the key fact about the side length of a regular hexagon inscribed in a circle?",
   back:"The side length of a regular hexagon equals the radius of the circle it is inscribed in.\n\nThis is the reason you can construct the hexagon using only a compass set to the circle's radius — no measurement changes are needed.",difficulty:2,category:"definition"},
  {id:"m8fc-26-2-5",islandId:"m8i-26-2",front:"Describe how to construct a regular hexagon inscribed in a circle of radius r.",
   back:"1. Draw a circle of radius r.\n2. Mark any point A on the circle — this is the first vertex.\n3. Keep the compass set to radius r.\n4. Place the compass on A and mark arc B on the circle; move to B and mark C; continue to D, E, F.\n5. Six equally spaced points appear — join consecutive points to form the hexagon.",difficulty:2,category:"concept"},
  {id:"m8fc-26-2-6",islandId:"m8i-26-2",front:"A student measures the sides of their constructed hexagon and finds two sides are longer than the others. What is the most likely error?",
   back:"The compass width was changed during the construction.\n\nAll six steps must use the same radius equal to the circle's radius. If the compass slips or is adjusted, some chords will be longer or shorter, and the hexagon will not be regular.\n\nFix: always check the compass is still set to r before marking each new point.",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-26-1":[
    {q:"When constructing a perpendicular bisector of AB, the compass is placed on A and an arc is drawn. What must the compass radius be?",opts:["Exactly equal to AB","Less than half of AB","More than half of AB","Exactly one-third of AB"],c:2,e:"The arcs from A and from B must cross on both sides of the segment, so the radius must be more than half of AB. If it is half or less the arcs will not intersect."},
    {q:"Two arcs are drawn from A and two from B to form the perpendicular bisector of AB. The point where the arcs cross above AB is equidistant from A and B. Why?",opts:["It lies on the line AB","It was drawn with the same radius from both A and B","It is exactly at the midpoint of AB","The straightedge was placed at the midpoint"],c:1,e:"The intersection point is equidistant from A and B because both sets of arcs were drawn with the same compass radius. This equal-distance property is what places the point on the perpendicular bisector."},
    {q:"Which tool is NOT used in a standard geometric construction?",opts:["Compass","Ruler (for measuring)","Straightedge","Pencil"],c:1,e:"In classical geometric construction, a ruler is used only as a straightedge — for drawing straight lines, not for measuring. Only the compass provides length information."},
    {q:"In bisecting an angle at vertex V, you draw an arc that cuts both arms at P and Q. What is true about VP and VQ?",opts:["VP and VQ are different lengths","VP and VQ are equal because the same compass radius was used","PQ bisects the angle","VP is always longer than VQ"],c:1,e:"Since VP and VQ were both drawn using the same compass radius centred on the vertex V, they are equal in length. This equal-distance property is the foundation for finding the bisector."},
    {q:"A student wants to construct a perpendicular to a line through point P on the line. Which is the correct first step?",opts:["Draw a line parallel to the original","Place the compass on P and mark two equal arcs on the line on either side of P","Find the midpoint of the whole line","Draw a 45° angle at P"],c:1,e:"The first step is to use the compass centred on P to mark two points A and B equidistant from P on the line. From A and B you then draw crossing arcs above the line, and the join from P to that crossing point is perpendicular."}
  ],
  "m8i-26-2":[
    {q:"Each interior angle of an equilateral triangle measures:",opts:["45°","60°","90°","120°"],c:1,e:"An equilateral triangle has three equal angles and they must sum to 180°. So each angle is 180° ÷ 3 = 60°."},
    {q:"To construct an equilateral triangle on base AB, the compass is set to the length AB and arcs are drawn from A and B. The arcs meet at C. Why is triangle ABC equilateral?",opts:["Angle ACB = 90°","AC = BC = AB, so all sides are equal","The midpoint of AB is at C","Angles A and B are 45° each"],c:1,e:"The arc from A has radius AB, so AC = AB. The arc from B also has radius AB, so BC = AB. Therefore AC = BC = AB — all three sides are equal and the triangle is equilateral."},
    {q:"When constructing a regular hexagon inscribed in a circle of radius r, what compass setting is used throughout?",opts:["r ÷ 2","r × 2","r","r × √3"],c:2,e:"The side length of a regular hexagon exactly equals the radius of its circumscribed circle. So the compass is kept at radius r for all six steps, stepping around the circle to mark the six vertices."},
    {q:"A regular hexagon inscribed in a circle of radius 5 cm has sides of length:",opts:["2.5 cm","5 cm","10 cm","8.66 cm"],c:1,e:"The side length of a regular hexagon equals the radius of its circumscribed circle. Radius = 5 cm, so each side = 5 cm."},
    {q:"After constructing a regular hexagon inscribed in a circle, a student has six equally spaced points on the circle. How many equilateral triangles can be formed by joining alternate vertices (every other point)?",opts:["1","2","3","6"],c:1,e:"Joining every other vertex (i.e. vertices 1, 3, 5 and separately 2, 4, 6) gives exactly 2 equilateral triangles. These two triangles together form a Star of David pattern inside the hexagon."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-26-1': `
<h2>Bisectors &amp; Perpendiculars</h2>
<p>A <strong>geometric construction</strong> uses only two tools: a <strong>compass</strong> (for drawing arcs and transferring lengths) and a <strong>straightedge</strong> (for drawing straight lines, not for measuring). No rulers, no protractors — just these two tools. The three key constructions on this island are the perpendicular bisector, the angle bisector, and the perpendicular at a point on a line.</p>

<h3>Perpendicular Bisector of a Line Segment</h3>
<p>The perpendicular bisector of segment AB is the line that cuts AB at its midpoint at exactly 90°. Every point on this line is equidistant from A and B.</p>
<div class="example-box">
<p><strong>Steps to construct the perpendicular bisector of AB:</strong></p>
<p>1. Open the compass to a radius <strong>greater than half of AB</strong> (this is essential — if the radius is too small the arcs will not cross).<br>
2. Place the compass point on <strong>A</strong>. Draw an arc above and an arc below the line.<br>
3. Without changing the compass width, place the point on <strong>B</strong>. Draw arcs that cross the first pair — you get two intersection points, one above AB (call it P) and one below (call it Q).<br>
4. Use the straightedge to draw the line through P and Q.<br>
The line PQ is the perpendicular bisector. It passes through the midpoint of AB and is at 90° to AB.</p>
</div>
<p><strong>Why it works:</strong> P and Q were found using equal compass radii from both A and B, so AP = BP and AQ = BQ. Any point equidistant from A and B lies on the perpendicular bisector.</p>

<h3>Angle Bisector</h3>
<p>The angle bisector divides an angle exactly in half. Every point on the bisector is equidistant from both arms of the angle.</p>
<div class="example-box">
<p><strong>Steps to bisect angle ABC (vertex at B):</strong></p>
<p>1. Place the compass on vertex <strong>B</strong>. Draw an arc that cuts both arms of the angle — label the intersections P (on arm BA) and Q (on arm BC).<br>
2. Move the compass to point <strong>P</strong>. Draw an arc in the interior of the angle.<br>
3. Keep the same radius, move to <strong>Q</strong>, and draw another arc — it crosses the previous arc at point R.<br>
4. Draw the ray from B through R. This is the angle bisector.</p>
</div>
<p><strong>Why it works:</strong> BP = BQ (equal radii from B in step 1) and PR = QR (equal radii from P and Q in steps 2–3). So R is equidistant from both arms, placing it on the bisector.</p>

<h3>Perpendicular to a Line at a Point on the Line</h3>
<p>To construct a line perpendicular to a given line at point P (where P is on the line):</p>
<div class="example-box">
<p>1. Place the compass on <strong>P</strong>. Draw two arcs of equal radius that cut the line on either side — label them A and B.<br>
2. Increase the compass radius. Place it on <strong>A</strong> and draw an arc above the line.<br>
3. Keep the same radius, place it on <strong>B</strong>, and draw a crossing arc above the line — label the intersection Q.<br>
4. Draw the line through P and Q. Line PQ is perpendicular to the original line.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Compass</dt><dd>A drawing instrument used to draw arcs and circles, and to transfer equal lengths.</dd>
<dt>Straightedge</dt><dd>A ruler used only to draw straight lines — not for measuring distances.</dd>
<dt>Perpendicular bisector</dt><dd>A line that crosses a segment at its midpoint at 90°.</dd>
<dt>Angle bisector</dt><dd>A ray that divides an angle into two equal halves.</dd>
<dt>Locus</dt><dd>A set of all points satisfying a given condition (e.g. equidistant from two points).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Setting the compass to exactly half of AB for the perpendicular bisector — ✅ it must be <em>more</em> than half so the arcs actually cross.</li>
<li>❌ Changing the compass width between the two sets of arcs — ✅ keep it fixed throughout each construction step that requires equal radii.</li>
<li>❌ Using a protractor or ruler to "check" by measuring — ✅ a valid construction relies only on compass and straightedge; measuring is used to <em>verify</em> afterwards, not during.</li>
<li>❌ Drawing the bisector ray in the wrong direction — ✅ the angle bisector ray must start at the vertex and pass through point R inside the angle.</li>
</ul>`,

'm8i-26-2': `
<h2>Construct Polygons</h2>
<p>A compass and straightedge can produce perfect equilateral triangles and regular hexagons because their geometry is based on equal lengths — the very thing a compass measures. No protractor is needed.</p>

<h3>Constructing an Equilateral Triangle</h3>
<p>An equilateral triangle has three equal sides and three equal angles, each measuring <strong>60°</strong> (since 180° ÷ 3 = 60°).</p>
<div class="example-box">
<p><strong>Steps to construct equilateral triangle ABC with side length AB:</strong></p>
<p>1. Draw the base line segment <strong>AB</strong> (this is your given side length).<br>
2. Open the compass to the length of <strong>AB</strong>.<br>
3. Place the compass point on <strong>A</strong>. Draw a large arc above the line.<br>
4. Without changing the compass width, place the point on <strong>B</strong>. Draw another arc above the line — it intersects the first arc at point <strong>C</strong>.<br>
5. Use the straightedge to draw lines <strong>AC</strong> and <strong>BC</strong>.<br>
Triangle ABC is equilateral: AC = AB (radius from A) and BC = AB (radius from B), so all three sides are equal.</p>
</div>
<p><strong>Why all angles are 60°:</strong> Since AC = AB = BC, the triangle is equilateral. In any equilateral triangle the three angles must be equal and sum to 180°, giving 60° each.</p>

<h3>Constructing a Regular Hexagon Inscribed in a Circle</h3>
<p>A regular hexagon inscribed in a circle has all six vertices on the circle. The key fact is: <strong>the side length of a regular hexagon equals the radius of its circumscribed circle</strong>. This is why the construction requires no change of compass width.</p>
<div class="example-box">
<p><strong>Steps to construct a regular hexagon in a circle of radius r:</strong></p>
<p>1. Draw a circle with centre O and radius <strong>r</strong>.<br>
2. Mark any point <strong>A</strong> on the circle — this is the first vertex.<br>
3. Keep the compass set to radius <strong>r</strong> (do not change it at any step).<br>
4. Place the compass on A and mark arc <strong>B</strong> on the circle.<br>
5. Move to B, mark arc <strong>C</strong>; move to C, mark arc <strong>D</strong>; to D, mark <strong>E</strong>; to E, mark <strong>F</strong>.<br>
6. You now have six equally spaced points A, B, C, D, E, F on the circle.<br>
7. Join consecutive points: AB, BC, CD, DE, EF, FA with straight lines.<br>
The result is a regular hexagon inscribed in the circle.</p>
</div>
<p><strong>Why it works:</strong> Each chord AB, BC, … was drawn with radius r — the same as the circle's radius. Each chord is therefore equal to r, and the six equal chords divide the circle into six equal arcs, creating a regular hexagon.</p>

<h3>Linking Hexagon and Triangle</h3>
<p>The regular hexagon construction also produces equilateral triangles. Connecting alternate vertices (A, C, E) gives one equilateral triangle, and connecting B, D, F gives another. The hexagon is made up of <strong>six equilateral triangles</strong>, each with two sides equal to the radius r.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Equilateral triangle</dt><dd>A triangle with all three sides equal and all three angles equal to 60°.</dd>
<dt>Regular hexagon</dt><dd>A six-sided polygon with all sides equal and all interior angles equal to 120°.</dd>
<dt>Inscribed polygon</dt><dd>A polygon whose vertices all lie on a circle.</dd>
<dt>Circumscribed circle</dt><dd>The circle that passes through all the vertices of a polygon.</dd>
<dt>Radius of circumscribed circle</dt><dd>For a regular hexagon, this equals the side length of the hexagon.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Changing the compass width during the hexagon construction — ✅ the compass must stay set to exactly the circle's radius for all six steps.</li>
<li>❌ Drawing arcs outside the circle — ✅ each arc should mark a new point on the circle's circumference itself.</li>
<li>❌ Confusing the interior angle of a regular hexagon with 60° — ✅ each interior angle of a regular hexagon is 120° (the equilateral triangles inside have 60° angles, but the hexagon's interior angles are 120°).</li>
<li>❌ Forgetting the final side FA when drawing the hexagon — ✅ count six sides: AB, BC, CD, DE, EF, FA.</li>
</ul>`

});
