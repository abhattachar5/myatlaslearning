// content/y9/math/generators/gen-1.js — Year 9 Maths Topic 1 (Surds) generators.
// Loads after engine/test-generator.js (TEST_GENERATORS + _randInt/_buildOpts).
// ≈5–6 generators per island, ≥2 tagged 'greater-depth'. Authored by the
// atlas-content skill; validated by scripts/check-generators.js.

// Squarefree numbers (no square factor) — safe radicands that stay surds.
var _Y9_SF  = [2, 3, 5, 6, 7, 10, 11, 13, 14, 15];
// Coprime squarefree pairs → product is squarefree (already-simplest result).
var _Y9_PRP = [[2,3],[2,5],[3,5],[2,7],[3,7],[5,7],[2,11],[3,11],[5,3],[7,2]];
function _y9pick(a)      { return a[_randInt(0, a.length - 1)]; }
function _y9sample(a, k) { var c = a.slice(), o = []; while (o.length < k && c.length) { o.push(c.splice(_randInt(0, c.length - 1), 1)[0]); } return o; }

// ── m9i-01-1 — Simplifying Surds ────────────────────────────────────────────
TEST_GENERATORS["m9i-01-1"] = [
  { depth: 'medium', gen: function () {
      var s = _randInt(2, 5), m = _Y9_SF[_randInt(0, 5)], n = s * s * m, ans = s + '√' + m;
      return { q: 'Simplify √' + n + '.',
        opts: _buildOpts(ans, [ (s * s) + '√' + m, s + '√' + n, (s + 1) + '√' + m ]), c: 0,
        e: '√' + n + ' = √(' + (s * s) + ' × ' + m + ') = ' + s + '√' + m + '.' };
  }},
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 6), m = _Y9_SF[_randInt(0, 4)], n = k * k * m;
      return { q: 'Write ' + k + '√' + m + ' as a single square root in the form √N.',
        opts: _buildOpts('√' + n, [ '√' + (k * m), '√' + (n + k), '√' + (n - m) ]), c: 0,
        e: k + '√' + m + ' = √(' + (k * k) + ' × ' + m + ') = √' + n + '.' };
  }},
  { depth: 'medium', gen: function () {
      var m = _Y9_SF[_randInt(0, 7)];
      var w = _y9sample([8,12,18,20,24,27,28,32,44,45,48,50,52,63], 3);
      return { q: 'Which of these surds is already in its simplest form?',
        opts: [ '√' + m, '√' + w[0], '√' + w[1], '√' + w[2] ], c: 0,
        e: '√' + m + ' has no square factor, so it is already simplest. √' + w[0] + ', √' + w[1] + ' and √' + w[2] + ' each contain a square factor and simplify further.' };
  }},
  { depth: 'medium', gen: function () {
      var s = _randInt(2, 6), m = _Y9_SF[_randInt(4, 8)], n = s * s * m, ans = s + '√' + m;
      return { q: 'Simplify √' + n + '.',
        opts: _buildOpts(ans, [ (s * s) + '√' + m, s + '√' + n, (s + 1) + '√' + m ]), c: 0,
        e: '√' + n + ' = ' + s + '√' + m + ', because ' + n + ' = ' + (s * s) + ' × ' + m + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var k = _randInt(2, 5), t = _randInt(2, 4), m = _Y9_SF[_randInt(0, 3)], inner = t * t * m, ans = (k * t) + '√' + m;
      return { q: 'Simplify ' + k + '√' + inner + '.',
        opts: _buildOpts(ans, [ k + '√' + m, (k * t) + '√' + inner, (k * t + 1) + '√' + m ]), c: 0,
        e: k + '√' + inner + ' = ' + k + '√(' + (t * t) + ' × ' + m + ') = ' + k + ' × ' + t + '√' + m + ' = ' + (k * t) + '√' + m + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var s = _randInt(4, 8), m = _Y9_SF[_randInt(0, 3)], n = s * s * m, ans = s + '√' + m;
      return { q: 'Simplify √' + n + '.',
        opts: _buildOpts(ans, [ (s * s) + '√' + m, s + '√' + n, (s - 1) + '√' + m ]), c: 0,
        e: 'The largest square factor of ' + n + ' is ' + (s * s) + ', so √' + n + ' = ' + s + '√' + m + '.' };
  }}
];

// ── m9i-01-2 — Adding & Subtracting Surds ───────────────────────────────────
TEST_GENERATORS["m9i-01-2"] = [
  { depth: 'medium', gen: function () {
      var a = _randInt(4, 9), b = _randInt(2, 3), m = _Y9_SF[_randInt(0, 5)], sum = a + b;
      return { q: 'Work out ' + a + '√' + m + ' + ' + b + '√' + m + '.',
        opts: _buildOpts(sum + '√' + m, [ (a * b) + '√' + m, (a - b) + '√' + m, sum + '√' + (2 * m) ]), c: 0,
        e: 'Like surds: add the coefficients ' + a + ' + ' + b + ' = ' + sum + ', and keep √' + m + '.' };
  }},
  { depth: 'medium', gen: function () {
      var a = _randInt(5, 9), b = _randInt(2, 4), m = _Y9_SF[_randInt(0, 5)], dif = a - b;
      return { q: 'Work out ' + a + '√' + m + ' − ' + b + '√' + m + '.',
        opts: _buildOpts(dif + '√' + m, [ (a + b) + '√' + m, (a * b) + '√' + m, dif + '√' + (2 * m) ]), c: 0,
        e: 'Subtract the coefficients: ' + a + ' − ' + b + ' = ' + dif + ', giving ' + dif + '√' + m + '.' };
  }},
  { depth: 'medium', gen: function () {
      var m = _Y9_SF[_randInt(0, 4)], a = _randInt(4, 8), b = _randInt(2, 4), c2 = _randInt(2, 3), res = a + b - c2;
      return { q: 'Simplify ' + a + '√' + m + ' + ' + b + '√' + m + ' − ' + c2 + '√' + m + '.',
        opts: _buildOpts(res + '√' + m, [ (a + b + c2) + '√' + m, (a - b - c2) + '√' + m, res + '√' + (2 * m) ]), c: 0,
        e: 'All like surds: (' + a + ' + ' + b + ' − ' + c2 + ')√' + m + ' = ' + res + '√' + m + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var t = _randInt(2, 4), b = _randInt(3, 7), m = _Y9_SF[_randInt(0, 3)], inner = t * t * m, res = t + b;
      return { q: 'Simplify √' + inner + ' + ' + b + '√' + m + '.',
        opts: _buildOpts(res + '√' + m, [ (1 + b) + '√' + m, (t * b) + '√' + m, res + '√' + inner ]), c: 0,
        e: '√' + inner + ' = ' + t + '√' + m + ', so ' + t + '√' + m + ' + ' + b + '√' + m + ' = ' + res + '√' + m + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var pr = _y9sample(_Y9_SF.slice(0, 6), 2), m = pr[0], k = pr[1], a = _randInt(2, 6), b = _randInt(2, 6);
      var ans = a + '√' + m + ' + ' + b + '√' + k;
      return { q: 'Simplify ' + a + '√' + m + ' + ' + b + '√' + k + '.',
        opts: [ ans, (a + b) + '√' + m, (a + b) + '√' + (m + k), (a * b) + '√' + (m * k) ], c: 0,
        e: '√' + m + ' and √' + k + ' are different surds, so the terms cannot be combined. The answer stays ' + ans + '.' };
  }}
];

// ── m9i-01-3 — Multiplying & Dividing Surds ─────────────────────────────────
TEST_GENERATORS["m9i-01-3"] = [
  { depth: 'medium', gen: function () {
      var a = _Y9_SF[_randInt(0, 7)];
      return { q: 'Work out √' + a + ' × √' + a + '.',
        opts: _buildOpts(a, [ '√' + a, a * a, '2√' + a ]), c: 0,
        e: '√' + a + ' × √' + a + ' = √(' + a + ' × ' + a + ') = √' + (a * a) + ' = ' + a + '.' };
  }},
  { depth: 'medium', gen: function () {
      var p = _y9pick(_Y9_PRP), a = p[0], b = p[1], k = _randInt(2, 4), j = _randInt(3, 5), ab = a * b, ans = (k * j) + '√' + ab;
      return { q: 'Work out ' + k + '√' + a + ' × ' + j + '√' + b + '.',
        opts: _buildOpts(ans, [ (k + j) + '√' + ab, (k * j) + '√' + (a + b), (k * j + 1) + '√' + ab ]), c: 0,
        e: 'Numbers: ' + k + ' × ' + j + ' = ' + (k * j) + '. Surds: √' + a + ' × √' + b + ' = √' + ab + '. Answer: ' + (k * j) + '√' + ab + '.' };
  }},
  { depth: 'medium', gen: function () {
      var a = _Y9_SF[_randInt(0, 9)];
      return { q: 'Work out (√' + a + ')².',
        opts: _buildOpts(a, [ '√' + a, a * a, a + 1 ]), c: 0,
        e: '(√' + a + ')² = √' + a + ' × √' + a + ' = ' + a + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var a = _Y9_SF[_randInt(0, 4)], k = _randInt(2, 5), j = _randInt(2, 5), res = k * j * a;
      return { q: 'Work out ' + k + '√' + a + ' × ' + j + '√' + a + '.',
        opts: _buildOpts(res, [ (k * j) + '√' + a, (k * j + 1) * a, k * j ]), c: 0,
        e: k + '√' + a + ' × ' + j + '√' + a + ' = ' + (k * j) + ' × ' + a + ' = ' + res + ', because √' + a + ' × √' + a + ' = ' + a + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var b = _Y9_SF[_randInt(0, 4)], t = _randInt(2, 5), a = b * t * t;
      return { q: 'Simplify √' + a + ' ÷ √' + b + '.',
        opts: _buildOpts(t, [ t * t, '√' + b, '√' + (a - b) ]), c: 0,
        e: '√' + a + ' ÷ √' + b + ' = √(' + a + ' ÷ ' + b + ') = √' + (t * t) + ' = ' + t + '.' };
  }}
];

// ── m9i-01-4 — Rationalising the Denominator ────────────────────────────────
TEST_GENERATORS["m9i-01-4"] = [
  { depth: 'medium', gen: function () {
      var b = _Y9_SF[_randInt(0, 5)];
      return { q: 'Rationalise 1/√' + b + '.',
        opts: _buildOpts('√' + b + '/' + b, [ '√' + b, '1/' + b, b + '/√' + b ]), c: 0,
        e: 'Multiply top and bottom by √' + b + ': (1 × √' + b + ')/(√' + b + ' × √' + b + ') = √' + b + '/' + b + '.' };
  }},
  { depth: 'medium', gen: function () {
      var b = _Y9_SF[_randInt(0, 4)], a = _randInt(2, 9);
      if (a % b === 0) a += 1;
      return { q: 'Rationalise ' + a + '/√' + b + '.',
        opts: _buildOpts(a + '√' + b + '/' + b, [ a + '√' + b, a + '/' + b, (a * b) + '√' + b + '/' + b ]), c: 0,
        e: 'Multiply top and bottom by √' + b + ': (' + a + ' × √' + b + ')/(√' + b + ' × √' + b + ') = ' + a + '√' + b + '/' + b + '.' };
  }},
  { depth: 'medium', gen: function () {
      var b = _Y9_SF[_randInt(0, 7)];
      return { q: 'To rationalise a fraction with denominator √' + b + ', what do you multiply the top and bottom by?',
        opts: _buildOpts('√' + b, [ '' + b, '1/√' + b, '√' + (b + 1) ]), c: 0,
        e: 'Multiply by √' + b + ', because √' + b + ' × √' + b + ' = ' + b + ', a rational number.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var b = _y9pick([2, 3, 5, 7]), t = _randInt(2, 5), a = b * t;
      return { q: 'Rationalise and simplify ' + a + '/√' + b + '.',
        opts: _buildOpts(t + '√' + b, [ a + '√' + b + '/' + b, t + '/√' + b, a + '√' + b ]), c: 0,
        e: a + '/√' + b + ' = ' + a + '√' + b + '/' + b + '. Then ' + a + ' ÷ ' + b + ' = ' + t + ', so the answer is ' + t + '√' + b + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var b = _Y9_SF[_randInt(0, 5)];
      return { q: 'Simplify ' + b + '/√' + b + '.',
        opts: _buildOpts('√' + b, [ '√' + b + '/' + b, '1/√' + b, b + '√' + b ]), c: 0,
        e: b + '/√' + b + ' = ' + b + '√' + b + '/' + b + ' = √' + b + ' (since ' + b + ' ÷ ' + b + ' = 1).' };
  }}
];
