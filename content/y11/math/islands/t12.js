// content/y11/math/islands/t12.js — Year 11 Maths Topic 12: Histograms & Cumulative Frequency
// Islands m11i-12-1 .. m11i-12-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-12-1 — Histograms
  {id:"m11fc-12-1-1", islandId:"m11i-12-1", front:"How is a histogram different from a bar chart?",
   back:"A histogram has no gaps and uses frequency DENSITY for the height when class widths are unequal.\n\nThe AREA of each bar represents the frequency.", difficulty:2, category:"definition"},
  {id:"m11fc-12-1-2", islandId:"m11i-12-1", front:"What is frequency density?",
   back:"frequency density = frequency ÷ class width.\n\nIt is the height of each histogram bar.", difficulty:2, category:"definition"},
  {id:"m11fc-12-1-3", islandId:"m11i-12-1", front:"A class of width 10 has frequency 30. Find the frequency density.",
   back:"3\n\n30 ÷ 10 = 3.", difficulty:2, category:"calculation"},
  {id:"m11fc-12-1-4", islandId:"m11i-12-1", front:"On a histogram, what does the AREA of a bar represent?",
   back:"The frequency for that class.\n\nfrequency = frequency density × class width = the bar's area.", difficulty:3, category:"concept"},
  {id:"m11fc-12-1-5", islandId:"m11i-12-1", front:"A bar has frequency density 4 and class width 5. Find the frequency.",
   back:"20\n\nfrequency = density × width = 4 × 5 = 20.", difficulty:2, category:"calculation"},
  {id:"m11fc-12-1-6", islandId:"m11i-12-1", front:"Why use frequency density instead of frequency for the height?",
   back:"Because class widths are unequal — using raw frequency would distort the picture.\n\nDensity makes the AREA represent frequency fairly.", difficulty:3, category:"concept"},

  // m11i-12-2 — Cumulative Frequency
  {id:"m11fc-12-2-1", islandId:"m11i-12-2", front:"What is cumulative frequency?",
   back:"A running total of the frequencies.\n\nEach value adds the current frequency to the total so far.", difficulty:2, category:"definition"},
  {id:"m11fc-12-2-2", islandId:"m11i-12-2", front:"What points do you plot for a cumulative frequency curve?",
   back:"The cumulative total against the UPPER boundary of each class.\n\nJoin them with a smooth curve (an ogive).", difficulty:3, category:"concept"},
  {id:"m11fc-12-2-3", islandId:"m11i-12-2", front:"How do you estimate the median from a cumulative frequency curve?",
   back:"Read across at half the total (n/2), then down to the value.\n\nThe x-value there is the median.", difficulty:3, category:"concept"},
  {id:"m11fc-12-2-4", islandId:"m11i-12-2", front:"For 40 pieces of data, where do you read the lower quartile?",
   back:"At a cumulative frequency of 10 (¼ of 40).\n\nLQ at n/4, median at n/2, UQ at 3n/4.", difficulty:3, category:"calculation"},
  {id:"m11fc-12-2-5", islandId:"m11i-12-2", front:"What is the interquartile range?",
   back:"IQR = upper quartile − lower quartile.\n\nIt measures the spread of the middle 50% of the data.", difficulty:2, category:"definition"},
  {id:"m11fc-12-2-6", islandId:"m11i-12-2", front:"Why is the cumulative frequency always increasing?",
   back:"Because you keep adding more frequencies — the running total can never go down.", difficulty:2, category:"concept"},

  // m11i-12-3 — Box Plots & Comparing
  {id:"m11fc-12-3-1", islandId:"m11i-12-3", front:"What five values make up a box plot?",
   back:"Minimum, lower quartile, median, upper quartile, maximum.\n\nThis is the 'five-number summary'.", difficulty:2, category:"definition"},
  {id:"m11fc-12-3-2", islandId:"m11i-12-3", front:"What does the box of a box plot show?",
   back:"The interquartile range — from the lower quartile to the upper quartile.\n\nThe line inside the box is the median.", difficulty:2, category:"concept"},
  {id:"m11fc-12-3-3", islandId:"m11i-12-3", front:"Find the IQR if LQ = 12 and UQ = 20.",
   back:"8\n\nIQR = UQ − LQ = 20 − 12 = 8.", difficulty:2, category:"calculation"},
  {id:"m11fc-12-3-4", islandId:"m11i-12-3", front:"How do you compare two distributions with box plots?",
   back:"Compare a measure of LOCATION (the median) and a measure of SPREAD (the IQR or range).", difficulty:3, category:"concept"},
  {id:"m11fc-12-3-5", islandId:"m11i-12-3", front:"A smaller IQR means what about the data?",
   back:"The middle 50% is more tightly grouped (more consistent).\n\nA larger IQR means more spread out.", difficulty:3, category:"concept"},
  {id:"m11fc-12-3-6", islandId:"m11i-12-3", front:"Class A median 60, IQR 10; Class B median 55, IQR 20. Compare.",
   back:"A scored higher on average (median) AND more consistently (smaller IQR).", difficulty:3, category:"application"}
);

Object.assign(QUESTIONS, {
  "m11i-12-1": [
    {q:"Frequency density is:", opts:["frequency ÷ class width","frequency × class width","frequency + width","width ÷ frequency"], c:0,
     e:"Frequency density = frequency ÷ class width."},
    {q:"A class of width 5 has frequency 35. Frequency density is:", opts:["7","175","30","40"], c:0,
     e:"35 ÷ 5 = 7."},
    {q:"On a histogram, the frequency is shown by each bar's:", opts:["Area","Height","Width","Colour"], c:0,
     e:"Frequency = density × width = the bar's area."},
    {q:"A bar has density 6 and width 4. Its frequency is:", opts:["24","10","1.5","48"], c:0,
     e:"6 × 4 = 24."},
    {q:"Histograms use frequency density when classes have:", opts:["Unequal widths","Equal widths","No frequency","One value"], c:0,
     e:"Unequal class widths require frequency density so area = frequency."}
  ],
  "m11i-12-2": [
    {q:"Cumulative frequency is a:", opts:["Running total","Single frequency","Percentage","Difference"], c:0,
     e:"It is the running total of frequencies."},
    {q:"Cumulative frequency is plotted against the:", opts:["Upper class boundary","Lower boundary","Midpoint","Frequency density"], c:0,
     e:"Plot the running total at the upper boundary of each class."},
    {q:"For 60 data values, the median is read at a cumulative frequency of:", opts:["30","15","45","60"], c:0,
     e:"Median position is n/2 = 30."},
    {q:"The IQR is:", opts:["UQ − LQ","UQ + LQ","max − min","median − LQ"], c:0,
     e:"Interquartile range = upper quartile − lower quartile."},
    {q:"A cumulative frequency graph always:", opts:["Increases or stays level","Decreases","Goes up then down","Is a straight line"], c:0,
     e:"A running total never decreases."}
  ],
  "m11i-12-3": [
    {q:"A box plot shows how many key values?", opts:["Five","Three","Two","Four"], c:0,
     e:"Min, LQ, median, UQ, max — a five-number summary."},
    {q:"The box of a box plot spans the:", opts:["Interquartile range","Whole range","Median only","Lower half"], c:0,
     e:"From LQ to UQ — the middle 50%."},
    {q:"If LQ = 15 and UQ = 28, the IQR is:", opts:["13","43","28","15"], c:0,
     e:"28 − 15 = 13."},
    {q:"To compare two distributions, use:", opts:["Median and IQR","Only the maximum","Only the mode","The number of values"], c:0,
     e:"Compare a location measure (median) and a spread measure (IQR)."},
    {q:"A smaller IQR indicates the data is:", opts:["More consistent","More spread out","Larger","Incorrect"], c:0,
     e:"A small IQR means the middle 50% is tightly grouped."}
  ]
});

Object.assign(LESSONS, {
  "m11i-12-1": `<h2>Histograms</h2>
<p>A <strong>histogram</strong> has no gaps between bars and, when class widths are unequal, uses <strong>frequency density</strong> (= frequency ÷ class width) for the height. The <strong>area</strong> of each bar — not its height — represents the frequency.</p>
<div class="lesson-diagram" data-diagram="math-histogram"><p class="diagram-caption">Height = frequency density; area = frequency</p></div>
<h3>Worked example</h3>
<p>A class of width 10 with frequency 30 has frequency density 30 ÷ 10 = <strong>3</strong>. Conversely a bar of density 4 and width 5 represents 4 × 5 = 20 data values.</p>
<h3>Common mistake</h3>
<p>Don't read the height as the frequency — with unequal widths you must use the area (density × width).</p>`,

  "m11i-12-2": `<h2>Cumulative Frequency</h2>
<p><strong>Cumulative frequency</strong> is a running total of the frequencies. Plot each total against the <strong>upper boundary</strong> of its class and join with a smooth curve. Read the <strong>median</strong> at n/2, the lower quartile at n/4 and the upper quartile at 3n/4.</p>
<div class="lesson-diagram" data-diagram="math-cumulative-frequency"><p class="diagram-caption">Read the median at n/2 and the quartiles at n/4 and 3n/4</p></div>
<h3>Worked example</h3>
<p>For 40 values: read the median across at 20, the lower quartile at 10 and the upper quartile at 30, then the <strong>IQR = UQ − LQ</strong>.</p>
<h3>Common mistake</h3>
<p>Plot the running total at the <em>upper</em> class boundary, not the midpoint.</p>`,

  "m11i-12-3": `<h2>Box Plots &amp; Comparing</h2>
<p>A <strong>box plot</strong> shows a five-number summary: minimum, lower quartile, median, upper quartile and maximum. The box spans the <strong>interquartile range</strong> (LQ to UQ), with the median marked inside.</p>
<div class="lesson-diagram" data-diagram="math-box-plot"><p class="diagram-caption">Min, LQ, median, UQ, max — the box is the IQR</p></div>
<h3>Comparing distributions</h3>
<p>Compare a measure of <strong>location</strong> (the median) and a measure of <strong>spread</strong> (the IQR). Class A with median 60 and IQR 10 scored higher and more consistently than Class B with median 55 and IQR 20.</p>`
});
