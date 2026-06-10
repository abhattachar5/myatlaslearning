// content/y11/english/islands/x08.js — Year 11 English Topic 8 expansion: Literature: Novel & Play
// Adds 3 flashcards + 10 questions per island for e11i-08-1, e11i-08-2, e11i-08-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // e11i-08-1 — Extract + Whole-Text Essay: Novel
  {id:"e11fc-08-1-6", islandId:"e11i-08-1", front:"How do you move smoothly from the extract to the whole text?",
   back:"Use a linking phrase that signals development: 'This same idea recurs later in the novel, when...'\n\nYou are tracing a theme across the text, not just listing other scenes. Show how the idea grows or changes.", difficulty:3, category:"application"},
  {id:"e11fc-08-1-7", islandId:"e11i-08-1", front:"What is the difference between AO1, AO2 and AO3?",
   back:"AO1 = an informed personal response supported by quotation.\nAO2 = analysis of the writer's methods and their effects, using subject terminology.\nAO3 = the relationship between the text and its context.", difficulty:3, category:"concept"},
  {id:"e11fc-08-1-8", islandId:"e11i-08-1", front:"Why analyse narrative voice in a novel?",
   back:"The choice of narrator shapes what we know and how we judge characters.\n\nA first-person narrator can be unreliable; an omniscient narrator can guide our sympathies. Naming the method is AO2.", difficulty:2, category:"concept"}
);
QUESTIONS["e11i-08-1"] = (QUESTIONS["e11i-08-1"] || []).concat([
  {q:"A good link from extract to whole text sounds like:", opts:["'Later in the novel this same idea develops when...'","'The extract is on page 40.'","'In conclusion the novel is good.'","'I will now copy the extract.'"], c:0,
   e:"A linking phrase traces the theme across the text and shows development. Naming the page number adds no analysis and does not trace the idea."},
  {q:"AO2 marks are awarded for:", opts:["A personal opinion with no evidence","Listing historical dates","Analysing the writer's methods and their effects","Retelling the plot in order"], c:2,
   e:"AO2 rewards analysis of method and effect using terminology. A bare opinion belongs partly to AO1 but earns no AO2 because no method is examined."},
  {q:"Which sentence best shows AO3 woven into argument?", opts:["The novel was written a long time ago.","There are many chapters in the book.","The writer reflects Victorian fears about poverty to make the reader pity the child.","The hero is brave and the villain is cruel."], c:2,
   e:"AO3 links context to the writer's purpose and the effect on the reader. 'Written a long time ago' states a fact but connects it to nothing in the text."},
  {q:"Calling a narrator 'unreliable' is an example of:", opts:["AO2 method spotting","Plot summary","Spelling accuracy","Context only"], c:0,
   e:"Identifying narrative voice and its effect is analysis of method, which is AO2. It is not mere plot summary because it judges how the telling shapes meaning."},
  {q:"A thesis for a whole-text novel essay should:", opts:["Be a single quotation","Make an arguable claim the essay sustains","Only describe the extract","List every character"], c:1,
   e:"A thesis is an arguable claim developed throughout the essay. A single quotation is evidence, not an argument, so it cannot organise the whole response."},
  {q:"Why range beyond the extract at all?", opts:["To fill space","To show whole-text knowledge and trace how a theme develops","To avoid analysing the extract","To copy the contents page"], c:1,
   e:"Wider references prove you know the novel beyond the printed extract and can track a theme's development. Filling space without development earns no marks."},
  {q:"'The writer uses a metaphor here' is a complete AO2 point only if you also:", opts:["Name the chapter","Count the syllables","Give the publication date","Explain the effect of that metaphor"], c:3,
   e:"Spotting a method is incomplete; AO2 needs the effect explained. Naming a method without analysing its impact is feature-spotting, which gains little credit."},
  {q:"Consider: 'The fog in the opening symbolises moral confusion, a doubt the writer sustains until the final chapter.' This sentence is strong because it:", opts:["Summarises the plot","Lists characters","States only the date","Combines a method with whole-text development"], c:3,
   e:"It names a symbol (AO2) and traces it across the text (whole-text range). It is not plot summary because it argues about meaning rather than retelling events."},
  {q:"Which opening best signals a conceptualised argument?", opts:["'The writer presents poverty as a force that corrupts even the kind.'","'This essay is about a book.'","'There are lots of poor people in the novel.'","'The extract is quite sad.'"], c:0,
   e:"A conceptualised thesis names an idea and the writer's stance on it. 'Lots of poor people' describes content but advances no argument about authorial purpose."},
  {q:"The single biggest difference between the extract task and the whole-text essay is that the essay also requires:", opts:["Longer quotations","A coloured diagram","Evidence drawn from across the whole novel","A character list at the end"], c:2,
   e:"The whole-text element demands evidence ranging across the novel, not just the printed extract. Quotation length is not the defining difference; coverage is."}
]);

FLASHCARDS.push(
  // e11i-08-2 — Extract + Whole-Text Essay: Play
  {id:"e11fc-08-2-6", islandId:"e11i-08-2", front:"How do stage directions count as a writer's method?",
   back:"They are deliberate authorial choices, so analysing them is AO2.\n\n'The lighting grows harsher' as the Inspector questions a character can mirror exposure and guilt — name the effect on the audience.", difficulty:2, category:"application"},
  {id:"e11fc-08-2-7", islandId:"e11i-08-2", front:"Why refer to 'the audience' rather than 'the reader' in a play essay?",
   back:"A play is designed for performance, so meaning is created in the theatre.\n\nWriting about audience reaction (tension, shock, laughter) shows dramatic awareness, which examiners reward in AO2.", difficulty:2, category:"concept"},
  {id:"e11fc-08-2-8", islandId:"e11i-08-2", front:"How does a play essay range across the whole text?",
   back:"Track a character or theme across acts, noting turning points and the resolution.\n\n'The tension introduced in this extract escalates across the play until the final act forces a reckoning.'", difficulty:3, category:"application"}
);
QUESTIONS["e11i-08-2"] = (QUESTIONS["e11i-08-2"] || []).concat([
  {q:"Analysing a stage direction such as 'the lighting grows harsher' is:", opts:["AO2 analysis of an authorial method","Irrelevant to literature","Only a technical note for actors","Pure context"], c:0,
   e:"Stage directions are deliberate choices, so analysing their effect is AO2. They are not merely instructions for actors when the writer uses them to shape audience response."},
  {q:"Which phrase best shows dramatic awareness?", opts:["'The reader skims the page.'","'The book has many pages.'","'The act is numbered two.'","'The audience feels the tension rise as the Inspector waits.'"], c:3,
   e:"Referring to audience response in performance demonstrates dramatic awareness. 'The reader skims' treats the play as a novel and ignores staging."},
  {q:"Dramatic irony works because:", opts:["The audience knows something a character does not","The stage is brightly lit","The play is very long","The actors speak quickly"], c:0,
   e:"The gap between audience knowledge and character knowledge generates tension. Lighting or length may add atmosphere but do not create the irony itself."},
  {q:"To range across a play, you should:", opts:["Quote only the extract twice","List the props","Trace a theme or character across the acts","Describe the theatre building"], c:2,
   e:"Tracking development across acts shows whole-text knowledge. Re-quoting the extract keeps you trapped in one moment and earns no wider credit."},
  {q:"Which sentence weaves context into a play argument best?", opts:["'The play is old.'","'There are seven characters.'","'The curtain falls at the end.'","'Writing after the war, the playwright uses the Inspector to challenge the audience's complacency about social duty.'"], c:3,
   e:"It ties the historical moment to the playwright's purpose and the audience's response (AO3). 'The play is old' offers a fact connected to nothing."},
  {q:"A soliloquy is dramatically useful because it:", opts:["Lets the audience hear a character's private thoughts","Wastes stage time","Hides the plot","Removes all tension"], c:0,
   e:"A soliloquy grants the audience direct access to inner thought, creating intimacy or dramatic irony. It reveals rather than hides, so it deepens engagement."},
  {q:"'The exit of the Inspector leaves the family exposed' is a strong point because it analyses:", opts:["The font of the script","The number of lines","The cover of the playscript","A dramatic technique and its effect on the audience"], c:3,
   e:"An exit is a staging choice whose effect can be analysed (AO2). Counting lines or noting the font describes the text without examining dramatic impact."},
  {q:"Judge this sentence: 'The playwright was born in a certain year, which is interesting.' It is weak because it:", opts:["States context without linking it to the play","Uses a quotation","Analyses a method","Names the audience"], c:0,
   e:"Context earns AO3 only when tied to the writer's purpose or effect. A free-floating biographical fact connects to nothing in the drama, so it earns little."},
  {q:"In a play essay, verse and prose can be analysed because:", opts:["They look different on the page","They are always the same","The shift can signal a change in a character's state or status","Prose is not allowed"], c:2,
   e:"A move between verse and prose is a deliberate method that can mark emotional or social change (AO2). The visual look alone, without effect, is not analysis."},
  {q:"Compared with the extract task, the whole-text play essay additionally requires you to:", opts:["Memorise the cast list","Show how the chosen theme develops across the whole play","Draw the set","Avoid quotation"], c:1,
   e:"The essay demands evidence of development across the play, not only the extract. Memorising a cast list is not assessed, and quotation remains essential."}
]);

FLASHCARDS.push(
  // e11i-08-3 — Essay Technique & Exam Practice
  {id:"e11fc-08-3-6", islandId:"e11i-08-3", front:"What is a 'topic sentence' and why does it matter?",
   back:"The first sentence of a paragraph that states its main argumentative point.\n\nIt links the paragraph back to your thesis and tells the examiner what you are about to prove, keeping the essay focused.", difficulty:2, category:"concept"},
  {id:"e11fc-08-3-7", islandId:"e11i-08-3", front:"How do you signal an alternative interpretation?",
   back:"Use tentative phrasing: 'This could also suggest...' or 'A reader might equally argue...'\n\nExploring more than one reading shows a perceptive, conceptualised response rather than a single fixed view.", difficulty:3, category:"application"},
  {id:"e11fc-08-3-8", islandId:"e11i-08-3", front:"What is the danger of 'feature-spotting'?",
   back:"Listing techniques ('there is a simile, then a metaphor') without analysing their effect.\n\nNaming a method gains little; you must explain WHY it matters and what it does to the reader.", difficulty:2, category:"concept"}
);
QUESTIONS["e11i-08-3"] = (QUESTIONS["e11i-08-3"] || []).concat([
  {q:"A topic sentence should:", opts:["State the paragraph's main argumentative point","Contain a long quotation","List every method in the essay","Summarise the whole plot"], c:0,
   e:"A topic sentence announces the paragraph's argument and links it to the thesis. Opening with a long quotation delays the point and weakens focus."},
  {q:"'There is a metaphor, a simile and some alliteration here.' This is weak because it:", opts:["Uses terminology","Includes a quotation","States a thesis","Spots features without analysing their effect"], c:3,
   e:"It is feature-spotting: methods are named but their effects are never explained. Listing terms alone earns little AO2 credit without analysis of impact."},
  {q:"Which phrase best signals an alternative interpretation?", opts:["'This definitely means only one thing.'","'This could equally suggest the opposite.'","'The end.'","'There are two acts.'"], c:1,
   e:"Tentative phrasing opens a second reading, showing a perceptive response. Insisting on a single fixed meaning closes down the conceptualised thinking examiners reward."},
  {q:"The purpose of a 5-minute plan is to:", opts:["Use up exam time","Avoid writing an essay","Give every paragraph direction and prevent rambling","Copy the question out twice"], c:2,
   e:"Planning maps an argued route through the essay so each paragraph earns marks. It saves time overall rather than wasting it."},
  {q:"A conceptualised conclusion should:", opts:["Introduce three new quotations","Repeat the introduction word for word","List the characters","Return to the thesis and add a final insight"], c:3,
   e:"A strong conclusion revisits the thesis and extends it with a final reflection. New quotations belong in the body, not a closing two or three sentences."},
  {q:"Embedding a quotation means:", opts:["Writing it as a separate indented block","Avoiding quotation entirely","Weaving a short quote into your own sentence","Quoting a whole paragraph"], c:2,
   e:"Embedding integrates a short quote so you can analyse a key word in flow. A long indented block interrupts the argument and discourages close analysis."},
  {q:"Judge this thesis: 'The writer uses words to tell a story.' It is weak because it:", opts:["Is arguable and specific","Is true of every text and argues nothing","Names a method","Includes context"], c:1,
   e:"A thesis must be arguable and specific to this text's ideas. A claim true of all writing gives the essay no direction and advances no argument."},
  {q:"To improve 'Macbeth is ambitious' into an AO2 point, you would:", opts:["Add the page number","Make the sentence longer","Add the author's birthplace","Quote a word and analyse its effect, e.g. 'vaulting' suggests reckless overreach"], c:3,
   e:"Pairing a precise quotation with analysis of its effect lifts a bald statement into AO2. Length or a page number adds no analysis of method."},
  {q:"Which is the best use of the final three minutes of a literature exam?", opts:["Re-read for clarity and slip in any final relevant point","Start a brand-new essay","Cross out a whole paragraph","Stop and put your pen down early"], c:0,
   e:"A quick check catches errors and can add a last relevant idea. Starting a new essay or crossing out solid work risks losing marks already earned."},
  {q:"A whole-text essay differs from the extract task chiefly because it rewards:", opts:["Neater handwriting","Bigger quotations","More colourful language","Sustained argument and evidence ranging across the text"], c:3,
   e:"The whole-text essay rewards a sustained thesis supported by evidence from across the text. Handwriting and quotation size are not what distinguishes the two tasks."}
]);
