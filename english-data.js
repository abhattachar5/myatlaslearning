// english-data.js — Year 7 English: topic tiles + island definitions
// Questions/flashcards are in english-content-1/2/3.js
// Lessons are in english-lessons-1/2/3.js

// ── Remove old English islands & their data ──────────────────────────────
(function cleanOldEnglish() {
  const oldIds = new Set(['island-6','island-7','island-8','island-9','island-10','island-25','island-26','island-27']);
  CURRICULUM.splice(0, CURRICULUM.length, ...CURRICULUM.filter(i => !oldIds.has(i.id)));
  FLASHCARDS.splice(0, FLASHCARDS.length, ...FLASHCARDS.filter(f => !oldIds.has(f.islandId)));
  oldIds.forEach(id => delete QUESTIONS[id]);
})();

// ── ENGLISH TOPICS (8 main tiles on dashboard) ───────────────────────────
const ENGLISH_TOPICS = [
  {id:"et-01",name:"Vocabulary",emoji:"📖",hasContent:true,
   description:"Master prefixes, suffixes, Greek and Latin roots, synonyms, antonyms, homophones, analogies and context clues to expand your word power and decode unfamiliar words confidently."},
  {id:"et-02",name:"Grammar",emoji:"🔤",hasContent:true,
   description:"Understand sentence structure, parts of speech — nouns, pronouns, verbs, adjectives, adverbs, prepositions and conjunctions — and apply grammar rules accurately in your writing."},
  {id:"et-03",name:"Punctuation",emoji:"✏️",hasContent:true,
   description:"Use commas, apostrophes, speech marks, colons, semicolons and dashes correctly, and apply capitalisation and formatting rules with confidence."},
  {id:"et-05",name:"Reading Strategies",emoji:"🔍",hasContent:true,
   description:"Analyse author's purpose and tone, identify text structures, interpret literary devices and figurative language, and compare texts across different genres."},
  {id:"et-04",name:"Comprehension",emoji:"📝",hasContent:true,
   description:"Read fiction, non-fiction, poetry and drama passages and answer retrieval, inference and analysis questions — practising the skills tested in exams."},
  {id:"et-06",name:"Writing Strategies",emoji:"✍️",hasContent:true,
   description:"Organise writing effectively, develop and support arguments, use creative techniques, edit and revise your work, and understand research and plagiarism."},
  {id:"et-07",name:"Poetry",emoji:"🌟",hasContent:true,
   description:"Explore poetic devices, form and structure, learn how to analyse an unseen poem and write your own poetry using a range of techniques."},
  {id:"et-08",name:"Shakespeare",emoji:"🎭",hasContent:true,
   description:"Study Shakespeare's language, themes and characters, understand dramatic devices, and develop the essay-writing skills needed to write analytically about a play."},
];

// ── ENGLISH ISLANDS ───────────────────────────────────────────────────────
// et-01 Vocabulary
CURRICULUM.push(
  {
    id:"ei-01-1",name:"Prefixes & Suffixes",emoji:"➕",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:1,estimatedHours:2,
    description:"Understand how prefixes and suffixes change the meaning of root words.",
    learningOutcomes:[
      "Identify common prefixes (pre-, re-, sub-, mis-, un-, dis-, in-, im-, non-)",
      "Identify common suffixes (-ful, -less, -able, -ible)",
      "Use prefixes and suffixes to work out the meaning of unfamiliar words"
    ],
    topics:[
      "Words with pre- and re-",
      "Words with sub- and mis-",
      "Words with un-, dis-, in-, im-, non-",
      "Words with -ful and -less",
      "Words with -able and -ible",
      "Spelling changes when adding suffixes"
    ],
    prerequisites:[]
  },
  {
    id:"ei-01-2",name:"Greek & Latin Roots",emoji:"🏛️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:2,estimatedHours:2,
    description:"Use knowledge of Greek and Latin roots to decode the meaning of unfamiliar words.",
    learningOutcomes:[
      "Identify common Greek and Latin roots (e.g. port, aud, graph, bio, geo, dict)",
      "Use root meanings as clues to unfamiliar words",
      "Use word meanings as clues to root meanings"
    ],
    topics:[
      "Common Latin roots",
      "Common Greek roots",
      "Using roots as context clues",
      "Building words from roots",
      "Root meanings in domain-specific vocabulary",
      "Word families"
    ],
    prerequisites:["ei-01-1"]
  },
  {
    id:"ei-01-3",name:"Synonyms & Antonyms",emoji:"↔️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:1,estimatedHours:1,
    description:"Choose the most appropriate synonym or antonym in context.",
    learningOutcomes:[
      "Choose the correct synonym for a given word",
      "Find synonyms and antonyms in context",
      "Understand that synonyms have nuanced differences in meaning"
    ],
    topics:[
      "Choosing synonyms",
      "Finding synonyms in context",
      "Choosing antonyms",
      "Finding antonyms in context",
      "Synonym nuance",
      "Using a thesaurus"
    ],
    prerequisites:[]
  },
  {
    id:"ei-01-4",name:"Homophones",emoji:"🔊",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:1,estimatedHours:1,
    description:"Choose the correct homophone and understand how context determines meaning.",
    learningOutcomes:[
      "Use the correct homophone in context (e.g. their/there/they're, affect/effect)",
      "Match a definition to a word when homophones are involved",
      "Understand how homophone errors change meaning"
    ],
    topics:[
      "Common homophones",
      "their/there/they're",
      "your/you're",
      "affect/effect",
      "practice/practise",
      "Choosing the correct form in sentences"
    ],
    prerequisites:[]
  },
  {
    id:"ei-01-5",name:"Shades of Meaning & Connotation",emoji:"🎨",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:2,estimatedHours:2,
    description:"Explore how related words differ in intensity and whether they carry positive or negative connotations.",
    learningOutcomes:[
      "Describe the difference between related words (e.g. thin, slim, scrawny)",
      "Identify whether a word has positive or negative connotation",
      "Choose words deliberately for effect in writing"
    ],
    topics:[
      "Shades of meaning in related words",
      "Positive connotation",
      "Negative connotation",
      "Connotation in literature",
      "Word choice and effect",
      "Formal vs informal register"
    ],
    prerequisites:["ei-01-3"]
  },
  {
    id:"ei-01-6",name:"Analogies",emoji:"🔗",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:2,estimatedHours:1,
    description:"Identify and complete word analogies by understanding the relationship between pairs of words.",
    learningOutcomes:[
      "Identify the relationship in a word pair (e.g. part-to-whole, cause-and-effect)",
      "Complete an analogy by applying the same relationship",
      "Tackle challenge analogies involving less familiar vocabulary"
    ],
    topics:[
      "Part-to-whole analogies",
      "Synonym analogies",
      "Antonym analogies",
      "Cause-and-effect analogies",
      "Function analogies",
      "Challenge analogies"
    ],
    prerequisites:["ei-01-3"]
  },
  {
    id:"ei-01-7",name:"Context Clues",emoji:"🔍",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:1,estimatedHours:2,
    description:"Use the surrounding words and sentences to work out the meaning of unfamiliar words.",
    learningOutcomes:[
      "Use context to find the meaning of unfamiliar words",
      "Use synonyms and antonyms within the text as clues",
      "Identify the meaning of domain-specific words from context"
    ],
    topics:[
      "Finding word meanings from context",
      "Synonym clues in context",
      "Antonym clues in context",
      "Definition clues",
      "Example clues",
      "Domain-specific vocabulary in context"
    ],
    prerequisites:[]
  },
  {
    id:"ei-01-8",name:"Reference Skills",emoji:"📚",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-01",difficulty:1,estimatedHours:1,
    description:"Use dictionaries and thesauruses confidently, including alphabetical ordering and guide words.",
    learningOutcomes:[
      "Use alphabetical order to locate entries",
      "Use guide words to navigate a dictionary efficiently",
      "Interpret dictionary and thesaurus entries accurately"
    ],
    topics:[
      "Alphabetical order",
      "Guide words",
      "Dictionary entries",
      "Dictionary definitions",
      "Thesaurus entries",
      "Choosing between synonyms using a thesaurus"
    ],
    prerequisites:[]
  }
);

// et-02 Grammar
CURRICULUM.push(
  {
    id:"ei-02-1",name:"Sentences, Fragments & Run-ons",emoji:"📝",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:1,estimatedHours:2,
    description:"Identify complete sentences and distinguish them from fragments and run-ons.",
    learningOutcomes:[
      "Identify declarative, interrogative, imperative and exclamatory sentences",
      "Distinguish complete sentences from fragments and run-ons",
      "Identify simple, compound and complex sentences, and dependent vs independent clauses"
    ],
    topics:[
      "Sentence types (declarative, interrogative, imperative, exclamatory)",
      "Complete and simple subjects and predicates",
      "Compound subjects and predicates",
      "Fragments",
      "Run-ons",
      "Simple, compound and complex sentences"
    ],
    prerequisites:[]
  },
  {
    id:"ei-02-2",name:"Nouns & Plurals",emoji:"🔤",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:1,estimatedHours:1,
    description:"Identify common and proper nouns, form plurals correctly, and use possessives accurately.",
    learningOutcomes:[
      "Identify common and proper nouns",
      "Form plurals of nouns ending in f, fe, o and y",
      "Form and use singular and plural possessives correctly"
    ],
    topics:[
      "Common and proper nouns",
      "Plurals ending in f and fe",
      "Plurals ending in o and y",
      "Plural review",
      "Singular and plural possessives",
      "Errors with plurals and possessives"
    ],
    prerequisites:[]
  },
  {
    id:"ei-02-3",name:"Pronouns & Antecedents",emoji:"👥",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:2,estimatedHours:2,
    description:"Identify pronouns and their antecedents, ensure agreement, and avoid vague pronoun references.",
    learningOutcomes:[
      "Identify a pronoun and its antecedent in a sentence",
      "Use a pronoun that agrees with its antecedent in number and gender",
      "Identify and correct vague pronoun references"
    ],
    topics:[
      "Pronouns and their antecedents",
      "Pronoun-antecedent agreement",
      "Vague pronoun references",
      "All possible antecedents",
      "Pronoun number and person shifts",
      "Agreement in complex sentences"
    ],
    prerequisites:["ei-02-2"]
  },
  {
    id:"ei-02-4",name:"Pronoun Types",emoji:"🔀",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:2,estimatedHours:2,
    description:"Use subject, object, possessive, reflexive, intensive and relative pronouns correctly.",
    learningOutcomes:[
      "Choose correctly between subject and object pronouns",
      "Use possessive, reflexive and intensive pronouns accurately",
      "Use relative pronouns (who, whom, whose, which, that) correctly"
    ],
    topics:[
      "Subject vs object pronouns",
      "I and me with compound subjects/objects",
      "Possessive pronouns",
      "Reflexive vs personal pronouns",
      "Reflexive vs intensive pronouns",
      "Relative pronouns: who, whom, whose, which, that"
    ],
    prerequisites:["ei-02-3"]
  },
  {
    id:"ei-02-5",name:"Verb Types",emoji:"⚡",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:2,estimatedHours:2,
    description:"Identify and use main, helping, linking, transitive, intransitive and modal verbs correctly.",
    learningOutcomes:[
      "Identify main verbs and helping verbs in a sentence",
      "Distinguish transitive from intransitive verbs",
      "Identify linking verbs and use modal verbs appropriately"
    ],
    topics:[
      "Main verbs and helping verbs",
      "Transitive and intransitive verbs",
      "Linking verbs, predicate adjectives and predicate nouns",
      "Modal verbs (can, could, may, might, must, shall, should, will, would)",
      "What modal verbs show (ability, possibility, obligation)",
      "Choosing the correct modal verb"
    ],
    prerequisites:["ei-02-1"]
  },
  {
    id:"ei-02-6",name:"Subject-Verb Agreement",emoji:"✅",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:1,estimatedHours:1,
    description:"Ensure subjects and verbs agree in number, including with compound subjects.",
    learningOutcomes:[
      "Use the correct verb form to agree with a singular or plural subject",
      "Use the correct verb with compound subjects joined by and, or, nor",
      "Identify and correct subject-verb agreement errors"
    ],
    topics:[
      "Singular and plural verbs",
      "Subject-verb agreement with compound subjects",
      "Agreement with or and nor",
      "Tricky cases (collective nouns, indefinite pronouns)",
      "Identifying errors",
      "Correction practice"
    ],
    prerequisites:["ei-02-5"]
  },
  {
    id:"ei-02-7",name:"Verb Tenses",emoji:"⏰",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:2,estimatedHours:2,
    description:"Form and use simple, progressive and perfect verb tenses correctly, and avoid inappropriate tense shifts.",
    learningOutcomes:[
      "Use the simple past, present and future tenses correctly",
      "Form and use the progressive and perfect tenses",
      "Avoid inappropriate tense shifts within a piece of writing"
    ],
    topics:[
      "Simple past, present and future",
      "Irregular past tense verbs",
      "Progressive tenses (past/present/future continuous)",
      "Perfect tenses (past/present/future perfect)",
      "Past tense vs past participle",
      "Correcting tense shifts"
    ],
    prerequisites:["ei-02-5"]
  },
  {
    id:"ei-02-8",name:"Adjectives & Adverbs",emoji:"🎯",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:1,estimatedHours:2,
    description:"Identify and use adjectives and adverbs, including comparative and superlative forms.",
    learningOutcomes:[
      "Identify adjectives and adverbs and the words they modify",
      "Form comparative and superlative adjectives and adverbs",
      "Choose correctly between adjective and adverb forms"
    ],
    topics:[
      "Identifying adjectives",
      "Ordering adjectives",
      "Identifying adverbs",
      "Relative adverbs",
      "Adjective vs adverb choice",
      "Comparative and superlative forms"
    ],
    prerequisites:["ei-02-1"]
  },
  {
    id:"ei-02-9",name:"Prepositions",emoji:"📍",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:1,estimatedHours:1,
    description:"Identify prepositions, their objects and prepositional phrases.",
    learningOutcomes:[
      "Identify prepositions in sentences",
      "Identify the object of a preposition",
      "Identify and use prepositional phrases correctly"
    ],
    topics:[
      "Identifying prepositions",
      "Prepositions and their objects",
      "Prepositional phrases",
      "Common prepositions",
      "Prepositions of time, place and direction",
      "Preposition review"
    ],
    prerequisites:[]
  },
  {
    id:"ei-02-10",name:"Conjunctions & Contractions",emoji:"🔗",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-02",difficulty:1,estimatedHours:1,
    description:"Use coordinating, subordinating and correlative conjunctions correctly, and form contractions accurately.",
    learningOutcomes:[
      "Use coordinating conjunctions (FANBOYS) correctly",
      "Identify subordinating and correlative conjunctions",
      "Form pronoun-verb and not contractions correctly"
    ],
    topics:[
      "Coordinating conjunctions (FANBOYS)",
      "Subordinating conjunctions",
      "Correlative conjunctions (either/or, neither/nor, both/and)",
      "Pronoun-verb contractions",
      "Contractions with not",
      "Common contraction errors"
    ],
    prerequisites:["ei-02-1"]
  }
);

// et-03 Punctuation
CURRICULUM.push(
  {
    id:"ei-03-1",name:"Commas",emoji:"📌",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-03",difficulty:1,estimatedHours:1,
    description:"Use commas correctly in compound sentences, with introductory elements, and to separate items.",
    learningOutcomes:[
      "Use commas correctly in compound and complex sentences",
      "Use commas with direct addresses, introductory words and interrupters",
      "Use commas with coordinate adjectives and non-restrictive clauses"
    ],
    topics:[
      "Commas in compound sentences",
      "Commas in complex sentences",
      "Commas with introductory words and phrases",
      "Commas with direct address and interjections",
      "Commas with non-restrictive elements",
      "Commas with coordinate adjectives"
    ],
    prerequisites:[]
  },
  {
    id:"ei-03-2",name:"Apostrophes",emoji:"✒️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-03",difficulty:1,estimatedHours:1,
    description:"Use apostrophes correctly for possession and contraction, and avoid common errors.",
    learningOutcomes:[
      "Form singular and plural possessives using apostrophes",
      "Form contractions correctly using apostrophes",
      "Avoid common apostrophe errors (its vs it's, your vs you're)"
    ],
    topics:[
      "Apostrophes for singular possession",
      "Apostrophes for plural possession",
      "Apostrophes in contractions",
      "its vs it's",
      "your vs you're",
      "Common apostrophe errors"
    ],
    prerequisites:[]
  },
  {
    id:"ei-03-3",name:"Speech Marks & Dialogue",emoji:"💬",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-03",difficulty:1,estimatedHours:2,
    description:"Punctuate direct speech correctly, including inverted commas and reporting clauses.",
    learningOutcomes:[
      "Punctuate direct speech with correct use of inverted commas",
      "Start a new paragraph for a new speaker",
      "Use reporting clauses and punctuate them correctly"
    ],
    topics:[
      "Opening and closing inverted commas",
      "Punctuation inside speech marks",
      "Reporting clauses before, after and in the middle of speech",
      "New speaker, new line",
      "Question marks and exclamation marks in dialogue",
      "Common direct speech errors"
    ],
    prerequisites:["ei-03-1"]
  },
  {
    id:"ei-03-4",name:"Colons, Semicolons & Dashes",emoji:"⚙️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-03",difficulty:2,estimatedHours:1,
    description:"Use colons, semicolons and dashes to structure sentences and create emphasis.",
    learningOutcomes:[
      "Use a colon to introduce a list or explanation",
      "Use a semicolon to join two related independent clauses",
      "Use dashes to add emphasis, interruption or additional information"
    ],
    topics:[
      "Colons before lists",
      "Colons before explanations",
      "Semicolons joining related clauses",
      "Semicolons in complex lists",
      "Dashes for emphasis and interruption",
      "Choosing between colon, semicolon and dash"
    ],
    prerequisites:["ei-03-1"]
  },
  {
    id:"ei-03-5",name:"Capitalisation & Formatting",emoji:"🔡",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-03",difficulty:1,estimatedHours:1,
    description:"Apply capitalisation rules correctly and format titles of books, films and other works.",
    learningOutcomes:[
      "Correct capitalisation errors in sentences",
      "Capitalise titles of people, places and works correctly",
      "Format titles of books, films and other works correctly"
    ],
    topics:[
      "Capital letters for proper nouns",
      "Capitalising titles (Mr, Dr, President)",
      "Capitalising titles of works",
      "Formatting book and film titles",
      "Capitalising titles: review",
      "Common capitalisation errors"
    ],
    prerequisites:[]
  }
);

// et-04 Comprehension — uses comprehension.html (no sub-islands in CURRICULUM)
// All 40 passages + questions live in english-content-4.js as COMPREHENSION_PASSAGES

// et-05 Reading Strategies
CURRICULUM.push(
  {
    id:"ei-05-1",name:"Author's Purpose & Tone",emoji:"🎯",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-05",difficulty:1,estimatedHours:2,
    description:"Identify why a writer has written a text and recognise the tone they use to achieve their purpose.",
    learningOutcomes:[
      "Identify an author's purpose: to persuade, inform, entertain or advise",
      "Distinguish formal from informal tone and explain its effect",
      "Compare tone across two passages on the same topic"
    ],
    topics:[
      "Purpose: persuade, inform, entertain, advise",
      "Formal vs informal tone",
      "How word choice creates tone",
      "Comparing tone across passages",
      "Matching purpose to audience",
      "Identifying bias and opinion in tone"
    ],
    prerequisites:[]
  },
  {
    id:"ei-05-2",name:"Text Structure",emoji:"🏗️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-05",difficulty:1,estimatedHours:2,
    description:"Recognise how texts are organised — chronological, compare/contrast, cause/effect, problem/solution — and explain why the writer chose that structure.",
    learningOutcomes:[
      "Identify chronological, compare/contrast, cause/effect and problem/solution structures",
      "Use signal words to determine text structure",
      "Explain why a writer has chosen a particular structure"
    ],
    topics:[
      "Chronological order",
      "Compare and contrast",
      "Cause and effect",
      "Problem and solution",
      "Signal words for each structure",
      "Identifying structure in unseen texts"
    ],
    prerequisites:[]
  },
  {
    id:"ei-05-3",name:"Literary Devices & Figurative Language",emoji:"✨",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-05",difficulty:2,estimatedHours:2,
    description:"Identify simile, metaphor, personification, hyperbole, irony, alliteration and onomatopoeia, and analyse their effect on the reader.",
    learningOutcomes:[
      "Identify and name common literary devices in a text",
      "Explain the effect a literary device has on meaning and tone",
      "Classify figures of speech by type"
    ],
    topics:[
      "Simile and metaphor",
      "Personification and pathetic fallacy",
      "Hyperbole and understatement",
      "Irony (verbal, situational, dramatic)",
      "Alliteration, assonance and onomatopoeia",
      "Analysing effect on the reader"
    ],
    prerequisites:[]
  },
  {
    id:"ei-05-4",name:"Analysing Literature & Informational Texts",emoji:"📑",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-05",difficulty:2,estimatedHours:2,
    description:"Read short fiction and informational passages closely, tracing arguments and analysing how writers achieve their effects.",
    learningOutcomes:[
      "Analyse a short story extract for character, setting and theme",
      "Read and understand an informational passage, identifying key claims",
      "Trace the line of argument in a persuasive or informational text"
    ],
    topics:[
      "Analysing character and setting in fiction",
      "Identifying theme in short stories",
      "Reading informational passages for key ideas",
      "Tracing an argument step by step",
      "Distinguishing fact from opinion in non-fiction",
      "Evaluating how evidence supports a claim"
    ],
    prerequisites:["ei-05-1"]
  },
  {
    id:"ei-05-5",name:"Comparing Texts",emoji:"⚖️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-05",difficulty:2,estimatedHours:2,
    description:"Compare two texts on the same topic but in different genres or from different perspectives, explaining how context and purpose shape meaning.",
    learningOutcomes:[
      "Identify similarities and differences in purpose, audience and tone between two texts",
      "Compare how two writers use language differently to present the same topic",
      "Explain how genre and context shape a text's meaning"
    ],
    topics:[
      "Comparing purpose and audience",
      "Comparing language and tone",
      "Comparing structure and form",
      "Same topic, different genre",
      "How context shapes meaning",
      "Writing a comparative response"
    ],
    prerequisites:["ei-05-1","ei-05-2"]
  }
);

// et-06 Writing Strategies
CURRICULUM.push(
  {
    id:"ei-06-1",name:"Planning & Organisation",emoji:"📋",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-06",difficulty:1,estimatedHours:2,
    description:"Plan writing effectively using essay structures, paragraph organisation, topic sentences and linking words.",
    learningOutcomes:[
      "Create a plan for a piece of writing using bullet points, mind maps or numbered lists",
      "Write clear topic sentences and organise paragraphs around a single main idea",
      "Use linking words and transition phrases to connect ideas within and between paragraphs"
    ],
    topics:[
      "Planning methods (mind maps, bullet points, numbered plans)",
      "Essay structure: introduction, body and conclusion",
      "Writing effective topic sentences",
      "One idea per paragraph",
      "Linking words and transition phrases",
      "Ordering paragraphs logically"
    ],
    prerequisites:[]
  },
  {
    id:"ei-06-2",name:"Argumentative Writing",emoji:"⚔️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-06",difficulty:2,estimatedHours:2,
    description:"Develop and support arguments, address counter-arguments, and use persuasive and rhetorical techniques effectively.",
    learningOutcomes:[
      "Develop a clear argument supported by evidence, examples and reasoning",
      "Identify and address counter-arguments to strengthen a position",
      "Use rhetorical devices (rhetorical questions, rule of three, emotive language) to persuade"
    ],
    topics:[
      "Forming a clear thesis or argument",
      "Supporting arguments with evidence and examples",
      "Addressing counter-arguments and rebuttals",
      "Rhetorical questions and the rule of three",
      "Emotive language and persuasive vocabulary",
      "Structuring a persuasive or discursive essay"
    ],
    prerequisites:["ei-06-1"]
  },
  {
    id:"ei-06-3",name:"Creative Writing Techniques",emoji:"🎨",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-06",difficulty:2,estimatedHours:2,
    description:"Use creative techniques including show don't tell, sensory language, dialogue, narrative voice and descriptive writing.",
    learningOutcomes:[
      "Use 'show don't tell' to convey emotions and atmosphere through actions and details",
      "Write vivid descriptions using sensory language and imagery",
      "Use dialogue and narrative voice effectively to develop character and advance a story"
    ],
    topics:[
      "Show don't tell",
      "Sensory language (sight, sound, touch, taste, smell)",
      "Writing effective dialogue",
      "Narrative voice (first person, third person, omniscient)",
      "Descriptive writing: setting and atmosphere",
      "Varying sentence length for effect"
    ],
    prerequisites:["ei-06-1"]
  },
  {
    id:"ei-06-4",name:"Editing & Proofreading",emoji:"🔧",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-06",difficulty:1,estimatedHours:2,
    description:"Revise drafts for clarity and impact, correct common errors, improve sentence variety and proofread accurately.",
    learningOutcomes:[
      "Revise a draft to improve clarity, sentence variety and word choice",
      "Identify and correct common spelling, punctuation and grammar errors",
      "Use proofreading strategies to check work systematically before submitting"
    ],
    topics:[
      "Revising for clarity and conciseness",
      "Improving word choice (replacing weak or repeated words)",
      "Varying sentence structure and length",
      "Common spelling and grammar errors to check",
      "Proofreading strategies (reading aloud, backwards reading, checklists)",
      "Peer feedback: giving and using constructive criticism"
    ],
    prerequisites:["ei-06-1"]
  },
  {
    id:"ei-06-5",name:"Research & Referencing",emoji:"📚",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-06",difficulty:2,estimatedHours:2,
    description:"Find and evaluate sources, paraphrase information in your own words, avoid plagiarism and reference sources correctly.",
    learningOutcomes:[
      "Find relevant sources and evaluate their reliability and bias",
      "Paraphrase information accurately in your own words without copying",
      "Understand what plagiarism is and how to avoid it by citing sources correctly"
    ],
    topics:[
      "Finding sources (books, websites, databases)",
      "Evaluating source reliability and bias",
      "Paraphrasing vs copying",
      "What is plagiarism and why it matters",
      "Citing sources in your writing",
      "Creating a simple bibliography"
    ],
    prerequisites:["ei-06-1"]
  }
);

// et-07 Poetry
CURRICULUM.push(
  {
    id:"ei-07-1",name:"Poetic Devices",emoji:"🎭",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-07",difficulty:1,estimatedHours:2,
    description:"Identify and explain the effect of simile, metaphor, personification, alliteration, assonance, onomatopoeia and repetition in poetry.",
    learningOutcomes:[
      "Identify common poetic devices in a poem",
      "Explain the effect each device has on the reader",
      "Distinguish between imagery devices, sound devices and structural devices"
    ],
    topics:[
      "Simile and metaphor in poetry",
      "Personification and pathetic fallacy",
      "Alliteration, assonance and sibilance",
      "Onomatopoeia",
      "Repetition and refrain",
      "Analysing the effect of devices on the reader"
    ],
    prerequisites:[]
  },
  {
    id:"ei-07-2",name:"Form & Structure",emoji:"📐",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-07",difficulty:2,estimatedHours:2,
    description:"Understand poetic forms — sonnets, ballads, free verse, haiku — and structural features like stanzas, rhyme schemes and enjambment.",
    learningOutcomes:[
      "Identify common poetic forms and their features",
      "Label rhyme schemes using ABAB notation",
      "Explain the effect of structural choices such as enjambment, caesura and stanza breaks"
    ],
    topics:[
      "Sonnets (Shakespearean and Petrarchan)",
      "Ballads and narrative poetry",
      "Free verse and blank verse",
      "Haiku and other short forms",
      "Rhyme schemes (ABAB, ABCB, couplets)",
      "Enjambment, caesura and end-stopping"
    ],
    prerequisites:["ei-07-1"]
  },
  {
    id:"ei-07-3",name:"Analysing a Poem",emoji:"🔎",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-07",difficulty:2,estimatedHours:2,
    description:"Use a step-by-step approach to analyse an unseen poem — exploring meaning, mood, imagery, language choices and the poet's intent.",
    learningOutcomes:[
      "Identify the subject, mood and tone of an unseen poem",
      "Analyse how a poet uses language and structure to create meaning",
      "Write an analytical paragraph about a poem using PEE/PEEL"
    ],
    topics:[
      "First reading: subject, speaker and mood",
      "Identifying imagery and language choices",
      "Linking structure to meaning",
      "The poet's message or intent",
      "Using PEE/PEEL for poetry analysis",
      "Writing about an unseen poem under timed conditions"
    ],
    prerequisites:["ei-07-1","ei-07-2"]
  },
  {
    id:"ei-07-4",name:"Writing Poetry",emoji:"🖊️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-07",difficulty:2,estimatedHours:2,
    description:"Compose original poetry using poetic techniques — choosing form, devices and language deliberately for effect.",
    learningOutcomes:[
      "Choose an appropriate form for a poem's subject and purpose",
      "Use poetic devices deliberately to create imagery and sound effects",
      "Draft, revise and improve a poem"
    ],
    topics:[
      "Choosing a subject and purpose",
      "Selecting a form (free verse, sonnet, haiku, ballad)",
      "Using imagery: simile, metaphor, personification",
      "Using sound: alliteration, rhyme, rhythm",
      "Drafting and revising a poem",
      "Peer feedback and improvement"
    ],
    prerequisites:["ei-07-1"]
  }
);

// et-08 Shakespeare
CURRICULUM.push(
  {
    id:"ei-08-1",name:"Shakespeare's Language",emoji:"🗣️",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-08",difficulty:1,estimatedHours:2,
    description:"Understand Elizabethan English — thee, thou, dost, hath — and learn to translate Shakespeare's language into modern English.",
    learningOutcomes:[
      "Translate common Elizabethan words and phrases into modern English",
      "Distinguish verse from prose in Shakespeare's plays and explain why he switches between them",
      "Identify soliloquies and asides and explain their dramatic purpose"
    ],
    topics:[
      "Common Elizabethan vocabulary (thee, thou, dost, hath, art, wherefore, ere)",
      "Verse vs prose: who speaks what and why",
      "Iambic pentameter in Shakespeare",
      "Soliloquies and asides",
      "Translating Shakespeare into modern English",
      "Shakespeare's use of puns and wordplay"
    ],
    prerequisites:[]
  },
  {
    id:"ei-08-2",name:"Themes & Characters",emoji:"👑",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-08",difficulty:2,estimatedHours:2,
    description:"Explore universal themes in Shakespeare's plays — love, ambition, jealousy, power, fate — and analyse how characters are developed.",
    learningOutcomes:[
      "Identify key themes in a Shakespeare play and explain how they are presented",
      "Analyse a character's motivation and development using textual evidence",
      "Understand how Shakespeare's themes remain relevant today"
    ],
    topics:[
      "Love and relationships",
      "Ambition and power",
      "Jealousy and revenge",
      "Fate, destiny and the supernatural",
      "Appearance vs reality",
      "Character motivation and development"
    ],
    prerequisites:["ei-08-1"]
  },
  {
    id:"ei-08-3",name:"Dramatic Devices",emoji:"🎪",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-08",difficulty:2,estimatedHours:2,
    description:"Understand dramatic irony, foreshadowing, tension, comedy and tragedy, and how Shakespeare uses staging and performance choices.",
    learningOutcomes:[
      "Identify and explain the effect of dramatic irony, foreshadowing and tension",
      "Distinguish comedy from tragedy and explain their conventions",
      "Analyse how staging and performance choices affect the audience"
    ],
    topics:[
      "Dramatic irony",
      "Foreshadowing and suspense",
      "Building and releasing tension",
      "Comedy vs tragedy: conventions and features",
      "Staging, props and performance choices",
      "The role of the Fool and comic relief"
    ],
    prerequisites:["ei-08-1"]
  },
  {
    id:"ei-08-4",name:"Writing About Shakespeare",emoji:"📝",subject:"English",subjectId:"english",color:"#ba7517",
    topicId:"et-08",difficulty:2,estimatedHours:2,
    description:"Develop essay-writing skills for Shakespeare — structuring paragraphs with PEE/PEEL, embedding quotations and writing about context.",
    learningOutcomes:[
      "Structure an analytical paragraph using PEE or PEEL",
      "Embed short quotations fluently into sentences",
      "Link analysis to the historical and social context of Shakespeare's time"
    ],
    topics:[
      "PEE and PEEL paragraph structure",
      "Embedding quotations smoothly",
      "Analysing individual word choices in quotations",
      "Writing about context (Elizabethan society, gender roles, religion, monarchy)",
      "Linking context to theme and character",
      "Planning and structuring a full Shakespeare essay"
    ],
    prerequisites:["ei-08-2","ei-08-3"]
  }
);
