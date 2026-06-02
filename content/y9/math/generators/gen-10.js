// content/y9/math/generators/gen-10.js — Year 9 Maths Topic 10 (Sequences).
// Linear nth-term island generates; special sequences use the static bank.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _seqTerm(d, c) {
  var s = (d < 0 ? '−' : '') + Math.abs(d) + 'n';
  if (c > 0) s += ' + ' + c;
  else if (c < 0) s += ' − ' + (-c);
  return s;
}

// ── m9i-10-1 — Linear Sequences & the nth Term ───────────────────────────────
TEST_GENERATORS["m9i-10-1"] = [
  // find nth term (increasing)
  { depth: 'medium', gen: function () {
      var d = _randInt(2, 6), first = _randInt(1, 6), c = first - d;
      var seq = [first, first + d, first + 2 * d, first + 3 * d].join(', ');
      return { q: 'Find the nth term of ' + seq + ' …',
        opts: _buildOpts(_seqTerm(d, c), [ _seqTerm(d, first), _seqTerm(d + 1, c), _seqTerm(d - 1, c) ]), c: 0,
        e: 'Common difference ' + d + ' → ' + d + 'n; adjust to the first term ' + first + ': ' + d + '×1 = ' + d + ', so ' + (c >= 0 ? '+ ' + c : '− ' + (-c)) + ' gives ' + _seqTerm(d, c) + '.' };
  }},
  // evaluate a given nth term
  { depth: 'medium', gen: function () {
      var d = _randInt(2, 7), c = _randInt(1, 9), k = _randInt(6, 12);
      var ans = d * k + c;
      return { q: 'The nth term of a sequence is ' + d + 'n + ' + c + '. Find the ' + k + 'th term.',
        opts: _buildOpts('' + ans, [ '' + (d + k + c), '' + (d * k), '' + (d * k + c + d) ]), c: 0,
        e: 'Substitute n = ' + k + ': ' + d + '×' + k + ' + ' + c + ' = ' + (d * k) + ' + ' + c + ' = ' + ans + '.' };
  }},
  // find nth term (decreasing, greater-depth)
  { depth: 'greater-depth', gen: function () {
      var d = _randInt(2, 5), first = _randInt(18, 30), c = first + d;
      var seq = [first, first - d, first - 2 * d, first - 3 * d].join(', ');
      return { q: 'Find the nth term of the decreasing sequence ' + seq + ' …',
        opts: _buildOpts(_seqTerm(-d, c), [ _seqTerm(d, c), _seqTerm(-d, first), _seqTerm(-(d + 1), c) ]), c: 0,
        e: 'Difference −' + d + ' → −' + d + 'n; adjust to the first term ' + first + ': −' + d + '×1 = −' + d + ', so + ' + c + ' gives ' + _seqTerm(-d, c) + '.' };
  }},
  // is a number in the sequence? (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var d = _randInt(3, 6), c = _randInt(1, 4), n = _randInt(8, 15);
      var inSeq = d * n + c;            // genuinely a term
      var target = inSeq + _randInt(1, d - 1);  // between terms → not a term
      return { q: 'Is ' + target + ' a term of the sequence with nth term ' + d + 'n + ' + c + '?',
        opts: _buildOpts('No', [ 'Yes', 'Only if n is even', 'Cannot tell' ]), c: 0,
        e: 'Solve ' + d + 'n + ' + c + ' = ' + target + ' → ' + d + 'n = ' + (target - c) + ' → n = ' + ((target - c) / d).toFixed(2) + ', not a whole number, so ' + target + ' is not a term.' };
  }}
];
