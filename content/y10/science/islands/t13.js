// content/y10/science/islands/t13.js — Year 10 Science Topic 13: Radioactivity
// Islands s10i-13-1 .. s10i-13-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-13-1 — Atomic Structure & Radiation Types
  {id:"s10fc-13-1-1", islandId:"s10i-13-1", front:"Describe the nuclear model of the atom.",
   back:"The atom consists of:\n\n• A tiny, dense, positively charged nucleus at the centre, containing protons (positive) and neutrons (neutral)\n• Electrons (negative) orbiting the nucleus in shells/energy levels\n\nAlmost all the atom's mass is in the nucleus. The atom is mostly empty space.\n\nThis model was developed after Rutherford's gold foil experiment showed that the 'plum pudding' model was wrong.", difficulty:1, category:"definition"},
  {id:"s10fc-13-1-2", islandId:"s10i-13-1", front:"Compare the three types of nuclear radiation: alpha, beta and gamma.",
   back:"Alpha (α):\n• 2 protons + 2 neutrons (a helium nucleus)\n• Charge: +2, Mass: 4\n• Stopped by: paper/skin\n• Strongly ionising\n\nBeta (β):\n• A high-speed electron emitted from the nucleus\n• Charge: −1, Mass: ~0\n• Stopped by: aluminium (~5 mm)\n• Moderately ionising\n\nGamma (γ):\n• Electromagnetic radiation (no mass, no charge)\n• Stopped by: thick lead or concrete\n• Weakly ionising", difficulty:2, category:"concept"},
  {id:"s10fc-13-1-3", islandId:"s10i-13-1", front:"What is ionising radiation?",
   back:"Ionising radiation has enough energy to knock electrons from atoms, turning them into ions.\n\nAlpha particles are the most ionising because they are large and highly charged — they interact strongly with atoms they pass.\n\nGamma rays are the least ionising because they have no charge and pass through most atoms without interaction.\n\nIonisation can damage cells and DNA, which is why radiation exposure must be controlled.", difficulty:2, category:"concept"},
  {id:"s10fc-13-1-4", islandId:"s10i-13-1", front:"What happens to the nucleus when it emits an alpha particle?",
   back:"When a nucleus emits an alpha particle (²₄He):\n\n• Mass number decreases by 4\n• Atomic number decreases by 2\n\nExample: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He\n\nRadium-226 emits an alpha particle and becomes radon-222. The element changes because the number of protons has changed.", difficulty:2, category:"application"},
  {id:"s10fc-13-1-5", islandId:"s10i-13-1", front:"What happens to the nucleus when it emits a beta particle?",
   back:"In beta decay, a neutron in the nucleus turns into a proton and emits a high-speed electron (the beta particle):\n\n• Mass number stays the same\n• Atomic number increases by 1\n\nExample: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e\n\nCarbon-14 decays to nitrogen-14 by beta emission. The element changes because the number of protons increases by one.", difficulty:2, category:"application"},

  // s10i-13-2 — Half-Life
  {id:"s10fc-13-2-1", islandId:"s10i-13-2", front:"What is half-life?",
   back:"The half-life of a radioactive isotope is the time taken for:\n\n• The number of radioactive nuclei to halve, OR\n• The activity (count rate) to fall to half its original value\n\nHalf-life is constant for a given isotope — it does not change with temperature, pressure or chemical form.\n\nExamples: carbon-14 has a half-life of 5730 years; iodine-131 has a half-life of 8 days.", difficulty:1, category:"definition"},
  {id:"s10fc-13-2-2", islandId:"s10i-13-2", front:"A sample has an activity of 800 Bq. After 3 half-lives, what is the activity?",
   back:"Each half-life halves the activity:\n\nStart: 800 Bq\nAfter 1 half-life: 800 ÷ 2 = 400 Bq\nAfter 2 half-lives: 400 ÷ 2 = 200 Bq\nAfter 3 half-lives: 200 ÷ 2 = 100 Bq\n\nAlternatively: 800 × (½)³ = 800 × ⅛ = 100 Bq", difficulty:2, category:"calculation"},
  {id:"s10fc-13-2-3", islandId:"s10i-13-2", front:"A radioactive sample's activity drops from 1200 Bq to 150 Bq in 9 hours. Calculate the half-life.",
   back:"Count the halvings:\n1200 → 600 → 300 → 150\nThat is 3 half-lives.\n\nHalf-life = total time ÷ number of half-lives\n= 9 hours ÷ 3\n= 3 hours\n\nEach half-life is 3 hours.", difficulty:2, category:"calculation"},
  {id:"s10fc-13-2-4", islandId:"s10i-13-2", front:"How do you read half-life from a decay graph?",
   back:"On a graph of activity (or count rate) vs time:\n\n1. Read the starting activity from the y-axis\n2. Find the point where the activity is half the starting value\n3. Read across to find the corresponding time on the x-axis\n4. The difference between the start time and this time is one half-life\n\nYou can check by finding when the activity halves again — the time interval should be the same.", difficulty:2, category:"concept"},
  {id:"s10fc-13-2-5", islandId:"s10i-13-2", front:"Why is radioactive decay described as a random process?",
   back:"Radioactive decay is random because:\n\n• You cannot predict when a particular nucleus will decay\n• Each nucleus has the same probability of decaying in a given time period\n• The process is not affected by external conditions (temperature, pressure, chemical bonding)\n\nHowever, with a large number of nuclei, we can predict the overall rate of decay — this is what half-life describes. It is a statistical measure, not a prediction for individual atoms.", difficulty:2, category:"concept"},

  // s10i-13-3 — Uses & Dangers of Radiation
  {id:"s10fc-13-3-1", islandId:"s10i-13-3", front:"Give three uses of radioactive materials.",
   back:"1. Medical tracers — a gamma-emitting isotope (e.g. technetium-99m) is injected; a gamma camera detects it to image organs\n\n2. Radiotherapy — high doses of gamma radiation are aimed at cancerous tumours to destroy the cells\n\n3. Smoke detectors — americium-241 emits alpha particles; smoke absorbs them, reducing the current and triggering the alarm\n\nOther uses: carbon dating, thickness monitoring in industry, sterilising medical equipment", difficulty:1, category:"application"},
  {id:"s10fc-13-3-2", islandId:"s10i-13-3", front:"What is the difference between contamination and irradiation?",
   back:"Contamination: radioactive material is deposited on or inside a person or object. The source stays in contact, continuously emitting radiation. It is harder to control because the material remains.\n\nIrradiation: exposure to radiation from an external source. The person does not become radioactive. Once the source is removed, the exposure stops.\n\nContamination is generally more dangerous because the source is in direct contact with the body.", difficulty:2, category:"concept"},
  {id:"s10fc-13-3-3", islandId:"s10i-13-3", front:"How can people reduce their exposure to radiation?",
   back:"Three key principles:\n\n1. Time — minimise the time spent near the source\n2. Distance — increase the distance from the source (radiation intensity decreases with distance)\n3. Shielding — use appropriate shielding material (lead aprons, concrete walls, lead-lined containers)\n\nWorkers also wear film badges to monitor exposure, and radioactive sources are handled with tongs (never touched directly).", difficulty:1, category:"concept"},
  {id:"s10fc-13-3-4", islandId:"s10i-13-3", front:"Why are alpha sources used in smoke detectors but not for medical imaging?",
   back:"Smoke detectors: alpha particles ionise the air, creating a small current. Smoke absorbs alpha particles, reducing the current and triggering the alarm. Alpha's strong ionising power is needed for this.\n\nMedical imaging requires gamma radiation because:\n• Gamma rays can pass through the body to reach the detector outside\n• Alpha particles would be stopped by skin and could not be detected externally\n• Alpha particles inside the body would cause serious cell damage due to their strong ionising ability", difficulty:2, category:"application"},
  {id:"s10fc-13-3-5", islandId:"s10i-13-3", front:"What is carbon dating?",
   back:"Carbon dating uses carbon-14 (a radioactive isotope with a half-life of 5730 years) to date organic materials.\n\nLiving organisms take in carbon-14 from CO₂ in the air. When they die, no more carbon-14 is taken in and the existing carbon-14 decays.\n\nBy measuring the proportion of carbon-14 remaining in a sample, scientists can calculate how long ago the organism died.\n\nIt is useful for dating materials up to about 50 000 years old.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-13-1": [
    {q:"Which type of radiation is the most ionising?",
     opts:["Alpha","Beta","Gamma","X-rays"], c:0,
     e:"Alpha particles are the most strongly ionising because they are large (2 protons + 2 neutrons) and have a +2 charge. They interact heavily with atoms they encounter, knocking out electrons. However, this also means they are stopped quickly (by paper or skin)."},
    {q:"What is a beta particle?",
     opts:["A helium nucleus","A high-speed electron emitted from the nucleus","A type of electromagnetic wave","A neutron"], c:1,
     e:"A beta particle is a high-speed electron created when a neutron in the nucleus converts into a proton. It has a charge of −1 and negligible mass. Despite being an electron, it originates from the nucleus, not the electron shells."},
    {q:"When an atom emits an alpha particle, what happens to its mass number and atomic number?",
     opts:["Mass number −4, atomic number −2","Mass number −2, atomic number −4","Mass number +4, atomic number +2","Mass number stays same, atomic number +1"], c:0,
     e:"An alpha particle contains 2 protons and 2 neutrons (mass number 4, atomic number 2). When emitted, the parent nucleus loses 4 from its mass number and 2 from its atomic number, forming a new element."},
    {q:"Which type of radiation can pass through aluminium but is stopped by thick lead?",
     opts:["Alpha","Beta","Gamma","Neutron"], c:2,
     e:"Gamma radiation is the most penetrating — it passes through paper and aluminium but is significantly absorbed by thick lead or concrete. Alpha is stopped by paper; beta is stopped by a few mm of aluminium."},
    {q:"What did Rutherford's gold foil experiment show?",
     opts:["Atoms are solid spheres","The atom has a tiny, dense, positive nucleus with electrons orbiting it","Electrons are embedded in a positive 'pudding'","Atoms cannot be split"], c:1,
     e:"Rutherford fired alpha particles at gold foil. Most passed straight through (the atom is mostly empty space), some were deflected (passing close to a positive charge), and a very few bounced back (hitting a tiny, dense, positive nucleus). This disproved the plum pudding model."}
  ],
  "s10i-13-2": [
    {q:"A radioactive sample has an activity of 400 Bq. After 2 half-lives, the activity will be:",
     opts:["200 Bq","100 Bq","50 Bq","0 Bq"], c:1,
     e:"After 1 half-life: 400 ÷ 2 = 200 Bq. After 2 half-lives: 200 ÷ 2 = 100 Bq. Each half-life halves the remaining activity."},
    {q:"The activity of a sample drops from 800 Bq to 100 Bq in 15 minutes. What is the half-life?",
     opts:["5 minutes","3 minutes","7.5 minutes","15 minutes"], c:0,
     e:"800 → 400 → 200 → 100 = 3 half-lives in 15 minutes. Half-life = 15 ÷ 3 = 5 minutes."},
    {q:"Why is radioactive decay described as random?",
     opts:["Because the half-life changes unpredictably","Because we cannot predict exactly when a particular nucleus will decay","Because all nuclei decay at the same time","Because it depends on temperature"], c:1,
     e:"Radioactive decay is a random process — it is impossible to predict which specific nucleus will decay next or exactly when it will happen. We can only predict the behaviour of large numbers of nuclei statistically using half-life."},
    {q:"What does the becquerel (Bq) measure?",
     opts:["The mass of a radioactive sample","The number of decays per second (activity)","The half-life of an isotope","The penetrating power of radiation"], c:1,
     e:"The becquerel (Bq) is the unit of radioactive activity. 1 Bq = 1 nuclear decay per second. A sample with an activity of 400 Bq undergoes 400 decays every second."},
    {q:"After 4 half-lives, what fraction of the original radioactive nuclei remain?",
     opts:["1/2","1/4","1/8","1/16"], c:3,
     e:"After each half-life, half the remaining nuclei have decayed. After 4 half-lives: (½)⁴ = 1/16 of the original nuclei remain."}
  ],
  "s10i-13-3": [
    {q:"Which type of radiation is most suitable for a medical tracer?",
     opts:["Alpha","Beta","Gamma","All are equally suitable"], c:2,
     e:"Gamma radiation is used for medical tracers because it can pass through the body and be detected externally. It is also the least ionising, causing minimal damage to tissues. Alpha would be stopped by skin; beta would not penetrate deeply enough."},
    {q:"What is the difference between contamination and irradiation?",
     opts:["They are the same thing","Contamination means the source is on/in the body; irradiation means exposure from a distance","Irradiation is more dangerous than contamination","Contamination only affects plants"], c:1,
     e:"Contamination involves the radioactive material being in direct contact with or inside the body, continuously emitting radiation. Irradiation is exposure to radiation from an external source — remove the source and the exposure stops."},
    {q:"Which safety precaution reduces exposure to radiation in a laboratory?",
     opts:["Holding the source close to your face","Using tongs to handle sources and keeping them at arm's length","Leaving sources out on the bench","Heating the source to reduce its activity"], c:1,
     e:"Radioactive sources should be handled with tongs to increase distance from the body, stored in lead-lined containers, and exposure time minimised. These follow the three principles: minimise time, maximise distance, use shielding."},
    {q:"Carbon-14 dating can be used on materials up to approximately:",
     opts:["500 years old","5000 years old","50 000 years old","5 billion years old"], c:2,
     e:"Carbon-14 has a half-life of about 5730 years. After roughly 50 000 years (about 8–9 half-lives), so little carbon-14 remains that it becomes undetectable. For older rocks, other isotopes with longer half-lives (e.g. uranium) are used."},
    {q:"Why are alpha emitters used in smoke detectors?",
     opts:["They can pass through walls","They are the most ionising — they ionise the air to create a small detectable current","They have the longest range","They are the least dangerous type of radiation"], c:1,
     e:"Alpha particles are strongly ionising, so they ionise the air between two plates in the detector, creating a small current. When smoke enters, it absorbs the alpha particles, the current drops, and the alarm sounds. The short range of alpha means it stays within the detector."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-13-1': `
<h2>Atomic Structure &amp; Radiation Types</h2>
<p>Radioactivity is the release of energy and particles from unstable atomic nuclei. To understand it, you first need to know the structure of the atom and the properties of the three main types of radiation.</p>

<h3>The Nuclear Model</h3>
<p>The atom has a tiny, dense, positively charged <strong>nucleus</strong> containing protons and neutrons, surrounded by orbiting <strong>electrons</strong>. Almost all the mass is in the nucleus; the atom is mostly empty space. This model was established after Rutherford&rsquo;s alpha scattering (gold foil) experiment.</p>

<h3>Types of Radiation</h3>
<ul>
  <li><strong>Alpha (&alpha;)</strong> &mdash; helium nucleus (2p + 2n); +2 charge; stopped by paper/skin; <em>most</em> ionising</li>
  <li><strong>Beta (&beta;)</strong> &mdash; high-speed electron from the nucleus; &minus;1 charge; stopped by ~5 mm aluminium; moderately ionising</li>
  <li><strong>Gamma (&gamma;)</strong> &mdash; electromagnetic wave; no charge, no mass; stopped by thick lead/concrete; <em>least</em> ionising</li>
</ul>

<h3>Nuclear Decay Equations</h3>
<ul>
  <li>Alpha decay: mass number &minus;4, atomic number &minus;2</li>
  <li>Beta decay: mass number unchanged, atomic number +1 (a neutron becomes a proton)</li>
  <li>Gamma emission: no change to mass or atomic number (just energy released)</li>
</ul>

<h3>Worked Example</h3>
<p>Uranium-238 decays by alpha emission. Write the decay equation.</p>
<p>²³⁸₉₂U &rarr; ²³⁴₉₀Th + ⁴₂He<br>
Mass: 238 = 234 + 4 &check;<br>
Atomic number: 92 = 90 + 2 &check;<br>
Uranium becomes thorium.</p>

<h3>Common Mistake</h3>
<p>Students often confuse ionising ability with penetrating power. They are <em>inversely related</em>: alpha is the <em>most</em> ionising but <em>least</em> penetrating; gamma is the <em>least</em> ionising but <em>most</em> penetrating. More interactions with atoms means the radiation loses energy faster and is stopped sooner.</p>
`,

's10i-13-2': `
<h2>Half-Life</h2>
<p>Radioactive decay is a random process &mdash; we cannot predict when a particular nucleus will decay. However, we can describe the overall rate of decay using <strong>half-life</strong>.</p>

<h3>Definition</h3>
<p>The half-life is the time taken for the number of radioactive nuclei (or the activity) to fall to half its original value. It is constant for a given isotope and is not affected by temperature or pressure.</p>

<h3>Half-Life Calculations</h3>
<p>To find the activity after n half-lives:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Final activity = initial activity &times; (&frac12;)<sup>n</sup></strong></p>
<p>To find the half-life from a graph: read the time it takes for the activity to drop to half the starting value.</p>

<h3>Worked Example</h3>
<p>A sample has an activity of 6400 Bq. The half-life is 2 hours. What is the activity after 8 hours?</p>
<p>Number of half-lives = 8 &divide; 2 = 4<br>
6400 &rarr; 3200 &rarr; 1600 &rarr; 800 &rarr; <strong>400 Bq</strong><br>
Or: 6400 &times; (&frac12;)⁴ = 6400 &times; 1/16 = 400 Bq</p>

<h3>Common Mistake</h3>
<p>Students sometimes think that after two half-lives, all the radioactive nuclei have decayed (i.e. the material is "used up"). In reality, after two half-lives only &frac34; have decayed and &frac14; remain. Radioactive material never fully disappears &mdash; it just gets less and less active over time.</p>
`,

's10i-13-3': `
<h2>Uses &amp; Dangers of Radiation</h2>
<p>Radioactive materials have many beneficial uses but also pose risks. Understanding the type of radiation, its properties, and the difference between contamination and irradiation is essential for evaluating these risks and benefits.</p>

<h3>Uses</h3>
<ul>
  <li><strong>Medical tracers:</strong> gamma emitters (e.g. technetium-99m) are injected or swallowed; detected outside the body to image organs</li>
  <li><strong>Radiotherapy:</strong> focused gamma beams destroy cancer cells</li>
  <li><strong>Smoke detectors:</strong> alpha emitters ionise air; smoke disrupts the current and triggers the alarm</li>
  <li><strong>Carbon dating:</strong> carbon-14 (half-life 5730 years) determines the age of organic remains</li>
  <li><strong>Sterilisation:</strong> gamma rays kill bacteria on surgical instruments and food</li>
  <li><strong>Thickness monitoring:</strong> beta or gamma sources measure paper or metal thickness in factories</li>
</ul>

<h3>Contamination vs Irradiation</h3>
<ul>
  <li><strong>Contamination:</strong> radioactive material is on or inside the body &mdash; the person is exposed continuously until the material is removed or decays</li>
  <li><strong>Irradiation:</strong> the person is exposed to radiation from an external source &mdash; remove the source and exposure stops</li>
</ul>

<h3>Reducing Exposure</h3>
<p>Three key principles: minimise <strong>time</strong>, maximise <strong>distance</strong>, use appropriate <strong>shielding</strong>.</p>

<h3>Worked Example</h3>
<p>Explain why gamma radiation is used for medical tracers rather than alpha or beta.</p>
<p>Gamma rays can pass through the body and be detected by a camera outside. Alpha particles would be stopped by skin and could not reach the detector. Beta particles penetrate further but are still absorbed within the body. Gamma is also the least ionising, so it causes the least damage to healthy tissues during the scan.</p>

<h3>Common Mistake</h3>
<p>Students often assume that all radiation is harmful. In fact, the risk depends on the dose, the type of radiation, and whether it is contamination or irradiation. Low-level irradiation from medical scans is carefully controlled and the benefits (diagnosis) outweigh the small risk. The key skill is evaluating risks and benefits in context.</p>
`

});
