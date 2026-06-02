// content/y10/math/generators/gen-9.js — Year 10 Maths Topic 9 (Transformations).
// Coordinate reflections, translations and enlargement scaling. Uses _randInt/_buildOpts.
// Validated by scripts/check-generators.js.

function _y10pt(a, b) { return '(' + a + ', ' + b + ')'; }

// ── m10i-09-1 — Reflections & Rotations ──────────────────────────────────────
TEST_GENERATORS["m10i-09-1"] = [
  // reflect in the x-axis: (x, y) → (x, −y)
  { depth: 'medium', gen: function () {
      var x = _randInt(1, 8), y = _randInt(1, 8);
      return { q: 'Reflect the point ' + _y10pt(x, y) + ' in the x-axis.',
        opts: _buildOpts(_y10pt(x, -y), [ _y10pt(-x, y), _y10pt(-x, -y), _y10pt(y, x) ]), c: 0,
        e: 'Reflecting in the x-axis changes the sign of the y-coordinate: ' + _y10pt(x, -y) + '.' };
  }},
  // reflect in the y-axis: (x, y) → (−x, y)
  { depth: 'medium', gen: function () {
      var x = _randInt(1, 8), y = _randInt(1, 8);
      return { q: 'Reflect the point ' + _y10pt(x, y) + ' in the y-axis.',
        opts: _buildOpts(_y10pt(-x, y), [ _y10pt(x, -y), _y10pt(-x, -y), _y10pt(y, x) ]), c: 0,
        e: 'Reflecting in the y-axis changes the sign of the x-coordinate: ' + _y10pt(-x, y) + '.' };
  }},
  // reflect in y = x: (x, y) → (y, x) (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var x = _randInt(1, 8), y = _randInt(1, 8);
      if (x === y) y = (y % 8) + 1;
      return { q: 'Reflect the point ' + _y10pt(x, y) + ' in the line y = x.',
        opts: _buildOpts(_y10pt(y, x), [ _y10pt(-x, y), _y10pt(x, -y), _y10pt(-x, -y) ]), c: 0,
        e: 'Reflecting in y = x swaps the coordinates: ' + _y10pt(y, x) + '.' };
  }},
  // rotate 180° about the origin: (x, y) → (−x, −y) (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var x = _randInt(1, 8), y = _randInt(1, 8);
      return { q: 'Rotate the point ' + _y10pt(x, y) + ' by 180° about the origin.',
        opts: _buildOpts(_y10pt(-x, -y), [ _y10pt(x, -y), _y10pt(-x, y), _y10pt(y, x) ]), c: 0,
        e: 'A 180° rotation about the origin changes the sign of both coordinates: ' + _y10pt(-x, -y) + '.' };
  }}
];

// ── m10i-09-2 — Translations & Vectors ───────────────────────────────────────
TEST_GENERATORS["m10i-09-2"] = [
  // translate by a positive vector
  { depth: 'medium', gen: function () {
      var x = _randInt(1, 6), y = _randInt(1, 6), a = _randInt(1, 6), b = _randInt(1, 6);
      return { q: 'Translate the point ' + _y10pt(x, y) + ' by the vector (' + a + ', ' + b + ').',
        opts: _buildOpts(_y10pt(x + a, y + b), [ _y10pt(x - a, y - b), _y10pt(x + a, y - b), _y10pt(a, b) ]), c: 0,
        e: 'Add the vector: (' + x + ' + ' + a + ', ' + y + ' + ' + b + ') = ' + _y10pt(x + a, y + b) + '.' };
  }},
  // translate by a vector with negatives
  { depth: 'medium', gen: function () {
      var x = _randInt(4, 9), y = _randInt(4, 9), a = -_randInt(1, 3), b = -_randInt(1, 3);
      return { q: 'Translate the point ' + _y10pt(x, y) + ' by the vector (' + a + ', ' + b + ').',
        opts: _buildOpts(_y10pt(x + a, y + b), [ _y10pt(x - a, y - b), _y10pt(x + a, y - b), _y10pt(x, y) ]), c: 0,
        e: 'Add the vector: (' + x + ' + (' + a + '), ' + y + ' + (' + b + ')) = ' + _y10pt(x + a, y + b) + '.' };
  }},
  // combine two translations (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a1 = _randInt(1, 5), b1 = _randInt(1, 5), a2 = _randInt(-4, 5), b2 = _randInt(-4, 5);
      if (a2 === 0) a2 = 2;
      if (b2 === 0) b2 = -3;
      return { q: 'Combine the translations (' + a1 + ', ' + b1 + ') then (' + a2 + ', ' + b2 + ') into one vector.',
        opts: _buildOpts('(' + (a1 + a2) + ', ' + (b1 + b2) + ')', [ '(' + (a1 - a2) + ', ' + (b1 - b2) + ')', '(' + (a1 + a2) + ', ' + (b1 - b2) + ')', '(' + (a1 * a2) + ', ' + (b1 * b2) + ')' ]), c: 0,
        e: 'Add the vectors: (' + a1 + ' + ' + a2 + ', ' + b1 + ' + ' + b2 + ') = (' + (a1 + a2) + ', ' + (b1 + b2) + ').' };
  }},
  // enlargement: new length = scale factor × length (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var len = _randInt(3, 9), sf = _randInt(2, 5);
      return { q: 'A line of length ' + len + ' cm is enlarged by scale factor ' + sf + '. Find the new length.',
        opts: _buildOpts((len * sf) + ' cm', [ (len + sf) + ' cm', (len * sf + sf) + ' cm', (2 * len * sf) + ' cm' ]), c: 0,
        e: 'Multiply by the scale factor: ' + len + ' × ' + sf + ' = ' + (len * sf) + ' cm.' };
  }}
];
