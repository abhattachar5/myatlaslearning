// math-y8-t27.js — Year 8 Maths Topic 27: Data & Statistics
// Islands: m8i-27-1 .. m8i-27-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-27-1 — Tables, Plots & Stem-and-Leaf
  {id:"m8fc-27-1-1",islandId:"m8i-27-1",front:"What does a frequency table show?",
   back:"A frequency table lists each data value (or group) alongside the number of times it occurs — its <strong>frequency</strong>.\n\nExample: a tally of shoe sizes across a class shows how many pupils wear each size.",difficulty:1,category:"definition"},
  {id:"m8fc-27-1-2",islandId:"m8i-27-1",front:"How do you find the total frequency from a frequency table?",
   back:"Add up all the individual frequencies.\n\nExample: if 3 pupils scored 4, 7 scored 5, and 5 scored 6, the total frequency = 3 + 7 + 5 = 15 pupils.",difficulty:1,category:"calculation"},
  {id:"m8fc-27-1-3",islandId:"m8i-27-1",front:"What is a line plot (dot plot) and when do you use one?",
   back:"A line plot places a cross or dot above a number line for each data value. Use it for small data sets of numerical data to see the distribution quickly.\n\nEach X above a value represents one occurrence.",difficulty:1,category:"definition"},
  {id:"m8fc-27-1-4",islandId:"m8i-27-1",front:"How do you read a stem-and-leaf plot?",
   back:"The STEM (left column) gives the leading digit(s); each LEAF (right) is the final digit.\n\nTo read a value: combine stem + leaf.\nExample: stem 4, leaf 7 → value 47.\nLeaves are listed in order so you can read off the data set directly.",difficulty:2,category:"concept"},
  {id:"m8fc-27-1-5",islandId:"m8i-27-1",front:"A stem-and-leaf plot shows:\nStem | Leaves\n  2  | 1 4 8\n  3  | 0 3 3 7\nHow many values are there, and what is the highest value?",
   back:"7 values in total (3 leaves in stem 2, 4 in stem 3).\nHighest value: stem 3, leaf 7 → 37.\n\nFull data set: 21, 24, 28, 30, 33, 33, 37.",difficulty:2,category:"application"},
  {id:"m8fc-27-1-6",islandId:"m8i-27-1",front:"What is the advantage of a back-to-back stem-and-leaf plot?",
   back:"It lets you compare two data sets side by side using the same stem.\nLeaves for one group go left; leaves for the other go right.\n\nYou can instantly compare the spread, mode and median of both groups.",difficulty:2,category:"concept"},

  // m8i-27-2 — Bar Charts, Pie Charts & Line Graphs
  {id:"m8fc-27-2-1",islandId:"m8i-27-2",front:"What is the formula for the angle of a sector in a pie chart?",
   back:"Angle = (frequency ÷ total frequency) × 360°\n\nEquivalently: angle = fraction of whole × 360°.\n\nExample: if 15 out of 60 people chose red, angle = (15/60) × 360° = 90°.",difficulty:2,category:"calculation"},
  {id:"m8fc-27-2-2",islandId:"m8i-27-2",front:"A pie chart has 5 sectors. One sector represents 12 out of 48 items. What is its angle?",
   back:"Angle = (12 ÷ 48) × 360°\n= 0.25 × 360°\n= 90°\n\nCheck: 12/48 = 1/4, and a quarter of a full circle is 90°.",difficulty:2,category:"calculation"},
  {id:"m8fc-27-2-3",islandId:"m8i-27-2",front:"When should you use a line graph rather than a bar chart?",
   back:"Use a line graph when data is continuous or measured at intervals over time (e.g. temperature over a week, population year by year).\n\nThe connecting line suggests change between points.\nUse a bar chart for separate (discrete) categories.",difficulty:1,category:"concept"},
  {id:"m8fc-27-2-4",islandId:"m8i-27-2",front:"What does a grouped bar chart show that a simple bar chart does not?",
   back:"A grouped (compound) bar chart shows two or more data sets side by side for each category, making direct comparison easy.\n\nExample: boys' and girls' test scores grouped by grade band.",difficulty:1,category:"concept"},
  {id:"m8fc-27-2-5",islandId:"m8i-27-2",front:"All sectors of a pie chart must add up to 360°. If three sectors are 120°, 90° and 80°, what is the fourth sector's angle?",
   back:"Fourth angle = 360° − (120° + 90° + 80°)\n= 360° − 290°\n= 70°\n\nAlways check that all sectors sum to exactly 360°.",difficulty:2,category:"calculation"},
  {id:"m8fc-27-2-6",islandId:"m8i-27-2",front:"A pie chart shows that the 'Sport' sector has an angle of 72°. What fraction and percentage of people chose Sport?",
   back:"Fraction = 72° ÷ 360° = 1/5\nPercentage = (72/360) × 100% = 20%\n\nRule: fraction = sector angle ÷ 360°; multiply by 100% for percentage.",difficulty:2,category:"application"},

  // m8i-27-3 — Mean, Median, Mode & Range
  {id:"m8fc-27-3-1",islandId:"m8i-27-3",front:"State the definitions of mean, median, mode and range.",
   back:"Mean = sum of all values ÷ number of values\nMedian = middle value when data is ordered (or mean of two middle values)\nMode = most frequently occurring value\nRange = largest value − smallest value",difficulty:1,category:"definition"},
  {id:"m8fc-27-3-2",islandId:"m8i-27-3",front:"Find the mean of: 4, 7, 9, 2, 8.",
   back:"Mean = (4 + 7 + 9 + 2 + 8) ÷ 5\n= 30 ÷ 5\n= 6\n\nStep 1: sum = 30. Step 2: divide by count (5). Answer: 6.",difficulty:1,category:"calculation"},
  {id:"m8fc-27-3-3",islandId:"m8i-27-3",front:"Find the median of: 3, 7, 1, 9, 5.",
   back:"Step 1: order the data → 1, 3, 5, 7, 9\nStep 2: find the middle value — there are 5 values, so the 3rd is the median.\nMedian = 5\n\nAlways order the data first.",difficulty:1,category:"calculation"},
  {id:"m8fc-27-3-4",islandId:"m8i-27-3",front:"The mean of five numbers is 8. Four of the numbers are 6, 10, 7 and 9. Find the fifth number.",
   back:"Total = mean × count = 8 × 5 = 40\nSum of known four = 6 + 10 + 7 + 9 = 32\nFifth number = 40 − 32 = 8\n\nMethod: total needed − total known = missing value.",difficulty:2,category:"calculation"},
  {id:"m8fc-27-3-5",islandId:"m8i-27-3",front:"Find the median of: 2, 5, 8, 11.",
   back:"There are 4 values (even count), so the median is the mean of the 2nd and 3rd values.\nMedian = (5 + 8) ÷ 2 = 13 ÷ 2 = 6.5\n\nWith an even number of values, always average the two middle values.",difficulty:2,category:"calculation"},
  {id:"m8fc-27-3-6",islandId:"m8i-27-3",front:"A data set has mode 4, median 6 and mean 7. One new value is added. What kind of value would most increase the mean?",
   back:"Adding a large value (much greater than the current mean of 7) would most increase the mean, because the mean is sensitive to extreme values.\n\nThe median and mode are less affected by one extreme value — the mean is not resistant to outliers.",difficulty:3,category:"application"},

  // m8i-27-4 — Outliers, Scatter Plots & Samples
  {id:"m8fc-27-4-1",islandId:"m8i-27-4",front:"What is an outlier?",
   back:"An outlier is a data value that is much higher or lower than the rest of the data set.\n\nOutliers can be caused by measurement errors, unusual events or genuine extreme cases.\nThey can strongly affect the mean but have little effect on the median.",difficulty:1,category:"definition"},
  {id:"m8fc-27-4-2",islandId:"m8i-27-4",front:"Describe positive correlation, negative correlation and no correlation in a scatter plot.",
   back:"Positive correlation: both variables increase together — points slope upward left to right.\nNegative correlation: as one variable increases the other decreases — points slope downward.\nNo correlation: points are scattered with no clear pattern.\n\nCorrelation does NOT prove causation.",difficulty:2,category:"concept"},
  {id:"m8fc-27-4-3",islandId:"m8i-27-4",front:"What is a line of best fit and how do you draw one?",
   back:"A line of best fit (trend line) is a straight line drawn through a scatter plot to represent the overall trend.\n\nDraw it so that roughly equal numbers of points lie above and below the line, passing through the middle of the data cluster.\nUse it to make predictions.",difficulty:2,category:"definition"},
  {id:"m8fc-27-4-4",islandId:"m8i-27-4",front:"What is the difference between a population and a sample?",
   back:"Population: the entire group being studied (e.g. all pupils in a school).\nSample: a smaller subset selected from the population (e.g. 50 pupils).\n\nWe use samples when surveying the whole population is impractical.\nA good sample is representative of the population.",difficulty:1,category:"definition"},
  {id:"m8fc-27-4-5",islandId:"m8i-27-4",front:"Give two examples of biased sampling and explain why they are biased.",
   back:"1. Surveying only friends — they may share similar opinions, not representing the whole school.\n2. Online survey — only people with internet access or strong opinions respond (self-selection bias).\n\nBias means the sample is not representative, so conclusions about the population may be wrong.",difficulty:2,category:"application"},
  {id:"m8fc-27-4-6",islandId:"m8i-27-4",front:"Data set: 3, 4, 4, 5, 6, 7, 42. Explain the effect of the outlier 42 on the mean and median.",
   back:"Without 42: mean = (3+4+4+5+6+7) ÷ 6 = 29 ÷ 6 ≈ 4.8; median = (4+5) ÷ 2 = 4.5\nWith 42: mean = (3+4+4+5+6+7+42) ÷ 7 = 71 ÷ 7 ≈ 10.1; median = 5\n\nThe mean rises drastically (4.8 → 10.1). The median barely changes (4.5 → 5).\nThe median is the better average when outliers are present.",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-27-1":[
    {q:"A frequency table shows: Score 3 → 4 pupils, Score 4 → 7 pupils, Score 5 → 5 pupils. How many pupils are there in total?",opts:["14","15","16","17"],c:2,e:"Total frequency = 4 + 7 + 5 = 16 pupils. Add all the frequencies together."},
    {q:"In a stem-and-leaf plot, stem 5 has leaves 1, 3, 3, 8. What is the greatest value in this stem?",opts:["51","53","58","83"],c:2,e:"Combine stem 5 with the largest leaf 8 to get 58. The greatest value is 58."},
    {q:"Which display is best for comparing two groups' test scores side by side using the same data structure?",opts:["Frequency table","Line plot","Back-to-back stem-and-leaf plot","Pie chart"],c:2,e:"A back-to-back stem-and-leaf plot shares one central stem with leaves for each group on either side, making direct comparison easy."},
    {q:"A line plot shows Xs above 2, 2, 3, 4, 4, 4, 5. How many data values are there?",opts:["5","6","7","8"],c:2,e:"Count every X: two 2s, one 3, three 4s, one 5 = 7 values total."},
    {q:"In a frequency table, the frequencies for five categories are 8, 12, 5, 10 and 15. What is the total frequency?",opts:["40","45","50","55"],c:2,e:"Total = 8 + 12 + 5 + 10 + 15 = 50. Add all frequencies."}
  ],
  "m8i-27-2":[
    {q:"In a pie chart, a sector represents 18 out of 72 items. What is the sector angle?",opts:["60°","72°","90°","108°"],c:2,e:"Angle = (18 ÷ 72) × 360° = 0.25 × 360° = 90°. The fraction is 1/4, so the angle is a quarter of 360°."},
    {q:"A pie chart has sectors of 120°, 80° and 100°. What is the angle of the remaining sector?",opts:["50°","60°","70°","80°"],c:1,e:"Remaining angle = 360° − (120° + 80° + 100°) = 360° − 300° = 60°."},
    {q:"Which graph type is most suitable for showing how a city's temperature changed each month over a year?",opts:["Pie chart","Line graph","Stem-and-leaf plot","Frequency table"],c:1,e:"A line graph is ideal for continuous data changing over time. The connecting line shows the trend between months."},
    {q:"A sector in a pie chart has an angle of 45°. What percentage of the total does it represent?",opts:["10%","12.5%","15%","20%"],c:1,e:"Percentage = (45° ÷ 360°) × 100% = 0.125 × 100% = 12.5%."},
    {q:"A grouped bar chart compares boys and girls across three year groups. How many bars are shown in total?",opts:["3","4","6","9"],c:2,e:"There are 3 year groups × 2 groups (boys and girls) = 6 bars in total."}
  ],
  "m8i-27-3":[
    {q:"Find the mean of 5, 9, 3, 7, 6.",opts:["5","6","7","8"],c:1,e:"Mean = (5 + 9 + 3 + 7 + 6) ÷ 5 = 30 ÷ 5 = 6."},
    {q:"Find the median of 8, 3, 6, 1, 9, 4, 7.",opts:["4","6","7","8"],c:1,e:"Order: 1, 3, 4, 6, 7, 8, 9. There are 7 values so the 4th is the median: 6."},
    {q:"The mean of four numbers is 9. Three of the numbers are 7, 11 and 8. What is the fourth number?",opts:["8","9","10","11"],c:2,e:"Total = 9 × 4 = 36. Sum of known three = 7 + 11 + 8 = 26. Fourth = 36 − 26 = 10."},
    {q:"What is the range of 14, 7, 22, 3, 18?",opts:["11","15","19","22"],c:2,e:"Range = largest − smallest = 22 − 3 = 19."},
    {q:"Find the median of 2, 5, 8, 11, 13, 17.",opts:["8","9","9.5","10"],c:2,e:"There are 6 values (even count). Middle two are 8 and 11 (3rd and 4th). Median = (8 + 11) ÷ 2 = 19 ÷ 2 = 9.5."}
  ],
  "m8i-27-4":[
    {q:"A scatter plot shows that as hours of TV watched increases, exam scores decrease. What type of correlation is this?",opts:["Positive correlation","No correlation","Negative correlation","Perfect correlation"],c:2,e:"As one variable increases and the other decreases, this is negative correlation. The points slope downward from left to right."},
    {q:"Which measure of average is LEAST affected by an outlier?",opts:["Mean","Median","Range","Mode"],c:1,e:"The median is the middle value of ordered data, so one extreme value barely moves it. The mean is pulled strongly by outliers."},
    {q:"A class of 30 pupils is surveyed by asking only the 5 pupils who sit at the front. Why is this sample biased?",opts:["It is too large","It uses random selection","It only includes one group and may not represent all pupils","It includes the teacher"],c:2,e:"Only front-row pupils are selected — they may share similar characteristics (e.g. more engaged). The sample is not representative of all 30 pupils."},
    {q:"Data set: 2, 3, 3, 4, 5, 6, 50. Which statement best describes the outlier 50?",opts:["It raises the median significantly","It raises the mean significantly","It lowers the range","It has no effect on any average"],c:1,e:"The mean = (2+3+3+4+5+6+50) ÷ 7 = 73 ÷ 7 ≈ 10.4, far above the rest. The median is only 4 — barely changed. Outliers strongly affect the mean."},
    {q:"What does a line of best fit on a scatter plot allow you to do?",opts:["Find the exact value of every data point","Make predictions for values not in the data set","Calculate the mean","Show that correlation proves causation"],c:1,e:"A line of best fit shows the overall trend and lets you estimate (predict) values within or just beyond the data range — it does NOT prove causation."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-27-1': `
<h2>Tables, Plots &amp; Stem-and-Leaf</h2>
<p>Organising raw data into <strong>frequency tables</strong>, <strong>line plots</strong> and <strong>stem-and-leaf plots</strong> makes it much easier to spot patterns, find averages, and compare values.</p>

<h3>Frequency tables</h3>
<p>A frequency table records how often each value (or group of values) appears. Total frequency = sum of all individual frequencies.</p>
<div class="example-box">
<p><strong>Example:</strong> 10 pupils scored: 3, 4, 4, 5, 3, 5, 4, 4, 3, 5</p>
<p><strong>Frequency table:</strong><br>
Score 3 → 3 pupils<br>
Score 4 → 4 pupils<br>
Score 5 → 3 pupils<br>
Total = 3 + 4 + 3 = <strong>10</strong></p>
</div>

<h3>Line plots (dot plots)</h3>
<p>Draw a number line and place an X above the line for each data value. Good for small data sets — you can see the distribution at a glance.</p>
<div class="example-box">
<p><strong>Example:</strong> Data: 2, 3, 3, 4, 4, 4, 5<br>
Number line from 2 to 5; above 2 one X, above 3 two Xs, above 4 three Xs, above 5 one X.<br>
Mode is clearly 4 (the tallest stack).</p>
</div>

<h3>Stem-and-leaf plots</h3>
<p>Split each value into a <strong>stem</strong> (leading digit(s)) and a <strong>leaf</strong> (final digit). Leaves are written in order. You keep every individual data value.</p>
<div class="example-box">
<p><strong>Example:</strong> Data: 21, 24, 28, 30, 33, 33, 37</p>
<p>Stem | Leaves<br>
&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;| 1 4 8<br>
&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;| 0 3 3 7<br>
Key: 2 | 1 means 21</p>
<p>Minimum = 21, Maximum = 37, Mode = 33.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Frequency</dt><dd>The number of times a value appears in a data set.</dd>
<dt>Line plot</dt><dd>A display using Xs above a number line, one per data value.</dd>
<dt>Stem</dt><dd>The leading digit(s) in a stem-and-leaf plot.</dd>
<dt>Leaf</dt><dd>The final digit in a stem-and-leaf plot.</dd>
<dt>Back-to-back stem-and-leaf</dt><dd>Two data sets sharing one stem column for easy comparison.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to order the leaves in a stem-and-leaf plot — ✅ always write leaves from smallest to largest.</li>
<li>❌ Forgetting the key when drawing a stem-and-leaf plot — ✅ always write "Key: a | b means ab".</li>
<li>❌ Counting a stem with no leaves as a data value — ✅ a stem with no leaves contributes zero data values.</li>
</ul>`,

'm8i-27-2': `
<h2>Bar Charts, Pie Charts &amp; Line Graphs</h2>
<p>Choosing the right graph type is as important as drawing it correctly. <strong>Bar charts</strong> compare categories; <strong>pie charts</strong> show proportions of a whole; <strong>line graphs</strong> show change over time.</p>

<h3>Bar charts</h3>
<p>Each bar's height (or length) equals the frequency. Bars should have equal width and a gap between them for discrete data. A <strong>grouped bar chart</strong> places bars side by side for two or more data sets per category.</p>
<div class="example-box">
<p><strong>Example:</strong> Favourite fruit: Apple 8, Banana 5, Cherry 3, Mango 4.<br>
Draw four bars of heights 8, 5, 3 and 4. Label axes "Fruit" and "Frequency".</p>
</div>

<h3>Pie charts — calculating sector angles</h3>
<p>Each sector's angle = (frequency ÷ total frequency) × 360°</p>
<div class="example-box">
<p><strong>Example:</strong> 60 pupils chose: Walk 15, Bus 24, Car 12, Cycle 9.<br>
Walk: (15 ÷ 60) × 360° = <strong>90°</strong><br>
Bus: (24 ÷ 60) × 360° = <strong>144°</strong><br>
Car: (12 ÷ 60) × 360° = <strong>72°</strong><br>
Cycle: (9 ÷ 60) × 360° = <strong>54°</strong><br>
Check: 90 + 144 + 72 + 54 = 360° ✓</p>
</div>

<h3>Line graphs</h3>
<p>Plot points for each data value, then join consecutive points with straight lines. Use for <strong>continuous data over time</strong> — the line suggests values between measured points.</p>
<div class="example-box">
<p><strong>Example:</strong> Monthly rainfall (mm): Jan 60, Feb 45, Mar 50, Apr 35.<br>
Plot each point at its month and height, join with lines.<br>
The downward trend from Jan to Apr is clear.</p>
</div>

<h3>Reading back from a pie chart</h3>
<p>If you know the sector angle and total: frequency = (angle ÷ 360°) × total.<br>
To find the percentage: (angle ÷ 360°) × 100%.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Bar chart</dt><dd>A graph using rectangular bars to compare frequencies of categories.</dd>
<dt>Sector</dt><dd>A "slice" of a pie chart, representing a portion of the total.</dd>
<dt>Sector angle</dt><dd>The angle at the centre of a pie chart sector; = (frequency ÷ total) × 360°.</dd>
<dt>Line graph</dt><dd>A graph joining plotted points with lines, used for data over time.</dd>
<dt>Grouped bar chart</dt><dd>A bar chart with two or more bars per category for comparison.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting that all pie chart angles must sum to 360° — ✅ always check your total before drawing.</li>
<li>❌ Using a line graph for discrete, unrelated categories — ✅ use a bar chart for categories, line graph for time series.</li>
<li>❌ Making bars different widths in a bar chart — ✅ all bars must be the same width.</li>
</ul>`,

'm8i-27-3': `
<h2>Mean, Median, Mode &amp; Range</h2>
<p>The four key statistical measures summarise a data set. <strong>Mean, median and mode</strong> are all "averages" (measures of centre); the <strong>range</strong> measures spread.</p>

<h3>Definitions and calculations</h3>
<p><strong>Mean</strong> = sum of all values ÷ number of values<br>
<strong>Median</strong> = middle value of the ordered data set<br>
<strong>Mode</strong> = most frequently occurring value<br>
<strong>Range</strong> = largest value − smallest value</p>

<div class="example-box">
<p><strong>Example:</strong> Data set: 3, 7, 2, 9, 4, 7, 6</p>
<p>Mean = (3 + 7 + 2 + 9 + 4 + 7 + 6) ÷ 7 = 38 ÷ 7 ≈ 5.4<br>
Ordered: 2, 3, 4, <strong>6</strong>, 7, 7, 9 → Median = 6<br>
Mode = 7 (appears twice)<br>
Range = 9 − 2 = 7</p>
</div>

<h3>Median with an even number of values</h3>
<p>When there is an even count of values, the median is the <strong>mean of the two middle values</strong>.</p>
<div class="example-box">
<p><strong>Example:</strong> Ordered data: 4, 7, 10, 15<br>
Two middle values: 7 and 10.<br>
Median = (7 + 10) ÷ 2 = <strong>8.5</strong></p>
</div>

<h3>Finding a missing value given the mean</h3>
<p>Total = mean × count. Subtract the known values to find the missing one.</p>
<div class="example-box">
<p><strong>Example:</strong> The mean of 6 numbers is 10. Five of them are 8, 12, 11, 9 and 7. Find the sixth.<br>
Total = 10 × 6 = 60<br>
Known sum = 8 + 12 + 11 + 9 + 7 = 47<br>
Sixth number = 60 − 47 = <strong>13</strong></p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Mean</dt><dd>The sum of all values divided by the count of values.</dd>
<dt>Median</dt><dd>The middle value of an ordered data set.</dd>
<dt>Mode</dt><dd>The most frequently occurring value; a data set can have more than one mode.</dd>
<dt>Range</dt><dd>The difference between the largest and smallest values; measures spread.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Forgetting to order the data before finding the median — ✅ always sort first.</li>
<li>❌ With an even number of values, taking one middle value instead of averaging two — ✅ find the mean of the two middle values.</li>
<li>❌ Confusing range (a measure of spread) with mean (a measure of centre) — ✅ range = max − min.</li>
</ul>`,

'm8i-27-4': `
<h2>Outliers, Scatter Plots &amp; Samples</h2>
<p><strong>Outliers</strong> distort averages; <strong>scatter plots</strong> reveal relationships between two variables; and good <strong>sampling</strong> is essential for drawing valid conclusions about a population.</p>

<h3>Outliers</h3>
<p>An outlier is a value that lies far from the rest of the data. It can strongly affect the mean but has little effect on the median. Always consider whether to include or exclude an outlier, and state your reason.</p>
<div class="example-box">
<p><strong>Example:</strong> Data: 5, 6, 6, 7, 8, 42<br>
Mean with 42: (5+6+6+7+8+42) ÷ 6 = 74 ÷ 6 ≈ 12.3<br>
Mean without 42: (5+6+6+7+8) ÷ 5 = 32 ÷ 5 = 6.4<br>
Median with 42: middle of 5, 6, 6, 7, 8, 42 → (6+7) ÷ 2 = 6.5<br>
The median is far more stable.</p>
</div>

<h3>Scatter plots</h3>
<p>A scatter plot shows pairs of values (x, y) as dots. The pattern reveals the <strong>correlation</strong>:</p>
<ul>
<li><strong>Positive correlation</strong> — both increase together (e.g. height and shoe size).</li>
<li><strong>Negative correlation</strong> — one increases as the other decreases (e.g. speed and journey time).</li>
<li><strong>No correlation</strong> — no clear pattern.</li>
</ul>
<p>Draw a <strong>line of best fit</strong> through the centre of the data to make predictions. Remember: correlation does not prove causation.</p>
<div class="example-box">
<p><strong>Example:</strong> A scatter plot of hours revised vs. test score shows a positive correlation. From the line of best fit, a pupil who revises 5 hours is predicted to score about 72%.</p>
</div>

<h3>Populations and samples</h3>
<p>A <strong>population</strong> is everyone or everything being studied. A <strong>sample</strong> is a representative subset. A <strong>random sample</strong> gives every member an equal chance of selection and minimises bias.</p>
<p>A <strong>biased sample</strong> over-represents or under-represents part of the population, leading to unreliable conclusions.</p>
<div class="example-box">
<p><strong>Biased example:</strong> Asking only pupils at lunchtime in the library about reading habits — this sample is likely to over-represent keen readers.</p>
<p><strong>Better approach:</strong> Randomly select names from the school register.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Outlier</dt><dd>A data value much higher or lower than the rest of the data.</dd>
<dt>Scatter plot</dt><dd>A graph of (x, y) data points used to investigate relationships between two variables.</dd>
<dt>Correlation</dt><dd>A relationship between two variables — can be positive, negative or none.</dd>
<dt>Line of best fit</dt><dd>A straight line drawn through the centre of a scatter plot to show the trend.</dd>
<dt>Population</dt><dd>The entire group being studied.</dd>
<dt>Sample</dt><dd>A subset of the population selected for a survey or study.</dd>
<dt>Biased sample</dt><dd>A sample that does not fairly represent the population.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Confusing correlation with causation — ✅ two variables can be correlated without one causing the other.</li>
<li>❌ Drawing a line of best fit that passes through the origin when it should not — ✅ position the line to minimise distances from all points.</li>
<li>❌ Using a biased sample and generalising to the whole population — ✅ check that your sample is random and representative.</li>
</ul>`

});
