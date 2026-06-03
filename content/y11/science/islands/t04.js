// science-y11-t04.js — Year 11 Science Topic 4: Using Resources Sustainably
// Islands: s11i-04-1 .. s11i-04-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-04-1 — Water Treatment & Sustainability
  {id:"s11fc-04-1-1",islandId:"s11i-04-1",front:"What is the difference between pure water and potable water?",
   back:"Pure water contains only H₂O molecules — nothing else.\n\nPotable water is safe to drink. It may contain dissolved minerals and salts but has had harmful microorganisms and pollutants removed. Potable water is NOT chemically pure.",difficulty:1,category:"definition"},
  {id:"s11fc-04-1-2",islandId:"s11i-04-1",front:"Describe the main stages of producing potable water from fresh water.",
   back:"1. Sedimentation — large particles settle out.\n2. Filtration — water passes through sand and gravel beds to remove fine particles.\n3. Sterilisation — chlorine, ozone or UV light kills remaining microorganisms.\n\nThe water is then safe to drink.",difficulty:2,category:"concept"},
  {id:"s11fc-04-1-3",islandId:"s11i-04-1",front:"Why is desalination expensive?",
   back:"Desalination removes salt from seawater to make it potable. The two main methods — distillation and reverse osmosis — both require large amounts of energy.\n\nDistillation needs heat energy to boil the water; reverse osmosis needs high pressure to force water through membranes.",difficulty:2,category:"application"},
  {id:"s11fc-04-1-4",islandId:"s11i-04-1",front:"What is a life-cycle assessment (LCA)?",
   back:"An LCA evaluates the environmental impact of a product at every stage of its life:\n\n1. Extracting raw materials\n2. Manufacturing\n3. Use (including energy consumption)\n4. Disposal (landfill, recycling, incineration)\n\nIt helps compare the true environmental cost of different products.",difficulty:2,category:"definition"},
  {id:"s11fc-04-1-5",islandId:"s11i-04-1",front:"Give one limitation of life-cycle assessments.",
   back:"LCAs can be biased because some data (e.g. the value of pollutant damage) is subjective and hard to quantify.\n\nCompanies may also selectively present LCA data to make their product appear more environmentally friendly than it really is.",difficulty:2,category:"application"},

  // s11i-04-2 — The Haber Process & Fertilisers
  {id:"s11fc-04-2-1",islandId:"s11i-04-2",front:"Write the balanced equation for the Haber process.",
   back:"N₂(g) + 3H₂(g) ⇌ 2NH₃(g)\n\nNitrogen from the air reacts with hydrogen (from natural gas) to form ammonia. The reaction is reversible (⇌).",difficulty:2,category:"definition"},
  {id:"s11fc-04-2-2",islandId:"s11i-04-2",front:"State the conditions used in the Haber process and explain why they are a compromise.",
   back:"Temperature: ~450 °C\nPressure: ~200 atm\nCatalyst: iron\n\nA lower temperature would give a higher yield but the reaction would be too slow. A higher pressure would give a higher yield but is expensive and dangerous. The conditions are a compromise between yield and rate.",difficulty:3,category:"concept"},
  {id:"s11fc-04-2-3",islandId:"s11i-04-2",front:"What is ammonia used for?",
   back:"Ammonia is mainly used to make nitrogen-based fertilisers (e.g. ammonium nitrate).\n\nIt is also used to make nitric acid, explosives, cleaning products and some plastics (nylon).",difficulty:1,category:"application"},
  {id:"s11fc-04-2-4",islandId:"s11i-04-2",front:"Why are fertilisers important for food production?",
   back:"Fertilisers replace essential minerals (nitrogen, phosphorus, potassium — NPK) that crops remove from the soil.\n\nWithout fertilisers, soils become depleted and crop yields fall, threatening food security for a growing population.",difficulty:1,category:"concept"},
  {id:"s11fc-04-2-5",islandId:"s11i-04-2",front:"What environmental problem can fertilisers cause if they enter waterways?",
   back:"Eutrophication:\n\n1. Fertiliser washes into rivers and lakes.\n2. Algae grow rapidly (algal bloom), blocking light.\n3. Plants beneath the surface die.\n4. Bacteria decompose the dead plants, using up dissolved oxygen.\n5. Fish and other aquatic organisms suffocate.",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-04-1":[
    {q:"Which of the following is true about potable water?",opts:["It is chemically pure","It contains no dissolved substances","It is safe to drink","It must be distilled"],c:2,e:"Potable water is safe to drink but is not chemically pure — it still contains dissolved minerals. Distillation is only used for desalination, not for all potable water."},
    {q:"During water treatment, what is the purpose of adding chlorine?",opts:["To improve the taste","To remove dissolved salts","To kill microorganisms","To settle out particles"],c:2,e:"Chlorine is a sterilising agent. It kills harmful bacteria and other microorganisms in the water, making it safe to drink."},
    {q:"Why is desalination not widely used in the UK?",opts:["The UK has no coastline","There is plenty of fresh water from rain","Desalination equipment has not been invented yet","Salt water is too polluted to treat"],c:1,e:"The UK receives plenty of rainfall, so fresh water sources (rivers, reservoirs) are available. Desalination is mainly used in dry countries with limited fresh water."},
    {q:"An LCA for a plastic bag would include all of these EXCEPT:",opts:["Energy used in manufacturing","Oil extracted for raw materials","The colour preference of the customer","CO₂ emissions from transport"],c:2,e:"An LCA covers environmental impacts at each stage (raw materials, manufacture, use, disposal). Customer colour preference is a personal choice, not an environmental impact."},
    {q:"Which step in water treatment removes large solid particles?",opts:["Sterilisation","Chlorination","Sedimentation","Distillation"],c:2,e:"Sedimentation allows large particles to settle to the bottom of a tank under gravity. Filtration then removes smaller particles, and sterilisation kills microorganisms."}
  ],
  "s11i-04-2":[
    {q:"What is the balanced equation for the Haber process?",opts:["N₂ + 2H₂ → 2NH₃","N₂ + 3H₂ ⇌ 2NH₃","2N₂ + 3H₂ ⇌ 2NH₃","N₂ + H₂ ⇌ NH₃"],c:1,e:"The correct equation is N₂ + 3H₂ ⇌ 2NH₃. The ⇌ symbol shows the reaction is reversible. You need three moles of H₂ for every mole of N₂."},
    {q:"Why is an iron catalyst used in the Haber process?",opts:["To increase the yield of ammonia","To increase the rate of reaction without being used up","To decrease the pressure needed","To make the reaction exothermic"],c:1,e:"A catalyst speeds up the reaction by providing an alternative pathway with a lower activation energy. It does not change the yield or the equilibrium position — it just helps equilibrium be reached faster."},
    {q:"What happens to ammonia yield if the pressure is increased?",opts:["It decreases","It stays the same","It increases","The reaction stops"],c:2,e:"There are 4 moles of gas on the left (1 N₂ + 3 H₂) and 2 moles on the right (2 NH₃). Increasing pressure shifts equilibrium towards the side with fewer moles of gas — so yield of ammonia increases."},
    {q:"Eutrophication is caused by:",opts:["Acid rain falling on lakes","Excess fertiliser entering waterways","Deforestation near rivers","Oil spills in the ocean"],c:1,e:"When excess fertiliser washes into water, it promotes rapid algal growth. The algae block light, plants die, and decomposing bacteria use up oxygen — killing aquatic life."},
    {q:"The Haber process uses a temperature of about 450 °C. Why not use a lower temperature?",opts:["A lower temperature would produce too much ammonia","A lower temperature would make the reaction too slow","A lower temperature would decompose the catalyst","A lower temperature is not possible industrially"],c:1,e:"The forward reaction is exothermic, so a lower temperature would increase the equilibrium yield. However, the rate would be unacceptably slow, so 450 °C is a compromise between yield and rate."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-04-1': `
<h2>Water Treatment &amp; Sustainability</h2>
<p>Water is essential for life, but it must be treated before it is safe to drink. Understanding how we obtain <strong>potable water</strong> and assess environmental impact helps us use resources more sustainably.</p>

<h3>Potable water vs pure water</h3>
<p><strong>Pure water</strong> contains only water molecules. <strong>Potable water</strong> is not chemically pure — it contains dissolved minerals — but it has low levels of microorganisms and dissolved substances, making it safe to drink.</p>

<h3>Treating fresh water</h3>
<ul>
<li><strong>Sedimentation</strong> — large particles settle out in tanks.</li>
<li><strong>Filtration</strong> — water passes through sand and gravel beds to remove finer particles.</li>
<li><strong>Sterilisation</strong> — chlorine, ozone or UV light destroys remaining microorganisms.</li>
</ul>

<h3>Desalination</h3>
<p>In areas with limited fresh water, seawater can be treated by <strong>distillation</strong> (boiling and condensing) or <strong>reverse osmosis</strong> (forcing water through a membrane). Both require a lot of energy, making them expensive.</p>

<h3>Life-cycle assessments (LCAs)</h3>
<p>An LCA evaluates the environmental impact of a product from cradle to grave: raw material extraction → manufacturing → use → disposal. LCAs are useful but can be <strong>subjective</strong> — some impacts are difficult to quantify.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Suggest why a company might use an LCA to compare paper cups and ceramic mugs.</p>
<p><strong>A:</strong> The LCA would compare the total environmental impact of each option: the energy and raw materials needed to make them, emissions during manufacture, how many times each can be used, and what happens at disposal. Paper cups have a lower manufacturing impact but are single-use; a ceramic mug uses more energy to make but lasts for years.</p>

<h3>Common mistake</h3>
<p>Students often write that potable water is "pure." It is not — it still contains dissolved minerals. In chemistry, pure means <strong>only one substance</strong>.</p>`,

's11i-04-2': `
<h2>The Haber Process &amp; Fertilisers</h2>
<p>The <strong>Haber process</strong> is one of the most important industrial chemical reactions. It produces ammonia, which is vital for making fertilisers that support global food production.</p>

<h3>The reaction</h3>
<p><strong>N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</strong></p>
<ul>
<li>Nitrogen is obtained from the air.</li>
<li>Hydrogen is obtained from natural gas (methane) or by cracking hydrocarbons.</li>
<li>The reaction is <strong>reversible</strong> — ammonia constantly breaks back down into N₂ and H₂.</li>
</ul>

<h3>Compromise conditions</h3>
<p>The industrial conditions balance yield and rate:</p>
<ul>
<li><strong>Temperature: ~450 °C</strong> — lower would raise yield (reaction is exothermic) but the rate would be too slow.</li>
<li><strong>Pressure: ~200 atmospheres</strong> — higher pressure favours the forward reaction (fewer moles of gas on the right) but very high pressures are expensive and hazardous.</li>
<li><strong>Iron catalyst</strong> — speeds up the reaction without changing the equilibrium position.</li>
</ul>
<p>Unreacted nitrogen and hydrogen are recycled back into the reactor.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why increasing the pressure increases the yield of ammonia.</p>
<p><strong>A:</strong> The left side of the equation has 4 moles of gas (1 N₂ + 3 H₂) and the right side has 2 moles (2 NH₃). Increasing the pressure shifts the equilibrium towards the side with fewer moles of gas (the right), so more ammonia is produced.</p>

<h3>Common mistake</h3>
<p>Students often say the catalyst increases the yield. It does <strong>not</strong> — the catalyst only increases the <strong>rate</strong> at which equilibrium is reached. The equilibrium position (and therefore the yield) stays the same.</p>`

});
