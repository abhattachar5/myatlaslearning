// math-y8-gen-2.js — Year 8 generative test questions (batch 2)
// Islands: m8i-08-4, m8i-08-5, m8i-10-3, m8i-12-4, m8i-11-3, m8i-28-3

// ── m8i-08-4: Direct Proportion & Graphs ─────────────────────────────────
TEST_GENERATORS["m8i-08-4"] = [
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 9);
    var x = _randInt(2, 10);
    var y = k * x;
    return {
      q: 'A quantity y is directly proportional to x. When x = ' + x + ', y = ' + y + '. What is the constant of proportionality k?',
      opts: _buildOpts(String(k), [String(y), String(x + k), String(y - x)]),
      c: 0,
      e: 'k = y ÷ x = ' + y + ' ÷ ' + x + ' = ' + k + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 8);
    var x = _randInt(3, 12);
    var y = k * x;
    return {
      q: 'y is directly proportional to x with k = ' + k + '. Find y when x = ' + x + '.',
      opts: _buildOpts(String(y), [String(k + x), String(y + k), String(y - k)]),
      c: 0,
      e: 'y = k × x = ' + k + ' × ' + x + ' = ' + y + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 9);
    var pairs = [];
    for (var i = 1; i <= 4; i++) pairs.push([i, k * i]);
    var tbl = 'x: 1, 2, 3, 4 | y: ' + pairs.map(function(p){ return p[1]; }).join(', ');
    return {
      q: 'A table shows: ' + tbl + '. Write the equation connecting y and x.',
      opts: _buildOpts('y = ' + k + 'x', ['y = x + ' + k, 'y = ' + (k + 1) + 'x', 'y = ' + (k - 1) + 'x']),
      c: 0,
      e: 'k = y ÷ x = ' + (k * 1) + ' ÷ 1 = ' + k + '. So y = ' + k + 'x.'
    };
  }},
  { depth: 'medium', gen: function() {
    var k = _randInt(3, 10);
    var x1 = _randInt(2, 5);
    var y1 = k * x1;
    var x2 = _randInt(6, 12);
    var y2 = k * x2;
    return {
      q: 'y is directly proportional to x. Given that when x = ' + x1 + ', y = ' + y1 + ', find y when x = ' + x2 + '.',
      opts: _buildOpts(String(y2), [String(y1 + x2), String(k * (x2 + 1)), String(k * (x2 - 1))]),
      c: 0,
      e: 'k = ' + y1 + ' ÷ ' + x1 + ' = ' + k + '. y = ' + k + ' × ' + x2 + ' = ' + y2 + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 9);
    var y = _randInt(2, 8) * k;
    var x = y / k;
    return {
      q: 'y is directly proportional to x with constant k = ' + k + '. If y = ' + y + ', find x.',
      opts: _buildOpts(String(x), [String(y * k), String(y + k), String(y - k)]),
      c: 0,
      e: 'x = y ÷ k = ' + y + ' ÷ ' + k + ' = ' + x + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 8);
    var x1 = _randInt(1, 4);
    var y1 = k * x1;
    var x2 = _randInt(5, 10);
    var y2 = k * x2;
    return {
      q: 'A graph of y against x passes through (0, 0) and (' + x1 + ', ' + y1 + '). What is the y-value when x = ' + x2 + '?',
      opts: _buildOpts(String(y2), [String(y1 + x2), String(y2 + k), String(y2 - k)]),
      c: 0,
      e: 'The graph shows direct proportion. k = ' + y1 + ' ÷ ' + x1 + ' = ' + k + '. y = ' + k + ' × ' + x2 + ' = ' + y2 + '.'
    };
  }}
];

// ── m8i-08-5: Rate of Change ──────────────────────────────────────────────
TEST_GENERATORS["m8i-08-5"] = [
  { depth: 'medium', gen: function() {
    var rate = _randInt(2, 15);
    var dt = _randInt(2, 6);
    var dy = rate * dt;
    var y0 = _randInt(1, 5) * 10;
    var y1 = y0 + dy;
    return {
      q: 'A table shows distance (km): at time 0 h = ' + y0 + ' km, at time ' + dt + ' h = ' + y1 + ' km. What is the rate of change in km per hour?',
      opts: _buildOpts(String(rate), [String(dy), String(rate + 1), String(rate - 1)]),
      c: 0,
      e: 'Rate = change in y ÷ change in x = (' + y1 + ' − ' + y0 + ') ÷ ' + dt + ' = ' + dy + ' ÷ ' + dt + ' = ' + rate + ' km/h.'
    };
  }},
  { depth: 'medium', gen: function() {
    var ratePerHour = _randInt(5, 20);
    var hours = _randInt(2, 8);
    var total = ratePerHour * hours;
    return {
      q: 'A worker earns £' + ratePerHour + ' per hour. How much does she earn in ' + hours + ' hours?',
      opts: _buildOpts('£' + total, ['£' + (ratePerHour + hours), '£' + (total + ratePerHour), '£' + (total - ratePerHour)]),
      c: 0,
      e: 'Rate = £' + ratePerHour + '/hour. Earnings = ' + ratePerHour + ' × ' + hours + ' = £' + total + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var rate = _randInt(2, 10);
    var x1 = _randInt(1, 4);
    var x2 = x1 + _randInt(2, 5);
    var y1 = _randInt(2, 8) * 10;
    var y2 = y1 + rate * (x2 - x1);
    return {
      q: 'A table shows: when x = ' + x1 + ', y = ' + y1 + '; when x = ' + x2 + ', y = ' + y2 + '. What is the rate of change?',
      opts: _buildOpts(String(rate), [String(y2 - y1), String(rate + 2), String(rate - 1)]),
      c: 0,
      e: 'Rate = (' + y2 + ' − ' + y1 + ') ÷ (' + x2 + ' − ' + x1 + ') = ' + (y2 - y1) + ' ÷ ' + (x2 - x1) + ' = ' + rate + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var litrePerMin = _randInt(3, 12);
    var minutes = _randInt(3, 9);
    var totalLitres = litrePerMin * minutes;
    return {
      q: 'Water fills a tank at ' + litrePerMin + ' litres per minute. How many litres are in the tank after ' + minutes + ' minutes?',
      opts: _buildOpts(String(totalLitres), [String(litrePerMin + minutes), String(totalLitres + litrePerMin), String(totalLitres - litrePerMin)]),
      c: 0,
      e: 'Rate = ' + litrePerMin + ' L/min. Total = ' + litrePerMin + ' × ' + minutes + ' = ' + totalLitres + ' litres.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var rate = _randInt(3, 12);
    var x1 = _randInt(1, 3);
    var x2 = x1 + _randInt(1, 4);
    var x3 = x2 + _randInt(1, 4);
    var y1 = _randInt(2, 6) * 10;
    var y2 = y1 + rate * (x2 - x1);
    var y3 = y2 + rate * (x3 - x2);
    return {
      q: 'A table shows: x = ' + x1 + ' → y = ' + y1 + '; x = ' + x2 + ' → y = ' + y2 + '; x = ' + x3 + ' → y = ' + y3 + '. Is the rate of change constant? What is it?',
      opts: _buildOpts('Yes, ' + rate + ' per unit', ['No, it varies', 'Yes, ' + (rate + 1) + ' per unit', 'Yes, ' + (rate - 1) + ' per unit']),
      c: 0,
      e: 'From x=' + x1 + ' to x=' + x2 + ': rate = ' + (y2-y1) + '÷' + (x2-x1) + ' = ' + rate + '. From x=' + x2 + ' to x=' + x3 + ': rate = ' + (y3-y2) + '÷' + (x3-x2) + ' = ' + rate + '. Constant rate of ' + rate + ' per unit.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var rateA = _randInt(4, 10);
    var rateB = rateA + _randInt(1, 5);
    var hours = _randInt(3, 8);
    var diffPerHour = rateB - rateA;
    var totalDiff = diffPerHour * hours;
    return {
      q: 'Worker A earns £' + rateA + '/h and Worker B earns £' + rateB + '/h. After ' + hours + ' hours, how much more has Worker B earned than Worker A?',
      opts: _buildOpts('£' + totalDiff, ['£' + diffPerHour, '£' + (totalDiff + rateA), '£' + (rateB * hours)]),
      c: 0,
      e: 'Difference in rate = £' + rateB + ' − £' + rateA + ' = £' + diffPerHour + '/h. Over ' + hours + ' hours: £' + diffPerHour + ' × ' + hours + ' = £' + totalDiff + '.'
    };
  }}
];

// ── m8i-10-3: Simple & Compound Interest ─────────────────────────────────
TEST_GENERATORS["m8i-10-3"] = [
  { depth: 'medium', gen: function() {
    var P = _randInt(2, 9) * 100;
    var R = _pickFrom([2, 3, 4, 5, 10]);
    var T = _randInt(2, 5);
    var I = P * R * T / 100;
    return {
      q: 'Calculate the simple interest on £' + P + ' at ' + R + '% per year for ' + T + ' years.',
      opts: _buildOpts('£' + I, ['£' + (P * R / 100), '£' + (I + P), '£' + (P * R * T)]),
      c: 0,
      e: 'I = P × R × T ÷ 100 = ' + P + ' × ' + R + ' × ' + T + ' ÷ 100 = £' + I + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var P = _randInt(1, 8) * 200;
    var R = _pickFrom([5, 10, 20]);
    var T = _randInt(1, 4);
    var I = P * R * T / 100;
    var total = P + I;
    return {
      q: 'What is the total amount after investing £' + P + ' at ' + R + '% simple interest per year for ' + T + ' years?',
      opts: _buildOpts('£' + total, ['£' + I, '£' + (P + P * R / 100), '£' + (total + I)]),
      c: 0,
      e: 'I = ' + P + ' × ' + R + '% × ' + T + ' = £' + I + '. Total = £' + P + ' + £' + I + ' = £' + total + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var P = _randInt(3, 8) * 100;
    var R = _pickFrom([5, 10]);
    var T = 3;
    var I = P * R * T / 100;
    return {
      q: '£' + P + ' is invested at ' + R + '% simple interest per year. How much interest is earned in ' + T + ' years?',
      opts: _buildOpts('£' + I, ['£' + (P * R / 100), '£' + (I * 2), '£' + (P * R / 100 * 2)]),
      c: 0,
      e: 'I = P × R × T ÷ 100 = ' + P + ' × ' + R + ' × ' + T + ' ÷ 100 = £' + I + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var P = _randInt(2, 5) * 100;
    var R = _pickFrom([5, 10, 20]);
    // 2-year compound
    var y1 = P * R / 100;
    var A1 = P + y1;
    var y2 = A1 * R / 100;
    var A2 = Math.round((A1 + y2) * 100) / 100;
    return {
      q: '£' + P + ' is invested at ' + R + '% compound interest per year. What is the total after 2 years?',
      opts: _buildOpts('£' + A2, ['£' + (P + 2 * y1), '£' + (P + y1), '£' + (A2 + y1)]),
      c: 0,
      e: 'After year 1: £' + P + ' × (1 + ' + R + '/100) = £' + A1 + '. After year 2: £' + A1 + ' × (1 + ' + R + '/100) = £' + A2 + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var P = _randInt(2, 5) * 200;
    var R = _pickFrom([5, 10]);
    // 3-year compound
    var A1 = P * (1 + R / 100);
    var A2 = A1 * (1 + R / 100);
    var A3 = Math.round(A2 * (1 + R / 100) * 100) / 100;
    var simpleI = P * R * 3 / 100;
    var simpleTotal = P + simpleI;
    return {
      q: '£' + P + ' is invested at ' + R + '% per year for 3 years. How much more does compound interest earn than simple interest?',
      opts: _buildOpts('£' + (Math.round((A3 - simpleTotal) * 100) / 100),
             ['£' + (A3 - P), '£' + simpleI, '£' + (Math.round((A3 - simpleTotal) * 100) / 100 + P * R / 100)]),
      c: 0,
      e: 'Compound total: £' + A3 + '. Simple total: £' + simpleTotal + '. Difference: £' + (Math.round((A3 - simpleTotal) * 100) / 100) + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var P = _randInt(3, 8) * 100;
    var R = _pickFrom([5, 10, 20]);
    var T = _randInt(3, 5);
    var I = P * R * T / 100;
    // Find T given I
    var I2 = P * R * 2 / 100;
    var T2 = 2;
    return {
      q: 'A loan of £' + P + ' has simple interest at ' + R + '% per year. After how many years is the total interest exactly £' + I + '?',
      opts: _buildOpts(String(T), [String(T + 1), String(T - 1), String(Math.round(I / (P * R / 100) + 1))]),
      c: 0,
      e: 'I = P × R × T ÷ 100 → T = I ÷ (P × R ÷ 100) = ' + I + ' ÷ ' + (P * R / 100) + ' = ' + T + ' years.'
    };
  }}
];

// ── m8i-12-4: Precision & Estimation ─────────────────────────────────────
TEST_GENERATORS["m8i-12-4"] = [
  { depth: 'medium', gen: function() {
    var val = _randInt(2, 15);
    var unit = 'm';
    var half = 0.5;
    var lower = val - half;
    return {
      q: 'A length is given as ' + val + ' m to the nearest metre. What is the smallest possible value?',
      opts: _buildOpts(String(lower) + ' m', [String(val - 1) + ' m', String(lower - 0.5) + ' m', String(val) + ' m']),
      c: 0,
      e: 'Rounded to nearest metre, the lower bound = ' + val + ' − 0.5 = ' + lower + ' m.'
    };
  }},
  { depth: 'medium', gen: function() {
    var val = _randInt(2, 20);
    var upper = val + 0.5;
    return {
      q: 'A distance is measured as ' + val + ' m to the nearest metre. What is the largest possible value?',
      opts: _buildOpts(String(upper) + ' m', [String(val + 1) + ' m', String(upper + 0.5) + ' m', String(val - 0.5) + ' m']),
      c: 0,
      e: 'Upper bound = ' + val + ' + 0.5 = ' + upper + ' m.'
    };
  }},
  { depth: 'medium', gen: function() {
    var inches = _randInt(1, 20);
    var cm = Math.round(inches * 2.54 * 10) / 10;
    return {
      q: 'Convert ' + inches + ' inches to centimetres. (1 inch ≈ 2.54 cm)',
      opts: _buildOpts(String(cm) + ' cm', [String(Math.round(inches * 2.5 * 10) / 10) + ' cm', String(Math.round(inches * 2.54) + 1) + ' cm', String(inches + 2.54) + ' cm']),
      c: 0,
      e: inches + ' × 2.54 = ' + cm + ' cm.'
    };
  }},
  { depth: 'medium', gen: function() {
    var choices = [
      { measure: 'mass of a bag of sugar', correct: 'kg', wrongs: ['mg', 'tonnes', 'g (too small for a bag)'] },
      { measure: 'length of a pencil', correct: 'cm', wrongs: ['km', 'm', 'mm'] },
      { measure: 'volume of water in a swimming pool', correct: 'm³', wrongs: ['cm³', 'mm³', 'litres (ml)'] },
      { measure: 'distance from London to Edinburgh', correct: 'km', wrongs: ['cm', 'mm', 'm'] }
    ];
    var item = _pickFrom(choices);
    return {
      q: 'Which metric unit is most appropriate for measuring the ' + item.measure + '?',
      opts: _buildOpts(item.correct, item.wrongs),
      c: 0,
      e: 'The most appropriate unit for ' + item.measure + ' is ' + item.correct + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var val = _randInt(3, 30) * 10; // e.g. 30, 40, ..., 300 (to nearest 10)
    var half = 5;
    var lower = val - half;
    var upper = val + half;
    return {
      q: 'A crowd is counted as ' + val + ' people to the nearest 10. Write the error interval.',
      opts: _buildOpts(String(lower) + ' ≤ n < ' + String(upper),
             [String(lower - 5) + ' ≤ n < ' + String(upper + 5),
              String(lower) + ' < n ≤ ' + String(upper),
              String(lower - 5) + ' ≤ n < ' + String(upper)]),
      c: 0,
      e: 'Rounded to nearest 10: lower bound = ' + val + ' − 5 = ' + lower + '; upper bound = ' + val + ' + 5 = ' + upper + '. Error interval: ' + lower + ' ≤ n < ' + upper + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var inches = _randInt(5, 40);
    var cm = Math.round(inches * 2.54 * 10) / 10;
    var lowerIn = inches - 0.5;
    var upperIn = inches + 0.5;
    var lowerCm = Math.round(lowerIn * 2.54 * 10) / 10;
    var upperCm = Math.round(upperIn * 2.54 * 10) / 10;
    return {
      q: 'A plank is ' + inches + ' inches long, measured to the nearest inch. Using 1 inch ≈ 2.54 cm, what is the upper bound in cm?',
      opts: _buildOpts(String(upperCm) + ' cm', [String(cm) + ' cm', String(lowerCm) + ' cm', String(Math.round((inches + 1) * 2.54 * 10) / 10) + ' cm']),
      c: 0,
      e: 'Upper bound in inches = ' + upperIn + '. In cm: ' + upperIn + ' × 2.54 = ' + upperCm + ' cm.'
    };
  }}
];

// ── m8i-11-3: Venn Diagrams ───────────────────────────────────────────────
TEST_GENERATORS["m8i-11-3"] = [
  { depth: 'medium', gen: function() {
    var both = _randInt(2, 8);
    var onlyA = _randInt(3, 10);
    var onlyB = _randInt(3, 10);
    var neither = _randInt(1, 6);
    var total = onlyA + both + onlyB + neither;
    var inA = onlyA + both;
    var inB = onlyB + both;
    return {
      q: 'In a class of ' + total + ' students: ' + inA + ' study French, ' + inB + ' study Spanish, ' + neither + ' study neither. How many study both?',
      opts: _buildOpts(String(both), [String(both + 1), String(both - 1), String(inA + inB - total)]),
      c: 0,
      e: 'Both = (French + Spanish) − total in at least one = (' + inA + ' + ' + inB + ') − (' + total + ' − ' + neither + ') = ' + (inA + inB) + ' − ' + (total - neither) + ' = ' + both + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var both = _randInt(2, 7);
    var onlyA = _randInt(3, 9);
    var onlyB = _randInt(3, 9);
    var neither = _randInt(1, 5);
    var total = onlyA + both + onlyB + neither;
    var union = onlyA + both + onlyB;
    return {
      q: 'A Venn diagram shows two sets A and B with ' + onlyA + ' in A only, ' + both + ' in both, ' + onlyB + ' in B only, ' + neither + ' outside both. How many are in A ∪ B (the union)?',
      opts: _buildOpts(String(union), [String(union + neither), String(both), String(union + 1)]),
      c: 0,
      e: 'A ∪ B = only A + both + only B = ' + onlyA + ' + ' + both + ' + ' + onlyB + ' = ' + union + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    var both = _randInt(2, 8);
    var onlyA = _randInt(3, 10);
    var onlyB = _randInt(3, 10);
    var neither = _randInt(2, 7);
    var total = onlyA + both + onlyB + neither;
    return {
      q: 'A Venn diagram has ' + onlyA + ' in set A only, ' + both + ' in both A and B, ' + onlyB + ' in set B only, and ' + neither + ' in neither. How many are in neither A nor B?',
      opts: _buildOpts(String(neither), [String(total - neither), String(neither + both), String(neither + 1)]),
      c: 0,
      e: 'The "neither" region contains ' + neither + ' elements.'
    };
  }},
  { depth: 'medium', gen: function() {
    var both = _randInt(3, 8);
    var onlyA = _randInt(4, 10);
    var onlyB = _randInt(4, 10);
    var neither = _randInt(1, 5);
    var inA = onlyA + both;
    var inB = onlyB + both;
    var total = onlyA + both + onlyB + neither;
    return {
      q: 'In a survey of ' + total + ' people: ' + onlyA + ' like only cats, ' + onlyB + ' like only dogs, ' + both + ' like both, ' + neither + ' like neither. How many like cats in total?',
      opts: _buildOpts(String(inA), [String(onlyA), String(inA + onlyB), String(both)]),
      c: 0,
      e: 'Cats total = only cats + both = ' + onlyA + ' + ' + both + ' = ' + inA + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var both = _randInt(2, 7);
    var onlyA = _randInt(3, 9);
    var onlyB = _randInt(3, 9);
    var neither = _randInt(1, 6);
    var total = onlyA + both + onlyB + neither;
    var union = onlyA + both + onlyB;
    return {
      q: 'A class of ' + total + ': ' + (onlyA + both) + ' play football, ' + (onlyB + both) + ' play tennis, ' + both + ' play both. How many play neither?',
      opts: _buildOpts(String(neither), [String(neither + 1), String(neither - 1 < 0 ? neither + 2 : neither - 1), String(total - union + both)]),
      c: 0,
      e: 'Union = ' + (onlyA + both) + ' + ' + (onlyB + both) + ' − ' + both + ' = ' + union + '. Neither = ' + total + ' − ' + union + ' = ' + neither + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var both = _randInt(3, 8);
    var onlyA = _randInt(4, 10);
    var onlyB = _randInt(4, 10);
    var neither = _randInt(1, 5);
    var total = onlyA + both + onlyB + neither;
    var onlyOne = onlyA + onlyB;
    return {
      q: 'Venn diagram: A only = ' + onlyA + ', both = ' + both + ', B only = ' + onlyB + ', neither = ' + neither + '. How many are in exactly one set?',
      opts: _buildOpts(String(onlyOne), [String(onlyOne + both), String(both), String(onlyA)]),
      c: 0,
      e: 'Exactly one set = A only + B only = ' + onlyA + ' + ' + onlyB + ' = ' + onlyOne + '.'
    };
  }}
];

// ── m8i-28-3: Compound Events ─────────────────────────────────────────────
// Helper: GCD for reducing fractions
function _gcd28(a, b) { return b === 0 ? a : _gcd28(b, a % b); }
function _reduceFrac(num, den) {
  var g = _gcd28(num, den);
  return (num / g) + '/' + (den / g);
}

TEST_GENERATORS["m8i-28-3"] = [
  { depth: 'medium', gen: function() {
    var sides1 = _pickFrom([4, 6, 8]);
    var sides2 = _pickFrom([4, 6, 8]);
    var sampleSpace = sides1 * sides2;
    return {
      q: 'A ' + sides1 + '-sided die and a ' + sides2 + '-sided die are rolled together. How many outcomes are in the sample space?',
      opts: _buildOpts(String(sampleSpace), [String(sides1 + sides2), String(sampleSpace + sides1), String(sampleSpace - sides2)]),
      c: 0,
      e: 'Sample space = ' + sides1 + ' × ' + sides2 + ' = ' + sampleSpace + ' outcomes.'
    };
  }},
  { depth: 'medium', gen: function() {
    // Coin (H/T) + die (1-6)
    var heads = 1, tails = 1, dieSides = 6;
    var sampleSpace = 2 * dieSides;
    return {
      q: 'A fair coin is flipped and a fair 6-sided die is rolled. How many outcomes are in the sample space?',
      opts: _buildOpts(String(sampleSpace), [String(2 + dieSides), String(sampleSpace / 2), String(sampleSpace + 2)]),
      c: 0,
      e: 'Sample space = 2 (coin) × 6 (die) = ' + sampleSpace + ' outcomes.'
    };
  }},
  { depth: 'medium', gen: function() {
    // Two dice — probability of specific sum
    var sum = _randInt(3, 9);
    var ways = 0;
    for (var i = 1; i <= 6; i++) { for (var j = 1; j <= 6; j++) { if (i + j === sum) ways++; } }
    var total = 36;
    var frac = _reduceFrac(ways, total);
    return {
      q: 'Two fair 6-sided dice are rolled. What is the probability that the total is ' + sum + '?',
      opts: _buildOpts(frac, [_reduceFrac(ways + 1, total), _reduceFrac(Math.max(1, ways - 1), total), _reduceFrac(ways, total - 6)]),
      c: 0,
      e: 'There are ' + ways + ' ways to get a total of ' + sum + ' from 36 outcomes. P = ' + frac + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    // Coin + die, P(head and even number)
    var sampleSpace = 12;
    var evenNumbers = 3; // 2,4,6
    var favourable = 1 * evenNumbers; // heads × even
    var frac = _reduceFrac(favourable, sampleSpace);
    return {
      q: 'A coin is flipped and a 6-sided die is rolled. What is the probability of getting heads and an even number?',
      opts: _buildOpts(frac, ['1/2', '1/6', _reduceFrac(favourable + 1, sampleSpace)]),
      c: 0,
      e: 'Favourable: heads AND even number (2,4,6) = 1 × 3 = 3 outcomes. P = 3/12 = ' + frac + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // Two 6-sided dice, probability that product is even
    // Product is odd only if both are odd: 3×3 = 9 odd outcomes, 36 - 9 = 27 even
    var total = 36;
    var odd = 9;
    var even = total - odd;
    var frac = _reduceFrac(even, total);
    return {
      q: 'Two fair 6-sided dice are rolled. What is the probability that the product of the two numbers is even?',
      opts: _buildOpts(frac, ['1/2', _reduceFrac(even - 3, total), _reduceFrac(even + 3, total)]),
      c: 0,
      e: 'Product is odd only if both dice show odd. Odd results: 3 out of 6. Both odd: 3/6 × 3/6 = 9/36. Even product = 36 − 9 = 27. P = 27/36 = ' + frac + '.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // Spinner (1 to n) + die, P(same number on both)
    var n = _pickFrom([4, 5, 6]);
    var dieSides = 6;
    var sampleSpace = n * dieSides;
    var matching = n; // (1,1),(2,2),...,(n,n)
    var frac = _reduceFrac(matching, sampleSpace);
    return {
      q: 'A spinner numbered 1 to ' + n + ' and a fair 6-sided die are spun/rolled. What is the probability of getting the same number on both?',
      opts: _buildOpts(frac, [_reduceFrac(1, dieSides), _reduceFrac(matching + 1, sampleSpace), _reduceFrac(matching, sampleSpace + n)]),
      c: 0,
      e: 'Sample space = ' + n + ' × 6 = ' + sampleSpace + '. Matching pairs: (' + Array.from({length: n}, function(_,i){ return (i+1)+','+(i+1); }).join('), (') + ') = ' + matching + ' outcomes. P = ' + matching + '/' + sampleSpace + ' = ' + frac + '.'
    };
  }}
];
