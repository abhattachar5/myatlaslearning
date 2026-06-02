// content/y11/math/generators/gen-8.js — Year 11 Maths Topic 8 (Sine & Cosine Rules).
// Sine/cosine-rule islands use static banks (need diagrams); the area island
// generates with exact-value angles. Uses _randInt/_buildOpts. Validated by check-generators.js.

// ── m11i-08-3 — Area of a Triangle (½ ab sin C) ──────────────────────────────
TEST_GENERATORS["m11i-08-3"] = [
  // included angle 30° (sin = 0.5)
  { depth: 'medium', gen: function () {
      var a = 2 * _randInt(2, 6), b = 2 * _randInt(2, 6), area = a * b / 4;   // ½·a·b·0.5
      return { q: 'Find the area of a triangle with sides ' + a + ' and ' + b + ' and included angle 30°.',
        opts: _buildOpts('' + area, [ '' + (a * b / 2), '' + (a * b), '' + (area + 2) ]), c: 0,
        e: 'Area = ½ × ' + a + ' × ' + b + ' × sin 30° = ½ × ' + (a * b) + ' × 0.5 = ' + area + '.' };
  }},
  // included angle 90° (sin = 1)
  { depth: 'medium', gen: function () {
      var a = 2 * _randInt(2, 6), b = 2 * _randInt(2, 6), area = a * b / 2;
      return { q: 'Find the area of a triangle with sides ' + a + ' and ' + b + ' and included angle 90°.',
        opts: _buildOpts('' + area, [ '' + (a * b), '' + (a * b / 4), '' + (area + 2) ]), c: 0,
        e: 'Area = ½ × ' + a + ' × ' + b + ' × sin 90° = ½ × ' + (a * b) + ' × 1 = ' + area + '.' };
  }},
  // included angle 150° (sin = 0.5) (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = 2 * _randInt(2, 6), b = 2 * _randInt(2, 6), area = a * b / 4;
      return { q: 'Find the area of a triangle with sides ' + a + ' and ' + b + ' and included angle 150°.',
        opts: _buildOpts('' + area, [ '' + (a * b / 2), '' + (a * b), '' + (area + 2) ]), c: 0,
        e: 'sin 150° = 0.5, so Area = ½ × ' + a + ' × ' + b + ' × 0.5 = ' + area + '.' };
  }},
  // which formula to use (greater-depth)
  { depth: 'greater-depth', gen: function () {
      return { q: 'You know two sides and the angle between them. Which gives the area?',
        opts: _buildOpts('½ab sin C', [ '½ × base × height', 'a² = b² + c² − 2bc cos A', 'a/sin A = b/sin B' ]), c: 0,
        e: 'With two sides and the included angle, use Area = ½ab sin C.' };
  }}
];
