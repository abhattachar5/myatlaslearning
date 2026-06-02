// content/y9/math/generators/gen-11.js — Year 9 Maths Topic 11 (Angles).
// Angle-rule and polygon islands generate; quadrilaterals/circles use the static
// bank. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _y9deg(n) { return n + '°'; }
var _Y9_NGON = [5, 6, 8, 9, 10, 12];   // 360 divides exactly by each

// ── m9i-11-1 — Angle Rules on Lines & in Triangles ───────────────────────────
TEST_GENERATORS["m9i-11-1"] = [
  // angles on a straight line
  { depth: 'medium', gen: function () {
      var a = _randInt(3, 15) * 10; if (a === 90) a = 100;
      return { q: 'Two angles on a straight line are ' + _y9deg(a) + ' and x. Find x.',
        opts: _buildOpts(_y9deg(180 - a), [ _y9deg(a), _y9deg(360 - a), _y9deg(90) ]), c: 0,
        e: 'Angles on a line add to 180°, so x = 180° − ' + a + '° = ' + (180 - a) + '°.' };
  }},
  // third angle of a triangle
  { depth: 'medium', gen: function () {
      var a = _randInt(3, 9) * 10, b = _randInt(3, 9) * 10;
      while (a + b >= 170 || a + b === 90) { a = _randInt(3, 9) * 10; b = _randInt(3, 9) * 10; }
      return { q: 'A triangle has angles ' + _y9deg(a) + ' and ' + _y9deg(b) + '. Find the third angle.',
        opts: _buildOpts(_y9deg(180 - a - b), [ _y9deg(a + b), _y9deg(360 - a - b), _y9deg(90) ]), c: 0,
        e: 'Angles in a triangle add to 180°: 180° − ' + a + '° − ' + b + '° = ' + (180 - a - b) + '°.' };
  }},
  // angles around a point
  { depth: 'medium', gen: function () {
      var a = _randInt(8, 17) * 10, b = _randInt(5, 12) * 10;
      while (a + b >= 350 || a + b === 180) { a = _randInt(8, 17) * 10; b = _randInt(5, 12) * 10; }
      return { q: 'Angles around a point are ' + _y9deg(a) + ', ' + _y9deg(b) + ' and x. Find x.',
        opts: _buildOpts(_y9deg(360 - a - b), [ _y9deg(a + b), _y9deg(360 - a), _y9deg(180) ]), c: 0,
        e: 'Angles around a point add to 360°: 360° − ' + a + '° − ' + b + '° = ' + (360 - a - b) + '°.' };
  }},
  // vertically opposite (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(3, 15) * 10; if (a === 90) a = 110;
      return { q: 'Two straight lines cross. One angle is ' + _y9deg(a) + '. Find the vertically opposite angle.',
        opts: _buildOpts(_y9deg(a), [ _y9deg(180 - a), _y9deg(360 - a), _y9deg(90) ]), c: 0,
        e: 'Vertically opposite angles are equal, so it is also ' + a + '°.' };
  }},
  // parallel lines, alternate angle (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(3, 14) * 10; if (a === 90) a = 100;
      return { q: 'A line crosses two parallel lines; one angle is ' + _y9deg(a) + '. Find its alternate (Z) angle.',
        opts: _buildOpts(_y9deg(a), [ _y9deg(180 - a), _y9deg(90), _y9deg(360 - a) ]), c: 0,
        e: 'Alternate angles between parallel lines are equal, so it is ' + a + '°.' };
  }}
];

// ── m9i-11-2 — Angles in Polygons ────────────────────────────────────────────
TEST_GENERATORS["m9i-11-2"] = [
  // exterior angle of a regular polygon
  { depth: 'medium', gen: function () {
      var n = _Y9_NGON[_randInt(0, _Y9_NGON.length - 1)], ext = 360 / n;
      return { q: 'What is each exterior angle of a regular ' + n + '-sided polygon?',
        opts: _buildOpts(_y9deg(ext), [ _y9deg(180 - ext), _y9deg(360 - ext), _y9deg(ext + 10) ]), c: 0,
        e: 'Exterior angles add to 360°: 360° ÷ ' + n + ' = ' + ext + '°.' };
  }},
  // interior angle sum
  { depth: 'medium', gen: function () {
      var n = _randInt(4, 10);
      return { q: 'What is the interior-angle sum of a polygon with ' + n + ' sides?',
        opts: _buildOpts(_y9deg((n - 2) * 180), [ _y9deg(n * 180), _y9deg((n - 1) * 180), _y9deg((n - 2) * 360) ]), c: 0,
        e: '(n − 2) × 180° = (' + n + ' − 2) × 180° = ' + ((n - 2) * 180) + '°.' };
  }},
  // interior angle of a regular polygon (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var n = _Y9_NGON[_randInt(0, _Y9_NGON.length - 1)], int = (n - 2) * 180 / n;
      return { q: 'Find each interior angle of a regular ' + n + '-sided polygon.',
        opts: _buildOpts(_y9deg(int), [ _y9deg(360 / n), _y9deg(180), _y9deg((n - 2) * 180) ]), c: 0,
        e: 'Interior sum = ' + ((n - 2) * 180) + '°; each angle = ' + ((n - 2) * 180) + '° ÷ ' + n + ' = ' + int + '°.' };
  }},
  // number of sides from exterior angle (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var n = _Y9_NGON[_randInt(0, _Y9_NGON.length - 1)], ext = 360 / n;
      return { q: 'A regular polygon has exterior angles of ' + _y9deg(ext) + '. How many sides has it?',
        opts: _buildOpts('' + n, [ '' + (n + 1), '' + (n - 1), '' + (360 - ext) ]), c: 0,
        e: 'Number of sides = 360° ÷ exterior angle = 360° ÷ ' + ext + '° = ' + n + '.' };
  }}
];
