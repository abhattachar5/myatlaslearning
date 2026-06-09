// content/y9/science/topics.js — Year 9 Science: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA Trilogy 8464 GCSE foundations.
// Science island accent colour #10b981.

const SCIENCE_TOPICS_Y9 = [
  // ── Biology ──────────────────────────────────────────────────────────
  {id:"s9t-01", name:"Cells & Organisation", emoji:"🔬", hasContent:true,
   description:"Study cell structure, specialised cells, microscopy and how cells are organised into tissues, organs and systems."},
  {id:"s9t-02", name:"The Immune System", emoji:"🛡️", hasContent:true,
   description:"Understand how the body defends against pathogens, including white blood cells, vaccination and antibiotics."},
  {id:"s9t-03", name:"Bioenergetics", emoji:"🌿", hasContent:true,
   description:"Explore photosynthesis and respiration, their equations, and the factors that affect their rate."},
  {id:"s9t-04", name:"Ecology & Ecosystems", emoji:"🌍", hasContent:true,
   description:"Study ecosystems, food webs, sampling, carbon cycle and human impacts on biodiversity."},
  {id:"s9t-05", name:"Inheritance Introduction", emoji:"🧬", hasContent:true,
   description:"Learn about DNA, genes, chromosomes and simple inheritance including Punnett squares."},
  // ── Chemistry ────────────────────────────────────────────────────────
  {id:"s9t-06", name:"Atomic Structure & Periodic Table", emoji:"⚗️", hasContent:true,
   description:"Understand atomic structure, electron configuration and how the periodic table organises elements."},
  {id:"s9t-07", name:"Bonding & Structure", emoji:"🔗", hasContent:true,
   description:"Explore ionic, covalent and metallic bonding and link structure to properties."},
  {id:"s9t-08", name:"Chemical Reactions & Equations", emoji:"🧪", hasContent:true,
   description:"Write and balance equations, understand conservation of mass and types of reaction."},
  {id:"s9t-09", name:"Acids, Bases & Neutralisation", emoji:"🧫", hasContent:true,
   description:"Use the pH scale, understand neutralisation reactions and write ionic equations for acids."},
  {id:"s9t-10", name:"Earth's Atmosphere & Resources", emoji:"🌎", hasContent:true,
   description:"Trace the evolution of Earth's atmosphere and evaluate how we use and recycle resources."},
  // ── Physics ──────────────────────────────────────────────────────────
  {id:"s9t-11", name:"Energy Stores & Transfers", emoji:"⚡", hasContent:true,
   description:"Identify energy stores, calculate kinetic and gravitational PE, and understand energy transfer."},
  {id:"s9t-12", name:"Forces & Motion", emoji:"🚀", hasContent:true,
   description:"Understand resultant forces, speed, acceleration, Newton's first law and distance–time graphs."},
  {id:"s9t-13", name:"Waves & the EM Spectrum", emoji:"🌊", hasContent:true,
   description:"Study transverse and longitudinal waves, wave properties and the electromagnetic spectrum."},
  {id:"s9t-14", name:"Electricity: Circuits & Charge", emoji:"💡", hasContent:true,
   description:"Build and analyse circuits, understand current, voltage, resistance and Ohm's law."}
];

// ── Biology islands ──────────────────────────────────────────────────────────

// Topic 1: Cells & Organisation
CURRICULUM.push(
  {id:"s9i-01-1", name:"Cell Structure & Microscopy", emoji:"🔬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-01", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Compare plant and animal cells, use a microscope, and calculate magnification.",
   learningOutcomes:["Label subcellular structures","Use a light microscope","Calculate magnification"],
   topics:["Cell structure","Microscopy","Magnification"], prerequisites:[]},
  {id:"s9i-01-2", name:"Specialised Cells", emoji:"🧫", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Explain how cells are adapted for specific functions.",
   learningOutcomes:["Describe adaptations of nerve, muscle, sperm, root hair and red blood cells","Link structure to function","Explain why cells differentiate"],
   topics:["Animal specialised cells","Plant specialised cells","Differentiation"], prerequisites:["s9i-01-1"]},
  {id:"s9i-01-3", name:"Organisation: Tissues to Systems", emoji:"🫀", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain the levels of organisation from cells to organ systems.",
   learningOutcomes:["Order: cell → tissue → organ → organ system → organism","Give examples at each level","Describe the digestive system as an organ system"],
   topics:["Levels of organisation","Organ systems","The digestive system"], prerequisites:["s9i-01-1"]}
);

// Topic 2: The Immune System
CURRICULUM.push(
  {id:"s9i-02-1", name:"Pathogens & Defence", emoji:"🦠", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-02", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Identify types of pathogen and explain how the body's first line of defence stops them.",
   learningOutcomes:["Name the four types of pathogen","Describe physical and chemical barriers","Explain how pathogens cause disease"],
   topics:["Bacteria, viruses, fungi, protists","Skin, mucus, stomach acid","How pathogens make us ill"], prerequisites:[]},
  {id:"s9i-02-2", name:"White Blood Cells & Vaccination", emoji:"💉", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain the immune response, how vaccines work and why antibiotic resistance is a problem.",
   learningOutcomes:["Describe the three roles of white blood cells","Explain how vaccination creates immunity","Explain antibiotic resistance"],
   topics:["Phagocytosis, antibodies, antitoxins","Vaccination & herd immunity","Antibiotics & resistance"], prerequisites:["s9i-02-1"]}
);

// Topic 3: Bioenergetics
CURRICULUM.push(
  {id:"s9i-03-1", name:"Photosynthesis", emoji:"🌿", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"State the photosynthesis equation and explain how light, CO₂ and temperature affect its rate.",
   learningOutcomes:["Write the word and symbol equations","Identify limiting factors","Interpret rate-of-photosynthesis graphs"],
   topics:["Photosynthesis equation","Limiting factors","Rate graphs"], prerequisites:[]},
  {id:"s9i-03-2", name:"Aerobic & Anaerobic Respiration", emoji:"🫁", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Compare aerobic and anaerobic respiration and explain the role of respiration in organisms.",
   learningOutcomes:["Write the equations for aerobic and anaerobic respiration","Compare energy yields","Explain lactic acid and oxygen debt"],
   topics:["Aerobic respiration","Anaerobic respiration","Oxygen debt"], prerequisites:["s9i-03-1"]},
  {id:"s9i-03-3", name:"Metabolism Overview", emoji:"🔄", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Understand metabolism as the sum of chemical reactions and link it to respiration and photosynthesis.",
   learningOutcomes:["Define metabolism","Give examples of metabolic reactions","Link metabolism to energy from respiration"],
   topics:["What is metabolism","Synthesis reactions","Energy for metabolism"], prerequisites:["s9i-03-2"]}
);

// Topic 4: Ecology & Ecosystems
CURRICULUM.push(
  {id:"s9i-04-1", name:"Ecosystems & Sampling", emoji:"🌍", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-04", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Define key ecology terms and use quadrats and transects to sample populations.",
   learningOutcomes:["Define population, community, ecosystem, habitat","Use quadrats to estimate population size","Use a transect to study distribution"],
   topics:["Ecology terms","Quadrats","Transects"], prerequisites:[]},
  {id:"s9i-04-2", name:"Food Webs & Interdependence", emoji:"🕸️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Construct food webs and explain how changes in one population affect others.",
   learningOutcomes:["Build a food web from food chains","Predict the effect of population changes","Explain competition and interdependence"],
   topics:["Food webs","Population changes","Competition"], prerequisites:["s9i-04-1"]},
  {id:"s9i-04-3", name:"Carbon Cycle & Human Impact", emoji:"♻️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Trace carbon through ecosystems and evaluate human impacts on biodiversity.",
   learningOutcomes:["Describe the carbon cycle","Explain deforestation and peat destruction","Evaluate conservation methods"],
   topics:["The carbon cycle","Human impacts","Conservation"], prerequisites:["s9i-04-2"]}
);

// Topic 5: Inheritance Introduction
CURRICULUM.push(
  {id:"s9i-05-1", name:"DNA, Genes & Chromosomes", emoji:"🧬", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Describe the structure of DNA and explain how genes code for proteins.",
   learningOutcomes:["Describe DNA's double-helix structure","Define gene, allele and chromosome","Explain the relationship between genes and proteins"],
   topics:["DNA structure","Genes & alleles","Protein synthesis (overview)"], prerequisites:[]},
  {id:"s9i-05-2", name:"Simple Inheritance & Punnett Squares", emoji:"📊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Use Punnett squares to predict the outcomes of monohybrid crosses.",
   learningOutcomes:["Define dominant, recessive, homozygous, heterozygous","Complete a Punnett square","Calculate predicted ratios and probabilities"],
   topics:["Key genetic terms","Punnett squares","Predicted ratios"], prerequisites:["s9i-05-1"]}
);

// ── Chemistry islands ────────────────────────────────────────────────────────

// Topic 6: Atomic Structure & Periodic Table
CURRICULUM.push(
  {id:"s9i-06-1", name:"Atoms, Elements & Isotopes", emoji:"⚛️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-06", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Describe the structure of an atom and define elements, compounds and isotopes.",
   learningOutcomes:["Describe protons, neutrons and electrons","Calculate atomic and mass numbers","Define isotope"],
   topics:["Subatomic particles","Atomic & mass number","Isotopes"], prerequisites:[]},
  {id:"s9i-06-2", name:"Electron Configuration", emoji:"🌀", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Write electron configurations for the first 20 elements and link them to group number.",
   learningOutcomes:["Fill electron shells (2, 8, 8)","Link outer electrons to group number","Explain why noble gases are unreactive"],
   topics:["Electron shells","Linking to the periodic table","Noble gas stability"], prerequisites:["s9i-06-1"]},
  {id:"s9i-06-3", name:"Groups & Trends", emoji:"📋", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain trends in group 1, group 7 and group 0 and predict properties from position.",
   learningOutcomes:["Describe trends in alkali metals and halogens","Explain trends using atomic structure","Predict properties of unfamiliar elements"],
   topics:["Group 1 trends","Group 7 trends","Predicting properties"], prerequisites:["s9i-06-2"]}
);

// Topic 7: Bonding & Structure
CURRICULUM.push(
  {id:"s9i-07-1", name:"Ionic Bonding", emoji:"🔗", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain how ions form and how ionic bonds create giant ionic lattices.",
   learningOutcomes:["Describe ion formation by electron transfer","Draw dot-and-cross diagrams","Link ionic structure to properties"],
   topics:["Electron transfer","Dot-and-cross diagrams","Ionic lattice properties"], prerequisites:["s9i-06-2"]},
  {id:"s9i-07-2", name:"Covalent Bonding", emoji:"⚛️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain covalent bonding in simple and giant covalent molecules.",
   learningOutcomes:["Describe shared-pair bonding","Draw covalent dot-and-cross diagrams","Compare simple vs giant covalent properties"],
   topics:["Shared pairs","Simple molecules","Giant covalent structures"], prerequisites:["s9i-06-2"]},
  {id:"s9i-07-3", name:"Metallic Bonding & Comparing Structures", emoji:"🪙", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Describe metallic bonding and compare the properties of ionic, covalent and metallic structures.",
   learningOutcomes:["Describe the metallic bonding model","Compare melting points and conductivity across structure types","Use bonding to explain a material's properties"],
   topics:["Metallic bonding","Comparing structures","Explaining properties"], prerequisites:["s9i-07-1","s9i-07-2"]}
);

// Topic 8: Chemical Reactions & Equations
CURRICULUM.push(
  {id:"s9i-08-1", name:"Writing & Balancing Equations", emoji:"🧪", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-08", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Write word and symbol equations and balance them to show conservation of mass.",
   learningOutcomes:["Write word equations","Write and balance symbol equations","Explain conservation of mass"],
   topics:["Word equations","Symbol equations","Balancing"], prerequisites:[]},
  {id:"s9i-08-2", name:"Types of Reaction", emoji:"🔥", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Identify combustion, thermal decomposition, oxidation and displacement reactions.",
   learningOutcomes:["Identify and write equations for key reaction types","Define oxidation and reduction","Predict products of displacement reactions"],
   topics:["Combustion","Decomposition","Oxidation & displacement"], prerequisites:["s9i-08-1"]},
  {id:"s9i-08-3", name:"Exothermic & Endothermic Reactions", emoji:"🌡️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Classify reactions as exothermic or endothermic and interpret energy profile diagrams.",
   learningOutcomes:["Define exothermic and endothermic","Give examples of each","Interpret energy profile diagrams"],
   topics:["Exothermic reactions","Endothermic reactions","Energy profiles"], prerequisites:["s9i-08-1"]}
);

// Topic 9: Acids, Bases & Neutralisation
CURRICULUM.push(
  {id:"s9i-09-1", name:"The pH Scale & Indicators", emoji:"🟢", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-09", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Use the pH scale, identify acids, alkalis and neutral substances, and use indicators.",
   learningOutcomes:["Use the pH scale 0–14","Classify substances as acid, alkali or neutral","Use universal indicator and litmus"],
   topics:["pH scale","Acids & alkalis","Indicators"], prerequisites:[]},
  {id:"s9i-09-2", name:"Neutralisation Reactions", emoji:"⚖️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-09", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Write equations for neutralisation and describe the products of acid reactions.",
   learningOutcomes:["Write acid + base → salt + water","Write acid + metal → salt + hydrogen","Name salts from their acid and base"],
   topics:["Acid + base","Acid + metal","Naming salts"], prerequisites:["s9i-09-1"]},
  {id:"s9i-09-3", name:"Making Salts", emoji:"🧂", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-09", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"React acids with metals, bases and carbonates to make and name salts.",
   learningOutcomes:["Recall the three reactions of acids","Name salts from the acid used","Describe making a soluble salt"],
   topics:["Reactions of acids","Naming salts","Soluble salt method"], prerequisites:["s9i-09-1"]}
);

// Topic 10: Earth's Atmosphere & Resources
CURRICULUM.push(
  {id:"s9i-10-1", name:"Evolution of the Atmosphere", emoji:"🌎", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-10", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Describe how Earth's atmosphere has changed over time.",
   learningOutcomes:["Describe the early atmosphere","Explain how oxygen levels increased","Describe the current atmosphere composition"],
   topics:["Early atmosphere","Rise of oxygen","Today's atmosphere"], prerequisites:[]},
  {id:"s9i-10-2", name:"Resources & Recycling", emoji:"♻️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-10", yearGroup:"Year 9", difficulty:2, estimatedHours:1,
   description:"Evaluate how we use Earth's resources and why recycling and sustainability matter.",
   learningOutcomes:["Distinguish finite and renewable resources","Explain the importance of recycling","Evaluate life-cycle assessments"],
   topics:["Finite vs renewable","Recycling","Life-cycle assessments"], prerequisites:["s9i-10-1"]},
  {id:"s9i-10-3", name:"Potable Water & Treatment", emoji:"🚰", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-10", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain how safe drinking (potable) water is produced from fresh water and sea water.",
   learningOutcomes:["Distinguish potable water from pure water","Describe filtration and sterilisation of fresh water","Explain desalination by distillation and reverse osmosis"],
   topics:["Potable vs pure","Filtration & sterilisation","Desalination"], prerequisites:["s9i-10-1"]}
);

// ── Physics islands ──────────────────────────────────────────────────────────

// Topic 11: Energy Stores & Transfers
CURRICULUM.push(
  {id:"s9i-11-1", name:"Energy Stores", emoji:"🔋", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-11", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Name the energy stores and describe how energy is transferred between them.",
   learningOutcomes:["Name the eight energy stores","Describe energy transfers","Draw energy transfer diagrams"],
   topics:["Eight energy stores","Transfer pathways","Energy diagrams"], prerequisites:[]},
  {id:"s9i-11-2", name:"Calculating KE & GPE", emoji:"📐", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-11", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Use the formulas for kinetic energy and gravitational potential energy.",
   learningOutcomes:["Use KE = ½mv²","Use GPE = mgh","Rearrange and substitute values"],
   topics:["Kinetic energy","Gravitational PE","Rearranging formulas"], prerequisites:["s9i-11-1"]},
  {id:"s9i-11-3", name:"Conservation & Efficiency", emoji:"♻️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-11", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Apply conservation of energy and calculate efficiency.",
   learningOutcomes:["State the conservation of energy principle","Calculate efficiency","Interpret Sankey diagrams"],
   topics:["Conservation of energy","Efficiency","Sankey diagrams"], prerequisites:["s9i-11-2"]}
);

// Topic 12: Forces & Motion
CURRICULUM.push(
  {id:"s9i-12-1", name:"Speed & Distance–Time Graphs", emoji:"🏎️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-12", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Calculate speed and interpret distance–time graphs.",
   learningOutcomes:["Use speed = distance ÷ time","Read and interpret distance–time graphs","Identify stationary and moving sections"],
   topics:["Speed formula","Distance–time graphs","Interpreting graphs"], prerequisites:[]},
  {id:"s9i-12-2", name:"Resultant Forces", emoji:"⬆️", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-12", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Calculate the resultant of forces acting on an object.",
   learningOutcomes:["Add forces in the same direction","Subtract forces in opposite directions","Predict the effect of the resultant force"],
   topics:["Forces in one direction","Balanced & unbalanced","Effect on motion"], prerequisites:["s9i-12-1"]},
  {id:"s9i-12-3", name:"Acceleration & Newton's First Law", emoji:"🚀", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-12", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Define acceleration, use a = F/m, and state Newton's first law.",
   learningOutcomes:["Define acceleration","Use F = ma","State Newton's first law"],
   topics:["Acceleration","F = ma","Newton's first law"], prerequisites:["s9i-12-2"]}
);

// Topic 13: Waves & the EM Spectrum
CURRICULUM.push(
  {id:"s9i-13-1", name:"Wave Properties", emoji:"🌊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-13", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Describe transverse and longitudinal waves and use the wave equation.",
   learningOutcomes:["Distinguish transverse and longitudinal waves","Label amplitude, wavelength, frequency","Use v = f × λ"],
   topics:["Wave types","Wave properties","Wave equation"], prerequisites:[]},
  {id:"s9i-13-2", name:"The Electromagnetic Spectrum", emoji:"🌈", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-13", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Order the EM spectrum, give uses and dangers of each type.",
   learningOutcomes:["Order the EM spectrum by wavelength/frequency","Give uses and dangers of each type","Explain that all EM waves travel at the speed of light"],
   topics:["The EM spectrum","Uses & dangers","Speed of light"], prerequisites:["s9i-13-1"]},
  {id:"s9i-13-3", name:"Reflection, Refraction & Sound", emoji:"🔊", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-13", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain reflection, refraction and sound as a longitudinal wave.",
   learningOutcomes:["State the law of reflection","Explain refraction as a change of speed","Describe sound as a longitudinal wave"],
   topics:["Reflection","Refraction","Sound waves"], prerequisites:["s9i-13-1"]}
);

// Topic 14: Electricity: Circuits & Charge
CURRICULUM.push(
  {id:"s9i-14-1", name:"Current, Voltage & Resistance", emoji:"💡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-14", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Define current, voltage and resistance and use V = IR.",
   learningOutcomes:["Define current as flow of charge","Define voltage as energy per unit charge","Use V = IR"],
   topics:["Current","Voltage","Resistance & Ohm's law"], prerequisites:[]},
  {id:"s9i-14-2", name:"Series & Parallel Circuits", emoji:"🔌", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-14", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Describe how current and voltage behave in series and parallel circuits.",
   learningOutcomes:["State the current and voltage rules for series circuits","State the rules for parallel circuits","Calculate total resistance in series"],
   topics:["Series rules","Parallel rules","Total resistance"], prerequisites:["s9i-14-1"]},
  {id:"s9i-14-3", name:"Charge & Energy in Circuits", emoji:"⚡", subject:"Science", subjectId:"science", color:"#10b981",
   topicId:"s9t-14", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Use Q = It and E = QV to calculate charge and energy transferred.",
   learningOutcomes:["Use Q = It","Use E = QV","Explain energy transfer in a circuit"],
   topics:["Charge = current × time","Energy = charge × voltage","Energy in components"], prerequisites:["s9i-14-1"]}
);
