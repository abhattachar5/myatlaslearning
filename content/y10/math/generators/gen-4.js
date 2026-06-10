// content/y10/math/generators/gen-4.js — Year 10 Maths Topic 4 (Solving Quadratics).
// Generators for both islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-04-1 — Solving by Factorising ───────────────────────────────────────
TEST_GENERATORS["m10i-04-1"] = [
  // x² + Sx + P = 0 → both roots negative
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = _randInt(4, 6), S = a + b, P = a * b;
      return { q: 'Solve x² + ' + S + 'x + ' + P + ' = 0.',
        opts: _buildOpts('x = −' + a + ' or x = −' + b, [ 'x = ' + a + ' or x = ' + b, 'x = ' + a + ' or x = −' + b, 'x = −' + a + ' or x = ' + b ]), c: 0,
        e: 'Factorise: (x + ' + a + ')(x + ' + b + ') = 0, so x + ' + a + ' = 0 or x + ' + b + ' = 0, giving x = −' + a + ' or x = −' + b + '. The solutions are the values that make each bracket zero — note the sign change.' };
  }},
  // x² − Sx + P = 0 → both roots positive
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 4), b = a + _randInt(1, 3), S = a + b, P = a * b;
      return { q: 'Solve x² − ' + S + 'x + ' + P + ' = 0.',
        opts: _buildOpts('x = ' + a + ' or x = ' + b, [ 'x = −' + a + ' or x = −' + b, 'x = −' + a + ' or x = ' + b, 'x = ' + a + ' or x = −' + b ]), c: 0,
        e: 'Factorise: (x − ' + a + ')(x − ' + b + ') = 0, so x = ' + a + ' or x = ' + b + '.' };
  }},
  // x² − dx − P = 0 → one positive, one negative root
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = a + _randInt(1, 3), d = b - a, P = a * b;
      return { q: 'Solve x² − ' + d + 'x − ' + P + ' = 0.',
        opts: _buildOpts('x = −' + a + ' or x = ' + b, [ 'x = ' + a + ' or x = −' + b, 'x = ' + a + ' or x = ' + b, 'x = −' + a + ' or x = −' + b ]), c: 0,
        e: 'Factorise: (x + ' + a + ')(x − ' + b + ') = 0, so x = −' + a + ' or x = ' + b + '. Check: −' + a + ' × ' + b + ' = −' + P + ' ✓ and ' + a + ' − ' + b + ' = −' + d + ' ✓.' };
  }},
  // x² − kx = 0 — the "lost solution" trap
  { depth: 'medium', gen: function () {
      var k = _randInt(3, 9);
      return { q: 'Solve x² − ' + k + 'x = 0.',
        opts: _buildOpts('x = 0 or x = ' + k, [ 'x = ' + k + ' only', 'x = 0 only', 'x = 0 or x = −' + k ]), c: 0,
        e: 'Factorise: x(x − ' + k + ') = 0, so x = 0 or x = ' + k + '. Dividing both sides by x loses the x = 0 solution — always factorise instead.' };
  }},
  // x² = a² (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 9);
      return { q: 'Solve x² = ' + (a * a) + '.',
        opts: _buildOpts('x = ' + a + ' or x = −' + a, [ 'x = ' + a + ' only', 'x = −' + a + ' only', 'x = ±' + (a * a) ]), c: 0,
        e: 'Square rooting gives BOTH x = ' + a + ' and x = −' + a + ', because (−' + a + ')² = ' + (a * a) + ' too. Or rearrange: x² − ' + (a * a) + ' = (x + ' + a + ')(x − ' + a + ') = 0.' };
  }},
  // build the equation from its roots (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4), b = a + _randInt(1, 4), S = a + b, P = a * b;
      return { q: 'A quadratic equation has solutions x = ' + a + ' and x = ' + b + '. Which equation is it?',
        opts: _buildOpts('x² − ' + S + 'x + ' + P + ' = 0', [ 'x² + ' + S + 'x + ' + P + ' = 0', 'x² − ' + P + 'x + ' + S + ' = 0', 'x² − ' + S + 'x − ' + P + ' = 0' ]), c: 0,
        e: 'Work backwards: (x − ' + a + ')(x − ' + b + ') = 0 expands to x² − ' + S + 'x + ' + P + ' = 0.' };
  }}
];

// ── m10i-04-2 — Roots, Graphs & Problems ─────────────────────────────────────
TEST_GENERATORS["m10i-04-2"] = [
  // y-intercept of a quadratic
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 6), c = _randInt(1, 9);
      if (c === b) c = (c % 9) + 1;
      return { q: 'Where does the graph of y = x² + ' + b + 'x + ' + c + ' cross the y-axis?',
        opts: _buildOpts('(0, ' + c + ')', [ '(' + c + ', 0)', '(0, ' + b + ')', '(0, −' + c + ')' ]), c: 0,
        e: 'On the y-axis x = 0, so y = 0 + 0 + ' + c + ' = ' + c + '. The graph crosses at (0, ' + c + ').' };
  }},
  // roots from factorised form
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 4), b = a + _randInt(1, 4);
      return { q: 'The graph of y = (x − ' + a + ')(x − ' + b + ') crosses the x-axis at:',
        opts: _buildOpts('x = ' + a + ' and x = ' + b, [ 'x = −' + a + ' and x = −' + b, 'x = ' + (a * b) + ' only', 'x = 0 and x = ' + (a + b) ]), c: 0,
        e: 'The graph crosses the x-axis where y = 0: (x − ' + a + ')(x − ' + b + ') = 0 gives x = ' + a + ' and x = ' + b + '.' };
  }},
  // turning point x-coordinate is midway between the roots
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = a + 2 * _randInt(1, 2), mid = (a + b) / 2;
      return { q: 'The graph of y = (x − ' + a + ')(x − ' + b + ') has its turning point at which x-value?',
        opts: _buildOpts('x = ' + mid, [ 'x = ' + (a + b), 'x = ' + (a * b), 'x = ' + a ]), c: 0,
        e: 'A parabola is symmetric, so the turning point sits midway between the roots ' + a + ' and ' + b + ': x = (' + a + ' + ' + b + ') ÷ 2 = ' + mid + '.' };
  }},
  // minimum value from completed-square form (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(1, 5), q;
      do { q = _randInt(1, 9); } while (q === p);
      return { q: 'What is the minimum value of y = (x + ' + p + ')² + ' + q + '?',
        opts: _buildOpts('' + q, [ '−' + p, '' + p, '0' ]), c: 0,
        e: '(x + ' + p + ')² is never negative and is 0 when x = −' + p + ', so the smallest y can be is 0 + ' + q + ' = ' + q + '. (−' + p + ' is the x-coordinate of the minimum, not the minimum value.)' };
  }},
  // rectangle area word problem (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r = _randInt(3, 7), a = _randInt(2, 4), A = r * (r + a);
      return { q: 'A rectangle has width x m and length (x + ' + a + ') m. Its area is ' + A + ' m². Find x.',
        opts: _buildOpts('' + r, [ '' + (r + a), '' + (r + 1), '' + A ]), c: 0,
        e: 'Area: x(x + ' + a + ') = ' + A + ', so x² + ' + a + 'x − ' + A + ' = 0, which factorises as (x − ' + r + ')(x + ' + (r + a) + ') = 0. x must be positive, so x = ' + r + '. (' + (r + a) + ' is the length, not x.)' };
  }}
];
