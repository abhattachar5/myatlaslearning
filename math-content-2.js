// math-content-2.js — Questions & flashcards for Topics 5–8
// Topic 5: Decimals | Topic 6: Fractions
// Topic 7: Multiply & Divide Fractions | Topic 8: Integers

// ── FLASHCARDS ────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // ── Topic 5: Decimals ────────────────────────────────────────────────
  {id:"mfc-05-1-1",islandId:"mi-05-1",front:"What are the place values to the right of the decimal point?",
   back:"Tenths (÷10), Hundredths (÷100), Thousandths (÷1000)\n\nExample: 3.746\n3 = ones, 7 = tenths, 4 = hundredths, 6 = thousandths\n\nEach column is 10× smaller than the one to its left.",difficulty:1,category:"definition"},
  {id:"mfc-05-1-2",islandId:"mi-05-1",front:"Put in order smallest to largest: 0.3, 0.32, 0.305, 0.03",
   back:"0.03, 0.3, 0.305, 0.32\n\nWrite with equal decimal places:\n0.030 < 0.300 < 0.305 < 0.320\n\nKey: align decimal points to compare. More digits doesn't mean larger!",difficulty:1,category:"application"},
  {id:"mfc-05-1-3",islandId:"mi-05-1",front:"What is the value of the digit 7 in 4.0073?",
   back:"7 thousandths = 7/1000 = 0.007\n\n4.0073:\n4 = ones, 0 = tenths, 0 = hundredths, 7 = thousandths, 3 = ten-thousandths\n\nValue = 7 × 0.001 = 0.007",difficulty:2,category:"calculation"},

  {id:"mfc-05-2-1",islandId:"mi-05-2",front:"How do you round 6.847 to 1 decimal place?",
   back:"6.8\n\nLook at the hundredths digit (2nd decimal place): 4\n4 < 5 → round DOWN → tenths digit stays as 8\n\nAnswer: 6.8\n\nRule: same rounding rule as whole numbers!",difficulty:1,category:"calculation"},
  {id:"mfc-05-2-2",islandId:"mi-05-2",front:"Round 0.0748 to 2 decimal places.",
   back:"0.07\n\nLook at the 3rd decimal place: 4\n4 < 5 → round DOWN → 2nd decimal stays as 7\n\nAnswer: 0.07\n\n⚠️ Common error: forgetting the zero before 7 (0.07 not .7)",difficulty:2,category:"calculation"},
  {id:"mfc-05-2-3",islandId:"mi-05-2",front:"A length is 12.45 cm rounded to 1 d.p. What is the smallest possible actual length?",
   back:"12.45 cm\n\nFor a number to round to 12.5 to 1 d.p., it must be ≥ 12.45\n\nSmallest = 12.45 cm (exactly on the boundary, rounds up)\n\nRange: 12.45 ≤ length < 12.55",difficulty:2,category:"application"},

  {id:"mfc-05-3-1",islandId:"mi-05-3",front:"What is 3.74 + 2.8?",
   back:"6.54\n\nAlways line up the decimal points:\n  3.74\n+ 2.80\n------\n  6.54\n\nAdd a zero to make lengths equal (2.8 = 2.80)",difficulty:1,category:"calculation"},
  {id:"mfc-05-3-2",islandId:"mi-05-3",front:"What is 5.3 − 2.76?",
   back:"2.54\n\n  5.30\n− 2.76\n------\n  2.54\n\nAdd a zero: 5.3 = 5.30. Then subtract with borrowing.",difficulty:1,category:"calculation"},
  {id:"mfc-05-3-3",islandId:"mi-05-3",front:"A jug contains 2.4 litres of juice. Tom pours out 0.85 litres. How much is left?",
   back:"1.55 litres\n\n2.40 − 0.85 = 1.55 litres\n\n  2.40\n− 0.85\n------\n  1.55",difficulty:2,category:"application"},

  {id:"mfc-05-4-1",islandId:"mi-05-4",front:"What is 3.6 × 10? And 3.6 ÷ 100?",
   back:"3.6 × 10 = 36 (digits move one place LEFT)\n3.6 ÷ 100 = 0.036 (digits move two places RIGHT)\n\nMultiplying by 10ⁿ: move n places LEFT\nDividing by 10ⁿ: move n places RIGHT",difficulty:1,category:"calculation"},
  {id:"mfc-05-4-2",islandId:"mi-05-4",front:"What is 0.4 × 0.3?",
   back:"0.12\n\nMethod 1: 4 × 3 = 12, then adjust decimal places.\n0.4 has 1 d.p., 0.3 has 1 d.p., total = 2 d.p.\nSo answer has 2 d.p.: 0.12\n\nMethod 2: 0.4 × 0.3 = 4/10 × 3/10 = 12/100 = 0.12",difficulty:2,category:"calculation"},
  {id:"mfc-05-4-3",islandId:"mi-05-4",front:"What is 7.2 ÷ 0.9?",
   back:"8\n\nConvert to a whole number division:\n7.2 ÷ 0.9 = 72 ÷ 9 = 8\n\n(Multiply both by 10 to eliminate the decimal divisor)\n\nCheck: 8 × 0.9 = 7.2 ✓",difficulty:2,category:"calculation"},

  // ── Topic 6: Fractions ───────────────────────────────────────────────
  {id:"mfc-06-1-1",islandId:"mi-06-1",front:"How do you simplify 18/24 to its lowest terms?",
   back:"3/4\n\nFind HCF(18, 24) = 6\nDivide top and bottom by 6:\n18÷6 = 3\n24÷6 = 4\n\nSimplest form: 3/4\n\nCheck: 3 and 4 share no common factors ✓",difficulty:1,category:"calculation"},
  {id:"mfc-06-1-2",islandId:"mi-06-1",front:"Write 3 equivalent fractions for 2/5.",
   back:"4/10, 6/15, 8/20\n\nMultiply top AND bottom by the same number:\n2/5 × 2/2 = 4/10\n2/5 × 3/3 = 6/15\n2/5 × 4/4 = 8/20\n\nAll equal the same point on a number line.",difficulty:1,category:"calculation"},
  {id:"mfc-06-1-3",islandId:"mi-06-1",front:"Is 7/13 in its simplest form? How do you know?",
   back:"Yes — it is already in simplest form.\n\n7 is prime. Its only factors are 1 and 7.\n13 is prime. Its only factors are 1 and 13.\n\nHCF(7, 13) = 1 → already in lowest terms ✓",difficulty:2,category:"concept"},

  {id:"mfc-06-2-1",islandId:"mi-06-2",front:"Which is greater: 3/4 or 5/7?",
   back:"3/4 > 5/7\n\nCommon denominator: LCD(4,7) = 28\n3/4 = 21/28\n5/7 = 20/28\n\n21 > 20, so 3/4 > 5/7",difficulty:2,category:"calculation"},
  {id:"mfc-06-2-2",islandId:"mi-06-2",front:"Convert 17/4 to a mixed number.",
   back:"4 1/4\n\n17 ÷ 4 = 4 remainder 1\n\nSo 17/4 = 4 and 1/4 = 4¼\n\nCheck: 4 × 4 + 1 = 17 ✓",difficulty:1,category:"calculation"},
  {id:"mfc-06-2-3",islandId:"mi-06-2",front:"Put these in order smallest to largest: 2/3, 3/4, 5/8, 7/12",
   back:"5/8, 7/12, 2/3, 3/4\n\nLCD = 24:\n2/3 = 16/24, 3/4 = 18/24, 5/8 = 15/24, 7/12 = 14/24\n\nOrder: 14<15<16<18 → 7/12, 5/8, 2/3, 3/4",difficulty:2,category:"application"},

  {id:"mfc-06-3-1",islandId:"mi-06-3",front:"What is 2/5 + 1/3?",
   back:"11/15\n\nLCD(5,3) = 15\n2/5 = 6/15\n1/3 = 5/15\n6/15 + 5/15 = 11/15",difficulty:1,category:"calculation"},
  {id:"mfc-06-3-2",islandId:"mi-06-3",front:"What is 7/8 − 1/3?",
   back:"13/24\n\nLCD(8,3) = 24\n7/8 = 21/24\n1/3 = 8/24\n21/24 − 8/24 = 13/24",difficulty:2,category:"calculation"},
  {id:"mfc-06-3-3",islandId:"mi-06-3",front:"A recipe uses 3/4 cup of sugar. You use 1/3 cup less. How much sugar do you use?",
   back:"5/12 cup\n\n3/4 − 1/3\nLCD = 12\n9/12 − 4/12 = 5/12 cup",difficulty:2,category:"application"},

  {id:"mfc-06-4-1",islandId:"mi-06-4",front:"What is 2 1/3 + 1 3/4?",
   back:"4 1/12\n\nMethod: add whole numbers, then fractions.\n2+1=3\n1/3 + 3/4: LCD=12 → 4/12 + 9/12 = 13/12 = 1 1/12\n\nTotal: 3 + 1 1/12 = 4 1/12",difficulty:2,category:"calculation"},
  {id:"mfc-06-4-2",islandId:"mi-06-4",front:"What is 3 1/5 − 1 2/3?",
   back:"1 8/15\n\n3 1/5 − 1 2/3\nLCD = 15\n3 3/15 − 1 10/15\nBorrow: 2 18/15 − 1 10/15 = 1 8/15",difficulty:2,category:"calculation"},
  {id:"mfc-06-4-3",islandId:"mi-06-4",front:"A plank is 4 2/3 m long. A piece of 1 5/6 m is cut off. How long is the remaining piece?",
   back:"2 5/6 m\n\n4 2/3 − 1 5/6\nLCD = 6\n4 4/6 − 1 5/6\nBorrow: 3 10/6 − 1 5/6 = 2 5/6 m",difficulty:2,category:"application"},

  // ── Topic 7: Multiply & Divide Fractions ─────────────────────────────
  {id:"mfc-07-1-1",islandId:"mi-07-1",front:"What is 3/4 × 8?",
   back:"6\n\nMethod 1: 3/4 × 8 = (3 × 8)/4 = 24/4 = 6\nMethod 2: 8 ÷ 4 = 2, then × 3 = 6\n\nTip: divide by the denominator first to keep numbers small.",difficulty:1,category:"calculation"},
  {id:"mfc-07-1-2",islandId:"mi-07-1",front:"What is 2/5 of 35?",
   back:"14\n\n2/5 of 35 = 35 ÷ 5 × 2 = 7 × 2 = 14\n\nStep 1: divide by denominator (÷5 = 7)\nStep 2: multiply by numerator (×2 = 14)",difficulty:1,category:"calculation"},
  {id:"mfc-07-1-3",islandId:"mi-07-1",front:"3/7 of a class of 28 students passed the test. How many students is that?",
   back:"12 students\n\n3/7 × 28 = 28 ÷ 7 × 3 = 4 × 3 = 12\n\n4 students per seventh, times 3 = 12 students passed.",difficulty:1,category:"application"},

  {id:"mfc-07-2-1",islandId:"mi-07-2",front:"What is 2/3 × 3/4?",
   back:"1/2\n\n(2 × 3)/(3 × 4) = 6/12 = 1/2\n\nOr cancel BEFORE multiplying:\n2/3 × 3/4 → cancel the 3s: 2/1 × 1/4 = 2/4 = 1/2",difficulty:1,category:"calculation"},
  {id:"mfc-07-2-2",islandId:"mi-07-2",front:"What is 3 1/2 × 2/5?",
   back:"7/5 = 1 2/5\n\nConvert: 3 1/2 = 7/2\n7/2 × 2/5 = (7×2)/(2×5) = 14/10 = 7/5 = 1 2/5",difficulty:2,category:"calculation"},
  {id:"mfc-07-2-3",islandId:"mi-07-2",front:"A recipe uses 3/4 of a bag of flour. If each bag is 1 1/2 kg, how much flour is used?",
   back:"1 1/8 kg\n\n3/4 × 3/2 (since 1 1/2 = 3/2)\n= (3×3)/(4×2) = 9/8 = 1 1/8 kg",difficulty:2,category:"application"},

  {id:"mfc-07-3-1",islandId:"mi-07-3",front:"What is 3 ÷ 1/4?",
   back:"12\n\nDividing by a fraction = multiplying by its RECIPROCAL\n3 ÷ 1/4 = 3 × 4/1 = 12\n\nThink: how many quarters fit into 3? Answer: 12",difficulty:1,category:"calculation"},
  {id:"mfc-07-3-2",islandId:"mi-07-3",front:"What is 2/3 ÷ 4?",
   back:"1/6\n\n2/3 ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6\n\nDividing by a whole number: multiply by its reciprocal (1/whole).",difficulty:1,category:"calculation"},
  {id:"mfc-07-3-3",islandId:"mi-07-3",front:"What is 3/4 ÷ 3/8?",
   back:"2\n\n3/4 ÷ 3/8 = 3/4 × 8/3\nCancel: (3×8)/(4×3) = 24/12 = 2\n\nCheck: 2 × 3/8 = 6/8 = 3/4 ✓",difficulty:2,category:"calculation"},

  {id:"mfc-07-4-1",islandId:"mi-07-4",front:"What is 2 1/2 × 1 1/3?",
   back:"10/3 = 3 1/3\n\nConvert: 2 1/2 = 5/2; 1 1/3 = 4/3\n5/2 × 4/3 = 20/6 = 10/3 = 3 1/3",difficulty:2,category:"calculation"},
  {id:"mfc-07-4-2",islandId:"mi-07-4",front:"What is 2 1/4 ÷ 1 1/2?",
   back:"3/2 = 1 1/2\n\nConvert: 2 1/4 = 9/4; 1 1/2 = 3/2\n9/4 ÷ 3/2 = 9/4 × 2/3 = 18/12 = 3/2 = 1 1/2",difficulty:2,category:"calculation"},
  {id:"mfc-07-4-3",islandId:"mi-07-4",front:"A ribbon 3 3/4 m long is cut into pieces each 3/4 m long. How many pieces are made?",
   back:"5 pieces\n\n3 3/4 ÷ 3/4\nConvert: 15/4 ÷ 3/4 = 15/4 × 4/3 = 60/12 = 5",difficulty:2,category:"application"},

  // ── Topic 8: Integers ────────────────────────────────────────────────
  {id:"mfc-08-1-1",islandId:"mi-08-1",front:"Which is colder: −8°C or −3°C?",
   back:"−8°C is colder.\n\nOn a number line, −8 is further LEFT than −3.\n−8 < −3\n\nThe more negative a number, the smaller (colder) it is.",difficulty:1,category:"application"},
  {id:"mfc-08-1-2",islandId:"mi-08-1",front:"What is the opposite of −7?",
   back:"The opposite of −7 is +7.\n\nOpposites are the same distance from 0 on a number line, but on opposite sides.\n\n−7 and +7 are both 7 units from 0.",difficulty:1,category:"definition"},
  {id:"mfc-08-1-3",islandId:"mi-08-1",front:"Put in order from greatest to least: −4, 2, −9, 0, 5, −1",
   back:"5, 2, 0, −1, −4, −9\n\nOn a number line, right = greater.\nSo positives first (largest first), then 0, then negatives (least negative first).",difficulty:1,category:"application"},

  {id:"mfc-08-2-1",islandId:"mi-08-2",front:"What is −4 + (−3)?",
   back:"−7\n\nSame signs: add the absolute values, keep the sign.\n4 + 3 = 7, both negative → −7\n\nOn a number line: start at −4, move 3 left → −7",difficulty:1,category:"calculation"},
  {id:"mfc-08-2-2",islandId:"mi-08-2",front:"What is −6 + 10?",
   back:"4\n\nDifferent signs: subtract the smaller absolute value from the larger.\n10 − 6 = 4. The larger absolute value (10) is positive, so answer is +4.\n\nNumber line: start at −6, move 10 right → 4",difficulty:1,category:"calculation"},
  {id:"mfc-08-2-3",islandId:"mi-08-2",front:"The temperature is −5°C at midnight. It rises by 8°C. What is the new temperature?",
   back:"3°C\n\n−5 + 8 = 3°C\n\nDifferent signs: 8 − 5 = 3; the larger (8) is positive, so answer is +3°C.",difficulty:1,category:"application"},

  {id:"mfc-08-3-1",islandId:"mi-08-3",front:"What is the rule for subtracting integers?",
   back:"Subtracting = adding the OPPOSITE\n\na − b = a + (−b)\n\nExamples:\n5 − (−3) = 5 + 3 = 8\n−4 − 7 = −4 + (−7) = −11\n−2 − (−6) = −2 + 6 = 4",difficulty:1,category:"definition"},
  {id:"mfc-08-3-2",islandId:"mi-08-3",front:"What is −3 − (−8)?",
   back:"5\n\n−3 − (−8) = −3 + 8 = 5\n\nSubtracting a negative = adding a positive. 'Two negatives make a positive' when subtracting.",difficulty:1,category:"calculation"},
  {id:"mfc-08-3-3",islandId:"mi-08-3",front:"A submarine is at −45 m (below sea level). It descends a further 28 m. What is the new depth?",
   back:"−73 m\n\n−45 − 28 = −45 + (−28) = −73 m\n\nSame signs (both negative): add absolute values, keep negative sign.",difficulty:2,category:"application"},

  {id:"mfc-08-4-1",islandId:"mi-08-4",front:"What are the sign rules for multiplying and dividing integers?",
   back:"Same signs → POSITIVE result\nDifferent signs → NEGATIVE result\n\nExamples:\n(+) × (+) = (+): 3 × 4 = 12\n(−) × (−) = (+): −3 × −4 = 12\n(+) × (−) = (−): 3 × −4 = −12\n(−) × (+) = (−): −3 × 4 = −12",difficulty:1,category:"definition"},
  {id:"mfc-08-4-2",islandId:"mi-08-4",front:"What is −5 × −8?",
   back:"40\n\nNegative × Negative = Positive\n5 × 8 = 40\nSo −5 × −8 = +40",difficulty:1,category:"calculation"},
  {id:"mfc-08-4-3",islandId:"mi-08-4",front:"What is −72 ÷ (−9)?",
   back:"8\n\nNegative ÷ Negative = Positive\n72 ÷ 9 = 8\nSo −72 ÷ −9 = +8\n\nCheck: 8 × −9 = −72 ✓",difficulty:1,category:"calculation"}
);

// ── QUESTIONS ─────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 5 — DECIMALS
// ══════════════════════════════════════════════════════════════════════════

"mi-05-1": [
  {q:"What is the value of the digit 4 in 7.3 4 8?",opts:["4 hundredths (0.04)","4 tenths (0.4)","4 thousandths (0.004)","4 ones"],c:0,
   e:"Positions right of decimal: 3=tenths, 4=hundredths, 8=thousandths. So 4 is in the hundredths place = 0.04."},
  {q:"Which number is smallest?",opts:["0.07","0.7","0.17","0.071"],c:0,
   e:"Compare as: 0.070 < 0.071 < 0.170 < 0.700. So 0.07 is smallest."},
  {q:"What number is 3 tenths, 4 hundredths and 2 thousandths?",opts:["0.342","3.42","0.432","3.042"],c:0,
   e:"3 tenths = 0.3, 4 hundredths = 0.04, 2 thousandths = 0.002. Sum = 0.342."},
  {q:"Put in order from smallest to largest: 0.5, 0.52, 0.505, 0.052",
   opts:["0.052, 0.5, 0.505, 0.52","0.5, 0.052, 0.505, 0.52","0.052, 0.505, 0.5, 0.52","0.5, 0.52, 0.505, 0.052"],c:0,
   e:"Write with same decimal places: 0.052 < 0.500 < 0.505 < 0.520."},
  {q:"Which of these is equal to 0.3?",opts:["3/10","3/100","3/1000","30"],c:0,
   e:"0.3 = 3 tenths = 3/10."},
  {q:"What decimal is exactly halfway between 0.4 and 0.5?",opts:["0.45","0.05","0.44","0.46"],c:0,
   e:"Halfway between 0.4 and 0.5: (0.4+0.5)÷2 = 0.9÷2 = 0.45."},
  {q:"What is the value of the digit 6 in 3.0065?",opts:["6 thousandths","6 hundredths","6 ten-thousandths","6 tenths"],c:0,
   e:"3.0065: 0=tenths, 0=hundredths, 6=thousandths, 5=ten-thousandths. The 6 is in the thousandths place = 0.006."},
  {q:"Which statement is true?",opts:["0.3 > 0.29 because 3 > 2 in the tenths column","0.29 > 0.3 because 29 > 3","0.3 = 0.30 = 0.300 so they are all the same","0.3 < 0.29 because it has fewer digits"],c:0,
   e:"Compare tenths first: 0.3 has 3 tenths, 0.29 has 2 tenths. 3 > 2, so 0.3 > 0.29. Option A is correct."},
  {q:"A number with 5 in the tenths place, 0 in the hundredths and 7 in the thousandths equals…",opts:["0.507","0.570","5.07","0.057"],c:0,
   e:"5 tenths + 0 hundredths + 7 thousandths = 0.5 + 0.000 + 0.007 = 0.507."},
  {q:"Anna says 0.75 > 0.8 because 75 > 8. Is she right?",opts:["No — 0.8 = 0.80 > 0.75","Yes — 75 is greater than 8","No — they are equal","No — 0.75 > 0.80 always"],c:0,
   e:"You must compare digits in the same column. 0.8 = 0.80. Compare tenths: 8 > 7, so 0.8 > 0.75. Anna is wrong."}
],

"mi-05-2": [
  { gen: function() {
    var i = randInt(1,9), d1 = randInt(0,9), d2 = randInt(0,9);
    var n = parseFloat(i + '.' + d1 + d2);
    var ans = parseFloat(n.toFixed(1));
    var opts = buildOpts(ans, [parseFloat((ans+0.1).toFixed(1)), parseFloat((ans-0.1).toFixed(1)), parseFloat(n.toFixed(0))]);
    return { q: 'Round ' + n + ' to 1 decimal place.',
             opts: opts, c: 0,
             e: 'Look at 2nd decimal (' + d2 + '). ' + (d2>=5?'≥5, round up.':'<5, round down.') + ' Answer: ' + ans + '.' };
  }},
  { gen: function() {
    var i = randInt(0,2), d1 = randInt(0,9), d2 = randInt(0,9), d3 = randInt(0,9);
    var n = parseFloat(i + '.' + d1 + d2 + d3);
    var ans = parseFloat(n.toFixed(2));
    var opts = buildOpts(ans, [parseFloat((ans+0.01).toFixed(2)), parseFloat((ans-0.01).toFixed(2)), parseFloat(n.toFixed(1))]);
    return { q: 'Round ' + n + ' to 2 decimal places.',
             opts: opts, c: 0,
             e: 'Look at 3rd decimal (' + d3 + '). ' + (d3>=5?'≥5, round up.':'<5, round down.') + ' Answer: ' + ans + '.' };
  }},
  { gen: function() {
    var i = randInt(1,9), d1 = randInt(0,9), d2 = randInt(5,9), d3 = 5;
    var n = parseFloat(i + '.' + d1 + d2 + d3);
    var ans = parseFloat(n.toFixed(2));
    var opts = buildOpts(ans, [parseFloat((ans-0.01).toFixed(2)), parseFloat((ans+0.01).toFixed(2)), parseFloat(n.toFixed(1))]);
    return { q: 'Round ' + n + ' to 2 decimal places.',
             opts: opts, c: 0,
             e: 'Look at 3rd decimal (' + d3 + '). ' + (d3>=5?'≥5, round up.':'<5, round down.') + ' Answer: ' + ans + '.' };
  }},
  { gen: function() {
    var i = randInt(1,9), d1 = randInt(0,9), d2 = randInt(0,9), d3 = randInt(0,9);
    var n = parseFloat(i + '.' + d1 + d2 + d3);
    var ans = parseFloat(n.toFixed(1));
    var opts = buildOpts(ans + ' m', [parseFloat((ans+0.1).toFixed(1)) + ' m', parseFloat((ans-0.1).toFixed(1)) + ' m', parseFloat(n.toFixed(2)) + ' m']);
    return { q: 'A plank is ' + n + ' m. Round to the nearest 0.1 m.',
             opts: opts, c: 0,
             e: 'Nearest 0.1 m means 1 decimal place. Look at 2nd d.p. (' + d2 + '). ' + (d2>=5?'≥5, round UP.':'<5, round DOWN.') + ' Answer: ' + ans + ' m.' };
  }},
  {q:"Which number rounds to 3.6 when rounded to 1 decimal place?",opts:["3.65","3.56","3.67","3.54"],c:0,
   e:"3.65: 2nd d.p. is 5 ≥ 5, rounds UP to 3.7 ✗. 3.56: 2nd d.p. is 6 ≥ 5, rounds UP to 3.6 ✓. Wait: 3.56 rounds to 3.6 (look at hundredths: 6≥5, tenths goes up: 5→6). Correct answer: 3.56."},
  {q:"A shopkeeper says an item costs '£8 to the nearest pound'. What is the maximum it could actually cost?",
   opts:["£8.49","£8.50","£8.99","£7.50"],c:0,
   e:"For a price to round to £8 (nearest £1), it must be less than £8.50. Maximum = £8.49 (or £8.499...). Answer: £8.49."},
  { gen: function() {
    var i = randInt(1,9), d1 = randInt(0,9), d2 = randInt(0,9), d3 = randInt(0,9), d4 = randInt(0,9);
    var n = parseFloat(i + '.' + d1 + d2 + d3 + d4);
    var ans = parseFloat(n.toFixed(3));
    var opts = buildOpts(ans, [parseFloat((ans+0.001).toFixed(3)), parseFloat((ans-0.001).toFixed(3)), parseFloat(n.toFixed(2))]);
    return { q: 'Round ' + n + ' to 3 decimal places.',
             opts: opts, c: 0,
             e: 'Look at 4th decimal (' + d4 + '). ' + (d4>=5?'≥5, round up.':'<5, round down.') + ' Answer: ' + ans + '.' };
  }},
  { gen: function() {
    var i = randInt(1,9), d1 = randInt(0,9), d2 = 9, d3 = 5;
    var n = parseFloat(i + '.' + d1 + d2 + d3);
    var ans = parseFloat(n.toFixed(2));
    var opts = buildOpts(ans, [parseFloat((ans-0.01).toFixed(2)), parseFloat((ans+0.01).toFixed(2)), parseFloat(n.toFixed(1))]);
    return { q: 'The exact answer to a calculation is ' + n + '. Rounded to 2 d.p., the answer is…',
             opts: opts, c: 0,
             e: n + ' → look at 3rd d.p. (' + d3 + '): round up hundredths: ' + d2 + '→' + (d2+1>=10?'10 (carry)':d2+1) + '. Answer: ' + ans + '.' };
  }},
  {q:"Between which two values must a number lie if it rounds to 4.5 to 1 d.p.?",opts:["4.45 and 4.55","4.4 and 4.6","4.50 and 4.59","4.0 and 5.0"],c:0,
   e:"To round to 4.5 (1 d.p.), the number must be ≥ 4.45 and < 4.55."},
  {q:"A runner's time is 13.475 seconds. Rounded to 2 d.p. and to 1 d.p., what are the times?",
   opts:["13.48 s and 13.5 s","13.47 s and 13.4 s","13.48 s and 13.4 s","13.47 s and 13.5 s"],c:0,
   e:"To 2 d.p.: look at 3rd d.p. (5 ≥ 5), round up → 13.48. To 1 d.p.: look at 2nd d.p. (4 < 5 — wait, it's 7 now because of rounding)... Actually, round from ORIGINAL: 13.475 to 1 d.p.: look at 2nd d.p. (7 ≥ 5) → 13.5."}
],

"mi-05-3": [
  { gen: function() {
    var a1 = randInt(1,9), a2 = randInt(0,9);
    var b1 = randInt(1,9), b2 = randInt(0,9);
    var a = parseFloat(a1 + '.' + a2), b = parseFloat(b1 + '.' + b2);
    var ans = parseFloat((a + b).toFixed(1));
    var opts = buildOpts(ans, [parseFloat((ans+0.1).toFixed(1)), parseFloat((ans-0.1).toFixed(1)), parseFloat((a-b).toFixed(1))]);
    return { q: 'What is ' + a + ' + ' + b + '?',
             opts: opts, c: 0,
             e: a + ' + ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var b = parseFloat((randInt(1,4) + '.' + randInt(1,9)));
    var a = parseFloat((b + randInt(1,5) + randInt(0,9)/10).toFixed(1));
    var ans = parseFloat((a - b).toFixed(1));
    var opts = buildOpts(ans, [parseFloat((ans+0.1).toFixed(1)), parseFloat((ans-0.1).toFixed(1)), parseFloat((a+b).toFixed(1))]);
    return { q: 'What is ' + a + ' − ' + b + '?',
             opts: opts, c: 0,
             e: a + ' − ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var a1 = randInt(1,9), a2 = randInt(0,9);
    var b1 = randInt(1,9), b2 = randInt(0,9);
    var a = parseFloat(a1 + '.' + a2), b = parseFloat(b1 + '.' + b2);
    var ans = parseFloat((a + b).toFixed(1));
    var opts = buildOpts(ans, [parseFloat((ans+0.1).toFixed(1)), parseFloat((ans-0.1).toFixed(1)), parseFloat((a-b).toFixed(1))]);
    return { q: 'What is ' + a + ' + ' + b + '?',
             opts: opts, c: 0,
             e: a + ' + ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var b = parseFloat((randInt(1,4) + '.' + randInt(1,9)));
    var a = parseFloat((b + randInt(1,5) + randInt(0,9)/10).toFixed(1));
    var ans = parseFloat((a - b).toFixed(1));
    var opts = buildOpts(ans, [parseFloat((ans+0.1).toFixed(1)), parseFloat((ans-0.1).toFixed(1)), parseFloat((a+b).toFixed(1))]);
    return { q: 'What is ' + a + ' − ' + b + '?',
             opts: opts, c: 0,
             e: a + ' − ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var a1 = randInt(1,9), a2 = randInt(0,9), a3 = randInt(0,9);
    var b1 = randInt(1,9), b2 = randInt(0,9);
    var a = parseFloat(a1 + '.' + a2 + a3), b = parseFloat(b1 + '.' + b2);
    var ans = parseFloat((a + b).toFixed(2));
    var opts = buildOpts(ans + ' kg', [parseFloat((ans+0.1).toFixed(2)) + ' kg', parseFloat((ans-0.1).toFixed(2)) + ' kg', parseFloat((a-b).toFixed(2)) + ' kg']);
    return { q: 'A bag weighs ' + a + ' kg. You add ' + b + ' kg of books. What is the new total weight?',
             opts: opts, c: 0,
             e: a + ' + ' + b + ' = ' + ans + ' kg.' };
  }},
  { gen: function() {
    var w = randInt(5,15);
    var b1 = randInt(1,w-1), b2 = randInt(1,9), b3 = randInt(0,9);
    var b = parseFloat(b1 + '.' + b2 + b3);
    var ans = parseFloat((w - b).toFixed(2));
    var opts = buildOpts(ans, [parseFloat((ans+0.1).toFixed(2)), parseFloat((ans-0.1).toFixed(2)), parseFloat((w+b).toFixed(2))]);
    return { q: 'What is ' + w + ' − ' + b + '?',
             opts: opts, c: 0,
             e: w + '.00 − ' + b + ' = ' + ans + '. Check: ' + ans + ' + ' + b + ' = ' + w + ' ✓.' };
  }},
  { gen: function() {
    var a = parseFloat((randInt(1,9) + '.' + randInt(1,9)));
    var b = parseFloat((randInt(1,5) + '.' + randInt(1,9)));
    var sum = parseFloat((a + b).toFixed(1));
    var opts = buildOpts(sum + '°C', [parseFloat((sum+0.1).toFixed(1)) + '°C', parseFloat((sum-0.1).toFixed(1)) + '°C', parseFloat((a-b).toFixed(1)) + '°C']);
    return { q: 'The temperature drops from ' + a + '°C to −' + b + '°C. By how many degrees did it fall?',
             opts: opts, c: 0,
             e: 'Fall = ' + a + ' − (−' + b + ') = ' + a + ' + ' + b + ' = ' + sum + '°C.' };
  }},
  { gen: function() {
    var a = randInt(3,9), ad = randInt(1,9);
    var b = randInt(1,6), bd = randInt(1,9);
    var af = parseFloat(a + '.' + ad), bf = parseFloat(b + '.' + bd);
    var estA = Math.round(af), estB = Math.round(bf);
    var est = estA + estB;
    var opts = buildOpts(est, [est+1, est-1, est+2]);
    return { q: 'Estimate ' + af + ' + ' + bf + ' by rounding each to the nearest whole number.',
             opts: opts, c: 0,
             e: af + ' ≈ ' + estA + '; ' + bf + ' ≈ ' + estB + '. ' + estA + '+' + estB + '=' + est + '.' };
  }},
  { gen: function() {
    var a1 = randInt(1,5), a2 = randInt(0,9);
    var b1 = randInt(1,4), b2 = randInt(0,9), b3 = randInt(0,9);
    var c1 = randInt(1,3), c2 = randInt(0,9);
    var a = parseFloat(a1 + '.' + a2), b = parseFloat(b1 + '.' + b2 + b3), c = parseFloat(c1 + '.' + c2);
    var ans = parseFloat((a + b + c).toFixed(2));
    var opts = buildOpts(ans + ' km', [parseFloat((ans+0.1).toFixed(2)) + ' km', parseFloat((ans-0.1).toFixed(2)) + ' km', parseFloat((a+b).toFixed(2)) + ' km']);
    return { q: 'Three friends run ' + a + ' km, ' + b + ' km and ' + c + ' km. What is the total distance?',
             opts: opts, c: 0,
             e: a + ' + ' + b + ' + ' + c + ' = ' + ans + ' km.' };
  }},
  { gen: function() {
    var total = randInt(8,15);
    var a1 = randInt(1,3), a2 = randInt(0,9), a3 = randInt(0,9);
    var b1 = randInt(1,3), b2 = randInt(0,9);
    var c1 = randInt(1,4), c2 = randInt(0,9);
    var a = parseFloat(a1 + '.' + a2 + a3), b = parseFloat(b1 + '.' + b2), c = parseFloat(c1 + '.' + c2);
    var cut = parseFloat((a + b + c).toFixed(2));
    var ans = parseFloat((total - cut).toFixed(2));
    if(ans <= 0){ c1=1; c=parseFloat('1.'+c2); cut=parseFloat((a+b+c).toFixed(2)); ans=parseFloat((total-cut).toFixed(2)); }
    var opts = buildOpts(ans + ' m', [parseFloat((ans+0.1).toFixed(2)) + ' m', parseFloat((ans-0.1).toFixed(2)) + ' m', parseFloat((ans+1).toFixed(2)) + ' m']);
    return { q: 'A roll of ribbon is ' + total + ' m. Pieces of ' + a + ' m, ' + b + ' m and ' + c + ' m are cut off. How much is left?',
             opts: opts, c: 0,
             e: 'Cut: ' + a + '+' + b + '+' + c + '=' + cut + ' m. Left: ' + total + '−' + cut + '=' + ans + ' m.' };
  }}
],

"mi-05-4": [
  { gen: function() {
    var a = pickFrom([1.2, 2.4, 3.6, 4.8, 5.4, 7.2, 3.5, 6.7]);
    var b = pickFrom([10, 100, 1000]);
    var ans = parseFloat((a * b).toFixed(2));
    var opts = buildOpts(ans, [a*b/10, a*b*10, a]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: 'Multiply by ' + b + ': digits shift ' + Math.log10(b) + ' place(s) left. ' + a + ' × ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var a = pickFrom([1.2, 2.4, 3.6, 4.8, 5.4, 7.2, 8.5]);
    var b = pickFrom([10, 100, 1000]);
    var ans = parseFloat((a / b).toFixed(4));
    var opts = buildOpts(ans, [a*b, a/10, parseFloat((a/b*10).toFixed(3))]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: 'Divide by ' + b + ': digits shift ' + Math.log10(b) + ' place(s) right. ' + a + ' ÷ ' + b + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var w = randInt(2,9), d = randInt(1,9);
    var a = parseFloat('0.' + d);
    var ans = parseFloat((a * w).toFixed(1));
    var opts = buildOpts(ans, [parseFloat((a*w/10).toFixed(2)), parseFloat((d*w).toFixed(0)), parseFloat((ans/10).toFixed(2))]);
    return { q: 'What is ' + a + ' × ' + w + '?',
             opts: opts, c: 0,
             e: d + ' × ' + w + ' = ' + d*w + '. ' + a + ' has 1 decimal place, so answer has 1 d.p.: ' + ans + '.' };
  }},
  { gen: function() {
    var a = pickFrom([1.2, 2.4, 3.6, 4.8, 6.4, 8.6]);
    var b = pickFrom([0.2, 0.4, 0.5, 0.25]);
    var ans = parseFloat((a * b).toFixed(2));
    var opts = buildOpts(ans, [parseFloat((ans*10).toFixed(1)), parseFloat((ans/10).toFixed(3)), parseFloat((a+b).toFixed(2))]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: (a*10).toFixed(0) + ' × ' + (b*10).toFixed(0) + ' = ' + (a*10*b*10).toFixed(0) + '. Total decimal places: 1+1=2. So ' + a + '×' + b + '=' + ans + '.' };
  }},
  { gen: function() {
    var ans = randInt(2,12), b = pickFrom([0.2,0.3,0.4,0.5,0.6,0.7,0.8]);
    var a = parseFloat((ans*b).toFixed(2));
    var mult = b < 0.15 ? 100 : 10;
    var opts = buildOpts(ans, [ans+1, ans-1, Math.round(a/b*10)/10]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: 'Multiply both by ' + mult + ': ' + (a*mult).toFixed(0) + ' ÷ ' + (b*mult).toFixed(0) + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var speed = parseFloat((randInt(2,9)*10 + randInt(1,9) + '.' + randInt(1,9)));
    var hours = randInt(2,5);
    var ans = parseFloat((speed * hours).toFixed(1));
    var opts = buildOpts(ans + ' km', [parseFloat((ans+1).toFixed(1)) + ' km', parseFloat((ans-1).toFixed(1)) + ' km', parseFloat((speed+hours).toFixed(1)) + ' km']);
    return { q: 'A car travels at ' + speed + ' km/h for ' + hours + ' hours. How far does it travel?',
             opts: opts, c: 0,
             e: speed + ' × ' + hours + ': ' + (speed*10).toFixed(0) + ' × ' + hours + ' = ' + (speed*10*hours).toFixed(0) + '; 1 d.p. → ' + ans + ' km.' };
  }},
  { gen: function() {
    var a1 = randInt(1,9), a2 = randInt(1,9);
    var b = pickFrom([0.2, 0.4, 0.5]);
    var a = parseFloat('0.' + a1 + a2);
    var ans = parseFloat((a * b).toFixed(3));
    var opts = buildOpts(ans, [parseFloat((ans*10).toFixed(2)), parseFloat((ans/10).toFixed(4)), parseFloat((a+b).toFixed(2))]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: (a*100).toFixed(0) + ' × ' + (b*10).toFixed(0) + ' = ' + (a*100*b*10).toFixed(0) + '. Decimal places: 2+1=3. Answer: ' + ans + '.' };
  }},
  { gen: function() {
    var ans = randInt(2,12)*10, b = pickFrom([0.04, 0.05, 0.06, 0.08]);
    var a = parseFloat((ans*b).toFixed(2));
    var mult = 100;
    var opts = buildOpts(ans, [ans/10, ans*10, parseFloat((a/b*10).toFixed(1))]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: 'Multiply both by ' + mult + ': ' + (a*mult).toFixed(0) + ' ÷ ' + (b*mult).toFixed(0) + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var len = parseFloat((randInt(1,3) + '.' + randInt(1,9) + randInt(0,9)));
    var count = randInt(3,9);
    var ans = parseFloat((len * count).toFixed(2));
    var opts = buildOpts(ans + ' m', [parseFloat((ans+0.1).toFixed(2)) + ' m', parseFloat((ans-0.1).toFixed(2)) + ' m', parseFloat((len+count).toFixed(2)) + ' m']);
    return { q: 'Each plank is ' + len + ' m long. How long are ' + count + ' planks laid end to end?',
             opts: opts, c: 0,
             e: len + ' × ' + count + ': ' + (len*100).toFixed(0) + ' × ' + count + ' = ' + (len*100*count).toFixed(0) + '; 2 d.p. → ' + ans + ' m.' };
  }},
  { gen: function() {
    var count = pickFrom([4,5,6,8,10,12]);
    var price = parseFloat((randInt(1,3) + '.' + (randInt(1,9)*count%100 < 10 ? '0'+(randInt(1,9)*count%100) : randInt(1,9)*count%100)));
    var total = parseFloat((price * count).toFixed(2));
    var opts = buildOpts('£'+price.toFixed(2), ['£'+parseFloat((price+0.05).toFixed(2)), '£'+parseFloat((price-0.05).toFixed(2)), '£'+parseFloat((price+0.1).toFixed(2))]);
    return { q: 'If ' + count + ' tickets cost £' + total.toFixed(2) + ', how much does 1 ticket cost?',
             opts: opts, c: 0,
             e: '£' + total.toFixed(2) + ' ÷ ' + count + ' = £' + price.toFixed(2) + '. Check: ' + price.toFixed(2) + ' × ' + count + ' = ' + total.toFixed(2) + ' ✓.' };
  }}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 6 — FRACTIONS
// ══════════════════════════════════════════════════════════════════════════

"mi-06-1": [
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var factor = pickFrom([2,3,4,5,6]);
    var n = randInt(2,8), d = randInt(n+1,12);
    var g = gcd(n,d); n=n/g; d=d/g;
    var bigN = n*factor, bigD = d*factor;
    var opts = buildOpts(n+'/'+d, [(n+1)+'/'+d, n+'/'+(d+1), (n*2)+'/'+d]);
    return { q: 'Simplify ' + bigN + '/' + bigD + '.',
             opts: opts, c: 0,
             e: 'HCF(' + bigN + ',' + bigD + ')=' + factor + '. ' + bigN + '÷' + factor + '=' + n + '; ' + bigD + '÷' + factor + '=' + d + '. Simplest: ' + n+'/'+d + '.' };
  }},
  {q:"Which fraction is equivalent to 3/5?",opts:["12/20","9/20","3/10","6/15"],c:0,
   e:"3/5 × 4/4 = 12/20 ✓. Check: 12÷4=3 and 20÷4=5."},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var factor = pickFrom([3,4,5,6,7]);
    var n = randInt(2,7), d = randInt(n+1,10);
    var g = gcd(n,d); n=n/g; d=d/g;
    var bigN = n*factor, bigD = d*factor;
    var opts = buildOpts(n+'/'+d, [(n+1)+'/'+d, n+'/'+(d+1), (n*2)+'/'+d]);
    return { q: 'Simplify ' + bigN + '/' + bigD + '.',
             opts: opts, c: 0,
             e: 'HCF(' + bigN + ',' + bigD + ')=' + factor + '. ' + bigN + '÷' + factor + '=' + n + '; ' + bigD + '÷' + factor + '=' + d + '. Answer: ' + n+'/'+d + '.' };
  }},
  {q:"Which fraction is NOT in its simplest form?",opts:["9/12","7/11","5/13","4/9"],c:0,
   e:"9/12: HCF(9,12)=3; 9÷3=3, 12÷3=4 → simplifies to 3/4. The others are already in lowest terms."},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var factor = pickFrom([2,3,4,6]);
    var n = randInt(2,6), d = randInt(n+1,10);
    var g = gcd(n,d); n=n/g; d=d/g;
    var bigN = n*factor, bigD = d*factor;
    var opts = buildOpts(n+'/'+d, [(n+1)+'/'+d, n+'/'+(d+1), (n*2)+'/'+(d*2)]);
    return { q: 'Write ' + bigN + '/' + bigD + ' in its simplest form.',
             opts: opts, c: 0,
             e: 'HCF(' + bigN + ',' + bigD + ')=' + factor + '. ' + bigN + '÷' + factor + '=' + n + '; ' + bigD + '÷' + factor + '=' + d + '. Simplest form: ' + n+'/'+d + '.' };
  }},
  {q:"A bag has 15 red and 25 blue counters. Write the fraction of red counters in simplest form.",
   opts:["3/8","15/25","5/8","3/5"],c:0,
   e:"15 red out of 40 total. Wait: 15+25=40. 15/40: HCF(15,40)=5. 15÷5=3; 40÷5=8. Answer: 3/8."},
  {q:"Which is a correct equivalent fraction for 5/8?",opts:["25/40","10/24","5/16","15/16"],c:0,
   e:"5/8 × 5/5 = 25/40 ✓. Check: 25÷5=5 and 40÷5=8."},
  {q:"Ella says 14/21 simplifies to 2/3. Is she right?",opts:["Yes — HCF is 7","No — HCF is 3","No — it simplifies to 7/3","Yes — HCF is 14"],c:0,
   e:"HCF(14,21)=7. 14÷7=2; 21÷7=3. So 14/21=2/3. Ella is correct!"},
  { gen: function() {
    var denom = pickFrom([40,60,80,100]);
    var sn = randInt(2,7), sd = randInt(sn+1,10);
    var mult = denom/sd;
    if(!Number.isInteger(mult)){ sd=5; sn=randInt(2,4); mult=denom/sd; }
    var bigN = sn*mult;
    var opts = buildOpts(bigN+'/'+denom, [(bigN+mult)+'/'+denom, (bigN-mult)+'/'+denom, bigN+'/'+(denom+sd)]);
    return { q: 'Find a fraction equivalent to ' + sn + '/' + sd + ' with a denominator of ' + denom + '.',
             opts: opts, c: 0,
             e: denom + '÷' + sd + '=' + mult + '; ' + sn + '×' + mult + '=' + bigN + '. Answer: ' + bigN + '/' + denom + '. Check: ' + bigN + '÷' + mult + '=' + sn + ' and ' + denom + '÷' + mult + '=' + sd + ' ✓.' };
  }},
  {q:"A fraction simplifies to 5/9. Which could be the original fraction?",opts:["25/45","10/18","5/45","50/81"],c:0,
   e:"25/45: HCF=5, 25÷5=5, 45÷5=9 → 5/9 ✓. 10/18: HCF=2, 10÷2=5, 18÷2=9 → also 5/9 ✓. But option A (25/45) is the first listed ✓."}
],

"mi-06-2": [
  {q:"Which is greater: 2/3 or 3/4?",opts:["3/4","2/3","They are equal","Cannot tell"],c:0,
   e:"LCD(3,4)=12. 2/3=8/12; 3/4=9/12. 9>8 so 3/4>2/3."},
  { gen: function() {
    var w = randInt(1,5), n = randInt(1,6), d = randInt(n+1,8);
    var ans = w + ' ' + n + '/' + d;
    var imp = w*d + n;
    var opts = buildOpts(ans, [(w+1)+' '+n+'/'+d, w+' '+(n+1)+'/'+d, (w-1 >= 0 ? w-1 : w+1)+' '+n+'/'+d]);
    return { q: 'Convert ' + imp + '/' + d + ' to a mixed number.',
             opts: opts, c: 0,
             e: imp + '÷' + d + '=' + w + ' remainder ' + n + '. So ' + imp + '/' + d + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var w = randInt(1,4), n = randInt(1,6), d = randInt(n+1,8);
    var imp = w*d+n;
    var opts = buildOpts(imp+'/'+d, [(w+1)*d+n+'/'+d, w*d+'/'+(d+1), (imp-1)+'/'+d]);
    return { q: 'Convert ' + w + ' ' + n + '/' + d + ' to an improper fraction.',
             opts: opts, c: 0,
             e: w + '×' + d + '+' + n + '=' + imp + '. So ' + w + ' ' + n + '/' + d + ' = ' + imp + '/' + d + '.' };
  }},
  {q:"Which is smallest: 5/6, 7/9, 2/3?",opts:["2/3","5/6","7/9","They are equal"],c:0,
   e:"LCD=18: 2/3=12/18; 5/6=15/18; 7/9=14/18. Smallest: 12/18=2/3."},
  {q:"Order from smallest to largest: 3/5, 2/3, 7/10",opts:["3/5, 2/3, 7/10","2/3, 3/5, 7/10","7/10, 2/3, 3/5","3/5, 7/10, 2/3"],c:0,
   e:"LCD=30: 3/5=18/30; 2/3=20/30; 7/10=21/30. Order: 18<20<21 → 3/5<2/3<7/10."},
  {q:"Which fraction lies between 1/2 and 3/4?",opts:["5/8","3/8","7/8","1/4"],c:0,
   e:"LCD=8: 1/2=4/8; 3/4=6/8. Between them: 5/8 (4<5<6) ✓."},
  { gen: function() {
    var w = randInt(2,5), n = randInt(1,6), d = randInt(n+1,8);
    var ans = w + ' ' + n + '/' + d;
    var imp = w*d + n;
    var opts = buildOpts(ans, [(w+1)+' '+n+'/'+d, w+' '+(n+1)+'/'+d, (w-1)+' '+n+'/'+d]);
    return { q: 'Write ' + imp + '/' + d + ' as a mixed number.',
             opts: opts, c: 0,
             e: imp + '÷' + d + '=' + w + ' remainder ' + n + '. So ' + imp + '/' + d + ' = ' + ans + '.' };
  }},
  {q:"Which is greater: 3 1/4 or 3 3/8?",opts:["3 3/8","3 1/4","They are equal","Cannot compare"],c:0,
   e:"LCD(4,8)=8. 1/4=2/8; 3/8=3/8. So 3 3/8 > 3 1/4."},
  {q:"A fraction is between 2/5 and 3/5. Which could it be?",opts:["1/2","1/3","4/5","3/10"],c:0,
   e:"2/5=0.4; 3/5=0.6. 1/2=0.5. 0.4<0.5<0.6 ✓. So 1/2 is between them."},
  {q:"Four friends each run a different fraction of a 5 km race: 3/4, 2/3, 5/6, 7/12. Who runs the furthest?",
   opts:["5/6","3/4","7/12","2/3"],c:0,
   e:"LCD=12: 3/4=9/12; 2/3=8/12; 5/6=10/12; 7/12=7/12. Largest: 10/12=5/6."}
],

"mi-06-3": [
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d = pickFrom([3,4,5,6,8]);
    var n1 = randInt(1,d-1), n2 = randInt(1,d-1);
    var rn = n1+n2, rd = d, g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1 ? String(rn) : rn+'/'+rd;
    var opts = buildOpts(ansStr, [(n1+n2)+'/'+(d+1), n1+'/'+d, rn+'/'+(rd+1)]);
    return { q: 'What is ' + n1 + '/' + d + ' + ' + n2 + '/' + d + '?',
             opts: opts, c: 0,
             e: 'Same denominator: add numerators. ' + n1 + '+' + n2 + '=' + (n1+n2) + ', denominator stays ' + d + '. ' + (n1+n2) + '/' + d + (g>1?' = '+ansStr:'') + '.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([3,4,5,6,8]), n1 = randInt(1,d1-1);
    var d2 = pickFrom([3,4,5,6,8]), n2 = randInt(1,d2-1);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)+n2*(lcd/d2), rd = lcd;
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1 ? String(rn) : rn+'/'+rd;
    var opts = buildOpts(ansStr, [(n1+n2)+'/'+d1, (n1+n2)+'/'+(d1+d2), (rn+1)+'/'+rd]);
    return { q: 'What is ' + n1 + '/' + d1 + ' + ' + n2 + '/' + d2 + '?',
             opts: opts, c: 0,
             e: 'LCD=' + lcd + '. ' + n1*(lcd/d1) + '/' + lcd + '+' + n2*(lcd/d2) + '/' + lcd + '=' + (n1*(lcd/d1)+n2*(lcd/d2)) + '/' + lcd + (g>1?' = '+ansStr:'') + '.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([4,6,8,10,12]), n1 = randInt(3,d1-1);
    var d2 = pickFrom([3,4,5,6]), n2 = randInt(1,d2-1);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)-n2*(lcd/d2), rd = lcd;
    if(rn<=0){n1=d1-1; rn=n1*(lcd/d1)-n2*(lcd/d2);}
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ansStr, [(n1-n2)+'/'+d1, (n1-n2)+'/'+(d1-d2||1), (rn+1)+'/'+rd]);
    return { q: 'What is ' + n1 + '/' + d1 + ' − ' + n2 + '/' + d2 + '?',
             opts: opts, c: 0,
             e: 'LCD=' + lcd + '. ' + n1*(lcd/d1)+'/'+lcd + '−' + n2*(lcd/d2)+'/'+lcd + '=' + (rn*g)+'/'+rd*g + (g>1?' = '+ansStr:'') + '.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([3,4,5,6,8]), n1 = randInt(1,d1-1);
    var d2 = pickFrom([3,4,5,6,8]), n2 = randInt(1,d2-1);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)+n2*(lcd/d2), rd = lcd;
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1 ? String(rn) : (rn>=rd ? Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd : rn+'/'+rd);
    var opts = buildOpts(ansStr, [(n1+n2)+'/'+(d1+d2), (n1+n2)+'/'+d1, (rn+1)+'/'+rd]);
    return { q: 'What is ' + n1 + '/' + d1 + ' + ' + n2 + '/' + d2 + '?',
             opts: opts, c: 0,
             e: 'LCD=' + lcd + '. ' + n1*(lcd/d1) + '/' + lcd + '+' + n2*(lcd/d2) + '/' + lcd + '=' + (n1*(lcd/d1)+n2*(lcd/d2)) + '/' + lcd + '. Simplified: ' + ansStr + '.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([3,4,5,6]), n1 = randInt(2,d1-1);
    var d2 = pickFrom([3,4,5,6]), n2 = randInt(1,d2-2);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)-n2*(lcd/d2), rd = lcd;
    if(rn<=0){n1=d1-1; rn=n1*(lcd/d1)-n2*(lcd/d2);}
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ansStr + ' cup', [(rn+1)+'/'+rd + ' cup', (n1-n2)+'/'+(d1+d2) + ' cup', n1+'/'+d1 + ' cup']);
    return { q: 'A recipe uses ' + n1 + '/' + d1 + ' cup of flour and ' + n2 + '/' + d2 + ' cup of sugar. How much more flour than sugar?',
             opts: opts, c: 0,
             e: n1+'/'+d1+'−'+n2+'/'+d2+': LCD='+lcd+'. '+(n1*(lcd/d1))+'/'+lcd+'−'+(n2*(lcd/d2))+'/'+lcd+'='+(rn*g)+'/'+rd*g+(g>1?' = '+ansStr:'') + ' cup.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([5,6,8,10,12]), n1 = randInt(3,d1-1);
    var d2 = pickFrom([3,4,5,6]), n2 = randInt(1,d2-1);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)-n2*(lcd/d2), rd = lcd;
    if(rn<=0){n1=d1-1; rn=n1*(lcd/d1)-n2*(lcd/d2);}
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ansStr, [(n1-n2)+'/'+d1, (n1+n2)+'/'+lcd, (rn-1)+'/'+rd]);
    return { q: 'What is ' + n1 + '/' + d1 + ' − ' + n2 + '/' + d2 + '?',
             opts: opts, c: 0,
             e: 'LCD('+d1+','+d2+')='+lcd+'. '+n1*(lcd/d1)+'/'+lcd+'−'+n2*(lcd/d2)+'/'+lcd+'='+(rn*g)+'/'+rd*g+(g>1?' = '+ansStr:'')+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([5,6,8,10]), n1 = randInt(1,d1-2);
    var d2 = pickFrom([4,5,6,8]), n2 = randInt(1,d2-2);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)+n2*(lcd/d2), rd = lcd;
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ansStr + ' km', [(n1+n2)+'/'+(d1+d2) + ' km', n1+'/'+d1 + ' km', (rn+1)+'/'+rd + ' km']);
    return { q: 'Tom walks ' + n1 + '/' + d1 + ' km to the shop and then ' + n2 + '/' + d2 + ' km to school. How far in total?',
             opts: opts, c: 0,
             e: 'LCD='+lcd+'. '+n1*(lcd/d1)+'/'+lcd+'+'+n2*(lcd/d2)+'/'+lcd+'='+(rn*g)+'/'+rd*g+(g>1?' = '+ansStr:'')+' km.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var denoms = pickFrom([[2,3,6],[3,4,12],[2,5,10],[3,6,6]]);
    var d1=denoms[0], d2=denoms[1], d3=denoms[2];
    var n1=randInt(1,d1-1), n2=randInt(1,d2-1), n3=randInt(1,d3-1);
    var lcd = denoms[2];
    var rn = n1*(lcd/d1)+n2*(lcd/d2)+n3*(lcd/d3), rd=lcd;
    var g=gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ansStr, [(n1+n2+n3)+'/'+(d1+d2), (rn+1)+'/'+rd, rn+'/'+(rd+1)]);
    return { q: 'What is ' + n1 + '/' + d1 + ' + ' + n2 + '/' + d2 + ' + ' + n3 + '/' + d3 + '?',
             opts: opts, c: 0,
             e: 'LCD='+lcd+'. '+n1*(lcd/d1)+'/'+lcd+'+'+n2*(lcd/d2)+'/'+lcd+'+'+n3*(lcd/d3)+'/'+lcd+'='+(rn*g)+'/'+lcd+(g>1?' = '+ansStr:'')+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1 = pickFrom([4,6,8,10]), n1 = randInt(3,d1-1);
    var d2 = pickFrom([4,6,8]), n2 = randInt(1,d2/2);
    var lcd = d1*d2/gcd(d1,d2);
    var rn = n1*(lcd/d1)-n2*(lcd/d2), rd = lcd;
    if(rn<=0){n1=d1-1; rn=n1*(lcd/d1)-n2*(lcd/d2);}
    var g = gcd(rn,rd); rn=rn/g; rd=rd/g;
    var ansStr = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ansStr, [(n1-n2)+'/'+d1, n1+'/'+d1, (rn+1)+'/'+rd]);
    return { q: 'Sam has ' + n1 + '/' + d1 + ' of a pizza. He eats ' + n2 + '/' + d2 + ' of the whole pizza. What fraction remains?',
             opts: opts, c: 0,
             e: n1+'/'+d1+'−'+n2+'/'+d2+': LCD='+lcd+'. '+(n1*(lcd/d1))+'/'+lcd+'−'+(n2*(lcd/d2))+'/'+lcd+'='+(rn*g)+'/'+lcd*(g>1?g:1)+(g>1?' = '+ansStr:'')+' of the pizza.' };
  }},
  {q:"What value of n makes 2/n + 1/3 = 1? (n is a whole number)",opts:["6","3","2","4"],c:0,
   e:"1 − 1/3 = 2/3. So 2/n = 2/3 → n=3. Wait: 2/3+1/3=3/3=1 ✓. So n=3."}
],

"mi-06-4": [
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d = pickFrom([4,6,8]);
    var w1=randInt(1,4), n1=randInt(1,d-1);
    var w2=randInt(1,3), n2=randInt(1,d-1);
    var fn=n1+n2, fw=w1+w2+Math.floor(fn/d), fr=fn%d;
    var g=gcd(fr,d); var fr2=fr/g; var fd=d/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '');
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd, fw+' '+(fr2+1)+'/'+fd, (fw-1)+' '+fr2+'/'+fd]);
    return { q: 'What is ' + w1+' '+n1+'/'+d + ' + ' + w2+' '+n2+'/'+d + '?',
             opts: opts, c: 0,
             e: 'Whole: '+w1+'+'+w2+'='+(w1+w2)+'. Fractions: '+n1+'/'+d+'+'+n2+'/'+d+'='+fn+'/'+d+(fn>=d?' = '+Math.floor(fn/d)+' '+fn%d+'/'+d:'')+'. Total: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1=pickFrom([3,4,5,6]), d2=pickFrom([3,4,5,6]);
    var lcd=d1*d2/gcd(d1,d2);
    var w1=randInt(1,4), n1=randInt(1,d1-1);
    var w2=randInt(1,3), n2=randInt(1,d2-1);
    var fn1=n1*(lcd/d1), fn2=n2*(lcd/d2), fn=fn1+fn2;
    var fw=w1+w2+Math.floor(fn/lcd), fr=fn%lcd;
    var g=gcd(fr,lcd); var fr2=fr/g; var fd=lcd/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '');
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd, fw+' '+(fr2+1)+'/'+fd, (fw-1)+' '+fr2+'/'+fd]);
    return { q: 'What is ' + w1+' '+n1+'/'+d1 + ' + ' + w2+' '+n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: 'Whole: '+w1+'+'+w2+'='+(w1+w2)+'. Fractions: LCD='+lcd+'. '+fn1+'/'+lcd+'+'+fn2+'/'+lcd+'='+fn+'/'+lcd+(fn>=lcd?' = '+Math.floor(fn/lcd)+' '+(fn%lcd)+'/'+lcd:'')+'. Total: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d=pickFrom([4,6,8]);
    var w1=randInt(3,6), n1=randInt(2,d-1);
    var w2=randInt(1,w1-1), n2=randInt(1,n1-1);
    var fn=n1-n2, fw=w1-w2;
    var g=gcd(fn,d); var fn2=fn/g; var fd=d/g;
    var ans = fw + (fn2>0 ? ' ' + fn2+'/'+fd : '');
    var opts = buildOpts(ans, [(fw+1)+' '+fn2+'/'+fd, fw+' '+(fn2>1?fn2-1:1)+'/'+fd, (fw-1)+' '+fn2+'/'+fd]);
    return { q: 'What is ' + w1+' '+n1+'/'+d + ' − ' + w2+' '+n2+'/'+d + '?',
             opts: opts, c: 0,
             e: 'Whole: '+w1+'−'+w2+'='+fw+'. Fractions: '+n1+'/'+d+'−'+n2+'/'+d+'='+fn+'/'+d+(g>1?' = '+fn2+'/'+fd:'')+'. Total: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1=pickFrom([3,4,5,6]), d2=pickFrom([3,4,5,6]);
    var lcd=d1*d2/gcd(d1,d2);
    var w1=randInt(3,6), n1=randInt(1,d1-1);
    var w2=randInt(1,w1-1), n2=randInt(1,d2-1);
    var fn1=n1*(lcd/d1), fn2=n2*(lcd/d2);
    var fw, frn;
    if(fn1>=fn2){ fw=w1-w2; frn=fn1-fn2; }
    else { fw=w1-w2-1; frn=fn1+lcd-fn2; }
    if(fw<0){ w1=w2+2; fw=1; }
    var g=gcd(frn,lcd); var fr2=frn/g; var fd=lcd/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '');
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd, fw+' '+(fr2>1?fr2-1:fr2+1)+'/'+fd, (fw-1)+' '+fr2+'/'+fd]);
    return { q: 'What is ' + w1+' '+n1+'/'+d1 + ' − ' + w2+' '+n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: 'LCD='+lcd+'. '+w1+' '+fn1+'/'+lcd+' − '+w2+' '+fn2+'/'+lcd+(fn1<fn2?'. Borrow: '+(w1-1)+' '+(fn1+lcd)+'/'+lcd+' − '+w2+' '+fn2+'/'+lcd:'')+' = '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1=8, d2=pickFrom([4,8]);
    var w1=randInt(4,8), n1=randInt(1,7);
    var w2=randInt(1,w1-2), n2=randInt(1,d2-1);
    var fn1=n1*(d1/d1), fn2=n2*(d1/d2);
    var fw, frn;
    if(fn1>=fn2){ fw=w1-w2; frn=fn1-fn2; }
    else { fw=w1-w2-1; frn=fn1+d1-fn2; }
    var g=gcd(frn,d1); var fr2=frn/g; var fd=d1/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '') + ' m';
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd+' m', fw+' '+(fr2>1?fr2-1:fr2+1)+'/'+fd+' m', (fw-1)+' '+fr2+'/'+fd+' m']);
    return { q: 'A plank is ' + w1+' '+n1+'/'+d1 + ' m long. A piece of ' + w2+' '+n2+'/'+d2 + ' m is cut off. How long is the remaining piece?',
             opts: opts, c: 0,
             e: 'LCD='+d1+'. '+w1+' '+fn1+'/'+d1+' − '+w2+' '+fn2+'/'+d1+(fn1<fn2?'. Borrow: '+(w1-1)+' '+(fn1+d1)+'/'+d1+' − '+w2+' '+fn2+'/'+d1:'')+' = '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1=6, d2=3;
    var w1=randInt(1,4), n1=randInt(1,5);
    var w2=randInt(1,4), n2=randInt(1,2);
    var lcd=6;
    var fn=n1+n2*(lcd/d2), fw=w1+w2+Math.floor(fn/lcd), fr=fn%lcd;
    var g=gcd(fr,lcd); var fr2=fr/g; var fd=lcd/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '');
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd, fw+' '+(fr2+1)+'/'+fd, (fw-1)+' '+fr2+'/'+fd]);
    return { q: 'What is ' + w1+' '+n1+'/'+d1 + ' + ' + w2+' '+n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: 'LCD='+lcd+'. '+w1+' '+n1+'/'+lcd+' + '+w2+' '+n2*(lcd/d2)+'/'+lcd+' = '+(w1+w2)+' '+fn+'/'+lcd+(fn>=lcd?' = '+(Math.floor(fn/lcd))+' '+fr+'/'+lcd:'')+'. Total: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1=10, d2=5;
    var w1=randInt(3,7), n1=randInt(1,9);
    var w2=randInt(1,3), n2=randInt(1,4);
    var fn1=n1, fn2=n2*(d1/d2);
    var fw, frn;
    if(fn1>=fn2){ fw=w1-w2; frn=fn1-fn2; }
    else { fw=w1-w2-1; frn=fn1+d1-fn2; }
    var g=gcd(frn,d1); var fr2=frn/g; var fd=d1/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '') + ' L';
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd+' L', fw+' '+(fr2>1?fr2-1:fr2+1)+'/'+fd+' L', (fw-1)+' '+fr2+'/'+fd+' L']);
    return { q: w1+' '+n1+'/'+d1 + ' litres of paint. Used ' + w2+' '+n2+'/'+d2 + ' litres. How much is left?',
             opts: opts, c: 0,
             e: 'LCD='+d1+'. '+w1+' '+fn1+'/'+d1+' − '+w2+' '+fn2+'/'+d1+(fn1<fn2?'. Borrow: '+(w1-1)+' '+(fn1+d1)+'/'+d1+' − '+w2+' '+fn2+'/'+d1:'')+' = '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var lcd=12;
    var w1=randInt(1,3), n1=randInt(1,3), d1=4;
    var w2=randInt(1,3), n2=randInt(1,5), d2=6;
    var w3=randInt(1,2), n3=randInt(1,2), d3=3;
    var fn=n1*(lcd/d1)+n2*(lcd/d2)+n3*(lcd/d3);
    var fw=w1+w2+w3+Math.floor(fn/lcd), fr=fn%lcd;
    var g=gcd(fr,lcd); var fr2=fr/g; var fd=lcd/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '');
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd, fw+' '+(fr2+1)+'/'+fd, (fw-1)+' '+fr2+'/'+fd]);
    return { q: 'What is ' + w1+' '+n1+'/'+d1 + ' + ' + w2+' '+n2+'/'+d2 + ' + ' + w3+' '+n3+'/'+d3 + '?',
             opts: opts, c: 0,
             e: 'LCD='+lcd+'. '+w1+' '+n1*(lcd/d1)+'/'+lcd+' + '+w2+' '+n2*(lcd/d2)+'/'+lcd+' + '+w3+' '+n3*(lcd/d3)+'/'+lcd+' = '+(w1+w2+w3)+' '+fn+'/'+lcd+'. Total: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var d1=10, d2=5;
    var w1=randInt(2,5), n1=randInt(1,9);
    var w2=randInt(1,4), n2=randInt(1,4);
    var fn=n1+n2*(d1/d2), fw=w1+w2+Math.floor(fn/d1), fr=fn%d1;
    var g=gcd(fr,d1); var fr2=fr/g; var fd=d1/g;
    var ans = fw + (fr2>0 ? ' ' + fr2+'/'+fd : '') + ' km';
    var opts = buildOpts(ans, [(fw+1)+' '+fr2+'/'+fd+' km', fw+' '+(fr2+1)+'/'+fd+' km', (fw-1)+' '+fr2+'/'+fd+' km']);
    return { q: 'A hiker walks ' + w1+' '+n1+'/'+d1 + ' km in the morning and ' + w2+' '+n2+'/'+d2 + ' km in the afternoon. How far in total?',
             opts: opts, c: 0,
             e: 'LCD='+d1+'. '+w1+' '+n1+'/'+d1+' + '+w2+' '+n2*(d1/d2)+'/'+d1+' = '+(w1+w2)+' '+fn+'/'+d1+(fn>=d1?' = '+Math.floor(fn/d1)+' '+fr+'/'+d1:'')+'. Total: '+ans+'.' };
  }},
  {q:"Which missing number makes this true? 3 1/3 + ? = 5 5/6",opts:["2 1/2","2 1/6","2 5/6","1 1/2"],c:0,
   e:"? = 5 5/6 − 3 1/3. LCD=6. 5 5/6 − 3 2/6 = 2 3/6 = 2 1/2."}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 7 — MULTIPLY & DIVIDE FRACTIONS
// ══════════════════════════════════════════════════════════════════════════

"mi-07-1": [
  { gen: function() {
    var d = pickFrom([2,3,4,5,6,8]);
    var n = randInt(1,d-1);
    var whole = d * randInt(2,6);
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, whole*n, whole-ans]);
    return { q: 'What is ' + n + '/' + d + ' × ' + whole + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ ' + d + ' = ' + whole/d + '; ' + whole/d + ' × ' + n + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var d = pickFrom([2,3,4,5,6,8]);
    var n = randInt(1,d-1);
    var whole = d * randInt(2,6);
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, whole*n, whole-ans]);
    return { q: 'What is ' + n + '/' + d + ' of ' + whole + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ ' + d + ' = ' + whole/d + '; ' + whole/d + ' × ' + n + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var d = pickFrom([3,4,5,6,7,8,9]);
    var n = randInt(1,d-1);
    var whole = d * randInt(2,5);
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, n*d, whole-ans]);
    return { q: 'What is ' + n + '/' + d + ' × ' + whole + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ ' + d + ' = ' + whole/d + '; ' + whole/d + ' × ' + n + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var d = pickFrom([3,4,5,6,8]);
    var n = randInt(1,d-1);
    var whole = d * randInt(3,8);
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, whole-ans, n*d]);
    return { q: 'A bag has ' + whole + ' sweets. Sam takes ' + n + '/' + d + ' of them. How many does Sam take?',
             opts: opts, c: 0,
             e: whole + ' × ' + n + '/' + d + ': ' + whole + '÷' + d + '=' + whole/d + '; ' + whole/d + '×' + n + '=' + ans + ' sweets.' };
  }},
  { gen: function() {
    var d = pickFrom([2,4,5,6,8]);
    var n = randInt(1,d-1);
    var whole = d * randInt(2,6);
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, whole-ans, whole*n]);
    return { q: 'What is ' + n + '/' + d + ' × ' + whole + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ ' + d + ' = ' + whole/d + '; ' + whole/d + ' × ' + n + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var d = pickFrom([4,5,6,8,10]);
    var n = randInt(1,d-1);
    var whole = d * randInt(4,10) * 10;
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, whole-ans, ans+whole/d]);
    return { q: 'A school has ' + whole + ' students. ' + n + '/' + d + ' of them travel by bus. How many is that?',
             opts: opts, c: 0,
             e: whole + ' ÷ ' + d + ' = ' + whole/d + '; ' + whole/d + ' × ' + n + ' = ' + ans + ' students.' };
  }},
  { gen: function() {
    var d = pickFrom([3,4,5,6,7,8,9]);
    var n = randInt(1,d-1);
    var whole = d * randInt(2,6);
    var ans = whole/d*n;
    var opts = buildOpts(ans, [whole/d, n*d, whole-ans]);
    return { q: 'What is ' + n + '/' + d + ' × ' + whole + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ ' + d + ' = ' + whole/d + '; ' + whole/d + ' × ' + n + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var d = pickFrom([3,4,5,6,10,12]);
    var n = randInt(1,d-1);
    var whole = d * randInt(2,5) * 10;
    var completed = whole/d*n;
    var remaining = whole - completed;
    var opts = buildOpts(remaining + ' km', [completed + ' km', (remaining+whole/d) + ' km', whole/d + ' km']);
    return { q: 'A car journey is ' + whole + ' km. The car has completed ' + n + '/' + d + ' of the journey. How many km remain?',
             opts: opts, c: 0,
             e: 'Completed: ' + whole + '×' + n + '/' + d + '=' + completed + ' km. Remaining: ' + whole + '−' + completed + '=' + remaining + ' km.' };
  }},
  {q:"What fraction of 60 is 45?",opts:["3/4","3/5","5/4","4/5"],c:0,
   e:"45/60 = 3/4 (divide both by 15)."},
  {q:"A factory produces 3/5 of its daily target of 200 units by midday. How many more units are needed?",
   opts:["80","120","60","100"],c:0,
   e:"Produced: 200×3/5=120. Remaining: 200−120=80 units."}
],

"mi-07-2": [
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,5), d1=pickFrom([3,4,5,6,7,8]);
    var n2=randInt(1,5), d2=pickFrom([3,4,5,6,7,8]);
    var rn=n1*n2, rd=d1*d2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans, [(n1+n2)+'/'+(d1+d2), (n1*n2)+'/'+(d1+d2), rn+'/'+(rd+1)]);
    return { q: 'What is ' + n1+'/'+d1 + ' × ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: 'Multiply tops: '+n1+'×'+n2+'='+n1*n2+'. Multiply bottoms: '+d1+'×'+d2+'='+d1*d2+'. Simplify: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,4), d1=pickFrom([3,4,5,6,8]);
    var n2=randInt(1,4), d2=pickFrom([3,4,5,6,8]);
    var rn=n1*n2, rd=d1*d2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans, [(n1+n2)+'/'+(d1*d2), n1*n2+'/'+(d1+d2), rn+'/'+(rd+2)]);
    return { q: 'What is ' + n1+'/'+d1 + ' × ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: '('+n1+'×'+n2+')/('+d1+'×'+d2+') = '+n1*n2+'/'+d1*d2+(g>1?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,4), d1=pickFrom([3,5,7,9]);
    var n2=randInt(1,4), d2=pickFrom([3,5,7,9]);
    var rn=n1*n2, rd=d1*d2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans, [(n1+n2)+'/'+(d1+d2), n1*n2+'/'+(d1+d2), (rn+1)+'/'+rd]);
    return { q: 'What is ' + n1+'/'+d1 + ' × ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: 'Multiply tops: '+n1+'×'+n2+'='+n1*n2+'. Multiply bottoms: '+d1+'×'+d2+'='+d1*d2+'. Simplify: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,5), d1=pickFrom([4,6,8,10]);
    var n2=randInt(1,5), d2=pickFrom([4,6,8,10]);
    var rn=n1*n2, rd=d1*d2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans, [(n1*n2)+'/'+(d1+d2), (n1+n2)+'/'+(d1*d2), rn+'/'+(rd+1)]);
    return { q: 'What is ' + n1+'/'+d1 + ' × ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: 'Cancel before multiplying if possible. '+n1+'×'+n2+'='+n1*n2+'; '+d1+'×'+d2+'='+d1*d2+'. Simplify: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w=randInt(1,4), fn=randInt(1,5), fd=pickFrom([3,4,6,8]);
    var imp=w*fd+fn;
    var n2=randInt(1,4), d2=pickFrom([3,4,5,6]);
    var rn=imp*n2, rd=fd*d2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts = buildOpts(ans, [(imp+n2)+'/'+(fd+d2), w+' '+fn+'/'+fd, rn+'/'+(rd+1)]);
    return { q: 'What is ' + w+' '+fn+'/'+fd + ' × ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: w+' '+fn+'/'+fd+'='+imp+'/'+fd+'. ('+imp+'×'+n2+')/('+fd+'×'+d2+')='+imp*n2+'/'+fd*d2+(imp*n2!==rn*g?'='+ans:'')+'. Answer: '+ans+'.' };
  }},
  {q:"A garden is 3/4 km long and 2/5 km wide. What is the area?",opts:["3/10 km²","6/9 km²","5/9 km²","6/20 km²"],c:0,
   e:"Area = 3/4 × 2/5 = 6/20 = 3/10 km²."},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w1=randInt(1,4), fn1=randInt(1,5), fd1=pickFrom([3,4,5,6]);
    var w2=randInt(1,3), fn2=randInt(1,4), fd2=pickFrom([3,4,5,6]);
    var imp1=w1*fd1+fn1, imp2=w2*fd2+fn2;
    var rn=imp1*imp2, rd=fd1*fd2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts = buildOpts(ans, [(imp1+imp2)+'/'+(fd1+fd2), w1+' '+fn1+'/'+fd1, rn+'/'+(rd+1)]);
    return { q: 'What is ' + w1+' '+fn1+'/'+fd1 + ' × ' + w2+' '+fn2+'/'+fd2 + '?',
             opts: opts, c: 0,
             e: imp1+'/'+fd1+' × '+imp2+'/'+fd2+' = '+imp1*imp2+'/'+fd1*fd2+(g>1?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,4), d1=pickFrom([3,4,5,6,8]);
    var n2=randInt(1,4), d2=pickFrom([3,4,5,6,8]);
    var rn=n1*n2, rd=d1*d2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans = rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans+' L', [(n1+n2)+'/'+(d1+d2)+' L', (n1*n2)+'/'+(d1+d2)+' L', rn+'/'+(rd+1)+' L']);
    return { q: 'A bottle contains ' + n1+'/'+d1 + ' of a litre. A glass holds ' + n2+'/'+d2 + ' of the bottle. How much does the glass hold?',
             opts: opts, c: 0,
             e: n1+'/'+d1+' × '+n2+'/'+d2+' = '+n1*n2+'/'+d1*d2+(g>1?' = '+ans:'')+' L.' };
  }},
  {q:"Why is 3/4 × 2/3 = 1/2 and not 6/12?",opts:["6/12 simplifies to 1/2 — both are correct","1/2 is wrong, the answer is 6/12","They are different values","6/12 cannot be simplified"],c:0,
   e:"6/12 = 1/2 — both are equal. Simplifying gives the same value in lowest terms."}
],

"mi-07-3": [
  { gen: function() {
    var whole = randInt(2,9);
    var d = pickFrom([2,3,4,5,6]);
    var ans = whole*d;
    var opts = buildOpts(ans, [whole/d, 1/whole, whole-d]);
    return { q: 'What is ' + whole + ' ÷ 1/' + d + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ 1/' + d + ' = ' + whole + ' × ' + d + ' = ' + ans + '. (Flip the divisor and multiply.)' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n=randInt(1,5), d=pickFrom([3,4,5,6,8]);
    var whole=randInt(2,6);
    var rn=n, rd=d*whole, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans, [n*whole+'/'+d, whole+'/'+n, (rn+1)+'/'+rd]);
    return { q: 'What is ' + n + '/' + d + ' ÷ ' + whole + '?',
             opts: opts, c: 0,
             e: n+'/'+d+' ÷ '+whole+' = '+n+'/'+d+' × 1/'+whole+' = '+n*1+'/'+(d*whole)+(n*1!==rn*g?'='+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,5), d=pickFrom([3,4,5,6,8]);
    var n2=randInt(1,n1);
    var rn=n1*d, rd=n2*d, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):rn+'/'+rd;
    var opts = buildOpts(ans, [n2+'/'+n1, n1*n2+'/'+d, (rn-1)+'/'+rd]);
    return { q: 'What is ' + n1 + '/' + d + ' ÷ ' + n2 + '/' + d + '?',
             opts: opts, c: 0,
             e: n1+'/'+d+' ÷ '+n2+'/'+d+' = '+n1+'/'+d+' × '+d+'/'+n2+' = '+n1*d+'/'+n2*d+(n1*d!==rn*g?'='+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(2,5), d1=pickFrom([3,4,5,6]);
    var n2=randInt(1,4), d2=pickFrom([6,8,9,10,12]);
    var rn=n1*d2, rd=d1*n2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts = buildOpts(ans, [n1*n2+'/'+(d1*d2), (n1+n2)+'/'+(d1+d2), rn+'/'+(rd+1)]);
    return { q: 'What is ' + n1 + '/' + d1 + ' ÷ ' + n2 + '/' + d2 + '?',
             opts: opts, c: 0,
             e: n1+'/'+d1+' ÷ '+n2+'/'+d2+' = '+n1+'/'+d1+' × '+d2+'/'+n2+' = '+n1*d2+'/'+d1*n2+(n1*d2!==rn*g?'='+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    var d = pickFrom([2,3,4,5,6]);
    var whole = randInt(2,6);
    var ans = whole*d;
    var unit = pickFrom(['kg','L','m']);
    var portion = '1/'+d+' '+unit;
    var opts = buildOpts(ans, [whole/d, d, whole+d]);
    return { q: 'How many 1/' + d + ' ' + unit + ' portions can be cut from ' + whole + ' ' + unit + '?',
             opts: opts, c: 0,
             e: whole + ' ÷ 1/' + d + ' = ' + whole + ' × ' + d + ' = ' + ans + ' portions.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(2,6), d1=pickFrom([4,5,6,8,10]);
    var n2=randInt(1,n1), d2=d1*randInt(2,3);
    var rn=n1*d2, rd=d1*n2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts = buildOpts(ans, [n1*n2+'/'+(d1*d2), (rn-1)+'/'+rd, (rn+1)+'/'+rd]);
    return { q: 'What is ' + n1+'/'+d1 + ' ÷ ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: n1+'/'+d1+' ÷ '+n2+'/'+d2+' = '+n1+'/'+d1+' × '+d2+'/'+n2+' = '+n1*d2+'/'+d1*n2+(n1*d2!==rn*g?'='+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n2=randInt(1,4), d2=pickFrom([5,6,8,10,12,15]);
    var ans = randInt(2,8);
    var n1=n2*ans, d1=d2;
    var g=gcd(n1,d1); n1=n1/g; d1=d1/g;
    var opts = buildOpts(ans+' pieces', [(ans-1)+' pieces', (ans+1)+' pieces', ans*2+' pieces']);
    return { q: 'A length of rope is ' + n1+'/'+d1 + ' m. It is cut into pieces each ' + n2+'/'+d2 + ' m long. How many pieces?',
             opts: opts, c: 0,
             e: n1+'/'+d1+' ÷ '+n2+'/'+d2+' = '+n1+'/'+d1+' × '+d2+'/'+n2+' = '+n1*d2+'/'+d1*n2+' = '+ans+' pieces.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var n1=randInt(1,5), d1=pickFrom([2,3,4,5,6]);
    var n2=randInt(1,5), d2=pickFrom([3,4,5,6,8]);
    var rn=n1*d2, rd=d1*n2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts = buildOpts(ans, [n1*n2+'/'+(d1*d2), n1+'/'+d2, (rn+1)+'/'+rd]);
    return { q: 'What is ' + n1+'/'+d1 + ' ÷ ' + n2+'/'+d2 + '?',
             opts: opts, c: 0,
             e: n1+'/'+d1+' ÷ '+n2+'/'+d2+' = '+n1+'/'+d1+' × '+d2+'/'+n2+' = '+n1*d2+'/'+d1*n2+(n1*d2!==rn*g?'='+ans:'')+'. Answer: '+ans+'.' };
  }},
  {q:"Which is greater: 3/4 ÷ 1/3 or 3/4 × 3?",opts:["They are equal — both give 9/4","3/4 × 3 is greater","3/4 ÷ 1/3 is greater","Cannot compare"],c:0,
   e:"3/4 ÷ 1/3 = 3/4 × 3 = 9/4. They give the same result! ÷ 1/3 is the same as × 3."},
  {q:"Why is dividing by a fraction always greater than (or equal to) the original number when the fraction is less than 1?",
   opts:["Dividing by a number less than 1 makes the result bigger","Fractions always make numbers smaller","Division always gives a smaller result","Only true for fractions equal to 1/2"],c:0,
   e:"When you divide by a fraction less than 1, you're asking 'how many pieces fit?' — and smaller pieces means MORE of them. E.g. 3 ÷ 1/2 = 6 (twice as many)."}
],

"mi-07-4": [
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w1=randInt(1,4), fn1=randInt(1,5), fd1=pickFrom([2,3,4,5,6]);
    var w2=randInt(1,3), fn2=randInt(1,4), fd2=pickFrom([2,3,4,5,6]);
    var imp1=w1*fd1+fn1, imp2=w2*fd2+fn2;
    var rn=imp1*imp2, rd=fd1*fd2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts=buildOpts(ans, [(imp1+imp2)+'/'+(fd1+fd2), w1+' '+fn1+'/'+fd1, rn+'/'+(rd+1)]);
    return { q:'What is '+w1+' '+fn1+'/'+fd1+' × '+w2+' '+fn2+'/'+fd2+'?',
             opts:opts, c:0,
             e:imp1+'/'+fd1+' × '+imp2+'/'+fd2+' = '+imp1*imp2+'/'+fd1*fd2+(imp1*imp2!==rn*g?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w=randInt(2,5), fn=randInt(1,5), fd=pickFrom([3,4,5,6]);
    var imp=w*fd+fn;
    var whole=randInt(2,6);
    var rn=imp, rd=fd*whole, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):rn+'/'+rd;
    var opts=buildOpts(ans, [imp*whole+'/'+fd, fn+'/'+fd, (rn+1)+'/'+rd]);
    return { q:'What is '+w+' '+fn+'/'+fd+' ÷ '+whole+'?',
             opts:opts, c:0,
             e:w+' '+fn+'/'+fd+' = '+imp+'/'+fd+'. '+imp+'/'+fd+' ÷ '+whole+' = '+imp+'/'+fd+' × 1/'+whole+' = '+imp+'/'+fd*whole+(imp!==rn*g?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w1=randInt(1,3), fn1=randInt(1,4), fd1=pickFrom([3,4,5,6]);
    var w2=randInt(1,3), fn2=randInt(1,4), fd2=pickFrom([3,4,5,6]);
    var imp1=w1*fd1+fn1, imp2=w2*fd2+fn2;
    var rn=imp1*imp2, rd=fd1*fd2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts=buildOpts(ans, [(imp1+imp2)+'/'+(fd1*fd2), w1*w2+' '+(fn1+fn2)+'/'+(fd1+fd2), rn+'/'+(rd+1)]);
    return { q:'What is '+w1+' '+fn1+'/'+fd1+' × '+w2+' '+fn2+'/'+fd2+'?',
             opts:opts, c:0,
             e:imp1+'/'+fd1+' × '+imp2+'/'+fd2+' = '+imp1*imp2+'/'+fd1*fd2+(imp1*imp2!==rn*g?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var fn2=randInt(1,5), fd=pickFrom([4,5,6,8]);
    var pieces=randInt(2,6);
    var imp1=fn2*pieces;
    var g0=gcd(imp1,fd); var n1=imp1/g0; var d1=fd/g0;
    var w1=Math.floor(n1/d1), fr1=n1%d1;
    var rn=imp1*fd, rd=fd*fn2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):rn+'/'+rd;
    var opts=buildOpts(pieces+' pieces', [(pieces+1)+' pieces', (pieces-1)+' pieces', pieces*2+' pieces']);
    var mixedStr = fr1>0 ? w1+' '+fr1+'/'+d1 : String(w1);
    return { q:'A ribbon '+mixedStr+' m is cut into pieces each '+fn2+'/'+fd+' m long. How many pieces?',
             opts:opts, c:0,
             e:mixedStr+'='+n1+'/'+d1+'. '+n1+'/'+d1+' ÷ '+fn2+'/'+fd+' = '+n1+'/'+d1+' × '+fd+'/'+fn2+' = '+n1*fd+'/'+d1*fn2+' = '+pieces+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w1=randInt(2,5), fn1=randInt(1,3), fd1=pickFrom([2,3,4]);
    var w2=randInt(1,w1-1), fn2=randInt(1,3), fd2=pickFrom([2,3,4]);
    var imp1=w1*fd1+fn1, imp2=w2*fd2+fn2;
    var rn=imp1*fd2, rd=fd1*imp2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts=buildOpts(ans, [(imp1+imp2)+'/'+(fd1+fd2), w1+' '+fn1+'/'+fd1, (rn+1)+'/'+rd]);
    return { q:'What is '+w1+' '+fn1+'/'+fd1+' ÷ '+w2+' '+fn2+'/'+fd2+'?',
             opts:opts, c:0,
             e:imp1+'/'+fd1+' ÷ '+imp2+'/'+fd2+' = '+imp1+'/'+fd1+' × '+fd2+'/'+imp2+' = '+imp1*fd2+'/'+fd1*imp2+(imp1*fd2!==rn*g?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w1=randInt(1,4), fn1=randInt(1,3), fd1=pickFrom([2,4]);
    var w2=randInt(1,5), fn2=randInt(1,2), fd2=pickFrom([3,4,5]);
    var imp1=w1*fd1+fn1, imp2=w2*fd2+fn2;
    var rn=imp1*imp2, rd=fd1*fd2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var earningsStr = rd===1 ? '£'+rn+'.00' : (rn>=rd ? '£'+(rn/rd).toFixed(2) : '£'+rn+'/'+rd);
    var numVal = rn/rd;
    var ans = '£'+numVal.toFixed(2);
    var opts=buildOpts(ans, ['£'+(numVal+0.25).toFixed(2), '£'+(numVal-0.25).toFixed(2), '£'+(numVal+0.5).toFixed(2)]);
    return { q:'Jake earns £'+w1+' '+fn1+'/'+fd1+' per hour. He works '+w2+' '+fn2+'/'+fd2+' hours. How much does he earn?',
             opts:opts, c:0,
             e:imp1+'/'+fd1+' × '+imp2+'/'+fd2+' = '+imp1*imp2+'/'+fd1*fd2+(imp1*imp2!==rn*g?' = '+rn+'/'+rd:'')+' = '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var w1=randInt(2,4), fn1=randInt(1,4), fd1=pickFrom([3,4,5,6]);
    var w2=randInt(1,3), fn2=randInt(1,4), fd2=pickFrom([3,4,5,6]);
    var imp1=w1*fd1+fn1, imp2=w2*fd2+fn2;
    var rn=imp1*imp2, rd=fd1*fd2, g=gcd(rn,rd);
    rn=rn/g; rd=rd/g;
    var ans=rd===1?String(rn):(rn>=rd?Math.floor(rn/rd)+' '+(rn%rd)+'/'+rd:rn+'/'+rd);
    var opts=buildOpts(ans, [(imp1+imp2)+'/'+(fd1+fd2), w1*w2+' '+fn1+'/'+fd1, rn+'/'+(rd+1)]);
    return { q:'What is '+w1+' '+fn1+'/'+fd1+' × '+w2+' '+fn2+'/'+fd2+'?',
             opts:opts, c:0,
             e:imp1+'/'+fd1+' × '+imp2+'/'+fd2+' = '+imp1*imp2+'/'+fd1*fd2+(imp1*imp2!==rn*g?' = '+ans:'')+'. Answer: '+ans+'.' };
  }},
  { gen: function() {
    function gcd(a,b){return b?gcd(b,a%b):a;}
    var fn2=randInt(1,5), fd=pickFrom([4,5,6,8,10]);
    var cups=randInt(3,9);
    var imp1=fn2*cups;
    var g0=gcd(imp1,fd); var n1r=imp1/g0; var d1r=fd/g0;
    var w1=Math.floor(n1r/d1r), fr1=n1r%d1r;
    var opts=buildOpts(cups+' cups', [(cups+1)+' cups', (cups-1)+' cups', cups*2+' cups']);
    var mixedStr = fr1>0 ? w1+' '+fr1+'/'+d1r : String(w1);
    return { q:'A container holds '+mixedStr+' litres. Each cup holds '+fn2+'/'+fd+' litre. How many full cups?',
             opts:opts, c:0,
             e:mixedStr+'='+n1r+'/'+d1r+'. '+n1r+'/'+d1r+' ÷ '+fn2+'/'+fd+' = '+n1r+'/'+d1r+' × '+fd+'/'+fn2+' = '+n1r*fd+'/'+d1r*fn2+' = '+cups+'.' };
  }},
  {q:"Is 1 1/2 ÷ 3/4 the same as 3/4 ÷ 1 1/2? Justify your answer.",
   opts:["No — division is not commutative; answers are 2 and 1/2","Yes — division is commutative","No — one gives 2 and the other gives 0","Yes — both equal 1"],c:0,
   e:"1 1/2 ÷ 3/4 = 3/2 × 4/3 = 2. But 3/4 ÷ 3/2 = 3/4 × 2/3 = 1/2. Different! Division is NOT commutative."},
  {q:"Three friends share 5 2/3 pizzas equally. What fraction of a pizza does each person get?",
   opts:["1 8/9","2 5/9","1 2/3","1 5/9"],c:0,
   e:"17/3 ÷ 3 = 17/9 = 1 8/9 pizza each."}
],

// ══════════════════════════════════════════════════════════════════════════
// TOPIC 8 — INTEGERS
// ══════════════════════════════════════════════════════════════════════════

"mi-08-1": [
  {q:"Which integer is greatest?",opts:["−1","−10","−100","−2"],c:0,
   e:"On a number line, −1 is furthest to the right (closest to 0). −1 > −2 > −10 > −100."},
  {q:"What is the opposite of −15?",opts:["15","−15","1/15","0"],c:0,
   e:"The opposite of −15 is +15. They are the same distance from 0 but on opposite sides."},
  {q:"Is −7 greater than, less than, or equal to −3?",opts:["Less than","Greater than","Equal to","Cannot compare"],c:0,
   e:"−7 is further left on a number line. −7 < −3."},
  {q:"Put in order from smallest to largest: 3, −5, −2, 0, 7",opts:["−5, −2, 0, 3, 7","−2, −5, 0, 3, 7","7, 3, 0, −2, −5","0, −2, −5, 3, 7"],c:0,
   e:"On a number line left to right: −5 < −2 < 0 < 3 < 7."},
  {q:"The temperature in Moscow is −14°C. In London it is 6°C. What is the difference?",opts:["20°C","8°C","−8°C","−20°C"],c:0,
   e:"Difference = 6 − (−14) = 6 + 14 = 20°C."},
  {q:"Which of these is an integer?",opts:["−4","3/4","0.5","√2"],c:0,
   e:"Integers are whole numbers (positive, negative or zero): ..., −2, −1, 0, 1, 2, ... −4 is an integer. ✓"},
  {q:"A lift starts at floor 3. It goes down 5 floors. Which floor is it on?",opts:["Floor −2","Floor 2","Floor −3","Floor 8"],c:0,
   e:"3 − 5 = −2. Floor −2 (2 floors below ground level)."},
  {q:"What number is 8 less than −3?",opts:["−11","5","−5","11"],c:0,
   e:"−3 − 8 = −11."},
  {q:"Between which two consecutive integers does −√5 lie?",opts:["−3 and −2","−2 and −1","−4 and −3","−5 and −4"],c:0,
   e:"√5 ≈ 2.24. So −√5 ≈ −2.24. This lies between −3 and −2."},
  {q:"A share price falls by 8 pence to −3 pence below its starting value. What was the starting value?",
   opts:["5p","−11p","11p","−5p"],c:0,
   e:"Start + (−8) = −3. Start = −3 + 8 = 5p."}
],

"mi-08-2": [
  { gen: function() {
    var a = -randInt(2,9), b = randInt(2,9);
    var ans = a + b;
    var opts = buildOpts(ans, [-ans, Math.abs(a)+b, a-b]);
    return { q: 'What is ' + a + ' + ' + b + '?',
             opts: opts, c: 0,
             e: 'Different signs: ' + b + '−' + Math.abs(a) + '=' + Math.abs(ans) + '. Larger absolute value (' + (Math.abs(a)>b?Math.abs(a):b) + ') is ' + (ans<0?'negative':'positive') + ' → answer is ' + ans + '.' };
  }},
  { gen: function() {
    var a = -randInt(2,9), b = -randInt(2,9);
    var ans = a + b;
    var opts = buildOpts(ans, [-ans, Math.abs(a)+Math.abs(b), a-b]);
    return { q: 'What is ' + a + ' + (' + b + ')?',
             opts: opts, c: 0,
             e: 'Same signs (both negative): ' + Math.abs(a) + '+' + Math.abs(b) + '=' + Math.abs(ans) + ', keep negative → ' + ans + '.' };
  }},
  { gen: function() {
    var a = randInt(2,9), b = -randInt(a+1,15);
    var ans = a + b;
    var opts = buildOpts(ans, [-ans, a+Math.abs(b), a-Math.abs(b)]);
    return { q: 'What is ' + a + ' + (' + b + ')?',
             opts: opts, c: 0,
             e: 'Different signs: ' + Math.abs(b) + '−' + a + '=' + Math.abs(ans) + '. Larger absolute value (' + Math.abs(b) + ') is negative → ' + ans + '.' };
  }},
  { gen: function() {
    var start = -randInt(5,15), rise = randInt(2,10);
    var ans = start + rise;
    var opts = buildOpts(ans + '°C', [(start-rise) + '°C', (-ans) + '°C', (start+rise+1) + '°C']);
    return { q: 'The temperature is ' + start + '°C. It rises by ' + rise + '°C. What is the new temperature?',
             opts: opts, c: 0,
             e: start + ' + ' + rise + ' = ' + ans + '°C.' };
  }},
  { gen: function() {
    var a = -randInt(2,6), b = -randInt(2,6), c = randInt(2,12);
    var ans = a + b + c;
    var opts = buildOpts(ans, [-(a+b+c), a+b-c, a-b+c]);
    return { q: 'What is ' + a + ' + (' + b + ') + ' + c + '?',
             opts: opts, c: 0,
             e: a + '+(' + b + ') = ' + (a+b) + '. ' + (a+b) + '+' + c + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var loss = -randInt(1,6), gain = randInt(1,8);
    var ans = loss + gain;
    var sign = ans >= 0 ? '+' : '';
    var opts = buildOpts(sign+ans, [sign+(-ans), sign+(loss+gain+1), sign+(gain-Math.abs(loss))]);
    return { q: 'A team loses ' + Math.abs(loss) + ' points then gains ' + gain + ' points. What is the total points change?',
             opts: opts, c: 0,
             e: loss + ' + ' + gain + ' = ' + (ans>=0?'+':'')+ans + '.' };
  }},
  { gen: function() {
    var n = randInt(5,30);
    var opts = buildOpts(0, [2*n, -2*n, 1]);
    return { q: 'What is −' + n + ' + ' + n + '?',
             opts: opts, c: 0,
             e: 'Any number plus its opposite = 0. −' + n + ' + ' + n + ' = 0.' };
  }},
  { gen: function() {
    var total = -randInt(2,10), known = randInt(2,12);
    var other = total - known;
    var opts = buildOpts(other, [-other, total+known, known-total]);
    return { q: 'The sum of two integers is ' + total + '. One integer is ' + known + '. What is the other?',
             opts: opts, c: 0,
             e: known + ' + ? = ' + total + ' → ? = ' + total + ' − ' + known + ' = ' + other + '.' };
  }},
  { gen: function() {
    var a = -randInt(3,9), b = randInt(1,5), c = -randInt(1,5), d = randInt(2,8);
    var ans = a + b + c + d;
    var opts = buildOpts(ans, [-ans, a+b+c, a+d]);
    return { q: 'What is ' + a + ' + ' + b + ' + (' + c + ') + ' + d + '?',
             opts: opts, c: 0,
             e: 'Positives: ' + b + '+' + d + '=' + (b+d) + '. Negatives: ' + a + '+(' + c + ')=' + (a+c) + '. Total: ' + (b+d) + '+(' + (a+c) + ')=' + ans + '.' };
  }},
  { gen: function() {
    var start = -randInt(10,20), up = randInt(2,10), down = randInt(2,8);
    var ans = start + up - down;
    var opts = buildOpts(ans + ' m', [(start+up) + ' m', (start-up-down) + ' m', (start+up+down) + ' m']);
    return { q: 'A diver is at ' + start + ' m. She swims up ' + up + ' m, then down ' + down + ' m. What is her final depth?',
             opts: opts, c: 0,
             e: start + ' + ' + up + ' = ' + (start+up) + '. ' + (start+up) + ' + (−' + down + ') = ' + ans + ' m.' };
  }}
],

"mi-08-3": [
  { gen: function() {
    var a = randInt(1,9), b = randInt(a+1,15);
    var ans = a - b;
    var opts = buildOpts(ans, [-ans, a+b, b-a]);
    return { q: 'What is ' + a + ' − ' + b + '?',
             opts: opts, c: 0,
             e: a + ' − ' + b + ' = ' + a + ' + (−' + b + ') = ' + ans + '.' };
  }},
  { gen: function() {
    var a = -randInt(1,8), b = randInt(1,9);
    var ans = a - b;
    var opts = buildOpts(ans, [-ans, a+b, Math.abs(a)-b]);
    return { q: 'What is ' + a + ' − ' + b + '?',
             opts: opts, c: 0,
             e: a + ' − ' + b + ' = ' + a + ' + (−' + b + ') = ' + ans + '. Both negative: ' + Math.abs(a) + '+' + b + '=' + Math.abs(ans) + ', keep negative.' };
  }},
  { gen: function() {
    var a = -randInt(1,8), b = -randInt(1,9);
    var ans = a - b;
    var opts = buildOpts(ans, [a+b, -(a-b), a*b]);
    return { q: 'What is ' + a + ' − (' + b + ')?',
             opts: opts, c: 0,
             e: a + ' − (' + b + ') = ' + a + ' + ' + (-b) + ' = ' + ans + '. Subtracting a negative = adding a positive.' };
  }},
  { gen: function() {
    var oslo = -randInt(2,10), diff = randInt(1,8);
    var helsinki = oslo - diff;
    var ans = diff;
    var opts = buildOpts(ans + '°C', [-ans + '°C', (oslo+Math.abs(helsinki)) + '°C', diff*2 + '°C']);
    return { q: 'The temperature in Oslo is ' + oslo + '°C and in Helsinki it is ' + helsinki + '°C. How many degrees warmer is Oslo?',
             opts: opts, c: 0,
             e: oslo + ' − (' + helsinki + ') = ' + oslo + ' + ' + (-helsinki) + ' = ' + ans + '°C. Oslo is ' + ans + '°C warmer.' };
  }},
  { gen: function() {
    var a = randInt(1,9), b = -randInt(1,9);
    var ans = a - b;
    var opts = buildOpts(ans, [a+b, -(a-b), Math.abs(b)-a]);
    return { q: 'What is ' + a + ' − (' + b + ')?',
             opts: opts, c: 0,
             e: a + ' − (' + b + ') = ' + a + ' + ' + (-b) + ' = ' + ans + '.' };
  }},
  { gen: function() {
    var n = randInt(2,15);
    var opts = buildOpts(0, [-2*n, 2*n, -n]);
    return { q: 'What is −' + n + ' − (−' + n + ')?',
             opts: opts, c: 0,
             e: '−' + n + ' − (−' + n + ') = −' + n + ' + ' + n + ' = 0. Any number minus itself = 0.' };
  }},
  { gen: function() {
    var start = -randInt(20,50), rise = randInt(5,20), dive = randInt(5,20);
    var ans = start + rise - dive;
    var opts = buildOpts(ans + ' m', [(start+rise) + ' m', (start-rise-dive) + ' m', (start+dive) + ' m']);
    return { q: 'A submarine at ' + start + ' m rises ' + rise + ' m then dives ' + dive + ' m. What is the final depth?',
             opts: opts, c: 0,
             e: start + ' + ' + rise + ' = ' + (start+rise) + '. ' + (start+rise) + ' − ' + dive + ' = ' + ans + ' m.' };
  }},
  { gen: function() {
    var rhs = randInt(1,8), subtracted = -randInt(1,9);
    var n = rhs - (-subtracted);
    var opts = buildOpts(n, [-n, rhs+(-subtracted), rhs]);
    return { q: 'What value of n satisfies: n − (' + subtracted + ') = ' + rhs + '?',
             opts: opts, c: 0,
             e: 'n + ' + (-subtracted) + ' = ' + rhs + ' → n = ' + rhs + ' − ' + (-subtracted) + ' = ' + n + '.' };
  }},
  {q:"Which expression equals −1 − (−6) − 4?",opts:["1","−11","11","−1"],c:0,
   e:"−1 + 6 − 4 = 5 − 4 = 1."},
  {q:"The highest point in Death Valley is 252 m above sea level. The lowest is 86 m below sea level. What is the difference in height?",
   opts:["338 m","166 m","252 m","86 m"],c:0,
   e:"252 − (−86) = 252 + 86 = 338 m."}
],

"mi-08-4": [
  { gen: function() {
    var a = -randInt(2,9), b = randInt(2,9);
    var ans = a * b;
    var opts = buildOpts(ans, [-ans, a+b, a-b]);
    return { q: 'What is ' + a + ' × ' + b + '?',
             opts: opts, c: 0,
             e: 'Different signs (negative × positive) → negative. ' + Math.abs(a) + '×' + b + '=' + Math.abs(ans) + ' → ' + ans + '.' };
  }},
  { gen: function() {
    var a = -randInt(2,9), b = -randInt(2,9);
    var ans = a * b;
    var opts = buildOpts(ans, [-ans, a+b, Math.abs(a)-Math.abs(b)]);
    return { q: 'What is ' + a + ' × (' + b + ')?',
             opts: opts, c: 0,
             e: 'Same signs (negative × negative) → positive. ' + Math.abs(a) + '×' + Math.abs(b) + '=' + ans + '.' };
  }},
  { gen: function() {
    var b = randInt(2,9), q = randInt(2,9);
    var a = -(b*q);
    var ans = -q;
    var opts = buildOpts(ans, [-ans, a+b, a-b]);
    return { q: 'What is ' + a + ' ÷ ' + b + '?',
             opts: opts, c: 0,
             e: 'Different signs → negative. ' + Math.abs(a) + '÷' + b + '=' + q + ' → ' + ans + '.' };
  }},
  { gen: function() {
    var b = -randInt(2,9), q = randInt(2,9);
    var a = b * q;
    var ans = q;
    var opts = buildOpts(ans, [-ans, a+Math.abs(b), Math.abs(a)-Math.abs(b)]);
    return { q: 'What is ' + a + ' ÷ (' + b + ')?',
             opts: opts, c: 0,
             e: 'Same signs → positive. ' + Math.abs(a) + '÷' + Math.abs(b) + '=' + ans + '.' };
  }},
  { gen: function() {
    var b = -randInt(2,9);
    var ans = b*b;
    var opts = buildOpts(ans, [-ans, 2*b, b+b]);
    return { q: 'What is (' + b + ')²?',
             opts: opts, c: 0,
             e: '(' + b + ')² = (' + b + ') × (' + b + ') = +' + ans + '. Negative × negative = positive.' };
  }},
  { gen: function() {
    var rate = -randInt(2,6), time = randInt(2,8);
    var ans = rate * time;
    var opts = buildOpts(ans, [-ans, rate+time, Math.abs(rate)*time]);
    return { q: 'A lift descends ' + Math.abs(rate) + ' floors per minute for ' + time + ' minutes. Express the change in floors as an integer.',
             opts: opts, c: 0,
             e: rate + ' × ' + time + ' = ' + ans + ' floors (' + Math.abs(ans) + ' floors down).' };
  }},
  { gen: function() {
    var b = -randInt(2,6);
    var ans = b*b*b;
    var opts = buildOpts(ans, [-ans, b*b, b*3]);
    return { q: 'What is (' + b + ')³?',
             opts: opts, c: 0,
             e: '(' + b + ')³=(' + b + ')×(' + b + ')×(' + b + ')=' + b*b + '×(' + b + ')=' + ans + '. Odd power of a negative = negative.' };
  }},
  { gen: function() {
    var drop = -randInt(2,6), hours = randInt(2,8);
    var ans = drop * hours;
    var opts = buildOpts(ans + '°C', [-ans + '°C', (drop+hours) + '°C', Math.abs(ans) + '°C']);
    return { q: 'The temperature drops by ' + Math.abs(drop) + '°C each hour for ' + hours + ' hours. What is the total temperature change?',
             opts: opts, c: 0,
             e: drop + ' × ' + hours + ' = ' + ans + '°C.' };
  }},
  { gen: function() {
    var neg = -randInt(2,9), result = randInt(2,9)*Math.abs(neg);
    var n = result / neg;
    var opts = buildOpts(n, [-n, result+neg, result-neg]);
    return { q: 'If ' + neg + ' × n = ' + result + ', what is n?',
             opts: opts, c: 0,
             e: 'n = ' + result + ' ÷ (' + neg + ') = ' + n + '. Check: ' + neg + ' × ' + n + ' = ' + result + ' ✓.' };
  }},
  {q:"Which of the following is always negative?",opts:["A negative number raised to an ODD power","A negative number raised to an EVEN power","The product of two negative numbers","The sum of two negative numbers squared"],c:0,
   e:"Negative base to an ODD power always gives a negative result (e.g. (−2)³=−8). Even power gives positive (e.g. (−2)²=4). Sum of two negatives squared = positive."}
]

}); // end Object.assign
