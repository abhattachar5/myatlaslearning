// content/y11/geography/topics.js — Year 11 Geography: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA GCSE Geography 8035.
// Geography island accent colour #0d9488.

const GEOGRAPHY_TOPICS_Y11 = [
  {id:"g11t-01", name:"Climate Change & Sustainability", emoji:"🌍", hasContent:true,
   description:"Examine the causes, effects and responses to climate change and evaluate strategies for a sustainable future."},
  {id:"g11t-02", name:"Ecosystems Under Threat", emoji:"🌳", hasContent:true,
   description:"Investigate the causes and consequences of deforestation and desertification, and assess conservation strategies."},
  {id:"g11t-03", name:"Population & Migration", emoji:"👥", hasContent:true,
   description:"Analyse population structure using the DTM, and evaluate the causes and impacts of migration at national and global scales."},
  {id:"g11t-04", name:"Energy & Water Security", emoji:"💧", hasContent:true,
   description:"Assess global patterns of energy and water supply and demand, and evaluate management strategies for a secure future."},
  {id:"g11t-05", name:"Fieldwork Skills", emoji:"📋", hasContent:true,
   description:"Design fieldwork enquiries, select appropriate data collection methods, and present, analyse and evaluate findings."},
  {id:"g11t-06", name:"Exam Technique: 6 & 9-Mark Questions", emoji:"✍️", hasContent:true,
   description:"Master the command words and structures needed to write high-scoring extended answers in GCSE Geography."},
  {id:"g11t-07", name:"Revision & Case Studies", emoji:"📚", hasContent:true,
   description:"Consolidate case study knowledge, practise exam-style questions and develop timed answer strategies for the final examination."}
];

// ── Topic 1: Climate Change & Sustainability (3 islands) ────────────────────
CURRICULUM.push(
  {id:"g11i-01-1", name:"Causes of Climate Change", emoji:"🏭", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Distinguish between natural and human causes of climate change and explain the enhanced greenhouse effect.",
   learningOutcomes:["Explain natural causes including Milankovitch cycles, volcanic eruptions and solar output","Describe how burning fossil fuels, deforestation and agriculture enhance the greenhouse effect","Interpret ice-core and temperature data as evidence for human-driven warming"],
   topics:["Natural causes","Human causes","Enhanced greenhouse effect"], prerequisites:[]},
  {id:"g11i-01-2", name:"Effects of Climate Change", emoji:"🌊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-01", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Assess the environmental, social and economic effects of climate change at local and global scales.",
   learningOutcomes:["Describe environmental effects including sea-level rise, extreme weather and ecosystem disruption","Explain social effects such as displacement, health risks and food insecurity","Evaluate how climate change disproportionately affects LICs"],
   topics:["Environmental effects","Social and economic effects","Unequal impacts"], prerequisites:["g11i-01-1"]},
  {id:"g11i-01-3", name:"Responses & Sustainability", emoji:"♻️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-01", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Evaluate mitigation and adaptation strategies and assess the role of international agreements in promoting sustainability.",
   learningOutcomes:["Compare mitigation strategies including renewable energy, carbon capture and afforestation","Assess adaptation strategies such as flood defences and drought-resistant crops","Evaluate the effectiveness of the Paris Agreement and COP process"],
   topics:["Mitigation strategies","Adaptation strategies","International agreements"], prerequisites:["g11i-01-2"]}
);

// ── Topic 2: Ecosystems Under Threat (2 islands) ────────────────────────────
CURRICULUM.push(
  {id:"g11i-02-1", name:"Deforestation & Desertification", emoji:"🪓", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain the causes and consequences of tropical deforestation and hot desert desertification.",
   learningOutcomes:["Describe the causes of deforestation including logging, agriculture and mining","Explain the causes and consequences of desertification in the Sahel","Assess the environmental, social and economic impacts of ecosystem loss"],
   topics:["Causes of deforestation","Desertification in the Sahel","Impacts of ecosystem loss"], prerequisites:[]},
  {id:"g11i-02-2", name:"Conservation Strategies", emoji:"🛡️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-02", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Evaluate strategies for managing and conserving threatened ecosystems at local, national and international scales.",
   learningOutcomes:["Describe conservation approaches including national parks, CITES and debt-for-nature swaps","Evaluate sustainable forestry, selective logging and ecotourism","Assess the effectiveness of local community projects in combating desertification"],
   topics:["Protected areas and legislation","Sustainable management","Community-led conservation"], prerequisites:["g11i-02-1"]}
);

// ── Topic 3: Population & Migration (3 islands) ────────────────────────────
CURRICULUM.push(
  {id:"g11i-03-1", name:"Population Structure", emoji:"📊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Interpret population pyramids, understand dependency ratios and explain how population structure varies between countries.",
   learningOutcomes:["Interpret population pyramids for countries at different stages of development","Calculate and explain dependency ratios","Describe the causes and consequences of ageing and youthful populations"],
   topics:["Population pyramids","Dependency ratios","Ageing and youthful populations"], prerequisites:[]},
  {id:"g11i-03-2", name:"The Demographic Transition Model", emoji:"📈", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Describe the five stages of the Demographic Transition Model and link them to real-world countries.",
   learningOutcomes:["Describe birth rate, death rate and population change at each DTM stage","Explain the factors causing transitions between stages","Apply the DTM to named countries at different levels of development"],
   topics:["DTM stages","Factors driving transition","Applying the DTM"], prerequisites:["g11i-03-1"]},
  {id:"g11i-03-3", name:"Migration: Push & Pull", emoji:"✈️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-03", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain the causes and consequences of national and international migration using push and pull factors.",
   learningOutcomes:["Identify push and pull factors for voluntary and forced migration","Assess the social, economic and environmental impacts of migration on source and host countries","Evaluate government responses to migration including border controls and asylum policies"],
   topics:["Push and pull factors","Impacts of migration","Government responses"], prerequisites:["g11i-03-1"]}
);

// ── Topic 4: Energy & Water Security (2 islands) ────────────────────────────
CURRICULUM.push(
  {id:"g11i-04-1", name:"Energy & Water Supply and Demand", emoji:"⚡", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Explain global patterns of energy and water supply and demand and the factors causing insecurity.",
   learningOutcomes:["Describe global patterns of energy consumption and production","Explain factors affecting water supply and demand including climate, development and population","Assess the causes and consequences of energy and water insecurity"],
   topics:["Global energy patterns","Water supply and demand","Causes of insecurity"], prerequisites:[]},
  {id:"g11i-04-2", name:"Management Strategies", emoji:"🔋", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-04", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Evaluate strategies for increasing energy and water security including large-scale schemes and sustainable approaches.",
   learningOutcomes:["Compare renewable and non-renewable energy sources","Evaluate large-scale water transfer and desalination schemes","Assess the role of local and sustainable solutions in improving security"],
   topics:["Energy mix and renewables","Large-scale water schemes","Sustainable local solutions"], prerequisites:["g11i-04-1"]}
);

// ── Topic 5: Fieldwork Skills (2 islands) ────────────────────────────────────
CURRICULUM.push(
  {id:"g11i-05-1", name:"Enquiry Questions & Data Collection", emoji:"🔍", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Design fieldwork enquiry questions and select appropriate primary and secondary data collection methods.",
   learningOutcomes:["Formulate a clear enquiry question and testable hypothesis","Select and justify appropriate sampling strategies","Describe primary and secondary data collection methods and assess their reliability"],
   topics:["Enquiry design","Sampling strategies","Data collection methods"], prerequisites:[]},
  {id:"g11i-05-2", name:"Presentation, Analysis & Evaluation", emoji:"📊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-05", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Present fieldwork data using appropriate techniques, analyse patterns and evaluate the enquiry process.",
   learningOutcomes:["Select and construct appropriate data presentation techniques","Analyse data using statistical methods and identify patterns","Evaluate the reliability of conclusions and suggest improvements"],
   topics:["Data presentation","Statistical analysis","Evaluation and improvement"], prerequisites:["g11i-05-1"]}
);

// ── Topic 6: Exam Technique: 6 & 9-Mark Questions (3 islands) ──────────────
CURRICULUM.push(
  {id:"g11i-06-1", name:"Describe & Explain Questions", emoji:"📝", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-06", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Master the structure and technique for 6-mark describe and explain questions in GCSE Geography.",
   learningOutcomes:["Distinguish between the command words describe and explain","Structure a 6-mark response with clear geographical reasoning","Use evidence, data and examples to support each point"],
   topics:["Describe vs explain","6-mark structure","Using evidence effectively"], prerequisites:[]},
  {id:"g11i-06-2", name:"Evaluate & Assess Questions", emoji:"⚖️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-06", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Develop the skills to write balanced, evaluative 9-mark responses that reach a supported judgement.",
   learningOutcomes:["Explain what evaluate and assess require in an exam answer","Present arguments for and against a statement with supporting evidence","Reach a clear, justified conclusion that directly addresses the question"],
   topics:["Evaluate and assess command words","Balanced argument structure","Writing a conclusion"], prerequisites:["g11i-06-1"]},
  {id:"g11i-06-3", name:"'To What Extent' & SPaG", emoji:"🎯", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-06", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Tackle 'to what extent' questions and secure the additional SPaG marks available on 9-mark responses.",
   learningOutcomes:["Explain the demands of 'to what extent' questions and plan a structured response","Use geographical terminology accurately throughout extended writing","Apply spelling, punctuation and grammar strategies to secure SPaG marks"],
   topics:["To what extent structure","Geographical terminology","SPaG strategies"], prerequisites:["g11i-06-2"]}
);

// ── Topic 7: Revision & Case Studies (3 islands) ────────────────────────────
CURRICULUM.push(
  {id:"g11i-07-1", name:"Case Study Recall", emoji:"🗂️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-07", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Consolidate knowledge of required case studies and practise recalling key facts, figures and place-specific detail.",
   learningOutcomes:["Recall key facts and statistics for each required AQA case study","Organise case study knowledge by theme: causes, effects and responses","Apply case study detail accurately under timed conditions"],
   topics:["Physical geography case studies","Human geography case studies","Organising case study notes"], prerequisites:[]},
  {id:"g11i-07-2", name:"Exam Practice", emoji:"📝", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-07", yearGroup:"Year 11", difficulty:2, estimatedHours:2,
   description:"Practise answering exam-style questions across all three AQA papers, focusing on common question types.",
   learningOutcomes:["Identify the requirements of each AQA paper and its question types","Practise 1, 2, 4, 6 and 9-mark questions with appropriate depth","Use mark schemes to self-assess and identify areas for improvement"],
   topics:["Paper 1 practice","Paper 2 practice","Paper 3 practice"], prerequisites:["g11i-07-1"]},
  {id:"g11i-07-3", name:"Timed Answers & Strategy", emoji:"⏱️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g11t-07", yearGroup:"Year 11", difficulty:3, estimatedHours:2,
   description:"Develop exam timing strategies and practise writing high-quality answers under timed conditions.",
   learningOutcomes:["Allocate time effectively across each paper based on marks available","Write concise, focused answers that address the command word","Review and refine answers to maximise marks within the time limit"],
   topics:["Time allocation","Concise writing","Review strategies"], prerequisites:["g11i-07-2"]}
);
