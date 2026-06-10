// content/y11/math/generators/gen-4.js — Year 11 Maths Topic 4 (Algebraic Fractions & Manipulation).
// Generators for all four islands. Uses _randInt/_buildOpts/_gcd. Validated by scripts/check-generators.js.

// ── m11i-04-1 — Simplifying Algebraic Fractions ──────────────────────────────
TEST_GENERATORS["m11i-04-1"] = [
  // (x² − a²)/(x + a)
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 7);
      return { q: 'Simplify (x² − ' + (a * a) + ') / (x + ' + a + ').',
        opts: _buildOpts('x − ' + a, [ 'x + ' + a, 'x − ' + (a * a), '1' ]), c: 0,
        e: 'Factorise the top: x² − ' + (a * a) + ' = (x + ' + a + ')(x − ' + a + '). Cancel the common factor (x + ' + a + '), leaving x − ' + a + '. You can only cancel whole factors, never single terms.' };
  }},
  // (x² + Sx + P)/(x + a)
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 4), b;
      do { b = _randInt(1, 6); } while (b === a);
      var S = a + b, P = a * b;
      return { q: 'Simplify (x² + ' + S + 'x + ' + P + ') / (x + ' + a + ').',
        opts: _buildOpts('x + ' + b, [ 'x + ' + a, 'x + ' + P, 'x + ' + S ]), c: 0,
        e: 'Factorise the top: (x + ' + a + ')(x + ' + b + '). Cancel (x + ' + a + ') with the bottom, leaving x + ' + b + '.' };
  }},
  // cancel a common numeric factor
  { depth: 'medium', gen: function () {
      var k = _randInt(2, 4), a = _randInt(1, 5), b;
      do { b = _randInt(1, 5); } while (b === a);
      return { q: 'Simplify (' + k + 'x + ' + (k * a) + ') / (' + k + 'x + ' + (k * b) + ').',
        opts: _buildOpts('(x + ' + a + ') / (x + ' + b + ')', [ '(x + ' + b + ') / (x + ' + a + ')', '' + a + '/' + b, '(x + ' + (k * a) + ') / (x + ' + (k * b) + ')' ]), c: 0,
        e: 'Factorise top and bottom: ' + k + '(x + ' + a + ') over ' + k + '(x + ' + b + '). The ' + k + 's cancel, leaving (x + ' + a + ')/(x + ' + b + '). The x terms do NOT cancel.' };
  }},
  // (x² − a²)/(x² + ax) (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 7);
      return { q: 'Simplify (x² − ' + (a * a) + ') / (x² + ' + a + 'x).',
        opts: _buildOpts('(x − ' + a + ') / x', [ '(x + ' + a + ') / x', 'x − ' + a, '−' + a ]), c: 0,
        e: 'Top: (x + ' + a + ')(x − ' + a + '). Bottom: x(x + ' + a + '). Cancel (x + ' + a + ') to leave (x − ' + a + ')/x.' };
  }},
  // numeric and algebraic common factors together (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 6);
      return { q: 'Simplify (2x² + ' + (2 * a) + 'x) / (4x).',
        opts: _buildOpts('(x + ' + a + ') / 2', [ '2(x + ' + a + ')', 'x + ' + a, '(x + ' + (2 * a) + ') / 2' ]), c: 0,
        e: 'Top: 2x(x + ' + a + '). Bottom: 4x. Cancel 2x, leaving (x + ' + a + ')/2.' };
  }}
];

// ── m11i-04-2 — Four Operations with Algebraic Fractions ─────────────────────
TEST_GENERATORS["m11i-04-2"] = [
  // same denominator addition
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 6), b;
      do { b = _randInt(1, 6); } while (b === a);
      return { q: 'Simplify ' + a + '/x + ' + b + '/x.',
        opts: _buildOpts((a + b) + '/x', [ (a * b) + '/x', (a + b) + '/(2x)', (a + b) + '/x²' ]), c: 0,
        e: 'The denominators are already the same, so just add the tops: (' + a + ' + ' + b + ')/x = ' + (a + b) + '/x. Do not add the denominators.' };
  }},
  // multiply and cancel
  { depth: 'medium', gen: function () {
      var a, b;
      do { a = _randInt(2, 5); b = _randInt(2, 7); } while (a === b || _gcd(a, b) !== 1);
      return { q: 'Simplify ' + a + '/x × x/' + b + '.',
        opts: _buildOpts(a + '/' + b, [ b + '/' + a, a + '/(' + b + 'x)', a + 'x/' + b ]), c: 0,
        e: 'Multiply tops and bottoms: ' + a + 'x / ' + b + 'x. The x cancels, leaving ' + a + '/' + b + '.' };
  }},
  // add unit fractions with different bracket denominators (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 4), b;
      do { b = _randInt(1, 6); } while (b === a);
      return { q: 'Write 1/(x + ' + a + ') + 1/(x + ' + b + ') as a single fraction.',
        opts: _buildOpts('(2x + ' + (a + b) + ') / ((x + ' + a + ')(x + ' + b + '))', [ '2 / ((x + ' + a + ')(x + ' + b + '))', '(2x + ' + (a * b) + ') / ((x + ' + a + ')(x + ' + b + '))', '2 / (2x + ' + (a + b) + ')' ]), c: 0,
        e: 'Common denominator (x + ' + a + ')(x + ' + b + '): tops become (x + ' + b + ') + (x + ' + a + ') = 2x + ' + (a + b) + '. Never just add the denominators.' };
  }},
  // divide — flip and multiply (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a, b;
      do { a = _randInt(2, 5); b = _randInt(2, 7); } while (a === b || _gcd(a, b) !== 1);
      return { q: 'Simplify ' + a + '/x ÷ ' + b + '/x.',
        opts: _buildOpts(a + '/' + b, [ b + '/' + a, (a * b) + '/x²', a + '/(' + b + 'x²)' ]), c: 0,
        e: 'Dividing means multiplying by the reciprocal: ' + a + '/x × x/' + b + ' = ' + a + 'x/' + b + 'x = ' + a + '/' + b + '.' };
  }}
];

// ── m11i-04-3 — Recurring Decimals to Fractions ──────────────────────────────
TEST_GENERATORS["m11i-04-3"] = [
  // one recurring digit
  { depth: 'medium', gen: function () {
      var d = _randInt(1, 8);
      return { q: 'Write 0.' + d + d + d + '… (the ' + d + ' recurs) as a fraction.',
        opts: _buildOpts(d + '/9', [ d + '/10', d + '/99', d + '/90' ]), c: 0,
        e: 'Let x = 0.' + d + d + d + '… Then 10x = ' + d + '.' + d + d + d + '… Subtracting: 9x = ' + d + ', so x = ' + d + '/9.' };
  }},
  // two recurring digits
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 9), b;
      do { b = _randInt(0, 9); } while (b === a);
      var n = 10 * a + b, g = _gcd(n, 99);
      return { q: 'Write 0.' + a + b + a + b + a + b + '… (the pair ' + a + b + ' recurs) as a fraction.',
        opts: _buildOpts(n + '/99', [ n + '/100', n + '/90', n + '/9' ]), c: 0,
        e: 'Let x = 0.' + a + b + a + b + '… Then 100x = ' + n + '.' + a + b + a + b + '… Subtracting: 99x = ' + n + ', so x = ' + n + '/99' + (g > 1 ? ' (= ' + (n / g) + '/' + (99 / g) + ' in simplest form)' : '') + '.' };
  }},
  // recurring digit after a zero (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var d = _randInt(1, 8);
      return { q: 'Write 0.0' + d + d + d + '… (only the ' + d + ' recurs) as a fraction.',
        opts: _buildOpts(d + '/90', [ d + '/9', d + '/99', d + '/100' ]), c: 0,
        e: 'This is 0.' + d + d + d + '… ÷ 10 = (' + d + '/9) ÷ 10 = ' + d + '/90.' };
  }},
  // why recurring decimals are rational (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var d = _randInt(2, 8);
      return { q: 'Which of these numbers can be written exactly as a fraction of two integers?',
        opts: _buildOpts('0.' + d + d + d + '… (recurring)', [ 'π', '√2', '√' + (d * 10 + 1) ]), c: 0,
        e: 'Every recurring decimal is rational — the algebra method (multiply by 10, subtract) always produces a fraction. π and non-perfect square roots are irrational.' };
  }}
];

// ── m11i-04-4 — Solving Equations with Algebraic Fractions ───────────────────
TEST_GENERATORS["m11i-04-4"] = [
  // a/x = b
  { depth: 'medium', gen: function () {
      var r = _randInt(2, 6), b;
      do { b = _randInt(2, 4); } while (b === r);
      var a = b * r;
      return { q: 'Solve ' + a + '/x = ' + b + '.',
        opts: _buildOpts('x = ' + r, [ 'x = ' + (a * b), 'x = ' + b, 'x = ' + (a + b) ]), c: 0,
        e: 'Multiply both sides by x: ' + a + ' = ' + b + 'x, so x = ' + a + ' ÷ ' + b + ' = ' + r + '.' };
  }},
  // (x + a)/b = c
  { depth: 'medium', gen: function () {
      var b = _randInt(2, 4), c = _randInt(3, 6), a = _randInt(1, 5), x = b * c - a;
      return { q: 'Solve (x + ' + a + ')/' + b + ' = ' + c + '.',
        opts: _buildOpts('x = ' + x, [ 'x = ' + (b * c + a), 'x = ' + ((c - a) * b), 'x = ' + (b * c) ]), c: 0,
        e: 'Multiply both sides by ' + b + ': x + ' + a + ' = ' + (b * c) + ', so x = ' + (b * c) + ' − ' + a + ' = ' + x + '.' };
  }},
  // a/x + b = c (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var d, r;
      do { d = _randInt(2, 3); r = _randInt(2, 6); } while (d === r || d === r + 1);
      var a = d * r, b = _randInt(1, 5), c = b + d;
      return { q: 'Solve ' + a + '/x + ' + b + ' = ' + c + '.',
        opts: _buildOpts('x = ' + r, [ 'x = ' + a, 'x = ' + d, 'x = ' + (r + 1) ]), c: 0,
        e: 'Subtract ' + b + ' from both sides: ' + a + '/x = ' + d + '. Then x = ' + a + ' ÷ ' + d + ' = ' + r + '.' };
  }},
  // leads to a quadratic (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var p = _randInt(3, 6), q = _randInt(1, p - 1), k = p - q, a = p * q;
      return { q: 'Solve ' + a + '/x = x − ' + k + '.',
        opts: _buildOpts('x = ' + p + ' or x = −' + q, [ 'x = −' + p + ' or x = ' + q, 'x = ' + p + ' or x = ' + q, 'x = ' + p + ' only' ]), c: 0,
        e: 'Multiply by x: ' + a + ' = x² − ' + k + 'x, so x² − ' + k + 'x − ' + a + ' = 0 = (x − ' + p + ')(x + ' + q + '). So x = ' + p + ' or x = −' + q + '.' };
  }}
];
