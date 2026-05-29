// math-y8-t21.js — Year 8 Maths Topic 21: 3D Figures
// Islands: m8i-21-1, m8i-21-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-21-1 — Bases & Nets of 3D Figures
  {id:"m8fc-21-1-1",islandId:"m8i-21-1",front:"How many faces, edges and vertices does a cube have?",
   back:"Faces: 6 (all squares)\nEdges: 12\nVertices: 8\n\nMemory check: use Euler's formula F + V − E = 2 → 6 + 8 − 12 = 2 ✓",difficulty:1,category:"definition"},
  {id:"m8fc-21-1-2",islandId:"m8i-21-1",front:"What is the base of a prism, and how does it differ from the base of a pyramid?",
   back:"PRISM: has two congruent, parallel bases (the cross-section that stays the same along the solid's length).\nPYRAMID: has exactly one base; the other faces are triangles meeting at an apex.\n\nExample: a triangular prism has two triangular bases; a triangular pyramid has one triangular base.",difficulty:2,category:"concept"},
  {id:"m8fc-21-1-3",islandId:"m8i-21-1",front:"What is a net of a 3D solid?",
   back:"A net is a flat (2D) shape that folds up exactly to make the 3D solid, with no gaps or overlaps.\n\nExample: the net of a cube consists of 6 squares arranged so that when folded each square becomes one face.",difficulty:1,category:"definition"},
  {id:"m8fc-21-1-4",islandId:"m8i-21-1",front:"How many different valid nets can a cube have?",
   back:"A cube has 11 distinct valid nets.\n\nEach net uses exactly 6 squares. Not every arrangement of 6 connected squares (hexomino) folds into a cube — only 11 of the 35 possible hexominoes are valid nets.",difficulty:2,category:"concept"},
  {id:"m8fc-21-1-5",islandId:"m8i-21-1",front:"A net has one rectangle and four triangles. What 3D solid does it form?",
   back:"A square-based pyramid — but wait: a rectangular base with four triangles forms a rectangular pyramid.\n\nCheck: the rectangle is the base; each triangle is a lateral face that meets at the apex.\nFaces: 1 base + 4 triangular faces = 5 faces in total.",difficulty:2,category:"application"},
  {id:"m8fc-21-1-6",islandId:"m8i-21-1",front:"Describe a quick test to check whether a flat arrangement of squares is a valid net of a cube.",
   back:"Mentally fold the net:\n1. Identify which square will be the base.\n2. Check that each adjacent square folds to a different face.\n3. Confirm no two squares will overlap once folded.\n4. Verify all 6 squares are present and connected edge-to-edge.\n\nA net with a row of 4 squares plus one on each side of the second square is always valid.",difficulty:3,category:"application"},

  // m8i-21-2 — Views & Base Plans
  {id:"m8fc-21-2-1",islandId:"m8i-21-2",front:"What are the three standard orthographic views of a 3D object?",
   back:"1. Front view (elevation) — looking directly at the front face.\n2. Side view (side elevation) — looking from the left or right.\n3. Top view (plan) — looking straight down from above.\n\nThese three views together describe the full shape of a 3D object.",difficulty:1,category:"definition"},
  {id:"m8fc-21-2-2",islandId:"m8i-21-2",front:"What does the top view (plan view) of a cuboid look like?",
   back:"A rectangle (or square if the cuboid is a cube).\n\nThe top view shows the width and depth of the object but gives no height information. Hidden edges are sometimes shown as dashed lines.",difficulty:1,category:"application"},
  {id:"m8fc-21-2-3",islandId:"m8i-21-2",front:"What is a base plan, and what information does it show?",
   back:"A base plan is a top-down grid diagram of a structure built from unit cubes.\nEach cell shows the NUMBER of cubes stacked in that column.\n\nExample: a 2×2 base plan with values 3, 1, 2, 2 tells you the exact height of each column so the 3D structure can be reconstructed.",difficulty:2,category:"definition"},
  {id:"m8fc-21-2-4",islandId:"m8i-21-2",front:"A cylinder is viewed from the front and from the top. Describe each view.",
   back:"Front view: a rectangle (width = diameter, height = height of the cylinder).\nTop view: a circle (showing the circular cross-section from above).\n\nNote: the side view is also a rectangle, identical to the front view.",difficulty:2,category:"application"},
  {id:"m8fc-21-2-5",islandId:"m8i-21-2",front:"A structure is made of unit cubes. The front view is an L-shape. What can you say about the structure?",
   back:"The front view tells you the outline seen from the front — it shows width and height only.\nAn L-shaped front view means the structure is taller on one side than the other.\n\nYou would still need the side view and top view (or a base plan) to know the depth and exact arrangement.",difficulty:3,category:"concept"},
  {id:"m8fc-21-2-6",islandId:"m8i-21-2",front:"Why are three views (front, side, top) needed to fully describe a 3D object?",
   back:"Each view captures only two dimensions:\n• Front view → width &amp; height\n• Side view → depth &amp; height\n• Top view → width &amp; depth\n\nNo single view gives all three dimensions. Together, the three views (orthographic projection) provide enough information to reconstruct the object uniquely.",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-21-1":[
    {q:"How many faces does a triangular prism have?",opts:["3","4","5","6"],c:2,e:"A triangular prism has 2 triangular bases and 3 rectangular lateral faces, giving 5 faces in total. F + V − E = 2 → 5 + 6 − 9 = 2 ✓"},
    {q:"Which of these shapes makes up the net of a cube?",opts:["6 rectangles","6 squares","5 squares and 1 rectangle","4 triangles and 1 square"],c:1,e:"A cube has 6 identical square faces, so its net consists of exactly 6 squares connected edge-to-edge."},
    {q:"A square-based pyramid has how many faces in total?",opts:["4","5","6","8"],c:1,e:"It has 1 square base and 4 triangular faces, giving 5 faces total. Vertices = 5, Edges = 8, check: 5 + 5 − 8 = 2 ✓"},
    {q:"Which of these flat arrangements of squares is NOT a valid net of a cube?",opts:["A cross shape (1 square in each arm)","A straight row of 6 squares","An L-shape with 4 in a row and 2 attached","A T-shape with 3 in a row and 3 on top of the middle"],c:1,e:"A straight row of all 6 squares cannot fold into a cube — opposite faces would overlap. All the other arrangements listed are valid nets."},
    {q:"The base of a pentagonal prism is a pentagon. How many edges does a pentagonal prism have?",opts:["10","12","15","20"],c:2,e:"A pentagonal prism has 2 pentagonal bases (5 edges each = 10) plus 5 lateral edges connecting them, giving 10 + 5 = 15 edges in total."}
  ],
  "m8i-21-2":[
    {q:"Which view of a cone always appears as a circle?",opts:["Front view","Side view","Top view","None of the views"],c:2,e:"Looking straight down at a cone from above, you see the circular base — so the top view (plan view) is a circle. The front and side views are both triangles."},
    {q:"A base plan for a structure made of unit cubes shows the numbers 2, 3, 1, 2 in a 2×2 grid. How many unit cubes are used in total?",opts:["4","6","8","9"],c:2,e:"Add all the values: 2 + 3 + 1 + 2 = 8 unit cubes in total."},
    {q:"The front view of a 3D object is a rectangle and the top view is also a rectangle. Which solid could this be?",opts:["Sphere","Cone","Cuboid","Square-based pyramid"],c:2,e:"A cuboid (rectangular prism) has rectangular front and top views. A sphere would give circles; a cone gives a triangle from the front; a pyramid gives a triangle from the front."},
    {q:"How many views are needed in standard orthographic projection to fully describe a 3D object?",opts:["1","2","3","4"],c:2,e:"Three views are needed: front, side and top. Each view captures two dimensions, and together the three views describe all three dimensions."},
    {q:"A unit-cube structure has a base plan where the tallest column is 4 cubes high. What does this mean for the front view?",opts:["The front view will be 4 units tall at its highest point","The front view will always be a 4×4 square","The top view will be 4 units wide","The structure must have exactly 4 columns"],c:0,e:"The height of the tallest column appears in the front (and possibly side) view as the maximum height. A column of 4 cubes means the front view reaches 4 units tall at that column's position."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-21-1': `
<h2>Bases &amp; Nets of 3D Figures</h2>
<p>3D figures (solids) have flat faces, straight edges and corners called vertices. Understanding the <strong>bases</strong> of different solids and being able to work with their <strong>nets</strong> are key skills for calculating surface area and visualising 3D shapes.</p>

<h3>Prisms and their bases</h3>
<p>A <strong>prism</strong> is a solid with two congruent, parallel bases joined by rectangular lateral faces. The base gives the prism its name.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Prism</th><th style="padding:8px;border:1px solid #ccc">Base shape</th><th style="padding:8px;border:1px solid #ccc">Faces</th><th style="padding:8px;border:1px solid #ccc">Edges</th><th style="padding:8px;border:1px solid #ccc">Vertices</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Triangular prism</td><td style="padding:8px;border:1px solid #ccc">Triangle</td><td style="padding:8px;border:1px solid #ccc">5</td><td style="padding:8px;border:1px solid #ccc">9</td><td style="padding:8px;border:1px solid #ccc">6</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Cuboid (rectangular prism)</td><td style="padding:8px;border:1px solid #ccc">Rectangle</td><td style="padding:8px;border:1px solid #ccc">6</td><td style="padding:8px;border:1px solid #ccc">12</td><td style="padding:8px;border:1px solid #ccc">8</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Pentagonal prism</td><td style="padding:8px;border:1px solid #ccc">Pentagon</td><td style="padding:8px;border:1px solid #ccc">7</td><td style="padding:8px;border:1px solid #ccc">15</td><td style="padding:8px;border:1px solid #ccc">10</td></tr>
</table>
<p>Use <strong>Euler's formula</strong> to verify: <strong>F + V − E = 2</strong> for any convex solid.</p>

<h3>Pyramids and their bases</h3>
<p>A <strong>pyramid</strong> has exactly one base; all other faces are triangles meeting at a single point called the <strong>apex</strong>. The base also names the pyramid.</p>
<div class="example-box">
<p><strong>Example:</strong> A square-based pyramid.</p>
<p>Base: 1 square &nbsp; Lateral faces: 4 triangles &nbsp; Total faces: 5<br>
Vertices: 5 (4 base corners + 1 apex) &nbsp; Edges: 8<br>
Check: 5 + 5 − 8 = 2 ✓</p>
</div>

<h3>Nets of 3D figures</h3>
<p>A <strong>net</strong> is a flat shape that folds up to make the solid exactly — all faces must be present, and no two faces must overlap once folded.</p>
<div class="example-box">
<p><strong>Example:</strong> Net of a cube.</p>
<p>A cube has 6 square faces. Its net contains exactly 6 squares joined edge-to-edge. There are 11 distinct valid nets of a cube — the most common is the cross or T-shape.<br>
Invalid nets include a straight row of 6 squares (opposite faces overlap when folded).</p>
</div>
<div class="example-box">
<p><strong>Example:</strong> Net of a triangular prism.</p>
<p>A triangular prism has 2 triangular faces and 3 rectangular faces. Its net shows: 2 triangles (the bases) and 3 rectangles (the lateral faces) arranged so that folding brings the triangles to the ends.</p>
</div>

<h3>Checking a net is valid</h3>
<p>To test a net mentally: pick one square/face as the bottom, then fold each connected face around it. Check that every face ends up on a different side and no face is used twice.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Face</dt><dd>A flat surface of a 3D solid.</dd>
<dt>Edge</dt><dd>A line where two faces of a solid meet.</dd>
<dt>Vertex (vertices)</dt><dd>A corner where edges meet.</dd>
<dt>Base</dt><dd>The face(s) that name the solid (two bases for prisms, one for pyramids).</dd>
<dt>Net</dt><dd>A 2D flat shape that folds to make a 3D solid.</dd>
<dt>Apex</dt><dd>The top vertex of a pyramid or cone.</dd>
<dt>Lateral face</dt><dd>Any face that is not a base.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Counting a straight row of 6 squares as a valid cube net — ✅ test by folding; opposite squares would overlap.</li>
<li>❌ Confusing the number of bases: prisms have 2, pyramids have 1 — ✅ remember "prism" has a consistent cross-section all the way through.</li>
<li>❌ Forgetting Euler's formula check — ✅ always verify F + V − E = 2 to spot counting errors.</li>
<li>❌ Naming the solid from the lateral faces instead of the base — ✅ a triangular prism has triangular bases, not triangular sides.</li>
</ul>`,

'm8i-21-2': `
<h2>Views &amp; Base Plans</h2>
<p>When engineers and architects describe a 3D object on paper, they use <strong>orthographic views</strong> — flat 2D drawings seen from specific directions. Reading and drawing these views is an essential skill in design, technology and mathematics.</p>

<h3>The three standard views</h3>
<p>Every 3D object can be described by three views:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">View</th><th style="padding:8px;border:1px solid #ccc">Direction of sight</th><th style="padding:8px;border:1px solid #ccc">Dimensions shown</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Front view (front elevation)</td><td style="padding:8px;border:1px solid #ccc">Straight at the front</td><td style="padding:8px;border:1px solid #ccc">Width &amp; Height</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Side view (side elevation)</td><td style="padding:8px;border:1px solid #ccc">From the left or right</td><td style="padding:8px;border:1px solid #ccc">Depth &amp; Height</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Top view (plan view)</td><td style="padding:8px;border:1px solid #ccc">Straight down from above</td><td style="padding:8px;border:1px solid #ccc">Width &amp; Depth</td></tr>
</table>
<p>Together, these three views capture all three dimensions and fully describe the shape.</p>

<h3>Views of common solids</h3>
<div class="example-box">
<p><strong>Cuboid:</strong></p>
<p>Front view → rectangle &nbsp; Side view → rectangle &nbsp; Top view → rectangle</p>
<p><strong>Cylinder:</strong></p>
<p>Front view → rectangle &nbsp; Side view → rectangle &nbsp; Top view → circle</p>
<p><strong>Cone:</strong></p>
<p>Front view → triangle (isosceles) &nbsp; Side view → triangle &nbsp; Top view → circle</p>
<p><strong>Sphere:</strong></p>
<p>All three views → circle</p>
</div>

<h3>Drawing views of unit-cube structures</h3>
<p>For structures built from unit cubes, draw each view on squared paper:</p>
<div class="example-box">
<p><strong>Example:</strong> A 2×2 base, with column heights 3, 2, 2, 1 (front-left, front-right, back-left, back-right).</p>
<p>Front view: draw the outline seen from the front — the left column is 3 units tall, the right is 2 units tall, giving an L-shape stepped profile.<br>
Top view: draw the 2×2 grid (shows the footprint).<br>
Side view: draw the outline seen from the left — heights 3 (front) and 2 (back).</p>
</div>

<h3>Base plans</h3>
<p>A <strong>base plan</strong> is a top-down grid where each cell contains a number showing how many unit cubes are stacked in that column. It contains the same information as all three views combined for unit-cube structures.</p>
<div class="example-box">
<p><strong>Example:</strong> Read this base plan:</p>
<p style="font-family:monospace;background:#f5f5f5;padding:8px;display:inline-block">
| 2 | 3 |<br>
| 1 | 2 |
</p>
<p>Total cubes: 2 + 3 + 1 + 2 = 8<br>
Tallest column: 3 (top-right) → front view reaches height 3.<br>
Front view (looking from below the plan): left column max = max(2,1) = 2; right column max = max(3,2) = 3.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Orthographic projection</dt><dd>Drawing 2D views of a 3D object from directly in front, from the side, and from above.</dd>
<dt>Front view (elevation)</dt><dd>The view seen looking directly at the front of the object.</dd>
<dt>Side view (side elevation)</dt><dd>The view seen looking from the left or right of the object.</dd>
<dt>Top view (plan)</dt><dd>The view seen looking straight down from above.</dd>
<dt>Base plan</dt><dd>A grid showing the number of unit cubes in each column of a 3D structure.</dd>
<dt>Hidden edge</dt><dd>An edge not visible from a given viewpoint, shown as a dashed line.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Drawing the top view of a cylinder as a rectangle — ✅ the top view of a cylinder is a circle (you are looking down at the circular cross-section).</li>
<li>❌ Using only the front view to describe a shape — ✅ three views are always needed; many different solids can share the same front view.</li>
<li>❌ Confusing depth and height in the side view — ✅ the side view shows depth (how far the object goes back) on the horizontal axis and height on the vertical axis.</li>
<li>❌ Forgetting to add hidden edges as dashed lines — ✅ edges hidden behind visible faces should be shown as dashed lines in formal drawings.</li>
</ul>`

});
