// math-y8-gen-4.js — Year 8 Topic 22 generative test questions
// Islands: m8i-22-2, m8i-22-3, m8i-22-5
// Must load AFTER test-generator.js (which defines TEST_GENERATORS).

// ══════════════════════════════════════════════════════════════════════════
// m8i-22-2  Circles: Circumference & Area
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-22-2"] = [

  // 1 — MEDIUM: area given radius
  { depth: 'medium', gen: function () {
    var r = _randInt(2, 9);
    var area = Math.round(3.14 * r * r * 10) / 10;
    // distractors: used diameter in formula, forgot to square, just πr
    var w1 = Math.round(3.14 * (2 * r) * (2 * r) * 10) / 10; // used d instead of r
    var w2 = Math.round(3.14 * r * 10) / 10;                  // forgot to square (πr)
    var w3 = Math.round(2 * 3.14 * r * 10) / 10;              // circumference
    return {
      q: 'A circle has radius ' + r + ' cm. Find its area. (use π = 3.14)',
      opts: _buildOpts(area + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'A = πr² = 3.14 × ' + r + '² = 3.14 × ' + (r * r) + ' = ' + area + ' cm².'
    };
  }},

  // 2 — MEDIUM: circumference given diameter
  { depth: 'medium', gen: function () {
    var d = _randInt(3, 14);
    var circ = Math.round(3.14 * d * 10) / 10;
    // distractors: used radius (d/2), area formula (πr²), 2πd
    var r = d / 2;
    var w1 = Math.round(3.14 * r * 10) / 10;         // used r instead of d
    var w2 = Math.round(3.14 * r * r * 10) / 10;     // area with radius
    var w3 = Math.round(2 * 3.14 * d * 10) / 10;     // doubled it again
    return {
      q: 'A circle has diameter ' + d + ' cm. Calculate its circumference. (use π = 3.14)',
      opts: _buildOpts(circ + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: 'C = πd = 3.14 × ' + d + ' = ' + circ + ' cm.'
    };
  }},

  // 3 — MEDIUM: circumference given radius (use C = 2πr)
  { depth: 'medium', gen: function () {
    var r = _randInt(2, 10);
    var circ = Math.round(2 * 3.14 * r * 10) / 10;
    var w1 = Math.round(3.14 * r * 10) / 10;         // only πr (forgot the 2)
    var w2 = Math.round(3.14 * r * r * 10) / 10;     // area
    var w3 = Math.round(2 * 3.14 * r * r * 10) / 10; // 2πr²
    return {
      q: 'A circle has radius ' + r + ' cm. Calculate its circumference. (use π = 3.14)',
      opts: _buildOpts(circ + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: 'C = 2πr = 2 × 3.14 × ' + r + ' = ' + circ + ' cm.'
    };
  }},

  // 4 — MEDIUM: area given diameter (must halve first)
  { depth: 'medium', gen: function () {
    var d = _randInt(4, 16) * 2; // even diameter so radius is integer
    var r = d / 2;
    var area = Math.round(3.14 * r * r * 10) / 10;
    var w1 = Math.round(3.14 * d * d * 10) / 10;  // used d² instead of r²
    var w2 = Math.round(3.14 * d * 10) / 10;       // circumference with d
    var w3 = Math.round(3.14 * r * 10) / 10;       // πr (no squaring)
    return {
      q: 'A circle has diameter ' + d + ' cm. Find its area. (use π = 3.14)',
      opts: _buildOpts(area + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Radius = ' + d + ' ÷ 2 = ' + r + ' cm. A = πr² = 3.14 × ' + r + '² = 3.14 × ' + (r * r) + ' = ' + area + ' cm².'
    };
  }},

  // 5 — GREATER DEPTH: semicircle area
  { depth: 'greater-depth', gen: function () {
    var d = _randInt(4, 14) * 2; // even so radius is integer
    var r = d / 2;
    var area = Math.round(0.5 * 3.14 * r * r * 10) / 10;
    var w1 = Math.round(3.14 * r * r * 10) / 10;         // full circle area
    var w2 = Math.round(0.5 * 3.14 * d * d * 10) / 10;   // used d² instead of r²
    var w3 = Math.round(0.5 * 3.14 * r * 10) / 10;       // ½πr (no squaring)
    return {
      q: 'A semicircle has diameter ' + d + ' cm. Find its area. (use π = 3.14)',
      opts: _buildOpts(area + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Radius = ' + r + ' cm. Area of semicircle = ½ × πr² = ½ × 3.14 × ' + r + '² = ½ × 3.14 × ' + (r * r) + ' = ½ × ' + Math.round(3.14 * r * r * 10) / 10 + ' = ' + area + ' cm².'
    };
  }},

  // 6 — GREATER DEPTH: semicircle perimeter (curved arc + diameter)
  { depth: 'greater-depth', gen: function () {
    var d = _randInt(4, 14) * 2; // even so radius is integer
    var r = d / 2;
    var arc = Math.round(3.14 * r * 10) / 10;   // half circumference = πr
    var perim = Math.round((arc + d) * 10) / 10;
    var w1 = Math.round(arc * 10) / 10;            // forgot to add diameter
    var w2 = Math.round((2 * 3.14 * r + d) * 10) / 10; // used full circumference + d
    var w3 = Math.round((arc + r) * 10) / 10;     // added radius instead of diameter
    return {
      q: 'A semicircle has diameter ' + d + ' cm. Find its perimeter (total boundary). (use π = 3.14)',
      opts: _buildOpts(perim + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: 'Perimeter = curved arc + diameter = πr + d = 3.14 × ' + r + ' + ' + d + ' = ' + arc + ' + ' + d + ' = ' + perim + ' cm.'
    };
  }}

];

// ══════════════════════════════════════════════════════════════════════════
// m8i-22-3  Compound Figures
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-22-3"] = [

  // 1 — MEDIUM: L-shape split into two rectangles (addition)
  { depth: 'medium', gen: function () {
    var a = _randInt(2, 6), b = _randInt(2, 6), c = _randInt(2, 6), d = _randInt(2, 6);
    var area1 = a * b;
    var area2 = c * d;
    var total = area1 + area2;
    var w1 = area1 * area2;          // multiplied the two areas
    var w2 = (a + b + c + d) * 2;   // perimeter-style error
    var w3 = total + _randInt(2, 6); // off by a small amount
    return {
      q: 'An L-shape is split into two rectangles: one ' + a + ' cm × ' + b + ' cm and one ' + c + ' cm × ' + d + ' cm. Find the total area.',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Rectangle 1: ' + a + ' × ' + b + ' = ' + area1 + ' cm². Rectangle 2: ' + c + ' × ' + d + ' = ' + area2 + ' cm². Total = ' + area1 + ' + ' + area2 + ' = ' + total + ' cm².'
    };
  }},

  // 2 — MEDIUM: large rectangle with a rectangular hole removed
  { depth: 'medium', gen: function () {
    var L = _randInt(6, 12), W = _randInt(5, 10);
    var l = _randInt(2, L - 2), w = _randInt(2, W - 2);
    var outer = L * W;
    var inner = l * w;
    var total = outer - inner;
    var w1 = outer + inner;   // added instead of subtracted
    var w2 = inner;            // only inner
    var w3 = outer;            // forgot to subtract
    return {
      q: 'A rectangle ' + L + ' cm × ' + W + ' cm has a rectangular hole ' + l + ' cm × ' + w + ' cm cut from it. Find the remaining area.',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Outer area = ' + L + ' × ' + W + ' = ' + outer + ' cm². Hole = ' + l + ' × ' + w + ' = ' + inner + ' cm². Remaining = ' + outer + ' − ' + inner + ' = ' + total + ' cm².'
    };
  }},

  // 3 — MEDIUM: compound shape = rectangle + right-angled triangle
  { depth: 'medium', gen: function () {
    var rW = _randInt(4, 10), rH = _randInt(3, 8);
    var tB = rW; // triangle base = rectangle width
    var tH = _randInt(2, 6);
    var rectA = rW * rH;
    var triA = 0.5 * tB * tH;
    var total = rectA + triA;
    var w1 = rectA + tB * tH;         // forgot ½ in triangle
    var w2 = rectA * triA;             // multiplied
    var w3 = Math.abs(rectA - triA);   // subtracted
    return {
      q: 'A shape is made of a rectangle ' + rW + ' cm × ' + rH + ' cm with a right-angled triangle (base ' + tB + ' cm, height ' + tH + ' cm) attached to one side. Find the total area.',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Rectangle: ' + rW + ' × ' + rH + ' = ' + rectA + ' cm². Triangle: ½ × ' + tB + ' × ' + tH + ' = ' + triA + ' cm². Total = ' + rectA + ' + ' + triA + ' = ' + total + ' cm².'
    };
  }},

  // 4 — MEDIUM: three-rectangle compound (staircase / U-shape by addition)
  { depth: 'medium', gen: function () {
    var a1 = _randInt(2, 5), b1 = _randInt(2, 5);
    var a2 = _randInt(2, 5), b2 = _randInt(2, 5);
    var a3 = _randInt(2, 5), b3 = _randInt(2, 5);
    var ar1 = a1 * b1, ar2 = a2 * b2, ar3 = a3 * b3;
    var total = ar1 + ar2 + ar3;
    var w1 = ar1 * ar2 + ar3;    // mixed multiply/add
    var w2 = total - ar3;         // missed one rectangle
    var w3 = ar1 + ar2;           // missed one rectangle (different)
    return {
      q: 'A compound shape is made of three rectangles: ' + a1 + ' cm × ' + b1 + ' cm, ' + a2 + ' cm × ' + b2 + ' cm, and ' + a3 + ' cm × ' + b3 + ' cm. Find the total area.',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Area 1 = ' + ar1 + ' cm², Area 2 = ' + ar2 + ' cm², Area 3 = ' + ar3 + ' cm². Total = ' + ar1 + ' + ' + ar2 + ' + ' + ar3 + ' = ' + total + ' cm².'
    };
  }},

  // 5 — GREATER DEPTH: rectangle with semicircle on one end (addition)
  { depth: 'greater-depth', gen: function () {
    var rH = _randInt(4, 10); // rectangle height = diameter of semicircle
    var rL = _randInt(5, 12);
    var r = rH / 2; // radius — rH is always even below
    // Force rH even for clean answer (r integer)
    rH = _randInt(2, 5) * 2;
    r = rH / 2;
    var rectA = rL * rH;
    var semiA = Math.round(0.5 * 3.14 * r * r * 10) / 10;
    var total = Math.round((rectA + semiA) * 10) / 10;
    var w1 = Math.round((rectA + 3.14 * r * r) * 10) / 10;  // full circle instead of semi
    var w2 = Math.round((rectA - semiA) * 10) / 10;          // subtracted
    var w3 = Math.round((rectA + 2 * 3.14 * r) * 10) / 10;  // added circumference
    return {
      q: 'A shape is a rectangle ' + rL + ' cm × ' + rH + ' cm with a semicircle of diameter ' + rH + ' cm attached to one short end. Find the total area. (use π = 3.14)',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Rectangle: ' + rL + ' × ' + rH + ' = ' + rectA + ' cm². Semicircle radius = ' + r + ' cm: ½ × 3.14 × ' + r + '² = ½ × 3.14 × ' + (r * r) + ' = ' + semiA + ' cm². Total = ' + rectA + ' + ' + semiA + ' = ' + total + ' cm².'
    };
  }},

  // 6 — GREATER DEPTH: square with triangle cut from corner (subtraction)
  { depth: 'greater-depth', gen: function () {
    var s = _randInt(6, 12);
    var tb = _randInt(2, Math.floor(s / 2));
    var th = tb; // right-isosceles cut
    var sqA = s * s;
    var triA = 0.5 * tb * th;
    var total = sqA - triA;
    var w1 = sqA + triA;            // added instead of subtracted
    var w2 = sqA - tb * th;         // forgot ½
    var w3 = sqA - triA - triA;     // subtracted twice
    return {
      q: 'A square of side ' + s + ' cm has a right-angled triangle with base ' + tb + ' cm and height ' + th + ' cm cut from one corner. Find the remaining area.',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Square: ' + s + '² = ' + sqA + ' cm². Triangle removed: ½ × ' + tb + ' × ' + th + ' = ' + triA + ' cm². Remaining = ' + sqA + ' − ' + triA + ' = ' + total + ' cm².'
    };
  }}

];

// ══════════════════════════════════════════════════════════════════════════
// m8i-22-5  Surface Area & Scale Drawings
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-22-5"] = [

  // 1 — MEDIUM: surface area of a cuboid
  { depth: 'medium', gen: function () {
    var l = _randInt(2, 8), w = _randInt(2, 7), h = _randInt(2, 6);
    var sa = 2 * (l * w + l * h + w * h);
    var w1 = l * w + l * h + w * h;        // forgot the factor of 2
    var w2 = 2 * (l + w + h);              // perimeter-style error
    var w3 = l * w * h;                    // volume instead of SA
    return {
      q: 'A cuboid has length ' + l + ' cm, width ' + w + ' cm and height ' + h + ' cm. Find its surface area.',
      opts: _buildOpts(sa + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'SA = 2(lw + lh + wh) = 2(' + (l*w) + ' + ' + (l*h) + ' + ' + (w*h) + ') = 2 × ' + (l*w + l*h + w*h) + ' = ' + sa + ' cm².'
    };
  }},

  // 2 — MEDIUM: real length from scale drawing (scale 1:n, drawing length in cm → real in cm)
  { depth: 'medium', gen: function () {
    var scales = [10, 20, 25, 50, 100, 200];
    var sf = _pickFrom(scales);
    var drawing = _randInt(2, 10);
    var real = drawing * sf;
    var w1 = drawing + sf;         // added instead of multiplied
    var w2 = real * sf;            // multiplied again
    var w3 = Math.round(drawing / sf * 10) / 10; // divided instead
    return {
      q: 'A scale drawing uses a scale of 1 : ' + sf + '. A length on the drawing measures ' + drawing + ' cm. What is the real length?',
      opts: _buildOpts(real + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: 'Real length = drawing length × scale factor = ' + drawing + ' × ' + sf + ' = ' + real + ' cm.'
    };
  }},

  // 3 — MEDIUM: find the scale factor from real and drawing lengths
  { depth: 'medium', gen: function () {
    var sfs = [10, 20, 25, 40, 50, 100, 200];
    var sf = _pickFrom(sfs);
    var drawing = _randInt(2, 8);
    var real = drawing * sf;
    var w1 = real + drawing;     // added
    var w2 = sf * 2;             // doubled
    var w3 = Math.round(sf / 2); // halved
    return {
      q: 'A real object is ' + real + ' cm long. On a scale drawing it is shown as ' + drawing + ' cm. What is the scale factor?',
      opts: _buildOpts('1 : ' + sf, ['1 : ' + w1, '1 : ' + w2, '1 : ' + w3]),
      c: 0,
      e: 'Scale factor = real ÷ drawing = ' + real + ' ÷ ' + drawing + ' = ' + sf + '. Scale = 1 : ' + sf + '.'
    };
  }},

  // 4 — MEDIUM: total surface area of a cylinder (π = 3.14, 1 d.p.)
  { depth: 'medium', gen: function () {
    var r = _randInt(2, 7), h = _randInt(3, 10);
    var curved = Math.round(2 * 3.14 * r * h * 10) / 10;
    var circles = Math.round(2 * 3.14 * r * r * 10) / 10;
    var total = Math.round((curved + circles) * 10) / 10;
    var w1 = curved;                      // forgot the two circular ends
    var w2 = Math.round((3.14 * r * r * h) * 10) / 10; // volume formula
    var w3 = Math.round((circles) * 10) / 10; // only circles, no curved
    return {
      q: 'A cylinder has radius ' + r + ' cm and height ' + h + ' cm. Find its total surface area. (use π = 3.14)',
      opts: _buildOpts(total + ' cm²', [w1 + ' cm²', w2 + ' cm²', w3 + ' cm²']),
      c: 0,
      e: 'Curved SA = 2πrh = 2 × 3.14 × ' + r + ' × ' + h + ' = ' + curved + ' cm². Two circles = 2πr² = 2 × 3.14 × ' + (r*r) + ' = ' + circles + ' cm². Total = ' + curved + ' + ' + circles + ' = ' + total + ' cm².'
    };
  }},

  // 5 — GREATER DEPTH: drawing length from real length and scale
  { depth: 'greater-depth', gen: function () {
    var sfs = [20, 25, 50, 100, 200, 500];
    var sf = _pickFrom(sfs);
    var drawing = _randInt(2, 8);
    var real = drawing * sf;
    var w1 = real * sf;          // multiplied instead of divided
    var w2 = real + sf;          // added
    var w3 = drawing * 2;        // doubled
    return {
      q: 'On a map the scale is 1 : ' + sf + '. A real road is ' + real + ' cm long. How long should it be on the map?',
      opts: _buildOpts(drawing + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: 'Drawing length = real length ÷ scale factor = ' + real + ' ÷ ' + sf + ' = ' + drawing + ' cm.'
    };
  }},

  // 6 — GREATER DEPTH: surface area of a cuboid — find missing dimension given SA
  { depth: 'greater-depth', gen: function () {
    // Pick l, w, h so SA is a clean number, then ask: given SA, l, w → find h
    var l = _randInt(3, 8), w = _randInt(2, 6), h = _randInt(2, 5);
    var sa = 2 * (l * w + l * h + w * h);
    // Solve: SA = 2(lw + lh + wh) → SA/2 - lw = h(l+w) → h = (SA/2 - lw)/(l+w)
    var lw = l * w;
    var lPlusW = l + w;
    var w1 = h + 1;
    var w2 = h - 1 > 0 ? h - 1 : h + 2;
    var w3 = h + 2;
    return {
      q: 'A cuboid has length ' + l + ' cm, width ' + w + ' cm and surface area ' + sa + ' cm². Find its height.',
      opts: _buildOpts(h + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: 'SA = 2(lw + lh + wh). ' + sa + ' = 2(' + lw + ' + ' + l + 'h + ' + w + 'h). ' + (sa/2) + ' = ' + lw + ' + ' + lPlusW + 'h. ' + lPlusW + 'h = ' + (sa/2 - lw) + '. h = ' + (sa/2 - lw) + ' ÷ ' + lPlusW + ' = ' + h + ' cm.'
    };
  }}

];
