// content/y10/science/islands/t01.js — Year 10 Science Topic 1: Organisation & the Digestive System
// Islands s10i-01-1 .. s10i-01-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-01-1 — Enzymes & Digestion
  {id:"s10fc-01-1-1", islandId:"s10i-01-1", front:"What is an enzyme and how does it work?",
   back:"An enzyme is a biological catalyst — a protein that speeds up chemical reactions without being used up.\n\nEnzymes work by the lock-and-key model:\n• The substrate fits into the enzyme's active site (like a key fits a lock)\n• An enzyme–substrate complex forms\n• The reaction occurs and products are released\n• The enzyme is unchanged and can be reused", difficulty:1, category:"definition"},
  {id:"s10fc-01-1-2", islandId:"s10i-01-1", front:"How does temperature affect enzyme activity?",
   back:"• As temperature rises, enzyme activity increases because molecules move faster and collide more often with the substrate\n• At the optimum temperature (about 37 °C for human enzymes) activity is at its peak\n• Above the optimum, the active site changes shape (the enzyme is denatured) and the substrate can no longer fit\n• Denaturation is permanent — cooling the enzyme does not restore it", difficulty:2, category:"concept"},
  {id:"s10fc-01-1-3", islandId:"s10i-01-1", front:"Name the three main digestive enzymes and what they break down.",
   back:"1. Amylase — breaks down starch into maltose (a sugar)\n   Produced in: salivary glands, pancreas, small intestine\n\n2. Protease — breaks down proteins into amino acids\n   Produced in: stomach (pepsin), pancreas, small intestine\n\n3. Lipase — breaks down lipids (fats) into glycerol and fatty acids\n   Produced in: pancreas, small intestine", difficulty:1, category:"definition"},
  {id:"s10fc-01-1-4", islandId:"s10i-01-1", front:"What is the role of bile in digestion?",
   back:"Bile is produced by the liver and stored in the gallbladder.\n\nIt has two key roles:\n1. Emulsifies fats — breaks large fat droplets into smaller droplets, increasing the surface area for lipase to act on\n2. Neutralises stomach acid — bile is alkaline, so it raises the pH in the small intestine to the optimum for intestinal enzymes", difficulty:2, category:"concept"},
  {id:"s10fc-01-1-5", islandId:"s10i-01-1", front:"Why does pepsin work best in acidic conditions?",
   back:"Pepsin is a protease produced in the stomach. Its active site is shaped to work best at about pH 2.\n\nThe stomach lining produces hydrochloric acid, which:\n• Provides the low pH that pepsin needs\n• Kills most bacteria that enter with food\n\nIf the pH is too high, pepsin's active site changes shape and it cannot catalyse protein digestion.", difficulty:2, category:"application"},

  // s10i-01-2 — The Digestive System
  {id:"s10fc-01-2-1", islandId:"s10i-01-2", front:"List the main organs of the digestive system in order.",
   back:"1. Mouth — mechanical digestion (teeth) and chemical digestion (salivary amylase)\n2. Oesophagus — pushes food to the stomach by peristalsis\n3. Stomach — churns food; produces acid and pepsin\n4. Liver — produces bile\n5. Pancreas — produces amylase, protease and lipase\n6. Small intestine — completes digestion; absorbs nutrients through villi\n7. Large intestine — reabsorbs water\n8. Rectum — stores faeces before egestion", difficulty:1, category:"definition"},
  {id:"s10fc-01-2-2", islandId:"s10i-01-2", front:"How are villi adapted for efficient absorption?",
   back:"Villi are tiny finger-like projections lining the small intestine:\n\n• Large surface area — millions of villi increase the area for absorption\n• Thin walls (one cell thick) — short diffusion distance\n• Rich blood supply — maintains a steep concentration gradient for diffusion\n• Lacteals — absorb fatty acids and glycerol into the lymph", difficulty:2, category:"concept"},
  {id:"s10fc-01-2-3", islandId:"s10i-01-2", front:"What is peristalsis?",
   back:"Peristalsis is the rhythmic contraction and relaxation of muscles in the walls of the digestive tract.\n\nCircular muscles behind the food contract, pushing the food forward. Muscles ahead of the food relax to allow it through.\n\nThis wave-like action moves food from the oesophagus all the way through the intestines without the need for gravity.", difficulty:1, category:"definition"},
  {id:"s10fc-01-2-4", islandId:"s10i-01-2", front:"What happens in the stomach during digestion?",
   back:"The stomach carries out both mechanical and chemical digestion:\n\n• Muscular walls churn and squeeze food, mixing it with digestive juices to form chyme\n• Glandular tissue produces pepsin (a protease) to break down proteins\n• Glandular tissue also produces hydrochloric acid (pH ~2) which kills bacteria and provides the optimum pH for pepsin\n• The thick muscular walls keep food in the stomach for several hours", difficulty:2, category:"concept"},
  {id:"s10fc-01-2-5", islandId:"s10i-01-2", front:"What is the difference between mechanical and chemical digestion?",
   back:"Mechanical digestion: physically breaking food into smaller pieces (e.g. teeth chewing, stomach churning). This increases the surface area for enzymes to act on.\n\nChemical digestion: enzymes break down large insoluble molecules into small soluble ones that can be absorbed into the blood.\n\nBoth types work together to make digestion efficient.", difficulty:1, category:"concept"},

  // s10i-01-3 — Food Tests & Practical Skills
  {id:"s10fc-01-3-1", islandId:"s10i-01-3", front:"Describe the test for starch.",
   back:"Reagent: iodine solution\n\nMethod: add a few drops of iodine solution to the food sample\n\nPositive result: colour changes from brown/orange to blue-black\n\nNegative result: stays brown/orange\n\nThis is a straightforward colour-change test — no heating is required.", difficulty:1, category:"application"},
  {id:"s10fc-01-3-2", islandId:"s10i-01-3", front:"Describe the Benedict's test for reducing sugars.",
   back:"Reagent: Benedict's solution (blue)\n\nMethod:\n1. Add Benedict's solution to the food sample\n2. Heat in a water bath at about 75 °C for 5 minutes\n\nPositive result: colour changes from blue → green → yellow → orange → brick red (depending on sugar concentration)\n\nNegative result: stays blue\n\nThe more sugar present, the further the colour progresses towards brick red.", difficulty:2, category:"application"},
  {id:"s10fc-01-3-3", islandId:"s10i-01-3", front:"Describe the Biuret test for protein.",
   back:"Reagents: sodium hydroxide (NaOH) and copper sulfate (CuSO₄) — or Biuret reagent which contains both\n\nMethod: add sodium hydroxide to the sample, then add a few drops of copper sulfate and mix gently\n\nPositive result: colour changes from blue to purple/lilac\n\nNegative result: stays blue\n\nNo heating is required for this test.", difficulty:2, category:"application"},
  {id:"s10fc-01-3-4", islandId:"s10i-01-3", front:"Describe the test for lipids (fats and oils).",
   back:"Reagent: Sudan III stain\n\nMethod:\n1. Add the food sample to a test tube with water\n2. Add a few drops of Sudan III stain\n3. Shake gently\n\nPositive result: a red/orange layer forms on top of the liquid\n\nNegative result: no separate coloured layer\n\nAlternatively, the emulsion test can be used: dissolve in ethanol, pour into water — a milky white emulsion indicates lipids.", difficulty:2, category:"application"},
  {id:"s10fc-01-3-5", islandId:"s10i-01-3", front:"Why must variables be controlled in food test practicals?",
   back:"To make the results valid and allow fair comparison:\n\n• Same volume of food solution in each test tube\n• Same volume of reagent added\n• Same temperature and time for heating (Benedict's test)\n• Same method of observation (e.g. comparing to a colour chart)\n\nControl variables ensure that any difference in result is due to the food sample, not the experimental conditions.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-01-1": [
    {q:"What is the name of the model used to explain how enzymes work?",
     opts:["Key-and-lock model","Lock-and-key model","Induced fit model","Fluid mosaic model"], c:1,
     e:"The lock-and-key model describes how the substrate (key) fits into the enzyme's active site (lock). The induced fit model is an extension studied at A-level. The fluid mosaic model describes cell membranes, not enzymes."},
    {q:"At what approximate pH does pepsin work best?",
     opts:["pH 2","pH 7","pH 9","pH 5"], c:0,
     e:"Pepsin is a protease in the stomach and works best in strongly acidic conditions around pH 2. The stomach produces hydrochloric acid to provide this environment. Neutral (pH 7) or alkaline (pH 9) conditions would denature pepsin."},
    {q:"Which enzyme breaks down lipids into glycerol and fatty acids?",
     opts:["Amylase","Protease","Lipase","Catalase"], c:2,
     e:"Lipase specifically breaks down lipids (fats and oils) into glycerol and fatty acids. Amylase breaks down starch; protease breaks down proteins. Catalase breaks down hydrogen peroxide, which is not a digestive reaction."},
    {q:"What happens to an enzyme above its optimum temperature?",
     opts:["It works faster and faster","The active site changes shape permanently (denatured)","It dissolves in water","It becomes a different enzyme"], c:1,
     e:"Above the optimum temperature, vibrations break the bonds holding the enzyme's shape, causing the active site to change shape permanently — this is denaturation. The substrate can no longer fit, so the reaction stops."},
    {q:"Where is bile stored?",
     opts:["Liver","Pancreas","Gallbladder","Stomach"], c:2,
     e:"Bile is produced by the liver but stored in the gallbladder. It is released into the small intestine where it emulsifies fats and neutralises stomach acid. The pancreas produces digestive enzymes, not bile."}
  ],
  "s10i-01-2": [
    {q:"Which organ is responsible for absorbing most nutrients from digested food?",
     opts:["Stomach","Large intestine","Small intestine","Oesophagus"], c:2,
     e:"The small intestine is where most digestion is completed and nutrients are absorbed into the blood through villi. The stomach mainly digests protein; the large intestine reabsorbs water; the oesophagus only transports food."},
    {q:"What is the function of villi in the small intestine?",
     opts:["To produce digestive enzymes","To churn and mix food","To increase the surface area for absorption","To kill bacteria"], c:2,
     e:"Villi are tiny finger-like projections that greatly increase the surface area of the small intestine, allowing efficient absorption of digested nutrients. They are thin-walled and have a rich blood supply to maintain a concentration gradient."},
    {q:"What is peristalsis?",
     opts:["The breakdown of food by enzymes","The absorption of water in the large intestine","Rhythmic muscle contractions that push food through the gut","The mixing of food with bile"], c:2,
     e:"Peristalsis is the wave-like contraction and relaxation of circular and longitudinal muscles in the gut wall. These contractions push food along the digestive tract from the oesophagus to the rectum."},
    {q:"Which substance does the liver produce to help digest fats?",
     opts:["Lipase","Amylase","Bile","Hydrochloric acid"], c:2,
     e:"The liver produces bile, which emulsifies fats by breaking large fat droplets into smaller ones. This increases the surface area available for lipase (an enzyme) to work on. Hydrochloric acid is produced by the stomach."},
    {q:"What is the main role of the large intestine?",
     opts:["To digest proteins","To absorb glucose","To reabsorb water from undigested food","To produce bile"], c:2,
     e:"The large intestine reabsorbs water from the remaining undigested food, forming solid faeces. Most chemical digestion and nutrient absorption occurs earlier, in the small intestine. Bile is produced by the liver."}
  ],
  "s10i-01-3": [
    {q:"Which reagent is used to test for starch?",
     opts:["Benedict's solution","Biuret reagent","Iodine solution","Sudan III stain"], c:2,
     e:"Iodine solution turns from brown/orange to blue-black in the presence of starch. Benedict's solution tests for reducing sugars; Biuret reagent tests for protein; Sudan III tests for lipids."},
    {q:"A student adds Benedict's solution to a food sample and heats it. The solution stays blue. What does this show?",
     opts:["Reducing sugar is present","Starch is present","No reducing sugar is present","Protein is present"], c:2,
     e:"Benedict's solution remains blue when no reducing sugar is present. A positive result would show a colour change to green, yellow, orange or brick red depending on sugar concentration. The sample must be heated for the test to work."},
    {q:"In the Biuret test, a positive result for protein is shown by what colour change?",
     opts:["Blue to orange","Blue to purple","Brown to blue-black","Blue to green"], c:1,
     e:"The Biuret test turns from blue to purple (lilac) when protein is present. The copper sulfate ions react with the peptide bonds in protein molecules. Brown to blue-black is the iodine test for starch."},
    {q:"Why is a water bath used rather than a Bunsen burner when heating in the Benedict's test?",
     opts:["It is faster","It provides a more controlled, even temperature","It produces a brighter colour change","Water baths are cheaper"], c:1,
     e:"A water bath provides a controlled and uniform temperature, which makes the test safer and more reproducible. Direct heating with a Bunsen burner can cause uneven heating, bumping, and safety hazards."},
    {q:"In the Sudan III test, a positive result for lipids is shown by:",
     opts:["A blue-black colour","A brick-red precipitate","A red/orange layer floating on the surface","A purple colour"], c:2,
     e:"When Sudan III stain is added to a sample containing lipids, a distinct red or orange layer forms on top of the liquid. Lipids are less dense than water and float, carrying the dissolved stain with them."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-01-1': `
<h2>Enzymes &amp; Digestion</h2>
<p>Enzymes are biological catalysts — proteins that speed up chemical reactions in living organisms without being used up. Every metabolic reaction in your body depends on enzymes, and digestion is one of the best examples of enzymes at work.</p>

<h3>The Lock-and-Key Model</h3>
<p>Each enzyme has a specially shaped region called the <strong>active site</strong>. Only a substrate with the matching shape can fit into the active site, just as only the correct key fits a particular lock. When the substrate binds, an enzyme–substrate complex forms, the reaction takes place, and the products are released. The enzyme is then free to catalyse another reaction.</p>

<h3>Effect of Temperature and pH</h3>
<p>Enzymes have an <strong>optimum temperature</strong> and <strong>optimum pH</strong> at which they work fastest. For most human enzymes, the optimum temperature is about 37 °C. Above this temperature, the bonds holding the enzyme's shape break, the active site changes shape, and the enzyme is <strong>denatured</strong> — the substrate can no longer fit.</p>
<p>Similarly, each enzyme has an optimum pH. Pepsin (a stomach protease) works best at about pH 2, while pancreatic enzymes prefer about pH 7–8. Moving away from the optimum pH reduces activity and can also cause denaturation.</p>

<h3>Digestive Enzymes</h3>
<ul>
  <li><strong>Amylase</strong> — breaks starch into maltose (produced in salivary glands, pancreas, small intestine)</li>
  <li><strong>Protease</strong> — breaks proteins into amino acids (pepsin in the stomach; also from pancreas and small intestine)</li>
  <li><strong>Lipase</strong> — breaks lipids into glycerol and fatty acids (produced in the pancreas and small intestine)</li>
</ul>
<p><strong>Bile</strong> (made by the liver, stored in the gallbladder) is not an enzyme. It emulsifies fats and neutralises stomach acid.</p>

<h3>Worked Example</h3>
<p>Explain why amylase in the mouth stops working when food reaches the stomach.</p>
<p>Salivary amylase has an optimum pH of about 7 (neutral). When the food bolus enters the stomach, the hydrochloric acid lowers the pH to around 2. This is far from amylase's optimum, so the enzyme's active site changes shape and it is denatured. Therefore starch digestion by amylase stops in the stomach.</p>

<h3>Common Mistake</h3>
<p>Students often say that enzymes are "killed" at high temperatures. Enzymes are not alive — they are proteins. The correct term is <em>denatured</em>, meaning the active site has permanently changed shape so the substrate no longer fits.</p>
`,

's10i-01-2': `
<h2>The Digestive System</h2>
<p>The human digestive system is an organ system that breaks down food into small, soluble molecules which can be absorbed into the blood and transported to cells. It involves both <strong>mechanical digestion</strong> (physically breaking food into smaller pieces) and <strong>chemical digestion</strong> (enzymes breaking bonds in large molecules).</p>

<h3>The Main Organs</h3>
<ul>
  <li><strong>Mouth</strong> — teeth grind food (mechanical); salivary amylase begins starch digestion (chemical)</li>
  <li><strong>Oesophagus</strong> — muscular tube that pushes food to the stomach by peristalsis</li>
  <li><strong>Stomach</strong> — muscular walls churn food; glands produce pepsin and hydrochloric acid</li>
  <li><strong>Liver</strong> — produces bile, which is stored in the gallbladder</li>
  <li><strong>Pancreas</strong> — produces amylase, protease and lipase, released into the small intestine</li>
  <li><strong>Small intestine</strong> — digestion is completed; nutrients are absorbed through villi</li>
  <li><strong>Large intestine</strong> — water is reabsorbed from undigested material</li>
  <li><strong>Rectum</strong> — faeces are stored before being egested through the anus</li>
</ul>

<h3>Absorption in the Small Intestine</h3>
<p>The inner wall of the small intestine is covered in tiny finger-like projections called <strong>villi</strong>. These are adapted for efficient absorption:</p>
<ul>
  <li>Large surface area — millions of villi increase the total absorptive area enormously</li>
  <li>Thin walls (one cell thick) — short diffusion distance</li>
  <li>Rich blood supply — maintains a steep concentration gradient for rapid diffusion</li>
  <li>Lacteals — absorb fatty acids and glycerol into the lymphatic system</li>
</ul>

<h3>Worked Example</h3>
<p>Explain how the structure of a villus helps the small intestine absorb nutrients efficiently.</p>
<p>Each villus has a very thin wall — only one cell thick — which gives a short diffusion distance so nutrients can pass through quickly. The dense network of blood capillaries inside the villus carries absorbed nutrients away rapidly, maintaining a steep concentration gradient between the intestine lumen and the blood. This ensures diffusion continues at a fast rate.</p>

<h3>Common Mistake</h3>
<p>Students often confuse the roles of the liver and the pancreas. Remember: the <em>liver</em> makes bile (not enzymes), while the <em>pancreas</em> makes digestive enzymes (amylase, protease and lipase). Bile is stored in the gallbladder, not the liver.</p>
`,

's10i-01-3': `
<h2>Food Tests &amp; Practical Skills</h2>
<p>At GCSE you need to know four standard food tests. Each uses a specific reagent and gives a characteristic colour change for a positive result. These are required practicals, so you should also be able to describe the method and explain how to make the test fair.</p>

<h3>The Four Food Tests</h3>
<ul>
  <li><strong>Starch</strong> — add iodine solution; positive = brown/orange turns <strong>blue-black</strong></li>
  <li><strong>Reducing sugars (e.g. glucose)</strong> — add Benedict's solution and heat to ~75 °C in a water bath; positive = blue turns <strong>green → yellow → orange → brick red</strong></li>
  <li><strong>Protein</strong> — add sodium hydroxide then copper sulfate (Biuret test); positive = blue turns <strong>purple/lilac</strong></li>
  <li><strong>Lipids</strong> — add Sudan III stain; positive = a <strong>red/orange layer</strong> forms on the surface</li>
</ul>

<h3>Practical Tips</h3>
<p>When carrying out food tests you must control variables to ensure a fair test: use the same volume of food solution, the same volume of reagent, and the same temperature and timing for any heating step. Always use a water bath rather than a Bunsen burner for heating — this gives a more controlled, uniform temperature and is safer.</p>

<h3>Worked Example</h3>
<p>A student tests four food samples with Benedict's solution. Sample A turns brick red, sample B turns orange, sample C turns green, and sample D stays blue. Rank the samples from highest to lowest sugar concentration.</p>
<p>A (brick red) → B (orange) → C (green) → D (blue, no sugar detected). The further the colour progresses from blue towards brick red, the higher the concentration of reducing sugar in the sample.</p>

<h3>Common Mistake</h3>
<p>Students sometimes forget that Benedict's test requires <em>heating</em>. Without heating the sample in a water bath, no colour change will occur even if sugar is present. Also remember that Benedict's tests for <em>reducing</em> sugars (such as glucose) — sucrose is a non-reducing sugar and will give a negative result.</p>
`

});
