// science-y11-t02.js — Year 11 Science Topic 2: Evolution & Classification
// Islands: s11i-02-1 .. s11i-02-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-02-1 — Natural Selection & Evolution
  {id:"s11fc-02-1-1",islandId:"s11i-02-1",front:"Describe the four steps of natural selection.",
   back:"1. Variation exists within a population (due to mutations and sexual reproduction).\n2. Individuals with characteristics best suited to the environment are more likely to survive.\n3. These individuals are more likely to reproduce and pass on their alleles.\n4. Over many generations the advantageous allele becomes more common.",difficulty:2,category:"concept"},
  {id:"s11fc-02-1-2",islandId:"s11i-02-1",front:"Give three types of evidence for evolution.",
   back:"1. Fossil record — shows how organisms have changed over time.\n2. Antibiotic-resistant bacteria — natural selection observed in real time.\n3. Comparative anatomy and genetics — similar DNA/structures in related species.",difficulty:2,category:"concept"},
  {id:"s11fc-02-1-3",islandId:"s11i-02-1",front:"Who proposed the theory of evolution by natural selection?",
   back:"Charles Darwin, in his 1859 book On the Origin of Species.\n\nAlfred Russel Wallace independently developed a similar theory at the same time. Both contributed to our modern understanding.",difficulty:1,category:"definition"},
  {id:"s11fc-02-1-4",islandId:"s11i-02-1",front:"What is speciation?",
   back:"Speciation is the formation of a new species.\n\nIt occurs when two populations of the same species become so different (e.g. through geographic isolation) that they can no longer interbreed to produce fertile offspring.",difficulty:2,category:"definition"},
  {id:"s11fc-02-1-5",islandId:"s11i-02-1",front:"Why are antibiotic-resistant bacteria an example of natural selection?",
   back:"When antibiotics are used, bacteria without resistance die. Any bacterium with a random mutation giving resistance survives, reproduces and passes on the resistance allele.\n\nOver time, the resistant strain becomes dominant — this is natural selection in action.",difficulty:2,category:"application"},

  // s11i-02-2 — Classification & Extinction
  {id:"s11fc-02-2-1",islandId:"s11i-02-2",front:"List the levels of the Linnaean classification system in order.",
   back:"Kingdom → Phylum → Class → Order → Family → Genus → Species\n\nMemory aid: King Philip Came Over For Good Spaghetti.",difficulty:1,category:"definition"},
  {id:"s11fc-02-2-2",islandId:"s11i-02-2",front:"What are the three domains in the modern classification system?",
   back:"1. Archaea — primitive prokaryotes often found in extreme environments.\n2. Bacteria — true bacteria; prokaryotes.\n3. Eukaryota — organisms whose cells have a nucleus (animals, plants, fungi, protists).\n\nProposed by Carl Woese based on genetic analysis.",difficulty:2,category:"definition"},
  {id:"s11fc-02-2-3",islandId:"s11i-02-2",front:"Give three causes of extinction.",
   back:"1. Environmental change (e.g. climate change, habitat destruction).\n2. New predators or diseases.\n3. Competition from a better-adapted species.\n\nHuman activity (deforestation, pollution) has greatly increased the rate of extinction.",difficulty:1,category:"concept"},
  {id:"s11fc-02-2-4",islandId:"s11i-02-2",front:"What is the binomial naming system?",
   back:"A system that gives every species a two-part Latin name:\n\nGenus + species (e.g. Homo sapiens).\n\nThe genus has a capital letter; the species is lower case. It is always written in italics.",difficulty:1,category:"definition"},
  {id:"s11fc-02-2-5",islandId:"s11i-02-2",front:"Why was the classification system updated from five kingdoms to three domains?",
   back:"Advances in genetic analysis (studying RNA and DNA) revealed that organisms previously grouped together were not as closely related as thought.\n\nFor example, archaea and bacteria look similar under a microscope but have very different biochemistry, so they were separated into two domains.",difficulty:3,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-02-1":[
    {q:"Which of the following best describes natural selection?",opts:["Organisms choose to adapt to their environment","Organisms with favourable characteristics are more likely to survive and reproduce","All organisms evolve at the same rate","Only the strongest organisms survive"],c:1,e:"Natural selection means that individuals with characteristics better suited to the environment are more likely to survive and reproduce, passing on their advantageous alleles."},
    {q:"What type of evidence for evolution shows how organisms changed over geological time?",opts:["DNA analysis","Antibiotic resistance","The fossil record","Embryo comparison"],c:2,e:"The fossil record preserves remains of organisms from millions of years ago, showing how species have changed over time. DNA analysis supports evolution but does not directly show change over geological time."},
    {q:"MRSA is resistant to many antibiotics. What caused this resistance?",opts:["Doctors deliberately created it","The bacteria chose to become resistant","Random mutations gave resistance, and natural selection favoured those bacteria","The antibiotics mutated the bacteria"],c:2,e:"Resistance arises from random genetic mutations. When antibiotics kill non-resistant bacteria, the resistant ones survive and reproduce — a clear example of natural selection."},
    {q:"What must happen for speciation to occur?",opts:["Two populations must live in the same habitat","Two populations must become geographically isolated and evolve differently","One organism must mutate many times in one generation","A species must become extinct first"],c:1,e:"Speciation requires populations to be isolated (e.g. geographically) so they experience different selection pressures and evolve independently until they can no longer interbreed."},
    {q:"Which scientist is most associated with the theory of evolution by natural selection?",opts:["Gregor Mendel","Louis Pasteur","Charles Darwin","Carl Linnaeus"],c:2,e:"Charles Darwin proposed the theory of evolution by natural selection in 1859. Mendel studied genetics, Pasteur studied germs, and Linnaeus developed the classification system."}
  ],
  "s11i-02-2":[
    {q:"Which is the correct order for the Linnaean classification?",opts:["Kingdom, Class, Phylum, Order, Family, Genus, Species","Kingdom, Phylum, Class, Order, Family, Genus, Species","Kingdom, Phylum, Order, Class, Family, Genus, Species","Domain, Kingdom, Genus, Family, Order, Class, Species"],c:1,e:"The correct order is Kingdom, Phylum, Class, Order, Family, Genus, Species. Remember: King Philip Came Over For Good Spaghetti."},
    {q:"Which domain includes organisms whose cells have a nucleus?",opts:["Archaea","Bacteria","Eukaryota","Protista"],c:2,e:"Eukaryota includes all organisms with cells containing a true nucleus — animals, plants, fungi and protists. Archaea and Bacteria are prokaryotic (no nucleus). Protista is a kingdom, not a domain."},
    {q:"A species is classified as Panthera leo. What does 'Panthera' represent?",opts:["The species","The genus","The family","The kingdom"],c:1,e:"In the binomial system, the first name is the genus (Panthera) and the second is the species (leo). The genus is always capitalised."},
    {q:"Which of these is least likely to cause extinction?",opts:["Habitat destruction","A new disease","Introduction of a better-adapted competitor","Increased genetic variation"],c:3,e:"Increased genetic variation actually helps a species survive. Habitat destruction, disease and competition from new species are all well-known causes of extinction."},
    {q:"Why was the three-domain system introduced?",opts:["To simplify classification for students","Because microscope technology improved","Because genetic analysis showed archaea and bacteria are biochemically very different","Because new species were discovered in the ocean"],c:2,e:"Carl Woese's analysis of ribosomal RNA revealed that archaea and bacteria, though both prokaryotic, are biochemically very different and should be in separate domains."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-02-1': `
<h2>Natural Selection &amp; Evolution</h2>
<p><strong>Evolution</strong> is the gradual change in the inherited characteristics of a population over many generations. The main mechanism driving evolution is <strong>natural selection</strong>.</p>

<h3>How natural selection works</h3>
<ul>
<li><strong>Variation</strong> exists within a population due to mutations and sexual reproduction.</li>
<li>Individuals whose characteristics are best suited to the environment are more likely to <strong>survive</strong>.</li>
<li>These individuals are more likely to <strong>reproduce</strong> and pass on the alleles responsible for the useful characteristic.</li>
<li>Over many generations, the proportion of the population with the advantageous allele <strong>increases</strong>.</li>
</ul>

<h3>Evidence for evolution</h3>
<p>Three main types of evidence support Darwin's theory:</p>
<ul>
<li><strong>Fossil record</strong> — preserved remains show organisms changing over millions of years.</li>
<li><strong>Antibiotic-resistant bacteria</strong> — we can observe natural selection happening in real time as resistant strains survive antibiotic treatment.</li>
<li><strong>Comparative genetics</strong> — closely related species share more DNA sequences.</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain how a population of insects could develop resistance to a pesticide.</p>
<p><strong>A:</strong> There is natural variation in the insect population. Some individuals carry a random mutation that gives slight resistance to the pesticide. When the pesticide is applied, most insects die, but the resistant ones survive. These reproduce, passing the resistance allele to their offspring. Over many generations, the proportion of resistant insects increases until most of the population is resistant.</p>

<h3>Common mistake</h3>
<p>Students often write that organisms "choose" to adapt or that the environment "makes" them change. Evolution is <strong>not deliberate</strong> — variation arises randomly, and the environment simply selects which individuals survive.</p>`,

's11i-02-2': `
<h2>Classification &amp; Extinction</h2>
<p>Classification is the process of sorting living organisms into groups based on shared characteristics. It helps scientists communicate clearly and understand evolutionary relationships.</p>

<h3>The Linnaean system</h3>
<p>Carl Linnaeus developed a hierarchical system with seven levels:</p>
<p><strong>Kingdom → Phylum → Class → Order → Family → Genus → Species</strong></p>
<p>Each level down is more specific, and organisms within a group share more characteristics. Every species is given a two-part Latin name (the <strong>binomial system</strong>), e.g. <em>Homo sapiens</em>.</p>

<h3>The three-domain system</h3>
<p>Carl Woese analysed ribosomal RNA and proposed a level above kingdoms:</p>
<ul>
<li><strong>Archaea</strong> — prokaryotes found in extreme environments (hot springs, salt lakes).</li>
<li><strong>Bacteria</strong> — the "true" bacteria; prokaryotic.</li>
<li><strong>Eukaryota</strong> — all organisms with a nucleus (animals, plants, fungi, protists).</li>
</ul>

<h3>Extinction</h3>
<p>A species becomes <strong>extinct</strong> when no living individuals remain. Causes include:</p>
<ul>
<li>Rapid environmental change or habitat destruction</li>
<li>New predators, competitors or diseases</li>
<li>Catastrophic events (volcanic eruptions, asteroid impacts)</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why the dodo became extinct.</p>
<p><strong>A:</strong> When humans arrived on Mauritius, they introduced new predators (rats, pigs) that ate dodo eggs. The dodo had no natural fear of predators and could not fly to escape. Habitat destruction through deforestation further reduced their numbers. The combination of new predators, habitat loss and human hunting led to extinction by the late 1600s.</p>

<h3>Common mistake</h3>
<p>Students sometimes confuse <strong>endangered</strong> (at risk of extinction) with <strong>extinct</strong> (no individuals remain). A species can recover from being endangered if conservation measures are taken — but extinction is permanent.</p>`

});
