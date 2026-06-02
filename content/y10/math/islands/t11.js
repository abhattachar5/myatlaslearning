// content/y10/math/islands/t11.js — Year 10 Maths Topic 11: Compound Measures & Proportion
// Islands m10i-11-1 .. m10i-11-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-11-1 — Speed, Density & Pressure
  {id:"m10fc-11-1-1", islandId:"m10i-11-1", front:"What is a compound measure?",
   back:"A measure made from two others, like speed (distance per time) or density (mass per volume).", difficulty:1, category:"definition"},
  {id:"m10fc-11-1-2", islandId:"m10i-11-1", front:"State the speed formula and its rearrangements.",
   back:"speed = distance ÷ time.\nAlso distance = speed × time and time = distance ÷ speed.", difficulty:2, category:"definition"},
  {id:"m10fc-11-1-3", islandId:"m10i-11-1", front:"A car travels 150 km in 3 hours. Find its average speed.",
   back:"50 km/h\n\nspeed = 150 ÷ 3 = 50 km/h.", difficulty:2, category:"calculation"},
  {id:"m10fc-11-1-4", islandId:"m10i-11-1", front:"State the density formula.",
   back:"density = mass ÷ volume.\n\nRearranges to mass = density × volume and volume = mass ÷ density.", difficulty:2, category:"definition"},
  {id:"m10fc-11-1-5", islandId:"m10i-11-1", front:"A block has mass 240 g and volume 30 cm³. Find its density.",
   back:"8 g/cm³\n\ndensity = 240 ÷ 30 = 8 g/cm³.", difficulty:2, category:"calculation"},
  {id:"m10fc-11-1-6", islandId:"m10i-11-1", front:"How does a formula triangle help?",
   back:"Cover the quantity you want; the triangle shows whether to multiply or divide.\n\nFor D over S×T: cover D → S × T; cover S → D ÷ T.", difficulty:2, category:"concept"},

  // m10i-11-2 — Direct & Inverse Proportion
  {id:"m10fc-11-2-1", islandId:"m10i-11-2", front:"What does y ∝ x (direct proportion) mean?",
   back:"y = kx for some constant k.\n\nAs x multiplies, y multiplies by the same factor; the graph is a straight line through the origin.", difficulty:2, category:"definition"},
  {id:"m10fc-11-2-2", islandId:"m10i-11-2", front:"How do you find the constant of proportionality k?",
   back:"Substitute a known pair of values and solve.\n\nIf y = 12 when x = 3 and y = kx, then 12 = 3k → k = 4.", difficulty:2, category:"concept"},
  {id:"m10fc-11-2-3", islandId:"m10i-11-2", front:"y is directly proportional to x, and y = 20 when x = 4. Find y when x = 7.",
   back:"35\n\nk = 20 ÷ 4 = 5, so y = 5x; when x = 7, y = 35.", difficulty:3, category:"calculation"},
  {id:"m10fc-11-2-4", islandId:"m10i-11-2", front:"What does inverse proportion y ∝ 1/x mean?",
   back:"y = k/x.\n\nAs x multiplies, y divides by the same factor; their product xy stays constant.", difficulty:2, category:"definition"},
  {id:"m10fc-11-2-5", islandId:"m10i-11-2", front:"y is inversely proportional to x, and y = 6 when x = 2. Find y when x = 4.",
   back:"3\n\nk = xy = 6 × 2 = 12, so y = 12/x; when x = 4, y = 3.", difficulty:3, category:"calculation"},
  {id:"m10fc-11-2-6", islandId:"m10i-11-2", front:"How do the graphs of direct and inverse proportion differ?",
   back:"Direct: a straight line through the origin. Inverse: a curve that falls as x increases (never touching the axes).", difficulty:2, category:"concept"},

  // m10i-11-3 — Ratio & Proportion Problems
  {id:"m10fc-11-3-1", islandId:"m10i-11-3", front:"How do you find the best value between two pack sizes?",
   back:"Work out the price per unit (or amount per pound) for each, then compare.\n\nThe lower price-per-unit is better value.", difficulty:2, category:"concept"},
  {id:"m10fc-11-3-2", islandId:"m10i-11-3", front:"A recipe for 4 uses 200 g flour. How much for 10 people?",
   back:"500 g\n\nPer person: 200 ÷ 4 = 50 g; for 10: 10 × 50 = 500 g.", difficulty:2, category:"calculation"},
  {id:"m10fc-11-3-3", islandId:"m10i-11-3", front:"Concrete mixes cement : sand = 1 : 4. How much sand for 3 kg of cement?",
   back:"12 kg\n\nSand is 4 times the cement: 4 × 3 = 12 kg.", difficulty:2, category:"application"},
  {id:"m10fc-11-3-4", islandId:"m10i-11-3", front:"How do you work backwards from one part of a ratio?",
   back:"Find the value of one share first, then scale to the part you need.\n\nDivide the known part by its number of shares.", difficulty:3, category:"concept"},
  {id:"m10fc-11-3-5", islandId:"m10i-11-3", front:"Paint is mixed red : white = 2 : 3. There are 15 litres of white. How much red?",
   back:"10 litres\n\nOne share = 15 ÷ 3 = 5 litres. Red = 2 × 5 = 10 litres.", difficulty:3, category:"application"},
  {id:"m10fc-11-3-6", islandId:"m10i-11-3", front:"6 workers take 10 days. How long would 4 workers take (same job)?",
   back:"15 days\n\nInverse proportion: total = 6 × 10 = 60 worker-days; 60 ÷ 4 = 15 days.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m10i-11-1": [
    {q:"A runner covers 100 m in 20 s. Find the speed.", opts:["5 m/s","2000 m/s","0.2 m/s","80 m/s"], c:0,
     e:"speed = 100 ÷ 20 = 5 m/s."},
    {q:"density = mass ÷ volume. A 600 g object of volume 200 cm³ has density:", opts:["3 g/cm³","0.33 g/cm³","800 g/cm³","120000 g/cm³"], c:0,
     e:"600 ÷ 200 = 3 g/cm³."},
    {q:"distance = speed × time. At 60 km/h for 2.5 hours you travel:", opts:["150 km","24 km","62.5 km","57.5 km"], c:0,
     e:"60 × 2.5 = 150 km."},
    {q:"A car travels 90 miles at 45 mph. The time taken is:", opts:["2 hours","4 hours","45 hours","0.5 hours"], c:0,
     e:"time = distance ÷ speed = 90 ÷ 45 = 2 hours."},
    {q:"Mass = density × volume. Density 5 g/cm³, volume 12 cm³ gives mass:", opts:["60 g","2.4 g","17 g","0.42 g"], c:0,
     e:"5 × 12 = 60 g."}
  ],
  "m10i-11-2": [
    {q:"y ∝ x and y = 15 when x = 5. Find k.", opts:["3","75","10","5"], c:0,
     e:"k = y ÷ x = 15 ÷ 5 = 3, so y = 3x."},
    {q:"y = 4x. When x = 9, y =", opts:["36","13","2.25","5"], c:0,
     e:"y = 4 × 9 = 36."},
    {q:"y is inversely proportional to x; y = 8 when x = 3. Find k.", opts:["24","2.67","11","5"], c:0,
     e:"For y = k/x, k = xy = 8 × 3 = 24."},
    {q:"y = 24/x. When x = 6, y =", opts:["4","144","18","30"], c:0,
     e:"y = 24 ÷ 6 = 4."},
    {q:"The graph of direct proportion is:", opts:["A straight line through the origin","A curve","A horizontal line","A parabola"], c:0,
     e:"y = kx passes through (0,0) as a straight line."}
  ],
  "m10i-11-3": [
    {q:"A recipe for 4 uses 600 g flour. For 6 people you need:", opts:["900 g","400 g","1000 g","150 g"], c:0,
     e:"Per person 600 ÷ 4 = 150 g; for 6: 6 × 150 = 900 g."},
    {q:"Cement : sand = 1 : 5. For 4 kg cement you need sand:", opts:["20 kg","9 kg","0.8 kg","5 kg"], c:0,
     e:"Sand is 5 × cement = 5 × 4 = 20 kg."},
    {q:"Red : white = 3 : 4 with 12 litres of red. White needed:", opts:["16 litres","9 litres","48 litres","7 litres"], c:0,
     e:"One share = 12 ÷ 3 = 4 litres; white = 4 × 4 = 16 litres."},
    {q:"8 people paint a fence in 6 hours. How long for 4 people?", opts:["12 hours","3 hours","2 hours","48 hours"], c:0,
     e:"Inverse: total = 8 × 6 = 48 person-hours; 48 ÷ 4 = 12 hours."},
    {q:"6 for £2.40 or 10 for £3.50 — which is better value?", opts:["10 for £3.50","6 for £2.40","Equal","Cannot tell"], c:0,
     e:"Unit price: 40p each vs 35p each, so the 10-pack is cheaper."}
  ]
});

Object.assign(LESSONS, {
  "m10i-11-1": `<h2>Speed, Density &amp; Pressure</h2>
<p><strong>Compound measures</strong> combine two quantities: speed = distance ÷ time, density = mass ÷ volume, pressure = force ÷ area. A <strong>formula triangle</strong> shows whether to multiply or divide — cover the quantity you want and read off the rest.</p>
<div class="lesson-diagram" data-diagram="math-formula-triangle"><p class="diagram-caption">Cover the quantity you want: D = S×T, S = D÷T, T = D÷S</p></div>
<h3>Worked example</h3>
<p>A block of mass 240 g and volume 30 cm³ has density = 240 ÷ 30 = <strong>8 g/cm³</strong>.</p>
<h3>Common mistake</h3>
<p>Keep the units consistent — convert minutes to hours (or km to m) before using a formula, or the answer will be out by a factor.</p>`,

  "m10i-11-2": `<h2>Direct &amp; Inverse Proportion</h2>
<p>In <strong>direct proportion</strong>, y ∝ x means y = kx — the graph is a straight line through the origin. In <strong>inverse proportion</strong>, y ∝ 1/x means y = k/x — as x grows, y shrinks and their product stays constant. Always find the constant <strong>k</strong> first.</p>
<h3>Worked example</h3>
<p>y is directly proportional to x, with y = 20 when x = 4. Then k = 20 ÷ 4 = 5, so y = 5x; when x = 7, y = <strong>35</strong>.</p>
<h3>Inverse example</h3>
<p>y ∝ 1/x with y = 6 when x = 2: k = xy = 12, so y = 12/x; when x = 4, y = 3.</p>`,

  "m10i-11-3": `<h2>Ratio &amp; Proportion Problems</h2>
<p>Harder problems combine ratio, scaling and best-value comparisons. The key skill is finding the value of <strong>one share</strong> or one unit, then scaling to what you need.</p>
<h3>Worked example</h3>
<p>Paint is mixed red : white = 2 : 3 and there are 15 litres of white.</p>
<ul>
<li>One share = 15 ÷ 3 = 5 litres.</li>
<li>Red = 2 × 5 = <strong>10 litres</strong>.</li>
</ul>
<h3>Inverse situations</h3>
<p>'More workers, less time' is inverse: keep the product constant. 6 workers × 10 days = 60 worker-days, so 4 workers take 60 ÷ 4 = 15 days.</p>`
});
