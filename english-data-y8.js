// english-data-y8.js — Year 8 English: topic tiles + island definitions

// ── ENGLISH TOPICS YEAR 8 (8 main tiles on dashboard) ───────────────────────
const ENGLISH_TOPICS_Y8 = [
  {id:"e8t-01",name:"Vocabulary Building",emoji:"📖",hasContent:true,
   description:"Explore word roots and etymology, build academic vocabulary, interpret figurative language in context, and learn domain-specific terminology across subjects."},
  {id:"e8t-02",name:"Grammar & Sentence Structure",emoji:"🔤",hasContent:true,
   description:"Master active and passive voice, the subjunctive mood, complex sentence structures, relative and conditional clauses, and a full range of verb tenses and moods."},
  {id:"e8t-03",name:"Punctuation & Conventions",emoji:"✏️",hasContent:true,
   description:"Use advanced punctuation confidently — semicolons, colons, dashes and hyphens — apply parenthetical commas, and punctuate direct and indirect speech and dialogue correctly."},
  {id:"e8t-04",name:"Reading Comprehension",emoji:"📝",hasContent:true,
   description:"Make inferences and deductions in complex texts, compare texts, evaluate arguments, identify bias, and synthesise information from multiple sources."},
  {id:"e8t-05",name:"Reading Strategies & Analysis",emoji:"🔍",hasContent:true,
   description:"Analyse language effects and structure, explore the writer's craft and rhetorical devices, understand genre conventions, and develop critical reading skills."},
  {id:"e8t-06",name:"Writing Craft",emoji:"✍️",hasContent:true,
   description:"Develop persuasive and discursive writing, apply creative writing techniques, edit and proofread with precision, control tone and register, and write for different audiences and purposes."},
  {id:"e8t-07",name:"Poetry & Literary Analysis",emoji:"🌟",hasContent:true,
   description:"Analyse unseen poetry, compare poems, explore poetic form and structure, write about language effects with confidence, and study war poetry and nature poetry."},
  {id:"e8t-08",name:"Shakespeare & Drama",emoji:"🎭",hasContent:true,
   description:"Study a full Shakespeare play, explore dramatic techniques including soliloquy and aside, analyse character motivation, and write analytical essays about drama."}
];

// ── YEAR 8 ENGLISH ISLANDS → pushed into CURRICULUM ─────────────────────────

// ══════════════════════════════════════════════════════════════════════
// TOPIC 1 — VOCABULARY BUILDING (e8t-01)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-01-1",name:"Word Roots & Etymology",emoji:"🏛️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-01",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Trace the origins of English words through Greek, Latin, Old English and French roots to decode unfamiliar vocabulary.",
    learningOutcomes:[
      "Identify Greek and Latin roots in academic and everyday vocabulary",
      "Use etymology to work out the meaning of unfamiliar words",
      "Trace word origins and explain how meanings have changed over time"
    ],
    topics:[
      "Greek roots (auto, bio, graph, logos, phon, scope)",
      "Latin roots (dict, port, rupt, scrib, spec, struct)",
      "Old English and French influences on modern English",
      "How word origins help unlock meaning",
      "Tracing word histories using etymology",
      "Word families and root patterns"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-01-2",name:"Academic Vocabulary",emoji:"🎓",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-01",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Build a bank of Tier 2 academic vocabulary used across subjects to strengthen reading and writing.",
    learningOutcomes:[
      "Define and use common academic words (e.g. analyse, evaluate, justify, significant)",
      "Choose precise academic vocabulary to improve the quality of writing",
      "Recognise academic vocabulary in context across different subjects"
    ],
    topics:[
      "Tier 2 vocabulary: what makes a word academic",
      "Common academic verbs (analyse, evaluate, compare, justify)",
      "Common academic adjectives (significant, fundamental, complex)",
      "Using academic vocabulary in sentences",
      "Academic vocabulary across subjects",
      "Replacing informal language with academic alternatives"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-01-3",name:"Figurative Language in Context",emoji:"🎨",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-01",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Interpret figurative language — idioms, euphemisms, oxymorons and extended metaphors — within literary and non-fiction texts.",
    learningOutcomes:[
      "Interpret idioms, euphemisms and oxymorons in context",
      "Explain how extended metaphors develop meaning across a text",
      "Analyse the effect of figurative language on the reader's understanding"
    ],
    topics:[
      "Idioms and their meanings",
      "Euphemisms and their purposes",
      "Oxymorons and paradoxes",
      "Extended metaphors in literature",
      "Figurative language in non-fiction",
      "Analysing the effect of figurative language on the reader"
    ],
    prerequisites:["e8i-01-1"]
  },
  {
    id:"e8i-01-4",name:"Domain-Specific Terminology",emoji:"📚",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-01",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Learn and apply specialist vocabulary from science, history, geography and other subjects to strengthen cross-curricular literacy.",
    learningOutcomes:[
      "Define domain-specific terms from science, history and geography",
      "Use context clues to infer the meaning of specialist vocabulary",
      "Apply domain-specific terminology accurately in written responses"
    ],
    topics:[
      "Scientific terminology (hypothesis, variable, catalyst, osmosis)",
      "Historical terminology (empire, reformation, revolution, treaty)",
      "Geographical terminology (erosion, urbanisation, tectonic, migration)",
      "Using context to decode specialist words",
      "Cross-curricular vocabulary strategies",
      "Applying specialist vocabulary in extended writing"
    ],
    prerequisites:["e8i-01-2"]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 2 — GRAMMAR & SENTENCE STRUCTURE (e8t-02)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-02-1",name:"Active & Passive Voice",emoji:"🔄",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-02",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Identify and convert between active and passive voice, and choose the appropriate voice for different writing purposes.",
    learningOutcomes:[
      "Identify whether a sentence is in the active or passive voice",
      "Convert sentences between active and passive voice",
      "Choose the appropriate voice for different types of writing"
    ],
    topics:[
      "What is active voice",
      "What is passive voice",
      "Identifying the agent in passive sentences",
      "Converting active to passive and passive to active",
      "When to use passive voice (scientific writing, formal reports)",
      "Effect of voice choice on tone and emphasis"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-02-2",name:"Complex Sentence Structures",emoji:"🏗️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-02",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Build compound-complex sentences using subordinate clauses, embedded clauses and varied openers to add sophistication to writing.",
    learningOutcomes:[
      "Construct compound-complex sentences using multiple clauses",
      "Use embedded clauses to add detail and variety",
      "Vary sentence openers to improve the flow and quality of writing"
    ],
    topics:[
      "Review of simple, compound and complex sentences",
      "Compound-complex sentences",
      "Embedded clauses (parenthetical information)",
      "Fronted adverbials and varied openers",
      "Subordination for emphasis and clarity",
      "Sentence variety for effect in extended writing"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-02-3",name:"Relative & Conditional Clauses",emoji:"🔗",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-02",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Use relative clauses to add information and conditional clauses to express hypothetical situations.",
    learningOutcomes:[
      "Use relative clauses with who, which, that, whose and where correctly",
      "Distinguish between defining and non-defining relative clauses",
      "Construct zero, first, second and third conditional sentences"
    ],
    topics:[
      "Relative pronouns: who, which, that, whose, where",
      "Defining relative clauses",
      "Non-defining relative clauses (with commas)",
      "Zero and first conditional (real situations)",
      "Second and third conditional (hypothetical situations)",
      "Using conditionals for effect in writing"
    ],
    prerequisites:["e8i-02-2"]
  },
  {
    id:"e8i-02-4",name:"Subjunctive Mood & Verb Moods",emoji:"💭",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-02",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Understand the subjunctive mood and distinguish between indicative, imperative and subjunctive moods in writing.",
    learningOutcomes:[
      "Identify the subjunctive mood in formal writing and speech",
      "Distinguish between indicative, imperative and subjunctive moods",
      "Use the subjunctive mood correctly in formal and academic writing"
    ],
    topics:[
      "Indicative mood: stating facts and asking questions",
      "Imperative mood: giving commands and instructions",
      "Subjunctive mood: wishes, demands and hypotheticals",
      "Common subjunctive structures (if I were, it is essential that)",
      "The subjunctive in formal writing",
      "Choosing the correct mood for purpose and audience"
    ],
    prerequisites:["e8i-02-1"]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 3 — PUNCTUATION & CONVENTIONS (e8t-03)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-03-1",name:"Semicolons & Colons",emoji:"⚙️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-03",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Use semicolons to link related independent clauses and colons to introduce lists, explanations and elaborations.",
    learningOutcomes:[
      "Use a semicolon to join two closely related independent clauses",
      "Use a colon to introduce a list, explanation or elaboration",
      "Choose correctly between semicolons, colons and full stops"
    ],
    topics:[
      "Semicolons between independent clauses",
      "Semicolons in complex lists",
      "Colons before lists",
      "Colons before explanations and elaborations",
      "Choosing between semicolons, colons and full stops",
      "Common errors with semicolons and colons"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-03-2",name:"Dashes & Hyphens",emoji:"➖",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-03",yearGroup:"Year 8",difficulty:1,estimatedHours:1,
    description:"Distinguish between dashes and hyphens, using dashes for emphasis and parenthetical information and hyphens to form compound words.",
    learningOutcomes:[
      "Use dashes to add emphasis, interruption or parenthetical information",
      "Use hyphens correctly in compound adjectives and compound nouns",
      "Distinguish between en dashes, em dashes and hyphens"
    ],
    topics:[
      "Dashes for emphasis and interruption",
      "Dashes for parenthetical information (paired dashes)",
      "Hyphens in compound adjectives (well-known, hard-working)",
      "Hyphens in compound nouns and prefixes",
      "En dash vs em dash vs hyphen",
      "Common errors with dashes and hyphens"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-03-3",name:"Parenthetical Commas & Brackets",emoji:"📌",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-03",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Use parenthetical commas, brackets and dashes to embed additional information within sentences.",
    learningOutcomes:[
      "Use parenthetical commas to add non-essential information to a sentence",
      "Use brackets for asides, clarifications and additional detail",
      "Choose between commas, dashes and brackets for parenthetical information"
    ],
    topics:[
      "Parenthetical commas with embedded clauses",
      "Brackets for asides and clarifications",
      "Dashes as an alternative to brackets",
      "Restrictive vs non-restrictive information",
      "Choosing between commas, dashes and brackets",
      "Common errors with parenthetical punctuation"
    ],
    prerequisites:["e8i-03-1"]
  },
  {
    id:"e8i-03-4",name:"Direct & Indirect Speech",emoji:"💬",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-03",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Punctuate direct speech accurately and convert between direct and indirect (reported) speech.",
    learningOutcomes:[
      "Punctuate direct speech with correct use of inverted commas and reporting clauses",
      "Convert direct speech to indirect (reported) speech accurately",
      "Understand how tense and pronoun changes work in reported speech"
    ],
    topics:[
      "Punctuating direct speech: inverted commas and reporting clauses",
      "New speaker, new line in dialogue",
      "Converting direct speech to indirect speech",
      "Tense changes in reported speech (backshift)",
      "Pronoun changes in reported speech",
      "Punctuating dialogue in creative writing"
    ],
    prerequisites:["e8i-03-1"]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 4 — READING COMPREHENSION (e8t-04)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-04-1",name:"Inference & Deduction",emoji:"🔎",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-04",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Make inferences and deductions from complex fiction and non-fiction texts, using evidence to support conclusions.",
    learningOutcomes:[
      "Make inferences about character, setting and mood using textual evidence",
      "Distinguish between explicit information and implied meaning",
      "Support inferences with precise quotations from the text"
    ],
    topics:[
      "What is inference vs what is stated explicitly",
      "Inferring character feelings and motivations",
      "Inferring mood and atmosphere from descriptive language",
      "Deduction: drawing conclusions from multiple clues",
      "Supporting inferences with textual evidence",
      "Inference in non-fiction texts"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-04-2",name:"Comparing Texts",emoji:"⚖️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-04",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Compare two or more texts on the same topic, examining how purpose, audience, language and structure differ.",
    learningOutcomes:[
      "Identify similarities and differences in purpose and audience between texts",
      "Compare how two writers use language and structure to present the same topic",
      "Write a structured comparative response using evidence from both texts"
    ],
    topics:[
      "Comparing purpose and audience across texts",
      "Comparing language choices and tone",
      "Comparing structural features and organisation",
      "Same topic, different genre or perspective",
      "Using connectives for comparison (similarly, whereas, in contrast)",
      "Writing a comparative paragraph"
    ],
    prerequisites:["e8i-04-1"]
  },
  {
    id:"e8i-04-3",name:"Evaluating Arguments & Bias",emoji:"⚔️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-04",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Evaluate the strength of arguments in persuasive and informational texts and identify bias, opinion and misleading claims.",
    learningOutcomes:[
      "Evaluate whether an argument is well-supported with evidence or relies on assertion",
      "Identify bias, loaded language and one-sided perspectives in texts",
      "Distinguish between fact, opinion and misleading statistics"
    ],
    topics:[
      "Identifying claims and supporting evidence",
      "Evaluating the strength of an argument",
      "Recognising bias and loaded language",
      "Distinguishing fact from opinion",
      "Misleading statistics and cherry-picked evidence",
      "Writing a critical evaluation of an argument"
    ],
    prerequisites:["e8i-04-1"]
  },
  {
    id:"e8i-04-4",name:"Synthesising Information",emoji:"🧩",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-04",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Synthesise information from multiple sources to build a coherent understanding of a topic.",
    learningOutcomes:[
      "Gather key information from two or more sources on the same topic",
      "Identify where sources agree, disagree or offer complementary information",
      "Produce a synthesis paragraph that draws on multiple sources"
    ],
    topics:[
      "Reading for key information across multiple sources",
      "Identifying agreement and disagreement between sources",
      "Identifying complementary information",
      "Note-making and summarising from multiple texts",
      "Writing a synthesis paragraph",
      "Citing sources in a synthesis response"
    ],
    prerequisites:["e8i-04-2","e8i-04-3"]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 5 — READING STRATEGIES & ANALYSIS (e8t-05)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-05-1",name:"Analysing Language Effects",emoji:"🎯",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-05",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Analyse how writers use word choice, imagery and figurative language to create specific effects on the reader.",
    learningOutcomes:[
      "Identify and analyse the effect of specific word choices on the reader",
      "Explain how imagery and figurative language create mood and atmosphere",
      "Write analytical responses about language using PEE/PEEL structure"
    ],
    topics:[
      "Analysing word choice (connotation, register, precision)",
      "Analysing imagery: visual, auditory, tactile",
      "Analysing figurative language effects",
      "How language creates mood and atmosphere",
      "Using PEE/PEEL to write about language",
      "Commenting on the effect of language on the reader"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-05-2",name:"Structural Analysis",emoji:"🏗️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-05",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Analyse how writers structure texts at whole-text, paragraph and sentence level to guide the reader and create effects.",
    learningOutcomes:[
      "Analyse how a text is structured at whole-text level (opening, development, ending)",
      "Explain how paragraph length, order and focus create effects",
      "Analyse sentence-level structural choices (short sentences, listing, repetition)"
    ],
    topics:[
      "Whole-text structure: beginnings, middles and endings",
      "Shifts in focus, time or perspective",
      "Paragraph structure and topic sentences",
      "Sentence length and structure for effect",
      "Flashbacks, foreshadowing and cyclical structure",
      "Writing about structure in analytical responses"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-05-3",name:"Writer's Craft & Rhetorical Devices",emoji:"✨",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-05",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Identify and analyse rhetorical devices — repetition, tricolon, antithesis, anaphora — and understand how writers craft texts to persuade and engage.",
    learningOutcomes:[
      "Identify rhetorical devices including tricolon, antithesis and anaphora",
      "Analyse how rhetorical devices contribute to a writer's argument or message",
      "Evaluate how a writer's craft choices engage and persuade the reader"
    ],
    topics:[
      "Rhetorical questions and their effects",
      "Tricolon (rule of three) in persuasion",
      "Antithesis and juxtaposition",
      "Anaphora and repetition for emphasis",
      "Emotive language and appeals (ethos, pathos, logos)",
      "Evaluating the overall effectiveness of a text"
    ],
    prerequisites:["e8i-05-1"]
  },
  {
    id:"e8i-05-4",name:"Genre Conventions & Critical Reading",emoji:"📑",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-05",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Understand the conventions of different genres and read critically to question, challenge and evaluate what a writer presents.",
    learningOutcomes:[
      "Identify the conventions of key genres (gothic, detective, dystopian, travel writing)",
      "Read critically by questioning the writer's choices, assumptions and reliability",
      "Evaluate how genre conventions shape the reader's expectations and responses"
    ],
    topics:[
      "Genre conventions: gothic fiction",
      "Genre conventions: detective and mystery fiction",
      "Genre conventions: dystopian fiction",
      "Genre conventions: travel writing and journalism",
      "Critical reading: questioning the writer's perspective",
      "Evaluating reliability and credibility of a text"
    ],
    prerequisites:["e8i-05-2"]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 6 — WRITING CRAFT (e8t-06)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-06-1",name:"Persuasive Writing",emoji:"⚔️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-06",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Plan and write persuasive texts using rhetorical devices, evidence and a clear structure to convince a target audience.",
    learningOutcomes:[
      "Plan a persuasive text with a clear position, supporting arguments and counter-arguments",
      "Use rhetorical devices effectively to strengthen a persuasive argument",
      "Adapt tone, register and vocabulary to suit the target audience"
    ],
    topics:[
      "Planning a persuasive essay or speech",
      "Using rhetorical devices in persuasive writing",
      "Supporting arguments with evidence and examples",
      "Addressing and rebutting counter-arguments",
      "Adapting tone and register for different audiences",
      "Writing persuasive openings and conclusions"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-06-2",name:"Discursive & Balanced Writing",emoji:"⚖️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-06",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Write balanced discursive essays that present multiple viewpoints fairly before reaching a reasoned conclusion.",
    learningOutcomes:[
      "Plan and structure a discursive essay presenting multiple viewpoints",
      "Use discourse markers to signal different sides of an argument",
      "Write a reasoned conclusion that weighs the evidence presented"
    ],
    topics:[
      "What is discursive writing and how it differs from persuasive",
      "Structuring a balanced argument (for, against, conclusion)",
      "Discourse markers for contrasting viewpoints (however, on the other hand)",
      "Presenting evidence fairly and objectively",
      "Writing a reasoned conclusion",
      "Formal register in discursive writing"
    ],
    prerequisites:["e8i-06-1"]
  },
  {
    id:"e8i-06-3",name:"Creative Writing Techniques",emoji:"🎨",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-06",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Develop advanced creative writing skills including narrative perspective, symbolism, pathetic fallacy and controlled shifts in pace.",
    learningOutcomes:[
      "Use narrative perspective deliberately to control the reader's access to information",
      "Employ symbolism and pathetic fallacy to add layers of meaning",
      "Control pace through sentence structure, paragraph length and time shifts"
    ],
    topics:[
      "Narrative perspective: first person, third person limited, omniscient",
      "Symbolism and motif in fiction",
      "Pathetic fallacy and setting as mood",
      "Controlling pace: slow description vs rapid action",
      "Using dialogue to reveal character and advance plot",
      "Crafting effective openings and endings"
    ],
    prerequisites:["e8i-06-1"]
  },
  {
    id:"e8i-06-4",name:"Tone, Register & Audience",emoji:"🎤",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-06",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Control tone and register to write effectively for different audiences and purposes, from formal reports to informal blogs.",
    learningOutcomes:[
      "Identify and control tone in a piece of writing (serious, humorous, sympathetic)",
      "Switch between formal and informal register as required by purpose and audience",
      "Adapt vocabulary, sentence structure and style for different text types"
    ],
    topics:[
      "What is tone and how it differs from register",
      "Formal register: reports, letters, essays",
      "Informal register: blogs, personal writing, speeches",
      "Adapting vocabulary for audience",
      "Adapting sentence structure and style for purpose",
      "Identifying and correcting inappropriate register"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-06-5",name:"Editing, Proofreading & Redrafting",emoji:"🔧",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-06",yearGroup:"Year 8",difficulty:1,estimatedHours:1,
    description:"Edit and proofread writing systematically, improving accuracy, clarity and impact through redrafting.",
    learningOutcomes:[
      "Edit a draft for accuracy in spelling, punctuation and grammar",
      "Revise for clarity, conciseness and improved word choice",
      "Use a proofreading checklist to check work systematically before submission"
    ],
    topics:[
      "Editing for spelling, punctuation and grammar errors",
      "Revising for clarity and conciseness",
      "Improving word choice and eliminating repetition",
      "Checking sentence variety and paragraph structure",
      "Using proofreading checklists and strategies",
      "Peer editing: giving and receiving constructive feedback"
    ],
    prerequisites:[]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 7 — POETRY & LITERARY ANALYSIS (e8t-07)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-07-1",name:"Analysing Unseen Poetry",emoji:"🔎",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-07",yearGroup:"Year 8",difficulty:1,estimatedHours:2,
    description:"Approach an unseen poem methodically — identifying subject, tone, imagery and language choices — and write an analytical response.",
    learningOutcomes:[
      "Identify the subject, speaker and tone of an unseen poem on first reading",
      "Analyse how a poet uses language and imagery to create meaning",
      "Write a structured analytical response to an unseen poem"
    ],
    topics:[
      "First reading: subject, speaker and mood",
      "Identifying and analysing imagery",
      "Analysing language choices and their effects",
      "Linking tone to the poet's message",
      "Structuring an unseen poetry response (PEE/PEEL)",
      "Writing about an unseen poem under timed conditions"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-07-2",name:"Comparing Poems",emoji:"⚖️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-07",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Compare two poems by examining similarities and differences in theme, language, structure and the poets' perspectives.",
    learningOutcomes:[
      "Identify similarities and differences in theme and subject between two poems",
      "Compare how two poets use language and structural features differently",
      "Write a structured comparative essay on two poems using evidence"
    ],
    topics:[
      "Comparing themes and subjects across poems",
      "Comparing language and imagery",
      "Comparing structure, form and rhyme scheme",
      "Comparing the poets' perspectives and attitudes",
      "Using comparative connectives (similarly, in contrast, whereas)",
      "Structuring a comparative poetry essay"
    ],
    prerequisites:["e8i-07-1"]
  },
  {
    id:"e8i-07-3",name:"Poetic Form & Structure",emoji:"📐",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-07",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Explore how poets use form and structure — sonnets, dramatic monologues, free verse — and analyse how structural choices contribute to meaning.",
    learningOutcomes:[
      "Identify and describe the features of different poetic forms",
      "Analyse how structural choices (enjambment, caesura, volta) create effects",
      "Explain how form contributes to meaning and the reader's experience"
    ],
    topics:[
      "Sonnets: Shakespearean and Petrarchan forms",
      "Dramatic monologue and its conventions",
      "Free verse and its effects",
      "Enjambment, caesura and end-stopping",
      "The volta (turn) in sonnets and other poems",
      "How form and structure contribute to meaning"
    ],
    prerequisites:["e8i-07-1"]
  },
  {
    id:"e8i-07-4",name:"War Poetry & Nature Poetry",emoji:"🕊️",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-07",yearGroup:"Year 8",difficulty:2,estimatedHours:3,
    description:"Study war poetry and nature poetry as thematic clusters, exploring how poets respond to conflict and the natural world.",
    learningOutcomes:[
      "Analyse how war poets present the reality, horror or glory of conflict",
      "Analyse how nature poets use the natural world to explore wider themes",
      "Compare poems within a thematic cluster using evidence and analysis"
    ],
    topics:[
      "War poetry: key poets and their perspectives",
      "Themes in war poetry (heroism, loss, futility, protest)",
      "Language and imagery in war poetry",
      "Nature poetry: key poets and their perspectives",
      "Themes in nature poetry (beauty, power, change, humanity's relationship with nature)",
      "Comparing poems within a thematic cluster"
    ],
    prerequisites:["e8i-07-2","e8i-07-3"]
  }
);

// ══════════════════════════════════════════════════════════════════════
// TOPIC 8 — SHAKESPEARE & DRAMA (e8t-08)
// ══════════════════════════════════════════════════════════════════════
CURRICULUM.push(
  {
    id:"e8i-08-1",name:"Studying a Shakespeare Play",emoji:"📜",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-08",yearGroup:"Year 8",difficulty:1,estimatedHours:3,
    description:"Study a full Shakespeare play — understanding the plot, key scenes and the context in which it was written and performed.",
    learningOutcomes:[
      "Summarise the plot and identify key scenes and turning points",
      "Understand the historical and social context of the play",
      "Explain how context influences the play's themes and characters"
    ],
    topics:[
      "Plot summary and key scenes",
      "The five-act structure in Shakespeare",
      "Historical and social context of the play",
      "The Elizabethan and Jacobean theatre",
      "How context shapes themes (gender roles, monarchy, religion)",
      "Key scenes and their significance to the plot"
    ],
    prerequisites:[]
  },
  {
    id:"e8i-08-2",name:"Dramatic Techniques",emoji:"🎪",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-08",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Analyse dramatic techniques — soliloquy, aside, dramatic irony, foreshadowing — and explain their effect on the audience.",
    learningOutcomes:[
      "Identify and explain the purpose of soliloquies and asides",
      "Analyse how dramatic irony and foreshadowing create tension and engagement",
      "Explain how staging choices affect the audience's experience"
    ],
    topics:[
      "Soliloquy: revealing inner thoughts to the audience",
      "Aside: private comments heard only by the audience",
      "Dramatic irony and its effects on the audience",
      "Foreshadowing and building suspense",
      "Verse vs prose: who speaks what and why",
      "Staging, props and performance choices"
    ],
    prerequisites:["e8i-08-1"]
  },
  {
    id:"e8i-08-3",name:"Character Analysis in Shakespeare",emoji:"👑",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-08",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Analyse character motivation, development and relationships in a Shakespeare play using textual evidence.",
    learningOutcomes:[
      "Analyse a character's motivation using evidence from the text",
      "Track how a character develops and changes across the play",
      "Analyse relationships between characters and explain how they drive the plot"
    ],
    topics:[
      "Character motivation: what drives key characters",
      "Character development across the play",
      "Key relationships and their significance",
      "How Shakespeare reveals character through language and action",
      "Protagonist, antagonist and foil characters",
      "Comparing characters within the play"
    ],
    prerequisites:["e8i-08-1"]
  },
  {
    id:"e8i-08-4",name:"Writing Analytical Essays on Drama",emoji:"📝",subject:"English",subjectId:"english",color:"#f59e0b",
    topicId:"e8t-08",yearGroup:"Year 8",difficulty:2,estimatedHours:2,
    description:"Structure and write analytical essays about Shakespeare, embedding quotations, analysing language and linking to context.",
    learningOutcomes:[
      "Structure an analytical essay with a clear introduction, body paragraphs and conclusion",
      "Embed short quotations fluently and analyse individual word choices",
      "Link analysis of language and character to the historical and social context"
    ],
    topics:[
      "Planning an essay: thesis, topic sentences and evidence",
      "PEE and PEEL paragraph structure for drama",
      "Embedding quotations smoothly into sentences",
      "Analysing individual word choices in quotations",
      "Linking analysis to context (Elizabethan society, gender, power)",
      "Writing introductions and conclusions for Shakespeare essays"
    ],
    prerequisites:["e8i-08-2","e8i-08-3"]
  }
);
