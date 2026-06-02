// content/y9/math/generators/gen-8.js — Year 9 Maths Topic 8 (Percentages & Finance).
// Uses _randInt/_buildOpts. Amounts chosen to keep answers whole pounds.
// Validated by scripts/check-generators.js.

function _y9pct(list) { return list[_randInt(0, list.length - 1)]; }

// ── m9i-08-1 — Percentage Change & Multipliers ───────────────────────────────
TEST_GENERATORS["m9i-08-1"] = [
  // increase by p%
  { depth: 'medium', gen: function () {
      var A = _randInt(2, 20) * 100, p = _y9pct([5, 10, 12, 15, 20, 25, 30]);
      var inc = A * p / 100;
      return { q: 'Increase £' + A + ' by ' + p + '%.',
        opts: _buildOpts('£' + (A + inc), [ '£' + inc, '£' + (A - inc), '£' + (A + 2 * inc) ]), c: 0,
        e: p + '% of £' + A + ' = £' + inc + ', so the new amount is £' + A + ' + £' + inc + ' = £' + (A + inc) + ' (multiplier ' + (1 + p / 100) + ').' };
  }},
  // decrease by p%
  { depth: 'medium', gen: function () {
      var A = _randInt(2, 20) * 100, p = _y9pct([5, 10, 20, 25, 30, 40]);
      var dec = A * p / 100;
      return { q: 'Decrease £' + A + ' by ' + p + '%.',
        opts: _buildOpts('£' + (A - dec), [ '£' + dec, '£' + (A + dec), '£' + (A - 2 * dec) ]), c: 0,
        e: p + '% of £' + A + ' = £' + dec + ', so the new amount is £' + A + ' − £' + dec + ' = £' + (A - dec) + ' (multiplier ' + (1 - p / 100) + ').' };
  }},
  // percentage change
  { depth: 'greater-depth', gen: function () {
      var O = _randInt(2, 20) * 20, p = _y9pct([5, 10, 15, 20, 25]), change = O * p / 100, up = _randInt(0, 1);
      var newV = up ? O + change : O - change;
      var byNew = Math.round(change / newV * 100);          // wrong: divides by the new amount
      if (byNew === p || byNew === p + 5 || byNew === p + 15) byNew = p + 25;
      return { q: 'A price changes from £' + O + ' to £' + newV + '. Find the percentage ' + (up ? 'increase' : 'decrease') + '.',
        opts: _buildOpts(p + '%', [ (p + 5) + '%', (p + 15) + '%', byNew + '%' ]), c: 0,
        e: 'Change = £' + change + '. ' + change + ' ÷ ' + O + ' (the original) = ' + (p / 100) + ' = ' + p + '%.' };
  }},
  // find a percentage of an amount
  { depth: 'medium', gen: function () {
      var A = _randInt(2, 20) * 20, p = _y9pct([5, 15, 35, 45, 55, 65]);
      var ans = A * p / 100;
      return { q: 'Find ' + p + '% of ' + A + '.',
        opts: _buildOpts('' + ans, [ '' + (A * (p + 10) / 100), '' + (A * (p - 5) / 100), '' + (ans + p) ]), c: 0,
        e: '10% of ' + A + ' = ' + (A / 10) + ' and 1% = ' + (A / 100) + '; build ' + p + '% from these to get ' + ans + '.' };
  }}
];

// ── m9i-08-2 — Reverse Percentages ───────────────────────────────────────────
TEST_GENERATORS["m9i-08-2"] = [
  // reverse a decrease
  { depth: 'medium', gen: function () {
      var O = _randInt(2, 20) * 50, p = _y9pct([10, 20, 40]), newV = O * (100 - p) / 100;
      return { q: 'A jacket costs £' + newV + ' after a ' + p + '% discount. Find the original price.',
        opts: _buildOpts('£' + O, [ '£' + (newV + newV * p / 100), '£' + (newV + p), '£' + (newV - newV * p / 100) ]), c: 0,
        e: '£' + newV + ' is ' + (100 - p) + '% of the original, so £' + newV + ' ÷ ' + ((100 - p) / 100) + ' = £' + O + '.' };
  }},
  // reverse an increase
  { depth: 'greater-depth', gen: function () {
      var O = _randInt(2, 20) * 50, p = _y9pct([10, 20]), newV = O * (100 + p) / 100;
      return { q: 'After a ' + p + '% increase a bill is £' + newV + '. What was it before?',
        opts: _buildOpts('£' + O, [ '£' + (newV - newV * p / 100), '£' + (newV - p), '£' + (newV + newV * p / 100) ]), c: 0,
        e: '£' + newV + ' is ' + (100 + p) + '% of the original, so £' + newV + ' ÷ ' + ((100 + p) / 100) + ' = £' + O + '.' };
  }},
  // identify the operation
  { depth: 'medium', gen: function () {
      var p = _y9pct([8, 12, 15, 20, 30]);
      return { q: 'To reverse a ' + p + '% increase, what do you do to the new amount?',
        opts: _buildOpts('Divide by ' + (1 + p / 100), [ 'Multiply by ' + (1 - p / 100), 'Subtract ' + p + '%', 'Divide by ' + (1 - p / 100) ]), c: 0,
        e: 'The new amount is ' + (100 + p) + '% of the original, so divide by the multiplier ' + (1 + p / 100) + '.' };
  }}
];

// ── m9i-08-3 — Simple & Compound Interest ────────────────────────────────────
TEST_GENERATORS["m9i-08-3"] = [
  // simple interest (total interest)
  { depth: 'medium', gen: function () {
      var P = _randInt(2, 20) * 100, r = _y9pct([2, 3, 4, 5]), t = _randInt(2, 5);
      var perYear = P * r / 100, total = perYear * t;
      return { q: '£' + P + ' is invested at ' + r + '% simple interest for ' + t + ' years. How much interest is earned?',
        opts: _buildOpts('£' + total, [ '£' + perYear, '£' + (P + total), '£' + (total + perYear) ]), c: 0,
        e: r + '% of £' + P + ' = £' + perYear + ' each year. Over ' + t + ' years: ' + t + ' × £' + perYear + ' = £' + total + '.' };
  }},
  // compound interest (final amount, integer)
  { depth: 'greater-depth', gen: function () {
      var P = _randInt(2, 15) * 100, r = _y9pct([10, 20]), mult = 1 + r / 100;
      var fin = P * mult * mult;
      return { q: '£' + P + ' is invested at ' + r + '% compound interest for 2 years. Find the total.',
        opts: _buildOpts('£' + fin, [ '£' + (P + 2 * P * r / 100), '£' + (P * mult), '£' + (fin + P * r / 100) ]), c: 0,
        e: '£' + P + ' × ' + mult + '² = £' + P + ' × ' + (mult * mult) + ' = £' + fin + ' (interest on interest).' };
  }},
  // depreciation (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var P = _randInt(2, 12) * 1000, r = _y9pct([10, 20]), mult = 1 - r / 100;
      var fin = P * mult * mult;
      return { q: 'A car worth £' + P + ' depreciates ' + r + '% a year. Find its value after 2 years.',
        opts: _buildOpts('£' + fin, [ '£' + (P - 2 * P * r / 100), '£' + (P * mult), '£' + (fin - P * r / 100) ]), c: 0,
        e: '£' + P + ' × ' + mult + '² = £' + P + ' × ' + (mult * mult).toFixed(2) + ' = £' + fin + '.' };
  }}
];
