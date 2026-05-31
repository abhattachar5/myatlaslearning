// math-y8-expansion-1.js — Year 8 Maths Expansion Pack 1: Number & Algebra
// Islands: m8i-03-5 (Recurring Decimals as Fractions), m8i-15-5 (Substitution into Formulae),
//          m8i-16-5 (Equations with Fractions & Decimals), m8i-08-6 (Inverse Proportion)
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for these islands.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-03-5 — Recurring Decimals as Fractions
  {id:"m8fc-03-5-1",islandId:"m8i-03-5",front:"What is the difference between a terminating and a recurring decimal?",
   back:"A terminating decimal ends after a finite number of digits (e.g. 0.25, 0.375).\nA recurring decimal has one or more digits that repeat forever (e.g. 0.3̇ = 0.333…, 0.1̇4̇ = 0.141414…).\n\nA fraction gives a terminating decimal only if its denominator (in lowest terms) has no prime factors other than 2 and 5.",difficulty:1,category:"definition"},
  {id:"m8fc-03-5-2",islandId:"m8i-03-5",front:"What does dot notation mean in recurring decimals?",
   back:"A dot above a digit means that digit repeats.\n• 0.3̇ = 0.3333…\n• 0.1̇4̇ = 0.141414… (dots on first and last digit of the repeating block)\n• 0.08̇3̇ = 0.08333… (only the 3 repeats)\n\nUse dot notation to write recurring decimals neatly.",difficulty:1,category:"concept"},
  {id:"m8fc-03-5-3",islandId:"m8i-03-5",front:"Convert 0.3̇ to a fraction.",
   back:"Let x = 0.3333…\nMultiply both sides by 10: 10x = 3.3333…\nSubtract: 10x − x = 3.3333… − 0.3333…\n9x = 3\nx = 3/9 = 1/3\n\nAnswer: 1/3",difficulty:2,category:"calculation"},
  {id:"m8fc-03-5-4",islandId:"m8i-03-5",front:"Convert 0.4̇5̇ to a fraction.",
   back:"Let x = 0.454545…\nMultiply by 100 (two-digit repeating block): 100x = 45.454545…\nSubtract: 100x − x = 45\n99x = 45\nx = 45/99 = 5/11\n\nAnswer: 5/11",difficulty:2,category:"calculation"},
  {id:"m8fc-03-5-5",islandId:"m8i-03-5",front:"Why does multiplying by 100 (not 10) clear the recurring part of 0.4̇5̇?",
   back:"The repeating block has 2 digits (45), so you multiply by 10² = 100.\nThis shifts the decimal two places right, so the recurring parts line up exactly and cancel when you subtract.\n\nGeneral rule: multiply by 10^n where n = number of recurring digits.",difficulty:3,category:"concept"},
  {id:"m8fc-03-5-6",islandId:"m8i-03-5",front:"Convert the fraction 5/11 to a decimal and state whether it terminates or recurs.",
   back:"5 ÷ 11 = 0.454545… = 0.4̇5̇\n\nIt recurs because 11 has a prime factor of 11 (neither 2 nor 5), so it cannot terminate.\n\nAnswer: 0.4̇5̇  (recurring)",difficulty:3,category:"application"},

  // m8i-15-5 — Substitution into Formulae
  {id:"m8fc-15-5-1",islandId:"m8i-15-5",front:"What is substitution in algebra?",
   back:"Substitution means replacing letters with given numbers and evaluating the expression.\n\nAlways write the substitution step, then apply BIDMAS:\nBrackets → Indices → Division/Multiplication → Addition/Subtraction",difficulty:1,category:"definition"},
  {id:"m8fc-15-5-2",islandId:"m8i-15-5",front:"Evaluate 3x² when x = −2.",
   back:"Substitute: 3 × (−2)²\nStep 1 — Indices: (−2)² = 4  (squaring a negative gives a positive)\nStep 2 — Multiply: 3 × 4 = 12\n\nAnswer: 12\n\nCommon mistake: writing −2² = −4. Remember to square the value first.",difficulty:2,category:"calculation"},
  {id:"m8fc-15-5-3",islandId:"m8i-15-5",front:"Use v = u + at to find v when u = 5, a = 2, t = 3.",
   back:"Substitute: v = 5 + 2 × 3\nStep 1 — Multiplication (before addition): 2 × 3 = 6\nStep 2 — Addition: 5 + 6 = 11\n\nAnswer: v = 11",difficulty:1,category:"calculation"},
  {id:"m8fc-15-5-4",islandId:"m8i-15-5",front:"Find the area of a circle with radius 4 cm. Use A = πr² and give your answer to 1 d.p.",
   back:"Substitute: A = π × 4²\nStep 1 — Indices: 4² = 16\nStep 2 — Multiply: π × 16 = 50.265…\n\nAnswer: A ≈ 50.3 cm²",difficulty:2,category:"application"},
  {id:"m8fc-15-5-5",islandId:"m8i-15-5",front:"Evaluate 2a − b² when a = 3 and b = −4.",
   back:"Substitute: 2 × 3 − (−4)²\nStep 1 — Indices: (−4)² = 16\nStep 2 — Multiplication: 2 × 3 = 6\nStep 3 — Subtraction: 6 − 16 = −10\n\nAnswer: −10",difficulty:2,category:"calculation"},
  {id:"m8fc-15-5-6",islandId:"m8i-15-5",front:"Find the speed using speed = distance ÷ time when distance = 150 km and time = 2.5 h.",
   back:"Substitute: speed = 150 ÷ 2.5\n= 60 km/h\n\nAlways include the unit in your answer. Distance ÷ time gives speed in matching units (here km/h).",difficulty:1,category:"application"},

  // m8i-16-5 — Equations with Fractions & Decimals
  {id:"m8fc-16-5-1",islandId:"m8i-16-5",front:"How do you solve an equation with fractional coefficients?",
   back:"Multiply every term on both sides by the denominator (or LCM of all denominators) to clear the fractions, then solve the resulting integer equation.\n\nExample: x/3 + 2 = 7\nMultiply by 3: x + 6 = 21 → x = 15",difficulty:1,category:"definition"},
  {id:"m8fc-16-5-2",islandId:"m8i-16-5",front:"Solve: x/3 + 2 = 7",
   back:"Subtract 2: x/3 = 5\nMultiply by 3: x = 15\n\nCheck: 15/3 + 2 = 5 + 2 = 7 ✓\n\nAnswer: x = 15",difficulty:1,category:"calculation"},
  {id:"m8fc-16-5-3",islandId:"m8i-16-5",front:"Solve: (x + 1)/2 = 5",
   back:"Multiply both sides by 2: x + 1 = 10\nSubtract 1: x = 9\n\nCheck: (9 + 1)/2 = 10/2 = 5 ✓\n\nAnswer: x = 9",difficulty:2,category:"calculation"},
  {id:"m8fc-16-5-4",islandId:"m8i-16-5",front:"Solve: 0.2x + 1.5 = 4",
   back:"Method: multiply all terms by 10 to clear decimals.\n10 × 0.2x + 10 × 1.5 = 10 × 4\n2x + 15 = 40\n2x = 25\nx = 12.5\n\nCheck: 0.2 × 12.5 + 1.5 = 2.5 + 1.5 = 4 ✓\n\nAnswer: x = 12.5",difficulty:2,category:"calculation"},
  {id:"m8fc-16-5-5",islandId:"m8i-16-5",front:"Solve: x/4 − x/6 = 1",
   back:"LCM of 4 and 6 is 12. Multiply every term by 12:\n12 × x/4 − 12 × x/6 = 12 × 1\n3x − 2x = 12\nx = 12\n\nCheck: 12/4 − 12/6 = 3 − 2 = 1 ✓\n\nAnswer: x = 12",difficulty:3,category:"calculation"},
  {id:"m8fc-16-5-6",islandId:"m8i-16-5",front:"Solve: (2x − 1)/3 = 3",
   back:"Multiply both sides by 3: 2x − 1 = 9\nAdd 1: 2x = 10\nDivide by 2: x = 5\n\nCheck: (2 × 5 − 1)/3 = 9/3 = 3 ✓\n\nAnswer: x = 5",difficulty:2,category:"calculation"},

  // m8i-08-6 — Inverse Proportion
  {id:"m8fc-08-6-1",islandId:"m8i-08-6",front:"What does it mean for two quantities to be in inverse proportion?",
   back:"Two quantities are in inverse proportion when one quantity INCREASES as the other DECREASES at the same rate, so their product is always constant.\n\nIf y is inversely proportional to x: y = k/x, or equivalently xy = k (a constant).",difficulty:1,category:"definition"},
  {id:"m8fc-08-6-2",islandId:"m8i-08-6",front:"How can you recognise inverse proportion from a table of values?",
   back:"Check whether the product x × y is the same constant for every pair.\n\nExample:\nx:  2   4   8\ny: 12   6   3\nProducts: 2×12=24, 4×6=24, 8×3=24 — all equal 24 → inverse proportion.\n\nOn a graph, inverse proportion gives a curve (reciprocal/hyperbola), not a straight line.",difficulty:2,category:"concept"},
  {id:"m8fc-08-6-3",islandId:"m8i-08-6",front:"y is inversely proportional to x, and y = 6 when x = 4. Find the constant of proportionality k.",
   back:"y = k/x\nSubstitute: 6 = k/4\nMultiply by 4: k = 24\n\nSo y = 24/x",difficulty:1,category:"calculation"},
  {id:"m8fc-08-6-4",islandId:"m8i-08-6",front:"y is inversely proportional to x, and y = 6 when x = 4. Find y when x = 3.",
   back:"First find k: k = xy = 6 × 4 = 24\nThen y = 24/x\nWhen x = 3: y = 24/3 = 8\n\nCheck: xy = 3 × 8 = 24 = k ✓\n\nAnswer: y = 8",difficulty:2,category:"calculation"},
  {id:"m8fc-08-6-5",islandId:"m8i-08-6",front:"5 workers take 12 days to complete a job. How long would 4 workers take (assuming equal work rate)?",
   back:"More workers → fewer days: inverse proportion.\nk = 5 × 12 = 60 (worker-days)\nTime for 4 workers = 60 ÷ 4 = 15 days\n\nAnswer: 15 days",difficulty:2,category:"application"},
  {id:"m8fc-08-6-6",islandId:"m8i-08-6",front:"What is the shape of the graph of y = k/x for positive x and k?",
   back:"The graph is a decreasing curve called a reciprocal curve (or rectangular hyperbola).\n• It passes through the point (k, 1) and (1, k).\n• It never touches the x-axis or y-axis (the axes are asymptotes).\n• As x increases, y decreases but never reaches zero.",difficulty:3,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-03-5":[
    {q:"Which of these fractions gives a TERMINATING decimal?",opts:["1/3","2/7","3/8","5/12"],c:2,e:"A fraction terminates when its denominator (in lowest terms) has only factors of 2 and 5. 3/8 = 3/2³ — only factor 2 — so it terminates (0.375). The others have prime factors 3 or 7."},
    {q:"Convert 0.7̇ (= 0.7777…) to a fraction.",opts:["7/10","7/9","7/11","77/100"],c:1,e:"Let x = 0.7777… → 10x = 7.7777… → 9x = 7 → x = 7/9."},
    {q:"Convert 0.3̇6̇ (= 0.363636…) to a fraction in its simplest form.",opts:["36/99","4/11","36/100","3/8"],c:1,e:"Let x = 0.363636… → 100x = 36.3636… → 99x = 36 → x = 36/99 = 4/11."},
    {q:"What do you multiply by when converting a decimal with a 2-digit recurring block to clear the recurring part?",opts:["10","100","1000","2"],c:1,e:"The recurring block has 2 digits, so multiply by 10² = 100. This shifts the decimal two places so the recurring parts cancel on subtraction."},
    {q:"Which of these is the correct algebraic setup for converting 0.4̇5̇ to a fraction?",opts:["10x − x = 45","100x − x = 45","100x − 10x = 45","1000x − x = 45"],c:1,e:"x = 0.454545… → 100x = 45.4545… → 100x − x = 45, so 99x = 45 → x = 45/99 = 5/11."}
  ],
  "m8i-15-5":[
    {q:"Find the value of 3x² when x = −2.",opts:["−12","12","−6","36"],c:1,e:"(−2)² = 4 first (indices before multiplication), then 3 × 4 = 12. Squaring a negative gives a positive."},
    {q:"Use v = u + at. Find v when u = 5, a = 2, t = 3.",opts:["10","11","16","13"],c:1,e:"v = 5 + 2 × 3. Multiplication first (BIDMAS): 2 × 3 = 6. Then 5 + 6 = 11."},
    {q:"Evaluate 2a − b² when a = 3, b = −4.",opts:["−10","−2","22","10"],c:0,e:"(−4)² = 16; 2 × 3 = 6; 6 − 16 = −10."},
    {q:"Find the area of a circle with radius 3 cm using A = πr². Give the answer to 1 d.p.",opts:["18.8 cm²","28.3 cm²","9.4 cm²","18.0 cm²"],c:1,e:"A = π × 3² = π × 9 = 28.274… ≈ 28.3 cm²."},
    {q:"A car travels 240 km in 3 hours. Using speed = distance ÷ time, what is the speed?",opts:["720 km/h","60 km/h","80 km/h","120 km/h"],c:2,e:"speed = 240 ÷ 3 = 80 km/h."}
  ],
  "m8i-16-5":[
    {q:"Solve: x/3 + 2 = 7",opts:["x = 5","x = 15","x = 27","x = 3"],c:1,e:"Subtract 2: x/3 = 5. Multiply by 3: x = 15. Check: 15/3 + 2 = 7 ✓"},
    {q:"Solve: (x + 1)/2 = 5",opts:["x = 9","x = 11","x = 4.5","x = 8"],c:0,e:"Multiply by 2: x + 1 = 10. Subtract 1: x = 9. Check: (9+1)/2 = 10/2 = 5 ✓"},
    {q:"Solve: 0.2x + 1.5 = 4",opts:["x = 12.5","x = 27.5","x = 2.5","x = 5.5"],c:0,e:"Multiply by 10: 2x + 15 = 40. Subtract 15: 2x = 25. Divide by 2: x = 12.5. Check: 0.2 × 12.5 + 1.5 = 4 ✓"},
    {q:"Solve: (2x − 1)/3 = 3",opts:["x = 4","x = 5","x = 10","x = 14"],c:1,e:"Multiply by 3: 2x − 1 = 9. Add 1: 2x = 10. Divide by 2: x = 5."},
    {q:"Solve: x/4 − x/6 = 1",opts:["x = 2","x = 10","x = 12","x = 24"],c:2,e:"LCM of 4 and 6 is 12. Multiply by 12: 3x − 2x = 12 → x = 12. Check: 12/4 − 12/6 = 3 − 2 = 1 ✓"}
  ],
  "m8i-08-6":[
    {q:"y is inversely proportional to x. When x = 4, y = 6. What is the constant of proportionality k?",opts:["10","1.5","24","2"],c:2,e:"k = x × y = 4 × 6 = 24. So y = 24/x."},
    {q:"y is inversely proportional to x, and k = 24. Find y when x = 3.",opts:["8","6","72","0.125"],c:0,e:"y = k/x = 24/3 = 8. Check: 3 × 8 = 24 = k ✓"},
    {q:"Which table shows inverse proportion?",opts:["x: 1 2 3; y: 2 4 6","x: 1 2 4; y: 24 12 6","x: 1 2 3; y: 3 5 7","x: 2 4 6; y: 4 8 12"],c:1,e:"Check xy = constant: 1×24=24, 2×12=24, 4×6=24 — all equal. This confirms inverse proportion. The other tables show linear (direct) patterns."},
    {q:"6 machines take 10 hours to complete a task. How long would 4 machines take?",opts:["8 hours","12 hours","15 hours","24 hours"],c:2,e:"More machines → fewer hours: inverse proportion. k = 6 × 10 = 60. Time = 60 ÷ 4 = 15 hours."},
    {q:"What is the shape of the graph of y = k/x (for positive x and k)?",opts:["A straight line through the origin","A straight line with a positive y-intercept","A decreasing curve that never touches the axes","A U-shaped parabola"],c:2,e:"y = k/x is a reciprocal/hyperbola curve. As x increases y decreases but neither reaches zero — the axes are asymptotes."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-03-5': `
<h2>Recurring Decimals as Fractions</h2>
<p>Every fraction can be written as a decimal. Some decimals <strong>terminate</strong> (end after a finite number of digits), while others <strong>recur</strong> (have a repeating block of digits that goes on forever). You can convert any recurring decimal back to a fraction using algebra.</p>

<h3>Terminating vs Recurring Decimals</h3>
<p>A fraction in its simplest form gives a <strong>terminating</strong> decimal only if the denominator's prime factors are <strong>2 and/or 5 only</strong> (e.g. 3/8 = 0.375). Any other prime factor in the denominator causes a recurring decimal.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Fraction</th><th style="padding:8px;border:1px solid #ccc">Decimal</th><th style="padding:8px;border:1px solid #ccc">Type</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">3/8</td><td style="padding:8px;border:1px solid #ccc">0.375</td><td style="padding:8px;border:1px solid #ccc">Terminating (denom = 2³)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1/3</td><td style="padding:8px;border:1px solid #ccc">0.3̇</td><td style="padding:8px;border:1px solid #ccc">Recurring</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">5/11</td><td style="padding:8px;border:1px solid #ccc">0.4̇5̇</td><td style="padding:8px;border:1px solid #ccc">Recurring (denom has factor 11)</td></tr>
</table>

<h3>Dot Notation</h3>
<p>A <strong>dot above a digit</strong> shows it repeats. Two dots mark the first and last digits of a repeating block: 0.4̇5̇ = 0.454545…</p>

<h3>Algebraic Method: Converting Recurring Decimal → Fraction</h3>
<p>Let x equal the recurring decimal. Multiply by a power of 10 equal to the length of the repeating block, then subtract to eliminate the recurring part.</p>
<div class="example-box">
<p><strong>Example:</strong> Convert 0.4̇5̇ to a fraction.</p>
<p>Let x = 0.454545…<br>
Multiply by 100 (2-digit block): 100x = 45.454545…<br>
Subtract: 100x − x = 45.454545… − 0.454545…<br>
99x = 45<br>
x = 45/99 = <strong>5/11</strong></p>
</div>

<h3>Key Vocabulary</h3>
<dl>
<dt>Terminating decimal</dt><dd>A decimal that ends after a fixed number of digits.</dd>
<dt>Recurring decimal</dt><dd>A decimal with a repeating block of one or more digits.</dd>
<dt>Dot notation</dt><dd>A dot placed above digit(s) to show the recurring part.</dd>
</dl>

<h3>Common Mistakes to Avoid</h3>
<ul>
<li>Multiplying by 10 when the recurring block has 2 digits — always use 10 raised to the power of the number of recurring digits.</li>
<li>Forgetting to simplify the resulting fraction (e.g. 45/99 simplifies to 5/11).</li>
<li>Assuming all fractions terminate — only those whose denominators (in lowest terms) have only factors of 2 and 5 will terminate.</li>
</ul>`,

'm8i-15-5': `
<h2>Substitution into Formulae</h2>
<p>Substitution means replacing letter variables with given numbers and then evaluating the expression. Always follow <strong>BIDMAS</strong> (Brackets, Indices, Division &amp; Multiplication, Addition &amp; Subtraction) to get the correct answer — this is especially important with negative values.</p>

<h3>BIDMAS Reminder</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Order</th><th style="padding:8px;border:1px solid #ccc">Operation</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1st</td><td style="padding:8px;border:1px solid #ccc">Brackets</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">2nd</td><td style="padding:8px;border:1px solid #ccc">Indices (powers, roots)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">3rd</td><td style="padding:8px;border:1px solid #ccc">Division &amp; Multiplication (left to right)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">4th</td><td style="padding:8px;border:1px solid #ccc">Addition &amp; Subtraction (left to right)</td></tr>
</table>

<h3>Substituting Negative Values</h3>
<p>When substituting a negative number, write it in brackets first to avoid sign errors, then apply BIDMAS.</p>
<div class="example-box">
<p><strong>Example 1:</strong> Evaluate 3x² when x = −2.</p>
<p>3 × (−2)² = 3 × 4 = <strong>12</strong><br>
(Square first: (−2)² = 4, then multiply by 3.)</p>
<p><strong>Example 2:</strong> Use v = u + at to find v when u = 5, a = 2, t = 3.</p>
<p>v = 5 + 2 × 3 = 5 + 6 = <strong>11</strong></p>
</div>

<h3>Standard Formulae</h3>
<p>You will often substitute into standard formulae such as:</p>
<ul>
<li>v = u + at (kinematics)</li>
<li>A = πr² (area of a circle)</li>
<li>speed = distance ÷ time</li>
</ul>

<h3>Key Vocabulary</h3>
<dl>
<dt>Substitution</dt><dd>Replacing a letter with its numerical value.</dd>
<dt>Formula</dt><dd>A rule written in algebraic symbols relating two or more quantities.</dd>
<dt>BIDMAS</dt><dd>The order of operations: Brackets, Indices, Division/Multiplication, Addition/Subtraction.</dd>
</dl>

<h3>Common Mistakes to Avoid</h3>
<ul>
<li>Writing −2² = 4 without brackets — the square applies to the whole negative value: (−2)² = 4.</li>
<li>Adding before multiplying — always do multiplication before addition (BIDMAS).</li>
<li>Forgetting units in the final answer (e.g. cm², km/h).</li>
</ul>`,

'm8i-16-5': `
<h2>Equations with Fractions &amp; Decimals</h2>
<p>Equations involving fractions or decimal coefficients look tricky but become straightforward once you <strong>clear</strong> the fractions or decimals by multiplying every term by an appropriate number. You are then left with an integer equation you already know how to solve.</p>

<h3>Clearing Fractions</h3>
<p>Multiply every term on both sides by the <strong>denominator</strong> (or the LCM of all denominators) to remove all fractions.</p>
<div class="example-box">
<p><strong>Example 1:</strong> Solve x/3 + 2 = 7</p>
<p>Subtract 2 from both sides: x/3 = 5<br>
Multiply both sides by 3: x = 15<br>
Check: 15/3 + 2 = 5 + 2 = 7 ✓</p>
<p><strong>Example 2:</strong> Solve (x + 1)/2 = 5</p>
<p>Multiply both sides by 2: x + 1 = 10<br>
Subtract 1: x = 9</p>
</div>

<h3>Clearing Decimals</h3>
<p>Multiply every term by a power of 10 large enough to turn all decimals into integers.</p>
<div class="example-box">
<p><strong>Example:</strong> Solve 0.2x + 1.5 = 4</p>
<p>Multiply every term by 10: 2x + 15 = 40<br>
Subtract 15: 2x = 25<br>
Divide by 2: x = 12.5<br>
Check: 0.2 × 12.5 + 1.5 = 2.5 + 1.5 = 4 ✓</p>
</div>

<h3>Equations with Two Fractional Terms</h3>
<div class="example-box">
<p><strong>Example:</strong> Solve x/4 − x/6 = 1</p>
<p>LCM of 4 and 6 = 12. Multiply every term by 12:<br>
3x − 2x = 12<br>
x = 12</p>
</div>

<h3>Key Vocabulary</h3>
<dl>
<dt>Clearing fractions</dt><dd>Multiplying both sides of an equation by the denominator (or LCM) to remove fractional coefficients.</dd>
<dt>LCM</dt><dd>Lowest Common Multiple — the smallest number that is a multiple of two or more given numbers.</dd>
<dt>Coefficient</dt><dd>The number multiplying a variable (e.g. in 0.2x the coefficient is 0.2).</dd>
</dl>

<h3>Common Mistakes to Avoid</h3>
<ul>
<li>Multiplying only some terms and not others — every term on both sides must be multiplied.</li>
<li>Using the wrong LCM when there are two different denominators — find the LCM first.</li>
<li>Not checking the answer by substituting back into the original equation.</li>
</ul>`,

'm8i-08-6': `
<h2>Inverse Proportion</h2>
<p>Two quantities are in <strong>inverse proportion</strong> when one increases as the other decreases, and their product remains constant. The relationship is written y = k/x, where k is the <strong>constant of proportionality</strong>.</p>

<h3>Recognising Inverse Proportion</h3>
<p>From a table: check that <strong>x × y = constant</strong> for every pair of values.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">x</th><th style="padding:8px;border:1px solid #ccc">y</th><th style="padding:8px;border:1px solid #ccc">x × y</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">2</td><td style="padding:8px;border:1px solid #ccc">12</td><td style="padding:8px;border:1px solid #ccc">24</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">4</td><td style="padding:8px;border:1px solid #ccc">6</td><td style="padding:8px;border:1px solid #ccc">24</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">8</td><td style="padding:8px;border:1px solid #ccc">3</td><td style="padding:8px;border:1px solid #ccc">24</td></tr>
</table>
<p>From a graph: inverse proportion gives a <strong>decreasing curve</strong> (reciprocal/hyperbola) that never touches either axis.</p>

<h3>Finding k and Using the Formula</h3>
<div class="example-box">
<p><strong>Example:</strong> y is inversely proportional to x. When x = 4, y = 6. Find y when x = 3.</p>
<p>Step 1 — Find k: k = x × y = 4 × 6 = 24<br>
Step 2 — Write the formula: y = 24/x<br>
Step 3 — Substitute x = 3: y = 24/3 = <strong>8</strong><br>
Check: 3 × 8 = 24 = k ✓</p>
</div>

<h3>Word Problems</h3>
<div class="example-box">
<p><strong>Example:</strong> 5 workers take 12 days to complete a job. How long do 4 workers take?</p>
<p>More workers → fewer days → inverse proportion.<br>
k = 5 × 12 = 60 (worker-days)<br>
Time = 60 ÷ 4 = <strong>15 days</strong></p>
</div>

<h3>Key Vocabulary</h3>
<dl>
<dt>Inverse proportion</dt><dd>A relationship where one quantity increases as the other decreases, keeping their product constant.</dd>
<dt>Constant of proportionality (k)</dt><dd>The fixed value of the product x × y; found by substituting a known pair of values.</dd>
<dt>Reciprocal curve</dt><dd>The graph of y = k/x — a hyperbola that never touches the axes.</dd>
</dl>

<h3>Common Mistakes to Avoid</h3>
<ul>
<li>Confusing inverse proportion with direct proportion — in direct proportion y = kx (a straight line through the origin); in inverse proportion y = k/x (a curve).</li>
<li>Forgetting to verify xy = constant for every pair before concluding inverse proportion.</li>
<li>In word problems, not identifying which quantity increases and which decreases before setting up the formula.</li>
</ul>`

});
