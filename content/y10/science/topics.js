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
   description:"Apply force, pressure and moments calculations and understand atmospheric pressure."}
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
   topics:["Lung structure","Gas exchange","Alveolar adaptations"], prerequisites:["s10i-02-1"]}
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
   topics:["Vaccination","Antibiotics","Antibiotic resistance"], prerequisites:["s10i-03-2"]}
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
   topics:["Eye structure","Accommodation","Correcting vision"], prerequisites:["s10i-04-2"]}
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
   topics:["Puberty hormones","Menstrual cycle","Contraception & fertility"], prerequisites:["s10i-05-1"]}
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
   topics:["Concentration","Titration method","Titration calculations"], prerequisites:["s10i-06-1"]}
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
   topics:["Electrolysis setup","Half equations","Predicting products"], prerequisites:["s10i-07-1"]}
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
   topics:["Collision theory","Rate graphs","Mean rate"], prerequisites:["s10i-09-1"]}
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
   topics:["Alkanes","Alkenes","Cracking"], prerequisites:["s10i-10-1"]}
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
   topics:["Mains supply","Wiring a plug","Safety features"], prerequisites:["s10i-11-1"]}
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
   topics:["SHC equation","SHC practical","Interpreting data"], prerequisites:["s10i-12-1"]}
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
   topics:["Medical & industrial uses","Contamination vs irradiation","Risk–benefit"], prerequisites:["s10i-13-1"]}
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
   topics:["Pressure formula","Atmospheric pressure","Liquid pressure"], prerequisites:["s10i-14-1"]}
);
