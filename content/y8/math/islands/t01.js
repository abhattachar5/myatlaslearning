// math-y8-t01.js — Year 8 Maths Topic 1: Number Theory & Standard Form
// Islands: m8i-01-1 .. m8i-01-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-01-1 — Factors, Primes & Divisibility
  {id:"m8fc-01-1-1",islandId:"m8i-01-1",front:"State the divisibility rules for 2, 5 and 10.",
   back:"• Divisible by 2: the last digit is even (0, 2, 4, 6, 8)\n• Divisible by 5: the last digit is 0 or 5\n• Divisible by 10: the last digit is 0\n\nExample: 470 is divisible by 2, 5 and 10.",difficulty:1,category:"definition"},
  {id:"m8fc-01-1-2",islandId:"m8i-01-1",front:"Is 138 divisible by 3? How can you tell?",
   back:"Yes ✓\n\nRule for 3: add the digits — if the sum is divisible by 3, so is the number.\n1 + 3 + 8 = 12, and 12 ÷ 3 = 4.\nSo 138 is divisible by 3 (138 ÷ 3 = 46).",difficulty:1,category:"application"},
  {id:"m8fc-01-1-3",islandId:"m8i-01-1",front:"List all the factors of 24.",
   back:"1, 2, 3, 4, 6, 8, 12, 24\n\nWork in factor pairs:\n1 × 24, 2 × 12, 3 × 8, 4 × 6.\nThat gives all 8 factors.",difficulty:1,category:"calculation"},
  {id:"m8fc-01-1-4",islandId:"m8i-01-1",front:"What is the difference between a prime number and a composite number?",
   back:"A PRIME number has exactly two factors: 1 and itself (e.g. 2, 3, 5, 7, 11).\nA COMPOSITE number has more than two factors (e.g. 4, 6, 8, 9).\n\nNote: 1 is NEITHER prime nor composite — it has only one factor.",difficulty:2,category:"concept"},
  {id:"m8fc-01-1-5",islandId:"m8i-01-1",front:"Why is 51 NOT a prime number?",
   back:"51 is composite.\n\nIt looks prime, but 5 + 1 = 6, which is divisible by 3 — so 51 is divisible by 3.\n51 = 3 × 17.\nHaving factors other than 1 and 51 means it is composite.",difficulty:2,category:"application"},
  {id:"m8fc-01-1-6",islandId:"m8i-01-1",front:"List the first eight prime numbers.",
   back:"2, 3, 5, 7, 11, 13, 17, 19\n\nRemember: 2 is the only even prime number. Every other even number is divisible by 2.",difficulty:1,category:"definition"},

  // m8i-01-2 — Prime Factorisation, HCF & LCM
  {id:"m8fc-01-2-1",islandId:"m8i-01-2",front:"Write 60 as a product of its prime factors.",
   back:"60 = 2² × 3 × 5\n\nFactor tree:\n60 → 2 × 30 → 2 × 2 × 15 → 2 × 2 × 3 × 5.\nGroup repeats with indices: 2² × 3 × 5.",difficulty:2,category:"calculation"},
  {id:"m8fc-01-2-2",islandId:"m8i-01-2",front:"What does HCF stand for, and what does it mean?",
   back:"HCF = Highest Common Factor.\n\nIt is the largest number that divides into two (or more) numbers exactly.\nExample: HCF of 12 and 18 is 6.",difficulty:1,category:"definition"},
  {id:"m8fc-01-2-3",islandId:"m8i-01-2",front:"Find the HCF of 24 and 36 using prime factorisation.",
   back:"HCF = 12\n\n24 = 2³ × 3\n36 = 2² × 3²\nTake the LOWEST power of each common prime:\n2² × 3 = 4 × 3 = 12.",difficulty:2,category:"calculation"},
  {id:"m8fc-01-2-4",islandId:"m8i-01-2",front:"Find the LCM of 6 and 8.",
   back:"LCM = 24\n\n6 = 2 × 3\n8 = 2³\nTake the HIGHEST power of each prime:\n2³ × 3 = 8 × 3 = 24.\nCheck: 24 is in both the 6× and 8× tables.",difficulty:2,category:"calculation"},
  {id:"m8fc-01-2-5",islandId:"m8i-01-2",front:"Two bells ring every 12 and 18 minutes. They ring together now. When do they next ring together?",
   back:"In 36 minutes.\n\nYou need the LCM of 12 and 18.\n12 = 2² × 3, 18 = 2 × 3².\nLCM = 2² × 3² = 4 × 9 = 36.",difficulty:3,category:"application"},
  {id:"m8fc-01-2-6",islandId:"m8i-01-2",front:"For HCF and LCM, when do you take the lowest power and when the highest?",
   back:"HCF → LOWEST power of each COMMON prime (factors must divide both).\nLCM → HIGHEST power of EVERY prime that appears (multiple must contain both).\n\nMemory aid: HCF is smaller, so 'low'; LCM is larger, so 'high'.",difficulty:2,category:"concept"},

  // m8i-01-3 — Standard Form
  {id:"m8fc-01-3-1",islandId:"m8i-01-3",front:"What form must a number take to be in standard form?",
   back:"a × 10ⁿ\n\nwhere 1 ≤ a < 10 (one non-zero digit before the decimal point) and n is an integer.\nExample: 4.2 × 10⁵ is in standard form; 42 × 10⁴ is NOT (a must be under 10).",difficulty:1,category:"definition"},
  {id:"m8fc-01-3-2",islandId:"m8i-01-3",front:"Write 7,400,000 in standard form.",
   back:"7.4 × 10⁶\n\nMove the decimal point so there is one digit before it: 7.4.\nCount the places moved: 6 places left → exponent +6.",difficulty:1,category:"calculation"},
  {id:"m8fc-01-3-3",islandId:"m8i-01-3",front:"Write 0.00052 in standard form.",
   back:"5.2 × 10⁻⁴\n\nMove the decimal point right until one non-zero digit is in front: 5.2.\nYou moved 4 places right → negative exponent, 10⁻⁴.",difficulty:2,category:"calculation"},
  {id:"m8fc-01-3-4",islandId:"m8i-01-3",front:"Convert 3.06 × 10⁴ to an ordinary number.",
   back:"30,600\n\nThe exponent is +4, so move the decimal point 4 places right:\n3.06 → 30600.\nFill the empty places with zeros.",difficulty:1,category:"calculation"},
  {id:"m8fc-01-3-5",islandId:"m8i-01-3",front:"Which is larger: 6.3 × 10⁵ or 8.1 × 10⁴?",
   back:"6.3 × 10⁵ is larger.\n\nCompare the powers of 10 first: 10⁵ > 10⁴, so 6.3 × 10⁵ (= 630,000) beats 8.1 × 10⁴ (= 81,000).\nOnly compare the 'a' values when the powers are equal.",difficulty:2,category:"application"},
  {id:"m8fc-01-3-6",islandId:"m8i-01-3",front:"Why do we use standard form?",
   back:"It writes very large or very small numbers compactly and makes them easy to compare.\n\nExample: the speed of light is 3 × 10⁸ m/s — much clearer than 300,000,000 m/s.",difficulty:1,category:"concept"},

  // m8i-01-4 — Classify & Compare Numbers
  {id:"m8fc-01-4-1",islandId:"m8i-01-4",front:"Name the number sets in order from smallest to largest, and give an example of each.",
   back:"• Natural numbers ℕ: 1, 2, 3, …\n• Whole numbers: 0, 1, 2, 3, …\n• Integers ℤ: …, −2, −1, 0, 1, 2, …\n• Rational numbers ℚ: any fraction a/b (e.g. ½, −3, 0.75)\n• Irrational numbers: cannot be written as a fraction (e.g. π, √2)",difficulty:2,category:"definition"},
  {id:"m8fc-01-4-2",islandId:"m8i-01-4",front:"Is −7 an integer? Is it a whole number?",
   back:"−7 IS an integer (integers include negatives).\n−7 is NOT a whole number (whole numbers are 0, 1, 2, 3, … — no negatives).",difficulty:1,category:"concept"},
  {id:"m8fc-01-4-3",islandId:"m8i-01-4",front:"What makes a number rational?",
   back:"A number is rational if it can be written as a fraction a/b where a and b are integers and b ≠ 0.\n\nThis includes integers, terminating decimals (0.25) and recurring decimals (0.333…).",difficulty:2,category:"definition"},
  {id:"m8fc-01-4-4",islandId:"m8i-01-4",front:"Is √2 rational or irrational?",
   back:"Irrational.\n\n√2 = 1.41421356… — the decimal never ends and never repeats, so it cannot be written as an exact fraction.\nBy contrast √9 = 3 is rational.",difficulty:2,category:"application"},
  {id:"m8fc-01-4-5",islandId:"m8i-01-4",front:"Classify 0.75 into every set it belongs to.",
   back:"0.75 is RATIONAL only.\n\n0.75 = ¾ (a fraction), so it is rational, but it is not an integer, whole or natural number.",difficulty:2,category:"application"},
  {id:"m8fc-01-4-6",islandId:"m8i-01-4",front:"Every integer is also a rational number. True or false?",
   back:"True.\n\nAny integer n can be written as n/1, which fits the form a/b. So all integers are rational — but not all rationals are integers (½ is not).",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-01-1":[
    {q:"Which of these numbers is divisible by both 3 and 4?",opts:["114","128","132","150"],c:2,e:"Divisible by 3: digit sum divisible by 3. Divisible by 4: last two digits divisible by 4. 132 → 1+3+2=6 (÷3 ✓) and 32÷4=8 ✓. 114 fails the ÷4 test, 128 fails ÷3, 150 fails ÷4."},
    {q:"How many factors does 36 have?",opts:["6","7","8","9"],c:3,e:"Factor pairs: 1×36, 2×18, 3×12, 4×9, 6×6. The repeated 6 only counts once, giving 1,2,3,4,6,9,12,18,36 = 9 factors."},
    {q:"Which number is prime?",opts:["57","61","63","65"],c:1,e:"61 has only factors 1 and 61. 57=3×19, 63=7×9, 65=5×13 are all composite."},
    {q:"What is the largest prime number less than 30?",opts:["27","28","29","31"],c:2,e:"29 is prime. 27=3³ and 28=2²×7 are composite. 31 is prime but it is greater than 30."},
    {q:"A number is divisible by 9. Which statement must be true?",opts:["Its last digit is 9","The sum of its digits is divisible by 9","It is an even number","It ends in 0 or 5"],c:1,e:"The divisibility rule for 9 is that the digit sum is divisible by 9. For example 423 → 4+2+3=9 ✓."}
  ],
  "m8i-01-2":[
    {q:"What is the prime factorisation of 90?",opts:["2 × 3² × 5","2² × 3 × 5","2 × 3 × 5²","3² × 10"],c:0,e:"90 = 2 × 45 = 2 × 3 × 15 = 2 × 3 × 3 × 5 = 2 × 3² × 5. Note 3² × 10 is not fully factorised (10 is not prime)."},
    {q:"Find the HCF of 48 and 60.",opts:["6","8","12","24"],c:2,e:"48 = 2⁴ × 3, 60 = 2² × 3 × 5. HCF takes the lowest power of common primes: 2² × 3 = 12."},
    {q:"Find the LCM of 9 and 12.",opts:["18","36","72","108"],c:1,e:"9 = 3², 12 = 2² × 3. LCM takes the highest power of every prime: 2² × 3² = 4 × 9 = 36."},
    {q:"Two strings of lights flash every 10 s and every 15 s. They flash together now. After how many seconds do they next flash together?",opts:["25 s","30 s","45 s","150 s"],c:1,e:"You need the LCM of 10 and 15. 10 = 2×5, 15 = 3×5, LCM = 2×3×5 = 30 seconds."},
    {q:"The HCF of two numbers is 1. What are these numbers called?",opts:["Prime numbers","Co-prime (relatively prime)","Composite numbers","Square numbers"],c:1,e:"Numbers whose only common factor is 1 are co-prime (relatively prime), e.g. 8 and 15."}
  ],
  "m8i-01-3":[
    {q:"Write 52,000 in standard form.",opts:["5.2 × 10³","5.2 × 10⁴","52 × 10³","5.2 × 10⁵"],c:1,e:"Place one digit before the decimal: 5.2. The point moved 4 places left, so the exponent is 4: 5.2 × 10⁴."},
    {q:"Write 0.0007 in standard form.",opts:["7 × 10⁻³","7 × 10⁻⁴","7 × 10⁴","0.7 × 10⁻³"],c:1,e:"Move the point right to 7.0 — that is 4 places, so a negative exponent: 7 × 10⁻⁴."},
    {q:"Convert 9.5 × 10³ to an ordinary number.",opts:["95","950","9,500","95,000"],c:2,e:"Exponent +3 means move the point 3 places right: 9.5 → 9500."},
    {q:"Which of these is correctly written in standard form?",opts:["12 × 10⁴","0.6 × 10³","3.7 × 10⁵","45 × 10⁻²"],c:2,e:"Standard form needs 1 ≤ a < 10. Only 3.7 × 10⁵ has a value of a between 1 and 10."},
    {q:"Put these in order from smallest to largest: 4 × 10³, 9 × 10², 2 × 10⁴.",opts:["9 × 10², 4 × 10³, 2 × 10⁴","4 × 10³, 9 × 10², 2 × 10⁴","2 × 10⁴, 4 × 10³, 9 × 10²","9 × 10², 2 × 10⁴, 4 × 10³"],c:0,e:"As ordinary numbers: 900, 4000, 20000. Smallest to largest: 9 × 10² < 4 × 10³ < 2 × 10⁴."}
  ],
  "m8i-01-4":[
    {q:"Which number is irrational?",opts:["√16","0.5","√7","−3"],c:2,e:"√7 = 2.6457… never ends or repeats, so it is irrational. √16 = 4, 0.5 = ½ and −3 are all rational."},
    {q:"Which set does −5 NOT belong to?",opts:["Integers","Rational numbers","Whole numbers","Real numbers"],c:2,e:"Whole numbers are 0, 1, 2, 3, … with no negatives, so −5 is not a whole number. It is an integer, rational and real."},
    {q:"0.333… (recurring) is best described as:",opts:["Irrational","Rational","An integer","A natural number"],c:1,e:"0.333… = ⅓, which is a fraction, so it is rational. Recurring decimals are always rational."},
    {q:"Which statement is TRUE?",opts:["Every whole number is an integer","Every integer is a natural number","Every rational number is an integer","π is rational"],c:0,e:"Whole numbers (0,1,2,…) are all integers. Negatives show not every integer is natural, ½ shows not every rational is an integer, and π is irrational."},
    {q:"Into how many of these sets does the number 8 fit: natural, whole, integer, rational?",opts:["1","2","3","4"],c:3,e:"8 is natural (counting number), whole, an integer and rational (8/1) — all four sets."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-01-1': `
<h2>Factors, Primes &amp; Divisibility</h2>
<p>Before you can break numbers apart or find common factors, you need quick ways to spot what divides into a number. <strong>Divisibility rules</strong> let you check this without doing the full division.</p>

<h3>Divisibility rules</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Divisible by</th><th style="padding:8px;border:1px solid #ccc">Test</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">2</td><td style="padding:8px;border:1px solid #ccc">Last digit is even</td><td style="padding:8px;border:1px solid #ccc">3<strong>4</strong> ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">3</td><td style="padding:8px;border:1px solid #ccc">Digit sum divisible by 3</td><td style="padding:8px;border:1px solid #ccc">141 → 6 ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">4</td><td style="padding:8px;border:1px solid #ccc">Last two digits divisible by 4</td><td style="padding:8px;border:1px solid #ccc">5<strong>16</strong> ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">5</td><td style="padding:8px;border:1px solid #ccc">Ends in 0 or 5</td><td style="padding:8px;border:1px solid #ccc">8<strong>5</strong> ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">6</td><td style="padding:8px;border:1px solid #ccc">Divisible by 2 AND 3</td><td style="padding:8px;border:1px solid #ccc">144 ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">9</td><td style="padding:8px;border:1px solid #ccc">Digit sum divisible by 9</td><td style="padding:8px;border:1px solid #ccc">279 → 18 ✓</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">10</td><td style="padding:8px;border:1px solid #ccc">Ends in 0</td><td style="padding:8px;border:1px solid #ccc">90 ✓</td></tr>
</table>

<h3>Factors</h3>
<p>A <strong>factor</strong> of a number divides into it exactly with no remainder. Find factors in <em>pairs</em> so you never miss any.</p>
<div class="example-box">
<p><strong>Example:</strong> Find all factors of 24.</p>
<p><strong>Solution:</strong> Work through pairs:<br>
1 × 24, 2 × 12, 3 × 8, 4 × 6.<br>
Factors: <strong>1, 2, 3, 4, 6, 8, 12, 24</strong>.</p>
</div>

<h3>Prime and composite numbers</h3>
<p>A <strong>prime number</strong> has exactly two factors: 1 and itself. A <strong>composite number</strong> has more than two factors. The number <strong>1 is neither</strong> — it has only one factor.</p>
<p>The primes up to 20 are: 2, 3, 5, 7, 11, 13, 17, 19. Note that <strong>2 is the only even prime</strong>.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Factor</dt><dd>A whole number that divides exactly into another number.</dd>
<dt>Prime number</dt><dd>A number with exactly two factors: 1 and itself.</dd>
<dt>Composite number</dt><dd>A number with more than two factors.</dd>
<dt>Divisible</dt><dd>Can be divided exactly, leaving no remainder.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Calling 1 a prime number — ✅ 1 is neither prime nor composite.</li>
<li>❌ Forgetting a factor pair (e.g. missing 4 × 6 for 24) — ✅ list pairs systematically.</li>
<li>❌ Assuming all odd numbers are prime — ✅ 9, 15, 21 and 51 are all odd but composite.</li>
</ul>`,

'm8i-01-2': `
<h2>Prime Factorisation, HCF &amp; LCM</h2>
<p>Every whole number can be built from prime numbers multiplied together — its <strong>prime factorisation</strong>. This is the key that unlocks the highest common factor (HCF) and lowest common multiple (LCM).</p>

<h3>Building a factor tree</h3>
<div class="example-box">
<p><strong>Example:</strong> Write 60 as a product of primes.</p>
<p><strong>Solution:</strong><br>
60 = 2 × 30<br>
30 = 2 × 15<br>
15 = 3 × 5<br>
So 60 = 2 × 2 × 3 × 5 = <strong>2² × 3 × 5</strong>.</p>
</div>
<p>Keep splitting each branch until every end of the tree is a prime number, then group repeats using indices.</p>

<h3>Highest Common Factor (HCF)</h3>
<p>The HCF is the largest number that divides into all the given numbers. Using prime factors, take the <strong>lowest power</strong> of each <strong>common</strong> prime.</p>
<div class="example-box">
<p><strong>Example:</strong> HCF of 24 and 36.</p>
<p>24 = 2³ × 3 &nbsp;&nbsp; 36 = 2² × 3²<br>
Common primes: 2 and 3. Lowest powers: 2² and 3¹.<br>
HCF = 2² × 3 = <strong>12</strong>.</p>
</div>

<h3>Lowest Common Multiple (LCM)</h3>
<p>The LCM is the smallest number that all the given numbers divide into. Take the <strong>highest power</strong> of <strong>every</strong> prime that appears.</p>
<div class="example-box">
<p><strong>Example:</strong> LCM of 6 and 8.</p>
<p>6 = 2 × 3 &nbsp;&nbsp; 8 = 2³<br>
Highest powers: 2³ and 3¹.<br>
LCM = 2³ × 3 = <strong>24</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Prime factorisation</dt><dd>Writing a number as a product of prime numbers.</dd>
<dt>HCF</dt><dd>Highest Common Factor — the largest number dividing into all the numbers.</dd>
<dt>LCM</dt><dd>Lowest Common Multiple — the smallest number all the numbers divide into.</dd>
<dt>Index (power)</dt><dd>A small raised number showing how many times a base is multiplied (2³ = 2×2×2).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Swapping the rules — ✅ HCF uses LOWEST powers, LCM uses HIGHEST powers.</li>
<li>❌ Leaving a non-prime in the answer (e.g. 2 × 3 × 10) — ✅ split until everything is prime.</li>
<li>❌ For LCM, forgetting primes that appear in only one number — ✅ include every prime.</li>
</ul>`,

'm8i-01-3': `
<h2>Standard Form</h2>
<p><strong>Standard form</strong> (scientific notation) writes very large or very small numbers compactly as <strong>a × 10ⁿ</strong>, where 1 ≤ a &lt; 10 and n is an integer.</p>

<h3>Large numbers — positive powers</h3>
<div class="example-box">
<p><strong>Example:</strong> Write 7,400,000 in standard form.</p>
<p>Place one non-zero digit before the decimal point: 7.4.<br>
Count how far the point moved: 6 places left.<br>
Answer: <strong>7.4 × 10⁶</strong>.</p>
</div>

<h3>Small numbers — negative powers</h3>
<div class="example-box">
<p><strong>Example:</strong> Write 0.00052 in standard form.</p>
<p>Move the point right until one non-zero digit is in front: 5.2.<br>
The point moved 4 places right → negative power.<br>
Answer: <strong>5.2 × 10⁻⁴</strong>.</p>
</div>

<h3>Comparing numbers in standard form</h3>
<p>Compare the <strong>power of 10 first</strong>. The larger power gives the larger number. Only compare the values of <em>a</em> when the powers are equal.</p>
<p>Example: 6.3 × 10⁵ (= 630,000) is larger than 8.1 × 10⁴ (= 81,000), because 10⁵ &gt; 10⁴.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Standard form</dt><dd>Writing a number as a × 10ⁿ with 1 ≤ a &lt; 10.</dd>
<dt>Exponent (power)</dt><dd>The number n that tells you how many places to move the decimal point.</dd>
<dt>Ordinary number</dt><dd>A number written out in full, without powers of 10.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing 42 × 10⁴ — ✅ a must be between 1 and 10, so write 4.2 × 10⁵.</li>
<li>❌ Using a positive power for a small number — ✅ numbers less than 1 need a negative power.</li>
<li>❌ Miscounting the decimal places moved — ✅ count carefully, including zeros.</li>
</ul>`,

'm8i-01-4': `
<h2>Classify &amp; Compare Numbers</h2>
<p>Numbers belong to <strong>sets</strong> that fit inside one another like nested boxes. Knowing which set a number belongs to helps you reason about it.</p>

<h3>The number sets</h3>
<dl>
<dt>Natural numbers (ℕ)</dt><dd>The counting numbers: 1, 2, 3, …</dd>
<dt>Whole numbers</dt><dd>The natural numbers plus zero: 0, 1, 2, 3, …</dd>
<dt>Integers (ℤ)</dt><dd>Whole numbers and their negatives: …, −2, −1, 0, 1, 2, …</dd>
<dt>Rational numbers (ℚ)</dt><dd>Any number that can be written as a fraction a/b (b ≠ 0). Includes integers, terminating decimals and recurring decimals.</dd>
<dt>Irrational numbers</dt><dd>Numbers that cannot be written as a fraction — their decimals never end and never repeat, e.g. π and √2.</dd>
</dl>

<div class="example-box">
<p><strong>Example:</strong> Classify 0.75 and √2.</p>
<p>0.75 = ¾, a fraction → <strong>rational only</strong>.<br>
√2 = 1.41421… never ends or repeats → <strong>irrational</strong>.</p>
</div>

<h3>How the sets nest</h3>
<p>Each set sits inside the next: every natural number is whole, every whole number is an integer, and every integer is rational. So 8 belongs to <strong>all four</strong> of those sets, while −5 is an integer and rational but not whole or natural.</p>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Thinking negatives are whole numbers — ✅ whole numbers start at 0 and go up only.</li>
<li>❌ Calling every root irrational — ✅ √9 = 3 is rational; only non-perfect roots like √7 are irrational.</li>
<li>❌ Forgetting that recurring decimals are rational — ✅ 0.333… = ⅓ is rational.</li>
</ul>`

});
