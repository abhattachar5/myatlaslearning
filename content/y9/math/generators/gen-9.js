// content/y9/math/generators/gen-9.js — Year 9 Maths Topic 9 (Algebra) generators.
// Covers simplifying (collect like terms) and substitution. Expanding/factorising
// uses its static bank. Uses _randInt/_buildOpts. Validated by check-generators.js.

// ── m9i-09-1 — Notation & Simplifying Expressions ────────────────────────────
TEST_GENERATORS["m9i-09-1"] = [
  // collect a single letter
  { depth: 'medium', gen: function () {
      var L = ['x', 'y', 'a', 'n'][_randInt(0, 3)], a = _randInt(3, 9), b = _randInt(2, 6);
      return { q: 'Simplify ' + a + L + ' + ' + b + L + '.',
        opts: _buildOpts((a + b) + L, [ (a * b) + L, (a + b) + L + '²', '' + (a + b) ]), c: 0,
        e: 'Add the coefficients ' + a + ' + ' + b + ' = ' + (a + b) + ', keeping ' + L + ': ' + (a + b) + L + '.' };
  }},
  // collect with a subtraction
  { depth: 'medium', gen: function () {
      var L = ['x', 'y', 'm', 'p'][_randInt(0, 3)], a = _randInt(6, 12), b = _randInt(2, 5);
      return { q: 'Simplify ' + a + L + ' − ' + b + L + '.',
        opts: _buildOpts((a - b) + L, [ (a + b) + L, (a - b) + L + '²', '' + (a - b) ]), c: 0,
        e: 'Subtract the coefficients ' + a + ' − ' + b + ' = ' + (a - b) + ', keeping ' + L + ': ' + (a - b) + L + '.' };
  }},
  // two letters
  { depth: 'medium', gen: function () {
      var a = _randInt(3, 8), b = _randInt(2, 6), c = _randInt(1, a - 1), d = _randInt(1, 5);
      return { q: 'Simplify ' + a + 'a + ' + b + 'b − ' + c + 'a + ' + d + 'b.',
        opts: _buildOpts((a - c) + 'a + ' + (b + d) + 'b', [ (a + c) + 'a + ' + (b + d) + 'b', (a - c) + 'a + ' + (b - d) + 'b', (a - c + b + d) + 'ab' ]), c: 0,
        e: 'a terms: ' + a + ' − ' + c + ' = ' + (a - c) + '; b terms: ' + b + ' + ' + d + ' = ' + (b + d) + '.' };
  }},
  // multiply terms (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 6), b = _randInt(2, 6), L = ['x', 'y', 'p'][_randInt(0, 2)];
      if (a === 2 && b === 2) b = 3;
      return { q: 'Simplify ' + a + L + ' × ' + b + L + '.',
        opts: _buildOpts((a * b) + L + '²', [ (a + b) + L + '²', (a * b) + L, (a * b) + '²' + L ]), c: 0,
        e: 'Multiply numbers ' + a + ' × ' + b + ' = ' + (a * b) + ' and letters ' + L + ' × ' + L + ' = ' + L + '²: ' + (a * b) + L + '².' };
  }},
  // simplify with a constant (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var L = ['x', 'y', 'n'][_randInt(0, 2)], a = _randInt(4, 9), b = _randInt(2, 4), c = _randInt(2, 7), d = _randInt(1, c - 1);
      return { q: 'Simplify ' + a + L + ' + ' + c + ' − ' + b + L + ' − ' + d + '.',
        opts: _buildOpts((a - b) + L + ' + ' + (c - d), [ (a + b) + L + ' + ' + (c - d), (a - b) + L + ' + ' + (c + d), (a - b) + L + ' − ' + (c - d) ]), c: 0,
        e: L + ' terms: ' + a + ' − ' + b + ' = ' + (a - b) + '; numbers: ' + c + ' − ' + d + ' = ' + (c - d) + '.' };
  }}
];

// ── m9i-09-3 — Substitution & Formulae ───────────────────────────────────────
TEST_GENERATORS["m9i-09-3"] = [
  // linear in two variables
  { depth: 'medium', gen: function () {
      var p = _randInt(2, 6), q = _randInt(2, 6), x = _randInt(2, 7), y = _randInt(2, 7);
      var ans = p * x + q * y, addErr = p + x + q + y;
      if (addErr === ans) addErr = ans + 5;
      return { q: 'Find ' + p + 'a + ' + q + 'b when a = ' + x + ' and b = ' + y + '.',
        opts: _buildOpts('' + ans, [ '' + addErr, '' + ((p + q) * (x + y)), '' + (ans + 1) ]), c: 0,
        e: '' + p + '×' + x + ' + ' + q + '×' + y + ' = ' + (p * x) + ' + ' + (q * y) + ' = ' + ans + '.' };
  }},
  // with a square term
  { depth: 'medium', gen: function () {
      var x = _randInt(3, 8), b = _randInt(1, 9);
      var ans = x * x - b;
      return { q: 'Find x² − ' + b + ' when x = ' + x + '.',
        opts: _buildOpts('' + ans, [ '' + (2 * x - b), '' + (x * x + b), '' + (x * 2 - b + 1) ]), c: 0,
        e: 'Powers first: ' + x + '² = ' + (x * x) + ', then ' + (x * x) + ' − ' + b + ' = ' + ans + '.' };
  }},
  // formula v = u + at
  { depth: 'medium', gen: function () {
      var u = _randInt(2, 9), a = _randInt(2, 6), t = _randInt(2, 5);
      if (a === 2 && t === 2) t = 3;
      var ans = u + a * t;
      return { q: 'Use v = u + at with u = ' + u + ', a = ' + a + ', t = ' + t + '. Find v.',
        opts: _buildOpts('' + ans, [ '' + ((u + a) * t), '' + (u + a + t), '' + (ans - 1) ]), c: 0,
        e: 'v = ' + u + ' + ' + a + '×' + t + ' = ' + u + ' + ' + (a * t) + ' = ' + ans + ' (multiply before adding).' };
  }},
  // negative substitution (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(2, 6), x = _randInt(2, 6), q = _randInt(2, 6), y = _randInt(2, 7);
      var ans = p * (-x) + q * y;
      return { q: 'Find ' + p + 'p + ' + q + 'q when p = −' + x + ' and q = ' + y + '.',
        opts: _buildOpts('' + ans, [ '' + (p * x + q * y), '' + (-(p * x) - q * y), '' + (ans - 2) ]), c: 0,
        e: '' + p + '×(−' + x + ') + ' + q + '×' + y + ' = ' + (-p * x) + ' + ' + (q * y) + ' = ' + ans + '.' };
  }},
  // 2x² vs (2x)² trap (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var k = _randInt(2, 5), x = _randInt(2, 5);
      var ans = k * x * x;
      return { q: 'Find ' + k + 'x² when x = ' + x + '.',
        opts: _buildOpts('' + ans, [ '' + (k * x) * (k * x), '' + (k * x), '' + (ans + k) ]), c: 0,
        e: 'The power is only on x: ' + k + ' × ' + x + '² = ' + k + ' × ' + (x * x) + ' = ' + ans + '. (' + k + 'x)² would be ' + ((k * x) * (k * x)) + '.' };
  }}
];
