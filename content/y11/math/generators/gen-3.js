// content/y11/math/generators/gen-3.js — Year 11 Maths Topic 3 (Simultaneous Equations: linear & quadratic).
// Generators for both islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-03-1 — Linear & Quadratic by Substitution ───────────────────────────
TEST_GENERATORS["m11i-03-1"] = [
  // y = x² and y = mx
  { depth: 'medium', gen: function () {
      var m = _randInt(2, 6);
      return { q: 'Solve simultaneously: y = x² and y = ' + m + 'x.',
        opts: _buildOpts('x = 0 and x = ' + m, [ 'x = ' + m + ' only', 'x = 0 only', 'x = ±' + m ]), c: 0,
        e: 'Substitute: x² = ' + m + 'x, so x² − ' + m + 'x = 0, so x(x − ' + m + ') = 0. That gives x = 0 (with y = 0) and x = ' + m + ' (with y = ' + (m * m) + '). Dividing by x loses a solution.' };
  }},
  // y = x² + bx + c meets the horizontal line y = c
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 7), c = _randInt(1, 9);
      if (c === b) c = (c % 9) + 1;
      return { q: 'Find the x-values where y = x² + ' + b + 'x + ' + c + ' meets the line y = ' + c + '.',
        opts: _buildOpts('x = 0 and x = −' + b, [ 'x = 0 and x = ' + b, 'x = −' + b + ' only', 'x = ' + c + ' and x = −' + b ]), c: 0,
        e: 'Set them equal: x² + ' + b + 'x + ' + c + ' = ' + c + ', so x² + ' + b + 'x = 0, so x(x + ' + b + ') = 0: x = 0 or x = −' + b + '.' };
  }},
  // line y = mx + c meets y = x² (constructed roots)
  { depth: 'greater-depth', gen: function () {
      var r = _randInt(3, 6), s = _randInt(1, r - 1), m = r - s, c = r * s;
      return { q: 'Solve simultaneously: y = x² and y = ' + (m === 1 ? '' : m) + 'x + ' + c + '.',
        opts: _buildOpts('x = ' + r + ' or x = −' + s, [ 'x = −' + r + ' or x = ' + s, 'x = ' + r + ' or x = ' + s, 'x = −' + r + ' or x = −' + s ]), c: 0,
        e: 'x² = ' + (m === 1 ? '' : m) + 'x + ' + c + ' rearranges to x² − ' + (m === 1 ? '' : m) + 'x − ' + c + ' = 0 = (x − ' + r + ')(x + ' + s + '). So x = ' + r + ' or x = −' + s + '.' };
  }},
  // circle and line via Pythagorean triples (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13]], t = triples[_randInt(0, 2)];
      var p = t[0], q = t[1], h = t[2];
      return { q: 'The line x + y = ' + (p + q) + ' meets the circle x² + y² = ' + (h * h) + ' at two points. What are they?',
        opts: _buildOpts('(' + p + ', ' + q + ') and (' + q + ', ' + p + ')', [ '(' + p + ', ' + p + ') and (' + q + ', ' + q + ')', '(' + h + ', 0) and (0, ' + h + ')', '(−' + p + ', ' + q + ') and (' + q + ', −' + p + ')' ]), c: 0,
        e: 'Substitute y = ' + (p + q) + ' − x into the circle equation; the quadratic factorises with roots x = ' + p + ' and x = ' + q + '. Check: ' + p + '² + ' + q + '² = ' + (p * p) + ' + ' + (q * q) + ' = ' + (h * h) + ' ✓.' };
  }},
  // count the possibilities
  { depth: 'medium', gen: function () {
      var shapes = ['circle', 'parabola'], shape = shapes[_randInt(0, 1)];
      return { q: 'How many points of intersection can a straight line have with a ' + shape + '?',
        opts: _buildOpts('0, 1 or 2', [ 'Always exactly 2', '0 or 2 only', '1 or 2 only' ]), c: 0,
        e: 'A line can miss the ' + shape + ' (0 points), touch it as a tangent (1 point) or cut through it (2 points).' };
  }}
];

// ── m11i-03-2 — Graphical Solutions & Problems ───────────────────────────────
TEST_GENERATORS["m11i-03-2"] = [
  // horizontal line vs parabola y = x²
  { depth: 'medium', gen: function () {
      var c = _randInt(0, 1) === 0 ? -_randInt(1, 5) : _randInt(1, 5);
      var ans = c > 0 ? 'Two' : 'None';
      return { q: 'How many times does the line y = ' + c + ' cross the graph of y = x²?',
        opts: _buildOpts(ans, [ c > 0 ? 'None' : 'Two', 'One', 'Three' ]), c: 0,
        e: 'y = x² is never negative and equals ' + (c > 0 ? c + ' at x = ±√' + c : c + ' nowhere') + '. ' + (c > 0 ? 'So the horizontal line crosses twice.' : 'A negative horizontal line never meets it.') };
  }},
  // which equation do the intersections solve?
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 6), c = _randInt(3, 9), k;
      do { k = _randInt(1, 9); } while (k === c);
      var d = c - k, dStr = d > 0 ? '+ ' + d : '− ' + (-d);
      return { q: 'The graphs of y = x² + ' + b + 'x + ' + c + ' and y = ' + k + ' intersect. Which equation gives the x-coordinates of the intersection points?',
        opts: _buildOpts('x² + ' + b + 'x ' + dStr + ' = 0', [ 'x² + ' + b + 'x + ' + (c + k) + ' = 0', 'x² + ' + b + 'x + ' + c + ' = 0', 'x² ' + dStr + ' = 0' ]), c: 0,
        e: 'At an intersection the y-values are equal: x² + ' + b + 'x + ' + c + ' = ' + k + '. Subtract ' + k + ' from both sides: x² + ' + b + 'x ' + dStr + ' = 0.' };
  }},
  // discriminant decides intersections of y = x² + c and y = mx (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var m = _randInt(2, 6), c = _randInt(1, 9), D = m * m - 4 * c;
      var ans = D > 0 ? 'Two' : (D === 0 ? 'One (the line is a tangent)' : 'None');
      var others = ['Two', 'One (the line is a tangent)', 'None'].filter(function (s) { return s !== ans; });
      others.push('Cannot be determined');
      return { q: 'The line y = ' + m + 'x meets the curve y = x² + ' + c + ' where x² − ' + m + 'x + ' + c + ' = 0. The discriminant is ' + D + '. How many intersection points are there?',
        opts: _buildOpts(ans, others), c: 0,
        e: 'The discriminant of the combined equation counts the intersections: ' + D + (D > 0 ? ' > 0 → two crossing points.' : (D === 0 ? ' = 0 → exactly one point, so the line just touches the curve (a tangent).' : ' < 0 → the line misses the curve entirely.')) };
  }},
  // read solutions from described graph (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 3), b = a + _randInt(1, 3);
      return { q: 'A curve and a line intersect at the points (' + a + ', ' + (a * a) + ') and (' + b + ', ' + (b * b) + '). What are the solutions of the simultaneous equations?',
        opts: _buildOpts('x = ' + a + ', y = ' + (a * a) + ' and x = ' + b + ', y = ' + (b * b), [ 'x = ' + a + ' and y = ' + b, 'x = ' + (a * a) + ', y = ' + a + ' and x = ' + (b * b) + ', y = ' + b, 'x = ' + (a + b) + ', y = ' + (a * a + b * b) ]), c: 0,
        e: 'Each intersection point IS a solution pair: read x and y together. So x = ' + a + ' with y = ' + (a * a) + ', or x = ' + b + ' with y = ' + (b * b) + '.' };
  }}
];
