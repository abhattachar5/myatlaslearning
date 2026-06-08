// content/y11/geography/islands/t05.js — Year 11 Geography Topic 5: Fieldwork Skills
// Islands g11i-05-1 .. g11i-05-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // g11i-05-1 — Enquiry Questions & Data Collection
  {id:"g11fc-05-1-1", islandId:"g11i-05-1", front:"What makes a good geographical enquiry question?",
   back:"A good enquiry question should be:\n\n• Geographical — focused on a place, process or spatial pattern.\n• Testable — possible to investigate using data collection.\n• Specific — clear enough to investigate within the time and resources available.\n• Linked to theory — connected to geographical concepts studied in class.\n\nExamples:\n✓ 'Does the quality of the environment decrease with distance from the town centre?'\n✓ 'How does river velocity change downstream?'\n✗ 'Is our town nice?' — too vague and subjective.\n✗ 'What causes earthquakes?' — not testable through fieldwork.\n\nA hypothesis is a testable prediction linked to the question, e.g. 'Environmental quality decreases with distance from the CBD because of increased traffic and litter.'", difficulty:1, category:"definition"},
  {id:"g11fc-05-1-2", islandId:"g11i-05-1", front:"What are the main sampling strategies used in geographical fieldwork?",
   back:"Three main sampling strategies:\n\n1. Random sampling — data collection points are chosen randomly (e.g. using a random number generator to select grid references). Removes bias but may miss key areas.\n\n2. Systematic sampling — data is collected at regular intervals (e.g. every 50 metres along a transect). Ensures even coverage but may miss variation between points.\n\n3. Stratified sampling — the study area is divided into sub-groups (strata) and samples are taken from each in proportion to its size. Ensures all areas are represented but requires prior knowledge of the area.\n\nExam tip: always justify your choice — explain why it is appropriate for your specific enquiry and how it reduces bias.", difficulty:2, category:"concept"},
  {id:"g11fc-05-1-3", islandId:"g11i-05-1", front:"What is the difference between primary and secondary data?",
   back:"Primary data — data you collect yourself in the field:\n• River measurements (velocity, width, depth)\n• Questionnaires and interviews\n• Environmental quality surveys\n• Field sketches and photographs\n• Traffic counts\n\nSecondary data — data collected by someone else:\n• Census data and population statistics\n• Ordnance Survey maps\n• Climate data from the Met Office\n• Historical photographs\n• Government reports and academic studies\n\nStrengths of primary: specific to your enquiry; you control quality.\nWeaknesses of primary: time-consuming; limited sample size.\nStrengths of secondary: large datasets; covers long time periods.\nWeaknesses of secondary: may not match your exact needs; could be outdated.", difficulty:1, category:"definition"},
  {id:"g11fc-05-1-4", islandId:"g11i-05-1", front:"What factors affect the reliability of fieldwork data?",
   back:"Factors affecting reliability:\n\n• Sample size — too few measurements may not represent the whole area. Larger samples are more reliable but take longer.\n• Timing — data collected at one time of day or in one season may not be representative (e.g. traffic counts at 2 pm vs rush hour).\n• Equipment accuracy — poorly calibrated or inappropriate equipment produces unreliable readings.\n• Human error — mistakes in reading scales, recording data or conducting surveys.\n• Bias — unintentional selection of sites that support the hypothesis; leading questions in surveys.\n• Weather conditions — fieldwork in extreme weather may affect both data quality and safety.\n\nTo improve reliability: increase sample size, repeat measurements, use standardised methods, and collect data at multiple times.", difficulty:2, category:"concept"},
  {id:"g11fc-05-1-5", islandId:"g11i-05-1", front:"How do you measure river velocity using a flow meter or the float method?",
   back:"Flow meter method:\n1. Place the flow meter at 60% depth from the surface (this represents average velocity).\n2. Face the impeller upstream.\n3. Record the reading in metres per second.\n4. Take three readings across the channel width and calculate the mean.\n\nFloat method (less accurate):\n1. Measure a 10-metre stretch of river.\n2. Place a float (e.g. an orange — it floats just below the surface, reducing wind effect) at the upstream end.\n3. Time how long it takes to travel the 10 metres.\n4. Calculate: velocity = distance ÷ time.\n5. Repeat three times and calculate the mean.\n6. Multiply by 0.85 to correct for surface velocity being faster than the overall average.\n\nThe float method is simpler but less precise. Always explain the method and its limitations in your write-up.", difficulty:2, category:"calculation"},

  // g11i-05-2 — Presentation, Analysis & Evaluation
  {id:"g11fc-05-2-1", islandId:"g11i-05-2", front:"What data presentation techniques should you use in fieldwork?",
   back:"Choose the technique that best suits your data:\n\n• Bar charts — comparing categories (e.g. land use types in different zones).\n• Line graphs — showing change over time or distance (e.g. river velocity downstream).\n• Scatter graphs — showing the relationship between two variables (e.g. distance from CBD vs environmental quality score).\n• Pie charts — showing proportions of a whole (e.g. % of different land uses).\n• Choropleth maps — shading areas by value (e.g. population density by ward).\n• Isoline maps — lines connecting equal values (e.g. noise levels around a road).\n• Located bar/pie charts — placed on a map to show spatial variation.\n• Photographs and field sketches — annotated to highlight key features.\n\nAlways label axes, include a title, and add a key where needed. In the exam, justify why your chosen technique is appropriate for the data.", difficulty:2, category:"concept"},
  {id:"g11fc-05-2-2", islandId:"g11i-05-2", front:"How do you calculate Spearman's rank correlation coefficient?",
   back:"Spearman's rank is used to test whether two sets of data are correlated.\n\nSteps:\n1. Rank both data sets from highest to lowest (or lowest to highest — be consistent).\n2. Calculate d (difference between ranks) for each pair.\n3. Square each d to get d².\n4. Sum all d² values.\n5. Apply the formula: rs = 1 − (6Σd² ÷ (n³ − n))\n   where n = number of data pairs.\n\nInterpretation:\n• rs = +1 → perfect positive correlation\n• rs = −1 → perfect negative correlation\n• rs = 0 → no correlation\n\nCompare your result to a critical values table at the 0.05 significance level to determine whether the correlation is statistically significant.\n\nExam tip: you may be asked to calculate rs or to interpret a given value — practise both.", difficulty:3, category:"calculation"},
  {id:"g11fc-05-2-3", islandId:"g11i-05-2", front:"How do you evaluate the reliability of fieldwork conclusions?",
   back:"When evaluating conclusions, consider:\n\n• Do the results support or reject the hypothesis? State this clearly.\n• How reliable is the data? Discuss sample size, timing, equipment and potential bias.\n• Are there anomalies? Identify any unusual results and suggest why they occurred.\n• Could the conclusions be different with more data? Suggest improvements.\n\nSuggested improvements:\n• Increase sample size — more measurements at each site.\n• Visit at different times — morning, afternoon, weekend vs weekday.\n• Use more accurate equipment — flow meters instead of floats.\n• Extend the study area — include more sites along the river or transect.\n• Triangulate — use secondary data to confirm primary findings.\n\nA strong evaluation acknowledges weaknesses honestly and suggests specific, practical improvements rather than vague statements like 'collect more data'.", difficulty:2, category:"concept"},
  {id:"g11fc-05-2-4", islandId:"g11i-05-2", front:"What is the difference between describing and analysing data in fieldwork?",
   back:"Description — stating what the data shows:\n• 'River velocity increases from 0.3 m/s at Site 1 to 1.2 m/s at Site 5.'\n• 'The bar chart shows that residential land use is the most common type.'\n\nAnalysis — explaining why the data shows this pattern:\n• 'Velocity increases downstream because the channel becomes wider and deeper, reducing friction. The hydraulic radius increases, making flow more efficient.'\n• 'Residential land use dominates because the study area is a suburban zone where housing demand is high.'\n\nExam tip: description alone scores low marks. Analysis connects data to geographical theory and explains causes. Always move beyond 'what' to 'why'.\n\nHigher-level analysis also considers:\n• Whether patterns match theoretical expectations (e.g. the Bradshaw model).\n• Whether anomalies can be explained.\n• Links to wider geographical concepts.", difficulty:2, category:"concept"},
  {id:"g11fc-05-2-5", islandId:"g11i-05-2", front:"What are the advantages and disadvantages of using a questionnaire in fieldwork?",
   back:"Advantages:\n• Collects qualitative data (opinions, perceptions) that cannot be measured with instruments.\n• Can gather data from a large number of people quickly.\n• Standardised questions allow easy comparison between respondents.\n• Can include both closed questions (for statistical analysis) and open questions (for depth).\n\nDisadvantages:\n• Responses may be biased — people may give socially desirable answers rather than honest ones.\n• Non-response — some people refuse to participate, creating bias in the sample.\n• Leading questions can influence responses and reduce validity.\n• Language barriers may affect understanding.\n• Small sample sizes may not be representative of the wider population.\n\nTo improve reliability: use a mix of open and closed questions, avoid leading language, sample at different times and locations, and aim for at least 30 responses.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "g11i-05-1": [
    {q:"Which of the following is the best geographical enquiry question?",
     opts:["Is our school nice?","Does environmental quality decrease with distance from the town centre?","What is the weather like today?","Why do volcanoes erupt?"], c:1,
     e:"'Does environmental quality decrease with distance from the town centre?' is the best enquiry question because it is geographical (about spatial patterns), testable (environmental quality can be measured using surveys), specific (focused on one town) and linked to theory (urban models predict changes with distance from the CBD). 'Is our school nice?' is too vague; weather today is not a fieldwork enquiry; volcanoes cannot be investigated through local fieldwork."},
    {q:"What is systematic sampling?",
     opts:["Choosing data collection points completely at random","Collecting data at regular intervals along a transect or across a study area","Only collecting data from locations that are easy to access","Asking the teacher to choose the sampling locations"], c:1,
     e:"Systematic sampling involves collecting data at regular, pre-determined intervals — for example, every 50 metres along a river or every 10th house on a street. This ensures even coverage of the study area. It contrasts with random sampling (points chosen by chance) and stratified sampling (area divided into sub-groups with proportional samples from each). Convenience sampling (easy-to-access locations) introduces bias and is not a recognised strategy."},
    {q:"Which of the following is an example of secondary data?",
     opts:["A river velocity measurement you took with a flow meter","A questionnaire you conducted with shoppers","Census population data from the Office for National Statistics","A field sketch you drew on site"], c:2,
     e:"Secondary data is data collected by someone else — census data from the ONS was gathered by the government, not by you. River measurements, questionnaires and field sketches are all primary data because you collected them yourself in the field. Secondary data is useful for providing context, historical comparison and large-scale patterns that primary fieldwork cannot capture."},
    {q:"Why is it important to take repeat measurements at each fieldwork site?",
     opts:["It wastes time and reduces the number of sites you can visit","Repeating measurements and calculating the mean improves reliability by reducing the impact of anomalies and human error","Repeat measurements are only needed in laboratory experiments","Taking one measurement is always accurate enough for GCSE fieldwork"], c:1,
     e:"Taking repeat measurements at each site and calculating the mean improves reliability because it reduces the impact of one-off errors or anomalies. A single measurement might be affected by a gust of wind, an equipment glitch or a recording mistake. Three or more readings give a more representative average. This is a fundamental principle of scientific method that applies equally to geographical fieldwork."},
    {q:"How should you measure the depth of a river at a fieldwork site?",
     opts:["Guess the depth by looking at the water","Use a metre ruler placed vertically on the riverbed at regular intervals across the channel, reading the depth where the water surface meets the ruler","Drop a stone and time how long it takes to reach the bottom","Measure only at the deepest point and ignore the rest"], c:1,
     e:"River depth should be measured using a metre ruler or ranging pole placed vertically on the riverbed. Measurements are taken at regular intervals across the channel width (e.g. every 20 cm) to build a cross-section profile. The ruler must sit on the bed, and the reading is taken at the water surface. Multiple points are needed because depth varies across the channel. Guessing or measuring only one point would be unreliable."}
  ],
  "g11i-05-2": [
    {q:"Which data presentation technique is most appropriate for showing the relationship between two continuous variables?",
     opts:["Bar chart","Pie chart","Scatter graph","Choropleth map"], c:2,
     e:"A scatter graph plots one variable on the x-axis and another on the y-axis, with each data point as a dot. This reveals whether a positive, negative or no correlation exists between the two variables. A line of best fit can be added. Bar charts compare categories, pie charts show proportions, and choropleth maps show spatial patterns — none of these are designed to show relationships between two continuous variables."},
    {q:"A Spearman's rank correlation coefficient of rs = −0.87 indicates what?",
     opts:["A strong positive correlation — both variables increase together","No correlation — the variables are unrelated","A strong negative correlation — as one variable increases, the other decreases","The data is invalid and cannot be interpreted"], c:2,
     e:"An rs value of −0.87 indicates a strong negative correlation — as one variable increases, the other tends to decrease. The closer to −1, the stronger the negative relationship. For example, environmental quality score might decrease as distance from a river increases. The result should be compared to critical values at the 0.05 significance level to confirm whether it is statistically significant."},
    {q:"What is the difference between describing data and analysing data?",
     opts:["There is no difference — they mean the same thing","Describing states what the data shows; analysing explains why the pattern exists by linking it to geographical theory","Describing involves statistics; analysing involves drawing graphs","Analysing comes before describing in the fieldwork process"], c:1,
     e:"Description states the pattern in the data (e.g. 'velocity increases downstream from 0.3 to 1.2 m/s'). Analysis goes further by explaining why (e.g. 'this is because the channel becomes wider and deeper downstream, increasing the hydraulic radius and reducing friction'). In the GCSE exam, analysis scores higher marks because it demonstrates geographical understanding, not just observation."},
    {q:"Which of the following is the best suggestion for improving the reliability of a river fieldwork enquiry?",
     opts:["Only visit the river once on a sunny day","Increase the number of measurement sites and take repeat readings at each, then calculate mean values","Use different equipment at each site to add variety","Avoid measuring any sites that look unusual"], c:1,
     e:"Increasing the number of sites gives better spatial coverage, while taking repeat readings and calculating means reduces the impact of anomalies and human error. This is the most practical and effective improvement. Visiting only once limits representativeness; using different equipment reduces comparability; avoiding unusual sites introduces bias and misses potentially important data."},
    {q:"Why might a questionnaire produce biased data in a fieldwork enquiry?",
     opts:["Questionnaires always produce perfectly reliable data","Respondents may give socially desirable rather than honest answers, leading questions may influence responses, and the sample may not be representative","Questionnaires take too long to analyse","Bias only affects primary data collected with scientific instruments"], c:1,
     e:"Questionnaires are vulnerable to several forms of bias: social desirability bias (people answer how they think they should rather than honestly), leading questions (wording that pushes towards a particular answer), non-response bias (certain groups refuse to participate, skewing the sample) and timing bias (surveying at one time may not reflect the whole population). These can be reduced by careful question design, anonymous responses, and sampling at different times and locations."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'g11i-05-1': `
<h2>Enquiry Questions & Data Collection</h2>
<div class="lesson-diagram" data-diagram="fieldwork-enquiry"><p class="diagram-caption">The geographical enquiry process</p></div>
<p>Geographical fieldwork is a compulsory part of AQA GCSE Geography. You must complete two fieldwork enquiries — one physical and one human — and be prepared to answer questions about your own fieldwork and unfamiliar fieldwork scenarios in the Paper 3 examination.</p>

<h3>Designing an Enquiry</h3>
<p>Every fieldwork enquiry begins with a clear question and hypothesis:</p>
<ul>
  <li><strong>Enquiry question</strong> — must be geographical, testable, specific and linked to theory. Example: 'How does river channel shape change downstream?'</li>
  <li><strong>Hypothesis</strong> — a testable prediction. Example: 'The river channel becomes wider and shallower with distance downstream, as predicted by the Bradshaw model.'</li>
</ul>

<h3>Sampling Strategies</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#0d9488;color:white">
    <th style="padding:8px;border:1px solid #ccc">Strategy</th>
    <th style="padding:8px;border:1px solid #ccc">Method</th>
    <th style="padding:8px;border:1px solid #ccc">Advantage</th>
    <th style="padding:8px;border:1px solid #ccc">Disadvantage</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Random</td>
    <td style="padding:8px;border:1px solid #ccc">Points chosen by random number generator</td>
    <td style="padding:8px;border:1px solid #ccc">Removes selection bias</td>
    <td style="padding:8px;border:1px solid #ccc">May miss key areas</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Systematic</td>
    <td style="padding:8px;border:1px solid #ccc">Data at regular intervals (e.g. every 50 m)</td>
    <td style="padding:8px;border:1px solid #ccc">Even coverage</td>
    <td style="padding:8px;border:1px solid #ccc">May miss variation between points</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Stratified</td>
    <td style="padding:8px;border:1px solid #ccc">Area divided into sub-groups; proportional samples from each</td>
    <td style="padding:8px;border:1px solid #ccc">All sub-groups represented</td>
    <td style="padding:8px;border:1px solid #ccc">Requires prior knowledge</td>
  </tr>
</table>

<h3>Data Collection Methods</h3>
<p><strong>Primary data</strong> (collected by you): river measurements, questionnaires, environmental quality surveys, traffic counts, field sketches.</p>
<p><strong>Secondary data</strong> (collected by others): census data, OS maps, Met Office records, historical photographs, government reports.</p>
<p>Always consider reliability — sample size, timing, equipment accuracy and potential bias all affect data quality.</p>

<h3>Worked Example</h3>
<p>Justify the use of systematic sampling for a river fieldwork enquiry. [3 marks]</p>
<p>Systematic sampling was chosen because measurements were taken at <strong>regular 200-metre intervals</strong> along the river from source to mouth. This ensured <strong>even spatial coverage</strong> of the entire river course, making it possible to identify how channel characteristics change downstream. It also made the fieldwork <strong>easier to plan and manage</strong> within the time available, as sites were predetermined on an OS map before visiting the river.</p>

<h3>Common Mistake</h3>
<p>Students often describe their sampling strategy without justifying it. Simply saying 'we used systematic sampling' scores no marks. You must explain <strong>why</strong> it was appropriate for your specific enquiry and how it helped ensure representative data.</p>
`,

'g11i-05-2': `
<h2>Presentation, Analysis & Evaluation</h2>
<div class="lesson-diagram" data-diagram="correlation-types"><p class="diagram-caption">Types of correlation on a scatter graph</p></div>
<p>Once data has been collected, it must be presented clearly, analysed to identify patterns, and evaluated to assess reliability. These skills are tested in Paper 3 and account for a significant proportion of the marks.</p>

<h3>Data Presentation</h3>
<p>Choose the technique that best suits your data type:</p>
<ul>
  <li><strong>Scatter graphs</strong> — for testing relationships between two variables (e.g. distance downstream vs velocity).</li>
  <li><strong>Bar charts</strong> — for comparing categories or discrete data (e.g. land use types).</li>
  <li><strong>Line graphs</strong> — for showing change over distance or time.</li>
  <li><strong>Choropleth maps</strong> — for showing spatial variation in a variable across an area.</li>
  <li><strong>Field sketches</strong> — annotated drawings highlighting key geographical features.</li>
</ul>
<p>All graphs need a clear title, labelled axes with units, and a key if applicable.</p>

<h3>Statistical Analysis: Spearman's Rank</h3>
<p>Spearman's rank correlation (rs) tests whether two ranked data sets are correlated:</p>
<p style="background:#f0fdfa;padding:1em;border-radius:8px;margin:1em 0;font-weight:bold">rs = 1 − (6 × Σd²) ÷ (n³ − n)</p>
<p>Where d = difference between ranks, n = number of pairs. The result ranges from +1 (perfect positive correlation) to −1 (perfect negative correlation). Compare to critical values at the 0.05 significance level to determine whether the correlation is statistically significant.</p>

<h3>Evaluation</h3>
<p>A strong evaluation:</p>
<ul>
  <li>States whether results support or reject the hypothesis.</li>
  <li>Discusses data reliability — sample size, timing, equipment, bias.</li>
  <li>Identifies and explains anomalies.</li>
  <li>Suggests specific, practical improvements (not just 'collect more data').</li>
</ul>

<h3>Worked Example</h3>
<p>Evaluate the reliability of your fieldwork data. [6 marks]</p>
<p>The data was <strong>reasonably reliable</strong> because measurements were taken at 8 sites along the river using systematic sampling at 200-metre intervals, ensuring even coverage. Three repeat readings were taken at each site and the <strong>mean calculated</strong>, reducing the impact of anomalies. However, reliability was limited by the <strong>small sample size</strong> — 8 sites may not fully represent the 1.6 km river course. Data was collected on a <strong>single day</strong> in June after a dry spell, so results may not reflect conditions at other times of year or after heavy rainfall. The float method used for velocity is <strong>less accurate</strong> than a digital flow meter because surface velocity is faster than average channel velocity. To improve, I would increase the number of sites to at least 15, use a <strong>flow meter</strong> for accuracy, and repeat the enquiry in different seasons for comparison.</p>

<h3>Common Mistake</h3>
<p>Students often give vague evaluation points such as 'we could have collected more data'. Instead, be specific: state exactly what you would change, why it was a limitation, and how the improvement would make results more reliable. For example: 'Increasing from 8 to 15 sites would provide better spatial coverage of the entire channel.'</p>
`

});

// ── FLASHCARDS (g11i-05-3 .. g11i-05-5) ─────────────────────────────────────
FLASHCARDS.push(
  // g11i-05-3 — Physical Fieldwork Enquiry
  {id:"g11fc-05-3-1", islandId:"g11i-05-3", front:"What is a suitable hypothesis and risk assessment for a river fieldwork enquiry?",
   back:"Enquiry question: 'How do river characteristics change downstream along the River Holford?'\n\nHypothesis: 'River width, depth and velocity all increase with distance downstream, as predicted by the Bradshaw model.'\n\nRisk assessment (identify hazard → likelihood → control):\n• Slipping on wet banks → likely → wear wellingtons, work in pairs.\n• Cold water / deep pools → possible → avoid sites deeper than knee height, never wade alone.\n• Fast flow after rain → possible → check the forecast, postpone in flood conditions.\n• Weil's disease from river water → unlikely but serious → cover cuts, wash hands, no eating by the river.\n\nA written risk assessment is expected for any physical fieldwork. It shows you planned for safety and links directly to the methods you chose.", difficulty:2, category:"application"},
  {id:"g11fc-05-3-2", islandId:"g11i-05-3", front:"How do you measure river width, depth and velocity in the field?",
   back:"Width: stretch a tape measure from one bank to the other at the water's edge; record in metres.\n\nDepth: place a metre ruler vertically on the bed at regular intervals across the channel (e.g. every 20 cm); read the depth at the water surface; calculate the mean.\n\nVelocity: use a flow meter at 60% depth facing upstream, or the float method — time an orange over a 10 m stretch, repeat three times, take the mean, then multiply by 0.85 to correct for faster surface flow.\n\nCross-sectional area = mean width × mean depth.\nDischarge = cross-sectional area × velocity (in cumecs, m³/s).\n\nTake repeat readings at each site and calculate means to improve reliability.", difficulty:2, category:"calculation"},
  {id:"g11fc-05-3-3", islandId:"g11i-05-3", front:"How would you measure a beach profile and sediment size in a coastal enquiry?",
   back:"Beach profile (to investigate gradient):\n1. Work up the beach from the water's edge to the back.\n2. At each break of slope, place two ranging poles a fixed distance apart.\n3. Use a clinometer to measure the angle of slope between them.\n4. Record the distance and angle for each segment; plot as a profile.\n\nSediment size (to investigate sorting):\n1. At each point, collect a sample of pebbles (e.g. pick up the first 10 your finger touches — random).\n2. Measure the long axis of each with callipers in millimetres.\n3. Calculate the mean size at each point along the transect.\n4. Optionally measure roundness using Power's index.\n\nThis lets you test hypotheses such as 'pebble size decreases along the beach in the direction of longshore drift'.", difficulty:2, category:"application"},
  {id:"g11fc-05-3-4", islandId:"g11i-05-3", front:"How should physical fieldwork data be presented and analysed?",
   back:"Presentation:\n• River cross-sections — drawn to scale to show channel shape at each site.\n• Line graphs — width, depth or velocity against distance downstream.\n• Scatter graphs — to test relationships (e.g. distance vs velocity) with a line of best fit.\n• Located bar charts on a map — to show spatial variation along the river or beach.\n\nAnalysis (move from 'what' to 'why'):\n• Describe the trend: 'Velocity rose from 0.3 m/s at Site 1 to 1.1 m/s at Site 6.'\n• Explain it: 'Velocity increases downstream because the channel deepens, the hydraulic radius increases and friction falls, so flow becomes more efficient — matching the Bradshaw model.'\n• Identify anomalies and suggest reasons (e.g. a weir or tributary).\n\nStatistical test: Spearman's rank can confirm whether a relationship is significant.", difficulty:2, category:"concept"},
  {id:"g11fc-05-3-5", islandId:"g11i-05-3", front:"How do you write a conclusion and evaluation for a physical fieldwork enquiry?",
   back:"Conclusion — answer the question using evidence:\n'The data supports the hypothesis. Width increased from 1.2 m to 4.8 m and velocity from 0.3 to 1.1 m/s downstream, matching the Bradshaw model. Depth showed a weaker trend, partly rejecting the prediction.'\n\nEvaluation — judge the enquiry honestly:\n• Reliability: 6 sites over 3 km is limited coverage; data from one dry day in June may not be typical.\n• Accuracy: the float method is less precise than a flow meter; human error in reading the metre ruler.\n• Anomalies: one shallow site behind a weir distorted the depth trend.\n• Improvements: add more sites, use a digital flow meter, repeat in different seasons, take more repeats per site.\n\nStrong evaluations are specific and link each weakness to a practical improvement.", difficulty:3, category:"concept"},

  // g11i-05-4 — Human Fieldwork Enquiry
  {id:"g11fc-05-4-1", islandId:"g11i-05-4", front:"What is a suitable hypothesis for a human (urban) fieldwork enquiry?",
   back:"Enquiry question: 'How does environmental quality change with distance from the city centre?'\n\nHypothesis: 'Environmental quality improves with distance from the CBD because of reduced traffic, less litter and more green space in the suburbs.'\n\nThis is a good human-geography hypothesis because it is:\n• Geographical — about a spatial pattern across the city.\n• Testable — environmental quality can be scored with a survey.\n• Specific — focused on one transect through one city.\n• Linked to theory — connects to urban land-use models (e.g. Burgess) which predict zones changing outward from the centre.\n\nA second variable (e.g. pedestrian counts or land use) can be added to deepen the analysis.", difficulty:2, category:"application"},
  {id:"g11fc-05-4-2", islandId:"g11i-05-4", front:"What primary methods are used in human fieldwork?",
   back:"Common human-geography methods:\n• Questionnaires — collect opinions and perceptions (closed questions for statistics, open for depth).\n• Environmental quality surveys (EQS) — score factors such as litter, noise, greenery and building condition on a bipolar scale (e.g. −2 to +2).\n• Pedestrian counts — tally people passing a point in a fixed time (e.g. 5 minutes) to measure footfall.\n• Traffic counts — tally vehicles by type passing a point in a fixed time.\n• Land-use mapping — record the use of each building (retail, residential, office) onto a base map, often with colour coding.\n• Environmental field sketches and photographs — annotated to capture qualitative evidence.\n\nUsing several methods (triangulation) gives a fuller, more reliable picture.", difficulty:2, category:"concept"},
  {id:"g11fc-05-4-3", islandId:"g11i-05-4", front:"Compare random, systematic and stratified sampling in a human enquiry.",
   back:"Random sampling — survey respondents or sites chosen by chance (e.g. random grid references, every nth person decided by a random number). Removes bias but may cluster or miss areas.\n\nSystematic sampling — data at regular intervals (e.g. an EQS every 200 m along a transect, or every 10th shopper). Ensures even coverage but can miss variation between points.\n\nStratified sampling — divide the population or area into groups (strata) and sample each in proportion (e.g. survey age groups in proportion to the local population, or sample each land-use zone). Ensures all groups are represented but needs prior knowledge.\n\nExam tip: always justify the strategy for your specific enquiry and explain how it reduces bias and improves representativeness.", difficulty:2, category:"concept"},
  {id:"g11fc-05-4-4", islandId:"g11i-05-4", front:"How is human fieldwork data presented and analysed?",
   back:"Presentation:\n• Scatter graphs — distance from CBD vs environmental quality score, with a line of best fit.\n• Located (proportional) bar or pie charts on a base map — to show traffic or land use at each site.\n• Choropleth maps — shade areas by EQS value or pedestrian density.\n• Bar charts — compare questionnaire responses between sites.\n\nAnalysis:\n• Describe: 'Mean EQS rose from −3 in the CBD to +7 in the suburbs.'\n• Explain: 'Quality improves outward because traffic and litter concentrate in the busy CBD, while suburbs have more gardens and green space, matching concentric urban models.'\n• Test significance with Spearman's rank if comparing two ranked variables.\n• Identify anomalies (e.g. a regenerated waterfront with a high score near the centre) and explain them.", difficulty:2, category:"concept"},
  {id:"g11fc-05-4-5", islandId:"g11i-05-4", front:"How do you conclude and evaluate a human fieldwork enquiry?",
   back:"Conclusion — answer using evidence:\n'The data supports the hypothesis. Mean environmental quality scores rose from −3 in the CBD to +7 in the outer suburbs, and pedestrian counts fell with distance, both consistent with urban land-use theory.'\n\nEvaluation — judge reliability and validity:\n• Sample size — only 6 sites and 30 questionnaires; a larger sample would be more representative.\n• Subjectivity — EQS scores depend on the observer's judgement; different people may score differently (low inter-observer reliability).\n• Timing — counts taken on one weekday at midday may miss rush-hour or weekend patterns.\n• Bias — non-response and leading questions can skew questionnaire results.\n• Improvements — more sites, repeat at different times, have two people score the EQS and average, pilot the questionnaire to remove leading questions.", difficulty:3, category:"concept"},

  // g11i-05-5 — Unfamiliar Fieldwork (Paper 3)
  {id:"g11fc-05-5-1", islandId:"g11i-05-5", front:"What is Section B of AQA Paper 3 and what skills does it test?",
   back:"AQA Paper 3 ('Geographical applications') has two sections:\n• Section A — the pre-released Issue Evaluation resource booklet.\n• Section B — Fieldwork.\n\nSection B is split between:\n• Questions on YOUR OWN two fieldwork enquiries (one physical, one human).\n• Questions on an UNFAMILIAR fieldwork context you have never seen, presented through figures, tables, maps and method descriptions.\n\nThe unfamiliar questions test whether you can apply fieldwork skills generally, not just recall your trip. You may be asked to interpret unseen data, suggest suitable methods or improvements, and evaluate the effectiveness and reliability of someone else's enquiry.", difficulty:1, category:"definition"},
  {id:"g11fc-05-5-2", islandId:"g11i-05-5", front:"How should you interpret unseen methods and data in an unfamiliar enquiry?",
   back:"A structured approach:\n1. Read the enquiry question or hypothesis first — everything must link back to it.\n2. Study each resource (table, graph, map, photo) and note what variable it shows and its units.\n3. Describe the pattern using figures from the resource (quote values and use data).\n4. Check the presentation method is appropriate for that data type (e.g. scatter graph for a relationship).\n5. Consider whether the method shown would actually answer the question — and how it could mislead.\n\nExam tip: use the resource. Markers reward answers that quote specific data from the provided figures rather than vague general statements.", difficulty:2, category:"application"},
  {id:"g11fc-05-5-3", islandId:"g11i-05-5", front:"How do you suggest a suitable method or improvement for an unfamiliar enquiry?",
   back:"When asked to suggest a method or improvement, always tie it to the enquiry's aim and justify it:\n• Name the method precisely (e.g. 'a systematic pedestrian count at 5-minute intervals').\n• State what data it would collect (e.g. footfall at each site).\n• Explain how that helps answer the question (e.g. 'to test whether footfall falls with distance from the CBD').\n• Add a reliability point (e.g. 'repeat at three times of day to reduce timing bias').\n\nFor improvements, identify a weakness in the given enquiry first, then propose a specific fix and explain the benefit. Avoid generic answers like 'collect more data' — say exactly what, where and why.", difficulty:2, category:"application"},
  {id:"g11fc-05-5-4", islandId:"g11i-05-5", front:"How do you evaluate the reliability of someone else's enquiry?",
   back:"Use the same criteria you would apply to your own work:\n• Sample size — were enough sites/people sampled to be representative?\n• Sampling strategy — was it random, systematic or stratified, and was it appropriate? Any bias?\n• Timing — was data collected once, or at varied times to capture change?\n• Equipment and accuracy — were instruments suitable and used correctly? Any subjectivity (e.g. EQS scoring)?\n• Presentation — does the chosen technique suit the data and show the pattern honestly?\n• Conclusion — is it actually supported by the data, or overstated?\n\nA good evaluation gives a balanced judgement: state strengths and weaknesses, then reach an overall conclusion on how much the results can be trusted.", difficulty:3, category:"concept"},
  {id:"g11fc-05-5-5", islandId:"g11i-05-5", front:"How do you interpret a scatter graph and correlation in an unfamiliar enquiry?",
   back:"Scatter graphs are common in Paper 3 because they show relationships between two variables.\n\nReading the correlation:\n• Positive correlation — points rise from bottom-left to top-right; as one variable increases, so does the other.\n• Negative correlation — points fall from top-left to bottom-right; as one increases, the other decreases.\n• No correlation — points are scattered with no clear trend.\n\nA line of best fit shows the overall direction; the closer points lie to it, the stronger the relationship. Spearman's rank gives a value from +1 to −1 to quantify strength, checked against critical values at the 0.05 level.\n\nBeware: correlation does not prove causation. Always identify anomalies (points far from the line) and suggest why they occur.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS (g11i-05-3 .. g11i-05-5) ──────────────────────────
Object.assign(QUESTIONS, {
  "g11i-05-3": [
    {q:"Which of the following is the most appropriate hypothesis for a physical river fieldwork enquiry?",
     opts:["The river is very pretty in summer","River width, depth and velocity increase with distance downstream, as predicted by the Bradshaw model","People like living near the river","The river should be cleaned up by the council"], c:1,
     e:"A physical fieldwork hypothesis must be a testable prediction about a measurable physical process linked to theory. 'Width, depth and velocity increase downstream' can be tested with field measurements and connects to the Bradshaw model. The other options are subjective opinions or value judgements that cannot be tested with primary physical data."},
    {q:"When measuring river velocity with the float method, why is the result multiplied by 0.85?",
     opts:["To convert metres into centimetres","To correct for the fact that surface velocity is faster than the average velocity of the whole channel","Because the float always travels too slowly","To account for the width of the river"], c:1,
     e:"Surface water flows faster than water lower in the channel, where friction with the bed and banks slows it down. A float measures surface velocity, so multiplying by roughly 0.85 gives a closer estimate of the mean velocity of the whole channel. This makes the discharge calculation more accurate. It is a standard correction and shows awareness of the method's limitation."},
    {q:"A risk assessment for river fieldwork should include which of the following?",
     opts:["Only the equipment list","The hazards, their likelihood, and the control measures to reduce them","A list of nice places to have lunch","Only the names of the students involved"], c:1,
     e:"A risk assessment identifies hazards (e.g. slipping, deep water, fast flow, Weil's disease), judges how likely each is, and states control measures to reduce the risk (e.g. work in pairs, check the forecast, cover cuts). This demonstrates that safety was planned and links directly to the methods chosen. An equipment or lunch list is not a risk assessment."},
    {q:"In a beach profile survey, what is measured between each pair of ranging poles?",
     opts:["The colour of the sand","The angle of slope using a clinometer, plus the distance between the poles","The number of people on the beach","The temperature of the sea"], c:1,
     e:"A beach profile investigates how gradient changes up the beach. At each break of slope, two ranging poles are placed a set distance apart and a clinometer measures the angle of slope between them. Recording the angle and distance for each segment allows the profile to be plotted to scale. Sand colour, crowd numbers and sea temperature are not part of a beach profile."},
    {q:"Which statement is the best evaluation point for a physical fieldwork enquiry?",
     opts:["The fieldwork was perfect and had no limitations","Data was collected at only 6 sites on one dry day, so increasing the number of sites and repeating in different seasons would improve reliability","We could have collected more data","The river was too cold to measure properly"], c:1,
     e:"A strong evaluation identifies a specific limitation (only 6 sites, one dry day), explains why it weakens the results (limited coverage, untypical conditions) and proposes a concrete improvement (more sites, repeat in different seasons). Claiming there were no limitations is naive; 'collect more data' is too vague; and a one-line complaint about the cold does not assess reliability."}
  ],
  "g11i-05-4": [
    {q:"Which method is most suitable for measuring how pleasant a street environment is in a human fieldwork enquiry?",
     opts:["A river velocity flow meter","An environmental quality survey scoring factors such as litter, noise and greenery on a bipolar scale","A clinometer and ranging poles","A rain gauge"], c:1,
     e:"An environmental quality survey (EQS) scores factors such as litter, noise, building condition and greenery on a bipolar scale (e.g. −2 to +2), producing a total quality score for each site. This directly measures how pleasant an environment is. Flow meters, clinometers and rain gauges are physical-geography instruments unsuited to assessing urban environmental quality."},
    {q:"In stratified sampling for a human enquiry, the study population is:",
     opts:["Chosen completely at random with no structure","Divided into sub-groups (strata) and sampled in proportion to each group's size","Sampled only where it is easiest to reach people","Sampled at fixed regular intervals along a line"], c:1,
     e:"Stratified sampling divides the population or area into sub-groups (strata) — such as age groups or land-use zones — and samples each in proportion to its size, so every group is fairly represented. Random sampling has no such structure, convenience sampling is biased towards easy locations, and sampling at fixed intervals describes systematic sampling."},
    {q:"Which presentation technique best shows the relationship between distance from the CBD and environmental quality score?",
     opts:["A pie chart","A scatter graph with a line of best fit","A single annotated photograph","A flow-line map"], c:1,
     e:"A scatter graph plots distance from the CBD on one axis and environmental quality score on the other, with a line of best fit revealing whether quality rises or falls with distance. This is the standard way to show a relationship between two continuous variables. A pie chart shows proportions, a photograph is qualitative, and a flow-line map shows movement, none of which display this relationship."},
    {q:"Why might an environmental quality survey produce unreliable data?",
     opts:["It uses expensive equipment that often breaks","Scores depend on the observer's personal judgement, so different people may score the same site differently","It can only be used at night","It measures river discharge inaccurately"], c:1,
     e:"An EQS relies on the observer judging factors such as 'litter' or 'attractiveness' on a scale, which is subjective. Different observers may give the same site different scores (low inter-observer reliability). This can be reduced by having two people score independently and averaging, and by clearly defining what each score means. EQS needs no costly equipment and is unrelated to river discharge."},
    {q:"What is the best way to reduce bias when carrying out questionnaires in a town centre?",
     opts:["Only ask people who look friendly","Sample at different times and locations, avoid leading questions, and aim for a reasonable sample size","Ask the same person several times","Only survey your friends and family"], c:1,
     e:"Bias is reduced by sampling at different times and places (so the sample is more representative), wording questions neutrally (so they do not lead respondents), and gathering enough responses (at least about 30) to be representative. Choosing only friendly-looking people, repeating one respondent, or surveying friends and family all introduce strong selection bias."}
  ],
  "g11i-05-5": [
    {q:"In AQA Paper 3 Section B, the 'unfamiliar fieldwork' questions require you to:",
     opts:["Describe only the fieldwork trip you went on yourself","Apply fieldwork skills to a context you have not seen before, using the provided resources","Memorise a textbook case study","Write about a country's physical geography"], c:1,
     e:"The unfamiliar fieldwork questions present an enquiry you have never carried out, using figures, tables, maps and method descriptions. You must apply general fieldwork skills — interpreting data, suggesting methods or improvements, and evaluating reliability — using the resources given. They are not about recalling your own trip, a memorised case study, or a country's physical geography."},
    {q:"When suggesting a data-collection method for an unfamiliar enquiry, the best answers always:",
     opts:["Name any method, with no need to explain it","Name a specific method and explain how the data it collects would help answer the enquiry question","List as many methods as possible without detail","Copy the method already shown in the resource"], c:1,
     e:"A strong answer names a precise method (e.g. 'a systematic pedestrian count at 5-minute intervals'), states what data it collects, and explains how that helps answer the specific enquiry question, ideally adding a reliability point. Simply naming a method, listing many without justification, or repeating the existing method does not show applied understanding and scores poorly."},
    {q:"A scatter graph in an unfamiliar enquiry shows points falling from top-left to bottom-right. This indicates:",
     opts:["A positive correlation","A negative correlation — as one variable increases, the other decreases","No correlation at all","That the data must be wrong"], c:1,
     e:"Points falling from top-left to bottom-right show a negative correlation: as one variable increases, the other decreases. A positive correlation rises from bottom-left to top-right, and no correlation shows scattered points with no trend. A clear downward pattern is a valid result, not an error, though correlation does not prove causation."},
    {q:"Which is the most useful evaluation of another student's enquiry that sampled only 5 sites on a single afternoon?",
     opts:["The enquiry was excellent and cannot be improved","The small sample of 5 sites and data from one afternoon limit reliability; more sites and repeats at different times would make the results more representative","The student should have chosen a different topic","Five sites is always enough for any enquiry"], c:1,
     e:"A good evaluation identifies the specific weaknesses (only 5 sites; one afternoon limits how representative the data is) and proposes concrete improvements (more sites, repeat at different times) with a reason (greater representativeness and reliability). Praising it as flawless, criticising the topic choice, or claiming five sites is always enough are not valid, evidence-based evaluations."},
    {q:"When using a resource table in an unfamiliar fieldwork question, you should:",
     opts:["Ignore the data and write from general knowledge","Quote specific figures and units from the table to support your description of the pattern","Only describe the layout of the table","Assume the data is unreliable and dismiss it"], c:1,
     e:"Markers reward answers that use the resource: quote specific figures and units from the table and refer to them when describing the pattern. Writing from general knowledge ignores the data, describing only the layout misses the point, and dismissing the data without justification is not evaluation. Always anchor your answer in the evidence provided."}
  ]
});

// ── LESSONS (g11i-05-3 .. g11i-05-5) ────────────────────────────────────────
Object.assign(LESSONS, {

'g11i-05-3': `
<h2>Physical Fieldwork Enquiry</h2>
<div class="lesson-diagram" data-diagram="fieldwork-enquiry"><p class="diagram-caption">Stages of a physical fieldwork enquiry, from question to evaluation</p></div>
<p>For your physical enquiry you investigate a natural environment — most often a river or a coast. This lesson works through a complete river investigation so you can see how every stage links together, from the question to the evaluation.</p>

<h3>Question, Hypothesis and Risk Assessment</h3>
<p>Our enquiry question is: 'How do river characteristics change downstream along the River Holford?' The hypothesis is: 'Width, depth and velocity increase with distance downstream, as predicted by the Bradshaw model.' Before going out, a written risk assessment lists each hazard, its likelihood and a control: slipping on wet banks (work in pairs, wear wellingtons), deep or fast water (avoid sites above knee height, check the forecast) and Weil's disease (cover cuts, wash hands).</p>

<h3>Primary Methods and Sampling</h3>
<p>At six sites, chosen by <strong>systematic sampling</strong> every 500 metres downstream, we measured: width (tape across the channel), depth (metre ruler every 20 cm across the channel, then a mean) and velocity (a flow meter at 60% depth, three repeats). Cross-sectional area equals mean width multiplied by mean depth, and discharge equals area multiplied by velocity. Repeats at each site reduce the effect of anomalies.</p>

<h3>Presentation, Analysis and Conclusion</h3>
<p>Cross-sections were drawn to scale, and scatter graphs plotted distance against width, depth and velocity with lines of best fit. The data showed velocity rising from 0.3 m/s to 1.1 m/s downstream. We explain this: the channel deepens, the hydraulic radius increases, friction falls and flow becomes more efficient. We conclude the hypothesis is largely supported, though depth showed a weaker trend.</p>

<h3>Worked Example</h3>
<p>Explain how you ensured your river data was reliable. [4 marks]</p>
<p>Reliability was improved by taking <strong>three repeat readings</strong> of velocity at each site and calculating the <strong>mean</strong>, which reduced the effect of anomalies such as a sudden gust. <strong>Systematic sampling</strong> every 500 m gave even coverage of the river course, and a <strong>flow meter</strong> gave more accurate velocity readings than the float method, so the results better represent how the channel changes downstream.</p>

<h3>Common Mistake</h3>
<p>Students often record measurements but forget to explain <strong>why</strong> the pattern occurs. Stating that velocity increases downstream is only description. To reach higher marks you must analyse the cause, linking it to friction, hydraulic radius and the Bradshaw model.</p>
`,

'g11i-05-4': `
<h2>Human Fieldwork Enquiry</h2>
<div class="lesson-diagram" data-diagram="fieldwork-enquiry"><p class="diagram-caption">Stages of a human fieldwork enquiry, from hypothesis to evaluation</p></div>
<p>Your human enquiry investigates people and places — for example quality of life, environmental quality or land use in a town. This lesson follows a worked urban investigation so you can see how each stage connects.</p>

<h3>Question, Hypothesis and Methods</h3>
<p>Our question is: 'How does environmental quality change with distance from the city centre?' The hypothesis is: 'Environmental quality improves with distance from the CBD because traffic and litter fall while green space increases.' We collected data using an <strong>environmental quality survey</strong> (scoring litter, noise, greenery and building condition from −2 to +2), <strong>pedestrian counts</strong> (people passing in five minutes), a <strong>questionnaire</strong> on residents' perceptions, and <strong>land-use mapping</strong> onto a base map.</p>

<h3>Sampling Strategies</h3>
<p>Sites were selected by <strong>systematic sampling</strong> every 500 m along a transect from the CBD outwards, giving even coverage. For the questionnaire we used <strong>stratified sampling</strong>, surveying age groups in proportion to the local population so all groups were represented. Random sampling could also remove bias but risks clustering. Each strategy must be justified for the enquiry.</p>

<h3>Presentation, Analysis and Conclusion</h3>
<p>We plotted a scatter graph of distance against environmental quality score with a line of best fit, and located bar charts on a map for traffic. Mean scores rose from −3 in the CBD to +7 in the suburbs. We explain this: traffic and litter concentrate in the busy centre, while suburbs have gardens and green space, matching concentric urban models. We conclude the hypothesis is supported.</p>

<h3>Worked Example</h3>
<p>Justify the use of stratified sampling for your questionnaire. [3 marks]</p>
<p>Stratified sampling was used because the local population was <strong>divided into age groups</strong> and each was surveyed in <strong>proportion to its size</strong>. This ensured that younger and older residents were <strong>fairly represented</strong>, so the perceptions collected reflected the whole community rather than being biased towards one group, improving the validity of the results.</p>

<h3>Common Mistake</h3>
<p>Students often treat environmental quality scores as fully objective. Because scoring depends on personal judgement, different observers may rate the same site differently. Always acknowledge this <strong>subjectivity</strong> in your evaluation and suggest having two people score independently and averaging the results.</p>
`,

'g11i-05-5': `
<h2>Unfamiliar Fieldwork (Paper 3)</h2>
<div class="lesson-diagram" data-diagram="correlation-types"><p class="diagram-caption">Positive, negative and no correlation on a scatter graph</p></div>
<p>In AQA Paper 3 Section B you answer questions on your own fieldwork and on an <strong>unfamiliar</strong> enquiry you have never carried out. The unfamiliar questions present figures, tables, maps and method descriptions, and test whether you can apply fieldwork skills generally rather than just recall your trip.</p>

<h3>Interpreting Unseen Methods and Data</h3>
<p>Always read the enquiry question first, then study each resource and note the variable and its units. Describe patterns using <strong>specific figures quoted from the resource</strong>, and check whether the presentation method suits the data — for example a scatter graph for a relationship between two variables. Marks are awarded for using the evidence given, not for general knowledge.</p>

<h3>Suggesting Methods and Improvements</h3>
<p>When asked to suggest a method, name it precisely (e.g. 'a systematic pedestrian count every five minutes'), state the data it collects, and explain how it helps answer the enquiry question, adding a reliability point such as repeating at different times. For improvements, first identify a weakness in the given enquiry, then propose a specific fix and explain its benefit.</p>

<h3>Evaluating Others' Enquiries</h3>
<p>Judge an unfamiliar enquiry using the same criteria as your own: sample size, sampling strategy, timing, equipment and accuracy, and whether the conclusion is supported by the data. Reach a <strong>balanced judgement</strong> — state strengths and weaknesses, then conclude how far the results can be trusted. Remember that a correlation on a scatter graph does not prove causation.</p>

<h3>Worked Example</h3>
<p>A student sampled environmental quality at only 4 sites on one afternoon. Evaluate the reliability of their enquiry. [4 marks]</p>
<p>The enquiry has <strong>low reliability</strong> because only <strong>4 sites</strong> were sampled, which is too few to represent the whole transect, and data from a <strong>single afternoon</strong> may not be typical of other times. Environmental quality scoring is also <strong>subjective</strong>. Reliability would improve by sampling <strong>more sites</strong>, repeating at <strong>different times</strong>, and having two observers score independently and averaging.</p>

<h3>Common Mistake</h3>
<p>Students often answer unfamiliar questions from memory of their own trip instead of using the resource provided. You must refer to the <strong>figures, tables and methods given</strong>, quoting data from them, because the marks reward applying skills to the unseen context, not describing your own fieldwork.</p>
`

});
