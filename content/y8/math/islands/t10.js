// math-y8-t10.js — Year 8 Maths Topic 10: Consumer Maths
// Islands: m8i-10-1 .. m8i-10-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-10-1 — Unit Prices & Price Lists
  {id:"m8fc-10-1-1",islandId:"m8i-10-1",front:"What is a unit price, and why is it useful?",
   back:"A unit price is the cost per single item or per standard measure (e.g. cost per 100 g, per litre, per item).\n\nIt lets you compare products of different sizes fairly.\nExample: £1.80 for 450 g → unit price = £1.80 ÷ 450 = £0.004 per gram = 0.4p/g.",difficulty:1,category:"definition"},
  {id:"m8fc-10-1-2",islandId:"m8i-10-1",front:"Brand A: 500 g of pasta for £1.25. Brand B: 750 g for £1.80. Which is better value?",
   back:"Brand A is better value.\n\nBrand A: £1.25 ÷ 500 = £0.0025 per gram (0.25p/g)\nBrand B: £1.80 ÷ 750 = £0.0024 per gram (0.24p/g)\n\nWait — Brand B is actually cheaper per gram at 0.24p/g vs 0.25p/g.\nBrand B is better value.",difficulty:2,category:"calculation"},
  {id:"m8fc-10-1-3",islandId:"m8i-10-1",front:"A price list shows apples at £0.35 each. How much do 8 apples cost?",
   back:"8 × £0.35 = £2.80\n\nMultiply the unit price by the number of items:\n£0.35 × 8 = £2.80.",difficulty:1,category:"calculation"},
  {id:"m8fc-10-1-4",islandId:"m8i-10-1",front:"Shampoo costs £3.60 for 300 ml. What is the cost per 100 ml?",
   back:"£1.20 per 100 ml.\n\n£3.60 ÷ 300 = £0.012 per ml\n£0.012 × 100 = £1.20 per 100 ml.\n\nAlternatively: £3.60 ÷ 3 = £1.20 per 100 ml.",difficulty:1,category:"calculation"},
  {id:"m8fc-10-1-5",islandId:"m8i-10-1",front:"6 cans of juice cost £4.50. What is the unit price per can?",
   back:"£0.75 per can.\n\n£4.50 ÷ 6 = £0.75.\n\nCheck: 6 × £0.75 = £4.50 ✓",difficulty:1,category:"calculation"},
  {id:"m8fc-10-1-6",islandId:"m8i-10-1",front:"A shop sells orange juice: 1 litre for £1.20 or 2.5 litres for £2.75. Which is better value?",
   back:"The 2.5-litre bottle is better value.\n\n1 litre bottle: £1.20 per litre\n2.5 litre bottle: £2.75 ÷ 2.5 = £1.10 per litre\n\n£1.10 < £1.20, so the larger bottle gives better value.",difficulty:2,category:"application"},

  // m8i-10-2 — Discounts, VAT & Mark-ups
  {id:"m8fc-10-2-1",islandId:"m8i-10-2",front:"A jacket costs £80. It is reduced by 25%. What is the sale price?",
   back:"Sale price = £60.\n\nDiscount = 25% of £80 = 0.25 × £80 = £20.\nSale price = £80 − £20 = £60.\n\nAlternatively: 75% of £80 = 0.75 × £80 = £60.",difficulty:1,category:"calculation"},
  {id:"m8fc-10-2-2",islandId:"m8i-10-2",front:"What is VAT and what is the standard UK VAT rate?",
   back:"VAT stands for Value Added Tax. It is a tax added to the price of goods and services.\n\nThe standard UK VAT rate is 20%.\n\nIf a price is listed ex-VAT (before tax), multiply by 1.20 to find the price with VAT.",difficulty:1,category:"definition"},
  {id:"m8fc-10-2-3",islandId:"m8i-10-2",front:"A phone costs £350 before VAT. What is the price including 20% VAT?",
   back:"Price with VAT = £420.\n\nVAT = 20% of £350 = 0.20 × £350 = £70.\nFinal price = £350 + £70 = £420.\n\nAlternatively: £350 × 1.20 = £420.",difficulty:1,category:"calculation"},
  {id:"m8fc-10-2-4",islandId:"m8i-10-2",front:"A retailer buys a watch for £45 and marks it up by 60%. What is the selling price?",
   back:"Selling price = £72.\n\nMark-up = 60% of £45 = 0.60 × £45 = £27.\nSelling price = £45 + £27 = £72.\n\nAlternatively: £45 × 1.60 = £72.",difficulty:2,category:"calculation"},
  {id:"m8fc-10-2-5",islandId:"m8i-10-2",front:"A restaurant bill is £56. A 15% tip is added. What is the total amount paid?",
   back:"Total = £64.40.\n\nTip = 15% of £56 = 0.15 × £56 = £8.40.\nTotal = £56 + £8.40 = £64.40.\n\nAlternatively: £56 × 1.15 = £64.40.",difficulty:2,category:"application"},
  {id:"m8fc-10-2-6",islandId:"m8i-10-2",front:"A sale price is £48 after a 20% discount. What was the original price?",
   back:"Original price = £60.\n\nAfter a 20% discount, 80% of the original price remains.\n80% of original = £48\nOriginal = £48 ÷ 0.80 = £60.\n\nCheck: 20% of £60 = £12, and £60 − £12 = £48 ✓",difficulty:3,category:"application"},

  // m8i-10-3 — Simple & Compound Interest
  {id:"m8fc-10-3-1",islandId:"m8i-10-3",front:"State the simple interest formula and define each variable.",
   back:"I = P × R × T\n\nI = Interest earned (£)\nP = Principal (the amount initially invested or borrowed)\nR = Rate of interest per year (as a decimal, so 5% → 0.05)\nT = Time in years\n\nExample: P = £200, R = 5% = 0.05, T = 3 years → I = 200 × 0.05 × 3 = £30.",difficulty:1,category:"definition"},
  {id:"m8fc-10-3-2",islandId:"m8i-10-3",front:"Calculate the simple interest on £500 at 4% per year for 3 years.",
   back:"Simple interest = £60.\n\nI = P × R × T\nI = 500 × 0.04 × 3 = £60.\n\nTotal amount after 3 years = £500 + £60 = £560.",difficulty:1,category:"calculation"},
  {id:"m8fc-10-3-3",islandId:"m8i-10-3",front:"What is compound interest, and how does it differ from simple interest?",
   back:"Compound interest means interest is calculated on the principal PLUS any interest already earned.\n\nWith simple interest, only the original principal earns interest each year.\nWith compound interest, the balance grows faster because you earn 'interest on interest'.\n\nExample: £1000 at 10% for 2 years:\nSimple: I = £200 total\nCompound: Year 1 → £100, Year 2 → £110, total = £210.",difficulty:2,category:"concept"},
  {id:"m8fc-10-3-4",islandId:"m8i-10-3",front:"Calculate the compound interest on £1000 at 5% per year for 2 years.",
   back:"Compound interest = £102.50.\n\nYear 1: Interest = 5% of £1000 = £50. Balance = £1050.\nYear 2: Interest = 5% of £1050 = £52.50. Balance = £1102.50.\n\nTotal interest = £1102.50 − £1000 = £102.50.\n\nSimple interest would give only £100 — compound interest is higher.",difficulty:2,category:"calculation"},
  {id:"m8fc-10-3-5",islandId:"m8i-10-3",front:"Priya saves £800 at 3% compound interest per year for 3 years. What is her balance?",
   back:"Balance after 3 years = £874.18 (to the nearest penny).\n\nYear 1: £800 × 1.03 = £824.00\nYear 2: £824.00 × 1.03 = £848.72\nYear 3: £848.72 × 1.03 = £874.18\n\nTotal interest earned = £874.18 − £800 = £74.18.",difficulty:3,category:"calculation"},
  {id:"m8fc-10-3-6",islandId:"m8i-10-3",front:"£600 is invested at 5% simple interest. After how many years will the total be £750?",
   back:"After 5 years.\n\nInterest needed = £750 − £600 = £150.\nUsing I = P × R × T:\n150 = 600 × 0.05 × T\n150 = 30 × T\nT = 150 ÷ 30 = 5 years.",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-10-1":[
    {q:"Cereal A costs £2.40 for 400 g. Cereal B costs £3.15 for 450 g. Which has the lower unit price per gram?",opts:["Cereal A at 0.6p/g","Cereal B at 0.7p/g","Cereal A at 0.7p/g","Cereal B at 0.6p/g"],c:0,e:"Cereal A: £2.40 ÷ 400 = 0.6p/g. Cereal B: £3.15 ÷ 450 = 0.7p/g. Cereal A is cheaper at 0.6p per gram."},
    {q:"A pack of 4 pens costs £3.60. What is the unit price per pen?",opts:["80p","85p","90p","95p"],c:2,e:"£3.60 ÷ 4 = £0.90 = 90p per pen."},
    {q:"Milk is sold at 75p per litre. How much do 4.5 litres cost?",opts:["£3.00","£3.25","£3.38","£3.75"],c:2,e:"4.5 × 75p = 337.5p = £3.375 ≈ £3.38. Precisely 4.5 × £0.75 = £3.375, which to the nearest penny is £3.38."},
    {q:"A store sells juice: 1 litre for £1.50 or 3 litres for £4.20. What is the unit price per litre for the larger bottle?",opts:["£1.20","£1.30","£1.40","£1.50"],c:2,e:"£4.20 ÷ 3 = £1.40 per litre. This is cheaper than the £1.50 per litre for the small bottle."},
    {q:"A price list shows: 1 sandwich = £3.20, 1 drink = £1.45, 1 dessert = £2.15. What is the total cost of one of each?",opts:["£6.60","£6.80","£7.00","£6.90"],c:1,e:"£3.20 + £1.45 + £2.15 = £6.80."}
  ],
  "m8i-10-2":[
    {q:"A coat costs £120 and is reduced by 35%. What is the sale price?",opts:["£42","£78","£85","£88"],c:1,e:"Discount = 35% of £120 = 0.35 × £120 = £42. Sale price = £120 − £42 = £78. Or: 65% of £120 = 0.65 × £120 = £78."},
    {q:"A television costs £450 before VAT. VAT is charged at 20%. What is the price including VAT?",opts:["£510","£530","£540","£560"],c:2,e:"VAT = 20% of £450 = £90. Price with VAT = £450 + £90 = £540. Or: £450 × 1.20 = £540."},
    {q:"A shop buys trainers for £60 and marks them up by 45%. What is the selling price?",opts:["£27","£87","£90","£105"],c:1,e:"Mark-up = 45% of £60 = 0.45 × £60 = £27. Selling price = £60 + £27 = £87."},
    {q:"After a 30% discount a dress costs £63. What was the original price?",opts:["£81","£85","£90","£93"],c:2,e:"A 30% discount means 70% of the original price remains. 70% of original = £63, so original = £63 ÷ 0.70 = £90."},
    {q:"A meal costs £48. A 12.5% tip is added. What is the total amount paid?",opts:["£52","£54","£56","£60"],c:1,e:"Tip = 12.5% of £48 = 0.125 × £48 = £6. Total = £48 + £6 = £54. Or: £48 × 1.125 = £54."}
  ],
  "m8i-10-3":[
    {q:"Calculate the simple interest on £400 at 6% per year for 5 years.",opts:["£60","£100","£120","£240"],c:2,e:"I = P × R × T = 400 × 0.06 × 5 = £120."},
    {q:"£2000 is invested at 4% simple interest. What is the total amount after 3 years?",opts:["£2080","£2240","£2400","£2480"],c:1,e:"I = 2000 × 0.04 × 3 = £240. Total = £2000 + £240 = £2240."},
    {q:"£500 is invested at 10% compound interest per year. What is the balance after 2 years?",opts:["£600","£605","£610","£625"],c:1,e:"Year 1: £500 × 1.10 = £550. Year 2: £550 × 1.10 = £605. Balance = £605."},
    {q:"How much more interest does compound interest earn compared to simple interest on £1000 at 5% for 2 years?",opts:["£0","£2.50","£5.00","£10.00"],c:1,e:"Simple: I = 1000 × 0.05 × 2 = £100. Compound: Year 1 → £50, Year 2 → £52.50, total = £102.50. Difference = £102.50 − £100 = £2.50."},
    {q:"Mia borrows £600 at 8% simple interest per year. How much interest does she owe after 18 months?",opts:["£48","£72","£96","£144"],c:1,e:"18 months = 1.5 years. I = 600 × 0.08 × 1.5 = £72."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-10-1': `
<h2>Unit Prices &amp; Price Lists</h2>
<p>When shopping, the same product often comes in different sizes at different prices. To find the <strong>best value</strong>, you need to calculate and compare the <strong>unit price</strong> — the cost per single item or per standard measure such as per gram or per litre.</p>

<h3>Calculating a unit price</h3>
<p>Divide the total price by the quantity (number of items or size in grams, litres, etc.).</p>
<div class="example-box">
<p><strong>Example:</strong> Shampoo A is 250 ml for £2.00 and Shampoo B is 400 ml for £3.00. Which is better value?</p>
<p><strong>Solution:</strong><br>
Shampoo A: £2.00 ÷ 250 = £0.008 per ml = 0.80p per 100 ml<br>
Shampoo B: £3.00 ÷ 400 = £0.0075 per ml = 0.75p per 100 ml<br>
Shampoo B has the lower unit price, so it is <strong>better value</strong>.</p>
</div>

<h3>Reading price lists and finding totals</h3>
<p>A <strong>price list</strong> shows the cost of individual items. To find the total cost of multiple items, multiply the unit price by the number of items and add the costs together.</p>
<div class="example-box">
<p><strong>Example:</strong> A price list shows: sandwich £3.50, drink £1.20, snack £0.85. Find the total cost of 2 sandwiches, 3 drinks and 1 snack.</p>
<p><strong>Solution:</strong><br>
Sandwiches: 2 × £3.50 = £7.00<br>
Drinks: 3 × £1.20 = £3.60<br>
Snack: 1 × £0.85 = £0.85<br>
Total = £7.00 + £3.60 + £0.85 = <strong>£11.45</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Unit price</dt><dd>The cost of one item or one standard measure (e.g. cost per gram, per litre, per can).</dd>
<dt>Price list</dt><dd>A table showing the cost of individual products or services.</dd>
<dt>Best value</dt><dd>The option with the lowest unit price for the same quality of product.</dd>
<dt>Quantity</dt><dd>The amount of a product (number of items, weight, volume).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Assuming the bigger pack is always cheaper per unit — ✅ always calculate the unit price to be sure.</li>
<li>❌ Comparing total prices without accounting for size — ✅ only compare unit prices for a fair comparison.</li>
<li>❌ Dividing quantity by price instead of price by quantity — ✅ unit price = total price ÷ quantity.</li>
</ul>`,

'm8i-10-2': `
<h2>Discounts, VAT &amp; Mark-ups</h2>
<p>In everyday consumer contexts, prices are often adjusted by percentages. You need to be able to calculate <strong>discounts</strong> (price reductions), <strong>VAT</strong> (tax added to prices), <strong>mark-ups</strong> (profit added by retailers) and <strong>tips</strong> (gratuity added to service bills).</p>

<h3>Discounts and sale prices</h3>
<p>A discount is a percentage reduction from the original price. There are two methods:</p>
<ul>
<li><strong>Two-step:</strong> Find the discount amount, then subtract. Discount = % × original price. Sale price = original − discount.</li>
<li><strong>One-step (multiplier):</strong> Sale price = original × (1 − discount rate). For a 30% discount: × 0.70.</li>
</ul>
<div class="example-box">
<p><strong>Example:</strong> A coat costs £150 and is reduced by 40%. Find the sale price.</p>
<p><strong>Solution:</strong><br>
Discount = 40% of £150 = 0.40 × £150 = £60<br>
Sale price = £150 − £60 = <strong>£90</strong><br>
Or: £150 × 0.60 = <strong>£90</strong></p>
</div>

<h3>VAT at 20%</h3>
<p>In the UK, Value Added Tax (VAT) is usually charged at <strong>20%</strong>. To find the price including VAT, multiply the ex-VAT price by <strong>1.20</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> A laptop costs £600 before VAT. Find the price including 20% VAT.</p>
<p><strong>Solution:</strong> £600 × 1.20 = <strong>£720</strong></p>
</div>

<h3>Mark-ups and tips</h3>
<p>A <strong>mark-up</strong> is a percentage added to a wholesale (cost) price to create a retail (selling) price. A <strong>tip</strong> is a percentage gratuity added to a service bill. In both cases, multiply the base amount by (1 + rate).</p>
<div class="example-box">
<p><strong>Example:</strong> A restaurant bill is £90 and a 10% tip is added. What is the total?</p>
<p><strong>Solution:</strong> £90 × 1.10 = <strong>£99</strong></p>
</div>

<h3>Finding the original price (reverse percentage)</h3>
<p>If you know the sale price and the discount rate, work backwards. Divide the sale price by the percentage that remains.</p>
<div class="example-box">
<p><strong>Example:</strong> After a 25% discount, a bag costs £60. Find the original price.</p>
<p><strong>Solution:</strong> 75% of original = £60, so original = £60 ÷ 0.75 = <strong>£80</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Discount</dt><dd>A percentage reduction from the original price.</dd>
<dt>VAT (Value Added Tax)</dt><dd>A UK tax added to prices, typically at 20%.</dd>
<dt>Mark-up</dt><dd>The percentage a retailer adds to the cost price to make a profit.</dd>
<dt>Tip (gratuity)</dt><dd>A percentage amount added to a bill as a reward for service.</dd>
<dt>Sale price</dt><dd>The price after a discount has been applied.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Subtracting the discount percent from the original without calculating the discount amount first — ✅ find the discount in £ first, then subtract.</li>
<li>❌ For reverse percentage: subtracting the discount % from the sale price — ✅ divide by the remaining percentage (as a decimal).</li>
<li>❌ Forgetting to multiply by 1.20 for VAT (not 0.20) — ✅ 1.20 gives the total price with VAT; 0.20 gives only the VAT amount.</li>
</ul>`,

'm8i-10-3': `
<h2>Simple &amp; Compound Interest</h2>
<p>Interest is the cost of borrowing money, or the reward for saving it. There are two main types: <strong>simple interest</strong>, where only the original amount earns interest each year, and <strong>compound interest</strong>, where interest is added to the balance so future interest is earned on a larger amount.</p>

<h3>Simple interest</h3>
<p>Use the formula: <strong>I = P × R × T</strong></p>
<p>Where P = principal (starting amount), R = annual interest rate as a decimal, T = time in years.</p>
<div class="example-box">
<p><strong>Example:</strong> Calculate the simple interest on £800 at 5% per year for 4 years. Find the total amount.</p>
<p><strong>Solution:</strong><br>
I = P × R × T = 800 × 0.05 × 4 = <strong>£160</strong><br>
Total amount = £800 + £160 = <strong>£960</strong></p>
</div>

<h3>Compound interest (year-by-year method)</h3>
<p>Each year, add the interest to the balance before calculating next year's interest. Multiply the balance by (1 + R) each year.</p>
<div class="example-box">
<p><strong>Example:</strong> £1000 is invested at 3% compound interest per year for 3 years. Find the balance.</p>
<p><strong>Solution:</strong><br>
Year 1: £1000 × 1.03 = £1030.00<br>
Year 2: £1030.00 × 1.03 = £1060.90<br>
Year 3: £1060.90 × 1.03 = £1092.73<br>
Balance = <strong>£1092.73</strong> (to the nearest penny)<br>
Total interest = £1092.73 − £1000 = £92.73</p>
</div>

<h3>Comparing simple and compound interest</h3>
<p>Compound interest always produces a higher total than simple interest (for the same rate and time, over more than one year), because each year's interest earns further interest. The difference grows larger the longer the money is invested.</p>
<div class="example-box">
<p><strong>Example:</strong> Compare simple and compound interest on £500 at 6% for 2 years.</p>
<p>Simple: I = 500 × 0.06 × 2 = £60. Total = £560.<br>
Compound: Year 1 → £500 × 1.06 = £530. Year 2 → £530 × 1.06 = £561.80.<br>
Compound gives <strong>£1.80 more</strong> after 2 years.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Principal (P)</dt><dd>The original amount of money saved or borrowed.</dd>
<dt>Interest rate (R)</dt><dd>The percentage charged or earned per year, written as a decimal in the formula.</dd>
<dt>Simple interest</dt><dd>Interest calculated only on the original principal each year.</dd>
<dt>Compound interest</dt><dd>Interest calculated on the principal plus all interest accumulated so far.</dd>
<dt>Balance</dt><dd>The total amount in the account (principal + interest earned so far).</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to convert the rate to a decimal — ✅ 5% becomes 0.05 in the formula I = PRT.</li>
<li>❌ For compound interest, using the original £P every year — ✅ use the updated balance at the start of each year.</li>
<li>❌ Confusing interest earned (I) with total amount — ✅ total amount = P + I; interest is only the extra earned.</li>
</ul>`

});
