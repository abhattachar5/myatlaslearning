// content/y9/math/islands/t09.js — Year 9 Maths Topic 9: Algebraic Notation & Substitution
// Islands m9i-09-1 .. m9i-09-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-09-1 — Notation & Simplifying
  {id:"m9fc-09-1-1", islandId:"m9i-09-1", front:"How do you write 'b multiplied by itself' and '5 lots of n'?",
   back:"b × b = b² and 5 × n = 5n.\n\nIn algebra we drop the × sign and write the number before the letter.", difficulty:1, category:"definition"},
  {id:"m9fc-09-1-2", islandId:"m9i-09-1", front:"What are 'like terms'?",
   back:"Terms with exactly the same letter part.\n\n3x and 7x are like terms; 3x and 3x² are not (different powers).", difficulty:1, category:"concept"},
  {id:"m9fc-09-1-3", islandId:"m9i-09-1", front:"Simplify 4a + 5b − a + 2b.",
   back:"3a + 7b\n\nCollect like terms: 4a − a = 3a and 5b + 2b = 7b.", difficulty:2, category:"calculation"},
  {id:"m9fc-09-1-4", islandId:"m9i-09-1", front:"Simplify 3p × 4p.",
   back:"12p²\n\nMultiply the numbers (3 × 4 = 12) and the letters (p × p = p²).", difficulty:2, category:"calculation"},
  {id:"m9fc-09-1-5", islandId:"m9i-09-1", front:"Why is 5x + 2 NOT equal to 7x?",
   back:"Because 5x and 2 are unlike terms.\n\n5x means '5 lots of x' and 2 is just a number — they cannot be combined. Only like terms add.", difficulty:2, category:"application"},
  {id:"m9fc-09-1-6", islandId:"m9i-09-1", front:"Simplify 6y − 9 − 2y + 4.",
   back:"4y − 5\n\nLike terms: 6y − 2y = 4y; numbers: −9 + 4 = −5.", difficulty:2, category:"calculation"},

  // m9i-09-2 — Expanding & Factorising
  {id:"m9fc-09-2-1", islandId:"m9i-09-2", front:"How do you expand a single bracket like 3(x + 4)?",
   back:"Multiply everything inside by the term outside.\n\n3(x + 4) = 3×x + 3×4 = 3x + 12.", difficulty:1, category:"definition"},
  {id:"m9fc-09-2-2", islandId:"m9i-09-2", front:"Expand 5(2a − 3).",
   back:"10a − 15\n\n5 × 2a = 10a and 5 × (−3) = −15.", difficulty:2, category:"calculation"},
  {id:"m9fc-09-2-3", islandId:"m9i-09-2", front:"Expand and simplify 2(x + 3) + 4(x − 1).",
   back:"6x + 2\n\n2(x+3) = 2x + 6 and 4(x−1) = 4x − 4. Collect: 2x + 4x = 6x; 6 − 4 = 2.", difficulty:3, category:"application"},
  {id:"m9fc-09-2-4", islandId:"m9i-09-2", front:"What does factorising mean?",
   back:"The reverse of expanding — putting a bracket back in by taking out a common factor.\n\n6x + 9 = 3(2x + 3).", difficulty:2, category:"definition"},
  {id:"m9fc-09-2-5", islandId:"m9i-09-2", front:"Factorise 8x + 12.",
   back:"4(2x + 3)\n\nThe highest common factor of 8 and 12 is 4. Take it out: 8x = 4×2x, 12 = 4×3.", difficulty:2, category:"calculation"},
  {id:"m9fc-09-2-6", islandId:"m9i-09-2", front:"Factorise fully 6x² + 9x.",
   back:"3x(2x + 3)\n\nThe common factor is 3x (number 3 and a letter x). 6x² = 3x×2x and 9x = 3x×3.", difficulty:3, category:"application"},

  // m9i-09-3 — Substitution & Formulae
  {id:"m9fc-09-3-1", islandId:"m9i-09-3", front:"What does 'substitute' mean?",
   back:"Replace each letter with its given number, then work it out using order of operations.\n\nIf x = 4, then 3x + 2 = 3×4 + 2 = 14.", difficulty:1, category:"definition"},
  {id:"m9fc-09-3-2", islandId:"m9i-09-3", front:"Find 2a + 3b when a = 5 and b = 2.",
   back:"16\n\n2×5 + 3×2 = 10 + 6 = 16.", difficulty:1, category:"calculation"},
  {id:"m9fc-09-3-3", islandId:"m9i-09-3", front:"Find x² − 4 when x = 3.",
   back:"5\n\nPowers first: 3² = 9, then 9 − 4 = 5.", difficulty:2, category:"calculation"},
  {id:"m9fc-09-3-4", islandId:"m9i-09-3", front:"Find 5p when p = −3.",
   back:"−15\n\n5 × (−3) = −15. Keep track of the negative sign carefully.", difficulty:2, category:"application"},
  {id:"m9fc-09-3-5", islandId:"m9i-09-3", front:"Use the formula P = 2(l + w) to find P when l = 7 and w = 3.",
   back:"20\n\nBrackets first: 7 + 3 = 10, then 2 × 10 = 20.", difficulty:2, category:"application"},
  {id:"m9fc-09-3-6", islandId:"m9i-09-3", front:"Find 2x² when x = 4. Is it 64 or 32?",
   back:"32.\n\nThe power applies only to x, not the 2: 2x² = 2 × 4² = 2 × 16 = 32. (2x)² would be 64.", difficulty:3, category:"concept"},

  // m9i-09-4 — Rearranging Formulae
  {id:"m9fc-09-4-1", islandId:"m9i-09-4", front:"What does 'change the subject' of a formula mean?",
   back:"Rearrange it so a different letter is on its own on one side of the equals sign.\n\nIn v = u + at, the subject is v. Making a the subject means getting a alone.", difficulty:1, category:"definition"},
  {id:"m9fc-09-4-2", islandId:"m9i-09-4", front:"What is the golden rule when rearranging a formula?",
   back:"Whatever you do to one side, do exactly the same to the other side.\n\nThis keeps the two sides balanced and equal.", difficulty:1, category:"concept"},
  {id:"m9fc-09-4-3", islandId:"m9i-09-4", front:"Make r the subject of C = 2πr.",
   back:"r = C ÷ (2π)\n\nr is multiplied by 2π, so divide both sides by 2π: C ÷ (2π) = r.", difficulty:2, category:"calculation"},
  {id:"m9fc-09-4-4", islandId:"m9i-09-4", front:"Make x the subject of y = x + 7.",
   back:"x = y − 7\n\n7 is added to x, so subtract 7 from both sides to undo it.", difficulty:1, category:"calculation"},
  {id:"m9fc-09-4-5", islandId:"m9i-09-4", front:"Make a the subject of v = u + at.",
   back:"a = (v − u) ÷ t\n\nFirst subtract u from both sides: v − u = at. Then divide both sides by t: (v − u) ÷ t = a.", difficulty:3, category:"application"},
  {id:"m9fc-09-4-6", islandId:"m9i-09-4", front:"Why do inverse operations come in the reverse order?",
   back:"To undo a formula you peel away operations from the outside in, like removing layers.\n\nIn u + at, the + u is the outermost layer, so undo it first, then undo the × t.", difficulty:3, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m9i-09-1": [
    {q:"Simplify 7x + 3 − 2x + 5.", opts:["5x + 8","5x + 2","9x + 8","5x − 8"], c:0,
     e:"Like terms: 7x − 2x = 5x; numbers 3 + 5 = 8."},
    {q:"Simplify 5a × 3a.", opts:["15a²","15a","8a²","8a"], c:0,
     e:"Multiply numbers 5 × 3 = 15 and letters a × a = a², giving 15a²."},
    {q:"Which pair are like terms?", opts:["4y and 9y","4y and 4y²","4y and 4","4y and 4x"], c:0,
     e:"Like terms have the same letter and power. 4y and 9y match; the others differ."},
    {q:"Simplify 8m − 3n − 5m + n.", opts:["3m − 2n","3m − 4n","13m − 2n","3m + 2n"], c:0,
     e:"8m − 5m = 3m and −3n + n = −2n, giving 3m − 2n."},
    {q:"Write 'p multiplied by p multiplied by p'.", opts:["p³","3p","p × 3","p²"], c:0,
     e:"Three p's multiplied together is p³."}
  ],
  "m9i-09-2": [
    {q:"Expand 4(x + 5).", opts:["4x + 20","4x + 5","x + 20","4x + 9"], c:0,
     e:"Multiply both terms by 4: 4×x = 4x and 4×5 = 20."},
    {q:"Expand 3(2a − 7).", opts:["6a − 21","6a − 7","5a − 21","6a + 21"], c:0,
     e:"3×2a = 6a and 3×(−7) = −21."},
    {q:"Expand and simplify 5(x + 2) + 3(x − 4).", opts:["8x − 2","8x + 2","8x − 22","2x − 2"], c:0,
     e:"5x + 10 + 3x − 12 = 8x − 2."},
    {q:"Factorise 10x + 15.", opts:["5(2x + 3)","5(2x + 15)","10(x + 1.5)","2(5x + 7.5)"], c:0,
     e:"The HCF of 10 and 15 is 5: 10x + 15 = 5(2x + 3)."},
    {q:"Factorise fully 12y² + 8y.", opts:["4y(3y + 2)","4(3y² + 2y)","2y(6y + 4)","y(12y + 8)"], c:0,
     e:"The highest common factor is 4y: 12y² = 4y×3y and 8y = 4y×2."}
  ],
  "m9i-09-3": [
    {q:"Find 4x − 1 when x = 5.", opts:["19","20","9","16"], c:0,
     e:"4×5 − 1 = 20 − 1 = 19."},
    {q:"Find a² + a when a = 6.", opts:["42","36","48","12"], c:0,
     e:"Powers first: 6² = 36, then 36 + 6 = 42."},
    {q:"Find 3p + 2q when p = −2 and q = 5.", opts:["4","16","−4","11"], c:0,
     e:"3×(−2) + 2×5 = −6 + 10 = 4."},
    {q:"Use v = u + at with u = 3, a = 4, t = 2. Find v.", opts:["11","14","24","9"], c:0,
     e:"v = 3 + 4×2 = 3 + 8 = 11 (multiplication before addition)."},
    {q:"Find 5x² when x = 2.", opts:["20","100","40","10"], c:0,
     e:"The power is only on x: 5 × 2² = 5 × 4 = 20. (5x)² would be 100.)"}
  ],
  "m9i-09-4": [
    {q:"Make r the subject of C = 2πr.", opts:["r = C ÷ (2π)","r = 2πC","r = C − 2π","r = 2π ÷ C"], c:0,
     e:"r is multiplied by 2π, so divide both sides by 2π: r = C ÷ (2π)."},
    {q:"Make x the subject of y = x − 5.", opts:["x = y + 5","x = y − 5","x = 5 − y","x = 5y"], c:0,
     e:"5 is subtracted from x, so add 5 to both sides: x = y + 5."},
    {q:"Make a the subject of v = u + at.", opts:["a = (v − u) ÷ t","a = (v + u) ÷ t","a = v − u − t","a = (v − u) × t"], c:0,
     e:"Subtract u from both sides: v − u = at. Then divide by t: a = (v − u) ÷ t."},
    {q:"Make w the subject of A = lw.", opts:["w = A ÷ l","w = A − l","w = Al","w = l ÷ A"], c:0,
     e:"w is multiplied by l, so divide both sides by l: w = A ÷ l."},
    {q:"Make y the subject of x = 3y.", opts:["y = x ÷ 3","y = 3x","y = x − 3","y = x + 3"], c:0,
     e:"y is multiplied by 3, so divide both sides by 3: y = x ÷ 3."}
  ]
});

Object.assign(LESSONS, {
  "m9i-09-1": `<h2>Notation &amp; Simplifying Expressions</h2>
<p>Algebra has its own shorthand: we drop the × sign, write the number before the letter (5n, not n5), and use powers for repeated multiplication (b × b = b²). You can only add or subtract <strong>like terms</strong> — terms with exactly the same letter and power.</p>
<h3>Worked example</h3>
<p>Simplify 4a + 5b − a + 2b.</p>
<ul>
<li>Collect the a terms: 4a − a = 3a.</li>
<li>Collect the b terms: 5b + 2b = 7b.</li>
<li>Answer: <strong>3a + 7b</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>5x + 2 is not 7x — '5 lots of x' and the number 2 are unlike terms and cannot be merged. Only collect terms whose letter parts match exactly.</p>`,

  "m9i-09-2": `<h2>Expanding &amp; Factorising</h2>
<p><strong>Expanding</strong> a bracket means multiplying everything inside by the term outside. <strong>Factorising</strong> is the reverse: take out the highest common factor and put a bracket back in.</p>
<div class="lesson-diagram" data-diagram="math-expand-grid"><p class="diagram-caption">A grid shows 3(x + 4) = 3x + 12</p></div>
<h3>Worked example</h3>
<p>Factorise fully 6x² + 9x.</p>
<ul>
<li>The common factor of 6x² and 9x is 3x.</li>
<li>6x² = 3x × 2x and 9x = 3x × 3, so 6x² + 9x = <strong>3x(2x + 3)</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Factorise <em>fully</em> — take out the highest common factor, including any letters. 6x² + 9x = 3(2x² + 3x) is not finished; the x also comes out, giving 3x(2x + 3).</p>`,

  "m9i-09-3": `<h2>Substitution &amp; Formulae</h2>
<p>To <strong>substitute</strong>, replace each letter with its number and evaluate using the order of operations (brackets, powers, then × ÷, then + −). Formulae work the same way.</p>
<h3>Worked example</h3>
<p>Use P = 2(l + w) to find P when l = 7 and w = 3.</p>
<ul>
<li>Brackets first: l + w = 7 + 3 = 10.</li>
<li>Then × 2: 2 × 10 = <strong>20</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>A power attaches only to the letter next to it. 2x² when x = 4 is 2 × 16 = 32, not 64 — square the x first, then multiply by 2. Only (2x)² would give 64.</p>`,

  "m9i-09-4": `<h2>Rearranging Formulae</h2>
<p>A formula links several quantities. Sometimes the letter you want is not on its own — you need to <strong>change the subject</strong>, rearranging the formula so a different letter sits alone on one side. You do this with <strong>inverse operations</strong>: the opposite of + is −, and the opposite of × is ÷.</p>
<h3>The golden rule</h3>
<p>Whatever you do to one side, do exactly the same to the other side. This keeps both sides balanced and equal. To free the letter you want, peel away the operations attached to it, undoing the outermost layer first.</p>
<h3>Single-step rearrangement</h3>
<p>Make r the subject of C = 2πr.</p>
<ul>
<li>r is multiplied by 2π.</li>
<li>The inverse of × is ÷, so divide both sides by 2π.</li>
<li>C ÷ (2π) = r, so <strong>r = C ÷ (2π)</strong>.</li>
</ul>
<h3>Worked example</h3>
<p>Make a the subject of v = u + at (a two-step rearrangement).</p>
<ul>
<li>Undo the + u first: subtract u from both sides → v − u = at.</li>
<li>Now a is multiplied by t: divide both sides by t → (v − u) ÷ t = a.</li>
<li>Answer: <strong>a = (v − u) ÷ t</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Undo operations in reverse order and apply them to the <em>whole</em> side. A frequent slip is writing a = v − u ÷ t — without brackets that only divides u by t. You must subtract u first, then divide everything by t, so brackets are needed: a = (v − u) ÷ t.</p>`
});
