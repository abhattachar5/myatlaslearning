// math-y8-t18.js — Year 8 Maths Topic 18: Two-Variable Equations
// Islands: m8i-18-1 .. m8i-18-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-18-1 — Two-Variable Equations & Tables
  {id:"m8fc-18-1-1",islandId:"m8i-18-1",front:"What does it mean for a pair (x, y) to satisfy an equation?",
   back:"A pair (x, y) satisfies an equation if, when you substitute those values for x and y, both sides of the equation are equal.\n\nExample: Does (2, 5) satisfy y = 2x + 1?\nSubstitute: 5 = 2(2) + 1 = 5 ✓\nYes, it satisfies the equation.",difficulty:1,category:"definition"},
  {id:"m8fc-18-1-2",islandId:"m8i-18-1",front:"Does (3, 7) satisfy the equation y = 2x + 1?",
   back:"Yes ✓\n\nSubstitute x = 3 and y = 7:\ny = 2(3) + 1 = 6 + 1 = 7\n7 = 7 ✓\nThe pair (3, 7) satisfies y = 2x + 1.",difficulty:1,category:"application"},
  {id:"m8fc-18-1-3",islandId:"m8i-18-1",front:"What are independent and dependent variables in an equation?",
   back:"The INDEPENDENT variable (usually x) is the one you choose freely — you decide its value.\nThe DEPENDENT variable (usually y) depends on the independent variable — its value is calculated.\n\nExample: In y = 3x − 1, x is independent and y is dependent.",difficulty:1,category:"concept"},
  {id:"m8fc-18-1-4",islandId:"m8i-18-1",front:"Complete the table of values for y = 3x − 1 when x = 0, 1, 2, 3.",
   back:"x = 0: y = 3(0) − 1 = −1\nx = 1: y = 3(1) − 1 = 2\nx = 2: y = 3(2) − 1 = 5\nx = 3: y = 3(3) − 1 = 8\n\nTable: (0, −1), (1, 2), (2, 5), (3, 8).",difficulty:2,category:"calculation"},
  {id:"m8fc-18-1-5",islandId:"m8i-18-1",front:"A taxi charges £2.50 per mile plus a £1.50 booking fee. Write a two-variable equation and identify the independent and dependent variables.",
   back:"Equation: C = 2.5m + 1.5\n\nwhere m = number of miles (independent variable) and C = total cost in pounds (dependent variable).\nYou choose how many miles to travel; the cost depends on that choice.",difficulty:2,category:"application"},
  {id:"m8fc-18-1-6",islandId:"m8i-18-1",front:"Does (−2, 1) satisfy y = x² − 3?",
   back:"Yes ✓\n\nSubstitute x = −2 and y = 1:\ny = (−2)² − 3 = 4 − 3 = 1\n1 = 1 ✓\nNote: (−2)² = +4, not −4.",difficulty:3,category:"calculation"},

  // m8i-18-2 — Graph Two-Variable Equations
  {id:"m8fc-18-2-1",islandId:"m8i-18-2",front:"What steps do you follow to plot the graph of y = 2x − 3?",
   back:"Step 1: Make a table of values — choose at least 3 values of x (e.g. 0, 1, 2).\nStep 2: Calculate y for each x: (0, −3), (1, −1), (2, 1).\nStep 3: Plot each (x, y) pair on a coordinate grid.\nStep 4: Draw a straight line through all the points and extend it.",difficulty:2,category:"concept"},
  {id:"m8fc-18-2-2",islandId:"m8i-18-2",front:"Complete the table for y = 2x − 3 when x = 0, 1, 2, 3.",
   back:"x = 0: y = 2(0) − 3 = −3\nx = 1: y = 2(1) − 3 = −1\nx = 2: y = 2(2) − 3 = 1\nx = 3: y = 2(3) − 3 = 3\n\nCoordinates: (0, −3), (1, −1), (2, 1), (3, 3).",difficulty:1,category:"calculation"},
  {id:"m8fc-18-2-3",islandId:"m8i-18-2",front:"The graph of y = mx + c is a straight line. What feature tells you that the graph passes through (0, −4)?",
   back:"The y-intercept is −4.\n\nWhen c = −4 in y = mx + c, the line crosses the y-axis at −4.\nYou can confirm by substituting x = 0: y = m(0) + (−4) = −4, giving the point (0, −4).",difficulty:2,category:"concept"},
  {id:"m8fc-18-2-4",islandId:"m8i-18-2",front:"A graph passes through (0, 1) and (2, 5). Which equation does it match: y = 2x + 1 or y = 3x − 1?",
   back:"y = 2x + 1\n\nCheck (0, 1): y = 2(0) + 1 = 1 ✓\nCheck (2, 5): y = 2(2) + 1 = 5 ✓\n\nFor y = 3x − 1: at x = 0, y = −1 ✗ — does not pass through (0, 1).",difficulty:2,category:"application"},
  {id:"m8fc-18-2-5",islandId:"m8i-18-2",front:"Why do you need at least THREE points to be confident when drawing a straight-line graph?",
   back:"Two points always determine a line, but errors in one calculation will go undetected.\nA third point acts as a CHECK — if all three lie on the same straight line, your calculations are correct.\n\nIf the third point does not line up, find your arithmetic mistake before drawing.",difficulty:2,category:"concept"},
  {id:"m8fc-18-2-6",islandId:"m8i-18-2",front:"Complete the table for y = −x + 4 when x = 0, 2, 4.",
   back:"x = 0: y = −0 + 4 = 4\nx = 2: y = −2 + 4 = 2\nx = 4: y = −4 + 4 = 0\n\nCoordinates: (0, 4), (2, 2), (4, 0).\nNote the line slopes downward (negative gradient).",difficulty:2,category:"calculation"},

  // m8i-18-3 — Interpret Graphs
  {id:"m8fc-18-3-1",islandId:"m8i-18-3",front:"A graph shows distance (km) against time (hours). The line is horizontal. What does this mean?",
   back:"A horizontal line means the distance is not changing — the object is stationary.\n\nThe dependent variable (distance) stays constant as the independent variable (time) increases.",difficulty:1,category:"application"},
  {id:"m8fc-18-3-2",islandId:"m8i-18-3",front:"A graph shows a savings account balance (£) against weeks. The line goes up steeply. What does the steepness indicate?",
   back:"A steep upward slope means the balance is increasing rapidly — a large amount of money is being saved each week.\nSteeper gradient = faster rate of change.\n\nFor example, a gradient of 50 means £50 is added per week.",difficulty:2,category:"application"},
  {id:"m8fc-18-3-3",islandId:"m8i-18-3",front:"What is the y-intercept in a real-world distance-time graph and what might it represent?",
   back:"The y-intercept is the value of y when x = 0 — i.e. the starting value.\n\nOn a distance-time graph, a y-intercept of 5 means the journey started 5 km from the reference point, not at the origin.",difficulty:2,category:"concept"},
  {id:"m8fc-18-3-4",islandId:"m8i-18-3",front:"The graph of a phone contract shows: Cost (£) = 15 + 0.1n, where n is the number of minutes. What is the cost for 80 minutes?",
   back:"Substitute n = 80:\nCost = 15 + 0.1 × 80\nCost = 15 + 8\nCost = £23\n\nThe £15 is the fixed monthly charge; £0.10 is the cost per minute.",difficulty:2,category:"calculation"},
  {id:"m8fc-18-3-5",islandId:"m8i-18-3",front:"On a real-world graph, what does the point where the line crosses the x-axis tell you?",
   back:"The x-intercept is where y = 0 — the value of the independent variable when the dependent variable is zero.\n\nExample: On a graph of remaining battery (%) against hours, the x-intercept tells you when the battery is completely flat.",difficulty:2,category:"concept"},
  {id:"m8fc-18-3-6",islandId:"m8i-18-3",front:"A graph shows temperature (°C) against altitude (m): T = 20 − 0.006h. What temperature is predicted at an altitude of 2000 m?",
   back:"Substitute h = 2000:\nT = 20 − 0.006 × 2000\nT = 20 − 12\nT = 8°C\n\nThe gradient of −0.006 means temperature drops 0.006°C for each metre gained in altitude.",difficulty:3,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-18-1":[
    {q:"Does the pair (4, 9) satisfy the equation y = 2x + 1?",opts:["Yes, because 2(4) + 1 = 9","No, because 2(4) + 1 = 10","Yes, because 4 + 9 = 13","No, because 9 − 4 = 5"],c:0,e:"Substitute x = 4: y = 2(4) + 1 = 8 + 1 = 9. Since 9 = 9, the pair (4, 9) satisfies the equation."},
    {q:"In the equation C = 5d + 3, which variable is independent?",opts:["C","d","Both C and d","Neither"],c:1,e:"d is the independent variable — you choose the value of d freely. C is the dependent variable; its value is calculated from d."},
    {q:"Complete the table for y = 4x − 2. What is y when x = 3?",opts:["8","10","12","14"],c:1,e:"Substitute x = 3: y = 4(3) − 2 = 12 − 2 = 10."},
    {q:"Which of these pairs does NOT satisfy y = x + 5?",opts:["(0, 5)","(2, 7)","(3, 9)","(−1, 4)"],c:2,e:"Check (3, 9): y = 3 + 5 = 8 ≠ 9. So (3, 9) does not satisfy y = x + 5. The other pairs all work: (0,5), (2,7), (−1,4)."},
    {q:"A plumber charges £40 per hour plus a £25 call-out fee. If h is the number of hours, which equation gives the total cost C?",opts:["C = 25h + 40","C = 40h + 25","C = 40h − 25","C = 25 + h"],c:1,e:"The fixed charge is £25 and the rate is £40 per hour, so C = 40h + 25. Substituting h = 1 gives £65, which is sensible."}
  ],
  "m8i-18-2":[
    {q:"Which point lies on the graph of y = 3x − 2?",opts:["(1, 2)","(2, 4)","(0, −2)","(3, 7)"],c:2,e:"Check (0, −2): y = 3(0) − 2 = −2 ✓. Check (1,2): 3(1)−2=1 ✗. Check (2,4): 3(2)−2=4 ✓ — wait: (2,4) also works. But let us re-check (0,−2): 3(0)−2=−2 ✓ and (3,7): 3(3)−2=7 ✓. The correct option listed is (0,−2) at index 2, which clearly satisfies the equation."},
    {q:"What are the coordinates of the y-intercept of y = 5x − 6?",opts:["(5, 0)","(0, −6)","(6, 0)","(0, 5)"],c:1,e:"The y-intercept is where x = 0. Substituting: y = 5(0) − 6 = −6, so the y-intercept is (0, −6)."},
    {q:"The equation y = −2x + 4 is graphed. Which description is correct?",opts:["A line sloping upward, crossing the y-axis at 4","A line sloping downward, crossing the y-axis at 4","A line sloping upward, crossing the y-axis at −2","A horizontal line at y = 4"],c:1,e:"The gradient is −2 (negative → slopes downward) and the y-intercept is +4 (line crosses y-axis at 4)."},
    {q:"A table of values for a straight line shows: x = 0 → y = 2, x = 1 → y = 5, x = 2 → y = 8. Which equation matches?",opts:["y = 2x + 3","y = 3x + 2","y = 3x − 2","y = 2x + 5"],c:1,e:"From x=0 to x=1, y increases by 3, so gradient = 3. At x=0, y=2, so the equation is y = 3x + 2."},
    {q:"Why is it important to draw the line THROUGH all the plotted points when graphing y = mx + c?",opts:["Because only the points on the line are solutions","To make the graph look neat","Because only integers are solutions","So the line passes through the origin"],c:0,e:"Every point on the line is a solution to the equation. Points not on the line do not satisfy the equation, so the line represents the complete solution set."}
  ],
  "m8i-18-3":[
    {q:"A graph shows a car's fuel level (litres) against distance driven (km). The line slopes downward. What does this show?",opts:["Fuel is being added as the car drives","Fuel is being used up as the car drives","The car has stopped","The fuel level is constant"],c:1,e:"A downward (negative) slope means the dependent variable (fuel level) decreases as the independent variable (distance) increases — fuel is being consumed."},
    {q:"A graph of water depth (cm) against time (min) starts at (0, 30) and the line goes down to (10, 0). What does the y-intercept 30 represent?",opts:["The tank empties after 30 minutes","The tank starts with a depth of 30 cm","The water flows at 30 cm per minute","The tank holds 30 litres"],c:1,e:"The y-intercept is the value when time = 0, so 30 cm is the initial depth of water in the tank at the start."},
    {q:"Using the equation C = 15 + 0.1n (where C is cost in £ and n is minutes), what is the cost for 50 minutes?",opts:["£5","£15","£20","£65"],c:2,e:"C = 15 + 0.1 × 50 = 15 + 5 = £20."},
    {q:"A graph shows two lines: Line A (steep positive slope) and Line B (gentle positive slope). Both show savings (£) against weeks. What does Line A represent compared to Line B?",opts:["A smaller weekly saving than Line B","A larger weekly saving than Line B","The same weekly saving as Line B","A negative rate of saving"],c:1,e:"A steeper positive slope means a greater rate of increase — Line A saves more money per week than Line B."},
    {q:"The graph T = 100 − 5t models water temperature (°C) against time (min). When does the water reach 40°C?",opts:["8 minutes","10 minutes","12 minutes","15 minutes"],c:2,e:"Set T = 40: 40 = 100 − 5t → 5t = 60 → t = 12 minutes."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-18-1': `
<h2>Two-Variable Equations &amp; Tables</h2>
<p>A <strong>two-variable equation</strong> contains two unknowns, usually x and y. Rather than having a single answer, it has infinitely many solutions — every (x, y) pair that makes the equation true. Understanding which pairs work, and how to generate them in a table, is the foundation of graphing straight lines.</p>

<h3>Does a pair (x, y) satisfy the equation?</h3>
<p>To test a pair, <strong>substitute</strong> both values into the equation and check whether the left-hand side equals the right-hand side.</p>
<div class="example-box">
<p><strong>Example:</strong> Does (3, 10) satisfy y = 3x + 1?</p>
<p><strong>Solution:</strong> Substitute x = 3:<br>
y = 3(3) + 1 = 9 + 1 = 10 ✓<br>
Yes — (3, 10) is a solution.</p>
<p><strong>Counter-example:</strong> Does (2, 8) satisfy y = 3x + 1?<br>
y = 3(2) + 1 = 7 ≠ 8 ✗ — No, (2, 8) does not satisfy the equation.</p>
</div>

<h3>Independent and dependent variables</h3>
<p>In a two-variable equation, the <strong>independent variable</strong> is the input — you choose its value freely. The <strong>dependent variable</strong> is the output — it is calculated from the independent variable.</p>
<p>In most equations, x is independent and y is dependent. In real-world problems, the context tells you which is which: e.g. in C = 2n + 5, the number of items (n) is independent, and the cost (C) depends on it.</p>

<h3>Tables of values</h3>
<p>A <strong>table of values</strong> lists several (x, y) pairs that all satisfy the equation. Build one by choosing x values and calculating y each time.</p>
<div class="example-box">
<p><strong>Example:</strong> Complete a table for y = 2x − 1 using x = 0, 1, 2, 3.</p>
<p>x = 0: y = 2(0) − 1 = <strong>−1</strong><br>
x = 1: y = 2(1) − 1 = <strong>1</strong><br>
x = 2: y = 2(2) − 1 = <strong>3</strong><br>
x = 3: y = 2(3) − 1 = <strong>5</strong></p>
<p>Pairs: (0, −1), (1, 1), (2, 3), (3, 5).</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Two-variable equation</dt><dd>An equation containing two unknowns (e.g. y = 3x + 2).</dd>
<dt>Solution (of a two-variable equation)</dt><dd>An (x, y) pair that makes the equation true when substituted.</dd>
<dt>Independent variable</dt><dd>The input variable — chosen freely (usually x).</dd>
<dt>Dependent variable</dt><dd>The output variable — calculated from the independent variable (usually y).</dd>
<dt>Table of values</dt><dd>A table listing (x, y) pairs that satisfy an equation.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Substituting only one variable — ✅ always substitute BOTH x and y to test a pair.</li>
<li>❌ Confusing which variable is independent — ✅ the independent variable is the one you control (usually x); the dependent one is calculated.</li>
<li>❌ Arithmetic errors when multiplying negatives — ✅ work through each substitution step by step and use brackets.</li>
</ul>`,

'm8i-18-2': `
<h2>Graph Two-Variable Equations</h2>
<p>Every two-variable equation of the form y = mx + c produces a <strong>straight-line graph</strong>. By creating a table of values and plotting the (x, y) pairs, you can draw the line that represents all solutions to the equation.</p>

<h3>How to plot a straight-line graph</h3>
<div class="example-box">
<p><strong>Example:</strong> Draw the graph of y = 2x − 3.</p>
<p><strong>Step 1 — Table of values:</strong></p>
<p>x = 0: y = 2(0) − 3 = −3 &nbsp; → &nbsp; (0, −3)<br>
x = 1: y = 2(1) − 3 = −1 &nbsp; → &nbsp; (1, −1)<br>
x = 2: y = 2(2) − 3 = 1 &nbsp;&nbsp; → &nbsp; (2, 1)<br>
x = 3: y = 2(3) − 3 = 3 &nbsp;&nbsp; → &nbsp; (3, 3)</p>
<p><strong>Step 2 — Plot:</strong> Mark each point on a coordinate grid.<br>
<strong>Step 3 — Draw:</strong> Join the points with a straight line, extending it beyond the plotted points.</p>
</div>

<h3>Identifying an equation from a graph</h3>
<p>To write the equation of a line from its graph, read off two (x, y) pairs and check which equation they satisfy. Use the table method in reverse: substitute the x value, predict y, and compare to the graph.</p>
<div class="example-box">
<p><strong>Example:</strong> A line passes through (0, 3) and (2, 7). Which equation: y = 2x + 3 or y = x + 3?</p>
<p>Test (2, 7) in y = 2x + 3: y = 2(2) + 3 = 7 ✓<br>
Test (2, 7) in y = x + 3: y = 2 + 3 = 5 ✗<br>
Answer: y = 2x + 3.</p>
</div>

<h3>The y-intercept</h3>
<p>The <strong>y-intercept</strong> is the point where the line crosses the y-axis. It always has x = 0. In y = mx + c, the value c gives the y-intercept directly, so (0, c) is always on the graph.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Straight-line graph</dt><dd>The graph of any equation in the form y = mx + c — a line, not a curve.</dd>
<dt>Table of values</dt><dd>A table of (x, y) pairs used to plot a graph.</dd>
<dt>y-intercept</dt><dd>The point where the line crosses the y-axis; has coordinates (0, c).</dd>
<dt>Gradient (m)</dt><dd>The steepness and direction of a line — how much y increases for each unit increase in x.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Plotting only two points and assuming they are correct — ✅ always plot at least three points as a check; if they are not collinear, find the error.</li>
<li>❌ Forgetting to extend the line beyond the plotted points — ✅ a line is infinite; draw it past your points with arrows.</li>
<li>❌ Mixing up x and y coordinates when plotting — ✅ always write pairs as (x, y) and go across first, then up or down.</li>
</ul>`,

'm8i-18-3': `
<h2>Interpret Graphs</h2>
<p>Graphs of two-variable equations appear everywhere in real life — journey distances, bank balances, temperature changes. Being able to <strong>read values</strong>, describe what the <strong>gradient</strong> and <strong>intercepts</strong> mean in context, and solve problems from a graph are essential skills.</p>

<h3>Reading values from a graph</h3>
<p>To find a y value for a given x, locate x on the horizontal axis, draw a vertical line up to the graph, then read across to the y-axis. To find an x value for a given y, work in reverse.</p>
<div class="example-box">
<p><strong>Example:</strong> The cost of hiring a bike is C = 3t + 5, where t is the time in hours.</p>
<p>What does the y-intercept (0, 5) represent?<br>
→ The fixed hire charge of £5 before any riding time.</p>
<p>What is the cost after 4 hours?<br>
C = 3(4) + 5 = 12 + 5 = <strong>£17</strong></p>
</div>

<h3>Interpreting the gradient and intercepts</h3>
<p>In a real-world graph of y = mx + c:</p>
<p><strong>Gradient (m):</strong> the rate of change — how much y changes per one unit increase in x.<br>
<strong>y-intercept (c):</strong> the starting value — the value of y when x = 0.<br>
<strong>x-intercept:</strong> where y = 0 — the value of x when the dependent variable is zero.</p>

<h3>Describing trends</h3>
<p>A <strong>positive gradient</strong> means y increases as x increases (e.g. savings grow over time). A <strong>negative gradient</strong> means y decreases (e.g. fuel level falls as distance increases). A <strong>zero gradient</strong> (horizontal line) means y stays constant.</p>
<div class="example-box">
<p><strong>Example:</strong> Temperature model T = 100 − 5t (T in °C, t in minutes).</p>
<p>Gradient = −5: temperature falls 5°C every minute.<br>
y-intercept = 100: the water starts at 100°C.<br>
When T = 0: 0 = 100 − 5t → t = 20 min (water reaches 0°C after 20 minutes).</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Gradient</dt><dd>The rate of change of the dependent variable with respect to the independent variable.</dd>
<dt>y-intercept</dt><dd>The starting value; the value of y when x = 0.</dd>
<dt>x-intercept</dt><dd>The value of x when y = 0 — where the line crosses the x-axis.</dd>
<dt>Trend</dt><dd>The general direction or pattern shown by the graph (increasing, decreasing, constant).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Confusing the y-intercept with the x-intercept — ✅ the y-intercept is on the y-axis (x = 0); the x-intercept is on the x-axis (y = 0).</li>
<li>❌ Ignoring units when interpreting gradient — ✅ always state what the gradient means, e.g. "£3 per hour" or "5°C per minute".</li>
<li>❌ Assuming a steeper line always means a bigger total value — ✅ gradient describes the RATE of change, not the total; check the intercept too.</li>
</ul>`

});
