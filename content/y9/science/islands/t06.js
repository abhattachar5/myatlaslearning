// content/y9/science/islands/t06.js — Year 9 Science Topic 6: Atomic Structure & Periodic Table
// Islands s9i-06-1 .. s9i-06-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-06-1 — Atoms, Elements & Isotopes
  {id:"s9fc-06-1-1", islandId:"s9i-06-1", front:"Describe the structure of an atom.",
   back:"An atom consists of a tiny, dense nucleus surrounded by electrons.\n\nThe nucleus contains:\n• Protons — relative mass 1, relative charge +1\n• Neutrons — relative mass 1, relative charge 0\n\nElectrons orbit the nucleus in shells (energy levels):\n• Relative mass negligible (≈ 1/1836), relative charge −1\n\nThe atom is mostly empty space.", difficulty:1, category:"definition"},
  {id:"s9fc-06-1-2", islandId:"s9i-06-1", front:"What do the atomic number and mass number tell you?",
   back:"Atomic number (bottom number, Z) = number of protons in the nucleus. This defines the element.\n\nMass number (top number, A) = protons + neutrons.\n\nNumber of neutrons = mass number − atomic number.\n\nIn a neutral atom, the number of electrons equals the number of protons.", difficulty:1, category:"concept"},
  {id:"s9fc-06-1-3", islandId:"s9i-06-1", front:"What is an isotope?",
   back:"Isotopes are atoms of the same element that have the same number of protons but a different number of neutrons.\n\nFor example, carbon-12 has 6 protons and 6 neutrons; carbon-14 has 6 protons and 8 neutrons.\n\nIsotopes have the same chemical properties (same electron configuration) but different masses.", difficulty:2, category:"definition"},
  {id:"s9fc-06-1-4", islandId:"s9i-06-1", front:"An atom has atomic number 11 and mass number 23. How many protons, neutrons and electrons does it have?",
   back:"Protons = atomic number = 11\nNeutrons = mass number − atomic number = 23 − 11 = 12\nElectrons = protons (neutral atom) = 11\n\nThis is sodium (Na).", difficulty:1, category:"calculation"},
  {id:"s9fc-06-1-5", islandId:"s9i-06-1", front:"What is the difference between an element and a compound?",
   back:"Element: a substance made of only one type of atom. All atoms in an element have the same number of protons. There are about 118 known elements.\n\nCompound: a substance made of two or more different elements chemically bonded together. The properties of a compound are different from the elements it is made from.\n\nFor example, water (H₂O) is a compound of hydrogen and oxygen.", difficulty:1, category:"definition"},

  // s9i-06-2 — Electron Configuration
  {id:"s9fc-06-2-1", islandId:"s9i-06-2", front:"What are the rules for filling electron shells?",
   back:"Electrons fill the lowest energy level (closest to the nucleus) first.\n\n• 1st shell holds up to 2 electrons\n• 2nd shell holds up to 8 electrons\n• 3rd shell holds up to 8 electrons (for the first 20 elements)\n\nExample: sodium (11 electrons) → 2, 8, 1", difficulty:1, category:"concept"},
  {id:"s9fc-06-2-2", islandId:"s9i-06-2", front:"Write the electron configuration of chlorine (17 electrons).",
   back:"Chlorine: 2, 8, 7\n\n• 1st shell: 2 electrons (full)\n• 2nd shell: 8 electrons (full)\n• 3rd shell: 7 electrons\n\nChlorine is in Group 7 because it has 7 electrons in its outer shell.", difficulty:1, category:"calculation"},
  {id:"s9fc-06-2-3", islandId:"s9i-06-2", front:"How does electron configuration link to position in the periodic table?",
   back:"The group number tells you the number of electrons in the outer shell.\n• Group 1 → 1 outer electron\n• Group 7 → 7 outer electrons\n• Group 0 → full outer shell (8, or 2 for helium)\n\nThe period number tells you how many electron shells the atom has.\n• Period 2 → 2 shells\n• Period 3 → 3 shells\n\nThis link explains why elements in the same group have similar chemical properties.", difficulty:2, category:"concept"},
  {id:"s9fc-06-2-4", islandId:"s9i-06-2", front:"Why are noble gases (Group 0) unreactive?",
   back:"Noble gases have a full outer electron shell (8 electrons, or 2 for helium).\n\nThis is an extremely stable arrangement. There is no tendency to gain, lose or share electrons.\n\nBecause chemical reactions involve changes in electron configuration, noble gases rarely react.\n\nExamples: helium (2), neon (2,8), argon (2,8,8).", difficulty:2, category:"concept"},
  {id:"s9fc-06-2-5", islandId:"s9i-06-2", front:"Write the electron configuration of calcium (20 electrons).",
   back:"Calcium: 2, 8, 8, 2\n\n• 1st shell: 2\n• 2nd shell: 8\n• 3rd shell: 8\n• 4th shell: 2\n\nCalcium is in Group 2, Period 4 — it has 2 outer electrons and 4 electron shells.", difficulty:2, category:"calculation"},

  // s9i-06-3 — Groups & Trends
  {id:"s9fc-06-3-1", islandId:"s9i-06-3", front:"Describe the trend in reactivity going down Group 1.",
   back:"Reactivity increases going down Group 1.\n\nReason: as you go down, atoms have more electron shells. The outer electron is further from the nucleus and shielded by more inner electrons, so it is held less tightly and is lost more easily.\n\nLithium is the least reactive; caesium is very reactive indeed.", difficulty:2, category:"concept"},
  {id:"s9fc-06-3-2", islandId:"s9i-06-3", front:"What happens when Group 1 metals react with water?",
   back:"metal + water → metal hydroxide + hydrogen\n\nFor example: sodium + water → sodium hydroxide + hydrogen\n2Na + 2H₂O → 2NaOH + H₂\n\nThe metal hydroxide dissolves to form an alkaline solution (hence 'alkali metals').\nThe hydrogen gas may ignite with more reactive metals (e.g. potassium burns with a lilac flame).", difficulty:2, category:"concept"},
  {id:"s9fc-06-3-3", islandId:"s9i-06-3", front:"Describe the trend in reactivity going down Group 7.",
   back:"Reactivity DECREASES going down Group 7.\n\nReason: as you go down, atoms have more electron shells. The outer shell is further from the nucleus and more shielded, so it is harder to attract an extra electron to fill the outer shell.\n\nFluorine is the most reactive halogen; astatine is the least.", difficulty:2, category:"concept"},
  {id:"s9fc-06-3-4", islandId:"s9i-06-3", front:"What is a halogen displacement reaction?",
   back:"A more reactive halogen can displace a less reactive halogen from a solution of its salt.\n\nExample: chlorine + potassium bromide → potassium chloride + bromine\nCl₂ + 2KBr → 2KCl + Br₂\n\nChlorine displaces bromine because chlorine is higher in Group 7 and more reactive.\n\nBromine cannot displace chlorine — it is less reactive.", difficulty:2, category:"application"},
  {id:"s9fc-06-3-5", islandId:"s9i-06-3", front:"Predict the properties of an unknown element in Period 3, Group 1.",
   back:"Period 3 → 3 electron shells\nGroup 1 → 1 outer electron → metal\n\nThis is sodium. Predicted properties:\n• Soft, silvery metal\n• Reacts vigorously with water to produce an alkaline solution and hydrogen\n• More reactive than lithium but less reactive than potassium\n• Stored under oil to prevent reaction with air or moisture\n• Low melting point for a metal", difficulty:2, category:"application"},
  {id:"s9fc-06-3-6", islandId:"s9i-06-3", front:"Describe the physical properties of halogens at room temperature.",
   back:"Going down Group 7, the halogens change state at room temperature:\n\n• Fluorine (F₂) — pale yellow gas\n• Chlorine (Cl₂) — green gas\n• Bromine (Br₂) — red-brown liquid\n• Iodine (I₂) — dark grey solid (purple vapour)\n\nMelting and boiling points increase down the group because the molecules get larger, so intermolecular forces (van der Waals) become stronger.", difficulty:1, category:"definition"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-06-1": [
    {q:"An atom has 8 protons, 8 neutrons and 8 electrons. What is its mass number?",
     opts:["8","16","24","32"], c:1,
     e:"Mass number = protons + neutrons = 8 + 8 = 16. This is oxygen-16. The mass number does not include electrons because their mass is negligible."},
    {q:"Two atoms both have 6 protons but different numbers of neutrons. They are:",
     opts:["Different elements","Ions","Isotopes","Compounds"], c:2,
     e:"Atoms of the same element with different numbers of neutrons are called isotopes. They have the same atomic number (same number of protons) but different mass numbers. For example, carbon-12 and carbon-14 are isotopes of carbon."},
    {q:"What is the charge of a proton?",
     opts:["+1","−1","0","−2"], c:0,
     e:"Protons have a relative charge of +1. Electrons have a charge of −1. Neutrons are neutral (charge 0). In a neutral atom, the number of protons equals the number of electrons, so the charges cancel out."},
    {q:"The atomic number of magnesium is 12 and its mass number is 24. How many neutrons does it have?",
     opts:["12","24","36","6"], c:0,
     e:"Neutrons = mass number − atomic number = 24 − 12 = 12 neutrons. Magnesium-24 also has 12 protons and 12 electrons."},
    {q:"Which statement correctly describes a compound?",
     opts:["A substance containing only one type of atom","A mixture of two elements that can be easily separated","Two or more different elements chemically bonded together","A single element in its purest form"], c:2,
     e:"A compound is formed when atoms of two or more different elements are chemically bonded together. The properties of the compound differ from those of its constituent elements. A mixture, by contrast, is not chemically bonded and can be separated by physical means."}
  ],
  "s9i-06-2": [
    {q:"What is the electron configuration of aluminium (13 electrons)?",
     opts:["2, 8, 3","2, 3, 8","2, 8, 2, 1","13"], c:0,
     e:"Fill shells from the inside: 1st shell = 2, 2nd shell = 8, remaining 3 go into the 3rd shell → 2, 8, 3. Aluminium is in Group 3, Period 3."},
    {q:"An element has the electron configuration 2, 8, 1. Which group is it in?",
     opts:["Group 2","Group 8","Group 1","Group 11"], c:2,
     e:"The number of electrons in the outer shell determines the group. This element has 1 electron in its outer shell, so it is in Group 1. It has 3 shells, so it is in Period 3. This is sodium."},
    {q:"Why do elements in the same group have similar chemical properties?",
     opts:["They have the same number of neutrons","They have the same mass number","They have the same number of electrons in their outer shell","They are all metals"], c:2,
     e:"Chemical reactions involve the outer-shell electrons. Elements in the same group have the same number of outer-shell electrons, so they react in similar ways. For example, all Group 1 metals lose one electron when they react."},
    {q:"Which noble gas has the electron configuration 2, 8?",
     opts:["Helium","Neon","Argon","Krypton"], c:1,
     e:"Neon has 10 electrons arranged as 2, 8. Helium has just 2 electrons. Argon has 18 electrons (2, 8, 8). Neon's full outer shell makes it very stable and unreactive."},
    {q:"Why are noble gases unreactive?",
     opts:["They have no electrons","They have a full outer electron shell, making them very stable","They are too heavy to react","They are all liquids at room temperature"], c:1,
     e:"Noble gases have full outer electron shells (2 for helium, 8 for the others up to element 20). This is a very stable arrangement, so there is no tendency to gain, lose or share electrons. They rarely form compounds."}
  ],
  "s9i-06-3": [
    {q:"Going down Group 1, reactivity increases because:",
     opts:["The atoms get smaller, making it easier to lose electrons","The outer electron is further from the nucleus and more shielded, so it is lost more easily","The atoms gain more protons, attracting electrons more strongly","The elements change from metals to non-metals"], c:1,
     e:"As you go down Group 1, each atom has more electron shells. The outer electron is further from the positive nucleus and is shielded by more inner electrons. The attraction between the nucleus and the outer electron is weaker, so it is lost more easily — increasing reactivity."},
    {q:"Chlorine is bubbled through potassium iodide solution and the solution turns brown. What has happened?",
     opts:["Chlorine has dissolved and changed colour","Chlorine has displaced iodine because it is more reactive","Iodine has displaced chlorine","Potassium has reacted with chlorine"], c:1,
     e:"Chlorine is more reactive than iodine (higher in Group 7). It displaces iodine from the potassium iodide solution: Cl₂ + 2KI → 2KCl + I₂. The brown colour is the freed iodine in solution."},
    {q:"Which halogen is a liquid at room temperature?",
     opts:["Fluorine","Chlorine","Bromine","Iodine"], c:2,
     e:"Bromine (Br₂) is a red-brown liquid at room temperature. Fluorine and chlorine are gases; iodine is a dark grey solid (though it can sublimate to a purple vapour)."},
    {q:"Sodium reacts with water. What are the products?",
     opts:["Sodium chloride + oxygen","Sodium oxide + hydrogen","Sodium hydroxide + hydrogen","Sodium hydroxide + oxygen"], c:2,
     e:"Sodium + water → sodium hydroxide + hydrogen. 2Na + 2H₂O → 2NaOH + H₂. The sodium hydroxide dissolves to form an alkaline solution. The hydrogen may fizz or ignite."},
    {q:"Why does reactivity DECREASE going down Group 7?",
     opts:["Atoms get smaller, holding electrons more tightly","The outer shell is further from the nucleus and more shielded, so gaining an electron is harder","The atoms lose electrons more easily","Group 7 elements become metals lower down"], c:1,
     e:"Group 7 elements react by gaining one electron to fill their outer shell. Going down the group, the outer shell is further from the nucleus and more shielded, so the nucleus attracts incoming electrons less strongly. This makes it harder to gain an electron, reducing reactivity."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-06-1': `
<h2>Atoms, Elements &amp; Isotopes</h2>
<p>Everything around you is made of atoms. Understanding atomic structure is the gateway to all of chemistry &mdash; from bonding and reactions to the periodic table.</p>

<h3>Inside the Atom</h3>
<ul>
  <li><strong>Protons</strong> &mdash; in the nucleus; relative mass 1, relative charge +1</li>
  <li><strong>Neutrons</strong> &mdash; in the nucleus; relative mass 1, no charge</li>
  <li><strong>Electrons</strong> &mdash; orbit the nucleus in shells; negligible mass, relative charge &minus;1</li>
</ul>
<p>The <strong>atomic number</strong> (Z) = number of protons &mdash; this defines which element the atom is. The <strong>mass number</strong> (A) = protons + neutrons.</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Neutrons = mass number &minus; atomic number</strong></p>

<h3>Isotopes</h3>
<p>Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons. For example, chlorine has two main isotopes: chlorine-35 (17p, 18n) and chlorine-37 (17p, 20n). They behave the same chemically because they have the same electron configuration.</p>

<h3>Worked Example</h3>
<p>An atom of potassium has atomic number 19 and mass number 39. Calculate the number of protons, neutrons and electrons.</p>
<p>Protons = 19. Neutrons = 39 &minus; 19 = 20. Electrons = 19 (neutral atom). Configuration: 2, 8, 8, 1.</p>

<h3>Common Mistake</h3>
<p>Students sometimes confuse atomic number with mass number. Remember: atomic number = protons (the smaller number), mass number = protons + neutrons (the larger number). Also, in a neutral atom, electrons = protons &mdash; but in an ion, the electron count changes.</p>
`,

's9i-06-2': `
<h2>Electron Configuration</h2>
<p>The way electrons are arranged around the nucleus explains why elements in the same group of the periodic table behave similarly. Learning to write electron configurations is a key skill for GCSE Chemistry.</p>

<h3>Rules for Filling Shells</h3>
<p>Electrons occupy the lowest available energy level (closest to the nucleus) first:</p>
<ul>
  <li>1st shell &mdash; holds up to <strong>2</strong> electrons</li>
  <li>2nd shell &mdash; holds up to <strong>8</strong> electrons</li>
  <li>3rd shell &mdash; holds up to <strong>8</strong> electrons (for the first 20 elements at GCSE)</li>
</ul>

<h3>Linking to the Periodic Table</h3>
<ul>
  <li><strong>Group number</strong> = number of electrons in the outer shell</li>
  <li><strong>Period number</strong> = number of electron shells</li>
  <li><strong>Group 0</strong> = full outer shell (stable, unreactive)</li>
</ul>
<p>Elements in the same group have the same number of outer electrons, which is why they show similar chemical properties.</p>

<h3>Worked Example</h3>
<p>Write the electron configuration of phosphorus (15 electrons) and state its group and period.</p>
<p>Configuration: 2, 8, 5. It has 5 outer electrons &rarr; <strong>Group 5</strong>. It has 3 shells &rarr; <strong>Period 3</strong>.</p>

<h3>Common Mistake</h3>
<p>Students sometimes put too many electrons in the first shell (e.g. writing 8 instead of 2). The first shell can only hold 2 electrons. Also, for the first 20 elements, the third shell fills to 8 before the fourth shell starts &mdash; calcium is 2, 8, 8, 2 (not 2, 8, 10).</p>
`,

's9i-06-3': `
<h2>Groups &amp; Trends</h2>
<div class="lesson-diagram" data-diagram="periodic-table"><p class="diagram-caption">Groups and periods in the periodic table</p></div>
<p>The periodic table is not just a list of elements &mdash; it reveals patterns (trends) in their properties. Understanding these trends allows you to predict how unfamiliar elements will behave.</p>

<h3>Group 1 &mdash; The Alkali Metals</h3>
<ul>
  <li>Soft metals, low density, low melting points (for metals)</li>
  <li>React vigorously with water: metal + water &rarr; metal hydroxide + hydrogen</li>
  <li><strong>Reactivity increases down the group</strong> &mdash; the outer electron is further from the nucleus and more shielded, so it is lost more easily</li>
  <li>Stored under oil to prevent reaction with air and moisture</li>
</ul>

<h3>Group 7 &mdash; The Halogens</h3>
<ul>
  <li>Non-metals; exist as diatomic molecules (F&#8322;, Cl&#8322;, Br&#8322;, I&#8322;)</li>
  <li>State at room temperature: F&#8322; and Cl&#8322; are gases, Br&#8322; is a liquid, I&#8322; is a solid</li>
  <li><strong>Reactivity decreases down the group</strong> &mdash; the outer shell is further from the nucleus, making it harder to gain an electron</li>
  <li>A more reactive halogen displaces a less reactive one from solution</li>
</ul>

<h3>Worked Example</h3>
<p>Explain why potassium is more reactive than sodium.</p>
<p>Potassium has one more electron shell than sodium (2,8,8,1 vs 2,8,1). Its outer electron is further from the nucleus and more shielded by inner electrons. The attraction between the nucleus and the outer electron is weaker, so potassium loses its outer electron more easily and reacts more vigorously.</p>

<h3>Common Mistake</h3>
<p>The reactivity trend goes in opposite directions for metals and non-metals. Group 1 metals get MORE reactive going down; Group 7 non-metals get LESS reactive going down. The reason is different: metals react by losing electrons (easier further from the nucleus), while non-metals react by gaining electrons (harder further from the nucleus). Do not mix up these two trends.</p>
`

});
