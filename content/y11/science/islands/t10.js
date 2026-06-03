// science-y11-t10.js — Year 11 Science Topic 10: Energy: Efficiency & Resources
// Islands: s11i-10-1 .. s11i-10-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-10-1 — Energy Resources
  {id:"s11fc-10-1-1",islandId:"s11i-10-1",front:"Name three renewable and three non-renewable energy resources.",
   back:"Renewable (will not run out):\n1. Solar (sunlight)\n2. Wind\n3. Tidal / wave\n\nNon-renewable (will eventually run out):\n1. Coal\n2. Oil (crude oil)\n3. Natural gas\n\nNuclear fuel (uranium) is also non-renewable.",difficulty:1,category:"definition"},
  {id:"s11fc-10-1-2",islandId:"s11i-10-1",front:"Give two advantages and two disadvantages of wind power.",
   back:"Advantages:\n1. No greenhouse gas emissions during operation.\n2. Free fuel — wind is a renewable source.\n\nDisadvantages:\n1. Intermittent — does not work when there is no wind.\n2. Visual impact — some people consider wind turbines unsightly.",difficulty:2,category:"application"},
  {id:"s11fc-10-1-3",islandId:"s11i-10-1",front:"Why are fossil fuels still widely used despite their environmental impact?",
   back:"Fossil fuels are:\n1. Reliable — available on demand (not weather-dependent).\n2. Energy-dense — produce a large amount of energy per kilogram.\n3. Infrastructure already exists — power stations, pipelines, etc.\n\nHowever, they produce CO₂ (climate change) and are finite.",difficulty:2,category:"concept"},
  {id:"s11fc-10-1-4",islandId:"s11i-10-1",front:"What is the difference between renewable and non-renewable energy resources?",
   back:"Renewable resources are replenished naturally and will not run out on a human timescale (e.g. solar, wind, tidal).\n\nNon-renewable resources exist in finite quantities and will eventually be exhausted (e.g. coal, oil, natural gas, nuclear fuel).",difficulty:1,category:"definition"},
  {id:"s11fc-10-1-5",islandId:"s11i-10-1",front:"Give one advantage and one disadvantage of nuclear power.",
   back:"Advantage: produces no greenhouse gases during operation and generates a large amount of energy from a small amount of fuel.\n\nDisadvantage: produces radioactive waste that remains hazardous for thousands of years and must be stored safely. Risk of catastrophic accidents.",difficulty:2,category:"application"},

  // s11i-10-2 — The National Grid & Efficiency
  {id:"s11fc-10-2-1",islandId:"s11i-10-2",front:"What is the National Grid?",
   back:"The National Grid is the network of pylons, cables and transformers that distributes electricity from power stations to homes and businesses across the country.\n\nIt ensures a reliable supply of electricity to meet varying demand.",difficulty:1,category:"definition"},
  {id:"s11fc-10-2-2",islandId:"s11i-10-2",front:"Why is electricity transmitted at high voltage across the National Grid?",
   back:"High voltage reduces the current (since P = IV, for a given power, higher V means lower I).\n\nLower current reduces energy lost as heat in the cables (since heat loss ∝ I²R).\n\nThis makes transmission much more efficient.",difficulty:2,category:"concept"},
  {id:"s11fc-10-2-3",islandId:"s11i-10-2",front:"What do step-up and step-down transformers do in the National Grid?",
   back:"Step-up transformers (at the power station) increase the voltage from ~25 000 V to ~400 000 V for efficient long-distance transmission.\n\nStep-down transformers (near homes) reduce the voltage back to 230 V for safe domestic use.",difficulty:2,category:"concept"},
  {id:"s11fc-10-2-4",islandId:"s11i-10-2",front:"State the equation for efficiency.",
   back:"Efficiency = useful energy output ÷ total energy input × 100%\n\nor\n\nEfficiency = useful power output ÷ total power input × 100%\n\nEfficiency is always less than 100% because some energy is always wasted (usually as heat).",difficulty:1,category:"calculation"},
  {id:"s11fc-10-2-5",islandId:"s11i-10-2",front:"A light bulb uses 60 J of energy and produces 9 J of light. Calculate its efficiency.",
   back:"Efficiency = (useful output ÷ total input) × 100\n= (9 ÷ 60) × 100 = 15%\n\n85% of the energy is wasted as heat. LED bulbs are much more efficient (around 40–50%).",difficulty:2,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-10-1":[
    {q:"Which of these is a renewable energy resource?",opts:["Coal","Natural gas","Nuclear fuel","Solar"],c:3,e:"Solar energy comes from the Sun and will not run out on a human timescale. Coal, natural gas and nuclear fuel are all finite (non-renewable)."},
    {q:"A disadvantage of solar panels is that they:",opts:["Produce greenhouse gases","Only work when the Sun is shining","Are too heavy to install on roofs","Use up fossil fuels"],c:1,e:"Solar panels depend on sunlight, so they cannot generate electricity at night or on very cloudy days. This intermittency is their main drawback."},
    {q:"Fossil fuels contribute to climate change because:",opts:["They are mined from the ground","Burning them releases CO₂, a greenhouse gas","They are non-renewable","They produce radioactive waste"],c:1,e:"When fossil fuels burn, the carbon they contain combines with oxygen to form CO₂, which is a greenhouse gas. Increased CO₂ enhances the greenhouse effect and drives climate change."},
    {q:"Which energy resource produces radioactive waste?",opts:["Wind","Solar","Nuclear","Tidal"],c:2,e:"Nuclear power stations use uranium as fuel. The fission process produces radioactive waste products that remain hazardous for thousands of years and require careful storage."},
    {q:"Which factor is most important when evaluating an energy resource for a remote island?",opts:["Whether it uses coal","Whether the resource is available locally","Whether it was used in the 1800s","Whether it produces the cheapest electricity"],c:1,e:"A remote island may not have access to fossil fuel supply chains, so locally available resources (wind, solar, tidal) are particularly important for reliable energy supply."}
  ],
  "s11i-10-2":[
    {q:"The National Grid transmits electricity at high voltage to:",opts:["Make it safer for homes","Reduce energy wasted as heat in cables","Increase the current in the wires","Avoid using transformers"],c:1,e:"High voltage means lower current (P=IV). Lower current means less energy lost as heat in the cables (heat ∝ I²R), making transmission more efficient."},
    {q:"A step-up transformer:",opts:["Decreases voltage and increases current","Increases voltage and decreases current","Increases both voltage and current","Has nothing to do with the National Grid"],c:1,e:"A step-up transformer increases voltage (more turns on secondary coil). Since power is conserved (P = IV), increasing V means decreasing I."},
    {q:"A motor has an input of 500 J and a useful output of 350 J. What is its efficiency?",opts:["35%","50%","70%","150%"],c:2,e:"Efficiency = (350/500) × 100 = 70%. The remaining 30% (150 J) is wasted energy, mostly as heat and sound."},
    {q:"Why are transformers needed in the National Grid?",opts:["To generate electricity","To change the voltage for efficient transmission and safe use","To store electricity","To produce renewable energy"],c:1,e:"Step-up transformers increase voltage for efficient long-distance transmission. Step-down transformers reduce voltage to 230 V for safe use in homes and businesses."},
    {q:"An LED bulb and a filament bulb both produce the same amount of light. The LED uses less electrical energy because:",opts:["LEDs are smaller","LEDs are more efficient — less energy is wasted as heat","LEDs run on DC","LEDs do not use electricity"],c:1,e:"LEDs convert a higher proportion of electrical energy into light (useful output) and waste less as heat, making them more efficient than traditional filament bulbs."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-10-1': `
<h2>Energy Resources</h2>
<p>The world needs energy for heating, transport, industry and electricity generation. We must understand the advantages and disadvantages of different <strong>energy resources</strong> to make informed decisions.</p>

<h3>Non-renewable resources</h3>
<p>These exist in finite quantities and will eventually run out:</p>
<ul>
<li><strong>Fossil fuels</strong> (coal, oil, natural gas) — reliable, energy-dense, but produce CO₂ and other pollutants.</li>
<li><strong>Nuclear fuel</strong> (uranium) — generates large amounts of energy with no CO₂ emissions during operation, but produces radioactive waste.</li>
</ul>

<h3>Renewable resources</h3>
<p>These are replenished naturally and will not run out:</p>
<ul>
<li><strong>Solar</strong> — free energy from sunlight; no emissions; intermittent (no sun at night).</li>
<li><strong>Wind</strong> — free fuel; no emissions; intermittent and some visual impact.</li>
<li><strong>Tidal</strong> — reliable (tides are predictable); expensive to build; limited suitable locations.</li>
<li><strong>Hydroelectric</strong> — reliable on-demand power; flooding of valleys destroys habitats.</li>
<li><strong>Geothermal</strong> — uses heat from underground rocks; only available in certain areas.</li>
<li><strong>Biomass/biofuel</strong> — carbon-neutral if replanted; uses land that could grow food.</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> Evaluate the use of wind turbines compared with a gas-fired power station.</p>
<p><strong>A:</strong> Wind turbines produce no greenhouse gases during operation, use a free and renewable fuel, and have low running costs. However, they are intermittent (depend on wind) and have a lower power output per unit. A gas power station can generate electricity on demand, is reliable, and has a high power output, but it burns a finite fossil fuel and produces CO₂, contributing to climate change. A balanced energy strategy uses both.</p>

<h3>Common mistake</h3>
<p>Students say renewable resources have "no disadvantages." All resources have trade-offs — solar and wind are intermittent, tidal barrages are expensive, biomass still produces CO₂ when burned.</p>`,

's11i-10-2': `
<h2>The National Grid &amp; Efficiency</h2>
<p>The <strong>National Grid</strong> is the system of cables, pylons and transformers that delivers electricity from power stations to consumers across the country.</p>

<h3>Why high voltage?</h3>
<p>Electricity is transmitted at very high voltages (up to 400 000 V) to reduce energy losses. Here is why:</p>
<ul>
<li>Power = voltage × current → <strong>P = IV</strong></li>
<li>For a given power, increasing V means decreasing I.</li>
<li>Energy wasted as heat in cables = <strong>I²R</strong> (depends on current squared).</li>
<li>So lower current → much less heat loss → more efficient transmission.</li>
</ul>

<h3>Transformers in the Grid</h3>
<ul>
<li><strong>Step-up transformer</strong> (at the power station): increases voltage from ~25 kV to ~400 kV.</li>
<li><strong>Step-down transformer</strong> (near consumers): decreases voltage to 230 V for safe domestic use.</li>
</ul>

<h3>Efficiency</h3>
<p><strong>Efficiency = (useful energy output ÷ total energy input) × 100%</strong></p>
<p>No device is 100% efficient — some energy is always dissipated (usually as heat). The goal is to <strong>minimise waste</strong>.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A kettle uses 180 000 J of electrical energy to heat water. 162 000 J is transferred to the water. Calculate the efficiency.</p>
<p><strong>A:</strong> Efficiency = (162 000 ÷ 180 000) × 100 = <strong>90%</strong>.<br>
The remaining 10% (18 000 J) is wasted as heat to the surroundings and sound.</p>

<h3>Common mistake</h3>
<p>Students sometimes confuse power and energy. <strong>Power</strong> is the rate of energy transfer (watts = joules per second). <strong>Energy</strong> is the total amount transferred (joules). The efficiency formula works with either, as long as you are consistent.</p>`

});
