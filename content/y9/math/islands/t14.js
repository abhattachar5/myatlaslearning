// content/y9/math/islands/t14.js — Year 9 Maths Topic 14: Probability
// Islands m9i-14-1 .. m9i-14-3. Flashcards, static question banks, lessons.
// Uses math-prob-scale, math-sample-space, math-prob-tree diagrams.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-14-1 — Probability Basics & the Scale
  {id:"m9fc-14-1-1", islandId:"m9i-14-1", front:"What range can a probability take?",
   back:"From 0 to 1 (inclusive).\n\n0 means impossible, 1 means certain, ½ means an even chance. It can be a fraction, decimal or percentage.", difficulty:1, category:"definition"},
  {id:"m9fc-14-1-2", islandId:"m9i-14-1", front:"How do you find the probability of a single equally-likely event?",
   back:"P(event) = number of favourable outcomes ÷ total number of outcomes.\n\nP(rolling a 3 on a dice) = 1/6.", difficulty:1, category:"definition"},
  {id:"m9fc-14-1-3", islandId:"m9i-14-1", front:"A bag has 3 red and 5 blue counters. Find P(red).",
   back:"3/8\n\nThere are 3 red out of 8 counters in total, so P(red) = 3/8.", difficulty:2, category:"calculation"},
  {id:"m9fc-14-1-4", islandId:"m9i-14-1", front:"What is the rule for P(not A)?",
   back:"P(not A) = 1 − P(A).\n\nAll the probabilities add to 1, so 'not happening' is whatever is left.", difficulty:2, category:"concept"},
  {id:"m9fc-14-1-5", islandId:"m9i-14-1", front:"P(rain) = 0.3. Find P(no rain).",
   back:"0.7\n\nP(no rain) = 1 − 0.3 = 0.7.", difficulty:2, category:"calculation"},
  {id:"m9fc-14-1-6", islandId:"m9i-14-1", front:"The probabilities of a biased spinner landing on A, B, C are 0.2, 0.5 and x. Find x.",
   back:"0.3\n\nProbabilities must total 1: x = 1 − 0.2 − 0.5 = 0.3.", difficulty:3, category:"application"},

  // m9i-14-2 — Sample Space & Combined Events
  {id:"m9fc-14-2-1", islandId:"m9i-14-2", front:"What is a sample space?",
   back:"A list (or table) of all the possible outcomes of an experiment.\n\nFor two coins: HH, HT, TH, TT — four equally likely outcomes.", difficulty:1, category:"definition"},
  {id:"m9fc-14-2-2", islandId:"m9i-14-2", front:"Two coins are flipped. Find P(two heads).",
   back:"1/4\n\nThe sample space is HH, HT, TH, TT. Only HH gives two heads, so P = 1/4.", difficulty:2, category:"calculation"},
  {id:"m9fc-14-2-3", islandId:"m9i-14-2", front:"Two dice are rolled. How many outcomes are in the sample space?",
   back:"36\n\nEach die has 6 outcomes, and 6 × 6 = 36 equally likely combinations.", difficulty:2, category:"concept"},
  {id:"m9fc-14-2-4", islandId:"m9i-14-2", front:"Two dice are rolled. Find P(total = 7).",
   back:"6/36 = 1/6\n\nThe totalling-7 pairs are (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) — 6 of the 36 outcomes.", difficulty:3, category:"calculation"},
  {id:"m9fc-14-2-5", islandId:"m9i-14-2", front:"What does a two-way table show?",
   back:"How outcomes split across two categories at once (e.g. gender vs choice).\n\nYou read probabilities straight from the totals in the table.", difficulty:2, category:"concept"},
  {id:"m9fc-14-2-6", islandId:"m9i-14-2", front:"For independent events, how do you find P(A and B)?",
   back:"Multiply: P(A and B) = P(A) × P(B).\n\nFor 'or' with mutually exclusive events you add: P(A or B) = P(A) + P(B).", difficulty:3, category:"application"},

  // m9i-14-3 — Tree Diagrams & Relative Frequency
  {id:"m9fc-14-3-1", islandId:"m9i-14-3", front:"What does a probability tree diagram show?",
   back:"Each stage of an experiment as branches, with the probability written on every branch.\n\nThe branches from each point add up to 1.", difficulty:2, category:"definition"},
  {id:"m9fc-14-3-2", islandId:"m9i-14-3", front:"How do you find the probability of a particular path on a tree?",
   back:"Multiply the probabilities ALONG the branches.\n\nP(win then win) = 0.7 × 0.7 = 0.49.", difficulty:2, category:"concept"},
  {id:"m9fc-14-3-3", islandId:"m9i-14-3", front:"On a tree, how do you combine two different paths that both succeed?",
   back:"Multiply along each path, then ADD the paths.\n\nP(exactly one head) = P(H,T) + P(T,H).", difficulty:3, category:"application"},
  {id:"m9fc-14-3-4", islandId:"m9i-14-3", front:"What is relative frequency?",
   back:"An estimate of probability from experiment: number of successes ÷ total trials.\n\nIf a drawing pin lands 'up' 37 times in 50, the relative frequency is 37/50 = 0.74.", difficulty:2, category:"definition"},
  {id:"m9fc-14-3-5", islandId:"m9i-14-3", front:"Why is relative frequency more reliable with more trials?",
   back:"More trials smooth out random variation, so the estimate settles closer to the true probability (the law of large numbers).", difficulty:2, category:"concept"},
  {id:"m9fc-14-3-6", islandId:"m9i-14-3", front:"Relative frequency of a faulty bulb is 0.04. How many faulty in 600?",
   back:"24\n\nExpected number = relative frequency × trials = 0.04 × 600 = 24.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m9i-14-1": [
    {q:"A fair dice is rolled. Find P(an even number).", opts:["1/2","1/6","1/3","2/3"], c:0,
     e:"Even numbers are 2, 4, 6 — three of six outcomes, so 3/6 = 1/2."},
    {q:"P(a team wins) = 0.45. Find P(it does not win).", opts:["0.55","0.45","0.65","1.45"], c:0,
     e:"P(not win) = 1 − 0.45 = 0.55."},
    {q:"A bag has 4 green, 1 yellow and 5 red sweets. Find P(yellow).", opts:["1/10","1/4","1/5","4/10"], c:0,
     e:"1 yellow out of 10 sweets, so P(yellow) = 1/10."},
    {q:"Which probability describes an event that is unlikely but possible?", opts:["0.15","0","1","1.5"], c:0,
     e:"0.15 is small but greater than 0, so the event is unlikely but possible. A probability can never exceed 1."},
    {q:"A spinner lands on red, blue, green with P 0.4, 0.25 and x. Find x.", opts:["0.35","0.65","0.15","0.25"], c:0,
     e:"Probabilities total 1: x = 1 − 0.4 − 0.25 = 0.35."}
  ],
  "m9i-14-2": [
    {q:"Two coins are flipped. Find P(exactly one head).", opts:["1/2","1/4","3/4","1/3"], c:0,
     e:"Outcomes HT and TH give exactly one head: 2 of 4 = 1/2."},
    {q:"Two fair dice are rolled. How many equally likely outcomes are there?", opts:["36","12","6","11"], c:0,
     e:"6 × 6 = 36 outcomes."},
    {q:"Two dice are rolled. Find P(total = 4).", opts:["3/36","1/36","4/36","6/36"], c:0,
     e:"Totalling 4: (1,3)(2,2)(3,1) — 3 of 36 outcomes, so 3/36 = 1/12."},
    {q:"P(A) = 0.5 and P(B) = 0.2 for independent events. Find P(A and B).", opts:["0.1","0.7","0.25","0.3"], c:0,
     e:"For independent events multiply: 0.5 × 0.2 = 0.1."},
    {q:"A two-way table shows 12 of 30 students walk to school. Find P(walks).", opts:["2/5","1/2","12/18","3/5"], c:0,
     e:"12 out of 30 = 12/30 = 2/5."}
  ],
  "m9i-14-3": [
    {q:"On a tree, P(win) = 0.6 each game. Find P(win then win).", opts:["0.36","1.2","0.6","0.12"], c:0,
     e:"Multiply along the branches: 0.6 × 0.6 = 0.36."},
    {q:"P(red) = 0.3 on each of two spins. Find P(exactly one red).", opts:["0.42","0.09","0.6","0.21"], c:0,
     e:"P(R,not R) + P(not R,R) = 0.3×0.7 + 0.7×0.3 = 0.21 + 0.21 = 0.42."},
    {q:"A coin lands heads 27 times in 60 flips. What is the relative frequency of heads?", opts:["0.45","0.27","0.6","0.5"], c:0,
     e:"Relative frequency = 27 ÷ 60 = 0.45."},
    {q:"A spinner lands on '5' with relative frequency 0.2. In 300 spins, how many fives are expected?", opts:["60","20","30","150"], c:0,
     e:"Expected = 0.2 × 300 = 60."},
    {q:"Why does a larger number of trials give a better probability estimate?", opts:["Random variation evens out","The events change","It uses bigger numbers","It is always exact"], c:0,
     e:"With more trials, random ups and downs average out, so the relative frequency settles near the true probability."}
  ]
});

Object.assign(LESSONS, {
  "m9i-14-1": `<h2>Probability Basics &amp; the Scale</h2>
<p>A <strong>probability</strong> measures how likely an event is, on a scale from <strong>0</strong> (impossible) to <strong>1</strong> (certain). For equally likely outcomes, P(event) = favourable outcomes ÷ total outcomes. Because something either happens or not, P(not A) = 1 − P(A).</p>
<div class="lesson-diagram" data-diagram="math-prob-scale"><p class="diagram-caption">From impossible (0) through even chance (½) to certain (1)</p></div>
<h3>Worked example</h3>
<p>A bag has 3 red and 5 blue counters. P(red) = 3/8, and P(not red) = 1 − 3/8 = <strong>5/8</strong>.</p>
<h3>Common mistake</h3>
<p>A probability can never be more than 1 or less than 0. If an answer comes out as 1.2 or a negative, something has gone wrong — re-check the totals.</p>`,

  "m9i-14-2": `<h2>Sample Space &amp; Combined Events</h2>
<p>A <strong>sample space</strong> lists every possible outcome. A sample-space diagram or two-way table makes counting reliable, especially for two events at once (two dice, two spinners).</p>
<div class="lesson-diagram" data-diagram="math-sample-space"><p class="diagram-caption">A grid lists all outcomes of two 1–3 spinners</p></div>
<h3>Worked example</h3>
<p>Two fair dice are rolled. There are 6 × 6 = 36 outcomes. The total is 7 for (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) — 6 outcomes — so P(total = 7) = 6/36 = <strong>1/6</strong>.</p>
<h3>Combining events</h3>
<p>For independent events, P(A and B) = P(A) × P(B). For mutually exclusive events, P(A or B) = P(A) + P(B). 'And' multiplies; 'or' adds.</p>`,

  "m9i-14-3": `<h2>Tree Diagrams &amp; Relative Frequency</h2>
<p>A <strong>tree diagram</strong> shows each stage as branches with probabilities. Multiply <em>along</em> the branches for a single path, and add the paths that meet the condition. The branches at each point always sum to 1.</p>
<div class="lesson-diagram" data-diagram="math-prob-tree"><p class="diagram-caption">Multiply along branches: P(W,W) = 0.7 × 0.7 = 0.49</p></div>
<h3>Worked example</h3>
<p>P(win) = 0.7 each game. P(exactly one win in two games) = P(W,L) + P(L,W) = 0.7×0.3 + 0.3×0.7 = <strong>0.42</strong>.</p>
<h3>Relative frequency</h3>
<p>When outcomes are not equally likely, estimate probability from experiment: relative frequency = successes ÷ trials. The more trials, the more reliable the estimate, and expected number = relative frequency × trials.</p>`
});
