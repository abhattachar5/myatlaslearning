// content/y11/math/generators/gen-10.js — Year 11 Maths Topic 10 (Trig Graphs & Transformations of Graphs).
// Generators for all three islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-10-1 — Trig Graphs ──────────────────────────────────────────────────
TEST_GENERATORS["m11i-10-1"] = [
  // key values of sin
  { depth: 'medium', gen: function () {
      var angles = [0, 90, 180, 270], vals = ['0', '1', '0', '−1'];
      var i = _randInt(0, 3), ans = vals[i];
      var wrongs = ['1', '0', '−1', '0.5'].filter(function (s) { return s !== ans; }).slice(0, 3);
      return { q: 'Using the graph of y = sin x, what is the value of sin ' + angles[i] + '°?',
        opts: _buildOpts(ans, wrongs), c: 0,
        e: 'The sine wave starts at 0, peaks at 1 when x = 90°, returns to 0 at 180° and dips to −1 at 270°. So sin ' + angles[i] + '° = ' + ans + '.' };
  }},
  // key values of cos
  { depth: 'medium', gen: function () {
      var angles = [0, 90, 180, 270], vals = ['1', '0', '−1', '0'];
      var i = _randInt(0, 3), ans = vals[i];
      var wrongs = ['1', '0', '−1', '0.5'].filter(function (s) { return s !== ans; }).slice(0, 3);
      return { q: 'Using the graph of y = cos x, what is the value of cos ' + angles[i] + '°?',
        opts: _buildOpts(ans, wrongs), c: 0,
        e: 'The cosine wave starts at 1, falls to 0 at 90°, reaches −1 at 180° and is back to 0 at 270°. So cos ' + angles[i] + '° = ' + ans + '.' };
  }},
  // maximum of a sin x
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 5);
      return { q: 'What is the maximum value of y = ' + a + ' sin x?',
        opts: _buildOpts('' + a, [ '1', '−' + a, '' + (2 * a) ]), c: 0,
        e: 'sin x has a maximum of 1, so ' + a + ' sin x has a maximum of ' + a + ' × 1 = ' + a + '. The graph is stretched vertically by ' + a + '.' };
  }},
  // period of the graphs
  { depth: 'medium', gen: function () {
      var fns = ['sin x', 'cos x', 'tan x'], i = _randInt(0, 2);
      var ans = i === 2 ? '180°' : '360°';
      var wrongs = ['90°', '180°', '360°', '720°'].filter(function (s) { return s !== ans; }).slice(0, 3);
      return { q: 'How often does the graph of y = ' + fns[i] + ' repeat itself?',
        opts: _buildOpts('Every ' + ans, [ 'Every ' + wrongs[0], 'Every ' + wrongs[1], 'Every ' + wrongs[2] ]), c: 0,
        e: 'sin and cos repeat every 360°; tan repeats every 180°. So y = ' + fns[i] + ' has period ' + ans + '.' };
  }},
  // range of a cos x (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4);
      return { q: 'Between which values does y = ' + a + ' cos x lie?',
        opts: _buildOpts('−' + a + ' ≤ y ≤ ' + a, [ '−1 ≤ y ≤ 1', '0 ≤ y ≤ ' + a, '−' + a + ' ≤ y ≤ 0' ]), c: 0,
        e: 'cos x lies between −1 and 1, so multiplying by ' + a + ' stretches the range to −' + a + ' ≤ y ≤ ' + a + '.' };
  }}
];

// ── m11i-10-2 — Transformations of Graphs ────────────────────────────────────
TEST_GENERATORS["m11i-10-2"] = [
  // y = f(x) + a
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6);
      return { q: 'How does the graph of y = f(x) + ' + a + ' relate to the graph of y = f(x)?',
        opts: _buildOpts('Translation by vector (0, ' + a + ')', [ 'Translation by vector (' + a + ', 0)', 'Translation by vector (0, −' + a + ')', 'Vertical stretch, scale factor ' + a ]), c: 0,
        e: 'Adding ' + a + ' OUTSIDE the function moves every point UP by ' + a + ': a translation by (0, ' + a + ').' };
  }},
  // y = f(x + a) — the sign trap
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6);
      return { q: 'How does the graph of y = f(x + ' + a + ') relate to the graph of y = f(x)?',
        opts: _buildOpts('Translation by vector (−' + a + ', 0)', [ 'Translation by vector (' + a + ', 0)', 'Translation by vector (0, ' + a + ')', 'Translation by vector (0, −' + a + ')' ]), c: 0,
        e: 'Adding ' + a + ' INSIDE the bracket moves the graph ' + a + ' to the LEFT — the opposite of what most people expect: translation by (−' + a + ', 0).' };
  }},
  // y = −f(x)
  { depth: 'medium', gen: function () {
      var letters = ['f', 'g', 'h'], L = letters[_randInt(0, 2)];
      return { q: 'How does the graph of y = −' + L + '(x) relate to the graph of y = ' + L + '(x)?',
        opts: _buildOpts('Reflection in the x-axis', [ 'Reflection in the y-axis', 'Translation by vector (0, −1)', 'Rotation of 180° about the origin' ]), c: 0,
        e: 'The minus sign OUTSIDE flips every y-value: a reflection in the x-axis. (y = ' + L + '(−x) would reflect in the y-axis.)' };
  }},
  // combined translation (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a, b;
      do { a = _randInt(2, 6); b = _randInt(2, 6); } while (a === b);
      return { q: 'Describe the transformation that maps y = f(x) onto y = f(x − ' + a + ') + ' + b + '.',
        opts: _buildOpts('Translation by vector (' + a + ', ' + b + ')', [ 'Translation by vector (−' + a + ', ' + b + ')', 'Translation by vector (' + a + ', −' + b + ')', 'Translation by vector (' + b + ', ' + a + ')' ]), c: 0,
        e: '(x − ' + a + ') inside moves the graph ' + a + ' RIGHT; + ' + b + ' outside moves it ' + b + ' UP. Together: translation by (' + a + ', ' + b + ').' };
  }},
  // track a specific point (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(1, 6), q = _randInt(1, 6), b = _randInt(2, 5);
      return { q: 'The graph of y = f(x) has a maximum point at (' + p + ', ' + q + '). What is the maximum point of y = f(x) + ' + b + '?',
        opts: _buildOpts('(' + p + ', ' + (q + b) + ')', [ '(' + (p + b) + ', ' + q + ')', '(' + p + ', ' + (q - b) + ')', '(' + (p + b) + ', ' + (q + b) + ')' ]), c: 0,
        e: 'Adding ' + b + ' outside the function moves every point up by ' + b + ': the maximum moves from (' + p + ', ' + q + ') to (' + p + ', ' + (q + b) + ').' };
  }}
];

// ── m11i-10-3 — Solving Trig Equations Graphically ───────────────────────────
TEST_GENERATORS["m11i-10-3"] = [
  // second solution for sin
  { depth: 'medium', gen: function () {
      var t = _randInt(10, 80);
      return { q: 'One solution of sin x = sin ' + t + '° is x = ' + t + '°. Using the symmetry of the sine graph, what is the other solution between 0° and 360°?',
        opts: _buildOpts((180 - t) + '°', [ (360 - t) + '°', (180 + t) + '°', (90 - t) + '°' ]), c: 0,
        e: 'The sine graph is symmetric about x = 90°, so the second solution is 180 − ' + t + ' = ' + (180 - t) + '°. (360 − ' + t + '° works for cos, not sin.)' };
  }},
  // second solution for cos
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(20, 160); } while (t === 45 || t === 90 || t === 135);
      return { q: 'One solution of cos x = cos ' + t + '° is x = ' + t + '°. What is the other solution between 0° and 360°?',
        opts: _buildOpts((360 - t) + '°', [ (180 - t) + '°', (180 + t) + '°', (90 + t) + '°' ]), c: 0,
        e: 'The cosine graph is symmetric about x = 180°, so the second solution is 360 − ' + t + ' = ' + (360 - t) + '°.' };
  }},
  // tan repeats every 180° (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t;
      do { t = _randInt(10, 170); } while (t === 45 || t === 90 || t === 135);
      return { q: 'One solution of tan x = tan ' + t + '° is x = ' + t + '°. What is the next solution between 0° and 360°?',
        opts: _buildOpts((t + 180) + '°', [ (360 - t) + '°', (180 - t) + '°', (90 + t) + '°' ]), c: 0,
        e: 'tan repeats every 180°, so the next solution is ' + t + ' + 180 = ' + (t + 180) + '°. The sin/cos symmetry rules do not apply to tan.' };
  }},
  // counting solutions (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var ks = ['0.3', '0.5', '0.7'], k = ks[_randInt(0, 2)];
      return { q: 'How many solutions does sin x = ' + k + ' have for 0° ≤ x ≤ 360°?',
        opts: _buildOpts('Two', [ 'One', 'None', 'Four' ]), c: 0,
        e: 'Draw the horizontal line y = ' + k + ' across one full wave of y = sin x: it crosses twice (once rising, once falling), so there are two solutions.' };
  }}
];
