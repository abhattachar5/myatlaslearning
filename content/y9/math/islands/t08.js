// content/y9/math/islands/t08.js — Year 9 Maths Topic 8: Percentages & Financial Maths
// Islands m9i-08-1 .. m9i-08-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

FLASHCARDS.push(
  // m9i-08-1 — Percentage Change & Multipliers
  {id:"m9fc-08-1-1", islandId:"m9i-08-1", front:"How do you find a percentage of an amount (no calculator)?",
   back:"Build it from 10% and 1%.\n\n10% of 80 = 8, 1% of 80 = 0.8. So 35% = 3×8 + 5×0.8 = 24 + 4 = 28.", difficulty:1, category:"definition"},
  {id:"m9fc-08-1-2", islandId:"m9i-08-1", front:"What multiplier increases a number by 20%?",
   back:"× 1.2\n\n100% + 20% = 120% = 1.2. To decrease by 20% you multiply by 0.8 (100% − 20%).", difficulty:1, category:"concept"},
  {id:"m9fc-08-1-3", islandId:"m9i-08-1", front:"Increase £250 by 12%.",
   back:"£280\n\nMultiplier 1.12: £250 × 1.12 = £280.", difficulty:2, category:"calculation"},
  {id:"m9fc-08-1-4", islandId:"m9i-08-1", front:"How do you find a percentage change?",
   back:"Percentage change = (change ÷ original) × 100.\n\nThe denominator is always the ORIGINAL amount.", difficulty:2, category:"definition"},
  {id:"m9fc-08-1-5", islandId:"m9i-08-1", front:"A price rises from £40 to £46. Find the percentage increase.",
   back:"15%\n\nChange = £6. 6 ÷ 40 = 0.15 = 15%. Divide by the original (£40), not the new price.", difficulty:2, category:"calculation"},
  {id:"m9fc-08-1-6", islandId:"m9i-08-1", front:"Decrease £90 by 30% using a multiplier.",
   back:"£63\n\nMultiplier 0.7 (100% − 30%): £90 × 0.7 = £63.", difficulty:2, category:"application"},

  // m9i-08-2 — Reverse Percentages
  {id:"m9fc-08-2-1", islandId:"m9i-08-2", front:"What is a reverse percentage problem?",
   back:"You are given the amount AFTER a change and must find the ORIGINAL.\n\nThe key is to divide by the multiplier, not take the percentage off again.", difficulty:2, category:"definition"},
  {id:"m9fc-08-2-2", islandId:"m9i-08-2", front:"A coat costs £60 after a 20% discount. Find the original price.",
   back:"£75\n\n£60 is 80% of the original. Original = £60 ÷ 0.8 = £75.", difficulty:2, category:"calculation"},
  {id:"m9fc-08-2-3", islandId:"m9i-08-2", front:"Why can't you just add 20% back to find the original?",
   back:"Because 20% of the new price is not 20% of the original.\n\n£60 + 20% of £60 = £72, which is wrong. You must divide by the multiplier 0.8 to get £75.", difficulty:3, category:"concept"},
  {id:"m9fc-08-2-4", islandId:"m9i-08-2", front:"After a 15% rise a bill is £92. Find the original.",
   back:"£80\n\n£92 is 115% of the original. Original = £92 ÷ 1.15 = £80.", difficulty:3, category:"calculation"},
  {id:"m9fc-08-2-5", islandId:"m9i-08-2", front:"A sale price of £48 is after 'one-third off'. Original?",
   back:"£72\n\n£48 is two-thirds (≈66.7%) of the original. Original = £48 ÷ (2/3) = £48 × 3/2 = £72.", difficulty:3, category:"application"},
  {id:"m9fc-08-2-6", islandId:"m9i-08-2", front:"Reverse percentage method in one line.",
   back:"Original = new amount ÷ multiplier.\n\nIncrease of r% → divide by (1 + r/100). Decrease of r% → divide by (1 − r/100).", difficulty:2, category:"concept"},

  // m9i-08-3 — Simple & Compound Interest
  {id:"m9fc-08-3-1", islandId:"m9i-08-3", front:"What is simple interest?",
   back:"The same interest is added each year, based only on the original amount.\n\n£500 at 4% simple for 3 years: 3 × (4% of £500) = 3 × £20 = £60 interest.", difficulty:2, category:"definition"},
  {id:"m9fc-08-3-2", islandId:"m9i-08-3", front:"What is compound interest?",
   back:"Interest is added to the balance each year, so you earn interest on interest.\n\nUse a multiplier raised to a power: amount = P × (1 + r/100)ⁿ.", difficulty:2, category:"definition"},
  {id:"m9fc-08-3-3", islandId:"m9i-08-3", front:"£800 at 5% compound interest for 2 years. Final amount?",
   back:"£882\n\n£800 × 1.05² = £800 × 1.1025 = £882.", difficulty:3, category:"calculation"},
  {id:"m9fc-08-3-4", islandId:"m9i-08-3", front:"What multiplier represents a 10% annual rise over 3 years?",
   back:"1.1³ = 1.331\n\nRepeated percentage change uses a power: 3 years of ×1.1 is 1.1³.", difficulty:3, category:"concept"},
  {id:"m9fc-08-3-5", islandId:"m9i-08-3", front:"A car worth £12 000 depreciates 15% a year. Value after 2 years?",
   back:"£8 670\n\nDepreciation uses a multiplier below 1: £12 000 × 0.85² = £12 000 × 0.7225 = £8 670.", difficulty:3, category:"application"},
  {id:"m9fc-08-3-6", islandId:"m9i-08-3", front:"Why does compound interest beat simple interest over time?",
   back:"Because each year's interest is added to the balance, so the next year's interest is calculated on a bigger amount — it grows faster and faster.", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m9i-08-1": [
    {q:"Increase £400 by 15%.", opts:["£460","£415","£340","£600"], c:0,
     e:"Multiplier 1.15: £400 × 1.15 = £460."},
    {q:"A price falls from £80 to £68. Find the percentage decrease.", opts:["15%","12%","17.6%","20%"], c:0,
     e:"Change = £12. 12 ÷ 80 = 0.15 = 15% (divide by the original £80)."},
    {q:"What multiplier decreases an amount by 8%?", opts:["0.92","1.08","0.8","0.08"], c:0,
     e:"100% − 8% = 92% = 0.92."},
    {q:"Find 45% of 240.", opts:["108","96","120","135"], c:0,
     e:"10% = 24, 1% = 2.4. 45% = 4×24 + 5×2.4 = 96 + 12 = 108."},
    {q:"A shop adds 20% VAT to a £150 item. Find the total.", opts:["£180","£170","£120","£300"], c:0,
     e:"Multiplier 1.2: £150 × 1.2 = £180."}
  ],
  "m9i-08-2": [
    {q:"A jacket costs £48 after a 20% discount. Find the original price.", opts:["£60","£57.60","£40","£68"], c:0,
     e:"£48 is 80% of the original: £48 ÷ 0.8 = £60. Adding 20% to £48 (£57.60) is the classic trap."},
    {q:"After a 25% increase a wage is £500 per week. What was it before?", opts:["£400","£375","£625","£475"], c:0,
     e:"£500 is 125% of the original: £500 ÷ 1.25 = £400."},
    {q:"A sale takes 30% off and the price is now £70. Original price?", opts:["£100","£91","£49","£105"], c:0,
     e:"£70 is 70% of the original: £70 ÷ 0.7 = £100."},
    {q:"To reverse a 15% increase, what do you do to the new amount?", opts:["Divide by 1.15","Multiply by 0.85","Subtract 15%","Divide by 0.85"], c:0,
     e:"The new amount is 115% of the original, so divide by the multiplier 1.15."},
    {q:"After 12% off, a bike is £176. Find the original price.", opts:["£200","£197.12","£154.88","£188"], c:0,
     e:"£176 is 88% of the original: £176 ÷ 0.88 = £200."}
  ],
  "m9i-08-3": [
    {q:"£600 is invested at 3% simple interest for 4 years. Total interest?", opts:["£72","£18","£675.10","£600"], c:0,
     e:"3% of £600 = £18 per year. Over 4 years: 4 × £18 = £72."},
    {q:"£1 000 at 4% compound interest for 2 years gives what total?", opts:["£1 081.60","£1 080","£1 040","£1 160"], c:0,
     e:"£1 000 × 1.04² = £1 000 × 1.0816 = £1 081.60."},
    {q:"Which multiplier gives 6% compound growth over 3 years?", opts:["1.06³","3 × 1.06","1.18","0.94³"], c:0,
     e:"Repeated ×1.06 for 3 years is 1.06³."},
    {q:"A £9 000 car loses 20% of its value each year. Value after 2 years?", opts:["£5 760","£5 400","£7 200","£3 600"], c:0,
     e:"Multiplier 0.8: £9 000 × 0.8² = £9 000 × 0.64 = £5 760."},
    {q:"£2 000 at 5% compound interest for 3 years (to the nearest £).", opts:["£2 315","£2 300","£2 100","£2 205"], c:0,
     e:"£2 000 × 1.05³ = £2 000 × 1.157625 = £2 315.25 ≈ £2 315."}
  ]
});

Object.assign(LESSONS, {
  "m9i-08-1": `<h2>Percentage Change &amp; Multipliers</h2>
<p>A <strong>multiplier</strong> is the fastest way to change by a percentage. To increase by r%, multiply by (1 + r/100); to decrease, multiply by (1 − r/100). To find a <strong>percentage change</strong>, use change ÷ original × 100 — always over the original.</p>
<div class="lesson-diagram" data-diagram="math-percent-bar"><p class="diagram-caption">A 20% increase means 120% of the original, i.e. × 1.2</p></div>
<h3>Worked example</h3>
<p>A price rises from £40 to £46. Find the percentage increase.</p>
<ul>
<li>Change = £46 − £40 = £6.</li>
<li>6 ÷ 40 = 0.15 = <strong>15%</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Divide by the <em>original</em> amount, not the new one. Here that is £40, giving 15% — dividing by £46 would be wrong.</p>`,

  "m9i-08-2": `<h2>Reverse Percentages</h2>
<p>In a <strong>reverse percentage</strong> problem you know the amount after a change and want the original. The amount you are given is a percentage of the original, so <strong>divide by the multiplier</strong> to get back to 100%.</p>
<h3>Worked example</h3>
<p>A coat costs £60 after a 20% discount. Find the original price.</p>
<ul>
<li>£60 is 80% of the original, so the multiplier is 0.8.</li>
<li>Original = £60 ÷ 0.8 = <strong>£75</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>You cannot just add 20% back. £60 + 20% of £60 = £72, which is wrong, because 20% of the new price is not 20% of the original. Always divide by the multiplier.</p>`,

  "m9i-08-3": `<h2>Simple &amp; Compound Interest</h2>
<p><strong>Simple interest</strong> adds the same amount each year, based on the original sum. <strong>Compound interest</strong> adds each year's interest to the balance, so you earn interest on interest — use a multiplier raised to a power: amount = P × (1 + r/100)ⁿ.</p>
<h3>Worked example</h3>
<p>£800 at 5% compound interest for 2 years.</p>
<ul>
<li>Multiplier 1.05, for 2 years: 1.05² = 1.1025.</li>
<li>£800 × 1.1025 = <strong>£882</strong>.</li>
</ul>
<h3>Common mistake</h3>
<p>Depreciation works the same way but with a multiplier below 1. A car losing 15% a year uses ×0.85 each year, so after 2 years it is ×0.85², not ×0.70.</p>`
});
