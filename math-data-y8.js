// math-data-y8.js — IXL Year 8 Maths: topic tiles + island definitions
// Based on the UK IXL Year 8 Maths curriculum
// Questions/flashcards will be in math-content-y8-*.js files

// ── MATH TOPICS YEAR 8 (28 main tiles on dashboard) ─────────────────────────
const MATH_TOPICS_Y8 = [
  {id:"m8t-01",name:"Number Theory & Standard Form",emoji:"🔢",hasContent:true,
   description:"Identify factors and primes, find HCF and LCM using prime factorisation, convert between ordinary numbers and standard form, and classify numbers."},
  {id:"m8t-02",name:"Decimals & Operations",emoji:"🔟",hasContent:true,
   description:"Compare, order and round decimals, add, subtract, multiply and divide decimals, estimate answers, and evaluate expressions involving decimals."},
  {id:"m8t-03",name:"Fractions & Mixed Numbers",emoji:"½",hasContent:true,
   description:"Simplify, compare and order fractions, convert between fractions, decimals and mixed numbers, and add and subtract fractions and mixed numbers."},
  {id:"m8t-04",name:"Multiply & Divide Fractions",emoji:"✕",hasContent:true,
   description:"Multiply and divide fractions and mixed numbers using models and written methods, scale with fractions, and estimate products and quotients."},
  {id:"m8t-05",name:"Integers & Operations",emoji:"➖",hasContent:true,
   description:"Understand positive and negative integers, add, subtract, multiply and divide integers using number lines and rules, and evaluate integer expressions."},
  {id:"m8t-06",name:"Rational Numbers",emoji:"🔢",hasContent:true,
   description:"Identify, compare and order rational numbers, add, subtract, multiply and divide positive and negative fractions and decimals, and evaluate expressions."},
  {id:"m8t-07",name:"Indices & Roots",emoji:"⚡",hasContent:true,
   description:"Evaluate indices with whole number, negative, decimal and fractional bases, find square roots and cube roots, and solve equations with variable indices."},
  {id:"m8t-08",name:"Ratios & Proportions",emoji:"⚖️",hasContent:true,
   description:"Write and simplify ratios, calculate unit rates and speed, solve proportions, identify and graph proportional relationships, and find rate of change."},
  {id:"m8t-09",name:"Percentages",emoji:"💯",hasContent:true,
   description:"Convert between percents, fractions and decimals, find percentages of amounts, calculate percent of change, and solve percent equations."},
  {id:"m8t-10",name:"Consumer Maths",emoji:"💷",hasContent:true,
   description:"Calculate unit prices, discounts, VAT, tips and mark-ups, and understand simple and compound interest."},
  {id:"m8t-11",name:"Problem Solving & Estimation",emoji:"🧩",hasContent:true,
   description:"Solve multi-step word problems, use estimation to check answers, apply guess-and-check strategies, and use Venn diagrams."},
  {id:"m8t-12",name:"Units of Measurement",emoji:"📏",hasContent:true,
   description:"Convert between metric and imperial units, work with square and cubic units, link cm³ to ml and m³ to litres, and understand precision."},
  {id:"m8t-13",name:"Coordinate Plane",emoji:"📍",hasContent:true,
   description:"Plot and read points in all four quadrants, identify quadrant positions, follow directions, and calculate distance between two points."},
  {id:"m8t-14",name:"Number Sequences",emoji:"🔄",hasContent:true,
   description:"Identify and continue arithmetic and geometric sequences, write and evaluate variable expressions for sequences, and solve sequence word problems."},
  {id:"m8t-15",name:"Expressions & Properties",emoji:"📝",hasContent:true,
   description:"Write and evaluate expressions, collect like terms, expand using the distributive property, factorise linear expressions, and identify equivalent expressions."},
  {id:"m8t-16",name:"Solving Equations",emoji:"⚖️",hasContent:true,
   description:"Solve one-step, two-step and multi-step equations, model equations with algebra tiles, and apply the distributive property to solve equations."},
  {id:"m8t-17",name:"Inequalities",emoji:"↔️",hasContent:true,
   description:"Write, graph and solve one-step and two-step inequalities, and apply inequalities to word problems."},
  {id:"m8t-18",name:"Two-Variable Equations",emoji:"📈",hasContent:true,
   description:"Determine whether (x, y) satisfies an equation, complete tables and graph two-variable equations, and interpret real-world graphs."},
  {id:"m8t-19",name:"Linear Functions",emoji:"📉",hasContent:true,
   description:"Find the gradient from graphs and coordinates, identify the y-intercept, graph lines using gradient, and write equations in y = mx + c form."},
  {id:"m8t-20",name:"2D Shapes & Angles",emoji:"📐",hasContent:true,
   description:"Classify polygons and angles, find missing angles using triangle, quadrilateral and polygon rules, apply transversal angle relationships, and explore circle parts."},
  {id:"m8t-21",name:"3D Figures",emoji:"📦",hasContent:true,
   description:"Identify bases and nets of 3D figures, draw front, side and top views, and work with base plans."},
  {id:"m8t-22",name:"Area, Perimeter & Volume",emoji:"📐",hasContent:true,
   description:"Find areas of triangles, parallelograms, trapeziums, circles and compound figures, calculate volumes of cuboids, prisms and cylinders, and work with scale drawings."},
  {id:"m8t-23",name:"Transformations",emoji:"🔀",hasContent:true,
   description:"Identify and perform reflections, rotations, translations and dilations on the coordinate plane, and write transformation rules."},
  {id:"m8t-24",name:"Congruence & Similarity",emoji:"🔲",hasContent:true,
   description:"Identify congruent and similar figures, use congruence and similarity statements, find missing measurements, and apply indirect measurement."},
  {id:"m8t-25",name:"Pythagoras' Theorem",emoji:"📏",hasContent:true,
   description:"Use Pythagoras' theorem to find missing side lengths, calculate perimeters of right triangles, solve word problems, and apply the converse."},
  {id:"m8t-26",name:"Constructions",emoji:"🔧",hasContent:true,
   description:"Construct perpendicular bisectors, angle bisectors, perpendicular lines, and equilateral triangles and regular hexagons using compass and straightedge."},
  {id:"m8t-27",name:"Data & Statistics",emoji:"📊",hasContent:true,
   description:"Create and interpret tables, line plots, stem-and-leaf plots, bar charts, pie charts and line graphs, calculate averages, identify outliers, and work with scatter plots."},
  {id:"m8t-28",name:"Probability",emoji:"🎲",hasContent:true,
   description:"Find probabilities of simple, mutually exclusive and compound events, use experimental data to make predictions, and work with sample spaces."}
];

// ── YEAR 8 MATH ISLANDS → pushed into CURRICULUM ────────────────────────────
CURRICULUM.push(

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 1 — NUMBER THEORY & STANDARD FORM (m8t-01)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-01-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-01",yearGroup:"Year 8",
   name:"Factors, Primes & Divisibility",emoji:"🔍",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Apply divisibility rules, identify factors of a number, and classify numbers as prime or composite.",
   learningOutcomes:["Apply divisibility rules for 2, 3, 4, 5, 6, 8, 9 and 10","List all factors of a given number","Classify numbers as prime or composite"],
   prerequisites:[],
   topics:["Divisibility rules","Identifying factors","Prime numbers","Composite numbers","Multiplicative inverses"]},

  {id:"m8i-01-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-01",yearGroup:"Year 8",
   name:"Prime Factorisation, HCF & LCM",emoji:"🌳",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Break numbers into prime factors, find the HCF and LCM, and solve related word problems.",
   learningOutcomes:["Write the prime factorisation of any whole number","Find the HCF and LCM of two or more numbers","Solve HCF and LCM word problems"],
   prerequisites:["m8i-01-1"],
   topics:["Factor trees","Prime factorisation","Highest common factor","Lowest common multiple","HCF and LCM word problems"]},

  {id:"m8i-01-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-01",yearGroup:"Year 8",
   name:"Standard Form",emoji:"🔬",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Convert between ordinary numbers and standard form (scientific notation) and compare numbers written in standard form.",
   learningOutcomes:["Write a number in standard form (a × 10ⁿ)","Convert from standard form to an ordinary number","Compare and order numbers in standard form"],
   prerequisites:["m8i-01-1"],
   topics:["Standard form notation","Converting to standard form","Converting from standard form","Comparing numbers in standard form"]},

  {id:"m8i-01-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-01",yearGroup:"Year 8",
   name:"Classify & Compare Numbers",emoji:"🏷️",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Classify numbers as natural, whole, integer, rational or irrational, and compare different number types.",
   learningOutcomes:["Classify numbers into number sets","Identify relationships between number types","Place numbers on a number system diagram"],
   prerequisites:[],
   topics:["Natural numbers","Whole numbers","Integers","Rational numbers","Number classification"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 2 — DECIMALS & OPERATIONS (m8t-02)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-02-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-02",yearGroup:"Year 8",
   name:"Decimal Place Value & Ordering",emoji:"🔟",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Review decimal place value, compare and order decimals, and place them on number lines.",
   learningOutcomes:["Identify place values in decimal numbers","Compare and order decimals","Read and plot decimals on number lines"],
   prerequisites:[],
   topics:["Decimal place values","Comparing decimals","Ordering decimals","Decimal number lines","Rounding decimals"]},

  {id:"m8i-02-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-02",yearGroup:"Year 8",
   name:"Add & Subtract Decimals",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract decimals, complete missing number sentences, and solve word problems.",
   learningOutcomes:["Add decimals with different numbers of decimal places","Subtract decimals with borrowing","Solve decimal addition and subtraction word problems"],
   prerequisites:["m8i-02-1"],
   topics:["Column addition with decimals","Column subtraction with decimals","Missing number sentences","Decimal word problems"]},

  {id:"m8i-02-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-02",yearGroup:"Year 8",
   name:"Multiply & Divide Decimals",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide decimals by whole numbers and by powers of ten, and estimate products.",
   learningOutcomes:["Multiply decimals by whole numbers and other decimals","Divide decimals by whole numbers","Multiply and divide by powers of ten"],
   prerequisites:["m8i-02-1"],
   topics:["Decimal multiplication","Decimal division","Powers of ten","Estimating products and quotients"]},

  {id:"m8i-02-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-02",yearGroup:"Year 8",
   name:"Multi-Step Decimal Problems",emoji:"🧮",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve multi-step problems with decimals including inequalities, maps with distances, and numerical expressions.",
   learningOutcomes:["Evaluate multi-step decimal expressions","Solve decimal word problems involving multiple operations","Use decimal distances on maps"],
   prerequisites:["m8i-02-2","m8i-02-3"],
   topics:["Multi-step expressions","Decimal inequalities","Map distances","Mixed operation word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 3 — FRACTIONS & MIXED NUMBERS (m8t-03)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-03-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-03",yearGroup:"Year 8",
   name:"Simplify, Compare & Order Fractions",emoji:"½",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Write fractions in lowest terms, find the lowest common denominator, and compare and order fractions and mixed numbers.",
   learningOutcomes:["Simplify fractions to lowest terms","Find the lowest common denominator","Compare and order fractions, improper fractions and mixed numbers"],
   prerequisites:[],
   topics:["Lowest terms","Lowest common denominator","Comparing fractions","Ordering fractions","Fraction word problems"]},

  {id:"m8i-03-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-03",yearGroup:"Year 8",
   name:"Convert Fractions, Decimals & Mixed Numbers",emoji:"🔄",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Convert fluently between fractions, mixed numbers, improper fractions and decimals.",
   learningOutcomes:["Convert between mixed numbers and improper fractions","Convert fractions and mixed numbers to decimals","Convert decimals to fractions and vice versa"],
   prerequisites:["m8i-03-1"],
   topics:["Mixed numbers ↔ improper fractions","Fractions to decimals","Decimals to fractions","Ordering mixed forms"]},

  {id:"m8i-03-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-03",yearGroup:"Year 8",
   name:"Add & Subtract Fractions",emoji:"➕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract fractions with the same and different denominators, and solve word problems.",
   learningOutcomes:["Add fractions with different denominators using the LCD","Subtract fractions with regrouping","Solve fraction addition and subtraction word problems"],
   prerequisites:["m8i-03-1"],
   topics:["Same denominator","Different denominators","Fraction word problems","Estimation of sums and differences"]},

  {id:"m8i-03-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-03",yearGroup:"Year 8",
   name:"Add & Subtract Mixed Numbers",emoji:"🔀",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract mixed numbers, including problems requiring regrouping.",
   learningOutcomes:["Add mixed numbers with different denominators","Subtract mixed numbers with borrowing","Estimate sums and differences of mixed numbers"],
   prerequisites:["m8i-03-3"],
   topics:["Adding mixed numbers","Subtracting mixed numbers","Regrouping","Estimation","Inequalities with fractions"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 4 — MULTIPLY & DIVIDE FRACTIONS (m8t-04)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-04-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-04",yearGroup:"Year 8",
   name:"Multiply Fractions & Whole Numbers",emoji:"✖️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Multiply fractions by whole numbers using models, number lines and written methods, and find fractions of amounts.",
   learningOutcomes:["Multiply a fraction by a whole number","Find a fraction of a number","Estimate products of fractions and whole numbers"],
   prerequisites:["m8i-03-1"],
   topics:["Fraction × whole number","Number line models","Fractions of amounts","Scaling with fractions","Estimation"]},

  {id:"m8i-04-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-04",yearGroup:"Year 8",
   name:"Multiply Fractions & Mixed Numbers",emoji:"✕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply two fractions, multiply mixed numbers, and solve multi-step multiplication problems.",
   learningOutcomes:["Multiply two fractions together","Multiply mixed numbers by converting to improper fractions","Solve multi-step fraction multiplication problems"],
   prerequisites:["m8i-04-1"],
   topics:["Fraction × fraction","Models for fraction multiplication","Mixed number multiplication","Three or more fractions","Word problems"]},

  {id:"m8i-04-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-04",yearGroup:"Year 8",
   name:"Divide Fractions",emoji:"➗",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Divide whole numbers by fractions and fractions by fractions using the reciprocal method.",
   learningOutcomes:["Find the reciprocal of a number","Divide a whole number by a fraction","Divide two fractions using 'flip and multiply'"],
   prerequisites:["m8i-04-1"],
   topics:["Reciprocals","Dividing by unit fractions","Fraction ÷ fraction","Division with models","Word problems"]},

  {id:"m8i-04-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-04",yearGroup:"Year 8",
   name:"Mixed Fraction Operations",emoji:"🔀",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Divide fractions and mixed numbers, combine all four operations with fractions, and evaluate numerical expressions.",
   learningOutcomes:["Divide mixed numbers","Choose the correct operation in fraction word problems","Evaluate expressions combining fractions with all four operations"],
   prerequisites:["m8i-04-2","m8i-04-3"],
   topics:["Mixed number division","All four operations","Evaluating expressions","Estimating products and quotients","Word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 5 — INTEGERS & OPERATIONS (m8t-05)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-05-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-05",yearGroup:"Year 8",
   name:"Understanding & Comparing Integers",emoji:"🔢",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Understand positive and negative integers, graph them on number lines, and compare and order them.",
   learningOutcomes:["Define and identify integers","Plot integers on horizontal and vertical number lines","Compare and order integers"],
   prerequisites:[],
   topics:["Definition of integers","Horizontal number lines","Vertical number lines","Comparing integers","Ordering integers"]},

  {id:"m8i-05-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-05",yearGroup:"Year 8",
   name:"Add & Subtract Integers",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract positive and negative integers using number lines, counters and rules.",
   learningOutcomes:["Add integers using number lines and rules","Subtract integers by adding the opposite","Add and subtract three or more integers"],
   prerequisites:["m8i-05-1"],
   topics:["Number line addition","Counter models","Addition rules (same/different signs)","Subtraction as adding the opposite","Integer word problems"]},

  {id:"m8i-05-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-05",yearGroup:"Year 8",
   name:"Multiply & Divide Integers",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide integers using sign rules, and complete missing number sentences.",
   learningOutcomes:["Apply multiplication sign rules for integers","Apply division sign rules for integers","Complete multiplication and division sentences with integers"],
   prerequisites:["m8i-05-1"],
   topics:["Same signs → positive","Different signs → negative","Integer multiplication","Integer division","Missing number problems"]},

  {id:"m8i-05-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-05",yearGroup:"Year 8",
   name:"Evaluate Integer Expressions",emoji:"📋",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Evaluate multi-step numerical expressions involving integers using the correct order of operations.",
   learningOutcomes:["Apply BODMAS to integer expressions","Combine addition, subtraction, multiplication and division of integers","Solve integer word problems requiring multiple steps"],
   prerequisites:["m8i-05-2","m8i-05-3"],
   topics:["Order of operations with integers","Multi-step expressions","Integer word problems","Combining sign rules"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 6 — RATIONAL NUMBERS (m8t-06)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-06-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-06",yearGroup:"Year 8",
   name:"Identify & Compare Rational Numbers",emoji:"🔢",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify rational numbers, place them on number lines, and compare and order them.",
   learningOutcomes:["Identify rational numbers from a set","Plot rational numbers on a number line","Compare and order rational numbers including negatives"],
   prerequisites:["m8i-05-1"],
   topics:["What is a rational number","Rational numbers on number lines","Comparing rational numbers","Ordering rational numbers","Finding the sign"]},

  {id:"m8i-06-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-06",yearGroup:"Year 8",
   name:"Add & Subtract Rational Numbers",emoji:"➕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract positive and negative decimals and fractions, applying sign rules.",
   learningOutcomes:["Add positive and negative decimals","Add positive and negative fractions","Apply addition and subtraction rules to rational numbers"],
   prerequisites:["m8i-06-1"],
   topics:["Adding positive and negative decimals","Adding positive and negative fractions","Subtraction rules","Mixed rational number operations"]},

  {id:"m8i-06-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-06",yearGroup:"Year 8",
   name:"Multiply & Divide Rational Numbers",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide positive and negative decimals and fractions, and apply sign rules.",
   learningOutcomes:["Multiply positive and negative decimals","Divide positive and negative fractions","Apply multiplication and division rules to rational numbers"],
   prerequisites:["m8i-06-1"],
   topics:["Multiplying signed decimals","Multiplying signed fractions","Dividing signed decimals","Dividing signed fractions","Sign rules"]},

  {id:"m8i-06-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-06",yearGroup:"Year 8",
   name:"Evaluate Rational Number Expressions",emoji:"📋",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Evaluate complex expressions involving all four operations with rational numbers.",
   learningOutcomes:["Evaluate multi-step expressions with rational numbers","Combine all four operations with signed fractions and decimals","Apply order of operations to rational number expressions"],
   prerequisites:["m8i-06-2","m8i-06-3"],
   topics:["Multi-step expressions","BODMAS with rational numbers","Mixed operations","Word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 7 — INDICES & ROOTS (m8t-07)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-07-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-07",yearGroup:"Year 8",
   name:"Understand & Evaluate Indices",emoji:"⬛",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Understand index notation, evaluate powers of whole numbers, and solve equations with variable indices.",
   learningOutcomes:["Write and evaluate powers using index notation","Solve simple equations with variable indices","Evaluate expressions involving indices"],
   prerequisites:[],
   topics:["Index notation","Evaluating whole number powers","Variable indices","Expressions with indices"]},

  {id:"m8i-07-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-07",yearGroup:"Year 8",
   name:"Indices with Special Bases",emoji:"⚡",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Evaluate indices with negative, decimal and fractional bases.",
   learningOutcomes:["Evaluate powers with negative bases","Evaluate powers with decimal bases","Evaluate powers with fractional bases"],
   prerequisites:["m8i-07-1"],
   topics:["Negative bases","Decimal bases","Fractional bases","Comparing powers"]},

  {id:"m8i-07-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-07",yearGroup:"Year 8",
   name:"Square Roots & Cube Roots",emoji:"🌱",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find square roots of perfect squares, estimate non-perfect square roots, and find cube roots.",
   learningOutcomes:["Find square roots of perfect squares up to 225","Estimate square roots of non-perfect squares","Find cube roots of perfect cubes"],
   prerequisites:["m8i-07-1"],
   topics:["Perfect squares","Square root symbol","Estimating square roots","Perfect cubes","Cube roots"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 8 — RATIOS & PROPORTIONS (m8t-08)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-08-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-08",yearGroup:"Year 8",
   name:"Write & Simplify Ratios",emoji:"⚖️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Write ratios from descriptions, identify and create equivalent ratios, and solve ratio word problems.",
   learningOutcomes:["Write and simplify ratios","Identify equivalent ratios","Solve ratio comparison word problems"],
   prerequisites:[],
   topics:["Writing ratios","Equivalent ratios","Simplifying ratios","Comparing ratios","Bar diagram ratio problems"]},

  {id:"m8i-08-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-08",yearGroup:"Year 8",
   name:"Unit Rates & Speed",emoji:"⏱️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate unit rates, compare rates, find equivalent rates, and solve speed-distance-time problems.",
   learningOutcomes:["Calculate a unit rate","Compare rates to find best value","Use the speed = distance ÷ time formula"],
   prerequisites:["m8i-08-1"],
   topics:["Unit rates","Equivalent rates","Comparing rates","Speed, distance and time","Rate word problems"]},

  {id:"m8i-08-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-08",yearGroup:"Year 8",
   name:"Proportions",emoji:"🔗",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Determine if ratios form a proportion, solve proportions using cross-multiplication, and apply to word problems.",
   learningOutcomes:["Determine whether two ratios form a proportion","Solve proportions using cross-multiplication","Apply proportions to real-world word problems"],
   prerequisites:["m8i-08-1"],
   topics:["Proportional ratios","Cross-multiplication","Proportion word problems","Ratios and rates word problems"]},

  {id:"m8i-08-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-08",yearGroup:"Year 8",
   name:"Direct Proportion & Graphs",emoji:"📈",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify proportional relationships from tables and graphs, find the constant of proportionality, and write equations.",
   learningOutcomes:["Identify proportional relationships from tables","Find the constant of proportionality from a graph","Write equations for proportional relationships"],
   prerequisites:["m8i-08-3"],
   topics:["Tables of proportional relationships","Graphs of proportional relationships","Constant of proportionality","Writing equations","Interpreting graphs"]},

  {id:"m8i-08-5",subject:"Mathematics",subjectId:"math",topicId:"m8t-08",yearGroup:"Year 8",
   name:"Rate of Change",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate and interpret rates of change and constant rates of change from tables, graphs and equations.",
   learningOutcomes:["Calculate rate of change from a table","Identify constant rate of change","Interpret rate of change in context"],
   prerequisites:["m8i-08-4"],
   topics:["Rate of change","Constant rate of change","Rate of change from graphs","Real-world interpretation"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 9 — PERCENTAGES (m8t-09)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-09-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-09",yearGroup:"Year 8",
   name:"Convert Between %, Fractions & Decimals",emoji:"💯",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Convert fluently between percentages, fractions and decimals, and compare and order them.",
   learningOutcomes:["Convert percentages to fractions and decimals","Convert fractions and decimals to percentages","Compare percents with fractions and decimals"],
   prerequisites:[],
   topics:["% to fraction and decimal","Fraction to %","Decimal to %","Comparison and ordering","Word problems"]},

  {id:"m8i-09-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-09",yearGroup:"Year 8",
   name:"Percentages of Amounts",emoji:"🔢",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Find percentages of numbers and money amounts using grid models, bar models and calculation.",
   learningOutcomes:["Find any percentage of an amount","Estimate percentages using benchmarks","Solve percentage word problems"],
   prerequisites:["m8i-09-1"],
   topics:["Grid models","Bar models","Estimation","Percentages of amounts","Word problems"]},

  {id:"m8i-09-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-09",yearGroup:"Year 8",
   name:"Percent Equations & Reverse",emoji:"🤔",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find what percent one number is of another, find the total given a part and a percent, and solve percent equations.",
   learningOutcomes:["Express one number as a percentage of another","Find the total given a part and a percent","Solve percent equations"],
   prerequisites:["m8i-09-1"],
   topics:["Part ÷ whole × 100","Finding the total","Percent equations","Word problems"]},

  {id:"m8i-09-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-09",yearGroup:"Year 8",
   name:"Percent of Change",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate percentage increase and decrease, and find the original amount after a percentage change.",
   learningOutcomes:["Calculate percent of change (increase and decrease)","Solve percent of change word problems","Find the original amount given the changed amount"],
   prerequisites:["m8i-09-2","m8i-09-3"],
   topics:["Percentage increase","Percentage decrease","Finding original amounts","Multi-step percent problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 10 — CONSUMER MATHS (m8t-10)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-10-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-10",yearGroup:"Year 8",
   name:"Unit Prices & Price Lists",emoji:"🏷️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Read price lists, calculate unit prices, find total prices, and compare value for money.",
   learningOutcomes:["Calculate unit prices to compare products","Find total prices from unit prices","Read and use price lists"],
   prerequisites:["m8i-09-1"],
   topics:["Price lists","Unit prices","Total prices","Best-value comparisons","Money word problems"]},

  {id:"m8i-10-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-10",yearGroup:"Year 8",
   name:"Discounts, VAT & Mark-ups",emoji:"🧾",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate discounts, sale prices, mark-ups, VAT and tips in consumer contexts.",
   learningOutcomes:["Calculate a discounted sale price","Add VAT to a price","Find the original price from a sale price"],
   prerequisites:["m8i-09-2"],
   topics:["Percentage discounts","Sale prices","VAT at 20%","Mark-ups","Tips","Multi-step percent problems"]},

  {id:"m8i-10-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-10",yearGroup:"Year 8",
   name:"Simple & Compound Interest",emoji:"💰",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate simple interest and compound interest, and compare the two methods.",
   learningOutcomes:["Calculate simple interest using I = PRT","Calculate compound interest year by year","Compare simple and compound interest"],
   prerequisites:["m8i-09-2"],
   topics:["Simple interest formula","Compound interest","Year-by-year calculation","Comparing interest types","Savings and loans"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 11 — PROBLEM SOLVING & ESTIMATION (m8t-11)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-11-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-11",yearGroup:"Year 8",
   name:"Multi-Step Word Problems",emoji:"🧩",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve complex word problems requiring multiple operations and identify reasonable answers.",
   learningOutcomes:["Break a word problem into multiple steps","Choose appropriate operations","Identify reasonable answers"],
   prerequisites:[],
   topics:["Multi-step strategies","Choosing operations","Reasonableness checks","Mixed operation problems"]},

  {id:"m8i-11-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-11",yearGroup:"Year 8",
   name:"Estimation & Guess-and-Check",emoji:"🎯",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Use estimation strategies to solve word problems and apply the guess-and-check method.",
   learningOutcomes:["Estimate to solve word problems","Apply the guess-and-check strategy systematically","Verify estimates against exact answers"],
   prerequisites:[],
   topics:["Estimation strategies","Guess-and-check method","Verifying estimates","Problem-solving approaches"]},

  {id:"m8i-11-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-11",yearGroup:"Year 8",
   name:"Venn Diagrams",emoji:"⭕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use Venn diagrams to sort data, find intersections and unions, and solve problems.",
   learningOutcomes:["Draw and interpret two-set Venn diagrams","Find intersections and unions of sets","Solve problems using Venn diagrams"],
   prerequisites:[],
   topics:["Two-set Venn diagrams","Intersection","Union","Problem solving with Venn diagrams"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 12 — UNITS OF MEASUREMENT (m8t-12)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-12-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-12",yearGroup:"Year 8",
   name:"Metric Conversions",emoji:"📏",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Estimate and convert between metric units of length, mass and capacity, and solve multi-step problems.",
   learningOutcomes:["Convert between km, m, cm and mm","Convert between kg, g and mg","Solve multi-step metric conversion problems"],
   prerequisites:[],
   topics:["Length conversions","Mass conversions","Capacity conversions","Mixed units","Multi-step problems"]},

  {id:"m8i-12-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-12",yearGroup:"Year 8",
   name:"Imperial & Mixed Conversions",emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Convert between imperial units, work with mixed units, and convert between metric and imperial systems.",
   learningOutcomes:["Convert between imperial units of length, mass and capacity","Work with mixed imperial units","Convert between metric and imperial units"],
   prerequisites:["m8i-12-1"],
   topics:["Imperial length conversions","Imperial mass and capacity","Mixed units","Metric ↔ imperial","Conversion word problems"]},

  {id:"m8i-12-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-12",yearGroup:"Year 8",
   name:"Area & Volume Unit Conversions",emoji:"📐",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Convert between square metres and hectares, convert square and cubic units, and link cm³ to ml.",
   learningOutcomes:["Convert between m² and hectares","Convert square and cubic units of length","Know that 1 cm³ = 1 ml and 1000 cm³ = 1 litre"],
   prerequisites:["m8i-12-1"],
   topics:["Square unit conversions","Cubic unit conversions","Hectares","cm³ ↔ ml","m³ ↔ litres"]},

  {id:"m8i-12-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-12",yearGroup:"Year 8",
   name:"Precision & Estimation",emoji:"🎯",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Understand precision in measurement and estimate metric and imperial measurements.",
   learningOutcomes:["Choose appropriate units for measurements","Estimate measurements in metric and imperial","Understand the concept of precision"],
   prerequisites:["m8i-12-1"],
   topics:["Choosing units","Estimating metric measurements","Estimating imperial measurements","Precision"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 13 — COORDINATE PLANE (m8t-13)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-13-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-13",yearGroup:"Year 8",
   name:"Coordinate Plane & Quadrants",emoji:"📍",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Plot and read coordinates in all four quadrants, identify which quadrant a point lies in, and follow coordinate directions.",
   learningOutcomes:["Plot points in all four quadrants","Identify the quadrant or axis for a given point","Follow directions on a coordinate plane"],
   prerequisites:[],
   topics:["Coordinate pairs","Four quadrants","Points on axes","Following directions","Coordinate review"]},

  {id:"m8i-13-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-13",yearGroup:"Year 8",
   name:"Distance Between Two Points",emoji:"📐",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate the horizontal and vertical distance between two points on a coordinate plane.",
   learningOutcomes:["Find the horizontal distance between two points","Find the vertical distance between two points","Calculate distances using coordinates"],
   prerequisites:["m8i-13-1"],
   topics:["Horizontal distance","Vertical distance","Counting squares","Distance formula (introduction)"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 14 — NUMBER SEQUENCES (m8t-14)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-14-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-14",yearGroup:"Year 8",
   name:"Arithmetic Sequences",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify, continue and generate arithmetic sequences, and find common differences.",
   learningOutcomes:["Identify the common difference of an arithmetic sequence","Continue an arithmetic sequence","Solve sequence word problems"],
   prerequisites:[],
   topics:["Common difference","Continuing sequences","Positive and negative differences","Sequence word problems"]},

  {id:"m8i-14-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-14",yearGroup:"Year 8",
   name:"Geometric Sequences",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify geometric sequences, find common ratios, and distinguish arithmetic from geometric sequences.",
   learningOutcomes:["Identify the common ratio of a geometric sequence","Continue a geometric sequence","Distinguish arithmetic from geometric sequences"],
   prerequisites:["m8i-14-1"],
   topics:["Common ratio","Continuing geometric sequences","Comparing sequence types","Mixed sequence review"]},

  {id:"m8i-14-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-14",yearGroup:"Year 8",
   name:"Expressions for Sequences",emoji:"📝",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Write and evaluate variable expressions for arithmetic and geometric sequences.",
   learningOutcomes:["Write a variable expression for an arithmetic sequence","Evaluate expressions to find specific terms","Write expressions for geometric sequences"],
   prerequisites:["m8i-14-1","m8i-14-2"],
   topics:["nth term expressions for arithmetic sequences","Evaluating sequence expressions","Geometric sequence expressions","Finding specific terms"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 15 — EXPRESSIONS & PROPERTIES (m8t-15)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-15-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-15",yearGroup:"Year 8",
   name:"Write & Evaluate Expressions",emoji:"📝",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Write algebraic expressions from words, evaluate linear and nonlinear expressions, and identify terms and coefficients.",
   learningOutcomes:["Write variable expressions from descriptions","Evaluate expressions by substituting values","Identify terms, coefficients and constants"],
   prerequisites:[],
   topics:["Writing expressions","Substitution","Linear expressions","Multi-variable expressions","Nonlinear expressions","Terms and coefficients"]},

  {id:"m8i-15-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-15",yearGroup:"Year 8",
   name:"Simplify Linear Expressions",emoji:"🔀",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify like terms, add and subtract like terms, and simplify linear expressions.",
   learningOutcomes:["Identify like terms in an expression","Add and subtract like terms","Simplify expressions with multiple variables"],
   prerequisites:["m8i-15-1"],
   topics:["Like terms","Collecting terms","Simplifying expressions","Equivalent expressions","Bar models"]},

  {id:"m8i-15-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-15",yearGroup:"Year 8",
   name:"Distributive Property & Factorising",emoji:"📐",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Expand brackets using the distributive property and factorise linear expressions.",
   learningOutcomes:["Expand single brackets using the distributive property","Factorise linear expressions using the HCF","Use area models for multiplication and factorising"],
   prerequisites:["m8i-15-2"],
   topics:["Distributive property","Area models","Expanding brackets","Factorising linear expressions","Sorting factors"]},

  {id:"m8i-15-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-15",yearGroup:"Year 8",
   name:"Equivalent Expressions",emoji:"🔗",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use properties of operations to write equivalent expressions and identify whether two expressions are equivalent.",
   learningOutcomes:["Apply commutative, associative and identity properties","Write equivalent expressions using properties","Identify equivalent linear expressions"],
   prerequisites:["m8i-15-2","m8i-15-3"],
   topics:["Properties of addition and multiplication","Writing equivalent expressions","Identifying equivalent expressions","Word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 16 — SOLVING EQUATIONS (m8t-16)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-16-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-16",yearGroup:"Year 8",
   name:"Solve One-Step Equations",emoji:"⚖️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Solve one-step equations involving addition, subtraction, multiplication and division.",
   learningOutcomes:["Solve one-step equations using inverse operations","Check solutions by substitution","Write equations from word problems"],
   prerequisites:["m8i-15-1"],
   topics:["Addition and subtraction equations","Multiplication and division equations","Checking by substitution","Equation word problems","Algebra tiles"]},

  {id:"m8i-16-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-16",yearGroup:"Year 8",
   name:"Solve Two-Step Equations",emoji:"⚡",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve two-step equations and write/solve equations from word problems.",
   learningOutcomes:["Solve two-step equations using inverse operations","Complete partial equation solutions","Set up and solve two-step equations from word problems"],
   prerequisites:["m8i-16-1"],
   topics:["Two-step equations","Order of inverse operations","Word problem equations","Completing solutions"]},

  {id:"m8i-16-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-16",yearGroup:"Year 8",
   name:"Equations with Like Terms & Distributive Property",emoji:"🧱",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve equations involving like terms and the distributive property.",
   learningOutcomes:["Collect like terms to solve equations","Expand brackets then solve equations","Combine collecting terms and expanding in multi-step equations"],
   prerequisites:["m8i-16-2","m8i-15-3"],
   topics:["Equations with like terms","Equations with brackets","Distributive property in equations","Multi-step solutions"]},

  {id:"m8i-16-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-16",yearGroup:"Year 8",
   name:"Solve Multi-Step Equations",emoji:"🔢",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Solve equations requiring three or more steps, using properties of equality.",
   learningOutcomes:["Solve multi-step equations systematically","Apply properties of equality","Complete multi-step equation solutions"],
   prerequisites:["m8i-16-3"],
   topics:["Multi-step equations","Properties of equality","Complex word problems","Completing solutions"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 17 — INEQUALITIES (m8t-17)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-17-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-17",yearGroup:"Year 8",
   name:"Graph & Write Inequalities",emoji:"↔️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify solutions to inequalities, graph them on number lines, and write inequalities from number lines and word problems.",
   learningOutcomes:["Determine if a value is a solution to an inequality","Graph inequalities using open and closed circles","Write inequalities from number lines and descriptions"],
   prerequisites:[],
   topics:["Solutions to inequalities","Graphing on number lines","Open vs closed circles","Writing inequalities","Word problems"]},

  {id:"m8i-17-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-17",yearGroup:"Year 8",
   name:"Solve One-Step Inequalities",emoji:"⚖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve and graph one-step inequalities, including reversing the sign when multiplying or dividing by a negative.",
   learningOutcomes:["Solve one-step inequalities using inverse operations","Reverse the inequality sign when multiplying or dividing by a negative","Graph the solution set on a number line"],
   prerequisites:["m8i-17-1"],
   topics:["Addition/subtraction inequalities","Multiplication/division inequalities","Sign reversal rule","Graphing solutions","Word problems"]},

  {id:"m8i-17-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-17",yearGroup:"Year 8",
   name:"Solve Two-Step Inequalities",emoji:"📈",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve and graph two-step inequalities.",
   learningOutcomes:["Solve two-step inequalities","Graph two-step inequality solutions","Apply two-step inequalities to word problems"],
   prerequisites:["m8i-17-2"],
   topics:["Two-step inequalities","Order of operations","Graphing two-step solutions","Word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 18 — TWO-VARIABLE EQUATIONS (m8t-18)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-18-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-18",yearGroup:"Year 8",
   name:"Two-Variable Equations & Tables",emoji:"📋",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Check if (x, y) satisfies an equation, identify independent and dependent variables, and complete tables of values.",
   learningOutcomes:["Determine if a coordinate pair satisfies a two-variable equation","Identify independent and dependent variables","Complete a table of values for a given equation"],
   prerequisites:["m8i-16-1"],
   topics:["Substituting (x, y) pairs","Independent and dependent variables","Tables of values","Two-variable word problems"]},

  {id:"m8i-18-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-18",yearGroup:"Year 8",
   name:"Graph Two-Variable Equations",emoji:"📈",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Graph two-variable equations on the coordinate plane and identify graphs of given equations.",
   learningOutcomes:["Complete a table and plot a straight-line graph","Identify the graph of a given equation","Write an equation from a graph using a table"],
   prerequisites:["m8i-18-1","m8i-13-1"],
   topics:["Plotting from tables","Straight-line graphs","Identifying equations from graphs","Writing equations from graphs"]},

  {id:"m8i-18-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-18",yearGroup:"Year 8",
   name:"Interpret Graphs",emoji:"🔍",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Interpret real-world graphs, read values and describe what the graph shows in context.",
   learningOutcomes:["Read values from real-world graphs","Describe trends and key features","Solve word problems using two-variable equations"],
   prerequisites:["m8i-18-2"],
   topics:["Real-world graph interpretation","Reading values","Describing trends","Word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 19 — LINEAR FUNCTIONS (m8t-19)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-19-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-19",yearGroup:"Year 8",
   name:"Find the Gradient",emoji:"📉",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find the gradient (slope) of a line from a graph and from two points, and find missing coordinates using gradient.",
   learningOutcomes:["Calculate the gradient from a graph","Calculate the gradient from two coordinate pairs","Find a missing coordinate given the gradient"],
   prerequisites:["m8i-13-1"],
   topics:["Rise over run","Gradient from a graph","Gradient from two points","Missing coordinates","Positive and negative gradients"]},

  {id:"m8i-19-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-19",yearGroup:"Year 8",
   name:"Gradient & Y-Intercept",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find the gradient and y-intercept of a linear equation and understand what they represent.",
   learningOutcomes:["Identify the gradient and y-intercept from a linear equation","Explain what the gradient and y-intercept mean in context","Graph a line using gradient and y-intercept"],
   prerequisites:["m8i-19-1"],
   topics:["y = mx + c form","Identifying m and c","Meaning of gradient","Meaning of y-intercept","Graphing using gradient"]},

  {id:"m8i-19-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-19",yearGroup:"Year 8",
   name:"Write & Graph y = mx + c",emoji:"✏️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Write the equation of a line in y = mx + c form from a graph or from gradient and y-intercept, and graph equations.",
   learningOutcomes:["Write an equation in y = mx + c form from a graph","Write an equation from a gradient and y-intercept","Graph an equation given in y = mx + c form"],
   prerequisites:["m8i-19-2"],
   topics:["Writing equations from graphs","Writing equations from gradient and y-intercept","Graphing y = mx + c","Real-world linear models"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 20 — 2D SHAPES & ANGLES (m8t-20)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-20-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-20",yearGroup:"Year 8",
   name:"Classify Polygons & Angles",emoji:"📐",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify and classify polygons, measure and classify angles, and classify triangles and quadrilaterals.",
   learningOutcomes:["Name and classify regular and irregular polygons","Classify angles as acute, obtuse, right or reflex","Classify triangles and quadrilaterals by sides and angles"],
   prerequisites:[],
   topics:["Types of polygons","Angle classification","Triangle classification","Quadrilateral classification","Triangle inequality","Graphing shapes"]},

  {id:"m8i-20-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-20",yearGroup:"Year 8",
   name:"Angles in Polygons",emoji:"🔺",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find missing angles in triangles and quadrilaterals, apply the Exterior Angle Theorem, and find interior angles of polygons.",
   learningOutcomes:["Apply angle sum rules for triangles and quadrilaterals","Apply the Exterior Angle Theorem","Calculate interior angles of regular polygons"],
   prerequisites:["m8i-20-1"],
   topics:["Triangle angle sum (180°)","Quadrilateral angle sum (360°)","Exterior Angle Theorem","Interior angles of polygons","Missing angles"]},

  {id:"m8i-20-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-20",yearGroup:"Year 8",
   name:"Parallel Lines & Transversals",emoji:"➡️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify angle pairs formed by transversals crossing parallel lines and find missing angle measures.",
   learningOutcomes:["Identify alternate interior and exterior angles","Name angle pairs formed by transversals","Calculate missing angles using transversal relationships"],
   prerequisites:["m8i-20-2"],
   topics:["Parallel and perpendicular lines","Transversal angle pairs","Alternate angles","Corresponding angles","Co-interior angles","Finding angle measures"]},

  {id:"m8i-20-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-20",yearGroup:"Year 8",
   name:"Angle Relationships & Circle Parts",emoji:"⭕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify complementary, supplementary and vertical angles, find angle measures, bisect segments and angles, and name parts of a circle.",
   learningOutcomes:["Identify and calculate complementary, supplementary and vertical angles","Find measures of adjacent angles","Name parts of a circle (radius, diameter, chord, arc, sector, tangent)"],
   prerequisites:["m8i-20-1"],
   topics:["Complementary angles","Supplementary angles","Vertical angles","Adjacent angles","Bisectors","Parts of a circle"]},

  {id:"m8i-20-5",subject:"Mathematics",subjectId:"math",topicId:"m8t-20",yearGroup:"Year 8",
   name:"Geometric Constructions",emoji:"🔧",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Construct perpendicular bisectors, angle bisectors, perpendicular lines, equilateral triangles and regular hexagons.",
   learningOutcomes:["Construct the perpendicular bisector of a segment","Construct an angle bisector","Construct an equilateral triangle"],
   prerequisites:["m8i-20-1"],
   topics:["Perpendicular bisectors","Angle bisectors","Perpendicular lines","Equilateral triangles","Regular hexagons"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 21 — 3D FIGURES (m8t-21)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-21-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-21",yearGroup:"Year 8",
   name:"Bases & Nets of 3D Figures",emoji:"📦",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify bases of 3D figures, recognise and draw nets, and determine which nets fold into given solids.",
   learningOutcomes:["Identify the base(s) of a 3D figure","Match a 3D shape to its net","Determine if a given net is valid"],
   prerequisites:[],
   topics:["Bases of prisms and pyramids","Nets of cubes and cuboids","Nets of prisms and pyramids","Valid and invalid nets"]},

  {id:"m8i-21-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-21",yearGroup:"Year 8",
   name:"Views & Base Plans",emoji:"👁️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Draw and interpret front, side and top views of 3D figures, and work with base plans.",
   learningOutcomes:["Draw front, side and top views of 3D shapes","Identify a 3D shape from its views","Read and create base plans"],
   prerequisites:["m8i-21-1"],
   topics:["Front view","Side view","Top view","Matching shapes to views","Base plans"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 22 — AREA, PERIMETER & VOLUME (m8t-22)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-22-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-22",yearGroup:"Year 8",
   name:"Area of Triangles & Quadrilaterals",emoji:"📐",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Calculate areas of triangles, parallelograms, trapeziums and rhombuses, and solve area word problems.",
   learningOutcomes:["Calculate area of triangles using ½ × base × height","Calculate area of parallelograms and trapeziums","Calculate area of rhombuses"],
   prerequisites:[],
   topics:["Triangle area","Parallelogram area","Trapezium area","Rhombus area","Area word problems"]},

  {id:"m8i-22-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-22",yearGroup:"Year 8",
   name:"Circles: Circumference & Area",emoji:"⭕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate the circumference and area of circles, semicircles and quarter circles.",
   learningOutcomes:["Calculate circumference using C = πd","Calculate area using A = πr²","Find measurements of semicircles and quarter circles"],
   prerequisites:["m8i-22-1"],
   topics:["Circumference of circles","Area of circles","Semicircles","Quarter circles","Circle word problems"]},

  {id:"m8i-22-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-22",yearGroup:"Year 8",
   name:"Compound Figures",emoji:"🔷",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find the area of compound figures by splitting them into triangles, rectangles, semicircles and quarter circles, and find area between shapes.",
   learningOutcomes:["Split compound figures into simpler shapes","Calculate area of compound figures","Find the area between two shapes"],
   prerequisites:["m8i-22-1","m8i-22-2"],
   topics:["Splitting compound figures","Compound figures with triangles","Compound figures with semicircles","Area between shapes"]},

  {id:"m8i-22-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-22",yearGroup:"Year 8",
   name:"Volume of 3D Shapes",emoji:"📦",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate volumes of cubes, cuboids, compound figures, triangular prisms and cylinders.",
   learningOutcomes:["Calculate volume of cubes and cuboids","Find volume of compound 3D figures","Calculate volume of triangular prisms and cylinders"],
   prerequisites:["m8i-22-1"],
   topics:["Volume of cubes and cuboids","Compound 3D figures","Triangular prism volume","Cylinder volume","Volume word problems"]},

  {id:"m8i-22-5",subject:"Mathematics",subjectId:"math",topicId:"m8t-22",yearGroup:"Year 8",
   name:"Surface Area & Scale Drawings",emoji:"📏",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate surface area of 3D shapes and solve problems involving scale drawings and scale factors.",
   learningOutcomes:["Calculate surface area of prisms and cylinders","Interpret and create scale drawings","Apply scale factors to find real measurements"],
   prerequisites:["m8i-22-4","m8i-21-1"],
   topics:["Surface area","Scale drawings","Scale factors","Scale drawing word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 23 — TRANSFORMATIONS (m8t-23)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-23-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-23",yearGroup:"Year 8",
   name:"Reflections & Translations",emoji:"↔️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify, perform and describe reflections and translations on the coordinate plane, and write transformation rules.",
   learningOutcomes:["Reflect a shape and find the image coordinates","Translate a shape by a given vector","Write rules for translations"],
   prerequisites:["m8i-13-1"],
   topics:["Symmetry","Identifying transformations","Translations: graph and coordinates","Translation rules","Reflections: graph and coordinates"]},

  {id:"m8i-23-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-23",yearGroup:"Year 8",
   name:"Rotations",emoji:"🔄",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Rotate shapes about a centre of rotation on the coordinate plane and find image coordinates.",
   learningOutcomes:["Rotate a shape 90°, 180° and 270° about a point","Find the coordinates of rotated vertices","Write rules for reflections and rotations"],
   prerequisites:["m8i-23-1"],
   topics:["Rotation by 90°","Rotation by 180°","Rotation by 270°","Finding image coordinates","Transformation rules"]},

  {id:"m8i-23-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-23",yearGroup:"Year 8",
   name:"Dilations",emoji:"🔎",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Perform dilations (enlargements) on the coordinate plane, find scale factors, and classify dilations.",
   learningOutcomes:["Dilate a shape by a given scale factor","Find the coordinates of dilated vertices","Classify a dilation as an enlargement or reduction"],
   prerequisites:["m8i-23-1"],
   topics:["Dilation from the origin","Scale factor","Enlargements and reductions","Finding coordinates","Classifying dilations"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 24 — CONGRUENCE & SIMILARITY (m8t-24)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-24-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-24",yearGroup:"Year 8",
   name:"Congruent Figures",emoji:"🔲",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify congruent figures, write congruence statements, and find missing side lengths and angles.",
   learningOutcomes:["Identify congruent figures","Write congruence statements with corresponding parts","Find missing measurements using congruence"],
   prerequisites:["m8i-20-1"],
   topics:["Identifying congruence","Congruence statements","Corresponding parts","Missing side lengths","Missing angles"]},

  {id:"m8i-24-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-24",yearGroup:"Year 8",
   name:"Similar Figures",emoji:"🔳",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify similar figures, find ratios in similar figures, write similarity statements, and find missing measurements.",
   learningOutcomes:["Identify similar figures","Find ratios between corresponding sides","Find missing sides and angles using similarity"],
   prerequisites:["m8i-24-1"],
   topics:["Identifying similarity","Ratios in similar figures","Similarity statements","Missing sides and angles"]},

  {id:"m8i-24-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-24",yearGroup:"Year 8",
   name:"Indirect Measurement",emoji:"📏",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use similar figures and proportions to find real-world measurements indirectly.",
   learningOutcomes:["Set up proportions from similar figures","Calculate heights and distances using similar triangles","Solve indirect measurement word problems"],
   prerequisites:["m8i-24-2"],
   topics:["Shadow problems","Similar triangle applications","Setting up proportions","Real-world measurement"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 25 — PYTHAGORAS' THEOREM (m8t-25)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-25-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-25",yearGroup:"Year 8",
   name:"Find the Hypotenuse",emoji:"📐",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use Pythagoras' theorem (a² + b² = c²) to find the length of the hypotenuse of a right-angled triangle.",
   learningOutcomes:["State Pythagoras' theorem","Identify the hypotenuse in a right-angled triangle","Calculate the hypotenuse length"],
   prerequisites:["m8i-07-3"],
   topics:["Pythagoras' theorem","Identifying the hypotenuse","a² + b² = c²","Calculating hypotenuse","Exact and decimal answers"]},

  {id:"m8i-25-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-25",yearGroup:"Year 8",
   name:"Find a Missing Leg",emoji:"📏",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Rearrange Pythagoras' theorem to find the length of a missing leg and calculate perimeters.",
   learningOutcomes:["Rearrange the formula to find a missing leg","Calculate the perimeter of a right-angled triangle","Solve problems involving both leg and hypotenuse"],
   prerequisites:["m8i-25-1"],
   topics:["Rearranging the formula","Finding a missing leg","Perimeter of right triangles","Mixed problems"]},

  {id:"m8i-25-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-25",yearGroup:"Year 8",
   name:"Pythagoras' Theorem: Word Problems & Converse",emoji:"🧩",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Apply Pythagoras' theorem to real-world problems and use the converse to determine if a triangle is right-angled.",
   learningOutcomes:["Apply Pythagoras' theorem to word problems","Use the converse to test if a triangle is right-angled","Solve real-world distance problems"],
   prerequisites:["m8i-25-2"],
   topics:["Word problems","Ladders and buildings","Distance problems","Converse of Pythagoras' theorem","Is it a right triangle?"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 26 — CONSTRUCTIONS (m8t-26) — standalone topic
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-26-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-26",yearGroup:"Year 8",
   name:"Bisectors & Perpendiculars",emoji:"🔧",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use compass and straightedge to construct perpendicular bisectors, angle bisectors and perpendicular lines.",
   learningOutcomes:["Construct the perpendicular bisector of a line segment","Construct the bisector of an angle","Construct a perpendicular line through a point"],
   prerequisites:[],
   topics:["Perpendicular bisector construction","Angle bisector construction","Perpendicular line construction","Using compass and straightedge"]},

  {id:"m8i-26-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-26",yearGroup:"Year 8",
   name:"Construct Polygons",emoji:"🔺",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Construct equilateral triangles and regular hexagons using compass and straightedge.",
   learningOutcomes:["Construct an equilateral triangle given a side length","Construct a regular hexagon inscribed in a circle","Verify constructions by measuring"],
   prerequisites:["m8i-26-1"],
   topics:["Equilateral triangle construction","Regular hexagon construction","Inscribed polygons","Verifying constructions"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 27 — DATA & STATISTICS (m8t-27)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-27-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-27",yearGroup:"Year 8",
   name:"Tables, Plots & Stem-and-Leaf",emoji:"📊",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Interpret and create frequency tables, line plots and stem-and-leaf plots.",
   learningOutcomes:["Interpret and create frequency tables","Create and interpret line plots","Create and interpret stem-and-leaf plots"],
   prerequisites:[],
   topics:["Frequency tables","Line plots","Stem-and-leaf plots","Reading tables"]},

  {id:"m8i-27-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-27",yearGroup:"Year 8",
   name:"Bar Charts, Pie Charts & Line Graphs",emoji:"📈",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Create and interpret bar charts, pie charts and line graphs, and choose the best graph type.",
   learningOutcomes:["Create and interpret bar charts for categorical and grouped data","Interpret pie charts and calculate central angles","Create and interpret line graphs"],
   prerequisites:["m8i-27-1"],
   topics:["Bar charts","Grouped bar charts","Pie charts","Pie chart angles","Line graphs","Choosing graph types"]},

  {id:"m8i-27-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-27",yearGroup:"Year 8",
   name:"Mean, Median, Mode & Range",emoji:"🔢",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Calculate mean, median, mode and range, find missing numbers, and describe the effect of changes.",
   learningOutcomes:["Calculate mean, median, mode and range","Find a missing number given the mean","Describe how changes affect the averages"],
   prerequisites:[],
   topics:["Mean","Median","Mode","Range","Missing number problems","Changes in averages"]},

  {id:"m8i-27-4",subject:"Mathematics",subjectId:"math",topicId:"m8t-27",yearGroup:"Year 8",
   name:"Outliers, Scatter Plots & Samples",emoji:"📉",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify outliers, create and interpret scatter plots, identify trends, make predictions, and understand sampling and bias.",
   learningOutcomes:["Identify outliers and describe their effect","Create scatter plots and identify trends","Identify representative, random and biased samples"],
   prerequisites:["m8i-27-3"],
   topics:["Outliers","Scatter plots","Trends and correlations","Predictions from scatter plots","Populations and samples","Biased samples"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 28 — PROBABILITY (m8t-28)
  // ══════════════════════════════════════════════════════════════════════
  {id:"m8i-28-1",subject:"Mathematics",subjectId:"math",topicId:"m8t-28",yearGroup:"Year 8",
   name:"Probability of Simple Events",emoji:"🎲",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Find the probability of simple events and their complements, and distinguish mutually exclusive from overlapping events.",
   learningOutcomes:["Calculate the probability of a simple event","Find the probability of the complement","Identify mutually exclusive and overlapping events"],
   prerequisites:[],
   topics:["Probability scale (0 to 1)","Simple events","Complement events","Mutually exclusive events","Overlapping events"]},

  {id:"m8i-28-2",subject:"Mathematics",subjectId:"math",topicId:"m8t-28",yearGroup:"Year 8",
   name:"Experimental & Theoretical Probability",emoji:"🧪",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate experimental probability from data, make predictions using theoretical and experimental probability.",
   learningOutcomes:["Calculate experimental probability from collected data","Make predictions using theoretical probability","Make predictions using experimental probability"],
   prerequisites:["m8i-28-1"],
   topics:["Experimental probability","Theoretical probability","Predictions","Comparing experimental and theoretical"]},

  {id:"m8i-28-3",subject:"Mathematics",subjectId:"math",topicId:"m8t-28",yearGroup:"Year 8",
   name:"Compound Events",emoji:"🎯",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"List sample spaces for compound events, find the number of outcomes, and calculate compound probabilities.",
   learningOutcomes:["List all outcomes in a sample space","Find the total number of outcomes for compound events","Calculate the probability of compound events"],
   prerequisites:["m8i-28-1"],
   topics:["Sample spaces","Counting outcomes","Compound event probability","Tree diagrams","Word problems"]}

); // end CURRICULUM.push
