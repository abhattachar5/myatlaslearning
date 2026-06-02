// content/y10/math/generators/gen-10.js — Year 10 Maths Topic 10 (Similarity).
// Congruence island uses its static bank; scale-factor islands generate.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-10-2 — Similar Shapes & Scale Factors ───────────────────────────────
TEST_GENERATORS["m10i-10-2"] = [
  // find the scale factor
  { depth: 'medium', gen: function () {
      var small = _randInt(2, 8), k = _randInt(2, 5);
      if (small === 2 && k === 2) k = 3;
      var large = small * k;
      return { q: 'Two similar shapes: a side is ' + small + ' cm on the small one and ' + large + ' cm on the large. Find the scale factor.',
        opts: _buildOpts('' + k, [ '' + (large - small), '' + (k + 1), '' + (small + large) ]), c: 0,
        e: 'Scale factor = large ÷ small = ' + large + ' ÷ ' + small + ' = ' + k + '.' };
  }},
  // small → large (multiply)
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 5), other = _randInt(2, 7);
      if (other === 2 && k === 2) k = 3;
      return { q: 'Two similar shapes have scale factor ' + k + '. A ' + other + ' cm side on the small shape becomes what on the large?',
        opts: _buildOpts((other * k) + ' cm', [ (other + k) + ' cm', (other * k + k) + ' cm', (2 * other * k) + ' cm' ]), c: 0,
        e: 'Multiply by the scale factor: ' + other + ' × ' + k + ' = ' + (other * k) + ' cm.' };
  }},
  // large → small (divide, greater-depth)
  { depth: 'greater-depth', gen: function () {
      var k = _randInt(2, 5), small = _randInt(2, 8);
      if (small === 2 && k === 2) k = 3;
      var large = small * k;
      return { q: 'Two similar shapes have scale factor ' + k + '. A ' + large + ' cm side on the large shape matches what on the small?',
        opts: _buildOpts(small + ' cm', [ (large * k) + ' cm', (large - k) + ' cm', (small + k) + ' cm' ]), c: 0,
        e: 'Divide by the scale factor: ' + large + ' ÷ ' + k + ' = ' + small + ' cm.' };
  }}
];

// ── m10i-10-3 — Area & Volume Scale Factors ──────────────────────────────────
TEST_GENERATORS["m10i-10-3"] = [
  // area scale factor = k²
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 6);
      return { q: 'Two similar shapes have linear scale factor ' + k + '. How many times bigger is the area?',
        opts: _buildOpts('' + (k * k), [ '' + k, '' + (k * k * k), '' + (k * k + k) ]), c: 0,
        e: 'Area scale factor = k² = ' + k + '² = ' + (k * k) + '.' };
  }},
  // volume scale factor = k³
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 5);
      return { q: 'Two similar solids have linear scale factor ' + k + '. How many times bigger is the volume?',
        opts: _buildOpts('' + (k * k * k), [ '' + (k * k), '' + k, '' + (k + 1) ]), c: 0,
        e: 'Volume scale factor = k³ = ' + k + '³ = ' + (k * k * k) + '.' };
  }},
  // apply area scale factor (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var k = _randInt(2, 5), areaS = _randInt(3, 12), areaL = areaS * k * k;
      return { q: 'A small shape has area ' + areaS + ' cm². With linear scale factor ' + k + ', find the large area.',
        opts: _buildOpts(areaL + ' cm²', [ (areaS * k) + ' cm²', (areaS * k * k * k) + ' cm²', (areaL + k) + ' cm²' ]), c: 0,
        e: 'Area scale factor = ' + k + '² = ' + (k * k) + ', so ' + areaS + ' × ' + (k * k) + ' = ' + areaL + ' cm².' };
  }},
  // apply volume scale factor (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var k = _randInt(2, 4), volS = _randInt(2, 9), volL = volS * k * k * k;
      return { q: 'A small solid has volume ' + volS + ' cm³. With linear scale factor ' + k + ', find the large volume.',
        opts: _buildOpts(volL + ' cm³', [ (volS * k) + ' cm³', (volS * k * k) + ' cm³', (volL + k) + ' cm³' ]), c: 0,
        e: 'Volume scale factor = ' + k + '³ = ' + (k * k * k) + ', so ' + volS + ' × ' + (k * k * k) + ' = ' + volL + ' cm³.' };
  }}
];
