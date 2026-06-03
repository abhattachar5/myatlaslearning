// content/y11/english/topics.js — Year 11 English: topic tiles + island definitions.
// Authored by the atlas-content skill. GCSE exam technique & revision year.
// Slot convention: 04 = Reading Comprehension (passages, deferred), 06 = Writing.

const ENGLISH_TOPICS_Y11 = [
  {id:"e11t-01", name:"Vocabulary Mastery", emoji:"📖", hasContent:true,
   description:"Refine analytical and creative vocabulary for top-band responses and deploy it under exam conditions."},
  {id:"e11t-02", name:"Grammar & Accuracy under Pressure", emoji:"🔤", hasContent:true,
   description:"Maintain grammatical control and accuracy in timed writing, avoiding common errors and achieving sophistication."},
  {id:"e11t-05", name:"Language Paper 1: Fiction Reading", emoji:"📕", hasContent:true,
   description:"Master the four AQA Language Paper 1 reading questions: locate, analyse language, analyse structure, evaluate."},
  {id:"e11t-06", name:"Language Paper 2: Non-fiction & Comparison", emoji:"📰", hasContent:true,
   description:"Master Language Paper 2 reading: true/false, summary, language analysis, and comparing viewpoints."},
  {id:"e11t-07", name:"Literature: Poetry Anthology & Unseen", emoji:"🌟", hasContent:true,
   description:"Write top-band anthology comparisons and unseen poetry responses under timed conditions."},
  {id:"e11t-08", name:"Literature: Novel & Play", emoji:"🎭", hasContent:true,
   description:"Write thesis-driven extract + whole-text literature essays on your studied novel and play."},
  {id:"e11t-09", name:"Writing for Exams", emoji:"✍️", hasContent:true,
   description:"Produce polished descriptive, narrative and transactional writing under timed exam conditions."}
];

// ── Topic 1: Vocabulary Mastery (e11t-01) ────────────────────────────────────
CURRICULUM.push(
  {id:"e11i-01-1", name:"Analytical Vocabulary Bank", emoji:"🏷️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Build and deploy a bank of precise analytical vocabulary — tone words, evaluative verbs and subject terms.",
   learningOutcomes:["Recall and use 30+ tone words accurately","Use strong evaluative verbs in analysis","Deploy subject terminology precisely"],
   topics:["Tone words","Evaluative verbs","Subject terminology"], prerequisites:[]},
  {id:"e11i-01-2", name:"Creative & Transactional Vocabulary", emoji:"💎", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:1,
   description:"Choose sophisticated, apt vocabulary in creative and transactional exam writing.",
   learningOutcomes:["Select vocabulary that fits tone and audience","Use connotation deliberately","Avoid forced or misused words"],
   topics:["Audience-apt vocabulary","Connotation","Naturalness"], prerequisites:["e11i-01-1"]}
);

// ── Topic 2: Grammar & Accuracy under Pressure (e11t-02) ────────────────────
CURRICULUM.push(
  {id:"e11i-02-1", name:"Common Errors to Eliminate", emoji:"🚫", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-02", yearGroup:"Year 11", difficulty:1, estimatedHours:2,
   description:"Identify and fix the most common SPaG errors: homophones, comma splices, apostrophes and tense shifts.",
   learningOutcomes:["Spot and fix homophone errors (their/there/they're)","Fix comma splices and run-ons","Use apostrophes and tenses correctly"],
   topics:["Homophones","Comma splices","Apostrophes & tense"], prerequisites:[]},
  {id:"e11i-02-2", name:"Sophisticated Sentence Control", emoji:"⚙️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Write with a full range of sentence forms and punctuation accurately under timed conditions.",
   learningOutcomes:["Sustain varied sentence forms in timed writing","Use the full punctuation range accurately","Proofread efficiently"],
   topics:["Sentence forms","Punctuation range","Timed proofreading"], prerequisites:["e11i-02-1"]}
);

// ── Topic 5: Language Paper 1: Fiction Reading (e11t-05) ─────────────────────
CURRICULUM.push(
  {id:"e11i-05-1", name:"Q1–Q3: Locate, Language, Structure", emoji:"📕", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Answer AQA Paper 1 Q1 (locate), Q2 (language) and Q3 (structure) efficiently and with precision.",
   learningOutcomes:["List accurate information for Q1","Analyse language effects for Q2","Analyse structural features for Q3"],
   topics:["Q1 locate","Q2 language","Q3 structure"], prerequisites:[]},
  {id:"e11i-05-2", name:"Q4: Evaluate Critically", emoji:"🧭", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-05", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Write a sustained critical evaluation in response to a statement about a fiction extract (Q4, 20 marks).",
   learningOutcomes:["Respond to an evaluative statement with a clear position","Analyse methods and link to the reader's response","Sustain a personal critical voice"],
   topics:["Evaluative statement","Methods & effect","Critical voice"], prerequisites:["e11i-05-1"]},
  {id:"e11i-05-3", name:"Paper 1 Writing: Creative", emoji:"✍️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Write a polished descriptive or narrative piece for Paper 1 Section B under exam timing.",
   learningOutcomes:["Plan quickly and effectively","Write with crafted language and structure","Proofread for SPaG in the last minutes"],
   topics:["Quick planning","Crafted writing","Proofreading"], prerequisites:["e11i-05-1"]}
);

// ── Topic 6: Language Paper 2: Non-fiction & Comparison (e11t-06) ────────────
CURRICULUM.push(
  {id:"e11i-06-1", name:"Q1–Q3: True/False, Summary, Language", emoji:"📰", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Answer Paper 2 Q1 (true/false), Q2 (summary/synthesis) and Q3 (language) efficiently.",
   learningOutcomes:["Select true statements accurately for Q1","Synthesise and compare information for Q2","Analyse language in a non-fiction source for Q3"],
   topics:["Q1 true/false","Q2 summary","Q3 language"], prerequisites:[]},
  {id:"e11i-06-2", name:"Q4: Compare Viewpoints", emoji:"⚖️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-06", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Compare how two writers present similar topics — their viewpoints and methods (Q4, 16 marks).",
   learningOutcomes:["Compare attitudes and viewpoints","Compare writers' methods, not just content","Sustain a comparative argument"],
   topics:["Comparing viewpoints","Comparing methods","Comparative argument"], prerequisites:["e11i-06-1"]},
  {id:"e11i-06-3", name:"Paper 2 Writing: Transactional", emoji:"📝", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Write a polished letter, article, speech or essay for Paper 2 Section B under exam timing.",
   learningOutcomes:["Match form, audience and purpose","Deploy rhetorical and structural skills","Maintain accuracy under time pressure"],
   topics:["FAP matching","Rhetoric & structure","Timed accuracy"], prerequisites:["e11i-06-1"]}
);

// ── Topic 7: Literature: Poetry Anthology & Unseen (e11t-07) ────────────────
CURRICULUM.push(
  {id:"e11i-07-1", name:"Anthology Comparison Essay", emoji:"⚖️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-07", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Write a top-band comparative essay on an anthology poem and a chosen partner poem.",
   learningOutcomes:["Plan and execute a comparative argument","Analyse language, form and structure in both poems","Integrate context where it illuminates meaning"],
   topics:["Comparative planning","Analysis across poems","Context integration"], prerequisites:[]},
  {id:"e11i-07-2", name:"Unseen Poetry Response", emoji:"📜", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-07", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Write a focused unseen poetry response and an unseen comparison under exam timing.",
   learningOutcomes:["Respond to an unseen poem analytically","Compare two unseen poems efficiently","Manage time across both parts"],
   topics:["Single unseen","Unseen comparison","Time management"], prerequisites:["e11i-07-1"]}
);

// ── Topic 8: Literature: Novel & Play (e11t-08) ─────────────────────────────
CURRICULUM.push(
  {id:"e11i-08-1", name:"Extract + Whole-Text Essay: Novel", emoji:"📚", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-08", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Write a thesis-driven essay on a 19th-century novel starting from an extract, then ranging across the whole text.",
   learningOutcomes:["Analyse the extract closely","Range across the whole text for wider evidence","Link analysis to context purposefully"],
   topics:["Extract analysis","Whole-text range","Context"], prerequisites:[]},
  {id:"e11i-08-2", name:"Extract + Whole-Text Essay: Play", emoji:"🎭", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-08", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Write a thesis-driven essay on your studied play starting from an extract, then ranging across the whole text.",
   learningOutcomes:["Analyse the extract with dramatic awareness","Range across the play for wider evidence","Integrate context and audience awareness"],
   topics:["Extract analysis","Whole-play range","Context & audience"], prerequisites:["e11i-08-1"]},
  {id:"e11i-08-3", name:"Essay Technique & Exam Practice", emoji:"🏆", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-08", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Plan and write a literature essay in timed conditions, applying all techniques with precision.",
   learningOutcomes:["Plan a thesis and structure in 5 minutes","Embed evidence and analyse methods fluently","Proofread and polish under time pressure"],
   topics:["Timed planning","Fluent analysis","Final polish"], prerequisites:["e11i-08-1"]}
);

// ── Topic 9: Writing for Exams (e11t-09, writingTopicId) ────────────────────
CURRICULUM.push(
  {id:"e11i-09-1", name:"Exam Creative Writing", emoji:"🎨", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-09", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Produce polished descriptive or narrative writing under exam conditions (Paper 1 Section B).",
   learningOutcomes:["Plan a descriptive or narrative piece in 5 minutes","Craft atmosphere and character under pressure","Edit for accuracy and impact"],
   topics:["Quick planning","Crafting under pressure","Final edit"], prerequisites:[]},
  {id:"e11i-09-2", name:"Exam Transactional Writing", emoji:"📝", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e11t-09", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Produce polished transactional writing (letter, article, speech) under exam conditions (Paper 2 Section B).",
   learningOutcomes:["Match FAP and deploy rhetoric efficiently","Sustain a clear argument or viewpoint","Achieve accuracy and control under pressure"],
   topics:["FAP & rhetoric","Sustained argument","Timed accuracy"], prerequisites:["e11i-09-1"]}
);
