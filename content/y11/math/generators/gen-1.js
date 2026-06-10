// content/y11/math/generators/gen-1.js — Year 11 Maths Topic 1 (Quadratic Formula & Completing the Square).
// Generators for all three islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-01-1 — The Quadratic Formula ────────────────────────────────────────
TEST_GENERATORS["m11i-01-1"] = [
  // discriminant of x² + bx + c
  { depth: 'medium', gen: function () {
      var b = _randInt(3, 9), c;
      do { c = _randInt(2, 9); } while (b * b === 4 * c || b * b === 2 * c + 2);
      var D = b * b - 4 * c;
      return { q: 'Work out the value of the discriminant b² − 4ac for x² + ' + b + 'x + ' + c + ' = 0.',
        opts: _buildOpts('' + D, [ '' + (b * b + 4 * c), '' + (4 * c - b * b), '' + (b * b - 4) ]), c: 0,
        e: 'Here a = 1, b = ' + b + ', c = ' + c + ': b² − 4ac = ' + (b * b) + ' − ' + (4 * c) + ' = ' + D + '. Watch the signs — it is minus 4ac.' };
  }},
  // number of real roots from the discriminant
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 8), c = _randInt(1, 9), D = b * b - 4 * c;
      var ans = D > 0 ? 'Two distinct real roots' : (D === 0 ? 'One repeated root' : 'No real roots');
      var others = ['Two distinct real roots', 'One repeated root', 'No real roots'].filter(function (s) { return s !== ans; });
      others.push('Cannot tell from the discriminant');
      return { q: 'For x² + ' + b + 'x + ' + c + ' = 0, the discriminant is ' + D + '. How many real roots does the equation have?',
        opts: _buildOpts(ans, others), c: 0,
        e: 'The discriminant decides it: positive → two distinct real roots, zero → one repeated root, negative → no real roots. Here ' + D + (D > 0 ? ' > 0, so two distinct real roots.' : (D === 0 ? ' = 0, so one repeated root.' : ' < 0, so no real roots.')) };
  }},
  // solve with the formula — roots both negative
  { depth: 'medium', gen: function () {
      var r = _randInt(1, 3), s = r + _randInt(1, 3), b = r + s, c = r * s;
      return { q: 'Use the quadratic formula to solve x² + ' + b + 'x + ' + c + ' = 0.',
        opts: _buildOpts('x = −' + r + ' or x = −' + s, [ 'x = ' + r + ' or x = ' + s, 'x = −' + r + ' or x = ' + s, 'x = ' + r + ' or x = −' + s ]), c: 0,
        e: 'x = (−' + b + ' ± √(' + (b * b) + ' − ' + (4 * c) + ')) ÷ 2 = (−' + b + ' ± ' + (s - r) + ') ÷ 2, giving x = −' + r + ' or x = −' + s + '.' };
  }},
  // solve with the formula — roots both positive (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r = _randInt(1, 3), s = r + _randInt(2, 4), b = r + s, c = r * s;
      return { q: 'Use the quadratic formula to solve x² − ' + b + 'x + ' + c + ' = 0.',
        opts: _buildOpts('x = ' + r + ' or x = ' + s, [ 'x = −' + r + ' or x = −' + s, 'x = ' + b + ' or x = ' + c, 'x = ' + r + ' or x = −' + s ]), c: 0,
        e: 'Here b = −' + b + ', so −b = ' + b + ': x = (' + b + ' ± √(' + (b * b) + ' − ' + (4 * c) + ')) ÷ 2 = (' + b + ' ± ' + (s - r) + ') ÷ 2, giving x = ' + r + ' or x = ' + s + '.' };
  }},
  // discriminant with a ≠ 1 (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 3), b = _randInt(4, 9), c;
      do { c = _randInt(1, 3); } while (b * b === 4 * a * c || b * b === 2 * c * (a + 1));
      var D = b * b - 4 * a * c;
      return { q: 'For ' + a + 'x² + ' + b + 'x + ' + c + ' = 0, what is the value under the square root in the quadratic formula?',
        opts: _buildOpts('' + D, [ '' + (b * b - 4 * c), '' + (b * b + 4 * a * c), '' + (4 * a * c - b * b) ]), c: 0,
        e: 'b² − 4ac = ' + (b * b) + ' − 4 × ' + a + ' × ' + c + ' = ' + (b * b) + ' − ' + (4 * a * c) + ' = ' + D + '. A common slip is forgetting the a and working out b² − 4c.' };
  }}
];

// ── m11i-01-2 — Completing the Square ────────────────────────────────────────
TEST_GENERATORS["m11i-01-2"] = [
  // x² + 2px + c with c > p² → (x + p)² + q
  { depth: 'medium', gen: function () {
      var p = _randInt(2, 5), q = _randInt(1, 9), c = p * p + q;
      return { q: 'Write x² + ' + (2 * p) + 'x + ' + c + ' in the form (x + p)² + q.',
        opts: _buildOpts('(x + ' + p + ')² + ' + q, [ '(x + ' + p + ')² + ' + c, '(x + ' + p + ')² − ' + q, '(x + ' + (2 * p) + ')² + ' + q ]), c: 0,
        e: 'Halve the x coefficient: (x + ' + p + ')². This expands to x² + ' + (2 * p) + 'x + ' + (p * p) + ', so you need ' + c + ' − ' + (p * p) + ' = ' + q + ' more: (x + ' + p + ')² + ' + q + '.' };
  }},
  // x² + 2px + c with c < p² → (x + p)² − q
  { depth: 'medium', gen: function () {
      var p = _randInt(3, 6), c;
      do { c = _randInt(1, 8); } while (p * p - c === c);
      var q = p * p - c;
      return { q: 'Write x² + ' + (2 * p) + 'x + ' + c + ' in completed-square form.',
        opts: _buildOpts('(x + ' + p + ')² − ' + q, [ '(x + ' + p + ')² + ' + q, '(x − ' + p + ')² − ' + q, '(x + ' + p + ')² − ' + c ]), c: 0,
        e: '(x + ' + p + ')² = x² + ' + (2 * p) + 'x + ' + (p * p) + ', which is ' + q + ' too big, so subtract it: (x + ' + p + ')² − ' + q + '.' };
  }},
  // x² − 2px + c → (x − p)² + q
  { depth: 'medium', gen: function () {
      var p = _randInt(2, 5), q = _randInt(1, 9), c = p * p + q;
      return { q: 'Write x² − ' + (2 * p) + 'x + ' + c + ' in completed-square form.',
        opts: _buildOpts('(x − ' + p + ')² + ' + q, [ '(x + ' + p + ')² + ' + q, '(x − ' + p + ')² − ' + q, '(x − ' + (2 * p) + ')² + ' + q ]), c: 0,
        e: 'Halve −' + (2 * p) + ' to get −' + p + ': (x − ' + p + ')² = x² − ' + (2 * p) + 'x + ' + (p * p) + ', then add ' + q + ' to reach ' + c + '.' };
  }},
  // solve by completing the square (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(2, 5), k;
      do { k = _randInt(1, p + 2); } while (k === p);
      var c = p * p - k * k;
      var cStr = c < 0 ? '− ' + (-c) : '+ ' + c;
      return { q: 'Solve x² + ' + (2 * p) + 'x ' + cStr + ' = 0 by completing the square.',
        opts: _buildOpts('x = ' + (k - p) + ' or x = ' + (-p - k), [ 'x = ' + (p - k) + ' or x = ' + (p + k), 'x = ' + (k - p) + ' only', 'x = ' + p + ' or x = −' + k ]), c: 0,
        e: '(x + ' + p + ')² − ' + (k * k) + ' = 0, so (x + ' + p + ')² = ' + (k * k) + ', giving x + ' + p + ' = ±' + k + ', so x = ' + (k - p) + ' or x = ' + (-p - k) + '.' };
  }},
  // minimum value from completing the square (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(2, 5), q;
      do { q = _randInt(2, 9); } while (q === p);
      var c = p * p + q;
      return { q: 'By completing the square, find the minimum value of x² + ' + (2 * p) + 'x + ' + c + '.',
        opts: _buildOpts('' + q, [ '' + c, '−' + p, '' + (p * p - c) ]), c: 0,
        e: 'x² + ' + (2 * p) + 'x + ' + c + ' = (x + ' + p + ')² + ' + q + '. The squared bracket is at least 0, so the minimum value is ' + q + ' (when x = −' + p + ').' };
  }}
];

// ── m11i-01-3 — Turning Points & Sketching ───────────────────────────────────
TEST_GENERATORS["m11i-01-3"] = [
  // turning point of y = (x + p)² + q
  { depth: 'medium', gen: function () {
      var p = _randInt(1, 6), q = _randInt(1, 9);
      return { q: 'State the turning point of y = (x + ' + p + ')² + ' + q + '.',
        opts: _buildOpts('(−' + p + ', ' + q + ')', [ '(' + p + ', ' + q + ')', '(−' + p + ', −' + q + ')', '(' + q + ', −' + p + ')' ]), c: 0,
        e: 'The bracket is zero when x = −' + p + ', and there y = ' + q + '. So the minimum point is (−' + p + ', ' + q + '). Watch the sign: (x + ' + p + ')² turns at x = −' + p + ', not +' + p + '.' };
  }},
  // turning point of y = (x − p)² + q
  { depth: 'medium', gen: function () {
      var p = _randInt(1, 6), q = _randInt(1, 9);
      return { q: 'State the turning point of y = (x − ' + p + ')² − ' + q + '.',
        opts: _buildOpts('(' + p + ', −' + q + ')', [ '(−' + p + ', −' + q + ')', '(' + p + ', ' + q + ')', '(−' + q + ', ' + p + ')' ]), c: 0,
        e: 'The bracket is zero when x = ' + p + ', and there y = −' + q + '. So the turning point is (' + p + ', −' + q + ').' };
  }},
  // y-intercept of completed-square form
  { depth: 'medium', gen: function () {
      var p = _randInt(3, 6), q;
      do { q = _randInt(1, 9); } while (q === p * p || 2 * p + q === p * p);
      var y0 = p * p + q;
      return { q: 'Where does y = (x + ' + p + ')² + ' + q + ' cross the y-axis?',
        opts: _buildOpts('(0, ' + y0 + ')', [ '(0, ' + q + ')', '(0, ' + (p * p) + ')', '(0, ' + (2 * p + q) + ')' ]), c: 0,
        e: 'Put x = 0: y = ' + p + '² + ' + q + ' = ' + y0 + '. The y-intercept is NOT just the +' + q + ' on the end in this form.' };
  }},
  // turning point of x² + 2px + c (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(2, 5), q = _randInt(1, 8), c = p * p + q;
      return { q: 'Find the turning point of y = x² + ' + (2 * p) + 'x + ' + c + '.',
        opts: _buildOpts('(−' + p + ', ' + q + ')', [ '(' + p + ', ' + q + ')', '(−' + p + ', ' + c + ')', '(−' + (2 * p) + ', ' + c + ')' ]), c: 0,
        e: 'Complete the square: (x + ' + p + ')² + ' + q + ', so the minimum is at (−' + p + ', ' + q + '). The y-value is ' + c + ' − ' + (p * p) + ' = ' + q + ', not ' + c + '.' };
  }},
  // how many roots from the completed-square form (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(1, 5), q = _randInt(1, 9), up = _randInt(0, 1) === 1;
      var ans = up ? 'None' : 'Two';
      var form = up ? '(x − ' + p + ')² + ' + q : '(x − ' + p + ')² − ' + q;
      return { q: 'How many times does the graph of y = ' + form + ' cross the x-axis?',
        opts: _buildOpts(ans, [ up ? 'Two' : 'None', 'One', 'It depends on x' ]), c: 0,
        e: 'The minimum point is (' + p + ', ' + (up ? q : -q) + '). ' + (up ? 'The minimum is above the x-axis, so the graph never crosses it: no real roots.' : 'The minimum is below the x-axis, so the U-shaped graph crosses it twice: two real roots.') };
  }}
];
