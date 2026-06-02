// content/y11/math/generators/gen-12.js — Year 11 Maths Topic 12 (Histograms & CF).
// Frequency-density and IQR calculations generate; curve-reading uses static banks.
// Uses _randInt/_buildOpts. Validated by scripts/check-generators.js.

// ── m11i-12-1 — Histograms (frequency density) ───────────────────────────────
TEST_GENERATORS["m11i-12-1"] = [
  // frequency density = frequency ÷ class width
  { depth: 'medium', gen: function () {
      var width = _randInt(2, 10), fd = _randInt(2, 9), freq = fd * width;
      if (fd === 2 && width === 2) width = 3;
      freq = fd * width;
      return { q: 'A class of width ' + width + ' has frequency ' + freq + '. Find the frequency density.',
        opts: _buildOpts('' + fd, [ '' + freq, '' + (freq + width), '' + (freq + fd) ]), c: 0,
        e: 'Frequency density = frequency ÷ class width = ' + freq + ' ÷ ' + width + ' = ' + fd + '.' };
  }},
  // frequency = frequency density × class width
  { depth: 'medium', gen: function () {
      var width = _randInt(2, 8), fd = _randInt(2, 9);
      if (fd === 2 && width === 2) width = 3;
      var freq = fd * width;
      return { q: 'A histogram bar has frequency density ' + fd + ' and class width ' + width + '. Find the frequency.',
        opts: _buildOpts('' + freq, [ '' + (fd + width), '' + fd, '' + (freq + fd) ]), c: 0,
        e: 'Frequency = frequency density × class width = ' + fd + ' × ' + width + ' = ' + freq + '.' };
  }},
  // which is the height of a histogram bar (greater-depth)
  { depth: 'greater-depth', gen: function () {
      return { q: 'On a histogram with unequal class widths, the height of each bar is the:',
        opts: _buildOpts('Frequency density', [ 'Frequency', 'Class width', 'Cumulative frequency' ]), c: 0,
        e: 'Height = frequency density, so the AREA represents the frequency.' };
  }}
];

// ── m11i-12-3 — Box Plots & Comparing (IQR) ──────────────────────────────────
TEST_GENERATORS["m11i-12-3"] = [
  // interquartile range
  { depth: 'medium', gen: function () {
      var lq = _randInt(5, 20), uq = lq + _randInt(4, 15), iqr = uq - lq;
      return { q: 'A data set has lower quartile ' + lq + ' and upper quartile ' + uq + '. Find the interquartile range.',
        opts: _buildOpts('' + iqr, [ '' + (uq + lq), '' + uq, '' + (uq + lq + 1) ]), c: 0,
        e: 'IQR = upper quartile − lower quartile = ' + uq + ' − ' + lq + ' = ' + iqr + '.' };
  }},
  // range from min and max
  { depth: 'medium', gen: function () {
      var min = _randInt(1, 12), max = min + _randInt(10, 30), range = max - min;
      return { q: 'A box plot shows minimum ' + min + ' and maximum ' + max + '. Find the range.',
        opts: _buildOpts('' + range, [ '' + (max + min), '' + max, '' + (max + min + 1) ]), c: 0,
        e: 'Range = maximum − minimum = ' + max + ' − ' + min + ' = ' + range + '.' };
  }},
  // compare consistency (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var iqrA = _randInt(5, 10), iqrB = iqrA + _randInt(3, 8);
      return { q: 'Class A has IQR ' + iqrA + ' and Class B has IQR ' + iqrB + '. Which is more consistent?',
        opts: _buildOpts('Class A (smaller IQR)', [ 'Class B (larger IQR)', 'They are equal', 'Cannot tell' ]), c: 0,
        e: 'A smaller IQR means the middle 50% is more tightly grouped, so Class A is more consistent.' };
  }}
];
