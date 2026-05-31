// math-y8-t11.js — Year 8 Maths Topic 11: Problem Solving & Estimation
// Islands: m8i-11-1 .. m8i-11-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-11-1 — Multi-Step Word Problems
  {id:"m8fc-11-1-1",islandId:"m8i-11-1",front:"What is a multi-step word problem?",
   back:"A problem requiring TWO OR MORE operations to reach the final answer.\n\nApproach:\n1. Read carefully and identify what is asked.\n2. Decide which operations to use and in what order.\n3. Solve step by step, checking each step is reasonable.",difficulty:1,category:"definition"},
  {id:"m8fc-11-1-2",islandId:"m8i-11-1",front:"A cinema ticket costs £8.50. A group of 6 friends buys tickets and shares the total equally with a £3 discount voucher each. How much does each person pay?",
   back:"Each person pays £5.50.\n\nStep 1: Total cost = 6 × £8.50 = £51.00\nStep 2: Total discount = 6 × £3 = £18.00\nStep 3: Amount paid = £51.00 − £18.00 = £33.00\nStep 4: Per person = £33.00 ÷ 6 = £5.50",difficulty:2,category:"application"},
  {id:"m8fc-11-1-3",islandId:"m8i-11-1",front:"What does it mean to check whether an answer is 'reasonable'?",
   back:"It means verifying the answer makes sense in context.\n\nChecks to make:\n• Is the answer the right size (not too big or small)?\n• Does the unit match what was asked?\n• Does a quick estimation agree with the exact answer?\n\nExample: if you work out that 3 apples cost £47, that is clearly unreasonable.",difficulty:1,category:"concept"},
  {id:"m8fc-11-1-4",islandId:"m8i-11-1",front:"A shop sells pens for £1.20 each and rulers for £0.85 each. Sara buys 4 pens and 3 rulers. She pays with a £10 note. How much change does she get?",
   back:"Change = £2.45\n\nStep 1: Cost of pens = 4 × £1.20 = £4.80\nStep 2: Cost of rulers = 3 × £0.85 = £2.55\nStep 3: Total = £4.80 + £2.55 = £7.35\nStep 4: Change = £10.00 − £7.35 = £2.65\n\nWait — £10.00 − £7.35 = £2.65. Check: £7.35 + £2.65 = £10.00 ✓",difficulty:2,category:"application"},
  {id:"m8fc-11-1-5",islandId:"m8i-11-1",front:"Why should you write down every step when solving a multi-step problem?",
   back:"Writing every step:\n• Helps you track what you have found.\n• Lets you check where an error occurred.\n• Shows your method so you can earn marks even if a final answer is wrong.\n• Makes it easier to spot unreasonable intermediate values.",difficulty:1,category:"concept"},
  {id:"m8fc-11-1-6",islandId:"m8i-11-1",front:"A train travels 240 km in 3 hours, then a further 180 km in 2 hours. What is the average speed for the whole journey?",
   back:"Average speed = 84 km/h\n\nStep 1: Total distance = 240 + 180 = 420 km\nStep 2: Total time = 3 + 2 = 5 hours\nStep 3: Average speed = 420 ÷ 5 = 84 km/h\n\nNote: you CANNOT average the two speeds (80 and 90) directly.",difficulty:3,category:"application"},

  // m8i-11-2 — Estimation & Guess-and-Check
  {id:"m8fc-11-2-1",islandId:"m8i-11-2",front:"What is the 'guess-and-check' strategy in problem solving?",
   back:"Guess-and-check is a systematic problem-solving method:\n1. Make a sensible initial GUESS.\n2. CHECK: substitute it into the problem.\n3. If too high, try lower; if too low, try higher.\n4. Repeat until the answer is found.\n\nIt works well when an equation is hard to form directly.",difficulty:1,category:"definition"},
  {id:"m8fc-11-2-2",islandId:"m8i-11-2",front:"Two numbers add up to 20 and their product is 96. Use guess-and-check to find them.",
   back:"The two numbers are 8 and 12.\n\nGuess 1: 10 + 10 = 20 ✓, but 10 × 10 = 100 (too high).\nGuess 2: 9 + 11 = 20 ✓, but 9 × 11 = 99 (still too high).\nGuess 3: 8 + 12 = 20 ✓, and 8 × 12 = 96 ✓\n\nAnswer: 8 and 12.",difficulty:2,category:"application"},
  {id:"m8fc-11-2-3",islandId:"m8i-11-2",front:"How do you estimate the answer to 49 × 31?",
   back:"Estimated answer ≈ 1500\n\nRound each number to 1 significant figure:\n49 ≈ 50 and 31 ≈ 30.\n50 × 30 = 1500.\n\nActual answer = 1519, so 1500 is a good estimate (within 2%).",difficulty:1,category:"calculation"},
  {id:"m8fc-11-2-4",islandId:"m8i-11-2",front:"What does it mean to round to 1 significant figure?",
   back:"Keep only the FIRST non-zero digit and replace all others with zeros.\n\nExamples:\n• 3728 → 4000 (the 3 rounds up because the next digit is 7)\n• 0.00461 → 0.005\n• 82 → 80\n\nUsed for quick estimates.",difficulty:1,category:"definition"},
  {id:"m8fc-11-2-5",islandId:"m8i-11-2",front:"Estimate: 612 ÷ 19. Show your working.",
   back:"Estimated answer ≈ 30\n\nRound to 1 significant figure:\n612 ≈ 600 and 19 ≈ 20.\n600 ÷ 20 = 30.\n\nActual answer = 32.2…, so 30 is a reasonable estimate.",difficulty:2,category:"calculation"},
  {id:"m8fc-11-2-6",islandId:"m8i-11-2",front:"When should you use estimation instead of an exact calculation?",
   back:"Use estimation when:\n• Checking whether an exact answer is roughly correct.\n• A quick ballpark figure is all that is needed.\n• Working without a calculator and an approximate answer is acceptable.\n• Checking that a calculator result is sensible.\n\nAlways state when an answer is an estimate (use ≈).",difficulty:2,category:"concept"},

  // m8i-11-3 — Venn Diagrams
  {id:"m8fc-11-3-1",islandId:"m8i-11-3",front:"What does the INTERSECTION of two sets mean in a Venn diagram?",
   back:"The intersection contains elements that belong to BOTH sets.\n\nIt is shown by the overlapping region in the middle.\nSymbol: A ∩ B\n\nExample: If A = {multiples of 2 up to 10} and B = {multiples of 3 up to 10},\nthen A ∩ B = {6} — the only number that is both.",difficulty:1,category:"definition"},
  {id:"m8fc-11-3-2",islandId:"m8i-11-3",front:"What does the UNION of two sets mean in a Venn diagram?",
   back:"The union contains ALL elements that belong to A or B or both.\n\nSymbol: A ∪ B\n\nExample: A = {1, 2, 3} and B = {3, 4, 5}.\nA ∪ B = {1, 2, 3, 4, 5} — each element listed once, even if it appears in both.",difficulty:1,category:"definition"},
  {id:"m8fc-11-3-3",islandId:"m8i-11-3",front:"In a class of 30 pupils, 18 study French, 14 study Spanish, and 6 study both. How many study neither?",
   back:"4 pupils study neither.\n\nStep 1: Those who study French only = 18 − 6 = 12\nStep 2: Those who study Spanish only = 14 − 6 = 8\nStep 3: Total studying at least one = 12 + 6 + 8 = 26\nStep 4: Neither = 30 − 26 = 4",difficulty:2,category:"application"},
  {id:"m8fc-11-3-4",islandId:"m8i-11-3",front:"How do you fill in the four regions of a two-set Venn diagram given total, both, A only, B only?",
   back:"Label the four regions:\n• A only = n(A) − n(A ∩ B)\n• Intersection = n(A ∩ B)\n• B only = n(B) − n(A ∩ B)\n• Outside = Total − n(A ∪ B)\n\nwhere n(A ∪ B) = A only + intersection + B only.\nAlways check all four regions add up to the total.",difficulty:2,category:"concept"},
  {id:"m8fc-11-3-5",islandId:"m8i-11-3",front:"40 students were surveyed about sports. 22 play football, 17 play basketball, and 5 play both. How many play football but NOT basketball?",
   back:"17 play football but NOT basketball.\n\nFootball only = n(Football) − n(Both)\n= 22 − 5 = 17\n\nThese 17 are in the football circle only, outside the overlap.",difficulty:2,category:"application"},
  {id:"m8fc-11-3-6",islandId:"m8i-11-3",front:"What does the region OUTSIDE both circles in a Venn diagram represent?",
   back:"The region outside both circles represents elements that belong to NEITHER set.\n\nCalculation: Neither = Total − n(A ∪ B)\n\nExample: If 30 items are surveyed and 24 belong to A ∪ B, then 6 are in neither set.\nAlways include this region when drawing a Venn diagram.",difficulty:1,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-11-1":[
    {q:"A shop sells notebooks for £2.40 each. Amina buys 5 notebooks and pays with a £20 note. How much change does she receive?",opts:["£7.00","£8.00","£12.00","£17.60"],c:1,e:"Total cost = 5 × £2.40 = £12.00. Change = £20.00 − £12.00 = £8.00."},
    {q:"A car travels 150 km in the first 2 hours and 210 km in the next 3 hours. What is the average speed for the whole journey?",opts:["72 km/h","75 km/h","80 km/h","90 km/h"],c:0,e:"Total distance = 150 + 210 = 360 km. Total time = 2 + 3 = 5 hours. Average speed = 360 ÷ 5 = 72 km/h."},
    {q:"There are 240 pupils in Year 8. Three-eighths of them walk to school. How many pupils do NOT walk to school?",opts:["90","120","150","180"],c:2,e:"Walkers = 3/8 × 240 = 90. Non-walkers = 240 − 90 = 150."},
    {q:"A rectangular field is 45 m long and 28 m wide. Fencing costs £12.50 per metre. What is the total cost to fence the perimeter?",opts:["£1,260","£1,512","£1,825","£3,150"],c:2,e:"Perimeter = 2 × (45 + 28) = 2 × 73 = 146 m. Cost = 146 × £12.50 = £1,825."},
    {q:"Tom earns £9.50 per hour. He works 8 hours on Monday and 6 hours on Wednesday. He spends £23.00 on travel. How much does he keep?",opts:["£110.00","£111.00","£113.00","£120.50"],c:0,e:"Total earned = (8 + 6) × £9.50 = 14 × £9.50 = £133.00. Amount kept = £133.00 − £23.00 = £110.00."}
  ],
  "m8i-11-2":[
    {q:"Estimate 487 × 22 by rounding each number to 1 significant figure.",opts:["8,000","10,000","12,000","14,000"],c:1,e:"Round: 487 ≈ 500, 22 ≈ 20. Estimate = 500 × 20 = 10,000. (Actual = 10,714.)"},
    {q:"Two numbers add up to 18 and multiply to give 72. Using guess-and-check, what are the two numbers?",opts:["6 and 12","7 and 11","8 and 10","9 and 9"],c:0,e:"Try 6 + 12 = 18 ✓ and 6 × 12 = 72 ✓. Check others: 8 × 10 = 80 ✗, 9 × 9 = 81 ✗."},
    {q:"Which is the best estimate for 793 ÷ 41?",opts:["2","20","200","2,000"],c:1,e:"Round: 793 ≈ 800, 41 ≈ 40. Estimate = 800 ÷ 40 = 20. (Actual ≈ 19.3.)"},
    {q:"A number is multiplied by 3 and then 7 is added. The result is 34. Use guess-and-check to find the number.",opts:["7","8","9","10"],c:2,e:"Try 9: 9 × 3 = 27, then 27 + 7 = 34 ✓. Check: 8 × 3 + 7 = 31 ✗; 10 × 3 + 7 = 37 ✗."},
    {q:"Estimate the cost of 19 items at £5.95 each, rounding to 1 significant figure.",opts:["£60","£100","£120","£140"],c:2,e:"Round: 19 ≈ 20, £5.95 ≈ £6. Estimate = 20 × £6 = £120."}
  ],
  "m8i-11-3":[
    {q:"In a class of 28 students, 15 like art, 12 like music, and 5 like both. How many students like neither?",opts:["1","4","6","8"],c:2,e:"Art only = 15 − 5 = 10. Music only = 12 − 5 = 7. At least one = 10 + 5 + 7 = 22. Neither = 28 − 22 = 6."},
    {q:"Set A = {2, 4, 6, 8, 10} and Set B = {4, 8, 12}. What is A ∩ B?",opts:["{4, 8}","{2, 6, 10, 12}","{2, 4, 6, 8, 10, 12}","{4}"],c:0,e:"The intersection contains elements in BOTH sets: 4 and 8 appear in both A and B. So A ∩ B = {4, 8}."},
    {q:"50 people were asked if they own a cat or a dog. 24 own a cat, 18 own a dog, and 7 own both. How many own neither?",opts:["8","11","15","19"],c:2,e:"Cat only = 24 − 7 = 17. Dog only = 18 − 7 = 11. At least one = 17 + 7 + 11 = 35. Neither = 50 − 35 = 15."},
    {q:"A ∪ B means:",opts:["Elements in A only","Elements in both A and B","All elements in A or B or both","Elements in neither A nor B"],c:2,e:"Union (∪) means all elements that appear in A, in B, or in both. It is the combined total of all elements across both sets."},
    {q:"In a group of 40, 25 play chess (C) and 20 play draughts (D), and everyone plays at least one game. How many play both?",opts:["3","5","7","10"],c:1,e:"Using inclusion-exclusion: n(C ∪ D) = n(C) + n(D) − n(C ∩ D). So 40 = 25 + 20 − n(C ∩ D), giving n(C ∩ D) = 45 − 40 = 5."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-11-1': `
<h2>Multi-Step Word Problems</h2>
<p>Many real-life situations require more than one calculation to reach an answer. A <strong>multi-step word problem</strong> asks you to chain two or more operations together. Success depends on reading carefully, planning your steps, and checking that your answer is reasonable.</p>

<h3>A four-step approach</h3>
<ol>
  <li><strong>Read</strong> — identify what is given and what is asked.</li>
  <li><strong>Plan</strong> — decide which operations to use and in what order.</li>
  <li><strong>Solve</strong> — work through each step, showing your working.</li>
  <li><strong>Check</strong> — does the answer make sense? Use estimation to verify.</li>
</ol>

<div class="example-box">
<p><strong>Example:</strong> A bus ticket costs £2.75. A group of 8 people buys return tickets (twice the single fare). They share the total cost equally. How much does each person pay?</p>
<p><strong>Solution:</strong><br>
Step 1: Return ticket = 2 × £2.75 = £5.50<br>
Step 2: Total for 8 people = 8 × £5.50 = £44.00<br>
Step 3: Each person pays = £44.00 ÷ 8 = <strong>£5.50</strong><br>
Check: 8 × £5.50 = £44.00 ✓</p>
</div>

<h3>Choosing the right operation</h3>
<p>Key words can signal which operation to use:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ccc">Word/phrase</th><th style="padding:8px;border:1px solid #ccc">Operation</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">total, altogether, combined</td><td style="padding:8px;border:1px solid #ccc">Addition</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">difference, how many more, left over</td><td style="padding:8px;border:1px solid #ccc">Subtraction</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">each, per, times, product</td><td style="padding:8px;border:1px solid #ccc">Multiplication</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">share equally, split, per person</td><td style="padding:8px;border:1px solid #ccc">Division</td></tr>
</table>

<h3>Checking reasonableness</h3>
<p>Always ask: <em>Is this answer the right size?</em> A quick estimate using rounded numbers will tell you whether your exact answer is sensible. For example, if you calculate a monthly salary of £50, that is clearly unreasonable for a full-time job.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Multi-step problem</dt><dd>A problem requiring two or more operations to solve.</dd>
<dt>Operation</dt><dd>A mathematical process: addition, subtraction, multiplication or division.</dd>
<dt>Reasonable</dt><dd>An answer that makes sense in the context of the problem.</dd>
<dt>Intermediate value</dt><dd>An answer found part-way through a multi-step solution.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Stopping after just one step when more are needed — ✅ re-read the question to check you have answered what was asked.</li>
<li>❌ Using the wrong operation — ✅ look for key words and ask what the step is really doing.</li>
<li>❌ Forgetting units in the answer — ✅ include £, km, cm etc. as appropriate.</li>
</ul>`,

'm8i-11-2': `
<h2>Estimation &amp; Guess-and-Check</h2>
<p>Two powerful strategies help when an exact calculation is hard or slow: <strong>estimation</strong> gives a quick approximate answer, and <strong>guess-and-check</strong> finds an exact answer by testing sensible values systematically.</p>

<h3>Estimation by rounding to 1 significant figure</h3>
<p>Round every number to its first non-zero digit, then calculate. This keeps arithmetic simple while giving a useful approximation.</p>

<div class="example-box">
<p><strong>Example:</strong> Estimate 487 × 22.</p>
<p>Round: 487 ≈ 500, &nbsp; 22 ≈ 20.<br>
Estimate = 500 × 20 = <strong>10,000</strong>.<br>
(Actual = 10,714 — so 10,000 is a good estimate.)</p>
</div>

<div class="example-box">
<p><strong>Example:</strong> Estimate 793 ÷ 41.</p>
<p>Round: 793 ≈ 800, &nbsp; 41 ≈ 40.<br>
Estimate = 800 ÷ 40 = <strong>20</strong>.<br>
(Actual ≈ 19.3 — close to 20.)</p>
</div>

<h3>The guess-and-check strategy</h3>
<p>Useful when you cannot easily form an equation. Follow this process:</p>
<ol>
  <li>Make a <strong>sensible first guess</strong> based on context.</li>
  <li><strong>Test</strong> your guess by substituting it into the problem.</li>
  <li>If the result is too high, try a lower value; if too low, try higher.</li>
  <li>Repeat until the exact answer is found.</li>
</ol>

<div class="example-box">
<p><strong>Example:</strong> Two numbers add to 18 and multiply to 72. Find them.</p>
<p>Guess 1: 9 &amp; 9 → 9 × 9 = 81 (too high, make them more different).<br>
Guess 2: 8 &amp; 10 → 8 × 10 = 80 (still too high).<br>
Guess 3: 6 &amp; 12 → 6 × 12 = 72 ✓ and 6 + 12 = 18 ✓<br>
Answer: <strong>6 and 12</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Estimate</dt><dd>An approximate answer found by rounding, used to check or replace exact calculation.</dd>
<dt>1 significant figure</dt><dd>Rounding to only the first non-zero digit of a number.</dd>
<dt>Guess-and-check</dt><dd>A systematic strategy of testing values until the correct one is found.</dd>
<dt>≈</dt><dd>The symbol for "approximately equal to", used when giving an estimate.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Rounding incorrectly — ✅ check that only the first non-zero digit is kept; replace all others with zeros.</li>
<li>❌ Guessing randomly — ✅ use the result of each test to improve your next guess (too high → go lower).</li>
<li>❌ Forgetting to verify both conditions in guess-and-check — ✅ check ALL conditions, not just one.</li>
</ul>`,

'm8i-11-3': `
<h2>Venn Diagrams</h2>
<p>A <strong>Venn diagram</strong> uses overlapping circles inside a rectangle to show how items are sorted into sets. The overlapping region shows items belonging to <em>both</em> sets; the rectangle represents the <em>universal set</em> (every item being considered).</p>

<h3>The four regions of a two-set Venn diagram</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#f3e5f5"><th style="padding:8px;border:1px solid #ccc">Region</th><th style="padding:8px;border:1px solid #ccc">Meaning</th><th style="padding:8px;border:1px solid #ccc">Formula</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">A only</td><td style="padding:8px;border:1px solid #ccc">In A but not B</td><td style="padding:8px;border:1px solid #ccc">n(A) − n(A ∩ B)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">A ∩ B (overlap)</td><td style="padding:8px;border:1px solid #ccc">In both A and B</td><td style="padding:8px;border:1px solid #ccc">given directly</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">B only</td><td style="padding:8px;border:1px solid #ccc">In B but not A</td><td style="padding:8px;border:1px solid #ccc">n(B) − n(A ∩ B)</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Neither</td><td style="padding:8px;border:1px solid #ccc">Outside both circles</td><td style="padding:8px;border:1px solid #ccc">Total − n(A ∪ B)</td></tr>
</table>

<h3>The inclusion-exclusion rule</h3>
<p>To count elements in A or B (or both) without double-counting the overlap:<br>
<strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong></p>

<div class="example-box">
<p><strong>Example:</strong> In a class of 30, 18 study French and 14 study Spanish, with 6 studying both. How many study neither?</p>
<p>French only = 18 − 6 = 12<br>
Spanish only = 14 − 6 = 8<br>
At least one = 12 + 6 + 8 = 26<br>
Neither = 30 − 26 = <strong>4</strong></p>
</div>

<div class="example-box">
<p><strong>Example:</strong> In a group of 40 people, everyone plays chess or draughts (or both). 25 play chess and 20 play draughts. How many play both?</p>
<p>n(C ∪ D) = n(C) + n(D) − n(C ∩ D)<br>
40 = 25 + 20 − n(C ∩ D)<br>
n(C ∩ D) = 45 − 40 = <strong>5</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Intersection (A ∩ B)</dt><dd>Elements belonging to both set A and set B — shown in the overlapping region.</dd>
<dt>Union (A ∪ B)</dt><dd>All elements belonging to A or B or both.</dd>
<dt>Universal set (ξ)</dt><dd>The complete collection of items being considered, shown as the rectangle.</dd>
<dt>Complement (A')</dt><dd>Everything in the universal set that is NOT in set A.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Counting the overlap twice — ✅ subtract n(A ∩ B) once when using inclusion-exclusion.</li>
<li>❌ Forgetting to fill in the "neither" region — ✅ always check that all four regions add up to the total.</li>
<li>❌ Confusing ∩ and ∪ — ✅ ∩ looks like the letter n for "and both"; ∪ looks like a cup that holds everything.</li>
</ul>`

});
