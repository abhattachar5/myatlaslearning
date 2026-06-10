// content/y10/english/islands/x07.js — Year 10 English Topic 7 expansion: Poetry Anthology & Comparison
// Adds 3 flashcards + 10 questions per island (e10i-07-1..e10i-07-3). All original; invented quotations only.

FLASHCARDS.push(
  // e10i-07-1 — Analysing Anthology Poems
  {id:"e10fc-07-1-6", islandId:"e10i-07-1", front:"What is a volta and why mention it?",
   back:"A turn or shift in a poem (often in argument, tone or mood).\n\nNaming the volta lets you track how the poem's meaning develops, e.g. a move from despair to hope.", difficulty:2, category:"concept"},
  {id:"e10fc-07-1-7", islandId:"e10i-07-1", front:"How does enjambment create meaning?",
   back:"By running a sentence over the line break, it can suggest flow, breathlessness or an idea that cannot be contained.\n\nAlways link the technique to its effect on meaning.", difficulty:2, category:"application"},
  {id:"e10fc-07-1-8", islandId:"e10i-07-1", front:"What is the difference between tone and mood?",
   back:"Tone is the speaker's attitude (e.g. bitter, tender); mood is the atmosphere the reader feels (e.g. tense, peaceful).\n\nDistinguishing them sharpens your analysis.", difficulty:3, category:"concept"},
  // e10i-07-2 — Comparing Anthology Poems
  {id:"e10fc-07-2-6", islandId:"e10i-07-2", front:"What is a 'point of comparison'?",
   back:"A single shared idea (theme, method or attitude) on which you weigh the two poems together.\n\nEach paragraph should develop one point of comparison.", difficulty:2, category:"concept"},
  {id:"e10fc-07-2-7", islandId:"e10i-07-2", front:"How can structure itself be compared?",
   back:"Compare how each poem is shaped, e.g. regular stanzas suggesting control versus fragmented form suggesting chaos.\n\nStructure carries meaning, not just language.", difficulty:3, category:"application"},
  {id:"e10fc-07-2-8", islandId:"e10i-07-2", front:"What does 'similarly' versus 'whereas' signal?",
   back:"'Similarly' links a shared method or attitude; 'whereas' marks a contrast.\n\nUsing both lets you track agreement and difference between the poems.", difficulty:1, category:"application"},
  // e10i-07-3 — Unseen Poetry Skills
  {id:"e10fc-07-3-6", islandId:"e10i-07-3", front:"What should the title of an unseen poem tell you?",
   back:"Often the subject, focus or a hint of attitude — a free clue to meaning before you read.\n\nUse it to frame your first overarching point.", difficulty:1, category:"application"},
  {id:"e10fc-07-3-7", islandId:"e10i-07-3", front:"How do you handle ambiguous imagery in an unseen poem?",
   back:"Offer more than one tentative reading ('this could suggest… or perhaps…').\n\nExaminers reward exploratory, layered interpretation over a single fixed claim.", difficulty:3, category:"concept"},
  {id:"e10fc-07-3-8", islandId:"e10i-07-3", front:"Why track shifts in an unseen poem?",
   back:"A change in tense, pronoun, tone or stanza often marks a turn in meaning you can analyse.\n\nNoticing the shift shows you understand the poem's development.", difficulty:2, category:"application"}
);

QUESTIONS["e10i-07-1"] = (QUESTIONS["e10i-07-1"] || []).concat([
  {q:"A 'volta' in a poem is:", opts:["A turn or shift in argument, tone or mood","A type of rhyme","A line that does not scan","A stanza break only"], c:0,
   e:"A volta is a turn in the poem; it is not simply a stanza break, which marks no necessary change in meaning."},
  {q:"Enjambment is when:", opts:["A pause is placed mid-line","A sentence runs over the line break","A line is end-stopped","Two words rhyme internally"], c:1,
   e:"Enjambment runs sense over the line ending; a mid-line pause is caesura, a different device."},
  {q:"Tone is best defined as:", opts:["The atmosphere the reader feels","The number of stanzas","The speaker's attitude","The rhyme scheme"], c:2,
   e:"Tone is the speaker's attitude; the atmosphere the reader feels is mood, which is the tempting confusion here."},
  {q:"A caesura is:", opts:["A run-on line","An opening rhyme","A deliberate pause within a line","A final couplet"], c:2,
   e:"A caesura is a pause inside the line; a run-on line is enjambment, the opposite effect."},
  {q:"The best reason to name a poem's form (e.g. sonnet) is to:", opts:["Show you know the word","Link the form to meaning or theme","Fill space in the essay","Count the lines"], c:1,
   e:"Form matters only when tied to meaning; merely labelling it gains little credit."},
  {q:"'The caged bird beats its bruised wings' most clearly uses:", opts:["Iambic pentameter","Imagery of confinement","A rhetorical question","End-stopping"], c:1,
   e:"The image evokes confinement and struggle; nothing in the line establishes a strict metre, so pentameter is a distractor."},
  {q:"An 'end-stopped' line is one that:", opts:["Ends with punctuation completing the sense","Runs into the next line","Contains a mid-line pause","Has no punctuation at all"], c:0,
   e:"End-stopping closes the sense at the line end; running into the next line is enjambment instead."},
  {q:"In 'the silence pressed against my chest', the silence is given physical force through:", opts:["Alliteration","A simile","A half-rhyme","Personification"], c:3,
   e:"Silence is given the human/physical action of pressing, so it is personified; there is no 'like'/'as', so it is not a simile."},
  {q:"Linking method to meaning means showing how a technique:", opts:["Sounds pleasant","Develops the poem's idea or theme","Was used by other poets","Fills the metre"], c:1,
   e:"Analysis must connect the device to what the poem explores; sound alone is description, not analysis."},
  {q:"A poem that moves from long flowing lines to short broken ones might be using structure to suggest:", opts:["A regular heartbeat","A happy resolution","Perfect calm","A loss of control or fragmentation"], c:3,
   e:"Breaking the lines mirrors breakdown or fragmentation; the shift away from flow makes 'calm' the wrong reading."}
]);

QUESTIONS["e10i-07-2"] = (QUESTIONS["e10i-07-2"] || []).concat([
  {q:"A 'point of comparison' is:", opts:["One shared idea you weigh both poems on","A single quotation","The longer poem","A list of methods"], c:0,
   e:"It is one shared idea (theme/method/attitude) explored across both poems, not a lone quote."},
  {q:"Comparing structure might involve contrasting:", opts:["Two unrelated rhymes","The fonts used","Regular stanzas versus fragmented form","The poets' ages"], c:2,
   e:"Structural comparison weighs how each poem is shaped; rhymes alone are not the structural contrast asked for."},
  {q:"Which connective best signals a shared attitude?", opts:["Whereas","However","In contrast","Similarly"], c:3,
   e:"'Similarly' links agreement; the other three all mark contrast, which is the opposite signal."},
  {q:"The strongest comparison paragraphs:", opts:["Analyse poem A fully, then poem B","List features of each","Quote only one poem","Weave both poems together on one point"], c:3,
   e:"Interweaving both poems sustains the comparison; analysing them in turn is the weakness examiners penalise."},
  {q:"A good comparative thesis states:", opts:["Only the first poem's theme","The central comparison the essay develops","Every method used","The number of stanzas"], c:1,
   e:"A comparative thesis frames the whole argument; covering only one poem is not yet a comparison."},
  {q:"'Both poets condemn war, yet one mourns the dead while the other blames the leaders.' This sentence:", opts:["Compares attitudes precisely","Describes one poem only","Lists rhymes","Avoids any link"], c:0,
   e:"It pins a shared stance then a difference; it does more than describe a single poem."},
  {q:"Comparing tone, you might say one poem is elegiac whereas the other is:", opts:["Also elegiac, identically","Written in a sonnet","Angry and accusatory","Twelve lines long"], c:2,
   e:"A genuine tonal contrast needs a different attitude; 'identical' offers nothing to compare."},
  {q:"If two poems share a theme but use opposite imagery, the best move is to:", opts:["Ignore the imagery","Compare how each image shapes meaning","Count the images","Pick the prettier image"], c:1,
   e:"You weigh how each contrasting image develops the shared theme; counting is not analysis."},
  {q:"'Where the first speaker whispers, the second roars' chiefly contrasts the poems':", opts:["Line lengths","Rhyme schemes","Voice and tone","Publication dates"], c:2,
   e:"Whispering versus roaring contrasts the speakers' voice and tone, not their rhyme or dates."},
  {q:"A comparison that only finds similarities is weaker because it:", opts:["Misses the contrasts that show real understanding","Is too short","Uses too many quotes","Names the poets"], c:0,
   e:"Strong comparison balances similarity and difference; similarities alone flatten the analysis."}
]);

QUESTIONS["e10i-07-3"] = (QUESTIONS["e10i-07-3"] || []).concat([
  {q:"The title of an unseen poem is useful because it:", opts:["Tells you the rhyme scheme","Often hints at subject or attitude","Counts towards the word limit","Names the poet"], c:1,
   e:"Titles frequently signal focus or attitude, giving a free clue to meaning; they rarely reveal the rhyme scheme."},
  {q:"Faced with ambiguous imagery, the best approach is to:", opts:["Offer more than one tentative reading","Choose one meaning and insist on it","Skip the image","Copy it out unanalysed"], c:0,
   e:"Layered, exploratory readings score well; insisting on a single fixed meaning closes down the analysis."},
  {q:"A shift in tense or pronoun in an unseen poem often signals:", opts:["A printing error","The end of the poem","A turn in meaning to analyse","A change of poet"], c:2,
   e:"Such shifts usually mark a development in meaning; they are deliberate, not errors."},
  {q:"Under time pressure, the first sentence of an unseen response should give:", opts:["A clear overarching point about meaning","A full plot summary","The poet's biography","A list of every device"], c:0,
   e:"A clear thesis focuses the answer; summary and biography delay the analysis that earns marks."},
  {q:"When two unseen poems must be compared quickly, prioritise:", opts:["Listing all devices in both","Only the first poem","The neatest handwriting","One or two clear comparisons in depth"], c:3,
   e:"Depth on a couple of comparisons beats a shallow list; covering one poem is not a comparison."},
  {q:"A tentative phrase such as 'this could suggest' is valued because it:", opts:["Wastes words","Hides a lack of effort","Shows exploratory, thoughtful interpretation","Avoids the poem"], c:2,
   e:"Exploratory phrasing signals careful reading; it is rewarded, not penalised, when the idea is relevant."},
  {q:"'The clock's hands clawed at the hour' uses which device to suggest menace?", opts:["A rhyming couplet","Personification through the verb 'clawed'","A caesura","An iambic foot"], c:1,
   e:"'Clawed' gives the clock a threatening, animal action, so it is personified; no rhyme or pause is involved."},
  {q:"Annotating an unseen poem efficiently means marking:", opts:["Every single word","Only the last line","The page number","Key words, images and shifts"], c:3,
   e:"Target the load-bearing words and turning points; annotating everything wastes precious time."},
  {q:"In 'dawn crept in like a thief', the comparison is signalled by 'like', making it:", opts:["A metaphor","A simile","Personification","Onomatopoeia"], c:1,
   e:"'Like' marks a simile; without it the same idea ('dawn, a soft thief') would become a metaphor."},
  {q:"The best way to avoid mere description in an unseen answer is to:", opts:["Always link a method to its effect on meaning","Quote longer passages","Name more devices","Write a longer introduction"], c:0,
   e:"Tying each method to meaning turns description into analysis; simply naming devices stays descriptive."}
]);
