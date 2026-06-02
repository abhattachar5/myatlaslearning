// content/y9/english/islands/t03.js — Year 9 English Topic 3: Advanced Punctuation
// Islands e9i-03-1 .. e9i-03-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // e9i-03-1 — Semicolons & Colons
  {id:"e9fc-03-1-1", islandId:"e9i-03-1", front:"When do you use a semicolon?",
   back:"To join two closely related COMPLETE sentences without a conjunction.\n\n'The rain hammered down; the streets emptied.' Each side could stand alone as a sentence.", difficulty:1, category:"definition"},
  {id:"e9fc-03-1-2", islandId:"e9i-03-1", front:"When do you use a colon?",
   back:"To introduce a list, an explanation or an example — after a complete sentence.\n\n'She had one goal: to win.' The colon points forward to what follows.", difficulty:1, category:"definition"},
  {id:"e9fc-03-1-3", islandId:"e9i-03-1", front:"What's the key test for using a semicolon correctly?",
   back:"Both sides must be COMPLETE sentences (independent clauses).\n\n'I was tired; I went to bed.' ✓  'I was tired; because of work.' ✗ (the second part isn't a full sentence).", difficulty:2, category:"application"},
  {id:"e9fc-03-1-4", islandId:"e9i-03-1", front:"Can a semicolon separate items in a complex list?",
   back:"Yes — when the items themselves contain commas.\n\n'We visited Paris, France; Rome, Italy; and Madrid, Spain.' The semicolons prevent confusion.", difficulty:2, category:"concept"},
  {id:"e9fc-03-1-5", islandId:"e9i-03-1", front:"Which is correct: 'There are three colours: red, blue and green' or 'There are three colours; red, blue and green'?",
   back:"The colon version.\n\nA colon introduces a list; a semicolon joins two full sentences. After 'three colours' you are introducing a list, so use a colon.", difficulty:3, category:"application"}
);
Object.assign(QUESTIONS, {
  "e9i-03-1": [
    {q:"Which sentence uses a semicolon correctly?", opts:["The sky darkened; rain began to fall.","The sky darkened; because of the storm.","The sky; darkened quickly.","The sky darkened; and rained."], c:0,
     e:"Both sides are complete sentences, so the semicolon is correct."},
    {q:"Which sentence uses a colon correctly?", opts:["He needed one thing: courage.","He needed: one thing courage.","He needed one thing; courage.","He: needed one thing courage."], c:0,
     e:"A colon follows a complete sentence to introduce what comes next ('courage')."},
    {q:"A semicolon can join two clauses only if both are:", opts:["Complete sentences","Lists","Questions","Short"], c:0,
     e:"Each side of a semicolon must be an independent clause."},
    {q:"When is a semicolon used in a list?", opts:["When the items contain commas","Always","Never","Only for three items"], c:0,
     e:"Semicolons separate list items that themselves contain commas, avoiding confusion."},
    {q:"Choose the correctly punctuated sentence.", opts:["My plan was simple: wait and watch.","My plan was simple; wait and watch.","My plan was simple, wait: and watch.","My plan; was simple wait and watch."], c:0,
     e:"A colon introduces the explanation of the 'simple plan'."}
  ]
});
Object.assign(LESSONS, {
  "e9i-03-1": `<h2>Semicolons &amp; Colons</h2>
<p>A <strong>semicolon</strong> joins two closely related <em>complete sentences</em> without a conjunction: 'The rain hammered down; the streets emptied.' The test: both sides must work alone as sentences.</p>
<p>A <strong>colon</strong> introduces a list, explanation or example after a complete sentence: 'She had one goal: to win.' It points <em>forward</em> to what follows.</p>
<h3>Complex lists</h3>
<p>Semicolons also separate list items that already contain commas: 'We visited Paris, France; Rome, Italy; and Madrid, Spain.'</p>
<h3>Common mistake</h3>
<p>Don't use a semicolon before a fragment: 'I was tired; because of work' is wrong because 'because of work' isn't a full sentence — use a comma instead.</p>`
});

FLASHCARDS.push(
  // e9i-03-2 — Dashes, Brackets & Parenthesis
  {id:"e9fc-03-2-1", islandId:"e9i-03-2", front:"What is parenthesis?",
   back:"Extra, non-essential information added to a sentence, marked off by a PAIR of commas, dashes or brackets.\n\n'My brother — who lives abroad — is visiting.' Remove it and the sentence still works.", difficulty:1, category:"definition"},
  {id:"e9fc-03-2-2", islandId:"e9i-03-2", front:"What effect does a single dash create?",
   back:"It adds emphasis, a dramatic pause or an afterthought.\n\n'I knew exactly what to do — nothing.' The dash builds a beat of suspense before the punchline.", difficulty:2, category:"concept"},
  {id:"e9fc-03-2-3", islandId:"e9i-03-2", front:"How do brackets differ in tone from dashes?",
   back:"Brackets feel quieter — they tuck information away. Dashes feel bolder and draw attention.\n\n'(see chapter 3)' is discreet; '— and this matters —' is emphatic.", difficulty:2, category:"concept"},
  {id:"e9fc-03-2-4", islandId:"e9i-03-2", front:"What's the rule for paired parenthetical punctuation?",
   back:"Use the SAME mark at both ends.\n\nTwo commas, two dashes, or two brackets — never one dash and one comma. 'The dog, a spaniel — barked' is wrong.", difficulty:2, category:"application"},
  {id:"e9fc-03-2-5", islandId:"e9i-03-2", front:"Punctuate the parenthesis: 'The film which won three awards was brilliant.'",
   back:"'The film, which won three awards, was brilliant.'\n\nThe non-essential clause is enclosed in a pair of commas (dashes or brackets would also work).", difficulty:3, category:"application"}
);
Object.assign(QUESTIONS, {
  "e9i-03-2": [
    {q:"Which sentence shows parenthesis punctuated correctly?", opts:["My aunt, a retired nurse, lives nearby.","My aunt, a retired nurse lives nearby.","My aunt a retired nurse, lives nearby.","My aunt - a retired nurse, lives nearby."], c:0,
     e:"A pair of matching commas encloses the non-essential information."},
    {q:"What does a single dash most often create?", opts:["Emphasis or a dramatic pause","A list","A question","A new paragraph"], c:0,
     e:"A dash adds emphasis, suspense or an afterthought."},
    {q:"Compared with dashes, brackets generally feel:", opts:["Quieter / more discreet","Louder","Angrier","More formal only"], c:0,
     e:"Brackets tuck information away quietly; dashes draw attention."},
    {q:"Which is the parenthetical-punctuation error?", opts:["The book (a classic — is long.","The book (a classic) is long.","The book, a classic, is long.","The book — a classic — is long."], c:0,
     e:"It mixes an opening bracket with a closing dash; parenthetical marks must match."},
    {q:"Parenthetical information is:", opts:["Non-essential extra detail","The main point","Always a list","Always at the end"], c:0,
     e:"It can be removed and the sentence still makes sense."}
  ]
});
Object.assign(LESSONS, {
  "e9i-03-2": `<h2>Dashes, Brackets &amp; Parenthesis</h2>
<p><strong>Parenthesis</strong> is extra, non-essential information dropped into a sentence and marked off by a <em>pair</em> of commas, dashes or brackets: 'My brother — who lives abroad — is visiting.' Remove it and the sentence still works.</p>
<h3>Choosing the marks</h3>
<ul><li><strong>Commas</strong>: neutral, for gentle asides.</li><li><strong>Dashes</strong>: bold and emphatic — they draw attention.</li><li><strong>Brackets</strong>: quiet and discreet (tucking detail away).</li></ul>
<p>A single dash also adds drama or an afterthought: 'I knew exactly what to do — nothing.'</p>
<h3>Common mistake</h3>
<p>Always match your pair: two commas, two dashes <em>or</em> two brackets. Mixing 'The dog, a spaniel — barked' is incorrect.</p>`
});

FLASHCARDS.push(
  // e9i-03-3 — Apostrophes & Speech Punctuation
  {id:"e9fc-03-3-1", islandId:"e9i-03-3", front:"What are the two main jobs of an apostrophe?",
   back:"1) Possession: 'the dog's bone' (the bone belonging to the dog).\n2) Omission (contraction): 'do not' → 'don't'.\n\nApostrophes are NOT used to make plurals.", difficulty:1, category:"definition"},
  {id:"e9fc-03-3-2", islandId:"e9i-03-3", front:"Where does the apostrophe go for plural possession?",
   back:"After the s: 'the dogs' bones' (bones belonging to several dogs).\n\nSingular: dog's. Plural: dogs'. Irregular plural: children's.", difficulty:2, category:"application"},
  {id:"e9fc-03-3-3", islandId:"e9i-03-3", front:"What is the difference between 'its' and 'it's'?",
   back:"its = belonging to it (possessive, no apostrophe): 'The cat licked its paw.'\nit's = it is / it has (contraction): 'It's raining.'\n\nThis is the most common apostrophe error in English.", difficulty:2, category:"concept"},
  {id:"e9fc-03-3-4", islandId:"e9i-03-3", front:"State the rules for punctuating direct speech.",
   back:"• Put the spoken words inside inverted commas.\n• End with a punctuation mark INSIDE the closing inverted comma.\n• New speaker, new line.\n\n'Stop!' she shouted. He replied, 'Why?'", difficulty:2, category:"definition"},
  {id:"e9fc-03-3-5", islandId:"e9i-03-3", front:"Punctuate: come here said the teacher quietly",
   back:"'Come here,' said the teacher quietly.\n\nThe spoken words sit in inverted commas; a comma (inside) separates them from the reporting clause.", difficulty:3, category:"application"}
);
Object.assign(QUESTIONS, {
  "e9i-03-3": [
    {q:"Which uses the apostrophe correctly?", opts:["The teacher's desk was tidy.","The teachers' desk was tidy (one teacher).","The teacher's were late.","Three apple's."], c:0,
     e:"Singular possession: one teacher → teacher's. Apostrophes don't make plurals."},
    {q:"Choose the correct sentence.", opts:["It's been a long day.","Its been a long day.","Its' been a long day.","Its been a long day's."], c:0,
     e:"'It's' = 'it has' here. 'Its' (no apostrophe) is only possessive."},
    {q:"Where does the apostrophe go: bones belonging to several dogs?", opts:["dogs' bones","dog's bones","dogs's bones","dogs bones'"], c:0,
     e:"Plural possession puts the apostrophe after the s: dogs'."},
    {q:"Which sentence punctuates direct speech correctly?", opts:["'Run!' he yelled.","'Run!, he yelled.","Run! 'he yelled'.","'Run' he yelled!"], c:0,
     e:"The exclamation mark sits inside the inverted commas, and the reporting clause follows."},
    {q:"Apostrophes should NOT be used to:", opts:["Make a plural","Show possession","Show omission","Form a contraction"], c:0,
     e:"Plurals don't take apostrophes ('three apples', not 'three apple's')."}
  ]
});
Object.assign(LESSONS, {
  "e9i-03-3": `<h2>Apostrophes &amp; Speech Punctuation</h2>
<p>An apostrophe has two jobs: <strong>possession</strong> ('the dog's bone') and <strong>omission</strong> in contractions ('do not' → 'don't'). It is <em>never</em> used to make a plural.</p>
<h3>Possession rules</h3>
<p>Singular: <em>dog's</em>. Plural ending in s: <em>dogs'</em> (apostrophe after the s). Irregular plural: <em>children's</em>. The classic trap is <strong>its</strong> (belonging to it) versus <strong>it's</strong> (it is / it has).</p>
<h3>Direct speech</h3>
<p>Put spoken words in inverted commas, place the closing punctuation <em>inside</em> them, and start a new line for each new speaker: <em>'Come here,' said the teacher quietly.</em></p>
<h3>Common mistake</h3>
<p>Greengrocer's apostrophes — 'apple's' for a plural — are wrong. Apostrophes show possession or omission only.</p>`
});
