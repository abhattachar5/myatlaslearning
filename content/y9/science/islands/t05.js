// content/y9/science/islands/t05.js — Year 9 Science Topic 5: Inheritance Introduction
// Islands s9i-05-1 .. s9i-05-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-05-1 — DNA, Genes & Chromosomes
  {id:"s9fc-05-1-1", islandId:"s9i-05-1", front:"Describe the structure of DNA.",
   back:"DNA (deoxyribonucleic acid) is a polymer made of two strands twisted into a double helix.\n\nEach strand is made of nucleotides. Each nucleotide contains a sugar, a phosphate group and one of four bases: adenine (A), thymine (T), cytosine (C) and guanine (G).\n\nBases pair: A–T and C–G (complementary base pairing). The two strands are held together by weak hydrogen bonds between base pairs.", difficulty:2, category:"definition"},
  {id:"s9fc-05-1-2", islandId:"s9i-05-1", front:"Define gene, allele and chromosome.",
   back:"Gene — a short section of DNA that codes for a specific protein (and therefore a characteristic)\n\nAllele — a version of a gene. Different alleles of the same gene produce different forms of a characteristic (e.g. brown eyes vs blue eyes)\n\nChromosome — a long, tightly coiled molecule of DNA. Human body cells have 46 chromosomes (23 pairs).", difficulty:1, category:"definition"},
  {id:"s9fc-05-1-3", islandId:"s9i-05-1", front:"How do genes code for proteins?",
   back:"The sequence of bases in a gene determines the order of amino acids in a protein.\n\nEvery three bases (a triplet or codon) codes for one amino acid.\n\nThe DNA code is transcribed into mRNA, which travels to a ribosome. The ribosome reads the code and assembles amino acids into a polypeptide chain, which folds to form a protein.\n\nDifferent proteins give rise to different characteristics.", difficulty:2, category:"concept"},
  {id:"s9fc-05-1-4", islandId:"s9i-05-1", front:"How many chromosomes do human body cells and gametes have?",
   back:"Body cells (somatic cells): 46 chromosomes (23 pairs) — this is the diploid number (2n).\n\nGametes (sex cells — sperm and egg): 23 chromosomes — this is the haploid number (n).\n\nAt fertilisation, two haploid gametes fuse to restore the diploid number: 23 + 23 = 46.", difficulty:1, category:"concept"},
  {id:"s9fc-05-1-5", islandId:"s9i-05-1", front:"What is the Human Genome Project and why is it important?",
   back:"The Human Genome Project mapped the entire human DNA sequence (about 3 billion base pairs).\n\nBenefits:\n• Identify genes linked to diseases (e.g. cystic fibrosis)\n• Develop personalised medicines\n• Understand human evolution and migration\n• Improve forensic science and paternity testing\n\nEthical concerns include genetic privacy and the potential for genetic discrimination.", difficulty:2, category:"application"},

  // s9i-05-2 — Simple Inheritance & Punnett Squares
  {id:"s9fc-05-2-1", islandId:"s9i-05-2", front:"Define: dominant, recessive, homozygous and heterozygous.",
   back:"Dominant allele — expressed whenever it is present (even with only one copy). Shown with a capital letter (e.g. B).\n\nRecessive allele — only expressed when two copies are present (no dominant allele). Shown with a lowercase letter (e.g. b).\n\nHomozygous — both alleles are the same (BB or bb)\nHeterozygous — the two alleles are different (Bb)", difficulty:1, category:"definition"},
  {id:"s9fc-05-2-2", islandId:"s9i-05-2", front:"What is the difference between genotype and phenotype?",
   back:"Genotype — the combination of alleles an organism has for a particular gene (e.g. Bb)\n\nPhenotype — the observable characteristic resulting from the genotype and the environment (e.g. brown eyes)\n\nThe phenotype depends on which alleles are dominant or recessive.", difficulty:1, category:"definition"},
  {id:"s9fc-05-2-3", islandId:"s9i-05-2", front:"How do you complete a Punnett square for a monohybrid cross?",
   back:"1. Write the parents' genotypes\n2. Identify the gametes each parent can produce\n3. Draw a 2×2 grid; place one parent's gametes along the top and the other's down the side\n4. Fill in each box by combining the alleles\n5. Read off the possible offspring genotypes and phenotypes\n6. Express results as a ratio", difficulty:2, category:"concept"},
  {id:"s9fc-05-2-4", islandId:"s9i-05-2", front:"Cross two heterozygous parents (Bb × Bb). What ratio of phenotypes is expected?",
   back:"Gametes: each parent can produce B or b\n\nPunnett square:\n       B    b\n  B | BB | Bb |\n  b | Bb | bb |\n\nGenotypes: 1 BB : 2 Bb : 1 bb\nPhenotypes: 3 dominant : 1 recessive (3:1 ratio)\n\nThis 3:1 ratio is characteristic of a heterozygous × heterozygous cross.", difficulty:2, category:"calculation"},
  {id:"s9fc-05-2-5", islandId:"s9i-05-2", front:"In a cross between Bb and bb, what proportion of offspring are expected to show the recessive phenotype?",
   back:"Gametes: Bb produces B or b; bb produces b only\n\nPunnett square:\n       B    b\n  b | Bb | bb |\n  b | Bb | bb |\n\nGenotypes: 2 Bb : 2 bb → 1 Bb : 1 bb\nPhenotypes: 50% dominant : 50% recessive\n\nSo half the offspring are expected to show the recessive phenotype.", difficulty:2, category:"calculation"},
  {id:"s9fc-05-2-6", islandId:"s9i-05-2", front:"What does 'probability' mean in genetics, and why might actual results differ from predicted ratios?",
   back:"Probability is the chance of a particular outcome occurring. For example, in a Bb × Bb cross, the probability of an offspring being bb is 1 in 4 (25%).\n\nActual results may differ from predicted ratios because:\n• Fertilisation is random — any sperm can fuse with the egg\n• Small sample sizes increase variation from expected ratios\n• Environmental factors may affect survival\n\nWith larger numbers of offspring, results tend to be closer to the predicted ratio.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-05-1": [
    {q:"Where in the cell is DNA found?",
     opts:["Cytoplasm","Ribosome","Nucleus","Cell membrane"], c:2,
     e:"DNA is found in the nucleus of eukaryotic cells. It is organised into chromosomes. Ribosomes are where proteins are assembled (using the DNA code carried by mRNA), but the DNA itself stays in the nucleus."},
    {q:"Human body cells contain how many chromosomes?",
     opts:["23","46","92","12"], c:1,
     e:"Human body cells are diploid — they contain 46 chromosomes arranged in 23 pairs. Gametes (sperm and egg cells) are haploid with 23 chromosomes. At fertilisation, 23 + 23 = 46 is restored."},
    {q:"What is a gene?",
     opts:["An entire chromosome","A section of DNA that codes for a specific protein","A type of cell","A nucleotide base"], c:1,
     e:"A gene is a short section of DNA on a chromosome. The sequence of bases in the gene provides the code for assembling a specific protein. Different genes code for different proteins, which determine our characteristics."},
    {q:"In DNA, adenine always pairs with:",
     opts:["Cytosine","Guanine","Thymine","Adenine"], c:2,
     e:"In DNA, the complementary base pairing rules are: adenine (A) pairs with thymine (T), and cytosine (C) pairs with guanine (G). These are connected by hydrogen bonds across the two strands of the double helix."},
    {q:"What is the relationship between genes and proteins?",
     opts:["Genes are made of proteins","The base sequence in a gene determines the amino acid sequence in a protein","Proteins code for genes","There is no relationship between them"], c:1,
     e:"The order of bases in a gene determines the order in which amino acids are assembled at the ribosome. Every three bases code for one amino acid. The chain of amino acids folds to form a specific protein, which affects the organism's characteristics."}
  ],
  "s9i-05-2": [
    {q:"In a genetic cross, a parent with genotype Bb produces gametes with which alleles?",
     opts:["Only B","Only b","B or b","BB or bb"], c:2,
     e:"Each gamete receives one allele from each pair. A heterozygous parent (Bb) produces two types of gamete: some carry the B allele and some carry the b allele. Each gamete has only one allele for this gene."},
    {q:"Two parents are both heterozygous (Bb). What fraction of offspring are expected to be homozygous recessive (bb)?",
     opts:["1/4","1/2","3/4","All"], c:0,
     e:"Using a Punnett square for Bb × Bb: the four possible outcomes are BB, Bb, Bb, bb. Only 1 out of 4 is bb, so 1/4 (25%) of offspring are expected to be homozygous recessive."},
    {q:"A characteristic that is only expressed when two copies of the allele are present is described as:",
     opts:["Dominant","Codominant","Recessive","Heterozygous"], c:2,
     e:"A recessive allele is only expressed in the phenotype when the organism is homozygous recessive (bb). If a dominant allele is present (Bb), the dominant phenotype is shown instead."},
    {q:"An organism with the genotype BB is described as:",
     opts:["Heterozygous dominant","Homozygous recessive","Heterozygous recessive","Homozygous dominant"], c:3,
     e:"BB means both alleles are the same (homozygous) and both are dominant (B). Heterozygous would be Bb; homozygous recessive would be bb."},
    {q:"A cross between Bb and bb gives which expected ratio of phenotypes?",
     opts:["3 dominant : 1 recessive","All dominant","1 dominant : 1 recessive","All recessive"], c:2,
     e:"Bb × bb gives: Bb, Bb, bb, bb → 2 dominant : 2 recessive = 1:1 ratio. Half the offspring show the dominant phenotype, half show the recessive."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-05-1': `
<h2>DNA, Genes &amp; Chromosomes</h2>
<p>Every living organism carries a set of instructions in its cells. These instructions are encoded in a molecule called DNA. Understanding DNA, genes and chromosomes is the foundation for all of genetics.</p>

<h3>The Structure of DNA</h3>
<p>DNA (deoxyribonucleic acid) is a long polymer shaped like a twisted ladder &mdash; the famous <strong>double helix</strong>. Each "rung" consists of a pair of bases: <strong>A&ndash;T</strong> (adenine&ndash;thymine) and <strong>C&ndash;G</strong> (cytosine&ndash;guanine). This is called complementary base pairing.</p>

<h3>Genes, Alleles and Chromosomes</h3>
<ul>
  <li><strong>Chromosome</strong> &mdash; a long, coiled molecule of DNA found in the nucleus. Humans have 46 chromosomes (23 pairs).</li>
  <li><strong>Gene</strong> &mdash; a short section of a chromosome (DNA) that codes for a particular protein and therefore a characteristic.</li>
  <li><strong>Allele</strong> &mdash; a version of a gene. We inherit two alleles for each gene (one from each parent).</li>
</ul>
<p>Gametes (sex cells) are <strong>haploid</strong> &mdash; they contain 23 chromosomes. At fertilisation, two gametes fuse to form a <strong>diploid</strong> cell with 46 chromosomes.</p>

<h3>Worked Example</h3>
<p>Explain how genes code for proteins.</p>
<p>The sequence of bases along a gene provides a code. Every three bases (a triplet) codes for one amino acid. The gene is first transcribed into messenger RNA (mRNA), which leaves the nucleus and attaches to a ribosome. The ribosome reads the mRNA code and links amino acids together in the correct order. The resulting chain of amino acids folds into a protein with a specific shape and function.</p>

<h3>Common Mistake</h3>
<p>Students often say "genes are passed from parent to offspring." More precisely, <em>alleles</em> are passed on. Each parent contributes one allele for each gene. Also, do not confuse DNA with the whole chromosome &mdash; a chromosome contains one very long DNA molecule, and along that DNA there are many different genes.</p>
`,

's9i-05-2': `
<h2>Simple Inheritance &amp; Punnett Squares</h2>
<p>One of the most satisfying parts of genetics is predicting the outcomes of crosses. Using Punnett squares, you can work out the expected genotypes and phenotypes of offspring from two known parents.</p>

<h3>Key Terms</h3>
<ul>
  <li><strong>Dominant allele</strong> &mdash; always expressed when present (capital letter, e.g. B)</li>
  <li><strong>Recessive allele</strong> &mdash; only expressed when no dominant allele is present (lowercase, e.g. b)</li>
  <li><strong>Homozygous</strong> &mdash; two identical alleles (BB or bb)</li>
  <li><strong>Heterozygous</strong> &mdash; two different alleles (Bb)</li>
  <li><strong>Genotype</strong> &mdash; the alleles an organism has (e.g. Bb)</li>
  <li><strong>Phenotype</strong> &mdash; the observable characteristic (e.g. brown fur)</li>
</ul>

<h3>How to Complete a Punnett Square</h3>
<p>Consider a cross between two heterozygous parents (Bb &times; Bb):</p>
<p>1. Identify the gametes: each parent produces B or b.<br>
2. Draw the grid and combine alleles:</p>
<table style="width:auto;border-collapse:collapse;margin:1em auto">
  <tr><th style="padding:8px;border:1px solid #ccc"></th><th style="padding:8px;border:1px solid #ccc;background:#ecfdf5"><strong>B</strong></th><th style="padding:8px;border:1px solid #ccc;background:#ecfdf5"><strong>b</strong></th></tr>
  <tr><th style="padding:8px;border:1px solid #ccc;background:#ecfdf5"><strong>B</strong></th><td style="padding:8px;border:1px solid #ccc">BB</td><td style="padding:8px;border:1px solid #ccc">Bb</td></tr>
  <tr><th style="padding:8px;border:1px solid #ccc;background:#ecfdf5"><strong>b</strong></th><td style="padding:8px;border:1px solid #ccc">Bb</td><td style="padding:8px;border:1px solid #ccc">bb</td></tr>
</table>
<p>Genotype ratio: 1 BB : 2 Bb : 1 bb. Phenotype ratio: <strong>3 dominant : 1 recessive</strong>.</p>

<h3>Worked Example</h3>
<p>In mice, brown fur (B) is dominant over white fur (b). A heterozygous brown mouse is crossed with a white mouse (Bb &times; bb). What proportion of offspring are expected to have white fur?</p>
<p>Gametes: Bb &rarr; B or b; bb &rarr; b only. Offspring: Bb, Bb, bb, bb &rarr; 2 brown : 2 white = 1:1 ratio. Therefore <strong>50%</strong> (or 1 in 2) offspring are expected to have white fur.</p>

<h3>Common Mistake</h3>
<p>A 3:1 ratio does NOT mean that if you have 4 offspring, exactly 3 will be dominant and 1 recessive. It means each individual offspring has a 3-in-4 (75%) <em>probability</em> of being dominant. In small families, actual results may differ significantly from the predicted ratio. With larger numbers, results tend to match the prediction more closely.</p>
`

});
