// content/y9/science/islands/t04.js — Year 9 Science Topic 4: Ecology & Ecosystems
// Islands s9i-04-1 .. s9i-04-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-04-1 — Ecosystems & Sampling
  {id:"s9fc-04-1-1", islandId:"s9i-04-1", front:"Define: population, community, ecosystem and habitat.",
   back:"Population — all the organisms of one species living in an area\nCommunity — all the populations of different species in an area\nEcosystem — a community of organisms plus their non-living (abiotic) environment, all interacting together\nHabitat — the place where an organism lives", difficulty:1, category:"definition"},
  {id:"s9fc-04-1-2", islandId:"s9i-04-1", front:"What is the difference between abiotic and biotic factors?",
   back:"Abiotic factors are non-living: temperature, light intensity, moisture, soil pH, wind speed, CO₂ concentration.\n\nBiotic factors are living: predation, competition, disease, food availability.\n\nBoth abiotic and biotic factors affect the distribution and abundance of organisms.", difficulty:1, category:"concept"},
  {id:"s9fc-04-1-3", islandId:"s9i-04-1", front:"How do you use a quadrat to estimate population size?",
   back:"1. Measure the total area of the study site\n2. Place quadrats randomly (use random number coordinates to avoid bias)\n3. Count the organisms in each quadrat\n4. Calculate the mean count per quadrat\n5. Scale up: estimated population = mean per quadrat × (total area ÷ quadrat area)\n\nMore quadrats = more reliable estimate.", difficulty:2, category:"application"},
  {id:"s9fc-04-1-4", islandId:"s9i-04-1", front:"When would you use a transect instead of random quadrats?",
   back:"Use a transect when you want to study how the distribution of organisms changes across an area — for example, from a pond edge to drier ground, or across a path.\n\nMethod: lay a tape measure across the area and place quadrats at regular intervals along it. Record species and abundance at each point.\n\nThis shows a pattern of change, whereas random quadrats estimate total population.", difficulty:2, category:"application"},
  {id:"s9fc-04-1-5", islandId:"s9i-04-1", front:"A student places 10 quadrats (each 0.5 m²) in a field measuring 400 m² and counts a mean of 6 daisies per quadrat. Estimate the total daisy population.",
   back:"Estimated population = mean per quadrat × (total area ÷ quadrat area)\n= 6 × (400 ÷ 0.5)\n= 6 × 800\n= 4800 daisies\n\nAlways show the formula and your working.", difficulty:2, category:"calculation"},

  // s9i-04-2 — Food Webs & Interdependence
  {id:"s9fc-04-2-1", islandId:"s9i-04-2", front:"What is the difference between a food chain and a food web?",
   back:"A food chain shows a single linear feeding relationship: producer → primary consumer → secondary consumer → tertiary consumer.\n\nA food web shows all the interconnected food chains in an ecosystem. It is more realistic because most organisms eat more than one type of food.\n\nArrows show the direction of energy flow (from prey to predator).", difficulty:1, category:"definition"},
  {id:"s9fc-04-2-2", islandId:"s9i-04-2", front:"What happens to the population of foxes if rabbits decline sharply?",
   back:"If rabbits (a major food source for foxes) decline:\n\n1. Foxes have less food → some starve or fail to reproduce\n2. Fox population decreases\n3. With fewer foxes, predation pressure on rabbits decreases\n4. Rabbit population may eventually recover\n\nThis is an example of interdependence — organisms in an ecosystem depend on each other.", difficulty:2, category:"application"},
  {id:"s9fc-04-2-3", islandId:"s9i-04-2", front:"What is competition and why does it matter in an ecosystem?",
   back:"Competition occurs when organisms require the same limited resource.\n\nIntraspecific competition: between members of the same species (e.g. two oak trees competing for light)\nInterspecific competition: between different species (e.g. foxes and hawks both hunting voles)\n\nCompetition limits population size because not every organism gets enough resources to survive and reproduce.", difficulty:2, category:"concept"},
  {id:"s9fc-04-2-4", islandId:"s9i-04-2", front:"What resources do animals and plants compete for?",
   back:"Animals compete for: food, water, territory, mates.\n\nPlants compete for: light, water, mineral ions, space.\n\nOrganisms that compete most successfully are more likely to survive and reproduce.", difficulty:1, category:"concept"},
  {id:"s9fc-04-2-5", islandId:"s9i-04-2", front:"Explain what 'interdependence' means in ecology.",
   back:"Interdependence means that all organisms in an ecosystem depend on each other, either directly or indirectly.\n\nExamples:\n• Bees pollinate flowers while collecting nectar — both benefit (mutualism)\n• Predators depend on prey for food; prey populations are kept in check by predators\n• Decomposers recycle nutrients that plants need to grow\n\nRemoving one species can have knock-on effects throughout the ecosystem.", difficulty:2, category:"concept"},

  // s9i-04-3 — Carbon Cycle & Human Impact
  {id:"s9fc-04-3-1", islandId:"s9i-04-3", front:"Describe the main stages of the carbon cycle.",
   back:"1. Photosynthesis — plants absorb CO₂ from the air and convert it to glucose\n2. Respiration — all organisms release CO₂ back into the air\n3. Feeding — carbon passes along food chains when organisms eat each other\n4. Death and decomposition — decomposers break down dead matter, releasing CO₂\n5. Combustion — burning fossil fuels releases stored carbon as CO₂\n\nCarbon is constantly recycled between the atmosphere and living organisms.", difficulty:2, category:"concept"},
  {id:"s9fc-04-3-2", islandId:"s9i-04-3", front:"How does deforestation affect biodiversity and CO₂ levels?",
   back:"Deforestation:\n• Destroys habitats → species lose their home → biodiversity decreases\n• Removes trees that absorb CO₂ by photosynthesis → less CO₂ is removed from the atmosphere\n• Dead wood may be burned → releases stored carbon as CO₂\n\nOverall: deforestation contributes to rising atmospheric CO₂ and climate change, while also reducing biodiversity.", difficulty:2, category:"application"},
  {id:"s9fc-04-3-3", islandId:"s9i-04-3", front:"What is the greenhouse effect and why is enhanced greenhouse effect a concern?",
   back:"The natural greenhouse effect: greenhouse gases (CO₂, methane, water vapour) in the atmosphere absorb and re-emit infrared radiation from the Earth, keeping the planet warm enough for life.\n\nThe enhanced greenhouse effect: human activities (burning fossil fuels, deforestation, agriculture) are increasing greenhouse gas levels, trapping more heat and causing global temperatures to rise — this is global warming.\n\nConsequences include ice cap melting, sea-level rise, extreme weather and habitat loss.", difficulty:2, category:"concept"},
  {id:"s9fc-04-3-4", islandId:"s9i-04-3", front:"What is peat and why should peat bogs be conserved?",
   back:"Peat is partially decomposed plant material that forms in waterlogged, acidic conditions (peat bogs).\n\nPeat bogs store huge amounts of carbon. When peat is drained or burned:\n• Decomposition speeds up → CO₂ is released\n• Burning releases stored carbon directly\n\nConserving peat bogs keeps carbon locked away and protects unique habitats for specialised species.", difficulty:2, category:"application"},
  {id:"s9fc-04-3-5", islandId:"s9i-04-3", front:"Name three conservation strategies to maintain biodiversity.",
   back:"1. Protected areas — nature reserves and national parks where habitats are safeguarded\n2. Breeding programmes — captive breeding of endangered species and reintroduction to the wild\n3. Seed banks — storing seeds of rare plant species to prevent extinction\n\nOther strategies: habitat restoration, legal protection (e.g. banning hunting), reducing pollution, reforestation.", difficulty:1, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-04-1": [
    {q:"A student places 8 quadrats (each 1 m²) in a 600 m² meadow and finds a mean of 5 buttercups per quadrat. What is the estimated population?",
     opts:["40","3000","600","75"], c:1,
     e:"Estimated population = mean per quadrat × (total area ÷ quadrat area) = 5 × (600 ÷ 1) = 5 × 600 = 3000 buttercups."},
    {q:"Which of these is an abiotic factor?",
     opts:["Predation","Disease","Temperature","Competition"], c:2,
     e:"Temperature is a non-living (abiotic) factor. Predation, disease and competition are all biotic (living) factors because they involve interactions between organisms."},
    {q:"Why should quadrats be placed randomly rather than in chosen locations?",
     opts:["To make the experiment faster","To avoid bias and ensure results are representative","To ensure every organism is counted","Random placement is required for safety reasons"], c:1,
     e:"Placing quadrats randomly avoids bias — the experimenter cannot consciously or unconsciously choose areas with more or fewer organisms. This makes the sample representative of the whole area."},
    {q:"When would a transect be more useful than randomly placed quadrats?",
     opts:["When studying how species distribution changes across an environmental gradient","When estimating the total population of a single species","When there are too many species to count","When the study area is very small"], c:0,
     e:"A transect is used to show how the distribution of organisms changes along a line — for example, from a shoreline inland, or from shade to sunlight. Random quadrats are better for estimating total population size across a uniform area."},
    {q:"All the rabbits living in a field make up a:",
     opts:["Community","Ecosystem","Population","Habitat"], c:2,
     e:"A population is all the individuals of one species living in a particular area. All the rabbits in one field = one population. A community includes all the different species; an ecosystem includes the community plus the abiotic environment."}
  ],
  "s9i-04-2": [
    {q:"In a food web, arrows point from:",
     opts:["Predator to prey","Prey to predator, showing the direction of energy flow","Large organisms to small organisms","Producers to decomposers only"], c:1,
     e:"Arrows in a food web show the direction of energy transfer — from the organism being eaten (prey) to the one eating it (predator). For example: grass → rabbit means energy flows from grass to rabbit."},
    {q:"If a disease kills most of the rabbits in a grassland ecosystem, what is the likely short-term effect on the grass?",
     opts:["Grass population decreases because rabbits help it grow","Grass population increases because there is less grazing","Grass is unaffected because it does not depend on rabbits","Grass dies because rabbits spread its seeds"], c:1,
     e:"With fewer rabbits grazing, the grass experiences less herbivory. It can grow more freely, so the grass population increases. This is an example of interdependence — changes in one species affect others."},
    {q:"Two species of bird both eat the same type of seed. This is an example of:",
     opts:["Mutualism","Predation","Interspecific competition","Intraspecific competition"], c:2,
     e:"When two different species compete for the same resource, it is interspecific competition (inter = between species). If two birds of the same species competed, it would be intraspecific competition (intra = within a species)."},
    {q:"Which resources do plants typically compete for?",
     opts:["Food, mates and territory","Light, water, mineral ions and space","Oxygen and carbon dioxide only","Heat and predators"], c:1,
     e:"Plants compete for light (needed for photosynthesis), water (for transport and reactions), mineral ions (for growth) and space (to spread roots and leaves). They do not hunt for food or compete for mates."},
    {q:"What does 'interdependence' mean in an ecosystem?",
     opts:["Every organism lives independently","All organisms depend on each other directly or indirectly","Only predators and prey are connected","Plants and animals never interact"], c:1,
     e:"Interdependence means organisms rely on one another. Predators need prey; plants need pollinators; decomposers recycle nutrients for producers. Removing one species can have cascading effects throughout the ecosystem."}
  ],
  "s9i-04-3": [
    {q:"Which process removes carbon dioxide from the atmosphere?",
     opts:["Respiration","Combustion","Photosynthesis","Decomposition"], c:2,
     e:"Photosynthesis absorbs CO₂ from the atmosphere and converts it into glucose. Respiration, combustion and decomposition all release CO₂ back into the atmosphere."},
    {q:"How does burning fossil fuels contribute to climate change?",
     opts:["It removes oxygen from the atmosphere","It releases stored carbon as CO₂, increasing the greenhouse effect","It cools the atmosphere by releasing water vapour","It reduces the ozone layer"], c:1,
     e:"Fossil fuels contain carbon that was locked away millions of years ago. Burning them releases this carbon as CO₂, which increases the concentration of greenhouse gases in the atmosphere, enhancing the greenhouse effect and contributing to global warming."},
    {q:"Why is the destruction of peat bogs an environmental concern?",
     opts:["Peat bogs attract too many tourists","Draining and burning peat releases large amounts of stored carbon as CO₂","Peat bogs cause flooding in nearby areas","Peat is needed to make electricity"], c:1,
     e:"Peat bogs are enormous carbon stores. When they are drained, the peat decomposes and releases CO₂. When peat is burned (for fuel or to clear land), the carbon is released even more quickly. This contributes significantly to atmospheric CO₂ levels."},
    {q:"Which of the following is a strategy to maintain biodiversity?",
     opts:["Building more roads through forests","Establishing nature reserves and protected areas","Increasing the use of pesticides","Draining wetlands for agriculture"], c:1,
     e:"Nature reserves and protected areas safeguard habitats from destruction, allowing species to thrive. Building roads, using more pesticides and draining wetlands all reduce biodiversity."},
    {q:"In the carbon cycle, how does carbon pass from plants to animals?",
     opts:["Through respiration","Through photosynthesis","Through feeding — animals eat plants","Through decomposition"], c:2,
     e:"Carbon enters plants via photosynthesis (CO₂ → glucose). When animals eat plants, the carbon in glucose and other organic molecules is transferred to the animal. Respiration then releases some of this carbon back to the atmosphere as CO₂."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-04-1': `
<h2>Ecosystems &amp; Sampling</h2>
<p>Ecology is the study of how organisms interact with each other and with their environment. To study these interactions scientifically, you need to know the key terminology and practical sampling techniques used in fieldwork.</p>

<h3>Key Terms</h3>
<ul>
  <li><strong>Habitat</strong> — the place where an organism lives (e.g. a pond, a woodland)</li>
  <li><strong>Population</strong> — all the organisms of one species in an area</li>
  <li><strong>Community</strong> — all the populations of different species in an area</li>
  <li><strong>Ecosystem</strong> — a community plus the abiotic (non-living) environment, all interacting</li>
</ul>
<p>Factors that affect organisms can be <strong>abiotic</strong> (temperature, light, moisture, pH) or <strong>biotic</strong> (predation, competition, disease).</p>

<h3>Sampling with Quadrats</h3>
<p>Quadrats are square frames (often 0.25 m² or 1 m²) placed on the ground to count organisms. To estimate a population:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Estimated population = mean count per quadrat &times; (total area &divide; quadrat area)</strong></p>
<p>Place quadrats <strong>randomly</strong> to avoid bias. Use random number generators to select coordinates.</p>

<h3>Worked Example</h3>
<p>A student places 10 quadrats (each 0.5 m&sup2;) in a 500 m&sup2; field and counts a mean of 4 dandelions per quadrat. Estimate the population.</p>
<p>Estimated population = 4 &times; (500 &divide; 0.5) = 4 &times; 1000 = <strong>4000 dandelions</strong></p>

<h3>Common Mistake</h3>
<p>Students often forget to check units when calculating population estimates. The quadrat area and the total area must be in the same units (usually m&sup2;). Also remember that random sampling does not mean throwing the quadrat carelessly — it means using a systematic method (like random number tables) to remove bias.</p>
`,

's9i-04-2': `
<h2>Food Webs &amp; Interdependence</h2>
<p>All organisms in an ecosystem are connected through feeding relationships. Understanding food webs and how species depend on one another is essential for predicting what happens when populations change.</p>

<h3>Food Chains and Food Webs</h3>
<p>A food chain shows a single pathway of energy transfer: <strong>producer &rarr; primary consumer &rarr; secondary consumer &rarr; tertiary consumer</strong>. A food web links many food chains together and gives a more complete picture of feeding relationships in an ecosystem. Arrows always show the direction of energy flow — from the organism being eaten to the one eating it.</p>

<h3>Interdependence</h3>
<p>Organisms in an ecosystem depend on each other:</p>
<ul>
  <li>Predators depend on prey for food</li>
  <li>Prey populations are controlled by predators</li>
  <li>Plants depend on pollinators (such as bees) for reproduction</li>
  <li>Decomposers recycle nutrients that plants need to grow</li>
</ul>
<p>If one species is removed or its numbers change dramatically, there are knock-on effects throughout the food web.</p>

<h3>Worked Example</h3>
<p>In a food web: grass &rarr; rabbit &rarr; fox. A disease kills most of the rabbits. Predict the short-term effect on (a) grass and (b) foxes.</p>
<p>(a) Grass population increases because there is less grazing by rabbits.</p>
<p>(b) Fox population decreases because their main food source has declined — some foxes starve or fail to reproduce.</p>

<h3>Common Mistake</h3>
<p>Students often predict effects only one step along the food chain. In exam questions, you may need to trace the impact through multiple levels. For example, if rabbits decline, foxes decline too — but then the prey of foxes other than rabbits might increase because there are fewer foxes eating them. Always think about the wider web.</p>
`,

's9i-04-3': `
<h2>Carbon Cycle &amp; Human Impact</h2>
<p>Carbon is one of the most important elements for life. It cycles continuously between the atmosphere, living organisms, the oceans and the ground. Human activities are disrupting this cycle, with significant consequences for the planet.</p>

<h3>The Carbon Cycle</h3>
<ul>
  <li><strong>Photosynthesis</strong> removes CO&#8322; from the atmosphere &rarr; carbon is stored in plant biomass (glucose, starch, cellulose)</li>
  <li><strong>Feeding</strong> passes carbon along food chains</li>
  <li><strong>Respiration</strong> (by all living organisms) returns CO&#8322; to the atmosphere</li>
  <li><strong>Death and decomposition</strong> &mdash; decomposers (bacteria and fungi) break down dead matter, releasing CO&#8322; through respiration</li>
  <li><strong>Combustion</strong> of fossil fuels and wood releases stored carbon as CO&#8322;</li>
</ul>
<p>Carbon is also stored long-term in fossil fuels (coal, oil, gas), limestone rocks, and ocean sediments.</p>

<h3>Human Impact on Biodiversity</h3>
<ul>
  <li><strong>Deforestation</strong> &mdash; destroys habitats, reduces photosynthesis, releases stored carbon</li>
  <li><strong>Burning fossil fuels</strong> &mdash; increases atmospheric CO&#8322;, enhances the greenhouse effect</li>
  <li><strong>Peat destruction</strong> &mdash; draining or burning peat bogs releases massive carbon stores</li>
  <li><strong>Pollution</strong> &mdash; damages ecosystems (e.g. fertiliser run-off causes eutrophication)</li>
</ul>

<h3>Worked Example</h3>
<p>Explain how deforestation increases atmospheric CO&#8322; levels.</p>
<p>Trees absorb CO&#8322; from the atmosphere during photosynthesis. When forests are cut down, fewer trees means less CO&#8322; is absorbed. If the wood is burned, the carbon stored in the trees is released directly as CO&#8322;. Even if the wood is left to rot, decomposers respire and release CO&#8322;. Both effects increase atmospheric CO&#8322; levels.</p>

<h3>Common Mistake</h3>
<p>When describing the carbon cycle, students often forget that <em>all</em> organisms respire &mdash; including plants. Plants photosynthesise AND respire. During the day, they typically absorb more CO&#8322; than they release (net uptake). At night, they only respire, releasing CO&#8322;. Also, do not confuse the greenhouse effect (natural and beneficial) with the <em>enhanced</em> greenhouse effect (caused by human activities and problematic).</p>
`

});
