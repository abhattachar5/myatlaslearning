// content/y9/math/islands/t10.js — Year 9 Maths Topic 10: Sequences & nth Term
// Islands m9i-10-1 .. m9i-10-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-10-1 — Linear Sequences & nth Term
  {id:"m9fc-10-1-1", islandId:"m9i-10-1", front:"What is a linear sequence?",
   back:"One that goes up or down by the same amount each time (the common difference).\n\n3, 7, 11, 15 … goes up by 4 each time.", difficulty:1, category:"definition"},
  {id:"m9fc-10-1-2", islandId:"m9i-10-1", front:"How do you find the nth term of a linear sequence?",
   back:"The common difference goes in front of n; then adjust to match the first term.\n\n3, 7, 11 …: difference 4 → 4n; 4×1 = 4, but first term is 3, so subtract 1: nth term = 4n − 1.", difficulty:2, category:"concept"},
  {id:"m9fc-10-1-3", islandId:"m9i-10-1", front:"Find the nth term of 5, 8, 11, 14 …",
   back:"3n + 2\n\nDifference 3 → 3n; 3×1 = 3, first term is 5, so +2. Check: 3×2 + 2 = 8 ✓.", difficulty:2, category:"calculation"},
  {id:"m9fc-10-1-4", islandId:"m9i-10-1", front:"The nth term is 6n − 4. Find the 10th term.",
   back:"56\n\nSubstitute n = 10: 6×10 − 4 = 60 − 4 = 56.", difficulty:1, category:"calculation"},
  {id:"m9fc-10-1-5", islandId:"m9i-10-1", front:"Is 100 a term of the sequence 4n + 1?",
   back:"No.\n\nSet 4n + 1 = 100 → 4n = 99 → n = 24.75. n must be a whole number, so 100 is not in the sequence.", difficulty:3, category:"application"},
  {id:"m9fc-10-1-6", islandId:"m9i-10-1", front:"Find the nth term of the decreasing sequence 20, 17, 14, 11 …",
   back:"−3n + 23 (or 23 − 3n)\n\nDifference −3 → −3n; −3×1 = −3, first term 20, so +23. Check: −3×2 + 23 = 17 ✓.", difficulty:3, category:"application"},

  // m9i-10-2 — Special & Non-linear Sequences
  {id:"m9fc-10-2-1", islandId:"m9i-10-2", front:"What are the square numbers?",
   back:"1, 4, 9, 16, 25, 36 … — the result of squaring 1, 2, 3, 4 …\n\nThe nth term is n².", difficulty:1, category:"definition"},
  {id:"m9fc-10-2-2", islandId:"m9i-10-2", front:"What are the triangular numbers?",
   back:"1, 3, 6, 10, 15, 21 … — each new term adds one more than the last (+2, +3, +4 …).\n\nThey count dots in a growing triangle.", difficulty:2, category:"definition"},
  {id:"m9fc-10-2-3", islandId:"m9i-10-2", front:"Continue the Fibonacci sequence 1, 1, 2, 3, 5, 8 …",
   back:"13, 21\n\nEach term is the sum of the two before it: 5 + 8 = 13, 8 + 13 = 21.", difficulty:2, category:"calculation"},
  {id:"m9fc-10-2-4", islandId:"m9i-10-2", front:"What makes a sequence geometric?",
   back:"You MULTIPLY by the same number each time (the common ratio).\n\n2, 6, 18, 54 … multiplies by 3 each time.", difficulty:2, category:"concept"},
  {id:"m9fc-10-2-5", islandId:"m9i-10-2", front:"Continue the sequence 3, 6, 12, 24 …",
   back:"48, 96\n\nIt is geometric with common ratio 2: 24 × 2 = 48, 48 × 2 = 96.", difficulty:2, category:"calculation"},
  {id:"m9fc-10-2-6", islandId:"m9i-10-2", front:"Find the next term of the cube-number sequence 1, 8, 27, 64 …",
   back:"125\n\nThese are 1³, 2³, 3³, 4³, so the next is 5³ = 125.", difficulty:2, category:"application"}
);

Object.assign(QUESTIONS, {
  "m9i-10-1": [
    {q:"Find the nth term of 2, 5, 8, 11 …", opts:["3n − 1","3n + 1","2n + 3","3n"], c:0,
     e:"Difference 3 → 3n; 3×1 = 3, first term 2, so −1. nth term = 3n − 1."},
    {q:"The nth term is 5n + 2. Find the 8th term.", opts:["42","40","30","47"], c:0,
     e:"5×8 + 2 = 40 + 2 = 42."},
    {q:"Find the nth term of 7, 12, 17, 22 …", opts:["5n + 2","5n − 2","7n","5n + 7"], c:0,
     e:"Difference 5 → 5n; 5×1 = 5, first term 7, so +2. nth term = 5n + 2."},
    {q:"Is 60 a term of the sequence 4n − 1?", opts:["No","Yes, n = 15","Yes, n = 16","Yes, n = 12"], c:0,
     e:"4n − 1 = 60 → 4n = 61 → n = 15.25, not a whole number, so 60 is not a term."},
    {q:"Find the nth term of the decreasing sequence 30, 27, 24, 21 …", opts:["33 − 3n","3n + 33","30 − 3n","−3n − 33"], c:0,
     e:"Difference −3 → −3n; first term 30 so +33. nth term = 33 − 3n. Check n=1: 33−3 = 30 ✓."}
  ],
  "m9i-10-2": [
    {q:"What type of sequence is 4, 8, 16, 32 …?", opts:["Geometric (×2)","Linear (+4)","Square numbers","Triangular"], c:0,
     e:"Each term is double the last, so it is geometric with common ratio 2."},
    {q:"Continue the triangular numbers 1, 3, 6, 10, …", opts:["15","13","16","20"], c:0,
     e:"The gaps grow +2, +3, +4, +5, so after 10 add 5 to get 15."},
    {q:"What is the next term of the Fibonacci sequence 2, 3, 5, 8, 13, …?", opts:["21","18","26","20"], c:0,
     e:"Add the two previous terms: 8 + 13 = 21."},
    {q:"Which is the nth term of the square numbers 1, 4, 9, 16 …?", opts:["n²","2n","n² + 1","n³"], c:0,
     e:"They are 1², 2², 3², 4², so the nth term is n²."},
    {q:"Continue the sequence 1, 8, 27, 64 …", opts:["125","100","81","128"], c:0,
     e:"These are the cube numbers 1³, 2³, 3³, 4³, so next is 5³ = 125."}
  ]
});

Object.assign(LESSONS, {
  "m9i-10-1": `<h2>Linear Sequences &amp; the nth Term</h2>
<p>A <strong>linear sequence</strong> changes by the same amount each step — the <strong>common difference</strong>. The nth-term rule lets you jump straight to any term. The difference goes in front of n; then add or subtract a number to match the first term.</p>
<div class="lesson-diagram" data-diagram="math-sequence-pattern"><p class="diagram-caption">A common difference of 2 gives the rule 2n + 1</p></div>
<h3>Worked example</h3>
<p>Find the nth term of 5, 8, 11, 14 …</p>
<ul>
<li>Common difference 3, so start with 3n.</li>
<li>3 × 1 = 3, but the first term is 5, so add 2: <strong>3n + 2</strong> (check: 3×2 + 2 = 8 ✓).</li>
</ul>
<h3>Common mistake</h3>
<p>To test if a number is in a sequence, set the rule equal to it and solve. If n is not a whole number, it is not a term — e.g. 4n + 1 = 100 gives n = 24.75, so 100 is not in the sequence.</p>`,

  "m9i-10-2": `<h2>Special &amp; Non-linear Sequences</h2>
<p>Not every sequence has a constant difference. Learn to recognise the common <strong>special sequences</strong>:</p>
<ul>
<li><strong>Square numbers:</strong> 1, 4, 9, 16, 25 … (nth term n²).</li>
<li><strong>Cube numbers:</strong> 1, 8, 27, 64 … (nth term n³).</li>
<li><strong>Triangular numbers:</strong> 1, 3, 6, 10, 15 … (gaps grow by 1 each time).</li>
<li><strong>Fibonacci:</strong> 1, 1, 2, 3, 5, 8 … (add the two previous terms).</li>
<li><strong>Geometric:</strong> multiply by a fixed ratio, e.g. 2, 6, 18, 54 … (× 3).</li>
</ul>
<h3>Worked example</h3>
<p>Continue 3, 6, 12, 24 … This multiplies by 2 each time (geometric), so the next terms are 24 × 2 = <strong>48</strong> and 48 × 2 = <strong>96</strong>.</p>
<h3>Note</h3>
<p>Finding the nth term of a non-linear sequence (such as a quadratic rule) is a Year 10 skill — for now, recognise the pattern and continue it.</p>`
});
