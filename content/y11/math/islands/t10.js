// content/y11/math/islands/t10.js — Year 11 Maths Topic 10: Trig Graphs & Transformations of Graphs
// Islands m11i-10-1 .. m11i-10-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-10-1 — Trig Graphs
  {id:"m11fc-10-1-1", islandId:"m11i-10-1", front:"What does the graph of y = sin x look like?",
   back:"A smooth wave between −1 and 1, starting at 0, peaking at 90°, back to 0 at 180°.\n\nIt repeats every 360°.", difficulty:2, category:"definition"},
  {id:"m11fc-10-1-2", islandId:"m11i-10-1", front:"What is the period of sin x and cos x?",
   back:"360°.\n\nThe wave repeats itself every full turn of 360°.", difficulty:2, category:"definition"},
  {id:"m11fc-10-1-3", islandId:"m11i-10-1", front:"How does cos x differ from sin x?",
   back:"Same wave shape, but cos starts at 1 (when x = 0).\n\ncos is the sine curve shifted 90° to the left.", difficulty:2, category:"concept"},
  {id:"m11fc-10-1-4", islandId:"m11i-10-1", front:"What is the maximum and minimum value of sin x?",
   back:"Maximum 1, minimum −1.\n\nThe sine and cosine waves stay between −1 and 1.", difficulty:1, category:"concept"},
  {id:"m11fc-10-1-5", islandId:"m11i-10-1", front:"What is sin 180° and cos 90°?",
   back:"sin 180° = 0 and cos 90° = 0.\n\nReading these off the graphs is quicker than a calculator.", difficulty:2, category:"calculation"},
  {id:"m11fc-10-1-6", islandId:"m11i-10-1", front:"How is the tan x graph different?",
   back:"It repeats every 180° and shoots up to infinity (it has vertical asymptotes at 90°, 270°…).", difficulty:3, category:"definition"},

  // m11i-10-2 — Transformations of Graphs
  {id:"m11fc-10-2-1", islandId:"m11i-10-2", front:"What does y = f(x) + a do to a graph?",
   back:"Translates it UP by a (down if a is negative).\n\nA change OUTSIDE the function moves it vertically.", difficulty:3, category:"definition"},
  {id:"m11fc-10-2-2", islandId:"m11i-10-2", front:"What does y = f(x + a) do to a graph?",
   back:"Translates it LEFT by a (right if a is negative).\n\nA change INSIDE the bracket moves it horizontally — and the opposite way to the sign.", difficulty:3, category:"definition"},
  {id:"m11fc-10-2-3", islandId:"m11i-10-2", front:"What does y = −f(x) do?",
   back:"Reflects the graph in the x-axis.\n\nThe minus outside flips it upside down.", difficulty:2, category:"definition"},
  {id:"m11fc-10-2-4", islandId:"m11i-10-2", front:"What does y = f(−x) do?",
   back:"Reflects the graph in the y-axis.\n\nThe minus inside flips it left–right.", difficulty:3, category:"definition"},
  {id:"m11fc-10-2-5", islandId:"m11i-10-2", front:"Why is f(x + 3) a shift LEFT, not right?",
   back:"Because the graph reaches each y-value 3 earlier.\n\nInside-the-bracket changes act in the opposite direction to the sign.", difficulty:3, category:"concept"},
  {id:"m11fc-10-2-6", islandId:"m11i-10-2", front:"The point (2, 5) is on y = f(x). Where is it on y = f(x) + 3?",
   back:"(2, 8)\n\nf(x) + 3 raises every point by 3, so the y-coordinate increases by 3.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-10-1": [
    {q:"The period of y = sin x is:", opts:["360°","180°","90°","720°"], c:0,
     e:"The sine wave repeats every 360°."},
    {q:"The maximum value of cos x is:", opts:["1","0","90","360"], c:0,
     e:"Cosine oscillates between −1 and 1, so the maximum is 1."},
    {q:"At x = 0, the value of cos x is:", opts:["1","0","−1","90"], c:0,
     e:"cos 0° = 1 — the cosine curve starts at its maximum."},
    {q:"sin 180° equals:", opts:["0","1","−1","180"], c:0,
     e:"The sine curve returns to 0 at 180°."},
    {q:"The tan x graph repeats every:", opts:["180°","360°","90°","270°"], c:0,
     e:"Tangent has period 180°."}
  ],
  "m11i-10-2": [
    {q:"y = f(x) + 2 translates the graph:", opts:["Up by 2","Down by 2","Left by 2","Right by 2"], c:0,
     e:"Adding outside the function shifts it up."},
    {q:"y = f(x − 3) translates the graph:", opts:["Right by 3","Left by 3","Up by 3","Down by 3"], c:0,
     e:"Inside the bracket, the shift is opposite to the sign: −3 means right by 3."},
    {q:"y = −f(x) reflects the graph in the:", opts:["x-axis","y-axis","line y = x","origin only"], c:0,
     e:"A minus outside flips the graph in the x-axis."},
    {q:"y = f(−x) reflects the graph in the:", opts:["y-axis","x-axis","line y = x","x-axis and y-axis"], c:0,
     e:"A minus inside flips the graph in the y-axis."},
    {q:"(4, 1) is on y = f(x). On y = f(x) + 5 it becomes:", opts:["(4, 6)","(9, 1)","(4, −4)","(−4, 1)"], c:0,
     e:"+5 outside raises the y-coordinate by 5: (4, 6)."}
  ]
});

Object.assign(LESSONS, {
  "m11i-10-1": `<h2>Trig Graphs</h2>
<p>The <strong>sine</strong> and <strong>cosine</strong> graphs are smooth waves between −1 and 1 that repeat every <strong>360°</strong> (the period). sin x starts at 0; cos x starts at 1 (it is sin shifted 90° left). The <strong>tan</strong> graph repeats every 180° and has vertical asymptotes.</p>
<div class="lesson-diagram" data-diagram="math-trig-graph"><p class="diagram-caption">The sine wave: period 360°, between −1 and 1</p></div>
<h3>Worked example</h3>
<p>Reading off the graph: sin 0° = 0, sin 90° = 1, sin 180° = 0; cos 0° = 1, cos 90° = 0.</p>
<h3>Common mistake</h3>
<p>Remember the values stay between −1 and 1 — a 'sin' answer bigger than 1 means a slip somewhere.</p>`,

  "m11i-10-2": `<h2>Transformations of Graphs</h2>
<p>Four transformations of y = f(x):</p>
<ul>
<li><strong>f(x) + a</strong>: translate up by a (outside → vertical, same direction as the sign).</li>
<li><strong>f(x + a)</strong>: translate left by a (inside → horizontal, <em>opposite</em> to the sign).</li>
<li><strong>−f(x)</strong>: reflect in the x-axis.</li>
<li><strong>f(−x)</strong>: reflect in the y-axis.</li>
</ul>
<h3>Worked example</h3>
<p>The point (2, 5) on y = f(x) moves to (2, 8) on y = f(x) + 3 — every point rises by 3.</p>
<h3>Common mistake</h3>
<p>Inside-the-bracket shifts go the 'wrong' way: f(x + 3) moves the graph 3 to the <em>left</em>, not the right.</p>`
});

FLASHCARDS.push(
  // m11i-10-3 — Solving Trig Equations Graphically
  {id:"m11fc-10-3-1", islandId:"m11i-10-3", front:"How do you find the principal value of a trig equation?",
   back:"Use inverse trig (sin⁻¹, cos⁻¹ or tan⁻¹) on your calculator.\n\nThis gives the FIRST solution; the graph's symmetry gives the rest.", difficulty:2, category:"definition"},
  {id:"m11fc-10-3-2", islandId:"m11i-10-3", front:"For sin x = k, how do you find the second solution in 0°–360°?",
   back:"Second solution = 180° − (first solution).\n\nThe sine curve is symmetric about x = 90°.", difficulty:3, category:"concept"},
  {id:"m11fc-10-3-3", islandId:"m11i-10-3", front:"For cos x = k, how do you find the second solution in 0°–360°?",
   back:"Second solution = 360° − (first solution).\n\nThe cosine curve is symmetric about x = 180°.", difficulty:3, category:"concept"},
  {id:"m11fc-10-3-4", islandId:"m11i-10-3", front:"How often does the tan curve repeat, and what does that mean for solutions?",
   back:"Every 180°.\n\nAdd 180° to a tan solution to find the next one within the range.", difficulty:3, category:"concept"},
  {id:"m11fc-10-3-5", islandId:"m11i-10-3", front:"Solve sin x = 0.5 for 0° ≤ x ≤ 360°.",
   back:"x = 30° or x = 150°.\n\nPrincipal value 30°; the other is 180° − 30° = 150°.", difficulty:3, category:"application"});

Object.assign(QUESTIONS, {
  "m11i-10-3": [
    {q:"The principal value of a trig equation is found using:", opts:["Inverse trig","The period","A protractor","The y-intercept"], c:0,
     e:"sin⁻¹, cos⁻¹ or tan⁻¹ gives the first solution."},
    {q:"For sin x = k, the second solution in 0°–360° is:", opts:["180° − first","360° − first","90° − first","first + 180°"], c:0,
     e:"The sine curve is symmetric about 90°, so the second is 180° − first."},
    {q:"For cos x = k, the second solution in 0°–360° is:", opts:["360° − first","180° − first","90° + first","first + 180°"], c:0,
     e:"The cosine curve is symmetric about 180°, so the second is 360° − first."},
    {q:"The tan curve repeats every:", opts:["180°","360°","90°","270°"], c:0,
     e:"Tangent has period 180°, so solutions repeat every 180°."},
    {q:"Solving sin x = 0.5 for 0° ≤ x ≤ 360° gives:", opts:["30° and 150°","30° and 210°","30° and 330°","60° and 120°"], c:0,
     e:"Principal value 30°; the other is 180° − 30° = 150°."}
  ]
});

Object.assign(LESSONS, {
  "m11i-10-3": `<h2>Solving Trig Equations Graphically</h2>
<p>A trig equation like sin x = 0.5 usually has <strong>more than one</strong> solution in 0°–360°. The trick is to find the <strong>principal value</strong> with inverse trig, then use the <strong>symmetry of the curve</strong> to find the others within the range.</p>
<h3>Using the symmetry</h3>
<ul>
<li><strong>sin x = k:</strong> the second solution is 180° − (first).</li>
<li><strong>cos x = k:</strong> the second solution is 360° − (first).</li>
<li><strong>tan x = k:</strong> the curve repeats every 180°, so add 180° for the next.</li>
</ul>
<h3>Worked example</h3>
<p>Solve sin x = 0.5 for 0° ≤ x ≤ 360°. The principal value is x = 30°; by the symmetry of the sine curve the other solution is 180° − 30° = 150°. So x = 30° or x = 150°.</p>
<h3>Common mistake</h3>
<p>Do not stop at the calculator's first answer — sketch the curve and read off <em>every</em> solution inside the given range.</p>`
});
