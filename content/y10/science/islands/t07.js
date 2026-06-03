// content/y10/science/islands/t07.js — Year 10 Science Topic 7: Chemical Changes: Reactivity & Electrolysis
// Islands s10i-07-1 .. s10i-07-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-07-1 — The Reactivity Series
  {id:"s10fc-07-1-1", islandId:"s10i-07-1", front:"List the reactivity series of metals from most to least reactive.",
   back:"Most reactive → Least reactive:\n\nPotassium (K)\nSodium (Na)\nLithium (Li)\nCalcium (Ca)\nMagnesium (Mg)\nAluminium (Al)\nCarbon (C) — non-metal, included for extraction reference\nZinc (Zn)\nIron (Fe)\nHydrogen (H) — non-metal, reference point\nCopper (Cu)\nSilver (Ag)\nGold (Au)\nPlatinum (Pt)\n\nMnemonic: Please Stop Letting Cows Moo And Chew Zesty Iron Hay Cupcakes, Silly Girl, Pam!", difficulty:1, category:"definition"},
  {id:"s10fc-07-1-2", islandId:"s10i-07-1", front:"What is a displacement reaction?",
   back:"A displacement reaction occurs when a more reactive metal takes the place of a less reactive metal in a compound.\n\nExample: Zn + CuSO₄ → ZnSO₄ + Cu\nZinc is more reactive than copper, so it displaces copper from copper sulfate solution.\n\nRule: A more reactive element will displace a less reactive element from its compound.", difficulty:1, category:"concept"},
  {id:"s10fc-07-1-3", islandId:"s10i-07-1", front:"Write the ionic equation for the reaction of zinc with copper sulfate.",
   back:"Full equation: Zn + CuSO₄ → ZnSO₄ + Cu\n\nIonic equation: Zn + Cu²⁺ → Zn²⁺ + Cu\n\nThe sulfate ions (SO₄²⁻) are spectator ions — they do not change during the reaction.\n\nZinc is oxidised (loses electrons): Zn → Zn²⁺ + 2e⁻\nCopper is reduced (gains electrons): Cu²⁺ + 2e⁻ → Cu", difficulty:2, category:"application"},
  {id:"s10fc-07-1-4", islandId:"s10i-07-1", front:"How can you determine the reactivity of a metal experimentally?",
   back:"Method 1: Reactions with water\n• Very reactive metals (K, Na) react vigorously with cold water\n• Less reactive metals (Mg, Ca) react slowly with cold water but faster with steam\n• Unreactive metals (Cu, Au) do not react with water\n\nMethod 2: Reactions with dilute acid\n• More reactive metals fizz more vigorously (produce hydrogen gas faster)\n• Test gas with a burning splint — hydrogen gives a squeaky pop\n\nMethod 3: Displacement reactions\n• Place metals in solutions of other metal salts and observe which displace which", difficulty:2, category:"application"},
  {id:"s10fc-07-1-5", islandId:"s10i-07-1", front:"What is oxidation and reduction in terms of electron transfer?",
   back:"OIL RIG:\n• Oxidation Is Loss of electrons\n• Reduction Is Gain of electrons\n\nIn a displacement reaction:\n• The more reactive metal is oxidised (it loses electrons)\n• The less reactive metal ion is reduced (it gains electrons)\n\nExample: Mg + CuSO₄ → MgSO₄ + Cu\nMg → Mg²⁺ + 2e⁻ (oxidation)\nCu²⁺ + 2e⁻ → Cu (reduction)", difficulty:2, category:"concept"},

  // s10i-07-2 — Extraction of Metals
  {id:"s10fc-07-2-1", islandId:"s10i-07-2", front:"How does a metal's position in the reactivity series determine its extraction method?",
   back:"Metals below carbon in the reactivity series:\n• Can be extracted by reduction with carbon (heating with carbon or carbon monoxide)\n• Examples: iron, copper, zinc, lead\n\nMetals above carbon:\n• Too reactive to be reduced by carbon\n• Must be extracted by electrolysis (using electricity)\n• Examples: aluminium, sodium, potassium\n\nThis is because carbon can only displace metals less reactive than itself.", difficulty:2, category:"concept"},
  {id:"s10fc-07-2-2", islandId:"s10i-07-2", front:"How is iron extracted in a blast furnace?",
   back:"Iron ore (haematite, Fe₂O₃) is reduced by carbon monoxide in the blast furnace:\n\n1. Coke (carbon) burns: C + O₂ → CO₂\n2. CO₂ + C → 2CO (carbon monoxide formed)\n3. Fe₂O₃ + 3CO → 2Fe + 3CO₂\n\nThe iron oxide is reduced (loses oxygen) and molten iron collects at the bottom.\n\nLimestone (CaCO₃) is added to remove impurities as slag.", difficulty:2, category:"application"},
  {id:"s10fc-07-2-3", islandId:"s10i-07-2", front:"Why must aluminium be extracted by electrolysis rather than carbon reduction?",
   back:"Aluminium is more reactive than carbon in the reactivity series.\n\nThis means carbon cannot displace aluminium from its compounds — the reaction would not occur.\n\nInstead, aluminium oxide (Al₂O₃) is dissolved in molten cryolite (to lower the melting point and reduce energy costs) and electrolysed.\n\nAt the cathode: Al³⁺ + 3e⁻ → Al\nAt the anode: 2O²⁻ → O₂ + 4e⁻", difficulty:3, category:"concept"},
  {id:"s10fc-07-2-4", islandId:"s10i-07-2", front:"What is an ore?",
   back:"An ore is a naturally occurring rock that contains enough of a metal or metal compound to make it economically worthwhile to extract.\n\nExamples:\n• Haematite — iron ore (contains Fe₂O₃)\n• Bauxite — aluminium ore (contains Al₂O₃)\n• Malachite — copper ore (contains CuCO₃)\n\nNot all rocks containing metals are ores — the metal must be present in sufficient quantity.", difficulty:1, category:"definition"},
  {id:"s10fc-07-2-5", islandId:"s10i-07-2", front:"How can copper be purified by electrolysis?",
   back:"Impure copper is purified using electrolysis:\n\n• Anode: impure copper (it dissolves, releasing Cu²⁺ ions)\n• Cathode: thin sheet of pure copper (Cu²⁺ ions deposit here)\n• Electrolyte: copper sulfate solution\n\nAt the anode: Cu → Cu²⁺ + 2e⁻\nAt the cathode: Cu²⁺ + 2e⁻ → Cu\n\nThe impure copper gets thinner; the pure copper gets thicker. Impurities collect at the bottom as sludge.", difficulty:3, category:"application"},

  // s10i-07-3 — Electrolysis
  {id:"s10fc-07-3-1", islandId:"s10i-07-3", front:"What is electrolysis?",
   back:"Electrolysis is the decomposition of an ionic compound using an electric current.\n\nRequirements:\n• An ionic compound that is either molten or dissolved in water (the electrolyte)\n• Two electrodes connected to a DC power supply\n• The anode (positive electrode) and cathode (negative electrode)\n\nPositive ions (cations) move to the cathode and gain electrons (reduction).\nNegative ions (anions) move to the anode and lose electrons (oxidation).", difficulty:1, category:"definition"},
  {id:"s10fc-07-3-2", islandId:"s10i-07-3", front:"What happens during the electrolysis of molten lead bromide?",
   back:"Lead bromide (PbBr₂) must be molten so the ions are free to move.\n\nAt the cathode (negative):\nPb²⁺ + 2e⁻ → Pb\nLead metal forms (silvery liquid)\n\nAt the anode (positive):\n2Br⁻ → Br₂ + 2e⁻\nBromine gas forms (brown/orange fumes)\n\nOverall: PbBr₂ → Pb + Br₂", difficulty:2, category:"concept"},
  {id:"s10fc-07-3-3", islandId:"s10i-07-3", front:"How do you predict the products of electrolysis of an aqueous solution?",
   back:"In aqueous solutions, water provides additional ions (H⁺ and OH⁻):\n\nAt the cathode:\n• If the metal is more reactive than hydrogen → hydrogen gas is produced\n• If the metal is less reactive than hydrogen → the metal is deposited\n\nAt the anode:\n• If the solution contains a halide ion (Cl⁻, Br⁻, I⁻) → the halogen is produced\n• Otherwise → oxygen gas is produced (from OH⁻ ions)", difficulty:3, category:"concept"},
  {id:"s10fc-07-3-4", islandId:"s10i-07-3", front:"Write the half equations for the electrolysis of sodium chloride solution (brine).",
   back:"Sodium chloride solution contains: Na⁺, Cl⁻, H⁺, OH⁻\n\nAt the cathode:\n2H⁺ + 2e⁻ → H₂ (hydrogen gas)\n(Na is more reactive than H, so H₂ is produced instead of Na)\n\nAt the anode:\n2Cl⁻ → Cl₂ + 2e⁻ (chlorine gas)\n(Halide ions are discharged preferentially)\n\nThe remaining Na⁺ and OH⁻ ions form sodium hydroxide (NaOH) in solution.", difficulty:3, category:"application"},
  {id:"s10fc-07-3-5", islandId:"s10i-07-3", front:"Why must the ionic compound be molten or dissolved for electrolysis to work?",
   back:"In a solid ionic compound, the ions are held in a fixed lattice and cannot move.\n\nFor electrolysis to work, the ions must be free to move towards the electrodes:\n• Melting breaks the lattice — ions can flow through the liquid\n• Dissolving in water also frees the ions to move in solution\n\nWithout mobile ions, no current can flow through the electrolyte and no products form at the electrodes.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-07-1": [
    {q:"Iron is added to copper sulfate solution. What happens?",
     opts:["Nothing — no reaction occurs","The iron is coated with copper; the solution turns pale green","The copper turns into iron","The solution turns blue"], c:1,
     e:"Iron is more reactive than copper, so it displaces copper from the solution. Iron dissolves to form iron sulfate (pale green), and copper metal is deposited on the iron. Fe + CuSO₄ → FeSO₄ + Cu."},
    {q:"Which of the following is the correct definition of oxidation in terms of electrons?",
     opts:["Gaining electrons","Losing electrons","Gaining oxygen","Losing hydrogen"], c:1,
     e:"Oxidation Is Loss of electrons (OIL RIG). In a displacement reaction, the more reactive metal loses electrons and is oxidised. While gaining oxygen is also oxidation, the electron definition is more precise."},
    {q:"Silver is added to magnesium sulfate solution. What would you observe?",
     opts:["Silver displaces magnesium","No reaction occurs","The solution turns brown","Hydrogen gas is produced"], c:1,
     e:"Silver is less reactive than magnesium, so it cannot displace magnesium from its compound. No reaction occurs. A less reactive metal cannot displace a more reactive one."},
    {q:"A metal reacts vigorously with cold water. Where is it likely to be in the reactivity series?",
     opts:["Near the bottom (low reactivity)","In the middle","Near the top (high reactivity)","It is a non-metal"], c:2,
     e:"Only the most reactive metals (potassium, sodium, lithium, calcium) react vigorously with cold water. Metals in the middle react slowly with water or only with steam. Metals near the bottom do not react with water at all."},
    {q:"In the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, which species is reduced?",
     opts:["Zn","Cu²⁺","Zn²⁺","Cu"], c:1,
     e:"Cu²⁺ gains two electrons to become Cu metal — this is reduction (Reduction Is Gain of electrons). Zinc is oxidised because it loses two electrons to form Zn²⁺."}
  ],
  "s10i-07-2": [
    {q:"Which method is used to extract aluminium from its ore?",
     opts:["Heating with carbon","Electrolysis","Displacement with iron","Filtering from water"], c:1,
     e:"Aluminium is more reactive than carbon, so carbon cannot reduce it. Electrolysis of molten aluminium oxide (dissolved in cryolite) is used instead. This requires large amounts of electrical energy."},
    {q:"In a blast furnace, which substance reduces iron oxide to iron?",
     opts:["Limestone","Coke (carbon) via carbon monoxide","Aluminium","Hydrogen"], c:1,
     e:"Coke (carbon) burns to form CO₂, which then reacts with more coke to form carbon monoxide (CO). The CO reduces iron oxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂."},
    {q:"What is an ore?",
     opts:["Any rock containing a metal","A rock containing enough metal to make extraction economically worthwhile","A pure sample of metal","A type of mineral used in jewellery"], c:1,
     e:"An ore is a rock that contains a sufficient concentration of a metal compound to make it economically viable to extract. Not every rock with traces of metal qualifies as an ore."},
    {q:"Why is cryolite used in the extraction of aluminium?",
     opts:["It reacts with aluminium oxide","It lowers the melting point of aluminium oxide, reducing energy costs","It acts as a catalyst","It removes impurities from the aluminium"], c:1,
     e:"Pure aluminium oxide melts at over 2000 °C, which would require enormous energy. Dissolving it in molten cryolite lowers the operating temperature to about 950 °C, significantly reducing energy costs."},
    {q:"During the electrolytic purification of copper, what happens at the anode?",
     opts:["Pure copper is deposited","Impure copper dissolves","Oxygen gas is produced","Hydrogen gas is produced"], c:1,
     e:"At the anode, the impure copper dissolves as Cu atoms lose electrons: Cu → Cu²⁺ + 2e⁻. The Cu²⁺ ions travel through the copper sulfate solution and deposit as pure copper on the cathode."}
  ],
  "s10i-07-3": [
    {q:"During electrolysis, positive ions move towards which electrode?",
     opts:["Anode (positive electrode)","Cathode (negative electrode)","Both electrodes equally","Neither electrode"], c:1,
     e:"Positive ions (cations) are attracted to the cathode (negative electrode) where they gain electrons (are reduced). Negative ions (anions) move to the anode (positive electrode) where they lose electrons (are oxidised)."},
    {q:"What is produced at the cathode during the electrolysis of sodium chloride solution?",
     opts:["Sodium metal","Chlorine gas","Hydrogen gas","Oxygen gas"], c:2,
     e:"Sodium is more reactive than hydrogen, so hydrogen ions from water are discharged instead of sodium ions. 2H⁺ + 2e⁻ → H₂. Hydrogen gas is produced at the cathode."},
    {q:"Why must lead bromide be molten for electrolysis?",
     opts:["So it conducts heat better","So the ions are free to move to the electrodes","So it does not react with the electrodes","So the colour change is visible"], c:1,
     e:"In solid lead bromide, the ions are locked in a lattice and cannot move. When molten, the ions are free to move — Pb²⁺ ions to the cathode and Br⁻ ions to the anode — allowing current to flow and products to form."},
    {q:"What is produced at the anode during the electrolysis of copper sulfate solution with inert electrodes?",
     opts:["Copper metal","Hydrogen gas","Oxygen gas","Sulfur dioxide"], c:2,
     e:"With inert electrodes and no halide ions present, OH⁻ ions from water are discharged at the anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻. Oxygen gas is produced. Copper (less reactive than hydrogen) deposits at the cathode."},
    {q:"Which products are formed from the electrolysis of molten sodium chloride?",
     opts:["Sodium at the cathode and chlorine at the anode","Hydrogen at the cathode and oxygen at the anode","Sodium at the anode and chlorine at the cathode","Chlorine at the cathode and sodium at the anode"], c:0,
     e:"In molten NaCl (no water present), the only ions are Na⁺ and Cl⁻. Na⁺ ions gain electrons at the cathode to form sodium metal. Cl⁻ ions lose electrons at the anode to form chlorine gas."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-07-1': `
<h2>The Reactivity Series</h2>
<div class="lesson-diagram" data-diagram="reactivity-series"><p class="diagram-caption">The reactivity series of metals</p></div>
<p>The reactivity series is a ranking of metals (and some non-metals) in order of how readily they react. Understanding this series allows you to predict displacement reactions, extraction methods, and whether a reaction will occur at all.</p>

<h3>The Series</h3>
<p>From most to least reactive: <strong>K, Na, Li, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au, Pt</strong></p>
<p>Carbon and hydrogen are included as reference points — carbon for extraction methods, hydrogen for reactions with acids.</p>

<h3>Displacement Reactions</h3>
<p>A more reactive metal will displace a less reactive metal from a solution of its salt:</p>
<ul>
  <li>Mg + ZnSO₄ &rarr; MgSO₄ + Zn (magnesium is more reactive than zinc)</li>
  <li>Cu + MgSO₄ &rarr; no reaction (copper is less reactive than magnesium)</li>
</ul>

<h3>Oxidation and Reduction (OIL RIG)</h3>
<ul>
  <li><strong>Oxidation</strong> — loss of electrons (the more reactive metal is oxidised)</li>
  <li><strong>Reduction</strong> — gain of electrons (the less reactive metal ion is reduced)</li>
</ul>

<h3>Worked Example</h3>
<p>Predict what happens when iron filings are added to copper sulfate solution, and write the ionic equation.</p>
<p>Iron is more reactive than copper, so iron displaces copper. The blue solution turns pale green as copper is deposited.<br>
Ionic equation: Fe + Cu²⁺ &rarr; Fe²⁺ + Cu<br>
Iron is oxidised (Fe &rarr; Fe²⁺ + 2e⁻); copper is reduced (Cu²⁺ + 2e⁻ &rarr; Cu).</p>

<h3>Common Mistake</h3>
<p>Students sometimes predict a reaction will occur even when the metal added is less reactive. Always check: if the metal is <em>below</em> the metal in the compound in the reactivity series, no displacement occurs.</p>
`,

's10i-07-2': `
<h2>Extraction of Metals</h2>
<p>How a metal is extracted from its ore depends on its position in the reactivity series. The more reactive the metal, the harder it is to extract.</p>

<h3>Two Main Methods</h3>
<ul>
  <li><strong>Reduction with carbon</strong> — used for metals below carbon in the reactivity series (e.g. iron, zinc, copper). Carbon removes the oxygen from the metal oxide.</li>
  <li><strong>Electrolysis</strong> — used for metals above carbon (e.g. aluminium, sodium). These metals are too reactive for carbon to displace them.</li>
</ul>

<h3>Extraction of Iron (Blast Furnace)</h3>
<ul>
  <li>Coke burns: C + O₂ &rarr; CO₂</li>
  <li>Carbon monoxide forms: CO₂ + C &rarr; 2CO</li>
  <li>Iron oxide is reduced: Fe₂O₃ + 3CO &rarr; 2Fe + 3CO₂</li>
  <li>Limestone removes impurities as slag</li>
</ul>

<h3>Extraction of Aluminium (Electrolysis)</h3>
<p>Aluminium oxide is dissolved in molten cryolite (to lower the melting point from ~2050 °C to ~950 °C). At the cathode: Al³⁺ + 3e⁻ &rarr; Al. At the anode: 2O²⁻ &rarr; O₂ + 4e⁻. The carbon anodes must be replaced regularly because they react with the oxygen produced.</p>

<h3>Worked Example</h3>
<p>Explain why copper can be extracted by heating copper oxide with carbon.</p>
<p>Copper is below carbon in the reactivity series, so carbon is more reactive and can displace copper from its oxide. The equation is: 2CuO + C &rarr; 2Cu + CO₂. The copper oxide is reduced (loses oxygen) and the carbon is oxidised (gains oxygen).</p>

<h3>Common Mistake</h3>
<p>Students sometimes forget that carbon has a position in the reactivity series. It sits between aluminium and zinc. Metals above carbon need electrolysis; metals below carbon can be extracted by heating with carbon or carbon monoxide.</p>
`,

's10i-07-3': `
<h2>Electrolysis</h2>
<p>Electrolysis is the decomposition of an ionic compound using an electric current. It requires the electrolyte to be molten or in aqueous solution so that the ions are free to move to the electrodes.</p>

<h3>Key Definitions</h3>
<ul>
  <li><strong>Electrolyte</strong> — the molten or dissolved ionic compound</li>
  <li><strong>Anode</strong> — the positive electrode (attracts anions; oxidation occurs here)</li>
  <li><strong>Cathode</strong> — the negative electrode (attracts cations; reduction occurs here)</li>
</ul>

<h3>Molten Electrolytes</h3>
<p>With molten electrolytes, only the ions of the compound are present. For example, molten PbBr₂:</p>
<ul>
  <li>Cathode: Pb²⁺ + 2e⁻ &rarr; Pb (lead metal)</li>
  <li>Anode: 2Br⁻ &rarr; Br₂ + 2e⁻ (bromine gas)</li>
</ul>

<h3>Aqueous Electrolytes</h3>
<p>In aqueous solutions, water provides extra H⁺ and OH⁻ ions, so you must apply rules:</p>
<ul>
  <li><strong>Cathode:</strong> if the metal is more reactive than hydrogen, hydrogen gas forms; if less reactive, the metal deposits</li>
  <li><strong>Anode:</strong> if a halide ion is present, the halogen forms; otherwise oxygen is produced</li>
</ul>

<h3>Worked Example</h3>
<p>Predict the products of electrolysing sodium chloride solution (brine).</p>
<p>At the cathode: sodium is more reactive than hydrogen, so H₂ forms: 2H⁺ + 2e⁻ &rarr; H₂<br>
At the anode: chloride is a halide, so Cl₂ forms: 2Cl⁻ &rarr; Cl₂ + 2e⁻<br>
Remaining in solution: Na⁺ and OH⁻ &rarr; sodium hydroxide (NaOH)</p>

<h3>Common Mistake</h3>
<p>Students often confuse which ions go to which electrode. Remember: <em>opposites attract</em>. Positive ions (cations) go to the <em>negative</em> cathode. Negative ions (anions) go to the <em>positive</em> anode. Use the mnemonic: PANIC — Positive Anode, Negative Is Cathode.</p>
`

});
