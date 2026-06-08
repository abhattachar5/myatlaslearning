// content/y10/math/islands/t03.js — Year 10 Maths Topic 3: Expanding & Factorising Quadratics
// Islands m10i-03-1 .. m10i-03-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-03-1 — Expanding Double Brackets
  {id:"m10fc-03-1-1", islandId:"m10i-03-1", front:"How do you expand (x + a)(x + b)?",
   back:"Multiply every term in the first bracket by every term in the second (grid or FOIL).\n\n(x + a)(x + b) = x² + bx + ax + ab = x² + (a + b)x + ab.", difficulty:2, category:"definition"},
  {id:"m10fc-03-1-2", islandId:"m10i-03-1", front:"Expand (x + 3)(x + 4).",
   back:"x² + 7x + 12\n\nx×x = x²; outer + inner = 4x + 3x = 7x; 3×4 = 12.", difficulty:2, category:"calculation"},
  {id:"m10fc-03-1-3", islandId:"m10i-03-1", front:"Expand (x − 5)(x + 2).",
   back:"x² − 3x − 10\n\nMiddle term: 2x − 5x = −3x; last term: −5 × 2 = −10.", difficulty:2, category:"calculation"},
  {id:"m10fc-03-1-4", islandId:"m10i-03-1", front:"Expand (x + 6)².",
   back:"x² + 12x + 36\n\n(x + 6)² = (x + 6)(x + 6). Middle: 6x + 6x = 12x; last: 36. It is NOT x² + 36.", difficulty:3, category:"application"},
  {id:"m10fc-03-1-5", islandId:"m10i-03-1", front:"What is the most common mistake squaring a bracket?",
   back:"Writing (x + a)² = x² + a².\n\nYou must include the middle term: (x + a)² = x² + 2ax + a².", difficulty:2, category:"concept"},
  {id:"m10fc-03-1-6", islandId:"m10i-03-1", front:"Expand (x − 4)(x − 7).",
   back:"x² − 11x + 28\n\nMiddle: −7x − 4x = −11x; last: (−4)(−7) = +28.", difficulty:2, category:"calculation"},

  // m10i-03-2 — Factorising into Double Brackets
  {id:"m10fc-03-2-1", islandId:"m10i-03-2", front:"How do you factorise x² + bx + c?",
   back:"Find two numbers that MULTIPLY to c and ADD to b.\n\nThose numbers go in the brackets: (x + p)(x + q).", difficulty:2, category:"definition"},
  {id:"m10fc-03-2-2", islandId:"m10i-03-2", front:"Factorise x² + 7x + 12.",
   back:"(x + 3)(x + 4)\n\n3 and 4 multiply to 12 and add to 7.", difficulty:2, category:"calculation"},
  {id:"m10fc-03-2-3", islandId:"m10i-03-2", front:"Factorise x² + 2x − 15.",
   back:"(x + 5)(x − 3)\n\n+5 and −3 multiply to −15 and add to +2.", difficulty:3, category:"calculation"},
  {id:"m10fc-03-2-4", islandId:"m10i-03-2", front:"If c is positive but b is negative, what are the signs in the brackets?",
   back:"Both negative.\n\nTwo negatives multiply to a positive (c) and add to a negative (b), e.g. x² − 7x + 12 = (x − 3)(x − 4).", difficulty:3, category:"concept"},
  {id:"m10fc-03-2-5", islandId:"m10i-03-2", front:"Factorise x² − 5x − 14.",
   back:"(x − 7)(x + 2)\n\n−7 and +2 multiply to −14 and add to −5.", difficulty:3, category:"calculation"},
  {id:"m10fc-03-2-6", islandId:"m10i-03-2", front:"How can you check a factorisation?",
   back:"Expand it back out.\n\n(x + 3)(x + 4) = x² + 7x + 12, which matches — so the factorisation is correct.", difficulty:2, category:"application"},

  // m10i-03-3 — Difference of Two Squares
  {id:"m10fc-03-3-1", islandId:"m10i-03-3", front:"What is the difference of two squares?",
   back:"a² − b² = (a + b)(a − b).\n\nIt only works for a SUBTRACTION of two square terms — there is no middle term.", difficulty:2, category:"definition"},
  {id:"m10fc-03-3-2", islandId:"m10i-03-3", front:"Factorise x² − 9.",
   back:"(x + 3)(x − 3)\n\nx² − 9 = x² − 3², a difference of two squares.", difficulty:2, category:"calculation"},
  {id:"m10fc-03-3-3", islandId:"m10i-03-3", front:"Factorise x² − 25.",
   back:"(x + 5)(x − 5)\n\n25 = 5², so x² − 25 = (x + 5)(x − 5).", difficulty:2, category:"calculation"},
  {id:"m10fc-03-3-4", islandId:"m10i-03-3", front:"Can x² + 16 be factorised as a difference of two squares?",
   back:"No.\n\nIt is a SUM of squares, not a difference. The pattern needs a minus sign: a² − b².", difficulty:2, category:"concept"},
  {id:"m10fc-03-3-5", islandId:"m10i-03-3", front:"Use a² − b² to work out 41² − 39² quickly.",
   back:"160\n\n41² − 39² = (41 + 39)(41 − 39) = 80 × 2 = 160 — no need to square either number.", difficulty:3, category:"application"},
  {id:"m10fc-03-3-6", islandId:"m10i-03-3", front:"Factorise 4x² − 9.",
   back:"(2x + 3)(2x − 3)\n\n4x² = (2x)² and 9 = 3², so it is (2x)² − 3².", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m10i-03-1": [
    {q:"Expand (x + 2)(x + 5).", opts:["x² + 7x + 10","x² + 10x + 7","x² + 7x + 7","x² + 10"], c:0,
     e:"Middle: 5x + 2x = 7x; last: 2×5 = 10."},
    {q:"Expand (x − 3)(x + 6).", opts:["x² + 3x − 18","x² − 3x − 18","x² + 3x + 18","x² + 9x − 18"], c:0,
     e:"Middle: 6x − 3x = 3x; last: −3×6 = −18."},
    {q:"Expand (x + 5)².", opts:["x² + 10x + 25","x² + 25","x² + 5x + 25","x² + 10x + 10"], c:0,
     e:"(x + 5)² = x² + 2(5)x + 25 = x² + 10x + 25. Don't forget the middle term."},
    {q:"Expand (x − 2)(x − 8).", opts:["x² − 10x + 16","x² + 10x + 16","x² − 6x + 16","x² − 10x − 16"], c:0,
     e:"Middle: −8x − 2x = −10x; last: (−2)(−8) = +16."},
    {q:"Expand (x + 4)(x − 4).", opts:["x² − 16","x² + 16","x² − 8x − 16","x² + 8x − 16"], c:0,
     e:"The middle terms cancel (−4x + 4x = 0), leaving x² − 16 (difference of two squares)."}
  ],
  "m10i-03-2": [
    {q:"Factorise x² + 8x + 15.", opts:["(x + 3)(x + 5)","(x + 1)(x + 15)","(x − 3)(x − 5)","(x + 2)(x + 6)"], c:0,
     e:"3 and 5 multiply to 15 and add to 8."},
    {q:"Factorise x² − 9x + 20.", opts:["(x − 4)(x − 5)","(x + 4)(x + 5)","(x − 2)(x − 10)","(x − 1)(x − 20)"], c:0,
     e:"−4 and −5 multiply to +20 and add to −9."},
    {q:"Factorise x² + 3x − 10.", opts:["(x + 5)(x − 2)","(x − 5)(x + 2)","(x + 5)(x + 2)","(x − 5)(x − 2)"], c:0,
     e:"+5 and −2 multiply to −10 and add to +3."},
    {q:"Factorise x² − 2x − 24.", opts:["(x − 6)(x + 4)","(x + 6)(x − 4)","(x − 6)(x − 4)","(x − 8)(x + 3)"], c:0,
     e:"−6 and +4 multiply to −24 and add to −2."},
    {q:"Which factor pair multiplies to 18 and adds to 11?", opts:["9 and 2","6 and 3","18 and 1","6 and 12"], c:0,
     e:"9 × 2 = 18 and 9 + 2 = 11, so x² + 11x + 18 = (x + 9)(x + 2)."}
  ],
  "m10i-03-3": [
    {q:"Factorise x² − 36.", opts:["(x + 6)(x − 6)","(x − 6)(x − 6)","(x + 6)(x + 6)","(x − 36)(x + 1)"], c:0,
     e:"36 = 6², so x² − 36 = (x + 6)(x − 6)."},
    {q:"Factorise x² − 1.", opts:["(x + 1)(x − 1)","(x − 1)(x − 1)","(x + 1)(x + 1)","Cannot factorise"], c:0,
     e:"1 = 1², so x² − 1 = (x + 1)(x − 1)."},
    {q:"Which expression is a difference of two squares?", opts:["x² − 49","x² + 49","x² − 7x","x² + 14x + 49"], c:0,
     e:"x² − 49 = x² − 7² fits a² − b². The others are a sum, a single factor, or a perfect-square trinomial."},
    {q:"Work out 53² − 47² using factorising.", opts:["600","6","100","2500"], c:0,
     e:"(53 + 47)(53 − 47) = 100 × 6 = 600."},
    {q:"Factorise 9x² − 16.", opts:["(3x + 4)(3x − 4)","(3x − 4)(3x − 4)","(9x + 4)(x − 4)","(3x + 16)(3x − 1)"], c:0,
     e:"9x² = (3x)² and 16 = 4², so it factorises to (3x + 4)(3x − 4)."}
  ]
});

Object.assign(LESSONS, {
  "m10i-03-1": `<h2>Expanding Double Brackets</h2>
<p>To expand (x + a)(x + b), multiply <strong>every</strong> term in the first bracket by every term in the second — a grid keeps it organised. The result is x² + (a + b)x + ab.</p>
<div class="lesson-diagram" data-diagram="math-quad-grid"><p class="diagram-caption">A 2×2 grid for (x + 3)(x + 4) = x² + 7x + 12</p></div>
<h3>Worked example</h3>
<p>Expand (x − 2)(x − 8).</p>
<ul>
<li>x × x = x²; the middle term is −8x − 2x = −10x; the last is (−2)(−8) = +16.</li>
<li>Answer: <strong>x² − 10x + 16</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>(x + a)² is not x² + a². Squaring a bracket means (x + a)(x + a) = x² + 2ax + a² — the middle term matters.</p>`,

  "m10i-03-2": `<h2>Factorising into Double Brackets</h2>
<p>Factorising reverses expanding. For x² + bx + c, find two numbers that <strong>multiply to c</strong> and <strong>add to b</strong> — those numbers go inside the brackets.</p>
<h3>Worked example</h3>
<p>Factorise x² + 2x − 15.</p>
<ul>
<li>Two numbers multiplying to −15 and adding to +2: that's +5 and −3.</li>
<li>So x² + 2x − 15 = <strong>(x + 5)(x − 3)</strong> (check by expanding).</li>
</ul>
<h3>Sign rules</h3>
<p>If c is positive, the bracket signs match (both + if b is +, both − if b is −). If c is negative, the signs differ.</p>`,

  "m10i-03-3": `<h2>Difference of Two Squares</h2>
<p>A special pattern: <strong>a² − b² = (a + b)(a − b)</strong>. It only applies to a <em>subtraction</em> of two square terms — there is no middle term to worry about.</p>
<h3>Worked example</h3>
<p>Factorise 4x² − 9. Here 4x² = (2x)² and 9 = 3², so 4x² − 9 = <strong>(2x + 3)(2x − 3)</strong>.</p>
<h3>A handy shortcut</h3>
<p>It speeds up arithmetic too: 41² − 39² = (41 + 39)(41 − 39) = 80 × 2 = 160. Note a <em>sum</em> of squares (x² + 9) does not factorise this way.</p>`
});

// ── m10i-03-4 — Expanding Three Brackets ─────────────────────────────────────
FLASHCARDS.push(
  {id:"m10fc-03-4-1", islandId:"m10i-03-4", front:"How do you expand three brackets like (x+a)(x+b)(x+c)?",
   back:"Expand any TWO of the brackets first to get a quadratic, then multiply that quadratic by the remaining bracket and collect like terms.\n\nThe result is a cubic (highest power x³).", difficulty:2, category:"concept"},
  {id:"m10fc-03-4-2", islandId:"m10i-03-4", front:"Expand (x+2)(x+3)(x+1).",
   back:"First (x+2)(x+3) = x² + 5x + 6.\nThen (x² + 5x + 6)(x+1) = x³ + 5x² + 6x + x² + 5x + 6\n= x³ + 6x² + 11x + 6.", difficulty:2, category:"application"},
  {id:"m10fc-03-4-3", islandId:"m10i-03-4", front:"What is the highest power in the expansion of three linear brackets?",
   back:"x³ (a cubic). Each bracket contributes one x, so multiplying three of them gives x × x × x = x³.", difficulty:1, category:"concept"},
  {id:"m10fc-03-4-4", islandId:"m10i-03-4", front:"What must you be careful with when a bracket contains a minus sign?",
   back:"The signs. Multiply every term by every term, keeping track of negatives.\n\ne.g. (x−1)(x+2) = x² + 2x − x − 2 = x² + x − 2.", difficulty:2, category:"application"},
  {id:"m10fc-03-4-5", islandId:"m10i-03-4", front:"Expand (x−1)(x+2)(x−3).",
   back:"First (x−1)(x+2) = x² + x − 2.\nThen (x² + x − 2)(x−3) = x³ − 3x² + x² − 3x − 2x + 6\n= x³ − 2x² − 5x + 6.", difficulty:3, category:"application"}
);
Object.assign(QUESTIONS, {
  "m10i-03-4": [
    {q:"To expand (x+1)(x+4)(x+2), the best first step is to:", opts:["Add all the numbers","Expand two of the brackets to get a quadratic, then multiply by the third","Multiply only the x terms","Square the first bracket"], c:1,
     e:"Expand any two brackets first to get a quadratic, then multiply by the remaining bracket and collect like terms."},
    {q:"(x+2)(x+3) expands to:", opts:["x² + 6","x² + 5x + 6","x² + 6x + 5","2x + 5"], c:1,
     e:"(x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6."},
    {q:"The expansion of three linear brackets is a:", opts:["Quadratic (x²)","Cubic (x³)","Linear (x)","Quartic (x⁴)"], c:1,
     e:"Three factors of x multiply to x³, so the result is a cubic."},
    {q:"(x+2)(x+3)(x+1) =", opts:["x³ + 6x² + 11x + 6","x³ + 5x² + 6x","x³ + 6x² + 6","x² + 6x + 6"], c:0,
     e:"(x²+5x+6)(x+1) = x³+5x²+6x + x²+5x+6 = x³+6x²+11x+6."},
    {q:"When expanding (x−2)(x+1)(x+3), the constant term is:", opts:["−6","6","−5","2"], c:0,
     e:"The constant term is the product of the three numbers: (−2)(+1)(+3) = −6."}
  ]
});
Object.assign(LESSONS, {

'm10i-03-4': `
<h2>Expanding Three Brackets</h2>
<p>Expanding three brackets such as (x+a)(x+b)(x+c) produces a <strong>cubic</strong> expression (highest power x³). The trick is to do it in two stages.</p>
<h3>The method</h3>
<ol>
  <li>Expand any <strong>two</strong> of the brackets to get a quadratic.</li>
  <li>Multiply that quadratic by the <strong>third</strong> bracket — every term in the quadratic times every term in the bracket.</li>
  <li>Collect like terms.</li>
</ol>
<h3>Worked example</h3>
<p>Expand (x+2)(x+3)(x+1).</p>
<p>Step 1: (x+2)(x+3) = x² + 5x + 6.<br>
Step 2: (x² + 5x + 6)(x+1) = x³ + 5x² + 6x + x² + 5x + 6.<br>
Step 3: collect like terms → <strong>x³ + 6x² + 11x + 6</strong>.</p>
<h3>Common mistake</h3>
<p>Trying to multiply all three brackets at once, or forgetting to multiply <em>every</em> term in the quadratic by both terms of the last bracket. Work in two clear stages and keep track of signs.</p>
`
});

// ── m10i-03-5 — Factorising ax² + bx + c (a ≠ 1) ─────────────────────────────
FLASHCARDS.push(
  {id:"m10fc-03-5-1", islandId:"m10i-03-5", front:"What is the 'AC method' for factorising ax² + bx + c?",
   back:"1. Multiply a × c.\n2. Find two numbers that MULTIPLY to ac and ADD to b.\n3. Split the middle term bx using those two numbers.\n4. Factorise by grouping (take out common factors in pairs).", difficulty:2, category:"concept"},
  {id:"m10fc-03-5-2", islandId:"m10i-03-5", front:"Factorise 6x² + 11x + 3.",
   back:"ac = 6 × 3 = 18. Two numbers that multiply to 18 and add to 11: 9 and 2.\n6x² + 9x + 2x + 3\n= 3x(2x + 3) + 1(2x + 3)\n= (2x + 3)(3x + 1).", difficulty:3, category:"application"},
  {id:"m10fc-03-5-3", islandId:"m10i-03-5", front:"In factorising 2x² + 7x + 3, what two numbers do you need?",
   back:"ac = 2 × 3 = 6. Need two numbers that multiply to 6 and add to 7: 6 and 1.\n2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).", difficulty:3, category:"application"},
  {id:"m10fc-03-5-4", islandId:"m10i-03-5", front:"How can you check a factorisation is correct?",
   back:"Expand it back out. If you get the original quadratic, it is correct.\n\ne.g. (2x + 3)(3x + 1) = 6x² + 2x + 9x + 3 = 6x² + 11x + 3. ✓", difficulty:2, category:"application"},
  {id:"m10fc-03-5-5", islandId:"m10i-03-5", front:"Factorise 3x² − 10x + 8.",
   back:"ac = 3 × 8 = 24. Two numbers multiplying to 24 and adding to −10: −6 and −4.\n3x² − 6x − 4x + 8 = 3x(x − 2) − 4(x − 2) = (x − 2)(3x − 4).", difficulty:3, category:"application"}
);
Object.assign(QUESTIONS, {
  "m10i-03-5": [
    {q:"To factorise 2x² + 7x + 3 using the AC method, you first find two numbers that multiply to ___ and add to ___:", opts:["6 and 7","3 and 7","2 and 7","7 and 3"], c:0,
     e:"ac = 2 × 3 = 6, and they must add to b = 7. The numbers are 6 and 1."},
    {q:"6x² + 11x + 3 factorises to:", opts:["(2x + 3)(3x + 1)","(6x + 1)(x + 3)","(2x + 1)(3x + 3)","(6x + 3)(x + 1)"], c:0,
     e:"Split 11x into 9x + 2x: 3x(2x+3) + 1(2x+3) = (2x+3)(3x+1)."},
    {q:"After splitting the middle term, the next step is to:", opts:["Factorise by grouping in pairs","Add the brackets","Square root everything","Divide by a"], c:0,
     e:"Group the four terms into two pairs and take out the common factor from each pair."},
    {q:"Which check confirms (x − 2)(3x − 4) = 3x² − 10x + 8?", opts:["Expanding gives 3x² − 4x − 6x + 8 = 3x² − 10x + 8","Adding the brackets","Substituting x = 0 only","Counting the terms"], c:0,
     e:"Expanding back is the reliable check: 3x² − 4x − 6x + 8 = 3x² − 10x + 8. ✓"},
    {q:"For 3x² − 10x + 8 (ac = 24), the two numbers are:", opts:["−6 and −4","6 and 4","−12 and −2","−8 and −3"], c:0,
     e:"They must multiply to +24 and add to −10, so both are negative: −6 and −4."}
  ]
});
Object.assign(LESSONS, {

'm10i-03-5': `
<h2>Factorising ax² + bx + c (a ≠ 1)</h2>
<p>When the coefficient of x² is not 1, factorising needs an extra step. The reliable approach is the <strong>AC method</strong>.</p>
<h3>The AC method</h3>
<ol>
  <li>Multiply <strong>a × c</strong>.</li>
  <li>Find two numbers that <strong>multiply to ac</strong> and <strong>add to b</strong>.</li>
  <li>Split the middle term bx into those two terms.</li>
  <li>Factorise by <strong>grouping</strong> — take out the common factor from each pair.</li>
</ol>
<h3>Worked example</h3>
<p>Factorise 6x² + 11x + 3.</p>
<p>ac = 6 × 3 = 18. Two numbers that multiply to 18 and add to 11 are <strong>9 and 2</strong>.<br>
6x² + 9x + 2x + 3<br>
= 3x(2x + 3) + 1(2x + 3)<br>
= <strong>(2x + 3)(3x + 1)</strong>.</p>
<p>Check: (2x + 3)(3x + 1) = 6x² + 2x + 9x + 3 = 6x² + 11x + 3. ✓</p>
<h3>Common mistake</h3>
<p>Forgetting the sign rules: if c is positive but b is negative, both numbers are negative (e.g. for 3x² − 10x + 8 use −6 and −4). Always check by expanding back.</p>
`
});
