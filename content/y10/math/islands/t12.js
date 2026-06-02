// content/y10/math/islands/t12.js — Year 10 Maths Topic 12: Statistics: Averages & Diagrams
// Islands m10i-12-1 .. m10i-12-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-12-1 — Averages & Range
  {id:"m10fc-12-1-1", islandId:"m10i-12-1", front:"Define mean, median, mode and range.",
   back:"Mean = total ÷ how many. Median = middle value (in order). Mode = most common. Range = highest − lowest.", difficulty:1, category:"definition"},
  {id:"m10fc-12-1-2", islandId:"m10i-12-1", front:"Find the mean of 4, 7, 9, 4, 6.",
   back:"6\n\nTotal = 30, and there are 5 values, so mean = 30 ÷ 5 = 6.", difficulty:1, category:"calculation"},
  {id:"m10fc-12-1-3", islandId:"m10i-12-1", front:"Find the median of 8, 3, 5, 9, 4.",
   back:"5\n\nIn order: 3, 4, 5, 8, 9. The middle value is 5.", difficulty:2, category:"calculation"},
  {id:"m10fc-12-1-4", islandId:"m10i-12-1", front:"How do you find the median of an even set of numbers?",
   back:"Take the mean of the two middle values.\n\nFor 2, 5, 8, 11 the middle two are 5 and 8, so median = (5 + 8)/2 = 6.5.", difficulty:2, category:"concept"},
  {id:"m10fc-12-1-5", islandId:"m10i-12-1", front:"How do you find the mean from a frequency table?",
   back:"Multiply each value by its frequency, add these up, then divide by the total frequency.\n\nΣ(value × frequency) ÷ Σfrequency.", difficulty:3, category:"concept"},
  {id:"m10fc-12-1-6", islandId:"m10i-12-1", front:"Why is the mean affected by an outlier but the median is not?",
   back:"The mean uses every value, so one very large/small value pulls it. The median only depends on the middle position.", difficulty:3, category:"application"},

  // m10i-12-2 — Charts & Frequency Diagrams
  {id:"m10fc-12-2-1", islandId:"m10i-12-2", front:"What does a bar chart show?",
   back:"Frequencies for categories using bars of equal width.\n\nThe height of each bar is the frequency.", difficulty:1, category:"definition"},
  {id:"m10fc-12-2-2", islandId:"m10i-12-2", front:"How do you find a pie-chart angle for a category?",
   back:"Angle = (frequency ÷ total) × 360°.\n\nEach category's share of 360° matches its share of the data.", difficulty:2, category:"concept"},
  {id:"m10fc-12-2-3", islandId:"m10i-12-2", front:"In a survey of 40 people, 10 chose football. What is the pie-chart angle?",
   back:"90°\n\n(10 ÷ 40) × 360° = 0.25 × 360° = 90°.", difficulty:2, category:"calculation"},
  {id:"m10fc-12-2-4", islandId:"m10i-12-2", front:"What must all the pie-chart angles add up to?",
   back:"360°.\n\nThe whole circle represents the whole data set.", difficulty:1, category:"concept"},
  {id:"m10fc-12-2-5", islandId:"m10i-12-2", front:"How do you compare two distributions?",
   back:"Compare an average (e.g. mean or median) AND a measure of spread (range).\n\nOne tells you the typical value, the other how consistent the data is.", difficulty:3, category:"application"},
  {id:"m10fc-12-2-6", islandId:"m10i-12-2", front:"A pie chart shows 120° for 'bus' out of 30 students. How many took the bus?",
   back:"10\n\n120° is 120/360 = 1/3 of the students: 1/3 × 30 = 10.", difficulty:3, category:"application"},

  // m10i-12-3 — Scatter Graphs & Correlation
  {id:"m10fc-12-3-1", islandId:"m10i-12-3", front:"What is correlation?",
   back:"A relationship between two variables shown by a scatter graph.\n\nPositive: both rise together. Negative: one rises as the other falls. None: no pattern.", difficulty:2, category:"definition"},
  {id:"m10fc-12-3-2", islandId:"m10i-12-3", front:"What does positive correlation look like?",
   back:"Points trending UPWARDS from bottom-left to top-right.\n\nAs one variable increases, so does the other.", difficulty:2, category:"concept"},
  {id:"m10fc-12-3-3", islandId:"m10i-12-3", front:"What is a line of best fit?",
   back:"A straight line drawn to follow the trend of the points, with roughly equal numbers each side.\n\nIt is used to estimate values.", difficulty:2, category:"concept"},
  {id:"m10fc-12-3-4", islandId:"m10i-12-3", front:"How do you use a line of best fit to estimate a value?",
   back:"Read across from the known value to the line, then down (or up) to the other axis.", difficulty:2, category:"application"},
  {id:"m10fc-12-3-5", islandId:"m10i-12-3", front:"What is an outlier on a scatter graph?",
   back:"A point that does not follow the trend of the others.\n\nIt sits well away from the line of best fit.", difficulty:2, category:"concept"},
  {id:"m10fc-12-3-6", islandId:"m10i-12-3", front:"Why is estimating beyond the data (extrapolation) unreliable?",
   back:"Because the trend may not continue outside the range you measured.\n\nReading within the data (interpolation) is safer.", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m10i-12-1": [
    {q:"Find the mean of 2, 5, 5, 8.", opts:["5","6","4.5","20"], c:0,
     e:"Total 20 ÷ 4 = 5."},
    {q:"Find the median of 7, 2, 9, 4, 6.", opts:["6","7","9","5.6"], c:0,
     e:"In order: 2, 4, 6, 7, 9 — the middle value is 6."},
    {q:"Find the mode of 3, 6, 3, 9, 3, 6.", opts:["3","6","9","5"], c:0,
     e:"3 appears three times, more than any other value."},
    {q:"Find the range of 12, 4, 9, 15, 7.", opts:["11","15","4","19"], c:0,
     e:"Range = highest − lowest = 15 − 4 = 11."},
    {q:"Find the median of 4, 8, 2, 10.", opts:["6","8","5","7"], c:0,
     e:"In order: 2, 4, 8, 10. Median = (4 + 8)/2 = 6."}
  ],
  "m10i-12-2": [
    {q:"In 60 people, 15 chose tea. The pie-chart angle is:", opts:["90°","45°","120°","15°"], c:0,
     e:"(15 ÷ 60) × 360° = 0.25 × 360° = 90°."},
    {q:"All pie-chart angles add up to:", opts:["360°","180°","100°","720°"], c:0,
     e:"The full circle represents all the data: 360°."},
    {q:"A bar chart shows frequencies using:", opts:["Bars of equal width","Slices of a circle","A single line","Dots"], c:0,
     e:"Bars of equal width with height = frequency."},
    {q:"A pie chart shows 90° for 'walk' from 24 pupils. How many walk?", opts:["6","9","12","3"], c:0,
     e:"90° is 1/4 of 360°, so 1/4 × 24 = 6."},
    {q:"To compare two data sets you should compare an average and:", opts:["A measure of spread","The mode only","The largest value","The number of categories"], c:0,
     e:"Use an average (typical value) and spread (e.g. range, consistency)."}
  ],
  "m10i-12-3": [
    {q:"Points going from bottom-left to top-right show:", opts:["Positive correlation","Negative correlation","No correlation","An outlier"], c:0,
     e:"Both variables increasing together is positive correlation."},
    {q:"As temperature rises, hot-chocolate sales fall. This is:", opts:["Negative correlation","Positive correlation","No correlation","Perfect correlation"], c:0,
     e:"One rises while the other falls — negative correlation."},
    {q:"A line of best fit should have:", opts:["Roughly equal points each side","All points on it","Only the first and last points","A gradient of 1"], c:0,
     e:"It follows the trend with about as many points above as below."},
    {q:"A point far from the trend line is called:", opts:["An outlier","The median","A mode","The intercept"], c:0,
     e:"An outlier does not fit the overall pattern."},
    {q:"Estimating within the range of data using the line is called:", opts:["Interpolation","Extrapolation","Correlation","Tabulation"], c:0,
     e:"Reading within the data is interpolation (more reliable than extrapolation)."}
  ]
});

Object.assign(LESSONS, {
  "m10i-12-1": `<h2>Averages &amp; Range</h2>
<p>Four key statistics summarise data: the <strong>mean</strong> (total ÷ how many), the <strong>median</strong> (middle value in order), the <strong>mode</strong> (most common) and the <strong>range</strong> (highest − lowest, a measure of spread).</p>
<h3>Worked example</h3>
<p>For 8, 3, 5, 9, 4: in order 3, 4, 5, 8, 9 — the median is <strong>5</strong>; the mean is 29 ÷ 5 = 5.8; the range is 9 − 3 = 6.</p>
<h3>From a frequency table</h3>
<p>Multiply each value by its frequency, total these, then divide by the total frequency. The mean is sensitive to outliers; the median is not.</p>`,

  "m10i-12-2": `<h2>Charts &amp; Frequency Diagrams</h2>
<p><strong>Bar charts</strong> show frequencies as equal-width bars. <strong>Pie charts</strong> show each category as a slice of 360°: the angle = (frequency ÷ total) × 360°, and all the angles add to 360°.</p>
<h3>Worked example</h3>
<p>In a survey of 40 people, 10 chose football: angle = (10 ÷ 40) × 360° = <strong>90°</strong>.</p>
<h3>Comparing data</h3>
<p>To compare two groups fairly, compare an <em>average</em> (typical value) and a <em>spread</em> (e.g. range) — both matter.</p>`,

  "m10i-12-3": `<h2>Scatter Graphs &amp; Correlation</h2>
<p>A <strong>scatter graph</strong> shows whether two variables are related. <strong>Positive correlation</strong> trends up to the right; <strong>negative</strong> trends down; <strong>no correlation</strong> shows no pattern. A <strong>line of best fit</strong> follows the trend and lets you estimate values.</p>
<div class="lesson-diagram" data-diagram="math-scatter"><p class="diagram-caption">Positive correlation with a line of best fit</p></div>
<h3>Using the line</h3>
<p>Read across from a known value to the line, then to the other axis. Estimating <em>within</em> the data (interpolation) is reliable; going <em>beyond</em> it (extrapolation) is risky because the trend may not continue.</p>`
});
