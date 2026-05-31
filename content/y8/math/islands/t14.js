// math-y8-t14.js — Year 8 Maths Topic 14: Number Sequences
// Islands: m8i-14-1 .. m8i-14-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-14-1 — Arithmetic Sequences
  {id:"m8fc-14-1-1",islandId:"m8i-14-1",front:"What is an arithmetic sequence?",
   back:"An arithmetic sequence is a list of numbers where you add (or subtract) the same amount each time.\n\nThis fixed amount is called the common difference (d).\nExample: 3, 7, 11, 15, … has d = +4.",difficulty:1,category:"definition"},
  {id:"m8fc-14-1-2",islandId:"m8i-14-1",front:"Find the common difference of: 5, 11, 17, 23, …",
   back:"d = 6\n\nSubtract any term from the next:\n11 − 5 = 6, 17 − 11 = 6, 23 − 17 = 6.\nThe common difference is +6.",difficulty:1,category:"calculation"},
  {id:"m8fc-14-1-3",islandId:"m8i-14-1",front:"Continue the sequence: 40, 34, 28, 22, __",
   back:"The next term is 16.\n\nCommon difference: 34 − 40 = −6 (decreasing by 6 each time).\n22 − 6 = 16.",difficulty:1,category:"calculation"},
  {id:"m8fc-14-1-4",islandId:"m8i-14-1",front:"Is the sequence 2, 4, 8, 16 arithmetic? Why?",
   back:"No — it is NOT arithmetic.\n\nIn an arithmetic sequence, the difference between consecutive terms must be constant.\n4 − 2 = 2, 8 − 4 = 4, 16 − 8 = 8.\nThe differences are 2, 4, 8 — they are not the same, so it is not arithmetic.",difficulty:2,category:"concept"},
  {id:"m8fc-14-1-5",islandId:"m8i-14-1",front:"A sequence starts at 7 and has a common difference of −3. Write the first five terms.",
   back:"7, 4, 1, −2, −5\n\nStart at 7, then subtract 3 each time:\n7 → 4 → 1 → −2 → −5.",difficulty:2,category:"application"},
  {id:"m8fc-14-1-6",islandId:"m8i-14-1",front:"A staircase has 3 steps on the first flight and adds 4 steps each extra flight. How many steps are on the 5th flight?",
   back:"19 steps.\n\nThis is an arithmetic sequence: 3, 7, 11, 15, 19.\nd = 4. The 5th term = 3 + (4 × 4) = 3 + 16 = 19.",difficulty:2,category:"application"},

  // m8i-14-2 — Geometric Sequences
  {id:"m8fc-14-2-1",islandId:"m8i-14-2",front:"What is a geometric sequence?",
   back:"A geometric sequence is a list of numbers where each term is multiplied by the same amount to get the next term.\n\nThis fixed multiplier is called the common ratio (r).\nExample: 2, 6, 18, 54, … has r = 3.",difficulty:1,category:"definition"},
  {id:"m8fc-14-2-2",islandId:"m8i-14-2",front:"Find the common ratio of: 3, 12, 48, 192, …",
   back:"r = 4\n\nDivide any term by the previous term:\n12 ÷ 3 = 4, 48 ÷ 12 = 4, 192 ÷ 48 = 4.\nThe common ratio is 4.",difficulty:1,category:"calculation"},
  {id:"m8fc-14-2-3",islandId:"m8i-14-2",front:"Continue the sequence: 160, 80, 40, 20, __",
   back:"The next term is 10.\n\nCommon ratio: 80 ÷ 160 = 0.5 (halving each time).\n20 × 0.5 = 10.",difficulty:1,category:"calculation"},
  {id:"m8fc-14-2-4",islandId:"m8i-14-2",front:"How do you tell an arithmetic sequence from a geometric sequence?",
   back:"Arithmetic: look for a constant DIFFERENCE (add or subtract the same number each time).\nGeometric: look for a constant RATIO (multiply or divide by the same number each time).\n\nTest: 5, 10, 15 → differences +5 = arithmetic.\n5, 10, 20 → ratios ×2 = geometric.",difficulty:2,category:"concept"},
  {id:"m8fc-14-2-5",islandId:"m8i-14-2",front:"A geometric sequence starts at 5 and has a common ratio of 3. Write the first four terms.",
   back:"5, 15, 45, 135\n\nMultiply by 3 each time:\n5 × 3 = 15, 15 × 3 = 45, 45 × 3 = 135.",difficulty:2,category:"application"},
  {id:"m8fc-14-2-6",islandId:"m8i-14-2",front:"A bacteria colony doubles every hour starting with 50 cells. What are the counts for hours 0–3?",
   back:"50, 100, 200, 400\n\nThis is a geometric sequence with r = 2.\nHour 0: 50\nHour 1: 50 × 2 = 100\nHour 2: 100 × 2 = 200\nHour 3: 200 × 2 = 400",difficulty:3,category:"application"},

  // m8i-14-3 — Expressions for Sequences
  {id:"m8fc-14-3-1",islandId:"m8i-14-3",front:"What does 'nth term' mean for a sequence?",
   back:"The nth term (or general term) is an expression that lets you calculate any term in the sequence directly, without listing all the terms before it.\n\nExample: if the nth term = 4n + 1, then the 6th term = 4(6) + 1 = 25.",difficulty:1,category:"definition"},
  {id:"m8fc-14-3-2",islandId:"m8i-14-3",front:"Write the nth term for the arithmetic sequence: 3, 7, 11, 15, …",
   back:"nth term = 4n − 1\n\nStep 1: Common difference d = 4, so start with 4n.\nStep 2: When n = 1, 4(1) = 4. But the first term is 3, so subtract 1.\n4n − 1: check: n=1 → 3 ✓, n=2 → 7 ✓, n=3 → 11 ✓.",difficulty:2,category:"calculation"},
  {id:"m8fc-14-3-3",islandId:"m8i-14-3",front:"Using the nth term expression 5n − 2, find the 10th term.",
   back:"The 10th term is 48.\n\nSubstitute n = 10:\n5(10) − 2 = 50 − 2 = 48.",difficulty:1,category:"calculation"},
  {id:"m8fc-14-3-4",islandId:"m8i-14-3",front:"Write the nth term for the arithmetic sequence: 10, 7, 4, 1, …",
   back:"nth term = −3n + 13\n\nStep 1: d = −3, so start with −3n.\nStep 2: When n = 1, −3(1) = −3. First term is 10, so we need to add 13.\n−3n + 13: check: n=1 → 10 ✓, n=2 → 7 ✓, n=3 → 4 ✓.",difficulty:2,category:"calculation"},
  {id:"m8fc-14-3-5",islandId:"m8i-14-3",front:"Is 52 a term in the sequence with nth term 6n + 4? Explain.",
   back:"Yes — it is the 8th term.\n\nSet 6n + 4 = 52:\n6n = 48\nn = 8\nSince n = 8 is a positive whole number, 52 IS in the sequence.",difficulty:3,category:"application"},
  {id:"m8fc-14-3-6",islandId:"m8i-14-3",front:"A geometric sequence starts at 2 with common ratio 3. Write an expression for the nth term.",
   back:"nth term = 2 × 3^(n−1)\n\nFor a geometric sequence: nth term = a × r^(n−1)\nwhere a is the first term and r is the common ratio.\na = 2, r = 3: nth term = 2 × 3^(n−1).\nCheck: n=1 → 2×1 = 2 ✓, n=2 → 2×3 = 6 ✓, n=3 → 2×9 = 18 ✓.",difficulty:3,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-14-1":[
    {q:"What is the common difference of the sequence 8, 13, 18, 23, …?",opts:["3","4","5","6"],c:2,e:"Subtract consecutive terms: 13 − 8 = 5, 18 − 13 = 5, 23 − 18 = 5. The common difference is 5."},
    {q:"What is the next term in the sequence 50, 43, 36, 29, …?",opts:["20","21","22","23"],c:2,e:"Common difference: 43 − 50 = −7. Subtract 7 from 29: 29 − 7 = 22."},
    {q:"Which sequence is arithmetic?",opts:["1, 2, 4, 8, 16","3, 6, 12, 24, 48","5, 10, 15, 20, 25","2, 3, 5, 8, 13"],c:2,e:"5, 10, 15, 20, 25 has a constant difference of +5. The others multiply by 2, multiply by 2, and follow the Fibonacci pattern — not arithmetic."},
    {q:"An arithmetic sequence has first term 2 and common difference 7. What is the 6th term?",opts:["35","37","38","42"],c:1,e:"6th term = 2 + (5 × 7) = 2 + 35 = 37. Use: nth term = first term + (n − 1) × d."},
    {q:"The sequence −4, 1, 6, 11, … is arithmetic. What is the 4th term?",opts:["9","10","11","16"],c:2,e:"Common difference = 1 − (−4) = 5. 4th term = −4 + (3 × 5) = −4 + 15 = 11."}
  ],
  "m8i-14-2":[
    {q:"What is the common ratio of the sequence 4, 12, 36, 108, …?",opts:["2","3","4","8"],c:1,e:"Divide consecutive terms: 12 ÷ 4 = 3, 36 ÷ 12 = 3, 108 ÷ 36 = 3. The common ratio is 3."},
    {q:"What is the next term in the geometric sequence 256, 128, 64, 32, …?",opts:["8","12","16","24"],c:2,e:"Common ratio: 128 ÷ 256 = 0.5. Next term: 32 × 0.5 = 16."},
    {q:"A geometric sequence starts at 6 with common ratio 2. What is the 5th term?",opts:["48","64","96","120"],c:2,e:"Terms: 6, 12, 24, 48, 96. 5th term = 6 × 2⁴ = 6 × 16 = 96."},
    {q:"Which of these sequences is geometric?",opts:["2, 4, 6, 8, 10","1, 3, 9, 27, 81","5, 10, 15, 20, 25","3, 6, 10, 15, 21"],c:1,e:"1, 3, 9, 27, 81 multiplies by 3 each time — constant ratio r = 3. The others add a constant (arithmetic) or increase by growing differences."},
    {q:"A population of rabbits doubles every month starting with 12. How many rabbits are there after 4 months?",opts:["48","96","144","192"],c:3,e:"Geometric sequence with r = 2: 12, 24, 48, 96, 192. After 4 months (4 doublings): 12 × 2⁴ = 12 × 16 = 192."}
  ],
  "m8i-14-3":[
    {q:"The nth term of a sequence is 3n + 2. What is the 5th term?",opts:["13","15","17","20"],c:2,e:"Substitute n = 5: 3(5) + 2 = 15 + 2 = 17."},
    {q:"Which nth term expression generates the sequence 5, 9, 13, 17, …?",opts:["3n + 2","4n + 1","5n","4n − 1"],c:1,e:"Common difference = 4, so start with 4n. When n = 1: 4(1) = 4, but first term is 5, so add 1: 4n + 1. Check: n=1 → 5 ✓, n=2 → 9 ✓."},
    {q:"Is 40 a term in the sequence with nth term 7n − 2?",opts:["Yes, it is the 5th term","Yes, it is the 6th term","No, it is not in the sequence","Yes, it is the 7th term"],c:1,e:"Set 7n − 2 = 40: 7n = 42, n = 6. Since n = 6 is a positive whole number, 40 is the 6th term."},
    {q:"The nth term of a sequence is −2n + 10. What is the 4th term?",opts:["0","2","4","6"],c:1,e:"Substitute n = 4: −2(4) + 10 = −8 + 10 = 2."},
    {q:"A geometric sequence has first term 5 and common ratio 2. Which expression gives the nth term?",opts:["5n − 2","5 × 2n","5 × 2^(n−1)","2 × 5n"],c:2,e:"The nth term of a geometric sequence is a × r^(n−1). Here a = 5 and r = 2, giving 5 × 2^(n−1). Check: n=1 → 5×1 = 5 ✓, n=2 → 5×2 = 10 ✓."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-14-1': `
<h2>Arithmetic Sequences</h2>
<p>A sequence is an ordered list of numbers following a rule. In an <strong>arithmetic sequence</strong>, you add (or subtract) the same number each time. That fixed number is called the <strong>common difference</strong>.</p>

<h3>Identifying the common difference</h3>
<p>To find the common difference (d), subtract any term from the one that follows it:</p>
<div class="example-box">
<p><strong>Example:</strong> Find the common difference of 7, 12, 17, 22, 27, …</p>
<p><strong>Solution:</strong> 12 − 7 = 5, 17 − 12 = 5, 22 − 17 = 5.<br>
Common difference d = <strong>+5</strong>. Each term is 5 more than the previous term.</p>
</div>

<h3>Negative common differences</h3>
<p>When d is negative, the sequence decreases. Subtract the absolute value each time.</p>
<div class="example-box">
<p><strong>Example:</strong> Continue the sequence 30, 24, 18, 12, …</p>
<p><strong>Solution:</strong> d = 24 − 30 = −6.<br>
Next term: 12 + (−6) = <strong>6</strong>.<br>
Then: 6 + (−6) = 0, and so on.</p>
</div>

<h3>Generating a sequence from first term and common difference</h3>
<div class="example-box">
<p><strong>Example:</strong> Write the first 5 terms of the arithmetic sequence with first term 4 and d = 9.</p>
<p><strong>Solution:</strong> 4, 13, 22, 31, 40.<br>
(Keep adding 9 each time.)</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Sequence</dt><dd>An ordered list of numbers following a rule.</dd>
<dt>Term</dt><dd>Each number in a sequence. The first number is the 1st term, and so on.</dd>
<dt>Arithmetic sequence</dt><dd>A sequence where consecutive terms differ by the same amount.</dd>
<dt>Common difference (d)</dt><dd>The fixed amount added to each term to get the next. Can be positive, negative or zero.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Subtracting the wrong way round — ✅ always do (next term) − (current term) to find d.</li>
<li>❌ Confusing arithmetic and geometric sequences — ✅ arithmetic sequences add; geometric sequences multiply.</li>
<li>❌ Forgetting that d can be negative — ✅ decreasing sequences are also arithmetic.</li>
</ul>`,

'm8i-14-2': `
<h2>Geometric Sequences</h2>
<p>In a <strong>geometric sequence</strong>, each term is found by multiplying the previous term by the same fixed number. This fixed multiplier is called the <strong>common ratio</strong>.</p>

<h3>Finding the common ratio</h3>
<p>Divide any term by the term before it to find the common ratio (r).</p>
<div class="example-box">
<p><strong>Example:</strong> Find the common ratio of 5, 20, 80, 320, …</p>
<p><strong>Solution:</strong> 20 ÷ 5 = 4, 80 ÷ 20 = 4, 320 ÷ 80 = 4.<br>
Common ratio r = <strong>4</strong>.</p>
</div>

<h3>Continuing a geometric sequence</h3>
<div class="example-box">
<p><strong>Example:</strong> Continue the sequence 243, 81, 27, 9, …</p>
<p><strong>Solution:</strong> r = 81 ÷ 243 = 1/3 (dividing by 3 each time).<br>
Next term: 9 × (1/3) = <strong>3</strong>. Then 3 × (1/3) = 1.</p>
</div>

<h3>Arithmetic vs Geometric — how to tell them apart</h3>
<p>Test the <em>differences</em> first. If they are constant → arithmetic.<br>
If not, test the <em>ratios</em>. If they are constant → geometric.</p>
<div class="example-box">
<p><strong>Example:</strong> Classify 2, 6, 18, 54.</p>
<p>Differences: 4, 12, 36 — not constant, so <em>not</em> arithmetic.<br>
Ratios: 6÷2 = 3, 18÷6 = 3, 54÷18 = 3 — constant ratio = 3, so <strong>geometric</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Geometric sequence</dt><dd>A sequence where each term is multiplied by the same fixed value to get the next.</dd>
<dt>Common ratio (r)</dt><dd>The constant multiplier between consecutive terms of a geometric sequence.</dd>
<dt>Arithmetic sequence</dt><dd>A sequence with a constant common difference (for comparison).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using subtraction to find the common ratio — ✅ divide (next term) ÷ (current term) to find r.</li>
<li>❌ Assuming r must be a whole number — ✅ r can be a fraction, like 0.5 (halving each time).</li>
<li>❌ Calling a sequence geometric just because it grows quickly — ✅ always check the ratios are equal.</li>
</ul>`,

'm8i-14-3': `
<h2>Expressions for Sequences</h2>
<p>Instead of listing terms one by one, we can write an algebraic expression — the <strong>nth term rule</strong> — that gives any term in the sequence directly. This is sometimes called the <strong>general term</strong>.</p>

<h3>nth term of an arithmetic sequence</h3>
<p>For an arithmetic sequence: <strong>nth term = dn + (a − d)</strong>, where a is the first term and d is the common difference. This can also be written as <strong>nth term = a + (n − 1)d</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> Write the nth term for 6, 10, 14, 18, …</p>
<p><strong>Solution:</strong><br>
d = 10 − 6 = 4, so start with 4n.<br>
When n = 1: 4(1) = 4. First term is 6, so adjust by +2.<br>
nth term = <strong>4n + 2</strong>.<br>
Check: n=1 → 6 ✓, n=3 → 14 ✓.</p>
</div>

<h3>Using the nth term to find a specific term</h3>
<div class="example-box">
<p><strong>Example:</strong> Find the 20th term of the sequence with nth term 3n − 1.</p>
<p><strong>Solution:</strong> Substitute n = 20:<br>
3(20) − 1 = 60 − 1 = <strong>59</strong>.</p>
</div>

<h3>Checking whether a value is in the sequence</h3>
<div class="example-box">
<p><strong>Example:</strong> Is 55 a term in the sequence with nth term 4n + 3?</p>
<p><strong>Solution:</strong> Set 4n + 3 = 55 → 4n = 52 → n = 13.<br>
n = 13 is a positive whole number, so yes — 55 is the <strong>13th term</strong>.</p>
</div>

<h3>nth term of a geometric sequence</h3>
<p>For a geometric sequence: <strong>nth term = a × r^(n−1)</strong>, where a is the first term and r is the common ratio.</p>
<div class="example-box">
<p><strong>Example:</strong> Find the nth term of 3, 6, 12, 24, …</p>
<p>a = 3, r = 2 → nth term = <strong>3 × 2^(n−1)</strong>.<br>
Check: n=1 → 3×1 = 3 ✓, n=4 → 3×8 = 24 ✓.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>nth term</dt><dd>An algebraic expression that gives the value of any term in the sequence when you substitute the position number n.</dd>
<dt>General term</dt><dd>Another name for the nth term expression.</dd>
<dt>Substitute</dt><dd>Replace a letter with a number to work out the value of an expression.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using n = 0 for the first term — ✅ the first term is always n = 1.</li>
<li>❌ Forgetting to check the adjustment constant — ✅ always verify your nth term formula with at least two terms.</li>
<li>❌ Assuming a non-whole n means the value is not in the sequence — ✅ only whole positive n values count; non-integers confirm the value is not a term.</li>
</ul>`

});
