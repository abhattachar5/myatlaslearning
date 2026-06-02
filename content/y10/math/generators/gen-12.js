// content/y10/math/generators/gen-12.js — Year 10 Maths Topic 12 (Statistics).
// Averages and pie-chart angles generate; scatter island uses its static bank.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _y10sum(a) { var s = 0; for (var i = 0; i < a.length; i++) s += a[i]; return s; }

// ── m10i-12-1 — Averages & Range ─────────────────────────────────────────────
TEST_GENERATORS["m10i-12-1"] = [
  // mean of five values (constructed to be a whole number)
  { depth: 'medium', gen: function () {
      var v = [_randInt(1, 15), _randInt(1, 15), _randInt(1, 15), _randInt(1, 15)];
      var s4 = _y10sum(v), last = ((5 - (s4 % 5)) % 5);
      if (last === 0) last = 5;
      last += 5 * _randInt(0, 2);
      v.push(last);
      var total = s4 + last, mean = total / 5;
      return { q: 'Find the mean of ' + v.join(', ') + '.',
        opts: _buildOpts('' + mean, [ '' + (mean + 1), '' + (mean - 1), '' + total ]), c: 0,
        e: 'Mean = total ÷ how many = ' + total + ' ÷ 5 = ' + mean + '.' };
  }},
  // range
  { depth: 'medium', gen: function () {
      var lo = _randInt(2, 10), range = _randInt(5, 20), hi = lo + range, mid = _randInt(lo + 1, hi - 1);
      if (mid === range) mid = (mid === hi - 1) ? mid - 1 : mid + 1;
      return { q: 'Find the range of ' + [hi, lo, mid].join(', ') + '.',
        opts: _buildOpts('' + range, [ '' + hi, '' + (hi + lo), '' + mid ]), c: 0,
        e: 'Range = highest − lowest = ' + hi + ' − ' + lo + ' = ' + range + '.' };
  }},
  // median of an odd set
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 6), b = a + _randInt(1, 4), c = b + _randInt(1, 4), d = c + _randInt(1, 4), e = d + _randInt(1, 4);
      var arr = [c, a, e, b, d];
      return { q: 'Find the median of ' + arr.join(', ') + '.',
        opts: _buildOpts('' + c, [ '' + b, '' + d, '' + a ]), c: 0,
        e: 'In order: ' + a + ', ' + b + ', ' + c + ', ' + d + ', ' + e + ' — the middle value is ' + c + '.' };
  }},
  // mode (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var m = _randInt(2, 9), o1 = _randInt(1, 9), o2 = _randInt(1, 9);
      while (o1 === m) o1 = _randInt(1, 9);
      while (o2 === m || o2 === o1 || o2 === m + o1) o2 = _randInt(1, 9);
      return { q: 'Find the mode of ' + [m, o1, m, o2, m].join(', ') + '.',
        opts: _buildOpts('' + m, [ '' + o1, '' + o2, '' + (m + o1) ]), c: 0,
        e: '' + m + ' appears three times, more than any other value, so it is the mode.' };
  }}
];

// ── m10i-12-2 — Charts & Frequency Diagrams ──────────────────────────────────
TEST_GENERATORS["m10i-12-2"] = [
  // pie-chart angle from a fraction that divides 360
  { depth: 'medium', gen: function () {
      var total = [20, 24, 30, 36, 40, 60][_randInt(0, 5)], freq = _randInt(1, total - 1);
      while ((360 * freq) % total !== 0) freq = _randInt(1, total - 1);
      var angle = 360 * freq / total;
      return { q: 'In a survey of ' + total + ' people, ' + freq + ' chose tea. Find the pie-chart angle.',
        opts: _buildOpts(angle + '°', [ (2 * angle) + '°', (3 * angle) + '°', freq + '°' ]), c: 0,
        e: 'Angle = (' + freq + ' ÷ ' + total + ') × 360° = ' + angle + '°.' };
  }},
  // people from a pie-chart angle
  { depth: 'greater-depth', gen: function () {
      var total = [24, 30, 36, 40, 60][_randInt(0, 4)], angle = [90, 120, 60, 45, 72, 180][_randInt(0, 5)];
      while ((angle * total) % 360 !== 0) angle = [90, 120, 60, 45, 72, 180][_randInt(0, 5)];
      var people = angle * total / 360;
      return { q: 'A pie chart shows ' + angle + '° for "bus" out of ' + total + ' pupils. How many took the bus?',
        opts: _buildOpts('' + people, [ '' + (people + 2), '' + (people + 1), '' + angle ]), c: 0,
        e: '' + angle + '° is ' + angle + '/360 of the pupils: (' + angle + ' ÷ 360) × ' + total + ' = ' + people + '.' };
  }}
];
