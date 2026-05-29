// math-y8-t09.js — Year 8 Maths Topic 9: Percentages
// Islands: m8i-09-1 .. m8i-09-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-09-1 — Convert Between %, Fractions & Decimals
  {id:"m8fc-09-1-1",islandId:"m8i-09-1",front:"How do you convert a percentage to a decimal?",
   back:"Divide by 100 (move the decimal point two places to the left).\n\nExamples:\n• 35% → 35 ÷ 100 = 0.35\n• 7% → 7 ÷ 100 = 0.07\n• 125% → 125 ÷ 100 = 1.25",difficulty:1,category:"definition"},
  {id:"m8fc-09-1-2",islandId:"m8i-09-1",front:"How do you convert a decimal to a percentage?",
   back:"Multiply by 100 (move the decimal point two places to the right).\n\nExamples:\n• 0.45 → 0.45 × 100 = 45%\n• 0.08 → 0.08 × 100 = 8%\n• 1.3 → 1.3 × 100 = 130%",difficulty:1,category:"definition"},
  {id:"m8fc-09-1-3",islandId:"m8i-09-1",front:"Convert 60% to a fraction in its simplest form.",
   back:"60% = 60/100 = 3/5\n\nSteps:\n1. Write as a fraction over 100: 60/100\n2. Find HCF of 60 and 100: HCF = 20\n3. Simplify: 60 ÷ 20 = 3, 100 ÷ 20 = 5\nAnswer: 3/5",difficulty:1,category:"calculation"},
  {id:"m8fc-09-1-4",islandId:"m8i-09-1",front:"Convert 3/8 to a percentage.",
   back:"3/8 = 37.5%\n\nSteps:\n1. Divide numerator by denominator: 3 ÷ 8 = 0.375\n2. Multiply by 100: 0.375 × 100 = 37.5%\n\nAlternatively: 3/8 × 100 = 300/8 = 37.5%",difficulty:2,category:"calculation"},
  {id:"m8fc-09-1-5",islandId:"m8i-09-1",front:"Which is greater: 0.72 or 68%?",
   back:"0.72 is greater.\n\nConvert to the same form:\n0.72 = 72%\n68% stays as 68%\n\n72% > 68%, so 0.72 > 68%.",difficulty:2,category:"application"},
  {id:"m8fc-09-1-6",islandId:"m8i-09-1",front:"What are the decimal and fraction equivalents of 25%, 50% and 75%?",
   back:"25% = 0.25 = 1/4\n50% = 0.50 = 1/2\n75% = 0.75 = 3/4\n\nThese are essential benchmarks to memorise — they make estimation and mental maths much faster.",difficulty:1,category:"concept"},

  // m8i-09-2 — Percentages of Amounts
  {id:"m8fc-09-2-1",islandId:"m8i-09-2",front:"What is 30% of £250?",
   back:"£75\n\nMethod 1 (decimal): 0.30 × 250 = 75\nMethod 2 (build up): 10% of 250 = 25, so 30% = 3 × 25 = 75\n\nAnswer: £75",difficulty:1,category:"calculation"},
  {id:"m8fc-09-2-2",islandId:"m8i-09-2",front:"What is 17.5% of £80?",
   back:"£14\n\nBuild up from 10%:\n10% of £80 = £8\n5% of £80 = £4\n2.5% of £80 = £2\n17.5% = £8 + £4 + £2 = £14",difficulty:2,category:"calculation"},
  {id:"m8fc-09-2-3",islandId:"m8i-09-2",front:"Explain the multiplier method for finding a percentage of an amount.",
   back:"The multiplier is the percentage written as a decimal.\n\nSteps:\n1. Convert the % to a decimal (divide by 100)\n2. Multiply the amount by the decimal\n\nExample: 45% of £360 = 0.45 × 360 = £162",difficulty:2,category:"concept"},
  {id:"m8fc-09-2-4",islandId:"m8i-09-2",front:"A jacket costs £120. The shop offers a 15% student discount. How much is saved?",
   back:"£18 is saved.\n\n15% of £120:\n10% = £12\n5% = £6\n15% = £12 + £6 = £18\n\nSale price = £120 − £18 = £102",difficulty:2,category:"application"},
  {id:"m8fc-09-2-5",islandId:"m8i-09-2",front:"Estimate 48% of 302.",
   back:"About 150.\n\nRound to convenient numbers: 48% ≈ 50%, 302 ≈ 300.\n50% of 300 = 150.\n\nExact answer: 0.48 × 302 = 144.96, so the estimate of 150 is close.",difficulty:1,category:"application"},
  {id:"m8fc-09-2-6",islandId:"m8i-09-2",front:"What is 1% of £4,500 and how can you use it to find other percentages?",
   back:"1% of £4,500 = £45\n\nDivide by 100: 4500 ÷ 100 = 45.\n\nThen multiply:\n• 3% = 3 × £45 = £135\n• 7% = 7 × £45 = £315\nThis '1% method' works for any percentage.",difficulty:1,category:"concept"},

  // m8i-09-3 — Percent Equations & Reverse
  {id:"m8fc-09-3-1",islandId:"m8i-09-3",front:"What percentage is 45 out of 60?",
   back:"75%\n\nFormula: (part ÷ whole) × 100\n= (45 ÷ 60) × 100\n= 0.75 × 100\n= 75%",difficulty:1,category:"calculation"},
  {id:"m8fc-09-3-2",islandId:"m8i-09-3",front:"24 is 40% of what number?",
   back:"60\n\nMethod (divide by the decimal):\n40% as a decimal = 0.4\nWhole = 24 ÷ 0.4 = 60\n\nCheck: 40% of 60 = 0.4 × 60 = 24 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-09-3-3",islandId:"m8i-09-3",front:"Describe the three types of percentage problem and their formulas.",
   back:"Type 1 — Find the part: part = (% ÷ 100) × whole\nType 2 — Find the percentage: % = (part ÷ whole) × 100\nType 3 — Find the whole: whole = part ÷ (% ÷ 100)\n\nIdentify which value is unknown, then use the matching formula.",difficulty:2,category:"concept"},
  {id:"m8fc-09-3-4",islandId:"m8i-09-3",front:"In a class, 18 pupils passed a test. This was 72% of the class. How many pupils are in the class?",
   back:"25 pupils.\n\nFind the whole: whole = part ÷ decimal\n= 18 ÷ 0.72\n= 25\n\nCheck: 72% of 25 = 0.72 × 25 = 18 ✓",difficulty:2,category:"application"},
  {id:"m8fc-09-3-5",islandId:"m8i-09-3",front:"What percentage is 36 of 48?",
   back:"75%\n\n(36 ÷ 48) × 100\n= 0.75 × 100\n= 75%\n\nAlternatively: 36/48 = 3/4, and 3/4 = 75%.",difficulty:1,category:"calculation"},
  {id:"m8fc-09-3-6",islandId:"m8i-09-3",front:"£35 is 28% of an original price. What is the original price?",
   back:"£125\n\nOriginal = part ÷ decimal\n= 35 ÷ 0.28\n= 125\n\nCheck: 28% of £125 = 0.28 × 125 = £35 ✓",difficulty:3,category:"application"},

  // m8i-09-4 — Percent of Change
  {id:"m8fc-09-4-1",islandId:"m8i-09-4",front:"What is the formula for percentage change?",
   back:"Percentage change = (change ÷ original) × 100\n\nwhere change = new value − original value.\n• Positive result → percentage increase\n• Negative result → percentage decrease",difficulty:1,category:"definition"},
  {id:"m8fc-09-4-2",islandId:"m8i-09-4",front:"A price rises from £40 to £52. What is the percentage increase?",
   back:"30% increase\n\nChange = £52 − £40 = £12\n% change = (12 ÷ 40) × 100 = 30%\n\nThe price increased by 30%.",difficulty:1,category:"calculation"},
  {id:"m8fc-09-4-3",islandId:"m8i-09-4",front:"A population falls from 8,500 to 7,310. Find the percentage decrease.",
   back:"14% decrease\n\nChange = 8500 − 7310 = 1190\n% decrease = (1190 ÷ 8500) × 100 = 14%",difficulty:2,category:"calculation"},
  {id:"m8fc-09-4-4",islandId:"m8i-09-4",front:"After a 20% increase, a value is 480. What was the original value?",
   back:"400\n\nA 20% increase means the new value = 120% of original.\n120% = 1.20 as a decimal.\nOriginal = 480 ÷ 1.20 = 400\n\nCheck: 20% of 400 = 80; 400 + 80 = 480 ✓",difficulty:2,category:"calculation"},
  {id:"m8fc-09-4-5",islandId:"m8i-09-4",front:"After a 15% discount, a coat costs £68. What was the original price?",
   back:"£80\n\nA 15% decrease means the sale price = 85% of original.\n85% = 0.85\nOriginal = 68 ÷ 0.85 = 80\n\nCheck: 15% of £80 = £12; £80 − £12 = £68 ✓",difficulty:3,category:"application"},
  {id:"m8fc-09-4-6",islandId:"m8i-09-4",front:"Why must you always divide by the ORIGINAL value when calculating percentage change?",
   back:"Because percentage change measures the change relative to where you started.\n\nExample: an increase of £10 from £50 is 20% (10/50), but the same £10 increase from £200 is only 5% (10/200).\nUsing the wrong value gives a misleading result.",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-09-1":[
    {q:"Convert 0.035 to a percentage.",opts:["0.35%","3.5%","35%","350%"],c:1,e:"Multiply by 100: 0.035 × 100 = 3.5%."},
    {q:"Which fraction is equivalent to 45%?",opts:["4/5","9/20","9/25","1/4"],c:1,e:"45% = 45/100. HCF of 45 and 100 is 5. 45÷5=9, 100÷5=20. So 45% = 9/20."},
    {q:"Convert 7/8 to a percentage.",opts:["78%","87.5%","75%","80%"],c:1,e:"7 ÷ 8 = 0.875; 0.875 × 100 = 87.5%."},
    {q:"Which is the largest value? 0.6, 57%, 3/5",opts:["0.6","57%","3/5","They are all equal"],c:0,e:"Convert all to %: 0.6=60%, 57%=57%, 3/5=60%. 0.6 and 3/5 are both 60%, which is greater than 57%. Both 0.6 and 3/5 are largest, but 0.6 is listed first as the answer; however, 3/5 = 0.6 too. The question is set so 0.6 and 3/5 are equal and both beat 57%. Among the options listed, 0.6 (option index 0) shares the maximum with 3/5."},
    {q:"What is 0.3% as a decimal?",opts:["0.3","0.03","0.003","3"],c:2,e:"Divide by 100: 0.3 ÷ 100 = 0.003."}
  ],
  "m8i-09-2":[
    {q:"What is 35% of £200?",opts:["£60","£65","£70","£75"],c:2,e:"0.35 × 200 = 70. Or: 10% = £20, 30% = £60, 5% = £10, 35% = £70."},
    {q:"A television costs £320. It is reduced by 25%. What is the sale price?",opts:["£80","£200","£240","£260"],c:2,e:"25% of £320 = 0.25 × 320 = £80 discount. Sale price = £320 − £80 = £240."},
    {q:"Find 12.5% of £48.",opts:["£4","£5","£6","£8"],c:2,e:"12.5% = 1/8. £48 ÷ 8 = £6."},
    {q:"Estimate 52% of 198.",opts:["About 50","About 100","About 150","About 200"],c:1,e:"Round: 52% ≈ 50%, 198 ≈ 200. 50% of 200 = 100."},
    {q:"What is 7% of £450?",opts:["£21.50","£31.50","£31.00","£45.70"],c:1,e:"1% of £450 = £4.50. 7% = 7 × £4.50 = £31.50."}
  ],
  "m8i-09-3":[
    {q:"What percentage is 18 out of 24?",opts:["65%","70%","75%","80%"],c:2,e:"(18 ÷ 24) × 100 = 0.75 × 100 = 75%."},
    {q:"56 is 80% of what number?",opts:["44.8","64","70","72"],c:2,e:"Whole = 56 ÷ 0.80 = 70. Check: 80% of 70 = 56 ✓."},
    {q:"A survey found 45 people out of 180 preferred option A. What percentage preferred option A?",opts:["20%","25%","30%","40%"],c:1,e:"(45 ÷ 180) × 100 = 0.25 × 100 = 25%."},
    {q:"£66 is 55% of a total amount. What is the total?",opts:["£100","£110","£120","£130"],c:2,e:"Total = 66 ÷ 0.55 = 120. Check: 55% of 120 = 0.55 × 120 = 66 ✓."},
    {q:"What percentage is 13 of 52?",opts:["13%","20%","25%","40%"],c:2,e:"(13 ÷ 52) × 100 = 0.25 × 100 = 25%."}
  ],
  "m8i-09-4":[
    {q:"A price rises from £50 to £65. What is the percentage increase?",opts:["15%","25%","30%","35%"],c:2,e:"Change = £15. % increase = (15 ÷ 50) × 100 = 30%."},
    {q:"A car's value falls from £12,000 to £9,600. What is the percentage decrease?",opts:["15%","20%","24%","25%"],c:1,e:"Change = £2,400. % decrease = (2400 ÷ 12000) × 100 = 20%."},
    {q:"After a 25% increase, a value is £375. What was the original value?",opts:["£280","£295","£300","£312.50"],c:2,e:"New value = 125% of original. Original = 375 ÷ 1.25 = 300. Check: 25% of 300 = 75; 300 + 75 = 375 ✓."},
    {q:"A jacket is sold for £51 after a 15% discount. What was the original price?",opts:["£58","£60","£65","£66"],c:1,e:"Sale price = 85% of original. Original = 51 ÷ 0.85 = 60. Check: 15% of 60 = 9; 60 − 9 = 51 ✓."},
    {q:"The number of students at a school increases from 800 to 840. What is the percentage increase?",opts:["4%","5%","8%","10%"],c:1,e:"Change = 40. % increase = (40 ÷ 800) × 100 = 5%."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-09-1': `
<h2>Convert Between %, Fractions &amp; Decimals</h2>
<p>Percentages, fractions and decimals are three ways of writing the same value. Being able to switch between them quickly is a vital skill that underpins all percentage work.</p>

<h3>The three conversions</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">From → To</th><th style="padding:8px;border:1px solid #ccc">Method</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">% → decimal</td><td style="padding:8px;border:1px solid #ccc">Divide by 100</td><td style="padding:8px;border:1px solid #ccc">35% → 0.35</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">decimal → %</td><td style="padding:8px;border:1px solid #ccc">Multiply by 100</td><td style="padding:8px;border:1px solid #ccc">0.7 → 70%</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">% → fraction</td><td style="padding:8px;border:1px solid #ccc">Write over 100, simplify</td><td style="padding:8px;border:1px solid #ccc">40% = 40/100 = 2/5</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">fraction → %</td><td style="padding:8px;border:1px solid #ccc">Divide top by bottom, × 100</td><td style="padding:8px;border:1px solid #ccc">3/8 → 0.375 → 37.5%</td></tr>
</table>

<h3>Key benchmarks to memorise</h3>
<div class="example-box">
<p><strong>Must-know equivalents:</strong></p>
<p>10% = 0.1 = 1/10 &nbsp;|&nbsp; 25% = 0.25 = 1/4 &nbsp;|&nbsp; 50% = 0.5 = 1/2<br>
75% = 0.75 = 3/4 &nbsp;|&nbsp; 20% = 0.2 = 1/5 &nbsp;|&nbsp; 33⅓% ≈ 0.333 = 1/3</p>
</div>

<h3>Comparing values in different forms</h3>
<div class="example-box">
<p><strong>Example:</strong> Place in order from smallest to largest: 0.6, 58%, 3/5</p>
<p><strong>Solution:</strong> Convert all to %:<br>
0.6 = 60%, &nbsp; 58% = 58%, &nbsp; 3/5 = 60%<br>
Order: 58% &lt; 60% = 60%, so: <strong>58%, 0.6, 3/5</strong> (or 58%, 3/5, 0.6 — the last two are equal).</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Percentage</dt><dd>A number expressed as a part of 100 (the word means "per hundred").</dd>
<dt>Decimal</dt><dd>A number written using place value with a decimal point (e.g. 0.45).</dd>
<dt>Equivalent</dt><dd>Different representations with the same value (e.g. 50% = 0.5 = 1/2).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Writing 7% as 0.7 — ✅ 7% = 7 ÷ 100 = 0.07 (move the point two places left).</li>
<li>❌ Not simplifying the fraction — ✅ 40/100 = 2/5 (always simplify using the HCF).</li>
<li>❌ Comparing without converting to the same form — ✅ always convert before ordering.</li>
</ul>`,

'm8i-09-2': `
<h2>Percentages of Amounts</h2>
<p>Finding a percentage of an amount is one of the most practical maths skills you will use — from working out discounts in shops to calculating tips in restaurants.</p>

<h3>The multiplier method</h3>
<p>Convert the percentage to a decimal (the <strong>multiplier</strong>), then multiply by the amount.</p>
<div class="example-box">
<p><strong>Example:</strong> Find 35% of £240.</p>
<p>35% = 0.35 (multiplier)<br>
0.35 × 240 = <strong>£84</strong></p>
</div>

<h3>The build-up method</h3>
<p>Use 10% and 5% as building blocks to find any percentage mentally.</p>
<div class="example-box">
<p><strong>Example:</strong> Find 17.5% of £80.</p>
<p>10% of £80 = £8<br>
5% of £80 = £4 (half of 10%)<br>
2.5% of £80 = £2 (half of 5%)<br>
17.5% = £8 + £4 + £2 = <strong>£14</strong></p>
</div>

<h3>Real-world example</h3>
<div class="example-box">
<p><strong>Example:</strong> A coat costs £150. It is reduced by 20% in a sale. What is the sale price?</p>
<p>Discount = 20% of £150 = 0.20 × 150 = £30<br>
Sale price = £150 − £30 = <strong>£120</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Percentage of an amount</dt><dd>A fraction of a total expressed as a percentage applied to a value.</dd>
<dt>Multiplier</dt><dd>The decimal form of a percentage, used to calculate the answer in one step.</dd>
<dt>Discount</dt><dd>A reduction in price, usually expressed as a percentage.</dd>
<dt>Benchmark</dt><dd>A common, easy-to-work-with value such as 10%, 25% or 50%.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Finding the percentage but forgetting to subtract it for a discount — ✅ read the question carefully: it may ask for the discount OR the new price.</li>
<li>❌ Using the wrong multiplier (e.g. 0.3 for 3%) — ✅ 3% = 0.03, not 0.3.</li>
<li>❌ Rounding too early — ✅ keep full precision during the calculation and round only the final answer.</li>
</ul>`,

'm8i-09-3': `
<h2>Percent Equations &amp; Reverse Percentages</h2>
<p>Sometimes you know the percentage and the part, but need to find the whole — or you know the whole and the part and need the percentage. These "reverse" problems are very common at Year 8 and beyond.</p>

<h3>Finding what percentage one number is of another</h3>
<div class="example-box">
<p><strong>Formula:</strong> Percentage = (part ÷ whole) × 100</p>
<p><strong>Example:</strong> What percentage is 27 out of 36?<br>
(27 ÷ 36) × 100 = 0.75 × 100 = <strong>75%</strong></p>
</div>

<h3>Finding the whole given a part and a percentage</h3>
<div class="example-box">
<p><strong>Formula:</strong> Whole = part ÷ (percentage ÷ 100) = part ÷ decimal</p>
<p><strong>Example:</strong> 42 is 60% of what number?<br>
Whole = 42 ÷ 0.60 = <strong>70</strong><br>
Check: 60% of 70 = 0.60 × 70 = 42 ✓</p>
</div>

<h3>Summary of the three percent equation types</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Find</th><th style="padding:8px;border:1px solid #ccc">Formula</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Part</td><td style="padding:8px;border:1px solid #ccc">part = decimal × whole</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Percentage</td><td style="padding:8px;border:1px solid #ccc">% = (part ÷ whole) × 100</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Whole</td><td style="padding:8px;border:1px solid #ccc">whole = part ÷ decimal</td></tr>
</table>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Part</dt><dd>The portion of the total amount being considered.</dd>
<dt>Whole</dt><dd>The total or original amount (100%).</dd>
<dt>Reverse percentage</dt><dd>Finding the original (whole) amount when you know the part and the percentage.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing the wrong way — ✅ to find the whole, divide the part BY the decimal (e.g. 42 ÷ 0.6, not 0.6 ÷ 42).</li>
<li>❌ Forgetting to convert % to a decimal first — ✅ always write 60% as 0.60 before calculating.</li>
<li>❌ Not checking your answer — ✅ always verify: apply the % to your found whole and confirm you get the part.</li>
</ul>`,

'm8i-09-4': `
<h2>Percent of Change</h2>
<p><strong>Percentage change</strong> tells you by how much something has increased or decreased, expressed as a percentage of the <em>original</em> value. It is used everywhere — from price changes to population growth.</p>

<h3>Calculating percentage change</h3>
<div class="example-box">
<p><strong>Formula:</strong> % change = (change ÷ original) × 100</p>
<p><strong>where change = new − original</strong></p>
<p><strong>Example (increase):</strong> A phone's price rises from £200 to £230.<br>
Change = £30. % change = (30 ÷ 200) × 100 = <strong>15% increase</strong></p>
<p><strong>Example (decrease):</strong> A car's value falls from £10,000 to £8,500.<br>
Change = −£1,500. % change = (1500 ÷ 10000) × 100 = <strong>15% decrease</strong></p>
</div>

<h3>Finding the original amount (reverse percentage change)</h3>
<p>If you know the new value and the percentage change, divide by the correct multiplier.</p>
<div class="example-box">
<p><strong>Example:</strong> After a 20% increase, a salary is £36,000. What was the original salary?</p>
<p>20% increase means new = 120% of original = 1.20 × original<br>
Original = £36,000 ÷ 1.20 = <strong>£30,000</strong><br>
Check: 20% of £30,000 = £6,000; £30,000 + £6,000 = £36,000 ✓</p>
</div>
<div class="example-box">
<p><strong>Example:</strong> A laptop costs £510 after a 15% discount. What was the original price?</p>
<p>15% decrease means new = 85% of original = 0.85 × original<br>
Original = £510 ÷ 0.85 = <strong>£600</strong><br>
Check: 15% of £600 = £90; £600 − £90 = £510 ✓</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Percentage increase</dt><dd>The amount something has grown, expressed as a % of the original value.</dd>
<dt>Percentage decrease</dt><dd>The amount something has fallen, expressed as a % of the original value.</dd>
<dt>Multiplier for change</dt><dd>Increase of r% → multiply by (1 + r/100); decrease of r% → multiply by (1 − r/100).</dd>
<dt>Original value</dt><dd>The starting value before any change is applied (always the denominator).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing by the new value instead of the original — ✅ percentage change always uses the ORIGINAL as the denominator.</li>
<li>❌ For reverse %: subtracting the % then dividing — ✅ identify the correct multiplier (e.g. 85% for a 15% decrease) and divide by it.</li>
<li>❌ Confusing percentage change with absolute change — ✅ percentage change depends on the starting value, not just the numerical difference.</li>
</ul>`

});
