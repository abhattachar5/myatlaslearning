// math-content-6.js — Flashcards & Questions for Topics 22-25
// Topic 22: Algebra Inequalities | Topic 23: Two-Variable Equations
// Topic 24: 2D Shapes & Angles | Topic 25: Symmetry & Transformations

// ─── TOPIC 22: ALGEBRA INEQUALITIES ──────────────────────────────────────────

FLASHCARDS.push(
  // mi-22-1: Graph Inequalities
  { islandId:'mi-22-1', front:'What is the difference between > and ≥?', back:'> means strictly greater than (open circle on number line). ≥ means greater than or equal to (closed circle on number line).' },
  { islandId:'mi-22-1', front:'Write the inequality shown by: closed circle at 3, arrow pointing right.', back:'x ≥ 3 (x is greater than or equal to 3, closed circle means 3 is included).' },
  { islandId:'mi-22-1', front:'What does an open circle on a number line mean?', back:'The value at the open circle is NOT included. Used with strict inequalities (< or >).' },

  // mi-22-2: Solve One-Step Inequalities
  { islandId:'mi-22-2', front:'Solve: x + 5 > 12', back:'Subtract 5 from both sides: x > 7. Graph: open circle at 7, arrow right.' },
  { islandId:'mi-22-2', front:'Solve: −2x ≤ 8. Why does the sign flip?', back:'Divide both sides by −2. When dividing by a negative, the inequality reverses: x ≥ −4.' },
  { islandId:'mi-22-2', front:'Solve: x/3 < 5', back:'Multiply both sides by 3 (positive, so sign stays): x < 15.' },

  // mi-22-3: Inequality Word Problems
  { islandId:'mi-22-3', front:'Write an inequality: "You need at least 50 points to pass."', back:'Let p = points. The inequality is p ≥ 50.' },
  { islandId:'mi-22-3', front:'A taxi charges £2 plus £1.50 per mile. Write an inequality for the cost to stay under £14.', back:'2 + 1.5m < 14 → 1.5m < 12 → m < 8. You can travel fewer than 8 miles.' },
  { islandId:'mi-22-3', front:'Solve: 3x + 4 ≤ 19. Interpret the solution in context.', back:'3x ≤ 15 → x ≤ 5. Any value of x up to and including 5 satisfies the condition.' }
);

// ─── TOPIC 23: TWO-VARIABLE EQUATIONS ────────────────────────────────────────

FLASHCARDS.push(
  // mi-23-1: Two-Variable Equations
  { islandId:'mi-23-1', front:'Is (2, 5) a solution to y = 2x + 1?', back:'Substitute: y = 2(2)+1 = 5. The result equals y = 5. Yes, (2, 5) is a solution.' },
  { islandId:'mi-23-1', front:'What does "independent variable" mean in a two-variable equation?', back:'The independent variable (usually x) is the input you choose. The dependent variable (y) depends on x.' },
  { islandId:'mi-23-1', front:'For y = 3x − 2, find y when x = −1.', back:'y = 3(−1)−2 = −3−2 = −5. So the solution pair is (−1, −5).' },

  // mi-23-2: Tables & Graphs of Linear Equations
  { islandId:'mi-23-2', front:'Complete the table for y = 2x + 1 at x = 0, 1, 2, 3.', back:'x=0: y=1. x=1: y=3. x=2: y=5. x=3: y=7. Pairs: (0,1),(1,3),(2,5),(3,7).' },
  { islandId:'mi-23-2', front:'What does the y-intercept of a straight line graph show?', back:'The y-intercept is where the line crosses the y-axis (where x=0). In y=mx+c, it is the value of c.' },
  { islandId:'mi-23-2', front:'How do you determine if a graph represents y = x − 2?', back:'Check that points on the graph satisfy y = x − 2. E.g. (0, −2), (2, 0), (3, 1) should all lie on it.' },

  // mi-23-3: Interpret Graphs
  { islandId:'mi-23-3', front:'A distance-time graph is flat (horizontal). What does this mean?', back:'The object is stationary — not moving. Distance is not changing over time.' },
  { islandId:'mi-23-3', front:'On a distance-time graph, what does a steeper line mean?', back:'A steeper line means a greater speed (the object is travelling faster).' },
  { islandId:'mi-23-3', front:'What does the x-intercept of a graph represent?', back:'The x-intercept is where the graph crosses the x-axis (where y=0). E.g. on a profit graph, it shows the break-even point.' }
);

// ─── TOPIC 24: 2D SHAPES & ANGLES ────────────────────────────────────────────

FLASHCARDS.push(
  // mi-24-1: Classify Polygons & Angles
  { islandId:'mi-24-1', front:'What are the four main angle types?', back:'Acute: 0°–90°. Right: exactly 90°. Obtuse: 90°–180°. Reflex: 180°–360°.' },
  { islandId:'mi-24-1', front:'What is the difference between an equilateral, isosceles and scalene triangle?', back:'Equilateral: all 3 sides equal, all angles 60°. Isosceles: 2 sides equal. Scalene: no sides equal.' },
  { islandId:'mi-24-1', front:'How many degrees are in a straight angle? A full turn?', back:'Straight angle = 180°. Full turn = 360°.' },

  // mi-24-2: Angles in Triangles & Quadrilaterals
  { islandId:'mi-24-2', front:'Two angles in a triangle are 47° and 68°. What is the third?', back:'Angles in a triangle sum to 180°. Third = 180°−47°−68° = 65°.' },
  { islandId:'mi-24-2', front:'Three angles in a quadrilateral are 75°, 110°, 95°. What is the fourth?', back:'Angles in a quadrilateral sum to 360°. Fourth = 360°−75°−110°−95° = 80°.' },
  { islandId:'mi-24-2', front:'What is the angle sum of any polygon with n sides?', back:'Angle sum = (n − 2) × 180°. E.g. pentagon (n=5): (5−2)×180° = 540°.' },

  // mi-24-3: Parallel Lines & Transversals
  { islandId:'mi-24-3', front:'What are corresponding angles?', back:'Corresponding angles are in the same position at each intersection when a transversal crosses parallel lines. They are equal (often called F-angles).' },
  { islandId:'mi-24-3', front:'Alternate angles between parallel lines are...?', back:'Equal. Alternate angles (Z-angles) are on opposite sides of the transversal between two parallel lines.' },
  { islandId:'mi-24-3', front:'Co-interior (same-side interior) angles between parallel lines sum to...?', back:'180°. Co-interior angles (C-angles) are on the same side of the transversal, between the parallel lines.' },

  // mi-24-4: Angles, Lines & Circles
  { islandId:'mi-24-4', front:'What are vertical angles (vertically opposite angles)?', back:'When two lines cross, the angles opposite each other are equal.\n\nIf one angle is 70°, the vertically opposite angle is also 70°.\nThe adjacent angles are supplementary (add to 180°): 110°.' },
  { islandId:'mi-24-4', front:'What is the difference between a line, a line segment, and a ray?', back:'Line: extends infinitely in both directions (←→).\nLine segment: has two endpoints (—).\nRay: has one endpoint and extends infinitely in one direction (→).\n\nA segment has a measurable length; a line and ray do not.' },
  { islandId:'mi-24-4', front:'Name the parts of a circle.', back:'Radius: centre to circumference.\nDiameter: across the circle through the centre (= 2 × radius).\nChord: line segment joining two points on the circumference.\nArc: part of the circumference.\nSector: "pizza slice" (two radii + arc).\nTangent: line that touches the circle at exactly one point.' }
);

// ─── TOPIC 25: SYMMETRY & TRANSFORMATIONS ────────────────────────────────────

FLASHCARDS.push(
  // mi-25-1: Line & Rotational Symmetry
  { islandId:'mi-25-1', front:'What is a line of symmetry?', back:'A line of symmetry divides a shape into two identical halves that are mirror images of each other.' },
  { islandId:'mi-25-1', front:'What is the order of rotational symmetry?', back:'The number of times a shape looks the same during a full 360° rotation. A shape with no rotational symmetry has order 1.' },
  { islandId:'mi-25-1', front:'How many lines of symmetry does a regular hexagon have?', back:'A regular hexagon has 6 lines of symmetry and rotational symmetry of order 6.' },

  // mi-25-2: Reflections & Translations
  { islandId:'mi-25-2', front:'When reflecting a point in the x-axis, what changes?', back:'The y-coordinate changes sign. The x-coordinate stays the same. (x, y) → (x, −y).' },
  { islandId:'mi-25-2', front:'Describe the translation that moves (2, 3) to (5, 1).', back:'x increases by 3 (right 3), y decreases by 2 (down 2). Translation vector: (3, −2).' },
  { islandId:'mi-25-2', front:'Point (−3, 4) is reflected in the y-axis. What are its new coordinates?', back:'Reflecting in the y-axis: x changes sign, y stays. (−3, 4) → (3, 4).' },

  // mi-25-3: Congruent Figures
  { islandId:'mi-25-3', front:'What does it mean for two shapes to be congruent?', back:'Congruent shapes are identical in size and shape — all corresponding sides and angles are equal.' },
  { islandId:'mi-25-3', front:'If triangle ABC ≅ triangle DEF, which sides are corresponding?', back:'AB ↔ DE, BC ↔ EF, AC ↔ DF. The order of letters in the congruence statement tells you the correspondence.' },
  { islandId:'mi-25-3', front:'Can two shapes be congruent if one is a reflection of the other?', back:'Yes. Reflections produce congruent shapes — the size and angles are preserved, just the orientation changes.' },

  // mi-24-5: Compass Constructions
  { islandId:'mi-24-5', front:'What is a perpendicular bisector?', back:'A line that cuts a line segment exactly in half at a right angle (90°). Every point on it is equidistant from the two endpoints.' },
  { islandId:'mi-24-5', front:'How do you construct an angle bisector?', back:'1. From the vertex, draw an arc crossing both arms.\n2. From each crossing point, draw arcs that intersect inside the angle.\n3. Draw a line from the vertex through the intersection point.' },
  { islandId:'mi-24-5', front:'What is the shortest distance from a point to a line?', back:'The perpendicular distance — a line drawn at 90° from the point to the line. Any other path is longer.' },

  // mi-25-4: Rotations
  { islandId:'mi-25-4', front:'What three things must you state to describe a rotation?', back:'1. Centre of rotation (the fixed point)\n2. Angle of rotation (90°, 180° or 270°)\n3. Direction (clockwise or anticlockwise)' },
  { islandId:'mi-25-4', front:'What happens to the point (3, 1) after a 90° clockwise rotation about the origin?', back:'(3, 1) → (1, −3)\n\nRule for 90° CW about origin: (x, y) → (y, −x)' },
  { islandId:'mi-25-4', front:'What happens to the point (2, −4) after a 180° rotation about the origin?', back:'(2, −4) → (−2, 4)\n\nRule for 180° about origin: (x, y) → (−x, −y)\nBoth coordinates change sign.' }
);

// ─── QUESTIONS ────────────────────────────────────────────────────────────────

Object.assign(QUESTIONS, {

  // ── mi-22-1: Graph Inequalities ────────────────────────────────────────────
  'mi-22-1': [
    { question:'Which inequality symbol means "less than or equal to"?', options:['≤','<','≥','>'], answer:0, explanation:'≤ means less than or equal to. A closed circle on a number line.' },
    { question:'What does an open circle at 4 with an arrow pointing left represent?', options:['x < 4','x ≤ 4','x > 4','x ≥ 4'], answer:0, explanation:'Open circle = not included. Arrow left = less than. So x < 4.' },
    { question:'Write the inequality: "a number n is greater than −2".', options:['n > −2','n < −2','n ≥ −2','n ≤ −2'], answer:0, explanation:'"Greater than" uses >. Answer: n > −2.' },
    { question:'Which graph shows x ≥ 3?', options:['Closed circle at 3, arrow right','Open circle at 3, arrow right','Closed circle at 3, arrow left','Open circle at 3, arrow left'], answer:0, explanation:'≥ includes 3 (closed circle) and means 3 and above (arrow right).' },
    { question:'A number line shows a closed circle at −1 with an arrow pointing right. This represents:', options:['x ≥ −1','x > −1','x ≤ −1','x < −1'], answer:0, explanation:'Closed circle at −1 (included) with arrow right = x ≥ −1.' },
    { question:'Write an inequality for: "p is at most 10"', options:['p ≤ 10','p < 10','p ≥ 10','p > 10'], answer:0, explanation:'"At most 10" means up to and including 10: p ≤ 10.' },
    { question:'Which of these is represented by x > 0?', options:['Open circle at 0, arrow right','Closed circle at 0, arrow right','Open circle at 0, arrow left','Closed circle at 0, arrow left'], answer:0, explanation:'> means strictly greater, so open circle at 0, pointing right.' },
    { question:'Write an inequality for: "you must be at least 18 years old"', options:['age ≥ 18','age > 18','age ≤ 18','age < 18'], answer:0, explanation:'"At least 18" means 18 or older: age ≥ 18.' },
    { question:'A number line shows a closed circle at 5 and a closed circle at 10 with a line between them. This represents:', options:['5 ≤ x ≤ 10','5 < x < 10','x ≤ 5 or x ≥ 10','x < 5 or x > 10'], answer:0, explanation:'Closed circles at both ends with a segment between means the value is between 5 and 10, inclusive.' },
    { question:'Which value satisfies x < −3?', options:['−5','−3','0','−2'], answer:0, explanation:'−5 < −3 ✓. −3 is not strictly less than −3. −2 and 0 are both greater than −3.' }
  ],

  // ── mi-22-2: Solve One-Step Inequalities ──────────────────────────────────
  'mi-22-2': [
    { gen: function() {
        var b = randInt(2, 9), rhs = randInt(10, 20);
        var ans = rhs - b;
        var opts = buildOpts('x > ' + ans, ['x > ' + (ans + 1), 'x < ' + ans, 'x ≥ ' + ans]);
        return {
            q: 'Solve: x + ' + b + ' > ' + rhs,
            opts: opts, c: 0,
            e: 'Subtract ' + b + ' from both sides: x > ' + rhs + ' − ' + b + ' = ' + ans + '.'
        };
    }},
    { gen: function() {
        var a = randInt(2, 8), ans = randInt(3, 9);
        var rhs = a * ans;
        var opts = buildOpts('x ≤ ' + ans, ['x ≤ ' + (ans + 1), 'x ≥ ' + ans, 'x ≤ ' + (rhs - a)]);
        return {
            q: 'Solve: ' + a + 'x ≤ ' + rhs,
            opts: opts, c: 0,
            e: 'Divide both sides by ' + a + ': x ≤ ' + rhs + ' ÷ ' + a + ' = ' + ans + '.'
        };
    }},
    { question:'Solve: −3x > 12. What happens to the inequality sign?', options:['x < −4 (sign reverses)','x > −4 (sign stays)','x > 4','x < 4'], answer:0, explanation:'Dividing by −3 reverses the sign: x < −4.' },
    { gen: function() {
        var b = randInt(3, 10), rhs = randInt(2, 8);
        var ans = rhs - b;
        var opts = buildOpts('x ≥ ' + ans, ['x ≥ ' + (ans + 1), 'x ≤ ' + ans, 'x ≥ ' + (rhs + b)]);
        return {
            q: 'Solve: x + ' + b + ' ≥ ' + rhs,
            opts: opts, c: 0,
            e: 'Subtract ' + b + ': x ≥ ' + rhs + ' − ' + b + ' = ' + ans + '.'
        };
    }},
    { gen: function() {
        var a = randInt(2, 8), ans = randInt(2, 9);
        var rhs = a * ans;
        var opts = buildOpts('x < ' + rhs, ['x < ' + ans, 'x > ' + rhs, 'x < ' + (rhs / a)]);
        return {
            q: 'Solve: x/' + a + ' < ' + ans,
            opts: opts, c: 0,
            e: 'Multiply both sides by ' + a + ' (positive, no sign reversal): x < ' + ans + ' × ' + a + ' = ' + rhs + '.'
        };
    }},
    { question:'Which value does NOT satisfy 2x + 1 > 7?', options:['2','4','5','10'], answer:0, explanation:'2(2)+1=5. 5 > 7 is false. So x=2 does not satisfy.' },
    { question:'Solve: −x ≤ 6', options:['x ≥ −6','x ≤ 6','x ≤ −6','x ≥ 6'], answer:0, explanation:'Multiply both sides by −1 (reverse sign): x ≥ −6.' },
    { gen: function() {
        var a = randInt(2, 7), ans = randInt(3, 9);
        var rhs = a * ans;
        var opts = buildOpts('x < ' + ans + ' (open circle at ' + ans + ', arrow left)', 'x < ' + ans + ' (closed circle at ' + ans + ')', 'x > ' + ans, 'x ≤ ' + ans);
        opts = buildOpts('x < ' + ans + ' (open circle at ' + ans + ', arrow left)', ['x < ' + ans + ' (closed circle at ' + ans + ')', 'x > ' + ans, 'x ≤ ' + ans]);
        return {
            q: 'Solve: ' + a + 'x < ' + rhs + ', then describe the graph.',
            opts: opts, c: 0,
            e: 'Divide by ' + a + ': x < ' + ans + '. Open circle at ' + ans + ', arrow pointing left.'
        };
    }},
    { question:'Which inequality has x = 0 in its solution set?', options:['x > −1','x > 5','x < −3','x ≥ 2'], answer:0, explanation:'x=0 satisfies x > −1 (since 0 > −1 ✓). 0 does not satisfy the others.' },
    { question:'Solve: x/−2 > 3', options:['x < −6','x > −6','x < 6','x > 6'], answer:0, explanation:'Multiply by −2 and reverse sign: x < −6.' }
  ],

  // ── mi-22-3: Inequality Word Problems ─────────────────────────────────────
  'mi-22-3': [
    { question:'A theatre has 400 seats. At least 250 must be sold to make a profit. Write the inequality.', options:['s ≥ 250','s > 250','s ≤ 250','s < 250'], answer:0, explanation:'"At least 250" means s ≥ 250.' },
    { gen: function() {
        var a = randInt(2, 5), b = randInt(1, 6), ans = randInt(4, 9);
        var rhs = a * ans + b;
        var opts = buildOpts('x ≤ ' + ans, ['x ≥ ' + ans, 'x ≤ ' + (ans + 1), 'x < ' + ans]);
        return {
            q: 'Solve: ' + a + 'x + ' + b + ' ≤ ' + rhs,
            opts: opts, c: 0,
            e: a + 'x ≤ ' + (rhs - b) + ' → x ≤ ' + (rhs - b) + ' ÷ ' + a + ' = ' + ans + '.'
        };
    }},
    { question:'Emma can carry at most 12 kg. She has 5 kg already. How much more can she carry?', options:['m ≤ 7','m < 7','m ≥ 7','m > 7'], answer:0, explanation:'5 + m ≤ 12 → m ≤ 7.' },
    { question:'A lift has a maximum capacity of 600 kg. Each person averages 75 kg. What is the max number of people (inequality)?', options:['75n ≤ 600, so n ≤ 8','75n < 600, so n < 8','75n ≥ 600','n ≤ 75'], answer:0, explanation:'75n ≤ 600 → n ≤ 8. Maximum 8 people.' },
    { gen: function() {
        var a = randInt(2, 4), b = randInt(1, 5), ans = randInt(4, 8);
        var rhs = a * ans - b;
        var opts = buildOpts('n > ' + ans + ' (more than ' + ans + ' items needed)', ['n > ' + (ans - 1), 'n < ' + ans, 'n ≥ ' + ans]);
        return {
            q: 'Solve and interpret: ' + a + 'n − ' + b + ' > ' + rhs + ' in the context of "number of items n".',
            opts: opts, c: 0,
            e: a + 'n > ' + (rhs + b) + ' → n > ' + (rhs + b) + ' ÷ ' + a + ' = ' + ans + '. More than ' + ans + ' items are needed.'
        };
    }},
    { question:'A plumber charges £40 call-out plus £30/hour. Write an inequality for costs to remain under £160.', options:['40 + 30h < 160','40 + 30h ≤ 160','30h < 160','40h + 30 < 160'], answer:0, explanation:'Total cost = 40 + 30h < 160.' },
    { gen: function() {
        var fixed = randInt(20, 50) * 2, rate = randInt(10, 25) * 2, budget = randInt(100, 200);
        // ensure clean answer
        var hAns = Math.floor((budget - fixed) / rate);
        budget = fixed + rate * hAns + randInt(1, rate - 1);
        var opts = buildOpts('h < ' + hAns, ['h ≤ ' + hAns, 'h < ' + (hAns + 1), 'h ≤ ' + (hAns - 1)]);
        return {
            q: 'Solve ' + fixed + ' + ' + rate + 'h < ' + budget + ' to find the maximum hours.',
            opts: opts, c: 0,
            e: rate + 'h < ' + (budget - fixed) + ' → h < ' + (budget - fixed) + ' ÷ ' + rate + ' = ' + ((budget - fixed) / rate).toFixed(2) + '. So h < ' + hAns + ' (fewer than ' + hAns + ' full hours).'
        };
    }},
    { question:'A club requires members to be older than 13. Which inequality is correct?', options:['age > 13','age ≥ 13','age < 13','age ≤ 13'], answer:0, explanation:'"Older than 13" (not equal to 13) means age > 13.' },
    { gen: function() {
        var a = randInt(2, 4), b = randInt(5, 12), ans = randInt(1, 4);
        var rhs = b - a * ans;
        var opts = buildOpts('x ≤ ' + ans, ['x ≥ ' + ans, 'x ≤ ' + (ans - 1), 'x ≥ ' + (-ans)]);
        return {
            q: 'Solve: ' + b + ' − ' + a + 'x ≥ ' + rhs,
            opts: opts, c: 0,
            e: '−' + a + 'x ≥ ' + (rhs - b) + ' → divide by −' + a + ' (reverse sign): x ≤ ' + ans + '.'
        };
    }},
    { question:'Tom saves £15 per week. He needs to save more than £200. Minimum number of weeks?', options:['14 weeks','13 weeks','15 weeks','12 weeks'], answer:0, explanation:'15w > 200 → w > 13.3. So minimum 14 full weeks.' }
  ],

  // ── mi-23-1: Two-Variable Equations ───────────────────────────────────────
  'mi-23-1': [
    { gen: function() {
        var m = randInt(2, 5), c = randInt(1, 6), x = randInt(2, 7);
        var y = m * x + c;
        var opts = buildOpts('Yes', ['No', 'Cannot tell', 'Only if x=' + x]);
        return {
            q: 'Is (' + x + ', ' + y + ') a solution to y = ' + m + 'x + ' + c + '?',
            opts: opts, c: 0,
            e: 'y = ' + m + '(' + x + ') + ' + c + ' = ' + (m * x) + ' + ' + c + ' = ' + y + '. Since y=' + y + ' matches, yes (' + x + ', ' + y + ') is a solution.'
        };
    }},
    { gen: function() {
        var m = randInt(2, 6), c = randInt(1, 6), x = randInt(1, 5);
        var ans = m * x - c;
        var opts = buildOpts(ans, [m * x, m * x + c, m - c]);
        return {
            q: 'For y = ' + m + 'x − ' + c + ', find y when x = ' + x + '.',
            opts: opts, c: 0,
            e: 'y = ' + m + '(' + x + ') − ' + c + ' = ' + (m * x) + ' − ' + c + ' = ' + ans + '.'
        };
    }},
    { question:'Which pair satisfies y = x − 5?', options:['(8, 3)','(3, 8)','(5, 0)','(0, 5)'], answer:0, explanation:'8−5=3 ✓ (8,3) works. Check (5,0): 5−5=0 ✓. Both work! But (8,3) is listed first.' },
    { question:'In y = 3x + 2, which is the dependent variable?', options:['y','x','3','2'], answer:0, explanation:'y depends on x. y is the dependent variable.' },
    { gen: function() {
        var m = randInt(2, 5), c = randInt(1, 8), xAns = randInt(2, 7);
        var y = m * xAns + c;
        var opts = buildOpts(xAns, [y, xAns + 1, xAns - 1]);
        return {
            q: 'Find x when y = ' + y + ' in the equation y = ' + m + 'x + ' + c + '.',
            opts: opts, c: 0,
            e: y + ' = ' + m + 'x + ' + c + ' → ' + m + 'x = ' + (y - c) + ' → x = ' + xAns + '.'
        };
    }},
    { gen: function() {
        var c = randInt(2, 7);
        // Build a point that is NOT on y = x + c
        var xOff = randInt(1, 5), yOff = xOff + c + randInt(1, 3);
        var xOn1 = randInt(0, 4), yOn1 = xOn1 + c;
        var xOn2 = randInt(5, 8), yOn2 = xOn2 + c;
        var xOn3 = -1, yOn3 = -1 + c;
        var opts = buildOpts('(' + xOff + ', ' + yOff + ')', ['(' + xOn1 + ', ' + yOn1 + ')', '(' + xOn2 + ', ' + yOn2 + ')', '(' + xOn3 + ', ' + yOn3 + ')']);
        return {
            q: 'Which pair is NOT on the line y = x + ' + c + '?',
            opts: opts, c: 0,
            e: '(' + xOff + ',' + yOff + '): ' + xOff + '+' + c + '=' + (xOff + c) + '≠' + yOff + '. So (' + xOff + ', ' + yOff + ') is not on y=x+' + c + '.'
        };
    }},
    { question:'A car rental costs £20 plus £15 per day (d). Write this as a two-variable equation (C = cost).', options:['C = 15d + 20','C = 20d + 15','C = 35d','C = 15 + 20d'], answer:0, explanation:'Fixed cost £20, variable £15 per day: C = 15d + 20.' },
    { gen: function() {
        var rate = randInt(10, 20), fixed = randInt(15, 40), d = randInt(2, 6);
        var ans = rate * d + fixed;
        var opts = buildOpts('£' + ans, ['£' + (rate * d), '£' + (rate * d - fixed), '£' + (ans + rate)]);
        return {
            q: 'Using C = ' + rate + 'd + ' + fixed + ', find the cost for ' + d + ' days.',
            opts: opts, c: 0,
            e: 'C = ' + rate + '(' + d + ') + ' + fixed + ' = ' + (rate * d) + ' + ' + fixed + ' = £' + ans + '.'
        };
    }},
    { gen: function() {
        var m = randInt(2, 5), c = randInt(2, 6);
        var x = -randInt(1, 3);
        var y = -m * x - c; // y = -mx - c, so when negating: y = m*|x| - c? Let's do y = -x - c style
        // Use y = -x - c: at x, y = -x - c
        var ans = -x - c;
        var yCheck = -x - c;
        var opts = buildOpts('Yes', ['No', 'Cannot determine', 'Only if y > 0']);
        return {
            q: 'Is (' + x + ', ' + yCheck + ') a solution to y = −x − ' + c + '?',
            opts: opts, c: 0,
            e: 'y = −(' + x + ') − ' + c + ' = ' + (-x) + ' − ' + c + ' = ' + yCheck + '. y=' + yCheck + ' matches. Yes.'
        };
    }},
    { gen: function() {
        var c = randInt(3, 8), x = -randInt(1, 3);
        var m = randInt(2, 5);
        var ans = c - m * x; // y = c - mx, at x (negative), y = c + m*|x|
        var opts = buildOpts(ans, [c - m, c + m, -ans]);
        return {
            q: 'For y = ' + c + ' − ' + m + 'x, find y when x = ' + x + '.',
            opts: opts, c: 0,
            e: 'y = ' + c + ' − ' + m + '(' + x + ') = ' + c + ' + ' + (-m * x) + ' = ' + ans + '.'
        };
    }}
  ],

  // ── mi-23-2: Tables & Graphs of Linear Equations ──────────────────────────
  'mi-23-2': [
    { gen: function() {
        var m = randInt(2, 5), c = -randInt(1, 6);
        var ans = c; // y-intercept = c (when x=0)
        var opts = buildOpts(ans, [m, -c, 0]);
        return {
            q: 'For y = ' + m + 'x ' + (c < 0 ? '− ' + (-c) : '+ ' + c) + ', what is y when x = 0?',
            opts: opts, c: 0,
            e: 'y = ' + m + '(0) ' + (c < 0 ? '− ' + (-c) : '+ ' + c) + ' = ' + ans + '. This is the y-intercept.'
        };
    }},
    { gen: function() {
        var m = randInt(2, 4), c = randInt(1, 5);
        var y1 = m * 1 + c, y2 = m * 2 + c, y3 = m * 3 + c;
        var opts = buildOpts(y1 + ', ' + y2 + ', ' + y3,
            [(y1 - 1) + ', ' + (y2 - 1) + ', ' + (y3 - 1),
             c + ', ' + (c + m - 1) + ', ' + (c + 2 * m - 1),
             (y1 + 1) + ', ' + (y2 + 1) + ', ' + (y3 + 1)]);
        return {
            q: 'Complete: y = ' + m + 'x + ' + c + ' when x = 1, 2, 3. Which sequence of y-values is correct?',
            opts: opts, c: 0,
            e: 'x=1: ' + y1 + '. x=2: ' + y2 + '. x=3: ' + y3 + '.'
        };
    }},
    { gen: function() {
        var m = randInt(1, 4), c = randInt(1, 6), x = randInt(2, 6);
        var y = m * x + c;
        var opts = buildOpts('(' + x + ', ' + y + ')', ['(' + y + ', ' + x + ')', '(' + c + ', ' + c + ')', '(0, ' + (c - 1) + ')']);
        return {
            q: 'Which point does the graph y = ' + m + 'x + ' + c + ' pass through?',
            opts: opts, c: 0,
            e: 'x=' + x + ': y=' + x + '+' + c + '=' + y + '. (' + x + ',' + y + ') is on the line ✓.'
        };
    }},
    { gen: function() {
        var m = randInt(2, 6), c = -randInt(1, 8);
        var ans = c;
        var opts = buildOpts(ans, [m, -c, m + c]);
        return {
            q: 'What is the y-intercept of y = ' + m + 'x ' + (c < 0 ? '− ' + (-c) : '+ ' + c) + '?',
            opts: opts, c: 0,
            e: 'y-intercept: set x=0. y=' + m + '(0)' + (c < 0 ? '−' + (-c) : '+' + c) + '=' + ans + '.'
        };
    }},
    { question:'If a table of values has (0, 2), (1, 4), (2, 6), which equation fits?', options:['y = 2x + 2','y = x + 2','y = 2x','y = 3x − 1'], answer:0, explanation:'At x=0: y=2. 2(0)+2=2 ✓. At x=1: 2(1)+2=4 ✓.' },
    { question:'Which table of values fits y = −x + 3?', options:['(0,3), (1,2), (2,1)','(0,3),(1,4),(2,5)','(0,−3),(1,−4),(2,−5)','(0,−3),(1,2),(2,1)'], answer:0, explanation:'x=0:3, x=1:2, x=2:1. Matches first option.' },
    { gen: function() {
        var m = randInt(2, 4), c = randInt(1, 5);
        var x2 = randInt(2, 4);
        var y1 = c, y2 = m * x2 + c;
        var opts = buildOpts('y = ' + m + 'x + ' + c, ['y = ' + m + 'x − ' + c, 'y = ' + (m - 1) + 'x + ' + c, 'y = ' + (m + 1) + 'x − ' + c]);
        return {
            q: 'A straight-line graph passes through (0, ' + y1 + ') and (' + x2 + ', ' + y2 + '). What is its equation?',
            opts: opts, c: 0,
            e: 'Gradient=(' + y2 + '−' + y1 + ')/(' + x2 + '−0)=' + (y2 - y1) + '/' + x2 + '=' + m + '. y-intercept=' + c + '. Equation: y=' + m + 'x+' + c + '.'
        };
    }},
    { gen: function() {
        var m = randInt(2, 4), c = randInt(1, 5), x = randInt(2, 5);
        var y = m * x + c;
        var opts = buildOpts('Yes', ['No', 'Cannot tell', 'Only if x is positive']);
        return {
            q: 'Does the point (' + x + ', ' + y + ') lie on y = ' + m + 'x + ' + c + '?',
            opts: opts, c: 0,
            e: m + '(' + x + ')+' + c + '=' + y + '. Yes, (' + x + ',' + y + ') lies on y=' + m + 'x+' + c + '.'
        };
    }},
    { question:'Which graph is horizontal (flat)?', options:['y = 3 (constant)','y = 3x','y = x + 3','x = 3'], answer:0, explanation:'y=3 means y is always 3 regardless of x — a horizontal line.' },
    { question:'Plot the line y = x − 4. Through which quadrant does it pass when x is between 0 and 4?', options:['Quadrant IV','Quadrant I','Quadrant II','Quadrant III'], answer:0, explanation:'For x between 0 and 4, y = x−4 is negative (between −4 and 0). x positive, y negative → Quadrant IV.' }
  ],

  // ── mi-23-3: Interpret Graphs ──────────────────────────────────────────────
  'mi-23-3': [
    { question:'A distance-time graph shows a flat horizontal section. This means the object is:', options:['Stationary','Moving at constant speed','Accelerating','Decelerating'], answer:0, explanation:'A horizontal line on a distance-time graph means no change in distance — the object is stationary.' },
    { question:'A distance-time graph shows a steeper line from A to B than from B to C. What does this tell us?', options:['Faster from A to B','Same speed','Slower from A to B','Cannot determine'], answer:0, explanation:'Steeper slope = greater distance per unit time = faster speed.' },
    { question:'The x-intercept of a profit-vs-units graph is at (50, 0). What does this mean?', options:['Break even at 50 units','Profit is £50','Loss of 50 units','50 is the maximum profit'], answer:0, explanation:'At the x-intercept, profit=0. This is the break-even point: 50 units must be sold.' },
    { question:'A graph shows temperature falling from 20°C to −5°C over 5 hours. What is the rate of decrease?', options:['5°C per hour','25°C per hour','4°C per hour','−5°C per hour'], answer:0, explanation:'Total change = 25°C over 5 hours = 5°C per hour.' },
    { question:'Which graph section shows the greatest speed on a distance-time graph?', options:['Steepest upward slope','Horizontal section','Least steep slope','Downward slope'], answer:0, explanation:'Greatest speed corresponds to the greatest gradient (steepest upward slope).' },
    { question:'A water tank is being filled at a constant rate. Which graph shape would represent the volume over time?', options:['Straight line going up','Curved line going up','Horizontal line','Vertical line'], answer:0, explanation:'Constant rate of fill = constant gradient = straight line going up.' },
    { gen: function() {
        var m = randInt(2, 5), xMax = randInt(4, 8);
        var yMax = m * xMax;
        var opts = buildOpts(yMax, [xMax, m, 0]);
        return {
            q: 'A graph shows y = ' + m + 'x for 0 ≤ x ≤ ' + xMax + '. What is the maximum value of y shown?',
            opts: opts, c: 0,
            e: 'When x=' + xMax + ', y=' + m + '(' + xMax + ')=' + yMax + '. Maximum y shown is ' + yMax + '.'
        };
    }},
    { question:'At the y-intercept of a cost-time graph, time = 0. What does this value represent?', options:['Fixed starting cost','Total cost','Rate of change','Variable cost'], answer:0, explanation:'At time=0, the cost is the fixed starting cost (e.g., a connection fee or set-up charge).' },
    { gen: function() {
        var x1 = 0, y1 = randInt(6, 15), x2 = randInt(3, 7), y2 = 0;
        var grad = -(y1 / x2);
        var gradStr = Number.isInteger(grad) ? String(grad) : '−' + y1 + '/' + x2;
        var opts = buildOpts(gradStr, [String(y1 / x2), String(x2 / y1), '−' + x2 + '/' + y1]);
        return {
            q: 'A graph shows a line from (0,' + y1 + ') to (' + x2 + ',0). The gradient is:',
            opts: opts, c: 0,
            e: 'Gradient = (0−' + y1 + ')/(' + x2 + '−0) = −' + y1 + '/' + x2 + ' = ' + gradStr + '.'
        };
    }},
    { question:'Which graph feature tells you how quickly something is changing?', options:['The gradient (slope)','The y-intercept','The x-intercept','The length of the line'], answer:0, explanation:'The gradient (slope) tells you the rate of change — how fast y changes as x increases.' }
  ],

  // ── mi-24-1: Classify Polygons & Angles ───────────────────────────────────
  'mi-24-1': [
    { question:'An angle of 135° is classified as:', options:['Obtuse','Acute','Reflex','Right'], answer:0, explanation:'Obtuse angles are between 90° and 180°. 135° is obtuse.' },
    { question:'A triangle with all sides equal is called:', options:['Equilateral','Isosceles','Scalene','Right-angled'], answer:0, explanation:'Equilateral triangle: all 3 sides equal and all angles = 60°.' },
    { question:'How many sides does a pentagon have?', options:['5','6','4','7'], answer:0, explanation:'Pentagon = 5 sides (penta = five).' },
    { question:'Which angle type is between 180° and 360°?', options:['Reflex','Obtuse','Right','Acute'], answer:0, explanation:'Reflex angles are greater than 180° but less than 360°.' },
    { gen: function() {
        var base = randInt(30, 70);
        var third = 180 - 2 * base;
        // ensure valid triangle
        if (third <= 0 || third >= 180) { base = 50; }
        var ans = 180 - 2 * base;
        var opts = buildOpts(ans + '°', [(ans + 10) + '°', (ans - 10) + '°', (90 - base) + '°']);
        return {
            q: 'An isosceles triangle has a base angle of ' + base + '°. What is the third angle?',
            opts: opts, c: 0,
            e: '180° − ' + base + '° − ' + base + '° = ' + ans + '°.'
        };
    }},
    { question:'What is a quadrilateral with exactly one pair of parallel sides called?', options:['Trapezium','Parallelogram','Rectangle','Rhombus'], answer:0, explanation:'A trapezium has exactly one pair of parallel sides.' },
    { question:'What angle does a protractor measure at the 90° mark?', options:['A right angle','An obtuse angle','An acute angle','A reflex angle'], answer:0, explanation:'90° is exactly a right angle.' },
    { question:'A regular polygon has all sides equal and all angles equal. Which is a regular polygon?', options:['Equilateral triangle','Isosceles triangle','Scalene triangle','Any rectangle'], answer:0, explanation:'An equilateral triangle has all sides and angles equal — it is a regular polygon.' },
    { question:'Which shape has 4 equal sides and 4 right angles?', options:['Square','Rhombus','Rectangle','Parallelogram'], answer:0, explanation:'A square has all four properties: 4 equal sides AND 4 right angles.' },
    { question:'An angle in a triangle is 115°. What type of triangle must it be (based on angles)?', options:['Obtuse-angled triangle','Acute-angled triangle','Right-angled triangle','Equilateral triangle'], answer:0, explanation:'Any triangle containing an obtuse angle is an obtuse-angled triangle.' }
  ],

  // ── mi-24-2: Angles in Triangles & Quadrilaterals ─────────────────────────
  'mi-24-2': [
    { gen: function() {
        var a = randInt(30, 70), b = randInt(30, 70);
        while (a + b >= 180) { b = randInt(20, 60); }
        var ans = 180 - a - b;
        var opts = buildOpts(ans + '°', [(ans + 10) + '°', (ans - 10) + '°', (ans + 5) + '°']);
        return {
            q: 'A triangle has angles ' + a + '° and ' + b + '°. What is the third angle?',
            opts: opts, c: 0,
            e: '180° − ' + a + '° − ' + b + '° = ' + ans + '°.'
        };
    }},
    { question:'What is the sum of angles in a quadrilateral?', options:['360°','180°','270°','540°'], answer:0, explanation:'Angles in any quadrilateral always sum to 360°.' },
    { gen: function() {
        var base = randInt(40, 70);
        var third = 180 - 2 * base;
        if (third <= 0) base = 50;
        var ans = 180 - 2 * base;
        var opts = buildOpts(base + '°, ' + base + '°, ' + ans + '°',
            [base + '°, ' + (base + 10) + '°, ' + (ans - 10) + '°',
             base + '°, ' + base + '°, ' + (ans + 10) + '°',
             base + '°, ' + (base - 5) + '°, ' + (ans + 5) + '°']);
        return {
            q: 'An isosceles triangle has a base angle of ' + base + '°. What are all three angles?',
            opts: opts, c: 0,
            e: 'Two base angles = ' + base + '° each. Third angle = 180° − ' + base + '° − ' + base + '° = ' + ans + '°.'
        };
    }},
    { gen: function() {
        var a = randInt(80, 100), b = randInt(100, 120), c = randInt(60, 90);
        var ans = 360 - a - b - c;
        while (ans <= 0 || ans >= 360) { c = randInt(60, 85); ans = 360 - a - b - c; }
        var opts = buildOpts(ans + '°', [(ans + 10) + '°', (ans - 10) + '°', (ans + 5) + '°']);
        return {
            q: 'Three angles in a quadrilateral are ' + a + '°, ' + b + '° and ' + c + '°. Find the fourth.',
            opts: opts, c: 0,
            e: '360° − ' + a + '° − ' + b + '° − ' + c + '° = ' + ans + '°.'
        };
    }},
    { question:'What is the interior angle sum of a hexagon?', options:['720°','540°','900°','360°'], answer:0, explanation:'(6−2)×180°=4×180°=720°.' },
    { gen: function() {
        var other = randInt(25, 55);
        var ans = 180 - 90 - other;
        var opts = buildOpts(ans + '°', [(ans + 10) + '°', (ans - 10) + '°', '90°']);
        return {
            q: 'A right-angled triangle has one angle of ' + other + '°. What is the third angle?',
            opts: opts, c: 0,
            e: '180° − 90° − ' + other + '° = ' + ans + '°.'
        };
    }},
    { question:'A regular pentagon: what is each interior angle?', options:['108°','72°','90°','120°'], answer:0, explanation:'Sum=(5−2)×180°=540°. Each angle=540°÷5=108°.' },
    { question:'In a parallelogram, one angle is 70°. What are the other angles?', options:['70°, 110°, 110°','90°, 90°, 70°','70°, 70°, 70°','110°, 110°, 70°'], answer:0, explanation:'Opposite angles equal (70°, 70°). Co-interior = 180°: 180°−70°=110°. Angles: 70°, 110°, 70°, 110°.' },
    { gen: function() {
        var total = 6, sum = 180;
        // ratio 1:2:3, but vary the multiplier
        var k = randInt(20, 45);
        // ensure 3 angles sum to 180: 1k+2k+3k = 6k = 180 → k=30
        k = 30;
        var parts = [randInt(1,2), randInt(2,3), randInt(3,5)];
        var partSum = parts[0] + parts[1] + parts[2];
        // ensure clean division
        while (180 % partSum !== 0) { parts[2] = randInt(3, 5); partSum = parts[0] + parts[1] + parts[2]; }
        var unit = 180 / partSum;
        var a1 = parts[0] * unit, a2 = parts[1] * unit, a3 = parts[2] * unit;
        var opts = buildOpts(a1 + '°, ' + a2 + '°, ' + a3 + '°',
            [(a1 + 5) + '°, ' + (a2 + 5) + '°, ' + (a3 - 10) + '°',
             (a1 - 5) + '°, ' + a2 + '°, ' + (a3 + 5) + '°',
             '60°, 60°, 60°']);
        return {
            q: 'The angles of a triangle are in ratio ' + parts[0] + ':' + parts[1] + ':' + parts[2] + '. Find each angle.',
            opts: opts, c: 0,
            e: 'Sum=180°. Parts: ' + parts[0] + '+' + parts[1] + '+' + parts[2] + '=' + partSum + '. Each part=' + unit + '°. Angles: ' + a1 + '°,' + a2 + '°,' + a3 + '°.'
        };
    }},
    { gen: function() {
        var a = randInt(70, 95), b = randInt(70, 95), c = randInt(100, 130);
        var ans = 360 - a - b - c;
        while (ans <= 0) { c = randInt(100, 115); ans = 360 - a - b - c; }
        var opts = buildOpts(ans + '°', [(ans + 10) + '°', (ans + 20) + '°', (ans - 10) + '°']);
        return {
            q: 'A quadrilateral has two angles of ' + a + '° each and one angle of ' + c + '°. Find the fourth.',
            opts: opts, c: 0,
            e: '360° − ' + a + '° − ' + a + '° − ' + c + '° = ' + ans + '°.'
        };
    }}
  ],

  // ── mi-24-3: Parallel Lines & Transversals ─────────────────────────────────
  'mi-24-3': [
    { question:'Corresponding angles are:', options:['Equal','Supplementary (sum to 180°)','Complementary (sum to 90°)','Always obtuse'], answer:0, explanation:'Corresponding angles (F-angles) are equal when lines are parallel.' },
    { question:'Alternate angles between parallel lines are:', options:['Equal','Supplementary','Complementary','Always acute'], answer:0, explanation:'Alternate angles (Z-angles) are equal when the lines are parallel.' },
    { question:'Co-interior angles sum to:', options:['180°','90°','360°','270°'], answer:0, explanation:'Co-interior angles (C-angles) are supplementary — they add up to 180°.' },
    { gen: function() {
        var ang = randInt(40, 80);
        var supp = 180 - ang;
        var opts = buildOpts(ang + '°', [supp + '°', (90 - ang) + '°', '90°']);
        return {
            q: 'A transversal crosses two parallel lines. One angle is ' + ang + '°. Its corresponding angle is:',
            opts: opts, c: 0,
            e: 'Corresponding angles are equal. So the angle is also ' + ang + '°.'
        };
    }},
    { gen: function() {
        var ang = randInt(40, 80);
        var other = 180 - ang;
        var opts = buildOpts(other + '°', [ang + '°', (90 - ang) + '°', (ang - 10) + '°']);
        return {
            q: 'Two parallel lines are cut by a transversal. One co-interior angle is ' + ang + '°. Find the other.',
            opts: opts, c: 0,
            e: 'Co-interior angles sum to 180°. 180° − ' + ang + '° = ' + other + '°.'
        };
    }},
    { question:'Which type of angle relationship is sometimes called Z-angles?', options:['Alternate angles','Corresponding angles','Co-interior angles','Vertically opposite'], answer:0, explanation:'Alternate angles form a Z shape between the parallel lines. They are equal.' },
    { gen: function() {
        var ang = randInt(100, 160);
        var opts = buildOpts(ang + '°', [(180 - ang) + '°', (ang - 40) + '°', '70°']);
        return {
            q: 'Two parallel lines are cut by a transversal at ' + ang + '°. What is the alternate angle?',
            opts: opts, c: 0,
            e: 'Alternate angles are equal: also ' + ang + '°.'
        };
    }},
    { gen: function() {
        var ang = randInt(30, 75);
        var opts = buildOpts(ang + '°', [(180 - ang) + '°', (90 - ang) + '°', '90°']);
        return {
            q: 'Lines a and b are parallel. A transversal makes a ' + ang + '° angle with line a. What angle does it make with line b (corresponding)?',
            opts: opts, c: 0,
            e: 'Corresponding angles are equal: ' + ang + '°.'
        };
    }},
    { gen: function() {
        var ang = randInt(40, 80);
        var partner = 180 - ang;
        var opts = buildOpts(partner + '°', [ang + '°', (90 - ang) + '°', (360 - ang) + '°']);
        return {
            q: 'One angle formed by a transversal is ' + ang + '°. Its co-interior partner is:',
            opts: opts, c: 0,
            e: 'Co-interior: 180° − ' + ang + '° = ' + partner + '°.'
        };
    }},
    { question:'Which statement is TRUE about parallel lines cut by a transversal?', options:['Alternate angles are equal','Co-interior angles are equal','Corresponding angles are supplementary','All angles are equal'], answer:0, explanation:'Alternate angles are equal. Co-interior angles are supplementary. Corresponding angles are equal (not supplementary).' }
  ],

  // ── mi-24-4: Angles, Lines & Circles ──────────────────────────────────────
  'mi-24-4': [
    { gen: function() {
        var ang = randInt(30, 85);
        var vert = ang;
        var opts = buildOpts(vert + '°', [(180 - ang) + '°', (90 - ang) + '°', (360 - ang) + '°']);
        return { q: 'Two lines cross. One angle is ' + ang + '°. What is the vertically opposite angle?',
                 opts: opts, c: 0,
                 e: 'Vertically opposite angles are equal: ' + vert + '°.' };
    }},
    { gen: function() {
        var ang = randInt(40, 80);
        var supp = 180 - ang;
        var opts = buildOpts(supp + '°', [ang + '°', (90 - ang) + '°', (360 - ang) + '°']);
        return { q: 'Two angles on a straight line. One is ' + ang + '°. Find the other.',
                 opts: opts, c: 0,
                 e: 'Supplementary angles sum to 180°. ' + 180 + ' − ' + ang + ' = ' + supp + '°.' };
    }},
    { question:'What is a ray?', options:['A line with one endpoint extending in one direction','A line with two endpoints','A line extending infinitely in both directions','A curved line'], answer:0, explanation:'A ray has one endpoint and extends infinitely in one direction.' },
    { question:'The diameter of a circle is 14 cm. What is the radius?', options:['7 cm','28 cm','14 cm','3.5 cm'], answer:0, explanation:'Radius = diameter ÷ 2 = 14 ÷ 2 = 7 cm.' },
    { gen: function() {
        var ang = randInt(50, 85);
        var adj = 180 - ang;
        var vert = ang;
        var opts = buildOpts(adj + '° and ' + vert + '°', [ang + '° and ' + ang + '°', (90-ang) + '° and ' + (90+ang) + '°', adj + '° and ' + adj + '°']);
        return { q: 'Two lines cross forming a ' + ang + '° angle. What are the other two distinct angle sizes?',
                 opts: opts, c: 0,
                 e: 'Vertical opp = ' + vert + '°. Adjacent (supplementary) = 180−' + ang + ' = ' + adj + '°.' };
    }},
    { question:'Which is NOT a part of a circle?', options:['Vertex','Radius','Chord','Arc'], answer:0, explanation:'A circle does not have a vertex. Vertex belongs to polygons and angles.' },
    { question:'A chord passes through the centre of a circle. What is it called?', options:['A diameter','A radius','A tangent','A secant'], answer:0, explanation:'A chord through the centre is the diameter — the longest possible chord.' },
    { gen: function() {
        var line = randInt(4, 12) * 2;
        var half = line / 2;
        var opts = buildOpts(half, [line, line * 2, half + 1]);
        return { q: 'A line segment is ' + line + ' cm. A bisector cuts it in half. How long is each piece?',
                 opts: opts, c: 0,
                 e: 'Bisect = cut in two equal parts. ' + line + ' ÷ 2 = ' + half + ' cm.' };
    }},
    { gen: function() {
        var ang = randInt(20, 80) * 2;
        var half = ang / 2;
        var opts = buildOpts(half + '°', [ang + '°', (180 - ang) + '°', (ang + half) + '°']);
        return { q: 'An angle of ' + ang + '° is bisected. What is each half?',
                 opts: opts, c: 0,
                 e: 'Bisect = divide into two equal angles. ' + ang + ' ÷ 2 = ' + half + '°.' };
    }},
    { question:'A sector of a circle has a central angle of 90°. What fraction of the circle is it?', options:['¼','½','⅓','⅛'], answer:0, explanation:'90° out of 360° = 90/360 = ¼.' }
  ],

  // ── mi-25-1: Line & Rotational Symmetry ───────────────────────────────────
  'mi-25-1': [
    { question:'How many lines of symmetry does a square have?', options:['4','2','8','0'], answer:0, explanation:'A square has 4 lines of symmetry: 2 through midpoints of sides, 2 through corners.' },
    { question:'What is the order of rotational symmetry of an equilateral triangle?', options:['3','2','1','6'], answer:0, explanation:'An equilateral triangle looks the same at 120°, 240°, and 360° — order 3.' },
    { question:'A shape has rotational symmetry of order 1. What does this mean?', options:['It only looks the same after a full 360° turn','It has 1 line of symmetry','It looks the same after 90°','It has no symmetry at all'], answer:0, explanation:'Order 1 means it only matches itself after a complete revolution — no rotational symmetry in the usual sense.' },
    { question:'How many lines of symmetry does a regular hexagon have?', options:['6','3','2','12'], answer:0, explanation:'A regular hexagon has 6 lines of symmetry.' },
    { question:'Which letter has exactly 1 line of symmetry?', options:['A','Z','S','N'], answer:0, explanation:'A has one vertical line of symmetry. Z, S, N have no line of symmetry.' },
    { question:'A rectangle that is not a square has how many lines of symmetry?', options:['2','4','0','1'], answer:0, explanation:'A non-square rectangle has 2 lines of symmetry (through the midpoints of opposite sides).' },
    { question:'What is the order of rotational symmetry of a parallelogram (not a rectangle)?', options:['2','4','1','0'], answer:0, explanation:'A parallelogram (non-rectangle) looks the same at 180° and 360° — order 2.' },
    { question:'How many lines of symmetry does a circle have?', options:['Infinite','4','0','1'], answer:0, explanation:'A circle has infinite lines of symmetry (any diameter is a line of symmetry).' },
    { question:'A regular octagon has an order of rotational symmetry of:', options:['8','4','2','16'], answer:0, explanation:'A regular octagon matches itself every 45° (360°÷45°=8) — order 8.' },
    { question:'Which shape has exactly 0 lines of symmetry?', options:['Scalene triangle','Equilateral triangle','Isosceles triangle','Square'], answer:0, explanation:'A scalene triangle has no equal sides or angles, so no lines of symmetry.' }
  ],

  // ── mi-25-2: Reflections & Translations ───────────────────────────────────
  'mi-25-2': [
    { gen: function() {
        var x = randInt(1, 8), y = randInt(1, 8);
        var opts = buildOpts('(' + x + ', −' + y + ')', ['(−' + x + ', ' + y + ')', '(−' + x + ', −' + y + ')', '(' + y + ', ' + x + ')']);
        return {
            q: 'Point (' + x + ', ' + y + ') is reflected in the x-axis. What are its new coordinates?',
            opts: opts, c: 0,
            e: 'Reflecting in the x-axis: y changes sign. (' + x + ',' + y + ')→(' + x + ',−' + y + ').'
        };
    }},
    { gen: function() {
        var x = -randInt(1, 7), y = randInt(1, 8);
        var newX = -x;
        var opts = buildOpts('(' + newX + ', ' + y + ')', ['(' + x + ', −' + y + ')', '(' + newX + ', −' + y + ')', '(' + x + ', ' + y + ')']);
        return {
            q: 'Point (' + x + ', ' + y + ') is reflected in the y-axis. What are its new coordinates?',
            opts: opts, c: 0,
            e: 'Reflecting in the y-axis: x changes sign. (' + x + ',' + y + ')→(' + newX + ',' + y + ').'
        };
    }},
    { gen: function() {
        var x1 = randInt(0, 4), y1 = randInt(0, 4), dx = randInt(2, 5), dy = randInt(2, 5);
        var x2 = x1 + dx, y2 = y1 + dy;
        var opts = buildOpts('(' + dx + ', ' + dy + ')', ['(' + dy + ', ' + dx + ')', '(−' + dx + ', −' + dy + ')', '(' + x2 + ', ' + y2 + ')']);
        return {
            q: 'A point translates from (' + x1 + ', ' + y1 + ') to (' + x2 + ', ' + y2 + '). What is the translation vector?',
            opts: opts, c: 0,
            e: 'x: ' + x2 + '−' + x1 + '=' + dx + '. y: ' + y2 + '−' + y1 + '=' + dy + '. Translation vector = (' + dx + ', ' + dy + ').'
        };
    }},
    { gen: function() {
        var x = randInt(1, 6), y = -randInt(1, 5), dx = -randInt(1, 4), dy = randInt(3, 7);
        var nx = x + dx, ny = y + dy;
        var opts = buildOpts('(' + nx + ', ' + ny + ')', ['(' + (x - dx) + ', ' + (y - dy) + ')', '(' + nx + ', ' + (ny - dy) + ')', '(' + (x - dx) + ', ' + ny + ')']);
        return {
            q: 'Translate the point (' + x + ', ' + y + ') by the vector (' + dx + ', ' + dy + '). New coordinates:',
            opts: opts, c: 0,
            e: 'x: ' + x + '+(' + dx + ')=' + nx + '. y: ' + y + '+' + dy + '=' + ny + '. New point: (' + nx + ', ' + ny + ').'
        };
    }},
    { question:'A shape is reflected in the line y = 0 (the x-axis). What changes?', options:['y-coordinates change sign','x-coordinates change sign','Both change sign','Neither changes'], answer:0, explanation:'The x-axis is y=0. Reflecting here: y changes sign, x stays the same.' },
    { question:'Which transformation preserves the shape and size of a figure?', options:['Both reflection and translation','Only reflection','Only translation','Neither'], answer:0, explanation:'Both reflections and translations preserve shape and size (they are isometries).' },
    { gen: function() {
        var dy = -randInt(2, 5);
        var x1 = 1, y1 = 1, x2 = 3, y2 = 1, x3 = 2, y3 = 4;
        var nx1 = x1, ny1 = y1 + dy, nx2 = x2, ny2 = y2 + dy, nx3 = x3, ny3 = y3 + dy;
        var opts = buildOpts(
            '(' + nx1 + ',' + ny1 + '),(' + nx2 + ',' + ny2 + '),(' + nx3 + ',' + ny3 + ')',
            ['(' + x1 + ',' + (y1 - dy) + '),(' + x2 + ',' + (y2 - dy) + '),(' + x3 + ',' + (y3 - dy) + ')',
             '(' + (-x1) + ',' + y1 + '),(' + (-x2) + ',' + y2 + '),(' + (-x3) + ',' + y3 + ')',
             '(' + (x1 + 3) + ',' + y1 + '),(' + (x2 + 3) + ',' + y2 + '),(' + (x3 + 3) + ',' + y3 + ')']
        );
        return {
            q: 'A triangle at (' + x1 + ',' + y1 + '), (' + x2 + ',' + y2 + '), (' + x3 + ',' + y3 + ') is translated by (0, ' + dy + '). New vertices:',
            opts: opts, c: 0,
            e: 'Add 0 to x, add ' + dy + ' to y. (' + x1 + ',' + y1 + '+' + dy + ')=(' + nx1 + ',' + ny1 + '). (' + x2 + ',' + ny2 + '). (' + x3 + ',' + ny3 + ').'
        };
    }},
    { gen: function() {
        var x = randInt(2, 8), y = randInt(1, 6);
        var opts = buildOpts('The x-axis', ['The y-axis', 'y = x', 'y = 1']);
        return {
            q: 'Point A at (' + x + ', ' + y + ') reflects onto point A′ at (' + x + ', −' + y + '). The mirror line is:',
            opts: opts, c: 0,
            e: 'Only the y-coordinate changed sign. Mirror line is y=0 (the x-axis).'
        };
    }},
    { gen: function() {
        var ax = -randInt(2, 6), ay = randInt(1, 5), dx = randInt(2, 6), dy = randInt(1, 5);
        var nx = ax + dx, ny = ay + dy;
        var opts = buildOpts('(' + nx + ', ' + ny + ')', ['(' + (ax - dx) + ', ' + (ay - dy) + ')', '(' + nx + ', ' + (ay - dy) + ')', '(' + (ax + dx + 2) + ', ' + ny + ')']);
        return {
            q: 'Shape ABCD is translated right ' + dx + ' and up ' + dy + '. If A was at (' + ax + ', ' + ay + '), where is A′?',
            opts: opts, c: 0,
            e: 'x: ' + ax + '+' + dx + '=' + nx + '. y: ' + ay + '+' + dy + '=' + ny + '. A′ = (' + nx + ', ' + ny + ').'
        };
    }},
    { question:'What stays the same during a reflection?', options:['Shape and size (but not orientation)','Position','Orientation','Nothing'], answer:0, explanation:'Reflections preserve shape and size but change orientation (the image is a mirror image).' }
  ],

  // ── mi-25-3: Congruent Figures ─────────────────────────────────────────────
  'mi-25-3': [
    { question:'Two shapes are congruent. What must be true?', options:['Equal sizes and equal angles','Only equal angles','Only equal sides','Same colour'], answer:0, explanation:'Congruent shapes have all corresponding sides equal AND all corresponding angles equal.' },
    { question:'Triangle ABC ≅ Triangle XYZ. Which angle corresponds to angle B?', options:['Angle Y','Angle X','Angle Z','Cannot tell'], answer:0, explanation:'The order of letters matches: A↔X, B↔Y, C↔Z. So angle B corresponds to angle Y.' },
    { question:'Which transformation produces a congruent image?', options:['Reflection','Enlargement','Reduction','Stretching'], answer:0, explanation:'Reflections preserve size and shape — the image is congruent to the original.' },
    { gen: function() {
        var len = randInt(3, 12);
        var opts = buildOpts(len + ' cm', ['Cannot tell', 'Depends on angles', '0 cm']);
        return {
            q: 'Triangle PQR ≅ Triangle STU. PQ = ' + len + ' cm. What is the length of ST?',
            opts: opts, c: 0,
            e: 'Corresponding sides are equal in congruent triangles. PQ ↔ ST, so ST = ' + len + ' cm.'
        };
    }},
    { question:'Two triangles are congruent. One has an angle of 70°. Does the other also have a 70° angle?', options:['Yes — corresponding angles are equal','No — only sides are equal','Not necessarily','Only if they are equilateral'], answer:0, explanation:'Congruent shapes have all corresponding sides AND angles equal.' },
    { question:'Are all squares congruent to each other?', options:['No — squares can have different sizes','Yes — all squares are congruent','Yes — they all have right angles','Cannot determine'], answer:0, explanation:'Squares have the same shape but can vary in size. Only squares of the same side length are congruent.' },
    { gen: function() {
        var ang = randInt(50, 120);
        var supp = 180 - ang;
        var opts = buildOpts(ang + '°', [supp + '°', 'Cannot tell', (360 - ang) + '°']);
        return {
            q: 'Quadrilateral ABCD ≅ Quadrilateral EFGH. Angle A = ' + ang + '°. What is angle E?',
            opts: opts, c: 0,
            e: 'A corresponds to E. Since the shapes are congruent, angle E = ' + ang + '°.'
        };
    }},
    { question:'A shape is reflected to create its image. Are the original and image congruent?', options:['Yes','No','Only if the shape is symmetric','Only for triangles'], answer:0, explanation:'Reflections preserve shape and size — the image is always congruent to the original.' },
    { question:'What is the minimum information needed to confirm two triangles are congruent?', options:['3 equal sides (SSS) or a combination like SAS or ASA','Only 2 equal sides','Only equal angles','Just 1 equal side'], answer:0, explanation:'Three sides (SSS), two sides and included angle (SAS), or two angles and a side (ASA/AAS) all prove congruence.' },
    { gen: function() {
        var mn = randInt(5, 12), no = randInt(3, 8), mo = randInt(6, 14);
        // ensure valid triangle inequality loosely
        var opts = buildOpts(mn + ' cm', [no + ' cm', mo + ' cm', 'Cannot tell']);
        return {
            q: 'Triangle MNO ≅ Triangle PQR. MN = ' + mn + ' cm, NO = ' + no + ' cm, MO = ' + mo + ' cm. What is PQ?',
            opts: opts, c: 0,
            e: 'M↔P, N↔Q, O↔R. So MN ↔ PQ. PQ = MN = ' + mn + ' cm.'
        };
    }}
  ],

  // ── mi-24-5: Compass Constructions ────────────────────────────────────────
  'mi-24-5': [
    // Easy (Q1–3)
    { question:'What does a perpendicular bisector do to a line segment?', options:['Cuts it in half at 90°','Cuts it in half at 45°','Divides it into three equal parts','Draws a parallel line'], answer:0, explanation:'A perpendicular bisector divides a line segment into two equal halves at a right angle (90°).' },
    { question:'What equipment do you need for a compass construction?', options:['A pair of compasses and a straight edge','A protractor and a ruler','A set square and a pencil','A calculator and a ruler'], answer:0, explanation:'Compass constructions use only a pair of compasses and a straight edge (ruler). No protractor is needed.' },
    { question:'What is the shortest distance from a point to a line?', options:['The perpendicular distance','The diagonal distance','A line to the nearest endpoint','It depends on the angle'], answer:0, explanation:'The shortest distance from a point to a line is always the perpendicular (90°) distance.' },
    // Medium (Q4–6)
    { question:'When constructing a perpendicular bisector, why must the compass opening be more than half the line segment?', options:['So the arcs from each end can cross each other','To make the line look neat','Because the rules say so','To create a 45° angle'], answer:0, explanation:'If the opening is less than half, the arcs from each endpoint will not reach each other and cannot cross.' },
    { question:'An angle bisector divides a 70° angle. What are the two resulting angles?', options:['35° and 35°','40° and 30°','70° and 70°','45° and 25°'], answer:0, explanation:'An angle bisector splits the angle into two equal halves: 70° ÷ 2 = 35° each.' },
    { question:'Every point on a perpendicular bisector of AB is:', options:['Equidistant from A and B','Closer to A than B','Closer to B than A','On the line AB'], answer:0, explanation:'The perpendicular bisector is the locus of all points equidistant from A and B.' },
    // Greater Depth (Q7–8)
    { question:'Two mobile phone masts are 10 km apart. The boundary where signal strength is equal from both masts lies on:', options:['The perpendicular bisector of the line joining them','A circle around the first mast','A line parallel to the line joining them','A diagonal line'], answer:0, explanation:'Equal signal strength means equal distance from both masts — this is the perpendicular bisector.' },
    { question:'Why should you NOT rub out your construction arcs in an exam?', options:['They show your method and are required for full marks','They make the diagram look better','They help you check your protractor','They are not important'], answer:0, explanation:'Construction arcs are evidence of your method. Without them, an examiner cannot verify you used the correct construction technique.' }
  ],

  // ── mi-25-4: Rotations ────────────────────────────────────────────────────
  'mi-25-4': [
    // Easy (Q1–3)
    { question:'What three things do you need to describe a rotation?', options:['Centre, angle and direction','Centre, angle and size','Distance, angle and direction','Centre, scale factor and direction'], answer:0, explanation:'A full description of a rotation requires: the centre of rotation, the angle (90°, 180°, 270°) and the direction (clockwise or anticlockwise).' },
    { question:'A shape is rotated 180° about the origin. What happens to the point (3, 2)?', options:['It moves to (−3, −2)','It moves to (3, −2)','It moves to (−3, 2)','It stays at (3, 2)'], answer:0, explanation:'180° rotation about the origin: (x, y) → (−x, −y). So (3, 2) → (−3, −2).' },
    { question:'Is a 90° clockwise rotation the same as which anticlockwise rotation?', options:['270° anticlockwise','90° anticlockwise','180° anticlockwise','360° anticlockwise'], answer:0, explanation:'90° clockwise = 270° anticlockwise. They both end up in the same position.' },
    // Medium (Q4–6)
    { question:'The point (4, 1) is rotated 90° anticlockwise about the origin. What are the new coordinates?', options:['(−1, 4)','(1, −4)','(−4, −1)','(4, −1)'], answer:0, explanation:'90° anticlockwise about origin: (x, y) → (−y, x). So (4, 1) → (−1, 4).' },
    { question:'A triangle is rotated 90° clockwise about the origin. The point (2, 5) becomes:', options:['(5, −2)','(−5, 2)','(−2, −5)','(2, −5)'], answer:0, explanation:'90° clockwise about origin: (x, y) → (y, −x). So (2, 5) → (5, −2).' },
    { question:'After a 180° rotation, do you need to state the direction?', options:['No — 180° CW and ACW give the same result','Yes — it changes the answer','Only for some shapes','Only if the centre is the origin'], answer:0, explanation:'180° clockwise and 180° anticlockwise give exactly the same result, so direction is not needed for 180°.' },
    // Greater Depth (Q7–8)
    { question:'A shape at (1, 3) is rotated 90° clockwise about (1, 1). What are the new coordinates?', options:['(3, 1)','(−1, 1)','(1, −1)','(−1, 3)'], answer:0, explanation:'Translate so centre is origin: (1,3)→(0,2). Apply 90° CW: (0,2)→(2,0). Translate back: (2,0)+(1,1)=(3,1).' },
    { question:'A point P is rotated 90° clockwise about the origin, then 90° clockwise again. This is equivalent to:', options:['A single 180° rotation about the origin','A 90° anticlockwise rotation','A translation','A reflection in the x-axis'], answer:0, explanation:'Two consecutive 90° clockwise rotations = 90° + 90° = 180° rotation about the same centre.' }
  ]

});
