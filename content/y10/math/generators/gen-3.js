// content/y10/math/generators/gen-3.js — Year 10 Maths Topic 3 (Expanding & Factorising Quadratics).
// Generators for all five islands. Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m10i-03-1 — Expanding Double Brackets ────────────────────────────────────
TEST_GENERATORS["m10i-03-1"] = [
  // (x + a)(x + b), both positive
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = _randInt(4, 6), S = a + b, P = a * b;
      return { q: 'Expand and simplify (x + ' + a + ')(x + ' + b + ').',
        opts: _buildOpts('x² + ' + S + 'x + ' + P, [ 'x² + ' + P + 'x + ' + S, 'x² + ' + S + 'x + ' + S, 'x² + ' + P ]), c: 0,
        e: 'x·x = x², the outside and inside terms give ' + b + 'x + ' + a + 'x = ' + S + 'x, and ' + a + ' × ' + b + ' = ' + P + '. So the answer is x² + ' + S + 'x + ' + P + '.' };
  }},
  // (x + a)(x − b) with b > a → negative middle and constant
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = a + _randInt(1, 3), d = b - a, P = a * b;
      return { q: 'Expand and simplify (x + ' + a + ')(x − ' + b + ').',
        opts: _buildOpts('x² − ' + d + 'x − ' + P, [ 'x² + ' + d + 'x − ' + P, 'x² − ' + d + 'x + ' + P, 'x² − ' + P + 'x − ' + d ]), c: 0,
        e: 'The x terms are −' + b + 'x + ' + a + 'x = −' + d + 'x, and ' + a + ' × (−' + b + ') = −' + P + '. So (x + ' + a + ')(x − ' + b + ') = x² − ' + d + 'x − ' + P + '.' };
  }},
  // (x + a)² — the classic "forgot the middle term" trap
  { depth: 'medium', gen: function () {
      var a = _randInt(3, 7);
      return { q: 'Expand (x + ' + a + ')².',
        opts: _buildOpts('x² + ' + (2 * a) + 'x + ' + (a * a), [ 'x² + ' + (a * a), 'x² + ' + a + 'x + ' + (a * a), 'x² + ' + (2 * a) + 'x + ' + (2 * a) ]), c: 0,
        e: '(x + ' + a + ')² means (x + ' + a + ')(x + ' + a + '): x² + ' + a + 'x + ' + a + 'x + ' + (a * a) + ' = x² + ' + (2 * a) + 'x + ' + (a * a) + '. Never just square each term — x² + ' + (a * a) + ' misses the middle term.' };
  }},
  // (2x + a)(x + b) — leading coefficient 2 (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 5), b = _randInt(1, 5);
      if (a * b === a + b) b = b + 1;                       // keep distractor products distinct
      var M = 2 * b + a, P = a * b;
      return { q: 'Expand and simplify (2x + ' + a + ')(x + ' + b + ').',
        opts: _buildOpts('2x² + ' + M + 'x + ' + P, [ '2x² + ' + (a + b) + 'x + ' + P, '2x² + ' + M + 'x + ' + (a + b), 'x² + ' + M + 'x + ' + P ]), c: 0,
        e: '2x·x = 2x², the x terms are 2x·' + b + ' + ' + a + '·x = ' + M + 'x, and the constant is ' + a + ' × ' + b + ' = ' + P + '.' };
  }},
  // pick out one coefficient (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(4, 9), b = _randInt(4, 9), S = a + b;
      return { q: 'In the expansion of (x + ' + a + ')(x + ' + b + '), what is the coefficient of x?',
        opts: _buildOpts('' + S, [ '' + (a * b), '' + (S + 1), '' + (S - 1) ]), c: 0,
        e: 'The x terms come from ' + a + 'x + ' + b + 'x = ' + S + 'x, so the coefficient is ' + S + '. ' + (a * b) + ' is the constant term, not the x coefficient.' };
  }}
];

// ── m10i-03-2 — Factorising into Double Brackets ─────────────────────────────
TEST_GENERATORS["m10i-03-2"] = [
  // x² + Sx + P, both factors positive
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 3), b = a + _randInt(2, 3), S = a + b, P = a * b;
      return { q: 'Factorise x² + ' + S + 'x + ' + P + '.',
        opts: _buildOpts('(x + ' + a + ')(x + ' + b + ')', [ '(x + ' + (a + 1) + ')(x + ' + (b - 1) + ')', '(x − ' + a + ')(x − ' + b + ')', '(x + 1)(x + ' + P + ')' ]), c: 0,
        e: 'You need two numbers that multiply to ' + P + ' and add to ' + S + ': that is ' + a + ' and ' + b + '. Check: (x + ' + a + ')(x + ' + b + ') = x² + ' + S + 'x + ' + P + '.' };
  }},
  // x² − dx − P → (x + a)(x − b)
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 3), b = a + _randInt(1, 3), d = b - a, P = a * b;
      return { q: 'Factorise x² − ' + d + 'x − ' + P + '.',
        opts: _buildOpts('(x + ' + a + ')(x − ' + b + ')', [ '(x − ' + a + ')(x + ' + b + ')', '(x − ' + a + ')(x − ' + b + ')', '(x + ' + a + ')(x + ' + b + ')' ]), c: 0,
        e: 'You need two numbers that multiply to −' + P + ' and add to −' + d + ': that is +' + a + ' and −' + b + '. So x² − ' + d + 'x − ' + P + ' = (x + ' + a + ')(x − ' + b + ').' };
  }},
  // x² − Sx + P → (x − a)(x − b)
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 4), b = a + _randInt(1, 3), S = a + b, P = a * b;
      return { q: 'Factorise x² − ' + S + 'x + ' + P + '.',
        opts: _buildOpts('(x − ' + a + ')(x − ' + b + ')', [ '(x + ' + a + ')(x + ' + b + ')', '(x − ' + a + ')(x + ' + b + ')', '(x + ' + a + ')(x − ' + b + ')' ]), c: 0,
        e: 'The constant +' + P + ' is positive and the x term −' + S + 'x is negative, so BOTH numbers are negative: −' + a + ' × −' + b + ' = +' + P + ' and −' + a + ' − ' + b + ' = −' + S + '.' };
  }},
  // common factor first: 2x² + 2Sx + 2P (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 3), b = a + _randInt(1, 3), S = a + b, P = a * b;
      return { q: 'Factorise fully 2x² + ' + (2 * S) + 'x + ' + (2 * P) + '.',
        opts: _buildOpts('2(x + ' + a + ')(x + ' + b + ')', [ '(x + ' + a + ')(x + ' + b + ')', '(2x + ' + a + ')(2x + ' + b + ')', '2(x − ' + a + ')(x − ' + b + ')' ]), c: 0,
        e: '"Fully" means take out the common factor 2 first: 2(x² + ' + S + 'x + ' + P + ') = 2(x + ' + a + ')(x + ' + b + '). Forgetting the 2 loses a mark.' };
  }},
  // bigger numbers (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(4, 6), b = a + _randInt(2, 5), S = a + b, P = a * b;
      return { q: 'Factorise x² + ' + S + 'x + ' + P + '.',
        opts: _buildOpts('(x + ' + a + ')(x + ' + b + ')', [ '(x + ' + (a - 1) + ')(x + ' + (b + 1) + ')', '(x + 1)(x + ' + P + ')', '(x + ' + S + ')(x + ' + P + ')' ]), c: 0,
        e: 'List factor pairs of ' + P + ' and pick the pair that adds to ' + S + ': ' + a + ' × ' + b + ' = ' + P + ' and ' + a + ' + ' + b + ' = ' + S + '.' };
  }}
];

// ── m10i-03-3 — Difference of Two Squares ────────────────────────────────────
TEST_GENERATORS["m10i-03-3"] = [
  // factorise x² − a²
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9);
      return { q: 'Factorise x² − ' + (a * a) + '.',
        opts: _buildOpts('(x + ' + a + ')(x − ' + a + ')', [ '(x − ' + a + ')²', '(x + ' + a + ')²', 'x(x − ' + (a * a) + ')' ]), c: 0,
        e: 'x² − ' + (a * a) + ' is a difference of two squares: x² − ' + a + '² = (x + ' + a + ')(x − ' + a + '). The middle terms +' + a + 'x and −' + a + 'x cancel.' };
  }},
  // expand (x + a)(x − a)
  { depth: 'medium', gen: function () {
      var a = _randInt(2, 9);
      return { q: 'Expand (x + ' + a + ')(x − ' + a + ').',
        opts: _buildOpts('x² − ' + (a * a), [ 'x² + ' + (a * a), 'x² − ' + (2 * a) + 'x + ' + (a * a), 'x² + ' + (2 * a) + 'x − ' + (a * a) ]), c: 0,
        e: 'The x terms cancel: −' + a + 'x + ' + a + 'x = 0, leaving x² − ' + (a * a) + '. (x² − ' + (2 * a) + 'x + ' + (a * a) + ' would be (x − ' + a + ')².' };
  }},
  // factorise 4x² − a²
  { depth: 'medium', gen: function () {
      var odds = [3, 5, 7, 9], a = odds[_randInt(0, 3)];
      return { q: 'Factorise 4x² − ' + (a * a) + '.',
        opts: _buildOpts('(2x + ' + a + ')(2x − ' + a + ')', [ '(2x − ' + a + ')²', '(4x + ' + a + ')(x − ' + a + ')', '(2x + ' + a + ')²' ]), c: 0,
        e: '4x² = (2x)² and ' + (a * a) + ' = ' + a + '², so this is a difference of two squares: (2x + ' + a + ')(2x − ' + a + ').' };
  }},
  // numeric shortcut A² − B² (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var B = _randInt(40, 60), A = B + 2;
      return { q: 'Use the difference of two squares to work out ' + A + '² − ' + B + '² without a calculator.',
        opts: _buildOpts('' + (2 * (A + B)), [ '' + (A + B), '4', '' + (2 * A) ]), c: 0,
        e: A + '² − ' + B + '² = (' + A + ' + ' + B + ')(' + A + ' − ' + B + ') = ' + (A + B) + ' × 2 = ' + (2 * (A + B)) + '.' };
  }},
  // a²x² − b² (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 3), b = _randInt(2, 5);
      return { q: 'Factorise ' + (a * a) + 'x² − ' + (b * b) + '.',
        opts: _buildOpts('(' + a + 'x + ' + b + ')(' + a + 'x − ' + b + ')', [ '(' + a + 'x − ' + b + ')²', '(' + (a * a) + 'x + ' + b + ')(x − ' + b + ')', a + '(x + ' + b + ')(x − ' + b + ')' ]), c: 0,
        e: (a * a) + 'x² = (' + a + 'x)² and ' + (b * b) + ' = ' + b + '², so it factorises as (' + a + 'x + ' + b + ')(' + a + 'x − ' + b + ').' };
  }}
];

// ── m10i-03-4 — Expanding Three Brackets ─────────────────────────────────────
TEST_GENERATORS["m10i-03-4"] = [
  // constant term of (x+a)(x+b)(x+c)
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 2), b = _randInt(3, 4), c = _randInt(5, 6);
      var s1 = a + b + c, s2 = a * b + a * c + b * c, s3 = a * b * c;
      if (s2 === s3) { c = 5; s1 = a + b + c; s2 = a * b + a * c + b * c; s3 = a * b * c; }
      return { q: 'What is the constant term in the expansion of (x + ' + a + ')(x + ' + b + ')(x + ' + c + ')?',
        opts: _buildOpts('' + s3, [ '' + s1, '' + s2, '' + (s3 + s1) ]), c: 0,
        e: 'The constant term comes from multiplying the three numbers: ' + a + ' × ' + b + ' × ' + c + ' = ' + s3 + '. (' + s1 + ' is the x² coefficient.)' };
  }},
  // x² coefficient of (x+a)(x+b)(x+c)
  { depth: 'medium', gen: function () {
      var a = _randInt(1, 2), b = _randInt(3, 4), c = _randInt(5, 6);
      var s1 = a + b + c, s2 = a * b + a * c + b * c, s3 = a * b * c;
      if (s2 === s3) { c = 5; s1 = a + b + c; s2 = a * b + a * c + b * c; s3 = a * b * c; }
      return { q: 'What is the coefficient of x² in the expansion of (x + ' + a + ')(x + ' + b + ')(x + ' + c + ')?',
        opts: _buildOpts('' + s1, [ '' + s3, '' + s2, '3' ]), c: 0,
        e: 'For x² you take x from two brackets and a number from one, giving (' + a + ' + ' + b + ' + ' + c + ')x² = ' + s1 + 'x². So the coefficient is ' + s1 + '.' };
  }},
  // coefficient of x (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(1, 2), b = _randInt(3, 4), c = _randInt(5, 6);
      var s1 = a + b + c, s2 = a * b + a * c + b * c, s3 = a * b * c;
      if (s2 === s3) { c = 5; s1 = a + b + c; s2 = a * b + a * c + b * c; s3 = a * b * c; }
      return { q: 'What is the coefficient of x in the expansion of (x + ' + a + ')(x + ' + b + ')(x + ' + c + ')?',
        opts: _buildOpts('' + s2, [ '' + s1, '' + s3, '' + (s2 + 1) ]), c: 0,
        e: 'For x you take a number from two brackets and x from one: ' + a + '×' + b + ' + ' + a + '×' + c + ' + ' + b + '×' + c + ' = ' + s2 + '. So the x term is ' + s2 + 'x.' };
  }},
  // (x + a)³ coefficient of x² (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var choices = [2, 4, 5], a = choices[_randInt(0, 2)];
      return { q: 'In the expansion of (x + ' + a + ')³, what is the coefficient of x²?',
        opts: _buildOpts('' + (3 * a), [ '' + (a * a * a), '' + (3 * a * a), '' + a ]), c: 0,
        e: '(x + ' + a + ')³ = x³ + 3·' + a + 'x² + 3·' + (a * a) + 'x + ' + (a * a * a) + ', so the x² coefficient is 3 × ' + a + ' = ' + (3 * a) + '.' };
  }}
];

// ── m10i-03-5 — Factorising ax² + bx + c ─────────────────────────────────────
TEST_GENERATORS["m10i-03-5"] = [
  // factorise 2x² + Mx + P → (2x + b)(x + c)
  { depth: 'medium', gen: function () {
      var b, c;
      do { b = _randInt(1, 5); c = _randInt(1, 5); }
      while (b === c || b * c === 2 * c + b);
      var M = 2 * c + b, P = b * c;
      return { q: 'Factorise 2x² + ' + M + 'x + ' + P + '.',
        opts: _buildOpts('(2x + ' + b + ')(x + ' + c + ')', [ '(2x + ' + c + ')(x + ' + b + ')', '(2x + ' + b + ')(x − ' + c + ')', '(2x − ' + b + ')(x + ' + c + ')' ]), c: 0,
        e: 'Check by expanding: (2x + ' + b + ')(x + ' + c + ') = 2x² + ' + (2 * c) + 'x + ' + b + 'x + ' + P + ' = 2x² + ' + M + 'x + ' + P + '. Swapping the numbers gives the wrong middle term.' };
  }},
  // factorise 3x² + Mx + P → (3x + b)(x + c)
  { depth: 'medium', gen: function () {
      var b, c;
      do { b = _randInt(1, 4); c = _randInt(1, 4); }
      while (b === c || b * c === 3 * c + b);
      var M = 3 * c + b, P = b * c;
      return { q: 'Factorise 3x² + ' + M + 'x + ' + P + '.',
        opts: _buildOpts('(3x + ' + b + ')(x + ' + c + ')', [ '(3x + ' + c + ')(x + ' + b + ')', '(3x − ' + b + ')(x − ' + c + ')', '(x + ' + b + ')(3x + ' + c + ')' ]), c: 0,
        e: '(3x + ' + b + ')(x + ' + c + ') expands to 3x² + ' + (3 * c) + 'x + ' + b + 'x + ' + P + ' = 3x² + ' + M + 'x + ' + P + '.' };
  }},
  // expand to check
  { depth: 'medium', gen: function () {
      var b, c;
      do { b = _randInt(1, 5); c = _randInt(1, 5); }
      while (b === c || b * c === 2 * c + b || b * c === b + c);
      var M = 2 * c + b, P = b * c;
      return { q: 'Expand (2x + ' + b + ')(x + ' + c + ').',
        opts: _buildOpts('2x² + ' + M + 'x + ' + P, [ '2x² + ' + (b + c) + 'x + ' + P, '2x² + ' + M + 'x + ' + (b + c), '2x² + ' + P + 'x + ' + M ]), c: 0,
        e: '2x·x = 2x², the x terms are 2x·' + c + ' + ' + b + '·x = ' + M + 'x, and ' + b + ' × ' + c + ' = ' + P + '.' };
  }},
  // negative constant (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var b, c;
      do { b = _randInt(1, 3); c = _randInt(2, 5); }
      while (b === c || 2 * c - b <= 0);
      var M = 2 * c - b, P = b * c;
      return { q: 'Factorise 2x² + ' + M + 'x − ' + P + '.',
        opts: _buildOpts('(2x − ' + b + ')(x + ' + c + ')', [ '(2x + ' + b + ')(x − ' + c + ')', '(2x − ' + c + ')(x + ' + b + ')', '(2x + ' + b + ')(x + ' + c + ')' ]), c: 0,
        e: 'The constant is negative so the signs differ. (2x − ' + b + ')(x + ' + c + ') = 2x² + ' + (2 * c) + 'x − ' + b + 'x − ' + P + ' = 2x² + ' + M + 'x − ' + P + '. ✓' };
  }},
  // common factor + difference of two squares (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var a = _randInt(2, 5);
      return { q: 'Factorise fully 3x² − ' + (3 * a * a) + '.',
        opts: _buildOpts('3(x + ' + a + ')(x − ' + a + ')', [ '3(x − ' + a + ')²', '(3x + ' + a + ')(x − ' + (3 * a) + ')', '(3x − ' + a + ')(x + ' + (3 * a) + ')' ]), c: 0,
        e: 'Take out the 3 first: 3(x² − ' + (a * a) + '), then use the difference of two squares: 3(x + ' + a + ')(x − ' + a + ').' };
  }}
];
