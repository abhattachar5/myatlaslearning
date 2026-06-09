// content/y9/geography/islands/t08.js — Year 9 Geography Topic 8: Geographical Skills
// Islands g9i-08-1 .. g9i-08-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // g9i-08-1 — Maps & Grid References
  {id:"g9fc-08-1-1", islandId:"g9i-08-1", front:"How do you give a four-figure grid reference?",
   back:"A four-figure grid reference identifies a 1 km × 1 km grid square on an Ordnance Survey map.\n\nMethod:\n1. Find the grid square containing the feature.\n2. Read along the bottom of the map to find the easting (the vertical line on the LEFT side of the square).\n3. Read up the side of the map to find the northing (the horizontal line at the BOTTOM of the square).\n4. Write the easting first, then the northing.\n\nMemory aid: along the corridor, then up the stairs.\n\nExample: if the left line is 34 and the bottom line is 57, the four-figure grid reference is 3457.", difficulty:1, category:"process"},
  {id:"g9fc-08-1-2", islandId:"g9i-08-1", front:"How do you give a six-figure grid reference?",
   back:"A six-figure grid reference pinpoints a location to within 100 m × 100 m.\n\nMethod:\n1. Find the four-figure grid reference as normal (e.g. 3457).\n2. Imagine the grid square divided into 10 equal parts along the bottom and 10 up the side.\n3. Estimate how many tenths across the feature is (this is the third digit, inserted after the easting).\n4. Estimate how many tenths up the feature is (this is the sixth digit, inserted after the northing).\n\nExample: if the feature is 3 tenths across and 8 tenths up within square 3457, the six-figure grid reference is 343578.\n\nAlways write eastings before northings.", difficulty:2, category:"process"},
  {id:"g9fc-08-1-3", islandId:"g9i-08-1", front:"How do you measure distance on an Ordnance Survey map?",
   back:"Straight-line distance:\n1. Place the edge of a piece of paper between the two points.\n2. Mark each point on the paper.\n3. Place the paper along the scale bar at the bottom of the map.\n4. Read off the distance.\n\nOn a 1:50,000 map, 2 cm = 1 km.\nOn a 1:25,000 map, 4 cm = 1 km.\n\nActual (winding) distance:\n1. Use a piece of string to follow the route (e.g. along a road or river).\n2. Straighten the string and measure it against the scale bar.\n\nAlternatively, mark the route in small straight sections on paper, then measure the total.", difficulty:1, category:"process"},
  {id:"g9fc-08-1-4", islandId:"g9i-08-1", front:"What are the eight compass points and how are they used in geography?",
   back:"The eight compass points:\nNorth (N), North-East (NE), East (E), South-East (SE), South (S), South-West (SW), West (W), North-West (NW).\n\nUses in geography:\n• Describing the direction from one place to another (e.g. 'Leeds is north-east of Manchester')\n• Giving the direction of a river's flow\n• Describing prevailing wind direction\n• Interpreting Ordnance Survey maps (north is always at the top)\n\nFor more precise directions, compass bearings are used. A bearing is measured clockwise from north in degrees (0°–360°). For example, east = 090°, south = 180°.", difficulty:1, category:"concept"},
  {id:"g9fc-08-1-5", islandId:"g9i-08-1", front:"Name five common Ordnance Survey map symbols and what they represent.",
   back:"Common OS map symbols:\n\n1. Blue lines — rivers and streams\n2. Contour lines (thin brown lines) — lines joining points of equal height; close together = steep; far apart = gentle\n3. P inside a blue square — parking\n4. A cross (†) — church with a tower; a circle with a cross — church with a spire\n5. Green shading — woodland (coniferous = triangle pattern; deciduous = round pattern)\n\nOther useful symbols:\n• PH — public house\n• Mus — museum\n• Black dashed line — footpath\n• Trig point (blue triangle with a dot) — survey point marking a summit\n\nLearning key symbols is essential for the fieldwork and map skills sections of the GCSE exam.", difficulty:1, category:"definition"},

  // g9i-08-2 — Graphs, Data & Fieldwork
  {id:"g9fc-08-2-1", islandId:"g9i-08-2", front:"When should you use a bar chart, line graph, pie chart or scatter graph?",
   back:"Bar chart: comparing discrete (separate) categories.\nExample: rainfall totals for different months.\n\nLine graph: showing continuous data that changes over time.\nExample: temperature change during a day or year.\n\nPie chart: showing proportions (parts of a whole).\nExample: percentage of land used for farming, housing and industry.\n\nScatter graph: investigating the relationship (correlation) between two variables.\nExample: does distance from the CBD affect house prices?\n\nChoosing the correct graph is worth marks in the exam. Always label axes, include units and give a title.", difficulty:1, category:"concept"},
  {id:"g9fc-08-2-2", islandId:"g9i-08-2", front:"How do you calculate the mean, median, mode and range?",
   back:"Mean (average): add all values together and divide by the number of values.\nExample: 3, 5, 7, 9, 11 → total = 35 ÷ 5 = mean of 7.\n\nMedian (middle value): arrange values in order and find the middle one.\nExample: 3, 5, 7, 9, 11 → median = 7.\nIf there is an even number of values, the median is the mean of the two middle values.\n\nMode (most common): the value that appears most often.\nExample: 3, 5, 5, 7, 9 → mode = 5.\n\nRange (spread): subtract the smallest value from the largest.\nExample: 3, 5, 7, 9, 11 → range = 11 − 3 = 8.\n\nThe range shows how spread out the data is, but it is affected by outliers.", difficulty:1, category:"process"},
  {id:"g9fc-08-2-3", islandId:"g9i-08-2", front:"What is correlation on a scatter graph and what types are there?",
   back:"Correlation describes the relationship between two variables on a scatter graph.\n\nPositive correlation: as one variable increases, the other also increases.\nExample: as temperature rises, ice cream sales increase.\n\nNegative correlation: as one variable increases, the other decreases.\nExample: as distance from the city centre increases, land prices decrease.\n\nNo correlation: there is no clear relationship between the variables.\n\nA line of best fit is drawn through the middle of the points to show the general trend. Points far from the line are called anomalies (outliers).\n\nImportant: correlation does not prove causation — just because two things are linked does not mean one causes the other.", difficulty:2, category:"concept"},
  {id:"g9fc-08-2-4", islandId:"g9i-08-2", front:"Describe the stages of a geographical fieldwork enquiry.",
   back:"The enquiry cycle:\n\n1. Question — identify a geographical question or hypothesis to investigate.\n   Example: 'Does pebble size decrease with distance along the beach?'\n\n2. Data collection — choose appropriate primary methods (questionnaires, measurements, field sketches) and secondary sources (maps, census data, websites).\n\n3. Data presentation — display results using graphs, maps, tables or GIS.\n\n4. Data analysis — describe patterns and trends in the results.\n\n5. Conclusion — answer the original question and decide whether the hypothesis is supported.\n\n6. Evaluation — assess the reliability and accuracy of the data; suggest improvements.\n\nIn the GCSE exam, you must be able to describe, justify and evaluate every stage of your own fieldwork.", difficulty:2, category:"process"},
  {id:"g9fc-08-2-5", islandId:"g9i-08-2", front:"What is the difference between primary and secondary data in fieldwork?",
   back:"Primary data: information you collect yourself in the field.\nExamples:\n• Measuring river width and depth with a tape measure\n• Counting pedestrians along a transect\n• Conducting questionnaire surveys\n• Taking field sketches or photographs\n• Measuring wind speed with an anemometer\n\nSecondary data: information collected by someone else that you use in your investigation.\nExamples:\n• Ordnance Survey maps\n• Census data from the Office for National Statistics\n• Climate data from the Met Office\n• Satellite images and GIS data\n\nA strong investigation uses both primary and secondary data. Primary data is specific to your study but may have small sample sizes. Secondary data covers larger areas and longer time periods but may not match your exact location or date.", difficulty:1, category:"definition"},

  // g9i-08-3 — The Fieldwork Enquiry Process
  {id:"g9fc-08-3-1", islandId:"g9i-08-3", front:"What are the six stages of the geographical enquiry cycle?",
   back:"1. Question/hypothesis — decide what to investigate and form a clear, testable statement.\n   Example: 'Pebble size decreases with distance downstream.'\n\n2. Data collection — gather primary data (your own measurements) and secondary data (existing sources).\n\n3. Data presentation — display results using graphs, maps, tables or GIS.\n\n4. Data analysis — describe the patterns and trends, including any anomalies.\n\n5. Conclusion — answer the original question and state whether the hypothesis is supported.\n\n6. Evaluation — assess the reliability of the methods and suggest improvements.\n\nIt is called a 'cycle' because the conclusion often leads to new questions to investigate.", difficulty:1, category:"process"},
  {id:"g9fc-08-3-2", islandId:"g9i-08-3", front:"What is the difference between a question and a hypothesis in fieldwork?",
   back:"A geographical question sets out what you want to find out.\nExample: 'Does the quality of the environment change towards the city centre?'\n\nA hypothesis is a clear, testable statement (a prediction) that the data can support or reject.\nExample: 'Environmental quality decreases towards the city centre.'\n\nA good hypothesis:\n• Is based on geographical theory you already know\n• Can be measured with the data you will collect\n• Can be proved right or wrong (it is testable)\n\nAfter collecting and analysing data, your conclusion states whether the hypothesis is accepted or rejected.", difficulty:1, category:"concept"},
  {id:"g9fc-08-3-3", islandId:"g9i-08-3", front:"Explain the three main sampling methods used in fieldwork.",
   back:"Sampling means collecting data from a selection of points rather than every possible one, because measuring everything is impractical.\n\n1. Random sampling — points are chosen by chance (e.g. using random number coordinates). Avoids bias, but may miss important areas or cluster by accident.\n\n2. Systematic sampling — points are chosen at regular intervals (e.g. every 10 m along a transect). Gives even coverage and is easy to do, but may miss variation between intervals.\n\n3. Stratified sampling — the area is divided into groups (e.g. by land use) and samples are taken from each in proportion to its size. Ensures all groups are represented, but needs background information first.", difficulty:2, category:"concept"},
  {id:"g9fc-08-3-4", islandId:"g9i-08-3", front:"How do you present and analyse fieldwork data?",
   back:"Presentation — choose techniques that suit the data:\n• Bar charts for discrete categories\n• Line graphs for continuous data over time\n• Scatter graphs to show relationships between two variables\n• Located proportional symbols or choropleth maps to show spatial patterns\n\nAnalysis — describe what the presented data shows:\n• Identify the overall pattern or trend\n• Use specific figures from your data to support points\n• Point out any anomalies (results that do not fit) and suggest why they occurred\n• Link the findings back to your hypothesis\n\nGood analysis goes beyond describing — it begins to explain why the patterns exist.", difficulty:2, category:"process"},
  {id:"g9fc-08-3-5", islandId:"g9i-08-3", front:"Why is evaluation important and what should it include?",
   back:"Evaluation is the final stage of the enquiry. It judges how trustworthy your investigation was.\n\nIt should consider:\n• Reliability — would you get the same results if you repeated it? Larger samples are more reliable.\n• Accuracy — were the measurements precise, or were there errors (e.g. a tape measure not held tight)?\n• Limitations — small sample size, data collected at one time of day, weather affecting results.\n• Improvements — specific changes that would make the enquiry more robust (e.g. more sample sites, repeating on different days).\n\nA strong evaluation is honest about weaknesses and suggests realistic, specific improvements rather than vague ones.", difficulty:2, category:"evaluation"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "g9i-08-1": [
    {q:"When giving a grid reference, which number do you read first?",
     opts:["The northing (up the side of the map)","The easting (along the bottom of the map)","The altitude shown on the contour line","The scale bar number"], c:1,
     e:"You always read the easting first (the number along the bottom of the map, left to right) and then the northing (the number up the side, bottom to top). The memory aid is: 'along the corridor, then up the stairs.' This applies to both four-figure and six-figure grid references."},
    {q:"On a 1:50,000 OS map, how far apart are two points that measure 4 cm on the map?",
     opts:["500 m","1 km","2 km","4 km"], c:2,
     e:"On a 1:50,000 scale map, 1 cm on the map represents 50,000 cm (500 m) in real life. Therefore 2 cm = 1 km and 4 cm = 2 km. To convert: multiply the map distance in cm by 50,000, then convert to metres or kilometres as needed."},
    {q:"What do closely spaced contour lines on an OS map indicate?",
     opts:["A flat area with no slope","A steep slope or cliff","A river valley filled with water","An area of dense woodland"], c:1,
     e:"Contour lines join points of equal height above sea level. When contour lines are close together, the height changes rapidly over a short horizontal distance, indicating a steep slope. When they are widely spaced, the ground is gently sloping or flat. Cliff symbols may also be shown where the slope is near-vertical."},
    {q:"A bearing of 270° corresponds to which compass direction?",
     opts:["North","East","South","West"], c:3,
     e:"Bearings are measured clockwise from north. North = 000° (or 360°), East = 090°, South = 180°, West = 270°. A bearing of 270° therefore means due west. Bearings are always written as three figures — for example, north-east is 045°, not 45°."},
    {q:"What is the six-figure grid reference for a feature that is in grid square 2863 and is located 7 tenths across and 4 tenths up within that square?",
     opts:["287634","286374","287643","280630"], c:0,
     e:"Start with the four-figure grid reference: 2863. The feature is 7 tenths across, so the easting becomes 287. The feature is 4 tenths up, so the northing becomes 634. Combining these gives the six-figure grid reference 287634. Remember: eastings (across) first, then northings (up)."}
  ],
  "g9i-08-2": [
    {q:"Which type of graph is best for showing the relationship between two variables?",
     opts:["Pie chart","Bar chart","Scatter graph","Line graph"], c:2,
     e:"A scatter graph plots two variables against each other to investigate whether there is a correlation (relationship) between them. One variable is plotted on the x-axis and the other on the y-axis. A line of best fit can be drawn to show the general trend. Scatter graphs are commonly used in geographical fieldwork — for example, investigating whether pebble size changes with distance along a beach."},
    {q:"What is the median of the following data set: 12, 4, 8, 15, 6?",
     opts:["4","8","9","12"], c:1,
     e:"To find the median, arrange the values in ascending order: 4, 6, 8, 12, 15. The middle value is 8, so the median is 8. If there were an even number of values, you would calculate the mean of the two middle values. The median is useful because it is not affected by extreme values (outliers) the way the mean is."},
    {q:"What does a negative correlation on a scatter graph look like?",
     opts:["Points clustered randomly with no pattern","Points rising from bottom-left to top-right","Points falling from top-left to bottom-right","All points on a single horizontal line"], c:2,
     e:"A negative correlation means that as one variable increases, the other decreases. On a scatter graph, this is shown by points trending downward from top-left to bottom-right. For example, as distance from a city centre increases, land prices tend to decrease. A line of best fit drawn through the points would slope downward from left to right."},
    {q:"In a fieldwork enquiry, what is the purpose of the evaluation stage?",
     opts:["To collect data in the field","To draw graphs and maps from the results","To assess the reliability and accuracy of the data and suggest improvements","To choose which topic to investigate"], c:2,
     e:"The evaluation stage is the final part of the enquiry cycle. It involves critically assessing how reliable and accurate your data collection methods were, identifying any sources of error, discussing the limitations of your sample size or timing, and suggesting specific improvements that could make the investigation more robust if it were repeated."},
    {q:"Which of these is an example of primary data?",
     opts:["Census statistics from the Office for National Statistics","Climate records from the Met Office website","River width measurements you took in the field using a tape measure","A map downloaded from an online atlas"], c:2,
     e:"Primary data is information you collect yourself, first-hand, in the field. Measuring river width with a tape measure is a primary data collection method. All the other options — census data, climate records and downloaded maps — are secondary data because they were collected by someone else. A strong investigation uses a combination of both primary and secondary data."}
  ],
  "g9i-08-3": [
    {q:"Which is the correct order of the geographical enquiry cycle?",
     opts:["Conclusion → question → data collection → evaluation","Question → data collection → presentation → analysis → conclusion → evaluation","Data collection → question → evaluation → conclusion","Presentation → analysis → question → data collection"], c:1,
     e:"The enquiry cycle runs: form a question or hypothesis, collect data, present it, analyse it, reach a conclusion, then evaluate the investigation. It is described as a cycle because the conclusion and evaluation often raise new questions that could be investigated next."},
    {q:"Which of these is a good geographical hypothesis?",
     opts:["What is the weather like today?","Pebble size decreases with distance downstream","Rivers are interesting to study","Why do people live in cities?"], c:1,
     e:"A hypothesis is a clear, testable statement (a prediction) that data can support or reject. 'Pebble size decreases with distance downstream' can be measured and proved right or wrong. The others are open questions or opinions, not testable statements, so they cannot be accepted or rejected by data."},
    {q:"What is systematic sampling?",
     opts:["Choosing sample points completely at random","Choosing sample points at regular intervals, such as every 10 metres","Dividing the area into groups and sampling each in proportion","Only sampling the points that look most interesting"], c:1,
     e:"Systematic sampling selects points at regular, fixed intervals — for example, taking a measurement every 10 m along a transect. It gives even coverage and is simple to carry out, although it can miss variation that occurs between the chosen intervals. Random sampling uses chance, and stratified sampling divides the area into proportional groups."},
    {q:"Why do geographers use sampling rather than measuring every single point?",
     opts:["Because sampling always gives perfect results","Because measuring every possible point would be impractical and too time-consuming","Because data from a sample is never reliable","Because sampling avoids the need for any analysis"], c:1,
     e:"It is usually impossible or impractical to measure every point in a study area — there is not enough time or resources. Sampling collects data from a manageable selection of points that, if chosen well, represents the whole area. The trade-off is that a sample may not perfectly capture every variation, which is why sample size and method matter."},
    {q:"What is the main purpose of the evaluation stage of an enquiry?",
     opts:["To collect more primary data","To assess the reliability and accuracy of the methods and suggest improvements","To decide on the original hypothesis","To present the data as graphs"], c:1,
     e:"Evaluation critically reviews how trustworthy the investigation was: whether the results are reliable (repeatable), whether measurements were accurate, what the limitations were (e.g. small sample, one-off timing), and how the enquiry could be improved. Honest, specific evaluation is what separates a strong investigation from a weak one."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'g9i-08-1': `
<h2>Maps &amp; Grid References</h2>
<div class="lesson-diagram" data-diagram="grid-reference"><p class="diagram-caption">Reading grid references on an OS map</p></div>
<p>Map reading is a fundamental geographical skill. The GCSE exam expects you to read Ordnance Survey (OS) maps confidently — giving grid references, measuring distances, interpreting symbols and describing the physical and human landscape shown on the map.</p>

<h3>Four-Figure Grid References</h3>
<p>A four-figure grid reference identifies a 1 km × 1 km grid square.</p>
<ol>
  <li>Find the grid square containing the feature.</li>
  <li>Read the <strong>easting</strong> — the number along the bottom of the map (the vertical line on the LEFT side of the square).</li>
  <li>Read the <strong>northing</strong> — the number up the side of the map (the horizontal line at the BOTTOM of the square).</li>
  <li>Write the easting first, then the northing.</li>
</ol>
<p>Memory aid: <em>along the corridor, then up the stairs</em>.</p>

<h3>Six-Figure Grid References</h3>
<p>A six-figure grid reference pinpoints a location to within 100 m × 100 m. After finding the four-figure reference, imagine dividing the grid square into tenths. Estimate how many tenths across (for the easting) and how many tenths up (for the northing) the feature is, and add these as third and sixth digits.</p>
<div style="background:#f0fdfa;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> A church is in grid square 3457. It is 6 tenths across and 2 tenths up.<br>
  Six-figure grid reference: <strong>346572</strong>
</div>

<h3>Scale and Distance</h3>
<p>On a <strong>1:50,000</strong> OS map, 2 cm = 1 km. On a <strong>1:25,000</strong> map, 4 cm = 1 km. For straight-line distance, use paper against the scale bar. For winding routes, use string or mark small sections on paper.</p>

<h3>Contour Lines</h3>
<p>Contour lines join points of equal height above sea level. <strong>Close together</strong> = steep slope. <strong>Far apart</strong> = gentle slope or flat land. Contour lines forming a V pointing upstream indicate a river valley.</p>

<h3>Worked Example</h3>
<p>Give the six-figure grid reference for a feature in square 5128 that is 3 tenths across and 9 tenths up.</p>
<p>Start with the four-figure reference: <strong>5128</strong>. The easting is 51 + 3 tenths = <strong>513</strong>. The northing is 28 + 9 tenths = <strong>289</strong>. The six-figure grid reference is <strong>513289</strong>. Remember: easting first (along the corridor), then northing (up the stairs).</p>

<h3>Common Mistake</h3>
<p>The most common error is reading the northing before the easting — giving the reference the wrong way round. Always remember: <strong>eastings first, northings second</strong>. Another frequent mistake is confusing the 1:50,000 scale (2 cm = 1 km) with the 1:25,000 scale (4 cm = 1 km). Check which map scale you are using before calculating distance.</p>
`,

'g9i-08-2': `
<h2>Graphs, Data &amp; Fieldwork</h2>
<div class="lesson-diagram" data-diagram="correlation-types"><p class="diagram-caption">Types of correlation on a scatter graph</p></div>
<p>Geographical skills are not just tested on their own — they appear throughout the GCSE exam in every topic. Being confident with graphs, statistics and fieldwork methods will improve your marks across all papers.</p>

<h3>Choosing the Right Graph</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#0d9488;color:white">
    <th style="padding:8px;border:1px solid #ccc">Graph type</th>
    <th style="padding:8px;border:1px solid #ccc">Best for</th>
    <th style="padding:8px;border:1px solid #ccc">Example</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Bar chart</td>
    <td style="padding:8px;border:1px solid #ccc">Comparing discrete categories</td>
    <td style="padding:8px;border:1px solid #ccc">Monthly rainfall totals</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Line graph</td>
    <td style="padding:8px;border:1px solid #ccc">Continuous data over time</td>
    <td style="padding:8px;border:1px solid #ccc">River discharge during a storm</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Pie chart</td>
    <td style="padding:8px;border:1px solid #ccc">Proportions (parts of a whole)</td>
    <td style="padding:8px;border:1px solid #ccc">Land use in a town</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Scatter graph</td>
    <td style="padding:8px;border:1px solid #ccc">Relationship between two variables</td>
    <td style="padding:8px;border:1px solid #ccc">Pebble size vs distance along a beach</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Climate graph</td>
    <td style="padding:8px;border:1px solid #ccc">Temperature and rainfall together</td>
    <td style="padding:8px;border:1px solid #ccc">Describing a climate zone</td>
  </tr>
</table>

<h3>Basic Statistics</h3>
<p>You need to be able to calculate the <strong>mean</strong> (add all values and divide by the number of values), <strong>median</strong> (middle value when ordered), <strong>mode</strong> (most common value) and <strong>range</strong> (largest minus smallest). The mean is the most commonly used but can be distorted by outliers; the median is more reliable when data is skewed.</p>

<h3>Scatter Graphs and Correlation</h3>
<p><strong>Positive correlation</strong>: both variables increase together. <strong>Negative correlation</strong>: one increases while the other decreases. <strong>No correlation</strong>: no clear pattern. A <strong>line of best fit</strong> shows the general trend. Remember: correlation does not prove causation.</p>

<h3>The Fieldwork Enquiry</h3>
<p>The GCSE exam requires you to describe, justify and evaluate your own fieldwork. The enquiry cycle is: <strong>question → data collection → presentation → analysis → conclusion → evaluation</strong>. Always use both <strong>primary data</strong> (collected yourself) and <strong>secondary data</strong> (from existing sources).</p>

<h3>Worked Example</h3>
<p>Explain why you should use a scatter graph rather than a bar chart to investigate whether pebble size changes with distance along a beach. (3 marks)</p>
<p>A <strong>scatter graph</strong> is appropriate because the investigation involves two <strong>continuous variables</strong> — pebble size (mm) and distance along the beach (m). Plotting one on each axis allows you to see whether there is a <strong>correlation</strong> (relationship) between them. A bar chart is designed for <strong>discrete categories</strong> and would not show the trend or allow a line of best fit to be drawn.</p>

<h3>Common Mistake</h3>
<p>Students often forget to <strong>label axes</strong> on graphs (including units), add a <strong>title</strong>, or use an appropriate <strong>scale</strong>. These are all worth marks in the exam. When drawing a line of best fit on a scatter graph, it should pass through the middle of the data points — it does not need to touch every point and should not be drawn as a zig-zag connecting them.</p>
`,

'g9i-08-3': `
<h2>The Fieldwork Enquiry Process</h2>
<div class="lesson-diagram" data-diagram="fieldwork-enquiry"><p class="diagram-caption">The six stages of the geographical enquiry cycle</p></div>
<p>Fieldwork is where geography comes alive. Rather than reading about a place, you go out and investigate it yourself. The GCSE exam expects you to understand the full <strong>enquiry cycle</strong> and to be able to justify and evaluate every decision you made during your own fieldwork.</p>

<h3>Forming a Question and Hypothesis</h3>
<p>Every enquiry starts with a clear <strong>question</strong> (what you want to find out) and often a <strong>hypothesis</strong> — a testable prediction based on geographical theory. For example: <em>'Pebble size decreases with distance downstream.'</em> A good hypothesis can be measured and proved right or wrong.</p>

<h3>Collecting Data and Sampling</h3>
<p>You collect <strong>primary data</strong> (your own measurements) and <strong>secondary data</strong> (existing sources such as maps and census data). Because you cannot measure everything, you use <strong>sampling</strong>:</p>
<ul>
  <li><strong>Random</strong> — points chosen by chance; avoids bias but may cluster.</li>
  <li><strong>Systematic</strong> — points at regular intervals (e.g. every 10 m); even coverage but may miss variation.</li>
  <li><strong>Stratified</strong> — the area is split into groups and sampled in proportion; ensures every group is represented.</li>
</ul>

<h3>Presenting, Analysing and Concluding</h3>
<p><strong>Presentation</strong> displays results using the most suitable graphs, maps or tables. <strong>Analysis</strong> describes the patterns and trends, quotes specific figures and explains any <strong>anomalies</strong>. The <strong>conclusion</strong> answers the original question and states whether the hypothesis is accepted or rejected.</p>

<h3>Evaluating the Enquiry</h3>
<p>Finally, <strong>evaluation</strong> judges how reliable and accurate the investigation was, identifies <strong>limitations</strong> (such as a small sample or one-off timing) and suggests realistic <strong>improvements</strong>.</p>

<h3>Worked Example</h3>
<p>A student measures pebble size at 8 points along a beach using systematic sampling. Suggest one limitation and one improvement. (4 marks)</p>
<p>One <strong>limitation</strong> is the small <strong>sample size</strong>: only 8 points may not represent the whole beach, so the results could be unreliable and any anomaly has a large effect on the trend. An <strong>improvement</strong> would be to take measurements at more sample sites (e.g. every 5 m instead of every 20 m) and to repeat the survey on a different day, making the data more <strong>reliable</strong> and reducing the impact of any single unusual reading.</p>

<h3>Common Mistake</h3>
<p>Students often write vague evaluations such as "it could have been better." Always be <strong>specific</strong>: name the exact limitation (e.g. small sample, measured at low tide only) and give a precise, realistic improvement (e.g. more sample sites, repeat at high and low tide). Vague comments earn few marks.</p>
`

});
