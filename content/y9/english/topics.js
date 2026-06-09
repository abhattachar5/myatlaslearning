// content/y9/english/topics.js — Year 9 English: topic tiles + island definitions.
// Authored by the atlas-content skill. GCSE foundations (bridging KS3 → GCSE).
// Slot convention (matches Y7/Y8): 04 = Reading Comprehension (passages-only),
// 06 = Writing (writingTopicId). Comprehension passages are a planned follow-up.
// English island accent colour #f59e0b (matches Year 8).

const ENGLISH_TOPICS_Y9 = [
  {id:"e9t-01", name:"Vocabulary & Etymology", emoji:"📖", hasContent:true,
   description:"Decode unfamiliar words using roots and affixes, build sophisticated vocabulary, and choose precise words for effect."},
  {id:"e9t-02", name:"Grammar for Effect", emoji:"🔤", hasContent:true,
   description:"Use varied sentence structures, the passive voice and modal verbs deliberately to control emphasis and tone."},
  {id:"e9t-03", name:"Advanced Punctuation", emoji:"✏️", hasContent:true,
   description:"Use semicolons, colons, dashes and parenthetical punctuation accurately and for effect in your own writing."},
  {id:"e9t-05", name:"Reading: Language & Structure", emoji:"🔍", hasContent:true,
   description:"Analyse how writers use language and structure to influence the reader, and write analytical responses with evidence."},
  {id:"e9t-06", name:"Writing Craft: Narrative & Descriptive", emoji:"✍️", hasContent:true,
   description:"Craft engaging narrative and descriptive writing using imagery, structure and controlled sentence variety."},
  {id:"e9t-07", name:"Poetry Analysis", emoji:"🌟", hasContent:true,
   description:"Analyse unseen poems and compare them, exploring language, imagery, form and the poet's perspective."},
  {id:"e9t-08", name:"Shakespeare & Drama", emoji:"🎭", hasContent:true,
   description:"Study a Shakespeare play — its plot, dramatic techniques and characters — and write analytical responses."}
];

// ── Topic 1: Vocabulary & Etymology (e9t-01) ────────────────────────────────
CURRICULUM.push(
  {id:"e9i-01-1", name:"Roots, Prefixes & Suffixes", emoji:"🏛️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-01", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Use Greek and Latin roots and affixes to work out the meaning of unfamiliar words.",
   learningOutcomes:["Identify common Greek and Latin roots","Use prefixes and suffixes to decode meaning","Build word families from a shared root"],
   topics:["Greek & Latin roots","Prefixes & suffixes","Word families"], prerequisites:[]},
  {id:"e9i-01-2", name:"Precise & Sophisticated Word Choice", emoji:"🎯", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Choose precise, ambitious vocabulary and understand connotation to strengthen writing.",
   learningOutcomes:["Replace vague words with precise alternatives","Explain connotation and shades of meaning","Use ambitious vocabulary appropriately"],
   topics:["Precision over vagueness","Connotation","Ambitious vocabulary"], prerequisites:["e9i-01-1"]},
  {id:"e9i-01-3", name:"Synonyms, Antonyms & Shades of Meaning", emoji:"🌈", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Distinguish between near-synonyms and choose the word with exactly the right tone.",
   learningOutcomes:["Distinguish near-synonyms by tone","Use antonyms for contrast","Pick the most appropriate word for context"],
   topics:["Near-synonyms","Antonyms & contrast","Tone and register"], prerequisites:["e9i-01-2"]}
);

// ── Topic 2: Grammar for Effect (e9t-02) ────────────────────────────────────
CURRICULUM.push(
  {id:"e9i-02-1", name:"Sentence Variety & Openers", emoji:"🏗️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-02", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Use simple, compound and complex sentences and varied openers to control pace and emphasis.",
   learningOutcomes:["Identify sentence types","Vary sentence openers (fronted adverbials, subordinate clauses)","Use short sentences for impact"],
   topics:["Sentence types","Varied openers","Short sentences for effect"], prerequisites:[]},
  {id:"e9i-02-2", name:"Active, Passive & Emphasis", emoji:"🔄", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Switch between active and passive voice and reorder sentences to shift emphasis.",
   learningOutcomes:["Convert between active and passive voice","Choose voice for purpose","Reorder a sentence to change emphasis"],
   topics:["Active vs passive","Choosing voice for purpose","Word order & emphasis"], prerequisites:["e9i-02-1"]},
  {id:"e9i-02-3", name:"Modals, Tense & Cohesion", emoji:"🔗", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Use modal verbs, consistent tense and cohesive devices to link ideas clearly.",
   learningOutcomes:["Use modal verbs to show possibility and obligation","Keep tense consistent","Link ideas with cohesive devices"],
   topics:["Modal verbs","Tense consistency","Cohesive devices"], prerequisites:["e9i-02-1"]}
);

// ── Topic 3: Advanced Punctuation (e9t-03) ──────────────────────────────────
CURRICULUM.push(
  {id:"e9i-03-1", name:"Semicolons & Colons", emoji:"⚙️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-03", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Use semicolons to join related clauses and colons to introduce lists and explanations.",
   learningOutcomes:["Join independent clauses with a semicolon","Introduce a list or explanation with a colon","Choose between semicolon, colon and full stop"],
   topics:["Semicolons","Colons","Choosing the right mark"], prerequisites:[]},
  {id:"e9i-03-2", name:"Dashes, Brackets & Parenthesis", emoji:"➖", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Use dashes, brackets and paired commas to add parenthetical information for effect.",
   learningOutcomes:["Use a dash for emphasis or interruption","Use paired punctuation for parenthesis","Choose between commas, dashes and brackets"],
   topics:["Dashes for effect","Brackets & parenthesis","Choosing parenthetical marks"], prerequisites:["e9i-03-1"]},
  {id:"e9i-03-3", name:"Apostrophes & Speech Punctuation", emoji:"💬", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Use apostrophes for possession and omission accurately, and punctuate direct speech.",
   learningOutcomes:["Use apostrophes for possession and contraction","Avoid common apostrophe errors","Punctuate direct speech correctly"],
   topics:["Possessive apostrophes","Contractions","Direct speech punctuation"], prerequisites:["e9i-03-1"]}
);

// ── Topic 5: Reading: Language & Structure (e9t-05) ─────────────────────────
CURRICULUM.push(
  {id:"e9i-05-1", name:"Analysing Language", emoji:"🎯", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-05", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Analyse how word choice, imagery and figurative language create effects, using PEE/PETAL.",
   learningOutcomes:["Analyse word choice and connotation","Explain the effect of imagery","Write a clear PEE/PETAL paragraph"],
   topics:["Word-level analysis","Imagery & effect","PEE/PETAL structure"], prerequisites:[]},
  {id:"e9i-05-2", name:"Analysing Structure", emoji:"🏗️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Analyse how a text is structured — openings, shifts, focus and endings — to guide the reader.",
   learningOutcomes:["Comment on whole-text structure","Identify shifts in focus, time or perspective","Analyse sentence-level structural choices"],
   topics:["Whole-text structure","Shifts & focus","Structure for effect"], prerequisites:["e9i-05-1"]},
  {id:"e9i-05-3", name:"Rhetoric & Persuasive Techniques", emoji:"✨", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Identify and analyse rhetorical devices and how writers persuade and position the reader.",
   learningOutcomes:["Identify rhetorical devices (tricolon, anaphora, antithesis)","Explain ethos, pathos and logos","Analyse how a writer positions the reader"],
   topics:["Rhetorical devices","Ethos, pathos, logos","Positioning the reader"], prerequisites:["e9i-05-1"]},
  {id:"e9i-05-4", name:"Inference & Retrieval", emoji:"🔎", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-05", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Retrieve explicit information and make supported inferences from a text.",
   learningOutcomes:["Retrieve explicit information accurately","Make supported inferences","Distinguish explicit from implied meaning"],
   topics:["Retrieval","Inference","Using evidence"], prerequisites:["e9i-05-1"]},
  {id:"e9i-05-5", name:"Building an Analytical Paragraph", emoji:"🧱", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Build a full analytical paragraph that embeds evidence and analyses a writer's methods and effects.",
   learningOutcomes:["Structure a paragraph with point, evidence and analysis","Embed short quotations fluently","Zoom in on individual words and their effects"],
   topics:["Paragraph structure","Embedding evidence","Word-level analysis"], prerequisites:["e9i-05-1"]}
);

// ── Topic 6: Writing Craft: Narrative & Descriptive (e9t-06, writingTopicId) ─
CURRICULUM.push(
  {id:"e9i-06-1", name:"Descriptive Writing", emoji:"🎨", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-06", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Create vivid description using sensory detail, imagery and a controlled focus.",
   learningOutcomes:["Use the five senses to build description","Use imagery (metaphor, simile, personification)","Zoom in on detail for impact"],
   topics:["Sensory detail","Imagery","Zooming in"], prerequisites:[]},
  {id:"e9i-06-2", name:"Narrative Writing", emoji:"📖", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Structure a short narrative with a clear arc, viewpoint and controlled pace.",
   learningOutcomes:["Plan a narrative arc (exposition to resolution)","Choose and sustain a narrative viewpoint","Control pace with sentence and paragraph length"],
   topics:["Narrative arc","Viewpoint","Controlling pace"], prerequisites:["e9i-06-1"]},
  {id:"e9i-06-3", name:"Openings, Endings & Editing", emoji:"🔧", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Craft compelling openings and endings, and edit writing for accuracy and impact.",
   learningOutcomes:["Write hooks and effective openings","Craft satisfying or thought-provoking endings","Edit for accuracy, clarity and impact"],
   topics:["Openings & hooks","Endings","Editing & proofreading"], prerequisites:["e9i-06-1"]}
);

// ── Topic 7: Poetry Analysis (e9t-07) ───────────────────────────────────────
CURRICULUM.push(
  {id:"e9i-07-1", name:"Approaching an Unseen Poem", emoji:"🔎", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-07", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Work out subject, speaker, tone and meaning in an unseen poem and analyse its language.",
   learningOutcomes:["Identify subject, speaker and tone","Analyse imagery and language","Structure an analytical response"],
   topics:["First reading","Imagery & language","Structuring a response"], prerequisites:[]},
  {id:"e9i-07-2", name:"Form, Structure & Sound", emoji:"📐", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Analyse how form, structure and sound devices shape a poem's meaning.",
   learningOutcomes:["Recognise poetic forms (sonnet, free verse)","Analyse enjambment, caesura and the volta","Comment on rhythm and sound devices"],
   topics:["Poetic form","Structure (enjambment, caesura, volta)","Sound devices"], prerequisites:["e9i-07-1"]},
  {id:"e9i-07-3", name:"Comparing Poems", emoji:"⚖️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Compare two poems' themes, methods and perspectives in a structured response.",
   learningOutcomes:["Compare themes and perspectives","Compare poetic methods","Use comparative connectives and structure"],
   topics:["Comparing theme","Comparing methods","Comparative structure"], prerequisites:["e9i-07-1"]}
);

// ── Topic 8: Shakespeare & Drama (e9t-08) ───────────────────────────────────
CURRICULUM.push(
  {id:"e9i-08-1", name:"Reading a Shakespeare Play", emoji:"📜", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-08", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Follow the plot, language and context of a Shakespeare play and decode his English.",
   learningOutcomes:["Summarise plot and key scenes","Decode Shakespearean language","Explain how context shapes the play"],
   topics:["Plot & key scenes","Decoding the language","Context"], prerequisites:[]},
  {id:"e9i-08-2", name:"Dramatic Techniques", emoji:"🎪", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Analyse soliloquy, aside, dramatic irony and stagecraft and their effect on an audience.",
   learningOutcomes:["Explain soliloquy and aside","Analyse dramatic irony and foreshadowing","Comment on staging and performance"],
   topics:["Soliloquy & aside","Dramatic irony","Stagecraft"], prerequisites:["e9i-08-1"]},
  {id:"e9i-08-3", name:"Character & Theme Analysis", emoji:"👑", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Analyse character motivation and development and trace key themes with evidence.",
   learningOutcomes:["Analyse character motivation and change","Trace a theme across the play","Embed quotations in analytical writing"],
   topics:["Character motivation","Themes","Embedding quotations"], prerequisites:["e9i-08-1"]},
  {id:"e9i-08-4", name:"Context & the Writer's Purpose", emoji:"🏛️", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Use context — period, audience and purpose — to deepen analysis (AO3).",
   learningOutcomes:["Explain what context means","Weave context into analysis","Understand AO3"],
   topics:["Context","Writer's purpose","AO3"], prerequisites:["e9i-08-1"]},
  {id:"e9i-08-5", name:"Writing a Shakespeare Essay", emoji:"📝", subject:"English", subjectId:"english", color:"#f59e0b",
   topicId:"e9t-08", yearGroup:"Year 9", difficulty:3, estimatedHours:2,
   description:"Plan and write a full essay response to a Shakespeare extract-to-whole-play question.",
   learningOutcomes:["Plan a thesis-led essay argument","Move between the extract and the whole play","Integrate quotation, analysis and context (AO1–AO3)"],
   topics:["Planning an essay","Extract to whole play","Thesis & structure"], prerequisites:["e9i-08-3"]}
);
