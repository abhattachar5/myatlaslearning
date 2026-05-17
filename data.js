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
   prerequisites:["island-20"],topics:["Population density","Factors affecting settlement","Urban and rural areas","Urbanisation","Push and pull factors","Settlement hierarchy"]}
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
   back:"Urbanisation = the process of more people moving to live in urban areas (towns and cities).\n\nCauses:\nPull factors (into cities):\n• More jobs and higher wages\n• Better services (hospitals, schools)\n• Improved transport links\n\nPush factors (out of rural areas):\n• Fewer jobs (mechanisation of farming)\n• Limited services in countryside\n• Lower wages\n\nOver 55% of the world's population now lives in urban areas.",difficulty:2,category:"concept"}
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
  ]
};
