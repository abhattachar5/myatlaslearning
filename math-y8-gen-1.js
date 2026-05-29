// math-y8-gen-1.js — Year 8 generative test questions
// Islands: m8i-01-3, m8i-01-4, m8i-03-2, m8i-06-2, m8i-06-3, m8i-07-2
// 6 generators per island, at least 2 tagged 'greater-depth'

// ══════════════════════════════════════════════════════════════════════════
// m8i-01-3: Standard Form
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-01-3"] = [
  // 1. Ordinary large number → standard form
  { depth: 'medium', gen: function() {
    var exp = _randInt(3, 8);
    var mantissa = _randInt(10, 99) / 10; // 1.0–9.9
    var val = mantissa * Math.pow(10, exp);
    var ans = mantissa + ' × 10^' + exp;
    var w1 = mantissa + ' × 10^' + (exp + 1);
    var w2 = mantissa + ' × 10^' + (exp - 1);
    var w3 = (mantissa * 10) + ' × 10^' + (exp - 1);
    return {
      q: 'Write ' + val.toLocaleString() + ' in standard form.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'Move the decimal point so 1 ≤ a < 10: ' + mantissa + '. Count the moves: ' + exp + '. Answer: ' + ans + '.'
    };
  }},
  // 2. Standard form → ordinary number (small power)
  { depth: 'medium', gen: function() {
    var exp = _randInt(2, 5);
    var mantissa = _randInt(10, 99) / 10;
    var val = mantissa * Math.pow(10, exp);
    // Round to avoid floating point issues
    val = Math.round(val * 1000) / 1000;
    var ans = val.toLocaleString();
    var w1 = (mantissa * Math.pow(10, exp + 1)).toLocaleString();
    var w2 = (mantissa * Math.pow(10, exp - 1)).toLocaleString();
    var w3 = (mantissa + exp).toLocaleString();
    return {
      q: 'Write ' + mantissa + ' × 10^' + exp + ' as an ordinary number.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: mantissa + ' × 10^' + exp + ' = ' + mantissa + ' × ' + Math.pow(10, exp).toLocaleString() + ' = ' + ans + '.'
    };
  }},
  // 3. Ordinary small number → standard form (negative exponent)
  { depth: 'medium', gen: function() {
    var exp = _randInt(2, 5);
    var mantissa = _randInt(10, 99) / 10;
    var negExp = -exp;
    var ans = mantissa + ' × 10^' + negExp;
    var w1 = mantissa + ' × 10^' + exp;
    var w2 = mantissa + ' × 10^' + (negExp + 1);
    var w3 = (mantissa / 10) + ' × 10^' + (negExp + 1);
    return {
      q: 'Write ' + mantissa + ' × 10^' + negExp + ' as an ordinary number, then write the original in standard form.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'The mantissa ' + mantissa + ' is between 1 and 10, so standard form is ' + ans + '. The negative exponent means it is a small number.'
    };
  }},
  // 4. Compare two standard-form numbers — which is larger?
  { depth: 'medium', gen: function() {
    var expA = _randInt(4, 7);
    var expB = _randInt(2, expA - 1);
    var mA = _randInt(10, 99) / 10;
    var mB = _randInt(10, 99) / 10;
    var A = mA + ' × 10^' + expA;
    var B = mB + ' × 10^' + expB;
    var ans = A; // A always has larger exponent so is larger
    return {
      q: 'Which number is larger: ' + A + ' or ' + B + '?',
      opts: _buildOpts(ans, [B, 'They are equal', 'Cannot tell']),
      c: 0,
      e: 'Compare powers first: 10^' + expA + ' > 10^' + expB + ', so ' + A + ' > ' + B + '.'
    };
  }},
  // 5. Greater depth: same power, compare mantissas
  { depth: 'greater-depth', gen: function() {
    var exp = _randInt(4, 8);
    var mA = _randInt(20, 49) / 10; // 2.0–4.9
    var mB = _randInt(51, 99) / 10; // 5.1–9.9
    var A = mA + ' × 10^' + exp;
    var B = mB + ' × 10^' + exp;
    // B > A
    return {
      q: 'Which number is larger: ' + A + ' or ' + B + '?',
      opts: _buildOpts(B, [A, 'They are equal', 'Cannot tell without a calculator']),
      c: 0,
      e: 'Same power of 10, so compare mantissas: ' + mB + ' > ' + mA + ', so ' + B + ' is larger.'
    };
  }},
  // 6. Greater depth: convert and order three numbers in standard form
  { depth: 'greater-depth', gen: function() {
    var exp1 = _randInt(3, 5);
    var exp2 = exp1 + 1;
    var exp3 = exp1 - 1;
    var m1 = _randInt(12, 98) / 10;
    var m2 = _randInt(12, 98) / 10;
    var m3 = _randInt(12, 98) / 10;
    var v1 = m1 * Math.pow(10, exp1);
    var v2 = m2 * Math.pow(10, exp2);
    var v3 = m3 * Math.pow(10, exp3);
    var nums = [
      { label: m1 + ' × 10^' + exp1, val: v1 },
      { label: m2 + ' × 10^' + exp2, val: v2 },
      { label: m3 + ' × 10^' + exp3, val: v3 }
    ];
    nums.sort(function(a, b) { return a.val - b.val; });
    var ans = nums[0].label + ', ' + nums[1].label + ', ' + nums[2].label;
    var w1 = nums[2].label + ', ' + nums[1].label + ', ' + nums[0].label;
    var w2 = nums[0].label + ', ' + nums[2].label + ', ' + nums[1].label;
    var w3 = nums[1].label + ', ' + nums[0].label + ', ' + nums[2].label;
    return {
      q: 'Order smallest to largest: ' + nums[0].label + ', ' + nums[2].label + ', ' + nums[1].label,
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'Compare powers of 10, then mantissas. Smallest to largest: ' + ans + '.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-01-4: Classify & Compare Numbers
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-01-4"] = [
  // 1. Classify a positive integer
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 50);
    var ans = 'Natural number, whole number, integer, rational number';
    var w1 = 'Irrational number';
    var w2 = 'Natural number only';
    var w3 = 'Integer only';
    return {
      q: 'Which sets does ' + n + ' belong to? Select all that apply.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: n + ' is positive and whole, so it is a natural number, whole number, integer, and rational number (= ' + n + '/1).'
    };
  }},
  // 2. Classify a negative integer
  { depth: 'medium', gen: function() {
    var n = _randInt(-20, -1);
    var ans = 'Integer and rational number only';
    var w1 = 'Natural number, whole number, integer, rational number';
    var w2 = 'Irrational number';
    var w3 = 'Rational number only';
    return {
      q: 'Which sets does ' + n + ' belong to?',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: n + ' is negative, so it is NOT a natural number or whole number. It IS an integer and rational number.'
    };
  }},
  // 3. Is √n rational or irrational?
  { depth: 'medium', gen: function() {
    // Pick a non-perfect-square to get irrational
    var nonSquares = [2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20];
    var n = _pickFrom(nonSquares);
    var ans = 'Irrational';
    var w1 = 'Rational';
    var w2 = 'Integer';
    var w3 = 'Natural number';
    return {
      q: 'Is √' + n + ' rational or irrational?',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: n + ' is not a perfect square, so √' + n + ' cannot be written as a fraction. It is irrational.'
    };
  }},
  // 4. √ of a perfect square → rational
  { depth: 'medium', gen: function() {
    var roots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var r = _pickFrom(roots);
    var n = r * r;
    var ans = 'Rational (= ' + r + ')';
    var w1 = 'Irrational';
    var w2 = 'Cannot be determined';
    var w3 = 'Irrational, because it involves a square root';
    return {
      q: 'Is √' + n + ' rational or irrational?',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: n + ' = ' + r + '², so √' + n + ' = ' + r + ', which is a whole number and therefore rational.'
    };
  }},
  // 5. Greater depth: true/false membership statement
  { depth: 'greater-depth', gen: function() {
    // Always present a TRUE statement so answer is 'True'
    var cases = [
      { stmt: 'Every natural number is also an integer.', ans: 'True',
        e: 'Natural numbers (1, 2, 3, …) are all integers. The statement is TRUE.' },
      { stmt: 'Every integer is also a natural number.', ans: 'False',
        e: 'Negative integers (e.g. −3) are NOT natural numbers. The statement is FALSE.' },
      { stmt: 'π is a rational number.', ans: 'False',
        e: 'π cannot be expressed as a fraction of two integers; it is irrational.' },
      { stmt: 'All whole numbers are rational numbers.', ans: 'True',
        e: 'Every whole number n equals n/1, so it is rational. The statement is TRUE.' }
    ];
    var c = _pickFrom(cases);
    return {
      q: 'True or False: ' + c.stmt,
      opts: _buildOpts(c.ans, ['True', 'False', 'Sometimes true', 'Cannot tell'].filter(function(x){ return x !== c.ans; })),
      c: 0,
      e: c.e
    };
  }},
  // 6. Greater depth: identify the irrational number from a list
  { depth: 'greater-depth', gen: function() {
    var nonSq = _pickFrom([2, 3, 5, 6, 7, 8, 10, 11, 13, 15, 17, 19, 20, 23]);
    var sq = _pickFrom([4, 9, 16, 25, 36, 49]);
    var sqRoot = Math.sqrt(sq);
    var frac = _randInt(1, 9) + '/' + _randInt(2, 9);
    var integer = _randInt(2, 15);
    var ans = '√' + nonSq;
    var opts = _buildOpts(ans, ['√' + sq + ' (= ' + sqRoot + ')', frac, String(integer)]);
    return {
      q: 'Which of these is an irrational number?',
      opts: opts,
      c: 0,
      e: '√' + nonSq + ' is irrational because ' + nonSq + ' is not a perfect square. The others are rational.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-03-2: Convert Fractions, Decimals & Mixed Numbers
// ══════════════════════════════════════════════════════════════════════════

// GCD helper (local, not a global)
function _gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }

TEST_GENERATORS["m8i-03-2"] = [
  // 1. Mixed number → improper fraction
  { depth: 'medium', gen: function() {
    var w = _randInt(1, 5);
    var num = _randInt(1, 6);
    var den = _randInt(num + 1, num + 6);
    var impNum = w * den + num;
    var ans = impNum + '/' + den;
    var w1 = (w * den - num) + '/' + den;
    var w2 = (w + num) + '/' + den;
    var w3 = impNum + '/' + (den + 1);
    return {
      q: 'Write ' + w + ' ' + num + '/' + den + ' as an improper fraction.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: w + ' × ' + den + ' + ' + num + ' = ' + impNum + ', so the answer is ' + ans + '.'
    };
  }},
  // 2. Improper fraction → mixed number
  { depth: 'medium', gen: function() {
    var den = _randInt(3, 9);
    var whole = _randInt(1, 4);
    var rem = _randInt(1, den - 1);
    var impNum = whole * den + rem;
    var ans = whole + ' ' + rem + '/' + den;
    var w1 = (whole + 1) + ' ' + rem + '/' + den;
    var w2 = whole + ' ' + (rem + 1) + '/' + den;
    var w3 = (impNum - 1) + '/' + den;
    return {
      q: 'Write ' + impNum + '/' + den + ' as a mixed number.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: impNum + ' ÷ ' + den + ' = ' + whole + ' remainder ' + rem + ', so the answer is ' + ans + '.'
    };
  }},
  // 3. Fraction → decimal (terminating)
  { depth: 'medium', gen: function() {
    // Use denominators that give terminating decimals: 2, 4, 5, 8, 10, 20, 25
    var pairs = [[1,2],[3,4],[1,4],[1,5],[2,5],[3,5],[4,5],[1,8],[3,8],[5,8],[7,8],[1,10],[3,10],[7,10],[1,20],[3,20],[1,25],[2,25]];
    var p = _pickFrom(pairs);
    var num = p[0], den = p[1];
    var val = Math.round(num / den * 10000) / 10000;
    var ans = String(val);
    var w1 = String(Math.round((num + 1) / den * 10000) / 10000);
    var w2 = String(Math.round(num / (den + 1) * 10000) / 10000);
    var w3 = String(num * den);
    return {
      q: 'Convert ' + num + '/' + den + ' to a decimal.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: num + ' ÷ ' + den + ' = ' + ans + '.'
    };
  }},
  // 4. Terminating decimal → fraction in lowest terms
  { depth: 'medium', gen: function() {
    // Use decimals with 1 or 2 d.p. that simplify nicely
    var options = [
      [0.5,'1/2'],[0.25,'1/4'],[0.75,'3/4'],[0.2,'1/5'],[0.4,'2/5'],
      [0.6,'3/5'],[0.8,'4/5'],[0.1,'1/10'],[0.3,'3/10'],[0.7,'7/10'],
      [0.125,'1/8'],[0.375,'3/8'],[0.625,'5/8'],[0.875,'7/8'],[0.05,'1/20']
    ];
    var p = _pickFrom(options);
    var dec = p[0], ans = p[1];
    var numAns = parseInt(ans.split('/')[0]);
    var denAns = parseInt(ans.split('/')[1]);
    var w1 = (numAns + 1) + '/' + denAns;
    var w2 = numAns + '/' + (denAns + 1);
    // Build the raw fraction before simplifying as a distractor
    var rawDen = dec < 0.1 ? 100 : (String(dec).split('.')[1].length === 1 ? 10 : 100);
    var rawNum = Math.round(dec * rawDen);
    var w3 = rawNum === numAns ? (numAns * 2) + '/' + (denAns * 2) : rawNum + '/' + rawDen;
    return {
      q: 'Write ' + dec + ' as a fraction in its lowest terms.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: dec + ' = ' + rawNum + '/' + rawDen + '. Simplify by dividing top and bottom by ' + _gcd(rawNum, rawDen) + ' to get ' + ans + '.'
    };
  }},
  // 5. Greater depth: mixed number → decimal
  { depth: 'greater-depth', gen: function() {
    var w = _randInt(1, 5);
    var fracPairs = [[1,2],[3,4],[1,4],[1,5],[3,5],[1,8],[3,8],[5,8],[7,8]];
    var p = _pickFrom(fracPairs);
    var num = p[0], den = p[1];
    var fracDec = Math.round(num / den * 10000) / 10000;
    var ans = String(w + fracDec);
    var w1 = String(w + fracDec + 0.1);
    var w2 = String(w * fracDec);
    var w3 = String(w - 1 + fracDec);
    return {
      q: 'Convert ' + w + ' ' + num + '/' + den + ' to a decimal.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: num + '/' + den + ' = ' + fracDec + '. Add the whole number: ' + w + ' + ' + fracDec + ' = ' + ans + '.'
    };
  }},
  // 6. Greater depth: decimal → fraction in lowest terms (2 d.p.)
  { depth: 'greater-depth', gen: function() {
    // Pairs where simplification is non-trivial
    var options = [
      [0.15,'3/20'],[0.35,'7/20'],[0.45,'9/20'],[0.55,'11/20'],[0.65,'13/20'],
      [0.85,'17/20'],[0.24,'6/25'],[0.36,'9/25'],[0.48,'12/25'],[0.72,'18/25'],[0.96,'24/25']
    ];
    var p = _pickFrom(options);
    var dec = p[0], ans = p[1];
    var rawNum = Math.round(dec * 100);
    var rawDen = 100;
    var g = _gcd(rawNum, rawDen);
    var w1 = rawNum + '/' + rawDen;
    var w2 = (rawNum / g + 1) + '/' + (rawDen / g);
    var w3 = rawNum + '/' + (rawDen / 2);
    return {
      q: 'Write ' + dec + ' as a fraction in its lowest terms.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: dec + ' = ' + rawNum + '/100. HCF(' + rawNum + ', 100) = ' + g + '. Divide: ' + ans + '.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-06-2: Add & Subtract Rational Numbers
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-06-2"] = [
  // 1. Add two signed decimals
  { depth: 'medium', gen: function() {
    var a = _randInt(-9, 9);
    var b = _randInt(-9, 9);
    // Use tenths so answer is clean
    var af = _randInt(1, 9) / 10;
    var bf = _randInt(1, 9) / 10;
    var aVal = a + (a >= 0 ? af : -af);
    var bVal = b + (b >= 0 ? bf : -bf);
    var ans = Math.round((aVal + bVal) * 100) / 100;
    var w1 = Math.round((aVal - bVal) * 100) / 100;
    var w2 = Math.round((Math.abs(aVal) + Math.abs(bVal)) * 100) / 100;
    var w3 = Math.round((aVal + bVal + 1) * 100) / 100;
    var aStr = aVal.toFixed(1);
    var bStr = bVal >= 0 ? '+ ' + bVal.toFixed(1) : '− ' + Math.abs(bVal).toFixed(1);
    return {
      q: 'Calculate: ' + aStr + ' ' + bStr,
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: aStr + ' + (' + bVal.toFixed(1) + ') = ' + ans + '.'
    };
  }},
  // 2. Subtract a negative decimal
  { depth: 'medium', gen: function() {
    var a = (_randInt(10, 50)) / 10; // positive
    var b = (_randInt(10, 50)) / 10; // positive, will be negated
    var ans = Math.round((a - (-b)) * 10) / 10; // a − (−b) = a + b
    var w1 = Math.round((a - b) * 10) / 10;
    var w2 = Math.round((-a + b) * 10) / 10;
    var w3 = Math.round((a + b + 1) * 10) / 10;
    return {
      q: 'Calculate: ' + a.toFixed(1) + ' − (−' + b.toFixed(1) + ')',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Subtracting a negative is the same as adding: ' + a.toFixed(1) + ' + ' + b.toFixed(1) + ' = ' + ans + '.'
    };
  }},
  // 3. Add two signed fractions (same denominator)
  { depth: 'medium', gen: function() {
    var den = _pickFrom([4, 5, 6, 8, 10]);
    var numA = _randInt(-(den - 1), den - 1);
    var numB = _randInt(-(den - 1), den - 1);
    var sumNum = numA + numB;
    var g = _gcd(Math.abs(sumNum), den);
    var ansNum = sumNum / g, ansDen = den / g;
    var ans = ansDen === 1 ? String(ansNum) : ansNum + '/' + ansDen;
    var w1Num = numA - numB;
    var gw1 = _gcd(Math.abs(w1Num), den);
    var w1 = den === 1 ? String(w1Num / gw1) : (w1Num / gw1) + '/' + (den / gw1);
    var w2 = ansDen === 1 ? String(ansNum + 1) : (ansNum + 1) + '/' + ansDen;
    var w3 = (numA + numB + 1) + '/' + den;
    return {
      q: 'Calculate: ' + numA + '/' + den + ' + ' + numB + '/' + den,
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'Same denominator: (' + numA + ' + ' + numB + ')/' + den + ' = ' + sumNum + '/' + den + (g > 1 ? ' = ' + ans : '') + '.'
    };
  }},
  // 4. Subtract fractions (different denominators)
  { depth: 'medium', gen: function() {
    var den1 = _pickFrom([3, 4, 5, 6]);
    var den2 = _pickFrom([3, 4, 5, 6].filter(function(d){ return d !== den1; }));
    var numA = _randInt(1, den1 - 1);
    var numB = _randInt(1, den2 - 1);
    // a/den1 - b/den2
    var lcd = den1 * den2 / _gcd(den1, den2);
    var sumNum = numA * (lcd / den1) - numB * (lcd / den2);
    var g = _gcd(Math.abs(sumNum), lcd);
    var ansNum = sumNum / g, ansDen = lcd / g;
    var ans = ansDen === 1 ? String(ansNum) : ansNum + '/' + ansDen;
    var w1Num = numA * (lcd / den1) + numB * (lcd / den2);
    var gw = _gcd(Math.abs(w1Num), lcd);
    var w1 = (w1Num / gw) + '/' + (lcd / gw);
    var w2 = numA + '/' + den2;
    var w3 = numB + '/' + den1;
    return {
      q: 'Calculate: ' + numA + '/' + den1 + ' − ' + numB + '/' + den2,
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'LCD = ' + lcd + ': ' + (numA * lcd / den1) + '/' + lcd + ' − ' + (numB * lcd / den2) + '/' + lcd + ' = ' + sumNum + '/' + lcd + (g > 1 ? ' = ' + ans : '') + '.'
    };
  }},
  // 5. Greater depth: add a negative fraction and a positive fraction
  { depth: 'greater-depth', gen: function() {
    var den1 = _pickFrom([3, 4, 5, 6, 8]);
    var den2 = _pickFrom([3, 4, 5, 6, 8].filter(function(d){ return d !== den1; }));
    var numA = -_randInt(1, den1 - 1); // negative
    var numB = _randInt(1, den2 - 1);  // positive
    var lcd = den1 * den2 / _gcd(den1, den2);
    var sumNum = numA * (lcd / den1) + numB * (lcd / den2);
    var g = _gcd(Math.abs(sumNum), lcd);
    var ansNum = sumNum / g, ansDen = lcd / g;
    var ans = ansDen === 1 ? String(ansNum) : ansNum + '/' + ansDen;
    var w1Num = -sumNum / g;
    var w1 = ansDen === 1 ? String(w1Num) : w1Num + '/' + ansDen;
    var w2 = ansDen === 1 ? String(ansNum + 1) : (ansNum + 1) + '/' + ansDen;
    var w3 = (Math.abs(numA) + numB) + '/' + lcd;
    return {
      q: 'Calculate: ' + numA + '/' + den1 + ' + ' + numB + '/' + den2,
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'LCD = ' + lcd + ': (' + (numA * lcd / den1) + ' + ' + (numB * lcd / den2) + ')/' + lcd + ' = ' + sumNum + '/' + lcd + (g > 1 ? ' = ' + ans : '') + '.'
    };
  }},
  // 6. Greater depth: chain add/subtract signed decimals
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-5, 5);
    var b = _randInt(-5, 5);
    var c = _randInt(-5, 5);
    // Use integers only to keep answer clean
    var ans = a + b + c;
    var w1 = a - b + c;
    var w2 = a + b - c;
    var w3 = a - b - c;
    return {
      q: 'Calculate: ' + a + ' + (' + b + ') + (' + c + ')',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: a + ' + (' + b + ') = ' + (a + b) + '; then ' + (a + b) + ' + (' + c + ') = ' + ans + '.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-06-3: Multiply & Divide Rational Numbers
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-06-3"] = [
  // 1. Multiply two signed integers
  { depth: 'medium', gen: function() {
    var a = _pickFrom([-6,-5,-4,-3,-2,-1,1,2,3,4,5,6]);
    var b = _pickFrom([-6,-5,-4,-3,-2,-1,1,2,3,4,5,6]);
    var ans = a * b;
    var w1 = -ans;
    var w2 = a + b;
    var w3 = Math.abs(a) * Math.abs(b) + 1;
    return {
      q: 'Calculate: (' + a + ') × (' + b + ')',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Signs: ' + (a < 0 ? 'negative' : 'positive') + ' × ' + (b < 0 ? 'negative' : 'positive') + ' = ' + (ans > 0 ? 'positive' : (ans < 0 ? 'negative' : 'zero')) + '. ' + Math.abs(a) + ' × ' + Math.abs(b) + ' = ' + Math.abs(ans) + ', so answer is ' + ans + '.'
    };
  }},
  // 2. Divide two signed integers (clean division)
  { depth: 'medium', gen: function() {
    var result = _pickFrom([-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8]);
    var divisor = _pickFrom([-6,-5,-4,-3,-2,-1,1,2,3,4,5,6]);
    var dividend = result * divisor;
    var ans = result;
    var w1 = -result;
    var w2 = result + 1;
    var w3 = dividend * divisor;
    return {
      q: 'Calculate: (' + dividend + ') ÷ (' + divisor + ')',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: Math.abs(dividend) + ' ÷ ' + Math.abs(divisor) + ' = ' + Math.abs(result) + '. Signs ' + (dividend < 0 ? 'negative' : 'positive') + ' ÷ ' + (divisor < 0 ? 'negative' : 'positive') + ' = ' + (result < 0 ? 'negative' : 'positive') + '. Answer: ' + ans + '.'
    };
  }},
  // 3. Multiply two signed decimals (1 d.p.)
  { depth: 'medium', gen: function() {
    var a = _pickFrom([-3,-2,-1,1,2,3]);
    var bf = _pickFrom([0.2, 0.3, 0.4, 0.5, 0.6, 0.8]);
    var ans = Math.round(a * bf * 100) / 100;
    var w1 = Math.round(-a * bf * 100) / 100;
    var w2 = Math.round((a + bf) * 100) / 100;
    var w3 = Math.round(a * bf * 10) / 10 + 0.1;
    return {
      q: 'Calculate: ' + a + ' × ' + bf,
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: Math.abs(a) + ' × ' + bf + ' = ' + Math.abs(ans) + '. The sign is ' + (ans < 0 ? 'negative' : 'positive') + ', so the answer is ' + ans + '.'
    };
  }},
  // 4. Multiply two signed fractions
  { depth: 'medium', gen: function() {
    var numA = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var denA = _randInt(2, 6);
    var numB = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var denB = _randInt(2, 6);
    var rawNum = numA * numB;
    var rawDen = denA * denB;
    var g = _gcd(Math.abs(rawNum), rawDen);
    var ansNum = rawNum / g, ansDen = rawDen / g;
    var ans = ansDen === 1 ? String(ansNum) : ansNum + '/' + ansDen;
    var w1 = ansDen === 1 ? String(-ansNum) : (-ansNum) + '/' + ansDen;
    var w2 = (numA + numB) + '/' + (denA + denB);
    var w3 = rawNum + '/' + rawDen;
    return {
      q: 'Calculate: (' + numA + '/' + denA + ') × (' + numB + '/' + denB + ')',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'Multiply numerators: ' + numA + ' × ' + numB + ' = ' + rawNum + '. Multiply denominators: ' + denA + ' × ' + denB + ' = ' + rawDen + '. Simplify: ' + ans + '.'
    };
  }},
  // 5. Greater depth: divide two signed fractions
  { depth: 'greater-depth', gen: function() {
    var numA = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var denA = _randInt(2, 6);
    var numB = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var denB = _randInt(2, 6);
    // a/denA ÷ b/denB = a*denB / (denA*b)
    var rawNum = numA * denB;
    var rawDen = denA * numB;
    // keep denominator positive
    if (rawDen < 0) { rawNum = -rawNum; rawDen = -rawDen; }
    var g = _gcd(Math.abs(rawNum), rawDen);
    var ansNum = rawNum / g, ansDen = rawDen / g;
    var ans = ansDen === 1 ? String(ansNum) : ansNum + '/' + ansDen;
    var w1 = ansDen === 1 ? String(-ansNum) : (-ansNum) + '/' + ansDen;
    var w2Raw = numA * numB; var w2Den = denA * denB; var gw = _gcd(Math.abs(w2Raw), w2Den);
    var w2 = (w2Den === 1 || w2Den / gw === 1) ? String(w2Raw / gw) : (w2Raw / gw) + '/' + (w2Den / gw);
    var w3 = numA + '/' + numB;
    return {
      q: 'Calculate: (' + numA + '/' + denA + ') ÷ (' + numB + '/' + denB + ')',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: 'Dividing by a fraction = multiplying by its reciprocal: ' + numA + '/' + denA + ' × ' + denB + '/' + numB + ' = ' + rawNum + '/' + (rawDen) + ' = ' + ans + '.'
    };
  }},
  // 6. Greater depth: chain multiply/divide signed numbers
  { depth: 'greater-depth', gen: function() {
    var a = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var b = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var c = _pickFrom([-4,-3,-2,-1,1,2,3,4]);
    var ans = a * b * c;
    var w1 = a * b + c;
    var w2 = -ans;
    var w3 = a + b * c;
    return {
      q: 'Calculate: (' + a + ') × (' + b + ') × (' + c + ')',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: a + ' × ' + b + ' = ' + (a * b) + '; then ' + (a * b) + ' × ' + c + ' = ' + ans + '.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-07-2: Indices with Special Bases
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-07-2"] = [
  // 1. Negative base, even power → positive
  { depth: 'medium', gen: function() {
    var b = _pickFrom([-2,-3,-4,-5]);
    var ans = b * b;
    var w1 = -ans;
    var w2 = b * 2;
    var w3 = Math.abs(b);
    return {
      q: 'Evaluate (' + b + ')².',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: '(' + b + ')² = ' + b + ' × ' + b + ' = ' + ans + '. A negative number squared is always positive.'
    };
  }},
  // 2. Negative base, odd power → negative
  { depth: 'medium', gen: function() {
    var b = _pickFrom([-2,-3,-4,-5]);
    var ans = b * b * b;
    var w1 = -ans;
    var w2 = b * 3;
    var w3 = b * b;
    return {
      q: 'Evaluate (' + b + ')³.',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: '(' + b + ')³ = ' + b + ' × ' + b + ' × ' + b + ' = ' + ans + '. A negative number cubed is always negative.'
    };
  }},
  // 3. Decimal base squared
  { depth: 'medium', gen: function() {
    var bases = [0.1, 0.2, 0.3, 0.4, 0.5];
    var base = _pickFrom(bases);
    var ans = Math.round(base * base * 10000) / 10000;
    var w1 = Math.round(base * 2 * 1000) / 1000;
    var w2 = Math.round(base * 10 * 100) / 100;
    var w3 = Math.round(ans * 10 * 100) / 100;
    return {
      q: 'Evaluate ' + base + '².',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: base + '² = ' + base + ' × ' + base + ' = ' + ans + '.'
    };
  }},
  // 4. Fractional base squared
  { depth: 'medium', gen: function() {
    var numB = _randInt(1, 4);
    var denB = _randInt(numB + 1, numB + 5);
    var ansNum = numB * numB;
    var ansDen = denB * denB;
    var g = _gcd(ansNum, ansDen);
    var rNum = ansNum / g, rDen = ansDen / g;
    var ans = rDen === 1 ? String(rNum) : rNum + '/' + rDen;
    var w1 = (numB * 2) + '/' + (denB * 2);
    var w2 = numB + '/' + ansDen;
    var w3 = ansNum + '/' + denB;
    return {
      q: 'Evaluate (' + numB + '/' + denB + ')².',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: '(' + numB + '/' + denB + ')² = ' + numB + '²/' + denB + '² = ' + ansNum + '/' + ansDen + (g > 1 ? ' = ' + ans : '') + '.'
    };
  }},
  // 5. Greater depth: fractional base cubed
  { depth: 'greater-depth', gen: function() {
    var numB = _randInt(1, 3);
    var denB = _randInt(numB + 1, numB + 4);
    var ansNum = numB * numB * numB;
    var ansDen = denB * denB * denB;
    var g = _gcd(ansNum, ansDen);
    var rNum = ansNum / g, rDen = ansDen / g;
    var ans = rDen === 1 ? String(rNum) : rNum + '/' + rDen;
    var w1 = (numB * 3) + '/' + (denB * 3);
    var w2 = (numB * numB) + '/' + (denB * denB);
    var w3 = ansNum + '/' + denB;
    return {
      q: 'Evaluate (' + numB + '/' + denB + ')³.',
      opts: _buildOpts(ans, [w1, w2, w3]),
      c: 0,
      e: '(' + numB + '/' + denB + ')³ = ' + numB + '³/' + denB + '³ = ' + ansNum + '/' + ansDen + (g > 1 ? ' = ' + ans : '') + '.'
    };
  }},
  // 6. Greater depth: negative base to power 4 (even) — distinguish from negative result
  { depth: 'greater-depth', gen: function() {
    var b = _pickFrom([-2,-3,-4]);
    var ans = b * b * b * b;
    var w1 = -ans;
    var w2 = b * 4;
    var w3 = b * b;
    return {
      q: 'Evaluate (' + b + ')⁴.',
      opts: _buildOpts(String(ans), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: '(' + b + ')⁴ = ' + b + ' × ' + b + ' × ' + b + ' × ' + b + ' = ' + ans + '. Any non-zero number raised to an even power is positive.'
    };
  }}
];
