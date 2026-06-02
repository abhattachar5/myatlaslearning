// content/y10/math/islands/t05.js — Year 10 Maths Topic 5: Straight-Line Graphs
// Islands m10i-05-1 .. m10i-05-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-05-1 — Gradient & y = mx + c
  {id:"m10fc-05-1-1", islandId:"m10i-05-1", front:"What do m and c stand for in y = mx + c?",
   back:"m is the gradient (steepness); c is the y-intercept (where the line crosses the y-axis).", difficulty:1, category:"definition"},
  {id:"m10fc-05-1-2", islandId:"m10i-05-1", front:"How do you find the gradient between two points?",
   back:"Gradient = change in y ÷ change in x (rise over run).\n\nm = (y₂ − y₁)/(x₂ − x₁).", difficulty:2, category:"definition"},
  {id:"m10fc-05-1-3", islandId:"m10i-05-1", front:"Find the gradient between (1, 2) and (4, 11).",
   back:"3\n\nm = (11 − 2)/(4 − 1) = 9/3 = 3.", difficulty:2, category:"calculation"},
  {id:"m10fc-05-1-4", islandId:"m10i-05-1", front:"State the gradient and y-intercept of y = 4x − 3.",
   back:"Gradient 4, y-intercept −3.\n\nThe number in front of x is the gradient; the constant is the y-intercept.", difficulty:1, category:"calculation"},
  {id:"m10fc-05-1-5", islandId:"m10i-05-1", front:"What does a negative gradient look like?",
   back:"A line sloping DOWNWARDS from left to right.\n\nA positive gradient slopes up; a zero gradient is horizontal.", difficulty:2, category:"concept"},
  {id:"m10fc-05-1-6", islandId:"m10i-05-1", front:"Rearrange 2y = 6x + 8 into y = mx + c and state the gradient.",
   back:"y = 3x + 4, gradient 3.\n\nDivide every term by 2 first to get y on its own.", difficulty:3, category:"application"},

  // m10i-05-2 — Finding the Equation of a Line
  {id:"m10fc-05-2-1", islandId:"m10i-05-2", front:"How do you find the equation of a line from its graph?",
   back:"Read the y-intercept (c) and work out the gradient (m), then write y = mx + c.", difficulty:2, category:"concept"},
  {id:"m10fc-05-2-2", islandId:"m10i-05-2", front:"A line has gradient 2 and passes through (0, −1). Find its equation.",
   back:"y = 2x − 1\n\nm = 2 and the y-intercept is −1, so y = 2x − 1.", difficulty:2, category:"calculation"},
  {id:"m10fc-05-2-3", islandId:"m10i-05-2", front:"A line has gradient 3 and passes through (2, 5). Find c.",
   back:"c = −1, so y = 3x − 1.\n\nSubstitute: 5 = 3(2) + c → 5 = 6 + c → c = −1.", difficulty:3, category:"calculation"},
  {id:"m10fc-05-2-4", islandId:"m10i-05-2", front:"How do you find the equation through two points?",
   back:"Find the gradient first, then substitute one point to find c.\n\nGradient from the two points, then solve y = mx + c for c.", difficulty:3, category:"concept"},
  {id:"m10fc-05-2-5", islandId:"m10i-05-2", front:"Find the equation of the line through (1, 4) and (3, 10).",
   back:"y = 3x + 1\n\nGradient = (10 − 4)/(3 − 1) = 3. Substitute (1, 4): 4 = 3 + c → c = 1.", difficulty:3, category:"application"},
  {id:"m10fc-05-2-6", islandId:"m10i-05-2", front:"A horizontal line passes through (0, 5). What is its equation?",
   back:"y = 5\n\nA horizontal line has gradient 0, so y is always 5. A vertical line through (3, 0) would be x = 3.", difficulty:2, category:"concept"},

  // m10i-05-3 — Parallel & Perpendicular Lines
  {id:"m10fc-05-3-1", islandId:"m10i-05-3", front:"What is true about the gradients of parallel lines?",
   back:"They are EQUAL.\n\nParallel lines never meet, so they have the same gradient (but different intercepts).", difficulty:2, category:"definition"},
  {id:"m10fc-05-3-2", islandId:"m10i-05-3", front:"What is the gradient rule for perpendicular lines?",
   back:"The gradients multiply to −1 (negative reciprocal).\n\nIf one gradient is m, the perpendicular gradient is −1/m.", difficulty:2, category:"definition"},
  {id:"m10fc-05-3-3", islandId:"m10i-05-3", front:"A line is parallel to y = 3x + 1 and passes through (0, 4). Find its equation.",
   back:"y = 3x + 4\n\nParallel → same gradient 3; the y-intercept is 4.", difficulty:2, category:"calculation"},
  {id:"m10fc-05-3-4", islandId:"m10i-05-3", front:"What is the perpendicular gradient to a line with gradient 2?",
   back:"−1/2\n\nThe negative reciprocal of 2 is −1/2 (flip and change the sign).", difficulty:2, category:"calculation"},
  {id:"m10fc-05-3-5", islandId:"m10i-05-3", front:"Find the gradient of a line perpendicular to y = −¼x + 3.",
   back:"4\n\nThe negative reciprocal of −¼ is 4.", difficulty:3, category:"application"},
  {id:"m10fc-05-3-6", islandId:"m10i-05-3", front:"A line is perpendicular to y = 2x and passes through (0, 1). Find its equation.",
   back:"y = −½x + 1\n\nPerpendicular gradient = −1/2; y-intercept 1.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m10i-05-1": [
    {q:"Find the gradient between (2, 3) and (5, 12).", opts:["3","9","1/3","4"], c:0,
     e:"m = (12 − 3)/(5 − 2) = 9/3 = 3."},
    {q:"State the gradient of y = 5x + 2.", opts:["5","2","7","−5"], c:0,
     e:"The coefficient of x is the gradient: 5."},
    {q:"Where does y = 2x − 7 cross the y-axis?", opts:["(0, −7)","(0, 2)","(−7, 0)","(0, 7)"], c:0,
     e:"The y-intercept is c = −7, so it crosses at (0, −7)."},
    {q:"Rearrange 3y = 9x − 6 to find the gradient.", opts:["3","9","−2","6"], c:0,
     e:"Divide by 3: y = 3x − 2, so the gradient is 3."},
    {q:"Which line is steepest?", opts:["y = 5x","y = 2x","y = x + 9","y = 0.5x"], c:0,
     e:"Steepness is the size of the gradient; 5 is the largest, so y = 5x is steepest."}
  ],
  "m10i-05-2": [
    {q:"A line has gradient 2 and y-intercept 3. Its equation is:", opts:["y = 2x + 3","y = 3x + 2","y = 2x − 3","y = 6x"], c:0,
     e:"y = mx + c with m = 2 and c = 3 gives y = 2x + 3."},
    {q:"A line of gradient 4 passes through (1, 6). Find c.", opts:["2","6","10","−2"], c:0,
     e:"6 = 4(1) + c → c = 2."},
    {q:"Find the equation through (0, 2) and (2, 8).", opts:["y = 3x + 2","y = 2x + 3","y = 3x − 2","y = 4x + 2"], c:0,
     e:"Gradient = (8 − 2)/(2 − 0) = 3; y-intercept 2, so y = 3x + 2."},
    {q:"The equation of a horizontal line through (4, −2) is:", opts:["y = −2","x = 4","y = 4","x = −2"], c:0,
     e:"Horizontal lines have the form y = constant, here y = −2."},
    {q:"A line of gradient −1 passes through (3, 1). Find its equation.", opts:["y = −x + 4","y = −x − 4","y = x + 4","y = −x + 2"], c:0,
     e:"1 = −1(3) + c → c = 4, so y = −x + 4."}
  ],
  "m10i-05-3": [
    {q:"Which line is parallel to y = 4x − 1?", opts:["y = 4x + 5","y = −4x + 5","y = ¼x","y = x − 1"], c:0,
     e:"Parallel lines share the gradient 4; only y = 4x + 5 does."},
    {q:"The perpendicular gradient to a line with gradient 3 is:", opts:["−1/3","3","1/3","−3"], c:0,
     e:"The negative reciprocal of 3 is −1/3."},
    {q:"A line perpendicular to y = ½x has gradient:", opts:["−2","2","½","−½"], c:0,
     e:"The negative reciprocal of ½ is −2."},
    {q:"A line parallel to y = −2x + 1 through (0, 5) is:", opts:["y = −2x + 5","y = 2x + 5","y = −½x + 5","y = −2x + 1"], c:0,
     e:"Same gradient −2, y-intercept 5: y = −2x + 5."},
    {q:"Two lines are perpendicular. One has gradient −5. The other has gradient:", opts:["1/5","−1/5","5","−5"], c:0,
     e:"Negative reciprocal of −5 is +1/5 (flip and change sign)."}
  ]
});

Object.assign(LESSONS, {
  "m10i-05-1": `<h2>Gradient &amp; y = mx + c</h2>
<p>A straight line is described by <strong>y = mx + c</strong>: <strong>m</strong> is the gradient (steepness) and <strong>c</strong> is the y-intercept. The gradient between two points is <strong>rise ÷ run</strong> = (y₂ − y₁)/(x₂ − x₁).</p>
<div class="lesson-diagram" data-diagram="math-gradient-intercept"><p class="diagram-caption">The gradient m is rise over run; c is where the line meets the y-axis</p></div>
<h3>Worked example</h3>
<p>Find the gradient between (1, 2) and (4, 11): m = (11 − 2)/(4 − 1) = 9/3 = <strong>3</strong>.</p>
<h3>Common mistake</h3>
<p>Read the gradient only when y is on its own. For 2y = 6x + 8, first divide by 2 to get y = 3x + 4, so the gradient is 3 (not 6).</p>`,

  "m10i-05-2": `<h2>Finding the Equation of a Line</h2>
<p>To find <strong>y = mx + c</strong> you need the gradient m and the intercept c. From a graph, read c off the y-axis and work out m. From a gradient and a point, substitute to find c. From two points, find the gradient first.</p>
<h3>Worked example</h3>
<p>Find the line through (1, 4) and (3, 10).</p>
<ul>
<li>Gradient: (10 − 4)/(3 − 1) = 3.</li>
<li>Substitute (1, 4): 4 = 3(1) + c → c = 1, so <strong>y = 3x + 1</strong>.</li>
</ul>
<h3>Special lines</h3>
<p>A horizontal line is y = constant; a vertical line is x = constant.</p>`,

  "m10i-05-3": `<h2>Parallel &amp; Perpendicular Lines</h2>
<p>Two gradient rules unlock these problems:</p>
<ul>
<li><strong>Parallel</strong> lines have <strong>equal</strong> gradients.</li>
<li><strong>Perpendicular</strong> lines have gradients that multiply to −1 — each is the <strong>negative reciprocal</strong> of the other (flip the fraction and change the sign).</li>
</ul>
<h3>Worked example</h3>
<p>A line perpendicular to y = 2x through (0, 1): the perpendicular gradient is −1/2, so the line is <strong>y = −½x + 1</strong>.</p>
<h3>Common mistake</h3>
<p>'Negative reciprocal' means both steps — flip <em>and</em> change sign. The perpendicular gradient to 3 is −1/3, not 1/3 or −3.</p>`
});
