// content/y9/math/islands/t13.js — Year 9 Maths Topic 13: Constructions & Loci
// Islands m9i-13-1 .. m9i-13-2. Flashcards, static question banks, lessons.
// Reuses construction diagrams (math-perp-bisector, math-angle-bisector) and the
// new math-loci figure. Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-13-1 — Constructions
  {id:"m9fc-13-1-1", islandId:"m9i-13-1", front:"What is a 'construction' in maths?",
   back:"An accurate drawing made with only a ruler and a pair of compasses — no protractor.\n\nThe compass arcs do the measuring.", difficulty:1, category:"definition"},
  {id:"m9fc-13-1-2", islandId:"m9i-13-1", front:"How do you construct the perpendicular bisector of a line AB?",
   back:"Open the compasses to more than half of AB. Draw arcs from A and from B (above and below). Join the two crossing points.\n\nThat line cuts AB in half at a right angle.", difficulty:2, category:"concept"},
  {id:"m9fc-13-1-3", islandId:"m9i-13-1", front:"What is special about every point on a perpendicular bisector of AB?",
   back:"It is the same distance from A as from B (equidistant).\n\nThat is why the construction works — the equal arcs guarantee equal distances.", difficulty:2, category:"concept"},
  {id:"m9fc-13-1-4", islandId:"m9i-13-1", front:"How do you bisect an angle?",
   back:"From the vertex, draw an arc cutting both arms. From those two points, draw equal arcs that cross. Join the vertex to the crossing point.\n\nThat ray splits the angle into two equal halves.", difficulty:2, category:"concept"},
  {id:"m9fc-13-1-5", islandId:"m9i-13-1", front:"Why must you keep the compass setting the same within a step?",
   back:"Because the construction relies on equal distances. Changing the radius mid-step breaks the equal arcs, so the bisector would be inaccurate.", difficulty:2, category:"application"},
  {id:"m9fc-13-1-6", islandId:"m9i-13-1", front:"How do you construct a triangle given three side lengths (SSS)?",
   back:"Draw one side as the base. Open the compasses to the second side's length and arc from one end; to the third side's length and arc from the other end. Where the arcs cross is the third vertex.", difficulty:3, category:"application"},

  // m9i-13-2 — Loci & Regions
  {id:"m9fc-13-2-1", islandId:"m9i-13-2", front:"What is a locus?",
   back:"The set of all points that obey a given rule.\n\nFor example, all points 3 cm from a point P form a circle of radius 3 cm.", difficulty:2, category:"definition"},
  {id:"m9fc-13-2-2", islandId:"m9i-13-2", front:"What is the locus of points a fixed distance from a straight line?",
   back:"A pair of parallel lines, one on each side, plus semicircles at the ends if the line is a segment.", difficulty:2, category:"concept"},
  {id:"m9fc-13-2-3", islandId:"m9i-13-2", front:"What is the locus of points equidistant from two points A and B?",
   back:"The perpendicular bisector of AB.\n\nEvery point on it is the same distance from A as from B.", difficulty:2, category:"concept"},
  {id:"m9fc-13-2-4", islandId:"m9i-13-2", front:"What is the locus of points equidistant from two lines?",
   back:"The angle bisector of the angle between them.\n\nEvery point on it is the same perpendicular distance from each line.", difficulty:2, category:"concept"},
  {id:"m9fc-13-2-5", islandId:"m9i-13-2", front:"How do you shade a region 'within 4 cm of P and closer to A than B'?",
   back:"Draw the circle radius 4 cm around P and the perpendicular bisector of AB. Shade where BOTH conditions hold — inside the circle and on A's side of the bisector.", difficulty:3, category:"application"},
  {id:"m9fc-13-2-6", islandId:"m9i-13-2", front:"'Closer to A than B' — which side of the perpendicular bisector?",
   back:"The side containing A.\n\nThe bisector is the exact 'equal distance' line; points on A's side are nearer to A.", difficulty:3, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m9i-13-1": [
    {q:"Which instruments are allowed for a construction?", opts:["Ruler and compasses","Protractor only","Ruler and protractor","Set square only"], c:0,
     e:"Constructions use only a straight edge (ruler) and a pair of compasses — no measuring of angles."},
    {q:"The perpendicular bisector of AB meets AB at what angle?", opts:["90°","45°","60°","180°"], c:0,
     e:"'Perpendicular' means at right angles, so it crosses AB at 90° and cuts it in half."},
    {q:"Every point on the perpendicular bisector of AB is:", opts:["Equidistant from A and B","Closer to A","On the line AB","3 cm from A"], c:0,
     e:"The perpendicular bisector is exactly the set of points the same distance from A as from B."},
    {q:"To bisect an angle you draw arcs from:", opts:["The vertex, then the two arm points","The midpoint of one arm","A protractor reading","Two random points"], c:0,
     e:"Arc from the vertex to mark both arms, then equal arcs from those marks; join the vertex to where they cross."},
    {q:"When constructing a triangle SSS, the third vertex is where:", opts:["Two arcs cross","The ruler ends","The angle is 60°","The base is bisected"], c:0,
     e:"Arcs of the two remaining side-lengths cross at the third vertex."}
  ],
  "m9i-13-2": [
    {q:"The locus of points 5 cm from a fixed point is:", opts:["A circle of radius 5 cm","A line 5 cm long","Two parallel lines","A single point"], c:0,
     e:"All points a fixed distance from one point form a circle of that radius."},
    {q:"The locus of points equidistant from points A and B is the:", opts:["Perpendicular bisector of AB","Line AB","Circle through A and B","Angle bisector"], c:0,
     e:"Equidistant from two points → the perpendicular bisector of the segment joining them."},
    {q:"The locus of points equidistant from two lines is the:", opts:["Angle bisector","Perpendicular bisector","Midpoint","Circle"], c:0,
     e:"Equidistant from two lines → the bisector of the angle between them."},
    {q:"'Closer to A than to B' describes the region on which side of the perpendicular bisector?", opts:["A's side","B's side","Neither side","Both sides"], c:0,
     e:"Points nearer A lie on the side of the bisector that contains A."},
    {q:"The locus of points a fixed distance from a line segment includes:", opts:["Two parallel lines with rounded ends","Only one line","A single circle","A square"], c:0,
     e:"You get a parallel line each side of the segment, joined by semicircles around the endpoints."}
  ]
});

Object.assign(LESSONS, {
  "m9i-13-1": `<h2>Constructions with Ruler &amp; Compasses</h2>
<p>A <strong>construction</strong> is an accurate drawing made with only a ruler and a pair of compasses. The equal arcs from the compasses do the measuring, so keep the compass setting fixed within each step.</p>
<div class="lesson-diagram" data-diagram="math-perp-bisector"><p class="diagram-caption">Equal arcs from A and B give the perpendicular bisector</p></div>
<h3>Worked example</h3>
<p>To construct the <strong>perpendicular bisector</strong> of AB: open the compasses to more than half of AB, draw arcs from A and from B above and below the line, then join the two crossing points. The new line cuts AB in half at 90°.</p>
<div class="lesson-diagram" data-diagram="math-angle-bisector"><p class="diagram-caption">Bisecting an angle into two equal halves</p></div>
<h3>Common mistake</h3>
<p>Leave your construction arcs showing — they are the evidence that you constructed (not measured) the figure, and erasing them loses marks.</p>`,

  "m9i-13-2": `<h2>Loci &amp; Regions</h2>
<p>A <strong>locus</strong> is the set of all points that satisfy a rule. Four standard loci cover most questions:</p>
<ul>
<li>A fixed distance from a <strong>point</strong> → a circle.</li>
<li>A fixed distance from a <strong>line</strong> → a parallel line each side (with rounded ends).</li>
<li>Equidistant from <strong>two points</strong> → the perpendicular bisector.</li>
<li>Equidistant from <strong>two lines</strong> → the angle bisector.</li>
</ul>
<div class="lesson-diagram" data-diagram="math-loci"><p class="diagram-caption">Distance from a point (a circle) and distance from a line</p></div>
<h3>Worked example</h3>
<p>Shade the region within 4 cm of P <em>and</em> closer to A than B: draw the circle radius 4 cm about P and the perpendicular bisector of AB, then shade where both hold — inside the circle, on A's side of the bisector.</p>
<h3>Common mistake</h3>
<p>For 'closer to A than B', shade the side of the perpendicular bisector that contains A. The bisector itself is the line of <em>equal</em> distance.</p>`
});
