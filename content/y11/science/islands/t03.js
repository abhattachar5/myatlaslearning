// science-y11-t03.js — Year 11 Science Topic 3: Ecology: Populations & Sustainability
// Islands: s11i-03-1 .. s11i-03-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-03-1 — Trophic Levels & Biomass
  {id:"s11fc-03-1-1",islandId:"s11i-03-1",front:"What is a trophic level?",
   back:"A trophic level is the position an organism occupies in a food chain.\n\nLevel 1: Producers (plants)\nLevel 2: Primary consumers (herbivores)\nLevel 3: Secondary consumers (carnivores)\nLevel 4: Tertiary consumers (top predators)",difficulty:1,category:"definition"},
  {id:"s11fc-03-1-2",islandId:"s11i-03-1",front:"Why does a pyramid of biomass get smaller at each level?",
   back:"At each trophic level, energy (and therefore biomass) is lost:\n\n• Through respiration (life processes)\n• In excretory materials (urine, faeces)\n• In parts not eaten (bones, roots)\n\nOnly about 10% of biomass is passed to the next level.",difficulty:2,category:"concept"},
  {id:"s11fc-03-1-3",islandId:"s11i-03-1",front:"How do you calculate the efficiency of energy transfer between trophic levels?",
   back:"Efficiency = (energy transferred to next level ÷ energy available at current level) × 100%\n\nExample: if a plant stores 10 000 kJ and a herbivore gains 1 200 kJ, efficiency = (1200 ÷ 10000) × 100 = 12%.",difficulty:2,category:"calculation"},
  {id:"s11fc-03-1-4",islandId:"s11i-03-1",front:"What is the source of energy for almost all food chains?",
   back:"The Sun.\n\nProducers (mainly plants and algae) absorb light energy and convert it to chemical energy by photosynthesis. This energy is then passed along the food chain when organisms are eaten.",difficulty:1,category:"concept"},
  {id:"s11fc-03-1-5",islandId:"s11i-03-1",front:"What is biomass?",
   back:"Biomass is the total mass of living material in an organism or at a trophic level.\n\nIt is usually measured as dry mass (in grams or kilograms) to remove the variable of water content.",difficulty:1,category:"definition"},

  // s11i-03-2 — Food Security & Farming
  {id:"s11fc-03-2-1",islandId:"s11i-03-2",front:"What is food security?",
   back:"Food security means having enough food to feed a population at all times.\n\nThreats include: rising population, climate change, new pests and diseases, conflict, and the cost of farming.",difficulty:1,category:"definition"},
  {id:"s11fc-03-2-2",islandId:"s11i-03-2",front:"How does intensive farming increase food production?",
   back:"Intensive farming maximises yield from the land by:\n\n• Using pesticides and herbicides\n• Adding fertilisers\n• Keeping animals indoors (factory farming) to reduce energy loss\n• Selective breeding for high-yield varieties",difficulty:2,category:"concept"},
  {id:"s11fc-03-2-3",islandId:"s11i-03-2",front:"Give one advantage and one disadvantage of using GM crops.",
   back:"Advantage: crops can be engineered to be pest-resistant or drought-tolerant, increasing yield without extra pesticides.\n\nDisadvantage: concerns about unknown long-term health effects and the impact on wild plant populations through cross-pollination.",difficulty:2,category:"application"},
  {id:"s11fc-03-2-4",islandId:"s11i-03-2",front:"Why does keeping animals warm in factory farms increase efficiency?",
   back:"When animals are kept warm, they use less energy from food for maintaining body temperature through respiration.\n\nMore of the energy from their food is converted into biomass (meat), increasing the efficiency of energy transfer.",difficulty:2,category:"application"},
  {id:"s11fc-03-2-5",islandId:"s11i-03-2",front:"What is sustainable fishing?",
   back:"Sustainable fishing means catching fish at a rate that allows populations to replenish naturally.\n\nMethods include: fishing quotas, net size regulations (to allow young fish to escape), and fish farming (aquaculture) to reduce pressure on wild stocks.",difficulty:1,category:"definition"},

  // s11i-03-3 — Water & Carbon Cycles
  {id:"s11fc-03-3-1",islandId:"s11i-03-3",front:"Describe the main stages of the water cycle.",
   back:"1. Evaporation — water from oceans and lakes turns to vapour.\n2. Transpiration — water vapour released from plant leaves.\n3. Condensation — vapour cools and forms clouds.\n4. Precipitation — water falls as rain, snow, etc.\n5. Collection — water flows into rivers, lakes and oceans.",difficulty:1,category:"concept"},
  {id:"s11fc-03-3-2",islandId:"s11i-03-3",front:"How does carbon enter living organisms?",
   back:"Carbon enters food chains through photosynthesis:\n\nPlants absorb CO₂ from the air and convert it to glucose (organic molecules). Animals obtain carbon by eating plants (or other animals).",difficulty:1,category:"concept"},
  {id:"s11fc-03-3-3",islandId:"s11i-03-3",front:"How is carbon returned to the atmosphere?",
   back:"Carbon is returned to the atmosphere by:\n\n• Respiration (all living organisms release CO₂)\n• Combustion (burning fossil fuels or wood)\n• Decomposition (microorganisms break down dead material, releasing CO₂)",difficulty:2,category:"concept"},
  {id:"s11fc-03-3-4",islandId:"s11i-03-3",front:"What role do decomposers play in nutrient cycling?",
   back:"Decomposers (bacteria and fungi) break down dead organisms and waste products.\n\nThis releases minerals and nutrients back into the soil, where they can be taken up by plants. Without decomposition, nutrients would be locked in dead matter.",difficulty:2,category:"concept"},
  {id:"s11fc-03-3-5",islandId:"s11i-03-3",front:"What factors affect the rate of decomposition?",
   back:"Decomposition is faster when:\n\n• Temperature is warm (enzymes work faster)\n• Moisture is available (decomposers need water)\n• Oxygen is present (aerobic respiration is more efficient)\n\nCold, dry or anaerobic conditions slow decomposition.",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-03-1":[
    {q:"A plant stores 50 000 kJ of energy. A herbivore eating the plant gains 5 000 kJ. What is the efficiency of energy transfer?",opts:["5%","10%","15%","50%"],c:1,e:"Efficiency = (5000 ÷ 50000) × 100 = 10%. This is typical — about 10% of energy is transferred between trophic levels."},
    {q:"Why are food chains rarely longer than five trophic levels?",opts:["There are not enough species","Too much energy is lost at each level to support further levels","Predators refuse to eat other predators","Plants cannot produce enough oxygen"],c:1,e:"At each level roughly 90% of energy is lost (respiration, waste, uneaten parts). By the fourth or fifth level, there is too little energy left to sustain another population."},
    {q:"What is the original source of energy for most ecosystems?",opts:["Soil nutrients","The Sun","Water","Decomposers"],c:1,e:"Producers use light energy from the Sun in photosynthesis to convert CO₂ and water into glucose. This chemical energy is then transferred through the food chain."},
    {q:"A pyramid of biomass is always wider at the base because:",opts:["Producers are always physically larger","There is more total biomass at lower trophic levels","Consumers weigh more than producers","The Sun adds mass to producers"],c:1,e:"Energy is lost at each trophic level, so less biomass can be supported at higher levels. The base (producers) always has the greatest total biomass."},
    {q:"Which of these is NOT a reason energy is lost between trophic levels?",opts:["Respiration","Movement","Photosynthesis","Excretion"],c:2,e:"Photosynthesis is how energy enters the food chain — it does not cause energy loss between levels. Respiration, movement and excretion all use or lose energy."}
  ],
  "s11i-03-2":[
    {q:"Which of these threatens global food security?",opts:["Increased rainfall in the UK","Rising global population","Planting more trees","Using renewable energy"],c:1,e:"A rising global population means more mouths to feed, putting pressure on food production. This is a major threat to food security."},
    {q:"Factory-farmed chickens are kept warm and have restricted movement. Why?",opts:["To make the meat taste better","To reduce energy lost through respiration and movement","To prevent disease spreading","To save space for farmers"],c:1,e:"When animals are warm and still, they respire less energy for thermoregulation and movement. More of the energy from their food goes into growth (biomass), increasing efficiency."},
    {q:"What is a disadvantage of using chemical pesticides?",opts:["They are too expensive","They can harm beneficial organisms and accumulate in food chains","They make crops grow too fast","They only work on GM crops"],c:1,e:"Pesticides can kill helpful insects (like pollinators) and can bioaccumulate through food chains, harming organisms at higher trophic levels."},
    {q:"Sustainable fishing involves all of the following EXCEPT:",opts:["Setting fishing quotas","Using nets with minimum mesh sizes","Banning all fishing permanently","Monitoring fish populations"],c:2,e:"Sustainable fishing aims to balance catch with natural replenishment — not to ban fishing entirely. Quotas, appropriate net sizes and population monitoring are all part of sustainable management."},
    {q:"Which technology could increase food security by making crops resistant to drought?",opts:["Cloning","Genetic modification (GM)","Distillation","Chromatography"],c:1,e:"Genetic modification can insert genes for drought tolerance into crop plants, allowing them to grow in drier conditions and helping to secure food supplies."}
  ],
  "s11i-03-3":[
    {q:"Which process removes carbon dioxide from the atmosphere?",opts:["Respiration","Combustion","Photosynthesis","Decomposition"],c:2,e:"Photosynthesis absorbs CO₂ from the atmosphere and converts it into glucose. Respiration, combustion and decomposition all release CO₂ back into the atmosphere."},
    {q:"Decomposition is slowest in which conditions?",opts:["Warm and moist","Cold and dry","Warm and oxygenated","Hot and humid"],c:1,e:"Decomposer enzymes work slowly in cold conditions and need water to function. Cold, dry environments (e.g. deserts, frozen tundra) have the slowest decomposition rates."},
    {q:"What is the role of transpiration in the water cycle?",opts:["It causes rain to fall","It releases water vapour from plant leaves","It filters water in the soil","It condenses water in the atmosphere"],c:1,e:"Transpiration is the loss of water vapour from the surface of plant leaves through stomata. This water enters the atmosphere and contributes to cloud formation."},
    {q:"How is carbon stored in fossil fuels?",opts:["Plants photosynthesise fossil fuels directly","Dead organisms were buried and compressed over millions of years","Carbon from the atmosphere dissolves into rocks","Animals excrete carbon into the ground"],c:1,e:"Millions of years ago, dead plants and animals were buried under layers of sediment. Over time, heat and pressure converted them into fossil fuels (coal, oil, gas), locking in the carbon."},
    {q:"Which of these is a greenhouse gas released during decomposition?",opts:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],c:2,e:"Decomposers carry out respiration as they break down dead material, releasing carbon dioxide (and sometimes methane in anaerobic conditions) into the atmosphere."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-03-1': `
<h2>Trophic Levels &amp; Biomass</h2>
<div class="lesson-diagram" data-diagram="food-web"><p class="diagram-caption">Trophic levels in a food web</p></div>
<p>Energy flows through an ecosystem along <strong>food chains</strong>. Each step in the chain is called a <strong>trophic level</strong>.</p>

<h3>Trophic levels</h3>
<ul>
<li><strong>Level 1 — Producers</strong> (plants and algae): make their own food by photosynthesis.</li>
<li><strong>Level 2 — Primary consumers</strong> (herbivores): eat producers.</li>
<li><strong>Level 3 — Secondary consumers</strong> (carnivores): eat primary consumers.</li>
<li><strong>Level 4 — Tertiary consumers</strong> (top predators): eat secondary consumers.</li>
</ul>

<h3>Pyramids of biomass</h3>
<p><strong>Biomass</strong> is the total dry mass of living material. A pyramid of biomass shows the biomass at each trophic level. It is always widest at the base (producers) because energy — and therefore biomass — is lost at every level through respiration, excretion and uneaten parts.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Grass stores 80 000 kJ of energy. Rabbits eating the grass gain 8 000 kJ. Calculate the efficiency of energy transfer.</p>
<p><strong>A:</strong> Efficiency = (energy transferred ÷ energy available) × 100<br>
= (8 000 ÷ 80 000) × 100 = <strong>10%</strong>.</p>

<h3>Common mistake</h3>
<p>Students sometimes draw a pyramid of <em>numbers</em> and expect it to look like a pyramid of <em>biomass</em>. A single oak tree can support thousands of insects, so a pyramid of numbers can be inverted — but a pyramid of biomass almost never is.</p>`,

's11i-03-2': `
<h2>Food Security &amp; Farming</h2>
<p><strong>Food security</strong> means having enough nutritious food available to feed a population at all times. Threats to food security include rising population, changing climate, new crop diseases, conflict and poverty.</p>

<h3>Intensive farming</h3>
<p>Intensive farming techniques aim to maximise food production from available land:</p>
<ul>
<li><strong>Pesticides and herbicides</strong> reduce losses to pests and weeds.</li>
<li><strong>Fertilisers</strong> replace soil minerals used up by crops.</li>
<li><strong>Factory farming</strong> keeps animals warm and restricts movement to reduce energy lost through respiration, increasing growth rate.</li>
</ul>

<h3>Biotechnology</h3>
<p><strong>Genetic modification (GM)</strong> can produce crops that resist pests or tolerate drought. <strong>Fish farming (aquaculture)</strong> reduces pressure on wild fish stocks. Both methods are part of the effort to increase global food production sustainably.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why factory-farmed chickens convert more of their food into body mass than free-range chickens.</p>
<p><strong>A:</strong> Factory-farmed chickens are kept in warm, enclosed spaces and cannot move freely. They therefore lose less energy through respiration for thermoregulation and movement. A greater proportion of energy from their food is transferred to biomass (growth), making them more efficient at converting feed into meat.</p>

<h3>Common mistake</h3>
<p>Students often confuse efficiency with ethics. In an exam, if asked to "evaluate" factory farming, remember to include <strong>both</strong> the efficiency benefit and the ethical or environmental concerns (animal welfare, antibiotic resistance, pollution).</p>`,

's11i-03-3': `
<h2>Water &amp; Carbon Cycles</h2>
<div class="lesson-diagram" data-diagram="water-cycle"><p class="diagram-caption">The water cycle</p></div>
<p>Materials are constantly recycled through ecosystems. The <strong>water cycle</strong> and the <strong>carbon cycle</strong> are two key examples.</p>

<h3>The water cycle</h3>
<ul>
<li><strong>Evaporation</strong> — heat from the Sun turns liquid water (from oceans, lakes, rivers) into water vapour.</li>
<li><strong>Transpiration</strong> — plants release water vapour from their leaves.</li>
<li><strong>Condensation</strong> — water vapour cools at altitude and condenses into tiny droplets, forming clouds.</li>
<li><strong>Precipitation</strong> — water falls as rain, snow or hail.</li>
<li><strong>Collection</strong> — water flows through rivers and soil back into lakes and oceans.</li>
</ul>

<h3>The carbon cycle</h3>
<p>Carbon enters living things through <strong>photosynthesis</strong> (plants absorb CO₂) and is returned to the atmosphere through <strong>respiration</strong>, <strong>combustion</strong> and <strong>decomposition</strong>.</p>

<h3>Decomposition</h3>
<p>Decomposers (bacteria and fungi) break down dead organisms, releasing minerals back into the soil and CO₂ back into the air. The rate of decomposition depends on <strong>temperature</strong>, <strong>moisture</strong> and <strong>oxygen</strong> availability.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why burning fossil fuels increases atmospheric CO₂ levels.</p>
<p><strong>A:</strong> Fossil fuels contain carbon that was locked away millions of years ago. Burning them releases this carbon as CO₂ back into the atmosphere. Because this adds "ancient" carbon that was not part of the recent carbon cycle, the overall concentration of CO₂ in the atmosphere increases.</p>

<h3>Common mistake</h3>
<p>Students forget that <strong>all living organisms</strong> respire — including plants. Plants carry out photosynthesis <em>and</em> respiration. During the day, photosynthesis usually exceeds respiration, so the net effect is CO₂ absorption.</p>`

});
