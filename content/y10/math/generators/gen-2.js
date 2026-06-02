// content/y10/math/generators/gen-2.js — Year 10 Maths Topic 2 (Simultaneous Equations).
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _y10pair(x, y) { return 'x = ' + x + ', y = ' + y; }

// ── m10i-02-1 — Elimination Method ───────────────────────────────────────────
TEST_GENERATORS["m10i-02-1"] = [
  // same y-coefficient → subtract
  { depth: 'medium', gen: function () {
      var x = _randInt(2, 8), y = _randInt(1, 7), b = _randInt(1, 3), a = b + _randInt(1, 3);
      if (x === y) y = (y % 7) + 1;
      var p = a * x + b * y, q = b * x + b * y;  // ax + by = p ; bx + by = q
      return { q: 'Solve ' + a + 'x + ' + b + 'y = ' + p + ' and ' + b + 'x + ' + b + 'y = ' + q + '.',
        opts: _buildOpts(_y10pair(x, y), [ _y10pair(y, x), _y10pair(x + 1, y), _y10pair(x, y + 1) ]), c: 0,
        e: 'Subtract the equations to remove y: ' + (a - b) + 'x = ' + (p - q) + ' → x = ' + x + '. Then y = ' + y + '.' };
  }},
  // x + y and x − y
  { depth: 'medium', gen: function () {
      var x = _randInt(3, 9), y = _randInt(1, x - 1), s = x + y, d = x - y;
      return { q: 'Solve x + y = ' + s + ' and x − y = ' + d + '.',
        opts: _buildOpts(_y10pair(x, y), [ _y10pair(y, x), _y10pair(x, y - 1), _y10pair(x + 1, y) ]), c: 0,
        e: 'Add the equations: 2x = ' + (s + d) + ' → x = ' + x + '. Then y = ' + y + '.' };
  }},
  // same x-coefficient → subtract (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var x = _randInt(2, 6), y = _randInt(2, 7), a = _randInt(1, 3), d = _randInt(1, 3);
      if (x === y) y = (y % 7) + 1;
      var p = a * x + (d + 1) * y, q = a * x + 1 * y;   // ax + (d+1)y = p, ax + y = q
      return { q: 'Solve ' + a + 'x + ' + (d + 1) + 'y = ' + p + ' and ' + a + 'x + y = ' + q + '.',
        opts: _buildOpts(_y10pair(x, y), [ _y10pair(y, x), _y10pair(x, y + 1), _y10pair(x - 1, y) ]), c: 0,
        e: 'Subtract to remove x: ' + d + 'y = ' + (p - q) + ' → y = ' + y + '. Then x = ' + x + '.' };
  }},
  // scale one equation first (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var x = _randInt(2, 6), y = _randInt(2, 6);
      if (x === y) y = (y % 6) + 1;
      var p = 2 * x + y, q = x + 3 * y;      // 2x + y = p, x + 3y = q
      return { q: 'Solve 2x + y = ' + p + ' and x + 3y = ' + q + '.',
        opts: _buildOpts(_y10pair(x, y), [ _y10pair(y, x), _y10pair(x + 1, y), _y10pair(x, y - 1) ]), c: 0,
        e: 'From the first, y = ' + p + ' − 2x; substitute into the second to get x = ' + x + ', y = ' + y + '.' };
  }}
];

// ── m10i-02-2 — Substitution & Setting Up ────────────────────────────────────
TEST_GENERATORS["m10i-02-2"] = [
  // y = mx + c into ax + y = k
  { depth: 'medium', gen: function () {
      var x = _randInt(2, 7), m = _randInt(1, 3), c = _randInt(1, 5), y = m * x + c, a = _randInt(1, 3);
      var k = a * x + y;
      return { q: 'Solve y = ' + m + 'x + ' + c + ' and ' + a + 'x + y = ' + k + '.',
        opts: _buildOpts(_y10pair(x, y), [ _y10pair(y, x), _y10pair(x + 1, y), _y10pair(x, y + 1) ]), c: 0,
        e: 'Substitute: ' + a + 'x + (' + m + 'x + ' + c + ') = ' + k + ' → ' + (a + m) + 'x = ' + (k - c) + ' → x = ' + x + ', y = ' + y + '.' };
  }},
  // y = kx into x + y = s
  { depth: 'medium', gen: function () {
      var x = _randInt(2, 7), k = _randInt(2, 4), y = k * x, s = x + y;
      return { q: 'Solve y = ' + k + 'x and x + y = ' + s + '.',
        opts: _buildOpts(_y10pair(x, y), [ _y10pair(y, x), _y10pair(x, y - k), _y10pair(x + 1, y) ]), c: 0,
        e: 'Substitute: x + ' + k + 'x = ' + s + ' → ' + (1 + k) + 'x = ' + s + ' → x = ' + x + ', y = ' + y + '.' };
  }},
  // two numbers sum and difference (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var big = _randInt(7, 15), small = _randInt(2, big - 2), s = big + small, d = big - small;
      return { q: 'Two numbers add to ' + s + ' and differ by ' + d + '. What are they?',
        opts: _buildOpts(big + ' and ' + small, [ (big + 1) + ' and ' + (small - 1), (big - 1) + ' and ' + (small + 1), s + ' and ' + d ]), c: 0,
        e: 'x + y = ' + s + ', x − y = ' + d + '. Add: 2x = ' + (s + d) + ' → x = ' + big + ', y = ' + small + '.' };
  }},
  // cost problem (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(1, 4), r = _randInt(1, 4), na = _randInt(2, 4);
      var totalA = (na + 1) * p + r, totalB = 1 * p + r;   // (na+1) pens + 1 ruler, 1 pen + 1 ruler
      return { q: '' + (na + 1) + ' pens and a ruler cost £' + totalA + '; 1 pen and a ruler cost £' + totalB + '. Find the pen price.',
        opts: _buildOpts('£' + p, [ '£' + r, '£' + (p + 1), '£' + totalA ]), c: 0,
        e: 'Subtract: ' + na + ' pens cost £' + (totalA - totalB) + ', so one pen = £' + p + '.' };
  }}
];
