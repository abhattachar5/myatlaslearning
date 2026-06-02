// content/y11/math/generators/gen-13.js — Year 11 Maths Topic 13 (Conditional Probability & Sets).
// Conditional-probability island uses its static bank; Venn counting generates.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-13-2 — Set Notation & Venn Diagrams ─────────────────────────────────
TEST_GENERATORS["m11i-13-2"] = [
  // how many do neither
  { depth: 'medium', gen: function () {
      var both = _randInt(2, 6), aOnly = _randInt(3, 9), bOnly = _randInt(3, 9), neither = _randInt(2, 7);
      if (neither === both) neither += 1;
      var A = aOnly + both, B = bOnly + both, total = aOnly + bOnly + both + neither;
      return { q: 'In a group of ' + total + ', ' + A + ' do A and ' + B + ' do B, with ' + both + ' doing both. How many do neither?',
        opts: _buildOpts('' + neither, [ '' + (neither + both), '' + both, '' + (neither + both + 1) ]), c: 0,
        e: 'At least one = A + B − both = ' + A + ' + ' + B + ' − ' + both + ' = ' + (A + B - both) + '. Neither = ' + total + ' − ' + (A + B - both) + ' = ' + neither + '.' };
  }},
  // how many do A only
  { depth: 'medium', gen: function () {
      var both = _randInt(2, 6), aOnly = _randInt(3, 9), bOnly = _randInt(3, 9);
      if (aOnly === both) aOnly += 1;
      var A = aOnly + both;
      return { q: '' + A + ' people do A and ' + both + ' do both A and B. How many do A only?',
        opts: _buildOpts('' + aOnly, [ '' + A, '' + both, '' + (A + both) ]), c: 0,
        e: 'A only = A − both = ' + A + ' − ' + both + ' = ' + aOnly + '.' };
  }},
  // meaning of intersection (greater-depth)
  { depth: 'greater-depth', gen: function () {
      return { q: 'In set notation, A ∩ B means the elements in:',
        opts: _buildOpts('Both A and B', [ 'A or B', 'Neither A nor B', 'A only' ]), c: 0,
        e: 'The intersection ∩ is the overlap — elements in both sets.' };
  }},
  // how many in the union (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var both = _randInt(2, 6), aOnly = _randInt(3, 9), bOnly = _randInt(3, 9);
      var A = aOnly + both, B = bOnly + both, union = aOnly + bOnly + both;
      return { q: '' + A + ' do A, ' + B + ' do B, ' + both + ' do both. How many are in A ∪ B?',
        opts: _buildOpts('' + union, [ '' + (A + B), '' + both, '' + (union + 1) ]), c: 0,
        e: 'A ∪ B = A + B − both = ' + A + ' + ' + B + ' − ' + both + ' = ' + union + ' (do not double-count the overlap).' };
  }}
];
