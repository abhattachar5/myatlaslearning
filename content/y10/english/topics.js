// content/y10/english/topics.js — Year 10 English: topic tiles + island definitions.
// Authored by the atlas-content skill. GCSE Language & Literature core skills.
// Slot convention: 04 = Reading Comprehension (passages, deferred), 06 = Writing.
// English island accent colour #f59e0b.

const ENGLISH_TOPICS_Y10 = [
  {id:"e10t-01", name:"Vocabulary for Analysis & Writing", emoji:"📖", hasContent:true,
   description:"Build analytical and sophisticated vocabulary, including subject terminology and tonal word choice for top-band writing."},
  {id:"e10t-02", name:"Sentence Craft & Cohesion", emoji:"🔤", hasContent:true,
   description:"Control a full range of sentence structures and cohesive devices to write with fluency and deliberate effect."},
  {id:"e10t-03", name:"Punctuation for Sophistication", emoji:"✏️", hasContent:true,
   description:"Use the full range of punctuation accurately and for effect, the mark of confident, ambitious writing."},
  {id:"e10t-05", name:"Analysing Non-fiction & Comparing Texts", emoji:"📰", hasContent:true,
   description:"Read and analyse non-fiction and 19th-century texts, and compare writers' viewpoints and methods (Language Paper 2)."},
  {id:"e10t-06", name:"Writing: Transactional & Persuasive", emoji:"✍️", hasContent:true,
   description:"Write effective letters, articles, speeches and essays for a clear audience and purpose (Language Paper 2 writing)."},
  {id:"e10t-07", name:"Poetry Anthology & Comparison", emoji:"🌟", hasContent:true,
   description:"Analyse anthology poems and write comparative responses on theme, method and the poets' perspectives."},
  {id:"e10t-08", name:"Prose & Drama Study", emoji:"🎭", hasContent:true,
   description:"Study a 19th-century novel and a play, analysing character, theme, context and the writer's methods."}
];

// ── Topic 1: Vocabulary for Analysis & Writing (e10t-01) ────────────────────
CURRICULUM.push(
  {id:"e10i-01-1", name:"Subject Terminology", emoji:"🏷️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-01", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Use accurate literary and linguistic terminology to analyse texts precisely.",
   learningOutcomes:["Define key terms (sibilance, juxtaposition, semantic field)","Use terminology accurately in analysis","Avoid vague labels like 'good word'"],
   topics:["Language terms","Structure terms","Using terms accurately"], prerequisites:[]},
  {id:"e10i-01-2", name:"Tonal & Evaluative Vocabulary", emoji:"🎯", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Choose precise words to describe tone and to evaluate a writer's effect.",
   learningOutcomes:["Describe tone precisely (sardonic, wistful, defiant)","Use evaluative verbs (conveys, emphasises, undermines)","Vary analytical sentence stems"],
   topics:["Tone words","Evaluative verbs","Analytical phrasing"], prerequisites:["e10i-01-1"]},
  {id:"e10i-01-3", name:"Ambitious Vocabulary in Writing", emoji:"💎", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:1,
   description:"Deploy sophisticated vocabulary appropriately to lift creative and transactional writing.",
   learningOutcomes:["Select ambitious vocabulary that fits the context","Use connotation deliberately","Avoid forced or misused 'thesaurus' words"],
   topics:["Sophistication","Connotation in writing","Appropriacy"], prerequisites:["e10i-01-2"]}
);

// ── Topic 2: Sentence Craft & Cohesion (e10t-02) ────────────────────────────
CURRICULUM.push(
  {id:"e10i-02-1", name:"Sentence Forms for Effect", emoji:"🏗️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-02", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Use a deliberate range of sentence forms — including minor and complex sentences — for impact.",
   learningOutcomes:["Use simple, compound, complex and minor sentences deliberately","Use sentence length to control pace","Open sentences in varied ways"],
   topics:["Sentence forms","Pace & impact","Varied openers"], prerequisites:[]},
  {id:"e10i-02-2", name:"Cohesion & Discourse Markers", emoji:"🔗", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Link ideas across sentences and paragraphs with cohesive devices and discourse markers.",
   learningOutcomes:["Use discourse markers to structure argument","Use reference and substitution for cohesion","Build clear topic sentences and paragraph links"],
   topics:["Discourse markers","Reference & substitution","Paragraph cohesion"], prerequisites:["e10i-02-1"]},
  {id:"e10i-02-3", name:"Clauses & Grammatical Control", emoji:"⚙️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use subordinate, relative and non-finite clauses accurately to add detail and sophistication.",
   learningOutcomes:["Use relative and subordinate clauses correctly","Use non-finite clauses for concision","Avoid run-ons and comma splices"],
   topics:["Subordinate & relative clauses","Non-finite clauses","Avoiding errors"], prerequisites:["e10i-02-1"]}
);

// ── Topic 3: Punctuation for Sophistication (e10t-03) ───────────────────────
CURRICULUM.push(
  {id:"e10i-03-1", name:"Semicolons, Colons & Dashes", emoji:"⚙️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-03", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Use semicolons, colons and dashes accurately and for deliberate effect in your own writing.",
   learningOutcomes:["Use semicolons and colons accurately","Use dashes for emphasis and parenthesis","Punctuate for rhythm and effect"],
   topics:["Semicolons & colons","Dashes for effect","Punctuation rhythm"], prerequisites:[]},
  {id:"e10i-03-2", name:"Punctuating Complex Sentences", emoji:"📐", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Punctuate multi-clause sentences and parenthesis accurately, avoiding common errors.",
   learningOutcomes:["Punctuate subordinate and relative clauses correctly","Use paired punctuation for parenthesis","Fix comma splices and run-on sentences"],
   topics:["Clause punctuation","Parenthesis","Comma splices"], prerequisites:["e10i-03-1"]},
  {id:"e10i-03-3", name:"Punctuating Quotations & Speech", emoji:"💬", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:1,
   description:"Embed and punctuate quotations in essays and punctuate speech in creative writing.",
   learningOutcomes:["Embed and punctuate quotations correctly","Use ellipsis and square brackets in quotations","Punctuate dialogue accurately"],
   topics:["Quotation punctuation","Ellipsis & brackets","Dialogue"], prerequisites:["e10i-03-1"]}
);

// ── Topic 5: Analysing Non-fiction & Comparing Texts (e10t-05) ──────────────
CURRICULUM.push(
  {id:"e10i-05-1", name:"Reading Non-fiction", emoji:"📰", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-05", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Identify a writer's purpose, viewpoint and methods in non-fiction and 19th-century texts.",
   learningOutcomes:["Identify purpose and viewpoint","Analyse persuasive and rhetorical methods","Select and reference precise evidence"],
   topics:["Purpose & viewpoint","Methods","Selecting evidence"], prerequisites:[]},
  {id:"e10i-05-2", name:"Comparing Writers' Viewpoints", emoji:"⚖️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Compare how two writers present similar topics, their attitudes and methods.",
   learningOutcomes:["Compare writers' attitudes and viewpoints","Compare methods, not just content","Structure a comparative response"],
   topics:["Comparing attitudes","Comparing methods","Comparative structure"], prerequisites:["e10i-05-1"]},
  {id:"e10i-05-3", name:"Evaluating Texts Critically", emoji:"🧭", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate how successfully a writer achieves their purpose and respond to a statement with a personal judgement.",
   learningOutcomes:["Respond to an evaluative statement","Judge how far a writer succeeds, with evidence","Develop a critical personal response"],
   topics:["Evaluation questions","Critical judgement","Personal response"], prerequisites:["e10i-05-1"]}
);

// ── Topic 6: Writing: Transactional & Persuasive (e10t-06, writingTopicId) ───
CURRICULUM.push(
  {id:"e10i-06-1", name:"Letters, Articles & Reports", emoji:"📝", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-06", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Write transactional texts in the right form, register and structure for the audience and purpose.",
   learningOutcomes:["Use the conventions of letters, articles and reports","Match register to audience and purpose","Structure transactional writing clearly"],
   topics:["Form conventions","Register","Structure"], prerequisites:[]},
  {id:"e10i-06-2", name:"Persuasive & Argumentative Writing", emoji:"⚔️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Construct a sustained, persuasive argument using rhetoric, evidence and counter-argument.",
   learningOutcomes:["Sustain a clear line of argument","Use a range of rhetorical devices","Handle counter-argument convincingly"],
   topics:["Line of argument","Rhetoric","Counter-argument"], prerequisites:["e10i-06-1"]},
  {id:"e10i-06-3", name:"Crafting & Accuracy", emoji:"🔧", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:1,
   description:"Craft sophisticated openings and conclusions and ensure technical accuracy under timed conditions.",
   learningOutcomes:["Craft strong openings and conclusions","Vary sentences and vocabulary for effect","Proofread for accuracy under time pressure"],
   topics:["Openings & conclusions","Crafting for effect","Accuracy"], prerequisites:["e10i-06-1"]}
);

// ── Topic 7: Poetry Anthology & Comparison (e10t-07) ────────────────────────
CURRICULUM.push(
  {id:"e10i-07-1", name:"Analysing Anthology Poems", emoji:"🔎", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-07", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Analyse a poem's meaning, methods and context in depth, building on close reading.",
   learningOutcomes:["Analyse language, form and structure together","Link methods to theme and meaning","Use context where relevant"],
   topics:["Close analysis","Form & structure","Context"], prerequisites:[]},
  {id:"e10i-07-2", name:"Comparing Anthology Poems", emoji:"⚖️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Write a comparative essay on two poems, weighing theme, method and perspective.",
   learningOutcomes:["Compare theme and perspective","Compare poetic methods","Sustain a comparative argument"],
   topics:["Comparing theme","Comparing method","Comparative essay"], prerequisites:["e10i-07-1"]},
  {id:"e10i-07-3", name:"Unseen Poetry Skills", emoji:"📜", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Apply close-reading skills to unseen poems quickly and confidently under timed conditions.",
   learningOutcomes:["Read an unseen poem efficiently","Plan a focused response fast","Compare two unseen poems"],
   topics:["Efficient reading","Fast planning","Unseen comparison"], prerequisites:["e10i-07-1"]}
);

// ── Topic 8: Prose & Drama Study (e10t-08) ──────────────────────────────────
CURRICULUM.push(
  {id:"e10i-08-1", name:"Studying a 19th-Century Novel", emoji:"📚", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:3,
   description:"Analyse plot, character, theme and context in a 19th-century novel and the writer's methods.",
   learningOutcomes:["Track theme and character across a novel","Analyse the writer's methods","Link analysis to 19th-century context"],
   topics:["Theme & character","Author's methods","Context"], prerequisites:[]},
  {id:"e10i-08-2", name:"Studying a Play", emoji:"🎭", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Analyse dramatic methods, character and theme in a studied play (modern drama or Shakespeare).",
   learningOutcomes:["Analyse dramatic methods and stagecraft","Track character and theme","Use context to deepen analysis"],
   topics:["Dramatic methods","Character & theme","Context"], prerequisites:["e10i-08-1"]},
  {id:"e10i-08-3", name:"Writing Literature Essays", emoji:"📝", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Plan and write a thesis-driven literature essay with embedded evidence and context.",
   learningOutcomes:["Build a thesis-driven argument","Embed evidence and analyse methods","Integrate context purposefully"],
   topics:["Thesis & argument","Evidence & method","Context integration"], prerequisites:["e10i-08-1"]}
);
