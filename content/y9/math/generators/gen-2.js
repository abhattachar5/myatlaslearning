// content/y9/math/generators/gen-2.js — Year 9 Maths Topic 2 (Number Structure).
// Loads after engine/test-generator.js (TEST_GENERATORS + _randInt/_buildOpts/_gcd).
// Options are built to be deterministically 4-distinct (these load after the
// sanitiser, so they cannot rely on it). ≥2 'greater-depth' per island.

function _y9p2(a) { return a[_randInt(0, a.length - 1)]; }
function _y9s2(a, k) { var c = a.slice(), o = []; while (o.length < k && c.length) { o.push(c.splice(_randInt(0, c.length - 1), 1)[0]); } return o; }
function _y9coprime() { return _y9p2([[2,3],[2,5],[3,4],[3,5],[4,5],[2,7],[3,7],[4,7],[5,6],[5,7],[5,8],[7,8]]); }
function _y9factorCount(n) { var c = 0; for (var i = 1; i <= n; i++) { if (n % i === 0) c++; } return c; }

// ── m9i-02-1 — Factors, Primes & Divisibility ───────────────────────────────
TEST_GENERATORS["m9i-02-1"] = [
  { depth: 'medium', gen: function () {
      var primes = [11,13,17,19,23,29,31,37,41,43,47,53,59];
      var comps  = [12,14,15,18,21,22,25,26,27,33,35,39,49,51,55,57,63,65,77];
      var p = _y9p2(primes), w = _y9s2(comps, 3);
      return { q: 'Which of these numbers is prime?',
        opts: [String(p), String(w[0]), String(w[1]), String(w[2])], c: 0,
        e: p + ' has only two factors: 1 and itself. The others are composite (e.g. ' + w[0] + ' has more than two factors).' };
  }},
  { depth: 'medium', gen: function () {
      var n = _y9p2([12,18,20,24,28,30,36,40,45,48,60]);
      var cnt = _y9factorCount(n);
      return { q: 'How many factors does ' + n + ' have?',
        opts: _buildOpts(cnt, [cnt - 1, cnt + 1, cnt + 2]), c: 0,
        e: n + ' has exactly ' + cnt + ' factors.' };
  }},
  { depth: 'medium', gen: function () {
      var d = _y9p2([3,4,6,9]), k = _randInt(11, 30), correct = d * k;
      return { q: 'Which of these numbers is divisible by ' + d + '?',
        opts: [String(correct), String(correct + 1), String(correct + 2), String(correct - 1)], c: 0,
        e: correct + ' ÷ ' + d + ' = ' + k + '. The others each leave a remainder.' };
  }},
  { depth: 'medium', gen: function () {
      var rules = [
        { d: 3, r: 'the sum of its digits is divisible by 3' },
        { d: 9, r: 'the sum of its digits is divisible by 9' },
        { d: 4, r: 'its last two digits form a number divisible by 4' },
        { d: 5, r: 'its last digit is 0 or 5' }
      ];
      var pick = _y9p2(rules), w = _y9s2(rules.filter(function (x) { return x.d !== pick.d; }), 3);
      return { q: 'A number is divisible by ' + pick.d + ' if…',
        opts: [pick.r, w[0].r, w[1].r, w[2].r], c: 0,
        e: 'Divisibility rule for ' + pick.d + ': ' + pick.r + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var n = _y9p2([24,36,48,60,72]);
      var facs = [], nonfacs = [], i;
      for (i = 2; i < n; i++) { if (n % i === 0) facs.push(i); else nonfacs.push(i); }
      var correct = _y9p2(facs), w = _y9s2(nonfacs, 3);
      return { q: 'Which of these is a factor of ' + n + '?',
        opts: [String(correct), String(w[0]), String(w[1]), String(w[2])], c: 0,
        e: n + ' ÷ ' + correct + ' = ' + (n / correct) + ', so ' + correct + ' is a factor. The others do not divide ' + n + ' exactly.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var primes = [11,13,17,19,23,29,31,37,41,43,47];
      var comps  = [15,21,25,33,35,49,51,55,57,63];
      var c0 = _y9p2(comps), w = _y9s2(primes, 3);
      return { q: 'Which of these numbers is NOT prime?',
        opts: [String(c0), String(w[0]), String(w[1]), String(w[2])], c: 0,
        e: c0 + ' is composite — it has more than two factors. The other three are prime.' };
  }}
];

// ── m9i-02-2 — HCF & LCM ─────────────────────────────────────────────────────
TEST_GENERATORS["m9i-02-2"] = [
  { depth: 'medium', gen: function () {
      var g = _randInt(2, 9), p = _y9coprime(), a = g * p[0], b = g * p[1];
      return { q: 'Find the HCF of ' + a + ' and ' + b + '.',
        opts: _buildOpts(g, [a, b, g * p[0] * p[1]]), c: 0,
        e: a + ' = ' + g + '×' + p[0] + ' and ' + b + ' = ' + g + '×' + p[1] + ', and ' + p[0] + ', ' + p[1] + ' share no factor, so HCF = ' + g + '.' };
  }},
  { depth: 'medium', gen: function () {
      var g = _randInt(2, 6), p = _y9coprime(), a = g * p[0], b = g * p[1], lcm = g * p[0] * p[1];
      return { q: 'Find the LCM of ' + a + ' and ' + b + '.',
        opts: _buildOpts(lcm, [g, a, b]), c: 0,
        e: 'LCM of ' + a + ' and ' + b + ' = ' + g + '×' + p[0] + '×' + p[1] + ' = ' + lcm + '.' };
  }},
  { depth: 'medium', gen: function () {
      var g = _randInt(2, 5), p = _y9coprime(), a = g * p[0], b = g * p[1], lcm = g * p[0] * p[1];
      return { q: 'Two alarms beep every ' + a + ' s and every ' + b + ' s. They beep together now. After how many seconds do they next beep together?',
        opts: _buildOpts(lcm, [a + b, a * b, g]), c: 0,
        e: 'You need the LCM of ' + a + ' and ' + b + ', which is ' + lcm + ' s.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var g = _randInt(2, 6), p = _y9coprime(), a = g * p[0], b = g * p[1];
      var h = g, l = g * p[0] * p[1], prod = a * b;
      return { q: 'Two numbers have HCF ' + h + ' and LCM ' + l + '. What is the product of the two numbers?',
        opts: _buildOpts(prod, [h + l, prod + l, h]), c: 0,
        e: 'For any two numbers, product = HCF × LCM = ' + h + ' × ' + l + ' = ' + prod + '.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var g = _randInt(2, 8), p = _y9coprime(), red = g * p[0], white = g * p[1];
      return { q: 'A florist has ' + red + ' red roses and ' + white + ' white roses. What is the largest number of identical bunches she can make using every flower?',
        opts: _buildOpts(g, [red, white, g * p[0] * p[1]]), c: 0,
        e: 'The largest number of identical bunches is the HCF of ' + red + ' and ' + white + ', which is ' + g + '.' };
  }}
];

// ── m9i-02-3 — Rational & Irrational Numbers ─────────────────────────────────
TEST_GENERATORS["m9i-02-3"] = [
  { depth: 'medium', gen: function () {
      var irr = ['√2','√3','√5','√7','√10','√11','√13'];
      var rat = ['√4','√9','√16','√25','0.5','0.25','3/4','2/5','7','12'];
      var c0 = _y9p2(irr), w = _y9s2(rat, 3);
      return { q: 'Which of these numbers is irrational?',
        opts: [c0, w[0], w[1], w[2]], c: 0,
        e: c0 + ' cannot be written as a fraction — its decimal never ends or repeats. The others are all rational.' };
  }},
  { depth: 'medium', gen: function () {
      var rat = ['√4','√9','√16','0.5','3/4','7','0.25','2/3'];
      var irr = ['√2','√3','√5','√7','√11','π'];
      var c0 = _y9p2(rat), w = _y9s2(irr, 3);
      return { q: 'Which of these numbers is rational?',
        opts: [c0, w[0], w[1], w[2]], c: 0,
        e: c0 + ' can be written as a fraction, so it is rational. The other three are irrational.' };
  }},
  { depth: 'medium', gen: function () {
      var T = ['Every integer is a rational number','Every whole number is an integer','A recurring decimal is rational','√25 is a rational number'];
      var F = ['π is a rational number','√2 can be written as a fraction','Every rational number is an integer','Zero is irrational'];
      var c0 = _y9p2(T), w = _y9s2(F, 3);
      return { q: 'Which statement is TRUE?',
        opts: [c0, w[0], w[1], w[2]], c: 0,
        e: '"' + c0 + '" is true. The others are false — for example, π is irrational and not every rational number is an integer.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var irr = ['√2','√3','√5','√6','√7','√10','π'];
      var rat = ['√9','√16','√25','0.5','3/4','8','0.2'];
      var c0 = _y9p2(irr), w = _y9s2(rat, 3);
      return { q: 'Which of these numbers is NOT rational?',
        opts: [c0, w[0], w[1], w[2]], c: 0,
        e: c0 + ' is irrational, so it is not rational. The other three can each be written as a fraction.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var pool = [['√2',1],['√3',1],['√5',1],['π',1],['√7',1],['√4',0],['√9',0],['√16',0],['√25',0],['0.5',0],['7',0],['2/3',0]];
      var sel = _y9s2(pool, 4), cnt = 0;
      sel.forEach(function (x) { if (x[1]) cnt++; });
      var nums = sel.map(function (x) { return x[0]; }).join(', ');
      var w = _y9s2([0,1,2,3,4].filter(function (v) { return v !== cnt; }), 3);
      return { q: 'How many of these numbers are irrational?   ' + nums,
        opts: _buildOpts(cnt, w), c: 0,
        e: 'Surds of non-square numbers (e.g. √2) and π are irrational; integers, fractions and surds of square numbers are rational. Count = ' + cnt + '.' };
  }}
];
