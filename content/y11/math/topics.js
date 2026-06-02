// content/y11/math/topics.js — Year 11 Maths: topic tiles + island definitions.
// Authored by the atlas-content skill. Higher tier (GCSE completion + exam technique).

// ── MATH TOPICS YEAR 11 ─────────────────────────────────────────────────────
const MATH_TOPICS_Y11 = [
  {id:"m11t-01", name:"Quadratic Formula & Completing the Square", emoji:"✖️", hasContent:true,
   description:"Solve quadratics with the formula, complete the square, and find turning points."},
  {id:"m11t-02", name:"Quadratic & Other Graphs", emoji:"📉", hasContent:true,
   description:"Plot and recognise quadratic, cubic, reciprocal and exponential graphs."},
  {id:"m11t-03", name:"Simultaneous Equations (linear & quadratic)", emoji:"➕", hasContent:true,
   description:"Solve a linear and a quadratic equation together, by substitution and graphically."},
  {id:"m11t-04", name:"Algebraic Fractions & Manipulation", emoji:"➗", hasContent:true,
   description:"Simplify and combine algebraic fractions, and convert recurring decimals to fractions."},
  {id:"m11t-05", name:"Functions", emoji:"🔣", hasContent:true,
   description:"Use function notation, and form composite and inverse functions."},
  {id:"m11t-06", name:"Sequences: Quadratic nth Term & Geometric", emoji:"🌀", hasContent:true,
   description:"Find the nth term of a quadratic sequence and work with geometric and special sequences."},
  {id:"m11t-07", name:"Circle Theorems", emoji:"⭕", hasContent:true,
   description:"Apply the circle theorems for angles, tangents and cyclic quadrilaterals, with reasons."},
  {id:"m11t-08", name:"Trigonometry: Sine & Cosine Rules", emoji:"📐", hasContent:true,
   description:"Use the sine and cosine rules and the area formula in non-right-angled triangles."},
  {id:"m11t-09", name:"Vectors", emoji:"➡️", hasContent:true,
   description:"Add, subtract and scale vectors, and use them to prove geometric results."},
  {id:"m11t-10", name:"Trig Graphs & Transformations of Graphs", emoji:"〰️", hasContent:true,
   description:"Recognise sine, cosine and tangent graphs and transform graphs of functions."},
  {id:"m11t-11", name:"Growth, Decay & Iteration", emoji:"📈", hasContent:true,
   description:"Use compound growth and decay, repeated percentage change, and iterative methods."},
  {id:"m11t-12", name:"Histograms & Cumulative Frequency", emoji:"📊", hasContent:true,
   description:"Draw and read histograms with unequal classes, cumulative frequency curves and box plots."},
  {id:"m11t-13", name:"Conditional Probability & Set Notation", emoji:"🎲", hasContent:true,
   description:"Find conditional probabilities and use set notation with Venn diagrams."},
  {id:"m11t-14", name:"Gradients, Areas under Graphs & Proof", emoji:"🧮", hasContent:true,
   description:"Estimate gradients and areas under graphs, and write clear algebraic proofs."}
];

// ── Topic 1: Quadratic Formula & Completing the Square (m11t-01) ─────────────
CURRICULUM.push(
  {id:"m11i-01-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-01", yearGroup:"Year 11",
   name:"The Quadratic Formula", emoji:"✖️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use the quadratic formula to solve any quadratic equation, including non-factorising ones.",
   learningOutcomes:["Identify a, b and c","Substitute into the quadratic formula","Give solutions to a required accuracy"],
   prerequisites:["m10i-04-1"],
   topics:["Identifying a, b, c","Substituting safely","Rounding solutions"]},

  {id:"m11i-01-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-01", yearGroup:"Year 11",
   name:"Completing the Square", emoji:"🟦", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Write x² + bx + c in the form (x + p)² + q.",
   learningOutcomes:["Halve the coefficient of x","Write in completed-square form","Solve a quadratic by completing the square"],
   prerequisites:["m11i-01-1"],
   topics:["Completed-square form","Finding p and q","Solving by completing the square"]},

  {id:"m11i-01-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-01", yearGroup:"Year 11",
   name:"Turning Points & Sketching", emoji:"📉", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use the completed square to find the turning point and sketch a parabola.",
   learningOutcomes:["Read the turning point from (x + p)² + q","Identify the line of symmetry","Sketch a quadratic with key points"],
   prerequisites:["m11i-01-2"],
   topics:["Turning point","Line of symmetry","Sketching the parabola"]}
);

// ── Topic 2: Quadratic & Other Graphs (m11t-02) ─────────────────────────────
CURRICULUM.push(
  {id:"m11i-02-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-02", yearGroup:"Year 11",
   name:"Plotting Quadratic Graphs", emoji:"📉", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Complete a table of values and plot a quadratic curve, reading roots and the turning point.",
   learningOutcomes:["Complete a table of values","Plot a smooth parabola","Read roots and the minimum/maximum"],
   prerequisites:["m11i-01-3"],
   topics:["Table of values","Plotting the curve","Roots and turning point"]},

  {id:"m11i-02-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-02", yearGroup:"Year 11",
   name:"Cubic & Reciprocal Graphs", emoji:"〽️", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Plot and recognise cubic and reciprocal graphs and their key features.",
   learningOutcomes:["Plot a cubic graph","Plot a reciprocal graph","Describe their shapes and asymptotes"],
   prerequisites:["m11i-02-1"],
   topics:["Cubic graphs","Reciprocal graphs","Asymptotes"]},

  {id:"m11i-02-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-02", yearGroup:"Year 11",
   name:"Recognising Graph Shapes", emoji:"🔎", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Match equations to the shapes of linear, quadratic, cubic, reciprocal and exponential graphs.",
   learningOutcomes:["Recognise graph shapes from equations","Identify exponential growth/decay curves","Match equations to sketches"],
   prerequisites:["m11i-02-2"],
   topics:["Matching shapes","Exponential graphs","Equation to graph"]}
);

// ── Topic 3: Simultaneous Equations (linear & quadratic) (m11t-03) ──────────
CURRICULUM.push(
  {id:"m11i-03-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-03", yearGroup:"Year 11",
   name:"Linear & Quadratic by Substitution", emoji:"➕", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Solve a linear and a quadratic equation simultaneously using substitution.",
   learningOutcomes:["Substitute the linear equation into the quadratic","Solve the resulting quadratic","Find both solution pairs"],
   prerequisites:["m10i-02-2","m10i-04-1"],
   topics:["Substituting in","Solving the quadratic","Two solution pairs"]},

  {id:"m11i-03-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-03", yearGroup:"Year 11",
   name:"Graphical Solutions & Problems", emoji:"📈", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Interpret the solutions as intersection points of a line and a curve.",
   learningOutcomes:["Link solutions to where the line meets the curve","Interpret one or two intersection points","Solve worded problems"],
   prerequisites:["m11i-03-1"],
   topics:["Line meets curve","Number of solutions","Worded problems"]}
);

// ── Topic 4: Algebraic Fractions & Manipulation (m11t-04) ───────────────────
CURRICULUM.push(
  {id:"m11i-04-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-04", yearGroup:"Year 11",
   name:"Simplifying Algebraic Fractions", emoji:"➗", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Factorise and cancel to simplify algebraic fractions.",
   learningOutcomes:["Factorise numerator and denominator","Cancel common factors","Simplify fractions with quadratics"],
   prerequisites:["m10i-03-2"],
   topics:["Factorise then cancel","Common factors","Quadratic fractions"]},

  {id:"m11i-04-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-04", yearGroup:"Year 11",
   name:"Four Operations with Algebraic Fractions", emoji:"🧮", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Add, subtract, multiply and divide algebraic fractions.",
   learningOutcomes:["Use a common denominator to add/subtract","Multiply and divide algebraic fractions","Simplify the result"],
   prerequisites:["m11i-04-1"],
   topics:["Common denominator","Multiply & divide","Simplifying"]},

  {id:"m11i-04-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-04", yearGroup:"Year 11",
   name:"Recurring Decimals to Fractions", emoji:"🔁", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Convert a recurring decimal to a fraction using algebra.",
   learningOutcomes:["Set the decimal equal to x","Multiply by a power of 10 and subtract","Write the result as a fraction in simplest form"],
   prerequisites:[],
   topics:["Let x = the decimal","Subtract to remove the recurring part","Simplify the fraction"]}
);

// ── Topic 5: Functions (m11t-05) ────────────────────────────────────────────
CURRICULUM.push(
  {id:"m11i-05-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-05", yearGroup:"Year 11",
   name:"Function Notation & Composite Functions", emoji:"🔣", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use f(x) notation, evaluate functions and form composite functions.",
   learningOutcomes:["Evaluate f(x) for a value","Form a composite function fg(x)","Apply functions in the correct order"],
   prerequisites:["m10i-09-3"],
   topics:["Function notation","Evaluating f(x)","Composite functions"]},

  {id:"m11i-05-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-05", yearGroup:"Year 11",
   name:"Inverse Functions", emoji:"↩️", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Find the inverse function f⁻¹(x) by rearranging.",
   learningOutcomes:["Write y = f(x) and swap x and y","Rearrange to make y the subject","State the inverse function"],
   prerequisites:["m11i-05-1"],
   topics:["Swap x and y","Rearrange","State f⁻¹(x)"]}
);

// ── Topic 6: Sequences: Quadratic nth Term & Geometric (m11t-06) ────────────
CURRICULUM.push(
  {id:"m11i-06-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-06", yearGroup:"Year 11",
   name:"Quadratic nth Term", emoji:"🌀", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find the nth term of a quadratic sequence using second differences.",
   learningOutcomes:["Find the second difference","Find the an² term","Complete the nth-term rule"],
   prerequisites:["m9i-10-1"],
   topics:["Second differences","The an² term","Completing the rule"]},

  {id:"m11i-06-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-06", yearGroup:"Year 11",
   name:"Geometric & Special Sequences", emoji:"🔁", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Work with geometric sequences and recognise other special sequences.",
   learningOutcomes:["Find the common ratio","Continue a geometric sequence","Recognise special sequences"],
   prerequisites:["m11i-06-1"],
   topics:["Common ratio","Continuing the sequence","Special sequences"]}
);

// ── Topic 7: Circle Theorems (m11t-07) ──────────────────────────────────────
CURRICULUM.push(
  {id:"m11i-07-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-07", yearGroup:"Year 11",
   name:"Angles in a Circle", emoji:"⭕", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use the centre, semicircle and same-segment angle theorems.",
   learningOutcomes:["Angle at the centre is twice the angle at the circumference","Angle in a semicircle is 90°","Angles in the same segment are equal"],
   prerequisites:["m9i-11-3"],
   topics:["Angle at the centre","Semicircle angle","Same segment"]},

  {id:"m11i-07-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-07", yearGroup:"Year 11",
   name:"Tangents & Chords", emoji:"📏", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use tangent and chord properties, including the alternate segment idea.",
   learningOutcomes:["A tangent meets a radius at 90°","Two tangents from a point are equal","Use the perpendicular from the centre to a chord"],
   prerequisites:["m11i-07-1"],
   topics:["Tangent and radius","Equal tangents","Chord bisector"]},

  {id:"m11i-07-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-07", yearGroup:"Year 11",
   name:"Cyclic Quadrilaterals & Proof", emoji:"🔷", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Use the cyclic-quadrilateral theorem and give reasons in circle proofs.",
   learningOutcomes:["Opposite angles of a cyclic quadrilateral sum to 180°","Combine theorems to find angles","Give a reason for each step"],
   prerequisites:["m11i-07-1"],
   topics:["Cyclic quadrilateral","Combining theorems","Reasoning"]}
);

// ── Topic 8: Sine & Cosine Rules (m11t-08) ──────────────────────────────────
CURRICULUM.push(
  {id:"m11i-08-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-08", yearGroup:"Year 11",
   name:"The Sine Rule", emoji:"📐", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use the sine rule to find sides and angles in non-right-angled triangles.",
   learningOutcomes:["Use a/sin A = b/sin B","Find a missing side","Find a missing angle"],
   prerequisites:["m10i-08-2"],
   topics:["Sine rule for sides","Sine rule for angles","When to use it"]},

  {id:"m11i-08-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-08", yearGroup:"Year 11",
   name:"The Cosine Rule", emoji:"📐", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use the cosine rule to find a side or angle when the sine rule cannot start.",
   learningOutcomes:["Use a² = b² + c² − 2bc cos A","Find a side from two sides and the included angle","Find an angle from three sides"],
   prerequisites:["m11i-08-1"],
   topics:["Cosine rule for a side","Cosine rule for an angle","Choosing the rule"]},

  {id:"m11i-08-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-08", yearGroup:"Year 11",
   name:"Area of a Triangle", emoji:"🔺", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Use Area = ½ab sin C to find the area of any triangle.",
   learningOutcomes:["Use ½ab sin C","Choose the two sides and included angle","Apply to real problems"],
   prerequisites:["m11i-08-1"],
   topics:["½ab sin C","Included angle","Applications"]}
);

// ── Topic 9: Vectors (m11t-09) ──────────────────────────────────────────────
CURRICULUM.push(
  {id:"m11i-09-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-09", yearGroup:"Year 11",
   name:"Vector Arithmetic", emoji:"➡️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Add, subtract and multiply vectors by a scalar using column vectors.",
   learningOutcomes:["Add and subtract column vectors","Multiply a vector by a scalar","Find the resultant of two vectors"],
   prerequisites:["m10i-09-2"],
   topics:["Adding vectors","Scalar multiples","Resultant vectors"]},

  {id:"m11i-09-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-09", yearGroup:"Year 11",
   name:"Geometric Vector Proof", emoji:"🧭", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Express journeys as vectors and use them to prove points are collinear or lines parallel.",
   learningOutcomes:["Write a path in terms of given vectors","Show two vectors are parallel","Prove three points are collinear"],
   prerequisites:["m11i-09-1"],
   topics:["Paths as vectors","Parallel vectors","Collinear points"]}
);

// ── Topic 10: Trig Graphs & Transformations of Graphs (m11t-10) ─────────────
CURRICULUM.push(
  {id:"m11i-10-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-10", yearGroup:"Year 11",
   name:"Trig Graphs", emoji:"〰️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Recognise and read the graphs of sin, cos and tan.",
   learningOutcomes:["Recognise the sine and cosine curves","Know their periods and key values","Read values from a trig graph"],
   prerequisites:["m10i-08-3"],
   topics:["Sine & cosine curves","Period and amplitude","Reading values"]},

  {id:"m11i-10-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-10", yearGroup:"Year 11",
   name:"Transformations of Graphs", emoji:"🔃", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Apply translations and reflections to the graph of a function y = f(x).",
   learningOutcomes:["Use f(x) + a and f(x + a) translations","Use −f(x) and f(−x) reflections","Describe a transformation from two graphs"],
   prerequisites:["m11i-02-1"],
   topics:["Translations of graphs","Reflections of graphs","Describing transformations"]}
);

// ── Topic 11: Growth, Decay & Iteration (m11t-11) ───────────────────────────
CURRICULUM.push(
  {id:"m11i-11-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-11", yearGroup:"Year 11",
   name:"Compound Growth & Decay", emoji:"📈", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use a multiplier raised to a power for compound interest and depreciation.",
   learningOutcomes:["Find the multiplier","Use P × (multiplier)ⁿ","Apply to interest and depreciation"],
   prerequisites:["m9i-08-3"],
   topics:["Finding the multiplier","Raising to a power","Interest & depreciation"]},

  {id:"m11i-11-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-11", yearGroup:"Year 11",
   name:"Repeated Percentage Change", emoji:"🔁", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Combine several percentage changes and find an overall change.",
   learningOutcomes:["Apply successive percentage changes","Find the overall percentage change","Avoid simply adding the percentages"],
   prerequisites:["m11i-11-1"],
   topics:["Successive changes","Overall change","Common pitfalls"]},

  {id:"m11i-11-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-11", yearGroup:"Year 11",
   name:"Iteration", emoji:"🔂", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Use an iterative formula to find an approximate solution to an equation.",
   learningOutcomes:["Substitute a starting value into an iterative formula","Repeat to generate successive values","Recognise convergence to a root"],
   prerequisites:["m10i-09-3"],
   topics:["Iterative formulae","Generating values","Convergence"]}
);

// ── Topic 12: Histograms & Cumulative Frequency (m11t-12) ───────────────────
CURRICULUM.push(
  {id:"m11i-12-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-12", yearGroup:"Year 11",
   name:"Histograms", emoji:"📊", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Draw and interpret histograms with unequal class widths using frequency density.",
   learningOutcomes:["Use frequency density = frequency ÷ class width","Draw a histogram with unequal classes","Find a frequency from a histogram"],
   prerequisites:["m10i-12-2"],
   topics:["Frequency density","Drawing the histogram","Reading frequencies"]},

  {id:"m11i-12-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-12", yearGroup:"Year 11",
   name:"Cumulative Frequency", emoji:"📈", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Build a cumulative frequency curve and read the median and quartiles.",
   learningOutcomes:["Form a cumulative frequency table","Plot the curve","Estimate the median and quartiles"],
   prerequisites:["m10i-12-1"],
   topics:["Cumulative totals","Plotting the curve","Median & quartiles"]},

  {id:"m11i-12-3", subject:"Mathematics", subjectId:"math", topicId:"m11t-12", yearGroup:"Year 11",
   name:"Box Plots & Comparing", emoji:"📦", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Draw box plots and use them to compare two distributions.",
   learningOutcomes:["Draw a box plot from a five-number summary","Find the interquartile range","Compare two distributions"],
   prerequisites:["m11i-12-2"],
   topics:["Five-number summary","Interquartile range","Comparing data"]}
);

// ── Topic 13: Conditional Probability & Set Notation (m11t-13) ──────────────
CURRICULUM.push(
  {id:"m11i-13-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-13", yearGroup:"Year 11",
   name:"Conditional Probability", emoji:"🎲", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find probabilities that depend on a previous outcome, including without replacement.",
   learningOutcomes:["Find P(B given A)","Use tree diagrams without replacement","Solve conditional-probability problems"],
   prerequisites:["m10i-14-3"],
   topics:["P(B given A)","Without replacement","Problem solving"]},

  {id:"m11i-13-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-13", yearGroup:"Year 11",
   name:"Set Notation & Venn Diagrams", emoji:"⭕", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Use set notation with Venn diagrams to find probabilities.",
   learningOutcomes:["Use ∪, ∩ and complement notation","Fill a Venn diagram from given totals","Find probabilities using set notation"],
   prerequisites:["m10i-14-2"],
   topics:["Set notation","Filling a Venn diagram","Probabilities from sets"]}
);

// ── Topic 14: Gradients, Areas under Graphs & Proof (m11t-14) ───────────────
CURRICULUM.push(
  {id:"m11i-14-1", subject:"Mathematics", subjectId:"math", topicId:"m11t-14", yearGroup:"Year 11",
   name:"Gradients & Areas under Graphs", emoji:"🧮", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Estimate the gradient of a curve and the area under a graph, and interpret them.",
   learningOutcomes:["Estimate a gradient using a tangent","Estimate area with the trapezium method","Interpret gradient and area in context"],
   prerequisites:["m10i-06-1"],
   topics:["Gradient of a curve","Area under a graph","Interpreting results"]},

  {id:"m11i-14-2", subject:"Mathematics", subjectId:"math", topicId:"m11t-14", yearGroup:"Year 11",
   name:"Algebraic Proof", emoji:"✅", difficulty:3, estimatedHours:1, color:"#3b82f6",
   description:"Write clear algebraic proofs, including with odd, even and consecutive numbers.",
   learningOutcomes:["Write numbers algebraically (2n, 2n+1)","Show a result is always true","Set out a clear proof"],
   prerequisites:["m10i-09-3"],
   topics:["Algebraic expressions for numbers","Proving a statement","Clear reasoning"]}
);
