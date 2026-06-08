// content/y9/geography/topics.js — Year 9 Geography: topic tiles + island definitions.
// Authored by the atlas-content skill. GCSE foundations (KS3-KS4 bridge).
// Geography island accent colour #0d9488.

const GEOGRAPHY_TOPICS_Y9 = [
  {id:"g9t-01", name:"Tectonic Hazards", emoji:"🌋", hasContent:true,
   description:"Understand plate boundaries, earthquakes, volcanoes and tsunami, and why some communities are more vulnerable than others."},
  {id:"g9t-02", name:"Weather & Climate", emoji:"🌦️", hasContent:true,
   description:"Explore the atmosphere, weather systems, UK weather patterns and global climate zones."},
  {id:"g9t-03", name:"Ecosystems & Biomes", emoji:"🌿", hasContent:true,
   description:"Study tropical rainforests and hot deserts as examples of global biomes, including food chains and nutrient cycling."},
  {id:"g9t-04", name:"Rivers & Flooding", emoji:"🌊", hasContent:true,
   description:"Follow the water cycle, investigate river processes and landforms, and evaluate flood management strategies."},
  {id:"g9t-05", name:"Coastal Landscapes", emoji:"🏖️", hasContent:true,
   description:"Examine how erosion and deposition shape coastlines and assess different coastal management approaches."},
  {id:"g9t-06", name:"Urbanisation", emoji:"🏙️", hasContent:true,
   description:"Investigate why cities grow, the challenges of rapid urbanisation and strategies for sustainable urban living."},
  {id:"g9t-07", name:"Development & Globalisation", emoji:"🌐", hasContent:true,
   description:"Measure and explain uneven development, explore the role of trade, TNCs and aid in shaping the global economy."},
  {id:"g9t-08", name:"Geographical Skills", emoji:"🧭", hasContent:true,
   description:"Build core skills in map reading, grid references, graphical techniques and fieldwork methods."}
];

// ── Topic 1: Tectonic Hazards (3 islands) ────────────────────────────────────
CURRICULUM.push(
  {id:"g9i-01-1", name:"Plate Boundaries & Tectonic Theory", emoji:"🌍", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-01", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Explain the theory of plate tectonics and describe the three types of plate boundary.",
   learningOutcomes:["Describe the structure of the Earth","Explain convection currents in the mantle","Compare constructive, destructive and conservative plate boundaries"],
   topics:["Earth's structure","Convection currents","Plate boundary types"], prerequisites:[]},
  {id:"g9i-01-2", name:"Earthquakes & Volcanoes", emoji:"🌋", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain the causes and effects of earthquakes and volcanic eruptions, comparing HIC and LIC responses.",
   learningOutcomes:["Explain earthquake and volcano formation at plate boundaries","Compare primary and secondary effects","Evaluate responses in HICs vs LICs"],
   topics:["Earthquake causes and effects","Volcano types and eruptions","Comparing responses"], prerequisites:["g9i-01-1"]},
  {id:"g9i-01-3", name:"Tsunami & Hazard Management", emoji:"🌊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-01", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Understand how tsunami form and evaluate strategies for reducing tectonic hazard risk.",
   learningOutcomes:["Describe how tsunami are generated","Explain monitoring and prediction methods","Evaluate preparedness strategies"],
   topics:["Tsunami formation","Early warning systems","Preparedness and planning"], prerequisites:["g9i-01-2"]}
);

// ── Topic 2: Weather & Climate (3 islands) ───────────────────────────────────
CURRICULUM.push(
  {id:"g9i-02-1", name:"The Atmosphere & Weather Systems", emoji:"☁️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-02", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Describe the structure of the atmosphere and how air masses create different weather conditions.",
   learningOutcomes:["Describe the layers of the atmosphere","Explain how air masses affect UK weather","Interpret synoptic charts"],
   topics:["Atmosphere structure","Air masses","Synoptic charts"], prerequisites:[]},
  {id:"g9i-02-2", name:"UK Weather & Extreme Events", emoji:"🌧️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain why the UK has a temperate maritime climate and examine the impact of extreme weather events.",
   learningOutcomes:["Explain factors influencing UK climate","Describe the formation of depressions and anticyclones","Assess impacts of UK extreme weather"],
   topics:["UK climate factors","Depressions and anticyclones","Extreme weather events"], prerequisites:["g9i-02-1"]},
  {id:"g9i-02-3", name:"Global Climate Zones", emoji:"🌡️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-02", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Understand the global distribution of climate zones and explain what causes them.",
   learningOutcomes:["Identify the main global climate zones","Explain the role of latitude, altitude and ocean currents","Link climate zones to biome distribution"],
   topics:["Climate zone distribution","Factors affecting climate","Climate and biomes"], prerequisites:["g9i-02-1"]}
);

// ── Topic 3: Ecosystems & Biomes (2 islands) ────────────────────────────────
CURRICULUM.push(
  {id:"g9i-03-1", name:"Tropical Rainforests", emoji:"🌴", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explore the structure, climate, biodiversity and threats facing tropical rainforests.",
   learningOutcomes:["Describe rainforest climate and structure","Explain nutrient cycling and adaptations","Evaluate causes and management of deforestation"],
   topics:["Rainforest layers and climate","Nutrient cycling","Deforestation and management"], prerequisites:[]},
  {id:"g9i-03-2", name:"Hot Deserts & Food Chains", emoji:"🏜️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-03", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Study hot desert environments, adaptations, desertification and ecosystem food chains.",
   learningOutcomes:["Describe desert climate and adaptations","Explain the causes and effects of desertification","Construct and interpret food chains and food webs"],
   topics:["Desert climate and adaptations","Desertification","Food chains and webs"], prerequisites:["g9i-03-1"]}
);

// ── Topic 4: Rivers & Flooding (3 islands) ───────────────────────────────────
CURRICULUM.push(
  {id:"g9i-04-1", name:"The Water Cycle", emoji:"💧", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-04", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Describe the water cycle and explain the key processes that move water through the environment.",
   learningOutcomes:["Label the main stores and transfers in the water cycle","Define infiltration, percolation, surface run-off and throughflow","Explain how the water cycle is a closed system"],
   topics:["Water cycle stores","Water cycle transfers","The drainage basin"], prerequisites:[]},
  {id:"g9i-04-2", name:"River Processes & Landforms", emoji:"🏞️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain how rivers erode, transport and deposit material to create distinctive landforms.",
   learningOutcomes:["Describe the four processes of river erosion","Explain the formation of meanders, oxbow lakes and waterfalls","Describe how rivers change from source to mouth"],
   topics:["Erosion processes","Upper and middle course landforms","Lower course landforms"], prerequisites:["g9i-04-1"]},
  {id:"g9i-04-3", name:"Flooding & Flood Management", emoji:"🌊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Investigate the causes and impacts of river flooding and evaluate management strategies.",
   learningOutcomes:["Explain physical and human causes of flooding","Describe a case study of a flood event","Evaluate hard and soft engineering flood management"],
   topics:["Causes of flooding","Flood case study","Flood management strategies"], prerequisites:["g9i-04-2"]},
  {id:"g9i-04-4", name:"Depositional River Landforms", emoji:"🏞️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-04", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain the formation of meanders, oxbow lakes, floodplains and levées.",
   learningOutcomes:["Explain why deposition occurs","Explain meanders and oxbow lakes","Describe floodplains and levées"],
   topics:["Meanders & oxbows","Floodplains","Levées"], prerequisites:["g9i-04-2"]}
);

// ── Topic 5: Coastal Landscapes (2 islands) ──────────────────────────────────
CURRICULUM.push(
  {id:"g9i-05-1", name:"Coastal Erosion & Landforms", emoji:"🪨", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain how waves and weathering create erosional and depositional coastal landforms.",
   learningOutcomes:["Describe wave types and coastal erosion processes","Explain the formation of cliffs, wave-cut platforms, arches and stacks","Describe depositional landforms including spits and bars"],
   topics:["Wave types and erosion","Erosional landforms","Depositional landforms"], prerequisites:[]},
  {id:"g9i-05-2", name:"Coastal Management", emoji:"🛡️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Evaluate the advantages and disadvantages of hard and soft engineering coastal defences.",
   learningOutcomes:["Describe hard engineering methods and their impacts","Describe soft engineering methods and their benefits","Evaluate management using a case study"],
   topics:["Hard engineering","Soft engineering","Case study: Holderness Coast"], prerequisites:["g9i-05-1"]},
  {id:"g9i-05-3", name:"Coastal Processes & Deposition", emoji:"🏖️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-05", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain waves, longshore drift and the formation of beaches and spits.",
   learningOutcomes:["Distinguish constructive and destructive waves","Explain longshore drift","Explain beaches and spits"],
   topics:["Wave types","Longshore drift","Beaches & spits"], prerequisites:["g9i-05-1"]}
);

// ── Topic 6: Urbanisation (2 islands) ────────────────────────────────────────
CURRICULUM.push(
  {id:"g9i-06-1", name:"Urban Growth & Challenges", emoji:"🏗️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Explain the causes of urbanisation and analyse the challenges it creates in LICs and HICs.",
   learningOutcomes:["Define urbanisation and describe global patterns","Explain push and pull factors of rural-urban migration","Analyse urban challenges: housing, traffic, pollution"],
   topics:["Global urbanisation","Push and pull factors","Urban challenges"], prerequisites:[]},
  {id:"g9i-06-2", name:"Sustainable Cities", emoji:"🌱", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-06", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Evaluate strategies for creating sustainable urban environments.",
   learningOutcomes:["Define sustainable urban living","Describe strategies: green transport, waste management, green spaces","Evaluate a case study of a sustainable city"],
   topics:["Sustainable urban living","Strategies for sustainability","Case study: Freiburg or Curitiba"], prerequisites:["g9i-06-1"]}
);

// ── Topic 7: Development & Globalisation (3 islands) ─────────────────────────
CURRICULUM.push(
  {id:"g9i-07-1", name:"Measuring Development", emoji:"📊", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-07", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Use development indicators to compare countries and explain the limitations of single measures.",
   learningOutcomes:["Define development and its dimensions","Use GDP, HDI, life expectancy and literacy rate","Evaluate the strengths and weaknesses of each indicator"],
   topics:["What is development","Development indicators","Limitations of indicators"], prerequisites:[]},
  {id:"g9i-07-2", name:"Trade, Aid & TNCs", emoji:"🏭", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Analyse how international trade, aid and transnational corporations affect development.",
   learningOutcomes:["Explain how trade patterns create inequality","Evaluate the role of aid in development","Assess the positive and negative impacts of TNCs"],
   topics:["International trade","Types of aid","Transnational corporations"], prerequisites:["g9i-07-1"]},
  {id:"g9i-07-3", name:"Reducing the Development Gap", emoji:"🤝", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-07", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Evaluate strategies for reducing the gap between rich and poor countries.",
   learningOutcomes:["Describe Fair Trade, microfinance and intermediate technology","Explain debt relief and its effects","Evaluate which strategies are most effective"],
   topics:["Fair Trade and microfinance","Debt relief","Intermediate technology"], prerequisites:["g9i-07-2"]}
);

// ── Topic 8: Geographical Skills (2 islands) ─────────────────────────────────
CURRICULUM.push(
  {id:"g9i-08-1", name:"Maps & Grid References", emoji:"🗺️", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-08", yearGroup:"Year 9", difficulty:1, estimatedHours:2,
   description:"Read Ordnance Survey maps, use four- and six-figure grid references and measure distance and direction.",
   learningOutcomes:["Use four- and six-figure grid references","Measure straight-line and actual distances using scale","Identify map symbols and give compass directions"],
   topics:["Grid references","Scale and distance","Map symbols and direction"], prerequisites:[]},
  {id:"g9i-08-2", name:"Graphs, Data & Fieldwork", emoji:"📈", subject:"Geography", subjectId:"geography", color:"#0d9488",
   topicId:"g9t-08", yearGroup:"Year 9", difficulty:2, estimatedHours:2,
   description:"Choose appropriate graphs, apply basic statistics and plan geographical fieldwork enquiries.",
   learningOutcomes:["Select appropriate graphical techniques","Calculate mean, median, mode and range","Plan a fieldwork enquiry using the enquiry cycle"],
   topics:["Graph types","Basic statistics","Fieldwork enquiry"], prerequisites:["g9i-08-1"]}
);
