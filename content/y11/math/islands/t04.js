// content/y11/math/islands/t04.js — Year 11 Maths Topic 4: Algebraic Fractions & Manipulation
// Islands m11i-04-1 .. m11i-04-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-04-1 — Simplifying Algebraic Fractions
  {id:"m11fc-04-1-1", islandId:"m11i-04-1", front:"How do you simplify an algebraic fraction?",
   back:"Factorise the top and bottom, then cancel any common factors.\n\nYou can only cancel FACTORS, never individual terms.", difficulty:2, category:"definition"},
  {id:"m11fc-04-1-2", islandId:"m11i-04-1", front:"Simplify 6x / 9x².",
   back:"2 / 3x\n\nCancel the common factor 3x: 6x ÷ 3x = 2 and 9x² ÷ 3x = 3x.", difficulty:2, category:"calculation"},
  {id:"m11fc-04-1-3", islandId:"m11i-04-1", front:"Simplify (x² + 5x + 6)/(x + 2).",
   back:"x + 3\n\nFactorise the top: (x + 2)(x + 3). Cancel the common (x + 2).", difficulty:3, category:"calculation"},
  {id:"m11fc-04-1-4", islandId:"m11i-04-1", front:"Why can't you cancel the x in (x + 3)/x?",
   back:"Because x + 3 is a single term on top, not a factor of x times something.\n\nYou may only cancel factors common to the WHOLE top and bottom.", difficulty:3, category:"concept"},
  {id:"m11fc-04-1-5", islandId:"m11i-04-1", front:"Simplify (x² − 9)/(x − 3).",
   back:"x + 3\n\nThe top is a difference of two squares: (x + 3)(x − 3). Cancel (x − 3).", difficulty:3, category:"application"},
  {id:"m11fc-04-1-6", islandId:"m11i-04-1", front:"What is the first step with any algebraic fraction?",
   back:"Factorise fully, top and bottom.\n\nOnce factorised, common factors become obvious to cancel.", difficulty:2, category:"concept"},

  // m11i-04-2 — Four Operations with Algebraic Fractions
  {id:"m11fc-04-2-1", islandId:"m11i-04-2", front:"How do you add algebraic fractions?",
   back:"Use a common denominator, then add the numerators.\n\nSame rule as numerical fractions.", difficulty:2, category:"definition"},
  {id:"m11fc-04-2-2", islandId:"m11i-04-2", front:"Work out x/2 + x/3.",
   back:"5x/6\n\nCommon denominator 6: 3x/6 + 2x/6 = 5x/6.", difficulty:2, category:"calculation"},
  {id:"m11fc-04-2-3", islandId:"m11i-04-2", front:"How do you multiply algebraic fractions?",
   back:"Multiply the numerators and the denominators, then simplify.\n\nCancel common factors before or after multiplying.", difficulty:2, category:"definition"},
  {id:"m11fc-04-2-4", islandId:"m11i-04-2", front:"Work out (2/x) × (x/5).",
   back:"2/5\n\nMultiply: 2x/5x, then cancel x to get 2/5.", difficulty:2, category:"calculation"},
  {id:"m11fc-04-2-5", islandId:"m11i-04-2", front:"How do you divide algebraic fractions?",
   back:"Keep, flip, multiply: invert the second fraction and multiply.\n\n(a/b) ÷ (c/d) = (a/b) × (d/c).", difficulty:2, category:"concept"},
  {id:"m11fc-04-2-6", islandId:"m11i-04-2", front:"Work out 3/(x+1) + 2/(x+1).",
   back:"5/(x + 1)\n\nThe denominators are the same, so add the numerators: 3 + 2 = 5.", difficulty:3, category:"application"},

  // m11i-04-3 — Recurring Decimals to Fractions
  {id:"m11fc-04-3-1", islandId:"m11i-04-3", front:"What is the algebra method for converting a recurring decimal?",
   back:"Let x = the decimal, multiply by a power of 10 to shift it, then subtract to remove the recurring part.", difficulty:3, category:"definition"},
  {id:"m11fc-04-3-2", islandId:"m11i-04-3", front:"Convert 0.333… to a fraction.",
   back:"1/3\n\nLet x = 0.333…; 10x = 3.333…; subtract: 9x = 3, so x = 3/9 = 1/3.", difficulty:2, category:"calculation"},
  {id:"m11fc-04-3-3", islandId:"m11i-04-3", front:"Why multiply by 10 (or 100) before subtracting?",
   back:"To line up the recurring digits so they cancel when you subtract.\n\nOne repeating digit → ×10; two repeating digits → ×100.", difficulty:3, category:"concept"},
  {id:"m11fc-04-3-4", islandId:"m11i-04-3", front:"Convert 0.454545… to a fraction.",
   back:"5/11\n\nLet x = 0.4545…; 100x = 45.4545…; subtract: 99x = 45, so x = 45/99 = 5/11.", difficulty:3, category:"calculation"},
  {id:"m11fc-04-3-5", islandId:"m11i-04-3", front:"Two digits recur. What do you multiply x by?",
   back:"100.\n\nMultiply by 10ⁿ where n is the number of recurring digits, so two digits → 100.", difficulty:2, category:"concept"},
  {id:"m11fc-04-3-6", islandId:"m11i-04-3", front:"Convert 0.666… to a fraction.",
   back:"2/3\n\nLet x = 0.666…; 10x = 6.666…; 9x = 6, so x = 6/9 = 2/3.", difficulty:2, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m11i-04-1": [
    {q:"Simplify 8x / 12x².", opts:["2/(3x)","2x/3","4/(6x)","2/3"], c:0,
     e:"Cancel the common factor 4x: 8x ÷ 4x = 2 and 12x² ÷ 4x = 3x, giving 2/(3x)."},
    {q:"Simplify (x² + 7x + 12)/(x + 4).", opts:["x + 3","x + 4","x + 7","x + 12"], c:0,
     e:"Top factorises to (x + 3)(x + 4); cancel (x + 4)."},
    {q:"Simplify (x² − 16)/(x + 4).", opts:["x − 4","x + 4","x − 16","x²"], c:0,
     e:"Top is (x + 4)(x − 4); cancel (x + 4) to leave x − 4."},
    {q:"You may cancel in a fraction only:", opts:["Common factors","Any term","The first term","The largest number"], c:0,
     e:"Only factors common to the whole top and bottom can be cancelled."},
    {q:"Simplify (3x + 6)/(x + 2).", opts:["3","x + 3","3x","6"], c:0,
     e:"Top = 3(x + 2); cancel (x + 2) to leave 3."}
  ],
  "m11i-04-2": [
    {q:"Work out x/4 + x/2.", opts:["3x/4","2x/6","x/6","x/8"], c:0,
     e:"Common denominator 4: x/4 + 2x/4 = 3x/4."},
    {q:"Work out (3/x) × (x/4).", opts:["3/4","3x/4","12/x","3/4x"], c:0,
     e:"3x/(4x), cancel x → 3/4."},
    {q:"Work out (a/b) ÷ (c/d).", opts:["ad/bc","ac/bd","a/d","bc/ad"], c:0,
     e:"Keep-flip-multiply: (a/b) × (d/c) = ad/bc."},
    {q:"Work out 5/(x−1) − 2/(x−1).", opts:["3/(x−1)","7/(x−1)","3/(x−1)²","3"], c:0,
     e:"Same denominator: 5 − 2 = 3, giving 3/(x − 1)."},
    {q:"Work out 2/3 + x/3.", opts:["(2 + x)/3","2x/3","(2 + x)/6","2/(3x)"], c:0,
     e:"Same denominator 3: add numerators to get (2 + x)/3."}
  ],
  "m11i-04-3": [
    {q:"Convert 0.222… to a fraction.", opts:["2/9","1/5","2/10","1/4"], c:0,
     e:"x = 0.222…; 10x = 2.222…; 9x = 2, so x = 2/9."},
    {q:"For two recurring digits you multiply x by:", opts:["100","10","1000","2"], c:0,
     e:"Multiply by 10ⁿ; two digits → 100."},
    {q:"Convert 0.272727… to a fraction.", opts:["3/11","27/100","27/90","1/4"], c:0,
     e:"100x = 27.2727…; 99x = 27, so x = 27/99 = 3/11."},
    {q:"In the method, you subtract the equations to:", opts:["Remove the recurring part","Add the digits","Make x larger","Round the decimal"], c:0,
     e:"Subtracting cancels the identical recurring tails, leaving a whole number."},
    {q:"Convert 0.888… to a fraction.", opts:["8/9","4/5","8/10","7/9"], c:0,
     e:"10x = 8.888…; 9x = 8, so x = 8/9."}
  ]
});

Object.assign(LESSONS, {
  "m11i-04-1": `<h2>Simplifying Algebraic Fractions</h2>
<p>To simplify an algebraic fraction, <strong>factorise</strong> the top and bottom fully, then <strong>cancel common factors</strong>. The golden rule: you can only cancel <em>factors</em> (things multiplied), never individual terms.</p>
<h3>Worked example</h3>
<p>Simplify (x² + 5x + 6)/(x + 2).</p>
<ul>
<li>Factorise the top: (x + 2)(x + 3).</li>
<li>Cancel the common (x + 2): the answer is <strong>x + 3</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>You cannot cancel the x in (x + 3)/x — the top is a single term, not x × something. Only cancel factors common to the whole numerator and denominator.</p>`,

  "m11i-04-2": `<h2>Four Operations with Algebraic Fractions</h2>
<p>Algebraic fractions follow the same rules as numerical ones:</p>
<ul>
<li><strong>Add / subtract:</strong> use a common denominator, then combine the numerators.</li>
<li><strong>Multiply:</strong> multiply tops and bottoms, then simplify.</li>
<li><strong>Divide:</strong> keep, flip, multiply.</li>
</ul>
<h3>Worked example</h3>
<p>x/2 + x/3: common denominator 6 gives 3x/6 + 2x/6 = <strong>5x/6</strong>.</p>
<h3>Common mistake</h3>
<p>Only add numerators once the denominators match. 3/(x+1) + 2/(x+1) = 5/(x+1) because the denominators are already the same.</p>`,

  "m11i-04-3": `<h2>Recurring Decimals to Fractions</h2>
<p>Any recurring decimal is rational, and algebra converts it exactly. <strong>Let x = the decimal</strong>, multiply by a power of 10 to shift the recurring part, then <strong>subtract</strong> to cancel the repeating tail.</p>
<h3>Worked example</h3>
<p>Convert 0.454545… to a fraction.</p>
<ul>
<li>Let x = 0.4545…; two digits recur, so multiply by 100: 100x = 45.4545…</li>
<li>Subtract: 100x − x = 45, so 99x = 45 → x = 45/99 = <strong>5/11</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Match the multiplier to the number of recurring digits: one digit → ×10, two digits → ×100. Always simplify the final fraction.</p>`
});
