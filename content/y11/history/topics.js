// content/y11/history/topics.js — Year 11 History: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA GCSE History 8145 standard.
// History island accent colour #a855f7.

const HISTORY_TOPICS_Y11 = [
  {id:"h11t-01", name:"Germany 1890–1945", emoji:"🇩🇪", hasContent:true,
   description:"Examine Kaiser Wilhelm II's Germany, the Weimar Republic's struggles and successes, and the rise and rule of the Nazi Party."},
  {id:"h11t-02", name:"Conflict & Tension in Asia 1950–75", emoji:"🌏", hasContent:true,
   description:"Analyse the Korean War, the Vietnam War and the wider Cold War struggle for influence in Asia."},
  {id:"h11t-03", name:"Britain: Health & the People", emoji:"🏥", hasContent:true,
   description:"Trace key developments in British public health from medieval epidemics to the founding of the NHS and modern challenges."},
  {id:"h11t-04", name:"American West c1835–95", emoji:"🤠", hasContent:true,
   description:"Explore the settlement of the American West, the experience of Native Americans, the coming of the railroads and the struggle for law and order."},
  {id:"h11t-05", name:"Exam Technique: Source Questions", emoji:"🔍", hasContent:true,
   description:"Master inference, utility, 'how convincing' and provenance skills for GCSE source-based questions."},
  {id:"h11t-06", name:"Exam Technique: Essay Questions", emoji:"✍️", hasContent:true,
   description:"Perfect 12-mark explain questions and 16-mark judgement essays with clear structure and precise evidence."},
  {id:"h11t-07", name:"Revision & Exam Practice", emoji:"📝", hasContent:true,
   description:"Consolidate key dates, practise revision strategies and build confidence with timed exam-style practice."}
];

// ── Topic 1: Germany 1890–1945 (h11t-01) ────────────────────────────────────
CURRICULUM.push(
  {id:"h11i-01-1", name:"Kaiser's Germany 1890–1918", emoji:"👑", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-01", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Understand Germany under Kaiser Wilhelm II, including his autocratic rule, militarism, growing unrest and the impact of the First World War.",
   learningOutcomes:["Describe the political structure of the Second Reich and the Kaiser's autocratic power","Explain the growth of opposition from the SPD and the impact of industrialisation","Assess how the First World War led to the abdication of the Kaiser in November 1918"],
   topics:["The Second Reich","Industrialisation and the SPD","Impact of WWI and abdication"], prerequisites:[]},
  {id:"h11i-01-2", name:"The Weimar Republic 1918–33", emoji:"🗳️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Analyse the strengths and weaknesses of the Weimar Republic, the crises of 1919–23, the Stresemann era and the impact of the Great Depression.",
   learningOutcomes:["Describe the strengths and weaknesses of the Weimar Constitution","Explain the crises of 1919–23: Spartacist revolt, Kapp Putsch, hyperinflation","Assess the impact of the Great Depression on support for extremist parties"],
   topics:["Weimar Constitution","Crises of 1919–23","Stresemann and the Depression"], prerequisites:["h11i-01-1"]},
  {id:"h11i-01-3", name:"Nazi Rise & Rule 1933–45", emoji:"⚙️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Examine how Hitler became dictator, Nazi methods of control, life in Nazi Germany and the persecution of minorities.",
   learningOutcomes:["Explain how Hitler consolidated power between January 1933 and August 1934","Describe Nazi methods of control: propaganda, terror, censorship, concordat","Assess the impact of Nazi policies on women, young people and Jewish communities"],
   topics:["Consolidation of power","Propaganda and terror","Life in Nazi Germany"], prerequisites:["h11i-01-2"]}
);

// ── Topic 2: Conflict & Tension in Asia 1950–75 (h11t-02) ──────────────────
CURRICULUM.push(
  {id:"h11i-02-1", name:"The Korean War 1950–53", emoji:"⚔️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-02", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Understand the causes, course and consequences of the Korean War, including the roles of the USA, China and the UN.",
   learningOutcomes:["Explain the division of Korea and the causes of the war in 1950","Describe the key phases: North Korean invasion, Inchon, Chinese intervention, stalemate","Assess the consequences of the war for Korea, the USA and the Cold War"],
   topics:["Division of Korea","Key phases of the war","Consequences and the armistice"], prerequisites:[]},
  {id:"h11i-02-2", name:"The Vietnam War 1955–75", emoji:"🚁", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Analyse US involvement in Vietnam, guerrilla warfare tactics, the Tet Offensive and the reasons for American withdrawal.",
   learningOutcomes:["Explain why the USA became involved in Vietnam from the 1950s to the 1960s","Describe Viet Cong guerrilla tactics and US counter-strategies including Operation Rolling Thunder","Assess why the USA withdrew from Vietnam by 1973"],
   topics:["US escalation","Guerrilla tactics and US strategies","Withdrawal and consequences"], prerequisites:["h11i-02-1"]},
  {id:"h11i-02-3", name:"The Cold War in Asia", emoji:"🌐", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Examine the wider Cold War context in Asia: containment, domino theory, proxy wars and the role of China and the USSR.",
   learningOutcomes:["Explain the policy of containment and the domino theory","Describe China's role in supporting communist movements in Korea and Vietnam","Assess the significance of the Cold War in shaping conflict in Asia 1950–75"],
   topics:["Containment and domino theory","China and the USSR","Cold War legacy in Asia"], prerequisites:["h11i-02-1"]}
);

// ── Topic 3: Britain: Health & the People (h11t-03) ─────────────────────────
CURRICULUM.push(
  {id:"h11i-03-1", name:"Public Health Before 1800", emoji:"🏚️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-03", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Explore public health challenges from the medieval period to the 18th century, including the Black Death and early attempts at quarantine.",
   learningOutcomes:["Describe public health conditions in medieval towns and the impact of the Black Death","Explain the limited role of government in public health before 1800","Assess why there was so little improvement in public health during this period"],
   topics:["Medieval public health","The Black Death","Government inaction"], prerequisites:[]},
  {id:"h11i-03-2", name:"Public Health 1800–Present", emoji:"💊", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Examine the public health reforms of the 19th and 20th centuries, from cholera and the Great Stink to the Beveridge Report and the NHS.",
   learningOutcomes:["Describe the impact of cholera epidemics and the work of John Snow","Explain the significance of the 1875 Public Health Act and the Great Stink","Assess the importance of the Beveridge Report (1942) and the founding of the NHS (1948)"],
   topics:["Cholera and John Snow","Public Health Acts","Beveridge and the NHS"], prerequisites:["h11i-03-1"]}
);

// ── Topic 4: American West c1835–95 (h11t-04) ──────────────────────────────
CURRICULUM.push(
  {id:"h11i-04-1", name:"Native Americans & Early Settlers", emoji:"🏕️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-04", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Understand the way of life of Plains Indians, early migration westward and the significance of the Oregon and California Trails.",
   learningOutcomes:["Describe the beliefs, customs and way of life of the Plains Indians","Explain the reasons for early migration west: Manifest Destiny, gold, land","Assess the initial impact of white settlement on Native American communities"],
   topics:["Plains Indian life","Manifest Destiny and migration","Early contact and conflict"], prerequisites:[]},
  {id:"h11i-04-2", name:"Railroads, Cattle & Farming", emoji:"🚂", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Examine how the transcontinental railroad, the cattle industry and homesteading transformed the American West.",
   learningOutcomes:["Describe the significance of the transcontinental railroad (completed 1869)","Explain the rise and decline of the cattle industry and the role of cowboys","Assess the challenges faced by homesteaders on the Great Plains"],
   topics:["The transcontinental railroad","Cattle industry and cowboys","Homesteaders and farming"], prerequisites:["h11i-04-1"]},
  {id:"h11i-04-3", name:"Conflict & Law on the Plains", emoji:"⚖️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Analyse the conflict between settlers and Native Americans, the destruction of the buffalo, and the struggle for law and order.",
   learningOutcomes:["Describe key conflicts: Little Bighorn (1876), Wounded Knee (1890)","Explain the impact of reservations and the destruction of the buffalo on Native Americans","Assess the challenges of maintaining law and order in western towns"],
   topics:["Little Bighorn and Wounded Knee","Reservations and the buffalo","Law and order"], prerequisites:["h11i-04-1"]}
);

// ── Topic 5: Exam Technique: Source Questions (h11t-05) ─────────────────────
CURRICULUM.push(
  {id:"h11i-05-1", name:"Inference & Utility", emoji:"💡", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-05", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Sharpen inference skills and master 'How useful?' questions by evaluating content, provenance and contextual knowledge.",
   learningOutcomes:["Make supported inferences from sources using content and provenance","Evaluate the utility of a source for a specific enquiry using the AQA framework","Structure a Level 4 'How useful?' answer with content analysis, provenance evaluation and own knowledge"],
   topics:["Supported inferences","Utility framework","Level 4 structure"], prerequisites:[]},
  {id:"h11i-05-2", name:"How Convincing & Provenance", emoji:"🔎", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Tackle 'How convincing?' questions with confidence and apply provenance analysis (Nature, Origin, Purpose) to reach top-level answers.",
   learningOutcomes:["Evaluate how convincing an interpretation is by cross-referencing with own knowledge","Apply NOP (Nature, Origin, Purpose) analysis to assess the reliability and value of a source","Write a structured Level 4 'How convincing?' answer with a clear judgement"],
   topics:["How convincing? technique","NOP provenance analysis","Cross-referencing own knowledge"], prerequisites:["h11i-05-1"]}
);

// ── Topic 6: Exam Technique: Essay Questions (h11t-06) ──────────────────────
CURRICULUM.push(
  {id:"h11i-06-1", name:"12-Mark Explain Questions", emoji:"📊", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-06", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Master the 12-mark 'Explain why' question format with structured paragraphs, precise evidence and clear causal links.",
   learningOutcomes:["Plan a 12-mark answer with three developed PEE (Point, Evidence, Explanation) paragraphs","Integrate specific factual evidence to support each causal factor","Link factors together to show how causes connect"],
   topics:["PEE paragraphs","Precise evidence","Linking factors"], prerequisites:[]},
  {id:"h11i-06-2", name:"16-Mark Judgement Essays", emoji:"⚖️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Build the skills to tackle 16-mark 'How far do you agree?' essays with balanced argument, sustained judgement and a strong conclusion.",
   learningOutcomes:["Write a clear thesis in the introduction that directly addresses the question","Develop both sides of the argument with specific supporting evidence","Reach a sustained, evidenced overall judgement in the conclusion"],
   topics:["Thesis and introduction","Two-sided argument","Sustained judgement"], prerequisites:["h11i-06-1"]},
  {id:"h11i-06-3", name:"Exam Timing & Planning", emoji:"⏱️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Develop strategies for planning essays under timed conditions, allocating marks per minute and avoiding common time-management errors.",
   learningOutcomes:["Allocate time effectively across a GCSE History exam paper","Create quick essay plans in under three minutes","Identify and avoid the most common time-management mistakes in exams"],
   topics:["Time allocation","Quick planning techniques","Avoiding common errors"], prerequisites:["h11i-06-1"]}
);

// ── Topic 7: Revision & Exam Practice (h11t-07) ────────────────────────────
CURRICULUM.push(
  {id:"h11i-07-1", name:"Key Dates & Recall", emoji:"📅", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-07", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Build confident recall of essential dates, events and key individuals across all GCSE History topics.",
   learningOutcomes:["Recall key dates and events for Germany 1890–1945, Conflict in Asia and the American West","Use active recall techniques such as flashcards, retrieval grids and timelines","Identify and fill gaps in factual knowledge before the exam"],
   topics:["Essential dates and events","Active recall techniques","Gap analysis"], prerequisites:[]},
  {id:"h11i-07-2", name:"Timed Practice & Revision Strategies", emoji:"🎯", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h11t-07", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Practise full exam questions under timed conditions and develop effective revision strategies for the final weeks before the exam.",
   learningOutcomes:["Complete full source and essay questions within exam time limits","Apply spaced repetition and interleaving to revision schedules","Evaluate own answers using AQA mark schemes and identify areas for improvement"],
   topics:["Timed exam practice","Spaced repetition and interleaving","Self-assessment with mark schemes"], prerequisites:["h11i-07-1"]}
);
