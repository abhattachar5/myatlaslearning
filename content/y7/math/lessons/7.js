// math-lessons-7.js — Lessons for Topics 26-28
Object.assign(LESSONS, {

'mi-26-1': {
  title: '3D Shape Properties',
  sections: [
    {
      heading: 'Key 3D Shapes',
      content: '<p>Three-dimensional shapes have <strong>faces</strong> (flat surfaces), <strong>edges</strong> (lines where faces meet), and <strong>vertices</strong> (corners where edges meet). Learn the counts for each shape — they come up constantly.</p><table style="border-collapse:collapse;width:100%;margin:0.75em 0;font-size:0.9em"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Shape</th><th style="border:1px solid #ccc;padding:8px">Faces (F)</th><th style="border:1px solid #ccc;padding:8px">Edges (E)</th><th style="border:1px solid #ccc;padding:8px">Vertices (V)</th><th style="border:1px solid #ccc;padding:8px">F+V−E</th></tr><tr><td style="border:1px solid #ccc;padding:8px">Cube</td><td style="border:1px solid #ccc;padding:8px;text-align:center">6</td><td style="border:1px solid #ccc;padding:8px;text-align:center">12</td><td style="border:1px solid #ccc;padding:8px;text-align:center">8</td><td style="border:1px solid #ccc;padding:8px;text-align:center;color:#2e7d32"><strong>2</strong></td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">Cuboid</td><td style="border:1px solid #ccc;padding:8px;text-align:center">6</td><td style="border:1px solid #ccc;padding:8px;text-align:center">12</td><td style="border:1px solid #ccc;padding:8px;text-align:center">8</td><td style="border:1px solid #ccc;padding:8px;text-align:center;color:#2e7d32"><strong>2</strong></td></tr><tr><td style="border:1px solid #ccc;padding:8px">Triangular prism</td><td style="border:1px solid #ccc;padding:8px;text-align:center">5</td><td style="border:1px solid #ccc;padding:8px;text-align:center">9</td><td style="border:1px solid #ccc;padding:8px;text-align:center">6</td><td style="border:1px solid #ccc;padding:8px;text-align:center;color:#2e7d32"><strong>2</strong></td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">Square pyramid</td><td style="border:1px solid #ccc;padding:8px;text-align:center">5</td><td style="border:1px solid #ccc;padding:8px;text-align:center">8</td><td style="border:1px solid #ccc;padding:8px;text-align:center">5</td><td style="border:1px solid #ccc;padding:8px;text-align:center;color:#2e7d32"><strong>2</strong></td></tr><tr><td style="border:1px solid #ccc;padding:8px">Tetrahedron</td><td style="border:1px solid #ccc;padding:8px;text-align:center">4</td><td style="border:1px solid #ccc;padding:8px;text-align:center">6</td><td style="border:1px solid #ccc;padding:8px;text-align:center">4</td><td style="border:1px solid #ccc;padding:8px;text-align:center;color:#2e7d32"><strong>2</strong></td></tr></table>'
    },
    {
      heading: "Euler's Formula",
      content: '<p>Notice the last column above always equals 2? That is no coincidence — it is <strong>Euler\'s Formula</strong>, which holds for every convex polyhedron.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center;font-size:1.1em"><strong>F + V = E + 2</strong></p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>Verify (cube):</strong><br>6 + 8 = 12 + 2<br>14 = 14 ✓</div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Find missing value:</strong><br>A shape has F=6, V=8.<br>6 + 8 = E + 2<br>E = <strong>12</strong></div></div><p>Euler\'s Formula works for any shape you can make from a sphere without cutting holes through it — called a "topological sphere".</p>'
    },
    {
      heading: 'Prisms vs Pyramids',
      content: '<p>These two families of shapes are often confused. The key difference is how many bases they have and what happens between them.</p><div class="lesson-diagram" data-diagram="y7-math-7-0"></div><p>Both are named after their base shape: a <em>hexagonal prism</em> has a hexagonal base; a <em>pentagonal pyramid</em> has a pentagonal base.</p>'
    }
  ]
},

'mi-26-2': {
  title: 'Nets of 3D Figures',
  sections: [
    {
      heading: 'What is a Net?',
      content: '<p>A <strong>net</strong> is the flat 2D pattern that can be folded up to form a 3D shape — like unboxing a cardboard shape and flattening it out. Every face of the 3D shape appears exactly once in the net.</p><p>Nets are useful for: understanding the faces of a 3D shape, calculating surface area, and making physical 3D models.</p><div class="lesson-diagram" data-diagram="y7-math-7-1"></div>'
    },
    {
      heading: 'Common Nets',
      content: '<table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">3D Shape</th><th style="padding:8px;border:1px solid #ccc">Net components</th><th style="padding:8px;border:1px solid #ccc">Note</th></tr><tr><td style="padding:8px;border:1px solid #ccc"><strong>Cube</strong></td><td style="padding:8px;border:1px solid #ccc">6 equal squares</td><td style="padding:8px;border:1px solid #ccc">11 possible valid nets</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc"><strong>Cuboid</strong></td><td style="padding:8px;border:1px solid #ccc">6 rectangles (2 of each of 3 sizes)</td><td style="padding:8px;border:1px solid #ccc">Opposite faces are identical</td></tr><tr><td style="padding:8px;border:1px solid #ccc"><strong>Triangular prism</strong></td><td style="padding:8px;border:1px solid #ccc">2 triangles + 3 rectangles</td><td style="padding:8px;border:1px solid #ccc">Rectangles connect the triangles</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc"><strong>Square pyramid</strong></td><td style="padding:8px;border:1px solid #ccc">1 square + 4 triangles</td><td style="padding:8px;border:1px solid #ccc">Triangles share edges with square</td></tr><tr><td style="padding:8px;border:1px solid #ccc"><strong>Cylinder</strong></td><td style="padding:8px;border:1px solid #ccc">2 circles + 1 rectangle</td><td style="padding:8px;border:1px solid #ccc">Rectangle width = circumference of circle</td></tr></table>'
    },
    {
      heading: 'Checking if a Net is Valid',
      content: '<p>Not every arrangement of faces folds into a valid 3D shape. Use this checklist:</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><ol style="margin:0;padding-left:1.3em"><li><strong>Count the faces</strong> — must match the 3D shape exactly.</li><li><strong>Mentally fold</strong> each face — no two faces should overlap when folded.</li><li><strong>Check opposite faces</strong> — do they end up correctly positioned?</li></ol></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Valid net ✓</strong><br>Faces connect correctly, no overlaps when folded, all faces accounted for</div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Invalid net ✗</strong><br>Two faces land on top of each other when folded, or a face is left disconnected</div></div>'
    }
  ]
},

'mi-26-3': {
  title: 'Front, Side & Top Views',
  sections: [
    {
      heading: 'Types of Views',
      content: '<p>Engineers and architects describe 3D shapes using three standard 2D views — together they give a complete description of a shape on flat paper.</p><div class="lesson-diagram" data-diagram="y7-math-7-2"></div><p>These three views together are called an <strong>orthographic projection</strong> — the standard drawing method used by architects and engineers worldwide.</p>'
    },
    {
      heading: 'Views of Common Shapes',
      content: '<table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Shape</th><th style="padding:7px;border:1px solid #ccc">Plan (top)</th><th style="padding:7px;border:1px solid #ccc">Front elevation</th><th style="padding:7px;border:1px solid #ccc">Side elevation</th></tr><tr><td style="padding:7px;border:1px solid #ccc">Cube</td><td style="padding:7px;border:1px solid #ccc">Square</td><td style="padding:7px;border:1px solid #ccc">Square</td><td style="padding:7px;border:1px solid #ccc">Square</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Cylinder</td><td style="padding:7px;border:1px solid #ccc">Circle</td><td style="padding:7px;border:1px solid #ccc">Rectangle</td><td style="padding:7px;border:1px solid #ccc">Rectangle</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Cone</td><td style="padding:7px;border:1px solid #ccc">Circle</td><td style="padding:7px;border:1px solid #ccc">Triangle</td><td style="padding:7px;border:1px solid #ccc">Triangle</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Square pyramid</td><td style="padding:7px;border:1px solid #ccc">Square + diagonals</td><td style="padding:7px;border:1px solid #ccc">Triangle</td><td style="padding:7px;border:1px solid #ccc">Triangle</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Triangular prism</td><td style="padding:7px;border:1px solid #ccc">Rectangle</td><td style="padding:7px;border:1px solid #ccc">Rectangle</td><td style="padding:7px;border:1px solid #ccc">Triangle</td></tr></table>'
    },
    {
      heading: 'Drawing 2D Views',
      content: '<p>When drawing a view of a 3D shape:</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><ul style="margin:0;padding-left:1.3em"><li>Draw only the <strong>visible outline</strong> from that direction as solid lines.</li><li>Use <strong>dashed lines</strong> for edges hidden behind the shape (important at higher levels).</li><li>Dimensions on a view match the actual dimensions of the shape in that direction — do not distort proportions.</li></ul></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> An L-shaped prism viewed from above gives an L-shaped plan view. From the front it may look like a simple rectangle — the step is only visible from the side or top. Always check all three views match.</div>'
    }
  ]
},

'mi-27-1': {
  title: 'Perimeter & Area of Polygons',
  sections: [
    {
      heading: 'Key Formulas',
      content: '<table style="border-collapse:collapse;width:100%;margin:0.75em 0;font-size:0.9em"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Shape</th><th style="border:1px solid #ccc;padding:8px">Area formula</th><th style="border:1px solid #ccc;padding:8px">Perimeter</th></tr><tr><td style="border:1px solid #ccc;padding:8px">Rectangle (l × w)</td><td style="border:1px solid #ccc;padding:8px"><strong>A = l × w</strong></td><td style="border:1px solid #ccc;padding:8px">2(l + w)</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">Square (side s)</td><td style="border:1px solid #ccc;padding:8px"><strong>A = s²</strong></td><td style="border:1px solid #ccc;padding:8px">4s</td></tr><tr><td style="border:1px solid #ccc;padding:8px">Triangle</td><td style="border:1px solid #ccc;padding:8px"><strong>A = ½ × base × height</strong></td><td style="border:1px solid #ccc;padding:8px">Sum of all sides</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">Parallelogram</td><td style="border:1px solid #ccc;padding:8px"><strong>A = base × height</strong></td><td style="border:1px solid #ccc;padding:8px">2(a + b)</td></tr></table><div class="lesson-diagram" data-diagram="y7-math-7-3"></div>'
    },
    {
      heading: 'Important Notes',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px;text-align:center"><strong>Area units</strong><br>Always <em>square</em> units<br>cm², m², mm²</div><div style="background:#e3f2fd;padding:10px;border-radius:8px;text-align:center"><strong>Perimeter units</strong><br>Linear units<br>cm, m, mm</div><div style="background:#fff3e0;padding:10px;border-radius:8px;text-align:center"><strong>Triangle height</strong><br>Must be <em>perpendicular</em> to the base — not the slant side</div></div><div style="background:#fce4ec;padding:1em;border-radius:8px;margin:0.5em 0"><strong>⚠️ Common mistake:</strong> For a triangle, the height is the perpendicular distance from the base to the opposite vertex — this is NOT always the same as one of the sides. Only in a right-angled triangle (when using one of the shorter sides as the base) are they equal.</div>'
    },
    {
      heading: 'Worked Example',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>Square with perimeter 36 cm:</strong><br>Side = 36 ÷ 4 = 9 cm<br>Area = 9² = <strong>81 cm²</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Triangle with base 10 cm and area 40 cm²:</strong><br>40 = ½ × 10 × h<br>40 = 5h<br>h = <strong>8 cm</strong></div></div><div style="background:#fff3e0;padding:10px;border-radius:8px;margin:0.5em 0"><strong>Find a missing side of a rectangle:</strong><br>Area = 72 cm², length = 9 cm.<br>Width = 72 ÷ 9 = <strong>8 cm</strong><br>Perimeter = 2(9 + 8) = <strong>34 cm</strong></div>'
    }
  ]
},

'mi-27-2': {
  title: 'Area of Trapeziums & Compound Figures',
  sections: [
    {
      heading: 'Trapezium Area',
      content: '<p>A <strong>trapezium</strong> has exactly one pair of parallel sides, labelled <em>a</em> (shorter) and <em>b</em> (longer), with a perpendicular height <em>h</em> between them.</p><div class="lesson-diagram" data-diagram="y7-math-7-4"></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Parallel sides 6 cm and 10 cm, height 4 cm.<br>A = ½(6 + 10) × 4 = ½ × 16 × 4 = <strong>32 cm²</strong></div><p><strong>Why this formula works:</strong> A trapezium is the average of two rectangles — one with width a and one with width b, both of height h. The "½(a + b)" is that average width.</p>'
    },
    {
      heading: 'Compound Figures',
      content: '<p>A <strong>compound figure</strong> is a shape built from two or more standard shapes joined together. Split it, calculate each part separately, then combine.</p><div class="lesson-diagram" data-diagram="y7-math-7-5"></div><p><strong>Method:</strong> (1) Split the shape into rectangles, triangles or other standard shapes. (2) Find each area. (3) Add them together — or subtract if a piece is cut away.</p>'
    },
    {
      heading: 'Area Between Shapes',
      content: '<p>When a smaller shape is removed from a larger one (like a window cut into a wall), find the remaining area by subtraction.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>Remaining area = Outer area − Inner area</strong></p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>Example:</strong> 5×5 cm square with 2×2 cm square cut from a corner.<br>Outer: 5×5 = 25 cm²<br>Inner: 2×2 = 4 cm²<br>Remaining = <strong>21 cm²</strong></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Example:</strong> Circular pond of radius 3 m in a 10×8 m garden.<br>Garden: 80 m²<br>Pond: π×3² ≈ 28.3 m²<br>Grass = <strong>≈ 51.7 m²</strong></div></div>'
    }
  ]
},

'mi-27-3': {
  title: 'Volume of Cubes & Cuboids',
  sections: [
    {
      heading: 'Volume Formula',
      content: '<p><strong>Volume</strong> measures the amount of space a 3D shape occupies. For cuboids and cubes, it is simply the product of the three dimensions.</p><div class="lesson-diagram" data-diagram="y7-math-7-6"></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Cube with side s:</strong> V = s³ &nbsp;&nbsp;|&nbsp;&nbsp; s = 5 cm: V = 5³ = <strong>125 cm³</strong><br>Volume is always in <strong>cubic units</strong>: cm³, m³, mm³</div>'
    },
    {
      heading: 'Converting Units',
      content: '<p>Volume unit conversions are often surprising — be careful not to confuse the linear conversion with the volume conversion.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Conversion</th><th style="padding:7px;border:1px solid #ccc">Reason</th></tr><tr><td style="padding:7px;border:1px solid #ccc">1 litre = 1,000 cm³</td><td style="padding:7px;border:1px solid #ccc">A 10×10×10 cm cube holds exactly 1 litre</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">1 ml = 1 cm³</td><td style="padding:7px;border:1px solid #ccc">Millilitres and cubic centimetres are the same</td></tr><tr><td style="padding:7px;border:1px solid #ccc">1 m³ = 1,000,000 cm³</td><td style="padding:7px;border:1px solid #ccc">100 × 100 × 100 = 1,000,000</td></tr></table><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.5em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px">9,000 cm³ → litres<br>9,000 ÷ 1,000 = <strong>9 litres</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px">2.5 litres → cm³<br>2.5 × 1,000 = <strong>2,500 cm³</strong></div></div>'
    },
    {
      heading: 'Finding Missing Dimensions',
      content: '<p>If you know the volume and two dimensions, rearrange V = lwh to find the third: divide the volume by the product of the two known dimensions.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>Find height:</strong><br>V = 120 cm³, l = 5, w = 4<br>h = 120 ÷ (5 × 4)<br>h = 120 ÷ 20 = <strong>6 cm</strong></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Find cube side from volume:</strong><br>V = 64 cm³<br>side = ∛64 = <strong>4 cm</strong><br>(because 4³ = 64)</div></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Real-life context:</strong> A fish tank holds 60 litres = 60,000 cm³. Its base is 50 cm × 40 cm. What water depth is needed to fill it?<br>h = 60,000 ÷ (50 × 40) = 60,000 ÷ 2,000 = <strong>30 cm</strong></div>'
    }
  ]
},

'mi-27-4': {
  title: 'Compare Area & Perimeter',
  sections: [
    {
      heading: 'Area vs Perimeter — What Are They?',
      content: '<p><strong>Area</strong> measures the surface inside a shape (in cm², m², etc.). <strong>Perimeter</strong> measures the total distance around the outside (in cm, m, etc.).</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px;text-align:center"><strong>Area</strong><br>Rectangle: A = l × w<br>Measured in <strong>square</strong> units</div><div style="background:#e3f2fd;padding:10px;border-radius:8px;text-align:center"><strong>Perimeter</strong><br>Rectangle: P = 2(l + w)<br>Measured in <strong>linear</strong> units</div></div><p>Two shapes can have the same area but different perimeters — or the same perimeter but different areas.</p>'
    },
    {
      heading: 'Same Perimeter, Different Area',
      content: '<p>Shapes that share the same perimeter do not always enclose the same area. Among all rectangles with a fixed perimeter, the <strong>square</strong> always has the largest area.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example — Perimeter 20 cm</strong><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.5em 0"><tr style="background:#c8e6c9"><th style="padding:6px;border:1px solid #ccc">Dimensions</th><th style="padding:6px;border:1px solid #ccc">Perimeter</th><th style="padding:6px;border:1px solid #ccc">Area</th></tr><tr><td style="padding:6px;border:1px solid #ccc">1 × 9</td><td style="padding:6px;border:1px solid #ccc">20 cm</td><td style="padding:6px;border:1px solid #ccc">9 cm²</td></tr><tr style="background:#f9f9f9"><td style="padding:6px;border:1px solid #ccc">3 × 7</td><td style="padding:6px;border:1px solid #ccc">20 cm</td><td style="padding:6px;border:1px solid #ccc">21 cm²</td></tr><tr><td style="padding:6px;border:1px solid #ccc">5 × 5</td><td style="padding:6px;border:1px solid #ccc">20 cm</td><td style="padding:6px;border:1px solid #ccc"><strong>25 cm²</strong> (max)</td></tr></table></div>'
    },
    {
      heading: 'Same Area, Different Perimeter',
      content: '<p>Two rectangles can share the same area yet have very different perimeters. Among all rectangles with a fixed area, the <strong>square</strong> (or shape closest to a square) has the smallest perimeter.</p><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example — Area 36 cm²</strong><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.5em 0"><tr style="background:#bbdefb"><th style="padding:6px;border:1px solid #ccc">Dimensions</th><th style="padding:6px;border:1px solid #ccc">Area</th><th style="padding:6px;border:1px solid #ccc">Perimeter</th></tr><tr><td style="padding:6px;border:1px solid #ccc">2 × 18</td><td style="padding:6px;border:1px solid #ccc">36 cm²</td><td style="padding:6px;border:1px solid #ccc">40 cm</td></tr><tr style="background:#f9f9f9"><td style="padding:6px;border:1px solid #ccc">4 × 9</td><td style="padding:6px;border:1px solid #ccc">36 cm²</td><td style="padding:6px;border:1px solid #ccc">26 cm</td></tr><tr><td style="padding:6px;border:1px solid #ccc">6 × 6</td><td style="padding:6px;border:1px solid #ccc">36 cm²</td><td style="padding:6px;border:1px solid #ccc"><strong>24 cm</strong> (min)</td></tr></table></div>'
    },
    {
      heading: 'Changing Dimensions',
      content: '<p>Understanding how area and perimeter respond when you change one dimension:</p><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><ul style="margin:0;padding-left:1.3em"><li><strong>Increase length, keep width fixed:</strong> both area and perimeter increase.</li><li><strong>Double both dimensions:</strong> perimeter doubles, but area quadruples (×4).</li><li><strong>Triple all sides:</strong> perimeter triples (×3), area × 9.</li></ul></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A 3 × 4 rectangle has area 12 and perimeter 14.<br>Doubled to 6 × 8: area = 48 (×4), perimeter = 28 (×2).</div>'
    }
  ]
},

'mi-28-1': {
  title: 'Balance a Budget',
  sections: [
    {
      heading: 'Income and Expenditure',
      content: '<p>A <strong>budget</strong> is a plan that sets out expected income and spending. Understanding the balance between the two is the foundation of all personal and business finance.</p><div class="lesson-diagram" data-diagram="y7-math-7-7"></div><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>Balance = Income − Expenditure</strong></p><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0;text-align:center;font-size:0.9em"><div style="background:#e8f5e9;padding:8px;border-radius:8px"><strong style="color:#2e7d32">Surplus</strong><br>Income &gt; Spending<br>Money left over</div><div style="background:#e3f2fd;padding:8px;border-radius:8px"><strong style="color:#1565c0">Balanced</strong><br>Income = Spending<br>Nothing left</div><div style="background:#fce4ec;padding:8px;border-radius:8px"><strong style="color:#c62828">Deficit</strong><br>Spending &gt; Income<br>Going into debt</div></div>'
    },
    {
      heading: 'Creating a Budget',
      content: '<p>Building a budget is a five-step process. The goal is to understand exactly where money comes from and where it goes.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><ol style="margin:0;padding-left:1.3em"><li>List all sources of income and add them up.</li><li>List all categories of spending and add them up.</li><li>Calculate: income − expenditure.</li><li>If positive (surplus) — money is available to save or invest.</li><li>If negative (deficit) — spending exceeds income; this is unsustainable.</li></ol></div>'
    },
    {
      heading: 'Worked Example',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><table style="border-collapse:collapse;width:100%;font-size:0.9em"><tr style="background:#c8e6c9"><th style="padding:6px;border:1px solid #ccc">Income</th><th style="padding:6px;border:1px solid #ccc">Amount</th></tr><tr><td style="padding:6px;border:1px solid #ccc">Monthly wage</td><td style="padding:6px;border:1px solid #ccc">£1,500</td></tr><tr style="background:#c8e6c9"><th style="padding:6px;border:1px solid #ccc">Expenditure</th><th style="padding:6px;border:1px solid #ccc">Amount</th></tr><tr><td style="padding:6px;border:1px solid #ccc">Rent</td><td style="padding:6px;border:1px solid #ccc">£600</td></tr><tr style="background:#f9f9f9"><td style="padding:6px;border:1px solid #ccc">Food</td><td style="padding:6px;border:1px solid #ccc">£200</td></tr><tr><td style="padding:6px;border:1px solid #ccc">Transport</td><td style="padding:6px;border:1px solid #ccc">£150</td></tr><tr style="background:#f9f9f9"><td style="padding:6px;border:1px solid #ccc">Other</td><td style="padding:6px;border:1px solid #ccc">£400</td></tr><tr style="background:#e8f5e9"><td style="padding:6px;border:1px solid #ccc;font-weight:bold">Total expenditure</td><td style="padding:6px;border:1px solid #ccc;font-weight:bold">£1,350</td></tr><tr style="background:#a5d6a7"><td style="padding:6px;border:1px solid #ccc;font-weight:bold">Balance (surplus)</td><td style="padding:6px;border:1px solid #ccc;font-weight:bold;color:#1b5e20">£150</td></tr></table></div><div style="background:#fce4ec;padding:1em;border-radius:8px;margin:0.5em 0">If expenses rose to £1,700: Balance = £1,500 − £1,700 = <strong>−£200 deficit</strong>. Spending must be reduced.</div>'
    }
  ]
},

'mi-28-2': {
  title: 'Debit & Credit Cards',
  sections: [
    {
      heading: 'Debit vs Credit Cards',
      content: '<p>Both types of card let you pay electronically — but they work very differently, with important consequences for personal finance.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc"></th><th style="padding:8px;border:1px solid #ccc;color:#1565c0">Debit card</th><th style="padding:8px;border:1px solid #ccc;color:#c62828">Credit card</th></tr><tr><td style="padding:8px;border:1px solid #ccc">Where does money come from?</td><td style="padding:8px;border:1px solid #ccc">Your own bank account</td><td style="padding:8px;border:1px solid #ccc">Borrowed from card company</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Can you overspend?</td><td style="padding:8px;border:1px solid #ccc">No (usually)</td><td style="padding:8px;border:1px solid #ccc">Yes — up to credit limit</td></tr><tr><td style="padding:8px;border:1px solid #ccc">Interest charged?</td><td style="padding:8px;border:1px solid #ccc">No</td><td style="padding:8px;border:1px solid #ccc">Yes, if not repaid in full</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Risk</td><td style="padding:8px;border:1px solid #ccc">Low</td><td style="padding:8px;border:1px solid #ccc">High if mismanaged</td></tr></table>'
    },
    {
      heading: 'Simple Interest',
      content: '<p>Simple interest is calculated only on the <em>original</em> amount borrowed or invested — it does not compound (grow on itself) each year.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>Interest = Principal × Rate × Time</strong> &nbsp; (I = PRT)</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Borrow £500 at 4% per year for 3 years.<br>I = 500 × 0.04 × 3 = £60<br>Total owed = £500 + £60 = <strong>£560</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Invest £1,200 at 3.5% simple interest. How long to earn £126 interest?<br>126 = 1200 × 0.035 × T → T = 126 ÷ 42 = <strong>3 years</strong></div>'
    },
    {
      heading: 'Responsible Borrowing',
      content: '<p>Credit cards can be powerful financial tools — but only when used carefully. The same features that make them useful can cause serious debt if mismanaged.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong style="color:#2e7d32">Used well ✓</strong><ul style="margin:0.4em 0;padding-left:1.2em;font-size:0.9em"><li>Large purchases spread over time</li><li>Emergency fund access</li><li>Building a credit history</li><li>Consumer protections on purchases</li></ul></div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong style="color:#c62828">Danger signs ✗</strong><ul style="margin:0.4em 0;padding-left:1.2em;font-size:0.9em"><li>Paying only the minimum each month</li><li>Spending more than you can repay</li><li>High interest rates compounding</li><li>Relying on it for everyday essentials</li></ul></div></div><p><strong>Best practice:</strong> Repay the full balance each month — this way you pay zero interest and still get all the benefits of using the card.</p>'
    }
  ]
},

'mi-28-3': {
  title: 'Adjust a Budget',
  sections: [
    {
      heading: 'Essential vs Non-Essential Spending',
      content: '<p>Before adjusting a budget, categorise every item of spending. This tells you where cuts are possible without affecting basic needs.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong style="color:#2e7d32">Essential (needs) ✓</strong><ul style="margin:0.4em 0;padding-left:1.2em;font-size:0.9em"><li>Rent / mortgage</li><li>Food and groceries</li><li>Utilities (gas, water, electricity)</li><li>Transport to work</li><li>Basic clothing</li></ul></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong style="color:#e65100">Non-essential (wants)</strong><ul style="margin:0.4em 0;padding-left:1.2em;font-size:0.9em"><li>Eating out / takeaways</li><li>Streaming subscriptions</li><li>Entertainment, hobbies</li><li>Luxury items</li><li>Holidays</li></ul></div></div><p>When reducing a deficit, <strong>always target non-essential spending first</strong> — reducing essentials could harm health or employment.</p>'
    },
    {
      heading: 'How to Adjust a Budget',
      content: '<p>Follow this systematic process whenever a budget is in deficit or a savings goal is set.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><ol style="margin:0;padding-left:1.3em"><li>List all expenses and label each as essential or non-essential.</li><li>Identify non-essential items that can be reduced or eliminated.</li><li>Alternatively, look for ways to increase income (extra shifts, selling items).</li><li>Recalculate the balance to confirm it is now in surplus or balanced.</li><li>Review the budget monthly — circumstances change.</li></ol></div>'
    },
    {
      heading: 'Savings Goals',
      content: '<p>Once a budget is balanced, surplus income can be directed towards a savings goal. Calculate the monthly saving required and check whether the current surplus covers it.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>Monthly saving needed = Total goal ÷ Number of months</strong></p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Save £600 in 6 months.<br>Monthly saving = £600 ÷ 6 = <strong>£100 per month</strong><br>If current surplus = £60, need to cut a further £40/month from spending.</div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Priority order for savings:</strong><ol style="margin:0.3em 0;padding-left:1.3em;font-size:0.9em"><li>Emergency fund (3–6 months of expenses)</li><li>Short-term goals (holiday, new phone)</li><li>Long-term savings (investment account, pension)</li></ol></div>'
    }
  ]
},

'mi-27-5': {
  title: 'Circles — Area & Circumference',
  sections: [
    {
      heading: 'Key Circle Vocabulary',
      content: '<p>Before calculating, make sure you know these terms:</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Radius (r)</strong> — distance from centre to edge</div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Diameter (d)</strong> — distance across through the centre<br>d = 2r</div></div><p><strong>π (pi)</strong> ≈ 3.14159... It is the ratio of every circle\'s circumference to its diameter. Use π ≈ 3.14 or the π button on your calculator.</p><div class="lesson-diagram" data-diagram="math-circle-parts"></div>'
    },
    {
      heading: 'Circumference',
      content: '<p>The <strong>circumference</strong> is the distance around the outside of a circle.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center;font-size:1.1em"><strong>C = πd</strong> &nbsp; or equivalently &nbsp; <strong>C = 2πr</strong></p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A circle has diameter 10 cm.<br>C = π × 10 = 10π ≈ <strong>31.4 cm</strong></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A circle has radius 7 cm.<br>C = 2 × π × 7 = 14π ≈ <strong>44.0 cm</strong> (1 d.p.)</div>'
    },
    {
      heading: 'Area',
      content: '<p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center;font-size:1.1em"><strong>A = πr²</strong></p><p>Always use the <strong>radius</strong>, not the diameter. If given the diameter, halve it first.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A circle has radius 5 cm.<br>A = π × 5² = 25π ≈ <strong>78.5 cm²</strong></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A circle has diameter 12 cm. Find the area.<br>r = 12 ÷ 2 = 6 cm<br>A = π × 6² = 36π ≈ <strong>113.1 cm²</strong></div>'
    },
    {
      heading: 'Semicircles & Quarter Circles',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Semicircle</strong><br>Area = πr² ÷ 2<br>Perimeter = πr + 2r<br><span style="font-size:0.85em;color:#555">(half circumference + diameter)</span></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Quarter circle</strong><br>Area = πr² ÷ 4<br>Perimeter = ½πr + 2r<br><span style="font-size:0.85em;color:#555">(quarter circumference + 2 radii)</span></div></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Find the area of a semicircle with diameter 8 cm.<br>r = 4 cm<br>Area = π × 4² ÷ 2 = 16π ÷ 2 = 8π ≈ <strong>25.1 cm²</strong></div>'
    },
    {
      heading: 'Common Mistakes',
      content: '<p>❌ Using the diameter in A = πr² — ✅ Always halve the diameter to get the radius first</p><p>❌ Forgetting the straight edge when finding the perimeter of a semicircle — ✅ Add the diameter to the curved part</p>'
    }
  ]
},

'mi-29-1': {
  title: 'Identify Right Triangles & the Hypotenuse',
  sections: [
    {
      heading: 'Right-Angled Triangles',
      content: '<p>A <strong>right-angled triangle</strong> has one angle that is exactly 90°. The small square symbol in the corner shows the right angle.</p><div class="lesson-diagram" data-diagram="y7-math-7-8"></div>'
    },
    {
      heading: 'The Hypotenuse',
      content: '<p>The <strong>hypotenuse</strong> is the <strong>longest side</strong> of a right-angled triangle. It is always the side <strong>opposite</strong> the right angle.</p><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>How to spot the hypotenuse:</strong><ul style="margin:0.4em 0;padding-left:1.2em"><li>Look for the right angle (the small square)</li><li>The side directly opposite it is the hypotenuse</li><li>It is always the longest of the three sides</li></ul></div>'
    },
    {
      heading: 'Labelling Sides',
      content: '<p>In Pythagoras\' theorem, we usually label the sides as:</p><table style="border-collapse:collapse;width:100%;margin:0.75em 0;font-size:0.9em"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Label</th><th style="padding:7px;border:1px solid #ccc">Meaning</th></tr><tr><td style="padding:7px;border:1px solid #ccc;font-weight:bold;color:#c62828">c</td><td style="padding:7px;border:1px solid #ccc">The hypotenuse (longest side, opposite the right angle)</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc;font-weight:bold">a and b</td><td style="padding:7px;border:1px solid #ccc">The two shorter sides (the legs)</td></tr></table><p>It does not matter which shorter side is a and which is b — the formula works either way.</p>'
    }
  ]
},

'mi-29-2': {
  title: 'Calculate the Hypotenuse',
  sections: [
    {
      heading: 'Pythagoras\' Theorem',
      content: '<p>For any right-angled triangle with hypotenuse c and shorter sides a and b:</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center;font-size:1.2em"><strong>a² + b² = c²</strong></p><p>To find the hypotenuse: square both shorter sides, add them, then take the square root.</p><div class="lesson-diagram" data-diagram="math-pythagoras"></div>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 1:</strong> a = 3, b = 4. Find c.<br>c² = 3² + 4² = 9 + 16 = 25<br>c = √25 = <strong>5</strong></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 2:</strong> a = 5, b = 12. Find c.<br>c² = 5² + 12² = 25 + 144 = 169<br>c = √169 = <strong>13</strong></div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 3:</strong> a = 6, b = 8. Find c.<br>c² = 6² + 8² = 36 + 64 = 100<br>c = √100 = <strong>10</strong></div>'
    },
    {
      heading: 'Pythagorean Triples',
      content: '<p>A <strong>Pythagorean triple</strong> is a set of three whole numbers that satisfy a² + b² = c². Learn these common ones:</p><table style="border-collapse:collapse;width:100%;margin:0.75em 0;font-size:0.9em"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Triple</th><th style="padding:7px;border:1px solid #ccc">Check</th></tr><tr><td style="padding:7px;border:1px solid #ccc">3, 4, 5</td><td style="padding:7px;border:1px solid #ccc">9 + 16 = 25 ✓</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">5, 12, 13</td><td style="padding:7px;border:1px solid #ccc">25 + 144 = 169 ✓</td></tr><tr><td style="padding:7px;border:1px solid #ccc">8, 15, 17</td><td style="padding:7px;border:1px solid #ccc">64 + 225 = 289 ✓</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">6, 8, 10</td><td style="padding:7px;border:1px solid #ccc">36 + 64 = 100 ✓ (3-4-5 × 2)</td></tr></table><p>Multiplying any triple by the same number gives another valid triple (e.g. 3-4-5 × 3 = 9-12-15).</p>'
    },
    {
      heading: 'Common Mistakes',
      content: '<p>❌ Forgetting to square root at the end — c² = 25 does not mean c = 25 → ✅ c = √25 = 5</p><p>❌ Adding before squaring — a + b ≠ √(a² + b²) → ✅ Always square each side first, then add</p>'
    }
  ]
},

'mi-29-3': {
  title: 'Calculate a Shorter Side',
  sections: [
    {
      heading: 'Rearranging the Formula',
      content: '<p>When you know the hypotenuse and one shorter side, rearrange Pythagoras\' theorem:</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center;font-size:1.1em"><strong>a² = c² − b²</strong> &nbsp; or &nbsp; <strong>b² = c² − a²</strong></p><p>This time you <strong>subtract</strong> the square of the known shorter side from the square of the hypotenuse.</p><div class="lesson-diagram" data-diagram="math-pythagoras"></div>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 1:</strong> c = 13, b = 5. Find a.<br>a² = 13² − 5² = 169 − 25 = 144<br>a = √144 = <strong>12</strong></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 2:</strong> c = 10, a = 6. Find b.<br>b² = 10² − 6² = 100 − 36 = 64<br>b = √64 = <strong>8</strong></div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 3:</strong> c = 17, a = 8. Find b.<br>b² = 17² − 8² = 289 − 64 = 225<br>b = √225 = <strong>15</strong></div>'
    },
    {
      heading: 'How to Tell Which Formula to Use',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Finding the hypotenuse?</strong><br>ADD the squares<br>c² = a² + b²</div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Finding a shorter side?</strong><br>SUBTRACT the squares<br>a² = c² − b²</div></div><p><strong>Tip:</strong> If the unknown side is the longest side (hypotenuse), you add. If the unknown is a shorter side, you subtract.</p>'
    },
    {
      heading: 'Common Mistakes',
      content: '<p>❌ Subtracting the wrong way round (a² − c²) — ✅ Always put the hypotenuse square first: c² − b²</p><p>❌ Confusing which side is the hypotenuse — ✅ The hypotenuse is always opposite the right angle and always the longest side</p>'
    }
  ]
}

});
