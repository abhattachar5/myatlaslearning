// content/y11/math/generators/gen-11.js — Year 11 Maths Topic 11 (Growth, Decay & Iteration).
// Iteration island uses its static bank; growth/decay and repeated change generate.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _y11pct(list) { return list[_randInt(0, list.length - 1)]; }

// ── m11i-11-1 — Compound Growth & Decay ──────────────────────────────────────
TEST_GENERATORS["m11i-11-1"] = [
  // multiplier for r% growth
  { depth: 'medium', gen: function () {
      var r = _y11pct([3, 5, 8, 10, 12, 20]);
      return { q: 'What multiplier represents ' + r + '% compound growth per year?',
        opts: _buildOpts('' + (1 + r / 100), [ '' + (1 - r / 100), '' + r, '' + (r / 100) ]), c: 0,
        e: '100% + ' + r + '% = ' + (100 + r) + '% = ' + (1 + r / 100) + '.' };
  }},
  // final amount, 2 years, integer
  { depth: 'greater-depth', gen: function () {
      var P = 100 * _randInt(1, 15), r = _y11pct([10, 20]), mult = 1 + r / 100, fin = P * mult * mult;
      return { q: '£' + P + ' is invested at ' + r + '% compound interest for 2 years. Find the total.',
        opts: _buildOpts('£' + fin, [ '£' + (P + 2 * P * r / 100), '£' + (P * mult), '£' + (fin + P * r / 100) ]), c: 0,
        e: '£' + P + ' × ' + mult + '² = £' + P + ' × ' + (mult * mult) + ' = £' + fin + '.' };
  }},
  // multiplier for r% decay
  { depth: 'medium', gen: function () {
      var r = _y11pct([10, 15, 20, 25, 40]);
      return { q: 'What multiplier represents ' + r + '% depreciation per year?',
        opts: _buildOpts('' + (1 - r / 100), [ '' + (1 + r / 100), '' + (r / 100), '' + r ]), c: 0,
        e: '100% − ' + r + '% = ' + (100 - r) + '% = ' + (1 - r / 100) + '.' };
  }},
  // depreciation value, 2 years (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var P = 1000 * _randInt(2, 12), r = _y11pct([10, 20]), mult = 1 - r / 100, fin = P * mult * mult;
      return { q: 'A £' + P + ' car depreciates ' + r + '% a year. Find its value after 2 years.',
        opts: _buildOpts('£' + fin, [ '£' + (P - 2 * P * r / 100), '£' + (P * mult), '£' + (fin - P * r / 100) ]), c: 0,
        e: '£' + P + ' × ' + mult + '² = £' + P + ' × ' + (mult * mult).toFixed(2) + ' = £' + fin + '.' };
  }}
];

// ── m11i-11-2 — Repeated Percentage Change ───────────────────────────────────
TEST_GENERATORS["m11i-11-2"] = [
  // overall multiplier of rise then rise
  { depth: 'medium', gen: function () {
      var p = _y11pct([10, 20]), m = 1 + p / 100, overall = Math.round(m * m * 100) / 100;
      return { q: 'A price rises ' + p + '% then rises ' + p + '% again. What is the overall multiplier?',
        opts: _buildOpts('' + overall, [ '' + (1 + 2 * p / 100), '' + m, '' + (overall + 0.1) ]), c: 0,
        e: 'Multiply the multipliers: ' + m + ' × ' + m + ' = ' + overall + ' (not just +' + (2 * p) + '%).' };
  }},
  // rise then fall — net effect
  { depth: 'greater-depth', gen: function () {
      var p = _y11pct([10, 20, 25]), up = 1 + p / 100, down = 1 - p / 100, overall = Math.round(up * down * 100) / 100;
      return { q: 'A price rises ' + p + '% then falls ' + p + '%. What is the overall multiplier?',
        opts: _buildOpts('' + overall, [ '1', '' + up, '' + down ]), c: 0,
        e: '' + up + ' × ' + down + ' = ' + overall + ' — a small overall decrease, not back to the start.' };
  }},
  // combine two different changes (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _y11pct([10, 20, 25]), b = _y11pct([10, 20]);
      var ma = 1 + a / 100, mb = 1 - b / 100, overall = Math.round(ma * mb * 100) / 100;
      return { q: 'A value increases ' + a + '% then decreases ' + b + '%. Overall multiplier?',
        opts: _buildOpts('' + overall, [ '' + (1 + (a - b) / 100), '' + ma, '' + mb ]), c: 0,
        e: '' + ma + ' × ' + mb + ' = ' + overall + '. You cannot just do ' + a + ' − ' + b + '%.' };
  }}
];
