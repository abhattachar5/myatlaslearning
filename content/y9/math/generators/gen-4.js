// content/y9/math/generators/gen-4.js — Year 9 Maths Topic 4 (Standard Form).
// Reuses global helpers _randInt/_buildOpts and _y9sup/_y9pow (defined in gen-3.js,
// loaded with this year). Validated by scripts/check-generators.js.

// ── m9i-04-1 — Writing & Converting Standard Form ────────────────────────────
TEST_GENERATORS["m9i-04-1"] = [
  // large number → standard form
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9), b = _randInt(1, 9), p = _randInt(3, 6);
      var num = '' + (a * 10 + b) + (p > 1 ? '0'.repeat(p - 1) : '');
      var ans = a + '.' + b + ' × 10' + _y9sup(p);
      return { q: 'Write ' + num + ' in standard form.',
        opts: _buildOpts(ans, [ (a * 10 + b) + ' × 10' + _y9sup(p - 1), a + '.' + b + ' × 10' + _y9sup(p + 1), a + '.' + b + ' × 10' + _y9sup(p - 1) ]), c: 0,
        e: num + ' = ' + a + '.' + b + ' × 10' + _y9sup(p) + ': put the point after the first digit, then count ' + p + ' places.' };
  }},
  // small number → negative power
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9), b = _randInt(1, 9), k = _randInt(2, 4);
      var num = '0.' + '0'.repeat(k - 1) + a + b;
      var ans = a + '.' + b + ' × 10' + _y9sup(-k);
      return { q: 'Write ' + num + ' in standard form.',
        opts: _buildOpts(ans, [ a + '.' + b + ' × 10' + _y9sup(k), (a * 10 + b) + ' × 10' + _y9sup(-(k + 1)), a + '.' + b + ' × 10' + _y9sup(-(k + 1)) ]), c: 0,
        e: num + ' = ' + a + '.' + b + ' × 10' + _y9sup(-k) + ': a small number takes a negative power.' };
  }},
  // standard form → ordinary number
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9), b = _randInt(0, 9), p = _randInt(3, 5);
      var ord = '' + (a * 10 + b) + '0'.repeat(p - 1);
      return { q: 'Write ' + a + '.' + b + ' × 10' + _y9sup(p) + ' as an ordinary number.',
        opts: _buildOpts(ord, [ '' + (a * 10 + b) + '0'.repeat(p), '' + (a * 10 + b) + '0'.repeat(p - 2 >= 0 ? p - 2 : 0), '0.' + '0'.repeat(p - 1) + (a * 10 + b) ]), c: 0,
        e: 'Move the point ' + p + ' places right: ' + a + '.' + b + ' → ' + ord + '.' };
  }},
  // identify correct standard form (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 9), b = _randInt(1, 9), p = _randInt(3, 6);
      var correct = a + '.' + b + ' × 10' + _y9sup(p);
      return { q: 'Which of these is correctly written in standard form?',
        opts: _buildOpts(correct, [ (a * 10 + b) + ' × 10' + _y9sup(p), '0.' + a + ' × 10' + _y9sup(p + 1), (a * 10 + b) + '.0 × 10' + _y9sup(p - 1) ]), c: 0,
        e: 'Standard form needs 1 ≤ A < 10. Only ' + correct + ' fits; the others have A = ' + (a * 10 + b) + ', 0.' + a + ' or ' + (a * 10 + b) + '.' };
  }},
  // power from number of zeros (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 9), p = _randInt(4, 7);
      var num = '' + a + '0'.repeat(p);
      return { q: 'Write ' + num + ' in standard form.',
        opts: _buildOpts(a + ' × 10' + _y9sup(p), [ a + ' × 10' + _y9sup(p + 1), a + ' × 10' + _y9sup(p - 1), a + '.0 × 10' + _y9sup(p - 1) ]), c: 0,
        e: num + ' is ' + a + ' followed by ' + p + ' zeros, so ' + a + ' × 10' + _y9sup(p) + '.' };
  }}
];

// ── m9i-04-2 — Calculating with Standard Form ────────────────────────────────
TEST_GENERATORS["m9i-04-2"] = [
  // multiply (no renormalising)
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 3), b = _randInt(2, 4), m = _randInt(2, 5), n = _randInt(2, 4);
      if (a * b >= 10) b = 2;
      return { q: 'Work out (' + a + ' × 10' + _y9sup(m) + ') × (' + b + ' × 10' + _y9sup(n) + ').',
        opts: _buildOpts((a * b) + ' × 10' + _y9sup(m + n), [ (a * b) + ' × 10' + _y9sup(m * n), (a + b) + ' × 10' + _y9sup(m + n), (a * b) + ' × 10' + _y9sup(m + n + 1) ]), c: 0,
        e: 'Multiply the numbers ' + a + ' × ' + b + ' = ' + (a * b) + ' and ADD the powers ' + m + ' + ' + n + ' = ' + (m + n) + '.' };
  }},
  // divide
  { depth: 'medium', gen: function () {
      var q = _randInt(2, 4), b = _randInt(2, 3), a = q * b, m = _randInt(6, 9), n = _randInt(2, 4);
      return { q: 'Work out (' + a + ' × 10' + _y9sup(m) + ') ÷ (' + b + ' × 10' + _y9sup(n) + ').',
        opts: _buildOpts(q + ' × 10' + _y9sup(m - n), [ q + ' × 10' + _y9sup(m + n), q + ' × 10' + _y9sup(m * n), a + ' × 10' + _y9sup(m - n) ]), c: 0,
        e: 'Divide the numbers ' + a + ' ÷ ' + b + ' = ' + q + ' and SUBTRACT the powers ' + m + ' − ' + n + ' = ' + (m - n) + '.' };
  }},
  // multiply with renormalising (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(4, 9), b = _randInt(4, 9), m = _randInt(2, 4), n = _randInt(2, 4);
      var prod = a * b;                 // ≥ 16, so two digits → renormalise
      var lead = prod / 10;             // e.g. 4.2
      var ans = lead + ' × 10' + _y9sup(m + n + 1);
      return { q: 'Work out (' + a + ' × 10' + _y9sup(m) + ') × (' + b + ' × 10' + _y9sup(n) + ') in standard form.',
        opts: _buildOpts(ans, [ prod + ' × 10' + _y9sup(m + n), lead + ' × 10' + _y9sup(m + n), prod + ' × 10' + _y9sup(m + n + 1) ]), c: 0,
        e: a + ' × ' + b + ' = ' + prod + ' and powers ' + m + ' + ' + n + ' = ' + (m + n) + ', giving ' + prod + ' × 10' + _y9sup(m + n) + '. Re-standardise: ' + ans + '.' };
  }},
  // divide with a negative power (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var q = _randInt(2, 4), b = _randInt(2, 3), a = q * b, m = _randInt(3, 6), n = _randInt(1, 2);
      return { q: 'Work out (' + a + ' × 10' + _y9sup(m) + ') ÷ (' + b + ' × 10' + _y9sup(-n) + ').',
        opts: _buildOpts(q + ' × 10' + _y9sup(m + n), [ q + ' × 10' + _y9sup(m - n), q + ' × 10' + _y9sup(-(m + n)), a + ' × 10' + _y9sup(m + n) ]), c: 0,
        e: a + ' ÷ ' + b + ' = ' + q + ', and powers ' + m + ' − (−' + n + ') = ' + (m + n) + ', giving ' + q + ' × 10' + _y9sup(m + n) + '.' };
  }}
];
