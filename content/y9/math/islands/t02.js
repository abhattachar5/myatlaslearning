// content/y9/math/islands/t02.js — Year 9 Maths Topic 2: Number Structure
// Islands m9i-02-1 .. m9i-02-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m9i-02-1 — Factors, Primes & Divisibility
  {id:"m9fc-02-1-1", islandId:"m9i-02-1", front:"What is a factor of a number?",
   back:"A factor divides exactly into the number with no remainder.\n\nThe factors of 12 are 1, 2, 3, 4, 6 and 12.", difficulty:1, category:"definition"},
  {id:"m9fc-02-1-2", islandId:"m9i-02-1", front:"What is the difference between a prime and a composite number?",
   back:"A PRIME has exactly two factors: 1 and itself (2, 3, 5, 7, 11 …).\nA COMPOSITE has more than two factors (4, 6, 8, 9 …).\n\n1 is NEITHER — it has only one factor.", difficulty:1, category:"concept"},
  {id:"m9fc-02-1-3", islandId:"m9i-02-1", front:"State the divisibility rules for 3 and 9.",
   back:"• Divisible by 3: the digit sum is divisible by 3.\n• Divisible by 9: the digit sum is divisible by 9.\n\nExample: 261 → 2+6+1 = 9, so 261 is divisible by both 3 and 9.", difficulty:2, category:"definition"},
  {id:"m9fc-02-1-4", islandId:"m9i-02-1", front:"List all the factors of 36.",
   back:"1, 2, 3, 4, 6, 9, 12, 18, 36\n\nWork in factor pairs: 1×36, 2×18, 3×12, 4×9, 6×6. The repeated 6 is only listed once.", difficulty:2, category:"calculation"},
  {id:"m9fc-02-1-5", islandId:"m9i-02-1", front:"Why is 51 NOT a prime number?",
   back:"51 is composite. Its digit sum is 5+1 = 6 (divisible by 3), so 51 = 3 × 17.\n\nHaving factors other than 1 and 51 makes it composite — even though it looks prime.", difficulty:2, category:"application"},
  {id:"m9fc-02-1-6", islandId:"m9i-02-1", front:"List the first eight prime numbers.",
   back:"2, 3, 5, 7, 11, 13, 17, 19\n\nRemember: 2 is the only even prime — every other even number is divisible by 2.", difficulty:1, category:"definition"},

  // m9i-02-2 — HCF & LCM
  {id:"m9fc-02-2-1", islandId:"m9i-02-2", front:"Write 60 as a product of its prime factors.",
   back:"60 = 2² × 3 × 5\n\nFactor tree: 60 → 2 × 30 → 2 × 2 × 15 → 2 × 2 × 3 × 5. Group repeats using indices.", difficulty:2, category:"calculation"},
  {id:"m9fc-02-2-2", islandId:"m9i-02-2", front:"What does HCF mean?",
   back:"Highest Common Factor — the largest number that divides into two (or more) numbers exactly.\n\nExample: the HCF of 12 and 18 is 6.", difficulty:1, category:"definition"},
  {id:"m9fc-02-2-3", islandId:"m9i-02-2", front:"Find the HCF of 24 and 36 using prime factors.",
   back:"HCF = 12\n\n24 = 2³ × 3, 36 = 2² × 3². Take the LOWEST power of each common prime: 2² × 3 = 12.", difficulty:2, category:"calculation"},
  {id:"m9fc-02-2-4", islandId:"m9i-02-2", front:"Find the LCM of 6 and 8.",
   back:"LCM = 24\n\n6 = 2 × 3, 8 = 2³. Take the HIGHEST power of each prime: 2³ × 3 = 24.", difficulty:2, category:"calculation"},
  {id:"m9fc-02-2-5", islandId:"m9i-02-2", front:"For HCF and LCM, when do you take the lowest power and when the highest?",
   back:"HCF → LOWEST power of each COMMON prime (it must divide both).\nLCM → HIGHEST power of EVERY prime that appears (it must contain both).\n\nHCF is smaller → 'low'; LCM is larger → 'high'.", difficulty:2, category:"concept"},
  {id:"m9fc-02-2-6", islandId:"m9i-02-2", front:"Two lighthouses flash every 12 s and every 18 s. They flash together now. When next?",
   back:"In 36 seconds.\n\nYou need the LCM of 12 and 18. 12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36.", difficulty:3, category:"application"},

  // m9i-02-3 — Rational & Irrational Numbers
  {id:"m9fc-02-3-1", islandId:"m9i-02-3", front:"Name the number sets from smallest to largest, with an example of each.",
   back:"• Natural ℕ: 1, 2, 3 …\n• Whole: 0, 1, 2, 3 …\n• Integers ℤ: …, −2, −1, 0, 1, 2 …\n• Rational ℚ: any fraction a/b (½, −3, 0.75)\n• Irrational: cannot be written as a fraction (π, √2)", difficulty:2, category:"definition"},
  {id:"m9fc-02-3-2", islandId:"m9i-02-3", front:"What makes a number rational?",
   back:"It can be written as a fraction a/b where a and b are integers and b ≠ 0.\n\nThis includes integers, terminating decimals (0.25) and recurring decimals (0.333…).", difficulty:2, category:"definition"},
  {id:"m9fc-02-3-3", islandId:"m9i-02-3", front:"Is √2 rational or irrational?",
   back:"Irrational. √2 = 1.41421356… — the decimal never ends and never repeats, so it can't be written as an exact fraction.\n\nBy contrast √9 = 3 is rational.", difficulty:2, category:"application"},
  {id:"m9fc-02-3-4", islandId:"m9i-02-3", front:"Is the recurring decimal 0.333… rational?",
   back:"Yes. 0.333… = ⅓, which is a fraction, so it is rational.\n\nAll terminating and recurring decimals are rational.", difficulty:2, category:"concept"},
  {id:"m9fc-02-3-5", islandId:"m9i-02-3", front:"When is the square root of a whole number irrational?",
   back:"When the number is NOT a perfect square.\n\n√25 = 5 is rational; √26 is irrational. So √n is irrational unless n is a perfect square (1, 4, 9, 16, 25 …).", difficulty:2, category:"concept"},
  {id:"m9fc-02-3-6", islandId:"m9i-02-3", front:"Classify 0.75 into every set it belongs to.",
   back:"Rational only.\n\n0.75 = ¾ (a fraction), so it is rational — but it is not an integer, whole or natural number.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m9i-02-1": [
    {q:"Which of these numbers is prime?", opts:["51","57","59","63"], c:2,
     e:"59 has only the factors 1 and 59. 51 = 3×17, 57 = 3×19 and 63 = 7×9 are all composite."},
    {q:"How many factors does 24 have?", opts:["6","7","8","9"], c:2,
     e:"Factor pairs 1×24, 2×12, 3×8, 4×6 give 1, 2, 3, 4, 6, 8, 12, 24 — that's 8 factors."},
    {q:"Which number is divisible by both 3 and 5?", opts:["25","40","48","45"], c:3,
     e:"45 has digit sum 9 (÷3 ✓) and ends in 5 (÷5 ✓). 25 fails ÷3, 40 fails ÷3, 48 fails ÷5."},
    {q:"Which of these is a factor of 60 but NOT of 40?", opts:["2","4","5","6"], c:3,
     e:"60 ÷ 6 = 10 ✓, but 40 ÷ 6 is not a whole number. 2, 4 and 5 divide both 60 and 40."},
    {q:"Why is 1 neither prime nor composite?", opts:["It is odd","It has only one factor","It is too small to count","It is even"], c:1,
     e:"A prime needs exactly two factors and a composite needs more than two. 1 has only one factor (itself), so it is neither."}
  ],
  "m9i-02-2": [
    {q:"What is the prime factorisation of 90?", opts:["2 × 3² × 5","2² × 3 × 5","2 × 3 × 5²","3² × 10"], c:0,
     e:"90 = 2 × 45 = 2 × 3 × 15 = 2 × 3 × 3 × 5 = 2 × 3² × 5. (3² × 10 is not fully factorised — 10 isn't prime.)"},
    {q:"Find the HCF of 48 and 60.", opts:["6","8","12","24"], c:2,
     e:"48 = 2⁴×3, 60 = 2²×3×5. HCF takes the lowest power of common primes: 2²×3 = 12."},
    {q:"Find the LCM of 9 and 12.", opts:["18","36","72","108"], c:1,
     e:"9 = 3², 12 = 2²×3. LCM takes the highest power of every prime: 2²×3² = 36."},
    {q:"Two strings of lights flash every 10 s and every 15 s. They flash together now. After how long do they next flash together?", opts:["25 s","30 s","45 s","150 s"], c:1,
     e:"You need the LCM of 10 and 15. 10 = 2×5, 15 = 3×5, so LCM = 2×3×5 = 30 s."},
    {q:"The HCF of two numbers is 1. What are these numbers called?", opts:["Prime","Co-prime","Composite","Square"], c:1,
     e:"Numbers whose only common factor is 1 are co-prime (relatively prime), e.g. 8 and 15."}
  ],
  "m9i-02-3": [
    {q:"Which of these numbers is irrational?", opts:["√16","0.5","√7","−3"], c:2,
     e:"√7 = 2.6457… never ends or repeats, so it is irrational. √16 = 4, 0.5 = ½ and −3 are rational."},
    {q:"Which set does −5 NOT belong to?", opts:["Integers","Rational numbers","Whole numbers","Real numbers"], c:2,
     e:"Whole numbers are 0, 1, 2, 3 … with no negatives, so −5 is not a whole number. It is an integer, rational and real."},
    {q:"The recurring decimal 0.666… is best described as:", opts:["Irrational","Rational","An integer","A natural number"], c:1,
     e:"0.666… = ⅔, a fraction, so it is rational. Recurring decimals are always rational."},
    {q:"Which statement is TRUE?", opts:["Every whole number is an integer","Every integer is a natural number","Every rational number is an integer","π is rational"], c:0,
     e:"Whole numbers (0, 1, 2 …) are all integers. Negatives show not every integer is natural, ½ shows not every rational is an integer, and π is irrational."},
    {q:"Is √36 rational or irrational?", opts:["Rational","Irrational","Neither","Both"], c:0,
     e:"√36 = 6, a whole number, so it is rational. A square root is only irrational when the number is not a perfect square."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {
  "m9i-02-1": `<h2>Factors, Primes &amp; Divisibility</h2>
<p>A <strong>factor</strong> divides exactly into a number with no remainder. A <strong>prime</strong> number has exactly two factors (1 and itself); a <strong>composite</strong> number has more than two. The number 1 is neither.</p>
<h3>Divisibility rules</h3>
<ul>
<li><strong>2</strong> — last digit is even.</li>
<li><strong>3</strong> — digit sum is divisible by 3.</li>
<li><strong>5</strong> — last digit is 0 or 5.</li>
<li><strong>9</strong> — digit sum is divisible by 9.</li>
<li><strong>10</strong> — last digit is 0.</li>
</ul>
<h3>Worked example</h3>
<p>List the factors of 36. Work in pairs: 1×36, 2×18, 3×12, 4×9, 6×6 → <strong>1, 2, 3, 4, 6, 9, 12, 18, 36</strong>. The repeated 6 is written once.</p>
<div class="lesson-diagram" data-diagram="math-factor-tree"><p class="diagram-caption">Prime factor tree: 60 = 2² × 3 × 5</p></div>
<h3>Common mistake</h3>
<p>Numbers like 51 and 57 <em>look</em> prime but aren't — always test 3 (digit sum) and 7 before deciding. 51 = 3 × 17.</p>`,

  "m9i-02-2": `<h2>HCF &amp; LCM</h2>
<p>Writing a number as a <strong>product of prime factors</strong> makes finding the HCF and LCM reliable.</p>
<ul>
<li><strong>HCF</strong> (Highest Common Factor): take the <strong>lowest</strong> power of each <em>common</em> prime.</li>
<li><strong>LCM</strong> (Lowest Common Multiple): take the <strong>highest</strong> power of <em>every</em> prime that appears.</li>
</ul>
<h3>Worked example</h3>
<p>Find the HCF and LCM of 24 and 36.</p>
<ul>
<li>24 = 2³ × 3 &nbsp;&nbsp; 36 = 2² × 3²</li>
<li>HCF = 2² × 3 = <strong>12</strong> (lowest powers of the common primes 2 and 3).</li>
<li>LCM = 2³ × 3² = <strong>72</strong> (highest powers).</li>
</ul>
<div class="lesson-diagram" data-diagram="math-prime-venn"><p class="diagram-caption">Shared primes give the HCF; all primes together give the LCM</p></div>
<h3>Common mistake</h3>
<p>Don't mix them up: HCF is the <em>smaller</em> answer (lowest powers), LCM is the <em>larger</em> (highest powers). A quick check: the HCF must divide both numbers; the LCM must be in both times-tables.</p>`,

  "m9i-02-3": `<h2>Rational &amp; Irrational Numbers</h2>
<p>Every number sits inside a family of sets:</p>
<ul>
<li><strong>Natural</strong>: 1, 2, 3 …</li>
<li><strong>Whole</strong>: 0, 1, 2, 3 …</li>
<li><strong>Integers</strong>: …, −2, −1, 0, 1, 2 …</li>
<li><strong>Rational</strong>: anything that can be written as a fraction a/b — includes integers, terminating decimals (0.25) and recurring decimals (0.3̇).</li>
<li><strong>Irrational</strong>: cannot be written as a fraction — its decimal never ends and never repeats (π, √2).</li>
</ul>
<div class="lesson-diagram" data-diagram="math-number-sets"><p class="diagram-caption">Each set sits inside the next: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Irrationals live in ℝ but outside ℚ.</p></div>
<h3>Worked example</h3>
<p>Classify √40. Since 40 is not a perfect square, √40 = 6.324… never ends or repeats, so it is <strong>irrational</strong>. By contrast √49 = 7 is rational.</p>
<h3>Common mistakes</h3>
<ul>
<li>A surd is only irrational when the number under the root is <em>not</em> a perfect square — √16 is rational.</li>
<li>Recurring decimals such as 0.333… <em>are</em> rational (they equal a fraction) — a common trap.</li>
</ul>`
});
