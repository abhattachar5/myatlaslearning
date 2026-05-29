// math-y8-t23.js — Year 8 Maths Topic 23: Transformations
// Islands: m8i-23-1 .. m8i-23-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-23-1 — Reflections & Translations
  {id:"m8fc-23-1-1",islandId:"m8i-23-1",front:"What is the rule for reflecting a point in the x-axis?",
   back:"(x, y) → (x, −y)\n\nThe x-coordinate stays the same; the y-coordinate changes sign.\nExample: (3, 5) reflected in the x-axis → (3, −5).",difficulty:1,category:"definition"},
  {id:"m8fc-23-1-2",islandId:"m8i-23-1",front:"What is the rule for reflecting a point in the y-axis?",
   back:"(x, y) → (−x, y)\n\nThe y-coordinate stays the same; the x-coordinate changes sign.\nExample: (4, −2) reflected in the y-axis → (−4, −2).",difficulty:1,category:"definition"},
  {id:"m8fc-23-1-3",islandId:"m8i-23-1",front:"Triangle A has vertices (1, 2), (3, 2) and (2, 5). Reflect it in the x-axis. Give the image vertices.",
   back:"Image vertices: (1, −2), (3, −2) and (2, −5).\n\nRule: (x, y) → (x, −y). Negate every y-coordinate; leave x unchanged.",difficulty:2,category:"calculation"},
  {id:"m8fc-23-1-4",islandId:"m8i-23-1",front:"Describe what a translation does to a shape.",
   back:"A translation slides a shape a fixed distance in a fixed direction without rotating or reflecting it.\nEvery point moves the same distance horizontally (a) and vertically (b).\nRule: (x, y) → (x + a, y + b).\nThe shape and image are congruent.",difficulty:1,category:"concept"},
  {id:"m8fc-23-1-5",islandId:"m8i-23-1",front:"Point P is at (−2, 3). It is translated by vector (5, −4). What are the image coordinates?",
   back:"P′ = (3, −1)\n\nAdd the vector components:\nx: −2 + 5 = 3\ny: 3 + (−4) = −1\nSo P′ = (3, −1).",difficulty:2,category:"calculation"},
  {id:"m8fc-23-1-6",islandId:"m8i-23-1",front:"A shape is reflected in the line y = x. What is the rule?",
   back:"(x, y) → (y, x)\n\nThe x- and y-coordinates are swapped.\nExample: (3, 7) → (7, 3).\nThe line y = x acts as a mirror; points equidistant on each side swap coordinates.",difficulty:3,category:"application"},

  // m8i-23-2 — Rotations
  {id:"m8fc-23-2-1",islandId:"m8i-23-2",front:"What is the rule for rotating a point 90° anticlockwise about the origin?",
   back:"(x, y) → (−y, x)\n\nExample: (4, 1) rotated 90° anticlockwise → (−1, 4).\nMemory tip: swap coordinates, then negate the new x.",difficulty:2,category:"definition"},
  {id:"m8fc-23-2-2",islandId:"m8i-23-2",front:"What is the rule for rotating a point 180° about the origin?",
   back:"(x, y) → (−x, −y)\n\nBoth coordinates change sign. It does not matter whether you rotate clockwise or anticlockwise — 180° is the same in both directions.\nExample: (3, −5) → (−3, 5).",difficulty:1,category:"definition"},
  {id:"m8fc-23-2-3",islandId:"m8i-23-2",front:"What is the rule for rotating a point 90° clockwise about the origin?",
   back:"(x, y) → (y, −x)\n\nExample: (2, 5) rotated 90° clockwise → (5, −2).\nNote: a 90° clockwise rotation gives the same image as a 270° anticlockwise rotation.",difficulty:2,category:"definition"},
  {id:"m8fc-23-2-4",islandId:"m8i-23-2",front:"Point Q = (−3, 4). Rotate it 180° about the origin. What are the image coordinates?",
   back:"Q′ = (3, −4)\n\nRule: (x, y) → (−x, −y)\n−3 → −(−3) = 3\n4 → −4\nSo Q′ = (3, −4).",difficulty:2,category:"calculation"},
  {id:"m8fc-23-2-5",islandId:"m8i-23-2",front:"A triangle has vertices (1, 0), (4, 0) and (4, 3). It is rotated 90° anticlockwise about the origin. Give the image vertices.",
   back:"Image: (0, 1), (0, 4) and (−3, 4).\n\nRule: (x, y) → (−y, x)\n(1, 0) → (0, 1)\n(4, 0) → (0, 4)\n(4, 3) → (−3, 4)",difficulty:3,category:"calculation"},
  {id:"m8fc-23-2-6",islandId:"m8i-23-2",front:"What information must you state when describing a rotation?",
   back:"You must state:\n1. The centre of rotation (e.g. the origin)\n2. The angle of rotation (e.g. 90°, 180°, 270°)\n3. The direction (clockwise or anticlockwise)\n\nWithout all three, the rotation is not fully described.",difficulty:2,category:"concept"},

  // m8i-23-3 — Dilations
  {id:"m8fc-23-3-1",islandId:"m8i-23-3",front:"What is a dilation (enlargement) on the coordinate plane?",
   back:"A dilation multiplies every coordinate by a scale factor k from a centre of enlargement.\nRule (centre at origin): (x, y) → (kx, ky).\nIf k > 1: enlargement. If 0 < k < 1: reduction.\nAngles are preserved; lengths are multiplied by k.",difficulty:1,category:"definition"},
  {id:"m8fc-23-3-2",islandId:"m8i-23-3",front:"Point A = (3, −2) is dilated by scale factor 4 from the origin. Find the image coordinates.",
   back:"A′ = (12, −8)\n\nMultiply each coordinate by 4:\nx: 3 × 4 = 12\ny: −2 × 4 = −8\nSo A′ = (12, −8).",difficulty:1,category:"calculation"},
  {id:"m8fc-23-3-3",islandId:"m8i-23-3",front:"A shape has vertices (6, 4), (6, 10) and (12, 4). It is dilated by scale factor ½ from the origin. Give the image vertices.",
   back:"Image: (3, 2), (3, 5) and (6, 2).\n\nMultiply each coordinate by ½:\n(6, 4) → (3, 2)\n(6, 10) → (3, 5)\n(12, 4) → (6, 2)\nThis is a reduction — the image is smaller.",difficulty:2,category:"calculation"},
  {id:"m8fc-23-3-4",islandId:"m8i-23-3",front:"How do you find the scale factor of a dilation given an object point and its image?",
   back:"Divide an image coordinate by the corresponding object coordinate:\nk = image coordinate ÷ object coordinate\n\nExample: Object (2, 5) → Image (6, 15).\nk = 6 ÷ 2 = 3 (or 15 ÷ 5 = 3).\nScale factor = 3.",difficulty:2,category:"application"},
  {id:"m8fc-23-3-5",islandId:"m8i-23-3",front:"What is the difference between an enlargement and a reduction in a dilation?",
   back:"Enlargement: scale factor k > 1 — the image is bigger than the object.\nReduction: 0 < k < 1 — the image is smaller than the object.\n\nBoth preserve shape (angles stay the same); only size changes.\nExample: k = 3 → enlargement; k = 0.5 → reduction.",difficulty:1,category:"concept"},
  {id:"m8fc-23-3-6",islandId:"m8i-23-3",front:"After a dilation with scale factor 3, a side of the image measures 18 cm. How long was the corresponding side of the object?",
   back:"Object side = 6 cm\n\nDivide the image length by the scale factor:\n18 ÷ 3 = 6 cm.\n\nAlternatively, set up the ratio:\nimage length / object length = scale factor\n18 / object = 3 → object = 18 ÷ 3 = 6.",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-23-1":[
    {q:"Point P = (−3, 7) is reflected in the x-axis. What are the image coordinates?",opts:["(3, 7)","(−3, −7)","(3, −7)","(−3, 7)"],c:1,e:"Reflecting in the x-axis uses the rule (x, y) → (x, −y). The x-coordinate −3 stays; 7 becomes −7. Image: (−3, −7)."},
    {q:"Which rule describes a reflection in the y-axis?",opts:["(x, y) → (x, −y)","(x, y) → (−x, −y)","(x, y) → (−x, y)","(x, y) → (y, x)"],c:2,e:"Reflecting in the y-axis changes the sign of the x-coordinate only: (x, y) → (−x, y)."},
    {q:"A point is translated by vector (−4, 3). It lands on (1, 5). What were the original coordinates?",opts:["(5, 2)","(−3, 8)","(5, 8)","(−3, 2)"],c:0,e:"Reverse the translation by subtracting the vector: x: 1 − (−4) = 5; y: 5 − 3 = 2. Original: (5, 2)."},
    {q:"Triangle vertices (0, 1), (2, 1), (1, 4) are translated by (3, −2). What is the image of (1, 4)?",opts:["(4, 2)","(−2, 6)","(4, 6)","(1, 2)"],c:0,e:"Add the vector: x: 1 + 3 = 4; y: 4 + (−2) = 2. Image of (1, 4) is (4, 2)."},
    {q:"A shape is reflected in the line y = x. Point (5, −3) maps to which image?",opts:["(−5, 3)","(5, 3)","(3, −5)","(−3, 5)"],c:3,e:"Reflecting in y = x swaps coordinates: (x, y) → (y, x). So (5, −3) → (−3, 5)."}
  ],
  "m8i-23-2":[
    {q:"Point (2, 5) is rotated 90° anticlockwise about the origin. What is the image?",opts:["(5, −2)","(−5, 2)","(2, −5)","(−2, −5)"],c:1,e:"Rule for 90° anticlockwise: (x, y) → (−y, x). So (2, 5) → (−5, 2)."},
    {q:"Point (−4, 3) is rotated 180° about the origin. What is the image?",opts:["(3, −4)","(4, −3)","(−3, 4)","(4, 3)"],c:1,e:"Rule for 180°: (x, y) → (−x, −y). (−4, 3) → (4, −3)."},
    {q:"What is the rule for a 90° clockwise rotation about the origin?",opts:["(x, y) → (−y, x)","(x, y) → (y, −x)","(x, y) → (−x, −y)","(x, y) → (−x, y)"],c:1,e:"A 90° clockwise rotation uses (x, y) → (y, −x). For example (3, 1) → (1, −3)."},
    {q:"Which rotation maps (6, 0) to (0, 6)?",opts:["90° clockwise","180°","90° anticlockwise","270° anticlockwise"],c:2,e:"Check 90° anticlockwise: (x, y) → (−y, x). (6, 0) → (0, 6) ✓. Clockwise gives (0, −6); 180° gives (−6, 0)."},
    {q:"Triangle vertices are (1, 1), (4, 1) and (1, 3). After a 180° rotation about the origin, what is the image of (4, 1)?",opts:["(−1, −4)","(1, −4)","(−4, −1)","(4, −1)"],c:2,e:"Rule: (x, y) → (−x, −y). (4, 1) → (−4, −1)."}
  ],
  "m8i-23-3":[
    {q:"Point B = (5, −3) is dilated by scale factor 2 from the origin. What are the image coordinates?",opts:["(10, −6)","(10, 6)","(2.5, −1.5)","(7, −1)"],c:0,e:"Multiply each coordinate by the scale factor: (5 × 2, −3 × 2) = (10, −6)."},
    {q:"A dilation maps (4, 8) to (1, 2). What is the scale factor?",opts:["4","0.25","2","0.5"],c:1,e:"Scale factor = image ÷ object = 1 ÷ 4 = 0.25 (or ¼). This is a reduction."},
    {q:"Which scale factor produces a reduction (image smaller than object)?",opts:["3","1","0.6","4"],c:2,e:"A reduction has 0 < k < 1. Only 0.6 is between 0 and 1. Scale factors greater than 1 give enlargements."},
    {q:"Triangle vertices (2, 4), (6, 4) and (2, 8) are dilated by scale factor 3 from the origin. What is the image of (6, 4)?",opts:["(18, 12)","(9, 7)","(2, 4)","(18, 4)"],c:0,e:"Multiply by 3: (6 × 3, 4 × 3) = (18, 12)."},
    {q:"After a dilation with scale factor ½, a side of the image is 7 cm. How long is the corresponding side of the original shape?",opts:["3.5 cm","14 cm","7 cm","0.5 cm"],c:1,e:"Image = k × object, so object = image ÷ k = 7 ÷ 0.5 = 14 cm."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-23-1': `
<h2>Reflections &amp; Translations</h2>
<p>Transformations move or resize shapes on the coordinate plane. <strong>Reflections</strong> flip a shape in a mirror line and <strong>translations</strong> slide it in a straight line. In both cases the shape and its image are <em>congruent</em> — same size and shape.</p>

<h3>Reflections</h3>
<p>When you reflect a shape, every point maps to an image point the same perpendicular distance from the mirror line, but on the opposite side.</p>

<div class="example-box">
<p><strong>Key reflection rules (coordinate plane):</strong></p>
<p>Reflect in the <strong>x-axis</strong>: (x, y) → (x, −y) — negate the y-coordinate.<br>
Reflect in the <strong>y-axis</strong>: (x, y) → (−x, y) — negate the x-coordinate.<br>
Reflect in <strong>y = x</strong>: (x, y) → (y, x) — swap the coordinates.</p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Reflect triangle with vertices A(2, 3), B(5, 3), C(5, 7) in the x-axis.</p>
<p><strong>Solution:</strong> Apply (x, y) → (x, −y):<br>
A(2, 3) → A′(2, −3)<br>
B(5, 3) → B′(5, −3)<br>
C(5, 7) → C′(5, −7)</p>
</div>

<h3>Translations</h3>
<p>A translation slides every point of a shape by the same vector <strong>(a, b)</strong> — <em>a</em> units horizontally and <em>b</em> units vertically.</p>
<p>Rule: (x, y) → (x + a, y + b)</p>
<p>Positive <em>a</em> moves right; negative <em>a</em> moves left. Positive <em>b</em> moves up; negative <em>b</em> moves down.</p>

<div class="example-box">
<p><strong>Example:</strong> Translate point P(−1, 4) by vector (6, −3).</p>
<p><strong>Solution:</strong><br>
x: −1 + 6 = 5<br>
y: 4 + (−3) = 1<br>
P′ = (5, 1)</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Reflection</dt><dd>A flip in a mirror line; each image point is the same distance from the line as the original.</dd>
<dt>Translation</dt><dd>A slide by a fixed vector (a, b) with no rotation or reflection.</dd>
<dt>Image</dt><dd>The new position of a shape after a transformation (labelled with a prime, e.g. A′).</dd>
<dt>Vector</dt><dd>A quantity with both magnitude and direction, written as (a, b) for translations.</dd>
<dt>Congruent</dt><dd>Identical in shape and size; reflections and translations produce congruent images.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Confusing x-axis and y-axis reflections — ✅ x-axis reflection negates y; y-axis reflection negates x.</li>
<li>❌ Moving only some vertices in a translation — ✅ add the vector to every vertex.</li>
<li>❌ Forgetting the sign when the vector has negative components — ✅ carefully add negative numbers.</li>
</ul>`,

'm8i-23-2': `
<h2>Rotations</h2>
<p>A <strong>rotation</strong> turns a shape through a given angle about a fixed point called the <strong>centre of rotation</strong>. On the coordinate plane, the most common centre is the origin (0, 0). The image is congruent to the object.</p>

<h3>Rotation rules about the origin</h3>
<div class="example-box">
<p><strong>90° anticlockwise:</strong> (x, y) → (−y, x)</p>
<p><strong>90° clockwise (= 270° anticlockwise):</strong> (x, y) → (y, −x)</p>
<p><strong>180° (either direction):</strong> (x, y) → (−x, −y)</p>
<p><strong>270° anticlockwise (= 90° clockwise):</strong> (x, y) → (y, −x)</p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Rotate triangle P(1, 0), Q(4, 0), R(4, 3) by 90° anticlockwise about the origin.</p>
<p><strong>Solution:</strong> Rule: (x, y) → (−y, x)<br>
P(1, 0) → P′(0, 1)<br>
Q(4, 0) → Q′(0, 4)<br>
R(4, 3) → R′(−3, 4)</p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Rotate point S(−3, 5) by 180° about the origin.</p>
<p><strong>Solution:</strong> Rule: (x, y) → (−x, −y)<br>
S(−3, 5) → S′(3, −5)</p>
</div>

<h3>Describing a rotation</h3>
<p>To fully describe a rotation you must give three pieces of information:</p>
<p><strong>1.</strong> The centre of rotation &nbsp; <strong>2.</strong> The angle of rotation &nbsp; <strong>3.</strong> The direction (clockwise or anticlockwise)</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Rotation</dt><dd>A turn of a shape through an angle about a fixed point.</dd>
<dt>Centre of rotation</dt><dd>The fixed point about which the shape is turned.</dd>
<dt>Anticlockwise</dt><dd>The direction opposite to clock hands (positive convention in maths).</dd>
<dt>Clockwise</dt><dd>The same direction as clock hands.</dd>
<dt>Image</dt><dd>The result of the transformation, written with a prime (A′, B′, etc.).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Mixing up the 90° clockwise and anticlockwise rules — ✅ anticlockwise: (x,y)→(−y,x); clockwise: (x,y)→(y,−x).</li>
<li>❌ Thinking 90° clockwise and 90° anticlockwise give the same image — ✅ they produce different images; only 180° is symmetric.</li>
<li>❌ Forgetting to state the direction when describing a rotation — ✅ always write clockwise or anticlockwise.</li>
</ul>`,

'm8i-23-3': `
<h2>Dilations (Enlargements)</h2>
<p>A <strong>dilation</strong> (called an <em>enlargement</em> in UK maths) multiplies every distance from the centre of enlargement by a <strong>scale factor</strong> k. The image has the same shape as the object (angles are preserved) but a different size.</p>

<h3>Dilation rule from the origin</h3>
<p>When the centre of dilation is the origin: <strong>(x, y) → (kx, ky)</strong></p>
<p>Multiply <em>every</em> coordinate by k.</p>

<div class="example-box">
<p><strong>Example (enlargement):</strong> Dilate triangle A(1, 2), B(3, 2), C(1, 5) by scale factor 3 from the origin.</p>
<p><strong>Solution:</strong><br>
A(1, 2) → A′(3, 6)<br>
B(3, 2) → B′(9, 6)<br>
C(1, 5) → C′(3, 15)</p>
</div>

<div class="example-box">
<p><strong>Example (reduction):</strong> Dilate point P(8, 4) by scale factor ¼ from the origin.</p>
<p><strong>Solution:</strong><br>
P(8, 4) → P′(2, 1)<br>
Since 0 &lt; k &lt; 1, the image is closer to the origin and smaller.</p>
</div>

<h3>Finding the scale factor</h3>
<p>If you know an object point and its image, divide any image coordinate by the corresponding object coordinate:</p>
<p><strong>k = image coordinate ÷ object coordinate</strong></p>

<div class="example-box">
<p><strong>Example:</strong> Object (4, 6) maps to image (10, 15). Find the scale factor.</p>
<p>k = 10 ÷ 4 = 2.5 &nbsp; (check: 15 ÷ 6 = 2.5 ✓). Scale factor = 2.5.</p>
</div>

<h3>Enlargement or reduction?</h3>
<p>k &gt; 1 → <strong>enlargement</strong> (image is bigger than object).<br>
0 &lt; k &lt; 1 → <strong>reduction</strong> (image is smaller than object).<br>
k = 1 → image is identical to object (no change in size).</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Dilation (Enlargement)</dt><dd>A transformation that scales a shape by a factor k from a centre of enlargement.</dd>
<dt>Scale factor (k)</dt><dd>The number by which every length is multiplied; k &gt; 1 enlarges, 0 &lt; k &lt; 1 reduces.</dd>
<dt>Centre of enlargement</dt><dd>The fixed point from which distances are multiplied.</dd>
<dt>Reduction</dt><dd>A dilation with scale factor between 0 and 1 that makes the shape smaller.</dd>
<dt>Similar</dt><dd>Same shape but different size; dilations always produce similar images.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding the scale factor instead of multiplying — ✅ multiply every coordinate: (kx, ky).</li>
<li>❌ Thinking a scale factor less than 1 makes a shape negative — ✅ fractions between 0 and 1 just make the image smaller.</li>
<li>❌ Confusing scale factor with the number of times bigger — ✅ k = 3 means the image is 3× the original length, not 3 units longer.</li>
</ul>`

});
