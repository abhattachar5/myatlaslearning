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
   back:"Eutrophication:\n\n1. Fertiliser washes into rivers and lakes.\n2. Algae grow rapidly (algal bloom), blocking light.\n3. Plants beneath the surface die.\n4. Bacteria decompose the dead plants, using up dissolved oxygen.\n5. Fish and other aquatic organisms suffocate.",difficulty:2,category:"application"},

  // s11i-04-3 — Life-Cycle Assessment & Recycling
  {id:"s11fc-04-3-1",islandId:"s11i-04-3",front:"What four stages does a life-cycle assessment (LCA) consider?",
   back:"1. Extracting and processing raw materials.\n2. Manufacturing and packaging.\n3. Use (including energy used during the product's lifetime).\n4. Disposal (landfill, incineration or recycling).\n\nAn LCA assesses the environmental impact of a product across its whole life — from cradle to grave.",difficulty:2,category:"definition"},
  {id:"s11fc-04-3-2",islandId:"s11i-04-3",front:"Why is it difficult to make an LCA completely objective?",
   back:"Some impacts cannot easily be given a numerical value — for example, the harm done by a particular pollutant.\n\nThese stages require value judgements, so an LCA can be biased. Companies may also present selective data to make a product look greener (a form of 'greenwashing').",difficulty:2,category:"application"},
  {id:"s11fc-04-3-3",islandId:"s11i-04-3",front:"State the reduce, reuse, recycle hierarchy.",
   back:"1. REDUCE — use fewer resources and less material in the first place.\n2. REUSE — use a product again for the same or a new purpose (e.g. refilling a glass bottle).\n3. RECYCLE — process used materials into new products.\n\nReducing has the greatest benefit; recycling still uses energy, so it comes last.",difficulty:1,category:"concept"},
  {id:"s11fc-04-3-4",islandId:"s11i-04-3",front:"Give three benefits of recycling metals.",
   back:"1. Saves energy — extracting metals from ores uses far more energy than recycling.\n2. Conserves raw materials — finite ores are not used up as quickly.\n3. Reduces waste sent to landfill.\n\nRecycling metals such as aluminium is especially worthwhile because extracting it by electrolysis is very energy-intensive.",difficulty:2,category:"application"},
  {id:"s11fc-04-3-5",islandId:"s11i-04-3",front:"How are glass and plastics recycled?",
   back:"GLASS bottles can be reused, or crushed, melted and remoulded into new glass products.\n\nPLASTICS are sorted by type, then melted and reshaped. Recycling plastics saves crude oil (a finite raw material) and reduces the volume of waste, but different polymers must be separated first.",difficulty:2,category:"concept"},

  // s11i-04-4 — Corrosion & Using Materials
  {id:"s11fc-04-4-1",islandId:"s11i-04-4",front:"What two substances are needed for iron to rust?",
   back:"Iron rusts only when BOTH water and oxygen are present.\n\nRusting is the oxidation of iron to form hydrated iron(III) oxide. If either water or oxygen is removed, rusting cannot occur.",difficulty:1,category:"concept"},
  {id:"s11fc-04-4-2",islandId:"s11i-04-4",front:"How do barrier methods prevent corrosion?",
   back:"Barrier methods stop water and oxygen reaching the metal surface.\n\nExamples: painting, coating with oil or grease, and plating with another metal (e.g. tin or chromium).\n\nThe protection fails if the barrier is scratched, exposing the metal underneath.",difficulty:2,category:"application"},
  {id:"s11fc-04-4-3",islandId:"s11i-04-4",front:"Explain sacrificial protection and galvanising.",
   back:"A more reactive metal (such as zinc) is attached to or coated onto iron. The reactive metal corrodes (is oxidised) in preference to the iron, protecting it — even if the surface is scratched.\n\nGalvanising means coating iron or steel with a layer of zinc, which acts as both a barrier and sacrificial protection.",difficulty:3,category:"concept"},
  {id:"s11fc-04-4-4",islandId:"s11i-04-4",front:"Why are alloys harder than pure metals?",
   back:"A pure metal has layers of identical atoms that can slide over each other easily, so it is soft.\n\nAn alloy contains atoms of different sizes. These distort the regular layers, so the layers cannot slide as easily — making the alloy harder.",difficulty:2,category:"concept"},
  {id:"s11fc-04-4-5",islandId:"s11i-04-4",front:"Briefly describe ceramics, polymers and composites.",
   back:"CERAMICS (e.g. clay pottery, glass) are hard, brittle and resist heat.\n\nPOLYMERS (plastics) are made of long chains; their properties depend on the monomers and reaction conditions.\n\nCOMPOSITES combine two materials — reinforcing fibres or fragments held in a matrix (e.g. fibreglass) — to give useful combined properties.",difficulty:2,category:"definition"}
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
  ],
  "s11i-04-3":[
    {q:"Which of these is NOT one of the four stages of a life-cycle assessment?",opts:["Extracting and processing raw materials","Manufacturing and packaging","The advertising budget for the product","Disposal at the end of life"],c:2,e:"An LCA covers raw materials, manufacturing/packaging, use, and disposal. The advertising budget is a financial cost, not an environmental impact, so it is not part of an LCA."},
    {q:"Why might two LCAs of the same product reach different conclusions?",opts:["LCAs are based on guesswork only","Some impacts are hard to quantify, so value judgements are involved","Environmental impacts never change","Recycling is never included"],c:1,e:"Some impacts, such as the damage caused by a pollutant, cannot easily be given a numerical value. These require value judgements, which can make an LCA subjective or biased."},
    {q:"In the reduce, reuse, recycle hierarchy, which option has the greatest environmental benefit?",opts:["Recycle","Reuse","Reduce","They are all equal"],c:2,e:"Reducing the amount of material used in the first place has the greatest benefit, because it avoids the energy and resources needed to make, reuse or recycle a product at all."},
    {q:"Why does recycling aluminium save so much energy?",opts:["Aluminium is magnetic","Extracting aluminium from its ore by electrolysis is very energy-intensive","Aluminium cannot be melted","Aluminium ore is unlimited"],c:1,e:"Aluminium is extracted by electrolysis, which uses a large amount of electrical energy. Recycling melts existing metal instead, using far less energy and conserving the finite ore."},
    {q:"Recycling metals, glass and plastics helps the environment mainly because it:",opts:["Increases the amount of waste","Uses up more raw materials","Saves energy and conserves raw materials","Makes products more expensive to make"],c:2,e:"Recycling reduces waste sent to landfill, conserves finite raw materials, and usually uses less energy than extracting or making materials from scratch."}
  ],
  "s11i-04-4":[
    {q:"Iron will only rust when which two substances are present?",opts:["Water and carbon dioxide","Oxygen and nitrogen","Water and oxygen","Acid and oxygen"],c:2,e:"Rusting is the oxidation of iron and requires both water and oxygen. Removing either one (e.g. by keeping iron dry or excluding air) prevents rusting."},
    {q:"Painting a steel gate prevents rust because it:",opts:["Makes the iron more reactive","Acts as a barrier, keeping out water and oxygen","Adds zinc to the surface","Turns the iron into an alloy"],c:1,e:"Paint is a barrier method. It stops water and oxygen reaching the iron surface. If the paint is scratched, the exposed iron can begin to rust."},
    {q:"In galvanising, iron is coated with zinc. Why does the iron stay protected even if the coating is scratched?",opts:["Zinc is less reactive than iron, so it is unreactive","Zinc is more reactive, so it corrodes instead of the iron","The scratch seals itself","Zinc repels water completely"],c:1,e:"Zinc is more reactive than iron, so it is oxidised in preference to the iron. This is sacrificial protection — the zinc corrodes instead of the iron, even where the surface is scratched."},
    {q:"Why is an alloy such as steel harder than pure iron?",opts:["Its atoms are all the same size","Different-sized atoms distort the layers so they cannot slide easily","It contains no metal atoms","Alloys are always lighter"],c:1,e:"In a pure metal, identical atoms form regular layers that slide over each other easily. In an alloy, different-sized atoms distort these layers so they cannot slide as easily, making the alloy harder."},
    {q:"Which statement about composites is correct?",opts:["They are made from a single pure element","They combine two materials — reinforcement held in a matrix","They are always ceramics","They cannot be shaped"],c:1,e:"A composite combines two materials: a reinforcement (fibres or fragments) held together in a matrix. Fibreglass, for example, has glass fibres in a polymer matrix, giving useful combined properties."}
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
<p>Students often say the catalyst increases the yield. It does <strong>not</strong> — the catalyst only increases the <strong>rate</strong> at which equilibrium is reached. The equilibrium position (and therefore the yield) stays the same.</p>`,

's11i-04-3': `
<h2>Life-Cycle Assessment &amp; Recycling</h2>
<p>Every product we use has an environmental impact. A <strong>life-cycle assessment (LCA)</strong> helps us measure that impact and decide how to use resources more sustainably.</p>

<h3>The four stages of an LCA</h3>
<p>An LCA follows a product from "cradle to grave":</p>
<ul>
<li><strong>Extracting and processing raw materials</strong> — using land, energy and creating pollution.</li>
<li><strong>Manufacturing and packaging</strong> — energy used and waste produced in the factory.</li>
<li><strong>Use</strong> — energy and resources consumed while the product is in use.</li>
<li><strong>Disposal</strong> — landfill, incineration or recycling at the end of life.</li>
</ul>

<h3>Why LCAs can be biased</h3>
<p>Some impacts are easy to measure (e.g. energy used in kilojoules), but others — such as the damage caused by a particular pollutant — are hard to give a numerical value. These stages need <strong>value judgements</strong>, so an LCA can be subjective. Companies sometimes present selective LCA data to make a product seem greener than it is.</p>

<h3>Reduce, reuse, recycle</h3>
<p>This hierarchy is listed in order of benefit. <strong>Reducing</strong> the amount of material used has the biggest impact. <strong>Reusing</strong> a product (e.g. refilling a glass bottle) avoids making a new one. <strong>Recycling</strong> still uses energy to process materials, so it comes last — but it conserves raw materials and reduces landfill waste.</p>

<h3>Why recycle?</h3>
<p>Recycling metals, glass and plastics <strong>saves energy</strong>, <strong>conserves finite raw materials</strong> and <strong>reduces waste</strong>. Recycling metals is especially valuable because extracting them from ores uses huge amounts of energy.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Suggest why recycling aluminium drinks cans is better than making new aluminium.</p>
<p><strong>A:</strong> Aluminium is extracted from its ore by electrolysis, which uses a large amount of electrical energy. Recycling only melts existing metal, so it uses far less energy, conserves the finite ore and reduces waste sent to landfill.</p>

<h3>Common mistake</h3>
<p>Students often think recycling has no downside. Recycling still <strong>uses energy</strong> (to collect, sort and process materials), which is why <strong>reducing</strong> and <strong>reusing</strong> come first in the hierarchy.</p>`,

's11i-04-4': `
<h2>Corrosion &amp; Using Materials</h2>
<p><strong>Corrosion</strong> is the destruction of a material by reaction with substances in its environment. The most common example is the <strong>rusting</strong> of iron.</p>

<h3>What causes rusting?</h3>
<p>Iron rusts only when <strong>both water and oxygen</strong> are present. Rusting is the oxidation of iron to form hydrated iron(III) oxide. If you remove either water or oxygen, rusting cannot happen.</p>

<h3>Barrier methods</h3>
<p>Barrier methods keep water and oxygen away from the metal surface:</p>
<ul>
<li><strong>Painting</strong> — common on cars, gates and bridges.</li>
<li><strong>Oiling or greasing</strong> — used on moving parts.</li>
<li><strong>Plating</strong> — coating with another metal such as tin or chromium.</li>
</ul>
<p>The drawback is that if the barrier is scratched, the exposed iron can start to rust.</p>

<h3>Sacrificial protection and galvanising</h3>
<p>A <strong>more reactive metal</strong> (such as zinc) is attached to or coated onto the iron. The more reactive metal corrodes <strong>instead of</strong> the iron — even if the surface is scratched. <strong>Galvanising</strong> coats iron or steel with zinc, giving both a barrier and sacrificial protection.</p>

<h3>Why are alloys harder than pure metals?</h3>
<p>A pure metal has layers of identical atoms that slide over each other easily, so it is soft. An <strong>alloy</strong> contains atoms of different sizes, which distort the layers so they cannot slide as easily — making the alloy harder.</p>

<h3>Other materials</h3>
<p><strong>Ceramics</strong> (e.g. glass, clay pottery) are hard, brittle and heat-resistant. <strong>Polymers</strong> are long-chain molecules whose properties depend on the monomers used. <strong>Composites</strong> combine a reinforcement (fibres or fragments) with a matrix to give useful combined properties — for example fibreglass.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Iron railings are coated with zinc. Explain how this protects the iron even if the zinc layer is scratched.</p>
<p><strong>A:</strong> Zinc is more reactive than iron, so it is oxidised in preference to the iron. The zinc corrodes sacrificially, protecting the iron underneath — so the iron does not rust even where the coating is damaged.</p>

<h3>Common mistake</h3>
<p>Students sometimes think a scratched galvanised coating leaves the iron unprotected. With <strong>sacrificial protection</strong> the iron is still protected, because the more reactive zinc continues to corrode in preference to the iron.</p>`

});
