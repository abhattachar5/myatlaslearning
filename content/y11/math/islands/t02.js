// content/y11/math/islands/t02.js — Year 11 Maths Topic 2: Quadratic & Other Graphs
// Islands m11i-02-1 .. m11i-02-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-02-1 — Plotting Quadratic Graphs
  {id:"m11fc-02-1-1", islandId:"m11i-02-1", front:"What shape is the graph of a quadratic?",
   back:"A parabola — a smooth U shape (or ∩ if the x² term is negative).\n\nIt is symmetric about a vertical line through its turning point.", difficulty:1, category:"definition"},
  {id:"m11fc-02-1-2", islandId:"m11i-02-1", front:"How do you plot a quadratic graph?",
   back:"Complete a table of values, plot the points, then join them with a SMOOTH curve.\n\nNever join quadratic points with straight lines.", difficulty:2, category:"concept"},
  {id:"m11fc-02-1-3", islandId:"m11i-02-1", front:"For y = x² − 4, find y when x = 3.",
   back:"5\n\ny = 3² − 4 = 9 − 4 = 5.", difficulty:1, category:"calculation"},
  {id:"m11fc-02-1-4", islandId:"m11i-02-1", front:"What do the roots of a quadratic graph represent?",
   back:"Where the curve crosses the x-axis (y = 0).\n\nThey are the solutions of the quadratic equation.", difficulty:2, category:"concept"},
  {id:"m11fc-02-1-5", islandId:"m11i-02-1", front:"For y = x² − 2x − 3, where does it cross the y-axis?",
   back:"(0, −3)\n\nSet x = 0: y = 0 − 0 − 3 = −3.", difficulty:2, category:"calculation"},
  {id:"m11fc-02-1-6", islandId:"m11i-02-1", front:"How can you use a quadratic graph to solve x² − 2x − 3 = 0?",
   back:"Read where the curve crosses the x-axis.\n\nFor y = x² − 2x − 3 the crossings are x = −1 and x = 3.", difficulty:3, category:"application"},

  // m11i-02-2 — Cubic & Reciprocal Graphs
  {id:"m11fc-02-2-1", islandId:"m11i-02-2", front:"What shape is the graph of y = x³?",
   back:"An S-shaped curve that rises from bottom-left to top-right, passing through the origin.", difficulty:2, category:"definition"},
  {id:"m11fc-02-2-2", islandId:"m11i-02-2", front:"What shape is the reciprocal graph y = 1/x?",
   back:"Two separate curves in opposite quadrants that approach but never touch the axes.\n\nThe axes are asymptotes.", difficulty:2, category:"definition"},
  {id:"m11fc-02-2-3", islandId:"m11i-02-2", front:"What is an asymptote?",
   back:"A line that a curve gets ever closer to but never reaches.\n\nFor y = 1/x, both the x-axis and y-axis are asymptotes.", difficulty:2, category:"definition"},
  {id:"m11fc-02-2-4", islandId:"m11i-02-2", front:"For y = x³, find y when x = −2.",
   back:"−8\n\n(−2)³ = −8. Cubing a negative gives a negative.", difficulty:2, category:"calculation"},
  {id:"m11fc-02-2-5", islandId:"m11i-02-2", front:"Why can't you evaluate y = 1/x at x = 0?",
   back:"Because dividing by zero is undefined.\n\nThat is why the curve never touches the y-axis (x = 0).", difficulty:3, category:"concept"},
  {id:"m11fc-02-2-6", islandId:"m11i-02-2", front:"How many times can a cubic graph cross the x-axis?",
   back:"Up to three times.\n\nIt can cross once, twice (touching) or three times.", difficulty:2, category:"application"},

  // m11i-02-3 — Recognising Graph Shapes
  {id:"m11fc-02-3-1", islandId:"m11i-02-3", front:"What does the graph of y = mx + c look like?",
   back:"A straight line, gradient m and y-intercept c.\n\nLinear equations (highest power of x is 1) give straight lines.", difficulty:1, category:"concept"},
  {id:"m11fc-02-3-2", islandId:"m11i-02-3", front:"What shape does y = ax² give?",
   back:"A parabola (U or ∩).\n\nThe highest power of x is 2.", difficulty:1, category:"concept"},
  {id:"m11fc-02-3-3", islandId:"m11i-02-3", front:"What does an exponential graph y = kˣ look like?",
   back:"A curve that grows (or decays) ever faster, never touching the x-axis.\n\nGrowth rises steeply; decay falls towards zero.", difficulty:2, category:"definition"},
  {id:"m11fc-02-3-4", islandId:"m11i-02-3", front:"Match: which equation gives an S-shaped curve through the origin?",
   back:"y = x³ (a cubic).\n\nThe cube of x gives the characteristic S shape.", difficulty:2, category:"application"},
  {id:"m11fc-02-3-5", islandId:"m11i-02-3", front:"How do you tell an exponential decay graph from a reciprocal graph?",
   back:"Exponential decay is one smooth curve approaching the x-axis; a reciprocal graph has TWO branches in opposite quadrants.", difficulty:3, category:"concept"},
  {id:"m11fc-02-3-6", islandId:"m11i-02-3", front:"The highest power of x tells you what?",
   back:"The basic shape: power 1 → line; power 2 → parabola; power 3 → cubic.\n\nA 1/x term gives a reciprocal graph; kˣ gives an exponential.", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m11i-02-1": [
    {q:"For y = x² + 1, find y when x = −3.", opts:["10","−8","7","9"], c:0,
     e:"(−3)² + 1 = 9 + 1 = 10."},
    {q:"Quadratic graphs should be drawn as:", opts:["A smooth curve","Straight line segments","A dashed line","A single point"], c:0,
     e:"Join the plotted points with a smooth parabola."},
    {q:"For y = x² − 5x + 6, where does it cross the y-axis?", opts:["(0, 6)","(0, −6)","(6, 0)","(0, 5)"], c:0,
     e:"Set x = 0: y = 6."},
    {q:"The roots of y = x² − 9 are where:", opts:["y = 0 (x = ±3)","x = 0","y = 9","x = 9"], c:0,
     e:"Roots are the x-axis crossings: x² − 9 = 0 gives x = 3 and x = −3."},
    {q:"The turning point of a U-shaped parabola is its:", opts:["Lowest point","Highest point","y-intercept","Root"], c:0,
     e:"A U-shaped (positive x²) parabola has a minimum at its turning point."}
  ],
  "m11i-02-2": [
    {q:"The graph of y = x³ is:", opts:["An S-shaped curve","A parabola","A straight line","Two branches"], c:0,
     e:"A cubic has the characteristic S shape through the origin."},
    {q:"For y = x³, y when x = −2 is:", opts:["−8","8","−6","6"], c:0,
     e:"(−2)³ = −8."},
    {q:"For y = 1/x, the axes act as:", opts:["Asymptotes","Roots","Tangents","Turning points"], c:0,
     e:"The curve approaches the axes without touching them — they are asymptotes."},
    {q:"y = 1/x is undefined at:", opts:["x = 0","x = 1","x = −1","y = 0"], c:0,
     e:"Dividing by zero is undefined, so x = 0 is excluded."},
    {q:"A reciprocal graph has:", opts:["Two branches","One U shape","A straight line","An S shape"], c:0,
     e:"y = 1/x has two separate branches in opposite quadrants."}
  ],
  "m11i-02-3": [
    {q:"y = 2x + 3 gives which shape?", opts:["A straight line","A parabola","A cubic","A reciprocal"], c:0,
     e:"Highest power of x is 1, so it is a straight line."},
    {q:"Which equation gives a parabola?", opts:["y = x² − 4","y = 2x + 1","y = 1/x","y = 3ˣ"], c:0,
     e:"x² as the highest power gives a parabola."},
    {q:"An exponential growth graph:", opts:["Rises ever more steeply","Is a straight line","Has a turning point","Has two branches"], c:0,
     e:"y = kˣ (k > 1) rises faster and faster, never touching the x-axis."},
    {q:"Which gives an S-shaped curve through the origin?", opts:["y = x³","y = x²","y = 1/x","y = x + 2"], c:0,
     e:"A cubic, y = x³, is S-shaped through the origin."},
    {q:"The highest power of x mainly tells you the:", opts:["Basic shape of the graph","y-intercept","Gradient","Number of axes"], c:0,
     e:"Power 1 → line, 2 → parabola, 3 → cubic; it sets the overall shape."}
  ]
});

Object.assign(LESSONS, {
  "m11i-02-1": `<h2>Plotting Quadratic Graphs</h2>
<p>A quadratic graph is a <strong>parabola</strong> — a smooth U shape (∩ if the x² term is negative). To plot one, complete a <strong>table of values</strong>, plot the points, and join them with a smooth curve (never straight segments).</p>
<div class="lesson-diagram" data-diagram="math-parabola"><p class="diagram-caption">Roots (y = 0), turning point and y-intercept of a parabola</p></div>
<h3>Worked example</h3>
<p>For y = x² − 2x − 3: the y-intercept is (0, −3), and the curve crosses the x-axis at x = −1 and x = 3 — these roots are the solutions of x² − 2x − 3 = 0.</p>
<h3>Common mistake</h3>
<p>Plot enough points either side of the turning point and join with a smooth curve — a 'pointy' bottom from straight lines loses marks.</p>`,

  "m11i-02-2": `<h2>Cubic &amp; Reciprocal Graphs</h2>
<p>A <strong>cubic</strong> y = x³ is an S-shaped curve through the origin, rising from bottom-left to top-right. A <strong>reciprocal</strong> y = 1/x has two branches in opposite quadrants that approach the axes without touching — the axes are <strong>asymptotes</strong>.</p>
<div class="lesson-diagram" data-diagram="math-cubic-reciprocal"><p class="diagram-caption">A cubic (S-shape) and a reciprocal graph (two branches)</p></div>
<h3>Worked example</h3>
<p>For y = x³, when x = −2, y = (−2)³ = −8 — cubing a negative gives a negative.</p>
<h3>Common mistake</h3>
<p>y = 1/x is undefined at x = 0 (you cannot divide by zero), which is why the curve never touches the y-axis.</p>`,

  "m11i-02-3": `<h2>Recognising Graph Shapes</h2>
<p>The <strong>highest power of x</strong> sets the basic shape: power 1 → a straight line; power 2 → a parabola; power 3 → a cubic (S-shape). A 1/x term gives a <strong>reciprocal</strong> graph (two branches), and y = kˣ gives an <strong>exponential</strong> graph.</p>
<h3>Exponential vs reciprocal</h3>
<p>An exponential <em>growth</em> curve rises ever more steeply; exponential <em>decay</em> falls towards the x-axis. A reciprocal graph is different — it has two separate branches in opposite quadrants.</p>
<h3>Common mistake</h3>
<p>Check the equation's form before sketching: 3ˣ (exponential) and 3/x (reciprocal) look similar in words but give very different graphs.</p>`
});

FLASHCARDS.push(
  // m11i-02-4 — Exponential Graphs & Equations
  {id:"m11fc-02-4-1", islandId:"m11i-02-4", front:"What is the general form of an exponential function?",
   back:"y = kaˣ, where a > 0.\n\nThe variable x is the POWER, which makes the curve grow or decay ever faster.", difficulty:2, category:"definition"},
  {id:"m11fc-02-4-2", islandId:"m11i-02-4", front:"When does y = kaˣ show growth, and when decay?",
   back:"Growth when a > 1; decay when 0 < a < 1.\n\nGrowth rises ever more steeply; decay falls towards zero.", difficulty:2, category:"concept"},
  {id:"m11fc-02-4-3", islandId:"m11i-02-4", front:"Through which point does y = kaˣ always pass?",
   back:"(0, k).\n\nWhen x = 0, aˣ = a⁰ = 1, so y = k × 1 = k.", difficulty:2, category:"concept"},
  {id:"m11fc-02-4-4", islandId:"m11i-02-4", front:"For y = 2ˣ, find y when x = 0, 1, 2 and 3.",
   back:"1, 2, 4 and 8.\n\n2⁰ = 1, 2¹ = 2, 2² = 4, 2³ = 8 — the curve rises ever more steeply (growth).", difficulty:2, category:"calculation"},
  {id:"m11fc-02-4-5", islandId:"m11i-02-4", front:"Why does y = 2ˣ never reach y = 0?",
   back:"The x-axis is an asymptote.\n\nFor positive k the curve gets ever closer to y = 0 but never touches it.", difficulty:3, category:"application"});

Object.assign(QUESTIONS, {
  "m11i-02-4": [
    {q:"The general exponential function is:", opts:["y = kaˣ","y = ax²","y = mx + c","y = k/x"], c:0,
     e:"y = kaˣ with a > 0; x is the power."},
    {q:"y = kaˣ gives exponential growth when:", opts:["a > 1","0 < a < 1","a = 1","a = 0"], c:0,
     e:"For a > 1 the curve rises ever more steeply — growth."},
    {q:"The graph of y = kaˣ passes through:", opts:["(0, k)","(k, 0)","(0, 0)","(1, k)"], c:0,
     e:"a⁰ = 1, so y = k when x = 0, giving (0, k)."},
    {q:"For y = 2ˣ, the value when x = 3 is:", opts:["8","6","9","16"], c:0,
     e:"2³ = 8."},
    {q:"For positive k, the x-axis is the curve's:", opts:["Asymptote","Root","Turning point","Tangent"], c:0,
     e:"The curve approaches y = 0 but never reaches it — the x-axis is an asymptote."}
  ]
});

Object.assign(LESSONS, {
  "m11i-02-4": `<h2>Exponential Graphs &amp; Equations</h2>
<p>An <strong>exponential function</strong> has the form y = kaˣ, where a &gt; 0. Here x is the <em>power</em>, so the value changes by a constant multiplier for each step in x. This models real situations such as <strong>compound interest</strong>, <strong>population growth</strong> and <strong>radioactive decay</strong>.</p>
<h3>Growth and decay</h3>
<p>If a &gt; 1 the graph shows <strong>growth</strong> — it rises ever more steeply. If 0 &lt; a &lt; 1 it shows <strong>decay</strong> — it falls towards the x-axis. Every such curve passes through (0, k), because a⁰ = 1.</p>
<h3>The asymptote</h3>
<p>For k &gt; 0 the curve never reaches y = 0: the x-axis is an <strong>asymptote</strong> it gets ever closer to but never touches.</p>
<h3>Worked example</h3>
<p>For y = 2ˣ: when x = 0, y = 1; x = 1, y = 2; x = 2, y = 4; x = 3, y = 8. The curve rises ever more steeply — that is growth. By contrast y = (½)ˣ falls towards zero — that is decay.</p>
<h3>Common mistake</h3>
<p>Do not confuse y = 2ˣ (the power changes) with y = x² (the base changes). They give completely different graphs — only the exponential keeps multiplying by the same factor.</p>`
});
