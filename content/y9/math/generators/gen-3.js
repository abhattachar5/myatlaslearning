// content/y9/math/generators/gen-3.js — Year 9 Maths Topic 3 (Indices) generators.
// Loads after engine/test-generator.js (TEST_GENERATORS + _randInt/_buildOpts).
// ≈5–6 generators per island, ≥2 tagged 'greater-depth'. Validated by
// scripts/check-generators.js. Authored by the atlas-content skill.

// Unicode superscript renderer so generated powers read like the static bank.
var _Y9_SUP = {'-':'⁻','0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
function _y9sup(n) { return String(n).split('').map(function (ch) { return _Y9_SUP[ch] || ch; }).join(''); }
function _y9pow(base, n) { var r = 1; for (var i = 0; i < n; i++) r *= base; return r; }
function _y9letter() { return ['x', 'y', 'p', 'k', 'a', 'm'][_randInt(0, 5)]; }

// ── m9i-03-1 — The Index Laws ────────────────────────────────────────────────
TEST_GENERATORS["m9i-03-1"] = [
  // multiply: same base, add indices
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 6), m = _randInt(2, 5), n = _randInt(2, 4);
      if (m === 2 && n === 2) n = 3;
      return { q: 'Simplify ' + b + _y9sup(m) + ' × ' + b + _y9sup(n) + '.',
        opts: _buildOpts(b + _y9sup(m + n), [ b + _y9sup(m * n), (b * b) + _y9sup(m + n), b + _y9sup(Math.abs(m - n) || 1) ]), c: 0,
        e: 'Same base, so ADD the indices: ' + m + ' + ' + n + ' = ' + (m + n) + ', giving ' + b + _y9sup(m + n) + '. The base stays ' + b + '.' };
  }},
  // divide: same base, subtract indices
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 7), m = _randInt(5, 9), n = _randInt(2, 3);
      return { q: 'Simplify ' + b + _y9sup(m) + ' ÷ ' + b + _y9sup(n) + '.',
        opts: _buildOpts(b + _y9sup(m - n), [ b + _y9sup(m + n), (b * b) + _y9sup(m - n), b + _y9sup(m - n + 1) ]), c: 0,
        e: 'Same base, so SUBTRACT the indices: ' + m + ' − ' + n + ' = ' + (m - n) + ', giving ' + b + _y9sup(m - n) + '.' };
  }},
  // power of a power: multiply indices (variable base)
  { depth: 'medium', gen: function () {
      var L = _y9letter(), m = _randInt(2, 5), n = _randInt(2, 4);
      if (m === n) m += 1;
      return { q: 'Simplify (' + L + _y9sup(m) + ')' + _y9sup(n) + '.',
        opts: _buildOpts(L + _y9sup(m * n), [ L + _y9sup(m + n), L + _y9sup(m * n + n), L + _y9sup(m * n + m) ]), c: 0,
        e: 'Power of a power: MULTIPLY the indices, ' + m + ' × ' + n + ' = ' + (m * n) + ', giving ' + L + _y9sup(m * n) + '.' };
  }},
  // multiply with coefficients
  { depth: 'medium', gen: function () {
      var L = _y9letter(), c1 = _randInt(2, 6), c2 = _randInt(2, 6), m = _randInt(2, 5), n = _randInt(2, 4);
      if (m === 2 && n === 2) n = 3;
      if (c1 === 2 && c2 === 2) c2 = 3;
      return { q: 'Simplify ' + c1 + L + _y9sup(m) + ' × ' + c2 + L + _y9sup(n) + '.',
        opts: _buildOpts((c1 * c2) + L + _y9sup(m + n), [ (c1 + c2) + L + _y9sup(m + n), (c1 * c2) + L + _y9sup(m * n), (c1 * c2) + L + _y9sup(Math.abs(m - n) || 1) ]), c: 0,
        e: 'Multiply the numbers ' + c1 + ' × ' + c2 + ' = ' + (c1 * c2) + ', and ADD the indices ' + m + ' + ' + n + ' = ' + (m + n) + ': ' + (c1 * c2) + L + _y9sup(m + n) + '.' };
  }},
  // divide with coefficients (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var L = _y9letter(), q = _randInt(2, 6), c2 = _randInt(2, 5), m = _randInt(5, 9), n = _randInt(2, 4);
      if (c2 * (q - 1) === q) q += 1;          // keep (c1−c2) ≠ q so options stay distinct
      var c1 = q * c2;
      return { q: 'Simplify ' + c1 + L + _y9sup(m) + ' ÷ ' + c2 + L + _y9sup(n) + '.',
        opts: _buildOpts(q + L + _y9sup(m - n), [ q + L + _y9sup(m + n), (c1 - c2) + L + _y9sup(m - n), q + L + _y9sup(m * n) ]), c: 0,
        e: 'Divide the numbers ' + c1 + ' ÷ ' + c2 + ' = ' + q + ', and SUBTRACT the indices ' + m + ' − ' + n + ' = ' + (m - n) + ': ' + q + L + _y9sup(m - n) + '.' };
  }},
  // mixed law chain (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var L = _y9letter(), m = _randInt(2, 4), n = _randInt(2, 3), p = _randInt(2, 4);
      if (m === 2 && n === 2) n = 3;
      var res = m * n + p;
      return { q: 'Simplify (' + L + _y9sup(m) + ')' + _y9sup(n) + ' × ' + L + _y9sup(p) + '.',
        opts: _buildOpts(L + _y9sup(res), [ L + _y9sup(m + n + p), L + _y9sup(m * n * p), L + _y9sup(res + 1) ]), c: 0,
        e: '(' + L + _y9sup(m) + ')' + _y9sup(n) + ' = ' + L + _y9sup(m * n) + ' (multiply ' + m + '×' + n + '). Then × ' + L + _y9sup(p) + ' adds ' + p + ': ' + (m * n) + ' + ' + p + ' = ' + res + '.' };
  }}
];

// ── m9i-03-2 — Zero & Negative Indices ───────────────────────────────────────
TEST_GENERATORS["m9i-03-2"] = [
  // zero index
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 19);
      return { q: 'What is ' + b + _y9sup(0) + '?',
        opts: _buildOpts('1', [ '0', '' + b, 'It has no value' ]), c: 0,
        e: 'Any non-zero number to the power 0 is 1, so ' + b + _y9sup(0) + ' = 1.' };
  }},
  // evaluate negative index → fraction
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 5), n = _randInt(2, 3), v = _y9pow(b, n);
      return { q: 'Evaluate ' + b + _y9sup(-n) + '.',
        opts: _buildOpts('1/' + v, [ '−' + v, '−1/' + v, '' + v ]), c: 0,
        e: 'A negative index means a reciprocal: ' + b + _y9sup(-n) + ' = 1/' + b + _y9sup(n) + ' = 1/' + v + '. The value stays positive.' };
  }},
  // rewrite 1/xⁿ as a single negative index
  { depth: 'medium', gen: function () {
      var L = _y9letter(), n = _randInt(2, 6);
      return { q: 'Write 1/' + L + _y9sup(n) + ' using a single index.',
        opts: _buildOpts(L + _y9sup(-n), [ L + _y9sup(n), '−' + L + _y9sup(n), L + _y9sup(-(n + 1)) ]), c: 0,
        e: 'A reciprocal of a power uses a negative index: 1/' + L + _y9sup(n) + ' = ' + L + _y9sup(-n) + '.' };
  }},
  // power of ten → decimal
  { depth: 'medium', gen: function () {
      var k = _randInt(1, 3), dec = '0.' + (k > 1 ? '0'.repeat(k - 1) : '') + '1', pos = _y9pow(10, k);
      return { q: 'Evaluate 10' + _y9sup(-k) + '.',
        opts: _buildOpts(dec, [ '−' + dec, '' + pos, '−' + pos ]), c: 0,
        e: '10' + _y9sup(-k) + ' = 1/10' + _y9sup(k) + ' = 1/' + pos + ' = ' + dec + '.' };
  }},
  // reciprocal of a fraction, power −1 (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 5), b = _randInt(2, 7);
      if (b === a) b += 1;
      return { q: 'Evaluate (' + a + '/' + b + ')' + _y9sup(-1) + '.',
        opts: _buildOpts(b + '/' + a, [ a + '/' + b, '−' + a + '/' + b, '−' + b + '/' + a ]), c: 0,
        e: 'A power of −1 gives the reciprocal — flip the fraction: (' + a + '/' + b + ')' + _y9sup(-1) + ' = ' + b + '/' + a + '.' };
  }},
  // negative index with coefficient (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var L = _y9letter(), c1 = _randInt(2, 6), n = _randInt(2, 4);
      return { q: 'Write ' + c1 + '/' + L + _y9sup(n) + ' using a negative index.',
        opts: _buildOpts(c1 + L + _y9sup(-n), [ c1 + L + _y9sup(n), '−' + c1 + L + _y9sup(n), c1 + L + _y9sup(-(n + 1)) ]), c: 0,
        e: 'Only the power moves: ' + c1 + '/' + L + _y9sup(n) + ' = ' + c1 + L + _y9sup(-n) + '. The coefficient ' + c1 + ' stays on top.' };
  }}
];

// ── m9i-03-3 — Fractional Indices & Roots ────────────────────────────────────
// Curated radicands keep every generated value a clean integer.
var _Y9_SQ = [[9,3],[16,4],[25,5],[36,6],[49,7],[64,8],[81,9],[100,10],[121,11],[144,12]];
var _Y9_CB = [[8,2],[27,3],[64,4],[125,5]];
var _Y9_MN = [ // [base, denom, rootValue, power]  → answer rootValue^power
  [8,3,2,2],[27,3,3,2],[8,3,2,4],[16,4,2,3],[81,4,3,3],[16,2,4,3],[9,2,3,3],[25,2,5,3],[27,3,3,4]
];
TEST_GENERATORS["m9i-03-3"] = [
  // square root via 1/2 index
  { depth: 'medium', gen: function () {
      var p = _Y9_SQ[_randInt(0, _Y9_SQ.length - 1)], n = p[0], s = p[1];
      return { q: 'Evaluate ' + n + '^(1/2).',
        opts: _buildOpts('' + s, [ '' + (2 * s), '' + n, '' + (s + 1) ]), c: 0,
        e: 'A power of 1/2 means the square root: ' + n + '^(1/2) = √' + n + ' = ' + s + '.' };
  }},
  // cube root via 1/3 index
  { depth: 'medium', gen: function () {
      var p = _Y9_CB[_randInt(0, _Y9_CB.length - 1)], n = p[0], s = p[1];
      return { q: 'Evaluate ' + n + '^(1/3).',
        opts: _buildOpts('' + s, [ '' + (s * s), '' + (s + 1), '' + n ]), c: 0,
        e: 'A power of 1/3 means the cube root: ³√' + n + ' = ' + s + ', because ' + s + '³ = ' + n + '.' };
  }},
  // nth root general (1/n)
  { depth: 'medium', gen: function () {
      var s = _randInt(2, 4), k = _randInt(2, 3);
      if (s === 2 && k === 2) k = 3;
      var n = _y9pow(s, k);
      return { q: 'Evaluate ' + n + '^(1/' + k + ').',
        opts: _buildOpts('' + s, [ '' + n, '' + (s * k), '' + (s + 1) ]), c: 0,
        e: '' + n + '^(1/' + k + ') is the ' + k + 'th root of ' + n + ' = ' + s + ', because ' + s + (k === 2 ? '² ' : '³ ') + '= ' + n + '.' };
  }},
  // m/n index: root then power (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t = _Y9_MN[_randInt(0, _Y9_MN.length - 1)], base = t[0], den = t[1], root = t[2], m = t[3];
      var ans = _y9pow(root, m);
      return { q: 'Evaluate ' + base + '^(' + m + '/' + den + ').',
        opts: _buildOpts('' + ans, [ '' + root, '' + (root * m), '' + (base * m) ]), c: 0,
        e: 'Root first: the ' + den + 'th root of ' + base + ' is ' + root + '. Then raise to the power ' + m + ': ' + root + _y9sup(m) + ' = ' + ans + '.' };
  }},
  // negative fractional index (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _Y9_SQ[_randInt(0, 6)], n = p[0], s = p[1];
      return { q: 'Evaluate ' + n + '^(−1/2).',
        opts: _buildOpts('1/' + s, [ '' + s, '−1/' + s, '−' + s ]), c: 0,
        e: 'The minus flips it and the half roots it: ' + n + '^(−1/2) = 1/√' + n + ' = 1/' + s + '.' };
  }}
];
