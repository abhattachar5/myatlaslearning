// math-content-1.js — Questions & flashcards for Topics 1–4
// Topic 1: Whole Numbers | Topic 2: Multiplication & Division
// Topic 3: Powers & Roots | Topic 4: Number Theory

// ── FLASHCARDS ────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // ── Topic 1: Whole Numbers ──────────────────────────────────────────
  {id:"mfc-01-1-1",islandId:"mi-01-1",front:"What is the value of the digit 7 in 3,745,200?",
   back:"700,000\n\nThe 7 is in the hundred-thousands column.\n7 × 100,000 = 700,000",difficulty:1,category:"calculation"},
  {id:"mfc-01-1-2",islandId:"mi-01-1",front:"Write 5,000,000 + 300,000 + 40,000 + 800 + 6 as a single number.",
   back:"5,340,806\n\n5,000,000 + 300,000 = 5,300,000\n+ 40,000 = 5,340,000\n+ 800 = 5,340,800\n+ 6 = 5,340,806\n\nNotice: no thousands, no tens → digits are 0 in those positions.",difficulty:1,category:"calculation"},
  {id:"mfc-01-1-3",islandId:"mi-01-1",front:"How many times greater is the value of 4 in 40,000 than the value of 4 in 400?",
   back:"100 times greater\n\n4 in 40,000 = 40,000\n4 in 400 = 400\n40,000 ÷ 400 = 100\n\nEach place to the left is 10× greater.",difficulty:2,category:"concept"},

  {id:"mfc-01-2-1",islandId:"mi-01-2",front:"What is the rule for rounding to a given place value?",
   back:"Look at the digit ONE place to the right of where you are rounding.\n• If that digit is 5 or more → round UP\n• If that digit is 4 or less → round DOWN (keep the digit the same)\n\nAll digits to the right become 0.",difficulty:1,category:"definition"},
  {id:"mfc-01-2-2",islandId:"mi-01-2",front:"Round 467,835 to the nearest thousand.",
   back:"468,000\n\nLook at the hundreds digit: 8\n8 ≥ 5 → round the thousands digit UP: 7 → 8\nResult: 468,000",difficulty:1,category:"calculation"},
  {id:"mfc-01-2-3",islandId:"mi-01-2",front:"A number rounds to 35,000 to the nearest thousand. What are the smallest and largest possible values?",
   back:"Smallest: 34,500\nLargest: 35,499\n\nFor a number to round to 35,000:\n• The hundreds digit must cause rounding to 35,000\n• So the number is from 34,500 (rounds up) to 35,499 (rounds down)",difficulty:2,category:"application"},

  {id:"mfc-01-3-1",islandId:"mi-01-3",front:"What are the seven Roman numeral symbols and their values?",
   back:"I = 1\nV = 5\nX = 10\nL = 50\nC = 100\nD = 500\nM = 1,000\n\nSubtraction rule: a smaller symbol BEFORE a larger one means subtract.\nIV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900",difficulty:1,category:"definition"},
  {id:"mfc-01-3-2",islandId:"mi-01-3",front:"Convert MCMXCIV to a Hindu-Arabic number.",
   back:"1,994\n\nM = 1,000\nCM = 900\nXC = 90\nIV = 4\nTotal: 1,000 + 900 + 90 + 4 = 1,994",difficulty:2,category:"calculation"},
  {id:"mfc-01-3-3",islandId:"mi-01-3",front:"Write the number 2,648 in words.",
   back:"Two thousand, six hundred and forty-eight\n\nBreak it down:\n2,000 → two thousand\n600 → six hundred\n48 → forty-eight\n\nJoin: two thousand, six hundred and forty-eight",difficulty:1,category:"calculation"},

  {id:"mfc-01-4-1",islandId:"mi-01-4",front:"What is 347,295 + 158,436?",
   back:"505,731\n\nColumn addition (right to left):\n5+6=11, write 1 carry 1\n9+3+1=13, write 3 carry 1\n2+4+1=7\n7+8=15, write 5 carry 1\n4+5+1=10, write 0 carry 1\n3+1+1=5\n\nAnswer: 505,731",difficulty:1,category:"calculation"},
  {id:"mfc-01-4-2",islandId:"mi-01-4",front:"What is 803,000 − 267,485?",
   back:"535,515\n\nColumn subtraction with borrowing.\nKey: borrow from the 8 in the hundred-thousands.\n\n803,000\n− 267,485\n= 535,515\n\nCheck: 535,515 + 267,485 = 803,000 ✓",difficulty:2,category:"calculation"},
  {id:"mfc-01-4-3",islandId:"mi-01-4",front:"A stadium holds 82,450 people. 37,918 tickets have been sold. How many tickets remain?",
   back:"44,532 tickets remain\n\n82,450 − 37,918 = 44,532\n\nCheck: 44,532 + 37,918 = 82,450 ✓",difficulty:2,category:"application"},

  // ── Topic 2: Multiplication & Division ─────────────────────────────
  {id:"mfc-02-1-1",islandId:"mi-02-1",front:"What is 348 × 7?",
   back:"2,436\n\nShort multiplication:\n8×7=56, write 6 carry 5\n4×7=28, +5=33, write 3 carry 3\n3×7=21, +3=24\n\nAnswer: 2,436",difficulty:1,category:"calculation"},
  {id:"mfc-02-1-2",islandId:"mi-02-1",front:"What is 4,600 × 300?",
   back:"1,380,000\n\nSeparate the zeros:\n46 × 3 = 138\nCount zeros: 2 (from 4,600) + 2 (from 300) = 4 zeros\n\n138 followed by 4 zeros = 1,380,000",difficulty:1,category:"calculation"},
  {id:"mfc-02-1-3",islandId:"mi-02-1",front:"Multiply: 25 × 4 × 7",
   back:"700\n\nLook for friendly pairs first:\n25 × 4 = 100 (multiply this first!)\n100 × 7 = 700\n\nTip: Rearrange multiplication — the order doesn't matter!",difficulty:2,category:"application"},

  {id:"mfc-02-2-1",islandId:"mi-02-2",front:"Use long multiplication to find 347 × 26.",
   back:"9,022\n\nStep 1: 347 × 6 = 2,082\nStep 2: 347 × 20 = 6,940\nStep 3: Add: 2,082 + 6,940 = 9,022\n\nAlways multiply by the units first, then the tens.",difficulty:2,category:"calculation"},
  {id:"mfc-02-2-2",islandId:"mi-02-2",front:"Estimate 4,872 × 31 by rounding each number first.",
   back:"≈ 150,000\n\nRound: 4,872 ≈ 5,000; 31 ≈ 30\n5,000 × 30 = 150,000\n\nActual: 150,032 — very close! Use estimation to check your answer is sensible.",difficulty:1,category:"application"},
  {id:"mfc-02-2-3",islandId:"mi-02-2",front:"A factory makes 2,485 items per day. How many items are made in 4 weeks?",
   back:"69,580 items\n\n4 weeks = 28 days\n2,485 × 28:\n2,485 × 8 = 19,880\n2,485 × 20 = 49,700\nTotal = 69,580",difficulty:2,category:"application"},

  {id:"mfc-02-3-1",islandId:"mi-02-3",front:"State the divisibility rule for 3.",
   back:"A number is divisible by 3 if the sum of its digits is divisible by 3.\n\nExample: 4,281 → 4+2+8+1 = 15 → 15 ÷ 3 = 5 ✓\nSo 4,281 is divisible by 3.",difficulty:1,category:"definition"},
  {id:"mfc-02-3-2",islandId:"mi-02-3",front:"Is 7,824 divisible by 4? Explain how you know.",
   back:"Yes ✓\n\nRule: A number is divisible by 4 if its last two digits form a number divisible by 4.\nLast two digits: 24\n24 ÷ 4 = 6 ✓\n\nSo 7,824 is divisible by 4.",difficulty:1,category:"application"},
  {id:"mfc-02-3-3",islandId:"mi-02-3",front:"Which of these numbers is divisible by both 3 and 4? 312, 216, 132, 408",
   back:"All of them! But let's verify 312:\nDivisible by 3: 3+1+2 = 6, 6÷3=2 ✓\nDivisible by 4: last two digits = 12, 12÷4=3 ✓\n\nA number divisible by both 3 and 4 is also divisible by 12.",difficulty:2,category:"application"},

  {id:"mfc-02-4-1",islandId:"mi-02-4",front:"What is 936 ÷ 4?",
   back:"234\n\nShort division:\n9÷4=2 remainder 1\n13÷4=3 remainder 1\n16÷4=4\n\nAnswer: 234",difficulty:1,category:"calculation"},
  {id:"mfc-02-4-2",islandId:"mi-02-4",front:"What is 7,344 ÷ 24?",
   back:"306\n\nLong division:\n73÷24=3 (72), remainder 1\n14÷24=0, bring down: 144\n144÷24=6\n\nAnswer: 306\nCheck: 306 × 24 = 7,344 ✓",difficulty:2,category:"calculation"},
  {id:"mfc-02-4-3",islandId:"mi-02-4",front:"256 chocolates are shared equally into boxes of 15. How many full boxes are made, and how many chocolates are left over?",
   back:"17 full boxes, 1 chocolate left over\n\n256 ÷ 15 = 17 remainder 1\n(17 × 15 = 255; 256 − 255 = 1)\n\nIn context: the remainder means 1 chocolate cannot fill another box.",difficulty:2,category:"application"},

  // ── Topic 3: Powers & Roots ─────────────────────────────────────────
  {id:"mfc-03-1-1",islandId:"mi-03-1",front:"Write 5 × 5 × 5 × 5 in index notation.",
   back:"5⁴\n\nBase = 5 (the number being multiplied)\nExponent/index = 4 (how many times it's multiplied)\n\nRead as 'five to the power of four'",difficulty:1,category:"definition"},
  {id:"mfc-03-1-2",islandId:"mi-03-1",front:"What is 10³ written as a product and as a value?",
   back:"10³ = 10 × 10 × 10 = 1,000\n\nPowers of 10 are especially useful:\n10¹ = 10\n10² = 100\n10³ = 1,000\n10⁴ = 10,000\n10⁶ = 1,000,000",difficulty:1,category:"calculation"},
  {id:"mfc-03-1-3",islandId:"mi-03-1",front:"Write 2³ × 2⁴ as a single power of 2. What is its value?",
   back:"2⁷ = 128\n\nWhen multiplying powers with the same base, ADD the exponents:\n2³ × 2⁴ = 2^(3+4) = 2⁷\n2⁷ = 2×2×2×2×2×2×2 = 128",difficulty:2,category:"concept"},

  {id:"mfc-03-2-1",islandId:"mi-03-2",front:"Calculate 3⁴.",
   back:"81\n\n3⁴ = 3 × 3 × 3 × 3\n= 9 × 9\n= 81\n\nMethod: square then square again: 3² = 9, 9² = 81",difficulty:1,category:"calculation"},
  {id:"mfc-03-2-2",islandId:"mi-03-2",front:"Evaluate (0.2)².",
   back:"0.04\n\n0.2 × 0.2 = 0.04\n\nRemember: when you square a decimal less than 1, the result is SMALLER than the original.\n0.2² = 0.04 (two decimal places × 2 = four decimal places total)",difficulty:2,category:"calculation"},
  {id:"mfc-03-2-3",islandId:"mi-03-2",front:"What is the missing exponent? 2^? = 64",
   back:"2⁶ = 64\n\nBuild up: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64 ✓\n\nAlternatively: 64 = 2 × 32 = 2 × 2 × 16 = 2×2×2×8 = 2×2×2×2×4 = 2×2×2×2×2×2 = 2⁶",difficulty:2,category:"calculation"},

  {id:"mfc-03-3-1",islandId:"mi-03-3",front:"What is √144?",
   back:"12\n\n√144 = 12 because 12 × 12 = 144\n\nKey square roots to know:\n√1=1, √4=2, √9=3, √16=4, √25=5\n√36=6, √49=7, √64=8, √81=9, √100=10\n√121=11, √144=12, √169=13, √196=14, √225=15",difficulty:1,category:"calculation"},
  {id:"mfc-03-3-2",islandId:"mi-03-3",front:"Is 200 a perfect square? How do you know?",
   back:"No, 200 is NOT a perfect square.\n\n14² = 196 and 15² = 225\n196 < 200 < 225\n\nSince 200 lies between two consecutive perfect squares, it has no whole-number square root.",difficulty:2,category:"concept"},
  {id:"mfc-03-3-3",islandId:"mi-03-3",front:"What is the relationship between squaring and square-rooting?",
   back:"They are INVERSE operations — they undo each other.\n\n√(n²) = n  and  (√n)² = n\n\nExample:\n√(7²) = √49 = 7\n(√25)² = 5² = 25\n\nJust like + and −, or × and ÷.",difficulty:1,category:"concept"},

  {id:"mfc-03-4-1",islandId:"mi-03-4",front:"Evaluate √(4² + 3²).",
   back:"5\n\nStep 1: 4² = 16, 3² = 9\nStep 2: 16 + 9 = 25\nStep 3: √25 = 5\n\nThis is the Pythagorean theorem! A 3-4-5 right triangle.",difficulty:2,category:"calculation"},
  {id:"mfc-03-4-2",islandId:"mi-03-4",front:"Simplify: 2³ + √64 − 3²",
   back:"7\n\nStep 1 (Orders/BODMAS): 2³=8, √64=8, 3²=9\nStep 2: 8 + 8 − 9 = 7\n\nAlways evaluate powers and roots before addition and subtraction.",difficulty:2,category:"calculation"},
  {id:"mfc-03-4-3",islandId:"mi-03-4",front:"Find the side length of a square with area 169 cm².",
   back:"13 cm\n\nArea of a square = side²\nSo side = √area = √169 = 13 cm\n\nCheck: 13² = 169 ✓",difficulty:2,category:"application"},

  {id:"mfc-03-5-1",islandId:"mi-03-5",front:"Write 4,500,000 in standard form.",
   back:"4.5 × 10⁶\n\nMove the decimal point 6 places to the left:\n4,500,000 → 4.5\n\nA must be between 1 and 10, so 4.5 × 10⁶.",difficulty:1,category:"calculation"},
  {id:"mfc-03-5-2",islandId:"mi-03-5",front:"Convert 3.2 × 10⁻⁴ to an ordinary number.",
   back:"0.00032\n\nNegative power means move the decimal point LEFT.\nMove 4 places: 3.2 → 0.00032",difficulty:1,category:"calculation"},
  {id:"mfc-03-5-3",islandId:"mi-03-5",front:"Why is 45 × 10³ NOT in standard form?",
   back:"Because A = 45, which is NOT between 1 and 10.\n\nStandard form requires 1 ≤ A < 10.\n\nCorrect form: 4.5 × 10⁴\n(45 = 4.5 × 10, so 45 × 10³ = 4.5 × 10⁴)",difficulty:2,category:"concept"},

  // ── Topic 4: Number Theory ──────────────────────────────────────────
  {id:"mfc-04-1-1",islandId:"mi-04-1",front:"What is a prime number? Give 3 examples.",
   back:"A prime number has exactly TWO factors: 1 and itself.\n\nExamples: 2, 3, 5, 7, 11, 13, 17, 19, 23...\n\n⚠️ 1 is NOT prime (only one factor)\n2 is the ONLY even prime number",difficulty:1,category:"definition"},
  {id:"mfc-04-1-2",islandId:"mi-04-1",front:"Is 91 prime or composite? Show your reasoning.",
   back:"91 is COMPOSITE.\n\n91 = 7 × 13\n\nTo check: try dividing by primes (2, 3, 5, 7, 11...)\n91 ÷ 7 = 13 ✓ — so it has more than 2 factors.",difficulty:2,category:"application"},
  {id:"mfc-04-1-3",islandId:"mi-04-1",front:"List all factors of 36.",
   back:"1, 2, 3, 4, 6, 9, 12, 18, 36\n\nMethod: find factor PAIRS\n1 × 36\n2 × 18\n3 × 12\n4 × 9\n6 × 6\n\nStop when the two factors meet or cross.",difficulty:1,category:"calculation"},

  {id:"mfc-04-2-1",islandId:"mi-04-2",front:"Write 60 as a product of its prime factors.",
   back:"60 = 2² × 3 × 5\n\nFactor tree:\n60 → 6 × 10\n6 → 2 × 3\n10 → 2 × 5\n\nPrime factors: 2, 2, 3, 5\nIndex form: 2² × 3 × 5",difficulty:1,category:"calculation"},
  {id:"mfc-04-2-2",islandId:"mi-04-2",front:"Write 360 as a product of prime factors in index form.",
   back:"360 = 2³ × 3² × 5\n\n360 → 36 × 10\n36 → 4 × 9 → 2² × 3²\n10 → 2 × 5\n\nCombine: 2²×2 × 3² × 5 = 2³ × 3² × 5",difficulty:2,category:"calculation"},
  {id:"mfc-04-2-3",islandId:"mi-04-2",front:"Two numbers have prime factorisations 2³ × 5 and 2 × 5². What is their product?",
   back:"2,000\n\n(2³ × 5) × (2 × 5²) = 2⁴ × 5³\n= 16 × 125\n= 2,000\n\nWhen multiplying, ADD the exponents of matching primes.",difficulty:2,category:"application"},

  {id:"mfc-04-3-1",islandId:"mi-04-3",front:"Find the HCF of 24 and 36.",
   back:"HCF = 12\n\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\nCommon factors: 1, 2, 3, 4, 6, 12\nHighest = 12",difficulty:1,category:"calculation"},
  {id:"mfc-04-3-2",islandId:"mi-04-3",front:"Use prime factorisation to find HCF(84, 120).",
   back:"HCF = 12\n\n84 = 2² × 3 × 7\n120 = 2³ × 3 × 5\n\nHCF = take the LOWEST power of SHARED primes:\n2² × 3 = 4 × 3 = 12",difficulty:2,category:"calculation"},
  {id:"mfc-04-3-3",islandId:"mi-04-3",front:"A baker has 48 chocolate muffins and 36 vanilla muffins. What is the largest equal group size she can make with no muffins left over?",
   back:"12 muffins per group\n\nHCF(48, 36) = 12\n\nFactors of 48: 1,2,3,4,6,8,12,16,24,48\nFactors of 36: 1,2,3,4,6,9,12,18,36\nHighest common = 12\n\nShe makes 4 groups of 12 chocolate and 3 groups of 12 vanilla.",difficulty:2,category:"application"},

  {id:"mfc-04-4-1",islandId:"mi-04-4",front:"Find the LCM of 6 and 8.",
   back:"LCM = 24\n\nMultiples of 6: 6, 12, 18, 24, 30...\nMultiples of 8: 8, 16, 24, 32...\nFirst common multiple = 24",difficulty:1,category:"calculation"},
  {id:"mfc-04-4-2",islandId:"mi-04-4",front:"Use prime factorisation to find LCM(12, 18).",
   back:"LCM = 36\n\n12 = 2² × 3\n18 = 2 × 3²\n\nLCM = take the HIGHEST power of ALL primes:\n2² × 3² = 4 × 9 = 36",difficulty:2,category:"calculation"},
  {id:"mfc-04-4-3",islandId:"mi-04-4",front:"Bus A runs every 8 minutes. Bus B runs every 12 minutes. They both leave at 9:00am. When do they next leave together?",
   back:"9:24am\n\nLCM(8, 12) = 24 minutes\n\n8 = 2³\n12 = 2² × 3\nLCM = 2³ × 3 = 24\n\n9:00am + 24 minutes = 9:24am",difficulty:2,category:"application"},

  // ── Topic 4, Island 5: Multiplicative Inverses ──────────────────────
  {id:"mfc-04-5-1",islandId:"mi-04-5",front:"What is the multiplicative inverse (reciprocal) of 5?",
   back:"1/5\n\nThe multiplicative inverse of any whole number n is 1/n.\n\nCheck: 5 × 1/5 = 1 ✓\n\nThe product of a number and its reciprocal is always 1.",difficulty:1,category:"definition"},
  {id:"mfc-04-5-2",islandId:"mi-04-5",front:"What is the reciprocal of 3/4?",
   back:"4/3 (or 1⅓)\n\nTo find the reciprocal of a fraction, flip the numerator and denominator.\n\nCheck: 3/4 × 4/3 = 12/12 = 1 ✓",difficulty:1,category:"calculation"},
  {id:"mfc-04-5-3",islandId:"mi-04-5",front:"What is the reciprocal of 0.25? Why does 0 have no reciprocal?",
   back:"Reciprocal of 0.25 = 4\n\n0.25 = 1/4, so its reciprocal = 4/1 = 4.\nCheck: 0.25 × 4 = 1 ✓\n\n0 has no reciprocal because no number multiplied by 0 gives 1 (0 × anything = 0).",difficulty:2,category:"concept"}
);

// ── QUESTIONS ─────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 1 — WHOLE NUMBERS
// ══════════════════════════════════════════════════════════════════════════

"mi-01-1": [
  // Easy (Q1–3)
  {q:"What is the value of the digit 5 in 4,523?",opts:["500","50","5","5,000"],c:0,
   e:"The 5 is in the hundreds column. 5 × 100 = 500."},
  {q:"What is 40,000 + 6,000 + 300 + 70 + 2?",opts:["46,372","40,632","46,732","46,327"],c:0,
   e:"Add each part: 40,000 + 6,000 = 46,000, + 300 = 46,300, + 70 = 46,370, + 2 = 46,372."},
  {q:"Which digit is in the ten-thousands place in 867,324?",opts:["6","8","7","3"],c:0,
   e:"Count from the right: ones=4, tens=2, hundreds=3, thousands=7, ten-thousands=6."},
  // Medium (Q4–7)
  {q:"In 2,750,460, what is the value of the digit 7?",opts:["700,000","70,000","7,000,000","7,000"],c:0,
   e:"The 7 is in the hundred-thousands column. 7 × 100,000 = 700,000."},
  {q:"A number has 5 millions, 4 ten-thousands, 3 thousands and 9 ones. What is the number?",opts:["5,043,009","5,430,009","5,403,009","5,043,900"],c:0,
   e:"5,000,000 + 40,000 + 3,000 + 9 = 5,043,009. The hundred-thousands, hundreds and tens are all 0."},
  {q:"Put these numbers in order, smallest to largest: 34,512 | 34,215 | 34,521 | 34,251",
   opts:["34,215 → 34,251 → 34,512 → 34,521","34,521 → 34,512 → 34,251 → 34,215","34,215 → 34,512 → 34,251 → 34,521","34,251 → 34,215 → 34,512 → 34,521"],c:0,
   e:"The first three digits (34,___) are the same. Compare hundreds: 2 < 2 — same again. Compare tens: 1 < 5 < 2... ordering: 215 < 251 < 512 < 521."},
  {q:"Which statement is correct about the number 4,682,519?",
   opts:["The digit 2 is worth 2,000","The digit 6 is worth 60,000","The digit 4 is worth 400,000","The digit 8 is in the hundred-thousands place"],c:0,
   e:"4,682,519: 4=millions, 6=hundred-thousands, 8=ten-thousands, 2=thousands, 5=hundreds, 1=tens, 9=ones. So the digit 2 is worth 2,000."},
  // Greater Depth (Q8–10)
  {q:"A 7-digit number has 9 in the ten-thousands place and 3 in the millions place. All other digits are 0. What is the number?",
   opts:["3,090,000","3,900,000","3,000,900","3,009,000"],c:0,
   e:"Millions=3, hundred-thousands=0, ten-thousands=9, thousands=0, hundreds=0, tens=0, ones=0 → 3,090,000."},
  {q:"The digit 6 in a number is worth 600,000. The digit 4 in the same number is worth 40. What is the combined value of these two digits?",
   opts:["600,040","604,000","640,000","60,040"],c:0,
   e:"600,000 + 40 = 600,040."},
  {q:"In which number does the digit 4 have a value of 400,000?",
   opts:["2,419,063","4,291,063","2,941,063","2,194,063"],c:0,
   e:"In 2,419,063: 2=millions, 4=hundred-thousands (4 × 100,000 = 400,000) ✓. Check others: 4,291,063 has 4 in millions = 4,000,000 ✗."}
],

"mi-01-2": [
  // Easy (Q1–3)
  { gen: function() {
    var n = randInt(10,99)*10 + randInt(1,9);
    var ans = Math.round(n/10)*10;
    var opts = buildOpts(ans, [ans-10, ans+10, Math.round(n/100)*100]);
    return { q: 'Round ' + n + ' to the nearest 10.',
             opts: opts, c: 0,
             e: 'Ones digit is ' + (n%10) + '. ' + (n%10 >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + ans + '.' };
  }},
  { gen: function() {
    var n = randInt(10,99)*100 + randInt(10,99)*10 + randInt(1,9);
    var ans = Math.round(n/100)*100;
    var tens = Math.floor((n%100)/10);
    var opts = buildOpts(ans, [ans-100, ans+100, Math.round(n/1000)*1000]);
    return { q: 'Round ' + n.toLocaleString() + ' to the nearest 100.',
             opts: opts, c: 0,
             e: 'Tens digit is ' + tens + '. ' + (tens >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var n = randInt(10,99)*1000 + randInt(5,9)*100 + randInt(0,99);
    var ans = Math.round(n/1000)*1000;
    var hundreds = Math.floor((n%1000)/100);
    var opts = buildOpts(ans, [ans-1000, ans+1000, n - n%1000]);
    return { q: 'Round ' + n.toLocaleString() + ' to the nearest 1,000.',
             opts: opts, c: 0,
             e: 'Hundreds digit is ' + hundreds + '. ' + (hundreds >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + ans.toLocaleString() + '.' };
  }},
  // Medium (Q4–7)
  {q:"Round 4,650,283 to the nearest million.",opts:["5,000,000","4,000,000","4,700,000","4,600,000"],c:0,
   e:"Look at the hundred-thousands digit: 6 ≥ 5, so round up. 4 million → 5 million."},
  {q:"Which number rounds to 8,000 when rounded to the nearest thousand?",opts:["7,832","7,349","8,521","6,900"],c:0,
   e:"7,832: hundreds digit is 8 ≥ 5, so rounds up to 8,000 ✓. 7,349 rounds to 7,000. 8,521 rounds to 9,000. 6,900 rounds to 7,000."},
  {q:"A number rounds to 5,400 to the nearest 100, and to 5,000 to the nearest 1,000. Which could it be?",
   opts:["5,380","5,456","5,349","5,450"],c:0,
   e:"5,380: to nearest 100, tens digit=8 ≥ 5 → 5,400 ✓. To nearest 1,000, hundreds digit=3 < 5 → 5,000 ✓."},
  {q:"The population of a town is 38,746. A news report rounds this to the nearest thousand. What figure do they report?",
   opts:["39,000","38,000","40,000","38,700"],c:0,
   e:"Look at the hundreds digit: 7 ≥ 5, round up. 38,746 → 39,000."},
  // Greater Depth (Q8–10)
  {q:"A measurement is 7.5 cm when rounded to 1 decimal place. What is the range of possible actual values?",
   opts:["7.45 cm to 7.54 cm","7.5 cm to 7.6 cm","7.0 cm to 8.0 cm","7.4 cm to 7.6 cm"],c:0,
   e:"For a number to round to 7.5 (1 d.p.), it must be at least 7.45 and less than 7.55, so the range is 7.45 ≤ x < 7.55."},
  {q:"Sam rounds 26,450 to the nearest thousand and gets 26,000. Is Sam correct?",
   opts:["No — it rounds to 26,000 but only because the hundreds digit is exactly 4","Yes — 4 < 5 so we round down to 26,000","No — it rounds up to 27,000 because 450 is almost 500","Yes — always round to 26,000 when in the 26,000s"],c:1,
   e:"Hundreds digit = 4, which is less than 5, so we round DOWN. 26,450 → 26,000 ✓. Sam is correct."},
  {q:"I round a number to the nearest 10 and get 350. I then round 350 to the nearest 100 and get 400. What is one possible original number?",
   opts:["347","355","341","344"],c:0,
   e:"Original rounds to 350 (nearest 10): must end in 45–54 range. 347 → ones digit 7 ≥ 5 → rounds up to 350 ✓. Then 350 rounds to 400 ✓."}
],

"mi-01-3": [
  // Easy (Q1–3)
  {q:"What is the Roman numeral for 9?",opts:["IX","XI","VIII","IIX"],c:0,
   e:"IX: I (1) before X (10) means 10 − 1 = 9. The subtraction rule applies when a smaller numeral precedes a larger one."},
  {q:"What is XLVII in Hindu-Arabic numerals?",opts:["47","57","43","37"],c:0,
   e:"XL = 40, V = 5, II = 2. Total: 40 + 5 + 2 = 47."},
  {q:"Write the number 'four hundred and sixty-three thousand, two hundred and five' in digits.",
   opts:["463,205","463,250","460,325","436,205"],c:0,
   e:"463 thousands = 463,000; two hundred and five = 205. Total: 463,205."},
  // Medium (Q4–7)
  {q:"Convert MCMXCIX to a number.",opts:["1,999","1,989","1,909","1,099"],c:0,
   e:"M=1000, CM=900, XC=90, IX=9. Total: 1,000+900+90+9 = 1,999."},
  {q:"Write 2,024 in Roman numerals.",opts:["MMXXIV","MMXIV","MMXXVI","MXXIV"],c:0,
   e:"MM=2000, XX=20, IV=4. Together: MMXXIV."},
  {q:"Which number is written as 'seven million, four hundred and two thousand and sixty'?",
   opts:["7,402,060","7,420,060","7,042,060","7,402,600"],c:0,
   e:"7 million = 7,000,000; 402 thousand = 402,000; sixty = 60. Total: 7,402,060."},
  {q:"What is the Roman numeral CDXLVIII equal to?",opts:["448","548","488","438"],c:0,
   e:"CD=400, XL=40, VIII=8. Total: 400+40+8 = 448."},
  // Greater Depth (Q8–10)
  {q:"Which Roman numeral comes just after CMXCIX?",opts:["M","CMXCIX+I","CMXCX","CMXXC"],c:0,
   e:"CMXCIX = 999. The next number is 1,000 = M."},
  {q:"A film was copyrighted in MCMLXXXIV. In what year?",opts:["1984","1884","1994","1894"],c:0,
   e:"M=1000, CM=900, LXXX=80, IV=4. Total: 1,000+900+80+4 = 1,984."},
  {q:"A clock face uses Roman numerals. Why does it use IIII instead of IV for 4?",
   opts:["Tradition and visual balance on the clock face","IIII is correct Roman for 4","IV is not a valid Roman numeral","To make it easier to read quickly"],c:0,
   e:"Clock faces traditionally use IIII (not IV) for aesthetic balance — it visually mirrors the VIII on the opposite side. Both are mathematically acceptable but IIII is the clock convention."}
],

"mi-01-4": [
  // Easy (Q1–3)
  { gen: function() {
    var a = randInt(1000,9999), b = randInt(1000,9999);
    var ans = a + b;
    var opts = buildOpts(ans, [ans-10, ans+10, ans-100]);
    return { q: 'What is ' + a.toLocaleString() + ' + ' + b.toLocaleString() + '?',
             opts: opts, c: 0,
             e: 'Column addition: ' + a.toLocaleString() + ' + ' + b.toLocaleString() + ' = ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var b = randInt(1000,4999), a = b + randInt(1000,5000);
    var ans = a - b;
    var opts = buildOpts(ans, [ans+10, ans-10, a+b]);
    return { q: 'What is ' + a.toLocaleString() + ' − ' + b.toLocaleString() + '?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' − ' + b.toLocaleString() + ' = ' + ans.toLocaleString() + '. Check: ' + ans.toLocaleString() + ' + ' + b.toLocaleString() + ' = ' + a.toLocaleString() + ' ✓' };
  }},
  { gen: function() {
    var a = randInt(200,800), b = randInt(100,500);
    var ans = a + b;
    var opts = buildOpts(ans, [ans-10, ans+10, Math.abs(a-b)]);
    return { q: 'A baker makes ' + a + ' buns in the morning and ' + b + ' in the afternoon. How many altogether?',
             opts: opts, c: 0,
             e: a + ' + ' + b + ' = ' + ans + ' buns.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var a = randInt(1000,9999), b = randInt(1000,9999);
    var ans = a + b;
    var opts = buildOpts(ans, [ans-10, ans+10, ans-100]);
    return { q: 'What is ' + a.toLocaleString() + ' + ' + b.toLocaleString() + '?',
             opts: opts, c: 0,
             e: 'Column addition: ' + a.toLocaleString() + ' + ' + b.toLocaleString() + ' = ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var b = randInt(1000,4999), a = b + randInt(1000,5000);
    var ans = a - b;
    var opts = buildOpts(ans, [ans+10, ans-10, a+b]);
    return { q: 'What is ' + a.toLocaleString() + ' − ' + b.toLocaleString() + '?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' − ' + b.toLocaleString() + ' = ' + ans.toLocaleString() + '. Check: ' + ans.toLocaleString() + ' + ' + b.toLocaleString() + ' = ' + a.toLocaleString() + ' ✓' };
  }},
  { gen: function() {
    var a = randInt(10000,49999), b = randInt(10000,49999);
    var diff = Math.abs(a - b);
    var opts = buildOpts(diff, [diff+5, diff-5, a+b]);
    return { q: 'A school raised £' + a.toLocaleString() + ' in Year 1 and £' + b.toLocaleString() + ' in Year 2. How much more did they raise in the higher year?',
             opts: opts, c: 0,
             e: Math.max(a,b).toLocaleString() + ' − ' + Math.min(a,b).toLocaleString() + ' = ' + diff.toLocaleString() + '.' };
  }},
  { gen: function() {
    var a = randInt(100000,499999), b = randInt(100000,499999);
    var ans = a + b;
    var opts = buildOpts(ans, [ans-10, ans+10, ans-100]);
    return { q: 'Team A scored ' + a.toLocaleString() + ' points and Team B scored ' + b.toLocaleString() + '. What was the combined total?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' + ' + b.toLocaleString() + ' = ' + ans.toLocaleString() + '.' };
  }},
  // Greater Depth (Q8–10)
  { gen: function() {
    var diff = randInt(1000,9999), large = randInt(20000,60000);
    var small = large - diff;
    var opts = buildOpts(small, [small+10, small-10, small+100]);
    return { q: 'The difference between two numbers is ' + diff.toLocaleString() + '. The larger number is ' + large.toLocaleString() + '. What is the smaller number?',
             opts: opts, c: 0,
             e: 'Smaller = ' + large.toLocaleString() + ' − ' + diff.toLocaleString() + ' = ' + small.toLocaleString() + '. Check: ' + small.toLocaleString() + ' + ' + diff.toLocaleString() + ' = ' + large.toLocaleString() + ' ✓' };
  }},
  { gen: function() {
    var a = randInt(10000,49999), b = randInt(10000,49999), c = randInt(10000,49999);
    var ans = a + b + c;
    var opts = buildOpts(ans, [ans-10, ans+10, ans-100]);
    return { q: 'Three towns have populations of ' + a.toLocaleString() + ', ' + b.toLocaleString() + ' and ' + c.toLocaleString() + '. What is the total population?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' + ' + b.toLocaleString() + ' + ' + c.toLocaleString() + ' = ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var m1 = randInt(50000,150000), m2 = randInt(50000,150000);
    var raised = m1 + m2;
    var target = raised + randInt(20000,100000);
    var needed = target - raised;
    var opts = buildOpts(needed, [needed+10, needed-10, needed+100]);
    return { q: 'A charity needs £' + target.toLocaleString() + '. It raised £' + m1.toLocaleString() + ' in Month 1 and £' + m2.toLocaleString() + ' in Month 2. How much more does it still need?',
             opts: opts, c: 0,
             e: 'Raised: ' + m1.toLocaleString() + ' + ' + m2.toLocaleString() + ' = ' + raised.toLocaleString() + '. Still needed: ' + target.toLocaleString() + ' − ' + raised.toLocaleString() + ' = ' + needed.toLocaleString() + '.' };
  }}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 2 — MULTIPLICATION & DIVISION
// ══════════════════════════════════════════════════════════════════════════

"mi-02-1": [
  // Easy (Q1–3)
  {q:"What is 7 × 8?",opts:["56","54","63","48"],c:0,
   e:"7 × 8 = 56. This is one of the key times table facts to memorise."},
  { gen: function() {
    var a = randInt(12,99), b = randInt(2,9);
    var ans = a * b;
    var opts = buildOpts(ans, [ans+b, ans-b, (a+1)*b]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var a = randInt(2,9)*100, b = randInt(2,9)*100;
    var ans = a * b;
    var opts = buildOpts(ans.toLocaleString(), [(ans/10).toLocaleString(), (ans*10).toLocaleString(), (a+b).toLocaleString()]);
    return { q: 'What is ' + a.toLocaleString() + ' × ' + b.toLocaleString() + '?',
             opts: opts, c: 0,
             e: (a/100) + ' × ' + (b/100) + ' = ' + (a/100*b/100) + '. Add ' + (String(a).match(/0+$/)[0].length + String(b).match(/0+$/)[0].length) + ' zeros: ' + ans.toLocaleString() + '.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var a = randInt(100,499), b = randInt(2,9);
    var ans = a * b;
    var opts = buildOpts(ans, [ans+b, ans-b, (a+1)*b]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var friendly = pickFrom([{a:25,b:4},{a:50,b:2},{a:20,b:5}]);
    var extra = randInt(2,12);
    var ans = friendly.a * friendly.b * extra;
    var opts = buildOpts(ans, [friendly.a*extra, friendly.b*extra, ans+extra]);
    return { q: 'Multiply: ' + friendly.a + ' × ' + friendly.b + ' × ' + extra,
             opts: opts, c: 0,
             e: 'Spot the friendly pair: ' + friendly.a + ' × ' + friendly.b + ' = ' + (friendly.a*friendly.b) + '. Then ' + (friendly.a*friendly.b) + ' × ' + extra + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var cans = randInt(10,50), boxes = randInt(20,80);
    var ans = cans * boxes;
    var opts = buildOpts(ans, [ans+cans, ans-cans, cans+boxes]);
    return { q: 'A box contains ' + cans + ' cans. A lorry carries ' + boxes + ' boxes. How many cans is that?',
             opts: opts, c: 0,
             e: cans + ' × ' + boxes + ' = ' + ans + ' cans.' };
  }},
  { gen: function() {
    var a = randInt(2,9)*100, b = randInt(2,9)*100;
    var ans = a * b;
    var opts = buildOpts(ans.toLocaleString(), [(ans/10).toLocaleString(), (ans*10).toLocaleString(), (a+b).toLocaleString()]);
    return { q: 'What is ' + a.toLocaleString() + ' × ' + b.toLocaleString() + '?',
             opts: opts, c: 0,
             e: (a/100) + ' × ' + (b/100) + ' = ' + (a/100*b/100) + '. Add ' + (String(a).match(/0+$/)[0].length + String(b).match(/0+$/)[0].length) + ' zeros: ' + ans.toLocaleString() + '.' };
  }},
  // Greater Depth (Q8–10)
  { gen: function() {
    var l = randInt(12,30), w = randInt(8,20);
    var ans = l * w;
    var opts = buildOpts(ans + ' m²', [(l+w)*2 + ' m²', (l+w) + ' m²', (ans+l) + ' m²']);
    return { q: 'A rectangle has width ' + w + ' m and length ' + l + ' m. What is its area?',
             opts: opts, c: 0,
             e: 'Area = ' + l + ' × ' + w + ' = ' + ans + ' m².' };
  }},
  {q:"If 26 × 43 = 1,118, what is 260 × 43?",opts:["11,180","1,118","111,800","11,018"],c:0,
   e:"260 × 43 = 26 × 10 × 43 = 1,118 × 10 = 11,180."},
  { gen: function() {
    var parts = randInt(50,200), hours = randInt(6,12), days = randInt(4,7);
    var perDay = parts * hours;
    var ans = perDay * days;
    var opts = buildOpts(ans, [ans+parts, ans-parts, perDay]);
    return { q: 'A factory produces ' + parts + ' parts per hour and runs ' + hours + ' hours per day, ' + days + ' days per week. How many parts per week?',
             opts: opts, c: 0,
             e: parts + ' × ' + hours + ' = ' + perDay + ' per day. ' + perDay + ' × ' + days + ' = ' + ans + ' per week.' };
  }}
],

"mi-02-2": [
  // Easy (Q1–3)
  { gen: function() {
    var a = randInt(2,9)*1000, b = randInt(2,9);
    var rounded = Math.round(a/1000)*1000;
    var ans = rounded * b;
    var opts = buildOpts(ans, [a*b, ans+1000, ans-1000]);
    return { q: 'Estimate ' + a.toLocaleString() + ' × ' + b + ' by rounding to the nearest thousand.',
             opts: opts, c: 0,
             e: 'Round ' + a.toLocaleString() + ' to ' + rounded.toLocaleString() + '. ' + rounded.toLocaleString() + ' × ' + b + ' = ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var a = randInt(100,9999);
    var ans = a * 10;
    var opts = buildOpts(ans, [a*100, a+10, a*10+1]);
    return { q: 'What is ' + a.toLocaleString() + ' × 10?',
             opts: opts, c: 0,
             e: 'Multiplying by 10 shifts each digit one place to the left. ' + a.toLocaleString() + ' × 10 = ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var a = randInt(2,9)*500, b = randInt(2,5)*10;
    var ans = a * b;
    var opts = buildOpts(ans, [ans/10, ans*10, a+b]);
    return { q: 'What is ' + a.toLocaleString() + ' × ' + b + '?',
             opts: opts, c: 0,
             e: (a/10) + ' × ' + (b/10) + ' = ' + (a/10*b/10) + '. Add zeros: ' + ans.toLocaleString() + '.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var a = randInt(100,499), b = randInt(12,39);
    var ans = a * b;
    var b1 = b % 10, b10 = b - b1;
    var opts = buildOpts(ans, [ans+b, ans-b, a*b1 + a*b10/10]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: a + '×' + b1 + '=' + (a*b1) + '; ' + a + '×' + b10 + '=' + (a*b10) + '. Total: ' + (a*b1) + '+' + (a*b10) + '=' + ans + '.' };
  }},
  { gen: function() {
    var a = randInt(500,1999), b = randInt(12,49);
    var ans = a * b;
    var b1 = b % 10, b10 = b - b1;
    var opts = buildOpts(ans, [ans+b, ans-b, a*b1 + a*(b10/10)]);
    return { q: 'What is ' + a.toLocaleString() + ' × ' + b + '?',
             opts: opts, c: 0,
             e: a.toLocaleString() + '×' + b1 + '=' + (a*b1).toLocaleString() + '; ' + a.toLocaleString() + '×' + b10 + '=' + (a*b10).toLocaleString() + '. Total: ' + ans.toLocaleString() + '.' };
  }},
  { gen: function() {
    var boxes = randInt(20,60), pencils = randInt(20,50);
    var ans = boxes * pencils;
    var opts = buildOpts(ans, [ans+pencils, ans-pencils, boxes+pencils]);
    return { q: 'A school orders ' + boxes + ' boxes of ' + pencils + ' pencils. How many pencils is that?',
             opts: opts, c: 0,
             e: boxes + ' × ' + pencils + ' = ' + ans + ' pencils.' };
  }},
  { gen: function() {
    var a = randInt(150,400), b = randInt(20,70);
    var ar = Math.round(a/10)*10, br = Math.round(b/10)*10;
    var ans = ar * br;
    var opts = buildOpts(ans, [a*b, ans+1000, ans-1000]);
    return { q: 'Estimate ' + a + ' × ' + b + ' by rounding both numbers to the nearest 10.',
             opts: opts, c: 0,
             e: a + '≈' + ar + '; ' + b + '≈' + br + '. ' + ar + '×' + br + '=' + ans.toLocaleString() + '.' };
  }},
  // Greater Depth (Q8–10)
  {q:"A cinema has 34 rows of 28 seats. 462 tickets are sold. How many seats are empty?",
   opts:["490","952","462","28"],c:0,
   e:"Total seats: 34×28=952. Empty: 952−462=490."},
  {q:"If 124 × 37 = 4,588, use this to find 1,240 × 3.7.",opts:["4,588","45,880","458,800","45.88"],c:0,
   e:"1,240×3.7 = 124×10 × 37÷10 = 124×37 = 4,588. The factors are scaled in opposite directions."},
  {q:"A builder needs 56 packs of 48 tiles. Tiles cost £3 per pack. What is the total cost?",
   opts:["£168","£2,688","£8,064","£336"],c:0,
   e:"56 packs × £3 = £168 total cost. (The 48 tiles per pack is extra information — read carefully!)"}
],

"mi-02-3": [
  // Easy (Q1–3)
  {q:"Which rule tells you a number is divisible by 2?",
   opts:["Its last digit is even (0,2,4,6,8)","Its digits sum to an even number","Its last digit is 0","Its digits sum to a multiple of 2"],c:0,
   e:"Divisibility by 2: the number must end in an even digit (0, 2, 4, 6 or 8)."},
  {q:"Is 4,281 divisible by 3?",opts:["Yes","No","Only if it ends in 3","Only if it's odd"],c:0,
   e:"Sum of digits: 4+2+8+1=15. 15÷3=5 ✓. So yes, 4,281 is divisible by 3."},
  {q:"Is 7,350 divisible by 5?",opts:["Yes","No","Only if it ends in 5","Only if the sum of digits is 5"],c:0,
   e:"Divisibility by 5: last digit must be 0 or 5. The last digit here is 0. Yes ✓."},
  // Medium (Q4–7)
  {q:"Is 6,312 divisible by 4?",opts:["Yes","No","Maybe","Only if divisible by 2 twice"],c:0,
   e:"Rule for 4: check the last two digits. 12÷4=3 ✓. So 6,312 is divisible by 4."},
  {q:"Which number is divisible by 9?",opts:["6,327","6,320","6,328","6,325"],c:0,
   e:"Rule for 9: digit sum divisible by 9. 6+3+2+7=18; 18÷9=2 ✓. The others: 6+3+2+0=11, 6+3+2+8=19, 6+3+2+5=16 — none divisible by 9."},
  {q:"Which number is divisible by both 3 and 5?",opts:["1,245","1,246","1,244","1,247"],c:0,
   e:"For both 3 and 5: must end in 0 or 5 (div by 5) AND digit sum divisible by 3. 1,245: ends in 5 ✓; 1+2+4+5=12, 12÷3=4 ✓."},
  {q:"Is 8,136 divisible by 6? Explain.",
   opts:["Yes — divisible by both 2 and 3","No — not divisible by 3","Yes — all even numbers are divisible by 6","No — not divisible by 2"],c:0,
   e:"Div by 6 = div by 2 AND div by 3. 8,136 ends in 6 (even) ✓. Digit sum: 8+1+3+6=18, 18÷3=6 ✓. So yes!"},
  // Greater Depth (Q8–10)
  {q:"A number is between 50 and 60, and is divisible by both 4 and 6. What is it?",
   opts:["60","56","54","52"],c:0,
   e:"Must be div by LCM(4,6)=12. Multiples of 12: 48, 60, 72... Between 50–60: only 60. 60÷4=15 ✓, 60÷6=10 ✓."},
  {q:"The number 7,4_2 is divisible by 3. What digit could replace the _?",
   opts:["2, 5 or 8","0, 3 or 6","1, 4 or 7","Any digit"],c:0,
   e:"Digit sum without _: 7+4+2=13. Need total divisible by 3: 13+2=15 ✓, 13+5=18 ✓, 13+8=21 ✓. So _ = 2, 5, or 8."},
  {q:"A number is divisible by 8. Which must also be true?",
   opts:["It is divisible by 2 and 4","It is divisible by 3","It ends in 8","It is divisible by 16"],c:0,
   e:"8 = 2 × 4 = 2³. So any multiple of 8 is also a multiple of 2 and 4. (It doesn't have to end in 8 or be divisible by 3 or 16.)"}
],

"mi-02-4": [
  // Easy (Q1–3)
  { gen: function() {
    var b = randInt(2,9), ans = randInt(10,99);
    var a = b * ans;
    var opts = buildOpts(ans, [ans+1, ans-1, ans*2]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: a + ' ÷ ' + b + ' = ' + ans + '. Check: ' + ans + ' × ' + b + ' = ' + a + ' ✓' };
  }},
  { gen: function() {
    var b = randInt(2,9), ans = randInt(10,99);
    var a = b * ans;
    var opts = buildOpts(ans, [ans+1, ans-1, ans*2]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: a + ' ÷ ' + b + ' = ' + ans + '. Check: ' + ans + ' × ' + b + ' = ' + a + ' ✓' };
  }},
  { gen: function() {
    var b = randInt(2,9), ans = randInt(10,99);
    var a = b * ans;
    var opts = buildOpts(ans, [ans+1, ans-1, ans+b]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: a + ' ÷ ' + b + ' = ' + ans + '. Check: ' + ans + ' × ' + b + ' = ' + a + ' ✓' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var b = randInt(10,30), ans = randInt(20,99);
    var a = b * ans;
    var opts = buildOpts(ans, [ans+10, ans-10, ans*2]);
    return { q: 'What is ' + a.toLocaleString() + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' ÷ ' + b + ' = ' + ans + '. Check: ' + ans + ' × ' + b + ' = ' + a.toLocaleString() + ' ✓' };
  }},
  { gen: function() {
    var b = randInt(10,25), ans = randInt(20,99);
    var a = b * ans;
    var opts = buildOpts(ans, [ans+10, ans-10, ans+1]);
    return { q: 'What is ' + a.toLocaleString() + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' ÷ ' + b + ' = ' + ans + '. Check: ' + ans + ' × ' + b + ' = ' + a.toLocaleString() + ' ✓' };
  }},
  { gen: function() {
    var children = randInt(10,25), each = randInt(10,30);
    var total = children * each + randInt(1,children-1);
    var rem = total % children;
    var q = Math.floor(total/children);
    var opts = buildOpts(q + ' each, ' + rem + ' left over', [(q+1) + ' each, 0 left over', (q-1) + ' each, ' + children + ' left over', q + ' each, 0 left over']);
    return { q: total + ' chocolates are shared equally among ' + children + ' children. How many does each child get, and how many are left over?',
             opts: opts, c: 0,
             e: total + '÷' + children + '=' + q + ' remainder ' + rem + '. Each child gets ' + q + ', with ' + rem + ' left over.' };
  }},
  { gen: function() {
    var b = randInt(20,50), ans = randInt(50,200);
    var a = b * ans;
    var opts = buildOpts(ans, [ans+10, ans-10, ans+b]);
    return { q: 'What is ' + a.toLocaleString() + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: a.toLocaleString() + ' ÷ ' + b + ' = ' + ans + '. Check: ' + ans + ' × ' + b + ' = ' + a.toLocaleString() + ' ✓' };
  }},
  // Greater Depth (Q8–10)
  {q:"A number divided by 7 gives a quotient of 84 with a remainder of 5. What is the original number?",
   opts:["593","583","598","573"],c:0,
   e:"Original = (quotient × divisor) + remainder = (84 × 7) + 5 = 588 + 5 = 593."},
  { gen: function() {
    var people = pickFrom([3,4,5,6]);
    var each = randInt(100,500);
    var total = people * each;
    var opts = buildOpts('£' + each, ['£' + (each+10), '£' + (each-10), '£' + (each*2)]);
    return { q: people + ' friends share a prize of £' + total.toLocaleString() + ' equally. How much does each person receive?',
             opts: opts, c: 0,
             e: total.toLocaleString() + '÷' + people + '=' + each + '. Check: ' + each + '×' + people + '=' + total.toLocaleString() + ' ✓' };
  }},
  { gen: function() {
    var students = randInt(20,60), each = randInt(50,250);
    var total = students * each;
    var opts = buildOpts('£' + each, ['£' + (each+10), '£' + (each-10), '£' + (each+students)]);
    return { q: 'A school trip costs £' + total.toLocaleString() + ' in total. Each of ' + students + ' students pays the same amount. How much does each student pay?',
             opts: opts, c: 0,
             e: total.toLocaleString() + '÷' + students + '=' + each + '. Check: ' + each + '×' + students + '=' + total.toLocaleString() + ' ✓' };
  }}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 3 — POWERS & ROOTS
// ══════════════════════════════════════════════════════════════════════════

"mi-03-1": [
  // Easy (Q1–3)
  {q:"Write 3 × 3 × 3 × 3 × 3 in index notation.",opts:["3⁵","5³","3 × 5","15"],c:0,
   e:"The base is 3 (the number being multiplied) and the exponent is 5 (how many times). Written: 3⁵."},
  {q:"What does 2⁴ mean?",opts:["2 × 2 × 2 × 2","4 × 4","2 × 4","4²"],c:0,
   e:"2⁴ means 2 multiplied by itself 4 times: 2 × 2 × 2 × 2."},
  {q:"What is 10² as a value?",opts:["100","20","1,000","10"],c:0,
   e:"10² = 10 × 10 = 100."},
  // Medium (Q4–7)
  {q:"Write the missing base: ? × ? × ? = 125",opts:["5","25","15","3"],c:0,
   e:"125 = 5 × 5 × 5 = 5³. The base is 5."},
  {q:"Which has a greater value: 2⁵ or 5²?",opts:["2⁵ (32 > 25)","5² (25 > 32)","They are equal","Cannot compare"],c:0,
   e:"2⁵ = 2×2×2×2×2 = 32. 5² = 5×5 = 25. So 2⁵ = 32 > 25 = 5²."},
  {q:"A cube has side length 4 cm. Write its volume using index notation.",opts:["4³ cm³","4² cm²","3⁴ cm³","4 × 3 cm³"],c:0,
   e:"Volume of a cube = side³ = 4³ = 4 × 4 × 4 = 64 cm³. Written in index form: 4³ cm³."},
  {q:"What is 10⁴?",opts:["10,000","1,000","100,000","40"],c:0,
   e:"10⁴ = 10 × 10 × 10 × 10 = 10,000. Each power of 10 adds a zero."},
  // Greater Depth (Q8–10)
  {q:"Write 32 as a power of 2.",opts:["2⁵","5²","2⁶","2⁴"],c:0,
   e:"2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32. So 32 = 2⁵."},
  {q:"In the expression 7³, which number is the exponent and what does it mean?",
   opts:["3 — it tells you how many times 7 is multiplied by itself","7 — it is the base","3 — it means multiply 7 by 3","7 — it tells you the power"],c:0,
   e:"The exponent (index) is 3. It tells you that 7 is multiplied by itself 3 times: 7 × 7 × 7."},
  {q:"A square has area 6² cm². What is the perimeter of the square?",opts:["24 cm","36 cm","12 cm","144 cm"],c:0,
   e:"Area = 6² = 36 cm². Side = √36 = 6 cm. Perimeter = 4 × 6 = 24 cm."}
],

"mi-03-2": [
  // Easy (Q1–3)
  { gen: function() {
    var bases = [2,3,4,5]; var b = pickFrom(bases);
    var exp = randInt(2,4);
    var ans = Math.pow(b, exp);
    // Build distinct distractors avoiding collisions (e.g. b=2,exp=4 makes b*exp == b^(exp-1))
    var w1 = b*exp, w2 = Math.pow(b,exp-1), w3 = Math.pow(b+1,exp);
    if (w1 === w2) w2 = ans + b;
    if (w1 === w3 || w2 === w3) w3 = ans - 1;
    var opts = buildOpts(ans, [w1, w2, w3]);
    return { q: 'What is ' + b + (exp===2?'²':exp===3?'³':'⁴') + '?',
             opts: opts, c: 0,
             e: b + (exp===2?'²':exp===3?'³':'⁴') + ' = ' + Array(exp).fill(b).join('×') + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var bases = [2,3,4,5]; var b = pickFrom(bases);
    var exp = randInt(2,4);
    var ans = Math.pow(b, exp);
    var w1 = b*exp, w2 = Math.pow(b,exp-1), w3 = Math.pow(b+1,exp);
    if (w1 === w2) w2 = ans + b;
    if (w1 === w3 || w2 === w3) w3 = ans - 1;
    var opts = buildOpts(ans, [w1, w2, w3]);
    return { q: 'What is ' + b + (exp===2?'²':exp===3?'³':'⁴') + '?',
             opts: opts, c: 0,
             e: b + (exp===2?'²':exp===3?'³':'⁴') + ' = ' + Array(exp).fill(b).join('×') + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var exp = randInt(2,5);
    var ans = Math.pow(10, exp);
    var sups = ['','¹','²','³','⁴','⁵'];
    var opts = buildOpts(ans, [exp*10, Math.pow(10,exp-1), Math.pow(10,exp+1)]);
    return { q: 'What is 10' + sups[exp] + '?',
             opts: opts, c: 0,
             e: '10' + sups[exp] + ' = ' + Array(exp).fill('10').join('×') + ' = ' + ans.toLocaleString() + '.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    // Each fraction lists its own distinct distractors so no two collide
    var fracs = [
      {d:2, cube:'1/8',  sq:'1/4',  w1:'1/6',  w2:'2/8'},
      {d:3, cube:'1/27', sq:'1/9',  w1:'1/6',  w2:'3/27'},
      {d:4, cube:'1/64', sq:'1/16', w1:'1/12', w2:'3/4'}
    ];
    var f = pickFrom(fracs);
    var opts = buildOpts(f.cube, [f.sq, f.w1, f.w2]);
    return { q: 'What is (1/' + f.d + ')³?',
             opts: opts, c: 0,
             e: '(1/' + f.d + ')³ = (1/' + f.d + ')×(1/' + f.d + ')×(1/' + f.d + ') = ' + f.cube + '.' };
  }},
  { gen: function() {
    var decs = [{v:'0.3',sq:'0.09',wrong1:'0.9',wrong2:'0.6'},{v:'0.4',sq:'0.16',wrong1:'0.8',wrong2:'1.6'},{v:'0.5',sq:'0.25',wrong1:'0.5',wrong2:'1.0'},{v:'0.2',sq:'0.04',wrong1:'0.4',wrong2:'0.2'}];
    var d = pickFrom(decs);
    var opts = buildOpts(d.sq, [d.wrong1, d.wrong2, '0.0' + d.sq.replace('0.','')]);
    return { q: 'What is (' + d.v + ')²?',
             opts: opts, c: 0,
             e: d.v + ' × ' + d.v + ' = ' + d.sq + '. When squaring a decimal, the number of decimal places doubles.' };
  }},
  {q:"What power of 3 equals 243? (3 to the power of what?)",opts:["5","4","6","3"],c:0,
   e:"3¹=3, 3²=9, 3³=27, 3⁴=81, 3⁵=243. So the missing exponent is 5."},
  { gen: function() {
    var pairs = [{a:3,ea:4,b:4,eb:3,av:81,bv:64,res:'3⁴ (81 > 64)'},{a:2,ea:5,b:5,eb:2,av:32,bv:25,res:'2⁵ (32 > 25)'},{a:2,ea:4,b:4,eb:2,av:16,bv:16,res:'They are equal (both = 16)'}];
    var p = pickFrom(pairs);
    var sups = ['','¹','²','³','⁴','⁵'];
    var opts = buildOpts(p.res, [p.a + sups[p.ea] + ' (' + p.av + ' < ' + p.bv + ')', p.b + sups[p.eb] + ' (' + p.bv + ' < ' + p.av + ')', 'Cannot tell']);
    return { q: 'Which is greater: ' + p.a + sups[p.ea] + ' or ' + p.b + sups[p.eb] + '?',
             opts: opts, c: 0,
             e: p.a + sups[p.ea] + ' = ' + p.av + '. ' + p.b + sups[p.eb] + ' = ' + p.bv + '. ' + p.res + '.' };
  }},
  // Greater Depth (Q8–10)
  { gen: function() {
    var bases = [2,3,4]; var b = pickFrom(bases);
    var e1 = randInt(2,4), e2 = randInt(1,3), e3 = randInt(1,3);
    var ans = Math.pow(b,e1) + Math.pow(e2+1,2) - e3;
    var sups = ['','¹','²','³','⁴'];
    var opts = buildOpts(ans, [ans+1, ans-1, ans+e3]);
    return { q: 'Evaluate ' + b + sups[e1] + ' + ' + (e2+1) + '² − ' + e3 + '¹.',
             opts: opts, c: 0,
             e: b + sups[e1] + '=' + Math.pow(b,e1) + '; ' + (e2+1) + '²=' + Math.pow(e2+1,2) + '; ' + e3 + '¹=' + e3 + '. ' + Math.pow(b,e1) + '+' + Math.pow(e2+1,2) + '−' + e3 + '=' + ans + '.' };
  }},
  { gen: function() {
    var sides = pickFrom([{s:'0.3',a:'0.09'},{s:'0.4',a:'0.16'},{s:'0.5',a:'0.25'},{s:'0.6',a:'0.36'},{s:'0.7',a:'0.49'},{s:'0.8',a:'0.64'}]);
    var opts = buildOpts(sides.a + ' m²', [(parseFloat(sides.s)*2) + ' m²', '0.0' + sides.a.replace('0.','') + ' m²', (parseFloat(sides.s)/2) + ' m²']);
    return { q: 'A square tile has side length ' + sides.s + ' m. What is its area in m²?',
             opts: opts, c: 0,
             e: 'Area = ' + sides.s + '² = ' + sides.s + ' × ' + sides.s + ' = ' + sides.a + ' m².' };
  }},
  {q:"Two students claim: Alex says 2¹⁰ > 10², Sam says 10² > 2¹⁰. Who is right?",
   opts:["Alex — 2¹⁰ = 1,024 > 100 = 10²","Sam — 10² = 100 > 2¹⁰","They are equal","Neither — cannot compare different bases"],c:0,
   e:"2¹⁰ = 1,024 and 10² = 100. So 2¹⁰ > 10². Alex is correct."}
],

"mi-03-3": [
  // Easy (Q1–3)
  { gen: function() {
    var perfectSqs = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
    var ans2 = pickFrom(perfectSqs.slice(0,8));
    var n = Math.sqrt(ans2);
    var opts = buildOpts(n, [n+1, n-1, ans2/2]);
    return { q: 'What is √' + ans2 + '?',
             opts: opts, c: 0,
             e: '√' + ans2 + ' = ' + n + ' because ' + n + ' × ' + n + ' = ' + ans2 + '.' };
  }},
  { gen: function() {
    var perfectSqs = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
    var ans2 = pickFrom(perfectSqs);
    var n = Math.sqrt(ans2);
    var opts = buildOpts(n, [n+1, n-1, ans2/2]);
    return { q: 'What is √' + ans2 + '?',
             opts: opts, c: 0,
             e: '√' + ans2 + ' = ' + n + ' because ' + n + ' × ' + n + ' = ' + ans2 + '.' };
  }},
  { gen: function() {
    var perfectSqs = [4,9,16,25,36,49,64,81,100,121,144,169,196,225];
    var ans2 = pickFrom(perfectSqs);
    var n = Math.sqrt(ans2);
    var opts = buildOpts('Yes, √' + ans2 + ' = ' + n, ['No, ' + ans2 + ' is not a perfect square', 'Yes, √' + ans2 + ' = ' + (n+1), 'Yes, √' + ans2 + ' = ' + (n-1)]);
    return { q: 'Is ' + ans2 + ' a perfect square? If so, what is its square root?',
             opts: opts, c: 0,
             e: ans2 + ' = ' + n + ' × ' + n + ', so yes it is a perfect square and √' + ans2 + ' = ' + n + '.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var perfectSqs = [100,121,144,169,196,225];
    var ans2 = pickFrom(perfectSqs);
    var n = Math.sqrt(ans2);
    var opts = buildOpts(n, [n+1, n-1, n+2]);
    return { q: 'What is √' + ans2 + '?',
             opts: opts, c: 0,
             e: '√' + ans2 + ' = ' + n + ' because ' + n + ' × ' + n + ' = ' + ans2 + '.' };
  }},
  {q:"Which of these is NOT a perfect square?",opts:["50","36","64","121"],c:0,
   e:"36=6², 64=8², 121=11². 50 is between 7²=49 and 8²=64, so 50 is not a perfect square."},
  { gen: function() {
    var areas = [{a:196,s:14},{a:144,s:12},{a:225,s:15},{a:169,s:13},{a:121,s:11}];
    var r = pickFrom(areas);
    var opts = buildOpts(r.s + ' m', [(r.s+1) + ' m', (r.s-1) + ' m', (r.s+2) + ' m']);
    return { q: 'A square room has an area of ' + r.a + ' m². What is the length of one wall?',
             opts: opts, c: 0,
             e: 'Side = √' + r.a + ' = ' + r.s + ' m (since ' + r.s + '×' + r.s + '=' + r.a + ').' };
  }},
  { gen: function() {
    var perfectSqs = [4,9,16,25,36,49,64,81,100];
    var ans2 = pickFrom(perfectSqs);
    var n = Math.sqrt(ans2);
    var opts = buildOpts(ans2, [n, ans2/2, ans2*2]);
    return { q: 'What is (√' + ans2 + ')²?',
             opts: opts, c: 0,
             e: '(√' + ans2 + ')² = ' + ans2 + '. Square and square root are inverse operations — they cancel each other out.' };
  }},
  // Greater Depth (Q8–10)
  {q:"Between which two consecutive whole numbers does √50 lie?",opts:["7 and 8","6 and 7","8 and 9","5 and 6"],c:0,
   e:"7² = 49 and 8² = 64. Since 49 < 50 < 64, we have 7 < √50 < 8."},
  {q:"The area of a square is 169 cm². The area of a rectangle is 156 cm² with width 12 cm. Which shape has the greater perimeter?",
   opts:["The square (52 cm)","The rectangle (50 cm)","They are equal","Cannot determine"],c:0,
   e:"Square: side=√169=13 cm, perimeter=52 cm. Rectangle: length=156÷12=13 cm, perimeter=2(13+12)=50 cm. Square has greater perimeter."},
  {q:"If n² = 144, what are all possible values of n?",opts:["n = 12 or n = −12","n = 12 only","n = 144/2 = 72","n = ±72"],c:0,
   e:"Both 12² = 144 and (−12)² = 144. So n = 12 or n = −12. Square roots have both positive and negative solutions."}
],

"mi-03-4": [
  // Easy (Q1–3)
  { gen: function() {
    var pairs = [{a:9,b:16,sum:25,root:5},{a:4,b:21,sum:25,root:5},{a:36,b:64,sum:100,root:10},{a:16,b:9,sum:25,root:5},{a:0,b:36,sum:36,root:6}];
    var p = pickFrom(pairs);
    var wrongSum = p.a + p.b;
    var opts = buildOpts(p.root, [Math.sqrt(p.a)+Math.sqrt(p.b), wrongSum, p.root+1]);
    return { q: 'Evaluate √(' + p.a + ' + ' + p.b + ').',
             opts: opts, c: 0,
             e: 'First evaluate inside: ' + p.a + '+' + p.b + '=' + p.sum + '. Then √' + p.sum + '=' + p.root + '. Note: √(' + p.a + '+' + p.b + ') ≠ √' + p.a + '+√' + p.b + '. Always work inside the root first.' };
  }},
  { gen: function() {
    var a = randInt(2,6), b = randInt(2,6);
    var ans = a*a + b*b;
    var opts = buildOpts(ans, [(a+b)*(a+b), a*a - b*b < 0 ? b*b - a*a : a*a - b*b, a+b]);
    return { q: 'What is ' + a + '² + ' + b + '²?',
             opts: opts, c: 0,
             e: a + '²=' + (a*a) + ', ' + b + '²=' + (b*b) + '. ' + (a*a) + '+' + (b*b) + '=' + ans + '.' };
  }},
  {q:"Find the side length of a square with area = 5² cm².",opts:["5 cm","25 cm","10 cm","√5 cm"],c:0,
   e:"Area = 5² = 25 cm². Side = √25 = 5 cm."},
  // Medium (Q4–7)
  { gen: function() {
    var bases = [2,3,4]; var b = pickFrom(bases);
    var exp = randInt(2,4);
    var perfectSqs = [4,9,16,25,36,49,64,81,100];
    var sq = pickFrom(perfectSqs);
    var bv = Math.pow(b,exp), sqr = Math.sqrt(sq);
    var ans = bv - sqr;
    var opts = buildOpts(ans, [bv+sqr, sqr-bv < 0 ? bv-sqr+1 : sqr-bv, ans+1]);
    var sups = ['','¹','²','³','⁴'];
    return { q: 'Evaluate ' + b + sups[exp] + ' − √' + sq + '.',
             opts: opts, c: 0,
             e: b + sups[exp] + '=' + bv + '; √' + sq + '=' + sqr + '. ' + bv + '−' + sqr + '=' + ans + '.' };
  }},
  {q:"Simplify: √(2⁶)",opts:["8","4","2³","64"],c:0,
   e:"√(2⁶) = 2^(6÷2) = 2³ = 8. Taking a square root halves the exponent."},
  { gen: function() {
    var sides = [8,10,12,14,16];
    var s = pickFrom(sides);
    var perim = s * 4;
    var area = s * s;
    var opts = buildOpts(s + '² cm²', [perim + '² cm²', '(' + perim + '÷4)² cm²', (s/2) + '² cm²']);
    return { q: 'A square has perimeter ' + perim + ' cm. What is the area of the square in index notation?',
             opts: opts, c: 0,
             e: 'Side = ' + perim + '÷4 = ' + s + ' cm. Area = ' + s + '² cm² = ' + area + ' cm².' };
  }},
  { gen: function() {
    var a = randInt(2,6), sqBase = pickFrom([2,3,4,5,6,7,8,9,10,11,12]), powerBase = randInt(2,3), powerExp = randInt(2,4);
    var v1 = a*a, v2 = sqBase*sqBase, v3 = Math.pow(powerBase,powerExp);
    var ans = v1 + sqBase - v3;
    var sups = ['','¹','²','³','⁴'];
    var opts = buildOpts(ans, [v1+v2-v3, v1+sqBase+v3, ans+1]);
    return { q: 'Evaluate: ' + a + '² + √' + v2 + ' − ' + powerBase + sups[powerExp],
             opts: opts, c: 0,
             e: a + '²=' + v1 + '; √' + v2 + '=' + sqBase + '; ' + powerBase + sups[powerExp] + '=' + v3 + '. ' + v1 + '+' + sqBase + '−' + v3 + '=' + ans + '.' };
  }},
  // Greater Depth (Q8–10)
  {q:"If 3ⁿ = 729, what is n?",opts:["6","5","7","9"],c:0,
   e:"3¹=3, 3²=9, 3³=27, 3⁴=81, 3⁵=243, 3⁶=729. So n=6."},
  {q:"Which is greater: √(100) + √(36), or √(100 + 36)?",
   opts:["√100 + √36 = 16 is greater","√(100+36) = √136 ≈ 11.7 is greater","They are equal","Cannot compare"],c:0,
   e:"√100+√36 = 10+6 = 16. √136 ≈ 11.66. So 16 > 11.66. The sum of square roots is NOT equal to the square root of the sum."},
  {q:"Two squares have areas of 4² cm² and 3² cm². A third square has area equal to their combined areas. What is the side of the third square?",
   opts:["5 cm","7 cm","√7 cm","√13 cm"],c:0,
   e:"Areas: 4²=16 and 3²=9. Combined: 16+9=25. Third square side = √25=5 cm. This illustrates the 3-4-5 Pythagorean triple."}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 4 — NUMBER THEORY
// ══════════════════════════════════════════════════════════════════════════

"mi-04-1": [
  // Easy (Q1–3)
  {q:"Which of these is a prime number?",opts:["17","15","21","9"],c:0,
   e:"17 has only 2 factors: 1 and 17. 15=3×5, 21=3×7, 9=3×3 — all composite."},
  {q:"How many factors does the number 12 have?",opts:["6","4","3","5"],c:0,
   e:"Factors of 12: 1, 2, 3, 4, 6, 12. That's 6 factors. Pairs: 1×12, 2×6, 3×4."},
  {q:"Is 1 a prime number?",opts:["No — 1 has only one factor (itself)","Yes — 1 is divisible only by 1","Yes — 1 is the first prime","No — 1 is composite"],c:0,
   e:"1 is neither prime nor composite. Prime numbers must have exactly TWO factors. 1 has only one factor: itself."},
  // Medium (Q4–7)
  {q:"Which of these numbers is composite?",opts:["91","97","83","71"],c:0,
   e:"91 = 7 × 13, so it is composite. 97, 83 and 71 are all prime (check by dividing by primes up to their square root)."},
  {q:"List all prime numbers between 20 and 40.",opts:["23, 29, 31, 37","21, 23, 29, 31, 37","23, 29, 33, 37","23, 27, 29, 31, 37"],c:0,
   e:"23 ✓, 29 ✓, 31 ✓, 37 ✓. Check others: 21=3×7, 25=5², 27=3³, 33=3×11, 35=5×7, 39=3×13."},
  {q:"Which number has exactly 3 factors?",opts:["25","16","12","9"],c:0,
   e:"25: factors are 1, 5, 25 — exactly 3 factors! Numbers with exactly 3 factors are squares of primes (p²): factors are 1, p, p²."},
  {q:"What is the largest prime factor of 45?",opts:["5","3","15","9"],c:0,
   e:"45 = 3 × 15 = 3 × 3 × 5. Prime factors are 3 and 5. Largest is 5."},
  // Greater Depth (Q8–10)
  {q:"Twin primes are pairs of primes that differ by 2. Which pair below are twin primes?",
   opts:["11 and 13","11 and 17","13 and 19","17 and 21"],c:0,
   e:"11 and 13 are both prime and differ by 2. 21=3×7 is not prime, and 11&17 differ by 6."},
  {q:"A prime number multiplied by itself gives 169. What is the prime number?",opts:["13","11","17","7"],c:0,
   e:"√169=13. And 13 is prime (factors: 1 and 13 only). So 13 is the prime."},
  {q:"Goldbach's conjecture states every even number greater than 2 is the sum of two primes. Verify this for 28.",
   opts:["5 + 23","4 + 24","14 + 14","1 + 27"],c:0,
   e:"5 + 23 = 28. Both 5 and 23 are prime ✓. (Other valid pairs: 11+17, but only option A uses two primes.)"}
],

"mi-04-2": [
  // Easy (Q1–3)
  {q:"What is the prime factorisation of 12?",opts:["2² × 3","2 × 6","3 × 4","2 × 2 × 3"],c:0,
   e:"12 = 2 × 6 = 2 × 2 × 3 = 2² × 3. Written in index form: 2² × 3."},
  {q:"What is the prime factorisation of 20?",opts:["2² × 5","4 × 5","2 × 10","2³ × 5"],c:0,
   e:"20 = 2 × 10 = 2 × 2 × 5 = 2² × 5."},
  {q:"Which of these is correctly written as a product of prime factors?",opts:["2³ × 3 × 7","2 × 4 × 3","6 × 7","2³ × 6"],c:0,
   e:"2³ × 3 × 7: all factors (2, 3, 7) are prime ✓. The others include composite numbers like 4 and 6."},
  // Medium (Q4–7)
  {q:"What is the prime factorisation of 72?",opts:["2³ × 3²","2² × 3³","2⁴ × 3","2³ × 9"],c:0,
   e:"72 = 8 × 9 = 2³ × 3². Check: 8=2³ ✓, 9=3² ✓."},
  {q:"What is the prime factorisation of 180?",opts:["2² × 3² × 5","2³ × 3 × 5","2 × 3² × 5","2² × 3 × 5²"],c:0,
   e:"180 = 4 × 45 = 4 × 9 × 5 = 2² × 3² × 5."},
  {q:"Using prime factorisation, write 2³ × 3² × 5 as a single number.",opts:["360","180","720","270"],c:0,
   e:"2³=8; 3²=9; ×5. 8×9=72; 72×5=360."},
  {q:"Two numbers have prime factorisations 2² × 3 and 2 × 3². Which statement is true?",
   opts:["Their product is 2³ × 3³ = 216","Their product is 2² × 3² = 36","They have the same prime factors only","Their sum equals 2³ × 3²"],c:0,
   e:"(2²×3) × (2×3²) = 2^(2+1) × 3^(1+2) = 2³ × 3³ = 8 × 27 = 216."},
  // Greater Depth (Q8–10)
  {q:"A number has prime factorisation 2⁴ × 3 × 5². How many factors does it have?",opts:["30","24","15","18"],c:0,
   e:"To count factors: add 1 to each exponent, then multiply: (4+1)(1+1)(2+1) = 5×2×3 = 30 factors."},
  {q:"Is it possible for two different numbers to have the same prime factorisation?",
   opts:["No — the Fundamental Theorem of Arithmetic states prime factorisation is unique","Yes — many numbers share the same primes","Only if they are multiples of each other","Yes — as long as they use the same primes"],c:0,
   e:"The Fundamental Theorem of Arithmetic states every integer greater than 1 has a UNIQUE prime factorisation. No two different numbers can have the same one."},
  {q:"Find all values of n such that 2ⁿ is a factor of 96.",opts:["n can be 1, 2, 3, or 4","n can be 1, 2, or 3","n can be 1, 2, 3, 4, or 5","n = 4 only"],c:2,
   e:"96 = 2⁵ × 3. So 2¹, 2², 2³, 2⁴ and 2⁵ are all factors. The values of n that make 2ⁿ a factor are n = 1, 2, 3, 4, or 5."}
],

"mi-04-3": [
  // Easy (Q1–3)
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var factor = pickFrom([2,3,4,5,6]);
    var k1 = randInt(2,6), k2 = randInt(2,6);
    // Force k1 and k2 to be coprime so true HCF = factor
    while (k1===k2 || gcd(k1,k2)!==1) { k2 = randInt(2,7); }
    var m1 = factor * k1, m2 = factor * k2;
    var hcf = factor;
    var opts = buildOpts(hcf, [factor*2+1, factor>2?Math.floor(factor/2):factor+1, Math.max(m1,m2)]);
    return { q: 'What is the HCF of ' + m1 + ' and ' + m2 + '?',
             opts: opts, c: 0,
             e: 'HCF of ' + m1 + ' and ' + m2 + ' = ' + hcf + '.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var factor = pickFrom([2,3,4,5,6]);
    var k1 = randInt(2,6), k2 = randInt(2,6);
    while (k1===k2 || gcd(k1,k2)!==1) { k2 = randInt(2,7); }
    var m1 = factor * k1, m2 = factor * k2;
    var hcf = factor;
    var opts = buildOpts(hcf, [factor*2+1, factor>2?Math.floor(factor/2):factor+1, Math.max(m1,m2)]);
    return { q: 'What is the HCF of ' + m1 + ' and ' + m2 + '?',
             opts: opts, c: 0,
             e: 'HCF of ' + m1 + ' and ' + m2 + ' = ' + hcf + '.' };
  }},
  { gen: function() {
    var factor = pickFrom([2,3,4,5,6,8]);
    var mult = randInt(2,4);
    var m1 = factor, m2 = factor * mult;
    var hcf = factor;
    var opts = buildOpts(hcf, [factor*2, Math.floor(factor/2)>1?Math.floor(factor/2):factor+2, m2]);
    return { q: 'HCF(' + m1 + ', ' + m2 + ') = ?',
             opts: opts, c: 0,
             e: 'Factors of ' + m1 + ': include ' + hcf + '. Factors of ' + m2 + ': include ' + hcf + '. HCF = ' + hcf + ' (' + m1 + ' is itself a factor of ' + m2 + ').' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var pairs = [{a:60,b:84,h:12},{a:36,b:48,h:12},{a:24,b:60,h:12},{a:30,b:42,h:6},{a:40,b:56,h:8}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.h, [p.h/2, p.h*2, Math.min(p.a,p.b)]);
    return { q: 'Use prime factorisation to find HCF(' + p.a + ', ' + p.b + ').',
             opts: opts, c: 0,
             e: 'Find shared prime factors with lowest powers. HCF(' + p.a + ',' + p.b + ')=' + p.h + '.' };
  }},
  { gen: function() {
    var pairs = [{a:72,b:120,h:24},{a:48,b:80,h:16},{a:60,b:100,h:20},{a:36,b:90,h:18}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.h, [p.h/2, p.h*2, Math.min(p.a,p.b)]);
    return { q: 'Use prime factorisation to find HCF(' + p.a + ', ' + p.b + ').',
             opts: opts, c: 0,
             e: 'Find shared prime factors with lowest powers. HCF(' + p.a + ',' + p.b + ')=' + p.h + '.' };
  }},
  { gen: function() {
    var pairs = [{a:45,b:75,h:15},{a:30,b:50,h:10},{a:18,b:30,h:6},{a:24,b:40,h:8},{a:28,b:42,h:14}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.h, [p.h/2>1?p.h/2:p.h-1, p.h*2, Math.min(p.a,p.b)]);
    return { q: 'What is HCF(' + p.a + ', ' + p.b + ')?',
             opts: opts, c: 0,
             e: 'The highest common factor of ' + p.a + ' and ' + p.b + ' is ' + p.h + '.' };
  }},
  { gen: function() {
    var factor = pickFrom([4,6,8,10,12]);
    var m1 = factor * randInt(3,7), m2 = factor * randInt(3,7);
    while (m1===m2) m2 = factor * randInt(3,7);
    var hcf = factor;
    var opts = buildOpts(hcf, [factor/2, factor*2, Math.max(m1,m2)]);
    return { q: 'A greengrocer has ' + m1 + ' apples and ' + m2 + ' oranges. She wants to arrange them in equal groups with none left over. What is the largest possible group size?',
             opts: opts, c: 0,
             e: 'HCF(' + m1 + ',' + m2 + ')=' + hcf + '. So ' + hcf + ' is the largest group size.' };
  }},
  // Greater Depth (Q8–10)
  {q:"HCF(a, b) = 12 and LCM(a, b) = 360. If a = 72, what is b?",opts:["60","48","36","120"],c:0,
   e:"Use: HCF × LCM = a × b. 12 × 360 = 72 × b. b = 4,320 ÷ 72 = 60."},
  {q:"Three bells ring every 12, 15 and 20 minutes. If they ring together at noon, when is the next time all three ring together, and what is the HCF of 12, 15 and 20?",
   opts:["HCF=1; next together at LCM time","HCF=3; next at 12:60","HCF=1; rings at 12:60","HCF=5; next at 1:00pm"],c:0,
   e:"HCF(12,15,20): factors of 12=1,2,3,4,6,12; of 15=1,3,5,15; of 20=1,2,4,5,10,20. Only common factor=1. LCM=60 min. Next ring: 1:00pm."},
  {q:"Simplify the fraction 84/120 using the HCF.",opts:["7/10","6/10","14/20","7/12"],c:0,
   e:"HCF(84,120)=12. 84÷12=7; 120÷12=10. Simplified fraction = 7/10."}
],

"mi-04-4": [
  // Easy (Q1–3)
  { gen: function() {
    var pairs = [{a:3,b:4,l:12},{a:4,b:6,l:12},{a:5,b:6,l:30},{a:4,b:10,l:20},{a:6,b:8,l:24},{a:3,b:5,l:15},{a:6,b:9,l:18},{a:4,b:5,l:20}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.l, [p.a*p.b, p.l*2, Math.max(p.a,p.b)]);
    return { q: 'What is the LCM of ' + p.a + ' and ' + p.b + '?',
             opts: opts, c: 0,
             e: 'Multiples of ' + p.a + ' and ' + p.b + ': first common multiple is ' + p.l + '.' };
  }},
  { gen: function() {
    var pairs = [{a:3,b:4,l:12},{a:4,b:6,l:12},{a:5,b:6,l:30},{a:4,b:10,l:20},{a:6,b:8,l:24},{a:3,b:5,l:15},{a:6,b:9,l:18},{a:4,b:5,l:20}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.l, [p.a*p.b, p.l*2, Math.max(p.a,p.b)]);
    return { q: 'What is the LCM of ' + p.a + ' and ' + p.b + '?',
             opts: opts, c: 0,
             e: 'Multiples of ' + p.a + ' and ' + p.b + ': first common multiple is ' + p.l + '.' };
  }},
  { gen: function() {
    var pairs = [{a:3,b:4,l:12},{a:4,b:6,l:12},{a:5,b:6,l:30},{a:4,b:10,l:20},{a:6,b:8,l:24},{a:3,b:5,l:15},{a:6,b:9,l:18},{a:4,b:5,l:20}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.l, [p.a*p.b, p.l*2, Math.max(p.a,p.b)]);
    return { q: 'What is the LCM of ' + p.a + ' and ' + p.b + '?',
             opts: opts, c: 0,
             e: 'Multiples of ' + p.a + ' and ' + p.b + ': first common multiple is ' + p.l + '.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var pairs = [{a:12,b:18,l:36},{a:8,b:12,l:24},{a:10,b:15,l:30},{a:6,b:10,l:30}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.l, [p.a*p.b, p.l/2, Math.max(p.a,p.b)]);
    return { q: 'Use prime factorisation to find LCM(' + p.a + ', ' + p.b + ').',
             opts: opts, c: 0,
             e: 'Take the highest power of each prime factor. LCM(' + p.a + ',' + p.b + ')=' + p.l + '.' };
  }},
  { gen: function() {
    var pairs = [{a:20,b:30,l:60},{a:12,b:20,l:60},{a:15,b:20,l:60},{a:10,b:25,l:50}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.l, [p.a*p.b, p.l/2, Math.max(p.a,p.b)]);
    return { q: 'Use prime factorisation to find LCM(' + p.a + ', ' + p.b + ').',
             opts: opts, c: 0,
             e: 'Take the highest power of each prime factor. LCM(' + p.a + ',' + p.b + ')=' + p.l + '.' };
  }},
  { gen: function() {
    var triples = [{a:8,b:12,c:15,l:120},{a:4,b:6,c:10,l:60},{a:3,b:4,c:6,l:12},{a:6,b:9,c:12,l:36}];
    var t = pickFrom(triples);
    var opts = buildOpts(t.l, [t.l/2, t.l*2, t.a*t.b]);
    return { q: 'What is the LCM of ' + t.a + ', ' + t.b + ' and ' + t.c + '?',
             opts: opts, c: 0,
             e: 'LCM(' + t.a + ',' + t.b + ',' + t.c + ')=' + t.l + '. Take the highest power of each prime factor.' };
  }},
  { gen: function() {
    var pairs = [{a:12,b:8,l:24},{a:15,b:10,l:30},{a:6,b:9,l:18},{a:12,b:9,l:36}];
    var p = pickFrom(pairs);
    var mins = p.l;
    var startH = 10, startM = 0;
    var endM = (startM + mins) % 60;
    var endH = startH + Math.floor((startM + mins)/60);
    var endStr = endH + ':' + (endM < 10 ? '0' + endM : endM) + 'am';
    var wrong1H = startH, wrong1M = startM + Math.min(p.a,p.b);
    var opts = buildOpts(endStr, [startH + ':' + (startM+Math.min(p.a,p.b) < 10 ? '0'+(startM+Math.min(p.a,p.b)) : startM+Math.min(p.a,p.b)) + 'am', startH + ':' + (startM+Math.max(p.a,p.b) < 10 ? '0'+(startM+Math.max(p.a,p.b)) : startM+Math.max(p.a,p.b)) + 'am', startH + ':' + (startM+p.l*2 < 60 ? (startM+p.l*2 < 10 ? '0'+(startM+p.l*2) : startM+p.l*2) : (startM+p.l*2-60 < 10 ? '0'+(startM+p.l*2-60) : startM+p.l*2-60)) + 'am']);
    return { q: 'A bus stops every ' + p.a + ' minutes and another every ' + p.b + ' minutes. Both stop together at 10:00am. When do they next stop together?',
             opts: opts, c: 0,
             e: 'LCM(' + p.a + ',' + p.b + ')=' + mins + ' minutes. 10:00am + ' + mins + ' min = ' + endStr + '.' };
  }},
  // Greater Depth (Q8–10)
  {q:"HCF(a,b)=6 and LCM(a,b)=60. What are two possible values for a and b?",
   opts:["12 and 30","6 and 60","18 and 20","24 and 15"],c:0,
   e:"HCF×LCM = a×b → 6×60=360. Need two multiples of 6 whose product=360 and HCF=6. 12×30=360 ✓, HCF(12,30)=6 ✓."},
  {q:"To add the fractions 5/12 and 7/18, what is the LCD (lowest common denominator)?",
   opts:["36","72","216","18"],c:0,
   e:"LCD = LCM(12,18) = 36. 5/12 = 15/36; 7/18 = 14/36; sum = 29/36."},
  {q:"Three runners complete laps in 6, 8 and 10 minutes. If they start together, after how many minutes will all three be at the start together again?",
   opts:["120 minutes","60 minutes","240 minutes","48 minutes"],c:0,
   e:"LCM(6,8,10): 6=2×3; 8=2³; 10=2×5. LCM=2³×3×5=120. After 120 minutes."}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 4, Island 5 — MULTIPLICATIVE INVERSES
// ══════════════════════════════════════════════════════════════════════════

"mi-04-5": [
  // Easy (Q1–3)
  { gen: function() {
    var n = pickFrom([2,3,4,5,6,7,8,9,10]);
    var opts = buildOpts('1/' + n, ['1/' + (n+1), n + '/1', '1/' + (n-1)]);
    return { q: 'What is the multiplicative inverse (reciprocal) of ' + n + '?',
             opts: opts, c: 0,
             e: 'The reciprocal of ' + n + ' is 1/' + n + '. Check: ' + n + ' × 1/' + n + ' = 1.' };
  }},
  { gen: function() {
    var nums = [{n:2,d:3,rn:3,rd:2},{n:1,d:4,rn:4,rd:1},{n:3,d:5,rn:5,rd:3},{n:2,d:7,rn:7,rd:2},{n:5,d:6,rn:6,rd:5},{n:3,d:8,rn:8,rd:3}];
    var f = pickFrom(nums);
    var opts = buildOpts(f.rn + '/' + f.rd, [f.n + '/' + f.d, f.rd + '/' + f.rn, '1/' + f.d]);
    return { q: 'What is the reciprocal of ' + f.n + '/' + f.d + '?',
             opts: opts, c: 0,
             e: 'Flip the fraction: reciprocal of ' + f.n + '/' + f.d + ' = ' + f.rn + '/' + f.rd + '. Check: ' + f.n + '/' + f.d + ' × ' + f.rn + '/' + f.rd + ' = 1.' };
  }},
  { gen: function() {
    var n = pickFrom([2,3,4,5,8,10]);
    var opts = buildOpts('1', ['' + n, '0', '1/' + n]);
    return { q: 'What is ' + n + ' × 1/' + n + '?',
             opts: opts, c: 0,
             e: 'A number times its reciprocal always equals 1. ' + n + ' × 1/' + n + ' = ' + n + '/' + n + ' = 1.' };
  }},
  // Medium (Q4–7)
  { gen: function() {
    var pairs = [{d:0.5,r:'2'},{d:0.25,r:'4'},{d:0.2,r:'5'},{d:0.1,r:'10'},{d:0.125,r:'8'}];
    var p = pickFrom(pairs);
    var opts = buildOpts(p.r, ['' + p.d, '1/' + p.r, '' + (1/p.d + 1)]);
    return { q: 'What is the reciprocal of ' + p.d + '?',
             opts: opts, c: 0,
             e: p.d + ' = 1/' + p.r + ', so the reciprocal is ' + p.r + '/1 = ' + p.r + '. Check: ' + p.d + ' × ' + p.r + ' = 1.' };
  }},
  { gen: function() {
    var pairs = [{n:1,d:3,w:3},{n:1,d:5,w:5},{n:1,d:8,w:8},{n:1,d:6,w:6},{n:1,d:7,w:7}];
    var p = pickFrom(pairs);
    var opts = buildOpts('' + p.w, ['1/' + p.w, '' + p.d, '' + (p.w+1)]);
    return { q: 'Find the reciprocal of 1/' + p.d + '.',
             opts: opts, c: 0,
             e: 'Flip the fraction: reciprocal of 1/' + p.d + ' = ' + p.d + '/1 = ' + p.w + '. Check: 1/' + p.d + ' × ' + p.w + ' = 1.' };
  }},
  { gen: function() {
    var nums = [{n:2,d:3,rn:3,rd:2},{n:3,d:4,rn:4,rd:3},{n:5,d:7,rn:7,rd:5},{n:4,d:9,rn:9,rd:4}];
    var f = pickFrom(nums);
    var product = f.n * f.rn;
    var denom = f.d * f.rd;
    var opts = buildOpts('1', [f.n + '/' + f.d, '' + product + '/' + denom, '0']);
    return { q: 'Calculate ' + f.n + '/' + f.d + ' × ' + f.rn + '/' + f.rd + '.',
             opts: opts, c: 0,
             e: f.n + '/' + f.d + ' × ' + f.rn + '/' + f.rd + ' = ' + product + '/' + denom + ' = 1. These are reciprocals of each other.' };
  }},
  { gen: function() {
    var nums = [{m:'1⅓',n:4,d:3,rn:3,rd:4,rs:'3/4'},{m:'1½',n:3,d:2,rn:2,rd:3,rs:'2/3'},{m:'2½',n:5,d:2,rn:2,rd:5,rs:'2/5'},{m:'1¼',n:5,d:4,rn:4,rd:5,rs:'4/5'}];
    var f = pickFrom(nums);
    var opts = buildOpts(f.rs, [f.n + '/' + f.d, '1/' + f.n, '' + f.d]);
    return { q: 'What is the reciprocal of ' + f.m + '?',
             opts: opts, c: 0,
             e: 'Convert to improper fraction: ' + f.m + ' = ' + f.n + '/' + f.d + '. Flip: reciprocal = ' + f.rs + '. Check: ' + f.n + '/' + f.d + ' × ' + f.rs + ' = 1.' };
  }},
  // Greater Depth (Q8–10)
  {q:"Why does 0 have no multiplicative inverse?",
   opts:["Because 0 × anything = 0, never 1","Because 0 is not a real number","Because 1/0 = 0","Because 0 is negative"],c:0,
   e:"The multiplicative inverse of n must satisfy n × (1/n) = 1. Since 0 × anything = 0, no number can be multiplied by 0 to give 1. Division by 0 is undefined."},
  { gen: function() {
    var pairs = [{a:6,b:8,h:2,rn:1,rd:24},{a:4,b:9,h:1,rn:1,rd:36},{a:3,b:10,h:1,rn:1,rd:30}];
    var p = pickFrom(pairs);
    var prod = p.a * p.b;
    var opts = buildOpts('1/' + prod, ['1/' + p.a, '1/' + p.b, '' + prod]);
    return { q: 'What is the reciprocal of ' + p.a + ' × ' + p.b + '?',
             opts: opts, c: 0,
             e: p.a + ' × ' + p.b + ' = ' + prod + '. Reciprocal of ' + prod + ' = 1/' + prod + '. Check: ' + prod + ' × 1/' + prod + ' = 1.' };
  }},
  {q:"If the reciprocal of a number is 5/8, what is the number?",
   opts:["8/5 (or 1.6)","5/8","3/8","8/3"],c:0,
   e:"If the reciprocal is 5/8, the original number is the reciprocal of 5/8, which is 8/5. Check: 8/5 × 5/8 = 40/40 = 1 ✓."}
],

"mi-03-5": [
  // Easy (Q1–3)
  {q:"Write 6,000,000 in standard form.",opts:["6 × 10⁶","60 × 10⁵","6 × 10⁷","0.6 × 10⁷"],c:0,
   e:"6,000,000 has 6 zeros after the 6. Move the decimal 6 places left: 6.0 × 10⁶."},
  {q:"Write 0.005 in standard form.",opts:["5 × 10⁻³","5 × 10³","0.5 × 10⁻²","50 × 10⁻⁴"],c:0,
   e:"Move the decimal 3 places right to get 5. Since we moved right, the power is negative: 5 × 10⁻³."},
  {q:"Convert 2.7 × 10⁴ to an ordinary number.",opts:["27,000","2,700","270,000","2.7"],c:0,
   e:"10⁴ = 10,000. Move decimal 4 places right: 2.7 → 27,000."},
  // Medium (Q4–6)
  {q:"Which of these is written in correct standard form?",opts:["3.6 × 10⁵","36 × 10⁴","0.36 × 10⁶","360 × 10³"],c:0,
   e:"In standard form, A must be between 1 and 10. Only 3.6 satisfies 1 ≤ A < 10."},
  {q:"Convert 8.04 × 10⁻² to an ordinary number.",opts:["0.0804","80.4","0.00804","804"],c:0,
   e:"Negative power means move decimal left. 10⁻² means 2 places left: 8.04 → 0.0804."},
  {q:"Write 0.00071 in standard form.",opts:["7.1 × 10⁻⁴","71 × 10⁻⁵","0.71 × 10⁻³","7.1 × 10⁴"],c:0,
   e:"Move the decimal 4 places right: 0.00071 → 7.1. Power is negative: 7.1 × 10⁻⁴."},
  // Greater Depth (Q7–8)
  {q:"Place in order from smallest to largest: 4.2 × 10³, 1.8 × 10⁴, 9.1 × 10²",
   opts:["9.1 × 10², 4.2 × 10³, 1.8 × 10⁴","4.2 × 10³, 9.1 × 10², 1.8 × 10⁴","1.8 × 10⁴, 4.2 × 10³, 9.1 × 10²","9.1 × 10², 1.8 × 10⁴, 4.2 × 10³"],c:0,
   e:"Convert: 910, 4200, 18000. Order: 910 < 4200 < 18000, i.e. 9.1 × 10², 4.2 × 10³, 1.8 × 10⁴."},
  {q:"The Earth is approximately 150,000,000 km from the Sun. Write this in standard form.",
   opts:["1.5 × 10⁸","15 × 10⁷","1.5 × 10⁹","150 × 10⁶"],c:0,
   e:"150,000,000 → 1.5 (moved 8 places). Answer: 1.5 × 10⁸ km."}
]

}); // end Object.assign(QUESTIONS, ...)
