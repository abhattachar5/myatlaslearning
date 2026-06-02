// content/y11/math/islands/t11.js — Year 11 Maths Topic 11: Growth, Decay & Iteration
// Islands m11i-11-1 .. m11i-11-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-11-1 — Compound Growth & Decay
  {id:"m11fc-11-1-1", islandId:"m11i-11-1", front:"What is the formula for compound growth?",
   back:"Amount = P × (multiplier)ⁿ, where n is the number of periods.\n\nThe multiplier is 1 + r/100 for growth.", difficulty:2, category:"definition"},
  {id:"m11fc-11-1-2", islandId:"m11i-11-1", front:"What multiplier represents 6% growth per year?",
   back:"1.06\n\n100% + 6% = 106% = 1.06.", difficulty:1, category:"concept"},
  {id:"m11fc-11-1-3", islandId:"m11i-11-1", front:"£500 grows at 4% compound for 3 years. Write the calculation.",
   back:"£500 × 1.04³\n\n= £500 × 1.124864 ≈ £562.43.", difficulty:2, category:"calculation"},
  {id:"m11fc-11-1-4", islandId:"m11i-11-1", front:"What multiplier represents 15% decay (depreciation)?",
   back:"0.85\n\n100% − 15% = 85% = 0.85.", difficulty:1, category:"concept"},
  {id:"m11fc-11-1-5", islandId:"m11i-11-1", front:"A £8000 car depreciates 10% a year. Value after 2 years?",
   back:"£6480\n\n£8000 × 0.9² = £8000 × 0.81 = £6480.", difficulty:3, category:"calculation"},
  {id:"m11fc-11-1-6", islandId:"m11i-11-1", front:"Why use a power rather than multiplying repeatedly?",
   back:"It's faster and works for any number of years.\n\nP × (multiplier)ⁿ gives the answer in one step.", difficulty:2, category:"concept"},

  // m11i-11-2 — Repeated Percentage Change
  {id:"m11fc-11-2-1", islandId:"m11i-11-2", front:"How do you combine two percentage changes?",
   back:"Multiply the multipliers together.\n\nA 20% rise then 10% fall is ×1.2 × 0.9 = ×1.08.", difficulty:3, category:"definition"},
  {id:"m11fc-11-2-2", islandId:"m11i-11-2", front:"A price rises 20% then falls 20%. Is it back to the start?",
   back:"No — it ends LOWER.\n\n×1.2 × 0.8 = ×0.96, a 4% overall decrease.", difficulty:3, category:"concept"},
  {id:"m11fc-11-2-3", islandId:"m11i-11-2", front:"What overall multiplier is a 10% rise followed by a 10% rise?",
   back:"1.21\n\n1.1 × 1.1 = 1.21, i.e. a 21% overall increase (not 20%).", difficulty:2, category:"calculation"},
  {id:"m11fc-11-2-4", islandId:"m11i-11-2", front:"Why can't you just add the percentages?",
   back:"Because the second change acts on the NEW amount, not the original.\n\nMultiplying the multipliers handles this correctly.", difficulty:3, category:"concept"},
  {id:"m11fc-11-2-5", islandId:"m11i-11-2", front:"A 25% increase then a 20% decrease gives what overall multiplier?",
   back:"1.0\n\n1.25 × 0.8 = 1.0 — back to the original (a 0% overall change).", difficulty:3, category:"application"},
  {id:"m11fc-11-2-6", islandId:"m11i-11-2", front:"Overall multiplier 0.96 means what percentage change?",
   back:"A 4% decrease.\n\n0.96 = 96% of the original, so 4% has been lost.", difficulty:2, category:"concept"},

  // m11i-11-3 — Iteration
  {id:"m11fc-11-3-1", islandId:"m11i-11-3", front:"What is an iterative formula?",
   back:"A rule that uses one value to produce the next, e.g. xₙ₊₁ = √(xₙ + 2).\n\nRepeating it gives better and better approximations.", difficulty:3, category:"definition"},
  {id:"m11fc-11-3-2", islandId:"m11i-11-3", front:"How do you use an iterative formula?",
   back:"Substitute the current value to get the next, then repeat using that answer.\n\nKeep going until the values barely change.", difficulty:3, category:"concept"},
  {id:"m11fc-11-3-3", islandId:"m11i-11-3", front:"Using xₙ₊₁ = √(xₙ + 6) with x₀ = 2, find x₁.",
   back:"≈ 2.83\n\nx₁ = √(2 + 6) = √8 ≈ 2.83.", difficulty:3, category:"calculation"},
  {id:"m11fc-11-3-4", islandId:"m11i-11-3", front:"What does it mean if the iterates settle on one value?",
   back:"They are converging to a root (solution) of the equation.\n\nThat value is the approximate solution.", difficulty:3, category:"concept"},
  {id:"m11fc-11-3-5", islandId:"m11i-11-3", front:"How do you carry out iteration efficiently on a calculator?",
   back:"Enter the start value, then build the formula using 'Ans' and press = repeatedly.\n\nEach press gives the next iterate.", difficulty:3, category:"application"},
  {id:"m11fc-11-3-6", islandId:"m11i-11-3", front:"Why is iteration useful?",
   back:"It approximates solutions to equations that are hard to solve exactly.\n\nGCSE equations sometimes have no neat algebraic solution.", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m11i-11-1": [
    {q:"The multiplier for 8% compound growth is:", opts:["1.08","0.92","8","1.8"], c:0,
     e:"100% + 8% = 108% = 1.08."},
    {q:"£200 at 5% compound for 2 years is:", opts:["£220.50","£220","£210","£240"], c:0,
     e:"£200 × 1.05² = £200 × 1.1025 = £220.50."},
    {q:"The multiplier for 12% depreciation is:", opts:["0.88","1.12","0.12","12"], c:0,
     e:"100% − 12% = 88% = 0.88."},
    {q:"A £10000 car loses 20% per year. Value after 2 years?", opts:["£6400","£6000","£8000","£4000"], c:0,
     e:"£10000 × 0.8² = £10000 × 0.64 = £6400."},
    {q:"Compound interest is calculated using:", opts:["P × (multiplier)ⁿ","P × n","P + r","P ÷ n"], c:0,
     e:"Raise the multiplier to the power n (number of periods)."}
  ],
  "m11i-11-2": [
    {q:"A 10% rise then 10% fall gives an overall multiplier of:", opts:["0.99","1.0","1.01","0.9"], c:0,
     e:"1.1 × 0.9 = 0.99 — a 1% overall decrease."},
    {q:"A 20% rise followed by a 20% rise is an overall change of:", opts:["44%","40%","21%","20%"], c:0,
     e:"1.2 × 1.2 = 1.44, a 44% increase."},
    {q:"To combine percentage changes you:", opts:["Multiply the multipliers","Add the percentages","Subtract them","Average them"], c:0,
     e:"Multiply the multipliers; you cannot simply add the percentages."},
    {q:"A 25% increase then 20% decrease gives multiplier:", opts:["1.0","1.05","0.95","1.45"], c:0,
     e:"1.25 × 0.8 = 1.0 — no overall change."},
    {q:"An overall multiplier of 0.9 means:", opts:["A 10% decrease","A 90% decrease","A 10% increase","No change"], c:0,
     e:"0.9 = 90% of the original, i.e. 10% lost."}
  ],
  "m11i-11-3": [
    {q:"An iterative formula uses one value to find the:", opts:["Next value","Average","Total","Percentage"], c:0,
     e:"xₙ₊₁ is produced from xₙ, then repeated."},
    {q:"Using xₙ₊₁ = √(xₙ + 6), x₀ = 3, find x₁.", opts:["3","2.83","4.24","9"], c:0,
     e:"√(3 + 6) = √9 = 3."},
    {q:"If the iterates stop changing, they have:", opts:["Converged to a root","Diverged","Made an error","Reached zero"], c:0,
     e:"Settling on a value means converging to a solution of the equation."},
    {q:"Iteration is most useful for equations that:", opts:["Can't be solved exactly","Are linear","Have no solution","Are simple"], c:0,
     e:"It approximates roots when there is no neat algebraic method."},
    {q:"On a calculator, iteration is done quickly using:", opts:["The Ans key","The fraction key","The π key","The memory only"], c:0,
     e:"Build the formula with Ans and press = repeatedly."}
  ]
});

Object.assign(LESSONS, {
  "m11i-11-1": `<h2>Compound Growth &amp; Decay</h2>
<p>Compound change uses a <strong>multiplier raised to a power</strong>: Amount = P × (multiplier)ⁿ. For <strong>growth</strong> the multiplier is 1 + r/100; for <strong>decay</strong> (depreciation) it is 1 − r/100.</p>
<div class="lesson-diagram" data-diagram="math-percent-bar"><p class="diagram-caption">Growth uses a multiplier above 1; decay uses one below 1</p></div>
<h3>Worked example</h3>
<p>A £8000 car depreciates 10% a year. After 2 years: £8000 × 0.9² = £8000 × 0.81 = <strong>£6480</strong>.</p>
<h3>Common mistake</h3>
<p>Raise the multiplier to the number of years as a <em>power</em> — don't multiply the rate by the years (that would be simple, not compound).</p>`,

  "m11i-11-2": `<h2>Repeated Percentage Change</h2>
<p>To combine successive percentage changes, <strong>multiply the multipliers</strong> together — you cannot simply add the percentages, because each change acts on the new amount.</p>
<h3>Worked example</h3>
<p>A price rises 20% then falls 20%: ×1.2 × 0.8 = ×0.96 — a 4% overall <em>decrease</em>, not back to the start.</p>
<h3>Common mistake</h3>
<p>'Up 10% then up 10%' is ×1.1 × 1.1 = ×1.21, a 21% rise — not 20%. Always multiply the multipliers and then read off the overall change.</p>`,

  "m11i-11-3": `<h2>Iteration</h2>
<p>An <strong>iterative formula</strong> uses the current value to generate the next, e.g. xₙ₊₁ = √(xₙ + 6). Repeating it produces values that <strong>converge</strong> to a root of an equation — handy when there is no neat exact method.</p>
<h3>Worked example</h3>
<p>With xₙ₊₁ = √(xₙ + 6) and x₀ = 2: x₁ = √(2 + 6) = √8 ≈ 2.83; feeding that back gives x₂ ≈ 2.97, and the values settle towards 3.</p>
<h3>On a calculator</h3>
<p>Enter the start value, build the formula with the <strong>Ans</strong> key, and press = repeatedly — each press gives the next iterate.</p>`
});
