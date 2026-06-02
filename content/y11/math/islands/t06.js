// content/y11/math/islands/t06.js — Year 11 Maths Topic 6: Sequences: Quadratic nth Term & Geometric
// Islands m11i-06-1 .. m11i-06-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-06-1 — Quadratic nth Term
  {id:"m11fc-06-1-1", islandId:"m11i-06-1", front:"How do you spot a quadratic sequence?",
   back:"The second differences are constant (the first differences keep changing by the same amount).", difficulty:2, category:"definition"},
  {id:"m11fc-06-1-2", islandId:"m11i-06-1", front:"How do the second differences give the an² term?",
   back:"a = second difference ÷ 2.\n\nIf the second difference is 2, the sequence starts with 1n²; if 4, with 2n².", difficulty:3, category:"concept"},
  {id:"m11fc-06-1-3", islandId:"m11i-06-1", front:"Find the second difference of 3, 8, 15, 24.",
   back:"2\n\nFirst differences: 5, 7, 9. Second differences: 2, 2 — constant.", difficulty:2, category:"calculation"},
  {id:"m11fc-06-1-4", islandId:"m11i-06-1", front:"Find the nth term of 3, 8, 15, 24, …",
   back:"n² + 2n\n\nSecond difference 2 → n². Subtract n²: 2, 4, 6, 8 → 2n. So n² + 2n.", difficulty:3, category:"calculation"},
  {id:"m11fc-06-1-5", islandId:"m11i-06-1", front:"After finding the an² part, what next?",
   back:"Subtract an² from each term and find the LINEAR nth term of what's left.\n\nAdd it to an² for the full rule.", difficulty:3, category:"concept"},
  {id:"m11fc-06-1-6", islandId:"m11i-06-1", front:"Find the nth term of 2, 5, 10, 17, …",
   back:"n² + 1\n\nSecond difference 2 → n². Subtract n² (1,4,9,16): leaves 1,1,1,1, so + 1.", difficulty:3, category:"application"},

  // m11i-06-2 — Geometric & Special Sequences
  {id:"m11fc-06-2-1", islandId:"m11i-06-2", front:"What is the common ratio of a geometric sequence?",
   back:"The number you MULTIPLY by each time.\n\nFind it by dividing any term by the one before: term ÷ previous term.", difficulty:2, category:"definition"},
  {id:"m11fc-06-2-2", islandId:"m11i-06-2", front:"Find the common ratio of 3, 12, 48, 192.",
   back:"4\n\n12 ÷ 3 = 4 (and 48 ÷ 12 = 4): multiply by 4 each time.", difficulty:2, category:"calculation"},
  {id:"m11fc-06-2-3", islandId:"m11i-06-2", front:"Continue the geometric sequence 5, 10, 20, …",
   back:"40, 80\n\nThe common ratio is 2: 20 × 2 = 40, 40 × 2 = 80.", difficulty:2, category:"calculation"},
  {id:"m11fc-06-2-4", islandId:"m11i-06-2", front:"What is special about a Fibonacci sequence?",
   back:"Each term is the sum of the two before it.\n\n1, 1, 2, 3, 5, 8, 13, …", difficulty:2, category:"definition"},
  {id:"m11fc-06-2-5", islandId:"m11i-06-2", front:"Can a common ratio be a fraction?",
   back:"Yes — then the terms get smaller.\n\nE.g. ratio ½: 16, 8, 4, 2, 1, …", difficulty:2, category:"concept"},
  {id:"m11fc-06-2-6", islandId:"m11i-06-2", front:"Continue the geometric sequence 81, 27, 9, …",
   back:"3, 1\n\nThe common ratio is 1/3: 9 ÷ 3 = 3, 3 ÷ 3 = 1.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-06-1": [
    {q:"The second difference of 4, 7, 12, 19 is:", opts:["2","3","5","7"], c:0,
     e:"First differences 3, 5, 7; second differences 2, 2."},
    {q:"A second difference of 2 means the nth term starts with:", opts:["n²","2n²","n","2n"], c:0,
     e:"a = second difference ÷ 2 = 1, so the leading term is n²."},
    {q:"Find the nth term of 2, 5, 10, 17, …", opts:["n² + 1","n² + 2","2n² + 1","n² − 1"], c:0,
     e:"Second difference 2 → n²; subtracting 1,4,9,16 leaves 1,1,1,1, so + 1."},
    {q:"Find the nth term of 0, 3, 8, 15, …", opts:["n² − 1","n² + 1","n²","2n − 1"], c:0,
     e:"Second difference 2 → n²; subtracting 1,4,9,16 leaves −1,−1,−1,−1, so − 1."},
    {q:"To find the rest of the rule, after the an² term you:", opts:["Subtract an² and find the linear part","Add the terms","Divide by n","Stop"], c:0,
     e:"Subtract an² from each term, then find the linear nth term of what remains."}
  ],
  "m11i-06-2": [
    {q:"The common ratio of 2, 6, 18, 54 is:", opts:["3","4","2","6"], c:0,
     e:"6 ÷ 2 = 3 (and 18 ÷ 6 = 3)."},
    {q:"Continue 4, 8, 16, …", opts:["32","20","24","12"], c:0,
     e:"Common ratio 2: 16 × 2 = 32."},
    {q:"A common ratio of ½ makes the terms:", opts:["Get smaller","Get larger","Stay the same","Alternate sign"], c:0,
     e:"Multiplying by ½ each time halves the terms."},
    {q:"Continue the Fibonacci sequence 2, 3, 5, 8, 13, …", opts:["21","18","26","20"], c:0,
     e:"Add the two previous terms: 8 + 13 = 21."},
    {q:"Continue 48, 24, 12, …", opts:["6","8","4","3"], c:0,
     e:"Common ratio ½: 12 ÷ 2 = 6."}
  ]
});

Object.assign(LESSONS, {
  "m11i-06-1": `<h2>Quadratic nth Term</h2>
<p>A <strong>quadratic sequence</strong> has constant <strong>second differences</strong>. To find its nth term: the leading coefficient <strong>a = second difference ÷ 2</strong>, so write the an² part, subtract it from each term, then find the linear nth term of what is left.</p>
<div class="lesson-diagram" data-diagram="math-sequence-pattern"><p class="diagram-caption">Constant second differences signal a quadratic (n²) rule</p></div>
<h3>Worked example</h3>
<p>Find the nth term of 3, 8, 15, 24, …</p>
<ul>
<li>First differences 5, 7, 9; second difference 2, so a = 1 → start with n².</li>
<li>Subtract n² (1, 4, 9, 16): leaves 2, 4, 6, 8 = 2n. So the nth term is <strong>n² + 2n</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Halve the second difference for a — a second difference of 4 means 2n², not 4n².</p>`,

  "m11i-06-2": `<h2>Geometric &amp; Special Sequences</h2>
<p>A <strong>geometric sequence</strong> multiplies by a fixed <strong>common ratio</strong> each time; find it by dividing a term by the one before. A ratio greater than 1 grows the terms; a fraction shrinks them.</p>
<h3>Worked example</h3>
<p>For 3, 12, 48, 192: 12 ÷ 3 = 4, so the common ratio is 4 — multiply by 4 to continue.</p>
<h3>Special sequences</h3>
<p>Recognise the <strong>Fibonacci</strong> sequence (each term is the sum of the two before: 1, 1, 2, 3, 5, 8…), as well as square, cube and triangular numbers.</p>`
});
