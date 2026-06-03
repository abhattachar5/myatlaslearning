// content/y9/science/islands/t08.js — Year 9 Science Topic 8: Chemical Reactions & Equations
// Islands s9i-08-1 .. s9i-08-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-08-1 — Writing & Balancing Equations
  {id:"s9fc-08-1-1", islandId:"s9i-08-1", front:"What is a word equation?",
   back:"A word equation uses the names of the reactants and products:\n\nreactants → products\n\nExample: magnesium + oxygen → magnesium oxide\n\nThe arrow means 'reacts to form'. Reactants are on the left; products are on the right.", difficulty:1, category:"definition"},
  {id:"s9fc-08-1-2", islandId:"s9i-08-1", front:"What is conservation of mass?",
   back:"In a chemical reaction, no atoms are created or destroyed — they are rearranged.\n\nThis means the total mass of the reactants always equals the total mass of the products.\n\nThis is why equations must be balanced — the same number of each type of atom must appear on both sides.", difficulty:1, category:"concept"},
  {id:"s9fc-08-1-3", islandId:"s9i-08-1", front:"How do you balance a symbol equation?",
   back:"1. Write the correct formulae for all reactants and products\n2. Count the atoms of each element on both sides\n3. Add large numbers (coefficients) in front of formulae to balance — NEVER change the small subscript numbers\n4. Check that all elements balance\n\nExample: Mg + O₂ → MgO becomes 2Mg + O₂ → 2MgO", difficulty:2, category:"concept"},
  {id:"s9fc-08-1-4", islandId:"s9i-08-1", front:"Balance: Fe + Cl₂ → FeCl₃",
   back:"Count: Left — 1 Fe, 2 Cl. Right — 1 Fe, 3 Cl. Cl does not balance.\n\nBalanced: 2Fe + 3Cl₂ → 2FeCl₃\n\nCheck: Left — 2 Fe, 6 Cl. Right — 2 Fe, 6 Cl. ✓", difficulty:2, category:"calculation"},
  {id:"s9fc-08-1-5", islandId:"s9i-08-1", front:"What do state symbols mean in equations?",
   back:"State symbols show the physical state of each substance:\n\n(s) = solid\n(l) = liquid\n(g) = gas\n(aq) = aqueous (dissolved in water)\n\nExample: NaCl(aq) + AgNO₃(aq) → AgCl(s) + NaNO₃(aq)", difficulty:1, category:"definition"},

  // s9i-08-2 — Types of Reaction
  {id:"s9fc-08-2-1", islandId:"s9i-08-2", front:"What is a combustion reaction?",
   back:"Combustion is a reaction where a substance burns in oxygen, releasing energy (exothermic).\n\nComplete combustion of a hydrocarbon:\nhydrocarbon + oxygen → carbon dioxide + water\n\nExample: CH₄ + 2O₂ → CO₂ + 2H₂O\n\nIncomplete combustion (limited oxygen) produces carbon monoxide or carbon (soot) instead.", difficulty:1, category:"definition"},
  {id:"s9fc-08-2-2", islandId:"s9i-08-2", front:"What is thermal decomposition?",
   back:"Thermal decomposition is the breakdown of a compound by heating.\n\nExample: calcium carbonate → calcium oxide + carbon dioxide\nCaCO₃ → CaO + CO₂\n\nThe compound does NOT burn — it breaks apart into simpler substances when heated strongly.\n\nMany metal carbonates decompose in this way.", difficulty:1, category:"definition"},
  {id:"s9fc-08-2-3", islandId:"s9i-08-2", front:"What is oxidation and what is reduction?",
   back:"Oxidation Is Loss of electrons (or gain of oxygen)\nReduction Is Gain of electrons (or loss of oxygen)\n\nRemember: OIL RIG\n\nIn a displacement reaction, the more reactive metal is oxidised (loses electrons) and the less reactive metal ion is reduced (gains electrons).\n\nOxidation and reduction always occur together — this is called a redox reaction.", difficulty:2, category:"concept"},
  {id:"s9fc-08-2-4", islandId:"s9i-08-2", front:"What is a displacement reaction?",
   back:"A more reactive element displaces a less reactive element from a compound.\n\nExample: zinc + copper sulfate → zinc sulfate + copper\nZn + CuSO₄ → ZnSO₄ + Cu\n\nZinc is more reactive than copper, so it takes copper's place in the compound. The copper is 'pushed out' and deposited as a solid.", difficulty:2, category:"concept"},
  {id:"s9fc-08-2-5", islandId:"s9i-08-2", front:"Use the reactivity series to predict whether iron will displace copper from copper sulfate solution.",
   back:"Iron is more reactive than copper (higher in the reactivity series).\n\nTherefore iron WILL displace copper:\nFe + CuSO₄ → FeSO₄ + Cu\n\nYou would observe the iron nail becoming coated in a reddish-brown layer of copper, and the blue copper sulfate solution fading to green (iron sulfate).", difficulty:2, category:"application"},

  // s9i-08-3 — Exothermic & Endothermic Reactions
  {id:"s9fc-08-3-1", islandId:"s9i-08-3", front:"What is an exothermic reaction?",
   back:"An exothermic reaction transfers energy to the surroundings, usually as heat. The temperature of the surroundings increases.\n\nExamples:\n• Combustion (burning fuels)\n• Neutralisation (acid + alkali)\n• Oxidation reactions\n• Hand warmers\n\nOn an energy profile diagram, the products are lower than the reactants (energy has been released).", difficulty:1, category:"definition"},
  {id:"s9fc-08-3-2", islandId:"s9i-08-3", front:"What is an endothermic reaction?",
   back:"An endothermic reaction absorbs energy from the surroundings. The temperature of the surroundings decreases.\n\nExamples:\n• Thermal decomposition\n• Photosynthesis\n• Dissolving ammonium nitrate in water (cold packs)\n• Citric acid + sodium hydrogencarbonate\n\nOn an energy profile diagram, the products are higher than the reactants (energy has been absorbed).", difficulty:1, category:"definition"},
  {id:"s9fc-08-3-3", islandId:"s9i-08-3", front:"How do you read an energy profile diagram?",
   back:"An energy profile diagram shows the energy levels of reactants and products:\n\n• If products are LOWER than reactants → exothermic (energy released)\n• If products are HIGHER than reactants → endothermic (energy absorbed)\n• The 'hump' between them represents the activation energy — the minimum energy needed to start the reaction\n\nThe overall energy change = energy of products − energy of reactants.", difficulty:2, category:"concept"},
  {id:"s9fc-08-3-4", islandId:"s9i-08-3", front:"What is activation energy?",
   back:"Activation energy is the minimum amount of energy needed for reactant particles to collide successfully and start a chemical reaction.\n\nAll reactions need activation energy — even exothermic ones.\n\nCatalysts work by lowering the activation energy, so more particles have enough energy to react at a given temperature.", difficulty:2, category:"concept"},
  {id:"s9fc-08-3-5", islandId:"s9i-08-3", front:"A student mixes citric acid and sodium hydrogencarbonate in water. The beaker feels cold. Is this exothermic or endothermic?",
   back:"This is an endothermic reaction.\n\nThe reaction absorbs energy from the surroundings (the water and the beaker), causing the temperature to drop and the beaker to feel cold to touch.\n\nThe energy is taken from the surroundings and stored in the chemical bonds of the products.", difficulty:1, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-08-1": [
    {q:"In a balanced equation, which statement is true?",
     opts:["The number of compounds is the same on both sides","The total mass of reactants equals the total mass of products","New atoms are created during the reaction","The state symbols must all be the same"], c:1,
     e:"Conservation of mass states that atoms are neither created nor destroyed in a chemical reaction — they are rearranged. Therefore the total mass of reactants always equals the total mass of products, and the equation must balance."},
    {q:"Balance the equation: H₂ + O₂ → H₂O",
     opts:["H₂ + O₂ → H₂O₂","2H₂ + O₂ → 2H₂O","H₂ + 2O₂ → 2H₂O","H₂ + O₂ → 2H₂O"], c:1,
     e:"Left: 2H₂ gives 4 H atoms; O₂ gives 2 O atoms. Right: 2H₂O gives 4 H atoms and 2 O atoms. Both sides balance: 4 H, 2 O. Never change subscripts — only add coefficients."},
    {q:"What does the state symbol (aq) mean?",
     opts:["Solid","Liquid","Gas","Dissolved in water (aqueous)"], c:3,
     e:"(aq) stands for aqueous — dissolved in water. (s) = solid, (l) = liquid, (g) = gas. State symbols are included to show the physical state of each substance in the reaction."},
    {q:"In the equation 2Mg + O₂ → 2MgO, what does the large '2' in front of Mg represent?",
     opts:["Two atoms bonded inside one molecule of magnesium","Two separate atoms (or units) of magnesium reacting","The charge on magnesium","The mass number of magnesium"], c:1,
     e:"The coefficient (large number in front) tells you how many units of that substance are involved. 2Mg means two atoms of magnesium. You adjust coefficients to balance the equation — never change the subscripts within a formula."},
    {q:"A student heats 10 g of calcium carbonate and collects the products. The total mass of solid products is 5.6 g. Why has the mass apparently decreased?",
     opts:["Atoms were destroyed during the reaction","The reaction is endothermic so mass is converted to energy","Carbon dioxide gas was produced and escaped into the air","The balance was reading incorrectly"], c:2,
     e:"The 'missing' mass is the CO₂ gas that escaped. CaCO₃ → CaO + CO₂. If the gas were captured, the total mass would still be 10 g. Mass is conserved — but in an open system, gaseous products can escape and the measured mass appears to decrease."}
  ],
  "s9i-08-2": [
    {q:"Methane burns in excess oxygen. What are the products?",
     opts:["Carbon monoxide + water","Carbon dioxide + water","Carbon + water","Carbon dioxide + hydrogen"], c:1,
     e:"Complete combustion of a hydrocarbon in excess oxygen produces carbon dioxide and water: CH₄ + 2O₂ → CO₂ + 2H₂O. Carbon monoxide or carbon are produced only during incomplete combustion (limited oxygen)."},
    {q:"Zinc is placed in copper sulfate solution. The zinc dissolves and copper is deposited. This is a:",
     opts:["Neutralisation reaction","Combustion reaction","Displacement reaction","Decomposition reaction"], c:2,
     e:"Zinc is more reactive than copper, so it displaces copper from the copper sulfate solution: Zn + CuSO₄ → ZnSO₄ + Cu. This is a displacement reaction. The zinc is oxidised; the copper ions are reduced."},
    {q:"In the mnemonic OIL RIG, what does 'OIL' stand for?",
     opts:["Oxidation Is Loss (of electrons)","Oxygen Is Light","Oxidation Increases Levels","Only Ions Lose"], c:0,
     e:"OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain (of electrons). In a displacement reaction, the more reactive metal is oxidised (loses electrons) and the less reactive metal ion is reduced (gains electrons)."},
    {q:"Heating copper carbonate produces copper oxide and carbon dioxide. This is an example of:",
     opts:["Combustion","Displacement","Thermal decomposition","Neutralisation"], c:2,
     e:"Thermal decomposition is the breakdown of a compound by heating. CuCO₃ → CuO + CO₂. The copper carbonate does not burn — it simply breaks down into simpler products when energy (heat) is supplied."},
    {q:"Silver is less reactive than copper. Will silver displace copper from copper sulfate solution?",
     opts:["Yes — silver is a metal so it always displaces","Yes — silver is more attractive than copper","No — only a more reactive metal can displace a less reactive one","No — silver is too expensive to react"], c:2,
     e:"For a displacement reaction to occur, the added metal must be MORE reactive than the metal in the compound. Silver is LESS reactive than copper, so no reaction occurs. If you dipped a silver wire into copper sulfate solution, nothing would happen."}
  ],
  "s9i-08-3": [
    {q:"Which of these is an exothermic reaction?",
     opts:["Photosynthesis","Thermal decomposition","Dissolving ammonium nitrate in water","Combustion of natural gas"], c:3,
     e:"Combustion is exothermic — it releases energy (heat and light) to the surroundings. Photosynthesis and thermal decomposition are endothermic; dissolving ammonium nitrate is endothermic (used in cold packs)."},
    {q:"On an energy profile diagram, the products are at a higher energy level than the reactants. The reaction is:",
     opts:["Exothermic","Endothermic","Impossible","Neutral"], c:1,
     e:"If products are higher in energy than reactants, the reaction has absorbed energy from the surroundings — it is endothermic. In exothermic reactions, products are at a lower energy level (energy has been released)."},
    {q:"What is activation energy?",
     opts:["The energy released when bonds are formed","The total energy stored in the products","The minimum energy needed for a reaction to occur","The energy lost as heat to the surroundings"], c:2,
     e:"Activation energy is the minimum energy that colliding particles must have for a successful reaction to take place. It is represented by the 'hump' on an energy profile diagram. Even exothermic reactions need activation energy to get started."},
    {q:"A hand warmer heats up when activated. The reaction inside is:",
     opts:["Endothermic — it absorbs heat from your hand","Exothermic — it releases energy as heat","Neither exothermic nor endothermic","Endothermic first, then exothermic"], c:1,
     e:"A hand warmer releases energy to its surroundings as heat — this is an exothermic reaction. Your hand feels warm because energy is being transferred from the hand warmer to your skin."},
    {q:"In an experiment, a student adds a metal to acid and the temperature rises by 8 °C. The reaction is:",
     opts:["Endothermic","Exothermic","Thermal decomposition","Not a chemical reaction"], c:1,
     e:"A temperature increase in the surroundings means energy has been released by the reaction — this is exothermic. Metal + acid → salt + hydrogen is a typical exothermic reaction."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-08-1': `
<h2>Writing &amp; Balancing Equations</h2>
<div class="lesson-diagram" data-diagram="conservation-of-mass"><p class="diagram-caption">Conservation of mass in a reaction</p></div>
<p>Chemical equations are the language of chemistry. They tell you what reacts, what is produced, and in what proportions. Being able to write and balance equations is an essential skill.</p>

<h3>Word and Symbol Equations</h3>
<p>A word equation names the reactants and products: <strong>magnesium + oxygen &rarr; magnesium oxide</strong></p>
<p>A symbol equation uses chemical formulae: <strong>2Mg + O&#8322; &rarr; 2MgO</strong></p>

<h3>Conservation of Mass</h3>
<p>In any chemical reaction, atoms are rearranged but never created or destroyed. This means the total mass of reactants always equals the total mass of products. Equations must be <strong>balanced</strong> so the number of each type of atom is the same on both sides.</p>

<h3>Worked Example</h3>
<p>Balance: N&#8322; + H&#8322; &rarr; NH&#8323;</p>
<p>Unbalanced: Left &mdash; 2 N, 2 H. Right &mdash; 1 N, 3 H. Neither balances.</p>
<p>Step 1: Put 2 in front of NH&#8323; &rarr; N&#8322; + H&#8322; &rarr; 2NH&#8323;. Now: Left &mdash; 2 N, 2 H. Right &mdash; 2 N, 6 H. Nitrogen balances but hydrogen does not.</p>
<p>Step 2: Put 3 in front of H&#8322; &rarr; <strong>N&#8322; + 3H&#8322; &rarr; 2NH&#8323;</strong>. Check: 2 N, 6 H on both sides. &#10003;</p>

<h3>Common Mistake</h3>
<p>Never change the small (subscript) numbers in a formula to balance an equation. Changing H&#8322;O to H&#8323;O would create a completely different substance. Only adjust the large (coefficient) numbers in front of formulae.</p>
`,

's9i-08-2': `
<h2>Types of Reaction</h2>
<div class="lesson-diagram" data-diagram="displacement-reaction"><p class="diagram-caption">A displacement reaction</p></div>
<p>Chemical reactions can be classified into several types. Recognising these patterns helps you predict products and write equations.</p>

<h3>Key Reaction Types</h3>
<ul>
  <li><strong>Combustion</strong> &mdash; a substance reacts with oxygen, releasing energy. Complete combustion of hydrocarbons: fuel + O&#8322; &rarr; CO&#8322; + H&#8322;O</li>
  <li><strong>Thermal decomposition</strong> &mdash; a compound breaks down when heated. E.g. CaCO&#8323; &rarr; CaO + CO&#8322;</li>
  <li><strong>Oxidation</strong> &mdash; gain of oxygen or loss of electrons (OIL)</li>
  <li><strong>Reduction</strong> &mdash; loss of oxygen or gain of electrons (RIG)</li>
  <li><strong>Displacement</strong> &mdash; a more reactive element replaces a less reactive one in a compound. E.g. Zn + CuSO&#8324; &rarr; ZnSO&#8324; + Cu</li>
</ul>

<h3>Worked Example</h3>
<p>Iron is added to copper sulfate solution. Predict whether a reaction occurs and, if so, write the equation.</p>
<p>Iron is more reactive than copper (higher in the reactivity series). Iron displaces copper:</p>
<p><strong>Fe + CuSO&#8324; &rarr; FeSO&#8324; + Cu</strong></p>
<p>Observations: the blue solution fades to green; a reddish-brown coating of copper appears on the iron.</p>

<h3>Common Mistake</h3>
<p>Students sometimes confuse combustion with thermal decomposition. Combustion requires oxygen and is always exothermic. Thermal decomposition does not involve oxygen &mdash; it is simply breaking a compound apart with heat. Also, remember that oxidation and reduction always happen together (redox) &mdash; if one substance is oxidised, another must be reduced.</p>
`,

's9i-08-3': `
<h2>Exothermic &amp; Endothermic Reactions</h2>
<div class="lesson-diagram" data-diagram="energy-level-diagram"><p class="diagram-caption">Energy profiles: exothermic and endothermic</p></div>
<p>Every chemical reaction involves an energy change. Understanding whether a reaction releases or absorbs energy is important for both theory and practical applications.</p>

<h3>Exothermic Reactions</h3>
<p>Transfer energy <strong>to</strong> the surroundings &rarr; temperature <strong>increases</strong>.</p>
<p>Examples: combustion, neutralisation, oxidation, hand warmers.</p>
<p>On an energy profile: products are <strong>lower</strong> than reactants.</p>

<h3>Endothermic Reactions</h3>
<p>Absorb energy <strong>from</strong> the surroundings &rarr; temperature <strong>decreases</strong>.</p>
<p>Examples: thermal decomposition, photosynthesis, cold packs (dissolving ammonium nitrate).</p>
<p>On an energy profile: products are <strong>higher</strong> than reactants.</p>

<h3>Energy Profile Diagrams</h3>
<p>The &ldquo;hump&rdquo; between reactants and products on an energy profile diagram represents the <strong>activation energy</strong> &mdash; the minimum energy particles need to react. A catalyst lowers this hump, allowing more particles to react at a given temperature.</p>

<h3>Worked Example</h3>
<p>A student adds hydrochloric acid to sodium hydroxide in an insulated cup. The temperature rises from 20 &deg;C to 27 &deg;C. Classify the reaction and explain the observation.</p>
<p>The temperature increase shows that energy has been released to the surroundings. This is an <strong>exothermic</strong> reaction. Neutralisation reactions (acid + alkali &rarr; salt + water) are always exothermic.</p>

<h3>Common Mistake</h3>
<p>Students sometimes write "the reaction gets hot" instead of "the reaction transfers energy to the surroundings as heat." Be precise: exothermic means energy is transferred <em>out</em> of the reaction system, causing the surroundings (the solution, the container, the air) to heat up. The reaction itself is not described as hot.</p>
`

});
