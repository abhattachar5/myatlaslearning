// content/y11/english/islands/x02.js — Year 11 English Topic 2 EXPANSION: Grammar & Accuracy under Pressure
// Adds 3 flashcards + 10 questions per island for e11i-02-1, e11i-02-2, e11i-02-3. All original.

FLASHCARDS.push(
  // e11i-02-1 — Common Errors to Eliminate
  {id:"e11fc-02-1-6", islandId:"e11i-02-1", front:"Explain the difference between your and you're.",
   back:"Your = belonging to you ('your bag').\nYou're = you are ('you're early').\n\nTest by expanding: if 'you are' fits the sentence, use you're; otherwise use your.", difficulty:1, category:"definition"},
  {id:"e11fc-02-1-7", islandId:"e11i-02-1", front:"What is a run-on sentence and how do you fix it?",
   back:"A run-on fuses two independent clauses with no punctuation at all: 'The bell rang we left.'\n\nFix with a full stop, a semicolon, or a conjunction: 'The bell rang, so we left.'", difficulty:2, category:"concept"},
  {id:"e11fc-02-1-8", islandId:"e11i-02-1", front:"Identify the error: 'Me and him went to the shop.'",
   back:"Subject pronouns are needed: 'He and I went to the shop.'\n\nTest by removing the other person — you would say 'I went', not 'me went', and 'he went', not 'him went'.", difficulty:2, category:"application"}
);

QUESTIONS["e11i-02-1"] = (QUESTIONS["e11i-02-1"] || []).concat([
  {q:"Which is correct?", opts:["Your late, so grab you're coat.","You're late, so grab your coat.","You're late, so grab you're coat.","Your late, so grab your coat."], c:1,
   e:"'You're' expands to 'you are late'; 'your coat' shows possession. The tempting option swaps the two, but only one reading expands correctly."},
  {q:"'The bell rang we left the room.' This error is a:", opts:["Run-on sentence","Comma splice","Tense shift","Spelling error"], c:0,
   e:"Two independent clauses with no punctuation between them is a run-on. A comma splice would at least have a comma joining them, which this sentence lacks."},
  {q:"Choose the correct possessive: the bikes belonging to several boys are the ___ bikes.", opts:["boys's","boy's","boys'","boys"], c:2,
   e:"A plural noun already ending in s takes just an apostrophe: 'boys''. 'Boy's' would mean only one boy, which the plural sense rules out."},
  {q:"Which sentence uses pronouns correctly?", opts:["Her and me finished first.","Me and her finished first.","Her and I finished first.","She and I finished first."], c:3,
   e:"Subjects need subject pronouns: 'She and I'. Removing the other person gives 'I finished', not 'me finished', which exposes the tempting 'me' options as wrong."},
  {q:"Which sentence is spelt correctly?", opts:["I would of helped if I had known.","I would have helped if I had known.","I would have helped if I had knew.","I would of helped if I had knew."], c:1,
   e:"'Would have' is correct; 'would of' is a mishearing of the contraction 'would've'. The past participle is 'known', not 'knew'."},
  {q:"Identify the correctly punctuated possessive: the toys belonging to the children are the ___ toys.", opts:["childrens'","childs'","children","children's"], c:3,
   e:"'Children' is already plural, so it takes 's: 'children's'. 'Childrens'' wrongly treats 'childrens' as the plural, but 'children' is the plural form."},
  {q:"'Its been raining all day, so the dog wagged it's tail by the door.' Corrected, this reads:", opts:["Its been raining all day, so the dog wagged its tail by the door.","It's been raining all day, so the dog wagged it's tail by the door.","It's been raining all day, so the dog wagged its tail by the door.","Its been raining all day, so the dog wagged it's tail by the door."], c:2,
   e:"'It's' = 'it has' (it's been); 'its tail' is possessive with no apostrophe. The sentence reverses both, which is the most common its/it's slip."},
  {q:"Which sentence keeps a consistent tense?", opts:["She opened the door and stepped into the hall.","She opened the door and steps into the hall.","She opens the door and stepped into the hall.","She had opened the door and steps into the hall."], c:0,
   e:"Both verbs stay in the past: 'opened' and 'stepped'. The other versions lurch into the present 'steps', an unjustified tense shift that loses control marks."},
  {q:"Correct the agreement error: 'Each of the pupils ___ their own pen.' The most accurate choice is:", opts:["have","has","were having","are having"], c:1,
   e:"'Each' is singular and governs the verb, so 'has' agrees. 'Have' is tempting because 'pupils' sits nearby, but the true subject is the singular 'each'."},
  {q:"Which is the most accurate sentence?", opts:["There were less mistakes in her second draft than in her first.","There were lesser mistakes in her second draft than in her first.","There were fewer mistakes in her second draft than in her first.","There were least mistakes in her second draft than in her first."], c:2,
   e:"'Fewer' is used for countable nouns like 'mistakes'; 'less' is for uncountable amounts. 'Less mistakes' is a common error because the two words feel interchangeable, but they are not."}
]);

FLASHCARDS.push(
  // e11i-02-2 — Sophisticated Sentence Control
  {id:"e11fc-02-2-6", islandId:"e11i-02-2", front:"What is a fronted adverbial and why open with one?",
   back:"An adverbial (a word or phrase describing how, when or where) placed at the start of a sentence, set off by a comma: 'Without warning, the lights died.'\n\nIt varies sentence openings and controls pace.", difficulty:2, category:"concept"},
  {id:"e11fc-02-2-7", islandId:"e11i-02-2", front:"What is a minor sentence and when should you use one?",
   back:"A deliberate fragment with no main verb, used for impact: 'Silence.' or 'No escape.'\n\nUse sparingly, after longer sentences, so the contrast lands. Overused, it reads as careless error rather than craft.", difficulty:2, category:"application"},
  {id:"e11fc-02-2-8", islandId:"e11i-02-2", front:"How does sentence length control pace in description?",
   back:"Long, flowing sentences slow the reader and build atmosphere; short, clipped sentences speed the action and create tension.\n\nDeliberately alternating the two lets you steer the reader's pulse through a passage.", difficulty:2, category:"concept"}
);

QUESTIONS["e11i-02-2"] = (QUESTIONS["e11i-02-2"] || []).concat([
  {q:"A compound sentence is formed by:", opts:["Joining a main clause to a subordinate clause","Joining two independent clauses with a coordinating conjunction","Using a single clause only","Removing the main verb"], c:1,
   e:"Compound = two independent clauses joined by a FANBOYS conjunction (and, but, so). Joining a main to a subordinate clause would make it complex, not compound."},
  {q:"Which sentence opens with a fronted adverbial?", opts:["The floorboards creaked without warning.","The floorboards, creaking, gave way.","Without warning, the floorboards creaked.","Creaking floorboards startled her."], c:2,
   e:"'Without warning,' is an adverbial phrase placed at the front and followed by a comma. The others keep the adverbial mid- or end-sentence, so they are not fronted."},
  {q:"Which is a minor sentence used for effect?", opts:["She found no way out of the locked cellar.","There was no way out and she panicked.","Although there was no way out, she searched.","No way out."], c:3,
   e:"'No way out.' is a deliberate verbless fragment for impact. The others are full sentences with verbs, so they do not count as minor sentences."},
  {q:"To slow the pace and build atmosphere, a writer should mainly use:", opts:["Long, flowing complex sentences","Rapid one-word sentences","Bullet points","Capital letters"], c:0,
   e:"Long, layered sentences make the reader linger, building mood. Short clipped sentences do the opposite, speeding the action rather than slowing it."},
  {q:"Which sentence shows the best variety of structure?", opts:["Dawn broke. Mist came. It was grey. Silence came too.","Dawn broke slowly; mist clung to the valley, soft and grey. Then, silence.","Dawn broke slowly and mist clung to the valley and it was grey and silent.","dawn broke slowly mist clung to the valley it was grey and silent"], c:1,
   e:"It blends a semicolon-linked compound-complex sentence with a short minor sentence for impact. The repetitive simple sentences and the comma-free run-on show far less control."},
  {q:"Where is the subordinate clause in 'Although the storm raged, the lighthouse held firm'?", opts:["the lighthouse held firm","held firm","Although the storm raged","raged, the lighthouse"], c:2,
   e:"'Although the storm raged' cannot stand alone, so it is subordinate. 'The lighthouse held firm' is the main clause because it makes complete sense by itself."},
  {q:"Which sentence uses a subordinate clause embedded in the middle?", opts:["The cliff crumbled for years and finally collapsed.","The cliff finally collapsed after years.","Years passed and the cliff collapsed.","The cliff, which had crumbled for years, finally collapsed."], c:3,
   e:"'which had crumbled for years' is embedded inside the main clause, set off by commas. The others place their extra information before or after, not embedded in the middle."},
  {q:"Choose the most controlled way to vary three short ideas: 'The room was silent. The clock ticked. She waited.'", opts:["The room was silent, save for the ticking clock; she waited.","The room was silent and the clock ticked and she waited.","The room was silent, the clock ticked, she waited.","The room was silent. The clock. She waited then."], c:0,
   e:"A subordinated phrase plus a semicolon links the ideas with control. The 'and...and' version drags, and the comma-spliced version joins independent clauses with mere commas."},
  {q:"Which sentence correctly uses a coordinating conjunction to form a compound sentence?", opts:["The tide rose quickly, the children ran for the dunes.","The tide rose quickly, so the children ran for the dunes.","The tide rose quickly the children ran for the dunes.","Because the tide rose quickly the children ran."], c:1,
   e:"'so' is a coordinating conjunction joining two independent clauses after a comma. The second is a comma splice, the third a run-on, and the fourth is complex, not compound."},
  {q:"A writer wants a sudden jolt after a long, tense build-up. The most effective next sentence is:", opts:["The thing that had been there only moments before had now completely and utterly disappeared from view.","Slowly, it began to fade away into the distance somehow.","It was gone.","It seemed, perhaps, to have possibly vanished."], c:2,
   e:"The short, blunt 'It was gone.' delivers the jolt through contrast. The longer, hedged options dilute the shock with extra words, undercutting the very effect intended."}
]);

FLASHCARDS.push(
  // e11i-02-3 — Punctuation for Effect & SPaG Marks
  {id:"e11fc-02-3-6", islandId:"e11i-02-3", front:"How do you punctuate direct speech correctly?",
   back:"Open speech marks, capital letter, the spoken words, then punctuation INSIDE the closing marks: 'Run!' she shouted.\n\nWhen the speech tag comes first, use a comma before the speech: She whispered, 'Don't move.'", difficulty:2, category:"application"},
  {id:"e11fc-02-3-7", islandId:"e11i-02-3", front:"What does a pair of brackets or dashes do for parenthesis?",
   back:"They enclose extra, non-essential information that could be removed without breaking the sentence: 'The house — long abandoned — still stood.'\n\nThe sentence must still read correctly once the parenthesis is lifted out.", difficulty:2, category:"application"},
  {id:"e11fc-02-3-8", islandId:"e11i-02-3", front:"When do you use a comma after a subordinate clause?",
   back:"When the subordinate clause comes FIRST, place a comma before the main clause: 'When the rain stopped, we left.'\n\nIf the main clause comes first, you usually need no comma: 'We left when the rain stopped.'", difficulty:2, category:"concept"}
);

QUESTIONS["e11i-02-3"] = (QUESTIONS["e11i-02-3"] || []).concat([
  {q:"Which sentence punctuates direct speech correctly?", opts:["'Get back'! he yelled.","'Get back !' he yelled.","'Get back' he yelled!","'Get back!' he yelled."], c:3,
   e:"The exclamation mark belongs inside the closing speech marks, with no space before it. The other versions misplace the mark outside or away from the words spoken."},
  {q:"Which sentence uses a colon correctly to introduce a list?", opts:["She packed three things: a torch, a map and some water.","She packed three things; a torch, a map and some water.","She packed: three things a torch, a map and some water.","She packed three things, a torch: a map and some water."], c:0,
   e:"A colon follows a complete clause and introduces the list. A semicolon cannot introduce a list, and the misplaced colons in the other options break the clause."},
  {q:"Which correctly uses a pair of dashes for parenthesis?", opts:["The cellar — cold and damp had not been opened for years.","The cellar — cold and damp — had not been opened for years.","The cellar cold and damp — had not been opened for years.","The cellar, cold and damp — had not been opened for years."], c:1,
   e:"Parenthetical dashes come in a matched pair surrounding the extra detail. The other versions use only one dash or mix a comma with a dash, so the parenthesis is not closed."},
  {q:"Which sentence places the comma correctly after a fronted subordinate clause?", opts:["As the door creaked open she froze.","As the door creaked, open she froze.","As the door creaked open, she froze.","As, the door creaked open she froze."], c:2,
   e:"A subordinate clause at the start is followed by a comma before the main clause. The other versions omit the comma or insert it inside the clause, breaking the sense."},
  {q:"'The garden, was overgrown and wild.' The error here is:", opts:["A missing semicolon","A spelling mistake","A missing colon","An unnecessary comma splitting subject from verb"], c:3,
   e:"A single comma should never separate a subject ('The garden') from its verb ('was'). No other punctuation is needed; the comma simply has to go."},
  {q:"Which sentence uses a semicolon correctly?", opts:["The wind howled; the shutters rattled all night.","The wind howled; and the shutters rattled.","The wind howled; loudly all night.","The wind; howled all night."], c:0,
   e:"A semicolon links two independent clauses that could each stand alone. The other versions place it before a conjunction, a fragment, or between subject and verb, all incorrect."},
  {q:"Which sentence correctly uses an apostrophe in a contraction for a tense, hurried tone?", opts:["We cant wait; theyre already here and its nearly dark.","We can't wait; they're already here and it's nearly dark.","We can't wait; their already here and its nearly dark.","We cant wait; they're already here and it's nearly dark."], c:1,
   e:"'can't', 'they're' and 'it's' all need apostrophes to mark the missing letters. The distractors drop apostrophes or confuse 'their' with 'they're', losing accuracy."},
  {q:"To isolate a final word for chilling emphasis, the best punctuation is:", opts:["The corridor stretched on endless and black waiting.","The corridor stretched on, endless and black, waiting.","The corridor stretched on, endless and black — waiting.","The corridor stretched on; endless; black; waiting."], c:2,
   e:"A dash sets 'waiting' apart for a held, ominous emphasis. The comma version blends it in, the unpunctuated version is a run-on, and the stacked semicolons fragment the clause awkwardly."},
  {q:"Which sentence correctly punctuates a speech tag placed before the speech?", opts:["She murmured 'I think someone is here.'","She murmured: 'i think someone is here.'","She murmured, 'i think someone is here'.","She murmured, 'I think someone is here.'"], c:3,
   e:"A comma follows the tag, the speech starts with a capital, and the full stop sits inside the closing marks. The distractors drop the comma, lower the capital, or put the stop outside."},
  {q:"Choose the version that uses an ellipsis with greatest control for suspense:", opts:["She turned the handle slowly, and then...","She... turned... the... handle... slowly...","She turned the handle slowly... and then... it opened... finally...","...She turned the handle slowly and then."], c:0,
   e:"A single ellipsis at the moment of tension makes the reader lean in. Scattering ellipses through the sentence, or opening with one, drains the suspense rather than building it."}
]);
