// science-data-y8.js — Year 8 Science: island definitions

// ── Biology ────────────────────────────────────────────────────────────

CURRICULUM.push(
{id:"s8-01",subject:"Science",subjectId:"science",name:"Nutrition & Digestion",emoji:"🍎",
 yearGroup:"Year 8",difficulty:1,estimatedHours:5,color:"#185fa5",
 description:"Explore the nutrients your body needs, what makes a balanced diet, and how the digestive system breaks food down so it can be absorbed and used.",
 learningOutcomes:[
   "Identify the main nutrient groups and explain their roles in the body",
   "Describe the structure and function of the human digestive system",
   "Explain how enzymes speed up digestion and where they act",
   "Evaluate whether a diet is balanced and suggest improvements"],
 prerequisites:[],
 topics:["Nutrient groups and their functions","Balanced diets and energy requirements","Structure of the digestive system","The role of enzymes in digestion","Absorption in the small intestine","Investigating food tests (starch, protein, lipids, sugars)"]}
);

CURRICULUM.push(
{id:"s8-02",subject:"Science",subjectId:"science",name:"Breathing & Gas Exchange",emoji:"🫁",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Understand how the respiratory system works, how gas exchange takes place in the lungs, and the effects of lifestyle choices on breathing.",
 learningOutcomes:[
   "Describe the structure of the human respiratory system",
   "Explain the mechanism of breathing (ventilation)",
   "Explain how gas exchange occurs in the alveoli",
   "Evaluate the effects of smoking and exercise on the respiratory system"],
 prerequisites:["s8-01"],
 topics:["Structure of the respiratory system","The mechanism of ventilation","Gas exchange in the alveoli","Adaptations of the lungs for gas exchange","Effects of smoking on the lungs","Measuring lung volume and breathing rate"]}
);

CURRICULUM.push(
{id:"s8-03",subject:"Science",subjectId:"science",name:"Photosynthesis",emoji:"🌿",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Learn how plants make their own food through photosynthesis, investigate the factors that affect the rate, and understand why photosynthesis matters for life on Earth.",
 learningOutcomes:[
   "State the word equation for photosynthesis and identify reactants and products",
   "Describe the structure of a leaf and explain how it is adapted for photosynthesis",
   "Investigate and explain how light, carbon dioxide, and temperature affect the rate of photosynthesis"],
 prerequisites:[],
 topics:["The photosynthesis equation","Leaf structure and adaptations","The role of chlorophyll and chloroplasts","Factors affecting the rate of photosynthesis","Investigating photosynthesis practically","Why photosynthesis is important for ecosystems"]}
);

CURRICULUM.push(
{id:"s8-04",subject:"Science",subjectId:"science",name:"Health & Disease",emoji:"🏥",
 yearGroup:"Year 8",difficulty:2,estimatedHours:6,color:"#185fa5",
 description:"Discover the difference between communicable and non-communicable diseases, how pathogens spread, and how the body defends itself through the immune system.",
 learningOutcomes:[
   "Distinguish between communicable and non-communicable diseases",
   "Describe the main types of pathogen and how they spread",
   "Explain how the immune system responds to infection",
   "Evaluate the role of vaccines and antibiotics in fighting disease"],
 prerequisites:["s8-01"],
 topics:["Communicable vs non-communicable diseases","Types of pathogens: bacteria, viruses, fungi, protists","How pathogens are transmitted","The body's defence systems","The immune response and white blood cells","Vaccines and herd immunity","Antibiotics and antibiotic resistance"]}
);

CURRICULUM.push(
{id:"s8-05",subject:"Science",subjectId:"science",name:"Ecology & Biodiversity",emoji:"🌍",
 yearGroup:"Year 8",difficulty:2,estimatedHours:6,color:"#185fa5",
 description:"Study ecosystems, how organisms depend on each other, and how human activity affects biodiversity and the environment.",
 learningOutcomes:[
   "Describe the components of an ecosystem and how organisms interact",
   "Use sampling techniques to estimate population size",
   "Construct and interpret food webs to show interdependence",
   "Evaluate the impact of human activities on biodiversity"],
 prerequisites:["s8-03"],
 topics:["Ecosystems, habitats, and communities","Sampling techniques (quadrats, transects)","Food chains and food webs","Interdependence and competition","Adaptations to the environment","Human impacts on biodiversity","Conservation strategies"]}
);

// ── Chemistry ──────────────────────────────────────────────────────────

CURRICULUM.push(
{id:"s8-06",subject:"Science",subjectId:"science",name:"The Periodic Table",emoji:"⚗️",
 yearGroup:"Year 8",difficulty:1,estimatedHours:5,color:"#185fa5",
 description:"Explore how elements are organised in the periodic table, understand the difference between metals and non-metals, and study the properties of key groups.",
 learningOutcomes:[
   "Explain how elements are arranged in the periodic table by atomic number",
   "Distinguish between metals and non-metals using their properties",
   "Describe the characteristic properties of group 1, group 7, and the noble gases"],
 prerequisites:[],
 topics:["Atoms, elements, and compounds recap","Groups and periods in the periodic table","Properties of metals and non-metals","Group 1 — alkali metals","Group 7 — halogens","Group 0 — noble gases","Predicting properties from position in the table"]}
);

CURRICULUM.push(
{id:"s8-07",subject:"Science",subjectId:"science",name:"Chemical Reactions",emoji:"🧪",
 yearGroup:"Year 8",difficulty:2,estimatedHours:6,color:"#185fa5",
 description:"Investigate different types of chemical reaction, learn to write word equations, and understand the law of conservation of mass.",
 learningOutcomes:[
   "Identify and describe combustion, oxidation, neutralisation, and thermal decomposition reactions",
   "Write word equations for a range of chemical reactions",
   "Explain the law of conservation of mass and apply it to reactions",
   "Recognise the signs that a chemical reaction has taken place"],
 prerequisites:["s8-06"],
 topics:["Signs of a chemical reaction","Combustion reactions","Oxidation reactions","Thermal decomposition","Neutralisation reactions","Writing word equations","Conservation of mass","Exothermic and endothermic reactions"]}
);

CURRICULUM.push(
{id:"s8-08",subject:"Science",subjectId:"science",name:"Acids, Alkalis & Neutralisation",emoji:"🧫",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Understand the pH scale, use indicators to classify substances, and explore neutralisation reactions and their everyday applications.",
 learningOutcomes:[
   "Use the pH scale and indicators to classify substances as acidic, alkaline, or neutral",
   "Describe what happens during a neutralisation reaction",
   "Write word equations for neutralisation reactions",
   "Give practical applications of neutralisation in everyday life"],
 prerequisites:["s8-07"],
 topics:["Acids, alkalis, and neutral substances","The pH scale","Using indicators (litmus, universal indicator)","Neutralisation reactions","Acid + alkali → salt + water","Acid + metal → salt + hydrogen","Practical applications of neutralisation"]}
);

CURRICULUM.push(
{id:"s8-09",subject:"Science",subjectId:"science",name:"Metals & Reactivity",emoji:"⚙️",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Order metals by reactivity, investigate displacement reactions, and understand how metals are extracted from ores and used in everyday life.",
 learningOutcomes:[
   "Place metals in order of reactivity using experimental evidence",
   "Predict and explain displacement reactions",
   "Explain how the reactivity series relates to metal extraction methods"],
 prerequisites:["s8-07","s8-08"],
 topics:["Properties and uses of metals","The reactivity series","Reactions of metals with water and acids","Displacement reactions","Extracting metals from ores","Recycling metals and sustainability"]}
);

CURRICULUM.push(
{id:"s8-10",subject:"Science",subjectId:"science",name:"Materials & Earth Resources",emoji:"🪨",
 yearGroup:"Year 8",difficulty:1,estimatedHours:4,color:"#185fa5",
 description:"Compare the properties of ceramics, polymers, and composites, and consider how we use and manage Earth's finite and renewable resources.",
 learningOutcomes:[
   "Compare the properties and uses of ceramics, polymers, and composites",
   "Distinguish between finite and renewable resources",
   "Evaluate the importance of recycling and sustainable resource management"],
 prerequisites:["s8-06"],
 topics:["Ceramics and their properties","Polymers and plastics","Composite materials","Finite vs renewable resources","Recycling and reuse","Environmental impact of material choices"]}
);

// ── Physics ────────────────────────────────────────────────────────────

CURRICULUM.push(
{id:"s8-11",subject:"Science",subjectId:"science",name:"Energy Transfers & Resources",emoji:"🔋",
 yearGroup:"Year 8",difficulty:1,estimatedHours:5,color:"#185fa5",
 description:"Explore how energy is stored and transferred, understand the principle of conservation of energy, and compare renewable and non-renewable energy resources.",
 learningOutcomes:[
   "Identify energy stores and describe energy transfer pathways",
   "Apply the principle of conservation of energy",
   "Calculate efficiency and explain how to reduce wasted energy",
   "Compare renewable and non-renewable energy resources"],
 prerequisites:[],
 topics:["Energy stores (kinetic, gravitational, thermal, chemical, etc.)","Energy transfer pathways (heating, radiation, mechanically, electrically)","Conservation of energy","Efficiency and reducing energy waste","Renewable energy resources","Non-renewable energy resources","Comparing energy resources"]}
);

CURRICULUM.push(
{id:"s8-12",subject:"Science",subjectId:"science",name:"Electricity & Circuits",emoji:"🔌",
 yearGroup:"Year 8",difficulty:2,estimatedHours:6,color:"#185fa5",
 description:"Build and analyse series and parallel circuits, measure current, voltage, and resistance, and perform simple circuit calculations.",
 learningOutcomes:[
   "Draw and interpret circuit diagrams using standard symbols",
   "Describe the difference between series and parallel circuits",
   "Explain the relationship between current, voltage, and resistance",
   "Carry out simple calculations using V = I × R"],
 prerequisites:["s8-11"],
 topics:["Circuit symbols and diagrams","Current in series and parallel circuits","Voltage in series and parallel circuits","Resistance and its effects","Calculating with V = I × R","Practical circuit investigations","Static electricity basics"]}
);

CURRICULUM.push(
{id:"s8-13",subject:"Science",subjectId:"science",name:"Magnetism & Electromagnetism",emoji:"🧲",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Investigate magnetic fields and poles, discover how electromagnets work, and explore their applications in motors and everyday devices.",
 learningOutcomes:[
   "Describe the properties of magnets and magnetic fields",
   "Explain how an electromagnet works and what affects its strength",
   "Describe how electromagnets are used in motors and other devices"],
 prerequisites:["s8-12"],
 topics:["Magnetic poles and magnetic materials","Plotting magnetic fields","The Earth's magnetic field","Electromagnets and how they work","Factors affecting electromagnet strength","Electric motors","Applications of electromagnetism"]}
);

CURRICULUM.push(
{id:"s8-14",subject:"Science",subjectId:"science",name:"Forces & Motion",emoji:"🚀",
 yearGroup:"Year 8",difficulty:2,estimatedHours:6,color:"#185fa5",
 description:"Understand speed, acceleration, and Newton's laws of motion, and apply the concepts of resultant forces and pressure to real-world situations.",
 learningOutcomes:[
   "Calculate speed using the equation speed = distance ÷ time",
   "Interpret distance–time graphs to describe motion",
   "Describe Newton's three laws of motion and apply them to everyday examples",
   "Calculate pressure and explain its effects"],
 prerequisites:["s8-11"],
 topics:["Speed, distance, and time calculations","Distance–time graphs","Acceleration","Newton's first law — balanced forces","Newton's second law — F = m × a","Newton's third law — action and reaction","Resultant forces","Pressure in solids and fluids"]}
);

CURRICULUM.push(
{id:"s8-15",subject:"Science",subjectId:"science",name:"Waves & Sound",emoji:"📡",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Learn about wave properties, investigate how sound travels, and get an overview of the electromagnetic spectrum.",
 learningOutcomes:[
   "Describe the key properties of waves (amplitude, wavelength, frequency)",
   "Explain how sound waves are produced, travel, and are detected",
   "Compare transverse and longitudinal waves",
   "Give an overview of the electromagnetic spectrum and its uses"],
 prerequisites:[],
 topics:["Transverse and longitudinal waves","Wave properties: amplitude, wavelength, frequency","The wave speed equation","How sound is produced and travels","Hearing and ultrasound","Introduction to the electromagnetic spectrum"]}
);

CURRICULUM.push(
{id:"s8-16",subject:"Science",subjectId:"science",name:"Light & Optics",emoji:"💡",
 yearGroup:"Year 8",difficulty:2,estimatedHours:5,color:"#185fa5",
 description:"Explore reflection and refraction of light, investigate lenses and colour, and understand how the human eye works.",
 learningOutcomes:[
   "Describe the law of reflection and draw ray diagrams",
   "Explain refraction and how lenses focus light",
   "Describe how the human eye forms images and corrects vision defects"],
 prerequisites:["s8-15"],
 topics:["Light as a wave","Reflection and the law of reflection","Refraction of light","Lenses: convex and concave","How the eye works","Colour and filters","Ray diagrams"]}
);

// ── Working Scientifically ─────────────────────────────────────────────

CURRICULUM.push(
{id:"s8-17",subject:"Science",subjectId:"science",name:"Scientific Investigation",emoji:"🔭",
 yearGroup:"Year 8",difficulty:1,estimatedHours:4,color:"#185fa5",
 description:"Develop the skills needed to plan, carry out, and evaluate scientific investigations, including handling data and drawing evidence-based conclusions.",
 learningOutcomes:[
   "Plan investigations by identifying variables and writing a method",
   "Collect, present, and analyse data using tables, charts, and graphs",
   "Draw evidence-based conclusions and evaluate the reliability of results",
   "Suggest improvements to experimental methods"],
 prerequisites:[],
 topics:["Asking scientific questions and forming hypotheses","Identifying variables (independent, dependent, control)","Planning fair tests and writing methods","Recording and presenting data","Analysing results and identifying patterns","Drawing conclusions from evidence","Evaluating experiments and suggesting improvements"]}
);
