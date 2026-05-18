// test-generator.js — Generates topic-level test questions
// 5 questions per subtopic, 50% medium-high complexity, 50% greater depth
// All questions are generative (dynamically created each time)

function generateTopicTest(topicId, topicIslands) {
  var allQuestions = [];

  for (var i = 0; i < topicIslands.length; i++) {
    var island = topicIslands[i];
    var generators = TEST_GENERATORS[island.id];
    if (!generators) continue;

    var medQuestions = [];
    var gdQuestions = [];

    for (var g = 0; g < generators.length; g++) {
      var q = generators[g].gen();
      q.depth = generators[g].depth;
      q.subtopic = island.name;
      if (q.depth === 'greater-depth') {
        gdQuestions.push(q);
      } else {
        medQuestions.push(q);
      }
    }

    // Pick 3 medium-high and 2 greater-depth (or as close to 50/50 as possible with 5)
    var picked = [];
    shuffle(medQuestions);
    shuffle(gdQuestions);

    var medCount = Math.min(3, medQuestions.length);
    var gdCount = Math.min(2, gdQuestions.length);

    // If one pool is short, fill from the other
    if (medCount < 3 && gdQuestions.length > 2) {
      gdCount = Math.min(5 - medCount, gdQuestions.length);
    }
    if (gdCount < 2 && medQuestions.length > 3) {
      medCount = Math.min(5 - gdCount, medQuestions.length);
    }

    for (var m = 0; m < medCount; m++) picked.push(medQuestions[m]);
    for (var d = 0; d < gdCount; d++) picked.push(gdQuestions[d]);

    // Shuffle the 5 picked questions
    shuffle(picked);

    // Shuffle options for each question (keeping correct answer tracked)
    for (var p = 0; p < picked.length; p++) {
      picked[p] = shuffleOptions(picked[p]);
    }

    allQuestions = allQuestions.concat(picked);
  }

  return allQuestions;
}

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
}

function shuffleOptions(q) {
  var correctOpt = q.opts[q.c];
  var indices = [];
  for (var i = 0; i < q.opts.length; i++) indices.push(i);
  shuffle(indices);
  var newOpts = [];
  var newC = 0;
  for (var i = 0; i < indices.length; i++) {
    newOpts.push(q.opts[indices[i]]);
    if (indices[i] === q.c) newC = i;
  }
  q.opts = newOpts;
  q.c = newC;
  return q;
}

// ── Helper functions for generators ──────────────────────────────────────
function _randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function _pickFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function _buildOpts(correct, wrongs) {
  var cs = String(correct);
  var seen = [cs], opts = [cs];
  for (var i = 0; i < wrongs.length && opts.length < 4; i++) {
    var ws = String(wrongs[i]);
    if (ws !== cs && seen.indexOf(ws) === -1) { seen.push(ws); opts.push(ws); }
  }
  var pad = 1;
  while (opts.length < 4) {
    var fb = String(Number(correct) + pad * 7);
    if (seen.indexOf(fb) === -1) { seen.push(fb); opts.push(fb); }
    pad++;
  }
  return opts;
}
function _commas(n) { return Number(n).toLocaleString(); }

// ── TOPIC TEST GENERATORS ────────────────────────────────────────────────
// Each island has 8+ generators (more than needed) so 5 can be picked fresh each time.
// Generators are tagged with depth: 'medium' or 'greater-depth'

var TEST_GENERATORS = {};

// ══════════════════════════════════════════════════════════════════════════
// WHOLE NUMBERS (mt-01) — 4 subtopics
// ���══════════════════════════════��══════════════════════════════════════════

// ── mi-01-1: Place Values in Whole Numbers ───────────────────────────────
TEST_GENERATORS["mi-01-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var places = ['ones','tens','hundreds','thousands','ten-thousands','hundred-thousands','millions'];
    var multipliers = [1, 10, 100, 1000, 10000, 100000, 1000000];
    var placeIdx = _randInt(3, 6);
    var digit = _randInt(1, 9);
    var numArr = [];
    for (var i = 6; i >= 0; i--) { numArr.push(i === placeIdx ? digit : _randInt(0, 9)); }
    if (numArr[0] === 0) numArr[0] = _randInt(1, 9);
    var numStr = numArr.join('');
    var num = parseInt(numStr);
    var ans = digit * multipliers[placeIdx];
    var opts = _buildOpts(_commas(ans), [_commas(digit * multipliers[placeIdx - 1]), _commas(digit * multipliers[Math.min(6, placeIdx + 1)]), _commas(digit)]);
    return { q: 'What is the value of the digit ' + digit + ' in ' + _commas(num) + '?', opts: opts, c: 0,
             e: 'The digit ' + digit + ' is in the ' + places[placeIdx] + ' column. ' + digit + ' × ' + _commas(multipliers[placeIdx]) + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var m = _randInt(1, 9), ht = _randInt(1, 9), tt = _randInt(1, 9), t = _randInt(1, 9);
    var num = m * 1000000 + ht * 100000 + tt * 10000 + t * 1000 + _randInt(100, 999);
    var expanded = _commas(m * 1000000) + ' + ' + _commas(ht * 100000) + ' + ' + _commas(tt * 10000) + ' + ' + _commas(t * 1000);
    var ans = m * 1000000 + ht * 100000 + tt * 10000 + t * 1000;
    var rest = num - ans;
    var fullExpanded = expanded + ' + ' + _commas(rest);
    var opts = _buildOpts(_commas(num), [_commas(num + 10000), _commas(num - 1000), _commas(num + 100)]);
    return { q: 'What is ' + fullExpanded + ' written as a single number?', opts: opts, c: 0,
             e: 'Add each part together to get ' + _commas(num) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(100000, 999999);
    var b = a + _randInt(1, 99) * (_randInt(0, 1) ? 1 : -1);
    if (b < 100000) b = a + _randInt(1, 99);
    var bigger = Math.max(a, b), smaller = Math.min(a, b);
    var c = _randInt(100000, 999999);
    var d = _randInt(100000, 999999);
    var all = [bigger, smaller, c, d].sort(function(x, y) { return x - y; });
    var ansStr = all.map(_commas).join(' < ');
    var wrong1 = all.slice().reverse().map(_commas).join(' < ');
    var wrong2Arr = all.slice(); wrong2Arr[1] = all[2]; wrong2Arr[2] = all[1];
    var wrong2 = wrong2Arr.map(_commas).join(' < ');
    var opts = [ansStr, wrong1, wrong2, all.map(_commas).reverse().slice(0, 2).concat(all.map(_commas).slice(0, 2)).join(' < ')];
    return { q: 'Put these in order from smallest to largest: ' + all.map(_commas).sort(function() { return Math.random() - 0.5; }).join(', '),
             opts: opts, c: 0,
             e: 'Compare digits from the left. The correct order is ' + ansStr + '.' };
  }},
  { depth: 'medium', gen: function() {
    var places = ['thousands','ten-thousands','hundred-thousands'];
    var multipliers = [1000, 10000, 100000];
    var idx = _randInt(0, 2);
    var digit = _randInt(2, 8);
    var num = _randInt(1000000, 9000000);
    var numStr = String(num);
    var placePos = 6 - (idx + 3);
    numStr = numStr.substring(0, placePos) + digit + numStr.substring(placePos + 1);
    num = parseInt(numStr);
    var ans = places[idx];
    var wrongPlaces = places.filter(function(p) { return p !== ans; });
    wrongPlaces.push('millions');
    var opts = [ans, wrongPlaces[0], wrongPlaces[1], 'hundreds'];
    return { q: 'In the number ' + _commas(num) + ', the digit ' + digit + ' is in which place?', opts: opts, c: 0,
             e: 'Counting from the right: the digit ' + digit + ' is in the ' + ans + ' place.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var d1 = _randInt(2, 8), d2 = _randInt(2, 8);
    while (d1 === d2) d2 = _randInt(2, 8);
    var place1 = _randInt(4, 6); // higher place
    var place2 = _randInt(1, 3); // lower place
    var multipliers = [1, 10, 100, 1000, 10000, 100000, 1000000];
    var val1 = d1 * multipliers[place1];
    var val2 = d2 * multipliers[place2];
    var ratio = val1 / val2;
    var opts = _buildOpts(_commas(ratio), [_commas(ratio * 10), _commas(ratio / 10), _commas(d1 * d2)]);
    return { q: 'In a number, the digit ' + d1 + ' has a value of ' + _commas(val1) + ' and the digit ' + d2 + ' has a value of ' + _commas(val2) + '. How many times greater is the value of ' + d1 + ' than ' + d2 + '?',
             opts: opts, c: 0,
             e: _commas(val1) + ' ÷ ' + _commas(val2) + ' = ' + _commas(ratio) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var millions = _randInt(1, 9);
    var hthou = _randInt(1, 9);
    var tens = _randInt(1, 9);
    var num = millions * 1000000 + hthou * 100000 + tens * 10;
    var opts = _buildOpts(_commas(num), [_commas(num + 900000), _commas(millions * 1000000 + hthou * 10000 + tens * 10), _commas(millions * 1000000 + hthou * 100000 + tens * 100)]);
    return { q: 'A 7-digit number has ' + millions + ' in the millions place, ' + hthou + ' in the hundred-thousands place, and ' + tens + ' in the tens place. All other digits are 0. What is the number?',
             opts: opts, c: 0,
             e: millions + ' million + ' + hthou + ' hundred-thousands + ' + tens + ' tens = ' + _commas(num) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var num = _randInt(2000000, 8000000);
    var numStr = String(num);
    var digitPos = _randInt(1, 5);
    var digit = parseInt(numStr[digitPos]);
    while (digit === 0) { num = _randInt(2000000, 8000000); numStr = String(num); digit = parseInt(numStr[digitPos]); }
    var places = [1000000, 100000, 10000, 1000, 100, 10, 1];
    var val = digit * places[digitPos];
    var wrong1 = _randInt(2000000, 8000000); var wrong2 = _randInt(2000000, 8000000); var wrong3 = _randInt(2000000, 8000000);
    var opts = [_commas(num), _commas(wrong1), _commas(wrong2), _commas(wrong3)];
    return { q: 'In which number does the digit ' + digit + ' have a value of ' + _commas(val) + '?',
             opts: opts, c: 0,
             e: 'In ' + _commas(num) + ', the digit ' + digit + ' is in position ' + digitPos + ' from the left, giving it a value of ' + _commas(val) + '.' };
  }}
];

// ── mi-01-2: Rounding Whole Numbers ──────────────────────────────────────
TEST_GENERATORS["mi-01-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(1000, 9999);
    var ans = Math.round(n / 100) * 100;
    var tensDigit = Math.floor((n % 100) / 10);
    var opts = _buildOpts(_commas(ans), [_commas(ans - 100), _commas(ans + 100), _commas(Math.round(n / 1000) * 1000)]);
    return { q: 'Round ' + _commas(n) + ' to the nearest 100.', opts: opts, c: 0,
             e: 'Tens digit is ' + tensDigit + '. ' + (tensDigit >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(100000, 999999);
    var ans = Math.round(n / 10000) * 10000;
    var thous = Math.floor((n % 10000) / 1000);
    var opts = _buildOpts(_commas(ans), [_commas(ans - 10000), _commas(ans + 10000), _commas(Math.round(n / 100000) * 100000)]);
    return { q: 'Round ' + _commas(n) + ' to the nearest 10,000.', opts: opts, c: 0,
             e: 'Thousands digit is ' + thous + '. ' + (thous >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1000000, 9000000);
    var ans = Math.round(n / 1000000) * 1000000;
    var hthou = Math.floor((n % 1000000) / 100000);
    var opts = _buildOpts(_commas(ans), [_commas(ans - 1000000), _commas(ans + 1000000), _commas(n)]);
    return { q: 'Round ' + _commas(n) + ' to the nearest million.', opts: opts, c: 0,
             e: 'Hundred-thousands digit is ' + hthou + '. ' + (hthou >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var target = _randInt(3, 8) * 1000;
    var n = target + _randInt(500, 999);
    var opts = _buildOpts(_commas(target + 1000), [_commas(target), _commas(target + 2000), _commas(target - 1000)]);
    return { q: 'A number is ' + _commas(n) + '. When rounded to the nearest thousand, what is the result?', opts: opts, c: 0,
             e: 'Hundreds digit is ' + Math.floor((n % 1000) / 100) + ' which is ≥ 5, so round up to ' + _commas(target + 1000) + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var thou = _randInt(20, 80) * 1000;
    var low = thou - 500;
    var high = thou + 499;
    var opts = [_commas(low) + ' to ' + _commas(high), _commas(thou) + ' to ' + _commas(thou + 999),
                _commas(thou - 1000) + ' to ' + _commas(thou), _commas(low) + ' to ' + _commas(high + 1)];
    return { q: 'A number rounds to ' + _commas(thou) + ' to the nearest thousand. What is the range of possible values?',
             opts: opts, c: 0,
             e: 'For a number to round to ' + _commas(thou) + ', it must be from ' + _commas(low) + ' (rounds up) to ' + _commas(high) + ' (rounds down).' };
  }},
  { depth: 'greater-depth', gen: function() {
    var base = _randInt(3, 7) * 10000;
    var n = base + _randInt(4000, 4999);
    var roundedThou = Math.round(n / 1000) * 1000;
    var roundedTenThou = Math.round(n / 10000) * 10000;
    var opts = [_commas(roundedThou) + ' and ' + _commas(roundedTenThou),
                _commas(roundedThou + 1000) + ' and ' + _commas(roundedTenThou),
                _commas(roundedThou) + ' and ' + _commas(roundedTenThou + 10000),
                _commas(roundedThou - 1000) + ' and ' + _commas(roundedTenThou - 10000)];
    return { q: 'Round ' + _commas(n) + ' to (a) the nearest 1,000 and (b) the nearest 10,000.', opts: opts, c: 0,
             e: '(a) Hundreds digit determines: ' + _commas(roundedThou) + '. (b) Thousands digit determines: ' + _commas(roundedTenThou) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var rounded = _randInt(30, 80) * 10;
    var n = rounded - _randInt(1, 4);
    var opts = _buildOpts(n, [n + 5, rounded + 3, rounded - 6]);
    return { q: 'I think of a number. When I round it to the nearest 10, I get ' + rounded + '. When I round it to the nearest 100, I get ' + (Math.round(rounded / 100) * 100) + '. The number is less than ' + rounded + '. What could the number be?',
             opts: opts, c: 0,
             e: 'The number rounds up to ' + rounded + ' (nearest 10), so its ones digit ≥ 5. It must be from ' + (rounded - 5) + ' to ' + (rounded - 1) + '. ' + n + ' works.' };
  }}
];

// ── mi-01-3: Word Names & Roman Numerals ─────────────────────────────────
TEST_GENERATORS["mi-01-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var romans = [['IV',4],['IX',9],['XL',40],['XC',90],['CD',400],['CM',900]];
    var pick = _pickFrom(romans);
    var opts = _buildOpts(pick[1], [pick[1] + 10, pick[1] - 1, pick[1] + 2]);
    return { q: 'What is the value of the Roman numeral ' + pick[0] + '?', opts: opts, c: 0,
             e: pick[0] + ' uses the subtraction rule. The smaller numeral before the larger means subtract: ' + pick[1] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var values = [[1000,'M'],[500,'D'],[100,'C'],[50,'L'],[10,'X'],[5,'V'],[1,'I']];
    var n = _randInt(50, 399);
    var roman = '';
    var temp = n;
    var specials = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    for (var i = 0; i < specials.length; i++) {
      while (temp >= specials[i][0]) { roman += specials[i][1]; temp -= specials[i][0]; }
    }
    var opts = _buildOpts(n, [n + 10, n - 5, n + 1]);
    return { q: 'Convert ' + roman + ' to a number.', opts: opts, c: 0,
             e: 'Breaking down ' + roman + ': the total is ' + n + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1500, 2100);
    var roman = '';
    var temp = n;
    var specials = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    for (var i = 0; i < specials.length; i++) {
      while (temp >= specials[i][0]) { roman += specials[i][1]; temp -= specials[i][0]; }
    }
    var opts = [roman];
    for (var w = 0; w < 3; w++) {
      var wrong = ''; temp = n + _randInt(1, 3) * (_randInt(0,1) ? 10 : -10);
      for (var i = 0; i < specials.length; i++) { while (temp >= specials[i][0]) { wrong += specials[i][1]; temp -= specials[i][0]; } }
      if (opts.indexOf(wrong) === -1) opts.push(wrong);
    }
    while (opts.length < 4) opts.push('M' + roman.substring(1));
    return { q: 'Write ' + _commas(n) + ' in Roman numerals.', opts: opts, c: 0,
             e: _commas(n) + ' in Roman numerals is ' + roman + '.' };
  }},
  { depth: 'medium', gen: function() {
    var thousands = ['one','two','three','four','five','six','seven','eight','nine'];
    var hundreds = ['one','two','three','four','five','six','seven','eight','nine'];
    var tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    var ones = ['one','two','three','four','five','six','seven','eight','nine'];
    var th = _randInt(1, 9), h = _randInt(1, 9), t = _randInt(2, 9), o = _randInt(1, 9);
    var num = th * 1000 + h * 100 + t * 10 + o;
    var words = thousands[th - 1] + ' thousand, ' + hundreds[h - 1] + ' hundred and ' + tens[t - 2] + '-' + ones[o - 1];
    var opts = _buildOpts(_commas(num), [_commas(num + 100), _commas(num - 10), _commas(num * 10)]);
    return { q: 'Write "' + words + '" in digits.', opts: opts, c: 0,
             e: '"' + words + '" = ' + _commas(num) + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var year = _randInt(1900, 2025);
    var roman = '';
    var temp = year;
    var specials = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    for (var i = 0; i < specials.length; i++) { while (temp >= specials[i][0]) { roman += specials[i][1]; temp -= specials[i][0]; } }
    var opts = _buildOpts(year, [year + 10, year - 10, year + 100]);
    return { q: 'A building has ' + roman + ' carved into it. What year was it built?', opts: opts, c: 0,
             e: roman + ' = ' + year + '. Break it into parts: M=1000, CM=900, etc.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(10, 50), b = _randInt(10, 50);
    var sum = a + b;
    var specials = [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];
    function toRoman(n) { var r = '', t = n; for (var i = 0; i < specials.length; i++) { while (t >= specials[i][0]) { r += specials[i][1]; t -= specials[i][0]; } } return r; }
    var romanA = toRoman(a), romanB = toRoman(b), romanSum = toRoman(sum);
    var opts = [romanSum, toRoman(sum + 10), toRoman(sum - 5), toRoman(sum + 1)];
    return { q: 'Calculate ' + romanA + ' + ' + romanB + '. Give your answer in Roman numerals.', opts: opts, c: 0,
             e: romanA + ' = ' + a + ', ' + romanB + ' = ' + b + '. Sum = ' + sum + ' = ' + romanSum + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var invalidOptions = ['IIII','VV','LL','DD','IC','IL','XM','VX'];
    var pick = _pickFrom(invalidOptions);
    var validOpts = ['XIV','XLII','MCML','CDXC'];
    shuffle(validOpts);
    var opts = [pick, validOpts[0], validOpts[1], validOpts[2]];
    // swap correct to position 0
    return { q: 'Which of these is NOT a valid Roman numeral?', opts: opts, c: 0,
             e: pick + ' breaks Roman numeral rules. You cannot repeat V, L, or D, and subtraction only works with specific pairs (I before V/X, X before L/C, C before D/M).' };
  }}
];

// ── mi-01-4: Add & Subtract Whole Numbers ─────��──────────────────────────
TEST_GENERATORS["mi-01-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(100000, 499999);
    var b = _randInt(100000, 499999);
    var ans = a + b;
    var opts = _buildOpts(_commas(ans), [_commas(ans + 10), _commas(ans - 100), _commas(ans + 1000)]);
    return { q: 'Calculate ' + _commas(a) + ' + ' + _commas(b) + '.', opts: opts, c: 0,
             e: 'Column addition: ' + _commas(a) + ' + ' + _commas(b) + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(500000, 900000);
    var b = _randInt(100000, 400000);
    var ans = a - b;
    var opts = _buildOpts(_commas(ans), [_commas(ans + 100), _commas(ans - 10), _commas(a + b)]);
    return { q: 'Calculate ' + _commas(a) + ' − ' + _commas(b) + '.', opts: opts, c: 0,
             e: 'Column subtraction: ' + _commas(a) + ' − ' + _commas(b) + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _randInt(50000, 90000);
    var sold = _randInt(20000, total - 10000);
    var remain = total - sold;
    var opts = _buildOpts(_commas(remain), [_commas(remain + 100), _commas(total + sold), _commas(remain - 10)]);
    return { q: 'A stadium holds ' + _commas(total) + ' people. ' + _commas(sold) + ' tickets have been sold. How many tickets remain?',
             opts: opts, c: 0,
             e: _commas(total) + ' − ' + _commas(sold) + ' = ' + _commas(remain) + ' tickets remain.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(10000, 50000);
    var b = _randInt(10000, 50000);
    var c = _randInt(10000, 50000);
    var ans = a + b + c;
    var opts = _buildOpts(_commas(ans), [_commas(ans - 1000), _commas(ans + 100), _commas(a + b)]);
    return { q: 'Find the total: ' + _commas(a) + ' + ' + _commas(b) + ' + ' + _commas(c) + '.', opts: opts, c: 0,
             e: 'Add all three: ' + _commas(ans) + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var ans = _randInt(200000, 800000);
    var a = ans + _randInt(50000, 200000);
    var b = a - ans;
    var c = _randInt(10000, 90000);
    var finalAns = ans + c;
    var opts = _buildOpts(_commas(finalAns), [_commas(ans), _commas(a + c), _commas(finalAns + 1000)]);
    return { q: 'A shop starts with £' + _commas(a) + ' in the account. They pay a bill of £' + _commas(b) + ', then receive £' + _commas(c) + '. What is the final balance?',
             opts: opts, c: 0,
             e: '��' + _commas(a) + ' − £' + _commas(b) + ' = £' + _commas(ans) + '. Then + £' + _commas(c) + ' = £' + _commas(finalAns) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var target = _randInt(500000, 900000);
    var part = _randInt(200000, target - 100000);
    var missing = target - part;
    var opts = _buildOpts(_commas(missing), [_commas(missing + 1000), _commas(target + part), _commas(missing - 100)]);
    return { q: 'What must be added to ' + _commas(part) + ' to make ' + _commas(target) + '?',
             opts: opts, c: 0,
             e: _commas(target) + ' − ' + _commas(part) + ' = ' + _commas(missing) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var mon = _randInt(10000, 30000), tue = _randInt(10000, 30000), wed = _randInt(10000, 30000);
    var total = mon + tue + wed;
    var target = total + _randInt(5000, 20000);
    var needed = target - total;
    var opts = _buildOpts(_commas(needed), [_commas(target - mon), _commas(total), _commas(needed + 1000)]);
    return { q: 'A charity needs to raise £' + _commas(target) + '. On Monday they raised £' + _commas(mon) + ', Tuesday £' + _commas(tue) + ', Wednesday £' + _commas(wed) + '. How much more do they need?',
             opts: opts, c: 0,
             e: 'Total so far: £' + _commas(total) + '. Still needed: £' + _commas(target) + ' − £' + _commas(total) + ' = £' + _commas(needed) + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MULTIPLICATION & DIVISION (mt-02) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-02-1: Multiply Whole Numbers ──────────────────────────────────────
TEST_GENERATORS["mi-02-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(100, 999);
    var b = _randInt(3, 9);
    var ans = a * b;
    var opts = _buildOpts(_commas(ans), [_commas(ans + b), _commas(ans - a), _commas(ans + 10)]);
    return { q: 'Calculate ' + _commas(a) + ' × ' + b + '.', opts: opts, c: 0,
             e: 'Short multiplication: ' + _commas(a) + ' × ' + b + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9) * 100;
    var b = _randInt(2, 9) * 10;
    var ans = a * b;
    var opts = _buildOpts(_commas(ans), [_commas(a * (b / 10)), _commas(ans + 1000), _commas(ans / 10)]);
    return { q: 'What is ' + _commas(a) + ' × ' + b + '?', opts: opts, c: 0,
             e: 'Multiply digits: ' + (a / 100) + ' × ' + (b / 10) + ' = ' + (a / 100 * b / 10) + ', then add 3 zeros. Answer: ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9), b = _randInt(2, 9), c = _randInt(2, 9);
    var ans = a * b * c;
    var opts = _buildOpts(ans, [a * b + c, a + b * c, ans + a]);
    return { q: 'Find ' + a + ' × ' + b + ' × ' + c + '.', opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + (a * b) + ', then × ' + c + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(11, 15);
    var b = _randInt(3, 9);
    var ans = a * b;
    var opts = _buildOpts(ans, [ans + b, ans - a, (a + 1) * b]);
    return { q: 'What is ' + a + ' × ' + b + '?', opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + ans + '. Break it: ' + (a - 10) + ' × ' + b + ' = ' + ((a - 10) * b) + ', plus 10 × ' + b + ' = ' + (10 * b) + '. Total: ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = 25, b = _randInt(2, 9) * 4;
    var ans = a * b;
    var opts = _buildOpts(_commas(ans), [_commas(ans + 25), _commas(ans - 50), _commas(ans * 2)]);
    return { q: 'Use a shortcut to calculate 25 × ' + b + '.', opts: opts, c: 0,
             e: '25 × 4 = 100, so 25 × ' + b + ' = 100 × ' + (b / 4) + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var items = _randInt(100, 500);
    var packs = _randInt(3, 8);
    var boxes = _randInt(2, 5);
    var ans = items * packs * boxes;
    var opts = _buildOpts(_commas(ans), [_commas(items * packs), _commas(items * boxes), _commas(ans + items)]);
    return { q: 'A factory packs ' + items + ' items per tray. Each box holds ' + packs + ' trays. A lorry carries ' + boxes + ' boxes. How many items fit on the lorry?',
             opts: opts, c: 0,
             e: items + ' × ' + packs + ' × ' + boxes + ' = ' + _commas(ans) + ' items.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 9);
    var n = a * _randInt(100, 200);
    var partner = n / a;
    var opts = _buildOpts(_commas(partner), [_commas(partner + 10), _commas(n - a), _commas(partner * 2)]);
    return { q: 'The product of two numbers is ' + _commas(n) + '. One number is ' + a + '. What is the other?',
             opts: opts, c: 0,
             e: _commas(n) + ' ÷ ' + a + ' = ' + _commas(partner) + '.' };
  }}
];

// ── mi-02-2: Multiply Large Numbers ─────────────────────────────────────
TEST_GENERATORS["mi-02-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(100, 499);
    var b = _randInt(12, 39);
    var ans = a * b;
    var opts = _buildOpts(_commas(ans), [_commas(ans + b), _commas(ans - a), _commas(ans + 100)]);
    return { q: 'Use long multiplication to find ' + a + ' × ' + b + '.', opts: opts, c: 0,
             e: a + ' × ' + (b % 10) + ' = ' + (a * (b % 10)) + '. ' + a + ' × ' + (Math.floor(b / 10) * 10) + ' = ' + (a * Math.floor(b / 10) * 10) + '. Add: ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1000, 4999);
    var b = _randInt(20, 50);
    var estimate = Math.round(a / 1000) * 1000 * Math.round(b / 10) * 10;
    var rounded_a = Math.round(a / 1000) * 1000;
    var rounded_b = Math.round(b / 10) * 10;
    var est = rounded_a * rounded_b;
    var opts = _buildOpts(_commas(est), [_commas(est + 10000), _commas(est / 2), _commas(a * b)]);
    return { q: 'Estimate ' + _commas(a) + ' × ' + b + ' by rounding each number first.', opts: opts, c: 0,
             e: 'Round: ' + _commas(a) + ' ≈ ' + _commas(rounded_a) + '; ' + b + ' ≈ ' + rounded_b + '. Estimate: ' + _commas(rounded_a) + ' × ' + rounded_b + ' = ' + _commas(est) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(200, 800);
    var b = _randInt(15, 35);
    var ans = a * b;
    var opts = _buildOpts(_commas(ans), [_commas(ans + 100), _commas(ans - b), _commas(a * (b + 1))]);
    return { q: 'Calculate ' + a + ' × ' + b + '.', opts: opts, c: 0,
             e: 'Long multiplication: ' + a + ' × ' + b + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var price = _randInt(12, 45);
    var qty = _randInt(15, 35);
    var ans = price * qty;
    var opts = _buildOpts('£' + _commas(ans), ['£' + _commas(ans + price), '£' + _commas(ans - qty), '£' + _commas(price + qty)]);
    return { q: 'Tickets cost £' + price + ' each. ' + qty + ' tickets are sold. What is the total income?', opts: opts, c: 0,
             e: '£' + price + ' × ' + qty + ' = £' + _commas(ans) + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var daily = _randInt(1000, 3000);
    var weeks = _randInt(2, 5);
    var days = weeks * 7;
    var ans = daily * days;
    var opts = _buildOpts(_commas(ans), [_commas(daily * weeks), _commas(daily * 7), _commas(ans + daily)]);
    return { q: 'A factory makes ' + _commas(daily) + ' items per day. How many items are made in ' + weeks + ' weeks?',
             opts: opts, c: 0,
             e: weeks + ' weeks = ' + days + ' days. ' + _commas(daily) + ' × ' + days + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(100, 300);
    var b = _randInt(20, 50);
    var product = a * b;
    var newA = a + _randInt(1, 5);
    var newProduct = newA * b;
    var diff = newProduct - product;
    var opts = _buildOpts(_commas(newProduct), [_commas(product), _commas(product + newA), _commas(newProduct + b)]);
    return { q: 'If ' + a + ' × ' + b + ' = ' + _commas(product) + ', what is ' + newA + ' × ' + b + '?',
             opts: opts, c: 0,
             e: newA + ' = ' + a + ' + ' + (newA - a) + '. So add ' + (newA - a) + ' × ' + b + ' = ' + diff + ' to ' + _commas(product) + '. Answer: ' + _commas(newProduct) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var length = _randInt(15, 40);
    var width = _randInt(10, 25);
    var floors = _randInt(2, 5);
    var area = length * width * floors;
    var opts = _buildOpts(_commas(area) + ' m²', [_commas(length * width) + ' m²', _commas(area + length) + ' m²', _commas(length * width * (floors + 1)) + ' m²']);
    return { q: 'A building has ' + floors + ' floors. Each floor is ' + length + ' m by ' + width + ' m. What is the total floor area?',
             opts: opts, c: 0,
             e: length + ' × ' + width + ' = ' + (length * width) + ' m² per floor. × ' + floors + ' floors = ' + _commas(area) + ' m².' };
  }}
];

// ── mi-02-3: Divisibility Rules ──────────────────────────────────────────
TEST_GENERATORS["mi-02-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var rules = [
      { div: 3, rule: 'the sum of its digits is divisible by 3' },
      { div: 4, rule: 'its last two digits form a number divisible by 4' },
      { div: 6, rule: 'it is divisible by both 2 and 3' },
      { div: 9, rule: 'the sum of its digits is divisible by 9' }
    ];
    var pick = _pickFrom(rules);
    var opts = [pick.rule, rules[(rules.indexOf(pick) + 1) % 4].rule, rules[(rules.indexOf(pick) + 2) % 4].rule, 'it ends in 0 or 5'];
    return { q: 'What is the divisibility rule for ' + pick.div + '?', opts: opts, c: 0,
             e: 'A number is divisible by ' + pick.div + ' if ' + pick.rule + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(100, 300) * 3;
    var notDiv = base + 1;
    var opts = [_commas(base), _commas(notDiv), _commas(notDiv + 2), _commas(base + 4)];
    return { q: 'Which of these numbers is divisible by 3?', opts: opts, c: 0,
             e: 'Sum of digits of ' + base + ': check if divisible by 3. ' + base + ' ÷ 3 = ' + (base / 3) + ' ✓.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(100, 999) * 4;
    var last2 = n % 100;
    var opts = ['Yes — last two digits (' + last2 + ') ÷ 4 = ' + (last2 / 4), 'No — it is odd', 'Yes — it ends in 4', 'No — the digits don\'t add to 4'];
    return { q: 'Is ' + _commas(n) + ' divisible by 4? Explain.', opts: opts, c: 0,
             e: 'Last two digits = ' + last2 + '. ' + last2 + ' ÷ 4 = ' + (last2 / 4) + ' ✓. So yes, divisible by 4.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(100, 500) * 6;
    var opts = _buildOpts(n, [n + 1, n + 3, n - 2]);
    return { q: 'Which number is divisible by 6?', opts: [_commas(n), _commas(n + 1), _commas(n + 3), _commas(n - 1)], c: 0,
             e: _commas(n) + ' is even (divisible by 2) AND digit sum is divisible by 3, so it\'s divisible by 6.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(50, 200) * 12;
    var opts = ['3 and 4', '3 only', '4 only', '5 and 6'];
    return { q: _commas(n) + ' is divisible by 12. Which pair of numbers must it also be divisible by?', opts: opts, c: 0,
             e: '12 = 3 × 4. Any multiple of 12 is also a multiple of 3 and of 4.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(1, 8);
    var target = _randInt(3, 8) * 9;
    var digitSum = target;
    var remaining = digitSum - d;
    var other = _randInt(1, Math.min(9, remaining - 1));
    var last = remaining - other;
    if (last > 9 || last < 0) { other = 1; last = remaining - other; }
    if (last > 9) last = 9;
    var num = d * 100 + other * 10 + last;
    var sum = d + other + last;
    if (sum % 9 !== 0) { num = d * 100 + 8 * 10 + (9 - (d + 8) % 9); if ((d + 8 + (9 - (d + 8) % 9)) % 9 !== 0) num = 999; }
    var actualSum = Math.floor(num / 100) + Math.floor((num % 100) / 10) + num % 10;
    var opts = _buildOpts(actualSum, [actualSum + 3, actualSum - 2, actualSum + 1]);
    return { q: 'The number ' + num + ' is divisible by 9. What is the sum of its digits?',
             opts: opts, c: 0,
             e: 'Digits: ' + Math.floor(num / 100) + ' + ' + Math.floor((num % 100) / 10) + ' + ' + (num % 10) + ' = ' + actualSum + '. Since ' + actualSum + ' is divisible by 9, so is ' + num + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(100, 300) * 12;
    var factors = [];
    for (var f = 2; f <= 12; f++) { if (n % f === 0) factors.push(f); }
    var count = factors.length;
    var opts = _buildOpts(count, [count - 1, count + 1, count + 2]);
    return { q: 'How many numbers from 2 to 12 divide evenly into ' + _commas(n) + '?',
             opts: opts, c: 0,
             e: _commas(n) + ' is divisible by: ' + factors.join(', ') + '. That\'s ' + count + ' numbers.' };
  }}
];

// ── mi-02-4: Divide Whole Numbers ────────────────────────────────────────
TEST_GENERATORS["mi-02-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var divisor = _randInt(3, 9);
    var quotient = _randInt(100, 400);
    var n = divisor * quotient;
    var opts = _buildOpts(_commas(quotient), [_commas(quotient + 1), _commas(quotient - 1), _commas(n - divisor)]);
    return { q: 'What is ' + _commas(n) + ' ÷ ' + divisor + '?', opts: opts, c: 0,
             e: 'Short division: ' + _commas(n) + ' ÷ ' + divisor + ' = ' + _commas(quotient) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var divisor = _randInt(12, 25);
    var quotient = _randInt(50, 200);
    var n = divisor * quotient;
    var opts = _buildOpts(_commas(quotient), [_commas(quotient + 2), _commas(quotient - 1), _commas(divisor)]);
    return { q: 'Calculate ' + _commas(n) + ' ÷ ' + divisor + '.', opts: opts, c: 0,
             e: 'Long division: ' + _commas(n) + ' ÷ ' + divisor + ' = ' + _commas(quotient) + '. Check: ' + _commas(quotient) + ' × ' + divisor + ' = ' + _commas(n) + ' ✓.' };
  }},
  { depth: 'medium', gen: function() {
    var divisor = _randInt(6, 15);
    var quotient = _randInt(10, 50);
    var remainder = _randInt(1, divisor - 1);
    var n = divisor * quotient + remainder;
    var opts = [quotient + ' remainder ' + remainder, (quotient + 1) + ' remainder 0', quotient + ' remainder ' + (remainder + 1), (quotient - 1) + ' remainder ' + (remainder + divisor)];
    return { q: 'What is ' + n + ' ÷ ' + divisor + '? Give your answer with a remainder.', opts: opts, c: 0,
             e: divisor + ' × ' + quotient + ' = ' + (divisor * quotient) + '. Remainder: ' + n + ' − ' + (divisor * quotient) + ' = ' + remainder + '.' };
  }},
  { depth: 'medium', gen: function() {
    var perBox = _randInt(8, 20);
    var boxes = _randInt(10, 30);
    var total = perBox * boxes;
    var opts = _buildOpts(boxes, [boxes + 1, boxes - 1, total - perBox]);
    return { q: _commas(total) + ' pencils are packed equally into boxes of ' + perBox + '. How many boxes are needed?', opts: opts, c: 0,
             e: _commas(total) + ' ÷ ' + perBox + ' = ' + boxes + ' boxes.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var perBus = _randInt(40, 55);
    var people = perBus * _randInt(3, 7) + _randInt(1, perBus - 1);
    var fullBuses = Math.floor(people / perBus);
    var busesNeeded = fullBuses + 1;
    var opts = _buildOpts(busesNeeded, [fullBuses, busesNeeded + 1, people - perBus]);
    return { q: people + ' students need to travel by bus. Each bus holds ' + perBus + ' students. How many buses are needed?',
             opts: opts, c: 0,
             e: people + ' ÷ ' + perBus + ' = ' + fullBuses + ' remainder ' + (people - fullBuses * perBus) + '. Need ' + busesNeeded + ' buses (round UP because remaining students still need a bus).' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(5, 12);
    var b = _randInt(3, 8);
    var product = a * b * _randInt(10, 30);
    var ansA = product / a;
    var ansB = product / b;
    var opts = _buildOpts(_commas(ansA) + ' and ' + _commas(ansB), [_commas(ansB) + ' and ' + _commas(ansA), _commas(product - a) + ' and ' + _commas(product - b), _commas(ansA + 1) + ' and ' + _commas(ansB + 1)]);
    return { q: _commas(product) + ' is divided by ' + a + ' and separately by ' + b + '. What are the two results?',
             opts: opts, c: 0,
             e: _commas(product) + ' ÷ ' + a + ' = ' + _commas(ansA) + '. ' + _commas(product) + ' ÷ ' + b + ' = ' + _commas(ansB) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var divisor = _randInt(7, 15);
    var target = _randInt(200, 500);
    var quotient = Math.floor(target / divisor);
    var n = quotient * divisor;
    var next = (quotient + 1) * divisor;
    var opts = _buildOpts(_commas(n), [_commas(next), _commas(n - divisor), _commas(target)]);
    return { q: 'What is the largest number less than or equal to ' + target + ' that divides exactly by ' + divisor + '?',
             opts: opts, c: 0,
             e: target + ' ÷ ' + divisor + ' = ' + quotient + ' remainder ' + (target - n) + '. So the largest exact multiple ≤ ' + target + ' is ' + quotient + ' × ' + divisor + ' = ' + _commas(n) + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// POWERS & ROOTS (mt-03) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-03-1: Index Notation ──────────────────────────────────────────────
TEST_GENERATORS["mi-03-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 10);
    var exp = _randInt(2, 5);
    var repeated = [];
    for (var i = 0; i < exp; i++) repeated.push(base);
    var notation = base + '⁰¹²³⁴⁵⁶⁷⁸⁹'.charAt(exp);
    var wrong1 = base + '⁰¹²³⁴⁵⁶⁷⁸⁹'.charAt(exp + 1);
    var wrong2 = (base + 1) + '⁰¹²³⁴⁵⁶⁷⁸⁹'.charAt(exp);
    var wrong3 = base + '⁰¹²³⁴⁵⁶⁷⁸⁹'.charAt(exp > 2 ? exp - 1 : exp + 2);
    var opts = [notation, wrong1, wrong2, wrong3];
    return { q: 'Write ' + repeated.join(' × ') + ' in index notation.', opts: opts, c: 0,
             e: 'Base = ' + base + ', exponent = ' + exp + ' (multiplied ' + exp + ' times). Answer: ' + notation + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 9);
    var exp = _randInt(2, 4);
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var notation = base + superscripts.charAt(exp);
    var repeated = [];
    for (var i = 0; i < exp; i++) repeated.push(base);
    var wrong1 = [], wrong2 = [], wrong3 = [];
    for (var i = 0; i < exp + 1; i++) wrong1.push(base);
    for (var i = 0; i < exp - 1; i++) wrong2.push(base);
    for (var i = 0; i < exp; i++) wrong3.push(base + 1);
    var opts = [repeated.join(' × '), wrong1.join(' × '), wrong2.length ? wrong2.join(' × ') : (base * exp) + '', wrong3.join(' × ')];
    return { q: 'Write ' + notation + ' as a product.', opts: opts, c: 0,
             e: notation + ' means ' + base + ' multiplied by itself ' + exp + ' times: ' + repeated.join(' × ') + '.' };
  }},
  { depth: 'medium', gen: function() {
    var bases = [10, 10, 10, 10];
    var exp = _randInt(2, 6);
    var val = Math.pow(10, exp);
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = _buildOpts(_commas(val), [_commas(val * 10), _commas(val / 10), _commas(10 * exp)]);
    return { q: 'What is 10' + superscripts.charAt(exp) + '?', opts: opts, c: 0,
             e: '10' + superscripts.charAt(exp) + ' = 1 followed by ' + exp + ' zeros = ' + _commas(val) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 5);
    var exp = _randInt(2, 4);
    var val = Math.pow(base, exp);
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = [base + superscripts.charAt(exp), base + superscripts.charAt(exp + 1), (base + 1) + superscripts.charAt(exp), base + superscripts.charAt(exp > 2 ? exp - 1 : 2)];
    return { q: 'Which expression equals ' + val + '?', opts: opts, c: 0,
             e: base + superscripts.charAt(exp) + ' = ' + base + ' × '.repeat(exp - 1).split('').filter(function(c,i,a){return i < (exp-1)*4;}).join('').replace(/(× $)/, '') + ' ... = ' + val + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var base = _randInt(2, 5);
    var a = _randInt(2, 3);
    var b = _randInt(2, 4);
    var sum = a + b;
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var ans = base + superscripts.charAt(sum);
    var opts = [ans, base + superscripts.charAt(a * b), (base * 2) + superscripts.charAt(a + b), base + superscripts.charAt(sum + 1)];
    return { q: 'Simplify ' + base + superscripts.charAt(a) + ' × ' + base + superscripts.charAt(b) + ' as a single power.', opts: opts, c: 0,
             e: 'When multiplying powers with the same base, add exponents: ' + a + ' + ' + b + ' = ' + sum + '. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var base = _randInt(2, 4);
    var exp = _randInt(4, 6);
    var val = Math.pow(base, exp);
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = _buildOpts(exp, [exp - 1, exp + 1, base]);
    return { q: base + ' to the power of what equals ' + _commas(val) + '?', opts: opts, c: 0,
             e: 'Build up: ' + base + '¹=' + base + ', ' + base + '²=' + (base*base) + ', ... ' + base + superscripts.charAt(exp) + '=' + _commas(val) + '. Exponent = ' + exp + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4);
    var b = _randInt(2, 3);
    var valA = Math.pow(a, 3);
    var valB = Math.pow(b, 4);
    var sum = valA + valB;
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = _buildOpts(sum, [valA * valB, valA - valB, sum + a]);
    return { q: 'Calculate ' + a + '³ + ' + b + '⁴.', opts: opts, c: 0,
             e: a + '³ = ' + valA + '. ' + b + '⁴ = ' + valB + '. Sum = ' + valA + ' + ' + valB + ' = ' + sum + '.' };
  }}
];

// ── mi-03-2: Evaluate Indices ────────────────────────────────────────────
TEST_GENERATORS["mi-03-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 9);
    var exp = _randInt(2, 4);
    var val = Math.pow(base, exp);
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = _buildOpts(_commas(val), [_commas(base * exp), _commas(val + base), _commas(Math.pow(base, exp - 1))]);
    return { q: 'Evaluate ' + base + superscripts.charAt(exp) + '.', opts: opts, c: 0,
             e: base + superscripts.charAt(exp) + ' = ' + base + ' multiplied ' + exp + ' times = ' + _commas(val) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 6);
    var val = base * base;
    var opts = _buildOpts(val, [base * 2, val + 1, (base + 1) * (base + 1)]);
    return { q: 'What is ' + base + ' squared?', opts: opts, c: 0,
             e: base + '² = ' + base + ' × ' + base + ' = ' + val + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 5);
    var val = base * base * base;
    var opts = _buildOpts(val, [base * base, val + base, base * 3]);
    return { q: 'Calculate ' + base + ' cubed.', opts: opts, c: 0,
             e: base + '³ = ' + base + ' × ' + base + ' × ' + base + ' = ' + val + '.' };
  }},
  { depth: 'medium', gen: function() {
    var options = [[2,7,128],[2,8,256],[3,4,81],[3,5,243],[5,3,125],[4,3,64]];
    var pick = _pickFrom(options);
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = _buildOpts(pick[2], [pick[0] * pick[1], pick[2] + pick[0], pick[2] - 1]);
    return { q: 'What is ' + pick[0] + superscripts.charAt(pick[1]) + '?', opts: opts, c: 0,
             e: pick[0] + superscripts.charAt(pick[1]) + ' = ' + pick[2] + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var decimals = [0.1, 0.2, 0.3, 0.4, 0.5];
    var d = _pickFrom(decimals);
    var squared = d * d;
    var ans = parseFloat(squared.toFixed(4));
    var opts = _buildOpts(ans, [d * 2, ans + 0.01, parseFloat((d * d * d).toFixed(4))]);
    return { q: 'Evaluate (' + d + ')².', opts: opts, c: 0,
             e: d + ' × ' + d + ' = ' + ans + '. When you square a decimal less than 1, the result is smaller.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var base = _randInt(2, 5);
    var target = Math.pow(base, _randInt(3, 5));
    var exp = Math.round(Math.log(target) / Math.log(base));
    var superscripts = '⁰¹²³⁴⁵⁶⁷⁸⁹';
    var opts = _buildOpts(exp, [exp + 1, exp - 1, base]);
    return { q: base + ' to the power of ? = ' + target + '. Find the missing exponent.', opts: opts, c: 0,
             e: 'Build up: ' + base + '¹=' + base + ', ' + base + '²=' + (base*base) + '... ' + base + superscripts.charAt(exp) + '=' + target + '. Missing exponent = ' + exp + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4), b = _randInt(2, 4);
    var valA = a * a;
    var valB = b * b;
    var product = valA * valB;
    var opts = _buildOpts(product, [valA + valB, a * b, product + 1]);
    return { q: 'Calculate ' + a + '² × ' + b + '².', opts: opts, c: 0,
             e: a + '² = ' + valA + ', ' + b + '² = ' + valB + '. Product: ' + valA + ' × ' + valB + ' = ' + product + '. (Also equals (' + a + '×' + b + ')² = ' + (a*b) + '² = ' + product + '.)' };
  }}
];

// ── mi-03-3: Square Roots of Perfect Squares ─────────────────────────────
TEST_GENERATORS["mi-03-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 15);
    var square = n * n;
    var opts = _buildOpts(n, [n + 1, n - 1, square / 2]);
    return { q: 'What is √' + square + '?', opts: opts, c: 0,
             e: '√' + square + ' = ' + n + ' because ' + n + ' × ' + n + ' = ' + square + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(4, 12);
    var square = n * n;
    var opts = _buildOpts(square, [(n + 1) * (n + 1), (n - 1) * (n - 1), n * 2]);
    return { q: 'Which number is a perfect square: ' + square + ', ' + (square + 2) + ', ' + (square + 3) + ', or ' + (square + 5) + '?', opts: [square, square + 2, square + 3, square + 5], c: 0,
             e: square + ' = ' + n + '². The others are not perfect squares.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(5, 13);
    var square = n * n;
    var opts = [n + ' × ' + n + ' = ' + square, (n+1) + ' × ' + (n+1) + ' = ' + ((n+1)*(n+1)), (n-1) + ' × ' + (n-1) + ' = ' + ((n-1)*(n-1)), n + ' × ' + (n+1) + ' = ' + (n*(n+1))];
    return { q: 'Complete: √' + square + ' = ? because ? × ? = ' + square + '.', opts: opts, c: 0,
             e: '√' + square + ' = ' + n + ' because ' + n + ' × ' + n + ' = ' + square + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 12);
    var square = n * n;
    var opts = _buildOpts(square, [(n + 1) * (n + 1), n * 2, (n - 1) * (n - 1)]);
    return { q: 'If √x = ' + n + ', what is x?', opts: opts, c: 0,
             e: 'If √x = ' + n + ', then x = ' + n + '² = ' + square + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(3, 10);
    var b = _randInt(3, 10);
    while (b === a) b = _randInt(3, 10);
    var sqA = a * a, sqB = b * b;
    var sum = a + b;
    var opts = _buildOpts(sum, [sqA + sqB, a * b, Math.abs(a - b)]);
    return { q: 'Calculate √' + sqA + ' + √' + sqB + '.', opts: opts, c: 0,
             e: '√' + sqA + ' = ' + a + ', √' + sqB + ' = ' + b + '. Sum: ' + a + ' + ' + b + ' = ' + sum + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(5, 12);
    var square = n * n;
    var doubled = square * 2;
    var tripled = square * 3;
    var notPerfect = square + _randInt(1, 3);
    var opts = [_commas(doubled), _commas(square), _commas(tripled), _commas(notPerfect)];
    return { q: 'Which of these is NOT a perfect square?', opts: [_commas(notPerfect), _commas(square), _commas((n+1)*(n+1)), _commas((n-1)*(n-1))], c: 0,
             e: notPerfect + ' is not a perfect square. ' + n + '² = ' + square + ' and ' + (n+1) + '² = ' + ((n+1)*(n+1)) + ', so ' + notPerfect + ' falls between two consecutive squares.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(3, 9);
    var square = n * n;
    var ans = square + n;
    var opts = _buildOpts(ans, [square * n, square - n, n + n]);
    return { q: 'Evaluate √' + square + ' × √' + square + ' + √' + square + '.', opts: opts, c: 0,
             e: '√' + square + ' = ' + n + '. So ' + n + ' × ' + n + ' + ' + n + ' = ' + square + ' + ' + n + ' = ' + ans + '.' };
  }}
];

// ── mi-03-4: Mixed Powers & Roots Problems ───────────────────────────────
TEST_GENERATORS["mi-03-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 5);
    var squared = base * base;
    var extra = _randInt(2, 10);
    var ans = squared + extra;
    var opts = _buildOpts(ans, [base * 2 + extra, squared - extra, base + extra]);
    return { q: 'Calculate ' + base + '² + ' + extra + '.', opts: opts, c: 0,
             e: base + '² = ' + squared + '. ' + squared + ' + ' + extra + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(3, 10);
    var square = n * n;
    var mult = _randInt(2, 5);
    var ans = n * mult;
    var opts = _buildOpts(ans, [square * mult, n + mult, square + mult]);
    return { q: 'Calculate ' + mult + ' × √' + square + '.', opts: opts, c: 0,
             e: '√' + square + ' = ' + n + '. ' + mult + ' × ' + n + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 4);
    var b = _randInt(2, 4);
    var result = a * a + b * b;
    var opts = _buildOpts(result, [a * a * b * b, (a + b) * (a + b), a * b + a * b]);
    return { q: 'Evaluate ' + a + '² + ' + b + '².', opts: opts, c: 0,
             e: a + '² = ' + (a*a) + ', ' + b + '² = ' + (b*b) + '. Sum: ' + (a*a) + ' + ' + (b*b) + ' = ' + result + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(2, 5);
    var cubed = base * base * base;
    var sub = _randInt(1, 10);
    var ans = cubed - sub;
    var opts = _buildOpts(ans, [cubed + sub, base * 3 - sub, ans + base]);
    return { q: 'Calculate ' + base + '³ − ' + sub + '.', opts: opts, c: 0,
             e: base + '³ = ' + cubed + '. ' + cubed + ' − ' + sub + ' = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(3, 8);
    var square = n * n;
    var cubeBase = _randInt(2, 3);
    var cubed = cubeBase * cubeBase * cubeBase;
    var ans = square + cubed;
    var opts = _buildOpts(ans, [n + cubeBase, square * cubed, ans + 1]);
    return { q: 'Calculate √' + square + '² + ' + cubeBase + '³.', opts: opts, c: 0,
             e: '√' + square + '² = (√' + square + ')² = ' + n + '² = ' + square + '. ' + cubeBase + '³ = ' + cubed + '. Total: ' + square + ' + ' + cubed + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5);
    var val = a * a;
    var b = _randInt(2, 4);
    var bCubed = b * b * b;
    var ans = val * bCubed;
    var opts = _buildOpts(ans, [val + bCubed, a * b, ans + a]);
    return { q: 'Evaluate ' + a + '² × ' + b + '³.', opts: opts, c: 0,
             e: a + '² = ' + val + ', ' + b + '³ = ' + bCubed + '. Product: ' + val + ' × ' + bCubed + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pairs = [[4,2],[9,3],[16,4],[25,5],[36,6],[49,7],[64,8]];
    var pick = _pickFrom(pairs);
    var square = pick[0];
    var root = pick[1];
    var multiplied = root * root * root;
    var ans = multiplied;
    var opts = _buildOpts(ans, [square * root, root + square, ans + root]);
    return { q: 'Calculate (√' + square + ')³.', opts: opts, c: 0,
             e: '√' + square + ' = ' + root + '. Then ' + root + '³ = ' + root + ' × ' + root + ' × ' + root + ' = ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// NUMBER THEORY (mt-04) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-04-1: Prime & Composite Numbers ───────────────────────────────────
TEST_GENERATORS["mi-04-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
    var p = _pickFrom(primes.slice(4));
    var composites = [p - 1, p + 1, p + 3].filter(function(n) { return n > 1 && primes.indexOf(n) === -1; });
    var opts = [p, composites[0], composites[1] || p + 4, composites[2] || p + 6];
    return { q: 'Which of these is a prime number?', opts: opts, c: 0,
             e: p + ' is prime — its only factors are 1 and itself.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 6) * _randInt(2, 6);
    if (n === 4) n = 12;
    var factors = [];
    for (var i = 1; i <= n; i++) { if (n % i === 0) factors.push(i); }
    var count = factors.length;
    var opts = _buildOpts(count, [count - 1, count + 1, 2]);
    return { q: 'How many factors does ' + n + ' have?', opts: opts, c: 0,
             e: 'Factors of ' + n + ': ' + factors.join(', ') + '. That\'s ' + count + ' factors.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(12, 50);
    var factors = [];
    for (var i = 1; i <= n; i++) { if (n % i === 0) factors.push(i); }
    var factorStr = factors.join(', ');
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
    var isPrime = primes.indexOf(n) !== -1;
    var opts = [isPrime ? 'Prime' : 'Composite', isPrime ? 'Composite' : 'Prime', 'Neither', 'Both'];
    return { q: 'Is ' + n + ' prime or composite?', opts: opts, c: 0,
             e: n + ' has factors: ' + factorStr + '. ' + (isPrime ? 'Only 1 and itself → prime.' : 'More than two factors → composite.') };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(20, 60);
    var factors = [];
    for (var i = 1; i <= n; i++) { if (n % i === 0) factors.push(i); }
    var opts = [factors.join(', ')];
    var wrong1 = factors.slice(0, -1).join(', ');
    var wrong2 = factors.concat([n + 1]).join(', ');
    var wrong3 = factors.slice(1).join(', ');
    opts.push(wrong1, wrong2, wrong3);
    return { q: 'List all factors of ' + n + '.', opts: opts, c: 0,
             e: 'Check each number 1 to ' + n + '. Factors of ' + n + ': ' + factors.join(', ') + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var start = _randInt(30, 70);
    var primes = [];
    for (var i = start; i < start + 20 && primes.length < 3; i++) {
      var isPrime = i > 1;
      for (var d = 2; d * d <= i; d++) { if (i % d === 0) { isPrime = false; break; } }
      if (isPrime) primes.push(i);
    }
    var opts = _buildOpts(primes.length, [primes.length + 1, primes.length - 1, primes.length + 2]);
    return { q: 'How many prime numbers are there between ' + start + ' and ' + (start + 19) + '?', opts: opts, c: 0,
             e: 'Primes between ' + start + ' and ' + (start + 19) + ': ' + primes.join(', ') + '. Count = ' + primes.length + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var primes = [2,3,5,7,11,13];
    var p1 = _pickFrom(primes.slice(0, 4));
    var p2 = _pickFrom(primes.slice(2, 6));
    while (p2 === p1) p2 = _pickFrom(primes.slice(2, 6));
    var product = p1 * p2;
    var factors = [1, p1, p2, product];
    factors.sort(function(a,b) { return a - b; });
    var opts = [factors.join(', '), '1, ' + product, '1, ' + p1 + ', ' + product, '1, 2, ' + p1 + ', ' + p2 + ', ' + product];
    return { q: n + ' = ' + p1 + ' × ' + p2 + '. Both are prime. List all factors of ' + product + '.', opts: opts, c: 0,
             e: 'If n = p × q (both prime), factors are: 1, p, q, n. So factors of ' + product + ' are ' + factors.join(', ') + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var twinPairs = [[11,13],[17,19],[29,31],[41,43],[59,61],[71,73]];
    var pair = _pickFrom(twinPairs);
    var sum = pair[0] + pair[1];
    var opts = _buildOpts(sum, [pair[0] * pair[1], sum + 2, pair[1] - pair[0]]);
    return { q: 'Twin primes are primes that differ by 2. Find the sum of the twin primes between ' + (pair[0] - 2) + ' and ' + (pair[1] + 2) + '.', opts: opts, c: 0,
             e: 'The twin primes are ' + pair[0] + ' and ' + pair[1] + '. Sum = ' + sum + '.' };
  }}
];

// ── mi-04-2: Prime Factorisation ─────────────────────────────────────────
TEST_GENERATORS["mi-04-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var options = [[12,'2² × 3'],[18,'2 × 3²'],[20,'2² × 5'],[24,'2³ × 3'],[36,'2² × 3²'],[40,'2³ × 5'],[45,'3² × 5'],[50,'2 × 5²']];
    var pick = _pickFrom(options);
    var wrong = options.filter(function(o) { return o[0] !== pick[0]; });
    shuffle(wrong);
    var opts = [pick[1], wrong[0][1], wrong[1][1], wrong[2][1]];
    return { q: 'Write ' + pick[0] + ' as a product of prime factors in index form.', opts: opts, c: 0,
             e: 'Using a factor tree: ' + pick[0] + ' = ' + pick[1] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var primes = [2,3,5,7];
    var p1 = _pickFrom(primes.slice(0,3));
    var p2 = _pickFrom(primes.slice(1,4));
    while (p2 === p1) p2 = _pickFrom(primes);
    var n = p1 * p1 * p2;
    var factored = p1 + '² × ' + p2;
    var opts = [factored, p1 + ' × ' + p2 + '²', p1 + ' × ' + p2, p1 + '³ × ' + p2];
    return { q: 'What is the prime factorisation of ' + n + '?', opts: opts, c: 0,
             e: n + ' = ' + p1 + ' × ' + p1 + ' × ' + p2 + ' = ' + factored + '.' };
  }},
  { depth: 'medium', gen: function() {
    var options = [[2,3,72,'2³ × 3²'],[2,2,5,60,'2² × 3 × 5'],[2,3,7,84,'2² × 3 × 7']];
    var combos = [[2,2,2,3,3,72],[2,2,3,5,60],[2,2,3,7,84],[2,3,3,5,90],[2,2,5,5,100]];
    var pick = _pickFrom(combos);
    var n = 1; for (var i = 0; i < pick.length; i++) n *= pick[i];
    var factorStr = pick.join(' × ');
    var opts = [_commas(n), _commas(n + pick[0]), _commas(n - pick[pick.length-1]), _commas(n * 2)];
    return { q: 'A factor tree gives: ' + factorStr + '. What number was factorised?', opts: opts, c: 0,
             e: 'Multiply all prime factors: ' + factorStr + ' = ' + _commas(n) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _pickFrom([30, 42, 56, 66, 70, 78]);
    var factors = [];
    var temp = n;
    for (var p = 2; p <= temp; p++) { while (temp % p === 0) { factors.push(p); temp /= p; } }
    var opts = [factors.join(' × '), factors.slice(0, -1).join(' × '), factors.concat([2]).join(' × '), [n/2, 2].join(' × ')];
    return { q: 'Complete the factor tree for ' + n + '. Write as a product of primes.', opts: opts, c: 0,
             e: n + ' broken into primes: ' + factors.join(' × ') + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var base = _pickFrom([[2,3],[2,5],[3,5],[2,7]]);
    var n = Math.pow(base[0], 2) * Math.pow(base[1], 2);
    var root = base[0] * base[1];
    var opts = _buildOpts(root, [n / 2, base[0] * base[0], root + 1]);
    return { q: 'The prime factorisation of a number is ' + base[0] + '² × ' + base[1] + '². What is its square root?', opts: opts, c: 0,
             e: 'If n = ' + base[0] + '² × ' + base[1] + '², then √n = ' + base[0] + ' × ' + base[1] + ' = ' + root + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _pickFrom([48, 72, 96, 108, 120, 150, 180]);
    var temp = n, factors = {};
    for (var p = 2; p <= temp; p++) { while (temp % p === 0) { factors[p] = (factors[p] || 0) + 1; temp /= p; } }
    var totalFactors = 1;
    for (var p in factors) totalFactors *= (factors[p] + 1);
    var opts = _buildOpts(totalFactors, [totalFactors - 2, totalFactors + 2, totalFactors + 1]);
    return { q: 'Using prime factorisation, how many factors does ' + n + ' have in total?', opts: opts, c: 0,
             e: 'From prime factorisation, multiply (exponent + 1) for each prime. Total factors of ' + n + ' = ' + totalFactors + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _pickFrom([12, 18, 20, 24, 30]);
    var b = _pickFrom([8, 15, 14, 21, 25]);
    var product = a * b;
    var temp = product, factors = [];
    for (var p = 2; p <= temp; p++) { while (temp % p === 0) { factors.push(p); temp /= p; } }
    var factorStr = factors.join(' × ');
    var opts = [factorStr];
    var wrong1 = factors.slice(); wrong1.push(2); wrong1.sort();
    var wrong2 = factors.slice(1); wrong2.sort();
    opts.push(wrong1.join(' × '), wrong2.join(' × '), factors.reverse().join(' × ') === factorStr ? (factors.concat([3]).join(' × ')) : factors.join(' × '));
    return { q: 'Find the prime factorisation of ' + a + ' × ' + b + ' = ' + _commas(product) + '.', opts: opts, c: 0,
             e: _commas(product) + ' = ' + factorStr + '.' };
  }}
];

// ── mi-04-3: Highest Common Factor (HCF) ────────────────────────────────
TEST_GENERATORS["mi-04-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var hcf = _randInt(2, 8);
    var m1 = _randInt(2, 6), m2 = _randInt(2, 6);
    while (m1 === m2) m2 = _randInt(2, 6);
    var a = hcf * m1, b = hcf * m2;
    // Ensure actual HCF matches (m1, m2 might share a factor)
    function gcd(x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }
    var actualHcf = gcd(a, b);
    var opts = _buildOpts(actualHcf, [hcf * 2, Math.min(a, b), actualHcf + 1]);
    return { q: 'Find the HCF of ' + a + ' and ' + b + '.', opts: opts, c: 0,
             e: 'Factors of ' + a + ' and ' + b + '. The highest common factor is ' + actualHcf + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pairs = [[12,18,6],[16,24,8],[20,30,10],[14,21,7],[15,25,5],[18,27,9],[24,36,12]];
    var pick = _pickFrom(pairs);
    var opts = _buildOpts(pick[2], [pick[2] * 2, pick[2] - 1, pick[0]]);
    return { q: 'What is the highest common factor of ' + pick[0] + ' and ' + pick[1] + '?', opts: opts, c: 0,
             e: 'List factors of both. Common factors include 1, ..., ' + pick[2] + '. HCF = ' + pick[2] + '.' };
  }},
  { depth: 'medium', gen: function() {
    function gcd(x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }
    var a = _randInt(20, 60), b = _randInt(20, 60);
    var hcf = gcd(a, b);
    var simplified = (a / hcf) + '/' + (b / hcf);
    var opts = [simplified, a + '/' + b, (a / 2) + '/' + (b / 2), '1/' + (b / a)];
    return { q: 'Use the HCF to simplify the fraction ' + a + '/' + b + '.', opts: opts, c: 0,
             e: 'HCF of ' + a + ' and ' + b + ' is ' + hcf + '. Divide both by ' + hcf + ': ' + simplified + '.' };
  }},
  { depth: 'medium', gen: function() {
    function gcd(x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }
    var a = _randInt(30, 80), b = _randInt(30, 80);
    while (gcd(a, b) === 1) b = _randInt(30, 80);
    var hcf = gcd(a, b);
    var opts = _buildOpts(hcf, [hcf + 2, Math.min(a, b), hcf * 2]);
    return { q: 'Find the HCF of ' + a + ' and ' + b + '.', opts: opts, c: 0,
             e: 'Using factor lists or prime factorisation, HCF(' + a + ', ' + b + ') = ' + hcf + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    function gcd(x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }
    var a = _randInt(40, 100), b = _randInt(40, 100), c = _randInt(20, 60);
    var hcf = gcd(gcd(a, b), c);
    while (hcf === 1) { c = _randInt(20, 60); a = hcf * _randInt(3,8); b = hcf * _randInt(2,7); hcf = gcd(gcd(a, b), c); }
    // Recalculate with guaranteed HCF
    hcf = _randInt(3, 8);
    a = hcf * _randInt(2, 6); b = hcf * _randInt(3, 7); c = hcf * _randInt(2, 5);
    var actualHcf = gcd(gcd(a, b), c);
    var opts = _buildOpts(actualHcf, [hcf, actualHcf * 2, Math.min(a, b, c)]);
    return { q: 'Find the HCF of ' + a + ', ' + b + ' and ' + c + '.', opts: opts, c: 0,
             e: 'Find HCF of first two, then HCF of that with the third. HCF(' + a + ', ' + b + ', ' + c + ') = ' + actualHcf + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    function gcd(x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }
    var hcf = _randInt(4, 12);
    var roses = hcf * _randInt(2, 5);
    var lilies = hcf * _randInt(2, 5);
    while (roses === lilies) lilies = hcf * _randInt(2, 5);
    var actualHcf = gcd(roses, lilies);
    var bunches = roses / actualHcf + lilies / actualHcf;
    var opts = _buildOpts(actualHcf, [roses, lilies, actualHcf + 1]);
    return { q: 'A florist has ' + roses + ' roses and ' + lilies + ' lilies. She wants identical bunches with no flowers left over. What is the greatest number of bunches she can make?',
             opts: opts, c: 0,
             e: 'HCF(' + roses + ', ' + lilies + ') = ' + actualHcf + '. She can make ' + actualHcf + ' bunches.' };
  }},
  { depth: 'greater-depth', gen: function() {
    function gcd(x, y) { while (y) { var t = y; y = x % y; x = t; } return x; }
    var hcf = _randInt(6, 15);
    var a = hcf * _randInt(2, 4);
    var b = hcf * _randInt(3, 6);
    while (gcd(a, b) !== hcf) { a = hcf * _randInt(2, 4); b = hcf * _randInt(3, 6); }
    var side = hcf;
    var opts = _buildOpts(side + ' cm', [(side * 2) + ' cm', (side - 1) + ' cm', Math.min(a, b) + ' cm']);
    return { q: 'A rectangle is ' + a + ' cm by ' + b + ' cm. What is the largest square tile that can cover it exactly with no cutting?',
             opts: opts, c: 0,
             e: 'Tile side = HCF(' + a + ', ' + b + ') = ' + side + ' cm.' };
  }}
];

// ── mi-04-4: Lowest Common Multiple (LCM) ───────────────────────────────
TEST_GENERATORS["mi-04-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    function lcm(x, y) { function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;} return x * y / gcd(x, y); }
    var a = _randInt(3, 12), b = _randInt(3, 12);
    while (a === b) b = _randInt(3, 12);
    var ans = lcm(a, b);
    var opts = _buildOpts(ans, [a * b, ans + a, Math.max(a, b)]);
    return { q: 'Find the LCM of ' + a + ' and ' + b + '.', opts: opts, c: 0,
             e: 'List multiples of ' + a + ' and ' + b + '. First common multiple = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    function lcm(x, y) { function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;} return x * y / gcd(x, y); }
    var pairs = [[4,6,12],[6,8,24],[5,8,40],[6,10,30],[8,12,24],[9,12,36],[4,10,20]];
    var pick = _pickFrom(pairs);
    var opts = _buildOpts(pick[2], [pick[0] * pick[1], pick[2] + pick[0], Math.max(pick[0], pick[1])]);
    return { q: 'What is the lowest common multiple of ' + pick[0] + ' and ' + pick[1] + '?', opts: opts, c: 0,
             e: 'Multiples of ' + pick[0] + ': ' + pick[0] + ', ' + (pick[0]*2) + ', ' + (pick[0]*3) + '... Multiples of ' + pick[1] + ': ' + pick[1] + ', ' + (pick[1]*2) + '... LCM = ' + pick[2] + '.' };
  }},
  { depth: 'medium', gen: function() {
    function lcm(x, y) { function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;} return x * y / gcd(x, y); }
    var a = _randInt(4, 9), b = _randInt(4, 9);
    while (a === b) b = _randInt(4, 9);
    var ans = lcm(a, b);
    var count = ans / a + ans / b;
    var opts = _buildOpts(ans, [a * b, ans + b, ans - a]);
    return { q: 'Bus A runs every ' + a + ' minutes. Bus B runs every ' + b + ' minutes. They both leave at 9:00 AM. After how many minutes will they next leave together?',
             opts: opts, c: 0,
             e: 'LCM(' + a + ', ' + b + ') = ' + ans + ' minutes.' };
  }},
  { depth: 'medium', gen: function() {
    function lcm(x, y) { function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;} return x * y / gcd(x, y); }
    var a = _randInt(6, 15), b = _randInt(6, 15);
    while (a === b) b = _randInt(6, 15);
    var ans = lcm(a, b);
    var opts = _buildOpts(ans, [a * b, ans + a, ans / 2]);
    return { q: 'Find the LCM of ' + a + ' and ' + b + '.', opts: opts, c: 0,
             e: 'Using prime factorisation or listing multiples: LCM(' + a + ', ' + b + ') = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    function lcm(x, y) { function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;} return x * y / gcd(x, y); }
    var a = _randInt(3, 8), b = _randInt(3, 8), c = _randInt(3, 8);
    while (b === a) b = _randInt(3, 8);
    while (c === a || c === b) c = _randInt(3, 8);
    var ans = lcm(lcm(a, b), c);
    var opts = _buildOpts(ans, [a * b * c, ans + a, lcm(a, b)]);
    return { q: 'Find the LCM of ' + a + ', ' + b + ' and ' + c + '.', opts: opts, c: 0,
             e: 'Find LCM of first two, then LCM of that with the third. LCM(' + a + ', ' + b + ', ' + c + ') = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;}
    function lcm(x,y){return x*y/gcd(x,y);}
    var a = _randInt(4, 10), b = _randInt(4, 10);
    while (a === b) b = _randInt(4, 10);
    var hcf = gcd(a, b);
    var lcmVal = lcm(a, b);
    var product = a * b;
    var opts = ['HCF × LCM = ' + (hcf * lcmVal), 'HCF × LCM = ' + product + ' × 2', 'HCF + LCM = ' + (hcf + lcmVal), 'HCF × LCM = ' + (product - 1)];
    return { q: 'For ' + a + ' and ' + b + ': HCF = ' + hcf + ', LCM = ' + lcmVal + '. What is HCF × LCM?', opts: opts, c: 0,
             e: 'HCF × LCM = ' + hcf + ' × ' + lcmVal + ' = ' + (hcf * lcmVal) + '. This always equals the product of the two numbers: ' + a + ' × ' + b + ' = ' + product + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    function lcm(x,y){function gcd(a,b){while(b){var t=b;b=a%b;a=t;}return a;}return x*y/gcd(x,y);}
    var red = _randInt(3, 8);
    var blue = _randInt(3, 8);
    while (blue === red) blue = _randInt(3, 8);
    var ans = lcm(red, blue);
    var redFlashes = ans / red;
    var blueFlashes = ans / blue;
    var opts = _buildOpts(ans + ' seconds', [(red * blue) + ' seconds', (ans + red) + ' seconds', Math.max(red, blue) + ' seconds']);
    return { q: 'A red light flashes every ' + red + ' seconds. A blue light flashes every ' + blue + ' seconds. They flash together at time 0. After how many seconds will they next flash together?',
             opts: opts, c: 0,
             e: 'LCM(' + red + ', ' + blue + ') = ' + ans + ' seconds. Red flashes ' + redFlashes + ' times, blue flashes ' + blueFlashes + ' times.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// DECIMALS (mt-05) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-05-1: Decimal Place Values & Ordering ─────────────────────────────
TEST_GENERATORS["mi-05-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var places = ['tenths','hundredths','thousandths'];
    var multipliers = [0.1, 0.01, 0.001];
    var idx = _randInt(0, 2);
    var digit = _randInt(1, 9);
    var whole = _randInt(1, 9);
    var n = whole + digit * multipliers[idx];
    var val = digit * multipliers[idx];
    var opts = _buildOpts(val, [digit * multipliers[(idx + 1) % 3], digit, digit * multipliers[Math.abs(idx - 1)]]);
    return { q: 'What is the value of the digit ' + digit + ' in ' + n.toFixed(3).replace(/0+$/, '') + '?', opts: opts, c: 0,
             e: 'The digit ' + digit + ' is in the ' + places[idx] + ' column. Value = ' + val + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = (_randInt(10, 99) / 10).toFixed(1);
    var b = (_randInt(10, 99) / 10).toFixed(1);
    var c = (_randInt(10, 99) / 10).toFixed(1);
    var d = (_randInt(10, 99) / 10).toFixed(1);
    var nums = [parseFloat(a), parseFloat(b), parseFloat(c), parseFloat(d)];
    var sorted = nums.slice().sort(function(x, y) { return x - y; });
    var ansStr = sorted.join(', ');
    var wrongStr = sorted.slice().reverse().join(', ');
    var wrong2 = sorted.slice(); var t = wrong2[1]; wrong2[1] = wrong2[2]; wrong2[2] = t;
    var opts = [ansStr, wrongStr, wrong2.join(', '), sorted.slice(0, 2).reverse().concat(sorted.slice(2)).join(', ')];
    return { q: 'Order from smallest to largest: ' + nums.join(', '), opts: opts, c: 0,
             e: 'Compare digit by digit from the left. Correct order: ' + ansStr + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 9) + _randInt(1, 99) / 100;
    var b = a + _randInt(1, 5) / 100;
    var opts = ['<', '>', '=', 'Cannot tell'];
    if (a < b) {
      return { q: 'Which symbol completes: ' + a.toFixed(2) + ' ___ ' + b.toFixed(2) + '?', opts: opts, c: 0,
               e: a.toFixed(2) + ' < ' + b.toFixed(2) + '. Compare the hundredths digits.' };
    }
    return { q: 'Which symbol completes: ' + b.toFixed(2) + ' ___ ' + a.toFixed(2) + '?', opts: opts, c: 0,
             e: b.toFixed(2) + ' < ' + a.toFixed(2) + '. Compare the hundredths digits.' };
  }},
  { depth: 'medium', gen: function() {
    var whole = _randInt(2, 8);
    var tenths = _randInt(1, 9);
    var hundredths = _randInt(1, 9);
    var n = whole + tenths / 10 + hundredths / 100;
    var places = ['ones','tenths','hundredths'];
    var pick = _randInt(0, 2);
    var digits = [whole, tenths, hundredths];
    var ans = places[pick];
    var wrongPlaces = places.filter(function(p) { return p !== ans; });
    wrongPlaces.push('thousandths');
    var opts = [ans, wrongPlaces[0], wrongPlaces[1], wrongPlaces[2]];
    return { q: 'In ' + n.toFixed(2) + ', the digit ' + digits[pick] + ' is in which place?', opts: opts, c: 0,
             e: 'The digit ' + digits[pick] + ' is in the ' + ans + ' place.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(10, 50) / 100;
    var b = _randInt(10, 50) / 100;
    while (a === b) b = _randInt(10, 50) / 100;
    var between = ((a + b) / 2);
    var opts = _buildOpts(between.toFixed(3), [(a + 0.1).toFixed(3), (b - 0.1).toFixed(3), (a * b).toFixed(3)]);
    return { q: 'Find a decimal exactly halfway between ' + a.toFixed(2) + ' and ' + b.toFixed(2) + '.', opts: opts, c: 0,
             e: 'Halfway = (' + a.toFixed(2) + ' + ' + b.toFixed(2) + ') ÷ 2 = ' + between.toFixed(3) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(1, 9);
    var tenthsVal = d * 0.1;
    var hundredthsVal = d * 0.01;
    var ratio = tenthsVal / hundredthsVal;
    var opts = _buildOpts(ratio, [ratio + 10, d, ratio / 10]);
    return { q: 'How many times greater is the digit ' + d + ' in the tenths place than the digit ' + d + ' in the hundredths place?', opts: opts, c: 0,
             e: d + ' tenths = ' + tenthsVal + '. ' + d + ' hundredths = ' + hundredthsVal + '. ' + tenthsVal + ' ÷ ' + hundredthsVal + ' = ' + ratio + ' times.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var start = _randInt(1, 5) + _randInt(1, 9) / 10;
    var step = _pickFrom([0.05, 0.03, 0.04, 0.06]);
    var terms = [start];
    for (var i = 1; i < 4; i++) terms.push(parseFloat((terms[i-1] + step).toFixed(3)));
    var next = parseFloat((terms[3] + step).toFixed(3));
    var opts = _buildOpts(next, [next + step, next - step, terms[3] + 0.1]);
    return { q: 'Find the next term: ' + terms.join(', ') + ', ...', opts: opts, c: 0,
             e: 'Pattern increases by ' + step + ' each time. Next: ' + terms[3] + ' + ' + step + ' = ' + next + '.' };
  }}
];

// ── mi-05-2: Rounding Decimals ───────────────────────────────────────────
TEST_GENERATORS["mi-05-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 9) + _randInt(1, 99) / 100;
    var ans = Math.round(n * 10) / 10;
    var hundredths = Math.floor((n * 100) % 10);
    var opts = _buildOpts(ans.toFixed(1), [(ans + 0.1).toFixed(1), (ans - 0.1).toFixed(1), n.toFixed(2)]);
    return { q: 'Round ' + n.toFixed(2) + ' to 1 decimal place.', opts: opts, c: 0,
             e: 'Hundredths digit = ' + hundredths + '. ' + (hundredths >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + ans.toFixed(1) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 20) + _randInt(1, 999) / 1000;
    var ans = Math.round(n);
    var tenths = Math.floor((n * 10) % 10);
    var opts = _buildOpts(ans, [ans + 1, ans - 1, n.toFixed(1)]);
    return { q: 'Round ' + n.toFixed(3) + ' to the nearest whole number.', opts: opts, c: 0,
             e: 'Tenths digit = ' + tenths + '. ' + (tenths >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 9) + _randInt(100, 999) / 1000;
    var ans = Math.round(n * 100) / 100;
    var thousandths = Math.floor((n * 1000) % 10);
    var opts = _buildOpts(ans.toFixed(2), [(ans + 0.01).toFixed(2), (ans - 0.01).toFixed(2), n.toFixed(3)]);
    return { q: 'Round ' + n.toFixed(3) + ' to 2 decimal places.', opts: opts, c: 0,
             e: 'Thousandths digit = ' + thousandths + '. ' + (thousandths >= 5 ? 'Round up.' : 'Round down.') + ' Answer: ' + ans.toFixed(2) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(10, 99) / 10;
    var b = _randInt(10, 99) / 10;
    var sum = a + b;
    var est = Math.round(a) + Math.round(b);
    var opts = _buildOpts(est, [Math.floor(a) + Math.floor(b), est + 1, Math.round(sum)]);
    return { q: 'Estimate ' + a.toFixed(1) + ' + ' + b.toFixed(1) + ' by rounding each to the nearest whole number.', opts: opts, c: 0,
             e: a.toFixed(1) + ' ≈ ' + Math.round(a) + ', ' + b.toFixed(1) + ' ≈ ' + Math.round(b) + '. Estimate: ' + est + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var target = (_randInt(20, 80) / 10).toFixed(1);
    var low = (parseFloat(target) - 0.05).toFixed(2);
    var high = (parseFloat(target) + 0.04).toFixed(2);
    var opts = [low + ' to ' + high, target + '0 to ' + (parseFloat(target) + 0.1).toFixed(1), (parseFloat(target) - 0.1).toFixed(1) + ' to ' + target, low + ' to ' + (parseFloat(target) + 0.05).toFixed(2)];
    return { q: 'A number rounds to ' + target + ' (1 d.p.). What is the range of possible values?', opts: opts, c: 0,
             e: 'For rounding to ' + target + ', the number must be from ' + low + ' (inclusive) to just below ' + (parseFloat(target) + 0.05).toFixed(2) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(1, 9) + _randInt(100, 999) / 1000;
    var r1 = Math.round(n * 10) / 10;
    var r2 = Math.round(n * 100) / 100;
    var diff = Math.abs(r1 - r2);
    var opts = [r1.toFixed(1) + ' and ' + r2.toFixed(2), r2.toFixed(2) + ' and ' + r1.toFixed(1), r1.toFixed(1) + ' and ' + n.toFixed(3), Math.round(n) + ' and ' + r1.toFixed(1)];
    return { q: 'Round ' + n.toFixed(3) + ' to (a) 1 decimal place and (b) 2 decimal places.', opts: opts, c: 0,
             e: '(a) 1 d.p.: ' + r1.toFixed(1) + '. (b) 2 d.p.: ' + r2.toFixed(2) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 8) + _randInt(1, 9) / 10 + _randInt(5, 9) / 100;
    var b = _randInt(1, 5) + _randInt(1, 9) / 10 + _randInt(1, 9) / 100;
    var product = a * b;
    var est = Math.round(a) * Math.round(b);
    var opts = _buildOpts(est, [Math.floor(a) * Math.floor(b), est + 1, Math.round(a * 10) / 10 * Math.round(b)]);
    return { q: 'Estimate ' + a.toFixed(2) + ' × ' + b.toFixed(2) + ' by rounding each to the nearest whole number.', opts: opts, c: 0,
             e: a.toFixed(2) + ' ≈ ' + Math.round(a) + ', ' + b.toFixed(2) + ' ≈ ' + Math.round(b) + '. Estimate: ' + Math.round(a) + ' × ' + Math.round(b) + ' = ' + est + '.' };
  }}
];

// ── mi-05-3: Add & Subtract Decimals ─────────────────────────────────────
TEST_GENERATORS["mi-05-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(10, 99) / 10;
    var b = _randInt(10, 99) / 10;
    var ans = parseFloat((a + b).toFixed(2));
    var opts = _buildOpts(ans, [parseFloat((ans + 0.1).toFixed(2)), parseFloat((ans - 0.1).toFixed(2)), parseFloat((a - b).toFixed(2))]);
    return { q: 'Calculate ' + a.toFixed(1) + ' + ' + b.toFixed(1) + '.', opts: opts, c: 0,
             e: 'Line up decimal points: ' + a.toFixed(1) + ' + ' + b.toFixed(1) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(100, 999) / 100;
    var b = _randInt(10, 99) / 10;
    var ans = parseFloat((a + b).toFixed(2));
    var opts = _buildOpts(ans.toFixed(2), [(ans + 0.01).toFixed(2), (ans - 0.1).toFixed(2), (a * b).toFixed(2)]);
    return { q: 'Calculate ' + a.toFixed(2) + ' + ' + b.toFixed(1) + '.', opts: opts, c: 0,
             e: 'Add: ' + a.toFixed(2) + ' + ' + b.toFixed(1) + '0 = ' + ans.toFixed(2) + '. Line up the decimal points.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(50, 99) / 10;
    var b = _randInt(10, 49) / 10;
    var ans = parseFloat((a - b).toFixed(2));
    var opts = _buildOpts(ans.toFixed(1), [(ans + 0.1).toFixed(1), (ans - 0.1).toFixed(1), (a + b).toFixed(1)]);
    return { q: 'Calculate ' + a.toFixed(1) + ' − ' + b.toFixed(1) + '.', opts: opts, c: 0,
             e: a.toFixed(1) + ' − ' + b.toFixed(1) + ' = ' + ans.toFixed(1) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var price1 = _randInt(100, 500) / 100;
    var price2 = _randInt(100, 400) / 100;
    var total = parseFloat((price1 + price2).toFixed(2));
    var opts = _buildOpts('£' + total.toFixed(2), ['£' + (total + 0.10).toFixed(2), '£' + (total - 0.01).toFixed(2), '£' + (price1 * price2).toFixed(2)]);
    return { q: 'A book costs £' + price1.toFixed(2) + ' and a pen costs £' + price2.toFixed(2) + '. What is the total?', opts: opts, c: 0,
             e: '£' + price1.toFixed(2) + ' + £' + price2.toFixed(2) + ' = £' + total.toFixed(2) + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var total = _randInt(80, 150) / 10;
    var a = _randInt(10, Math.floor(total * 10) - 20) / 10;
    var b = _randInt(10, Math.floor((total - a) * 10) - 10) / 10;
    var c = parseFloat((total - a - b).toFixed(2));
    var opts = _buildOpts(c.toFixed(1), [(c + 0.1).toFixed(1), (c - 0.1).toFixed(1), total.toFixed(1)]);
    return { q: 'Three numbers add to ' + total.toFixed(1) + '. Two of them are ' + a.toFixed(1) + ' and ' + b.toFixed(1) + '. What is the third?', opts: opts, c: 0,
             e: total.toFixed(1) + ' − ' + a.toFixed(1) + ' − ' + b.toFixed(1) + ' = ' + c.toFixed(1) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var start = _randInt(50, 200) / 10;
    var sub1 = _randInt(10, 40) / 10;
    var add1 = _randInt(10, 30) / 10;
    var sub2 = _randInt(5, 20) / 10;
    var ans = parseFloat((start - sub1 + add1 - sub2).toFixed(2));
    var opts = _buildOpts(ans.toFixed(1), [(ans + 0.2).toFixed(1), (ans - 0.3).toFixed(1), start.toFixed(1)]);
    return { q: 'Calculate ' + start.toFixed(1) + ' − ' + sub1.toFixed(1) + ' + ' + add1.toFixed(1) + ' − ' + sub2.toFixed(1) + '.', opts: opts, c: 0,
             e: 'Work left to right: ' + start.toFixed(1) + ' − ' + sub1.toFixed(1) + ' = ' + (start - sub1).toFixed(1) + ', + ' + add1.toFixed(1) + ' = ' + (start - sub1 + add1).toFixed(1) + ', − ' + sub2.toFixed(1) + ' = ' + ans.toFixed(1) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var paid = _randInt(10, 20);
    var items = [_randInt(100, 400) / 100, _randInt(100, 300) / 100, _randInt(50, 200) / 100];
    var total = parseFloat((items[0] + items[1] + items[2]).toFixed(2));
    var change = parseFloat((paid - total).toFixed(2));
    var opts = _buildOpts('£' + change.toFixed(2), ['£' + (change + 0.10).toFixed(2), '£' + (change - 0.05).toFixed(2), '£' + total.toFixed(2)]);
    return { q: 'I buy items costing £' + items[0].toFixed(2) + ', £' + items[1].toFixed(2) + ' and £' + items[2].toFixed(2) + '. I pay with a £' + paid + ' note. What change do I get?', opts: opts, c: 0,
             e: 'Total: £' + total.toFixed(2) + '. Change: £' + paid + '.00 − £' + total.toFixed(2) + ' = £' + change.toFixed(2) + '.' };
  }}
];

// ── mi-05-4: Multiply & Divide Decimals ──────────────────────────────────
TEST_GENERATORS["mi-05-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(11, 49) / 10;
    var b = _randInt(2, 9);
    var ans = parseFloat((a * b).toFixed(2));
    var opts = _buildOpts(ans, [parseFloat((ans + 0.1).toFixed(2)), parseFloat((ans - b).toFixed(2)), a + b]);
    return { q: 'Calculate ' + a.toFixed(1) + ' × ' + b + '.', opts: opts, c: 0,
             e: a.toFixed(1) + ' × ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(10, 99) / 10;
    var pow = _pickFrom([10, 100, 1000]);
    var ans = a * pow;
    var opts = _buildOpts(_commas(ans), [_commas(ans / 10), _commas(ans * 10), _commas(a)]);
    return { q: 'Calculate ' + a.toFixed(1) + ' × ' + _commas(pow) + '.', opts: opts, c: 0,
             e: 'Move decimal point ' + String(pow).length - 1 + ' places right. ' + a.toFixed(1) + ' × ' + _commas(pow) + ' = ' + _commas(ans) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(2, 8);
    var ans = _randInt(11, 50) / 10;
    var a = parseFloat((ans * b).toFixed(2));
    var opts = _buildOpts(ans.toFixed(1), [(ans + 0.1).toFixed(1), (ans - 0.1).toFixed(1), (a + b).toFixed(1)]);
    return { q: 'Calculate ' + a.toFixed(1) + ' ÷ ' + b + '.', opts: opts, c: 0,
             e: a.toFixed(1) + ' ÷ ' + b + ' = ' + ans.toFixed(1) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(100, 9999);
    var pow = _pickFrom([10, 100, 1000]);
    var ans = a / pow;
    var opts = _buildOpts(ans, [ans * 10, ans / 10, a * pow]);
    return { q: 'Calculate ' + _commas(a) + ' ÷ ' + _commas(pow) + '.', opts: opts, c: 0,
             e: 'Move decimal point left. ' + _commas(a) + ' ÷ ' + _commas(pow) + ' = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(11, 30) / 10;
    var b = _randInt(11, 30) / 10;
    var ans = parseFloat((a * b).toFixed(2));
    var opts = _buildOpts(ans, [parseFloat((a + b).toFixed(2)), parseFloat((ans + 0.1).toFixed(2)), parseFloat((a * Math.floor(b)).toFixed(2))]);
    return { q: 'Calculate ' + a.toFixed(1) + ' × ' + b.toFixed(1) + '.', opts: opts, c: 0,
             e: 'Multiply without decimals: ' + Math.round(a * 10) + ' × ' + Math.round(b * 10) + ' = ' + Math.round(a * 10) * Math.round(b * 10) + '. Two decimal places: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var km = _randInt(20, 80) / 10;
    var laps = _randInt(3, 8);
    var total = parseFloat((km * laps).toFixed(2));
    var opts = _buildOpts(total.toFixed(1) + ' km', [(total + km).toFixed(1) + ' km', (km + laps).toFixed(1) + ' km', (total - km).toFixed(1) + ' km']);
    return { q: 'A runner completes ' + laps + ' laps of a ' + km.toFixed(1) + ' km track. What total distance did they run?', opts: opts, c: 0,
             e: km.toFixed(1) + ' × ' + laps + ' = ' + total.toFixed(1) + ' km.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var total = _randInt(50, 200) / 10;
    var parts = _randInt(3, 8);
    var ans = parseFloat((total / parts).toFixed(2));
    var opts = _buildOpts(ans.toFixed(2), [(ans + 0.1).toFixed(2), (total * parts).toFixed(2), (total - parts).toFixed(2)]);
    return { q: 'A ribbon ' + total.toFixed(1) + ' m long is cut into ' + parts + ' equal pieces. How long is each piece?', opts: opts, c: 0,
             e: total.toFixed(1) + ' ÷ ' + parts + ' = ' + ans.toFixed(2) + ' m.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// FRACTIONS (mt-06) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// Helper: GCD for fraction simplification
function _gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a; }
function _frac(n, d) { var g = _gcd(n, d); return (n/g) + '/' + (d/g); }
function _lcm(a, b) { return a * b / _gcd(a, b); }

// ── mi-06-1: Equivalent Fractions & Simplifying ──────────────────────────
TEST_GENERATORS["mi-06-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 5), d = _randInt(n + 1, 10);
    var g = _gcd(n, d); n /= g; d /= g;
    var mult = _randInt(2, 6);
    var bigN = n * mult, bigD = d * mult;
    var opts = [n + '/' + d, (n + 1) + '/' + d, n + '/' + (d + 1), (n * 2) + '/' + (d + 1)];
    return { q: 'Simplify ' + bigN + '/' + bigD + ' to its lowest terms.', opts: opts, c: 0,
             e: 'Divide numerator and denominator by ' + mult + ': ' + bigN + '/' + bigD + ' = ' + n + '/' + d + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 4), d = _randInt(n + 1, 8);
    var g = _gcd(n, d); n /= g; d /= g;
    var mult = _randInt(3, 7);
    var eqN = n * mult, eqD = d * mult;
    var opts = [eqN + '/' + eqD, (eqN + 1) + '/' + eqD, eqN + '/' + (eqD - 1), (n * (mult + 1)) + '/' + (d * mult)];
    return { q: 'Find an equivalent fraction to ' + n + '/' + d + ' with denominator ' + eqD + '.', opts: opts, c: 0,
             e: 'Multiply top and bottom by ' + mult + ': ' + n + '/' + d + ' = ' + eqN + '/' + eqD + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _pickFrom([12, 16, 18, 20, 24, 30]);
    var n = _randInt(2, d - 1);
    var g = _gcd(n, d);
    var simpN = n / g, simpD = d / g;
    var opts = [simpN + '/' + simpD, n + '/' + d, (simpN + 1) + '/' + simpD, simpN + '/' + (simpD + 1)];
    return { q: 'Write ' + n + '/' + d + ' in its simplest form.', opts: opts, c: 0,
             e: 'HCF(' + n + ', ' + d + ') = ' + g + '. Divide both: ' + simpN + '/' + simpD + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 3), d = _randInt(n + 1, 6);
    var g = _gcd(n, d); n /= g; d /= g;
    var m2 = _randInt(2, 5), m3 = _randInt(2, 5);
    while (m3 === m2) m3 = _randInt(2, 5);
    var eq1 = (n * m2) + '/' + (d * m2);
    var eq2 = (n * m3) + '/' + (d * m3);
    var wrong = (n * m2) + '/' + (d * m3);
    var opts = [eq1 + ' and ' + eq2, eq1 + ' and ' + wrong, wrong + ' and ' + eq2, (n+1) + '/' + d + ' and ' + eq1];
    return { q: 'Which two fractions are equivalent to ' + n + '/' + d + '?', opts: opts, c: 0,
             e: n + '/' + d + ' = ' + eq1 + ' = ' + eq2 + '. Multiply top and bottom by the same number.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(2, 6), d = _randInt(n + 2, 12);
    var g = _gcd(n, d); n /= g; d /= g;
    var mult = _randInt(5, 9);
    var bigN = n * mult;
    var opts = _buildOpts(d * mult, [d * (mult + 1), d * mult + 1, (d + 1) * mult]);
    return { q: 'If ' + n + '/' + d + ' = ' + bigN + '/x, find x.', opts: opts, c: 0,
             e: 'Numerator multiplied by ' + mult + ', so denominator × ' + mult + ' too: x = ' + (d * mult) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pairs = [[3,8],[2,7],[4,9],[5,12],[3,10],[7,15]];
    var pick = _pickFrom(pairs);
    var n = pick[0], d = pick[1];
    var isSimplifed = _gcd(n, d) === 1;
    var big1 = (n * 3) + '/' + (d * 3);
    var big2 = (n * 5) + '/' + (d * 5);
    var notEq = (n + 1) + '/' + (d + 1);
    var opts = [notEq, big1, big2, n + '/' + d];
    return { q: 'Which fraction is NOT equivalent to ' + n + '/' + d + '?', opts: opts, c: 0,
             e: big1 + ' and ' + big2 + ' simplify to ' + n + '/' + d + '. But ' + notEq + ' does not (different ratio).' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _pickFrom([24, 36, 48, 60]);
    var factors = [];
    for (var i = 1; i <= d; i++) { if (d % i === 0 && i < d && _gcd(i, d) === i) factors.push(i); }
    var count = 0;
    for (var num = 1; num < d; num++) { if (_gcd(num, d) === 1) count++; }
    var opts = _buildOpts(count, [count + 2, count - 2, d - 1]);
    return { q: 'How many fractions with denominator ' + d + ' are already in their simplest form? (Numerator from 1 to ' + (d - 1) + ')', opts: opts, c: 0,
             e: 'Count numerators where HCF(numerator, ' + d + ') = 1. There are ' + count + ' such fractions.' };
  }}
];

// ── mi-06-2: Compare & Order Fractions ───────────────────────────────────
TEST_GENERATORS["mi-06-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var d1 = _randInt(3, 8), d2 = _randInt(3, 8);
    while (d1 === d2) d2 = _randInt(3, 8);
    var n1 = _randInt(1, d1 - 1), n2 = _randInt(1, d2 - 1);
    var val1 = n1 / d1, val2 = n2 / d2;
    var bigger = val1 > val2 ? n1 + '/' + d1 : n2 + '/' + d2;
    var smaller = val1 > val2 ? n2 + '/' + d2 : n1 + '/' + d1;
    var opts = [bigger, smaller, 'They are equal', 'Cannot tell'];
    return { q: 'Which is larger: ' + n1 + '/' + d1 + ' or ' + n2 + '/' + d2 + '?', opts: opts, c: 0,
             e: 'Convert to common denominator or decimals. ' + bigger + ' is larger.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _randInt(5, 12);
    var fracs = [];
    while (fracs.length < 4) {
      var n = _randInt(1, d - 1);
      var f = _frac(n, d);
      if (fracs.indexOf(f) === -1) fracs.push(f);
    }
    var sorted = fracs.slice().sort(function(a, b) {
      var va = parseInt(a) / parseInt(a.split('/')[1]);
      var vb = parseInt(b) / parseInt(b.split('/')[1]);
      return va - vb;
    });
    var opts = [sorted.join(', '), sorted.slice().reverse().join(', '), fracs.join(', '), [sorted[0], sorted[2], sorted[1], sorted[3]].join(', ')];
    return { q: 'Order from smallest to largest: ' + fracs.join(', '), opts: opts, c: 0,
             e: 'All have denominator ' + d + ', so compare numerators. Order: ' + sorted.join(', ') + '.' };
  }},
  { depth: 'medium', gen: function() {
    var denoms = [2, 3, 4, 5, 6, 8, 10];
    var d = _pickFrom(denoms);
    var n = _randInt(1, d - 1);
    var val = n / d;
    var isMoreThanHalf = val > 0.5;
    var opts = [isMoreThanHalf ? 'Greater than ½' : 'Less than ½', isMoreThanHalf ? 'Less than ½' : 'Greater than ½', 'Equal to ½', 'Cannot tell'];
    return { q: 'Is ' + n + '/' + d + ' greater than, less than, or equal to ½?', opts: opts, c: 0,
             e: n + '/' + d + ' = ' + val.toFixed(3) + '. Half = 0.5. So ' + n + '/' + d + ' is ' + (isMoreThanHalf ? 'greater' : 'less') + ' than ½.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(1, 5), d1 = _randInt(n1 + 1, 10);
    var g = _gcd(n1, d1); n1 /= g; d1 /= g;
    var n2 = _randInt(1, 5), d2 = _randInt(n2 + 1, 10);
    g = _gcd(n2, d2); n2 /= g; d2 /= g;
    while (n1/d1 === n2/d2) { n2 = _randInt(1, 5); d2 = _randInt(n2 + 1, 10); g = _gcd(n2, d2); n2 /= g; d2 /= g; }
    var symbol = n1/d1 < n2/d2 ? '<' : '>';
    var opts = [symbol, symbol === '<' ? '>' : '<', '=', '≤'];
    return { q: 'Insert < or >: ' + n1 + '/' + d1 + ' ___ ' + n2 + '/' + d2, opts: opts, c: 0,
             e: 'Cross-multiply: ' + n1 + '×' + d2 + '=' + (n1*d2) + ', ' + n2 + '×' + d1 + '=' + (n2*d1) + '. So ' + n1 + '/' + d1 + ' ' + symbol + ' ' + n2 + '/' + d2 + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var whole = _randInt(1, 3);
    var n = _randInt(1, 5), d = _randInt(n + 1, 8);
    var g = _gcd(n, d); n /= g; d /= g;
    var improperN = whole * d + n;
    var opts = [improperN + '/' + d, (improperN + 1) + '/' + d, whole + '/' + (n + d), (whole * n + d) + '/' + d];
    return { q: 'Convert ' + whole + ' ' + n + '/' + d + ' to an improper fraction.', opts: opts, c: 0,
             e: whole + ' × ' + d + ' + ' + n + ' = ' + improperN + '. Answer: ' + improperN + '/' + d + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(3, 8);
    var n = _randInt(d + 1, d * 3);
    var whole = Math.floor(n / d);
    var rem = n % d;
    var mixed = rem === 0 ? whole + '' : whole + ' ' + rem + '/' + d;
    var opts = [mixed, (whole + 1) + ' ' + rem + '/' + d, whole + ' ' + (rem + 1) + '/' + d, n + '/' + (d + 1)];
    return { q: 'Convert ' + n + '/' + d + ' to a mixed number.', opts: opts, c: 0,
             e: n + ' ÷ ' + d + ' = ' + whole + ' remainder ' + rem + '. Answer: ' + mixed + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var fracs = [];
    for (var i = 0; i < 4; i++) {
      var n = _randInt(1, 7), d = _randInt(n + 1, 12);
      var g = _gcd(n, d); fracs.push([n/g, d/g, (n/g)/(d/g)]);
    }
    fracs.sort(function(a, b) { return a[2] - b[2]; });
    var labels = fracs.map(function(f) { return f[0] + '/' + f[1]; });
    var sorted = labels.join(' < ');
    var wrong1 = labels.slice().reverse().join(' < ');
    var wrong2 = [labels[0], labels[2], labels[1], labels[3]].join(' < ');
    var opts = [sorted, wrong1, wrong2, [labels[1], labels[0], labels[2], labels[3]].join(' < ')];
    return { q: 'Order from smallest to largest: ' + labels.sort(function() { return Math.random() - 0.5; }).join(', '), opts: opts, c: 0,
             e: 'Convert to decimals or common denominator. Correct order: ' + sorted + '.' };
  }}
];

// ── mi-06-3: Add & Subtract Fractions ────────────────────────────────────
TEST_GENERATORS["mi-06-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var d = _randInt(5, 12);
    var n1 = _randInt(1, d - 2), n2 = _randInt(1, d - n1 - 1);
    var sum = n1 + n2;
    var g = _gcd(sum, d);
    var ans = (sum/g) + '/' + (d/g);
    var opts = [ans, n1 + '/' + d, (sum) + '/' + (d * 2), (n1 + n2 + 1) + '/' + d];
    return { q: 'Calculate ' + n1 + '/' + d + ' + ' + n2 + '/' + d + '.', opts: opts, c: 0,
             e: 'Same denominator: (' + n1 + ' + ' + n2 + ')/' + d + ' = ' + sum + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d1 = _pickFrom([3, 4, 5, 6]), d2 = d1 * _randInt(2, 3);
    var n1 = _randInt(1, d1 - 1), n2 = _randInt(1, d2 - 1);
    var lcd = d2;
    var adjN1 = n1 * (lcd / d1);
    var sumN = adjN1 + n2;
    var g = _gcd(sumN, lcd);
    var ans = (sumN/g) + '/' + (lcd/g);
    var opts = [ans, (n1 + n2) + '/' + (d1 + d2), (sumN) + '/' + lcd, (n1 + n2) + '/' + d2];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' + ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'LCD = ' + lcd + '. ' + n1 + '/' + d1 + ' = ' + adjN1 + '/' + lcd + '. Sum: ' + sumN + '/' + lcd + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _randInt(5, 10);
    var n1 = _randInt(3, d - 1), n2 = _randInt(1, n1 - 1);
    var diff = n1 - n2;
    var g = _gcd(diff, d);
    var ans = (diff/g) + '/' + (d/g);
    var opts = [ans, (n1 + n2) + '/' + d, diff + '/' + (d * 2), (diff + 1) + '/' + d];
    return { q: 'Calculate ' + n1 + '/' + d + ' − ' + n2 + '/' + d + '.', opts: opts, c: 0,
             e: 'Same denominator: (' + n1 + ' − ' + n2 + ')/' + d + ' = ' + diff + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d1 = _pickFrom([2, 3, 4, 5]), d2 = _pickFrom([3, 4, 5, 6]);
    while (d1 === d2) d2 = _pickFrom([3, 4, 5, 6]);
    var n1 = _randInt(1, d1 - 1), n2 = _randInt(1, d2 - 1);
    var lcd = _lcm(d1, d2);
    var adjN1 = n1 * (lcd / d1), adjN2 = n2 * (lcd / d2);
    var sumN = adjN1 + adjN2;
    var g = _gcd(sumN, lcd);
    var ans = (sumN/g) + '/' + (lcd/g);
    if (sumN/g >= lcd/g) { var w = Math.floor(sumN/g / (lcd/g)); var r = (sumN/g) - w * (lcd/g); ans = r === 0 ? w + '' : w + ' ' + r + '/' + (lcd/g); }
    var opts = [ans, (n1 + n2) + '/' + (d1 + d2), adjN1 + '/' + lcd, (n1 * n2) + '/' + (d1 * d2)];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' + ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'LCD = ' + lcd + '. Convert: ' + adjN1 + '/' + lcd + ' + ' + adjN2 + '/' + lcd + ' = ' + sumN + '/' + lcd + ' = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var d1 = _pickFrom([3, 4, 5, 6, 8]), d2 = _pickFrom([4, 5, 6, 7, 9]);
    while (d1 === d2) d2 = _pickFrom([4, 5, 6, 7, 9]);
    var n1 = _randInt(Math.ceil(d1/2), d1 - 1), n2 = _randInt(1, Math.floor(d2/2));
    var lcd = _lcm(d1, d2);
    var adjN1 = n1 * (lcd / d1), adjN2 = n2 * (lcd / d2);
    var diffN = adjN1 - adjN2;
    if (diffN <= 0) { n1 = d1 - 1; adjN1 = n1 * (lcd / d1); diffN = adjN1 - adjN2; }
    var g = _gcd(diffN, lcd);
    var ans = (diffN/g) + '/' + (lcd/g);
    var opts = [ans, (n1 - n2) + '/' + (d1 - d2 || d1), diffN + '/' + lcd, (adjN1 + adjN2) + '/' + lcd];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' − ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'LCD = ' + lcd + '. ' + adjN1 + '/' + lcd + ' − ' + adjN2 + '/' + lcd + ' = ' + diffN + '/' + lcd + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _pickFrom([5, 6, 7, 8]);
    var n1 = _randInt(1, d - 2), n2 = _randInt(1, d - n1 - 1), n3 = _randInt(1, d - n1 - n2);
    var sum = n1 + n2 + n3;
    var g = _gcd(sum, d);
    var ans = (sum/g) + '/' + (d/g);
    if (sum >= d) { var w = Math.floor(sum/d); var r = sum % d; g = _gcd(r, d); ans = r === 0 ? w + '' : w + ' ' + (r/g) + '/' + (d/g); }
    var opts = [ans, sum + '/' + (d * 3), (n1 + n2) + '/' + d, sum + '/' + d];
    return { q: 'Calculate ' + n1 + '/' + d + ' + ' + n2 + '/' + d + ' + ' + n3 + '/' + d + '.', opts: opts, c: 0,
             e: 'All same denominator: (' + n1 + '+' + n2 + '+' + n3 + ')/' + d + ' = ' + sum + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d1 = _pickFrom([3, 4, 5]), d2 = _pickFrom([4, 6, 8]);
    while (d1 === d2) d2 = _pickFrom([4, 6, 8]);
    var target_n = _randInt(1, d1 - 1);
    var n2 = _randInt(1, d2 - 1);
    var lcd = _lcm(d1, d2);
    var targetAdj = target_n * (lcd / d1);
    var n2Adj = n2 * (lcd / d2);
    var missingAdj = targetAdj - n2Adj;
    if (missingAdj <= 0) { target_n = d1 - 1; targetAdj = target_n * (lcd / d1); missingAdj = targetAdj - n2Adj; }
    var g = _gcd(missingAdj, lcd);
    var ans = (missingAdj / g) + '/' + (lcd / g);
    var opts = [ans, n2 + '/' + d2, (target_n - n2) + '/' + d1, missingAdj + '/' + lcd];
    return { q: '? + ' + n2 + '/' + d2 + ' = ' + target_n + '/' + d1 + '. Find the missing fraction.', opts: opts, c: 0,
             e: target_n + '/' + d1 + ' − ' + n2 + '/' + d2 + ' = ' + targetAdj + '/' + lcd + ' − ' + n2Adj + '/' + lcd + ' = ' + ans + '.' };
  }}
];

// ── mi-06-4: Add & Subtract Mixed Numbers ────────────────────────────────
TEST_GENERATORS["mi-06-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var w1 = _randInt(1, 4), w2 = _randInt(1, 4);
    var d = _randInt(3, 8);
    var n1 = _randInt(1, d - 1), n2 = _randInt(1, d - 1);
    var totalN = n1 + n2;
    var extraW = Math.floor(totalN / d);
    var remN = totalN % d;
    var ansW = w1 + w2 + extraW;
    var g = _gcd(remN, d);
    var ans = remN === 0 ? ansW + '' : ansW + ' ' + (remN/g) + '/' + (d/g);
    var opts = [ans, (w1 + w2) + ' ' + n1 + '/' + d, (ansW + 1) + ' ' + remN + '/' + d, (w1 + w2) + ' ' + totalN + '/' + d];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d + ' + ' + w2 + ' ' + n2 + '/' + d + '.', opts: opts, c: 0,
             e: 'Wholes: ' + w1 + '+' + w2 + '=' + (w1+w2) + '. Fractions: ' + n1 + '+' + n2 + '=' + totalN + '/' + d + '. Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w1 = _randInt(3, 7), w2 = _randInt(1, w1 - 1);
    var d = _randInt(3, 8);
    var n1 = _randInt(1, d - 1), n2 = _randInt(1, d - 1);
    // Ensure n1 >= n2 for simple subtraction
    if (n1 < n2) { var t = n1; n1 = n2; n2 = t; }
    var diffW = w1 - w2;
    var diffN = n1 - n2;
    var g = _gcd(diffN, d);
    var ans = diffN === 0 ? diffW + '' : diffW + ' ' + (diffN/g) + '/' + (d/g);
    var opts = [ans, (diffW + 1) + ' ' + diffN + '/' + d, diffW + ' ' + (n1 + n2) + '/' + d, (w1 + w2) + ' ' + diffN + '/' + d];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d + ' − ' + w2 + ' ' + n2 + '/' + d + '.', opts: opts, c: 0,
             e: 'Wholes: ' + w1 + '−' + w2 + '=' + diffW + '. Fractions: ' + n1 + '−' + n2 + '=' + diffN + '/' + d + '. Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w1 = _randInt(2, 5), w2 = _randInt(1, 3);
    var d1 = _pickFrom([3, 4, 5, 6]), d2 = d1 * 2;
    var n1 = _randInt(1, d1 - 1), n2 = _randInt(1, d2 - 1);
    var lcd = d2;
    var adj1 = n1 * (lcd / d1);
    var sumN = adj1 + n2;
    var extraW = Math.floor(sumN / lcd);
    var remN = sumN % lcd;
    var ansW = w1 + w2 + extraW;
    var g = _gcd(remN, lcd);
    var ans = remN === 0 ? ansW + '' : ansW + ' ' + (remN/g) + '/' + (lcd/g);
    var opts = [ans, (w1 + w2) + ' ' + (n1 + n2) + '/' + (d1 + d2), ansW + ' ' + sumN + '/' + lcd, (ansW - 1) + ' ' + remN + '/' + lcd];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d1 + ' + ' + w2 + ' ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'LCD = ' + lcd + '. Convert fractions, add wholes and fractions. Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w = _randInt(3, 8);
    var d = _randInt(3, 6);
    var n = _randInt(1, d - 1);
    var impN = w * d + n;
    var opts = [impN + '/' + d, (impN - 1) + '/' + d, (w + n) + '/' + d, w + '/' + (d + n)];
    return { q: 'Convert ' + w + ' ' + n + '/' + d + ' to an improper fraction.', opts: opts, c: 0,
             e: w + ' × ' + d + ' + ' + n + ' = ' + impN + '. Answer: ' + impN + '/' + d + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var w1 = _randInt(3, 6), w2 = _randInt(1, w1 - 1);
    var d = _randInt(4, 8);
    var n1 = _randInt(1, Math.floor(d / 2)); // small fraction
    var n2 = _randInt(n1 + 1, d - 1); // larger fraction to force borrowing
    // Need to borrow: w1 n1/d - w2 n2/d where n1 < n2
    var totalN1 = (w1 - 1) * d + (d + n1); // borrow 1 whole
    var totalN2 = w2 * d + n2;
    var diffN = (d + n1) - n2;
    var diffW = w1 - w2 - 1;
    var g = _gcd(diffN, d);
    var ans = diffN === 0 ? diffW + '' : diffW + ' ' + (diffN/g) + '/' + (d/g);
    var opts = [ans, (w1 - w2) + ' ' + (n2 - n1) + '/' + d, (diffW + 1) + ' ' + diffN + '/' + d, diffW + ' ' + (d - diffN) + '/' + d];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d + ' − ' + w2 + ' ' + n2 + '/' + d + '. (Hint: you need to borrow.)', opts: opts, c: 0,
             e: 'Borrow 1 from ' + w1 + ': becomes ' + (w1-1) + ' ' + (d+n1) + '/' + d + '. Subtract: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var w = _randInt(5, 12);
    var d = _randInt(3, 6);
    var n = _randInt(1, d - 1);
    var g = _gcd(n, d);
    var sub_w = _randInt(1, w - 2);
    var sub_n = _randInt(1, d - 1);
    var imp1 = w * d + n;
    var imp2 = sub_w * d + sub_n;
    var diffImp = imp1 - imp2;
    var ansW = Math.floor(diffImp / d);
    var ansN = diffImp % d;
    var ansG = _gcd(ansN, d);
    var ans = ansN === 0 ? ansW + '' : ansW + ' ' + (ansN/ansG) + '/' + (d/ansG);
    var opts = [ans, (w - sub_w) + ' ' + Math.abs(n - sub_n) + '/' + d, ansW + ' ' + ansN + '/' + (d * 2), (ansW + 1) + ''];
    return { q: 'Calculate ' + w + ' ' + n + '/' + d + ' − ' + sub_w + ' ' + sub_n + '/' + d + '.', opts: opts, c: 0,
             e: 'Convert to improper: ' + imp1 + '/' + d + ' − ' + imp2 + '/' + d + ' = ' + diffImp + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var target_w = _randInt(4, 8);
    var d = _randInt(3, 6);
    var target_n = _randInt(1, d - 1);
    var add_w = _randInt(1, 3);
    var add_n = _randInt(1, d - 1);
    var targetImp = target_w * d + target_n;
    var addImp = add_w * d + add_n;
    var missingImp = targetImp - addImp;
    if (missingImp <= 0) { target_w += 3; targetImp = target_w * d + target_n; missingImp = targetImp - addImp; }
    var mW = Math.floor(missingImp / d);
    var mN = missingImp % d;
    var mG = _gcd(mN, d);
    var ans = mN === 0 ? mW + '' : mW + ' ' + (mN/mG) + '/' + (d/mG);
    var opts = [ans, (target_w - add_w) + '', target_w + ' ' + target_n + '/' + d, (mW + 1) + ' ' + mN + '/' + d];
    return { q: '? + ' + add_w + ' ' + add_n + '/' + d + ' = ' + target_w + ' ' + target_n + '/' + d + '. Find the missing mixed number.', opts: opts, c: 0,
             e: target_w + ' ' + target_n + '/' + d + ' − ' + add_w + ' ' + add_n + '/' + d + ' = ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MULTIPLY & DIVIDE FRACTIONS (mt-07) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-07-1: Multiply Fractions by Whole Numbers ─────────────────────────
TEST_GENERATORS["mi-07-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 5), d = _randInt(n + 1, 9);
    var g = _gcd(n, d); n /= g; d /= g;
    var w = _randInt(2, 6);
    var prodN = n * w;
    var ansG = _gcd(prodN, d);
    var ansN = prodN / ansG, ansD = d / ansG;
    var ans = ansN >= ansD ? (ansN === ansD ? '1' : Math.floor(ansN/ansD) + (ansN % ansD ? ' ' + (ansN%ansD) + '/' + ansD : '')) : ansN + '/' + ansD;
    var opts = [ans, (n * w) + '/' + (d * w), (n + w) + '/' + d, prodN + '/' + d];
    return { q: 'Calculate ' + w + ' × ' + n + '/' + d + '.', opts: opts, c: 0,
             e: 'Multiply numerator by ' + w + ': ' + n + '×' + w + '=' + prodN + '. ' + prodN + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 5), d = _randInt(n + 1, 10);
    var g = _gcd(n, d); n /= g; d /= g;
    var w = _randInt(2, 5);
    var prodN = n * w;
    var ansG = _gcd(prodN, d);
    var ans = (prodN/ansG) + '/' + (d/ansG);
    if (prodN/ansG >= d/ansG) { var wh = Math.floor(prodN/ansG / (d/ansG)); var rm = (prodN/ansG) % (d/ansG); ans = rm === 0 ? wh + '' : wh + ' ' + rm + '/' + (d/ansG); }
    var opts = [ans, w + '/' + d, n + '/' + (d * w), (n + w) + '/' + d];
    return { q: 'What is ' + n + '/' + d + ' of ' + w + '?', opts: opts, c: 0,
             e: n + '/' + d + ' × ' + w + ' = ' + (n * w) + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _pickFrom([4, 5, 6, 8]);
    var n = _randInt(1, d - 1);
    var g = _gcd(n, d); n /= g; d /= g;
    var total = d * _randInt(3, 8);
    var ans = n * (total / d);
    var opts = _buildOpts(ans, [total / d, n * total, ans + n]);
    return { q: 'Find ' + n + '/' + d + ' of ' + total + '.', opts: opts, c: 0,
             e: total + ' ÷ ' + d + ' = ' + (total/d) + '. Then × ' + n + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 3), d = _randInt(4, 8);
    var g = _gcd(n, d); n /= g; d /= g;
    var w = _randInt(3, 7);
    var prodN = n * w, ansG = _gcd(prodN, d);
    var simplified = (prodN/ansG) + '/' + (d/ansG);
    var unsimplified = prodN + '/' + d;
    var ans = simplified;
    if (prodN/ansG >= d/ansG) { var wh = Math.floor(prodN/ansG / (d/ansG)); var rm = (prodN/ansG) % (d/ansG); ans = rm === 0 ? wh + '' : wh + ' ' + rm + '/' + (d/ansG); }
    var opts = [ans, unsimplified, (n * w) + '/' + (d * w), n + '/' + (d * w)];
    return { q: 'Simplify: ' + w + ' × ' + n + '/' + d + '.', opts: opts, c: 0,
             e: w + ' × ' + n + '/' + d + ' = ' + prodN + '/' + d + ' = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var d = _pickFrom([3, 4, 5, 6, 8]);
    var n = _randInt(1, d - 1);
    var g = _gcd(n, d); n /= g; d /= g;
    var amount = _randInt(50, 200);
    while (amount % d !== 0) amount++;
    var ans = (n * amount) / d;
    var opts = _buildOpts('£' + ans, ['£' + (amount / d), '£' + (amount - ans), '£' + (n * amount)]);
    return { q: 'A jacket costs £' + amount + '. It is reduced by ' + n + '/' + d + '. How much is the discount?', opts: opts, c: 0,
             e: '£' + amount + ' × ' + n + '/' + d + ' = £' + amount + ' ÷ ' + d + ' × ' + n + ' = £' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _pickFrom([3, 4, 5, 6]);
    var n = _randInt(1, d - 1);
    var g = _gcd(n, d); n /= g; d /= g;
    var total = d * _randInt(5, 12);
    var part = n * (total / d);
    var remaining = total - part;
    var opts = _buildOpts(remaining, [part, total, remaining + part]);
    return { q: 'A jar has ' + total + ' sweets. ' + n + '/' + d + ' are eaten. How many remain?', opts: opts, c: 0,
             e: n + '/' + d + ' of ' + total + ' = ' + part + ' eaten. Remaining: ' + total + ' − ' + part + ' = ' + remaining + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _pickFrom([4, 5, 6, 8]);
    var n = _randInt(1, d - 1);
    var g = _gcd(n, d); n /= g; d /= g;
    var result = _randInt(6, 24);
    var whole = result * d / n;
    var opts = _buildOpts(whole, [result * n, whole + d, result + d]);
    return { q: n + '/' + d + ' of a number is ' + result + '. What is the number?', opts: opts, c: 0,
             e: 'If ' + n + '/' + d + ' = ' + result + ', then 1/' + d + ' = ' + (result/n) + '. Whole = ' + (result/n) + ' × ' + d + ' = ' + whole + '.' };
  }}
];

// ── mi-07-2: Multiply Two Fractions ──────────────────────────────────────
TEST_GENERATORS["mi-07-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n1 = _randInt(1, 5), d1 = _randInt(n1 + 1, 8);
    var n2 = _randInt(1, 5), d2 = _randInt(n2 + 1, 8);
    var prodN = n1 * n2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    var opts = [ans, (n1 + n2) + '/' + (d1 + d2), prodN + '/' + prodD, (n1 * d2) + '/' + (d1 * n2)];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'Multiply tops: ' + n1 + '×' + n2 + '=' + prodN + '. Multiply bottoms: ' + d1 + '×' + d2 + '=' + prodD + '. Simplify: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(2, 6), d1 = _randInt(n1 + 1, 9);
    var n2 = _randInt(1, 4), d2 = _randInt(n2 + 1, 8);
    var prodN = n1 * n2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    var opts = [ans, prodN + '/' + prodD, (n1 + n2) + '/' + (d1 * d2), (n1 * d2 + n2 * d1) + '/' + (d1 * d2)];
    return { q: 'Multiply ' + n1 + '/' + d1 + ' by ' + n2 + '/' + d2 + '. Give your answer in simplest form.', opts: opts, c: 0,
             e: '(' + n1 + '×' + n2 + ')/(' + d1 + '×' + d2 + ') = ' + prodN + '/' + prodD + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d1 = _randInt(3, 6), d2 = _randInt(3, 6);
    var n1 = _randInt(1, d1 - 1), n2 = _randInt(1, d2 - 1);
    var prodN = n1 * n2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    var half = '1/2';
    var isLessThanHalf = (prodN/g) / (prodD/g) < 0.5;
    var opts = [isLessThanHalf ? 'Less than ½' : 'Greater than ½', isLessThanHalf ? 'Greater than ½' : 'Less than ½', 'Equal to ½', 'Greater than 1'];
    return { q: n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + ' = ' + ans + '. Is this less than, equal to, or greater than ½?', opts: opts, c: 0,
             e: ans + ' = ' + ((prodN/g)/(prodD/g)).toFixed(3) + '. Compare to 0.5: ' + (isLessThanHalf ? 'less' : 'greater') + ' than ½.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(2, 5), d1 = _randInt(n1 + 1, 8);
    var n2 = _randInt(2, 5), d2 = _randInt(n2 + 1, 8);
    var prodN = n1 * n2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    var opts = [ans, (n1 * d2) + '/' + (d1 * n2), n1 + '/' + (d1 + d2), prodN + '/' + prodD];
    return { q: 'Find ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'Numerator: ' + n1 + '×' + n2 + '=' + prodN + '. Denominator: ' + d1 + '×' + d2 + '=' + prodD + '. Simplified: ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var n1 = _randInt(2, 5), d1 = _randInt(n1 + 1, 9);
    var g1 = _gcd(n1, d1); n1 /= g1; d1 /= g1;
    // Choose n2 = d1 for cross-cancelling
    var n2 = d1, d2 = _randInt(n1 + 1, 8);
    var g2 = _gcd(n2, d2); n2 /= g2; d2 /= g2;
    var prodN = n1 * n2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    var opts = [ans, (n1 * n2) + '/' + (d1 * d2), n1 + '/' + d2, (prodN + 1) + '/' + prodD];
    return { q: 'Simplify before multiplying: ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'Cross-cancel where possible, then multiply. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n1 = _randInt(2, 4), d1 = _randInt(n1 + 1, 7);
    var n2 = _randInt(2, 4), d2 = _randInt(n2 + 1, 7);
    var n3 = _randInt(1, 3), d3 = _randInt(n3 + 1, 6);
    var prodN = n1 * n2 * n3, prodD = d1 * d2 * d3;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    var opts = [ans, prodN + '/' + prodD, (n1 + n2 + n3) + '/' + (d1 + d2 + d3), (prodN/g + 1) + '/' + (prodD/g)];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + ' × ' + n3 + '/' + d3 + '.', opts: opts, c: 0,
             e: 'Multiply all numerators and all denominators: ' + prodN + '/' + prodD + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(2, 5), d = _randInt(n + 1, 8);
    var g = _gcd(n, d); n /= g; d /= g;
    var squared_n = n * n, squared_d = d * d;
    var sg = _gcd(squared_n, squared_d);
    var ans = (squared_n/sg) + '/' + (squared_d/sg);
    var opts = [ans, (2 * n) + '/' + (2 * d), (n * 2) + '/' + (d * d), squared_n + '/' + squared_d];
    return { q: 'Calculate (' + n + '/' + d + ')².', opts: opts, c: 0,
             e: '(' + n + '/' + d + ')² = ' + n + '²/' + d + '² = ' + squared_n + '/' + squared_d + ' = ' + ans + '.' };
  }}
];

// ── mi-07-3: Divide Fractions ────────────────────────────────────────────
TEST_GENERATORS["mi-07-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 8), d = _randInt(2, 6);
    var ans = n * d;
    var opts = _buildOpts(ans, [n / d, n + d, ans + 1]);
    return { q: 'Calculate ' + n + ' ÷ 1/' + d + '.', opts: opts, c: 0,
             e: 'Flip and multiply: ' + n + ' × ' + d + '/1 = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(2, 6), d1 = _randInt(n1 + 1, 9);
    var d2 = _randInt(2, 6);
    var prodN = n1 * d2, prodD = d1;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    if (prodN/g >= prodD/g) { var w = Math.floor(prodN/g / (prodD/g)); var r = (prodN/g) % (prodD/g); ans = r === 0 ? w + '' : w + ' ' + r + '/' + (prodD/g); }
    var opts = [ans, n1 + '/' + (d1 * d2), (n1 * d1) + '/' + d2, prodN + '/' + prodD];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' ÷ 1/' + d2 + '.', opts: opts, c: 0,
             e: 'Flip 1/' + d2 + ' to get ' + d2 + '/1. Multiply: ' + n1 + '×' + d2 + '/' + d1 + ' = ' + prodN + '/' + prodD + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(2, 5), d1 = _randInt(n1 + 1, 8);
    var n2 = _randInt(1, 4), d2 = _randInt(n2 + 1, 7);
    var prodN = n1 * d2, prodD = d1 * n2;
    var g = _gcd(prodN, prodD);
    var ans = (prodN/g) + '/' + (prodD/g);
    if (prodN/g >= prodD/g) { var w = Math.floor(prodN/g / (prodD/g)); var r = (prodN/g) % (prodD/g); ans = r === 0 ? w + '' : w + ' ' + r + '/' + (prodD/g); }
    var opts = [ans, (n1 * n2) + '/' + (d1 * d2), (n1 + d2) + '/' + (d1 + n2), prodN + '/' + prodD];
    return { q: 'Calculate ' + n1 + '/' + d1 + ' ÷ ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'Flip and multiply: ' + n1 + '/' + d1 + ' × ' + d2 + '/' + n2 + ' = ' + prodN + '/' + prodD + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w = _randInt(2, 8);
    var n = _randInt(2, 5), d = _randInt(n + 1, 9);
    var ans_n = w * d, ans_d = n;
    var g = _gcd(ans_n, ans_d);
    var ansN = ans_n / g, ansD = ans_d / g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, (w * n) + '/' + d, w + '/' + (n * d), ans_n + '/' + ans_d];
    return { q: 'Calculate ' + w + ' ÷ ' + n + '/' + d + '.', opts: opts, c: 0,
             e: 'Flip: ' + w + ' × ' + d + '/' + n + ' = ' + ans_n + '/' + ans_d + ' = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var n1 = _randInt(2, 5), d1 = _randInt(n1 + 1, 8);
    var n2 = _randInt(2, 5), d2 = _randInt(n2 + 1, 8);
    var divN = n1 * d2, divD = d1 * n2;
    var g = _gcd(divN, divD);
    var result = (divN/g) + '/' + (divD/g);
    if (divN/g >= divD/g) { var w = Math.floor(divN/g / (divD/g)); var r = (divN/g) % (divD/g); result = r === 0 ? w + '' : w + ' ' + r + '/' + (divD/g); }
    var recipN = n2 * d1, recipD = d2 * n1;
    var rg = _gcd(recipN, recipD);
    var recip = (recipN/rg) + '/' + (recipD/rg);
    var opts = [recip, result, n2 + '/' + d2, '1'];
    return { q: 'If ' + n1 + '/' + d1 + ' ÷ ' + n2 + '/' + d2 + ' = ' + result + ', what is ' + n2 + '/' + d2 + ' ÷ ' + n1 + '/' + d1 + '?', opts: opts, c: 0,
             e: 'Dividing in reverse gives the reciprocal of the original answer: ' + recip + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(3, 6);
    var n = _randInt(1, d - 1);
    var g = _gcd(n, d); n /= g; d /= g;
    var total = d * _randInt(3, 8);
    var pieces = total * d / n;
    var opts = _buildOpts(total / 1 * d / n, [total * n, total / d, n * total]);
    // Simpler: How many n/d's fit in total?
    var answer = total * d / n;
    opts = _buildOpts(answer, [total * n / d, total + d, answer - 1]);
    return { q: 'How many pieces of ' + n + '/' + d + ' m can be cut from a ' + total + ' m rope?', opts: opts, c: 0,
             e: total + ' ÷ ' + n + '/' + d + ' = ' + total + ' × ' + d + '/' + n + ' = ' + answer + ' pieces.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n1 = _randInt(2, 4), d1 = _randInt(n1 + 1, 7);
    var n2 = _randInt(2, 4), d2 = _randInt(n2 + 1, 7);
    var n3 = _randInt(1, 3), d3 = _randInt(n3 + 1, 6);
    // (n1/d1 ÷ n2/d2) × n3/d3
    var stepN = n1 * d2, stepD = d1 * n2;
    var finalN = stepN * n3, finalD = stepD * d3;
    var g = _gcd(finalN, finalD);
    var ans = (finalN/g) + '/' + (finalD/g);
    var opts = [ans, (n1*n2*n3) + '/' + (d1*d2*d3), stepN + '/' + stepD, finalN + '/' + finalD];
    return { q: 'Calculate (' + n1 + '/' + d1 + ' ÷ ' + n2 + '/' + d2 + ') × ' + n3 + '/' + d3 + '.', opts: opts, c: 0,
             e: 'First divide: ' + stepN + '/' + stepD + '. Then multiply by ' + n3 + '/' + d3 + ': ' + finalN + '/' + finalD + ' = ' + ans + '.' };
  }}
];

// ── mi-07-4: Mixed Number Operations ─────────────────────────────────────
TEST_GENERATORS["mi-07-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var w = _randInt(1, 3), n = _randInt(1, 3), d = _randInt(n + 1, 6);
    var g = _gcd(n, d); n /= g; d /= g;
    var mult = _randInt(2, 5);
    var impN = w * d + n;
    var prodN = impN * mult;
    var ansW = Math.floor(prodN / d);
    var ansR = prodN % d;
    var ansG = _gcd(ansR, d);
    var ans = ansR === 0 ? ansW + '' : ansW + ' ' + (ansR/ansG) + '/' + (d/ansG);
    var opts = [ans, (w * mult) + ' ' + n + '/' + d, prodN + '/' + d, (ansW + 1) + ''];
    return { q: 'Calculate ' + mult + ' × ' + w + ' ' + n + '/' + d + '.', opts: opts, c: 0,
             e: 'Convert: ' + impN + '/' + d + '. Multiply: ' + impN + '×' + mult + '=' + prodN + '. ' + prodN + '/' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w1 = _randInt(1, 3), n1 = _randInt(1, 3), d1 = _randInt(n1 + 1, 5);
    var g1 = _gcd(n1, d1); n1 /= g1; d1 /= g1;
    var n2 = _randInt(1, 3), d2 = _randInt(n2 + 1, 6);
    var g2 = _gcd(n2, d2); n2 /= g2; d2 /= g2;
    var imp1 = w1 * d1 + n1;
    var prodN = imp1 * n2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ansN = prodN/g, ansD = prodD/g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, (w1 * n2) + '/' + (d1 * d2), prodN + '/' + prodD, (imp1 + n2) + '/' + (d1 + d2)];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'Convert to improper: ' + imp1 + '/' + d1 + ' × ' + n2 + '/' + d2 + ' = ' + prodN + '/' + prodD + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w = _randInt(1, 3), n = _randInt(1, 3), d = _randInt(n + 1, 5);
    var g1 = _gcd(n, d); n /= g1; d /= g1;
    var divBy = _randInt(2, 4);
    var impN = w * d + n;
    var prodN = impN, prodD = d * divBy;
    var g = _gcd(prodN, prodD);
    var ansN = prodN/g, ansD = prodD/g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, (w * divBy) + ' ' + n + '/' + d, impN + '/' + (d + divBy), (w / divBy) + ''];
    return { q: 'Calculate ' + w + ' ' + n + '/' + d + ' ÷ ' + divBy + '.', opts: opts, c: 0,
             e: 'Convert: ' + impN + '/' + d + '. Divide: ' + impN + '/' + (d * divBy) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var w1 = _randInt(1, 3), n1 = _randInt(1, 2), d = _randInt(3, 5);
    var n2 = _randInt(1, d - 1);
    var imp1 = w1 * d + n1;
    var prodN = imp1 * d, prodD = d * n2;
    var g = _gcd(prodN, prodD);
    var ansN = prodN/g, ansD = prodD/g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, imp1 + '/' + n2, (w1 * n2) + '/' + d, (imp1 * n2) + '/' + (d * d)];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d + ' ÷ ' + n2 + '/' + d + '.', opts: opts, c: 0,
             e: 'Convert and flip: ' + imp1 + '/' + d + ' × ' + d + '/' + n2 + ' = ' + imp1 + '/' + n2 + ' = ' + ans + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var w1 = _randInt(1, 2), n1 = _randInt(1, 2), d1 = _randInt(3, 5);
    var w2 = _randInt(1, 2), n2 = _randInt(1, 2), d2 = _randInt(3, 5);
    var imp1 = w1 * d1 + n1, imp2 = w2 * d2 + n2;
    var prodN = imp1 * imp2, prodD = d1 * d2;
    var g = _gcd(prodN, prodD);
    var ansN = prodN/g, ansD = prodD/g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, (w1 * w2) + ' ' + (n1 * n2) + '/' + (d1 * d2), prodN + '/' + prodD, (imp1 + imp2) + '/' + (d1 + d2)];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d1 + ' × ' + w2 + ' ' + n2 + '/' + d2 + '.', opts: opts, c: 0,
             e: 'Convert both: ' + imp1 + '/' + d1 + ' × ' + imp2 + '/' + d2 + ' = ' + prodN + '/' + prodD + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var w1 = _randInt(1, 3), n1 = _randInt(1, 2), d = _randInt(3, 5);
    var w2 = _randInt(1, 2), n2 = _randInt(1, d - 1);
    var imp1 = w1 * d + n1, imp2 = w2 * d + n2;
    var divN = imp1 * d, divD = d * imp2;
    var g = _gcd(divN, divD);
    var ansN = divN/g, ansD = divD/g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, (imp1 * imp2) + '/' + (d * d), (w1 - w2) + ' ' + (n1 - n2) + '/' + d, imp1 + '/' + imp2];
    return { q: 'Calculate ' + w1 + ' ' + n1 + '/' + d + ' ÷ ' + w2 + ' ' + n2 + '/' + d + '.', opts: opts, c: 0,
             e: 'Convert: ' + imp1 + '/' + d + ' ÷ ' + imp2 + '/' + d + ' = ' + imp1 + '/' + d + ' × ' + d + '/' + imp2 + ' = ' + imp1 + '/' + imp2 + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(3, 5);
    var n = _randInt(1, d - 1);
    var w = _randInt(1, 3);
    var imp = w * d + n;
    var squared_n = imp * imp, squared_d = d * d;
    var g = _gcd(squared_n, squared_d);
    var ansN = squared_n/g, ansD = squared_d/g;
    var ans = ansN >= ansD ? (ansN % ansD === 0 ? (ansN/ansD) + '' : Math.floor(ansN/ansD) + ' ' + (ansN%ansD) + '/' + ansD) : ansN + '/' + ansD;
    var opts = [ans, (w * w) + ' ' + (n * n) + '/' + (d * d), squared_n + '/' + squared_d, (2 * w) + ' ' + (2 * n) + '/' + d];
    return { q: 'Calculate (' + w + ' ' + n + '/' + d + ')².', opts: opts, c: 0,
             e: 'Convert: (' + imp + '/' + d + ')² = ' + squared_n + '/' + squared_d + ' = ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// INTEGERS (mt-08) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-08-1: Understanding Integers ──────────────────────────────────────
TEST_GENERATORS["mi-08-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 20);
    var opts = ['-' + n, n + '', '0', '-' + (n + 1)];
    return { q: 'What is the opposite (additive inverse) of ' + n + '?', opts: opts, c: 0,
             e: 'The opposite of ' + n + ' is −' + n + '. They are the same distance from 0 on opposite sides.' };
  }},
  { depth: 'medium', gen: function() {
    var nums = [_randInt(-15, -1), _randInt(-10, -1), _randInt(1, 10), _randInt(1, 15)];
    nums.sort(function() { return Math.random() - 0.5; });
    var sorted = nums.slice().sort(function(a, b) { return a - b; });
    var ansStr = sorted.join(', ');
    var wrongStr = sorted.slice().reverse().join(', ');
    var wrong2 = sorted.slice(); var t = wrong2[0]; wrong2[0] = wrong2[1]; wrong2[1] = t;
    var opts = [ansStr, wrongStr, wrong2.join(', '), nums.join(', ')];
    return { q: 'Order from smallest to largest: ' + nums.join(', '), opts: opts, c: 0,
             e: 'On a number line, further left = smaller. Order: ' + ansStr + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(-12, -1), b = _randInt(-12, 12);
    while (b === a) b = _randInt(-12, 12);
    var symbol = a < b ? '<' : '>';
    var opts = [symbol, symbol === '<' ? '>' : '<', '=', '≥'];
    return { q: 'Insert < or >: ' + a + ' ___ ' + b, opts: opts, c: 0,
             e: a + ' is ' + (a < b ? 'to the left of' : 'to the right of') + ' ' + b + ' on the number line, so ' + a + ' ' + symbol + ' ' + b + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(-15, -1);
    var dist = Math.abs(n);
    var opts = _buildOpts(dist, [n, -dist - 1, dist + 1]);
    return { q: 'How far is ' + n + ' from 0 on the number line?', opts: opts, c: 0,
             e: 'Distance from 0 = |' + n + '| = ' + dist + ' (always positive).' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-10, -1), b = _randInt(1, 10);
    var diff = b - a;
    var opts = _buildOpts(diff, [Math.abs(a) + Math.abs(b) + 1, a + b, diff - 1]);
    return { q: 'How many integers are between ' + a + ' and ' + b + ' (not including ' + a + ' and ' + b + ')?', opts: opts, c: 0,
             e: 'From ' + a + ' to ' + b + ': count = ' + b + ' − (' + a + ') − 1 = ' + (diff - 1) + '. Wait — between means excluding endpoints: ' + (diff - 1) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var temp1 = _randInt(-15, -5);
    var temp2 = _randInt(5, 20);
    var diff = temp2 - temp1;
    var opts = _buildOpts(diff + '°C', [(temp1 + temp2) + '°C', Math.abs(temp1) + '°C', (diff + 1) + '°C']);
    return { q: 'The temperature rises from ' + temp1 + '°C to ' + temp2 + '°C. By how many degrees did it rise?', opts: opts, c: 0,
             e: 'Rise = ' + temp2 + ' − (' + temp1 + ') = ' + temp2 + ' + ' + Math.abs(temp1) + ' = ' + diff + '°C.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var nums = [_randInt(-8, -1), _randInt(-8, -1), _randInt(1, 8), _randInt(1, 8), _randInt(-5, 5)];
    var sorted = nums.slice().sort(function(a, b) { return a - b; });
    var median = sorted[2];
    var opts = _buildOpts(median, [sorted[0], sorted[4], (sorted[1] + sorted[3]) / 2]);
    return { q: 'Find the median of: ' + nums.join(', '), opts: opts, c: 0,
             e: 'Order: ' + sorted.join(', ') + '. Middle value (3rd of 5) = ' + median + '.' };
  }}
];

// ── mi-08-2: Add Integers ────────────────────────────────────────────────
TEST_GENERATORS["mi-08-2"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(-15, -1), b = _randInt(1, 15);
    var ans = a + b;
    var opts = _buildOpts(ans, [a - b, Math.abs(a) + b, -(Math.abs(a) + b)]);
    return { q: 'Calculate ' + a + ' + ' + b + '.', opts: opts, c: 0,
             e: a + ' + ' + b + ' = ' + ans + '. Start at ' + a + ', move ' + b + ' to the right.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(-12, -1), b = _randInt(-12, -1);
    var ans = a + b;
    var opts = _buildOpts(ans, [a - b, Math.abs(a + b), a * b]);
    return { q: 'Calculate (' + a + ') + (' + b + ').', opts: opts, c: 0,
             e: 'Adding two negatives: ' + a + ' + ' + b + ' = ' + ans + '. Both negative → result is more negative.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(5, 20), b = _randInt(-20, -5);
    var ans = a + b;
    var opts = _buildOpts(ans, [a - b, -(a + Math.abs(b)), a + Math.abs(b)]);
    return { q: 'What is ' + a + ' + (' + b + ')?', opts: opts, c: 0,
             e: a + ' + (' + b + ') = ' + a + ' − ' + Math.abs(b) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var temp = _randInt(-10, -1);
    var rise = _randInt(3, 15);
    var ans = temp + rise;
    var opts = _buildOpts(ans + '°C', [(temp - rise) + '°C', (temp * rise) + '°C', (ans + 1) + '°C']);
    return { q: 'The temperature is ' + temp + '°C. It rises by ' + rise + '°C. What is the new temperature?', opts: opts, c: 0,
             e: temp + ' + ' + rise + ' = ' + ans + '°C.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-10, -1), b = _randInt(-8, 8), c = _randInt(-8, 8);
    var ans = a + b + c;
    var opts = _buildOpts(ans, [a + b - c, Math.abs(a) + b + c, ans + 1]);
    return { q: 'Calculate (' + a + ') + (' + b + ') + (' + c + ').', opts: opts, c: 0,
             e: 'Add step by step: ' + a + ' + ' + b + ' = ' + (a+b) + ', then + ' + c + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var ans = _randInt(-10, 10);
    var a = _randInt(-15, 15);
    var b = ans - a;
    var opts = _buildOpts(b, [a - ans, -b, b + 1]);
    return { q: a + ' + ? = ' + ans + '. Find the missing integer.', opts: opts, c: 0,
             e: '? = ' + ans + ' − ' + a + ' = ' + b + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var deposits = [_randInt(50, 200), _randInt(20, 100)];
    var withdrawals = [_randInt(-150, -50), _randInt(-80, -20)];
    var start = _randInt(-50, 100);
    var ans = start + deposits[0] + deposits[1] + withdrawals[0] + withdrawals[1];
    var opts = _buildOpts('£' + ans, ['£' + (start + deposits[0] + deposits[1]), '£' + (ans + 10), '£' + Math.abs(ans)]);
    return { q: 'A bank balance is £' + start + '. Deposits of £' + deposits[0] + ' and £' + deposits[1] + ' are made. Withdrawals of £' + Math.abs(withdrawals[0]) + ' and £' + Math.abs(withdrawals[1]) + ' follow. What is the final balance?',
             opts: opts, c: 0,
             e: '£' + start + ' + ' + deposits[0] + ' + ' + deposits[1] + ' − ' + Math.abs(withdrawals[0]) + ' − ' + Math.abs(withdrawals[1]) + ' = £' + ans + '.' };
  }}
];

// ── mi-08-3: Subtract Integers ───────────────────────────────────────────
TEST_GENERATORS["mi-08-3"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(-12, 12), b = _randInt(-12, 12);
    while (b === 0) b = _randInt(-12, 12);
    var ans = a - b;
    var opts = _buildOpts(ans, [a + b, b - a, -(a + b)]);
    return { q: 'Calculate ' + a + ' − (' + b + ').', opts: opts, c: 0,
             e: a + ' − (' + b + ') = ' + a + (b < 0 ? ' + ' + Math.abs(b) : ' − ' + b) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(-10, -1), b = _randInt(-10, -1);
    var ans = a - b;
    var opts = _buildOpts(ans, [a + b, b - a, Math.abs(a - b) * -1]);
    return { q: 'What is (' + a + ') − (' + b + ')?', opts: opts, c: 0,
             e: '(' + a + ') − (' + b + ') = ' + a + ' + ' + Math.abs(b) + ' = ' + ans + '. Subtracting a negative = adding.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 15), b = _randInt(a + 1, 25);
    var ans = a - b;
    var opts = _buildOpts(ans, [b - a, a + b, -(a + b)]);
    return { q: 'Calculate ' + a + ' − ' + b + '.', opts: opts, c: 0,
             e: a + ' − ' + b + ' = ' + ans + '. Result is negative because ' + b + ' > ' + a + '.' };
  }},
  { depth: 'medium', gen: function() {
    var high = _randInt(-5, 10);
    var low = _randInt(-20, high - 5);
    var diff = high - low;
    var opts = _buildOpts(diff + '°C', [(high + low) + '°C', Math.abs(low) + '°C', (diff - 1) + '°C']);
    return { q: 'The highest temperature was ' + high + '°C and the lowest was ' + low + '°C. What is the difference?', opts: opts, c: 0,
             e: 'Difference = ' + high + ' − (' + low + ') = ' + high + ' + ' + Math.abs(low) + ' = ' + diff + '°C.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-10, 10), b = _randInt(-10, 10), c = _randInt(-10, 10);
    var ans = a - b - c;
    var opts = _buildOpts(ans, [a - b + c, a + b - c, -(a - b - c)]);
    return { q: 'Calculate ' + a + ' − (' + b + ') − (' + c + ').', opts: opts, c: 0,
             e: 'Step by step: ' + a + ' − (' + b + ') = ' + (a - b) + ', then − (' + c + ') = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var target = _randInt(-10, 10);
    var a = _randInt(-12, 12);
    var b = a - target;
    var opts = _buildOpts(b, [-b, a + target, target - a]);
    return { q: a + ' − ? = ' + target + '. Find the missing integer.', opts: opts, c: 0,
             e: '? = ' + a + ' − ' + target + ' = ' + b + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var floor1 = _randInt(-3, -1);
    var floor2 = _randInt(3, 10);
    var floors = floor2 - floor1;
    var opts = _buildOpts(floors, [floor2 + floor1, Math.abs(floor1) + 1, floors - 1]);
    return { q: 'A lift goes from floor ' + floor1 + ' (basement) to floor ' + floor2 + '. How many floors does it travel?', opts: opts, c: 0,
             e: 'Floors travelled = ' + floor2 + ' − (' + floor1 + ') = ' + floor2 + ' + ' + Math.abs(floor1) + ' = ' + floors + '.' };
  }}
];

// ── mi-08-4: Multiply & Divide Integers ──────────────────────────────────
TEST_GENERATORS["mi-08-4"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(-9, -2), b = _randInt(2, 9);
    var ans = a * b;
    var opts = _buildOpts(ans, [-ans, a + b, a - b]);
    return { q: 'Calculate (' + a + ') × ' + b + '.', opts: opts, c: 0,
             e: 'Negative × positive = negative. ' + Math.abs(a) + ' × ' + b + ' = ' + Math.abs(ans) + ', so answer = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(-9, -2), b = _randInt(-9, -2);
    var ans = a * b;
    var opts = _buildOpts(ans, [-ans, a + b, a - b]);
    return { q: 'Calculate (' + a + ') × (' + b + ').', opts: opts, c: 0,
             e: 'Negative × negative = positive. ' + Math.abs(a) + ' × ' + Math.abs(b) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(2, 9);
    var quotient = _randInt(-9, -2);
    var a = quotient * b;
    var opts = _buildOpts(quotient, [-quotient, a + b, a - b]);
    return { q: 'Calculate (' + a + ') ÷ ' + b + '.', opts: opts, c: 0,
             e: 'Negative ÷ positive = negative. ' + Math.abs(a) + ' ÷ ' + b + ' = ' + Math.abs(quotient) + ', so answer = ' + quotient + '.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(-8, -2);
    var quotient = _randInt(2, 9);
    var a = quotient * b;
    var opts = _buildOpts(quotient, [-quotient, a / 2, -a]);
    return { q: 'Calculate (' + a + ') ÷ (' + b + ').', opts: opts, c: 0,
             e: 'Negative ÷ negative = positive. ' + Math.abs(a) + ' ÷ ' + Math.abs(b) + ' = ' + quotient + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-5, -2), b = _randInt(-5, -2), c = _randInt(2, 5);
    var ans = a * b * c;
    var opts = _buildOpts(ans, [-ans, a * b + c, Math.abs(a * b * c) * -1 === ans ? ans + 1 : -ans]);
    return { q: 'Calculate (' + a + ') × (' + b + ') × ' + c + '.', opts: opts, c: 0,
             e: 'Two negatives: (' + a + ')×(' + b + ')=' + (a*b) + ' (positive). Then ×' + c + '=' + ans + '. Even number of negatives → positive.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(-6, -2);
    var squared = n * n;
    var cubed = n * n * n;
    var opts = _buildOpts(cubed, [squared, -squared, -cubed]);
    return { q: 'What is (' + n + ')³?', opts: opts, c: 0,
             e: '(' + n + ')³ = ' + n + ' × ' + n + ' × ' + n + ' = ' + (n*n) + ' × ' + n + ' = ' + cubed + '. Odd power of negative → negative.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-8, -2), b = _randInt(2, 6);
    var product = a * b;
    var c = _randInt(-5, -2);
    var quotient = product / c;
    // Make sure it divides evenly
    while (product % c !== 0) { c = _randInt(-5, -2); }
    quotient = product / c;
    var ans = quotient;
    var opts = _buildOpts(ans, [-ans, product + c, a * b * c]);
    return { q: 'Calculate [(' + a + ') × ' + b + '] ÷ (' + c + ').', opts: opts, c: 0,
             e: 'First: (' + a + ') × ' + b + ' = ' + product + '. Then ÷ (' + c + ') = ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// RATIO & RATES (mt-09) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-09-1: Write & Simplify Ratios ─────────────────────────────────────
TEST_GENERATORS["mi-09-1"] = [
  { depth: 'medium', gen: function() {
    var g = _randInt(2, 8);
    var a = g * _randInt(2, 6), b = g * _randInt(2, 6);
    while (a === b) b = g * _randInt(2, 6);
    var sa = a / _gcd(a, b), sb = b / _gcd(a, b);
    var opts = [sa + ':' + sb, a + ':' + b, sb + ':' + sa, (sa+1) + ':' + sb];
    return { q: 'Simplify the ratio ' + a + ':' + b + '.', opts: opts, c: 0,
             e: 'HCF(' + a + ',' + b + ') = ' + _gcd(a,b) + '. Divide both: ' + sa + ':' + sb + '.' };
  }},
  { depth: 'medium', gen: function() {
    var boys = _randInt(8, 20), girls = _randInt(8, 20);
    var g = _gcd(boys, girls);
    var ans = (boys/g) + ':' + (girls/g);
    var opts = [ans, boys + ':' + girls, (girls/g) + ':' + (boys/g), (boys/g + 1) + ':' + (girls/g)];
    return { q: 'A class has ' + boys + ' boys and ' + girls + ' girls. Write the ratio of boys to girls in simplest form.', opts: opts, c: 0,
             e: boys + ':' + girls + ' simplified (÷' + g + ') = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5), c = _randInt(2, 5);
    var mult = _randInt(2, 4);
    var bigA = a * mult, bigB = b * mult, bigC = c * mult;
    var opts = [a + ':' + b + ':' + c, bigA + ':' + bigB + ':' + bigC, b + ':' + a + ':' + c, a + ':' + c + ':' + b];
    return { q: 'Simplify ' + bigA + ':' + bigB + ':' + bigC + '.', opts: opts, c: 0,
             e: 'Divide all parts by ' + mult + ': ' + a + ':' + b + ':' + c + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4), b = _randInt(1, 4);
    var g = _gcd(a, b); a /= g; b /= g;
    var total = (a + b) * _randInt(3, 8);
    var partA = a * total / (a + b), partB = b * total / (a + b);
    var opts = [partA + ' and ' + partB, partB + ' and ' + partA, (total/2) + ' and ' + (total/2), (partA+1) + ' and ' + (partB-1)];
    return { q: 'Share ' + total + ' in the ratio ' + a + ':' + b + '.', opts: opts, c: 0,
             e: 'Total parts = ' + (a+b) + '. One part = ' + (total/(a+b)) + '. Shares: ' + partA + ' and ' + partB + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5);
    var g = _gcd(a, b); a /= g; b /= g;
    var partVal = _randInt(5, 15);
    var total = (a + b) * partVal;
    var diff = Math.abs(a - b) * partVal;
    var opts = _buildOpts(total, [diff, (a + b) * (partVal + 1), total + partVal]);
    return { q: 'Two numbers are in the ratio ' + a + ':' + b + '. The difference between them is ' + diff + '. What is their total?', opts: opts, c: 0,
             e: 'Difference = ' + Math.abs(a-b) + ' parts = ' + diff + '. One part = ' + partVal + '. Total = ' + (a+b) + ' parts = ' + total + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5), c = _randInt(2, 5);
    var partVal = _randInt(3, 8);
    var total = (a + b + c) * partVal;
    var middle = b * partVal;
    var opts = _buildOpts(total, [middle, a * partVal + c * partVal, total + partVal]);
    return { q: 'Share £' + total + ' in the ratio ' + a + ':' + b + ':' + c + '. How much does the middle person get?', opts: ['£' + middle, '£' + (a * partVal), '£' + (c * partVal), '£' + total], c: 0,
             e: 'Total parts = ' + (a+b+c) + '. One part = £' + partVal + '. Middle share = ' + b + ' × £' + partVal + ' = £' + middle + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4), b = _randInt(3, 6);
    while (a === b) b = _randInt(3, 6);
    var knownPart = a * _randInt(3, 8);
    var otherPart = knownPart * b / a;
    var opts = _buildOpts(otherPart, [knownPart + b, knownPart * a, otherPart + a]);
    return { q: 'The ratio of red to blue beads is ' + a + ':' + b + '. There are ' + knownPart + ' red beads. How many blue beads are there?', opts: opts, c: 0,
             e: 'One part = ' + knownPart + ' ÷ ' + a + ' = ' + (knownPart/a) + '. Blue = ' + b + ' parts = ' + otherPart + '.' };
  }}
];

// ── mi-09-2: Equivalent Ratios & Ratio Tables ───────────────────────────
TEST_GENERATORS["mi-09-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 5), b = _randInt(1, 5);
    var g = _gcd(a, b); a /= g; b /= g;
    var mult = _randInt(3, 8);
    var eqA = a * mult, eqB = b * mult;
    var opts = [eqA + ':' + eqB, (eqA + 1) + ':' + eqB, eqA + ':' + (eqB + 1), (a * (mult+1)) + ':' + eqB];
    return { q: 'Find an equivalent ratio to ' + a + ':' + b + ' where the first number is ' + eqA + '.', opts: opts, c: 0,
             e: 'Multiply both by ' + mult + ': ' + a + ':' + b + ' = ' + eqA + ':' + eqB + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5);
    var g = _gcd(a, b); a /= g; b /= g;
    var mult = _randInt(4, 10);
    var total = (a + b) * mult;
    var partA = a * mult, partB = b * mult;
    var opts = _buildOpts(partA + ' and ' + partB, [partB + ' and ' + partA, (total/2) + ' and ' + (total/2), (partA+1) + ' and ' + (partB-1)]);
    return { q: 'Divide ' + total + ' in the ratio ' + a + ':' + b + '.', opts: opts, c: 0,
             e: total + ' ÷ ' + (a+b) + ' = ' + mult + ' per part. ' + a + ' parts = ' + partA + ', ' + b + ' parts = ' + partB + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(2, 6);
    var m1 = _randInt(2, 4), m2 = _randInt(5, 8);
    var r1 = (a*m1) + ':' + (b*m1);
    var r2 = (a*m2) + ':' + (b*m2);
    var rWrong = (a*m1) + ':' + (b*m2);
    var opts = ['Yes — both simplify to ' + a + ':' + b, 'No — they simplify differently', 'Only if multiplied by the same number', 'Cannot tell'];
    return { q: 'Are the ratios ' + r1 + ' and ' + r2 + ' equivalent?', opts: opts, c: 0,
             e: r1 + ' simplifies to ' + a + ':' + b + '. ' + r2 + ' simplifies to ' + a + ':' + b + '. They are equivalent.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4), b = _randInt(2, 5);
    var g = _gcd(a,b); a/=g; b/=g;
    var given = a * _randInt(3, 9);
    var missing = given * b / a;
    var opts = _buildOpts(missing, [given + b, given * a, missing + 1]);
    return { q: 'In a recipe, the ratio of flour to sugar is ' + a + ':' + b + '. If you use ' + given + 'g of flour, how much sugar do you need?', opts: opts, c: 0,
             e: given + ' ÷ ' + a + ' = ' + (given/a) + ' per part. Sugar = ' + b + ' × ' + (given/a) + ' = ' + missing + 'g.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4), b = _randInt(2, 4), c = _randInt(2, 4);
    var total = (a + b + c) * _randInt(5, 10);
    var parts = total / (a + b + c);
    var largest = Math.max(a, b, c) * parts;
    var smallest = Math.min(a, b, c) * parts;
    var diff = largest - smallest;
    var opts = _buildOpts(diff, [largest, smallest, total]);
    return { q: '£' + total + ' is shared in the ratio ' + a + ':' + b + ':' + c + '. What is the difference between the largest and smallest share?', opts: opts, c: 0,
             e: 'One part = £' + parts + '. Largest = ' + Math.max(a,b,c) + '×' + parts + '=£' + largest + '. Smallest = ' + Math.min(a,b,c) + '×' + parts + '=£' + smallest + '. Diff = £' + diff + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5);
    var g = _gcd(a,b); a/=g; b/=g;
    var increase = _randInt(3, 10);
    var newA = a + increase;
    // New ratio
    var newG = _gcd(newA, b);
    var opts = [newA + ':' + b, (a + increase) + ':' + (b + increase), a + ':' + (b + increase), (newA/newG) + ':' + (b/newG)];
    if (newG > 1) opts[0] = (newA/newG) + ':' + (b/newG);
    return { q: 'The ratio of cats to dogs is ' + a + ':' + b + '. ' + increase + ' more cats join. If there were ' + a + ' cats originally, what is the new ratio?', opts: opts, c: 0,
             e: 'New cats = ' + a + ' + ' + increase + ' = ' + newA + '. Dogs unchanged = ' + b + '. New ratio: ' + newA + ':' + b + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(3, 7), b = _randInt(3, 7);
    while (a === b) b = _randInt(3, 7);
    var totalItems = (a + b) * _randInt(4, 8);
    var aItems = a * totalItems / (a + b);
    var bItems = b * totalItems / (a + b);
    var transfer = _randInt(1, Math.min(aItems, bItems) - 1);
    var newA = aItems - transfer, newB = bItems + transfer;
    var newG = _gcd(newA, newB);
    var newRatio = (newA/newG) + ':' + (newB/newG);
    var opts = [newRatio, a + ':' + b, (aItems - transfer) + ':' + (bItems - transfer), newA + ':' + newB];
    if (newG === 1) opts[3] = (newA + 1) + ':' + newB;
    return { q: 'Apples and oranges are in ratio ' + a + ':' + b + ' (total ' + totalItems + '). If ' + transfer + ' apples are replaced with oranges, what is the new simplified ratio?', opts: opts, c: 0,
             e: 'Apples: ' + aItems + '−' + transfer + '=' + newA + '. Oranges: ' + bItems + '+' + transfer + '=' + newB + '. Ratio: ' + newRatio + '.' };
  }}
];

// ── mi-09-3: Unit Rates & Speed ──────────────────────────────────────────
TEST_GENERATORS["mi-09-3"] = [
  { depth: 'medium', gen: function() {
    var items = _randInt(3, 8);
    var cost = items * _randInt(2, 10);
    var unitCost = cost / items;
    var opts = _buildOpts('£' + unitCost, ['£' + cost, '£' + (unitCost + 1), '£' + (cost - items)]);
    return { q: items + ' items cost £' + cost + '. What is the cost per item?', opts: opts, c: 0,
             e: '£' + cost + ' ÷ ' + items + ' = £' + unitCost + ' per item.' };
  }},
  { depth: 'medium', gen: function() {
    var dist = _randInt(2, 8) * 10;
    var time = _randInt(2, 5);
    var speed = dist / time;
    var opts = _buildOpts(speed + ' km/h', [(dist * time) + ' km/h', (speed + 10) + ' km/h', dist + ' km/h']);
    return { q: 'A car travels ' + dist + ' km in ' + time + ' hours. What is its average speed?', opts: opts, c: 0,
             e: 'Speed = distance ÷ time = ' + dist + ' ÷ ' + time + ' = ' + speed + ' km/h.' };
  }},
  { depth: 'medium', gen: function() {
    var speed = _randInt(3, 12) * 10;
    var time = _randInt(2, 5);
    var dist = speed * time;
    var opts = _buildOpts(dist + ' km', [(speed + time) + ' km', (speed / time) + ' km', (dist + speed) + ' km']);
    return { q: 'A train travels at ' + speed + ' km/h for ' + time + ' hours. How far does it go?', opts: opts, c: 0,
             e: 'Distance = speed × time = ' + speed + ' × ' + time + ' = ' + dist + ' km.' };
  }},
  { depth: 'medium', gen: function() {
    var rateA = _randInt(2, 8);
    var qtyA = _randInt(3, 6);
    var costA = rateA * qtyA;
    var rateB = rateA + _randInt(1, 3);
    var qtyB = _randInt(3, 6);
    var costB = rateB * qtyB;
    var cheaperLabel = rateA < rateB ? 'Shop A' : 'Shop B';
    var opts = [cheaperLabel + ' (£' + Math.min(rateA, rateB) + '/item)', (cheaperLabel === 'Shop A' ? 'Shop B' : 'Shop A') + ' (£' + Math.max(rateA, rateB) + '/item)', 'Same price', 'Cannot tell'];
    return { q: 'Shop A: ' + qtyA + ' for £' + costA + '. Shop B: ' + qtyB + ' for £' + costB + '. Which is better value?', opts: opts, c: 0,
             e: 'Shop A: £' + costA + '÷' + qtyA + '=£' + rateA + '/item. Shop B: £' + costB + '÷' + qtyB + '=£' + rateB + '/item. ' + cheaperLabel + ' is cheaper.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var speed = _randInt(4, 12) * 10;
    var dist = speed * _randInt(2, 5);
    var time = dist / speed;
    var mins = time * 60;
    var opts = _buildOpts(time + ' hours', [(dist / (speed * 2)) + ' hours', (time + 1) + ' hours', mins + ' hours']);
    return { q: 'How long does it take to travel ' + dist + ' km at ' + speed + ' km/h?', opts: opts, c: 0,
             e: 'Time = distance ÷ speed = ' + dist + ' ÷ ' + speed + ' = ' + time + ' hours.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var speed1 = _randInt(4, 8) * 10;
    var time1 = _randInt(1, 3);
    var speed2 = _randInt(3, 6) * 10;
    var time2 = _randInt(1, 3);
    var totalDist = speed1 * time1 + speed2 * time2;
    var totalTime = time1 + time2;
    var avgSpeed = totalDist / totalTime;
    var opts = _buildOpts(avgSpeed + ' km/h', [(speed1 + speed2) / 2 + ' km/h', totalDist + ' km/h', (avgSpeed + 5) + ' km/h']);
    return { q: 'A cyclist rides at ' + speed1 + ' km/h for ' + time1 + 'h, then ' + speed2 + ' km/h for ' + time2 + 'h. What is the average speed for the whole journey?', opts: opts, c: 0,
             e: 'Total distance = ' + (speed1*time1) + '+' + (speed2*time2) + '=' + totalDist + ' km. Total time = ' + totalTime + 'h. Average = ' + avgSpeed + ' km/h.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var litres = _randInt(3, 8);
    var dist = litres * _randInt(8, 15);
    var rate = dist / litres;
    var newDist = _randInt(100, 300);
    var needed = Math.ceil(newDist / rate * 10) / 10;
    var opts = _buildOpts(parseFloat(needed.toFixed(1)) + ' litres', [(newDist / litres).toFixed(1) + ' litres', (needed + 1) + ' litres', litres + ' litres']);
    return { q: 'A car uses ' + litres + ' litres to travel ' + dist + ' km. How many litres to travel ' + newDist + ' km?', opts: opts, c: 0,
             e: 'Rate = ' + dist + '÷' + litres + '=' + rate + ' km/litre. Litres needed = ' + newDist + '÷' + rate + ' = ' + needed.toFixed(1) + '.' };
  }}
];

// ── mi-09-4: Solve Proportions & Scale Drawings ──────────────────────────
TEST_GENERATORS["mi-09-4"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 8), b = _randInt(2, 8);
    var mult = _randInt(2, 6);
    var c = a * mult;
    var d = b * mult;
    var opts = _buildOpts(d, [b * a, c + b, d + 1]);
    return { q: 'Solve: ' + a + '/' + b + ' = ' + c + '/x. Find x.', opts: opts, c: 0,
             e: a + ' was multiplied by ' + mult + ' to get ' + c + '. So x = ' + b + ' × ' + mult + ' = ' + d + '.' };
  }},
  { depth: 'medium', gen: function() {
    var scale = _pickFrom([100, 200, 500, 1000]);
    var mapCm = _randInt(3, 12);
    var realM = mapCm * scale / 100;
    var opts = _buildOpts(realM + ' m', [(mapCm * scale) + ' m', mapCm + ' m', (realM * 10) + ' m']);
    return { q: 'A map scale is 1:' + scale + '. A distance on the map is ' + mapCm + ' cm. What is the real distance?', opts: opts, c: 0,
             e: mapCm + ' cm × ' + scale + ' = ' + (mapCm * scale) + ' cm = ' + realM + ' m.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(3, 9);
    var mult = _randInt(2, 5);
    var bigA = a * mult, x = b * mult;
    var opts = _buildOpts(x, [a * b, bigA + b, x + a]);
    return { q: 'If ' + a + ' pencils cost ' + b + 'p, how much do ' + bigA + ' pencils cost?', opts: opts, c: 0,
             e: bigA + ' is ' + mult + '× more pencils. Cost = ' + b + ' × ' + mult + ' = ' + x + 'p.' };
  }},
  { depth: 'medium', gen: function() {
    var ratio = _randInt(2, 5);
    var modelCm = _randInt(5, 20);
    var realCm = modelCm * ratio;
    var realM = realCm / 100;
    var opts = _buildOpts(realCm + ' cm', [modelCm + ' cm', (realCm * ratio) + ' cm', (modelCm + ratio) + ' cm']);
    return { q: 'A model uses scale 1:' + ratio + '. The model is ' + modelCm + ' cm tall. How tall is the real object?', opts: opts, c: 0,
             e: 'Real = model × scale factor. ' + modelCm + ' × ' + ratio + ' = ' + realCm + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var scale = _pickFrom([2000, 5000, 10000, 25000]);
    var realKm = _randInt(2, 10);
    var realCm = realKm * 100000;
    var mapCm = realCm / scale;
    var opts = _buildOpts(mapCm + ' cm', [(realKm * 100) + ' cm', mapCm * 10 + ' cm', (mapCm + 1) + ' cm']);
    return { q: 'On a 1:' + _commas(scale) + ' map, how many cm represent ' + realKm + ' km?', opts: opts, c: 0,
             e: realKm + ' km = ' + _commas(realCm) + ' cm. ÷ ' + _commas(scale) + ' = ' + mapCm + ' cm on map.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var cups = _randInt(2, 4);
    var serves = _randInt(4, 6);
    var needed = _randInt(8, 16);
    var mult = needed / serves;
    var ansCups = cups * mult;
    var opts = _buildOpts(ansCups, [cups * needed, cups + needed, ansCups + cups]);
    return { q: 'A recipe uses ' + cups + ' cups of flour for ' + serves + ' people. How many cups for ' + needed + ' people?', opts: opts, c: 0,
             e: 'Scale factor = ' + needed + '÷' + serves + ' = ' + mult + '. Flour = ' + cups + ' × ' + mult + ' = ' + ansCups + ' cups.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var scaleA = _randInt(2, 5), scaleB = _randInt(2, 5);
    while (scaleB === scaleA) scaleB = _randInt(2, 5);
    var modelA = _randInt(5, 15);
    var real = modelA * scaleA;
    var modelB = real / scaleB;
    var opts = _buildOpts(modelB + ' cm', [modelA + ' cm', real + ' cm', (modelB + scaleB) + ' cm']);
    return { q: 'Model A (scale 1:' + scaleA + ') shows a wall as ' + modelA + ' cm. What would it be on Model B (scale 1:' + scaleB + ')?', opts: opts, c: 0,
             e: 'Real wall = ' + modelA + ' × ' + scaleA + ' = ' + real + ' cm. Model B = ' + real + ' ÷ ' + scaleB + ' = ' + modelB + ' cm.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// PERCENTAGES (mt-10) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-10-1: Convert Between %, Fractions & Decimals ─────────────────────
TEST_GENERATORS["mi-10-1"] = [
  { depth: 'medium', gen: function() {
    var pcts = [10,20,25,30,40,50,60,75,80,90];
    var p = _pickFrom(pcts);
    var dec = (p / 100).toFixed(2);
    var opts = [dec, (p / 10).toFixed(1), (p / 1000).toFixed(3), p + ''];
    return { q: 'Convert ' + p + '% to a decimal.', opts: opts, c: 0,
             e: p + '% ÷ 100 = ' + dec + '.' };
  }},
  { depth: 'medium', gen: function() {
    var fracs = [[1,4,'25%'],[1,5,'20%'],[3,4,'75%'],[2,5,'40%'],[1,2,'50%'],[3,10,'30%'],[7,10,'70%']];
    var pick = _pickFrom(fracs);
    var opts = [pick[2], (pick[0] * 10) + '%', (pick[1] * 10) + '%', (pick[0] + pick[1]) + '%'];
    return { q: 'Convert ' + pick[0] + '/' + pick[1] + ' to a percentage.', opts: opts, c: 0,
             e: pick[0] + '/' + pick[1] + ' = ' + pick[0] + ' ÷ ' + pick[1] + ' = ' + (pick[0]/pick[1]) + ' = ' + pick[2] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var dec = (_randInt(1, 95)) / 100;
    var pct = Math.round(dec * 100);
    var opts = [pct + '%', (pct / 10) + '%', (pct * 10) + '%', (dec) + '%'];
    return { q: 'Convert ' + dec.toFixed(2) + ' to a percentage.', opts: opts, c: 0,
             e: dec.toFixed(2) + ' × 100 = ' + pct + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var pcts = [[25,1,4],[50,1,2],[75,3,4],[20,1,5],[40,2,5],[60,3,5],[10,1,10]];
    var pick = _pickFrom(pcts);
    var ans = pick[1] + '/' + pick[2];
    var opts = [ans, pick[1] + '/' + (pick[2] * 2), (pick[1] + 1) + '/' + pick[2], pick[2] + '/' + pick[1]];
    return { q: 'Convert ' + pick[0] + '% to a fraction in simplest form.', opts: opts, c: 0,
             e: pick[0] + '% = ' + pick[0] + '/100 = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var vals = [[0.125,'12.5%','1/8'],[0.375,'37.5%','3/8'],[0.625,'62.5%','5/8'],[0.875,'87.5%','7/8'],[0.333,'33.3%','1/3'],[0.667,'66.7%','2/3']];
    var pick = _pickFrom(vals);
    var opts = [pick[1], (parseFloat(pick[0]) * 10).toFixed(1) + '%', pick[2], (parseFloat(pick[0]) * 1000) + '%'];
    return { q: 'Convert ' + pick[0] + ' to a percentage (to 1 d.p. if needed).', opts: opts, c: 0,
             e: pick[0] + ' × 100 = ' + pick[1] + '. As a fraction: ' + pick[2] + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var items = [[0.3,'30%','3/10'],[0.45,'45%','9/20'],[0.08,'8%','2/25'],[0.72,'72%','18/25'],[0.15,'15%','3/20']];
    var pick = _pickFrom(items);
    var opts = [pick[2], pick[0] + '/1', (parseFloat(pick[0]) * 100) + '/100', pick[1]];
    return { q: 'Write ' + pick[1] + ' as a fraction in simplest form.', opts: opts, c: 0,
             e: pick[1] + ' = ' + (parseFloat(pick[1]) ) + '/100. Simplify: ' + pick[2] + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a_pct = _randInt(20, 80);
    var b_dec = (_randInt(10, 90) / 100);
    var c_n = _randInt(1, 7), c_d = _randInt(c_n + 1, 10);
    var vals = [a_pct / 100, b_dec, c_n / c_d];
    var sorted = vals.slice().sort(function(a, b) { return a - b; });
    var labels = [a_pct + '%', b_dec.toFixed(2), c_n + '/' + c_d];
    var sortedLabels = sorted.map(function(v) { return labels[vals.indexOf(v)]; });
    var opts = [sortedLabels.join(' < '), sortedLabels.reverse().join(' < '), labels.join(' < '), [labels[1], labels[0], labels[2]].join(' < ')];
    return { q: 'Order from smallest to largest: ' + labels.join(', '), opts: opts, c: 0,
             e: 'Convert all to decimals to compare. Order: ' + sortedLabels.join(' < ') + '.' };
  }}
];

// ── mi-10-2: Percentages of Amounts ──────────────────────────────────────
TEST_GENERATORS["mi-10-2"] = [
  { depth: 'medium', gen: function() {
    var pct = _pickFrom([10, 20, 25, 50, 75]);
    var amount = _randInt(4, 20) * (100 / pct);
    var ans = amount * pct / 100;
    var opts = _buildOpts(ans, [amount - ans, ans * 2, amount / pct]);
    return { q: 'Find ' + pct + '% of ' + amount + '.', opts: opts, c: 0,
             e: pct + '% of ' + amount + ' = ' + amount + ' × ' + (pct/100) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pct = _randInt(5, 40) * 5;
    var amount = _randInt(50, 200);
    var ans = amount * pct / 100;
    var opts = _buildOpts(ans, [amount - ans, amount + ans, ans + pct]);
    return { q: 'What is ' + pct + '% of £' + amount + '?', opts: ['£' + ans, '£' + (amount - ans), '£' + (ans + 10), '£' + (pct)], c: 0,
             e: amount + ' × ' + (pct/100) + ' = £' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pct = _pickFrom([10, 15, 20, 25, 30]);
    var amount = _randInt(100, 500);
    while (amount * pct % 100 !== 0) amount++;
    var ans = amount * pct / 100;
    var opts = _buildOpts('£' + ans, ['£' + (amount - ans), '£' + (ans + 5), '£' + amount]);
    return { q: 'A £' + amount + ' coat has ' + pct + '% off. How much is the discount?', opts: opts, c: 0,
             e: pct + '% of £' + amount + ' = £' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var amount = _randInt(20, 80) * 10;
    var ten_pct = amount / 10;
    var five_pct = ten_pct / 2;
    var pct = _pickFrom([15, 35, 45]);
    var ans = amount * pct / 100;
    var opts = _buildOpts(ans, [ans + ten_pct, amount - ans, ten_pct * pct]);
    return { q: 'Find ' + pct + '% of ' + amount + '. (Hint: build from 10% and 5%)', opts: opts, c: 0,
             e: '10% = ' + ten_pct + ', 5% = ' + five_pct + '. ' + pct + '% = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pct = _pickFrom([15, 20, 25, 30]);
    var original = _randInt(100, 400);
    while (original * pct % 100 !== 0) original++;
    var discount = original * pct / 100;
    var salePrice = original - discount;
    var opts = _buildOpts('£' + salePrice, ['£' + discount, '£' + original, '£' + (salePrice + 10)]);
    return { q: 'A TV costs £' + original + '. It has ' + pct + '% off in a sale. What is the sale price?', opts: opts, c: 0,
             e: 'Discount = £' + discount + '. Sale price = £' + original + ' − £' + discount + ' = £' + salePrice + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var score = _randInt(30, 45);
    var total = 50;
    var pct = (score / total) * 100;
    var opts = _buildOpts(pct + '%', [(score + total) + '%', (100 - pct) + '%', score + '%']);
    return { q: 'A student scores ' + score + ' out of ' + total + '. What percentage is this?', opts: opts, c: 0,
             e: score + ' ÷ ' + total + ' × 100 = ' + pct + '%.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var price = _randInt(100, 300);
    while (price % 10 !== 0) price++;
    var vat = price * 20 / 100;
    var total = price + vat;
    var opts = _buildOpts('£' + total, ['£' + vat, '£' + price, '£' + (total + 10)]);
    return { q: 'A laptop costs £' + price + ' before VAT (20%). What is the total price including VAT?', opts: opts, c: 0,
             e: 'VAT = 20% of £' + price + ' = £' + vat + '. Total = £' + price + ' + £' + vat + ' = £' + total + '.' };
  }}
];

// ── mi-10-3: Find What % One Number Is of Another ────────────────────────
TEST_GENERATORS["mi-10-3"] = [
  { depth: 'medium', gen: function() {
    var total = _pickFrom([20, 25, 40, 50, 100, 200]);
    var part = _randInt(1, total - 1);
    while ((part / total * 100) % 1 !== 0) part = _randInt(1, total - 1);
    var pct = part / total * 100;
    var opts = _buildOpts(pct + '%', [(100 - pct) + '%', (part + total) + '%', (total / part) + '%']);
    return { q: 'What percentage is ' + part + ' of ' + total + '?', opts: opts, c: 0,
             e: part + ' ÷ ' + total + ' × 100 = ' + pct + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _randInt(20, 50);
    var part = _randInt(5, total - 5);
    var pct = Math.round(part / total * 100);
    var opts = _buildOpts(pct + '%', [(100 - pct) + '%', part + '%', (pct + 5) + '%']);
    return { q: 'In a class of ' + total + ', ' + part + ' got full marks. What percentage is this (to nearest %)?', opts: opts, c: 0,
             e: part + ' ÷ ' + total + ' × 100 ≈ ' + pct + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var was = _randInt(40, 100);
    var now = was + _randInt(5, 30);
    var increase = now - was;
    var pct = Math.round(increase / was * 100);
    var opts = _buildOpts(pct + '%', [(increase) + '%', Math.round(increase / now * 100) + '%', (100 - pct) + '%']);
    return { q: 'A price rose from £' + was + ' to £' + now + '. What is the percentage increase?', opts: opts, c: 0,
             e: 'Increase = £' + increase + '. % increase = ' + increase + '÷' + was + '×100 = ' + pct + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var was = _randInt(50, 150);
    var now = was - _randInt(5, 25);
    var decrease = was - now;
    var pct = Math.round(decrease / was * 100);
    var opts = _buildOpts(pct + '%', [(100 - pct) + '%', Math.round(decrease / now * 100) + '%', decrease + '%']);
    return { q: 'A value decreased from ' + was + ' to ' + now + '. What is the percentage decrease?', opts: opts, c: 0,
             e: 'Decrease = ' + decrease + '. % = ' + decrease + '÷' + was + '×100 = ' + pct + '%.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var original = _randInt(50, 200);
    var pctIncrease = _pickFrom([10, 20, 25, 50]);
    var newVal = original * (100 + pctIncrease) / 100;
    var opts = _buildOpts(original, [newVal, newVal - pctIncrease, original + pctIncrease]);
    return { q: 'After a ' + pctIncrease + '% increase, a value is now ' + newVal + '. What was the original value?', opts: opts, c: 0,
             e: newVal + ' = ' + (100 + pctIncrease) + '% of original. Original = ' + newVal + ' ÷ ' + ((100 + pctIncrease)/100) + ' = ' + original + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var original = _randInt(80, 200);
    var pctDecrease = _pickFrom([10, 20, 25, 40]);
    var newVal = original * (100 - pctDecrease) / 100;
    var opts = _buildOpts(original, [newVal + pctDecrease, newVal * 2, original + pctDecrease]);
    return { q: 'After a ' + pctDecrease + '% decrease, a value is ' + newVal + '. What was the original?', opts: opts, c: 0,
             e: newVal + ' = ' + (100 - pctDecrease) + '% of original. Original = ' + newVal + ' ÷ ' + ((100 - pctDecrease)/100) + ' = ' + original + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var boys = _randInt(12, 25);
    var girls = _randInt(12, 25);
    var total = boys + girls;
    var boysPct = Math.round(boys / total * 100);
    var girlsPct = 100 - boysPct;
    var opts = _buildOpts(boysPct + '% boys, ' + girlsPct + '% girls', [girlsPct + '% boys, ' + boysPct + '% girls', '50% each', boys + '% boys']);
    return { q: 'A group has ' + boys + ' boys and ' + girls + ' girls. What percentage of the group is boys, and what percentage is girls?', opts: opts, c: 0,
             e: 'Boys: ' + boys + '÷' + total + '×100 = ' + boysPct + '%. Girls: ' + girlsPct + '%.' };
  }}
];

// ── mi-10-4: Percentage Problems ─────────────────────────────────────────
TEST_GENERATORS["mi-10-4"] = [
  { depth: 'medium', gen: function() {
    var original = _randInt(50, 200);
    while (original % 10 !== 0) original++;
    var pct = _pickFrom([10, 15, 20, 25]);
    var increase = original * pct / 100;
    var ans = original + increase;
    var opts = _buildOpts('£' + ans, ['£' + increase, '£' + original, '£' + (ans + 10)]);
    return { q: 'A price of £' + original + ' increases by ' + pct + '%. What is the new price?', opts: opts, c: 0,
             e: 'Increase = £' + increase + '. New price = £' + original + ' + £' + increase + ' = £' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var original = _randInt(100, 400);
    while (original % 20 !== 0) original++;
    var pct = _pickFrom([10, 15, 20, 25, 30]);
    var discount = original * pct / 100;
    var ans = original - discount;
    var opts = _buildOpts('£' + ans, ['£' + discount, '£' + original, '£' + (ans - 10)]);
    return { q: 'A £' + original + ' item has ' + pct + '% discount. What do you pay?', opts: opts, c: 0,
             e: 'Discount = £' + discount + '. Pay = £' + original + ' − £' + discount + ' = £' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var meal = _randInt(30, 80);
    var tipPct = _pickFrom([10, 12, 15, 20]);
    var tip = meal * tipPct / 100;
    var total = meal + tip;
    var opts = _buildOpts('£' + total.toFixed(2), ['£' + tip.toFixed(2), '£' + meal, '£' + (total + 5).toFixed(2)]);
    return { q: 'A meal costs £' + meal + '. You add a ' + tipPct + '% tip. What is the total?', opts: opts, c: 0,
             e: 'Tip = £' + tip.toFixed(2) + '. Total = £' + meal + ' + £' + tip.toFixed(2) + ' = £' + total.toFixed(2) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pop = _randInt(500, 2000);
    var pct = _pickFrom([5, 10, 15, 20]);
    var increase = pop * pct / 100;
    var newPop = pop + increase;
    var opts = _buildOpts(_commas(newPop), [_commas(pop + pct), _commas(increase), _commas(newPop + 100)]);
    return { q: 'A town has ' + _commas(pop) + ' people. The population grows by ' + pct + '%. What is the new population?', opts: opts, c: 0,
             e: 'Growth = ' + increase + '. New = ' + _commas(pop) + ' + ' + increase + ' = ' + _commas(newPop) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var original = _randInt(100, 300);
    while (original % 10 !== 0) original++;
    var pct1 = 10, pct2 = 10;
    var after1 = original * 1.1;
    var after2 = after1 * 1.1;
    var opts = _buildOpts('£' + after2, ['£' + (original * 1.2), '£' + after1, '£' + (after2 + 10)]);
    return { q: 'A £' + original + ' item increases by 10%, then increases by 10% again. What is the final price?', opts: opts, c: 0,
             e: 'After first: £' + after1 + '. After second: £' + after1 + ' × 1.1 = £' + after2 + '. Note: not the same as +20%!' };
  }},
  { depth: 'greater-depth', gen: function() {
    var original = _randInt(100, 250);
    while (original % 10 !== 0) original++;
    var upPct = _pickFrom([20, 25, 50]);
    var downPct = upPct;
    var after_up = original * (100 + upPct) / 100;
    var final_val = after_up * (100 - downPct) / 100;
    var opts = _buildOpts('£' + final_val, ['£' + original, '£' + after_up, '£' + (original - 10)]);
    return { q: 'A price of £' + original + ' increases by ' + upPct + '%, then decreases by ' + downPct + '%. What is the final price?', opts: opts, c: 0,
             e: 'After +' + upPct + '%: £' + after_up + '. After −' + downPct + '%: £' + final_val + '. Not back to original because base changed!' };
  }},
  { depth: 'greater-depth', gen: function() {
    var cost = _randInt(80, 200);
    while (cost % 5 !== 0) cost++;
    var vatPct = 20;
    var vat = cost * vatPct / 100;
    var withVat = cost + vat;
    var discountPct = _pickFrom([10, 15, 20]);
    var discount = withVat * discountPct / 100;
    var finalPrice = withVat - discount;
    var opts = _buildOpts('£' + finalPrice.toFixed(2), ['£' + (cost - discount).toFixed(2), '£' + withVat, '£' + (finalPrice + 5).toFixed(2)]);
    return { q: 'An item costs £' + cost + ' + 20% VAT. A member gets ' + discountPct + '% off the total. What do they pay?', opts: opts, c: 0,
             e: 'With VAT: £' + withVat + '. Discount: £' + discount.toFixed(2) + '. Final: £' + finalPrice.toFixed(2) + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// ALGEBRA: EXPRESSIONS (mt-11) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-11-1: Write & Evaluate Expressions ────────────────────────────────
TEST_GENERATORS["mi-11-1"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9);
    var x = _randInt(1, 8);
    var b = _randInt(1, 10);
    var ans = a * x + b;
    var opts = _buildOpts(ans, [a + x + b, a * x * b, a * (x + b)]);
    return { q: 'If x = ' + x + ', evaluate ' + a + 'x + ' + b + '.', opts: opts, c: 0,
             e: a + '(' + x + ') + ' + b + ' = ' + (a*x) + ' + ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 6);
    var ans = x * x;
    var opts = _buildOpts(ans, [x * 2, x + x, ans + x]);
    return { q: 'Evaluate x² when x = ' + x + '.', opts: opts, c: 0,
             e: x + '² = ' + x + ' × ' + x + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 8);
    var x = _randInt(2, 7);
    var ans = a * x - b;
    var expr = a + 'x − ' + b;
    var opts = _buildOpts(ans, [a * x + b, ans + 1, a + x - b]);
    return { q: 'Find the value of ' + expr + ' when x = ' + x + '.', opts: opts, c: 0,
             e: a + '(' + x + ') − ' + b + ' = ' + (a*x) + ' − ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 8);
    var descriptions = [
      { text: 'three more than n', expr: 'n + 3', val: n + 3 },
      { text: 'double n', expr: '2n', val: 2 * n },
      { text: 'five less than n', expr: 'n − 5', val: n - 5 },
      { text: 'n squared', expr: 'n²', val: n * n }
    ];
    var pick = _pickFrom(descriptions);
    var opts = [pick.expr, descriptions[(descriptions.indexOf(pick) + 1) % 4].expr, descriptions[(descriptions.indexOf(pick) + 2) % 4].expr, 'n + n'];
    return { q: 'Write "' + pick.text + '" as an algebraic expression.', opts: opts, c: 0,
             e: '"' + pick.text + '" = ' + pick.expr + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 6);
    var x = _randInt(2, 5), y = _randInt(1, 5);
    var ans = a * x + b * y;
    var opts = _buildOpts(ans, [a * x * b * y, (a + b) * (x + y), a * y + b * x]);
    return { q: 'Evaluate ' + a + 'x + ' + b + 'y when x = ' + x + ' and y = ' + y + '.', opts: opts, c: 0,
             e: a + '(' + x + ') + ' + b + '(' + y + ') = ' + (a*x) + ' + ' + (b*y) + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(2, 6);
    var a = _randInt(2, 4);
    var b = _randInt(1, 5);
    var ans = a * x * x + b;
    var opts = _buildOpts(ans, [(a * x) * (a * x) + b, a * x + b, a * 2 * x + b]);
    return { q: 'If x = ' + x + ', find the value of ' + a + 'x² + ' + b + '.', opts: opts, c: 0,
             e: a + '(' + x + ')² + ' + b + ' = ' + a + '(' + (x*x) + ') + ' + b + ' = ' + (a*x*x) + ' + ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 5);
    var target = _randInt(15, 40);
    var x = (target - b) / a;
    while (x !== Math.floor(x) || x < 1) { target++; x = (target - b) / a; }
    var opts = _buildOpts(x, [target / a, (target - b), x + 1]);
    return { q: a + 'x + ' + b + ' = ' + target + '. What is x?', opts: opts, c: 0,
             e: a + 'x = ' + (target - b) + '. x = ' + (target - b) + ' ÷ ' + a + ' = ' + x + '.' };
  }}
];

// ── mi-11-2: Like Terms & Simplifying ────────────────────────────────────
TEST_GENERATORS["mi-11-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 8), b = _randInt(1, 7);
    var sum = a + b;
    var opts = [sum + 'x', (a * b) + 'x', sum + 'x²', a + 'x + ' + b];
    return { q: 'Simplify: ' + a + 'x + ' + b + 'x', opts: opts, c: 0,
             e: 'Collect like terms: ' + a + 'x + ' + b + 'x = (' + a + '+' + b + ')x = ' + sum + 'x.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(5, 12), b = _randInt(1, a - 1);
    var diff = a - b;
    var opts = [diff + 'y', (a + b) + 'y', diff + 'y²', a + 'y − ' + b];
    return { q: 'Simplify: ' + a + 'y − ' + b + 'y', opts: opts, c: 0,
             e: a + 'y − ' + b + 'y = (' + a + '−' + b + ')y = ' + diff + 'y.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(1, 5), c = _randInt(1, 4), d = _randInt(1, 4);
    var xCoeff = a + c, numPart = b + d;
    var opts = [xCoeff + 'x + ' + numPart, (a + b + c + d) + 'x', xCoeff + 'x + ' + b, (a * c) + 'x + ' + (b * d)];
    return { q: 'Simplify: ' + a + 'x + ' + b + ' + ' + c + 'x + ' + d, opts: opts, c: 0,
             e: 'Collect x terms: ' + xCoeff + 'x. Collect numbers: ' + numPart + '. Answer: ' + xCoeff + 'x + ' + numPart + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(3, 8), b = _randInt(2, 5), c = _randInt(1, 4);
    var xCoeff = a - c, constPart = b;
    var opts = [xCoeff + 'x + ' + constPart, (a + c) + 'x + ' + b, xCoeff + 'x − ' + b, a + 'x + ' + (b - c)];
    return { q: 'Simplify: ' + a + 'x + ' + b + ' − ' + c + 'x', opts: opts, c: 0,
             e: 'x terms: ' + a + 'x − ' + c + 'x = ' + xCoeff + 'x. Constants stay: + ' + constPart + '. Answer: ' + xCoeff + 'x + ' + constPart + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 4), c = _randInt(1, 3), d = _randInt(2, 6);
    var x2 = a + c, x1 = b + d;
    var opts = [x2 + 'x² + ' + x1 + 'x', (x2 + x1) + 'x²', x2 + 'x² + ' + x1, (a * c) + 'x² + ' + (b * d) + 'x'];
    return { q: 'Simplify: ' + a + 'x² + ' + b + 'x + ' + c + 'x² + ' + d + 'x', opts: opts, c: 0,
             e: 'x² terms: ' + x2 + 'x². x terms: ' + x1 + 'x. Answer: ' + x2 + 'x² + ' + x1 + 'x.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(3, 7), b = _randInt(2, 5), c = _randInt(1, 4), d = _randInt(1, 3), e = _randInt(1, 5);
    var xCoeff = a - c, yCoeff = b + d, constant = -e;
    var expr = a + 'x + ' + b + 'y − ' + c + 'x + ' + d + 'y − ' + e;
    var ans = xCoeff + 'x + ' + yCoeff + 'y − ' + e;
    var opts = [ans, (a + b - c + d - e) + 'xy', xCoeff + 'x + ' + yCoeff + 'y + ' + e, (a - c) + 'x + ' + (b - d) + 'y − ' + e];
    return { q: 'Simplify: ' + expr, opts: opts, c: 0,
             e: 'x terms: ' + xCoeff + 'x. y terms: ' + yCoeff + 'y. Constants: −' + e + '. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 6), b = _randInt(2, 6);
    var product = a * b;
    var opts = [product + 'x²', (a + b) + 'x²', product + 'x', (a + b) + 'x'];
    return { q: 'Simplify: ' + a + 'x × ' + b + 'x', opts: opts, c: 0,
             e: 'Multiply coefficients: ' + a + '×' + b + '=' + product + '. Multiply variables: x×x=x². Answer: ' + product + 'x².' };
  }}
];

// ── mi-11-3: Distributive Property ───────────────────────────────────────
TEST_GENERATORS["mi-11-3"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 8), b = _randInt(1, 9);
    var ans = a + 'x + ' + (a * b);
    var opts = [ans, a + 'x + ' + b, (a + b) + 'x', (a * b) + 'x'];
    return { q: 'Expand: ' + a + '(x + ' + b + ')', opts: opts, c: 0,
             e: a + ' × x = ' + a + 'x. ' + a + ' × ' + b + ' = ' + (a*b) + '. Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(1, 8);
    var ans = a + 'x − ' + (a * b);
    var opts = [ans, a + 'x + ' + (a * b), (a - b) + 'x', a + 'x − ' + b];
    return { q: 'Expand: ' + a + '(x − ' + b + ')', opts: opts, c: 0,
             e: a + ' × x = ' + a + 'x. ' + a + ' × (−' + b + ') = −' + (a*b) + '. Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 6), c = _randInt(1, 5);
    var xCoeff = a * b, constant = a * c;
    var ans = xCoeff + 'x + ' + constant;
    var opts = [ans, (a + b) + 'x + ' + c, a + 'x + ' + (b * c), xCoeff + 'x + ' + c];
    return { q: 'Expand: ' + a + '(' + b + 'x + ' + c + ')', opts: opts, c: 0,
             e: a + '×' + b + 'x = ' + xCoeff + 'x. ' + a + '×' + c + ' = ' + constant + '. Answer: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 6);
    var d = _randInt(2, 5), e = _randInt(1, 6);
    var xCoeff = a + d, constant = a * b + d * e;
    var ans = xCoeff + 'x + ' + constant;
    var opts = [ans, (a * d) + 'x + ' + (b + e), (a + d) + 'x + ' + (b + e), xCoeff + 'x + ' + (a * b)];
    return { q: 'Expand and simplify: ' + a + '(x + ' + b + ') + ' + d + '(x + ' + e + ')', opts: opts, c: 0,
             e: 'Expand each: ' + a + 'x + ' + (a*b) + ' + ' + d + 'x + ' + (d*e) + '. Simplify: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5), c = _randInt(1, 4);
    var d = _randInt(1, 4), e = _randInt(1, 5);
    var xCoeff = a * b - d;
    var constant = a * c - e;
    var sign1 = constant >= 0 ? ' + ' : ' − ';
    var ans = xCoeff + 'x' + sign1 + Math.abs(constant);
    var opts = [ans, (a * b + d) + 'x + ' + (a * c + e), xCoeff + 'x + ' + constant, (a * b) + 'x − ' + e];
    return { q: 'Expand and simplify: ' + a + '(' + b + 'x + ' + c + ') − ' + d + 'x − ' + e, opts: opts, c: 0,
             e: 'Expand: ' + (a*b) + 'x + ' + (a*c) + ' − ' + d + 'x − ' + e + '. Simplify: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4), b = _randInt(1, 5);
    var c = _randInt(2, 4), d = _randInt(1, 5);
    var xCoeff = a - c;
    var constant = a * b - c * d;
    var sign = constant >= 0 ? ' + ' : ' − ';
    var ans = (xCoeff === 1 ? '' : xCoeff === -1 ? '−' : xCoeff) + 'x' + sign + Math.abs(constant);
    if (xCoeff === 0) ans = constant + '';
    var opts = [ans, (a + c) + 'x + ' + (a * b + c * d), (a * c) + 'x + ' + (b - d), xCoeff + 'x + ' + (b + d)];
    return { q: 'Expand and simplify: ' + a + '(x + ' + b + ') − ' + c + '(x + ' + d + ')', opts: opts, c: 0,
             e: 'First bracket: ' + a + 'x + ' + (a*b) + '. Second: −' + c + 'x − ' + (c*d) + '. Combine: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5);
    var b = _randInt(2, 5), c = _randInt(1, 5);
    var x2Coeff = a * b, xCoeff = a * c;
    var ans = x2Coeff + 'x² + ' + xCoeff + 'x';
    var opts = [ans, (a + b) + 'x² + ' + c + 'x', x2Coeff + 'x + ' + xCoeff, a + 'x² + ' + (b * c) + 'x'];
    return { q: 'Expand: ' + a + 'x(' + b + 'x + ' + c + ')', opts: opts, c: 0,
             e: a + 'x × ' + b + 'x = ' + x2Coeff + 'x². ' + a + 'x × ' + c + ' = ' + xCoeff + 'x. Answer: ' + ans + '.' };
  }}
];

// ── mi-11-4: Factorise Linear Expressions ────────────────────────────────
TEST_GENERATORS["mi-11-4"] = [
  { depth: 'medium', gen: function() {
    var hcf = _randInt(2, 8);
    var a = _randInt(1, 6), b = _randInt(1, 6);
    var term1 = hcf * a, term2 = hcf * b;
    var ans = hcf + '(' + a + 'x + ' + b + ')';
    var opts = [ans, term1 + '(' + 'x + ' + term2 + ')', a + '(' + hcf + 'x + ' + b + ')', hcf + '(' + a + 'x + ' + term2 + ')'];
    return { q: 'Factorise: ' + term1 + 'x + ' + term2, opts: opts, c: 0,
             e: 'HCF of ' + term1 + ' and ' + term2 + ' is ' + hcf + '. Factor out: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var hcf = _randInt(2, 6);
    var a = _randInt(2, 5), b = _randInt(1, 5);
    var term1 = hcf * a, term2 = hcf * b;
    var ans = hcf + '(' + a + 'x − ' + b + ')';
    var opts = [ans, hcf + '(' + a + 'x + ' + b + ')', term1 + '(x − ' + b + ')', a + '(' + hcf + 'x − ' + term2 + ')'];
    return { q: 'Factorise: ' + term1 + 'x − ' + term2, opts: opts, c: 0,
             e: 'HCF = ' + hcf + '. ' + term1 + 'x − ' + term2 + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 7);
    var a = _randInt(1, 5);
    var term1 = x + 'x', term2 = x * a;
    var ans = x + '(x + ' + a + ')';
    var opts = [ans, 'x(' + x + 'x + ' + a + ')', x + '(x + ' + (x*a) + ')', (x*a) + '(x + 1)'];
    return { q: 'Factorise: ' + x + 'x² + ' + term2 + 'x', opts: opts, c: 0,
             e: 'HCF = ' + x + 'x. Factor: ' + x + 'x(x + ' + a + ').' };
  }},
  { depth: 'medium', gen: function() {
    var hcf = _randInt(3, 7);
    var a = _randInt(2, 5), b = _randInt(2, 5);
    while (a === b) b = _randInt(2, 5);
    var t1 = hcf * a, t2 = hcf * b;
    var ans = hcf + '(' + a + 'a + ' + b + 'b)';
    var opts = [ans, a + '(' + hcf + 'a + ' + b + 'b)', hcf + '(' + t1 + 'a + ' + t2 + 'b)', (hcf * a) + '(a + b)'];
    return { q: 'Factorise: ' + t1 + 'a + ' + t2 + 'b', opts: opts, c: 0,
             e: 'HCF(' + t1 + ',' + t2 + ') = ' + hcf + '. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var hcf = _randInt(2, 5);
    var a = _randInt(2, 5), b = _randInt(1, 4), c = _randInt(1, 4);
    var t1 = hcf * a, t2 = hcf * b, t3 = hcf * c;
    var ans = hcf + '(' + a + 'x + ' + b + 'y + ' + c + ')';
    var opts = [ans, hcf + '(' + a + 'x + ' + b + 'y)', a + '(' + hcf + 'x + ' + t2 + 'y + ' + t3 + ')', hcf + '(' + t1 + 'x + ' + t2 + 'y + ' + t3 + ')'];
    return { q: 'Factorise fully: ' + t1 + 'x + ' + t2 + 'y + ' + t3, opts: opts, c: 0,
             e: 'HCF of ' + t1 + ', ' + t2 + ', ' + t3 + ' is ' + hcf + '. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var coeff = _randInt(2, 6);
    var inner_a = _randInt(1, 5);
    var expanded_x2 = coeff;
    var expanded_x = coeff * inner_a;
    var ans = coeff + 'x(x + ' + inner_a + ')';
    var opts = [ans, coeff + '(x² + ' + inner_a + 'x)', 'x(' + coeff + 'x + ' + expanded_x + ')', (coeff * inner_a) + 'x(x + 1)'];
    return { q: 'Factorise fully: ' + expanded_x2 + 'x² + ' + expanded_x + 'x', opts: opts, c: 0,
             e: 'HCF = ' + coeff + 'x. Factor out: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var hcf = _randInt(2, 4);
    var a = _randInt(2, 5), b = _randInt(2, 5), c = _randInt(1, 4);
    var t1 = hcf * a, t2 = hcf * b, t3 = hcf * c;
    var ans = hcf + '(' + a + 'x² − ' + b + 'x + ' + c + ')';
    var opts = [ans, hcf + '(' + a + 'x² + ' + b + 'x + ' + c + ')', a + '(' + hcf + 'x² − ' + t2 + 'x + ' + t3 + ')', hcf + 'x(' + a + 'x − ' + b + ') + ' + t3];
    return { q: 'Factorise: ' + t1 + 'x² − ' + t2 + 'x + ' + t3, opts: opts, c: 0,
             e: 'HCF(' + t1 + ',' + t2 + ',' + t3 + ') = ' + hcf + '. Answer: ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// ALGEBRA: EQUATIONS & SEQUENCES (mt-12) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-12-1: Number Sequences ────────────────────────────────────────────
TEST_GENERATORS["mi-12-1"] = [
  { depth: 'medium', gen: function() {
    var start = _randInt(2, 20);
    var d = _randInt(2, 9);
    var seq = [start, start + d, start + 2*d, start + 3*d];
    var ans = start + 4*d;
    var opts = _buildOpts(ans, [start + 5*d, ans + 1, start + 3*d + 1]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common difference = ' + d + '. Next term = ' + seq[3] + ' + ' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var start = _randInt(50, 100);
    var d = _randInt(3, 12);
    var seq = [start, start - d, start - 2*d, start - 3*d];
    var ans = start - 4*d;
    var opts = _buildOpts(ans, [start - 5*d, ans - 1, start - 3*d - 1]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common difference = −' + d + '. Next term = ' + seq[3] + ' − ' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var start = _randInt(1, 5);
    var d = _randInt(2, 7);
    var n = _randInt(8, 15);
    var ans = start + (n - 1) * d;
    var opts = _buildOpts(ans, [start + n * d, ans + d, start * n]);
    return { q: 'A sequence starts at ' + start + ' with common difference ' + d + '. What is the ' + n + 'th term?', opts: opts, c: 0,
             e: 'nth term = ' + start + ' + (' + n + '−1)×' + d + ' = ' + start + ' + ' + ((n-1)*d) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4);
    var r = _pickFrom([2, 3, 5, 10]);
    var seq = [a, a*r, a*r*r, a*r*r*r];
    var ans = a*r*r*r*r;
    var opts = _buildOpts(ans, [seq[3] + r, seq[3] * 2, ans + r]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common ratio = ' + r + '. Next term = ' + seq[3] + ' × ' + r + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 5);
    var d = _randInt(2, 8);
    var rule = d + 'n + ' + (a - d);
    if (a - d === 0) rule = d + 'n';
    if (a - d < 0) rule = d + 'n − ' + Math.abs(a - d);
    var opts = [rule, d + 'n + ' + a, a + 'n + ' + d, (d + a) + 'n'];
    return { q: 'Find the nth-term rule for: ' + a + ', ' + (a+d) + ', ' + (a+2*d) + ', ' + (a+3*d) + ', …', opts: opts, c: 0,
             e: 'Common difference = ' + d + '. nth term = ' + d + 'n + (' + a + '−' + d + ') = ' + rule + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(2, 6);
    var c = _randInt(-3, 5);
    var target = _randInt(30, 60);
    var n = (target - c) / d;
    while (n !== Math.floor(n) || n < 5) { target++; n = (target - c) / d; }
    var opts = _buildOpts(n, [n + 1, n - 1, target / d]);
    var rule = c >= 0 ? d + 'n + ' + c : d + 'n − ' + Math.abs(c);
    return { q: 'The nth term is ' + rule + '. Which term has value ' + target + '?', opts: opts, c: 0,
             e: target + ' = ' + rule + '. ' + d + 'n = ' + (target - c) + '. n = ' + n + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 3);
    var r = _pickFrom([2, 3]);
    var n = _randInt(5, 7);
    var ans = a * Math.pow(r, n - 1);
    var opts = _buildOpts(ans, [a * Math.pow(r, n), ans + r, a * r * n]);
    return { q: 'A geometric sequence starts ' + a + ', ' + (a*r) + ', ' + (a*r*r) + ', … What is the ' + n + 'th term?', opts: opts, c: 0,
             e: 'nth term = ' + a + ' × ' + r + '^(' + n + '−1) = ' + a + ' × ' + Math.pow(r, n-1) + ' = ' + ans + '.' };
  }}
];

// ── mi-12-2: Solve One-Step Equations ────────────────────────────────────
TEST_GENERATORS["mi-12-2"] = [
  { depth: 'medium', gen: function() {
    var x = _randInt(3, 20);
    var b = _randInt(2, 15);
    var sum = x + b;
    var opts = _buildOpts(x, [sum, b, x + 1]);
    return { q: 'Solve: x + ' + b + ' = ' + sum, opts: opts, c: 0,
             e: 'x = ' + sum + ' − ' + b + ' = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(5, 25);
    var b = _randInt(2, 12);
    var diff = x - b;
    var opts = _buildOpts(x, [diff, b + diff, x - 1]);
    return { q: 'Solve: x − ' + b + ' = ' + diff, opts: opts, c: 0,
             e: 'x = ' + diff + ' + ' + b + ' = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 12);
    var a = _randInt(2, 9);
    var product = a * x;
    var opts = _buildOpts(x, [product, a, x + a]);
    return { q: 'Solve: ' + a + 'x = ' + product, opts: opts, c: 0,
             e: 'x = ' + product + ' ÷ ' + a + ' = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 10);
    var d = _pickFrom([2, 3, 4, 5]);
    var quotient = x;
    var num = x * d;
    var opts = _buildOpts(num, [quotient, d, num + d]);
    return { q: 'Solve: n ÷ ' + d + ' = ' + quotient, opts: opts, c: 0,
             e: 'n = ' + quotient + ' × ' + d + ' = ' + num + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(-10, -1);
    var b = _randInt(5, 15);
    var sum = x + b;
    var opts = _buildOpts(x, [sum, -sum, x + 1]);
    return { q: 'Solve: x + ' + b + ' = ' + sum, opts: opts, c: 0,
             e: 'x = ' + sum + ' − ' + b + ' = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(-8, -1);
    var a = _randInt(2, 7);
    var product = a * x;
    var opts = _buildOpts(x, [product, -product/a, x - 1]);
    return { q: 'Solve: ' + a + 'x = ' + product, opts: opts, c: 0,
             e: 'x = ' + product + ' ÷ ' + a + ' = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(3, 15);
    var context = _pickFrom([
      { q: 'I think of a number, multiply by 4, and get ', a: 4 },
      { q: 'I think of a number, multiply by 6, and get ', a: 6 },
      { q: 'I think of a number, multiply by 3, and get ', a: 3 }
    ]);
    var result = context.a * x;
    var opts = _buildOpts(x, [result, context.a, x + context.a]);
    return { q: context.q + result + '. What is my number?', opts: opts, c: 0,
             e: 'Number × ' + context.a + ' = ' + result + '. Number = ' + result + ' ÷ ' + context.a + ' = ' + x + '.' };
  }}
];

// ── mi-12-3: Solve Two-Step Equations ────────────────────────────────────
TEST_GENERATORS["mi-12-3"] = [
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 10);
    var a = _randInt(2, 7), b = _randInt(1, 10);
    var result = a * x + b;
    var opts = _buildOpts(x, [result / a, (result - b), x + 1]);
    return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + result, opts: opts, c: 0,
             e: a + 'x = ' + (result - b) + '. x = ' + (result - b) + ' ÷ ' + a + ' = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 10);
    var a = _randInt(2, 6), b = _randInt(1, 8);
    var result = a * x - b;
    var opts = _buildOpts(x, [(result + b), result / a, x - 1]);
    return { q: 'Solve: ' + a + 'x − ' + b + ' = ' + result, opts: opts, c: 0,
             e: a + 'x = ' + (result + b) + '. x = ' + (result + b) + ' ÷ ' + a + ' = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 8);
    var d = _pickFrom([2, 3, 4, 5]);
    var b = _randInt(1, 8);
    var lhs = x * d;
    var result = x + b;
    var opts = _buildOpts(lhs, [result * d, x, lhs + d]);
    return { q: 'Solve: n ÷ ' + d + ' + ' + b + ' = ' + result + '. Find n.', opts: opts, c: 0,
             e: 'n ÷ ' + d + ' = ' + (result - b) + '. n = ' + (result - b) + ' × ' + d + ' = ' + lhs + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(3, 12);
    var a = _randInt(2, 5), b = _randInt(1, 6);
    var result = a * (x + b);
    var opts = _buildOpts(x, [result / a, result - b, x + b]);
    return { q: 'Solve: ' + a + '(x + ' + b + ') = ' + result, opts: opts, c: 0,
             e: 'x + ' + b + ' = ' + (result/a) + '. x = ' + (result/a) + ' − ' + b + ' = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(2, 8);
    var a = _randInt(2, 5), b = _randInt(1, 5);
    var c = _randInt(1, 4), d = _randInt(1, 6);
    var lhs = a * x + b;
    var rhs = c * x + d;
    while (lhs === rhs || a === c) { x++; lhs = a * x + b; rhs = c * x + d; }
    var ansX = (d - b) / (a - c);
    while (ansX !== Math.floor(ansX) || ansX < 1) { d++; rhs = c * x + d; ansX = (d - b) / (a - c); }
    var opts = _buildOpts(ansX, [ansX + 1, Math.abs(a - c), lhs]);
    return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + c + 'x + ' + d, opts: opts, c: 0,
             e: (a - c) + 'x = ' + (d - b) + '. x = ' + ansX + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(2, 8);
    var a = _randInt(2, 5), b = _randInt(1, 6), c = _randInt(1, 10);
    var result = a * (x - b) + c;
    var opts = _buildOpts(x, [(result - c) / a, result / a + b, x + 1]);
    return { q: 'Solve: ' + a + '(x − ' + b + ') + ' + c + ' = ' + result, opts: opts, c: 0,
             e: a + '(x − ' + b + ') = ' + (result - c) + '. x − ' + b + ' = ' + ((result-c)/a) + '. x = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(5, 20);
    var a = _randInt(2, 5), b = _randInt(1, 8);
    var total = a * x + b;
    var opts = _buildOpts(x, [total / a, total - b, x + a]);
    return { q: 'I think of a number, multiply by ' + a + ', add ' + b + ', and get ' + total + '. What was my number?', opts: opts, c: 0,
             e: a + 'n + ' + b + ' = ' + total + '. ' + a + 'n = ' + (total - b) + '. n = ' + x + '.' };
  }}
];

// ── mi-12-4: Inequalities ────────────────────────────────────────────────
TEST_GENERATORS["mi-12-4"] = [
  { depth: 'medium', gen: function() {
    var b = _randInt(3, 15);
    var rhs = _randInt(b + 2, 25);
    var ans = rhs - b;
    var opts = ['x < ' + ans, 'x > ' + ans, 'x < ' + rhs, 'x > ' + b];
    return { q: 'Solve: x + ' + b + ' < ' + rhs, opts: opts, c: 0,
             e: 'x < ' + rhs + ' − ' + b + '. x < ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 7);
    var rhs = a * _randInt(2, 8);
    var ans = rhs / a;
    var opts = ['x > ' + ans, 'x < ' + ans, 'x > ' + rhs, 'x > ' + a];
    return { q: 'Solve: ' + a + 'x > ' + rhs, opts: opts, c: 0,
             e: 'x > ' + rhs + ' ÷ ' + a + '. x > ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(2, 10);
    var rhs = _randInt(b + 3, 20);
    var ans = rhs + b;
    var opts = ['x ≥ ' + ans, 'x ≤ ' + ans, 'x ≥ ' + rhs, 'x ≥ ' + (ans - 1)];
    return { q: 'Solve: x − ' + b + ' ≥ ' + rhs, opts: opts, c: 0,
             e: 'x ≥ ' + rhs + ' + ' + b + '. x ≥ ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5);
    var rhs = a * _randInt(3, 9);
    var ans = rhs / a;
    var opts = ['x ≤ ' + ans, 'x ≥ ' + ans, 'x < ' + ans, 'x ≤ ' + rhs];
    return { q: 'Solve: ' + a + 'x ≤ ' + rhs, opts: opts, c: 0,
             e: 'x ≤ ' + rhs + ' ÷ ' + a + '. x ≤ ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 8);
    var rhs = a * _randInt(3, 8) + b;
    var ans = (rhs - b) / a;
    while (ans !== Math.floor(ans)) { rhs++; ans = (rhs - b) / a; }
    var opts = ['x > ' + ans, 'x < ' + ans, 'x > ' + (rhs - b), 'x > ' + rhs];
    return { q: 'Solve: ' + a + 'x + ' + b + ' > ' + rhs, opts: opts, c: 0,
             e: a + 'x > ' + (rhs - b) + '. x > ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 6);
    var rhs = a * _randInt(2, 7) - b;
    var ans = (rhs + b) / a;
    while (ans !== Math.floor(ans)) { rhs++; ans = (rhs + b) / a; }
    var opts = ['x ≤ ' + ans, 'x ≥ ' + ans, 'x < ' + ans, 'x ≤ ' + (rhs + b)];
    return { q: 'Solve: ' + a + 'x − ' + b + ' ≤ ' + rhs, opts: opts, c: 0,
             e: a + 'x ≤ ' + (rhs + b) + '. x ≤ ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var low = _randInt(1, 5);
    var high = low + _randInt(3, 8);
    var b = _randInt(1, 6);
    var ansLow = low + b;
    var ansHigh = high + b;
    var opts = [ansLow + ' ≤ x ≤ ' + ansHigh, ansLow + ' < x < ' + ansHigh, low + ' ≤ x ≤ ' + high, (ansLow - 1) + ' ≤ x ≤ ' + (ansHigh + 1)];
    return { q: 'Solve: ' + low + ' ≤ x − ' + b + ' ≤ ' + high, opts: opts, c: 0,
             e: 'Add ' + b + ' to all parts: ' + ansLow + ' ≤ x ≤ ' + ansHigh + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// STATISTICS & PROBABILITY (mt-13) — 4 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-13-1: Mean, Median, Mode & Range ──────────────────────────────────
TEST_GENERATORS["mi-13-1"] = [
  { depth: 'medium', gen: function() {
    var n = 5;
    var data = [];
    for (var i = 0; i < n; i++) data.push(_randInt(3, 20));
    var sum = data.reduce(function(a,b){return a+b;}, 0);
    while (sum % n !== 0) { data[n-1]++; sum++; }
    var mean = sum / n;
    var opts = _buildOpts(mean, [data[0], sum, Math.max.apply(null, data)]);
    return { q: 'Find the mean of: ' + data.join(', '), opts: opts, c: 0,
             e: 'Sum = ' + sum + '. Mean = ' + sum + ' ÷ ' + n + ' = ' + mean + '.' };
  }},
  { depth: 'medium', gen: function() {
    var data = [];
    for (var i = 0; i < 7; i++) data.push(_randInt(2, 25));
    data.sort(function(a,b){return a-b;});
    var median = data[3];
    var opts = _buildOpts(median, [data[0], data[6], data[2]]);
    return { q: 'Find the median of: ' + data.join(', '), opts: opts, c: 0,
             e: 'Sorted data has 7 values. Middle value (4th) = ' + median + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(3, 15);
    var mode = base + _randInt(0, 5);
    var data = [base, mode, mode, mode, base + _randInt(1, 8), base + _randInt(2, 10)];
    data.sort(function(a,b){return a-b;});
    var opts = _buildOpts(mode, [data[0], data[5], base]);
    return { q: 'Find the mode of: ' + data.join(', '), opts: opts, c: 0,
             e: mode + ' appears most often (3 times). Mode = ' + mode + '.' };
  }},
  { depth: 'medium', gen: function() {
    var data = [];
    for (var i = 0; i < 6; i++) data.push(_randInt(5, 30));
    data.sort(function(a,b){return a-b;});
    var range = data[5] - data[0];
    var opts = _buildOpts(range, [data[5], data[0], data[5] + data[0]]);
    return { q: 'Find the range of: ' + data.join(', '), opts: opts, c: 0,
             e: 'Range = ' + data[5] + ' − ' + data[0] + ' = ' + range + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = 5;
    var targetMean = _randInt(10, 20);
    var total = targetMean * n;
    var data = [];
    var runSum = 0;
    for (var i = 0; i < n - 1; i++) { var v = _randInt(5, 25); data.push(v); runSum += v; }
    var missing = total - runSum;
    while (missing < 1 || missing > 30) { data[0]++; runSum++; missing = total - runSum; }
    var opts = _buildOpts(missing, [targetMean, total, missing + 1]);
    return { q: 'The mean of 5 numbers is ' + targetMean + '. Four of them are ' + data.join(', ') + '. Find the fifth.', opts: opts, c: 0,
             e: 'Total = 5 × ' + targetMean + ' = ' + total + '. Fifth = ' + total + ' − ' + runSum + ' = ' + missing + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var data = [];
    for (var i = 0; i < 6; i++) data.push(_randInt(3, 20));
    data.sort(function(a,b){return a-b;});
    var median = (data[2] + data[3]) / 2;
    var opts = _buildOpts(median, [data[2], data[3], (data[0] + data[5]) / 2]);
    return { q: 'Find the median of: ' + data.join(', '), opts: opts, c: 0,
             e: 'Even number of values. Median = (' + data[2] + ' + ' + data[3] + ') ÷ 2 = ' + median + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var setA = [], setB = [];
    for (var i = 0; i < 5; i++) { setA.push(_randInt(5, 15)); setB.push(_randInt(8, 20)); }
    var sumA = setA.reduce(function(a,b){return a+b;}, 0);
    var sumB = setB.reduce(function(a,b){return a+b;}, 0);
    var combinedMean = (sumA + sumB) / 10;
    while (combinedMean !== Math.floor(combinedMean)) { setB[4]++; sumB++; combinedMean = (sumA + sumB) / 10; }
    var meanA = sumA / 5, meanB = sumB / 5;
    var opts = _buildOpts(combinedMean, [Math.round(meanA), Math.round(meanB), Math.round((meanA + meanB) / 2)]);
    return { q: 'Group A (5 values) has mean ' + meanA + '. Group B (5 values) has mean ' + meanB + '. What is the overall mean?', opts: opts, c: 0,
             e: 'Total = 5×' + meanA + ' + 5×' + meanB + ' = ' + (sumA + sumB) + '. Mean = ' + (sumA+sumB) + ' ÷ 10 = ' + combinedMean + '.' };
  }}
];

// ── mi-13-2: Bar Charts & Pie Charts ─────────────────────────────────────
TEST_GENERATORS["mi-13-2"] = [
  { depth: 'medium', gen: function() {
    var cats = ['Red','Blue','Green','Yellow'];
    var vals = [_randInt(5,20), _randInt(5,20), _randInt(5,20), _randInt(5,20)];
    var maxIdx = vals.indexOf(Math.max.apply(null, vals));
    var opts = [cats[maxIdx], cats[(maxIdx+1)%4], cats[(maxIdx+2)%4], cats[(maxIdx+3)%4]];
    return { q: 'A bar chart shows: Red=' + vals[0] + ', Blue=' + vals[1] + ', Green=' + vals[2] + ', Yellow=' + vals[3] + '. Which colour is most popular?', opts: opts, c: 0,
             e: cats[maxIdx] + ' has the tallest bar at ' + vals[maxIdx] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var cats = ['Mon','Tue','Wed','Thu','Fri'];
    var vals = [_randInt(3,15), _randInt(3,15), _randInt(3,15), _randInt(3,15), _randInt(3,15)];
    var total = vals.reduce(function(a,b){return a+b;}, 0);
    var opts = _buildOpts(total, [Math.max.apply(null, vals), total + 5, total - vals[0]]);
    return { q: 'A bar chart shows sales: Mon=' + vals[0] + ', Tue=' + vals[1] + ', Wed=' + vals[2] + ', Thu=' + vals[3] + ', Fri=' + vals[4] + '. What is the total?', opts: opts, c: 0,
             e: 'Total = ' + vals.join(' + ') + ' = ' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _pickFrom([20, 30, 36, 40, 60]);
    var fraction = _pickFrom([[1,4],[1,3],[1,2],[1,6]]);
    var angle = 360 * fraction[0] / fraction[1];
    var opts = _buildOpts(angle + '°', [(360 - angle) + '°', (angle/2) + '°', (angle + 90) + '°']);
    return { q: 'In a pie chart of ' + total + ' items, one category has ' + (total * fraction[0] / fraction[1]) + ' items. What angle does it represent?', opts: opts, c: 0,
             e: 'Fraction = ' + fraction[0] + '/' + fraction[1] + '. Angle = 360 × ' + fraction[0] + '/' + fraction[1] + ' = ' + angle + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _pickFrom([24, 30, 36, 60, 72]);
    var angle = _pickFrom([90, 120, 60, 45, 180]);
    var count = total * angle / 360;
    var opts = _buildOpts(count, [total - count, angle, total]);
    return { q: 'A pie chart represents ' + total + ' people. A sector has angle ' + angle + '°. How many people does it represent?', opts: opts, c: 0,
             e: count + ' = ' + total + ' × ' + angle + '/360 = ' + count + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var cats = ['A','B','C','D'];
    var vals = [_randInt(5,15), _randInt(5,15), _randInt(5,15), _randInt(5,15)];
    var total = vals.reduce(function(a,b){return a+b;}, 0);
    var angles = vals.map(function(v) { return Math.round(v / total * 360); });
    var opts = _buildOpts(angles[0] + '°', [angles[1] + '°', vals[0] + '°', (360 - angles[0]) + '°']);
    return { q: 'Data: A=' + vals[0] + ', B=' + vals[1] + ', C=' + vals[2] + ', D=' + vals[3] + '. What angle would A have in a pie chart?', opts: opts, c: 0,
             e: 'Total = ' + total + '. Angle A = ' + vals[0] + '/' + total + ' × 360 = ' + angles[0] + '°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var total = _pickFrom([36, 48, 60, 72]);
    var a1 = _pickFrom([90, 120, 60]);
    var a2 = _pickFrom([45, 60, 90]);
    while (a1 + a2 >= 360) a2 = 45;
    var remaining = 360 - a1 - a2;
    var opts = _buildOpts(remaining + '°', [a1 + '°', (a1 + a2) + '°', (360 - a1) + '°']);
    return { q: 'A pie chart has three sectors. Two have angles ' + a1 + '° and ' + a2 + '°. What is the third angle?', opts: opts, c: 0,
             e: 'Third angle = 360° − ' + a1 + '° − ' + a2 + '° = ' + remaining + '°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var cats = ['Walk','Bus','Car','Cycle'];
    var vals = [_randInt(4,12), _randInt(4,12), _randInt(4,12), _randInt(4,12)];
    var total = vals.reduce(function(a,b){return a+b;}, 0);
    var diff = Math.max.apply(null, vals) - Math.min.apply(null, vals);
    var opts = _buildOpts(diff, [Math.max.apply(null, vals), total, Math.min.apply(null, vals)]);
    return { q: 'Transport data: Walk=' + vals[0] + ', Bus=' + vals[1] + ', Car=' + vals[2] + ', Cycle=' + vals[3] + '. What is the difference between the most and least popular?', opts: opts, c: 0,
             e: 'Most = ' + Math.max.apply(null, vals) + ', Least = ' + Math.min.apply(null, vals) + '. Difference = ' + diff + '.' };
  }}
];

// ── mi-13-3: Stem-and-Leaf & Line Graphs ─────────────────────────────────
TEST_GENERATORS["mi-13-3"] = [
  { depth: 'medium', gen: function() {
    var stem = _randInt(1, 5);
    var leaves = [_randInt(0,9), _randInt(0,9), _randInt(0,9), _randInt(0,9), _randInt(0,9)].sort(function(a,b){return a-b;});
    var vals = leaves.map(function(l){return stem*10+l;});
    var median = vals[2];
    var opts = _buildOpts(median, [vals[0], vals[4], stem]);
    return { q: 'A stem-and-leaf has stem ' + stem + ' with leaves ' + leaves.join(', ') + '. What is the median?', opts: opts, c: 0,
             e: 'Values: ' + vals.join(', ') + '. Middle (3rd of 5) = ' + median + '.' };
  }},
  { depth: 'medium', gen: function() {
    var stems = [1, 2, 3];
    var counts = [_randInt(2,4), _randInt(2,5), _randInt(2,4)];
    var total = counts.reduce(function(a,b){return a+b;}, 0);
    var opts = _buildOpts(total, [counts[0] + counts[1], Math.max.apply(null, counts), 30]);
    return { q: 'A stem-and-leaf plot has ' + counts[0] + ' leaves for stem 1, ' + counts[1] + ' for stem 2, and ' + counts[2] + ' for stem 3. How many data values in total?', opts: opts, c: 0,
             e: 'Total = ' + counts.join(' + ') + ' = ' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var stem = _randInt(2, 6);
    var leaves = [_randInt(0,9), _randInt(0,9), _randInt(0,9), _randInt(0,9)].sort(function(a,b){return a-b;});
    var vals = leaves.map(function(l){return stem*10+l;});
    var range = vals[3] - vals[0];
    var opts = _buildOpts(range, [vals[3], vals[0], vals[3] + vals[0]]);
    return { q: 'Stem ' + stem + ' has leaves: ' + leaves.join(', ') + '. What is the range of these values?', opts: opts, c: 0,
             e: 'Range = ' + vals[3] + ' − ' + vals[0] + ' = ' + range + '.' };
  }},
  { depth: 'medium', gen: function() {
    var months = ['Jan','Feb','Mar','Apr','May'];
    var vals = [_randInt(10,30), _randInt(15,35), _randInt(20,40), _randInt(25,45), _randInt(30,50)];
    var increase = vals[4] - vals[0];
    var opts = _buildOpts(increase, [vals[4], vals[0], vals[4] + vals[0]]);
    return { q: 'A line graph shows: Jan=' + vals[0] + ', Feb=' + vals[1] + ', Mar=' + vals[2] + ', Apr=' + vals[3] + ', May=' + vals[4] + '. What is the overall increase from Jan to May?', opts: opts, c: 0,
             e: 'Increase = ' + vals[4] + ' − ' + vals[0] + ' = ' + increase + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var data = [];
    for (var i = 0; i < 9; i++) data.push(_randInt(15, 55));
    data.sort(function(a,b){return a-b;});
    var median = data[4];
    var range = data[8] - data[0];
    var opts = _buildOpts(median + ' and ' + range, [data[0] + ' and ' + range, median + ' and ' + data[8], range + ' and ' + median]);
    return { q: 'Data (sorted): ' + data.join(', ') + '. Find the median and range.', opts: opts, c: 0,
             e: 'Median (5th of 9) = ' + median + '. Range = ' + data[8] + ' − ' + data[0] + ' = ' + range + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var months = ['Jan','Feb','Mar','Apr','May','Jun'];
    var vals = [];
    for (var i = 0; i < 6; i++) vals.push(_randInt(10, 50));
    var maxIncrease = 0, maxPair = '';
    for (var i = 1; i < 6; i++) {
      if (vals[i] - vals[i-1] > maxIncrease) { maxIncrease = vals[i] - vals[i-1]; maxPair = months[i-1] + ' to ' + months[i]; }
    }
    var opts = [maxPair, months[0] + ' to ' + months[1], months[4] + ' to ' + months[5], months[2] + ' to ' + months[3]];
    return { q: 'Line graph data: ' + months.map(function(m,i){return m+'='+vals[i];}).join(', ') + '. Between which consecutive months is the biggest increase?', opts: opts, c: 0,
             e: 'Biggest increase is ' + maxIncrease + ' from ' + maxPair + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var data = [];
    for (var i = 0; i < 10; i++) data.push(_randInt(20, 65));
    data.sort(function(a,b){return a-b;});
    var q1 = data[2], q3 = data[7];
    var iqr = q3 - q1;
    var opts = _buildOpts(iqr, [data[9] - data[0], q3, q1]);
    return { q: 'Sorted data (10 values): ' + data.join(', ') + '. Find the interquartile range (Q3 − Q1). Q1 is 3rd value, Q3 is 8th value.', opts: opts, c: 0,
             e: 'Q1 = ' + q1 + ', Q3 = ' + q3 + '. IQR = ' + q3 + ' − ' + q1 + ' = ' + iqr + '.' };
  }}
];

// ── mi-13-4: Probability of Events ───────────────────────────────────────
TEST_GENERATORS["mi-13-4"] = [
  { depth: 'medium', gen: function() {
    var total = _pickFrom([6, 8, 10, 12]);
    var favourable = _randInt(1, total - 1);
    var g = _gcd(favourable, total);
    var ans = (favourable/g) + '/' + (total/g);
    var opts = [ans, (total - favourable)/g + '/' + (total/g), favourable + '/' + (total + 1), '1/' + total];
    return { q: 'A bag has ' + total + ' balls. ' + favourable + ' are red. What is P(red)?', opts: opts, c: 0,
             e: 'P(red) = ' + favourable + '/' + total + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var total = 6;
    var target = _randInt(1, 6);
    var count = 1;
    var opts = ['1/6', '1/3', '1/2', '2/6'];
    return { q: 'A fair die is rolled. What is the probability of getting a ' + target + '?', opts: opts, c: 0,
             e: 'P(' + target + ') = 1 outcome ÷ 6 possible = 1/6.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _pickFrom([8, 10, 12, 15, 20]);
    var favourable = _randInt(2, total - 2);
    var g = _gcd(favourable, total);
    var compF = total - favourable, compG = _gcd(compF, total);
    var ans = (compF / compG) + '/' + (total / compG);
    var opts = [ans, (favourable/g) + '/' + (total/g), '1/' + total, (total/compG) + '/' + (compF/compG)];
    return { q: 'P(event) = ' + (favourable/g) + '/' + (total/g) + '. What is P(not event)?', opts: opts, c: 0,
             e: 'P(not event) = 1 − ' + (favourable/g) + '/' + (total/g) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var evens = 3;
    var total = 6;
    var opts = ['1/2', '1/3', '3/6', '2/3'];
    return { q: 'A fair die is rolled. What is P(even number)?', opts: ['1/2', '1/3', '1/6', '2/3'], c: 0,
             e: 'Even numbers: 2, 4, 6 → 3 outcomes. P = 3/6 = 1/2.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var r = _randInt(2, 5), b = _randInt(2, 5), g = _randInt(1, 4);
    var total = r + b + g;
    var notR = b + g;
    var gcd1 = _gcd(notR, total);
    var ans = (notR/gcd1) + '/' + (total/gcd1);
    var opts = [ans, (r/_gcd(r,total)) + '/' + (total/_gcd(r,total)), notR + '/' + (total+1), '1/' + total];
    return { q: 'A bag has ' + r + ' red, ' + b + ' blue, ' + g + ' green balls. What is P(not red)?', opts: opts, c: 0,
             e: 'Not red = ' + b + ' + ' + g + ' = ' + notR + '. P = ' + notR + '/' + total + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var coins = 2;
    var outcomes = 4;
    var opts = ['1/4', '1/2', '1/3', '2/4'];
    return { q: 'Two fair coins are flipped. What is P(both heads)?', opts: opts, c: 0,
             e: 'Outcomes: HH, HT, TH, TT. P(HH) = 1/4.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var die1 = 6, die2 = 6;
    var target = _pickFrom([7, 8, 6, 9]);
    var ways;
    if (target === 7) ways = 6;
    else if (target === 6 || target === 8) ways = 5;
    else if (target === 9 || target === 5) ways = 4;
    else ways = 3;
    var gcd1 = _gcd(ways, 36);
    var ans = (ways/gcd1) + '/' + (36/gcd1);
    var opts = [ans, ways + '/12', '1/6', ways + '/36'];
    return { q: 'Two dice are rolled. What is P(total = ' + target + ')?', opts: opts, c: 0,
             e: 'There are ' + ways + ' ways to make ' + target + ' from two dice. P = ' + ways + '/36 = ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// ORDER OF OPERATIONS (mt-14) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-14-1: Order of Operations: Whole Numbers ──────────────────────────
TEST_GENERATORS["mi-14-1"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9), b = _randInt(2, 6), c = _randInt(1, 10);
    var ans = a + b * c;
    var wrong1 = (a + b) * c;
    var opts = _buildOpts(ans, [wrong1, a * b + c, a + b + c]);
    return { q: 'Evaluate: ' + a + ' + ' + b + ' × ' + c, opts: opts, c: 0,
             e: 'Multiply first: ' + b + ' × ' + c + ' = ' + (b*c) + '. Then add: ' + a + ' + ' + (b*c) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(10, 30), b = _randInt(2, 5), c = _randInt(2, 6);
    var ans = a - b * c;
    var wrong1 = (a - b) * c;
    var opts = _buildOpts(ans, [wrong1, a - b - c, a * b - c]);
    return { q: 'Evaluate: ' + a + ' − ' + b + ' × ' + c, opts: opts, c: 0,
             e: 'Multiply first: ' + b + ' × ' + c + ' = ' + (b*c) + '. Then subtract: ' + a + ' − ' + (b*c) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var inner = _randInt(2, 8);
    var b = _randInt(1, 5);
    var bracket = inner + b;
    var mult = _randInt(2, 6);
    var ans = bracket * mult;
    var wrong1 = inner + b * mult;
    var opts = _buildOpts(ans, [wrong1, inner * mult + b, bracket + mult]);
    return { q: 'Evaluate: (' + inner + ' + ' + b + ') × ' + mult, opts: opts, c: 0,
             e: 'Brackets first: ' + inner + ' + ' + b + ' = ' + bracket + '. Then: ' + bracket + ' × ' + mult + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 5), c = _randInt(2, 5), d = _randInt(1, 5);
    var ans = a * b + c * d;
    var opts = _buildOpts(ans, [a * (b + c) * d, (a + b) * (c + d), a * b * c + d]);
    return { q: 'Evaluate: ' + a + ' × ' + b + ' + ' + c + ' × ' + d, opts: opts, c: 0,
             e: a + '×' + b + ' = ' + (a*b) + '. ' + c + '×' + d + ' = ' + (c*d) + '. Sum = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 6), b = _randInt(1, 5);
    var bracket = a + b;
    var sq = bracket * bracket;
    var c = _randInt(1, 10);
    var ans = sq - c;
    var opts = _buildOpts(ans, [bracket - c, a*a + b - c, sq + c]);
    return { q: 'Evaluate: (' + a + ' + ' + b + ')² − ' + c, opts: opts, c: 0,
             e: 'Bracket: ' + bracket + '. Square: ' + bracket + '² = ' + sq + '. Then: ' + sq + ' − ' + c + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(10, 30), b = _randInt(2, 6), c = _randInt(2, 5);
    var inner = a - b;
    var ans = inner / c;
    while (ans !== Math.floor(ans)) { a++; inner = a - b; ans = inner / c; }
    var opts = _buildOpts(ans, [a / c - b, (a - b) + c, a - b / c]);
    return { q: 'Evaluate: (' + a + ' − ' + b + ') ÷ ' + c, opts: opts, c: 0,
             e: 'Bracket: ' + a + ' − ' + b + ' = ' + inner + '. Divide: ' + inner + ' ÷ ' + c + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(2, 4), c = _randInt(1, 5), d = _randInt(2, 4);
    var part1 = a * b;
    var part2 = c * d;
    var ans = part1 - part2;
    var e1 = a + '×' + b + ' = ' + part1;
    var e2 = c + '×' + d + ' = ' + part2;
    var wrong1 = (a - c) * (b - d);
    var opts = _buildOpts(ans, [wrong1, part1 + part2, a * b * c - d]);
    return { q: 'Evaluate: ' + a + ' × ' + b + ' − ' + c + ' × ' + d, opts: opts, c: 0,
             e: e1 + '. ' + e2 + '. Answer: ' + part1 + ' − ' + part2 + ' = ' + ans + '.' };
  }}
];

// ── mi-14-2: Order of Operations: Decimals & Fractions ───────────────────
TEST_GENERATORS["mi-14-2"] = [
  { depth: 'medium', gen: function() {
    var a = (_randInt(1, 9) / 10);
    var b = _randInt(2, 5);
    var c = (_randInt(1, 9) / 10);
    var ans = (a + b * c).toFixed(2);
    var wrong1 = ((a + b) * c).toFixed(2);
    var opts = [ans, wrong1, (a * b + c).toFixed(2), (a + b + c).toFixed(2)];
    return { q: 'Evaluate: ' + a.toFixed(1) + ' + ' + b + ' × ' + c.toFixed(1), opts: opts, c: 0,
             e: 'Multiply: ' + b + ' × ' + c.toFixed(1) + ' = ' + (b*c).toFixed(1) + '. Add: ' + a.toFixed(1) + ' + ' + (b*c).toFixed(1) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 8);
    var b = _pickFrom([0.5, 0.25, 0.2, 0.1]);
    var c = _randInt(1, 5);
    var ans = a * b + c;
    var opts = _buildOpts(ans, [a * (b + c), (a + c) * b, a + b + c]);
    return { q: 'Evaluate: ' + a + ' × ' + b + ' + ' + c, opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + (a*b) + '. Then + ' + c + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(1, 5), d1 = _pickFrom([2, 3, 4, 6]);
    var whole = _randInt(2, 6);
    var ans_n = n1 * whole, ans_d = d1;
    var g = _gcd(ans_n, ans_d);
    var ans = (ans_n/g) + '/' + (ans_d/g);
    var opts = [ans, n1 + '/' + (d1 * whole), (n1 + whole) + '/' + d1, whole + '/' + d1];
    return { q: 'Evaluate: ' + n1 + '/' + d1 + ' × ' + whole, opts: opts, c: 0,
             e: n1 + '/' + d1 + ' × ' + whole + ' = ' + ans_n + '/' + ans_d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(1, 3), d1 = _pickFrom([4, 5, 8]);
    var n2 = _randInt(1, 3), d2 = d1;
    var sum_n = n1 + n2;
    var mult = _randInt(2, 4);
    var ans_n = sum_n * mult, ans_d = d1;
    var g = _gcd(ans_n, ans_d);
    var ans = (ans_n/g) + '/' + (ans_d/g);
    var opts = [ans, (n1*mult + n2) + '/' + d1, (sum_n) + '/' + (d1*mult), sum_n + '/' + d1];
    return { q: 'Evaluate: (' + n1 + '/' + d1 + ' + ' + n2 + '/' + d2 + ') × ' + mult, opts: opts, c: 0,
             e: 'Bracket: ' + sum_n + '/' + d1 + '. Multiply: ' + ans_n + '/' + ans_d + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _pickFrom([1.5, 2.5, 3.5, 4.5]);
    var b = _randInt(2, 4);
    var c = _pickFrom([0.5, 1.5, 2.5]);
    var d = _randInt(2, 4);
    var ans = (a * b - c * d).toFixed(1);
    var opts = [ans, (a * b + c * d).toFixed(1), ((a - c) * (b - d)).toFixed(1), (a * (b - c) * d).toFixed(1)];
    return { q: 'Evaluate: ' + a + ' × ' + b + ' − ' + c + ' × ' + d, opts: opts, c: 0,
             e: a + '×' + b + ' = ' + (a*b) + '. ' + c + '×' + d + ' = ' + (c*d) + '. Difference = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n1 = _randInt(1, 3), d1 = _pickFrom([2, 3, 4]);
    var n2 = _randInt(1, 3), d2 = d1;
    var prod_n = n1 * n2, prod_d = d1 * d2;
    var g = _gcd(prod_n, prod_d);
    var ans = (prod_n/g) + '/' + (prod_d/g);
    var sum_n = n1 + n2;
    var wrongAns = (sum_n) + '/' + d1;
    var opts = [ans, wrongAns, n1 + '/' + (d1*d2), (n1*d2 + n2*d1) + '/' + prod_d];
    return { q: 'Evaluate: ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2, opts: opts, c: 0,
             e: 'Multiply numerators: ' + n1 + '×' + n2 + '=' + prod_n + '. Denominators: ' + d1 + '×' + d2 + '=' + prod_d + '. Simplify: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _pickFrom([0.2, 0.4, 0.5, 0.8]);
    var sq = a * a;
    var b = _randInt(1, 5);
    var ans = (sq + b).toFixed(2);
    var opts = [ans, (a + b).toFixed(2), (a * 2 + b).toFixed(2), (sq * b).toFixed(2)];
    return { q: 'Evaluate: ' + a + '² + ' + b, opts: opts, c: 0,
             e: a + '² = ' + sq.toFixed(2) + '. Add ' + b + ': ' + ans + '.' };
  }}
];

// ── mi-14-3: Order of Operations: Integers ───────────────────────────────
TEST_GENERATORS["mi-14-3"] = [
  { depth: 'medium', gen: function() {
    var a = -_randInt(2, 8);
    var b = _randInt(2, 6);
    var c = _randInt(1, 5);
    var ans = a + b * c;
    var wrong1 = (a + b) * c;
    var opts = _buildOpts(ans, [wrong1, a * b + c, a - b * c]);
    return { q: 'Evaluate: (' + a + ') + ' + b + ' × ' + c, opts: opts, c: 0,
             e: 'Multiply: ' + b + '×' + c + ' = ' + (b*c) + '. Add: ' + a + ' + ' + (b*c) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = -_randInt(2, 6);
    var b = -_randInt(2, 6);
    var ans = a * b;
    var opts = _buildOpts(ans, [-(a*b), a + b, a - b]);
    return { q: 'Evaluate: (' + a + ') × (' + b + ')', opts: opts, c: 0,
             e: 'Negative × negative = positive. ' + a + ' × ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = -_randInt(2, 5);
    var b = _randInt(2, 5);
    var c = _randInt(3, 10);
    var ans = a * b + c;
    var opts = _buildOpts(ans, [a * (b + c), a * b - c, -(a * b) + c]);
    return { q: 'Evaluate: ' + a + ' × ' + b + ' + ' + c, opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + (a*b) + '. Then + ' + c + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 8);
    var b = _randInt(2, 5);
    var c = -_randInt(1, 6);
    var ans = a - b * c;
    var opts = _buildOpts(ans, [a + b * c, (a - b) * c, a * b - c]);
    return { q: 'Evaluate: ' + a + ' − ' + b + ' × (' + c + ')', opts: opts, c: 0,
             e: b + ' × (' + c + ') = ' + (b*c) + '. Then: ' + a + ' − (' + (b*c) + ') = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = -_randInt(2, 5);
    var b = -_randInt(1, 4);
    var bracket = a + b;
    var mult = _randInt(2, 5);
    var ans = bracket * mult;
    var opts = _buildOpts(ans, [a * mult + b, (a * b) * mult, -ans]);
    return { q: 'Evaluate: (' + a + ' + (' + b + ')) × ' + mult, opts: opts, c: 0,
             e: 'Bracket: ' + a + ' + (' + b + ') = ' + bracket + '. Then: ' + bracket + ' × ' + mult + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = -_randInt(2, 5);
    var sq = a * a;
    var b = _randInt(1, 10);
    var ans = sq + b;
    var opts = _buildOpts(ans, [-(sq) + b, sq - b, a + b]);
    return { q: 'Evaluate: (' + a + ')² + ' + b, opts: opts, c: 0,
             e: '(' + a + ')² = ' + sq + ' (negative squared is positive). ' + sq + ' + ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = -_randInt(2, 4), b = _randInt(2, 4);
    var c = -_randInt(1, 5), d = _randInt(2, 5);
    var part1 = a * b;
    var part2 = c * d;
    var ans = part1 - part2;
    var opts = _buildOpts(ans, [part1 + part2, -(part1 - part2), a * b * c - d]);
    return { q: 'Evaluate: (' + a + ') × ' + b + ' − (' + c + ') × ' + d, opts: opts, c: 0,
             e: a + '×' + b + ' = ' + part1 + '. ' + c + '×' + d + ' = ' + part2 + '. ' + part1 + ' − (' + part2 + ') = ' + ans + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// RATIONAL NUMBERS (mt-15) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-15-1: Rational Numbers on Number Lines ────────────────────────────
TEST_GENERATORS["mi-15-1"] = [
  { depth: 'medium', gen: function() {
    var n = _randInt(1, 7);
    var d = _pickFrom([2, 4, 5, 8, 10]);
    while (n >= d) n = _randInt(1, d - 1);
    var dec = (n / d).toFixed(2);
    var opts = [dec, (d / n).toFixed(2), (n + d).toFixed(2), (1 - n/d).toFixed(2)];
    return { q: 'Convert ' + n + '/' + d + ' to a decimal.', opts: opts, c: 0,
             e: n + ' ÷ ' + d + ' = ' + dec + '.' };
  }},
  { depth: 'medium', gen: function() {
    var whole = _randInt(-3, -1);
    var frac = _pickFrom(['1/4', '1/2', '3/4']);
    var dec = _pickFrom([0.25, 0.5, 0.75]);
    var idx = ['1/4','1/2','3/4'].indexOf(frac);
    dec = [0.25, 0.5, 0.75][idx];
    var val = whole - dec;
    var opts = [val.toFixed(2), (whole + dec).toFixed(2), whole + '.00', (-whole - dec).toFixed(2)];
    return { q: 'What decimal is at −' + Math.abs(whole) + ' ' + frac + ' on the number line?', opts: opts, c: 0,
             e: '−' + Math.abs(whole) + ' − ' + dec + ' = ' + val.toFixed(2) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a_n = _randInt(1, 5), a_d = _pickFrom([2, 3, 4, 5, 6]);
    while (a_n >= a_d) a_n = _randInt(1, a_d - 1);
    var b_n = _randInt(1, 5), b_d = a_d;
    while (b_n >= b_d || b_n === a_n) b_n = _randInt(1, b_d - 1);
    var aVal = a_n / a_d, bVal = b_n / b_d;
    var bigger = aVal > bVal ? a_n + '/' + a_d : b_n + '/' + b_d;
    var smaller = aVal > bVal ? b_n + '/' + b_d : a_n + '/' + a_d;
    var opts = [bigger, smaller, '1/' + a_d, a_d + '/' + a_n];
    return { q: 'Which is larger: ' + a_n + '/' + a_d + ' or ' + b_n + '/' + b_d + '?', opts: opts, c: 0,
             e: a_n + '/' + a_d + ' = ' + aVal.toFixed(3) + ', ' + b_n + '/' + b_d + ' = ' + bVal.toFixed(3) + '. ' + bigger + ' is larger.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4), d = _pickFrom([3, 4, 5, 6, 8]);
    while (a >= d) a--;
    var between = (a + 0.5) / d;
    var low = a + '/' + d;
    var high = (a + 1) + '/' + d;
    var mid_n = 2 * a + 1, mid_d = 2 * d;
    var g = _gcd(mid_n, mid_d);
    var ans = mid_n + '/' + mid_d;
    var opts = [ans, (a + 1) + '/' + (d + 1), low, high];
    return { q: 'Name a fraction between ' + low + ' and ' + high + '.', opts: opts, c: 0,
             e: 'Midpoint = ' + mid_n + '/' + mid_d + ' which is between ' + low + ' and ' + high + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = -_randInt(1, 7);
    var d = _pickFrom([3, 4, 5, 6, 8]);
    var dec = (n / d).toFixed(3);
    var opts = [dec, (-n / d).toFixed(3), (d / n).toFixed(3), (n + d).toFixed(3)];
    return { q: 'Convert ' + n + '/' + d + ' to a decimal (3 d.p.).', opts: opts, c: 0,
             e: n + ' ÷ ' + d + ' = ' + dec + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var vals = [];
    for (var i = 0; i < 4; i++) {
      var neg = Math.random() < 0.5 ? -1 : 1;
      vals.push(neg * _randInt(1, 9) / _pickFrom([2, 4, 5, 10]));
    }
    vals.sort(function(a,b){return a-b;});
    var labels = vals.map(function(v){return v.toFixed(2);});
    var ans = labels.join(' < ');
    var rev = labels.slice().reverse().join(' < ');
    var opts = [ans, rev, labels[1] + ' < ' + labels[0] + ' < ' + labels[2] + ' < ' + labels[3], labels[0] + ' < ' + labels[2] + ' < ' + labels[1] + ' < ' + labels[3]];
    return { q: 'Order from smallest to largest: ' + labels.slice().sort(function(){return Math.random()-0.5;}).join(', '), opts: opts, c: 0,
             e: 'Convert all to decimals and compare. Order: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = -_randInt(1, 3);
    var b_n = _randInt(1, 3), b_d = _pickFrom([4, 5, 8]);
    var val = a + b_n / b_d;
    var asImproper_n = a * b_d + b_n;
    var ans = asImproper_n + '/' + b_d;
    var opts = [ans, (a - b_n) + '/' + b_d, a + '/' + b_d, (-a * b_d + b_n) + '/' + b_d];
    return { q: 'Write ' + a + ' ' + b_n + '/' + b_d + ' as an improper fraction.', opts: opts, c: 0,
             e: a + ' ' + b_n + '/' + b_d + ' = (' + a + '×' + b_d + ' + ' + b_n + ')/' + b_d + ' = ' + ans + '.' };
  }}
];

// ── mi-15-2: Compare & Order Rational Numbers ────────────────────────────
TEST_GENERATORS["mi-15-2"] = [
  { depth: 'medium', gen: function() {
    var a_n = _randInt(1, 5), a_d = _pickFrom([3, 4, 6, 8]);
    var b_n = _randInt(1, 5), b_d = _pickFrom([3, 4, 6, 8]);
    while (a_n/a_d === b_n/b_d) { b_n = _randInt(1, 5); }
    var aVal = a_n / a_d, bVal = b_n / b_d;
    var symbol = aVal > bVal ? '>' : '<';
    var opts = [symbol, aVal > bVal ? '<' : '>', '=', '≥'];
    return { q: 'Insert <, > or =:  ' + a_n + '/' + a_d + ' ___ ' + b_n + '/' + b_d, opts: opts, c: 0,
             e: a_n + '/' + a_d + ' = ' + aVal.toFixed(3) + ', ' + b_n + '/' + b_d + ' = ' + bVal.toFixed(3) + '. So ' + symbol + '.' };
  }},
  { depth: 'medium', gen: function() {
    var dec = _pickFrom([0.6, 0.75, 0.8, 0.4, 0.25]);
    var n = _randInt(1, 7), d = _pickFrom([3, 5, 8, 10]);
    while (n >= d) n--;
    var fracVal = n / d;
    var bigger = dec > fracVal ? dec : n + '/' + d;
    var smaller = dec > fracVal ? n + '/' + d : dec;
    var opts = [bigger + '', smaller + '', 'They are equal', 'Cannot compare'];
    return { q: 'Which is larger: ' + dec + ' or ' + n + '/' + d + '?', opts: opts, c: 0,
             e: dec + ' vs ' + n + '/' + d + ' = ' + fracVal.toFixed(3) + '. ' + bigger + ' is larger.' };
  }},
  { depth: 'medium', gen: function() {
    var a = -_randInt(1, 5), b = -_randInt(1, 5);
    while (a === b) b = -_randInt(1, 5);
    var bigger = a > b ? a : b;
    var opts = _buildOpts(bigger, [Math.min(a, b), a + b, 0]);
    return { q: 'Which is larger: ' + a + ' or ' + b + '?', opts: opts, c: 0,
             e: 'On a number line, ' + bigger + ' is further right. So ' + bigger + ' is larger.' };
  }},
  { depth: 'medium', gen: function() {
    var n1 = _randInt(1, 5), d1 = _randInt(n1 + 1, 8);
    var n2 = _randInt(1, 5), d2 = _randInt(n2 + 1, 8);
    var lcd = _lcm(d1, d2);
    var conv1 = n1 * (lcd / d1), conv2 = n2 * (lcd / d2);
    var bigger = conv1 > conv2 ? n1 + '/' + d1 : n2 + '/' + d2;
    var opts = [bigger, conv1 > conv2 ? n2 + '/' + d2 : n1 + '/' + d1, 'Equal', (n1+n2) + '/' + (d1+d2)];
    return { q: 'Which is larger: ' + n1 + '/' + d1 + ' or ' + n2 + '/' + d2 + '?', opts: opts, c: 0,
             e: 'LCD = ' + lcd + '. ' + n1 + '/' + d1 + ' = ' + conv1 + '/' + lcd + '. ' + n2 + '/' + d2 + ' = ' + conv2 + '/' + lcd + '. ' + bigger + ' is larger.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var vals = [_randInt(-8, 8) / _pickFrom([2, 4, 5]), _randInt(-8, 8) / _pickFrom([2, 4, 5]), _randInt(-8, 8) / _pickFrom([2, 4, 5])];
    while (vals[0] === vals[1] || vals[1] === vals[2]) vals[2] = _randInt(-8, 8) / 5;
    var sorted = vals.slice().sort(function(a,b){return a-b;});
    var labels = sorted.map(function(v){return v.toFixed(2);});
    var ans = labels.join(' < ');
    var rev = labels.slice().reverse().join(' < ');
    var opts = [ans, rev, labels[1] + ' < ' + labels[0] + ' < ' + labels[2], labels[2] + ' < ' + labels[0] + ' < ' + labels[1]];
    return { q: 'Order from smallest: ' + vals.map(function(v){return v.toFixed(2);}).join(', '), opts: opts, c: 0,
             e: 'As decimals: sorted = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var neg_n = -_randInt(1, 5), neg_d = _pickFrom([3, 4, 6]);
    var pos_n = _randInt(1, 5), pos_d = _pickFrom([3, 4, 6]);
    var dec = _pickFrom([-0.5, 0.25, -0.75, 0.1]);
    var vals = [neg_n / neg_d, pos_n / pos_d, dec];
    var labels = [neg_n + '/' + neg_d, pos_n + '/' + pos_d, dec + ''];
    var indices = [0, 1, 2].sort(function(a,b){return vals[a] - vals[b];});
    var ans = indices.map(function(i){return labels[i];}).join(' < ');
    var rev = indices.slice().reverse().map(function(i){return labels[i];}).join(' < ');
    var opts = [ans, rev, labels.join(' < '), labels.slice().reverse().join(' < ')];
    return { q: 'Order from smallest: ' + labels.join(', '), opts: opts, c: 0,
             e: 'Convert to decimals: ' + vals.map(function(v){return v.toFixed(3);}).join(', ') + '. Order: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a_n = -_randInt(1, 5), a_d = _pickFrom([2, 3, 4, 6]);
    var b_n = -_randInt(1, 5), b_d = _pickFrom([2, 3, 4, 6]);
    while (a_n/a_d === b_n/b_d) { b_n = -_randInt(1, 5); }
    var aVal = a_n / a_d, bVal = b_n / b_d;
    var symbol = aVal > bVal ? '>' : '<';
    var opts = [symbol, aVal > bVal ? '<' : '>', '=', '≤'];
    return { q: 'Insert <, > or =:  ' + a_n + '/' + a_d + ' ___ ' + b_n + '/' + b_d, opts: opts, c: 0,
             e: a_n + '/' + a_d + ' = ' + aVal.toFixed(3) + ', ' + b_n + '/' + b_d + ' = ' + bVal.toFixed(3) + '. So ' + symbol + '.' };
  }}
];

// ── mi-15-3: Rational Number Problems ────────────────────────────────────
TEST_GENERATORS["mi-15-3"] = [
  { depth: 'medium', gen: function() {
    var a_n = _randInt(1, 5), a_d = _pickFrom([2, 3, 4, 6]);
    var b_n = _randInt(1, 5), b_d = a_d;
    var sum_n = a_n + b_n;
    var g = _gcd(sum_n, a_d);
    var ans = (sum_n/g) + '/' + (a_d/g);
    if (a_d / g === 1) ans = (sum_n/g) + '';
    var opts = [ans, (a_n * b_n) + '/' + a_d, (sum_n) + '/' + (a_d * 2), a_n + '/' + (a_d + b_d)];
    return { q: 'Calculate: ' + a_n + '/' + a_d + ' + ' + b_n + '/' + b_d, opts: opts, c: 0,
             e: 'Same denominators: (' + a_n + '+' + b_n + ')/' + a_d + ' = ' + sum_n + '/' + a_d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(-5, -1);
    var b = _randInt(-5, -1);
    var product = a * b;
    var opts = _buildOpts(product, [a + b, -(a * b), a - b]);
    return { q: 'Find the sign and value: (' + a + ') × (' + b + ')', opts: opts, c: 0,
             e: 'Negative × negative = positive. ' + a + ' × ' + b + ' = ' + product + '.' };
  }},
  { depth: 'medium', gen: function() {
    var temp_start = -_randInt(3, 12);
    var rise = _randInt(5, 15);
    var temp_end = temp_start + rise;
    var opts = _buildOpts(temp_end + '°C', [(temp_start - rise) + '°C', rise + '°C', (temp_start + rise + 1) + '°C']);
    return { q: 'Temperature starts at ' + temp_start + '°C and rises ' + rise + '°C. What is the new temperature?', opts: opts, c: 0,
             e: temp_start + ' + ' + rise + ' = ' + temp_end + '°C.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(-8, -1);
    var b = _randInt(2, 8);
    var ans = a / b;
    while (ans !== Math.floor(ans)) { a--; ans = a / b; }
    var opts = _buildOpts(ans, [-ans, a + b, a * b]);
    return { q: 'Calculate: (' + a + ') ÷ ' + b, opts: opts, c: 0,
             e: 'Negative ÷ positive = negative. ' + a + ' ÷ ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-5, 5);
    var b = _randInt(-5, 5);
    var c = _randInt(-5, 5);
    while (a === 0 || b === 0 || c === 0) { a = _randInt(-5, 5); b = _randInt(-5, 5); c = _randInt(-5, 5); }
    var product = a * b * c;
    var sign = product > 0 ? 'Positive' : 'Negative';
    var opts = [sign, product > 0 ? 'Negative' : 'Positive', 'Zero', 'Cannot tell'];
    return { q: 'What is the sign of (' + a + ') × (' + b + ') × (' + c + ')?', opts: opts, c: 0,
             e: 'Count negatives: ' + [a,b,c].filter(function(v){return v<0;}).length + ' negative factors. ' + (product > 0 ? 'Even' : 'Odd') + ' negatives → ' + sign + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var floor = -_randInt(1, 4);
    var floors_up = _randInt(3, 8);
    var floors_down = _randInt(1, 5);
    var final_floor = floor + floors_up - floors_down;
    var opts = _buildOpts('Floor ' + final_floor, ['Floor ' + (floor + floors_up), 'Floor ' + (floors_up - floors_down), 'Floor ' + (floor - floors_up + floors_down)]);
    return { q: 'A lift starts at floor ' + floor + ', goes up ' + floors_up + ' floors, then down ' + floors_down + '. Where does it end?', opts: opts, c: 0,
             e: floor + ' + ' + floors_up + ' − ' + floors_down + ' = Floor ' + final_floor + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var balance = -_randInt(50, 200);
    var deposit = _randInt(100, 300);
    var withdrawal = _randInt(50, 150);
    var final_bal = balance + deposit - withdrawal;
    var opts = _buildOpts('£' + final_bal, ['£' + (balance + deposit), '£' + (deposit - withdrawal), '£' + (-final_bal)]);
    return { q: 'A bank account is at £' + balance + '. £' + deposit + ' is deposited, then £' + withdrawal + ' withdrawn. What is the balance?', opts: opts, c: 0,
             e: balance + ' + ' + deposit + ' − ' + withdrawal + ' = £' + final_bal + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// PROBLEM SOLVING & ESTIMATION (mt-16) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-16-1: Multi-Step Word Problems ────────────────────────────────────
TEST_GENERATORS["mi-16-1"] = [
  { depth: 'medium', gen: function() {
    var price = _randInt(3, 12);
    var qty = _randInt(3, 8);
    var paid = qty * price + _randInt(5, 20);
    var total = price * qty;
    var change = paid - total;
    var opts = _buildOpts('£' + change, ['£' + total, '£' + paid, '£' + (change + price)]);
    return { q: 'You buy ' + qty + ' items at £' + price + ' each and pay with £' + paid + '. How much change?', opts: opts, c: 0,
             e: 'Total = ' + qty + ' × £' + price + ' = £' + total + '. Change = £' + paid + ' − £' + total + ' = £' + change + '.' };
  }},
  { depth: 'medium', gen: function() {
    var perPack = _randInt(4, 8);
    var need = _randInt(20, 50);
    var packs = Math.ceil(need / perPack);
    var opts = _buildOpts(packs, [packs - 1, Math.floor(need / perPack), packs + 1]);
    return { q: 'Pens come in packs of ' + perPack + '. You need ' + need + ' pens. How many packs must you buy?', opts: opts, c: 0,
             e: need + ' ÷ ' + perPack + ' = ' + (need/perPack).toFixed(1) + '. Round up: ' + packs + ' packs.' };
  }},
  { depth: 'medium', gen: function() {
    var rate = _randInt(40, 80);
    var hours = _randInt(6, 12);
    var bonus = _randInt(20, 100);
    var total = rate * hours + bonus;
    var opts = _buildOpts('£' + total, ['£' + (rate * hours), '£' + (total + rate), '£' + (rate + bonus)]);
    return { q: 'A worker earns £' + rate + '/hour for ' + hours + ' hours, plus a £' + bonus + ' bonus. What is the total pay?', opts: opts, c: 0,
             e: '£' + rate + ' × ' + hours + ' = £' + (rate*hours) + '. Add bonus: £' + (rate*hours) + ' + £' + bonus + ' = £' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var dist = _randInt(100, 300);
    var speed = _pickFrom([40, 50, 60, 80]);
    var time_h = dist / speed;
    while (time_h !== Math.floor(time_h * 2) / 2) { dist += 10; time_h = dist / speed; }
    var opts = _buildOpts(time_h + ' hours', [(dist + speed) + ' hours', speed / dist + ' hours', (time_h + 1) + ' hours']);
    return { q: 'A car travels ' + dist + ' km at ' + speed + ' km/h. How long does the journey take?', opts: opts, c: 0,
             e: 'Time = distance ÷ speed = ' + dist + ' ÷ ' + speed + ' = ' + time_h + ' hours.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var adult = _randInt(8, 15);
    var child = _randInt(4, adult - 2);
    var numAdults = _randInt(2, 4);
    var numChildren = _randInt(1, 4);
    var total = adult * numAdults + child * numChildren;
    var opts = _buildOpts('£' + total, ['£' + (adult + child) * (numAdults + numChildren), '£' + (adult * numAdults), '£' + (total + adult)]);
    return { q: 'Cinema: adult £' + adult + ', child £' + child + '. ' + numAdults + ' adults and ' + numChildren + ' children go. Total cost?', opts: opts, c: 0,
             e: 'Adults: ' + numAdults + '×£' + adult + '=£' + (numAdults*adult) + '. Children: ' + numChildren + '×£' + child + '=£' + (numChildren*child) + '. Total=£' + total + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var length = _randInt(10, 25);
    var width = _randInt(5, 15);
    var area = length * width;
    var perimeter = 2 * (length + width);
    var fenceCost = _randInt(5, 12);
    var totalFence = perimeter * fenceCost;
    var opts = _buildOpts('£' + totalFence, ['£' + (area * fenceCost), '£' + (perimeter + fenceCost), '£' + (length * fenceCost)]);
    return { q: 'A garden is ' + length + 'm × ' + width + 'm. Fencing costs £' + fenceCost + '/m. What is the total fencing cost?', opts: opts, c: 0,
             e: 'Perimeter = 2(' + length + '+' + width + ') = ' + perimeter + 'm. Cost = ' + perimeter + '×£' + fenceCost + ' = £' + totalFence + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var start = _randInt(200, 500);
    var spend1 = _randInt(30, 80);
    var spend2 = _randInt(20, 60);
    var earn = _randInt(40, 100);
    var final_val = start - spend1 - spend2 + earn;
    var opts = _buildOpts('£' + final_val, ['£' + (start - spend1 - spend2), '£' + (start + earn), '£' + (final_val + spend1)]);
    return { q: 'You have £' + start + '. You spend £' + spend1 + ' and £' + spend2 + ', then earn £' + earn + '. How much do you have?', opts: opts, c: 0,
             e: '£' + start + ' − £' + spend1 + ' − £' + spend2 + ' + £' + earn + ' = £' + final_val + '.' };
  }}
];

// ── mi-16-2: Estimation Strategies ───────────────────────────────────────
TEST_GENERATORS["mi-16-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(100, 900) + _randInt(10, 90);
    var b = _randInt(100, 900) + _randInt(10, 90);
    var roundA = Math.round(a / 100) * 100;
    var roundB = Math.round(b / 100) * 100;
    var estimate = roundA + roundB;
    var opts = _buildOpts(estimate, [a + b, roundA * roundB, estimate + 100]);
    return { q: 'Estimate ' + a + ' + ' + b + ' by rounding to the nearest 100.', opts: opts, c: 0,
             e: a + ' ≈ ' + roundA + ', ' + b + ' ≈ ' + roundB + '. Estimate = ' + estimate + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(20, 90) + _randInt(1, 9) / 10;
    var b = _randInt(10, 50) + _randInt(1, 9) / 10;
    var roundA = Math.round(a);
    var roundB = Math.round(b);
    var estimate = roundA - roundB;
    var opts = _buildOpts(estimate, [Math.round(a - b), roundA + roundB, estimate + 1]);
    return { q: 'Estimate ' + a.toFixed(1) + ' − ' + b.toFixed(1) + ' by rounding to whole numbers.', opts: opts, c: 0,
             e: a.toFixed(1) + ' ≈ ' + roundA + ', ' + b.toFixed(1) + ' ≈ ' + roundB + '. Estimate = ' + estimate + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(11, 49);
    var b = _randInt(11, 49);
    var roundA = Math.round(a / 10) * 10;
    var roundB = Math.round(b / 10) * 10;
    var estimate = roundA * roundB;
    var opts = _buildOpts(estimate, [a * b, roundA + roundB, estimate + 100]);
    return { q: 'Estimate ' + a + ' × ' + b + ' by rounding to the nearest 10.', opts: opts, c: 0,
             e: a + ' ≈ ' + roundA + ', ' + b + ' ≈ ' + roundB + '. Estimate = ' + roundA + '×' + roundB + ' = ' + estimate + '.' };
  }},
  { depth: 'medium', gen: function() {
    var answers = [_randInt(100, 200), _randInt(800, 1200), _randInt(5000, 9000), _randInt(10, 50)];
    var a = _randInt(38, 62);
    var b = _randInt(18, 32);
    var actual = a * b;
    var closest = answers.reduce(function(prev, curr) { return Math.abs(curr - actual) < Math.abs(prev - actual) ? curr : prev; });
    var opts = [_commas(closest), _commas(answers[0] === closest ? answers[1] : answers[0]), _commas(answers[2] === closest ? answers[3] : answers[2]), _commas(answers.filter(function(v){return v!==closest;})[2] || 999)];
    return { q: 'Without calculating exactly, which is closest to ' + a + ' × ' + b + '?', opts: opts, c: 0,
             e: a + ' × ' + b + ' ≈ ' + (Math.round(a/10)*10) + ' × ' + (Math.round(b/10)*10) + ' = ' + (Math.round(a/10)*10 * Math.round(b/10)*10) + '. Closest: ' + _commas(closest) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(200, 800);
    var b = _randInt(3, 9);
    var roundA = Math.round(a / 100) * 100;
    var estimate = roundA / b;
    while (estimate !== Math.floor(estimate)) { roundA += 100; estimate = roundA / b; }
    a = roundA + _randInt(-40, 40);
    var opts = _buildOpts(estimate, [a / b, roundA * b, estimate + b]);
    return { q: 'Estimate ' + a + ' ÷ ' + b + ' (round ' + a + ' to a number divisible by ' + b + ').', opts: opts, c: 0,
             e: a + ' ≈ ' + roundA + '. ' + roundA + ' ÷ ' + b + ' = ' + estimate + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var price = _randInt(2, 8) + 0.99;
    var qty = _randInt(4, 9);
    var estimate = Math.round(price) * qty;
    var actual = (price * qty).toFixed(2);
    var opts = _buildOpts('≈ £' + estimate, ['£' + actual, '≈ £' + (estimate + qty), '≈ £' + (price * qty + 10).toFixed(0)]);
    return { q: 'Estimate the cost of ' + qty + ' items at £' + price.toFixed(2) + ' each.', opts: opts, c: 0,
             e: '£' + price.toFixed(2) + ' ≈ £' + Math.round(price) + '. Estimate = ' + qty + ' × £' + Math.round(price) + ' = £' + estimate + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(100, 500);
    var b = _randInt(100, 500);
    var c = _randInt(100, 500);
    var sum = a + b + c;
    var rA = Math.round(a / 100) * 100, rB = Math.round(b / 100) * 100, rC = Math.round(c / 100) * 100;
    var estimate = rA + rB + rC;
    var opts = _buildOpts(estimate, [sum, estimate + 100, rA + rB]);
    return { q: 'Estimate ' + a + ' + ' + b + ' + ' + c + ' by rounding each to the nearest 100.', opts: opts, c: 0,
             e: a + '≈' + rA + ', ' + b + '≈' + rB + ', ' + c + '≈' + rC + '. Estimate = ' + estimate + '.' };
  }}
];

// ── mi-16-3: Logical Reasoning Problems ──────────────────────────────────
TEST_GENERATORS["mi-16-3"] = [
  { depth: 'medium', gen: function() {
    var x = _randInt(5, 20);
    var sum = x + (x + 1);
    var opts = _buildOpts(x + ' and ' + (x+1), [(x-1) + ' and ' + (x+2), x + ' and ' + (x+2), (x+1) + ' and ' + (x+2)]);
    return { q: 'Two consecutive numbers add up to ' + sum + '. What are they?', opts: opts, c: 0,
             e: 'Let n and n+1. 2n+1 = ' + sum + '. n = ' + x + '. Numbers: ' + x + ' and ' + (x+1) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(3, 12);
    var result = x * 2 + 5;
    var opts = _buildOpts(x, [result, (result - 5), x + 1]);
    return { q: 'I think of a number, double it and add 5. I get ' + result + '. What was my number?', opts: opts, c: 0,
             e: 'Work backwards: ' + result + ' − 5 = ' + (result-5) + '. ' + (result-5) + ' ÷ 2 = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(10, 30);
    var b = _randInt(10, 30);
    while (a === b) b = _randInt(10, 30);
    var sum = a + b;
    var diff = Math.abs(a - b);
    var bigger = Math.max(a, b), smaller = Math.min(a, b);
    var opts = _buildOpts(bigger + ' and ' + smaller, [smaller + ' and ' + bigger, (sum/2) + ' and ' + (sum/2), (bigger+1) + ' and ' + (smaller-1)]);
    return { q: 'Two numbers have sum ' + sum + ' and difference ' + diff + '. What are they?', opts: opts, c: 0,
             e: 'Bigger = (' + sum + '+' + diff + ')÷2 = ' + bigger + '. Smaller = ' + sum + '−' + bigger + ' = ' + smaller + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(3, 10);
    var result = (x + 3) * 2;
    var opts = _buildOpts(x, [result / 2, result - 3, x + 1]);
    return { q: 'I think of a number, add 3, then double. I get ' + result + '. What was my number?', opts: opts, c: 0,
             e: 'Work backwards: ' + result + ' ÷ 2 = ' + (result/2) + '. ' + (result/2) + ' − 3 = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(2, 8);
    var ages = [x, x + _randInt(2, 5), x + _randInt(6, 12)];
    var sum = ages[0] + ages[1] + ages[2];
    var opts = _buildOpts(ages[0] + ', ' + ages[1] + ', ' + ages[2], [(ages[0]+1) + ', ' + (ages[1]+1) + ', ' + (ages[2]-2), ages[2] + ', ' + ages[1] + ', ' + ages[0], (sum/3) + ', ' + (sum/3) + ', ' + (sum/3)]);
    return { q: 'Three siblings are aged ' + ages[0] + ', ' + ages[1] + ', and ' + ages[2] + '. What is the sum of their ages?', opts: _buildOpts(sum, [ages[2] * 3, sum + ages[0], sum - ages[0]]), c: 0,
             e: ages[0] + ' + ' + ages[1] + ' + ' + ages[2] + ' = ' + sum + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(5, 15);
    var result = x * x - 1;
    var opts = _buildOpts(x, [x + 1, x - 1, Math.sqrt(result + 1)]);
    return { q: 'I think of a number, square it, subtract 1, and get ' + result + '. What was my number?', opts: opts, c: 0,
             e: 'Work backwards: ' + result + ' + 1 = ' + (result+1) + '. √' + (result+1) + ' = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _randInt(3, 7);
    var first = _randInt(2, 5);
    var seq = [];
    for (var i = 0; i < n; i++) seq.push(first + i * 2);
    var sum = seq.reduce(function(a,b){return a+b;}, 0);
    var opts = _buildOpts(sum, [n * first, seq[n-1] * n, sum + 2]);
    return { q: 'Find the sum of ' + n + ' consecutive odd numbers starting from ' + first + ': ' + seq.join(' + '), opts: opts, c: 0,
             e: seq.join(' + ') + ' = ' + sum + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MEASUREMENT (mt-17) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-17-1: Metric Units ────────────────────────────────────────────────
TEST_GENERATORS["mi-17-1"] = [
  { depth: 'medium', gen: function() {
    var km = _randInt(1, 12);
    var m = km * 1000;
    var opts = _buildOpts(m + ' m', [(km * 100) + ' m', (km * 10) + ' m', km + '00 m']);
    return { q: 'Convert ' + km + ' km to metres.', opts: opts, c: 0,
             e: km + ' km × 1000 = ' + m + ' m.' };
  }},
  { depth: 'medium', gen: function() {
    var cm = _randInt(100, 900);
    var m = cm / 100;
    var opts = _buildOpts(m + ' m', [(cm * 100) + ' m', (cm / 10) + ' m', (cm / 1000) + ' m']);
    return { q: 'Convert ' + cm + ' cm to metres.', opts: opts, c: 0,
             e: cm + ' cm ÷ 100 = ' + m + ' m.' };
  }},
  { depth: 'medium', gen: function() {
    var kg = _randInt(1, 15);
    var g = kg * 1000;
    var opts = _buildOpts(g + ' g', [(kg * 100) + ' g', (kg * 10) + ' g', kg + ' g']);
    return { q: 'Convert ' + kg + ' kg to grams.', opts: opts, c: 0,
             e: kg + ' kg × 1000 = ' + g + ' g.' };
  }},
  { depth: 'medium', gen: function() {
    var litres = _randInt(1, 8);
    var ml = litres * 1000;
    var opts = _buildOpts(ml + ' ml', [(litres * 100) + ' ml', (litres * 10) + ' ml', litres + ' ml']);
    return { q: 'Convert ' + litres + ' litres to millilitres.', opts: opts, c: 0,
             e: litres + ' L × 1000 = ' + ml + ' ml.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var m = _randInt(1, 5);
    var cm = _randInt(10, 90);
    var total_cm = m * 100 + cm;
    var total_mm = total_cm * 10;
    var opts = _buildOpts(total_mm + ' mm', [total_cm + ' mm', (m * 1000 + cm) + ' mm', (total_cm * 100) + ' mm']);
    return { q: 'Convert ' + m + ' m ' + cm + ' cm to millimetres.', opts: opts, c: 0,
             e: m + ' m ' + cm + ' cm = ' + total_cm + ' cm = ' + total_mm + ' mm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var g = _randInt(1200, 5800);
    var kg = Math.floor(g / 1000);
    var remainder = g - kg * 1000;
    var ans = kg + ' kg ' + remainder + ' g';
    var opts = [ans, g + ' kg', (g / 100) + ' kg', kg + ' kg'];
    return { q: 'Convert ' + g + ' g to kg and g.', opts: opts, c: 0,
             e: g + ' g = ' + kg + ' kg ' + remainder + ' g.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a_m = _randInt(1, 5);
    var a_cm = _randInt(10, 80);
    var b_m = _randInt(1, 4);
    var b_cm = _randInt(10, 80);
    var total_cm = (a_m * 100 + a_cm) + (b_m * 100 + b_cm);
    var ans_m = Math.floor(total_cm / 100);
    var ans_cm = total_cm % 100;
    var ans = ans_m + ' m ' + ans_cm + ' cm';
    var opts = [ans, (a_m + b_m) + ' m ' + (a_cm + b_cm) + ' cm', total_cm + ' cm', (ans_m + 1) + ' m ' + ans_cm + ' cm'];
    return { q: 'Add: ' + a_m + ' m ' + a_cm + ' cm + ' + b_m + ' m ' + b_cm + ' cm', opts: opts, c: 0,
             e: 'Total = ' + total_cm + ' cm = ' + ans + '.' };
  }}
];

// ── mi-17-2: Imperial Units ──────────────────────────────────────────────
TEST_GENERATORS["mi-17-2"] = [
  { depth: 'medium', gen: function() {
    var feet = _randInt(2, 10);
    var inches = feet * 12;
    var opts = _buildOpts(inches + ' inches', [(feet * 10) + ' inches', (feet * 6) + ' inches', feet + ' inches']);
    return { q: 'Convert ' + feet + ' feet to inches.', opts: opts, c: 0,
             e: feet + ' feet × 12 = ' + inches + ' inches.' };
  }},
  { depth: 'medium', gen: function() {
    var lbs = _randInt(2, 10);
    var oz = lbs * 16;
    var opts = _buildOpts(oz + ' oz', [(lbs * 12) + ' oz', (lbs * 14) + ' oz', (lbs * 8) + ' oz']);
    return { q: 'Convert ' + lbs + ' pounds to ounces.', opts: opts, c: 0,
             e: lbs + ' lb × 16 = ' + oz + ' oz.' };
  }},
  { depth: 'medium', gen: function() {
    var yards = _randInt(2, 10);
    var feet = yards * 3;
    var opts = _buildOpts(feet + ' feet', [(yards * 12) + ' feet', (yards * 2) + ' feet', yards + ' feet']);
    return { q: 'Convert ' + yards + ' yards to feet.', opts: opts, c: 0,
             e: yards + ' yards × 3 = ' + feet + ' feet.' };
  }},
  { depth: 'medium', gen: function() {
    var gallons = _randInt(1, 6);
    var pints = gallons * 8;
    var opts = _buildOpts(pints + ' pints', [(gallons * 4) + ' pints', (gallons * 6) + ' pints', (gallons * 10) + ' pints']);
    return { q: 'Convert ' + gallons + ' gallons to pints.', opts: opts, c: 0,
             e: gallons + ' gallons × 8 = ' + pints + ' pints.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var inches = _randInt(24, 80);
    var feet = Math.floor(inches / 12);
    var rem = inches % 12;
    var ans = feet + ' ft ' + rem + ' in';
    var opts = [ans, (feet + 1) + ' ft ' + rem + ' in', inches + ' ft', feet + ' ft'];
    return { q: 'Convert ' + inches + ' inches to feet and inches.', opts: opts, c: 0,
             e: inches + ' ÷ 12 = ' + feet + ' remainder ' + rem + '. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var ft1 = _randInt(3, 6), in1 = _randInt(2, 10);
    var ft2 = _randInt(3, 6), in2 = _randInt(2, 10);
    var totalInches = (ft1 * 12 + in1) + (ft2 * 12 + in2);
    var ansFt = Math.floor(totalInches / 12);
    var ansIn = totalInches % 12;
    var ans = ansFt + ' ft ' + ansIn + ' in';
    var opts = [ans, (ft1 + ft2) + ' ft ' + (in1 + in2) + ' in', totalInches + ' in', (ansFt + 1) + ' ft ' + ansIn + ' in'];
    return { q: 'Add: ' + ft1 + ' ft ' + in1 + ' in + ' + ft2 + ' ft ' + in2 + ' in', opts: opts, c: 0,
             e: 'Total inches = ' + totalInches + '. = ' + ansFt + ' ft ' + ansIn + ' in.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var stones = _randInt(6, 15);
    var lbs = stones * 14;
    var opts = _buildOpts(lbs + ' lb', [(stones * 12) + ' lb', (stones * 16) + ' lb', (stones * 10) + ' lb']);
    return { q: 'Convert ' + stones + ' stone to pounds (1 stone = 14 lb).', opts: opts, c: 0,
             e: stones + ' × 14 = ' + lbs + ' lb.' };
  }}
];

// ── mi-17-3: Convert Metric & Imperial ───────────────────────────────────
TEST_GENERATORS["mi-17-3"] = [
  { depth: 'medium', gen: function() {
    var miles = _randInt(2, 20);
    var km = miles * 1.6;
    var opts = _buildOpts(km + ' km', [(miles * 1.2) + ' km', (miles * 2) + ' km', (miles / 1.6).toFixed(1) + ' km']);
    return { q: 'Convert ' + miles + ' miles to km (1 mile ≈ 1.6 km).', opts: opts, c: 0,
             e: miles + ' × 1.6 = ' + km + ' km.' };
  }},
  { depth: 'medium', gen: function() {
    var kg = _randInt(2, 20);
    var lbs = kg * 2.2;
    var opts = _buildOpts(lbs.toFixed(1) + ' lb', [(kg * 1.6).toFixed(1) + ' lb', (kg / 2.2).toFixed(1) + ' lb', (kg * 3).toFixed(1) + ' lb']);
    return { q: 'Convert ' + kg + ' kg to pounds (1 kg ≈ 2.2 lb).', opts: opts, c: 0,
             e: kg + ' × 2.2 = ' + lbs.toFixed(1) + ' lb.' };
  }},
  { depth: 'medium', gen: function() {
    var litres = _randInt(2, 15);
    var pints = litres * 1.75;
    var opts = _buildOpts(pints.toFixed(2) + ' pints', [(litres * 2).toFixed(2) + ' pints', (litres / 1.75).toFixed(2) + ' pints', (litres * 1.5).toFixed(2) + ' pints']);
    return { q: 'Convert ' + litres + ' litres to pints (1 litre ≈ 1.75 pints).', opts: opts, c: 0,
             e: litres + ' × 1.75 = ' + pints.toFixed(2) + ' pints.' };
  }},
  { depth: 'medium', gen: function() {
    var inches = _randInt(10, 50);
    var cm = inches * 2.54;
    var opts = _buildOpts(cm.toFixed(1) + ' cm', [(inches * 2).toFixed(1) + ' cm', (inches / 2.54).toFixed(1) + ' cm', (inches * 3).toFixed(1) + ' cm']);
    return { q: 'Convert ' + inches + ' inches to cm (1 inch = 2.54 cm).', opts: opts, c: 0,
             e: inches + ' × 2.54 = ' + cm.toFixed(1) + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var km = _randInt(10, 100);
    var miles = km / 1.6;
    var opts = _buildOpts(miles.toFixed(1) + ' miles', [(km * 1.6).toFixed(1) + ' miles', (km / 2).toFixed(1) + ' miles', (km - 1.6).toFixed(1) + ' miles']);
    return { q: 'Convert ' + km + ' km to miles (1 mile ≈ 1.6 km).', opts: opts, c: 0,
             e: km + ' ÷ 1.6 = ' + miles.toFixed(1) + ' miles.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var lbs = _randInt(100, 200);
    var kg = lbs / 2.2;
    var opts = _buildOpts(kg.toFixed(1) + ' kg', [(lbs * 2.2).toFixed(1) + ' kg', (lbs / 1.6).toFixed(1) + ' kg', (lbs - 2.2).toFixed(1) + ' kg']);
    return { q: 'A person weighs ' + lbs + ' lb. What is this in kg? (1 kg ≈ 2.2 lb)', opts: opts, c: 0,
             e: lbs + ' ÷ 2.2 = ' + kg.toFixed(1) + ' kg.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var speed_mph = _randInt(30, 70);
    var speed_kmh = (speed_mph * 1.6).toFixed(0);
    var opts = _buildOpts(speed_kmh + ' km/h', [(speed_mph * 2) + ' km/h', (speed_mph / 1.6).toFixed(0) + ' km/h', (speed_mph + 16) + ' km/h']);
    return { q: 'A car travels at ' + speed_mph + ' mph. What is this in km/h? (1 mile ≈ 1.6 km)', opts: opts, c: 0,
             e: speed_mph + ' × 1.6 = ' + speed_kmh + ' km/h.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MONEY & CONSUMER MATHS (mt-18) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-18-1: Add & Subtract Money ────────────────────────────────────────
TEST_GENERATORS["mi-18-1"] = [
  { depth: 'medium', gen: function() {
    var a = (_randInt(1, 20) + _randInt(0, 99) / 100).toFixed(2);
    var b = (_randInt(1, 15) + _randInt(0, 99) / 100).toFixed(2);
    var sum = (parseFloat(a) + parseFloat(b)).toFixed(2);
    var opts = ['£' + sum, '£' + (parseFloat(a) - parseFloat(b)).toFixed(2), '£' + (parseFloat(sum) + 1).toFixed(2), '£' + (parseFloat(a) * parseFloat(b)).toFixed(2)];
    return { q: 'Calculate: £' + a + ' + £' + b, opts: opts, c: 0,
             e: '£' + a + ' + £' + b + ' = £' + sum + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = (_randInt(10, 50) + _randInt(0, 99) / 100).toFixed(2);
    var b = (_randInt(1, 9) + _randInt(0, 99) / 100).toFixed(2);
    var diff = (parseFloat(a) - parseFloat(b)).toFixed(2);
    var opts = ['£' + diff, '£' + (parseFloat(a) + parseFloat(b)).toFixed(2), '£' + (parseFloat(diff) + 1).toFixed(2), '£' + b];
    return { q: 'Calculate: £' + a + ' − £' + b, opts: opts, c: 0,
             e: '£' + a + ' − £' + b + ' = £' + diff + '.' };
  }},
  { depth: 'medium', gen: function() {
    var paid = _pickFrom([5, 10, 20, 50]);
    var cost = (_randInt(1, paid - 1) + _randInt(1, 99) / 100).toFixed(2);
    var change = (paid - parseFloat(cost)).toFixed(2);
    var opts = ['£' + change, '£' + cost, '£' + (parseFloat(change) + 1).toFixed(2), '£' + paid];
    return { q: 'You pay with a £' + paid + ' note for an item costing £' + cost + '. How much change?', opts: opts, c: 0,
             e: '£' + paid + '.00 − £' + cost + ' = £' + change + '.' };
  }},
  { depth: 'medium', gen: function() {
    var items = _randInt(2, 4);
    var prices = [];
    var total = 0;
    for (var i = 0; i < items; i++) { var p = _randInt(1, 8) + _randInt(10, 99) / 100; prices.push(p); total += p; }
    total = total.toFixed(2);
    var priceStr = prices.map(function(p){return '£' + p.toFixed(2);}).join(', ');
    var opts = ['£' + total, '£' + (parseFloat(total) + 1).toFixed(2), '£' + (parseFloat(total) - prices[0]).toFixed(2), '£' + (prices[0] * items).toFixed(2)];
    return { q: 'Find the total cost: ' + priceStr, opts: opts, c: 0,
             e: 'Add all prices: ' + total + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var budget = _randInt(30, 80);
    var items = [_randInt(5, 15) + 0.99, _randInt(3, 12) + 0.49, _randInt(2, 8) + 0.99];
    var spent = items.reduce(function(a,b){return a+b;}, 0);
    var left = (budget - spent).toFixed(2);
    var opts = ['£' + left, '£' + spent.toFixed(2), '£' + budget, '£' + (parseFloat(left) + 1).toFixed(2)];
    return { q: 'Budget: £' + budget + '. You buy items for £' + items[0].toFixed(2) + ', £' + items[1].toFixed(2) + ', £' + items[2].toFixed(2) + '. How much is left?', opts: opts, c: 0,
             e: 'Spent = £' + spent.toFixed(2) + '. Left = £' + budget + ' − £' + spent.toFixed(2) + ' = £' + left + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var weekly = (_randInt(5, 20) + _randInt(0, 99) / 100).toFixed(2);
    var weeks = _randInt(4, 12);
    var total = (parseFloat(weekly) * weeks).toFixed(2);
    var opts = ['£' + total, '£' + (parseFloat(weekly) + weeks).toFixed(2), '£' + weekly, '£' + (parseFloat(total) + parseFloat(weekly)).toFixed(2)];
    return { q: 'You save £' + weekly + ' per week for ' + weeks + ' weeks. How much do you save?', opts: opts, c: 0,
             e: '£' + weekly + ' × ' + weeks + ' = £' + total + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var each = (_randInt(2, 8) + _randInt(10, 99) / 100).toFixed(2);
    var qty = _randInt(3, 7);
    var paid = _randInt(qty * Math.ceil(parseFloat(each)), qty * Math.ceil(parseFloat(each)) + 20);
    var cost = (parseFloat(each) * qty).toFixed(2);
    var change = (paid - parseFloat(cost)).toFixed(2);
    var opts = ['£' + change, '£' + cost, '£' + (parseFloat(change) + parseFloat(each)).toFixed(2), '£' + paid];
    return { q: 'You buy ' + qty + ' items at £' + each + ' each and pay with £' + paid + '. What change do you get?', opts: opts, c: 0,
             e: 'Cost = ' + qty + ' × £' + each + ' = £' + cost + '. Change = £' + paid + ' − £' + cost + ' = £' + change + '.' };
  }}
];

// ── mi-18-2: Sale Prices & Unit Prices ───────────────────────────────────
TEST_GENERATORS["mi-18-2"] = [
  { depth: 'medium', gen: function() {
    var original = _randInt(20, 100);
    while (original % 5 !== 0) original++;
    var pct = _pickFrom([10, 20, 25, 30, 50]);
    var discount = original * pct / 100;
    var sale = original - discount;
    var opts = _buildOpts('£' + sale, ['£' + discount, '£' + original, '£' + (sale + 5)]);
    return { q: 'A £' + original + ' jacket has ' + pct + '% off. What is the sale price?', opts: opts, c: 0,
             e: 'Discount = £' + discount + '. Sale price = £' + original + ' − £' + discount + ' = £' + sale + '.' };
  }},
  { depth: 'medium', gen: function() {
    var price = _randInt(2, 8);
    var qty = _pickFrom([4, 6, 8, 10, 12]);
    var total = price * qty;
    var unitPrice = (total / qty).toFixed(2);
    var opts = ['£' + unitPrice, '£' + total, '£' + (parseFloat(unitPrice) * 2).toFixed(2), '£' + (total / (qty/2)).toFixed(2)];
    return { q: 'A pack of ' + qty + ' costs £' + total + '. What is the unit price?', opts: opts, c: 0,
             e: 'Unit price = £' + total + ' ÷ ' + qty + ' = £' + unitPrice + '.' };
  }},
  { depth: 'medium', gen: function() {
    var priceA = _randInt(2, 5), qtyA = _pickFrom([4, 6, 8]);
    var priceB = _randInt(3, 7), qtyB = _pickFrom([5, 10, 12]);
    var unitA = (priceA / qtyA).toFixed(3);
    var unitB = (priceB / qtyB).toFixed(3);
    var better = parseFloat(unitA) < parseFloat(unitB) ? 'Pack A' : 'Pack B';
    var opts = [better, better === 'Pack A' ? 'Pack B' : 'Pack A', 'Same price', 'Cannot tell'];
    return { q: 'Pack A: ' + qtyA + ' for £' + priceA + '. Pack B: ' + qtyB + ' for £' + priceB + '. Which is better value?', opts: opts, c: 0,
             e: 'A: £' + unitA + '/item. B: £' + unitB + '/item. ' + better + ' is cheaper per item.' };
  }},
  { depth: 'medium', gen: function() {
    var original = _randInt(30, 80);
    while (original % 10 !== 0) original++;
    var discount = original / 2;
    var opts = _buildOpts('£' + discount, ['£' + original, '£' + (discount + 10), '£' + (original + discount)]);
    return { q: 'A "half price" sale is on. An item was £' + original + '. What is the sale price?', opts: opts, c: 0,
             e: 'Half of £' + original + ' = £' + discount + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var original = _randInt(40, 120);
    while (original % 10 !== 0) original++;
    var pct1 = 20, pct2 = 10;
    var after1 = original * 0.8;
    var after2 = after1 * 0.9;
    var opts = _buildOpts('£' + after2, ['£' + (original * 0.7), '£' + after1, '£' + (after2 + 5)]);
    return { q: 'A £' + original + ' item has 20% off, then an extra 10% off the sale price. Final price?', opts: opts, c: 0,
             e: 'After 20%: £' + after1 + '. After extra 10%: £' + after1 + ' × 0.9 = £' + after2 + '. Not same as 30% off!' };
  }},
  { depth: 'greater-depth', gen: function() {
    var unitA = _randInt(20, 80) / 100;
    var qtyA = _pickFrom([6, 8, 12]);
    var totalA = (unitA * qtyA).toFixed(2);
    var unitB = unitA + _pickFrom([-0.05, 0.05, -0.1, 0.1]);
    var qtyB = _pickFrom([4, 10, 15]);
    var totalB = (unitB * qtyB).toFixed(2);
    var better = unitA < unitB ? 'Pack A' : 'Pack B';
    var opts = [better, better === 'Pack A' ? 'Pack B' : 'Pack A', 'Same value', 'Need more info'];
    return { q: 'Pack A: ' + qtyA + ' items for £' + totalA + '. Pack B: ' + qtyB + ' items for £' + totalB + '. Which is better value?', opts: opts, c: 0,
             e: 'A: £' + unitA.toFixed(3) + '/item. B: £' + unitB.toFixed(3) + '/item. ' + better + ' is better value.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var sale = _randInt(30, 80);
    var pct = _pickFrom([20, 25, 40, 50]);
    var original = sale / (1 - pct / 100);
    var opts = _buildOpts('£' + original, ['£' + (sale + pct), '£' + (sale * 2), '£' + (original + 10)]);
    return { q: 'After ' + pct + '% off, an item costs £' + sale + '. What was the original price?', opts: opts, c: 0,
             e: '£' + sale + ' = ' + (100 - pct) + '% of original. Original = £' + sale + ' ÷ ' + ((100-pct)/100) + ' = £' + original + '.' };
  }}
];

// ── mi-18-3: VAT & Tips ─────────────────────────────────────────────────
TEST_GENERATORS["mi-18-3"] = [
  { depth: 'medium', gen: function() {
    var price = _randInt(10, 100);
    while (price % 5 !== 0) price++;
    var vat = price * 0.2;
    var total = price + vat;
    var opts = _buildOpts('£' + total, ['£' + vat, '£' + price, '£' + (total + 5)]);
    return { q: 'An item costs £' + price + ' before VAT (20%). What is the price including VAT?', opts: opts, c: 0,
             e: 'VAT = 20% of £' + price + ' = £' + vat + '. Total = £' + price + ' + £' + vat + ' = £' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var meal = _randInt(15, 60);
    var tipPct = _pickFrom([10, 15, 20]);
    var tip = meal * tipPct / 100;
    var total = meal + tip;
    var opts = _buildOpts('£' + total.toFixed(2), ['£' + tip.toFixed(2), '£' + meal, '£' + (total + 5).toFixed(2)]);
    return { q: 'A meal costs £' + meal + '. You leave a ' + tipPct + '% tip. What is the total?', opts: opts, c: 0,
             e: 'Tip = ' + tipPct + '% of £' + meal + ' = £' + tip.toFixed(2) + '. Total = £' + total.toFixed(2) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var price = _randInt(20, 80);
    while (price % 5 !== 0) price++;
    var vat = price * 0.2;
    var opts = _buildOpts('£' + vat, ['£' + price, '£' + (price + vat), '£' + (vat * 2)]);
    return { q: 'How much VAT (20%) is charged on a £' + price + ' item?', opts: opts, c: 0,
             e: '20% of £' + price + ' = £' + price + ' × 0.2 = £' + vat + '.' };
  }},
  { depth: 'medium', gen: function() {
    var cost = _randInt(50, 200);
    while (cost % 10 !== 0) cost++;
    var markup = _pickFrom([25, 30, 40, 50]);
    var extra = cost * markup / 100;
    var selling = cost + extra;
    var opts = _buildOpts('£' + selling, ['£' + extra, '£' + cost, '£' + (selling + 10)]);
    return { q: 'A shop buys an item for £' + cost + ' and adds a ' + markup + '% mark-up. What is the selling price?', opts: opts, c: 0,
             e: 'Mark-up = £' + extra + '. Selling price = £' + cost + ' + £' + extra + ' = £' + selling + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var incVat = _randInt(24, 240);
    while (incVat % 6 !== 0) incVat++;
    var exVat = incVat / 1.2;
    var opts = _buildOpts('£' + exVat.toFixed(2), ['£' + (incVat * 0.8).toFixed(2), '£' + (incVat - 20), '£' + (exVat - 5).toFixed(2)]);
    return { q: 'A price including 20% VAT is £' + incVat + '. What is the price before VAT?', opts: opts, c: 0,
             e: 'Price before VAT = £' + incVat + ' ÷ 1.2 = £' + exVat.toFixed(2) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var meal = _randInt(40, 100);
    var tip = _pickFrom([10, 12.5, 15]);
    var tipAmt = meal * tip / 100;
    var subtotal = meal + tipAmt;
    var servicePct = 0;
    var total = subtotal;
    var opts = _buildOpts('£' + total.toFixed(2), ['£' + meal, '£' + tipAmt.toFixed(2), '£' + (total + 5).toFixed(2)]);
    return { q: 'A meal for 2 costs £' + meal + '. You add a ' + tip + '% tip. What is the total bill?', opts: opts, c: 0,
             e: 'Tip = ' + tip + '% of £' + meal + ' = £' + tipAmt.toFixed(2) + '. Total = £' + total.toFixed(2) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var base = _randInt(50, 200);
    while (base % 10 !== 0) base++;
    var vat = base * 0.2;
    var withVat = base + vat;
    var tip = _pickFrom([10, 15]);
    var tipAmt = withVat * tip / 100;
    var grand = withVat + tipAmt;
    var opts = _buildOpts('£' + grand.toFixed(2), ['£' + withVat.toFixed(2), '£' + (base + tipAmt).toFixed(2), '£' + (grand + 10).toFixed(2)]);
    return { q: 'A bill is £' + base + ' + 20% VAT. You then add a ' + tip + '% tip on the VAT-inclusive total. Grand total?', opts: opts, c: 0,
             e: 'With VAT: £' + withVat + '. Tip: £' + tipAmt.toFixed(2) + '. Grand total: £' + grand.toFixed(2) + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// TIME (mt-19) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-19-1: Elapsed Time ────────────────────────────────────────────────
TEST_GENERATORS["mi-19-1"] = [
  { depth: 'medium', gen: function() {
    var startH = _randInt(8, 14);
    var startM = _randInt(0, 3) * 15;
    var durH = _randInt(1, 4);
    var durM = _pickFrom([0, 15, 30, 45]);
    var endM = startM + durM;
    var endH = startH + durH + Math.floor(endM / 60);
    endM = endM % 60;
    var pad = function(n){return n<10?'0'+n:n;};
    var ans = pad(endH) + ':' + pad(endM);
    var opts = [ans, pad(endH - 1) + ':' + pad(endM), pad(startH + durH) + ':' + pad(startM), pad(endH) + ':' + pad((endM + 15)%60)];
    return { q: 'A film starts at ' + pad(startH) + ':' + pad(startM) + ' and lasts ' + durH + 'h ' + durM + 'min. When does it end?', opts: opts, c: 0,
             e: pad(startH) + ':' + pad(startM) + ' + ' + durH + 'h ' + durM + 'min = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var startH = _randInt(7, 12);
    var startM = _randInt(0, 3) * 15;
    var endH = startH + _randInt(1, 5);
    var endM = _randInt(0, 3) * 15;
    var totalMin = (endH - startH) * 60 + (endM - startM);
    if (totalMin < 0) { endH += 1; totalMin += 60; }
    var h = Math.floor(totalMin / 60);
    var m = totalMin % 60;
    var pad = function(n){return n<10?'0'+n:n;};
    var ans = h + 'h ' + m + 'min';
    var opts = [ans, (h + 1) + 'h ' + m + 'min', h + 'h ' + (m + 15) + 'min', (h - 1) + 'h ' + (m + 60) + 'min'];
    return { q: 'How long from ' + pad(startH) + ':' + pad(startM) + ' to ' + pad(endH) + ':' + pad(endM) + '?', opts: opts, c: 0,
             e: 'Elapsed = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var hours = _randInt(1, 5);
    var mins = hours * 60;
    var opts = _buildOpts(mins + ' minutes', [(hours * 100) + ' minutes', (hours * 30) + ' minutes', (mins + 60) + ' minutes']);
    return { q: 'Convert ' + hours + ' hours to minutes.', opts: opts, c: 0,
             e: hours + ' × 60 = ' + mins + ' minutes.' };
  }},
  { depth: 'medium', gen: function() {
    var mins = _pickFrom([90, 120, 150, 180, 210, 240]);
    var h = Math.floor(mins / 60);
    var m = mins % 60;
    var ans = h + 'h ' + m + 'min';
    var opts = [ans, (h + 1) + 'h ' + m + 'min', h + 'h', (mins / 60).toFixed(1) + ' hours'];
    return { q: 'Convert ' + mins + ' minutes to hours and minutes.', opts: opts, c: 0,
             e: mins + ' ÷ 60 = ' + h + ' remainder ' + m + '. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var endH = _randInt(14, 18);
    var endM = _randInt(0, 3) * 15;
    var durH = _randInt(1, 4);
    var durM = _pickFrom([0, 15, 30, 45]);
    var startM = endM - durM;
    var startH = endH - durH;
    if (startM < 0) { startM += 60; startH--; }
    var pad = function(n){return n<10?'0'+n:n;};
    var ans = pad(startH) + ':' + pad(startM);
    var opts = [ans, pad(startH + 1) + ':' + pad(startM), pad(endH - durH) + ':' + pad(endM), pad(startH) + ':' + pad((startM + 15) % 60)];
    return { q: 'A journey ends at ' + pad(endH) + ':' + pad(endM) + ' and took ' + durH + 'h ' + durM + 'min. When did it start?', opts: opts, c: 0,
             e: pad(endH) + ':' + pad(endM) + ' − ' + durH + 'h ' + durM + 'min = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var days = _randInt(1, 5);
    var hours = _randInt(1, 12);
    var totalH = days * 24 + hours;
    var opts = _buildOpts(totalH + ' hours', [(days * 24) + ' hours', (days + hours) + ' hours', (totalH + 24) + ' hours']);
    return { q: 'Convert ' + days + ' days and ' + hours + ' hours to hours.', opts: opts, c: 0,
             e: days + ' × 24 + ' + hours + ' = ' + totalH + ' hours.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var legs = [_randInt(30, 120), _randInt(15, 90), _randInt(20, 60)];
    var wait = _randInt(10, 45);
    var totalMin = legs[0] + legs[1] + legs[2] + wait * 2;
    var h = Math.floor(totalMin / 60);
    var m = totalMin % 60;
    var ans = h + 'h ' + m + 'min';
    var opts = [ans, (h + 1) + 'h ' + m + 'min', Math.floor((legs[0]+legs[1]+legs[2])/60) + 'h', totalMin + ' min'];
    return { q: 'A journey has 3 legs: ' + legs[0] + 'min, ' + legs[1] + 'min, ' + legs[2] + 'min, with ' + wait + 'min waits between each. Total time?', opts: opts, c: 0,
             e: 'Travel = ' + (legs[0]+legs[1]+legs[2]) + 'min. Waits = ' + (wait*2) + 'min. Total = ' + totalMin + 'min = ' + ans + '.' };
  }}
];

// ── mi-19-2: 12-Hour & 24-Hour Time ─────────────────────────────────────
TEST_GENERATORS["mi-19-2"] = [
  { depth: 'medium', gen: function() {
    var h = _randInt(1, 11);
    var m = _randInt(0, 3) * 15;
    var pad = function(n){return n<10?'0'+n:n;};
    var h24 = h;
    var ans = pad(h24) + ':' + pad(m);
    var opts = [ans, pad(h24 + 12) + ':' + pad(m), pad(h24 + 1) + ':' + pad(m), '00:' + pad(m)];
    return { q: 'Convert ' + h + ':' + pad(m) + ' am to 24-hour time.', opts: opts, c: 0,
             e: h + ':' + pad(m) + ' am = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var h = _randInt(1, 11);
    var m = _randInt(0, 3) * 15;
    var pad = function(n){return n<10?'0'+n:n;};
    var h24 = h + 12;
    var ans = pad(h24) + ':' + pad(m);
    var opts = [ans, pad(h) + ':' + pad(m), pad(h24 - 1) + ':' + pad(m), '00:' + pad(m)];
    return { q: 'Convert ' + h + ':' + pad(m) + ' pm to 24-hour time.', opts: opts, c: 0,
             e: h + ':' + pad(m) + ' pm = ' + ans + '. Add 12 to the hour.' };
  }},
  { depth: 'medium', gen: function() {
    var h24 = _randInt(13, 23);
    var m = _randInt(0, 3) * 15;
    var pad = function(n){return n<10?'0'+n:n;};
    var h12 = h24 - 12;
    var ans = h12 + ':' + pad(m) + ' pm';
    var opts = [ans, h12 + ':' + pad(m) + ' am', h24 + ':' + pad(m) + ' pm', (h12 + 1) + ':' + pad(m) + ' pm'];
    return { q: 'Convert ' + pad(h24) + ':' + pad(m) + ' to 12-hour time.', opts: opts, c: 0,
             e: pad(h24) + ':' + pad(m) + ' = ' + ans + '. Subtract 12 from hour, add pm.' };
  }},
  { depth: 'medium', gen: function() {
    var h24 = _randInt(1, 11);
    var m = _randInt(0, 3) * 15;
    var pad = function(n){return n<10?'0'+n:n;};
    var ans = h24 + ':' + pad(m) + ' am';
    var opts = [ans, h24 + ':' + pad(m) + ' pm', (h24 + 12) + ':' + pad(m) + ' pm', '12:' + pad(m) + ' am'];
    return { q: 'Convert ' + pad(h24) + ':' + pad(m) + ' to 12-hour time.', opts: opts, c: 0,
             e: pad(h24) + ':' + pad(m) + ' is morning. Answer: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var ans24 = '00:00';
    var opts = [ans24, '12:00', '24:00', '00:12'];
    return { q: 'What is 12:00 am (midnight) in 24-hour time?', opts: opts, c: 0,
             e: '12:00 am (midnight) = 00:00 in 24-hour time.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var times = [
      { t12: '12:30 pm', t24: '12:30' },
      { t12: '12:45 am', t24: '00:45' },
      { t12: '12:15 pm', t24: '12:15' }
    ];
    var pick = _pickFrom(times);
    var opts = [pick.t24, pick.t24 === '12:30' ? '00:30' : '12:45', '24:' + pick.t24.split(':')[1], pick.t12.replace(' pm','').replace(' am','')];
    return { q: 'Convert ' + pick.t12 + ' to 24-hour time.', opts: opts, c: 0,
             e: pick.t12 + ' = ' + pick.t24 + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var depart = _randInt(6, 10);
    var departM = _pickFrom([0, 15, 30, 45]);
    var dur = _randInt(2, 6);
    var durM = _pickFrom([0, 10, 20, 40]);
    var arrH = depart + dur + Math.floor((departM + durM) / 60);
    var arrM = (departM + durM) % 60;
    var period = arrH >= 12 ? 'pm' : 'am';
    var display = arrH > 12 ? arrH - 12 : arrH;
    var ans = display + ':' + pad(arrM) + ' ' + period;
    var opts = [ans, display + ':' + pad(arrM) + ' ' + (period === 'pm' ? 'am' : 'pm'), pad(arrH) + ':' + pad(arrM), (display + 1) + ':' + pad(arrM) + ' ' + period];
    return { q: 'A train departs at ' + pad(depart) + ':' + pad(departM) + ' and takes ' + dur + 'h ' + durM + 'min. What time does it arrive (12-hour)?', opts: opts, c: 0,
             e: pad(depart) + ':' + pad(departM) + ' + ' + dur + 'h ' + durM + 'min = ' + pad(arrH) + ':' + pad(arrM) + ' = ' + ans + '.' };
  }}
];

// ── mi-19-3: Time Zones & Schedules ──────────────────────────────────────
TEST_GENERATORS["mi-19-3"] = [
  { depth: 'medium', gen: function() {
    var ukH = _randInt(8, 18);
    var diff = _pickFrom([1, 2, 3, 5, 8]);
    var pad = function(n){return n<10?'0'+n:n;};
    var localH = ukH + diff;
    if (localH >= 24) localH -= 24;
    var city = _pickFrom(['Paris (+' + 1 + ')', 'Cairo (+' + 2 + ')', 'Moscow (+' + 3 + ')', 'New York (−5)', 'Tokyo (+9)']);
    diff = parseInt(city.match(/[+-]\d+/)[0]);
    localH = ukH + diff;
    if (localH >= 24) localH -= 24;
    if (localH < 0) localH += 24;
    var ans = pad(localH) + ':00';
    var opts = [ans, pad(ukH) + ':00', pad((localH + 1) % 24) + ':00', pad(Math.abs(localH - 2)) + ':00'];
    return { q: 'It is ' + pad(ukH) + ':00 in London. What time is it in ' + city + '?', opts: opts, c: 0,
             e: pad(ukH) + ':00 ' + (diff >= 0 ? '+' : '') + diff + 'h = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var times = [pad(_randInt(6, 9)) + ':' + pad(_pickFrom([0,15,30,45])),
                 pad(_randInt(10, 13)) + ':' + pad(_pickFrom([0,15,30,45])),
                 pad(_randInt(14, 17)) + ':' + pad(_pickFrom([0,15,30,45]))];
    var pick = _randInt(0, 2);
    var opts = [times[pick], times[(pick + 1) % 3], times[(pick + 2) % 3], '18:00'];
    return { q: 'A bus timetable shows departures at ' + times.join(', ') + '. Which is the ' + ['first', 'second', 'third'][pick] + ' bus?', opts: opts, c: 0,
             e: 'The ' + ['first', 'second', 'third'][pick] + ' bus departs at ' + times[pick] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var dep = _randInt(7, 10);
    var depM = _pickFrom([0, 15, 30]);
    var arrH = dep + _randInt(1, 3);
    var arrM = depM + _pickFrom([10, 20, 30, 45]);
    if (arrM >= 60) { arrH++; arrM -= 60; }
    var durMin = (arrH - dep) * 60 + (arrM - depM);
    var h = Math.floor(durMin / 60), m = durMin % 60;
    var ans = h + 'h ' + m + 'min';
    var opts = [ans, (h + 1) + 'h ' + m + 'min', h + 'h', durMin + 'h'];
    return { q: 'A train departs at ' + pad(dep) + ':' + pad(depM) + ' and arrives at ' + pad(arrH) + ':' + pad(arrM) + '. How long is the journey?', opts: opts, c: 0,
             e: 'Duration = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var dep = _randInt(8, 12);
    var dur = _randInt(1, 3);
    var durM = _pickFrom([0, 15, 30]);
    var arrH = dep + dur;
    var arrM = durM;
    var wait = _randInt(10, 30);
    var dep2H = arrH;
    var dep2M = arrM + wait;
    if (dep2M >= 60) { dep2H++; dep2M -= 60; }
    var ans = pad(dep2H) + ':' + pad(dep2M);
    var opts = [ans, pad(arrH) + ':' + pad(arrM), pad(dep2H + 1) + ':' + pad(dep2M), pad(dep) + ':' + pad(wait)];
    return { q: 'A train arrives at ' + pad(arrH) + ':' + pad(arrM) + '. The connecting bus leaves ' + wait + ' min later. When does the bus depart?', opts: opts, c: 0,
             e: pad(arrH) + ':' + pad(arrM) + ' + ' + wait + 'min = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var ukH = _randInt(10, 20);
    var diff = -_pickFrom([5, 6, 7, 8]);
    var localH = ukH + diff;
    if (localH < 0) localH += 24;
    var city = 'a city at UTC' + diff;
    var ans = pad(localH) + ':00';
    var opts = [ans, pad(ukH + Math.abs(diff)) + ':00', pad(ukH) + ':00', pad((localH + 12) % 24) + ':00'];
    return { q: 'It is ' + pad(ukH) + ':00 UTC. What time is it in ' + city + '?', opts: opts, c: 0,
             e: pad(ukH) + ':00 + (' + diff + ') = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var depH = _randInt(7, 11);
    var depM = _pickFrom([0, 15, 30]);
    var flights = [
      { dur: _randInt(60, 180), tz: _randInt(1, 4) },
    ];
    var f = flights[0];
    var arrMin = depH * 60 + depM + f.dur;
    var arrLocalMin = arrMin + f.tz * 60;
    var arrH = Math.floor(arrLocalMin / 60) % 24;
    var arrM = arrLocalMin % 60;
    var ans = pad(arrH) + ':' + pad(arrM);
    var dH = Math.floor(f.dur / 60), dM = f.dur % 60;
    var opts = [ans, pad(Math.floor(arrMin / 60) % 24) + ':' + pad(arrMin % 60), pad((arrH + 1) % 24) + ':' + pad(arrM), pad(arrH) + ':' + pad((arrM + 30) % 60)];
    return { q: 'A flight departs at ' + pad(depH) + ':' + pad(depM) + ' UK time and takes ' + dH + 'h ' + dM + 'min. Destination is UTC+' + f.tz + '. What local time does it arrive?', opts: opts, c: 0,
             e: 'Arrive UK time: ' + pad(Math.floor(arrMin/60)%24) + ':' + pad(arrMin%60) + '. Add ' + f.tz + 'h: ' + ans + ' local.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pad = function(n){return n<10?'0'+n:n;};
    var buses = [];
    var startH = _randInt(6, 8);
    var startM = _randInt(0, 15);
    var interval = _pickFrom([15, 20, 30, 40]);
    for (var i = 0; i < 5; i++) {
      var totalM = startH * 60 + startM + i * interval;
      buses.push(pad(Math.floor(totalM / 60)) + ':' + pad(totalM % 60));
    }
    var arriveM = startH * 60 + startM + _randInt(interval, interval * 3);
    var arrH = Math.floor(arriveM / 60);
    var arrM_val = arriveM % 60;
    var nextBus = buses.find(function(b) {
      var parts = b.split(':');
      return parseInt(parts[0]) * 60 + parseInt(parts[1]) >= arriveM;
    }) || buses[buses.length - 1];
    var opts = [nextBus, buses[0], buses[buses.length - 1], buses[1]];
    return { q: 'Buses leave at ' + buses.join(', ') + '. You arrive at the stop at ' + pad(arrH) + ':' + pad(arrM_val) + '. Which is the next bus?', opts: opts, c: 0,
             e: 'You arrive at ' + pad(arrH) + ':' + pad(arrM_val) + '. The next bus after that is ' + nextBus + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// COORDINATE PLANE (mt-20) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-20-1: Plot Points on a Coordinate Plane ──────────────────────────
TEST_GENERATORS["mi-20-1"] = [
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 10), y = _randInt(1, 10);
    var opts = ['(' + x + ', ' + y + ')', '(' + y + ', ' + x + ')', '(' + x + ', ' + (-y) + ')', '(' + (-x) + ', ' + y + ')'];
    return { q: 'A point is ' + x + ' units right and ' + y + ' units up from the origin. What are its coordinates?', opts: opts, c: 0,
             e: 'Right = positive x, Up = positive y. Coordinates: (' + x + ', ' + y + ').' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 8), y = _randInt(1, 8);
    var opts = ['x = ' + x + ', y = ' + y, 'x = ' + y + ', y = ' + x, 'x = ' + (-x) + ', y = ' + y, 'x = ' + x + ', y = ' + (-y)];
    return { q: 'Point P is at (' + x + ', ' + y + '). What are its x and y values?', opts: opts, c: 0,
             e: 'In (' + x + ', ' + y + '), x = ' + x + ' and y = ' + y + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(-8, -1), y = _randInt(1, 8);
    var opts = ['(' + x + ', ' + y + ')', '(' + (-x) + ', ' + y + ')', '(' + x + ', ' + (-y) + ')', '(' + y + ', ' + x + ')'];
    return { q: 'A point is ' + Math.abs(x) + ' units left and ' + y + ' units up from the origin. Coordinates?', opts: opts, c: 0,
             e: 'Left = negative x. Coordinates: (' + x + ', ' + y + ').' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 8), y = _randInt(-8, -1);
    var opts = ['(' + x + ', ' + y + ')', '(' + x + ', ' + (-y) + ')', '(' + (-x) + ', ' + y + ')', '(' + y + ', ' + x + ')'];
    return { q: 'A point is ' + x + ' units right and ' + Math.abs(y) + ' units down from the origin. Coordinates?', opts: opts, c: 0,
             e: 'Down = negative y. Coordinates: (' + x + ', ' + y + ').' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(-8, -1), y = _randInt(-8, -1);
    var opts = ['(' + x + ', ' + y + ')', '(' + (-x) + ', ' + (-y) + ')', '(' + x + ', ' + (-y) + ')', '(' + (-x) + ', ' + y + ')'];
    return { q: 'A point is ' + Math.abs(x) + ' units left and ' + Math.abs(y) + ' units down from the origin. Coordinates?', opts: opts, c: 0,
             e: 'Left = negative x, Down = negative y. Coordinates: (' + x + ', ' + y + ').' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x1 = _randInt(1, 6), y1 = _randInt(1, 6);
    var x2 = _randInt(1, 6), y2 = _randInt(1, 6);
    while (x1 === x2 && y1 === y2) { x2 = _randInt(1, 6); }
    var mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    var opts = ['(' + mx + ', ' + my + ')', '(' + (x1 + x2) + ', ' + (y1 + y2) + ')', '(' + Math.abs(x2 - x1) + ', ' + Math.abs(y2 - y1) + ')', '(' + x1 + ', ' + y2 + ')'];
    return { q: 'Find the midpoint of (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').', opts: opts, c: 0,
             e: 'Midpoint = ((' + x1 + '+' + x2 + ')/2, (' + y1 + '+' + y2 + ')/2) = (' + mx + ', ' + my + ').' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pts = [
      { x: _randInt(-5, 5), y: _randInt(-5, 5) },
      { x: _randInt(-5, 5), y: _randInt(-5, 5) },
      { x: _randInt(-5, 5), y: _randInt(-5, 5) }
    ];
    var onAxis = pts.filter(function(p) { return p.x === 0 || p.y === 0; });
    pts[0].x = 0; pts[0].y = _randInt(1, 6);
    var ans = '(' + pts[0].x + ', ' + pts[0].y + ')';
    var opts = [ans, '(' + pts[1].x + ', ' + pts[1].y + ')', '(' + pts[2].x + ', ' + pts[2].y + ')', '(' + pts[0].y + ', ' + pts[0].x + ')'];
    return { q: 'Which point lies on the y-axis: (' + pts[0].x + ', ' + pts[0].y + '), (' + pts[1].x + ', ' + pts[1].y + '), or (' + pts[2].x + ', ' + pts[2].y + ')?', opts: opts, c: 0,
             e: 'A point is on the y-axis when x = 0. ' + ans + ' has x = 0.' };
  }}
];

// ── mi-20-2: Quadrants & Axes ────────────────────────────────────────────
TEST_GENERATORS["mi-20-2"] = [
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 8), y = _randInt(1, 8);
    var opts = ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'];
    return { q: 'In which quadrant is (' + x + ', ' + y + ')?', opts: opts, c: 0,
             e: 'Both x and y are positive → Quadrant I.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(-8, -1), y = _randInt(1, 8);
    var opts = ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'];
    return { q: 'In which quadrant is (' + x + ', ' + y + ')?', opts: opts, c: 0,
             e: 'x negative, y positive → Quadrant II.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(-8, -1), y = _randInt(-8, -1);
    var opts = ['Quadrant III', 'Quadrant I', 'Quadrant II', 'Quadrant IV'];
    return { q: 'In which quadrant is (' + x + ', ' + y + ')?', opts: opts, c: 0,
             e: 'Both negative → Quadrant III.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 8), y = _randInt(-8, -1);
    var opts = ['Quadrant IV', 'Quadrant I', 'Quadrant II', 'Quadrant III'];
    return { q: 'In which quadrant is (' + x + ', ' + y + ')?', opts: opts, c: 0,
             e: 'x positive, y negative → Quadrant IV.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var quadrant = _pickFrom(['I', 'II', 'III', 'IV']);
    var signs = { 'I': '(+, +)', 'II': '(−, +)', 'III': '(−, −)', 'IV': '(+, −)' };
    var ans = signs[quadrant];
    var opts = [ans, signs[quadrant === 'I' ? 'II' : 'I'], signs[quadrant === 'III' ? 'IV' : 'III'], '(0, 0)'];
    return { q: 'What are the signs of coordinates in Quadrant ' + quadrant + '?', opts: opts, c: 0,
             e: 'Quadrant ' + quadrant + ' has signs ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var y = _randInt(-8, 8);
    while (y === 0) y = _randInt(-8, 8);
    var opts = ['On the y-axis', 'On the x-axis', 'Quadrant I', 'At the origin'];
    return { q: 'Where is the point (0, ' + y + ')?', opts: opts, c: 0,
             e: 'x = 0 means the point is on the y-axis.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(-6, 6), y = _randInt(-6, 6);
    while (x === 0 || y === 0) { x = _randInt(-6, 6); y = _randInt(-6, 6); }
    var reflected = '(' + (-x) + ', ' + y + ')';
    var opts = [reflected, '(' + x + ', ' + (-y) + ')', '(' + (-x) + ', ' + (-y) + ')', '(' + y + ', ' + x + ')'];
    return { q: 'Reflect (' + x + ', ' + y + ') in the y-axis. What are the new coordinates?', opts: opts, c: 0,
             e: 'Reflecting in y-axis: negate x. (' + x + ', ' + y + ') → ' + reflected + '.' };
  }}
];

// ── mi-20-3: Coordinate Maps & Directions ────────────────────────────────
TEST_GENERATORS["mi-20-3"] = [
  { depth: 'medium', gen: function() {
    var x1 = _randInt(1, 8), y1 = _randInt(1, 8);
    var dx = _randInt(1, 5), dy = _randInt(1, 5);
    var x2 = x1 + dx, y2 = y1 + dy;
    var opts = ['(' + x2 + ', ' + y2 + ')', '(' + (x1 - dx) + ', ' + (y1 - dy) + ')', '(' + x2 + ', ' + y1 + ')', '(' + x1 + ', ' + y2 + ')'];
    return { q: 'From (' + x1 + ', ' + y1 + '), move ' + dx + ' right and ' + dy + ' up. Where are you?', opts: opts, c: 0,
             e: '(' + x1 + '+' + dx + ', ' + y1 + '+' + dy + ') = (' + x2 + ', ' + y2 + ').' };
  }},
  { depth: 'medium', gen: function() {
    var x1 = _randInt(3, 8), y1 = _randInt(3, 8);
    var dx = _randInt(1, 4), dy = _randInt(1, 4);
    var x2 = x1 - dx, y2 = y1 - dy;
    var opts = ['(' + x2 + ', ' + y2 + ')', '(' + (x1 + dx) + ', ' + (y1 + dy) + ')', '(' + x2 + ', ' + y1 + ')', '(' + x1 + ', ' + y2 + ')'];
    return { q: 'From (' + x1 + ', ' + y1 + '), move ' + dx + ' left and ' + dy + ' down. Where are you?', opts: opts, c: 0,
             e: '(' + x1 + '−' + dx + ', ' + y1 + '−' + dy + ') = (' + x2 + ', ' + y2 + ').' };
  }},
  { depth: 'medium', gen: function() {
    var x1 = _randInt(1, 6), y1 = _randInt(1, 6);
    var x2 = _randInt(1, 6), y2 = y1;
    while (x2 === x1) x2 = _randInt(1, 6);
    var dist = Math.abs(x2 - x1);
    var opts = _buildOpts(dist + ' units', [(dist + 1) + ' units', Math.abs(y2 - y1) + ' units', (x1 + x2) + ' units']);
    return { q: 'What is the horizontal distance between (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ')?', opts: opts, c: 0,
             e: 'Horizontal distance = |' + x1 + ' − ' + x2 + '| = ' + dist + ' units.' };
  }},
  { depth: 'medium', gen: function() {
    var x1 = _randInt(1, 6), y1 = _randInt(1, 6);
    var x2 = x1, y2 = _randInt(1, 6);
    while (y2 === y1) y2 = _randInt(1, 6);
    var dist = Math.abs(y2 - y1);
    var opts = _buildOpts(dist + ' units', [(dist + 1) + ' units', Math.abs(x2 - x1) + ' units', (y1 + y2) + ' units']);
    return { q: 'What is the vertical distance between (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ')?', opts: opts, c: 0,
             e: 'Vertical distance = |' + y1 + ' − ' + y2 + '| = ' + dist + ' units.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x1 = _randInt(1, 6), y1 = _randInt(1, 6);
    var x2 = x1 + _randInt(1, 5), y2 = y1 + _randInt(1, 5);
    var dx = x2 - x1, dy = y2 - y1;
    var ans = dx + ' right, ' + dy + ' up';
    var opts = [ans, dy + ' right, ' + dx + ' up', dx + ' left, ' + dy + ' down', dx + ' right, ' + dy + ' down'];
    return { q: 'Describe the movement from (' + x1 + ', ' + y1 + ') to (' + x2 + ', ' + y2 + ').', opts: opts, c: 0,
             e: 'x changes by +' + dx + ' (right), y changes by +' + dy + ' (up). ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x1 = _randInt(0, 5), y1 = _randInt(0, 5);
    var x2 = x1 + _randInt(3, 6), y2 = y1;
    var x3 = x2, y3 = y1 + _randInt(3, 6);
    var base = x2 - x1, height = y3 - y1;
    var perimeter = base + height + base + height;
    var opts = _buildOpts(perimeter + ' units', [(base * height) + ' units', (base + height) + ' units', (perimeter + 2) + ' units']);
    return { q: 'A rectangle has corners at (' + x1 + ',' + y1 + '), (' + x2 + ',' + y2 + '), (' + x2 + ',' + y3 + '), (' + x1 + ',' + y3 + '). Find its perimeter.', opts: opts, c: 0,
             e: 'Width = ' + base + ', Height = ' + height + '. Perimeter = 2(' + base + '+' + height + ') = ' + perimeter + ' units.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x1 = _randInt(0, 4), y1 = _randInt(0, 4);
    var side = _randInt(2, 5);
    var x2 = x1 + side, y2 = y1;
    var x3 = x2, y3 = y1 + side;
    var x4 = x1, y4 = y3;
    var area = side * side;
    var opts = _buildOpts(area + ' sq units', [(side * 4) + ' sq units', (side + side) + ' sq units', (area + side) + ' sq units']);
    return { q: 'A square has corners at (' + x1 + ',' + y1 + '), (' + x2 + ',' + y2 + '), (' + x3 + ',' + y3 + '), (' + x4 + ',' + y4 + '). Find its area.', opts: opts, c: 0,
             e: 'Side = ' + side + '. Area = ' + side + '² = ' + area + ' sq units.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// NUMBER SEQUENCES (mt-21) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-21-1: Arithmetic Sequences ────────────────────────────────────────
TEST_GENERATORS["mi-21-1"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 15);
    var d = _randInt(2, 9);
    var seq = [a, a+d, a+2*d, a+3*d];
    var ans = a + 4*d;
    var opts = _buildOpts(ans, [a + 5*d, ans + 1, a + 3*d + 1]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common difference = ' + d + '. Next = ' + seq[3] + ' + ' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(40, 100);
    var d = _randInt(3, 10);
    var seq = [a, a-d, a-2*d, a-3*d];
    var ans = a - 4*d;
    var opts = _buildOpts(ans, [a - 5*d, ans - 1, a - 3*d]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common difference = −' + d + '. Next = ' + seq[3] + ' − ' + d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 10);
    var d = _randInt(2, 8);
    var seq = [a, a+d, a+2*d, a+3*d, a+4*d];
    var opts = _buildOpts(d, [a, seq[4], d + 1]);
    return { q: 'What is the common difference of: ' + seq.join(', ') + '?', opts: opts, c: 0,
             e: seq[1] + ' − ' + seq[0] + ' = ' + d + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 10);
    var d = _randInt(2, 7);
    var n = _randInt(8, 15);
    var ans = a + (n-1)*d;
    var opts = _buildOpts(ans, [a + n*d, ans + d, a * n]);
    return { q: 'First term = ' + a + ', common difference = ' + d + '. Find the ' + n + 'th term.', opts: opts, c: 0,
             e: 'nth term = ' + a + ' + (' + n + '−1)×' + d + ' = ' + a + ' + ' + ((n-1)*d) + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 8);
    var d = _randInt(2, 7);
    var rule = d + 'n + ' + (a - d);
    if (a - d === 0) rule = d + 'n';
    if (a - d < 0) rule = d + 'n − ' + Math.abs(a - d);
    var seq = [a, a+d, a+2*d, a+3*d];
    var opts = [rule, d + 'n + ' + a, a + 'n + ' + d, (a+d) + 'n'];
    return { q: 'Find the nth-term rule: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'd = ' + d + '. nth term = ' + d + 'n + (' + a + '−' + d + ') = ' + rule + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-10, -1);
    var d = _randInt(2, 6);
    var seq = [a, a+d, a+2*d, a+3*d];
    var ans = a + 4*d;
    var opts = _buildOpts(ans, [a + 5*d, ans - d, a - d]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common difference = ' + d + '. Next = ' + seq[3] + ' + ' + d + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(3, 8);
    var c = _randInt(-5, 10);
    var target = _randInt(40, 80);
    var n = (target - c) / d;
    while (n !== Math.floor(n) || n < 3) { target++; n = (target - c) / d; }
    var rule = c >= 0 ? d + 'n + ' + c : d + 'n − ' + Math.abs(c);
    var opts = _buildOpts(n, [n + 1, target / d, n - 1]);
    return { q: 'The nth term is ' + rule + '. Which term equals ' + target + '?', opts: opts, c: 0,
             e: target + ' = ' + rule + '. ' + d + 'n = ' + (target - c) + '. n = ' + n + '.' };
  }}
];

// ── mi-21-2: Geometric Sequences ─────────────────────────────────────────
TEST_GENERATORS["mi-21-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 5);
    var r = _pickFrom([2, 3, 4, 5]);
    var seq = [a, a*r, a*r*r, a*r*r*r];
    var ans = a*r*r*r*r;
    var opts = _buildOpts(ans, [seq[3] + r, seq[3] * 2, ans + r]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common ratio = ' + r + '. Next = ' + seq[3] + ' × ' + r + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _pickFrom([128, 256, 512, 1000, 800]);
    var r = _pickFrom([2, 4, 5]);
    var seq = [a, a/r, a/(r*r), a/(r*r*r)];
    var ans = a / (r*r*r*r);
    while (ans !== Math.floor(ans)) { a = a * r; seq = [a, a/r, a/(r*r), a/(r*r*r)]; ans = a/(r*r*r*r); }
    var opts = _buildOpts(ans, [seq[3] - r, ans * r, seq[3] / 2]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common ratio = 1/' + r + ' (dividing by ' + r + '). Next = ' + seq[3] + ' ÷ ' + r + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6);
    var r = _pickFrom([2, 3, 5, 10]);
    var seq = [a, a*r, a*r*r, a*r*r*r, a*r*r*r*r];
    var opts = _buildOpts(r, [a, r + 1, seq[1]]);
    return { q: 'What is the common ratio of: ' + seq.join(', ') + '?', opts: opts, c: 0,
             e: seq[1] + ' ÷ ' + seq[0] + ' = ' + r + '.' };
  }},
  { depth: 'medium', gen: function() {
    var seqs = [
      { s: [3, 6, 12, 24], type: 'Geometric' },
      { s: [5, 10, 15, 20], type: 'Arithmetic' },
      { s: [2, 6, 18, 54], type: 'Geometric' },
      { s: [4, 7, 10, 13], type: 'Arithmetic' }
    ];
    var pick = _pickFrom(seqs);
    var opts = [pick.type, pick.type === 'Geometric' ? 'Arithmetic' : 'Geometric', 'Neither', 'Both'];
    return { q: 'Is this arithmetic or geometric: ' + pick.s.join(', ') + '?', opts: opts, c: 0,
             e: (pick.type === 'Geometric' ? 'Constant ratio' : 'Constant difference') + ' → ' + pick.type + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 3);
    var r = _pickFrom([2, 3]);
    var n = _randInt(5, 8);
    var ans = a * Math.pow(r, n-1);
    var opts = _buildOpts(ans, [a * Math.pow(r, n), ans + r, a * r * n]);
    return { q: 'Geometric sequence: first term ' + a + ', ratio ' + r + '. Find the ' + n + 'th term.', opts: opts, c: 0,
             e: 'nth term = ' + a + ' × ' + r + '^' + (n-1) + ' = ' + a + ' × ' + Math.pow(r, n-1) + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5);
    var r = _pickFrom([2, 3]);
    var terms = 4;
    var sum = 0;
    for (var i = 0; i < terms; i++) sum += a * Math.pow(r, i);
    var opts = _buildOpts(sum, [a * Math.pow(r, terms), sum + a, a * terms * r]);
    return { q: 'Find the sum of the first ' + terms + ' terms of: ' + a + ', ' + (a*r) + ', ' + (a*r*r) + ', ' + (a*r*r*r), opts: opts, c: 0,
             e: 'Sum = ' + a + ' + ' + (a*r) + ' + ' + (a*r*r) + ' + ' + (a*r*r*r) + ' = ' + sum + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 4);
    var r = -2;
    var seq = [a, a*r, a*r*r, a*r*r*r];
    var ans = a*r*r*r*r;
    var opts = _buildOpts(ans, [-ans, seq[3] * 2, seq[3] - 2]);
    return { q: 'Find the next term: ' + seq.join(', ') + ', …', opts: opts, c: 0,
             e: 'Common ratio = ' + r + '. Next = ' + seq[3] + ' × (' + r + ') = ' + ans + '.' };
  }}
];

// ── mi-21-3: Expressions for Sequences ───────────────────────────────────
TEST_GENERATORS["mi-21-3"] = [
  { depth: 'medium', gen: function() {
    var d = _randInt(2, 7);
    var c = _randInt(0, 5);
    var n = _randInt(5, 12);
    var ans = d * n + c;
    var rule = c === 0 ? d + 'n' : d + 'n + ' + c;
    var opts = _buildOpts(ans, [d * (n + 1) + c, d + n + c, ans + d]);
    return { q: 'If the nth term = ' + rule + ', find the ' + n + 'th term.', opts: opts, c: 0,
             e: d + '(' + n + ')' + (c > 0 ? ' + ' + c : '') + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _randInt(2, 6);
    var c = _randInt(-4, 8);
    var terms = [];
    for (var i = 1; i <= 4; i++) terms.push(d * i + c);
    var rule = c === 0 ? d + 'n' : (c > 0 ? d + 'n + ' + c : d + 'n − ' + Math.abs(c));
    var opts = [rule, d + 'n + ' + terms[0], (d + c) + 'n', terms[0] + 'n'];
    return { q: 'Find the nth-term rule for: ' + terms.join(', ') + ', …', opts: opts, c: 0,
             e: 'Difference = ' + d + '. Rule = ' + d + 'n + (first − ' + d + ') = ' + rule + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _randInt(2, 5);
    var c = _randInt(1, 6);
    var rule = d + 'n + ' + c;
    var n = 1;
    var first = d + c;
    var opts = _buildOpts(first, [d + c + d, d * c, c]);
    return { q: 'The nth term is ' + rule + '. What is the first term?', opts: opts, c: 0,
             e: 'Put n = 1: ' + d + '(1) + ' + c + ' = ' + first + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _randInt(3, 8);
    var c = _randInt(0, 5);
    var n = _randInt(10, 20);
    var ans = d * n + c;
    var rule = c === 0 ? d + 'n' : d + 'n + ' + c;
    var opts = _buildOpts(ans, [d * (n-1) + c, ans + 1, d + n]);
    return { q: 'Find the ' + n + 'th term if nth term = ' + rule + '.', opts: opts, c: 0,
             e: d + '(' + n + ')' + (c > 0 ? ' + ' + c : '') + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(2, 6);
    var c = _randInt(-5, 5);
    var target = _randInt(30, 60);
    var n = (target - c) / d;
    while (n !== Math.floor(n) || n < 3) { target++; n = (target - c) / d; }
    var rule = c >= 0 ? d + 'n + ' + c : d + 'n − ' + Math.abs(c);
    var opts = _buildOpts(n, [n + 1, target / d, n - 1]);
    return { q: 'nth term = ' + rule + '. Which term equals ' + target + '?', opts: opts, c: 0,
             e: target + ' = ' + rule + '. n = ' + n + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(2, 5);
    var c = _randInt(1, 8);
    var rule = c > 0 ? d + 'n + ' + c : d + 'n − ' + Math.abs(c);
    var t3 = d * 3 + c;
    var t7 = d * 7 + c;
    var diff = t7 - t3;
    var opts = _buildOpts(diff, [t7, t3, d * 4]);
    return { q: 'If nth term = ' + rule + ', what is the difference between the 7th and 3rd terms?', opts: opts, c: 0,
             e: '7th = ' + t7 + ', 3rd = ' + t3 + '. Difference = ' + diff + '. (Or simply 4d = ' + (4*d) + '.)' };
  }},
  { depth: 'greater-depth', gen: function() {
    var d = _randInt(2, 6);
    var c = _randInt(0, 5);
    var rule = c === 0 ? d + 'n' : d + 'n + ' + c;
    var n = _randInt(3, 6);
    var sum = 0;
    for (var i = 1; i <= n; i++) sum += d * i + c;
    var opts = _buildOpts(sum, [d * n + c, sum + d, n * (d + c)]);
    return { q: 'Find the sum of the first ' + n + ' terms if nth term = ' + rule + '.', opts: opts, c: 0,
             e: 'Terms: ' + Array.from({length: n}, function(_,i){return d*(i+1)+c;}).join(', ') + '. Sum = ' + sum + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// ALGEBRA: INEQUALITIES (mt-22) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-22-1: Graph Inequalities ──────────────────────────────────────────
TEST_GENERATORS["mi-22-1"] = [
  { depth: 'medium', gen: function() {
    var val = _randInt(1, 10);
    var type = _pickFrom(['<', '>', '≤', '≥']);
    var circle = (type === '<' || type === '>') ? 'open' : 'closed';
    var opts = [circle + ' circle at ' + val, (circle === 'open' ? 'closed' : 'open') + ' circle at ' + val, 'arrow at ' + val, 'no circle'];
    return { q: 'On a number line, how do you graph x ' + type + ' ' + val + ' at the boundary?', opts: opts, c: 0,
             e: type + ' uses a' + (circle === 'open' ? 'n open' : ' closed') + ' circle (value ' + (circle === 'open' ? 'not' : 'is') + ' included).' };
  }},
  { depth: 'medium', gen: function() {
    var val = _randInt(2, 12);
    var opts = ['x < ' + val, 'x > ' + val, 'x ≤ ' + val, 'x = ' + val];
    return { q: 'A number line shows an open circle at ' + val + ' with shading to the left. Write the inequality.', opts: opts, c: 0,
             e: 'Open circle = not included, left = less than. x < ' + val + '.' };
  }},
  { depth: 'medium', gen: function() {
    var val = _randInt(1, 8);
    var opts = ['x ≥ ' + val, 'x > ' + val, 'x ≤ ' + val, 'x < ' + val];
    return { q: 'A number line shows a closed circle at ' + val + ' with shading to the right. Write the inequality.', opts: opts, c: 0,
             e: 'Closed circle = included, right = greater. x ≥ ' + val + '.' };
  }},
  { depth: 'medium', gen: function() {
    var val = _randInt(3, 15);
    var desc = _pickFrom([
      { w: 'at least ' + val, ineq: 'x ≥ ' + val },
      { w: 'more than ' + val, ineq: 'x > ' + val },
      { w: 'at most ' + val, ineq: 'x ≤ ' + val },
      { w: 'fewer than ' + val, ineq: 'x < ' + val }
    ]);
    var others = ['x > ' + val, 'x < ' + val, 'x ≥ ' + val, 'x ≤ ' + val].filter(function(o){return o !== desc.ineq;});
    var opts = [desc.ineq, others[0], others[1], others[2]];
    return { q: 'Write as an inequality: "' + desc.w + '"', opts: opts, c: 0,
             e: '"' + desc.w + '" → ' + desc.ineq + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var low = _randInt(1, 5), high = low + _randInt(2, 6);
    var opts = [low + ' < x < ' + high, low + ' ≤ x ≤ ' + high, 'x > ' + low + ' and x > ' + high, low + ' ≤ x < ' + high];
    return { q: 'A number line has open circles at ' + low + ' and ' + high + ' with shading between. Write the inequality.', opts: opts, c: 0,
             e: 'Open circles, shading between: ' + low + ' < x < ' + high + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var low = _randInt(0, 4), high = low + _randInt(3, 7);
    var opts = [low + ' ≤ x ≤ ' + high, low + ' < x < ' + high, 'x ≤ ' + low + ' or x ≥ ' + high, low + ' ≤ x < ' + high];
    return { q: 'A number line has closed circles at ' + low + ' and ' + high + ' with shading between. Write the inequality.', opts: opts, c: 0,
             e: 'Closed circles, between: ' + low + ' ≤ x ≤ ' + high + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var val = _randInt(2, 8);
    var integers = [];
    for (var i = val; i <= val + 4; i++) integers.push(i);
    var count = integers.length;
    var opts = _buildOpts(count, [count + 1, count - 1, val]);
    return { q: 'How many integers satisfy ' + val + ' ≤ x ≤ ' + (val + 4) + '?', opts: opts, c: 0,
             e: 'Integers: ' + integers.join(', ') + '. Count = ' + count + '.' };
  }}
];

// ── mi-22-2: Solve One-Step Inequalities ─────────────────────────────────
TEST_GENERATORS["mi-22-2"] = [
  { depth: 'medium', gen: function() {
    var b = _randInt(3, 12);
    var rhs = _randInt(b + 2, 25);
    var ans = rhs - b;
    var opts = ['x < ' + ans, 'x > ' + ans, 'x ≤ ' + ans, 'x < ' + rhs];
    return { q: 'Solve: x + ' + b + ' < ' + rhs, opts: opts, c: 0,
             e: 'x < ' + rhs + ' − ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 8);
    var rhs = a * _randInt(2, 8);
    var ans = rhs / a;
    var opts = ['x ≥ ' + ans, 'x ≤ ' + ans, 'x > ' + ans, 'x ≥ ' + rhs];
    return { q: 'Solve: ' + a + 'x ≥ ' + rhs, opts: opts, c: 0,
             e: 'x ≥ ' + rhs + ' ÷ ' + a + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(2, 10);
    var rhs = _randInt(b + 3, 20);
    var ans = rhs + b;
    var opts = ['x > ' + ans, 'x < ' + ans, 'x > ' + rhs, 'x > ' + (ans - 1)];
    return { q: 'Solve: x − ' + b + ' > ' + rhs, opts: opts, c: 0,
             e: 'x > ' + rhs + ' + ' + b + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _pickFrom([2, 3, 4, 5]);
    var rhs = _randInt(2, 8);
    var ans = rhs * d;
    var opts = ['x ≤ ' + ans, 'x ≥ ' + ans, 'x < ' + ans, 'x ≤ ' + rhs];
    return { q: 'Solve: x ÷ ' + d + ' ≤ ' + rhs, opts: opts, c: 0,
             e: 'x ≤ ' + rhs + ' × ' + d + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = -_randInt(2, 6);
    var rhs = a * _randInt(2, 7);
    var ans = rhs / a;
    var opts = ['x ≤ ' + ans, 'x ≥ ' + ans, 'x < ' + ans, 'x ≤ ' + (-ans)];
    return { q: 'Solve: ' + a + 'x ≥ ' + rhs + ' (careful with the sign!)', opts: opts, c: 0,
             e: 'Divide by negative → flip inequality. x ≤ ' + rhs + ' ÷ (' + a + ') = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = -_randInt(2, 5);
    var rhs = _randInt(5, 20);
    var ans = rhs / a;
    while (ans !== Math.floor(ans)) { rhs++; ans = rhs / a; }
    var opts = ['x ≥ ' + ans, 'x ≤ ' + ans, 'x > ' + (-ans), 'x ≥ ' + rhs];
    return { q: 'Solve: ' + a + 'x ≤ ' + rhs, opts: opts, c: 0,
             e: 'Divide by ' + a + ' (negative) → flip. x ≥ ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 8);
    var rhs = a * _randInt(3, 9) + b;
    var ans = (rhs - b) / a;
    while (ans !== Math.floor(ans)) { rhs++; ans = (rhs - b) / a; }
    var opts = ['x > ' + ans, 'x < ' + ans, 'x ≥ ' + ans, 'x > ' + (rhs - b)];
    return { q: 'Solve: ' + a + 'x + ' + b + ' > ' + rhs, opts: opts, c: 0,
             e: a + 'x > ' + (rhs - b) + '. x > ' + ans + '.' };
  }}
];

// ── mi-22-3: Inequality Word Problems ────────────────────────────────────
TEST_GENERATORS["mi-22-3"] = [
  { depth: 'medium', gen: function() {
    var perItem = _randInt(3, 8);
    var budget = _randInt(20, 50);
    var max = Math.floor(budget / perItem);
    var opts = _buildOpts(max, [max + 1, budget / perItem, max - 1]);
    return { q: 'Pens cost £' + perItem + ' each. You have £' + budget + '. What is the maximum number you can buy?', opts: opts, c: 0,
             e: budget + ' ÷ ' + perItem + ' = ' + (budget/perItem).toFixed(1) + '. Maximum = ' + max + ' (round down).' };
  }},
  { depth: 'medium', gen: function() {
    var min_age = _randInt(12, 18);
    var opts = ['x ≥ ' + min_age, 'x > ' + min_age, 'x ≤ ' + min_age, 'x = ' + min_age];
    return { q: '"You must be at least ' + min_age + ' years old." Write as an inequality.', opts: opts, c: 0,
             e: '"At least" means ≥. x ≥ ' + min_age + '.' };
  }},
  { depth: 'medium', gen: function() {
    var max_weight = _pickFrom([20, 23, 25, 30]);
    var current = _randInt(10, max_weight - 5);
    var canAdd = max_weight - current;
    var opts = _buildOpts(canAdd + ' kg', [(max_weight - canAdd) + ' kg', max_weight + ' kg', (canAdd + 1) + ' kg']);
    return { q: 'A bag weighs ' + current + ' kg. Max allowed is ' + max_weight + ' kg. How much more can be added?', opts: opts, c: 0,
             e: max_weight + ' − ' + current + ' = ' + canAdd + ' kg.' };
  }},
  { depth: 'medium', gen: function() {
    var entry = _randInt(5, 12);
    var ride = _randInt(2, 5);
    var budget = _randInt(20, 40);
    var remaining = budget - entry;
    var maxRides = Math.floor(remaining / ride);
    var opts = _buildOpts(maxRides, [maxRides + 1, remaining, Math.ceil(remaining / ride)]);
    return { q: 'Theme park: £' + entry + ' entry + £' + ride + '/ride. With £' + budget + ', what is the max number of rides?', opts: opts, c: 0,
             e: 'After entry: £' + remaining + '. Rides: ' + remaining + ' ÷ ' + ride + ' = ' + maxRides + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var fixed = _randInt(20, 50);
    var perKm = _randInt(1, 4);
    var budget = _randInt(60, 120);
    var maxKm = Math.floor((budget - fixed) / perKm);
    var opts = _buildOpts(maxKm + ' km', [(budget - fixed) + ' km', maxKm + 1 + ' km', (budget / perKm) + ' km']);
    return { q: 'Taxi: £' + fixed + ' fixed + £' + perKm + '/km. Budget is £' + budget + '. Max distance?', opts: opts, c: 0,
             e: perKm + 'x + ' + fixed + ' ≤ ' + budget + '. x ≤ ' + ((budget - fixed) / perKm).toFixed(1) + '. Max = ' + maxKm + ' km.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var target = _randInt(60, 80);
    var scores = [_randInt(50, 90), _randInt(50, 90), _randInt(50, 90)];
    var sum = scores.reduce(function(a,b){return a+b;}, 0);
    var needed = target * 4 - sum;
    var opts = _buildOpts(needed, [target - sum, target * 4, sum / 3]);
    return { q: 'Your test scores are ' + scores.join(', ') + '. You need an average of at least ' + target + ' over 4 tests. What minimum score do you need?', opts: opts, c: 0,
             e: 'Need total ≥ ' + (target * 4) + '. Have ' + sum + '. Need ≥ ' + needed + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var monthCost = _randInt(8, 15);
    var yearCost = _randInt(80, 140);
    var breakEven = Math.ceil(yearCost / monthCost);
    var opts = _buildOpts(breakEven + ' months', [(breakEven - 1) + ' months', (breakEven + 1) + ' months', '12 months']);
    return { q: 'Monthly plan: £' + monthCost + '/month. Annual plan: £' + yearCost + '/year. After how many months is annual cheaper?', opts: opts, c: 0,
             e: monthCost + 'n > ' + yearCost + '. n > ' + (yearCost / monthCost).toFixed(1) + '. From month ' + breakEven + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// TWO-VARIABLE EQUATIONS (mt-23) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-23-1: Two-Variable Equations ──────────────────────────────────────
TEST_GENERATORS["mi-23-1"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 5), b = _randInt(1, 5);
    var x = _randInt(1, 8), y = a * x + b;
    var opts = ['Yes', 'No', 'Cannot tell', 'Only if x > 0'];
    return { q: 'Does (' + x + ', ' + y + ') satisfy y = ' + a + 'x + ' + b + '?', opts: opts, c: 0,
             e: a + '(' + x + ') + ' + b + ' = ' + (a*x+b) + ' = ' + y + '. Yes it does.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 5), b = _randInt(1, 8);
    var x = _randInt(1, 6), wrongY = a * x + b + _randInt(1, 3);
    var opts = ['No', 'Yes', 'Cannot tell', 'Need more info'];
    return { q: 'Does (' + x + ', ' + wrongY + ') satisfy y = ' + a + 'x + ' + b + '?', opts: opts, c: 0,
             e: a + '(' + x + ') + ' + b + ' = ' + (a*x+b) + ' ≠ ' + wrongY + '. No.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4), b = _randInt(0, 6);
    var x = _randInt(1, 8);
    var y = a * x + b;
    var opts = _buildOpts(y, [a * x, y + 1, x + b]);
    return { q: 'If y = ' + a + 'x + ' + b + ' and x = ' + x + ', find y.', opts: opts, c: 0,
             e: 'y = ' + a + '(' + x + ') + ' + b + ' = ' + y + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 6);
    var y = _randInt(10, 30);
    var x = (y - b) / a;
    while (x !== Math.floor(x) || x < 1) { y++; x = (y - b) / a; }
    var opts = _buildOpts(x, [y / a, y - b, x + 1]);
    return { q: 'If y = ' + a + 'x + ' + b + ' and y = ' + y + ', find x.', opts: opts, c: 0,
             e: y + ' = ' + a + 'x + ' + b + '. ' + a + 'x = ' + (y-b) + '. x = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 4), b = _randInt(1, 3);
    var x = _randInt(0, 5);
    var y = a * x + b;
    var pairs = [[x, y], [x + 1, a*(x+1)+b], [x + 2, a*(x+2)+b]];
    var wrong = [x, y + 1];
    var all = [pairs[0], pairs[1], pairs[2], wrong];
    var ansIdx = 3;
    var opts = ['(' + wrong[0] + ', ' + wrong[1] + ')', '(' + pairs[0][0] + ', ' + pairs[0][1] + ')', '(' + pairs[1][0] + ', ' + pairs[1][1] + ')', '(' + pairs[2][0] + ', ' + pairs[2][1] + ')'];
    return { q: 'Which pair does NOT satisfy y = ' + a + 'x + ' + b + '?', opts: opts, c: 0,
             e: 'Check: ' + a + '(' + wrong[0] + ') + ' + b + ' = ' + (a*wrong[0]+b) + ' ≠ ' + wrong[1] + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var cost = _randInt(2, 5);
    var fee = _randInt(3, 10);
    var n = _randInt(3, 10);
    var total = cost * n + fee;
    var opts = _buildOpts(total, [cost * n, fee * n, total + cost]);
    return { q: 'A taxi charges £' + fee + ' plus £' + cost + '/km. Total cost for ' + n + ' km?', opts: opts, c: 0,
             e: 'y = ' + cost + 'x + ' + fee + '. y = ' + cost + '(' + n + ') + ' + fee + ' = ' + total + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 8);
    var x1 = _randInt(0, 3), x2 = x1 + _randInt(2, 4);
    var y1 = a * x1 + b, y2 = a * x2 + b;
    var diff = y2 - y1;
    var xDiff = x2 - x1;
    var opts = _buildOpts(diff, [xDiff, a, y2]);
    return { q: 'For y = ' + a + 'x + ' + b + ', how much does y change when x goes from ' + x1 + ' to ' + x2 + '?', opts: opts, c: 0,
             e: 'y at x=' + x1 + ': ' + y1 + '. y at x=' + x2 + ': ' + y2 + '. Change = ' + diff + '.' };
  }}
];

// ── mi-23-2: Tables & Graphs of Linear Equations ─────────────────────────
TEST_GENERATORS["mi-23-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4), b = _randInt(0, 5);
    var x = _randInt(0, 6);
    var y = a * x + b;
    var opts = _buildOpts(y, [a * x, y + a, x + b]);
    return { q: 'Complete the table for y = ' + a + 'x + ' + b + ': when x = ' + x + ', y = ?', opts: opts, c: 0,
             e: 'y = ' + a + '(' + x + ') + ' + b + ' = ' + y + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 4), b = _randInt(0, 6);
    var opts = _buildOpts(b, [a, a + b, 0]);
    return { q: 'Where does y = ' + a + 'x + ' + b + ' cross the y-axis?', opts: opts, c: 0,
             e: 'y-intercept is when x = 0: y = ' + b + '. Crosses at (0, ' + b + ').' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 5), b = _randInt(0, 4);
    var opts = _buildOpts(a, [b, a + b, a * b || 1]);
    return { q: 'What is the gradient of y = ' + a + 'x + ' + b + '?', opts: opts, c: 0,
             e: 'In y = mx + c, the gradient is m = ' + a + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 3), b = _randInt(1, 5);
    var eq = 'y = ' + a + 'x + ' + b;
    var opts = [eq, 'y = ' + b + 'x + ' + a, 'y = ' + (a+b) + 'x', 'y = x + ' + (a+b)];
    return { q: 'A line has gradient ' + a + ' and y-intercept ' + b + '. What is its equation?', opts: opts, c: 0,
             e: 'y = mx + c = ' + a + 'x + ' + b + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 4), b = _randInt(-5, 5);
    var x_int = -b / a;
    while (x_int !== Math.floor(x_int)) { b = _randInt(-5, 5); x_int = -b / a; }
    var eq = b >= 0 ? 'y = ' + a + 'x + ' + b : 'y = ' + a + 'x − ' + Math.abs(b);
    var opts = _buildOpts(x_int, [b, -a, x_int + 1]);
    return { q: 'Where does ' + eq + ' cross the x-axis (y = 0)?', opts: opts, c: 0,
             e: '0 = ' + a + 'x + ' + b + '. x = ' + (-b) + '/' + a + ' = ' + x_int + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(-3, -1), b = _randInt(5, 15);
    var eq = 'y = ' + a + 'x + ' + b;
    var dir = 'downwards (left to right)';
    var opts = [dir, 'upwards (left to right)', 'horizontal', 'vertical'];
    return { q: 'The equation is ' + eq + '. Does the line slope up or down?', opts: opts, c: 0,
             e: 'Gradient = ' + a + ' (negative) → line slopes downwards.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(1, 3), b = _randInt(0, 4);
    var x1 = 0, x2 = 2, x3 = 4;
    var y1 = a*x1+b, y2 = a*x2+b, y3 = a*x3+b;
    var eq = b === 0 ? 'y = ' + a + 'x' : 'y = ' + a + 'x + ' + b;
    var opts = [eq, 'y = ' + (a+1) + 'x + ' + b, 'y = ' + a + 'x + ' + (b+1), 'y = ' + b + 'x + ' + a];
    return { q: 'A table shows: x=0→y=' + y1 + ', x=2→y=' + y2 + ', x=4→y=' + y3 + '. Find the equation.', opts: opts, c: 0,
             e: 'Gradient = (' + y2 + '−' + y1 + ')/(2−0) = ' + a + '. Intercept = ' + b + '. ' + eq + '.' };
  }}
];

// ── mi-23-3: Interpret Graphs ────────────────────────────────────────────
TEST_GENERATORS["mi-23-3"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(5, 20);
    var x = _randInt(2, 8);
    var y = a * x + b;
    var opts = _buildOpts(y, [a * x, b, y + a]);
    return { q: 'A graph shows cost = ' + a + ' × hours + ' + b + '. What is the cost for ' + x + ' hours?', opts: opts, c: 0,
             e: 'Cost = ' + a + '(' + x + ') + ' + b + ' = ' + y + '.' };
  }},
  { depth: 'medium', gen: function() {
    var rate = _randInt(30, 80);
    var t1 = _randInt(1, 3), t2 = t1 + _randInt(1, 3);
    var d1 = rate * t1, d2 = rate * t2;
    var opts = _buildOpts(rate + ' km/h', [(d2 - d1) + ' km/h', d2 + ' km/h', (rate + 10) + ' km/h']);
    return { q: 'A distance-time graph shows ' + d1 + ' km at ' + t1 + 'h and ' + d2 + ' km at ' + t2 + 'h. What is the speed?', opts: opts, c: 0,
             e: 'Speed = (' + d2 + '−' + d1 + ')/(' + t2 + '−' + t1 + ') = ' + ((d2-d1)/(t2-t1)) + ' = ' + rate + ' km/h.' };
  }},
  { depth: 'medium', gen: function() {
    var start = _randInt(10, 30);
    var rate = _randInt(2, 5);
    var time = _randInt(3, 8);
    var level = start + rate * time;
    var opts = _buildOpts(level, [start, rate * time, level + rate]);
    return { q: 'Water level starts at ' + start + ' cm and rises ' + rate + ' cm/hour. What is the level after ' + time + ' hours?', opts: opts, c: 0,
             e: start + ' + ' + rate + '×' + time + ' = ' + level + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var desc = _pickFrom([
      { shape: 'straight line going up', meaning: 'constant speed' },
      { shape: 'horizontal line', meaning: 'stationary (not moving)' },
      { shape: 'straight line going down', meaning: 'returning to start' },
      { shape: 'curve getting steeper', meaning: 'accelerating' }
    ]);
    var others = ['constant speed', 'stationary (not moving)', 'returning to start', 'accelerating'].filter(function(m){return m !== desc.meaning;});
    var opts = [desc.meaning, others[0], others[1], others[2]];
    return { q: 'On a distance-time graph, what does a ' + desc.shape + ' represent?', opts: opts, c: 0,
             e: 'A ' + desc.shape + ' = ' + desc.meaning + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var speed1 = _randInt(30, 60), time1 = _randInt(1, 3);
    var stopTime = _randInt(1, 2);
    var speed2 = _randInt(40, 80), time2 = _randInt(1, 3);
    var d1 = speed1 * time1;
    var d2 = d1 + speed2 * time2;
    var totalTime = time1 + stopTime + time2;
    var opts = _buildOpts(d2 + ' km', [d1 + ' km', (speed1 + speed2) * totalTime + ' km', d2 + d1 + ' km']);
    return { q: 'A car travels at ' + speed1 + ' km/h for ' + time1 + 'h, stops for ' + stopTime + 'h, then travels at ' + speed2 + ' km/h for ' + time2 + 'h. Total distance?', opts: opts, c: 0,
             e: d1 + ' + 0 + ' + (speed2*time2) + ' = ' + d2 + ' km.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var totalDist = _randInt(80, 200);
    var totalTime = _randInt(2, 5);
    var avgSpeed = totalDist / totalTime;
    while (avgSpeed !== Math.floor(avgSpeed)) { totalDist++; avgSpeed = totalDist / totalTime; }
    var opts = _buildOpts(avgSpeed + ' km/h', [totalDist + ' km/h', totalTime + ' km/h', (avgSpeed + 10) + ' km/h']);
    return { q: 'A journey covers ' + totalDist + ' km in ' + totalTime + ' hours. What is the average speed?', opts: opts, c: 0,
             e: 'Average speed = ' + totalDist + ' ÷ ' + totalTime + ' = ' + avgSpeed + ' km/h.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var fixed = _randInt(10, 30);
    var perUnit = _randInt(2, 8);
    var lineA = 'y = ' + perUnit + 'x + ' + fixed;
    var fixed2 = fixed + _randInt(10, 20);
    var perUnit2 = perUnit - _randInt(1, 2);
    while (perUnit2 < 1) perUnit2 = 1;
    var crossX = (fixed2 - fixed) / (perUnit - perUnit2);
    while (crossX !== Math.floor(crossX) || crossX < 1) { fixed2++; crossX = (fixed2 - fixed) / (perUnit - perUnit2); }
    var opts = _buildOpts(crossX, [fixed2 - fixed, perUnit - perUnit2, crossX + 1]);
    return { q: 'Plan A: £' + fixed + ' + £' + perUnit + '/unit. Plan B: £' + fixed2 + ' + £' + perUnit2 + '/unit. At how many units are they equal?', opts: opts, c: 0,
             e: perUnit + 'x + ' + fixed + ' = ' + perUnit2 + 'x + ' + fixed2 + '. ' + (perUnit - perUnit2) + 'x = ' + (fixed2 - fixed) + '. x = ' + crossX + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// 2D SHAPES & ANGLES (mt-24) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-24-1: Classify Polygons & Angles ──────────────────────────────────
TEST_GENERATORS["mi-24-1"] = [
  { depth: 'medium', gen: function() {
    var types = [
      { name: 'Equilateral', desc: 'all sides equal, all angles 60°' },
      { name: 'Isosceles', desc: 'two sides equal, two angles equal' },
      { name: 'Scalene', desc: 'no sides equal, no angles equal' },
      { name: 'Right-angled', desc: 'one angle is 90°' }
    ];
    var pick = _pickFrom(types);
    var opts = [pick.name, types[(types.indexOf(pick)+1)%4].name, types[(types.indexOf(pick)+2)%4].name, types[(types.indexOf(pick)+3)%4].name];
    return { q: 'What type of triangle has ' + pick.desc + '?', opts: opts, c: 0,
             e: pick.desc + ' → ' + pick.name + ' triangle.' };
  }},
  { depth: 'medium', gen: function() {
    var angle = _randInt(10, 170);
    var type;
    if (angle < 90) type = 'Acute';
    else if (angle === 90) type = 'Right';
    else type = 'Obtuse';
    var opts = [type, type === 'Acute' ? 'Obtuse' : 'Acute', 'Right', 'Reflex'];
    return { q: 'Classify the angle: ' + angle + '°', opts: opts, c: 0,
             e: angle + '° is ' + (angle < 90 ? 'less than 90° → Acute' : angle === 90 ? 'exactly 90° → Right' : 'between 90° and 180° → Obtuse') + '.' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Square', props: '4 equal sides, 4 right angles' },
      { name: 'Rectangle', props: '2 pairs of equal sides, 4 right angles' },
      { name: 'Rhombus', props: '4 equal sides, opposite angles equal' },
      { name: 'Trapezium', props: 'exactly one pair of parallel sides' }
    ];
    var pick = _pickFrom(shapes);
    var opts = [pick.name, shapes[(shapes.indexOf(pick)+1)%4].name, shapes[(shapes.indexOf(pick)+2)%4].name, shapes[(shapes.indexOf(pick)+3)%4].name];
    return { q: 'Which quadrilateral has: ' + pick.props + '?', opts: opts, c: 0,
             e: pick.props + ' → ' + pick.name + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sides = _pickFrom([5, 6, 7, 8, 10]);
    var names = { 5: 'Pentagon', 6: 'Hexagon', 7: 'Heptagon', 8: 'Octagon', 10: 'Decagon' };
    var ans = names[sides];
    var others = Object.values(names).filter(function(n){return n !== ans;});
    var opts = [ans, others[0], others[1], others[2]];
    return { q: 'What is the name of a polygon with ' + sides + ' sides?', opts: opts, c: 0,
             e: sides + ' sides = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var angle = _randInt(181, 350);
    var opts = ['Reflex', 'Obtuse', 'Acute', 'Right'];
    return { q: 'Classify the angle: ' + angle + '°', opts: opts, c: 0,
             e: angle + '° is greater than 180° → Reflex angle.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var sides = _pickFrom([5, 6, 8, 10]);
    var sumAngles = (sides - 2) * 180;
    var opts = _buildOpts(sumAngles + '°', [(sides * 180) + '°', (sumAngles + 180) + '°', (sides * 90) + '°']);
    return { q: 'What is the sum of interior angles of a ' + sides + '-sided polygon?', opts: opts, c: 0,
             e: 'Sum = (n−2) × 180° = (' + sides + '−2) × 180° = ' + sumAngles + '°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var sides = _pickFrom([3, 4, 5, 6, 8]);
    var extAngle = 360 / sides;
    var opts = _buildOpts(extAngle + '°', [(180 / sides) + '°', (360 - extAngle) + '°', (extAngle + 10) + '°']);
    return { q: 'What is each exterior angle of a regular ' + sides + '-sided polygon?', opts: opts, c: 0,
             e: 'Exterior angle = 360° ÷ ' + sides + ' = ' + extAngle + '°.' };
  }}
];

// ── mi-24-2: Angles in Triangles & Quadrilaterals ────────────────────────
TEST_GENERATORS["mi-24-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(30, 80), b = _randInt(30, 80);
    var c = 180 - a - b;
    var opts = _buildOpts(c + '°', [(a + b) + '°', (180 - a) + '°', (c + 10) + '°']);
    return { q: 'A triangle has angles ' + a + '° and ' + b + '°. Find the third angle.', opts: opts, c: 0,
             e: '180° − ' + a + '° − ' + b + '° = ' + c + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(50, 100), b = _randInt(50, 100), c = _randInt(50, 100);
    var d = 360 - a - b - c;
    var opts = _buildOpts(d + '°', [(a + b + c) + '°', (360 - a) + '°', (d + 10) + '°']);
    return { q: 'A quadrilateral has angles ' + a + '°, ' + b + '°, ' + c + '°. Find the fourth angle.', opts: opts, c: 0,
             e: '360° − ' + a + '° − ' + b + '° − ' + c + '° = ' + d + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(40, 70);
    var apex = 180 - 2 * base;
    var opts = _buildOpts(apex + '°', [base + '°', (180 - base) + '°', (apex + base) + '°']);
    return { q: 'An isosceles triangle has base angles of ' + base + '° each. Find the apex angle.', opts: opts, c: 0,
             e: '180° − 2(' + base + '°) = 180° − ' + (2*base) + '° = ' + apex + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var opts = _buildOpts('60°', ['90°', '45°', '120°']);
    return { q: 'What is each angle in an equilateral triangle?', opts: opts, c: 0,
             e: '180° ÷ 3 = 60°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var sides = _pickFrom([5, 6, 8]);
    var sum = (sides - 2) * 180;
    var each = sum / sides;
    var opts = _buildOpts(each + '°', [(180 - each) + '°', sum + '°', (each + 10) + '°']);
    return { q: 'Find each interior angle of a regular ' + sides + '-sided polygon.', opts: opts, c: 0,
             e: 'Sum = (' + sides + '−2)×180 = ' + sum + '°. Each = ' + sum + '÷' + sides + ' = ' + each + '°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(25, 70), b = _randInt(25, 70);
    var c = 180 - a - b;
    var ext = 180 - c;
    var opts = _buildOpts(ext + '°', [c + '°', (a + b) + '°', (180 - ext) + '°']);
    return { q: 'A triangle has angles ' + a + '°, ' + b + '°, ' + c + '°. Find the exterior angle adjacent to ' + c + '°.', opts: opts, c: 0,
             e: 'Exterior angle = 180° − ' + c + '° = ' + ext + '°. (Also equals ' + a + '°+' + b + '°.)' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(20, 50);
    var angles = [x, 2*x, 3*x];
    var sum = x + 2*x + 3*x;
    while (sum !== 180) { x = _randInt(20, 40); sum = 6*x; }
    x = 30;
    var opts = _buildOpts(x + '°', [(2*x) + '°', (3*x) + '°', (x + 10) + '°']);
    return { q: 'Triangle angles are x, 2x and 3x. Find x.', opts: opts, c: 0,
             e: 'x + 2x + 3x = 180°. 6x = 180°. x = 30°.' };
  }}
];

// ── mi-24-3: Parallel Lines & Transversals ───────────────────────────────
TEST_GENERATORS["mi-24-3"] = [
  { depth: 'medium', gen: function() {
    var angle = _randInt(40, 140);
    var opts = _buildOpts(angle + '°', [(180 - angle) + '°', (360 - angle) + '°', (angle + 10) + '°']);
    return { q: 'Two parallel lines are cut by a transversal. One angle is ' + angle + '°. Find the corresponding angle.', opts: opts, c: 0,
             e: 'Corresponding angles are equal: ' + angle + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var angle = _randInt(40, 140);
    var opts = _buildOpts(angle + '°', [(180 - angle) + '°', (90 - angle) + '°', (angle + 20) + '°']);
    return { q: 'Two parallel lines are cut by a transversal. One angle is ' + angle + '°. Find the alternate angle.', opts: opts, c: 0,
             e: 'Alternate angles are equal: ' + angle + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var angle = _randInt(40, 140);
    var coInt = 180 - angle;
    var opts = _buildOpts(coInt + '°', [angle + '°', (360 - angle) + '°', (coInt + 10) + '°']);
    return { q: 'Two parallel lines with a transversal. One co-interior angle is ' + angle + '°. Find the other.', opts: opts, c: 0,
             e: 'Co-interior angles sum to 180°: 180° − ' + angle + '° = ' + coInt + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var angle = _randInt(50, 130);
    var types = [
      { name: 'Corresponding', rule: 'equal (F-shape)' },
      { name: 'Alternate', rule: 'equal (Z-shape)' },
      { name: 'Co-interior', rule: 'sum to 180° (C/U-shape)' }
    ];
    var pick = _pickFrom(types);
    var opts = [pick.name, types[(types.indexOf(pick)+1)%3].name, types[(types.indexOf(pick)+2)%3].name, 'Vertically opposite'];
    return { q: 'Angles that are ' + pick.rule + ' when a transversal crosses parallel lines are called?', opts: opts, c: 0,
             e: pick.rule + ' → ' + pick.name + ' angles.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(50, 120);
    var vert = a;
    var supp = 180 - a;
    var opts = _buildOpts(a + '° and ' + supp + '°', [a + '° and ' + a + '°', supp + '° and ' + supp + '°', (a + 10) + '° and ' + (supp - 10) + '°']);
    return { q: 'A transversal creates an angle of ' + a + '° with one parallel line. What are the two angles formed at the other parallel line?', opts: opts, c: 0,
             e: 'Corresponding = ' + a + '°. Co-interior = ' + supp + '°. The two angles are ' + a + '° and ' + supp + '°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(20, 50);
    var angle1 = 2 * x + 10;
    var angle2 = 180 - angle1;
    var given = 3 * x - 20;
    while (given !== angle1) { x++; angle1 = 2*x + 10; given = 3*x - 20; }
    x = 30;
    angle1 = 70;
    var opts = _buildOpts('x = 30', ['x = 20', 'x = 40', 'x = 35']);
    return { q: 'Alternate angles are (2x + 10)° and (3x − 20)°. Find x.', opts: opts, c: 0,
             e: 'Alternate angles are equal: 2x + 10 = 3x − 20. x = 30.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(20, 40);
    var a1 = 2 * x;
    var a2 = 180 - a1;
    var expr2val = a2;
    var opts = _buildOpts('x = ' + x, ['x = ' + (x + 10), 'x = ' + (x - 5), 'x = ' + (180 - x)]);
    return { q: 'Co-interior angles are 2x° and ' + a2 + '°. Find x.', opts: opts, c: 0,
             e: 'Co-interior sum = 180°: 2x + ' + a2 + ' = 180. 2x = ' + (180 - a2) + '. x = ' + x + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// SYMMETRY & TRANSFORMATIONS (mt-25) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-25-1: Line & Rotational Symmetry ──────────────────────────────────
TEST_GENERATORS["mi-25-1"] = [
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Square', lines: 4 },
      { name: 'Rectangle', lines: 2 },
      { name: 'Equilateral triangle', lines: 3 },
      { name: 'Regular pentagon', lines: 5 }
    ];
    var pick = _pickFrom(shapes);
    var opts = _buildOpts(pick.lines, [pick.lines + 1, pick.lines - 1, 0]);
    return { q: 'How many lines of symmetry does a ' + pick.name + ' have?', opts: opts, c: 0,
             e: 'A ' + pick.name + ' has ' + pick.lines + ' lines of symmetry.' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Square', order: 4 },
      { name: 'Rectangle', order: 2 },
      { name: 'Equilateral triangle', order: 3 },
      { name: 'Regular hexagon', order: 6 }
    ];
    var pick = _pickFrom(shapes);
    var opts = _buildOpts(pick.order, [pick.order + 1, pick.order - 1, 1]);
    return { q: 'What is the order of rotational symmetry of a ' + pick.name + '?', opts: opts, c: 0,
             e: 'A ' + pick.name + ' maps onto itself ' + pick.order + ' times in a full turn.' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Isosceles triangle', lines: 1 },
      { name: 'Parallelogram (non-rectangle)', lines: 0 },
      { name: 'Kite', lines: 1 },
      { name: 'Scalene triangle', lines: 0 }
    ];
    var pick = _pickFrom(shapes);
    var opts = _buildOpts(pick.lines, [pick.lines + 1, 2, 4]);
    return { q: 'How many lines of symmetry does a ' + pick.name + ' have?', opts: opts, c: 0,
             e: 'A ' + pick.name + ' has ' + pick.lines + ' line(s) of symmetry.' };
  }},
  { depth: 'medium', gen: function() {
    var sides = _pickFrom([5, 6, 8, 10]);
    var opts = _buildOpts(sides, [sides * 2, sides - 1, sides + 1]);
    return { q: 'A regular ' + sides + '-sided polygon has how many lines of symmetry?', opts: opts, c: 0,
             e: 'A regular n-gon has n lines of symmetry. Answer: ' + sides + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var opts = ['Order 2', 'Order 1', 'Order 4', 'No rotational symmetry'];
    return { q: 'What is the order of rotational symmetry of a parallelogram (not a rectangle)?', opts: opts, c: 0,
             e: 'A parallelogram maps onto itself after 180° rotation → order 2.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _pickFrom([3, 4, 5, 6, 8]);
    var angle = 360 / n;
    var opts = _buildOpts(angle + '°', [(180 / n) + '°', (360 - angle) + '°', 90 + '°']);
    return { q: 'A regular ' + n + '-sided polygon. What is the smallest angle of rotation for symmetry?', opts: opts, c: 0,
             e: 'Smallest rotation = 360° ÷ ' + n + ' = ' + angle + '°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var letters = [
      { l: 'H', lines: 2, order: 2 },
      { l: 'A', lines: 1, order: 1 },
      { l: 'S', lines: 0, order: 2 },
      { l: 'O', lines: 2, order: 2 }
    ];
    var pick = _pickFrom(letters);
    var opts = _buildOpts(pick.lines, [pick.lines + 1, 0, 4]);
    return { q: 'How many lines of symmetry does the letter ' + pick.l + ' have?', opts: opts, c: 0,
             e: 'The letter ' + pick.l + ' has ' + pick.lines + ' line(s) of symmetry.' };
  }}
];

// ── mi-25-2: Reflections & Translations ──────────────────────────────────
TEST_GENERATORS["mi-25-2"] = [
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 7), y = _randInt(1, 7);
    var ans = '(' + (-x) + ', ' + y + ')';
    var opts = [ans, '(' + x + ', ' + (-y) + ')', '(' + (-x) + ', ' + (-y) + ')', '(' + y + ', ' + x + ')'];
    return { q: 'Reflect (' + x + ', ' + y + ') in the y-axis.', opts: opts, c: 0,
             e: 'Reflecting in y-axis: negate x. → ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 7), y = _randInt(1, 7);
    var ans = '(' + x + ', ' + (-y) + ')';
    var opts = [ans, '(' + (-x) + ', ' + y + ')', '(' + (-x) + ', ' + (-y) + ')', '(' + y + ', ' + x + ')'];
    return { q: 'Reflect (' + x + ', ' + y + ') in the x-axis.', opts: opts, c: 0,
             e: 'Reflecting in x-axis: negate y. → ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 5), y = _randInt(1, 5);
    var dx = _randInt(-4, 4), dy = _randInt(-4, 4);
    while (dx === 0 && dy === 0) { dx = _randInt(-4, 4); }
    var nx = x + dx, ny = y + dy;
    var ans = '(' + nx + ', ' + ny + ')';
    var opts = [ans, '(' + (x - dx) + ', ' + (y - dy) + ')', '(' + x + ', ' + ny + ')', '(' + nx + ', ' + y + ')'];
    return { q: 'Translate (' + x + ', ' + y + ') by vector (' + dx + ', ' + dy + ').', opts: opts, c: 0,
             e: '(' + x + '+' + dx + ', ' + y + '+' + dy + ') = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x1 = _randInt(1, 5), y1 = _randInt(1, 5);
    var x2 = x1 + _randInt(1, 5), y2 = y1 + _randInt(-3, 3);
    var dx = x2 - x1, dy = y2 - y1;
    var ans = '(' + dx + ', ' + dy + ')';
    var opts = [ans, '(' + (-dx) + ', ' + (-dy) + ')', '(' + dy + ', ' + dx + ')', '(' + x2 + ', ' + y2 + ')'];
    return { q: 'A point moves from (' + x1 + ', ' + y1 + ') to (' + x2 + ', ' + y2 + '). What is the translation vector?', opts: opts, c: 0,
             e: 'Vector = (' + x2 + '−' + x1 + ', ' + y2 + '−' + y1 + ') = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(-5, 5), y = _randInt(-5, 5);
    while (x === 0 || y === 0) { x = _randInt(-5, 5); y = _randInt(-5, 5); }
    var ans = '(' + (-x) + ', ' + (-y) + ')';
    var opts = [ans, '(' + x + ', ' + (-y) + ')', '(' + (-x) + ', ' + y + ')', '(' + y + ', ' + x + ')'];
    return { q: 'Reflect (' + x + ', ' + y + ') in the origin (both axes).', opts: opts, c: 0,
             e: 'Negate both: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(1, 6), y = _randInt(1, 6);
    var lineX = _randInt(x + 1, x + 4);
    var reflected = 2 * lineX - x;
    var ans = '(' + reflected + ', ' + y + ')';
    var opts = [ans, '(' + (lineX - x) + ', ' + y + ')', '(' + lineX + ', ' + y + ')', '(' + x + ', ' + (2*lineX - y) + ')'];
    return { q: 'Reflect (' + x + ', ' + y + ') in the line x = ' + lineX + '.', opts: opts, c: 0,
             e: 'Distance from x=' + lineX + ' is ' + (lineX - x) + '. Reflected x = ' + lineX + '+' + (lineX-x) + ' = ' + reflected + '. → ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(1, 5), y = _randInt(1, 5);
    var dx = _randInt(-3, 3), dy = _randInt(-3, 3);
    while (dx === 0 && dy === 0) dx = _randInt(1, 3);
    var after1 = [x + dx, y + dy];
    var after2 = [after1[0] + dx, after1[1] + dy];
    var ans = '(' + after2[0] + ', ' + after2[1] + ')';
    var opts = [ans, '(' + after1[0] + ', ' + after1[1] + ')', '(' + (x + 3*dx) + ', ' + (y + 3*dy) + ')', '(' + (after2[0] + 1) + ', ' + after2[1] + ')'];
    return { q: 'Point (' + x + ', ' + y + ') is translated by (' + dx + ', ' + dy + ') twice. Final position?', opts: opts, c: 0,
             e: 'After 2 translations: (' + x + '+2×' + dx + ', ' + y + '+2×' + dy + ') = ' + ans + '.' };
  }}
];

// ── mi-25-3: Congruent Figures ───────────────────────────────────────────
TEST_GENERATORS["mi-25-3"] = [
  { depth: 'medium', gen: function() {
    var sides = [_randInt(3, 8), _randInt(3, 8), _randInt(3, 8)];
    var opts = ['Same shape and same size', 'Same shape, different size', 'Same size, different shape', 'Neither same shape nor size'];
    return { q: 'Two triangles have sides ' + sides.join(', ') + ' cm. They are congruent. What does this mean?', opts: opts, c: 0,
             e: 'Congruent = same shape AND same size (identical).' };
  }},
  { depth: 'medium', gen: function() {
    var side = _randInt(4, 12);
    var opts = _buildOpts(side + ' cm', [(side * 2) + ' cm', (side / 2) + ' cm', (side + 1) + ' cm']);
    return { q: 'Triangle ABC ≅ Triangle DEF. If AB = ' + side + ' cm, what is DE?', opts: opts, c: 0,
             e: 'Congruent triangles have equal corresponding sides. DE = AB = ' + side + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var angle = _randInt(30, 90);
    var opts = _buildOpts(angle + '°', [(180 - angle) + '°', (angle * 2) + '°', (angle + 10) + '°']);
    return { q: 'Triangle PQR ≅ Triangle XYZ. If angle P = ' + angle + '°, what is angle X?', opts: opts, c: 0,
             e: 'Corresponding angles in congruent triangles are equal. Angle X = ' + angle + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(3, 7), b = _randInt(4, 9), c = _randInt(5, 10);
    var perimeter = a + b + c;
    var opts = _buildOpts(perimeter + ' cm', [(perimeter * 2) + ' cm', (a + b) + ' cm', (perimeter + 1) + ' cm']);
    return { q: 'Two congruent triangles have sides ' + a + ', ' + b + ', ' + c + ' cm. What is the perimeter of one?', opts: opts, c: 0,
             e: 'Perimeter = ' + a + ' + ' + b + ' + ' + c + ' = ' + perimeter + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(4, 10), b = _randInt(4, 10), c = _randInt(4, 10);
    var angle_A = _randInt(40, 80);
    var opts = ['SSS, SAS, ASA, or RHS', 'Only if angles match', 'Never', 'Only for right triangles'];
    return { q: 'Which conditions can prove two triangles are congruent?', opts: opts, c: 0,
             e: 'SSS (3 sides), SAS (2 sides + included angle), ASA (2 angles + side), RHS (right angle, hypotenuse, side).' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(5, 12), b = _randInt(5, 12);
    var c = Math.round(Math.sqrt(a*a + b*b));
    var missing = b;
    var opts = _buildOpts(missing + ' cm', [(a + c) + ' cm', (c - a) + ' cm', (missing + 1) + ' cm']);
    return { q: 'Triangle ABC ≅ DEF. In ABC: AB=' + a + ', BC=' + b + ', AC=' + c + '. In DEF: DE=' + a + ', EF=?, DF=' + c + '. Find EF.', opts: opts, c: 0,
             e: 'Corresponding sides are equal. EF = BC = ' + missing + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var angles = [_randInt(30, 70), _randInt(40, 80)];
    angles.push(180 - angles[0] - angles[1]);
    var missing = angles[2];
    var opts = _buildOpts(missing + '°', [(180 - missing) + '°', angles[0] + '°', (missing + 10) + '°']);
    return { q: 'Congruent triangles have angles ' + angles[0] + '°, ' + angles[1] + '°, and ?°. Find the missing angle.', opts: opts, c: 0,
             e: '180° − ' + angles[0] + '° − ' + angles[1] + '° = ' + missing + '°.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// 3D FIGURES (mt-26) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-26-1: 3D Shape Properties ────────────────────────────────────────
TEST_GENERATORS["mi-26-1"] = [
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Cube', faces: 6, edges: 12, vertices: 8 },
      { name: 'Cuboid', faces: 6, edges: 12, vertices: 8 },
      { name: 'Triangular prism', faces: 5, edges: 9, vertices: 6 },
      { name: 'Square-based pyramid', faces: 5, edges: 8, vertices: 5 }
    ];
    var pick = _pickFrom(shapes);
    var opts = _buildOpts(pick.faces, [pick.faces + 1, pick.faces - 1, pick.edges]);
    return { q: 'How many faces does a ' + pick.name + ' have?', opts: opts, c: 0,
             e: 'A ' + pick.name + ' has ' + pick.faces + ' faces.' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Cube', faces: 6, edges: 12, vertices: 8 },
      { name: 'Triangular prism', faces: 5, edges: 9, vertices: 6 },
      { name: 'Square-based pyramid', faces: 5, edges: 8, vertices: 5 },
      { name: 'Pentagonal prism', faces: 7, edges: 15, vertices: 10 }
    ];
    var pick = _pickFrom(shapes);
    var opts = _buildOpts(pick.edges, [pick.faces, pick.vertices, pick.edges + 2]);
    return { q: 'How many edges does a ' + pick.name + ' have?', opts: opts, c: 0,
             e: 'A ' + pick.name + ' has ' + pick.edges + ' edges.' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      { name: 'Cube', faces: 6, edges: 12, vertices: 8 },
      { name: 'Triangular pyramid (tetrahedron)', faces: 4, edges: 6, vertices: 4 },
      { name: 'Hexagonal prism', faces: 8, edges: 18, vertices: 12 }
    ];
    var pick = _pickFrom(shapes);
    var opts = _buildOpts(pick.vertices, [pick.edges, pick.faces, pick.vertices + 2]);
    return { q: 'How many vertices does a ' + pick.name + ' have?', opts: opts, c: 0,
             e: 'A ' + pick.name + ' has ' + pick.vertices + ' vertices.' };
  }},
  { depth: 'medium', gen: function() {
    var descs = [
      { desc: '6 square faces, all edges equal', name: 'Cube' },
      { desc: '2 triangular faces and 3 rectangular faces', name: 'Triangular prism' },
      { desc: '1 square base and 4 triangular faces meeting at a point', name: 'Square-based pyramid' },
      { desc: '6 rectangular faces (not all equal)', name: 'Cuboid' }
    ];
    var pick = _pickFrom(descs);
    var others = descs.filter(function(d){return d !== pick;}).map(function(d){return d.name;});
    var opts = [pick.name, others[0], others[1], others[2]];
    return { q: 'I have ' + pick.desc + '. What am I?', opts: opts, c: 0,
             e: pick.desc + ' → ' + pick.name + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var F = _randInt(4, 10);
    var V = _randInt(4, 12);
    var E = F + V - 2;
    var opts = _buildOpts(E, [F + V, F + V + 2, E + 1]);
    return { q: 'A polyhedron has ' + F + ' faces and ' + V + ' vertices. How many edges? (Euler: F + V = E + 2)', opts: opts, c: 0,
             e: 'E = F + V − 2 = ' + F + ' + ' + V + ' − 2 = ' + E + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var E = _randInt(8, 18);
    var F = _randInt(4, 8);
    var V = E + 2 - F;
    var opts = _buildOpts(V, [E - F, F + E, V + 1]);
    return { q: 'A polyhedron has ' + E + ' edges and ' + F + ' faces. How many vertices?', opts: opts, c: 0,
             e: 'V = E + 2 − F = ' + E + ' + 2 − ' + F + ' = ' + V + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _pickFrom([3, 4, 5, 6]);
    var names = { 3: 'Triangular', 4: 'Square', 5: 'Pentagonal', 6: 'Hexagonal' };
    var faces = n + 2;
    var edges = n * 3;
    var vertices = n * 2;
    var opts = _buildOpts(faces + ' faces, ' + edges + ' edges, ' + vertices + ' vertices',
      [(faces+1) + ' faces, ' + edges + ' edges, ' + vertices + ' vertices',
       faces + ' faces, ' + (edges+1) + ' edges, ' + vertices + ' vertices',
       (n+1) + ' faces, ' + (n*2) + ' edges, ' + (n+1) + ' vertices']);
    return { q: 'A ' + names[n] + ' prism has how many faces, edges, and vertices?', opts: opts, c: 0,
             e: names[n] + ' prism: ' + faces + ' faces, ' + edges + ' edges, ' + vertices + ' vertices.' };
  }}
];

// ── mi-26-2: Nets of 3D Figures ──────────────────────────────────────────
TEST_GENERATORS["mi-26-2"] = [
  { depth: 'medium', gen: function() {
    var opts = ['6 squares', '4 squares', '8 squares', '6 rectangles'];
    return { q: 'The net of a cube is made of how many squares?', opts: opts, c: 0,
             e: 'A cube has 6 faces → its net has 6 squares.' };
  }},
  { depth: 'medium', gen: function() {
    var opts = ['2 triangles and 3 rectangles', '3 triangles and 2 rectangles', '5 rectangles', '4 triangles and 1 rectangle'];
    return { q: 'The net of a triangular prism is made of which shapes?', opts: opts, c: 0,
             e: 'Triangular prism: 2 triangular ends + 3 rectangular faces.' };
  }},
  { depth: 'medium', gen: function() {
    var opts = ['1 square and 4 triangles', '4 squares and 1 triangle', '5 triangles', '2 squares and 3 triangles'];
    return { q: 'The net of a square-based pyramid is made of which shapes?', opts: opts, c: 0,
             e: 'Square base + 4 triangular faces = 1 square and 4 triangles.' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      { solid: 'Cuboid', net: '6 rectangles' },
      { solid: 'Cylinder', net: '2 circles and 1 rectangle' },
      { solid: 'Cone', net: '1 circle and 1 sector' },
      { solid: 'Tetrahedron', net: '4 triangles' }
    ];
    var pick = _pickFrom(shapes);
    var others = shapes.filter(function(s){return s !== pick;}).map(function(s){return s.net;});
    var opts = [pick.net, others[0], others[1], others[2]];
    return { q: 'What shapes make up the net of a ' + pick.solid + '?', opts: opts, c: 0,
             e: pick.solid + ' → ' + pick.net + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var opts = ['11', '6', '8', '14'];
    return { q: 'How many different nets can a cube have?', opts: opts, c: 0,
             e: 'A cube has exactly 11 distinct nets.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var l = _randInt(3, 8), w = _randInt(2, 5), h = _randInt(2, 5);
    var area = 2 * (l*w + l*h + w*h);
    var opts = _buildOpts(area + ' cm²', [(l*w*h) + ' cm²', (2*l + 2*w + 2*h) + ' cm²', (area + l*w) + ' cm²']);
    return { q: 'A cuboid is ' + l + '×' + w + '×' + h + ' cm. What is the total area of its net?', opts: opts, c: 0,
             e: 'Surface area = 2(' + l + '×' + w + ' + ' + l + '×' + h + ' + ' + w + '×' + h + ') = ' + area + ' cm².' };
  }},
  { depth: 'greater-depth', gen: function() {
    var base = _randInt(3, 7);
    var slant = _randInt(base + 1, base + 5);
    var baseArea = base * base;
    var triArea = 4 * (base * slant / 2);
    var total = baseArea + triArea;
    var opts = _buildOpts(total + ' cm²', [baseArea + ' cm²', triArea + ' cm²', (total + baseArea) + ' cm²']);
    return { q: 'A square pyramid: base ' + base + ' cm, slant height ' + slant + ' cm. Total net area?', opts: opts, c: 0,
             e: 'Base = ' + baseArea + '. 4 triangles = 4×½×' + base + '×' + slant + ' = ' + triArea + '. Total = ' + total + ' cm².' };
  }}
];

// ── mi-26-3: Front, Side & Top Views ─────────────────────────────────────
TEST_GENERATORS["mi-26-3"] = [
  { depth: 'medium', gen: function() {
    var shapes = [
      { solid: 'Cube', front: 'Square', side: 'Square', top: 'Square' },
      { solid: 'Cylinder', front: 'Rectangle', side: 'Rectangle', top: 'Circle' },
      { solid: 'Sphere', front: 'Circle', side: 'Circle', top: 'Circle' },
      { solid: 'Cone', front: 'Triangle', side: 'Triangle', top: 'Circle' }
    ];
    var pick = _pickFrom(shapes);
    var view = _pickFrom(['front', 'side', 'top']);
    var ans = pick[view];
    var others = ['Square', 'Rectangle', 'Circle', 'Triangle'].filter(function(s){return s !== ans;});
    var opts = [ans, others[0], others[1], others[2]];
    return { q: 'What is the ' + view + ' view of a ' + pick.solid + '?', opts: opts, c: 0,
             e: 'The ' + view + ' view of a ' + pick.solid + ' is a ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 8), w = _randInt(2, 5), h = _randInt(2, 6);
    var frontArea = l * h;
    var opts = _buildOpts(frontArea + ' cm²', [(l * w) + ' cm²', (w * h) + ' cm²', (l + h) + ' cm²']);
    return { q: 'A cuboid is ' + l + ' cm long, ' + w + ' cm wide, ' + h + ' cm tall. What is the area of the front view (l × h)?', opts: opts, c: 0,
             e: 'Front view = ' + l + ' × ' + h + ' = ' + frontArea + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var opts = ['Cuboid', 'Cylinder', 'Cone', 'Sphere'];
    return { q: 'Which 3D shape has: front = rectangle, side = rectangle, top = rectangle?', opts: opts, c: 0,
             e: 'All three views are rectangles → Cuboid.' };
  }},
  { depth: 'medium', gen: function() {
    var opts = ['Cylinder', 'Cube', 'Cone', 'Cuboid'];
    return { q: 'Which 3D shape has: front = rectangle, top = circle?', opts: opts, c: 0,
             e: 'Rectangle from front, circle from top → Cylinder.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var opts = ['Triangular prism', 'Square pyramid', 'Cylinder', 'Cone'];
    return { q: 'A shape has: front = rectangle, side = triangle, top = triangle. What is it?', opts: opts, c: 0,
             e: 'Rectangle front + triangular side/top → Triangular prism.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var l = _randInt(3, 6), w = _randInt(2, 4), h = _randInt(2, 5);
    var views = { front: l + ' × ' + h, side: w + ' × ' + h, top: l + ' × ' + w };
    var pick = _pickFrom(['front', 'side', 'top']);
    var dims = views[pick];
    var opts = [dims, views[pick === 'front' ? 'side' : 'front'], views[pick === 'top' ? 'front' : 'top'], (l+w) + ' × ' + h];
    return { q: 'Cuboid: length ' + l + ', width ' + w + ', height ' + h + '. Dimensions of ' + pick + ' view?', opts: opts, c: 0,
             e: pick.charAt(0).toUpperCase() + pick.slice(1) + ' view = ' + dims + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var shapes = ['L-shape', 'T-shape', 'Plus sign (+)'];
    var pick = _pickFrom(shapes);
    var opts = ['It varies depending on orientation', 'Always a rectangle', 'Always an L-shape', 'Always a square'];
    return { q: 'If a compound 3D shape (made of cubes in an ' + pick + ') is viewed from the front, what shape might you see?', opts: opts, c: 0,
             e: 'The view depends on which face is facing you — it varies depending on orientation.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// AREA, PERIMETER & VOLUME (mt-27) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-27-1: Perimeter & Area of Polygons ────────────────────────────────
TEST_GENERATORS["mi-27-1"] = [
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 15), w = _randInt(2, 10);
    var area = l * w;
    var opts = _buildOpts(area + ' cm²', [(l + w) + ' cm²', (2*(l+w)) + ' cm²', (area + l) + ' cm²']);
    return { q: 'Find the area of a rectangle: length ' + l + ' cm, width ' + w + ' cm.', opts: opts, c: 0,
             e: 'Area = ' + l + ' × ' + w + ' = ' + area + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 12), w = _randInt(2, 8);
    var p = 2 * (l + w);
    var opts = _buildOpts(p + ' cm', [(l * w) + ' cm', (l + w) + ' cm', (p + 2) + ' cm']);
    return { q: 'Find the perimeter of a rectangle: ' + l + ' cm by ' + w + ' cm.', opts: opts, c: 0,
             e: 'Perimeter = 2(' + l + ' + ' + w + ') = ' + p + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(4, 14), h = _randInt(3, 10);
    var area = b * h / 2;
    var opts = _buildOpts(area + ' cm²', [(b * h) + ' cm²', (b + h) + ' cm²', (area + b) + ' cm²']);
    return { q: 'Find the area of a triangle: base ' + b + ' cm, height ' + h + ' cm.', opts: opts, c: 0,
             e: 'Area = ½ × ' + b + ' × ' + h + ' = ' + area + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(4, 12), h = _randInt(3, 9);
    var area = b * h;
    var opts = _buildOpts(area + ' cm²', [(b * h / 2) + ' cm²', (2 * (b+h)) + ' cm²', (area + h) + ' cm²']);
    return { q: 'Find the area of a parallelogram: base ' + b + ' cm, height ' + h + ' cm.', opts: opts, c: 0,
             e: 'Area = base × height = ' + b + ' × ' + h + ' = ' + area + ' cm².' };
  }},
  { depth: 'greater-depth', gen: function() {
    var side = _randInt(3, 12);
    var area = side * side;
    var perimeter = 4 * side;
    var opts = _buildOpts('Area = ' + area + ' cm², P = ' + perimeter + ' cm',
      ['Area = ' + perimeter + ' cm², P = ' + area + ' cm', 'Area = ' + (area+side) + ' cm², P = ' + perimeter + ' cm', 'Area = ' + area + ' cm², P = ' + (perimeter+4) + ' cm']);
    return { q: 'A square has side ' + side + ' cm. Find its area and perimeter.', opts: opts, c: 0,
             e: 'Area = ' + side + '² = ' + area + ' cm². Perimeter = 4×' + side + ' = ' + perimeter + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var area = _randInt(20, 100);
    var w = _randInt(2, 8);
    while (area % w !== 0) w++;
    var l = area / w;
    var opts = _buildOpts(l + ' cm', [area / l + ' cm', (area - w) + ' cm', (l + w) + ' cm']);
    return { q: 'A rectangle has area ' + area + ' cm² and width ' + w + ' cm. Find the length.', opts: opts, c: 0,
             e: 'Length = area ÷ width = ' + area + ' ÷ ' + w + ' = ' + l + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var l = _randInt(8, 15), w = _randInt(4, 8);
    var cutL = _randInt(2, l - 3), cutW = _randInt(2, w - 2);
    var mainArea = l * w;
    var cutArea = cutL * cutW;
    var ans = mainArea - cutArea;
    var opts = _buildOpts(ans + ' cm²', [mainArea + ' cm²', cutArea + ' cm²', (ans + cutArea) + ' cm²']);
    return { q: 'An L-shape is made from a ' + l + '×' + w + ' rectangle with a ' + cutL + '×' + cutW + ' piece removed. Find the area.', opts: opts, c: 0,
             e: mainArea + ' − ' + cutArea + ' = ' + ans + ' cm².' };
  }}
];

// ── mi-27-2: Area of Trapeziums & Compound Figures ───────────────────────
TEST_GENERATORS["mi-27-2"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(4, 12), b = _randInt(6, 16), h = _randInt(3, 8);
    while (a >= b) a = _randInt(4, b - 1);
    var area = (a + b) * h / 2;
    var opts = _buildOpts(area + ' cm²', [(a * h) + ' cm²', (b * h) + ' cm²', ((a+b)*h) + ' cm²']);
    return { q: 'Find the area of a trapezium: parallel sides ' + a + ' cm and ' + b + ' cm, height ' + h + ' cm.', opts: opts, c: 0,
             e: 'Area = ½(' + a + '+' + b + ')×' + h + ' = ½×' + (a+b) + '×' + h + ' = ' + area + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var d1 = _randInt(4, 12), d2 = _randInt(4, 12);
    var area = d1 * d2 / 2;
    var opts = _buildOpts(area + ' cm²', [(d1 * d2) + ' cm²', (d1 + d2) + ' cm²', (area * 2) + ' cm²']);
    return { q: 'A rhombus has diagonals ' + d1 + ' cm and ' + d2 + ' cm. Find its area.', opts: opts, c: 0,
             e: 'Area = ½ × d₁ × d₂ = ½ × ' + d1 + ' × ' + d2 + ' = ' + area + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var l1 = _randInt(5, 10), w1 = _randInt(3, 6);
    var l2 = _randInt(3, 8), w2 = _randInt(2, 4);
    var total = l1 * w1 + l2 * w2;
    var opts = _buildOpts(total + ' cm²', [(l1*w1) + ' cm²', (l2*w2) + ' cm²', (l1*w1*l2*w2) + ' cm²']);
    return { q: 'A compound shape is two rectangles: ' + l1 + '×' + w1 + ' and ' + l2 + '×' + w2 + '. Total area?', opts: opts, c: 0,
             e: l1 + '×' + w1 + ' + ' + l2 + '×' + w2 + ' = ' + (l1*w1) + ' + ' + (l2*w2) + ' = ' + total + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(5, 10), b = _randInt(8, 15), h = _randInt(4, 8);
    while (a >= b) a = _randInt(5, b - 1);
    var area = (a + b) * h / 2;
    var opts = _buildOpts(area + ' cm²', [(a*b*h) + ' cm²', (a*h) + ' cm²', ((a+b)*h) + ' cm²']);
    return { q: 'Trapezium: a = ' + a + ' cm, b = ' + b + ' cm, h = ' + h + ' cm. Area?', opts: opts, c: 0,
             e: '½(' + a + '+' + b + ')×' + h + ' = ' + area + ' cm².' };
  }},
  { depth: 'greater-depth', gen: function() {
    var outerL = _randInt(10, 16), outerW = _randInt(8, 12);
    var innerL = _randInt(4, outerL - 4), innerW = _randInt(3, outerW - 4);
    var shaded = outerL * outerW - innerL * innerW;
    var opts = _buildOpts(shaded + ' cm²', [(outerL*outerW) + ' cm²', (innerL*innerW) + ' cm²', (shaded + innerL) + ' cm²']);
    return { q: 'A ' + outerL + '×' + outerW + ' rectangle has a ' + innerL + '×' + innerW + ' hole. Find the shaded area.', opts: opts, c: 0,
             e: (outerL*outerW) + ' − ' + (innerL*innerW) + ' = ' + shaded + ' cm².' };
  }},
  { depth: 'greater-depth', gen: function() {
    var rectL = _randInt(8, 14), rectW = _randInt(4, 8);
    var triB = rectL, triH = _randInt(3, 6);
    var total = rectL * rectW + triB * triH / 2;
    var opts = _buildOpts(total + ' cm²', [(rectL*rectW) + ' cm²', (triB*triH/2) + ' cm²', (rectL*rectW*2) + ' cm²']);
    return { q: 'A compound shape: rectangle ' + rectL + '×' + rectW + ' with a triangle (base ' + triB + ', height ' + triH + ') on top. Total area?', opts: opts, c: 0,
             e: 'Rectangle: ' + (rectL*rectW) + '. Triangle: ' + (triB*triH/2) + '. Total: ' + total + ' cm².' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(6, 10), b = _randInt(10, 16), h = _randInt(5, 9);
    while (a >= b) a--;
    var area = (a + b) * h / 2;
    var perimeter = a + b + 2 * Math.round(Math.sqrt(Math.pow((b-a)/2, 2) + h*h));
    var opts = _buildOpts(area + ' cm²', [(a*b) + ' cm²', ((a+b)*h) + ' cm²', (area + a) + ' cm²']);
    return { q: 'An isosceles trapezium has parallel sides ' + a + ' and ' + b + ' cm with height ' + h + ' cm. Area?', opts: opts, c: 0,
             e: '½(' + a + '+' + b + ')×' + h + ' = ' + area + ' cm².' };
  }}
];

// ── mi-27-3: Volume of Cubes & Cuboids ───────────────────────────────────
TEST_GENERATORS["mi-27-3"] = [
  { depth: 'medium', gen: function() {
    var s = _randInt(2, 8);
    var vol = s * s * s;
    var opts = _buildOpts(vol + ' cm³', [(s * s) + ' cm³', (3 * s) + ' cm³', (vol + s) + ' cm³']);
    return { q: 'Find the volume of a cube with side ' + s + ' cm.', opts: opts, c: 0,
             e: 'V = ' + s + '³ = ' + vol + ' cm³.' };
  }},
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 10), w = _randInt(2, 8), h = _randInt(2, 6);
    var vol = l * w * h;
    var opts = _buildOpts(vol + ' cm³', [(l*w + w*h + l*h) + ' cm³', (l + w + h) + ' cm³', (vol + l) + ' cm³']);
    return { q: 'Find the volume of a cuboid: ' + l + ' cm × ' + w + ' cm × ' + h + ' cm.', opts: opts, c: 0,
             e: 'V = ' + l + '×' + w + '×' + h + ' = ' + vol + ' cm³.' };
  }},
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 8), w = _randInt(2, 6), h = _randInt(2, 5);
    var vol = l * w * h;
    var litres = vol / 1000;
    var opts = _buildOpts(vol + ' cm³', [(l*w) + ' cm³', (2*(l*w+w*h+l*h)) + ' cm³', (vol * 2) + ' cm³']);
    return { q: 'A box is ' + l + ' cm long, ' + w + ' cm wide, ' + h + ' cm high. Find its volume.', opts: opts, c: 0,
             e: 'V = l × w × h = ' + l + '×' + w + '×' + h + ' = ' + vol + ' cm³.' };
  }},
  { depth: 'medium', gen: function() {
    var vol_cm3 = _randInt(1, 8) * 1000;
    var litres = vol_cm3 / 1000;
    var opts = _buildOpts(litres + ' litres', [(vol_cm3 / 100) + ' litres', (vol_cm3 * 1000) + ' litres', (litres + 1) + ' litres']);
    return { q: 'Convert ' + _commas(vol_cm3) + ' cm³ to litres.', opts: opts, c: 0,
             e: vol_cm3 + ' ÷ 1000 = ' + litres + ' litres.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var vol = _randInt(40, 200);
    var l = _randInt(4, 10), w = _randInt(2, 6);
    while (vol % (l * w) !== 0) vol++;
    var h = vol / (l * w);
    var opts = _buildOpts(h + ' cm', [vol / l + ' cm', vol / w + ' cm', (h + 1) + ' cm']);
    return { q: 'A cuboid has volume ' + vol + ' cm³, length ' + l + ' cm, width ' + w + ' cm. Find the height.', opts: opts, c: 0,
             e: 'h = V ÷ (l×w) = ' + vol + ' ÷ ' + (l*w) + ' = ' + h + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var l = _randInt(20, 50), w = _randInt(15, 30), h = _randInt(10, 25);
    var vol = l * w * h;
    var litres = vol / 1000;
    var opts = _buildOpts(litres + ' litres', [vol + ' litres', (vol / 100) + ' litres', (litres + 1) + ' litres']);
    return { q: 'A fish tank is ' + l + '×' + w + '×' + h + ' cm. How many litres does it hold?', opts: opts, c: 0,
             e: 'Volume = ' + vol + ' cm³. ' + vol + ' ÷ 1000 = ' + litres + ' litres.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var s1 = _randInt(2, 5);
    var s2 = s1 * 2;
    var vol1 = s1 * s1 * s1;
    var vol2 = s2 * s2 * s2;
    var ratio = vol2 / vol1;
    var opts = _buildOpts(ratio + ' times', [(s2 / s1) + ' times', (ratio + 1) + ' times', '4 times']);
    return { q: 'Cube A has side ' + s1 + ' cm, Cube B has side ' + s2 + ' cm. How many times bigger is B\'s volume?', opts: opts, c: 0,
             e: 'A: ' + vol1 + ' cm³. B: ' + vol2 + ' cm³. Ratio = ' + ratio + ' times (2³ = 8).' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// FINANCIAL LITERACY (mt-28) — 3 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-28-1: Balance a Budget ────────────────────────────────────────────
TEST_GENERATORS["mi-28-1"] = [
  { depth: 'medium', gen: function() {
    var income = _randInt(1500, 3000);
    var expenses = [_randInt(400, 800), _randInt(100, 300), _randInt(50, 200), _randInt(100, 400)];
    var totalExp = expenses.reduce(function(a,b){return a+b;}, 0);
    var surplus = income - totalExp;
    var opts = _buildOpts('£' + surplus, ['£' + totalExp, '£' + income, '£' + (surplus + 100)]);
    return { q: 'Income: £' + income + '. Expenses: £' + expenses.join(', £') + '. What is the surplus?', opts: opts, c: 0,
             e: 'Total expenses = £' + totalExp + '. Surplus = £' + income + ' − £' + totalExp + ' = £' + surplus + '.' };
  }},
  { depth: 'medium', gen: function() {
    var income = _randInt(1200, 2500);
    var totalExp = income + _randInt(50, 300);
    var deficit = totalExp - income;
    var opts = _buildOpts('£' + deficit + ' deficit', ['£' + deficit + ' surplus', '£' + income, '£' + totalExp]);
    return { q: 'Income: £' + income + '. Expenses: £' + totalExp + '. Is this a surplus or deficit, and how much?', opts: opts, c: 0,
             e: 'Expenses > Income. Deficit = £' + totalExp + ' − £' + income + ' = £' + deficit + '.' };
  }},
  { depth: 'medium', gen: function() {
    var items = ['Rent', 'Food', 'Transport', 'Entertainment'];
    var amounts = [_randInt(500, 900), _randInt(200, 400), _randInt(50, 150), _randInt(50, 200)];
    var total = amounts.reduce(function(a,b){return a+b;}, 0);
    var opts = _buildOpts('£' + total, ['£' + amounts[0], '£' + (total + 100), '£' + (amounts[0] + amounts[1])]);
    return { q: 'Monthly budget: ' + items.map(function(it, i){return it + '=£' + amounts[i];}).join(', ') + '. Total expenses?', opts: opts, c: 0,
             e: 'Total = £' + amounts.join(' + £') + ' = £' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var income = _randInt(2000, 3500);
    var savingsGoal = _pickFrom([10, 15, 20]);
    var savings = income * savingsGoal / 100;
    var remaining = income - savings;
    var opts = _buildOpts('£' + savings, ['£' + remaining, '£' + income, '£' + (savings + 50)]);
    return { q: 'You earn £' + income + '/month and want to save ' + savingsGoal + '%. How much do you save?', opts: opts, c: 0,
             e: savingsGoal + '% of £' + income + ' = £' + savings + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var income = _randInt(2000, 3000);
    var fixedCosts = _randInt(1200, 1800);
    var varCosts = _randInt(300, 600);
    var savings = income - fixedCosts - varCosts;
    var opts = _buildOpts('£' + savings, ['£' + (income - fixedCosts), '£' + varCosts, '£' + (savings + fixedCosts)]);
    return { q: 'Income: £' + income + '. Fixed costs: £' + fixedCosts + '. Variable costs: £' + varCosts + '. How much is left for savings?', opts: opts, c: 0,
             e: '£' + income + ' − £' + fixedCosts + ' − £' + varCosts + ' = £' + savings + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var weekly = _randInt(80, 200);
    var monthly = weekly * 52 / 12;
    monthly = Math.round(monthly);
    var opts = _buildOpts('≈ £' + monthly, ['£' + (weekly * 4), '£' + (weekly * 5), '£' + (monthly + 50)]);
    return { q: 'You earn £' + weekly + '/week. What is your approximate monthly income? (Use 52 weeks ÷ 12)', opts: opts, c: 0,
             e: '£' + weekly + ' × 52 ÷ 12 ≈ £' + monthly + '/month.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var income = _randInt(2000, 3000);
    var target = _randInt(3000, 6000);
    var months = Math.ceil(target / (income * 0.1));
    var monthlySaving = Math.round(income * 0.1);
    var opts = _buildOpts(months + ' months', [(months - 1) + ' months', (months + 2) + ' months', Math.floor(target / income) + ' months']);
    return { q: 'You save 10% of your £' + income + ' income monthly. How many months to save £' + target + '?', opts: opts, c: 0,
             e: 'Monthly saving = £' + monthlySaving + '. Months = £' + target + ' ÷ £' + monthlySaving + ' ≈ ' + months + '.' };
  }}
];

// ── mi-28-2: Debit & Credit Cards ────────────────────────────────────────
TEST_GENERATORS["mi-28-2"] = [
  { depth: 'medium', gen: function() {
    var opts = ['Money comes directly from your bank account', 'You borrow money from the card company', 'It adds to your savings', 'It uses a credit limit'];
    return { q: 'What happens when you pay with a debit card?', opts: opts, c: 0,
             e: 'Debit card = money taken directly from your bank account.' };
  }},
  { depth: 'medium', gen: function() {
    var opts = ['You borrow money and may pay interest', 'Money is taken from savings', 'You must pay cash first', 'No repayment needed'];
    return { q: 'What happens when you pay with a credit card?', opts: opts, c: 0,
             e: 'Credit card = borrowing money. If not repaid in full, interest is charged.' };
  }},
  { depth: 'medium', gen: function() {
    var borrowed = _randInt(200, 1000);
    var rate = _pickFrom([15, 18, 20, 24]);
    var interest = Math.round(borrowed * rate / 100);
    var opts = _buildOpts('£' + interest, ['£' + rate, '£' + borrowed, '£' + (interest + borrowed)]);
    return { q: 'You owe £' + borrowed + ' on a credit card at ' + rate + '% annual interest. How much interest after 1 year?', opts: opts, c: 0,
             e: rate + '% of £' + borrowed + ' = £' + interest + '.' };
  }},
  { depth: 'medium', gen: function() {
    var opts = ['Debit card', 'Credit card', 'Both equally', 'Neither'];
    return { q: 'Which card type means you cannot spend more than you have in your account?', opts: opts, c: 0,
             e: 'Debit card — limited to your bank balance.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var balance = _randInt(500, 2000);
    var minPay = Math.round(balance * 0.03);
    if (minPay < 25) minPay = 25;
    var opts = _buildOpts('£' + minPay, ['£' + balance, '£' + Math.round(balance * 0.1), '£0']);
    return { q: 'Credit card balance: £' + balance + '. Minimum payment is 3% (min £25). What is the minimum payment?', opts: opts, c: 0,
             e: '3% of £' + balance + ' = £' + Math.round(balance*0.03) + '. Minimum = £' + minPay + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var spent = _randInt(100, 500);
    var rate = _pickFrom([18, 20, 24]);
    var monthly_rate = rate / 12;
    var interest = Math.round(spent * monthly_rate) / 100;
    var owed = (spent + interest).toFixed(2);
    var opts = ['£' + owed, '£' + spent, '£' + (spent + rate), '£' + (spent * 2)];
    return { q: 'You spend £' + spent + ' on credit at ' + rate + '% annual (' + monthly_rate.toFixed(1) + '%/month). What do you owe after 1 month?', opts: opts, c: 0,
             e: 'Monthly interest = £' + spent + ' × ' + monthly_rate.toFixed(3) + ' = £' + interest.toFixed(2) + '. Owe: £' + owed + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var scenarios = [
      { q: 'Buying groceries for the week', ans: 'Debit card', why: 'everyday purchase, pay from your own money' },
      { q: 'Emergency car repair when account is empty', ans: 'Credit card', why: 'need to borrow temporarily' },
      { q: 'Online purchase needing buyer protection', ans: 'Credit card', why: 'credit cards offer purchase protection' }
    ];
    var pick = _pickFrom(scenarios);
    var opts = [pick.ans, pick.ans === 'Debit card' ? 'Credit card' : 'Debit card', 'Cash only', 'Either is fine'];
    return { q: 'Which is usually better for: ' + pick.q + '?', opts: opts, c: 0,
             e: pick.ans + ' — ' + pick.why + '.' };
  }}
];

// ── mi-28-3: Adjust a Budget ─────────────────────────────────────────────
TEST_GENERATORS["mi-28-3"] = [
  { depth: 'medium', gen: function() {
    var items = [
      { name: 'Rent', amount: _randInt(600, 1000), essential: true },
      { name: 'Food', amount: _randInt(200, 400), essential: true },
      { name: 'Streaming', amount: _randInt(10, 30), essential: false },
      { name: 'Gym', amount: _randInt(20, 50), essential: false }
    ];
    var nonEss = items.filter(function(i){return !i.essential;});
    var total = nonEss.reduce(function(a,i){return a + i.amount;}, 0);
    var opts = _buildOpts('£' + total, ['£' + items[0].amount, '£' + (items[0].amount + items[1].amount), '£' + nonEss[0].amount]);
    return { q: 'Budget: ' + items.map(function(i){return i.name + '=£' + i.amount;}).join(', ') + '. How much is spent on non-essentials?', opts: opts, c: 0,
             e: 'Non-essential: ' + nonEss.map(function(i){return '£'+i.amount;}).join('+') + ' = £' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var income = _randInt(1800, 2800);
    var expenses = income + _randInt(100, 300);
    var deficit = expenses - income;
    var streaming = _randInt(10, 15);
    var eating = _randInt(80, 150);
    var clothes = _randInt(50, 100);
    var canCut = streaming + eating + clothes;
    var enough = canCut >= deficit ? 'Yes' : 'No';
    var opts = [enough, enough === 'Yes' ? 'No' : 'Yes', 'Maybe', 'Need more info'];
    return { q: 'Deficit: £' + deficit + '. You could cut streaming (£' + streaming + '), eating out (£' + eating + '), clothes (£' + clothes + '). Is that enough?', opts: opts, c: 0,
             e: 'Can save: £' + canCut + '. Deficit: £' + deficit + '. ' + (canCut >= deficit ? 'Yes, £'+canCut+' ≥ £'+deficit : 'No, £'+canCut+' < £'+deficit) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var goal = _randInt(500, 2000);
    var months = _randInt(6, 12);
    var perMonth = Math.ceil(goal / months);
    var opts = _buildOpts('£' + perMonth + '/month', ['£' + goal + '/month', '£' + months + '/month', '£' + (perMonth - 10) + '/month']);
    return { q: 'Savings goal: £' + goal + ' in ' + months + ' months. How much per month?', opts: opts, c: 0,
             e: '£' + goal + ' ÷ ' + months + ' = £' + perMonth + '/month (rounded up).' };
  }},
  { depth: 'medium', gen: function() {
    var food = _randInt(300, 500);
    var reduction = _pickFrom([10, 15, 20]);
    var saving = Math.round(food * reduction / 100);
    var newBudget = food - saving;
    var opts = _buildOpts('£' + newBudget, ['£' + saving, '£' + food, '£' + (newBudget + 10)]);
    return { q: 'Food budget is £' + food + '. You reduce it by ' + reduction + '%. New food budget?', opts: opts, c: 0,
             e: 'Save £' + saving + '. New budget = £' + food + ' − £' + saving + ' = £' + newBudget + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var income = _randInt(2200, 3200);
    var essential = _randInt(1500, 2000);
    var wants = _randInt(400, 700);
    var current_savings = income - essential - wants;
    var target_savings = _randInt(current_savings + 50, current_savings + 200);
    var extra_needed = target_savings - current_savings;
    var opts = _buildOpts('£' + extra_needed, ['£' + target_savings, '£' + current_savings, '£' + (extra_needed + 50)]);
    return { q: 'Income £' + income + ', essentials £' + essential + ', wants £' + wants + '. Current savings: £' + current_savings + '. To save £' + target_savings + ', how much must you cut from wants?', opts: opts, c: 0,
             e: 'Need extra £' + target_savings + ' − £' + current_savings + ' = £' + extra_needed + ' from wants.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var subscriptions = [_randInt(8, 15), _randInt(10, 20), _randInt(5, 12), _randInt(6, 10)];
    var total = subscriptions.reduce(function(a,b){return a+b;}, 0);
    var annual = total * 12;
    var opts = _buildOpts('£' + annual, ['£' + total, '£' + (total * 52), '£' + (annual + total)]);
    return { q: 'Monthly subscriptions: £' + subscriptions.join(', £') + '. What is the annual total?', opts: opts, c: 0,
             e: 'Monthly total = £' + total + '. Annual = £' + total + ' × 12 = £' + annual + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var income = _randInt(2000, 3000);
    var rule50 = Math.round(income * 0.5);
    var rule30 = Math.round(income * 0.3);
    var rule20 = Math.round(income * 0.2);
    var opts = _buildOpts('£' + rule50 + ' needs, £' + rule30 + ' wants, £' + rule20 + ' savings',
      ['£' + rule30 + ' needs, £' + rule50 + ' wants, £' + rule20 + ' savings',
       '£' + rule50 + ' needs, £' + rule20 + ' wants, £' + rule30 + ' savings',
       '£' + income + ' needs, £0 wants, £0 savings']);
    return { q: 'Apply the 50/30/20 rule to £' + income + ' income. How much for needs, wants, savings?', opts: opts, c: 0,
             e: '50% needs = £' + rule50 + '. 30% wants = £' + rule30 + '. 20% savings = £' + rule20 + '.' };
  }}
];
