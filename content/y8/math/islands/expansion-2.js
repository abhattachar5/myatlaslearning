// math-y8-expansion-2.js — Year 8 Maths Expansion 2: Geometry & Statistics
// Islands: m8i-19-4 (Parallel Lines & Midpoints), m8i-23-4 (Column Vectors & Describing Transformations),
//          m8i-27-5 (Grouped Frequency & Estimated Mean), m8i-28-4 (Venn Diagrams & Two-Way Tables)
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for these islands.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-19-4 — Parallel Lines & Midpoints
  {id:"m8fc-19-4-1",islandId:"m8i-19-4",front:"How do you tell whether two lines are parallel from their equations?",
   back:"Two lines are parallel if they have the SAME gradient (the coefficient of x).\n\ny = 3x + 1 and y = 3x − 5 are parallel (both have gradient 3).\ny = 2x + 1 and y = 3x + 1 are NOT parallel (different gradients).\n\nParallel lines never meet and are always the same distance apart.",difficulty:1,category:"definition"},
  {id:"m8fc-19-4-2",islandId:"m8i-19-4",front:"What is the formula for the midpoint of two points (x₁, y₁) and (x₂, y₂)?",
   back:"Midpoint = ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2)\n\nAdd each pair of coordinates and halve them.\n\nExample: midpoint of (2, 3) and (8, 7)\n= ((2+8)/2, (3+7)/2) = (10/2, 10/2) = (5, 5)",difficulty:1,category:"definition"},
  {id:"m8fc-19-4-3",islandId:"m8i-19-4",front:"Find the midpoint of (−4, 6) and (2, −2).",
   back:"Midpoint = ((−4 + 2)/2, (6 + (−2))/2)\n= (−2/2, 4/2)\n= (−1, 2)\n\nStep 1: Add the x-values: −4 + 2 = −2, then halve: −1.\nStep 2: Add the y-values: 6 + (−2) = 4, then halve: 2.\nAnswer: (−1, 2)",difficulty:2,category:"calculation"},
  {id:"m8fc-19-4-4",islandId:"m8i-19-4",front:"Write the equation of the line parallel to y = 3x − 1 that passes through (0, 5).",
   back:"y = 3x + 5\n\nParallel lines share the same gradient, so use m = 3.\nThe line passes through (0, 5), so the y-intercept c = 5.\nEquation: y = 3x + 5\n\nGeneral method: keep the gradient, substitute the point to find c.",difficulty:2,category:"application"},
  {id:"m8fc-19-4-5",islandId:"m8i-19-4",front:"Are the lines y = 2x + 7 and 2y = 4x − 3 parallel?",
   back:"Yes, they are parallel.\n\nRearrange 2y = 4x − 3 → y = 2x − 1.5\nBoth lines have gradient 2 (same gradient).\nDifferent y-intercepts (7 and −1.5) confirm they are distinct parallel lines.",difficulty:2,category:"concept"},
  {id:"m8fc-19-4-6",islandId:"m8i-19-4",front:"M is the midpoint of AB. A = (1, 4) and M = (5, 7). Find B.",
   back:"B = (9, 10)\n\nIf M is the midpoint: ((1 + Bx)/2, (4 + By)/2) = (5, 7)\n(1 + Bx)/2 = 5 → 1 + Bx = 10 → Bx = 9\n(4 + By)/2 = 7 → 4 + By = 14 → By = 10\nB = (9, 10)",difficulty:3,category:"application"},

  // m8i-23-4 — Column Vectors & Describing Transformations
  {id:"m8fc-23-4-1",islandId:"m8i-23-4",front:"What does the column vector (3 over −2) mean?",
   back:"Move 3 units to the RIGHT and 2 units DOWN.\n\nA column vector is written as (a over b):\n• a = horizontal movement (positive = right, negative = left)\n• b = vertical movement (positive = up, negative = down)\n\nSo (3 over −2) means right 3, down 2.",difficulty:1,category:"definition"},
  {id:"m8fc-23-4-2",islandId:"m8i-23-4",front:"What four pieces of information must you give when describing a rotation fully?",
   back:"1. The transformation type: ROTATION\n2. The angle (e.g. 90°, 180°, 270°)\n3. The direction (clockwise or anticlockwise) — not needed for 180° as it is the same both ways\n4. The centre of rotation (as a coordinate)\n\nExample: Rotation 90° clockwise about (0, 0).",difficulty:2,category:"definition"},
  {id:"m8fc-23-4-3",islandId:"m8i-23-4",front:"What information is needed for a FULL description of a reflection?",
   back:"1. The transformation type: REFLECTION\n2. The equation of the mirror line\n\nExample: Reflection in the line y = x\n\nCommon mirror lines: y = 0 (x-axis), x = 0 (y-axis), y = x, y = −x, y = 3, x = −2.",difficulty:1,category:"definition"},
  {id:"m8fc-23-4-4",islandId:"m8i-23-4",front:"What information is needed for a FULL description of an enlargement?",
   back:"1. The transformation type: ENLARGEMENT\n2. The scale factor\n3. The centre of enlargement (as a coordinate)\n\nExample: Enlargement by scale factor 3 from centre (1, 2).\n\nIf scale factor is between 0 and 1 the shape gets smaller but it is still called an enlargement.",difficulty:2,category:"definition"},
  {id:"m8fc-23-4-5",islandId:"m8i-23-4",front:"Point P = (2, 5) is translated by vector (−3 over 4). What are the new coordinates?",
   back:"P' = (−1, 9)\n\nx-coordinate: 2 + (−3) = −1\ny-coordinate: 5 + 4 = 9\n\nA translation moves every point by the same vector, so just add the components.",difficulty:1,category:"calculation"},
  {id:"m8fc-23-4-6",islandId:"m8i-23-4",front:"Shape A is translated by (2 over 1) to give B, then B is translated by (−5 over 3) to give C. What single translation maps A to C?",
   back:"Single vector: (−3 over 4)\n\nCombine the two translations by adding the vectors:\n(2 over 1) + (−5 over 3) = (2+(−5) over 1+3) = (−3 over 4)\n\nSo A maps to C via translation (−3 over 4).",difficulty:3,category:"application"},

  // m8i-27-5 — Grouped Frequency & Estimated Mean
  {id:"m8fc-27-5-1",islandId:"m8i-27-5",front:"Why do we use the MIDPOINT of each class interval to estimate the mean?",
   back:"Because we do not know the exact values of the data within each class — we assume the values are spread evenly, so the midpoint is the best representative value.\n\nFor the class 10–20, the midpoint is (10+20)/2 = 15.\n\nThe estimated mean = Σ(midpoint × frequency) ÷ Σfrequency.",difficulty:2,category:"concept"},
  {id:"m8fc-27-5-2",islandId:"m8i-27-5",front:"What is the MODAL CLASS in a grouped frequency table?",
   back:"The modal class is the class interval with the HIGHEST frequency.\n\nExample:\n0–10: freq 4\n10–20: freq 6\n20–30: freq 10  ← highest\n30–40: freq 5\n\nModal class = 20–30",difficulty:1,category:"definition"},
  {id:"m8fc-27-5-3",islandId:"m8i-27-5",front:"How do you find the class containing the MEDIAN in a grouped frequency table?",
   back:"Step 1: Find the median position: (n+1)/2 where n = total frequency.\nStep 2: Add up cumulative frequencies until you reach that position.\n\nExample (n = 20): median position = 10.5th value.\nCumulative freq: 0–10: 4, 0–20: 10, 0–30: 20.\nThe 10.5th value lies in 20–30 (values 11 to 20 are in this class).",difficulty:2,category:"concept"},
  {id:"m8fc-27-5-4",islandId:"m8i-27-5",front:"Estimate the mean from: 0–10 (freq 4), 10–20 (freq 6), 20–30 (freq 10). Show full working.",
   back:"Midpoints: 5, 15, 25\nΣ(fx): (5×4) + (15×6) + (25×10) = 20 + 90 + 250 = 360\nΣf: 4 + 6 + 10 = 20\nEstimated mean = 360 ÷ 20 = 18\n\nAnswer: estimated mean ≈ 18",difficulty:2,category:"calculation"},
  {id:"m8fc-27-5-5",islandId:"m8i-27-5",front:"What is the midpoint of the class interval 30 ≤ x < 50?",
   back:"Midpoint = (30 + 50) ÷ 2 = 80 ÷ 2 = 40\n\nAlways add the two boundary values and halve them.\n\nFor 30 ≤ x < 50: lower boundary = 30, upper boundary = 50, midpoint = 40.",difficulty:1,category:"calculation"},
  {id:"m8fc-27-5-6",islandId:"m8i-27-5",front:"A grouped frequency table has classes 0–20, 20–40, 40–60 with frequencies 8, 14, 3. Which class contains the median?",
   back:"Class containing the median: 20–40\n\nTotal frequency n = 8 + 14 + 3 = 25\nMedian position = (25+1)/2 = 13th value\n\nCumulative frequencies:\n0–20: 8 (values 1–8)\n20–40: 8+14 = 22 (values 9–22) ← 13th value is here\n\nMedian class = 20–40",difficulty:3,category:"application"},

  // m8i-28-4 — Venn Diagrams & Two-Way Tables
  {id:"m8fc-28-4-1",islandId:"m8i-28-4",front:"In a Venn diagram with sets A and B, what does the INTERSECTION (A ∩ B) represent?",
   back:"A ∩ B is the OVERLAP — items that belong to BOTH set A and set B at the same time.\n\nP(A ∩ B) = number in the overlap ÷ total number\n\nOn the diagram it is the region where the two circles cross.",difficulty:1,category:"definition"},
  {id:"m8fc-28-4-2",islandId:"m8i-28-4",front:"What is the UNION (A ∪ B) in a Venn diagram?",
   back:"A ∪ B means everything in A OR B OR BOTH — the entire shaded area of both circles combined.\n\nP(A ∪ B) = (number in A only + number in B only + number in both) ÷ total\n\nOr using the addition rule: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",difficulty:2,category:"definition"},
  {id:"m8fc-28-4-3",islandId:"m8i-28-4",front:"30 students: 18 study French (F), 12 study Spanish (S), 7 study both. How many study neither?",
   back:"Neither = 7\n\nStep 1: Students in F only = 18 − 7 = 11\nStep 2: Students in S only = 12 − 7 = 5\nStep 3: Total in F or S or both = 11 + 5 + 7 = 23\nStep 4: Neither = 30 − 23 = 7\n\nCheck: 11 + 7 + 5 + 7 = 30 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-28-4-4",islandId:"m8i-28-4",front:"Using the Venn diagram from the previous card (F=18, S=12, both=7, total=30), find P(F ∩ S).",
   back:"P(F ∩ S) = 7/30\n\nThe intersection (both sets) contains 7 students.\nTotal = 30 students.\nP(F ∩ S) = 7 ÷ 30 = 7/30\n\n7 and 30 share no common factors, so 7/30 is already in its simplest form.",difficulty:2,category:"calculation"},
  {id:"m8fc-28-4-5",islandId:"m8i-28-4",front:"How do you fill in a two-way table when some cells are missing?",
   back:"Use the fact that every ROW and every COLUMN must sum to its total.\n\nStep 1: Fill in any cells you can calculate directly.\nStep 2: Use totals: (row total) − (known cells in row) = missing cell.\nStep 3: Check: the grand total (bottom-right) must equal the sum of all row totals AND all column totals.",difficulty:2,category:"concept"},
  {id:"m8fc-28-4-6",islandId:"m8i-28-4",front:"From a two-way table: 40 people, 15 male, 25 female; 18 prefer tea, 22 prefer coffee. 8 males prefer tea. Find P(female AND coffee).",
   back:"P(female AND coffee) = 17/40\n\nMales: tea=8, coffee=15−8=7\nFemales: tea=18−8=10, coffee=25−10=15... \n\nRecalculate: total tea=18, male tea=8 → female tea=10.\nTotal female=25 → female coffee=25−10=15.\nWait: check total coffee=22: male coffee=7, female coffee=15 → 7+15=22 ✓\n\nP(female AND coffee) = 15/40 = 3/8",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-19-4":[
    {q:"Which pair of lines are parallel?",opts:["y = 2x + 3 and y = 3x + 2","y = 4x − 1 and y = 4x + 7","y = x + 5 and y = 2x + 5","y = 3x and y = x + 3"],c:1,e:"Parallel lines have equal gradients. y = 4x − 1 and y = 4x + 7 both have gradient 4, so they are parallel."},
    {q:"What is the midpoint of (2, 3) and (8, 7)?",opts:["(10, 10)","(6, 4)","(5, 5)","(3, 2)"],c:2,e:"Midpoint = ((2+8)/2, (3+7)/2) = (10/2, 10/2) = (5, 5)."},
    {q:"What is the equation of the line parallel to y = 3x − 1 passing through (0, 5)?",opts:["y = 5x + 3","y = 3x − 5","y = 3x + 5","y = −3x + 5"],c:2,e:"Parallel lines share the same gradient (3). The line passes through (0, 5) so the y-intercept is 5. Equation: y = 3x + 5."},
    {q:"M is the midpoint of PQ. P = (0, 2) and M = (3, 5). Find Q.",opts:["(6, 8)","(1.5, 3.5)","(3, 3)","(6, 7)"],c:0,e:"(0+Qx)/2 = 3 → Qx = 6. (2+Qy)/2 = 5 → Qy = 8. Q = (6, 8)."},
    {q:"Which line is parallel to y = −2x + 4?",opts:["y = 2x + 4","y = −2x − 7","y = 4x − 2","2y = −x + 4"],c:1,e:"y = −2x − 7 has gradient −2, the same as y = −2x + 4. The y-intercepts differ (−7 ≠ 4), confirming they are distinct parallel lines."}
  ],
  "m8i-23-4":[
    {q:"A point at (3, 1) is translated by the vector (−2 over 5). What are the new coordinates?",opts:["(1, 6)","(5, −4)","(−2, 5)","(1, −4)"],c:0,e:"New x = 3 + (−2) = 1. New y = 1 + 5 = 6. New coordinates: (1, 6)."},
    {q:"Which is the FULL description of a rotation?",opts:["Rotation 90°","Rotation 90° clockwise","Rotation 90° clockwise about (0, 0)","Rotation about the origin"],c:2,e:"A full description of a rotation requires: type (rotation), angle (90°), direction (clockwise) and centre of rotation (0, 0)."},
    {q:"Shape A is reflected. The full description is: 'Reflection in y = x'. What additional information would be needed if the mirror line were not given?",opts:["The scale factor","The equation of the mirror line","The centre of reflection","The angle of reflection"],c:1,e:"For a reflection the two required pieces of information are: the type (reflection) and the equation of the mirror line."},
    {q:"Shape A is translated by (4 over −1) then by (−6 over 3). What single vector maps A to its final position?",opts:["(10 over −4)","(−2 over 2)","(2 over −4)","(−2 over −4)"],c:1,e:"Add the vectors: (4+(−6), −1+3) = (−2, 2). Single translation: (−2 over 2)."},
    {q:"Which description fully describes an enlargement?",opts:["Enlargement, scale factor 2","Enlargement of scale factor 2 about (3, 1)","Enlargement by 2 times","Enlargement, centre (3, 1)"],c:1,e:"An enlargement requires: type (enlargement), scale factor and centre of enlargement. Only option B gives all three."}
  ],
  "m8i-27-5":[
    {q:"A grouped frequency table has classes 0–10 (f=4), 10–20 (f=6), 20–30 (f=10). What is the modal class?",opts:["0–10","10–20","20–30","Cannot be determined"],c:2,e:"The modal class is the class with the highest frequency. 20–30 has frequency 10, which is the highest."},
    {q:"Using classes 0–10 (f=4), 10–20 (f=6), 20–30 (f=10), estimate the mean.",opts:["15","18","20","16"],c:1,e:"Midpoints: 5, 15, 25. Σ(fx) = 5×4 + 15×6 + 25×10 = 20 + 90 + 250 = 360. Σf = 20. Mean = 360 ÷ 20 = 18."},
    {q:"What is the midpoint of the class interval 20 ≤ t < 40?",opts:["20","25","30","40"],c:2,e:"Midpoint = (20 + 40) ÷ 2 = 60 ÷ 2 = 30."},
    {q:"A table has classes 0–20 (f=8), 20–40 (f=14), 40–60 (f=3). Total = 25. Which class contains the median?",opts:["0–20","20–40","40–60","Cannot tell"],c:1,e:"Median position = (25+1)/2 = 13th value. Cumulative freq: 0–20: 8 (values 1–8); 20–40: 22 (values 9–22). The 13th value falls in 20–40."},
    {q:"Why can we only ESTIMATE the mean from a grouped frequency table?",opts:["Because the frequencies are wrong","Because we use midpoints instead of exact values","Because grouped tables have too many classes","Because the mean is always a decimal"],c:1,e:"We do not know the individual data values within each class, so we use the midpoint as a representative value. This gives an estimate, not an exact mean."}
  ],
  "m8i-28-4":[
    {q:"In a Venn diagram, 40 students: 22 like football (F), 18 like rugby (R), 9 like both. How many like neither?",opts:["9","31","40","5"],c:0,e:"F only = 22−9=13. R only = 18−9=9. In at least one = 13+9+9=31. Neither = 40−31=9."},
    {q:"Using the same Venn diagram (total 40, both 9), what is P(F ∩ R)?",opts:["9/40","31/40","18/40","9/31"],c:0,e:"P(F ∩ R) = number in both ÷ total = 9 ÷ 40 = 9/40."},
    {q:"In a two-way table: 50 students, 30 boys and 20 girls; 35 walk to school. 20 boys walk. How many girls walk?",opts:["10","15","20","5"],c:1,e:"Total walkers = 35. Boys who walk = 20. Girls who walk = 35 − 20 = 15."},
    {q:"Sets A and B: P(A) = 1/2, P(B) = 1/3, P(A ∩ B) = 1/6. Find P(A ∪ B).",opts:["5/6","1/6","2/3","1"],c:2,e:"P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 1/2 + 1/3 − 1/6 = 3/6 + 2/6 − 1/6 = 4/6 = 2/3."},
    {q:"A Venn diagram has ξ = 20. Set A has 12 members, set B has 8, A ∩ B has 4. How many are in A only?",opts:["4","8","12","16"],c:1,e:"A only = (members of A) − (members of A ∩ B) = 12 − 4 = 8."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-19-4': `
<h2>Parallel Lines &amp; Midpoints</h2>
<p>A straight line in the form <strong>y = mx + c</strong> has gradient <em>m</em> and y-intercept <em>c</em>. Two key skills here are spotting parallel lines from their equations and finding the midpoint of a line segment.</p>

<h3>Parallel lines</h3>
<p>Two lines are <strong>parallel</strong> if and only if they have the <strong>same gradient</strong>. They will never intersect.</p>
<div class="example-box">
<p><strong>Example:</strong> Are y = 4x − 1 and y = 4x + 7 parallel?</p>
<p>Both have gradient 4. Yes — they are parallel.<br>
Are y = 2x + 3 and y = 3x + 2 parallel? Gradients 2 ≠ 3 — not parallel.</p>
</div>
<p>If an equation is not in the form y = mx + c, rearrange it first. E.g. 2y = 4x − 3 → y = 2x − 1.5 (gradient 2).</p>

<h3>Midpoint of a line segment</h3>
<p>The midpoint is halfway between two points. <strong>Add each pair of coordinates and halve.</strong></p>
<div class="example-box">
<p><strong>Formula:</strong> Midpoint of (x₁, y₁) and (x₂, y₂) = ((x₁+x₂)/2, (y₁+y₂)/2)</p>
<p><strong>Example:</strong> Midpoint of (2, 3) and (8, 7).<br>
x: (2+8)/2 = 5 &nbsp;&nbsp; y: (3+7)/2 = 5<br>
Midpoint = <strong>(5, 5)</strong></p>
</div>

<h3>Writing the equation of a parallel line</h3>
<div class="example-box">
<p><strong>Example:</strong> Find the line parallel to y = 3x − 1 through (0, 5).</p>
<p>Step 1: Same gradient → m = 3<br>
Step 2: Through (0, 5) → y-intercept c = 5<br>
Equation: <strong>y = 3x + 5</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Gradient</dt><dd>The steepness of a line; the coefficient of x in y = mx + c.</dd>
<dt>Parallel</dt><dd>Lines that have the same gradient and never meet.</dd>
<dt>Midpoint</dt><dd>The point exactly halfway along a line segment.</dd>
<dt>y-intercept</dt><dd>The value of c in y = mx + c; where the line crosses the y-axis.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking lines with the same y-intercept are parallel — ✅ it is equal GRADIENTS that make lines parallel.</li>
<li>❌ Adding coordinates instead of averaging — ✅ always divide by 2 after adding each pair.</li>
<li>❌ Forgetting to rearrange before comparing gradients — ✅ rewrite as y = mx + c first.</li>
</ul>`,

'm8i-23-4': `
<h2>Column Vectors &amp; Describing Transformations</h2>
<p>A <strong>transformation</strong> changes the position, size or orientation of a shape. You must be able to perform and <strong>fully describe</strong> each type using precise mathematical language.</p>

<h3>Column vector notation</h3>
<p>A translation is described by a column vector (a over b) where <strong>a</strong> is the horizontal movement (right positive) and <strong>b</strong> is the vertical movement (up positive).</p>
<div class="example-box">
<p><strong>Example:</strong> Translate point (3, 1) by vector (−2 over 5).<br>
New x = 3 + (−2) = 1 &nbsp;&nbsp; New y = 1 + 5 = 6<br>
Image: <strong>(1, 6)</strong></p>
</div>
<div class="lesson-diagram" data-diagram="math-translation"></div>

<h3>Full descriptions of transformations</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Type</th><th style="padding:8px;border:1px solid #ccc">Required information</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Translation</td><td style="padding:8px;border:1px solid #ccc">Column vector</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Reflection</td><td style="padding:8px;border:1px solid #ccc">Equation of the mirror line</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Rotation</td><td style="padding:8px;border:1px solid #ccc">Angle, direction (CW/ACW), centre of rotation</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Enlargement</td><td style="padding:8px;border:1px solid #ccc">Scale factor, centre of enlargement</td></tr>
</table>

<h3>Combining two transformations</h3>
<div class="example-box">
<p><strong>Example:</strong> Shape A is translated by (4 over −1) then by (−6 over 3). Find the single equivalent translation.</p>
<p>Add the vectors: (4 + (−6), −1 + 3) = (−2, 2)<br>
Single translation: <strong>(−2 over 2)</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Column vector</dt><dd>A notation (a over b) showing horizontal then vertical displacement.</dd>
<dt>Centre of rotation</dt><dd>The fixed point about which a shape is rotated.</dd>
<dt>Mirror line</dt><dd>The line of reflection; each point and its image are equidistant from it.</dd>
<dt>Scale factor</dt><dd>The ratio by which lengths are multiplied in an enlargement.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing "rotation 90°" — ✅ always add direction (clockwise/anticlockwise) and the centre.</li>
<li>❌ Confusing the vector components — ✅ the TOP number is horizontal (left/right), BOTTOM is vertical (up/down).</li>
<li>❌ Saying "moved" instead of naming the transformation — ✅ use the precise word: translation, reflection, rotation, or enlargement.</li>
</ul>`,

'm8i-27-5': `
<h2>Grouped Frequency &amp; Estimated Mean</h2>
<p>When data is grouped into class intervals we cannot see individual values. We can identify the <strong>modal class</strong>, locate the <strong>class containing the median</strong>, and <strong>estimate the mean</strong> using midpoints.</p>

<h3>Constructing a grouped frequency table</h3>
<p>Choose equal-width, non-overlapping class intervals. Record how many data values fall in each class (the frequency). The classes should cover all the data with no gaps.</p>

<h3>Modal class and class containing the median</h3>
<p><strong>Modal class:</strong> the class with the highest frequency.</p>
<p><strong>Class containing the median:</strong> find the median position = (n+1)/2, then build cumulative frequencies until you reach that position.</p>
<div class="example-box">
<p><strong>Example:</strong> Classes 0–10 (f=4), 10–20 (f=6), 20–30 (f=10). Total n = 20.</p>
<p>Modal class: 20–30 (highest frequency, 10).<br>
Median position: (20+1)/2 = 10.5th value.<br>
Cumulative freq: 0–10: 4; 0–20: 10; 0–30: 20.<br>
The 10.5th value lies in <strong>20–30</strong>.</p>
</div>

<h3>Estimating the mean</h3>
<p><strong>Step 1:</strong> Find the midpoint of each class: (lower + upper) ÷ 2.<br>
<strong>Step 2:</strong> Multiply each midpoint by its frequency (fx).<br>
<strong>Step 3:</strong> Estimated mean = Σ(fx) ÷ Σf.</p>
<div class="example-box">
<p><strong>Example:</strong> 0–10 (f=4), 10–20 (f=6), 20–30 (f=10).</p>
<p>Midpoints: 5, 15, 25<br>
Σ(fx) = (5×4) + (15×6) + (25×10) = 20 + 90 + 250 = 360<br>
Σf = 20<br>
Estimated mean = 360 ÷ 20 = <strong>18</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Class interval</dt><dd>A group of values, e.g. 10 ≤ x &lt; 20.</dd>
<dt>Modal class</dt><dd>The class interval with the greatest frequency.</dd>
<dt>Cumulative frequency</dt><dd>Running total of frequencies up to the end of each class.</dd>
<dt>Estimated mean</dt><dd>An approximate mean calculated using class midpoints.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using class boundaries instead of midpoints — ✅ always use (lower + upper) ÷ 2 for the midpoint.</li>
<li>❌ Dividing Σ(fx) by the number of classes — ✅ divide by Σf (total frequency).</li>
<li>❌ Stating a value for the modal class — ✅ give the full class interval, e.g. "20–30", not just "25".</li>
</ul>`,

'm8i-28-4': `
<h2>Venn Diagrams &amp; Two-Way Tables</h2>
<p>Venn diagrams and two-way tables are ways to organise data about two characteristics. Both let you read off probabilities directly.</p>

<h3>Venn diagrams</h3>
<p>Two overlapping circles sit inside a rectangle (the universal set ξ). The <strong>intersection</strong> (overlap) holds items in both sets; the non-overlapping parts hold items in one set only; outside both circles are items in neither.</p>
<div class="example-box">
<p><strong>Example:</strong> 30 students: 18 study French (F), 12 study Spanish (S), 7 study both.</p>
<p>F only = 18 − 7 = 11 &nbsp;&nbsp; S only = 12 − 7 = 5<br>
Neither = 30 − (11 + 7 + 5) = 7<br>
P(F ∩ S) = 7/30 &nbsp;&nbsp; P(F ∪ S) = 23/30</p>
</div>

<h3>Addition rule for probability</h3>
<p>P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</p>
<p>Subtract the intersection once because it has been counted twice.</p>

<h3>Two-way tables</h3>
<p>Each row and column must sum to its marginal total. The grand total appears in the bottom-right corner.</p>
<div class="example-box">
<p><strong>Example:</strong> 50 students, 30 boys, 20 girls; 35 walk to school, 20 boys walk.</p>
<p>Girls who walk = 35 − 20 = 15<br>
Boys who do not walk = 30 − 20 = 10<br>
Girls who do not walk = 20 − 15 = 5<br>
Check: 10 + 5 = 15 (do not walk) → 35 + 15 = 50 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Intersection (A ∩ B)</dt><dd>Elements belonging to BOTH set A and set B.</dd>
<dt>Union (A ∪ B)</dt><dd>Elements belonging to A OR B OR both.</dd>
<dt>Universal set (ξ)</dt><dd>The set of all items under consideration.</dd>
<dt>Complement (A')</dt><dd>Everything NOT in set A (within the universal set).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Placing the "both" number in only one circle — ✅ the intersection value goes in the OVERLAP region only.</li>
<li>❌ Forgetting to subtract P(A ∩ B) when using the addition rule — ✅ P(A ∪ B) = P(A) + P(B) − P(A ∩ B).</li>
<li>❌ Reading a two-way table total as a probability without dividing by the grand total — ✅ always divide by the grand total (or the appropriate conditional total).</li>
</ul>`

});
