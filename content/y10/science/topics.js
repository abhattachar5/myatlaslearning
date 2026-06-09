// content/y10/science/topics.js — Year 10 Science: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA Trilogy 8464 core GCSE.
// Science island accent colour #10b981.

const SCIENCE_TOPICS_Y10 = [
  // ── Biology ──────────────────────────────────────────────────────────
  {id:"s10t-01", name:"Organisation & the Digestive System", emoji:"🫀", hasContent:true,
   description:"Study enzymes, the digestive system, and how substances are broken down and absorbed."},
  {id:"s10t-02", name:"Circulatory & Respiratory Systems", emoji:"❤️", hasContent:true,
   description:"Explore the heart, blood vessels, blood and gas exchange in the lungs."},
  {id:"s10t-03", name:"Communicable Disease & Defence", emoji:"🦠", hasContent:true,
   description:"Study how pathogens cause disease, the body's defences, and treatments including vaccination and drugs."},
  {id:"s10t-04", name:"Homeostasis & the Nervous System", emoji:"🧠", hasContent:true,
   description:"Understand homeostasis, the nervous system, reflexes and how the body maintains a stable environment."},
  {id:"s10t-05", name:"Hormonal Coordination", emoji:"🧬", hasContent:true,
   description:"Study the endocrine system, including blood glucose control, puberty and the menstrual cycle."},
  // ── Chemistry ────────────────────────────────────────────────────────
  {id:"s10t-06", name:"Quantitative Chemistry", emoji:"⚖️", hasContent:true,
   description:"Calculate relative formula mass, moles, concentrations and use balanced equations for reacting masses."},
  {id:"s10t-07", name:"Chemical Changes: Reactivity & Electrolysis", emoji:"⚡", hasContent:true,
   description:"Use the reactivity series, extract metals, and understand electrolysis of molten and aqueous compounds."},
  {id:"s10t-08", name:"Energy Changes", emoji:"🌡️", hasContent:true,
   description:"Measure and explain energy changes in reactions, including bond energy calculations."},
  {id:"s10t-09", name:"Rates of Reaction", emoji:"⏱️", hasContent:true,
   description:"Investigate and explain factors affecting reaction rate using collision theory."},
  {id:"s10t-10", name:"Organic Chemistry", emoji:"🛢️", hasContent:true,
   description:"Study crude oil, alkanes, alkenes, fractional distillation and cracking."},
  // ── Physics ──────────────────────────────────────────────────────────
  {id:"s10t-11", name:"Electricity: Series, Parallel & Mains", emoji:"💡", hasContent:true,
   description:"Analyse series and parallel circuits, use P = IV, and understand mains electricity safety."},
  {id:"s10t-12", name:"Particle Model & Density", emoji:"🧊", hasContent:true,
   description:"Use the particle model to explain density, changes of state and specific heat capacity."},
  {id:"s10t-13", name:"Radioactivity", emoji:"☢️", hasContent:true,
   description:"Understand atomic structure, types of radiation, half-life and uses/dangers of radioactive materials."},
  {id:"s10t-14", name:"Forces & Pressure", emoji:"🏗️", hasContent:true,
   description:"Apply force, pressure and moments calculations and understand atmospheric pressure."},
  // ── Triple-only (Separate Science) topics ──────────────────────────────
  {id:"s10t-15", name:"Transition Metals", emoji:"🟤", hasContent:true,
   description:"Triple Chemistry: the properties, coloured compounds, variable oxidation states and catalytic uses of the transition metals."},
  {id:"s10t-16", name:"Optics & Lenses", emoji:"🔬", hasContent:true,
   description:"Triple Physics: reflection, refraction, convex and concave lenses, ray diagrams and the colour of light."}
];

// ── Biology islands ──────────────────────────────────────────────────────────

// Topic 1: Organisation & the Digestive System
CURRICULUM.push(
  {id:"s10i-01-1", name:"Enzymes & Digestion", emoji:"🧪", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain how enzymes work (lock and key model), their optimum conditions and their role in digestion.",
   learningOutcomes:["Describe the lock-and-key model","Explain the effect of temperature and pH on enzymes","Identify where different enzymes act in digestion"],
   topics:["Lock and key","Temperature & pH","Digestive enzymes"], prerequisites:[]},
  {id:"s10i-01-2", name:"The Digestive System", emoji:"🫀", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the structure and function of each organ in the digestive system.",
   learningOutcomes:["Label the organs of the digestive system","Explain the role of each organ","Describe absorption in the small intestine"],
   topics:["Digestive organs","Function of each organ","Absorption"], prerequisites:["s10i-01-1"]},
  {id:"s10i-01-3", name:"Food Tests & Practical Skills", emoji:"🔬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:1,
   description:"Carry out and describe food tests for starch, protein, lipids and sugars.",
   learningOutcomes:["Describe the iodine, Biuret, Sudan III and Benedict's tests","Identify positive results","Evaluate food test results"],
   topics:["Food tests","Positive results","Practical skills"], prerequisites:["s10i-01-1"]}
);

// Topic 2: Circulatory & Respiratory Systems
CURRICULUM.push(
  {id:"s10i-02-1", name:"The Heart & Blood Vessels", emoji:"❤️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the structure of the heart and the roles of arteries, veins and capillaries.",
   learningOutcomes:["Label the four chambers and major vessels","Describe the double circulatory system","Compare arteries, veins and capillaries"],
   topics:["Heart structure","Double circulation","Blood vessels"], prerequisites:[]},
  {id:"s10i-02-2", name:"Blood & Its Components", emoji:"🩸", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:1,
   description:"Describe the components of blood and their functions.",
   learningOutcomes:["Name the four components of blood","Describe the function of each component","Explain how red blood cells are adapted"],
   topics:["Plasma, red cells, white cells, platelets","Functions","Red blood cell adaptations"], prerequisites:["s10i-02-1"]},
  {id:"s10i-02-3", name:"Lungs & Gas Exchange", emoji:"🫁", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the structure of the lungs and how gas exchange occurs in the alveoli.",
   learningOutcomes:["Describe the structure of the lungs","Explain gas exchange at the alveoli","Describe how alveoli are adapted for efficient exchange"],
   topics:["Lung structure","Gas exchange","Alveolar adaptations"], prerequisites:["s10i-02-1"]},
  {id:"s10i-02-4", name:"Health, Disease & Risk Factors", emoji:"🩺", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain communicable vs non-communicable disease, lifestyle risk factors and cancer.",
   learningOutcomes:["Distinguish communicable and non-communicable disease","Link lifestyle risk factors to disease","Describe benign and malignant tumours and carcinogens"],
   topics:["Health & disease","Risk factors","Cancer"], prerequisites:["s10i-02-1"]}
);

// Topic 3: Communicable Disease & Defence
CURRICULUM.push(
  {id:"s10i-03-1", name:"Pathogens & Transmission", emoji:"🦠", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-03", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Describe the four types of pathogen and how diseases are transmitted.",
   learningOutcomes:["Name the four pathogen types","Describe how each type is transmitted","Give examples of diseases caused by each"],
   topics:["Bacteria, viruses, fungi, protists","Transmission routes","Example diseases"], prerequisites:[]},
  {id:"s10i-03-2", name:"The Body's Defences", emoji:"🛡️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the body's non-specific and specific defences against pathogens.",
   learningOutcomes:["Describe physical and chemical barriers","Explain the immune response (white blood cells)","Distinguish non-specific and specific defences"],
   topics:["Physical barriers","Chemical barriers","Immune response"], prerequisites:["s10i-03-1"]},
  {id:"s10i-03-3", name:"Vaccination & Drugs", emoji:"💊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain how vaccines and drugs work, including the problem of antibiotic resistance.",
   learningOutcomes:["Explain how vaccination produces immunity","Distinguish antibiotics from painkillers","Explain antibiotic resistance"],
   topics:["Vaccination","Antibiotics","Antibiotic resistance"], prerequisites:["s10i-03-2"]},
  {id:"s10i-03-4", name:"Plant Diseases & Defences", emoji:"🌿", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Identify plant diseases and explain plant physical, chemical and mechanical defences.",
   learningOutcomes:["Recognise signs of plant disease and how it is detected","Describe physical, chemical and mechanical plant defences","Identify nitrate and magnesium deficiencies"],
   topics:["Plant pathogens","Plant defences","Mineral deficiencies"], prerequisites:["s10i-03-1"]},
  {id:"s10i-03-5", name:"Monoclonal Antibodies", emoji:"🧫", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-03", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain how monoclonal antibodies are produced and used (Triple).",
   learningOutcomes:["Explain what monoclonal antibodies are","Describe how they are produced (hybridoma)","Describe their uses and limitations"],
   topics:["What they are","Production","Uses"], prerequisites:["s10i-03-2"]}
);

// Topic 4: Homeostasis & the Nervous System
CURRICULUM.push(
  {id:"s10i-04-1", name:"Homeostasis", emoji:"🧠", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Define homeostasis and explain why internal conditions must be controlled.",
   learningOutcomes:["Define homeostasis","Give examples of conditions that must be controlled","Describe the negative-feedback loop"],
   topics:["Definition","Controlled conditions","Negative feedback"], prerequisites:[]},
  {id:"s10i-04-2", name:"The Nervous System & Reflexes", emoji:"⚡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the structure and function of the nervous system and explain the reflex arc.",
   learningOutcomes:["Describe receptors, sensory/relay/motor neurones and effectors","Draw and label a reflex arc","Explain why reflexes are rapid and automatic"],
   topics:["The CNS","Neurones","The reflex arc"], prerequisites:["s10i-04-1"]},
  {id:"s10i-04-3", name:"The Eye & Brain", emoji:"👁️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the structure of the eye, how it focuses light and the role of the brain.",
   learningOutcomes:["Label the parts of the eye","Explain accommodation (focusing)","Describe short- and long-sightedness and their correction"],
   topics:["Eye structure","Accommodation","Correcting vision"], prerequisites:["s10i-04-2"]},
  {id:"s10i-04-4", name:"The Kidneys & Water Balance", emoji:"🫘", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-04", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain how the kidneys regulate water and remove urea, and compare dialysis and transplant.",
   learningOutcomes:["Describe filtration and selective reabsorption","Explain water control by ADH (negative feedback)","Compare dialysis and kidney transplant"],
   topics:["Osmoregulation","ADH & negative feedback","Dialysis vs transplant"], prerequisites:["s10i-04-1"]}
);

// Topic 5: Hormonal Coordination
CURRICULUM.push(
  {id:"s10i-05-1", name:"The Endocrine System", emoji:"🧬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the endocrine system and how hormones control blood glucose.",
   learningOutcomes:["Identify key glands and their hormones","Explain the control of blood glucose by insulin and glucagon","Describe type 1 and type 2 diabetes"],
   topics:["Endocrine glands","Blood glucose control","Diabetes"], prerequisites:["s10i-04-1"]},
  {id:"s10i-05-2", name:"Puberty & the Menstrual Cycle", emoji:"🔄", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the hormones involved in puberty, the menstrual cycle and fertility treatments.",
   learningOutcomes:["Describe the role of hormones in puberty","Explain the menstrual cycle (FSH, LH, oestrogen, progesterone)","Describe hormonal contraception and fertility treatments"],
   topics:["Puberty hormones","Menstrual cycle","Contraception & fertility"], prerequisites:["s10i-05-1"]},
  {id:"s10i-05-3", name:"Contraception & Fertility Treatments", emoji:"👶", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Compare hormonal and barrier contraception and describe fertility treatments including IVF.",
   learningOutcomes:["Compare hormonal and barrier methods of contraception","Evaluate contraceptive methods","Describe FSH/LH fertility treatment and IVF"],
   topics:["Contraception","Evaluating methods","IVF & fertility"], prerequisites:["s10i-05-2"]},
  {id:"s10i-05-4", name:"Plant Hormones & Tropisms", emoji:"🌱", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain phototropism and gravitropism using auxin, and the commercial uses of plant hormones.",
   learningOutcomes:["Explain phototropism and gravitropism","Describe the role of auxin in cell elongation","Give commercial uses of auxins, gibberellins and ethene"],
   topics:["Tropisms","Auxin","Commercial uses"], prerequisites:["s10i-05-1"]}
);

// ── Chemistry islands ────────────────────────────────────────────────────────

// Topic 6: Quantitative Chemistry
CURRICULUM.push(
  {id:"s10i-06-1", name:"Relative Formula Mass & Moles", emoji:"⚖️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Calculate relative formula mass (Mr) and use the mole concept.",
   learningOutcomes:["Calculate Mr from a formula","Define the mole","Use mass = Mr × moles"],
   topics:["Relative formula mass","The mole","Mass–mole calculations"], prerequisites:[]},
  {id:"s10i-06-2", name:"Reacting Masses", emoji:"🧮", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-06", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Use balanced equations to calculate masses of reactants and products.",
   learningOutcomes:["Calculate moles from a balanced equation","Find masses of reactants and products","Identify the limiting reactant"],
   topics:["Moles from equations","Reacting mass calculations","Limiting reactant"], prerequisites:["s10i-06-1"]},
  {id:"s10i-06-3", name:"Concentration & Titrations", emoji:"🧪", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-06", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Calculate concentration and describe how to carry out a titration.",
   learningOutcomes:["Use concentration = moles ÷ volume","Describe the titration method","Calculate unknowns from titration results"],
   topics:["Concentration","Titration method","Titration calculations"], prerequisites:["s10i-06-1"]},
  {id:"s10i-06-4", name:"Percentage Yield & Atom Economy", emoji:"📊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-06", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Calculate percentage yield and atom economy and explain why they matter (Triple).",
   learningOutcomes:["Calculate percentage yield","Calculate atom economy","Explain why high atom economy is sustainable"],
   topics:["Percentage yield","Atom economy","Sustainability"], prerequisites:["s10i-06-1"]}
);

// Topic 7: Chemical Changes
CURRICULUM.push(
  {id:"s10i-07-1", name:"The Reactivity Series", emoji:"🔥", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Order metals by reactivity and predict displacement reactions.",
   learningOutcomes:["Order metals in the reactivity series","Predict displacement reactions","Write ionic equations for displacement"],
   topics:["Reactivity series","Displacement","Ionic equations"], prerequisites:[]},
  {id:"s10i-07-2", name:"Extraction of Metals", emoji:"⛏️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain how metals are extracted depending on their reactivity.",
   learningOutcomes:["Link extraction method to reactivity","Describe reduction with carbon","Describe extraction by electrolysis"],
   topics:["Reduction vs electrolysis","Carbon reduction","Aluminium extraction"], prerequisites:["s10i-07-1"]},
  {id:"s10i-07-3", name:"Electrolysis", emoji:"⚡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-07", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain electrolysis of molten and aqueous ionic compounds.",
   learningOutcomes:["Explain what happens at each electrode","Write half equations","Predict products of electrolysis"],
   topics:["Electrolysis setup","Half equations","Predicting products"], prerequisites:["s10i-07-1"]},
  {id:"s10i-07-4", name:"Acids, Bases & Making Salts", emoji:"🧪", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:3,
   description:"React acids with metals, bases and carbonates to make salts, and prepare a pure soluble salt.",
   learningOutcomes:["Recall the three reactions of acids and name salts","Write the neutralisation ionic equation","Prepare a pure, dry soluble salt; distinguish strong and weak acids"],
   topics:["Reactions of acids","Neutralisation & salts","Strong vs weak acids"], prerequisites:["s10i-07-1"]},
  {id:"s10i-07-5", name:"Oxidation, Reduction & Redox", emoji:"🔄", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-07", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Define oxidation and reduction (electrons and oxygen) and write half equations for redox reactions.",
   learningOutcomes:["Define oxidation and reduction (OIL RIG)","Explain why displacement is redox","Write half equations for redox reactions"],
   topics:["OIL RIG","Redox in displacement","Half equations"], prerequisites:["s10i-07-1"]}
);

// Topic 8: Energy Changes
CURRICULUM.push(
  {id:"s10i-08-1", name:"Exothermic & Endothermic Reactions", emoji:"🌡️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Classify reactions as exothermic or endothermic and interpret reaction profiles.",
   learningOutcomes:["Define exothermic and endothermic","Draw and interpret reaction profiles","Give examples of each type"],
   topics:["Exothermic","Endothermic","Reaction profiles"], prerequisites:[]},
  {id:"s10i-08-2", name:"Bond Energy Calculations", emoji:"🔗", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-08", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Calculate overall energy change using bond energies.",
   learningOutcomes:["Use bond energies to calculate energy in and energy out","Determine overall energy change","Link to exothermic/endothermic"],
   topics:["Bonds broken (in)","Bonds made (out)","Overall energy change"], prerequisites:["s10i-08-1"]}
);

// Topic 9: Rates of Reaction
CURRICULUM.push(
  {id:"s10i-09-1", name:"Factors Affecting Rate", emoji:"⏱️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-09", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe how temperature, concentration, surface area and catalysts affect reaction rate.",
   learningOutcomes:["Explain each factor using collision theory","Describe how to investigate each factor","Interpret rate graphs"],
   topics:["Temperature","Concentration & surface area","Catalysts"], prerequisites:[]},
  {id:"s10i-09-2", name:"Collision Theory & Rate Graphs", emoji:"📈", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-09", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use collision theory to explain rate and interpret rate–time graphs.",
   learningOutcomes:["Explain collision theory (frequency and energy)","Read and interpret rate graphs","Calculate mean rate of reaction"],
   topics:["Collision theory","Rate graphs","Mean rate"], prerequisites:["s10i-09-1"]},
  {id:"s10i-09-3", name:"Reversible Reactions & Equilibrium", emoji:"⇌", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-09", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Understand reversible reactions, energy changes and dynamic equilibrium in a closed system.",
   learningOutcomes:["Explain reversible reactions and the ⇌ symbol","Describe dynamic equilibrium","Relate exothermic and endothermic directions"],
   topics:["Reversible reactions","Dynamic equilibrium","Energy changes"], prerequisites:["s10i-09-1"]},
  {id:"s10i-09-4", name:"Le Chatelier's Principle", emoji:"⚖️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-09", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Predict how changes in concentration, temperature and pressure shift the position of equilibrium.",
   learningOutcomes:["State and apply Le Chatelier's principle","Predict effects of concentration, temperature and pressure","Explain the Haber process compromise conditions"],
   topics:["Le Chatelier's principle","Shifting equilibrium","The Haber process"], prerequisites:["s10i-09-3"]}
);

// Topic 10: Organic Chemistry
CURRICULUM.push(
  {id:"s10i-10-1", name:"Crude Oil & Fractional Distillation", emoji:"🛢️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-10", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe crude oil as a mixture and explain fractional distillation.",
   learningOutcomes:["Describe crude oil as a mixture of hydrocarbons","Explain how fractions are separated by boiling point","Name the main fractions and their uses"],
   topics:["Hydrocarbons","Fractional distillation","Fractions & uses"], prerequisites:[]},
  {id:"s10i-10-2", name:"Alkanes, Alkenes & Cracking", emoji:"⛽", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-10", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Compare alkanes and alkenes and explain why cracking is important.",
   learningOutcomes:["Name and draw alkanes and alkenes","Test for an alkene with bromine water","Explain cracking and why it is useful"],
   topics:["Alkanes","Alkenes","Cracking"], prerequisites:["s10i-10-1"]},
  {id:"s10i-10-3", name:"Alcohols, Carboxylic Acids & Esters", emoji:"🍷", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-10", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Study the alcohols, carboxylic acids and esters homologous series (Triple).",
   learningOutcomes:["Describe alcohols and their reactions","Describe carboxylic acids","Explain how esters are made and used"],
   topics:["Alcohols","Carboxylic acids","Esters"], prerequisites:["s10i-10-1"]},
  {id:"s10i-10-4", name:"Polymers: Addition & Condensation", emoji:"🔗", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-10", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Compare addition and condensation polymerisation and natural polymers (Triple).",
   learningOutcomes:["Explain addition polymerisation","Explain condensation polymerisation","Identify natural polymers"],
   topics:["Addition","Condensation","Natural polymers"], prerequisites:["s10i-10-2"]}
);

// ── Physics islands ──────────────────────────────────────────────────────────

// Topic 11: Electricity
CURRICULUM.push(
  {id:"s10i-11-1", name:"Series & Parallel Rules", emoji:"🔌", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-11", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Apply the current and voltage rules for series and parallel circuits.",
   learningOutcomes:["State series rules (same current, voltages add)","State parallel rules (same voltage, currents add)","Calculate total resistance in series"],
   topics:["Series rules","Parallel rules","Total resistance"], prerequisites:[]},
  {id:"s10i-11-2", name:"Power & Energy in Circuits", emoji:"💡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-11", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use P = IV and E = Pt to calculate power and energy transferred.",
   learningOutcomes:["Use P = IV and P = I²R","Use E = Pt","Calculate the cost of electricity"],
   topics:["Power formulas","Energy transferred","Electricity cost"], prerequisites:["s10i-11-1"]},
  {id:"s10i-11-3", name:"Mains Electricity & Safety", emoji:"🔋", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-11", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe mains electricity, the three-pin plug and safety features (fuses, earth wire, RCDs).",
   learningOutcomes:["Describe the UK mains supply (230V, 50Hz, ac)","Wire a three-pin plug correctly","Explain the role of fuses, earth wire and RCDs"],
   topics:["Mains supply","Wiring a plug","Safety features"], prerequisites:["s10i-11-1"]},
  {id:"s10i-11-4", name:"Circuit Components & I–V Characteristics", emoji:"📉", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-11", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Describe the I–V characteristics of resistors, lamps and diodes, and the LDR and thermistor.",
   learningOutcomes:["Describe I–V graphs for a resistor, lamp and diode","Explain LDR and thermistor behaviour and uses","Describe the I–V required practical"],
   topics:["I–V characteristics","LDR & thermistor","Required practical"], prerequisites:["s10i-11-1"]},
  {id:"s10i-11-5", name:"Static Electricity & Electric Fields", emoji:"⚡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-11", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain charging by friction, forces between charges and electric fields.",
   learningOutcomes:["Explain charging by friction (electron transfer)","State that like charges repel and opposite charges attract","Describe electric fields and sparking"],
   topics:["Charging by friction","Forces between charges","Electric fields"], prerequisites:["s10i-11-1"]}
);

// Topic 12: Particle Model & Density
CURRICULUM.push(
  {id:"s10i-12-1", name:"Density & States of Matter", emoji:"🧊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-12", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use the particle model to explain density, states of matter and changes of state.",
   learningOutcomes:["Use density = mass ÷ volume","Explain states using the particle model","Describe changes of state and latent heat"],
   topics:["Density","Particle model","Changes of state"], prerequisites:[]},
  {id:"s10i-12-2", name:"Specific Heat Capacity", emoji:"🌡️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-12", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use the specific heat capacity equation and describe the practical.",
   learningOutcomes:["Use ΔE = mcΔθ","Describe the SHC practical","Interpret SHC data"],
   topics:["SHC equation","SHC practical","Interpreting data"], prerequisites:["s10i-12-1"]},
  {id:"s10i-12-3", name:"Internal Energy & Latent Heat", emoji:"🔥", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-12", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain internal energy and use specific latent heat (E = mL) for changes of state.",
   learningOutcomes:["Explain internal energy as particle KE + PE","Use E = mL for fusion and vaporisation","Interpret heating and cooling curves"],
   topics:["Internal energy","Specific latent heat","Heating curves"], prerequisites:["s10i-12-1"]},
  {id:"s10i-12-4", name:"Particle Motion & Gas Pressure", emoji:"🎈", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-12", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain gas pressure using particle motion and use pV = constant for a fixed mass of gas.",
   learningOutcomes:["Explain gas pressure from particle collisions","Relate temperature to pressure at constant volume","Use pV = constant (Boyle's law)"],
   topics:["Gas pressure","Pressure & temperature","pV = constant"], prerequisites:["s10i-12-1"]}
);

// Topic 13: Radioactivity
CURRICULUM.push(
  {id:"s10i-13-1", name:"Atomic Structure & Radiation Types", emoji:"☢️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-13", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the nuclear model and compare alpha, beta and gamma radiation.",
   learningOutcomes:["Describe the nuclear model","Compare α, β and γ properties","Explain ionising ability and penetration"],
   topics:["Nuclear model","α, β, γ properties","Ionisation & penetration"], prerequisites:[]},
  {id:"s10i-13-2", name:"Half-Life", emoji:"⏳", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-13", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Define half-life and use it to solve problems.",
   learningOutcomes:["Define half-life","Calculate remaining activity/mass after n half-lives","Interpret half-life graphs"],
   topics:["Half-life definition","Calculations","Graphs"], prerequisites:["s10i-13-1"]},
  {id:"s10i-13-3", name:"Uses & Dangers of Radiation", emoji:"⚠️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-13", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate the uses and dangers of radioactive materials.",
   learningOutcomes:["Describe uses (medical, industrial, dating)","Explain contamination vs irradiation","Evaluate risks and benefits"],
   topics:["Medical & industrial uses","Contamination vs irradiation","Risk–benefit"], prerequisites:["s10i-13-1"]},
  {id:"s10i-13-4", name:"Nuclear Fission & Fusion", emoji:"☢️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-13", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain nuclear fission, chain reactions and nuclear fusion (Triple).",
   learningOutcomes:["Explain nuclear fission and chain reactions","Explain nuclear fusion","Contrast fission and fusion"],
   topics:["Fission","Chain reactions","Fusion"], prerequisites:["s10i-13-1"]}
);

// Topic 14: Forces & Pressure
CURRICULUM.push(
  {id:"s10i-14-1", name:"Forces & Moments", emoji:"🏗️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-14", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Calculate moments and use the principle of moments for balanced objects.",
   learningOutcomes:["Use moment = force × distance","Apply the principle of moments","Solve problems with balanced beams"],
   topics:["Moments","Principle of moments","Balanced beams"], prerequisites:[]},
  {id:"s10i-14-2", name:"Pressure in Fluids", emoji:"💧", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-14", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Calculate pressure and explain atmospheric pressure and pressure in liquids.",
   learningOutcomes:["Use pressure = force ÷ area","Explain atmospheric pressure","Use P = hρg for liquid pressure"],
   topics:["Pressure formula","Atmospheric pressure","Liquid pressure"], prerequisites:["s10i-14-1"]},
  {id:"s10i-14-3", name:"Work, Energy & Power", emoji:"💪", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-14", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use W = Fs and P = W/t to calculate work done and power.",
   learningOutcomes:["Use work done = force × distance","Explain energy transfer and work against friction","Use power = work ÷ time"],
   topics:["Work done","Energy transfer","Power"], prerequisites:["s10i-14-1"]},
  {id:"s10i-14-4", name:"Elasticity & Hooke's Law", emoji:"🪝", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-14", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Apply Hooke's law (F = ke), the force–extension practical and elastic potential energy.",
   learningOutcomes:["Distinguish elastic and inelastic deformation","Use F = ke and the limit of proportionality","Describe the force–extension required practical"],
   topics:["Hooke's law","Force–extension practical","Elastic potential energy"], prerequisites:["s10i-14-1"]},
  {id:"s10i-14-5", name:"Scalars, Vectors & Resultant Forces", emoji:"➡️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-14", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Distinguish scalars and vectors and find resultant forces using diagrams.",
   learningOutcomes:["Distinguish scalar and vector quantities","Draw free-body diagrams","Find resultant forces and resolve perpendicular forces"],
   topics:["Scalars vs vectors","Free-body diagrams","Resultant forces"], prerequisites:["s10i-14-1"]}
);

// Topic 15: Transition Metals (Triple Chemistry)
CURRICULUM.push(
  {id:"s10i-15-1", name:"Properties of Transition Metals", emoji:"🟤", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-15", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Describe the properties of transition metals and compare them with Group 1 metals.",
   learningOutcomes:["Locate the transition metals in the periodic table","Compare their properties with Group 1 metals","Link properties to uses"],
   topics:["Position","Properties vs Group 1","Uses"], prerequisites:[]},
  {id:"s10i-15-2", name:"Coloured Compounds & Variable Oxidation States", emoji:"🎨", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-15", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Explain variable oxidation states and the coloured compounds of transition metals.",
   learningOutcomes:["Explain variable oxidation states (e.g. Fe²⁺/Fe³⁺)","Describe coloured compounds","Contrast with Group 1 compounds"],
   topics:["Variable oxidation states","Coloured compounds","Contrast with Group 1"], prerequisites:["s10i-15-1"]},
  {id:"s10i-15-3", name:"Transition Metals as Catalysts", emoji:"⚗️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-15", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain how transition metals act as catalysts, with named examples.",
   learningOutcomes:["Explain what a catalyst does","Give named transition-metal catalysts","Link catalysts to industrial processes"],
   topics:["Catalysts","Named examples","Industrial uses"], prerequisites:["s10i-15-1"]}
);

// Topic 16: Optics & Lenses (Triple Physics)
CURRICULUM.push(
  {id:"s10i-16-1", name:"Reflection & Refraction of Light", emoji:"💡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-16", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the law of reflection and the refraction of light at boundaries.",
   learningOutcomes:["State the law of reflection","Distinguish specular and diffuse reflection","Explain refraction and bending towards/away from the normal"],
   topics:["Reflection","Specular vs diffuse","Refraction"], prerequisites:[]},
  {id:"s10i-16-2", name:"Lenses: Convex & Concave", emoji:"🔍", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-16", yearGroup:"Year 10", difficulty:3, estimatedHours:2,
   description:"Describe convex and concave lenses, draw ray diagrams and calculate magnification.",
   learningOutcomes:["Distinguish converging and diverging lenses","Draw a ray diagram and describe the image","Use magnification = image height ÷ object height"],
   topics:["Convex & concave","Ray diagrams","Magnification"], prerequisites:["s10i-16-1"]},
  {id:"s10i-16-3", name:"Visible Light & Colour", emoji:"🌈", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s10t-16", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the visible spectrum, why objects appear coloured and how filters work.",
   learningOutcomes:["Describe the visible spectrum","Explain the colour of opaque objects","Explain how colour filters work"],
   topics:["Visible spectrum","Colour of objects","Filters"], prerequisites:["s10i-16-1"]}
);
