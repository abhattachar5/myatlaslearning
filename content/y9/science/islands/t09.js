// content/y9/science/islands/t09.js — Year 9 Science Topic 9: Acids, Bases & Neutralisation
// Islands s9i-09-1 .. s9i-09-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-09-1 — The pH Scale & Indicators
  {id:"s9fc-09-1-1", islandId:"s9i-09-1", front:"Describe the pH scale.",
   back:"The pH scale runs from 0 to 14 and measures how acidic or alkaline a solution is.\n\n• pH 0–6 = acidic (lower = stronger acid)\n• pH 7 = neutral\n• pH 8–14 = alkaline (higher = stronger alkali)\n\nAcids produce H⁺ ions in solution.\nAlkalis produce OH⁻ ions in solution.", difficulty:1, category:"definition"},
  {id:"s9fc-09-1-2", islandId:"s9i-09-1", front:"What is an indicator and name two common ones.",
   back:"An indicator is a substance that changes colour depending on the pH of a solution.\n\nLitmus paper:\n• Turns red in acid, blue in alkali\n\nUniversal indicator:\n• Gives a range of colours from red (strong acid) through green (neutral) to purple (strong alkali)\n• Can be used with a colour chart to estimate pH", difficulty:1, category:"definition"},
  {id:"s9fc-09-1-3", islandId:"s9i-09-1", front:"What is the difference between a strong acid and a weak acid?",
   back:"Strong acid — fully dissociates (ionises) in water. All molecules release H⁺ ions.\nExamples: hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃)\n\nWeak acid — only partially dissociates. Some molecules remain un-ionised.\nExamples: citric acid, ethanoic acid (vinegar)\n\nStrong vs weak is about ionisation, NOT concentration.", difficulty:2, category:"concept"},
  {id:"s9fc-09-1-4", islandId:"s9i-09-1", front:"What ions make a solution acidic? What ions make it alkaline?",
   back:"Acidic solutions contain an excess of hydrogen ions: H⁺ (often written as H⁺(aq))\n\nAlkaline solutions contain an excess of hydroxide ions: OH⁻ (often written as OH⁻(aq))\n\nIn a neutral solution, the concentrations of H⁺ and OH⁻ are equal.", difficulty:1, category:"concept"},
  {id:"s9fc-09-1-5", islandId:"s9i-09-1", front:"A solution turns universal indicator green. What is its approximate pH and is it acid, alkali or neutral?",
   back:"Green on the universal indicator colour chart indicates a pH of approximately 7.\n\nThis means the solution is neutral — it is neither acidic nor alkaline.\n\nPure water and neutral salt solutions (e.g. sodium chloride dissolved in water) give a green colour.", difficulty:1, category:"application"},

  // s9i-09-2 — Neutralisation Reactions
  {id:"s9fc-09-2-1", islandId:"s9i-09-2", front:"Write the general equation for neutralisation.",
   back:"acid + base → salt + water\n\nA base is a substance that neutralises an acid. If the base is soluble in water, it is called an alkali.\n\nIn terms of ions, neutralisation is:\nH⁺(aq) + OH⁻(aq) → H₂O(l)\n\nThe H⁺ from the acid combines with the OH⁻ from the base to form water.", difficulty:1, category:"definition"},
  {id:"s9fc-09-2-2", islandId:"s9i-09-2", front:"What happens when an acid reacts with a metal?",
   back:"acid + metal → salt + hydrogen\n\nExample: hydrochloric acid + magnesium → magnesium chloride + hydrogen\n2HCl + Mg → MgCl₂ + H₂\n\nThe hydrogen gas can be tested with a burning splint — it produces a squeaky pop.\n\nOnly metals above hydrogen in the reactivity series react with acids in this way.", difficulty:2, category:"concept"},
  {id:"s9fc-09-2-3", islandId:"s9i-09-2", front:"What happens when an acid reacts with a metal carbonate?",
   back:"acid + metal carbonate → salt + water + carbon dioxide\n\nExample: hydrochloric acid + calcium carbonate → calcium chloride + water + carbon dioxide\n2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂\n\nThe carbon dioxide can be tested with limewater — it turns milky (cloudy).", difficulty:2, category:"concept"},
  {id:"s9fc-09-2-4", islandId:"s9i-09-2", front:"How do you work out the name of the salt produced?",
   back:"The name of the salt depends on:\n1. The metal (or metal in the base/carbonate)\n2. The acid used\n\n• Hydrochloric acid → chloride salt\n• Sulfuric acid → sulfate salt\n• Nitric acid → nitrate salt\n\nExample: sulfuric acid + sodium hydroxide → sodium sulfate + water", difficulty:2, category:"application"},
  {id:"s9fc-09-2-5", islandId:"s9i-09-2", front:"Name the salt produced when nitric acid reacts with potassium hydroxide.",
   back:"Nitric acid → nitrate salt\nPotassium hydroxide → potassium\n\nSalt = potassium nitrate\n\nFull equation:\nHNO₃ + KOH → KNO₃ + H₂O", difficulty:2, category:"calculation"},
  {id:"s9fc-09-2-6", islandId:"s9i-09-2", front:"Describe a practical method for making a pure, dry sample of a soluble salt from an acid and an insoluble base.",
   back:"1. Warm the acid gently in a beaker\n2. Add the insoluble base (e.g. copper oxide) a little at a time, stirring, until it is in excess (some remains undissolved)\n3. Filter to remove the excess solid\n4. Pour the filtrate (salt solution) into an evaporating basin\n5. Heat gently to evaporate some water, then leave to crystallise\n6. Pat dry the crystals with filter paper\n\nThe excess base ensures all the acid has reacted.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-09-1": [
    {q:"A substance has a pH of 2. It is:",
     opts:["A strong alkali","Neutral","A strong acid","A weak alkali"], c:2,
     e:"pH 2 is very low on the scale (0–14), indicating a strong acid. pH 7 is neutral. pH 12–14 would be a strong alkali. The lower the pH below 7, the more strongly acidic the solution."},
    {q:"Which indicator gives a range of colours to estimate pH?",
     opts:["Litmus paper","Phenolphthalein","Universal indicator","Methyl orange"], c:2,
     e:"Universal indicator changes through a range of colours (red, orange, yellow, green, blue, purple) depending on the pH. This allows you to estimate the pH value. Litmus only tells you acid (red) or alkali (blue), not the specific pH."},
    {q:"Acidic solutions contain an excess of which ion?",
     opts:["OH⁻","Na⁺","H⁺","Cl⁻"], c:2,
     e:"Acids produce hydrogen ions (H⁺) when dissolved in water. The more H⁺ ions present, the lower the pH and the more acidic the solution. Alkaline solutions contain an excess of hydroxide ions (OH⁻)."},
    {q:"Hydrochloric acid is described as a strong acid. This means:",
     opts:["It is very concentrated","It has a very high pH","It fully dissociates into ions in water","It reacts slowly with metals"], c:2,
     e:"A strong acid fully dissociates (ionises) in water — every HCl molecule splits into H⁺ and Cl⁻ ions. 'Strong' refers to the degree of ionisation, NOT the concentration. A dilute solution of a strong acid is still a strong acid."},
    {q:"What colour does litmus paper turn in an alkaline solution?",
     opts:["Red","Green","Blue","Colourless"], c:2,
     e:"Blue litmus stays blue in alkali (no change). Red litmus turns blue in alkali. So in an alkaline solution, litmus paper is blue. In an acid, litmus turns red."}
  ],
  "s9i-09-2": [
    {q:"What are the products of acid + alkali?",
     opts:["Salt + hydrogen","Salt + water","Salt + carbon dioxide","Salt + oxygen"], c:1,
     e:"Acid + alkali → salt + water. This is a neutralisation reaction. The H⁺ ions from the acid combine with OH⁻ ions from the alkali to form water. Hydrogen gas is produced when acid reacts with a metal, not an alkali."},
    {q:"Sulfuric acid reacts with magnesium. Name the salt produced.",
     opts:["Magnesium chloride","Magnesium sulfate","Magnesium nitrate","Magnesium carbonate"], c:1,
     e:"Sulfuric acid always produces sulfate salts. The metal is magnesium. Therefore the salt is magnesium sulfate (MgSO₄). Hydrochloric acid → chlorides; nitric acid → nitrates."},
    {q:"Hydrochloric acid reacts with calcium carbonate. What gas is produced?",
     opts:["Hydrogen","Oxygen","Carbon dioxide","Chlorine"], c:2,
     e:"Acid + metal carbonate → salt + water + carbon dioxide. The carbonate decomposes, releasing CO₂. This gas turns limewater milky, which is the standard test. Hydrogen is produced when acid reacts with a reactive metal."},
    {q:"The ionic equation for neutralisation is:",
     opts:["Na⁺ + Cl⁻ → NaCl","H⁺ + OH⁻ → H₂O","H₂ + O₂ → H₂O","Mg²⁺ + SO₄²⁻ → MgSO₄"], c:1,
     e:"In every neutralisation reaction, the essential process is: H⁺(aq) + OH⁻(aq) → H₂O(l). The hydrogen ions from the acid combine with the hydroxide ions from the base to form water. The other ions are spectator ions."},
    {q:"A student wants to make copper sulfate crystals from copper oxide and sulfuric acid. Why should they add excess copper oxide?",
     opts:["To make the reaction go faster","To make the crystals blue","To ensure all the acid has reacted so the solution is not acidic","To save money on sulfuric acid"], c:2,
     e:"Adding excess insoluble base (copper oxide) ensures that all the sulfuric acid is neutralised. The excess copper oxide is then removed by filtration. If acid remained in the solution, the crystals would be contaminated."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-09-1': `
<h2>The pH Scale &amp; Indicators</h2>
<div class="lesson-diagram" data-diagram="ph-scale"><p class="diagram-caption">The pH scale</p></div>
<p>Acids and alkalis are everywhere in everyday life, from lemon juice and vinegar to cleaning products and indigestion tablets. The pH scale gives us a way to measure just how acidic or alkaline a substance is.</p>

<h3>The pH Scale</h3>
<p>The pH scale runs from <strong>0 to 14</strong>:</p>
<ul>
  <li><strong>pH 0&ndash;6</strong> = acidic (the lower, the stronger)</li>
  <li><strong>pH 7</strong> = neutral (pure water)</li>
  <li><strong>pH 8&ndash;14</strong> = alkaline (the higher, the stronger)</li>
</ul>
<p>Acids produce <strong>H&#8314;</strong> ions in solution. Alkalis produce <strong>OH&#8315;</strong> ions.</p>

<h3>Indicators</h3>
<p><strong>Litmus</strong>: red in acid, blue in alkali &mdash; a simple test but does not give the exact pH.</p>
<p><strong>Universal indicator</strong>: gives a range of colours from red (pH 1) through green (pH 7) to purple (pH 14). Used with a colour chart to estimate pH.</p>

<h3>Strong vs Weak Acids</h3>
<p>A <strong>strong acid</strong> (e.g. HCl, H&#8322;SO&#8324;) fully dissociates in water &mdash; all molecules release H&#8314; ions. A <strong>weak acid</strong> (e.g. ethanoic acid) only partially dissociates &mdash; an equilibrium exists. Do not confuse strong/weak with concentrated/dilute.</p>

<h3>Worked Example</h3>
<p>A student tests four solutions with universal indicator: Solution A turns red (pH 1), B turns orange (pH 4), C turns green (pH 7), D turns purple (pH 13). List them in order from most acidic to most alkaline.</p>
<p>A (pH 1) &rarr; B (pH 4) &rarr; C (pH 7) &rarr; D (pH 13). A is the most acidic; D is the most alkaline; C is neutral.</p>

<h3>Common Mistake</h3>
<p>Students often confuse strong with concentrated. A strong acid fully ionises regardless of concentration. You can have a dilute strong acid (e.g. 0.01 mol/dm&sup3; HCl) and a concentrated weak acid (e.g. pure ethanoic acid). These are two separate ideas.</p>
`,

's9i-09-2': `
<h2>Neutralisation Reactions</h2>
<p>Neutralisation is one of the most important types of chemical reaction. It is used in everyday life (indigestion tablets, treating acid spills) and is a core exam topic.</p>

<h3>Key Reactions</h3>
<ul>
  <li><strong>Acid + alkali &rarr; salt + water</strong> (neutralisation)</li>
  <li><strong>Acid + metal &rarr; salt + hydrogen</strong></li>
  <li><strong>Acid + metal carbonate &rarr; salt + water + carbon dioxide</strong></li>
</ul>

<h3>Naming Salts</h3>
<p>The salt name comes from (1) the metal or base used and (2) the acid:</p>
<ul>
  <li>Hydrochloric acid &rarr; <strong>chloride</strong> salts</li>
  <li>Sulfuric acid &rarr; <strong>sulfate</strong> salts</li>
  <li>Nitric acid &rarr; <strong>nitrate</strong> salts</li>
</ul>
<p>Example: sulfuric acid + copper oxide &rarr; <strong>copper sulfate</strong> + water</p>

<h3>Worked Example</h3>
<p>Write a balanced symbol equation for the reaction of hydrochloric acid with sodium hydroxide.</p>
<p><strong>HCl + NaOH &rarr; NaCl + H&#8322;O</strong></p>
<p>Hydrochloric acid + sodium hydroxide &rarr; sodium chloride + water. The ionic equation is: H&#8314;(aq) + OH&#8315;(aq) &rarr; H&#8322;O(l).</p>

<h3>Common Mistake</h3>
<p>Students sometimes forget the third product when an acid reacts with a carbonate. Remember: acid + carbonate gives salt + water + <strong>carbon dioxide</strong>. The CO&#8322; is what causes the fizzing you observe. Also, when naming salts, match the acid to the correct ending: HCl &rarr; chloride, H&#8322;SO&#8324; &rarr; sulfate, HNO&#8323; &rarr; nitrate.</p>
`

});
