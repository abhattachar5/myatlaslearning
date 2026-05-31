// math-y8-generators.js — Reuse Year 7 generative test questions for Year 8.
//
// The test ENGINE (generateTopicTest) and the per-skill generator FUNCTIONS already
// exist for Year 7. Most Year 8 skills ARE the same KS3 skills, so we point the
// Year 8 island IDs at the existing Year 7 generator arrays — giving Year 8 the same
// infinitely-varying, depth-tagged tests for free (build once, reuse across years).
//
// Genuinely Year-8-only skills with no Year 7 equivalent (e.g. linear functions /
// gradients, dilations, similar figures, indirect measurement, compound interest,
// rate of change, surface area, distance between two points, special-base indices)
// are intentionally left out here — they fall back to their hand-written static
// QUESTIONS banks in math-y8-t*.js.
//
// Must load AFTER test-generator.js (which defines TEST_GENERATORS and the mi-* arrays).

(function () {
  if (typeof TEST_GENERATORS === 'undefined') return;
  var G = TEST_GENERATORS;

  // Point a Year 8 island at one or more Year 7 generator arrays (concatenated).
  function reuse(y8Id, srcIds) {
    var arr = [];
    for (var i = 0; i < srcIds.length; i++) {
      if (G[srcIds[i]] && G[srcIds[i]].length) arr = arr.concat(G[srcIds[i]]);
    }
    if (arr.length) G[y8Id] = arr;
  }

  // ── Topic 1 — Number Theory & Standard Form ──────────────────────────────
  reuse('m8i-01-1', ['mi-02-3', 'mi-04-1']);            // divisibility + prime/composite
  reuse('m8i-01-2', ['mi-04-2', 'mi-04-3', 'mi-04-4']); // prime factorisation, HCF, LCM
  reuse('m8i-01-3', ['mi-03-5']);                       // standard form
  // m8i-01-4 Classify & Compare Numbers → static

  // ── Topic 2 — Decimals & Operations ──────────────────────────────────────
  reuse('m8i-02-1', ['mi-05-1', 'mi-05-2']);            // place value + rounding
  reuse('m8i-02-2', ['mi-05-3']);                       // add & subtract decimals
  reuse('m8i-02-3', ['mi-05-4']);                       // multiply & divide decimals
  reuse('m8i-02-4', ['mi-05-5']);                       // advanced/multi-step decimals

  // ── Topic 3 — Fractions & Mixed Numbers ──────────────────────────────────
  reuse('m8i-03-1', ['mi-06-1', 'mi-06-2']);            // simplify + compare/order
  // m8i-03-2 Convert F/D/Mixed → static
  reuse('m8i-03-3', ['mi-06-3']);                       // add & subtract fractions
  reuse('m8i-03-4', ['mi-06-4']);                       // add & subtract mixed numbers

  // ── Topic 4 — Multiply & Divide Fractions ────────────────────────────────
  reuse('m8i-04-1', ['mi-07-1']);                       // fraction × whole number
  reuse('m8i-04-2', ['mi-07-2']);                       // fraction × fraction / mixed
  reuse('m8i-04-3', ['mi-07-3']);                       // divide fractions
  reuse('m8i-04-4', ['mi-07-4', 'mi-07-5']);            // mixed operations + scaling

  // ── Topic 5 — Integers & Operations ──────────────────────────────────────
  reuse('m8i-05-1', ['mi-08-1']);                       // understanding/comparing integers
  reuse('m8i-05-2', ['mi-08-2', 'mi-08-3']);            // add & subtract integers
  reuse('m8i-05-3', ['mi-08-4']);                       // multiply & divide integers
  reuse('m8i-05-4', ['mi-14-3']);                       // order of operations (integers)

  // ── Topic 6 — Rational Numbers ───────────────────────────────────────────
  reuse('m8i-06-1', ['mi-15-1', 'mi-15-2']);            // identify + compare rationals
  reuse('m8i-06-4', ['mi-14-2']);                       // order of ops (decimals & fractions)
  // m8i-06-2 / m8i-06-3 → static

  // ── Topic 7 — Indices & Roots ────────────────────────────────────────────
  reuse('m8i-07-1', ['mi-03-1', 'mi-03-2']);            // index notation + evaluate
  reuse('m8i-07-3', ['mi-03-3', 'mi-03-4']);            // square roots + mixed roots
  // m8i-07-2 Special bases (negative/decimal/fractional) → static

  // ── Topic 8 — Ratios & Proportions ───────────────────────────────────────
  reuse('m8i-08-1', ['mi-09-1', 'mi-09-2']);            // write/simplify + equivalent ratios
  reuse('m8i-08-2', ['mi-09-3']);                       // unit rates & speed
  reuse('m8i-08-3', ['mi-09-4']);                       // proportions
  // m8i-08-4 Direct proportion & graphs, m8i-08-5 Rate of change → static

  // ── Topic 9 — Percentages ────────────────────────────────────────────────
  reuse('m8i-09-1', ['mi-10-1']);                       // %/fraction/decimal conversions
  reuse('m8i-09-2', ['mi-10-2', 'mi-10-5']);            // % of amounts + estimation
  reuse('m8i-09-3', ['mi-10-3']);                       // % one number is of another
  reuse('m8i-09-4', ['mi-10-4']);                       // percentage problems / change

  // ── Topic 10 — Consumer Maths ────────────────────────────────────────────
  reuse('m8i-10-1', ['mi-18-2']);                       // unit prices / sale prices
  reuse('m8i-10-2', ['mi-18-3']);                       // VAT, discounts, tips
  // m8i-10-3 Simple & compound interest → static

  // ── Topic 11 — Problem Solving & Estimation ──────────────────────────────
  reuse('m8i-11-1', ['mi-16-1']);                       // multi-step word problems
  reuse('m8i-11-2', ['mi-16-2']);                       // estimation strategies
  // m8i-11-3 Venn diagrams → static

  // ── Topic 12 — Units of Measurement ──────────────────────────────────────
  reuse('m8i-12-1', ['mi-17-1']);                       // metric conversions
  reuse('m8i-12-2', ['mi-17-2', 'mi-17-3']);            // imperial + metric↔imperial
  reuse('m8i-12-3', ['mi-17-4']);                       // area/volume units
  // m8i-12-4 Precision & estimation → static

  // ── Topic 13 — Coordinate Plane ──────────────────────────────────────────
  reuse('m8i-13-1', ['mi-20-1', 'mi-20-2']);            // plot points + quadrants
  // m8i-13-2 Distance between two points → static

  // ── Topic 14 — Number Sequences ──────────────────────────────────────────
  reuse('m8i-14-1', ['mi-21-1']);                       // arithmetic sequences
  reuse('m8i-14-2', ['mi-21-2']);                       // geometric sequences
  reuse('m8i-14-3', ['mi-21-3']);                       // expressions for sequences

  // ── Topic 15 — Expressions & Properties ──────────────────────────────────
  reuse('m8i-15-1', ['mi-11-1']);                       // write & evaluate expressions
  reuse('m8i-15-2', ['mi-11-2']);                       // like terms & simplifying
  reuse('m8i-15-3', ['mi-11-3', 'mi-11-4']);            // distributive + factorising
  reuse('m8i-15-4', ['mi-11-5']);                       // properties / equivalent expressions

  // ── Topic 16 — Solving Equations ─────────────────────────────────────────
  reuse('m8i-16-1', ['mi-12-2']);                       // one-step equations
  reuse('m8i-16-2', ['mi-12-3']);                       // two-step equations
  // m8i-16-3 (like terms/brackets), m8i-16-4 (multi-step) → static

  // ── Topic 17 — Inequalities ──────────────────────────────────────────────
  reuse('m8i-17-1', ['mi-22-1']);                       // graph & write inequalities
  reuse('m8i-17-2', ['mi-22-2']);                       // solve one-step inequalities
  reuse('m8i-17-3', ['mi-22-3']);                       // inequality word problems / two-step

  // ── Topic 18 — Two-Variable Equations ────────────────────────────────────
  reuse('m8i-18-1', ['mi-23-1']);                       // two-variable equations & tables
  reuse('m8i-18-2', ['mi-23-2']);                       // graph two-variable equations
  reuse('m8i-18-3', ['mi-23-3']);                       // interpret graphs

  // ── Topic 19 — Linear Functions → all static (no Year 7 equivalent) ───────

  // ── Topic 20 — 2D Shapes & Angles ────────────────────────────────────────
  reuse('m8i-20-1', ['mi-24-1']);                       // classify polygons & angles
  reuse('m8i-20-2', ['mi-24-2']);                       // angles in triangles/quads
  reuse('m8i-20-3', ['mi-24-3']);                       // parallel lines & transversals
  reuse('m8i-20-4', ['mi-24-4']);                       // angle relationships & circle parts
  reuse('m8i-20-5', ['mi-24-5']);                       // constructions

  // ── Topic 21 — 3D Figures ────────────────────────────────────────────────
  reuse('m8i-21-1', ['mi-26-1', 'mi-26-2']);            // bases + nets
  reuse('m8i-21-2', ['mi-26-3']);                       // front/side/top views

  // ── Topic 22 — Area, Perimeter & Volume ──────────────────────────────────
  reuse('m8i-22-1', ['mi-27-1', 'mi-27-2']);            // area of triangles/quads/compound
  reuse('m8i-22-2', ['mi-27-5']);                       // circles
  reuse('m8i-22-4', ['mi-27-3']);                       // volume of cubes & cuboids
  // m8i-22-3 Compound figures, m8i-22-5 Surface area & scale → static

  // ── Topic 23 — Transformations ───────────────────────────────────────────
  reuse('m8i-23-1', ['mi-25-2']);                       // reflections & translations
  reuse('m8i-23-2', ['mi-25-4']);                       // rotations
  // m8i-23-3 Dilations → static

  // ── Topic 24 — Congruence & Similarity ───────────────────────────────────
  reuse('m8i-24-1', ['mi-25-3']);                       // congruent figures
  // m8i-24-2 Similar figures, m8i-24-3 Indirect measurement → static

  // ── Topic 25 — Pythagoras' Theorem ───────────────────────────────────────
  reuse('m8i-25-1', ['mi-29-2']);                       // find the hypotenuse
  reuse('m8i-25-2', ['mi-29-3']);                       // find a missing leg
  // m8i-25-3 Word problems & converse → static

  // ── Topic 26 — Constructions ─────────────────────────────────────────────
  reuse('m8i-26-1', ['mi-24-5']);                       // bisectors & perpendiculars
  // m8i-26-2 Construct polygons → static

  // ── Topic 27 — Data & Statistics ─────────────────────────────────────────
  reuse('m8i-27-1', ['mi-13-3', 'mi-13-5']);            // tables/plots/stem-and-leaf
  reuse('m8i-27-2', ['mi-13-2']);                       // bar/pie/line graphs
  reuse('m8i-27-3', ['mi-13-1']);                       // mean/median/mode/range
  reuse('m8i-27-4', ['mi-13-6', 'mi-13-8']);            // sampling/bias + scatter graphs

  // ── Topic 28 — Probability ───────────────────────────────────────────────
  reuse('m8i-28-1', ['mi-13-4']);                       // probability of simple events
  reuse('m8i-28-2', ['mi-13-7']);                       // experimental/predicted probability
  // m8i-28-3 Compound events → static
})();
