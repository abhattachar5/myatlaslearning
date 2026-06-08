// content/y10/math/topics.js — Year 10 Maths: topic tiles + island definitions.
// Authored by the atlas-content skill. Building topic by topic (Topic 1 first
// as the reference slice).

// ── MATH TOPICS YEAR 10 ─────────────────────────────────────────────────────
const MATH_TOPICS_Y10 = [
  {id:"m10t-01", name:"Linear Equations & Inequalities", emoji:"⚖️", hasContent:true,
   description:"Solve linear equations, including with brackets and unknowns on both sides, and solve and represent inequalities."},
  {id:"m10t-02", name:"Simultaneous Equations", emoji:"➕", hasContent:true,
   description:"Solve a pair of linear equations by elimination and substitution, and set them up from word problems."},
  {id:"m10t-03", name:"Expanding & Factorising Quadratics", emoji:"🟦", hasContent:true,
   description:"Expand double brackets, factorise quadratics into double brackets, and use the difference of two squares."},
  {id:"m10t-04", name:"Solving Quadratics", emoji:"✖️", hasContent:true,
   description:"Solve quadratic equations by factorising and link the solutions to where a graph crosses the x-axis."},
  {id:"m10t-05", name:"Straight-Line Graphs", emoji:"📈", hasContent:true,
   description:"Use gradient and y = mx + c, find the equation of a line, and handle parallel and perpendicular lines."},
  {id:"m10t-06", name:"Real-Life & Rate Graphs", emoji:"🚗", hasContent:true,
   description:"Read distance–time and real-life graphs, and interpret gradients as rates of change."},
  {id:"m10t-07", name:"Pythagoras' Theorem", emoji:"📐", hasContent:true,
   description:"Use a² + b² = c² to find the hypotenuse and shorter sides, and solve problems in 2D."},
  {id:"m10t-08", name:"Trigonometry (SOHCAHTOA)", emoji:"📐", hasContent:true,
   description:"Use sine, cosine and tangent to find sides and angles in right-angled triangles, including exact values."},
  {id:"m10t-09", name:"Transformations", emoji:"🔄", hasContent:true,
   description:"Reflect, rotate, translate and enlarge shapes, including negative and fractional scale factors."},
  {id:"m10t-10", name:"Congruence & Similarity", emoji:"🪞", hasContent:true,
   description:"Use the congruence conditions, find missing lengths in similar shapes, and use area and volume scale factors."},
  {id:"m10t-11", name:"Compound Measures & Proportion", emoji:"⚙️", hasContent:true,
   description:"Work with speed, density and pressure, and solve direct and inverse proportion problems."},
  {id:"m10t-12", name:"Statistics: Averages & Diagrams", emoji:"📊", hasContent:true,
   description:"Find averages and range from lists and tables, draw and read charts, and interpret scatter graphs."},
  {id:"m10t-13", name:"Sampling & Data", emoji:"🎯", hasContent:true,
   description:"Understand populations and samples, recognise bias, and use stratified sampling."},
  {id:"m10t-14", name:"Probability: Trees, Venn & Sets", emoji:"🌳", hasContent:true,
   description:"Use tree and Venn diagrams with set notation to find probabilities of combined and conditional events."}
  // …more Year 10 topics slot in here
];

// ── Topic 1: Linear Equations & Inequalities (m10t-01) ──────────────────────
CURRICULUM.push(
  {id:"m10i-01-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-01", yearGroup:"Year 10",
   name:"Solving Linear Equations", emoji:"⚖️", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Solve one- and two-step linear equations using inverse operations.",
   learningOutcomes:["Solve one-step equations","Solve two-step equations","Check a solution by substitution"],
   prerequisites:[],
   topics:["Inverse operations","Two-step equations","Checking solutions"]},

  {id:"m10i-01-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-01", yearGroup:"Year 10",
   name:"Brackets & Unknowns on Both Sides", emoji:"🔁", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Solve equations with brackets and with the unknown appearing on both sides.",
   learningOutcomes:["Expand brackets then solve","Collect variables onto one side","Solve equations with fractions"],
   prerequisites:["m10i-01-1"],
   topics:["Brackets","Unknowns both sides","Equations with fractions"]},

  {id:"m10i-01-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-01", yearGroup:"Year 10",
   name:"Inequalities & Number Lines", emoji:"↔️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Solve linear inequalities and show the solution set on a number line.",
   learningOutcomes:["Solve linear inequalities","Show a solution set on a number line","List integer solutions"],
   prerequisites:["m10i-01-1"],
   topics:["Solving inequalities","Number-line notation","Integer solutions"]},
  {id:"m10i-01-4", subject:"Mathematics", subjectId:"math", topicId:"m10t-01", yearGroup:"Year 10",
   name:"Quadratic & Graphical Inequalities", emoji:"📈", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Solve quadratic inequalities and represent linear inequalities as regions on a graph.",
   learningOutcomes:["Solve a quadratic inequality using critical values","Choose the correct region (between or outside roots)","Shade the region satisfying linear inequalities"],
   prerequisites:["m10i-01-3"],
   topics:["Quadratic inequalities","Critical values","Graphical regions"]}
);

// ── Topic 2: Simultaneous Equations (m10t-02) ───────────────────────────────
CURRICULUM.push(
  {id:"m10i-02-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-02", yearGroup:"Year 10",
   name:"Elimination Method", emoji:"➕", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Solve a pair of linear equations by adding or subtracting to eliminate a variable.",
   learningOutcomes:["Eliminate a variable by adding or subtracting","Scale equations to match a coefficient","Find both unknowns and check"],
   prerequisites:["m10i-01-1"],
   topics:["Add or subtract to eliminate","Scaling equations","Checking both values"]},

  {id:"m10i-02-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-02", yearGroup:"Year 10",
   name:"Substitution & Setting Up", emoji:"📝", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Solve by substitution and form a pair of equations from a word problem.",
   learningOutcomes:["Solve by substituting one equation into the other","Form equations from a context","Interpret the solution in context"],
   prerequisites:["m10i-02-1"],
   topics:["Substitution method","Forming equations","Interpreting solutions"]}
);

// ── Topic 3: Expanding & Factorising Quadratics (m10t-03) ───────────────────
CURRICULUM.push(
  {id:"m10i-03-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-03", yearGroup:"Year 10",
   name:"Expanding Double Brackets", emoji:"🟦", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Expand (x + a)(x + b) and simplify to a quadratic expression.",
   learningOutcomes:["Expand two brackets using a grid or FOIL","Simplify the resulting quadratic","Square a bracket such as (x + a)²"],
   prerequisites:["m10i-01-2"],
   topics:["Grid / FOIL method","Collecting the middle term","Squaring a bracket"]},

  {id:"m10i-03-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-03", yearGroup:"Year 10",
   name:"Factorising into Double Brackets", emoji:"📂", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Factorise x² + bx + c by finding two numbers that multiply to c and add to b.",
   learningOutcomes:["Find a factor pair that multiplies to c and adds to b","Factorise x² + bx + c","Handle negative coefficients"],
   prerequisites:["m10i-03-1"],
   topics:["Product and sum","Factorising x²+bx+c","Negative terms"]},

  {id:"m10i-03-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-03", yearGroup:"Year 10",
   name:"Difference of Two Squares", emoji:"➖", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Recognise and factorise a² − b² as (a + b)(a − b).",
   learningOutcomes:["Recognise a difference of two squares","Factorise a² − b²","Apply it to numerical calculations"],
   prerequisites:["m10i-03-1"],
   topics:["Recognising a²−b²","Factorising","Numerical shortcuts"]},
  {id:"m10i-03-4", subject:"Mathematics", subjectId:"math", topicId:"m10t-03", yearGroup:"Year 10",
   name:"Expanding Three Brackets", emoji:"📦", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Expand the product of three linear brackets to a cubic and collect like terms.",
   learningOutcomes:["Expand two brackets then multiply by the third","Collect like terms in a cubic","Handle negative signs carefully"],
   prerequisites:["m10i-03-1"],
   topics:["Two-stage expansion","Cubics","Signs"]},
  {id:"m10i-03-5", subject:"Mathematics", subjectId:"math", topicId:"m10t-03", yearGroup:"Year 10",
   name:"Factorising ax² + bx + c", emoji:"🧩", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Factorise quadratics where a ≠ 1 using the AC method (splitting the middle term).",
   learningOutcomes:["Use a×c to find the splitting numbers","Split the middle term and factorise by grouping","Check by expanding"],
   prerequisites:["m10i-03-2"],
   topics:["AC method","Splitting the middle term","Grouping"]}
);

// ── Topic 4: Solving Quadratics (m10t-04) ───────────────────────────────────
CURRICULUM.push(
  {id:"m10i-04-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-04", yearGroup:"Year 10",
   name:"Solving by Factorising", emoji:"✖️", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Solve x² + bx + c = 0 by factorising and using the zero-product rule.",
   learningOutcomes:["Factorise a quadratic equal to zero","Use the zero-product rule","Write both solutions"],
   prerequisites:["m10i-03-2"],
   topics:["Set to zero","Zero-product rule","Two solutions"]},

  {id:"m10i-04-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-04", yearGroup:"Year 10",
   name:"Roots, Graphs & Problems", emoji:"🧩", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Link the solutions of a quadratic to where its graph crosses the x-axis, and solve simple problems.",
   learningOutcomes:["Connect solutions to x-axis crossings","Solve quadratics from area/number problems","Reject non-sensible solutions"],
   prerequisites:["m10i-04-1"],
   topics:["Roots and the graph","Setting up quadratics","Choosing valid solutions"]}
);

// ── Topic 5: Straight-Line Graphs (m10t-05) ─────────────────────────────────
CURRICULUM.push(
  {id:"m10i-05-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-05", yearGroup:"Year 10",
   name:"Gradient & y = mx + c", emoji:"📈", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Find the gradient and y-intercept of a line and read them from y = mx + c.",
   learningOutcomes:["Find a gradient from two points","Identify m and c in y = mx + c","Sketch a line from its equation"],
   prerequisites:[],
   topics:["Gradient between points","y = mx + c","Sketching lines"]},

  {id:"m10i-05-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-05", yearGroup:"Year 10",
   name:"Finding the Equation of a Line", emoji:"✏️", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find the equation of a line from a graph, a gradient and a point, or two points.",
   learningOutcomes:["Find the equation from gradient and a point","Find the equation from two points","Write equations in the form y = mx + c"],
   prerequisites:["m10i-05-1"],
   topics:["Gradient and a point","From two points","Writing y = mx + c"]},

  {id:"m10i-05-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-05", yearGroup:"Year 10",
   name:"Parallel & Perpendicular Lines", emoji:"⟂", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use the gradient rules for parallel and perpendicular lines.",
   learningOutcomes:["Use equal gradients for parallel lines","Use negative reciprocals for perpendicular lines","Find equations of parallel/perpendicular lines"],
   prerequisites:["m10i-05-2"],
   topics:["Parallel: equal gradients","Perpendicular: negative reciprocal","Finding the equation"]}
);

// ── Topic 6: Real-Life & Rate Graphs (m10t-06) ──────────────────────────────
CURRICULUM.push(
  {id:"m10i-06-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-06", yearGroup:"Year 10",
   name:"Distance–Time Graphs", emoji:"🚗", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Read distance–time graphs and use the gradient as speed.",
   learningOutcomes:["Read distance and time from the graph","Use gradient as speed","Describe stationary and return journeys"],
   prerequisites:["m10i-05-1"],
   topics:["Reading the graph","Gradient = speed","Describing journeys"]},

  {id:"m10i-06-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-06", yearGroup:"Year 10",
   name:"Real-Life Graphs & Rates", emoji:"💧", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Interpret real-life graphs such as containers filling and currency conversion.",
   learningOutcomes:["Interpret the shape of a real-life graph","Read off and convert values","Interpret the gradient as a rate"],
   prerequisites:["m10i-06-1"],
   topics:["Interpreting shapes","Conversion graphs","Rate of change"]}
);

// ── Topic 7: Pythagoras' Theorem (m10t-07) ──────────────────────────────────
CURRICULUM.push(
  {id:"m10i-07-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-07", yearGroup:"Year 10",
   name:"Finding the Hypotenuse", emoji:"📐", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use a² + b² = c² to find the longest side of a right-angled triangle.",
   learningOutcomes:["Identify the hypotenuse","Square, add and square-root","Round answers sensibly"],
   prerequisites:[],
   topics:["The hypotenuse","a² + b² = c²","Rounding"]},

  {id:"m10i-07-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-07", yearGroup:"Year 10",
   name:"Finding a Shorter Side & Problems", emoji:"📏", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Rearrange Pythagoras to find a shorter side and solve worded problems.",
   learningOutcomes:["Subtract to find a shorter side","Apply Pythagoras to real contexts","Decide which side is the hypotenuse"],
   prerequisites:["m10i-07-1"],
   topics:["c² − a² for a side","Worded problems","Choosing the hypotenuse"]},
  {id:"m10i-07-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-07", yearGroup:"Year 10",
   name:"3D Pythagoras", emoji:"🧊", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find the longest diagonal of a cuboid using 3D Pythagoras.",
   learningOutcomes:["Find a base diagonal then the space diagonal","Use d = √(l²+w²+h²)","Apply to 3D problems"],
   prerequisites:["m10i-07-1"],
   topics:["Space diagonal","Two-step method","√(l²+w²+h²)"]},
  {id:"m10i-07-4", subject:"Mathematics", subjectId:"math", topicId:"m10t-07", yearGroup:"Year 10",
   name:"Distance Between Two Points", emoji:"📐", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Use Pythagoras to find the distance between two coordinate points.",
   learningOutcomes:["Form a right-angled triangle on the grid","Use distance = √((x₂−x₁)²+(y₂−y₁)²)","Apply to coordinate problems"],
   prerequisites:["m10i-07-1"],
   topics:["Coordinate distance","Right triangle on a grid","Distance formula"]}
);

// ── Topic 8: Trigonometry SOHCAHTOA (m10t-08) ───────────────────────────────
CURRICULUM.push(
  {id:"m10i-08-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-08", yearGroup:"Year 10",
   name:"Finding a Side", emoji:"📐", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use sin, cos and tan (SOHCAHTOA) to find a missing side.",
   learningOutcomes:["Label opposite, adjacent and hypotenuse","Choose the correct ratio","Find a missing side"],
   prerequisites:["m10i-07-1"],
   topics:["Labelling sides","Choosing sin/cos/tan","Finding a side"]},

  {id:"m10i-08-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-08", yearGroup:"Year 10",
   name:"Finding an Angle", emoji:"📐", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use inverse trig functions to find a missing angle.",
   learningOutcomes:["Set up the ratio from two sides","Use sin⁻¹, cos⁻¹, tan⁻¹","Find a missing angle"],
   prerequisites:["m10i-08-1"],
   topics:["Ratio from two sides","Inverse functions","Finding an angle"]},

  {id:"m10i-08-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-08", yearGroup:"Year 10",
   name:"Exact Values & Applications", emoji:"🎯", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Recall exact trig values and apply trigonometry to problems.",
   learningOutcomes:["Recall exact values for 0,30,45,60,90°","Apply trig to bearings and elevation","Combine with Pythagoras"],
   prerequisites:["m10i-08-2"],
   topics:["Exact values","Angles of elevation","Combined problems"]},
  {id:"m10i-08-4", subject:"Mathematics", subjectId:"math", topicId:"m10t-08", yearGroup:"Year 10",
   name:"3D Trigonometry", emoji:"🧊", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find lengths and the angle between a line and a plane in 3D shapes.",
   learningOutcomes:["Identify the right-angled triangle inside a 3D shape","Find the angle between a line and a plane","Combine with 3D Pythagoras"],
   prerequisites:["m10i-08-2"],
   topics:["Triangle in 3D","Line and plane angle","Combined with Pythagoras"]}
);

// ── Topic 9: Transformations (m10t-09) ──────────────────────────────────────
CURRICULUM.push(
  {id:"m10i-09-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-09", yearGroup:"Year 10",
   name:"Reflections & Rotations", emoji:"🪞", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Reflect a shape in a line and rotate it about a point.",
   learningOutcomes:["Reflect in horizontal, vertical and diagonal lines","Rotate about a point by 90° and 180°","Describe a reflection or rotation fully"],
   prerequisites:[],
   topics:["Reflection in a mirror line","Rotation about a centre","Describing fully"]},

  {id:"m10i-09-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-09", yearGroup:"Year 10",
   name:"Translations & Vectors", emoji:"➡️", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Translate a shape using a column vector and describe translations.",
   learningOutcomes:["Translate by a column vector","Write a translation as a vector","Combine two translations"],
   prerequisites:["m10i-09-1"],
   topics:["Column vectors","Describing translations","Combining vectors"]},

  {id:"m10i-09-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-09", yearGroup:"Year 10",
   name:"Enlargements", emoji:"🔍", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Enlarge a shape by a scale factor from a centre, including fractional and negative factors.",
   learningOutcomes:["Enlarge by a positive scale factor","Use a fractional scale factor","Use a negative scale factor"],
   prerequisites:["m10i-09-1"],
   topics:["Scale factor & centre","Fractional enlargements","Negative enlargements"]}
);

// ── Topic 10: Congruence & Similarity (m10t-10) ─────────────────────────────
CURRICULUM.push(
  {id:"m10i-10-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-10", yearGroup:"Year 10",
   name:"Congruent Triangles", emoji:"🪞", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use the congruence conditions SSS, SAS, ASA and RHS.",
   learningOutcomes:["State the four congruence conditions","Decide whether two triangles are congruent","Use congruence to find missing facts"],
   prerequisites:[],
   topics:["SSS, SAS, ASA, RHS","Testing congruence","Using congruence"]},

  {id:"m10i-10-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-10", yearGroup:"Year 10",
   name:"Similar Shapes & Scale Factors", emoji:"🔺", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use the linear scale factor to find missing lengths in similar shapes.",
   learningOutcomes:["Identify similar shapes","Find the linear scale factor","Find missing lengths"],
   prerequisites:["m10i-10-1"],
   topics:["Similar shapes","Linear scale factor","Missing lengths"]},

  {id:"m10i-10-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-10", yearGroup:"Year 10",
   name:"Area & Volume Scale Factors", emoji:"🧊", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Use that area scales by k² and volume by k³ for a linear scale factor k.",
   learningOutcomes:["Use the area scale factor k²","Use the volume scale factor k³","Solve scaling problems"],
   prerequisites:["m10i-10-2"],
   topics:["Area scale factor","Volume scale factor","Problem solving"]}
);

// ── Topic 11: Compound Measures & Proportion (m10t-11) ──────────────────────
CURRICULUM.push(
  {id:"m10i-11-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-11", yearGroup:"Year 10",
   name:"Speed, Density & Pressure", emoji:"⚙️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use compound measures and their formula triangles.",
   learningOutcomes:["Use speed = distance ÷ time","Use density = mass ÷ volume","Rearrange with a formula triangle"],
   prerequisites:[],
   topics:["Speed","Density & pressure","Formula triangles"]},

  {id:"m10i-11-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-11", yearGroup:"Year 10",
   name:"Direct & Inverse Proportion", emoji:"📈", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Set up and use direct and inverse proportion, including y = kx and y = k/x.",
   learningOutcomes:["Find the constant of proportionality","Use y = kx for direct proportion","Use y = k/x for inverse proportion"],
   prerequisites:[],
   topics:["Constant k","Direct proportion","Inverse proportion"]},

  {id:"m10i-11-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-11", yearGroup:"Year 10",
   name:"Ratio & Proportion Problems", emoji:"🧩", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Solve multi-step ratio and proportion problems in context.",
   learningOutcomes:["Combine ratio with proportion","Solve best-value and mixing problems","Work backwards from a part"],
   prerequisites:["m10i-11-2"],
   topics:["Multi-step ratio","Mixing & recipes","Working backwards"]},
  {id:"m10i-11-4", subject:"Mathematics", subjectId:"math", topicId:"m10t-11", yearGroup:"Year 10",
   name:"Converting Compound Units", emoji:"🔄", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Convert compound units such as m/s ↔ km/h and g/cm³ ↔ kg/m³.",
   learningOutcomes:["Convert speeds between m/s and km/h","Convert densities between g/cm³ and kg/m³","Compare quantities in consistent units"],
   prerequisites:["m10i-11-1"],
   topics:["Speed units","Density units","Comparing"]}
);

// ── Topic 12: Statistics: Averages & Diagrams (m10t-12) ─────────────────────
CURRICULUM.push(
  {id:"m10i-12-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-12", yearGroup:"Year 10",
   name:"Averages & Range", emoji:"📊", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Find the mean, median, mode and range, including from frequency tables.",
   learningOutcomes:["Find mean, median, mode and range","Find averages from a frequency table","Estimate the mean from grouped data"],
   prerequisites:[],
   topics:["Mean, median, mode, range","From frequency tables","Estimated mean"]},

  {id:"m10i-12-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-12", yearGroup:"Year 10",
   name:"Charts & Frequency Diagrams", emoji:"📈", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Draw and interpret bar charts, pie charts and frequency diagrams.",
   learningOutcomes:["Read and draw bar and pie charts","Work out pie-chart angles","Compare distributions"],
   prerequisites:["m10i-12-1"],
   topics:["Bar & pie charts","Pie-chart angles","Comparing data"]},

  {id:"m10i-12-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-12", yearGroup:"Year 10",
   name:"Scatter Graphs & Correlation", emoji:"⤴️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Plot scatter graphs, describe correlation and use a line of best fit.",
   learningOutcomes:["Describe types of correlation","Draw a line of best fit","Use it to estimate values"],
   prerequisites:["m10i-12-1"],
   topics:["Correlation","Line of best fit","Estimating values"]}
);

// ── Topic 13: Sampling & Data (m10t-13) ─────────────────────────────────────
CURRICULUM.push(
  {id:"m10i-13-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-13", yearGroup:"Year 10",
   name:"Populations & Sampling", emoji:"🎯", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Understand populations and samples and why we sample.",
   learningOutcomes:["Define population and sample","Explain why samples are used","Recognise a random sample"],
   prerequisites:[],
   topics:["Population vs sample","Why sample","Random sampling"]},

  {id:"m10i-13-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-13", yearGroup:"Year 10",
   name:"Bias & Stratified Sampling", emoji:"⚖️", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Identify bias in samples and calculate a stratified sample.",
   learningOutcomes:["Identify sources of bias","Improve a sampling method","Calculate a stratified sample"],
   prerequisites:["m10i-13-1"],
   topics:["Sources of bias","Improving sampling","Stratified samples"]}
);

// ── Topic 14: Probability: Trees, Venn & Sets (m10t-14) ─────────────────────
CURRICULUM.push(
  {id:"m10i-14-1", subject:"Mathematics", subjectId:"math", topicId:"m10t-14", yearGroup:"Year 10",
   name:"Tree Diagrams", emoji:"🌳", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use tree diagrams for independent and dependent combined events.",
   learningOutcomes:["Complete a tree diagram","Multiply along branches and add paths","Handle dependent (without replacement) events"],
   prerequisites:[],
   topics:["Independent events","Multiply & add","Without replacement"]},

  {id:"m10i-14-2", subject:"Mathematics", subjectId:"math", topicId:"m10t-14", yearGroup:"Year 10",
   name:"Venn Diagrams & Set Notation", emoji:"⭕", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use Venn diagrams and set notation (union, intersection, complement).",
   learningOutcomes:["Place data in a Venn diagram","Use ∪, ∩ and complement notation","Find probabilities from a Venn diagram"],
   prerequisites:["m10i-14-1"],
   topics:["Venn diagrams","Set notation","Probability from Venn"]},

  {id:"m10i-14-3", subject:"Mathematics", subjectId:"math", topicId:"m10t-14", yearGroup:"Year 10",
   name:"Combined & Conditional Probability", emoji:"🎲", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Find probabilities of combined events and an introduction to conditional probability.",
   learningOutcomes:["Use the AND (×) and OR (+) rules","Find conditional probabilities from a table or Venn","Reason about 'given that' situations"],
   prerequisites:["m10i-14-2"],
   topics:["AND / OR rules","Conditional probability","'Given that' reasoning"]}
);
