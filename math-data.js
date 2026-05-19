// math-data.js — IXL Year 7 Maths: topic tiles + island definitions
// Questions/flashcards are in math-content-1/2/3.js
// Lessons are in math-lessons-1/2/3.js

// ── Remove old math islands & their data ─────────────────────────────────
(function cleanOldMath() {
  const oldIds = new Set(CURRICULUM.filter(i => i.subjectId === 'math').map(i => i.id));
  CURRICULUM.splice(0, CURRICULUM.length, ...CURRICULUM.filter(i => i.subjectId !== 'math'));
  FLASHCARDS.splice(0, FLASHCARDS.length, ...FLASHCARDS.filter(f => !oldIds.has(f.islandId)));
  oldIds.forEach(id => delete QUESTIONS[id]);
})();

// ── MATH TOPICS (28 main tiles on dashboard) ─────────────────────────────
const MATH_TOPICS = [
  // ── Full content ─────────────────────────────────────────────────────
  {id:"mt-01",name:"Whole Numbers",emoji:"🔢",hasContent:true,
   description:"Understand place value, round whole numbers, read word names and Roman numerals, and add and subtract large numbers confidently."},
  {id:"mt-02",name:"Multiplication & Division",emoji:"✖️",hasContent:true,
   description:"Multiply and divide whole numbers using formal written methods, apply divisibility rules, and estimate products and quotients."},
  {id:"mt-03",name:"Powers & Roots",emoji:"⚡",hasContent:true,
   description:"Write products using index notation, evaluate powers and roots, and explore the relationship between squares and square roots."},
  {id:"mt-04",name:"Number Theory",emoji:"🔍",hasContent:true,
   description:"Identify prime and composite numbers, use factor trees for prime factorisation, find highest common factors and lowest common multiples, and understand multiplicative inverses."},
  {id:"mt-05",name:"Decimals",emoji:"🔟",hasContent:true,
   description:"Understand decimal place value, round decimals, add, subtract, multiply and divide decimals — including decimal-by-decimal multiplication and division with decimal divisors."},
  {id:"mt-06",name:"Fractions",emoji:"½",hasContent:true,
   description:"Simplify and compare fractions, add and subtract fractions with different denominators, convert to recurring decimals, understand fractions as division, and work with fraction inequalities."},
  {id:"mt-07",name:"Multiply & Divide Fractions",emoji:"✕",hasContent:true,
   description:"Multiply fractions by whole numbers and by other fractions, divide fractions, carry out mixed number calculations, and estimate and scale with fractions."},
  {id:"mt-08",name:"Integers",emoji:"➖",hasContent:true,
   description:"Understand positive and negative integers, place them on number lines, add, subtract, multiply and divide with negative numbers, and complete integer input/output tables."},
  {id:"mt-09",name:"Ratio & Rates",emoji:"⚖️",hasContent:true,
   description:"Write and simplify ratios, find equivalent ratios, calculate unit rates, solve proportions, apply ratio to scale drawings, and use bar diagrams to solve ratio word problems."},
  {id:"mt-10",name:"Percentages",emoji:"💯",hasContent:true,
   description:"Convert fluently between percentages, fractions and decimals, find percentages of amounts, solve percentage increase and decrease problems, and use grid/bar models to estimate percents."},
  {id:"mt-11",name:"Algebra: Expressions",emoji:"📝",hasContent:true,
   description:"Write and evaluate variable expressions, collect like terms, apply the distributive property, factorise simple linear expressions, and use properties of addition and multiplication to write equivalent expressions."},
  {id:"mt-12",name:"Algebra: Equations & Sequences",emoji:"🔄",hasContent:true,
   description:"Identify arithmetic and geometric sequences, solve one-step and two-step equations, write and solve simple inequalities, distinguish expressions from equations, and model equations with algebra tiles."},
  {id:"mt-13",name:"Statistics & Probability",emoji:"📊",hasContent:true,
   description:"Calculate mean, median, mode and range, read and draw statistical graphs including pictograms and double bar/line graphs, understand sampling and bias, identify outliers and distributions, and find probability of simple, combined, mutually exclusive and overlapping events."},
  // ── Coming soon ──────────────────────────────────────────────────────
  {id:"mt-14",name:"Order of Operations",emoji:"📋",hasContent:true,
   description:"Apply BODMAS/BIDMAS rules to evaluate numerical expressions involving whole numbers, decimals, fractions and integers."},
  {id:"mt-15",name:"Rational Numbers",emoji:"🔢",hasContent:true,
   description:"Place rational numbers on number lines, compare and order them, and explore the sign of rational number expressions."},
  {id:"mt-16",name:"Problem Solving & Estimation",emoji:"🧩",hasContent:true,
   description:"Use estimation, logical reasoning and multi-step strategies to solve real-world word problems, identify extra or missing information, and find distance/direction to a starting point."},
  {id:"mt-17",name:"Units of Measurement",emoji:"📏",hasContent:true,
   description:"Convert between metric and imperial units of length, mass, volume and area, convert square and cubic units, compare temperatures above and below zero, and understand precision."},
  {id:"mt-18",name:"Money & Consumer Maths",emoji:"💷",hasContent:true,
   description:"Add, subtract, multiply and divide money amounts; calculate sale prices, unit prices, VAT and tips; find combinations of coins; and solve money multiplication and division problems."},
  {id:"mt-19",name:"Time",emoji:"🕐",hasContent:true,
   description:"Calculate elapsed time, convert between 12-hour and 24-hour time, read timetables, and work with time zones."},
  {id:"mt-20",name:"Coordinate Plane",emoji:"📍",hasContent:true,
   description:"Plot and read points in all four quadrants, identify quadrant positions, and use coordinates to describe maps and paths."},
  {id:"mt-21",name:"Number Sequences",emoji:"🔢",hasContent:true,
   description:"Identify and continue arithmetic and geometric sequences, find the nth term, and write variable expressions for sequences."},
  {id:"mt-22",name:"Algebra: Inequalities",emoji:"↔️",hasContent:true,
   description:"Write, graph and solve one-step inequalities, interpret solutions on a number line, and apply inequalities to word problems."},
  {id:"mt-23",name:"Two-Variable Equations",emoji:"📈",hasContent:true,
   description:"Find values using two-variable equations, complete tables of values, and graph linear relationships on a coordinate plane."},
  {id:"mt-24",name:"2D Shapes & Angles",emoji:"📐",hasContent:true,
   description:"Classify triangles and quadrilaterals, measure and estimate angles, find missing angles using parallel line rules, identify vertical and supplementary angles, name angles, understand lines/segments/rays, and explore parts of circles."},
  {id:"mt-25",name:"Symmetry & Transformations",emoji:"🔀",hasContent:true,
   description:"Identify line and rotational symmetry, perform reflections and translations, and recognise congruent figures."},
  {id:"mt-26",name:"3D Figures",emoji:"📦",hasContent:true,
   description:"Name and describe 3D shapes, draw and identify nets, and interpret front, side and top views of solids."},
  {id:"mt-27",name:"Area, Perimeter & Volume",emoji:"📏",hasContent:true,
   description:"Find areas of triangles, parallelograms, trapeziums and compound figures, solve perimeter problems, and calculate volumes of cuboids."},
  {id:"mt-28",name:"Financial Literacy",emoji:"💳",hasContent:true,
   description:"Balance and adjust a budget, understand how debit and credit cards work, and make informed financial decisions."}
];

// ── MATH ISLANDS → pushed into CURRICULUM ────────────────────────────────
CURRICULUM.push(

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 1 — WHOLE NUMBERS (mt-01)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-01-1",subject:"Mathematics",subjectId:"math",topicId:"mt-01",
   name:"Place Values in Whole Numbers",emoji:"🔢",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify and compare the value of digits in whole numbers up to millions.",
   learningOutcomes:["Identify the place value of any digit in a whole number","Write numbers in expanded form","Compare and order large whole numbers"],
   prerequisites:[],
   topics:["Ones, tens, hundreds, thousands","Ten-thousands, hundred-thousands, millions","Expanded notation","Comparing and ordering"]},

  {id:"mi-01-2",subject:"Mathematics",subjectId:"math",topicId:"mt-01",
   name:"Rounding Whole Numbers",emoji:"🎯",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Round whole numbers to the nearest 10, 100, 1,000, 10,000 and beyond.",
   learningOutcomes:["Apply the rounding rule correctly","Round to any given place value","Use rounding to estimate and check answers"],
   prerequisites:["mi-01-1"],
   topics:["Rounding to nearest 10 and 100","Rounding to nearest 1,000 and 10,000","Rounding large numbers","Estimation using rounding"]},

  {id:"mi-01-3",subject:"Mathematics",subjectId:"math",topicId:"mt-01",
   name:"Word Names & Roman Numerals",emoji:"📝",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Read and write numbers in words and convert to and from Roman numerals.",
   learningOutcomes:["Write any whole number in words","Convert between Hindu-Arabic and Roman numerals","Recognise Roman numerals up to 1,000"],
   prerequisites:[],
   topics:["Number words to millions","Roman numeral symbols (I V X L C D M)","Additive and subtractive Roman numeral rules","Converting between systems"]},

  {id:"mi-01-4",subject:"Mathematics",subjectId:"math",topicId:"mt-01",
   name:"Add & Subtract Whole Numbers",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract multi-digit whole numbers with and without regrouping, including word problems.",
   learningOutcomes:["Add and subtract numbers with up to 7 digits","Apply column addition and subtraction","Solve multi-step word problems involving addition and subtraction"],
   prerequisites:["mi-01-1"],
   topics:["Column addition with regrouping","Column subtraction with borrowing","Checking answers by inverse operations","Word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 2 — MULTIPLICATION & DIVISION (mt-02)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-02-1",subject:"Mathematics",subjectId:"math",topicId:"mt-02",
   name:"Multiply Whole Numbers",emoji:"✖️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Multiply whole numbers using short multiplication and apply multiplication facts.",
   learningOutcomes:["Recall multiplication facts up to 12 × 12","Multiply a multi-digit number by a single digit","Multiply numbers ending in zeros"],
   prerequisites:[],
   topics:["Times tables","Short multiplication","Multiplying by 10, 100, 1,000","Multiplying three or more numbers"]},

  {id:"mi-02-2",subject:"Mathematics",subjectId:"math",topicId:"mt-02",
   name:"Multiply Large Numbers",emoji:"🧮",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use long multiplication to multiply multi-digit numbers and solve word problems.",
   learningOutcomes:["Use long multiplication for 4-digit × 2-digit","Estimate products to check answers","Solve multiplication word problems"],
   prerequisites:["mi-02-1"],
   topics:["Long multiplication","Four-digit by two-digit multiplication","Estimating products","Word problems"]},

  {id:"mi-02-3",subject:"Mathematics",subjectId:"math",topicId:"mt-02",
   name:"Divisibility Rules",emoji:"🔍",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Apply divisibility rules for 2, 3, 4, 5, 6, 8, 9 and 10 to determine factors quickly.",
   learningOutcomes:["State divisibility rules for 2, 3, 4, 5, 6, 8, 9 and 10","Test whether a number is divisible without dividing","Use divisibility rules to identify factors"],
   prerequisites:[],
   topics:["Divisibility by 2 and 5","Divisibility by 3 and 9","Divisibility by 4 and 8","Divisibility by 6 and 10"]},

  {id:"mi-02-4",subject:"Mathematics",subjectId:"math",topicId:"mt-02",
   name:"Divide Whole Numbers",emoji:"➗",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Divide whole numbers using short and long division, including interpreting remainders.",
   learningOutcomes:["Divide by single-digit and two-digit divisors","Interpret remainders in context","Estimate quotients and check using inverse"],
   prerequisites:["mi-02-1"],
   topics:["Short division","Long division (2-digit divisors)","Interpreting remainders","Division word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 3 — POWERS & ROOTS (mt-03)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-03-1",subject:"Mathematics",subjectId:"math",topicId:"mt-03",
   name:"Index Notation",emoji:"⬛",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Write repeated multiplication using index notation and understand the terms base and exponent.",
   learningOutcomes:["Write repeated multiplication as a power","Identify the base and exponent","Expand powers back to repeated multiplication"],
   prerequisites:[],
   topics:["Base and exponent","Writing powers","Expanding index notation","Powers of 2, 3 and 10"]},

  {id:"mi-03-2",subject:"Mathematics",subjectId:"math",topicId:"mt-03",
   name:"Evaluate Indices",emoji:"⚡",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate the value of expressions involving whole number, decimal and fractional bases raised to powers.",
   learningOutcomes:["Evaluate whole number powers","Evaluate powers with decimal and fractional bases","Find missing bases or exponents"],
   prerequisites:["mi-03-1"],
   topics:["Whole number bases","Decimal bases","Fractional bases","Finding missing index or base"]},

  {id:"mi-03-3",subject:"Mathematics",subjectId:"math",topicId:"mt-03",
   name:"Square Roots of Perfect Squares",emoji:"🌱",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Recall and calculate square roots of perfect squares up to 225 and understand the inverse relationship.",
   learningOutcomes:["Recall square roots of perfect squares to 15²","Understand that squaring and square-rooting are inverse operations","Identify perfect square numbers"],
   prerequisites:["mi-03-1"],
   topics:["Perfect squares 1–225","Square root symbol (√)","Inverse relationship","Identifying perfect squares"]},

  {id:"mi-03-4",subject:"Mathematics",subjectId:"math",topicId:"mt-03",
   name:"Mixed Powers & Roots Problems",emoji:"🔀",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Solve multi-step problems combining powers, square roots and other operations.",
   learningOutcomes:["Apply BODMAS with powers and roots","Solve equations involving squares and square roots","Evaluate complex index expressions"],
   prerequisites:["mi-03-2","mi-03-3"],
   topics:["Order of operations with powers","Equations with squares","Combining roots and powers","Problem solving"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 4 — NUMBER THEORY (mt-04)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-04-1",subject:"Mathematics",subjectId:"math",topicId:"mt-04",
   name:"Prime & Composite Numbers",emoji:"🔵",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Identify prime and composite numbers, list factors, and know primes up to 100.",
   learningOutcomes:["Define prime and composite numbers","List all factors of a number","Identify primes up to 100"],
   prerequisites:[],
   topics:["Definition of prime and composite","Finding factors","Primes up to 100","Special cases: 1 and 2"]},

  {id:"mi-04-2",subject:"Mathematics",subjectId:"math",topicId:"mt-04",
   name:"Prime Factorisation",emoji:"🌳",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Break any whole number into its prime factors using factor trees and express the result in index form.",
   learningOutcomes:["Use a factor tree to find prime factors","Write prime factorisation using index notation","Verify factorisation by multiplication"],
   prerequisites:["mi-04-1"],
   topics:["Factor trees","Prime factor form","Index notation in factorisation","Verifying results"]},

  {id:"mi-04-3",subject:"Mathematics",subjectId:"math",topicId:"mt-04",
   name:"Highest Common Factor (HCF)",emoji:"⬆️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find the HCF of two or more numbers using lists of factors or prime factorisation.",
   learningOutcomes:["Find the HCF by listing factors","Use prime factorisation to find HCF","Apply HCF to simplify fractions and solve problems"],
   prerequisites:["mi-04-2"],
   topics:["Listing factor pairs","Intersection of factor lists","HCF using prime factorisation","Real-life HCF problems"]},

  {id:"mi-04-4",subject:"Mathematics",subjectId:"math",topicId:"mt-04",
   name:"Lowest Common Multiple (LCM)",emoji:"⬇️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find the LCM of two or more numbers using lists of multiples or prime factorisation.",
   learningOutcomes:["Find the LCM by listing multiples","Use prime factorisation to find LCM","Apply LCM to add fractions and solve word problems"],
   prerequisites:["mi-04-1"],
   topics:["Listing multiples","Common multiples","LCM using prime factorisation","Real-life LCM problems"]},

  {id:"mi-04-5",subject:"Mathematics",subjectId:"math",topicId:"mt-04",
   name:"Multiplicative Inverses",emoji:"🔄",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Understand that the multiplicative inverse (reciprocal) of a number n is 1/n, and that their product is always 1.",
   learningOutcomes:["Define multiplicative inverse (reciprocal)","Find the reciprocal of whole numbers, fractions and decimals","Verify inverses by checking the product equals 1"],
   prerequisites:["mi-04-1"],
   topics:["Reciprocal of a whole number","Reciprocal of a fraction","Reciprocal of a decimal","Product of a number and its inverse = 1"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 5 — DECIMALS (mt-05)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-05-1",subject:"Mathematics",subjectId:"math",topicId:"mt-05",
   name:"Decimal Place Values & Ordering",emoji:"🔟",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Understand tenths, hundredths and thousandths, compare decimals and place them on a number line.",
   learningOutcomes:["Identify tenths, hundredths and thousandths place values","Compare and order decimal numbers","Place decimals on a number line"],
   prerequisites:[],
   topics:["Decimal column values","Comparing decimals","Ordering decimals","Decimal number lines"]},

  {id:"mi-05-2",subject:"Mathematics",subjectId:"math",topicId:"mt-05",
   name:"Rounding Decimals",emoji:"🎯",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Round decimals to the nearest whole number, one decimal place and two decimal places.",
   learningOutcomes:["Round decimals to a given number of decimal places","Round to the nearest whole number","Use rounding to check the reasonableness of answers"],
   prerequisites:["mi-05-1"],
   topics:["Rounding to 1 d.p.","Rounding to 2 d.p.","Rounding to nearest integer","Estimation with decimals"]},

  {id:"mi-05-3",subject:"Mathematics",subjectId:"math",topicId:"mt-05",
   name:"Add & Subtract Decimals",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract decimals with different numbers of decimal places using column methods.",
   learningOutcomes:["Line up decimal points in column addition/subtraction","Add and subtract decimals of different lengths","Estimate sums and differences of decimals"],
   prerequisites:["mi-05-1"],
   topics:["Column addition with decimals","Column subtraction with decimals","Lining up decimal points","Decimal word problems"]},

  {id:"mi-05-4",subject:"Mathematics",subjectId:"math",topicId:"mt-05",
   name:"Multiply & Divide Decimals",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide decimals by whole numbers and by powers of ten.",
   learningOutcomes:["Multiply a decimal by a whole number","Divide a decimal by a whole number","Multiply and divide by powers of 10"],
   prerequisites:["mi-05-1","mi-02-1"],
   topics:["Decimal × whole number","Decimal ÷ whole number","× and ÷ by 10, 100, 1000","Decimal word problems"]},

  {id:"mi-05-5",subject:"Mathematics",subjectId:"math",topicId:"mt-05",
   name:"Advanced Decimal Operations",emoji:"🔬",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Multiply two decimals together, divide by a decimal divisor, and solve inequalities involving decimal operations.",
   learningOutcomes:["Multiply a decimal by another decimal using the place-value method","Divide by a decimal divisor by converting to whole-number division","Write and evaluate inequalities involving decimal multiplication and division"],
   prerequisites:["mi-05-4"],
   topics:["Decimal × decimal","Division with decimal divisors","Inequalities with decimal multiplication","Inequalities with decimal division"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 6 — FRACTIONS (mt-06)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-06-1",subject:"Mathematics",subjectId:"math",topicId:"mt-06",
   name:"Equivalent Fractions & Simplifying",emoji:"½",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Generate equivalent fractions by multiplying or dividing, and simplify fractions to their lowest terms.",
   learningOutcomes:["Generate equivalent fractions","Simplify a fraction using the HCF","Recognise when a fraction is in its simplest form"],
   prerequisites:[],
   topics:["Equivalent fractions","Simplifying using HCF","Lowest terms","Fraction on a number line"]},

  {id:"mi-06-2",subject:"Mathematics",subjectId:"math",topicId:"mt-06",
   name:"Compare & Order Fractions",emoji:"🔢",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Compare fractions with different denominators and place mixed numbers and fractions in order.",
   learningOutcomes:["Convert fractions to a common denominator for comparison","Order a set of fractions from smallest to largest","Compare improper fractions and mixed numbers"],
   prerequisites:["mi-06-1"],
   topics:["Common denominator","Ordering fractions","Mixed numbers and improper fractions","Comparison on number lines"]},

  {id:"mi-06-3",subject:"Mathematics",subjectId:"math",topicId:"mt-06",
   name:"Add & Subtract Fractions",emoji:"➕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract fractions with the same and different denominators, using the LCM method.",
   learningOutcomes:["Add and subtract fractions with the same denominator","Find the LCD to add/subtract fractions with different denominators","Simplify answers to lowest terms"],
   prerequisites:["mi-06-1","mi-04-4"],
   topics:["Same denominator addition/subtraction","LCD method","Different denominator fractions","Simplifying results"]},

  {id:"mi-06-4",subject:"Mathematics",subjectId:"math",topicId:"mt-06",
   name:"Add & Subtract Mixed Numbers",emoji:"🔀",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract mixed numbers, converting to improper fractions where necessary.",
   learningOutcomes:["Convert between mixed numbers and improper fractions","Add mixed numbers with different denominators","Subtract mixed numbers with borrowing"],
   prerequisites:["mi-06-3"],
   topics:["Improper fraction conversions","Adding mixed numbers","Subtracting mixed numbers","Word problems with mixed numbers"]},

  {id:"mi-06-5",subject:"Mathematics",subjectId:"math",topicId:"mt-06",
   name:"Recurring Decimals & Fractions as Division",emoji:"🔁",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Convert fractions to recurring decimals, understand fractions as division, and read fraction information from graphs and tables.",
   learningOutcomes:["Convert fractions to recurring (repeating) decimals using dot notation","Interpret a fraction as a division and solve word problems","Read and interpret fractions from graphs and tables"],
   prerequisites:["mi-06-2"],
   topics:["Terminating vs recurring decimals","Dot notation for recurring decimals","Fractions as division word problems","Fractions from graphs and tables"]},

  {id:"mi-06-6",subject:"Mathematics",subjectId:"math",topicId:"mt-06",
   name:"Fraction Inequalities",emoji:"⚖️",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Write and evaluate inequalities involving the addition and subtraction of fractions and mixed numbers.",
   learningOutcomes:["Compare sums and differences of fractions using inequality symbols","Determine whether a fraction addition or subtraction statement is true using <, > or =","Apply fraction inequality reasoning to mixed numbers"],
   prerequisites:["mi-06-3","mi-06-4"],
   topics:["Inequalities with fraction addition","Inequalities with fraction subtraction","Inequalities with mixed number addition","Inequalities with mixed number subtraction"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 7 — MULTIPLY & DIVIDE FRACTIONS (mt-07)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-07-1",subject:"Mathematics",subjectId:"math",topicId:"mt-07",
   name:"Multiply Fractions by Whole Numbers",emoji:"✖️",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Multiply a fraction or mixed number by a whole number and simplify the result.",
   learningOutcomes:["Multiply a fraction by a whole number","Find a fraction of a whole number","Simplify the product to lowest terms"],
   prerequisites:["mi-06-1"],
   topics:["Fraction × whole number","Fraction of a number","Simplifying products","Word problems"]},

  {id:"mi-07-2",subject:"Mathematics",subjectId:"math",topicId:"mt-07",
   name:"Multiply Two Fractions",emoji:"✕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply pairs of fractions and mixed numbers, simplifying before or after multiplying.",
   learningOutcomes:["Multiply two fractions (numerator × numerator, denominator × denominator)","Cancel common factors before multiplying","Multiply mixed numbers"],
   prerequisites:["mi-07-1"],
   topics:["Fraction × fraction","Cancelling before multiplying","Mixed number multiplication","Scaling problems"]},

  {id:"mi-07-3",subject:"Mathematics",subjectId:"math",topicId:"mt-07",
   name:"Divide Fractions",emoji:"➗",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Divide whole numbers and fractions by unit fractions and other fractions using the 'flip and multiply' method.",
   learningOutcomes:["Divide a whole number by a unit fraction","Divide a fraction by a whole number","Divide two fractions using the reciprocal"],
   prerequisites:["mi-07-1"],
   topics:["Dividing by unit fractions","Reciprocal (flip) method","Fraction ÷ fraction","Division word problems"]},

  {id:"mi-07-4",subject:"Mathematics",subjectId:"math",topicId:"mt-07",
   name:"Mixed Number Operations",emoji:"🔀",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide mixed numbers, and apply fraction operations to multi-step problems.",
   learningOutcomes:["Multiply mixed numbers by converting to improper fractions","Divide mixed numbers","Solve multi-step problems with fraction operations"],
   prerequisites:["mi-07-2","mi-07-3"],
   topics:["Mixed number × fraction","Mixed number ÷ fraction","Multi-step fraction problems","Real-life contexts"]},

  {id:"mi-07-5",subject:"Mathematics",subjectId:"math",topicId:"mt-07",
   name:"Scaling & Estimating with Fractions",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Scale whole numbers by fractions to predict whether a product is larger or smaller, and estimate products of fractions, whole numbers and mixed numbers.",
   learningOutcomes:["Predict whether scaling by a fraction makes a number larger or smaller","Estimate products of fractions and whole numbers using benchmarks","Estimate products involving mixed numbers"],
   prerequisites:["mi-07-1"],
   topics:["Scaling by fractions less than 1","Scaling by fractions greater than 1","Estimating fraction × whole number","Estimating with mixed numbers"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 8 — INTEGERS (mt-08)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-08-1",subject:"Mathematics",subjectId:"math",topicId:"mt-08",
   name:"Understanding Integers",emoji:"🔢",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Understand positive and negative integers, place them on number lines, and find opposites.",
   learningOutcomes:["Define integers and give examples","Place integers correctly on a number line","Find the opposite of any integer"],
   prerequisites:[],
   topics:["Positive and negative integers","Integer number lines","Opposites","Comparing integers"]},

  {id:"mi-08-2",subject:"Mathematics",subjectId:"math",topicId:"mt-08",
   name:"Add Integers",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Add positive and negative integers using number lines and integer addition rules.",
   learningOutcomes:["Add two integers using a number line","Apply integer addition rules (same/different signs)","Add three or more integers"],
   prerequisites:["mi-08-1"],
   topics:["Number line addition","Same-sign addition","Different-sign addition","Adding three or more integers"]},

  {id:"mi-08-3",subject:"Mathematics",subjectId:"math",topicId:"mt-08",
   name:"Subtract Integers",emoji:"➖",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Subtract integers by converting to addition of the opposite, and apply to word problems.",
   learningOutcomes:["Rewrite subtraction as adding the opposite","Subtract positive and negative integers","Solve real-world integer subtraction problems"],
   prerequisites:["mi-08-2"],
   topics:["Subtraction as adding the opposite","Integer subtraction rules","Combined addition and subtraction","Temperature and altitude problems"]},

  {id:"mi-08-4",subject:"Mathematics",subjectId:"math",topicId:"mt-08",
   name:"Multiply & Divide Integers",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide positive and negative integers using sign rules.",
   learningOutcomes:["Apply the rules for multiplying integers (same signs positive, different signs negative)","Divide integers using the same sign rules","Evaluate expressions with mixed integer operations"],
   prerequisites:["mi-08-1"],
   topics:["Positive × positive","Negative × positive","Negative × negative","Division sign rules"]},

  {id:"mi-08-5",subject:"Mathematics",subjectId:"math",topicId:"mt-08",
   name:"Integer Input/Output Tables",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Add and subtract integers using input/output tables to discover rules and patterns.",
   learningOutcomes:["Complete input/output tables involving integer addition","Complete input/output tables involving integer subtraction","Determine the rule from a partially completed integer table"],
   prerequisites:["mi-08-2","mi-08-3"],
   topics:["Addition input/output tables","Subtraction input/output tables","Finding the rule","Mixed operation tables"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 9 — RATIO & RATES (mt-09)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-09-1",subject:"Mathematics",subjectId:"math",topicId:"mt-09",
   name:"Write & Simplify Ratios",emoji:"⚖️",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Write ratios from descriptions and diagrams, and simplify ratios to their simplest form.",
   learningOutcomes:["Write a ratio using the colon notation","Simplify a ratio using the HCF","Express a ratio in the form 1:n or n:1"],
   prerequisites:["mi-04-3"],
   topics:["Writing ratios","Simplifying ratios","Part-to-part and part-to-whole","Ratio in different forms"]},

  {id:"mi-09-2",subject:"Mathematics",subjectId:"math",topicId:"mt-09",
   name:"Equivalent Ratios & Ratio Tables",emoji:"🔢",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify and create equivalent ratios, complete ratio tables, and divide quantities in a given ratio.",
   learningOutcomes:["Identify equivalent ratios","Complete a ratio table","Divide a quantity in a given ratio"],
   prerequisites:["mi-09-1"],
   topics:["Equivalent ratios","Ratio tables","Dividing in a ratio","Sharing problems"]},

  {id:"mi-09-3",subject:"Mathematics",subjectId:"math",topicId:"mt-09",
   name:"Unit Rates & Speed",emoji:"⏱️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate unit rates, compare rates, and use the speed-distance-time formula.",
   learningOutcomes:["Calculate a unit rate from a given rate","Compare rates to find the best value","Use speed = distance ÷ time and rearrangements"],
   prerequisites:["mi-09-1"],
   topics:["Unit rates","Comparing rates","Speed formula","Distance and time problems"]},

  {id:"mi-09-4",subject:"Mathematics",subjectId:"math",topicId:"mt-09",
   name:"Solve Proportions & Scale Drawings",emoji:"📏",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve proportion equations using cross-multiplication and apply to scale drawings and maps.",
   learningOutcomes:["Solve a proportion by cross-multiplication","Interpret and create scale drawings","Calculate real distances from scale diagrams"],
   prerequisites:["mi-09-2"],
   topics:["Setting up proportions","Cross-multiplication","Scale factors","Map and model problems"]},

  {id:"mi-09-5",subject:"Mathematics",subjectId:"math",topicId:"mt-09",
   name:"Bar Diagram Ratio Problems",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use bar diagrams (tape diagrams) to model and solve ratio word problems visually.",
   learningOutcomes:["Draw a bar diagram to represent a given ratio","Use bar diagrams to find unknown quantities in ratio problems","Solve multi-step ratio word problems using bar models"],
   prerequisites:["mi-09-1","mi-09-2"],
   topics:["Drawing bar models for ratios","Finding totals from bar diagrams","Finding differences from bar diagrams","Multi-step bar diagram problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 10 — PERCENTAGES (mt-10)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-10-1",subject:"Mathematics",subjectId:"math",topicId:"mt-10",
   name:"Convert Between %, Fractions & Decimals",emoji:"💯",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Fluently convert between percentages, fractions and decimals and place them in order.",
   learningOutcomes:["Convert a percentage to a fraction and decimal","Convert a fraction or decimal to a percentage","Order a mixed set of FDP values"],
   prerequisites:[],
   topics:["% → decimal (÷100)","% → fraction","Decimal → %","Ordering FDP"]},

  {id:"mi-10-2",subject:"Mathematics",subjectId:"math",topicId:"mt-10",
   name:"Percentages of Amounts",emoji:"🔢",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Find any percentage of an amount using the decimal multiplier method and mental strategies.",
   learningOutcomes:["Find 10%, 25%, 50% and 75% mentally","Find any percentage using a decimal multiplier","Solve percentage word problems"],
   prerequisites:["mi-10-1"],
   topics:["10% and 1% method","Decimal multiplier","Common percentage shortcuts","Word problems"]},

  {id:"mi-10-3",subject:"Mathematics",subjectId:"math",topicId:"mt-10",
   name:"Find What % One Number Is of Another",emoji:"🤔",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Express one quantity as a percentage of another using division and multiplication by 100.",
   learningOutcomes:["Write one number as a fraction of another then convert to %","Use the formula: (part ÷ whole) × 100","Interpret percentage results in context"],
   prerequisites:["mi-10-1"],
   topics:["Part as a fraction of whole","Converting to percentage","Percentage in context","Comparison problems"]},

  {id:"mi-10-4",subject:"Mathematics",subjectId:"math",topicId:"mt-10",
   name:"Percentage Problems",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate percentage increase and decrease, VAT, discounts and tips in real-world contexts.",
   learningOutcomes:["Calculate a percentage increase or decrease","Apply VAT and discount calculations","Find the original amount after a percentage change"],
   prerequisites:["mi-10-2","mi-10-3"],
   topics:["% increase and decrease","VAT (20%)","Discounts and sale prices","Reverse percentage"]},

  {id:"mi-10-5",subject:"Mathematics",subjectId:"math",topicId:"mt-10",
   name:"Percent Models & Estimation",emoji:"📐",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use grid models and bar models to visualise and solve percent problems, and estimate percents of numbers mentally.",
   learningOutcomes:["Shade a 10×10 grid to represent a percentage","Use a bar model to find a percent of an amount","Estimate percentages of numbers using benchmarks"],
   prerequisites:["mi-10-1","mi-10-2"],
   topics:["Grid models for percentages","Bar models for percentages","Estimating percents using benchmarks","Visual percent problem solving"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 11 — ALGEBRA: EXPRESSIONS (mt-11)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-11-1",subject:"Mathematics",subjectId:"math",topicId:"mt-11",
   name:"Write & Evaluate Expressions",emoji:"📝",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Write algebraic expressions from descriptions and evaluate them by substituting values.",
   learningOutcomes:["Write an expression using a variable","Evaluate an expression by substituting values","Identify terms, coefficients and constants"],
   prerequisites:[],
   topics:["Writing expressions","Substitution","Terms and coefficients","Multi-variable expressions"]},

  {id:"mi-11-2",subject:"Mathematics",subjectId:"math",topicId:"mt-11",
   name:"Like Terms & Simplifying",emoji:"🔀",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify like terms and simplify algebraic expressions by collecting them.",
   learningOutcomes:["Identify like and unlike terms","Add and subtract like terms","Simplify expressions with multiple variables"],
   prerequisites:["mi-11-1"],
   topics:["Like terms","Collecting terms","Simplifying expressions","Multiple variable expressions"]},

  {id:"mi-11-3",subject:"Mathematics",subjectId:"math",topicId:"mt-11",
   name:"Distributive Property",emoji:"📐",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Expand brackets using the distributive property and simplify the resulting expressions.",
   learningOutcomes:["Expand a single bracket","Expand and simplify expressions with two bracket terms","Apply the distributive property to factorise"],
   prerequisites:["mi-11-2"],
   topics:["Expanding single brackets","a(b + c) = ab + ac","Expanding and simplifying","Area model for multiplication"]},

  {id:"mi-11-4",subject:"Mathematics",subjectId:"math",topicId:"mt-11",
   name:"Factorise Linear Expressions",emoji:"🔑",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Factorise linear expressions by taking out the highest common factor.",
   learningOutcomes:["Find the HCF of terms in an expression","Write a factorised expression","Verify factorisation by expanding"],
   prerequisites:["mi-11-3","mi-04-3"],
   topics:["HCF of algebraic terms","Factorising single bracket","Checking by expanding","Factorising with negative signs"]},

  {id:"mi-11-5",subject:"Mathematics",subjectId:"math",topicId:"mt-11",
   name:"Properties of Operations",emoji:"🔗",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify and apply the commutative, associative, identity, and distributive properties to write equivalent expressions.",
   learningOutcomes:["Name and apply commutative, associative and identity properties","Use properties to rewrite and simplify expressions","Solve for a variable using properties of multiplication"],
   prerequisites:["mi-11-1"],
   topics:["Commutative property","Associative property","Identity and zero properties","Writing equivalent expressions"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 12 — ALGEBRA: EQUATIONS & SEQUENCES (mt-12)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-12-1",subject:"Mathematics",subjectId:"math",topicId:"mt-12",
   name:"Number Sequences",emoji:"🔄",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify, continue and generate arithmetic and geometric sequences, and find nth-term rules.",
   learningOutcomes:["Identify arithmetic and geometric sequences","Find the nth term of an arithmetic sequence","Generate terms from a given nth-term rule"],
   prerequisites:[],
   topics:["Arithmetic sequences (common difference)","Geometric sequences (common ratio)","Finding the nth term","Term-to-term and position-to-term rules"]},

  {id:"mi-12-2",subject:"Mathematics",subjectId:"math",topicId:"mt-12",
   name:"Solve One-Step Equations",emoji:"⚖️",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Solve one-step equations involving all four operations, including with negative numbers.",
   learningOutcomes:["Solve one-step equations by inverse operations","Check solutions by substitution","Write and solve equations from word problems"],
   prerequisites:["mi-11-1"],
   topics:["Addition and subtraction equations","Multiplication and division equations","Equations with negatives","Equation word problems"]},

  {id:"mi-12-3",subject:"Mathematics",subjectId:"math",topicId:"mt-12",
   name:"Solve Two-Step Equations",emoji:"⚡",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve two-step equations using inverse operations in the correct order.",
   learningOutcomes:["Identify the correct order of inverse operations","Solve two-step equations","Set up and solve two-step equations from word problems"],
   prerequisites:["mi-12-2"],
   topics:["Two inverse steps","Equations with brackets","Building and solving equations","Word problem equations"]},

  {id:"mi-12-4",subject:"Mathematics",subjectId:"math",topicId:"mt-12",
   name:"Inequalities",emoji:"↔️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Write, graph and solve one-step inequalities, representing solutions on a number line.",
   learningOutcomes:["Write an inequality from a description or number line","Graph an inequality on a number line","Solve a one-step inequality"],
   prerequisites:["mi-12-2"],
   topics:["Inequality symbols (<, >, ≤, ≥)","Graphing inequalities","Solving one-step inequalities","Inequality word problems"]},

  {id:"mi-12-5",subject:"Mathematics",subjectId:"math",topicId:"mt-12",
   name:"Expressions vs Equations & Tiles",emoji:"🧱",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Distinguish between expressions and equations, model and solve equations using algebra tiles, and match word problems to equations.",
   learningOutcomes:["Tell the difference between an expression and an equation","Use algebra tiles to model and solve a simple equation","Match a word problem to the correct equation"],
   prerequisites:["mi-11-1"],
   topics:["Expression vs equation","Modelling with algebra tiles","Solving with tiles","Word problem to equation matching"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 13 — STATISTICS & PROBABILITY (mt-13)
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-13-1",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Mean, Median, Mode & Range",emoji:"📊",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Calculate and interpret the four measures of central tendency and spread for a data set.",
   learningOutcomes:["Calculate mean, median, mode and range","Identify which average is most appropriate","Find a missing value given the mean"],
   prerequisites:[],
   topics:["Mean (sum ÷ count)","Median (middle value)","Mode (most frequent)","Range (max − min)"]},

  {id:"mi-13-2",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Bar Charts & Pie Charts",emoji:"📈",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Read, interpret and draw bar charts and pie charts for categorical data.",
   learningOutcomes:["Read values from a bar chart or pie chart","Draw a bar chart from a frequency table","Calculate angles for a pie chart"],
   prerequisites:[],
   topics:["Reading bar charts","Drawing bar charts","Pie chart angles (÷ total × 360)","Interpreting pie charts"]},

  {id:"mi-13-3",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Stem-and-Leaf Plots & Line Graphs",emoji:"📉",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Create and interpret stem-and-leaf diagrams and line graphs.",
   learningOutcomes:["Read a stem-and-leaf diagram and find averages from it","Draw and interpret line graphs","Describe trends in line graphs"],
   prerequisites:["mi-13-1"],
   topics:["Stem-and-leaf structure","Reading and drawing line graphs","Trends and predictions","Back-to-back stem-and-leaf"]},

  {id:"mi-13-4",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Probability of Events",emoji:"🎲",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find and compare probabilities of simple and combined events using fractions, decimals and percentages.",
   learningOutcomes:["Express probability as a fraction between 0 and 1","Find the probability of a complementary event","Use experimental data to estimate probability"],
   prerequisites:[],
   topics:["Probability scale (0 to 1)","Equally likely outcomes","Complementary events (P + P' = 1)","Experimental probability"]},

  {id:"mi-13-5",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Data Displays & Graph Types",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Read and create pictograms, line plots, frequency tables, double bar graphs and double line graphs; choose the best graph for the data.",
   learningOutcomes:["Read and draw pictograms with a key","Create and interpret frequency tables","Compare data sets using double bar and double line graphs","Choose the most appropriate graph type for a data set"],
   prerequisites:["mi-13-1","mi-13-2"],
   topics:["Pictograms and keys","Line plots","Frequency tables","Double bar graphs","Double line graphs","Choosing graph types"]},

  {id:"mi-13-6",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Sampling, Bias & Distributions",emoji:"🔍",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify statistical questions, understand populations vs samples, recognise biased samples, find outliers, and describe data distributions.",
   learningOutcomes:["Distinguish statistical from non-statistical questions","Explain the difference between a population and a sample","Identify sources of bias in sampling","Recognise outliers and describe the shape of a distribution"],
   prerequisites:["mi-13-1","mi-13-4"],
   topics:["Statistical vs non-statistical questions","Populations and samples","Biased and unbiased samples","Outliers","Data distributions"]},

  {id:"mi-13-7",subject:"Mathematics",subjectId:"math",topicId:"mt-13",
   name:"Combined & Predicted Probability",emoji:"🎯",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Identify mutually exclusive and overlapping events, make predictions using theoretical and experimental probability.",
   learningOutcomes:["Distinguish mutually exclusive from overlapping events","Calculate P(A or B) for mutually exclusive events","Use theoretical probability to make predictions","Use experimental probability to estimate outcomes"],
   prerequisites:["mi-13-4"],
   topics:["Mutually exclusive events","Overlapping events","Predictions from theoretical probability","Predictions from experimental probability"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 14 — ORDER OF OPERATIONS (mt-14) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-14-1",subject:"Mathematics",subjectId:"math",topicId:"mt-14",
   name:"Order of Operations: Whole Numbers",emoji:"📋",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Apply BODMAS to expressions involving whole numbers.",
   learningOutcomes:["Recall BODMAS order","Evaluate multi-step expressions","Identify mistakes in order of operations"],
   prerequisites:[],topics:["Brackets","Orders (powers/roots)","Multiplication/Division","Addition/Subtraction"]},

  {id:"mi-14-2",subject:"Mathematics",subjectId:"math",topicId:"mt-14",
   name:"Order of Operations: Decimals & Fractions",emoji:"🔢",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Apply BODMAS to expressions containing decimals and fractions.",
   learningOutcomes:["Evaluate decimal expressions using BODMAS","Evaluate fraction expressions using BODMAS","Identify the correct order in mixed expressions"],
   prerequisites:["mi-14-1"],topics:["BODMAS with decimals","BODMAS with fractions","Mixed expressions","Error spotting"]},

  {id:"mi-14-3",subject:"Mathematics",subjectId:"math",topicId:"mt-14",
   name:"Order of Operations: Integers",emoji:"➕",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Apply BODMAS to expressions involving negative integers.",
   learningOutcomes:["Evaluate integer expressions using BODMAS","Combine negative number rules with order of operations","Solve equation-style OoO problems"],
   prerequisites:["mi-08-4","mi-14-1"],topics:["Integers in expressions","Combining sign rules","BODMAS with negatives","Problem solving"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 15 — RATIONAL NUMBERS (mt-15) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-15-1",subject:"Mathematics",subjectId:"math",topicId:"mt-15",
   name:"Rational Numbers on Number Lines",emoji:"🔢",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Plot and read rational numbers on a number line.",
   learningOutcomes:["Place fractions and decimals on a number line","Compare rational numbers using a number line","Identify rational numbers between two integers"],
   prerequisites:[],topics:["Positive and negative fractions","Decimals on number lines","Comparing rational numbers","Between any two rationals"]},

  {id:"mi-15-2",subject:"Mathematics",subjectId:"math",topicId:"mt-15",
   name:"Compare & Order Rational Numbers",emoji:"↔️",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Compare and order rational numbers by converting to a common form.",
   learningOutcomes:["Convert rational numbers to compare them","Order a mixed set of rational numbers","Apply inequality symbols correctly"],
   prerequisites:["mi-15-1"],topics:["Converting to common form","Ordering rational numbers","Inequalities with rationals","Negative fractions"]},

  {id:"mi-15-3",subject:"Mathematics",subjectId:"math",topicId:"mt-15",
   name:"Rational Number Problems",emoji:"🧩",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Apply rational number understanding to word problems and expressions.",
   learningOutcomes:["Solve word problems with rational numbers","Find the sign of rational number expressions","Apply rational numbers in real-life contexts"],
   prerequisites:["mi-15-2"],topics:["Sign of expressions","Real-world rational numbers","Ordering in context","Multi-step problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 16 — PROBLEM SOLVING (mt-16) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-16-1",subject:"Mathematics",subjectId:"math",topicId:"mt-16",
   name:"Multi-Step Word Problems",emoji:"🧩",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve complex word problems requiring multiple operations and steps.",
   learningOutcomes:["Break a problem into steps","Choose appropriate operations","Check answers are reasonable"],
   prerequisites:[],topics:["Problem-solving strategies","Multi-step calculations","Reasonableness checks","Mixed operation problems"]},

  {id:"mi-16-2",subject:"Mathematics",subjectId:"math",topicId:"mt-16",
   name:"Estimation Strategies",emoji:"🎯",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Use estimation to solve problems and check answers quickly.",
   learningOutcomes:["Round to estimate answers","Use front-end estimation","Identify unreasonable answers"],
   prerequisites:[],topics:["Rounding to estimate","Front-end estimation","Compatible numbers","Reasonableness"]},

  {id:"mi-16-3",subject:"Mathematics",subjectId:"math",topicId:"mt-16",
   name:"Logical Reasoning Problems",emoji:"💡",difficulty:3,estimatedHours:2,color:"#3f6f00",
   description:"Use deductive reasoning and logical thinking to solve mathematical puzzles.",
   learningOutcomes:["Use process of elimination","Work backwards from a solution","Apply logical reasoning to number problems"],
   prerequisites:[],topics:["Guess and check","Working backwards","Logical elimination","Ordering problems"]},

  {id:"mi-16-4",subject:"Mathematics",subjectId:"math",topicId:"mt-16",
   name:"Extra/Missing Info & Direction",emoji:"🔍",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify extra or missing information in word problems and determine distance/direction back to a starting point.",
   learningOutcomes:["Identify extra (unnecessary) information in a word problem","Determine when a problem has missing information","Calculate distance and direction to return to a starting point"],
   prerequisites:["mi-16-1"],
   topics:["Spotting extra information","Identifying missing information","Direction to starting point","Distance and displacement problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 17 — MEASUREMENT (mt-17) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-17-1",subject:"Mathematics",subjectId:"math",topicId:"mt-17",
   name:"Metric Units",emoji:"📏",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Convert between metric units of length, mass and capacity.",
   learningOutcomes:["Convert between km, m, cm, mm","Convert between kg, g, mg","Convert between litres and millilitres"],
   prerequisites:[],topics:["Length conversions","Mass conversions","Capacity conversions","Multi-step metric problems"]},

  {id:"mi-17-2",subject:"Mathematics",subjectId:"math",topicId:"mt-17",
   name:"Imperial Units",emoji:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Recall common imperial units and convert between them.",
   learningOutcomes:["Name common imperial units","Convert between imperial units of length","Estimate using imperial units"],
   prerequisites:[],topics:["Miles, yards, feet, inches","Pounds and ounces","Pints and gallons","Imperial conversions"]},

  {id:"mi-17-3",subject:"Mathematics",subjectId:"math",topicId:"mt-17",
   name:"Convert Metric & Imperial",emoji:"🔄",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Convert between metric and imperial units using given conversion facts.",
   learningOutcomes:["Use given conversion facts to switch between systems","Apply conversions to real-world problems","Compare metric and imperial measurements"],
   prerequisites:["mi-17-1","mi-17-2"],topics:["km ↔ miles","kg ↔ pounds","Litres ↔ pints","Conversion word problems"]},

  {id:"mi-17-4",subject:"Mathematics",subjectId:"math",topicId:"mt-17",
   name:"Area/Volume Units & Temperature",emoji:"🌡️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Convert square and cubic units, link cubic centimetres to millilitres and cubic metres to litres, compare temperatures, and understand precision in measurement.",
   learningOutcomes:["Convert between cm² and m², and between cm³ and m³","Know that 1 cm³ = 1 ml and 1000 cm³ = 1 litre","Compare temperatures above and below zero","Understand precision and appropriate units"],
   prerequisites:["mi-17-1"],
   topics:["Square unit conversions","Cubic unit conversions","cm³ ↔ ml and m³ ↔ litres","Temperature comparison","Precision"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 18 — MONEY & CONSUMER MATHS (mt-18) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-18-1",subject:"Mathematics",subjectId:"math",topicId:"mt-18",
   name:"Add & Subtract Money",emoji:"💷",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Add and subtract amounts of money and solve money word problems.",
   learningOutcomes:["Add money amounts","Subtract money amounts","Find change from a purchase"],
   prerequisites:[],topics:["Adding money","Subtracting money","Making change","Money word problems"]},

  {id:"mi-18-2",subject:"Mathematics",subjectId:"math",topicId:"mt-18",
   name:"Sale Prices & Unit Prices",emoji:"🏷️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate sale prices using discounts and compare unit prices to find the best value.",
   learningOutcomes:["Calculate a discounted price","Find and compare unit prices","Determine the best-value option"],
   prerequisites:["mi-10-2"],topics:["Discounts","Sale prices","Unit prices","Best-value comparisons"]},

  {id:"mi-18-3",subject:"Mathematics",subjectId:"math",topicId:"mt-18",
   name:"VAT & Tips",emoji:"🧾",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Calculate VAT (20%), tips and mark-ups in consumer contexts.",
   learningOutcomes:["Add VAT to a price","Calculate a tip percentage","Find total cost including extra charges"],
   prerequisites:["mi-10-2"],topics:["VAT at 20%","Tip calculations","Mark-ups","Total cost problems"]},

  {id:"mi-18-4",subject:"Mathematics",subjectId:"math",topicId:"mt-18",
   name:"Multiply & Divide Money & Coins",emoji:"🪙",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Multiply and divide money amounts, and find the number of each type of coin to make a given total.",
   learningOutcomes:["Multiply a money amount by a whole number","Divide a money amount equally","Find combinations of coins that make a given total"],
   prerequisites:["mi-18-1"],
   topics:["Multiplying money","Dividing money equally","Coin combinations","Money word problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 19 — TIME (mt-19) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-19-1",subject:"Mathematics",subjectId:"math",topicId:"mt-19",
   name:"Elapsed Time",emoji:"🕐",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Calculate elapsed time using start and end times, and find start or end times given duration.",
   learningOutcomes:["Calculate elapsed time","Find a start or end time","Convert time units"],
   prerequisites:[],topics:["Elapsed time","Start/end times","Hours and minutes","Time conversion"]},

  {id:"mi-19-2",subject:"Mathematics",subjectId:"math",topicId:"mt-19",
   name:"12-Hour & 24-Hour Time",emoji:"🕛",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Convert between 12-hour (am/pm) and 24-hour (military) time formats.",
   learningOutcomes:["Convert 12-hour to 24-hour time","Convert 24-hour to 12-hour time","Read timetables in 24-hour format"],
   prerequisites:[],topics:["am and pm","24-hour clock","Converting formats","Timetables"]},

  {id:"mi-19-3",subject:"Mathematics",subjectId:"math",topicId:"mt-19",
   name:"Time Zones & Schedules",emoji:"🌍",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Work with time zones and read transport timetables to plan journeys.",
   learningOutcomes:["Calculate times across time zones","Read transport timetables","Plan journeys using schedules"],
   prerequisites:["mi-19-2"],topics:["Time zones","Timetables","Journey planning","International time"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 20 — COORDINATE PLANE (mt-20) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-20-1",subject:"Mathematics",subjectId:"math",topicId:"mt-20",
   name:"Plot Points on a Coordinate Plane",emoji:"📍",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Plot and read coordinates in all four quadrants of the coordinate plane.",
   learningOutcomes:["Plot points in all four quadrants","Read the coordinates of a plotted point","Identify the x-axis and y-axis"],
   prerequisites:[],topics:["Coordinate pairs (x, y)","Plotting in quadrant 1","All four quadrants","Reading coordinates"]},

  {id:"mi-20-2",subject:"Mathematics",subjectId:"math",topicId:"mt-20",
   name:"Quadrants & Axes",emoji:"🗺️",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Identify the four quadrants and understand coordinate sign conventions.",
   learningOutcomes:["Name the four quadrants","Predict the sign of coordinates in each quadrant","Identify points on the axes"],
   prerequisites:["mi-20-1"],topics:["Quadrant I–IV","Sign conventions","Points on axes","Coordinate signs"]},

  {id:"mi-20-3",subject:"Mathematics",subjectId:"math",topicId:"mt-20",
   name:"Coordinate Maps & Directions",emoji:"🧭",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Use coordinate grids as maps and follow directional instructions to move between points.",
   learningOutcomes:["Use a coordinate grid as a map","Follow directions on a coordinate plane","Find distances between coordinate points"],
   prerequisites:["mi-20-2"],topics:["Coordinate maps","Directions and movement","Distance between points","Map-reading problems"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 21 — NUMBER SEQUENCES (mt-21) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-21-1",subject:"Mathematics",subjectId:"math",topicId:"mt-21",
   name:"Arithmetic Sequences",emoji:"➕",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify, continue and generate arithmetic sequences with positive and negative common differences.",
   learningOutcomes:["Identify the common difference","Continue an arithmetic sequence","Write the nth-term formula"],
   prerequisites:[],topics:["Common difference","Continuing sequences","Negative common differences","nth term of arithmetic sequences"]},

  {id:"mi-21-2",subject:"Mathematics",subjectId:"math",topicId:"mt-21",
   name:"Geometric Sequences",emoji:"✖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify and continue geometric sequences with integer and fractional common ratios.",
   learningOutcomes:["Identify the common ratio","Continue a geometric sequence","Distinguish arithmetic from geometric sequences"],
   prerequisites:["mi-21-1"],topics:["Common ratio","Multiplication sequences","Fractional ratios","Mixed sequence review"]},

  {id:"mi-21-3",subject:"Mathematics",subjectId:"math",topicId:"mt-21",
   name:"Expressions for Sequences",emoji:"📝",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Write and evaluate variable expressions to generate terms of arithmetic sequences.",
   learningOutcomes:["Evaluate a given nth-term expression","Write an nth-term expression for a sequence","Use expressions to find specific terms"],
   prerequisites:["mi-21-1","mi-11-1"],topics:["Position-to-term rules","Evaluating expressions","Writing nth-term rules","Finding specific terms"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 22 — ALGEBRA: INEQUALITIES (mt-22) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-22-1",subject:"Mathematics",subjectId:"math",topicId:"mt-22",
   name:"Graph Inequalities",emoji:"↔️",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Write inequalities from number lines and graph inequality solutions.",
   learningOutcomes:["Read inequalities from number lines","Graph inequalities using open/closed circles","Write inequalities from descriptions"],
   prerequisites:[],topics:["Inequality symbols","Number line graphs","Open vs closed circles","Writing inequalities"]},

  {id:"mi-22-2",subject:"Mathematics",subjectId:"math",topicId:"mt-22",
   name:"Solve One-Step Inequalities",emoji:"⚖️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Solve and graph one-step inequalities, including reversing the sign when multiplying/dividing by a negative.",
   learningOutcomes:["Solve inequalities using inverse operations","Reverse the inequality sign when appropriate","Graph the solution set"],
   prerequisites:["mi-22-1","mi-12-2"],topics:["Addition/subtraction inequalities","Multiplication/division inequalities","Sign reversal","Solution sets"]},

  {id:"mi-22-3",subject:"Mathematics",subjectId:"math",topicId:"mt-22",
   name:"Inequality Word Problems",emoji:"🧩",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Write and solve inequalities to model real-world situations.",
   learningOutcomes:["Translate word problems into inequalities","Solve and interpret inequality solutions","Verify solutions in context"],
   prerequisites:["mi-22-2"],topics:["Writing inequalities from words","Solving word problem inequalities","Interpreting solutions","Real-life inequality contexts"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 23 — TWO-VARIABLE EQUATIONS (mt-23) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-23-1",subject:"Mathematics",subjectId:"math",topicId:"mt-23",
   name:"Two-Variable Equations",emoji:"📈",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Understand two-variable equations and check whether a given pair (x, y) is a solution.",
   learningOutcomes:["Determine if (x, y) satisfies an equation","Find values using two-variable equations","Identify independent and dependent variables"],
   prerequisites:["mi-12-2"],topics:["Substituting (x, y) pairs","Finding missing values","Independent/dependent variables","Two-variable word problems"]},

  {id:"mi-23-2",subject:"Mathematics",subjectId:"math",topicId:"mt-23",
   name:"Tables & Graphs of Linear Equations",emoji:"📊",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Complete tables of values and plot straight-line graphs for two-variable equations.",
   learningOutcomes:["Complete a table of values","Plot points to draw a straight-line graph","Identify the graph of a given equation"],
   prerequisites:["mi-23-1","mi-20-1"],topics:["Table of values","Plotting straight-line graphs","Gradient and y-intercept","Identifying equations from graphs"]},

  {id:"mi-23-3",subject:"Mathematics",subjectId:"math",topicId:"mt-23",
   name:"Interpret Graphs",emoji:"🔍",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Interpret straight-line and curved graphs in real-world contexts.",
   learningOutcomes:["Read values from a graph","Describe what a graph shows in context","Identify trends and key points"],
   prerequisites:["mi-23-2"],topics:["Reading graphs","Graph interpretation","Real-world contexts","Key features of graphs"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 24 — 2D SHAPES & ANGLES (mt-24) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-24-1",subject:"Mathematics",subjectId:"math",topicId:"mt-24",
   name:"Classify Polygons & Angles",emoji:"📐",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Name and classify polygons and angle types, and measure angles with a protractor.",
   learningOutcomes:["Classify triangles and quadrilaterals","Identify acute, obtuse, right and reflex angles","Measure angles accurately"],
   prerequisites:[],topics:["Types of triangles","Types of quadrilaterals","Angle types","Using a protractor"]},

  {id:"mi-24-2",subject:"Mathematics",subjectId:"math",topicId:"mt-24",
   name:"Angles in Triangles & Quadrilaterals",emoji:"🔺",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find missing angles in triangles and quadrilaterals using angle-sum rules.",
   learningOutcomes:["Apply angles in a triangle = 180°","Apply angles in a quadrilateral = 360°","Find missing angles in polygons"],
   prerequisites:["mi-24-1"],topics:["Triangle angle sum (180°)","Quadrilateral angle sum (360°)","Missing angles","Polygon angle sums"]},

  {id:"mi-24-3",subject:"Mathematics",subjectId:"math",topicId:"mt-24",
   name:"Parallel Lines & Transversals",emoji:"➡️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify and apply angle relationships formed when a transversal crosses parallel lines.",
   learningOutcomes:["Identify corresponding, alternate and co-interior angles","Apply angle relationships to find missing angles","Justify answers using geometric reasoning"],
   prerequisites:["mi-24-2"],topics:["Corresponding angles","Alternate angles","Co-interior angles","Geometric reasoning"]},

  {id:"mi-24-4",subject:"Mathematics",subjectId:"math",topicId:"mt-24",
   name:"Angles, Lines & Circles",emoji:"⭕",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify vertical and supplementary angles, understand lines, segments and rays, name angles, bisect segments and angles, and know the parts of a circle.",
   learningOutcomes:["Find vertical and supplementary angle measures","Distinguish between lines, segments and rays","Name parts of a circle (radius, diameter, chord, arc, sector, tangent)"],
   prerequisites:["mi-24-1"],
   topics:["Vertical angles","Supplementary angles","Lines, segments and rays","Naming angles","Bisectors","Parts of a circle"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 25 — SYMMETRY & TRANSFORMATIONS (mt-25) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-25-1",subject:"Mathematics",subjectId:"math",topicId:"mt-25",
   name:"Line & Rotational Symmetry",emoji:"🔀",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Identify lines of symmetry and the order of rotational symmetry for 2D shapes.",
   learningOutcomes:["Draw lines of symmetry","State the order of rotational symmetry","Identify symmetric shapes"],
   prerequisites:[],topics:["Lines of symmetry","Rotational symmetry","Order of symmetry","Completing symmetric patterns"]},

  {id:"mi-25-2",subject:"Mathematics",subjectId:"math",topicId:"mt-25",
   name:"Reflections & Translations",emoji:"↔️",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Reflect shapes in horizontal and vertical mirror lines, and translate shapes on a grid.",
   learningOutcomes:["Reflect a shape in a given mirror line","Translate a shape by a given vector","Describe a reflection or translation"],
   prerequisites:["mi-20-1"],topics:["Reflecting shapes","Mirror lines","Translating shapes","Describing transformations"]},

  {id:"mi-25-3",subject:"Mathematics",subjectId:"math",topicId:"mt-25",
   name:"Congruent Figures",emoji:"🔲",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Identify congruent figures and use congruence statements to match corresponding parts.",
   learningOutcomes:["Identify congruent shapes","Write congruence statements","Find missing side lengths and angles using congruence"],
   prerequisites:["mi-25-1"],topics:["Congruence","Corresponding parts","Congruence statements","Missing measurements"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 26 — 3D FIGURES (mt-26) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-26-1",subject:"Mathematics",subjectId:"math",topicId:"mt-26",
   name:"3D Shape Properties",emoji:"📦",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Name and describe 3D shapes by counting their faces, edges and vertices.",
   learningOutcomes:["Name common 3D shapes","Count faces, edges and vertices","Apply Euler's formula (F + V = E + 2)"],
   prerequisites:[],topics:["Prisms and pyramids","Faces, edges and vertices","Euler's formula","Describing 3D shapes"]},

  {id:"mi-26-2",subject:"Mathematics",subjectId:"math",topicId:"mt-26",
   name:"Nets of 3D Figures",emoji:"📄",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Identify nets of common 3D shapes and determine which nets will fold to form a given solid.",
   learningOutcomes:["Recognise the net of a cube, cuboid, pyramid and prism","Determine whether a net is valid","Sketch the net of a given 3D shape"],
   prerequisites:["mi-26-1"],topics:["Nets of cubes","Nets of cuboids","Nets of pyramids","Valid vs invalid nets"]},

  {id:"mi-26-3",subject:"Mathematics",subjectId:"math",topicId:"mt-26",
   name:"Front, Side & Top Views",emoji:"👁️",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Draw and interpret 2D plan views (front, side, top) of 3D shapes.",
   learningOutcomes:["Draw front, side and top views","Identify the 3D shape from its views","Match a 3D shape to its views"],
   prerequisites:["mi-26-1"],topics:["Plan views","Elevation views","Matching shapes to views","Drawing 2D views"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 27 — AREA, PERIMETER & VOLUME (mt-27) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-27-1",subject:"Mathematics",subjectId:"math",topicId:"mt-27",
   name:"Perimeter & Area of Polygons",emoji:"📐",difficulty:1,estimatedHours:2,color:"#3f6f00",
   description:"Calculate the perimeter and area of squares, rectangles, triangles and parallelograms.",
   learningOutcomes:["Calculate area using appropriate formula","Find the perimeter of any polygon","Solve problems involving area and perimeter"],
   prerequisites:[],topics:["Rectangle area and perimeter","Triangle area","Parallelogram area","Word problems"]},

  {id:"mi-27-2",subject:"Mathematics",subjectId:"math",topicId:"mt-27",
   name:"Area of Trapeziums & Compound Figures",emoji:"🔷",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Find the area of trapeziums, rhombuses and compound figures by splitting into simpler shapes.",
   learningOutcomes:["Apply the trapezium area formula","Find areas of compound figures","Calculate area between two shapes"],
   prerequisites:["mi-27-1"],topics:["Trapezium area ½(a+b)h","Rhombus area","Compound figures","Area between shapes"]},

  {id:"mi-27-3",subject:"Mathematics",subjectId:"math",topicId:"mt-27",
   name:"Volume of Cubes & Cuboids",emoji:"📦",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Calculate the volume of cubes and cuboids and solve real-world volume problems.",
   learningOutcomes:["Use V = l × w × h to find volume","Convert between cm³ and litres","Solve volume word problems"],
   prerequisites:["mi-27-1"],topics:["Volume formula","Cubic units","Cm³ and litres","Volume word problems"]},

  {id:"mi-27-4",subject:"Mathematics",subjectId:"math",topicId:"mt-27",
   name:"Compare Area & Perimeter",emoji:"🔲",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Explore the relationship between area and perimeter of rectangles, and compare the area and perimeter of two figures.",
   learningOutcomes:["Understand that same perimeter can give different areas","Understand that same area can give different perimeters","Compare area and perimeter of two given figures"],
   prerequisites:["mi-27-1"],
   topics:["Same perimeter different areas","Same area different perimeters","Comparing two rectangles","Maximising area for given perimeter"]},

  // ══════════════════════════════════════════════════════════════════════
  // TOPIC 28 — FINANCIAL LITERACY (mt-28) — coming soon
  // ══════════════════════════════════════════════════════════════════════
  {id:"mi-28-1",subject:"Mathematics",subjectId:"math",topicId:"mt-28",
   name:"Balance a Budget",emoji:"💳",difficulty:2,estimatedHours:2,color:"#3f6f00",
   description:"Create and balance a simple budget, tracking income and expenditure.",
   learningOutcomes:["Identify income and expenditure","Calculate surplus and deficit","Adjust a budget to balance it"],
   prerequisites:[],topics:["Income and expenditure","Surplus and deficit","Balancing budgets","Budget adjustments"]},

  {id:"mi-28-2",subject:"Mathematics",subjectId:"math",topicId:"mt-28",
   name:"Debit & Credit Cards",emoji:"💳",difficulty:1,estimatedHours:1,color:"#3f6f00",
   description:"Understand how debit and credit cards work, including interest and debt.",
   learningOutcomes:["Explain the difference between debit and credit","Calculate simple interest on credit","Make informed card payment choices"],
   prerequisites:[],topics:["Debit vs credit","Credit card interest","Responsible borrowing","Real-life finance decisions"]},

  {id:"mi-28-3",subject:"Mathematics",subjectId:"math",topicId:"mt-28",
   name:"Adjust a Budget",emoji:"📊",difficulty:2,estimatedHours:1,color:"#3f6f00",
   description:"Analyse and modify a budget to meet financial goals.",
   learningOutcomes:["Identify areas to reduce spending","Prioritise essential vs non-essential spending","Set and work towards a savings goal"],
   prerequisites:["mi-28-1"],topics:["Essential vs non-essential","Reducing expenditure","Savings goals","Adjusted budget calculations"]}

); // end CURRICULUM.push
