// math-y8-gen-6.js — Year 8 generators for islands m8i-25-1, m8i-25-2, m8i-25-3,
//                    m8i-20-5, m8i-26-1, m8i-26-2
// Must load AFTER test-generator.js (defines TEST_GENERATORS, helpers, shuffle).

// ══════════════════════════════════════════════════════════════════════════
// m8i-25-1  Find the Hypotenuse  (c = √(a²+b²), exact via triples)
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-25-1"] = [
  { depth: 'medium', gen: function() {
    var triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[20,21,29]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    return {
      q: 'A right-angled triangle has legs ' + a + ' cm and ' + b + ' cm. Find the hypotenuse.',
      opts: _buildOpts(c + ' cm', [(a + b) + ' cm', (c + 1) + ' cm', Math.abs(c - 1) + ' cm']),
      c: 0,
      e: 'c² = ' + a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a + b*b) + ', so c = √' + (a*a + b*b) + ' = ' + c + ' cm.'
    };
  }},
  { depth: 'medium', gen: function() {
    var triples = [[3,4,5],[6,8,10],[9,12,15],[5,12,13],[8,15,17]];
    var t = _pickFrom(triples); var k = _randInt(1, 4);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    return {
      q: 'What is the length of the hypotenuse of a right-angled triangle with legs ' + a + ' m and ' + b + ' m?',
      opts: _buildOpts(c + ' m', [(c + 2) + ' m', (c - 2) + ' m', Math.round(Math.sqrt(a + b)) + ' m']),
      c: 0,
      e: 'c² = ' + a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a + b*b) + ', c = ' + c + ' m.'
    };
  }},
  { depth: 'medium', gen: function() {
    var triples = [[7,24,25],[9,40,41],[11,60,61],[20,21,29]];
    var t = _pickFrom(triples); var k = _randInt(1, 2);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    return {
      q: 'A right-angled triangle has shorter sides ' + a + ' mm and ' + b + ' mm. Find c.',
      opts: _buildOpts(c + ' mm', [(a + b) + ' mm', (c + 5) + ' mm', (c - 5) + ' mm']),
      c: 0,
      e: 'c = √(' + a + '² + ' + b + '²) = √(' + (a*a) + ' + ' + (b*b) + ') = √' + (a*a + b*b) + ' = ' + c + ' mm.'
    };
  }},
  { depth: 'medium', gen: function() {
    var triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17]];
    var t = _pickFrom(triples); var k = _randInt(2, 5);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    return {
      q: 'The two legs of a right triangle measure ' + a + ' cm and ' + b + ' cm. How long is the hypotenuse?',
      opts: _buildOpts(c + ' cm', [(c + k) + ' cm', (c - k) + ' cm', (a + b - c) + ' cm']),
      c: 0,
      e: 'By Pythagoras: c² = ' + a + '² + ' + b + '² = ' + (a*a + b*b) + ', c = ' + c + ' cm.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // give both legs, ask which triple it belongs to
    var triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    var w1 = (t[2]+1)*k, w2 = (t[2]+2)*k, w3 = (t[2]-1)*k;
    return {
      q: 'A right-angled triangle has legs ' + a + ' cm and ' + b + ' cm. Which is the hypotenuse? Show that c² = a² + b².',
      opts: _buildOpts(c + ' cm', [w1 + ' cm', w2 + ' cm', w3 + ' cm']),
      c: 0,
      e: a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a+b*b) + ' = ' + c + '². So c = ' + c + ' cm.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // multi-step: find perimeter once you know hypotenuse
    var triples = [[3,4,5],[5,12,13],[8,15,17]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    var perim = a + b + c;
    return {
      q: 'A right-angled triangle has legs ' + a + ' cm and ' + b + ' cm. What is its perimeter?',
      opts: _buildOpts(perim + ' cm', [(perim + k) + ' cm', (perim - k) + ' cm', (a + b) + ' cm']),
      c: 0,
      e: 'First find the hypotenuse: c = √(' + (a*a) + ' + ' + (b*b) + ') = ' + c + ' cm. Perimeter = ' + a + ' + ' + b + ' + ' + c + ' = ' + perim + ' cm.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-25-2  Find a Missing Leg  (b = √(c²−a²), exact via triples)
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-25-2"] = [
  { depth: 'medium', gen: function() {
    var triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25],[9,12,15]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, hyp = t[2]*k;
    // give hyp and one leg (a), find other leg (b)
    return {
      q: 'A right-angled triangle has hypotenuse ' + hyp + ' cm and one leg ' + a + ' cm. Find the missing leg.',
      opts: _buildOpts(b + ' cm', [(b + 1) + ' cm', (b - 1) + ' cm', Math.round(Math.sqrt(a + hyp)) + ' cm']),
      c: 0,
      e: 'b² = c² − a² = ' + hyp + '² − ' + a + '² = ' + (hyp*hyp) + ' − ' + (a*a) + ' = ' + (b*b) + ', so b = ' + b + ' cm.'
    };
  }},
  { depth: 'medium', gen: function() {
    var triples = [[6,8,10],[9,12,15],[5,12,13],[8,15,17]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, hyp = t[2]*k;
    return {
      q: 'In a right triangle the hypotenuse is ' + hyp + ' m and one leg is ' + b + ' m. Find the other leg.',
      opts: _buildOpts(a + ' m', [(a + 2) + ' m', (a - 2) + ' m', (hyp - b) + ' m']),
      c: 0,
      e: 'leg² = ' + hyp + '² − ' + b + '² = ' + (hyp*hyp) + ' − ' + (b*b) + ' = ' + (a*a) + ', leg = ' + a + ' m.'
    };
  }},
  { depth: 'medium', gen: function() {
    var triples = [[3,4,5],[5,12,13],[7,24,25],[20,21,29]];
    var t = _pickFrom(triples); var k = _randInt(1, 2);
    var a = t[0]*k, b = t[1]*k, hyp = t[2]*k;
    return {
      q: 'A ladder of length ' + hyp + ' cm leans against a wall. Its base is ' + a + ' cm from the wall. How high does it reach?',
      opts: _buildOpts(b + ' cm', [(b + k) + ' cm', (b - k) + ' cm', (hyp - a) + ' cm']),
      c: 0,
      e: 'height² = ' + hyp + '² − ' + a + '² = ' + (hyp*hyp-a*a) + ', height = ' + b + ' cm.'
    };
  }},
  { depth: 'medium', gen: function() {
    var triples = [[3,4,5],[6,8,10],[8,15,17],[9,40,41]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, hyp = t[2]*k;
    return {
      q: 'The hypotenuse of a right-angled triangle is ' + hyp + ' mm and the shortest leg is ' + a + ' mm. Find the longer leg.',
      opts: _buildOpts(b + ' mm', [(b + 3) + ' mm', (b - 3) + ' mm', (a + b) + ' mm']),
      c: 0,
      e: 'b = √(' + hyp + '² − ' + a + '²) = √(' + (hyp*hyp - a*a) + ') = ' + b + ' mm.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var triples = [[5,12,13],[8,15,17],[7,24,25]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, hyp = t[2]*k;
    var area = (a * b) / 2;
    return {
      q: 'A right-angled triangle has hypotenuse ' + hyp + ' cm and one leg ' + a + ' cm. Find its area.',
      opts: _buildOpts(area + ' cm²', [(area + a) + ' cm²', (area - a) + ' cm²', (a * hyp / 2) + ' cm²']),
      c: 0,
      e: 'Missing leg b = √(' + hyp + '² − ' + a + '²) = √' + (b*b) + ' = ' + b + ' cm. Area = ½ × ' + a + ' × ' + b + ' = ' + area + ' cm².'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    var triples = [[3,4,5],[5,12,13],[8,15,17]];
    var t = _pickFrom(triples); var k = _randInt(2, 4);
    var a = t[0]*k, b = t[1]*k, hyp = t[2]*k;
    // give hyp and other leg, find first leg
    var w1 = a + k, w2 = a - 1, w3 = hyp - b;
    return {
      q: 'A right-angled triangle has hypotenuse ' + hyp + ' m and the longer leg is ' + b + ' m. Calculate the shorter leg and verify it is a Pythagorean triple.',
      opts: _buildOpts(a + ' m', [w1 + ' m', Math.max(1,w2) + ' m', w3 + ' m']),
      c: 0,
      e: 'leg = √(' + hyp + '² − ' + b + '²) = √(' + (hyp*hyp) + ' − ' + (b*b) + ') = √' + (a*a) + ' = ' + a + ' m. Check: ' + a + '² + ' + b + '² = ' + (a*a+b*b) + ' = ' + hyp + '². ✓'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-25-3  Pythagoras Word Problems & Converse
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-25-3"] = [
  { depth: 'medium', gen: function() {
    // word problem: horizontal + vertical distance → straight-line distance
    var triples = [[3,4,5],[5,12,13],[8,15,17],[6,8,10]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var h = t[0]*k, v = t[1]*k, d = t[2]*k;
    return {
      q: 'A ship travels ' + h + ' km east then ' + v + ' km north. How far is it from its starting point?',
      opts: _buildOpts(d + ' km', [(h + v) + ' km', (d + 1) + ' km', (d - 1) + ' km']),
      c: 0,
      e: 'd = √(' + h + '² + ' + v + '²) = √(' + (h*h + v*v) + ') = ' + d + ' km.'
    };
  }},
  { depth: 'medium', gen: function() {
    // converse: is it right-angled?
    var triples = [[3,4,5],[5,12,13],[8,15,17],[7,24,25]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    return {
      q: 'A triangle has sides ' + a + ' cm, ' + b + ' cm and ' + c + ' cm. Is it right-angled? (Yes / No)',
      opts: _buildOpts('Yes', ['No', 'Cannot tell', 'Only if scaled']),
      c: 0,
      e: a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a+b*b) + ' = ' + c + '². Since a² + b² = c², it IS right-angled.'
    };
  }},
  { depth: 'medium', gen: function() {
    // converse: NOT a right-angled triangle (sides not a triple)
    var nonTriples = [[3,4,6],[5,7,9],[4,6,8],[6,9,11]];
    var t = _pickFrom(nonTriples);
    var a = t[0], b = t[1], c = t[2];
    return {
      q: 'A triangle has sides ' + a + ' cm, ' + b + ' cm and ' + c + ' cm. Is it right-angled? (Yes / No)',
      opts: _buildOpts('No', ['Yes', 'Cannot tell', 'Only if scaled']),
      c: 0,
      e: a + '² + ' + b + '² = ' + (a*a) + ' + ' + (b*b) + ' = ' + (a*a+b*b) + ', but ' + c + '² = ' + (c*c) + '. Since ' + (a*a+b*b) + ' ≠ ' + (c*c) + ', it is NOT right-angled.'
    };
  }},
  { depth: 'medium', gen: function() {
    // ladder word problem
    var triples = [[3,4,5],[5,12,13],[8,15,17],[9,12,15]];
    var t = _pickFrom(triples); var k = _randInt(1, 2);
    var base = t[0]*k, height = t[1]*k, ladder = t[2]*k;
    return {
      q: 'A ladder ' + ladder + ' m long leans against a vertical wall. Its foot is ' + base + ' m from the wall. How high up the wall does it reach?',
      opts: _buildOpts(height + ' m', [(height + 1) + ' m', (height - 1) + ' m', (ladder - base) + ' m']),
      c: 0,
      e: 'height = √(' + ladder + '² − ' + base + '²) = √(' + (ladder*ladder - base*base) + ') = ' + height + ' m.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // two-step: find diagonal of a rectangle
    var triples = [[3,4,5],[5,12,13],[8,15,17],[6,8,10]];
    var t = _pickFrom(triples); var k = _randInt(1, 3);
    var w = t[0]*k, h = t[1]*k, d = t[2]*k;
    return {
      q: 'A rectangle is ' + w + ' cm wide and ' + h + ' cm tall. How long is its diagonal?',
      opts: _buildOpts(d + ' cm', [(w + h) + ' cm', (d + 2) + ' cm', (d - 2) + ' cm']),
      c: 0,
      e: 'The diagonal splits the rectangle into two right triangles with legs ' + w + ' and ' + h + '. d = √(' + (w*w) + ' + ' + (h*h) + ') = √' + (w*w+h*h) + ' = ' + d + ' cm.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // greater depth converse with a scaled triple vs a non-triple — pick which is right-angled
    var triples = [[5,12,13],[8,15,17],[7,24,25]];
    var t = _pickFrom(triples); var k = _randInt(1, 2);
    var a = t[0]*k, b = t[1]*k, c = t[2]*k;
    var check = a*a + b*b;
    // present as: "A builder measures three sides of a triangular plot: a, b, c. Will the corner be exactly 90°?"
    return {
      q: 'A builder measures three sides of a triangular plot: ' + a + ' m, ' + b + ' m, ' + c + ' m. Will the largest angle be exactly 90°?',
      opts: _buildOpts('Yes', ['No', 'Cannot tell without a protractor', 'Only approximately']),
      c: 0,
      e: 'Check: ' + a + '² + ' + b + '² = ' + check + '. And ' + c + '² = ' + (c*c) + '. Since ' + check + ' = ' + (c*c) + ', by the converse of Pythagoras the angle opposite the longest side is exactly 90°.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-20-5  Geometric Constructions — conceptual facts
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-20-5"] = [
  { depth: 'medium', gen: function() {
    // perpendicular bisector meets at 90°
    var angle = 90;
    return {
      q: 'A perpendicular bisector is drawn to a line segment. At what angle does it cross the line segment?',
      opts: _buildOpts(angle + '°', ['45°', '180°', '60°']),
      c: 0,
      e: 'A perpendicular bisector crosses the line segment at exactly 90°, forming a right angle.'
    };
  }},
  { depth: 'medium', gen: function() {
    // angle bisector halves an angle
    var full = _pickFrom([60, 80, 100, 120, 76, 140, 96]);
    var half = full / 2;
    return {
      q: 'An angle of ' + full + '° is bisected. What is the size of each half?',
      opts: _buildOpts(half + '°', [(full - half + 10) + '°', (half + 10) + '°', (full) + '°']),
      c: 0,
      e: 'An angle bisector divides the angle equally into two halves. ' + full + '° ÷ 2 = ' + half + '°.'
    };
  }},
  { depth: 'medium', gen: function() {
    // equilateral triangle has 60° angles
    return {
      q: 'An equilateral triangle is constructed using a compass and ruler. What is the size of each interior angle?',
      opts: _buildOpts('60°', ['90°', '45°', '120°']),
      c: 0,
      e: 'All three sides of an equilateral triangle are equal, so all three angles are equal. 180° ÷ 3 = 60°.'
    };
  }},
  { depth: 'medium', gen: function() {
    // perpendicular bisector also bisects — midpoint
    var x1 = _randInt(1, 8)*2; var x2 = x1 + _randInt(1,6)*2; // even so midpoint is integer
    var mid = (x1 + x2) / 2;
    return {
      q: 'A perpendicular bisector is drawn to the line segment from ' + x1 + ' cm to ' + x2 + ' cm. What is the distance from the start to where the bisector crosses?',
      opts: _buildOpts(mid + ' cm', [(x1) + ' cm', (x2) + ' cm', (x2 - mid + 1) + ' cm']),
      c: 0,
      e: 'The perpendicular bisector crosses at the midpoint: (' + x1 + ' + ' + x2 + ') ÷ 2 = ' + mid + ' cm.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // combined: bisect an angle, then ask what angle remains between one half and the full angle
    var full = _pickFrom([80, 100, 120, 140, 160, 96, 76]);
    var half = full / 2;
    var remaining = full - half; // same as half, but phrase differently
    return {
      q: 'An angle of ' + full + '° is bisected. One half is then bisected again. What is the size of the smallest angle formed?',
      opts: _buildOpts((full/4) + '°', [(full/2) + '°', (full/3) + '°', full + '°']),
      c: 0,
      e: 'First bisection: ' + full + '° ÷ 2 = ' + half + '°. Second bisection: ' + half + '° ÷ 2 = ' + (full/4) + '°.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // locus: all points equidistant from endpoints of a segment lie on the perpendicular bisector
    var len = _randInt(4,12)*2;
    var half = len / 2;
    return {
      q: 'A line segment AB is ' + len + ' cm long. The perpendicular bisector of AB is drawn. How far is the bisector from each endpoint, measured along AB?',
      opts: _buildOpts(half + ' cm', [len + ' cm', (half + 1) + ' cm', (half - 1) + ' cm']),
      c: 0,
      e: 'The perpendicular bisector passes through the midpoint of AB, which is ' + len + ' ÷ 2 = ' + half + ' cm from each endpoint.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-26-1  Bisectors & Perpendiculars
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-26-1"] = [
  { depth: 'medium', gen: function() {
    // perpendicular lines meet at 90°
    return {
      q: 'Two perpendicular lines intersect. What angle do they form at the intersection?',
      opts: _buildOpts('90°', ['45°', '180°', '60°']),
      c: 0,
      e: 'Perpendicular lines meet at a right angle, which is 90°.'
    };
  }},
  { depth: 'medium', gen: function() {
    // midpoint of a segment on a number line
    var a = _randInt(0, 10); var b = a + _randInt(2, 12)*2; // b-a even → integer midpoint
    var mid = (a + b) / 2;
    return {
      q: 'The perpendicular bisector of a line segment from ' + a + ' to ' + b + ' on a number line is drawn. At what value does it intersect the number line?',
      opts: _buildOpts(String(mid), [String(a), String(b), String(mid + 1)]),
      c: 0,
      e: 'Midpoint = (' + a + ' + ' + b + ') ÷ 2 = ' + mid + '.'
    };
  }},
  { depth: 'medium', gen: function() {
    // angle bisector halves the angle
    var ang = _pickFrom([50, 70, 90, 110, 130, 150, 62, 84, 108]);
    var half = ang / 2;
    return {
      q: 'An angle bisector divides an angle of ' + ang + '°. What is the size of each of the two equal angles?',
      opts: _buildOpts(half + '°', [(ang - half + 5) + '°', (half + 10) + '°', ang + '°']),
      c: 0,
      e: 'The bisector divides ' + ang + '° into two equal parts: ' + ang + '° ÷ 2 = ' + half + '°.'
    };
  }},
  { depth: 'medium', gen: function() {
    // midpoint in 2D (integer coords)
    var x1 = _randInt(0, 8), y1 = _randInt(0, 8);
    var x2 = x1 + _randInt(2, 8)*2, y2 = y1 + _randInt(2, 8)*2;
    var mx = (x1+x2)/2, my = (y1+y2)/2;
    return {
      q: 'The perpendicular bisector of segment from (' + x1 + ', ' + y1 + ') to (' + x2 + ', ' + y2 + ') passes through the midpoint. What are the coordinates of the midpoint?',
      opts: _buildOpts('(' + mx + ', ' + my + ')', ['(' + x1 + ', ' + y2 + ')', '(' + (mx+1) + ', ' + (my+1) + ')', '(' + x2 + ', ' + y1 + ')']),
      c: 0,
      e: 'Midpoint = ((' + x1 + '+' + x2 + ')/2, (' + y1 + '+' + y2 + ')/2) = (' + mx + ', ' + my + ').'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // given the bisected angle, work out the original
    var half = _pickFrom([25, 35, 40, 45, 55, 65, 38, 42]);
    var full = half * 2;
    return {
      q: 'After bisecting an angle, each half measures ' + half + '°. What was the original angle?',
      opts: _buildOpts(full + '°', [(full + 10) + '°', (full - 10) + '°', half + '°']),
      c: 0,
      e: 'Original angle = 2 × ' + half + '° = ' + full + '°.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // two perpendicular bisectors in a triangle meet at the circumcentre — conceptual distance question
    var x1 = _randInt(0, 4)*2, y1 = 0;
    var x2 = x1 + _randInt(2, 6)*2, y2 = 0;
    var mx = (x1+x2)/2;
    var sideLen = x2 - x1;
    return {
      q: 'Points A(' + x1 + ', 0) and B(' + x2 + ', 0) are the ends of a horizontal segment of length ' + sideLen + ' units. The perpendicular bisector of AB is a vertical line. What is its x-coordinate?',
      opts: _buildOpts(String(mx), [String(x1), String(x2), String(mx + 1)]),
      c: 0,
      e: 'The perpendicular bisector passes through the midpoint of AB. x = (' + x1 + ' + ' + x2 + ') ÷ 2 = ' + mx + '.'
    };
  }}
];

// ══════════════════════════════════════════════════════════════════════════
// m8i-26-2  Construct Polygons
// ══════════════════════════════════════════════════════════════════════════
TEST_GENERATORS["m8i-26-2"] = [
  { depth: 'medium', gen: function() {
    // equilateral triangle angles
    return {
      q: 'An equilateral triangle is constructed with a compass. What is each interior angle?',
      opts: _buildOpts('60°', ['90°', '45°', '120°']),
      c: 0,
      e: 'An equilateral triangle has three equal angles. 180° ÷ 3 = 60°.'
    };
  }},
  { depth: 'medium', gen: function() {
    // regular hexagon inscribed in circle: side = radius
    var r = _randInt(3, 10);
    return {
      q: 'A regular hexagon is inscribed in a circle of radius ' + r + ' cm. What is the side length of the hexagon?',
      opts: _buildOpts(r + ' cm', [(r + 1) + ' cm', (r - 1) + ' cm', (2*r) + ' cm']),
      c: 0,
      e: 'A regular hexagon inscribed in a circle has side length equal to the radius. Side = ' + r + ' cm.'
    };
  }},
  { depth: 'medium', gen: function() {
    // regular hexagon interior angle
    return {
      q: 'What is the interior angle of a regular hexagon?',
      opts: _buildOpts('120°', ['60°', '90°', '108°']),
      c: 0,
      e: 'Sum of interior angles of a hexagon = (6 − 2) × 180° = 720°. Each angle = 720° ÷ 6 = 120°.'
    };
  }},
  { depth: 'medium', gen: function() {
    // regular hexagon: number of triangles when diagonals are drawn from centre
    return {
      q: 'A regular hexagon is divided into triangles by drawing lines from the centre to each vertex. How many triangles are formed, and what type are they?',
      opts: _buildOpts('6 equilateral triangles', ['3 equilateral triangles', '6 isosceles triangles', '4 equilateral triangles']),
      c: 0,
      e: 'There are 6 vertices so 6 triangles are formed. Since the hexagon is regular and inscribed in a circle (side = radius), each triangle has all three sides equal — they are equilateral.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // hexagon perimeter given radius
    var r = _randInt(3, 9);
    var perim = 6 * r;
    return {
      q: 'A regular hexagon is inscribed in a circle of radius ' + r + ' cm. What is the perimeter of the hexagon?',
      opts: _buildOpts(perim + ' cm', [(perim + r) + ' cm', (perim - r) + ' cm', (4*r) + ' cm']),
      c: 0,
      e: 'Side length = radius = ' + r + ' cm. Perimeter = 6 × ' + r + ' = ' + perim + ' cm.'
    };
  }},
  { depth: 'greater-depth', gen: function() {
    // exterior angle of regular hexagon
    return {
      q: 'What is the exterior angle of a regular hexagon?',
      opts: _buildOpts('60°', ['90°', '120°', '45°']),
      c: 0,
      e: 'Exterior angle = 360° ÷ number of sides = 360° ÷ 6 = 60°.'
    };
  }}
];
