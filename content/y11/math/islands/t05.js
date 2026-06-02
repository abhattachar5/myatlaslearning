// content/y11/math/islands/t05.js — Year 11 Maths Topic 5: Functions
// Islands m11i-05-1 .. m11i-05-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-05-1 — Function Notation & Composite Functions
  {id:"m11fc-05-1-1", islandId:"m11i-05-1", front:"What does f(x) mean?",
   back:"A function named f applied to an input x.\n\nf(3) means substitute 3 wherever x appears in the rule.", difficulty:1, category:"definition"},
  {id:"m11fc-05-1-2", islandId:"m11i-05-1", front:"If f(x) = 2x + 1, find f(4).",
   back:"9\n\nSubstitute x = 4: 2(4) + 1 = 9.", difficulty:1, category:"calculation"},
  {id:"m11fc-05-1-3", islandId:"m11i-05-1", front:"What is a composite function fg(x)?",
   back:"Do g first, then f: fg(x) = f(g(x)).\n\nThe function nearest the x acts first.", difficulty:2, category:"definition"},
  {id:"m11fc-05-1-4", islandId:"m11i-05-1", front:"f(x) = x + 3 and g(x) = 2x. Find fg(5).",
   back:"13\n\ng(5) = 10, then f(10) = 10 + 3 = 13.", difficulty:2, category:"calculation"},
  {id:"m11fc-05-1-5", islandId:"m11i-05-1", front:"Does fg(x) usually equal gf(x)?",
   back:"No — order matters.\n\nfg means g first then f; gf means f first then g. They are usually different.", difficulty:3, category:"concept"},
  {id:"m11fc-05-1-6", islandId:"m11i-05-1", front:"f(x) = x², g(x) = x − 1. Find fg(x) as an expression.",
   back:"(x − 1)²\n\nfg(x) = f(g(x)) = f(x − 1) = (x − 1)².", difficulty:3, category:"application"},

  // m11i-05-2 — Inverse Functions
  {id:"m11fc-05-2-1", islandId:"m11i-05-2", front:"What is an inverse function f⁻¹(x)?",
   back:"The function that undoes f.\n\nIf f maps 3 to 7, then f⁻¹ maps 7 back to 3.", difficulty:2, category:"definition"},
  {id:"m11fc-05-2-2", islandId:"m11i-05-2", front:"What are the steps to find an inverse function?",
   back:"Write y = f(x), swap x and y, then rearrange to make y the subject.\n\nThat rearranged expression is f⁻¹(x).", difficulty:2, category:"concept"},
  {id:"m11fc-05-2-3", islandId:"m11i-05-2", front:"Find the inverse of f(x) = x + 5.",
   back:"f⁻¹(x) = x − 5\n\nSwap and rearrange y = x + 5 → x = y + 5 → y = x − 5.", difficulty:2, category:"calculation"},
  {id:"m11fc-05-2-4", islandId:"m11i-05-2", front:"Find the inverse of f(x) = 3x − 2.",
   back:"f⁻¹(x) = (x + 2)/3\n\ny = 3x − 2 → swap → x = 3y − 2 → 3y = x + 2 → y = (x + 2)/3.", difficulty:3, category:"calculation"},
  {id:"m11fc-05-2-5", islandId:"m11i-05-2", front:"How can you check an inverse function?",
   back:"Apply f then f⁻¹ (or vice versa) — you should get back to x.\n\nf⁻¹(f(x)) = x.", difficulty:3, category:"concept"},
  {id:"m11fc-05-2-6", islandId:"m11i-05-2", front:"Find f⁻¹(x) for f(x) = x/2 + 1.",
   back:"f⁻¹(x) = 2(x − 1)\n\nSwap: x = y/2 + 1 → y/2 = x − 1 → y = 2(x − 1).", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-05-1": [
    {q:"If f(x) = 3x − 2, find f(5).", opts:["13","17","8","15"], c:0,
     e:"3(5) − 2 = 15 − 2 = 13."},
    {q:"fg(x) means:", opts:["Do g first, then f","Do f first, then g","Multiply f and g","Add f and g"], c:0,
     e:"The function nearest x acts first: fg(x) = f(g(x))."},
    {q:"f(x) = x + 4, g(x) = 3x. Find fg(2).", opts:["10","18","14","24"], c:0,
     e:"g(2) = 6, then f(6) = 6 + 4 = 10."},
    {q:"f(x) = 2x, g(x) = x + 1. Find gf(3).", opts:["7","8","6","9"], c:0,
     e:"f(3) = 6, then g(6) = 6 + 1 = 7."},
    {q:"f(x) = x², g(x) = x + 2. fg(x) =", opts:["(x + 2)²","x² + 2","x² + 4","2x²"], c:0,
     e:"fg(x) = f(g(x)) = f(x + 2) = (x + 2)²."}
  ],
  "m11i-05-2": [
    {q:"The inverse of f(x) = x + 7 is:", opts:["x − 7","x + 7","7 − x","7x"], c:0,
     e:"Undo + 7 with − 7: f⁻¹(x) = x − 7."},
    {q:"The first step to find an inverse is to:", opts:["Write y = f(x) and swap x and y","Square both sides","Differentiate","Add x"], c:0,
     e:"Write y = f(x), swap x and y, then rearrange for y."},
    {q:"The inverse of f(x) = 2x + 6 is:", opts:["(x − 6)/2","(x + 6)/2","2x − 6","x/2 + 6"], c:0,
     e:"x = 2y + 6 → 2y = x − 6 → y = (x − 6)/2."},
    {q:"f⁻¹(f(x)) equals:", opts:["x","f(x)","1","0"], c:0,
     e:"Applying a function then its inverse returns the original input x."},
    {q:"The inverse of f(x) = (x − 1)/4 is:", opts:["4x + 1","4x − 1","(x + 1)/4","x/4 − 1"], c:0,
     e:"x = (y − 1)/4 → 4x = y − 1 → y = 4x + 1."}
  ]
});

Object.assign(LESSONS, {
  "m11i-05-1": `<h2>Function Notation &amp; Composite Functions</h2>
<p><strong>f(x)</strong> means a function f applied to an input x; to evaluate f(3) you substitute 3 wherever x appears. A <strong>composite function</strong> applies one function then another: <strong>fg(x) = f(g(x))</strong> — the function nearest the x acts first.</p>
<h3>Worked example</h3>
<p>f(x) = x + 3 and g(x) = 2x. Find fg(5): g(5) = 10 first, then f(10) = 10 + 3 = <strong>13</strong>.</p>
<h3>Common mistake</h3>
<p>Order matters: fg(x) is usually not the same as gf(x). Always apply the inner function (next to x) first.</p>`,

  "m11i-05-2": `<h2>Inverse Functions</h2>
<p>The <strong>inverse</strong> f⁻¹(x) undoes the function f. To find it: write <strong>y = f(x)</strong>, <strong>swap x and y</strong>, then <strong>rearrange</strong> to make y the subject.</p>
<h3>Worked example</h3>
<p>Find the inverse of f(x) = 3x − 2.</p>
<ul>
<li>y = 3x − 2; swap: x = 3y − 2.</li>
<li>Rearrange: 3y = x + 2 → y = (x + 2)/3, so <strong>f⁻¹(x) = (x + 2)/3</strong>.</li>
</ul>
<h3>Check</h3>
<p>Applying f then f⁻¹ should return x: f⁻¹(f(x)) = x. This is a quick way to confirm your inverse is correct.</p>`
});
