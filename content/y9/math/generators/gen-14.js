// content/y9/math/generators/gen-14.js — Year 9 Maths Topic 14 (Probability).
// Curated pools keep fractions exact. Uses _randInt/_buildOpts.
// Validated by scripts/check-generators.js.

function _y9pick14(a) { return a[_randInt(0, a.length - 1)]; }

// ── m9i-14-1 — Probability Basics & the Scale ────────────────────────────────
// [red, blue, green, P(red) simplest, P(not red) simplest]
var _BAG = [
  [3, 5, 0, '3/8', '5/8'], [2, 3, 0, '2/5', '3/5'], [1, 4, 0, '1/5', '4/5'],
  [4, 4, 2, '2/5', '3/5'], [3, 3, 0, '1/2', '1/2'], [2, 5, 3, '1/5', '4/5'],
  [1, 2, 3, '1/6', '5/6'], [5, 3, 2, '1/2', '1/2'], [3, 1, 6, '3/10', '7/10']
];
TEST_GENERATORS["m9i-14-1"] = [
  // P(colour) from a bag
  { depth: 'medium', gen: function () {
      var r = _y9pick14(_BAG), tot = r[0] + r[1] + r[2];
      return { q: 'A bag has ' + r[0] + ' red, ' + r[1] + ' blue and ' + r[2] + ' green counters. Find P(red).',
        opts: _buildOpts(r[3], [ r[4], r[0] + '/' + r[1], r[0] + '/' + (tot + 1) ]), c: 0,
        e: 'There are ' + r[0] + ' red out of ' + tot + ' counters, so P(red) = ' + r[0] + '/' + tot + ' = ' + r[3] + '.' };
  }},
  // P(not A) from a decimal
  { depth: 'medium', gen: function () {
      var p = _randInt(1, 9) / 10; if (p === 0.5) p = 0.6;
      var np = Math.round((1 - p) * 10) / 10;
      return { q: 'P(an event) = ' + p + '. Find P(it does not happen).',
        opts: _buildOpts('' + np, [ '' + p, '' + (Math.round((1 + p) * 10) / 10), '0.5' ]), c: 0,
        e: 'P(not) = 1 − ' + p + ' = ' + np + '.' };
  }},
  // missing probability (sums to 1)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 4) / 10, b = _randInt(1, 4) / 10, x = Math.round((1 - a - b) * 10) / 10;
      while (x <= 0) { a = _randInt(1, 4) / 10; b = _randInt(1, 4) / 10; x = Math.round((1 - a - b) * 10) / 10; }
      var w3 = x > 0.1 ? Math.round((x - 0.1) * 10) / 10 : Math.round((x + 0.3) * 10) / 10;
      return { q: 'A spinner lands on A, B, C with P = ' + a + ', ' + b + ' and x. Find x.',
        opts: _buildOpts('' + x, [ '' + (Math.round((x + 0.1) * 10) / 10), '' + (Math.round((x + 0.2) * 10) / 10), '' + w3 ]), c: 0,
        e: 'Probabilities total 1: x = 1 − ' + a + ' − ' + b + ' = ' + x + '.' };
  }}
];

// ── m9i-14-2 — Sample Space & Combined Events ────────────────────────────────
// [total, count, P simplest]
var _DICE = [
  [4, 3, '1/12'], [5, 4, '1/9'], [6, 5, '5/36'], [7, 6, '1/6'],
  [8, 5, '5/36'], [9, 4, '1/9'], [10, 3, '1/12'], [3, 2, '1/18'], [11, 2, '1/18']
];
TEST_GENERATORS["m9i-14-2"] = [
  // two dice, P(total = t)
  { depth: 'medium', gen: function () {
      var r = _y9pick14(_DICE);
      return { q: 'Two fair dice are rolled. Find P(total = ' + r[0] + ').',
        opts: _buildOpts(r[2], [ r[1] + '/12', '1/' + r[0], r[1] + '/6' ]), c: 0,
        e: r[1] + ' of the 36 outcomes total ' + r[0] + ', so P = ' + r[1] + '/36 = ' + r[2] + '.' };
  }},
  // two coins
  { depth: 'medium', gen: function () {
      var which = _randInt(0, 2);
      var data = [['two heads', '1/4'], ['exactly one head', '1/2'], ['at least one head', '3/4']][which];
      return { q: 'Two fair coins are flipped. Find P(' + data[0] + ').',
        opts: _buildOpts(data[1], [ which === 1 ? '1/4' : '1/2', '1/3', which === 2 ? '1/4' : '3/4' ]), c: 0,
        e: 'The outcomes are HH, HT, TH, TT (4 equally likely). Count those that match and divide by 4: ' + data[1] + '.' };
  }},
  // independent events, P(A and B) (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 6) / 10, b = _randInt(2, 5) / 10;
      var ans = Math.round(a * b * 100) / 100;
      return { q: 'For independent events P(A) = ' + a + ' and P(B) = ' + b + '. Find P(A and B).',
        opts: _buildOpts('' + ans, [ '' + Math.round((a + b) * 10) / 10, '' + Math.round((a - b) * 10) / 10, '' + Math.round((a + b - a * b) * 100) / 100 ]), c: 0,
        e: 'For independent events multiply: ' + a + ' × ' + b + ' = ' + ans + '.' };
  }}
];

// ── m9i-14-3 — Tree Diagrams & Relative Frequency ────────────────────────────
TEST_GENERATORS["m9i-14-3"] = [
  // relative frequency
  { depth: 'medium', gen: function () {
      var trials = [50, 100, 200, 20, 40][_randInt(0, 4)], succ = _randInt(1, trials - 1);
      var rf = Math.round(succ / trials * 1000) / 1000;
      return { q: 'An event happens ' + succ + ' times in ' + trials + ' trials. What is the relative frequency?',
        opts: _buildOpts('' + rf, [ '' + (Math.round(trials / succ * 100) / 100), '' + succ, '' + Math.round((1 - rf) * 1000) / 1000 ]), c: 0,
        e: 'Relative frequency = successes ÷ trials = ' + succ + ' ÷ ' + trials + ' = ' + rf + '.' };
  }},
  // expected number from relative frequency
  { depth: 'medium', gen: function () {
      var rf = [0.1, 0.2, 0.25, 0.04][_randInt(0, 3)], n = [200, 300, 400, 600, 1000][_randInt(0, 4)];
      var exp = Math.round(rf * n);
      return { q: 'The relative frequency of a faulty item is ' + rf + '. How many faulty in ' + n + '?',
        opts: _buildOpts('' + exp, [ '' + Math.round(rf * n / 2), '' + (n - exp), '' + Math.round(rf * n + n / 100) ]), c: 0,
        e: 'Expected number = relative frequency × trials = ' + rf + ' × ' + n + ' = ' + exp + '.' };
  }},
  // tree diagram, multiply along branches (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = [0.6, 0.7, 0.8, 0.5, 0.4][_randInt(0, 4)];
      var ans = Math.round(p * p * 100) / 100;
      return { q: 'On a tree, P(win) = ' + p + ' each game. Find P(win then win).',
        opts: _buildOpts('' + ans, [ '' + (Math.round(2 * p * 100) / 100), '' + p, '' + (Math.round(p * p * 100) / 100 + 0.1) ]), c: 0,
        e: 'Multiply along the branches: ' + p + ' × ' + p + ' = ' + ans + '.' };
  }},
  // exactly one of two (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = [0.3, 0.4, 0.2, 0.6][_randInt(0, 3)];
      var ans = Math.round(2 * p * (1 - p) * 100) / 100;
      return { q: 'P(red) = ' + p + ' on each of two spins. Find P(exactly one red).',
        opts: _buildOpts('' + ans, [ '' + Math.round(p * p * 100) / 100, '' + Math.round(p * (1 - p) * 100) / 100, '' + Math.round(2 * p * 100) / 100 ]), c: 0,
        e: 'P(R,not R) + P(not R,R) = ' + p + '×' + Math.round((1 - p) * 10) / 10 + ' twice = ' + ans + '.' };
  }}
];
