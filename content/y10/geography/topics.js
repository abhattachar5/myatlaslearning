// content/y10/geography/topics.js — Year 10 Geography: topic tiles + island definitions.
// Authored by the atlas-content skill. AQA GCSE Geography 8035.
// Geography island accent colour #0d9488.

const GEOGRAPHY_TOPICS_Y10 = [
  {id:"g10t-01", name:"The Challenge of Natural Hazards", emoji:"🌋", hasContent:true,
   description:"Explore tectonic and weather hazards, their causes and effects, and the evidence for and responses to climate change."},
  {id:"g10t-02", name:"The Living World", emoji:"🌿", hasContent:true,
   description:"Study ecosystems at small and global scales, focusing on tropical rainforests and hot deserts as contrasting environments."},
  {id:"g10t-03", name:"Physical Landscapes: Rivers", emoji:"🌊", hasContent:true,
   description:"Investigate river processes, the landforms they create and the causes, effects and management of flooding."},
  {id:"g10t-04", name:"Physical Landscapes: Coasts", emoji:"🏖️", hasContent:true,
   description:"Examine how coastal processes shape the landscape and evaluate strategies for managing coastal retreat."},
  {id:"g10t-05", name:"Urban Issues & Challenges", emoji:"🏙️", hasContent:true,
   description:"Analyse global urbanisation trends, study a major UK city and evaluate approaches to sustainable urban living."},
  {id:"g10t-06", name:"The Changing Economic World", emoji:"🌐", hasContent:true,
   description:"Explain the development gap, explore Nigeria as an NEE case study and assess changes in the UK economy."},
  {id:"g10t-07", name:"Resource Management", emoji:"♻️", hasContent:true,
   description:"Assess the global challenges of food, water and energy supply and evaluate strategies for sustainable management."},
  {id:"g10t-08", name:"Geographical Skills & Fieldwork", emoji:"🧭", hasContent:true,
   description:"Master OS map skills, statistical techniques and fieldwork methodology for the GCSE examination."}
];

// ── Topic 1: The Challenge of Natural Hazards (3 islands) ────────────────────
CURRICULUM.push(
  {id:"g10i-01-1", name:"Tectonic Hazards", emoji:"🌍", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the global distribution of earthquakes and volcanoes and compare their effects and responses in contrasting countries.",
   learningOutcomes:["Explain plate tectonic theory and the global distribution of hazards","Compare the effects and responses of tectonic events in HICs and LICs","Evaluate strategies for reducing tectonic hazard risk"],
   topics:["Plate tectonic theory","Earthquake and volcano effects","Managing tectonic hazards"], prerequisites:[]},
  {id:"g10i-01-2", name:"Weather Hazards", emoji:"🌀", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Understand global atmospheric circulation, the formation and effects of tropical storms, and UK extreme weather.",
   learningOutcomes:["Describe global atmospheric circulation and its link to weather hazards","Explain the formation, structure and effects of tropical storms","Assess the impacts of extreme weather events in the UK"],
   topics:["Global atmospheric circulation","Tropical storms","UK extreme weather"], prerequisites:["g10i-01-1"]},
  {id:"g10i-01-3", name:"Climate Change", emoji:"🌡️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate the evidence for climate change, distinguish natural and human causes, and assess mitigation and adaptation strategies.",
   learningOutcomes:["Describe evidence for climate change from the Quaternary period to the present","Explain natural and human causes of climate change","Evaluate mitigation and adaptation strategies"],
   topics:["Evidence for climate change","Causes of climate change","Managing climate change"], prerequisites:["g10i-01-2"]},
  {id:"g10i-01-4", name:"Tropical Storms", emoji:"🌀", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the distribution, formation, structure and effects of tropical storms and the responses to them.",
   learningOutcomes:["Explain the conditions and sequence of tropical storm formation","Describe the structure and the effect of climate change","Compare primary/secondary effects and immediate/long-term responses"],
   topics:["Formation & structure","Effects","Responses"], prerequisites:["g10i-01-2"]},
  {id:"g10i-01-5", name:"Reducing Tectonic Hazard Risk", emoji:"🏚️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain why people live in tectonically active areas and how risk is reduced through the three Ps.",
   learningOutcomes:["Explain why people live in hazardous areas","Describe monitoring, prediction and protection","Explain planning, hazard mapping and land-use zoning"],
   topics:["Living with hazards","Monitoring & protection","Planning"], prerequisites:["g10i-01-1"]},
  {id:"g10i-01-6", name:"UK Extreme Weather", emoji:"🌧️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-01", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Examine types of UK extreme weather, a named case study, and evidence that weather is becoming more extreme.",
   learningOutcomes:["Describe types of UK extreme weather","Explain the causes, effects and responses of a UK weather event","Assess evidence weather is becoming more extreme"],
   topics:["Types of extreme weather","UK case study","Increasing extremes"], prerequisites:["g10i-01-2"]}
);

// ── Topic 2: The Living World (3 islands) ────────────────────────────────────
CURRICULUM.push(
  {id:"g10i-02-1", name:"Ecosystems", emoji:"🔄", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-02", yearGroup:"Year 10", difficulty:1, estimatedHours:2,
   description:"Understand ecosystem components, food chains and the balance between biotic and abiotic factors at a small scale.",
   learningOutcomes:["Define and identify ecosystem components","Explain food chains, food webs and nutrient cycling","Describe the characteristics of a small-scale UK ecosystem"],
   topics:["Ecosystem components","Nutrient cycling","Small-scale UK ecosystems"], prerequisites:[]},
  {id:"g10i-02-2", name:"Tropical Rainforests", emoji:"🌴", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explore rainforest climate, biodiversity, adaptations and the causes, impacts and management of deforestation.",
   learningOutcomes:["Describe the climate, soils and structure of tropical rainforests","Explain plant and animal adaptations","Evaluate causes of deforestation and sustainable management strategies"],
   topics:["Rainforest characteristics","Adaptations","Deforestation and management"], prerequisites:["g10i-02-1"]},
  {id:"g10i-02-3", name:"Hot Deserts", emoji:"🏜️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Study hot desert environments, adaptations, opportunities and challenges, and the causes of desertification.",
   learningOutcomes:["Describe the climate, soils and biodiversity of hot deserts","Explain plant, animal and human adaptations","Evaluate the causes and management of desertification"],
   topics:["Desert characteristics","Adaptations","Desertification"], prerequisites:["g10i-02-1"]},
  {id:"g10i-02-4", name:"Deforestation: Causes, Impacts & Management", emoji:"🪓", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Use an Amazon case study to explain the causes and impacts of deforestation and evaluate sustainable management.",
   learningOutcomes:["Explain the causes of deforestation in a tropical rainforest","Assess the environmental and economic impacts","Evaluate sustainable management strategies"],
   topics:["Causes","Impacts","Sustainable management"], prerequisites:["g10i-02-2"]},
  {id:"g10i-02-5", name:"Hot Deserts: Opportunities & Challenges", emoji:"🐪", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-02", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate the development opportunities and challenges of hot deserts and the causes and solutions of desertification.",
   learningOutcomes:["Evaluate opportunities for development in hot deserts","Explain the challenges of development","Explain the causes and solutions of desertification"],
   topics:["Opportunities","Challenges","Desertification"], prerequisites:["g10i-02-3"]}
);

// ── Topic 3: Physical Landscapes: Rivers (3 islands) ─────────────────────────
CURRICULUM.push(
  {id:"g10i-03-1", name:"River Processes", emoji:"💧", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the processes of erosion, transportation and deposition that shape river valleys.",
   learningOutcomes:["Describe the four processes of river erosion","Explain the four methods of river transportation","Describe why and where deposition occurs"],
   topics:["Erosion processes","Transportation methods","Deposition"], prerequisites:[]},
  {id:"g10i-03-2", name:"River Landforms", emoji:"🏞️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the formation of distinctive landforms along the upper, middle and lower course of a river.",
   learningOutcomes:["Explain the formation of V-shaped valleys, interlocking spurs and waterfalls","Explain the formation of meanders and oxbow lakes","Describe floodplains and levees in the lower course"],
   topics:["Upper course landforms","Middle course landforms","Lower course landforms"], prerequisites:["g10i-03-1"]},
  {id:"g10i-03-3", name:"Flooding & Management", emoji:"🌊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Investigate the causes and effects of flooding and evaluate hard and soft engineering management strategies.",
   learningOutcomes:["Explain physical and human causes of flooding using hydrographs","Describe the effects of a UK flood event case study","Evaluate hard and soft engineering flood management strategies"],
   topics:["Causes of flooding","Flood case study","Flood management"], prerequisites:["g10i-03-2"]},
  {id:"g10i-03-4", name:"Erosional River Landforms", emoji:"⛰️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain how erosion and transport processes form interlocking spurs, V-shaped valleys, waterfalls and gorges.",
   learningOutcomes:["Describe the erosion and transport processes","Explain the formation of V-shaped valleys and interlocking spurs","Explain the formation of waterfalls and gorges"],
   topics:["Processes","V-valleys & spurs","Waterfalls & gorges"], prerequisites:["g10i-03-1"]},
  {id:"g10i-03-5", name:"Depositional River Landforms", emoji:"🏞️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-03", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the formation of meanders, oxbow lakes, floodplains, levées and estuaries in the lower course.",
   learningOutcomes:["Explain why deposition occurs in the lower course","Explain the formation of meanders and oxbow lakes","Describe floodplains, levées and estuaries"],
   topics:["Meanders & oxbows","Floodplains & levées","Estuaries"], prerequisites:["g10i-03-1"]}
);

// ── Topic 4: Physical Landscapes: Coasts (3 islands) ─────────────────────────
CURRICULUM.push(
  {id:"g10i-04-1", name:"Coastal Processes", emoji:"🌊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the processes of erosion, weathering, mass movement and deposition that shape the coastline.",
   learningOutcomes:["Describe the types of waves and their characteristics","Explain the four processes of coastal erosion","Describe weathering and mass movement at the coast"],
   topics:["Wave types","Coastal erosion","Weathering and mass movement"], prerequisites:[]},
  {id:"g10i-04-2", name:"Coastal Landforms", emoji:"🪨", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the formation of erosional and depositional landforms at the coast.",
   learningOutcomes:["Explain the formation of headlands, bays, cliffs and wave-cut platforms","Explain the formation of caves, arches, stacks and stumps","Describe depositional landforms including beaches, spits and bars"],
   topics:["Erosional landforms","Headland erosion sequence","Depositional landforms"], prerequisites:["g10i-04-1"]},
  {id:"g10i-04-3", name:"Coastal Management", emoji:"🛡️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate the advantages and disadvantages of hard and soft engineering coastal management strategies.",
   learningOutcomes:["Describe hard engineering strategies and assess their effectiveness","Describe soft engineering strategies and assess their effectiveness","Evaluate coastal management using a named case study"],
   topics:["Hard engineering","Soft engineering","Coastal management case study"], prerequisites:["g10i-04-2"]},
  {id:"g10i-04-4", name:"Erosional Coastal Landforms", emoji:"🪨", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the formation of headlands and bays, the cave-arch-stack-stump sequence and wave-cut platforms.",
   learningOutcomes:["Explain headlands and bays through differential erosion","Explain the cracks to stack/stump sequence","Explain the formation of wave-cut platforms"],
   topics:["Headlands & bays","Caves to stumps","Wave-cut platforms"], prerequisites:["g10i-04-1"]},
  {id:"g10i-04-5", name:"Depositional Coastal Landforms", emoji:"🏖️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-04", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain longshore drift and the formation of beaches, spits, bars and sand dunes.",
   learningOutcomes:["Explain longshore drift","Explain the formation of beaches, spits and bars","Describe sand dune succession"],
   topics:["Longshore drift","Beaches, spits & bars","Sand dunes"], prerequisites:["g10i-04-1"]}
);

// ── Topic 5: Urban Issues & Challenges (3 islands) ───────────────────────────
CURRICULUM.push(
  {id:"g10i-05-1", name:"Urbanisation", emoji:"🏗️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain the global pattern of urbanisation and the factors driving urban growth in LICs and NEEs.",
   learningOutcomes:["Define urbanisation and describe global trends","Explain push and pull factors of rural-urban migration","Describe the emergence of megacities and their distribution"],
   topics:["Global urbanisation","Push and pull factors","Megacities"], prerequisites:[]},
  {id:"g10i-05-2", name:"UK City Study", emoji:"🏘️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Study a major UK city to examine social, economic and environmental opportunities and challenges.",
   learningOutcomes:["Describe the location and importance of a named UK city","Explain social, economic and environmental challenges","Evaluate regeneration and urban planning strategies"],
   topics:["City context and importance","Urban challenges","Regeneration strategies"], prerequisites:["g10i-05-1"]},
  {id:"g10i-05-3", name:"Sustainable Cities", emoji:"🌱", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate features of sustainable urban living and assess strategies for improving urban sustainability.",
   learningOutcomes:["Define sustainable urban living","Describe strategies for water, energy, waste and transport sustainability","Evaluate a case study of sustainable urban planning"],
   topics:["Sustainable urban living","Green strategies","Sustainable city case study"], prerequisites:["g10i-05-2"]},
  {id:"g10i-05-4", name:"LIC/NEE City Case Study", emoji:"🌆", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-05", yearGroup:"Year 10", difficulty:2, estimatedHours:3,
   description:"Study a major city in an LIC/NEE: its growth, the opportunities it offers and the challenges it faces.",
   learningOutcomes:["Explain the causes of rapid growth in an LIC/NEE city","Describe the social and economic opportunities","Evaluate the challenges and urban planning responses"],
   topics:["Growth & migration","Opportunities","Challenges & planning"], prerequisites:["g10i-05-1"]}
);

// ── Topic 6: The Changing Economic World (3 islands) ─────────────────────────
CURRICULUM.push(
  {id:"g10i-06-1", name:"The Development Gap", emoji:"📊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Measure and explain global variations in development and evaluate strategies for reducing the development gap.",
   learningOutcomes:["Use economic and social indicators to classify countries","Explain physical, economic and historical causes of uneven development","Evaluate strategies for reducing the development gap"],
   topics:["Development indicators","Causes of uneven development","Reducing the gap"], prerequisites:[]},
  {id:"g10i-06-2", name:"Nigeria: an NEE Case Study", emoji:"🇳🇬", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explore Nigeria's economic development, the role of TNCs and the social and environmental impacts of rapid growth.",
   learningOutcomes:["Describe Nigeria's location, importance and political context","Explain the role of industry, TNCs and trade in Nigeria's development","Evaluate the environmental and social impacts of economic growth"],
   topics:["Nigeria context","Economic growth and TNCs","Impacts of development"], prerequisites:["g10i-06-1"]},
  {id:"g10i-06-3", name:"The UK Economy", emoji:"🇬🇧", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-06", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Assess changes in the UK economy, including deindustrialisation, the north-south divide and links to the wider world.",
   learningOutcomes:["Describe the causes and effects of deindustrialisation in the UK","Explain the growth of the service and quaternary sectors","Evaluate the economic and social impacts of the north-south divide"],
   topics:["Deindustrialisation","Post-industrial economy","North-south divide"], prerequisites:["g10i-06-1"]}
);

// ── Topic 7: Resource Management (2 islands) ─────────────────────────────────
CURRICULUM.push(
  {id:"g10i-07-1", name:"Food, Water & Energy Overview", emoji:"🍽️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explore the global distribution, consumption and management of food, water and energy resources.",
   learningOutcomes:["Describe the global distribution of food, water and energy resources","Explain the factors affecting supply and demand","Assess the significance of resource insecurity"],
   topics:["Resource distribution","Supply and demand","Resource insecurity"], prerequisites:[]},
  {id:"g10i-07-2", name:"Sustainable Resource Management", emoji:"♻️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate strategies for managing food, water and energy sustainably at local and global scales.",
   learningOutcomes:["Evaluate large-scale and local food management strategies","Assess approaches to increasing sustainable water supply","Evaluate the role of renewable energy in meeting demand"],
   topics:["Food management","Water management","Energy management"], prerequisites:["g10i-07-1"]},
  {id:"g10i-07-3", name:"Food: Demand, Supply & Insecurity", emoji:"🌾", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Explain rising food demand, areas of surplus and deficit, factors affecting supply and the impacts of food insecurity.",
   learningOutcomes:["Explain why global food demand is rising","Describe areas of food surplus and deficit","Explain the factors affecting supply and impacts of insecurity"],
   topics:["Demand & supply","Surplus & deficit","Impacts of insecurity"], prerequisites:["g10i-07-1"]},
  {id:"g10i-07-4", name:"Increasing Food Supply", emoji:"🚜", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-07", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Evaluate strategies for increasing food supply and the idea of a sustainable food supply.",
   learningOutcomes:["Describe strategies to increase food supply","Evaluate large-scale vs appropriate technology approaches","Explain sustainable food supply with an example"],
   topics:["Increasing supply","Appropriate technology","Sustainable food"], prerequisites:["g10i-07-3"]}
);

// ── Topic 8: Geographical Skills & Fieldwork (2 islands) ─────────────────────
CURRICULUM.push(
  {id:"g10i-08-1", name:"OS Maps & Statistics", emoji:"🗺️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Apply Ordnance Survey map skills and use statistical techniques to analyse geographical data.",
   learningOutcomes:["Use grid references, scale, contour lines and cross-sections","Calculate and interpret mean, median, mode, range and interquartile range","Construct and interpret choropleth maps and proportional symbols"],
   topics:["OS map skills","Descriptive statistics","Graphical techniques"], prerequisites:[]},
  {id:"g10i-08-2", name:"Fieldwork Techniques", emoji:"📋", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Plan, conduct and evaluate geographical fieldwork enquiries using appropriate methods and data presentation.",
   learningOutcomes:["Design a fieldwork enquiry with a clear question and hypothesis","Select and justify appropriate data collection methods","Evaluate data presentation, analysis and conclusions"],
   topics:["Enquiry design","Data collection methods","Evaluation and conclusions"], prerequisites:["g10i-08-1"]},
  {id:"g10i-08-3", name:"Graphical & Numerical Skills", emoji:"📊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Select and construct appropriate graphs and maps, describe trends and apply numerical and statistical skills.",
   learningOutcomes:["Select and construct the right graph or map","Describe distributions, trends and anomalies","Apply percentages, ratios and measures of spread"],
   topics:["Graphs & maps","Describing data","Numerical skills"], prerequisites:["g10i-08-1"]},
  {id:"g10i-08-4", name:"Physical Fieldwork Enquiry", emoji:"🏞️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Work through a physical fieldwork enquiry from question and data collection to analysis, conclusion and evaluation.",
   learningOutcomes:["Form a question and hypothesis for a physical enquiry","Select primary data collection methods and sampling","Analyse, conclude and evaluate the enquiry"],
   topics:["Question & methods","Data collection","Analysis & evaluation"], prerequisites:["g10i-08-2"]},
  {id:"g10i-08-5", name:"Human Fieldwork Enquiry", emoji:"🏙️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g10t-08", yearGroup:"Year 10", difficulty:2, estimatedHours:2,
   description:"Work through a human fieldwork enquiry, selecting methods, sampling, presentation, analysis and evaluation.",
   learningOutcomes:["Form a hypothesis for a human enquiry","Select methods and sampling strategies","Present, analyse and evaluate the enquiry"],
   topics:["Question & methods","Sampling","Analysis & evaluation"], prerequisites:["g10i-08-2"]}
);
