// content/y9/science/islands/t02.js — Year 9 Science Topic 2: The Immune System
// Islands s9i-02-1 .. s9i-02-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-02-1 — Pathogens & Defence
  {id:"s9fc-02-1-1", islandId:"s9i-02-1", front:"What is a pathogen?",
   back:"A pathogen is a microorganism that causes disease.\n\nThere are four types:\n• Bacteria — single-celled prokaryotes; reproduce rapidly and release toxins\n• Viruses — not cells; much smaller; invade host cells to replicate\n• Fungi — can be single-celled or multicellular; spread by spores\n• Protists — single-celled eukaryotes; often spread by vectors (e.g. mosquitoes)", difficulty:1, category:"definition"},
  {id:"s9fc-02-1-2", islandId:"s9i-02-1", front:"How do bacteria make us ill?",
   back:"Bacteria reproduce rapidly inside the body by binary fission.\n\nThey produce toxins (poisons) that damage cells and tissues, causing symptoms such as fever, inflammation and pain.\n\nNot all bacteria are harmful — many are beneficial (e.g. gut bacteria that help digestion).", difficulty:1, category:"concept"},
  {id:"s9fc-02-1-3", islandId:"s9i-02-1", front:"How do viruses make us ill?",
   back:"Viruses are not living cells. They invade host cells and hijack the cell's machinery to make thousands of copies of themselves.\n\nThe host cell eventually bursts open (lysis), releasing new viruses that infect more cells.\n\nThis cell destruction causes the symptoms of disease.", difficulty:2, category:"concept"},
  {id:"s9fc-02-1-4", islandId:"s9i-02-1", front:"Describe the body's non-specific defences against pathogens.",
   back:"Non-specific defences stop ALL pathogens from entering the body:\n\n• Skin — physical barrier; produces antimicrobial substances\n• Mucus — lines the airways; traps pathogens before they reach the lungs\n• Cilia — tiny hairs that sweep mucus (and trapped pathogens) away from the lungs\n• Stomach acid — hydrochloric acid (pH 2) kills most pathogens in food\n• Tears and saliva — contain the enzyme lysozyme, which destroys bacterial cell walls", difficulty:2, category:"concept"},
  {id:"s9fc-02-1-5", islandId:"s9i-02-1", front:"What is the difference between a communicable and a non-communicable disease?",
   back:"Communicable (infectious) diseases are caused by pathogens and can be passed from one organism to another (e.g. influenza, tuberculosis, malaria).\n\nNon-communicable diseases are NOT caused by pathogens and CANNOT be transmitted between people (e.g. type 2 diabetes, heart disease, cancer).", difficulty:1, category:"definition"},

  // s9i-02-2 — White Blood Cells & Vaccination
  {id:"s9fc-02-2-1", islandId:"s9i-02-2", front:"Describe the three ways white blood cells defend the body.",
   back:"1. Phagocytosis — phagocytes engulf and digest pathogens\n2. Antibody production — lymphocytes produce antibodies that are specific to antigens on the pathogen; antibodies clump pathogens together for destruction\n3. Antitoxin production — some white blood cells produce antitoxins that neutralise the toxins released by bacteria", difficulty:2, category:"concept"},
  {id:"s9fc-02-2-2", islandId:"s9i-02-2", front:"Explain how vaccination works.",
   back:"1. A vaccine containing a dead, weakened or fragment of a pathogen is injected\n2. White blood cells detect the antigens on the pathogen\n3. Lymphocytes produce specific antibodies\n4. Memory cells are formed and remain in the blood\n5. If the real pathogen enters the body later, memory cells recognise it and produce antibodies much faster — the person does not become ill\n\nThis is called immunological memory.", difficulty:2, category:"concept"},
  {id:"s9fc-02-2-3", islandId:"s9i-02-2", front:"What is herd immunity?",
   back:"Herd immunity occurs when a large proportion of a population is vaccinated.\n\nThe pathogen cannot spread easily because most people are immune, so it cannot find enough susceptible hosts.\n\nThis indirectly protects unvaccinated people (e.g. babies, people with immune conditions) by breaking the chain of transmission.", difficulty:2, category:"application"},
  {id:"s9fc-02-2-4", islandId:"s9i-02-2", front:"Why can antibiotics treat bacterial infections but NOT viral infections?",
   back:"Antibiotics target structures found in bacterial cells (e.g. cell walls, ribosomes) that viruses do not have.\n\nViruses live inside host cells, so antibiotics cannot reach them without damaging the host cell.\n\nOveruse of antibiotics leads to antibiotic resistance, where bacteria evolve to survive the drug.", difficulty:2, category:"concept"},
  {id:"s9fc-02-2-5", islandId:"s9i-02-2", front:"Explain how antibiotic resistance develops.",
   back:"1. Bacteria reproduce rapidly; random mutations may produce a resistant variant\n2. When antibiotics are used, non-resistant bacteria are killed\n3. Resistant bacteria survive, reproduce and pass on the resistance gene\n4. Over generations, the resistant strain dominates the population\n\nThis is an example of natural selection. MRSA is a well-known antibiotic-resistant bacterium.\n\nTo slow resistance: only use antibiotics when necessary; always complete the course.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-02-1": [
    {q:"Which type of pathogen invades host cells and uses them to make copies of itself?",
     opts:["Bacterium","Virus","Fungus","Protist"], c:1,
     e:"Viruses are not living cells. They invade host cells, take over the cell's machinery to replicate, and then burst out — destroying the host cell. Bacteria reproduce independently by binary fission."},
    {q:"What is the role of stomach acid in defending against disease?",
     opts:["It produces antibodies to destroy pathogens","It provides a physical barrier like skin","It kills most pathogens that enter via food or drink","It sweeps pathogens towards the lungs"], c:2,
     e:"The stomach produces hydrochloric acid at around pH 2, which is strong enough to kill most bacteria and other pathogens ingested with food or drink. It is a chemical defence, not a physical barrier like skin."},
    {q:"Malaria is spread by mosquitoes. What role does the mosquito play?",
     opts:["It is the pathogen itself","It is the host organism","It acts as a vector, carrying the Plasmodium protist","It produces the toxin that causes malaria"], c:2,
     e:"The mosquito is a vector — it carries the Plasmodium protist from an infected person to a healthy person through its bite. The mosquito does not cause the disease itself; Plasmodium is the actual pathogen."},
    {q:"How do bacteria typically cause symptoms of disease?",
     opts:["By invading and destroying host cells from the inside","By releasing toxins that damage cells and tissues","By blocking blood vessels","By absorbing all nutrients from food"], c:1,
     e:"Bacteria reproduce rapidly and release toxins (poisons) that damage surrounding cells and tissues. This triggers inflammation, fever and other symptoms. Viruses cause disease by invading and destroying cells directly."},
    {q:"Which of these is a non-specific defence against pathogens?",
     opts:["Antibodies","Memory cells","Mucus lining the airways","Vaccination"], c:2,
     e:"Mucus is a non-specific defence — it traps all types of pathogen without targeting any particular one. Antibodies and memory cells are part of the specific immune response. Vaccination is a medical intervention, not a natural body defence."}
  ],
  "s9i-02-2": [
    {q:"A person is vaccinated against measles. Six months later they are exposed to the measles virus but do not become ill. Why?",
     opts:["The vaccine killed all measles viruses in the environment","Memory cells produced after vaccination rapidly produce antibodies on re-exposure","The vaccine contained antibiotics that destroyed the virus","The person's skin prevented the virus from entering"], c:1,
     e:"Vaccination triggers the immune system to produce memory cells. When the real pathogen is encountered, these memory cells recognise the antigens and produce specific antibodies very quickly — fast enough to destroy the virus before it causes illness."},
    {q:"What is the correct term for a white blood cell that engulfs and digests pathogens?",
     opts:["Lymphocyte","Phagocyte","Platelet","Red blood cell"], c:1,
     e:"Phagocytes engulf pathogens by surrounding them with their cell membrane and digesting them — a process called phagocytosis. Lymphocytes produce antibodies and antitoxins. Platelets help with blood clotting. Red blood cells carry oxygen."},
    {q:"Why should patients always complete a full course of antibiotics?",
     opts:["Stopping early means the infection was never real","Stopping early allows partially resistant bacteria to survive and reproduce, increasing resistance","Antibiotics work better if taken for longer than needed","Patients feel better faster when they take more tablets"], c:1,
     e:"If a patient stops taking antibiotics early, the most resistant bacteria may survive while the weaker ones are killed. These resistant survivors reproduce and can spread, making future infections harder to treat. Completing the course ensures all bacteria are eliminated."},
    {q:"Which statement about antibiotics is correct?",
     opts:["Antibiotics kill viruses inside host cells","Antibiotics target structures in bacterial cells such as cell walls","Antibiotics are a type of vaccine","Antibiotics stimulate the production of memory cells"], c:1,
     e:"Antibiotics work by targeting specific structures in bacteria, such as cell walls or ribosomes, which viruses do not possess. This is why antibiotics are effective against bacterial infections but useless against viral ones."},
    {q:"Herd immunity protects unvaccinated individuals because:",
     opts:["Vaccines spread through the air and immunise nearby people","If enough people are immune, the pathogen cannot find enough hosts to spread","Unvaccinated people absorb antibodies from vaccinated people","The pathogen mutates into a harmless form"], c:1,
     e:"When a high proportion of the population is vaccinated, the pathogen encounters immune individuals so frequently that chains of transmission are broken. This means even those who cannot be vaccinated (e.g. very young babies) are indirectly protected because the disease cannot spread to them."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-02-1': `
<h2>Pathogens &amp; Defence</h2>
<div class="lesson-diagram" data-diagram="pathogen-types"><p class="diagram-caption">The four types of pathogen</p></div>
<p>Disease is a major topic in GCSE Biology. You need to understand the types of pathogen, how they spread, and how the body defends itself before the immune system even kicks in.</p>

<h3>The Four Types of Pathogen</h3>
<ul>
  <li><strong>Bacteria</strong> — prokaryotic cells (no nucleus); reproduce rapidly by binary fission; cause disease by releasing toxins. Examples: Salmonella (food poisoning), Mycobacterium tuberculosis (TB).</li>
  <li><strong>Viruses</strong> — much smaller than bacteria; not true cells; invade host cells and use them to replicate, then burst out destroying the cell. Examples: influenza, HIV, measles.</li>
  <li><strong>Fungi</strong> — can be single-celled (yeast) or multicellular; spread by spores. Example: Tinea causes athlete's foot.</li>
  <li><strong>Protists</strong> — single-celled eukaryotes; often require a vector to spread. Example: Plasmodium causes malaria (spread by the Anopheles mosquito).</li>
</ul>

<h3>Non-Specific Defences</h3>
<p>Before pathogens encounter the immune system, the body has physical and chemical barriers that stop them entering:</p>
<ul>
  <li><strong>Skin</strong> — a tough physical barrier that most pathogens cannot penetrate</li>
  <li><strong>Mucus and cilia</strong> — mucus traps pathogens in the airways; cilia beat to sweep them up to the throat to be swallowed</li>
  <li><strong>Stomach acid</strong> — hydrochloric acid at about pH 2 kills most ingested pathogens</li>
  <li><strong>Tears and saliva</strong> — contain the enzyme lysozyme, which breaks down bacterial cell walls</li>
</ul>

<h3>Worked Example</h3>
<p>Explain why viruses are more difficult to treat than bacteria.</p>
<p>Viruses reproduce inside host cells, using the host cell's own machinery. Antibiotics target bacterial structures (such as cell walls) that viruses do not have. Destroying viruses without also damaging the host cell is extremely difficult, which is why antiviral drugs are harder to develop than antibiotics.</p>

<h3>Common Mistake</h3>
<p>Students often say that antibiotics can treat any infection. Remember: antibiotics work ONLY against bacteria. They have NO effect on viruses, fungi or protists. Antifungal drugs treat fungal infections, and antivirals treat some viral infections — but these are different medicines.</p>
`,

's9i-02-2': `
<h2>White Blood Cells &amp; Vaccination</h2>
<div class="lesson-diagram" data-diagram="immune-response"><p class="diagram-caption">How white blood cells defend the body</p></div>
<p>If pathogens get past the body's barriers, the immune system fights back. White blood cells are the key players, and vaccination is one of the most important medical advances in history.</p>

<h3>The Immune Response</h3>
<p>White blood cells defend the body in three main ways:</p>
<ul>
  <li><strong>Phagocytosis</strong> — phagocytes detect, engulf and digest pathogens. This is a non-specific response (works against any pathogen).</li>
  <li><strong>Antibody production</strong> — lymphocytes recognise specific antigens on a pathogen's surface. They produce antibodies that lock onto these antigens, clumping pathogens together and marking them for destruction. Each antibody is specific to one antigen.</li>
  <li><strong>Antitoxin production</strong> — some white blood cells release antitoxins that neutralise the harmful toxins produced by bacteria.</li>
</ul>

<h3>How Vaccination Works</h3>
<p>A vaccine contains a dead, weakened or partial pathogen (or just its antigens). It stimulates the immune system to produce antibodies and, crucially, <strong>memory cells</strong>. If the real pathogen enters the body later, memory cells trigger a rapid secondary response — antibodies are produced so quickly that the person does not become ill.</p>

<h3>Worked Example</h3>
<p>Explain why a person who has been vaccinated against influenza strain A may still catch influenza strain B.</p>
<p>Antibodies are specific — they only bind to the particular antigen they were designed to match. The antigens on strain B are different from those on strain A, so the antibodies and memory cells produced by the strain A vaccine do not recognise strain B. The person has no immunity to the new strain.</p>

<h3>Common Mistake</h3>
<p>A very common error is stating that vaccines contain antibodies or that vaccines "cure" disease. Vaccines do NOT contain antibodies — they contain antigens (or weakened pathogens) that stimulate YOUR immune system to produce its own antibodies. Vaccines prevent disease; they do not cure an existing infection.</p>
`

});
