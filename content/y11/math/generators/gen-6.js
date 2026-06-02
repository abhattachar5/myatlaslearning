// content/y11/math/generators/gen-6.js — Year 11 Maths Topic 6 (Sequences).
// Quadratic nth-term island uses its static bank; geometric island generates.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-06-2 — Geometric & Special Sequences ────────────────────────────────
TEST_GENERATORS["m11i-06-2"] = [
  // find the common ratio
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 5), r = _randInt(2, 4);
      if (a === 2 && r === 2) a = 3;
      var t1 = a, t2 = a * r, t3 = a * r * r;
      return { q: 'Find the common ratio of ' + t1 + ', ' + t2 + ', ' + t3 + ', …',
        opts: _buildOpts('' + r, [ '' + (t2 - t1), '' + (r + 1), '' + (t1 + r) ]), c: 0,
        e: 'Divide a term by the one before: ' + t2 + ' ÷ ' + t1 + ' = ' + r + '.' };
  }},
  // continue the sequence
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 4), r = _randInt(2, 4), t3 = a * r * r, next = t3 * r;
      return { q: 'Continue the geometric sequence ' + a + ', ' + (a * r) + ', ' + t3 + ', …',
        opts: _buildOpts('' + next, [ '' + (2 * t3 - a * r), '' + (t3 + r), '' + (next + r) ]), c: 0,
        e: 'Common ratio ' + r + ': ' + t3 + ' × ' + r + ' = ' + next + '.' };
  }},
  // decreasing geometric (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r = _randInt(2, 4), a3 = _randInt(2, 6), a2 = a3 * r, a1 = a2 * r, next = a3;
      // sequence a1, a2, a3, next?  ratio 1/r → next = a3 / r
      var nxt = a3 / r;
      // ensure integer
      if (!Number.isInteger(nxt)) { a3 = r * 2; a2 = a3 * r; a1 = a2 * r; nxt = a3 / r; }
      return { q: 'Continue the geometric sequence ' + a1 + ', ' + a2 + ', ' + a3 + ', …',
        opts: _buildOpts('' + nxt, [ '' + a3, '' + (a3 * r), '' + (a3 + r) ]), c: 0,
        e: 'The common ratio is 1/' + r + ': ' + a3 + ' ÷ ' + r + ' = ' + nxt + '.' };
  }},
  // identify the type (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4), r = _randInt(2, 3);
      return { q: 'What type of sequence is ' + a + ', ' + (a * r) + ', ' + (a * r * r) + ', ' + (a * r * r * r) + '?',
        opts: _buildOpts('Geometric (×' + r + ')', [ 'Linear (+' + a + ')', 'Quadratic', 'Fibonacci' ]), c: 0,
        e: 'Each term is the previous one multiplied by ' + r + ', so it is geometric.' };
  }}
];
