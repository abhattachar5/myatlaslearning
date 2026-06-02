// content/y10/math/generators/gen-6.js — Year 10 Maths Topic 6 (Real-Life Graphs).
// Distance–time speed generates; real-life/rates island uses its static bank.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-06-1 — Distance–Time Graphs ─────────────────────────────────────────
TEST_GENERATORS["m10i-06-1"] = [
  // speed = distance / time (whole-hour)
  { depth: 'medium', gen: function () {
      var speed = _randInt(10, 90), time = _randInt(2, 6), dist = speed * time;
      return { q: 'On a distance–time graph a car covers ' + dist + ' km in ' + time + ' hours. Find the speed.',
        opts: _buildOpts(speed + ' km/h', [ dist + ' km/h', (dist + time) + ' km/h', (speed + time) + ' km/h' ]), c: 0,
        e: 'Gradient = speed = distance ÷ time = ' + dist + ' ÷ ' + time + ' = ' + speed + ' km/h.' };
  }},
  // speed in m/s
  { depth: 'medium', gen: function () {
      var speed = _randInt(3, 12), time = _randInt(5, 20), dist = speed * time;
      return { q: 'A runner covers ' + dist + ' m in ' + time + ' s. Find the speed.',
        opts: _buildOpts(speed + ' m/s', [ dist + ' m/s', (speed + time) + ' m/s', (dist - time) + ' m/s' ]), c: 0,
        e: 'speed = ' + dist + ' ÷ ' + time + ' = ' + speed + ' m/s (the gradient of the graph).' };
  }},
  // identify the steeper (faster) line (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var s1 = _randInt(40, 80), s2 = _randInt(10, 35);
      return { q: 'Two distance–time lines have gradients ' + s1 + ' and ' + s2 + '. Which is faster?',
        opts: _buildOpts('Gradient ' + s1, [ 'Gradient ' + s2, 'They are equal', 'The flatter one' ]), c: 0,
        e: 'Steeper gradient = greater speed, so gradient ' + s1 + ' is faster.' };
  }},
  // half-hour journey (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var speed = 2 * _randInt(10, 40), time = [1.5, 2.5, 3.5][_randInt(0, 2)], dist = speed * time;
      return { q: 'A car covers ' + dist + ' km in ' + time + ' hours. Find the average speed.',
        opts: _buildOpts(speed + ' km/h', [ dist + ' km/h', (dist / 2) + ' km/h', (speed + 5) + ' km/h' ]), c: 0,
        e: 'speed = distance ÷ time = ' + dist + ' ÷ ' + time + ' = ' + speed + ' km/h.' };
  }}
];
