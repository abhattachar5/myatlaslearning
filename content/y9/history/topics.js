// content/y9/history/topics.js — Year 9 History: topic tiles + island definitions.
// Authored by the atlas-content skill. GCSE foundations (bridging KS3 → KS4).
// History island accent colour #a855f7 (matches Year 8).

const HISTORY_TOPICS_Y9 = [
  {id:"h9t-01", name:"World War One", emoji:"💣", hasContent:true,
   description:"Explore the causes of WWI, the reality of trench warfare and the events that brought the war to an end."},
  {id:"h9t-02", name:"The Interwar Years", emoji:"📰", hasContent:true,
   description:"Examine the Treaty of Versailles, the League of Nations and the rise of dictators across Europe."},
  {id:"h9t-03", name:"World War Two", emoji:"✈️", hasContent:true,
   description:"Investigate the causes, key events and impact of World War Two, including the Holocaust and the home front."},
  {id:"h9t-04", name:"The Cold War", emoji:"🧊", hasContent:true,
   description:"Understand the origins, key crises and eventual collapse of the Cold War between the superpowers."},
  {id:"h9t-05", name:"Decolonisation & the Modern World", emoji:"🌍", hasContent:true,
   description:"Trace the end of European empires and the independence movements that reshaped the modern world."},
  {id:"h9t-06", name:"Civil Rights & Equality", emoji:"✊", hasContent:true,
   description:"Study the US civil rights movement, the struggle against apartheid and the fight for women's rights."},
  {id:"h9t-07", name:"History Skills: Sources & Evidence", emoji:"🔍", hasContent:true,
   description:"Learn to evaluate historical sources for reliability, bias and usefulness as evidence."},
  {id:"h9t-08", name:"History Skills: Chronology & Interpretation", emoji:"📐", hasContent:true,
   description:"Develop skills in chronology, causation and understanding different historical interpretations."}
];

// ── Topic 1: World War One (h9t-01) ────────────────────────────────────────
CURRICULUM.push(
  {id:"h9i-01-1", name:"Causes of World War One", emoji:"⚡", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-01", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Understand the long-term and short-term causes of WWI, including alliances, imperialism, militarism and the assassination of Archduke Franz Ferdinand.",
   learningOutcomes:["Explain the MAIN causes: Militarism, Alliances, Imperialism, Nationalism","Describe the assassination of Archduke Franz Ferdinand and its consequences","Analyse how the alliance system turned a regional crisis into a world war"],
   topics:["MAIN causes","Alliance systems","The assassination of 1914"], prerequisites:[]},
  {id:"h9i-01-2", name:"Trench Warfare", emoji:"🪖", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explore conditions in the trenches, key battles on the Western Front and the impact of new weapons technology.",
   learningOutcomes:["Describe daily life and conditions in the trenches","Explain the significance of key battles such as the Somme and Passchendaele","Assess the impact of new technology including gas, tanks and machine guns"],
   topics:["Trench conditions","Key battles","New weapons technology"], prerequisites:["h9i-01-1"]},
  {id:"h9i-01-3", name:"The End of the War", emoji:"🕊️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Examine how and why the war ended in 1918, its human cost and the immediate aftermath including the armistice.",
   learningOutcomes:["Explain the factors that led to Germany's defeat in 1918","Describe the terms of the armistice","Assess the human and economic cost of WWI"],
   topics:["German defeat","The armistice","Human cost of war"], prerequisites:["h9i-01-2"]}
);

// ── Topic 2: The Interwar Years (h9t-02) ───────────────────────────────────
CURRICULUM.push(
  {id:"h9i-02-1", name:"The Treaty of Versailles", emoji:"📜", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-02", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Analyse the terms of the Treaty of Versailles and the different attitudes of the 'Big Three' towards Germany.",
   learningOutcomes:["Describe the key terms of the Treaty of Versailles","Explain the aims of Clemenceau, Lloyd George and Wilson","Evaluate whether the treaty was fair or too harsh"],
   topics:["Treaty terms","The Big Three","Fairness debate"], prerequisites:[]},
  {id:"h9i-02-2", name:"The League of Nations", emoji:"🤝", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Assess the aims, structure, successes and failures of the League of Nations in keeping world peace.",
   learningOutcomes:["Explain the aims and structure of the League of Nations","Give examples of the League's successes in the 1920s","Analyse why the League failed to prevent aggression in the 1930s"],
   topics:["Aims and structure","Successes of the 1920s","Failures of the 1930s"], prerequisites:["h9i-02-1"]},
  {id:"h9i-02-3", name:"The Rise of Dictators", emoji:"👤", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Investigate the rise of Hitler, Mussolini and Stalin and the conditions that allowed dictatorships to flourish.",
   learningOutcomes:["Explain how economic crisis and political instability helped dictators rise to power","Compare the methods used by Hitler, Mussolini and Stalin","Assess the role of propaganda and fear in maintaining dictatorships"],
   topics:["Hitler's rise","Mussolini and fascism","Stalin's Soviet Union"], prerequisites:["h9i-02-1"]}
);

// ── Topic 3: World War Two (h9t-03) ────────────────────────────────────────
CURRICULUM.push(
  {id:"h9i-03-1", name:"Causes of World War Two", emoji:"⚡", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-03", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Examine the long-term and short-term causes of WWII, including the failure of appeasement and Hitler's aggression.",
   learningOutcomes:["Explain the long-term causes including the Treaty of Versailles and the rise of Hitler","Assess the policy of appeasement and the Munich Agreement","Describe the immediate events leading to the outbreak of war in September 1939"],
   topics:["Long-term causes","Appeasement","Outbreak of war"], prerequisites:[]},
  {id:"h9i-03-2", name:"Key Events of World War Two", emoji:"🗺️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Study the major turning points of WWII, from Dunkirk and the Battle of Britain to D-Day and the atomic bombs.",
   learningOutcomes:["Describe key turning points including Dunkirk, Stalingrad and D-Day","Explain why the Allies won the war","Assess the significance of the atomic bombs dropped on Japan"],
   topics:["Dunkirk and the Battle of Britain","Stalingrad and D-Day","The end of the war"], prerequisites:["h9i-03-1"]},
  {id:"h9i-03-3", name:"The Holocaust & the Home Front", emoji:"🕯️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Understand the Holocaust and its stages, and explore the impact of WWII on civilian life in Britain.",
   learningOutcomes:["Describe the stages of persecution that led to the Holocaust","Explain the impact of WWII on British civilian life including evacuation, rationing and the Blitz","Reflect on the moral and ethical lessons of the Holocaust"],
   topics:["The Holocaust","The Blitz and evacuation","Rationing and civilian life"], prerequisites:["h9i-03-1"]}
);

// ── Topic 4: The Cold War (h9t-04) ─────────────────────────────────────────
CURRICULUM.push(
  {id:"h9i-04-1", name:"Origins of the Cold War", emoji:"🧊", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-04", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Explore the ideological differences, wartime tensions and early events that created the Cold War.",
   learningOutcomes:["Explain the ideological differences between the USA and the USSR","Describe the wartime conferences and growing tensions (Yalta, Potsdam)","Analyse the significance of the Truman Doctrine, Marshall Plan and Berlin Blockade"],
   topics:["Capitalism vs communism","Wartime conferences","Truman Doctrine and Berlin Blockade"], prerequisites:[]},
  {id:"h9i-04-2", name:"Berlin Wall & Cuban Missile Crisis", emoji:"🚀", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Investigate two of the most dangerous flashpoints of the Cold War: the Berlin Wall and the Cuban Missile Crisis.",
   learningOutcomes:["Explain why the Berlin Wall was built and its impact on people","Describe the events of the Cuban Missile Crisis in 1962","Assess how close the world came to nuclear war"],
   topics:["The Berlin Wall","The Cuban Missile Crisis","Nuclear brinkmanship"], prerequisites:["h9i-04-1"]},
  {id:"h9i-04-3", name:"The End of the Cold War", emoji:"🕊️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Understand the factors that led to the fall of the Berlin Wall and the collapse of the Soviet Union.",
   learningOutcomes:["Explain the role of Gorbachev's reforms (glasnost and perestroika)","Describe the events of 1989 including the fall of the Berlin Wall","Assess the reasons for the collapse of the Soviet Union in 1991"],
   topics:["Gorbachev's reforms","Fall of the Berlin Wall","Collapse of the USSR"], prerequisites:["h9i-04-2"]}
);

// ── Topic 5: Decolonisation & the Modern World (h9t-05) ────────────────────
CURRICULUM.push(
  {id:"h9i-05-1", name:"The End of Empires", emoji:"🗺️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-05", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Examine why European empires collapsed after 1945 and the factors that drove decolonisation.",
   learningOutcomes:["Explain the factors that weakened European empires after WWII","Describe the process of decolonisation in key regions","Assess the role of the UN, the Cold War and nationalist movements in driving change"],
   topics:["Weakened empires after 1945","The role of the UN and Cold War","Patterns of decolonisation"], prerequisites:[]},
  {id:"h9i-05-2", name:"Independence Movements", emoji:"✊", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Study key independence movements including India's partition and African decolonisation.",
   learningOutcomes:["Describe Gandhi's role in Indian independence and the partition of 1947","Explain the struggle for independence in African nations such as Ghana and Kenya","Evaluate the lasting impact of decolonisation on former colonies"],
   topics:["Indian independence and partition","African independence movements","Legacy of decolonisation"], prerequisites:["h9i-05-1"]},
  {id:"h9i-05-3", name:"India & Partition (1947)", emoji:"🇮🇳", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain British rule in India, the independence movement and the 1947 Partition.",
   learningOutcomes:["Describe the British Raj","Explain Gandhi and the independence movement","Explain Partition and its impact"],
   topics:["The Raj","Independence movement","Partition"], prerequisites:["h9i-05-1"]},
  {id:"h9i-05-4", name:"Migration & the Legacy of Empire", emoji:"🚢", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain post-war Commonwealth migration, the Windrush generation and its legacy.",
   learningOutcomes:["Explain post-war migration","Describe the Windrush generation","Explain migrants' contribution and the challenges"],
   topics:["Post-war migration","Windrush","Contribution & challenges"], prerequisites:["h9i-05-1"]}
);

// ── Topic 6: Civil Rights & Equality (h9t-06) ─────────────────────────────
CURRICULUM.push(
  {id:"h9i-06-1", name:"The US Civil Rights Movement", emoji:"🗽", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-06", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Explore the struggle for racial equality in the United States, from segregation to landmark legislation.",
   learningOutcomes:["Describe segregation and the Jim Crow laws in the American South","Explain the methods and achievements of key figures such as Martin Luther King Jr and Rosa Parks","Assess the significance of the Civil Rights Act (1964) and Voting Rights Act (1965)"],
   topics:["Segregation and Jim Crow","Key figures and protests","Civil rights legislation"], prerequisites:[]},
  {id:"h9i-06-2", name:"Apartheid in South Africa", emoji:"🌍", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Investigate the apartheid system in South Africa and the long struggle to dismantle it.",
   learningOutcomes:["Describe the apartheid system and the laws that enforced it","Explain the role of Nelson Mandela and the ANC in opposing apartheid","Assess the factors that led to the end of apartheid and the first democratic elections"],
   topics:["The apartheid system","Mandela and the ANC","End of apartheid"], prerequisites:["h9i-06-1"]},
  {id:"h9i-06-3", name:"Women's Rights", emoji:"♀️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Trace the struggle for women's rights from the suffragettes to modern equality campaigns.",
   learningOutcomes:["Explain the key milestones in the campaign for women's suffrage","Describe the second-wave feminist movement and its achievements","Assess how far gender equality has been achieved"],
   topics:["Suffragettes and the vote","Second-wave feminism","Modern equality"], prerequisites:["h9i-06-1"]}
);

// ── Topic 7: History Skills: Sources & Evidence (h9t-07) ───────────────────
CURRICULUM.push(
  {id:"h9i-07-1", name:"Types of Source & Reliability", emoji:"📄", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-07", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Identify different types of historical source and evaluate their reliability.",
   learningOutcomes:["Distinguish between primary and secondary sources","Identify different types of source: written, visual, oral, archaeological","Explain what makes a source reliable or unreliable"],
   topics:["Primary vs secondary sources","Types of evidence","Reliability"], prerequisites:[]},
  {id:"h9i-07-2", name:"Bias & Usefulness", emoji:"⚖️", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Analyse sources for bias and evaluate their usefulness to an historian studying a particular question.",
   learningOutcomes:["Explain what bias is and how to detect it in a source","Evaluate the usefulness of a source by considering its provenance and content","Write a structured answer assessing a source's utility"],
   topics:["Detecting bias","Evaluating usefulness","Provenance and context"], prerequisites:["h9i-07-1"]}
);

// ── Topic 8: History Skills: Chronology & Interpretation (h9t-08) ──────────
CURRICULUM.push(
  {id:"h9i-08-1", name:"Chronology & Causation", emoji:"📅", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-08", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Place events in chronological order and explain the difference between causes and consequences.",
   learningOutcomes:["Place key events on a timeline accurately","Distinguish between causes, triggers and consequences","Identify short-term and long-term causes of events"],
   topics:["Timelines","Causes and triggers","Short-term vs long-term"], prerequisites:[]},
  {id:"h9i-08-2", name:"Historical Interpretations", emoji:"💬", subject:"History", subjectId:"history", color:"#a855f7",
   topicId:"h9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Understand why historians disagree and how to evaluate different interpretations of the past.",
   learningOutcomes:["Explain why historians may reach different conclusions about the same event","Identify how evidence, perspective and purpose shape interpretations","Compare two interpretations and assess which is more convincing"],
   topics:["Why historians disagree","Evidence and perspective","Comparing interpretations"], prerequisites:["h9i-08-1"]}
);
