// math-y8-t08.js — Year 8 Maths Topic 8: Ratios & Proportions
// Islands: m8i-08-1 .. m8i-08-5
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-08-1 — Write & Simplify Ratios
  {id:"m8fc-08-1-1",islandId:"m8i-08-1",front:"What is a ratio and how can it be written?",
   back:"A ratio compares two or more quantities of the same kind.\nIt can be written three ways:\n• Using a colon: 3 : 5\n• As a fraction: 3/5\n• In words: '3 to 5'\n\nExample: if there are 3 red and 5 blue counters, the ratio of red to blue is 3 : 5.",difficulty:1,category:"definition"},
  {id:"m8fc-08-1-2",islandId:"m8i-08-1",front:"How do you simplify the ratio 24 : 36?",
   back:"24 : 36 = 2 : 3\n\nDivide both parts by the HCF.\nHCF(24, 36) = 12.\n24 ÷ 12 = 2, 36 ÷ 12 = 3.\nA ratio is fully simplified when the HCF of all parts is 1.",difficulty:1,category:"calculation"},
  {id:"m8fc-08-1-3",islandId:"m8i-08-1",front:"Are the ratios 3 : 4 and 15 : 20 equivalent?",
   back:"Yes — they are equivalent.\n\nMultiply both parts of 3 : 4 by 5:\n3 × 5 = 15, 4 × 5 = 20, giving 15 : 20.\nAlternatively, simplify 15 : 20 by dividing by 5 to get 3 : 4.",difficulty:1,category:"concept"},
  {id:"m8fc-08-1-4",islandId:"m8i-08-1",front:"A bag contains 8 apples and 12 oranges. Write the ratio of apples to oranges in its simplest form.",
   back:"2 : 3\n\nRatio of apples to oranges = 8 : 12.\nHCF(8, 12) = 4.\n8 ÷ 4 = 2, 12 ÷ 4 = 3.\nSimplest form: 2 : 3.",difficulty:1,category:"application"},
  {id:"m8fc-08-1-5",islandId:"m8i-08-1",front:"Share £45 in the ratio 2 : 3.",
   back:"£18 and £27.\n\nTotal parts = 2 + 3 = 5.\nValue of one part = £45 ÷ 5 = £9.\nFirst share: 2 × £9 = £18.\nSecond share: 3 × £9 = £27.\nCheck: £18 + £27 = £45 ✓",difficulty:2,category:"application"},
  {id:"m8fc-08-1-6",islandId:"m8i-08-1",front:"Simplify the ratio 0.6 : 0.9.",
   back:"2 : 3\n\nClear the decimals by multiplying both parts by 10:\n0.6 × 10 = 6, 0.9 × 10 = 9, giving 6 : 9.\nHCF(6, 9) = 3.\n6 ÷ 3 = 2, 9 ÷ 3 = 3.\nSimplest form: 2 : 3.",difficulty:2,category:"calculation"},

  // m8i-08-2 — Unit Rates & Speed
  {id:"m8fc-08-2-1",islandId:"m8i-08-2",front:"What is a unit rate, and how do you calculate it?",
   back:"A unit rate gives the quantity per one unit of another.\n\nTo find it, divide the first quantity by the second.\nExample: if 5 pens cost £3.50, the unit rate (cost per pen) = £3.50 ÷ 5 = £0.70 per pen.",difficulty:1,category:"definition"},
  {id:"m8fc-08-2-2",islandId:"m8i-08-2",front:"Write the formula for speed, and state the units.",
   back:"Speed = Distance ÷ Time\n\nCommon units:\n• Speed in km/h if distance is in km and time in hours.\n• Speed in m/s if distance is in metres and time in seconds.\n\nRearrangements:\nDistance = Speed × Time\nTime = Distance ÷ Speed",difficulty:1,category:"definition"},
  {id:"m8fc-08-2-3",islandId:"m8i-08-2",front:"A car travels 180 km in 3 hours. What is its average speed?",
   back:"60 km/h\n\nSpeed = Distance ÷ Time\nSpeed = 180 ÷ 3 = 60 km/h.",difficulty:1,category:"calculation"},
  {id:"m8fc-08-2-4",islandId:"m8i-08-2",front:"Which is better value: 400 g of cereal for £2.80, or 600 g for £3.90?",
   back:"The 600 g pack is better value.\n\nUnit rate for 400 g: £2.80 ÷ 400 = £0.007 per gram.\nUnit rate for 600 g: £3.90 ÷ 600 = £0.0065 per gram.\nA lower price per gram means better value: 600 g pack wins.",difficulty:2,category:"application"},
  {id:"m8fc-08-2-5",islandId:"m8i-08-2",front:"A cyclist travels at 24 km/h. How far will she travel in 2.5 hours?",
   back:"60 km\n\nDistance = Speed × Time\nDistance = 24 × 2.5 = 60 km.",difficulty:2,category:"calculation"},
  {id:"m8fc-08-2-6",islandId:"m8i-08-2",front:"A train covers 420 km at a speed of 105 km/h. How long does the journey take?",
   back:"4 hours\n\nTime = Distance ÷ Speed\nTime = 420 ÷ 105 = 4 hours.",difficulty:2,category:"calculation"},

  // m8i-08-3 — Proportions
  {id:"m8fc-08-3-1",islandId:"m8i-08-3",front:"What is a proportion?",
   back:"A proportion is a statement that two ratios are equal.\nWritten as: a : b = c : d, or a/b = c/d.\n\nExample: 2/3 = 8/12 is a proportion because both simplify to 2 : 3.",difficulty:1,category:"definition"},
  {id:"m8fc-08-3-2",islandId:"m8i-08-3",front:"How do you check whether 3 : 7 and 12 : 28 form a proportion?",
   back:"Yes, they form a proportion.\n\nMethod 1 — Cross-multiply: 3 × 28 = 84 and 7 × 12 = 84. Equal products confirm a proportion.\nMethod 2 — Simplify both: 12 : 28 ÷ 4 = 3 : 7 ✓",difficulty:2,category:"concept"},
  {id:"m8fc-08-3-3",islandId:"m8i-08-3",front:"Solve the proportion: 5/8 = x/40.",
   back:"x = 25\n\nCross-multiply: 5 × 40 = 8 × x\n200 = 8x\nx = 200 ÷ 8 = 25.\nCheck: 5/8 = 25/40 — both equal 0.625 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-08-3-4",islandId:"m8i-08-3",front:"Explain the cross-multiplication method for solving proportions.",
   back:"If a/b = c/d, then a × d = b × c.\n\nThis is called cross-multiplication — you multiply the numerator of each fraction by the denominator of the other.\nRearrange to find the unknown.\nExample: 3/x = 12/20 → 3 × 20 = 12 × x → 60 = 12x → x = 5.",difficulty:2,category:"concept"},
  {id:"m8fc-08-3-5",islandId:"m8i-08-3",front:"A recipe uses 4 eggs for every 200 g of flour. How much flour is needed for 10 eggs?",
   back:"500 g of flour.\n\nSet up the proportion: 4/200 = 10/x.\nCross-multiply: 4x = 200 × 10 = 2000.\nx = 2000 ÷ 4 = 500 g.",difficulty:2,category:"application"},
  {id:"m8fc-08-3-6",islandId:"m8i-08-3",front:"Do 9 : 15 and 6 : 12 form a proportion? Justify your answer.",
   back:"No, they do not form a proportion.\n\nSimplify each: 9 : 15 = 3 : 5 and 6 : 12 = 1 : 2.\n3 : 5 ≠ 1 : 2.\nOr cross-multiply: 9 × 12 = 108 and 15 × 6 = 90. 108 ≠ 90, so they are not proportional.",difficulty:3,category:"application"},

  // m8i-08-4 — Direct Proportion & Graphs
  {id:"m8fc-08-4-1",islandId:"m8i-08-4",front:"What does it mean for two quantities to be in direct proportion?",
   back:"Two quantities are in direct proportion if, when one doubles, the other doubles — they increase and decrease at the same rate.\n\nThe graph of a directly proportional relationship is a straight line through the origin (0, 0).",difficulty:1,category:"definition"},
  {id:"m8fc-08-4-2",islandId:"m8i-08-4",front:"What is the constant of proportionality and how do you find it from a table?",
   back:"The constant of proportionality (k) is the value of y ÷ x for any pair in the table.\n\nIf y is proportional to x, then y = kx.\nExample: if x = 4 gives y = 12, then k = 12 ÷ 4 = 3, so y = 3x.",difficulty:2,category:"concept"},
  {id:"m8fc-08-4-3",islandId:"m8i-08-4",front:"A graph of a proportional relationship passes through (0, 0) and (5, 20). Write the equation.",
   back:"y = 4x\n\nFind k: k = y ÷ x = 20 ÷ 5 = 4.\nEquation: y = 4x.\nCheck: when x = 5, y = 4 × 5 = 20 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-08-4-4",islandId:"m8i-08-4",front:"How can you tell from a table whether two variables are in direct proportion?",
   back:"Divide each y-value by its corresponding x-value.\nIf the ratio y ÷ x is the same every time, the variables are in direct proportion.\n\nExample:\nx: 2, 4, 6\ny: 6, 12, 18\ny ÷ x = 3 each time → directly proportional, k = 3.",difficulty:2,category:"concept"},
  {id:"m8fc-08-4-5",islandId:"m8i-08-4",front:"The cost C (£) of buying n litres of petrol is directly proportional to n. When n = 10, C = 15. Find C when n = 26.",
   back:"£39\n\nFind k: k = C ÷ n = 15 ÷ 10 = 1.5.\nEquation: C = 1.5n.\nWhen n = 26: C = 1.5 × 26 = £39.",difficulty:2,category:"application"},
  {id:"m8fc-08-4-6",islandId:"m8i-08-4",front:"What are the key features of a graph showing direct proportion?",
   back:"1. It is a straight line.\n2. It passes through the origin (0, 0).\n3. The gradient equals the constant of proportionality k.\n\nIf the line does not pass through the origin, the relationship is linear but NOT directly proportional.",difficulty:2,category:"concept"},

  // m8i-08-5 — Rate of Change
  {id:"m8fc-08-5-1",islandId:"m8i-08-5",front:"What is a rate of change?",
   back:"A rate of change measures how much one quantity changes per unit increase in another.\n\nFormula: Rate of change = Change in y ÷ Change in x\n\nOn a graph, it equals the gradient (slope) of the line.",difficulty:1,category:"definition"},
  {id:"m8fc-08-5-2",islandId:"m8i-08-5",front:"Calculate the rate of change from the table: x: 0, 2, 4, 6 and y: 3, 7, 11, 15.",
   back:"Rate of change = 2\n\nPick any two pairs, e.g. (0, 3) and (2, 7).\nChange in y = 7 − 3 = 4.\nChange in x = 2 − 0 = 2.\nRate of change = 4 ÷ 2 = 2.\nCheck with another pair: (4, 11) → (11 − 7) ÷ (4 − 2) = 4 ÷ 2 = 2 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-08-5-3",islandId:"m8i-08-5",front:"What does a constant rate of change tell you about a relationship?",
   back:"A constant rate of change means the relationship is linear — it graphs as a straight line.\n\nIf the rate of change is also positive, y increases as x increases.\nIf negative, y decreases as x increases.\nIf zero, y stays the same (horizontal line).",difficulty:2,category:"concept"},
  {id:"m8fc-08-5-4",islandId:"m8i-08-5",front:"A car's fuel level (litres) drops from 48 L at 0 km to 18 L at 300 km. What is the rate of change?",
   back:"−0.1 litres per km\n\nChange in fuel = 18 − 48 = −30 L.\nChange in distance = 300 − 0 = 300 km.\nRate of change = −30 ÷ 300 = −0.1 L/km.\nThe negative sign shows fuel is decreasing.",difficulty:2,category:"application"},
  {id:"m8fc-08-5-5",islandId:"m8i-08-5",front:"How do you calculate the rate of change from a straight-line graph?",
   back:"Rate of change = (y₂ − y₁) ÷ (x₂ − x₁)\n\nThis is the gradient (rise ÷ run).\nSteps:\n1. Pick two clear points on the line.\n2. Find the vertical rise (change in y).\n3. Find the horizontal run (change in x).\n4. Divide: rise ÷ run.",difficulty:2,category:"concept"},
  {id:"m8fc-08-5-6",islandId:"m8i-08-5",front:"Does every proportional relationship have a constant rate of change? Explain.",
   back:"Yes.\n\nEvery proportional relationship has equation y = kx, which is linear.\nThe rate of change equals k, the constant of proportionality.\nSince k does not change, the rate of change is constant throughout the relationship.",difficulty:3,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-08-1":[
    {q:"Which of the following is equivalent to the ratio 4 : 6?",opts:["2 : 4","3 : 4","2 : 3","8 : 10"],c:2,e:"Simplify 4 : 6 by dividing both parts by HCF 2: 4 ÷ 2 = 2, 6 ÷ 2 = 3. The equivalent ratio is 2 : 3."},
    {q:"Simplify the ratio 45 : 60.",opts:["9 : 12","3 : 4","5 : 7","15 : 20"],c:1,e:"HCF(45, 60) = 15. 45 ÷ 15 = 3, 60 ÷ 15 = 4. Simplest form is 3 : 4."},
    {q:"Share £72 in the ratio 1 : 3. What is the larger share?",opts:["£18","£24","£54","£64"],c:2,e:"Total parts = 1 + 3 = 4. One part = £72 ÷ 4 = £18. Larger share = 3 × £18 = £54."},
    {q:"A class has 15 boys and 10 girls. What is the ratio of girls to boys in its simplest form?",opts:["15 : 10","3 : 2","2 : 3","1 : 2"],c:2,e:"Girls to boys = 10 : 15. HCF(10, 15) = 5. 10 ÷ 5 = 2, 15 ÷ 5 = 3. Ratio is 2 : 3."},
    {q:"Which ratio is NOT equivalent to 3 : 5?",opts:["6 : 10","12 : 20","9 : 15","6 : 9"],c:3,e:"6 : 9 simplifies to 2 : 3, not 3 : 5. The others all simplify to 3 : 5."}
  ],
  "m8i-08-2":[
    {q:"A car travels 240 km in 4 hours. What is its average speed?",opts:["40 km/h","60 km/h","80 km/h","120 km/h"],c:1,e:"Speed = Distance ÷ Time = 240 ÷ 4 = 60 km/h."},
    {q:"Which is the better value for money: 500 g for £2.00, or 750 g for £2.85?",opts:["500 g pack — it is cheaper overall","500 g pack — it has a lower unit price","750 g pack — it has a lower unit price","Both are the same value"],c:2,e:"Unit price of 500 g: £2.00 ÷ 500 = £0.004/g. Unit price of 750 g: £2.85 ÷ 750 = £0.0038/g. The 750 g pack is cheaper per gram."},
    {q:"A cyclist travels at 18 km/h for 3.5 hours. How far does she travel?",opts:["21 km","54 km","63 km","72 km"],c:2,e:"Distance = Speed × Time = 18 × 3.5 = 63 km."},
    {q:"A train covers 315 km at 90 km/h. How long does the journey take?",opts:["2.5 hours","3 hours","3.5 hours","4 hours"],c:2,e:"Time = Distance ÷ Speed = 315 ÷ 90 = 3.5 hours."},
    {q:"A tap fills 12 litres in 8 minutes. What is the unit rate?",opts:["0.5 litres/min","1 litre/min","1.5 litres/min","2 litres/min"],c:2,e:"Unit rate = 12 ÷ 8 = 1.5 litres per minute."}
  ],
  "m8i-08-3":[
    {q:"Do the ratios 4 : 6 and 10 : 15 form a proportion?",opts:["Yes, because 4 + 6 = 10","Yes, because both simplify to 2 : 3","No, because 4 × 15 ≠ 6 × 10","No, because 4 ≠ 10"],c:1,e:"4 : 6 ÷ 2 = 2 : 3 and 10 : 15 ÷ 5 = 2 : 3. Both equal 2 : 3, so they form a proportion. (Cross-check: 4 × 15 = 60 and 6 × 10 = 60 ✓)"},
    {q:"Solve for x: 3/5 = x/35.",opts:["7","15","21","25"],c:2,e:"Cross-multiply: 3 × 35 = 5 × x → 105 = 5x → x = 21. Check: 3/5 = 21/35 = 0.6 ✓"},
    {q:"A map has a scale of 1 : 50,000. A distance on the map is 4 cm. What is the real distance in km?",opts:["0.2 km","2 km","20 km","200 km"],c:1,e:"Real distance = 4 cm × 50,000 = 200,000 cm = 2,000 m = 2 km."},
    {q:"Which pair of ratios forms a proportion?",opts:["2 : 3 and 5 : 9","5 : 8 and 15 : 24","3 : 7 and 9 : 28","4 : 5 and 6 : 8"],c:1,e:"5/8 = 15/24 — cross-multiply: 5 × 24 = 120 and 8 × 15 = 120 ✓. The others do not cross-multiply to equal products."},
    {q:"A recipe for 4 people needs 320 g of rice. How much rice is needed for 7 people?",opts:["420 g","560 g","640 g","700 g"],c:1,e:"Set up proportion: 320/4 = x/7. Cross-multiply: 320 × 7 = 4x → 2240 = 4x → x = 560 g."}
  ],
  "m8i-08-4":[
    {q:"Which of these indicates a directly proportional relationship between x and y?",opts:["y = 3x + 2","y = x²","y = 3x","y = 3/x"],c:2,e:"y = 3x passes through the origin and has a constant ratio y/x = 3. The others either have a y-intercept, are non-linear, or are inverse proportion."},
    {q:"A table shows x: 2, 5, 8 and y: 6, 15, 24. What is the constant of proportionality?",opts:["2","3","4","6"],c:1,e:"k = y ÷ x: 6 ÷ 2 = 3, 15 ÷ 5 = 3, 24 ÷ 8 = 3. The constant of proportionality is 3."},
    {q:"A graph of a proportional relationship passes through (0, 0) and (4, 10). What is the equation?",opts:["y = 4x","y = 2.5x","y = 10x","y = 0.4x"],c:1,e:"k = y ÷ x = 10 ÷ 4 = 2.5. Equation: y = 2.5x. Check: when x = 4, y = 2.5 × 4 = 10 ✓"},
    {q:"y is directly proportional to x. When x = 6, y = 42. Find y when x = 11.",opts:["66","70","77","84"],c:2,e:"k = 42 ÷ 6 = 7. y = 7x. When x = 11: y = 7 × 11 = 77."},
    {q:"A straight-line graph does NOT pass through the origin. What can you conclude?",opts:["The relationship is directly proportional","The relationship is linear but NOT directly proportional","The relationship is inversely proportional","The gradient equals the constant of proportionality"],c:1,e:"Direct proportion requires the line to pass through (0, 0). A straight line not through the origin is linear but not directly proportional."}
  ],
  "m8i-08-5":[
    {q:"A car's distance increases from 40 km to 160 km as time increases from 1 hour to 4 hours. What is the rate of change?",opts:["30 km/h","40 km/h","50 km/h","60 km/h"],c:1,e:"Rate of change = (160 − 40) ÷ (4 − 1) = 120 ÷ 3 = 40 km/h."},
    {q:"A table shows x: 0, 3, 6, 9 and y: 5, 11, 17, 23. What is the rate of change?",opts:["2","3","5","6"],c:0,e:"Change in y = 11 − 5 = 6 for a change in x of 3. Rate of change = 6 ÷ 3 = 2."},
    {q:"What does a negative rate of change on a graph mean?",opts:["The line goes up from left to right","The line goes down from left to right","The line is horizontal","The line passes through the origin"],c:1,e:"A negative rate of change means y decreases as x increases, so the line slopes downward from left to right."},
    {q:"A water tank loses 8 litres every 2 hours. What is the rate of change of the water level?",opts:["4 litres/hour","−4 litres/hour","8 litres/hour","−8 litres/hour"],c:1,e:"Rate of change = −8 ÷ 2 = −4 litres/hour. The negative sign shows the level is falling."},
    {q:"Which statement is TRUE about a line with a constant rate of change?",opts:["It must pass through the origin","It is a straight line","It represents inverse proportion","Its rate of change equals zero"],c:1,e:"A constant rate of change means the gradient is always the same, which produces a straight line. It does not have to pass through the origin."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-08-1': `
<h2>Write &amp; Simplify Ratios</h2>
<p>A <strong>ratio</strong> compares two or more quantities of the same kind. Ratios appear in recipes, maps, scale models and mixture problems. Knowing how to write and simplify them is the foundation for all proportion work.</p>

<h3>Writing ratios</h3>
<p>A ratio can be expressed as <strong>a : b</strong> (colon notation), <strong>a/b</strong> (fraction), or "a to b". The order matters — always match the order stated in the question.</p>
<div class="example-box">
<p><strong>Example:</strong> A class has 12 boys and 18 girls. Write the ratio of boys to girls.</p>
<p><strong>Solution:</strong> Boys : Girls = 12 : 18.<br>
Simplify by dividing both by HCF(12, 18) = 6.<br>
12 ÷ 6 = 2, 18 ÷ 6 = 3.<br>
Simplest form: <strong>2 : 3</strong>.</p>
</div>

<h3>Equivalent ratios</h3>
<p>Like equivalent fractions, ratios are equivalent when you multiply or divide both parts by the same number.</p>
<div class="example-box">
<p><strong>Example:</strong> Show that 3 : 5 and 21 : 35 are equivalent.</p>
<p>21 : 35 ÷ 7 = 3 : 5 ✓ Or: 3 : 5 × 7 = 21 : 35 ✓</p>
</div>

<h3>Sharing in a given ratio</h3>
<div class="example-box">
<p><strong>Example:</strong> Share £90 in the ratio 2 : 3.</p>
<p>Total parts = 2 + 3 = 5.<br>
One part = £90 ÷ 5 = £18.<br>
First share: 2 × £18 = <strong>£36</strong>. &nbsp; Second share: 3 × £18 = <strong>£54</strong>.<br>
Check: £36 + £54 = £90 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Ratio</dt><dd>A comparison of two or more quantities written as a : b.</dd>
<dt>Equivalent ratios</dt><dd>Ratios that represent the same comparison (e.g. 2 : 3 and 6 : 9).</dd>
<dt>Simplest form</dt><dd>A ratio where the HCF of all parts is 1.</dd>
<dt>HCF</dt><dd>Highest Common Factor — used to simplify ratios.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Reversing the order of a ratio — ✅ always match the order given in the question.</li>
<li>❌ Stopping simplification too early — ✅ keep dividing until the HCF of all parts is 1.</li>
<li>❌ Adding the shares and dividing incorrectly — ✅ find one part first, then multiply.</li>
</ul>`,

'm8i-08-2': `
<h2>Unit Rates &amp; Speed</h2>
<p>A <strong>rate</strong> compares two quantities with different units (e.g. miles per hour, pence per gram). A <strong>unit rate</strong> tells you the amount per <em>one</em> unit — making it easy to compare and calculate.</p>

<h3>Calculating unit rates</h3>
<div class="example-box">
<p><strong>Example:</strong> 6 cans of juice cost £4.20. Find the cost per can.</p>
<p>Unit rate = £4.20 ÷ 6 = <strong>£0.70 per can</strong>.</p>
</div>

<h3>Speed, Distance and Time</h3>
<p>The three quantities are linked by one formula triangle:</p>
<p style="text-align:center"><strong>Speed = Distance ÷ Time &nbsp;&nbsp; Distance = Speed × Time &nbsp;&nbsp; Time = Distance ÷ Speed</strong></p>
<div class="example-box">
<p><strong>Example 1:</strong> A bus travels 150 km in 2.5 hours. Find its average speed.</p>
<p>Speed = 150 ÷ 2.5 = <strong>60 km/h</strong>.</p>
<p><strong>Example 2:</strong> A train travels at 80 km/h for 3.5 hours. How far does it go?</p>
<p>Distance = 80 × 3.5 = <strong>280 km</strong>.</p>
</div>

<h3>Comparing rates for best value</h3>
<div class="example-box">
<p><strong>Example:</strong> Pack A: 300 g for £1.80. Pack B: 500 g for £2.75.</p>
<p>Unit rate A = £1.80 ÷ 300 = £0.0060/g.<br>
Unit rate B = £2.75 ÷ 500 = £0.0055/g.<br>
Pack B is better value (lower price per gram).</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Rate</dt><dd>A ratio comparing two quantities with different units.</dd>
<dt>Unit rate</dt><dd>A rate expressed as quantity per one unit (e.g. 50 km per 1 hour).</dd>
<dt>Speed</dt><dd>The distance travelled per unit of time.</dd>
<dt>Average speed</dt><dd>Total distance ÷ total time for the whole journey.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing distance by speed to get distance again — ✅ use Time = Distance ÷ Speed.</li>
<li>❌ Comparing total costs instead of unit prices — ✅ always find cost per gram (or unit) to compare fairly.</li>
<li>❌ Mixing up units (km with hours vs metres with seconds) — ✅ check units are consistent before calculating.</li>
</ul>`,

'm8i-08-3': `
<h2>Proportions</h2>
<p>A <strong>proportion</strong> is an equation stating that two ratios are equal: a/b = c/d. Proportions appear in scaling, recipes, maps and unit conversions. The key technique is <strong>cross-multiplication</strong>.</p>

<h3>Checking if two ratios form a proportion</h3>
<div class="example-box">
<p><strong>Example:</strong> Do 3/4 and 9/12 form a proportion?</p>
<p>Cross-multiply: 3 × 12 = 36 and 4 × 9 = 36. Equal ✓ — they form a proportion.<br>
Alternatively, 9/12 ÷ 3 = 3/4 ✓</p>
</div>

<h3>Solving a proportion</h3>
<p>Use cross-multiplication to find the unknown value.</p>
<div class="example-box">
<p><strong>Example:</strong> Solve 5/8 = x/40.</p>
<p>Cross-multiply: 5 × 40 = 8 × x<br>
200 = 8x<br>
x = 200 ÷ 8 = <strong>25</strong>.<br>
Check: 5/8 = 25/40 = 0.625 ✓</p>
</div>

<h3>Proportion word problems</h3>
<div class="example-box">
<p><strong>Example:</strong> A car uses 6 litres of fuel for every 80 km. How much fuel is needed for 200 km?</p>
<p>Set up: 6/80 = x/200.<br>
Cross-multiply: 6 × 200 = 80 × x → 1200 = 80x → x = 15 litres.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Proportion</dt><dd>An equation showing that two ratios are equal: a/b = c/d.</dd>
<dt>Cross-multiplication</dt><dd>Multiplying the numerator of each fraction by the denominator of the other to solve proportions.</dd>
<dt>Scale</dt><dd>A ratio used to represent a real measurement on a map or model.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Cross-multiplying incorrectly (multiplying across the top only) — ✅ multiply diagonally: numerator × opposite denominator.</li>
<li>❌ Forgetting to check the answer — ✅ substitute back to verify both sides are equal.</li>
<li>❌ Setting up the proportion in the wrong order — ✅ keep the same units in the same position on both sides.</li>
</ul>`,

'm8i-08-4': `
<h2>Direct Proportion &amp; Graphs</h2>
<p>Two quantities are in <strong>direct proportion</strong> when they increase and decrease at the same rate. Their graph is always a straight line through the origin, and there is a constant multiplier connecting them.</p>

<h3>Identifying direct proportion</h3>
<p>Check: is y ÷ x the same for every pair of values? If yes, y and x are directly proportional.</p>
<div class="example-box">
<p><strong>Example:</strong> Is the relationship proportional?<br>
x: 2, 5, 10 &nbsp;&nbsp; y: 8, 20, 40</p>
<p>8 ÷ 2 = 4, 20 ÷ 5 = 4, 40 ÷ 10 = 4 → all equal 4 ✓<br>
y is directly proportional to x, with constant k = 4.</p>
</div>

<h3>The equation y = kx</h3>
<p>If y is directly proportional to x, then <strong>y = kx</strong>, where k is the constant of proportionality (also the gradient of the graph).</p>
<div class="example-box">
<p><strong>Example:</strong> y is directly proportional to x. When x = 3, y = 15. Find y when x = 8.</p>
<p>k = y ÷ x = 15 ÷ 3 = 5. &nbsp; Equation: y = 5x.<br>
When x = 8: y = 5 × 8 = <strong>40</strong>.</p>
</div>

<h3>Reading the graph</h3>
<p>The graph of y = kx passes through (0, 0) and has gradient k. A steeper line means a larger k — y increases faster relative to x.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Direct proportion</dt><dd>A relationship where y = kx — both quantities change at the same rate.</dd>
<dt>Constant of proportionality (k)</dt><dd>The fixed ratio k = y ÷ x; also the gradient of the graph.</dd>
<dt>Origin</dt><dd>The point (0, 0) — every directly proportional graph passes through here.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking any straight line shows direct proportion — ✅ it must also pass through the origin.</li>
<li>❌ Using the wrong pair of values to find k — ✅ any valid pair gives the same k; cross-check with another pair.</li>
<li>❌ Confusing direct proportion (y = kx) with inverse proportion (y = k/x) — ✅ in direct proportion, y increases as x increases.</li>
</ul>`,

'm8i-08-5': `
<h2>Rate of Change</h2>
<p>The <strong>rate of change</strong> measures how quickly one quantity changes relative to another. On a straight-line graph it equals the gradient, and in a table it is the constant difference in y per unit increase in x.</p>

<h3>Calculating rate of change from a table</h3>
<div class="example-box">
<p><strong>Example:</strong> x: 0, 2, 4, 6 &nbsp; y: 1, 5, 9, 13.</p>
<p>Change in y between consecutive rows = 4.<br>
Change in x between consecutive rows = 2.<br>
Rate of change = 4 ÷ 2 = <strong>2</strong>.</p>
</div>

<h3>Rate of change from a graph</h3>
<p>Rate of change = (y₂ − y₁) ÷ (x₂ − x₁) &nbsp; (rise ÷ run).</p>
<div class="example-box">
<p><strong>Example:</strong> A line passes through (1, 3) and (5, 11).</p>
<p>Rise = 11 − 3 = 8. &nbsp; Run = 5 − 1 = 4.<br>
Rate of change = 8 ÷ 4 = <strong>2</strong>.</p>
</div>

<h3>Interpreting rate of change in context</h3>
<p>Always attach units and a real-world meaning. A positive rate means increasing; a negative rate means decreasing; a zero rate means constant.</p>
<div class="example-box">
<p><strong>Example:</strong> A phone battery drops from 80% to 20% over 6 hours.</p>
<p>Rate of change = (20 − 80) ÷ 6 = −60 ÷ 6 = <strong>−10% per hour</strong>.<br>
The battery loses 10% of charge every hour.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Rate of change</dt><dd>How much one quantity changes per unit increase in another; equals the gradient.</dd>
<dt>Gradient</dt><dd>The steepness of a line — rise ÷ run or (y₂ − y₁) ÷ (x₂ − x₁).</dd>
<dt>Constant rate of change</dt><dd>When the rate is the same throughout — shown by a straight line.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing run by rise instead of rise by run — ✅ rate of change = change in y ÷ change in x.</li>
<li>❌ Ignoring the sign — ✅ a negative rate of change is meaningful (it shows a decrease).</li>
<li>❌ Using the wrong pair of points — ✅ for a straight line any two points give the same rate; pick clear grid points.</li>
</ul>`

});
