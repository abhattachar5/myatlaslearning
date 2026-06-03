// science-y11-t05.js — Year 11 Science Topic 5: Chemical Analysis & Testing
// Islands: s11i-05-1 .. s11i-05-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-05-1 — Identifying Ions & Gases
  {id:"s11fc-05-1-1",islandId:"s11i-05-1",front:"What colours do these metals give in a flame test: lithium, sodium, potassium, calcium, copper?",
   back:"Lithium — crimson (red)\nSodium — yellow\nPotassium — lilac\nCalcium — orange-red\nCopper — green/blue-green\n\nA clean nichrome wire dipped in the sample is held in a Bunsen flame.",difficulty:2,category:"definition"},
  {id:"s11fc-05-1-2",islandId:"s11i-05-1",front:"How do you test for the presence of carbonate ions (CO₃²⁻)?",
   back:"Add dilute hydrochloric acid to the sample. If carbonate ions are present, the mixture fizzes (effervesces).\n\nThe gas produced turns limewater milky — confirming it is carbon dioxide.",difficulty:2,category:"application"},
  {id:"s11fc-05-1-3",islandId:"s11i-05-1",front:"How do you test for hydrogen gas?",
   back:"Hold a lit splint near the mouth of the test tube.\n\nIf hydrogen is present, it burns with a squeaky pop.",difficulty:1,category:"definition"},
  {id:"s11fc-05-1-4",islandId:"s11i-05-1",front:"How do you use sodium hydroxide (NaOH) solution to identify metal ions?",
   back:"Add a few drops of NaOH solution to the sample solution. A coloured precipitate forms:\n\nCopper(II) — blue precipitate\nIron(II) — green precipitate\nIron(III) — brown precipitate\nCalcium — white precipitate\nAluminium — white precipitate (dissolves in excess NaOH)",difficulty:2,category:"application"},
  {id:"s11fc-05-1-5",islandId:"s11i-05-1",front:"How do you test for chlorine gas?",
   back:"Hold damp litmus paper near the gas.\n\nChlorine bleaches the litmus paper, turning it white.\n\n(Chlorine is a pale green, pungent gas.)",difficulty:1,category:"definition"},

  // s11i-05-2 — Chromatography
  {id:"s11fc-05-2-1",islandId:"s11i-05-2",front:"What is chromatography used for?",
   back:"Chromatography is used to separate and identify the different substances in a mixture.\n\nFor example, it can separate the dyes in an ink, or identify food colourings in a sample.",difficulty:1,category:"definition"},
  {id:"s11fc-05-2-2",islandId:"s11i-05-2",front:"Why must the pencil baseline be drawn in pencil, not pen?",
   back:"Pencil is insoluble in the solvent, so it will not dissolve and interfere with the results.\n\nIf drawn in pen, the ink could dissolve and move up the paper, mixing with the sample spots.",difficulty:1,category:"concept"},
  {id:"s11fc-05-2-3",islandId:"s11i-05-2",front:"What is the Rf value and how is it calculated?",
   back:"Rf = distance moved by substance ÷ distance moved by solvent\n\nThe Rf value is always between 0 and 1. Each substance has a unique Rf in a given solvent, so it can be used for identification.",difficulty:2,category:"calculation"},
  {id:"s11fc-05-2-4",islandId:"s11i-05-2",front:"A spot moves 3.6 cm and the solvent front moves 9.0 cm. Calculate the Rf value.",
   back:"Rf = 3.6 ÷ 9.0 = 0.40\n\nAlways measure from the pencil baseline to the centre of the spot, and from the baseline to the solvent front.",difficulty:2,category:"calculation"},
  {id:"s11fc-05-2-5",islandId:"s11i-05-2",front:"How can you tell from a chromatogram whether a sample is a pure substance or a mixture?",
   back:"A pure substance produces only one spot on the chromatogram.\n\nA mixture produces two or more spots, each representing a different component of the mixture.",difficulty:1,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-05-1":[
    {q:"A compound gives a lilac flame test. Which metal ion is present?",opts:["Lithium","Sodium","Potassium","Copper"],c:2,e:"Potassium produces a lilac flame. Lithium gives crimson, sodium gives yellow, and copper gives green/blue-green."},
    {q:"When NaOH is added to a solution, a blue precipitate forms. Which ion is present?",opts:["Iron(II)","Iron(III)","Copper(II)","Aluminium"],c:2,e:"Copper(II) ions form a blue precipitate of copper(II) hydroxide with NaOH. Iron(II) gives green, iron(III) gives brown, and aluminium gives white."},
    {q:"Which gas turns limewater milky?",opts:["Hydrogen","Oxygen","Carbon dioxide","Chlorine"],c:2,e:"Carbon dioxide reacts with limewater (calcium hydroxide solution) to form a milky white precipitate of calcium carbonate."},
    {q:"The test for oxygen is:",opts:["A glowing splint relights","A lit splint gives a squeaky pop","Damp litmus paper is bleached white","Limewater turns milky"],c:0,e:"A glowing splint placed in oxygen will relight, because oxygen supports combustion. The squeaky pop test is for hydrogen."},
    {q:"A white precipitate forms when NaOH is added. It dissolves when excess NaOH is added. Which ion is present?",opts:["Calcium","Iron(II)","Copper(II)","Aluminium"],c:3,e:"Both calcium and aluminium give a white precipitate with NaOH, but only aluminium hydroxide dissolves in excess NaOH. This distinguishing behaviour identifies aluminium ions."}
  ],
  "s11i-05-2":[
    {q:"What does an Rf value of 0.75 tell you?",opts:["The substance moved 75% as far as the solvent","The substance is 75% pure","The solvent moved 75% as far as the substance","75% of the substance dissolved"],c:0,e:"Rf = distance moved by substance ÷ distance moved by solvent. An Rf of 0.75 means the substance moved 75% of the distance the solvent front travelled."},
    {q:"A spot travels 4.2 cm and the solvent front travels 7.0 cm. What is the Rf value?",opts:["0.42","0.60","1.67","4.2"],c:1,e:"Rf = 4.2 ÷ 7.0 = 0.60. Always divide the substance distance by the solvent front distance."},
    {q:"A chromatogram shows three spots from one sample. What does this indicate?",opts:["The sample is pure","The sample contains three different substances","The experiment failed","The solvent was wrong"],c:1,e:"Each spot represents a different component of the mixture. Three spots means the sample contains at least three different substances."},
    {q:"Why must the baseline NOT be drawn in ink?",opts:["Ink is too dark to see","Ink would dissolve in the solvent and interfere with results","Ink costs more than pencil","Ink would damage the chromatography paper"],c:1,e:"If the baseline were drawn in ink, the ink could dissolve in the solvent and travel up the paper alongside the sample, contaminating the results."},
    {q:"Two substances have the same Rf value in the same solvent. What can you conclude?",opts:["They are definitely the same substance","They are likely the same substance but further tests may be needed","They must be different substances","The chromatography failed"],c:1,e:"The same Rf in the same solvent strongly suggests they are the same substance, but it is not absolute proof. Further analysis (e.g. using a different solvent or another analytical technique) may be needed to confirm."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-05-1': `
<h2>Identifying Ions &amp; Gases</h2>
<p>In chemistry, we often need to work out which substances are present in an unknown sample. <strong>Chemical tests</strong> provide quick, reliable ways to identify specific ions and gases.</p>

<h3>Flame tests</h3>
<p>A clean nichrome wire is dipped in the sample and held in a blue Bunsen flame. The colour identifies the metal ion:</p>
<ul>
<li><strong>Lithium</strong> — crimson (red)</li>
<li><strong>Sodium</strong> — yellow</li>
<li><strong>Potassium</strong> — lilac</li>
<li><strong>Calcium</strong> — orange-red</li>
<li><strong>Copper</strong> — green / blue-green</li>
</ul>

<h3>Precipitation tests with NaOH</h3>
<p>Adding sodium hydroxide solution to a sample solution produces a coloured precipitate that identifies the metal ion:</p>
<ul>
<li><strong>Copper(II)</strong> — blue precipitate</li>
<li><strong>Iron(II)</strong> — green precipitate</li>
<li><strong>Iron(III)</strong> — brown precipitate</li>
<li><strong>Aluminium</strong> — white precipitate (dissolves in excess NaOH)</li>
<li><strong>Calcium</strong> — white precipitate (does NOT dissolve in excess)</li>
</ul>

<h3>Gas tests</h3>
<ul>
<li><strong>Hydrogen</strong> — burns with a squeaky pop (lit splint)</li>
<li><strong>Oxygen</strong> — relights a glowing splint</li>
<li><strong>Carbon dioxide</strong> — turns limewater milky</li>
<li><strong>Chlorine</strong> — bleaches damp litmus paper white</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> A white precipitate forms when NaOH is added to solution X. When more NaOH is added, the precipitate dissolves. Identify the metal ion.</p>
<p><strong>A:</strong> Both aluminium and calcium ions produce a white precipitate. However, only <strong>aluminium hydroxide</strong> dissolves in excess NaOH. Therefore solution X contains <strong>aluminium ions (Al³⁺)</strong>.</p>

<h3>Common mistake</h3>
<p>Students mix up the flame colours for calcium (orange-red) and lithium (crimson). Remember: <strong>Li</strong>thium is <strong>li</strong>ke a red <strong>li</strong>ght — pure crimson red.</p>`,

's11i-05-2': `
<h2>Chromatography</h2>
<div class="lesson-diagram" data-diagram="separation-techniques"><p class="diagram-caption">Paper chromatography</p></div>
<p><strong>Paper chromatography</strong> separates the components of a mixture based on how well each substance dissolves in the solvent and how attracted it is to the paper.</p>

<h3>Method</h3>
<ul>
<li>Draw a <strong>pencil</strong> baseline near the bottom of chromatography paper (pencil is insoluble).</li>
<li>Place small spots of the sample(s) on the baseline.</li>
<li>Stand the paper in a shallow layer of solvent — the solvent must be <strong>below</strong> the baseline.</li>
<li>The solvent rises up the paper, carrying the dissolved substances with it.</li>
<li>Remove the paper when the solvent front nears the top and mark the solvent front in pencil.</li>
</ul>

<h3>Interpreting the chromatogram</h3>
<p>A <strong>pure substance</strong> produces a single spot. A <strong>mixture</strong> separates into two or more spots. You can compare unknown spots with known reference substances to identify them.</p>

<h3>Rf values</h3>
<p><strong>Rf = distance moved by substance ÷ distance moved by solvent front</strong></p>
<p>The Rf value is specific to a substance in a given solvent, so it acts as a fingerprint for identification.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A dye spot moves 5.4 cm. The solvent front moves 9.0 cm. Calculate the Rf value.</p>
<p><strong>A:</strong> Rf = 5.4 ÷ 9.0 = <strong>0.60</strong>.</p>

<h3>Common mistake</h3>
<p>Students sometimes measure from the top of the paper instead of from the <strong>pencil baseline</strong>. Always measure both distances from the baseline — the substance to the centre of its spot, and the solvent to the solvent front line.</p>`

});
