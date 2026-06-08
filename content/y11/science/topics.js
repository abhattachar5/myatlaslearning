// content/y11/science/topics.js — Year 11 Science: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA Trilogy 8464 completion + exam technique.
// Science island accent colour #10b981.

const SCIENCE_TOPICS_Y11 = [
  // ── Biology ──────────────────────────────────────────────────────────
  {id:"s11t-01", name:"Reproduction & Variation", emoji:"🧬", hasContent:true,
   description:"Study sexual and asexual reproduction, meiosis, DNA and genetic variation."},
  {id:"s11t-02", name:"Evolution & Classification", emoji:"🦎", hasContent:true,
   description:"Understand natural selection, evolution, extinction and how organisms are classified."},
  {id:"s11t-03", name:"Ecology: Populations & Sustainability", emoji:"🌍", hasContent:true,
   description:"Investigate population dynamics, food security and the impact of farming on ecosystems."},
  // ── Chemistry ────────────────────────────────────────────────────────
  {id:"s11t-04", name:"Using Resources Sustainably", emoji:"♻️", hasContent:true,
   description:"Evaluate water treatment, the Haber process, life-cycle assessments and sustainable development."},
  {id:"s11t-05", name:"Chemical Analysis & Testing", emoji:"🧫", hasContent:true,
   description:"Identify ions and gases using tests and interpret chromatography results."},
  {id:"s11t-06", name:"Atmospheric Chemistry & Climate", emoji:"🌡️", hasContent:true,
   description:"Explain the greenhouse effect, climate change and the chemistry of pollutant gases."},
  // ── Physics ──────────────────────────────────────────────────────────
  {id:"s11t-07", name:"Magnetism & Electromagnetism", emoji:"🧲", hasContent:true,
   description:"Describe magnetic fields, the motor effect, electromagnetic induction and transformers."},
  {id:"s11t-08", name:"Space Physics", emoji:"🌌", hasContent:true,
   description:"Describe the Solar System, the lifecycle of stars and the expanding universe."},
  {id:"s11t-09", name:"Newton's Laws & Momentum", emoji:"🚀", hasContent:true,
   description:"Apply Newton's three laws, calculate momentum and explain conservation of momentum."},
  {id:"s11t-10", name:"Energy: Efficiency & Resources", emoji:"🔋", hasContent:true,
   description:"Evaluate energy resources, calculate efficiency and describe the National Grid."},
  // ── Exam skills ──────────────────────────────────────────────────────
  {id:"s11t-11", name:"Biology Required Practicals", emoji:"🔬", hasContent:true,
   description:"Review the key biology required practicals for the exam."},
  {id:"s11t-12", name:"Chemistry Required Practicals", emoji:"⚗️", hasContent:true,
   description:"Review the key chemistry required practicals for the exam."},
  {id:"s11t-13", name:"Physics Required Practicals", emoji:"📏", hasContent:true,
   description:"Review the key physics required practicals for the exam."},
  {id:"s11t-14", name:"Exam Technique & Maths in Science", emoji:"📝", hasContent:true,
   description:"Master command words, 6-mark answers and the maths skills tested in GCSE Science."}
];

// ── Biology islands ──────────────────────────────────────────────────────────

// Topic 1: Reproduction & Variation
CURRICULUM.push(
  {id:"s11i-01-1", name:"Sexual & Asexual Reproduction", emoji:"🧬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Compare sexual and asexual reproduction and explain the role of meiosis.",
   learningOutcomes:["Compare sexual and asexual reproduction","Describe meiosis and its role","Explain the importance of genetic variation"],
   topics:["Sexual vs asexual","Meiosis","Genetic variation"], prerequisites:[]},
  {id:"s11i-01-2", name:"DNA & Protein Synthesis", emoji:"🔬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-01", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Describe the structure of DNA in more detail and outline how genes code for proteins.",
   learningOutcomes:["Describe the double-helix and base pairing","Outline protein synthesis","Explain how mutations arise"],
   topics:["DNA structure","Protein synthesis overview","Mutations"], prerequisites:["s11i-01-1"]},
  {id:"s11i-01-3", name:"Variation & Inherited Disorders", emoji:"📊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Distinguish genetic and environmental variation and use Punnett squares for inherited disorders.",
   learningOutcomes:["Distinguish genetic, environmental and combined variation","Complete Punnett squares for disorders","Evaluate genetic screening"],
   topics:["Types of variation","Genetic disorders","Screening"], prerequisites:["s11i-01-1"]}
);

// Topic 2: Evolution & Classification
CURRICULUM.push(
  {id:"s11i-02-1", name:"Natural Selection & Evolution", emoji:"🦎", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain natural selection, evidence for evolution and Darwin's theory.",
   learningOutcomes:["Describe the steps of natural selection","Give evidence for evolution (fossils, genetics)","Explain the theory of evolution by natural selection"],
   topics:["Natural selection steps","Evidence for evolution","Darwin's theory"], prerequisites:[]},
  {id:"s11i-02-2", name:"Classification & Extinction", emoji:"📋", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe how organisms are classified and explain causes of extinction.",
   learningOutcomes:["Describe the Linnaean classification system","Explain the three-domain system","Discuss causes of extinction"],
   topics:["Linnaean classification","Three domains","Extinction"], prerequisites:["s11i-02-1"]},
  {id:"s11i-02-3", name:"Selective Breeding & Genetic Engineering", emoji:"🧬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain selective breeding and genetic engineering, their uses, benefits and concerns.",
   learningOutcomes:["Explain selective breeding and the risk of inbreeding","Outline the genetic engineering process and its uses","Evaluate the benefits and concerns"],
   topics:["Selective breeding","Genetic engineering","Benefits & ethics"], prerequisites:["s11i-02-1"]},
  {id:"s11i-02-4", name:"Evidence for Evolution", emoji:"🦴", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe evidence for evolution from fossils and antibiotic-resistant bacteria.",
   learningOutcomes:["Explain how fossils form evidence (and gaps)","Explain antibiotic resistance as evolution now","Describe causes of extinction"],
   topics:["Fossil record","Antibiotic resistance","Extinction"], prerequisites:["s11i-02-1"]}
);

// Topic 3: Ecology: Populations & Sustainability
CURRICULUM.push(
  {id:"s11i-03-1", name:"Trophic Levels & Biomass", emoji:"🌿", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe trophic levels, pyramids of biomass and the transfer of energy.",
   learningOutcomes:["Define trophic levels","Draw and interpret pyramids of biomass","Calculate efficiency of energy transfer"],
   topics:["Trophic levels","Pyramids of biomass","Energy transfer efficiency"], prerequisites:[]},
  {id:"s11i-03-2", name:"Food Security & Farming", emoji:"🌾", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain threats to food security and evaluate intensive farming methods.",
   learningOutcomes:["Describe factors threatening food security","Evaluate intensive farming techniques","Discuss biotechnology (GM crops, fish farming)"],
   topics:["Food security threats","Intensive farming","Biotechnology"], prerequisites:["s11i-03-1"]},
  {id:"s11i-03-3", name:"Water & Carbon Cycles", emoji:"💧", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe the water cycle and its role in maintaining ecosystems.",
   learningOutcomes:["Describe the water cycle","Link the water and carbon cycles","Explain decomposition and its role in cycling"],
   topics:["Water cycle","Carbon cycle links","Decomposition"], prerequisites:["s11i-03-1"]},
  {id:"s11i-03-4", name:"Biodiversity & Human Impact", emoji:"🌍", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain biodiversity and the human activities that reduce it.",
   learningOutcomes:["Define biodiversity and its importance","Explain pollution and land-use impacts","Link population growth to resource use"],
   topics:["Biodiversity","Pollution & land use","Population"], prerequisites:["s11i-03-1"]},
  {id:"s11i-03-5", name:"Maintaining Biodiversity", emoji:"🌳", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe conservation measures used to protect and restore biodiversity.",
   learningOutcomes:["Describe breeding and habitat programmes","Explain field margins, hedgerows and reforestation","Link recycling to conservation"],
   topics:["Conservation","Habitats","Recycling"], prerequisites:["s11i-03-1"]}
);

// ── Chemistry islands ────────────────────────────────────────────────────────

// Topic 4: Using Resources Sustainably
CURRICULUM.push(
  {id:"s11i-04-1", name:"Water Treatment & Sustainability", emoji:"♻️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe how water is treated and evaluate sustainable resource use.",
   learningOutcomes:["Describe the stages of water treatment","Distinguish potable, pure and waste water","Evaluate life-cycle assessments"],
   topics:["Water treatment","Potable water","LCA"], prerequisites:[]},
  {id:"s11i-04-2", name:"The Haber Process & Fertilisers", emoji:"🏭", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe the Haber process and evaluate the production and use of fertilisers.",
   learningOutcomes:["State the Haber process equation and conditions","Explain the compromise conditions","Evaluate the use of fertilisers"],
   topics:["Haber process","Compromise conditions","Fertilisers"], prerequisites:["s11i-04-1"]},
  {id:"s11i-04-3", name:"Life-Cycle Assessment & Recycling", emoji:"♻️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Carry out a life-cycle assessment and explain the value of recycling.",
   learningOutcomes:["Describe the four LCA stages","Explain the difficulty of quantifying impacts","Explain why recycling saves energy and resources"],
   topics:["Life-cycle assessment","Reduce/reuse/recycle","Recycling materials"], prerequisites:["s11i-04-1"]},
  {id:"s11i-04-4", name:"Corrosion & Using Materials", emoji:"🪤", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain corrosion and its prevention, and why alloys are harder than pure metals.",
   learningOutcomes:["Explain that rusting needs water and oxygen","Describe barrier and sacrificial protection","Explain why alloys are harder than pure metals"],
   topics:["Rusting","Preventing corrosion","Alloys & materials"], prerequisites:["s11i-04-1"]}
);

// Topic 5: Chemical Analysis & Testing
CURRICULUM.push(
  {id:"s11i-05-1", name:"Identifying Ions & Gases", emoji:"🧫", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Use flame tests, precipitation reactions and gas tests to identify substances.",
   learningOutcomes:["Describe flame test colours for Group 1 and 2 metals","Use NaOH to identify metal hydroxides","Test for hydrogen, oxygen, carbon dioxide and chlorine"],
   topics:["Flame tests","Precipitation tests","Gas tests"], prerequisites:[]},
  {id:"s11i-05-2", name:"Chromatography", emoji:"🌈", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:1,
   description:"Describe paper chromatography and calculate Rf values.",
   learningOutcomes:["Describe the chromatography method","Calculate Rf values","Interpret chromatograms to identify substances"],
   topics:["Method","Rf values","Interpreting results"], prerequisites:["s11i-05-1"]}
);

// Topic 6: Atmospheric Chemistry & Climate
CURRICULUM.push(
  {id:"s11i-06-1", name:"The Greenhouse Effect & Climate Change", emoji:"🌡️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain the greenhouse effect and evaluate evidence for human-caused climate change.",
   learningOutcomes:["Explain the greenhouse effect","Name the main greenhouse gases","Evaluate evidence for climate change"],
   topics:["Greenhouse effect","CO₂, methane, water vapour","Climate change evidence"], prerequisites:[]},
  {id:"s11i-06-2", name:"Pollutant Gases", emoji:"🏭", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:1,
   description:"Describe how combustion produces pollutants and their effects on the environment.",
   learningOutcomes:["Explain incomplete combustion","Describe the formation of sulfur dioxide and nitrogen oxides","Evaluate their environmental impact"],
   topics:["Incomplete combustion","SO₂ & NOₓ","Acid rain & health"], prerequisites:["s11i-06-1"]}
);

// ── Physics islands ──────────────────────────────────────────────────────────

// Topic 7: Magnetism & Electromagnetism
CURRICULUM.push(
  {id:"s11i-07-1", name:"Magnetic Fields", emoji:"🧲", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-07", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe magnetic fields around bar magnets and current-carrying wires.",
   learningOutcomes:["Draw magnetic field lines around a bar magnet","Describe the field around a wire and solenoid","Explain how to increase an electromagnet's strength"],
   topics:["Bar magnet fields","Solenoid field","Electromagnets"], prerequisites:[]},
  {id:"s11i-07-2", name:"The Motor Effect", emoji:"⚡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-07", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Explain and calculate the force on a current-carrying wire in a magnetic field.",
   learningOutcomes:["Explain the motor effect","Use F = BIl","Describe how a DC motor works"],
   topics:["Motor effect","F = BIl","DC motor"], prerequisites:["s11i-07-1"]},
  {id:"s11i-07-3", name:"Electromagnetic Induction", emoji:"🔄", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-07", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Explain electromagnetic induction, generators and transformers.",
   learningOutcomes:["Explain how a changing field induces a voltage","Describe how a generator works","Use the transformer equation"],
   topics:["Induction","Generators","Transformers"], prerequisites:["s11i-07-2"]}
);

// Topic 8: Space Physics
CURRICULUM.push(
  {id:"s11i-08-1", name:"The Solar System & Orbits", emoji:"🌌", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-08", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Describe the Solar System and explain what keeps planets in orbit.",
   learningOutcomes:["Describe the Solar System","Explain gravity and orbits","Describe how satellites orbit Earth"],
   topics:["Solar System","Gravity & orbits","Satellites"], prerequisites:[]},
  {id:"s11i-08-2", name:"Life Cycle of Stars", emoji:"⭐", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-08", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe the life cycle of stars and how elements are formed.",
   learningOutcomes:["Describe the stages of a star's life","Explain how heavy elements are formed","Describe the expanding universe and red shift"],
   topics:["Stellar evolution","Element formation","Red shift & Big Bang"], prerequisites:["s11i-08-1"]}
);

// Topic 9: Newton's Laws & Momentum
CURRICULUM.push(
  {id:"s11i-09-1", name:"Newton's Three Laws", emoji:"🚀", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-09", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"State and apply Newton's three laws of motion.",
   learningOutcomes:["State Newton's first, second and third laws","Apply F = ma to problems","Explain action–reaction pairs"],
   topics:["First law (inertia)","Second law (F = ma)","Third law (action–reaction)"], prerequisites:[]},
  {id:"s11i-09-2", name:"Momentum & Conservation", emoji:"🎱", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-09", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Calculate momentum and apply conservation of momentum to collisions.",
   learningOutcomes:["Use p = mv","State and apply conservation of momentum","Calculate momentum before and after a collision"],
   topics:["Momentum formula","Conservation","Collision calculations"], prerequisites:["s11i-09-1"]},
  {id:"s11i-09-3", name:"Stopping Distances & Safety", emoji:"🚗", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-09", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain factors affecting stopping distance and how safety features reduce injury.",
   learningOutcomes:["Define thinking and braking distance","Explain factors affecting each","Describe how crumple zones and seatbelts reduce force"],
   topics:["Thinking distance","Braking distance","Safety features"], prerequisites:["s11i-09-1"]},
  {id:"s11i-09-4", name:"Acceleration & Velocity-Time Graphs", emoji:"📈", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-09", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Calculate acceleration and interpret velocity-time graphs, including v² = u² + 2as.",
   learningOutcomes:["Use a = Δv ÷ t","Use v² = u² + 2as","Read acceleration and distance from a v-t graph"],
   topics:["Acceleration","v² = u² + 2as","Velocity-time graphs"], prerequisites:["s11i-09-1"]},
  {id:"s11i-09-5", name:"Terminal Velocity", emoji:"🪂", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-09", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain terminal velocity using the balance of weight and air resistance on a falling object.",
   learningOutcomes:["Identify the forces on a falling object","Explain how terminal velocity is reached","Describe the velocity-time graph shape"],
   topics:["Forces in free fall","Reaching terminal velocity","v-t graph"], prerequisites:["s11i-09-1"]}
);

// Topic 10: Energy: Efficiency & Resources
CURRICULUM.push(
  {id:"s11i-10-1", name:"Energy Resources", emoji:"🔋", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-10", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Compare renewable and non-renewable energy resources and their environmental impact.",
   learningOutcomes:["Name renewable and non-renewable resources","Compare advantages and disadvantages","Evaluate their environmental impact"],
   topics:["Renewable resources","Non-renewable resources","Environmental impact"], prerequisites:[]},
  {id:"s11i-10-2", name:"The National Grid & Efficiency", emoji:"⚡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-10", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe the National Grid and explain why high voltage reduces energy loss.",
   learningOutcomes:["Describe the National Grid","Explain step-up and step-down transformers","Explain why high voltage reduces energy loss"],
   topics:["National Grid","Transformers","Reducing losses"], prerequisites:["s11i-10-1"]}
);

// ── Exam skills islands ──────────────────────────────────────────────────────

// Topic 11: Biology Required Practicals
CURRICULUM.push(
  {id:"s11i-11-1", name:"Biology Practicals 1", emoji:"🔬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-11", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Review microscopy, food tests, enzyme and osmosis practicals.",
   learningOutcomes:["Describe the microscopy practical","Describe food test methods","Describe the osmosis and enzyme rate practicals"],
   topics:["Microscopy","Food tests","Osmosis & enzymes"], prerequisites:[]},
  {id:"s11i-11-2", name:"Biology Practicals 2", emoji:"🌿", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-11", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Review photosynthesis rate, field investigations and decay practicals.",
   learningOutcomes:["Describe the photosynthesis rate practical","Describe sampling using quadrats","Describe the decay practical"],
   topics:["Photosynthesis rate","Quadrat sampling","Decay"], prerequisites:["s11i-11-1"]}
);

// Topic 12: Chemistry Required Practicals
CURRICULUM.push(
  {id:"s11i-12-1", name:"Chemistry Practicals 1", emoji:"⚗️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-12", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Review making salts, electrolysis and temperature-change practicals.",
   learningOutcomes:["Describe making a pure, dry salt","Describe an electrolysis practical","Describe measuring temperature change"],
   topics:["Making salts","Electrolysis","Temperature change"], prerequisites:[]},
  {id:"s11i-12-2", name:"Chemistry Practicals 2", emoji:"🧪", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-12", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Review titration, rate of reaction and chromatography practicals.",
   learningOutcomes:["Describe a titration practical","Describe measuring rate of reaction","Describe paper chromatography"],
   topics:["Titration","Rate of reaction","Chromatography"], prerequisites:["s11i-12-1"]}
);

// Topic 13: Physics Required Practicals
CURRICULUM.push(
  {id:"s11i-13-1", name:"Physics Practicals 1", emoji:"📏", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-13", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Review specific heat capacity, resistance and I–V characteristics practicals.",
   learningOutcomes:["Describe the SHC practical","Describe measuring resistance","Describe drawing I–V characteristics"],
   topics:["SHC","Resistance","I–V graphs"], prerequisites:[]},
  {id:"s11i-13-2", name:"Physics Practicals 2", emoji:"🔬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-13", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Review density, force/extension and waves practicals.",
   learningOutcomes:["Describe measuring density of regular and irregular objects","Describe the force–extension practical","Describe measuring wave speed"],
   topics:["Density","Force–extension","Wave speed"], prerequisites:["s11i-13-1"]}
);

// Topic 14: Exam Technique & Maths in Science
CURRICULUM.push(
  {id:"s11i-14-1", name:"Command Words & 6-Mark Answers", emoji:"📝", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-14", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Understand exam command words and structure clear 6-mark extended responses.",
   learningOutcomes:["Interpret command words (describe, explain, evaluate, compare)","Structure a 6-mark answer with a clear line of reasoning","Use scientific vocabulary accurately"],
   topics:["Command words","6-mark structure","Scientific vocabulary"], prerequisites:[]},
  {id:"s11i-14-2", name:"Maths Skills in Science", emoji:"🔢", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-14", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Practise the key maths skills tested in GCSE Science: rearranging, graphs and significant figures.",
   learningOutcomes:["Rearrange formulas","Read and interpret graphs (gradients, areas)","Use standard form and significant figures"],
   topics:["Rearranging formulas","Graph skills","Standard form & sig figs"], prerequisites:["s11i-14-1"]},
  {id:"s11i-14-3", name:"Exam Practice & Revision Strategies", emoji:"🏆", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s11t-14", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Apply exam technique and revision strategies to maximise marks.",
   learningOutcomes:["Manage time across a paper","Use active recall and spaced repetition","Review mark schemes to understand what scores marks"],
   topics:["Time management","Revision strategies","Mark-scheme awareness"], prerequisites:["s11i-14-1"]}
);
