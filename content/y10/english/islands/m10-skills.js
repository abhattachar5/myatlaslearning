// content/y10/english/islands/m10-skills.js — Year 10 English, A Christmas Carol
// EXAM-TECHNIQUE island e10i-10-8 "Answering the Novel Question" (AQA Literature
// Paper 1 Section B: the 19th-century novel). This island teaches HOW to answer the
// extract question (AO1/AO2/AO3 method), not new plot knowledge.
// Authored by the atlas-content skill. English island accent colour #f59e0b.

// ── e10i-10-8 — Answering the Novel Question ─────────────────────────────────
FLASHCARDS.push(
  {id:"e10fc-10-8-1", islandId:"e10i-10-8", front:"What does the novel question ask, and which AOs are tested?",
   back:"'Starting with this extract, explore how Dickens presents [X]' — first in the extract, then in the novel as a whole, for 30 marks.\n\nAO1: an informed, personal response with apt references.\nAO2: analysis of Dickens's methods (language, structure, form, symbolism) using terminology and effect.\nAO3: relevant Victorian context (1834 Poor Law, Malthus, social responsibility).", difficulty:2, category:"concept"},
  {id:"e10fc-10-8-2", islandId:"e10i-10-8", front:"How should you read the extract quickly and purposefully?",
   back:"Spend about five minutes. Read it twice with the focus word in mind, underline three or four short phrases that show the theme, and label a method beside each (e.g. simile, imperative, symbol). You are mining evidence, not just understanding the plot.", difficulty:2, category:"application"},
  {id:"e10fc-10-8-3", islandId:"e10i-10-8", front:"What makes a strong thesis for this question?",
   back:"A single argued line about HOW Dickens presents the theme and WHY — his purpose. Not 'Dickens shows poverty', but 'Dickens presents poverty as a moral test of society, using the Cratchits to make indifference impossible to defend.' It answers 'how' and 'so what'.", difficulty:3, category:"application"},
  {id:"e10fc-10-8-4", islandId:"e10i-10-8", front:"How do you hit AO2 — analyse Dickens's METHODS?",
   back:"Name the method, quote briefly, explain the effect on the reader, and link to purpose. Use terminology: simile, metaphor, symbolism, imperative, narrative voice, semantic field, structure, foil, allegory, juxtaposition. Always finish with effect, not just a label.", difficulty:3, category:"application"},
  {id:"e10fc-10-8-5", islandId:"e10i-10-8", front:"How should you embed quotations?",
   back:"Keep them short and build them into your own sentence, then zoom in on a single word.\n\nWeak: a long copied line.\nStrong: The simile 'solitary as an oyster' encloses Scrooge, the adjective 'solitary' stressing chosen isolation.", difficulty:2, category:"application"},
  {id:"e10fc-10-8-6", islandId:"e10i-10-8", front:"How do you move from the extract to the whole novel?",
   back:"Treat the extract as a springboard. Analyse it first, then use linked moments from elsewhere ('Later, in Stave 5...') to trace how Dickens develops the theme across the staves. Track change and contrast rather than retelling the plot.", difficulty:2, category:"application"},
  {id:"e10fc-10-8-7", islandId:"e10i-10-8", front:"How do you weave context (AO3) so it is relevant, not bolted on?",
   back:"Tie context to the method and meaning in the same sentence, never as a stuck-on fact. Bolted on: 'The Poor Law was passed in 1834.' Woven: 'Scrooge's wish to cut the surplus population voices the Malthusian thinking the 1834 Poor Law embodied, which Dickens gives his villain in order to discredit it.'", difficulty:3, category:"application"},
  {id:"e10fc-10-8-8", islandId:"e10i-10-8", front:"What reaches the top band, and how should you manage time?",
   back:"About 50 minutes: 5 reading and planning, then a thesis, three or four analytical paragraphs (start in the extract, move to the whole novel), and a short conclusion. The top band shows a sustained conceptual argument, short embedded quotations analysed closely, and context woven into meaning.", difficulty:2, category:"concept"}
);
Object.assign(QUESTIONS, {
  "e10i-10-8": [
    {q:"The novel question is worth 30 marks and asks you to write about the theme in:", opts:["The whole novel only","The extract only","The extract first, then the novel as a whole","Another Dickens novel"], c:2,
     e:"You start with the printed extract, then explore the same theme across the whole novel."},
    {q:"Which opening best states a THESIS rather than just naming the theme?", opts:["This extract is about poverty in the novel.","Dickens presents poverty as a moral test of society, using the suffering of the Cratchits to make indifference impossible to defend.","Dickens wrote about poor people in Victorian times.","There is a lot of poverty in A Christmas Carol."], c:1,
     e:"A thesis argues HOW and WHY Dickens presents the theme — the others only label or describe it."},
    {q:"Which sentence ANALYSES a method rather than just spotting one?", opts:["Dickens uses a simile here.","There is a simile, 'hard and sharp as flint'.","The simile 'hard and sharp as flint' presents Scrooge as cold and unyielding, the mineral imagery denying him any human warmth.","Dickens uses lots of imagery in this extract."], c:2,
     e:"Spotting names the device; analysing explains the effect of a specific word on the reader."},
    {q:"Which use of context is RELEVANT, not bolted on?", opts:["The 1834 Poor Law created workhouses.","Malthus was an economist who wrote about population.","Scrooge's 'surplus population' line voices the Malthusian thinking Dickens gives his villain precisely in order to discredit it.","Queen Victoria reigned for a long time."], c:2,
     e:"Relevant context is tied to the method and meaning in the same breath; the others are free-standing facts."},
    {q:"Roughly how long should you spend reading and planning before writing?", opts:["About five minutes","Twenty-five minutes","No time at all","The full hour"], c:0,
     e:"About five minutes to read twice, underline evidence and label methods, leaving time to write fully."},
    {q:"Which is the best way to embed a quotation?", opts:["Copy a long passage and leave it to speak for itself.","The narrator calls him 'solitary as an oyster', the adjective 'solitary' stressing a chosen, self-made isolation.","Quote with no comment afterwards.","Retell what happens around the quotation."], c:1,
     e:"Short, embedded quotations zoomed in on one word score far higher than long copied lines."},
    {q:"To move from the extract to the whole novel, you should:", opts:["Retell the plot of every stave in order.","Ignore the extract and write only about Stave 5.","Summarise the ending.","Analyse the extract, then trace the theme through linked moments elsewhere, tracking change and contrast."], c:3,
     e:"Use the extract as a springboard and develop the theme across the staves, not a plot summary."},
    {q:"Which sentence shows analysis of NARRATIVE VOICE?", opts:["Scrooge is mean to Bob Cratchit.","The intrusive narrator's warmth towards the Cratchits steers the reader to pity them, isolating Scrooge's coldness by contrast.","There are five staves in the novella.","Tiny Tim is ill."], c:1,
     e:"It analyses how Dickens's narrator shapes the reader's sympathy — a structural and formal method."},
    {q:"A top-band response is best described as:", opts:["A retelling of the plot with quotations added.","A list of every device in the extract.","A long context essay about Victorian Britain.","A sustained conceptual argument with short embedded quotations and context woven into meaning."], c:3,
     e:"The top band rewards a sustained argument, precise embedded analysis, and integrated context."},
    {q:"Which terminology best fits Dickens's use of Ignorance and Want?", opts:["Allegory","Onomatopoeia","Iambic pentameter","Stage direction"], c:0,
     e:"The two children are an allegory — figures standing for the neglect of the poor."},
    {q:"Which paragraph opening best signals a move to the whole novel?", opts:["Firstly, the extract begins with...","Later, in Stave 5, Dickens develops this same idea when the reformed Scrooge...","In conclusion, Dickens shows...","The extract is from the start of the novel."], c:1,
     e:"A discourse marker like 'Later, in Stave 5' links the extract to the wider novel and tracks development."},
    {q:"Which sentence analyses STRUCTURE rather than language?", opts:["The word 'flint' is a hard, cold noun.","By framing the novel's close as a return to Christmas morning, Dickens structures Scrooge's arc as a rebirth.","The simile compares Scrooge to an oyster.","'Humbug' is an exclamation."], c:1,
     e:"It comments on how the novel is shaped and ordered — a structural method, not word choice."}
  ]
});
Object.assign(LESSONS, {
  "e10i-10-8": `<h2>Answering the Novel Question</h2>
<p>In Paper 1 Section B you are given a short printed extract from <em>A Christmas Carol</em> and asked: 'Starting with this extract, explore how Dickens presents [X]', writing about the theme <strong>in the extract</strong> and then <strong>in the novel as a whole</strong>. It is worth <strong>30 marks</strong> and rewards three things: a personal, well-supported response (<strong>AO1</strong>); close analysis of Dickens's methods (<strong>AO2</strong>); and relevant Victorian context (<strong>AO3</strong>). This island is about <em>technique</em> — you already know the plot, so here you learn how to turn that knowledge into a top-band answer.</p>
<h3>The method</h3>
<p><strong>1. Read the extract (about 5 minutes).</strong> Read it twice with the focus word in mind. Underline three or four short phrases that show the theme and label a method beside each (simile, imperative, symbol, narrative voice).</p>
<p><strong>2. Build a thesis.</strong> Write one argued sentence about <em>how</em> Dickens presents the theme and <em>why</em> — his purpose. This is your spine; every paragraph returns to it.</p>
<p><strong>3. Write analytical paragraphs: extract first, then whole novel.</strong> Open in the extract, analyse a method closely, then use a linked moment elsewhere ('Later, in Stave 5...') to trace how Dickens develops the theme across the staves. Track change and contrast rather than retelling the plot.</p>
<p><strong>4. Weave context.</strong> Tie AO3 to the method and meaning in the same sentence — never a stuck-on fact.</p>
<p><strong>5. Conclude.</strong> A short paragraph returning to your thesis and Dickens's purpose.</p>
<h3>Worked mini-example (on a real Dickens quotation)</h3>
<p>Focus: how Dickens presents Scrooge's coldness. The extract reads, 'secret, and self-contained, and solitary as an oyster'.</p>
<p><em>Thesis:</em> 'Dickens presents Scrooge's coldness as a self-imposed isolation that the novel will teach him to undo.'</p>
<p><em>Extract analysis:</em> 'The simile "solitary as an oyster" encloses Scrooge in a hard shell, the adjective "solitary" stressing that his isolation is chosen, not imposed. The triple "secret, and self-contained, and solitary" piles up his withdrawal so the reader feels shut out before he even speaks.'</p>
<p><em>To the whole novel:</em> 'Later, in Stave 5, Dickens reverses this when the reformed Scrooge becomes "as good a friend... as the good old city knew", the warmth of community answering the earlier image of the closed shell.'</p>
<p><em>Woven context:</em> 'That movement from isolation to fellowship dramatises the social responsibility the 1834 Poor Law denied, as Dickens urges his middle-class readers to reconnect with the poor they had shut out.'</p>
<h3>Common mistake</h3>
<p>Spotting devices without explaining their effect, or bolting context on as a fact. Always finish with effect and purpose, and tie context into meaning.</p>
<p>Practise full extract questions with instant marking in <strong>Exam Practice</strong>.</p>`
});
