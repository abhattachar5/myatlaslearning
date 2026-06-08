// content/y9/math/topics.js — Year 9 Maths: topic tiles + island definitions.
// Authored by the atlas-content skill. Pilot scope: Topic 1 (Surds).

// ── MATH TOPICS YEAR 9 ──────────────────────────────────────────────────────
const MATH_TOPICS_Y9 = [
  {id:"m9t-01", name:"Surds", emoji:"√", hasContent:true,
   description:"Simplify surds, add, subtract, multiply and divide them, and rationalise the denominator of a fraction."},
  {id:"m9t-02", name:"Number Structure", emoji:"🔢", hasContent:true,
   description:"Find factors and primes, use prime factorisation to find the HCF and LCM, and classify numbers as rational or irrational."},
  {id:"m9t-03", name:"Indices & Index Laws", emoji:"ⁿ", hasContent:true,
   description:"Use the index laws to multiply, divide and raise powers, and work with zero, negative and fractional indices."},
  {id:"m9t-04", name:"Standard Form", emoji:"🔬", hasContent:true,
   description:"Write very large and very small numbers in standard form, convert back, and calculate with them."},
  {id:"m9t-05", name:"Fractions, Decimals & Percentages", emoji:"½", hasContent:true,
   description:"Convert freely between fractions, decimals and percentages, and carry out the four operations with fractions."},
  {id:"m9t-06", name:"Rounding, Estimation & Bounds", emoji:"📏", hasContent:true,
   description:"Round to decimal places and significant figures, estimate calculations, and find error intervals and bounds."},
  {id:"m9t-07", name:"Ratio & Proportion", emoji:"⚖️", hasContent:true,
   description:"Simplify and share in a ratio, and solve direct and inverse proportion problems."},
  {id:"m9t-08", name:"Percentages & Financial Maths", emoji:"💷", hasContent:true,
   description:"Work out percentage change, use multipliers, solve reverse-percentage problems and handle simple and compound interest."},
  {id:"m9t-09", name:"Algebraic Notation & Substitution", emoji:"✏️", hasContent:true,
   description:"Simplify expressions, expand and factorise, and substitute into expressions and formulae."},
  {id:"m9t-10", name:"Sequences & nth Term", emoji:"🔢", hasContent:true,
   description:"Continue sequences, find the nth term of a linear sequence, and recognise special and non-linear sequences."},
  {id:"m9t-11", name:"Angles & Properties of Shapes", emoji:"📐", hasContent:true,
   description:"Apply angle rules on lines and in triangles, work out angles in polygons, and use properties of quadrilaterals and circles."},
  {id:"m9t-12", name:"Mensuration: Area, Perimeter & Volume", emoji:"📦", hasContent:true,
   description:"Find perimeter and area of 2D shapes, surface area and volume of prisms, and read plans and elevations."},
  {id:"m9t-13", name:"Constructions & Loci", emoji:"🧭", hasContent:true,
   description:"Use a ruler and compasses for standard constructions, and find loci and regions that satisfy a rule."},
  {id:"m9t-14", name:"Probability", emoji:"🎲", hasContent:true,
   description:"Use the probability scale, list outcomes, and work with combined events, tree diagrams and relative frequency."}
  // …more Year 9 topics slot in here
];

// ── ISLAND TILES → shared CURRICULUM ────────────────────────────────────────
CURRICULUM.push(
  {id:"m9i-01-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-01", yearGroup:"Year 9",
   name:"Simplifying Surds", emoji:"√", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Write a surd in its simplest form by taking out the largest square factor.",
   learningOutcomes:["Identify the largest square factor of a number","Write √n in the form a√b","Recognise when a surd is already in simplest form"],
   prerequisites:[],
   topics:["Square factors","Simplest surd form","Surd vs rational number"]},

  {id:"m9i-01-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-01", yearGroup:"Year 9",
   name:"Adding & Subtracting Surds", emoji:"➕", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Collect like surds, and simplify first so that surds can be combined.",
   learningOutcomes:["Identify like surds","Add and subtract like surds","Simplify surds before combining"],
   prerequisites:["m9i-01-1"],
   topics:["Like surds","Collecting terms","Simplify-then-combine"]},

  {id:"m9i-01-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-01", yearGroup:"Year 9",
   name:"Multiplying & Dividing Surds", emoji:"✕", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use √a × √b = √(ab) and √a ÷ √b = √(a/b), including with coefficients.",
   learningOutcomes:["Multiply surds, including with coefficients","Divide surds","Use (√a)² = a"],
   prerequisites:["m9i-01-1"],
   topics:["Product rule for surds","Quotient rule for surds","Squaring a surd"]},

  {id:"m9i-01-4", subject:"Mathematics", subjectId:"math", topicId:"m9t-01", yearGroup:"Year 9",
   name:"Rationalising the Denominator", emoji:"➗", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Remove a surd from the denominator of a fraction and simplify the result.",
   learningOutcomes:["Multiply numerator and denominator by the surd","Rationalise a/√b","Simplify the rationalised fraction"],
   prerequisites:["m9i-01-1","m9i-01-3"],
   topics:["Rationalising 1/√b","Rationalising a/√b","Simplifying the result"]}
);

// ── Topic 2: Number Structure (m9t-02) ──────────────────────────────────────
CURRICULUM.push(
  {id:"m9i-02-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-02", yearGroup:"Year 9",
   name:"Factors, Primes & Divisibility", emoji:"🔍", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Apply divisibility rules, list the factors of a number, and classify numbers as prime or composite.",
   learningOutcomes:["Apply the divisibility rules for 2–10","List all factors of a number in pairs","Classify numbers as prime or composite"],
   prerequisites:[],
   topics:["Divisibility rules","Listing factors","Prime and composite numbers"]},

  {id:"m9i-02-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-02", yearGroup:"Year 9",
   name:"HCF & LCM", emoji:"🌳", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Write a number as a product of primes, and use prime factorisation to find the HCF and LCM.",
   learningOutcomes:["Write a number as a product of its prime factors","Find the HCF using prime factorisation","Find the LCM and solve HCF/LCM word problems"],
   prerequisites:["m9i-02-1"],
   topics:["Prime factorisation","Highest common factor","Lowest common multiple"]},

  {id:"m9i-02-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-02", yearGroup:"Year 9",
   name:"Rational & Irrational Numbers", emoji:"🏷️", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Classify numbers into the number sets and tell rational and irrational numbers apart.",
   learningOutcomes:["Name the number sets and give examples","Identify rational and irrational numbers","Recognise that non-square surds and π are irrational"],
   prerequisites:[],
   topics:["Number sets","Rational numbers","Irrational numbers and surds"]}
);

// ── Topic 3: Indices & Index Laws (m9t-03) ──────────────────────────────────
CURRICULUM.push(
  {id:"m9i-03-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-03", yearGroup:"Year 9",
   name:"The Index Laws", emoji:"ⁿ", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Multiply and divide powers of the same base, and raise a power to a power.",
   learningOutcomes:["Add indices when multiplying powers of the same base","Subtract indices when dividing","Multiply indices for a power of a power"],
   prerequisites:[],
   topics:["Multiplying powers","Dividing powers","Power of a power"]},

  {id:"m9i-03-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-03", yearGroup:"Year 9",
   name:"Zero & Negative Indices", emoji:"➖", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Understand why any non-zero number to the power 0 is 1, and rewrite negative indices as reciprocals.",
   learningOutcomes:["Use the rule a⁰ = 1","Rewrite a⁻ⁿ as 1/aⁿ","Evaluate powers with negative indices"],
   prerequisites:["m9i-03-1"],
   topics:["Zero index","Negative indices","Reciprocals"]},

  {id:"m9i-03-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-03", yearGroup:"Year 9",
   name:"Fractional Indices & Roots", emoji:"√", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Interpret a fractional index as a root, and evaluate powers such as 8^(2/3).",
   learningOutcomes:["Read a^(1/n) as the nth root of a","Evaluate a^(m/n) as (ⁿ√a)ᵐ","Combine fractional and negative indices"],
   prerequisites:["m9i-03-1","m9i-03-2"],
   topics:["Unit fractional index","Root-then-power","Negative fractional index"]}
);

// ── Topic 4: Standard Form (m9t-04) ─────────────────────────────────────────
CURRICULUM.push(
  {id:"m9i-04-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-04", yearGroup:"Year 9",
   name:"Writing & Converting Standard Form", emoji:"🔬", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Write large and small numbers as A × 10ⁿ (1 ≤ A < 10) and convert back to ordinary numbers.",
   learningOutcomes:["Write a large number in standard form","Write a small number using a negative power of 10","Convert standard form back to an ordinary number"],
   prerequisites:["m9i-03-2"],
   topics:["Large numbers","Small numbers","Converting back"]},

  {id:"m9i-04-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-04", yearGroup:"Year 9",
   name:"Calculating with Standard Form", emoji:"✖️", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Multiply and divide numbers in standard form, and add or subtract by matching powers.",
   learningOutcomes:["Multiply and divide numbers in standard form","Re-adjust answers back to standard form","Add and subtract by giving a common power of 10"],
   prerequisites:["m9i-04-1","m9i-03-1"],
   topics:["Multiplying & dividing","Re-standardising","Adding & subtracting"]}
);

// ── Topic 5: Fractions, Decimals & Percentages (m9t-05) ─────────────────────
CURRICULUM.push(
  {id:"m9i-05-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-05", yearGroup:"Year 9",
   name:"Converting Fractions, Decimals & Percentages", emoji:"½", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Move freely between fractions, decimals and percentages, and order mixed values.",
   learningOutcomes:["Convert between fractions, decimals and percentages","Recall common FDP equivalents","Compare and order a mixed list of values"],
   prerequisites:[],
   topics:["FDP conversions","Common equivalents","Ordering values"]},

  {id:"m9i-05-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-05", yearGroup:"Year 9",
   name:"Calculating with Fractions", emoji:"➗", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Add, subtract, multiply and divide fractions, including mixed numbers.",
   learningOutcomes:["Add and subtract fractions using a common denominator","Multiply fractions and simplify","Divide fractions by multiplying by the reciprocal"],
   prerequisites:["m9i-05-1"],
   topics:["Adding & subtracting","Multiplying","Dividing (keep-flip)"]}
);

// ── Topic 6: Rounding, Estimation & Bounds (m9t-06) ─────────────────────────
CURRICULUM.push(
  {id:"m9i-06-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-06", yearGroup:"Year 9",
   name:"Rounding: Decimal Places & Significant Figures", emoji:"📏", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Round numbers to a given number of decimal places and to significant figures.",
   learningOutcomes:["Round to a number of decimal places","Round to a number of significant figures","Handle rounding that carries (e.g. 9 → 10)"],
   prerequisites:[],
   topics:["Decimal places","Significant figures","Carrying when rounding"]},

  {id:"m9i-06-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-06", yearGroup:"Year 9",
   name:"Estimation", emoji:"≈", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Estimate calculations by rounding each number to 1 significant figure.",
   learningOutcomes:["Round each value to 1 significant figure","Estimate the result of a calculation","Decide whether an estimate is an over- or under-estimate"],
   prerequisites:["m9i-06-1"],
   topics:["Rounding to 1 s.f.","Estimating answers","Over- and under-estimates"]},

  {id:"m9i-06-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-06", yearGroup:"Year 9",
   name:"Error Intervals & Bounds", emoji:"↔️", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find the upper and lower bounds of a rounded measurement and write an error interval.",
   learningOutcomes:["Find the lower and upper bound of a rounded value","Write an error interval using ≤ and <","Apply bounds to simple measurements"],
   prerequisites:["m9i-06-1"],
   topics:["Lower & upper bounds","Error intervals","Bounds of measurements"]}
);

// ── Topic 7: Ratio & Proportion (m9t-07) ────────────────────────────────────
CURRICULUM.push(
  {id:"m9i-07-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-07", yearGroup:"Year 9",
   name:"Simplifying & Sharing in a Ratio", emoji:"⚖️", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Write ratios in their simplest form and share an amount in a given ratio.",
   learningOutcomes:["Simplify a ratio to its lowest terms","Share an amount in a given ratio","Find a missing part from one known part"],
   prerequisites:["m9i-02-2"],
   topics:["Simplifying ratios","Sharing in a ratio","One part to the whole"]},

  {id:"m9i-07-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-07", yearGroup:"Year 9",
   name:"Direct & Inverse Proportion", emoji:"📈", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Use the unitary method for direct proportion and recognise inverse proportion.",
   learningOutcomes:["Use the unitary method for direct proportion","Solve best-buy and recipe problems","Recognise and use inverse proportion"],
   prerequisites:["m9i-07-1"],
   topics:["Unitary method","Direct proportion","Inverse proportion"]},

  {id:"m9i-07-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-07", yearGroup:"Year 9",
   name:"Ratio Problem Solving", emoji:"🧩", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Solve harder ratio problems, including combining ratios and ratio change.",
   learningOutcomes:["Find the whole from a difference between parts","Combine two ratios into one","Solve problems where a ratio changes"],
   prerequisites:["m9i-07-1"],
   topics:["Difference between parts","Combining ratios","Changing ratios"]}
);

// ── Topic 8: Percentages & Financial Maths (m9t-08) ─────────────────────────
CURRICULUM.push(
  {id:"m9i-08-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-08", yearGroup:"Year 9",
   name:"Percentage Change & Multipliers", emoji:"💷", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Increase and decrease by a percentage using multipliers, and find a percentage change.",
   learningOutcomes:["Find a percentage of an amount","Increase or decrease using a multiplier","Work out a percentage change"],
   prerequisites:["m9i-05-1"],
   topics:["Percentage of an amount","Multipliers","Percentage change"]},

  {id:"m9i-08-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-08", yearGroup:"Year 9",
   name:"Reverse Percentages", emoji:"🔙", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Find the original amount before a percentage increase or decrease.",
   learningOutcomes:["Identify the multiplier used","Divide to find the original (100%) amount","Avoid the 'just take the percentage back off' trap"],
   prerequisites:["m9i-08-1"],
   topics:["Finding 100%","Original price","Common pitfalls"]},

  {id:"m9i-08-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-08", yearGroup:"Year 9",
   name:"Simple & Compound Interest", emoji:"🏦", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Calculate simple and compound interest and use repeated percentage change.",
   learningOutcomes:["Calculate simple interest","Calculate compound interest with a multiplier","Use repeated percentage change (growth and depreciation)"],
   prerequisites:["m9i-08-1"],
   topics:["Simple interest","Compound interest","Depreciation"]}
);

// ── Topic 9: Algebraic Notation & Substitution (m9t-09) ─────────────────────
CURRICULUM.push(
  {id:"m9i-09-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-09", yearGroup:"Year 9",
   name:"Notation & Simplifying Expressions", emoji:"✏️", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Use correct algebraic notation and collect like terms, including with indices.",
   learningOutcomes:["Write expressions using correct notation","Collect like terms","Simplify products such as a × a = a²"],
   prerequisites:[],
   topics:["Algebraic notation","Collecting like terms","Index notation in algebra"]},

  {id:"m9i-09-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-09", yearGroup:"Year 9",
   name:"Expanding & Factorising", emoji:"📂", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Expand single brackets and factorise by taking out the highest common factor.",
   learningOutcomes:["Expand a single bracket","Expand and simplify two brackets","Factorise by taking out a common factor"],
   prerequisites:["m9i-09-1"],
   topics:["Expanding brackets","Expand & simplify","Factorising (HCF)"]},

  {id:"m9i-09-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-09", yearGroup:"Year 9",
   name:"Substitution & Formulae", emoji:"🔣", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Substitute numbers into expressions and formulae, respecting order of operations.",
   learningOutcomes:["Substitute positive and negative numbers","Use formulae written in words and symbols","Apply correct order of operations with powers"],
   prerequisites:["m9i-09-1"],
   topics:["Substitution","Using formulae","Negatives & powers"]},
  {id:"m9i-09-4", subject:"Mathematics", subjectId:"math", topicId:"m9t-09", yearGroup:"Year 9",
   name:"Rearranging Formulae", emoji:"🔧", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Change the subject of a formula using inverse operations.",
   learningOutcomes:["Use inverse operations on both sides","Rearrange one- and two-step formulae","Make a given variable the subject"],
   prerequisites:["m9i-09-3"],
   topics:["Changing the subject","Inverse operations","Two-step rearranging"]}
);

// ── Topic 10: Sequences & nth Term (m9t-10) ─────────────────────────────────
CURRICULUM.push(
  {id:"m9i-10-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-10", yearGroup:"Year 9",
   name:"Linear Sequences & the nth Term", emoji:"🔢", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Find and use the nth-term rule for a linear (arithmetic) sequence.",
   learningOutcomes:["Continue a linear sequence","Find the nth term of a linear sequence","Use the nth term to test if a number is in the sequence"],
   prerequisites:["m9i-09-3"],
   topics:["Common difference","nth-term rule","Is it in the sequence?"]},

  {id:"m9i-10-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-10", yearGroup:"Year 9",
   name:"Special & Non-linear Sequences", emoji:"🌀", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Recognise square, cube, triangular, Fibonacci and geometric sequences and continue them.",
   learningOutcomes:["Recognise special number sequences","Continue a non-linear sequence","Describe the rule in words"],
   prerequisites:["m9i-10-1"],
   topics:["Square & cube numbers","Triangular & Fibonacci","Geometric sequences"]}
);

// ── Topic 11: Angles & Properties of Shapes (m9t-11) ────────────────────────
CURRICULUM.push(
  {id:"m9i-11-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-11", yearGroup:"Year 9",
   name:"Angle Rules on Lines & in Triangles", emoji:"📐", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Use angles on a line, around a point, vertically opposite and in triangles, with parallel-line rules.",
   learningOutcomes:["Use angles on a line and around a point","Use vertically opposite and triangle angle facts","Apply parallel-line angle rules"],
   prerequisites:[],
   topics:["Angles on a line / point","Triangle angles","Parallel lines"]},

  {id:"m9i-11-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-11", yearGroup:"Year 9",
   name:"Angles in Polygons", emoji:"⬡", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Find interior and exterior angles of regular and irregular polygons.",
   learningOutcomes:["Use the exterior-angle sum of 360°","Find the interior-angle sum (n−2)×180°","Find angles in regular polygons"],
   prerequisites:["m9i-11-1"],
   topics:["Exterior angles","Interior angle sum","Regular polygons"]},

  {id:"m9i-11-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-11", yearGroup:"Year 9",
   name:"Quadrilaterals & Circle Parts", emoji:"⭕", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Use properties of special quadrilaterals and name the parts of a circle.",
   learningOutcomes:["Recall properties of special quadrilaterals","Find angles in quadrilaterals (sum 360°)","Name the parts of a circle"],
   prerequisites:["m9i-11-1"],
   topics:["Special quadrilaterals","Angles in quadrilaterals","Parts of a circle"]}
);

// ── Topic 12: Mensuration (m9t-12) ──────────────────────────────────────────
CURRICULUM.push(
  {id:"m9i-12-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-12", yearGroup:"Year 9",
   name:"Perimeter & Area", emoji:"📦", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Find perimeter and area of rectangles, triangles, parallelograms, trapezia and circles.",
   learningOutcomes:["Find the area of standard 2D shapes","Find the circumference and area of a circle","Find the area of compound shapes"],
   prerequisites:[],
   topics:["Area of 2D shapes","Circles","Compound shapes"]},

  {id:"m9i-12-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-12", yearGroup:"Year 9",
   name:"Surface Area & Volume", emoji:"🧊", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Find the volume and surface area of cuboids, prisms and cylinders.",
   learningOutcomes:["Find the volume of a cuboid and prism","Find the volume of a cylinder","Find the surface area using a net"],
   prerequisites:["m9i-12-1"],
   topics:["Volume of prisms","Volume of a cylinder","Surface area"]},

  {id:"m9i-12-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-12", yearGroup:"Year 9",
   name:"Plans & Elevations", emoji:"🏗️", difficulty:2, estimatedHours:1, color:"#3b82f6",
   description:"Draw and interpret plans and front and side elevations of 3D solids.",
   learningOutcomes:["Identify the plan view of a solid","Identify the front and side elevations","Build a solid from its plan and elevations"],
   prerequisites:["m9i-12-1"],
   topics:["Plan view","Front & side elevation","From views to solid"]},
  {id:"m9i-12-4", subject:"Mathematics", subjectId:"math", topicId:"m9t-12", yearGroup:"Year 9",
   name:"Arc Length & Sector Area", emoji:"🥧", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find the arc length and sector area as a fraction of a circle.",
   learningOutcomes:["Use arc length = (θ/360) × 2πr","Use sector area = (θ/360) × πr²","Solve sector problems"],
   prerequisites:["m9i-12-1"],
   topics:["Arc length","Sector area","Fractions of a circle"]}
);

// ── Topic 13: Constructions & Loci (m9t-13) ─────────────────────────────────
CURRICULUM.push(
  {id:"m9i-13-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-13", yearGroup:"Year 9",
   name:"Constructions with Ruler & Compasses", emoji:"🧭", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"Construct perpendicular bisectors, angle bisectors and triangles accurately.",
   learningOutcomes:["Construct the perpendicular bisector of a line","Construct the bisector of an angle","Construct a triangle from given measurements"],
   prerequisites:["m9i-11-1"],
   topics:["Perpendicular bisector","Angle bisector","Constructing triangles"]},

  {id:"m9i-13-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-13", yearGroup:"Year 9",
   name:"Loci & Regions", emoji:"🎯", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Find the locus of points obeying a rule and shade regions that satisfy several conditions.",
   learningOutcomes:["Find the locus of points a fixed distance from a point or line","Use the perpendicular and angle bisector as loci","Shade a region that satisfies more than one condition"],
   prerequisites:["m9i-13-1"],
   topics:["Locus from a point/line","Bisectors as loci","Shading regions"]}
);

// ── Topic 14: Probability (m9t-14) ──────────────────────────────────────────
CURRICULUM.push(
  {id:"m9i-14-1", subject:"Mathematics", subjectId:"math", topicId:"m9t-14", yearGroup:"Year 9",
   name:"Probability Basics & the Scale", emoji:"🎲", difficulty:1, estimatedHours:2, color:"#3b82f6",
   description:"Use the 0–1 probability scale, find single-event probabilities and use that they sum to 1.",
   learningOutcomes:["Place events on the 0–1 probability scale","Find the probability of a single event","Use P(not A) = 1 − P(A)"],
   prerequisites:["m9i-05-1"],
   topics:["The probability scale","Single events","Probabilities sum to 1"]},

  {id:"m9i-14-2", subject:"Mathematics", subjectId:"math", topicId:"m9t-14", yearGroup:"Year 9",
   name:"Sample Space & Combined Events", emoji:"🎯", difficulty:2, estimatedHours:2, color:"#3b82f6",
   description:"List outcomes with sample-space diagrams and find probabilities of combined events.",
   learningOutcomes:["List outcomes in a sample-space diagram","Find probabilities from a two-way table","Use the AND (×) and OR (+) ideas informally"],
   prerequisites:["m9i-14-1"],
   topics:["Sample-space diagrams","Two-way tables","Combined outcomes"]},

  {id:"m9i-14-3", subject:"Mathematics", subjectId:"math", topicId:"m9t-14", yearGroup:"Year 9",
   name:"Tree Diagrams & Relative Frequency", emoji:"🌳", difficulty:3, estimatedHours:2, color:"#3b82f6",
   description:"Use tree diagrams for two events and estimate probability from relative frequency.",
   learningOutcomes:["Complete a probability tree diagram","Multiply along branches for combined events","Estimate probability using relative frequency"],
   prerequisites:["m9i-14-2"],
   topics:["Tree diagrams","Multiplying along branches","Relative frequency"]}
);
