// data.js — Year 7 curriculum: Maths, English, Science, History, Geography

const CURRICULUM = [
  // ── MATHEMATICS ──────────────────────────────────────────────────────────
  {id:"island-1",subject:"Mathematics",subjectId:"math",name:"Number & Place Value",emoji:"🔢",difficulty:1,estimatedHours:5,color:"#3f6f00",
   description:"Understand place value, rounding, negative numbers and the order of operations (BODMAS).",
   learningOutcomes:["Round numbers to given place values","Order and compare positive and negative numbers","Apply BODMAS to calculations"],
   prerequisites:[],topics:["Place value","Rounding","Negative numbers","BODMAS","Number lines","Ordering integers"]},
  {id:"island-2",subject:"Mathematics",subjectId:"math",name:"Fractions, Decimals & Percentages",emoji:"½",difficulty:1,estimatedHours:6,color:"#3f6f00",
   description:"Convert between fractions, decimals and percentages and use them in calculations.",
   learningOutcomes:["Convert between fractions, decimals and percentages","Find percentages of amounts","Order FDP from smallest to largest"],
   prerequisites:["island-1"],topics:["Equivalent fractions","FDP conversions","Finding percentages","Comparing FDP","Fraction operations"]},
  {id:"island-24",subject:"Mathematics",subjectId:"math",name:"Ratio, Proportion & Rates",emoji:"⚖️",difficulty:2,estimatedHours:6,color:"#3f6f00",
   description:"Write and simplify ratios, divide quantities in a given ratio, use the unitary method and solve speed, distance, time problems.",
   learningOutcomes:["Write and simplify ratios","Divide a quantity in a given ratio","Use the unitary method to solve direct proportion problems","Apply the speed = distance ÷ time formula"],
   prerequisites:["island-2"],topics:["Writing and simplifying ratios","Dividing in a ratio","Unitary method","Direct proportion","Speed, distance and time","Scale drawings and maps"]},
  {id:"island-3",subject:"Mathematics",subjectId:"math",name:"Algebra Foundations",emoji:"📊",difficulty:2,estimatedHours:6,color:"#3f6f00",
   description:"Use letters to represent unknowns, form sequences and solve simple equations.",
   learningOutcomes:["Substitute values into expressions","Find the nth term of a linear sequence","Solve one-step and two-step equations"],
   prerequisites:["island-1"],topics:["Expressions and substitution","Sequences and nth term","Solving equations","Like terms","Function machines"]},
  {id:"island-4",subject:"Mathematics",subjectId:"math",name:"Geometry & Measures",emoji:"📐",difficulty:2,estimatedHours:6,color:"#3f6f00",
   description:"Explore properties of 2D shapes, angles, area, perimeter and coordinates.",
   learningOutcomes:["Classify triangles and quadrilaterals","Calculate area and perimeter","Use angle facts in triangles and quadrilaterals"],
   prerequisites:["island-1"],topics:["Properties of 2D shapes","Angles in triangles and quadrilaterals","Area and perimeter","Coordinates","Transformations"]},
  {id:"island-5",subject:"Mathematics",subjectId:"math",name:"Statistics & Data",emoji:"📈",difficulty:1,estimatedHours:5,color:"#3f6f00",
   description:"Collect, display and interpret data. Calculate mean, median, mode and range.",
   learningOutcomes:["Calculate mean, median, mode and range","Read and draw bar charts and pie charts","Compare data sets"],
   prerequisites:["island-1"],topics:["Mean, median, mode, range","Bar charts","Pie charts","Frequency tables","Interpreting graphs"]},

  // ── ENGLISH ───────────────────────────────────────────────────────────────
  {id:"island-6",subject:"English",subjectId:"english",name:"Reading & Comprehension",emoji:"📖",difficulty:1,estimatedHours:5,color:"#ba7517",
   description:"Read fiction and non-fiction texts, make inferences and identify fact from opinion.",
   learningOutcomes:["Make inferences using textual evidence","Distinguish fact from opinion","Summarise and annotate texts"],
   prerequisites:[],topics:["Inference and deduction","Fact vs opinion","Annotation","Text types","Summarising","Author's purpose"]},
  {id:"island-7",subject:"English",subjectId:"english",name:"Creative Writing",emoji:"✍️",difficulty:2,estimatedHours:5,color:"#ba7517",
   description:"Plan and write narratives and descriptive pieces using a range of techniques.",
   learningOutcomes:["Structure a story using the story mountain","Write powerful openings","Use 'show, don't tell' technique"],
   prerequisites:["island-6"],topics:["Story mountain structure","Openings and endings","Show don't tell","Descriptive writing","Narrative voice","Planning"]},
  {id:"island-8",subject:"English",subjectId:"english",name:"Grammar & Punctuation",emoji:"🔤",difficulty:1,estimatedHours:6,color:"#ba7517",
   description:"Master sentence structure, clauses, apostrophes, commas, colons and semicolons.",
   learningOutcomes:["Distinguish phrases from clauses","Use apostrophes correctly","Use colons and semicolons accurately"],
   prerequisites:["island-6"],topics:["Phrases and clauses","Apostrophes","Commas","Colons and semicolons","Sentence types","Subordinate clauses"]},
  {id:"island-9",subject:"English",subjectId:"english",name:"Poetry & Literary Devices",emoji:"🌟",difficulty:2,estimatedHours:5,color:"#ba7517",
   description:"Analyse poetry and identify and use literary devices including simile, metaphor and personification.",
   learningOutcomes:["Identify simile, metaphor, personification and alliteration","Analyse the effect of language choices","Write using literary devices"],
   prerequisites:["island-6"],topics:["Simile and metaphor","Personification","Alliteration","Onomatopoeia","Tone and mood","Poetry analysis"]},
  {id:"island-10",subject:"English",subjectId:"english",name:"Speaking & Listening",emoji:"🎤",difficulty:1,estimatedHours:4,color:"#ba7517",
   description:"Develop skills in active listening, debate, discussion and confident presentation.",
   learningOutcomes:["Use active listening skills","Structure a spoken argument using PEEL","Use formal and informal language appropriately"],
   prerequisites:[],topics:["Active listening","Debate and discussion","PEEL structure","Formal vs informal language","Presentations","Responding respectfully"]},

  // ── SCIENCE (COMBINED) ────────────────────────────────────────────────────
  {id:"island-11",subject:"Science",subjectId:"science",name:"Cells & Life Processes",emoji:"🔬",difficulty:2,estimatedHours:6,color:"#185fa5",
   description:"Explore cell structure, the seven life processes and how cells are organised into organs.",
   learningOutcomes:["Identify organelles in animal and plant cells","Recall the 7 life processes (MRS GREN)","Explain how cells organise into tissues, organs and systems"],
   prerequisites:[],topics:["Animal and plant cells","Organelles","MRS GREN","Cell organisation","Specialised cells","Microscopy"]},
  {id:"island-12",subject:"Science",subjectId:"science",name:"Ecosystems & Food Webs",emoji:"🌿",difficulty:1,estimatedHours:5,color:"#185fa5",
   description:"Understand food chains, food webs, producers and consumers, and how organisms adapt to their environments.",
   learningOutcomes:["Construct and interpret food chains and webs","Distinguish producers from consumers","Explain adaptations and how they aid survival"],
   prerequisites:["island-11"],topics:["Producers and consumers","Food chains and webs","Energy transfer","Adaptations","Habitats","Predator-prey relationships"]},
  {id:"island-13",subject:"Science",subjectId:"science",name:"Particles & States of Matter",emoji:"⚗️",difficulty:1,estimatedHours:5,color:"#185fa5",
   description:"Use the particle model to explain properties of solids, liquids and gases and changes of state.",
   learningOutcomes:["Describe particle arrangement in solids, liquids and gases","Explain changes of state using particle theory","Distinguish physical from chemical changes"],
   prerequisites:[],topics:["States of matter","Particle model","Changes of state","Melting and boiling points","Diffusion","Physical vs chemical change"]},
  {id:"island-14",subject:"Science",subjectId:"science",name:"Forces & Motion",emoji:"⚡",difficulty:2,estimatedHours:6,color:"#185fa5",
   description:"Investigate types of forces, balanced and unbalanced forces, gravity, friction and speed.",
   learningOutcomes:["Describe the effect of balanced and unbalanced forces","Distinguish mass from weight","Explain the role of friction in everyday situations"],
   prerequisites:["island-13"],topics:["Types of forces","Balanced and unbalanced forces","Mass and weight","Gravity","Friction","Speed calculations"]},
  {id:"island-15",subject:"Science",subjectId:"science",name:"Light & Sound",emoji:"💡",difficulty:2,estimatedHours:5,color:"#185fa5",
   description:"Investigate how light travels, reflection and how sound is produced and transmitted.",
   learningOutcomes:["Explain that light travels in straight lines","State the law of reflection","Explain why sound cannot travel through a vacuum"],
   prerequisites:[],topics:["Rectilinear propagation","Reflection and mirrors","Shadows","Sound waves","Vibration","Speed of light vs sound"]},

  // ── HISTORY ───────────────────────────────────────────────────────────────
  {id:"island-16",subject:"History",subjectId:"history",name:"The Norman Conquest",emoji:"⚔️",difficulty:1,estimatedHours:5,color:"#6d28d9",
   description:"Explore the causes and consequences of the Norman Conquest of 1066, including the Battle of Hastings.",
   learningOutcomes:["Identify the main claimants to the English throne in 1066","Describe the key events of the Battle of Hastings","Explain the significance of the Domesday Book"],
   prerequisites:[],topics:["Claimants to the throne","Battle of Hastings","William the Conqueror","Norman control of England","Domesday Book 1086","Impact on Anglo-Saxon life"]},
  {id:"island-17",subject:"History",subjectId:"history",name:"Medieval Society & Feudalism",emoji:"🏰",difficulty:1,estimatedHours:5,color:"#6d28d9",
   description:"Understand the feudal system, the power of the Church, castles and life in medieval England.",
   learningOutcomes:["Describe the structure of the feudal system","Explain the role of castles in Norman control","Analyse the influence of the Catholic Church"],
   prerequisites:["island-16"],topics:["Feudal pyramid","Motte-and-bailey castles","Role of the Church","Tithes","Knights and chivalry","Peasant life"]},
  {id:"island-18",subject:"History",subjectId:"history",name:"The Black Death",emoji:"🐀",difficulty:2,estimatedHours:5,color:"#6d28d9",
   description:"Investigate the causes, symptoms and long-term consequences of the Black Death in medieval England (1348).",
   learningOutcomes:["Explain how the Black Death spread to England","Describe medieval attempts to treat the plague","Analyse the long-term social impact of the Black Death"],
   prerequisites:["island-16"],topics:["Causes of the Black Death","Spread through Europe","Symptoms and treatment","Impact on feudal system","Peasants' Revolt connection","Demographic change"]},
  {id:"island-19",subject:"History",subjectId:"history",name:"Magna Carta & Parliament",emoji:"📜",difficulty:2,estimatedHours:5,color:"#6d28d9",
   description:"Explore why King John signed the Magna Carta in 1215 and how Parliament began to develop.",
   learningOutcomes:["Explain why barons rebelled against King John","Describe the key principles of the Magna Carta","Trace the early development of Parliament"],
   prerequisites:["island-17"],topics:["King John's failures","Barons' revolt","Magna Carta 1215","Habeas corpus","Simon de Montfort","Early Parliament"]},

  // ── GEOGRAPHY ─────────────────────────────────────────────────────────────
  {id:"island-20",subject:"Geography",subjectId:"geography",name:"Map Skills & Navigation",emoji:"🗺️",difficulty:1,estimatedHours:5,color:"#0891b2",
   description:"Read and interpret Ordnance Survey maps using grid references, contour lines and scale.",
   learningOutcomes:["Use 4- and 6-figure grid references","Interpret contour lines to identify relief","Use map scale to calculate real distances"],
   prerequisites:[],topics:["Grid references","Contour lines","Map scale","Compass directions","Symbols and keys","OS maps"]},
  {id:"island-21",subject:"Geography",subjectId:"geography",name:"Weather & Climate",emoji:"🌦️",difficulty:1,estimatedHours:5,color:"#0891b2",
   description:"Distinguish weather from climate, learn to measure weather and understand what shapes the UK's climate.",
   learningOutcomes:["Explain the difference between weather and climate","Name instruments used to measure weather","Explain the factors shaping the UK's temperate maritime climate"],
   prerequisites:["island-20"],topics:["Weather vs climate","Measuring weather","UK climate","Prevailing winds","North Atlantic Drift","Rainfall patterns"]},
  {id:"island-22",subject:"Geography",subjectId:"geography",name:"Rivers & Landscapes",emoji:"🏞️",difficulty:2,estimatedHours:6,color:"#0891b2",
   description:"Investigate river processes including erosion, transportation and deposition, and the landforms they create.",
   learningOutcomes:["Describe erosion, transportation and deposition","Explain how meanders and oxbow lakes form","Distinguish between upper and lower course features"],
   prerequisites:["island-20"],topics:["River erosion processes","Transportation and deposition","River courses","Meanders and oxbow lakes","Flooding","Flood management"]},
  {id:"island-23",subject:"Geography",subjectId:"geography",name:"Population & Settlement",emoji:"🏙️",difficulty:2,estimatedHours:5,color:"#0891b2",
   description:"Explore where and why people settle, population density and the difference between urban and rural areas.",
   learningOutcomes:["Calculate and compare population density","Explain physical and human factors affecting settlement","Distinguish urban from rural areas and describe urbanisation"],
   prerequisites:["island-20"],topics:["Population density","Factors affecting settlement","Urban and rural areas","Urbanisation","Push and pull factors","Settlement hierarchy"]},

  // ── ENGLISH (continued) ───────────────────────────────────────────────────
  {id:"island-25",subject:"English",subjectId:"english",name:"Shakespeare",emoji:"🎭",difficulty:2,estimatedHours:6,color:"#ba7517",
   description:"Explore Shakespeare's life, theatre and a play text, understanding plot, character, theme and how to write analytically using PEE.",
   learningOutcomes:["Describe the context of Shakespeare's theatre","Identify key themes in a Shakespeare play","Write an analytical paragraph using the PEE structure"],
   prerequisites:["island-6"],topics:["Shakespeare's life and times","The Globe Theatre","Plot and character","Key themes","Dramatic techniques and stagecraft","PEE analytical writing"]},
  {id:"island-26",subject:"English",subjectId:"english",name:"Non-Fiction Writing",emoji:"📰",difficulty:2,estimatedHours:5,color:"#ba7517",
   description:"Read and write non-fiction texts including news articles, speeches and letters, identifying purpose, audience, tone and persuasive techniques.",
   learningOutcomes:["Identify purpose, audience and tone in non-fiction texts","Recognise persuasive language features","Write to argue, persuade or advise with structure and evidence"],
   prerequisites:["island-6"],topics:["Text types: articles, speeches, letters","Purpose, audience and tone","Persuasive language features","Rhetoric and the rule of three","Fact vs opinion","Writing to argue and persuade"]},
  {id:"island-27",subject:"English",subjectId:"english",name:"Myths, Legends & Gothic Fiction",emoji:"🏚️",difficulty:2,estimatedHours:5,color:"#ba7517",
   description:"Explore Greek and Norse mythology, Gothic conventions and descriptive writing techniques to create atmosphere and suspense.",
   learningOutcomes:["Identify features of myth and legend","Describe the conventions of Gothic fiction","Write atmospheric descriptive prose using Gothic techniques"],
   prerequisites:["island-7"],topics:["Greek and Norse mythology","Gothic conventions","Atmosphere and suspense","Intertextuality and allusion","Descriptive writing techniques","Inference and deduction from unseen texts"]},

  // ── SCIENCE (continued) ───────────────────────────────────────────────────
  {id:"island-28",subject:"Science",subjectId:"science",name:"Reproduction & Life Cycles",emoji:"🌱",difficulty:2,estimatedHours:5,color:"#185fa5",
   description:"Compare sexual and asexual reproduction, explore pollination in plants and understand human puberty and the menstrual cycle.",
   learningOutcomes:["Compare sexual and asexual reproduction","Describe pollination and fertilisation in flowering plants","Explain the main changes during puberty"],
   prerequisites:["island-11"],topics:["Sexual vs asexual reproduction","Pollination and fertilisation","Seed dispersal","Puberty and hormones","The menstrual cycle","Advantages of each reproduction type"]},
  {id:"island-29",subject:"Science",subjectId:"science",name:"Elements, Compounds & Reactions",emoji:"🧪",difficulty:2,estimatedHours:6,color:"#185fa5",
   description:"Distinguish atoms, elements, compounds and mixtures, explore the Periodic Table and describe chemical reactions using word equations.",
   learningOutcomes:["Distinguish elements, compounds and mixtures","Locate groups and periods in the Periodic Table","Write word equations for common chemical reactions","Describe separation techniques"],
   prerequisites:["island-13"],topics:["Atoms, elements and compounds","The Periodic Table","Chemical vs physical changes","Word equations","Separation techniques","Mixtures and solutions"]},
  {id:"island-30",subject:"Science",subjectId:"science",name:"Energy Stores & Transfers",emoji:"🔋",difficulty:2,estimatedHours:5,color:"#185fa5",
   description:"Identify energy stores and explain how energy is transferred between them by heating, by forces and by electricity.",
   learningOutcomes:["Name at least six energy stores","Describe how energy is transferred between stores","Explain conduction, convection and radiation","Apply the principle of conservation of energy"],
   prerequisites:["island-14"],topics:["Energy stores","Energy transfers","Conduction, convection and radiation","Conservation of energy","Sankey diagrams","Efficiency"]},

  // ── HISTORY (continued) ───────────────────────────────────────────────────
  {id:"island-31",subject:"History",subjectId:"history",name:"The Crusades",emoji:"✝️",difficulty:2,estimatedHours:5,color:"#6d28d9",
   description:"Explore the motives, events and legacy of the First Crusade, the rivalry between Richard I and Saladin, and the long-term impact on trade and culture.",
   learningOutcomes:["Explain the religious and political motives for the Crusades","Describe key events of the First Crusade","Assess the long-term impact of the Crusades on European and Islamic civilisations"],
   prerequisites:["island-17"],topics:["Context: Islam and Christendom","Motives for the First Crusade","Key events and sieges","Saladin and Richard I","Impact on trade and ideas","Historical significance"]},
  {id:"island-32",subject:"History",subjectId:"history",name:"The Renaissance & Reformation",emoji:"🎨",difficulty:2,estimatedHours:5,color:"#6d28d9",
   description:"Explore the Renaissance's impact on art, science and humanism, and the religious upheaval caused by Martin Luther, Henry VIII and the English Reformation.",
   learningOutcomes:["Describe the key ideas of the Renaissance and humanism","Explain why Martin Luther challenged the Catholic Church","Describe the causes and consequences of the English Reformation"],
   prerequisites:["island-17"],topics:["Renaissance humanism and art","The Printing Press","Martin Luther and the 95 Theses","Henry VIII and the break with Rome","Dissolution of the Monasteries","Continuity and change in religion"]},
  {id:"island-33",subject:"History",subjectId:"history",name:"The Tudors & Elizabethan England",emoji:"👑",difficulty:2,estimatedHours:6,color:"#6d28d9",
   description:"Trace religious changes under Edward, Mary and Elizabeth I, the defeat of the Spanish Armada and life in Elizabethan England.",
   learningOutcomes:["Explain the religious changes under each Tudor monarch","Describe the causes and outcome of the Spanish Armada","Analyse the significance of Elizabeth I's reign"],
   prerequisites:["island-32"],topics:["Edward VI and Mary I","Elizabeth I's religious settlement","The Spanish Armada 1588","Elizabethan society: rich and poor","Exploration and empire","How significant was Elizabeth I?"]},
  {id:"island-34",subject:"History",subjectId:"history",name:"The Transatlantic Slave Trade",emoji:"⛓️",difficulty:2,estimatedHours:6,color:"#6d28d9",
   description:"Understand the origins and operation of the triangular trade, the experiences of enslaved people, Britain's role and the abolition movement.",
   learningOutcomes:["Describe the three stages of the triangular trade","Explain the lived experience of enslaved people","Analyse Britain's economic role and the campaign for abolition"],
   prerequisites:["island-33"],topics:["Origins and triangular trade","The Middle Passage","Lives of enslaved people","Britain's economic benefits","Resistance and abolition movement","Legacy and historical memory"]},

  // ── GEOGRAPHY (continued) ─────────────────────────────────────────────────
  {id:"island-35",subject:"Geography",subjectId:"geography",name:"Biomes & Climate Zones",emoji:"🌳",difficulty:2,estimatedHours:5,color:"#0891b2",
   description:"Identify global biomes and climate zones, explore the tropical rainforest and hot desert in detail, and understand the impact of human activity.",
   learningOutcomes:["Identify the major global biomes and where they are found","Describe the characteristics of the tropical rainforest and hot desert","Explain how plants and animals adapt to extreme biomes","Assess human impact and threats to biomes"],
   prerequisites:["island-20"],topics:["Global biomes and climate zones","Tropical rainforest: structure and biodiversity","Deforestation: causes and effects","Hot deserts: formation and climate","Plant and animal adaptations","Sustainability and conservation"]},
  {id:"island-36",subject:"Geography",subjectId:"geography",name:"Restless Earth & Tectonics",emoji:"🌋",difficulty:2,estimatedHours:6,color:"#0891b2",
   description:"Understand the structure of the Earth, tectonic plate movement, and how volcanoes and earthquakes form, using real-world case studies.",
   learningOutcomes:["Describe the internal structure of the Earth","Explain how tectonic plates move and why","Describe how volcanoes and earthquakes are formed","Evaluate the impacts of tectonic hazards using case studies"],
   prerequisites:["island-20"],topics:["Structure of the Earth","Tectonic plates and boundaries","Volcanoes: types and formation","Earthquakes: causes and measurement","Case studies: Japan, Iceland, Nepal","Managing tectonic hazards"]},
  {id:"island-37",subject:"Geography",subjectId:"geography",name:"Africa: Development & Diversity",emoji:"🌍",difficulty:2,estimatedHours:5,color:"#0891b2",
   description:"Explore Africa's diversity, development indicators such as HDI and GDP, population growth, urbanisation and the impact of tourism.",
   learningOutcomes:["Use development indicators to compare countries","Explain causes and effects of rapid population growth","Assess the impact of tourism on African economies and environments","Challenge common misconceptions about Africa"],
   prerequisites:["island-23"],topics:["Africa's diversity","Development indicators: HDI, GDP, literacy","Population growth and urbanisation","Tourism: benefits and costs","Challenging misconceptions","Sustainable development"]}
];

const FLASHCARDS = [
  // ── Maths ─────────────────────────────────────────────────────────────────
  {id:"card-1-1",islandId:"island-1",front:"What does BODMAS stand for, and in what order do you calculate?",
   back:"Brackets, Order (powers/roots), Division, Multiplication, Addition, Subtraction.\n\nAlways work through in this order. Example:\n3 + 4 × 2 = 3 + 8 = 11 (NOT 7 × 2 = 14 ❌)",difficulty:1,category:"definition"},
  {id:"card-1-2",islandId:"island-1",front:"Round 4,732 to the nearest hundred.",
   back:"4,700\n\nLook at the tens digit (3). Since 3 < 5, round DOWN — the hundreds digit stays as 7 and everything after becomes 0.\n\nRule: digit < 5 → round down. digit ≥ 5 → round up.",difficulty:1,category:"calculation"},
  {id:"card-1-3",islandId:"island-1",front:"Put in order from smallest to largest:\n−2, 5, −7, 0, 3",
   back:"−7, −2, 0, 3, 5\n\nOn a number line, numbers to the LEFT are smaller. The more negative a number, the smaller it is.\n\n−7 < −2 < 0 < 3 < 5",difficulty:1,category:"application"},

  {id:"card-2-1",islandId:"island-2",front:"How do you convert a fraction to a decimal?",
   back:"Divide the numerator by the denominator.\n\nExamples:\n• 3/4 = 3 ÷ 4 = 0.75\n• 1/5 = 1 ÷ 5 = 0.2\n• 7/10 = 0.7\n\nCommon ones to memorise: 1/2=0.5, 1/4=0.25, 1/8=0.125",difficulty:1,category:"definition"},
  {id:"card-2-2",islandId:"island-2",front:"What is 25% of 80?",
   back:"20\n\nMethod 1: 25% = ¼, so 80 ÷ 4 = 20\nMethod 2: 10% of 80 = 8, so 25% = 2½ × 8 = 20\nMethod 3: 80 × 0.25 = 20\n\nTop tip: 25% always means 'divide by 4'.",difficulty:1,category:"calculation"},
  {id:"card-2-3",islandId:"island-2",front:"Which is largest: 3/5, 0.65, 58%, 0.6?\nPut all four in order smallest → largest.",
   back:"58%, 0.6, 3/5, 0.65\n\nConvert all to decimals:\n• 3/5 = 0.60\n• 0.65 = 0.65\n• 58% = 0.58\n• 0.6 = 0.60\n\nOrder: 0.58 < 0.60 = 0.60 < 0.65\n\nNote: 3/5 and 0.6 are equal!",difficulty:2,category:"application"},

  {id:"card-3-1",islandId:"island-3",front:"What is the value of 3x + 5 when x = 4?",
   back:"17\n\nSubstitution: replace every x with 4.\n3(4) + 5 = 12 + 5 = 17\n\nTop tip: always put brackets around the substituted number to avoid mistakes.",difficulty:1,category:"calculation"},
  {id:"card-3-2",islandId:"island-3",front:"Find the nth term of the sequence:\n3, 5, 7, 9, 11 …",
   back:"nth term = 2n + 1\n\nThe sequence goes up by 2 each time → coefficient of n is 2.\nWhen n=1: 2(1)+1 = 3 ✓\nWhen n=3: 2(3)+1 = 7 ✓\n\nGeneral method: nth term = (common difference)n + (first term − common difference)",difficulty:2,category:"concept"},
  {id:"card-3-3",islandId:"island-3",front:"Solve: 4x − 3 = 13",
   back:"x = 4\n\nStep 1: Add 3 to both sides → 4x = 16\nStep 2: Divide both sides by 4 → x = 4\nCheck: 4(4) − 3 = 16 − 3 = 13 ✓\n\nAlways check your answer by substituting back in.",difficulty:2,category:"calculation"},

  {id:"card-4-1",islandId:"island-4",front:"What are the properties of a parallelogram?",
   back:"• 2 pairs of parallel sides\n• Opposite sides are equal in length\n• Opposite angles are equal\n• Diagonals bisect each other (but are NOT equal)\n\nNot the same as a rectangle — parallelograms do not have right angles (unless it is a rectangle!).",difficulty:2,category:"definition"},
  {id:"card-4-2",islandId:"island-4",front:"Calculate the area of a triangle:\nbase = 10 cm, height = 6 cm",
   back:"30 cm²\n\nArea of triangle = ½ × base × height\n= ½ × 10 × 6 = 30 cm²\n\n⚠️ Always use the PERPENDICULAR height (the vertical one), not the slant side.",difficulty:1,category:"calculation"},
  {id:"card-4-3",islandId:"island-4",front:"What do angles in a triangle add up to?\nWhat about angles in a quadrilateral?",
   back:"Triangle = 180°\nQuadrilateral = 360°\n\nWhy? Any quadrilateral can be split into 2 triangles:\n2 × 180° = 360°\n\nThis works for ALL triangles and ALL quadrilaterals, even irregular ones.",difficulty:1,category:"definition"},

  {id:"card-5-1",islandId:"island-5",front:"What is the difference between mean, median and mode?",
   back:"Mean = total sum ÷ number of values (the 'average')\nMedian = the MIDDLE value when ordered\nMode = the MOST FREQUENT value\nRange = highest − lowest (measures spread)\n\nMemory tip: Mode = Most common.",difficulty:1,category:"definition"},
  {id:"card-5-2",islandId:"island-5",front:"Find the median of:\n3, 8, 1, 5, 7, 2, 9",
   back:"Median = 5\n\nStep 1: Order the values: 1, 2, 3, 5, 7, 8, 9\nStep 2: Find the middle — there are 7 values, so the 4th is the median.\n\n1, 2, 3, [5], 7, 8, 9\n\nIf there's an even number of values, find the mean of the two middle numbers.",difficulty:2,category:"calculation"},
  {id:"card-5-3",islandId:"island-5",front:"Find the range of:\n12, 7, 3, 19, 5",
   back:"Range = 16\n\nRange = highest value − lowest value\n= 19 − 3 = 16\n\nThe range tells us how spread out the data is. A large range means the data is very spread out.",difficulty:1,category:"calculation"},

  // ── English ───────────────────────────────────────────────────────────────
  {id:"card-6-1",islandId:"island-6",front:"What is inference? Give an example.",
   back:"Inference = using clues in a text to work out something that isn't directly stated.\n\nExample: The text says 'She slammed the door.' We INFER she is angry — it doesn't say she is angry, but we can work it out from the clue.\n\nKey phrase: 'This suggests that…'",difficulty:1,category:"definition"},
  {id:"card-6-2",islandId:"island-6",front:"What is the difference between a fact and an opinion?",
   back:"Fact = can be proven true or false.\n'London is the capital of England.' ✓\n\nOpinion = a personal view or belief, not provable.\n'London is the best city.' — someone might disagree!\n\nLook for opinion words: I think, I believe, best, should, worst, in my view.",difficulty:1,category:"concept"},
  {id:"card-6-3",islandId:"island-6",front:"What does it mean to annotate a text, and why is it useful?",
   back:"Annotating = adding notes to a text as you read.\n\nHow to annotate:\n• Underline key words or phrases\n• Circle literary devices\n• Write short comments in the margin ('This shows…')\n\nWhy useful: helps you find evidence quickly and understand the text more deeply.",difficulty:1,category:"definition"},

  {id:"card-7-1",islandId:"island-7",front:"What is the 'story mountain' structure?",
   back:"A 5-stage story structure:\n1. Opening — introduce characters and setting\n2. Build-up — develop the story, create tension\n3. Climax — the main event or turning point (most exciting!)\n4. Resolution — the problem is solved\n5. Ending — show how things are different after\n\nThis gives your writing a clear, satisfying shape.",difficulty:1,category:"definition"},
  {id:"card-7-2",islandId:"island-7",front:"Name 3 techniques for a powerful story opening.",
   back:"1. In medias res (start in the action):\n   'The dragon roared as she tumbled from the cliff.'\n\n2. Atmospheric description:\n   'The fog hung low over the silent village.'\n\n3. Intriguing question:\n   'Have you ever been truly lost?'\n\n❌ Avoid: 'My name is…' or 'Once upon a time…'",difficulty:2,category:"application"},
  {id:"card-7-3",islandId:"island-7",front:"What is 'show, don't tell'? Give an example.",
   back:"Instead of TELLING the reader how a character feels, SHOW it through actions, dialogue, and detail.\n\n❌ TELL: 'He was scared.'\n✅ SHOW: 'His hands trembled. He pressed himself against the wall, breath coming in short gasps.'\n\nThe reader works out the emotion — it's more powerful and engaging.",difficulty:2,category:"concept"},

  {id:"card-8-1",islandId:"island-8",front:"What is the difference between a phrase and a clause?",
   back:"Clause = a group of words with a verb; it can stand as a sentence.\n'She ran quickly.' ← main clause\n\nPhrase = a group of words WITHOUT a complete verb; cannot stand alone.\n'Through the dark forest' ← phrase (no verb)\n\nA sentence must contain at least one main clause.",difficulty:2,category:"definition"},
  {id:"card-8-2",islandId:"island-8",front:"When do you use a colon? When do you use a semicolon?",
   back:"Colon (:) — introduces a list or an explanation:\n'She needed three things: courage, a map, and time.'\n\nSemicolon (;) — joins two related main clauses (both must be complete sentences):\n'It was late; she needed to sleep.'\n\nThink: colon = 'namely…', semicolon = 'and furthermore…'",difficulty:2,category:"definition"},
  {id:"card-8-3",islandId:"island-8",front:"Give 3 uses of the apostrophe with examples.",
   back:"1. Contraction (missing letters):\n   don't = do not | it's = it is\n\n2. Singular possession:\n   the dog's lead (one dog)\n\n3. Plural possession (plural ends in s):\n   the dogs' leads (more than one dog)\n\n⚠️ NEVER use an apostrophe for a simple plural: dogs NOT dog's",difficulty:1,category:"definition"},

  {id:"card-9-1",islandId:"island-9",front:"What is the difference between a simile and a metaphor?",
   back:"Simile: compares using 'like' or 'as'\n'The moon was LIKE a silver coin.'\n\nMetaphor: directly says one thing IS another\n'The moon WAS a silver coin.'\n\nMetaphors are more powerful — the comparison is immediate and direct, with no softening 'like'.",difficulty:1,category:"definition"},
  {id:"card-9-2",islandId:"island-9",front:"What is alliteration and why do writers use it?",
   back:"Alliteration = the repetition of the same consonant sound at the start of nearby words.\n\n'Peter Piper picked a peck of pickled peppers.'\n'The cold, cruel cliffs crashed into the sea.'\n\nEffects:\n• Creates rhythm and musicality\n• Makes phrases memorable\n• Can create mood (hard sounds = danger; soft sounds = calm)",difficulty:1,category:"definition"},
  {id:"card-9-3",islandId:"island-9",front:"What is personification? Give two examples.",
   back:"Personification = giving human qualities, feelings or actions to a non-human thing.\n\n'The wind WHISPERED through the trees.' (wind can't whisper)\n'The sun SMILED down on us.' (sun can't smile)\n\nEffect: creates vivid imagery, makes descriptions more emotional and atmospheric.",difficulty:1,category:"definition"},

  {id:"card-10-1",islandId:"island-10",front:"Name 4 techniques for confident public speaking.",
   back:"1. Make eye contact with your audience (not just your notes)\n2. Speak clearly and not too fast — use pauses for effect\n3. Project your voice so everyone can hear\n4. Vary your tone to keep the audience engaged\n\nAlso: know your material, use natural gestures, stand tall.",difficulty:1,category:"definition"},
  {id:"card-10-2",islandId:"island-10",front:"What is the difference between formal and informal language?",
   back:"Formal: used in speeches, essays, presentations.\n• No slang or contractions\n• Full, complete sentences\n• Standard grammar\nExample: 'Good afternoon. I would like to discuss…'\n\nInformal: used with friends, casual writing.\n• Contractions, slang ok\nExample: 'Hey! So basically…'\n\nAlways match your language to your AUDIENCE and PURPOSE.",difficulty:1,category:"concept"},
  {id:"card-10-3",islandId:"island-10",front:"What does PEEL stand for and how do you use it?",
   back:"P — Point: Make your main argument clearly.\nE — Evidence: Provide a quote or example.\nE — Explanation: Explain how the evidence supports your point.\nL — Link: Connect back to the question or your overall argument.\n\nUse PEEL in essays AND in spoken debate to structure your ideas clearly.",difficulty:2,category:"definition"},

  // ── Science ───────────────────────────────────────────────────────────────
  {id:"card-11-1",islandId:"island-11",front:"What does MRS GREN stand for?",
   back:"The 7 life processes that ALL living things must carry out:\n\nM — Movement\nR — Respiration\nS — Sensitivity\nG — Growth\nR — Reproduction\nE — Excretion\nN — Nutrition\n\nIf something doesn't do ALL 7, it is NOT alive.",difficulty:1,category:"definition"},
  {id:"card-11-2",islandId:"island-11",front:"Name 3 things plant cells have that animal cells don't.",
   back:"1. Cell wall — made of cellulose; gives rigid support\n2. Chloroplasts — contain chlorophyll; carry out photosynthesis\n3. Large permanent vacuole — stores water and maintains cell pressure\n\nBoth plant AND animal cells have:\nnucleus, cell membrane, cytoplasm, mitochondria",difficulty:1,category:"concept"},
  {id:"card-11-3",islandId:"island-11",front:"What is the order of organisation from cell to organism?",
   back:"Cell → Tissue → Organ → Organ System → Organism\n\nExample:\nHeart muscle cell → Muscle tissue → Heart → Circulatory system → Human being\n\nEach level is more complex than the last. Cells are the basic building blocks of all living things.",difficulty:1,category:"definition"},

  {id:"card-12-1",islandId:"island-12",front:"What is the difference between a producer and a consumer?",
   back:"Producer = makes its own food through photosynthesis (plants, algae)\n→ Always at the START of a food chain\n\nPrimary consumer = eats producers (herbivores)\nSecondary consumer = eats primary consumers\nTertiary consumer = eats secondary consumers\n\nEnergy flows from producers upwards through the chain.",difficulty:1,category:"definition"},
  {id:"card-12-2",islandId:"island-12",front:"What does an arrow in a food chain represent?\nWhy do students often get this wrong?",
   back:"The arrow shows the direction of ENERGY TRANSFER.\n\n'Grass → Rabbit → Fox'\nmeans: energy passes FROM grass TO rabbit TO fox.\n\n❌ Common mistake: students draw the arrow to point at what something eats (as if meaning 'eats'). \n\nRemember: the arrow points FROM what is eaten TO what eats it.",difficulty:2,category:"concept"},
  {id:"card-12-3",islandId:"island-12",front:"What is an adaptation? Give 2 examples.",
   back:"An adaptation is an inherited feature that helps an organism survive in its environment.\n\nExamples:\n1. Polar bear's thick white fur → insulation from cold + camouflage in snow\n2. Cactus's waxy skin and spines → reduces water loss + protection from animals\n\nAdaptations are passed from parents to offspring through genes.",difficulty:1,category:"definition"},

  {id:"card-13-1",islandId:"island-13",front:"Describe the arrangement and movement of particles in a solid, liquid and gas.",
   back:"Solid: close together in a fixed, regular pattern — vibrate in place only\nLiquid: close together but can slide past each other — random arrangement\nGas: far apart, move quickly and randomly in all directions\n\nHeating gives particles more energy → they move more → substance can change state.",difficulty:1,category:"definition"},
  {id:"card-13-2",islandId:"island-13",front:"What is the difference between melting and dissolving?",
   back:"Melting = solid changes to liquid due to heat.\n• Example: ice → water\n• Physical change — no new substance is made\n• Reversible: cool it down and it freezes again\n\nDissolving = solid mixes into liquid to form a solution.\n• Example: salt + water → salt water\n• The salt hasn't disappeared — it's just spread out (still there!)\n• Reversible: evaporate the water to get the salt back",difficulty:2,category:"concept"},
  {id:"card-13-3",islandId:"island-13",front:"What is the particle model and what does it explain?",
   back:"The particle model: all matter is made of tiny particles in constant motion.\n\nIt explains:\n• Why solids keep their shape (fixed particle positions)\n• Why gases fill any container (particles move freely)\n• Why substances expand when heated (particles move faster, spread out)\n• Diffusion (particles spread from high to low concentration)\n\nIt's a model — a simplified idea to help explain real-world observations.",difficulty:2,category:"concept"},

  {id:"card-14-1",islandId:"island-14",front:"What is the difference between mass and weight?",
   back:"Mass = amount of matter in an object. Measured in kg. NEVER changes, wherever you are.\n\nWeight = the force of gravity pulling on an object. Measured in Newtons (N).\nW = m × g (g = 10 N/kg on Earth; g = 1.6 N/kg on the Moon)\n\nYou would weigh less on the Moon but your mass stays the same!",difficulty:2,category:"concept"},
  {id:"card-14-2",islandId:"island-14",front:"What happens when forces are balanced vs unbalanced?",
   back:"Balanced forces (net force = 0):\n→ Object stays STILL, or moves at CONSTANT SPEED\nExample: book on a table (weight down = reaction force up)\n\nUnbalanced forces (net force ≠ 0):\n→ Object SPEEDS UP, SLOWS DOWN, or CHANGES DIRECTION\nExample: a kicked football (unbalanced → accelerates)\n\nNewton's First Law: an object keeps doing what it's doing unless acted on by an unbalanced force.",difficulty:2,category:"concept"},
  {id:"card-14-3",islandId:"island-14",front:"What is friction? Is it always a bad thing?",
   back:"Friction is a force that opposes motion between two surfaces in contact.\n\nUseful friction:\n• Grip on your shoes lets you walk\n• Car brakes slow you down safely\n• Rubbing hands together makes heat\n\nUnhelpful friction:\n• Slows down machines (wastes energy)\n• Wears down tyres and brake pads\n\nReduced by: smooth surfaces, lubrication (oil, grease), ball bearings.",difficulty:1,category:"concept"},

  {id:"card-15-1",islandId:"island-15",front:"How does light travel, and what does this explain?",
   back:"Light travels in STRAIGHT LINES (rectilinear propagation) at 300,000 km/s.\n\nThis explains:\n1. Shadows — objects block straight-line light\n2. Why you can't see around corners\n3. How periscopes work (mirrors redirect the straight line)\n\nLight is the fastest thing in the universe.",difficulty:1,category:"definition"},
  {id:"card-15-2",islandId:"island-15",front:"State the law of reflection.",
   back:"Angle of incidence = Angle of reflection\n\nBoth angles are measured from the NORMAL — an imaginary line at 90° to the mirror surface.\n\nApplications:\n• Plane mirrors\n• Periscopes\n• Cat's eyes on roads\n• CCTV mirrors in shops\n\nThe image in a flat mirror is the same size, virtual, and laterally inverted (flipped).",difficulty:2,category:"definition"},
  {id:"card-15-3",islandId:"island-15",front:"How is sound different from light?",
   back:"Sound:\n• Needs a medium (particles to vibrate through)\n• Travels through solids, liquids, gases — NOT through space\n• Speed: ~340 m/s in air\n\nLight:\n• Does NOT need a medium — travels through a vacuum (space)\n• Speed: 300,000 km/s (almost 1 million times faster than sound!)\n\nThis is why you see lightning BEFORE you hear thunder.",difficulty:2,category:"concept"},

  // ── History ───────────────────────────────────────────────────────────────
  {id:"card-16-1",islandId:"island-16",front:"Who were the main claimants to the English throne in 1066?",
   back:"1. Harold Godwinson (Earl of Wessex) — crowned king Jan 1066; most powerful English noble\n2. William, Duke of Normandy — claimed Edward the Confessor had promised him the crown\n3. Harald Hardrada (Norway) — claimed through Scandinavian links\n4. Edgar Atheling — last Anglo-Saxon royal heir; too young and lacked support\n\nHarold Godwinson was crowned first but faced two invasions in 1066.",difficulty:1,category:"definition"},
  {id:"card-16-2",islandId:"island-16",front:"What happened at the Battle of Hastings, 14 October 1066?",
   back:"Harold's exhausted army took position on Senlac Hill.\nThe Normans attacked uphill — Harold's shield wall held at first.\n\nTurning point: Normans faked a retreat — English broke formation to chase them → shield wall broken.\nHarold was killed (possibly by an arrow to the eye).\nWilliam was crowned King of England on Christmas Day 1066.\n\nThe Norman Conquest transformed England's language, culture, and ruling class.",difficulty:1,category:"application"},
  {id:"card-16-3",islandId:"island-16",front:"What was the Domesday Book and why did William order it?",
   back:"Completed 1086 — a detailed survey of all land and property in England.\n\nWilliam ordered it to:\n1. Find out exactly who owned what land\n2. Calculate how much tax could be collected\n3. Demonstrate that he was the rightful ruler of everything in England\n\nEach county listed: who owned the land, its value, how many people, animals and resources.\nIt is one of the most important documents in English history.",difficulty:2,category:"definition"},

  {id:"card-17-1",islandId:"island-17",front:"Explain the feudal system — who was at each level?",
   back:"A pyramid of power (top → bottom):\n\n👑 King — owned ALL land; gave it to lords for loyalty and military service\n🏰 Lords/Barons/Church — managed large estates; gave land to knights\n⚔️ Knights — provided military service; protected the manor\n👨‍🌾 Peasants/Serfs — worked the land in exchange for protection and a small plot\n\nEveryone owed a duty to those above them. No one owned land freely — it was always held 'from' someone.",difficulty:1,category:"definition"},
  {id:"card-17-2",islandId:"island-17",front:"Why were castles important in Norman England?",
   back:"Castles served as centres of military and political power.\n\nPurposes:\n1. Defence — protect Norman rulers from Anglo-Saxon rebellions\n2. Control — intimidate and control the local population\n3. Administration — lords ran their estates from here\n4. Symbol of power — showed who was in charge\n\nEarly castles: motte-and-bailey (wood, quick to build). Later: stone keeps (stronger, permanent).",difficulty:1,category:"concept"},
  {id:"card-17-3",islandId:"island-17",front:"What role did the Catholic Church play in medieval life?",
   back:"The Church was the most powerful institution in medieval Europe.\n\nIt:\n• Ran education (monasteries ran the only schools)\n• Collected tithes (10% of everyone's income — compulsory)\n• Ran hospitals and cared for the poor\n• Controlled marriage, funerals, moral life\n• Could excommunicate kings (cut them off from God)\n\nMost people believed completely in heaven and hell — the Church controlled access to both.",difficulty:2,category:"concept"},

  {id:"card-18-1",islandId:"island-18",front:"What was the Black Death and how did it reach England?",
   back:"The Black Death was a devastating plague that killed ~1/3 of Europe's population (1347–1351).\n\nCause: bacterium Yersinia pestis (not known at the time)\nSpread by: fleas on black rats → bit humans → bubonic plague. Also spread through the air (pneumonic plague).\n\nRoute: Central Asia → trade ships to Sicily (1347) → swept across Europe → reached England via trade ships in 1348, landing in Dorset.",difficulty:1,category:"definition"},
  {id:"card-18-2",islandId:"island-18",front:"What were the symptoms of the Black Death? What did medieval people think caused it?",
   back:"Symptoms:\n• Buboes — large, painful swellings in armpit, groin, neck\n• Black skin patches (internal bleeding → 'Black Death')\n• Fever, vomiting blood\n• Most died within 1–5 days\n\nMedieval explanations:\n• Punishment from God (sin)\n• 'Bad air' (miasma theory)\n• Planets aligned wrongly\n• Wrongly blamed Jewish communities\n\nNobody knew it was caused by bacteria — germ theory wasn't developed until the 19th century.",difficulty:2,category:"application"},
  {id:"card-18-3",islandId:"island-18",front:"What were the long-term effects of the Black Death on medieval society?",
   back:"1. Labour shortage → surviving peasants could DEMAND higher wages and better conditions\n2. Weakened the feudal system — peasants had more bargaining power\n3. Led to the Peasants' Revolt (1381) — uprising against continued serfdom\n4. Loss of faith in the Church (prayers hadn't stopped the plague)\n5. Advances in medicine — people tried harder to understand disease\n\nThe Black Death helped bring the medieval feudal system to an end.",difficulty:2,category:"concept"},

  {id:"card-19-1",islandId:"island-19",front:"Why did the barons rebel against King John in 1215?",
   back:"King John was deeply unpopular because he:\n1. Lost English lands in France (Normandy lost, 1204)\n2. Taxed barons very heavily to pay for failed wars\n3. Ignored traditional rights — acted as if above the law\n4. Quarrelled with Pope Innocent III (England placed under interdict — no church services)\n\nIn 1215, angry barons marched on London. John had to negotiate — he signed the Magna Carta at Runnymede.",difficulty:1,category:"application"},
  {id:"card-19-2",islandId:"island-19",front:"What was the Magna Carta (1215) and why is it historically significant?",
   back:"Magna Carta = 'Great Charter' — signed by King John under pressure from barons.\n\nKey principles:\n• No one (including the king) is above the law\n• No imprisonment without fair trial (habeas corpus)\n• Taxes require agreement of the barons\n\nSignificance:\nFirst time a king was made subject to the rule of law. Foundation of modern constitutional government and democracy. Influenced the US Constitution and human rights law worldwide.",difficulty:2,category:"definition"},
  {id:"card-19-3",islandId:"island-19",front:"How did Parliament begin to develop in medieval England?",
   back:"1215 — Magna Carta: barons gain rights; king must consult them\n1265 — Simon de Montfort calls Parliament: includes knights AND town representatives (not just barons) for the first time\n1295 — Edward I's 'Model Parliament': wider representation becomes established\n\nGradually, Parliament gained the power to approve taxes and have a say in governing.\nThis is the beginning of representative democracy in England.",difficulty:2,category:"definition"},

  // ── Geography ─────────────────────────────────────────────────────────────
  {id:"card-20-1",islandId:"island-20",front:"How do you read a 4-figure grid reference?",
   back:"Go along the corridor (eastings) FIRST, then up the stairs (northings).\n\nMemory aid: 'Along the corridor and up the stairs.'\n\nExample: Grid reference 2534\n→ Easting: 25 (go right to line 25)\n→ Northing: 34 (go up to line 34)\nThe grid reference describes the SQUARE to the top-right of where the lines meet.",difficulty:1,category:"definition"},
  {id:"card-20-2",islandId:"island-20",front:"What do contour lines show on a map?",
   back:"Contour lines join points of EQUAL HEIGHT above sea level.\n\nClose together = steep slope\nFar apart = gentle slope\nCircle of contours = hill or summit\nContours never cross each other\n\nThe number on each line shows height in metres.\n\nUse them to identify: valleys, ridges, cliff faces, gentle plains.",difficulty:1,category:"definition"},
  {id:"card-20-3",islandId:"island-20",front:"What is the difference between a large scale and small scale map?",
   back:"Large scale (e.g. 1:25,000):\n• Shows a SMALL area in LOTS of detail\n• Used for: walking maps, town plans, OS Explorer\n• 1 cm = 250 m\n\nSmall scale (e.g. 1:1,000,000):\n• Shows a LARGE area with LITTLE detail\n• Used for: atlas maps, road maps of whole countries\n• 1 cm = 10 km\n\nThink: large scale = zoom in = more detail.",difficulty:2,category:"concept"},

  {id:"card-21-1",islandId:"island-21",front:"What is the difference between weather and climate?",
   back:"Weather = the short-term, day-to-day conditions of the atmosphere.\n(temperature, rain, wind, sunshine today or this week)\n\nClimate = the AVERAGE weather conditions over a LONG period (30+ years) for a particular place.\n\n'Climate is what you expect; weather is what you get.'\n\nThe UK has a temperate maritime climate — mild and wet all year.",difficulty:1,category:"definition"},
  {id:"card-21-2",islandId:"island-21",front:"Name 4 instruments used to measure weather and what each one measures.",
   back:"1. Thermometer — temperature (°C)\n2. Rain gauge — precipitation (mm)\n3. Anemometer — wind speed (km/h)\n4. Barometer — air pressure (millibars)\n\nAlso:\n• Wind vane — wind direction\n• Hygrometer — humidity (moisture in the air)\n• Sunshine recorder — hours of sunshine\n\nWeather stations combine all these to produce accurate forecasts.",difficulty:1,category:"definition"},
  {id:"card-21-3",islandId:"island-21",front:"Why does the UK have a mild, wet climate?",
   back:"Four main reasons:\n\n1. Prevailing south-westerly winds bring warm, moist air from the Atlantic Ocean\n2. North Atlantic Drift (warm ocean current) keeps UK winters milder than expected for our latitude\n3. Island location — the surrounding sea moderates temperatures (cool summers, mild winters)\n4. Relief rainfall — moist air rises over hills, cools, and falls as rain → western UK is wetter\n\nResult: the UK is rarely extremely hot or cold, and receives rain throughout the year.",difficulty:2,category:"concept"},

  {id:"card-22-1",islandId:"island-22",front:"Name 3 processes of river erosion and explain each.",
   back:"1. Hydraulic action — the sheer force of moving water breaks away rock from banks and bed\n2. Abrasion — sediment (stones) carried by the river scrapes and wears away the channel (like sandpaper)\n3. Solution — slightly acidic water dissolves soluble rocks like limestone\n\nErosion is GREATEST in the upper course (fast flow, lots of energy, steep gradient).",difficulty:2,category:"definition"},
  {id:"card-22-2",islandId:"island-22",front:"How does a meander form?",
   back:"A meander is a bend in a river.\n\nHow it forms:\n1. Water flows FASTER on the OUTSIDE of a bend → more erosion → river cliff forms\n2. Water flows SLOWER on the INSIDE → deposition → slip-off slope builds up\n3. The bend gradually becomes more exaggerated\n4. Eventually the loop is cut off → OXBOW LAKE forms\n\nMeanders are typical of the MIDDLE and LOWER course of a river.",difficulty:2,category:"concept"},
  {id:"card-22-3",islandId:"island-22",front:"What is the difference between erosion and deposition?",
   back:"Erosion = the wearing away and removal of material (rock, soil, sediment) by the river.\n→ Happens when the river has HIGH ENERGY (fast flow, steep gradient)\n→ Most in the upper course\n\nDeposition = when the river drops/deposits the material it's carrying.\n→ Happens when the river SLOWS DOWN and loses energy\n→ Most in the lower course (flat land, wide channel)\n\nDeposition builds floodplains, deltas and beaches.",difficulty:1,category:"concept"},

  {id:"card-23-1",islandId:"island-23",front:"What is population density and how is it calculated?",
   back:"Population density = the number of people per square kilometre (km²).\n\nFormula:\nPopulation density = Total population ÷ Area (km²)\n\nExample: 500,000 people in 100 km² = 5,000 people/km² (high density!)\n\nHigh density: cities, fertile plains, mild climates\nLow density: deserts, mountains, arctic regions",difficulty:1,category:"definition"},
  {id:"card-23-2",islandId:"island-23",front:"Name 3 physical and 3 human factors that influence where people settle.",
   back:"Physical factors (natural):\n1. Flat land — easy to build on\n2. Near a river — fresh water for drinking and farming\n3. Sheltered from harsh weather\n\nHuman factors (man-made):\n4. Near trade routes or roads — easy to transport goods\n5. Employment opportunities nearby\n6. Existing community/services — schools, shops\n\nHistorically: rivers most important. Today: transport links and jobs dominate.",difficulty:2,category:"application"},
  {id:"card-23-3",islandId:"island-23",front:"What is urbanisation and what causes it?",
   back:"Urbanisation = the process of more people moving to live in urban areas (towns and cities).\n\nCauses:\nPull factors (into cities):\n• More jobs and higher wages\n• Better services (hospitals, schools)\n• Improved transport links\n\nPush factors (out of rural areas):\n• Fewer jobs (mechanisation of farming)\n• Limited services in countryside\n• Lower wages\n\nOver 55% of the world's population now lives in urban areas.",difficulty:2,category:"concept"},

  // ── Maths: Ratio, Proportion & Rates ─────────────────────────────────────
  {id:"card-24-1",islandId:"island-24",front:"Simplify the ratio 24 : 36.",
   back:"2 : 3\n\nFind the HCF of 24 and 36 = 12.\nDivide both parts by 12: 24÷12 = 2, 36÷12 = 3.\n\nAlways simplify ratios until no common factor remains.\nCheck: 2 and 3 share no common factor ✓",difficulty:1,category:"calculation"},
  {id:"card-24-2",islandId:"island-24",front:"Share £40 in the ratio 3 : 5.",
   back:"£15 and £25\n\nStep 1: Total parts = 3 + 5 = 8\nStep 2: Value of 1 part = £40 ÷ 8 = £5\nStep 3: First share = 3 × £5 = £15\n         Second share = 5 × £5 = £25\n\nCheck: £15 + £25 = £40 ✓",difficulty:2,category:"calculation"},
  {id:"card-24-3",islandId:"island-24",front:"A car travels 120 km in 2 hours. What is its speed?\nWhat is the formula triangle for speed?",
   back:"Speed = 60 km/h\n\nFormula: Speed = Distance ÷ Time\n           Distance = Speed × Time\n           Time = Distance ÷ Speed\n\nMemory aid: the SDT triangle — cover the one you want.\n\n120 ÷ 2 = 60 km/h\n\n⚠️ Always check units match (km and hours, or metres and seconds).",difficulty:2,category:"calculation"},

  // ── English: Shakespeare ──────────────────────────────────────────────────
  {id:"card-25-1",islandId:"island-25",front:"Describe the Globe Theatre. How was it different from modern theatres?",
   back:"The Globe (built 1599, London):\n• Open-air, circular wooden theatre\n• 'Groundlings' stood in the yard for 1 penny — no seats, no roof\n• Wealthy audience sat in covered galleries\n• No artificial lighting — plays performed in daylight\n• No female actors — women's roles played by boys\n• Simple staging; audience used imagination\n\nVery different from modern theatres — no scenery, no dimming lights, audience interacted with performers.",difficulty:1,category:"definition"},
  {id:"card-25-2",islandId:"island-25",front:"What is a PEE paragraph and how do you write one?",
   back:"PEE = Point, Evidence, Explanation\n\nP — Make your point: 'Shakespeare presents Puck as mischievous…'\nE — Provide a quote: '…when he says \"Lord, what fools these mortals be!\"'\nE — Explain the effect: 'This suggests Puck views humans with amused contempt, showing his superiority over the mortal characters.'\n\nTip: your Explanation should use language like 'This suggests…', 'This shows…', 'This implies…'",difficulty:2,category:"definition"},
  {id:"card-25-3",islandId:"island-25",front:"Name two key themes in A Midsummer Night's Dream (or The Tempest) and give one example of each.",
   back:"A Midsummer Night's Dream:\n• Love and confusion — the lovers' relationships are manipulated by the fairies, showing love is irrational\n• Order vs chaos — the fairy world disrupts the human world\n\nThe Tempest:\n• Power and control — Prospero controls the island and its inhabitants\n• Revenge vs forgiveness — Prospero chooses forgiveness over revenge at the end\n\nThemes are the BIG IDEAS the playwright explores through characters and events.",difficulty:2,category:"concept"},

  // ── English: Non-Fiction Writing ──────────────────────────────────────────
  {id:"card-26-1",islandId:"island-26",front:"What are the main non-fiction text types and their purposes?",
   back:"• News article — to inform; 5 Ws (who, what, where, when, why) in first paragraph\n• Speech — to persuade or inspire; uses rhetoric, direct address, rule of three\n• Formal letter — to argue, complain, request; clear structure, formal register\n• Blog — to inform/entertain; personal voice, informal tone\n• Travel writing — to describe and inform; vivid language\n\nAlways identify: PURPOSE (why?) + AUDIENCE (who?) + TONE (how?)",difficulty:1,category:"definition"},
  {id:"card-26-2",islandId:"island-26",front:"What is the 'rule of three' and why do writers use it?",
   back:"The rule of three = using three connected words, phrases or ideas together.\n\nExamples:\n'Government of the people, BY the people, FOR the people.' (Lincoln)\n'Our school is safe, supportive and successful.'\n\nWhy it works:\n• Three items feel complete and satisfying to the ear\n• Creates rhythm and makes ideas memorable\n• Adds rhetorical power to persuasive writing\n\nAlso called a 'tricolon' in rhetoric.",difficulty:1,category:"concept"},
  {id:"card-26-3",islandId:"island-26",front:"What techniques make persuasive writing effective? Name at least 5.",
   back:"1. Rule of three — 'fast, reliable and affordable'\n2. Rhetorical questions — 'Surely we can do better?'\n3. Direct address — 'You can make a difference.'\n4. Statistics and facts — add credibility\n5. Anecdote — a personal story to make it relatable\n6. Emotive language — words that trigger strong feelings\n7. Counter-argument then rebuttal — shows you've considered the other side\n\nRemember AFOREST: Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplet.",difficulty:2,category:"application"},

  // ── English: Myths, Legends & Gothic Fiction ──────────────────────────────
  {id:"card-27-1",islandId:"island-27",front:"What are the key conventions of Gothic fiction?",
   back:"Gothic fiction creates fear, mystery and atmosphere through:\n\n• Setting: crumbling castles, dark mansions, moors, graveyards\n• Weather: storms, mist, darkness — pathetic fallacy\n• Characters: villains, monsters, damsels in distress, mysterious strangers\n• Themes: death, madness, the supernatural, forbidden knowledge\n• Language: dark, dramatic adjectives; long, winding sentences\n\nExamples: Frankenstein, Dracula, The Tell-Tale Heart\n\nGothic atmosphere relies on slow build-up, not jump-scares.",difficulty:1,category:"definition"},
  {id:"card-27-2",islandId:"island-27",front:"What is pathetic fallacy? Give two examples.",
   back:"Pathetic fallacy = using weather or the natural environment to reflect a character's mood or the atmosphere of a scene.\n\nExamples:\n1. 'Thunder roared as she opened the letter' — storm mirrors her shock/dread\n2. 'The sun shone brightly on their wedding day' — sunshine mirrors happiness\n\nThe term was coined by critic John Ruskin.\n\nEffect: creates atmosphere, mirrors emotion without stating it directly — a form of 'show, don't tell'.",difficulty:2,category:"definition"},
  {id:"card-27-3",islandId:"island-27",front:"What is the difference between a myth and a legend?",
   back:"Myth:\n• Explains natural phenomena or the origins of the world\n• Features gods and supernatural beings\n• Set in a sacred or timeless past\nExample: Persephone explains the seasons; Prometheus explains fire\n\nLegend:\n• Based (loosely) on historical figures or events\n• Features human heroes, often with supernatural elements\n• Celebrates courage, loyalty or moral values\nExample: King Arthur, Robin Hood, Beowulf\n\nBoth are part of oral tradition — passed down through storytelling before being written down.",difficulty:1,category:"concept"},

  // ── Science: Reproduction & Life Cycles ──────────────────────────────────
  {id:"card-28-1",islandId:"island-28",front:"What is the difference between sexual and asexual reproduction?",
   back:"Sexual reproduction:\n• Involves TWO parents\n• Produces genetically UNIQUE offspring (variation)\n• Involves fertilisation (joining of egg and sperm)\n• Slower but creates variety — important for evolution\n\nAsexual reproduction:\n• Involves ONE parent\n• Produces IDENTICAL offspring (clones)\n• Examples: bacteria splitting, strawberry runners, bulbs\n• Faster but no genetic variation\n\nMost animals use sexual reproduction; many plants and fungi can use both.",difficulty:1,category:"concept"},
  {id:"card-28-2",islandId:"island-28",front:"Describe the process of pollination in flowering plants.",
   back:"Pollination = transfer of pollen from the anther (male) to the stigma (female) of a flower.\n\nInsect pollination:\n• Bright petals and nectar attract insects\n• Pollen grains are sticky, attach to insect\n• Insect transfers pollen to next flower\n\nWind pollination:\n• Dull flowers, no nectar\n• Pollen is light and produced in huge quantities\n• Carried by the wind — less reliable\n\nAfter pollination: pollen tube grows down to ovule → FERTILISATION occurs → seed forms.",difficulty:2,category:"definition"},
  {id:"card-28-3",islandId:"island-28",front:"Name the main changes that happen during puberty in males and females.",
   back:"Both sexes:\n• Growth spurt\n• Body hair grows\n• Sweating increases\n• Emotional changes\n\nFemales:\n• Breasts develop\n• Hips widen\n• Menstrual cycle begins (menarche)\n\nMales:\n• Voice breaks (deepens)\n• Shoulders broaden\n• Testes produce sperm\n• Facial hair grows\n\nPuberty is triggered by hormones (oestrogen in females; testosterone in males). Typically begins age 9–14.",difficulty:1,category:"definition"},

  // ── Science: Elements, Compounds & Reactions ─────────────────────────────
  {id:"card-29-1",islandId:"island-29",front:"What is the difference between an element, a compound and a mixture?",
   back:"Element:\n• Made of ONE type of atom only\n• Cannot be broken down further by chemical means\n• Found in the Periodic Table (e.g. O, Fe, Cu)\n\nCompound:\n• Made of TWO or MORE different elements CHEMICALLY joined\n• Has different properties from its elements\n• Can only be separated by chemical reactions (e.g. water H₂O, salt NaCl)\n\nMixture:\n• Two or more substances PHYSICALLY combined (not chemically)\n• Each substance keeps its own properties\n• Easily separated (e.g. sand + water, air)",difficulty:1,category:"definition"},
  {id:"card-29-2",islandId:"island-29",front:"How is the Periodic Table organised? What are groups and periods?",
   back:"The Periodic Table organises all known elements by atomic number (number of protons).\n\nPeriods (horizontal rows):\n• Each row represents a new electron 'shell'\n• Period 1 = 2 elements; Period 2 = 8 elements, etc.\n\nGroups (vertical columns):\n• Elements in the same group have similar chemical properties\n• Key groups: Group 1 (alkali metals), Group 7 (halogens), Group 0 (noble gases)\n\nMetals are on the LEFT; non-metals on the RIGHT.\nThe zigzag line separates them.",difficulty:2,category:"definition"},
  {id:"card-29-3",islandId:"island-29",front:"Name 4 separation techniques and when you would use each.",
   back:"1. Filtration — separates an insoluble solid from a liquid (e.g. sand from water)\n2. Evaporation — removes liquid to leave a dissolved solid (e.g. salt from salt water)\n3. Distillation — separates a liquid from a solution using boiling points (e.g. pure water from sea water)\n4. Chromatography — separates mixtures of dissolved substances by how far they travel (e.g. inks, food dyes)\n\nKey: these are all PHYSICAL methods — no new substance is made.",difficulty:2,category:"application"},

  // ── Science: Energy Stores & Transfers ───────────────────────────────────
  {id:"card-30-1",islandId:"island-30",front:"Name 6 energy stores with an example of each.",
   back:"1. Kinetic — a moving car\n2. Thermal (heat) — a hot cup of tea\n3. Chemical — food, fuel, batteries\n4. Gravitational potential — a book on a shelf\n5. Elastic potential — a stretched rubber band\n6. Nuclear — atoms in a nuclear reactor\n\nAlso: magnetic, electrostatic.\n\nEnergy is NEVER created or destroyed — it is transferred between stores.\n(Law of Conservation of Energy)",difficulty:1,category:"definition"},
  {id:"card-30-2",islandId:"island-30",front:"What is the difference between conduction, convection and radiation?",
   back:"Conduction:\n• Heat transfer through a solid by particle vibration\n• Best in metals (good conductors); poor in wood/plastic (insulators)\n\nConvection:\n• Heat transfer in fluids (liquids/gases) by currents\n• Hot fluid rises (less dense), cool fluid sinks → convection current\n\nRadiation:\n• Infrared electromagnetic waves — needs NO medium\n• Works in a vacuum (e.g. heat from the Sun reaching Earth)\n• Dark, matt surfaces absorb and emit best\n• Light, shiny surfaces reflect best",difficulty:2,category:"concept"},
  {id:"card-30-3",islandId:"island-30",front:"What is the Law of Conservation of Energy?",
   back:"Energy cannot be created or destroyed — it can only be TRANSFERRED from one store to another.\n\nExample: a bouncing ball\n• At the top: gravitational potential energy store is FULL\n• Falling: GPE transfers to kinetic store\n• At the bottom: KE transfers to elastic store (ball squishes) then back to KE\n• Some energy also transfers to thermal store (heat) due to air resistance\n\nTotal energy IN = Total energy OUT\n\nNo machine is 100% efficient — some energy is always 'wasted' as heat.",difficulty:2,category:"concept"},

  // ── History: The Crusades ─────────────────────────────────────────────────
  {id:"card-31-1",islandId:"island-31",front:"Why did Christian Europeans launch the First Crusade (1096)?",
   back:"Religious motives:\n• Pope Urban II called for the Crusade in 1095 at Clermont\n• The Holy Land (Jerusalem) was under Muslim Seljuk Turk control\n• Christians believed recapturing Jerusalem would guarantee a place in heaven\n• Offered plenary indulgence (forgiveness of all sins)\n\nPolitical motives:\n• Byzantine Emperor asked for military help against the Turks\n• Nobles saw a chance for land and wealth\n• Kings wanted to get rid of troublesome knights\n\nThe First Crusade captured Jerusalem in 1099 after a brutal siege.",difficulty:1,category:"definition"},
  {id:"card-31-2",islandId:"island-31",front:"How did Saladin and Richard I differ as leaders?",
   back:"Saladin (Salah ad-Din):\n• Sultan of Egypt and Syria; Muslim military leader\n• Recaptured Jerusalem in 1187\n• Respected by Crusaders for his chivalry — allowed Christian civilians to leave safely\n• Seen as merciful even by his enemies\n\nRichard I ('the Lionheart'):\n• English king; fierce warrior, led the Third Crusade\n• Won battles but could not retake Jerusalem\n• Negotiated a treaty (1192) allowing Christian pilgrims to visit Jerusalem\n• Was captured and ransomed on his way home\n\nBoth leaders were admired — even by their opponents.",difficulty:2,category:"concept"},
  {id:"card-31-3",islandId:"island-31",front:"What was the long-term impact of the Crusades?",
   back:"Negative impacts:\n• Enormous loss of life on both sides\n• Increased hostility between Christians and Muslims\n• Persecution of Jewish communities in Europe\n\nPositive/unexpected impacts:\n• Trade expanded — Europeans encountered silk, spices, paper, mathematics\n• Islamic learning (medicine, astronomy, philosophy) transferred to Europe\n• Helped spark the Renaissance\n• Cultural exchange — Arabic words entered European languages\n\nHistorians debate significance: the Crusades ultimately failed militarily but had enormous cultural consequences.",difficulty:2,category:"application"},

  // ── History: The Renaissance & Reformation ────────────────────────────────
  {id:"card-32-1",islandId:"island-32",front:"What was the Renaissance and what ideas drove it?",
   back:"The Renaissance ('rebirth') = a cultural and intellectual movement beginning in Italy (~1300s–1600s).\n\nKey ideas:\n• Humanism — focus on human potential, not just religious life\n• Looking back to ancient Greek and Roman learning\n• Observation and evidence — challenging old ideas\n• New art techniques: perspective, chiaroscuro (light/shadow)\n\nKey figures: Leonardo da Vinci, Michelangelo, Galileo\n\nThe Printing Press (Gutenberg, 1450s) was crucial — it spread ideas rapidly across Europe for the first time.",difficulty:1,category:"definition"},
  {id:"card-32-2",islandId:"island-32",front:"Why did Martin Luther challenge the Catholic Church?",
   back:"Luther's complaints (95 Theses, 1517):\n1. The Church sold 'indulgences' — payments to reduce time in purgatory\n2. The Pope had too much power and wealth\n3. The Bible should be in languages people could read (not just Latin)\n4. Salvation came from faith alone, not good deeds or payments\n\nHe nailed his 95 Theses to a church door in Wittenberg.\nThe Printing Press spread his ideas across Europe rapidly.\nThis sparked the Protestant Reformation — a permanent split in Western Christianity.",difficulty:2,category:"definition"},
  {id:"card-32-3",islandId:"island-32",front:"Why did Henry VIII break with Rome and what were the consequences?",
   back:"Henry's reasons:\n• He wanted to divorce Catherine of Aragon (she had not produced a male heir)\n• Pope Clement VII refused to grant an annulment\n• Henry also wanted to seize the Church's wealth\n\nConsequences (Act of Supremacy, 1534):\n• Henry became Head of the Church of England\n• Dissolution of the Monasteries (1536–41) — Henry seized church land and wealth\n• England became Protestant (with complications under later monarchs)\n\nThis was driven by politics as much as religion — unlike Luther's theological challenge.",difficulty:2,category:"application"},

  // ── History: The Tudors & Elizabethan England ─────────────────────────────
  {id:"card-33-1",islandId:"island-33",front:"How did religion change under each Tudor monarch?",
   back:"Henry VIII — broke with Rome; kept Catholic practices but no Pope\nEdward VI — strongly Protestant; Book of Common Prayer; church simplified\nMary I — returned England to Catholicism; burned ~300 Protestants ('Bloody Mary')\nElizabeth I — Protestant 'middle way'; Church of England; moderate settlement\n\nThis pattern of back-and-forth religious change caused enormous instability and suffering.\n\nElizabeth's settlement was deliberately vague to include as many people as possible.",difficulty:2,category:"definition"},
  {id:"card-33-2",islandId:"island-33",front:"What happened during the Spanish Armada (1588)?",
   back:"Why Spain attacked:\n• Philip II of Spain was Catholic and wanted to restore Catholicism to England\n• Elizabeth supported Dutch Protestants fighting Spain\n• English pirates (Drake) had raided Spanish treasure ships\n\nWhat happened:\n• Spain sent 130 ships (the Armada) to invade England\n• English fleet (smaller but faster) used fireships at Gravelines\n• Storms destroyed much of the Armada as it fled round Scotland\n• England survived — Elizabeth gave her famous Tilbury speech\n\nSignificance: England remained Protestant and became more confident as a sea power.",difficulty:1,category:"application"},
  {id:"card-33-3",islandId:"island-33",front:"How significant was Elizabeth I's reign?",
   back:"Arguments she WAS significant:\n• Brought religious stability after decades of upheaval\n• England became a major sea power (defeat of Armada, Drake's circumnavigation)\n• The arts flourished — Shakespeare, theatre, poetry\n• Long reign (45 years) — stability allowed England to grow in confidence\n\nArguments she was LESS significant:\n• She never married or produced an heir → succession crisis\n• Poverty and poor harvests caused suffering\n• Brutal repression of Irish rebellion\n\nHistorians use 'significance' criteria: impact, scale, duration, legacy.",difficulty:2,category:"concept"},

  // ── History: The Transatlantic Slave Trade ────────────────────────────────
  {id:"card-34-1",islandId:"island-34",front:"Describe the triangular trade. What moved along each side of the triangle?",
   back:"Leg 1 — Britain to West Africa:\n• Ships carried manufactured goods (guns, cloth, alcohol) to exchange for enslaved people\n\nLeg 2 — The Middle Passage (West Africa to the Americas):\n• Enslaved Africans transported in horrific conditions\n• Journey took 6–12 weeks; up to 1 in 5 died\n\nLeg 3 — Americas back to Britain:\n• Ships returned with plantation goods: sugar, tobacco, cotton, rum\n\nBritain profited enormously. Cities like Bristol and Liverpool were built on this trade.\nAn estimated 12 million Africans were enslaved over ~400 years.",difficulty:1,category:"definition"},
  {id:"card-34-2",islandId:"island-34",front:"Describe the conditions on the Middle Passage.",
   back:"The Middle Passage = the crossing from West Africa to the Caribbean/Americas.\n\nConditions:\n• People chained below decks in spaces too small to sit up\n• 400–600 people packed into a single ship\n• Disease (dysentery, typhus) spread rapidly\n• Little food or water; no sanitation\n• Up to 20% died during the crossing\n• Physical and psychological abuse from crew\n\nThose who survived faced enslavement on plantations — working 12–18 hour days, often in brutal conditions.\n\nThis was a deliberate, commercially organised system of human trafficking.",difficulty:2,category:"application"},
  {id:"card-34-3",islandId:"island-34",front:"How was the slave trade abolished in Britain? Who were the key figures?",
   back:"Key figures:\n• Olaudah Equiano — enslaved African who wrote his autobiography; powerful first-hand testimony\n• Granville Sharp — lawyer; fought legal cases against slavery in Britain\n• William Wilberforce — MP who campaigned for 20+ years in Parliament\n• The Clapham Sect — a group of Christian activists\n\nTimeline:\n• 1807 — Slave Trade Act abolished the TRADE (buying/selling enslaved people) in British territories\n• 1833 — Slavery Abolition Act freed enslaved people in British colonies\n\nNOTE: Slaveholders were compensated; enslaved people received nothing.",difficulty:2,category:"definition"},

  // ── Geography: Biomes & Climate Zones ────────────────────────────────────
  {id:"card-35-1",islandId:"island-35",front:"What is a biome? Name 5 major global biomes.",
   back:"A biome = a large-scale ecosystem defined by its climate, vegetation and animal life.\n\n5 major biomes:\n1. Tropical rainforest — hot and wet all year; equatorial regions\n2. Hot desert — very hot days, cold nights; very little rain\n3. Temperate grassland (savanna) — warm, seasonal rainfall\n4. Coniferous forest (taiga) — cold, snowy; northern Canada, Russia\n5. Tundra — extreme cold, permafrost; Arctic regions\n\nBiome distribution follows latitude and climate zones — predictable global patterns.",difficulty:1,category:"definition"},
  {id:"card-35-2",islandId:"island-35",front:"Describe 3 adaptations of plants or animals in the tropical rainforest.",
   back:"1. Drip-tip leaves — pointed tips allow excess rain to run off quickly, preventing rot and fungal growth\n2. Buttress roots — wide roots spread out at ground level to support very tall trees in shallow soil\n3. Bromeliads — collect rainwater in their leaves to survive periods without direct rainfall\n\nAnimal examples:\n• Toucans' bright beaks — used to reach fruit in the dense canopy\n• Tree frogs — sticky toe pads for climbing in the wet, vertical environment\n\nThe rainforest has the greatest biodiversity on Earth — ~50% of all species.",difficulty:2,category:"application"},
  {id:"card-35-3",islandId:"island-35",front:"What are the main causes and effects of tropical deforestation?",
   back:"Causes:\n• Commercial logging for timber\n• Clearing land for cattle ranching (e.g. Amazon for beef exports)\n• Palm oil plantations (Indonesia, Malaysia)\n• Mining for minerals\n• Population growth — farming land\n\nEffects:\n• Loss of biodiversity — species extinction\n• Climate change — trees store CO₂; clearing releases it\n• Soil erosion — tree roots no longer hold soil\n• Loss of livelihoods for indigenous communities\n• Disruption of the water cycle\n\nRate: equivalent to a football pitch of rainforest lost every second.",difficulty:2,category:"concept"},

  // ── Geography: Restless Earth & Tectonics ─────────────────────────────────
  {id:"card-36-1",islandId:"island-36",front:"Describe the internal structure of the Earth.",
   back:"From outside to inside:\n\n1. Crust — thin outer layer; continental crust (thicker, less dense) and oceanic crust (thinner, denser)\n2. Mantle — thick layer of semi-molten rock; convection currents drive plate movement\n3. Outer core — liquid iron and nickel; generates Earth's magnetic field\n4. Inner core — solid iron and nickel; temperatures up to 5,000°C\n\nThickness: crust ~5–70 km, mantle ~2,900 km, core ~3,500 km radius.\n\nTectonic plates float on the mantle like rafts on very thick treacle.",difficulty:1,category:"definition"},
  {id:"card-36-2",islandId:"island-36",front:"What happens at constructive, destructive and conservative plate boundaries?",
   back:"Constructive (plates move APART):\n• Magma rises and fills the gap → new crust formed\n• Volcanoes and mid-ocean ridges (e.g. Iceland on Mid-Atlantic Ridge)\n\nDestructive (plates move TOGETHER):\n• Denser oceanic plate subducts under continental plate → melts\n• Volcanoes and fold mountains (e.g. Andes, Japan)\n• Earthquakes as plates grind together\n\nConservative (plates slide PAST each other):\n• No new crust; no destruction\n• Massive earthquakes (e.g. San Andreas Fault, California)\n• NO volcanoes here",difficulty:2,category:"definition"},
  {id:"card-36-3",islandId:"island-36",front:"What is the difference between the focus and epicentre of an earthquake?",
   back:"Focus (or hypocentre):\n• The point UNDERGROUND where the earthquake originates\n• Where the rock fractures and energy is released\n• Can be shallow (< 70 km) or deep (up to 700 km)\n\nEpicentre:\n• The point on the SURFACE directly above the focus\n• Where shaking is usually most intense\n• This is the point given in earthquake reports\n\nSeismic waves radiate outward from the focus in all directions.\nIntensity decreases with distance from the epicentre.\nMeasured on the Richter scale (logarithmic — each step is ×10 more powerful).",difficulty:2,category:"definition"},

  // ── Geography: Africa: Development & Diversity ────────────────────────────
  {id:"card-37-1",islandId:"island-37",front:"What is the Human Development Index (HDI)? What does it measure?",
   back:"HDI = a composite measure of development (score 0–1; closer to 1 = more developed).\n\nIt combines THREE indicators:\n1. Life expectancy — how long people live (health)\n2. Education — years of schooling, literacy rate\n3. Gross National Income (GNI) per capita — standard of living\n\nAdvantage over GDP alone: captures quality of life, not just wealth.\n\nHigh HDI countries: Norway, Switzerland, Germany\nLower HDI countries: Niger, Chad, South Sudan\n\nBUT HDI is an average — it hides inequality within a country.",difficulty:2,category:"definition"},
  {id:"card-37-2",islandId:"island-37",front:"What are common misconceptions about Africa? What is the reality?",
   back:"Misconception → Reality:\n\n'Africa is one country' → Africa is a continent of 54 countries with enormous diversity\n'Africa is mostly jungle' → Africa has deserts, grasslands, mountains, forests, cities and coastlines\n'Africa is uniformly poor' → Countries like South Africa, Kenya and Egypt have significant middle classes\n'Africa has no history before colonisation' → Africa had great kingdoms: Mali, Benin, Great Zimbabwe, Egypt\n\nWhy misconceptions matter:\n• They distort foreign policy and aid decisions\n• They disrespect Africa's cultures and histories\n• They ignore Africa as one of the world's fastest-growing economic regions",difficulty:1,category:"concept"},
  {id:"card-37-3",islandId:"island-37",front:"What are the benefits and costs of tourism in Africa (e.g. Kenya)?",
   back:"Benefits (economic):\n• Foreign exchange earnings for the government\n• Jobs for local people (guides, hotels, transport)\n• Investment in infrastructure (roads, airports)\n\nBenefits (environmental):\n• Funding for national parks and conservation\n• Incentive to protect wildlife\n\nCosts:\n• Profit often goes to foreign companies ('leakage')\n• Environmental damage — litter, pollution, habitat disturbance\n• Cultural erosion — traditions commercialised for tourists\n• Seasonal jobs only — income is not reliable\n\nSustainable tourism tries to maximise benefits and minimise harm.",difficulty:2,category:"application"}
];

const QUESTIONS = {
  "island-1":[
    {q:"Calculate: 3 + 4 × 2",opts:["14","11","10","7"],c:1,e:"BODMAS: do multiplication before addition. 4 × 2 = 8, then 3 + 8 = 11. If you got 14, you added first — a very common mistake!"},
    {q:"Round 4,732 to the nearest hundred.",opts:["4,700","4,730","4,800","5,000"],c:0,e:"Look at the tens digit (3). Since 3 < 5, round DOWN. The hundreds digit (7) stays, and everything after becomes 0: 4,700."},
    {q:"Which list is in order from smallest to largest?",opts:["−2, −5, 0, 3","−5, −2, 0, 3","0, −2, −5, 3","3, 0, −2, −5"],c:1,e:"On a number line, more negative = smaller (further left). −5 < −2 < 0 < 3 is the correct order."}
  ],
  "island-2":[
    {q:"What is 3/4 as a decimal?",opts:["0.34","0.43","0.7","0.75"],c:3,e:"Divide the numerator by the denominator: 3 ÷ 4 = 0.75. Or remember: ¾ = 75%."},
    {q:"What is 40% of 150?",opts:["40","60","90","110"],c:1,e:"10% of 150 = 15. So 40% = 4 × 15 = 60. Or: 150 × 0.4 = 60."},
    {q:"Which is the LARGEST value?",opts:["3/5","0.58","61%","0.6"],c:2,e:"Convert all to decimals: 3/5=0.60, 0.58, 61%=0.61, 0.6=0.60. Largest is 61% (0.61)."}
  ],
  "island-3":[
    {q:"What is the value of 5x − 3 when x = 2?",opts:["4","7","10","13"],c:1,e:"Substitute x=2: 5(2) − 3 = 10 − 3 = 7. Always put brackets around your substituted value."},
    {q:"The nth term of a sequence is 3n + 1. What is the 5th term?",opts:["6","11","16","19"],c:2,e:"Substitute n=5: 3(5) + 1 = 15 + 1 = 16."},
    {q:"Solve: 2x + 5 = 13",opts:["x = 2","x = 3","x = 4","x = 9"],c:2,e:"Subtract 5 from both sides: 2x = 8. Divide by 2: x = 4. Check: 2(4)+5 = 13 ✓"}
  ],
  "island-4":[
    {q:"What do angles in a triangle always add up to?",opts:["90°","180°","270°","360°"],c:1,e:"The three interior angles of ANY triangle always sum to exactly 180°. This is true for all triangles — equilateral, isosceles, scalene and right-angled."},
    {q:"A rectangle has width 4 cm and length 7 cm. What is its perimeter?",opts:["11 cm","22 cm","28 cm","28 cm²"],c:1,e:"Perimeter = 2(l + w) = 2(7 + 4) = 2 × 11 = 22 cm. Note: perimeter is a length (cm), not an area (cm²)."},
    {q:"Which triangle has ALL THREE sides of different lengths?",opts:["Equilateral","Isosceles","Scalene","Right-angled"],c:2,e:"Scalene = all sides different, all angles different. Equilateral = all sides equal (60° each). Isosceles = two sides equal."}
  ],
  "island-5":[
    {q:"Find the mean of: 6, 8, 4, 10, 7",opts:["6","7","8","35"],c:1,e:"Mean = sum ÷ count = (6+8+4+10+7) ÷ 5 = 35 ÷ 5 = 7. Don't forget to divide by the number of values, not the total."},
    {q:"What is the median of: 3, 1, 8, 5, 2?",opts:["1","2","3","5"],c:2,e:"First order them: 1, 2, 3, 5, 8. The median is the middle value — there are 5 numbers, so the 3rd one is the median: 3."},
    {q:"In a bar chart, a bar reaches height 15 for the 'Sports' category. This means:",opts:["15% chose sport","15 people chose sport","The bar is 15 cm tall","15 is the mean"],c:1,e:"The bar height in a bar chart represents the FREQUENCY (count) for that category — 15 people chose sport."}
  ],
  "island-6":[
    {q:"A reader 'infers' something. This means they:",opts:["Copy text word for word","Use clues to work out what isn't directly stated","Read only the first paragraph","Skip difficult vocabulary"],c:1,e:"Inference = reading between the lines. You use evidence from the text PLUS your own knowledge to reach a conclusion the author hasn't stated outright."},
    {q:"Which of these is an OPINION?",opts:["Shakespeare was born in 1564","Water boils at 100°C","Romeo and Juliet is Shakespeare's greatest play","London has a population of about 9 million"],c:2,e:"'Greatest play' is a judgement — it cannot be proven true or false. It's a personal view. The others are facts that can be verified."},
    {q:"Non-fiction texts are written to:",opts:["Tell imaginary stories only","Entertain only","Inform, persuade, argue, or instruct","Create fictional characters"],c:2,e:"Non-fiction deals with real information. Different non-fiction text types have different purposes: news articles (inform), speeches (persuade), instruction manuals (instruct)."}
  ],
  "island-7":[
    {q:"Which story opening is MOST effective at creating tension?",opts:["My name is James and I am 12.","It was a Monday morning.","The letter arrived sealed in red wax, long after midnight.","This is a story about a boy."],c:2,e:"A great opening creates immediate atmosphere and raises questions. 'Sealed in red wax, long after midnight' is mysterious and intriguing. The other options are dull and tell the reader nothing interesting."},
    {q:"'Show, don't tell' means:",opts:["Use images alongside writing","Reveal emotion through action and detail, not direct statement","Write only short sentences","Use dialogue instead of description"],c:1,e:"'She was nervous' TELLS us. 'Her hands trembled as she reached for the handle' SHOWS us. The second is more vivid and engaging — the reader infers the emotion."},
    {q:"The 'climax' on the story mountain is:",opts:["The opening scene","Where characters are introduced","The most exciting or tense turning point","The final line of the story"],c:2,e:"The climax is at the peak of the story mountain — the moment of greatest tension or conflict. Everything builds toward it, and the resolution comes after."}
  ],
  "island-8":[
    {q:"Which sentence is correctly punctuated?",opts:["the dog ran fast","The dog ran fast.","The dog ran, fast","the Dog ran fast."],c:1,e:"Sentences must start with a capital letter and end with a full stop (or ! or ?). 'The dog ran fast.' is the only option that follows both rules."},
    {q:"The apostrophe in 'the girl's bag' shows:",opts:["There are several girls","A letter is missing","The bag belongs to the girl","A question is being asked"],c:2,e:"This is a POSSESSIVE apostrophe — it shows ownership. One girl owns the bag: the girl's bag. (Compare: the girls' bags = bags belonging to multiple girls.)"},
    {q:"A semicolon is used to:",opts:["Introduce a list","Join two related main clauses","Show a missing letter","End a sentence with emotion"],c:1,e:"A semicolon joins two COMPLETE, related sentences: 'It was cold; she wore her coat.' Both halves must be able to stand alone as sentences."}
  ],
  "island-9":[
    {q:"'The moon is a silver coin' is an example of:",opts:["Simile","Alliteration","Metaphor","Onomatopoeia"],c:2,e:"A METAPHOR directly says one thing IS another, without using 'like' or 'as'. A simile would be: 'The moon is LIKE a silver coin.'"},
    {q:"Alliteration is the repetition of:",opts:["Rhyming words at line ends","The same consonant sound at the start of nearby words","Words that sound like what they describe","Ideas across a whole poem"],c:1,e:"Alliteration: 'the cold, cruel cliffs crashed.' The same consonant sound (c) is repeated at the start of nearby words. It creates rhythm and can reinforce mood."},
    {q:"'The angry clouds growled overhead.' Which device is this?",opts:["Simile","Alliteration","Rhyme","Personification"],c:3,e:"Personification gives a human quality (growling) to something non-human (clouds). Clouds cannot really growl — giving them this ability makes the description more vivid and atmospheric."}
  ],
  "island-10":[
    {q:"Which is the BEST advice before giving a presentation?",opts:["Read word-for-word from a script","Memorise every single word precisely","Practise out loud multiple times","Leave preparation until the day"],c:2,e:"Practising OUT LOUD (not just in your head) helps you hear how it sounds, build genuine confidence, and spot parts that feel unnatural or hard to say."},
    {q:"Formal language should be used when:",opts:["Texting friends","Chatting at lunch","Speaking in a school presentation or interview","Writing a personal diary"],c:2,e:"Formal language is appropriate in academic, professional and public contexts. It avoids slang, uses complete sentences and standard grammar. Match your language to your audience and purpose."},
    {q:"Active listening means:",opts:["Planning your reply while the person speaks","Nodding and making eye contact to show understanding, then asking questions","Waiting in silence for your turn","Writing notes without making eye contact"],c:1,e:"Active listeners focus FULLY on the speaker — they show engagement through body language (nodding, eye contact) and ask questions to check understanding. Planning your reply while someone talks is the opposite of active listening."}
  ],
  "island-11":[
    {q:"What does the nucleus of a cell do?",opts:["Produces energy for the cell","Controls the cell and contains DNA","Carries out photosynthesis","Provides structural support"],c:1,e:"The nucleus is the control centre. It contains the cell's DNA — the genetic instructions for everything the cell does."},
    {q:"MRS GREN is an acronym for:",opts:["Parts of the cell","The 7 characteristics of all living things","Types of reproduction","Parts of a food chain"],c:1,e:"MRS GREN: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition — the 7 life processes that ALL living things must carry out."},
    {q:"Which structure is found in plant cells but NOT in animal cells?",opts:["Nucleus","Cell membrane","Cytoplasm","Cell wall"],c:3,e:"Plant cells have: cell wall (cellulose), chloroplasts and a large vacuole — none found in animal cells. Both cell types share: nucleus, membrane, cytoplasm, and mitochondria."}
  ],
  "island-12":[
    {q:"In a food chain, what do the arrows represent?",opts:["What eats what","The direction of energy transfer","Where animals live","The relative sizes of organisms"],c:1,e:"Arrows show ENERGY flowing from one organism to the next. 'Grass → Rabbit → Fox' means energy passes from grass to rabbit to fox. The arrow points away from what is eaten."},
    {q:"A 'producer' in an ecosystem is:",opts:["An animal that hunts","An organism that makes its own food through photosynthesis","A decomposer breaking down dead matter","A secondary consumer"],c:1,e:"Producers (plants, algae) make their own food using sunlight (photosynthesis). They always come first in a food chain and provide energy for all other organisms."},
    {q:"What makes an adaptation different from just any feature?",opts:["It must be very unusual","It is an inherited feature that helps survival and reproduction","It only applies to animals in extreme environments","It is learned during the organism's lifetime"],c:1,e:"Adaptations are INHERITED (passed through genes) and specifically help an organism survive and reproduce in its particular environment. They are not learned or acquired during life."}
  ],
  "island-13":[
    {q:"In which state are particles furthest apart and moving fastest?",opts:["Solid","Liquid","Gas","Plasma"],c:2,e:"Gas particles are spread far apart and move very quickly in all directions. This is why gases fill any container and can be compressed."},
    {q:"When water freezes to form ice, this is called:",opts:["Melting","Condensing","Evaporating","Freezing/Solidifying"],c:3,e:"Freezing (or solidifying) = liquid → solid. Water freezes at 0°C. Melting is the reverse (solid → liquid). Evaporation = liquid → gas. Condensation = gas → liquid."},
    {q:"What happens to particles when a substance is heated?",opts:["They get heavier","They become larger in size","They gain energy and move faster","They disappear into the surroundings"],c:2,e:"Heating gives particles more KINETIC ENERGY — they vibrate more (solids) or move faster (liquids/gases). This causes expansion and eventually changes of state."}
  ],
  "island-14":[
    {q:"Forces are measured in:",opts:["Kilograms","Metres per second","Newtons","Joules"],c:2,e:"Forces are measured in Newtons (N), named after Sir Isaac Newton. Mass is in kg; speed in m/s; energy in Joules."},
    {q:"A book sits on a table without moving. The forces on it are:",opts:["Unbalanced","Zero","Balanced","Only gravity"],c:2,e:"Weight (gravity pulling down) equals the normal reaction force (table pushing up). Balanced forces mean NO change in motion — the book stays still."},
    {q:"Friction is a force that:",opts:["Always speeds objects up","Opposes motion between surfaces in contact","Only acts on objects in water","Pulls objects towards Earth"],c:1,e:"Friction acts in the OPPOSITE direction to motion. It can be useful (grip, brakes) or unhelpful (energy wasted in engines). It is reduced by smooth surfaces and lubrication."}
  ],
  "island-15":[
    {q:"Light travels:",opts:["In curved lines that bend around objects","In straight lines","In circles outward from its source","Randomly in all directions simultaneously"],c:1,e:"Light travels in straight lines (rectilinear propagation). This is why shadows have sharp edges and why you cannot see around corners."},
    {q:"Sound CANNOT travel through:",opts:["Water","Steel","A vacuum (space)","Air"],c:2,e:"Sound needs particles to vibrate through — it cannot travel through a vacuum (empty space). This is why space is completely silent, even near explosions."},
    {q:"Why do we see lightning before we hear thunder?",opts:["Lightning is always closer to us","Thunder is much quieter than lightning","Light travels much faster than sound","Thunder starts a few seconds after lightning"],c:2,e:"Light travels at 300,000 km/s; sound travels at ~340 m/s. Light reaches your eyes almost instantly; sound from the same event takes about 3 seconds per kilometre to arrive."}
  ],
  "island-16":[
    {q:"Who won the Battle of Hastings in 1066?",opts:["Harald Hardrada","Harold Godwinson","William of Normandy","Edgar Atheling"],c:2,e:"William of Normandy defeated Harold Godwinson on 14 October 1066. Harold was killed during the battle and William was crowned King of England on Christmas Day 1066."},
    {q:"The Domesday Book (1086) was primarily created to:",opts:["Record the battles of 1066","List all the churches in England","Survey land and wealth to calculate taxation","Record the names of all Norman soldiers"],c:2,e:"William ordered the Domesday Book to find out exactly who owned what, and therefore how much tax they owed. It also demonstrated his complete ownership of England."},
    {q:"Why did William build castles across England after 1066?",opts:["As places of worship for Normans","To provide homes for peasants","To control the English population and display Norman power","To serve as market places for trade"],c:2,e:"Castles were military strongholds that allowed William and his lords to dominate the surrounding area, respond quickly to rebellions, and demonstrate that the Normans were in charge."}
  ],
  "island-17":[
    {q:"In the feudal system, who was at the very top?",opts:["The Pope","Barons","Knights","The King"],c:3,e:"The King owned ALL land in England. He sat at the top of the feudal pyramid, granting land to lords in exchange for their loyalty and military service."},
    {q:"What was a 'tithe' in medieval England?",opts:["A type of early castle","A 10% tax paid to the Church","A medieval tournament","A peasant's plot of land"],c:1,e:"A tithe was one-tenth (10%) of a person's annual income or produce, compulsorily paid to the local church. This made the Church enormously wealthy."},
    {q:"What were motte-and-bailey castles?",opts:["Roman stone fortifications","Early Norman wooden castles built on a raised mound","Castles built entirely underground","Coastal forts facing France"],c:1,e:"Motte = a raised earthen mound with a wooden tower on top. Bailey = a fenced courtyard below. These were quick to build and appeared all over England after 1066. Later replaced by permanent stone keeps."}
  ],
  "island-18":[
    {q:"What was the main cause of the Black Death?",opts:["A virus spread by dirty water","The bacterium Yersinia pestis, spread mainly by fleas on rats","Breathing cold air in winter","Eating rotten food"],c:1,e:"The Black Death was caused by the bacterium Yersinia pestis. Fleas on black rats carried the disease and transmitted it to humans through bites. Medieval people had no knowledge of bacteria."},
    {q:"Approximately what fraction of Europe's population died in the Black Death?",opts:["1 in 10","1 in 4","1 in 3","1 in 2"],c:2,e:"The Black Death killed roughly 30-50% of Europe's population between 1347 and 1351 — one of the greatest disasters in human history. In some areas, the death rate was even higher."},
    {q:"One long-term consequence of the Black Death was:",opts:["The Church became even more powerful","The feudal system became stronger","Peasants gained more bargaining power due to labour shortages","Trade permanently collapsed across Europe"],c:2,e:"With so many people dead, there were fewer workers. Surviving peasants could demand higher wages and better conditions. This eventually weakened the feudal system and contributed to the Peasants' Revolt of 1381."}
  ],
  "island-19":[
    {q:"The Magna Carta was signed in:",opts:["1066","1215","1348","1381"],c:1,e:"King John signed the Magna Carta at Runnymede on 15 June 1215, under pressure from rebelling barons who marched on London."},
    {q:"What was the KEY principle of the Magna Carta?",opts:["The king could do whatever he wished","All land belonged to the Church","The king must obey the law","Peasants had the right to vote"],c:2,e:"For the first time, a king was made legally subject to the rule of law. Magna Carta stated that even the king had to follow agreed rules and could not imprison people without fair trial."},
    {q:"Simon de Montfort's Parliament (1265) was significant because:",opts:["Women gained the right to vote","It abolished the monarchy","It included knights and town representatives, not just barons","It replaced the Magna Carta entirely"],c:2,e:"De Montfort widened who was represented in Parliament — beyond just barons to include knights and burgesses (town representatives). This was a key step toward the modern democratic Parliament."}
  ],
  "island-20":[
    {q:"When reading a 4-figure grid reference, which direction do you go first?",opts:["Up (northings first)","Diagonally","Along (eastings first)","It doesn't matter"],c:2,e:"'Along the corridor and up the stairs.' Go along the x-axis (eastings) first, then up the y-axis (northings). E.g. reference 2534: go along to 25, then up to 34."},
    {q:"Contour lines that are very close together on a map indicate:",opts:["A flat plain","A river valley","A steep slope","A forest"],c:2,e:"The closer contour lines are, the steeper the slope. Far apart = gentle slope. Circular contours closing in = a hill summit. They never cross."},
    {q:"On a 1:50,000 map, a measured distance of 2 cm represents:",opts:["50 metres","500 metres","1 kilometre","2 kilometres"],c:2,e:"1:50,000 means 1 cm = 50,000 cm = 500 m. Therefore 2 cm = 1,000 m = 1 km. Always convert cm to m or km when working with map scales."}
  ],
  "island-21":[
    {q:"What is the key difference between weather and climate?",opts:["Weather is long-term; climate is daily","They mean the same thing","Weather is short-term daily conditions; climate is the 30+ year average","Climate only measures temperature"],c:2,e:"'Climate is what you expect; weather is what you get.' Weather changes day-to-day; climate is the long-term average pattern for a region (measured over at least 30 years)."},
    {q:"Which instrument measures rainfall?",opts:["Thermometer","Barometer","Anemometer","Rain gauge"],c:3,e:"A rain gauge collects rainfall and measures it in millimetres (mm). Thermometer = temperature, barometer = air pressure, anemometer = wind speed."},
    {q:"The UK's mild, wet climate is mainly caused by:",opts:["Being close to the equator","Prevailing winds from North Africa","South-westerly winds from the Atlantic and the North Atlantic Drift","Being a very large continent"],c:2,e:"South-westerly winds bring warm, moist Atlantic air across the UK. The North Atlantic Drift (a warm ocean current) keeps UK winters warmer than expected for its latitude."}
  ],
  "island-22":[
    {q:"Which process involves the river wearing away its channel?",opts:["Deposition","Transportation","Flooding","Erosion"],c:3,e:"Erosion = wearing away of material. River erosion processes include hydraulic action (force of water), abrasion (sediment scraping) and solution (dissolving rocks). Greatest in the upper course."},
    {q:"A meander forms because:",opts:["The river speeds up in a straight channel","Water flows faster on the outside of bends (eroding) and slower on the inside (depositing)","Heavy rainfall increases the river's volume","The river's source is at high altitude"],c:1,e:"Faster water outside → erosion → river cliff. Slower water inside → deposition → slip-off slope. Over time the bend is exaggerated. Eventually it can be cut off as an oxbow lake."},
    {q:"Deposition occurs when a river:",opts:["Speeds up on a steep slope","Increases its erosion rate","Loses energy and slows down","Reaches its source in the mountains"],c:2,e:"When a river slows down (loses energy), it can no longer carry its load and drops (deposits) it. This happens on the inside of bends, on floodplains, and at the river's mouth."}
  ],
  "island-23":[
    {q:"Population density is calculated as:",opts:["Population × Area","Area ÷ Population","Population ÷ Area (km²)","Population + Area"],c:2,e:"Population density = population ÷ area (km²). The answer is in 'people per km²'. Example: 1,000,000 people in 500 km² = 2,000 people/km²."},
    {q:"Which factor would DISCOURAGE people from settling in an area?",opts:["Flat, fertile land","Reliable water supply","Steep mountainous terrain with a harsh climate","Proximity to a major road"],c:2,e:"Steep, mountainous areas are difficult to build on, hard to farm, and often have extreme weather. Historically, people settled on flat, sheltered land near fresh water."},
    {q:"Urbanisation refers to:",opts:["People moving from cities to the countryside","The growth of farming areas","The increasing proportion of people living in urban areas","The decline of city populations"],c:2,e:"Urbanisation = more people moving to and living in cities/towns, increasing the urban proportion of the population. It is driven by pull factors in cities (jobs, services) and push factors from rural areas."}
  ],
  "island-24":[
    {q:"Simplify the ratio 18 : 24.",opts:["9 : 12","3 : 4","6 : 8","2 : 3"],c:1,e:"HCF of 18 and 24 = 6. Divide both by 6: 18÷6=3, 24÷6=4. Ratio = 3:4. Always divide by the HIGHEST common factor."},
    {q:"Share £60 in the ratio 1 : 3.",opts:["£15 and £45","£20 and £40","£10 and £50","£30 and £30"],c:0,e:"Total parts = 1+3=4. One part = £60÷4=£15. Shares: 1×£15=£15 and 3×£15=£45. Check: £15+£45=£60 ✓"},
    {q:"A train travels 240 km in 3 hours. What is its average speed?",opts:["720 km/h","80 km/h","60 km/h","243 km/h"],c:1,e:"Speed = Distance ÷ Time = 240 ÷ 3 = 80 km/h. Remember the SDT triangle: cover the quantity you want to find."}
  ],
  "island-25":[
    {q:"Shakespeare's plays were performed at:",opts:["The Crystal Palace","The Globe Theatre","Westminster Abbey","The Royal Albert Hall"],c:1,e:"The Globe Theatre, built in 1599 on the South Bank of the Thames, was where most of Shakespeare's plays were first performed. It was open-air and circular."},
    {q:"In the PEE paragraph structure, what does the second 'E' stand for?",opts:["Evidence","Example","Explanation","Extract"],c:2,e:"PEE = Point, Evidence, Explanation. The Explanation shows HOW your evidence supports your point — it's the most important and often weakest part of students' writing."},
    {q:"In the Globe Theatre, 'groundlings' were:",opts:["Wealthy nobles in the upper galleries","The backstage crew and stagehands","Audience members who stood in the yard for the cheapest price","The actors who played villains"],c:2,e:"Groundlings paid 1 penny to stand in the yard (the pit) around the stage. It was the cheapest option and they had no roof or seats. They were very vocal — booing bad performances!"}
  ],
  "island-26":[
    {q:"Which text type would MOST likely use the '5 Ws' structure (who, what, where, when, why)?",opts:["A personal diary","A news article","A gothic short story","A Shakespearean soliloquy"],c:1,e:"News articles answer the 5 Ws in their opening paragraph so readers quickly understand the key facts. This is called the 'inverted pyramid' structure — most important information first."},
    {q:"'Surely we can do better than this?' is an example of:",opts:["Alliteration","A rhetorical question","A metaphor","An anecdote"],c:1,e:"A rhetorical question is asked for effect — the writer doesn't expect an actual answer. It engages the reader and implies the answer is obvious, making the point more persuasively."},
    {q:"AFOREST is a memory aid for persuasive techniques. What does the 'F' stand for?",opts:["Figurative language","Formal register","Facts and statistics","Feelings"],c:2,e:"AFOREST: Anecdote, Fact/statistics, Opinion, Rhetorical question, Emotive language, Statistics, Triplet (rule of three). Facts add credibility and make an argument harder to dismiss."}
  ],
  "island-27":[
    {q:"'The storm raged as she learned of her father's death.' This is an example of:",opts:["Alliteration","Onomatopoeia","Pathetic fallacy","Hyperbole"],c:2,e:"Pathetic fallacy uses weather/environment to reflect emotion or atmosphere. The storm mirrors the character's grief and shock. It's a powerful form of 'show, don't tell'."},
    {q:"Which of these is a feature of Gothic fiction?",opts:["Bright, cheerful settings","A focus on scientific progress","Dark settings, supernatural elements and an atmosphere of dread","Simple, everyday characters"],c:2,e:"Gothic fiction relies on atmosphere: dark/ruined settings, the supernatural, death, madness and mystery. It is designed to create unease and dread in the reader."},
    {q:"A myth typically differs from a legend because a myth:",opts:["Features only human heroes","Is based on real historical events","Explains natural phenomena and features gods","Is always shorter"],c:2,e:"Myths explain the world — why seasons change, how humans got fire, etc. — and feature divine beings. Legends are based (loosely) on historical figures and celebrate human courage or heroism."}
  ],
  "island-28":[
    {q:"Which of these is an example of ASEXUAL reproduction?",opts:["A cat giving birth to kittens","A strawberry plant producing runners","A human embryo developing","Pollination in a flower"],c:1,e:"Strawberry runners are an example of asexual reproduction — one parent produces identical offspring (clones). No fertilisation is involved. Other examples: bulbs, binary fission in bacteria."},
    {q:"In insect-pollinated flowers, pollen is transferred from the:",opts:["Stigma to the anther","Petal to the ovule","Anther to the stigma","Root to the stem"],c:2,e:"Pollen is produced in the anther (male part) and must reach the stigma (female part) for pollination to occur. In insect pollination, insects carry the sticky pollen between flowers."},
    {q:"Which hormone triggers the main changes in females during puberty?",opts:["Testosterone","Insulin","Adrenaline","Oestrogen"],c:3,e:"Oestrogen is the main female sex hormone, produced by the ovaries. It triggers puberty changes including breast development, the menstrual cycle beginning, and growth. Testosterone is the main male sex hormone."}
  ],
  "island-29":[
    {q:"Water (H₂O) is best described as:",opts:["An element","A compound","A mixture","An atom"],c:1,e:"Water is a COMPOUND — it contains two different elements (hydrogen and oxygen) that are chemically bonded together. It cannot be separated by physical means — you need electrolysis to split it."},
    {q:"In the Periodic Table, elements in the same GROUP have:",opts:["The same number of protons","The same mass number","Similar chemical properties","The same number of neutrons"],c:2,e:"Elements in the same group have the same number of electrons in their outer shell, which gives them similar chemical behaviour. E.g. all Group 1 metals react vigorously with water."},
    {q:"Which separation technique would you use to get salt back from salt water?",opts:["Filtration","Chromatography","Evaporation","Distillation"],c:2,e:"Evaporation: heat the salt water so the water evaporates, leaving the salt behind. Filtration separates insoluble solids. Distillation would give you pure water. Chromatography separates dissolved dyes."}
  ],
  "island-30":[
    {q:"A ball held above the ground has which type of energy?",opts:["Kinetic","Chemical","Gravitational potential","Elastic potential"],c:2,e:"Any object raised above the ground has gravitational potential energy (GPE) stored in it due to its position. When released, GPE transfers to kinetic energy as it falls."},
    {q:"Heat transfer through a solid material is called:",opts:["Convection","Radiation","Conduction","Evaporation"],c:2,e:"Conduction occurs in solids — vibrating particles pass energy along the material. Metals are excellent conductors. Convection requires a fluid (liquid or gas). Radiation requires no medium at all."},
    {q:"The Law of Conservation of Energy states that energy:",opts:["Is created when fuels burn","Is destroyed when objects cool down","Cannot be created or destroyed, only transferred","Disappears as 'waste heat'"],c:2,e:"Energy is always conserved — the total energy in a closed system stays constant. What we call 'wasted' energy (usually heat) hasn't disappeared — it's just transferred to the surroundings in a less useful form."}
  ],
  "island-31":[
    {q:"Pope Urban II called for the First Crusade in:",opts:["1066","1095","1215","1348"],c:1,e:"In 1095 at the Council of Clermont, Pope Urban II called on Christian knights to travel to the Holy Land and recapture Jerusalem from the Seljuk Turks. He promised spiritual rewards including forgiveness of sins."},
    {q:"Saladin recaptured Jerusalem from the Crusaders in:",opts:["1099","1187","1215","1291"],c:1,e:"Saladin (Salah ad-Din) retook Jerusalem in 1187, ending almost 90 years of Crusader rule. He was noted for his relatively merciful treatment of the city's Christian inhabitants."},
    {q:"One long-term positive consequence of the Crusades for Europe was:",opts:["The permanent control of the Holy Land","The elimination of the Islamic world","Increased trade and the transfer of Islamic knowledge to Europe","The unification of all Christian kingdoms"],c:2,e:"Through contact with the Islamic world, Europeans encountered advanced knowledge in medicine, astronomy, mathematics and philosophy. This cultural exchange contributed to the European Renaissance."}
  ],
  "island-32":[
    {q:"The Renaissance began in which country?",opts:["England","France","Germany","Italy"],c:3,e:"The Renaissance began in the Italian city-states (Florence, Venice, Rome) around the 14th century. Italy's wealth from trade and banking funded the arts and learning that defined the Renaissance."},
    {q:"Martin Luther's 95 Theses (1517) were primarily a protest against:",opts:["The sale of indulgences by the Church","The power of the English king","The teaching of science in universities","The use of Latin in education"],c:0,e:"Luther objected to the Church selling indulgences — paying money to reduce time in purgatory. He argued salvation came from faith alone (sola fide), not from financial payments to the Church."},
    {q:"Henry VIII's Act of Supremacy (1534) made him:",opts:["King of France","Head of the Church of England","The first Protestant king in Europe","Holy Roman Emperor"],c:1,e:"The Act of Supremacy declared the English monarch (Henry VIII) the Supreme Head of the Church of England, replacing the Pope's authority. This was the legal foundation of the English Reformation."}
  ],
  "island-33":[
    {q:"Which Tudor monarch was known as 'Bloody Mary'?",opts:["Catherine of Aragon","Mary Queen of Scots","Mary I","Elizabeth I"],c:2,e:"Mary I (reigned 1553–58) earned this nickname by burning approximately 300 Protestants at the stake for heresy as she tried to return England to Catholicism. Her reign was deeply unpopular."},
    {q:"The Spanish Armada (1588) was defeated mainly because of:",opts:["A superior English army on land","English fireships at Gravelines and violent storms","The Pope withdrawing his support for Spain","France joining the English side"],c:1,e:"English fireships caused the Armada to scatter at Gravelines. Violent storms then destroyed much of the fleet as it tried to sail home around Scotland and Ireland. The weather was crucial."},
    {q:"Elizabeth I's religious settlement was designed to:",opts:["Make England strictly Calvinist Protestant","Restore full Catholic worship","Create a broad Protestant church that most English people could accept","Please the Pope and maintain good relations with Spain"],c:2,e:"Elizabeth's 'middle way' was deliberately moderate — Protestant in theology but keeping some Catholic-style ceremony. She wanted religious stability after the upheavals of her father, brother and sister's reigns."}
  ],
  "island-34":[
    {q:"Which leg of the triangular trade was known as the 'Middle Passage'?",opts:["Britain to West Africa","West Africa to the Americas","The Americas back to Britain","The overland route through North Africa"],c:1,e:"The Middle Passage was the horrific sea crossing from West Africa to the Caribbean and Americas, where enslaved people were transported in appalling conditions. Up to 20% died during the crossing."},
    {q:"The 1807 Slave Trade Act in Britain:",opts:["Freed all enslaved people in British colonies immediately","Made it illegal to buy or sell enslaved people in British territories","Gave enslaved people the right to vote","Compensated enslaved people for their suffering"],c:1,e:"The 1807 Act abolished the slave TRADE (buying and selling) but NOT slavery itself. Enslaved people in British colonies remained enslaved until the Slavery Abolition Act of 1833."},
    {q:"Olaudah Equiano was significant in the abolition movement because:",opts:["He was a British MP who campaigned in Parliament","He was an enslaved African who wrote a powerful first-hand autobiography","He was a lawyer who proved slavery was illegal","He led a major slave revolt in the Caribbean"],c:1,e:"Equiano's autobiography (1789) gave readers a powerful first-hand account of the slave trade and the Middle Passage. It humanised enslaved people and was hugely influential in building public opposition to slavery."}
  ],
  "island-35":[
    {q:"Which biome is found closest to the Equator and receives the most rainfall?",opts:["Tundra","Coniferous forest","Tropical rainforest","Hot desert"],c:2,e:"The tropical rainforest biome is found near the Equator (0°) where temperatures are consistently high (~27°C) and rainfall is heavy year-round (over 2,000 mm/year), creating ideal conditions for maximum biodiversity."},
    {q:"'Drip-tip leaves' are an adaptation found in the tropical rainforest. Their purpose is to:",opts:["Absorb maximum sunlight","Allow excess rainwater to run off quickly to prevent rot","Store water during dry seasons","Attract pollinating insects"],c:1,e:"The pointed drip-tips help shed the frequent, heavy rainfall quickly. This reduces the weight on leaves and prevents the growth of fungi and mosses that would block sunlight and damage the leaf."},
    {q:"Deforestation of the Amazon rainforest contributes to climate change because:",opts:["It increases rainfall in the region","Trees absorb CO₂; removing them releases stored carbon and reduces future absorption","It makes the soil more fertile","It reduces the number of animals that breathe out CO₂"],c:1,e:"Forests are carbon sinks — they absorb CO₂ from the atmosphere. When trees are burned or cut down, stored carbon is released as CO₂ (a greenhouse gas), contributing to global warming."}
  ],
  "island-36":[
    {q:"What drives the movement of tectonic plates?",opts:["The Moon's gravitational pull","Convection currents in the mantle","Earth's rotation","Magnetic fields in the core"],c:1,e:"Heat from the Earth's core causes convection currents in the semi-molten mantle. Hot rock rises, spreads, cools, and sinks — this movement drags the tectonic plates above it."},
    {q:"At a DESTRUCTIVE plate boundary, what typically happens to the oceanic plate?",opts:["It rises to form new mountains","It melts as it subducts beneath the continental plate","It slides past the continental plate","It splits apart to form a rift valley"],c:1,e:"At destructive boundaries, the denser oceanic plate is forced under (subducts) the lighter continental plate into the mantle, where it melts. This creates volcanoes above and causes earthquakes."},
    {q:"The epicentre of an earthquake is:",opts:["The point underground where the earthquake originates","The point on the surface directly above the focus","The outer edge of the affected area","The point of maximum tsunami height"],c:1,e:"The focus (hypocentre) is the underground origin point. The epicentre is on the surface directly above it — usually where shaking is most intense. News reports give the epicentre location."}
  ],
  "island-37":[
    {q:"The Human Development Index (HDI) combines which THREE measures?",opts:["GDP, military strength, and population size","Life expectancy, education, and income per person","Rainfall, temperature, and land area","Birth rate, death rate, and migration"],c:1,e:"HDI = life expectancy (health) + education (years of schooling/literacy) + GNI per capita (standard of living). It gives a more complete picture of development than GDP alone, which only measures economic output."},
    {q:"Africa is best described as:",opts:["A single country with one government","A continent of 54 diverse countries","Mostly covered in jungle and rainforest","A continent with no major cities"],c:1,e:"Africa is a continent of 54 countries with enormous diversity — in landscapes (deserts, forests, mountains, coastlines), languages (over 2,000), cultures, religions and levels of economic development."},
    {q:"'Leakage' in tourism refers to:",opts:["Water escaping from tourist infrastructure","Tourists leaving the country early","Profits going to foreign companies rather than the local economy","Information about tourist attractions spreading abroad"],c:2,e:"Leakage = the proportion of tourism income that leaves the local economy — e.g. a hotel owned by a foreign company, flights on a foreign airline, food imported from abroad. High leakage reduces the economic benefit to local people."}
  ]
};
