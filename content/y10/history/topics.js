// content/y10/history/topics.js — Year 10 History: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA GCSE History 8145 standard.
// History island accent colour #a855f7.

const HISTORY_TOPICS_Y10 = [
  {id:"h10t-01", name:"Medicine Through Time", emoji:"🏥", hasContent:true,
   description:"Trace the development of medicine from medieval beliefs through Renaissance breakthroughs, industrial public health and modern medical advances."},
  {id:"h10t-02", name:"The Western Front 1914–18", emoji:"⛑️", hasContent:true,
   description:"Examine conditions on the Western Front during World War One, including trench warfare injuries and the medical advances that saved lives."},
  {id:"h10t-03", name:"Elizabethan England", emoji:"👑", hasContent:true,
   description:"Explore Elizabethan society, the religious settlement, voyages of discovery and the golden age of English theatre."},
  {id:"h10t-04", name:"Conflict & Tension 1919–39", emoji:"⚖️", hasContent:true,
   description:"Analyse the Treaty of Versailles, the League of Nations and the road to war through appeasement and aggression."},
  {id:"h10t-05", name:"Source Analysis Skills", emoji:"🔎", hasContent:true,
   description:"Master GCSE source skills including provenance, utility, inference and writing convincing source-based answers."},
  {id:"h10t-06", name:"Essay Writing Skills", emoji:"✍️", hasContent:true,
   description:"Learn to structure essay arguments, integrate evidence effectively and reach a balanced judgement."},
  {id:"h10t-07", name:"Power & the People", emoji:"✊", hasContent:true,
   description:"Study key challenges to authority in Britain from Magna Carta and the English Civil War to the suffragettes and workers' rights."},
  {id:"h10t-08", name:"Norman England", emoji:"🏰", hasContent:true,
   description:"Investigate the Norman Conquest of 1066, the feudal system, the Domesday Book and the role of castles in controlling England."}
];

// ── Topic 1: Medicine Through Time (h10t-01) ─────────────────────────────────
CURRICULUM.push(
  {id:"h10i-01-1", name:"Medieval Medicine", emoji:"📿", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-01", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Understand medieval beliefs about the causes of disease, the role of the Church and the treatments available before the Renaissance.",
   learningOutcomes:["Explain the Theory of the Four Humours and its influence on medieval treatment","Describe the role of the Church in controlling medical knowledge","Assess why there was little medical progress in the medieval period"],
   topics:["Four Humours","Role of the Church","Medieval treatments"], prerequisites:[]},
  {id:"h10i-01-2", name:"Renaissance & Early Modern Medicine", emoji:"🔬", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explore how the Renaissance challenged old ideas, the work of Vesalius and Harvey, and the slow pace of change in treatment.",
   learningOutcomes:["Describe Vesalius's contribution to anatomy and his challenge to Galen","Explain Harvey's discovery of blood circulation","Assess why the Renaissance brought more change in knowledge than in treatment"],
   topics:["Vesalius and anatomy","Harvey and circulation","Knowledge vs treatment"], prerequisites:["h10i-01-1"]},
  {id:"h10i-01-3", name:"Industrial & Modern Medicine", emoji:"💉", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Examine the breakthroughs of Jenner, Pasteur, Koch and Fleming, and the creation of the NHS.",
   learningOutcomes:["Explain Jenner's development of the smallpox vaccination","Describe the Germ Theory of Pasteur and Koch's identification of specific bacteria","Assess the significance of penicillin and the founding of the NHS"],
   topics:["Vaccination","Germ Theory","Penicillin and the NHS"], prerequisites:["h10i-01-2"]}
);

// ── Topic 2: The Western Front 1914–18 (h10t-02) ─────────────────────────────
CURRICULUM.push(
  {id:"h10i-02-1", name:"Trench Conditions & Injuries", emoji:"🩹", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-02", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Investigate the conditions soldiers faced in the trenches and the types of injuries caused by modern weapons.",
   learningOutcomes:["Describe the main health hazards of trench life including trench foot and shell shock","Explain the types of injuries caused by shrapnel, gas and machine guns","Assess the challenges faced by medical staff on the Western Front"],
   topics:["Trench health hazards","Types of injuries","Challenges for medics"], prerequisites:[]},
  {id:"h10i-02-2", name:"Medical Advances on the Western Front", emoji:"🏥", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Examine how the war drove medical innovation including blood transfusions, the Thomas splint, mobile X-rays and the RAMC chain of evacuation.",
   learningOutcomes:["Describe the chain of evacuation from the front line to base hospitals","Explain the significance of blood transfusions, the Thomas splint and the Carrel-Dakin method","Assess how far the Western Front accelerated medical progress"],
   topics:["Chain of evacuation","Blood transfusions and the Thomas splint","Impact on medical progress"], prerequisites:["h10i-02-1"]}
);

// ── Topic 3: Elizabethan England (h10t-03) ───────────────────────────────────
CURRICULUM.push(
  {id:"h10i-03-1", name:"Elizabeth's Court & Government", emoji:"🏛️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-03", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Understand how Elizabeth I governed England, the problems she faced as a female monarch and the structure of Elizabethan government.",
   learningOutcomes:["Describe the structure of Elizabethan government: monarch, Privy Council, Parliament","Explain the challenges Elizabeth faced at the start of her reign","Assess how Elizabeth used patronage and progresses to maintain control"],
   topics:["Structure of government","Challenges of 1558","Patronage and control"], prerequisites:[]},
  {id:"h10i-03-2", name:"Religion in Elizabethan England", emoji:"⛪", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Examine the Elizabethan Religious Settlement, threats from Catholics and Puritans, and the significance of Mary Queen of Scots.",
   learningOutcomes:["Describe the key features of the Religious Settlement of 1559","Explain why Catholics and Puritans opposed the settlement","Assess the threat posed by Mary Queen of Scots and the plots against Elizabeth"],
   topics:["Religious Settlement 1559","Catholic and Puritan threats","Mary Queen of Scots"], prerequisites:["h10i-03-1"]},
  {id:"h10i-03-3", name:"Exploration & Elizabethan Culture", emoji:"🚢", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explore the voyages of Drake and Raleigh, the defeat of the Spanish Armada and the flowering of theatre and the arts.",
   learningOutcomes:["Describe the voyages of Drake and Raleigh and their significance","Explain why the Spanish Armada was defeated in 1588","Assess the importance of theatre and the arts in Elizabethan England"],
   topics:["Drake and Raleigh","The Spanish Armada","Elizabethan theatre"], prerequisites:["h10i-03-1"]}
);

// ── Topic 4: Conflict & Tension 1919–39 (h10t-04) ───────────────────────────
CURRICULUM.push(
  {id:"h10i-04-1", name:"The Treaty of Versailles", emoji:"📜", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-04", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Analyse the terms of the Treaty of Versailles, the motives of the Big Three and German reactions.",
   learningOutcomes:["Describe the key terms of the Treaty of Versailles (GARGLE: Guilt, Armed forces, Reparations, German territory, League of Nations, Extra territories)","Explain the differing aims of Clemenceau, Lloyd George and Wilson","Evaluate whether the treaty was fair or a 'diktat'"],
   topics:["Treaty terms (GARGLE)","The Big Three","German reactions"], prerequisites:[]},
  {id:"h10i-04-2", name:"The League of Nations", emoji:"🤝", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Assess the structure, successes and failures of the League of Nations in maintaining collective security.",
   learningOutcomes:["Describe the structure and powers of the League of Nations","Give examples of the League's successes in the 1920s","Analyse why the League failed over Manchuria and Abyssinia"],
   topics:["Structure of the League","1920s successes","Manchuria and Abyssinia"], prerequisites:["h10i-04-1"]},
  {id:"h10i-04-3", name:"The Road to War: Appeasement", emoji:"📋", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Examine Hitler's foreign policy, the policy of appeasement, the Munich Agreement and the outbreak of war in 1939.",
   learningOutcomes:["Describe Hitler's key foreign-policy actions: rearmament, Rhineland, Anschluss, Sudetenland","Explain the arguments for and against appeasement","Assess why war broke out in September 1939"],
   topics:["Hitler's aggression","Appeasement debate","Outbreak of war"], prerequisites:["h10i-04-2"]}
);

// ── Topic 5: Source Analysis Skills (h10t-05) ────────────────────────────────
CURRICULUM.push(
  {id:"h10i-05-1", name:"Provenance & Context", emoji:"📋", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-05", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Learn to analyse who created a source, when, why and in what context, and how this affects its value as evidence.",
   learningOutcomes:["Identify the key elements of provenance: Nature, Origin, Purpose","Explain how context affects the meaning and value of a source","Apply provenance analysis to unseen sources"],
   topics:["Nature, Origin, Purpose","Contextual knowledge","Applying provenance"], prerequisites:[]},
  {id:"h10i-05-2", name:"Utility & Inference", emoji:"💡", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Master inference skills and evaluate how useful a source is for a specific historical enquiry.",
   learningOutcomes:["Make supported inferences from source content and provenance","Explain the difference between content and provenance when assessing utility","Write a structured 'How useful?' answer using the AQA model"],
   topics:["Making inferences","Content vs provenance","Structuring utility answers"], prerequisites:["h10i-05-1"]},
  {id:"h10i-05-3", name:"How Convincing? & Comparing Sources", emoji:"⚖️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Tackle 'How convincing?' questions by cross-referencing sources with own knowledge and comparing sources effectively.",
   learningOutcomes:["Evaluate how convincing a source is using content, provenance and own knowledge","Compare two sources to identify similarities and differences in their accounts","Structure a top-level 'How convincing?' response"],
   topics:["Evaluating convincingness","Cross-referencing with own knowledge","Comparing sources"], prerequisites:["h10i-05-2"]}
);

// ── Topic 6: Essay Writing Skills (h10t-06) ──────────────────────────────────
CURRICULUM.push(
  {id:"h10i-06-1", name:"Structuring an Argument", emoji:"🧱", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-06", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Learn to plan and structure a GCSE History essay with a clear introduction, developed paragraphs and a supported conclusion.",
   learningOutcomes:["Plan an essay using PEEL paragraphs (Point, Evidence, Explanation, Link)","Write an introduction that addresses the question directly","Organise an argument that considers more than one side"],
   topics:["PEEL paragraphs","Introductions","Two-sided arguments"], prerequisites:[]},
  {id:"h10i-06-2", name:"Using Evidence & Reaching a Judgement", emoji:"📝", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Develop the skill of integrating precise evidence into paragraphs and writing a convincing overall judgement.",
   learningOutcomes:["Integrate specific factual evidence to support each point","Explain how evidence supports or challenges an argument","Write a judgement that weighs both sides and reaches a clear conclusion"],
   topics:["Integrating evidence","Explaining significance","Writing a judgement"], prerequisites:["h10i-06-1"]}
);

// ── Topic 7: Power & the People (h10t-07) ────────────────────────────────────
CURRICULUM.push(
  {id:"h10i-07-1", name:"Magna Carta & Medieval Challenges", emoji:"📜", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-07", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Examine challenges to royal authority in the medieval period including Magna Carta and the Peasants' Revolt.",
   learningOutcomes:["Describe the causes and terms of Magna Carta (1215)","Explain the causes and events of the Peasants' Revolt (1381)","Assess the long-term significance of these medieval challenges to authority"],
   topics:["Magna Carta","The Peasants' Revolt","Long-term significance"], prerequisites:[]},
  {id:"h10i-07-2", name:"The English Civil War", emoji:"⚔️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Investigate the causes and consequences of the English Civil War, the execution of Charles I and the Interregnum.",
   learningOutcomes:["Explain the long-term and short-term causes of the English Civil War","Describe the key events including the trial and execution of Charles I","Assess the significance of the Civil War for the relationship between Parliament and the Crown"],
   topics:["Causes of the Civil War","Execution of Charles I","Parliament vs Crown"], prerequisites:["h10i-07-1"]},
  {id:"h10i-07-3", name:"Suffragettes & Workers' Rights", emoji:"🗳️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Study the campaigns for the vote and fair working conditions, from the Chartists to the suffragettes and trade unions.",
   learningOutcomes:["Describe the aims and methods of the Chartists","Explain the campaigns of the suffragists (NUWSS) and suffragettes (WSPU)","Assess the impact of trade unions and the General Strike (1926) on workers' rights"],
   topics:["The Chartists","Suffragists and suffragettes","Trade unions and the General Strike"], prerequisites:["h10i-07-2"]}
);

// ── Topic 8: Norman England (h10t-08) ────────────────────────────────────────
CURRICULUM.push(
  {id:"h10i-08-1", name:"The Norman Conquest of 1066", emoji:"⚔️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-08", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Investigate the rival claimants to the English throne, the battles of 1066 and William's victory at Hastings.",
   learningOutcomes:["Describe the claims of Harold Godwinson, Harald Hardrada and William of Normandy","Explain the events and significance of the battles of Stamford Bridge and Hastings","Assess why William won the Battle of Hastings"],
   topics:["Rival claimants","Stamford Bridge and Hastings","Why William won"], prerequisites:[]},
  {id:"h10i-08-2", name:"The Feudal System & Control", emoji:"🏰", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Examine how William used the feudal system, castles and the Domesday Book to control England.",
   learningOutcomes:["Describe the structure of the feudal system and the role of each level","Explain how castles helped William control England","Assess the purpose and significance of the Domesday Book (1086)"],
   topics:["The feudal system","Castles as control","The Domesday Book"], prerequisites:["h10i-08-1"]},
  {id:"h10i-08-3", name:"Norman Society & the Church", emoji:"⛪", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explore the changes the Normans brought to English society, including the role of the Church and the impact on Anglo-Saxon life.",
   learningOutcomes:["Describe how the Normans changed the English Church","Explain the impact of Norman rule on Anglo-Saxon landowners and peasants","Assess the extent to which life changed for ordinary people after 1066"],
   topics:["The Norman Church","Impact on Anglo-Saxons","Continuity and change"], prerequisites:["h10i-08-2"]}
);
