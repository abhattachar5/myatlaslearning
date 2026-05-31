// content/y9/math/topics.js — Year 9 Maths: topic tiles + island definitions.
// Authored by the atlas-content skill. Pilot scope: Topic 1 (Surds).

// ── MATH TOPICS YEAR 9 ──────────────────────────────────────────────────────
const MATH_TOPICS_Y9 = [
  {id:"m9t-01", name:"Surds", emoji:"√", hasContent:true,
   description:"Simplify surds, add, subtract, multiply and divide them, and rationalise the denominator of a fraction."},
  {id:"m9t-02", name:"Number Structure", emoji:"🔢", hasContent:true,
   description:"Find factors and primes, use prime factorisation to find the HCF and LCM, and classify numbers as rational or irrational."}
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
