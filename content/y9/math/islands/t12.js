// content/y9/math/islands/t12.js — Year 9 Maths Topic 12: Mensuration
// Islands m9i-12-1 .. m9i-12-3. Flashcards, static question banks, lessons.
// Reuses shared diagrams (math-area-quad, math-net-cuboid, math-prism-cylinder,
// math-plan-elevation). Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-12-1 — Perimeter & Area
  {id:"m9fc-12-1-1", islandId:"m9i-12-1", front:"What is the difference between perimeter and area?",
   back:"Perimeter is the distance ALL the way round (a length, in cm). Area is the space inside (in cm²).", difficulty:1, category:"definition"},
  {id:"m9fc-12-1-2", islandId:"m9i-12-1", front:"State the area formulas for a triangle and a parallelogram.",
   back:"Triangle: ½ × base × height.\nParallelogram: base × height.\n\nThe height is the perpendicular height, not a slanted side.", difficulty:1, category:"definition"},
  {id:"m9fc-12-1-3", islandId:"m9i-12-1", front:"State the area of a trapezium.",
   back:"½ × (a + b) × h, where a and b are the parallel sides and h is the distance between them.", difficulty:2, category:"definition"},
  {id:"m9fc-12-1-4", islandId:"m9i-12-1", front:"Give the circumference and area of a circle.",
   back:"Circumference = πd (or 2πr). Area = πr².\n\nCircumference uses the diameter or radius; area always uses the radius squared.", difficulty:2, category:"definition"},
  {id:"m9fc-12-1-5", islandId:"m9i-12-1", front:"Find the area of a circle with radius 5 cm (π ≈ 3.14).",
   back:"≈ 78.5 cm²\n\nArea = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 cm².", difficulty:2, category:"calculation"},
  {id:"m9fc-12-1-6", islandId:"m9i-12-1", front:"How do you find the area of a compound shape?",
   back:"Split it into simple shapes, find each area, then add (or subtract a cut-out).\n\nLabel each piece so nothing is missed or double-counted.", difficulty:3, category:"application"},

  // m9i-12-2 — Surface Area & Volume
  {id:"m9fc-12-2-1", islandId:"m9i-12-2", front:"How do you find the volume of a prism?",
   back:"Volume = area of cross-section × length.\n\nA cuboid is a prism: volume = length × width × height.", difficulty:1, category:"definition"},
  {id:"m9fc-12-2-2", islandId:"m9i-12-2", front:"Find the volume of a cuboid 4 cm × 3 cm × 5 cm.",
   back:"60 cm³\n\n4 × 3 × 5 = 60 cm³. Volume is measured in cubic units.", difficulty:1, category:"calculation"},
  {id:"m9fc-12-2-3", islandId:"m9i-12-2", front:"State the volume of a cylinder.",
   back:"V = πr²h.\n\nIt is the circle's area (πr²) times the height — a cylinder is a circular prism.", difficulty:2, category:"definition"},
  {id:"m9fc-12-2-4", islandId:"m9i-12-2", front:"Find the volume of a cylinder, radius 3 cm, height 10 cm (π ≈ 3.14).",
   back:"≈ 282.6 cm³\n\nV = πr²h = 3.14 × 3² × 10 = 3.14 × 90 = 282.6 cm³.", difficulty:3, category:"calculation"},
  {id:"m9fc-12-2-5", islandId:"m9i-12-2", front:"What is surface area and how do you find it?",
   back:"The total area of all the faces. Find the area of each face (often from the net) and add them up.\n\nIt is an area, so the units are cm².", difficulty:2, category:"concept"},
  {id:"m9fc-12-2-6", islandId:"m9i-12-2", front:"Find the surface area of a cube of side 4 cm.",
   back:"96 cm²\n\nA cube has 6 square faces: 6 × (4 × 4) = 6 × 16 = 96 cm².", difficulty:2, category:"application"},

  // m9i-12-3 — Plans & Elevations
  {id:"m9fc-12-3-1", islandId:"m9i-12-3", front:"What is the plan view of a 3D solid?",
   back:"The view looking straight DOWN from above.\n\nFor a cylinder standing up, the plan is a circle.", difficulty:1, category:"definition"},
  {id:"m9fc-12-3-2", islandId:"m9i-12-3", front:"What are the front and side elevations?",
   back:"The views looking horizontally at the front and at the side of the solid.\n\nTogether with the plan, three views describe the whole shape.", difficulty:1, category:"definition"},
  {id:"m9fc-12-3-3", islandId:"m9i-12-3", front:"What is the plan view of a square-based pyramid?",
   back:"A square with its diagonals drawn in.\n\nThe outline is the square base; the diagonals show the edges rising to the apex above the centre.", difficulty:2, category:"application"},
  {id:"m9fc-12-3-4", islandId:"m9i-12-3", front:"Why do we use three views (plan + two elevations)?",
   back:"A single picture can be ambiguous. Three flat views give exact measurements and let someone rebuild the solid precisely.", difficulty:2, category:"concept"},
  {id:"m9fc-12-3-5", islandId:"m9i-12-3", front:"The front elevation is a rectangle and the plan is a circle. What is the solid?",
   back:"A cylinder.\n\nLooking from the front a standing cylinder is a rectangle; from above it is a circle.", difficulty:2, category:"application"},
  {id:"m9fc-12-3-6", islandId:"m9i-12-3", front:"On elevations, what do solid and dashed lines show?",
   back:"Solid lines show visible edges; dashed lines show hidden edges behind the solid.", difficulty:2, category:"concept"},

  // m9i-12-4 — Arc Length & Sector Area
  {id:"m9fc-12-4-1", islandId:"m9i-12-4", front:"What is an arc, and what is a sector?",
   back:"An arc is part of the circle's edge (a curved length). A sector is the 'pizza slice' between two radii and an arc.", difficulty:1, category:"definition"},
  {id:"m9fc-12-4-2", islandId:"m9i-12-4", front:"What fraction of the whole circle is a sector with angle θ?",
   back:"θ/360.\n\nA full circle is 360°, so an angle of θ at the centre gives the fraction θ ÷ 360 of the whole.", difficulty:1, category:"concept"},
  {id:"m9fc-12-4-3", islandId:"m9i-12-4", front:"State the formula for arc length.",
   back:"Arc length = (θ/360) × 2πr.\n\nIt is that fraction of the full circumference, 2πr.", difficulty:2, category:"definition"},
  {id:"m9fc-12-4-4", islandId:"m9i-12-4", front:"State the formula for sector area.",
   back:"Sector area = (θ/360) × πr².\n\nIt is the same fraction of the full circle area, πr².", difficulty:2, category:"definition"},
  {id:"m9fc-12-4-5", islandId:"m9i-12-4", front:"Find the arc length when θ = 90° and r = 8 cm (leave in terms of π).",
   back:"4π cm\n\n(90/360) × 2π × 8 = (1/4) × 16π = 4π ≈ 12.6 cm.", difficulty:2, category:"calculation"},
  {id:"m9fc-12-4-6", islandId:"m9i-12-4", front:"Find the sector area when θ = 90° and r = 8 cm (leave in terms of π).",
   back:"16π cm²\n\n(90/360) × π × 8² = (1/4) × 64π = 16π ≈ 50.3 cm².", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m9i-12-1": [
    {q:"Find the area of a triangle with base 8 cm and height 5 cm.", opts:["20 cm²","40 cm²","13 cm²","26 cm²"], c:0,
     e:"Area = ½ × base × height = ½ × 8 × 5 = 20 cm²."},
    {q:"Find the perimeter of a rectangle 7 cm by 3 cm.", opts:["20 cm","21 cm","10 cm","42 cm"], c:0,
     e:"Perimeter = 2 × (7 + 3) = 2 × 10 = 20 cm."},
    {q:"Find the area of a parallelogram with base 6 cm and height 4 cm.", opts:["24 cm²","12 cm²","20 cm²","10 cm²"], c:0,
     e:"Area = base × height = 6 × 4 = 24 cm²."},
    {q:"Find the circumference of a circle with diameter 10 cm (π ≈ 3.14).", opts:["31.4 cm","78.5 cm","15.7 cm","314 cm"], c:0,
     e:"Circumference = πd = 3.14 × 10 = 31.4 cm."},
    {q:"Find the area of a trapezium with parallel sides 5 cm and 9 cm, height 4 cm.", opts:["28 cm²","56 cm²","14 cm²","36 cm²"], c:0,
     e:"Area = ½ × (5 + 9) × 4 = ½ × 14 × 4 = 28 cm²."}
  ],
  "m9i-12-2": [
    {q:"Find the volume of a cuboid 6 cm × 2 cm × 4 cm.", opts:["48 cm³","12 cm³","24 cm³","88 cm³"], c:0,
     e:"Volume = 6 × 2 × 4 = 48 cm³."},
    {q:"A prism has cross-section area 15 cm² and length 8 cm. Find its volume.", opts:["120 cm³","23 cm³","60 cm³","1.875 cm³"], c:0,
     e:"Volume = cross-section × length = 15 × 8 = 120 cm³."},
    {q:"Find the volume of a cylinder with radius 2 cm and height 7 cm (π ≈ 3.14).", opts:["87.92 cm³","43.96 cm³","28 cm³","175.84 cm³"], c:0,
     e:"V = πr²h = 3.14 × 2² × 7 = 3.14 × 28 = 87.92 cm³ (≈ 88 cm³)."},
    {q:"Find the surface area of a cube of side 3 cm.", opts:["54 cm²","27 cm²","9 cm²","18 cm²"], c:0,
     e:"6 faces: 6 × (3 × 3) = 6 × 9 = 54 cm²."},
    {q:"Which unit is correct for volume?", opts:["cm³","cm²","cm","cm⁴"], c:0,
     e:"Volume is three-dimensional, so it is measured in cubic units, cm³."}
  ],
  "m9i-12-3": [
    {q:"What is the plan view of a cylinder standing upright?", opts:["A circle","A rectangle","A triangle","A square"], c:0,
     e:"Looking straight down on a standing cylinder you see a circle."},
    {q:"The plan and both elevations of a solid are all squares. What is the solid?", opts:["A cube","A cylinder","A cone","A sphere"], c:0,
     e:"A cube looks like a square from above, the front and the side."},
    {q:"The front elevation is a triangle and the plan is a square. The solid is a:", opts:["Square-based pyramid","Cylinder","Cuboid","Cone"], c:0,
     e:"A square base (plan) with triangular sides rising to a point (front view) is a square-based pyramid."},
    {q:"On an elevation, a hidden edge is drawn as a:", opts:["Dashed line","Solid line","Wavy line","Double line"], c:0,
     e:"Hidden edges are shown with dashed lines; visible edges are solid."},
    {q:"Which view do you get by looking straight down on a solid?", opts:["Plan","Front elevation","Side elevation","Net"], c:0,
     e:"The plan is the view from directly above."}
  ],
  "m9i-12-4": [
    {q:"What fraction of a circle is a sector with a centre angle of 90°?", opts:["1/4","1/2","1/3","1/90"], c:0,
     e:"90/360 = 1/4, so the sector is a quarter of the whole circle."},
    {q:"Find the arc length for θ = 90°, r = 8 cm (leave in terms of π).", opts:["4π cm","16π cm","8π cm","2π cm"], c:0,
     e:"(90/360) × 2π × 8 = (1/4) × 16π = 4π cm (≈ 12.6 cm)."},
    {q:"Find the sector area for θ = 90°, r = 8 cm (leave in terms of π).", opts:["16π cm²","64π cm²","4π cm²","32π cm²"], c:0,
     e:"(90/360) × π × 8² = (1/4) × 64π = 16π cm² (≈ 50.3 cm²)."},
    {q:"Which formula gives the length of an arc?", opts:["(θ/360) × 2πr","(θ/360) × πr²","2πr","πr²"], c:0,
     e:"Arc length is the fraction θ/360 of the full circumference 2πr."},
    {q:"Find the arc length of a semicircle (θ = 180°) with radius 10 cm (leave in terms of π).", opts:["10π cm","20π cm","5π cm","100π cm"], c:0,
     e:"(180/360) × 2π × 10 = (1/2) × 20π = 10π cm."}
  ]
});

Object.assign(LESSONS, {
  "m9i-12-1": `<h2>Perimeter &amp; Area</h2>
<p><strong>Perimeter</strong> is the distance around a shape (a length); <strong>area</strong> is the space inside (square units). Learn the key formulas: triangle ½×b×h, parallelogram b×h, trapezium ½(a+b)h, circle area πr² and circumference πd.</p>
<div class="lesson-diagram" data-diagram="math-area-quad"><p class="diagram-caption">Base and perpendicular height for triangles and quadrilaterals</p></div>
<h3>Worked example</h3>
<p>Find the area of a circle with radius 5 cm (π ≈ 3.14).</p>
<ul>
<li>Area = πr² = 3.14 × 5² = 3.14 × 25 = <strong>78.5 cm²</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Use the <em>perpendicular</em> height, not a slanted side. And remember area is in cm² but perimeter is in cm — mixing the units is a common slip.</p>`,

  "m9i-12-2": `<h2>Surface Area &amp; Volume</h2>
<p><strong>Volume</strong> measures the space inside a solid (cubic units). For any <strong>prism</strong>, volume = area of cross-section × length; a cylinder is a circular prism, so V = πr²h. <strong>Surface area</strong> is the total area of all the faces — often easiest from the net.</p>
<div class="lesson-diagram" data-diagram="math-prism-cylinder"><p class="diagram-caption">A prism's volume is its cross-section times its length</p></div>
<h3>Worked example</h3>
<p>Find the volume of a cylinder with radius 3 cm and height 10 cm (π ≈ 3.14).</p>
<ul>
<li>V = πr²h = 3.14 × 3² × 10 = 3.14 × 90 = <strong>282.6 cm³</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Keep volume (cm³) and surface area (cm²) separate. Volume fills the solid; surface area wraps around it.</p>`,

  "m9i-12-3": `<h2>Plans &amp; Elevations</h2>
<p>A 3D solid can be described by three flat views: the <strong>plan</strong> (looking down from above), the <strong>front elevation</strong> and the <strong>side elevation</strong> (looking horizontally). Together they let someone rebuild the solid exactly.</p>
<div class="lesson-diagram" data-diagram="math-plan-elevation"><p class="diagram-caption">Plan, front and side elevation of a solid</p></div>
<h3>Worked example</h3>
<p>A solid has a circular plan and a rectangular front elevation. It is a <strong>cylinder</strong> standing upright.</p>
<h3>Common mistake</h3>
<p>Draw hidden edges as dashed lines and visible edges as solid lines — leaving them all solid loses marks and can make the shape ambiguous.</p>`,

  "m9i-12-4": `<h2>Arc Length &amp; Sector Area</h2>
<p>An <strong>arc</strong> is part of a circle's edge — a curved length. A <strong>sector</strong> is the 'pizza slice' enclosed by two radii and an arc. The key idea is simple: a sector with centre angle θ is just the fraction <strong>θ/360</strong> of the whole circle, because a full turn is 360°.</p>
<div class="lesson-diagram" data-diagram="math-sector"><p class="diagram-caption">A sector is the fraction θ/360 of the whole circle</p></div>
<h3>The two formulas</h3>
<p>Take that same fraction of the circumference and of the area:</p>
<ul>
<li>Arc length = (θ/360) × 2πr</li>
<li>Sector area = (θ/360) × πr²</li>
</ul>
<h3>Worked example</h3>
<p>For θ = 90° and r = 8 cm, find the arc length and the sector area.</p>
<ul>
<li>The fraction is 90/360 = 1/4.</li>
<li>Arc length = (1/4) × 2π × 8 = (1/4) × 16π = <strong>4π ≈ 12.6 cm</strong>.</li>
<li>Sector area = (1/4) × π × 8² = (1/4) × 64π = <strong>16π ≈ 50.3 cm²</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Use 2πr for arc length (a length) and πr² for sector area (an area) — swapping them is a common slip. Also keep the angle on top of 360, not 180: a semicircle uses 180/360 = 1/2, not 1.</p>`
});
