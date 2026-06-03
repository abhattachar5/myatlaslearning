// science-y11-t06.js — Year 11 Science Topic 6: Atmospheric Chemistry & Climate
// Islands: s11i-06-1 .. s11i-06-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-06-1 — The Greenhouse Effect & Climate Change
  {id:"s11fc-06-1-1",islandId:"s11i-06-1",front:"What is the greenhouse effect?",
   back:"The greenhouse effect is the natural process by which certain gases in the atmosphere absorb and re-emit infrared radiation from the Earth's surface.\n\nThis keeps the Earth warm enough to support life. Without it, the average temperature would be about −18 °C.",difficulty:1,category:"definition"},
  {id:"s11fc-06-1-2",islandId:"s11i-06-1",front:"Name the three main greenhouse gases.",
   back:"1. Carbon dioxide (CO₂) — from burning fossil fuels and deforestation.\n2. Methane (CH₄) — from agriculture (cattle, rice paddies) and landfill.\n3. Water vapour (H₂O) — the most abundant greenhouse gas, part of the water cycle.",difficulty:1,category:"definition"},
  {id:"s11fc-06-1-3",islandId:"s11i-06-1",front:"How does burning fossil fuels contribute to climate change?",
   back:"Burning fossil fuels releases CO₂ that was locked underground for millions of years.\n\nThis increases the concentration of CO₂ in the atmosphere, enhancing the greenhouse effect and causing average global temperatures to rise.",difficulty:2,category:"concept"},
  {id:"s11fc-06-1-4",islandId:"s11i-06-1",front:"Give two potential consequences of climate change.",
   back:"1. Rising sea levels — due to thermal expansion of oceans and melting of ice caps, causing coastal flooding.\n2. More extreme weather events — droughts, storms and flooding become more frequent and severe.\n\nOther effects: habitat loss, species migration, threats to food security.",difficulty:2,category:"application"},
  {id:"s11fc-06-1-5",islandId:"s11i-06-1",front:"Why is the evidence for human-caused climate change sometimes debated?",
   back:"Most scientists agree that human activity is the main cause, based on strong evidence (rising CO₂ correlates with rising temperature).\n\nHowever, some argue that natural climate cycles exist, data interpretation can vary, and it is difficult to model complex climate systems with absolute certainty. The scientific consensus is nonetheless very clear.",difficulty:3,category:"concept"},

  // s11i-06-2 — Pollutant Gases
  {id:"s11fc-06-2-1",islandId:"s11i-06-2",front:"What is incomplete combustion and what does it produce?",
   back:"Incomplete combustion occurs when a fuel burns with insufficient oxygen.\n\nIt produces: carbon monoxide (CO) — a toxic gas, soot (carbon particles) — causes respiratory problems, and water.\n\nComplete combustion produces CO₂ and water only.",difficulty:2,category:"definition"},
  {id:"s11fc-06-2-2",islandId:"s11i-06-2",front:"Why is carbon monoxide dangerous?",
   back:"Carbon monoxide (CO) is a colourless, odourless gas.\n\nIt binds to haemoglobin in red blood cells more strongly than oxygen, reducing the blood's ability to carry oxygen. This can lead to unconsciousness and death.",difficulty:2,category:"concept"},
  {id:"s11fc-06-2-3",islandId:"s11i-06-2",front:"How is sulfur dioxide (SO₂) formed?",
   back:"Sulfur dioxide forms when fossil fuels containing sulfur impurities are burned:\n\nS + O₂ → SO₂\n\nSO₂ dissolves in rainwater to form sulfurous acid, contributing to acid rain.",difficulty:2,category:"concept"},
  {id:"s11fc-06-2-4",islandId:"s11i-06-2",front:"How are nitrogen oxides (NOₓ) formed in car engines?",
   back:"Nitrogen oxides form when nitrogen and oxygen from the air react at the very high temperatures inside a car engine:\n\nN₂ + O₂ → 2NO\n\nNOₓ gases contribute to acid rain and photochemical smog.",difficulty:2,category:"concept"},
  {id:"s11fc-06-2-5",islandId:"s11i-06-2",front:"What are the effects of acid rain?",
   back:"Acid rain (caused by SO₂ and NOₓ dissolving in rainwater) can:\n\n1. Damage buildings and statues (corrodes limestone and metals)\n2. Kill fish and other aquatic life (lowers lake pH)\n3. Damage trees and soil\n4. Release toxic metal ions from the soil into waterways",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-06-1":[
    {q:"Which gas is the most abundant greenhouse gas in the atmosphere?",opts:["Carbon dioxide","Methane","Water vapour","Nitrogen"],c:2,e:"Water vapour is the most abundant greenhouse gas. However, human activities have the greatest impact on CO₂ and methane levels, which is why these are the focus of climate change discussions."},
    {q:"What does the greenhouse effect do?",opts:["Blocks all radiation from the Sun","Traps infrared radiation re-emitted by the Earth, warming the atmosphere","Cools the Earth's surface","Creates ozone in the stratosphere"],c:1,e:"Greenhouse gases absorb and re-emit infrared radiation from the Earth's surface, preventing it from escaping into space. This warms the lower atmosphere and is essential for life."},
    {q:"Which human activity increases atmospheric CO₂ the most?",opts:["Using nuclear power","Burning fossil fuels","Planting trees","Recycling waste"],c:1,e:"Burning fossil fuels (coal, oil, gas) releases CO₂ that was stored underground for millions of years. This is the largest human contribution to rising atmospheric CO₂."},
    {q:"Rising sea levels are partly caused by:",opts:["Increased evaporation from the oceans","Thermal expansion of ocean water and melting ice caps","Underwater volcanic eruptions","Decreased rainfall over land"],c:1,e:"As global temperature rises, ocean water expands (thermal expansion) and ice caps and glaciers melt, adding water to the oceans. Both contribute to rising sea levels."},
    {q:"Why do most scientists believe climate change is caused by human activity?",opts:["Because it has always been getting warmer","Because CO₂ levels and temperature have risen together since industrialisation","Because the Sun has been getting hotter","Because there is no natural variation in climate"],c:1,e:"The strong correlation between rising CO₂ levels (from burning fossil fuels since the Industrial Revolution) and rising global temperatures provides compelling evidence for a human cause."}
  ],
  "s11i-06-2":[
    {q:"Incomplete combustion of a hydrocarbon fuel produces:",opts:["Carbon dioxide and water only","Carbon monoxide, soot and water","Sulfur dioxide and water","Nitrogen oxides and water"],c:1,e:"With insufficient oxygen, incomplete combustion produces carbon monoxide (CO) and soot (carbon particles) instead of carbon dioxide. Water is still produced."},
    {q:"Why is carbon monoxide particularly dangerous?",opts:["It is visible and smells bad","It explodes easily","It is colourless and odourless, and stops blood carrying oxygen","It dissolves in water to form acid"],c:2,e:"CO is undetectable without special equipment. It binds to haemoglobin more strongly than oxygen, reducing the blood's oxygen-carrying capacity, which can be fatal."},
    {q:"Sulfur dioxide contributes to:",opts:["Global warming","Ozone depletion","Acid rain","Eutrophication"],c:2,e:"SO₂ dissolves in rainwater to form sulfurous acid (and can be oxidised to sulfuric acid), producing acid rain that damages buildings, lakes and vegetation."},
    {q:"Nitrogen oxides (NOₓ) are produced in car engines because:",opts:["The fuel contains nitrogen compounds","Nitrogen and oxygen react at very high temperatures","The catalytic converter creates them","Exhaust fumes mix with rain"],c:1,e:"The extreme temperatures inside an engine cause nitrogen and oxygen from the air to combine, forming nitrogen oxides. These would not normally react at lower temperatures."},
    {q:"Which of these reduces harmful emissions from car exhausts?",opts:["Using leaded petrol","Removing the exhaust pipe","Fitting a catalytic converter","Increasing engine temperature"],c:2,e:"Catalytic converters convert carbon monoxide to carbon dioxide, and nitrogen oxides to nitrogen and oxygen, significantly reducing harmful emissions from vehicles."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-06-1': `
<h2>The Greenhouse Effect &amp; Climate Change</h2>
<p>The Earth's atmosphere acts like a blanket, trapping heat that would otherwise escape into space. This natural process — the <strong>greenhouse effect</strong> — keeps our planet warm enough for life.</p>

<h3>How it works</h3>
<ul>
<li>The Sun emits short-wavelength radiation (visible light), which passes through the atmosphere and warms the Earth's surface.</li>
<li>The warm Earth re-emits longer-wavelength <strong>infrared radiation</strong>.</li>
<li><strong>Greenhouse gases</strong> (CO₂, methane, water vapour) absorb this infrared radiation and re-emit it in all directions — some back towards Earth.</li>
<li>This trapping of energy keeps the Earth warmer than it would otherwise be.</li>
</ul>

<h3>Human impact</h3>
<p>Since the Industrial Revolution, burning fossil fuels has increased atmospheric CO₂ from about 280 ppm to over 420 ppm. Deforestation reduces the number of trees absorbing CO₂. Livestock farming increases methane. These changes <strong>enhance</strong> the greenhouse effect, causing average global temperatures to rise — this is <strong>climate change</strong>.</p>

<h3>Consequences</h3>
<p>Rising temperatures can cause sea-level rise (thermal expansion and melting ice), more frequent extreme weather events, habitat loss, and threats to food security.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why deforestation contributes to rising CO₂ levels.</p>
<p><strong>A:</strong> Trees absorb CO₂ from the atmosphere during photosynthesis. When trees are cut down, fewer trees are available to absorb CO₂, so more remains in the atmosphere. Additionally, if the trees are burned or left to decompose, the carbon stored in them is released back as CO₂.</p>

<h3>Common mistake</h3>
<p>Students confuse the greenhouse effect with the <strong>ozone layer</strong>. The greenhouse effect involves heat-trapping gases in the troposphere. The ozone layer (in the stratosphere) absorbs UV radiation — they are different issues.</p>`,

's11i-06-2': `
<h2>Pollutant Gases</h2>
<p>When fuels burn, they can produce pollutant gases that harm human health and the environment. The pollutants depend on the fuel, the temperature and the amount of oxygen available.</p>

<h3>Complete vs incomplete combustion</h3>
<p><strong>Complete combustion</strong> (plenty of oxygen) produces only CO₂ and water.</p>
<p><strong>Incomplete combustion</strong> (limited oxygen) produces <strong>carbon monoxide (CO)</strong>, <strong>soot (carbon particles)</strong>, and water. Carbon monoxide is toxic — it binds to haemoglobin, preventing oxygen transport in the blood.</p>

<h3>Sulfur dioxide (SO₂)</h3>
<p>Fuels containing sulfur impurities release SO₂ when burned. SO₂ dissolves in rainwater to form <strong>acid rain</strong>, which damages buildings, kills aquatic life and harms vegetation.</p>

<h3>Nitrogen oxides (NOₓ)</h3>
<p>The extreme temperatures inside vehicle engines cause nitrogen and oxygen from the air to react, forming NOₓ. These gases also contribute to <strong>acid rain</strong> and <strong>photochemical smog</strong>, which irritates the lungs.</p>

<h3>Reducing emissions</h3>
<p><strong>Catalytic converters</strong> in car exhausts convert CO to CO₂ and NOₓ to N₂ and O₂. Removing sulfur from fuels before burning them prevents SO₂ formation. Using renewable energy avoids combustion pollutants entirely.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why carbon monoxide is produced in a car engine during heavy traffic.</p>
<p><strong>A:</strong> In heavy traffic, the engine may not receive enough air (oxygen) for complete combustion of the fuel. Incomplete combustion produces carbon monoxide instead of carbon dioxide. CO is colourless and odourless, making it especially dangerous.</p>

<h3>Common mistake</h3>
<p>Students often say that CO₂ is a pollutant in the same sense as CO. While excess CO₂ contributes to climate change, it is a natural product of complete combustion and is not directly toxic at normal concentrations. Carbon monoxide is the toxic gas.</p>`

});
