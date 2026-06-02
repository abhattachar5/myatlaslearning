// content/y9/math/generators/gen-7.js — Year 9 Maths Topic 7 (Ratio & Proportion).
// Uses _randInt/_buildOpts/_gcd. Validated by scripts/check-generators.js.

// ── m9i-07-1 — Simplifying & Sharing in a Ratio ──────────────────────────────
TEST_GENERATORS["m9i-07-1"] = [
  // simplify a ratio
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9), b = _randInt(2, 9), k = _randInt(2, 6);
      while (_gcd(a, b) !== 1) { b = _randInt(2, 9); }
      var A = a * k, B = b * k;
      return { q: 'Simplify the ratio ' + A + ' : ' + B + '.',
        opts: _buildOpts(a + ' : ' + b, [ A + ' : ' + B, (a * 2) + ' : ' + (b * 2), b + ' : ' + a ]), c: 0,
        e: 'Divide both by the HCF ' + k + ': ' + A + ' : ' + B + ' = ' + a + ' : ' + b + '.' };
  }},
  // share an amount
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 5), b = _randInt(2, 5), one = _randInt(3, 12);
      if (a === b) b += 1;
      var total = (a + b) * one;
      return { q: 'Share £' + total + ' in the ratio ' + a + ' : ' + b + '. How much is the larger share?',
        opts: _buildOpts('£' + (Math.max(a, b) * one), [ '£' + (Math.min(a, b) * one), '£' + (total / 2), '£' + ((a + b) * one) ]), c: 0,
        e: (a + b) + ' shares = £' + total + ', so one share = £' + one + '. Larger share = ' + Math.max(a, b) + ' × £' + one + ' = £' + (Math.max(a, b) * one) + '.' };
  }},
  // find the other part from one part
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b = _randInt(2, 6), one = _randInt(2, 9);
      if (a === b) b += 1;
      return { q: 'In a ratio ' + a + ' : ' + b + ', the first part is ' + (a * one) + '. Find the second part.',
        opts: _buildOpts('' + (b * one), [ '' + (a * one), '' + ((a + b) * one), '' + (b * one + a) ]), c: 0,
        e: 'One share = ' + (a * one) + ' ÷ ' + a + ' = ' + one + '. Second part = ' + b + ' × ' + one + ' = ' + (b * one) + '.' };
  }},
  // share among three (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 3), b = _randInt(2, 4), c = _randInt(3, 6), one = _randInt(3, 9);
      var total = (a + b + c) * one;
      return { q: 'Share £' + total + ' in the ratio ' + a + ' : ' + b + ' : ' + c + '. How much is the largest share?',
        opts: _buildOpts('£' + (c * one), [ '£' + (b * one), '£' + (a * one), '£' + total ]), c: 0,
        e: (a + b + c) + ' shares = £' + total + ', one share = £' + one + '. Largest = ' + c + ' × £' + one + ' = £' + (c * one) + '.' };
  }},
  // find total from a difference (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 4), b = _randInt(5, 8), one = _randInt(2, 8), diff = (b - a) * one, total = (a + b) * one;
      return { q: 'In a ratio ' + a + ' : ' + b + ', the difference between the parts is ' + diff + '. Find the total.',
        opts: _buildOpts('' + total, [ '' + diff, '' + (b * one), '' + ((a + b) * one + one) ]), c: 0,
        e: 'Difference = ' + (b - a) + ' shares = ' + diff + ', so one share = ' + one + '. Total = ' + (a + b) + ' shares = ' + total + '.' };
  }}
];

// ── m9i-07-2 — Direct & Inverse Proportion ───────────────────────────────────
TEST_GENERATORS["m9i-07-2"] = [
  // direct proportion (unitary)
  { depth: 'medium', gen: function () {
      var n1 = _randInt(2, 6), each = _randInt(2, 9), n2 = _randInt(2, 9);
      if (n2 === n1) n2 += 1;
      return { q: '' + n1 + ' identical items cost £' + (n1 * each) + '. What do ' + n2 + ' cost?',
        opts: _buildOpts('£' + (n2 * each), [ '£' + (n1 * each), '£' + ((n2 + n1) * each), '£' + (n2 * each + each) ]), c: 0,
        e: 'One item = £' + (n1 * each) + ' ÷ ' + n1 + ' = £' + each + '. ' + n2 + ' cost ' + n2 + ' × £' + each + ' = £' + (n2 * each) + '.' };
  }},
  // recipe scaling
  { depth: 'medium', gen: function () {
      var p1 = _randInt(2, 5), per = _randInt(50, 120), p2 = _randInt(2, 8);
      if (p2 === p1) p2 += 1;
      return { q: 'A recipe for ' + p1 + ' people needs ' + (p1 * per) + ' g of flour. How much for ' + p2 + ' people?',
        opts: _buildOpts((p2 * per) + ' g', [ (p1 * per) + ' g', ((p1 + p2) * per) + ' g', (p2 * per + per) + ' g' ]), c: 0,
        e: 'Per person ' + (p1 * per) + ' ÷ ' + p1 + ' = ' + per + ' g; for ' + p2 + ': ' + p2 + ' × ' + per + ' = ' + (p2 * per) + ' g.' };
  }},
  // inverse proportion (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var w1 = _randInt(2, 6), t1 = _randInt(6, 12), total = w1 * t1;
      var w2 = w1; var divisors = [];
      for (var d = 2; d <= total; d++) { if (total % d === 0 && d !== w1) divisors.push(d); }
      w2 = divisors[_randInt(0, divisors.length - 1)];
      return { q: '' + w1 + ' workers build a wall in ' + t1 + ' days. How long for ' + w2 + ' workers?',
        opts: _buildOpts((total / w2) + ' days', [ (total / w1) + ' days', (w2 * t1) + ' days', (total / w2 + 1) + ' days' ]), c: 0,
        e: 'Inverse: total work = ' + w1 + ' × ' + t1 + ' = ' + total + ' worker-days. With ' + w2 + ': ' + total + ' ÷ ' + w2 + ' = ' + (total / w2) + ' days.' };
  }},
  // best buy (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var na = _randInt(3, 6), ea = _randInt(40, 90), pa = na * ea;
      var nb = _randInt(7, 10), eb = ea - _randInt(3, 8), pb = nb * eb;
      return { q: 'Which is better value: ' + na + ' for £' + (pa / 100).toFixed(2) + ' or ' + nb + ' for £' + (pb / 100).toFixed(2) + '?',
        opts: _buildOpts(nb + ' for £' + (pb / 100).toFixed(2), [ na + ' for £' + (pa / 100).toFixed(2), 'They are equal', 'Cannot tell' ]), c: 0,
        e: 'Unit price: ' + ea + 'p each vs ' + eb + 'p each. The ' + nb + '-pack is cheaper per item.' };
  }}
];
