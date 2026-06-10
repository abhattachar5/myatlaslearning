// content/y11/math/generators/gen-14.js — Year 11 Maths Topic 14 (Gradients, Areas under Graphs & Proof).
// Generators for both islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-14-1 — Gradients & Areas under Graphs ───────────────────────────────
TEST_GENERATORS["m11i-14-1"] = [
  // area under a constant-speed graph
  { depth: 'medium', gen: function () {
      var v = 2 * _randInt(2, 6), T = _randInt(3, 9);
      return { q: 'A speed–time graph shows a constant speed of ' + v + ' m/s for ' + T + ' seconds. What distance does the area under the graph represent?',
        opts: _buildOpts((v * T) + ' m', [ (v + T) + ' m', (v * T / 2) + ' m', (2 * v * T) + ' m' ]), c: 0,
        e: 'The area under a speed–time graph is the distance: a rectangle ' + v + ' × ' + T + ' = ' + (v * T) + ' m.' };
  }},
  // trapezium area under a speed–time graph
  { depth: 'medium', gen: function () {
      var u, w, h, A, w2, w3;
      do {
        u = 2 * _randInt(1, 4); w = u + 2 * _randInt(1, 3); h = _randInt(3, 8);
        A = (u + w) / 2 * h; w2 = u + w + h; w3 = (u + w) / 2 + h;
      } while (A === w2 || A === w3 || w2 === w3);
      return { q: 'A speed–time graph rises in a straight line from ' + u + ' m/s to ' + w + ' m/s over ' + h + ' seconds. Use the trapezium area to find the distance travelled.',
        opts: _buildOpts(A + ' m', [ ((u + w) * h) + ' m', w2 + ' m', w3 + ' m' ]), c: 0,
        e: 'Area of a trapezium = ½(a + b)h = ½(' + u + ' + ' + w + ') × ' + h + ' = ' + A + ' m. Forgetting the ½ gives ' + ((u + w) * h) + '.' };
  }},
  // gradient of a chord on y = x² (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(1, 4), q = p + _randInt(2, 3);
      return { q: 'A curve passes through (' + p + ', ' + (p * p) + ') and (' + q + ', ' + (q * q) + '). Estimate the gradient of the curve between these points using the chord.',
        opts: _buildOpts('' + (p + q), [ '' + (q - p), '' + (p * q), '' + (q * q - p * p) ]), c: 0,
        e: 'Gradient of the chord = (change in y) ÷ (change in x) = (' + (q * q) + ' − ' + (p * p) + ') ÷ (' + q + ' − ' + p + ') = ' + (q * q - p * p) + ' ÷ ' + (q - p) + ' = ' + (p + q) + '.' };
  }},
  // what the gradient of a distance–time graph means
  { depth: 'medium', gen: function () {
      var who = ['car', 'cyclist', 'train', 'runner'][_randInt(0, 3)];
      return { q: 'On a distance–time graph for a ' + who + ', what does the gradient at a point represent?',
        opts: _buildOpts('The speed at that moment', [ 'The total distance travelled', 'The acceleration', 'The time taken' ]), c: 0,
        e: 'Gradient = change in distance ÷ change in time = speed. (On a SPEED–time graph the gradient would be acceleration.)' };
  }},
  // what the area under a speed–time graph means (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var who = ['car', 'cyclist', 'train', 'rocket'][_randInt(0, 3)];
      return { q: 'On a speed–time graph for a ' + who + ', what does the area under the graph represent?',
        opts: _buildOpts('The distance travelled', [ 'The average speed', 'The acceleration', 'The maximum speed' ]), c: 0,
        e: 'Area under a speed–time graph = speed × time accumulated = distance travelled.' };
  }}
];

// ── m11i-14-2 — Algebraic Proof ──────────────────────────────────────────────
TEST_GENERATORS["m11i-14-2"] = [
  // always even
  { depth: 'medium', gen: function () {
      var k = _randInt(1, 4);
      return { q: 'For any integer n, which expression is ALWAYS even?',
        opts: _buildOpts('2n + ' + (2 * k), [ '2n + ' + (2 * k + 1), 'n + ' + (2 * k), 'n² + ' + (2 * k) ]), c: 0,
        e: '2n is even for every integer n, and adding the even number ' + (2 * k) + ' keeps it even. The others depend on whether n is odd or even.' };
  }},
  // always odd
  { depth: 'medium', gen: function () {
      var k = _randInt(1, 4);
      return { q: 'For any integer n, which expression is ALWAYS odd?',
        opts: _buildOpts('2n + ' + (2 * k + 1), [ '2n + ' + (2 * k), 'n + ' + (2 * k + 1), '3n + 1' ]), c: 0,
        e: '2n is always even, so 2n + ' + (2 * k + 1) + ' (even + odd) is always odd. n + ' + (2 * k + 1) + ' and 3n + 1 change parity with n.' };
  }},
  // sum of consecutive integers
  { depth: 'medium', gen: function () {
      var v = _randInt(0, 1);
      var expr = v === 0 ? 'n + (n + 1)' : '(n + 1) + (n + 2)';
      var sum = v === 0 ? '2n + 1' : '2n + 3';
      return { q: 'Two consecutive integers are added: ' + expr + '. What does this simplify to, and what does it prove?',
        opts: _buildOpts(sum + ', which is always odd', [ sum + ', which is always even', '2n, which is always even', 'n², which could be odd or even' ]), c: 0,
        e: expr + ' = ' + sum + '. Since 2n (or 2n + 2) is even, adding 1 makes it odd — the sum of two consecutive integers is always odd.' };
  }},
  // difference of squares proof (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 5);
      return { q: 'Expand and factorise (n + ' + a + ')² − n² to show it is always divisible by ' + a + '.',
        opts: _buildOpts(a + '(2n + ' + a + ')', [ a + '(2n − ' + a + ')', (2 * a) + 'n', a + '(n + ' + a + ')' ]), c: 0,
        e: '(n + ' + a + ')² − n² = n² + ' + (2 * a) + 'n + ' + (a * a) + ' − n² = ' + (2 * a) + 'n + ' + (a * a) + ' = ' + a + '(2n + ' + a + '), which has ' + a + ' as a factor for every integer n.' };
  }},
  // sum of two consecutive odd numbers (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var start = _randInt(0, 1);
      var e1 = start === 0 ? '2n + 1' : '2n + 3', e2 = start === 0 ? '2n + 3' : '2n + 5';
      var ans = start === 0 ? '4(n + 1)' : '4(n + 2)';
      var w1 = start === 0 ? '2(2n + 1)' : '2(2n + 3)';
      var w2 = start === 0 ? '4n + 2' : '4n + 6';
      var w3 = start === 0 ? '2(n + 2)' : '2(n + 4)';
      return { q: 'Two consecutive odd numbers are written as (' + e1 + ') and (' + e2 + '). Their sum factorises as:',
        opts: _buildOpts(ans, [ w1, w2, w3 ]), c: 0,
        e: '(' + e1 + ') + (' + e2 + ') = ' + (start === 0 ? '4n + 4' : '4n + 8') + ' = ' + ans + ' — always a multiple of 4.' };
  }}
];
