// science-y11-t12.js — Year 11 Science Topic 12: Chemistry Required Practicals
// Islands: s11i-12-1 .. s11i-12-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-12-1 — Chemistry Practicals 1
  {id:"s11fc-12-1-1",islandId:"s11i-12-1",front:"Describe how to make a pure, dry sample of a soluble salt (e.g. copper sulfate).",
   back:"1. Warm dilute sulfuric acid in a beaker.\n2. Add excess copper oxide (insoluble base) and stir — it reacts with the acid.\n3. Filter to remove the excess unreacted copper oxide.\n4. Pour the filtrate (copper sulfate solution) into an evaporating basin.\n5. Heat gently until crystals start to form, then leave to crystallise slowly.\n6. Pat dry with filter paper.",difficulty:2,category:"application"},
  {id:"s11fc-12-1-2",islandId:"s11i-12-1",front:"Why is excess copper oxide added when making copper sulfate?",
   back:"Excess copper oxide ensures all the acid has reacted.\n\nThe excess solid can then be filtered off, leaving a pure copper sulfate solution with no unreacted acid. If acid remained, the crystals would be impure.",difficulty:2,category:"concept"},
  {id:"s11fc-12-1-3",islandId:"s11i-12-1",front:"Describe the electrolysis practical using copper sulfate solution.",
   back:"1. Pour copper sulfate solution into a beaker.\n2. Connect two graphite (carbon) electrodes to a DC power supply.\n3. Switch on and observe.\n4. At the cathode (−): copper is deposited (pink/brown coating).\n5. At the anode (+): oxygen gas is produced (bubbles).\n\nCopper ions are attracted to the negative electrode and gain electrons (reduction).",difficulty:2,category:"application"},
  {id:"s11fc-12-1-4",islandId:"s11i-12-1",front:"How do you measure the temperature change in a neutralisation reaction?",
   back:"1. Measure a set volume of acid in a polystyrene cup (insulated).\n2. Record the starting temperature.\n3. Add alkali gradually, stirring with a thermometer.\n4. Record the highest temperature reached.\n5. Temperature change = highest temperature − starting temperature.\n\nPolystyrene reduces heat loss to the surroundings.",difficulty:2,category:"application"},
  {id:"s11fc-12-1-5",islandId:"s11i-12-1",front:"In the electrolysis of copper sulfate, what happens at the cathode?",
   back:"Copper ions (Cu²⁺) are attracted to the negative cathode.\n\nThey gain two electrons and are deposited as copper metal:\nCu²⁺ + 2e⁻ → Cu\n\nThis is reduction (gain of electrons). A pink/brown layer of copper coats the electrode.",difficulty:2,category:"concept"},

  // s11i-12-2 — Chemistry Practicals 2
  {id:"s11fc-12-2-1",islandId:"s11i-12-2",front:"Describe how to carry out a titration.",
   back:"1. Fill a burette with acid (reading from the bottom of the meniscus).\n2. Pipette a precise volume of alkali into a conical flask.\n3. Add a few drops of indicator (e.g. phenolphthalein or methyl orange).\n4. Slowly add acid from the burette, swirling the flask.\n5. Stop when the indicator changes colour (end point).\n6. Record the volume of acid used. Repeat for concordant results (within 0.10 cm³).",difficulty:2,category:"application"},
  {id:"s11fc-12-2-2",islandId:"s11i-12-2",front:"What are concordant titration results?",
   back:"Concordant results are titre values that are within 0.10 cm³ of each other.\n\nYou discard any anomalous results and calculate the mean of the concordant values. This gives a more accurate and reliable final titre.",difficulty:2,category:"concept"},
  {id:"s11fc-12-2-3",islandId:"s11i-12-2",front:"Describe how to investigate the rate of reaction between marble chips and hydrochloric acid.",
   back:"1. Place marble chips (CaCO₃) on a balance and add dilute HCl.\n2. Record the total mass at regular time intervals (CO₂ escapes, so mass decreases).\n3. Alternatively, collect the CO₂ gas in a gas syringe and record volume over time.\n4. Plot a graph of mass loss (or gas volume) against time.\n\nA steeper initial gradient = faster reaction rate.",difficulty:2,category:"application"},
  {id:"s11fc-12-2-4",islandId:"s11i-12-2",front:"In the rate of reaction practical, what does the gradient of the graph tell you?",
   back:"The gradient of a mass loss vs time (or volume vs time) graph represents the rate of reaction.\n\nA steeper gradient = faster rate.\nWhen the graph levels off (becomes horizontal), the reaction has finished — one reactant has been used up.",difficulty:2,category:"concept"},
  {id:"s11fc-12-2-5",islandId:"s11i-12-2",front:"How do you calculate the Rf value in paper chromatography?",
   back:"Rf = distance moved by substance ÷ distance moved by solvent front\n\nBoth distances are measured from the pencil baseline. The Rf value is unique to each substance in a given solvent and is always between 0 and 1.",difficulty:1,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-12-1":[
    {q:"When making copper sulfate crystals, why is the solution filtered before crystallisation?",opts:["To remove water","To remove excess unreacted copper oxide","To cool the solution","To add more acid"],c:1,e:"Excess copper oxide is added to ensure all the acid reacts. The unreacted solid is then filtered off, leaving a pure copper sulfate solution ready for crystallisation."},
    {q:"In the electrolysis of copper sulfate, what gas is produced at the anode?",opts:["Hydrogen","Chlorine","Oxygen","Carbon dioxide"],c:2,e:"At the anode (positive electrode), water molecules are oxidised to produce oxygen gas (bubbles) and hydrogen ions. Copper ions go to the cathode instead."},
    {q:"Why is a polystyrene cup used in the temperature change practical?",opts:["It is cheaper than glass","It is a good insulator, reducing heat loss","It reacts with the acid","It measures temperature more accurately"],c:1,e:"Polystyrene is an excellent thermal insulator. It minimises heat loss to the surroundings, giving a more accurate measurement of the temperature change from the reaction."},
    {q:"In the electrolysis practical, at which electrode is copper deposited?",opts:["The anode (positive)","The cathode (negative)","Both electrodes","Neither electrode"],c:1,e:"Cu²⁺ ions are positively charged, so they are attracted to the cathode (negative electrode). They gain electrons and are deposited as copper metal: Cu²⁺ + 2e⁻ → Cu."},
    {q:"Why must copper sulfate solution be heated gently (not boiled) during crystallisation?",opts:["Boiling would decompose the crystals","Gentle heating allows slow evaporation and larger, purer crystals","Boiling would create gas","Gentle heating changes the chemical formula"],c:1,e:"Slow evaporation allows well-formed, pure crystals to grow. Rapid boiling could cause spattering, uneven crystallisation or contamination of the product."}
  ],
  "s11i-12-2":[
    {q:"In a titration, what piece of equipment measures the volume of acid added?",opts:["Pipette","Measuring cylinder","Burette","Beaker"],c:2,e:"A burette allows precise measurement and controlled addition of acid. It is read from the bottom of the meniscus and can measure to ±0.05 cm³."},
    {q:"Concordant titration results are those that:",opts:["Are all exactly the same","Are within 0.10 cm³ of each other","Differ by more than 1 cm³","Use different indicators"],c:1,e:"Concordant results are titre values that agree closely (within 0.10 cm³). These are averaged to give an accurate and reliable final result."},
    {q:"In the rate of reaction practical, the graph of gas volume vs time levels off because:",opts:["The gas syringe is broken","One reactant has been completely used up","The temperature increased","The marble chips expanded"],c:1,e:"When one reactant is used up, no more product can form, so the volume of gas stops increasing and the graph becomes horizontal."},
    {q:"How could you increase the rate of reaction between marble chips and acid?",opts:["Use larger marble chips","Use a lower temperature","Use a more concentrated acid","Add more water to the acid"],c:2,e:"Higher concentration means more acid particles per unit volume, leading to more frequent collisions with the marble chips and a faster rate of reaction."},
    {q:"In chromatography, an Rf value of 1.0 would mean:",opts:["The substance did not move","The substance moved the same distance as the solvent front","The substance is insoluble","The experiment failed"],c:1,e:"Rf = 1.0 means the substance moved exactly as far as the solvent front. This indicates it is very soluble in the solvent and has little attraction to the paper."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-12-1': `
<h2>Chemistry Practicals 1</h2>
<p>The AQA Chemistry required practicals test practical skills including preparing salts, carrying out electrolysis and measuring temperature changes.</p>

<h3>Making a pure, dry salt</h3>
<p>To make copper sulfate crystals from copper oxide and sulfuric acid:</p>
<ul>
<li>Warm the acid gently, then add <strong>excess</strong> copper oxide (insoluble base) and stir.</li>
<li><strong>Filter</strong> to remove the unreacted excess solid.</li>
<li>Pour the filtrate into an evaporating basin and heat gently until crystals start to form.</li>
<li>Leave to cool and crystallise. Pat dry with filter paper.</li>
</ul>
<p>Using excess base ensures no unreacted acid remains in the solution.</p>

<h3>Electrolysis of copper sulfate</h3>
<p>Set up two graphite electrodes in copper sulfate solution connected to a DC supply:</p>
<ul>
<li><strong>Cathode (−)</strong>: Cu²⁺ ions gain electrons → copper metal deposited (Cu²⁺ + 2e⁻ → Cu).</li>
<li><strong>Anode (+)</strong>: water is oxidised → oxygen gas produced (bubbles).</li>
</ul>

<h3>Temperature change in neutralisation</h3>
<p>Add alkali to acid in an insulated (polystyrene) cup. Measure the <strong>maximum temperature rise</strong>. The temperature increase shows the reaction is <strong>exothermic</strong>.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A student adds NaOH to HCl in a polystyrene cup. The temperature rises from 21 °C to 28 °C. What is the temperature change?</p>
<p><strong>A:</strong> ΔT = 28 − 21 = <strong>7 °C</strong>. This positive change confirms the neutralisation reaction is exothermic.</p>

<h3>Common mistake</h3>
<p>Students forget to explain <strong>why</strong> excess solid is added when making a salt. It is not just for "more product" — it ensures all the acid reacts so the filtered solution is a pure salt, not a mixture of salt and leftover acid.</p>`,

's11i-12-2': `
<h2>Chemistry Practicals 2</h2>
<p>This section covers <strong>titration</strong>, <strong>rate of reaction</strong> and <strong>chromatography</strong> required practicals.</p>

<h3>Titration</h3>
<p>Titration finds the exact volume of acid needed to neutralise a known volume of alkali (or vice versa):</p>
<ul>
<li>Use a <strong>pipette</strong> to measure the alkali into a conical flask.</li>
<li>Add indicator (phenolphthalein: pink → colourless; methyl orange: yellow → orange/red).</li>
<li>Add acid from a <strong>burette</strong> slowly until the indicator changes colour (end point).</li>
<li>Record the titre (volume of acid added). Repeat until <strong>concordant</strong> results (within 0.10 cm³) are obtained.</li>
</ul>

<h3>Rate of reaction (marble chips + HCl)</h3>
<p>Measure rate by recording <strong>mass loss</strong> (as CO₂ escapes) or <strong>gas volume collected</strong> over time.</p>
<ul>
<li>Plot a graph: steeper gradient = faster rate.</li>
<li>Graph levels off when one reactant is used up.</li>
<li>Factors to investigate: concentration, temperature, surface area, catalyst.</li>
</ul>

<h3>Paper chromatography</h3>
<p>Separate mixtures based on how well each component dissolves in the solvent. Calculate <strong>Rf values</strong> to identify substances: Rf = distance moved by substance ÷ distance moved by solvent.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A student records titration results of 25.30, 25.10, 27.50 and 25.20 cm³. Calculate the mean titre.</p>
<p><strong>A:</strong> Discard 27.50 cm³ (anomalous — not concordant with the others). Mean of concordant values: (25.30 + 25.10 + 25.20) ÷ 3 = <strong>25.20 cm³</strong>.</p>

<h3>Common mistake</h3>
<p>Students include anomalous results in the mean. Always identify and <strong>discard outliers</strong> before averaging. Only concordant values (within 0.10 cm³) should be included.</p>`

});
