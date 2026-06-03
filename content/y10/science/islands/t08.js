// content/y10/science/islands/t08.js — Year 10 Science Topic 8: Energy Changes
// Islands s10i-08-1 .. s10i-08-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-08-1 — Exothermic & Endothermic Reactions
  {id:"s10fc-08-1-1", islandId:"s10i-08-1", front:"What is an exothermic reaction?",
   back:"An exothermic reaction is one that transfers energy to the surroundings, usually as heat, so the temperature of the surroundings increases.\n\nExamples:\n• Combustion (burning fuels)\n• Neutralisation (acid + alkali)\n• Oxidation reactions\n• Hand warmers\n\nOn a reaction profile, the products are at a lower energy level than the reactants.", difficulty:1, category:"definition"},
  {id:"s10fc-08-1-2", islandId:"s10i-08-1", front:"What is an endothermic reaction?",
   back:"An endothermic reaction is one that takes in energy from the surroundings, usually as heat, so the temperature of the surroundings decreases.\n\nExamples:\n• Thermal decomposition (e.g. CaCO₃ → CaO + CO₂)\n• Citric acid + sodium hydrogencarbonate\n• Photosynthesis\n• Instant cold packs (sports injuries)\n\nOn a reaction profile, the products are at a higher energy level than the reactants.", difficulty:1, category:"definition"},
  {id:"s10fc-08-1-3", islandId:"s10i-08-1", front:"What is activation energy?",
   back:"Activation energy (Ea) is the minimum amount of energy that reactant particles must have in order to react when they collide.\n\nOn a reaction profile, it is shown as the energy 'hump' between reactants and products.\n\nA catalyst lowers the activation energy, providing an alternative reaction pathway so that more particles have enough energy to react.", difficulty:2, category:"concept"},
  {id:"s10fc-08-1-4", islandId:"s10i-08-1", front:"How do you interpret a reaction profile diagram?",
   back:"A reaction profile shows the energy levels of reactants and products:\n\nExothermic:\n• Reactants are higher than products\n• Energy is released to the surroundings\n• The difference in height = energy change (negative ΔH)\n\nEndothermic:\n• Products are higher than reactants\n• Energy is absorbed from the surroundings\n• The difference in height = energy change (positive ΔH)\n\nThe 'hump' above the reactants represents the activation energy.", difficulty:2, category:"concept"},
  {id:"s10fc-08-1-5", islandId:"s10i-08-1", front:"How would you measure the temperature change in a neutralisation reaction?",
   back:"Method:\n1. Measure a fixed volume of acid in a polystyrene cup (insulated calorimeter)\n2. Record the starting temperature\n3. Add a measured volume of alkali\n4. Stir and record the temperature every 30 seconds\n5. Note the maximum temperature\n\nThe temperature rise shows the reaction is exothermic.\n\nPolystyrene is used because it is a good insulator, reducing heat loss to the environment.", difficulty:2, category:"application"},

  // s10i-08-2 — Bond Energy Calculations
  {id:"s10fc-08-2-1", islandId:"s10i-08-2", front:"What is bond energy?",
   back:"Bond energy is the energy needed to break one mole of a particular covalent bond (or the energy released when one mole of that bond is formed).\n\n• Breaking bonds requires energy (endothermic)\n• Making bonds releases energy (exothermic)\n\nBond energies are measured in kJ/mol and are found in data tables.", difficulty:1, category:"definition"},
  {id:"s10fc-08-2-2", islandId:"s10i-08-2", front:"How do you calculate the overall energy change of a reaction using bond energies?",
   back:"Overall energy change = energy needed to break bonds − energy released making bonds\n\nOr: ΔH = Σ(bonds broken) − Σ(bonds made)\n\nIf the answer is negative → exothermic (more energy released than absorbed)\nIf the answer is positive → endothermic (more energy absorbed than released)", difficulty:2, category:"calculation"},
  {id:"s10fc-08-2-3", islandId:"s10i-08-2", front:"Calculate the energy change for: H₂ + Cl₂ → 2HCl\nBond energies: H–H = 436 kJ/mol, Cl–Cl = 242 kJ/mol, H–Cl = 431 kJ/mol",
   back:"Bonds broken:\n1 × H–H = 436 kJ\n1 × Cl–Cl = 242 kJ\nTotal in = 678 kJ\n\nBonds made:\n2 × H–Cl = 2 × 431 = 862 kJ\nTotal out = 862 kJ\n\nΔH = 678 − 862 = −184 kJ/mol\n\nNegative value → exothermic reaction (more energy released than taken in).", difficulty:3, category:"calculation"},
  {id:"s10fc-08-2-4", islandId:"s10i-08-2", front:"Why is breaking bonds always endothermic?",
   back:"Bonds are forces of attraction between atoms. Energy must be supplied to overcome these attractive forces and pull the atoms apart.\n\nThis energy comes from the surroundings (endothermic).\n\nConversely, when new bonds form, energy is released to the surroundings (exothermic) because the atoms reach a more stable, lower-energy arrangement.", difficulty:2, category:"concept"},
  {id:"s10fc-08-2-5", islandId:"s10i-08-2", front:"In an exothermic reaction, which is greater: the energy used to break bonds or the energy released when new bonds are made?",
   back:"In an exothermic reaction, the energy released when new bonds are made is GREATER than the energy needed to break the original bonds.\n\nThis means there is a net release of energy to the surroundings.\n\nΣ(bonds made) > Σ(bonds broken)\nSo ΔH = bonds broken − bonds made = negative value\n\nIn an endothermic reaction, the opposite is true.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-08-1": [
    {q:"Which of the following is an example of an exothermic reaction?",
     opts:["Thermal decomposition","Photosynthesis","Combustion of methane","Dissolving ammonium nitrate in water"], c:2,
     e:"Combustion is a classic exothermic reaction — it releases heat and light energy to the surroundings. Thermal decomposition, photosynthesis and dissolving ammonium nitrate are endothermic processes."},
    {q:"In an endothermic reaction, what happens to the temperature of the surroundings?",
     opts:["It increases","It decreases","It stays the same","It first increases then decreases"], c:1,
     e:"Endothermic reactions take in energy from the surroundings, causing the temperature of the surroundings to decrease. This is why cold packs feel cold — the chemical reaction absorbs heat from your skin."},
    {q:"On a reaction profile for an exothermic reaction, where are the products relative to the reactants?",
     opts:["At a higher energy level","At the same energy level","At a lower energy level","The profile does not show this"], c:2,
     e:"In an exothermic reaction, energy is released. The products have less energy than the reactants, so they sit at a lower level on the reaction profile. The difference in height represents the energy released."},
    {q:"What does the 'hump' on a reaction profile represent?",
     opts:["The energy of the products","The activation energy","The energy released","The temperature change"], c:1,
     e:"The hump represents the activation energy — the minimum energy particles need to collide successfully and react. Even exothermic reactions require an initial input of energy to break the first bonds."},
    {q:"A student mixes an acid and an alkali in a polystyrene cup and records a temperature increase. This reaction is:",
     opts:["Endothermic","Exothermic","Neither — no energy change has occurred","A decomposition reaction"], c:1,
     e:"A temperature increase in the surroundings indicates energy has been transferred out of the reaction to the surroundings — this is an exothermic reaction. Neutralisation (acid + alkali) is always exothermic."}
  ],
  "s10i-08-2": [
    {q:"In a bond energy calculation, what does a negative overall energy change indicate?",
     opts:["An endothermic reaction","An exothermic reaction","No reaction has occurred","The bonds are all the same strength"], c:1,
     e:"A negative ΔH means more energy was released making new bonds than was used breaking old bonds. The excess energy is transferred to the surroundings — this is an exothermic reaction."},
    {q:"Which process requires energy: breaking bonds or making bonds?",
     opts:["Making bonds","Breaking bonds","Both require energy","Neither requires energy"], c:1,
     e:"Breaking bonds is always endothermic — energy must be supplied to overcome the forces of attraction between atoms. Making bonds is exothermic — energy is released as atoms form stable arrangements."},
    {q:"Use bond energies to calculate ΔH: CH₄ + 2O₂ → CO₂ + 2H₂O. Bond energies: C–H = 413, O=O = 498, C=O = 805, O–H = 464 kJ/mol.",
     opts:["-818 kJ/mol","+818 kJ/mol","-1644 kJ/mol","+1644 kJ/mol"], c:0,
     e:"Broken: 4(C–H) + 2(O=O) = 4(413) + 2(498) = 1652 + 996 = 2648. Made: 2(C=O) + 4(O–H) = 2(805) + 4(464) = 1610 + 1856 = 3466. ΔH = 2648 − 3466 = −818 kJ/mol (exothermic)."},
    {q:"If bonds broken = 500 kJ and bonds made = 400 kJ, is the reaction exothermic or endothermic?",
     opts:["Exothermic","Endothermic","Neutral — no energy change","Cannot be determined"], c:1,
     e:"ΔH = 500 − 400 = +100 kJ. A positive value means more energy was needed to break bonds than was released making new ones. Energy was taken from the surroundings — the reaction is endothermic."},
    {q:"A catalyst affects a reaction profile by:",
     opts:["Increasing the energy of the products","Lowering the activation energy","Increasing the overall energy change","Making the reaction endothermic"], c:1,
     e:"A catalyst provides an alternative reaction pathway with a lower activation energy. This means more particles have enough energy to react, increasing the rate. The catalyst does not change the overall energy change or the products."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-08-1': `
<h2>Exothermic &amp; Endothermic Reactions</h2>
<div class="lesson-diagram" data-diagram="energy-level-diagram"><p class="diagram-caption">Energy profiles: exothermic and endothermic</p></div>
<p>Every chemical reaction involves an energy change. Reactions either release energy to the surroundings (exothermic) or absorb energy from them (endothermic). Understanding this is key to predicting temperature changes and interpreting reaction profiles.</p>

<h3>Exothermic Reactions</h3>
<p>These <strong>release energy</strong> to the surroundings, causing the temperature to rise. Examples include combustion, neutralisation and oxidation. On a reaction profile, the products sit at a <em>lower</em> energy level than the reactants.</p>

<h3>Endothermic Reactions</h3>
<p>These <strong>absorb energy</strong> from the surroundings, causing the temperature to fall. Examples include thermal decomposition and photosynthesis. On a reaction profile, the products sit at a <em>higher</em> energy level than the reactants.</p>

<h3>Activation Energy</h3>
<p>All reactions — even exothermic ones — need an initial input of energy to start. This is the <strong>activation energy (Ea)</strong>: the minimum energy particles must have to react on collision. On a profile diagram, it appears as the 'hump' above the reactants. A catalyst lowers Ea by providing an alternative pathway.</p>

<h3>Worked Example</h3>
<p>A student dissolves ammonium nitrate in water and records a temperature drop from 22 °C to 14 °C. Is this exothermic or endothermic? Explain.</p>
<p>The temperature of the surroundings (water) decreased, which means energy was transferred from the surroundings into the reaction. This is an <strong>endothermic</strong> reaction. The dissolving process took in heat from the water, causing it to cool down.</p>

<h3>Common Mistake</h3>
<p>Students sometimes think exothermic means the mixture gets hot and endothermic means it gets cold. Be precise: it is the <em>surroundings</em> that change temperature. In an exothermic reaction, energy is transferred <em>out</em> to the surroundings, so the surroundings warm up. The reaction mixture itself loses energy.</p>
`,

's10i-08-2': `
<h2>Bond Energy Calculations</h2>
<p>During a chemical reaction, bonds in the reactants are <strong>broken</strong> (requires energy) and new bonds in the products are <strong>made</strong> (releases energy). The overall energy change depends on the difference between these two values.</p>

<h3>The Key Formula</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>&Delta;H = &Sigma;(bonds broken) &minus; &Sigma;(bonds made)</strong></p>
<ul>
  <li>If &Delta;H is <strong>negative</strong> &rarr; exothermic (more energy released than absorbed)</li>
  <li>If &Delta;H is <strong>positive</strong> &rarr; endothermic (more energy absorbed than released)</li>
</ul>

<h3>Step-by-Step Method</h3>
<ul>
  <li><strong>Step 1:</strong> Draw out the structural formulae to see all the bonds</li>
  <li><strong>Step 2:</strong> List every bond broken in the reactants and add up their energies</li>
  <li><strong>Step 3:</strong> List every bond made in the products and add up their energies</li>
  <li><strong>Step 4:</strong> Subtract bonds made from bonds broken</li>
</ul>

<h3>Worked Example</h3>
<p>Calculate &Delta;H for: H₂ + Cl₂ &rarr; 2HCl<br>
Bond energies: H&ndash;H = 436 kJ/mol, Cl&ndash;Cl = 242 kJ/mol, H&ndash;Cl = 431 kJ/mol</p>
<p>Bonds broken: 1 &times; H&ndash;H + 1 &times; Cl&ndash;Cl = 436 + 242 = <strong>678 kJ</strong><br>
Bonds made: 2 &times; H&ndash;Cl = 2 &times; 431 = <strong>862 kJ</strong><br>
&Delta;H = 678 &minus; 862 = <strong>&minus;184 kJ/mol</strong> (exothermic)</p>

<h3>Common Mistake</h3>
<p>The most frequent error is subtracting the wrong way round. Always remember: <em>broken minus made</em>. Some students also forget to multiply bond energies by the number of bonds — for example, in CH₄ there are <strong>four</strong> C&ndash;H bonds, not one.</p>
`

});
