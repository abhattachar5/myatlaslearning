// content/y11/english/islands/x05.js — Year 11 English Topic 5 expansion: Language Paper 1: Fiction Reading
// Adds 3 flashcards + 10 questions per island for e11i-05-1..5. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // e11i-05-1 — Q1–Q3: Locate, Language, Structure
  {id:"e11fc-05-1-6", islandId:"e11i-05-1", front:"Why must you read ONLY the specified lines for Q1?",
   back:"Q1 names a section (e.g. 'lines 1 to 6'). Statements drawn from outside those lines, even if true of the wider text, will not be accepted.\n\nMisreading the line reference is the single most common way to lose easy Q1 marks.", difficulty:1, category:"application"},
  {id:"e11fc-05-1-7", islandId:"e11i-05-1", front:"In one phrase, how do Q2 and Q3 differ?",
   back:"Q2 = LANGUAGE (words, imagery, sentence forms in a short section).\nQ3 = STRUCTURE (the order and shape of the WHOLE extract — openings, shifts, endings).\n\nSame 8 marks each, but the lens is completely different.", difficulty:2, category:"concept"},
  {id:"e11fc-05-1-8", islandId:"e11i-05-1", front:"How many marks does the whole Paper 1 reading section carry, and over how long?",
   back:"Section A reading = 40 marks (Q1: 4, Q2: 8, Q3: 8, Q4: 20), with about 45 minutes recommended.\n\nThe other 45 minutes go to Section B writing (40 marks). The paper totals 80 marks in 1 hour 45 minutes.", difficulty:1, category:"concept"});

QUESTIONS["e11i-05-1"] = (QUESTIONS["e11i-05-1"] || []).concat([
  {q:"Q1 tells you to use 'lines 1 to 5'. You spot a true detail in line 8. You should:", opts:["Reject it — only lines 1 to 5 count","Use it, since it is true","Use it only if it is interesting","Use it to start an essay"], c:0,
   e:"Q1 statements must come from the named lines; a true detail outside them earns no mark. The temptation is to credit any accurate statement, but the line reference is a strict boundary."},
  {q:"Across Q1 to Q4, the mark allocations are:", opts:["8, 8, 20, 4 in that order","4, 8, 8, 20","20, 8, 8, 4","4, 20, 8, 8"], c:1,
   e:"Q1 = 4, Q2 = 8, Q3 = 8, Q4 = 20. The marks rise towards Q4, which is why it earns the most time. A common slip is treating all four as equal weight."},
  {q:"The reading section of Paper 1 is worth:", opts:["80 marks","60 marks","40 marks","24 marks"], c:2,
   e:"Section A reading totals 40 marks (4 + 8 + 8 + 20). 80 is the whole paper including writing; the figure to remember for reading alone is 40."},
  {q:"Which task does NOT belong in Paper 1 at all?", opts:["Listing four true statements","Analysing language","Comparing two texts' viewpoints","Evaluating a statement about the extract"], c:2,
   e:"Comparing two texts and their viewpoints is a Paper 2 skill. Paper 1 uses a single fiction extract, so comparison of sources never appears here."},
  {q:"A student spends 15 minutes on Q1. The main risk is:", opts:["Too little time left for the 20-mark Q4","Q1 will be marked down for length","Losing structure marks","Nothing — Q1 deserves the most time"], c:0,
   e:"Q1 is only 4 marks and needs about 5 minutes; over-spending starves the 20-mark Q4 of time. It will not be 'marked down for length' — the danger is purely the time stolen from Q4."},
  {q:"'The text moves from a crowded platform to one waiting child.' This best describes:", opts:["A language method","An emotive word choice","A spelling feature","A structural shift in focus"], c:3,
   e:"Narrowing from a crowd to one figure is a structural shift in focus, the territory of Q3. It is tempting to call the vivid detail 'language', but the point being described is the change of focus, which is structure."},
  {q:"Which is a LANGUAGE feature suited to Q2, not Q3?", opts:["The connotations of the verb 'snarled'","The text ending where it began","A switch from past to present tense across the extract","A delay before the cause of a noise is revealed"], c:0,
   e:"The connotations of a single verb are word-level language analysis for Q2. The other three (cyclical ending, tense shift, withholding) all describe the shape of the whole text, which is Q3."},
  {q:"For Q2 you would zoom in on:", opts:["How the whole extract is ordered","Four true statements","A specific word, image or sentence form and its effect","Your overall judgement of the extract"], c:2,
   e:"Q2 rewards close analysis of a chosen word, image or sentence form and the effect it creates. Ordering of the whole extract is Q3; the overall judgement belongs to Q4."},
  {q:"The single biggest reason students lose Q1 marks is:", opts:["Writing too analytically","Using too few quotations","Spelling errors","Reading beyond the specified line reference"], c:3,
   e:"Selecting statements from outside the named lines is the classic Q1 error. Q1 needs no analysis or quotation at all, so those are not where marks are lost."},
  {q:"A sensible Paper 1 reading timing plan is:", opts:["Q1 5, Q2 10, Q3 10, Q4 20 minutes","Q1 20, Q2 10, Q3 10, Q4 5 minutes","Equal 11 minutes each","Q1 1, Q2 1, Q3 1, Q4 42 minutes"], c:0,
   e:"Time should rise with marks: 5, 10, 10, 20 minutes. Giving Q1 the most time (the second option) inverts the mark weighting and leaves Q4 short."}
]);

FLASHCARDS.push(
  // e11i-05-2 — Q4: Evaluate Critically
  {id:"e11fc-05-2-6", islandId:"e11i-05-2", front:"Which section of the extract does Q4 focus on, and why does that matter?",
   back:"Q4 names a part of the text (often the second half) and a focus statement. You must keep your evidence within that section.\n\nDrifting back to lines already covered in Q2 or Q3 wastes time and may fall outside the Q4 boundary.", difficulty:2, category:"application"},
  {id:"e11fc-05-2-7", islandId:"e11i-05-2", front:"What separates a Q4 'evaluation' from a Q2 'analysis'?",
   back:"Analysis (Q2) explains HOW a method works. Evaluation (Q4) goes further and JUDGES how successfully it achieves the stated effect.\n\nThe extra ingredient is a verdict: 'this is effective because…', 'this is less convincing because…'.", difficulty:3, category:"concept"},
  {id:"e11fc-05-2-8", islandId:"e11i-05-2", front:"Why is a plot summary fatal in Q4?",
   back:"Retelling events earns nothing in Q4's mark scheme, which rewards evaluation of the writer's methods against the statement.\n\nIf a sentence could be written by someone who only knew the plot, it is not doing Q4's job.", difficulty:2, category:"concept"});

QUESTIONS["e11i-05-2"] = (QUESTIONS["e11i-05-2"] || []).concat([
  {q:"Q4 typically asks you to respond to:", opts:["A list of true statements","A second source","A spelling rule","A statement of opinion about a named part of the extract"], c:3,
   e:"Q4 gives a focus statement (often a student's view) about a named section and asks how far you agree. There is no second source — that is Paper 2 — and no listing task."},
  {q:"The defining feature of Q4 that Q2 lacks is:", opts:["Naming methods","Using quotations","Evaluating how successfully effects are achieved","Reading the extract"], c:2,
   e:"Evaluation — judging effectiveness against the statement — is unique to Q4. Naming methods, quoting and reading all happen in Q2 as well, so they cannot be the distinguishing feature."},
  {q:"A student writes a paragraph that only retells what happens. In Q4 this:", opts:["Earns full marks","Earns top-band marks for clarity","Earns little or nothing","Earns SPaG marks only"], c:2,
   e:"Plot summary does not address the writer's methods or the statement, so it earns little. It is tempting to think clear retelling is rewarded, but Q4 marks evaluation, not narration."},
  {q:"Which sentence shows the strongest critical voice for Q4?", opts:["The writer uses a simile here.","This simile arguably heightens the dread more effectively than the earlier description, sustaining the tension.","There is a simile and a metaphor.","The character is scared in this part."], c:1,
   e:"It judges effectiveness ('more effectively'), links to the effect ('dread') and ties back to the statement. The others merely spot features or retell, with no evaluation."},
  {q:"Disagreeing with part of the Q4 statement is:", opts:["Forbidden — you must always agree","A guaranteed top mark","Only allowed in Q3","Acceptable if justified with evidence"], c:3,
   e:"A reasoned, evidenced disagreement (or partial agreement) is perfectly valid and can be sophisticated. You are never required to agree, but nuance must be supported, not just asserted."},
  {q:"Q4 names 'the second half of the extract'. Quoting from the opening lines risks:", opts:["Falling outside the focus section","Stronger marks","Better structure marks","Nothing at all"], c:0,
   e:"Q4 evidence should sit within the named section. Reaching back to the opening may fall outside the focus and waste limited time. It does not strengthen the answer."},
  {q:"The best Q4 paragraphs combine:", opts:["Only a personal opinion","Only quotations","Evidence, method analysis and an evaluative judgement","A plot summary and a conclusion"], c:2,
   e:"Top-band Q4 weaves evidence, analysis of method and a judgement of effectiveness in each paragraph. Opinion alone, or quotation alone, lacks the evaluative reasoning the question rewards."},
  {q:"Judge this Q4 sentence: 'The ending is sad because the dog dies.' It is weak because it:", opts:["Uses no capital letters","Is too long","Disagrees with the statement","Evaluates without naming the writer's methods or effect on the reader"], c:3,
   e:"It states a reaction but ignores the writer's methods and how they create that effect, so it cannot reach the higher bands. Its length and capitalisation are not the issue."},
  {q:"Which word best signals evaluation in Q4?", opts:["Then","Compellingly","Firstly","Suddenly"], c:1,
   e:"'Compellingly' judges how well an effect is achieved, the heart of evaluation. 'Then', 'firstly' and 'suddenly' merely sequence or narrate without any judgement."},
  {q:"A nuanced Q4 response might argue:", opts:["The opening is unsettling, yet the close shifts towards melancholy rather than fear.","The text is good.","The writer was born long ago.","There are many techniques."], c:0,
   e:"Acknowledging a shift in effect across the section shows sophisticated, evidenced reading. The other options are vague praise, irrelevant biography or empty feature-counting."}
]);

FLASHCARDS.push(
  // e11i-05-3 — Paper 1 Writing: Creative
  {id:"e11fc-05-3-6", islandId:"e11i-05-3", front:"How are the 40 marks for Paper 1 Section B split?",
   back:"24 marks for content and organisation; 16 marks for technical accuracy (SPaG: spelling, punctuation, grammar, vocabulary).\n\nSo a third of the marks reward accuracy — proofreading is not optional.", difficulty:2, category:"concept"},
  {id:"e11fc-05-3-7", islandId:"e11i-05-3", front:"Why borrow STRUCTURE techniques from Q3 in your own creative writing?",
   back:"A zoom from wide to close, a cyclical ending or a deliberate shift gives your piece shape and earns 'organisation' marks.\n\nThe same features you analyse in the reading section can be crafted into your writing.", difficulty:3, category:"application"},
  {id:"e11fc-05-3-8", islandId:"e11i-05-3", front:"What is a common content-and-organisation mistake in Paper 1 writing?",
   back:"Cramming in too much plot so the piece becomes a rushed list of events with no crafted detail.\n\nA controlled, well-described moment scores higher than an action-packed but shapeless story.", difficulty:2, category:"concept"});

QUESTIONS["e11i-05-3"] = (QUESTIONS["e11i-05-3"] || []).concat([
  {q:"Paper 1 Section B is worth:", opts:["40 marks","20 marks","8 marks","80 marks"], c:0,
   e:"Section B writing is 40 marks (24 content + 16 SPaG). 80 is the whole paper; 8 and 20 are reading-question marks."},
  {q:"The technical accuracy (SPaG) portion of Section B is:", opts:["4 marks","16 marks","24 marks","0 marks"], c:1,
   e:"16 of the 40 marks reward technical accuracy; 24 reward content and organisation. SPaG is a substantial share, so proofreading protects real marks."},
  {q:"Which opening shows the most crafted language?", opts:["It was a cold day and I was sad.","The window was cold. I looked out.","Frost stitched silver veins across the window, and the house held its breath.","I went outside. It was winter."], c:2,
   e:"It uses metaphor ('stitched silver veins'), personification ('held its breath') and controlled rhythm. The others are accurate but plain, with no deliberate imagery."},
  {q:"Using a cyclical ending in your own creative writing mainly earns marks for:", opts:["Spelling","Reading","Comparison","Content and organisation"], c:3,
   e:"A cyclical structure shapes the piece, rewarded under content and organisation. It is a writing-craft choice, not a spelling or reading skill."},
  {q:"For a DESCRIPTIVE task, the best approach is to:", opts:["Pack in as many plot twists as possible","Sustain one atmospheric moment through layered sensory detail","Write only dialogue","Summarise a whole life story"], c:1,
   e:"Description rewards a sustained, sensory-rich moment rather than busy plot. Twists and life-spanning summary belong, if anywhere, to narrative — and even then need control."},
  {q:"Reserving the last 5 minutes to proofread mainly protects:", opts:["Your reading marks","Your Q4 marks","Your SPaG marks","Your line references"], c:2,
   e:"Proofreading catches spelling, punctuation and grammar slips, defending the 16 SPaG marks. Reading and Q4 are in Section A, not the writing section."},
  {q:"'The fog crept in like a held breath' is better than 'The fog came' because it:", opts:["Is longer","Uses personification and a simile chosen for effect","Has more full stops","Avoids verbs"], c:1,
   e:"The crafted version personifies the fog and adds a simile, both deliberate choices for atmosphere. Length alone is not craft, and it actually relies on a strong verb, not the absence of one."},
  {q:"A piece that races through six events in two pages most likely loses marks for:", opts:["Spelling","Reading accuracy","Comparison","Lack of crafted detail and control (content and organisation)"], c:3,
   e:"Rushing the plot sacrifices the crafted description and shaping that earn content marks. The flaw is organisation and craft, not necessarily spelling."},
  {q:"Which is the strongest planning step for a 5-minute creative plan?", opts:["Decide the mood and a structure, then note 3 to 4 key images","Write the full first paragraph","Count how many lines you will write","Choose a title only"], c:0,
   e:"Setting mood, structure and a few key images gives the piece direction in seconds. Drafting a full paragraph eats planning time, and a title or line-count plans nothing."},
  {q:"Judge this line for craft: 'The market was busy and loud and there were lots of people.' It is weak because it:", opts:["Lists plain facts without sensory imagery or precise word choice","Is too imaginative","Uses too much punctuation","Contains a metaphor"], c:0,
   e:"It states facts plainly with no imagery or precise diction, so it shows little craft. It is not over-imaginative and contains no metaphor at all."}
]);

FLASHCARDS.push(
  // e11i-05-4 — Q2: Language Analysis
  {id:"e11fc-05-4-6", islandId:"e11i-05-4", front:"What is 'feature-spotting' and why does it cap your Q2 marks?",
   back:"Feature-spotting = listing techniques ('there is a simile, a metaphor and alliteration') without analysing any effect.\n\nIt stays in the lower bands. Depth on one method, explored to its effect on the reader, beats a shallow list.", difficulty:2, category:"concept"},
  {id:"e11fc-05-4-7", islandId:"e11i-05-4", front:"Give an example of analysing a SENTENCE FORM, not just a word, in Q2.",
   back:"e.g. 'The short, blunt sentence — \"It was gone.\" — halts the rhythm and mirrors the character's shock.'\n\nSentence length and structure are language methods too, not only vocabulary and imagery.", difficulty:3, category:"application"},
  {id:"e11fc-05-4-8", islandId:"e11i-05-4", front:"Why analyse CONNOTATIONS rather than just define a word in Q2?",
   back:"Connotations are the associations a word carries (e.g. 'crimson' suggests violence or alarm, beyond simply 'red').\n\nExploring connotations shows how the writer's precise choice shapes the reader's response — exactly what Q2 rewards.", difficulty:3, category:"concept"});

QUESTIONS["e11i-05-4"] = (QUESTIONS["e11i-05-4"] || []).concat([
  {q:"'Feature-spotting' in Q2 means:", opts:["Listing techniques without analysing their effect","Choosing short quotations","Naming the reader's response","Embedding quotations neatly"], c:0,
   e:"Feature-spotting lists methods with no analysis of effect and stays low in the bands. Short quotations, reader response and embedding are all good habits, not the fault being named."},
  {q:"Which is a SENTENCE-FORM method you could analyse in Q2?", opts:["A short, abrupt sentence used for shock","A cyclical structure","A shift in focus","Listing four true statements"], c:0,
   e:"Sentence length and form (e.g. a blunt short sentence) is a Q2 language method. Cyclical structure and shifts in focus are whole-text structure for Q3."},
  {q:"Analysing the CONNOTATIONS of 'crimson' means discussing:", opts:["That it is simply a colour","How to spell it","Where it appears in the extract","Its associations, such as violence or danger"], c:3,
   e:"Connotations are the associations a word triggers in the reader, which is how Q2 earns depth. Merely calling it 'a colour' or noting its position adds no analysis."},
  {q:"The best quotation length for Q2 is:", opts:["A whole paragraph","A full long sentence","A short embedded word or phrase","No quotation at all"], c:2,
   e:"A short, embedded quotation lets you zoom in on the precise word doing the work. Long quotations waste time and usually hold only one analysable detail."},
  {q:"'The verb \"clawed\" makes the ivy seem like a predator, unsettling the reader.' This is strong because it:", opts:["Lists many techniques","Summarises the plot","Names a method, uses a short quote and explains the effect","Avoids any quotation"], c:2,
   e:"It moves from method (the loaded verb) to a short quote to the effect on the reader — the Q2 chain. It does not list, summarise or omit the quotation."},
  {q:"Which response would reach the HIGHEST Q2 band?", opts:["There is a metaphor and a simile and personification.","The writer describes a crowd.","The crowd is big.","The metaphor 'a sea of faces' reduces the crowd to a single overwhelming mass, making the narrator feel insignificant and lost."], c:3,
   e:"The fourth develops one method to a precise effect on the narrator and reader. The first feature-spots; the others retell or state the obvious without analysis."},
  {q:"In the method-effect-reader chain, the part students most often omit is:", opts:["Naming the method","Choosing a quotation","The reader's response","Reading the lines"], c:2,
   e:"Many answers name a method and stop, omitting the reader's response that completes the chain. Naming methods and quoting are the parts students usually do remember."},
  {q:"'Subject terminology' rewards using words such as:", opts:["Lovely, interesting, nice","The author's first name","Quotations copied at length","Sibilance, declarative, semantic field"], c:3,
   e:"Subject terminology is the accurate technical vocabulary for methods (sibilance, declarative, semantic field). Vague adjectives and biography are not terminology."},
  {q:"A 'semantic field' is best described as:", opts:["A group of words linked by a shared theme or idea","A single metaphor","A type of full stop","A structural shift"], c:0,
   e:"A semantic field is a cluster of words sharing a theme (e.g. words of decay), useful for Q2 patterns. It is not one metaphor, a punctuation mark or a structural device."},
  {q:"Classify this point: 'The writer ends the extract with the same image of the locked gate it began with.' It belongs in:", opts:["Q2 language","Q3 structure","Q1 list","Q4 writing"], c:1,
   e:"An ending echoing the opening is a cyclical STRUCTURE, so it belongs in Q3, not the Q2 language question. The mention of an 'image' tempts a Q2 label, but the point is about overall shape."}
]);

FLASHCARDS.push(
  // e11i-05-5 — Q3: Analysing Structure
  {id:"e11fc-05-5-6", islandId:"e11i-05-5", front:"Why does Q3 say 'this WHOLE source', and how should that shape your answer?",
   back:"Q3 asks about structure across the entire extract, so your evidence should range from the opening, through the middle, to the ending.\n\nFocusing on only one paragraph misses the tracking-across-the-text that Q3 rewards.", difficulty:2, category:"application"},
  {id:"e11fc-05-5-7", islandId:"e11i-05-5", front:"What is a PERSPECTIVE shift, and how is it a structural feature?",
   back:"The writer moves the viewpoint from one character or vantage point to another (e.g. from the watcher to the watched).\n\nIt reorders whose eyes we see through across the text, which is structure, not a single word choice.", difficulty:3, category:"definition"},
  {id:"e11fc-05-5-8", islandId:"e11i-05-5", front:"How can PARAGRAPHING itself be structural evidence in Q3?",
   back:"A sudden one-line paragraph, or a long descriptive block followed by a short punchy one, controls pace and emphasis.\n\nWhere the writer breaks the text is a structural decision you can analyse for its effect.", difficulty:3, category:"application"});

QUESTIONS["e11i-05-5"] = (QUESTIONS["e11i-05-5"] || []).concat([
  {q:"Q3 directs you to consider:", opts:["A single short quotation","Four true statements","The whole source's structure","Two compared texts"], c:2,
   e:"Q3 asks about structure across the whole source, so evidence should span opening to ending. A single quotation suits Q2; comparison and listing are other questions."},
  {q:"A 'perspective shift' is structural because it:", opts:["Changes whose viewpoint we follow across the text","Is a type of metaphor","Describes one adjective","Lists statements"], c:0,
   e:"Moving the viewpoint reorders how the text is told and belongs to structure. A metaphor or adjective is word-level language for Q2."},
  {q:"A sudden one-line paragraph after a long description mainly affects:", opts:["Spelling","The reader's vocabulary","The line reference","Pace and emphasis (a structural effect)"], c:3,
   e:"Paragraphing controls pace and emphasis, a structural choice for Q3. It is not about spelling or vocabulary, and it has nothing to do with line references."},
  {q:"Which point is correctly placed in Q3?", opts:["The connotations of the verb 'hissed'","The simile compares the sky to slate","The text opens wide on the moor, then narrows to one cottage window","The adjective 'jagged' suggests danger"], c:2,
   e:"A move from a wide view to a single window is a structural zoom, the heart of Q3. The other three analyse single words or images, which are Q2 language points."},
  {q:"Q3 scores lowest nationally chiefly because students:", opts:["Write too much structure","Slip into analysing language instead of structure","Use too few quotations","Run out of ink"], c:1,
   e:"The classic Q3 error is drifting into language analysis that belongs in Q2. Writing too much structure or quoting little are not the recognised national weakness."},
  {q:"'The writer withholds the cause of the scream until the final line.' This is an example of:", opts:["A simile","A semantic field","A spelling pattern","Withholding information (structural)"], c:3,
   e:"Delaying a key detail to build suspense is a structural device for Q3. A simile and a semantic field are language features; spelling is irrelevant here."},
  {q:"To show you are tracking the WHOLE text in Q3, you should:", opts:["Quote only the first sentence","Analyse one adjective deeply","Reference the opening, a mid-point shift and the ending","Summarise the plot in order"], c:2,
   e:"Referencing beginning, middle and end demonstrates whole-text tracking that Q3 rewards. Dwelling on one sentence or one adjective is too narrow, and summary is not analysis."},
  {q:"Which is a valid Q3 STRUCTURAL feature?", opts:["A cyclical ending that echoes the opening","The connotations of 'crimson'","A short embedded quotation of one verb","A list of four true statements"], c:0,
   e:"A cyclical ending shapes the whole extract and is structural. Connotations and a single-verb quotation are Q2 language; listing statements is Q1."},
  {q:"Judge this Q3 sentence: 'The writer uses the metaphor of a cage to show the character is trapped.' For Q3 it is flawed because it:", opts:["Is too short","Analyses a language method (metaphor) rather than structure","Has no quotation","Mentions a character"], c:1,
   e:"It analyses a metaphor, which is Q2 language, not the order or shape of the text. Its length, quoting or mention of a character is not the real problem for Q3."},
  {q:"A move from a wide landscape to a close-up of one hand is best termed a:", opts:["Zoom (structural shift in focus)","Simile","Declarative sentence","Semantic field"], c:0,
   e:"Narrowing from wide to close is a structural zoom or shift in focus for Q3. A simile, a declarative and a semantic field are all language-level terms for Q2."}
]);
