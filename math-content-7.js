// math-content-7.js — Flashcards & Questions for Topics 26-28
// Topic 26: 3D Figures | Topic 27: Area, Perimeter & Volume
// Topic 28: Financial Literacy

// ─── TOPIC 26: 3D FIGURES ────────────────────────────────────────────────────

FLASHCARDS.push(
  // mi-26-1: 3D Shape Properties
  { islandId:'mi-26-1', front:'How many faces, edges and vertices does a cube have?', back:'Cube: 6 faces, 12 edges, 8 vertices. Check with Euler: F+V=E+2 → 6+8=12+2 ✓' },
  { islandId:'mi-26-1', front:'What is Euler\'s formula for 3D polyhedra?', back:'F + V = E + 2, where F = faces, V = vertices, E = edges.' },
  { islandId:'mi-26-1', front:'What is the difference between a prism and a pyramid?', back:'A prism has two identical parallel bases connected by rectangular faces. A pyramid has one base and triangular faces meeting at an apex.' },

  // mi-26-2: Nets of 3D Figures
  { islandId:'mi-26-2', front:'What is a net of a 3D shape?', back:'A net is a 2D flat pattern that can be folded up to form a 3D shape, showing all the faces laid out flat.' },
  { islandId:'mi-26-2', front:'How many squares appear in the net of a cube?', back:'A cube has 6 faces, so its net contains exactly 6 squares arranged in a cross or T-shape pattern.' },
  { islandId:'mi-26-2', front:'How do you check if a net is valid for a given 3D shape?', back:'Count the faces — they must match. Then mentally fold the net and check that opposite faces align correctly without overlapping.' },

  // mi-26-3: Front, Side & Top Views
  { islandId:'mi-26-3', front:'What is the "plan view" of a 3D shape?', back:'The plan view (top view) is the 2D view you see when looking directly down at the shape from above.' },
  { islandId:'mi-26-3', front:'What does the front elevation of a 3D shape show?', back:'The front elevation is the 2D view of a 3D shape when looking directly at it from the front.' },
  { islandId:'mi-26-3', front:'A cube viewed from the front, side, and top all look the same. What shape do you see in each view?', back:'A square. All three views (front, side, top) of a cube are squares of the same size.' }
);

// ─── TOPIC 27: AREA, PERIMETER & VOLUME ──────────────────────────────────────

FLASHCARDS.push(
  // mi-27-1: Perimeter & Area of Polygons
  { islandId:'mi-27-1', front:'What is the formula for the area of a triangle?', back:'Area = ½ × base × height. The height must be perpendicular to the base.' },
  { islandId:'mi-27-1', front:'A rectangle is 8 cm long and 5 cm wide. Find its perimeter and area.', back:'Perimeter = 2(8+5) = 26 cm. Area = 8×5 = 40 cm².' },
  { islandId:'mi-27-1', front:'What is the area formula for a parallelogram?', back:'Area = base × perpendicular height. (Not the slant side — the vertical height.)' },

  // mi-27-2: Area of Trapeziums & Compound Figures
  { islandId:'mi-27-2', front:'What is the formula for the area of a trapezium?', back:'Area = ½(a + b)h, where a and b are the two parallel sides and h is the perpendicular height.' },
  { islandId:'mi-27-2', front:'How do you find the area of a compound figure?', back:'Split it into simpler shapes (rectangles, triangles, etc.), find the area of each, then add them together.' },
  { islandId:'mi-27-2', front:'A trapezium has parallel sides of 6 cm and 10 cm and height 4 cm. Find its area.', back:'Area = ½(6+10)×4 = ½×16×4 = 32 cm².' },

  // mi-27-3: Volume of Cubes & Cuboids
  { islandId:'mi-27-3', front:'What is the formula for the volume of a cuboid?', back:'Volume = length × width × height (V = l × w × h). Measured in cubic units (cm³, m³).' },
  { islandId:'mi-27-3', front:'A cuboid is 5 cm × 4 cm × 3 cm. What is its volume?', back:'V = 5×4×3 = 60 cm³.' },
  { islandId:'mi-27-3', front:'How many cm³ are in 1 litre?', back:'1 litre = 1,000 cm³. So 2.5 litres = 2,500 cm³.' }
);

// ─── TOPIC 28: FINANCIAL LITERACY ────────────────────────────────────────────

FLASHCARDS.push(
  // mi-28-1: Balance a Budget
  { islandId:'mi-28-1', front:'What is a budget surplus?', back:'A surplus occurs when income exceeds expenditure — you have money left over.' },
  { islandId:'mi-28-1', front:'What is the difference between income and expenditure?', back:'Income is money received (wages, allowance). Expenditure is money spent (rent, food, bills). Budget balance = income − expenditure.' },
  { islandId:'mi-28-1', front:'A monthly income is £1,400. Expenses total £1,650. What is the budget position?', back:'Budget = £1,400−£1,650 = −£250. This is a deficit of £250 — spending exceeds income.' },

  // mi-28-2: Debit & Credit Cards
  { islandId:'mi-28-2', front:'What is the main difference between a debit card and a credit card?', back:'A debit card takes money directly from your bank account. A credit card lets you borrow money that must be repaid later, often with interest.' },
  { islandId:'mi-28-2', front:'What is simple interest?', back:'Simple interest = Principal × Rate × Time (I = PRT). E.g. £200 at 5% for 2 years: I = 200×0.05×2 = £20.' },
  { islandId:'mi-28-2', front:'Why is it risky to only pay the minimum amount on a credit card?', back:'Interest is charged on the remaining balance each month, causing the total debt to grow and costing much more than the original purchase.' },

  // mi-28-3: Adjust a Budget
  { islandId:'mi-28-3', front:'What is the difference between essential and non-essential spending?', back:'Essential: rent, food, utilities — things you need to survive. Non-essential: entertainment, eating out, subscriptions — wants rather than needs.' },
  { islandId:'mi-28-3', front:'How do you adjust a budget to eliminate a deficit?', back:'Either increase income or reduce expenditure (especially non-essential spending) until income ≥ expenditure.' },
  { islandId:'mi-28-3', front:'A person wants to save £600 in 6 months. How much must they save each month?', back:'£600 ÷ 6 = £100 per month.' }
);

// ─── QUESTIONS ────────────────────────────────────────────────────────────────

Object.assign(QUESTIONS, {

  // ── mi-26-1: 3D Shape Properties ──────────────────────────────────────────
  'mi-26-1': [
    { question:'How many faces does a cube have?', options:['6','8','12','4'], answer:0, explanation:'A cube has 6 faces (each face is a square).' },
    { question:'How many edges does a triangular prism have?', options:['9','6','12','8'], answer:0, explanation:'A triangular prism has 2 triangular faces + 3 rectangular faces = 5 faces, 6 vertices, 9 edges. Check: F+V=E+2 → 5+6=9+2 ✓' },
    { question:'What shape are the faces of a pyramid (other than the base)?', options:['Triangles','Squares','Rectangles','Pentagons'], answer:0, explanation:'All lateral (side) faces of a pyramid are triangles that meet at the apex.' },
    { question:'Apply Euler\'s formula: a shape has 6 faces and 8 vertices. How many edges?', options:['12','10','14','8'], answer:0, explanation:'F+V=E+2 → 6+8=E+2 → E=12.' },
    { question:'Which 3D shape has exactly 5 faces?', options:['Triangular prism or square pyramid','Cube','Cuboid','Cylinder'], answer:0, explanation:'Both a triangular prism (2 triangles + 3 rectangles) and a square pyramid (1 square + 4 triangles) have 5 faces.' },
    { question:'What is the difference between a prism and a cylinder?', options:['A cylinder has circular bases; a prism has polygonal bases','They are the same','A prism is always a cube','A cylinder has flat sides'], answer:0, explanation:'A prism has two parallel polygonal bases. A cylinder has two circular bases — it is not technically a prism.' },
    { question:'A rectangular prism (cuboid) has how many edges?', options:['12','8','6','16'], answer:0, explanation:'A cuboid has 12 edges. F+V=E+2 → 6+8=E+2 → E=12.' },
    { question:'Which shape has 4 triangular faces and 1 square base?', options:['Square pyramid','Triangular pyramid','Cube','Pentagonal prism'], answer:0, explanation:'A square pyramid has 1 square base and 4 triangular faces meeting at the apex.' },
    { question:'How many vertices does a triangular pyramid (tetrahedron) have?', options:['4','6','8','3'], answer:0, explanation:'A tetrahedron has 4 faces (all triangles), 6 edges, 4 vertices. F+V=E+2 → 4+4=6+2 ✓' },
    { question:'Which statement about prisms is always true?', options:['The two bases are identical parallel polygons','All faces are rectangles','They have a pointed top','They have exactly 6 faces'], answer:0, explanation:'A prism always has two identical parallel polygonal bases connected by rectangular faces.' }
  ],

  // ── mi-26-2: Nets of 3D Figures ────────────────────────────────────────────
  'mi-26-2': [
    { question:'How many faces does the net of a cube have?', options:['6','8','4','12'], answer:0, explanation:'A cube has 6 faces, so its net is made of 6 squares.' },
    { question:'A net has two circles and one rectangle. Which 3D shape does it form?', options:['Cylinder','Cone','Sphere','Prism'], answer:0, explanation:'A cylinder\'s net consists of two circular ends and one rectangular curved surface.' },
    { question:'Which shape\'s net includes 4 triangles and 1 rectangle?', options:['None — this is not a valid net description for a common shape','Triangular prism','Square pyramid','Cuboid'], answer:0, explanation:'4 triangles + 1 square base = square pyramid. But 1 rectangle is incorrect for a pyramid. None of these standard shapes match exactly 4 triangles + 1 rectangle — a triangular prism net has 2 triangles + 3 rectangles.' },
    { question:'The net of a triangular prism contains:', options:['2 triangles and 3 rectangles','3 triangles and 2 rectangles','1 triangle and 4 rectangles','4 triangles and 1 square'], answer:0, explanation:'A triangular prism has 2 triangular bases and 3 rectangular lateral faces.' },
    { question:'A net contains exactly 6 squares of equal size. Which shape does it fold into?', options:['Cube','Cuboid','Square pyramid','Triangular prism'], answer:0, explanation:'6 equal squares fold into a cube.' },
    { question:'How many rectangles are in the net of a square pyramid (with a square base)?', options:['0 — it has 4 triangles and 1 square','4 rectangles','5 rectangles','1 rectangle and 4 triangles'], answer:0, explanation:'A square pyramid has 4 triangular faces + 1 square base — no rectangles.' },
    { question:'Which of these could NOT be the net of a cube?', options:['Five squares in a row with one attached to the side','A cross shape of 6 squares','An L-shape of 6 squares','A T-shape of 6 squares'], answer:0, explanation:'Five squares in a straight row with one on the side: opposite faces would overlap when folded — this is generally not a valid cube net.' },
    { question:'A net has 5 faces: 1 rectangle base, 2 triangular ends, and 2 more rectangles. What shape does it form?', options:['Triangular prism','Cube','Square pyramid','Cylinder'], answer:0, explanation:'2 triangular ends + 3 rectangular faces = triangular prism (5 faces).' },
    { question:'Why is a net useful in mathematics?', options:['It shows all faces of a 3D shape laid flat, helping calculate surface area','It gives the volume of the shape','It shows the weight of the shape','It displays the interior of the shape'], answer:0, explanation:'Nets show all faces of a 3D shape flat, making it easy to calculate surface area or understand the shape\'s structure.' },
    { gen: function() {
        var s = randInt(2, 9);
        var faceArea = s * s;
        var total = 6 * faceArea;
        var opts = buildOpts(total + ' cm²', [faceArea + ' cm²', (4 * faceArea) + ' cm²', (s * s * s) + ' cm³']);
        return {
            q: 'A cube has side length ' + s + ' cm. What is the total area of its net?',
            opts: opts, c: 0,
            e: '6 square faces, each ' + s + '×' + s + '=' + faceArea + ' cm². Total = 6×' + faceArea + '=' + total + ' cm².'
        };
    }}
  ],

  // ── mi-26-3: Front, Side & Top Views ───────────────────────────────────────
  'mi-26-3': [
    { question:'The plan view of a 3D shape is the view from:', options:['Above (looking down)','The front','The side','Below'], answer:0, explanation:'The plan view (top view) is the 2D view seen when looking directly downward at the shape.' },
    { question:'What shape is the front elevation of a cube?', options:['Square','Triangle','Circle','Rectangle'], answer:0, explanation:'Looking at a cube from the front, you see a square.' },
    { question:'A pyramid with a square base is viewed from the top. What do you see?', options:['A square with diagonals (apex visible as a point)','A triangle','A circle','Just a square'], answer:0, explanation:'Looking down at a square pyramid from above, you see the square base with lines to the apex in the centre.' },
    { question:'Which view of a cylinder looks like a circle?', options:['Top view (plan)','Front view','Side view','All views'], answer:0, explanation:'Looking down at a cylinder from above gives a circular view.' },
    { question:'The side elevation of a triangular prism (lying on its side) is:', options:['A rectangle','A triangle','A circle','A pentagon'], answer:0, explanation:'The side view of a triangular prism lying flat is a rectangle.' },
    { question:'A 3D shape has a square top view, square front view, and square side view. What shape is it?', options:['Cube','Cylinder','Sphere','Pyramid'], answer:0, explanation:'If all three views are squares, the shape is most likely a cube.' },
    { question:'The front elevation of a cone is:', options:['An isosceles triangle','A circle','A rectangle','A square'], answer:0, explanation:'Looking at a cone from the front, you see a triangle (the two slanting sides and the circular base appear as a triangular outline).' },
    { question:'Why are 2D views useful for describing 3D shapes?', options:['They allow architects/engineers to communicate dimensions without building a model','They are always more accurate than 3D','They remove the need for measurements','They show colour'], answer:0, explanation:'Architects and engineers use front, side and top views (elevations and plans) to communicate 3D designs on 2D paper.' },
    { question:'A shape has a rectangular front view and a triangular side view. It could be:', options:['Triangular prism','Cube','Cylinder','Sphere'], answer:0, explanation:'A triangular prism viewed from the front shows a rectangle; from the side (end) it shows a triangle.' },
    { gen: function() {
        var r = randInt(2, 8);
        var area = Math.round(Math.PI * r * r * 10) / 10;
        var opts = buildOpts(r + '² π cm²', [(r * 2) + 'π cm²', r + 'π cm²', (r * r * 2) + 'π cm²']);
        return {
            q: 'The top view of a cylinder with a circular base of radius ' + r + ' cm has what area?',
            opts: opts, c: 0,
            e: 'Area of circle = π r² = π(' + r + ')² = ' + r + '²π = ' + r * r + 'π cm².'
        };
    }}
  ],

  // ── mi-27-1: Perimeter & Area of Polygons ─────────────────────────────────
  'mi-27-1': [
    { gen: function() {
        var l = randInt(5, 15), w = randInt(3, 10);
        var area = l * w;
        var opts = buildOpts(area + ' cm²', [(2*(l+w)) + ' cm²', (l+w) + ' cm²', (area * 2) + ' cm²']);
        return {
            q: 'A rectangle is ' + l + ' cm long and ' + w + ' cm wide. What is its area?',
            opts: opts, c: 0,
            e: 'Area = ' + l + ' × ' + w + ' = ' + area + ' cm².'
        };
    }},
    { gen: function() {
        var l = randInt(4, 14), w = randInt(2, 9);
        var perim = 2 * (l + w);
        var opts = buildOpts(perim + ' cm', [(l + w) + ' cm', (l * w) + ' cm', (2 * l + w) + ' cm']);
        return {
            q: 'A rectangle is ' + l + ' cm by ' + w + ' cm. What is its perimeter?',
            opts: opts, c: 0,
            e: 'Perimeter = 2(' + l + '+' + w + ') = 2×' + (l+w) + ' = ' + perim + ' cm.'
        };
    }},
    { gen: function() {
        var b = randInt(4, 14), h = randInt(3, 10);
        var area = (b * h) / 2;
        var opts = buildOpts(area + ' cm²', [(b * h) + ' cm²', ((b + h) * 2) + ' cm²', (b * h / 4) + ' cm²']);
        return {
            q: 'A triangle has a base of ' + b + ' cm and height of ' + h + ' cm. What is its area?',
            opts: opts, c: 0,
            e: 'Area = ½ × ' + b + ' × ' + h + ' = ' + area + ' cm².'
        };
    }},
    { gen: function() {
        var side = randInt(3, 12);
        var perim = side * 4;
        var area = side * side;
        var opts = buildOpts(area + ' cm²', [(perim) + ' cm²', (side * 2) + ' cm²', (area * 4) + ' cm²']);
        return {
            q: 'A square has a perimeter of ' + perim + ' cm. What is its area?',
            opts: opts, c: 0,
            e: 'Side = ' + perim + ' ÷ 4 = ' + side + ' cm. Area = ' + side + '² = ' + area + ' cm².'
        };
    }},
    { gen: function() {
        var b = randInt(4, 12), h = randInt(3, 9);
        var area = b * h;
        var opts = buildOpts(area + ' cm²', [(b * h / 2) + ' cm²', (b + h) * 2 + ' cm²', (area * 2) + ' cm²']);
        return {
            q: 'A parallelogram has base ' + b + ' cm and perpendicular height ' + h + ' cm. Its area is:',
            opts: opts, c: 0,
            e: 'Area = base × height = ' + b + ' × ' + h + ' = ' + area + ' cm².'
        };
    }},
    { gen: function() {
        var h = randInt(3, 10), b = randInt(4, 14);
        var area = (b * h) / 2;
        var opts = buildOpts(h + ' cm', [(h / 2) + ' cm', (h * 2) + ' cm', (area) + ' cm']);
        return {
            q: 'A triangle has area ' + area + ' cm² and base ' + b + ' cm. What is its height?',
            opts: opts, c: 0,
            e: 'Area = ½bh → ' + area + ' = ½ × ' + b + ' × h → h = ' + h + ' cm.'
        };
    }},
    { gen: function() {
        var l = pickFrom([20, 25, 30, 35, 40, 45, 50]);
        var w = pickFrom([10, 12, 15, 18, 20, 24]);
        var area = l * w;
        var opts = buildOpts(area + ' m²', [(2*(l+w)) + ' m²', (l+w) + ' m²', (area / 2) + ' m²']);
        return {
            q: 'A field is ' + l + ' m long and ' + w + ' m wide. What area of grass seed is needed to cover it?',
            opts: opts, c: 0,
            e: 'Area = ' + l + ' × ' + w + ' = ' + area + ' m².'
        };
    }},
    { gen: function() {
        var triArea = randInt(2, 8);
        var n = 6;
        var total = n * triArea;
        var opts = buildOpts(total + ' cm²', [(triArea) + ' cm²', (total / 2) + ' cm²', (total * 2) + ' cm²']);
        return {
            q: 'A regular hexagon is divided into 6 equilateral triangles, each with area ' + triArea + ' cm². What is the hexagon\'s area?',
            opts: opts, c: 0,
            e: '6 triangles × ' + triArea + ' cm² = ' + total + ' cm².'
        };
    }},
    { question:'A square and a rectangle have the same perimeter of 40 cm. The rectangle is 12 cm × 8 cm. Which has the greater area?', options:['Square (100 cm²)','Rectangle (96 cm²)','Same area','Cannot tell'], answer:0, explanation:'Square side = 10 cm, area = 100 cm². Rectangle area = 96 cm². Square has greater area.' },
    { gen: function() {
        var b = pickFrom([10, 12, 14, 16, 18, 20]);
        var h = randInt(3, 10);
        var area = (b * h) / 2;
        var opts = buildOpts(h + ' m', [(h / 2) + ' m', (h * 2) + ' m', (b / 2) + ' m']);
        return {
            q: 'A triangular garden plot has base ' + b + ' m and area ' + area + ' m². What is the height?',
            opts: opts, c: 0,
            e: 'Area = ½bh → ' + area + ' = ½ × ' + b + ' × h → ' + area + ' = ' + (b/2) + 'h → h = ' + h + ' m.'
        };
    }}
  ],

  // ── mi-27-2: Area of Trapeziums & Compound Figures ─────────────────────────
  'mi-27-2': [
    { gen: function() {
        var a = randInt(3, 8), b = randInt(a + 2, 14), h = randInt(2, 8);
        var area = 0.5 * (a + b) * h;
        var opts = buildOpts(area + ' cm²', [(a + b) * h + ' cm²', (a * b) + ' cm²', (0.5 * a * b) + ' cm²']);
        return {
            q: 'A trapezium has parallel sides of ' + a + ' cm and ' + b + ' cm, and height ' + h + ' cm. What is its area?',
            opts: opts, c: 0,
            e: 'Area = ½(' + a + '+' + b + ')×' + h + ' = ½×' + (a+b) + '×' + h + ' = ' + area + ' cm².'
        };
    }},
    { question:'Which formula gives the area of a trapezium?', options:['½(a+b)h','abh','(a+b)h','½ab'], answer:0, explanation:'Area of trapezium = ½(a+b)h, where a and b are parallel sides and h is the height.' },
    { gen: function() {
        var rw = randInt(4, 9), rh = randInt(3, 7);
        var tb = rw, th = randInt(2, 5);
        var rectArea = rw * rh;
        var triArea = 0.5 * tb * th;
        var total = rectArea + triArea;
        var opts = buildOpts(total + ' cm²', [rectArea + ' cm²', (rectArea + tb * th) + ' cm²', (triArea + rectArea * 2) + ' cm²']);
        return {
            q: 'A compound shape is made of a rectangle (' + rw + '×' + rh + ' cm) and a triangle (base ' + tb + ' cm, height ' + th + ' cm). Total area:',
            opts: opts, c: 0,
            e: 'Rectangle: ' + rw + '×' + rh + '=' + rectArea + ' cm². Triangle: ½×' + tb + '×' + th + '=' + triArea + ' cm². Total=' + total + ' cm².'
        };
    }},
    { gen: function() {
        var a = randInt(3, 7), b = randInt(a + 2, 12), h = randInt(3, 9);
        var area = 0.5 * (a + b) * h;
        var opts = buildOpts(h + ' cm', [(area / (a + b)) + ' cm', (h * 2) + ' cm', (area / b) + ' cm']);
        return {
            q: 'A trapezium has area ' + area + ' cm², parallel sides of ' + a + ' cm and ' + b + ' cm. Find the height.',
            opts: opts, c: 0,
            e: area + ' = ½(' + a + '+' + b + ')×h → ' + area + ' = ' + ((a+b)/2) + 'h → h = ' + h + ' cm.'
        };
    }},
    { gen: function() {
        var l1 = randInt(4, 8), w1 = randInt(3, 6), l2 = randInt(2, 4), w2 = randInt(2, 3);
        var area = l1 * w1 + l2 * w2;
        var opts = buildOpts(area + ' m²', [(l1 * w1) + ' m²', ((l1 + l2) * (w1 + w2)) + ' m²', (area + l2 * w2) + ' m²']);
        return {
            q: 'An L-shaped room consists of two rectangles: ' + l1 + '×' + w1 + ' m and ' + l2 + '×' + w2 + ' m. What is the total floor area?',
            opts: opts, c: 0,
            e: l1 + '×' + w1 + '=' + (l1*w1) + '. ' + l2 + '×' + w2 + '=' + (l2*w2) + '. Total=' + area + ' m².'
        };
    }},
    { gen: function() {
        var a = randInt(4, 9), b = randInt(a + 3, 15), h = randInt(4, 10);
        var area = 0.5 * (a + b) * h;
        var opts = buildOpts(area + ' cm²', [(a + b) * h + ' cm²', (a * h) + ' cm²', (0.5 * b * h) + ' cm²']);
        return {
            q: 'A trapezium has parallel sides ' + a + ' cm and ' + b + ' cm, height ' + h + ' cm. Area:',
            opts: opts, c: 0,
            e: '½(' + a + '+' + b + ')×' + h + '=½×' + (a+b) + '×' + h + '=' + area + ' cm².'
        };
    }},
    { gen: function() {
        var s = randInt(4, 9), th = randInt(2, Math.floor(s / 2) + 1);
        var sqArea = s * s;
        var triArea = 0.5 * s * th;
        var remaining = sqArea - triArea;
        var opts = buildOpts(remaining + ' cm²', [sqArea + ' cm²', triArea + ' cm²', (sqArea + triArea) + ' cm²']);
        return {
            q: 'A compound shape consists of a square (side ' + s + ' cm) with a triangle cut out (base ' + s + ' cm, height ' + th + ' cm). Remaining area:',
            opts: opts, c: 0,
            e: 'Square: ' + sqArea + ' cm². Triangle: ½×' + s + '×' + th + '=' + triArea + ' cm². Remaining: ' + sqArea + '−' + triArea + '=' + remaining + ' cm².'
        };
    }},
    { question:'A window is a rectangle (60 cm × 80 cm) with a semicircle on top (diameter 60 cm). Approximate total area (use π≈3.14):', options:['6,213 cm²','7,613 cm²','4,800 cm²','5,414 cm²'], answer:0, explanation:'Rectangle: 60×80=4800. Semicircle: ½π(30)²=½×3.14×900=1413. Total≈6213 cm².' },
    { gen: function() {
        var area = randInt(3, 12) * randInt(2, 6);
        var opts = buildOpts((area * 2) + ' cm²', [area + ' cm²', (area / 2) + ' cm²', (area * 4) + ' cm²']);
        return {
            q: 'Two identical trapeziums fit together to form a parallelogram. If the trapezium has area ' + area + ' cm², what is the parallelogram\'s area?',
            opts: opts, c: 0,
            e: 'Two trapeziums = 2×' + area + '=' + (area * 2) + ' cm².'
        };
    }},
    { gen: function() {
        var l = randInt(6, 14), w = randInt(4, 9), pw = 1;
        var outerL = l + 2 * pw, outerW = w + 2 * pw;
        var outer = outerL * outerW;
        var inner = l * w;
        var path = outer - inner;
        var opts = buildOpts(path + ' m²', [inner + ' m²', outer + ' m²', (path * 2) + ' m²']);
        return {
            q: 'A path of width 1 m goes around the outside of a ' + l + ' m × ' + w + ' m lawn. What is the area of the path?',
            opts: opts, c: 0,
            e: 'Outer rectangle (add 1m each side): ' + outerL + '×' + outerW + '=' + outer + ' m². Lawn: ' + l + '×' + w + '=' + inner + ' m². Path area=' + outer + '−' + inner + '=' + path + ' m².'
        };
    }}
  ],

  // ── mi-27-3: Volume of Cubes & Cuboids ─────────────────────────────────────
  'mi-27-3': [
    { gen: function() {
        var l = randInt(3, 10), w = randInt(2, 8), h = randInt(2, 7);
        var vol = l * w * h;
        var opts = buildOpts(vol + ' cm³', [(2*(l*w + w*h + l*h)) + ' cm³', (l+w+h) + ' cm³', (l*w*h*2) + ' cm³']);
        return {
            q: 'A cuboid is ' + l + ' cm × ' + w + ' cm × ' + h + ' cm. What is its volume?',
            opts: opts, c: 0,
            e: 'V = ' + l + '×' + w + '×' + h + ' = ' + vol + ' cm³.'
        };
    }},
    { gen: function() {
        var s = randInt(2, 9);
        var vol = s * s * s;
        var opts = buildOpts(vol + ' cm³', [(s * s) + ' cm³', (s * 3) + ' cm³', (s * s * 3) + ' cm³']);
        return {
            q: 'What is the volume of a cube with side ' + s + ' cm?',
            opts: opts, c: 0,
            e: 'V = ' + s + '³ = ' + s + '×' + s + '×' + s + ' = ' + vol + ' cm³.'
        };
    }},
    { gen: function() {
        var l = pickFrom([30, 40, 50, 60]);
        var w = pickFrom([15, 20, 25, 30]);
        var h = pickFrom([20, 25, 30, 35]);
        var vol = l * w * h;
        var opts = buildOpts(vol + ' cm³', [(l + w + h) + ' cm³', (l * w + w * h) + ' cm³', (vol / 2) + ' cm³']);
        return {
            q: 'A fish tank is ' + l + ' cm × ' + w + ' cm × ' + h + ' cm. What volume of water does it hold?',
            opts: opts, c: 0,
            e: 'V = ' + l + '×' + w + '×' + h + ' = ' + vol + ' cm³.'
        };
    }},
    { question:'How many cm³ are in 1 litre?', options:['1,000','100','10,000','10'], answer:0, explanation:'1 litre = 1,000 cm³ (or 1,000 mL).' },
    { gen: function() {
        var l = randInt(2, 7), w = randInt(2, 6), h = randInt(2, 8);
        var vol = l * w * h;
        var opts = buildOpts(h + ' cm', [(vol / l) + ' cm', (h * 2) + ' cm', (l * w) + ' cm']);
        return {
            q: 'A cuboid has volume ' + vol + ' cm³, length ' + l + ' cm and width ' + w + ' cm. What is its height?',
            opts: opts, c: 0,
            e: 'V=lwh → ' + vol + '=' + l + '×' + w + '×h → ' + vol + '=' + (l*w) + 'h → h=' + h + ' cm.'
        };
    }},
    { gen: function() {
        var litres = pickFrom([1.5, 2, 2.5, 3, 3.5, 4, 5]);
        var cm3 = litres * 1000;
        var opts = buildOpts(cm3 + ' cm³', [(litres * 100) + ' cm³', (litres * 10000) + ' cm³', (litres * 10) + ' cm³']);
        return {
            q: 'Convert ' + litres + ' litres to cm³.',
            opts: opts, c: 0,
            e: '1 litre = 1,000 cm³. ' + litres + '×1,000=' + cm3 + ' cm³.'
        };
    }},
    { gen: function() {
        var vol = pickFrom([8, 27, 64, 125, 216, 343]);
        var side = Math.round(Math.cbrt(vol));
        var opts = buildOpts(side + ' cm', [(vol / 4) + ' cm', (side * 2) + ' cm', (side + 4) + ' cm']);
        return {
            q: 'A cube has volume ' + vol + ' cm³. What is the length of each side?',
            opts: opts, c: 0,
            e: '∛' + vol + ' = ' + side + '. Side = ' + side + ' cm (since ' + side + '³=' + vol + ').'
        };
    }},
    { gen: function() {
        var l = pickFrom([20, 25, 30, 40]), w = pickFrom([10, 15, 20]), h = pickFrom([10, 12, 15, 20]);
        var vol = l * w * h;
        var litres = vol / 1000;
        var opts = buildOpts(litres + ' litres', [vol + ' litres', (litres * 10) + ' litres', (litres / 10) + ' litres']);
        return {
            q: 'A box is ' + l + ' cm × ' + w + ' cm × ' + h + ' cm. How many litres does it hold?',
            opts: opts, c: 0,
            e: 'V=' + l + '×' + w + '×' + h + '=' + vol + ' cm³=' + litres + ' litres.'
        };
    }},
    { question:'Two cuboids: A is 4×3×5 cm, B is 6×2×5 cm. Which has the greater volume?', options:['B (60 cm³)','A (60 cm³)','Same volume','Cannot tell'], answer:2, explanation:'A: 4×3×5=60 cm³. B: 6×2×5=60 cm³. They are equal.' },
    { gen: function() {
        var l = pickFrom([20, 25, 30, 50]);
        var w = pickFrom([8, 10, 12, 15]);
        var h = pickFrom([1, 1.5, 2, 2.5]);
        var vol = l * w * h;
        var opts = buildOpts(vol + ' m³', [(l * w) + ' m³', (l + w + h) + ' m³', (vol * 2) + ' m³']);
        return {
            q: 'A swimming pool is ' + l + ' m long, ' + w + ' m wide and ' + h + ' m deep. What volume of water (in m³) does it hold?',
            opts: opts, c: 0,
            e: 'V = ' + l + '×' + w + '×' + h + ' = ' + vol + ' m³.'
        };
    }}
  ],

  // ── mi-28-1: Balance a Budget ─────────────────────────────────────────────
  'mi-28-1': [
    { gen: function() {
        var income = pickFrom([1200, 1400, 1500, 1600, 1800, 2000]);
        var expenses = income - pickFrom([100, 150, 200, 250, 300]);
        var surplus = income - expenses;
        var opts = buildOpts('Surplus of £' + surplus, ['Deficit of £' + surplus, 'Balanced', 'Surplus of £' + (surplus * 2)]);
        return {
            q: 'Monthly income: £' + income + '. Monthly expenses: £' + expenses + '. What is the budget surplus/deficit?',
            opts: opts, c: 0,
            e: '£' + income + '−£' + expenses + '=£' + surplus + ' surplus (income exceeds expenses).'
        };
    }},
    { question:'What is a budget deficit?', options:['Spending exceeds income','Income exceeds spending','Income equals spending','A type of tax'], answer:0, explanation:'A deficit occurs when expenditure is greater than income — you are spending more than you earn.' },
    { gen: function() {
        var income = pickFrom([1800, 2000, 2200, 2400, 2500]);
        var rent = pickFrom([600, 700, 750, 800]);
        var food = pickFrom([200, 250, 300]);
        var transport = pickFrom([100, 120, 150]);
        var other = pickFrom([400, 450, 500, 550, 600]);
        var expenses = rent + food + transport + other;
        var surplus = income - expenses;
        var label = surplus >= 0 ? 'Surplus of £' + surplus : 'Deficit of £' + Math.abs(surplus);
        var wrong1 = surplus >= 0 ? 'Deficit of £' + surplus : 'Surplus of £' + Math.abs(surplus);
        var opts = buildOpts(label, [wrong1, 'Balanced', 'Deficit of £' + rent]);
        return {
            q: 'Income: £' + income + '. Rent: £' + rent + '. Food: £' + food + '. Transport: £' + transport + '. Other: £' + other + '. Surplus or deficit?',
            opts: opts, c: 0,
            e: 'Total expenses=' + rent + '+' + food + '+' + transport + '+' + other + '=£' + expenses + '. £' + income + '−£' + expenses + '=£' + Math.abs(surplus) + ' ' + (surplus >= 0 ? 'surplus' : 'deficit') + '.'
        };
    }},
    { question:'To turn a £200 deficit into a balanced budget, you could:', options:['Reduce spending by £200 or increase income by £200','Spend £200 more','Increase income by £100 only','Do nothing'], answer:0, explanation:'A deficit of £200 means you spend £200 more than you earn. You must either earn £200 more or spend £200 less.' },
    { question:'Which term means money received from wages or other sources?', options:['Income','Expenditure','Deficit','Savings'], answer:0, explanation:'Income is money received — from wages, pocket money, investments, etc.' },
    { gen: function() {
        var income = pickFrom([400, 450, 500, 550, 600]);
        var spend = income - pickFrom([40, 50, 60, 70, 80]);
        var monthly = income - spend;
        var months = randInt(3, 8);
        var total = monthly * months;
        var opts = buildOpts('£' + total, ['£' + monthly, '£' + (total * 2), '£' + (income * months)]);
        return {
            q: 'A student earns £' + income + ' per month and spends £' + spend + '. How much can they save in ' + months + ' months?',
            opts: opts, c: 0,
            e: 'Monthly savings = £' + income + '−£' + spend + '=£' + monthly + '. Over ' + months + ' months: ' + months + '×£' + monthly + '=£' + total + '.'
        };
    }},
    { question:'Which is an example of expenditure?', options:['Rent payment','Monthly salary','Tax refund','Interest earned'], answer:0, explanation:'Expenditure is money spent. Rent is a payment (spending).' },
    { gen: function() {
        var annual = pickFrom([30000, 33000, 36000, 40000, 42000]);
        var spend = annual + pickFrom([1000, 2000, 3000, 4000, 5000]);
        var deficit = spend - annual;
        var opts = buildOpts('£' + deficit, ['£' + (annual + spend), '£' + deficit + ' surplus', 'Balanced']);
        return {
            q: 'A family\'s annual income is £' + annual + ' and annual spending is £' + spend + '. What is the annual deficit?',
            opts: opts, c: 0,
            e: '£' + spend + '−£' + annual + '=£' + deficit + '. They spend £' + deficit + ' more than they earn — deficit of £' + deficit + '.'
        };
    }},
    { question:'Which action would MOST help someone eliminate a budget deficit?', options:['Cutting non-essential spending','Buying more on credit','Ignoring the deficit','Borrowing more money'], answer:0, explanation:'Cutting non-essential spending directly reduces expenditure, helping eliminate a deficit.' },
    { gen: function() {
        var income = pickFrom([1600, 1800, 2000, 2200]);
        var bills = pickFrom([700, 800, 900, 1000]);
        var food = pickFrom([200, 250, 300]);
        var savings = pickFrom([100, 150, 200]);
        var left = income - bills - food - savings;
        var opts = buildOpts('£' + left, ['£' + (income - bills) , '£' + (income - bills - food), '£' + (left + savings)]);
        return {
            q: 'Income = £' + income + '. Essential bills = £' + bills + '. Food = £' + food + '. Savings goal = £' + savings + '. How much is left for non-essentials?',
            opts: opts, c: 0,
            e: '£' + income + '−£' + bills + '−£' + food + '−£' + savings + '=£' + left + ' available for non-essentials.'
        };
    }}
  ],

  // ── mi-28-2: Debit & Credit Cards ─────────────────────────────────────────
  'mi-28-2': [
    { question:'What is the main difference between a debit card and a credit card?', options:['Debit uses your own money; credit borrows money','Debit is for online use only','Credit is always free to use','Debit allows you to overspend'], answer:0, explanation:'A debit card draws directly from your bank balance. A credit card is a loan that must be repaid.' },
    { gen: function() {
        var p = pickFrom([200, 300, 400, 500, 600, 800, 1000]);
        var r = pickFrom([3, 4, 5, 6, 8, 10]);
        var t = randInt(1, 5);
        var interest = p * r * t / 100;
        var opts = buildOpts('£' + interest, ['£' + (p + interest), '£' + (p * r / 100), '£' + (p * r * t)]);
        return {
            q: 'Simple interest on £' + p + ' at ' + r + '% for ' + t + ' year(s) is:',
            opts: opts, c: 0,
            e: 'I = PRT = ' + p + '×' + (r/100) + '×' + t + ' = £' + interest + '.'
        };
    }},
    { gen: function() {
        var principal = pickFrom([200, 300, 400, 500]);
        var rate = pickFrom([10, 15, 20, 25]);
        var interest = principal * rate / 100;
        var total = principal + interest;
        var opts = buildOpts('£' + total, ['£' + interest, '£' + (principal + rate), '£' + (total + interest)]);
        return {
            q: 'A credit card has an interest rate of ' + rate + '% per year. You spend £' + principal + ' and do not repay for 1 year. How much is owed?',
            opts: opts, c: 0,
            e: 'Interest = ' + rate + '%×£' + principal + '=£' + interest + '. Total = £' + principal + '+£' + interest + '=£' + total + '.'
        };
    }},
    { question:'Why might someone prefer to use a debit card over a credit card?', options:['They only spend money they have, avoiding debt','Credit cards are not accepted anywhere','Debit cards earn rewards','They prefer paying interest'], answer:0, explanation:'Debit cards prevent overspending because you can only spend money in your account.' },
    { gen: function() {
        var p = pickFrom([100, 150, 200, 250, 300, 400, 500]);
        var r = pickFrom([3, 4, 5, 6, 8, 10]);
        var t = randInt(1, 4);
        var interest = p * r * t / 100;
        var total = p + interest;
        var opts = buildOpts('£' + total, ['£' + interest, '£' + (p + p * r / 100), '£' + (total * 2)]);
        return {
            q: 'If you borrow £' + p + ' at ' + r + '% simple interest for ' + t + ' year(s), total repayment is:',
            opts: opts, c: 0,
            e: 'Interest = ' + p + '×' + (r/100) + '×' + t + '=£' + interest + '. Total = £' + p + '+£' + interest + '=£' + total + '.'
        };
    }},
    { question:'Which statement about credit card debt is TRUE?', options:['Unpaid balances attract interest charges','Minimum repayments eliminate debt quickly','Interest is never charged','Credit cards are the safest way to manage money'], answer:0, explanation:'If you do not repay the full balance, interest is charged on the remaining amount each month.' },
    { gen: function() {
        var p = pickFrom([500, 800, 1000, 1200, 1500, 2000]);
        var r = pickFrom([2, 3, 4, 5, 6, 8]);
        var t = randInt(2, 6);
        var interest = p * r * t / 100;
        var opts = buildOpts('£' + interest, ['£' + (p * r / 100), '£' + (interest / t), '£' + (p + interest)]);
        return {
            q: 'Calculate simple interest on £' + p + ' at ' + r + '% for ' + t + ' years.',
            opts: opts, c: 0,
            e: 'I = ' + p + '×' + (r/100) + '×' + t + ' = £' + interest + '.'
        };
    }},
    { gen: function() {
        var spend = pickFrom([40, 50, 60, 80, 100]);
        var repaid = pickFrom([10, 15, 20]);
        var remaining = spend - repaid;
        var rate = pickFrom([2, 3, 5]);
        var interest = parseFloat((remaining * rate / 100).toFixed(2));
        var opts = buildOpts('£' + interest, ['£' + (spend * rate / 100).toFixed(2), '£' + (repaid * rate / 100).toFixed(2), '£' + (remaining * rate / 10).toFixed(2)]);
        return {
            q: 'A teenager spends £' + spend + ' on a credit card and pays back only £' + repaid + '. Interest is ' + rate + '% per month on the remaining balance. How much interest is charged that month?',
            opts: opts, c: 0,
            e: 'Remaining balance = £' + remaining + '. Interest = ' + rate + '%×£' + remaining + '=£' + interest + '.'
        };
    }},
    { question:'Which is a responsible use of a credit card?', options:['Paying the full balance each month','Never repaying the balance','Using it for all essential bills','Maxing out the credit limit'], answer:0, explanation:'Paying the full balance each month avoids interest charges — the card is used like a debit card but with extra protection.' },
    { gen: function() {
        var p = pickFrom([400, 500, 600, 800, 1000, 1200]);
        var r = pickFrom([4, 5, 6, 8, 10]);
        var tMonths = pickFrom([3, 6, 9]);
        var t = tMonths / 12;
        var interest = parseFloat((p * r * t / 100).toFixed(2));
        var opts = buildOpts('£' + interest, ['£' + (p * r / 100), '£' + (p * r * t / 100 * 2).toFixed(2), '£' + (interest * 12).toFixed(2)]);
        return {
            q: '£' + p + ' borrowed at ' + r + '% simple interest for ' + tMonths + ' months (' + t + ' year). Interest charged:',
            opts: opts, c: 0,
            e: 'I = ' + p + '×' + (r/100) + '×' + t + ' = £' + interest + '.'
        };
    }}
  ],

  // ── mi-28-3: Adjust a Budget ───────────────────────────────────────────────
  'mi-28-3': [
    { question:'Which of these is NON-essential spending?', options:['Streaming subscription','Rent payment','Electricity bill','Grocery shopping'], answer:0, explanation:'A streaming subscription is a want (entertainment), not a need. The others are essential.' },
    { gen: function() {
        var deficit = pickFrom([50, 100, 150, 200, 250]);
        var opts = buildOpts('Cut £' + deficit + ' from non-essential spending', ['Spend £' + deficit + ' more', 'Borrow £' + deficit, 'Increase essential spending by £' + deficit]);
        return {
            q: 'A budget shows a £' + deficit + ' deficit. Which change would eliminate it?',
            opts: opts, c: 0,
            e: 'Cutting £' + deficit + ' of spending turns the deficit (income < expenses) into a balanced budget.'
        };
    }},
    { gen: function() {
        var income = pickFrom([1400, 1500, 1600, 1800, 2000]);
        var essential = income - pickFrom([100, 150, 200, 250, 300, 350]);
        var nonEssential = income - essential + pickFrom([50, 100, 150, 200]);
        var deficit = (essential + nonEssential) - income;
        var opts = buildOpts('£' + deficit, ['£' + (income - essential), '£' + nonEssential, '£' + (deficit * 2)]);
        return {
            q: 'Monthly income £' + income + '. Essential expenses £' + essential + '. Non-essential spending £' + nonEssential + '. What is the deficit?',
            opts: opts, c: 0,
            e: 'Total expenses=' + essential + '+' + nonEssential + '=' + (essential + nonEssential) + '. Deficit=' + (essential + nonEssential) + '−' + income + '=£' + deficit + '.'
        };
    }},
    { gen: function() {
        var total = pickFrom([600, 720, 900, 1080, 1200, 1500]);
        var months = pickFrom([6, 9, 10, 12, 15]);
        var monthly = total / months;
        var opts = buildOpts('£' + monthly, ['£' + (monthly * 2), '£' + (total / (months - 1)).toFixed(0), '£' + (monthly + 10)]);
        return {
            q: 'A person wants to save £' + total + ' in ' + months + ' months. How much must they save each month?',
            opts: opts, c: 0,
            e: '£' + total + '÷' + months + '=£' + monthly + ' per month.'
        };
    }},
    { gen: function() {
        var income = pickFrom([1400, 1500, 1600, 1800, 2000]);
        var savingsGoal = pickFrom([80, 100, 120, 150, 200]);
        var maxSpend = income - savingsGoal;
        var opts = buildOpts('£' + maxSpend, ['£' + income, '£' + (maxSpend + savingsGoal * 2), '£' + savingsGoal]);
        return {
            q: 'To save £' + savingsGoal + '/month on a £' + income + ' income, what must total spending be limited to?',
            opts: opts, c: 0,
            e: 'Savings = income − spending. £' + savingsGoal + ' = £' + income + ' − spending. Spending must be ≤ £' + maxSpend + '.'
        };
    }},
    { question:'Which of these is the best first step when adjusting a budget to reduce a deficit?', options:['List all income and expenses to identify areas to cut','Apply for a loan','Ignore small expenses','Increase all spending categories by 5%'], answer:0, explanation:'You must first understand where money is going before deciding where to reduce spending.' },
    { gen: function() {
        var income = pickFrom([900, 1000, 1050, 1100, 1200]);
        var rent = pickFrom([400, 500, 550, 600]);
        var food = pickFrom([150, 180, 200, 220]);
        var transport = pickFrom([80, 100, 120]);
        var entertainment = pickFrom([150, 180, 200, 250, 300]);
        var total = rent + food + transport + entertainment;
        var deficit = total - income;
        var opts = buildOpts('£' + deficit, ['£' + (deficit / 2), '£' + (deficit + 50), '£' + entertainment]);
        return {
            q: 'A budget has: rent £' + rent + ', food £' + food + ', transport £' + transport + ', entertainment £' + entertainment + '. Income is £' + income + '. How much must non-essentials be reduced to break even?',
            opts: opts, c: 0,
            e: 'Total expenses=' + total + '. Deficit=' + deficit + '. Cut £' + deficit + ' from non-essentials (e.g. entertainment).'
        };
    }},
    { gen: function() {
        var surplus = pickFrom([40, 50, 60, 75, 80, 100]);
        var goal = surplus * randInt(3, 8);
        var months = goal / surplus;
        var opts = buildOpts(months + ' months', [(months - 1) + ' months', (months + 2) + ' months', (months * 2) + ' months']);
        return {
            q: 'After cutting non-essential spending, a person has a £' + surplus + ' surplus each month. How long to save £' + goal + '?',
            opts: opts, c: 0,
            e: '£' + goal + '÷£' + surplus + '=' + months + ' months.'
        };
    }},
    { question:'Which option best describes "adjusting a budget"?', options:['Changing income or spending to meet a financial goal','Spending more each month','Ignoring debt','Avoiding planning'], answer:0, explanation:'Adjusting a budget means modifying income or expenditure so you can meet savings goals or eliminate a deficit.' },
    { gen: function() {
        var months = randInt(3, 8);
        var goal = pickFrom([300, 400, 500, 600, 700, 800]);
        var needed = goal / months;
        var current = pickFrom([20, 30, 40, 50, 60]);
        while (current >= needed) { current = pickFrom([20, 30, 40, 50, 60]); }
        var extra = needed - current;
        var opts = buildOpts('£' + extra, ['£' + needed, '£' + current, '£' + (extra * months)]);
        return {
            q: 'A savings goal of £' + goal + ' must be met in ' + months + ' months. If current monthly surplus is £' + current + ', how much extra must be saved each month?',
            opts: opts, c: 0,
            e: 'Need £' + goal + '÷' + months + '=£' + needed + '/month. Already saving £' + current + '. Extra needed = £' + needed + '−£' + current + '=£' + extra + '.'
        };
    }}
  ]

});
