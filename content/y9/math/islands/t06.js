// content/y9/math/islands/t06.js — Year 9 Maths Topic 6: Rounding, Estimation & Bounds
// Islands m9i-06-1 .. m9i-06-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-06-1 — Rounding
  {id:"m9fc-06-1-1", islandId:"m9i-06-1", front:"What is the rule for rounding?",
   back:"Look at the next digit. If it is 5 or more, round up; if it is 4 or less, round down (leave it).\n\nExample: 6.47 to 1 d.p. → look at 7, round up → 6.5.", difficulty:1, category:"definition"},
  {id:"m9fc-06-1-2", islandId:"m9i-06-1", front:"Round 3.768 to 2 decimal places.",
   back:"3.77\n\nThe third decimal is 8 (≥5), so the second decimal rounds up from 6 to 7.", difficulty:1, category:"calculation"},
  {id:"m9fc-06-1-3", islandId:"m9i-06-1", front:"What is a significant figure?",
   back:"Counting from the FIRST non-zero digit.\n\nIn 0.00482 the first significant figure is 4. In 6 130 it is 6.", difficulty:2, category:"definition"},
  {id:"m9fc-06-1-4", islandId:"m9i-06-1", front:"Round 0.04617 to 2 significant figures.",
   back:"0.046\n\nThe first two significant figures are 4 and 6; the next digit is 1 (<5), so leave the 6.", difficulty:2, category:"calculation"},
  {id:"m9fc-06-1-5", islandId:"m9i-06-1", front:"Round 2 970 to 2 significant figures.",
   back:"3 000\n\nThe first two s.f. are 2 and 9; the next digit is 7, so round up. The 9 becomes 10, carrying: 29 → 30, giving 3 000.", difficulty:3, category:"application"},
  {id:"m9fc-06-1-6", islandId:"m9i-06-1", front:"Round 19.96 to 1 decimal place.",
   back:"20.0\n\nThe second decimal is 6, so round up: 9 → 10, which carries all the way: 19.96 → 20.0. Keep the trailing zero to show 1 d.p.", difficulty:3, category:"application"},

  // m9i-06-2 — Estimation
  {id:"m9fc-06-2-1", islandId:"m9i-06-2", front:"How do you estimate a calculation?",
   back:"Round each number to 1 significant figure, then work it out.\n\nIt gives a quick check that an answer is sensible.", difficulty:1, category:"definition"},
  {id:"m9fc-06-2-2", islandId:"m9i-06-2", front:"Estimate 312 × 48.",
   back:"≈ 15 000\n\nRound to 1 s.f.: 300 × 50 = 15 000. The exact answer (14 976) is close, so this checks out.", difficulty:2, category:"calculation"},
  {id:"m9fc-06-2-3", islandId:"m9i-06-2", front:"Estimate 6.1 × 19.8 ÷ 4.2.",
   back:"≈ 30\n\nRound to 1 s.f.: 6 × 20 ÷ 4 = 120 ÷ 4 = 30.", difficulty:2, category:"calculation"},
  {id:"m9fc-06-2-4", islandId:"m9i-06-2", front:"Why is estimation useful?",
   back:"It checks whether an answer is the right size.\n\nIf your calculator gives 1 497.6 for 312 × 48 but you estimate 15 000, you know you slipped a decimal point.", difficulty:2, category:"concept"},
  {id:"m9fc-06-2-5", islandId:"m9i-06-2", front:"Estimate √37.",
   back:"≈ 6\n\n37 is between 36 (=6²) and 49 (=7²), and is much closer to 36, so √37 ≈ 6.", difficulty:2, category:"application"},
  {id:"m9fc-06-2-6", islandId:"m9i-06-2", front:"Estimate 408 ÷ 19.",
   back:"≈ 20\n\nRound to 1 s.f.: 400 ÷ 20 = 20. The exact value (21.5) is close.", difficulty:1, category:"calculation"},

  // m9i-06-3 — Error Intervals & Bounds
  {id:"m9fc-06-3-1", islandId:"m9i-06-3", front:"What are the upper and lower bounds of a rounded number?",
   back:"The largest and smallest values that would round to it.\n\nThey are half a rounding unit either side of the rounded value.", difficulty:2, category:"definition"},
  {id:"m9fc-06-3-2", islandId:"m9i-06-3", front:"A length is 8 cm to the nearest cm. Give the bounds.",
   back:"Lower bound 7.5 cm, upper bound 8.5 cm.\n\nThe rounding unit is 1 cm, so go half a unit (0.5) each way.", difficulty:2, category:"calculation"},
  {id:"m9fc-06-3-3", islandId:"m9i-06-3", front:"Write the error interval for 8 cm (nearest cm).",
   back:"7.5 ≤ x < 8.5\n\nThe lower bound is included (≤) but the upper bound is not (<), because 8.5 would round up to 9.", difficulty:3, category:"concept"},
  {id:"m9fc-06-3-4", islandId:"m9i-06-3", front:"x = 6.4 to 1 d.p. Find the bounds.",
   back:"6.35 ≤ x < 6.45\n\nThe rounding unit is 0.1, so half a unit is 0.05 either side.", difficulty:2, category:"calculation"},
  {id:"m9fc-06-3-5", islandId:"m9i-06-3", front:"Why does the error interval use < at the top, not ≤?",
   back:"Because the upper bound itself rounds UP.\n\nFor 8 cm, exactly 8.5 would round to 9, so x must be strictly less than 8.5.", difficulty:3, category:"concept"},
  {id:"m9fc-06-3-6", islandId:"m9i-06-3", front:"A mass is 250 g to the nearest 10 g. Find the bounds.",
   back:"245 g ≤ m < 255 g\n\nThe rounding unit is 10 g, so go half of that (5 g) each side.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m9i-06-1": [
    {q:"Round 7.382 to 2 decimal places.", opts:["7.38","7.39","7.40","7.4"], c:0,
     e:"The third decimal is 2 (<5), so the second decimal stays 8, giving 7.38."},
    {q:"Round 45 600 to 2 significant figures.", opts:["46 000","45 000","45 600","50 000"], c:0,
     e:"The first two s.f. are 4 and 5; the next digit is 6, so round up to 46 000."},
    {q:"Round 0.003571 to 2 significant figures.", opts:["0.0036","0.0035","0.004","0.00357"], c:0,
     e:"The first two s.f. are 3 and 5; the next digit is 7, so round up to 0.0036."},
    {q:"Round 8.96 to 1 decimal place.", opts:["9.0","8.9","9","9.1"], c:0,
     e:"The second decimal is 6, so round up: 8.9 → 9.0. Keep the .0 to show 1 d.p."},
    {q:"How many significant figures does 0.0420 have?", opts:["3","2","4","1"], c:0,
     e:"Count from the first non-zero digit: 4, 2, 0 — three significant figures (the final 0 counts)."}
  ],
  "m9i-06-2": [
    {q:"Estimate 597 × 4.1.", opts:["2400","240","3000","2000"], c:0,
     e:"Round to 1 s.f.: 600 × 4 = 2 400."},
    {q:"Estimate 8.2 × 49 ÷ 4.8.", opts:["80","100","40","16"], c:0,
     e:"Round to 1 s.f.: 8 × 50 ÷ 5 = 400 ÷ 5 = 80."},
    {q:"Estimate √63.", opts:["8","7","9","6"], c:0,
     e:"63 is between 49 (=7²) and 64 (=8²) and very close to 64, so √63 ≈ 8."},
    {q:"Estimate 0.51 × 396.", opts:["200","2000","20","150"], c:0,
     e:"Round to 1 s.f.: 0.5 × 400 = 200."},
    {q:"A calculator shows 19.2 for 38.6 ÷ 2.01. Is that sensible?", opts:["Yes, ≈ 20","No, too big","No, too small","Cannot tell"], c:0,
     e:"Estimate 40 ÷ 2 = 20, so 19.2 is the right size — the answer is sensible."}
  ],
  "m9i-06-3": [
    {q:"A length is 12 cm to the nearest cm. What is the lower bound?", opts:["11.5 cm","12.5 cm","11 cm","11.9 cm"], c:0,
     e:"Half a cm below 12 is 11.5 cm, the smallest length that rounds to 12."},
    {q:"Write the error interval for x = 5.0 (to 1 d.p.).", opts:["4.95 ≤ x < 5.05","4.5 ≤ x < 5.5","4.99 ≤ x < 5.01","5.0 ≤ x < 5.1"], c:0,
     e:"The unit is 0.1, so half a unit (0.05) each side: 4.95 ≤ x < 5.05."},
    {q:"A crowd is 4 000 to the nearest 100. What is the upper bound?", opts:["4 050","4 500","4 100","3 950"], c:0,
     e:"Half of 100 is 50, so the upper bound is 4 050 (and it uses <)."},
    {q:"Which symbol belongs at the upper end of an error interval?", opts:["<","≤","=",">"], c:0,
     e:"The upper bound itself rounds up, so x must be strictly less than it: use <."},
    {q:"m = 70 kg to the nearest 10 kg. Give the error interval.", opts:["65 ≤ m < 75","69 ≤ m < 71","60 ≤ m < 80","65 ≤ m ≤ 75"], c:0,
     e:"Half of 10 is 5, so 65 ≤ m < 75."}
  ]
});

Object.assign(LESSONS, {
  "m9i-06-1": `<h2>Rounding: Decimal Places &amp; Significant Figures</h2>
<p>To round, look at the digit <em>after</em> the place you are keeping. If it is 5 or more, round up; otherwise leave the digit as it is. <strong>Significant figures</strong> are counted from the first non-zero digit.</p>
<h3>Worked example</h3>
<p>Round 2 970 to 2 significant figures.</p>
<ul>
<li>The first two significant figures are 2 and 9.</li>
<li>The next digit is 7, so round up: 29 → 30, giving <strong>3 000</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Watch for rounding that carries. 19.96 to 1 d.p. is 20.0, not 19.10 — the 9 rounds up and carries into the units. Keep the trailing zero so the accuracy is clear.</p>`,

  "m9i-06-2": `<h2>Estimation</h2>
<p>To estimate a calculation, round every number to <strong>1 significant figure</strong>, then work it out. It is a fast way to check that a calculator answer is the right size.</p>
<h3>Worked example</h3>
<p>Estimate 312 × 48.</p>
<ul>
<li>Round to 1 s.f.: 300 × 50.</li>
<li>300 × 50 = <strong>15 000</strong> (the exact answer 14 976 is close).</li>
</ul>
<h3>Common mistake</h3>
<p>Estimating is for checking, not for the final exact answer. Use the symbol ≈ ('approximately equal to'), and don't round so harshly that the estimate becomes useless.</p>`,

  "m9i-06-3": `<h2>Error Intervals &amp; Bounds</h2>
<p>A rounded measurement could have come from a range of true values. The <strong>lower bound</strong> and <strong>upper bound</strong> are half a rounding unit either side of the rounded value. Together they give the <strong>error interval</strong>.</p>
<div class="lesson-diagram" data-diagram="math-bounds-line"><p class="diagram-caption">Any value from 6.35 up to (not including) 6.45 rounds to 6.4</p></div>
<h3>Worked example</h3>
<p>x = 6.4 to 1 decimal place. Find the error interval.</p>
<ul>
<li>The rounding unit is 0.1, so half a unit is 0.05.</li>
<li>Lower bound 6.35, upper bound 6.45: <strong>6.35 ≤ x &lt; 6.45</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>The top uses &lt;, not ≤, because the upper bound itself would round up. Exactly 6.45 rounds to 6.5, so x must be strictly less than 6.45.</p>`
});
