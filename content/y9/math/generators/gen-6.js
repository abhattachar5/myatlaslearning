// content/y9/math/generators/gen-6.js — Year 9 Maths Topic 6 (Bounds) generators.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.
// Rounding & estimation islands use their static banks; bounds generate cleanly.

// ── m9i-06-3 — Error Intervals & Bounds ──────────────────────────────────────
TEST_GENERATORS["m9i-06-3"] = [
  // lower bound, nearest whole
  { depth: 'medium', gen: function () {
      var v = _randInt(6, 99);
      return { q: 'A length is ' + v + ' cm to the nearest cm. What is the lower bound?',
        opts: _buildOpts((v - 0.5) + ' cm', [ (v + 0.5) + ' cm', (v - 1) + ' cm', (v - 0.05) + ' cm' ]), c: 0,
        e: 'Half a cm below ' + v + ' is ' + (v - 0.5) + ' cm — the smallest length that rounds to ' + v + '.' };
  }},
  // upper bound, nearest whole
  { depth: 'medium', gen: function () {
      var v = _randInt(6, 99);
      return { q: 'A mass is ' + v + ' kg to the nearest kg. What is the upper bound?',
        opts: _buildOpts((v + 0.5) + ' kg', [ (v - 0.5) + ' kg', (v + 1) + ' kg', (v + 0.05) + ' kg' ]), c: 0,
        e: 'Half a kg above ' + v + ' is ' + (v + 0.5) + ' kg (the interval uses < at the top).' };
  }},
  // error interval, nearest whole
  { depth: 'medium', gen: function () {
      var v = _randInt(6, 99);
      return { q: 'x = ' + v + ' to the nearest whole number. Write the error interval.',
        opts: _buildOpts((v - 0.5) + ' ≤ x < ' + (v + 0.5), [ (v - 1) + ' ≤ x < ' + (v + 1), (v - 0.5) + ' < x ≤ ' + (v + 0.5), (v - 0.05) + ' ≤ x < ' + (v + 0.05) ]), c: 0,
        e: 'Half a unit each side: ' + (v - 0.5) + ' ≤ x < ' + (v + 0.5) + '. The top uses < because it rounds up.' };
  }},
  // bounds to 1 d.p. (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var w = _randInt(11, 98), v = (w / 10).toFixed(1);
      var lo = (w / 10 - 0.05).toFixed(2), hi = (w / 10 + 0.05).toFixed(2);
      return { q: 'x = ' + v + ' to 1 decimal place. Write the error interval.',
        opts: _buildOpts(lo + ' ≤ x < ' + hi, [ (w / 10 - 0.5).toFixed(1) + ' ≤ x < ' + (w / 10 + 0.5).toFixed(1), lo + ' < x ≤ ' + hi, (w / 10 - 0.005).toFixed(3) + ' ≤ x < ' + (w / 10 + 0.005).toFixed(3) ]), c: 0,
        e: 'The unit is 0.1, so half a unit is 0.05: ' + lo + ' ≤ x < ' + hi + '.' };
  }},
  // bounds to nearest 10 (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var v = _randInt(3, 40) * 10;
      return { q: 'A crowd is ' + v + ' to the nearest 10. Write the error interval.',
        opts: _buildOpts((v - 5) + ' ≤ x < ' + (v + 5), [ (v - 10) + ' ≤ x < ' + (v + 10), (v - 5) + ' < x ≤ ' + (v + 5), (v - 0.5) + ' ≤ x < ' + (v + 0.5) ]), c: 0,
        e: 'Half of 10 is 5: ' + (v - 5) + ' ≤ x < ' + (v + 5) + '.' };
  }}
];
