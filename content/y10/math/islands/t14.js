// content/y10/math/islands/t14.js — Year 10 Maths Topic 14: Probability: Trees, Venn & Sets
// Islands m10i-14-1 .. m10i-14-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-14-1 — Tree Diagrams
  {id:"m10fc-14-1-1", islandId:"m10i-14-1", front:"On a tree diagram, how do you find the probability of a path?",
   back:"Multiply the probabilities ALONG the branches.\n\nP(A then B) = P(A) × P(B).", difficulty:2, category:"definition"},
  {id:"m10fc-14-1-2", islandId:"m10i-14-1", front:"How do you combine two different successful paths?",
   back:"Multiply along each path, then ADD the paths.\n\n'Multiply along, add across'.", difficulty:2, category:"concept"},
  {id:"m10fc-14-1-3", islandId:"m10i-14-1", front:"What does 'independent events' mean?",
   back:"The outcome of one does not affect the other.\n\nThe branch probabilities stay the same on the second set of branches.", difficulty:2, category:"definition"},
  {id:"m10fc-14-1-4", islandId:"m10i-14-1", front:"P(rain) = 0.3 on each of two days. Find P(rain on both days).",
   back:"0.09\n\nMultiply along the branches: 0.3 × 0.3 = 0.09.", difficulty:2, category:"calculation"},
  {id:"m10fc-14-1-5", islandId:"m10i-14-1", front:"What changes on a tree for 'without replacement'?",
   back:"The second set of probabilities changes, because one item has been removed.\n\nBoth the favourable count and the total go down by one.", difficulty:3, category:"concept"},
  {id:"m10fc-14-1-6", islandId:"m10i-14-1", front:"A bag has 3 red and 2 blue. Two are taken without replacement. P(both red)?",
   back:"3/10\n\nFirst red 3/5, then red 2/4. Multiply: 3/5 × 2/4 = 6/20 = 3/10.", difficulty:3, category:"application"},

  // m10i-14-2 — Venn Diagrams & Set Notation
  {id:"m10fc-14-2-1", islandId:"m10i-14-2", front:"What does the intersection A ∩ B mean?",
   back:"The elements in BOTH A and B.\n\nIt is the overlapping region of the two circles.", difficulty:2, category:"definition"},
  {id:"m10fc-14-2-2", islandId:"m10i-14-2", front:"What does the union A ∪ B mean?",
   back:"The elements in A OR B (or both).\n\nIt is everything inside either circle.", difficulty:2, category:"definition"},
  {id:"m10fc-14-2-3", islandId:"m10i-14-2", front:"What does A′ (the complement of A) mean?",
   back:"Everything NOT in A.\n\nIt is all of the elements outside circle A.", difficulty:2, category:"definition"},
  {id:"m10fc-14-2-4", islandId:"m10i-14-2", front:"In a class of 30, 18 like maths, 12 like art, 5 like both. How many like neither?",
   back:"5\n\nMaths only 13, art only 7, both 5 → 25 like at least one, so 30 − 25 = 5 like neither.", difficulty:3, category:"application"},
  {id:"m10fc-14-2-5", islandId:"m10i-14-2", front:"How do you find a probability from a Venn diagram?",
   back:"Count the elements in the region you want and divide by the total.\n\nP(A ∩ B) = (number in the overlap) ÷ (total).", difficulty:2, category:"concept"},
  {id:"m10fc-14-2-6", islandId:"m10i-14-2", front:"Why put 'both' in the overlap first when filling a Venn diagram?",
   back:"So you don't double-count.\n\nFill the intersection, then subtract it from each circle's total to get the 'only' regions.", difficulty:3, category:"concept"},

  // m10i-14-3 — Combined & Conditional Probability
  {id:"m10fc-14-3-1", islandId:"m10i-14-3", front:"When do you ADD probabilities and when do you MULTIPLY?",
   back:"Add for OR (mutually exclusive events); multiply for AND (independent events).\n\n'Or' adds, 'and' multiplies.", difficulty:2, category:"definition"},
  {id:"m10fc-14-3-2", islandId:"m10i-14-3", front:"What is conditional probability?",
   back:"The probability of an event GIVEN that another has happened.\n\nThe condition reduces the set of possible outcomes.", difficulty:3, category:"definition"},
  {id:"m10fc-14-3-3", islandId:"m10i-14-3", front:"From a Venn diagram, how do you find P(B given A)?",
   back:"Restrict to A: P(B | A) = (number in A ∩ B) ÷ (number in A).\n\nYou only look inside circle A.", difficulty:3, category:"concept"},
  {id:"m10fc-14-3-4", islandId:"m10i-14-3", front:"P(A) = 0.5, P(B) = 0.4, independent. Find P(A and B).",
   back:"0.2\n\nMultiply: 0.5 × 0.4 = 0.2.", difficulty:2, category:"calculation"},
  {id:"m10fc-14-3-5", islandId:"m10i-14-3", front:"Of 20 students, 8 study French; of those, 3 also study German. Find P(German | French).",
   back:"3/8\n\nGiven French (8 students), 3 study German: 3 ÷ 8 = 3/8.", difficulty:3, category:"application"},
  {id:"m10fc-14-3-6", islandId:"m10i-14-3", front:"For mutually exclusive events, what is P(A and B)?",
   back:"0.\n\nMutually exclusive means they cannot both happen, so the AND probability is zero.", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m10i-14-1": [
    {q:"On a tree, you find the probability of a path by:", opts:["Multiplying along branches","Adding along branches","Subtracting","Dividing"], c:0,
     e:"Multiply the branch probabilities along the path."},
    {q:"P(win) = 0.6 each game. P(win both of two games)?", opts:["0.36","1.2","0.6","0.12"], c:0,
     e:"0.6 × 0.6 = 0.36."},
    {q:"For combined paths you multiply along each path then:", opts:["Add the paths","Multiply the paths","Subtract","Ignore one"], c:0,
     e:"Multiply along, add across the successful paths."},
    {q:"A bag has 4 red, 1 blue. Two taken without replacement. P(both red)?", opts:["3/5","16/25","2/5","1/5"], c:0,
     e:"4/5 then 3/4 = 12/20 = 3/5."},
    {q:"'Without replacement' means the second probability:", opts:["Changes","Stays the same","Is zero","Doubles"], c:0,
     e:"Removing an item changes the totals, so the second branch probabilities change."}
  ],
  "m10i-14-2": [
    {q:"A ∩ B (intersection) means elements in:", opts:["Both A and B","A only","B only","Neither"], c:0,
     e:"The intersection is the overlap — in both sets."},
    {q:"A ∪ B (union) means elements in:", opts:["A or B (or both)","Both only","Neither","Outside A"], c:0,
     e:"The union is everything in either set."},
    {q:"A′ (complement of A) means:", opts:["Everything not in A","Everything in A","The overlap","The union"], c:0,
     e:"A′ is all elements outside A."},
    {q:"30 people: 18 like tea, 12 like coffee, 6 like both. How many like neither?", opts:["6","0","24","12"], c:0,
     e:"Tea only 12, coffee only 6, both 6 → 24 like at least one, so 6 like neither."},
    {q:"To find P(A ∩ B) from a Venn diagram you:", opts:["Count the overlap ÷ total","Add the circles","Subtract the union","Count outside A"], c:0,
     e:"Count the intersection region and divide by the total."}
  ],
  "m10i-14-3": [
    {q:"For independent events, P(A and B) =", opts:["P(A) × P(B)","P(A) + P(B)","P(A) − P(B)","P(A) ÷ P(B)"], c:0,
     e:"'And' with independent events multiplies the probabilities."},
    {q:"P(A) = 0.3, P(B) = 0.5, independent. P(A and B)?", opts:["0.15","0.8","0.2","0.35"], c:0,
     e:"0.3 × 0.5 = 0.15."},
    {q:"Conditional probability P(B | A) is found by:", opts:["Restricting to A, then B within A","Adding A and B","Using all outcomes","Multiplying totals"], c:0,
     e:"Given A, look only inside A: (A ∩ B) ÷ A."},
    {q:"10 students study art; 4 of them also study music. P(music | art)?", opts:["4/10","4/6","10/4","6/10"], c:0,
     e:"Given art (10), 4 study music: 4/10 = 2/5."},
    {q:"For mutually exclusive events, P(A and B) =", opts:["0","1","P(A)+P(B)","0.5"], c:0,
     e:"They cannot both occur, so the AND probability is 0."}
  ]
});

Object.assign(LESSONS, {
  "m10i-14-1": `<h2>Tree Diagrams</h2>
<p>A <strong>tree diagram</strong> shows the stages of an experiment as branches. <strong>Multiply along</strong> the branches for one path, and <strong>add across</strong> the paths that meet the condition. The branches from each point always sum to 1.</p>
<div class="lesson-diagram" data-diagram="math-prob-tree"><p class="diagram-caption">Multiply along branches; add the successful paths</p></div>
<h3>Without replacement</h3>
<p>If an item is not replaced, the second branch probabilities change. A bag of 3 red and 2 blue: P(both red) = 3/5 × 2/4 = <strong>3/10</strong> (both the favourable count and total drop by one).</p>`,

  "m10i-14-2": `<h2>Venn Diagrams &amp; Set Notation</h2>
<p>A <strong>Venn diagram</strong> sorts items into overlapping circles. The key notation: <strong>A ∩ B</strong> (intersection) = in both; <strong>A ∪ B</strong> (union) = in either; <strong>A′</strong> (complement) = not in A.</p>
<div class="lesson-diagram" data-diagram="math-venn-2set"><p class="diagram-caption">Intersection (overlap), union (either) and complement (outside)</p></div>
<h3>Worked example</h3>
<p>30 people: 18 like maths, 12 like art, 5 both. Fill the overlap first (5), so maths-only = 13 and art-only = 7. That's 25 who like at least one, leaving <strong>5</strong> who like neither.</p>`,

  "m10i-14-3": `<h2>Combined &amp; Conditional Probability</h2>
<p>Combine events with two rules: <strong>OR adds</strong> (for mutually exclusive events) and <strong>AND multiplies</strong> (for independent events). <strong>Conditional probability</strong> P(B | A) is the chance of B <em>given</em> A has happened — you restrict attention to the outcomes in A.</p>
<h3>Worked example</h3>
<p>Of 20 students, 8 study French and 3 of those also study German. P(German | French) = 3 ÷ 8 = <strong>3/8</strong> — only the 8 French students count.</p>
<h3>Common mistake</h3>
<p>For mutually exclusive events P(A and B) = 0 — they can't both happen. Don't multiply unless the events can occur together and are independent.</p>`
});
