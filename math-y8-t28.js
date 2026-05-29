// math-y8-t28.js — Year 8 Maths Topic 28: Probability
// Islands: m8i-28-1 .. m8i-28-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-28-1 — Probability of Simple Events
  {id:"m8fc-28-1-1",islandId:"m8i-28-1",front:"What is probability and what values can it take?",
   back:"Probability is a measure of how likely an event is to occur.\n\nIt is always a number between 0 and 1 (inclusive):\n• P = 0 means the event is impossible.\n• P = 1 means the event is certain.\n• Values in between show varying degrees of likelihood.",difficulty:1,category:"definition"},
  {id:"m8fc-28-1-2",islandId:"m8i-28-1",front:"Write the formula for the probability of a simple event.",
   back:"P(event) = number of favourable outcomes ÷ total number of equally likely outcomes\n\nExample: Rolling a 3 on a fair six-sided die.\nFavourable outcomes: 1 (just the 3).\nTotal outcomes: 6.\nP(3) = 1/6.",difficulty:1,category:"definition"},
  {id:"m8fc-28-1-3",islandId:"m8i-28-1",front:"A bag contains 3 red, 5 blue and 2 green counters. What is the probability of picking a blue counter?",
   back:"P(blue) = 5/10 = 1/2\n\nTotal counters: 3 + 5 + 2 = 10.\nFavourable outcomes (blue): 5.\nSimplify: 5/10 = 1/2.",difficulty:1,category:"calculation"},
  {id:"m8fc-28-1-4",islandId:"m8i-28-1",front:"What is a complement event, and how is its probability calculated?",
   back:"The complement of event A is everything that is NOT A.\n\nFormula: P(not A) = 1 − P(A)\n\nExample: If P(rain) = 3/10, then P(no rain) = 1 − 3/10 = 7/10.\nThe event and its complement always add up to 1.",difficulty:2,category:"concept"},
  {id:"m8fc-28-1-5",islandId:"m8i-28-1",front:"What is the difference between mutually exclusive and overlapping events?",
   back:"Mutually exclusive events CANNOT both happen at the same time.\nExample: rolling an odd AND an even number on one die — impossible.\n\nOverlapping (non-mutually exclusive) events CAN both happen.\nExample: drawing a card that is red AND a face card — possible (e.g. the King of Hearts).",difficulty:2,category:"concept"},
  {id:"m8fc-28-1-6",islandId:"m8i-28-1",front:"A spinner has 8 equal sections numbered 1–8. What is the probability of landing on a number greater than 5?",
   back:"P(>5) = 3/8\n\nNumbers greater than 5 from 1–8: 6, 7, 8 — that is 3 favourable outcomes.\nTotal equally likely outcomes: 8.\nP(>5) = 3/8.",difficulty:2,category:"application"},

  // m8i-28-2 — Experimental & Theoretical Probability
  {id:"m8fc-28-2-1",islandId:"m8i-28-2",front:"What is theoretical probability?",
   back:"Theoretical probability is calculated by reasoning about equally likely outcomes — no experiment is needed.\n\nFormula: P(event) = favourable outcomes ÷ total equally likely outcomes.\n\nExample: The theoretical probability of flipping heads on a fair coin is 1/2.",difficulty:1,category:"definition"},
  {id:"m8fc-28-2-2",islandId:"m8i-28-2",front:"What is experimental probability and how is it calculated?",
   back:"Experimental probability (relative frequency) is found by carrying out an experiment.\n\nFormula: P(event) = number of times event occurred ÷ total number of trials.\n\nExample: A coin is tossed 50 times and heads appears 28 times.\nExperimental P(heads) = 28/50 = 14/25.",difficulty:1,category:"definition"},
  {id:"m8fc-28-2-3",islandId:"m8i-28-2",front:"A die is rolled 120 times and a 4 appears 24 times. What is the experimental probability of rolling a 4?",
   back:"Experimental P(4) = 24/120 = 1/5\n\nNumber of times 4 appeared: 24.\nTotal trials: 120.\n24/120 simplifies: divide both by 24 → 1/5.",difficulty:2,category:"calculation"},
  {id:"m8fc-28-2-4",islandId:"m8i-28-2",front:"How do you use theoretical probability to make a prediction?",
   back:"Multiply the theoretical probability by the number of trials.\n\nFormula: Expected frequency = P(event) × number of trials.\n\nExample: A fair die is rolled 300 times. How many 6s are expected?\nP(6) = 1/6. Expected: 1/6 × 300 = 50 sixes.",difficulty:2,category:"application"},
  {id:"m8fc-28-2-5",islandId:"m8i-28-2",front:"How does the number of trials affect experimental probability?",
   back:"As the number of trials increases, the experimental probability gets closer to the theoretical probability.\n\nThis is the Law of Large Numbers.\n\nExample: With only 10 coin flips you might get 7 heads (70%), but with 10 000 flips you would expect close to 50% heads.",difficulty:2,category:"concept"},
  {id:"m8fc-28-2-6",islandId:"m8i-28-2",front:"A bag holds red and white balls. Kira draws a ball 40 times (replacing each time) and gets red 14 times. Estimate the probability of red.",
   back:"Experimental P(red) = 14/40 = 7/20\n\nNumber of red results: 14.\nTotal trials: 40.\n14/40 — divide both by 2 twice: 14/40 = 7/20.\nThis is the best estimate of the probability based on the experiment.",difficulty:2,category:"application"},

  // m8i-28-3 — Compound Events
  {id:"m8fc-28-3-1",islandId:"m8i-28-3",front:"What is a sample space?",
   back:"A sample space is the complete list of all possible outcomes of an experiment.\n\nExample: Flipping a coin and rolling a die.\nSample space: {H1, H2, H3, H4, H5, H6, T1, T2, T3, T4, T5, T6} — 12 outcomes in total.",difficulty:1,category:"definition"},
  {id:"m8fc-28-3-2",islandId:"m8i-28-3",front:"What is a compound event?",
   back:"A compound event involves TWO or more separate events happening together.\n\nExample: flipping a coin AND rolling a die is a compound event.\n\nThe total number of outcomes = (outcomes of event 1) × (outcomes of event 2).\nFor coin + die: 2 × 6 = 12 outcomes.",difficulty:1,category:"definition"},
  {id:"m8fc-28-3-3",islandId:"m8i-28-3",front:"Two fair coins are flipped. List the sample space and find P(two heads).",
   back:"Sample space: {HH, HT, TH, TT} — 4 equally likely outcomes.\n\nP(two heads) = 1/4.\n\nOnly 1 outcome (HH) gives two heads out of 4 possible outcomes.",difficulty:2,category:"calculation"},
  {id:"m8fc-28-3-4",islandId:"m8i-28-3",front:"A spinner has sections 1, 2, 3 and a coin is flipped. How many outcomes are in the sample space?",
   back:"Total outcomes = 3 × 2 = 6.\n\nUsing the counting principle: multiply the number of outcomes for each part.\nSpinner: 3 possible results (1, 2, 3). Coin: 2 possible results (H, T).\nSample space: {1H, 1T, 2H, 2T, 3H, 3T}.",difficulty:2,category:"calculation"},
  {id:"m8fc-28-3-5",islandId:"m8i-28-3",front:"A bag has 2 red and 3 blue balls. A ball is picked, replaced, then picked again. What is P(red then blue)?",
   back:"P(red then blue) = 2/5 × 3/5 = 6/25\n\nBecause the first ball is replaced, the events are independent.\nP(red) = 2/5. P(blue) = 3/5.\nMultiply: 2/5 × 3/5 = 6/25.",difficulty:3,category:"calculation"},
  {id:"m8fc-28-3-6",islandId:"m8i-28-3",front:"How does a tree diagram help find the probability of compound events?",
   back:"A tree diagram shows each stage of an experiment as a branch, listing all possible outcomes.\n\nTo find the probability of a path:\n1. Write probabilities on each branch.\n2. Multiply along the path for the combined probability.\n3. Add probabilities of different paths for 'or' questions.\n\nExample: P(H then T) on two coin flips = 1/2 × 1/2 = 1/4.",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-28-1":[
    {q:"A bag contains 4 yellow, 3 green and 1 white counter. A counter is picked at random. What is P(green)?",opts:["1/8","3/4","3/8","1/3"],c:2,e:"Total counters = 4 + 3 + 1 = 8. Favourable outcomes (green) = 3. P(green) = 3/8."},
    {q:"The probability of winning a prize is 7/20. What is the probability of NOT winning a prize?",opts:["7/20","3/20","13/20","1/20"],c:2,e:"P(not winning) = 1 − 7/20 = 20/20 − 7/20 = 13/20."},
    {q:"Which pair of events is mutually exclusive?",opts:["Rolling an even number and rolling a 2","Drawing a spade and drawing a heart from a standard deck","Drawing a red card and drawing a king","Picking a vowel and picking the letter A"],c:1,e:"A card cannot be both a spade and a heart at the same time, so these events are mutually exclusive. The other pairs can both occur (e.g. the 2 is even, and the King of Hearts is both red and a king)."},
    {q:"A letter is chosen at random from the word PROBABILITY. What is P(choosing B)?",opts:["1/11","2/11","3/11","4/11"],c:1,e:"PROBABILITY has 11 letters: P-R-O-B-A-B-I-L-I-T-Y. The letter B appears 2 times. P(B) = 2/11."},
    {q:"A number from 1 to 20 is chosen at random. What is the probability of choosing a multiple of 5?",opts:["1/5","1/4","4/20","2/10"],c:0,e:"Multiples of 5 from 1 to 20: 5, 10, 15, 20 — that is 4 numbers. P = 4/20 = 1/5. All four options 1/5, 4/20 and 2/10 are equivalent, but 1/5 is the fully simplified answer."}
  ],
  "m8i-28-2":[
    {q:"A drawing pin is dropped 200 times. It lands point up 130 times. What is the experimental probability of landing point up?",opts:["2/3","7/10","13/20","3/4"],c:2,e:"Experimental P(point up) = 130/200. Simplify by dividing both by 10: 13/20."},
    {q:"The theoretical probability of a biased coin landing heads is 3/5. In 300 throws, how many heads would you expect?",opts:["150","180","200","120"],c:1,e:"Expected frequency = P(heads) × total throws = 3/5 × 300 = 180."},
    {q:"Aisha rolls a fair die 60 times. She gets a 5 exactly 8 times. Which statement is correct?",opts:["The theoretical probability of a 5 is 8/60","Her result proves the die is biased","The theoretical probability is 1/6 and she expects 10 fives; 8 is a reasonable variation","Experimental probability is always less than theoretical"],c:2,e:"Theoretical P(5) = 1/6; expected frequency = 1/6 × 60 = 10. Getting 8 is close and simply shows the natural variation in experiments. One trial does not prove bias."},
    {q:"As the number of trials in an experiment increases, what happens to the experimental probability?",opts:["It stays constant","It moves further from the theoretical probability","It gets closer to the theoretical probability","It becomes exactly equal to the theoretical probability after 100 trials"],c:2,e:"The Law of Large Numbers states that experimental probability approaches the theoretical probability as the number of trials increases, but it may never be exactly equal."},
    {q:"In a survey of 50 students, 15 said their favourite subject is Maths. Based on this, how many students would you predict say Maths is their favourite out of 200 students?",opts:["30","50","60","75"],c:2,e:"Experimental P(Maths) = 15/50 = 3/10. Predicted frequency = 3/10 × 200 = 60."}
  ],
  "m8i-28-3":[
    {q:"A coin is flipped and a fair four-sided die (numbered 1–4) is rolled. How many outcomes are in the sample space?",opts:["6","8","10","12"],c:1,e:"Total outcomes = outcomes for coin × outcomes for die = 2 × 4 = 8."},
    {q:"Two fair coins are flipped. What is P(exactly one head)?",opts:["1/4","1/2","3/4","1"],c:1,e:"Sample space: {HH, HT, TH, TT}. Outcomes with exactly one head: HT and TH — that is 2. P = 2/4 = 1/2."},
    {q:"A spinner has 3 equal sections labelled A, B, C. It is spun twice. What is P(A on both spins)?",opts:["1/9","2/9","1/3","2/3"],c:0,e:"P(A) = 1/3. Since the spins are independent: P(A then A) = 1/3 × 1/3 = 1/9."},
    {q:"A bag has 1 red, 1 blue and 1 green ball. A ball is picked at random, replaced, then a second is picked. How many outcomes are in the sample space?",opts:["3","6","9","12"],c:2,e:"Since the ball is replaced, each pick has 3 outcomes. Total = 3 × 3 = 9."},
    {q:"A fair coin is flipped three times. What is P(all three tails)?",opts:["1/2","1/4","1/6","1/8"],c:3,e:"P(tails on one flip) = 1/2. For three independent flips: P(TTT) = 1/2 × 1/2 × 1/2 = 1/8."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-28-1': `
<h2>Probability of Simple Events</h2>
<p>Probability tells us how likely something is to happen. It is always a number between 0 and 1: an impossible event has probability 0, and a certain event has probability 1. Everything else sits somewhere in between.</p>

<h3>The probability formula</h3>
<div class="example-box">
<p><strong>Formula:</strong> P(event) = number of favourable outcomes &divide; total number of equally likely outcomes</p>
<p><strong>Example:</strong> A bag contains 2 red, 3 blue and 5 green counters. Find P(blue).<br>
Total counters: 2 + 3 + 5 = 10.<br>
Favourable outcomes (blue): 3.<br>
P(blue) = 3/10.</p>
</div>

<h3>Complement events: P = 1 &minus; P</h3>
<p>The <strong>complement</strong> of event A is the event that A does NOT happen. Together, an event and its complement cover every possible outcome, so their probabilities always add to 1.</p>
<div class="example-box">
<p><strong>Example:</strong> The probability that it rains tomorrow is 2/5. Find the probability that it does NOT rain.<br>
P(no rain) = 1 &minus; 2/5 = 3/5.</p>
</div>

<h3>Mutually exclusive and overlapping events</h3>
<p><strong>Mutually exclusive events</strong> cannot happen at the same time. Example: a single die roll cannot give both odd and even.</p>
<p><strong>Overlapping events</strong> can both happen together. Example: drawing a card that is both red and a face card is possible (e.g. King of Hearts).</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Probability</dt><dd>A measure of how likely an event is, written as a fraction, decimal or percentage between 0 and 1.</dd>
<dt>Outcome</dt><dd>One possible result of an experiment.</dd>
<dt>Favourable outcome</dt><dd>An outcome that satisfies the event we are interested in.</dd>
<dt>Complement</dt><dd>All outcomes that are NOT the event; P(complement) = 1 &minus; P(event).</dd>
<dt>Mutually exclusive</dt><dd>Events that cannot both occur at the same time.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing P &gt; 1 — ✅ probability is always between 0 and 1.</li>
<li>❌ Forgetting to simplify fractions — ✅ always give probabilities in lowest terms.</li>
<li>❌ Thinking the complement means "the opposite number" — ✅ P(not A) = 1 &minus; P(A), not the numerator swapped.</li>
<li>❌ Assuming two events with no overlap are always mutually exclusive — ✅ check whether they can occur on the same trial.</li>
</ul>`,

'm8i-28-2': `
<h2>Experimental &amp; Theoretical Probability</h2>
<p>There are two ways to find probability: by reasoning about equally likely outcomes (<strong>theoretical</strong>) or by actually carrying out an experiment and recording results (<strong>experimental</strong>).</p>

<h3>Theoretical probability</h3>
<p>Used when all outcomes are equally likely. No experiment is needed — just count the outcomes.</p>
<div class="example-box">
<p><strong>Example:</strong> Find the theoretical probability of rolling a number less than 3 on a fair die.<br>
Favourable outcomes: 1, 2 &rarr; 2 outcomes.<br>
Total outcomes: 6.<br>
P(&lt;3) = 2/6 = <strong>1/3</strong>.</p>
</div>

<h3>Experimental probability (relative frequency)</h3>
<p>Found by conducting trials and counting how often an event occurs.</p>
<div class="example-box">
<p><strong>Formula:</strong> P(event) = frequency of event &divide; total number of trials</p>
<p><strong>Example:</strong> A drawing pin is dropped 100 times and lands point up 43 times.<br>
Experimental P(point up) = 43/100.</p>
</div>

<h3>Making predictions</h3>
<p>Multiply the probability (theoretical or experimental) by the number of trials to predict how often an event will occur.</p>
<div class="example-box">
<p><strong>Example:</strong> A biased coin has P(heads) = 3/5. In 200 flips, how many heads are expected?<br>
Expected frequency = 3/5 &times; 200 = <strong>120 heads</strong>.</p>
</div>

<h3>Comparing experimental and theoretical probability</h3>
<p>As the number of trials increases, the experimental probability gets closer to the theoretical probability (Law of Large Numbers). Small samples can produce very different results from what theory predicts.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Theoretical probability</dt><dd>Probability calculated from equally likely outcomes without conducting an experiment.</dd>
<dt>Experimental probability</dt><dd>Probability estimated from the results of an actual experiment; also called relative frequency.</dd>
<dt>Trial</dt><dd>One single run of an experiment.</dd>
<dt>Expected frequency</dt><dd>The number of times an event is predicted to occur: P(event) &times; number of trials.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using frequency as the probability — ✅ divide frequency by total trials.</li>
<li>❌ Assuming experimental results should exactly match theory in a small sample — ✅ variation is normal; more trials give closer agreement.</li>
<li>❌ Confusing "expected frequency" with probability — ✅ expected frequency is a count, not a probability.</li>
<li>❌ Rounding a fraction before simplifying — ✅ simplify first, then convert if needed.</li>
</ul>`,

'm8i-28-3': `
<h2>Compound Events</h2>
<p>A <strong>compound event</strong> involves two or more separate experiments happening together — for example, flipping a coin and rolling a die. To work with compound events you need to list or count all possible outcomes (the <strong>sample space</strong>).</p>

<h3>Listing a sample space</h3>
<p>Use a systematic list or a two-way table to make sure you include every outcome.</p>
<div class="example-box">
<p><strong>Example:</strong> A coin is flipped and a four-sided die (1&ndash;4) is rolled. List the sample space.</p>
<p>{H1, H2, H3, H4, T1, T2, T3, T4} &mdash; <strong>8 outcomes</strong>.</p>
</div>

<h3>The counting principle</h3>
<p>If event A has <em>m</em> outcomes and event B has <em>n</em> outcomes, the compound event (A then B) has <em>m &times; n</em> outcomes.</p>

<h3>Probability of compound events</h3>
<p>For <strong>independent</strong> events (outcome of one does not affect the other), multiply the individual probabilities.</p>
<div class="example-box">
<p><strong>Example:</strong> A fair coin is flipped twice. What is P(heads both times)?<br>
P(H) = 1/2. The flips are independent.<br>
P(HH) = 1/2 &times; 1/2 = <strong>1/4</strong>.</p>
</div>

<h3>Tree diagrams</h3>
<p>A tree diagram shows each stage as a branch. Write the probability on each branch, then multiply along a path to find the probability of that outcome.</p>
<div class="example-box">
<p><strong>Example:</strong> Coin flipped twice. P(one head and one tail, in any order)?<br>
Paths: H&rarr;T (1/2 &times; 1/2 = 1/4) and T&rarr;H (1/2 &times; 1/2 = 1/4).<br>
P(one head and one tail) = 1/4 + 1/4 = <strong>1/2</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Sample space</dt><dd>The complete set of all possible outcomes of an experiment.</dd>
<dt>Compound event</dt><dd>An event that involves two or more separate experiments.</dd>
<dt>Counting principle</dt><dd>The total number of outcomes for a compound event is the product of the outcomes of each part.</dd>
<dt>Independent events</dt><dd>Events where the outcome of one does not affect the outcome of the other.</dd>
<dt>Tree diagram</dt><dd>A diagram showing all possible outcomes of a multi-stage experiment, with probabilities written on branches.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding instead of multiplying probabilities for independent events — ✅ multiply P(A) &times; P(B) for "A and B".</li>
<li>❌ Missing outcomes when listing a sample space — ✅ use a systematic list or table.</li>
<li>❌ Forgetting to add the probabilities of separate paths for "or" questions — ✅ add all qualifying path probabilities from the tree diagram.</li>
<li>❌ Assuming replacement doesn't matter — ✅ with replacement events are independent; without replacement they are not.</li>
</ul>`

});
