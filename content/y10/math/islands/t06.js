// content/y10/math/islands/t06.js — Year 10 Maths Topic 6: Real-Life & Rate Graphs
// Islands m10i-06-1 .. m10i-06-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-06-1 — Distance–Time Graphs
  {id:"m10fc-06-1-1", islandId:"m10i-06-1", front:"On a distance–time graph, what does the gradient represent?",
   back:"The speed.\n\nGradient = distance ÷ time = speed. A steeper line means a faster speed.", difficulty:2, category:"definition"},
  {id:"m10fc-06-1-2", islandId:"m10i-06-1", front:"What does a horizontal line mean on a distance–time graph?",
   back:"The object is stationary (not moving).\n\nTime passes but the distance does not change, so the speed is zero.", difficulty:1, category:"concept"},
  {id:"m10fc-06-1-3", islandId:"m10i-06-1", front:"A car travels 60 km in 1.5 hours. What is its speed?",
   back:"40 km/h\n\nSpeed = distance ÷ time = 60 ÷ 1.5 = 40 km/h.", difficulty:2, category:"calculation"},
  {id:"m10fc-06-1-4", islandId:"m10i-06-1", front:"On a distance–time graph, what does a line sloping back down to zero mean?",
   back:"The object is returning to its start.\n\nThe distance from home is decreasing back to 0.", difficulty:2, category:"concept"},
  {id:"m10fc-06-1-5", islandId:"m10i-06-1", front:"Which is faster: a gradient of 30 or a gradient of 50 on a distance–time graph?",
   back:"A gradient of 50.\n\nThe steeper the line, the greater the speed, so 50 (km/h) is faster than 30.", difficulty:1, category:"application"},
  {id:"m10fc-06-1-6", islandId:"m10i-06-1", front:"A runner covers 400 m in 50 s, rests, then returns. What is the outward speed?",
   back:"8 m/s\n\nSpeed = 400 ÷ 50 = 8 m/s. The rest shows as a horizontal section on the graph.", difficulty:2, category:"calculation"},

  // m10i-06-2 — Real-Life Graphs & Rates
  {id:"m10fc-06-2-1", islandId:"m10i-06-2", front:"What is a conversion graph used for?",
   back:"Changing between two units, like pounds and euros or miles and kilometres.\n\nRead across and down (or up) to convert a value.", difficulty:1, category:"definition"},
  {id:"m10fc-06-2-2", islandId:"m10i-06-2", front:"On a graph of water filling a container, what does a steep line mean?",
   back:"The water level is rising quickly (a fast rate of filling).\n\nA narrow part of a container fills faster, giving a steeper line.", difficulty:2, category:"concept"},
  {id:"m10fc-06-2-3", islandId:"m10i-06-2", front:"What does the gradient of a real-life graph represent?",
   back:"A rate of change — how fast one quantity changes with another.\n\nE.g. on a cost graph, the gradient is the cost per unit.", difficulty:2, category:"concept"},
  {id:"m10fc-06-2-4", islandId:"m10i-06-2", front:"A taxi graph starts at £3 and rises £2 per mile. Write the cost formula.",
   back:"C = 3 + 2m\n\nThe £3 is the y-intercept (fixed charge); £2 per mile is the gradient.", difficulty:3, category:"application"},
  {id:"m10fc-06-2-5", islandId:"m10i-06-2", front:"On a filling graph, what does a horizontal section mean?",
   back:"The level is not changing — nothing is being added (or the container has stopped filling at that height).", difficulty:2, category:"concept"},
  {id:"m10fc-06-2-6", islandId:"m10i-06-2", front:"£1 = €1.15. Use the rate to convert £40 to euros.",
   back:"€46\n\nMultiply by the rate: 40 × 1.15 = 46. A conversion graph would give the same answer by reading across.", difficulty:2, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m10i-06-1": [
    {q:"A cyclist rides 24 km in 2 hours. What is the speed?", opts:["12 km/h","48 km/h","22 km/h","26 km/h"], c:0,
     e:"Speed = 24 ÷ 2 = 12 km/h."},
    {q:"A horizontal section on a distance–time graph shows the object is:", opts:["Stationary","Speeding up","Returning","Moving fastest"], c:0,
     e:"No change in distance over time means the object is stationary."},
    {q:"Which line on a distance–time graph is the fastest?", opts:["The steepest one","The flattest one","A horizontal one","A curved one"], c:0,
     e:"Steeper gradient = greater speed, so the steepest line is fastest."},
    {q:"A train goes 150 km in 2.5 hours. Find its speed.", opts:["60 km/h","75 km/h","375 km/h","50 km/h"], c:0,
     e:"150 ÷ 2.5 = 60 km/h."},
    {q:"A line sloping downwards to the time axis means the object is:", opts:["Returning to the start","Accelerating","Stationary","Speeding up"], c:0,
     e:"Decreasing distance from the start means it is travelling back."}
  ],
  "m10i-06-2": [
    {q:"On a conversion graph £ to €, you convert by:", opts:["Reading across then down/up","Multiplying by the time","Finding the gradient only","Adding the axes"], c:0,
     e:"Find the value on one axis and read across to the line, then to the other axis."},
    {q:"The gradient of a cost-vs-quantity graph represents:", opts:["The cost per unit","The total cost","The fixed charge","The number of units"], c:0,
     e:"Gradient = change in cost ÷ change in quantity = cost per unit."},
    {q:"A phone plan costs £10 plus £5 per GB. The cost formula is:", opts:["C = 10 + 5g","C = 5 + 10g","C = 15g","C = 50g"], c:0,
     e:"£10 fixed (intercept) + £5 per GB (gradient): C = 10 + 5g."},
    {q:"On a graph of water level vs time, a steeper line means:", opts:["Filling faster","Filling slower","Emptying","Not changing"], c:0,
     e:"A steeper gradient means the level rises more quickly."},
    {q:"£1 = $1.25. Convert £60 to dollars.", opts:["$75","$48","$61.25","$1.25"], c:0,
     e:"60 × 1.25 = $75."}
  ]
});

Object.assign(LESSONS, {
  "m10i-06-1": `<h2>Distance–Time Graphs</h2>
<p>On a <strong>distance–time graph</strong>, the <strong>gradient is the speed</strong> (distance ÷ time). A steeper line is faster, a horizontal line means stationary, and a line sloping back to zero shows a return journey.</p>
<div class="lesson-diagram" data-diagram="math-distance-time"><p class="diagram-caption">Steeper = faster; flat = stopped; downward = returning</p></div>
<h3>Worked example</h3>
<p>A car travels 60 km in 1.5 hours: speed = 60 ÷ 1.5 = <strong>40 km/h</strong>.</p>
<h3>Common mistake</h3>
<p>A flat (horizontal) section does not mean 'slow' — it means <em>stopped</em>. The object stays the same distance from the start while time passes.</p>`,

  "m10i-06-2": `<h2>Real-Life Graphs &amp; Rates</h2>
<p>Real-life graphs show how one quantity changes with another. The <strong>gradient is a rate of change</strong> — cost per unit, speed, or how fast a level rises. <strong>Conversion graphs</strong> let you change between units by reading across and down.</p>
<h3>Worked example</h3>
<p>A taxi charges £3 plus £2 per mile. The cost is <strong>C = 3 + 2m</strong>: the £3 is the fixed start (intercept) and £2 per mile is the gradient.</p>
<h3>Reading shapes</h3>
<p>When a container fills, a narrow section fills quickly (steep line) and a wide section slowly (shallow line); a horizontal part means the level is not changing.</p>`
});
