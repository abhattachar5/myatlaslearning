// content/y10/geography/islands/t08.js — Year 10 Geography Topic 8: Geographical Skills & Fieldwork
// Islands g10i-08-1 .. g10i-08-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // g10i-08-1 — OS Maps & Statistics
  {id:"g10fc-08-1-1", islandId:"g10i-08-1", front:"How do you use six-figure grid references on an OS map?",
   back:"A six-figure grid reference pinpoints a location to within a 100-metre square.\n\nMethod:\n1. Find the grid square containing your point.\n2. Read along the bottom (eastings) — note the two-digit number of the grid line to the LEFT of the point.\n3. Estimate how many tenths across the square the point is — this gives your third digit.\n4. Read up the side (northings) — note the two-digit number of the grid line BELOW the point.\n5. Estimate how many tenths up the square the point is — this gives your sixth digit.\n\nExample: if a church is 3 tenths across square 45 and 7 tenths up square 23, the six-figure grid reference is 453 237.\n\nRemember: along the corridor (eastings) before up the stairs (northings).", difficulty:2, category:"skill"},
  {id:"g10fc-08-1-2", islandId:"g10i-08-1", front:"How do you measure distance on an OS map using scale?",
   back:"OS maps have a stated scale:\n• 1:25,000 — 4 cm on the map = 1 km on the ground (Explorer maps)\n• 1:50,000 — 2 cm on the map = 1 km on the ground (Landranger maps)\n\nStraight-line distance:\n1. Measure the distance between two points on the map in centimetres using a ruler.\n2. Convert using the scale. E.g. on a 1:50,000 map, 6 cm = 3 km.\n\nActual (winding) distance:\n1. Place the edge of a piece of paper along the route.\n2. Mark the start and finish, plus key turning points.\n3. Measure the total distance on the paper.\n4. Convert using the scale.\n\nAlternatively, use a piece of string laid along the route, then measure the string.", difficulty:2, category:"skill"},
  {id:"g10fc-08-1-3", islandId:"g10i-08-1", front:"How do you interpret contour lines on an OS map?",
   back:"Contour lines join places of equal height above sea level.\n\nKey rules:\n• On 1:25,000 maps, contour intervals are 5 metres; on 1:50,000 maps, 10 metres.\n• Close together = steep slope\n• Far apart = gentle slope\n• V-shaped contours pointing uphill = valley (river flows at the bottom of the V)\n• V-shaped contours pointing downhill = spur (ridge of land jutting out)\n• Concentric circles = hilltop; the innermost has the highest value\n\nCross-sections:\n1. Place paper along the line of the cross-section.\n2. Mark where each contour line crosses the paper, noting its height.\n3. Transfer these marks onto a graph with height on the y-axis.\n4. Join the plotted points with a smooth curve.\n\nCross-sections reveal the shape of the land and are useful for explaining river valleys, coastal cliffs and settlement patterns.", difficulty:2, category:"skill"},
  {id:"g10fc-08-1-4", islandId:"g10i-08-1", front:"Calculate and interpret the mean, median, mode and range of a data set.",
   back:"Given the data set: 3, 5, 7, 7, 8, 10, 12\n\nMean (average):\n• Add all values: 3+5+7+7+8+10+12 = 52\n• Divide by the number of values: 52 ÷ 7 = 7.4\n• Sensitive to extreme values (outliers)\n\nMedian (middle value):\n• Arrange in order (already done): 3, 5, 7, 7, 8, 10, 12\n• Middle value (4th of 7) = 7\n• Not affected by outliers\n\nMode (most common value):\n• 7 appears twice; all others appear once\n• Mode = 7\n• Useful for categorical data\n\nRange (spread):\n• Highest – lowest = 12 – 3 = 9\n• Shows the spread of data\n\nInterquartile range (IQR):\n• Q1 (lower quartile) = 5; Q3 (upper quartile) = 10\n• IQR = 10 – 5 = 5\n• Shows the spread of the middle 50%; less affected by outliers than the range", difficulty:2, category:"skill"},
  {id:"g10fc-08-1-5", islandId:"g10i-08-1", front:"When should you use a choropleth map versus a proportional symbol map?",
   back:"Choropleth map:\n• Uses shading or colour to show the density or value of a variable within defined areas (e.g. population density per county, rainfall per region)\n• Best for showing spatial patterns across areas\n• Limitation: implies uniform distribution within each area (which is rarely true)\n• Requires a clear key with graduated shading\n\nProportional symbol map:\n• Uses symbols (usually circles) of varying size to represent quantities at specific locations\n• Best for showing absolute values at point locations (e.g. population of cities, earthquake magnitude)\n• Limitation: symbols can overlap in crowded areas\n\nChoosing:\n• Use a choropleth map when your data is spread across areas (e.g. percentage of land used for farming per county)\n• Use a proportional symbol map when your data is at specific points (e.g. number of visitors to different tourist sites)", difficulty:2, category:"skill"},

  // g10i-08-2 — Fieldwork Techniques
  {id:"g10fc-08-2-1", islandId:"g10i-08-2", front:"Describe the stages of a geographical fieldwork enquiry.",
   back:"The enquiry cycle has six stages:\n\n1. Question/hypothesis — identify a clear, testable question or hypothesis (e.g. 'Does pebble size decrease with distance from the headland?')\n\n2. Data collection — choose appropriate methods:\n   • Primary data — collected first-hand in the field (measurements, surveys, photographs)\n   • Secondary data — collected by others (census data, maps, satellite images)\n\n3. Data presentation — display data using appropriate techniques (graphs, maps, charts, GIS)\n\n4. Data analysis — describe patterns, trends and anomalies in the data\n\n5. Conclusions — answer the original question; accept or reject the hypothesis\n\n6. Evaluation — assess the reliability and accuracy of the data and methods; identify limitations and improvements\n\nYou must know this cycle for the GCSE exam, even if the specific fieldwork you conducted differs.", difficulty:2, category:"concept"},
  {id:"g10fc-08-2-2", islandId:"g10i-08-2", front:"What is the difference between systematic and random sampling?",
   back:"Systematic sampling:\n• Data is collected at regular, predetermined intervals (e.g. every 10 metres along a transect; every 5th house on a street)\n• Advantages: easy to organise; provides even coverage of the study area\n• Disadvantages: may miss important variations between sampling points; could coincide with a pattern in the data\n\nRandom sampling:\n• Sampling locations are chosen using a random number generator or by drawing numbers from a hat\n• Advantages: avoids bias; every location has an equal chance of being selected\n• Disadvantages: may leave gaps in coverage; harder to organise\n\nStratified sampling:\n• The study area is divided into sub-groups (strata); samples are taken from each in proportion to its size\n• Advantages: ensures all sub-groups are represented\n• Example: sampling proportionally from each land-use zone in a river study\n\nChoose the method that best fits your research question and study area.", difficulty:2, category:"concept"},
  {id:"g10fc-08-2-3", islandId:"g10i-08-2", front:"Describe common fieldwork data collection techniques for a river study.",
   back:"Width and depth:\n• Stretch a tape measure across the river; measure depth at regular intervals using a metre ruler\n• Allows calculation of cross-sectional area (width × average depth)\n\nVelocity:\n• Float method: time how long a cork or orange takes to travel a measured distance; calculate speed = distance ÷ time\n• Flow meter: more accurate; measures velocity directly at specific points\n\nBed load (pebble analysis):\n• Use a quadrat or systematic sampling to select pebbles\n• Measure length (long axis) with a ruler\n• Assess roundness using a Powers' Roundness Index chart\n• Expects: pebble size decreases and roundness increases downstream (attrition)\n\nEnvironmental Quality Survey:\n• Assess water clarity, litter, vegetation, smell using a bipolar scale (e.g. -3 to +3)\n\nPhotographic evidence:\n• Take labelled photographs at each sampling site for qualitative data", difficulty:2, category:"skill"},
  {id:"g10fc-08-2-4", islandId:"g10i-08-2", front:"How do you evaluate the reliability and accuracy of fieldwork data?",
   back:"Reliability — would the results be the same if the study were repeated?\n• Using systematic or random sampling reduces bias\n• Larger sample sizes increase reliability\n• Repeating measurements and calculating averages reduces the effect of anomalies\n• Using standardised equipment and methods across all sites ensures consistency\n\nAccuracy — how close are the measurements to the true value?\n• Equipment must be appropriate and correctly calibrated\n• Human error in reading scales or estimating values reduces accuracy\n• Environmental conditions (e.g. rain affecting visibility, wind affecting measurements) can reduce accuracy\n\nLimitations to consider:\n• Time constraints may limit sample size\n• Safety restrictions may prevent access to ideal sampling locations\n• Weather on the day of fieldwork may not be representative\n• Some data (e.g. environmental quality) is subjective\n\nSuggested improvements:\n• Increase sample size and number of sampling sites\n• Use more precise equipment (e.g. flow meters instead of float method)\n• Repeat on different days and in different conditions", difficulty:2, category:"application"},
  {id:"g10fc-08-2-5", islandId:"g10i-08-2", front:"Why is it important to present geographical data using appropriate techniques?",
   back:"Appropriate data presentation makes patterns, trends and anomalies clear and easy to interpret.\n\nMatching technique to data type:\n• Bar charts — comparing categories (e.g. land use in different zones)\n• Line graphs — showing change over time (e.g. river discharge over a year)\n• Scatter graphs — showing relationships between two variables (e.g. distance from sea vs. temperature); add a best-fit line\n• Pie charts — showing proportions of a whole (e.g. employment sectors)\n• Histograms — showing continuous data in class intervals (e.g. pebble size distribution)\n• Choropleth maps — spatial distribution of values across areas\n• Proportional symbol maps — quantities at specific locations\n• GIS (Geographical Information Systems) — layering digital data to reveal spatial patterns\n\nPoor choices (e.g. using a pie chart for continuous data) obscure the information and lose marks in the exam. Always justify your choice.", difficulty:2, category:"skill"},

  // g10i-08-3 — Graphical & Numerical Skills
  {id:"g10fc-08-3-1", islandId:"g10i-08-3", front:"How do you select the right graph or chart for your data?",
   back:"Match the technique to the type of data and what you want to show:\n\n• Bar chart — comparing separate categories (e.g. land use in different zones)\n• Line graph — showing continuous change over time (e.g. discharge through a year)\n• Pie chart — showing proportions of a whole (e.g. percentage of journeys by transport type)\n• Scatter graph — showing the relationship between two variables; add a line of best fit\n• Proportional symbols — showing quantities at point locations using symbols of varying size\n• Choropleth map — showing how a value varies across defined areas using graduated shading\n\nQuestions to ask:\n• Is my data in categories, over time, parts of a whole, or two variables?\n• Is it at points or across areas?\n\nChoosing well makes patterns clear; a poor choice (e.g. a pie chart for continuous data) hides them and loses marks.", difficulty:2, category:"skill"},
  {id:"g10fc-08-3-2", islandId:"g10i-08-3", front:"What is a scatter graph and a line of best fit used for?",
   back:"A scatter graph plots two variables against each other — one on the x-axis, one on the y-axis. Each point is one pair of measurements (e.g. distance from the sea and temperature).\n\nLine of best fit:\n• A straight line drawn through the middle of the points to show the overall trend\n• Roughly equal numbers of points lie above and below it\n• It does NOT have to pass through every point or the origin\n\nReading correlation:\n• Positive correlation — as one variable increases, so does the other (line slopes up)\n• Negative correlation — as one increases, the other decreases (line slopes down)\n• No correlation — points are scattered with no clear trend\n\nStrength:\n• Points close to the line = strong correlation\n• Points widely scattered = weak correlation\n\nRemember: correlation does not prove that one variable causes the other.", difficulty:2, category:"skill"},
  {id:"g10fc-08-3-3", islandId:"g10i-08-3", front:"How do you describe a distribution or trend, including anomalies?",
   back:"Use the 'TEA' approach: Trend, Evidence, Anomaly.\n\nTrend:\n• State the overall pattern (e.g. 'temperature increases with distance inland')\n• Use directional words: rises, falls, peaks, levels off, fluctuates\n\nEvidence:\n• Quote figures from the graph or map to support the trend\n• Include the highest and lowest values and the range\n\nAnomaly:\n• Identify any point that does not fit the trend (an anomaly or outlier)\n• Describe where it is and how it differs (e.g. 'one site is unusually high at 22°C')\n• If possible, suggest why\n\nFor maps, describe the spatial distribution — is it clustered, even, random, or concentrated in one area? Always support descriptions with data; vague answers score poorly.", difficulty:2, category:"skill"},
  {id:"g10fc-08-3-4", islandId:"g10i-08-3", front:"How do you calculate percentages and ratios in geography?",
   back:"Percentages:\n• A percentage is a proportion out of 100\n• Formula: (part ÷ whole) × 100\n• Example: if 18 of 60 people walk to school, that is (18 ÷ 60) × 100 = 30%\n• Percentage change = ((new − old) ÷ old) × 100\n\nRatios:\n• A ratio compares two quantities\n• Example: if a survey finds 40 cars and 10 lorries, the ratio of cars to lorries is 40:10, which simplifies to 4:1\n• Simplify by dividing both numbers by their highest common factor\n\nWhy they matter:\n• Percentages allow fair comparison between groups of different sizes\n• Ratios show relative proportions clearly\n\nThese numerical skills are tested in the exam and used to interpret your own fieldwork data.", difficulty:2, category:"skill"},
  {id:"g10fc-08-3-5", islandId:"g10i-08-3", front:"Explain mean, median, mode, range and interquartile range.",
   back:"For the data set: 4, 6, 6, 9, 10, 13, 20\n\nMean (average):\n• Add all values and divide by how many there are\n• (4+6+6+9+10+13+20) ÷ 7 = 68 ÷ 7 = 9.7\n• Affected by outliers (the 20 pulls it up)\n\nMedian (middle value when ordered):\n• Middle of 7 values = 4th value = 9\n• Not affected by outliers\n\nMode (most common value):\n• 6 appears twice; mode = 6\n\nRange (spread):\n• Highest − lowest = 20 − 4 = 16\n\nInterquartile range (IQR):\n• Q1 (lower quartile) = 6; Q3 (upper quartile) = 13\n• IQR = 13 − 6 = 7\n• Measures the spread of the middle 50%; less affected by outliers than the range\n\nChoose the measure that best suits your data and is least distorted by extreme values.", difficulty:2, category:"skill"},

  // g10i-08-4 — Physical Fieldwork Enquiry
  {id:"g10fc-08-4-1", islandId:"g10i-08-4", front:"How do you form a question or hypothesis for a physical fieldwork enquiry?",
   back:"A good enquiry begins with a clear, testable question or hypothesis linked to geographical theory.\n\nQuestion form:\n• 'How does river velocity change downstream?'\n\nHypothesis form (a statement you can accept or reject):\n• 'River velocity increases with distance downstream'\n• 'Beach material becomes smaller and more rounded along the beach in the direction of longshore drift'\n\nGood hypotheses are:\n• Based on theory you have learned (e.g. the Bradshaw model for rivers)\n• Measurable — you can collect data to test them\n• Specific — they name the variables and the expected direction of change\n\nYou should also write a null hypothesis (predicting no relationship) where appropriate. A focused hypothesis shapes your whole enquiry — what to measure, where, and how.", difficulty:2, category:"skill"},
  {id:"g10fc-08-4-2", islandId:"g10i-08-4", front:"Why is a risk assessment essential before physical fieldwork?",
   back:"A risk assessment identifies hazards and plans how to reduce them, keeping you safe in the field.\n\nFor a river or coast study, hazards include:\n• Deep or fast-flowing water — risk of drowning\n• Slippery banks and rocks — risk of falling\n• Cold and wet weather — risk of hypothermia\n• Steep cliffs or unstable beaches — risk of injury\n• Traffic when crossing roads to sites\n\nFor each hazard, record:\n• The risk it poses\n• Who could be harmed\n• Control measures to reduce it (e.g. wear wellies, work in pairs, check tide times, stay away from cliff edges, wear suitable clothing, carry a first-aid kit and phone)\n\nA risk assessment is a legal and practical requirement and shows the examiner you planned your enquiry responsibly.", difficulty:2, category:"skill"},
  {id:"g10fc-08-4-3", islandId:"g10i-08-4", front:"Describe primary data collection methods for a river enquiry.",
   back:"Width:\n• Stretch a tape measure across the river from bank to bank\n\nDepth:\n• Use a metre ruler at regular intervals across the channel; average the readings\n• Width × average depth gives cross-sectional area\n\nVelocity:\n• Float method — time a float (cork/orange) over a measured distance; speed = distance ÷ time\n• Flow meter — more accurate; measures velocity directly\n\nBed load (pebble analysis):\n• Sample pebbles (e.g. using a quadrat) and measure the long axis with a ruler\n• Assess roundness using a Powers' Roundness Index\n\nGradient:\n• Use ranging poles and a clinometer to measure the slope of the channel\n\nThese measurements are usually taken at several sites downstream so you can test how the river changes, for example using the Bradshaw model.", difficulty:2, category:"skill"},
  {id:"g10fc-08-4-4", islandId:"g10i-08-4", front:"What is sampling and why is it used in a coast or river enquiry?",
   back:"It is impossible to measure every pebble or every point, so geographers sample — measuring a selection that represents the whole.\n\nSampling strategies:\n• Random — locations chosen using random numbers; avoids bias but may leave gaps\n• Systematic — measurements at regular intervals (e.g. every 10 m along a beach profile or downstream); even coverage and easy to organise\n• Stratified — sampling proportionally from identified sub-groups (e.g. different sections of a beach)\n\nFor a beach profile:\n• Use systematic sampling — measure the angle of each slope section between breaks in slope from the sea to the back of the beach using ranging poles and a clinometer\n\nGood sampling makes data more representative and reliable. You should justify the strategy you chose and acknowledge its limitations.", difficulty:2, category:"skill"},
  {id:"g10fc-08-4-5", islandId:"g10i-08-4", front:"How do you reach a conclusion and evaluate a physical fieldwork enquiry?",
   back:"Conclusion:\n• Return to your original question/hypothesis and state whether the data supports it\n• Use evidence from your presented and analysed data\n• Link findings back to geographical theory (e.g. 'velocity increased downstream, supporting the Bradshaw model')\n• Note any results that did not fit\n\nEvaluation:\n• Reliability — would repeating the study give the same results? Larger samples and standardised methods improve it\n• Accuracy — how close were measurements to the true value? The float method only measures surface velocity, reducing accuracy\n• Limitations — time, safety restrictions, weather on the day, subjective judgements\n• Improvements — be specific: more sites, larger samples, more precise equipment (e.g. a flow meter), repeating on different days\n\nA strong evaluation honestly judges how much you can trust your conclusion.", difficulty:2, category:"application"},

  // g10i-08-5 — Human Fieldwork Enquiry
  {id:"g10fc-08-5-1", islandId:"g10i-08-5", front:"How do you form a hypothesis for a human fieldwork enquiry?",
   back:"A human enquiry investigates people and places, so the hypothesis links to urban or economic theory.\n\nExamples:\n• 'Environmental quality improves with distance from the city centre'\n• 'Pedestrian counts are highest in the Central Business District (CBD)'\n• 'Quality of life is higher in the suburbs than in the inner city'\n\nGood hypotheses are:\n• Based on theory (e.g. the Burgess urban land-use model)\n• Measurable using surveys, counts or scoring\n• Specific about the variables and expected pattern\n\nYou might also state a null hypothesis predicting no difference. A clear hypothesis decides what data you collect, where, and how you will present and analyse it. It gives the enquiry focus and a clear standard against which to test your results.", difficulty:2, category:"skill"},
  {id:"g10fc-08-5-2", islandId:"g10i-08-5", front:"Describe data collection methods for a human fieldwork enquiry.",
   back:"Questionnaires:\n• Ask people set questions to gather opinions and data (e.g. how far they travelled, their views on an area)\n• Use closed questions for easy analysis and open questions for detail\n\nEnvironmental Quality Survey (EQS):\n• Score features such as litter, noise, greenery and building condition on a bipolar scale (e.g. -3 to +3) at each site\n\nPedestrian and traffic counts:\n• Count people or vehicles passing a point in a fixed time (e.g. 5 minutes) to measure footfall or congestion\n\nLand-use mapping:\n• Record the use of each building (shop, office, housing) on a base map to show land-use patterns\n\nUsing several methods (and combining primary with secondary data such as census data) gives a fuller, more reliable picture of the area being studied.", difficulty:2, category:"skill"},
  {id:"g10fc-08-5-3", islandId:"g10i-08-5", front:"Explain random, systematic and stratified sampling in human fieldwork.",
   back:"Random sampling:\n• Locations or people chosen using random numbers, so each has an equal chance\n• Avoids bias but may leave gaps in coverage\n\nSystematic sampling:\n• Data collected at regular intervals (e.g. every 5th person, or an EQS every 100 m along a transect)\n• Even coverage and easy to organise, but may miss variations between points\n\nStratified sampling:\n• The population or area is divided into sub-groups (strata) and sampled in proportion to their size\n• Example: surveying proportional numbers of people from each age group, or sites from each housing zone\n• Ensures all groups are represented\n\nChoosing:\n• Match the strategy to your hypothesis and study area\n• Justify your choice and note its limitations — examiners reward this in the evaluation.", difficulty:2, category:"skill"},
  {id:"g10fc-08-5-4", islandId:"g10i-08-5", front:"How do you present and analyse human fieldwork data?",
   back:"Presentation — match the technique to the data:\n• Bar charts — comparing pedestrian counts between sites\n• Located bar/pie charts on a map — showing variation across space\n• Scatter graph with line of best fit — testing a relationship (e.g. environmental quality vs. distance from the CBD)\n• Choropleth map — showing how a score varies across areas\n• Annotated photographs — qualitative evidence of environmental quality\n\nAnalysis:\n• Describe the trend or pattern using the data (TEA: Trend, Evidence, Anomaly)\n• Identify anomalies and suggest reasons\n• Use statistics — averages, percentages, or correlation from a scatter graph\n• Link findings to theory (e.g. the Burgess model)\n\nGood analysis goes beyond describing — it explains what the data shows and why, in relation to your hypothesis.", difficulty:2, category:"skill"},
  {id:"g10fc-08-5-5", islandId:"g10i-08-5", front:"How do you conclude and evaluate a human fieldwork enquiry?",
   back:"Conclusion:\n• Return to your hypothesis and state whether the data supports it\n• Use evidence from your results and link to theory (e.g. the Burgess model)\n• Acknowledge any anomalies\n\nEvaluation:\n• Reliability — would the study give the same results if repeated? Larger samples and standardised methods help; a count taken at one time of day may not be representative\n• Accuracy — questionnaires and EQS scores can be subjective and affected by bias\n• Limitations — small sample size, time of day, weather, people refusing to answer questionnaires, the surveyor's own opinions affecting EQS scores\n• Improvements — be specific: survey at several times of day, increase the sample size, use clearer questionnaire wording, ask more than one person to score the EQS to reduce bias\n\nA strong evaluation judges honestly how far you can trust your conclusion.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "g10i-08-1": [
    {q:"On a 1:50,000 OS map, two points are 8 cm apart. What is the real-world distance?",
     opts:["8 km","4 km","2 km","0.8 km"], c:1,
     e:"On a 1:50,000 OS map, 2 cm represents 1 km. Therefore 8 cm represents 8 ÷ 2 = 4 km. Remember: on 1:25,000 maps the scale is 4 cm = 1 km, and on 1:50,000 maps it is 2 cm = 1 km. Always check which scale the question specifies before converting."},
    {q:"Contour lines that are very close together on an OS map indicate:",
     opts:["A flat, level area","A steep slope","A river valley","A built-up area"], c:1,
     e:"Closely spaced contour lines indicate a steep slope because there is a large change in height over a short horizontal distance. Widely spaced contour lines indicate a gentle slope. On cliff edges, contour lines may merge together. Understanding contour patterns is essential for interpreting landscape features, drawing cross-sections and explaining settlement and land-use patterns."},
    {q:"The data set 4, 6, 6, 8, 11 has a mean of:",
     opts:["6","7","8","6.5"], c:1,
     e:"To calculate the mean, add all values and divide by the number of values: 4 + 6 + 6 + 8 + 11 = 35. Divide by 5 (the number of values): 35 ÷ 5 = 7. The mean is 7. Note that the median (middle value) would be 6, and the mode (most common value) would also be 6. The mean is affected by the outlier (11), pulling it above the median."},
    {q:"When would a choropleth map be more appropriate than a proportional symbol map?",
     opts:["When showing data at specific point locations","When showing how a variable such as population density varies across defined areas","When showing the exact number of people at specific locations","When displaying change over time"], c:1,
     e:"Choropleth maps use shading to show how a variable is distributed across defined areas (e.g. population density per district, percentage of Green Belt land per county). They are ideal for revealing spatial patterns across regions. Proportional symbol maps are better for showing absolute values at specific points (e.g. city populations). Choose the technique that best matches your data type — area-based data suits choropleth; point-based data suits proportional symbols."},
    {q:"What does the interquartile range (IQR) measure?",
     opts:["The difference between the highest and lowest values","The spread of the middle 50% of the data, calculated as the upper quartile minus the lower quartile","The most common value in the data set","The average of all the values"], c:1,
     e:"The interquartile range (IQR) measures the spread of the middle 50% of a data set. It is calculated by subtracting the lower quartile (Q1, the 25th percentile) from the upper quartile (Q3, the 75th percentile). The IQR is more useful than the range because it is not affected by extreme values (outliers). A large IQR indicates the data is widely spread; a small IQR indicates the data is clustered around the median."}
  ],
  "g10i-08-2": [
    {q:"Which of the following is an example of primary data?",
     opts:["A census report published by the government","River velocity measurements you took in the field using a flow meter","An OS map of the study area","A textbook description of river landforms"], c:1,
     e:"Primary data is data you collect yourself, first-hand, in the field. Measuring river velocity with a flow meter, counting pedestrians in a town centre, or recording pebble sizes at a beach are all examples. Secondary data is data collected by someone else — census reports, OS maps, satellite images and textbook information. Both types are valuable, but primary data is the focus of GCSE fieldwork assessments."},
    {q:"What is systematic sampling?",
     opts:["Choosing sampling locations completely at random","Collecting data at regular, predetermined intervals, such as every 10 metres along a transect","Only sampling the most interesting locations","Collecting data from one location only"], c:1,
     e:"Systematic sampling involves collecting data at regular, predetermined intervals. For example, measuring pebble size every 10 metres along a beach, or surveying every 5th house on a street. It provides even coverage of the study area and is easy to organise. However, it may miss important variations between sampling points. It is one of three sampling strategies you need to know, alongside random and stratified sampling."},
    {q:"In a river fieldwork study, why would you measure pebble roundness at multiple sites downstream?",
     opts:["To test the hypothesis that pebbles become more rounded downstream due to attrition","To measure how fast the river is flowing","To calculate the river's discharge","To identify what type of rock the pebbles are made from"], c:0,
     e:"Measuring pebble roundness at multiple downstream sites tests the geographical theory of attrition — that rocks become smaller and more rounded as they are transported downstream by the river. Repeated collisions (attrition) chip away angular edges. By using a Powers' Roundness Index at each site and comparing results, you can determine whether the data supports this theory. This is a classic GCSE fieldwork investigation."},
    {q:"Why is a larger sample size generally better in fieldwork?",
     opts:["It takes more time, which impresses the examiner","A larger sample is more likely to be representative of the whole population, reducing the effect of anomalies and increasing reliability","Larger samples are always perfectly accurate","The exam requires exactly 100 samples"], c:1,
     e:"A larger sample size is more likely to be representative of the whole population or study area, reducing the impact of any single anomalous result. For example, measuring 30 pebbles at each site gives a more reliable average than measuring 5. Larger samples also allow more meaningful statistical analysis. However, time and access constraints often limit sample sizes in GCSE fieldwork — you should acknowledge this in your evaluation."},
    {q:"Which graph type is best for showing the relationship between two continuous variables?",
     opts:["Pie chart","Bar chart","Scatter graph with a best-fit line","Pictogram"], c:2,
     e:"A scatter graph plots two continuous variables against each other (e.g. distance from the sea on the x-axis and temperature on the y-axis). Each data point represents one measurement. A best-fit line (line of best fit) shows the overall trend — positive correlation (both increase), negative correlation (one increases as the other decreases) or no correlation. Scatter graphs are essential for investigating relationships between variables in fieldwork."}
  ],
  "g10i-08-3": [
    {q:"Which graph or chart is most suitable for showing proportions of a whole, such as the percentage of journeys made by each transport type?",
     opts:["Line graph","Pie chart","Scatter graph","Choropleth map"], c:1,
     e:"A pie chart is ideal for showing proportions of a whole, where all the segments add up to 100%. Each slice represents one category's share — for example the percentage of journeys made by car, bus, bike or on foot. A line graph suits continuous change over time, a scatter graph shows relationships between two variables, and a choropleth map shows how a value varies across areas. Always match the technique to what your data represents."},
    {q:"On a scatter graph, what does a line of best fit that slopes downwards from left to right indicate?",
     opts:["A positive correlation","A negative correlation — as one variable increases, the other decreases","No correlation at all","That the data is invalid"], c:1,
     e:"A line of best fit sloping downwards from left to right shows a negative correlation: as the variable on the x-axis increases, the variable on the y-axis decreases. For example, environmental quality may fall as distance towards the inner city decreases. An upward slope shows positive correlation, and scattered points with no clear line show no correlation. Remember that correlation does not prove causation — a relationship between two variables does not prove one causes the other."},
    {q:"When describing a trend on a graph, why should you identify any anomalies?",
     opts:["Anomalies should always be deleted from the data","An anomaly is a point that does not fit the overall trend; identifying and explaining it shows deeper analysis and may reveal an unusual local factor","Anomalies prove the whole investigation is wrong","Anomalies are the same as the mean"], c:1,
     e:"An anomaly (or outlier) is a data point that does not fit the overall trend. When describing distributions and trends, a strong answer states the general trend, supports it with evidence (figures), and then identifies any anomalies, describing where they are and how they differ. Suggesting a reason for an anomaly — such as an unusual local feature — demonstrates deeper analytical skill. You should not simply ignore or delete anomalies; they are part of interpreting real data honestly."},
    {q:"If 24 out of 80 people surveyed cycle to work, what percentage is this?",
     opts:["24%","30%","40%","48%"], c:1,
     e:"To calculate a percentage, use the formula (part ÷ whole) × 100. Here, (24 ÷ 80) × 100 = 0.3 × 100 = 30%. Percentages allow fair comparison between groups of different sizes — for example, comparing a survey of 80 people in one area with a survey of 150 in another. Percentage change is calculated differently: ((new − old) ÷ old) × 100. Numerical skills like these are tested directly in the exam."},
    {q:"Why is the interquartile range sometimes preferred to the range as a measure of spread?",
     opts:["It is always larger than the range","It measures the spread of the middle 50% of the data and is less affected by extreme values (outliers) than the range","It is the same as the mean","It ignores all of the data except one value"], c:1,
     e:"The range (highest minus lowest) is simple but easily distorted by a single extreme value (outlier). The interquartile range (IQR = upper quartile − lower quartile) measures the spread of the middle 50% of the data, so it ignores the most extreme values at each end. This makes it a more reliable measure of spread when a data set contains outliers. For example, one unusually large pebble would inflate the range but have little effect on the IQR."}
  ],
  "g10i-08-4": [
    {q:"What makes a good hypothesis for a physical fieldwork enquiry?",
     opts:["A vague question with no clear answer","A specific, testable statement based on geographical theory, such as 'river velocity increases with distance downstream'","A statement that cannot be measured","An opinion about which river is the prettiest"], c:1,
     e:"A good hypothesis is a specific, testable statement based on geographical theory that names the variables and the expected direction of change. For example, 'river velocity increases with distance downstream' is based on the Bradshaw model and can be tested by measuring velocity at several sites. Good hypotheses are measurable and focused, which shapes the whole enquiry — what to measure, where and how. Vague or unmeasurable statements cannot be properly tested."},
    {q:"Why must you carry out a risk assessment before a river or coast study?",
     opts:["To make the fieldwork take longer","To identify hazards such as deep water, slippery banks and weather, and plan control measures to keep everyone safe","To decide which graphs to draw","It is not actually necessary"], c:1,
     e:"A risk assessment identifies the hazards of fieldwork and plans how to reduce them. For a river or coast study, hazards include deep or fast-flowing water (drowning), slippery banks and rocks (falls), cold and wet weather (hypothermia), and unstable cliffs. For each hazard you record the risk, who could be harmed, and control measures — such as wearing wellies, working in pairs, checking tide times and carrying a phone and first-aid kit. It is both a legal requirement and good practice."},
    {q:"Which of these is a primary data collection method for a river study?",
     opts:["Reading the river's history in a textbook","Measuring river width, depth and velocity in the field using a tape measure, ruler and float or flow meter","Looking up rainfall data online","Studying an old map of the area"], c:1,
     e:"Primary data is collected first-hand in the field. For a river study this includes measuring width with a tape measure, depth with a metre ruler at intervals across the channel, and velocity using the float method (timing a float over a set distance) or a flow meter. Pebble size and roundness and channel gradient can also be measured. Textbooks, online rainfall data and old maps are secondary data — useful, but collected by others rather than by you in the field."},
    {q:"What is systematic sampling when measuring a beach profile?",
     opts:["Choosing measurement points completely at random","Measuring at regular intervals or at each break of slope from the sea to the back of the beach, giving even coverage","Only measuring the most interesting part of the beach","Measuring just one point on the whole beach"], c:1,
     e:"Systematic sampling means collecting data at regular, predetermined points — for a beach profile, measuring the angle of each slope section at each break of slope from the sea to the back of the beach using ranging poles and a clinometer. This gives even, organised coverage of the profile. Sampling is necessary because you cannot measure every point; the aim is a representative selection. You should justify your chosen strategy and acknowledge its limitations in your evaluation."},
    {q:"What should a good evaluation of a physical fieldwork enquiry include?",
     opts:["Only a list of results","An honest assessment of the reliability and accuracy of the data, the limitations, and specific suggested improvements","A claim that the data was perfect","Only the original hypothesis"], c:1,
     e:"A good evaluation honestly judges how much you can trust your conclusion. It considers reliability (would repeating the study give the same results? larger samples and standardised methods help), accuracy (the float method only measures surface velocity, reducing accuracy) and limitations (time, safety restrictions, the weather on the day). Crucially, it suggests specific improvements — more sites, larger samples, more precise equipment such as a flow meter, or repeating on different days — rather than vague statements like 'collect more data'."}
  ],
  "g10i-08-5": [
    {q:"Which of the following is a suitable hypothesis for a human fieldwork enquiry?",
     opts:["'Rivers get faster downstream'","'Environmental quality improves with distance from the city centre'","'Pebbles get rounder downstream'","'The beach has the steepest profile'"], c:1,
     e:"A human fieldwork hypothesis investigates people and places and links to urban or economic theory. 'Environmental quality improves with distance from the city centre' is suitable — it is based on the Burgess urban land-use model, is measurable using an environmental quality survey at sites along a transect, and names the expected pattern. The other options are physical geography hypotheses about rivers and beaches. Matching the hypothesis to the type of enquiry is essential."},
    {q:"Which of these is a data collection method used in a human (urban) fieldwork enquiry?",
     opts:["Measuring river velocity with a flow meter","Carrying out an environmental quality survey, pedestrian counts and questionnaires","Measuring pebble roundness with a Powers' Index","Recording the angle of a beach slope"], c:1,
     e:"Human fieldwork investigates people and the built environment, so its methods include environmental quality surveys (scoring features like litter and greenery on a bipolar scale), pedestrian and traffic counts (counting people or vehicles in a fixed time), questionnaires (gathering opinions and data from the public) and land-use mapping. Measuring river velocity, pebble roundness and beach angles are physical fieldwork methods. Combining several human methods, and adding secondary data such as census figures, gives a fuller picture."},
    {q:"What is stratified sampling?",
     opts:["Choosing every location completely at random","Dividing the population or area into sub-groups and sampling each in proportion to its size, so all groups are represented","Sampling at regular fixed intervals only","Sampling just one sub-group"], c:1,
     e:"Stratified sampling divides the population or study area into sub-groups (strata) and takes samples from each in proportion to its size, ensuring every group is represented. For example, surveying proportional numbers of people from each age group, or sites from each housing zone. This contrasts with random sampling (locations chosen by random numbers) and systematic sampling (data collected at regular intervals). Choosing the right strategy and justifying it is an important part of designing a reliable enquiry."},
    {q:"In a human fieldwork enquiry, which technique best tests the relationship between environmental quality and distance from the city centre?",
     opts:["A pie chart","A scatter graph with a line of best fit","A single annotated photograph","A land-use map only"], c:1,
     e:"A scatter graph plots two variables against each other — here, environmental quality score on one axis and distance from the city centre on the other. Each point is one survey site. A line of best fit reveals the overall trend: a positive correlation would suggest quality improves with distance, supporting a hypothesis based on the Burgess model. Pie charts show proportions, photographs give qualitative evidence and land-use maps show patterns, but the scatter graph is best for testing a relationship between two variables."},
    {q:"Why might pedestrian count data collected on a single morning be unreliable?",
     opts:["Pedestrian counts are always perfectly reliable","Counts at one time of day may not be representative — numbers vary by time, day and weather, so the data may give a misleading picture","Counting people is impossible","The data would be too accurate"], c:1,
     e:"Pedestrian counts taken at a single time can be unreliable because footfall varies greatly by time of day (rush hour versus mid-afternoon), day of the week (weekday versus weekend) and weather (fewer people in rain). A count from one morning may therefore not be representative of typical conditions. In the evaluation you should note this limitation and suggest improvements — counting at several times of day and on different days, and increasing the sample — to make the data more reliable."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'g10i-08-1': `
<h2>OS Maps &amp; Statistics</h2>
<div class="lesson-diagram" data-diagram="grid-reference"><p class="diagram-caption">Reading grid references on an OS map</p></div>
<p>Geographical skills — reading OS maps, using statistics and presenting data — are examined in every GCSE Geography paper. Mastering these skills is worth significant marks.</p>

<h3>Grid References</h3>
<p>Four-figure grid references identify a 1 km square; six-figure references pinpoint a location to within 100 metres. Always read <strong>eastings</strong> (along the bottom) before <strong>northings</strong> (up the side) — "along the corridor, up the stairs".</p>

<h3>Scale and Distance</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#0d9488;color:white">
    <th style="padding:8px;border:1px solid #ccc">Map scale</th>
    <th style="padding:8px;border:1px solid #ccc">Map distance per km</th>
    <th style="padding:8px;border:1px solid #ccc">Map type</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">1:25,000</td>
    <td style="padding:8px;border:1px solid #ccc">4 cm = 1 km</td>
    <td style="padding:8px;border:1px solid #ccc">OS Explorer</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">1:50,000</td>
    <td style="padding:8px;border:1px solid #ccc">2 cm = 1 km</td>
    <td style="padding:8px;border:1px solid #ccc">OS Landranger</td>
  </tr>
</table>

<h3>Contour Lines</h3>
<p>Contour lines join points of equal height. <strong>Close together</strong> = steep; <strong>far apart</strong> = gentle. V-shapes pointing uphill indicate valleys; concentric circles indicate hilltops.</p>

<h3>Descriptive Statistics</h3>
<p><strong>Mean</strong> (average), <strong>median</strong> (middle value), <strong>mode</strong> (most frequent) and <strong>range</strong> (highest minus lowest). The <strong>interquartile range</strong> (IQR = Q3 − Q1) measures the spread of the middle 50% and is less affected by outliers than the range.</p>

<h3>Worked Example</h3>
<p>Calculate the mean and interquartile range of: 2, 4, 5, 7, 9, 11, 15.</p>
<p>Mean = (2+4+5+7+9+11+15) ÷ 7 = 53 ÷ 7 = <strong>7.6</strong>.<br>
Q1 (lower quartile) = 4; Q3 (upper quartile) = 11.<br>
IQR = 11 − 4 = <strong>7</strong>.<br>
The IQR tells us the middle 50% of values span a range of 7. This is more representative than the full range (15 − 2 = 13), which is inflated by the extreme values.</p>

<h3>Common Mistake</h3>
<p>Students frequently confuse eastings and northings when giving grid references. Remember: eastings first (along), then northings (up). A six-figure reference has three digits for each — the third digit in each set is your estimate of tenths across or up the square.</p>
`,

'g10i-08-2': `
<h2>Fieldwork Techniques</h2>
<div class="lesson-diagram" data-diagram="fieldwork-enquiry"><p class="diagram-caption">The geographical enquiry process</p></div>
<p>GCSE Geography requires you to understand the fieldwork enquiry process, even if the specific investigation you conducted differs from the examples used in the exam. You must be able to design, collect, present, analyse and evaluate geographical fieldwork.</p>

<h3>The Enquiry Cycle</h3>
<p>Every fieldwork investigation follows six stages: <strong>question/hypothesis</strong> → <strong>data collection</strong> → <strong>data presentation</strong> → <strong>data analysis</strong> → <strong>conclusions</strong> → <strong>evaluation</strong>. You must be able to explain and justify decisions at each stage.</p>

<h3>Sampling Methods</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#0d9488;color:white">
    <th style="padding:8px;border:1px solid #ccc">Method</th>
    <th style="padding:8px;border:1px solid #ccc">How it works</th>
    <th style="padding:8px;border:1px solid #ccc">Best used when</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Systematic</td>
    <td style="padding:8px;border:1px solid #ccc">Regular intervals (e.g. every 10 m)</td>
    <td style="padding:8px;border:1px solid #ccc">Even coverage is needed along a transect</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Random</td>
    <td style="padding:8px;border:1px solid #ccc">Locations chosen by random number generator</td>
    <td style="padding:8px;border:1px solid #ccc">Avoiding bias in selection</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Stratified</td>
    <td style="padding:8px;border:1px solid #ccc">Proportional sampling from each sub-group</td>
    <td style="padding:8px;border:1px solid #ccc">Study area has distinct zones to represent</td>
  </tr>
</table>

<h3>Evaluation: Reliability and Accuracy</h3>
<p><strong>Reliability</strong> — would repeating the study give similar results? Increase sample size, use standardised methods and repeat measurements. <strong>Accuracy</strong> — how close are measurements to the true value? Use calibrated equipment and reduce human error. Always suggest specific improvements in your evaluation.</p>

<h3>Worked Example</h3>
<p>Evaluate the data collection methods used in a river fieldwork study. [6 marks]</p>
<p>We measured river velocity using the <strong>float method</strong> (timing a cork over a fixed distance). This is simple and cheap but less accurate than a flow meter because the cork only measures surface velocity, not the full cross-section. We measured pebble size using a ruler at <strong>systematic intervals</strong> (every 10 m), which provided even coverage. However, our sample of 10 pebbles per site was relatively small — increasing to 30 would improve <strong>reliability</strong>. Safety restrictions prevented us from measuring at all desired locations. Repeating the study on a different day would help confirm whether results were <strong>representative</strong>.</p>

<h3>Common Mistake</h3>
<p>Students often write generic evaluations such as 'we could have collected more data'. Be specific: state what data, how many more samples, why this would improve reliability, and what practical limitations prevented it on the day. Specific evaluations score much higher than vague ones.</p>
`,

'g10i-08-3': `
<h2>Graphical &amp; Numerical Skills</h2>
<div class="lesson-diagram" data-diagram="correlation-types"><p class="diagram-caption">Positive, negative and no correlation on scatter graphs</p></div>
<p>GCSE Geography rewards confident use of graphs and statistics. You must select the right chart, describe what it shows clearly, and carry out basic calculations.</p>

<h3>Choosing the Right Graph</h3>
<p>Match the technique to the data: <strong>bar charts</strong> compare categories; <strong>line graphs</strong> show change over time; <strong>pie charts</strong> show proportions of a whole; <strong>scatter graphs</strong> show relationships between two variables; <strong>proportional symbols</strong> show quantities at points; and <strong>choropleth maps</strong> show how a value varies across areas.</p>

<h3>Scatter Graphs and Correlation</h3>
<p>A scatter graph plots two variables, and a <strong>line of best fit</strong> reveals the trend. An upward line shows <strong>positive correlation</strong>, a downward line shows <strong>negative correlation</strong>, and scattered points show <strong>no correlation</strong>. Points close to the line mean a strong correlation. Remember: correlation does not prove causation.</p>

<h3>Describing Trends</h3>
<p>Use <strong>TEA</strong> — state the <strong>Trend</strong>, give <strong>Evidence</strong> (quote figures), then identify any <strong>Anomaly</strong> and suggest why. For maps, describe whether the distribution is clustered, even or concentrated.</p>

<h3>Numerical Skills</h3>
<p>Percentage = (part &divide; whole) &times; 100. A <strong>ratio</strong> compares two quantities (e.g. 40 cars to 10 lorries = 4:1). For averages: <strong>mean</strong> (add and divide), <strong>median</strong> (middle value), <strong>mode</strong> (most common). Spread is shown by the <strong>range</strong> (highest − lowest) and the <strong>interquartile range</strong> (Q3 − Q1), which ignores outliers.</p>

<h3>Worked Example</h3>
<p>A scatter graph shows distance from the CBD against environmental quality score. Describe what it shows. [3 marks]</p>
<p>The graph shows a <strong>positive correlation</strong>: as distance from the CBD increases, the environmental quality score generally rises, from around 2 near the centre to 14 in the suburbs. The line of best fit slopes upwards, suggesting a fairly <strong>strong</strong> relationship. However, there is one <strong>anomaly</strong> — a site 2 km out with a low score of 4 — perhaps because of a busy main road or industrial estate at that point.</p>

<h3>Common Mistake</h3>
<p>Students often assume that correlation proves causation. A scatter graph may show that two variables rise together, but this does not prove that one causes the other — a third factor may be responsible. Always describe the relationship carefully without overstating the cause.</p>
`,

'g10i-08-4': `
<h2>Physical Fieldwork Enquiry</h2>
<div class="lesson-diagram" data-diagram="fieldwork-enquiry"><p class="diagram-caption">The geographical enquiry process</p></div>
<p>For a physical investigation — such as a river or coast study — you must understand the whole enquiry process, from forming a question to evaluating your results.</p>

<h3>Question, Hypothesis and Risk Assessment</h3>
<p>Begin with a clear, testable <strong>hypothesis</strong> based on theory, e.g. 'river velocity increases downstream' (the Bradshaw model). Before going into the field, complete a <strong>risk assessment</strong>, identifying hazards such as deep water, slippery banks and cold weather, and the control measures to reduce them.</p>

<h3>Collecting Primary Data</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#0d9488;color:white">
    <th style="padding:8px;border:1px solid #ccc">Measurement</th>
    <th style="padding:8px;border:1px solid #ccc">Method</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Width and depth</td>
    <td style="padding:8px;border:1px solid #ccc">Tape measure across the channel; ruler at intervals</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Velocity</td>
    <td style="padding:8px;border:1px solid #ccc">Float method or flow meter</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Bed load</td>
    <td style="padding:8px;border:1px solid #ccc">Pebble size (ruler) and roundness (Powers' Index)</td>
  </tr>
</table>
<p>Use <strong>sampling</strong> — usually systematic (e.g. every 10 m, or at each break of slope for a beach profile) — because you cannot measure every point.</p>

<h3>Presentation, Analysis, Conclusion and Evaluation</h3>
<p>Present data with suitable graphs and maps, <strong>analyse</strong> trends and anomalies, then write a <strong>conclusion</strong> that returns to your hypothesis and links to theory. Finally, <strong>evaluate</strong> the reliability and accuracy of your data and suggest specific improvements.</p>

<h3>Worked Example</h3>
<p>Explain why you would take a risk assessment before a river study. [3 marks]</p>
<p>A risk assessment identifies <strong>hazards</strong> before fieldwork so they can be reduced. A river poses risks of <strong>drowning</strong> in deep or fast water and <strong>falling</strong> on slippery banks. By recording each hazard and its <strong>control measures</strong> — working in pairs, wearing wellies and carrying a phone — we keep everyone safe and can collect data responsibly.</p>

<h3>Common Mistake</h3>
<p>Students often describe the methods but forget to <strong>justify</strong> their choices. Explain why you sampled systematically, why you measured at several sites, and why a flow meter is more accurate than the float method. Justification, not just description, accesses the higher marks.</p>
`,

'g10i-08-5': `
<h2>Human Fieldwork Enquiry</h2>
<div class="lesson-diagram" data-diagram="correlation-types"><p class="diagram-caption">Scatter graphs help test relationships in human fieldwork</p></div>
<p>A human investigation — such as an environmental quality or quality-of-life study — follows the same enquiry process as physical fieldwork, but uses different methods and links to urban theory.</p>

<h3>Hypothesis and Methods</h3>
<p>Start with a testable <strong>hypothesis</strong> based on theory, e.g. 'environmental quality improves with distance from the city centre' (the Burgess model). Collect data using <strong>questionnaires</strong>, <strong>environmental quality surveys</strong> (scoring features on a bipolar scale), <strong>pedestrian/traffic counts</strong> and <strong>land-use mapping</strong>.</p>

<h3>Sampling Strategies</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#0d9488;color:white">
    <th style="padding:8px;border:1px solid #ccc">Method</th>
    <th style="padding:8px;border:1px solid #ccc">How it works</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Random</td>
    <td style="padding:8px;border:1px solid #ccc">Locations or people chosen by random numbers; avoids bias</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Systematic</td>
    <td style="padding:8px;border:1px solid #ccc">At regular intervals (e.g. every 5th person, every 100 m)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Stratified</td>
    <td style="padding:8px;border:1px solid #ccc">Proportional samples from each sub-group</td>
  </tr>
</table>

<h3>Presentation, Analysis, Conclusion and Evaluation</h3>
<p>Present data using bar charts, located charts on a map, or a <strong>scatter graph</strong> with a line of best fit. <strong>Analyse</strong> using TEA (Trend, Evidence, Anomaly), then <strong>conclude</strong> by returning to your hypothesis and linking to theory. <strong>Evaluate</strong> reliability, accuracy and bias, suggesting specific improvements.</p>

<h3>Worked Example</h3>
<p>Evaluate the reliability of an environmental quality survey. [6 marks]</p>
<p>An environmental quality survey scores features such as litter and greenery, but the scores are <strong>subjective</strong> — different people may judge the same site differently. Surveying at a single <strong>time of day</strong> may not be representative, as litter and noise vary. Reliability can be improved by asking <strong>more than one person</strong> to score each site and averaging the results, surveying at several times, and increasing the number of <strong>sites</strong>. Combining the survey with objective data such as <strong>traffic counts</strong> and census figures would give a fuller, more reliable picture.</p>

<h3>Common Mistake</h3>
<p>Students often forget that human data such as questionnaire responses and environmental quality scores can be <strong>biased or subjective</strong>. A strong evaluation recognises this and explains how repeating measurements, increasing the sample and standardising methods reduce the problem.</p>
`

});
