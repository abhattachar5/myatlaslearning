// content/y10/science/islands/t06.js — Year 10 Science Topic 6: Quantitative Chemistry
// Islands s10i-06-1 .. s10i-06-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-06-1 — Relative Formula Mass & Moles
  {id:"s10fc-06-1-1", islandId:"s10i-06-1", front:"What is relative formula mass (Mr)?",
   back:"Relative formula mass (Mr) is the sum of the relative atomic masses (Ar) of all the atoms in a chemical formula.\n\nExample: Mr of H₂O = (2 × 1) + 16 = 18\nExample: Mr of CaCO₃ = 40 + 12 + (3 × 16) = 100\n\nMr has no units — it is a ratio compared to carbon-12.", difficulty:1, category:"definition"},
  {id:"s10fc-06-1-2", islandId:"s10i-06-1", front:"What is a mole?",
   back:"A mole is the unit for amount of substance. One mole of any substance contains 6.02 × 10²³ particles (Avogadro's constant).\n\nThe key equation linking mass and moles:\n\nmoles = mass (g) ÷ Mr\n\nOr rearranged:\nmass = moles × Mr\nMr = mass ÷ moles", difficulty:1, category:"definition"},
  {id:"s10fc-06-1-3", islandId:"s10i-06-1", front:"Calculate the number of moles in 20 g of NaOH.",
   back:"Step 1: Find Mr of NaOH\nAr: Na = 23, O = 16, H = 1\nMr = 23 + 16 + 1 = 40\n\nStep 2: Use the formula\nmoles = mass ÷ Mr\nmoles = 20 ÷ 40 = 0.5 mol\n\nThere are 0.5 moles of NaOH in 20 g.", difficulty:2, category:"calculation"},
  {id:"s10fc-06-1-4", islandId:"s10i-06-1", front:"Calculate the mass of 3 moles of CO₂.",
   back:"Step 1: Find Mr of CO₂\nAr: C = 12, O = 16\nMr = 12 + (2 × 16) = 44\n\nStep 2: Use the formula\nmass = moles × Mr\nmass = 3 × 44 = 132 g\n\nThe mass of 3 moles of CO₂ is 132 g.", difficulty:2, category:"calculation"},
  {id:"s10fc-06-1-5", islandId:"s10i-06-1", front:"Why is the mole concept useful in chemistry?",
   back:"Atoms and molecules are far too small to count individually. The mole allows chemists to:\n\n• Measure out specific amounts of substances using scales (mass in grams)\n• Convert between mass and number of particles\n• Use balanced equations to predict how much product forms or how much reactant is needed\n\nOne mole of any substance has a mass in grams equal to its Mr.", difficulty:2, category:"concept"},

  // s10i-06-2 — Reacting Masses
  {id:"s10fc-06-2-1", islandId:"s10i-06-2", front:"How do you use a balanced equation to calculate reacting masses?",
   back:"Steps:\n1. Write the balanced equation\n2. Find the Mr of the substances you are interested in\n3. Calculate the moles of the substance you know\n4. Use the mole ratio from the equation to find the moles of the substance you want\n5. Convert moles back to mass using mass = moles × Mr", difficulty:2, category:"concept"},
  {id:"s10fc-06-2-2", islandId:"s10i-06-2", front:"What is a limiting reactant?",
   back:"The limiting reactant is the reactant that is completely used up first in a reaction. It determines the maximum amount of product that can form.\n\nThe other reactant is in excess — some of it is left over after the reaction.\n\nTo identify the limiting reactant: calculate the moles of each reactant and compare with the mole ratio in the balanced equation.", difficulty:2, category:"definition"},
  {id:"s10fc-06-2-3", islandId:"s10i-06-2", front:"Mg + 2HCl → MgCl₂ + H₂. Calculate the mass of MgCl₂ produced from 4.8 g of Mg.",
   back:"Step 1: Mr of Mg = 24; Mr of MgCl₂ = 24 + (2 × 35.5) = 95\n\nStep 2: moles of Mg = 4.8 ÷ 24 = 0.2 mol\n\nStep 3: From the equation, 1 mol Mg → 1 mol MgCl₂\nSo 0.2 mol Mg → 0.2 mol MgCl₂\n\nStep 4: mass = 0.2 × 95 = 19 g\n\n19 g of MgCl₂ is produced.", difficulty:3, category:"calculation"},
  {id:"s10fc-06-2-4", islandId:"s10i-06-2", front:"Why must equations be balanced before calculating reacting masses?",
   back:"A balanced equation shows the exact mole ratio in which reactants combine and products form.\n\nIf the equation is not balanced:\n• The mole ratios will be wrong\n• Mass calculations will give incorrect answers\n• The law of conservation of mass would appear to be violated\n\nBalanced equations ensure atoms in = atoms out.", difficulty:2, category:"concept"},
  {id:"s10fc-06-2-5", islandId:"s10i-06-2", front:"2Na + 2H₂O → 2NaOH + H₂. Calculate the mass of H₂ produced from 4.6 g of Na.",
   back:"Step 1: Mr of Na = 23; Mr of H₂ = 2\n\nStep 2: moles of Na = 4.6 ÷ 23 = 0.2 mol\n\nStep 3: From the equation, 2 mol Na → 1 mol H₂\nSo 0.2 mol Na → 0.1 mol H₂\n\nStep 4: mass = 0.1 × 2 = 0.2 g\n\n0.2 g of hydrogen gas is produced.", difficulty:3, category:"calculation"},

  // s10i-06-3 — Concentration & Titrations
  {id:"s10fc-06-3-1", islandId:"s10i-06-3", front:"What is the formula for concentration?",
   back:"Concentration = moles ÷ volume (in dm³)\n\nOr: concentration (g/dm³) = mass (g) ÷ volume (dm³)\n\nRearranged:\n• moles = concentration × volume\n• volume = moles ÷ concentration\n\nRemember: 1 dm³ = 1000 cm³\nTo convert cm³ to dm³, divide by 1000.", difficulty:1, category:"definition"},
  {id:"s10fc-06-3-2", islandId:"s10i-06-3", front:"Calculate the concentration of a solution containing 0.5 mol of NaCl in 250 cm³.",
   back:"Step 1: Convert volume to dm³\n250 cm³ ÷ 1000 = 0.25 dm³\n\nStep 2: Use the formula\nconcentration = moles ÷ volume\nconcentration = 0.5 ÷ 0.25 = 2 mol/dm³\n\nThe concentration is 2 mol/dm³.", difficulty:2, category:"calculation"},
  {id:"s10fc-06-3-3", islandId:"s10i-06-3", front:"Describe the key steps of a titration.",
   back:"1. Use a pipette to measure a fixed volume of one solution (e.g. alkali) into a conical flask\n2. Add a few drops of indicator (e.g. phenolphthalein or methyl orange)\n3. Fill a burette with the other solution (e.g. acid)\n4. Add the acid slowly from the burette, swirling the flask, until the indicator changes colour (end point)\n5. Record the volume of acid used from the burette\n6. Repeat to get concordant results (within 0.10 cm³)", difficulty:2, category:"application"},
  {id:"s10fc-06-3-4", islandId:"s10i-06-3", front:"In a titration, 25.0 cm³ of 0.1 mol/dm³ NaOH reacts with HCl. The mean titre is 20.0 cm³. Find the concentration of HCl.",
   back:"NaOH + HCl → NaCl + H₂O (1:1 ratio)\n\nStep 1: moles of NaOH = 0.1 × (25.0 ÷ 1000) = 0.0025 mol\n\nStep 2: moles of HCl = 0.0025 mol (1:1 ratio)\n\nStep 3: concentration of HCl = 0.0025 ÷ (20.0 ÷ 1000)\n= 0.0025 ÷ 0.020 = 0.125 mol/dm³", difficulty:3, category:"calculation"},
  {id:"s10fc-06-3-5", islandId:"s10i-06-3", front:"Why are concordant results important in a titration?",
   back:"Concordant results are titre readings that are very close together (within 0.10 cm³). They are important because:\n\n• They show the results are reproducible and reliable\n• Anomalous (outlier) results can be identified and discarded\n• The mean of concordant values gives a more accurate titre\n\nTypically, a rough titration is done first, then accurate titrations until at least two concordant results are obtained.", difficulty:2, category:"concept"},

  // s10i-06-4 — Percentage Yield & Atom Economy
  {id:"s10fc-06-4-1", islandId:"s10i-06-4", front:"What is percentage yield and how is it calculated?",
   back:"Percentage yield compares how much product you actually made with the maximum amount you could have made.\n\npercentage yield = (actual mass of product ÷ theoretical maximum mass) × 100\n\nThe theoretical maximum mass is calculated from the balanced equation (using reacting masses). The actual mass is what you really collect in the experiment.\n\nYield is always given as a percentage between 0 and 100%.", difficulty:1, category:"definition"},
  {id:"s10fc-06-4-2", islandId:"s10i-06-4", front:"Why is the percentage yield of a reaction never 100%?",
   back:"Yield is never 100% because of:\n\n• Reversible reactions — the reaction does not go fully to completion; products turn back into reactants\n• Losses — product is lost during transfer, filtering or evaporation\n• Side reactions — some reactants react in unwanted ways to form different products\n\nThese factors mean the actual mass of product is always less than the theoretical maximum.", difficulty:2, category:"concept"},
  {id:"s10fc-06-4-3", islandId:"s10i-06-4", front:"A reaction has a theoretical yield of 8.0 g but only 6.0 g is collected. Calculate the percentage yield.",
   back:"percentage yield = (actual mass ÷ theoretical mass) × 100\n\npercentage yield = (6.0 ÷ 8.0) × 100\n= 0.75 × 100\n= 75%\n\nThe percentage yield is 75%.", difficulty:2, category:"calculation"},
  {id:"s10fc-06-4-4", islandId:"s10i-06-4", front:"What is atom economy and how is it calculated?",
   back:"Atom economy measures how much of the mass of the reactants ends up as the useful (desired) product.\n\natom economy = (Mr of desired product ÷ total Mr of all products) × 100\n\nA high atom economy means most of the atoms from the reactants are used in the desired product, with little waste.", difficulty:2, category:"definition"},
  {id:"s10fc-06-4-5", islandId:"s10i-06-4", front:"Why is a high atom economy more sustainable?",
   back:"A reaction with high atom economy is more sustainable because:\n\n• Less waste is produced — fewer atoms end up in unwanted by-products\n• Raw materials are used more efficiently, so less is wasted\n• There are fewer waste products to dispose of, which can be costly and harmful\n• It is usually more profitable for industry\n\nHigh atom economy reactions make better use of finite resources.", difficulty:2, category:"concept"},

  // s10i-06-5 — Molar Gas Volume & Gas Calculations
  {id:"s10fc-06-5-1", islandId:"s10i-06-5", front:"What is the molar gas volume at rtp?",
   back:"At room temperature and pressure (rtp), one mole of ANY gas occupies the same volume:\n\n24 dm³ = 24 000 cm³\n\nThis is true for any gas because, at the same temperature and pressure, equal numbers of gas particles take up equal volumes — regardless of the type of gas.\n\nrtp means about 20 °C and 1 atmosphere pressure.", difficulty:1, category:"definition"},
  {id:"s10fc-06-5-2", islandId:"s10i-06-5", front:"What are the formulae linking moles and gas volume at rtp?",
   back:"volume (dm³) = moles × 24\n\nmoles = volume (dm³) ÷ 24\n\nRemember: 1 dm³ = 1000 cm³.\nIf a volume is given in cm³, divide by 1000 to convert to dm³ first (or use 24 000 cm³ per mole).", difficulty:1, category:"definition"},
  {id:"s10fc-06-5-3", islandId:"s10i-06-5", front:"Calculate the volume of 0.5 mol of oxygen gas at rtp.",
   back:"Use volume = moles × 24\n\nvolume = 0.5 × 24 = 12 dm³\n\nSo 0.5 mol of oxygen occupies 12 dm³ at rtp.\n\n(This is the same for 0.5 mol of any gas, because one mole of any gas occupies 24 dm³ at rtp.)", difficulty:2, category:"calculation"},
  {id:"s10fc-06-5-4", islandId:"s10i-06-5", front:"How many moles are in 4800 cm³ of carbon dioxide at rtp?",
   back:"Step 1: Convert volume to dm³\n4800 cm³ ÷ 1000 = 4.8 dm³\n\nStep 2: Use moles = volume ÷ 24\nmoles = 4.8 ÷ 24 = 0.2 mol\n\nThere are 0.2 mol of CO₂.\n\n(Alternatively: 4800 ÷ 24 000 = 0.2 mol.)", difficulty:2, category:"calculation"},
  {id:"s10fc-06-5-5", islandId:"s10i-06-5", front:"Does the molar gas volume of 24 dm³ apply to solids and liquids?",
   back:"No. The molar gas volume of 24 dm³ at rtp applies ONLY to gases.\n\nSolids and liquids are far more dense — their particles are packed close together — so one mole of a solid or liquid takes up far less volume than 24 dm³.\n\nOnly use volume = moles × 24 for substances that are gases at rtp.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-06-1": [
    {q:"What is the relative formula mass (Mr) of H₂SO₄? (Ar: H = 1, S = 32, O = 16)",
     opts:["49","98","64","80"], c:1,
     e:"Mr = (2 × 1) + 32 + (4 × 16) = 2 + 32 + 64 = 98. Add the relative atomic masses of all atoms in the formula."},
    {q:"How many moles are in 11 g of CO₂? (Mr of CO₂ = 44)",
     opts:["0.25 mol","0.5 mol","4 mol","44 mol"], c:0,
     e:"moles = mass ÷ Mr = 11 ÷ 44 = 0.25 mol. Always use the formula triangle: moles = mass ÷ Mr."},
    {q:"What mass of water (H₂O) is in 2 moles? (Mr of H₂O = 18)",
     opts:["9 g","18 g","36 g","72 g"], c:2,
     e:"mass = moles × Mr = 2 × 18 = 36 g. The mass of one mole of water is 18 g, so two moles is twice that."},
    {q:"One mole of any substance contains how many particles?",
     opts:["6.02 × 10²³","6.02 × 10²²","1 × 10²³","6.02 × 10²⁴"], c:0,
     e:"Avogadro's constant is 6.02 × 10²³. One mole of any substance — whether atoms, molecules or ions — contains this many particles."},
    {q:"What is the Mr of Ca(OH)₂? (Ar: Ca = 40, O = 16, H = 1)",
     opts:["57","74","58","76"], c:1,
     e:"Ca(OH)₂ has: 1 Ca + 2 O + 2 H. Mr = 40 + (2 × 16) + (2 × 1) = 40 + 32 + 2 = 74."}
  ],
  "s10i-06-2": [
    {q:"In the equation 2Mg + O₂ → 2MgO, what is the mole ratio of Mg to MgO?",
     opts:["1:2","2:1","1:1","2:2"], c:2,
     e:"The coefficients show 2 mol Mg produces 2 mol MgO — a 1:1 ratio (simplified). For every mole of magnesium burned, one mole of magnesium oxide is formed."},
    {q:"What mass of MgO forms when 6 g of Mg reacts fully? (Mg = 24, MgO Mr = 40)",
     opts:["10 g","20 g","40 g","5 g"], c:0,
     e:"moles of Mg = 6 ÷ 24 = 0.25 mol. From the 1:1 ratio, 0.25 mol MgO forms. mass = 0.25 × 40 = 10 g."},
    {q:"What is the limiting reactant?",
     opts:["The reactant present in excess","The reactant that is completely used up first","The product formed in the largest amount","The catalyst"], c:1,
     e:"The limiting reactant is fully consumed during the reaction and determines the maximum amount of product that can form. The other reactant(s) are in excess."},
    {q:"CaCO₃ → CaO + CO₂. What mass of CO₂ is produced from 50 g of CaCO₃? (CaCO₃ Mr = 100, CO₂ Mr = 44)",
     opts:["44 g","22 g","50 g","100 g"], c:1,
     e:"moles of CaCO₃ = 50 ÷ 100 = 0.5 mol. 1:1 ratio, so 0.5 mol CO₂. mass = 0.5 × 44 = 22 g."},
    {q:"Why must an equation be balanced before calculating reacting masses?",
     opts:["To make the equation look neater","To ensure the mole ratios are correct","To reduce the number of products","To increase the yield"], c:1,
     e:"A balanced equation gives the correct mole ratios between reactants and products. Without it, any mass calculation would give the wrong answer because the proportions would be incorrect."}
  ],
  "s10i-06-3": [
    {q:"What is the concentration of a solution containing 0.4 mol of solute in 2 dm³?",
     opts:["0.2 mol/dm³","0.8 mol/dm³","2 mol/dm³","5 mol/dm³"], c:0,
     e:"concentration = moles ÷ volume = 0.4 ÷ 2 = 0.2 mol/dm³."},
    {q:"How many cm³ are in 1 dm³?",
     opts:["10","100","1000","10000"], c:2,
     e:"1 dm³ = 1000 cm³. This is a crucial conversion in concentration calculations. To convert cm³ to dm³, divide by 1000."},
    {q:"In a titration, which piece of equipment is used to measure the volume of acid added?",
     opts:["Measuring cylinder","Pipette","Burette","Beaker"], c:2,
     e:"A burette is used to add acid gradually and measure the exact volume used. A pipette is used to measure the fixed volume of alkali. Measuring cylinders are not accurate enough for titrations."},
    {q:"25.0 cm³ of 0.2 mol/dm³ KOH is used in a titration. How many moles of KOH is this?",
     opts:["5 mol","0.005 mol","0.05 mol","0.5 mol"], c:1,
     e:"moles = concentration × volume (in dm³) = 0.2 × (25.0 ÷ 1000) = 0.2 × 0.025 = 0.005 mol."},
    {q:"Why should titrations be repeated until concordant results are obtained?",
     opts:["To use up all the chemicals","To check the indicator is working","To improve accuracy and identify anomalies","To make the experiment take longer"], c:2,
     e:"Concordant results (within 0.10 cm³) confirm the measurement is reliable. The mean of concordant values gives a more accurate result, and any anomalous readings can be identified and excluded."}
  ],
  "s10i-06-4": [
    {q:"What is the formula for percentage yield?",
     opts:["(theoretical mass ÷ actual mass) × 100","(actual mass ÷ theoretical mass) × 100","actual mass ÷ theoretical mass","(actual mass × theoretical mass) ÷ 100"], c:1,
     e:"percentage yield = (actual mass of product ÷ theoretical maximum mass) × 100. The actual mass is what you collect; the theoretical maximum comes from the balanced equation."},
    {q:"A reaction should theoretically produce 25 g of product, but only 20 g is collected. What is the percentage yield?",
     opts:["80%","75%","125%","20%"], c:0,
     e:"percentage yield = (20 ÷ 25) × 100 = 0.8 × 100 = 80%."},
    {q:"Which of these is NOT a reason why percentage yield is less than 100%?",
     opts:["The reaction is reversible","Product is lost during transfer or filtering","Side reactions form unwanted products","The equation is balanced"], c:3,
     e:"Reversible reactions, losses during handling, and side reactions all reduce yield below 100%. Balancing the equation is a normal, correct step and does not lower the yield."},
    {q:"What is the formula for atom economy?",
     opts:["(Mr of desired product ÷ total Mr of all products) × 100","(Mr of all products ÷ Mr of desired product) × 100","(actual mass ÷ theoretical mass) × 100","(Mr of reactants ÷ Mr of products) × 100"], c:0,
     e:"atom economy = (Mr of the desired product ÷ total Mr of all products) × 100. It measures how much of the reactant mass ends up as useful product."},
    {q:"Why is a reaction with a high atom economy more sustainable?",
     opts:["It always happens faster","Less waste is produced and raw materials are used efficiently","It uses a catalyst","It produces more by-products"], c:1,
     e:"High atom economy means most atoms from the reactants end up in the desired product, so less waste is made and finite raw materials are used efficiently — making the process more sustainable."}
  ],
  "s10i-06-5": [
    {q:"What volume does one mole of any gas occupy at rtp?",
     opts:["12 dm³","24 dm³","100 dm³","1 dm³"], c:1,
     e:"At room temperature and pressure (rtp), one mole of any gas occupies 24 dm³ (24 000 cm³). This is the same for all gases because equal numbers of gas particles take up equal volumes at the same conditions."},
    {q:"What is the volume of 2 mol of hydrogen gas at rtp?",
     opts:["12 dm³","24 dm³","48 dm³","2 dm³"], c:2,
     e:"volume = moles × 24 = 2 × 24 = 48 dm³. This works for any gas at rtp, since one mole always occupies 24 dm³."},
    {q:"How many moles are in 12 dm³ of methane gas at rtp?",
     opts:["0.5 mol","2 mol","24 mol","12 mol"], c:0,
     e:"moles = volume ÷ 24 = 12 ÷ 24 = 0.5 mol. Rearrange volume = moles × 24 to get moles = volume ÷ 24."},
    {q:"How many cm³ does 0.1 mol of carbon dioxide occupy at rtp?",
     opts:["240 cm³","2400 cm³","24 cm³","24 000 cm³"], c:1,
     e:"volume = 0.1 × 24 = 2.4 dm³. Converting to cm³: 2.4 × 1000 = 2400 cm³. (Or 0.1 × 24 000 = 2400 cm³.)"},
    {q:"Why can you NOT use volume = moles × 24 for solid calcium carbonate?",
     opts:["Calcium carbonate is a gas","The rule of 24 dm³ per mole applies only to gases","The Mr is too large","Solids have no volume"], c:1,
     e:"The molar gas volume of 24 dm³ at rtp applies only to gases. Solids and liquids are much denser, so one mole takes up far less than 24 dm³. Only use the rule for substances that are gases at rtp."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-06-1': `
<h2>Relative Formula Mass &amp; Moles</h2>
<p>Quantitative chemistry is all about measuring and calculating amounts of substances. The two key ideas are <strong>relative formula mass (Mr)</strong> and the <strong>mole</strong>.</p>

<h3>Relative Formula Mass (Mr)</h3>
<p>The relative formula mass is the sum of the relative atomic masses (Ar) of every atom in a formula:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Mr = sum of all Ar values in the formula</strong></p>
<ul>
  <li>Mr of NaCl = 23 + 35.5 = 58.5</li>
  <li>Mr of H₂SO₄ = (2 &times; 1) + 32 + (4 &times; 16) = 98</li>
  <li>Mr of Ca(OH)₂ = 40 + (2 &times; 16) + (2 &times; 1) = 74</li>
</ul>

<h3>The Mole</h3>
<p>A mole is the chemist's counting unit. One mole of any substance contains 6.02 &times; 10²³ particles (Avogadro's constant). The mass of one mole in grams equals the Mr.</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>moles = mass (g) &divide; Mr</strong></p>

<h3>Worked Example</h3>
<p>Calculate the number of moles in 5.6 g of nitrogen gas (N₂). (Ar of N = 14)</p>
<p>Mr of N₂ = 2 &times; 14 = 28<br>
moles = mass &divide; Mr = 5.6 &divide; 28 = <strong>0.2 mol</strong></p>

<h3>Common Mistake</h3>
<p>Students often forget to account for the number of atoms in a formula. For example, when calculating Mr of N₂ they use 14 instead of 28. Always check the subscript numbers and remember brackets multiply everything inside them.</p>
`,

's10i-06-2': `
<h2>Reacting Masses</h2>
<p>A balanced chemical equation tells you the exact ratio (in moles) in which reactants combine and products form. You can use this to calculate the mass of any reactant or product.</p>

<h3>Method for Reacting Mass Calculations</h3>
<ul>
  <li><strong>Step 1:</strong> Write the balanced equation</li>
  <li><strong>Step 2:</strong> Calculate Mr of the substances you need</li>
  <li><strong>Step 3:</strong> Find the moles of the substance you know (moles = mass &divide; Mr)</li>
  <li><strong>Step 4:</strong> Use the mole ratio from the equation to find moles of the unknown</li>
  <li><strong>Step 5:</strong> Convert back to mass (mass = moles &times; Mr)</li>
</ul>

<h3>Limiting Reactant</h3>
<p>When two reactants are mixed, one is usually used up before the other. The <strong>limiting reactant</strong> is the one completely used up first — it determines the <strong>maximum amount of product</strong> that can form. Once it has run out, the reaction stops, no matter how much of the other reactant is left. The reactant that is left over is said to be <em>in excess</em>.</p>
<p>To find the limiting reactant:</p>
<ul>
  <li><strong>Step 1:</strong> Convert the mass of <em>each</em> reactant to moles (moles = mass &divide; Mr)</li>
  <li><strong>Step 2:</strong> Compare these mole amounts against the mole ratio in the balanced equation</li>
  <li><strong>Step 3:</strong> Whichever reactant provides fewer moles than the ratio requires runs out first — that is the limiting reactant</li>
  <li><strong>Step 4:</strong> Calculate the mass of product using the moles of the limiting reactant only</li>
</ul>

<h3>Worked Example — Limiting Reactant</h3>
<p>4.8 g of magnesium is added to 7.3 g of hydrochloric acid. Which reactant is limiting, and what mass of hydrogen is produced?<br>
Equation: Mg + 2HCl &rarr; MgCl₂ + H₂<br>(Ar: Mg = 24, H = 1, Cl = 35.5; Mr of HCl = 36.5, Mr of H₂ = 2)</p>
<p><strong>Step 1 — moles of each reactant:</strong><br>
moles of Mg = 4.8 &divide; 24 = 0.20 mol<br>
moles of HCl = 7.3 &divide; 36.5 = 0.20 mol</p>
<p><strong>Step 2 — compare with the ratio:</strong> the equation needs <em>2 mol HCl for every 1 mol Mg</em>. To react all 0.20 mol of Mg would need 2 &times; 0.20 = 0.40 mol of HCl, but only 0.20 mol of HCl is available.</p>
<p><strong>Step 3 — identify the limiting reactant:</strong> the HCl runs out first, so <strong>HCl is the limiting reactant</strong> and the magnesium is in excess.</p>
<p><strong>Step 4 — mass of product from the limiting reactant:</strong><br>
Ratio: 2 mol HCl &rarr; 1 mol H₂, so 0.20 mol HCl &rarr; 0.10 mol H₂<br>
mass of H₂ = 0.10 &times; 2 = <strong>0.2 g</strong></p>

<h3>Worked Example</h3>
<p>Fe₂O₃ + 3CO &rarr; 2Fe + 3CO₂. What mass of iron is produced from 80 g of Fe₂O₃?<br>(Ar: Fe = 56, O = 16)</p>
<p>Mr of Fe₂O₃ = (2 &times; 56) + (3 &times; 16) = 160<br>
moles of Fe₂O₃ = 80 &divide; 160 = 0.5 mol<br>
Ratio: 1 mol Fe₂O₃ &rarr; 2 mol Fe, so 0.5 mol &rarr; 1.0 mol Fe<br>
mass of Fe = 1.0 &times; 56 = <strong>56 g</strong></p>

<h3>Common Mistake</h3>
<p>A very common error is forgetting to use the <em>mole ratio</em> from the balanced equation. Students often assume the ratio is always 1:1, but it varies — always check the coefficients in the equation before calculating.</p>
`,

's10i-06-3': `
<h2>Concentration &amp; Titrations</h2>
<p>Concentration tells you how much solute is dissolved in a given volume of solution. Titrations are a practical method for finding the concentration of an unknown solution.</p>

<h3>Concentration Formula</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>concentration (mol/dm³) = moles &divide; volume (dm³)</strong></p>
<p>Remember: 1 dm³ = 1000 cm³. Always convert cm³ to dm³ by dividing by 1000.</p>

<h3>Titration Method</h3>
<ul>
  <li>Pipette a known volume of alkali into a conical flask</li>
  <li>Add indicator (phenolphthalein or methyl orange)</li>
  <li>Fill a burette with acid and record the starting volume</li>
  <li>Add acid slowly, swirling, until the indicator changes colour (end point)</li>
  <li>Record the final volume; calculate the titre (volume added)</li>
  <li>Repeat for concordant results (within 0.10 cm³)</li>
</ul>

<h3>Worked Example</h3>
<p>25.0 cm³ of 0.10 mol/dm³ NaOH is neutralised by 12.5 cm³ of H₂SO₄. Find the concentration of H₂SO₄.<br>
Equation: 2NaOH + H₂SO₄ &rarr; Na₂SO₄ + 2H₂O</p>
<p>moles of NaOH = 0.10 &times; 0.025 = 0.0025 mol<br>
Ratio: 2 NaOH : 1 H₂SO₄, so moles of H₂SO₄ = 0.0025 &divide; 2 = 0.00125 mol<br>
concentration of H₂SO₄ = 0.00125 &divide; 0.0125 = <strong>0.10 mol/dm³</strong></p>

<h3>Common Mistake</h3>
<p>Students frequently forget to convert cm³ to dm³ before using the concentration formula. If you use 25 instead of 0.025 for the volume, your answer will be out by a factor of 1000. Always divide by 1000 first.</p>
`,

's10i-06-4': `
<h2>Percentage Yield &amp; Atom Economy</h2>
<p>In industry, chemists need to know how efficient a reaction is. Two measures of efficiency are <strong>percentage yield</strong> (how much product you actually get) and <strong>atom economy</strong> (how little waste the reaction produces).</p>

<h3>Percentage Yield</h3>
<p>The <strong>theoretical maximum mass</strong> is the amount of product you would get if the reaction worked perfectly, calculated from the balanced equation. The <strong>actual mass</strong> is what you really collect. The percentage yield compares the two:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>percentage yield = (actual mass &divide; theoretical maximum mass) &times; 100</strong></p>

<h3>Why Yield Is Never 100%</h3>
<p>In practice you never collect every gram of product, because of:</p>
<ul>
  <li><strong>Reversible reactions</strong> — the reaction does not go fully to completion, as products turn back into reactants</li>
  <li><strong>Losses</strong> — product is left behind during filtering, transferring or evaporating</li>
  <li><strong>Side reactions</strong> — some reactants react in unwanted ways to make different products</li>
</ul>

<h3>Worked Example — Percentage Yield</h3>
<p>A student calculates a theoretical maximum mass of 12.0 g of copper sulfate, but only collects 9.0 g. Calculate the percentage yield.</p>
<p>percentage yield = (actual mass &divide; theoretical mass) &times; 100<br>
= (9.0 &divide; 12.0) &times; 100<br>
= 0.75 &times; 100 = <strong>75%</strong></p>

<h3>Atom Economy</h3>
<p>Atom economy measures how much of the mass of the reactants ends up as the <em>useful</em> product, rather than as waste by-products:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>atom economy = (Mr of desired product &divide; total Mr of all products) &times; 100</strong></p>
<p>A <strong>high atom economy</strong> is more sustainable: less waste is made, finite raw materials are used efficiently, and there are fewer by-products to dispose of.</p>

<h3>Worked Example — Atom Economy</h3>
<p>Hydrogen is made by reacting zinc with acid: Zn + H₂SO₄ &rarr; ZnSO₄ + H₂. Calculate the atom economy for making hydrogen.<br>(Mr of H₂ = 2, Mr of ZnSO₄ = 161)</p>
<p>total Mr of all products = 161 + 2 = 163<br>
atom economy = (2 &divide; 163) &times; 100 = <strong>1.2%</strong></p>
<p>This is very low — almost all the reactant mass becomes the by-product ZnSO₄, so this is a wasteful way to make hydrogen.</p>

<h3>Common Mistake</h3>
<p>Students often confuse percentage yield with atom economy. Yield is about how much product you <em>actually collect</em> in an experiment; atom economy depends only on the <em>balanced equation</em> and the Mr values, not on how the experiment is carried out. A reaction can have a high yield but a low atom economy, or the other way round.</p>
`,

's10i-06-5': `
<h2>Molar Gas Volume &amp; Gas Calculations</h2>
<p>One of the most useful ideas in quantitative chemistry is that gases behave in a very simple way. At the same temperature and pressure, equal numbers of gas particles always take up equal volumes &mdash; no matter which gas it is. This leads to the idea of the <strong>molar gas volume</strong>.</p>

<h3>The Molar Gas Volume</h3>
<p>At <strong>room temperature and pressure (rtp)</strong> &mdash; about 20 &deg;C and 1 atmosphere &mdash; <strong>one mole of any gas occupies 24 dm³ (24 000 cm³)</strong>. This single value works for hydrogen, oxygen, carbon dioxide or any other gas.</p>

<h3>The Key Formulae</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>volume (dm³) = moles &times; 24</strong><br><strong>moles = volume (dm³) &divide; 24</strong></p>
<p>Combine this with <strong>moles = mass &divide; Mr</strong> to link the mass of a substance to the volume of gas involved. Remember: 1 dm³ = 1000 cm³.</p>

<h3>Worked Example &mdash; Volume from Mass</h3>
<p>Calculate the volume of CO₂ produced at rtp when 10 g of calcium carbonate decomposes.<br>
Equation: CaCO₃ &rarr; CaO + CO₂ (Mr of CaCO₃ = 100)</p>
<p>moles of CaCO₃ = mass &divide; Mr = 10 &divide; 100 = 0.1 mol<br>
Ratio 1:1, so moles of CO₂ = 0.1 mol<br>
volume of CO₂ = moles &times; 24 = 0.1 &times; 24 = <strong>2.4 dm³</strong></p>

<h3>Worked Example &mdash; Moles from Volume</h3>
<p>How many moles are there in 720 cm³ of oxygen at rtp?</p>
<p>Convert: 720 cm³ &divide; 1000 = 0.72 dm³<br>
moles = volume &divide; 24 = 0.72 &divide; 24 = <strong>0.03 mol</strong></p>

<h3>Common Mistake</h3>
<p>The two biggest errors are forgetting to convert between cm³ and dm³ (divide cm³ by 1000), and applying the 24 dm³ rule to a <em>solid</em> or <em>liquid</em>. The molar gas volume only works for gases &mdash; never calculate the &ldquo;volume&rdquo; of a solid reactant such as CaCO₃ using &times; 24.</p>
`

});
