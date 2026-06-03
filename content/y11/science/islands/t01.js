// science-y11-t01.js — Year 11 Science Topic 1: Reproduction & Variation
// Islands: s11i-01-1 .. s11i-01-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-01-1 — Sexual & Asexual Reproduction
  {id:"s11fc-01-1-1",islandId:"s11i-01-1",front:"What is the key difference between sexual and asexual reproduction?",
   back:"Sexual reproduction involves the fusion of two gametes (sex cells) from two parents, producing genetically different offspring.\n\nAsexual reproduction involves only one parent and no fusion of gametes — all offspring are genetically identical clones.",difficulty:1,category:"definition"},
  {id:"s11fc-01-1-2",islandId:"s11i-01-1",front:"What happens during meiosis?",
   back:"Meiosis is a type of cell division that produces four genetically different haploid cells (gametes).\n\n1. DNA replicates\n2. The cell divides twice\n3. Chromosome number is halved (diploid → haploid)\n4. Crossing over and independent assortment create genetic variation.",difficulty:2,category:"concept"},
  {id:"s11fc-01-1-3",islandId:"s11i-01-1",front:"Give two advantages of sexual reproduction.",
   back:"1. Produces genetic variation in offspring, which increases the chance of survival if the environment changes.\n2. Natural selection can act on the variation, driving evolution.\n\nDisadvantage: requires two parents and is slower than asexual reproduction.",difficulty:2,category:"concept"},
  {id:"s11fc-01-1-4",islandId:"s11i-01-1",front:"Give two advantages of asexual reproduction.",
   back:"1. Only one parent needed — no energy wasted finding a mate.\n2. Faster than sexual reproduction, so populations can increase rapidly when conditions are favourable.\n\nDisadvantage: no genetic variation, so the whole population could be wiped out by a single disease.",difficulty:2,category:"concept"},
  {id:"s11fc-01-1-5",islandId:"s11i-01-1",front:"Name the type of cell division used to produce gametes.",
   back:"Meiosis.\n\nMitosis produces identical body cells for growth and repair.\nMeiosis produces genetically different gametes (sperm and egg cells) with half the chromosome number.",difficulty:1,category:"definition"},

  // s11i-01-2 — DNA & Protein Synthesis
  {id:"s11fc-01-2-1",islandId:"s11i-01-2",front:"Describe the structure of a DNA molecule.",
   back:"DNA is a double helix — two strands wound around each other.\n\nEach strand is a polymer of nucleotides. Each nucleotide contains a sugar, a phosphate group and one of four bases: A, T, C, G.\n\nComplementary base pairing: A–T and C–G.",difficulty:2,category:"definition"},
  {id:"s11fc-01-2-2",islandId:"s11i-01-2",front:"What is protein synthesis (in simple terms)?",
   back:"Protein synthesis is the process by which the base sequence of a gene is used to build a specific protein.\n\n1. Transcription: DNA code is copied to mRNA in the nucleus.\n2. Translation: mRNA moves to a ribosome; each triplet of bases codes for one amino acid.\n3. Amino acids are joined in order to form the protein.",difficulty:3,category:"concept"},
  {id:"s11fc-01-2-3",islandId:"s11i-01-2",front:"What is a mutation?",
   back:"A mutation is a random change in the base sequence of DNA.\n\nMost mutations have no effect on the protein. Some change the protein's shape, which may be harmful (e.g. sickle-cell anaemia), neutral, or occasionally beneficial.",difficulty:2,category:"definition"},
  {id:"s11fc-01-2-4",islandId:"s11i-01-2",front:"What is meant by complementary base pairing in DNA?",
   back:"The bases on opposite strands always pair in the same way:\n\nAdenine (A) pairs with Thymine (T)\nCytosine (C) pairs with Guanine (G)\n\nThis means if one strand reads ATCG, the other reads TAGC.",difficulty:1,category:"definition"},
  {id:"s11fc-01-2-5",islandId:"s11i-01-2",front:"Where in the cell does protein synthesis take place?",
   back:"Transcription occurs in the nucleus (DNA → mRNA).\nTranslation occurs at the ribosomes in the cytoplasm (mRNA → protein).\n\nDNA is too large to leave the nucleus, so mRNA carries the code to the ribosome.",difficulty:2,category:"application"},

  // s11i-01-3 — Variation & Inherited Disorders
  {id:"s11fc-01-3-1",islandId:"s11i-01-3",front:"What is the difference between genetic and environmental variation?",
   back:"Genetic variation is caused by differences in DNA inherited from parents (e.g. blood group, eye colour).\n\nEnvironmental variation is caused by conditions an organism lives in (e.g. scars, accent).\n\nMany features (e.g. height, weight) are caused by both.",difficulty:1,category:"definition"},
  {id:"s11fc-01-3-2",islandId:"s11i-01-3",front:"What is a Punnett square used for?",
   back:"A Punnett square is a diagram used to predict the possible genotypes and phenotypes of offspring from a genetic cross.\n\nParent gametes go along the top and side; the four inner boxes show the possible combinations.",difficulty:1,category:"concept"},
  {id:"s11fc-01-3-3",islandId:"s11i-01-3",front:"Cystic fibrosis is caused by a recessive allele (f). What must the genotype be for a person to have the disorder?",
   back:"The person must be homozygous recessive: ff.\n\nFf = carrier (has one copy but does not show symptoms).\nFF = unaffected and not a carrier.",difficulty:2,category:"application"},
  {id:"s11fc-01-3-4",islandId:"s11i-01-3",front:"What is the difference between genotype and phenotype?",
   back:"Genotype: the combination of alleles an organism has (e.g. Bb).\n\nPhenotype: the observable characteristic that results (e.g. brown eyes).\n\nThe phenotype depends on the genotype and sometimes the environment.",difficulty:1,category:"definition"},
  {id:"s11fc-01-3-5",islandId:"s11i-01-3",front:"Two parents are both carriers of cystic fibrosis (Ff × Ff). What is the probability their child will have the disorder?",
   back:"1 in 4 (25%).\n\nPunnett square:\n     F    f\nF   FF   Ff\nf   Ff   ff\n\nOnly ff gives the disorder → 1 out of 4 = 25%.",difficulty:2,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-01-1":[
    {q:"Which type of cell division produces gametes?",opts:["Mitosis","Meiosis","Binary fission","Fertilisation"],c:1,e:"Meiosis is the cell division that halves the chromosome number and produces four genetically different gametes. Mitosis produces identical body cells."},
    {q:"How many genetically different cells does meiosis produce?",opts:["2","3","4","8"],c:2,e:"Meiosis involves two divisions, producing four haploid daughter cells that are all genetically different due to crossing over and independent assortment."},
    {q:"Which of these is an example of asexual reproduction?",opts:["Pollination in flowers","Strawberry runners","Spawning in fish","Mating in birds"],c:1,e:"Strawberry runners are a form of asexual reproduction — one parent plant produces genetically identical offspring. The other options all involve gametes from two parents."},
    {q:"What is the main disadvantage of asexual reproduction?",opts:["It requires two parents","It is very slow","There is no genetic variation","Offspring are always weaker"],c:2,e:"Without genetic variation, all offspring are clones. If the environment changes or a new disease arrives, the entire population may be affected because none have resistance."},
    {q:"In sexual reproduction, what is the fusion of two gametes called?",opts:["Mitosis","Meiosis","Fertilisation","Pollination"],c:2,e:"Fertilisation is the fusion of a male gamete and a female gamete to form a zygote. The zygote then divides by mitosis to grow into a new organism."}
  ],
  "s11i-01-2":[
    {q:"Which bases pair together in DNA?",opts:["A–C and T–G","A–G and T–C","A–T and C–G","A–U and C–G"],c:2,e:"In DNA, adenine (A) always pairs with thymine (T) and cytosine (C) always pairs with guanine (G). A–U pairing occurs in RNA, not DNA."},
    {q:"Where does transcription take place?",opts:["Ribosome","Cytoplasm","Cell membrane","Nucleus"],c:3,e:"Transcription (copying DNA to mRNA) occurs in the nucleus. The mRNA then travels to a ribosome in the cytoplasm for translation."},
    {q:"A section of DNA reads ATGCCG. What is the complementary strand?",opts:["ATGCCG","TGACCA","TACGGC","UACGGC"],c:2,e:"Using complementary base pairing (A–T, C–G): A→T, T→A, G→C, C→G, C→G, G→C gives TACGGC. UACGGC would be the mRNA strand (U replaces T in RNA)."},
    {q:"What is a triplet code?",opts:["Three genes coding for one protein","Three bases coding for one amino acid","Three amino acids making one protein","Three strands of DNA"],c:1,e:"Each set of three bases (a triplet or codon) in mRNA codes for one specific amino acid. The sequence of triplets determines the order of amino acids in the protein."},
    {q:"Most mutations have what effect on the organism?",opts:["They are always harmful","They are always beneficial","They usually have no effect","They always cause cancer"],c:2,e:"Most mutations are silent — they either occur in non-coding DNA or do not change the amino acid produced. Only a small proportion are harmful or beneficial."}
  ],
  "s11i-01-3":[
    {q:"Which of these is an example of variation caused by both genes and environment?",opts:["Blood group","Eye colour","Height","Presence of earlobes"],c:2,e:"Height is influenced by genes (from parents) and environment (nutrition, health). Blood group, eye colour and earlobe attachment are determined almost entirely by genes."},
    {q:"In a Punnett square cross of Ff × Ff, what fraction of offspring are expected to be carriers (Ff)?",opts:["1/4","2/4","3/4","4/4"],c:1,e:"The cross gives FF, Ff, Ff, ff. Two out of four (2/4 = 1/2) are carriers (Ff). But 1/4 was not among the results — careful: 2/4 simplifies to 1/2. The answer 2/4 is the correct option here."},
    {q:"Polydactyly is caused by a dominant allele. If one parent is Dd and the other is dd, what is the chance of a child being affected?",opts:["0%","25%","50%","100%"],c:2,e:"Dd × dd gives: Dd, Dd, dd, dd. Two out of four offspring carry at least one D allele, so 50% are affected."},
    {q:"What does 'homozygous' mean?",opts:["Having two different alleles","Having two identical alleles","Having no alleles","Having one allele"],c:1,e:"Homozygous means both alleles for a gene are the same (e.g. FF or ff). Heterozygous means the two alleles are different (e.g. Ff)."},
    {q:"Why is genetic screening for inherited disorders considered controversial?",opts:["It is too expensive","It always cures the disorder","It raises ethical issues about embryo selection","It has no medical value"],c:2,e:"Genetic screening can identify embryos with disorders, raising ethical questions about whether to select or discard embryos. It does not cure the disorder — it only identifies risk."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-01-1': `
<h2>Sexual &amp; Asexual Reproduction</h2>
<p>Organisms reproduce to pass on their genes. There are two fundamentally different strategies: <strong>sexual</strong> and <strong>asexual</strong> reproduction.</p>

<p><strong>Sexual reproduction</strong> involves the fusion of two gametes (sex cells) — one from each parent. The gametes are haploid (carry half the normal chromosome number), so when they fuse at fertilisation the resulting zygote is diploid. Because two parents contribute DNA, the offspring show <strong>genetic variation</strong>.</p>

<p><strong>Asexual reproduction</strong> requires only one parent. The offspring are produced by mitosis and are genetically identical to the parent — they are <strong>clones</strong>. Examples include bacterial binary fission, strawberry runners and potato tubers.</p>

<h3>Meiosis</h3>
<p>Gametes are made by <strong>meiosis</strong>, a special form of cell division:</p>
<ul>
<li>The cell copies its DNA, then divides <strong>twice</strong> to produce <strong>four haploid cells</strong>.</li>
<li>Each daughter cell is genetically different because of <strong>crossing over</strong> (sections of chromosomes swap) and <strong>independent assortment</strong> (chromosomes line up randomly).</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> A species has a diploid number of 46. How many chromosomes are in each gamete after meiosis?</p>
<p><strong>A:</strong> Meiosis halves the chromosome number, so each gamete contains 46 ÷ 2 = <strong>23 chromosomes</strong>.</p>

<h3>Common mistake</h3>
<p>Students often confuse mitosis and meiosis. Remember: <strong>m<em>i</em>tosis</strong> makes <strong>i</strong>dentical cells (two); <strong>m<em>e</em>iosis</strong> makes gametes and <strong>e</strong>nds with four different cells.</p>`,

's11i-01-2': `
<h2>DNA &amp; Protein Synthesis</h2>
<div class="lesson-diagram" data-diagram="dna-genes-chromosomes"><p class="diagram-caption">DNA, genes and chromosomes</p></div>
<p>DNA (deoxyribonucleic acid) carries the genetic code that determines the proteins an organism makes — and therefore its characteristics.</p>

<h3>Structure of DNA</h3>
<p>DNA is a <strong>double helix</strong> — two strands wound around each other. Each strand is a polymer of <strong>nucleotides</strong>. A nucleotide contains:</p>
<ul>
<li>A sugar (deoxyribose)</li>
<li>A phosphate group</li>
<li>One of four bases: <strong>A</strong> (adenine), <strong>T</strong> (thymine), <strong>C</strong> (cytosine), <strong>G</strong> (guanine)</li>
</ul>
<p>The bases pair up across the two strands: <strong>A with T</strong> and <strong>C with G</strong> (complementary base pairing).</p>

<h3>Protein synthesis</h3>
<p>A gene is a section of DNA that codes for a specific protein. The process has two main stages:</p>
<ul>
<li><strong>Transcription</strong> (in the nucleus): the DNA unzips and one strand is used as a template to make a complementary mRNA molecule.</li>
<li><strong>Translation</strong> (at a ribosome): the mRNA is read in sets of three bases (triplets). Each triplet codes for a specific amino acid. Amino acids are joined in sequence to build the protein.</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> A DNA template strand reads TAC GGA CTT. Write the mRNA sequence.</p>
<p><strong>A:</strong> Using complementary pairing (but replacing T with U in RNA): T→A, A→U, C→G, G→C, G→C, A→U, C→G, T→A, T→A. The mRNA reads <strong>AUG CCU GAA</strong>.</p>

<h3>Common mistake</h3>
<p>Students forget that RNA uses <strong>uracil (U)</strong> instead of thymine (T). In mRNA, A pairs with U — not with T.</p>`,

's11i-01-3': `
<h2>Variation &amp; Inherited Disorders</h2>
<div class="lesson-diagram" data-diagram="punnett-square"><p class="diagram-caption">A Punnett square for inheritance</p></div>
<p>No two individuals of a species are exactly alike (unless they are clones). This <strong>variation</strong> arises from genetic differences, environmental influences, or both.</p>

<h3>Types of variation</h3>
<ul>
<li><strong>Genetic variation</strong> — caused by differences in alleles inherited from parents. Examples: blood group, eye colour.</li>
<li><strong>Environmental variation</strong> — caused by conditions the organism experiences. Examples: scars, spoken language.</li>
<li><strong>Both</strong> — many characteristics are influenced by genes <em>and</em> environment. Example: height depends on genes but also on diet and health.</li>
</ul>

<h3>Punnett squares and inherited disorders</h3>
<p>A <strong>Punnett square</strong> shows the possible genotypes of offspring from a genetic cross. It is especially useful for predicting the chance of inheriting a disorder.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Cystic fibrosis is caused by a recessive allele, f. Two carrier parents (Ff) have a child. What is the probability the child has cystic fibrosis?</p>
<p><strong>A:</strong></p>
<ul>
<li>Parent gametes: F and f from each parent.</li>
<li>Punnett square: FF, Ff, Ff, ff.</li>
<li>Only ff gives the disorder → probability = <strong>1 in 4 (25%)</strong>.</li>
</ul>

<h3>Common mistake</h3>
<p>Students sometimes state that two carrier parents will definitely have one affected child out of four. The 25% is a <strong>probability for each pregnancy</strong> — it does not guarantee exact ratios in a real family.</p>`

});
