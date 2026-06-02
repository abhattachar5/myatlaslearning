// content/y11/math/islands/t13.js — Year 11 Maths Topic 13: Conditional Probability & Set Notation
// Islands m11i-13-1 .. m11i-13-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-13-1 — Conditional Probability
  {id:"m11fc-13-1-1", islandId:"m11i-13-1", front:"What is conditional probability?",
   back:"The probability of one event GIVEN that another has happened.\n\nWritten P(B | A): the chance of B given A.", difficulty:2, category:"definition"},
  {id:"m11fc-13-1-2", islandId:"m11i-13-1", front:"On a 'without replacement' tree, what changes on the second branches?",
   back:"Both the favourable count and the total drop by one.\n\nThe item taken is not put back, so the probabilities change.", difficulty:3, category:"concept"},
  {id:"m11fc-13-1-3", islandId:"m11i-13-1", front:"A bag has 4 red and 6 blue. Two taken without replacement. P(both red)?",
   back:"2/15\n\n4/10 × 3/9 = 12/90 = 2/15. The second red is 3 out of 9.", difficulty:3, category:"calculation"},
  {id:"m11fc-13-1-4", islandId:"m11i-13-1", front:"From a table, how do you find P(B given A)?",
   back:"Restrict to the A row/column: P(B | A) = (number that are both) ÷ (number that are A).", difficulty:3, category:"concept"},
  {id:"m11fc-13-1-5", islandId:"m11i-13-1", front:"Of 30 people, 12 own a dog; 5 of those also own a cat. P(cat | dog)?",
   back:"5/12\n\nGiven a dog (12 people), 5 own a cat: 5 ÷ 12.", difficulty:3, category:"application"},
  {id:"m11fc-13-1-6", islandId:"m11i-13-1", front:"Why does 'given' reduce the sample space?",
   back:"Because you only consider outcomes where the condition is true.\n\nThe denominator becomes the count of the condition, not the whole.", difficulty:3, category:"concept"},

  // m11i-13-2 — Set Notation & Venn Diagrams
  {id:"m11fc-13-2-1", islandId:"m11i-13-2", front:"What does A ∩ B mean?",
   back:"The intersection — elements in BOTH A and B.\n\nThe overlap of the two circles.", difficulty:2, category:"definition"},
  {id:"m11fc-13-2-2", islandId:"m11i-13-2", front:"What does A ∪ B mean?",
   back:"The union — elements in A OR B (or both).\n\nEverything inside either circle.", difficulty:2, category:"definition"},
  {id:"m11fc-13-2-3", islandId:"m11i-13-2", front:"What does A′ mean?",
   back:"The complement — everything NOT in A.\n\nAll elements outside circle A.", difficulty:2, category:"definition"},
  {id:"m11fc-13-2-4", islandId:"m11i-13-2", front:"How do you fill a Venn diagram from totals?",
   back:"Put the 'both' (intersection) in the middle FIRST, then subtract it from each set's total.", difficulty:3, category:"concept"},
  {id:"m11fc-13-2-5", islandId:"m11i-13-2", front:"30 students: 18 do French, 14 do German, 7 do both. How many do neither?",
   back:"5\n\nFrench only 11, German only 7, both 7 → 25 do at least one, so 30 − 25 = 5.", difficulty:3, category:"application"},
  {id:"m11fc-13-2-6", islandId:"m11i-13-2", front:"How do you find P(A ∪ B) from a Venn diagram?",
   back:"Count everything in either circle, then divide by the total.\n\nDon't double-count the overlap.", difficulty:3, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m11i-13-1": [
    {q:"P(B | A) means the probability of:", opts:["B given A has happened","A and B","A or B","neither"], c:0,
     e:"The bar means 'given' — B occurring given that A has occurred."},
    {q:"A bag has 3 red, 5 green. Two taken without replacement. P(both red)?", opts:["3/28","9/64","6/64","1/4"], c:0,
     e:"3/8 × 2/7 = 6/56 = 3/28."},
    {q:"Without replacement, the second-pick probabilities:", opts:["Change","Stay the same","Become zero","Double"], c:0,
     e:"Removing an item changes both the favourable count and total."},
    {q:"Of 20 pupils, 8 play piano; 3 of them also sing. P(sing | piano)?", opts:["3/8","3/20","8/20","5/8"], c:0,
     e:"Given piano (8 pupils), 3 sing: 3/8."},
    {q:"Conditioning on an event changes the:", opts:["Sample space (denominator)","Numerator only","Nothing","Total to zero"], c:0,
     e:"You restrict to outcomes where the condition holds, changing the denominator."}
  ],
  "m11i-13-2": [
    {q:"A ∩ B means:", opts:["In both A and B","In A or B","Not in A","In A only"], c:0,
     e:"Intersection — the overlap, in both sets."},
    {q:"A ∪ B means:", opts:["In A or B (or both)","In both only","Outside A","Outside both"], c:0,
     e:"Union — everything in either set."},
    {q:"A′ means:", opts:["Everything not in A","Everything in A","The overlap","The union"], c:0,
     e:"The complement of A — outside the set."},
    {q:"40 people: 25 like tea, 18 like coffee, 10 like both. How many like neither?", opts:["7","0","33","13"], c:0,
     e:"Tea only 15, coffee only 8, both 10 → 33 like at least one, so 7 like neither."},
    {q:"When filling a Venn diagram, you write first the:", opts:["Intersection (both)","A only","B only","Outside"], c:0,
     e:"Fill the overlap first, then subtract from each total to avoid double-counting."}
  ]
});

Object.assign(LESSONS, {
  "m11i-13-1": `<h2>Conditional Probability</h2>
<p><strong>Conditional probability</strong> P(B | A) is the chance of B <em>given</em> A has happened — the condition restricts the sample space, so the denominator becomes the count of A. On a <strong>'without replacement'</strong> tree, the second-pick probabilities change because an item has been removed.</p>
<div class="lesson-diagram" data-diagram="math-prob-tree"><p class="diagram-caption">Without replacement, the second branches use reduced totals</p></div>
<h3>Worked example</h3>
<p>A bag has 4 red and 6 blue. Two taken without replacement: P(both red) = 4/10 × 3/9 = 12/90 = <strong>2/15</strong>.</p>
<h3>From a table</h3>
<p>Of 30 people, 12 own a dog and 5 of those a cat: P(cat | dog) = 5 ÷ 12 = <strong>5/12</strong> — only the 12 dog-owners count.</p>`,

  "m11i-13-2": `<h2>Set Notation &amp; Venn Diagrams</h2>
<p>Set notation labels the regions of a Venn diagram: <strong>A ∩ B</strong> (intersection — in both), <strong>A ∪ B</strong> (union — in either), <strong>A′</strong> (complement — not in A). Fill the <strong>intersection first</strong>, then subtract from each set's total.</p>
<div class="lesson-diagram" data-diagram="math-venn-2set"><p class="diagram-caption">Intersection, union and complement regions</p></div>
<h3>Worked example</h3>
<p>30 students: 18 French, 14 German, 7 both. French-only = 11, German-only = 7, both = 7 → 25 do at least one, so <strong>5</strong> do neither.</p>
<h3>Probabilities</h3>
<p>To find a probability, count the elements in the required region and divide by the total — without double-counting the overlap.</p>`
});
