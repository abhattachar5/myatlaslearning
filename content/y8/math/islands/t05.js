// math-y8-t05.js — Year 8 Maths Topic 5: Integers & Operations
// Islands: m8i-05-1 .. m8i-05-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-05-1 — Understanding & Comparing Integers
  {id:"m8fc-05-1-1",islandId:"m8i-05-1",front:"What is an integer? Give three examples.",
   back:"An integer is any whole number — positive, negative or zero.\nExamples: −5, 0, 7.\n\nIntegers do NOT include fractions or decimals like 2.5 or ½.",difficulty:1,category:"definition"},
  {id:"m8fc-05-1-2",islandId:"m8i-05-1",front:"Which is larger: −8 or −3? Explain using a number line.",
   back:"−3 is larger.\n\nOn a number line, numbers increase as you move right.\n−3 lies to the RIGHT of −8, so −3 > −8.\n\nRule: the integer closer to zero (less negative) is always larger.",difficulty:1,category:"concept"},
  {id:"m8fc-05-1-3",islandId:"m8i-05-1",front:"Place these integers in order from smallest to largest: 4, −7, 0, −2, 5.",
   back:"−7, −2, 0, 4, 5\n\nOn a number line, move from left to right:\n−7 is furthest left (most negative), then −2, then 0, then positives 4 and 5.",difficulty:1,category:"calculation"},
  {id:"m8fc-05-1-4",islandId:"m8i-05-1",front:"What is the absolute value of −9? What does absolute value mean?",
   back:"The absolute value of −9 is 9.\n\nAbsolute value is the distance from zero on the number line — it is always positive (or zero).\nWritten |−9| = 9 and |9| = 9.",difficulty:2,category:"definition"},
  {id:"m8fc-05-1-5",islandId:"m8i-05-1",front:"A submarine is 40 m below sea level and a plane is 2,000 m above. Write each as an integer and state which is larger.",
   back:"Submarine: −40 m\nPlane: +2,000 m\n\n+2,000 > −40, so the plane's altitude is the larger integer.\nPositive integers represent positions above sea level; negative integers represent below.",difficulty:2,category:"application"},
  {id:"m8fc-05-1-6",islandId:"m8i-05-1",front:"On a vertical number line (thermometer), which direction do larger values lie?",
   back:"Larger values lie UPWARD.\n\nA thermometer is a vertical number line — temperature rises going up.\nSo −5 °C is below 0 °C, and 10 °C is above 0 °C.\nThis mirrors horizontal number lines: up = right = larger.",difficulty:1,category:"concept"},

  // m8i-05-2 — Add & Subtract Integers
  {id:"m8fc-05-2-1",islandId:"m8i-05-2",front:"State the two rules for adding integers with the SAME sign.",
   back:"Add the absolute values and keep the common sign.\n\nExamples:\n(+5) + (+3) = +8\n(−5) + (−3) = −8\n\nBoth positive → positive result. Both negative → negative result.",difficulty:1,category:"definition"},
  {id:"m8fc-05-2-2",islandId:"m8i-05-2",front:"State the rule for adding integers with DIFFERENT signs.",
   back:"Subtract the smaller absolute value from the larger, then take the sign of the number with the larger absolute value.\n\nExample: (−9) + (+4)\n|−9| = 9, |+4| = 4. Difference = 5. Sign comes from −9 (larger absolute value).\nAnswer: −5",difficulty:2,category:"definition"},
  {id:"m8fc-05-2-3",islandId:"m8i-05-2",front:"Calculate: −6 + (−8)",
   back:"−14\n\nSame signs (both negative): add absolute values and keep the negative sign.\n|−6| + |−8| = 6 + 8 = 14\nAnswer: −14",difficulty:1,category:"calculation"},
  {id:"m8fc-05-2-4",islandId:"m8i-05-2",front:"Calculate: 7 − (−3)",
   back:"10\n\nSubtracting a negative is the same as adding a positive: 7 − (−3) = 7 + 3 = 10.\n\nRule: subtracting a negative ADDS the number instead.",difficulty:2,category:"calculation"},
  {id:"m8fc-05-2-5",islandId:"m8i-05-2",front:"The temperature was −4 °C and dropped a further 9 °C. What is the new temperature?",
   back:"−13 °C\n\n−4 + (−9) = −13\n\nBoth negative: add absolute values (4 + 9 = 13) and keep the negative sign.",difficulty:2,category:"application"},
  {id:"m8fc-05-2-6",islandId:"m8i-05-2",front:"Calculate: −5 − (−12)",
   back:"7\n\n−5 − (−12) = −5 + 12\nDifferent signs: |12| − |5| = 7. Sign from +12 (larger absolute value).\nAnswer: +7",difficulty:2,category:"calculation"},

  // m8i-05-3 — Multiply & Divide Integers
  {id:"m8fc-05-3-1",islandId:"m8i-05-3",front:"State the sign rules for multiplying or dividing two integers.",
   back:"• Same signs → POSITIVE result\n• Different signs → NEGATIVE result\n\nExamples:\n(+4) × (+3) = +12\n(−4) × (−3) = +12\n(+4) × (−3) = −12\n(−4) × (+3) = −12",difficulty:1,category:"definition"},
  {id:"m8fc-05-3-2",islandId:"m8i-05-3",front:"Calculate: (−6) × (−7)",
   back:"42\n\nSame signs (both negative) → positive.\n6 × 7 = 42\nAnswer: +42",difficulty:1,category:"calculation"},
  {id:"m8fc-05-3-3",islandId:"m8i-05-3",front:"Calculate: (−36) ÷ (+9)",
   back:"−4\n\nDifferent signs (negative ÷ positive) → negative.\n36 ÷ 9 = 4\nAnswer: −4",difficulty:1,category:"calculation"},
  {id:"m8fc-05-3-4",islandId:"m8i-05-3",front:"What is the sign of the product (−2) × (−3) × (−4)?",
   back:"Negative (−24).\n\nCount the negative factors: there are 3 (an odd number).\nOdd number of negatives → negative product.\n2 × 3 × 4 = 24, so the answer is −24.\n\nKey rule: even number of negatives → positive; odd → negative.",difficulty:2,category:"concept"},
  {id:"m8fc-05-3-5",islandId:"m8i-05-3",front:"Find the missing number: □ × (−5) = 40",
   back:"□ = −8\n\nDivide both sides by −5: 40 ÷ (−5) = −8.\nCheck: (−8) × (−5) = +40 ✓ (same signs → positive).",difficulty:2,category:"calculation"},
  {id:"m8fc-05-3-6",islandId:"m8i-05-3",front:"A lift descends 3 floors per minute. After 4 minutes, what integer represents the total change in floors?",
   back:"−12 floors\n\nDescending = negative direction: −3 floors per minute.\n−3 × 4 = −12\n\nThe lift has moved 12 floors downward, represented as −12.",difficulty:2,category:"application"},

  // m8i-05-4 — Evaluate Integer Expressions
  {id:"m8fc-05-4-1",islandId:"m8i-05-4",front:"What does BODMAS stand for and what order do operations follow?",
   back:"Brackets, Orders (powers/roots), Division, Multiplication, Addition, Subtraction.\n\nDivision and Multiplication have equal priority — work left to right.\nAddition and Subtraction also share a level — work left to right.\n\nExample: 3 + 2 × 4 = 3 + 8 = 11 (not 20).",difficulty:1,category:"definition"},
  {id:"m8fc-05-4-2",islandId:"m8i-05-4",front:"Evaluate: −3 × (2 + (−6))",
   back:"12\n\nStep 1 — Brackets: 2 + (−6) = −4\nStep 2 — Multiply: −3 × (−4) = +12 (same signs → positive)\nAnswer: 12",difficulty:2,category:"calculation"},
  {id:"m8fc-05-4-3",islandId:"m8i-05-4",front:"Evaluate: 20 ÷ (−4) − 3",
   back:"−8\n\nStep 1 — Division: 20 ÷ (−4) = −5 (different signs → negative)\nStep 2 — Subtraction: −5 − 3 = −8\nAnswer: −8",difficulty:2,category:"calculation"},
  {id:"m8fc-05-4-4",islandId:"m8i-05-4",front:"Evaluate: (−2)² + (−3)",
   back:"1\n\nStep 1 — Order (power): (−2)² = (−2) × (−2) = +4\nStep 2 — Addition: 4 + (−3) = 4 − 3 = 1\nAnswer: 1\n\nNote: (−2)² = +4 because two negatives multiply to a positive.",difficulty:3,category:"calculation"},
  {id:"m8fc-05-4-5",islandId:"m8i-05-4",front:"A golfer scores −3, −2, +1 and −4 over four rounds. What is the total score?",
   back:"−8\n\nAdd the integers in order:\n−3 + (−2) = −5\n−5 + 1 = −4\n−4 + (−4) = −8\n\nTotal score: −8 (8 under par).",difficulty:2,category:"application"},
  {id:"m8fc-05-4-6",islandId:"m8i-05-4",front:"Evaluate: −4 × (−2) + (−3) × 5",
   back:"−7\n\nStep 1 — Multiplications (left to right):\n−4 × (−2) = +8\n−3 × 5 = −15\nStep 2 — Addition:\n8 + (−15) = 8 − 15 = −7\nAnswer: −7",difficulty:3,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-05-1":[
    {q:"Which list of integers is in order from smallest to largest?",opts:["−1, −5, 0, 3","−5, −1, 0, 3","0, −1, −5, 3","3, 0, −1, −5"],c:1,e:"On a number line, −5 is furthest left, then −1, then 0, then 3. Smallest to largest: −5, −1, 0, 3."},
    {q:"Which integer has the greatest absolute value?",opts:["−12","8","−5","11"],c:0,e:"Absolute value is distance from zero. |−12| = 12, |8| = 8, |−5| = 5, |11| = 11. The greatest is 12, so the answer is −12."},
    {q:"A diver is 15 m below sea level and a bird is 30 m above. Which integer correctly represents the diver's position?",opts:["15","−15","30","−30"],c:1,e:"Below sea level is represented by a negative integer. The diver is at −15 m."},
    {q:"Which statement is true?",opts:["−7 > −4","0 > 2","−3 < 1","−10 > 5"],c:2,e:"−3 is to the left of 1 on the number line so −3 < 1. The others are false: −7 < −4, 0 < 2, −10 < 5."},
    {q:"What is |−20| − |6|?",opts:["−14","14","−26","26"],c:1,e:"|−20| = 20 and |6| = 6. So 20 − 6 = 14. Absolute values are always non-negative."}
  ],
  "m8i-05-2":[
    {q:"Calculate: (−8) + (−5)",opts:["−13","13","−3","3"],c:0,e:"Same signs (both negative): add absolute values 8 + 5 = 13, keep the negative sign. Answer: −13."},
    {q:"Calculate: 6 + (−10)",opts:["16","−16","−4","4"],c:2,e:"Different signs: |10| − |6| = 4. Sign comes from −10 (larger absolute value). Answer: −4."},
    {q:"Calculate: −3 − (−9)",opts:["−12","12","6","−6"],c:2,e:"Subtracting a negative adds: −3 − (−9) = −3 + 9 = +6. |9| − |3| = 6, sign from +9."},
    {q:"The temperature falls from −2 °C by 7 degrees. What is the new temperature?",opts:["5 °C","−5 °C","9 °C","−9 °C"],c:3,e:"−2 + (−7) = −9. Both negative: 2 + 7 = 9, keep negative. Answer: −9 °C."},
    {q:"Which expression has the greatest value?",opts:["−7 + (−3)","−2 + (−9)","4 + (−8)","−1 + 6"],c:3,e:"Evaluate each: −7+(−3)=−10; −2+(−9)=−11; 4+(−8)=−4; −1+6=5. The greatest value is 5."}
  ],
  "m8i-05-3":[
    {q:"Calculate: (−9) × (+4)",opts:["36","−36","−5","5"],c:1,e:"Different signs → negative. 9 × 4 = 36. Answer: −36."},
    {q:"Calculate: (−5) × (−8)",opts:["−40","40","−13","13"],c:1,e:"Same signs (both negative) → positive. 5 × 8 = 40. Answer: +40."},
    {q:"Calculate: (−42) ÷ (−6)",opts:["−7","7","−48","48"],c:1,e:"Same signs (both negative) → positive. 42 ÷ 6 = 7. Answer: +7."},
    {q:"Find the missing number: (−3) × □ = −18",opts:["−6","6","−15","15"],c:1,e:"−18 ÷ (−3) = +6. Check: (−3) × 6 = −18 ✓ (different signs → negative)."},
    {q:"What is the sign of (−1) × (−1) × (−1) × (−1) × (−1)?",opts:["Positive","Negative","Zero","Cannot be determined"],c:1,e:"Five negative factors — an ODD number of negatives gives a negative product. (−1)⁵ = −1."}
  ],
  "m8i-05-4":[
    {q:"Evaluate: −2 × (5 + (−9))",opts:["8","−8","2","−2"],c:0,e:"Brackets first: 5 + (−9) = −4. Then −2 × (−4) = +8 (same signs → positive)."},
    {q:"Evaluate: 18 ÷ (−3) + 7",opts:["−1","1","13","−13"],c:1,e:"Division first: 18 ÷ (−3) = −6 (different signs → negative). Then −6 + 7 = 1. Answer: 1."},
    {q:"Evaluate: (−3)² − 15",opts:["−6","6","−24","24"],c:0,e:"Order (power): (−3)² = 9. Then 9 − 15 = −6. Answer: −6."},
    {q:"A shark swims 5 m deeper every minute. What integer expression gives its depth after 6 minutes, starting from the surface?",opts:["5 + 6","5 × 6","−5 × 6","−5 + 6"],c:2,e:"Descending is negative: −5 m per minute. After 6 minutes: −5 × 6 = −30 m. The expression is −5 × 6."},
    {q:"Evaluate: −6 + 4 × (−3) − (−2)",opts:["−16","−14","16","−20"],c:0,e:"Multiplication first: 4 × (−3) = −12. Then left to right: −6 + (−12) = −18. Then −18 − (−2) = −18 + 2 = −16."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-05-1': `
<h2>Understanding &amp; Comparing Integers</h2>
<p>Integers are the family of numbers that includes all the whole numbers — positive, negative and zero. Being able to place them on a number line and compare them confidently is the foundation for every integer calculation.</p>

<h3>What are integers?</h3>
<p>The set of integers is: … −3, −2, −1, 0, 1, 2, 3, …<br>
They do <strong>not</strong> include fractions or decimals. Every positive integer has a corresponding negative integer called its <strong>opposite</strong> (e.g. +5 and −5).</p>

<h3>Number lines — horizontal and vertical</h3>
<p>On a <strong>horizontal</strong> number line, integers increase from left to right. On a <strong>vertical</strong> number line (like a thermometer), integers increase upwards. Zero is always in the centre.</p>
<div class="example-box">
<p><strong>Example:</strong> Plot −4, 0 and 3 and state which is greatest.</p>
<p>Reading left to right: −4 &nbsp; 0 &nbsp; 3.<br>
3 is furthest right, so <strong>3 is the greatest</strong>. −4 is smallest.</p>
</div>

<h3>Comparing integers</h3>
<p>Use the number line to compare. The number <strong>further right</strong> (or further up) is always greater.</p>
<div class="example-box">
<p><strong>Example:</strong> Which is greater, −8 or −3?</p>
<p>−3 lies to the right of −8, so <strong>−3 &gt; −8</strong>.<br>
Think of a thermometer: −3 °C is warmer than −8 °C.</p>
</div>

<h3>Absolute value</h3>
<p>The <strong>absolute value</strong> of an integer is its distance from zero — always positive or zero. Written with bars: |−7| = 7 and |7| = 7.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Integer</dt><dd>Any whole number, positive, negative or zero.</dd>
<dt>Negative integer</dt><dd>A whole number less than zero (e.g. −1, −2, −100).</dd>
<dt>Absolute value</dt><dd>The distance of an integer from zero; always non-negative.</dd>
<dt>Opposite</dt><dd>Two integers the same distance from zero on opposite sides (e.g. +5 and −5).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking −10 is greater than −2 because 10 &gt; 2 — ✅ more negative means smaller; −2 &gt; −10.</li>
<li>❌ Forgetting zero is an integer — ✅ zero is an integer and is neither positive nor negative.</li>
<li>❌ Confusing absolute value with the integer itself — ✅ |−5| = 5, not −5.</li>
</ul>`,

'm8i-05-2': `
<h2>Add &amp; Subtract Integers</h2>
<p>Adding and subtracting integers follows clear rules based on the <strong>signs</strong> of the numbers involved. A number line helps you see what is happening.</p>

<h3>Adding integers — same signs</h3>
<p>When both integers have the <strong>same sign</strong>, add their absolute values and keep that sign.</p>
<div class="example-box">
<p><strong>Example:</strong> (−6) + (−4)</p>
<p>Both negative → add: 6 + 4 = 10. Keep negative.<br>
Answer: <strong>−10</strong></p>
</div>

<h3>Adding integers — different signs</h3>
<p>When the integers have <strong>different signs</strong>, subtract the smaller absolute value from the larger, then take the sign of the integer with the <em>larger</em> absolute value.</p>
<div class="example-box">
<p><strong>Example:</strong> (−9) + (+4)</p>
<p>|−9| = 9, |+4| = 4. Difference: 9 − 4 = 5. Sign from −9 (larger absolute value).<br>
Answer: <strong>−5</strong></p>
</div>

<h3>Subtracting integers</h3>
<p><strong>Subtracting a number is the same as adding its opposite.</strong> Rewrite the subtraction as addition, then apply the addition rules above.</p>
<div class="example-box">
<p><strong>Example:</strong> 7 − (−3)</p>
<p>Rewrite: 7 + (+3) = 10.<br>
Example 2: −5 − (−12) = −5 + 12 = +7.</p>
</div>

<h3>Using a number line</h3>
<p>Start at the first number. Adding a positive → move right. Adding a negative → move left.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Additive inverse</dt><dd>The opposite of a number; their sum is zero (e.g. 7 + (−7) = 0).</dd>
<dt>Absolute value</dt><dd>The size of the number ignoring its sign.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing 3 − (−5) = 3 − 5 — ✅ two negatives make a positive: 3 − (−5) = 3 + 5 = 8.</li>
<li>❌ Keeping the sign of the number with the smaller absolute value — ✅ sign comes from the larger absolute value.</li>
<li>❌ Forgetting that adding a negative is the same as subtracting — ✅ 5 + (−3) = 5 − 3 = 2.</li>
</ul>`,

'm8i-05-3': `
<h2>Multiply &amp; Divide Integers</h2>
<p>The sign rules for multiplication and division are simple and symmetrical — you only need to remember two cases.</p>

<h3>Sign rules</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Signs of the two integers</th><th style="padding:8px;border:1px solid #ccc">Result sign</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Same (both + or both −)</td><td style="padding:8px;border:1px solid #ccc"><strong>Positive</strong></td><td style="padding:8px;border:1px solid #ccc">(−4) × (−3) = +12</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Different (one +, one −)</td><td style="padding:8px;border:1px solid #ccc"><strong>Negative</strong></td><td style="padding:8px;border:1px solid #ccc">(+4) × (−3) = −12</td></tr>
</table>
<p>These rules apply to both <strong>multiplication</strong> and <strong>division</strong>.</p>

<h3>Multiplying integers</h3>
<div class="example-box">
<p><strong>Example:</strong> (−8) × (+5) and (−6) × (−7)</p>
<p>(−8) × (+5): different signs → negative. 8 × 5 = 40. Answer: <strong>−40</strong>.<br>
(−6) × (−7): same signs → positive. 6 × 7 = 42. Answer: <strong>+42</strong>.</p>
</div>

<h3>Dividing integers</h3>
<div class="example-box">
<p><strong>Example:</strong> (−36) ÷ (+9) and (−36) ÷ (−9)</p>
<p>(−36) ÷ (+9): different signs → negative. 36 ÷ 9 = 4. Answer: <strong>−4</strong>.<br>
(−36) ÷ (−9): same signs → positive. 36 ÷ 9 = 4. Answer: <strong>+4</strong>.</p>
</div>

<h3>Multiple negatives</h3>
<p>When multiplying a chain of integers, count the negative factors: <strong>even count → positive; odd count → negative</strong>.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Product</dt><dd>The result of multiplying two or more numbers.</dd>
<dt>Quotient</dt><dd>The result of dividing one number by another.</dd>
<dt>Sign rule</dt><dd>The rule determining whether a product or quotient is positive or negative.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking (−4) × (−4) is negative — ✅ same signs give a positive: (−4) × (−4) = +16.</li>
<li>❌ Confusing the addition rule (different signs → subtract) with the multiplication rule — ✅ for ×/÷, different signs always give a negative.</li>
<li>❌ Forgetting to determine the sign before calculating — ✅ decide the sign first, then do the arithmetic.</li>
</ul>`,

'm8i-05-4': `
<h2>Evaluate Integer Expressions</h2>
<p>When an expression involves multiple operations with integers, you must follow the correct <strong>order of operations (BODMAS)</strong> and apply sign rules at each step.</p>

<h3>BODMAS with integers</h3>
<p><strong>B</strong>rackets → <strong>O</strong>rders (powers/roots) → <strong>D</strong>ivision &amp; <strong>M</strong>ultiplication (left to right) → <strong>A</strong>ddition &amp; <strong>S</strong>ubtraction (left to right)</p>
<div class="example-box">
<p><strong>Example:</strong> Evaluate −3 × (2 + (−6))</p>
<p>Step 1 — Brackets: 2 + (−6) = −4<br>
Step 2 — Multiply: −3 × (−4) = +12 (same signs → positive)<br>
Answer: <strong>12</strong></p>
</div>

<h3>Powers of negative numbers</h3>
<p>When a negative number is raised to a power, work out the sign carefully.</p>
<div class="example-box">
<p><strong>Example:</strong> (−3)² vs −3²</p>
<p>(−3)² = (−3) × (−3) = +9 &nbsp; (the bracket means the negative is squared)<br>
−3² = −(3²) = −9 &nbsp; (only the 3 is squared; the negative sign is separate)</p>
</div>

<h3>Multi-step integer expressions</h3>
<div class="example-box">
<p><strong>Example:</strong> Evaluate −6 + 4 × (−3) − (−2)</p>
<p>Step 1 — Multiplication: 4 × (−3) = −12<br>
Step 2 — Addition (left to right): −6 + (−12) = −18<br>
Step 3 — Subtraction: −18 − (−2) = −18 + 2 = −16<br>
Answer: <strong>−16</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>BODMAS</dt><dd>The order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction.</dd>
<dt>Expression</dt><dd>A combination of numbers and operations without an equals sign.</dd>
<dt>Order of operations</dt><dd>The agreed sequence for evaluating expressions to always get the same result.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Working left to right without considering BODMAS — ✅ always apply the order of operations.</li>
<li>❌ Treating (−2)² as −4 — ✅ (−2)² = +4 because negative × negative = positive.</li>
<li>❌ Forgetting to change the sign when subtracting a negative — ✅ − (−n) = + n at every step.</li>
</ul>`

});
