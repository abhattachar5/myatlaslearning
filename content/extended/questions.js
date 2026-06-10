// content/extended/questions.js — seed bank of GCSE extended-response questions
// for the AI-marked practice page (extended.html). All items original.
//
// Shape: { id, subject (science|history|geography), subjectId, year, topic,
//          command, marks, q, indicative:[ "point", ... ] }
// `indicative` is the mark-scheme guidance: it is sent to the AI marker and
// revealed to the student AFTER they submit (never before).
//
// Loaded only by extended.html (its own <script> tag) — not in core/manifest.js,
// so it adds zero weight to lesson/test pages.

window.EXTENDED_QUESTIONS = window.EXTENDED_QUESTIONS || [];
window.EXTENDED_QUESTIONS.push(

  // ── SCIENCE — 6-mark extended response (AQA Trilogy 8464) ──────────────────
  {id:"ext-sci-1", subject:"science", subjectId:"science", year:"Year 10", topic:"Organisation & the Digestive System",
   command:"Explain", marks:6,
   q:"Explain how the small intestine is adapted for the efficient absorption of the products of digestion.",
   indicative:[
     "Lined with millions of villi (and microvilli) which give a very large surface area for absorption",
     "Each villus has walls that are only one cell thick, giving a short diffusion distance",
     "Villi have a rich network of blood capillaries that carry absorbed glucose and amino acids away, maintaining a steep concentration gradient",
     "A lacteal in each villus absorbs fatty acids and glycerol",
     "The small intestine is very long, increasing the time and area available for absorption",
     "Glucose can also be absorbed by active transport when its concentration in the gut is lower than in the blood",
     "Linkage: large surface area + short diffusion distance + steep gradient together make diffusion fast and efficient"]},

  {id:"ext-sci-2", subject:"science", subjectId:"science", year:"Year 10", topic:"Rates of Reaction",
   command:"Explain", marks:6,
   q:"Using collision theory, explain how increasing the temperature and increasing the concentration of a reactant both increase the rate of a chemical reaction.",
   indicative:[
     "Reactions happen when particles collide with enough energy (the activation energy)",
     "Higher temperature gives particles more kinetic energy so they move faster",
     "Faster particles collide more frequently AND a greater proportion of collisions exceed the activation energy",
     "Increasing concentration means more reactant particles in the same volume",
     "More particles per unit volume means more frequent collisions per second",
     "In both cases the FREQUENCY of successful collisions increases, so the rate increases",
     "Linkage: distinguish 'more frequent collisions' (both) from 'more energetic collisions' (temperature only)"]},

  {id:"ext-sci-3", subject:"science", subjectId:"science", year:"Year 11", topic:"Magnetism & Electromagnetism",
   command:"Explain", marks:6,
   q:"Explain how a step-up transformer increases the potential difference, and why transformers are used in the National Grid.",
   indicative:[
     "A transformer has a primary and a secondary coil wound on an iron core",
     "Alternating current in the primary coil produces a changing magnetic field in the core",
     "The changing field induces an alternating potential difference in the secondary coil",
     "A step-up transformer has more turns on the secondary than the primary, so the output p.d. is greater than the input p.d.",
     "The National Grid transmits at very high p.d. and therefore low current",
     "Lower current means much less energy is wasted as heat in the cables (power loss depends on current squared)",
     "Step-down transformers then reduce the p.d. to safe levels for homes"]},

  {id:"ext-sci-4", subject:"science", subjectId:"science", year:"Year 11", topic:"Evolution & Classification",
   command:"Explain", marks:6,
   q:"Explain how a population of bacteria can become resistant to an antibiotic by natural selection.",
   indicative:[
     "Within the population there is variation, caused by random mutation",
     "By chance, some bacteria carry a mutation that makes them resistant to the antibiotic",
     "When the antibiotic is used, it kills the non-resistant bacteria",
     "The resistant bacteria survive and reproduce (they have a survival advantage)",
     "The resistance allele is passed on to their offspring",
     "Over many generations the proportion of resistant bacteria increases until the population is mostly resistant",
     "Avoid Lamarckian wording: bacteria do not 'choose' or 'try' to become resistant — the mutation arises first, then selection acts"]},

  // ── HISTORY — 12 & 16-mark (AQA 8145) ─────────────────────────────────────
  {id:"ext-his-1", subject:"history", subjectId:"history", year:"Year 11", topic:"Germany 1890-1945",
   command:"Explain", marks:12,
   q:"Explain why the Weimar Republic faced serious problems in the years 1919-1923.",
   indicative:[
     "Resentment at the Treaty of Versailles — the 'stab in the back' myth and the 'November Criminals'",
     "Reparations: the 1921 bill of £6.6 billion and Germany's inability to pay",
     "The 1923 occupation of the Ruhr by France and Belgium when payments were missed",
     "Hyperinflation: passive resistance and printing money destroyed savings; prices spiralled",
     "Political violence from both extremes: the Spartacist uprising (1919, left) and the Kapp Putsch (1920) and Munich Putsch (1923, right)",
     "Weakness of proportional representation producing unstable coalition governments",
     "A strong answer LINKS causes (e.g. Versailles resentment fed extremist uprisings; reparations led to the Ruhr and then hyperinflation)"]},

  {id:"ext-his-2", subject:"history", subjectId:"history", year:"Year 10", topic:"Conflict & Tension 1918-1939",
   command:"How far do you agree?", marks:16,
   q:"\"Appeasement was the main reason for the outbreak of the Second World War in 1939.\" How far do you agree with this statement?",
   indicative:[
     "FOR: appeasement (e.g. the Munich Agreement 1938) let Hitler grow stronger and convinced him Britain and France would not fight",
     "FOR: failure to act over the Rhineland (1936), Anschluss (1938) and the Sudetenland encouraged further aggression",
     "AGAINST: Hitler's own aims and aggression (Lebensraum, tearing up Versailles) were the driving cause",
     "AGAINST: the weakness of the League of Nations (Manchuria, Abyssinia) removed collective security",
     "AGAINST: the Nazi-Soviet Pact (1939) removed the threat of a two-front war and made invading Poland possible",
     "OTHER: the Treaty of Versailles created long-term grievances Hitler exploited",
     "A Level 4 answer argues BOTH sides with specific evidence and reaches a justified, supported judgement rather than just describing events"]},

  {id:"ext-his-3", subject:"history", subjectId:"history", year:"Year 10", topic:"Medicine Through Time",
   command:"Explain", marks:12,
   q:"Explain why there was rapid progress in surgery in the period c1845-c1918.",
   indicative:[
     "Anaesthetics: ether and then chloroform (1847, Simpson) let surgeons operate without pain and take more time/care",
     "Antiseptics: Lister's use of carbolic acid (1867) dramatically cut deaths from infection",
     "Aseptic surgery developed: sterilised instruments, gowns, theatres",
     "Blood transfusion and the discovery of blood groups (Landsteiner, 1901) and use of stored blood by WW1",
     "War (1914-18) drove advances in dealing with infection, broken bones (Thomas splint) and plastic surgery",
     "The role of individuals (Simpson, Lister) AND the role of war and technology should be linked",
     "Best answers explain HOW each factor allowed surgeons to overcome the historic problems of pain, infection and bleeding"]},

  {id:"ext-his-4", subject:"history", subjectId:"history", year:"Year 11", topic:"America 1840-1895: The West",
   command:"How far do you agree?", marks:16,
   q:"\"The railroads were the most important factor in the development of the Plains in the years 1862-1895.\" How far do you agree?",
   indicative:[
     "FOR: the transcontinental railroad (completed 1869) brought homesteaders west and carried crops and cattle east to market",
     "FOR: railroads made the cattle industry profitable (cow towns like Abilene) and sold land to settlers",
     "AGAINST: government legislation was crucial — the Homestead Act (1862) gave land to settlers",
     "AGAINST: new technology (windmills, barbed wire, dry farming, the steel plough) made farming the Plains possible",
     "AGAINST: the destruction of the buffalo and defeat of the Plains Indians opened the land for settlement",
     "A judgement should weigh the railroads against these other factors and show how factors interacted",
     "Level 4 reaches a sustained, evidenced judgement; weaker answers list factors without comparing their importance"]},

  // ── GEOGRAPHY — 9-mark extended response (AQA 8035) ────────────────────────
  {id:"ext-geo-1", subject:"geography", subjectId:"geography", year:"Year 10", topic:"The Challenge of Natural Hazards",
   command:"To what extent", marks:9,
   q:"To what extent can the effects of tropical storms be reduced by preparation and planning rather than by responding after the event?",
   indicative:[
     "Preparation: forecasting and satellite monitoring give warning so people can evacuate",
     "Preparation: education, evacuation routes, storm drains and cyclone shelters reduce deaths",
     "Planning: building design (storm-resistant buildings, raised housing) and land-use planning away from coasts",
     "Response (counter-argument): emergency aid, search and rescue and restoring services also save lives after impact",
     "Use a named example/case study to support (e.g. a specific tropical storm's preparation vs response)",
     "Evaluation: preparation tends to reduce deaths most, but effectiveness depends on a country's wealth (HIC vs LIC)",
     "A clear, supported judgement that directly answers 'to what extent' is needed for the top level; SPaG is also assessed"]},

  {id:"ext-geo-2", subject:"geography", subjectId:"geography", year:"Year 10", topic:"Physical Landscapes: Coasts",
   command:"Assess", marks:9,
   q:"Assess the effectiveness of management strategies used to protect coastlines from erosion.",
   indicative:[
     "Hard engineering: sea walls, groynes, rock armour and gabions — effective but expensive and can look unattractive",
     "Groynes trap sediment and widen beaches but starve beaches further along the coast",
     "Soft engineering: beach nourishment and dune regeneration — cheaper and more natural but needs maintenance",
     "Managed retreat / coastal realignment — lets low-value land flood, creating salt marsh; cheaper long-term but controversial",
     "Use named place detail (e.g. a specific stretch of UK coast) to support the assessment",
     "Evaluation: 'effectiveness' depends on cost, sustainability and knock-on effects elsewhere on the coast",
     "Top-level answers reach a balanced, evidenced judgement rather than just listing strategies"]},

  {id:"ext-geo-3", subject:"geography", subjectId:"geography", year:"Year 10", topic:"Urban Issues & Challenges",
   command:"To what extent", marks:9,
   q:"\"Urban regeneration is the most effective way to improve quality of life in UK cities.\" To what extent do you agree?",
   indicative:[
     "Regeneration can improve housing, create jobs and revive run-down areas (use a named UK city scheme)",
     "It can boost the local economy and bring derelict brownfield land back into use",
     "Counter-arguments: regeneration can cause gentrification, raising rents and displacing original residents",
     "Other strategies may matter more: improving public transport, green space, air quality or affordable housing",
     "Sustainable urban living (water/energy efficiency, integrated transport) also improves quality of life",
     "A judgement should weigh regeneration against these alternatives with specific evidence",
     "Level 3 reaches a clear, supported conclusion that directly addresses 'to what extent'; SPaG is assessed"]},

  {id:"ext-geo-4", subject:"geography", subjectId:"geography", year:"Year 11", topic:"Resource Management: Food",
   command:"Evaluate", marks:9,
   q:"Evaluate the success of strategies used to increase food supply sustainably.",
   indicative:[
     "Strategies: irrigation, the 'new' green revolution, biotechnology/GM crops, hydroponics and aeroponics",
     "Appropriate technology and sustainable approaches: permaculture, organic farming, urban farming",
     "Sustainable fishing and meat reduction reduce environmental pressure",
     "Success: some strategies greatly raise yields (irrigation, GM) but may have high water/energy or environmental costs",
     "Sustainability tension: high-tech intensive methods can damage soils and ecosystems, undermining long-term supply",
     "Use a named example/scheme to support (e.g. a specific sustainable food project)",
     "A strong answer judges how SUSTAINABLE as well as how productive each strategy is, and concludes clearly"]}
);
