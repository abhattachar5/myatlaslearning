// content/y9/science/islands/t03.js — Year 9 Science Topic 3: Bioenergetics
// Islands s9i-03-1 .. s9i-03-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-03-1 — Photosynthesis
  {id:"s9fc-03-1-1", islandId:"s9i-03-1", front:"Write the word and symbol equations for photosynthesis.",
   back:"Word equation:\ncarbon dioxide + water → glucose + oxygen\n\nSymbol equation:\n6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\nThis is an endothermic reaction — it absorbs light energy, which is transferred to chemical energy stored in glucose.", difficulty:1, category:"definition"},
  {id:"s9fc-03-1-2", islandId:"s9i-03-1", front:"Where in the cell does photosynthesis occur, and what pigment is needed?",
   back:"Photosynthesis takes place in the chloroplasts.\n\nThe green pigment chlorophyll absorbs light energy (mainly red and blue wavelengths; it reflects green, which is why plants appear green).\n\nChloroplasts are found mainly in the palisade mesophyll cells of leaves.", difficulty:1, category:"concept"},
  {id:"s9fc-03-1-3", islandId:"s9i-03-1", front:"What are the three main limiting factors for photosynthesis?",
   back:"1. Light intensity — more light means more energy for the reaction (up to a plateau)\n2. Carbon dioxide concentration — CO₂ is a reactant; more CO₂ increases the rate (up to a plateau)\n3. Temperature — higher temperature speeds up enzyme activity, but above ~45 °C enzymes denature and the rate drops\n\nThe limiting factor is whichever is in shortest supply at any time.", difficulty:2, category:"concept"},
  {id:"s9fc-03-1-4", islandId:"s9i-03-1", front:"On a graph of rate of photosynthesis vs. light intensity, why does the line plateau?",
   back:"At low light levels, light is the limiting factor — increasing it raises the rate.\n\nAt the plateau, light is no longer limiting. Another factor (usually CO₂ concentration or temperature) is now holding back the rate.\n\nTo increase the rate further, you would need to raise the level of the new limiting factor.", difficulty:2, category:"application"},
  {id:"s9fc-03-1-5", islandId:"s9i-03-1", front:"How can a farmer use knowledge of limiting factors to increase crop yield in a greenhouse?",
   back:"A farmer can control the environment to remove limiting factors:\n\n• Artificial lighting or supplementary lamps — increase light intensity\n• CO₂ generators (e.g. burning paraffin heaters) — increase CO₂ concentration\n• Heating — maintain an optimum temperature (~25–30 °C)\n\nHowever, the farmer must balance the cost of these measures against the extra profit from higher yields.", difficulty:2, category:"application"},

  // s9i-03-2 — Aerobic & Anaerobic Respiration
  {id:"s9fc-03-2-1", islandId:"s9i-03-2", front:"Write the word and symbol equations for aerobic respiration.",
   back:"Word equation:\nglucose + oxygen → carbon dioxide + water\n\nSymbol equation:\nC₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O\n\nAerobic respiration is an exothermic reaction — it releases energy. It occurs continuously in the mitochondria of all living cells.", difficulty:1, category:"definition"},
  {id:"s9fc-03-2-2", islandId:"s9i-03-2", front:"What is anaerobic respiration in animals?",
   back:"Anaerobic respiration occurs without oxygen, e.g. during intense exercise when oxygen supply cannot meet demand.\n\nIn animals:\nglucose → lactic acid\n\nIt releases much LESS energy than aerobic respiration because glucose is only partially broken down.\n\nThe build-up of lactic acid causes muscle fatigue and cramp.", difficulty:2, category:"concept"},
  {id:"s9fc-03-2-3", islandId:"s9i-03-2", front:"How does anaerobic respiration in yeast (fermentation) differ from that in animals?",
   back:"In yeast:\nglucose → ethanol + carbon dioxide\n\nIn animals:\nglucose → lactic acid\n\nYeast produces ethanol (alcohol) and CO₂, which is used in brewing and bread-making. Animal cells produce lactic acid instead — they do not produce ethanol.", difficulty:2, category:"concept"},
  {id:"s9fc-03-2-4", islandId:"s9i-03-2", front:"What is oxygen debt?",
   back:"After vigorous exercise, the body continues to breathe heavily. This extra oxygen is used to break down the lactic acid that accumulated during anaerobic respiration.\n\nLactic acid is transported in the blood to the liver, where it is converted back to glucose.\n\nThe amount of extra oxygen needed to remove all the lactic acid is called the oxygen debt.", difficulty:2, category:"concept"},
  {id:"s9fc-03-2-5", islandId:"s9i-03-2", front:"Compare the energy released by aerobic and anaerobic respiration.",
   back:"Aerobic respiration releases MUCH MORE energy per glucose molecule because glucose is completely oxidised to CO₂ and H₂O.\n\nAnaerobic respiration releases far LESS energy because glucose is only partially broken down — the products (lactic acid or ethanol) still contain stored energy.\n\nOrganisms use anaerobic respiration as a short-term backup when oxygen is insufficient.", difficulty:2, category:"concept"},

  // s9i-03-3 — Metabolism Overview
  {id:"s9fc-03-3-1", islandId:"s9i-03-3", front:"Define metabolism.",
   back:"Metabolism is the sum of ALL the chemical reactions that occur in the cells of a living organism.\n\nIt includes both:\n• Catabolic reactions — breaking down larger molecules (e.g. digestion, respiration)\n• Anabolic reactions — building up larger molecules from smaller ones (e.g. protein synthesis, photosynthesis)", difficulty:1, category:"definition"},
  {id:"s9fc-03-3-2", islandId:"s9i-03-3", front:"Give three examples of metabolic reactions in the body.",
   back:"1. Respiration — breaks down glucose to release energy\n2. Protein synthesis — amino acids are joined to form proteins at ribosomes\n3. Lipid synthesis — glycerol and fatty acids are combined to form lipids for cell membranes and energy storage\n\nOther examples: converting glucose to starch (in plants) or glycogen (in animals) for storage.", difficulty:2, category:"application"},
  {id:"s9fc-03-3-3", islandId:"s9i-03-3", front:"How does respiration link to metabolism?",
   back:"Respiration provides the energy needed to drive all other metabolic reactions in the cell.\n\nWithout respiration, there would be no energy for:\n• Active transport\n• Protein synthesis\n• Nerve impulses\n• Muscle contraction\n• Maintaining body temperature\n\nRespiration is therefore central to metabolism.", difficulty:2, category:"concept"},
  {id:"s9fc-03-3-4", islandId:"s9i-03-3", front:"What happens to the glucose produced by photosynthesis in a plant?",
   back:"Plants use glucose in several metabolic reactions:\n\n• Respiration — to release energy\n• Converted to cellulose — for cell walls\n• Converted to starch — for energy storage\n• Converted to amino acids — for protein synthesis (requires nitrate ions from the soil)\n• Converted to lipids — for energy storage in seeds\n• Converted to sucrose — for transport in the phloem", difficulty:2, category:"application"},
  {id:"s9fc-03-3-5", islandId:"s9i-03-3", front:"Why is metabolism faster in organisms with a higher body temperature?",
   back:"Chemical reactions are controlled by enzymes. At higher temperatures (up to the optimum), molecules have more kinetic energy and collide more frequently and with greater force.\n\nThis means enzyme-substrate collisions happen more often, so reactions proceed faster.\n\nAbove the optimum temperature, enzymes begin to denature and the rate drops.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-03-1": [
    {q:"Which of the following is the correct word equation for photosynthesis?",
     opts:["glucose + oxygen → carbon dioxide + water","carbon dioxide + water → glucose + oxygen","glucose + water → carbon dioxide + oxygen","carbon dioxide + oxygen → glucose + water"], c:1,
     e:"Photosynthesis uses carbon dioxide and water as reactants and produces glucose and oxygen. It is the reverse of aerobic respiration in terms of reactants and products."},
    {q:"A student investigates photosynthesis using pondweed. At high light intensity the rate of bubble production stops increasing. What is the most likely reason?",
     opts:["The plant has used up all available water","Another factor such as CO₂ concentration has become limiting","The chloroplasts have been damaged by too much light","The temperature has dropped below zero"], c:1,
     e:"When the rate levels off despite increasing light intensity, light is no longer the limiting factor. The factor now holding back the rate is most likely CO₂ concentration or temperature. Increasing that factor would allow the rate to rise again."},
    {q:"Photosynthesis is described as an endothermic reaction. What does this mean?",
     opts:["It releases heat energy to the surroundings","It absorbs energy from light and stores it as chemical energy in glucose","It does not involve any energy changes","It produces thermal energy as a waste product"], c:1,
     e:"An endothermic reaction absorbs energy from the surroundings. In photosynthesis, light energy is absorbed by chlorophyll and transferred to chemical energy stored in the bonds of glucose molecules."},
    {q:"Where in a plant cell does photosynthesis take place?",
     opts:["Mitochondria","Nucleus","Chloroplasts","Ribosomes"], c:2,
     e:"Photosynthesis occurs in the chloroplasts, which contain the green pigment chlorophyll. Chloroplasts are found mainly in the mesophyll cells of leaves. Mitochondria are the site of respiration, not photosynthesis."},
    {q:"Which substance is the green pigment that absorbs light energy for photosynthesis?",
     opts:["Glucose","Cellulose","Chlorophyll","Haemoglobin"], c:2,
     e:"Chlorophyll is the green pigment found in chloroplasts. It absorbs mainly red and blue wavelengths of light and reflects green, which is why leaves appear green. Without chlorophyll, plants cannot photosynthesise."}
  ],
  "s9i-03-2": [
    {q:"What is the word equation for anaerobic respiration in animals?",
     opts:["glucose → ethanol + carbon dioxide","glucose → lactic acid","glucose + oxygen → carbon dioxide + water","glucose → lactic acid + carbon dioxide"], c:1,
     e:"In animal cells, anaerobic respiration converts glucose to lactic acid only. No carbon dioxide is produced (that happens in yeast fermentation). No oxygen is used — that is the key difference from aerobic respiration."},
    {q:"Why does anaerobic respiration release less energy than aerobic respiration?",
     opts:["Because it uses more glucose","Because oxygen is not available to completely break down glucose","Because lactic acid absorbs the extra energy","Because it only occurs in the lungs"], c:1,
     e:"Without oxygen, glucose is only partially broken down. The product (lactic acid in animals, or ethanol in yeast) still contains chemical energy. Aerobic respiration fully oxidises glucose to CO₂ and H₂O, releasing much more energy per molecule."},
    {q:"After intense exercise, a person continues to breathe heavily. What is this extra oxygen used for?",
     opts:["To repair damaged muscle fibres","To convert lactic acid back to glucose in the liver","To produce more red blood cells","To increase the heart rate"], c:1,
     e:"This extra oxygen is needed to repay the 'oxygen debt'. Lactic acid produced during anaerobic respiration is transported to the liver, where it is broken down using oxygen. The heavy breathing supplies the oxygen needed for this process."},
    {q:"Where in the cell does aerobic respiration take place?",
     opts:["Chloroplasts","Ribosomes","Mitochondria","Nucleus"], c:2,
     e:"Aerobic respiration occurs in the mitochondria. This is why cells with high energy demands (such as muscle cells and sperm cells) contain large numbers of mitochondria. Chloroplasts carry out photosynthesis; ribosomes synthesise proteins."},
    {q:"Yeast is used in bread-making because it produces carbon dioxide during fermentation. What is the other product?",
     opts:["Lactic acid","Ethanol","Oxygen","Glucose"], c:1,
     e:"In yeast, anaerobic respiration (fermentation) produces ethanol and carbon dioxide: glucose → ethanol + CO₂. The CO₂ makes bread rise. The ethanol evaporates during baking. In brewing, the ethanol is the desired product."}
  ],
  "s9i-03-3": [
    {q:"Which of these best defines metabolism?",
     opts:["The breakdown of food in the digestive system","The sum of all chemical reactions in the cells of an organism","The process of converting glucose to energy","The rate at which an organism burns calories"], c:1,
     e:"Metabolism refers to every chemical reaction taking place in the cells of an organism — not just digestion or respiration, but all reactions including protein synthesis, lipid formation, and many others."},
    {q:"A plant converts glucose into cellulose. What type of metabolic reaction is this?",
     opts:["Catabolic — it breaks down large molecules","Anabolic — it builds up a larger molecule from smaller ones","Exothermic — it releases heat","Neither catabolic nor anabolic"], c:1,
     e:"Converting small glucose molecules into large cellulose polymers is an anabolic reaction (building up). Catabolic reactions break down larger molecules into smaller ones. Energy from respiration drives this process."},
    {q:"Why is respiration described as central to metabolism?",
     opts:["It is the only metabolic reaction in the body","It provides the energy needed for all other metabolic reactions","It produces glucose for other reactions","It only occurs during exercise"], c:1,
     e:"Respiration releases energy from glucose. This energy is essential for driving all other metabolic reactions — from active transport to protein synthesis to muscle contraction. Without respiration, metabolism would stop."},
    {q:"A plant absorbs nitrate ions from the soil. Why does the plant need these?",
     opts:["To carry out photosynthesis","To produce cellulose for cell walls","To combine with glucose to make amino acids for protein synthesis","To produce chlorophyll only"], c:2,
     e:"Plants need nitrate ions to make amino acids (and therefore proteins). Glucose from photosynthesis provides the carbon skeleton, and nitrate ions provide the nitrogen. Without nitrates, plants cannot grow properly (they become yellow and stunted)."},
    {q:"Why does a person with a fever have a higher metabolic rate?",
     opts:["Their enzymes are denatured so reactions speed up","Higher body temperature means enzyme-controlled reactions proceed faster up to the optimum","Fever causes the body to stop respiring","White blood cells shut down metabolism during illness"], c:1,
     e:"Higher temperature increases the kinetic energy of molecules, so enzyme-substrate collisions occur more frequently. As long as the temperature stays below the denaturing point, reactions proceed faster — increasing the metabolic rate."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-03-1': `
<h2>Photosynthesis</h2>
<p>Photosynthesis is the process by which plants (and algae) convert light energy into chemical energy stored in glucose. It is one of the most important reactions on Earth — it produces the oxygen we breathe and the food at the base of almost every food chain.</p>

<h3>The Equation</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>carbon dioxide + water &rarr; glucose + oxygen</strong><br>6CO&#8322; + 6H&#8322;O &rarr; C&#8326;H&#8321;&#8322;O&#8326; + 6O&#8322;</p>
<p>This reaction takes place in the <strong>chloroplasts</strong> of plant cells. The green pigment <strong>chlorophyll</strong> absorbs light energy (mainly red and blue wavelengths) and uses it to convert CO&#8322; and water into glucose and oxygen. It is an endothermic reaction.</p>

<h3>Limiting Factors</h3>
<p>The rate of photosynthesis can be limited by three main factors:</p>
<ul>
  <li><strong>Light intensity</strong> — provides the energy to drive the reaction</li>
  <li><strong>CO&#8322; concentration</strong> — a raw material (reactant)</li>
  <li><strong>Temperature</strong> — affects enzyme activity; rate increases with temperature up to about 40&ndash;45 &deg;C, then drops as enzymes denature</li>
</ul>
<p>The <em>limiting factor</em> is whichever factor is in shortest supply at any given time. On a graph, the rate increases with the factor until it reaches a plateau, at which point a different factor has become limiting.</p>

<h3>Worked Example</h3>
<p>A student counts oxygen bubbles from pondweed at different distances from a lamp. At 10 cm the rate is 42 bubbles/min; at 20 cm it is 18 bubbles/min; at 40 cm it is 5 bubbles/min. Explain the pattern.</p>
<p>As the lamp moves further away, light intensity decreases (light intensity is inversely proportional to distance squared). With less light energy available, the rate of photosynthesis decreases, so fewer oxygen bubbles are produced per minute.</p>

<h3>Common Mistake</h3>
<p>Students often write that "the plant needs sunlight to survive" without explaining why. Be specific: light energy is absorbed by chlorophyll and used to drive the endothermic reaction of photosynthesis. Also, do not confuse the photosynthesis equation with respiration — they are essentially the reverse of each other.</p>
`,

's9i-03-2': `
<h2>Aerobic &amp; Anaerobic Respiration</h2>
<p>Respiration is NOT breathing. Respiration is a chemical reaction that occurs in every living cell, releasing energy from glucose. There are two types: aerobic (with oxygen) and anaerobic (without oxygen).</p>

<h3>Aerobic Respiration</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>glucose + oxygen &rarr; carbon dioxide + water</strong><br>C&#8326;H&#8321;&#8322;O&#8326; + 6O&#8322; &rarr; 6CO&#8322; + 6H&#8322;O</p>
<p>Aerobic respiration takes place in the <strong>mitochondria</strong>. It is an exothermic reaction that releases a large amount of energy. This energy is used for movement, active transport, maintaining body temperature, protein synthesis and many other life processes.</p>

<h3>Anaerobic Respiration</h3>
<p>When oxygen supply is insufficient (e.g. during intense exercise), cells switch to anaerobic respiration:</p>
<ul>
  <li><strong>In animals:</strong> glucose &rarr; lactic acid</li>
  <li><strong>In yeast:</strong> glucose &rarr; ethanol + carbon dioxide (fermentation)</li>
</ul>
<p>Anaerobic respiration releases much less energy because glucose is only partially broken down. Lactic acid build-up causes muscle fatigue and pain.</p>

<h3>Oxygen Debt</h3>
<p>After exercise, you continue to breathe heavily to take in extra oxygen. This is the <strong>oxygen debt</strong> — the amount of extra oxygen needed to break down the lactic acid that accumulated during anaerobic respiration. Lactic acid is transported in the blood to the liver, where it is converted back to glucose.</p>

<h3>Worked Example</h3>
<p>Explain why a sprinter breathes heavily for several minutes after finishing a 100 m race.</p>
<p>During the race, muscles respired anaerobically because oxygen could not be delivered fast enough. This produced lactic acid. After the race, extra oxygen is needed to oxidise the lactic acid in the liver (the oxygen debt). Heavy breathing supplies this extra oxygen until all the lactic acid is removed.</p>

<h3>Common Mistake</h3>
<p>Students frequently confuse respiration with breathing. Breathing (ventilation) is the physical movement of air in and out of the lungs. Respiration is a chemical reaction in cells that releases energy. All living cells respire — including plant cells and organisms without lungs.</p>
`,

's9i-03-3': `
<h2>Metabolism Overview</h2>
<p>Metabolism is often thought of as just "burning calories," but it is much broader than that. It refers to the sum of every chemical reaction occurring in the cells of a living organism. Understanding metabolism helps connect all the separate biological processes you have studied.</p>

<h3>What Is Metabolism?</h3>
<p><strong>Metabolism</strong> = the total of all chemical reactions in the body. These include:</p>
<ul>
  <li><strong>Catabolic reactions</strong> — break down large molecules into smaller ones (e.g. respiration breaks glucose into CO&#8322; and H&#8322;O; digestion breaks proteins into amino acids)</li>
  <li><strong>Anabolic reactions</strong> — build larger molecules from smaller ones (e.g. protein synthesis joins amino acids; plants convert glucose to cellulose or starch)</li>
</ul>

<h3>Respiration and Metabolism</h3>
<p>Respiration is the metabolic reaction that provides the energy to drive all others. The energy released from glucose during respiration powers active transport, nerve impulses, muscle contraction, protein synthesis and growth.</p>

<h3>What Happens to Glucose in Plants?</h3>
<ul>
  <li>Used in <strong>respiration</strong> to release energy</li>
  <li>Converted to <strong>cellulose</strong> for cell walls</li>
  <li>Converted to <strong>starch</strong> for energy storage</li>
  <li>Combined with nitrate ions to make <strong>amino acids</strong>, then proteins</li>
  <li>Converted to <strong>lipids</strong> for energy storage in seeds</li>
  <li>Converted to <strong>sucrose</strong> for transport in the phloem</li>
</ul>

<h3>Worked Example</h3>
<p>Explain why a plant deficient in nitrate ions shows poor growth.</p>
<p>Nitrate ions are needed to convert glucose into amino acids. Without sufficient nitrates, the plant cannot produce enough amino acids and therefore cannot synthesise proteins. Since proteins are essential for cell growth and the production of enzymes, the plant grows slowly and its older leaves turn yellow.</p>

<h3>Common Mistake</h3>
<p>Students sometimes think metabolism only refers to respiration or to "metabolic rate" (how fast you use energy). Remember, metabolism includes every reaction in the cell — synthesis reactions (building up) as well as breakdown reactions. If you are asked to "give an example of a metabolic reaction," do not just say respiration — also mention protein synthesis, lipid formation or starch production.</p>
`

});
