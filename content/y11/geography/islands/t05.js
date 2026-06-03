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
