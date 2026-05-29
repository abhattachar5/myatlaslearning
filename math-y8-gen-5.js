// math-y8-gen-5.js — Generative test questions for Year 8 Topic 23–24 islands
// Islands: m8i-23-2 Rotations, m8i-23-3 Dilations,
//          m8i-24-2 Similar Figures, m8i-24-3 Indirect Measurement
// Must load AFTER test-generator.js

// ── m8i-23-2: Rotations about the Origin ────────────────────────────────────
TEST_GENERATORS["m8i-23-2"] = [
  // 1 medium: 90° clockwise
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 6), y = _randInt(1, 6);
    var ix = y, iy = -x;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + (-y) + ', ' + x + ')';
    var w2 = '(' + (-x) + ', ' + (-y) + ')';
    var w3 = '(' + x + ', ' + (-y) + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is rotated 90° clockwise about the origin. What are the coordinates of the image?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'A 90° clockwise rotation maps (x, y) → (y, −x), so (' + x + ', ' + y + ') → (' + ix + ', ' + iy + ').'
    };
  }},
  // 2 medium: 90° anticlockwise
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 6), y = _randInt(1, 6);
    var ix = -y, iy = x;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + y + ', ' + (-x) + ')';
    var w2 = '(' + (-x) + ', ' + (-y) + ')';
    var w3 = '(' + x + ', ' + y + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is rotated 90° anticlockwise about the origin. What are the coordinates of the image?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'A 90° anticlockwise rotation maps (x, y) → (−y, x), so (' + x + ', ' + y + ') → (' + ix + ', ' + iy + ').'
    };
  }},
  // 3 medium: 180°
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 7), y = _randInt(1, 7);
    var ix = -x, iy = -y;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + y + ', ' + x + ')';
    var w2 = '(' + (-y) + ', ' + x + ')';
    var w3 = '(' + x + ', ' + (-y) + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is rotated 180° about the origin. What are the coordinates of the image?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'A 180° rotation about the origin maps (x, y) → (−x, −y), so (' + x + ', ' + y + ') → (' + ix + ', ' + iy + ').'
    };
  }},
  // 4 medium: 270° clockwise (= 90° anticlockwise)
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 6), y = _randInt(1, 6);
    // 270° clockwise = 90° anticlockwise: (x,y) → (-y, x)
    var ix = -y, iy = x;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + y + ', ' + (-x) + ')';
    var w2 = '(' + (-x) + ', ' + (-y) + ')';
    var w3 = '(' + (-x) + ', ' + y + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is rotated 270° clockwise about the origin. What are the coordinates of the image?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: '270° clockwise equals 90° anticlockwise, which maps (x, y) → (−y, x), so (' + x + ', ' + y + ') → (' + ix + ', ' + iy + ').'
    };
  }},
  // 5 greater-depth: mixed quadrants, identify rotation angle
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(1, 5), y = _randInt(1, 5);
    // Image after 90° clockwise
    var ix = y, iy = -x;
    var correct = '90° clockwise';
    var w1 = '90° anticlockwise';
    var w2 = '180°';
    var w3 = '270° anticlockwise';
    return {
      q: 'A point (' + x + ', ' + y + ') is mapped to (' + ix + ', ' + iy + ') by a rotation about the origin. Which rotation was applied?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Check each rule: 90° clockwise gives (y, −x) = (' + ix + ', ' + iy + '). This matches, so the rotation is 90° clockwise.'
    };
  }},
  // 6 greater-depth: negative coordinate input, 90° anticlockwise
  { depth: 'greater-depth', gen: function() {
    var x = _randInt(1, 5), y = _randInt(1, 5);
    // Use negative x to vary quadrant
    var px = -x, py = y;
    var ix = -py, iy = px; // 90° anticlockwise: (x,y)->(-y,x)
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + py + ', ' + (-px) + ')';
    var w2 = '(' + (-px) + ', ' + (-py) + ')';
    var w3 = '(' + py + ', ' + px + ')';
    return {
      q: 'The point (' + px + ', ' + py + ') is rotated 90° anticlockwise about the origin. What are the coordinates of the image?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: '90° anticlockwise maps (x, y) → (−y, x), so (' + px + ', ' + py + ') → (' + ix + ', ' + iy + ').'
    };
  }}
];

// ── m8i-23-3: Dilations from the Origin ─────────────────────────────────────
TEST_GENERATORS["m8i-23-3"] = [
  // 1 medium: enlargement (k integer >1), find image
  { depth: 'medium', gen: function() {
    var x = _randInt(1, 5), y = _randInt(1, 5);
    var k = _randInt(2, 4);
    var ix = k * x, iy = k * y;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + (x + k) + ', ' + (y + k) + ')';
    var w2 = '(' + ix + ', ' + y + ')';
    var w3 = '(' + x + ', ' + iy + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is dilated from the origin by scale factor ' + k + '. What are the image coordinates?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Dilation maps (x, y) → (kx, ky). With k = ' + k + ': (' + x + ' × ' + k + ', ' + y + ' × ' + k + ') = (' + ix + ', ' + iy + ').'
    };
  }},
  // 2 medium: reduction (k = 1/2 or 1/3), find image — use point coords divisible by k denominator
  { depth: 'medium', gen: function() {
    var denom = _pickFrom([2, 3, 4]);
    var x = _randInt(1, 4) * denom;
    var y = _randInt(1, 4) * denom;
    var ix = x / denom, iy = y / denom;
    var kStr = '1/' + denom;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + (x * denom) + ', ' + (y * denom) + ')';
    var w2 = '(' + (x - denom) + ', ' + (y - denom) + ')';
    var w3 = '(' + iy + ', ' + ix + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is dilated from the origin by scale factor ' + kStr + '. What are the image coordinates?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Dilation maps (x, y) → (kx, ky). With k = ' + kStr + ': (' + x + '/' + denom + ', ' + y + '/' + denom + ') = (' + ix + ', ' + iy + ').'
    };
  }},
  // 3 medium: classify enlargement vs reduction
  { depth: 'medium', gen: function() {
    var isEnlarge = _randInt(0, 1) === 1;
    var k, kStr, correct, w1;
    if (isEnlarge) {
      k = _randInt(2, 5);
      kStr = String(k);
      correct = 'Enlargement';
      w1 = 'Reduction';
    } else {
      var denom = _pickFrom([2, 3, 4, 5]);
      kStr = '1/' + denom;
      correct = 'Reduction';
      w1 = 'Enlargement';
    }
    return {
      q: 'A dilation has scale factor ' + kStr + '. Is this an enlargement or a reduction?',
      opts: _buildOpts(correct, [w1, 'Neither — scale factor must equal 1', 'Congruence transformation']),
      c: 0,
      e: (isEnlarge
        ? 'A scale factor greater than 1 (k = ' + kStr + ' > 1) makes the image larger, so it is an enlargement.'
        : 'A scale factor between 0 and 1 (k = ' + kStr + ' < 1) makes the image smaller, so it is a reduction.')
    };
  }},
  // 4 medium: find scale factor given point and image
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 5);
    var x = _randInt(1, 4), y = _randInt(1, 4);
    var ix = k * x, iy = k * y;
    var correct = String(k);
    var w1 = String(k + 1);
    var w2 = String(k - 1 > 0 ? k - 1 : k + 2);
    var w3 = String(ix - x);
    return {
      q: 'A point (' + x + ', ' + y + ') is dilated from the origin to (' + ix + ', ' + iy + '). What is the scale factor?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Scale factor = image coordinate ÷ original coordinate = ' + ix + ' ÷ ' + x + ' = ' + k + '.'
    };
  }},
  // 5 greater-depth: negative coordinate dilation
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 4);
    var x = -_randInt(1, 4), y = _randInt(1, 4);
    var ix = k * x, iy = k * y;
    var correct = '(' + ix + ', ' + iy + ')';
    var w1 = '(' + (-ix) + ', ' + iy + ')';
    var w2 = '(' + ix + ', ' + (-iy) + ')';
    var w3 = '(' + (x + k) + ', ' + (y + k) + ')';
    return {
      q: 'The point (' + x + ', ' + y + ') is dilated from the origin by scale factor ' + k + '. What are the image coordinates?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Dilation maps (x, y) → (kx, ky) regardless of sign. With k = ' + k + ': (' + x + ' × ' + k + ', ' + y + ' × ' + k + ') = (' + ix + ', ' + iy + ').'
    };
  }},
  // 6 greater-depth: find original point given image and scale factor
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 4);
    var ox = _randInt(1, 5), oy = _randInt(1, 5);
    var ix = k * ox, iy = k * oy;
    var correct = '(' + ox + ', ' + oy + ')';
    var w1 = '(' + ix + ', ' + iy + ')';
    var w2 = '(' + (ix * k) + ', ' + (iy * k) + ')';
    var w3 = '(' + (ox + 1) + ', ' + oy + ')';
    return {
      q: 'After a dilation from the origin with scale factor ' + k + ', the image is (' + ix + ', ' + iy + '). What was the original point?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Divide each image coordinate by the scale factor: (' + ix + ' ÷ ' + k + ', ' + iy + ' ÷ ' + k + ') = (' + ox + ', ' + oy + ').'
    };
  }}
];

// ── m8i-24-2: Similar Figures ────────────────────────────────────────────────
TEST_GENERATORS["m8i-24-2"] = [
  // 1 medium: find scale factor
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 5);
    var side = _randInt(3, 9);
    var image = k * side;
    var correct = String(k);
    var w1 = String(image - side);
    var w2 = String(k + 1);
    var w3 = String(k - 1 > 0 ? k - 1 : k + 2);
    return {
      q: 'Two similar shapes have corresponding sides of length ' + side + ' cm and ' + image + ' cm. What is the scale factor from the smaller to the larger shape?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Scale factor = larger side ÷ smaller side = ' + image + ' ÷ ' + side + ' = ' + k + '.'
    };
  }},
  // 2 medium: find missing side using scale factor
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 4);
    var known = _randInt(3, 8);
    var missing = k * known;
    var correct = String(missing);
    var w1 = String(known + k);
    var w2 = String(missing + k);
    var w3 = String(known * (k + 1));
    return {
      q: 'Two similar triangles have scale factor ' + k + '. A side in the smaller triangle is ' + known + ' cm. What is the corresponding side in the larger triangle?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Multiply the known side by the scale factor: ' + known + ' × ' + k + ' = ' + missing + ' cm.'
    };
  }},
  // 3 medium: corresponding angles
  { depth: 'medium', gen: function() {
    var angles = [
      [40, 60, 80],
      [35, 75, 70],
      [50, 60, 70],
      [45, 90, 45],
      [30, 60, 90]
    ];
    var chosen = _pickFrom(angles);
    var a = chosen[0], b = chosen[1], c2 = chosen[2];
    // angle in similar figure equals corresponding angle
    var targetAngle = _pickFrom([a, b, c2]);
    var correct = String(targetAngle);
    var w1 = String(180 - targetAngle);
    var w2 = String(targetAngle + 10);
    var w3 = String(targetAngle - 10 > 0 ? targetAngle - 10 : targetAngle + 15);
    return {
      q: 'A triangle has angles ' + a + '°, ' + b + '° and ' + c2 + '°. A similar triangle has the same shape. What is the angle corresponding to ' + targetAngle + '°?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Corresponding angles in similar figures are equal, so the angle is still ' + targetAngle + '°.'
    };
  }},
  // 4 medium: find missing side with non-integer scale factor (×1.5)
  { depth: 'medium', gen: function() {
    // Use multiples of 2 so ×1.5 gives whole number
    var known = _randInt(2, 6) * 2;
    var image = known * 1.5;
    var correct = String(image);
    var w1 = String(known + 1.5);
    var w2 = String(known * 2);
    var w3 = String(image + 1);
    return {
      q: 'Two similar rectangles have scale factor 1.5. One rectangle has a side of ' + known + ' cm. What is the corresponding side of the larger rectangle?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Multiply the known side by the scale factor: ' + known + ' × 1.5 = ' + image + ' cm.'
    };
  }},
  // 5 greater-depth: find missing side given two pairs of sides (set up proportion)
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 4);
    var s1 = _randInt(3, 8);
    var s2 = _randInt(3, 8);
    var i1 = k * s1;
    var missing = k * s2;
    var correct = String(missing);
    var w1 = String(s2 + i1);
    var w2 = String(s2 * (k + 1));
    var w3 = String(missing + s1);
    return {
      q: 'Two similar triangles have corresponding sides: ' + s1 + ' cm and ' + i1 + ' cm. Another side of the smaller triangle is ' + s2 + ' cm. Find the corresponding side of the larger triangle.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Scale factor = ' + i1 + ' ÷ ' + s1 + ' = ' + k + '. Missing side = ' + s2 + ' × ' + k + ' = ' + missing + ' cm.'
    };
  }},
  // 6 greater-depth: reverse — find side in smaller given side in larger
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 4);
    var smallSide = _randInt(3, 7);
    var largeSide = k * smallSide;
    var largeOther = _randInt(3, 7) * k;
    var smallOther = largeOther / k;
    var correct = String(smallOther);
    var w1 = String(largeOther * k);
    var w2 = String(largeOther + k);
    var w3 = String(smallOther + 1);
    return {
      q: 'Two similar shapes have a scale factor of ' + k + '. The larger shape has a side of ' + largeOther + ' cm. Find the corresponding side in the smaller shape.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Divide the larger side by the scale factor: ' + largeOther + ' ÷ ' + k + ' = ' + smallOther + ' cm.'
    };
  }}
];

// ── m8i-24-3: Indirect Measurement ──────────────────────────────────────────
TEST_GENERATORS["m8i-24-3"] = [
  // 1 medium: find height using shadow proportion
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 5);
    var knownH = _randInt(2, 8);
    var knownS = _randInt(2, 6);
    var unknownS = knownS * k;
    var unknownH = knownH * k;
    var correct = String(unknownH);
    var w1 = String(unknownH + knownH);
    var w2 = String(knownH + unknownS);
    var w3 = String(unknownH - 1);
    return {
      q: 'A ' + knownH + ' m tall post casts a shadow of ' + knownS + ' m. At the same time, a tree casts a shadow of ' + unknownS + ' m. How tall is the tree?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Use the proportion: height/shadow = height/shadow. ' + knownH + '/' + knownS + ' = h/' + unknownS + '. h = ' + knownH + ' × ' + unknownS + ' ÷ ' + knownS + ' = ' + unknownH + ' m.'
    };
  }},
  // 2 medium: find shadow length given height
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 4);
    var h1 = _randInt(2, 6);
    var s1 = _randInt(1, 5);
    var h2 = h1 * k;
    var s2 = s1 * k;
    var correct = String(s2);
    var w1 = String(s2 + s1);
    var w2 = String(h2 - s1);
    var w3 = String(s2 + k);
    return {
      q: 'A ' + h1 + ' m pole casts a shadow of ' + s1 + ' m. A ' + h2 + ' m flagpole stands nearby. How long is its shadow?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Use the proportion: ' + h1 + '/' + s1 + ' = ' + h2 + '/s. s = ' + h2 + ' × ' + s1 + ' ÷ ' + h1 + ' = ' + s2 + ' m.'
    };
  }},
  // 3 medium: mirror problem with a building and person
  { depth: 'medium', gen: function() {
    var personH = _randInt(1, 2);
    var personDist = _randInt(2, 5);
    var buildingDist = personDist * _randInt(2, 5);
    var buildingH = Math.round(personH * buildingDist / personDist);
    // Ensure clean result
    var ratio = buildingDist / personDist;
    buildingH = personH * ratio;
    var correct = String(buildingH);
    var w1 = String(buildingH + personH);
    var w2 = String(buildingDist - personDist);
    var w3 = String(buildingH + ratio);
    return {
      q: 'A person ' + personH + ' m tall stands ' + personDist + ' m from a mirror on the ground. A building is ' + buildingDist + ' m from the mirror. How tall is the building?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Similar triangles: person height / person distance = building height / building distance. ' + personH + '/' + personDist + ' = h/' + buildingDist + '. h = ' + buildingH + ' m.'
    };
  }},
  // 4 medium: cross-multiplication proportion
  { depth: 'medium', gen: function() {
    var k = _randInt(2, 5);
    var h1 = _randInt(3, 8);
    var s1 = _randInt(2, 6);
    var s2 = s1 * k;
    var h2 = h1 * k;
    var correct = String(h2);
    var w1 = String(h1 + s2);
    var w2 = String(h2 + h1);
    var w3 = String(h2 - k);
    return {
      q: 'Two similar triangles represent a lamp post and its shadow. The lamp post is ' + h1 + ' m tall and casts a shadow of ' + s1 + ' m. A nearby sign casts a shadow of ' + s2 + ' m. Find the height of the sign.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Proportion: ' + h1 + '/' + s1 + ' = h/' + s2 + '. Cross-multiply: h = ' + h1 + ' × ' + s2 + ' ÷ ' + s1 + ' = ' + h2 + ' m.'
    };
  }},
  // 5 greater-depth: find unknown using three known values — non-trivial ratio
  { depth: 'greater-depth', gen: function() {
    var h1 = _randInt(2, 4) * 3; // multiple of 3 ensures clean division
    var s1 = _randInt(1, 3) * 2;
    var s2 = _randInt(2, 5) * s1; // multiple of s1 so h2 is integer
    var h2 = h1 * s2 / s1;
    var correct = String(h2);
    var w1 = String(h1 + s2);
    var w2 = String(h2 + s1);
    var w3 = String(h2 / 2);
    return {
      q: 'A building of height ' + h1 + ' m casts a shadow of ' + s1 + ' m. A nearby tower casts a shadow of ' + s2 + ' m at the same time. What is the height of the tower?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Set up the proportion: ' + h1 + '/' + s1 + ' = h/' + s2 + '. h = ' + h1 + ' × ' + s2 + ' ÷ ' + s1 + ' = ' + h2 + ' m.'
    };
  }},
  // 6 greater-depth: multi-step — find missing shadow then interpret
  { depth: 'greater-depth', gen: function() {
    var k = _randInt(2, 4);
    var treeH = _randInt(3, 8) * k;
    var personH = _randInt(1, 2);
    var personS = _randInt(1, 3);
    var treeS = treeH * personS / personH;
    var correct = String(treeS);
    var w1 = String(treeS + personS);
    var w2 = String(treeH - personS);
    var w3 = String(treeS * 2);
    return {
      q: 'A person ' + personH + ' m tall casts a shadow of ' + personS + ' m. A tree nearby is ' + treeH + ' m tall. How long is the tree\'s shadow?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'proportion: person height / person shadow = tree height / tree shadow. ' + personH + '/' + personS + ' = ' + treeH + '/s. s = ' + treeH + ' × ' + personS + ' ÷ ' + personH + ' = ' + treeS + ' m.'
    };
  }}
];
