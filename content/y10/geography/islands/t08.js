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
   back:"Appropriate data presentation makes patterns, trends and anomalies clear and easy to interpret.\n\nMatching technique to data type:\n• Bar charts — comparing categories (e.g. land use in different zones)\n• Line graphs — showing change over time (e.g. river discharge over a year)\n• Scatter graphs — showing relationships between two variables (e.g. distance from sea vs. temperature); add a best-fit line\n• Pie charts — showing proportions of a whole (e.g. employment sectors)\n• Histograms — showing continuous data in class intervals (e.g. pebble size distribution)\n• Choropleth maps — spatial distribution of values across areas\n• Proportional symbol maps — quantities at specific locations\n• GIS (Geographical Information Systems) — layering digital data to reveal spatial patterns\n\nPoor choices (e.g. using a pie chart for continuous data) obscure the information and lose marks in the exam. Always justify your choice.", difficulty:2, category:"skill"}
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
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'g10i-08-1': `
<h2>OS Maps &amp; Statistics</h2>
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
`

});
