// content/y11/math/generators/gen-5.js — Year 11 Maths Topic 5 (Functions).
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-05-1 — Function Notation & Composite Functions ──────────────────────
TEST_GENERATORS["m11i-05-1"] = [
  // evaluate f(x) = ax + b
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b = _randInt(1, 9), x = _randInt(2, 8);
      if (a === 2 && x === 2) x = 3;
      var ans = a * x + b;
      return { q: 'f(x) = ' + a + 'x + ' + b + '. Find f(' + x + ').',
        opts: _buildOpts('' + ans, [ '' + (a + x + b), '' + (a * x), '' + (ans + a) ]), c: 0,
        e: 'f(' + x + ') = ' + a + '×' + x + ' + ' + b + ' = ' + (a * x) + ' + ' + b + ' = ' + ans + '.' };
  }},
  // evaluate f(x) = ax - b
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b = _randInt(1, 9), x = _randInt(3, 9), ans = a * x - b;
      return { q: 'f(x) = ' + a + 'x − ' + b + '. Find f(' + x + ').',
        opts: _buildOpts('' + ans, [ '' + (a * x), '' + (ans - a), '' + (a + x - b) ]), c: 0,
        e: 'f(' + x + ') = ' + a + '×' + x + ' − ' + b + ' = ' + (a * x) + ' − ' + b + ' = ' + ans + '.' };
  }},
  // composite fg(x) at a value (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var m = _randInt(2, 4), c = _randInt(1, 5), b = _randInt(1, 6), x = _randInt(2, 6);
      var g = m * x, ans = g + b;     // g(x) = mx, f(x) = x + b
      return { q: 'f(x) = x + ' + b + ' and g(x) = ' + m + 'x. Find fg(' + x + ').',
        opts: _buildOpts('' + ans, [ '' + (m * (x + b)), '' + (g), '' + (x + b) ]), c: 0,
        e: 'g(' + x + ') = ' + m + '×' + x + ' = ' + g + ', then f(' + g + ') = ' + g + ' + ' + b + ' = ' + ans + '.' };
  }},
  // composite gf(x) at a value (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var m = _randInt(2, 4), b = _randInt(1, 5), x = _randInt(2, 6);
      var f = x + b, ans = m * f;     // f(x) = x + b, g(x) = mx
      return { q: 'f(x) = x + ' + b + ' and g(x) = ' + m + 'x. Find gf(' + x + ').',
        opts: _buildOpts('' + ans, [ '' + (m * x + b), '' + f, '' + (ans + m) ]), c: 0,
        e: 'f(' + x + ') = ' + x + ' + ' + b + ' = ' + f + ', then g(' + f + ') = ' + m + '×' + f + ' = ' + ans + '.' };
  }}
];
