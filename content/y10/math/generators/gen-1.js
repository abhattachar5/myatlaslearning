// content/y10/math/generators/gen-1.js — Year 10 Maths Topic 1 (Linear Equations
// & Inequalities). Uses _randInt/_buildOpts. Validated by check-generators.js.

// ── m10i-01-1 — Solving Linear Equations ─────────────────────────────────────
TEST_GENERATORS["m10i-01-1"] = [
  // two-step ax + b = c
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), x = _randInt(2, 9), b = _randInt(1, 9), c = a * x + b;
      return { q: 'Solve ' + a + 'x + ' + b + ' = ' + c + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + (a * x) ]), c: 0,
        e: 'Subtract ' + b + ': ' + a + 'x = ' + (c - b) + '. Divide by ' + a + ': x = ' + x + '.' };
  }},
  // two-step ax − b = c
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), x = _randInt(2, 9), b = _randInt(1, 9), c = a * x - b;
      return { q: 'Solve ' + a + 'x − ' + b + ' = ' + c + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + (a * x) ]), c: 0,
        e: 'Add ' + b + ': ' + a + 'x = ' + (c + b) + '. Divide by ' + a + ': x = ' + x + '.' };
  }},
  // x/a = b
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b = _randInt(2, 9), x;
      if (a === 2 && b === 2) b = 3;
      x = a * b;
      return { q: 'Solve x/' + a + ' = ' + b + '.',
        opts: _buildOpts('' + x, [ '' + b, '' + (b + a), '' + (b - 1) ]), c: 0,
        e: 'Multiply both sides by ' + a + ': x = ' + b + ' × ' + a + ' = ' + x + '.' };
  }},
  // two-step, larger (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(3, 8), x = _randInt(4, 12), b = _randInt(2, 9), c = a * x + b;
      return { q: 'Solve ' + a + 'x + ' + b + ' = ' + c + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + (c - b) ]), c: 0,
        e: 'Subtract ' + b + ': ' + a + 'x = ' + (c - b) + '. Divide by ' + a + ': x = ' + x + '.' };
  }},
  // negative answer (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 5), x = -_randInt(2, 7), b = _randInt(2, 9), c = a * x + b;
      return { q: 'Solve ' + a + 'x + ' + b + ' = ' + c + '.',
        opts: _buildOpts('' + x, [ '' + (-x), '' + (x + 1), '' + (x - 1) ]), c: 0,
        e: 'Subtract ' + b + ': ' + a + 'x = ' + (c - b) + '. Divide by ' + a + ': x = ' + x + '.' };
  }}
];

// ── m10i-01-2 — Brackets & Unknowns on Both Sides ────────────────────────────
TEST_GENERATORS["m10i-01-2"] = [
  // a(x + b) = c
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 5), b = _randInt(2, 6), x = _randInt(2, 8), c = a * (x + b);
      return { q: 'Solve ' + a + '(x + ' + b + ') = ' + c + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + (x + b) ]), c: 0,
        e: 'Expand: ' + a + 'x + ' + (a * b) + ' = ' + c + '. Subtract ' + (a * b) + ' then divide by ' + a + ': x = ' + x + '.' };
  }},
  // ax + b = cx + d, x on both sides
  { depth: 'medium', gen: function () {
      var c = _randInt(2, 4), a = c + _randInt(2, 3), x = _randInt(2, 7), b = _randInt(1, 6);
      var d = (a - c) * x + b;
      return { q: 'Solve ' + a + 'x + ' + b + ' = ' + c + 'x + ' + d + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + ((a - c) * x) ]), c: 0,
        e: 'Collect: ' + (a - c) + 'x = ' + (d - b) + ' → x = ' + x + '.' };
  }},
  // a(x − b) = cx + d (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var c = _randInt(2, 3), a = c + _randInt(2, 3), b = _randInt(2, 4), x = _randInt(3, 8);
      var d = a * (x - b) - c * x;
      var rhs = c + 'x ' + (d < 0 ? '− ' + (-d) : '+ ' + d);
      return { q: 'Solve ' + a + '(x − ' + b + ') = ' + rhs + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + (x + b) ]), c: 0,
        e: 'Expand: ' + a + 'x − ' + (a * b) + ' = ' + rhs + '. Collect the x terms and solve: x = ' + x + '.' };
  }},
  // fraction equation (x + b)/a = c (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 5), c = _randInt(2, 8), b = _randInt(2, 9), x = a * c - b;
      return { q: 'Solve (x + ' + b + ')/' + a + ' = ' + c + '.',
        opts: _buildOpts('' + x, [ '' + (x + 1), '' + (x - 1), '' + (a * c) ]), c: 0,
        e: 'Multiply both sides by ' + a + ': x + ' + b + ' = ' + (a * c) + '. Subtract ' + b + ': x = ' + x + '.' };
  }}
];

// ── m10i-01-3 — Inequalities & Number Lines ──────────────────────────────────
TEST_GENERATORS["m10i-01-3"] = [
  // ax + b < c
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 5), k = _randInt(2, 8), b = _randInt(1, 9), c = a * k + b;
      return { q: 'Solve ' + a + 'x + ' + b + ' < ' + c + '.',
        opts: _buildOpts('x < ' + k, [ 'x > ' + k, 'x < ' + (k + 1), 'x ≤ ' + k ]), c: 0,
        e: 'Subtract ' + b + ': ' + a + 'x < ' + (c - b) + '. Divide by ' + a + ': x < ' + k + '.' };
  }},
  // ax − b ≥ c
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 5), k = _randInt(2, 8), b = _randInt(1, 9), c = a * k - b;
      return { q: 'Solve ' + a + 'x − ' + b + ' ≥ ' + c + '.',
        opts: _buildOpts('x ≥ ' + k, [ 'x ≤ ' + k, 'x ≥ ' + (k + 1), 'x > ' + k ]), c: 0,
        e: 'Add ' + b + ': ' + a + 'x ≥ ' + (c + b) + '. Divide by ' + a + ': x ≥ ' + k + '.' };
  }},
  // count integers in a range
  { depth: 'medium', gen: function () {
      var lo = -_randInt(0, 3), hi = _randInt(2, 6), count = hi - lo;   // lo ≤ x < hi
      return { q: 'How many integers satisfy ' + lo + ' ≤ x < ' + hi + '?',
        opts: _buildOpts('' + count, [ '' + (count + 1), '' + (count - 1), '' + (count + 2) ]), c: 0,
        e: 'The integers run from ' + lo + ' up to ' + (hi - 1) + ' (since ' + hi + ' is excluded) — that is ' + count + ' values.' };
  }},
  // negative coefficient → flip (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 5), k = _randInt(2, 6), b = a * k;
      return { q: 'Solve −' + a + 'x > ' + b + '.',
        opts: _buildOpts('x < −' + k, [ 'x > −' + k, 'x < ' + k, 'x > ' + k ]), c: 0,
        e: 'Divide by −' + a + ' and FLIP the sign: x < −' + k + '.' };
  }},
  // two-sided collect then solve (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(3, 6), c = _randInt(1, 2), k = _randInt(2, 7), b = _randInt(1, 5);
      var rhs = (a - c) * k + b;
      return { q: 'Solve ' + a + 'x + ' + b + ' ≤ ' + c + 'x + ' + rhs + '.',
        opts: _buildOpts('x ≤ ' + k, [ 'x ≥ ' + k, 'x ≤ ' + (k + 1), 'x < ' + k ]), c: 0,
        e: 'Collect: ' + (a - c) + 'x ≤ ' + (rhs - b) + ' → x ≤ ' + k + '.' };
  }}
];
