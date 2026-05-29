// math-y8-t19.js — Year 8 Maths Topic 19: Linear Functions
// Islands: m8i-19-1 .. m8i-19-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-19-1 — Find the Gradient
  {id:"m8fc-19-1-1",islandId:"m8i-19-1",front:"What is gradient and how is it calculated from a graph?",
   back:"Gradient measures the steepness (slope) of a line.\n\nGradient = rise ÷ run\n\nRise = vertical change (up is positive, down is negative).\nRun = horizontal change (right is positive).\n\nExample: if a line goes up 3 and across 4, gradient = 3 ÷ 4 = 0.75.",difficulty:1,category:"definition"},
  {id:"m8fc-19-1-2",islandId:"m8i-19-1",front:"Calculate the gradient of a line passing through (1, 2) and (4, 8).",
   back:"Gradient = (y₂ − y₁) ÷ (x₂ − x₁)\n= (8 − 2) ÷ (4 − 1)\n= 6 ÷ 3\n= 2\n\nThe gradient is 2 (the line rises 2 units for every 1 unit across).",difficulty:2,category:"calculation"},
  {id:"m8fc-19-1-3",islandId:"m8i-19-1",front:"A line passes through (0, 5) and (3, −1). What is the gradient?",
   back:"Gradient = (y₂ − y₁) ÷ (x₂ − x₁)\n= (−1 − 5) ÷ (3 − 0)\n= −6 ÷ 3\n= −2\n\nNegative gradient → the line slopes downward from left to right.",difficulty:2,category:"calculation"},
  {id:"m8fc-19-1-4",islandId:"m8i-19-1",front:"What do positive, negative, zero and undefined gradients look like?",
   back:"• Positive gradient: line goes up left to right (e.g. m = 3).\n• Negative gradient: line goes down left to right (e.g. m = −2).\n• Zero gradient: horizontal line (e.g. y = 4).\n• Undefined gradient: vertical line (x = k — cannot divide by zero run).",difficulty:2,category:"concept"},
  {id:"m8fc-19-1-5",islandId:"m8i-19-1",front:"A line has gradient 3 and passes through (2, 5). Find y when x = 4.",
   back:"Use gradient to find the rise for a run of 2:\nRise = gradient × run = 3 × (4 − 2) = 3 × 2 = 6\n\ny = 5 + 6 = 11\n\nCheck using the formula: from (2, 5) to (4, y): (y − 5) ÷ (4 − 2) = 3 → y − 5 = 6 → y = 11.",difficulty:3,category:"application"},
  {id:"m8fc-19-1-6",islandId:"m8i-19-1",front:"Why must you always subtract y-coordinates and x-coordinates in the same order?",
   back:"Because the formula is gradient = (y₂ − y₁) ÷ (x₂ − x₁).\n\nIf you reverse only one pair, you flip the sign incorrectly.\n\nCorrect: (8 − 2) ÷ (5 − 3) = 6 ÷ 2 = 3 ✓\nError: (2 − 8) ÷ (5 − 3) = −6 ÷ 2 = −3 ✗\n\nAlways use point 1 and point 2 consistently in top and bottom.",difficulty:2,category:"concept"},

  // m8i-19-2 — Gradient & Y-Intercept
  {id:"m8fc-19-2-1",islandId:"m8i-19-2",front:"In y = mx + c, what do m and c represent?",
   back:"m = gradient (how steep the line is; positive = going up, negative = going down).\nc = y-intercept (the y-value where the line crosses the y-axis, i.e. when x = 0).\n\nExample: y = 3x + 2 has gradient 3 and y-intercept 2.",difficulty:1,category:"definition"},
  {id:"m8fc-19-2-2",islandId:"m8i-19-2",front:"What is the gradient and y-intercept of y = −2x + 7?",
   back:"Gradient m = −2 (line slopes downward).\nY-intercept c = 7 (line crosses the y-axis at (0, 7)).\n\nNo rearranging needed — it is already in y = mx + c form.",difficulty:1,category:"application"},
  {id:"m8fc-19-2-3",islandId:"m8i-19-2",front:"What is the gradient and y-intercept of 2y = 4x − 6?",
   back:"Divide every term by 2 to get y = mx + c form:\n2y ÷ 2 = 4x ÷ 2 − 6 ÷ 2\ny = 2x − 3\n\nGradient m = 2, y-intercept c = −3.",difficulty:2,category:"calculation"},
  {id:"m8fc-19-2-4",islandId:"m8i-19-2",front:"A company charges £5 call-out plus £20 per hour. Write as y = mx + c and identify m and c.",
   back:"Let x = hours, y = total charge (£).\ny = 20x + 5\n\nm = 20 → the cost increases by £20 for each extra hour.\nc = 5 → the fixed starting charge is £5 (even for 0 hours).",difficulty:2,category:"application"},
  {id:"m8fc-19-2-5",islandId:"m8i-19-2",front:"Do y = 3x + 1 and y = 3x − 4 ever cross? How do you know?",
   back:"No, they never cross — they are parallel.\n\nParallel lines have the same gradient (both m = 3) but different y-intercepts (+1 and −4).\n\nParallel lines never meet because they rise at exactly the same rate.",difficulty:2,category:"concept"},
  {id:"m8fc-19-2-6",islandId:"m8i-19-2",front:"How do you graph y = 2x − 1 using its gradient and y-intercept?",
   back:"Step 1: Plot the y-intercept. c = −1, so mark (0, −1).\nStep 2: Use the gradient. m = 2 means rise 2 for run 1. From (0, −1), go right 1 and up 2 to reach (1, 1).\nStep 3: Plot (1, 1) and draw a straight line through both points.\nStep 4: Extend the line in both directions.",difficulty:2,category:"application"},

  // m8i-19-3 — Write & Graph y = mx + c
  {id:"m8fc-19-3-1",islandId:"m8i-19-3",front:"How do you find the equation of a line from its graph?",
   back:"Step 1: Read the y-intercept c from where the line crosses the y-axis.\nStep 2: Find the gradient m = rise ÷ run using two clear points on the grid.\nStep 3: Substitute into y = mx + c.\n\nExample: y-intercept = 3, rise = 2 for run = 1 → m = 2 → equation: y = 2x + 3.",difficulty:2,category:"application"},
  {id:"m8fc-19-3-2",islandId:"m8i-19-3",front:"Write the equation of the line with gradient −3 and y-intercept 4.",
   back:"Substitute m = −3 and c = 4 directly into y = mx + c:\n\ny = −3x + 4\n\nCheck a point: at x = 1, y = −3(1) + 4 = 1. If your graph passes through (1, 1), the equation is correct.",difficulty:1,category:"calculation"},
  {id:"m8fc-19-3-3",islandId:"m8i-19-3",front:"A line passes through (0, −2) and (3, 4). Write its equation in y = mx + c form.",
   back:"Step 1: c = y-intercept = −2 (the point (0, −2) is on the y-axis).\nStep 2: Gradient = (4 − (−2)) ÷ (3 − 0) = 6 ÷ 3 = 2.\nStep 3: y = 2x − 2.\n\nCheck: at x = 3, y = 6 − 2 = 4 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-19-3-4",islandId:"m8i-19-3",front:"Graph the line y = −x + 5. Which points will it pass through?",
   back:"m = −1, c = 5.\n\nStart at y-intercept (0, 5).\nGradient −1: go right 1, down 1 each time.\n\nPoints: (0, 5), (1, 4), (2, 3), (3, 2), (5, 0).\n\nNote (5, 0) is the x-intercept (where y = 0): 0 = −x + 5 → x = 5.",difficulty:2,category:"application"},
  {id:"m8fc-19-3-5",islandId:"m8i-19-3",front:"A taxi firm charges a £2 fixed fee plus £1.50 per mile. Write the equation and find the cost for 8 miles.",
   back:"Let x = miles, y = total cost (£).\ny = 1.5x + 2\n\nFor x = 8:\ny = 1.5 × 8 + 2 = 12 + 2 = £14\n\nm = 1.5 is the cost per mile; c = 2 is the fixed charge.",difficulty:2,category:"application"},
  {id:"m8fc-19-3-6",islandId:"m8i-19-3",front:"What is the x-intercept of a line, and how do you find it from y = mx + c?",
   back:"The x-intercept is where the line crosses the x-axis (where y = 0).\n\nSet y = 0 and solve for x:\n0 = mx + c → x = −c ÷ m\n\nExample: y = 3x − 6 → 0 = 3x − 6 → 3x = 6 → x = 2.\nX-intercept is (2, 0).",difficulty:2,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-19-1":[
    {q:"What is the gradient of a line that passes through (0, 1) and (3, 7)?",opts:["2","3","6","½"],c:0,e:"Gradient = (7 − 1) ÷ (3 − 0) = 6 ÷ 3 = 2."},
    {q:"A line goes through (2, 5) and (6, 1). What is its gradient?",opts:["1","−1","−4","4"],c:1,e:"Gradient = (1 − 5) ÷ (6 − 2) = −4 ÷ 4 = −1. The negative value means the line slopes downward."},
    {q:"Which of these describes a line with a gradient of zero?",opts:["A vertical line","A diagonal line sloping up","A horizontal line","A line with gradient 1"],c:2,e:"Zero gradient means no rise — the line is perfectly horizontal (e.g. y = 3)."},
    {q:"A line has gradient 4 and passes through (1, 3). What is y when x = 3?",opts:["7","11","8","12"],c:1,e:"Run = 3 − 1 = 2. Rise = gradient × run = 4 × 2 = 8. y = 3 + 8 = 11."},
    {q:"Calculate the gradient of the line through (−2, 1) and (4, 4).",opts:["½","2","−½","3"],c:0,e:"Gradient = (4 − 1) ÷ (4 − (−2)) = 3 ÷ 6 = ½."}
  ],
  "m8i-19-2":[
    {q:"What is the gradient and y-intercept of y = 5x − 3?",opts:["m = 5, c = 3","m = −3, c = 5","m = 5, c = −3","m = −5, c = 3"],c:2,e:"In y = mx + c, m is the coefficient of x and c is the constant. So m = 5 and c = −3."},
    {q:"Which equation has a y-intercept of 6?",opts:["y = 6x + 2","y = 2x − 6","y = x + 6","y = 6x"],c:2,e:"The y-intercept is c, the constant term. y = x + 6 has c = 6. y = 6x has c = 0; y = 2x − 6 has c = −6."},
    {q:"Rearrange 3y = 6x + 9 into y = mx + c form. What is the gradient?",opts:["6","3","2","9"],c:2,e:"Divide everything by 3: y = 2x + 3. The gradient m = 2."},
    {q:"Two lines: y = 4x + 1 and y = 4x − 7. What is true about them?",opts:["They cross at the y-axis","They are perpendicular","They are parallel","They have the same y-intercept"],c:2,e:"Both lines have gradient m = 4 but different y-intercepts (+1 and −7), so they are parallel and never meet."},
    {q:"A plumber charges £30 call-out plus £25 per hour. Which equation models the total cost y for x hours?",opts:["y = 30x + 25","y = 25 + 30","y = 25x + 30","y = 55x"],c:2,e:"m = 25 (cost per hour), c = 30 (fixed call-out fee). So y = 25x + 30."}
  ],
  "m8i-19-3":[
    {q:"A line has gradient 3 and y-intercept −2. What is its equation?",opts:["y = −2x + 3","y = 3x − 2","y = 2x − 3","y = 3x + 2"],c:1,e:"Substitute m = 3 and c = −2 into y = mx + c to get y = 3x − 2."},
    {q:"Which equation describes a line that passes through (0, 4) with gradient −2?",opts:["y = 4x − 2","y = −2x − 4","y = 2x + 4","y = −2x + 4"],c:3,e:"c = 4 (the point (0, 4) is the y-intercept) and m = −2, so y = −2x + 4."},
    {q:"A line passes through (0, −3) and (2, 5). What is its equation?",opts:["y = 4x − 3","y = 4x + 3","y = −3x + 4","y = 2x − 3"],c:0,e:"c = −3 (y-intercept). Gradient = (5 − (−3)) ÷ (2 − 0) = 8 ÷ 2 = 4. Equation: y = 4x − 3."},
    {q:"For the line y = −x + 6, what is the x-intercept?",opts:["(0, 6)","(6, 0)","(−6, 0)","(0, −6)"],c:1,e:"Set y = 0: 0 = −x + 6 → x = 6. The x-intercept is the point (6, 0)."},
    {q:"A water tank holds 200 litres and drains at 25 litres per minute. Which equation gives the volume y after x minutes?",opts:["y = 25x + 200","y = 200x − 25","y = −25x + 200","y = 25x − 200"],c:2,e:"The tank starts at 200 litres (c = 200) and decreases by 25 per minute (m = −25). Equation: y = −25x + 200."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-19-1': `
<h2>Find the Gradient</h2>
<p>The <strong>gradient</strong> of a line tells you how steep it is — how much the line goes up or down for every unit it moves to the right. It is one of the most important ideas in linear functions.</p>

<h3>Gradient from a graph (rise over run)</h3>
<p>Choose two points on the line that sit on grid intersections. Count the <em>rise</em> (vertical change) and the <em>run</em> (horizontal change).</p>
<div class="example-box">
<p><strong>Gradient = rise ÷ run</strong></p>
<p><strong>Example:</strong> A line rises 6 squares and moves right 3 squares.<br>
Gradient = 6 ÷ 3 = <strong>2</strong>.</p>
<p>If the line slopes <em>downward</em> left to right, count the fall as a negative rise:<br>
Falls 4, runs 2 → Gradient = −4 ÷ 2 = <strong>−2</strong>.</p>
</div>

<h3>Gradient from two coordinate points</h3>
<p>Use the formula with two points (x₁, y₁) and (x₂, y₂):</p>
<div class="example-box">
<p><strong>Gradient m = (y₂ − y₁) ÷ (x₂ − x₁)</strong></p>
<p><strong>Example:</strong> Points (1, 2) and (4, 8).<br>
m = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = <strong>2</strong>.</p>
<p><strong>Example with negative gradient:</strong> Points (0, 5) and (3, −1).<br>
m = (−1 − 5) ÷ (3 − 0) = −6 ÷ 3 = <strong>−2</strong>.</p>
</div>

<h3>Interpreting the gradient</h3>
<p>A <strong>positive gradient</strong> means the line climbs from left to right. A <strong>negative gradient</strong> means it falls. A <strong>zero gradient</strong> is a horizontal line. A <strong>vertical line</strong> has an undefined gradient (run = 0, division by zero).</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Gradient</dt><dd>The measure of steepness of a line — rise divided by run.</dd>
<dt>Rise</dt><dd>The vertical change between two points on a line.</dd>
<dt>Run</dt><dd>The horizontal change between two points on a line.</dd>
<dt>Positive gradient</dt><dd>The line goes upward from left to right.</dd>
<dt>Negative gradient</dt><dd>The line goes downward from left to right.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing rise ÷ run as run ÷ rise — ✅ it is always vertical change divided by horizontal change.</li>
<li>❌ Subtracting the coordinates in different orders (e.g. y₂ − y₁ on top but x₁ − x₂ on the bottom) — ✅ be consistent: pick a point 1 and a point 2 and stick with them.</li>
<li>❌ Forgetting the negative sign when a line falls — ✅ downward slope = negative gradient.</li>
</ul>`,

'm8i-19-2': `
<h2>Gradient &amp; Y-Intercept</h2>
<p>Every straight-line equation can be written in the form <strong>y = mx + c</strong>, where <strong>m</strong> is the gradient and <strong>c</strong> is the y-intercept. Recognising these two values instantly tells you the shape and position of any straight line.</p>

<h3>Reading m and c from y = mx + c</h3>
<div class="example-box">
<p><strong>Example:</strong> y = 3x − 5</p>
<p>m = <strong>3</strong> (gradient — line rises 3 for every 1 across).<br>
c = <strong>−5</strong> (y-intercept — line crosses the y-axis at (0, −5)).</p>
</div>

<h3>Rearranging into y = mx + c</h3>
<p>Sometimes the equation is not in y = mx + c form. Divide or rearrange to isolate y.</p>
<div class="example-box">
<p><strong>Example:</strong> Rearrange 4y = 8x − 12.<br>
Divide every term by 4: y = 2x − 3.<br>
Gradient m = <strong>2</strong>, y-intercept c = <strong>−3</strong>.</p>
</div>

<h3>What the gradient and y-intercept mean in real life</h3>
<p>In a real-world context, m is the <em>rate of change</em> (e.g. cost per hour, speed) and c is the <em>starting value</em> (e.g. fixed fee, initial amount).</p>
<div class="example-box">
<p><strong>Example:</strong> A plumber charges £40 call-out fee plus £30 per hour.<br>
y = 30x + 40 &nbsp;&nbsp; (m = 30, c = 40).</p>
</div>

<h3>Parallel lines</h3>
<p>Lines with the <strong>same gradient</strong> are <strong>parallel</strong> — they never meet. For example, y = 2x + 1 and y = 2x − 5 are parallel because both have m = 2.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>y = mx + c</dt><dd>The standard UK form for a straight-line equation.</dd>
<dt>Gradient (m)</dt><dd>The rate at which y increases for each unit increase in x.</dd>
<dt>Y-intercept (c)</dt><dd>The value of y when x = 0; where the line crosses the y-axis.</dd>
<dt>Parallel lines</dt><dd>Lines with equal gradients that never intersect.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking c is the coefficient of x — ✅ m is next to x; c is the standalone number.</li>
<li>❌ Forgetting to divide all terms when rearranging (e.g. only dividing some terms) — ✅ every single term, including the constant, must be divided.</li>
<li>❌ Confusing parallel (same m) with identical (same m and same c) — ✅ same m but different c means parallel; same m and same c is the same line.</li>
</ul>`,

'm8i-19-3': `
<h2>Write &amp; Graph y = mx + c</h2>
<p>Once you can read gradient and y-intercept, you can go in both directions: <em>write</em> an equation from a graph or description, and <em>draw</em> a graph from an equation.</p>

<h3>Writing an equation from a graph</h3>
<div class="example-box">
<p><strong>Steps:</strong></p>
<p>1. Read the y-intercept c — where the line crosses the y-axis.<br>
2. Pick two clear grid points and calculate m = rise ÷ run.<br>
3. Write y = mx + c.</p>
<p><strong>Example:</strong> Line crosses y-axis at (0, 3); through (2, 7).<br>
m = (7 − 3) ÷ (2 − 0) = 4 ÷ 2 = 2. &nbsp; Equation: <strong>y = 2x + 3</strong>.</p>
</div>

<h3>Writing an equation from gradient and y-intercept</h3>
<div class="example-box">
<p><strong>Example:</strong> Gradient = −3, y-intercept = 4.<br>
Substitute: y = <strong>−3x + 4</strong>.</p>
</div>

<h3>Graphing y = mx + c</h3>
<div class="example-box">
<p><strong>Example:</strong> Graph y = 2x − 1.</p>
<p>1. Plot the y-intercept: (0, −1).<br>
2. Use m = 2: go right 1, up 2 → plot (1, 1).<br>
3. Repeat to get a third point (2, 3).<br>
4. Draw a straight line through the points.</p>
</div>

<h3>Finding the x-intercept</h3>
<p>The x-intercept is where y = 0. Set y = 0 and solve:</p>
<div class="example-box">
<p><strong>Example:</strong> y = 3x − 6. Set y = 0: 0 = 3x − 6 → 3x = 6 → x = 2.<br>
X-intercept: <strong>(2, 0)</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Y-intercept</dt><dd>The point where the line crosses the y-axis; found by setting x = 0.</dd>
<dt>X-intercept</dt><dd>The point where the line crosses the x-axis; found by setting y = 0.</dd>
<dt>Linear model</dt><dd>A straight-line equation used to represent a real-world situation.</dd>
<dt>Equation of a line</dt><dd>A rule that every point (x, y) on the line satisfies, written as y = mx + c.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Plotting the gradient as a single point instead of a direction — ✅ gradient is rise ÷ run: move right (run), then up or down (rise).</li>
<li>❌ Swapping x-intercept and y-intercept — ✅ y-intercept: set x = 0; x-intercept: set y = 0.</li>
<li>❌ Drawing a curved line through the points — ✅ linear equations always produce a perfectly straight line; use a ruler.</li>
</ul>`

});
