// content/y11/math/generators/gen-9.js — Year 11 Maths Topic 9 (Vectors).
// Vector arithmetic generates; geometric proof uses its static bank.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _y11vec(a, b) { return '(' + a + ', ' + b + ')'; }

// ── m11i-09-1 — Vector Arithmetic ────────────────────────────────────────────
TEST_GENERATORS["m11i-09-1"] = [
  // add two vectors
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 6), b = _randInt(1, 6), c = _randInt(1, 6), d = _randInt(1, 6);
      if (b === c) c = (c % 6) + 1;
      return { q: 'Work out ' + _y11vec(a, b) + ' + ' + _y11vec(c, d) + '.',
        opts: _buildOpts(_y11vec(a + c, b + d), [ _y11vec(a - c, b - d), _y11vec(a + c, b - d), _y11vec(a + b, c + d) ]), c: 0,
        e: 'Add componentwise: (' + a + '+' + c + ', ' + b + '+' + d + ') = ' + _y11vec(a + c, b + d) + '.' };
  }},
  // subtract two vectors
  { depth: 'medium', gen: function () {
      var a = _randInt(4, 9), b = _randInt(4, 9), c = _randInt(1, 3), d = _randInt(1, 3);
      return { q: 'Work out ' + _y11vec(a, b) + ' − ' + _y11vec(c, d) + '.',
        opts: _buildOpts(_y11vec(a - c, b - d), [ _y11vec(a + c, b + d), _y11vec(a - c, b + d), _y11vec(c - a, d - b) ]), c: 0,
        e: 'Subtract componentwise: (' + a + '−' + c + ', ' + b + '−' + d + ') = ' + _y11vec(a - c, b - d) + '.' };
  }},
  // scalar multiple
  { depth: 'medium', gen: function () {
      var k = _randInt(3, 5), a = _randInt(1, 5), b = _randInt(-4, 5);
      if (b === 0) b = 2;
      return { q: 'Work out ' + k + ' × ' + _y11vec(a, b) + '.',
        opts: _buildOpts(_y11vec(k * a, k * b), [ _y11vec(a, b), _y11vec(k * a, b), _y11vec(k + a, k + b) ]), c: 0,
        e: 'Multiply each component by ' + k + ': ' + _y11vec(k * a, k * b) + '.' };
  }},
  // scalar combination (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var k = _randInt(2, 4), a = _randInt(1, 4), b = _randInt(1, 4), c = _randInt(1, 5), d = _randInt(1, 5);
      return { q: 'Work out ' + k + _y11vec(a, b) + ' + ' + _y11vec(c, d) + '.',
        opts: _buildOpts(_y11vec(k * a + c, k * b + d), [ _y11vec(a + c, b + d), _y11vec(k * a + c, k * b - d), _y11vec(k * (a + c), k * (b + d)) ]), c: 0,
        e: '' + k + _y11vec(a, b) + ' = ' + _y11vec(k * a, k * b) + '; add ' + _y11vec(c, d) + ' → ' + _y11vec(k * a + c, k * b + d) + '.' };
  }}
];
