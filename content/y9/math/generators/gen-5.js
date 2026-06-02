// content/y9/math/generators/gen-5.js — Year 9 Maths Topic 5 (FDP) generators.
// Curated pools keep every conversion exact. Uses _randInt/_buildOpts.
// Validated by scripts/check-generators.js.

function _y9pick5(a) { return a[_randInt(0, a.length - 1)]; }

// ── m9i-05-1 — Converting Fractions, Decimals & Percentages ──────────────────
var _FDP = [ // [fraction, decimal, percent]
  ['1/2','0.5','50%'], ['1/4','0.25','25%'], ['3/4','0.75','75%'],
  ['1/5','0.2','20%'], ['2/5','0.4','40%'], ['3/5','0.6','60%'], ['4/5','0.8','80%'],
  ['1/10','0.1','10%'], ['3/10','0.3','30%'], ['7/10','0.7','70%'],
  ['1/8','0.125','12.5%'], ['3/8','0.375','37.5%'], ['1/20','0.05','5%'], ['7/20','0.35','35%']
];
TEST_GENERATORS["m9i-05-1"] = [
  // decimal → percentage
  { depth: 'medium', gen: function () {
      var r = _y9pick5(_FDP), d = r[1], p = r[2];
      var dec = parseFloat(d);
      return { q: 'Write ' + d + ' as a percentage.',
        opts: _buildOpts(p, [ (dec * 10) + '%', (dec * 1000) + '%', d + '%' ]), c: 0,
        e: d + ' × 100 = ' + p + '.' };
  }},
  // percentage → simplest fraction
  { depth: 'medium', gen: function () {
      var r = _y9pick5(_FDP), f = r[0], p = r[2];
      var pn = parseFloat(p);
      return { q: 'Write ' + p + ' as a fraction in its simplest form.',
        opts: _buildOpts(f, [ (pn) + '/100', (pn) + '/10', (pn / 5).toFixed(1) + '/20' ]), c: 0,
        e: p + ' = ' + pn + '/100, which simplifies to ' + f + '.' };
  }},
  // fraction → decimal
  { depth: 'medium', gen: function () {
      var r = _y9pick5(_FDP), f = r[0], d = r[1];
      var parts = f.split('/'), top = parts[0], bot = parts[1];
      return { q: 'Write ' + f + ' as a decimal.',
        opts: _buildOpts(d, [ (top + '.' + bot), '0.' + top + bot, (parseFloat(d) * 10).toString() ]), c: 0,
        e: f + ' = ' + top + ' ÷ ' + bot + ' = ' + d + '.' };
  }},
  // order two values (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r1 = _y9pick5(_FDP), r2 = _y9pick5(_FDP);
      while (r2[1] === r1[1]) r2 = _y9pick5(_FDP);
      var d1 = parseFloat(r1[1]), d2 = parseFloat(r2[1]);
      var small = d1 < d2 ? r1[0] : r2[0], large = d1 < d2 ? r2[2] : r1[2];
      var smallP = d1 < d2 ? r1[2] : r2[2], largeF = d1 < d2 ? r2[0] : r1[0];
      return { q: 'Which is larger: ' + r1[0] + ' or ' + r2[2] + '?',
        opts: _buildOpts(d1 > d2 ? r1[0] : r2[2], [ d1 > d2 ? r2[2] : r1[0], 'They are equal', 'Cannot tell' ]), c: 0,
        e: r1[0] + ' = ' + r1[1] + ' and ' + r2[2] + ' = ' + r2[1] + ', so ' + (d1 > d2 ? r1[0] : r2[2]) + ' is larger.' };
  }},
  // identify equal value (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r = _y9pick5(_FDP);
      var pool = _FDP.filter(function (x) { return x[2] !== r[2]; }).slice();
      var w = [];
      while (w.length < 3 && pool.length) { w.push(pool.splice(_randInt(0, pool.length - 1), 1)[0][2]); }
      return { q: 'Which of these equals ' + r[1] + '?',
        opts: _buildOpts(r[2], [ w[0], w[1], w[2] ]), c: 0,
        e: r[1] + ' = ' + r[2] + ' (multiply the decimal by 100).' };
  }}
];

// ── m9i-05-2 — Calculating with Fractions ────────────────────────────────────
function _y9simp(n, d) { var g = _gcd(n, d); return (n / g) + '/' + (d / g); }
TEST_GENERATORS["m9i-05-2"] = [
  // add fractions (one denominator a multiple of the other)
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 4), k = _randInt(2, 3), d2 = b * k, a1 = 1, a2 = _randInt(1, d2 - 1);
      var num = a1 * k + a2, den = d2;
      return { q: 'Work out ' + a1 + '/' + b + ' + ' + a2 + '/' + d2 + '.',
        opts: _buildOpts(_y9simp(num, den), [ (a1 + a2) + '/' + (b + d2), _y9simp(a1 + a2, d2), _y9simp(num + 1, den) ]), c: 0,
        e: 'Common denominator ' + d2 + ': ' + a1 + '/' + b + ' = ' + (a1 * k) + '/' + d2 + ', so ' + (a1 * k) + '/' + d2 + ' + ' + a2 + '/' + d2 + ' = ' + _y9simp(num, den) + '.' };
  }},
  // multiply fractions
  { depth: 'medium', gen: function () {
      var n1 = _randInt(1, 4), d1 = _randInt(n1 + 1, 6), n2 = _randInt(1, 4), d2 = _randInt(n2 + 1, 6);
      return { q: 'Work out ' + n1 + '/' + d1 + ' × ' + n2 + '/' + d2 + '.',
        opts: _buildOpts(_y9simp(n1 * n2, d1 * d2), [ _y9simp(n1 + n2, d1 + d2), (n1 * n2) + '/' + (d1 + d2), _y9simp(n1 * d2, d1 * n2) ]), c: 0,
        e: 'Multiply tops ' + n1 + '×' + n2 + ' = ' + (n1 * n2) + ' and bottoms ' + d1 + '×' + d2 + ' = ' + (d1 * d2) + ', giving ' + _y9simp(n1 * n2, d1 * d2) + '.' };
  }},
  // fraction of an amount
  { depth: 'medium', gen: function () {
      var d = _randInt(2, 5), n = _randInt(1, d - 1), per = d * _randInt(3, 9), ans = (per / d) * n;
      return { q: 'Work out ' + n + '/' + d + ' of ' + per + '.',
        opts: _buildOpts('' + ans, [ '' + (per / d), '' + (per - ans), '' + (ans + n) ]), c: 0,
        e: per + ' ÷ ' + d + ' = ' + (per / d) + ', then × ' + n + ' = ' + ans + '.' };
  }},
  // divide fractions (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var n1 = _randInt(1, 4), d1 = _randInt(n1 + 1, 6), n2 = _randInt(1, 4), d2 = _randInt(n2 + 1, 6);
      return { q: 'Work out ' + n1 + '/' + d1 + ' ÷ ' + n2 + '/' + d2 + '.',
        opts: _buildOpts(_y9simp(n1 * d2, d1 * n2), [ _y9simp(n1 * n2, d1 * d2), _y9simp(n1 + d2, d1 + n2), (n1 * d2) + '/' + (d1 * n2) + ' ' ]), c: 0,
        e: 'Keep–flip–multiply: ' + n1 + '/' + d1 + ' × ' + d2 + '/' + n2 + ' = ' + (n1 * d2) + '/' + (d1 * n2) + ' = ' + _y9simp(n1 * d2, d1 * n2) + '.' };
  }},
  // subtract fractions (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var b = _randInt(2, 4), k = _randInt(2, 3), d2 = b * k, a2 = _randInt(1, k * (b - 1)), num = (b - 1) * k - a2;
      if (num <= 0) num = 1;
      return { q: 'Work out ' + (b - 1) + '/' + b + ' − ' + a2 + '/' + d2 + '.',
        opts: _buildOpts(_y9simp(num, d2), [ _y9simp((b - 1) - a2 > 0 ? (b - 1) - a2 : 1, b + d2), (num + 1) + '/' + d2, _y9simp(num + a2, d2) ]), c: 0,
        e: 'Common denominator ' + d2 + ': ' + (b - 1) + '/' + b + ' = ' + ((b - 1) * k) + '/' + d2 + ', so minus ' + a2 + '/' + d2 + ' = ' + _y9simp(num, d2) + '.' };
  }}
];
