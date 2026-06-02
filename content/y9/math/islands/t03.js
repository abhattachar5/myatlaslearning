// content/y9/math/islands/t03.js — Year 9 Maths Topic 3: Indices & Index Laws
// Islands m9i-03-1 .. m9i-03-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m9i-03-1 — The Index Laws
  {id:"m9fc-03-1-1", islandId:"m9i-03-1", front:"What does the index (power) in 2⁵ tell you?",
   back:"How many times to multiply the base by itself.\n\n2⁵ = 2 × 2 × 2 × 2 × 2 = 32. The base is 2, the index is 5.", difficulty:1, category:"definition"},
  {id:"m9fc-03-1-2", islandId:"m9i-03-1", front:"State the multiplication law for indices.",
   back:"aᵐ × aⁿ = a^(m+n)\n\nSAME base: ADD the indices. Example: 3⁴ × 3² = 3⁶.", difficulty:1, category:"definition"},
  {id:"m9fc-03-1-3", islandId:"m9i-03-1", front:"State the division law for indices.",
   back:"aᵐ ÷ aⁿ = a^(m−n)\n\nSAME base: SUBTRACT the indices. Example: 5⁷ ÷ 5³ = 5⁴.", difficulty:1, category:"definition"},
  {id:"m9fc-03-1-4", islandId:"m9i-03-1", front:"Simplify (x³)⁴.",
   back:"x¹²\n\nPower of a power: MULTIPLY the indices, 3 × 4 = 12.", difficulty:2, category:"calculation"},
  {id:"m9fc-03-1-5", islandId:"m9i-03-1", front:"Simplify 2a³ × 5a⁴.",
   back:"10a⁷\n\nMultiply the numbers (2 × 5 = 10) and add the indices on a (3 + 4 = 7).", difficulty:2, category:"calculation"},
  {id:"m9fc-03-1-6", islandId:"m9i-03-1", front:"Why can't you simplify 2³ × 5² with the index laws?",
   back:"The bases are different (2 and 5).\n\nThe laws only apply to powers of the SAME base. Here you must just evaluate: 8 × 25 = 200.", difficulty:2, category:"application"},

  // m9i-03-2 — Zero & Negative Indices
  {id:"m9fc-03-2-1", islandId:"m9i-03-2", front:"What is the value of a⁰ (for any non-zero a)?",
   back:"1.\n\nFor example 7⁰ = 1 and 100⁰ = 1. It comes from the division law: aⁿ ÷ aⁿ = a⁰, but a number divided by itself is 1.", difficulty:1, category:"definition"},
  {id:"m9fc-03-2-2", islandId:"m9i-03-2", front:"What does a negative index mean?",
   back:"A reciprocal: a⁻ⁿ = 1/aⁿ.\n\nThe negative sign means 'one over'. Example: 2⁻³ = 1/2³ = 1/8.", difficulty:2, category:"definition"},
  {id:"m9fc-03-2-3", islandId:"m9i-03-2", front:"Evaluate 5⁻².",
   back:"1/25\n\n5⁻² = 1/5² = 1/25. A negative index does NOT make the answer negative — it makes a fraction.", difficulty:2, category:"calculation"},
  {id:"m9fc-03-2-4", islandId:"m9i-03-2", front:"Write 1/3⁴ using a single negative index.",
   back:"3⁻⁴\n\nA reciprocal of a power can be written with a negative index: 1/aⁿ = a⁻ⁿ.", difficulty:2, category:"calculation"},
  {id:"m9fc-03-2-5", islandId:"m9i-03-2", front:"Evaluate (2/3)⁻¹.",
   back:"3/2\n\nA power of −1 flips the fraction (the reciprocal). So (2/3)⁻¹ = 3/2.", difficulty:3, category:"application"},
  {id:"m9fc-03-2-6", islandId:"m9i-03-2", front:"Common trap: is 4⁻² equal to −16 or 1/16?",
   back:"1/16.\n\nThe negative index means reciprocal, not 'negative'. 4⁻² = 1/4² = 1/16. Only the position changes, never the sign of the value.", difficulty:2, category:"application"},

  // m9i-03-3 — Fractional Indices & Roots
  {id:"m9fc-03-3-1", islandId:"m9i-03-3", front:"What does a^(1/2) mean?",
   back:"The square root of a.\n\na^(1/2) = √a. For example 9^(1/2) = √9 = 3.", difficulty:1, category:"definition"},
  {id:"m9fc-03-3-2", islandId:"m9i-03-3", front:"What does a^(1/n) mean?",
   back:"The nth root of a.\n\na^(1/3) = ³√a (cube root), a^(1/4) = ⁴√a, and so on. Example: 27^(1/3) = 3.", difficulty:2, category:"definition"},
  {id:"m9fc-03-3-3", islandId:"m9i-03-3", front:"How do you work out a^(m/n)?",
   back:"Take the nth ROOT, then raise to the power m: a^(m/n) = (ⁿ√a)ᵐ.\n\nDo the root first to keep the numbers small.", difficulty:2, category:"concept"},
  {id:"m9fc-03-3-4", islandId:"m9i-03-3", front:"Evaluate 8^(2/3).",
   back:"4\n\nRoot first: ³√8 = 2. Then square: 2² = 4. So 8^(2/3) = 4.", difficulty:3, category:"calculation"},
  {id:"m9fc-03-3-5", islandId:"m9i-03-3", front:"Evaluate 16^(3/4).",
   back:"8\n\nRoot first: ⁴√16 = 2. Then cube: 2³ = 8.", difficulty:3, category:"calculation"},
  {id:"m9fc-03-3-6", islandId:"m9i-03-3", front:"Evaluate 25^(−1/2).",
   back:"1/5\n\nThe negative index flips it: 25^(−1/2) = 1/25^(1/2) = 1/√25 = 1/5.", difficulty:3, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m9i-03-1": [
    {q:"Simplify 4⁵ × 4³.", opts:["4⁸","4¹⁵","16⁸","4²"], c:0,
     e:"Same base: add the indices, 5 + 3 = 8, giving 4⁸. You never multiply the bases."},
    {q:"Simplify x⁹ ÷ x⁴.", opts:["x⁵","x¹³","x³⁶","x²·²⁵"], c:0,
     e:"Same base: subtract the indices, 9 − 4 = 5, giving x⁵."},
    {q:"Simplify (y⁴)³.", opts:["y¹²","y⁷","y⁶⁴","y¹"], c:0,
     e:"Power of a power: multiply the indices, 4 × 3 = 12, so (y⁴)³ = y¹²."},
    {q:"Simplify 3p² × 4p⁵.", opts:["12p⁷","7p⁷","12p¹⁰","12p³"], c:0,
     e:"Multiply the coefficients 3 × 4 = 12 and add the indices 2 + 5 = 7, giving 12p⁷."},
    {q:"Simplify 20a⁶ ÷ 5a².", opts:["4a⁴","4a³","15a⁴","4a⁸"], c:0,
     e:"Divide the numbers 20 ÷ 5 = 4 and subtract the indices 6 − 2 = 4, giving 4a⁴."}
  ],
  "m9i-03-2": [
    {q:"What is 9⁰?", opts:["1","0","9","Undefined"], c:0,
     e:"Any non-zero number to the power 0 equals 1, so 9⁰ = 1."},
    {q:"Evaluate 2⁻⁴.", opts:["1/16","−16","−8","16"], c:0,
     e:"A negative index is a reciprocal: 2⁻⁴ = 1/2⁴ = 1/16. The value is positive."},
    {q:"Write 1/x⁵ with a single index.", opts:["x⁻⁵","x⁵","−x⁵","5x⁻¹"], c:0,
     e:"A reciprocal of a power uses a negative index: 1/x⁵ = x⁻⁵."},
    {q:"Evaluate 10⁻³.", opts:["0.001","−1000","−0.001","1000"], c:0,
     e:"10⁻³ = 1/10³ = 1/1000 = 0.001."},
    {q:"Evaluate (3/4)⁻¹.", opts:["4/3","−3/4","3/4","7/4"], c:0,
     e:"A power of −1 gives the reciprocal, so (3/4)⁻¹ = 4/3."}
  ],
  "m9i-03-3": [
    {q:"Evaluate 49^(1/2).", opts:["7","24.5","98","7²"], c:0,
     e:"A power of 1/2 means the square root: 49^(1/2) = √49 = 7."},
    {q:"Evaluate 64^(1/3).", opts:["4","8","21.3","16"], c:0,
     e:"A power of 1/3 means the cube root: ³√64 = 4, because 4³ = 64."},
    {q:"Evaluate 27^(2/3).", opts:["9","18","6","81"], c:0,
     e:"Root first: ³√27 = 3. Then square: 3² = 9."},
    {q:"Evaluate 16^(3/4).", opts:["8","12","64","2"], c:0,
     e:"Root first: ⁴√16 = 2. Then cube: 2³ = 8."},
    {q:"Evaluate 4^(−1/2).", opts:["1/2","2","−2","1/4"], c:0,
     e:"The negative index flips it: 4^(−1/2) = 1/√4 = 1/2."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {
  "m9i-03-1": `<h2>The Index Laws</h2>
<p>An <strong>index</strong> (or power) tells you how many times to multiply a base by itself: 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. Three rules let you combine powers of the <strong>same base</strong> without writing them all out.</p>
<div class="lesson-diagram" data-diagram="math-index-laws"><p class="diagram-caption">Add to multiply · subtract to divide · multiply for a power of a power</p></div>
<h3>Worked example</h3>
<p>Simplify 2a³ × 5a⁴.</p>
<ul>
<li>Multiply the numbers in front: 2 × 5 = 10.</li>
<li>Add the indices on a: 3 + 4 = 7.</li>
<li>Answer: <strong>10a⁷</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>The laws only work for the <em>same base</em>. 2³ × 5² is <em>not</em> 10⁵ — the bases differ, so just evaluate: 8 × 25 = 200. And never multiply the bases: 4⁵ × 4³ = 4⁸, not 16⁸.</p>`,

  "m9i-03-2": `<h2>Zero &amp; Negative Indices</h2>
<p>The division law explains two surprising powers. Since aⁿ ÷ aⁿ = a⁰, and any number divided by itself is 1, we get <strong>a⁰ = 1</strong>. Keep dividing by the base and the indices go negative: a negative index means a <strong>reciprocal</strong>, a⁻ⁿ = 1/aⁿ.</p>
<div class="lesson-diagram" data-diagram="math-index-ladder"><p class="diagram-caption">Each step down divides by 2, so 2⁰ = 1 and 2⁻¹ = ½</p></div>
<h3>Worked example</h3>
<p>Evaluate 5⁻².</p>
<ul>
<li>Negative index → reciprocal: 5⁻² = 1/5².</li>
<li>5² = 25, so 5⁻² = <strong>1/25</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>A negative index does <em>not</em> make the answer negative. 4⁻² = 1/16, not −16. The minus sign only moves the power to the bottom of a fraction.</p>`,

  "m9i-03-3": `<h2>Fractional Indices &amp; Roots</h2>
<p>A fractional index is a <strong>root</strong>. The bottom of the fraction tells you which root: a^(1/2) = √a, a^(1/3) = ³√a, and in general a^(1/n) = ⁿ√a.</p>
<p>When the top is not 1, do both steps: <strong>a^(m/n) = (ⁿ√a)ᵐ</strong> — take the nth root, then raise to the power m. Rooting first keeps the numbers small.</p>
<div class="lesson-diagram" data-diagram="math-frac-index"><p class="diagram-caption">8^(2/3): cube-root first (³√8 = 2), then square (2² = 4)</p></div>
<h3>Worked example</h3>
<p>Evaluate 8^(2/3).</p>
<ul>
<li>Bottom is 3 → cube root: ³√8 = 2.</li>
<li>Top is 2 → square it: 2² = 4.</li>
<li>So 8^(2/3) = <strong>4</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Don't multiply the base by the fraction. 8^(2/3) is not 8 × 2/3. And combine rules carefully: 25^(−1/2) = 1/√25 = 1/5 — the minus flips it, the half roots it.</p>`
});
