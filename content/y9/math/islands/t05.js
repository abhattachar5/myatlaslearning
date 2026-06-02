// content/y9/math/islands/t05.js — Year 9 Maths Topic 5: Fractions, Decimals & Percentages
// Islands m9i-05-1 .. m9i-05-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-05-1 — Converting FDP
  {id:"m9fc-05-1-1", islandId:"m9i-05-1", front:"How do you turn a fraction into a decimal?",
   back:"Divide the top by the bottom.\n\n3/8 = 3 ÷ 8 = 0.375. Some give recurring decimals, e.g. 1/3 = 0.333…", difficulty:1, category:"definition"},
  {id:"m9fc-05-1-2", islandId:"m9i-05-1", front:"How do you turn a decimal into a percentage?",
   back:"Multiply by 100.\n\n0.45 × 100 = 45%. To go back, divide by 100: 45% = 0.45.", difficulty:1, category:"definition"},
  {id:"m9fc-05-1-3", islandId:"m9i-05-1", front:"Write 35% as a fraction in simplest form.",
   back:"7/20\n\n35% = 35/100. Divide top and bottom by 5: 35/100 = 7/20.", difficulty:2, category:"calculation"},
  {id:"m9fc-05-1-4", islandId:"m9i-05-1", front:"What are the decimal and percentage for ¼, ½ and ¾?",
   back:"¼ = 0.25 = 25%\n½ = 0.5 = 50%\n¾ = 0.75 = 75%\n\nThese are worth memorising — they come up constantly.", difficulty:1, category:"concept"},
  {id:"m9fc-05-1-5", islandId:"m9i-05-1", front:"Which is larger, 0.6 or 5/8?",
   back:"5/8.\n\nConvert to the same form: 5/8 = 0.625, which is bigger than 0.6. Always compare in one common form.", difficulty:2, category:"application"},
  {id:"m9fc-05-1-6", islandId:"m9i-05-1", front:"Write 0.08 as a percentage.",
   back:"8%\n\n0.08 × 100 = 8%. Be careful: 0.08 is 8%, not 80%.", difficulty:2, category:"application"},

  // m9i-05-2 — Calculating with Fractions
  {id:"m9fc-05-2-1", islandId:"m9i-05-2", front:"How do you add fractions with different denominators?",
   back:"Find a common denominator first, then add the numerators.\n\n1/4 + 1/6 = 3/12 + 2/12 = 5/12.", difficulty:2, category:"definition"},
  {id:"m9fc-05-2-2", islandId:"m9i-05-2", front:"How do you multiply two fractions?",
   back:"Multiply the tops and multiply the bottoms, then simplify.\n\n2/3 × 4/5 = 8/15.", difficulty:1, category:"definition"},
  {id:"m9fc-05-2-3", islandId:"m9i-05-2", front:"How do you divide by a fraction?",
   back:"Keep, flip, multiply: keep the first, flip the second, multiply.\n\n3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8.", difficulty:2, category:"concept"},
  {id:"m9fc-05-2-4", islandId:"m9i-05-2", front:"Work out 2/3 + 1/6.",
   back:"5/6\n\nCommon denominator 6: 2/3 = 4/6, so 4/6 + 1/6 = 5/6.", difficulty:2, category:"calculation"},
  {id:"m9fc-05-2-5", islandId:"m9i-05-2", front:"Work out 1¾ + 1½ (mixed numbers).",
   back:"3¼\n\nAdd whole parts: 1 + 1 = 2. Add fractions: ¾ + ½ = ¾ + 2/4… = 5/4 = 1¼. Total 2 + 1¼ = 3¼.", difficulty:3, category:"application"},
  {id:"m9fc-05-2-6", islandId:"m9i-05-2", front:"Work out 5/6 − 1/4.",
   back:"7/12\n\nCommon denominator 12: 5/6 = 10/12 and 1/4 = 3/12, so 10/12 − 3/12 = 7/12.", difficulty:2, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m9i-05-1": [
    {q:"Write 3/8 as a decimal.", opts:["0.375","0.38","0.83","0.625"], c:0,
     e:"3 ÷ 8 = 0.375."},
    {q:"Write 0.65 as a fraction in its simplest form.", opts:["13/20","65/100","6.5/10","13/25"], c:0,
     e:"0.65 = 65/100. Divide top and bottom by 5: 13/20."},
    {q:"Which list is in order from smallest to largest?", opts:["0.4, 45%, ½","½, 0.4, 45%","45%, 0.4, ½","0.4, ½, 45%"], c:0,
     e:"In decimals: 0.4, 0.45, 0.5. So 0.4, 45%, ½ is the correct order."},
    {q:"Write 7/10 as a percentage.", opts:["70%","7%","0.7%","17%"], c:0,
     e:"7/10 = 0.7 = 70%."},
    {q:"Which of these is equal to 0.04?", opts:["4%","40%","¼","0.4%"], c:0,
     e:"0.04 × 100 = 4%. A common slip is reading 0.04 as 40%."}
  ],
  "m9i-05-2": [
    {q:"Work out 1/3 + 1/4.", opts:["7/12","2/7","1/12","2/12"], c:0,
     e:"Common denominator 12: 4/12 + 3/12 = 7/12. You never add the denominators."},
    {q:"Work out 3/5 × 2/9.", opts:["2/15","6/45","5/14","6/14"], c:0,
     e:"Multiply tops 3 × 2 = 6 and bottoms 5 × 9 = 45, giving 6/45 = 2/15."},
    {q:"Work out 4/5 ÷ 2/3.", opts:["6/5","8/15","2/15","12/10"], c:0,
     e:"Keep-flip-multiply: 4/5 × 3/2 = 12/10 = 6/5."},
    {q:"Work out 7/8 − 1/2.", opts:["3/8","6/6","7/16","1/4"], c:0,
     e:"Common denominator 8: 1/2 = 4/8, so 7/8 − 4/8 = 3/8."},
    {q:"Work out 2/3 of 18.", opts:["12","9","6","36"], c:0,
     e:"Divide by the bottom then times the top: 18 ÷ 3 = 6, 6 × 2 = 12."}
  ]
});

Object.assign(LESSONS, {
  "m9i-05-1": `<h2>Converting Fractions, Decimals &amp; Percentages</h2>
<p>The same value can be written three ways. To convert: a <strong>fraction to a decimal</strong>, divide top by bottom; a <strong>decimal to a percentage</strong>, multiply by 100; a <strong>percentage to a fraction</strong>, write it over 100 and simplify.</p>
<div class="lesson-diagram" data-diagram="math-fdp-equivalence"><p class="diagram-caption">¾, 0.75 and 75% are the same amount shown three ways</p></div>
<h3>Worked example</h3>
<p>Write 35% as a fraction in its simplest form.</p>
<ul>
<li>35% = 35/100.</li>
<li>Divide top and bottom by 5: <strong>7/20</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>To compare a mixed list, put everything in one form first. 5/8 = 0.625, which is bigger than 0.6 — guessing without converting often goes wrong.</p>`,

  "m9i-05-2": `<h2>Calculating with Fractions</h2>
<p>The method depends on the operation:</p>
<ul>
<li><strong>Add / subtract:</strong> find a common denominator, then add or subtract the numerators.</li>
<li><strong>Multiply:</strong> multiply the tops and the bottoms, then simplify.</li>
<li><strong>Divide:</strong> keep the first, flip the second, multiply (keep–flip–multiply).</li>
</ul>
<h3>Worked example</h3>
<p>Work out 2/3 + 1/6.</p>
<ul>
<li>Common denominator 6: 2/3 = 4/6.</li>
<li>4/6 + 1/6 = <strong>5/6</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Never add the denominators: 1/3 + 1/4 is not 2/7. You must rewrite over a common denominator first (here 12), giving 7/12.</p>`
});
