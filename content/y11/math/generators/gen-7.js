// content/y11/math/generators/gen-7.js — Year 11 Maths Topic 7 (Circle Theorems).
// Generators for all four islands. Angle configurations are described in words and the
// lesson diagrams carry the visuals. Uses _randInt/_buildOpts. Validated by check-generators.js.

// ── m11i-07-1 — Angles in a Circle ───────────────────────────────────────────
TEST_GENERATORS["m11i-07-1"] = [
  // angle at the centre = 2 × angle at the circumference
  { depth: 'medium', gen: function () {
      var t = 2 * _randInt(10, 29);   // even, 20–58
      return { q: 'Points A, B and C lie on a circle with centre O. The angle ACB at the circumference is ' + t + '°. What is the angle AOB at the centre (same arc AB)?',
        opts: _buildOpts((2 * t) + '°', [ (t / 2) + '°', (180 - t) + '°', (90 + t) + '°' ]), c: 0,
        e: 'The angle at the centre is twice the angle at the circumference standing on the same arc: 2 × ' + t + '° = ' + (2 * t) + '°.' };
  }},
  // reverse direction: centre → circumference
  { depth: 'medium', gen: function () {
      var C;
      do { C = 2 * _randInt(20, 80); } while (C === 60 || C === 90 || C === 120);
      return { q: 'The angle AOB at the centre of a circle is ' + C + '°. What is the angle ACB at the circumference, standing on the same arc AB?',
        opts: _buildOpts((C / 2) + '°', [ (2 * C) + '°', (180 - C) + '°', (C - 10) + '°' ]), c: 0,
        e: 'The angle at the circumference is HALF the angle at the centre: ' + C + '° ÷ 2 = ' + (C / 2) + '°.' };
  }},
  // angle in a semicircle
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(20, 60); } while (t === 45);
      return { q: 'AB is a diameter of a circle and C is a point on the circle. Angle ABC = ' + t + '°. What is angle BAC?',
        opts: _buildOpts((90 - t) + '°', [ t + '°', '90°', (180 - t) + '°' ]), c: 0,
        e: 'The angle in a semicircle is 90°, so angle ACB = 90°. The angles of triangle ABC sum to 180°: angle BAC = 180 − 90 − ' + t + ' = ' + (90 - t) + '°.' };
  }},
  // angles in the same segment
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(25, 80); } while (t === 30 || t === 45 || t === 60);
      return { q: 'P and Q are points on a circle, on the same side of chord AB. Angle APB = ' + t + '°. What is angle AQB?',
        opts: _buildOpts(t + '°', [ (2 * t) + '°', (180 - t) + '°', (90 - t) + '°' ]), c: 0,
        e: 'Angles in the same segment (standing on the same arc) are equal, so angle AQB = ' + t + '° too.' };
  }},
  // isosceles triangle from two radii (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var C;
      do { C = 2 * _randInt(20, 60); } while (C === 60 || C === 90 || C === 120);
      return { q: 'O is the centre of a circle and A, B are on the circle. Angle AOB = ' + C + '°. Triangle OAB has OA = OB (radii). What is angle OAB?',
        opts: _buildOpts(((180 - C) / 2) + '°', [ (C / 2) + '°', (180 - C) + '°', C + '°' ]), c: 0,
        e: 'OA = OB makes triangle OAB isosceles, so the base angles are equal: (180 − ' + C + ') ÷ 2 = ' + ((180 - C) / 2) + '°.' };
  }}
];

// ── m11i-07-2 — Tangents & Chords ────────────────────────────────────────────
TEST_GENERATORS["m11i-07-2"] = [
  // tangent ⊥ radius
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(20, 60); } while (t === 45);
      return { q: 'PT is a tangent to a circle at T, and O is the centre. Angle OPT = ' + t + '°. What is angle POT?',
        opts: _buildOpts((90 - t) + '°', [ t + '°', '90°', (180 - t) + '°' ]), c: 0,
        e: 'A tangent meets the radius at 90°, so angle OTP = 90°. The triangle\'s angles sum to 180°: angle POT = 180 − 90 − ' + t + ' = ' + (90 - t) + '°.' };
  }},
  // two tangents from an external point
  { depth: 'medium', gen: function () {
      var t;
      do { t = 2 * _randInt(15, 40); } while (t === 60);
      return { q: 'From an external point P, tangents touch a circle at A and B. Angle APB = ' + t + '°. What is angle PAB?',
        opts: _buildOpts((90 - t / 2) + '°', [ t + '°', (180 - t) + '°', (90 - t) + '°' ]), c: 0,
        e: 'Tangents from the same external point are equal (PA = PB), so triangle PAB is isosceles: angle PAB = (180 − ' + t + ') ÷ 2 = ' + (90 - t / 2) + '°.' };
  }},
  // perpendicular from centre bisects a chord (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var triples = [[3, 4, 5], [4, 3, 5], [6, 8, 10], [8, 6, 10]], t = triples[_randInt(0, 3)], k = _randInt(1, 2);
      var d = t[0] * k, h = t[1] * k, r = t[2] * k;
      return { q: 'A circle has radius ' + r + ' cm. A chord is ' + d + ' cm from the centre (perpendicular distance). How long is the chord?',
        opts: _buildOpts((2 * h) + ' cm', [ h + ' cm', (2 * r) + ' cm', (d + h) + ' cm' ]), c: 0,
        e: 'The perpendicular from the centre bisects the chord. Half-chord = √(' + r + '² − ' + d + '²) = √' + (h * h) + ' = ' + h + ' cm, so the chord is 2 × ' + h + ' = ' + (2 * h) + ' cm.' };
  }},
  // tangent–chord angle linked to the centre (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t;
      do { t = _randInt(25, 65); } while (t === 30 || t === 45 || t === 60);
      return { q: 'A tangent touches a circle at T. The angle between the tangent and chord TA is ' + t + '°. O is the centre. What is angle TOA?',
        opts: _buildOpts((2 * t) + '°', [ t + '°', (90 - t) + '°', (180 - 2 * t) + '°' ]), c: 0,
        e: 'By the alternate segment theorem the angle in the alternate segment is ' + t + '°, and the angle at the centre is twice that: ' + (2 * t) + '°.' };
  }}
];

// ── m11i-07-3 — Cyclic Quadrilaterals & Proof ────────────────────────────────
TEST_GENERATORS["m11i-07-3"] = [
  // opposite angles sum to 180°
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(70, 120); } while (t === 90);
      return { q: 'ABCD is a cyclic quadrilateral. Angle A = ' + t + '°. What is angle C (opposite A)?',
        opts: _buildOpts((180 - t) + '°', [ t + '°', (360 - t) + '°', (90 + t) + '°' ]), c: 0,
        e: 'Opposite angles of a cyclic quadrilateral add to 180°: angle C = 180 − ' + t + ' = ' + (180 - t) + '°.' };
  }},
  // pick the correct statement
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(50, 130); } while (t === 90);
      return { q: 'ABCD is a cyclic quadrilateral with angle A = ' + t + '°. Which statement MUST be true?',
        opts: _buildOpts('Angle C = ' + (180 - t) + '°', [ 'Angle C = ' + t + '°', 'Angle B = ' + (180 - t) + '°', 'Angle C = ' + (360 - t) + '°' ]), c: 0,
        e: 'Only OPPOSITE angles of a cyclic quadrilateral must sum to 180°. A and C are opposite, so angle C = ' + (180 - t) + '°. Angle B could take many values.' };
  }},
  // exterior angle equals opposite interior angle (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t;
      do { t = _randInt(50, 85); } while (t === 60);
      return { q: 'ABCD is a cyclic quadrilateral. Side BC is extended to E. Angle A (opposite interior) = ' + t + '°. What is the exterior angle DCE?',
        opts: _buildOpts(t + '°', [ (180 - t) + '°', (90 - t) + '°', (2 * t) + '°' ]), c: 0,
        e: 'The exterior angle of a cyclic quadrilateral equals the opposite interior angle: angle DCE = angle A = ' + t + '°. (Angle DCB = 180 − ' + t + ', and angles on the straight line BCE give ' + t + '° back.)' };
  }},
  // two-step with both pairs (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t = _randInt(60, 110), u;
      do { u = _randInt(40, 130); } while (u === t || u === 180 - t || u === 90 || 2 * u === 360 - t);
      return { q: 'ABCD is a cyclic quadrilateral with angle A = ' + t + '° and angle B = ' + u + '°. What is angle C?',
        opts: _buildOpts((180 - t) + '°', [ (180 - u) + '°', (360 - t - u) + '°', u + '°' ]), c: 0,
        e: 'C is opposite A, so angle C = 180 − ' + t + ' = ' + (180 - t) + '°. (180 − ' + u + ' = ' + (180 - u) + '° would be angle D, which is opposite B.)' };
  }}
];

// ── m11i-07-4 — The Alternate Segment Theorem ────────────────────────────────
TEST_GENERATORS["m11i-07-4"] = [
  // tangent–chord angle → angle in the alternate segment
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(25, 80); } while (t === 30 || t === 45 || t === 60);
      return { q: 'A tangent touches a circle at A. The angle between the tangent and chord AB is ' + t + '°. C is a point on the major arc. What is angle ACB?',
        opts: _buildOpts(t + '°', [ (180 - t) + '°', (90 - t) + '°', (2 * t) + '°' ]), c: 0,
        e: 'The alternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment, so angle ACB = ' + t + '°.' };
  }},
  // reverse direction
  { depth: 'medium', gen: function () {
      var t;
      do { t = _randInt(25, 80); } while (t === 30 || t === 45 || t === 60);
      return { q: 'Chord AB subtends an angle of ' + t + '° at a point in the alternate segment. What angle does AB make with the tangent at A?',
        opts: _buildOpts(t + '°', [ (90 - t) + '°', (180 - t) + '°', (2 * t) + '°' ]), c: 0,
        e: 'The theorem works both ways: the tangent–chord angle equals the angle in the alternate segment, ' + t + '°.' };
  }},
  // combined with an isosceles triangle (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t;
      do { t = 2 * _randInt(15, 40); } while (t === 60);
      return { q: 'A tangent touches a circle at A. The tangent–chord angle with chord AB is ' + t + '°, and triangle ABC in the alternate segment has CA = CB. What is angle CAB?',
        opts: _buildOpts((90 - t / 2) + '°', [ t + '°', (180 - t) + '°', (t / 2) + '°' ]), c: 0,
        e: 'By the alternate segment theorem, angle ACB = ' + t + '°. CA = CB makes the triangle isosceles, so angle CAB = (180 − ' + t + ') ÷ 2 = ' + (90 - t / 2) + '°.' };
  }},
  // quote the right reason (greater-depth)
  { depth: 'greater-depth', gen: function () {
      var t = _randInt(25, 75);
      return { q: 'In a proof you write: "the angle between tangent PT and chord TB (' + t + '°) equals angle TAB". Which reason should you quote?',
        opts: _buildOpts('The alternate segment theorem', [ 'The angle at the centre is twice the angle at the circumference', 'Angles in the same segment are equal', 'Opposite angles of a cyclic quadrilateral sum to 180°' ]), c: 0,
        e: 'Tangent–chord angle = angle in the alternate segment is exactly the alternate segment theorem. Examiners award the mark only if the correct theorem is named.' };
  }}
];
