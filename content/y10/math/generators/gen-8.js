// content/y10/math/generators/gen-8.js — Year 10 Maths Topic 8 (Trigonometry).
// Restricted to exact-value cases (30°, 45°, 60°) so answers stay clean.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-08-1 — Finding a Side ────────────────────────────────────────────────
TEST_GENERATORS["m10i-08-1"] = [
  // sin 30° = opp / hyp  → opp = hyp / 2
  { depth: 'medium', gen: function () {
      var h = 2 * _randInt(3, 12), opp = h / 2;
      return { q: 'In a right triangle, the angle is 30° and the hypotenuse is ' + h + ' cm. Find the opposite side.',
        opts: _buildOpts(opp + ' cm', [ h + ' cm', (opp + 1) + ' cm', (2 * h) + ' cm' ]), c: 0,
        e: 'sin 30° = opp/' + h + ', and sin 30° = 0.5, so opp = ' + h + ' × 0.5 = ' + opp + ' cm.' };
  }},
  // cos 60° = adj / hyp  → adj = hyp / 2
  { depth: 'medium', gen: function () {
      var h = 2 * _randInt(3, 12), adj = h / 2;
      return { q: 'The angle is 60° and the hypotenuse is ' + h + ' cm. Find the adjacent side.',
        opts: _buildOpts(adj + ' cm', [ h + ' cm', (adj - 1) + ' cm', (h + 1) + ' cm' ]), c: 0,
        e: 'cos 60° = adj/' + h + ', and cos 60° = 0.5, so adj = ' + h + ' × 0.5 = ' + adj + ' cm.' };
  }},
  // tan 45° = opp / adj  → opp = adj (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var adj = _randInt(4, 14);
      return { q: 'The angle is 45° and the adjacent side is ' + adj + ' cm. Find the opposite side.',
        opts: _buildOpts(adj + ' cm', [ (2 * adj) + ' cm', (adj + 1) + ' cm', (adj - 1) + ' cm' ]), c: 0,
        e: 'tan 45° = opp/adj = 1, so the opposite equals the adjacent: ' + adj + ' cm.' };
  }}
];

// ── m10i-08-2 — Finding an Angle ─────────────────────────────────────────────
TEST_GENERATORS["m10i-08-2"] = [
  // sin θ = 0.5 → 30°
  { depth: 'medium', gen: function () {
      var opp = _randInt(3, 9), hyp = 2 * opp;
      return { q: 'Find the angle: opposite ' + opp + ' cm, hypotenuse ' + hyp + ' cm.',
        opts: _buildOpts('30°', [ '60°', '45°', '50°' ]), c: 0,
        e: 'sin θ = ' + opp + '/' + hyp + ' = 0.5, so θ = sin⁻¹(0.5) = 30°.' };
  }},
  // cos θ = 0.5 → 60°
  { depth: 'medium', gen: function () {
      var adj = _randInt(3, 9), hyp = 2 * adj;
      return { q: 'Find the angle: adjacent ' + adj + ' cm, hypotenuse ' + hyp + ' cm.',
        opts: _buildOpts('60°', [ '30°', '45°', '50°' ]), c: 0,
        e: 'cos θ = ' + adj + '/' + hyp + ' = 0.5, so θ = cos⁻¹(0.5) = 60°.' };
  }},
  // tan θ = 1 → 45° (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var s = _randInt(3, 10);
      return { q: 'Find the angle: opposite ' + s + ' cm, adjacent ' + s + ' cm.',
        opts: _buildOpts('45°', [ '30°', '60°', '90°' ]), c: 0,
        e: 'tan θ = ' + s + '/' + s + ' = 1, so θ = tan⁻¹(1) = 45°.' };
  }},
  // exact value recall (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var items = [['sin 30°', '½'], ['cos 60°', '½'], ['tan 45°', '1'], ['sin 90°', '1'], ['cos 0°', '1'], ['tan 0°', '0']];
      var it = items[_randInt(0, items.length - 1)];
      var pool = ['0', '½', '1', '√3/2'].filter(function (v) { return v !== it[1]; });
      return { q: 'What is the exact value of ' + it[0] + '?',
        opts: _buildOpts(it[1], [ pool[0], pool[1], pool[2] ]), c: 0,
        e: it[0] + ' = ' + it[1] + ' (a standard exact value).' };
  }}
];
