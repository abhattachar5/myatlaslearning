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
   back:"Advances in genetic analysis (studying RNA and DNA) revealed that organisms previously grouped together were not as closely related as thought.\n\nFor example, archaea and bacteria look similar under a microscope but have very different biochemistry, so they were separated into two domains.",difficulty:3,category:"concept"},

  // s11i-02-3 — Selective Breeding & Genetic Engineering
  {id:"s11fc-02-3-1",islandId:"s11i-02-3",front:"What is selective breeding (artificial selection)?",
   back:"Selective breeding is when humans choose organisms with desired characteristics to breed together.\n\nOver many generations, the offspring increasingly show the chosen trait. Examples: high-yield crops, cattle that produce more milk, dogs with gentle temperaments.",difficulty:1,category:"definition"},
  {id:"s11fc-02-3-2",islandId:"s11i-02-3",front:"Outline the steps of selective breeding.",
   back:"1. Choose parents with the desired characteristic.\n2. Breed them together.\n3. From the offspring, select those showing the desired characteristic.\n4. Breed those offspring together.\n5. Repeat over many generations until all offspring reliably show the trait.",difficulty:2,category:"concept"},
  {id:"s11fc-02-3-3",islandId:"s11i-02-3",front:"What is the main risk of selective breeding?",
   back:"It reduces the gene pool (less genetic variation), which is known as inbreeding.\n\nThis can lead to a higher chance of inherited diseases and means the whole population may be vulnerable to a new disease or environmental change.",difficulty:2,category:"concept"},
  {id:"s11fc-02-3-4",islandId:"s11i-02-3",front:"What is genetic engineering?",
   back:"Genetic engineering is modifying the genome of an organism by transferring a gene from one organism into another.\n\nThe transferred gene gives the organism a desired characteristic, e.g. bacteria engineered to produce human insulin.",difficulty:2,category:"definition"},
  {id:"s11fc-02-3-5",islandId:"s11i-02-3",front:"Outline the process of genetic engineering.",
   back:"1. Isolate (cut out) the required gene using enzymes.\n2. Insert the gene into a vector (e.g. a plasmid or virus).\n3. Use the vector to transfer the gene into the cells of the target organism.\n4. The organism then expresses the new gene.\n\nGenes are transferred at an early stage so all the organism's cells receive them.",difficulty:3,category:"concept"}
);

FLASHCARDS.push(
  // s11i-02-4 — Evidence for Evolution
  {id:"s11fc-02-4-1",islandId:"s11i-02-4",front:"How do fossils form?",
   back:"Fossils form in several ways:\n\n• Hard parts (bones, shells, teeth) that do not decay easily are replaced by minerals.\n• Parts of organisms that have not decayed because conditions are too harsh for decomposers (too cold, too acidic, no oxygen).\n• Traces such as footprints, burrows and rootlet impressions.",difficulty:2,category:"concept"},
  {id:"s11fc-02-4-2",islandId:"s11i-02-4",front:"Why is the fossil record incomplete?",
   back:"• Many early organisms were soft-bodied and rarely fossilised.\n• Fossils that did form may have been destroyed by geological activity (heat, pressure, movement).\n• Many fossils remain undiscovered.\n\nThis is why scientists cannot be certain exactly how life began.",difficulty:2,category:"concept"},
  {id:"s11fc-02-4-3",islandId:"s11i-02-4",front:"How does MRSA provide evidence of evolution happening now?",
   back:"A random mutation gave some bacteria resistance to antibiotics. When antibiotics are used, non-resistant bacteria die but resistant ones survive and reproduce, passing on the resistance.\n\nThe resistant strain spreads rapidly — natural selection we can observe within a human lifetime.",difficulty:2,category:"application"},
  {id:"s11fc-02-4-4",islandId:"s11i-02-4",front:"How can the development of antibiotic resistance be slowed?",
   back:"• Doctors should not prescribe antibiotics for non-serious or viral infections.\n• Patients should always finish the whole course, even when they feel better.\n• Restrict the use of antibiotics in agriculture.\n\nThis reduces the selection pressure that favours resistant bacteria.",difficulty:2,category:"application"},
  {id:"s11fc-02-4-5",islandId:"s11i-02-4",front:"Give three causes of extinction.",
   back:"1. A new predator, competitor or disease.\n2. A catastrophic event (e.g. volcanic eruption, asteroid impact).\n3. Rapid environmental change such as climate change or habitat destruction.\n\nA species becomes extinct when there are no remaining individuals.",difficulty:1,category:"concept"}
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
  ],
  "s11i-02-3":[
    {q:"In selective breeding, how are organisms with the desired characteristic produced?",opts:["By transferring a gene from another species","By choosing parents with the desired trait to breed over many generations","By exposing organisms to radiation","By keeping them warm and well fed"],c:1,e:"Selective breeding (artificial selection) works by repeatedly choosing the parents that best show the desired characteristic and breeding them together over many generations."},
    {q:"What is a major risk of selective breeding?",opts:["It creates entirely new species too quickly","It reduces the gene pool, increasing the risk of inherited disease","It always produces sterile offspring","It transfers genes between unrelated species"],c:1,e:"Selective breeding reduces genetic variation (a smaller gene pool). This inbreeding increases the chance of inherited disorders and makes the population more vulnerable to new diseases."},
    {q:"Which of these is an example of genetic engineering rather than selective breeding?",opts:["Breeding cows that produce more milk","Breeding dogs with gentle temperaments","Inserting the human insulin gene into bacteria","Choosing high-yield wheat plants to breed"],c:2,e:"Genetic engineering transfers a gene from one organism into another. Inserting the human insulin gene into bacteria is genetic engineering; the others are selective breeding."},
    {q:"What is used to carry a gene into a target cell during genetic engineering?",opts:["A vector such as a plasmid or virus","A fertiliser","An antibiotic","A hormone"],c:0,e:"After the required gene is isolated, it is inserted into a vector (often a bacterial plasmid or a virus), which transfers the gene into the cells of the target organism."},
    {q:"Why is golden rice an example of genetic engineering being used to benefit people?",opts:["It grows faster than normal rice","It has been engineered to contain extra vitamin A to reduce deficiency","It needs no water to grow","It cannot be eaten by pests"],c:1,e:"Golden rice is genetically engineered to produce beta-carotene (a source of vitamin A), helping to reduce vitamin A deficiency in regions where rice is a staple food."}
  ],
  "s11i-02-4":[
    {q:"Which of these is a reason the fossil record is incomplete?",opts:["Fossils never form from bones","Many early organisms were soft-bodied and rarely fossilised","Fossils dissolve as soon as they form","Scientists have found every fossil that exists"],c:1,e:"Soft-bodied organisms rarely leave fossils, many fossils have been destroyed by geological activity, and many remain undiscovered. This is why the record is incomplete."},
    {q:"How does antibiotic-resistant bacteria such as MRSA provide evidence for evolution?",opts:["Bacteria choose to become resistant when threatened","A random mutation gives resistance, and resistant bacteria survive and reproduce","Antibiotics turn ordinary bacteria into MRSA","Resistance is passed on from humans to bacteria"],c:1,e:"Resistance arises from a random mutation. When antibiotics kill non-resistant bacteria, the resistant ones survive and reproduce — natural selection happening within a human lifetime."},
    {q:"Which action helps reduce the development of antibiotic-resistant bacteria?",opts:["Stopping antibiotics as soon as you feel better","Using antibiotics for every cold","Finishing the whole prescribed course of antibiotics","Sharing antibiotics with family members"],c:2,e:"Finishing the full course ensures all the target bacteria are killed, so resistant survivors are not left to multiply. Overusing antibiotics increases the selection pressure for resistance."},
    {q:"What can be learned from the fossil record?",opts:["The exact date life first appeared","How organisms have changed and developed over geological time","Which animals are alive today","The DNA sequence of every extinct species"],c:1,e:"Fossils show how organisms have gradually changed over millions of years. They cannot tell us exactly how life began because the early record is incomplete."},
    {q:"Which of these could cause a species to become extinct?",opts:["An increase in its genetic variation","A new disease to which it has no resistance","An increase in the size of its habitat","A reduction in the number of its predators"],c:1,e:"A new disease, predator or competitor, a catastrophic event, or rapid environmental change can all cause extinction. Greater genetic variation and more habitat help a species survive."}
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
<div class="lesson-diagram" data-diagram="five-kingdoms"><p class="diagram-caption">The five kingdoms of classification</p></div>
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
<p>Students sometimes confuse <strong>endangered</strong> (at risk of extinction) with <strong>extinct</strong> (no individuals remain). A species can recover from being endangered if conservation measures are taken — but extinction is permanent.</p>`,

's11i-02-3': `
<h2>Selective Breeding &amp; Genetic Engineering</h2>
<p>Humans have changed organisms to suit their needs for thousands of years. There are two main methods: <strong>selective breeding</strong> and <strong>genetic engineering</strong>.</p>

<h3>Selective breeding</h3>
<p><strong>Selective breeding</strong> (artificial selection) is when humans choose which organisms reproduce, based on desired characteristics. Over many generations the chosen trait becomes more common. It works like this:</p>
<ul>
<li>Choose parents that show the desired characteristic.</li>
<li>Breed them together.</li>
<li>Select the best offspring and breed those together.</li>
<li>Repeat over many generations.</li>
</ul>
<p>Uses include crops with high yields, cattle that produce more milk, animals and plants with disease resistance, and domestic dogs bred for temperament. The main <strong>risk</strong> is a reduced gene pool: less variation (inbreeding) raises the chance of inherited disease and leaves the population vulnerable to a new disease or environmental change.</p>

<h3>Genetic engineering</h3>
<p><strong>Genetic engineering</strong> modifies an organism's genome by transferring a gene from one organism into another. The outline process is:</p>
<ul>
<li><strong>Isolate</strong> the required gene using enzymes.</li>
<li><strong>Insert</strong> it into a <strong>vector</strong> (a plasmid or virus).</li>
<li>Use the vector to carry the gene into the cells of the target organism.</li>
</ul>
<p>Uses include bacteria engineered to make human insulin, GM crops resistant to pests or herbicides, and golden rice (enriched with vitamin A). Benefits include greater yields and medicines; concerns include unknown long-term effects and ethical questions about altering genomes.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why bacteria, rather than animals, are used to produce human insulin.</p>
<p><strong>A:</strong> The human insulin gene is isolated and inserted into a bacterial plasmid, which is returned to the bacterium. Bacteria reproduce extremely quickly, so huge numbers can be grown cheaply in vats, each one producing pure human insulin. This is faster and cheaper than other sources and produces insulin identical to the human form.</p>

<h3>Common mistake</h3>
<p>Students often muddle the two methods. <strong>Selective breeding</strong> only uses genes already present in a species; <strong>genetic engineering</strong> transfers a gene from one organism into another, even between different species.</p>`,

's11i-02-4': `
<h2>Evidence for Evolution</h2>
<div class="lesson-diagram" data-diagram="antibiotic-resistance"><p class="diagram-caption">How antibiotic resistance spreads through natural selection</p></div>
<p>Several lines of evidence support the theory of evolution. Two of the most important are the <strong>fossil record</strong> and <strong>antibiotic-resistant bacteria</strong>.</p>

<h3>The fossil record</h3>
<p><strong>Fossils</strong> are the remains or traces of organisms from millions of years ago, found in rocks. They form when hard parts are replaced by minerals, when decay is prevented (too cold, acidic or low in oxygen), or as traces such as footprints and burrows. By dating fossils in different rock layers, scientists can see how organisms have <strong>changed over time</strong>. However, the record is <strong>incomplete</strong>: many early organisms were soft-bodied and rarely fossilised, many fossils have been destroyed by geological activity, and many are still undiscovered. This is why we cannot be certain how life first began.</p>

<h3>Antibiotic resistance</h3>
<p>Bacteria such as <strong>MRSA</strong> show evolution happening now. A random <strong>mutation</strong> gives some bacteria resistance. When antibiotics are used, non-resistant bacteria die but resistant ones <strong>survive and reproduce</strong>, passing on the resistance allele. The resistant strain quickly spreads. We can slow this by not overusing antibiotics, always finishing the prescribed course, and restricting their use in farming.</p>

<h3>Extinction</h3>
<p>A species is <strong>extinct</strong> when no individuals remain. Causes include new predators, competitors or diseases, catastrophic events, and rapid environmental change.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why failing to finish a course of antibiotics can lead to resistant bacteria.</p>
<p><strong>A:</strong> Stopping early kills the weaker bacteria but leaves behind those that survive longest, which are more likely to carry resistance. These survivors reproduce and pass on the resistance allele, so the next infection is harder to treat.</p>

<h3>Common mistake</h3>
<p>Students sometimes say bacteria "become resistant because of" the antibiotic. The mutation is <strong>random</strong> and happens first — the antibiotic only <strong>selects</strong> which bacteria survive; it does not create the resistance.</p>`

});
