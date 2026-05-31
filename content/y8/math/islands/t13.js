// math-y8-t13.js — Year 8 Maths Topic 13: Coordinate Plane
// Islands: m8i-13-1, m8i-13-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-13-1 — Coordinate Plane & Quadrants
  {id:"m8fc-13-1-1",islandId:"m8i-13-1",front:"What are the four quadrants of the coordinate plane and what are the signs of (x, y) in each?",
   back:"• Quadrant I (top-right): (+, +)\n• Quadrant II (top-left): (−, +)\n• Quadrant III (bottom-left): (−, −)\n• Quadrant IV (bottom-right): (+, −)\n\nMemory tip: start top-right and go anti-clockwise — I, II, III, IV.",difficulty:1,category:"definition"},
  {id:"m8fc-13-1-2",islandId:"m8i-13-1",front:"What are the x-axis and y-axis?",
   back:"The x-axis is the horizontal number line on a coordinate plane.\nThe y-axis is the vertical number line.\nThey cross at the origin (0, 0).\n\nAny point on the x-axis has y = 0; any point on the y-axis has x = 0.",difficulty:1,category:"definition"},
  {id:"m8fc-13-1-3",islandId:"m8i-13-1",front:"Plot the point (−3, 4). Which quadrant does it lie in?",
   back:"Quadrant II.\n\nSteps:\n1. Start at the origin (0, 0).\n2. Move 3 units LEFT (negative x).\n3. Move 4 units UP (positive y).\n\nNegative x, positive y → Quadrant II.",difficulty:1,category:"application"},
  {id:"m8fc-13-1-4",islandId:"m8i-13-1",front:"A point has a negative x-coordinate and a negative y-coordinate. Which quadrant is it in?",
   back:"Quadrant III (bottom-left).\n\nBoth coordinates negative means the point is to the left of the y-axis AND below the x-axis.\n\nExample: (−5, −2) is in Quadrant III.",difficulty:1,category:"concept"},
  {id:"m8fc-13-1-5",islandId:"m8i-13-1",front:"Where does the point (0, −6) lie on the coordinate plane?",
   back:"On the y-axis, 6 units below the origin.\n\nAny point with x = 0 lies on the y-axis. It is NOT in any quadrant — points on the axes are between quadrants.\n\nSimilarly, (4, 0) lies on the x-axis.",difficulty:2,category:"concept"},
  {id:"m8fc-13-1-6",islandId:"m8i-13-1",front:"From the point (2, −3), you move 4 units up and 5 units to the left. What are the new coordinates?",
   back:"(−3, 1)\n\nStart: (2, −3)\nMove left 5: x = 2 − 5 = −3\nMove up 4: y = −3 + 4 = 1\n\nNew point: (−3, 1) — in Quadrant II.",difficulty:2,category:"application"},

  // m8i-13-2 — Distance Between Two Points
  {id:"m8fc-13-2-1",islandId:"m8i-13-2",front:"How do you find the horizontal distance between two points on a coordinate plane?",
   back:"Subtract the x-coordinates and take the absolute value (ignore the sign).\n\nHorizontal distance = |x₂ − x₁|\n\nExample: between (−3, 5) and (4, 5):\n|4 − (−3)| = |7| = 7 units.",difficulty:1,category:"definition"},
  {id:"m8fc-13-2-2",islandId:"m8i-13-2",front:"How do you find the vertical distance between two points on a coordinate plane?",
   back:"Subtract the y-coordinates and take the absolute value.\n\nVertical distance = |y₂ − y₁|\n\nExample: between (2, −4) and (2, 6):\n|6 − (−4)| = |10| = 10 units.",difficulty:1,category:"definition"},
  {id:"m8fc-13-2-3",islandId:"m8i-13-2",front:"Find the horizontal distance between A(−5, 3) and B(7, 3).",
   back:"12 units.\n\nThe y-coordinates are the same, so the points lie on a horizontal line.\n|7 − (−5)| = |7 + 5| = |12| = 12 units.\n\nYou can also count squares on the grid: from −5 to 7 is 12 squares.",difficulty:1,category:"calculation"},
  {id:"m8fc-13-2-4",islandId:"m8i-13-2",front:"Find the vertical distance between C(−2, −4) and D(−2, 9).",
   back:"13 units.\n\nThe x-coordinates are the same, so the points lie on a vertical line.\n|9 − (−4)| = |9 + 4| = 13 units.\n\nWhen working across zero, remember to add the distances either side of the x-axis.",difficulty:2,category:"calculation"},
  {id:"m8fc-13-2-5",islandId:"m8i-13-2",front:"Why must you use absolute value (or |…|) when calculating coordinate distances?",
   back:"Because distance is always positive — it has no direction.\n\nIf you subtract the wrong way (e.g. x₁ − x₂ gives a negative), the absolute value corrects this.\n\nExample: |3 − 8| = |−5| = 5, and |8 − 3| = 5. Both give the same positive distance.",difficulty:2,category:"concept"},
  {id:"m8fc-13-2-6",islandId:"m8i-13-2",front:"Points P(−6, 2) and Q(4, 2) are two opposite corners of a rectangle. What is the width of the rectangle (horizontal side)?",
   back:"10 units.\n\nBoth points share the same y-coordinate, so the side PQ is horizontal.\n|4 − (−6)| = |10| = 10 units.\n\nThis technique is useful for finding side lengths of shapes plotted on a coordinate grid.",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-13-1":[
    {q:"Which quadrant contains the point (−4, 7)?",opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"],c:1,e:"A negative x-coordinate and positive y-coordinate place the point to the left of the y-axis and above the x-axis — that is Quadrant II."},
    {q:"A point lies on the x-axis. Which of the following could be its coordinates?",opts:["(0, 5)","(3, 3)","(−2, 0)","(0, 0) only"],c:2,e:"A point on the x-axis has y = 0. (−2, 0) fits this — it lies 2 units to the left of the origin on the x-axis. (0, 5) is on the y-axis."},
    {q:"Starting at (1, −2), you move 3 units to the right and 5 units up. What are your new coordinates?",opts:["(4, 3)","(−2, 3)","(4, −7)","(−2, −7)"],c:0,e:"Right 3: x = 1 + 3 = 4. Up 5: y = −2 + 5 = 3. New coordinates: (4, 3)."},
    {q:"The point (5, −8) is in which quadrant?",opts:["Quadrant I","Quadrant II","Quadrant III","Quadrant IV"],c:3,e:"Positive x and negative y means the point is to the right of the y-axis and below the x-axis — Quadrant IV."},
    {q:"Which point lies in Quadrant III?",opts:["(3, −1)","(−3, 1)","(3, 1)","(−3, −1)"],c:3,e:"Quadrant III requires both coordinates to be negative. Only (−3, −1) has both x < 0 and y < 0."}
  ],
  "m8i-13-2":[
    {q:"What is the horizontal distance between the points (−5, 4) and (3, 4)?",opts:["2 units","7 units","8 units","9 units"],c:2,e:"|3 − (−5)| = |3 + 5| = 8 units. The y-coordinates are equal, confirming this is a horizontal distance."},
    {q:"What is the vertical distance between the points (2, −6) and (2, 7)?",opts:["1 unit","7 units","13 units","14 units"],c:2,e:"|7 − (−6)| = |7 + 6| = 13 units. The x-coordinates are equal, confirming this is a vertical distance."},
    {q:"Two points share the same x-coordinate. What does that tell you about the line segment joining them?",opts:["It is horizontal","It is diagonal","It is vertical","It passes through the origin"],c:2,e:"When two points have the same x-coordinate, they lie directly above/below each other — the line joining them is vertical."},
    {q:"Find the distance between (−7, −3) and (2, −3).",opts:["4 units","5 units","9 units","10 units"],c:2,e:"|2 − (−7)| = |2 + 7| = 9 units. Both y-coordinates are −3, so this is horizontal distance."},
    {q:"A rectangle has corners at (−4, 1) and (−4, 6) for one vertical side. What is the length of that side?",opts:["2 units","4 units","5 units","7 units"],c:2,e:"|6 − 1| = 5 units. The x-coordinates are both −4 so it is a vertical side; subtract the y-values."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-13-1': `
<h2>Coordinate Plane &amp; Quadrants</h2>
<p>The <strong>coordinate plane</strong> is formed by two perpendicular number lines: the horizontal <strong>x-axis</strong> and the vertical <strong>y-axis</strong>. They meet at the <strong>origin (0, 0)</strong> and divide the plane into four <strong>quadrants</strong>. Every point is described by an ordered pair <strong>(x, y)</strong> — the x-coordinate (horizontal position) first, then the y-coordinate (vertical position).</p>

<h3>The four quadrants</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Quadrant</th><th style="padding:8px;border:1px solid #ccc">Position</th><th style="padding:8px;border:1px solid #ccc">Sign of (x, y)</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">I</td><td style="padding:8px;border:1px solid #ccc">Top-right</td><td style="padding:8px;border:1px solid #ccc">(+, +)</td><td style="padding:8px;border:1px solid #ccc">(3, 5)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">II</td><td style="padding:8px;border:1px solid #ccc">Top-left</td><td style="padding:8px;border:1px solid #ccc">(−, +)</td><td style="padding:8px;border:1px solid #ccc">(−4, 2)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">III</td><td style="padding:8px;border:1px solid #ccc">Bottom-left</td><td style="padding:8px;border:1px solid #ccc">(−, −)</td><td style="padding:8px;border:1px solid #ccc">(−1, −6)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">IV</td><td style="padding:8px;border:1px solid #ccc">Bottom-right</td><td style="padding:8px;border:1px solid #ccc">(+, −)</td><td style="padding:8px;border:1px solid #ccc">(7, −3)</td></tr>
</table>
<p>Points that lie exactly on an axis are <strong>not</strong> in any quadrant. A point with x = 0 is on the y-axis; a point with y = 0 is on the x-axis.</p>
<div class="lesson-diagram" data-diagram="math-quadrants"></div>

<h3>How to plot a point</h3>
<div class="example-box">
<p><strong>Example:</strong> Plot (−3, 5) and state its quadrant.</p>
<p><strong>Solution:</strong><br>
1. Start at the origin (0, 0).<br>
2. Move 3 units to the <em>left</em> (x = −3).<br>
3. Move 5 units <em>up</em> (y = 5).<br>
4. Mark the point.<br>
<strong>Quadrant II</strong> — negative x, positive y.</p>
</div>

<h3>Following directions on the coordinate plane</h3>
<p>When a question asks you to move from a given point, apply each move in turn:</p>
<div class="example-box">
<p><strong>Example:</strong> From (4, −2), move 6 units left and 3 units down. Find the new point.</p>
<p>Left 6: x = 4 − 6 = <strong>−2</strong><br>
Down 3: y = −2 − 3 = <strong>−5</strong><br>
New point: <strong>(−2, −5)</strong> — Quadrant III.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Coordinate plane</dt><dd>A flat surface formed by the x-axis and y-axis meeting at right angles at the origin.</dd>
<dt>Ordered pair</dt><dd>A pair of numbers (x, y) giving the horizontal then vertical position of a point.</dd>
<dt>x-axis</dt><dd>The horizontal number line on the coordinate plane.</dd>
<dt>y-axis</dt><dd>The vertical number line on the coordinate plane.</dd>
<dt>Origin</dt><dd>The point (0, 0) where the x-axis and y-axis cross.</dd>
<dt>Quadrant</dt><dd>One of the four regions created by the axes, numbered I–IV anti-clockwise from the top-right.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Reading coordinates as (y, x) — ✅ always go horizontal (x) first, then vertical (y).</li>
<li>❌ Saying a point on the y-axis is in Quadrant I or II — ✅ points on the axes are not in any quadrant.</li>
<li>❌ Moving in the wrong direction for a negative coordinate — ✅ negative x means left, negative y means down.</li>
</ul>`,

'm8i-13-2': `
<h2>Distance Between Two Points</h2>
<p>When two points share the same y-coordinate, they lie on a <strong>horizontal line</strong> and you can find the distance between them by looking at their x-coordinates. When two points share the same x-coordinate, they lie on a <strong>vertical line</strong> and you compare their y-coordinates. The distance is always a <strong>positive</strong> number, so always take the absolute value of the difference.</p>

<h3>Horizontal distance</h3>
<p>For points that share the same y-coordinate:</p>
<p style="margin-left:1.5em;font-family:monospace">Horizontal distance = |x₂ − x₁|</p>
<div class="example-box">
<p><strong>Example:</strong> Find the distance between A(−3, 5) and B(4, 5).</p>
<p>Both points have y = 5, so the line AB is horizontal.<br>
|4 − (−3)| = |4 + 3| = <strong>7 units</strong>.</p>
</div>

<h3>Vertical distance</h3>
<p>For points that share the same x-coordinate:</p>
<p style="margin-left:1.5em;font-family:monospace">Vertical distance = |y₂ − y₁|</p>
<div class="example-box">
<p><strong>Example:</strong> Find the distance between C(2, −4) and D(2, 6).</p>
<p>Both points have x = 2, so the line CD is vertical.<br>
|6 − (−4)| = |6 + 4| = <strong>10 units</strong>.</p>
</div>

<h3>Distances that cross zero</h3>
<p>Take extra care when the two points are on opposite sides of an axis. The absolute value formula handles this automatically — but counting on the grid is a reliable check.</p>
<div class="example-box">
<p><strong>Example:</strong> Find the distance between E(−5, 2) and F(3, 2).</p>
<p>|3 − (−5)| = |3 + 5| = <strong>8 units</strong>.<br>
Counting on the grid: 5 squares from −5 to 0, then 3 more to 3 = 8 squares. ✓</p>
</div>

<h3>Using distances to find side lengths of shapes</h3>
<p>If a rectangle or other shape is plotted on the coordinate plane with horizontal and vertical sides, you can find each side length using these distance rules.</p>
<div class="example-box">
<p><strong>Example:</strong> A rectangle has corners at (−2, −1), (5, −1), (5, 4) and (−2, 4). Find its width and height.</p>
<p>Width (horizontal): |5 − (−2)| = 7 units.<br>
Height (vertical): |4 − (−1)| = 5 units.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Horizontal distance</dt><dd>The left-right gap between two points — found by subtracting x-coordinates.</dd>
<dt>Vertical distance</dt><dd>The up-down gap between two points — found by subtracting y-coordinates.</dd>
<dt>Absolute value</dt><dd>The non-negative value of a number, written |n|. Ensures distance is always positive.</dd>
<dt>Collinear (horizontal)</dt><dd>Two or more points sharing the same y-coordinate lie on the same horizontal line.</dd>
<dt>Collinear (vertical)</dt><dd>Two or more points sharing the same x-coordinate lie on the same vertical line.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to use absolute value and getting a negative distance — ✅ distance is always positive, so take |x₂ − x₁|.</li>
<li>❌ Adding instead of subtracting when both coordinates are negative (e.g. thinking |−6| + |−2| = 8 when the distance is |−2 − (−6)| = 4) — ✅ use the formula, not the individual absolute values.</li>
<li>❌ Confusing horizontal and vertical — ✅ horizontal distance uses x-coordinates; vertical distance uses y-coordinates.</li>
</ul>`

});
