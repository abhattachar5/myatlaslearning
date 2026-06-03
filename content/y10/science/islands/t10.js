// content/y10/science/islands/t10.js — Year 10 Science Topic 10: Organic Chemistry
// Islands s10i-10-1 .. s10i-10-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-10-1 — Crude Oil & Fractional Distillation
  {id:"s10fc-10-1-1", islandId:"s10i-10-1", front:"What is crude oil?",
   back:"Crude oil is a finite (non-renewable) resource formed over millions of years from the remains of ancient marine organisms buried under layers of sedimentary rock.\n\nIt is a complex mixture of hydrocarbons — molecules made only of carbon and hydrogen atoms.\n\nMost of the hydrocarbons in crude oil are alkanes (saturated hydrocarbons).", difficulty:1, category:"definition"},
  {id:"s10fc-10-1-2", islandId:"s10i-10-1", front:"How does fractional distillation separate crude oil?",
   back:"Fractional distillation separates crude oil into fractions based on boiling point:\n\n1. Crude oil is heated until most of it vaporises\n2. The vapour enters a fractionating column (hot at the bottom, cool at the top)\n3. Hydrocarbons condense at the level where the temperature matches their boiling point\n4. Small molecules (low boiling point) rise to the top\n5. Large molecules (high boiling point) condense near the bottom\n\nEach fraction is a mixture of hydrocarbons with similar chain lengths and boiling points.", difficulty:2, category:"concept"},
  {id:"s10fc-10-1-3", islandId:"s10i-10-1", front:"Name the main fractions of crude oil and their uses.",
   back:"From top (lightest) to bottom (heaviest):\n\n• Refinery gases (e.g. methane, propane) — heating, cooking fuel\n• Petrol (gasoline) — fuel for cars\n• Kerosene — jet fuel\n• Diesel — fuel for lorries, trains\n• Fuel oil — fuel for ships, power stations\n• Bitumen — road surfacing, roofing\n\nSmaller molecules have lower boiling points, are more flammable and less viscous.", difficulty:1, category:"definition"},
  {id:"s10fc-10-1-4", islandId:"s10i-10-1", front:"How do the properties of hydrocarbons change with chain length?",
   back:"As chain length increases:\n\n• Boiling point increases (stronger intermolecular forces)\n• Viscosity increases (thicker, less runny)\n• Flammability decreases (harder to ignite)\n• Colour becomes darker\n\nSmaller hydrocarbons are gases or light liquids; larger ones are thick, dark, viscous liquids or solids.", difficulty:2, category:"concept"},
  {id:"s10fc-10-1-5", islandId:"s10i-10-1", front:"Why is fractional distillation a physical process, not a chemical one?",
   back:"Fractional distillation separates the hydrocarbons in crude oil without breaking any chemical bonds.\n\nThe molecules are separated by differences in their boiling points (a physical property). No new substances are formed.\n\nThis is the key distinction:\n• Physical change — no new substances, reversible (boiling, condensing)\n• Chemical change — new substances formed, usually irreversible", difficulty:2, category:"concept"},

  // s10i-10-2 — Alkanes, Alkenes & Cracking
  {id:"s10fc-10-2-1", islandId:"s10i-10-2", front:"What are alkanes? Give the first four examples.",
   back:"Alkanes are saturated hydrocarbons — they contain only single carbon–carbon bonds.\n\nGeneral formula: CₙH₂ₙ₊₂\n\n1. Methane — CH₄\n2. Ethane — C₂H₆\n3. Propane — C₃H₈\n4. Butane — C₄H₁₀\n\nSaturated means all carbon–carbon bonds are single bonds (no double bonds).", difficulty:1, category:"definition"},
  {id:"s10fc-10-2-2", islandId:"s10i-10-2", front:"What are alkenes? Give examples.",
   back:"Alkenes are unsaturated hydrocarbons — they contain at least one carbon–carbon double bond (C=C).\n\nGeneral formula: CₙH₂ₙ\n\n1. Ethene — C₂H₄\n2. Propene — C₃H₆\n3. Butene — C₄H₈\n\nThe double bond makes alkenes more reactive than alkanes. Alkenes can undergo addition reactions.", difficulty:1, category:"definition"},
  {id:"s10fc-10-2-3", islandId:"s10i-10-2", front:"How do you test for an alkene?",
   back:"Test: Add bromine water (orange/brown) to the substance and shake.\n\nAlkene present: bromine water decolourises (turns colourless)\n— the bromine adds across the C=C double bond (an addition reaction)\n\nAlkane present: bromine water stays orange/brown\n— no double bond for bromine to react with\n\nThis test distinguishes saturated from unsaturated hydrocarbons.", difficulty:1, category:"application"},
  {id:"s10fc-10-2-4", islandId:"s10i-10-2", front:"What is cracking and why is it important?",
   back:"Cracking is the process of breaking down long-chain hydrocarbons into shorter, more useful molecules.\n\nWhy it is important:\n• There is less demand for long-chain fractions (e.g. fuel oil)\n• There is more demand for short-chain fractions (e.g. petrol, gases)\n• Cracking produces alkenes, which are needed for making polymers (plastics)\n\nMethods:\n1. Catalytic cracking — uses a hot catalyst (e.g. zeolite) at ~600 °C\n2. Steam cracking — uses high temperature steam (~800 °C)", difficulty:2, category:"concept"},
  {id:"s10fc-10-2-5", islandId:"s10i-10-2", front:"Write an example equation for cracking.",
   back:"Example: cracking decane\n\nC₁₀H₂₂ → C₈H₁₈ + C₂H₄\n(decane → octane + ethene)\n\nThe long-chain alkane is broken into a shorter alkane and an alkene.\n\nCheck: carbons balance (10 = 8 + 2) ✓\nHydrogens balance (22 = 18 + 4) ✓\n\nThe products always include at least one alkene (unsaturated) because there are not enough hydrogen atoms for all products to be alkanes.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-10-1": [
    {q:"Crude oil is best described as:",
     opts:["A pure compound of carbon and hydrogen","A mixture of hydrocarbons","A single type of alkane","A renewable resource"], c:1,
     e:"Crude oil is a complex mixture of many different hydrocarbons — it is not a single compound. It is also a finite (non-renewable) resource because it takes millions of years to form."},
    {q:"In a fractionating column, where do the hydrocarbons with the lowest boiling points collect?",
     opts:["At the bottom","In the middle","At the top","They do not condense at all"], c:2,
     e:"The column is coolest at the top and hottest at the bottom. Hydrocarbons with low boiling points remain as vapour for longest and rise to the top before condensing. Large molecules with high boiling points condense near the bottom."},
    {q:"As the chain length of a hydrocarbon increases, what happens to its viscosity?",
     opts:["It decreases","It stays the same","It increases","It depends on the temperature only"], c:2,
     e:"Longer hydrocarbon chains have stronger intermolecular forces, making the liquid thicker (more viscous). Short-chain hydrocarbons are runny and flow easily; long-chain ones are thick and sticky (e.g. bitumen)."},
    {q:"Why is fractional distillation described as a physical process?",
     opts:["Because it uses heat","Because no new substances are formed — the molecules are separated by boiling point","Because it produces gases","Because it occurs in a laboratory"], c:1,
     e:"Fractional distillation separates the existing hydrocarbons by their different boiling points. No chemical bonds are broken or formed, and no new molecules are created — it is purely a physical separation."},
    {q:"Which fraction of crude oil is used as fuel for jet aircraft?",
     opts:["Petrol","Kerosene","Diesel","Bitumen"], c:1,
     e:"Kerosene is the fraction used as jet fuel (aviation fuel). Petrol is for cars, diesel for lorries and trains, and bitumen for road surfacing."}
  ],
  "s10i-10-2": [
    {q:"What is the general formula for alkanes?",
     opts:["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙHₙ"], c:1,
     e:"Alkanes have the general formula CₙH₂ₙ₊₂ where n is the number of carbon atoms. For example, methane (n=1) is CH₄, ethane (n=2) is C₂H₆. CₙH₂ₙ is the formula for alkenes."},
    {q:"How can you distinguish between an alkane and an alkene using a simple test?",
     opts:["Heat them and observe the flame colour","Add bromine water — it decolourises with an alkene","Dissolve them in water","Measure their boiling points"], c:1,
     e:"Bromine water turns from orange to colourless when shaken with an alkene because bromine adds across the C=C double bond. With an alkane, bromine water stays orange because there is no double bond to react with."},
    {q:"What is cracking used for?",
     opts:["To combine small molecules into larger ones","To break down long-chain hydrocarbons into shorter, more useful ones","To separate crude oil into fractions","To remove sulfur from fuels"], c:1,
     e:"Cracking breaks long-chain hydrocarbons (which are in low demand) into shorter, more useful molecules such as petrol and alkenes for making plastics. It is a chemical process, unlike fractional distillation."},
    {q:"Which of the following is an alkene?",
     opts:["CH₄","C₂H₆","C₂H₄","C₃H₈"], c:2,
     e:"C₂H₄ is ethene — an alkene with the formula CₙH₂ₙ (where n=2: C₂H₂×₂ = C₂H₄). It contains a C=C double bond. CH₄ (methane), C₂H₆ (ethane) and C₃H₈ (propane) are all alkanes."},
    {q:"Cracking always produces at least one alkene because:",
     opts:["Catalysts can only make alkenes","There are not enough hydrogen atoms for all products to be alkanes","Alkenes are less expensive to produce","Alkanes cannot be cracked"], c:1,
     e:"When a long-chain alkane is broken, there are not enough hydrogen atoms for every fragment to be a saturated alkane (CₙH₂ₙ₊₂). At least one product must be an alkene (CₙH₂ₙ), which has fewer hydrogens per carbon."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-10-1': `
<h2>Crude Oil &amp; Fractional Distillation</h2>
<div class="lesson-diagram" data-diagram="separation-techniques"><p class="diagram-caption">Fractional distillation of crude oil</p></div>
<p>Crude oil is one of the world's most important natural resources. It is a finite, non-renewable mixture of hydrocarbons formed over millions of years from the remains of ancient marine organisms. Before crude oil can be used, it must be separated into useful fractions.</p>

<h3>What Are Hydrocarbons?</h3>
<p>Hydrocarbons are molecules containing only carbon and hydrogen atoms. Most hydrocarbons in crude oil are <strong>alkanes</strong> — saturated hydrocarbons with only single bonds between carbon atoms.</p>

<h3>Fractional Distillation</h3>
<p>Crude oil is separated in a <strong>fractionating column</strong>:</p>
<ul>
  <li>The oil is heated until it vaporises</li>
  <li>The vapour enters the column, which is hot at the bottom and cool at the top</li>
  <li>Hydrocarbons condense at the level matching their boiling point</li>
  <li>Short chains (low boiling point) condense near the top</li>
  <li>Long chains (high boiling point) condense near the bottom</li>
</ul>

<h3>Properties and Chain Length</h3>
<p>As chain length increases: boiling point rises, viscosity increases, flammability decreases, and colour darkens. Short-chain hydrocarbons make better fuels because they ignite easily and burn cleanly.</p>

<h3>Worked Example</h3>
<p>Explain why petrol is collected near the top of a fractionating column and bitumen near the bottom.</p>
<p>Petrol contains short-chain hydrocarbons with low boiling points. These remain as vapour for most of the column and condense only near the top where it is coolest. Bitumen contains very long-chain hydrocarbons with very high boiling points. These condense almost immediately near the hot bottom of the column because even the high temperature there is below their boiling point.</p>

<h3>Common Mistake</h3>
<p>Students sometimes describe fractional distillation as a chemical reaction. It is a <em>physical</em> process — the hydrocarbons are separated by their different boiling points. No bonds are broken and no new substances are formed.</p>
`,

's10i-10-2': `
<h2>Alkanes, Alkenes &amp; Cracking</h2>
<p>The two main families of hydrocarbons you study at GCSE are <strong>alkanes</strong> (saturated) and <strong>alkenes</strong> (unsaturated). Cracking is the industrial process that converts less useful long-chain hydrocarbons into more useful shorter ones.</p>

<h3>Alkanes</h3>
<p>Alkanes are <strong>saturated</strong> hydrocarbons — they contain only C&ndash;C single bonds.</p>
<p>General formula: <strong>C<sub>n</sub>H<sub>2n+2</sub></strong></p>
<ul>
  <li>Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀)</li>
</ul>

<h3>Alkenes</h3>
<p>Alkenes are <strong>unsaturated</strong> hydrocarbons — they contain at least one C=C double bond.</p>
<p>General formula: <strong>C<sub>n</sub>H<sub>2n</sub></strong></p>
<ul>
  <li>Ethene (C₂H₄), Propene (C₃H₆), Butene (C₄H₈)</li>
</ul>
<p><strong>Test for unsaturation:</strong> shake with bromine water — it decolourises (turns colourless) if a C=C bond is present.</p>

<h3>Cracking</h3>
<p>Cracking breaks long-chain alkanes into shorter alkanes and alkenes:</p>
<ul>
  <li><strong>Catalytic cracking</strong> — hot catalyst (zeolite), ~600 &deg;C</li>
  <li><strong>Steam cracking</strong> — very high temperature steam, ~800 &deg;C</li>
</ul>
<p>Example: C₁₀H₂₂ &rarr; C₈H₁₈ + C₂H₄</p>

<h3>Worked Example</h3>
<p>Explain why cracking is economically important.</p>
<p>Fractional distillation produces more long-chain fractions than there is demand for, but there is high demand for short-chain fuels (petrol) and alkenes (for making plastics). Cracking converts the surplus long-chain hydrocarbons into these high-demand products, matching supply to demand and increasing the oil company's profit.</p>

<h3>Common Mistake</h3>
<p>Students sometimes confuse fractional distillation with cracking. Fractional distillation is a <em>physical</em> separation (no bonds broken). Cracking is a <em>chemical</em> process — covalent bonds in large molecules are broken to form smaller molecules. Both are essential but serve different purposes.</p>
`

});
