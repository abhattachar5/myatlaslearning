// test-generator.js — Generates topic-level test questions
// 5 questions per subtopic, 50% medium-high complexity, 50% greater depth
// All questions are generative (dynamically created each time)

// Normalise a static question ({q,opts,c,e} or {question,options,answer,explanation}) to {q,opts,c,e}.
function _normaliseTestQ(raw) {
  return {
    q:    raw.q    !== undefined ? raw.q    : (raw.question    || ''),
    opts: raw.opts !== undefined ? raw.opts : (raw.options     || []),
    c:    raw.c    !== undefined ? raw.c    : (raw.answer      !== undefined ? raw.answer : 0),
    e:    raw.e    !== undefined ? raw.e    : (raw.explanation || '')
  };
}

// Return question generators for an island. Falls back to the static QUESTIONS bank
// (wrapping each fixed question as a generator) for islands without dedicated generators,
// e.g. English topics.
function _islandGenerators(islandId) {
  var gens = TEST_GENERATORS[islandId];
  if (gens && gens.length) return gens;
  // Fall back to STATIC questions only. Generative bank entries (e.g. math practice
  // questions) depend on helpers defined in island.html, not available here, so skip them.
  var bank = (typeof QUESTIONS !== 'undefined') ? QUESTIONS[islandId] : null;
  if (bank && bank.length) {
    var statics = bank.filter(function(raw) { return typeof raw.gen !== 'function'; });
    if (statics.length) {
      // Year 8 maths banks (m8i-*) are static and untagged. Assign depth by position
      // so topic tests get the same medium/greater-depth split as Year 7: the harder
      // questions sit later in each bank, so the last ~40% become greater-depth.
      var gdStart = Math.ceil(statics.length * 0.6);
      return statics.map(function(raw, idx) {
        var depth = raw.depth;
        if (!depth) {
          depth = (/^m8i-/.test(islandId) && idx >= gdStart) ? 'greater-depth' : 'medium';
        }
        return { depth: depth, gen: function() { return _normaliseTestQ(raw); } };
      });
    }
  }
  return null;
}

// True if every option in a question is a distinct string.
function _optsAllDistinct(q) {
  if (!q || !q.opts) return false;
  var seen = {};
  for (var i = 0; i < q.opts.length; i++) {
    var k = String(q.opts[i]);
    if (seen[k]) return false;
    seen[k] = true;
  }
  return true;
}

// Remove duplicate options, keeping the correct answer pointing at the right value.
// Used only as a last resort if a generator can't produce a distinct set.
function _dedupeQ(q) {
  var correctVals = (Array.isArray(q.c) ? q.c : [q.c]).map(function(i) { return String(q.opts[i]); });
  var seen = {}, newOpts = [];
  for (var i = 0; i < q.opts.length; i++) {
    var k = String(q.opts[i]);
    if (seen[k] === undefined) { seen[k] = newOpts.length; newOpts.push(q.opts[i]); }
  }
  q.opts = newOpts;
  if (Array.isArray(q.c)) {
    var cs = [];
    for (var j = 0; j < correctVals.length; j++) { var idx = seen[correctVals[j]]; if (cs.indexOf(idx) === -1) cs.push(idx); }
    q.c = cs;
  } else {
    q.c = seen[correctVals[0]];
  }
  return q;
}

// Call a generator, retrying until it yields a question with all-distinct options
// (most duplicate-option collisions are intermittent). Dedupe as a final fallback.
function _genDistinctQ(gp) {
  var q;
  for (var attempt = 0; attempt < 15; attempt++) {
    q = gp.gen();
    if (_optsAllDistinct(q)) return q;
  }
  return _dedupeQ(q);
}

function generateTopicTest(topicId, topicIslands, opts) {
  opts = opts || {};
  var MAX_QUESTIONS = (opts.maxQuestions && opts.maxQuestions > 0) ? opts.maxQuestions : 25;
  var difficulty = opts.difficulty || 'mixed';   // 'foundation' | 'mixed' | 'higher'
  var allQuestions = [];

  // Count islands that have questions (dedicated generators or a static bank)
  var islandsWithGens = [];
  for (var i = 0; i < topicIslands.length; i++) {
    if (_islandGenerators(topicIslands[i].id)) islandsWithGens.push(topicIslands[i]);
  }
  var numIslands = islandsWithGens.length;
  if (numIslands === 0) return allQuestions;

  // Distribute questions evenly across islands, capped at MAX_QUESTIONS
  var perIsland = Math.min(5, Math.floor(MAX_QUESTIONS / numIslands));
  if (perIsland < 1) perIsland = 1;
  var totalBase = numIslands * perIsland;
  var remainder = totalBase < MAX_QUESTIONS
    ? Math.min(numIslands, MAX_QUESTIONS - totalBase) : 0;

  for (var i = 0; i < numIslands; i++) {
    var island = islandsWithGens[i];
    var generators = _islandGenerators(island.id);

    var medQuestions = [];
    var gdQuestions = [];

    for (var g = 0; g < generators.length; g++) {
      var q = _genDistinctQ(generators[g]);
      q.depth = generators[g].depth;
      q.subtopic = island.name;
      q.islandId = island.id;
      if (q.depth === 'greater-depth') {
        gdQuestions.push(q);
      } else {
        medQuestions.push(q);
      }
    }

    var quota = perIsland + (i < remainder ? 1 : 0);
    var medFrac = difficulty === 'foundation' ? 1 : (difficulty === 'higher' ? 0 : 0.6);
    var medTarget = Math.round(quota * medFrac);
    var gdTarget = quota - medTarget;

    var picked = [];
    shuffle(medQuestions);
    shuffle(gdQuestions);

    var medCount = Math.min(medTarget, medQuestions.length);
    var gdCount = Math.min(gdTarget, gdQuestions.length);

    // If one pool is short, fill from the other
    if (medCount < medTarget && gdQuestions.length > gdCount) {
      gdCount = Math.min(quota - medCount, gdQuestions.length);
    }
    if (gdCount < gdTarget && medQuestions.length > medCount) {
      medCount = Math.min(quota - gdCount, medQuestions.length);
    }

    for (var m = 0; m < medCount; m++) picked.push(medQuestions[m]);
    for (var d = 0; d < gdCount; d++) picked.push(gdQuestions[d]);

    // Shuffle the picked questions
    shuffle(picked);

    // Shuffle options for each question (keeping correct answer tracked)
    for (var p = 0; p < picked.length; p++) {
      picked[p] = shuffleOptions(picked[p]);
    }

    allQuestions = allQuestions.concat(picked);
  }

  // Final safety cap
  if (allQuestions.length > MAX_QUESTIONS) {
    shuffle(allQuestions);
    allQuestions = allQuestions.slice(0, MAX_QUESTIONS);
  }

  return allQuestions;
}

// ── Curriculum mock exam ───────────────────────────────────────────────────────
// Aggregates questions across the given (mastered) topics for a subject, allocating
// the question budget proportionally per topic, then capping at maxQuestions. Each
// question is tagged with topicId so results can be broken down by topic.
function generateExam(subjectId, opts) {
  opts = opts || {};
  var topicIds = opts.topicIds || [];
  var maxQuestions = (opts.maxQuestions && opts.maxQuestions > 0) ? opts.maxQuestions : 40;
  var difficulty = opts.difficulty || 'mixed';
  if (typeof CURRICULUM === 'undefined' || !topicIds.length) return [];

  // Topic name lookup across all loaded topic arrays.
  var topicNames = {};
  ['MATH_TOPICS','MATH_TOPICS_Y8','ENGLISH_TOPICS','ENGLISH_TOPICS_Y8','SCIENCE_Y7_TOPICS',
   'SCIENCE_TOPICS_Y8','HISTORY_TOPICS','HISTORY_TOPICS_Y8','GEOGRAPHY_TOPICS','GEOGRAPHY_TOPICS_Y8']
    .forEach(function (n) {
      try { var arr = eval('typeof ' + n + " !== 'undefined' ? " + n + ' : null'); if (arr) arr.forEach(function (t) { topicNames[t.id] = t.name; }); } catch (e) {}
    });

  var perTopic = Math.max(1, Math.ceil(maxQuestions / topicIds.length));
  var all = [];
  topicIds.forEach(function (tid) {
    var islands = CURRICULUM.filter(function (i) { return i.topicId === tid; });
    var qs = generateTopicTest(tid, islands, { maxQuestions: perTopic + 2, difficulty: difficulty });
    qs.forEach(function (q) { q.topicId = tid; q.topicName = topicNames[tid] || tid; });
    all = all.concat(qs);
  });
  shuffle(all);
  if (all.length > maxQuestions) all = all.slice(0, maxQuestions);
  return all;
}

function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
  }
}

function shuffleOptions(q) {
  var indices = [];
  for (var i = 0; i < q.opts.length; i++) indices.push(i);
  shuffle(indices);
  var newOpts = [];
  if (Array.isArray(q.c)) {
    var newC = [];
    for (var i = 0; i < indices.length; i++) {
      newOpts.push(q.opts[indices[i]]);
      if (q.c.indexOf(indices[i]) !== -1) newC.push(i);
    }
    q.opts = newOpts;
    q.c = newC;
  } else {
    var newC = 0;
    for (var i = 0; i < indices.length; i++) {
      newOpts.push(q.opts[indices[i]]);
      if (indices[i] === q.c) newC = i;
    }
    q.opts = newOpts;
    q.c = newC;
  }
  return q;
}

// ── Helper functions for generators ──────────────────────────────────────
function _randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function _pickFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function _snapNum(v) {
  if (typeof v === 'number' && isFinite(v)) {
    var r = Math.round(v * 1e10) / 1e10;
    var r2 = Math.round(r * 100) / 100;
    if (Math.abs(r - r2) < 1e-9) return r2;
    return r;
  }
  return v;
}
function _buildOpts(correct, wrongs) {
  var snapped = _snapNum(correct);
  var cs = String(snapped);
  var seen = [cs], opts = [cs];
  for (var i = 0; i < wrongs.length && opts.length < 4; i++) {
    var ws = String(_snapNum(wrongs[i]));
    if (ws !== cs && seen.indexOf(ws) === -1) { seen.push(ws); opts.push(ws); }
  }
  var pad = 1;
  var numCorrect = Number(String(snapped).replace(/,/g, ''));
  while (opts.length < 4 && pad < 50) {
    var fb;
    if (!isNaN(numCorrect) && isFinite(numCorrect)) {
      var step = Math.max(1, Math.round(Math.abs(numCorrect) * 0.1));
      var pert = numCorrect + (pad % 2 === 1 ? step * pad : -step * pad);
      fb = _commas(_snapNum(pert));
    } else {
      fb = String(correct) + ' (alt ' + pad + ')';
    }
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
    for (var i = 6; i >= 0; i--) {
      if (i === placeIdx) { numArr.push(digit); }
      else { var d; do { d = _randInt(0, 9); } while (d === digit); numArr.push(d); }
    }
    if (numArr[0] === 0) { var d; do { d = _randInt(1, 9); } while (d === digit); numArr[0] = d; }
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
    // Generate four distinct 6-digit numbers
    var picked = [];
    while (picked.length < 4) {
      var n = _randInt(100000, 999999);
      if (picked.indexOf(n) === -1) picked.push(n);
    }
    var all = picked.slice().sort(function(x, y) { return x - y; });
    var ansStr = all.map(_commas).join(' < ');
    var wrong1 = all.slice().reverse().map(_commas).join(' < ');
    var wrong2Arr = all.slice(); wrong2Arr[1] = all[2]; wrong2Arr[2] = all[1];
    var wrong2 = wrong2Arr.map(_commas).join(' < ');
    var wrong3Arr = all.slice(); wrong3Arr[0] = all[3]; wrong3Arr[3] = all[0];
    var wrong3 = wrong3Arr.map(_commas).join(' < ');
    var opts = [ansStr, wrong1, wrong2, wrong3];
    // Display in pseudo-random order using shuffle (not Math.random()-0.5)
    var display = picked.slice();
    shuffle(display);
    return { q: 'Put these in order from smallest to largest: ' + display.map(_commas).join(', '),
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
    // Use the same digit at different place values so ratio is always a clean power of 10
    var digit = _randInt(2, 8);
    var gap = _randInt(2, 4); // power-of-10 gap
    var multipliers = [1, 10, 100, 1000, 10000, 100000, 1000000];
    var place2 = _randInt(1, 3);
    var place1 = place2 + gap;
    var val1 = digit * multipliers[place1];
    var val2 = digit * multipliers[place2];
    var ratio = Math.pow(10, gap);
    var opts = _buildOpts(_commas(ratio), [_commas(ratio * 10), _commas(ratio / 10), _commas(gap)]);
    return { q: 'In a number, the digit ' + digit + ' appears twice with values of ' + _commas(val1) + ' and ' + _commas(val2) + '. How many times greater is ' + _commas(val1) + ' than ' + _commas(val2) + '?',
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
    // Build distractors by mutating the target number so they're guaranteed NOT to also have
    // the same digit at the same place value (avoiding ambiguous "two correct answers")
    var num = _randInt(2000000, 8000000);
    var numStr = String(num);
    var digitPos = _randInt(1, 5);
    var digit = parseInt(numStr[digitPos]);
    while (digit === 0) { num = _randInt(2000000, 8000000); numStr = String(num); digit = parseInt(numStr[digitPos]); }
    var places = [1000000, 100000, 10000, 1000, 100, 10, 1];
    var placeNames = ['millions','hundred-thousands','ten-thousands','thousands','hundreds','tens','units'];
    var val = digit * places[digitPos];
    // Build wrong numbers by replacing the digit at digitPos with a different digit
    function mutate(replacement) {
      var arr = numStr.split('');
      arr[digitPos] = String(replacement);
      return parseInt(arr.join(''));
    }
    var d2 = digit === 9 ? 1 : digit + 1;
    var d3 = digit <= 2 ? 8 : digit - 1;
    var d4 = digit === 5 ? 7 : (digit + 3) % 10 || 4;
    var wrong1 = mutate(d2), wrong2 = mutate(d3), wrong3 = mutate(d4);
    var opts = [_commas(num), _commas(wrong1), _commas(wrong2), _commas(wrong3)];
    return { q: 'In which number does the digit ' + digit + ' have a value of ' + _commas(val) + '?',
             opts: opts, c: 0,
             e: 'In ' + _commas(num) + ', the digit ' + digit + ' is in the ' + placeNames[digitPos] + ' place, giving it a value of ' + _commas(val) + '.' };
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
             e: '£' + _commas(a) + ' − £' + _commas(b) + ' = £' + _commas(ans) + '. Then + £' + _commas(c) + ' = £' + _commas(finalAns) + '.' };
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
    var nums = [base, base + 1, base + 3, base + 4];
    var correctIdxs = [];
    for (var i = 0; i < nums.length; i++) { if (nums[i] % 3 === 0) correctIdxs.push(i); }
    var opts = [_commas(nums[0]), _commas(nums[1]), _commas(nums[2]), _commas(nums[3])];
    var expParts = [];
    for (var j = 0; j < correctIdxs.length; j++) { expParts.push(_commas(nums[correctIdxs[j]]) + ' ÷ 3 = ' + (nums[correctIdxs[j]] / 3)); }
    return { q: 'Which of these numbers are divisible by 3?', opts: opts, c: correctIdxs,
             e: 'Divisible by 3: ' + expParts.join('; ') + '.' };
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
    var nums = [n, n + 1, n + 3, n - 1];
    var correctIdxs = [];
    for (var i = 0; i < nums.length; i++) { if (nums[i] % 6 === 0) correctIdxs.push(i); }
    var opts = [_commas(nums[0]), _commas(nums[1]), _commas(nums[2]), _commas(nums[3])];
    if (correctIdxs.length > 1) {
      var expParts = [];
      for (var j = 0; j < correctIdxs.length; j++) { expParts.push(_commas(nums[correctIdxs[j]])); }
      return { q: 'Which of these numbers are divisible by 6?', opts: opts, c: correctIdxs,
               e: 'Divisible by 6 (even AND digit sum divisible by 3): ' + expParts.join(', ') + '.' };
    }
    return { q: 'Which number is divisible by 6?', opts: opts, c: 0,
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
// NUMBER THEORY (mt-04) — 5 subtopics
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
    return { q: product + ' = ' + p1 + ' × ' + p2 + '. Both are prime. List all factors of ' + product + '.', opts: opts, c: 0,
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

// ── mi-04-5: Multiplicative Inverses ─────────────────────────────────
TEST_GENERATORS["mi-04-5"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var n = _randInt(2, 12);
    var opts = _buildOpts('1/' + n, ['1/' + (n + 1), n + '/1', '1/' + (n - 1 || 2)]);
    return { q: 'What is the multiplicative inverse of ' + n + '?', opts: opts, c: 0,
             e: 'The reciprocal of ' + n + ' is 1/' + n + '. Check: ' + n + ' × 1/' + n + ' = 1.' };
  }},
  { depth: 'medium', gen: function() {
    var fracs = [{n:1,d:3,rn:3,rd:1},{n:1,d:4,rn:4,rd:1},{n:1,d:5,rn:5,rd:1},{n:1,d:6,rn:6,rd:1},{n:1,d:8,rn:8,rd:1}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts('' + f.rn, ['1/' + f.d, '' + f.d + '/' + f.d, '' + (f.rn + 1)]);
    return { q: 'What is the reciprocal of 1/' + f.d + '?', opts: opts, c: 0,
             e: 'Flip the fraction: 1/' + f.d + ' → ' + f.d + '/1 = ' + f.rn + '. Check: 1/' + f.d + ' × ' + f.rn + ' = 1.' };
  }},
  { depth: 'medium', gen: function() {
    var fracs = [{n:2,d:3,rn:3,rd:2},{n:3,d:4,rn:4,rd:3},{n:2,d:5,rn:5,rd:2},{n:3,d:7,rn:7,rd:3},{n:5,d:6,rn:6,rd:5},{n:4,d:9,rn:9,rd:4}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts(f.rn + '/' + f.rd, [f.n + '/' + f.d, f.rd + '/' + f.rn, '1/' + f.d]);
    return { q: 'What is the reciprocal of ' + f.n + '/' + f.d + '?', opts: opts, c: 0,
             e: 'Flip the fraction: ' + f.n + '/' + f.d + ' → ' + f.rn + '/' + f.rd + '. Check: ' + f.n + '/' + f.d + ' × ' + f.rn + '/' + f.rd + ' = 1.' };
  }},
  { depth: 'medium', gen: function() {
    var pairs = [{d:0.5,r:'2'},{d:0.25,r:'4'},{d:0.2,r:'5'},{d:0.1,r:'10'},{d:0.125,r:'8'}];
    var p = _pickFrom(pairs);
    var opts = _buildOpts(p.r, ['' + p.d, '1/' + p.r, '' + (parseFloat(p.r) + 1)]);
    return { q: 'What is the reciprocal of ' + p.d + '?', opts: opts, c: 0,
             e: p.d + ' as a fraction is 1/' + p.r + '. Flip: reciprocal = ' + p.r + '. Check: ' + p.d + ' × ' + p.r + ' = 1.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var mixed = [{m:'1½',n:3,d:2,rs:'2/3'},{m:'1⅓',n:4,d:3,rs:'3/4'},{m:'2½',n:5,d:2,rs:'2/5'},{m:'1¼',n:5,d:4,rs:'4/5'},{m:'1⅕',n:6,d:5,rs:'5/6'}];
    var f = _pickFrom(mixed);
    var opts = _buildOpts(f.rs, [f.n + '/' + f.d, '1/' + f.n, '' + f.d]);
    return { q: 'What is the reciprocal of ' + f.m + '?', opts: opts, c: 0,
             e: 'Convert: ' + f.m + ' = ' + f.n + '/' + f.d + '. Flip: ' + f.rs + '. Check: ' + f.n + '/' + f.d + ' × ' + f.rs + ' = 1.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var fracs = [{n:3,d:8},{n:5,d:7},{n:2,d:9},{n:4,d:5}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts('1', [f.n + '/' + f.d, '' + (f.n + f.d), '0']);
    return { q: f.n + '/' + f.d + ' × ' + f.d + '/' + f.n + ' = ?', opts: opts, c: 0,
             e: 'A number times its reciprocal always equals 1. ' + f.n + '/' + f.d + ' × ' + f.d + '/' + f.n + ' = ' + (f.n * f.d) + '/' + (f.d * f.n) + ' = 1.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 6);
    var b = _randInt(2, 6);
    while (a === b) b = _randInt(2, 6);
    var prod = a * b;
    var opts = _buildOpts('1/' + prod, ['1/' + a + ' × 1/' + b, '' + prod, '1/' + (a + b)]);
    return { q: 'What is the reciprocal of ' + a + ' × ' + b + ' (= ' + prod + ')?', opts: opts, c: 0,
             e: a + ' × ' + b + ' = ' + prod + '. Reciprocal = 1/' + prod + '. Check: ' + prod + ' × 1/' + prod + ' = 1.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var fracs = [{n:5,d:8},{n:7,d:3},{n:9,d:4},{n:3,d:10}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts(f.d + '/' + f.n, [f.n + '/' + f.d, '1/' + f.n, '' + f.d]);
    return { q: 'If the reciprocal of a number is ' + f.n + '/' + f.d + ', what is the number?', opts: opts, c: 0,
             e: 'If the reciprocal is ' + f.n + '/' + f.d + ', the number is ' + f.d + '/' + f.n + '. Check: ' + f.d + '/' + f.n + ' × ' + f.n + '/' + f.d + ' = 1.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// DECIMALS (mt-05) — 5 subtopics
// ══════════════════════════════════════════════════════════════════════════

// ── mi-05-1: Decimal Place Values & Ordering ─────────────────────────────
TEST_GENERATORS["mi-05-1"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var places = ['tenths','hundredths','thousandths'];
    var multipliers = [0.1, 0.01, 0.001];
    var idx = _randInt(0, 2);
    var digit = _randInt(1, 9);
    var whole; do { whole = _randInt(1, 9); } while (whole === digit);
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

// ── mi-05-5: Advanced Decimal Operations ─────────────────────────────
TEST_GENERATORS["mi-05-5"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9) / 10;
    var b = _randInt(2, 9) / 10;
    var ans = parseFloat((a * b).toFixed(2));
    var opts = _buildOpts(ans, [parseFloat((a + b).toFixed(2)), parseFloat((ans * 10).toFixed(2)), parseFloat(Math.abs(a - b).toFixed(2))]);
    return { q: 'Calculate ' + a.toFixed(1) + ' × ' + b.toFixed(1) + '.', opts: opts, c: 0,
             e: 'Multiply as whole numbers: ' + Math.round(a*10) + ' × ' + Math.round(b*10) + ' = ' + (Math.round(a*10)*Math.round(b*10)) + '. Two d.p. → ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(11, 35) / 10;
    var b = _randInt(2, 5) / 10;
    var ans = parseFloat((a * b).toFixed(2));
    var opts = _buildOpts(ans, [parseFloat((a + b).toFixed(2)), parseFloat((ans + 0.1).toFixed(2)), parseFloat((a * 1).toFixed(2))]);
    return { q: 'Calculate ' + a.toFixed(1) + ' × ' + b.toFixed(1) + '.', opts: opts, c: 0,
             e: Math.round(a*10) + ' × ' + Math.round(b*10) + ' = ' + (Math.round(a*10)*Math.round(b*10)) + '. Two d.p. → ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var divisors = [0.2, 0.3, 0.4, 0.5, 0.6, 0.8];
    var d = _pickFrom(divisors);
    var quotient = _randInt(3, 9);
    var dividend = parseFloat((quotient * d).toFixed(2));
    var opts = _buildOpts(quotient, [quotient + 1, parseFloat((dividend + d).toFixed(2)), quotient - 1]);
    return { q: 'Calculate ' + dividend + ' ÷ ' + d + '.', opts: opts, c: 0,
             e: 'Multiply both by 10: ' + parseFloat((dividend*10).toFixed(1)) + ' ÷ ' + (d*10) + ' = ' + quotient + '.' };
  }},
  { depth: 'medium', gen: function() {
    var divisors = [0.4, 0.5, 0.6, 0.8];
    var d = _pickFrom(divisors);
    var quotient = _randInt(11, 25) / 10;
    var dividend = parseFloat((quotient * d).toFixed(2));
    var opts = _buildOpts(quotient, [parseFloat((quotient + 0.1).toFixed(1)), parseFloat((dividend * d).toFixed(2)), parseFloat((quotient * 2).toFixed(1))]);
    return { q: 'Calculate ' + dividend + ' ÷ ' + d + '.', opts: opts, c: 0,
             e: 'Multiply both by 10: ' + parseFloat((dividend*10).toFixed(1)) + ' ÷ ' + (d*10) + ' = ' + quotient + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var divisors = [0.04, 0.05, 0.25];
    var d = _pickFrom(divisors);
    var mult = Math.round(1 / d);
    var dividend = _pickFrom([1.2, 2.4, 3.6, 4.8, 5.0]);
    var ans = parseFloat((dividend / d).toFixed(2));
    var opts = _buildOpts(ans, [parseFloat((dividend * d).toFixed(2)), ans / 10, ans + 1]);
    return { q: 'Calculate ' + dividend + ' ÷ ' + d + '.', opts: opts, c: 0,
             e: 'Multiply both by ' + mult + ': ' + (dividend * mult) + ' ÷ ' + (d * mult) + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 8) / 10;
    var b = _randInt(2, 8) / 10;
    while (a === b) b = _randInt(2, 8) / 10;
    var p1 = parseFloat((a * b).toFixed(2));
    var p2 = parseFloat((a * a).toFixed(2));
    var sym = p1 < p2 ? '<' : '>';
    var correct = a.toFixed(1) + '×' + b.toFixed(1) + ' ' + sym + ' ' + a.toFixed(1) + '×' + a.toFixed(1);
    var wrong = a.toFixed(1) + '×' + b.toFixed(1) + ' ' + (sym === '<' ? '>' : '<') + ' ' + a.toFixed(1) + '×' + a.toFixed(1);
    var opts = _buildOpts(correct, [wrong, p1 + ' = ' + p2, a.toFixed(1) + '×' + b.toFixed(1) + ' = ' + a.toFixed(1) + '×' + a.toFixed(1)]);
    return { q: 'Which is correct: ' + a.toFixed(1) + ' × ' + b.toFixed(1) + ' compared with ' + a.toFixed(1) + ' × ' + a.toFixed(1) + '?', opts: opts, c: 0,
             e: a.toFixed(1) + '×' + b.toFixed(1) + ' = ' + p1 + ' and ' + a.toFixed(1) + '×' + a.toFixed(1) + ' = ' + p2 + '. So ' + correct + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var length = _pickFrom([2.4, 3.6, 4.5, 6.0, 7.2]);
    var piece = _pickFrom([0.15, 0.2, 0.25, 0.3]);
    var ans = Math.round(length / piece);
    var opts = _buildOpts(ans, [ans + 1, ans - 1, parseFloat((length * piece).toFixed(2))]);
    return { q: 'A rope ' + length + ' m long is cut into pieces ' + piece + ' m each. How many pieces?', opts: opts, c: 0,
             e: length + ' ÷ ' + piece + ' = ' + ans + '. Multiply both by ' + Math.round(1/piece) + ' to remove the decimal divisor.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n = _pickFrom([0.6, 0.7, 0.8, 0.9]);
    var sq = parseFloat((n * n).toFixed(2));
    var correct = 'Less than ' + n;
    var opts = _buildOpts(correct, ['Greater than ' + n, 'Equal to ' + n, 'Greater than 1']);
    return { q: 'Without calculating the exact answer, is ' + n + ' × ' + n + ' greater than, less than, or equal to ' + n + '?', opts: opts, c: 0,
             e: 'Multiplying by a number less than 1 gives a smaller result. ' + n + ' × ' + n + ' = ' + sq + ', which is less than ' + n + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// FRACTIONS (mt-06) — 6 subtopics
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

// ── mi-06-5: Recurring Decimals & Fractions as Division ──────────────
TEST_GENERATORS["mi-06-5"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var fracs = [{n:1,d:3,dec:'0.3̇',type:'Recurring'},{n:1,d:4,dec:'0.25',type:'Terminating'},{n:1,d:6,dec:'0.16̇',type:'Recurring'},{n:1,d:5,dec:'0.2',type:'Terminating'},{n:1,d:9,dec:'0.1̇',type:'Recurring'},{n:3,d:8,dec:'0.375',type:'Terminating'}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts(f.type, [f.type==='Recurring'?'Terminating':'Recurring', 'Neither', 'Undefined']);
    return { q: 'Is ' + f.n + '/' + f.d + ' a terminating or recurring decimal?', opts: opts, c: 0,
             e: f.n + '/' + f.d + ' = ' + f.dec + ' → ' + f.type + '. A fraction terminates only if the denominator (simplified) has factors of only 2 and 5.' };
  }},
  { depth: 'medium', gen: function() {
    var fracs = [{n:1,d:3,dec:'0.3̇'},{n:2,d:3,dec:'0.6̇'},{n:1,d:6,dec:'0.16̇'},{n:5,d:6,dec:'0.83̇'},{n:4,d:9,dec:'0.4̇'},{n:7,d:9,dec:'0.7̇'}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts(f.dec, ['0.'+f.n+f.d, '0.'+f.n+'0', f.n+'.'+f.d]);
    return { q: 'Convert ' + f.n + '/' + f.d + ' to a decimal. Use dot notation.', opts: opts, c: 0,
             e: f.n + ' ÷ ' + f.d + ' = ' + f.dec + '.' };
  }},
  { depth: 'medium', gen: function() {
    var items = _randInt(4, 9);
    var total = _randInt(2, items - 1);
    var g = _gcd(total, items);
    var sn = total / g, sd = items / g;
    var opts = _buildOpts(sn + '/' + sd, [items + '/' + total, '1/' + items, (sn+1) + '/' + sd]);
    return { q: total + ' cakes are shared equally among ' + items + ' people. What fraction does each person get?', opts: opts, c: 0,
             e: total + ' ÷ ' + items + ' = ' + total + '/' + items + (g > 1 ? ' = ' + sn + '/' + sd : '') + '. A fraction IS a division.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _pickFrom([20, 24, 30, 36, 40]);
    var part = _randInt(Math.floor(total/5), Math.floor(total/2));
    var g = _gcd(part, total);
    var sn = part / g, sd = total / g;
    var opts = _buildOpts(sn + '/' + sd, [part + '/' + (total * 2), sd + '/' + sn, '1/' + sd]);
    return { q: 'A bar chart shows ' + part + ' out of ' + total + ' students chose art. What simplified fraction is that?', opts: opts, c: 0,
             e: part + '/' + total + ' = ' + sn + '/' + sd + ' (divide by HCF = ' + g + ').' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var fracs = [{n:3,d:8,t:true},{n:5,d:12,t:false},{n:7,d:16,t:true},{n:2,d:7,t:false},{n:3,d:20,t:true},{n:5,d:9,t:false}];
    var f = _pickFrom(fracs);
    var ans = f.t ? 'Terminating' : 'Recurring';
    var opts = _buildOpts(ans, [f.t ? 'Recurring' : 'Terminating', 'Neither', 'Cannot tell']);
    return { q: 'Without dividing, decide: is ' + f.n + '/' + f.d + ' terminating or recurring?', opts: opts, c: 0,
             e: f.d + ' in simplest form has prime factors: ' + (f.t ? 'only 2s and 5s → terminating.' : 'factors other than 2 and 5 → recurring.') };
  }},
  { depth: 'greater-depth', gen: function() {
    var fracs = [{n:2,d:11,dec:'0.1̇8̇',block:'18',len:2},{n:5,d:11,dec:'0.4̇5̇',block:'45',len:2},{n:1,d:7,dec:'0.1̇42857̇',block:'142857',len:6}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts(f.len, [1, f.len + 1, f.len - 1 > 0 ? f.len - 1 : 3]);
    return { q: f.n + '/' + f.d + ' = ' + f.dec + '. How many digits are in the repeating block?', opts: opts, c: 0,
             e: 'The repeating block is "' + f.block + '" with ' + f.len + ' digits.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var total = _pickFrom([24, 30, 36]);
    var a = _randInt(Math.floor(total/4), Math.floor(total/3));
    var b = _randInt(Math.floor(total/5), Math.floor(total/4));
    var rest = total - a - b;
    var opts = _buildOpts(rest, [total - a, total - b, a + b]);
    return { q: total + ' students took a test. ' + a + ' scored A, ' + b + ' scored B. How many scored C or below?', opts: opts, c: 0,
             e: total + ' − ' + a + ' − ' + b + ' = ' + rest + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var fracs = [{n:1,d:3,dec:'0.333...'},{n:2,d:3,dec:'0.666...'},{n:1,d:9,dec:'0.111...'},{n:4,d:9,dec:'0.444...'}];
    var f = _pickFrom(fracs);
    var opts = _buildOpts(f.n + '/' + f.d, [(f.n + 1) + '/' + f.d, f.n + '/' + (f.d + 1), f.d + '/' + f.n]);
    return { q: 'A repeating decimal is ' + f.dec + '. Write it as a fraction in simplest form.', opts: opts, c: 0,
             e: f.dec + ' = ' + f.n + '/' + f.d + '.' };
  }}
];

// ── mi-06-6: Fraction Inequalities ──────────────────────────────────────
TEST_GENERATORS["mi-06-6"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var d = _pickFrom([4, 6, 8, 10, 12]);
    var n1 = _randInt(1, Math.floor(d/3));
    var n2 = _randInt(1, Math.floor(d/3));
    var sum = n1 + n2;
    var half = d / 2;
    var sym = sum > half ? '>' : (sum < half ? '<' : '=');
    var correct = _frac(n1, d) + ' + ' + _frac(n2, d) + ' ' + sym + ' 1/2';
    var wrong = _frac(n1, d) + ' + ' + _frac(n2, d) + ' ' + (sym === '>' ? '<' : '>') + ' 1/2';
    var opts = _buildOpts(correct, [wrong, _frac(n1,d)+' + '+_frac(n2,d)+' = 1/2', _frac(n2,d)+' + '+_frac(n1,d)+' '+(sym==='>'?'<':'>')+' 1/2']);
    return { q: 'Insert <, > or =: ' + _frac(n1,d) + ' + ' + _frac(n2,d) + ' ___ 1/2', opts: opts, c: 0,
             e: _frac(n1,d) + ' + ' + _frac(n2,d) + ' = ' + sum + '/' + d + '. And 1/2 = ' + half + '/' + d + '. So ' + correct + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pairs = [{a:'1/3',b:'1/4',s:'7/12',h:'6/12',sym:'>'},{a:'1/5',b:'1/4',s:'9/20',h:'10/20',sym:'<'},{a:'1/3',b:'1/6',s:'3/6',h:'3/6',sym:'='},{a:'1/4',b:'1/6',s:'5/12',h:'6/12',sym:'<'}];
    var p = _pickFrom(pairs);
    var correct = p.a + ' + ' + p.b + ' ' + p.sym + ' 1/2';
    var wrong = p.a + ' + ' + p.b + ' ' + (p.sym === '>' ? '<' : (p.sym === '<' ? '>' : '>')) + ' 1/2';
    var opts = _buildOpts(correct, [wrong, p.a+' + '+p.b+' '+(p.sym==='='?'>':'=')+' 1/2', '1/2 '+p.sym+' '+p.a+' + '+p.b]);
    return { q: 'Insert <, > or =: ' + p.a + ' + ' + p.b + ' ___ 1/2', opts: opts, c: 0,
             e: p.a + ' + ' + p.b + ' = ' + p.s + '. 1/2 = ' + p.h + '. So ' + correct + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sets = [{a:'5/6',b:'1/3',d:'3/6',comp:'1/2',sym:'>'},{a:'3/4',b:'1/3',d:'5/12',comp:'1/2',sym:'<'},{a:'7/8',b:'1/4',d:'5/8',comp:'1/2',sym:'>'}];
    var p = _pickFrom(sets);
    var correct = p.a + ' − ' + p.b + ' ' + p.sym + ' ' + p.comp;
    var wrong = p.a + ' − ' + p.b + ' ' + (p.sym === '>' ? '<' : '>') + ' ' + p.comp;
    var opts = _buildOpts(correct, [wrong, p.a+' − '+p.b+' = '+p.comp, p.b+' − '+p.a+' '+p.sym+' '+p.comp]);
    return { q: 'Insert <, > or =: ' + p.a + ' − ' + p.b + ' ___ ' + p.comp, opts: opts, c: 0,
             e: p.a + ' − ' + p.b + ' = ' + p.d + '. So ' + correct + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sets = [{a:'2/3',b:'1/4',s:'11/12',comp:'3/4',sym:'>'},{a:'3/4',b:'1/6',s:'11/12',comp:'3/4',sym:'>'},{a:'1/3',b:'1/5',s:'8/15',comp:'1/2',sym:'>'}];
    var p = _pickFrom(sets);
    var correct = p.a + ' + ' + p.b + ' ' + p.sym + ' ' + p.comp;
    var wrong = p.a + ' + ' + p.b + ' ' + (p.sym === '>' ? '<' : '>') + ' ' + p.comp;
    var opts = _buildOpts(correct, [wrong, p.a+' + '+p.b+' = '+p.comp, p.comp+' '+p.sym+' '+p.a+' + '+p.b]);
    return { q: 'Which is correct? ' + p.a + ' + ' + p.b + ' compared with ' + p.comp, opts: opts, c: 0,
             e: p.a + ' + ' + p.b + ' = ' + p.s + '. So ' + correct + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var sets = [{a:'2 1/3',b:'1 1/4',s:'3 7/12',comp:'3 1/2',sym:'>'},{a:'1 1/4',b:'1 1/3',s:'2 7/12',comp:'2 1/2',sym:'>'},{a:'1 1/5',b:'1 1/4',s:'2 9/20',comp:'2 1/2',sym:'<'}];
    var p = _pickFrom(sets);
    var correct = p.a + ' + ' + p.b + ' ' + p.sym + ' ' + p.comp;
    var wrong = p.a + ' + ' + p.b + ' ' + (p.sym === '>' ? '<' : '>') + ' ' + p.comp;
    var opts = _buildOpts(correct, [wrong, p.a+' + '+p.b+' = '+p.comp, p.comp+' '+p.sym+' '+p.a+' + '+p.b]);
    return { q: 'Which is correct? ' + p.a + ' + ' + p.b + ' compared with ' + p.comp, opts: opts, c: 0,
             e: p.a + ' + ' + p.b + ' = ' + p.s + '. So ' + correct + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var sets = [{a:'3 3/4',b:'1 1/3',d:'2 5/12',comp:'2 1/2',sym:'<'},{a:'4 5/6',b:'2 1/4',d:'2 7/12',comp:'2 1/2',sym:'>'},{a:'5 1/3',b:'2 5/6',d:'2 1/2',comp:'2 1/2',sym:'='}];
    var p = _pickFrom(sets);
    var correct = p.a + ' − ' + p.b + ' ' + p.sym + ' ' + p.comp;
    var wrong = p.a + ' − ' + p.b + ' ' + (p.sym === '>' ? '<' : (p.sym === '<' ? '>' : '>')) + ' ' + p.comp;
    var opts = _buildOpts(correct, [wrong, p.a+' − '+p.b+' '+(p.sym==='='?'>':'=')+' '+p.comp, p.b+' − '+p.a+' '+p.sym+' '+p.comp]);
    return { q: 'Insert <, > or =: ' + p.a + ' − ' + p.b + ' ___ ' + p.comp, opts: opts, c: 0,
             e: p.a + ' − ' + p.b + ' = ' + p.d + '. So ' + correct + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var correct = '3/4 + 2/3 > 1 1/3';
    var opts = _buildOpts(correct, ['3/4 + 2/3 < 1 1/3', '3/4 + 2/3 = 1 1/3', '1 1/3 > 3/4 + 2/3']);
    return { q: 'Without a full calculation, compare: 3/4 + 2/3 vs 1 1/3.', opts: opts, c: 0,
             e: '3/4 + 2/3 = 9/12 + 8/12 = 17/12 = 1 5/12. And 1 1/3 = 1 4/12. So 1 5/12 > 1 4/12.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var correct = '<';
    var opts = _buildOpts('<', ['>', '=', 'Cannot tell']);
    return { q: 'Insert <, > or =: 2 2/3 + 1 3/4 ___ 4 1/2', opts: opts, c: 0,
             e: '2 2/3 + 1 3/4 = 2 8/12 + 1 9/12 = 3 17/12 = 4 5/12. And 4 1/2 = 4 6/12. 4 5/12 < 4 6/12.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MULTIPLY & DIVIDE FRACTIONS (mt-07) — 5 subtopics
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

// ── mi-07-5: Scaling & Estimating with Fractions ────────────────────────
TEST_GENERATORS["mi-07-5"] = [
  // MEDIUM-HIGH
  { depth: 'medium', gen: function() {
    var fracs = ['1/2','2/3','3/4','1/5','3/8','5/8','7/8','4/5'];
    var f = _pickFrom(fracs);
    var n = _randInt(10, 50);
    var opts = _buildOpts('Less than ' + n, ['Greater than ' + n, 'Equal to ' + n, 'Cannot tell']);
    return { q: 'Without calculating, will ' + f + ' × ' + n + ' be greater than, less than, or equal to ' + n + '?', opts: opts, c: 0,
             e: f + ' < 1, so multiplying by it makes the result smaller than ' + n + '.' };
  }},
  { depth: 'medium', gen: function() {
    var fracs = ['5/4','3/2','7/5','4/3','5/3','9/8'];
    var f = _pickFrom(fracs);
    var n = _randInt(8, 30);
    var opts = _buildOpts('Greater than ' + n, ['Less than ' + n, 'Equal to ' + n, 'Cannot tell']);
    return { q: 'Without calculating, will ' + f + ' × ' + n + ' be greater than, less than, or equal to ' + n + '?', opts: opts, c: 0,
             e: f + ' > 1 (improper fraction), so multiplying by it makes the result larger than ' + n + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sets = [{f:'1/2',n:47,round:48,est:24},{f:'1/3',n:31,round:30,est:10},{f:'2/5',n:47,round:50,est:20},{f:'3/4',n:33,round:32,est:24},{f:'5/8',n:25,round:24,est:15}];
    var s = _pickFrom(sets);
    var opts = _buildOpts('About ' + s.est, ['About ' + s.n, 'About ' + (s.est * 3), 'About ' + Math.round(s.est / 2)]);
    return { q: 'Estimate ' + s.f + ' × ' + s.n + '. (Hint: round to a friendly number.)', opts: opts, c: 0,
             e: 'Round ' + s.n + ' to ' + s.round + '. Then ' + s.f + ' × ' + s.round + ' ≈ ' + s.est + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sets = [{f:'2/3',n:24,ans:16},{f:'3/4',n:20,ans:15},{f:'1/5',n:30,ans:6},{f:'5/8',n:16,ans:10},{f:'4/5',n:25,ans:20}];
    var s = _pickFrom(sets);
    var opts = _buildOpts('£' + s.ans, ['£' + s.n, '£' + (s.ans + 1), '£' + (s.ans - 1)]);
    return { q: 'A jacket costs £' + s.n + ' and is reduced by ' + s.f + '. How much is the reduction?', opts: opts, c: 0,
             e: s.f + ' × ' + s.n + ' = ' + s.ans + '. Since ' + s.f + ' < 1, the reduction (£' + s.ans + ') is less than £' + s.n + '.' };
  }},
  // GREATER DEPTH
  { depth: 'greater-depth', gen: function() {
    var sets = [{m:'2 1/2',n:9,est:23,label:'about 22-23'},{m:'1 1/3',n:12,est:16,label:'about 16'},{m:'3 1/4',n:8,est:26,label:'about 26'},{m:'1 3/4',n:10,est:18,label:'about 17-18'}];
    var s = _pickFrom(sets);
    var opts = _buildOpts(s.label, ['About ' + s.n, 'About ' + (s.est * 2), 'About ' + Math.round(s.est / 2)]);
    return { q: 'Estimate ' + s.m + ' × ' + s.n + '.', opts: opts, c: 0,
             e: s.m + ' > 1, so the product is greater than ' + s.n + '. Estimate: ' + s.label + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var f = _pickFrom(['3/5','7/8','2/9','5/6']);
    var n = _randInt(20, 50);
    var correct = n + ' is larger because ' + f + ' < 1';
    var opts = _buildOpts(correct, [f + ' × ' + n + ' is larger', 'They are equal', 'Cannot tell']);
    return { q: 'Without calculating: which is larger, ' + f + ' × ' + n + ' or ' + n + '?', opts: opts, c: 0,
             e: f + ' < 1, so ' + f + ' × ' + n + ' < ' + n + '. Multiplying by a fraction less than 1 always shrinks the number.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var opts = _buildOpts('Closer to 9', ['Closer to 8', 'Exactly 8', 'Exactly 9']);
    return { q: 'Estimate 2 3/4 × 3 1/5. Is the answer closer to 8 or 9?', opts: opts, c: 0,
             e: 'Round: 3 × 3 = 9. Exact: 11/4 × 16/5 = 176/20 = 8.8. Closer to 9.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var opts = _buildOpts('No — it is about 12', ['Yes — 2/3 is close to 1', 'No — it is about 6', 'Yes — always gives the same']);
    return { q: 'Tom says "2/3 × 18 is about 18." Is he correct?', opts: opts, c: 0,
             e: '2/3 × 18 = 12. Since 2/3 < 1, the product is smaller than 18. Tom is incorrect.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// INTEGERS (mt-08) — 5 subtopics
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

// ── mi-08-5: Integer Input/Output Tables ─────────────────────────────────
TEST_GENERATORS["mi-08-5"] = [
  { depth: 'medium', gen: function() {
    var rule = _randInt(2, 9);
    var inp = -_randInt(1, 10);
    var ans = inp + rule;
    var opts = _buildOpts(ans, [inp - rule, -ans, inp]);
    return { q: 'Rule: add ' + rule + '. Input = ' + inp + '. Output = ?', opts: opts, c: 0,
             e: inp + ' + ' + rule + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var rule = -_randInt(2, 9);
    var inp = _randInt(1, 10);
    var ans = inp + rule;
    var opts = _buildOpts(ans, [inp - rule, -ans, inp]);
    return { q: 'Rule: add ' + rule + '. Input = ' + inp + '. Output = ?', opts: opts, c: 0,
             e: inp + ' + (' + rule + ') = ' + inp + ' − ' + Math.abs(rule) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var rule = _randInt(3, 8);
    var inp1 = _randInt(1, 6), out1 = inp1 + rule;
    var inp2 = -_randInt(1, 6), out2 = inp2 + rule;
    var inp3 = -_randInt(7, 12);
    var ans = inp3 + rule;
    var opts = _buildOpts(ans, [inp3 - rule, -ans, inp3]);
    return { q: 'Input → Output: ' + inp1 + '→' + out1 + ', ' + inp2 + '→' + out2 + '. Find the output for input ' + inp3 + '.', opts: opts, c: 0,
             e: 'Rule is add ' + rule + '. ' + inp3 + ' + ' + rule + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var rule = _randInt(2, 8);
    var out = -_randInt(1, 10);
    var ans = out - rule;
    var opts = _buildOpts(ans, [out + rule, -ans, out]);
    return { q: 'Rule: add ' + rule + '. Output = ' + out + '. What was the input?', opts: opts, c: 0,
             e: 'Input + ' + rule + ' = ' + out + '. Input = ' + out + ' − ' + rule + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var rule = _randInt(3, 9);
    var inp1 = _randInt(2, 8), out1 = inp1 - rule;
    var inp2 = -_randInt(1, 5), out2 = inp2 - rule;
    var opts = _buildOpts('Subtract ' + rule, ['Add ' + rule, 'Subtract ' + (rule + 1), 'Add ' + (rule - 1)]);
    return { q: 'Input → Output: ' + inp1 + '→' + out1 + ', ' + inp2 + '→' + out2 + ', 0→' + (-rule) + '. What is the rule?', opts: opts, c: 0,
             e: 'Output − Input = ' + out1 + ' − ' + inp1 + ' = −' + rule + '. Rule: subtract ' + rule + '.' };
  }},
  { depth: 'medium', gen: function() {
    var rule = -_randInt(2, 7);
    var inp = -_randInt(3, 10);
    var ans = inp + rule;
    var opts = _buildOpts(ans, [inp - rule, -ans, inp]);
    return { q: 'Rule: add ' + rule + '. Input = ' + inp + '. Output = ?', opts: opts, c: 0,
             e: inp + ' + (' + rule + ') = ' + inp + ' − ' + Math.abs(rule) + ' = ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var rule = -_randInt(3, 8);
    var inp1 = _randInt(5, 12), out1 = inp1 + rule;
    var inp2 = -_randInt(1, 5), out2 = inp2 + rule;
    var missingInp = _randInt(1, 10);
    var missingOut = missingInp + rule;
    var opts = _buildOpts('Rule: add ' + rule + ', missing output = ' + missingOut, ['Rule: add ' + Math.abs(rule) + ', missing output = ' + (missingInp + Math.abs(rule)), 'Rule: subtract ' + Math.abs(rule) + ', missing output = ' + (missingInp - Math.abs(rule)), 'Rule: add ' + (rule - 1) + ', missing output = ' + (missingInp + rule - 1)]);
    return { q: 'Table: ' + inp1 + '→' + out1 + ', ' + inp2 + '→' + out2 + ', ' + missingInp + '→?. Find the rule and the missing output.', opts: opts, c: 0,
             e: 'Output − Input = ' + out1 + ' − ' + inp1 + ' = ' + rule + '. Rule: add ' + rule + '. Missing: ' + missingInp + ' + (' + rule + ') = ' + missingOut + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var rule = _randInt(4, 10);
    var out1 = -_randInt(1, 8), inp1 = out1 - rule;
    var out2 = _randInt(1, 8), inp2 = out2 - rule;
    var out3 = -_randInt(9, 15);
    var ans = out3 - rule;
    var opts = _buildOpts(ans, [out3 + rule, -ans, out3]);
    return { q: 'Rule: subtract ' + rule + '. Pairs: ?→' + out1 + ', ?→' + out2 + '. If the output is ' + out3 + ', what was the input?', opts: opts, c: 0,
             e: 'Input − ' + rule + ' = ' + out3 + '. Input = ' + out3 + ' + ' + rule + ' = ' + ans + '. Check: ' + ans + ' − ' + rule + ' = ' + out3 + ' ✓.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// RATIO & RATES (mt-09) — 5 subtopics
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
    // Choose 'needed' as a clean multiple of 'serves' so the scale factor is a clean integer
    var cups = _randInt(2, 4);
    var serves = _pickFrom([4, 5, 6]);
    var mult = _randInt(2, 4);
    var needed = serves * mult;
    var ansCups = cups * mult;
    var opts = _buildOpts(ansCups, [cups + needed, cups * needed, ansCups + cups]);
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

// ── mi-09-5: Bar Diagram Ratio Problems ─────────────────────────────────
TEST_GENERATORS["mi-09-5"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 4);
    while (a === b) b = _randInt(1, 4);
    var bar = _randInt(3, 8);
    var total = (a + b) * bar;
    var shareA = a * bar, shareB = b * bar;
    var opts = _buildOpts(shareA, [shareB, total, bar]);
    return { q: 'Share ' + total + ' in ratio ' + a + ':' + b + '. What is the larger share?', opts: opts, c: 0,
             e: 'Total parts = ' + (a+b) + '. 1 part = ' + total + '÷' + (a+b) + ' = ' + bar + '. Larger = ' + a + '×' + bar + ' = ' + shareA + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(3, 6), b = _randInt(1, a - 1);
    var bar = _randInt(2, 7);
    var diff = (a - b) * bar;
    var ans = a * bar;
    var opts = _buildOpts(ans, [b * bar, (a + b) * bar, diff]);
    return { q: 'Ratio ' + a + ':' + b + '. Difference = ' + diff + '. Find the larger amount.', opts: opts, c: 0,
             e: 'Diff parts = ' + (a-b) + '. 1 part = ' + diff + '÷' + (a-b) + ' = ' + bar + '. Larger = ' + a + '×' + bar + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 4);
    while (a === b) b = _randInt(1, 4);
    var bar = _randInt(4, 9);
    var total = (a + b) * bar;
    var ans = b * bar;
    var opts = _buildOpts(ans, [a * bar, total, bar]);
    return { q: 'A bar diagram shows ratio ' + a + ':' + b + '. Total = ' + total + '. How many in the smaller group?', opts: opts, c: 0,
             e: (a+b) + ' parts = ' + total + '. 1 part = ' + bar + '. Smaller = ' + b + '×' + bar + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 4);
    while (a === b) b = _randInt(1, 4);
    var bar = _randInt(5, 10);
    var knownShare = a * bar;
    var ans = (a + b) * bar;
    var opts = _buildOpts(ans, [knownShare + bar, a * b * bar, b * bar]);
    return { q: 'Ratio ' + a + ':' + b + '. The first part = ' + knownShare + '. What is the total?', opts: opts, c: 0,
             e: '1 part = ' + knownShare + '÷' + a + ' = ' + bar + '. Total = ' + (a+b) + '×' + bar + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 3), b = _randInt(1, 3), c = _randInt(1, 3);
    var parts = a + b + c;
    var bar = _randInt(3, 7);
    var total = parts * bar;
    var largest = Math.max(a, b, c) * bar;
    var opts = _buildOpts(largest, [(a + 1) * bar, parts * bar, bar]);
    return { q: 'Share £' + total + ' in ratio ' + a + ':' + b + ':' + c + '. What is the largest share?', opts: opts, c: 0,
             e: parts + ' parts = £' + total + '. 1 part = £' + bar + '. Largest = ' + Math.max(a,b,c) + '×£' + bar + ' = £' + largest + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(1, 4);
    while (a === b) b = _randInt(1, 4);
    var bar = _randInt(3, 8);
    var total = (a + b) * bar;
    var shareA = a * bar;
    var opts = _buildOpts(shareA + ' and ' + (b*bar), [(b*bar) + ' and ' + shareA, (shareA+1) + ' and ' + (b*bar-1), total + ' and 0']);
    return { q: 'Draw a bar diagram for ratio ' + a + ':' + b + ' with total ' + total + '. What are the two shares?', opts: opts, c: 0,
             e: '1 bar = ' + total + '÷' + (a+b) + ' = ' + bar + '. Shares: ' + shareA + ' and ' + (b*bar) + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(3, 6), b = _randInt(1, a - 1);
    var bar = _randInt(5, 12);
    var shareA = a * bar;
    var diff = (a - b) * bar;
    var total = (a + b) * bar;
    var opts = _buildOpts(total, [shareA + diff, a * b * bar, shareA]);
    return { q: 'Two amounts in ratio ' + a + ':' + b + '. The larger exceeds the smaller by ' + diff + '. Find the total.', opts: opts, c: 0,
             e: 'Diff = ' + (a-b) + ' parts = ' + diff + '. 1 part = ' + bar + '. Total = ' + (a+b) + '×' + bar + ' = ' + total + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4), b = _randInt(1, 3), c = _randInt(1, 3);
    var parts = a + b + c;
    var bar = _randInt(4, 8);
    var total = parts * bar;
    var smallest = Math.min(a, b, c) * bar;
    var largest = Math.max(a, b, c) * bar;
    var diff = largest - smallest;
    var opts = _buildOpts(diff, [largest, smallest, bar]);
    return { q: 'Share ' + total + ' in ratio ' + a + ':' + b + ':' + c + '. What is the difference between the largest and smallest shares?', opts: opts, c: 0,
             e: '1 part = ' + bar + '. Largest = ' + Math.max(a,b,c) + '×' + bar + '=' + largest + '. Smallest = ' + Math.min(a,b,c) + '×' + bar + '=' + smallest + '. Diff = ' + diff + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// PERCENTAGES (mt-10) — 5 subtopics
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

// ── mi-10-5: Percent Models & Estimation ─────────────────────────────────
TEST_GENERATORS["mi-10-5"] = [
  { depth: 'medium', gen: function() {
    var pct = _randInt(1, 9) * 10 + _randInt(1, 9);
    var opts = _buildOpts(pct + '%', [(100 - pct) + '%', (pct + 10) + '%', (pct - 5) + '%']);
    return { q: 'On a 10×10 grid, ' + pct + ' squares are shaded. What percentage is shaded?', opts: opts, c: 0,
             e: pct + ' out of 100 squares = ' + pct + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var whole = _pickFrom([40, 60, 80, 100, 120, 200]);
    var pct = _pickFrom([10, 20, 25, 30, 50, 75]);
    var ans = whole * pct / 100;
    var opts = _buildOpts(ans, [whole - ans, ans + 10, pct]);
    return { q: 'A bar model shows ' + whole + '. Find ' + pct + '% of it.', opts: opts, c: 0,
             e: '10% of ' + whole + ' = ' + (whole / 10) + '. ' + pct + '% = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pct = _randInt(1, 9) * 10 + _randInt(1, 9);
    var unshaded = 100 - pct;
    var opts = _buildOpts(unshaded + '%', [pct + '%', (unshaded + 5) + '%', (unshaded - 5) + '%']);
    return { q: pct + ' squares on a 10×10 grid are shaded. What percentage is NOT shaded?', opts: opts, c: 0,
             e: '100 − ' + pct + ' = ' + unshaded + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var whole = _pickFrom([40, 50, 80, 100, 120, 200]);
    var pctA = 25, pctB = 10;
    var ansA = whole * pctA / 100, ansB = whole * pctB / 100;
    var ans = ansA + ansB;
    var opts = _buildOpts(ans, [ansA, ansB, whole - ans]);
    return { q: 'Find 35% of ' + whole + ' by splitting into 25% + 10%.', opts: opts, c: 0,
             e: '25% of ' + whole + ' = ' + ansA + '. 10% = ' + ansB + '. Total: ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sections = _pickFrom([4, 5, 10, 20]);
    var pctEach = 100 / sections;
    var shaded = _randInt(1, sections - 1);
    var ans = shaded * pctEach;
    var opts = _buildOpts(ans + '%', [(100 - ans) + '%', shaded + '%', pctEach + '%']);
    return { q: 'A bar is divided into ' + sections + ' equal parts. ' + shaded + ' parts are shaded. What percent is shaded?', opts: opts, c: 0,
             e: 'Each part = ' + pctEach + '%. ' + shaded + ' parts = ' + shaded + ' × ' + pctEach + '% = ' + ans + '%.' };
  }},
  { depth: 'medium', gen: function() {
    var whole = _pickFrom([198, 302, 399, 502, 798, 1001]);
    var nearWhole = Math.round(whole / 100) * 100;
    var tenPct = nearWhole / 10;
    var opts = _buildOpts('≈ ' + tenPct, ['≈ ' + (tenPct + 10), '≈ ' + (tenPct - 10), '≈ ' + whole]);
    return { q: 'Estimate 10% of ' + whole + '.', opts: opts, c: 0,
             e: whole + ' ≈ ' + nearWhole + '. 10% of ' + nearWhole + ' = ' + tenPct + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var whole = _pickFrom([80, 120, 160, 200, 240, 400]);
    var pct = _pickFrom([15, 35, 45, 65, 85]);
    var ans = whole * pct / 100;
    var splitA = Math.floor(pct / 10) * 10;
    var splitB = pct - splitA;
    var partA = whole * splitA / 100, partB = whole * splitB / 100;
    var opts = _buildOpts(ans, [whole - ans, ans + whole / 10, partA]);
    return { q: 'Using a bar model, find ' + pct + '% of ' + whole + '.', opts: opts, c: 0,
             e: 'Split: ' + splitA + '% + ' + splitB + '%. ' + splitA + '% of ' + whole + ' = ' + partA + '. ' + splitB + '% = ' + partB + '. Total: ' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var whole = _pickFrom([78, 203, 398, 502, 995]);
    var nearWhole = Math.round(whole / 10) * 10;
    var quarter = nearWhole / 4;
    var opts = _buildOpts('≈ ' + quarter, ['≈ ' + (quarter + 5), '≈ ' + (quarter - 5), '≈ ' + nearWhole]);
    return { q: 'Estimate 25% of ' + whole + '.', opts: opts, c: 0,
             e: whole + ' ≈ ' + nearWhole + '. 25% = ¼ of ' + nearWhole + ' = ' + quarter + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// ALGEBRA: EXPRESSIONS (mt-11) — 5 subtopics
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

// ── mi-11-5: Properties of Operations ─────────────────────────────────────
TEST_GENERATORS["mi-11-5"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9), b = _randInt(2, 9);
    var opts = _buildOpts(b + ' + ' + a, [a + ' − ' + b, b + ' − ' + a, a + ' × ' + b]);
    return { q: 'Rewrite ' + a + ' + ' + b + ' using the commutative property.', opts: opts, c: 0,
             e: 'Commutative property of addition: a + b = b + a. So ' + a + '+' + b + ' = ' + b + '+' + a + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(2, 6), c = _randInt(2, 6);
    var ans = a * (b * c);
    var opts = _buildOpts(ans, [a + b + c, a * b + c, (a + b) * c]);
    return { q: 'Use the associative property: (' + a + ' × ' + b + ') × ' + c + ' = ' + a + ' × (' + b + ' × ' + c + ') = ?', opts: opts, c: 0,
             e: a + ' × ' + (b*c) + ' = ' + ans + '. (Same as ' + (a*b) + ' × ' + c + ' = ' + ans + '.)' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(5, 50);
    var props = ['Additive identity', 'Multiplicative identity', 'Zero property', 'Commutative property'];
    var opts = [props[0], props[1], props[2], props[3]];
    return { q: 'Which property does ' + n + ' + 0 = ' + n + ' demonstrate?', opts: opts, c: 0,
             e: 'Adding 0 to any number gives the same number. This is the additive identity property.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9), b = _randInt(2, 9), c = _randInt(2, 9);
    var ans = a * b + a * c;
    var opts = _buildOpts(ans, [a * (b + c + 1), a + b * c, a * b * c]);
    return { q: 'Use the distributive property: ' + a + '(' + b + ' + ' + c + ') = ?', opts: opts, c: 0,
             e: a + '×' + b + ' + ' + a + '×' + c + ' = ' + (a*b) + ' + ' + (a*c) + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 9), b = _randInt(2, 9);
    var opts = _buildOpts(b + ' × ' + a, [a + ' + ' + b, b + ' ÷ ' + a, a + ' − ' + b]);
    return { q: 'Rewrite ' + a + ' × ' + b + ' using the commutative property of multiplication.', opts: opts, c: 0,
             e: 'a × b = b × a. So ' + a + '×' + b + ' = ' + b + '×' + a + ' = ' + (a*b) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _randInt(10, 99);
    var opts = _buildOpts('0', [n.toString(), '1', 'undefined']);
    return { q: n + ' × 0 = ?', opts: opts, c: 0,
             e: 'Zero property: any number × 0 = 0.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 5), b = _randInt(10, 25), c = _randInt(2, 5);
    var reordered = a + ' × ' + c + ' × ' + b;
    var easy = (a * c) + ' × ' + b;
    var ans = a * b * c;
    var opts = _buildOpts(ans, [a + b + c, a * b + c, (a + c) * b]);
    return { q: 'Calculate ' + a + ' × ' + b + ' × ' + c + ' by reordering for easier mental maths.', opts: opts, c: 0,
             e: 'Reorder: ' + a + '×' + c + '=' + (a*c) + ', then ' + (a*c) + '×' + b + '=' + ans + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var b = _randInt(3, 9);
    var n = _randInt(2, 8);
    var product = b * n;
    var opts = _buildOpts(n, [b, product, n + b]);
    return { q: 'If n × ' + b + ' = ' + product + ', find n using the multiplicative inverse.', opts: opts, c: 0,
             e: 'n = ' + product + ' ÷ ' + b + ' = ' + n + '. Check: ' + n + '×' + b + '=' + product + ' ✓.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// ALGEBRA: EQUATIONS & SEQUENCES (mt-12) — 5 subtopics
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
    var ansX = _randInt(2, 8);
    var c = _randInt(1, 4);
    var a = c + _randInt(1, 4);          // a > c, so a !== c (no division by zero)
    var b = _randInt(1, 6);
    var d = b + (a - c) * ansX;          // construct so x = ansX exactly
    var lhs = a * ansX + b;
    var opts = _buildOpts(ansX, [ansX + 1, Math.abs(a - c), lhs]);
    return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + c + 'x + ' + d, opts: opts, c: 0,
             e: (a - c) + 'x = ' + (d - b) + '. x = ' + (d - b) + ' ÷ ' + (a - c) + ' = ' + ansX + '.' };
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

// ── mi-12-5: Expressions vs Equations & Tiles ────────────────────────────
TEST_GENERATORS["mi-12-5"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(1, 8);
    var exprs = [a + 'x + ' + b, a + 'x + ' + b + ' = ' + (a*3+b), a + 'x − ' + b, (a+1) + 'y'];
    var opts = [exprs[1], exprs[0], exprs[2], exprs[3]];
    return { q: 'Which of these is an equation?', opts: opts, c: 0,
             e: 'Only ' + exprs[1] + ' has an equals sign, making it an equation.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 5), b = _randInt(1, 8), x = _randInt(2, 7);
    var rhs = a * x + b;
    var opts = _buildOpts(x, [x + 1, x - 1, rhs]);
    return { q: 'Algebra tiles: ' + a + ' x-tiles + ' + b + ' unit tiles = ' + rhs + ' unit tiles. Find x.', opts: opts, c: 0,
             e: 'Remove ' + b + ': ' + a + 'x = ' + (rhs - b) + '. Divide by ' + a + ': x = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var x = _randInt(2, 10), add = _randInt(1, 9);
    var total = x + add;
    var eq = 'x + ' + add + ' = ' + total;
    var opts = _buildOpts(eq, ['x − ' + add + ' = ' + total, add + 'x = ' + total, 'x + ' + total + ' = ' + add]);
    return { q: '"A number plus ' + add + ' equals ' + total + '." Write the equation.', opts: opts, c: 0,
             e: eq + '. Solve: x = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var mult = _randInt(2, 6), x = _randInt(2, 8);
    var product = mult * x;
    var opts = _buildOpts(mult + 'x = ' + product, ['x + ' + mult + ' = ' + product, 'x − ' + mult + ' = ' + product, mult + ' + x = ' + product]);
    return { q: '"' + mult + ' identical items cost £' + product + ' total." Which equation models this?', opts: opts, c: 0,
             e: mult + ' items × price = total. ' + mult + 'x = ' + product + '. x = £' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var b = _randInt(2, 8), x = _randInt(2, 8);
    var rhs = x + b;
    var opts = _buildOpts(x, [rhs, b, x + 1]);
    return { q: 'Tiles: 1 x-tile + ' + b + ' unit tiles = ' + rhs + ' unit tiles. Remove ' + b + ' from each side. x = ?', opts: opts, c: 0,
             e: 'x + ' + b + ' − ' + b + ' = ' + rhs + ' − ' + b + '. x = ' + x + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(2, 6), b = _randInt(1, 9);
    var expr = a + 'n − ' + b;
    var opts = ['Expression', 'Equation', 'Neither', 'Both'];
    return { q: 'Is "' + expr + '" an expression or an equation?', opts: opts, c: 0,
             e: 'No equals sign → expression.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(3, 9), sub = _randInt(1, x - 1);
    var result = x - sub;
    var opts = _buildOpts('x − ' + sub + ' = ' + result, ['x + ' + sub + ' = ' + result, sub + ' − x = ' + result, sub + 'x = ' + result]);
    return { q: '"I think of a number, subtract ' + sub + ', and get ' + result + '." Which equation matches?', opts: opts, c: 0,
             e: 'x − ' + sub + ' = ' + result + '. x = ' + x + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a = _randInt(2, 4), b = _randInt(1, 5), x = _randInt(2, 6);
    var rhs = a * x + b;
    var opts = _buildOpts(x, [x + 1, rhs - b, a]);
    return { q: 'Use tiles to solve: ' + a + 'x + ' + b + ' = ' + rhs + '. First remove ' + b + ' unit tiles from each side, then divide into ' + a + ' equal groups.', opts: opts, c: 0,
             e: a + 'x = ' + (rhs-b) + '. x = ' + (rhs-b) + '÷' + a + ' = ' + x + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// STATISTICS & PROBABILITY (mt-13) — 7 subtopics
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
    var data = [];
    var runSum = 0;
    for (var i = 0; i < n - 1; i++) { var v = _randInt(5, 25); data.push(v); runSum += v; }
    // Choose the fifth value so the total is divisible by 5 (integer mean) and stays in [5,25]
    var r = ((runSum % 5) + 5) % 5;
    var missing = 5 + ((5 - r) % 5);
    missing += 5 * _randInt(0, Math.floor((25 - missing) / 5));
    var total = runSum + missing;
    var targetMean = total / n;
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

// ── mi-13-5: Data Displays & Graph Types ─────────────────────────────────
TEST_GENERATORS["mi-13-5"] = [
  { depth: 'medium', gen: function() {
    var key = _pickFrom([2, 4, 5, 10]);
    var count = key * _randInt(3, 8);
    var symbols = count / key;
    var opts = _buildOpts(symbols + ' symbols', [(symbols + 1) + ' symbols', count + ' symbols', key + ' symbols']);
    return { q: 'A pictogram uses one icon = ' + key + ' items. How many icons are needed for ' + count + ' items?', opts: opts, c: 0,
             e: count + ' ÷ ' + key + ' = ' + symbols + ' icons.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(3, 12), b = _randInt(3, 12), c = _randInt(3, 12), d = _randInt(3, 12);
    var total = a + b + c + d;
    var opts = _buildOpts(total, [total + a, total - a, a * 4]);
    return { q: 'A frequency table: Mon=' + a + ', Tue=' + b + ', Wed=' + c + ', Thu=' + d + '. Total frequency?', opts: opts, c: 0,
             e: a + '+' + b + '+' + c + '+' + d + ' = ' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var a = _randInt(10, 30), b = _randInt(10, 30);
    var diff = Math.abs(a - b);
    var opts = _buildOpts(diff, [a + b, Math.max(a, b), Math.min(a, b)]);
    return { q: 'A double bar graph shows Team A scored ' + a + ' and Team B scored ' + b + '. What is the difference?', opts: opts, c: 0,
             e: '|' + a + ' − ' + b + '| = ' + diff + '.' };
  }},
  { depth: 'medium', gen: function() {
    var key = _pickFrom([2, 4, 5]);
    var half = key / 2;
    var full = _randInt(2, 5);
    var total = full * key + half;
    var opts = _buildOpts(total, [full * key, (full + 1) * key, full + half]);
    return { q: 'A pictogram key: ○ = ' + key + '. A row shows ' + full + ' full circles and a half circle. How many items?', opts: opts, c: 0,
             e: full + '×' + key + ' + ' + half + ' = ' + total + '.' };
  }},
  { depth: 'medium', gen: function() {
    var types = ['bar chart', 'line graph', 'pie chart', 'scatter graph'];
    var idx = _randInt(0, 3);
    var purposes = ['comparing amounts in different categories', 'showing change over time', 'showing proportions of a whole', 'showing a relationship between two variables'];
    var opts = _buildOpts(types[idx], [types[(idx+1)%4], types[(idx+2)%4], types[(idx+3)%4]]);
    return { q: 'Which graph type is best for ' + purposes[idx] + '?', opts: opts, c: 0,
             e: types[idx] + ' is the most appropriate for ' + purposes[idx] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var low = _pickFrom([0, 10, 20]);
    var width = _pickFrom([5, 10]);
    var high = low + width - 1;
    var opts = _buildOpts(width, [width - 1, width + 1, high]);
    return { q: 'A grouped frequency table has classes ' + low + '–' + high + ', ' + (high+1) + '–' + (high+width) + ', ... What is the class width?', opts: opts, c: 0,
             e: 'Each class covers ' + width + ' values (e.g. ' + low + ' to ' + high + ').' };
  }},
  { depth: 'greater-depth', gen: function() {
    var key = _pickFrom([4, 5, 8, 10]);
    var count = key * _randInt(2, 6) + key / 2;
    var full = Math.floor(count / key);
    var opts = _buildOpts(full + '½ symbols', [(full + 1) + ' symbols', full + ' symbols', count + ' symbols']);
    return { q: 'A pictogram uses ★ = ' + key + '. How many symbols represent ' + count + ' items?', opts: opts, c: 0,
             e: count + ' ÷ ' + key + ' = ' + full + '.5 → ' + full + ' full symbols and a half symbol.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var a1 = _randInt(10, 25), a2 = _randInt(10, 25), b1 = _randInt(10, 25), b2 = _randInt(10, 25);
    var incA = a2 - a1, incB = b2 - b1;
    var faster = incA > incB ? 'A' : 'B';
    var opts = _buildOpts(faster + ' (changed by ' + Math.max(incA, incB) + ')', [
      (faster === 'A' ? 'B' : 'A') + ' (changed by ' + Math.min(incA, incB) + ')',
      'Same increase',
      'Cannot tell'
    ]);
    return { q: 'A double line graph shows: A goes from ' + a1 + ' to ' + a2 + '; B goes from ' + b1 + ' to ' + b2 + '. Which increased more?', opts: opts, c: 0,
             e: 'A increased by ' + incA + '. B increased by ' + incB + '. ' + faster + ' increased more.' };
  }}
];

// ── mi-13-6: Sampling, Bias & Distributions ──────────────────────────────
TEST_GENERATORS["mi-13-6"] = [
  { depth: 'medium', gen: function() {
    var stat = _pickFrom([
      ['How many hours do students sleep?', true],
      ['What is 7 × 8?', false],
      ['How tall are Year 7 students?', true],
      ['How many days in a week?', false]
    ]);
    var ans = stat[1] ? 'Yes' : 'No';
    var opts = _buildOpts(ans, [stat[1] ? 'No' : 'Yes', 'Sometimes', 'Cannot tell']);
    return { q: 'Is this a statistical question: "' + stat[0] + '"?', opts: opts, c: 0,
             e: stat[1] ? 'Answers vary between people — it is statistical.' : 'There is one fixed answer — it is not statistical.' };
  }},
  { depth: 'medium', gen: function() {
    var pop = _pickFrom([200, 500, 1000, 2000]);
    var samp = _pickFrom([20, 30, 50, 100]);
    var opts = _buildOpts(pop, [samp, pop + samp, pop - samp]);
    return { q: 'A city has ' + pop + ' households. ' + samp + ' are surveyed. What is the population size?', opts: opts, c: 0,
             e: 'The population is all ' + pop + ' households. The sample is the ' + samp + ' surveyed.' };
  }},
  { depth: 'medium', gen: function() {
    var methods = [
      ['Asking only boys about PE preferences', 'Biased — excludes girls'],
      ['Drawing names randomly from a hat', 'Unbiased — random selection'],
      ['Surveying volunteers only', 'Biased — self-selected group'],
      ['Selecting every 10th name from the register', 'Unbiased — systematic random']
    ];
    var m = _pickFrom(methods);
    var biased = m[1].indexOf('Biased') === 0;
    var opts = _buildOpts(biased ? 'Biased' : 'Unbiased', [biased ? 'Unbiased' : 'Biased', 'Cannot tell', 'Partially biased']);
    return { q: 'Method: ' + m[0] + '. Biased or unbiased?', opts: opts, c: 0, e: m[1] + '.' };
  }},
  { depth: 'medium', gen: function() {
    var base = _randInt(3, 8);
    var data = [base, base+1, base+1, base+2, base+2, base+2, base+3, base+3, base+4];
    var outlier = base + _pickFrom([15, 20, 25]);
    data.push(outlier);
    var opts = _buildOpts(outlier, [data[0], data[4], base + 2]);
    return { q: 'Data: ' + data.join(', ') + '. Which value is the outlier?', opts: opts, c: 0,
             e: outlier + ' is far from the main cluster (' + base + '–' + (base+4) + ').' };
  }},
  { depth: 'medium', gen: function() {
    var shapes = [
      ['Symmetric', 'balanced around the centre with equal tails'],
      ['Skewed right', 'most data on the left, long tail to the right'],
      ['Skewed left', 'most data on the right, long tail to the left']
    ];
    var s = _pickFrom(shapes);
    var opts = _buildOpts(s[0], [shapes[(shapes.indexOf(s)+1)%3][0], shapes[(shapes.indexOf(s)+2)%3][0], 'Uniform']);
    return { q: 'A distribution is described as "' + s[1] + '." What is this shape called?', opts: opts, c: 0,
             e: 'This describes a ' + s[0].toLowerCase() + ' distribution.' };
  }},
  { depth: 'medium', gen: function() {
    var n = _pickFrom([50, 100, 200]);
    var sample = _pickFrom([10, 20, 25]);
    var opts = _buildOpts('Increase the sample size', ['Use a smaller sample', 'Only survey friends', 'Ignore outliers']);
    return { q: 'A survey of ' + sample + ' people out of ' + n + ' gave unexpected results. What is the best way to improve reliability?', opts: opts, c: 0,
             e: 'Larger samples better represent the population and reduce the effect of unusual values.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var vals = [_randInt(2,6), _randInt(2,6), _randInt(2,6), _randInt(2,6), _randInt(2,6)];
    var outlier = _randInt(25, 40);
    var allVals = vals.concat([outlier]);
    var sumWith = 0; for(var i=0;i<allVals.length;i++) sumWith += allVals[i];
    var sumWithout = sumWith - outlier;
    var meanWith = Math.round(sumWith / allVals.length * 10) / 10;
    var meanWithout = Math.round(sumWithout / vals.length * 10) / 10;
    var opts = _buildOpts('From ' + meanWith + ' to ' + meanWithout, ['No change', 'Mean increases', 'Mean doubles']);
    return { q: 'Data: ' + allVals.join(', ') + '. How does removing ' + outlier + ' change the mean?', opts: opts, c: 0,
             e: 'With outlier: mean = ' + meanWith + '. Without: mean = ' + meanWithout + '. Mean decreases towards the centre.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pop = _pickFrom([500, 1000, 2000]);
    var samp = _pickFrom([50, 100]);
    var pct = _randInt(20, 60);
    var inSample = Math.round(samp * pct / 100);
    var predicted = Math.round(pop * pct / 100);
    var opts = _buildOpts('About ' + predicted, [inSample, pop, samp]);
    return { q: samp + ' people surveyed from ' + pop + '. ' + inSample + ' prefer bus travel (' + pct + '%). Predict how many in the whole population prefer the bus.', opts: opts, c: 0,
             e: pct + '% of ' + pop + ' = ' + predicted + '. We scale the sample proportion to the population.' };
  }}
];

// ── mi-13-7: Combined & Predicted Probability ────────────────────────────
TEST_GENERATORS["mi-13-7"] = [
  { depth: 'medium', gen: function() {
    var a = _randInt(1, 5), b = a + _randInt(1, 3);
    var opts = _buildOpts('Yes', ['No', 'Sometimes', 'Only with 2 dice']);
    return { q: 'On a single die roll, are "rolling ' + a + '" and "rolling ' + b + '" mutually exclusive?', opts: opts, c: 0,
             e: 'You can only get one number per roll, so they cannot happen together — mutually exclusive.' };
  }},
  { depth: 'medium', gen: function() {
    var pA_n = _randInt(1, 4), pA_d = _pickFrom([6, 8, 10]);
    var pB_n = _randInt(1, 3), pB_d = pA_d;
    while (pA_n + pB_n > pA_d) { pB_n = _randInt(1, 2); }
    var sum_n = pA_n + pB_n;
    var g = _gcd(sum_n, pA_d);
    var ans = (sum_n/g) + '/' + (pA_d/g);
    var opts = _buildOpts(ans, [(pA_n * pB_n) + '/' + (pA_d * pA_d), pA_n + '/' + pA_d, '1/' + pA_d]);
    return { q: 'P(A) = ' + pA_n + '/' + pA_d + ', P(B) = ' + pB_n + '/' + pA_d + '. A and B are mutually exclusive. P(A or B)?', opts: opts, c: 0,
             e: 'P(A or B) = ' + pA_n + '/' + pA_d + ' + ' + pB_n + '/' + pA_d + ' = ' + sum_n + '/' + pA_d + ' = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var p = _pickFrom([0.1, 0.2, 0.25, 0.5]);
    var trials = _pickFrom([40, 60, 80, 100, 200]);
    var expected = p * trials;
    var opts = _buildOpts(expected, [trials, p * 10, expected * 2]);
    return { q: 'P(event) = ' + p + '. In ' + trials + ' trials, how many times do you expect the event?', opts: opts, c: 0,
             e: 'Expected = ' + p + ' × ' + trials + ' = ' + expected + '.' };
  }},
  { depth: 'medium', gen: function() {
    var total = _pickFrom([50, 100, 200]);
    var succ = _randInt(5, Math.floor(total / 2));
    var g = _gcd(succ, total);
    var simplified = (succ/g) + '/' + (total/g);
    var opts = _buildOpts(simplified, [(total - succ) + '/' + total, '1/' + total, succ + '/' + (total * 2)]);
    return { q: 'An event happened ' + succ + ' times in ' + total + ' trials. Experimental probability?', opts: opts, c: 0,
             e: succ + '/' + total + ' = ' + simplified + '.' };
  }},
  { depth: 'medium', gen: function() {
    var sides = _pickFrom([6, 8, 10]);
    var trials = _pickFrom([60, 80, 100, 120]);
    var expected = trials / sides;
    var opts = _buildOpts(expected, [trials, sides, expected * 2]);
    return { q: 'A fair ' + sides + '-sided die is rolled ' + trials + ' times. How many times do you expect to roll a 1?', opts: opts, c: 0,
             e: 'P(1) = 1/' + sides + '. Expected = ' + trials + '/' + sides + ' = ' + expected + '.' };
  }},
  { depth: 'medium', gen: function() {
    var pA = _pickFrom([0.3, 0.4, 0.5]);
    var pB = _pickFrom([0.2, 0.3, 0.4]);
    var comp = 1 - pA;
    var opts = _buildOpts(comp, [pA, pA + pB, 1]);
    return { q: 'P(rain) = ' + pA + '. What is P(no rain)?', opts: opts, c: 0,
             e: 'Complementary: P(no rain) = 1 − ' + pA + ' = ' + comp + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pA = _pickFrom([0.3, 0.4, 0.5]);
    var pB = _pickFrom([0.2, 0.3, 0.4]);
    var pAB = Math.round(pA * pB * 10) / 10;
    var pAorB = Math.round((pA + pB - pAB) * 10) / 10;
    var opts = _buildOpts(pAorB, [pA + pB, pAB, Math.round((pA * pB) * 10) / 10]);
    return { q: 'P(A) = ' + pA + ', P(B) = ' + pB + ', P(A and B) = ' + pAB + '. Find P(A or B).', opts: opts, c: 0,
             e: 'P(A or B) = P(A) + P(B) − P(A and B) = ' + pA + ' + ' + pB + ' − ' + pAB + ' = ' + pAorB + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var p = _pickFrom([0.2, 0.25, 0.3, 0.4]);
    var trials = _pickFrom([100, 200, 500]);
    var expected = p * trials;
    var notExpected = trials - expected;
    var opts = _buildOpts(notExpected, [expected, trials, expected * 2]);
    return { q: 'P(win) = ' + p + '. In ' + trials + ' games, how many losses do you predict?', opts: opts, c: 0,
             e: 'P(lose) = 1 − ' + p + ' = ' + (1 - p) + '. Expected losses = ' + (1 - p) + ' × ' + trials + ' = ' + notExpected + '.' };
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
    var a_d = _pickFrom([3, 4, 5, 6]);            // denominator >= 3 so two distinct numerators exist
    var b_d = a_d;
    var count = a_d - 1;                           // numerators 1..a_d-1
    var a_n = _randInt(1, count);
    var b_n = ((a_n - 1 + _randInt(1, count - 1)) % count) + 1;  // distinct from a_n, no loop
    var aVal = a_n / a_d, bVal = b_n / b_d;
    var bigger = aVal > bVal ? a_n + '/' + a_d : b_n + '/' + b_d;
    var smaller = aVal > bVal ? b_n + '/' + b_d : a_n + '/' + a_d;
    var opts = [bigger, smaller, a_d + '/' + a_n, b_d + '/' + b_n];  // 2 proper (<1) + 2 improper (>1), all distinct
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
    var seen = {}, pool = [];
    [2, 4, 5].forEach(function(den){ for (var k = -8; k <= 8; k++) { var v = k / den; if (!seen[v]) { seen[v] = 1; pool.push(v); } } });
    for (var i = pool.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = pool[i]; pool[i] = pool[j]; pool[j] = t; }
    var vals = pool.slice(0, 3);   // three distinct values, no loop
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
// PROBLEM SOLVING & ESTIMATION (mt-16) — 4 subtopics
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
    var speed = _pickFrom([40, 50, 60, 80]);
    var time_h = _pickFrom([1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
    var dist = time_h * speed;             // exact half-hour time by construction, no loop
    var opts = _buildOpts(time_h + ' hours', [(time_h + 1) + ' hours', (time_h + 0.5) + ' hours', (time_h - 0.5) + ' hours']);
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

// ── mi-16-4: Extra/Missing Info & Direction ──────────────────────────────
TEST_GENERATORS["mi-16-4"] = [
  { depth: 'medium', gen: function() {
    var price = _randInt(2, 8), qty = _randInt(3, 9), extra = _randInt(10, 50);
    var total = price * qty;
    var opts = _buildOpts('£' + extra + ' budget', ['£' + price + ' per item', qty + ' items', '£' + total + ' total']);
    return { q: 'Jake has £' + extra + '. He buys ' + qty + ' pencils at £' + price + ' each, spending £' + total + '. Which information is extra?', opts: opts, c: 0,
             e: 'To find total cost we need price and quantity. The £' + extra + ' budget is extra — not needed for the calculation.' };
  }},
  { depth: 'medium', gen: function() {
    var east = _randInt(3, 12), west = _randInt(1, east - 1);
    var net = east - west;
    var opts = _buildOpts(net + ' km west', [net + ' km east', (east + west) + ' km west', east + ' km west']);
    return { q: 'A cyclist rides ' + east + ' km east then ' + west + ' km west. To return to the start she must ride:', opts: opts, c: 0,
             e: 'Net = ' + east + ' − ' + west + ' = ' + net + ' km east. Return: ' + net + ' km west.' };
  }},
  { depth: 'medium', gen: function() {
    var items = ['apples','oranges','bananas','notebooks','pens'];
    var item = _pickFrom(items);
    var price = _randInt(1, 5);
    var opts = _buildOpts('How many ' + item + ' were bought', ['The price per ' + item[0], 'The type of item', 'Nothing is missing']);
    return { q: '"' + item.charAt(0).toUpperCase() + item.slice(1) + ' cost £' + price + ' each. How much was spent?" What information is missing?', opts: opts, c: 0,
             e: 'We know the price but not the quantity purchased.' };
  }},
  { depth: 'medium', gen: function() {
    var north = _randInt(4, 15), south = _randInt(1, north - 1);
    var net = north - south;
    var opts = _buildOpts(net + ' km south', [net + ' km north', (north + south) + ' km south', north + ' km south']);
    return { q: 'A walker goes ' + north + ' km north then ' + south + ' km south. How far and which direction to return?', opts: opts, c: 0,
             e: 'Net = ' + north + ' − ' + south + ' = ' + net + ' km north. Return: ' + net + ' km south.' };
  }},
  { depth: 'medium', gen: function() {
    var weight = _randInt(2, 8), count = _randInt(3, 7), colour = _pickFrom(['red','blue','green','yellow']);
    var total = weight * count;
    var opts = _buildOpts('The colour (' + colour + ')', ['The weight (' + weight + ' kg)', 'The number (' + count + ')', 'The total (' + total + ' kg)']);
    return { q: count + ' ' + colour + ' boxes each weigh ' + weight + ' kg. Total weight is ' + total + ' kg. Which info is extra?', opts: opts, c: 0,
             e: 'The colour is irrelevant to calculating total weight.' };
  }},
  { depth: 'medium', gen: function() {
    var leg1 = _randInt(3, 10), leg2 = _randInt(3, 10), leg3 = _randInt(1, 5);
    var netEast = leg1 + leg3 - leg2;
    var dir, retDir;
    if (netEast > 0) { dir = 'east'; retDir = 'west'; }
    else if (netEast < 0) { dir = 'west'; retDir = 'east'; netEast = -netEast; }
    else { dir = 'at start'; retDir = 'none'; }
    var opts;
    if (netEast === 0) {
      opts = _buildOpts('Already at start', [leg3 + ' km east', leg3 + ' km west', (leg1+leg2+leg3) + ' km']);
    } else {
      opts = _buildOpts(netEast + ' km ' + retDir, [netEast + ' km ' + dir, (leg1+leg2+leg3) + ' km ' + retDir, leg1 + ' km ' + retDir]);
    }
    return { q: 'A drone flies ' + leg1 + ' km east, ' + leg2 + ' km west, ' + leg3 + ' km east. Journey home?', opts: opts, c: 0,
             e: 'East: ' + leg1 + '+' + leg3 + '=' + (leg1+leg3) + '. West: ' + leg2 + '. Net: ' + (leg1+leg3) + '−' + leg2 + '=' + (leg1+leg3-leg2) + '. Return: ' + netEast + ' km ' + retDir + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var age = _randInt(10, 14), height = _randInt(140, 170), dist = _randInt(2, 8), speed = _randInt(3, 6);
    var time = dist / speed;
    var timeStr = (time === Math.floor(time)) ? time + '' : time.toFixed(1);
    var opts = _buildOpts('Age (' + age + ') and height (' + height + ' cm)', ['Distance (' + dist + ' km)', 'Speed (' + speed + ' km/h)', 'Nothing — all needed']);
    return { q: 'Amy is ' + age + ' years old and ' + height + ' cm tall. She walks ' + dist + ' km at ' + speed + ' km/h. What info is extra if asked how long the walk takes?', opts: opts, c: 0,
             e: 'Time = distance ÷ speed. Age and height are irrelevant.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n1 = _randInt(3, 8), n2 = _randInt(3, 8), s1 = _randInt(1, n1 - 1), s2 = _randInt(1, n2 - 1);
    var netN = n1 + n2 - s1 - s2;
    var dir = netN > 0 ? 'north' : 'south';
    var retDir = netN > 0 ? 'south' : 'north';
    var absNet = Math.abs(netN);
    var opts = _buildOpts(absNet + ' km ' + retDir, [absNet + ' km ' + dir, (n1+n2+s1+s2) + ' km ' + retDir, (n1+n2) + ' km ' + retDir]);
    return { q: 'A robot moves: ' + n1 + ' km north, ' + s1 + ' km south, ' + n2 + ' km north, ' + s2 + ' km south. How far and which direction to return?', opts: opts, c: 0,
             e: 'North: ' + (n1+n2) + '. South: ' + (s1+s2) + '. Net: ' + netN + ' km ' + dir + '. Return: ' + absNet + ' km ' + retDir + '.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MEASUREMENT (mt-17) — 4 subtopics
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

// ── mi-17-4: Area/Volume Units & Temperature ─────────────────────────────
TEST_GENERATORS["mi-17-4"] = [
  { depth: 'medium', gen: function() {
    var m2 = _randInt(2, 9);
    var ans = m2 * 10000;
    var opts = _buildOpts(ans + ' cm²', [(m2 * 100) + ' cm²', (m2 * 1000) + ' cm²', m2 + ' cm²']);
    return { q: 'Convert ' + m2 + ' m² to cm².', opts: opts, c: 0,
             e: '1 m² = 10,000 cm². ' + m2 + ' × 10,000 = ' + ans + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var cm3 = _pickFrom([500, 750, 1000, 1500, 2000, 2500, 3000, 4000, 5000]);
    var litres = cm3 / 1000;
    var opts = _buildOpts(litres + ' litres', [(cm3 / 100) + ' litres', (cm3 / 10) + ' litres', cm3 + ' litres']);
    return { q: cm3 + ' cm³ = how many litres?', opts: opts, c: 0,
             e: '1,000 cm³ = 1 litre. ' + cm3 + ' ÷ 1,000 = ' + litres + ' litres.' };
  }},
  { depth: 'medium', gen: function() {
    var a = -_randInt(1, 15), b = -_randInt(1, 15);
    while (a === b) b = -_randInt(1, 15);
    var warmer = Math.max(a, b), colder = Math.min(a, b);
    var opts = _buildOpts(warmer + '°C', [colder + '°C', '0°C', (a + b) + '°C']);
    return { q: 'Which is warmer: ' + a + '°C or ' + b + '°C?', opts: opts, c: 0,
             e: warmer + ' > ' + colder + ', so ' + warmer + '°C is warmer.' };
  }},
  { depth: 'medium', gen: function() {
    var litres = _randInt(1, 10);
    var ans = litres * 1000;
    var opts = _buildOpts(ans + ' cm³', [(litres * 100) + ' cm³', litres + ' cm³', (litres * 10) + ' cm³']);
    return { q: litres + ' litres = how many cm³?', opts: opts, c: 0,
             e: '1 litre = 1,000 cm³. ' + litres + ' × 1,000 = ' + ans + ' cm³.' };
  }},
  { depth: 'medium', gen: function() {
    var start = -_randInt(3, 12), rise = _randInt(5, 20);
    var end = start + rise;
    var opts = _buildOpts(rise + '°C', [end + '°C', Math.abs(start) + '°C', (rise - 2) + '°C']);
    return { q: 'Temperature rises from ' + start + '°C to ' + end + '°C. What is the rise?', opts: opts, c: 0,
             e: end + ' − (' + start + ') = ' + end + ' + ' + Math.abs(start) + ' = ' + rise + '°C.' };
  }},
  { depth: 'medium', gen: function() {
    var cm2 = _pickFrom([20000, 30000, 50000, 70000, 100000]);
    var ans = cm2 / 10000;
    var opts = _buildOpts(ans + ' m²', [(cm2 / 100) + ' m²', (cm2 / 1000) + ' m²', cm2 + ' m²']);
    return { q: 'Convert ' + cm2.toLocaleString() + ' cm² to m².', opts: opts, c: 0,
             e: '÷ 10,000. ' + ans + ' m².' };
  }},
  { depth: 'greater-depth', gen: function() {
    var l = _randInt(20, 50), w = _randInt(20, 40), h = _randInt(10, 30);
    var vol = l * w * h;
    var litres = vol / 1000;
    var opts = _buildOpts(litres + ' litres', [(vol / 100) + ' litres', vol + ' litres', (litres * 10) + ' litres']);
    return { q: 'A box is ' + l + ' cm × ' + w + ' cm × ' + h + ' cm. What is its capacity in litres?', opts: opts, c: 0,
             e: 'Volume = ' + vol + ' cm³. ÷ 1,000 = ' + litres + ' litres.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var start = -_randInt(5, 15), drop = _randInt(3, 10);
    var end = start - drop;
    var opts = _buildOpts(end + '°C', [(start + drop) + '°C', -end + '°C', drop + '°C']);
    return { q: 'The temperature is ' + start + '°C and drops by ' + drop + '°C. What is the new temperature?', opts: opts, c: 0,
             e: start + ' − ' + drop + ' = ' + end + '°C.' };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// MONEY & CONSUMER MATHS (mt-18) — 4 subtopics
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

// ── mi-18-4: Multiply & Divide Money & Coins ─────────────────────────────
TEST_GENERATORS["mi-18-4"] = [
  { depth: 'medium', gen: function() {
    var pounds = _randInt(1, 8);
    var pence = _pickFrom([10, 15, 20, 25, 30, 40, 50, 60, 75, 80, 95]);
    var qty = _randInt(2, 7);
    var totalPence = (pounds * 100 + pence) * qty;
    var ans = (totalPence / 100).toFixed(2);
    var opts = _buildOpts('£' + ans, ['£' + (parseFloat(ans) + 1).toFixed(2), '£' + (parseFloat(ans) - 1).toFixed(2), '£' + (pounds * qty) + '.00']);
    return { q: 'Bottles cost £' + pounds + '.' + (pence < 10 ? '0' : '') + pence + ' each. What do ' + qty + ' cost?', opts: opts, c: 0,
             e: '£' + pounds + '.' + (pence < 10 ? '0' : '') + pence + ' × ' + qty + ' = £' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var divisor = _pickFrom([2, 3, 4, 5, 6, 8]);
    var each = _pickFrom([2.50, 3.25, 4.50, 5.75, 6.25, 7.50]);
    var total = (each * divisor).toFixed(2);
    var opts = _buildOpts('£' + each.toFixed(2), ['£' + (each + 0.50).toFixed(2), '£' + (each - 0.50).toFixed(2), '£' + total]);
    return { q: '£' + total + ' is shared equally among ' + divisor + ' people. How much each?', opts: opts, c: 0,
             e: '£' + total + ' ÷ ' + divisor + ' = £' + each.toFixed(2) + '.' };
  }},
  { depth: 'medium', gen: function() {
    var n50 = _randInt(1, 4), n20 = _randInt(1, 5), n10 = _randInt(0, 4);
    var total = n50 * 50 + n20 * 20 + n10 * 10;
    var ans = total >= 100 ? '£' + (total / 100).toFixed(2) : total + 'p';
    var opts = _buildOpts(ans, [(total + 10) + 'p', (total - 10) + 'p', (n50 + n20 + n10) + 'p']);
    return { q: 'You have ' + n50 + '×50p, ' + n20 + '×20p and ' + n10 + '×10p coins. Total?', opts: opts, c: 0,
             e: n50 + '×50=' + (n50*50) + 'p + ' + n20 + '×20=' + (n20*20) + 'p + ' + n10 + '×10=' + (n10*10) + 'p = ' + total + 'p = ' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var coin = _pickFrom([20, 50]);
    var target = _randInt(2, 8) * coin;
    var ans = target / coin;
    var opts = _buildOpts(ans, [ans + 1, ans - 1, target]);
    return { q: 'How many ' + coin + 'p coins make £' + (target / 100).toFixed(2) + '?', opts: opts, c: 0,
             e: target + 'p ÷ ' + coin + 'p = ' + ans + ' coins.' };
  }},
  { depth: 'medium', gen: function() {
    var price = _pickFrom([1.99, 2.49, 2.99, 3.49, 3.99]);
    var qty = _randInt(3, 6);
    var totalPence = Math.round(price * 100) * qty;
    var ans = (totalPence / 100).toFixed(2);
    var opts = _buildOpts('£' + ans, ['£' + (parseFloat(ans) + 1).toFixed(2), '£' + (parseFloat(ans) - 0.50).toFixed(2), '£' + (Math.ceil(price) * qty).toFixed(2)]);
    return { q: qty + ' items at £' + price.toFixed(2) + ' each. Total cost?', opts: opts, c: 0,
             e: '£' + price.toFixed(2) + ' × ' + qty + ' = £' + ans + '.' };
  }},
  { depth: 'medium', gen: function() {
    var qty = _randInt(3, 8);
    var price = _pickFrom([2.50, 3.50, 4.25, 5.50, 6.75]);
    var total = price * qty;
    var paid = Math.ceil(total / 10) * 10;
    var change = (paid - total).toFixed(2);
    var opts = _buildOpts('£' + change, ['£' + (parseFloat(change) + 1).toFixed(2), '£' + (parseFloat(change) - 1).toFixed(2), '£' + total.toFixed(2)]);
    return { q: 'You buy ' + qty + ' items at £' + price.toFixed(2) + ' each and pay with £' + paid + '. Change?', opts: opts, c: 0,
             e: 'Total = £' + total.toFixed(2) + '. Change = £' + paid + ' − £' + total.toFixed(2) + ' = £' + change + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var pricePer = _pickFrom([0.35, 0.45, 0.55, 0.65, 0.85, 0.95]);
    var budget = _pickFrom([3, 4, 5, 6, 7, 8]);
    var maxItems = Math.floor(budget / pricePer);
    var opts = _buildOpts(maxItems, [maxItems + 1, maxItems - 1, budget]);
    return { q: 'Stamps cost £' + pricePer.toFixed(2) + ' each. How many can you buy with £' + budget + '.00?', opts: opts, c: 0,
             e: '£' + budget + ' ÷ £' + pricePer.toFixed(2) + ' = ' + (budget / pricePer).toFixed(1) + '. Floor → ' + maxItems + ' stamps.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var n2 = _randInt(1, 3), n1 = _randInt(1, 4), n50 = _randInt(1, 3), n20 = _randInt(1, 5);
    var total = n2 * 200 + n1 * 100 + n50 * 50 + n20 * 20;
    var ans = (total / 100).toFixed(2);
    var opts = _buildOpts('£' + ans, ['£' + (parseFloat(ans) + 1).toFixed(2), '£' + (parseFloat(ans) - 1).toFixed(2), (n2+n1+n50+n20) + ' coins']);
    return { q: 'A purse has ' + n2 + '×£2, ' + n1 + '×£1, ' + n50 + '×50p and ' + n20 + '×20p coins. Total?', opts: opts, c: 0,
             e: n2 + '×£2=£' + (n2*2) + ' + ' + n1 + '×£1=£' + n1 + ' + ' + n50 + '×50p=£' + (n50*0.5).toFixed(2) + ' + ' + n20 + '×20p=£' + (n20*0.2).toFixed(2) + ' = £' + ans + '.' };
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
    diff = parseInt(city.replace(/−/g, '-').match(/[+-]\d+/)[0]);  // normalise Unicode minus (−) before parsing
    localH = ukH + diff;
    if (localH >= 24) localH -= 24;
    if (localH < 0) localH += 24;
    var ans = pad(localH) + ':00';
    var cands = [ukH, (localH + 1) % 24, (localH + 23) % 24, (localH + 2) % 24, (localH + 22) % 24];
    var opts = [ans];
    for (var ci = 0; ci < cands.length && opts.length < 4; ci++) {
      var s = pad(cands[ci]) + ':00';
      if (opts.indexOf(s) === -1) opts.push(s);   // keep options distinct
    }
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
    // Note: when r=2, sum + a == a * 2^terms (mathematical identity), so use a different distractor
    var opts = _buildOpts(sum, [a * Math.pow(r, terms), sum - a, a * terms * r]);
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
    // Choose scores so the required minimum is always within 0..100
    var target = _randInt(60, 80);
    var scores, sum, needed, attempts = 0;
    do {
      scores = [_randInt(50, 85), _randInt(50, 85), _randInt(50, 85)];
      sum = scores[0] + scores[1] + scores[2];
      needed = target * 4 - sum;
      attempts++;
    } while ((needed < 0 || needed > 100) && attempts < 30);
    if (needed < 0) needed = 0;
    if (needed > 100) needed = 100;
    var avgSoFar = Math.round(sum / 3);
    var opts = _buildOpts(needed, [Math.max(0, target - avgSoFar), target * 4, avgSoFar]);
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
// 2D SHAPES & ANGLES (mt-24) — 4 subtopics
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
    var opts = _buildOpts('x = 30', ['x = 20', 'x = 40', 'x = 35']);
    return { q: 'Alternate angles are (2x + 10)° and (3x − 20)°. Find x.', opts: opts, c: 0,
             e: 'Alternate angles are equal: 2x + 10 = 3x − 20, so x = 30.' };
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
// ── mi-24-4: Angles, Lines & Circles ─────────────────────────────────────
TEST_GENERATORS["mi-24-4"] = [
  { depth: 'medium', gen: function() {
    var ang = _randInt(30, 80);
    var opts = _buildOpts(ang + '°', [(180 - ang) + '°', (90 - ang) + '°', (360 - ang) + '°']);
    return { q: 'Two lines cross. One angle is ' + ang + '°. The vertically opposite angle is:', opts: opts, c: 0,
             e: 'Vertically opposite angles are equal: ' + ang + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var ang = _randInt(35, 85);
    var supp = 180 - ang;
    var opts = _buildOpts(supp + '°', [ang + '°', (90 - ang) + '°', (360 - ang) + '°']);
    return { q: 'Angles on a straight line. One = ' + ang + '°. Find the other.', opts: opts, c: 0,
             e: 'Supplementary: 180° − ' + ang + '° = ' + supp + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var d = _randInt(4, 20);
    var r = d / 2;
    var opts = _buildOpts(r + ' cm', [d + ' cm', (d * 2) + ' cm', (r / 2) + ' cm']);
    return { q: 'A circle has diameter ' + d + ' cm. What is the radius?', opts: opts, c: 0,
             e: 'Radius = diameter ÷ 2 = ' + r + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var seg = _randInt(4, 16) * 2;
    var half = seg / 2;
    var opts = _buildOpts(half + ' cm', [seg + ' cm', (seg * 2) + ' cm', (half + 1) + ' cm']);
    return { q: 'A ' + seg + ' cm line segment is bisected. Each piece is:', opts: opts, c: 0,
             e: seg + ' ÷ 2 = ' + half + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var ang = _randInt(20, 80) * 2;
    var half = ang / 2;
    var opts = _buildOpts(half + '°', [ang + '°', (180 - ang) + '°', (half + 1) + '°']);
    return { q: 'An angle of ' + ang + '° is bisected. Each half =', opts: opts, c: 0,
             e: ang + ' ÷ 2 = ' + half + '°.' };
  }},
  { depth: 'medium', gen: function() {
    var parts = ['Radius', 'Diameter', 'Chord', 'Arc', 'Sector', 'Tangent'];
    var defs = ['Centre to circumference', 'Across through centre (2r)', 'Line joining two points on circumference', 'Part of the circumference', 'Region between two radii and an arc', 'Line touching circle at one point'];
    var i = _randInt(0, parts.length - 1);
    var wrong1 = (i + 1) % parts.length, wrong2 = (i + 2) % parts.length, wrong3 = (i + 3) % parts.length;
    var opts = [parts[i], parts[wrong1], parts[wrong2], parts[wrong3]];
    return { q: 'Which part of a circle is: "' + defs[i] + '"?', opts: opts, c: 0,
             e: defs[i] + ' = ' + parts[i] + '.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var ang = _randInt(25, 75);
    var adj = 180 - ang;
    var opts = _buildOpts(ang + '°, ' + adj + '°, ' + ang + '°, ' + adj + '°', [ang + '°, ' + ang + '°, ' + adj + '°, ' + adj + '°', '90°, 90°, 90°, 90°', ang + '°, ' + (360-ang) + '°']);
    return { q: 'Two lines cross forming ' + ang + '°. List all four angles in order around the point.', opts: opts, c: 0,
             e: 'Angles alternate: ' + ang + '°, ' + adj + '°, ' + ang + '°, ' + adj + '°. Sum = 360°.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var centralAng = _pickFrom([60, 72, 90, 120, 180]);
    var fraction = centralAng + '/360';
    var simplified;
    if (centralAng === 60) simplified = '1/6';
    else if (centralAng === 72) simplified = '1/5';
    else if (centralAng === 90) simplified = '1/4';
    else if (centralAng === 120) simplified = '1/3';
    else simplified = '1/2';
    var opts = _buildOpts(simplified, ['1/' + (360/centralAng + 1), centralAng + '/100', '1/' + (centralAng)]);
    return { q: 'A sector has a central angle of ' + centralAng + '°. What fraction of the circle is it?', opts: opts, c: 0,
             e: centralAng + '/360 = ' + simplified + '.' };
  }}
];

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
// AREA, PERIMETER & VOLUME (mt-27) — 4 subtopics
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

// ── mi-27-4: Compare Area & Perimeter ────────────────────────────────────
TEST_GENERATORS["mi-27-4"] = [
  { depth: 'medium', gen: function() {
    var l1 = _randInt(2, 8), w1 = _randInt(2, 8);
    var l2 = _randInt(2, 8), w2 = _randInt(2, 8);
    while (l1 === l2 && w1 === w2) { l2 = _randInt(2, 8); }
    var a1 = l1 * w1, a2 = l2 * w2;
    var bigger = a1 >= a2 ? 'A' : 'B';
    var opts = _buildOpts(bigger, [bigger === 'A' ? 'B' : 'A', 'Same area', 'Cannot tell']);
    return { q: 'Rectangle A: ' + l1 + '×' + w1 + ' cm. Rectangle B: ' + l2 + '×' + w2 + ' cm. Which has more area?', opts: opts, c: 0,
             e: 'A = ' + a1 + ' cm². B = ' + a2 + ' cm². ' + bigger + ' has more area.' };
  }},
  { depth: 'medium', gen: function() {
    var l1 = _randInt(2, 8), w1 = _randInt(2, 8);
    var l2 = _randInt(2, 8), w2 = _randInt(2, 8);
    while (l1 === l2 && w1 === w2) { l2 = _randInt(2, 8); }
    var p1 = 2*(l1+w1), p2 = 2*(l2+w2);
    var bigger = p1 >= p2 ? 'A' : 'B';
    var opts = _buildOpts(bigger, [bigger === 'A' ? 'B' : 'A', 'Same perimeter', 'Cannot tell']);
    return { q: 'Rectangle A: ' + l1 + '×' + w1 + ' cm. Rectangle B: ' + l2 + '×' + w2 + ' cm. Which has the greater perimeter?', opts: opts, c: 0,
             e: 'P(A) = ' + p1 + ' cm. P(B) = ' + p2 + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var perim = _pickFrom([12, 16, 20, 24, 28]);
    var side = perim / 4;
    var area = side * side;
    var opts = _buildOpts(area + ' cm²', [(area + 4) + ' cm²', (perim) + ' cm²', (side * perim) + ' cm²']);
    return { q: 'A rectangle with perimeter ' + perim + ' cm has the largest possible area when it is a square. What is that maximum area?', opts: opts, c: 0,
             e: 'Square side = ' + perim + ' ÷ 4 = ' + side + '. Area = ' + side + '² = ' + area + ' cm².' };
  }},
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 10), w = _randInt(1, l - 1);
    var a = l * w, p = 2*(l + w);
    var opts = _buildOpts('Area=' + a + ' cm², P=' + p + ' cm', ['Area=' + p + ', P=' + a, 'Area=' + (a+p) + ' cm²', 'Area=' + (l+w) + ' cm²']);
    return { q: 'Find both area and perimeter of a ' + l + ' × ' + w + ' cm rectangle.', opts: opts, c: 0,
             e: 'Area = ' + l + '×' + w + ' = ' + a + ' cm². Perimeter = 2(' + l + '+' + w + ') = ' + p + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var areas = [[2,18,40],[3,12,30],[4,9,26],[6,6,24]];
    var pair = _pickFrom(areas);
    var l = pair[0], w = pair[1], p = pair[2];
    var opts = _buildOpts(l + '×' + w + ' (P=' + p + ' cm)', [(l+1) + '×' + (w-1) + ' (P=' + (2*(l+w)) + ' cm)', '1×' + (l*w) + ' (P=' + (2*(1+l*w)) + ' cm)', 'All same perimeter']);
    return { q: 'Of all rectangles with area ' + (l*w) + ' cm², which has the smallest perimeter?', opts: opts, c: 0,
             e: 'The closer to a square, the smaller the perimeter. ' + l + '×' + w + ' gives P = ' + p + ' cm.' };
  }},
  { depth: 'medium', gen: function() {
    var l = _randInt(3, 8), w = _randInt(2, 6);
    var a1 = l * w, p1 = 2*(l+w);
    var a2 = (2*l) * (2*w), p2 = 2*(2*l + 2*w);
    var opts = _buildOpts('Area ×4, Perimeter ×2', ['Area ×2, Perimeter ×2', 'Area ×2, Perimeter ×4', 'Both ×4']);
    return { q: 'A ' + l + '×' + w + ' cm rectangle is enlarged to ' + (2*l) + '×' + (2*w) + ' cm. How do area and perimeter change?', opts: opts, c: 0,
             e: 'Old: A=' + a1 + ', P=' + p1 + '. New: A=' + a2 + ' (×4), P=' + p2 + ' (×2). Doubling dimensions quadruples area.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var target = _pickFrom([20, 24, 28, 32]);
    var halfP = target / 2;
    var results = [];
    for (var l = 1; l < halfP; l++) { var w = halfP - l; if (l <= w) results.push({l:l, w:w, a:l*w}); }
    results.sort(function(a,b){return b.a - a.a;});
    var best = results[0], worst = results[results.length - 1];
    var opts = _buildOpts(best.l + '×' + best.w + ' (area ' + best.a + ' cm²)', [worst.l + '×' + worst.w + ' (area ' + worst.a + ' cm²)', best.l + '×' + worst.w, 'All give equal area']);
    return { q: 'Which rectangle with perimeter ' + target + ' cm has the greatest area?', opts: opts, c: 0,
             e: 'Half perimeter = ' + halfP + '. Square ' + best.l + '×' + best.w + ' gives area ' + best.a + ' cm² — the maximum.' };
  }},
  { depth: 'greater-depth', gen: function() {
    var s = _randInt(2, 6);
    var a1 = s * s, p1 = 4 * s;
    var factor = _pickFrom([2, 3]);
    var a2 = a1 * factor * factor, p2 = p1 * factor;
    var opts = _buildOpts('Area ×' + (factor*factor) + ', Perimeter ×' + factor, ['Both ×' + factor, 'Both ×' + (factor*factor), 'Area ×' + factor + ', Perimeter ×' + (factor*factor)]);
    return { q: 'A square of side ' + s + ' cm is enlarged by scale factor ' + factor + '. How do area and perimeter change?', opts: opts, c: 0,
             e: 'Side ' + s + '→' + (s*factor) + '. Area ' + a1 + '→' + a2 + ' (×' + (factor*factor) + '). Perimeter ' + p1 + '→' + p2 + ' (×' + factor + ').' };
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

// ══════════════════════════════════════════════════════════════════════════
// HISTORY — island-16 to island-19, island-31 to island-34, island-53 to island-59
// ══════════════════════════════════════════════════════════════════════════

// ── island-16: The Norman Conquest ──────────────────────────────────────
TEST_GENERATORS["island-16"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'In what year did the Battle of Hastings take place?', opts:['1066','1086','1016','1166'], c:0, e:'The Battle of Hastings was fought on 14 October 1066 between Harold Godwinson and William of Normandy.' },
      { q:'Who won the Battle of Hastings in 1066?', opts:['William of Normandy','Harold Godwinson','Harald Hardrada','Edgar Atheling'], c:0, e:'William, Duke of Normandy, defeated Harold Godwinson and became King of England.' },
      { q:'Which English king was killed at the Battle of Hastings?', opts:['Harold Godwinson','Edward the Confessor','Edgar Atheling','Harold Hardrada'], c:0, e:'Harold Godwinson, the last Anglo-Saxon king, was killed at the Battle of Hastings in 1066.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the Domesday Book?', opts:['A survey of land and property in England','A book of laws','A religious text','A record of battles'], c:0, e:'The Domesday Book (1086) was a great survey ordered by William I to record who owned land and resources across England.' },
      { q:'In what year was the Domesday Book completed?', opts:['1086','1066','1100','1076'], c:0, e:'The Domesday Book was completed in 1086, twenty years after the Norman Conquest.' },
      { q:'Who ordered the creation of the Domesday Book?', opts:['William I','Harold Godwinson','Henry I','Edward the Confessor'], c:0, e:'William I (William the Conqueror) ordered the Domesday Book in 1085 to survey all the land and resources in England.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What type of castles did the Normans first build in England?', opts:['Motte-and-bailey castles','Stone keeps','Concentric castles','Hill forts'], c:0, e:'The Normans quickly built motte-and-bailey castles using earth and timber to control the conquered population.' },
      { q:'How many claimants were there to the English throne in 1066?', opts:['Three','Two','Four','Five'], c:0, e:'There were three main claimants: Harold Godwinson, William of Normandy, and Harald Hardrada of Norway.' },
      { q:'What battle took place just before Hastings in September 1066?', opts:['Battle of Stamford Bridge','Battle of Fulford','Battle of Hastings','Battle of Towton'], c:0, e:'Harold Godwinson defeated Harald Hardrada at the Battle of Stamford Bridge on 25 September 1066, just weeks before Hastings.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which country did William the Conqueror come from?', opts:['Normandy (France)','Norway','Denmark','Scotland'], c:0, e:'William was the Duke of Normandy, a region in northern France.' },
      { q:'What famous tapestry tells the story of the Norman Conquest?', opts:['The Bayeux Tapestry','The Domesday Tapestry','The Canterbury Tapestry','The Westminster Tapestry'], c:0, e:'The Bayeux Tapestry is an embroidered cloth nearly 70 metres long depicting the events leading up to and including the Battle of Hastings.' },
      { q:'What did the Normans replace many Anglo-Saxon churches with?', opts:['Large stone cathedrals and churches','Wooden chapels','Mosques','Open-air temples'], c:0, e:'The Normans rebuilt many churches and cathedrals in stone using the Romanesque style, replacing smaller Anglo-Saxon structures.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was the English king who died in January 1066, sparking the succession crisis?', opts:['Edward the Confessor','Harold Godwinson','Edgar Atheling','Canute'], c:0, e:'Edward the Confessor died on 5 January 1066 without a clear heir, leading to rival claims to the throne.' },
      { q:'What did William I use castles for after 1066?', opts:['To control the English population','To house monks','To store food for winter','To hold Parliament'], c:0, e:'William built castles across England to control the population and stamp out rebellions against Norman rule.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was Harold Godwinson at a disadvantage at the Battle of Hastings?', opts:['His army was tired from marching south after Stamford Bridge','He had fewer soldiers than William','He did not know William was coming','He had no cavalry'], c:0, e:'Harold force-marched his army 250 miles south from Stamford Bridge to Hastings, meaning his troops were exhausted before the battle even began.' },
      { q:'How did the Domesday Book help William control England?', opts:['It told him exactly what taxes he could collect from every area','It listed all the rebels in England','It recorded the names of all Norman soldiers','It identified the best places to build churches'], c:0, e:'The Domesday Book gave William detailed knowledge of every landholding and its value, allowing him to set and enforce taxes efficiently.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why did William introduce the feudal system to England after 1066?', opts:['To reward his followers with land and ensure their loyalty','To give land back to Anglo-Saxon nobles','To let peasants own their own farms','To create a democratic government'], c:0, e:'The feudal system allowed William to distribute land to his loyal Norman barons in exchange for military service, creating a chain of loyalty and control.' },
      { q:'Which factor was most important in William\'s victory at Hastings?', opts:['It was a combination of factors including luck, tactics, and Harold\'s tiredness','William had more soldiers','Harold chose a bad location','The weather favoured the Normans'], c:0, e:'Historians debate this, but key factors include Harold\'s exhaustion from Stamford Bridge, William\'s cavalry tactics, and the feigned retreat that broke the English shield wall.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'What was the long-term significance of the Norman Conquest for England?', opts:['It transformed England\'s language, laws, architecture, and social structure','It only changed who was king','It had no lasting impact on ordinary people','It mainly affected religion'], c:0, e:'The Norman Conquest had profound long-term effects: French words entered English, feudalism replaced Anglo-Saxon society, stone castles and cathedrals were built, and new laws and customs were introduced.' },
      { q:'Why might the Bayeux Tapestry be considered a biased source about the events of 1066?', opts:['It was made for the Normans and shows their version of events','It was made by Harold\'s family','It was created 500 years later','It only shows the Battle of Hastings'], c:0, e:'The Bayeux Tapestry was likely commissioned by William\'s half-brother Bishop Odo, so it presents the Norman perspective and justifies William\'s claim to the throne.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-17: Medieval Society & Feudalism ─────────────────────────────
TEST_GENERATORS["island-17"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'In the feudal system, who was at the top of the social pyramid?', opts:['The King','Barons','Knights','Peasants'], c:0, e:'The King was at the top of the feudal pyramid. He owned all the land and granted it to barons in exchange for loyalty and military service.' },
      { q:'What was the correct order of the feudal pyramid from top to bottom?', opts:['King, Barons, Knights, Peasants','Barons, King, Knights, Peasants','King, Knights, Barons, Peasants','Peasants, Knights, Barons, King'], c:0, e:'The feudal pyramid ran: King at the top, then Barons (lords), then Knights, then Peasants (villeins/serfs) at the bottom.' },
      { q:'What did barons receive from the king in exchange for loyalty and military service?', opts:['Land','Money','Weapons','Titles only'], c:0, e:'Barons received large areas of land (fiefs) from the king. In return, they provided knights and soldiers when the king needed them.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a villein in medieval England?', opts:['A peasant who was tied to the lord\'s land','A type of knight','A merchant in a town','A religious leader'], c:0, e:'A villein was an unfree peasant who had to work on the lord\'s land and could not leave the manor without permission.' },
      { q:'What was a tithe in medieval England?', opts:['A tax of one-tenth of produce given to the Church','A type of weapon','A festival held every year','A gift from the king'], c:0, e:'A tithe was one-tenth of everything a peasant produced (crops, animals), which had to be given to the local parish church.' },
      { q:'What was the open field system?', opts:['A farming system where village land was divided into large shared fields','A type of castle defence','A method of choosing the king','A way of training knights'], c:0, e:'In the open field system, the land around a village was divided into two or three large fields, with each peasant farming scattered strips within them.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a motte-and-bailey castle?', opts:['A castle with an earth mound (motte) and an enclosed courtyard (bailey)','A castle made entirely of stone','A castle surrounded by water','A castle built underground'], c:0, e:'A motte-and-bailey castle had an artificial earth mound (motte) topped with a wooden tower, and an enclosed yard (bailey) below it.' },
      { q:'What material were early Norman castles mainly built from?', opts:['Wood and earth','Stone and iron','Brick and mortar','Glass and metal'], c:0, e:'The first Norman castles were motte-and-bailey structures built quickly from wood and earth to establish control after 1066.' },
      { q:'What replaced motte-and-bailey castles over time?', opts:['Stone keeps and castle walls','Wooden forts','Open villages','Underground tunnels'], c:0, e:'Motte-and-bailey castles were gradually replaced by stronger stone keeps, which were more durable and harder to attack.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the main job of peasants in medieval village life?', opts:['Farming the land','Fighting wars','Building castles','Trading goods abroad'], c:0, e:'Most medieval peasants spent their lives farming the land, growing crops like wheat and barley, and raising animals.' },
      { q:'Who owned the land that peasants worked on in the feudal system?', opts:['The lord of the manor','The peasants themselves','The Church only','The merchants'], c:0, e:'In the feudal system, the lord of the manor owned the land. Peasants worked strips of land but did not own it.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What did knights provide to their lord in the feudal system?', opts:['Military service and protection','Money and taxes','Food and clothing','Religious guidance'], c:0, e:'Knights were granted land by barons and in return owed military service, typically 40 days per year of fighting when called upon.' },
      { q:'What was a serf in medieval England?', opts:['A peasant with even fewer rights than a villein, virtually bound to the land','A type of lord','A church official','A travelling merchant'], c:0, e:'Serfs were the lowest class of peasant. They were bound to the land, could not leave, and had to work for the lord without payment.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was the feudal system effective at keeping order in medieval England?', opts:['Everyone had clear duties and obligations that linked them together','Everyone was equal under the law','Peasants could vote for their lord','The king ruled without any help'], c:0, e:'The feudal system created a chain of duty: the king gave land to barons, barons to knights, knights protected peasants. Each level depended on the others, maintaining social order.' },
      { q:'What was the biggest disadvantage of the feudal system for peasants?', opts:['They had little freedom and could not leave their lord\'s land','They had to fight in wars','They could not attend church','They were not allowed to marry'], c:0, e:'Peasants, especially villeins and serfs, were tied to the land and had to work for their lord. They had very limited freedom and could not move away without permission.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the feudal system benefit the king?', opts:['It provided him with a loyal army and taxes without having to manage everything directly','It made him popular with peasants','It allowed him to avoid making any decisions','It gave all the power to the barons'], c:0, e:'The feudal system meant the king could raise an army through his barons without maintaining a standing army, and collect taxes through the manorial system without managing every village.' },
      { q:'Why might a historian say the feudal system was unfair?', opts:['Power and wealth were based on birth, not ability, and peasants had almost no chance to improve their lives','Everyone had equal opportunities','The king had no power','Barons were treated badly'], c:0, e:'The feudal system was based on inherited status. Peasants born into poverty had almost no way to improve their position, while lords gained wealth simply by being born into noble families.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Which group had the most influence over daily peasant life: the king, the baron, or the local lord of the manor?', opts:['The local lord of the manor','The king','The baron','The Pope'], c:0, e:'Although the king was the ultimate ruler, it was the local lord of the manor who most directly affected peasants\' daily lives by setting work duties, administering justice in the manor court, and controlling the land they farmed.' },
      { q:'How did the Church fit into the feudal system?', opts:['It was a powerful landholder that supported the feudal order and taught people to accept their place','It opposed the feudal system','It had no role in medieval society','It only helped the king'], c:0, e:'The Church was one of the largest landholders in medieval England. It taught that God had chosen each person\'s place in society, which helped maintain the feudal order.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-18: The Black Death ──────────────────────────────────────────
TEST_GENERATORS["island-18"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the Black Death?', opts:['A devastating plague that killed millions across Europe','A war between England and France','A famine caused by bad harvests','A volcanic eruption'], c:0, e:'The Black Death was a bubonic plague pandemic caused by the bacterium Yersinia pestis that devastated Europe between 1347 and 1351.' },
      { q:'Approximately what fraction of Europe\'s population died from the Black Death?', opts:['About one-third','About one-tenth','About one-half','About three-quarters'], c:0, e:'The Black Death killed approximately one-third (around 25 million) of Europe\'s population between 1347 and 1351.' },
      { q:'When did the Black Death first reach England?', opts:['1348','1066','1215','1400'], c:0, e:'The Black Death arrived in England in June 1348, first appearing at the port of Melcombe Regis (Weymouth) in Dorset.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How was the Black Death mainly spread?', opts:['By fleas living on rats','By drinking dirty water','By eating bad food','By touching gold coins'], c:0, e:'The plague was carried by fleas that lived on black rats. The fleas transmitted the Yersinia pestis bacterium when they bit humans.' },
      { q:'What were buboes, a key symptom of the Black Death?', opts:['Painful swellings in the groin, armpits, or neck','Spots on the hands','Loss of hair','Blindness'], c:0, e:'Buboes were large, painful swellings (up to the size of an egg) that appeared in the lymph nodes of the groin, armpits, or neck. They gave the disease its name: bubonic plague.' },
      { q:'What bacterium causes bubonic plague?', opts:['Yersinia pestis','Salmonella','E. coli','Staphylococcus'], c:0, e:'The Black Death was caused by the bacterium Yersinia pestis, which was transmitted to humans through infected flea bites.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which of these was a medieval treatment for the Black Death?', opts:['Carrying sweet-smelling flowers or herbs','Taking antibiotics','Having surgery','Drinking clean water'], c:0, e:'Medieval people believed bad smells (miasma) caused disease, so they carried posies of flowers and herbs to ward off the plague. This was ineffective.' },
      { q:'Who were the flagellants during the Black Death?', opts:['People who whipped themselves to ask God for forgiveness','Doctors who treated plague victims','Monks who prayed for the sick','Soldiers who guarded towns'], c:0, e:'Flagellants were groups of people who travelled from town to town whipping themselves, believing the plague was God\'s punishment and that self-punishment would bring forgiveness.' },
      { q:'Which animals helped spread the Black Death across Europe?', opts:['Black rats','Dogs','Horses','Cows'], c:0, e:'Black rats carried the fleas infected with Yersinia pestis. As rats travelled on ships and through towns, they spread the plague across Europe.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What did many medieval people believe caused the Black Death?', opts:['God\'s punishment for sin or bad air (miasma)','Bacteria carried by fleas','Contaminated water','Witchcraft only'], c:0, e:'Medieval people did not know about germs. Many believed the plague was God\'s punishment for sin, or that it was caused by bad-smelling air (miasma).' },
      { q:'From which direction did the Black Death spread into Europe?', opts:['From the East, arriving via trade routes from Asia','From the West, arriving from the Americas','From the North, arriving from Scandinavia','From Africa'], c:0, e:'The Black Death originated in Central Asia and spread westward along trade routes, arriving in Europe via merchant ships from the East in 1347.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was one immediate effect of the Black Death on villages?', opts:['Many villages were abandoned as so many people died','Villages grew larger','More food was available for everyone','The king raised taxes'], c:0, e:'So many people died that some villages were completely abandoned, becoming what historians call deserted medieval villages.' },
      { q:'Over what period did the main outbreak of the Black Death occur in Europe?', opts:['1347-1351','1066-1070','1200-1210','1400-1410'], c:0, e:'The main outbreak of the Black Death in Europe lasted from 1347 to 1351, though smaller outbreaks continued for centuries.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the Black Death change the balance of power between peasants and lords?', opts:['Peasants could demand higher wages because there were fewer workers','Lords gained even more power over peasants','Nothing changed for peasants','Peasants were forced to work for free'], c:0, e:'The massive death toll created a severe labour shortage. Surviving peasants could demand higher wages and better conditions because lords desperately needed workers, weakening the feudal system.' },
      { q:'Why did the Statute of Labourers (1351) fail to control wages after the Black Death?', opts:['There were too few workers, so lords had to offer higher wages anyway to attract labour','Peasants did not know about the law','The king cancelled the law','Lords agreed with higher wages'], c:0, e:'Despite the law trying to freeze wages at pre-plague levels, the severe labour shortage meant lords had to offer higher pay to attract workers, or their land would go unfarmed.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is the Black Death considered a turning point in medieval history?', opts:['It weakened feudalism, changed labour relations, and led to social unrest','It only affected the rich','It strengthened the feudal system','It had no lasting effects'], c:0, e:'The Black Death was a turning point because the labour shortage it caused gave peasants more bargaining power, helped weaken feudalism, and contributed to events like the Peasants\' Revolt of 1381.' },
      { q:'Why were medieval doctors unable to prevent or cure the Black Death?', opts:['They did not understand that germs caused disease and relied on incorrect theories like miasma','They had the right medicines but not enough of them','They knew about bacteria but could not make antibiotics','They refused to treat plague victims'], c:0, e:'Medieval medicine was based on theories like the four humours and miasma (bad air). Without understanding that bacteria caused disease, treatments like bloodletting and carrying flowers were ineffective.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Some historians argue the Black Death had positive long-term consequences. Which of these supports that view?', opts:['Surviving peasants gained better wages, more freedom, and feudalism declined','More people died so there was less conflict','The Church became more powerful','Kings became weaker and could not rule'], c:0, e:'While devastating, the long-term effects included higher wages for surviving workers, greater social mobility, the decline of serfdom, and challenges to the feudal system that eventually led to more personal freedom.' },
      { q:'How reliable are medieval sources about the Black Death, and why should historians be cautious?', opts:['Many accounts exaggerated death tolls and were written by monks with limited knowledge of medicine','They are completely reliable because they were written at the time','Only foreign sources are unreliable','Medieval sources are always accurate about numbers'], c:0, e:'Medieval sources are valuable but must be treated with caution. Many were written by monks who may have exaggerated, had religious biases, and lacked medical understanding. Death toll figures are often estimates.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-19: Magna Carta & Parliament ─────────────────────────────────
TEST_GENERATORS["island-19"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'In what year was the Magna Carta signed?', opts:['1215','1066','1348','1485'], c:0, e:'The Magna Carta was sealed (not technically signed) by King John at Runnymede on 15 June 1215.' },
      { q:'Which king was forced to agree to the Magna Carta?', opts:['King John','King Henry II','King Richard I','King William I'], c:0, e:'King John was forced by rebellious barons to agree to the Magna Carta in 1215 at Runnymede.' },
      { q:'Where was the Magna Carta agreed?', opts:['Runnymede','London','Canterbury','York'], c:0, e:'The Magna Carta was agreed at Runnymede, a meadow by the River Thames in Surrey, on 15 June 1215.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who forced King John to agree to the Magna Carta?', opts:['His barons','The Pope','The French king','The peasants'], c:0, e:'A group of rebellious barons, unhappy with John\'s heavy taxes and abuse of power, forced him to agree to the Magna Carta.' },
      { q:'What key principle did the Magna Carta establish?', opts:['That even the king must obey the law','That peasants could vote','That the Church should rule England','That barons could be king'], c:0, e:'The Magna Carta established the principle of the rule of law: that the king was not above the law and must govern according to agreed rules.' },
      { q:'What does "Magna Carta" mean in English?', opts:['Great Charter','Royal Law','King\'s Promise','People\'s Rights'], c:0, e:'Magna Carta is Latin for "Great Charter". It was a document setting out rights and limits on royal power.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who called the first Parliament that included ordinary people (commoners) in 1265?', opts:['Simon de Montfort','King John','King Henry III','William the Conqueror'], c:0, e:'Simon de Montfort, Earl of Leicester, called a Parliament in 1265 that for the first time included commoners (knights and burgesses) alongside barons and bishops.' },
      { q:'What was the Model Parliament of 1295?', opts:['A Parliament called by Edward I that set the pattern for future Parliaments','A French parliament','A meeting of the Church','A type of court'], c:0, e:'The Model Parliament of 1295, called by Edward I, is considered the first representative English Parliament because it included lords, clergy, knights, and burgesses.' },
      { q:'What is the principle of habeas corpus?', opts:['That no one can be imprisoned without a fair trial','That the king can arrest anyone','That barons are above the law','That taxes must be paid immediately'], c:0, e:'Habeas corpus (meaning "you may have the body") is the principle that no person can be held in prison without being brought before a court to hear the charges against them.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a jury trial?', opts:['A trial where a group of local people decided guilt or innocence','A trial by combat','A trial decided by the king alone','A trial by ordeal'], c:0, e:'The Magna Carta helped establish the right to trial by jury, where a group of ordinary people (the jury) would listen to evidence and decide whether someone was guilty or innocent.' },
      { q:'Why were the barons angry with King John before 1215?', opts:['He raised heavy taxes and abused his power','He refused to go on Crusade','He gave too much land to peasants','He abolished the feudal system'], c:0, e:'The barons were angry because King John raised very heavy taxes, demanded excessive feudal payments, and punished barons unfairly without proper trials.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What does the word "Parliament" come from?', opts:['The French word "parler" meaning to talk','The Latin word for law','The English word for power','The German word for king'], c:0, e:'Parliament comes from the French word "parler" meaning to speak or discuss. Parliament was originally a place where the king discussed matters with his advisors.' },
      { q:'What did the Magna Carta say about taxes?', opts:['The king could not raise new taxes without the agreement of the barons','The king could raise any tax he wanted','Peasants did not have to pay taxes','Only the Church paid taxes'], c:0, e:'One of the key clauses of the Magna Carta stated that no new taxes could be levied without the common consent of the barons, limiting the king\'s power to tax.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is the Magna Carta still considered important today, even though most of its clauses are no longer in force?', opts:['It established the principle that rulers must obey the law, which underpins modern democracy','It is still used as the basis for all UK laws','It gave everyone equal rights immediately','It created the modern Parliament'], c:0, e:'Although only a few clauses remain in law, the Magna Carta\'s principle that even the monarch is subject to the law became a foundation for constitutional government, human rights, and democracy worldwide.' },
      { q:'How did Simon de Montfort\'s Parliament of 1265 differ from earlier councils?', opts:['It included commoners (knights and burgesses) for the first time, not just lords and clergy','It was held in France','It excluded all barons','It gave power only to the king'], c:0, e:'De Montfort\'s Parliament was revolutionary because it included elected representatives from towns (burgesses) and counties (knights), not just powerful nobles and bishops. This set a precedent for representative government.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why did King John agree to the Magna Carta even though he did not want to?', opts:['The barons had captured London and he had no choice but to negotiate','The Pope told him to','He believed in fairness','His advisors convinced him it was a good idea'], c:0, e:'By June 1215, the rebellious barons had captured London and John was militarily weak. He agreed to the Magna Carta to avoid civil war, though he later asked the Pope to annul it.' },
      { q:'To what extent did the Magna Carta benefit ordinary people in 1215?', opts:['Very little — it mainly protected the rights of barons, not common people','It gave everyone equal rights','It freed all serfs immediately','It gave peasants the right to vote'], c:0, e:'In 1215, the Magna Carta mainly protected the interests of wealthy barons. Ordinary peasants gained very little directly. However, the principles it established eventually benefited everyone over centuries.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the development of Parliament gradually reduce the power of the monarchy?', opts:['Parliament gained control over taxation and law-making, limiting what the king could do alone','Parliament immediately took all power from the king','The king voluntarily gave up power','Parliament only discussed religious matters'], c:0, e:'Over centuries, Parliament gradually gained the power to approve taxes, pass laws, and hold the monarch accountable. This slow process transformed England from an absolute monarchy towards constitutional government.' },
      { q:'Why do some historians argue the Magna Carta was a failure in the short term but a success in the long term?', opts:['John ignored it almost immediately, but its principles inspired future laws and rights','It was perfectly enforced from the start','It was forgotten after 1215','It only mattered to the Church'], c:0, e:'King John got the Pope to annul it within weeks, and civil war followed. However, it was reissued multiple times and its principles of rule of law and due process became cornerstones of English and global legal tradition.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-31: The Crusades ─────────────────────────────────────────────
TEST_GENERATORS["island-31"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who called the First Crusade in 1095?', opts:['Pope Urban II','King Richard I','Saladin','William the Conqueror'], c:0, e:'Pope Urban II called the First Crusade at the Council of Clermont in 1095, urging Christians to recapture the Holy Land from Muslim control.' },
      { q:'What was the main goal of the Crusades?', opts:['To recapture Jerusalem and the Holy Land from Muslim control','To conquer France','To defeat the Vikings','To spread trade across Europe'], c:0, e:'The Crusades were military campaigns launched by Christian Europeans to recapture Jerusalem and the Holy Land, which were sacred to Christians, Muslims, and Jews.' },
      { q:'In what year did the First Crusade capture Jerusalem?', opts:['1099','1095','1187','1215'], c:0, e:'The First Crusade successfully captured Jerusalem in 1099, establishing several Crusader states in the Middle East.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was Saladin?', opts:['The Muslim leader who recaptured Jerusalem in 1187','A Crusader knight','The Pope who started the Crusades','A Byzantine emperor'], c:0, e:'Saladin (Salah ad-Din) was the Muslim sultan who united Muslim forces and recaptured Jerusalem from the Crusaders in 1187.' },
      { q:'Which English king led the Third Crusade?', opts:['Richard I (the Lionheart)','Henry II','John','Edward I'], c:0, e:'Richard I, known as the Lionheart for his bravery, led the English forces in the Third Crusade (1189-1192) but failed to recapture Jerusalem.' },
      { q:'What were the Knights Templar?', opts:['A military religious order that protected Christian pilgrims in the Holy Land','A group of Muslim warriors','French merchants','English barons'], c:0, e:'The Knights Templar were a Catholic military order founded around 1119 to protect Christian pilgrims travelling to the Holy Land. They became powerful and wealthy.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What did Crusaders receive from the Pope for going on Crusade?', opts:['Forgiveness of their sins (an indulgence)','Money and gold','Land in England','A title of nobility'], c:0, e:'Pope Urban II promised Crusaders a plenary indulgence, meaning all their sins would be forgiven. This was a powerful motivation in a deeply religious age.' },
      { q:'How many major Crusades were there?', opts:['At least nine major Crusades','Only one','Exactly three','Over fifty'], c:0, e:'There were at least nine major Crusades between 1096 and 1291, though only the First Crusade was truly successful in capturing Jerusalem.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was one important consequence of the Crusades for trade between Europe and the Middle East?', opts:['Trade in spices, silk, and other goods increased significantly','All trade stopped completely','Only weapons were traded','Trade decreased'], c:0, e:'The Crusades opened up trade routes between Europe and the Middle East, introducing Europeans to new goods such as spices, sugar, silk, and cotton.' },
      { q:'What did the Crusaders call the territories they established in the Middle East?', opts:['Crusader states (or Outremer)','Colonies','Provinces','Shires'], c:0, e:'The Crusaders established several states known collectively as Outremer (French for "overseas"), including the Kingdom of Jerusalem, the County of Tripoli, and others.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why was Jerusalem important to Christians, Muslims, and Jews?', opts:['It contained holy sites sacred to all three religions','It was the richest city in the world','It was the capital of the Roman Empire','It had the best farmland'], c:0, e:'Jerusalem was sacred to Christians (site of Jesus\'s crucifixion), Muslims (site of Muhammad\'s Night Journey), and Jews (location of the Temple). This made it deeply contested.' },
      { q:'What happened when the Crusaders captured Jerusalem in 1099?', opts:['They massacred many of the city\'s Muslim and Jewish inhabitants','They peacefully took control','They left immediately','They converted to Islam'], c:0, e:'The capture of Jerusalem in 1099 was accompanied by a terrible massacre of many Muslim and Jewish inhabitants, an event that remains controversial.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why might a historian argue the Crusades had positive cultural consequences despite the violence?', opts:['They increased cultural exchange, bringing new knowledge, ideas, and goods to Europe','They had no positive effects at all','They only benefited Muslim societies','They ended all conflict between religions'], c:0, e:'Despite the violence, the Crusades led to significant cultural exchange. Europeans encountered advanced Muslim scholarship in mathematics, medicine, and science, and new trade goods transformed European life.' },
      { q:'Why did later Crusades fail to permanently hold Jerusalem?', opts:['Crusader states were far from Europe, poorly supplied, and faced united Muslim opposition under leaders like Saladin','The weather was too hot','The Crusaders ran out of weapons','The Pope stopped supporting them'], c:0, e:'Later Crusades failed because Crusader states were thousands of miles from reinforcements, Crusader leaders often quarrelled, and Muslim forces became united under strong leaders like Saladin.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did Muslim and Christian accounts of the Crusades differ?', opts:['Christians saw them as holy wars to reclaim sacred land; Muslims saw them as unprovoked invasions by barbarians','Both sides agreed the Crusades were justified','Neither side wrote about the Crusades','Muslims welcomed the Crusaders'], c:0, e:'Christian writers portrayed the Crusades as righteous holy wars. Muslim historians described the Crusaders as barbaric invaders (Franks). These differing perspectives show how the same events can be interpreted very differently.' },
      { q:'To what extent were the Crusades motivated by religious belief versus other factors?', opts:['Both religious belief and worldly motives like land, wealth, and adventure played important roles','Only religious belief mattered','Only greed motivated Crusaders','Political power was the sole reason'], c:0, e:'While genuine religious devotion motivated many Crusaders, historians also identify other motives: younger sons seeking land, merchants seeking trade, and kings seeking political prestige. The reality was a mix of motivations.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'What was the long-term impact of the Crusades on Christian-Muslim relations?', opts:['They created lasting mistrust and hostility between the two religions that echoes through history','They brought lasting peace','They had no long-term impact on relations','They made both religions identical'], c:0, e:'The Crusades created deep-seated mistrust between Christians and Muslims. The violence and conquest left a lasting legacy of suspicion that has influenced relations between the two faiths for centuries.' },
      { q:'Why is it important for historians to study both Christian and Muslim sources about the Crusades?', opts:['To get a balanced understanding, since each side has its own bias and perspective','Because Christian sources are always wrong','Because Muslim sources are always wrong','Because there is only one correct version of events'], c:0, e:'Using sources from both sides helps historians build a more complete and balanced picture. Each side had biases: Christian writers justified the Crusades while Muslim writers condemned them. Comparing both reveals a fuller truth.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-32: The Renaissance & Reformation ────────────────────────────
TEST_GENERATORS["island-32"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'In which country did the Renaissance begin?', opts:['Italy','England','France','Germany'], c:0, e:'The Renaissance began in Italy in the 14th century, particularly in wealthy city-states like Florence, Venice, and Rome.' },
      { q:'What does the word "Renaissance" mean?', opts:['Rebirth','Revolution','Religion','Reformation'], c:0, e:'Renaissance comes from the French word meaning "rebirth". It refers to the revival of interest in the art, learning, and culture of ancient Greece and Rome.' },
      { q:'Which city was the main centre of the Italian Renaissance?', opts:['Florence','London','Paris','Berlin'], c:0, e:'Florence, ruled by the wealthy Medici family, was the main centre of the Renaissance. Many great artists and thinkers worked there.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who painted the Mona Lisa and designed flying machines?', opts:['Leonardo da Vinci','Michelangelo','Raphael','Galileo'], c:0, e:'Leonardo da Vinci (1452-1519) was a true Renaissance polymath: painter of the Mona Lisa, inventor, scientist, and engineer who designed flying machines centuries ahead of his time.' },
      { q:'Who painted the ceiling of the Sistine Chapel?', opts:['Michelangelo','Leonardo da Vinci','Raphael','Donatello'], c:0, e:'Michelangelo painted the ceiling of the Sistine Chapel in Rome between 1508 and 1512. The famous scene shows God reaching out to touch Adam\'s finger.' },
      { q:'What idea was central to Renaissance thinking?', opts:['Humanism — the belief in human potential and achievement','That only God mattered','That learning was sinful','That art should be banned'], c:0, e:'Humanism was the central philosophy of the Renaissance. It emphasised the value and potential of human beings and encouraged the study of classical Greek and Roman texts.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who invented the printing press using movable type around 1440?', opts:['Johannes Gutenberg','Martin Luther','Leonardo da Vinci','William Caxton'], c:0, e:'Johannes Gutenberg of Mainz, Germany, invented the printing press with movable metal type around 1440, revolutionising the spread of knowledge across Europe.' },
      { q:'Who nailed 95 Theses to a church door in Wittenberg in 1517?', opts:['Martin Luther','Henry VIII','Pope Leo X','John Calvin'], c:0, e:'Martin Luther, a German monk, posted his 95 Theses on the door of All Saints\' Church in Wittenberg in 1517, criticising the Catholic Church\'s sale of indulgences and sparking the Reformation.' },
      { q:'What was the Reformation?', opts:['A movement to reform the Catholic Church, leading to the creation of Protestant churches','A type of Renaissance art','A war between England and France','A new farming method'], c:0, e:'The Reformation was a 16th-century movement led by figures like Martin Luther that challenged Catholic Church practices and led to the creation of Protestant denominations.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What did Henry VIII do with the Act of Supremacy in 1534?', opts:['Made himself Head of the Church of England, breaking from the Pope','Declared war on France','Abolished Parliament','Banned the printing press'], c:0, e:'The Act of Supremacy (1534) made Henry VIII the Supreme Head of the Church of England, breaking England\'s ties with the Pope and the Catholic Church in Rome.' },
      { q:'Why did Henry VIII break with the Catholic Church?', opts:['The Pope refused to annul his marriage to Catherine of Aragon','He disagreed with all Catholic beliefs','He wanted to become Pope himself','The barons forced him to'], c:0, e:'Henry VIII wanted to divorce Catherine of Aragon to marry Anne Boleyn, hoping for a male heir. When the Pope refused to grant an annulment, Henry broke away from Rome.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How did the printing press change society?', opts:['It made books cheaper and more widely available, spreading knowledge and new ideas','It had no effect on society','It was only used for religious texts','It replaced all handwriting'], c:0, e:'Before the printing press, books were hand-copied and very expensive. Gutenberg\'s press made books affordable, increased literacy, and allowed new ideas (including Luther\'s) to spread rapidly across Europe.' },
      { q:'What were indulgences that Martin Luther criticised?', opts:['Payments to the Church that were said to reduce time in purgatory','Free gifts from the Pope','Types of prayers','Church holidays'], c:0, e:'Indulgences were payments made to the Catholic Church that supposedly reduced the time a soul spent in purgatory. Luther argued this was corrupt and not supported by the Bible.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why did the Renaissance begin in Italy rather than elsewhere in Europe?', opts:['Italy had wealthy city-states, a classical Roman heritage, and strong trade links','Italy had the largest army','Italy was the most religious country','Italy had the best climate for art'], c:0, e:'Italy was ideally placed: wealthy city-states like Florence funded artists, Roman ruins inspired classical learning, and trade with the East brought new ideas and wealth. These conditions created the perfect environment for cultural rebirth.' },
      { q:'How did the printing press contribute to the Reformation?', opts:['It allowed Luther\'s ideas to spread rapidly across Europe, reaching millions','It had no effect on the Reformation','Luther banned the printing press','Only the Pope used the printing press'], c:0, e:'The printing press was crucial to the Reformation. Luther\'s 95 Theses and other writings were printed and distributed rapidly across Europe, reaching a far wider audience than hand-copied texts ever could.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'To what extent was Henry VIII\'s break with Rome motivated by genuine religious belief?', opts:['It was mainly political and personal — he wanted a divorce and control over Church wealth — rather than deeply religious','He was a devout Protestant from childhood','He was forced by Parliament','He followed Martin Luther\'s teachings exactly'], c:0, e:'Henry VIII\'s break with Rome was driven more by personal desire (a male heir) and political ambition (control of Church wealth and power) than by genuine Protestant conviction. He continued to hold many Catholic beliefs.' },
      { q:'Why is the Renaissance considered a turning point in European history?', opts:['It shifted focus from purely religious thinking to human potential, science, and classical learning','It only affected artists','It had no lasting impact','It was exactly the same as the medieval period'], c:0, e:'The Renaissance marked a shift from medieval religious focus to humanism, scientific inquiry, and individual achievement. This new way of thinking laid the foundations for the modern world, including the Scientific Revolution and Enlightenment.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the Reformation change the relationship between rulers and the Church in Europe?', opts:['Many rulers broke free from papal authority and gained control over religion in their own countries','The Pope gained more power over rulers','Nothing changed between rulers and the Church','All rulers became Catholic again'], c:0, e:'The Reformation allowed rulers like Henry VIII to break from papal authority, seize Church lands, and control religion in their countries. This was a fundamental shift in the balance of power between Church and state across Europe.' },
      { q:'What might a historian learn about Renaissance values by studying Leonardo da Vinci\'s work?', opts:['That the Renaissance valued curiosity, observation, combining art with science, and pushing human boundaries','That the Renaissance only valued religious art','That people were not interested in science','That only painting mattered'], c:0, e:'Leonardo\'s work — from anatomical drawings to flying machine designs to the Mona Lisa — perfectly embodies Renaissance humanism: boundless curiosity, careful observation, the blending of art and science, and belief in limitless human potential.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-33: The Tudors & Elizabethan England ─────────────────────────
TEST_GENERATORS["island-33"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How many wives did Henry VIII have?', opts:['Six','Four','Five','Eight'], c:0, e:'Henry VIII had six wives: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, and Catherine Parr.' },
      { q:'Which of Henry VIII\'s wives gave him a son (Edward VI)?', opts:['Jane Seymour','Anne Boleyn','Catherine of Aragon','Catherine Parr'], c:0, e:'Jane Seymour, Henry VIII\'s third wife, gave birth to his only surviving son, Edward, in 1537. She died shortly after childbirth.' },
      { q:'Who was the first Tudor monarch?', opts:['Henry VII','Henry VIII','Elizabeth I','Edward VI'], c:0, e:'Henry VII became the first Tudor monarch after defeating Richard III at the Battle of Bosworth in 1485, ending the Wars of the Roses.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why was Mary I given the nickname "Bloody Mary"?', opts:['She had around 300 Protestants burned at the stake','She fought many bloody battles','She wore red clothes','She was cruel to her servants'], c:0, e:'Mary I (reigned 1553-1558) restored Catholicism and had approximately 300 Protestants burned at the stake for heresy, earning her the nickname "Bloody Mary".' },
      { q:'Which queen defeated the Spanish Armada in 1588?', opts:['Elizabeth I','Mary I','Mary Queen of Scots','Jane Grey'], c:0, e:'Elizabeth I was queen when England defeated the Spanish Armada in 1588. The victory established England as a major naval power.' },
      { q:'What was Elizabeth I\'s religious settlement called?', opts:['The Middle Way (via media)','The Great Reform','The Catholic Revival','The Protestant Revolution'], c:0, e:'Elizabeth I\'s religious settlement was called the Middle Way (via media) because it tried to find a compromise between Catholicism and Protestantism that most people could accept.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What happened to the Spanish Armada in 1588?', opts:['It was defeated by the English navy and bad weather','It conquered England','It never left Spain','It was welcomed peacefully'], c:0, e:'The Spanish Armada of 130 ships was sent by Philip II of Spain to invade England in 1588. It was defeated by the English navy\'s tactics and scattered by storms.' },
      { q:'Who was the last Tudor monarch?', opts:['Elizabeth I','Henry VIII','Mary I','Edward VI'], c:0, e:'Elizabeth I (reigned 1558-1603) was the last Tudor monarch. She never married and died without an heir, ending the Tudor dynasty.' },
      { q:'Why is the reign of Elizabeth I sometimes called a "Golden Age"?', opts:['England flourished in exploration, arts (especially theatre), and trade','Everyone became wealthy','There were no problems during her reign','Gold was discovered in England'], c:0, e:'Elizabeth I\'s reign is called a Golden Age because of achievements in literature (Shakespeare, Marlowe), exploration (Drake, Raleigh), music, and growing national confidence after defeating the Armada.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What happened to Anne Boleyn, Henry VIII\'s second wife?', opts:['She was executed (beheaded) in 1536','She died of old age','She was sent to France','She became a nun'], c:0, e:'Anne Boleyn was accused of treason, adultery, and other charges. She was beheaded at the Tower of London on 19 May 1536.' },
      { q:'How old was Edward VI when he became king?', opts:['Nine years old','Eighteen years old','Five years old','Twenty-one years old'], c:0, e:'Edward VI became king at the age of nine when Henry VIII died in 1547. He was a sickly child and died aged just fifteen in 1553.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which famous playwright wrote during Elizabeth I\'s reign?', opts:['William Shakespeare','Charles Dickens','Geoffrey Chaucer','Christopher Wren'], c:0, e:'William Shakespeare (1564-1616) wrote most of his famous plays during Elizabeth I\'s reign and the early years of James I. He is considered the greatest English playwright.' },
      { q:'What was the main reason Henry VIII wanted to divorce Catherine of Aragon?', opts:['She did not produce a male heir to the throne','She was too old','She was French','She refused to be queen'], c:0, e:'Henry VIII desperately wanted a male heir to secure the Tudor dynasty. Catherine of Aragon had only produced a daughter (Mary), so Henry sought an annulment to marry Anne Boleyn.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was Elizabeth I\'s religious settlement considered a clever political move?', opts:['It avoided the extremes of both Catholicism and Protestantism, reducing the risk of religious civil war','It made everyone Catholic','It banned all religion','It copied the French system exactly'], c:0, e:'Elizabeth\'s Middle Way was politically astute: the Church of England kept some Catholic traditions (bishops, church structure) while adopting Protestant beliefs (English Bible, no Pope). This compromise prevented the religious wars that devastated other European countries.' },
      { q:'How did Elizabeth I use the image of the "Virgin Queen" to strengthen her power?', opts:['By remaining unmarried, she kept her independence and could use marriage negotiations as a diplomatic tool','She wore all white clothing','She never appeared in public','She pretended to be a man'], c:0, e:'Elizabeth cultivated the image of the Virgin Queen married to England. Her unmarried status kept her independent from any husband\'s influence and allowed her to use potential marriage as a diplomatic bargaining tool with foreign powers.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why did Philip II of Spain send the Armada against England in 1588?', opts:['A combination of religious, political, and personal reasons including England\'s Protestantism and attacks on Spanish ships','He wanted to visit England','Elizabeth asked him to invade','He wanted English wool'], c:0, e:'Philip II had multiple motives: England\'s Protestantism offended Catholic Spain, English privateers like Drake attacked Spanish treasure ships, and Elizabeth had supported Dutch Protestant rebels against Spain.' },
      { q:'To what extent were the Tudors successful monarchs?', opts:['They brought stability and cultural achievement but also religious turmoil and authoritarian rule','They were complete failures','They were all perfect rulers','They had no impact on England'], c:0, e:'The Tudors brought political stability after the Wars of the Roses and a cultural Golden Age, but also religious upheaval, executions, and heavy taxation. Their success depends on which aspects of their rule are examined.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did Henry VIII\'s break with Rome change English society beyond religion?', opts:['It gave the Crown enormous wealth from dissolved monasteries and changed landownership across England','It only affected the Church','It had no effect on ordinary people','It made England poorer'], c:0, e:'The dissolution of the monasteries (1536-41) transferred vast Church wealth and land to the Crown and those who bought it. This transformed landownership, destroyed centres of learning and charity, and enriched a new class of landowners.' },
      { q:'Why might historians disagree about whether Mary I deserves the nickname "Bloody Mary"?', opts:['Other Tudor monarchs also executed people for religious reasons, and Mary genuinely believed she was saving souls','Because she never executed anyone','Because the nickname was given by her friends','Because she was actually very kind'], c:0, e:'Historians debate this because burning heretics was common practice across Europe, other Tudor monarchs also killed for religion (Henry VIII executed Catholics and Protestants), and Mary believed she was saving England\'s soul. The nickname reflects Protestant bias in later historical writing.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-34: The Transatlantic Slave Trade ────────────────────────────
TEST_GENERATORS["island-34"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the triangular trade?', opts:['A three-legged trade route between Britain, Africa, and the Americas','A trade route shaped like a triangle within Europe','A route between three cities in Africa','A type of bartering system'], c:0, e:'The triangular trade was a three-stage trade route: goods went from Britain to Africa, enslaved people from Africa to the Americas (the Middle Passage), and raw materials from the Americas back to Britain.' },
      { q:'What was the Middle Passage?', opts:['The journey of enslaved Africans across the Atlantic Ocean to the Americas','A trade route through the Mediterranean','A passage through the middle of Africa','A canal in Britain'], c:0, e:'The Middle Passage was the horrific sea voyage from Africa to the Americas. Enslaved people were packed into ships in terrible conditions, and many died during the journey.' },
      { q:'In what year was the slave trade abolished in the British Empire?', opts:['1807','1833','1776','1865'], c:0, e:'The Slave Trade Act of 1807 abolished the buying and selling of enslaved people throughout the British Empire, though slavery itself continued until 1833.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was Olaudah Equiano?', opts:['A formerly enslaved man who wrote an autobiography about his experiences','A slave trader','A British politician','A plantation owner'], c:0, e:'Olaudah Equiano was a formerly enslaved man who wrote "The Interesting Narrative of the Life of Olaudah Equiano" (1789), describing the horrors of slavery and helping the abolitionist cause.' },
      { q:'Who led the campaign to abolish the slave trade in Parliament?', opts:['William Wilberforce','Olaudah Equiano','King George III','William Pitt'], c:0, e:'William Wilberforce was the MP who led the parliamentary campaign against the slave trade for over 20 years, finally achieving its abolition in 1807.' },
      { q:'What year was slavery itself finally abolished in the British Empire?', opts:['1833','1807','1776','1900'], c:0, e:'The Slavery Abolition Act of 1833 abolished slavery itself throughout most of the British Empire, going beyond the 1807 act which had only banned the trade.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What goods were taken from Britain to Africa as part of the triangular trade?', opts:['Manufactured goods such as guns, cloth, and alcohol','Enslaved people','Sugar and tobacco','Gold and silver'], c:0, e:'British ships carried manufactured goods like textiles, guns, iron, and alcohol to Africa, where they were traded for enslaved people.' },
      { q:'What were enslaved people forced to do on plantations in the Americas?', opts:['Work growing crops like sugar, tobacco, and cotton','Attend school','Build churches','Trade with local people'], c:0, e:'Enslaved people were forced to work extremely long hours on plantations growing cash crops like sugar cane, tobacco, cotton, and coffee in brutal conditions.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What conditions did enslaved Africans face during the Middle Passage?', opts:['Terrible overcrowding, disease, chains, and many died during the voyage','Comfortable cabins and good food','Freedom to move around the ship','The same conditions as the crew'], c:0, e:'Conditions on the Middle Passage were horrific: enslaved people were chained together in cramped spaces below deck, with little food or water. Disease was rampant and many died during the crossing.' },
      { q:'Which crop was most commonly grown on Caribbean plantations using enslaved labour?', opts:['Sugar cane','Wheat','Potatoes','Rice'], c:0, e:'Sugar cane was the most profitable crop grown on Caribbean plantations. The work was extremely dangerous and exhausting, involving cutting cane and processing it in boiling houses.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How did the slave trade make British cities like Liverpool and Bristol wealthy?', opts:['Profits from trading enslaved people and slave-produced goods funded building, industry, and banking','They had nothing to do with the slave trade','They traded only within Europe','They were already wealthy before the slave trade'], c:0, e:'Cities like Liverpool and Bristol grew rich from the slave trade. Merchants profited from selling enslaved people and importing slave-produced goods like sugar. This wealth funded grand buildings, banks, and industrial development.' },
      { q:'What was an abolitionist?', opts:['Someone who campaigned to end slavery and the slave trade','A plantation owner','A slave trader','A type of slave'], c:0, e:'An abolitionist was a person who campaigned to abolish (end) slavery and the slave trade. Key abolitionists included William Wilberforce, Thomas Clarkson, and Olaudah Equiano.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was Olaudah Equiano\'s autobiography so important in the fight against slavery?', opts:['It gave a first-hand account of the horrors of slavery that moved public opinion and influenced Parliament','It was just an interesting story','It was only read by enslaved people','It supported slavery'], c:0, e:'Equiano\'s autobiography was powerful because it provided a first-person account of the horrors of capture, the Middle Passage, and enslavement. It humanised enslaved people for a British audience and became a key text in the abolitionist campaign.' },
      { q:'Why did it take so long to abolish slavery even after the slave trade was banned in 1807?', opts:['Plantation owners were powerful, profitable, and had political influence in Parliament','Everyone agreed slavery should end quickly','There were no more enslaved people after 1807','The king refused to sign any law'], c:0, e:'Wealthy plantation owners had significant political power and argued that abolition would ruin the economy. It took another 26 years of campaigning, slave resistance, and political pressure before slavery itself was abolished in 1833.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did enslaved people resist their enslavement?', opts:['Through rebellions, running away, maintaining cultural traditions, working slowly, and sabotage','They never resisted','They only used violence','They wrote letters to Parliament'], c:0, e:'Enslaved people resisted in many ways: armed rebellions (e.g., Haiti 1791), running away, preserving African languages and customs, working slowly, breaking tools, and even refusing to eat. Resistance was constant and took many forms.' },
      { q:'Why is it important to study the slave trade as part of British history?', opts:['Because Britain played a major role in the slave trade and it shaped British wealth, society, and its legacy of racism','Because Britain had nothing to do with it','Because it only affected Africa','Because it happened too long ago to matter'], c:0, e:'Britain was one of the largest slave-trading nations, and the profits of the slave trade shaped British cities, industry, and wealth. Understanding this history helps explain racial inequalities that persist today and Britain\'s global connections.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Should William Wilberforce receive the main credit for abolishing the slave trade, or were other factors more important?', opts:['While Wilberforce was important, the resistance of enslaved people, economic changes, and wider campaigning were equally or more significant','Wilberforce did everything alone','Only economic factors mattered','Parliament decided without any outside pressure'], c:0, e:'Historians increasingly recognise that while Wilberforce was important, enslaved people\'s own resistance (like the Haitian Revolution), the work of campaigners like Thomas Clarkson, changing economic conditions, and public petitions all played crucial roles.' },
      { q:'What is the legacy of the transatlantic slave trade in modern Britain?', opts:['It contributed to systemic racism, wealth inequality, and cultural diversity that still shape British society today','It has no lasting effects','It only affected the Americas','It was too long ago to have any impact'], c:0, e:'The legacy includes the wealth that funded Britain\'s Industrial Revolution, systemic racism and inequality, the diverse population resulting from later migration from former colonies, and ongoing debates about reparations and how to commemorate this history.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-53: Pre-1066 Britain: Anglo-Saxons & Vikings ─────────────────
TEST_GENERATORS["island-53"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Approximately when did Roman rule in Britain end?', opts:['Around 410 AD','In 1066','In 793 AD','In 55 BC'], c:0, e:'The Romans withdrew from Britain around 410 AD, leaving the country vulnerable to invasion by groups like the Angles, Saxons, and Jutes.' },
      { q:'Which three Germanic groups settled in Britain after the Romans left?', opts:['Angles, Saxons, and Jutes','Franks, Goths, and Vandals','Vikings, Normans, and Celts','Romans, Greeks, and Persians'], c:0, e:'After the Roman withdrawal, the Angles (from modern Denmark/Germany), Saxons (from northern Germany), and Jutes (from Jutland/Denmark) migrated to and settled in Britain.' },
      { q:'What name did the Angles give to the country, which we still use today?', opts:['England (Angle-land)','Britain','Saxony','Jutland'], c:0, e:'The word "England" comes from "Angle-land", meaning the land of the Angles. The Angles were one of the main Germanic groups that settled in Britain.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What happened at Lindisfarne in 793 AD?', opts:['Vikings attacked the monastery in the first major Viking raid on Britain','The Romans arrived in Britain','The Battle of Hastings took place','The Magna Carta was signed'], c:0, e:'In 793 AD, Vikings from Scandinavia attacked the wealthy monastery at Lindisfarne (Holy Island) off the coast of Northumbria. This is considered the start of the Viking Age in Britain.' },
      { q:'What was the Danelaw?', opts:['The area of England controlled by the Vikings (Danes)','A type of Viking ship','A set of Danish laws about farming','The Viking king\'s palace'], c:0, e:'The Danelaw was the area of England under Viking (Danish) control, roughly covering the north and east of the country. It had its own laws and customs different from Anglo-Saxon England.' },
      { q:'Which Anglo-Saxon king is famous for defending England against the Vikings?', opts:['Alfred the Great','Edward the Confessor','Harold Godwinson','Canute'], c:0, e:'Alfred the Great, King of Wessex (871-899), successfully defended his kingdom against Viking invasion, created a navy, established fortified towns (burhs), and promoted learning and literacy.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Name three of the main Anglo-Saxon kingdoms.', opts:['Wessex, Mercia, and Northumbria','London, York, and Canterbury','England, Scotland, and Wales','Cornwall, Devon, and Somerset'], c:0, e:'The main Anglo-Saxon kingdoms included Wessex (south-west), Mercia (midlands), Northumbria (north), East Anglia (east), Essex, Sussex, and Kent.' },
      { q:'Who was the last Anglo-Saxon king of England?', opts:['Harold Godwinson','Edward the Confessor','Alfred the Great','Canute'], c:0, e:'Harold Godwinson was the last Anglo-Saxon king. He was crowned in January 1066 and killed at the Battle of Hastings in October 1066.' },
      { q:'Who was Edward the Confessor?', opts:['The Anglo-Saxon king whose death in 1066 triggered the succession crisis','A Viking warrior','A Norman duke','A Roman emperor'], c:0, e:'Edward the Confessor was the Anglo-Saxon king of England from 1042 to 1066. His death without a clear heir in January 1066 led to rival claims to the throne and the Norman Conquest.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the Great Heathen Army?', opts:['A large Viking invasion force that arrived in England in 865 AD','An Anglo-Saxon army','A Roman legion','A group of monks'], c:0, e:'The Great Heathen Army was a large coalition of Viking warriors from Scandinavia that invaded England in 865 AD. They conquered most of the Anglo-Saxon kingdoms except Wessex.' },
      { q:'What is Beowulf?', opts:['The oldest surviving epic poem in Old English, about a hero fighting monsters','A Viking king','An Anglo-Saxon law code','A type of weapon'], c:0, e:'Beowulf is the oldest surviving long poem in Old English. It tells the story of a Scandinavian hero who fights the monster Grendel, Grendel\'s mother, and a dragon.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Where did the Vikings originally come from?', opts:['Scandinavia (modern Norway, Sweden, and Denmark)','France','Spain','Italy'], c:0, e:'The Vikings came from Scandinavia — modern-day Norway, Sweden, and Denmark. They were skilled sailors and warriors who raided, traded, and settled across Europe.' },
      { q:'What were Viking longships designed for?', opts:['Fast travel across seas and up rivers, able to land on beaches','Carrying heavy cargo only','Underwater travel','Staying in one place'], c:0, e:'Viking longships were light, fast, and flexible. Their shallow draft allowed them to sail up rivers and land directly on beaches, making surprise raids possible.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was Alfred the Great considered "great" compared to other Anglo-Saxon kings?', opts:['He defended Wessex from the Vikings, promoted education, created a navy, and established a legal code','He conquered all of Europe','He was the richest king','He had the largest family'], c:0, e:'Alfred earned the title "Great" because he prevented Viking conquest of all England, built a network of fortified towns (burhs), created a navy, promoted literacy and learning, and established a written law code. He is the only English monarch called "Great".' },
      { q:'How did the Anglo-Saxons and Vikings influence modern English language and place names?', opts:['Many everyday English words come from Old English (Anglo-Saxon) and Old Norse (Viking), and place-name endings reveal their origins','They had no influence on modern English','Only Latin influenced English','English came entirely from French'], c:0, e:'Anglo-Saxon gave us words like "house", "bread", and "child". Old Norse gave us "sky", "egg", and "window". Place names ending in -ton, -ham, -bury are Anglo-Saxon; those ending in -by, -thorpe, -thwaite are Viking.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Were the Vikings only violent raiders, or is this view too simple?', opts:['It is too simple — Vikings were also traders, settlers, farmers, and craftspeople who made lasting cultural contributions','They were only raiders and warriors','They never raided anyone','They were only interested in gold'], c:0, e:'The image of Vikings as only violent raiders is a stereotype. While raiding was important, Vikings were also skilled traders (reaching Constantinople and Baghdad), farmers who settled permanently, skilled metalworkers, and storytellers. Many peacefully integrated into local populations.' },
      { q:'Why is our understanding of Anglo-Saxon and Viking Britain limited?', opts:['Few written sources survive from this period, and much evidence comes from archaeology which can be hard to interpret','We have complete written records','Everything was perfectly documented','Historians are not interested in this period'], c:0, e:'This period has limited written sources (mostly from monks with their own biases). Much knowledge comes from archaeological evidence like burial sites, coins, and artefacts, which require careful interpretation and can be incomplete.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the Viking invasions ultimately help to unify England?', opts:['The threat of Viking attack forced Anglo-Saxon kingdoms to unite under Wessex, eventually creating a single English kingdom','Vikings divided England permanently','Vikings had no effect on English unity','England was already unified before the Vikings'], c:0, e:'Before the Vikings, England was divided into rival kingdoms. The Viking threat forced these kingdoms to cooperate under Wessex\'s leadership (Alfred, then his successors), ultimately leading to the unification of England under one king by the 10th century.' },
      { q:'What can the poem Beowulf tell us about Anglo-Saxon values and beliefs?', opts:['It reveals values like bravery, loyalty to one\'s lord, generosity, fame, and the importance of kinship','It tells us nothing about Anglo-Saxon life','It is entirely fictional with no historical value','It only describes Viking culture'], c:0, e:'Beowulf reveals key Anglo-Saxon values: courage in battle, loyalty between a lord and his warriors, the importance of reputation and fame, generosity (gift-giving), and the tension between Christian and older pagan beliefs.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-54: The Peasants' Revolt (1381) ──────────────────────────────
TEST_GENERATORS["island-54"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'In what year did the Peasants\' Revolt take place?', opts:['1381','1348','1066','1215'], c:0, e:'The Peasants\' Revolt took place in 1381, when thousands of peasants marched on London to protest against unfair taxes and working conditions.' },
      { q:'Who was the leader of the Peasants\' Revolt?', opts:['Wat Tyler','John Ball','Richard II','Simon de Montfort'], c:0, e:'Wat Tyler was the main leader of the Peasants\' Revolt of 1381. He led the rebels from Kent to London to confront the young King Richard II.' },
      { q:'What tax triggered the Peasants\' Revolt?', opts:['The Poll Tax','Income tax','A tax on bread','Church tithes'], c:0, e:'The immediate trigger for the revolt was the Poll Tax of 1380-81, which required every adult to pay the same amount regardless of wealth. This was the third poll tax in four years.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was the radical priest who preached equality during the Peasants\' Revolt?', opts:['John Ball','Wat Tyler','Richard II','Thomas Becket'], c:0, e:'John Ball was a radical priest who preached that all people were equal. He is remembered for his famous question: "When Adam delved and Eve span, who was then the gentleman?"' },
      { q:'Which king met the rebels during the Peasants\' Revolt?', opts:['Richard II','Henry II','Edward III','John'], c:0, e:'The young King Richard II, only fourteen years old, met the rebels at Mile End and Smithfield in London during the Peasants\' Revolt of 1381.' },
      { q:'What happened to Wat Tyler at Smithfield?', opts:['He was stabbed and killed by the Lord Mayor of London','He escaped to France','He was made a lord','He became an advisor to the king'], c:0, e:'At the meeting at Smithfield, Wat Tyler was stabbed and killed by William Walworth, the Lord Mayor of London. Richard II then faced the crowd and promised to address their demands.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the Statute of Labourers (1351)?', opts:['A law that tried to keep wages low after the Black Death','A law freeing all serfs','A law raising wages','A law about building churches'], c:0, e:'The Statute of Labourers (1351) was passed after the Black Death to prevent peasants demanding higher wages. It tried to fix wages at pre-plague levels, angering peasants who knew their labour was valuable.' },
      { q:'How did the Black Death contribute to the Peasants\' Revolt?', opts:['It created a labour shortage that made peasants demand better conditions, but laws tried to prevent this','It killed all the peasants so they could not revolt','It made everyone richer','It had no connection to the revolt'], c:0, e:'The Black Death (1348-51) killed so many people that surviving peasants could demand higher wages. When laws like the Statute of Labourers tried to keep wages low, it fuelled resentment that eventually exploded in the 1381 revolt.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Where did the peasants march to during the revolt?', opts:['London','York','Canterbury','Oxford'], c:0, e:'The peasants marched from Kent and Essex to London, where they demanded to meet King Richard II and presented their grievances.' },
      { q:'What did the rebels demand during the Peasants\' Revolt?', opts:['An end to serfdom, lower taxes, and the right to fair wages','More land for the lords','Higher taxes','A new king'], c:0, e:'The rebels demanded an end to serfdom (unfree labour), the abolition of the poll tax, fair rents, and the right to work for wages. They wanted greater freedom and justice.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What promises did Richard II make to the rebels?', opts:['He promised to end serfdom and grant pardons, but later broke these promises','He promised them gold','He refused to speak to them','He gave them land immediately'], c:0, e:'Richard II promised at Mile End to abolish serfdom and grant pardons to the rebels. However, after the revolt was crushed, he broke all his promises and punished the rebel leaders.' },
      { q:'What happened after the Peasants\' Revolt was crushed?', opts:['The leaders were executed and the king broke his promises, but serfdom did gradually decline','All peasants were freed immediately','Nothing changed at all','The king was overthrown'], c:0, e:'After the revolt, leaders like John Ball were executed and Richard II withdrew his promises. However, the poll tax was never used again, and serfdom gradually declined over the following decades.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Was the Peasants\' Revolt a failure or a success? Which view has the strongest evidence?', opts:['It was a short-term failure (leaders killed, promises broken) but a long-term success (poll tax dropped, serfdom declined)','It was a complete failure with no lasting effects','It achieved everything immediately','It only benefited the king'], c:0, e:'The revolt failed in its immediate aims — leaders were executed and promises broken. But it showed the ruling class that peasants could be a powerful force. The poll tax was never levied again, and serfdom gradually disappeared, suggesting long-term success.' },
      { q:'Why was Richard II able to break his promises to the rebels after the revolt?', opts:['Once the rebels dispersed, the king had military power to arrest leaders and withdraw concessions','The rebels agreed he should break them','Parliament forced him to keep them','He was too young to understand'], c:0, e:'Richard II made promises under duress while surrounded by thousands of angry rebels. Once the crowd dispersed and Wat Tyler was dead, the king had the military upper hand and could retract his promises and punish the leaders.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did John Ball\'s ideas challenge medieval society?', opts:['His belief that all people were created equal directly challenged the feudal system\'s hierarchy based on birth','He supported the feudal system','He only wanted lower taxes','His ideas were popular with the king'], c:0, e:'John Ball preached radical equality: that God made all people equal and that the feudal hierarchy was unjust. This directly challenged the fundamental basis of medieval society, where your position was determined by birth.' },
      { q:'What does the Peasants\' Revolt tell historians about the lives of ordinary people in medieval England?', opts:['That ordinary people were aware of their rights, could organise collectively, and were willing to challenge authority','That peasants were content with their lives','That only nobles had political ideas','That medieval people could not organise'], c:0, e:'The Peasants\' Revolt shows that ordinary people had political awareness, could organise effectively across counties, had clear grievances and demands, and were willing to challenge even the king. This challenges the idea that medieval peasants were passive and ignorant.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How reliable are the sources we have about the Peasants\' Revolt, and why?', opts:['Most were written by monks and nobles hostile to the rebels, so they may exaggerate violence and dismiss peasant grievances','They are completely unbiased','Peasants wrote most of the accounts','All sources agree with each other'], c:0, e:'Most surviving accounts were written by chroniclers from the ruling class (monks, nobles) who opposed the revolt. They tend to portray the rebels as a violent mob rather than presenting their legitimate grievances. Historians must read these sources critically.' },
      { q:'Compare the causes of the Peasants\' Revolt with the causes of the Magna Carta. What do they have in common?', opts:['Both were caused by unfair taxation and abuse of royal power, showing that people will resist when pushed too far','They have nothing in common','Both were caused by foreign invasion','Both were only about religion'], c:0, e:'Both the Magna Carta (1215) and the Peasants\' Revolt (1381) were triggered by excessive taxation and abuse of power. In both cases, people (barons in 1215, peasants in 1381) organised to resist a king they felt was governing unjustly.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-55: The Medieval Church & Religion ───────────────────────────
TEST_GENERATORS["island-55"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was at the head of the medieval Church?', opts:['The Pope in Rome','The King of England','The Archbishop of Canterbury','The local priest'], c:0, e:'The Pope in Rome was the head of the entire Catholic Church in medieval Europe. He had authority over all bishops, priests, and monasteries.' },
      { q:'What was the correct hierarchy of the medieval Church?', opts:['Pope, Archbishops, Bishops, Priests','King, Barons, Knights, Priests','Priests, Bishops, Archbishops, Pope','Pope, Priests, Bishops, Archbishops'], c:0, e:'The medieval Church hierarchy ran from the Pope at the top, then Archbishops, then Bishops, then parish Priests at the local level.' },
      { q:'What was a tithe?', opts:['A tax of one-tenth of what you produced, paid to the Church','A type of prayer','A religious holiday','A church building'], c:0, e:'A tithe was one-tenth of everything a person produced — crops, animals, eggs — which had to be given to the parish church. It was compulsory and helped fund the Church.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a medieval monastery?', opts:['A religious community where monks lived, prayed, and worked according to strict rules','A type of castle','A market town','A school for knights'], c:0, e:'A monastery was a religious house where monks lived a life of prayer, work, and study under strict rules (like the Rule of St Benedict). They were important centres of learning, charity, and farming.' },
      { q:'What was a pilgrimage in medieval times?', opts:['A journey to a holy place to pray, seek healing, or show devotion','A type of war','A farming method','A legal trial'], c:0, e:'A pilgrimage was a religious journey to a sacred place, such as Canterbury, Rome, or Jerusalem. People went to pray at holy sites, seek healing from relics, or do penance for sins.' },
      { q:'What were relics?', opts:['Objects believed to be remains of saints or holy items with miraculous powers','Types of weapons','Legal documents','Church decorations with no special meaning'], c:0, e:'Relics were objects believed to be the physical remains of saints (bones, hair) or items associated with holy figures. Medieval people believed they had miraculous healing powers.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was Thomas Becket?', opts:['The Archbishop of Canterbury who was murdered in Canterbury Cathedral in 1170','A medieval king','A Viking warrior','A monk who wrote books'], c:0, e:'Thomas Becket was the Archbishop of Canterbury who was murdered by four knights in Canterbury Cathedral in 1170, after clashing with King Henry II over the rights of the Church.' },
      { q:'Which king clashed with Thomas Becket?', opts:['Henry II','Henry VIII','William I','Richard I'], c:0, e:'Henry II clashed with Thomas Becket over whether the Church or the Crown had authority over clergy who committed crimes. Henry\'s angry words led four knights to murder Becket in the cathedral.' },
      { q:'What happened to Canterbury Cathedral after Becket\'s murder?', opts:['It became one of the most important pilgrimage sites in Europe','It was destroyed','It was abandoned','It was converted into a castle'], c:0, e:'After Becket\'s murder, Canterbury Cathedral became one of the most popular pilgrimage destinations in Europe. Becket was declared a saint, and pilgrims came from across Europe to visit his shrine.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was excommunication?', opts:['Being banned from the Church and its sacraments — the most feared punishment','A type of prayer','A church tax','A religious festival'], c:0, e:'Excommunication meant being expelled from the Church. The excommunicated person could not receive sacraments, which medieval people believed meant they would go to hell. Even kings feared excommunication.' },
      { q:'What role did the parish church play in village life?', opts:['It was the centre of the community — used for worship, social gatherings, and education','It was only used on Sundays','It was only for the wealthy','It had no role in daily life'], c:0, e:'The parish church was the heart of village life. It was used for daily worship, baptisms, weddings, and funerals. It also served as a meeting place, social centre, and sometimes the only stone building in the village.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What did monks do in medieval monasteries?', opts:['They prayed, copied manuscripts, farmed, and provided charity to the poor and sick','They only prayed','They fought in battles','They ran shops and markets'], c:0, e:'Medieval monks followed a daily routine of prayer (eight services a day), but also copied manuscripts by hand, farmed the monastery lands, cared for the sick, educated children, and gave alms to the poor.' },
      { q:'Why was the Church so powerful in medieval England?', opts:['It controlled education, owned vast land, collected tithes, and taught that it held the key to salvation','It had a large army','The king worked for the Pope','It had no power at all'], c:0, e:'The medieval Church was enormously powerful: it owned about one-third of all land, collected tithes from everyone, controlled education, ran hospitals, and most importantly, people believed only the Church could save their souls from hell.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why did Henry II\'s conflict with Thomas Becket matter for the relationship between Church and State?', opts:['It raised the fundamental question of whether the king or the Church had ultimate authority in England','It was just a personal argument','It only affected Canterbury','It had no lasting significance'], c:0, e:'The Becket conflict was about a fundamental constitutional question: who had supreme authority — the king or the Church? Becket\'s murder and subsequent sainthood actually strengthened the Church\'s position, showing that challenging Church authority had severe consequences.' },
      { q:'How did the Church use the fear of hell to control medieval people?', opts:['By teaching that only through the Church\'s sacraments could people avoid eternal damnation, making obedience to the Church essential','It never mentioned hell','People did not believe in hell','The Church encouraged people to think for themselves'], c:0, e:'The Church taught that everyone was a sinner who deserved hell, and that only through the Church\'s sacraments (baptism, communion, confession) could souls be saved. This gave the Church enormous power over people\'s behaviour and beliefs.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Were monasteries always the centres of learning and charity they claimed to be?', opts:['Not always — some monasteries became wealthy and corrupt, with monks living in luxury rather than poverty','They were always perfect','They had no wealth at all','They were all exactly the same'], c:0, e:'While many monasteries were genuine centres of learning and charity, some became very wealthy and their monks lived in relative luxury, far from the ideals of poverty and simplicity. This corruption later became a justification for Henry VIII\'s dissolution of the monasteries.' },
      { q:'Why might some historians question the reliability of miracle stories associated with medieval saints and relics?', opts:['Many miracles were reported to attract pilgrims and donations, and the Church had a financial motive to promote them','All miracle stories are completely true','Historians cannot question religious claims','Medieval people never believed in miracles'], c:0, e:'Historians note that popular saints\' shrines attracted wealthy pilgrims, making miracle claims financially beneficial. While not dismissing medieval faith, historians recognise that the Church had economic motives to promote miracle stories and authenticate relics.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the power of the medieval Church compare to the power of the king?', opts:['They were rival powers — the Church had spiritual authority, vast wealth, and international reach that sometimes exceeded the king\'s power','The king always had more power','The Church had no political power','They never came into conflict'], c:0, e:'The medieval Church rivalled the king in power: it owned a third of England\'s land, had its own courts and taxes, owed allegiance to the Pope (a foreign power), and claimed authority over spiritual matters affecting everyone. This led to frequent clashes.' },
      { q:'How did pilgrimage benefit both the pilgrim and the Church?', opts:['Pilgrims believed they gained spiritual merit; the Church gained income from donations and increased its influence','Pilgrimage only benefited merchants','Neither side benefited','Pilgrimage was banned by the Church'], c:0, e:'Pilgrimage was mutually beneficial: pilgrims believed visiting holy sites would cure illness, forgive sins, or earn favour with God. The Church benefited from donations left at shrines, increased religious devotion, and the enhanced prestige of its holy sites.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-56: The Wars of the Roses & Henry VII ────────────────────────
TEST_GENERATORS["island-56"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which two families fought in the Wars of the Roses?', opts:['Lancaster (red rose) and York (white rose)','Tudor and Stuart','Norman and Saxon','Plantagenet and Angevin'], c:0, e:'The Wars of the Roses (1455-1487) were a series of civil wars between the House of Lancaster (represented by a red rose) and the House of York (represented by a white rose) for the English throne.' },
      { q:'What was the symbol of the House of Lancaster?', opts:['A red rose','A white rose','A golden lion','A silver eagle'], c:0, e:'The House of Lancaster was represented by a red rose. Their rivals, the House of York, used a white rose. This is why the conflict is called the Wars of the Roses.' },
      { q:'What was the symbol of the House of York?', opts:['A white rose','A red rose','A golden crown','A black raven'], c:0, e:'The House of York was represented by a white rose. They fought against the House of Lancaster (red rose) for control of the English throne.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was the Lancastrian king during the early Wars of the Roses?', opts:['Henry VI','Edward IV','Richard III','Henry VII'], c:0, e:'Henry VI was the Lancastrian king. He was a weak ruler who suffered from periods of mental illness, which allowed the Yorkists to challenge his right to the throne.' },
      { q:'Which Yorkist king took the throne in 1461?', opts:['Edward IV','Richard III','Henry VII','Henry VI'], c:0, e:'Edward IV became king after the Battle of Towton in 1461, one of the bloodiest battles ever fought on English soil. He was the first Yorkist king.' },
      { q:'What was the Battle of Towton (1461)?', opts:['One of the bloodiest battles in English history, won by the Yorkists','A small skirmish','A naval battle','A battle against France'], c:0, e:'The Battle of Towton (1461) was fought in a snowstorm in Yorkshire. It was one of the bloodiest battles in English history, with possibly 28,000 dead, and secured the throne for Edward IV.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was known as the "Kingmaker" during the Wars of the Roses?', opts:['The Earl of Warwick (Richard Neville)','Henry VII','Edward IV','Richard III'], c:0, e:'Richard Neville, Earl of Warwick, was called the "Kingmaker" because he was so powerful that he helped put both Edward IV and briefly Henry VI on the throne.' },
      { q:'Who were the "Princes in the Tower"?', opts:['Edward V and his brother Richard, who disappeared in the Tower of London in 1483','Two French princes','Richard III\'s sons','Henry VII\'s brothers'], c:0, e:'The Princes in the Tower were the young Edward V (aged 12) and his brother Richard (aged 9), who were placed in the Tower of London by their uncle Richard III in 1483 and were never seen again.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who defeated Richard III at the Battle of Bosworth in 1485?', opts:['Henry Tudor (Henry VII)','Edward IV','The Earl of Warwick','Henry VI'], c:0, e:'Henry Tudor defeated Richard III at the Battle of Bosworth Field on 22 August 1485. Richard III was killed in battle, and Henry became King Henry VII, founding the Tudor dynasty.' },
      { q:'How did Henry VII unite the two rival houses after Bosworth?', opts:['He married Elizabeth of York, uniting Lancaster and York','He executed all Yorkists','He became a monk','He left England'], c:0, e:'Henry VII married Elizabeth of York (daughter of Edward IV) in 1486, uniting the red and white roses. The Tudor rose, combining red and white, symbolised this union.' },
      { q:'What was the Tudor rose?', opts:['A symbol combining the red and white roses to show the union of Lancaster and York','A type of flower','A painting','A castle'], c:0, e:'The Tudor rose combined the red rose of Lancaster with the white rose of York, symbolising Henry VII\'s marriage to Elizabeth of York and the end of the Wars of the Roses.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which king died at the Battle of Bosworth Field?', opts:['Richard III','Henry VII','Edward IV','Henry VI'], c:0, e:'Richard III was the last English king to die in battle, killed at the Battle of Bosworth Field in 1485. His body was recently discovered under a car park in Leicester in 2012.' },
      { q:'What dynasty did Henry VII found?', opts:['The Tudor dynasty','The Stuart dynasty','The Plantagenet dynasty','The Norman dynasty'], c:0, e:'Henry VII founded the Tudor dynasty, which ruled England from 1485 to 1603. Tudor monarchs included Henry VIII, Edward VI, Mary I, and Elizabeth I.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is it difficult for historians to know what happened to the Princes in the Tower?', opts:['There is no definitive evidence — suspects include Richard III, Henry VII, and the Duke of Buckingham','Everyone knows exactly what happened','Richard III confessed','The princes escaped and lived long lives'], c:0, e:'The fate of the Princes remains one of history\'s greatest mysteries. Richard III had motive and opportunity, but so did Henry VII. Bones found in 1674 may be theirs but are inconclusive. The lack of definitive evidence makes this a genuinely unsolved case.' },
      { q:'How did the Wars of the Roses weaken the English nobility?', opts:['Many noble families were killed or ruined, reducing their power and allowing Henry VII to strengthen royal authority','The nobility became stronger','No nobles were affected','Only peasants suffered'], c:0, e:'The wars killed many leading nobles on both sides (over 50 noble families were affected). This destruction of the old nobility allowed Henry VII to reduce noble power, rely on new advisors, and strengthen the Crown\'s authority.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was Henry VII\'s claim to the throne relatively weak, and how did he strengthen it?', opts:['His claim came through his mother\'s line and was distant; he strengthened it through military victory, marriage, and propaganda','He had the strongest claim of anyone','Nobody questioned his right','He inherited it directly from his father'], c:0, e:'Henry VII\'s claim to the throne was weak — it came through his mother Margaret Beaufort\'s descent from John of Gaunt. He strengthened it by winning at Bosworth, marrying Elizabeth of York, and using propaganda like the Tudor rose to legitimise his rule.' },
      { q:'What were the main causes of the Wars of the Roses?', opts:['Weak kingship under Henry VI, rival claims to the throne, powerful nobles competing for influence, and economic problems','Only one cause — rivalry between two families','The Hundred Years War','Bad harvests'], c:0, e:'The wars had multiple causes: Henry VI\'s mental illness and weak rule created a power vacuum; both Lancaster and York had legitimate claims to the throne; powerful nobles like Warwick could kingmake; and defeat in France and economic problems increased instability.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did Henry VII ensure the Tudor dynasty would survive after the instability of the Wars of the Roses?', opts:['He reduced noble power, controlled finances carefully, avoided expensive wars, and eliminated rival claimants','He started another civil war','He gave all power to the barons','He did nothing to secure the dynasty'], c:0, e:'Henry VII learned from the Wars of the Roses: he kept nobles weak by banning private armies, built up the Crown\'s wealth through careful taxation, avoided costly wars, imprisoned or executed rival claimants, and used marriage alliances to secure his position.' },
      { q:'Why do some historians argue the Wars of the Roses have been exaggerated in their impact on ordinary people?', opts:['The fighting mainly involved nobles and their followers; most of England was unaffected and daily life continued','The wars destroyed all of England','Every person in England was involved','Historians agree the wars affected everyone equally'], c:0, e:'While dramatic, the Wars of the Roses mainly involved relatively small armies of nobles and their retainers. Battles were brief and concentrated in specific areas. Most ordinary people continued their daily lives largely unaffected, though economic disruption did occur in areas of fighting.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-57: English Campaigns: Wales & Scotland ──────────────────────
TEST_GENERATORS["island-57"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which English king conquered Wales in 1277-1283?', opts:['Edward I','Henry II','William I','Richard I'], c:0, e:'Edward I launched two military campaigns against Wales in 1277 and 1282-83, defeating the last independent Welsh prince and bringing Wales under English control.' },
      { q:'Who was the last native Prince of Wales?', opts:['Llywelyn ap Gruffudd','Owain Glyndwr','David ap Gruffudd','Rhys ap Thomas'], c:0, e:'Llywelyn ap Gruffudd was the last native-born Prince of Wales. He was killed in 1282 during Edward I\'s conquest of Wales.' },
      { q:'What did Edward I build in Wales to maintain control?', opts:['A ring of massive stone castles','Wooden forts','Churches','Roads only'], c:0, e:'Edward I built a ring of imposing stone castles including Caernarfon, Conwy, Harlech, and Beaumaris to control the conquered Welsh population. They were some of the most advanced castles in Europe.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Name two of Edward I\'s famous castles in Wales.', opts:['Caernarfon and Conwy','London and Windsor','Edinburgh and Stirling','Dover and Canterbury'], c:0, e:'Edward I built several massive castles in Wales including Caernarfon, Conwy, Harlech, and Beaumaris. They were designed by the master architect James of St George.' },
      { q:'Who was William Wallace?', opts:['A Scottish leader who fought against English rule','An English king','A Welsh prince','A French knight'], c:0, e:'William Wallace was a Scottish knight who led resistance against English rule. He won a famous victory at the Battle of Stirling Bridge in 1297 but was later captured and executed.' },
      { q:'What happened at the Battle of Stirling Bridge in 1297?', opts:['William Wallace defeated a larger English army','The English conquered Scotland','The Scots surrendered','It was a draw'], c:0, e:'At the Battle of Stirling Bridge in 1297, William Wallace and Andrew Moray defeated a larger English army by trapping them as they crossed a narrow bridge, a brilliant tactical victory.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was Robert the Bruce?', opts:['The Scottish king who defeated the English at Bannockburn in 1314','An English knight','A Welsh rebel','A French king'], c:0, e:'Robert the Bruce became King of Scotland and led the Scots to a famous victory over Edward II at the Battle of Bannockburn in 1314, securing Scottish independence.' },
      { q:'What happened at the Battle of Bannockburn in 1314?', opts:['The Scots under Robert the Bruce defeated a much larger English army','The English conquered Scotland','The battle was a draw','The Welsh won'], c:0, e:'At the Battle of Bannockburn in 1314, Robert the Bruce\'s Scottish army defeated a much larger English force under Edward II, securing Scottish independence for centuries.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the Declaration of Arbroath (1320)?', opts:['A letter to the Pope asserting Scotland\'s independence from England','A peace treaty between England and Wales','A trade agreement','A declaration of war on France'], c:0, e:'The Declaration of Arbroath (1320) was a letter sent by Scottish nobles to the Pope, asserting Scotland\'s right to be an independent kingdom free from English control.' },
      { q:'Why did Edward I want to conquer Scotland?', opts:['He wanted to bring all of Britain under English control and extend his power','Scotland had attacked England','He wanted Scottish gold','The Pope told him to'], c:0, e:'Edward I aimed to extend English authority over the whole of Britain. He used a Scottish succession dispute as an opportunity to claim overlordship of Scotland and attempted to conquer it.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What happened to William Wallace after he was captured by the English?', opts:['He was executed in London in 1305 by being hanged, drawn, and quartered','He was released','He escaped to France','He became an English lord'], c:0, e:'William Wallace was captured in 1305, taken to London, and executed by being hanged, drawn, and quartered — a brutal punishment for treason. He became a Scottish national hero.' },
      { q:'Which castle is considered Edward I\'s greatest castle in Wales?', opts:['Caernarfon Castle','The Tower of London','Windsor Castle','Warwick Castle'], c:0, e:'Caernarfon Castle is often considered Edward I\'s greatest Welsh castle. Its design, with polygonal towers and banded masonry, was deliberately modelled on the walls of Constantinople to project imperial power.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why were Edward I\'s castles in Wales so effective at controlling the Welsh?', opts:['They were positioned strategically, supplied by sea, and their massive size intimidated the population','They were hidden from view','They were made of wood','They were only decorative'], c:0, e:'Edward\'s castles were military masterpieces: placed at strategic points controlling routes and harbours, supplied by sea so they could withstand sieges, and their enormous size served as a constant visual reminder of English power and the futility of rebellion.' },
      { q:'How did the Welsh and Scots respond differently to English attempts at conquest?', opts:['Wales was eventually conquered and absorbed; Scotland successfully maintained independence through military victories and diplomacy','Both were easily conquered','Neither resisted','Both became part of England immediately'], c:0, e:'Wales was conquered by 1283 and integrated into England with English laws and castles. Scotland, however, maintained independence through military victories (Bannockburn) and diplomatic efforts (Declaration of Arbroath), remaining a separate kingdom.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is the Declaration of Arbroath considered historically significant?', opts:['It expressed the idea that the people, not just the king, had a say in who ruled — an early statement of national sovereignty','It was just a letter to the Pope with no lasting importance','It was a trade agreement','It was written by the English'], c:0, e:'The Declaration of Arbroath is significant because it asserted that kingship depended on serving the people — if the king failed, they could choose another. This idea of popular sovereignty and national self-determination was remarkably advanced for 1320.' },
      { q:'Was Edward I justified in his attempts to conquer Wales and Scotland?', opts:['This is debatable — he claimed legal rights but used extreme military force against independent peoples who resisted','He was completely justified','He had no reasons at all','Everyone agreed he should conquer them'], c:0, e:'Historians debate this. Edward could point to feudal claims and legal disputes, but his methods — massive military campaigns, castle-building programmes, and harsh treatment of captives like Wallace — suggest conquest and domination rather than legitimate authority.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'What can Edward I\'s castles in Wales tell us about medieval power and authority?', opts:['They show that power was projected through architecture — massive buildings designed to intimidate and control conquered peoples','Castles were just places to live','They were built for decoration only','They show the Welsh were happy to be conquered'], c:0, e:'Edward\'s Welsh castles demonstrate that medieval rulers used architecture as a tool of power. Their enormous scale, strategic positioning, and deliberate imperial styling (like Caernarfon\'s Constantinople-inspired design) were designed to project authority and crush resistance through visual domination.' },
      { q:'Why did Scotland succeed in maintaining independence while Wales did not?', opts:['Scotland was larger, further from London, had stronger leadership (Bruce), and English campaigns there were less sustained','Wales was richer','Scotland was closer to London','The Welsh fought harder'], c:0, e:'Several factors helped Scotland: its greater size and distance from London made conquest harder; Robert the Bruce provided strong leadership; the terrain favoured defenders; and after Bannockburn, England lacked the resources to mount sustained campaigns against a determined Scottish resistance.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-58: Medieval Towns, Trade & Economy ──────────────────────────
TEST_GENERATORS["island-58"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a town charter in medieval England?', opts:['A document from the king granting a town special rights and freedoms','A type of building','A religious text','A map of the town'], c:0, e:'A town charter was a legal document granted by the king or a lord that gave a town special privileges such as the right to hold markets, collect taxes, and govern itself.' },
      { q:'What was a burgess in a medieval town?', opts:['A freeman who lived in a town and had the right to trade','A type of knight','A church official','A peasant farmer'], c:0, e:'A burgess was a free citizen of a medieval town who had the right to trade, vote in town affairs, and enjoy the town\'s privileges. They were often merchants or master craftsmen.' },
      { q:'How long was a typical medieval apprenticeship?', opts:['Seven years','One year','Three years','Twelve years'], c:0, e:'A typical medieval apprenticeship lasted seven years. A young person would learn a trade from a master craftsman, living in the master\'s house and working without pay while learning their craft.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was the role of craft guilds in medieval towns?', opts:['They controlled the quality and price of goods and regulated who could practise a trade','They were military organisations','They were religious groups only','They were entertainment groups'], c:0, e:'Craft guilds controlled trade in medieval towns. They set quality standards, fixed prices, regulated who could practise the trade, trained apprentices, and supported members who fell on hard times.' },
      { q:'What was England\'s most important export in the medieval period?', opts:['Wool','Iron','Gold','Spices'], c:0, e:'Wool was England\'s most important export in the medieval period. English wool was highly prized across Europe, particularly in Flanders (modern Belgium) where it was woven into fine cloth.' },
      { q:'What was a medieval fair?', opts:['A large trading event held once or twice a year, attracting merchants from far and wide','A daily market','A type of court','A religious ceremony'], c:0, e:'Medieval fairs were large trading events, often lasting several days, held annually at important towns. They attracted merchants from across Europe and were vital for long-distance trade in goods like wool, wine, and spices.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a merchant guild?', opts:['An organisation of traders that controlled all trade in a town','A group of knights','A type of monastery','A farming cooperative'], c:0, e:'A merchant guild was a powerful association of traders that controlled all buying and selling in a town. They regulated trade, set prices, and protected their members from outside competition.' },
      { q:'What was one major problem with sanitation in medieval towns?', opts:['Waste was thrown into streets and rivers, causing disease and terrible smells','Towns were very clean','There were no problems with waste','Only rich people had sanitation issues'], c:0, e:'Medieval towns had terrible sanitation. Human and animal waste was thrown into streets and rivers, there were no sewers, and overcrowding made disease spread quickly. This contributed to outbreaks like the Black Death.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What was a market town?', opts:['A town with the legal right to hold a regular market for buying and selling goods','Any large city','A town with a castle','A town near the coast'], c:0, e:'A market town was a settlement that had been granted the right (usually by royal charter) to hold a regular market, typically weekly. This was an important privilege that attracted trade and helped the town grow.' },
      { q:'How did medieval towns differ from villages?', opts:['Towns had more people, more trades, and greater freedoms than villages','They were identical','Towns were smaller than villages','Towns had no markets'], c:0, e:'Medieval towns were larger than villages, had diverse trades and crafts rather than just farming, and their inhabitants often had more legal freedoms — including the right to trade and self-govern through town charters.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What stages did someone go through to become a master craftsman?', opts:['Apprentice (7 years), then journeyman, then master','They were born a master','They only needed one year of training','They were appointed by the king'], c:0, e:'To become a master craftsman, a person first served a seven-year apprenticeship, then became a journeyman (working for wages), and finally could apply to become a master by producing a "masterpiece" judged by the guild.' },
      { q:'Why did towns grow during the medieval period?', opts:['Increased trade, growing population, and the demand for goods and services','Towns shrank during this period','Only wars caused towns to grow','Towns were built by the Romans'], c:0, e:'Medieval towns grew due to increasing trade (especially wool), rising population, the granting of town charters, and growing demand for crafts and services that villages could not provide.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the growth of towns help to weaken the feudal system?', opts:['Towns offered peasants freedom from feudal obligations — the saying was "town air makes you free" after a year and a day','Towns had no effect on feudalism','Towns strengthened feudalism','Only kings benefited from towns'], c:0, e:'If a serf could escape to a town and live there for a year and a day, they became legally free. Towns offered an alternative to feudal life, with wages, trade, and personal freedom, gradually undermining the feudal system.' },
      { q:'Why were guilds both beneficial and restrictive for medieval tradespeople?', opts:['They protected quality and supported members, but also prevented competition and innovation','They were entirely beneficial','They were entirely harmful','They had no real effect'], c:0, e:'Guilds provided quality control, training, and social support for members. However, they also restricted competition by limiting who could trade, fixed prices (preventing cheaper alternatives), and resisted new methods, potentially stifling innovation.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the wool trade shape England\'s economy and international relationships in the medieval period?', opts:['Wool exports made England wealthy, created trade links with Flanders, and gave the king a major source of tax revenue','Wool had no economic importance','Only farmers benefited from wool','Wool was only traded within England'], c:0, e:'The wool trade was central to medieval England\'s economy: it made landowners and merchants wealthy, funded the Crown through export taxes, created vital trade links with Flanders and Italy, and influenced foreign policy (the king needed Flemish goodwill for trade).' },
      { q:'What does the state of sanitation in medieval towns reveal about the limits of medieval government?', opts:['That despite charters and guilds, towns lacked the technology and organisation to manage public health effectively','That medieval towns were perfectly clean','That sanitation was not a problem','That only modern cities have health issues'], c:0, e:'Poor sanitation reveals the limits of medieval urban government: despite regulations, towns lacked sewers, clean water supplies, and effective waste removal. This shows that medieval authorities understood the problem but lacked the technology and infrastructure to solve it.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How did the decline of feudalism connect to the growth of towns and trade?', opts:['They were closely linked — towns offered freedom and wages that attracted peasants away from feudal obligations, while trade created a new merchant class','They were completely unrelated','Feudalism strengthened as towns grew','Towns appeared after feudalism ended'], c:0, e:'The growth of towns and trade was both a cause and consequence of feudalism\'s decline. Towns attracted peasants with freedom and wages, the Black Death empowered workers, and a rising merchant class challenged the old feudal hierarchy based on land ownership.' },
      { q:'Why is it difficult for historians to know exactly what life was like in medieval towns?', opts:['Most surviving records were written by the wealthy or the Church, and ordinary townspeople left few written accounts','We have complete records of every medieval town','Historians are not interested in towns','Medieval towns were well documented by everyone'], c:0, e:'Historical evidence about medieval towns is biased towards the literate and powerful. Tax records, guild documents, and chronicles survive, but ordinary people\'s experiences are harder to reconstruct. Archaeological evidence helps but is incomplete.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-59: The Islamic Golden Age ───────────────────────────────────
TEST_GENERATORS["island-59"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Approximately when was the Islamic Golden Age?', opts:['c.750-1258 AD','c.400-600 AD','c.1400-1600 AD','c.100-300 AD'], c:0, e:'The Islamic Golden Age lasted from approximately 750 to 1258 AD, a period of extraordinary scientific, cultural, and intellectual achievement in the Islamic world.' },
      { q:'Which city was the main centre of learning during the Islamic Golden Age?', opts:['Baghdad','London','Rome','Athens'], c:0, e:'Baghdad, capital of the Abbasid Caliphate, was the main centre of learning. Its House of Wisdom attracted scholars from across the world.' },
      { q:'What was the House of Wisdom?', opts:['A major centre of learning and translation in Baghdad','A type of mosque','A palace for the caliph','A market for selling books'], c:0, e:'The House of Wisdom (Bayt al-Hikma) in Baghdad was a major intellectual centre where scholars translated Greek, Persian, and Indian texts into Arabic and made their own groundbreaking discoveries.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Who was Al-Khwarizmi and what is he famous for?', opts:['A mathematician who developed algebra','A famous poet','A military leader','A religious scholar only'], c:0, e:'Al-Khwarizmi (c.780-850) was a mathematician and astronomer. He wrote the book that gave algebra its name and developed methods that are the basis of the word "algorithm".' },
      { q:'Who was Ibn Sina (Avicenna)?', opts:['A physician who wrote the Canon of Medicine, used in Europe for centuries','A poet','A warrior','An architect'], c:0, e:'Ibn Sina (Avicenna, 980-1037) wrote the Canon of Medicine, a medical encyclopaedia that was used as a standard medical textbook in European universities for over 500 years.' },
      { q:'What number system did Islamic scholars help spread to Europe?', opts:['Arabic numerals (0-9), including the concept of zero','Roman numerals','Chinese characters','Egyptian hieroglyphics'], c:0, e:'Islamic scholars adopted the Hindu-Arabic numeral system (0-9) from India and spread it to Europe. The concept of zero was particularly revolutionary and transformed mathematics.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What contribution did Al-Idrisi make?', opts:['He created some of the most accurate maps of the medieval world','He invented the telescope','He discovered America','He built the House of Wisdom'], c:0, e:'Al-Idrisi (1100-1165) was a geographer who created remarkably accurate world maps and wrote a comprehensive geography book, far more advanced than anything produced in medieval Europe at the time.' },
      { q:'What did Islamic scholars contribute to the field of optics?', opts:['They made major advances in understanding how light and vision work','They invented the lightbulb','They had no interest in optics','They only studied astronomy'], c:0, e:'Islamic scholars, particularly Ibn al-Haytham (Alhazen), made major contributions to optics. He correctly explained that vision works by light entering the eye (not rays leaving it) and developed early ideas about the scientific method.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What were hospitals like in the Islamic Golden Age?', opts:['Advanced institutions with separate wards, pharmacies, and trained physicians — far ahead of Europe','They did not exist','They were the same as European hospitals','They only treated rich people'], c:0, e:'Islamic hospitals (bimaristans) were remarkably advanced. They had separate wards for different conditions, pharmacies, trained staff, and treated patients regardless of wealth or religion — far more sophisticated than anything in medieval Europe.' },
      { q:'How did the Islamic world help preserve ancient Greek and Roman knowledge?', opts:['Scholars translated Greek and Roman texts into Arabic, preserving them when they were lost in Europe','They destroyed all Greek texts','They had no interest in Greek knowledge','Greek texts were never lost'], c:0, e:'During the Islamic Golden Age, scholars at the House of Wisdom and elsewhere translated works by Aristotle, Plato, Galen, and others into Arabic. These translations later helped reintroduce classical knowledge to Europe during the Renaissance.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What brought the Islamic Golden Age to an end?', opts:['The Mongol invasion and sack of Baghdad in 1258','A natural disaster','The Crusades alone','A plague'], c:0, e:'The Islamic Golden Age is often considered to have ended with the Mongol invasion. In 1258, the Mongols sacked Baghdad, destroying the House of Wisdom and its library, killing the caliph, and devastating the city.' },
      { q:'In what field did the word "algebra" originate from Islamic scholarship?', opts:['Mathematics','Medicine','Geography','Astronomy'], c:0, e:'The word "algebra" comes from the Arabic word "al-jabr" in the title of Al-Khwarizmi\'s mathematical text. This field of mathematics was significantly advanced by Islamic scholars.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why was the Islamic world more advanced than medieval Europe in science and medicine during this period?', opts:['Islamic culture encouraged learning, translation of ancient texts, and scientific inquiry, while medieval Europe was more focused on religious matters','Europe was more advanced','They were equally advanced','Islamic scholars copied everything from Europe'], c:0, e:'Islamic civilisation valued knowledge-seeking (encouraged by the Quran), invested in institutions like the House of Wisdom, translated and built upon Greek, Persian, and Indian learning, and had wealthy patrons who funded scholarship — while medieval Europe was more focused on religious matters and had fewer centres of learning.' },
      { q:'How did Islamic scholarship influence the European Renaissance?', opts:['Translated Arabic texts reintroduced classical knowledge to Europe and Islamic advances in science, mathematics, and medicine informed European thinkers','It had no influence on Europe','Europe developed independently','Islamic scholars prevented European learning'], c:0, e:'Islamic scholarship was crucial to the Renaissance. Arabic translations of Greek texts were re-translated into Latin, bringing Aristotle, Plato, and others back to Europe. Islamic advances in mathematics (algebra, algorithms), medicine, and optics directly influenced European scholars like Roger Bacon and Copernicus.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'What does the Islamic Golden Age tell us about the conditions needed for intellectual and scientific progress?', opts:['That progress requires political stability, investment in education, openness to different cultures, and willingness to build on others\' knowledge','That only one culture can be advanced at a time','That progress happens by accident','That isolation helps scientific progress'], c:0, e:'The Islamic Golden Age shows that intellectual progress flourishes when there is political stability, wealthy patrons investing in learning, openness to knowledge from different cultures (Greek, Indian, Persian), institutions dedicated to scholarship, and a culture that values inquiry.' },
      { q:'Why might it be important for European students to learn about the Islamic Golden Age?', opts:['To understand that many ideas Europeans take for granted (algebra, algorithms, medical knowledge) originated in or were preserved by Islamic civilisation','It has no relevance to European history','Only Islamic students need to know about it','European civilisation developed independently'], c:0, e:'Learning about the Islamic Golden Age helps students understand that civilisations are interconnected. Many "European" ideas in science, mathematics, and medicine originated in or were transmitted through Islamic scholarship. Understanding this challenges Eurocentric views of history and promotes respect for diverse cultures.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How does comparing medieval Europe with the Islamic world during the same period challenge common assumptions?', opts:['It shows that while Europe was in its "Dark Ages", the Islamic world was experiencing a golden age of learning — challenging the idea that Europe was always the most advanced civilisation','Europe was always more advanced','The comparison is not valid','Both civilisations were identical'], c:0, e:'Comparing the two reveals that during Europe\'s so-called Dark Ages, the Islamic world was far more advanced in science, medicine, and learning. This challenges the Eurocentric assumption that European civilisation has always led the world and shows that different civilisations lead at different times.' },
      { q:'To what extent was the Islamic Golden Age dependent on ideas from other civilisations?', opts:['It built heavily on Greek, Persian, and Indian knowledge but also made original contributions — showing that great civilisations build on others\' work','It was entirely original','It only copied others without adding anything','It had no contact with other civilisations'], c:0, e:'The Islamic Golden Age exemplifies how civilisations build on each other. Scholars translated and preserved Greek philosophy, adopted Indian numerals, and learned from Persian administration — but also made major original contributions in algebra, optics, and medicine. No civilisation advances in isolation.' }
    ];
    return _pickFrom(qs);
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// GEOGRAPHY — island-20 to island-23, island-35 to island-37, island-48 to island-52
// ══════════════════════════════════════════════════════════════════════════

// ── island-20: Map Skills & Navigation ──────────────────────────────────
TEST_GENERATORS["island-20"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How many figures does a six-figure grid reference have?', opts:['Six','Four','Eight','Two'], c:0, e:'A six-figure grid reference has six digits — three for the easting (across) and three for the northing (up). It is more precise than a four-figure grid reference.' },
      { q:'In a grid reference, which direction do you read first?', opts:['Along the corridor (eastings), then up the stairs (northings)','Up first, then along','Northings, then eastings','It does not matter'], c:0, e:'You always read eastings first (along the corridor) and then northings (up the stairs). Remember: "Along the corridor and up the stairs."' },
      { q:'What is a four-figure grid reference used for?', opts:['To identify a specific grid square on a map','To pinpoint an exact location within a square','To measure the height of a hill','To show the direction of north'], c:0, e:'A four-figure grid reference identifies a specific grid square on a map (1km x 1km on a 1:25,000 map). For more precise locations, a six-figure grid reference is used.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What do contour lines on a map show?', opts:['The height and shape of the land (relief)','Rivers and lakes','Roads and paths','Town boundaries'], c:0, e:'Contour lines are brown lines on an OS map that join points of equal height above sea level. They show the shape and steepness of the land (relief).' },
      { q:'When contour lines are close together, what does this indicate?', opts:['A steep slope','A flat area','A valley','A lake'], c:0, e:'Closely spaced contour lines indicate a steep slope because the height changes rapidly over a short horizontal distance. Widely spaced contour lines indicate a gentle slope or flat ground.' },
      { q:'What does the scale 1:25,000 on an OS map mean?', opts:['1 cm on the map represents 25,000 cm (250 m) in real life','1 cm represents 25 km','The map is 25,000 cm wide','There are 25,000 grid squares'], c:0, e:'A scale of 1:25,000 means that 1 cm on the map represents 25,000 cm (or 250 metres) in real life. This is the scale used for OS Explorer maps, ideal for walking.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How many points are there on a standard compass used in geography?', opts:['Eight (N, NE, E, SE, S, SW, W, NW)','Four','Sixteen','Two'], c:0, e:'A standard eight-point compass includes: North, North-East, East, South-East, South, South-West, West, and North-West.' },
      { q:'What is the OS map symbol for a church with a tower?', opts:['A square with a cross on top','A circle','A triangle','A star'], c:0, e:'On an Ordnance Survey map, a church with a tower is shown as a small square with a cross on top. A church with a spire has a different symbol (a circle with a cross).' },
      { q:'What does a blue line on an OS map usually represent?', opts:['A river or stream','A road','A footpath','A railway'], c:0, e:'Blue lines on an Ordnance Survey map represent water features such as rivers, streams, and canals. Blue areas represent lakes, reservoirs, and the sea.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What scale are OS Landranger maps?', opts:['1:50,000','1:25,000','1:10,000','1:100,000'], c:0, e:'OS Landranger maps have a scale of 1:50,000, meaning 1 cm on the map represents 500 metres in real life. They cover larger areas than the more detailed 1:25,000 Explorer maps.' },
      { q:'What is a cross-section in map skills?', opts:['A side view of the landscape showing its height profile along a line','A bird\'s eye view','A map of roads','A type of grid reference'], c:0, e:'A cross-section (or transect) shows the landscape from the side, as if you sliced through the terrain along a line. It is drawn using contour lines to show the height profile of the land.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What does "relief" mean in geography?', opts:['The height and shape of the land','The weather','The population of an area','The type of soil'], c:0, e:'Relief refers to the height and shape of the land surface, including features like hills, valleys, mountains, and plains. It is shown on maps using contour lines.' },
      { q:'Which direction is always at the top of an OS map?', opts:['North','South','East','West'], c:0, e:'North is always at the top of an Ordnance Survey map. Grid lines run north-south and east-west, with grid numbers increasing towards the north and east.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why might a six-figure grid reference be more useful than a four-figure one for an emergency rescue team?', opts:['It pinpoints a location to within 100m rather than a 1km square, making rescue faster and more accurate','It is easier to remember','It looks more professional','There is no difference in accuracy'], c:0, e:'A four-figure grid reference identifies only a 1km x 1km square, while a six-figure reference narrows the location to approximately 100m x 100m. In an emergency, this much greater precision can save critical time in locating a casualty.' },
      { q:'How can you use contour lines to identify different landforms like valleys and spurs?', opts:['V-shaped contours pointing uphill indicate a valley; V-shaped contours pointing downhill indicate a spur','Contour lines cannot show these features','Valleys have no contour lines','Spurs are shown in blue'], c:0, e:'When contour V-shapes point to higher ground, it indicates a valley (water flows down the V). When they point to lower ground, it indicates a spur (a ridge extending from higher ground). Understanding this helps you "read" the 3D landscape from a 2D map.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is understanding map scale important when planning a walk in the countryside?', opts:['It allows you to calculate real distances, estimate walking time, and plan routes accurately','Scale is not important for walking','You can estimate distances by eye','Maps are always the same size'], c:0, e:'Understanding scale is essential for route planning. On a 1:25,000 map, 4 cm = 1 km. Knowing this allows walkers to calculate distances, estimate journey times (typically 4-5 km/hour on flat ground), and plan stops, which is crucial for safety in remote areas.' },
      { q:'What are the limitations of using a map rather than visiting a place in person?', opts:['Maps cannot show everything — they use symbols, are snapshots in time, and cannot convey sounds, smells, or atmosphere','Maps show everything perfectly','Maps are always up to date','There are no limitations'], c:0, e:'Maps are selective representations: they show some features using symbols while omitting others, become outdated as landscapes change, cannot capture the experience of a place, and require the user to interpret symbols and contour patterns — which takes skill.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How might a geographer use both a map and an aerial photograph to study an area?', opts:['A map shows precise measurements and symbols while a photograph shows the real appearance — using both gives a fuller picture','Only maps are useful','Photographs replace maps completely','They show exactly the same information'], c:0, e:'Maps and aerial photos complement each other. Maps provide precise measurements, grid references, and standardised symbols, while photos show the actual appearance of features, land use changes, and details that maps might not include. Together they provide a more complete geographical understanding.' },
      { q:'Why do different map scales exist, and when would you choose each one?', opts:['Different scales serve different purposes: 1:25,000 for detailed walking, 1:50,000 for driving/cycling, smaller scales for regional planning','Only one scale is needed','Bigger scales are always better','Scale does not matter'], c:0, e:'Map scales are chosen based on purpose. 1:25,000 (Explorer) shows field boundaries and individual buildings — ideal for walkers. 1:50,000 (Landranger) covers more area — suitable for cycling and driving. Smaller scales show entire regions or countries for strategic planning.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-21: Weather & Climate ────────────────────────────────────────
TEST_GENERATORS["island-21"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the difference between weather and climate?', opts:['Weather is day-to-day conditions; climate is the average weather over 30+ years','They are the same thing','Climate changes daily','Weather is measured over decades'], c:0, e:'Weather describes short-term atmospheric conditions (today\'s temperature, rainfall). Climate is the average pattern of weather conditions measured over at least 30 years for a particular region.' },
      { q:'Which instrument measures temperature?', opts:['A thermometer','A barometer','An anemometer','A rain gauge'], c:0, e:'A thermometer measures temperature, usually in degrees Celsius (degC) in the UK. Maximum and minimum thermometers record the highest and lowest temperatures in a 24-hour period.' },
      { q:'What does a barometer measure?', opts:['Air (atmospheric) pressure','Wind speed','Rainfall','Temperature'], c:0, e:'A barometer measures atmospheric (air) pressure, recorded in millibars (mb). High pressure usually brings dry, settled weather; low pressure usually brings wet, windy weather.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What instrument is used to measure wind speed?', opts:['An anemometer','A barometer','A thermometer','A rain gauge'], c:0, e:'An anemometer measures wind speed. It typically has cups that spin in the wind — the faster the cups spin, the higher the wind speed, measured in km/h or knots.' },
      { q:'What does a rain gauge measure?', opts:['The amount of rainfall over a period of time','Wind direction','Cloud cover','Temperature'], c:0, e:'A rain gauge measures precipitation (rainfall). It collects rainwater over a set period, and the amount is measured in millimetres (mm). It is placed in an open area, away from buildings.' },
      { q:'What is the prevailing wind direction in the UK?', opts:['South-westerly','North-easterly','Easterly','Northerly'], c:0, e:'The UK\'s prevailing (most common) wind direction is south-westerly. These winds travel across the Atlantic Ocean, picking up moisture and bringing the mild, wet weather typical of the UK.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the North Atlantic Drift?', opts:['A warm ocean current that keeps the UK mild for its latitude','A cold wind from the north','A type of rainfall','A weather instrument'], c:0, e:'The North Atlantic Drift is a warm ocean current that flows from the Gulf of Mexico across the Atlantic to the UK. It keeps the UK significantly warmer than other places at the same latitude, like Labrador in Canada.' },
      { q:'What type of climate does the UK have?', opts:['A temperate maritime climate — mild, wet, and changeable','A tropical climate','A continental climate','An arid climate'], c:0, e:'The UK has a temperate maritime climate. "Temperate" means mild (no extreme heat or cold). "Maritime" means influenced by the sea, bringing mild temperatures and frequent rainfall throughout the year.' },
      { q:'What are the three main types of rainfall?', opts:['Relief (orographic), convectional, and frontal','Rain, snow, and hail','Light, moderate, and heavy','Morning, afternoon, and evening'], c:0, e:'The three main types of rainfall are: relief (orographic) — caused by air rising over mountains; convectional — caused by the sun heating the ground; and frontal — caused by warm and cold air masses meeting.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is an air mass?', opts:['A large body of air with similar temperature and moisture characteristics','A type of cloud','A wind instrument','A measurement of air pollution'], c:0, e:'An air mass is a large body of air that has roughly uniform temperature and humidity throughout. The UK is affected by five main air masses from different directions, each bringing different weather.' },
      { q:'Name the three main cloud types.', opts:['Cumulus, stratus, and cirrus','Rain, snow, and fog','High, medium, and low','White, grey, and black'], c:0, e:'The three main cloud types are: cumulus (fluffy, heaped clouds), stratus (flat, layered clouds that can bring drizzle), and cirrus (high, wispy, ice-crystal clouds that indicate fair weather).' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why does the west of the UK receive more rainfall than the east?', opts:['Prevailing south-westerly winds bring moist air that rises over western mountains, causing relief rainfall','The east has more clouds','Western rivers produce rain','Eastern winds block the rain'], c:0, e:'The prevailing south-westerly winds carry moist air from the Atlantic. When this air hits the mountains of Wales, the Lake District, and Scotland, it is forced upward, cools, and condenses to form rain. The east is in a "rain shadow" and receives less.' },
      { q:'What type of weather does high atmospheric pressure usually bring to the UK?', opts:['Dry, settled, and clear weather','Wet and windy weather','Thunderstorms','Fog only'], c:0, e:'High pressure (an anticyclone) usually brings dry, settled weather. In summer this means hot, sunny days; in winter it can bring cold, clear, frosty weather. Air sinks in high-pressure systems, preventing cloud formation.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How does the UK\'s latitude and position between the Atlantic Ocean and the European continent affect its weather?', opts:['It creates changeable weather because the UK lies where warm maritime air from the Atlantic meets cold continental air from Europe','It makes the weather always the same','It only affects wind speed','The UK is not affected by the Atlantic'], c:0, e:'The UK sits at the boundary between warm, moist Atlantic air masses and cold, dry continental air masses. This position means weather fronts frequently pass over the UK, creating the characteristically changeable weather — rain one day, sunshine the next.' },
      { q:'Why might climate data collected at a weather station in central London differ from a rural station in Norfolk at the same latitude?', opts:['The urban heat island effect makes cities warmer, and buildings affect wind patterns and rainfall','There would be no difference','Rural areas are always warmer','London has more rain because it has more people'], c:0, e:'Cities like London experience the urban heat island effect: buildings and roads absorb and re-radiate heat, raising temperatures 1-3 degC above surrounding countryside. Buildings also create wind tunnels and can affect local rainfall patterns through convection and air pollution.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How might climate change affect the UK\'s weather patterns in the future?', opts:['Predictions include hotter, drier summers, warmer, wetter winters, more extreme weather events, and rising sea levels','The UK\'s weather will stay exactly the same','Climate change only affects tropical countries','Winters will get much colder'], c:0, e:'Climate scientists predict that the UK will experience hotter, drier summers, warmer, wetter winters, more frequent extreme weather events (flooding, heatwaves), and rising sea levels threatening coastal areas. These changes pose significant challenges for agriculture, infrastructure, and public health.' },
      { q:'Why is it important to collect weather data over at least 30 years before making claims about climate?', opts:['Short-term data can be misleading — one hot summer does not prove climate change, and long-term patterns show genuine trends','30 years is just a tradition','One year of data is enough','Climate never changes so data is unnecessary'], c:0, e:'Weather varies naturally from year to year. Collecting data over 30+ years allows scientists to identify genuine long-term trends rather than being misled by short-term variation. This is why one cold winter does not disprove global warming — climate is about long-term averages.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Explain why the west coast of Scotland receives over 3000mm of rain per year while parts of East Anglia receive less than 600mm.', opts:['Prevailing winds bring moist air that rises over western mountains (relief rainfall), but by the time it reaches the east, the air is much drier (rain shadow effect)','East Anglia has no clouds','Scotland is closer to the sea','The east has more mountains'], c:0, e:'Moist south-westerly winds from the Atlantic hit the Scottish Highlands, are forced to rise (orographic uplift), cool, condense, and produce heavy relief rainfall. As the air descends on the eastern side, it warms and dries, creating a rain shadow. East Anglia sits in this rain shadow.' },
      { q:'How do weather forecasts and climate data serve different purposes?', opts:['Weather forecasts help short-term decisions (what to wear today); climate data helps long-term planning (flood defences, building design)','They serve the same purpose','Only weather forecasts are useful','Climate data is never used for planning'], c:0, e:'Weather forecasts are short-term (hours/days) and help daily decisions. Climate data shows long-term patterns and is used for infrastructure planning (building flood defences), agriculture (choosing crops), urban planning (managing heat), and understanding environmental change.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-22: Rivers & Landscapes ──────────────────────────────────────
TEST_GENERATORS["island-22"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the four types of river erosion?', opts:['Hydraulic action, abrasion, attrition, and solution','Flooding, drought, erosion, and deposition','Meander, oxbow, delta, and flood','Upper, middle, lower, and mouth'], c:0, e:'The four types of river erosion are: hydraulic action (force of water), abrasion (rocks scraping the bed/banks), attrition (rocks hitting each other and getting smaller), and solution (rock dissolving in acidic water).' },
      { q:'What is hydraulic action?', opts:['The force of water hitting the river banks and bed, breaking them apart','Rocks scraping the river bed','Rocks hitting each other','Rock dissolving in water'], c:0, e:'Hydraulic action is the sheer force of water hitting against the river banks and bed. The pressure of the water forces air into cracks in the rock, gradually breaking it apart.' },
      { q:'What is abrasion in river erosion?', opts:['Rocks and sediment carried by the river scraping against the bed and banks','The force of water alone','Rocks bumping into each other','Chemicals dissolving rock'], c:0, e:'Abrasion (also called corrasion) occurs when rocks and sediment carried by the river scrape against the bed and banks like sandpaper, wearing them away.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is a meander?', opts:['A bend or curve in a river','A waterfall','A type of lake','A straight section of river'], c:0, e:'A meander is a bend or curve in a river, typically found in the middle and lower course. The water flows faster on the outside of the bend (eroding it) and slower on the inside (depositing sediment).' },
      { q:'How does an oxbow lake form?', opts:['A meander gets cut off from the main river when the neck of the bend is eroded through','A lake forms behind a dam','Rain collects in a hollow','A river floods permanently'], c:0, e:'An oxbow lake forms when erosion narrows the neck of a meander until the river breaks through, taking a shorter, straighter path. The old meander loop is cut off and becomes a horseshoe-shaped oxbow lake.' },
      { q:'What is deposition in a river?', opts:['When a river drops the sediment it is carrying','When a river picks up new rocks','When water evaporates','When a river floods'], c:0, e:'Deposition occurs when a river loses energy (e.g., when it slows down) and can no longer carry its load of sediment. It drops (deposits) the material, building up features like floodplains and deltas.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What shape is a valley in the upper course of a river?', opts:['V-shaped','U-shaped','Flat','Circular'], c:0, e:'In the upper course, the river cuts downward through vertical erosion, creating a steep-sided V-shaped valley. The valley sides are weathered and eroded, contributing to the V-shape.' },
      { q:'How does a waterfall form?', opts:['When a river flows over a band of hard rock above softer rock, the soft rock erodes faster, creating a step','When it rains very heavily','When a dam is built','When the river reaches the sea'], c:0, e:'A waterfall forms where a river flows over a layer of hard rock above softer rock. The softer rock erodes faster (by hydraulic action and abrasion), undercutting the hard rock and creating an overhang that eventually collapses.' },
      { q:'What is a floodplain?', opts:['The flat area of land on either side of a river that floods when the river overflows','A type of mountain','The source of a river','A deep river channel'], c:0, e:'A floodplain is the wide, flat area of land on either side of a river in its lower course. It is formed by repeated flooding, which deposits layers of fertile sediment (alluvium) across the plain.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the three courses of a river?', opts:['Upper course, middle course, and lower course','Beginning, middle, and end','Fast, medium, and slow','Mountain, valley, and plain'], c:0, e:'A river has three courses: the upper course (near the source, steep gradient, V-shaped valley), the middle course (meanders begin, wider valley), and the lower course (near the mouth, wide floodplain, slow-flowing).' },
      { q:'What is attrition?', opts:['When rocks carried by the river bump into each other and break into smaller, rounder pieces','The force of water on banks','Rocks scraping the river bed','Rock dissolving in water'], c:0, e:'Attrition occurs when rocks and pebbles carried by the river collide with each other. Over time, they break into smaller, smoother, rounder pieces. This is why pebbles near the sea tend to be smooth and round.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the four types of river transportation?', opts:['Traction, saltation, suspension, and solution','Carrying, pushing, floating, and sinking','Fast, slow, medium, and stopped','Erosion, deposition, flooding, and drying'], c:0, e:'Rivers transport material in four ways: traction (large rocks rolling along the bed), saltation (pebbles bouncing along the bed), suspension (fine particles carried in the water), and solution (dissolved minerals carried invisibly).' },
      { q:'What is the source of a river?', opts:['The place where a river begins, usually in hills or mountains','Where a river meets the sea','The widest part of a river','A lake in the middle of a river'], c:0, e:'The source is where a river begins. It is usually found in upland areas (hills or mountains) and may be a spring, marsh, or area of rainfall/snowmelt.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why does a river\'s velocity vary across a meander cross-section?', opts:['Water flows fastest on the outside of the bend (deeper, less friction) and slowest on the inside (shallower, more friction)','Water flows at the same speed everywhere','The inside is always faster','Velocity does not change in meanders'], c:0, e:'In a meander, centrifugal force pushes water towards the outer bank, making it deeper with faster flow (causing erosion into a river cliff). The inner bank has shallower, slower water, causing deposition and forming a slip-off slope (point bar).' },
      { q:'How might building on a floodplain increase the risk of flooding?', opts:['Impermeable surfaces (concrete, tarmac) prevent rainwater soaking into the ground, increasing surface runoff into the river','Building reduces flood risk','Concrete absorbs water','Buildings block the rain'], c:0, e:'Building on floodplains replaces permeable soil with impermeable concrete and tarmac. Rainwater cannot infiltrate the ground, so it runs off the surface directly into rivers much faster, increasing peak discharge and flood risk. Urbanisation also removes vegetation that would intercept rainfall.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Compare hard engineering and soft engineering approaches to flood management. Why might soft engineering be more sustainable?', opts:['Hard engineering (dams, walls) is expensive and disrupts nature; soft engineering (flood warnings, afforestation) works with nature and is cheaper long-term','Hard engineering is always better','Soft engineering does not work','There is no difference'], c:0, e:'Hard engineering (flood walls, dams, channel straightening) is expensive, disrupts ecosystems, and may move the flood problem downstream. Soft engineering (planting trees, flood warnings, wetland restoration) works with natural processes, is cheaper, and provides additional environmental benefits — making it more sustainable.' },
      { q:'Why does the character of a river change from source to mouth?', opts:['Gradient decreases, volume increases, and energy shifts from vertical erosion to lateral erosion and deposition','The river stays the same throughout','Only the depth changes','Rivers get smaller towards the mouth'], c:0, e:'From source to mouth: gradient decreases (the land flattens), tributaries add water (volume increases), the channel gets wider and deeper, velocity generally increases despite appearances, and the dominant process shifts from erosion (upper course) to deposition (lower course).' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How can studying river processes help in planning for climate change?', opts:['Understanding erosion, flooding patterns, and river behaviour helps plan for increased rainfall, more extreme floods, and changing landscapes','River processes will not change with climate change','Climate change only affects oceans','Studying rivers is not useful for climate planning'], c:0, e:'Climate change is predicted to bring more intense rainfall events, increasing flood risk and erosion. Understanding river processes helps planners design better flood defences, manage drainage, protect vulnerable communities, and make informed decisions about where and how to build.' },
      { q:'Explain why a waterfall gradually retreats upstream over time.', opts:['The plunge pool undercuts the hard rock overhang, which collapses, moving the waterfall position upstream and creating a gorge','Waterfalls move downstream','They stay in the same place forever','The river pushes the waterfall back'], c:0, e:'Water erodes the soft rock beneath the hard cap rock through hydraulic action and abrasion. This creates an overhang of hard rock and a deep plunge pool. Eventually the unsupported overhang collapses, and the process repeats, causing the waterfall to retreat upstream, leaving a steep gorge behind.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-23: Population & Settlement ──────────────────────────────────
TEST_GENERATORS["island-23"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the formula for population density?', opts:['Total population divided by total area','Total area divided by total population','Birth rate minus death rate','Number of houses times average family size'], c:0, e:'Population density = total population / total area (usually in people per km squared). It tells you how crowded an area is. For example, England has a much higher population density than Scotland.' },
      { q:'What is urbanisation?', opts:['The growth of towns and cities as people move from rural to urban areas','People moving from cities to the countryside','Building more farms','Destroying forests'], c:0, e:'Urbanisation is the process by which an increasing proportion of a country\'s population lives in towns and cities rather than in the countryside. It is driven by rural-to-urban migration.' },
      { q:'What are push factors in migration?', opts:['Reasons that make people want to leave a place (e.g., poverty, lack of jobs, natural disasters)','Reasons that attract people to a new place','Factors that prevent migration','Types of transport'], c:0, e:'Push factors are negative conditions that push people away from where they live, such as poverty, unemployment, war, natural disasters, lack of services, or poor farming land.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are pull factors in migration?', opts:['Reasons that attract people to a new place (e.g., jobs, better services, safety)','Reasons people leave a place','Factors that stop people moving','Things that push people away'], c:0, e:'Pull factors are positive conditions that attract people to a new destination, such as job opportunities, higher wages, better healthcare and education, safety, and a better quality of life.' },
      { q:'What is a settlement hierarchy?', opts:['A ranking of settlements by size and services, from hamlet to city','A list of the oldest towns','A map of all settlements','A type of government'], c:0, e:'A settlement hierarchy ranks settlements by size and the range of services they offer: hamlet (smallest), village, town, city, conurbation (largest). Larger settlements have more services and a bigger sphere of influence.' },
      { q:'What is a census?', opts:['An official count of a country\'s population, usually done every 10 years','A type of map','A weather measurement','A farming method'], c:0, e:'A census is an official survey that counts every person in a country and collects data about age, occupation, housing, and ethnicity. In the UK, a census has been conducted every 10 years since 1801 (except 1941).' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Which factors affect where settlements are located?', opts:['Water supply, flat land, defence, fertile soil, transport links, and resources','Only weather','Only population size','Only the views'], c:0, e:'Settlements historically developed where there was a reliable water supply, flat land for building, good defence positions, fertile soil for farming, natural resources, and good communication/transport links.' },
      { q:'What is rural-to-urban migration?', opts:['The movement of people from the countryside to towns and cities','People moving from cities to farms','International migration','Moving between two cities'], c:0, e:'Rural-to-urban migration is when people move from the countryside (rural areas) to towns and cities (urban areas), usually seeking better jobs, education, healthcare, and opportunities. This is the main driver of urbanisation.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the difference between a village and a town in the settlement hierarchy?', opts:['A town is larger with more services (shops, schools, doctors); a village is smaller with fewer services','They are the same size','Villages are always bigger','Towns have fewer people'], c:0, e:'In the settlement hierarchy, a town is larger than a village and offers more services such as secondary schools, supermarkets, hospitals, and leisure facilities. A village is smaller with basic services like a primary school and perhaps a shop or pub.' },
      { q:'What is meant by "population distribution"?', opts:['How people are spread out across an area — where they live and in what concentrations','The total number of people in a country','How quickly the population is growing','The age of the population'], c:0, e:'Population distribution describes how people are spread across a geographical area. It shows where people are concentrated (densely populated areas) and where few people live (sparsely populated areas).' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why do some areas have high population density while others have low population density?', opts:['Factors like climate, relief, resources, jobs, and transport links make some places more attractive to live','Population density is random','All areas have the same density','Only rich areas have high density'], c:0, e:'Population density is influenced by physical factors (flat land, mild climate, fertile soil, water supply) and human factors (jobs, transport, services, history). London is densely populated because of jobs and services; the Scottish Highlands are sparse because of rugged terrain and limited employment.' },
      { q:'What is a conurbation?', opts:['A large urban area formed when several towns and cities merge together','A single small village','A type of farm','A rural area'], c:0, e:'A conurbation is a very large urban area formed when neighbouring towns and cities expand and merge together. Examples include Greater Manchester, the West Midlands (Birmingham area), and Greater London.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is urbanisation happening fastest in developing countries?', opts:['Rapid industrialisation creates urban jobs while rural poverty and lack of services push people to cities','Developing countries have fewer cities','People prefer rural areas in developing countries','Urbanisation only happens in rich countries'], c:0, e:'Developing countries are experiencing rapid urbanisation because industrialisation creates manufacturing and service jobs in cities (pull), while rural poverty, lack of education and healthcare, and mechanisation of farming (push) drive people to migrate. This mirrors what happened in Europe during the Industrial Revolution.' },
      { q:'What problems can rapid urbanisation cause in developing countries?', opts:['Overcrowding, slum growth, inadequate sanitation, traffic congestion, pollution, and strain on services','No problems at all','Only positive effects','Problems only in the countryside'], c:0, e:'Rapid urbanisation can overwhelm cities: housing shortages lead to slum growth, sanitation and clean water infrastructure cannot keep up, traffic congestion worsens, air and water pollution increases, and services like schools and hospitals become overcrowded.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How might the factors that influence settlement location have changed from medieval times to today?', opts:['Defence and water supply mattered most historically; today transport links, services, and employment are more important','The same factors apply now as in medieval times','Location does not matter anymore','Only climate matters today'], c:0, e:'Medieval settlements prioritised defence (hilltops, river bends), water supply, and fertile farmland. Modern settlements grow based on transport links (motorways, railways), employment opportunities, services (schools, hospitals), and quality of life. Piped water means rivers are less critical for water supply.' },
      { q:'Why might population density data alone give a misleading picture of how people actually live in an area?', opts:['It gives an average that hides variation — a region might have one dense city and vast empty areas, but the average looks moderate','Population density is always accurate','Averages never mislead','Only total population matters'], c:0, e:'Population density is an average that can mask enormous local variations. A county might have a moderate overall density but contain one crowded city and large empty rural areas. Data at different scales (national, regional, local) can tell very different stories about population distribution.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Evaluate whether urbanisation is mainly positive or negative for a country\'s development.', opts:['It is both — cities drive economic growth and innovation, but rapid urbanisation can cause environmental damage, inequality, and health problems','It is entirely positive','It is entirely negative','It has no effect on development'], c:0, e:'Urbanisation has both benefits (concentrated economic activity, innovation, efficient services, cultural diversity) and costs (pollution, congestion, housing shortages, loss of farmland, inequality). Whether it is mainly positive or negative depends on how well it is managed and planned.' },
      { q:'Why is the concept of "counter-urbanisation" important in understanding UK population changes?', opts:['It explains why some people are leaving cities for the countryside, reversing the traditional pattern of rural-to-urban migration','Counter-urbanisation does not happen in the UK','Everyone wants to live in cities','Only retired people leave cities'], c:0, e:'Counter-urbanisation — people moving from cities to rural areas — is significant in the UK because improved transport and remote working allow people to seek cheaper housing and a better quality of life in the countryside while still working, changing the character of rural villages and commuter towns.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-35: Biomes & Climate Zones ───────────────────────────────────
TEST_GENERATORS["island-35"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is a biome?', opts:['A large-scale ecosystem defined by its climate, vegetation, and animal life','A type of weather','A continent','A type of soil'], c:0, e:'A biome is a large-scale ecosystem or community of plants and animals that occupies a major habitat, defined primarily by its climate. Examples include tropical rainforest, hot desert, tundra, and grassland.' },
      { q:'Where are tropical rainforests mainly found?', opts:['Near the Equator between the Tropics of Cancer and Capricorn','Near the North Pole','In deserts','Only in South America'], c:0, e:'Tropical rainforests are found near the Equator (between roughly 23.5 degrees N and 23.5 degrees S) where temperatures are high and rainfall is heavy year-round. Major areas include the Amazon, Congo Basin, and Southeast Asia.' },
      { q:'What is the main characteristic of a hot desert biome?', opts:['Very low rainfall (under 250mm per year) and extreme temperatures','Heavy rainfall all year','Cold temperatures','Thick forests'], c:0, e:'Hot deserts receive very little rainfall (typically under 250mm per year), have extreme temperature ranges (very hot days, cold nights), and sparse vegetation adapted to drought conditions.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the tundra biome?', opts:['A cold, treeless biome found near the Arctic with permafrost and low-growing plants','A hot, dry desert','A tropical forest','A grassland in Africa'], c:0, e:'The tundra is a cold biome found in Arctic regions. It has permafrost (permanently frozen ground), very low temperatures, short growing seasons, and vegetation limited to mosses, lichens, and low shrubs.' },
      { q:'What is the difference between deciduous and coniferous forests?', opts:['Deciduous trees lose their leaves in autumn; coniferous trees are evergreen with needle-like leaves','They are identical','Deciduous trees are always taller','Coniferous trees lose their leaves'], c:0, e:'Deciduous forests contain broadleaf trees (oak, beech, birch) that drop their leaves in autumn to conserve water in winter. Coniferous forests (taiga) contain evergreen trees (pine, spruce, fir) with needle-like leaves adapted to cold climates.' },
      { q:'What is a grassland biome?', opts:['A biome dominated by grasses with few trees, found in areas with moderate rainfall','A forest biome','A desert biome','A coastal biome'], c:0, e:'Grassland biomes are dominated by grasses rather than trees, found in areas with moderate rainfall that is too low to support forests but enough to prevent desert. Examples include the African savanna and North American prairies.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How do cacti adapt to survive in hot desert conditions?', opts:['They store water in thick stems, have spines instead of leaves to reduce water loss, and have long roots','They need lots of rain','They have large leaves','They grow very tall to reach rain clouds'], c:0, e:'Cacti have several adaptations for desert survival: thick fleshy stems store water, spines (instead of leaves) reduce water loss from transpiration, wide shallow roots collect surface water quickly, and waxy coatings reduce evaporation.' },
      { q:'How does latitude affect which biome is found in an area?', opts:['Areas near the Equator (low latitude) are hot with rainforests; areas near the poles (high latitude) are cold with tundra','Latitude has no effect on biomes','The poles are the hottest','The Equator is the coldest'], c:0, e:'Latitude determines how much solar energy an area receives. Near the Equator (0 degrees), intense sunlight creates hot conditions for rainforests. As latitude increases towards the poles, temperatures decrease, creating different biomes: grasslands, deciduous forests, coniferous forests, and finally tundra.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the main causes of tropical deforestation?', opts:['Logging, cattle ranching, farming, mining, and road building','Tsunamis','Volcanic eruptions','Too much rainfall'], c:0, e:'Tropical deforestation is caused mainly by human activities: commercial logging for timber, clearing land for cattle ranching and soya farming, subsistence farming, mining for minerals, and building roads and settlements.' },
      { q:'Name one effect of tropical deforestation.', opts:['Loss of biodiversity, increased carbon dioxide, soil erosion, and disrupted water cycles','More animals','Cooler temperatures','Increased rainfall'], c:0, e:'Deforestation has many negative effects: loss of biodiversity (species extinction), increased atmospheric CO2 (trees no longer absorb it), soil erosion (tree roots no longer hold soil), disrupted water cycles, and loss of indigenous peoples\' homes.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How are animals in the tundra adapted to survive extreme cold?', opts:['Thick fur or blubber for insulation, white camouflage in winter, and hibernation or migration','They are not adapted','They live underground permanently','They only eat fish'], c:0, e:'Tundra animals have adaptations including: thick fur/blubber (polar bears, Arctic foxes) for insulation, white winter coats for camouflage, migration (caribou) to find food, hibernation, and compact body shapes to reduce heat loss.' },
      { q:'What is the main biome found in the UK?', opts:['Temperate deciduous forest','Tropical rainforest','Hot desert','Tundra'], c:0, e:'The UK\'s natural biome is temperate deciduous forest. The mild, wet climate supports broadleaf trees like oak, beech, and ash, though much of the original forest has been cleared for farming and settlement.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why are tropical rainforests sometimes called "the lungs of the Earth", and is this description accurate?', opts:['They absorb CO2 and release O2, but "lungs" is misleading since they also consume O2 and their main climate role is as a carbon store','It is completely accurate','Rainforests produce no oxygen','They are called lungs because of their shape'], c:0, e:'Rainforests absorb vast amounts of CO2 through photosynthesis and release oxygen, earning the "lungs" label. However, this is an oversimplification: mature rainforests consume almost as much O2 through respiration as they produce. Their main climate value is as a carbon store — when destroyed, that stored carbon is released.' },
      { q:'Why is it difficult to solve the problem of tropical deforestation?', opts:['Economic pressures (poverty, demand for resources, national development) conflict with environmental protection','It is easy to solve','Nobody wants to stop it','Only governments can help'], c:0, e:'Deforestation is driven by powerful economic forces: farmers need land for food, governments want development, companies profit from logging and mining, and global demand for beef, soya, and palm oil creates market incentives. Balancing these economic needs with environmental protection requires complex international cooperation.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How do human activities threaten the balance of biomes worldwide?', opts:['Through deforestation, climate change, pollution, and overgrazing, which alter habitats faster than species can adapt','Human activities have no effect on biomes','Biomes cannot be changed','Only natural events affect biomes'], c:0, e:'Human activities are disrupting biomes globally: deforestation destroys habitats, climate change shifts temperature and rainfall patterns faster than species can migrate or adapt, pollution degrades ecosystems, and overgrazing turns grasslands into deserts (desertification). These interconnected threats require global action.' },
      { q:'Compare the strategies needed to sustainably manage a tropical rainforest versus a hot desert. Why do they differ?', opts:['Rainforests need protection from exploitation while deserts need careful water management — different resources face different threats','The same strategy works for both','Neither needs management','Only deserts need management'], c:0, e:'Rainforest management focuses on preventing deforestation (selective logging, national parks, ecotourism) because the main threat is resource extraction. Desert management focuses on preventing desertification and conserving water because scarcity and overuse are the main threats. Different environments require different sustainable approaches.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'To what extent is climate change the biggest threat to global biomes?', opts:['Climate change is a major threat but interacts with other pressures like deforestation and pollution — the combination of threats is most dangerous','Climate change is the only threat','Climate change has no effect on biomes','Only pollution matters'], c:0, e:'Climate change is a serious threat (shifting temperature zones, sea level rise, extreme weather), but it interacts with and amplifies other threats. Deforestation accelerates climate change while climate change stresses remaining forests. The combined effect of multiple pressures — not any single one — is the greatest danger to global biomes.' },
      { q:'Why should people in the UK care about the destruction of tropical rainforests thousands of miles away?', opts:['Because rainforest destruction affects global climate, biodiversity, and medicine — and UK consumption drives some deforestation','It has no effect on the UK','Only tropical countries should care','The UK has no connection to rainforests'], c:0, e:'UK citizens should care because: rainforest destruction accelerates global climate change affecting everyone, many medicines come from rainforest species, biodiversity loss impoverishes the whole planet, and UK demand for products like soya, palm oil, and beef drives some deforestation — making it a shared responsibility.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-36: Restless Earth & Tectonics ───────────────────────────────
TEST_GENERATORS["island-36"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are tectonic plates?', opts:['Large pieces of the Earth\'s crust that float on the mantle and move slowly','Types of rocks','Layers of the atmosphere','Underground rivers'], c:0, e:'Tectonic plates are large rigid sections of the Earth\'s crust (lithosphere) that float on the semi-molten mantle below. They move very slowly (a few centimetres per year) due to convection currents in the mantle.' },
      { q:'What causes tectonic plates to move?', opts:['Convection currents in the mantle driven by heat from the Earth\'s core','Wind on the surface','Ocean waves','The Moon\'s gravity'], c:0, e:'Convection currents in the mantle cause plate movement. Heat from the Earth\'s core causes the semi-molten rock in the mantle to rise, spread sideways, cool, and sink, creating circular currents that drag the plates along.' },
      { q:'What happens at a constructive (divergent) plate boundary?', opts:['Two plates move apart and new crust is formed from rising magma','Two plates collide','Two plates slide past each other','Plates do not move'], c:0, e:'At a constructive boundary, two tectonic plates move apart. Magma rises from the mantle to fill the gap, creating new crust. This can form mid-ocean ridges (like the Mid-Atlantic Ridge) and volcanic activity.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What happens at a destructive (convergent) plate boundary?', opts:['Two plates move towards each other; one is forced under the other (subduction)','Two plates move apart','Plates slide past each other','New crust is created'], c:0, e:'At a destructive boundary, two plates collide. The denser oceanic plate is forced under the lighter continental plate (subduction). The subducting plate melts, creating magma that can erupt as volcanoes. Earthquakes are common.' },
      { q:'What happens at a conservative (transform) plate boundary?', opts:['Two plates slide past each other, causing earthquakes but no volcanic activity','Plates move apart','Plates collide','New crust is formed'], c:0, e:'At a conservative boundary, two plates slide past each other in opposite directions or at different speeds. Friction builds up and is released as earthquakes. No crust is created or destroyed, so there is no volcanic activity.' },
      { q:'What is an earthquake?', opts:['A sudden shaking of the ground caused by the release of energy along a fault line','A volcanic eruption','A type of storm','A flood'], c:0, e:'An earthquake is a sudden violent shaking of the ground caused by the release of stored energy when tectonic plates move. The energy is released as seismic waves that travel through the Earth.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the Richter scale?', opts:['A scale used to measure the magnitude (energy released) of an earthquake','A scale for measuring volcano height','A type of thermometer','A scale for wind speed'], c:0, e:'The Richter scale measures the magnitude (amount of energy released) by an earthquake. It is logarithmic, meaning each whole number increase represents roughly 32 times more energy. A magnitude 7 earthquake releases far more energy than a magnitude 6.' },
      { q:'What is the difference between the focus and epicentre of an earthquake?', opts:['The focus is the point underground where the earthquake starts; the epicentre is the point on the surface directly above it','They are the same thing','The epicentre is underground','The focus is on the surface'], c:0, e:'The focus is the point underground where the earthquake originates (where rocks first fracture). The epicentre is the point on the Earth\'s surface directly above the focus. Damage is usually greatest at the epicentre.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why do volcanoes and earthquakes often occur at plate boundaries?', opts:['Because the forces of plates moving cause pressure, friction, and magma movement at their edges','They happen randomly across the Earth','Only on islands','Only in Europe'], c:0, e:'Most volcanic and earthquake activity occurs at plate boundaries because this is where the forces of plate movement are greatest. Collisions, separations, and friction between plates create the conditions for earthquakes and volcanic eruptions.' },
      { q:'What is a volcano?', opts:['An opening in the Earth\'s crust where magma, gas, and ash escape from below','A type of mountain with snow','A deep valley','An underground lake'], c:0, e:'A volcano is an opening (vent) in the Earth\'s crust through which magma (molten rock), volcanic ash, and gases erupt from the magma chamber below. When magma reaches the surface, it is called lava.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How can people prepare for earthquakes?', opts:['Earthquake-resistant buildings, emergency kits, education, and evacuation drills','There is no way to prepare','Only by building underground','By moving to another country'], c:0, e:'Preparation includes: constructing earthquake-resistant buildings (flexible frames, deep foundations), preparing emergency kits (water, food, first aid), educating people about what to do during an earthquake, conducting regular drills, and having emergency response plans.' },
      { q:'Can scientists accurately predict when an earthquake will happen?', opts:['No — scientists can identify high-risk areas but cannot predict exactly when an earthquake will occur','Yes, they can predict the exact time','They can predict within one hour','Earthquakes follow a regular pattern'], c:0, e:'Despite advances in seismology, scientists cannot accurately predict the exact time, location, and magnitude of earthquakes. They can identify areas at high risk (near plate boundaries) and monitor warning signs, but precise prediction remains impossible.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why do people continue to live in areas at high risk from earthquakes and volcanoes?', opts:['Fertile volcanic soil, geothermal energy, jobs, cultural ties, and lack of alternatives often outweigh the risks','People do not know about the risks','There are no risks in these areas','Governments force them to stay'], c:0, e:'People live near volcanoes and fault lines for many reasons: volcanic soil is extremely fertile for farming, geothermal energy provides cheap power, jobs and community ties bind people to an area, poverty limits options to move, and major events may be rare — so the daily benefits outweigh the occasional risks.' },
      { q:'Why do earthquakes of similar magnitude cause more deaths in developing countries than in developed countries?', opts:['Poorer building standards, less emergency preparedness, weaker infrastructure, and limited healthcare increase vulnerability','The earthquakes are stronger in poor countries','Developing countries have more earthquakes','There is no difference'], c:0, e:'Developing countries suffer more because buildings are often not earthquake-resistant, emergency services are less well-equipped, infrastructure (roads, hospitals) is weaker, early warning systems may not exist, and poverty means less preparedness. Development level is a key factor in earthquake vulnerability.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How does plate tectonics theory explain the distribution of volcanoes and earthquakes around the world?', opts:['They concentrate along plate boundaries in predictable patterns, like the Pacific Ring of Fire, because that is where plates interact','They are randomly distributed','They only occur on continents','Plate tectonics does not explain their distribution'], c:0, e:'Plate tectonics explains why volcanic and earthquake activity is concentrated along plate boundaries. The Pacific Ring of Fire follows destructive boundaries around the Pacific plate. The Mid-Atlantic Ridge follows a constructive boundary. This predictable pattern directly results from plate interactions.' },
      { q:'Evaluate the benefits and risks of living near an active volcano.', opts:['Benefits include fertile soil, geothermal energy, tourism, and minerals; risks include eruptions, lahars, ash clouds, and pyroclastic flows','There are only risks','There are only benefits','Volcanoes have no impact on nearby communities'], c:0, e:'Living near volcanoes offers genuine benefits: highly fertile soil for agriculture, geothermal energy, tourist income, and mineral resources. However, risks include destructive eruptions, pyroclastic flows, lahars (mudflows), ashfall damaging crops and health, and the unpredictability of volcanic activity. The balance depends on the specific volcano and community preparedness.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is the theory of plate tectonics now widely accepted even though it was rejected when first proposed?', opts:['New evidence from sea-floor spreading, fossil distribution, and GPS measurements eventually proved the theory correct','Scientists never changed their minds','It was accepted immediately','There is still no evidence for it'], c:0, e:'When Alfred Wegener proposed continental drift in 1912, it was rejected because he could not explain how continents moved. Later discoveries — sea-floor spreading, magnetic striping on the ocean floor, matching fossils across continents, and GPS measurements of plate movement — provided the evidence needed, and the theory was accepted by the 1960s.' },
      { q:'Compare the effectiveness of earthquake prediction versus earthquake preparation. Which saves more lives?', opts:['Preparation saves far more lives because prediction remains unreliable, while earthquake-resistant buildings and emergency plans have proven effective','Prediction is more effective','Neither saves lives','They are equally effective'], c:0, e:'Earthquake prediction remains unreliable — no scientist can say exactly when and where a quake will strike. In contrast, preparation — earthquake-resistant buildings, early warning systems, emergency drills, and public education — has been proven to save thousands of lives. Japan\'s extensive preparation, for example, greatly reduces casualties.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-37: Africa: Development & Diversity ──────────────────────────
TEST_GENERATORS["island-37"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How many countries are there in Africa?', opts:['54','30','75','100'], c:0, e:'Africa has 54 recognised countries, making it the continent with the second-highest number of countries after Asia. It is the second-largest continent by both area and population.' },
      { q:'What does HDI stand for?', opts:['Human Development Index','High Development Indicator','Housing and Development Index','Health Data Information'], c:0, e:'HDI stands for Human Development Index. It measures a country\'s development using three factors: life expectancy, education (years of schooling), and income per person (GNI per capita).' },
      { q:'What does GDP stand for?', opts:['Gross Domestic Product','General Development Programme','Global Data Percentage','Growth and Development Plan'], c:0, e:'GDP stands for Gross Domestic Product. It is the total value of all goods and services produced in a country in one year. GDP per capita (per person) is used to compare wealth between countries.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is a development indicator?', opts:['A measure used to show how developed a country is (e.g., life expectancy, literacy rate, GDP per capita)','A type of map','A weather measurement','A population count'], c:0, e:'Development indicators are statistics used to measure how developed a country is. They include economic measures (GDP per capita), social measures (life expectancy, literacy rate, access to clean water), and composite measures (HDI).' },
      { q:'What is Fairtrade?', opts:['A system that ensures producers in developing countries receive a fair price for their goods','A type of free trade agreement','A charity that gives food','A trading company'], c:0, e:'Fairtrade is a movement that ensures farmers and workers in developing countries receive a fair minimum price for their products (like coffee, cocoa, bananas), better working conditions, and a premium for community investment.' },
      { q:'What is meant by "bilateral aid"?', opts:['Aid given directly from one country to another','Aid given by charities','Aid given through the United Nations','Aid given by businesses'], c:0, e:'Bilateral aid is government-to-government aid, given directly from one country to another. It can come with conditions (tied aid), such as the requirement to buy goods from the donor country.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is multilateral aid?', opts:['Aid given through international organisations like the United Nations or World Bank','Aid from one country to another','Aid from charities only','Private donations'], c:0, e:'Multilateral aid is money given by governments to international organisations (like the UN, World Bank, or WHO), which then distribute it to countries in need. It is less likely to come with political conditions than bilateral aid.' },
      { q:'How did colonialism affect African countries?', opts:['European powers drew borders ignoring ethnic groups, extracted resources, and left many countries with weak economies','It had no effect','It only helped African countries develop','Africa was never colonised'], c:0, e:'European colonisation (mainly 19th-20th century) had lasting effects: artificial borders divided ethnic groups, economies were structured to export raw materials rather than develop manufacturing, and political systems were disrupted. Many of these effects continue to influence African development.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is tourism leakage?', opts:['When money spent by tourists leaves the country rather than benefiting the local economy','When tourists leave litter','When hotels leak water','When tourists avoid an area'], c:0, e:'Tourism leakage occurs when the money tourists spend does not stay in the local economy. For example, if tourists stay in foreign-owned hotels, eat imported food, or book through foreign companies, much of the revenue goes back to wealthy countries rather than benefiting local people.' },
      { q:'What is sustainable development?', opts:['Development that meets present needs without compromising the ability of future generations to meet their own needs','Building as much as possible','Stopping all development','Only using renewable energy'], c:0, e:'Sustainable development means improving people\'s quality of life now while protecting the environment and resources so that future generations can also meet their needs. It balances economic growth with social well-being and environmental protection.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why is it misleading to describe Africa as a single, uniform continent?', opts:['Africa is incredibly diverse with 54 countries, thousands of languages, varied climates, and different levels of development','All African countries are the same','Africa has only one climate','Africa is a small continent'], c:0, e:'Africa is enormously diverse: it has 54 countries with different cultures, over 2,000 languages, climates ranging from rainforest to desert, and levels of development from very low to upper-middle income. Treating it as a single entity is inaccurate and simplistic.' },
      { q:'What is one economic measure used to compare development between countries?', opts:['GDP per capita (Gross Domestic Product per person)','Temperature','Population density','Land area'], c:0, e:'GDP per capita is a key economic development indicator. It divides the total value of goods and services produced by a country by its population, giving an average income per person that can be compared internationally.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why might GDP per capita be a misleading indicator of development?', opts:['It is an average that hides inequality — a country might have a high GDP per capita but huge gaps between rich and poor','GDP per capita is always accurate','It measures everything about development','It never misleads'], c:0, e:'GDP per capita is an average that can mask extreme inequality: a few very wealthy people can raise the average while most people live in poverty. It also does not measure quality of life factors like education, healthcare, freedom, or environmental sustainability, making it an incomplete picture of development.' },
      { q:'To what extent is foreign aid effective in promoting development in Africa?', opts:['It can help in emergencies and fund infrastructure, but it can also create dependency, corruption, and may come with conditions that benefit the donor','Aid is always effective','Aid never works','Only bilateral aid works'], c:0, e:'Aid is a complex issue: emergency aid saves lives, and development aid can fund schools, hospitals, and infrastructure. However, critics argue that aid can create dependency, fuel corruption, come with conditions that benefit donors (tied aid), and may not address root causes of poverty like unfair trade rules.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How has colonial history contributed to current development challenges in Africa?', opts:['Colonial borders, resource extraction economies, disrupted political systems, and unequal trade patterns created structural problems that persist today','Colonialism had no lasting effects','Africa\'s challenges are entirely modern','Colonial history only affected politics'], c:0, e:'Colonialism created lasting structural challenges: artificial borders divided communities and grouped rival groups, economies were designed for raw material export (not manufacturing), political systems were disrupted, and unequal trade relationships were established — all contributing to ongoing development challenges.' },
      { q:'Why might Fairtrade be more effective than traditional aid in promoting sustainable development?', opts:['Fairtrade empowers producers through fair wages and trade rather than creating dependency — it addresses the cause (unfair trade) rather than the symptom (poverty)','Fairtrade and aid are identical','Fairtrade does not help producers','Aid is always better than trade'], c:0, e:'Fairtrade addresses structural inequality by ensuring producers receive fair prices, improving their self-sufficiency. Unlike aid, which can create dependency, Fairtrade empowers people through commerce. However, Fairtrade reaches only a small proportion of producers and cannot solve all development challenges alone.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Evaluate whether tourism is a good strategy for economic development in African countries.', opts:['Tourism can bring income and jobs but also causes leakage, environmental damage, and cultural disruption — its value depends on how well it is managed','Tourism is always positive','Tourism never helps developing countries','Tourism only benefits hotels'], c:0, e:'Tourism can bring significant income, create jobs, and fund conservation. However, tourism leakage means profits often go to foreign companies, environmental damage (pollution, habitat destruction) can occur, and cultural commodification can be harmful. Success depends on local ownership, sustainable practices, and fair distribution of benefits.' },
      { q:'Why is HDI considered a better measure of development than GDP per capita alone?', opts:['HDI combines income with education and health measures, giving a more rounded picture of people\'s quality of life','HDI only measures income','GDP per capita is always better','HDI and GDP are the same thing'], c:0, e:'HDI combines three dimensions — income (GNI per capita), education (mean and expected years of schooling), and health (life expectancy at birth). This gives a more comprehensive picture than GDP alone because a country could be wealthy but have poor health or education systems. HDI captures quality of life, not just economic output.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-48: Introduction to Geography ────────────────────────────────
TEST_GENERATORS["island-48"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the difference between physical and human geography?', opts:['Physical geography studies natural features (rivers, mountains); human geography studies people and settlements','They are the same thing','Physical geography studies people','Human geography studies weather'], c:0, e:'Physical geography studies the natural world: landforms, rivers, weather, climate, ecosystems. Human geography studies people and their activities: population, settlements, migration, economic activity, and cultural patterns.' },
      { q:'How many continents are there?', opts:['Seven','Five','Six','Eight'], c:0, e:'There are seven continents: Africa, Antarctica, Asia, Australia/Oceania, Europe, North America, and South America. Asia is the largest by both area and population.' },
      { q:'How many oceans are there?', opts:['Five','Three','Four','Seven'], c:0, e:'There are five oceans: the Pacific (largest), Atlantic, Indian, Southern (Antarctic), and Arctic (smallest). Together they cover about 71% of the Earth\'s surface.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the four countries that make up the United Kingdom?', opts:['England, Scotland, Wales, and Northern Ireland','England, Scotland, Ireland, and Wales','England, France, Wales, and Scotland','England, Scotland, Wales, and Cornwall'], c:0, e:'The United Kingdom consists of four countries: England (capital: London), Scotland (capital: Edinburgh), Wales (capital: Cardiff), and Northern Ireland (capital: Belfast).' },
      { q:'What is the capital city of Scotland?', opts:['Edinburgh','Glasgow','Aberdeen','Dundee'], c:0, e:'Edinburgh is the capital city of Scotland. Glasgow is Scotland\'s largest city by population, but Edinburgh is the capital and the seat of the Scottish Parliament.' },
      { q:'What is the capital city of Wales?', opts:['Cardiff','Swansea','Newport','Bangor'], c:0, e:'Cardiff is the capital city of Wales. It is located in the south of Wales and is the largest city in the country.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the Equator?', opts:['An imaginary line around the middle of the Earth at 0 degrees latitude','A line of longitude','The North Pole','A type of weather system'], c:0, e:'The Equator is an imaginary line that circles the Earth at 0 degrees latitude, dividing it into the Northern and Southern Hemispheres. It is the hottest part of the Earth because it receives the most direct sunlight.' },
      { q:'What is latitude?', opts:['Imaginary lines running east-west that measure distance north or south of the Equator','Lines running north-south','The height of mountains','A type of climate'], c:0, e:'Lines of latitude are imaginary horizontal lines that run east-west around the Earth. They measure how far north or south a place is from the Equator (0 degrees). The North Pole is 90 degrees N and the South Pole is 90 degrees S.' },
      { q:'What is longitude?', opts:['Imaginary lines running north-south that measure distance east or west of the Prime Meridian','Lines running east-west','The width of oceans','A type of biome'], c:0, e:'Lines of longitude are imaginary vertical lines that run north-south from pole to pole. They measure how far east or west a place is from the Prime Meridian (0 degrees) at Greenwich, London.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Where is the Tropic of Cancer?', opts:['23.5 degrees N — the most northerly latitude where the sun can be directly overhead','23.5 degrees S','66.5 degrees N','0 degrees'], c:0, e:'The Tropic of Cancer is at 23.5 degrees North latitude. It marks the most northerly point where the sun can be directly overhead (on the summer solstice, around 21 June). It passes through Mexico, North Africa, and India.' },
      { q:'Where is the Tropic of Capricorn?', opts:['23.5 degrees S — the most southerly latitude where the sun can be directly overhead','23.5 degrees N','66.5 degrees S','90 degrees S'], c:0, e:'The Tropic of Capricorn is at 23.5 degrees South latitude. It marks the most southerly point where the sun can be directly overhead (on the December solstice). It passes through South America, southern Africa, and Australia.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the largest continent by area?', opts:['Asia','Africa','North America','Europe'], c:0, e:'Asia is the largest continent by both area (approximately 44.6 million km squared) and population (approximately 4.7 billion people). It includes countries from Turkey and Russia to Japan and Indonesia.' },
      { q:'Which ocean is the largest?', opts:['The Pacific Ocean','The Atlantic Ocean','The Indian Ocean','The Arctic Ocean'], c:0, e:'The Pacific Ocean is the largest ocean, covering approximately 165 million km squared — more than all the land on Earth combined. It stretches from Asia and Australia in the west to the Americas in the east.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is it important to study both physical and human geography together rather than separately?', opts:['Because physical and human geography are interconnected — people affect the environment and the environment affects people','They have nothing to do with each other','Only physical geography matters','Only human geography is useful'], c:0, e:'Physical and human geography are deeply connected. For example, river flooding (physical) affects settlements (human), while deforestation (human) causes soil erosion (physical). Understanding these connections is essential for solving real-world problems like climate change, natural disasters, and sustainable development.' },
      { q:'Why might two places at the same latitude have very different climates?', opts:['Other factors like altitude, ocean currents, distance from the sea, and prevailing winds also affect climate','Latitude determines everything about climate','They would have identical climates','Only longitude matters for climate'], c:0, e:'While latitude is the main factor affecting temperature (through solar angle), other factors modify climate: altitude (higher = colder), ocean currents (warm currents warm nearby coasts), distance from the sea (maritime vs continental), and prevailing winds. This is why London and Moscow are at similar latitudes but have very different winters.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'What does the concept of "scale" mean in geography, and why does it matter?', opts:['Scale means studying things at different levels (local, regional, national, global) — different patterns and issues appear at different scales','Scale only refers to map scale','Scale is not important in geography','It only matters for measuring distances'], c:0, e:'Geographical scale refers to the level at which we study something — from local (your neighbourhood) to global (the whole planet). Different patterns emerge at different scales: a local flood is a local issue, but global warming is a global one. Understanding scale helps geographers connect local actions to global consequences.' },
      { q:'How do the Tropics of Cancer and Capricorn help geographers understand global patterns?', opts:['They define the tropics — the zone receiving the most direct sunlight — which determines climate zones, biomes, and human activity patterns','They are just lines on a map with no significance','They mark where it snows','They separate the oceans'], c:0, e:'The area between the Tropics of Cancer and Capricorn (the tropics) receives the most intense sunlight. This creates the hottest climates, supports tropical biomes (rainforests, deserts), influences agriculture, and affects patterns of human settlement, disease, and development. These lines help explain global geographical patterns.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is the concept of "place" important in geography beyond just knowing where things are on a map?', opts:['Places have unique identities shaped by physical features, history, culture, and people\'s perceptions — understanding place helps explain why different areas are the way they are','Place just means location','Geography is only about maps','Places are all the same'], c:0, e:'In geography, "place" goes beyond location to include what makes somewhere unique: its physical landscape, climate, history, culture, economy, and how people perceive it. Understanding place helps explain why areas differ, how people relate to their environment, and why some places change while others do not.' },
      { q:'How might studying geography help solve real-world problems?', opts:['Geography connects physical and human understanding, helping address challenges like climate change, natural disasters, inequality, and urban planning','Geography is only about memorising capitals','It cannot solve any problems','Only science can solve real-world problems'], c:0, e:'Geography uniquely connects physical and human understanding. Geographers study climate change (physical processes + human causes), plan cities (population + land use), manage flood risk (rivers + settlement), and analyse inequality (development + trade). This integrated approach is essential for tackling complex, interconnected global challenges.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-49: UK Geography: Exploring Britain ──────────────────────────
TEST_GENERATORS["island-49"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the Pennines?', opts:['A chain of hills and mountains running down the centre of northern England, often called the "backbone of England"','A river in Scotland','A city in Wales','An island off the coast'], c:0, e:'The Pennines are a chain of hills and mountains stretching from the Peak District in the Midlands to the Scottish border. They are often called the "backbone of England" because they run down the centre of the country.' },
      { q:'What is the longest river in the UK?', opts:['The River Severn','The River Thames','The River Trent','The River Mersey'], c:0, e:'The River Severn is the longest river in the UK at 354 km. It flows from its source in the Cambrian Mountains of Wales through Shrewsbury, Worcester, and Gloucester before entering the Bristol Channel.' },
      { q:'Which river flows through London?', opts:['The River Thames','The River Severn','The River Tyne','The River Mersey'], c:0, e:'The River Thames flows through London. It is 346 km long and is the second-longest river in the UK. It has been central to London\'s development as a trading city for centuries.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Where is the Lake District?', opts:['In Cumbria, north-west England','In Scotland','In Wales','In south-east England'], c:0, e:'The Lake District is in Cumbria, north-west England. It is a mountainous area famous for its lakes, valleys, and peaks, including Scafell Pike (the highest mountain in England at 978m). It became a National Park in 1951.' },
      { q:'What is a National Park?', opts:['An area of countryside protected for its natural beauty, wildlife, and cultural heritage','A park in a city','A theme park','A car park run by the government'], c:0, e:'A National Park is an area of the countryside that is protected by law because of its outstanding natural beauty, wildlife, and cultural heritage. The UK has 15 National Parks, including the Lake District, Snowdonia, and the Peak District.' },
      { q:'What is the North-South divide in the UK?', opts:['The economic and social differences between the wealthier south-east and the less prosperous north','A physical divide created by a wall','A river dividing England in half','A political boundary'], c:0, e:'The North-South divide refers to the economic and social differences between the generally wealthier and more prosperous south-east of England and the relatively less prosperous north. Southern areas tend to have higher wages, house prices, and life expectancy.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the highest mountain in the UK?', opts:['Ben Nevis in Scotland (1,345m)','Scafell Pike in England','Snowdon in Wales','Pen y Fan in Wales'], c:0, e:'Ben Nevis in the Scottish Highlands is the highest mountain in the UK at 1,345 metres. Scafell Pike (978m) is the highest in England and Snowdon (1,085m) is the highest in Wales.' },
      { q:'What type of landscape is found in the Scottish Highlands?', opts:['Rugged mountains, deep valleys (glens), and lakes (lochs)','Flat farmland','Sandy deserts','Dense tropical forest'], c:0, e:'The Scottish Highlands have a rugged landscape of mountains, deep U-shaped valleys (glens), and lakes (lochs). The area is sparsely populated due to its remote and mountainous terrain.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the Lowlands of Scotland?', opts:['The flatter, more fertile area between the Highlands and the Southern Uplands, containing most of Scotland\'s cities','Mountains in southern Scotland','Islands off the coast','Desert regions'], c:0, e:'The Scottish Lowlands (Central Lowlands) lie between the Highlands and the Southern Uplands. This flatter, more fertile area contains most of Scotland\'s population and its major cities, including Edinburgh and Glasgow.' },
      { q:'What is the River Trent known for?', opts:['It is the third-longest river in the UK and flows through the English Midlands','It is in Scotland','It is the shortest river','It flows through London'], c:0, e:'The River Trent is the third-longest river in the UK at 298 km. It flows through the Midlands (Stoke-on-Trent, Nottingham) and is important for industry, agriculture, and wildlife habitat.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What type of coastline does the UK have?', opts:['A diverse coastline with cliffs, beaches, estuaries, and spits — over 31,000 km long','A completely flat coastline','No coastline','Only rocky cliffs'], c:0, e:'The UK has an incredibly diverse coastline stretching over 31,000 km. It includes chalk cliffs (Dover), sandy beaches (Cornwall, Norfolk), rocky shores (Scotland), estuaries (Thames, Severn), sand dunes, and coastal spits.' },
      { q:'Name two major cities in northern England.', opts:['Manchester and Leeds','London and Brighton','Cardiff and Swansea','Edinburgh and Glasgow'], c:0, e:'Major cities in northern England include Manchester, Leeds, Liverpool, Newcastle, Sheffield, and Bradford. These cities grew during the Industrial Revolution and remain important economic and cultural centres.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why does the North-South divide exist in the UK, and what are its causes?', opts:['Historical industrialisation in the north declined while the south\'s service economy grew; government spending and investment also favoured the south-east','It is caused by weather differences','It does not really exist','It is only about house prices'], c:0, e:'The North-South divide has deep historical roots: northern cities thrived during industrialisation but declined as manufacturing moved overseas. The south-east benefits from London\'s global financial centre, government investment, transport links, and service-sector growth. Regional inequality in wages, health, education, and life expectancy persists.' },
      { q:'How have the UK\'s physical landscapes influenced patterns of settlement and economic activity?', opts:['Flat, fertile lowlands attracted farming and cities; mountainous uplands remained sparsely populated with pastoral farming and tourism','Physical geography has no effect on settlement','Mountains attracted more people','All of the UK is flat'], c:0, e:'The UK\'s physical geography strongly influenced settlement patterns. Flat, fertile lowlands (South-East, Midlands) attracted dense settlement and arable farming. Upland areas (Highlands, Pennines, Lake District) remain sparsely populated due to poor soil, harsh weather, and difficult terrain — though tourism and pastoral farming provide livelihoods.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How have National Parks in the UK created conflicts between conservation and economic development?', opts:['Protecting landscapes can restrict farming, housing, and industry, creating tension between conservation and the needs of local communities','There are no conflicts','National Parks prevent all economic activity','Only tourists cause problems'], c:0, e:'National Parks must balance conservation with the needs of people who live and work in them. Restrictions on building and development can limit housing and employment opportunities, farmers may be constrained in land use, and tourism can cause erosion, traffic congestion, and litter while also providing vital income for local businesses.' },
      { q:'Why is the UK\'s coastline both an economic asset and a vulnerability?', opts:['Coasts support tourism, ports, and fishing but are threatened by erosion, flooding, and sea level rise from climate change','The coastline has no economic value','Coasts are only vulnerable, never an asset','Climate change does not affect UK coasts'], c:0, e:'The UK coastline supports major economic activities: tourism (seaside resorts), ports and shipping (London, Southampton, Felixstowe), fishing, and energy (offshore wind). However, it is vulnerable to coastal erosion, storm surges, flooding, and rising sea levels due to climate change — requiring expensive coastal management.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'To what extent should the UK government try to reduce the North-South divide?', opts:['Arguments exist on both sides: reducing inequality is fair and efficient, but concentrating investment in London generates wealth for the whole country','The divide should not be addressed','Only the south matters','The north does not need investment'], c:0, e:'Reducing the divide promotes fairness and taps into underused potential in northern cities. Investment in transport (HS2), devolution, and the "levelling up" agenda aim to rebalance the economy. However, some argue London\'s global role benefits the whole UK, and spreading investment too thinly could reduce overall competitiveness.' },
      { q:'How does studying the geography of the UK help us understand issues like flooding, housing, and inequality?', opts:['Physical geography explains flood risk, land use affects housing supply, and regional economic differences create inequality — geography connects these issues','Geography has nothing to do with these issues','Only economists study inequality','Flooding is not a geographical issue'], c:0, e:'Geography uniquely connects these issues: understanding river systems and floodplains explains flood risk, land use patterns affect where housing can be built, physical landscapes influence regional economies, and the spatial distribution of wealth and services creates inequality. Geographical thinking helps plan solutions that account for these interconnections.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-50: Rocks, Weathering & Soils ────────────────────────────────
TEST_GENERATORS["island-50"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are the three main types of rock?', opts:['Igneous, sedimentary, and metamorphic','Hard, soft, and medium','Large, small, and tiny','Volcanic, river, and mountain'], c:0, e:'The three main rock types are: igneous (formed from cooled magma/lava), sedimentary (formed from layers of compressed sediment), and metamorphic (formed when existing rocks are changed by heat and pressure).' },
      { q:'How are igneous rocks formed?', opts:['When magma or lava cools and solidifies','When layers of sediment are compressed','When rocks are changed by heat and pressure','When rocks are eroded by water'], c:0, e:'Igneous rocks form when hot molten rock (magma underground or lava on the surface) cools and solidifies. Examples include granite (cooled slowly underground, large crystals) and basalt (cooled quickly on the surface, small crystals).' },
      { q:'How are sedimentary rocks formed?', opts:['When layers of sediment are deposited, compressed, and cemented together over millions of years','When lava cools','When rocks are heated','When ice melts'], c:0, e:'Sedimentary rocks form when layers of sediment (sand, mud, shells, remains of organisms) are deposited on top of each other. Over millions of years, the weight of upper layers compresses and cements them into rock. Examples include sandstone, limestone, and chalk.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How are metamorphic rocks formed?', opts:['When existing rocks are changed by extreme heat and/or pressure','When lava cools on the surface','When sediment builds up','When rocks dissolve in water'], c:0, e:'Metamorphic rocks form when existing rocks (igneous or sedimentary) are transformed by extreme heat and/or pressure without melting. Examples: limestone becomes marble, mudstone/shale becomes slate.' },
      { q:'What is the rock cycle?', opts:['The continuous process by which rocks are created, changed, and recycled between the three rock types','A type of bicycle made from rock','A circle of rocks','A geological period'], c:0, e:'The rock cycle is the ongoing process by which rocks change from one type to another over millions of years. For example, igneous rock can be weathered into sediment, compressed into sedimentary rock, then transformed by heat into metamorphic rock, then melted into magma that forms new igneous rock.' },
      { q:'Give an example of a sedimentary rock.', opts:['Limestone','Granite','Marble','Basalt'], c:0, e:'Limestone is a sedimentary rock formed from the compressed shells and skeletons of marine organisms. Other examples include sandstone (from compressed sand), chalk, and mudstone.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is freeze-thaw weathering?', opts:['Water enters cracks in rock, freezes and expands, widening the crack until pieces break off','Wind blowing sand against rock','Acid rain dissolving rock','Plant roots growing into rock'], c:0, e:'Freeze-thaw weathering occurs when water enters cracks in rock, freezes overnight (expanding by 9%), puts pressure on the rock, and then thaws during the day. Repeated cycles gradually widen the crack until pieces of rock break off.' },
      { q:'What is chemical weathering?', opts:['When rainwater (slightly acidic) reacts with minerals in rock, dissolving or weakening it','When ice breaks rock apart','When wind erodes rock','When animals dig into rock'], c:0, e:'Chemical weathering occurs when slightly acidic rainwater (containing dissolved CO2) reacts chemically with minerals in rock, dissolving or weakening them. Acid rain (from pollution) accelerates this process, particularly affecting limestone and marble buildings.' },
      { q:'What is biological weathering?', opts:['When plant roots, burrowing animals, or organisms break down rock','When chemicals dissolve rock','When ice freezes in cracks','When wind blows away rock'], c:0, e:'Biological weathering occurs when living things break down rock. Plant roots grow into cracks and widen them as they grow, burrowing animals disturb rock, and organisms like lichens produce acids that slowly dissolve rock surfaces.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What type of rock is granite?', opts:['Igneous','Sedimentary','Metamorphic','Mineral'], c:0, e:'Granite is an intrusive igneous rock formed when magma cooled slowly deep underground. It has large crystals (because it cooled slowly), is very hard and durable, and is often used in construction.' },
      { q:'What type of rock is marble?', opts:['Metamorphic','Igneous','Sedimentary','Volcanic'], c:0, e:'Marble is a metamorphic rock formed when limestone is subjected to extreme heat and pressure. It has a crystalline texture and is prized for sculpture and building because of its beauty when polished.' },
      { q:'What type of rock is slate?', opts:['Metamorphic','Igneous','Sedimentary','Mineral'], c:0, e:'Slate is a metamorphic rock formed from mudstone or shale that has been compressed by heat and pressure. It splits easily into thin, flat sheets and has traditionally been used for roof tiles.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How is soil formed?', opts:['From the weathering of rock mixed with decomposed organic matter (humus) over thousands of years','Instantly by volcanic eruptions','From water only','By human construction'], c:0, e:'Soil forms very slowly over thousands of years as rocks are weathered into small particles. These mineral particles mix with decomposed organic matter (humus from dead plants and animals), water, and air to create soil.' },
      { q:'What is basalt?', opts:['An extrusive igneous rock formed when lava cools quickly on the Earth\'s surface','A sedimentary rock','A metamorphic rock','A type of soil'], c:0, e:'Basalt is an extrusive igneous rock formed when lava erupts onto the Earth\'s surface and cools quickly. It has small crystals (because it cooled rapidly), is dark-coloured, and forms features like the Giant\'s Causeway in Northern Ireland.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why does granite have larger crystals than basalt even though both are igneous rocks?', opts:['Granite cooled slowly underground giving crystals time to grow; basalt cooled quickly on the surface so crystals stayed small','Granite is older','Basalt is made from different chemicals','Crystal size is random'], c:0, e:'The key factor is cooling rate. Granite (intrusive) formed deep underground where magma cooled very slowly over thousands of years, allowing large crystals to develop. Basalt (extrusive) formed on the surface where lava cooled rapidly, only allowing tiny crystals to form. Same process, different conditions, different results.' },
      { q:'How does the type of underlying rock affect the landscape and human activity in an area?', opts:['Rock type determines landforms, soil fertility, water drainage, building materials, and even settlement patterns','Rock type has no effect on landscape','Only climate affects landscape','Rocks do not affect human activity'], c:0, e:'Rock type profoundly affects geography: limestone creates karst landscapes (caves, gorges) with well-drained soils; clay creates flat, poorly drained lowlands; granite creates upland moors. This influences farming (soil fertility), water supply (permeability), building materials (local stone), and where people settle.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is the rock cycle described as a "cycle" even though individual processes take millions of years?', opts:['Because materials are continuously recycled between rock types — no rock is permanent, and the same atoms can appear in different rock types over geological time','Rocks never change','The cycle happens quickly','It is not really a cycle'], c:0, e:'The rock cycle is a cycle because rock materials are endlessly recycled. Today\'s mountain granite will eventually be weathered into sediment, compressed into sandstone, perhaps metamorphosed into quartzite, then melted and reformed. No rock type is permanent — they all transform over geological time spans.' },
      { q:'How might different types of weathering work together to break down rock more effectively?', opts:['They often work in combination — freeze-thaw creates cracks that chemical weathering widens, while biological weathering adds to both processes','Only one type acts at a time','They cancel each other out','Weathering types never interact'], c:0, e:'Weathering types reinforce each other. Freeze-thaw creates initial cracks, chemical weathering (acid rain) dissolves minerals and widens those cracks, plant roots (biological) grow into the gaps and force them wider, and water penetrating deeper cracks enables further freeze-thaw. The combined effect is far greater than any single process.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why is understanding rocks and weathering important for construction and engineering?', opts:['Engineers need to know rock strength, weathering rates, and soil properties to build safe structures — choosing the wrong rock or location can be dangerous','Rocks are not important for building','All rocks are equally strong','Weathering does not affect buildings'], c:0, e:'Engineers must understand geology: building on clay (which swells when wet) requires different foundations than building on granite. Limestone buildings are vulnerable to acid rain. Road cuttings through unstable rock can cause landslides. Understanding weathering processes helps predict how materials and landscapes will change over time.' },
      { q:'How does human activity accelerate weathering processes?', opts:['Pollution increases acid rain (chemical weathering), construction exposes rock to freeze-thaw, and removal of vegetation allows roots to stop binding soil','Human activity has no effect on weathering','Only natural processes cause weathering','Humans slow down weathering'], c:0, e:'Human activity accelerates weathering in several ways: burning fossil fuels creates acid rain that speeds chemical weathering of buildings and rocks, construction and quarrying expose fresh rock surfaces to freeze-thaw, deforestation removes roots that bind soil, and changes to drainage patterns can increase water penetration into cracks.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-51: Geographical Skills & Fieldwork ──────────────────────────
TEST_GENERATORS["island-51"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What does GIS stand for?', opts:['Geographical Information Systems','General Information Science','Global Internet Services','Geographical Internet Systems'], c:0, e:'GIS stands for Geographical Information Systems. It is computer software that stores, analyses, and displays geographical data in layers, allowing geographers to see patterns and make decisions.' },
      { q:'What is a choropleth map?', opts:['A map that uses different shades of colour to show variations in data across areas','A map showing roads','A physical relief map','A weather map'], c:0, e:'A choropleth map uses different colours or shades to represent different values of data across geographical areas. For example, darker shades might show higher population density. They are useful for showing spatial patterns.' },
      { q:'What is the difference between mean, median, and mode?', opts:['Mean is the average, median is the middle value, mode is the most common value','They are all the same','Mean is the highest value','Median is the lowest value'], c:0, e:'Mean = sum of all values divided by the number of values (the average). Median = the middle value when data is arranged in order. Mode = the most frequently occurring value. Each measure of central tendency tells us different things about the data.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is the range in a set of data?', opts:['The difference between the highest and lowest values','The most common value','The middle value','The average'], c:0, e:'The range is calculated by subtracting the smallest value from the largest value in a data set. It tells you how spread out the data is. A large range means the data is widely spread; a small range means it is clustered.' },
      { q:'When would you use a bar chart to present geographical data?', opts:['When comparing discrete categories of data (e.g., land use types, favourite subjects)','When showing change over time','When showing parts of a whole','When showing correlation between two variables'], c:0, e:'Bar charts are ideal for comparing discrete (separate) categories of data, such as the number of shops of different types in a town, or rainfall totals for different months. Each bar represents a separate category.' },
      { q:'When would you use a line graph to present geographical data?', opts:['When showing how data changes continuously over time (e.g., temperature over a year)','When comparing categories','When showing parts of a whole','When showing data on a map'], c:0, e:'Line graphs are best for showing continuous data that changes over time, such as temperature changes during a day, river discharge over a year, or population growth over decades. The line connecting points shows the trend.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is a pie chart used for in geography?', opts:['Showing proportions or percentages of a whole (e.g., land use breakdown in an area)','Showing change over time','Comparing two sets of data','Showing location on a map'], c:0, e:'Pie charts show how a total is divided into proportions. Each slice represents a percentage of the whole. They are useful in geography for showing things like land use breakdown, employment types, or energy sources.' },
      { q:'What is random sampling in fieldwork?', opts:['Selecting data collection points by chance (e.g., using random numbers) to avoid bias','Choosing the most convenient locations','Only collecting data from one place','Asking people to volunteer'], c:0, e:'Random sampling means selecting sample points by chance (e.g., using random number generators to choose grid references). This avoids bias because every location has an equal chance of being selected, making the results more representative and reliable.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'Why is it important to present data using appropriate graphs and charts?', opts:['The right type of graph helps communicate patterns clearly; the wrong type can be misleading','It does not matter which graph you use','Only tables should be used','Graphs are not useful in geography'], c:0, e:'Choosing the right graph is essential for clear communication. Bar charts compare categories, line graphs show trends over time, pie charts show proportions, and scatter graphs show relationships. Using the wrong type can obscure patterns or mislead the reader.' },
      { q:'What is a questionnaire used for in geographical fieldwork?', opts:['To collect people\'s opinions, experiences, or data through structured questions','To measure wind speed','To draw maps','To measure rainfall'], c:0, e:'Questionnaires are used in human geography fieldwork to collect primary data from people. They can gather opinions (about a new shopping centre), behaviours (how people travel to work), or factual information (age, occupation) through structured questions.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is primary data in geographical fieldwork?', opts:['Data you collect yourself first-hand in the field','Data from books or the internet','Data collected by someone else','Government statistics'], c:0, e:'Primary data is information collected first-hand by the researcher through fieldwork. Examples include temperature readings, pedestrian counts, river measurements, questionnaire responses, and field sketches.' },
      { q:'What is secondary data?', opts:['Data collected by someone else that you use in your study (e.g., census data, maps, online statistics)','Data you collect yourself','Data from experiments','Data that is always unreliable'], c:0, e:'Secondary data is information that was collected by someone else for a different purpose. Examples include census data, Ordnance Survey maps, satellite images, climate records, and published statistics. It is useful for comparison and background research.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why might a geographer use both primary and secondary data in a fieldwork investigation?', opts:['Primary data gives specific, current information about the study area while secondary data provides context, comparison, and background — together they give a fuller picture','Only one type is ever needed','Secondary data is always better','Primary data is not reliable'], c:0, e:'Using both types strengthens an investigation. Primary data (e.g., your own river measurements) is specific to your study but limited in time and scope. Secondary data (e.g., Environment Agency records) provides long-term context and comparison. Together, they allow deeper analysis and more valid conclusions.' },
      { q:'How might sampling method affect the reliability of geographical fieldwork conclusions?', opts:['Biased sampling (e.g., only asking friends, only measuring easy locations) can produce unrepresentative data and lead to wrong conclusions','Sampling method does not matter','All sampling methods give the same results','Only random sampling works'], c:0, e:'Sampling method is crucial for reliability. Random sampling reduces bias but may miss key features. Systematic sampling (regular intervals) ensures good coverage but may miss patterns. Stratified sampling targets specific areas. Convenience sampling is easy but biased. The wrong method can produce misleading data and invalid conclusions.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'What are the limitations of using GIS compared to traditional fieldwork?', opts:['GIS is excellent for analysing large datasets and spotting patterns but cannot capture the experience, atmosphere, or unexpected findings of being in the field','GIS has no limitations','GIS replaces all fieldwork','Fieldwork is always better than GIS'], c:0, e:'GIS is powerful for storing, analysing, and visualising large geographical datasets and identifying spatial patterns. However, it relies on existing data (which may be outdated or incomplete), cannot capture qualitative information (sounds, smells, atmosphere), and may miss unexpected findings that alert fieldworkers notice. Both approaches complement each other.' },
      { q:'Why is it important to evaluate the reliability and accuracy of your data after completing fieldwork?', opts:['Because errors in measurement, sampling bias, small sample sizes, and weather conditions can all affect how valid your conclusions are','Data is always perfectly accurate','Evaluation is not necessary','Only teachers evaluate data'], c:0, e:'Data evaluation is essential because fieldwork always has limitations: equipment errors, human measurement mistakes, weather affecting results, small sample sizes reducing representativeness, and sampling bias. Acknowledging these limitations makes conclusions more honest and scientifically rigorous, and suggests how the investigation could be improved.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'How can geographical data be misleading, and what skills do you need to critically evaluate it?', opts:['Graphs can use misleading scales, averages can hide extremes, maps can distort patterns, and correlation does not prove causation — critical thinking is essential','Data never misleads','Only wrong data misleads','You cannot evaluate data'], c:0, e:'Geographical data can mislead in many ways: truncated axes on graphs exaggerate trends, averages hide extremes, choropleth maps can show different patterns depending on boundary choices, and finding a correlation between two variables does not mean one causes the other. Critical geographical thinking means questioning sources, methods, and interpretations.' },
      { q:'Design a simple fieldwork investigation to test whether environmental quality changes with distance from a city centre.', opts:['Use an Environmental Quality Index (EQI) scored at regular intervals along a transect from city centre to suburbs, with systematic sampling','Just ask people what they think','Take one measurement in the centre','Only use secondary data'], c:0, e:'A good investigation would: create an EQI scoring factors like litter, noise, green space, air quality, and building condition; sample systematically at regular intervals (every 500m) along a transect from centre to suburbs; repeat at multiple transects to check reliability; and present results as a line graph showing how EQI changes with distance.' }
    ];
    return _pickFrom(qs);
  }}
];

// ── island-52: Globalisation & the UK's Global Connections ──────────────
TEST_GENERATORS["island-52"] = [
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is globalisation?', opts:['The increasing interconnection and interdependence of countries through trade, communication, and cultural exchange','A type of government','A weather pattern','A geographical feature'], c:0, e:'Globalisation is the process by which the world is becoming increasingly interconnected through trade, technology, communication, travel, and cultural exchange. It means events in one part of the world can quickly affect people everywhere.' },
      { q:'What is a TNC (Transnational Corporation)?', opts:['A large company that operates in more than one country','A local business','A government department','A charity'], c:0, e:'A Transnational Corporation (TNC) is a large company that operates in multiple countries, typically with headquarters in one country and factories, offices, or stores in many others. Examples include Apple, Nike, and Unilever.' },
      { q:'What are food miles?', opts:['The distance food travels from where it is produced to where it is consumed','The number of miles you walk to buy food','A type of measurement','The weight of food in miles'], c:0, e:'Food miles measure the distance food travels from where it is produced to where it is consumed. For example, green beans flown from Kenya to UK supermarkets have very high food miles, contributing to carbon emissions from transport.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What are two causes of globalisation?', opts:['Improvements in transport (container ships, air travel) and communication (internet, mobile phones)','Bad weather and wars','Mountains and rivers','Only the internet'], c:0, e:'Key causes of globalisation include: improvements in transport (container ships, jet aircraft) making global trade faster and cheaper, and advances in communication (internet, smartphones, social media) allowing instant worldwide connection.' },
      { q:'What is a supply chain?', opts:['The network of steps involved in making and delivering a product, from raw materials to the consumer','A type of shop','A chain-link fence','A delivery van'], c:0, e:'A supply chain is the entire process of making and delivering a product: from extracting raw materials, to manufacturing components, to assembling the final product, to transporting it to shops, to selling it to consumers. In a globalised world, these steps often occur in different countries.' },
      { q:'What does the UK mainly export?', opts:['Services (financial, insurance), manufactured goods, cars, pharmaceuticals, and technology','Only tea','Only wool','Only fish'], c:0, e:'The UK\'s main exports include financial and business services, manufactured goods (cars, aerospace equipment), pharmaceuticals, technology, whisky, and creative industries. Services make up a large proportion of UK exports.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How has migration contributed to the UK\'s global connections?', opts:['People from many countries have settled in the UK, creating cultural diversity and links to countries worldwide','Migration has no effect on connections','Only British people live in the UK','Migration only affects language'], c:0, e:'Migration has made the UK culturally diverse. Communities from the Caribbean, South Asia, Eastern Europe, and elsewhere maintain links with their countries of origin through family ties, trade, culture, and remittances, strengthening the UK\'s global connections.' },
      { q:'What does the UK mainly import?', opts:['Manufactured goods, food, fuel, raw materials, and clothing','Nothing','Only luxury goods','Only technology'], c:0, e:'The UK imports a wide range of goods including manufactured products (electronics, machinery), food (about 40% of food consumed is imported), fuel and energy resources, raw materials, clothing, and consumer goods.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'What is one benefit of globalisation?', opts:['Consumers get access to a wider variety of cheaper goods from around the world','It makes everything more expensive','It isolates countries','It stops trade'], c:0, e:'Benefits of globalisation include: access to a wider variety of cheaper goods, economic growth through trade, cultural exchange and understanding, technological innovation spread, and job creation in developing countries through foreign investment.' },
      { q:'What is one disadvantage of globalisation?', opts:['Jobs can be lost when companies move production to countries with lower wages','There are no disadvantages','It makes all countries equally wealthy','It stops cultural exchange'], c:0, e:'Disadvantages of globalisation include: job losses in developed countries as manufacturing moves to cheaper locations, exploitation of workers in developing countries, environmental damage from increased transport, loss of local cultures, and growing inequality between rich and poor.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'medium', gen: function() {
    var qs = [
      { q:'How has the internet contributed to globalisation?', opts:['It allows instant worldwide communication, online shopping, information sharing, and remote working','The internet is not connected to globalisation','It only affects gaming','It has slowed globalisation'], c:0, e:'The internet has been a major driver of globalisation by enabling instant worldwide communication (email, video calls), global e-commerce (online shopping from anywhere), the sharing of knowledge and culture across borders, and remote working across time zones.' },
      { q:'What are cultural connections between the UK and the rest of the world?', opts:['Shared language (English), music, food, sport, film, and fashion that cross national boundaries','The UK has no cultural connections','Only food connects cultures','Culture is not affected by globalisation'], c:0, e:'The UK has extensive cultural connections worldwide: the English language is spoken globally, British music and film have worldwide audiences, diverse food reflects migration patterns (curry, pizza, sushi are now British staples), and sports like football connect people across borders.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why might globalisation increase inequality both within and between countries?', opts:['TNCs may exploit cheap labour in poor countries while profits go to wealthy shareholders; within countries, skilled workers benefit more than unskilled ones','Globalisation makes everyone equal','It only reduces inequality','Inequality is not related to globalisation'], c:0, e:'Globalisation can increase inequality: between countries, because TNCs may exploit cheap labour while profits flow to wealthy nations; within countries, because skilled workers and business owners benefit from global opportunities while unskilled workers face job losses from competition. The gap between richest and poorest can widen.' },
      { q:'How does the concept of food miles oversimplify the environmental impact of food production?', opts:['Transport distance is just one factor — production methods, storage, and how consumers travel to shops also matter; sometimes imported food has a lower total carbon footprint','Food miles tell the whole story','Distance is the only factor','Imported food is always worse for the environment'], c:0, e:'Food miles only measure transport distance, ignoring other important factors. Tomatoes grown in heated greenhouses in the UK may have a higher carbon footprint than those grown naturally in Spain and transported by efficient lorry. Consumer car journeys to shops can produce more emissions than shipping. A full lifecycle analysis is needed.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'To what extent has globalisation been beneficial for developing countries?', opts:['It brings investment and jobs but can also lead to exploitation, environmental damage, and dependency on foreign companies — the effects are mixed','It is entirely beneficial','It has no effect on developing countries','It only causes harm'], c:0, e:'Globalisation brings investment, jobs, technology transfer, and export opportunities to developing countries. However, it can also mean low wages, poor working conditions, environmental degradation, profits flowing to foreign shareholders, and dependency on volatile global markets. The balance depends on governance, regulation, and workers\' rights.' },
      { q:'How might the UK\'s global connections change in the future, and what factors could drive this change?', opts:['Climate change policies may reduce food miles, technology may increase digital connections, geopolitical shifts may change trade patterns, and migration patterns may evolve','Nothing will change','Only technology matters','Global connections will disappear'], c:0, e:'Future changes could include: climate change policies driving local food production (reducing food miles), automation changing which countries manufacture goods, new technologies deepening digital connections, geopolitical changes (like Brexit) reshaping trade relationships, and shifting migration patterns altering cultural connections. The UK\'s global role will continue to evolve.' }
    ];
    return _pickFrom(qs);
  }},
  { depth: 'greater-depth', gen: function() {
    var qs = [
      { q:'Why might a geographer argue that globalisation makes the study of geography more important, not less?', opts:['Because globalisation creates complex interconnections between places that require geographical understanding of both local and global scales','Geography is less important now','Globalisation has nothing to do with geography','Only economists study globalisation'], c:0, e:'Globalisation creates complex spatial relationships that require geographical analysis: understanding supply chains across continents, how local decisions have global consequences, why some places benefit while others suffer, and how environmental, economic, and social issues are interconnected across scales. Geography\'s integrative approach is essential for understanding our globalised world.' },
      { q:'Evaluate whether buying locally produced food is always better than buying imported food.', opts:['Not necessarily — local food reduces transport emissions but may require more energy to produce; imported food supports developing economies; the answer depends on the specific product and circumstances','Local is always better','Imported is always better','It makes no difference'], c:0, e:'The answer is nuanced. Local food reduces transport emissions and supports local farmers, but heated greenhouses or cold storage can offset those gains. Imported food may support developing-country economies (Fairtrade), use less energy to grow naturally, and provide nutrition not available locally. The environmental and ethical calculus depends on the specific food, production method, and season.' }
    ];
    return _pickFrom(qs);
  }}
];
