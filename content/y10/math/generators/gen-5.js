// content/y10/math/generators/gen-5.js — Year 10 Maths Topic 5 (Straight-Line Graphs).
// Gradient island generates; equation/parallel-perpendicular islands use static banks.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-05-1 — Gradient & y = mx + c ────────────────────────────────────────
TEST_GENERATORS["m10i-05-1"] = [
  // gradient between two points
  { depth: 'medium', gen: function () {
      var x1 = _randInt(0, 4), run = _randInt(2, 5), x2 = x1 + run, m = _randInt(2, 6), y1 = _randInt(0, 5), y2 = y1 + m * run;
      return { q: 'Find the gradient of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').',
        opts: _buildOpts('' + m, [ '' + (m + 1), '' + (m - 1), '' + (m * run) ]), c: 0,
        e: 'Gradient = (change in y) ÷ (change in x) = ' + (y2 - y1) + ' ÷ ' + run + ' = ' + m + '.' };
  }},
  // gradient from y = mx + c
  { depth: 'medium', gen: function () {
      var m = _randInt(2, 9), c = _randInt(1, 9);
      if (c === m) c = (c % 9) + 1;
      return { q: 'State the gradient of y = ' + m + 'x + ' + c + '.',
        opts: _buildOpts('' + m, [ '' + c, '' + (m + c), '' + (m - 1) ]), c: 0,
        e: 'In y = mx + c, the coefficient of x is the gradient: ' + m + '.' };
  }},
  // y-intercept from y = mx + c
  { depth: 'medium', gen: function () {
      var m = _randInt(2, 6), c = _randInt(1, 9);
      if (c === m) c = (c % 9) + 1;
      return { q: 'Where does y = ' + m + 'x + ' + c + ' cross the y-axis?',
        opts: _buildOpts('(0, ' + c + ')', [ '(' + c + ', 0)', '(0, ' + m + ')', '(0, ' + (m + c) + ')' ]), c: 0,
        e: 'The y-intercept is c = ' + c + ', so it crosses at (0, ' + c + ').' };
  }},
  // rearrange ay = (am)x + (ac) then state gradient (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4), m = _randInt(2, 5), c = _randInt(2, 6);
      if (c === m) c = (c % 6) + 2;
      return { q: 'Rearrange ' + a + 'y = ' + (a * m) + 'x + ' + (a * c) + ' to find the gradient.',
        opts: _buildOpts('' + m, [ '' + (a * m), '' + c, '' + (m * c) ]), c: 0,
        e: 'Divide every term by ' + a + ': y = ' + m + 'x + ' + c + ', so the gradient is ' + m + '.' };
  }},
  // steepest line (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var m = _randInt(5, 9), a = _randInt(2, 4), b = _randInt(1, 3);
      return { q: 'Which line is steepest: y = ' + m + 'x, y = ' + a + 'x or y = ' + b + 'x + 4?',
        opts: _buildOpts('y = ' + m + 'x', [ 'y = ' + a + 'x', 'y = ' + b + 'x + 4', 'They are equal' ]), c: 0,
        e: 'Steepness is the size of the gradient; ' + m + ' is the largest, so y = ' + m + 'x is steepest.' };
  }}
];
