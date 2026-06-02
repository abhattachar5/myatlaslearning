// content/y10/math/islands/t13.js — Year 10 Maths Topic 13: Sampling & Data
// Islands m10i-13-1 .. m10i-13-2. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-13-1 — Populations & Sampling
  {id:"m10fc-13-1-1", islandId:"m10i-13-1", front:"What is a population in statistics?",
   back:"The whole group you are interested in.\n\nE.g. all the students in a school, or every light bulb a factory makes.", difficulty:1, category:"definition"},
  {id:"m10fc-13-1-2", islandId:"m10i-13-1", front:"What is a sample?",
   back:"A smaller part of the population that you actually study.\n\nResults from the sample are used to estimate facts about the whole population.", difficulty:1, category:"definition"},
  {id:"m10fc-13-1-3", islandId:"m10i-13-1", front:"Why do we use samples instead of whole populations?",
   back:"Because surveying everyone is usually too slow, expensive or impossible.\n\nA good sample gives reliable estimates much more cheaply.", difficulty:2, category:"concept"},
  {id:"m10fc-13-1-4", islandId:"m10i-13-1", front:"What is a random sample?",
   back:"One where every member of the population has an equal chance of being chosen.\n\nIt helps the sample fairly represent the population.", difficulty:2, category:"definition"},
  {id:"m10fc-13-1-5", islandId:"m10i-13-1", front:"What makes a sample more reliable?",
   back:"Being larger and chosen without bias.\n\nLarger random samples reduce the effect of chance and give better estimates.", difficulty:2, category:"concept"},
  {id:"m10fc-13-1-6", islandId:"m10i-13-1", front:"How could you choose a random sample of 30 from 600 students?",
   back:"Give everyone a number 1–600 and use a random number generator to pick 30.\n\nThat gives each student an equal chance.", difficulty:3, category:"application"},

  // m10i-13-2 — Bias & Stratified Sampling
  {id:"m10fc-13-2-1", islandId:"m10i-13-2", front:"What is a biased sample?",
   back:"One that does not fairly represent the population.\n\nBias makes some groups more likely to be picked than others.", difficulty:2, category:"definition"},
  {id:"m10fc-13-2-2", islandId:"m10i-13-2", front:"Give an example of a biased sampling method.",
   back:"Only surveying people outside a gym about exercise habits.\n\nThey are more active than the general population, so the sample is biased.", difficulty:2, category:"application"},
  {id:"m10fc-13-2-3", islandId:"m10i-13-2", front:"What is a stratified sample?",
   back:"A sample that takes amounts from each group in proportion to the group's size.\n\nBigger groups contribute more to the sample.", difficulty:3, category:"definition"},
  {id:"m10fc-13-2-4", islandId:"m10i-13-2", front:"How do you find how many to sample from a group (stratified)?",
   back:"(group size ÷ total population) × sample size.\n\nThis keeps each group's share in the sample fair.", difficulty:3, category:"concept"},
  {id:"m10fc-13-2-5", islandId:"m10i-13-2", front:"A school has 300 in Year 10 and 200 in Year 11. A stratified sample of 50 takes how many Year 10s?",
   back:"30\n\n(300 ÷ 500) × 50 = 0.6 × 50 = 30 Year 10 students.", difficulty:3, category:"calculation"},
  {id:"m10fc-13-2-6", islandId:"m10i-13-2", front:"How can you reduce bias in a survey?",
   back:"Use a random or stratified method, sample a large enough group, and word questions neutrally (no leading questions).", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m10i-13-1": [
    {q:"The whole group being studied is called the:", opts:["Population","Sample","Outlier","Mode"], c:0,
     e:"The population is everyone/everything of interest."},
    {q:"We use samples mainly because surveying everyone is:", opts:["Too costly or slow","More accurate","Always biased","Impossible to analyse"], c:0,
     e:"Sampling saves time and money while still giving good estimates."},
    {q:"In a random sample, every member has:", opts:["An equal chance of selection","No chance","A chance based on age","The same answer"], c:0,
     e:"Random sampling gives everyone an equal chance, reducing bias."},
    {q:"A sample is more reliable when it is:", opts:["Larger and unbiased","Smaller","Chosen from friends","Taken at one time only"], c:0,
     e:"Larger, unbiased samples reduce the effect of chance."},
    {q:"A part of the population that is actually studied is the:", opts:["Sample","Population","Census","Range"], c:0,
     e:"The sample is the subset you collect data from."}
  ],
  "m10i-13-2": [
    {q:"A sample that does not represent the population fairly is:", opts:["Biased","Random","Stratified","Large"], c:0,
     e:"An unrepresentative sample is biased."},
    {q:"Surveying only gym-goers about exercise is biased because they are:", opts:["More active than average","A random group","Too few","Older"], c:0,
     e:"Gym-goers exercise more than the general population, biasing the result."},
    {q:"A stratified sample takes from each group:", opts:["In proportion to its size","Equal numbers","Only the largest","At random from one group"], c:0,
     e:"Stratified sampling matches each group's share of the population."},
    {q:"School: 400 girls, 100 boys. Stratified sample of 50 takes how many boys?", opts:["10","25","40","5"], c:0,
     e:"(100 ÷ 500) × 50 = 0.2 × 50 = 10 boys."},
    {q:"Which reduces bias?", opts:["Random sampling","Asking only friends","A leading question","A tiny sample"], c:0,
     e:"Random (or stratified) sampling gives a fairer, less biased result."}
  ]
});

Object.assign(LESSONS, {
  "m10i-13-1": `<h2>Populations &amp; Sampling</h2>
<p>A <strong>population</strong> is the whole group you want to know about; a <strong>sample</strong> is the smaller part you actually study. We sample because surveying everyone is usually too slow or expensive, and a good sample still gives reliable estimates.</p>
<h3>Random sampling</h3>
<p>In a <strong>random sample</strong>, every member of the population has an equal chance of being chosen — for example, numbering 600 students 1–600 and using a random number generator to pick 30.</p>
<h3>Reliability</h3>
<p>Larger, unbiased samples give better estimates because they reduce the effect of chance.</p>`,

  "m10i-13-2": `<h2>Bias &amp; Stratified Sampling</h2>
<p>A sample is <strong>biased</strong> if it does not fairly represent the population — surveying only gym-goers about exercise overstates how active people are. A <strong>stratified sample</strong> avoids this by taking from each group <em>in proportion</em> to its size.</p>
<h3>Worked example</h3>
<p>A school has 300 Year 10s and 200 Year 11s (500 total). A stratified sample of 50 takes (300 ÷ 500) × 50 = <strong>30</strong> Year 10s and 20 Year 11s.</p>
<h3>Reducing bias</h3>
<p>Use random or stratified methods, a large enough sample, and neutral (non-leading) questions.</p>`
});
