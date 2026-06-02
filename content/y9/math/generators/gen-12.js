// content/y9/math/generators/gen-12.js — Year 9 Maths Topic 12 (Mensuration).
// Perimeter/area and volume islands generate; plans & elevations use the static
// bank. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

function _y9rt(x) { return parseFloat(x.toFixed(2)); }   // trim float noise

// ── m9i-12-1 — Perimeter & Area ──────────────────────────────────────────────
TEST_GENERATORS["m9i-12-1"] = [
  // rectangle area
  { depth: 'medium', gen: function () {
      var l = _randInt(4, 12), w = _randInt(3, 9);
      if (l === w) l += 1;
      if ((l - 2) * (w - 2) === 4) w += 1;   // avoid perimeter == area
      return { q: 'Find the area of a rectangle ' + l + ' cm by ' + w + ' cm.',
        opts: _buildOpts((l * w) + ' cm²', [ (2 * (l + w)) + ' cm²', (l + w) + ' cm²', (2 * l * w) + ' cm²' ]), c: 0,
        e: 'Area = length × width = ' + l + ' × ' + w + ' = ' + (l * w) + ' cm². (2×(' + l + '+' + w + ') = ' + (2 * (l + w)) + ' cm is the perimeter.)' };
  }},
  // triangle area
  { depth: 'medium', gen: function () {
      var b = [4, 6, 8, 10, 12][_randInt(0, 4)], h = _randInt(3, 9);
      if ((b - 2) * (h - 2) === 4) h += 1;   // avoid ½bh == b+h
      return { q: 'Find the area of a triangle with base ' + b + ' cm and height ' + h + ' cm.',
        opts: _buildOpts((b * h / 2) + ' cm²', [ (b * h) + ' cm²', (b + h) + ' cm²', (b * h / 2 + b) + ' cm²' ]), c: 0,
        e: 'Area = ½ × base × height = ½ × ' + b + ' × ' + h + ' = ' + (b * h / 2) + ' cm².' };
  }},
  // parallelogram area
  { depth: 'medium', gen: function () {
      var b = _randInt(4, 11), h = _randInt(3, 8);
      if ((b - 2) * (h - 2) === 4) h += 1;   // avoid area == perimeter
      return { q: 'Find the area of a parallelogram with base ' + b + ' cm and height ' + h + ' cm.',
        opts: _buildOpts((b * h) + ' cm²', [ (b * h / 2) + ' cm²', (2 * (b + h)) + ' cm²', (b + h) + ' cm²' ]), c: 0,
        e: 'Area = base × height = ' + b + ' × ' + h + ' = ' + (b * h) + ' cm².' };
  }},
  // circle area (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r = _randInt(3, 7), area = _y9rt(3.14 * r * r);
      return { q: 'Find the area of a circle with radius ' + r + ' cm (π ≈ 3.14).',
        opts: _buildOpts(area + ' cm²', [ _y9rt(2 * 3.14 * r) + ' cm²', _y9rt(3.14 * r) + ' cm²', (r * r) + ' cm²' ]), c: 0,
        e: 'Area = πr² = 3.14 × ' + r + '² = 3.14 × ' + (r * r) + ' = ' + area + ' cm².' };
  }},
  // circle circumference (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var d = _randInt(5, 14), circ = _y9rt(3.14 * d);
      return { q: 'Find the circumference of a circle with diameter ' + d + ' cm (π ≈ 3.14).',
        opts: _buildOpts(circ + ' cm', [ _y9rt(3.14 * d * d / 4) + ' cm', _y9rt(3.14 * d / 2) + ' cm', _y9rt(3.14 * d * d) + ' cm' ]), c: 0,
        e: 'Circumference = πd = 3.14 × ' + d + ' = ' + circ + ' cm.' };
  }}
];

// ── m9i-12-2 — Surface Area & Volume ─────────────────────────────────────────
TEST_GENERATORS["m9i-12-2"] = [
  // cuboid volume
  { depth: 'medium', gen: function () {
      var l = _randInt(3, 8), w = _randInt(2, 6), h = _randInt(2, 6);
      return { q: 'Find the volume of a cuboid ' + l + ' cm × ' + w + ' cm × ' + h + ' cm.',
        opts: _buildOpts((l * w * h) + ' cm³', [ (2 * (l * w + w * h + l * h)) + ' cm³', (l + w + h) + ' cm³', (l * w) + ' cm³' ]), c: 0,
        e: 'Volume = ' + l + ' × ' + w + ' × ' + h + ' = ' + (l * w * h) + ' cm³.' };
  }},
  // prism volume from cross-section
  { depth: 'medium', gen: function () {
      var cs = _randInt(8, 25), len = _randInt(4, 12);
      return { q: 'A prism has cross-section area ' + cs + ' cm² and length ' + len + ' cm. Find its volume.',
        opts: _buildOpts((cs * len) + ' cm³', [ (cs + len) + ' cm³', (cs * len / 2) + ' cm³', (2 * cs * len) + ' cm³' ]), c: 0,
        e: 'Volume = cross-section × length = ' + cs + ' × ' + len + ' = ' + (cs * len) + ' cm³.' };
  }},
  // cube surface area
  { depth: 'medium', gen: function () {
      var s = [2, 3, 5, 7, 8][_randInt(0, 4)];   // avoid s³==6s² (s=6) and s³==4s² (s=4)
      return { q: 'Find the surface area of a cube of side ' + s + ' cm.',
        opts: _buildOpts((6 * s * s) + ' cm²', [ (s * s * s) + ' cm²', (s * s) + ' cm²', (4 * s * s) + ' cm²' ]), c: 0,
        e: 'A cube has 6 square faces: 6 × ' + s + '² = 6 × ' + (s * s) + ' = ' + (6 * s * s) + ' cm².' };
  }},
  // cylinder volume (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var r = _randInt(2, 6), h = _randInt(3, 10), vol = _y9rt(3.14 * r * r * h);
      return { q: 'Find the volume of a cylinder with radius ' + r + ' cm and height ' + h + ' cm (π ≈ 3.14).',
        opts: _buildOpts(vol + ' cm³', [ _y9rt(3.14 * r * h) + ' cm³', _y9rt(3.14 * r * r) + ' cm³', _y9rt(2 * vol) + ' cm³' ]), c: 0,
        e: 'V = πr²h = 3.14 × ' + r + '² × ' + h + ' = 3.14 × ' + (r * r * h) + ' = ' + vol + ' cm³.' };
  }},
  // cuboid volume, larger (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var l = _randInt(5, 12), w = _randInt(4, 9), h = _randInt(3, 8);
      return { q: 'A tank is a cuboid ' + l + ' cm × ' + w + ' cm × ' + h + ' cm. Find its volume.',
        opts: _buildOpts((l * w * h) + ' cm³', [ (l * w) + ' cm³', (2 * (l * w + w * h + l * h)) + ' cm³', (l * w * h + l) + ' cm³' ]), c: 0,
        e: 'Volume = ' + l + ' × ' + w + ' × ' + h + ' = ' + (l * w * h) + ' cm³.' };
  }}
];
