// content/y11/math/generators/gen-2.js — Year 11 Maths Topic 2 (Quadratic & Other Graphs).
// Generators for all four islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-02-1 — Plotting Quadratic Graphs ────────────────────────────────────
TEST_GENERATORS["m11i-02-1"] = [
  // evaluate at a negative x — the classic sign trap
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 5), c, k = _randInt(1, 4);
      do { c = _randInt(1, 6); } while (c === k * k);
      var y = k * k - b * k + c;
      return { q: 'For y = x² + ' + b + 'x + ' + c + ', find y when x = −' + k + '.',
        opts: _buildOpts('' + y, [ '' + (k * k + b * k + c), '' + (-k * k - b * k + c), '' + (k * k - b * k - c) ]), c: 0,
        e: '(−' + k + ')² = +' + (k * k) + ' (a negative squared is positive), and ' + b + ' × (−' + k + ') = −' + (b * k) + '. So y = ' + (k * k) + ' − ' + (b * k) + ' + ' + c + ' = ' + y + '.' };
  }},
  // roots of y = x(x − k)
  { depth: 'medium', gen: function () {
      var k = _randInt(3, 8);
      return { q: 'The graph of y = x(x − ' + k + ') crosses the x-axis at:',
        opts: _buildOpts('x = 0 and x = ' + k, [ 'x = ' + k + ' only', 'x = 0 and x = −' + k, 'x = −' + k + ' and x = ' + k ]), c: 0,
        e: 'y = 0 when x = 0 or x − ' + k + ' = 0, so the curve crosses at x = 0 and x = ' + k + '.' };
  }},
  // line of symmetry
  { depth: 'medium', gen: function () {
      var h = _randInt(2, 6);
      return { q: 'State the line of symmetry of the graph y = (x − ' + h + ')².',
        opts: _buildOpts('x = ' + h, [ 'y = ' + h, 'x = −' + h, 'x = ' + (h * h) ]), c: 0,
        e: 'The parabola has its minimum at (' + h + ', 0), so it is symmetric about the vertical line x = ' + h + '.' };
  }},
  // minimum value from the standard form (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var h = _randInt(2, 5), d;
      do { d = _randInt(1, 8); } while (d === h);
      var c = h * h + d;
      return { q: 'What is the minimum value of y on the graph of y = x² − ' + (2 * h) + 'x + ' + c + '?',
        opts: _buildOpts('' + d, [ '' + c, '' + h, '−' + h ]), c: 0,
        e: 'Complete the square: y = (x − ' + h + ')² + ' + d + '. The minimum value of y is ' + d + ', at x = ' + h + '.' };
  }},
  // how many roots when the discriminant is negative (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var b = _randInt(2, 4), c = b * b + _randInt(1, 5);   // ensures b² − 4c < 0
      return { q: 'How many real roots does x² + ' + (2 * b) + 'x + ' + (b * b + c) + ' = 0 have? (Hint: complete the square.)',
        opts: _buildOpts('None', [ 'Two', 'One', 'Three' ]), c: 0,
        e: '(x + ' + b + ')² + ' + c + ' = 0 would need the squared bracket to equal −' + c + ', which is impossible. The graph sits entirely above the x-axis: no real roots.' };
  }}
];

// ── m11i-02-2 — Cubic & Reciprocal Graphs ────────────────────────────────────
TEST_GENERATORS["m11i-02-2"] = [
  // evaluate a cubic at a negative value
  { depth: 'medium', gen: function () {
      var c, k = _randInt(2, 4);
      do { c = _randInt(1, 9); } while (c === k * k * k || 2 * c === k * k * k + 3 * k);
      var y = c - k * k * k;
      return { q: 'For y = x³ + ' + c + ', find y when x = −' + k + '.',
        opts: _buildOpts('' + y, [ '' + (c + k * k * k), '' + (c - 3 * k), '' + (k * k * k - c) ]), c: 0,
        e: '(−' + k + ')³ = −' + (k * k * k) + ' (a negative cubed stays negative), so y = ' + c + ' − ' + (k * k * k) + ' = ' + y + '.' };
  }},
  // excluded value of a reciprocal graph
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9);
      return { q: 'Which value of x is NOT allowed in y = ' + a + '/x?',
        opts: _buildOpts('x = 0', [ 'x = ' + a, 'x = −' + a, 'x = 1' ]), c: 0,
        e: 'You cannot divide by zero, so x = 0 is excluded — the graph has two branches that never touch the axes.' };
  }},
  // read a reciprocal value
  { depth: 'medium', gen: function () {
      var b, m;
      do { b = _randInt(2, 4); m = _randInt(3, 6); } while (m === b);
      var a = b * m;
      return { q: 'The graph of y = ' + a + '/x passes through which of these points?',
        opts: _buildOpts('(' + b + ', ' + m + ')', [ '(' + b + ', ' + (a * b) + ')', '(' + b + ', ' + (a - b) + ')', '(' + b + ', ' + b + ')' ]), c: 0,
        e: 'When x = ' + b + ', y = ' + a + ' ÷ ' + b + ' = ' + m + ', so (' + b + ', ' + m + ') lies on the curve.' };
  }},
  // cubic evaluated at its own coefficient (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4);
      var y = a * a * a - a * a;
      return { q: 'For y = x³ − ' + a + 'x, find y when x = ' + a + '.',
        opts: _buildOpts('' + y, [ '' + (a * a * a), '' + (a * a * a + a * a), '0' ]), c: 0,
        e: 'y = ' + a + '³ − ' + a + ' × ' + a + ' = ' + (a * a * a) + ' − ' + (a * a) + ' = ' + y + '.' };
  }},
  // shape recognition (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 9);
      return { q: 'Which statement describes the graph of y = ' + a + '/x?',
        opts: _buildOpts('Two separate branches that approach the axes but never touch them', [ 'A U-shaped curve with one minimum point', 'An S-shaped curve passing through the origin', 'A straight line through the origin with gradient ' + a ]), c: 0,
        e: 'y = ' + a + '/x is a reciprocal graph: two branches (in opposite quadrants) with the axes as asymptotes. The U-shape is a quadratic and the S-shape is a cubic.' };
  }}
];

// ── m11i-02-3 — Recognising Graph Shapes ─────────────────────────────────────
TEST_GENERATORS["m11i-02-3"] = [
  // pick the parabola
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b = _randInt(1, 9);
      return { q: 'Which equation produces a U-shaped (parabolic) graph?',
        opts: _buildOpts('y = x² + ' + a, [ 'y = ' + a + 'x + ' + b, 'y = ' + a + '/x', 'y = x³ − ' + a ]), c: 0,
        e: 'A quadratic (highest power x²) gives a parabola. y = ' + a + 'x + ' + b + ' is a straight line, y = ' + a + '/x is a reciprocal and y = x³ − ' + a + ' is a cubic.' };
  }},
  // pick the straight line
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b = _randInt(1, 9);
      return { q: 'Which equation produces a straight-line graph?',
        opts: _buildOpts('y = ' + a + 'x − ' + b, [ 'y = x² − ' + b, 'y = ' + a + '/x', 'y = ' + a + 'ˣ' ]), c: 0,
        e: 'A straight line has the form y = mx + c with no powers of x: that is y = ' + a + 'x − ' + b + '.' };
  }},
  // name the reciprocal
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9);
      return { q: 'What type of graph does y = ' + a + '/x produce?',
        opts: _buildOpts('A reciprocal graph (two branches)', [ 'A parabola', 'A cubic curve', 'An exponential growth curve' ]), c: 0,
        e: 'Any equation of the form y = k/x gives a reciprocal graph: two branches with the axes as asymptotes.' };
  }},
  // pick exponential growth (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4), b = _randInt(2, 6);
      return { q: 'Which equation shows exponential growth?',
        opts: _buildOpts('y = ' + a + 'ˣ', [ 'y = x' + '²' + ' + ' + b, 'y = ' + b + 'x', 'y = x³' ]), c: 0,
        e: 'Exponential growth has x in the power: y = ' + a + 'ˣ. It grows faster than any of the polynomial graphs as x increases.' };
  }}
];

// ── m11i-02-4 — Exponential Graphs & Equations ───────────────────────────────
TEST_GENERATORS["m11i-02-4"] = [
  // evaluate aˣ
  { depth: 'medium', gen: function () {
      var a, k, y, w1, w2;
      do {
        a = _randInt(2, 3); k = a === 2 ? _randInt(3, 5) : _randInt(2, 4);
        y = Math.pow(a, k); w1 = a * k; w2 = Math.pow(a, k - 1);
      } while (w1 === y || w1 === w2 || w1 === Math.pow(a, k + 1));
      return { q: 'For y = ' + a + 'ˣ, find y when x = ' + k + '.',
        opts: _buildOpts('' + y, [ '' + w1, '' + w2, '' + Math.pow(a, k + 1) ]), c: 0,
        e: a + 'ˣ means ' + a + ' multiplied by itself ' + k + ' times: ' + a + '^' + k + ' = ' + y + '. It is not ' + a + ' × ' + k + '.' };
  }},
  // growth or decay from the multiplier (decay)
  { depth: 'medium', gen: function () {
      var pcts = [5, 10, 20, 25], p = pcts[_randInt(0, 3)];
      var r = ((100 - p) / 100).toFixed(2).replace(/0$/, '');
      return { q: 'A quantity follows y = 400 × ' + r + 'ˣ. What is happening to it each step?',
        opts: _buildOpts('It decays by ' + p + '% per step', [ 'It grows by ' + p + '% per step', 'It decays by ' + (100 - p) + '% per step', 'It grows by ' + (100 - p) + '% per step' ]), c: 0,
        e: 'The multiplier ' + r + ' is less than 1, so this is decay. ' + r + ' = 1 − ' + p + '/100, so it loses ' + p + '% each step.' };
  }},
  // growth multiplier
  { depth: 'medium', gen: function () {
      var pcts = [5, 10, 20, 25], p = pcts[_randInt(0, 3)];
      var r = ((100 + p) / 100).toFixed(2).replace(/0$/, '');
      return { q: 'A population grows by ' + p + '% each year. What multiplier goes in y = k × (   )ˣ?',
        opts: _buildOpts(r, [ ((p) / 100).toFixed(2).replace(/0$/, ''), ((100 - p) / 100).toFixed(2).replace(/0$/, ''), '' + (1 + p) ]), c: 0,
        e: 'Growth of ' + p + '% means multiplying by 1 + ' + p + '/100 = ' + r + ' each year.' };
  }},
  // evaluate k·aˣ (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var k, a, x, y, w1, w2, w3;
      do {
        k = _randInt(2, 5); a = _randInt(2, 3); x = _randInt(2, 3);
        y = k * Math.pow(a, x); w1 = Math.pow(k * a, x); w2 = k + Math.pow(a, x); w3 = k * a * x;
      } while (w1 === y || w2 === y || w3 === y || w1 === w2 || w1 === w3 || w2 === w3);
      return { q: 'For y = ' + k + ' × ' + a + 'ˣ, find y when x = ' + x + '.',
        opts: _buildOpts('' + y, [ '' + w1, '' + w2, '' + w3 ]), c: 0,
        e: 'Work out the power first: ' + a + '^' + x + ' = ' + Math.pow(a, x) + ', then multiply by ' + k + ': y = ' + y + '. Multiplying ' + k + ' × ' + a + ' first gives the wrong answer ' + w1 + '.' };
  }},
  // doubling problem (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var P = 100 * _randInt(1, 9), n = _randInt(3, 4);
      var y = P * Math.pow(2, n);
      return { q: 'A bacteria population of ' + P + ' doubles every hour. How many bacteria are there after ' + n + ' hours?',
        opts: _buildOpts('' + y, [ '' + (P * 2 * n), '' + (P + Math.pow(2, n)), '' + (P * n) ]), c: 0,
        e: 'Doubling ' + n + ' times multiplies by 2^' + n + ' = ' + Math.pow(2, n) + ': ' + P + ' × ' + Math.pow(2, n) + ' = ' + y + '. Multiplying by 2 × ' + n + ' = ' + (2 * n) + ' is the classic mistake.' };
  }}
];
