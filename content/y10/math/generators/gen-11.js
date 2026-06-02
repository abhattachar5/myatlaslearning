// content/y10/math/generators/gen-11.js — Year 10 Maths Topic 11 (Compound Measures
// & Proportion). Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-11-1 — Speed, Density & Pressure ────────────────────────────────────
TEST_GENERATORS["m10i-11-1"] = [
  // speed = distance / time
  { depth: 'medium', gen: function () {
      var speed = _randInt(10, 90), time = _randInt(2, 6), dist = speed * time;
      return { q: 'A car travels ' + dist + ' km in ' + time + ' hours. Find its average speed.',
        opts: _buildOpts(speed + ' km/h', [ dist + ' km/h', (dist + time) + ' km/h', (speed + time) + ' km/h' ]), c: 0,
        e: 'speed = distance ÷ time = ' + dist + ' ÷ ' + time + ' = ' + speed + ' km/h.' };
  }},
  // density = mass / volume
  { depth: 'medium', gen: function () {
      var density = _randInt(2, 12), vol = _randInt(3, 9), mass = density * vol;
      return { q: 'An object has mass ' + mass + ' g and volume ' + vol + ' cm³. Find its density.',
        opts: _buildOpts(density + ' g/cm³', [ mass + ' g/cm³', (mass + vol) + ' g/cm³', (density + vol) + ' g/cm³' ]), c: 0,
        e: 'density = mass ÷ volume = ' + mass + ' ÷ ' + vol + ' = ' + density + ' g/cm³.' };
  }},
  // distance = speed × time (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var speed = _randInt(20, 70), time = _randInt(2, 5), dist = speed * time;
      return { q: 'A train travels at ' + speed + ' km/h for ' + time + ' hours. How far does it go?',
        opts: _buildOpts(dist + ' km', [ (speed + time) + ' km', (speed - time) + ' km', (dist + speed) + ' km' ]), c: 0,
        e: 'distance = speed × time = ' + speed + ' × ' + time + ' = ' + dist + ' km.' };
  }},
  // time = distance / speed (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var speed = _randInt(10, 40), time = _randInt(2, 6), dist = speed * time;
      return { q: 'A journey of ' + dist + ' miles is driven at ' + speed + ' mph. How long does it take?',
        opts: _buildOpts(time + ' hours', [ (dist) + ' hours', (time + 1) + ' hours', (dist - speed) + ' hours' ]), c: 0,
        e: 'time = distance ÷ speed = ' + dist + ' ÷ ' + speed + ' = ' + time + ' hours.' };
  }}
];

// ── m10i-11-2 — Direct & Inverse Proportion ──────────────────────────────────
TEST_GENERATORS["m10i-11-2"] = [
  // direct: find k then y
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 6), x1 = _randInt(2, 6), x2 = _randInt(3, 9);
      if (x2 === x1) x2 += 1;
      return { q: 'y is directly proportional to x, and y = ' + (k * x1) + ' when x = ' + x1 + '. Find y when x = ' + x2 + '.',
        opts: _buildOpts('' + (k * x2), [ '' + (k * x1), '' + (k * x2 + k), '' + (x2 + k) ]), c: 0,
        e: 'k = ' + (k * x1) + ' ÷ ' + x1 + ' = ' + k + ', so y = ' + k + 'x; when x = ' + x2 + ', y = ' + (k * x2) + '.' };
  }},
  // direct: find k
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 8), x = _randInt(2, 7);
      if (k === 2 && x === 2) x = 3;
      var y = k * x;
      return { q: 'y ∝ x and y = ' + y + ' when x = ' + x + '. Find the constant k.',
        opts: _buildOpts('' + k, [ '' + y, '' + (y + x), '' + (k + x) ]), c: 0,
        e: 'k = y ÷ x = ' + y + ' ÷ ' + x + ' = ' + k + '.' };
  }},
  // inverse: find k then y (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var x1 = _randInt(2, 6), x2 = _randInt(2, 6);
      if (x2 === x1) x2 = (x2 % 6) + 1;
      var m = _randInt(2, 4), k = x1 * x2 * m;   // divisible by both x1 and x2
      var y1 = k / x1, v = k / x2;                // y1 = x2·m, v = x1·m
      if (y1 === v + 1 || y1 === v + 2) { m += 2; k = x1 * x2 * m; y1 = k / x1; v = k / x2; }
      return { q: 'y is inversely proportional to x, and y = ' + y1 + ' when x = ' + x1 + '. Find y when x = ' + x2 + '.',
        opts: _buildOpts('' + v, [ '' + y1, '' + (v + 1), '' + (v + 2) ]), c: 0,
        e: 'k = xy = ' + x1 + ' × ' + y1 + ' = ' + k + ', so y = ' + k + '/x; when x = ' + x2 + ', y = ' + v + '.' };
  }},
  // inverse: find k (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var x = _randInt(2, 6), y = _randInt(2, 8);
      if (x === 2 && y === 2) y = 3;
      var k = x * y;
      return { q: 'y is inversely proportional to x, and y = ' + y + ' when x = ' + x + '. Find k.',
        opts: _buildOpts('' + k, [ '' + (x + y), '' + (y) + '/' + x, '' + (k + 1) ]), c: 0,
        e: 'For y = k/x, k = xy = ' + x + ' × ' + y + ' = ' + k + '.' };
  }}
];

// ── m10i-11-3 — Ratio & Proportion Problems ──────────────────────────────────
TEST_GENERATORS["m10i-11-3"] = [
  // recipe scaling
  { depth: 'medium', gen: function () {
      var p1 = _randInt(2, 5), per = _randInt(40, 120), p2 = _randInt(2, 8);
      if (p2 === p1) p2 += 1;
      return { q: 'A recipe for ' + p1 + ' people uses ' + (p1 * per) + ' g of flour. How much for ' + p2 + ' people?',
        opts: _buildOpts((p2 * per) + ' g', [ (p1 * per) + ' g', ((p1 + p2) * per) + ' g', (p2 * per + per) + ' g' ]), c: 0,
        e: 'Per person ' + (p1 * per) + ' ÷ ' + p1 + ' = ' + per + ' g; for ' + p2 + ': ' + p2 + ' × ' + per + ' = ' + (p2 * per) + ' g.' };
  }},
  // ratio: find one part from another
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = _randInt(3, 6), one = _randInt(2, 8);
      return { q: 'A mix is cement : sand = ' + a + ' : ' + b + '. For ' + (a * one) + ' kg of cement, how much sand?',
        opts: _buildOpts((b * one) + ' kg', [ (a * one) + ' kg', ((a + b) * one) + ' kg', (b * one + a) + ' kg' ]), c: 0,
        e: 'One share = ' + (a * one) + ' ÷ ' + a + ' = ' + one + ' kg; sand = ' + b + ' × ' + one + ' = ' + (b * one) + ' kg.' };
  }},
  // inverse: workers and time (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var w1 = _randInt(4, 8), t1 = _randInt(6, 12), total = w1 * t1;
      var divs = [];
      for (var d = 2; d <= total; d++) { if (total % d === 0 && d !== w1) divs.push(d); }
      var w2 = divs[_randInt(0, divs.length - 1)];
      return { q: '' + w1 + ' people paint a fence in ' + t1 + ' hours. How long for ' + w2 + ' people?',
        opts: _buildOpts((total / w2) + ' hours', [ (total / w1) + ' hours', (w2 * t1) + ' hours', (total / w2 + 1) + ' hours' ]), c: 0,
        e: 'Inverse: total = ' + w1 + ' × ' + t1 + ' = ' + total + ' person-hours; ' + total + ' ÷ ' + w2 + ' = ' + (total / w2) + ' hours.' };
  }},
  // best value (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var na = _randInt(3, 6), ea = _randInt(40, 90), nb = _randInt(7, 10), eb = ea - _randInt(3, 8);
      return { q: 'Which is better value: ' + na + ' for £' + (na * ea / 100).toFixed(2) + ' or ' + nb + ' for £' + (nb * eb / 100).toFixed(2) + '?',
        opts: _buildOpts(nb + ' for £' + (nb * eb / 100).toFixed(2), [ na + ' for £' + (na * ea / 100).toFixed(2), 'They are equal', 'Cannot tell' ]), c: 0,
        e: 'Unit price ' + ea + 'p vs ' + eb + 'p each — the ' + nb + '-pack is cheaper per item.' };
  }}
];
