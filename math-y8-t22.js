// math-y8-t22.js — Year 8 Maths Topic 22: Area, Perimeter & Volume
// Islands: m8i-22-1 .. m8i-22-5
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-22-1 — Area of Triangles & Quadrilaterals
  {id:"m8fc-22-1-1",islandId:"m8i-22-1",front:"State the formula for the area of a triangle.",
   back:"Area = ½ × base × height\n\nThe height must be perpendicular (at right angles) to the base.\nExample: base = 8 cm, height = 5 cm → Area = ½ × 8 × 5 = 20 cm².",difficulty:1,category:"definition"},
  {id:"m8fc-22-1-2",islandId:"m8i-22-1",front:"What is the formula for the area of a parallelogram?",
   back:"Area = base × height\n\nThe height is the perpendicular distance between the two parallel sides — NOT the slant side.\nExample: base = 9 cm, height = 4 cm → Area = 9 × 4 = 36 cm².",difficulty:1,category:"definition"},
  {id:"m8fc-22-1-3",islandId:"m8i-22-1",front:"State the formula for the area of a trapezium.",
   back:"Area = ½ × (a + b) × h\n\nwhere a and b are the lengths of the two parallel sides and h is the perpendicular height.\nExample: a = 5 cm, b = 9 cm, h = 4 cm → Area = ½ × (5 + 9) × 4 = ½ × 14 × 4 = 28 cm².",difficulty:2,category:"definition"},
  {id:"m8fc-22-1-4",islandId:"m8i-22-1",front:"How do you find the area of a rhombus using its diagonals?",
   back:"Area = ½ × d₁ × d₂\n\nwhere d₁ and d₂ are the lengths of the two diagonals.\nExample: d₁ = 10 cm, d₂ = 6 cm → Area = ½ × 10 × 6 = 30 cm².\nNote: This works because the diagonals of a rhombus bisect each other at right angles.",difficulty:2,category:"definition"},
  {id:"m8fc-22-1-5",islandId:"m8i-22-1",front:"A triangle has a base of 12 cm and a perpendicular height of 7 cm. What is its area?",
   back:"Area = 42 cm²\n\nWorking:\nArea = ½ × base × height\n= ½ × 12 × 7\n= ½ × 84\n= 42 cm²",difficulty:1,category:"calculation"},
  {id:"m8fc-22-1-6",islandId:"m8i-22-1",front:"A trapezium has parallel sides of 6 cm and 10 cm and a perpendicular height of 5 cm. Find its area.",
   back:"Area = 40 cm²\n\nWorking:\nArea = ½ × (a + b) × h\n= ½ × (6 + 10) × 5\n= ½ × 16 × 5\n= ½ × 80\n= 40 cm²",difficulty:2,category:"calculation"},

  // m8i-22-2 — Circles: Circumference & Area
  {id:"m8fc-22-2-1",islandId:"m8i-22-2",front:"State the formula for the circumference of a circle.",
   back:"C = πd  or equivalently  C = 2πr\n\nwhere d is the diameter and r is the radius.\nUsing π ≈ 3.142:\nExample: d = 10 cm → C = 3.142 × 10 = 31.42 cm.",difficulty:1,category:"definition"},
  {id:"m8fc-22-2-2",islandId:"m8i-22-2",front:"State the formula for the area of a circle.",
   back:"A = πr²\n\nwhere r is the radius. Using π ≈ 3.142:\nExample: r = 5 cm → A = 3.142 × 5² = 3.142 × 25 = 78.55 cm².",difficulty:1,category:"definition"},
  {id:"m8fc-22-2-3",islandId:"m8i-22-2",front:"A circle has a diameter of 14 cm. Calculate its circumference. (Use π ≈ 3.142)",
   back:"Circumference = 43.99 cm\n\nWorking:\nC = πd\n= 3.142 × 14\n= 43.988 cm\n≈ 43.99 cm (to 2 d.p.)",difficulty:2,category:"calculation"},
  {id:"m8fc-22-2-4",islandId:"m8i-22-2",front:"A circle has a radius of 6 cm. Calculate its area. (Use π ≈ 3.142)",
   back:"Area = 113.11 cm²\n\nWorking:\nA = πr²\n= 3.142 × 6²\n= 3.142 × 36\n= 113.112 cm²\n≈ 113.11 cm² (to 2 d.p.)",difficulty:2,category:"calculation"},
  {id:"m8fc-22-2-5",islandId:"m8i-22-2",front:"What fraction of a circle is a semicircle, and how do you find its area?",
   back:"A semicircle is half a circle.\n\nArea of semicircle = ½ × πr²\n\nExample: r = 4 cm → Area = ½ × 3.142 × 4² = ½ × 3.142 × 16 = ½ × 50.272 = 25.136 cm².\nTo find the perimeter of a semicircle, add the diameter: P = πr + 2r.",difficulty:2,category:"concept"},
  {id:"m8fc-22-2-6",islandId:"m8i-22-2",front:"What is the relationship between the radius and the diameter of a circle?",
   back:"d = 2r  (diameter = 2 × radius)\nor equivalently  r = d ÷ 2\n\nIf a question gives the diameter, halve it to get the radius before using A = πr².\nExample: d = 12 cm → r = 6 cm → A = 3.142 × 36 = 113.11 cm².",difficulty:1,category:"concept"},

  // m8i-22-3 — Compound Figures
  {id:"m8fc-22-3-1",islandId:"m8i-22-3",front:"What is a compound figure and how do you find its area?",
   back:"A compound (composite) figure is a shape made up of two or more simpler shapes.\n\nMethod:\n1. Split the compound figure into recognisable shapes (rectangles, triangles, semicircles, etc.).\n2. Find the area of each part separately.\n3. Add the areas together (or subtract if a piece is removed).",difficulty:1,category:"concept"},
  {id:"m8fc-22-3-2",islandId:"m8i-22-3",front:"An L-shaped figure can be split into two rectangles. One is 8 cm × 3 cm and the other is 4 cm × 5 cm. Find the total area.",
   back:"Total area = 44 cm²\n\nWorking:\nRectangle 1: 8 × 3 = 24 cm²\nRectangle 2: 4 × 5 = 20 cm²\nTotal: 24 + 20 = 44 cm²",difficulty:1,category:"calculation"},
  {id:"m8fc-22-3-3",islandId:"m8i-22-3",front:"A shape consists of a rectangle 10 cm × 6 cm with a semicircle of diameter 6 cm added to one end. Find the total area. (Use π ≈ 3.142)",
   back:"Total area = 74.14 cm²\n\nWorking:\nRectangle: 10 × 6 = 60 cm²\nSemicircle radius: 6 ÷ 2 = 3 cm\nSemicircle area: ½ × 3.142 × 3² = ½ × 3.142 × 9 = ½ × 28.278 = 14.139 cm²\nTotal: 60 + 14.139 ≈ 74.14 cm²",difficulty:2,category:"calculation"},
  {id:"m8fc-22-3-4",islandId:"m8i-22-3",front:"How do you find the area BETWEEN two shapes?",
   back:"Subtract the area of the inner shape from the area of the outer shape.\n\nArea between = Outer area − Inner area\n\nExample: A circle of radius 5 cm sits inside a square of side 10 cm.\nSquare area = 100 cm²\nCircle area = 3.142 × 25 = 78.55 cm²\nArea between = 100 − 78.55 = 21.45 cm²",difficulty:2,category:"application"},
  {id:"m8fc-22-3-5",islandId:"m8i-22-3",front:"When should you SUBTRACT rather than ADD areas in compound figure problems?",
   back:"Subtract when a shape has been REMOVED or CUT OUT from a larger shape.\n\nLook for phrases like:\n• 'a hole is cut out'\n• 'the shaded region around'\n• 'the area between'\n\nIn all other cases (shapes joined together), ADD the areas.",difficulty:2,category:"concept"},
  {id:"m8fc-22-3-6",islandId:"m8i-22-3",front:"A square of side 8 cm has a right-angled triangle cut from one corner. The triangle has base 3 cm and height 3 cm. Find the remaining area.",
   back:"Remaining area = 59.5 cm²\n\nWorking:\nSquare area: 8 × 8 = 64 cm²\nTriangle area: ½ × 3 × 3 = ½ × 9 = 4.5 cm²\nRemaining: 64 − 4.5 = 59.5 cm²",difficulty:2,category:"calculation"},

  // m8i-22-4 — Volume of 3D Shapes
  {id:"m8fc-22-4-1",islandId:"m8i-22-4",front:"State the formula for the volume of a cuboid.",
   back:"Volume = length × width × height\nV = l × w × h\n\nExample: l = 5 cm, w = 3 cm, h = 4 cm\nV = 5 × 3 × 4 = 60 cm³",difficulty:1,category:"definition"},
  {id:"m8fc-22-4-2",islandId:"m8i-22-4",front:"What is the general formula for the volume of any prism?",
   back:"Volume = Area of cross-section × length\nV = A × l\n\nThis works for ALL prisms (triangular, rectangular, hexagonal, etc.).\nFind the area of the face that runs all the way through (the cross-section), then multiply by the length.",difficulty:1,category:"definition"},
  {id:"m8fc-22-4-3",islandId:"m8i-22-4",front:"Find the volume of a triangular prism with a triangular cross-section of base 6 cm and height 4 cm, and a length of 10 cm.",
   back:"Volume = 120 cm³\n\nWorking:\nArea of triangle = ½ × 6 × 4 = 12 cm²\nVolume = 12 × 10 = 120 cm³",difficulty:2,category:"calculation"},
  {id:"m8fc-22-4-4",islandId:"m8i-22-4",front:"State the formula for the volume of a cylinder.",
   back:"Volume = πr² × h\nV = πr²h\n\nwhere r is the radius of the circular base and h is the height.\nUsing π ≈ 3.142:\nExample: r = 3 cm, h = 8 cm → V = 3.142 × 9 × 8 = 226.22 cm³",difficulty:2,category:"definition"},
  {id:"m8fc-22-4-5",islandId:"m8i-22-4",front:"A cylinder has radius 5 cm and height 12 cm. Calculate its volume. (Use π ≈ 3.142)",
   back:"Volume = 942.6 cm³\n\nWorking:\nV = πr²h\n= 3.142 × 5² × 12\n= 3.142 × 25 × 12\n= 3.142 × 300\n= 942.6 cm³",difficulty:2,category:"calculation"},
  {id:"m8fc-22-4-6",islandId:"m8i-22-4",front:"A cuboid has a volume of 120 cm³. Its length is 10 cm and its width is 4 cm. Find its height.",
   back:"Height = 3 cm\n\nWorking:\nV = l × w × h\n120 = 10 × 4 × h\n120 = 40 × h\nh = 120 ÷ 40 = 3 cm",difficulty:2,category:"application"},

  // m8i-22-5 — Surface Area & Scale Drawings
  {id:"m8fc-22-5-1",islandId:"m8i-22-5",front:"What is the surface area of a 3D shape?",
   back:"The surface area is the total area of all the faces of a 3D shape.\n\nMethod: sketch the net, calculate the area of each face, then add them all up.\nUnits are always square units (e.g. cm²).",difficulty:1,category:"definition"},
  {id:"m8fc-22-5-2",islandId:"m8i-22-5",front:"Find the surface area of a cuboid with length 5 cm, width 3 cm and height 4 cm.",
   back:"Surface area = 94 cm²\n\nWorking (3 pairs of faces):\n• Top &amp; bottom: 2 × (5 × 3) = 30 cm²\n• Front &amp; back: 2 × (5 × 4) = 40 cm²\n• Left &amp; right: 2 × (3 × 4) = 24 cm²\nTotal: 30 + 40 + 24 = 94 cm²",difficulty:2,category:"calculation"},
  {id:"m8fc-22-5-3",islandId:"m8i-22-5",front:"State the formula for the curved surface area of a cylinder.",
   back:"Curved Surface Area = 2πrh\n\nwhere r is the radius and h is the height.\nTo find the TOTAL surface area, add the two circular ends:\nTotal SA = 2πrh + 2πr²",difficulty:2,category:"definition"},
  {id:"m8fc-22-5-4",islandId:"m8i-22-5",front:"What is a scale drawing and what does a scale of 1 : 50 mean?",
   back:"A scale drawing is an accurate drawing where all lengths are reduced (or enlarged) by the same ratio.\n\nScale 1 : 50 means every 1 cm on the drawing represents 50 cm in real life.\nSo 3 cm on the drawing = 3 × 50 = 150 cm = 1.5 m in real life.",difficulty:1,category:"definition"},
  {id:"m8fc-22-5-5",islandId:"m8i-22-5",front:"On a scale drawing with scale 1 : 200, a room measures 4 cm long. What is the real length of the room?",
   back:"Real length = 800 cm = 8 m\n\nWorking:\nReal length = drawing length × scale factor\n= 4 × 200\n= 800 cm\n= 8 m",difficulty:2,category:"application"},
  {id:"m8fc-22-5-6",islandId:"m8i-22-5",front:"A real car is 360 cm long. On a scale drawing it is shown as 6 cm long. What is the scale?",
   back:"Scale = 1 : 60\n\nWorking:\nScale factor = real length ÷ drawing length\n= 360 ÷ 6\n= 60\nScale is 1 : 60 (each centimetre on the drawing represents 60 cm in real life).",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-22-1":[
    {q:"A triangle has a base of 10 cm and a perpendicular height of 8 cm. What is its area?",opts:["40 cm²","80 cm²","20 cm²","48 cm²"],c:0,e:"Area = ½ × base × height = ½ × 10 × 8 = 40 cm². Remember to halve the product for a triangle."},
    {q:"A parallelogram has a base of 7 cm and a perpendicular height of 5 cm. What is its area?",opts:["24 cm²","35 cm²","17.5 cm²","12 cm²"],c:1,e:"Area of parallelogram = base × height = 7 × 5 = 35 cm². Do not use the slant side — only the perpendicular height."},
    {q:"A trapezium has parallel sides of 4 cm and 8 cm and a perpendicular height of 6 cm. What is its area?",opts:["48 cm²","36 cm²","24 cm²","72 cm²"],c:1,e:"Area = ½ × (a + b) × h = ½ × (4 + 8) × 6 = ½ × 12 × 6 = ½ × 72 = 36 cm²."},
    {q:"A rhombus has diagonals of length 8 cm and 12 cm. What is its area?",opts:["96 cm²","20 cm²","48 cm²","192 cm²"],c:2,e:"Area = ½ × d₁ × d₂ = ½ × 8 × 12 = ½ × 96 = 48 cm²."},
    {q:"Which formula gives the area of a triangle?",opts:["base × height","2 × base × height","½ × base × height","¼ × base × height"],c:2,e:"The area of a triangle is ½ × base × height. The base and height must be perpendicular to each other."}
  ],
  "m8i-22-2":[
    {q:"A circle has a radius of 7 cm. Using π ≈ 3.142, what is its circumference?",opts:["21.99 cm","43.99 cm","153.94 cm","87.97 cm"],c:1,e:"Circumference = πd = 3.142 × 14 = 43.99 cm. First find the diameter: d = 2r = 2 × 7 = 14 cm."},
    {q:"A circle has a radius of 4 cm. Using π ≈ 3.142, what is its area?",opts:["12.57 cm²","50.27 cm²","25.14 cm²","100.54 cm²"],c:1,e:"Area = πr² = 3.142 × 4² = 3.142 × 16 = 50.27 cm²."},
    {q:"A semicircle has a diameter of 10 cm. Using π ≈ 3.142, what is its area?",opts:["78.55 cm²","39.28 cm²","157.10 cm²","15.71 cm²"],c:1,e:"Radius = 5 cm. Area of semicircle = ½ × πr² = ½ × 3.142 × 25 = ½ × 78.55 = 39.28 cm² (rounded)."},
    {q:"Which formula gives the circumference of a circle with diameter d?",opts:["πr²","2πr²","πd","2πd"],c:2,e:"Circumference = πd = π × diameter. Alternatively C = 2πr since d = 2r."},
    {q:"A circle has a diameter of 20 cm. Using π ≈ 3.142, what is its area?",opts:["62.84 cm²","1256.8 cm²","314.2 cm²","628.4 cm²"],c:2,e:"Radius = 10 cm. Area = πr² = 3.142 × 10² = 3.142 × 100 = 314.2 cm²."}
  ],
  "m8i-22-3":[
    {q:"A compound figure is made of a rectangle (6 cm × 4 cm) and a triangle (base 6 cm, height 3 cm). What is the total area?",opts:["48 cm²","33 cm²","27 cm²","36 cm²"],c:1,e:"Rectangle: 6 × 4 = 24 cm². Triangle: ½ × 6 × 3 = 9 cm². Total: 24 + 9 = 33 cm²."},
    {q:"A 10 cm × 10 cm square has a 4 cm × 4 cm square hole cut out of its centre. What is the remaining area?",opts:["84 cm²","96 cm²","64 cm²","116 cm²"],c:0,e:"Outer square: 10 × 10 = 100 cm². Inner square (removed): 4 × 4 = 16 cm². Remaining: 100 − 16 = 84 cm²."},
    {q:"A rectangle (12 cm × 5 cm) has a semicircle (diameter 5 cm) attached to one short end. Using π ≈ 3.142, what is the total area?",opts:["65.82 cm²","69.82 cm²","79.82 cm²","59.82 cm²"],c:1,e:"Rectangle: 12 × 5 = 60 cm². Semicircle radius = 2.5 cm: ½ × 3.142 × 2.5² = ½ × 3.142 × 6.25 = 9.819 cm². Total: 60 + 9.82 ≈ 69.82 cm²."},
    {q:"To find the area of a compound figure by splitting, which statement is correct?",opts:["Always subtract the smaller shape from the larger","Always add all parts together","Add parts that are joined, subtract parts that are cut out","Multiply the largest dimension by the smallest"],c:2,e:"If shapes are joined together, add their areas. If a shape is removed or cut out, subtract it from the whole."},
    {q:"A shape is made of two rectangles: 8 cm × 2 cm and 3 cm × 5 cm. What is the total area?",opts:["16 cm²","31 cm²","15 cm²","46 cm²"],c:1,e:"Rectangle 1: 8 × 2 = 16 cm². Rectangle 2: 3 × 5 = 15 cm². Total: 16 + 15 = 31 cm²."}
  ],
  "m8i-22-4":[
    {q:"A cuboid has length 6 cm, width 4 cm and height 3 cm. What is its volume?",opts:["36 cm³","72 cm³","48 cm³","54 cm³"],c:1,e:"Volume = l × w × h = 6 × 4 × 3 = 72 cm³."},
    {q:"A triangular prism has a triangular cross-section with area 15 cm² and a length of 8 cm. What is its volume?",opts:["23 cm³","120 cm³","60 cm³","30 cm³"],c:1,e:"Volume = cross-section area × length = 15 × 8 = 120 cm³."},
    {q:"A cylinder has radius 4 cm and height 10 cm. Using π ≈ 3.142, what is its volume?",opts:["125.68 cm³","502.72 cm³","251.36 cm³","1005.44 cm³"],c:1,e:"Volume = πr²h = 3.142 × 4² × 10 = 3.142 × 16 × 10 = 502.72 cm³."},
    {q:"A cuboid has volume 180 cm³, length 9 cm and width 5 cm. What is its height?",opts:["2 cm","3 cm","4 cm","5 cm"],c:2,e:"V = l × w × h → 180 = 9 × 5 × h = 45h → h = 180 ÷ 45 = 4 cm."},
    {q:"Which formula gives the volume of a cylinder?",opts:["2πrh","πr²h","πrh","πd²h"],c:1,e:"Volume of a cylinder = πr²h, where r is the radius of the circular base and h is the height (length)."}
  ],
  "m8i-22-5":[
    {q:"A cuboid has length 4 cm, width 3 cm and height 2 cm. What is its surface area?",opts:["24 cm²","52 cm²","26 cm²","48 cm²"],c:1,e:"SA = 2(lw + lh + wh) = 2(4×3 + 4×2 + 3×2) = 2(12 + 8 + 6) = 2 × 26 = 52 cm²."},
    {q:"On a scale drawing with scale 1 : 100, a wall is drawn as 5 cm long. What is the real length of the wall?",opts:["5 m","50 m","500 m","0.5 m"],c:0,e:"Real length = 5 × 100 = 500 cm = 5 m. Multiply the drawing length by the scale factor to get the real length."},
    {q:"A real table is 240 cm long. It is drawn 8 cm long on a plan. What is the scale?",opts:["1 : 20","1 : 30","1 : 24","1 : 40"],c:1,e:"Scale factor = 240 ÷ 8 = 30. The scale is 1 : 30."},
    {q:"A cylinder has radius 3 cm and height 7 cm. Using π ≈ 3.142, what is its curved surface area?",opts:["131.96 cm²","65.98 cm²","197.95 cm²","43.99 cm²"],c:0,e:"Curved SA = 2πrh = 2 × 3.142 × 3 × 7 = 2 × 3.142 × 21 = 131.96 cm² (rounded)."},
    {q:"On a map the scale is 1 : 50 000. Two towns are 6 cm apart on the map. What is the real distance?",opts:["3 km","30 km","300 km","0.3 km"],c:0,e:"Real distance = 6 × 50 000 = 300 000 cm = 3000 m = 3 km."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-22-1': `
<h2>Area of Triangles &amp; Quadrilaterals</h2>
<p>Area measures the amount of space enclosed inside a 2D shape. It is always measured in <strong>square units</strong> such as cm² or m². Knowing the correct formula for each shape — and understanding why it works — is the foundation of all area work in Year 8.</p>

<h3>Triangles</h3>
<p>A triangle is half a parallelogram, which is why we multiply by ½.</p>
<div class="example-box">
<p><strong>Formula:</strong> Area = ½ × base × height</p>
<p><strong>Example:</strong> base = 10 cm, height = 6 cm<br>
Area = ½ × 10 × 6 = <strong>30 cm²</strong></p>
<p>The height must be the <em>perpendicular</em> height — the shortest distance from the base to the opposite vertex. This is not the same as the slant side.</p>
</div>

<h3>Parallelograms</h3>
<p>A parallelogram can be rearranged into a rectangle, so its area is base × perpendicular height.</p>
<div class="example-box">
<p><strong>Formula:</strong> Area = base × height</p>
<p><strong>Example:</strong> base = 8 cm, perpendicular height = 5 cm<br>
Area = 8 × 5 = <strong>40 cm²</strong></p>
</div>

<h3>Trapeziums</h3>
<p>A trapezium has two parallel sides (usually called a and b) and a perpendicular height h between them.</p>
<div class="example-box">
<p><strong>Formula:</strong> Area = ½ × (a + b) × h</p>
<p><strong>Example:</strong> a = 5 cm, b = 11 cm, h = 4 cm<br>
Area = ½ × (5 + 11) × 4 = ½ × 16 × 4 = ½ × 64 = <strong>32 cm²</strong></p>
</div>

<h3>Rhombuses</h3>
<p>The diagonals of a rhombus bisect each other at right angles, creating four right-angled triangles inside.</p>
<div class="example-box">
<p><strong>Formula:</strong> Area = ½ × d₁ × d₂</p>
<p><strong>Example:</strong> diagonals 8 cm and 6 cm<br>
Area = ½ × 8 × 6 = <strong>24 cm²</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Area</dt><dd>The amount of 2D space enclosed by a shape, measured in square units (cm², m²).</dd>
<dt>Perpendicular height</dt><dd>The shortest distance between the base and the opposite side or vertex — always at right angles to the base.</dd>
<dt>Parallel sides</dt><dd>Two sides that never meet and are always the same distance apart (as in a trapezium or parallelogram).</dd>
<dt>Diagonal</dt><dd>A straight line from one vertex to a non-adjacent vertex.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using the slant height of a triangle or parallelogram instead of the perpendicular height — ✅ only the perpendicular (right-angle) height gives the correct area.</li>
<li>❌ Forgetting the ½ in the triangle formula — ✅ triangles are always half a parallelogram.</li>
<li>❌ Adding a and b before multiplying by ½ in the trapezium — ✅ follow the order: add first, then multiply by h, then halve.</li>
<li>❌ Leaving the area without units — ✅ always write cm², m², etc.</li>
</ul>`,

'm8i-22-2': `
<h2>Circles: Circumference &amp; Area</h2>
<p>A circle is a set of all points that are exactly the same distance (the <strong>radius</strong>) from a fixed central point. The special ratio π (pi) links a circle's diameter to its circumference. We use π ≈ 3.142 (to 3 d.p.) in all calculations unless told otherwise.</p>

<h3>Key parts of a circle</h3>
<p><strong>Radius (r)</strong> — from the centre to the edge.<br>
<strong>Diameter (d)</strong> — right across through the centre. d = 2r.<br>
<strong>Circumference (C)</strong> — the perimeter, the distance around the outside.<br>
<strong>π (pi)</strong> ≈ 3.142 — the ratio of circumference to diameter for ANY circle.</p>

<h3>Circumference</h3>
<div class="example-box">
<p><strong>Formula:</strong> C = πd &nbsp; (or equivalently C = 2πr)</p>
<p><strong>Example:</strong> d = 9 cm<br>
C = 3.142 × 9 = <strong>28.28 cm</strong></p>
</div>

<h3>Area</h3>
<div class="example-box">
<p><strong>Formula:</strong> A = πr²</p>
<p><strong>Example:</strong> r = 5 cm<br>
A = 3.142 × 5² = 3.142 × 25 = <strong>78.55 cm²</strong></p>
</div>

<h3>Semicircles and quarter circles</h3>
<p>For part-circles, find the full circle value then take the appropriate fraction.</p>
<div class="example-box">
<p><strong>Semicircle</strong> (half circle): Area = ½ × πr²</p>
<p><strong>Quarter circle</strong>: Area = ¼ × πr²</p>
<p><strong>Example — semicircle perimeter:</strong> diameter = 8 cm → r = 4 cm<br>
Straight edge = 8 cm<br>
Curved edge = ½ × πd = ½ × 3.142 × 8 = 12.57 cm<br>
Total perimeter = 8 + 12.57 = <strong>20.57 cm</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Radius (r)</dt><dd>Distance from the centre of a circle to its circumference.</dd>
<dt>Diameter (d)</dt><dd>Distance across a circle through its centre; d = 2r.</dd>
<dt>Circumference</dt><dd>The perimeter (distance around the outside) of a circle.</dd>
<dt>π (pi)</dt><dd>The constant ratio C ÷ d for any circle, approximately 3.142.</dd>
<dt>Semicircle</dt><dd>Exactly half a circle, formed by a diameter and the arc on one side.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using the diameter in A = πr² — ✅ halve the diameter to get r first, then square r.</li>
<li>❌ Using the radius in C = πd — ✅ double the radius to get d first, or use C = 2πr.</li>
<li>❌ Forgetting to halve (or quarter) the area for a semicircle or quarter circle — ✅ apply the fraction after calculating the full circle.</li>
<li>❌ Squaring π instead of r in the area formula — ✅ it is πr², meaning π × (r²), not (πr)².</li>
</ul>`,

'm8i-22-3': `
<h2>Compound Figures</h2>
<p>Most real-world shapes are not simple rectangles or triangles. A <strong>compound figure</strong> (also called a composite shape) is made by joining two or more simpler shapes together, or by removing a shape from a larger one. The key skill is deciding how to <em>split</em> the figure.</p>

<h3>Method: add areas</h3>
<p>When simpler shapes are joined together, split the compound figure along imaginary straight lines and find the area of each part.</p>
<div class="example-box">
<p><strong>Example:</strong> An L-shape can be split into two rectangles.<br>
Rectangle A: 8 cm × 3 cm = 24 cm²<br>
Rectangle B: 4 cm × 5 cm = 20 cm²<br>
Total area = 24 + 20 = <strong>44 cm²</strong></p>
</div>

<h3>Method: subtract areas</h3>
<p>When a shape has been cut out or removed, calculate the whole area then subtract the removed piece.</p>
<div class="example-box">
<p><strong>Example:</strong> A square of side 10 cm with a circular hole of radius 2 cm cut out. (π ≈ 3.142)<br>
Square: 10 × 10 = 100 cm²<br>
Circle: 3.142 × 2² = 3.142 × 4 = 12.57 cm²<br>
Remaining area = 100 − 12.57 = <strong>87.43 cm²</strong></p>
</div>

<h3>Mixed shapes: rectangles with semicircles</h3>
<div class="example-box">
<p><strong>Example:</strong> A running track is a rectangle 20 m × 8 m with a semicircle (r = 4 m) on each short end. (π ≈ 3.142)<br>
Rectangle area: 20 × 8 = 160 m²<br>
Two semicircles = one full circle: 3.142 × 4² = 50.27 m²<br>
Total: 160 + 50.27 = <strong>210.27 m²</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Compound figure</dt><dd>A 2D shape made by joining or removing simpler shapes.</dd>
<dt>Cross-section</dt><dd>The 2D shape obtained by cutting straight through a solid.</dd>
<dt>Area between shapes</dt><dd>The remaining area after one shape is removed from or placed inside another.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Splitting the shape incorrectly so some area is counted twice — ✅ draw clear dividing lines and label each region.</li>
<li>❌ Adding when you should subtract (or vice versa) — ✅ ask: is the missing piece joined on or cut out?</li>
<li>❌ Forgetting to work out a missing dimension before calculating — ✅ use given lengths to deduce any unmarked lengths first.</li>
<li>❌ Mixing up which part is the radius for a semicircle in a compound figure — ✅ the radius is half the diameter (the straight edge of the semicircle).</li>
</ul>`,

'm8i-22-4': `
<h2>Volume of 3D Shapes</h2>
<p><strong>Volume</strong> measures the amount of 3D space occupied by a solid. It is measured in <strong>cubic units</strong> such as cm³ or m³. The key idea for prisms (and cylinders) is: Volume = cross-section area × length.</p>

<h3>Cubes and cuboids</h3>
<div class="example-box">
<p><strong>Formula:</strong> V = l × w × h</p>
<p><strong>Example:</strong> l = 6 cm, w = 4 cm, h = 3 cm<br>
V = 6 × 4 × 3 = <strong>72 cm³</strong></p>
</div>

<h3>Prisms (general rule)</h3>
<p>A prism has a constant cross-section running all the way along its length.</p>
<div class="example-box">
<p><strong>Formula:</strong> V = area of cross-section × length</p>
<p><strong>Example — triangular prism:</strong><br>
Cross-section: triangle with base 5 cm and height 4 cm<br>
Area = ½ × 5 × 4 = 10 cm²<br>
Length of prism = 9 cm<br>
V = 10 × 9 = <strong>90 cm³</strong></p>
</div>

<h3>Cylinders</h3>
<p>A cylinder is a circular prism, so the same rule applies.</p>
<div class="example-box">
<p><strong>Formula:</strong> V = πr²h &nbsp; (using π ≈ 3.142)</p>
<p><strong>Example:</strong> r = 3 cm, h = 10 cm<br>
V = 3.142 × 3² × 10 = 3.142 × 9 × 10 = <strong>282.78 cm³</strong></p>
</div>

<h3>Finding a missing dimension</h3>
<div class="example-box">
<p><strong>Example:</strong> A cuboid has V = 168 cm³, l = 7 cm, w = 4 cm. Find h.<br>
168 = 7 × 4 × h = 28h<br>
h = 168 ÷ 28 = <strong>6 cm</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Volume</dt><dd>The amount of 3D space a solid occupies, measured in cubic units (cm³, m³).</dd>
<dt>Prism</dt><dd>A 3D shape with a constant cross-section along its length.</dd>
<dt>Cross-section</dt><dd>The identical 2D shape at each end of a prism.</dd>
<dt>Cylinder</dt><dd>A circular prism — its cross-section is a circle.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using cm² instead of cm³ for volume — ✅ volume is always in cubic units.</li>
<li>❌ Forgetting to find the area of the cross-section before multiplying by the length — ✅ work out the face area first.</li>
<li>❌ Using diameter instead of radius in V = πr²h — ✅ halve the diameter to get r before squaring.</li>
<li>❌ Mixing up which dimension is the length of the prism and which is part of the cross-section — ✅ identify the cross-section (the face that stays constant) first.</li>
</ul>`,

'm8i-22-5': `
<h2>Surface Area &amp; Scale Drawings</h2>
<p>Surface area is the total area of all the outer faces of a 3D shape. Scale drawings are accurate 2D representations where every dimension is reduced (or enlarged) by the same factor.</p>

<h3>Surface area of a cuboid</h3>
<p>A cuboid has 6 rectangular faces in 3 pairs.</p>
<div class="example-box">
<p><strong>Formula:</strong> SA = 2(lw + lh + wh)</p>
<p><strong>Example:</strong> l = 5 cm, w = 3 cm, h = 2 cm<br>
SA = 2(5×3 + 5×2 + 3×2) = 2(15 + 10 + 6) = 2 × 31 = <strong>62 cm²</strong></p>
</div>

<h3>Surface area of a cylinder</h3>
<p>A cylinder has one curved face and two circular ends.</p>
<div class="example-box">
<p><strong>Curved surface area:</strong> 2πrh<br>
<strong>Total surface area:</strong> 2πrh + 2πr²</p>
<p><strong>Example:</strong> r = 4 cm, h = 6 cm (π ≈ 3.142)<br>
Curved SA = 2 × 3.142 × 4 × 6 = 150.82 cm²<br>
Two circles = 2 × 3.142 × 16 = 100.54 cm²<br>
Total SA = 150.82 + 100.54 = <strong>251.36 cm²</strong></p>
</div>

<h3>Scale drawings</h3>
<p>A scale is written as 1 : n, meaning 1 unit on the drawing represents n units in real life.</p>
<div class="example-box">
<p><strong>Real length = drawing length × scale factor</strong><br>
<strong>Drawing length = real length ÷ scale factor</strong></p>
<p><strong>Example (scale 1 : 500):</strong><br>
Drawing shows a building 4 cm wide.<br>
Real width = 4 × 500 = 2000 cm = <strong>20 m</strong></p>
</div>

<h3>Finding the scale</h3>
<div class="example-box">
<p><strong>Example:</strong> A real garden is 1500 cm long. It is drawn as 5 cm.<br>
Scale factor = 1500 ÷ 5 = 300<br>
Scale = <strong>1 : 300</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Surface area</dt><dd>The total area of all the outer faces of a 3D shape, measured in square units.</dd>
<dt>Net</dt><dd>A flat 2D plan that folds up to make a 3D shape — useful for calculating surface area.</dd>
<dt>Scale drawing</dt><dd>An accurate drawing where all lengths are in a fixed ratio to the real object.</dd>
<dt>Scale factor</dt><dd>The number you multiply (or divide) drawing lengths by to get real lengths.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to include both circular ends when finding the total surface area of a cylinder — ✅ curved SA + 2 × circle area.</li>
<li>❌ Multiplying instead of dividing (or vice versa) when using a scale — ✅ to find real length, multiply drawing length by the scale factor.</li>
<li>❌ Working with inconsistent units in a scale problem — ✅ convert everything to the same unit (usually cm) before applying the scale.</li>
<li>❌ Giving surface area in cm³ — ✅ surface area is a 2D measurement, so the units are cm².</li>
</ul>`

});
