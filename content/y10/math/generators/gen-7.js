// content/y10/math/generators/gen-7.js — Year 10 Maths Topic 7 (Pythagoras).
// Uses curated triples so answers are whole numbers. Validated by check-generators.js.

var _Y10_TRIP = [[3,4,5],[6,8,10],[5,12,13],[8,15,17],[9,12,15],[7,24,25],[20,21,29],[10,24,26],[12,16,20],[9,40,41]];
function _y10trip() { return _Y10_TRIP[_randInt(0, _Y10_TRIP.length - 1)]; }

// ── m10i-07-1 — Finding the Hypotenuse ───────────────────────────────────────
TEST_GENERATORS["m10i-07-1"] = [
  { depth: 'medium', gen: function () {
      var t = _y10trip(), a = t[0], b = t[1], c = t[2];
      return { q: 'A right-angled triangle has legs ' + a + ' cm and ' + b + ' cm. Find the hypotenuse.',
        opts: _buildOpts(c + ' cm', [ (a + b) + ' cm', (c - 1) + ' cm', (c + 1) + ' cm' ]), c: 0,
        e: 'c² = ' + a + '² + ' + b + '² = ' + (a * a) + ' + ' + (b * b) + ' = ' + (c * c) + ', so c = ' + c + ' cm.' };
  }},
  { depth: 'medium', gen: function () {
      var t = _y10trip(), a = t[0], b = t[1], c = t[2];
      return { q: 'Find the hypotenuse with shorter sides ' + b + ' cm and ' + a + ' cm.',
        opts: _buildOpts(c + ' cm', [ (a + b) + ' cm', (c + 2) + ' cm', (c - 2) + ' cm' ]), c: 0,
        e: 'c² = ' + (a * a) + ' + ' + (b * b) + ' = ' + (c * c) + ', so c = ' + c + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var t = _y10trip(), a = t[0], b = t[1], c = t[2];
      return { q: 'A rectangle is ' + a + ' cm by ' + b + ' cm. Find the length of its diagonal.',
        opts: _buildOpts(c + ' cm', [ (a + b) + ' cm', (c - 1) + ' cm', (2 * a) + ' cm' ]), c: 0,
        e: 'The diagonal is the hypotenuse: √(' + a + '² + ' + b + '²) = √' + (c * c) + ' = ' + c + ' cm.' };
  }}
];

// ── m10i-07-2 — Finding a Shorter Side & Problems ────────────────────────────
TEST_GENERATORS["m10i-07-2"] = [
  { depth: 'medium', gen: function () {
      var t = _y10trip(), a = t[0], b = t[1], c = t[2];
      return { q: 'The hypotenuse is ' + c + ' cm and one leg is ' + a + ' cm. Find the other leg.',
        opts: _buildOpts(b + ' cm', [ (c - a) + ' cm', (b + 1) + ' cm', (b - 1) + ' cm' ]), c: 0,
        e: 'leg² = ' + c + '² − ' + a + '² = ' + (c * c) + ' − ' + (a * a) + ' = ' + (b * b) + ', so leg = ' + b + ' cm.' };
  }},
  { depth: 'medium', gen: function () {
      var t = _y10trip(), a = t[0], b = t[1], c = t[2];
      return { q: 'The hypotenuse is ' + c + ' cm and one leg is ' + b + ' cm. Find the other leg.',
        opts: _buildOpts(a + ' cm', [ (c - b) + ' cm', (a + 1) + ' cm', (a + 2) + ' cm' ]), c: 0,
        e: 'leg² = ' + (c * c) + ' − ' + (b * b) + ' = ' + (a * a) + ', so leg = ' + a + ' cm.' };
  }},
  { depth: 'greater-depth', gen: function () {
      var t = _y10trip(), a = t[0], b = t[1], c = t[2];
      return { q: 'A ' + c + ' m ladder reaches ' + b + ' m up a wall. How far is its base from the wall?',
        opts: _buildOpts(a + ' m', [ (c - b) + ' m', (a + 1) + ' m', (c - a) + ' m' ]), c: 0,
        e: 'base² = ' + c + '² − ' + b + '² = ' + (c * c) + ' − ' + (b * b) + ' = ' + (a * a) + ', so base = ' + a + ' m.' };
  }}
];
