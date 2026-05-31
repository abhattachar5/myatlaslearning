// math-y8-gen-3.js — Generative test questions for Year 8 islands:
// m8i-16-3, m8i-16-4, m8i-19-1, m8i-19-2, m8i-19-3, m8i-13-2
// Must load AFTER test-generator.js.

// ── m8i-16-3  Equations with Like Terms & Distributive Property ──────────────
// Build equation FROM the solution to guarantee integer answer.
TEST_GENERATORS["m8i-16-3"] = [
  // 1. medium — a(x+b)+cx = d  →  ax+ab+cx = d  →  (a+c)x = d-ab
  { depth: 'medium', gen: function () {
    var sol, a, b, c, lhs, rhs;
    var tries = 0;
    do {
      sol = _randInt(1, 6);
      a   = _randInt(2, 4);
      b   = _randInt(1, 4);
      c   = _randInt(1, 3);
      // a(x+b)+cx = d  =>  (a+c)*sol + a*b = d
      rhs = (a + c) * sol + a * b;
      tries++;
    } while (tries < 50 && rhs < 5);
    var w1 = sol + 1, w2 = sol - 1, w3 = sol + 2;
    if (w2 === 0) w2 = sol + 3;
    return {
      q: 'Solve: ' + a + '(x + ' + b + ') + ' + c + 'x = ' + rhs,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand: ' + a + 'x + ' + (a*b) + ' + ' + c + 'x = ' + rhs + '. Collect: ' + (a+c) + 'x = ' + (rhs - a*b) + '. x = ' + sol + '.'
    };
  }},
  // 2. medium — ax − b = cx + d  (variables on both sides)
  { depth: 'medium', gen: function () {
    var sol, a, b, c, d;
    var tries = 0;
    do {
      sol = _randInt(-4, 6);
      a   = _randInt(3, 7);
      c   = _randInt(1, a - 1);
      // ax - b = cx + d  =>  (a-c)*sol = d + b
      // choose b freely, compute d
      b = _randInt(1, 6);
      d = (a - c) * sol - b;
      tries++;
    } while (tries < 50 && d === 0);
    var w1 = sol + 1, w2 = sol - 1, w3 = -sol;
    if (w3 === sol) w3 = sol + 2;
    if (w1 === sol) w1 = sol - 2;
    var dStr = d >= 0 ? '+ ' + d : '− ' + Math.abs(d);
    return {
      q: 'Solve: ' + a + 'x − ' + b + ' = ' + c + 'x ' + dStr,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Move x terms left: (' + a + '−' + c + ')x = ' + d + ' + ' + b + ' = ' + ((a-c)*sol) + '. x = ' + ((a-c)*sol) + ' ÷ ' + (a-c) + ' = ' + sol + '.'
    };
  }},
  // 3. medium — a(bx − c) = d
  { depth: 'medium', gen: function () {
    var sol, a, b, c, rhs;
    var tries = 0;
    do {
      sol = _randInt(-3, 5);
      a   = _randInt(2, 4);
      b   = _randInt(1, 3);
      c   = _randInt(1, 5);
      rhs = a * (b * sol - c);
      tries++;
    } while (tries < 50 && rhs === 0);
    var w1 = sol + 1, w2 = sol - 1, w3 = sol * 2;
    if (w3 === sol) w3 = sol + 3;
    return {
      q: 'Solve: ' + a + '(' + b + 'x − ' + c + ') = ' + rhs,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Divide both sides by ' + a + ': ' + b + 'x − ' + c + ' = ' + (rhs/a) + '. Add ' + c + ': ' + b + 'x = ' + (rhs/a + c) + '. x = ' + sol + '.'
    };
  }},
  // 4. medium — ax + b + cx − d = e  (collect like terms, solve)
  { depth: 'medium', gen: function () {
    var sol, a, b, c, d, e;
    do {
      sol = _randInt(1, 6);
      a   = _randInt(2, 5);
      c   = _randInt(1, 3);
      b   = _randInt(2, 8);
      d   = _randInt(1, b);
      e   = (a + c) * sol + b - d;
    } while (e < 2);
    var w1 = sol + 2, w2 = sol - 1 > 0 ? sol - 1 : sol + 3, w3 = sol + 1;
    return {
      q: 'Solve: ' + a + 'x + ' + b + ' + ' + c + 'x − ' + d + ' = ' + e,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Collect like terms: ' + (a+c) + 'x + ' + (b-d) + ' = ' + e + '. So ' + (a+c) + 'x = ' + ((a+c)*sol) + '. x = ' + sol + '.'
    };
  }},
  // 5. greater-depth — a(x+b) + c(x+d) = e  (two brackets)
  { depth: 'greater-depth', gen: function () {
    var sol, a, b, c, d, e;
    var tries = 0;
    do {
      sol = _randInt(-2, 5);
      a   = _randInt(2, 4);
      b   = _randInt(1, 4);
      c   = _randInt(2, 4);
      d   = _randInt(1, 4);
      e   = a * (sol + b) + c * (sol + d);
      tries++;
    } while (tries < 50 && e === 0);
    var w1 = sol + 1, w2 = sol - 1, w3 = -sol;
    if (w3 === sol) w3 = sol + 2;
    return {
      q: 'Solve: ' + a + '(x + ' + b + ') + ' + c + '(x + ' + d + ') = ' + e,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand: ' + a + 'x + ' + (a*b) + ' + ' + c + 'x + ' + (c*d) + ' = ' + e + '. Collect: ' + (a+c) + 'x + ' + (a*b+c*d) + ' = ' + e + '. x = ' + sol + '.'
    };
  }},
  // 6. greater-depth — a(bx+c) = d(ex−f) (brackets each side)
  { depth: 'greater-depth', gen: function () {
    var sol, a, b, c, d, e, f;
    var tries = 0;
    do {
      sol = _randInt(-3, 4);
      a   = _randInt(2, 4);
      b   = _randInt(1, 3);
      c   = _randInt(1, 5);
      d   = _randInt(2, 4);
      e   = _randInt(1, 3);
      f   = _randInt(1, 5);
      // LHS = a*(b*sol+c), RHS = d*(e*sol-f) — need them equal
      // So pick f so that they match: d*(e*sol-f) = a*(b*sol+c)
      // f = (d*e*sol - a*(b*sol+c)) / d — only integer if divisible
      var num = d * e * sol - a * (b * sol + c);
      if (num % d !== 0) { tries++; continue; }
      f = num / d;
      if (f <= 0 || f > 8) { tries++; continue; }
      tries++;
      break;
    } while (tries < 200);
    if (tries >= 200) {
      // fallback: simple case
      sol = 3; a = 2; b = 1; c = 1; d = 1; e = 2; f = -2;
      // 2(x+1) = 2x-2 won't work. Use safe fallback:
      sol = 4; a = 3; b = 1; c = 2; e = 2; d = 2; f = (d*e*sol - a*(b*sol+c))/d;
    }
    var lhsVal = a * (b * sol + c);
    var w1 = sol + 1, w2 = sol - 1, w3 = -sol;
    if (w3 === sol) w3 = sol + 2;
    if (w2 === sol) w2 = sol + 3;
    return {
      q: 'Solve: ' + a + '(' + b + 'x + ' + c + ') = ' + d + '(' + e + 'x − ' + f + ')',
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand: ' + (a*b) + 'x + ' + (a*c) + ' = ' + (d*e) + 'x − ' + (d*f) + '. Rearrange: ' + (a*b - d*e) + 'x = ' + (-d*f - a*c) + '. x = ' + sol + '.'
    };
  }}
];

// ── m8i-16-4  Solve Multi-Step Equations (3+ steps, integer solutions) ────────
TEST_GENERATORS["m8i-16-4"] = [
  // 1. medium — ax + b = c(dx + e)  → expand, collect, solve
  { depth: 'medium', gen: function () {
    var sol, a, b, c, d, e;
    var tries = 0;
    do {
      sol = _randInt(-3, 5);
      c   = _randInt(2, 4);
      d   = _randInt(1, 3);
      e   = _randInt(-4, 4);
      // LHS = a*sol + b, RHS = c*(d*sol + e)
      // choose a and b: let b = _randInt, compute a so equation holds
      // c*(d*sol+e) = c*d*sol + c*e
      // a*sol + b = c*d*sol + c*e  =>  b = c*e, a*sol = c*d*sol => a = c*d only if sol works
      // Better: choose a freely, then b = c*(d*sol+e) - a*sol
      a   = _randInt(1, 4);
      b   = c * (d * sol + e) - a * sol;
      tries++;
    } while (tries < 50 && (a - c*d === 0));
    var rhs = c * (d * sol + e);
    var eStr = e >= 0 ? '+ ' + e : '− ' + Math.abs(e);
    var bStr = b >= 0 ? String(b) : '− ' + Math.abs(b);
    var lhsStr = b >= 0 ? a + 'x + ' + b : a + 'x − ' + Math.abs(b);
    var w1 = sol + 1, w2 = sol - 1, w3 = -sol;
    if (w3 === sol) w3 = sol + 2;
    return {
      q: 'Solve: ' + lhsStr + ' = ' + c + '(' + d + 'x ' + eStr + ')',
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand RHS: ' + (c*d) + 'x + ' + (c*e) + '. Rearrange: ' + (a-c*d) + 'x = ' + (c*e - b) + '. x = ' + sol + '.'
    };
  }},
  // 2. medium — a(x−b)+c = d(x+e)
  { depth: 'medium', gen: function () {
    var sol, a, b, c, d, e;
    var tries = 0;
    do {
      sol = _randInt(-3, 5);
      a   = _randInt(2, 5);
      b   = _randInt(1, 4);
      c   = _randInt(1, 6);
      d   = _randInt(1, 3);
      if (a === d) { tries++; continue; }
      // a*(sol-b)+c = d*(sol+e)  =>  a*sol - a*b + c = d*sol + d*e
      // d*e = a*sol - a*b + c - d*sol = (a-d)*sol - a*b + c
      var num = (a - d) * sol - a * b + c;
      if (num % d !== 0) { tries++; continue; }
      e = num / d;
      tries++;
      break;
    } while (tries < 200);
    if (tries >= 200) { sol=2; a=3; b=1; c=4; d=2; e=(3*2-3+4)/2; }
    var lhsVal = a*(sol-b)+c, rhsVal = d*(sol+e);
    var w1 = sol + 1, w2 = sol - 1, w3 = sol + 2;
    if (w2 === sol) w2 = sol - 2;
    var eStr = e >= 0 ? '+ ' + e : '− ' + Math.abs(e);
    return {
      q: 'Solve: ' + a + '(x − ' + b + ') + ' + c + ' = ' + d + '(x ' + eStr + ')',
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand: ' + a + 'x − ' + (a*b) + ' + ' + c + ' = ' + d + 'x + ' + (d*e) + '. Collect: ' + (a-d) + 'x = ' + ((a-d)*sol) + '. x = ' + sol + '.'
    };
  }},
  // 3. medium — multi-step with fractions of a step: (ax+b)/c = d
  { depth: 'medium', gen: function () {
    var sol, a, b, c, d;
    do {
      c   = _randInt(2, 4);
      d   = _randInt(1, 6);
      sol = _randInt(1, 5);
      a   = _randInt(1, 4);
      b   = c * d - a * sol;
    } while (Math.abs(b) > 12);
    var bStr = b >= 0 ? '+ ' + b : '− ' + Math.abs(b);
    var w1 = sol + 1, w2 = sol + c, w3 = d;
    if (w3 === sol) w3 = sol + 2;
    return {
      q: 'Solve: (' + a + 'x ' + bStr + ') ÷ ' + c + ' = ' + d,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Multiply both sides by ' + c + ': ' + a + 'x + ' + b + ' = ' + (c*d) + '. Subtract ' + b + ': ' + a + 'x = ' + (a*sol) + '. x = ' + sol + '.'
    };
  }},
  // 4. medium — two brackets on same side plus constant: a(x+b)+c(x−d) = e
  { depth: 'medium', gen: function () {
    var sol, a, b, c, d, e;
    do {
      sol = _randInt(1, 5);
      a   = _randInt(2, 4);
      b   = _randInt(1, 4);
      c   = _randInt(1, 3);
      d   = _randInt(1, 4);
      e   = a*(sol+b) + c*(sol-d);
    } while (e < 1);
    var w1 = sol + 1, w2 = sol - 1 > 0 ? sol - 1 : sol + 3, w3 = sol + 2;
    return {
      q: 'Solve: ' + a + '(x + ' + b + ') + ' + c + '(x − ' + d + ') = ' + e,
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand: ' + a + 'x + ' + (a*b) + ' + ' + c + 'x − ' + (c*d) + ' = ' + e + '. Collect: ' + (a+c) + 'x + ' + (a*b-c*d) + ' = ' + e + '. x = ' + sol + '.'
    };
  }},
  // 5. greater-depth — ax + b(x−c) = d(ex+f)
  { depth: 'greater-depth', gen: function () {
    var sol, a, b, c, d, e, f;
    var tries = 0;
    do {
      sol = _randInt(-3, 5);
      a   = _randInt(1, 4);
      b   = _randInt(2, 4);
      c   = _randInt(1, 4);
      d   = _randInt(1, 3);
      e   = _randInt(1, 2);
      // a*sol + b*(sol-c) = d*(e*sol+f)
      // (a+b)*sol - b*c = d*e*sol + d*f
      // ((a+b) - d*e)*sol - b*c = d*f
      // d*f = ((a+b-d*e)*sol) - b*c
      var num = (a + b - d*e) * sol - b * c;
      if (d === 0 || num % d !== 0) { tries++; continue; }
      if (a + b - d*e === 0) { tries++; continue; }
      f = num / d;
      tries++;
      break;
    } while (tries < 200);
    if (tries >= 200) { sol=3; a=2; b=3; c=1; d=2; e=1; f=((2+3-2)*3 - 3)/2; }
    var fStr = f >= 0 ? '+ ' + f : '− ' + Math.abs(f);
    var w1 = sol + 1, w2 = sol - 1, w3 = -sol;
    if (w3 === sol) w3 = sol + 2;
    if (w2 === sol) w2 = sol + 3;
    return {
      q: 'Solve: ' + a + 'x + ' + b + '(x − ' + c + ') = ' + d + '(' + e + 'x ' + fStr + ')',
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Expand: ' + (a+b) + 'x − ' + (b*c) + ' = ' + (d*e) + 'x + ' + (d*f) + '. Collect: ' + (a+b-d*e) + 'x = ' + ((a+b-d*e)*sol) + '. x = ' + sol + '.'
    };
  }},
  // 6. greater-depth — word-problem style, 3-step
  { depth: 'greater-depth', gen: function () {
    var sol, a, b, c;
    do {
      sol = _randInt(2, 8);
      a   = _randInt(2, 5);
      b   = _randInt(1, 6);
      c   = _randInt(2, 4);
      // c * (a * sol + b) should be nice for the story
    } while (a * sol + b > 30);
    var total = c * (a * sol + b);
    var w1 = sol + 1, w2 = sol - 1 > 0 ? sol - 1 : sol + 2, w3 = sol + 3;
    return {
      q: 'A number n is multiplied by ' + a + ', then ' + b + ' is added. The result is multiplied by ' + c + ' to give ' + total + '. Find n.',
      opts: _buildOpts(String(sol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: c + '(' + a + 'n + ' + b + ') = ' + total + '. Divide by ' + c + ': ' + a + 'n + ' + b + ' = ' + (a*sol+b) + '. Subtract ' + b + ': ' + a + 'n = ' + (a*sol) + '. n = ' + sol + '.'
    };
  }}
];

// ── m8i-19-1  Find the Gradient ───────────────────────────────────────────────
TEST_GENERATORS["m8i-19-1"] = [
  // 1. medium — integer gradient, both positive coordinates
  { depth: 'medium', gen: function () {
    var m   = _pickFrom([-3,-2,-1,1,2,3]);
    var x1  = _randInt(-3, 2), y1 = _randInt(-3, 3);
    var run = _randInt(1, 4);
    var x2  = x1 + run, y2 = y1 + m * run;
    var w1  = -m, w2 = m + 1, w3 = run;
    if (w2 === m) w2 = m - 1;
    if (w3 === m) w3 = m + 2;
    return {
      q: 'Find the gradient of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').',
      opts: _buildOpts(String(m), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Gradient = (y₂−y₁)/(x₂−x₁) = (' + y2 + '−' + y1 + ')/(' + x2 + '−' + x1 + ') = ' + (m*run) + '/' + run + ' = ' + m + '.'
    };
  }},
  // 2. medium — gradient 1/2 (unit fraction, positive)
  { depth: 'medium', gen: function () {
    var fracs = [{n:1,d:2},{n:1,d:3},{n:2,d:3},{n:3,d:2}];
    var frac  = _pickFrom(fracs);
    var x1 = _randInt(-3, 2), y1 = _randInt(-3, 3);
    var run = frac.d * _randInt(1, 2);
    var rise = frac.n * (run / frac.d);
    var x2 = x1 + run, y2 = y1 + rise;
    var mStr = frac.n + '/' + frac.d;
    var w1 = String(frac.d) + '/' + String(frac.n);
    var w2 = '-' + frac.n + '/' + frac.d;
    var w3 = String(frac.n + 1) + '/' + frac.d;
    if (w1 === mStr) w1 = String(frac.n) + '/' + String(frac.d + 1);
    return {
      q: 'Find the gradient of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').',
      opts: _buildOpts(mStr, [w1, w2, w3]),
      c: 0,
      e: 'Gradient = (' + y2 + '−' + y1 + ')/(' + x2 + '−' + x1 + ') = ' + rise + '/' + run + ' = ' + mStr + '.'
    };
  }},
  // 3. medium — negative gradient
  { depth: 'medium', gen: function () {
    var m   = _pickFrom([-3,-2,-1]);
    var x1  = _randInt(-2, 2), y1 = _randInt(0, 5);
    var run = _randInt(1, 3);
    var x2  = x1 + run, y2  = y1 + m * run;
    var w1  = -m, w2 = m - 1, w3 = run;
    if (w1 === m) w1 = m - 2;
    if (w3 === m) w3 = m + 2;
    return {
      q: 'Find the gradient of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').',
      opts: _buildOpts(String(m), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Gradient = (' + y2 + '−' + y1 + ')/(' + x2 + '−' + x1 + ') = ' + (m*run) + '/' + run + ' = ' + m + '. The gradient is negative (line goes down left to right).'
    };
  }},
  // 4. medium — gradient from a table row (choose rise/run)
  { depth: 'medium', gen: function () {
    var m   = _pickFrom([-2,-1,1,2,3]);
    var x1  = _randInt(-2, 0), y1 = _randInt(-2, 2);
    var run = _randInt(2, 4);
    var x2  = x1 + run, y2  = y1 + m * run;
    var w1  = m + 1, w2 = -m, w3 = m * 2;
    if (w3 === m) w3 = m + 3;
    if (w2 === m) w2 = m - 1;
    return {
      q: 'A straight line passes through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + '). What is its gradient?',
      opts: _buildOpts(String(m), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Gradient m = (y₂−y₁)/(x₂−x₁) = (' + y2 + '−' + y1 + ')/(' + x2 + '−' + x1 + ') = ' + (m*run) + '/' + run + ' = ' + m + '.'
    };
  }},
  // 5. greater-depth — negative fraction gradient
  { depth: 'greater-depth', gen: function () {
    var fracs = [{n:-1,d:2},{n:-1,d:3},{n:-2,d:3},{n:-3,d:2}];
    var frac  = _pickFrom(fracs);
    var x1 = _randInt(-2, 2), y1 = _randInt(1, 5);
    var run = Math.abs(frac.d) * _randInt(1, 2);
    var rise = frac.n * (run / Math.abs(frac.d));
    var x2 = x1 + run, y2 = y1 + rise;
    var mStr = frac.n + '/' + Math.abs(frac.d);
    var w1   = Math.abs(frac.n) + '/' + Math.abs(frac.d);
    var w2   = frac.n + '/' + (Math.abs(frac.d) + 1);
    var w3   = (frac.n - 1) + '/' + Math.abs(frac.d);
    if (w1 === mStr) w1 = '1/' + (Math.abs(frac.d)+1);
    return {
      q: 'What is the gradient of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ')?',
      opts: _buildOpts(mStr, [w1, w2, w3]),
      c: 0,
      e: 'Gradient = (' + y2 + '−' + y1 + ')/(' + x2 + '−' + x1 + ') = ' + rise + '/' + run + ' = ' + mStr + '. Negative — line slopes downward.'
    };
  }},
  // 6. greater-depth — gradient with point given and one coordinate unknown
  { depth: 'greater-depth', gen: function () {
    var m  = _pickFrom([-2,-1,1,2,3]);
    var x1 = _randInt(-2, 1), y1 = _randInt(-2, 3);
    var run = _randInt(1, 3);
    var x2  = x1 + run, y2  = y1 + m * run;
    var w1  = y2 + 1, w2 = y2 - 1, w3 = y2 + m;
    if (w2 === y2) w2 = y2 - 2;
    if (w3 === y2) w3 = y2 + 2;
    return {
      q: 'The gradient of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', k) is ' + m + '. Find k.',
      opts: _buildOpts(String(y2), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Gradient = (k−' + y1 + ')/(' + x2 + '−' + x1 + ') = ' + m + '. So k−' + y1 + ' = ' + m + '×' + run + ' = ' + (m*run) + '. k = ' + y2 + '.'
    };
  }}
];

// ── m8i-19-2  Gradient & Y-Intercept ─────────────────────────────────────────
TEST_GENERATORS["m8i-19-2"] = [
  // 1. medium — identify gradient from y=mx+c
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3,4]);
    var c = _randInt(-5, 5);
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var w1 = c, w2 = m + 1, w3 = -m;
    if (w3 === m) w3 = m + 2;
    return {
      q: 'What is the gradient of the line y = ' + m + 'x ' + cStr + '?',
      opts: _buildOpts(String(m), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'In y = mx + c, m is the gradient. Here m = ' + m + '.'
    };
  }},
  // 2. medium — identify y-intercept from y=mx+c
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3]);
    var c = _randInt(-6, 6);
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var w1 = m, w2 = c + 1, w3 = c - 1;
    if (w1 === c) w1 = c + 2;
    if (w3 === c) w3 = c - 2;
    return {
      q: 'What is the y-intercept of the line y = ' + m + 'x ' + cStr + '?',
      opts: _buildOpts(String(c), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'In y = mx + c, c is the y-intercept. Here c = ' + c + '. The line crosses the y-axis at (0, ' + c + ').'
    };
  }},
  // 3. medium — identify both gradient and y-intercept
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-2,-1,1,2,3]);
    var c = _randInt(-4, 4);
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var w1 = 'm = ' + (-m) + ', c = ' + c;
    var w2 = 'm = ' + c + ', c = ' + m;
    var w3 = 'm = ' + m + ', c = ' + (-c);
    var correct = 'm = ' + m + ', c = ' + c;
    if (w3 === correct) w3 = 'm = ' + m + ', c = ' + (c + 1);
    return {
      q: 'For the line y = ' + m + 'x ' + cStr + ', state the gradient and y-intercept.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Gradient m = ' + m + ' (coefficient of x). Y-intercept c = ' + c + ' (constant term).'
    };
  }},
  // 4. medium — real-world meaning of gradient and y-intercept
  { depth: 'medium', gen: function () {
    var m = _randInt(2, 8);
    var c = _randInt(5, 20);
    var correct = 'starts at ' + c + ', rises by ' + m + ' each unit';
    var w1 = 'starts at ' + m + ', rises by ' + c + ' each unit';
    var w2 = 'starts at ' + c + ', rises by ' + (m + 1) + ' each unit';
    var w3 = 'starts at ' + (c + 1) + ', rises by ' + m + ' each unit';
    return {
      q: 'A cost equation is C = ' + m + 'n + ' + c + '. What does this tell you?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'The y-intercept (' + c + ') is the starting cost. The gradient (' + m + ') is the cost per unit increase in n.'
    };
  }},
  // 5. greater-depth — rearrange to find gradient (ax+by=c form)
  { depth: 'greater-depth', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3]);
    var c = _randInt(-4, 4);
    // y = mx + c  =>  -mx + y = c  =>  ax + by = k form:  a = -m, b = 1
    var a = _randInt(2, 4);
    var b = _randInt(2, 4);
    // a*x + b*y = k, y = -(a/b)x + k/b
    // so m = -a/b — only an integer if b | a
    var bDivs = [];
    for (var bv = 2; bv <= 5; bv++) {
      for (var av = 2; av <= 10; av++) {
        if (av % bv === 0) bDivs.push({a:av, b:bv, m:-av/bv});
      }
    }
    var pick = _pickFrom(bDivs);
    a = pick.a; b = pick.b;
    var intM = pick.m;
    var k  = _randInt(b, b * 6);
    var cVal = k / b; // y-intercept when x=0
    var w1 = -intM, w2 = intM + 1, w3 = intM - 1;
    if (w1 === intM) w1 = intM + 2;
    return {
      q: 'Rearrange ' + a + 'x + ' + b + 'y = ' + k + ' into y = mx + c form. What is the gradient?',
      opts: _buildOpts(String(intM), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: b + 'y = −' + a + 'x + ' + k + '. Divide by ' + b + ': y = ' + intM + 'x + ' + cVal + '. Gradient = ' + intM + '.'
    };
  }},
  // 6. greater-depth — match equation to description
  { depth: 'greater-depth', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3]);
    var c = _randInt(-5, 5);
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    // ask for the y-intercept value when x=3
    var yAt3 = 3 * m + c;
    var w1 = 3 * m + c + 1, w2 = m + c, w3 = 3 * m;
    if (w1 === yAt3) w1 = yAt3 + 2;
    if (w2 === yAt3) w2 = yAt3 - 1;
    if (w3 === yAt3) w3 = yAt3 + 3;
    return {
      q: 'The line y = ' + m + 'x ' + cStr + ' passes through the point (3, ?). What is the y-coordinate?',
      opts: _buildOpts(String(yAt3), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Substitute x = 3: y = ' + m + '×3 ' + cStr + ' = ' + (3*m) + ' ' + cStr + ' = ' + yAt3 + '.'
    };
  }}
];

// ── m8i-19-3  Write & Graph y = mx + c ────────────────────────────────────────
TEST_GENERATORS["m8i-19-3"] = [
  // 1. medium — write equation given gradient and y-intercept
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3]);
    var c = _randInt(-5, 5);
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var correct = 'y = ' + m + 'x ' + cStr;
    var w1 = 'y = ' + c + 'x ' + (m >= 0 ? '+ ' + m : '− ' + Math.abs(m));
    var w2 = 'y = ' + m + 'x ' + (c+1 >= 0 ? '+ ' + (c+1) : '− ' + Math.abs(c+1));
    var w3 = 'y = ' + (-m) + 'x ' + cStr;
    if (w2 === correct) w2 = 'y = ' + m + 'x ' + (c >= 0 ? '+ ' + (c+2) : '− ' + (Math.abs(c)+1));
    return {
      q: 'Write the equation of the line with gradient ' + m + ' and y-intercept ' + c + '.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Use y = mx + c with m = ' + m + ' and c = ' + c + '. Equation: ' + correct + '.'
    };
  }},
  // 2. medium — identify if a point lies on the line
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-2,-1,1,2]);
    var c = _randInt(-4, 4);
    var x = _randInt(-3, 3);
    var y = m * x + c;
    var correct = '(' + x + ', ' + y + ')';
    var w1 = '(' + x + ', ' + (y+1) + ')';
    var w2 = '(' + x + ', ' + (y-1) + ')';
    var w3 = '(' + (x+1) + ', ' + y + ')';
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    return {
      q: 'Which point lies on the line y = ' + m + 'x ' + cStr + '?',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Substitute x = ' + x + ': y = ' + m + '×' + x + ' ' + cStr + ' = ' + y + '. So (' + x + ', ' + y + ') lies on the line.'
    };
  }},
  // 3. medium — which equation matches description (gradient and passes through origin)
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3]);
    var correct = 'y = ' + m + 'x';
    var w1 = 'y = ' + (m+1) + 'x';
    var w2 = 'y = x + ' + m;
    var w3 = 'y = ' + m + 'x + 1';
    return {
      q: 'Write the equation of the line with gradient ' + m + ' that passes through the origin.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'y-intercept = 0, gradient = ' + m + '. Equation: y = ' + m + 'x.'
    };
  }},
  // 4. medium — write equation from two given points
  { depth: 'medium', gen: function () {
    var m = _pickFrom([-2,-1,1,2,3]);
    var c = _randInt(-4, 4);
    var x1 = 0, y1 = c;    // use x=0 to read off c easily
    var x2 = _randInt(1,3), y2 = m*x2+c;
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var correct = 'y = ' + m + 'x ' + cStr;
    var w1 = 'y = ' + c + 'x ' + (m>=0?'+ '+m:'− '+Math.abs(m));
    var w2 = 'y = ' + m + 'x ' + (c+1>=0?'+ '+(c+1):'− '+Math.abs(c+1));
    var w3 = 'y = ' + (-m) + 'x ' + cStr;
    if (w2 === correct) w2 = 'y = ' + m + 'x ' + (c>=0?'+ '+(c+2):'− '+(Math.abs(c)+2));
    return {
      q: 'Find the equation of the line through (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Gradient = (' + y2 + '−' + y1 + ')/(' + x2 + '−0) = ' + m + '. Y-intercept = ' + c + '. Equation: ' + correct + '.'
    };
  }},
  // 5. greater-depth — find equation and check a point
  { depth: 'greater-depth', gen: function () {
    var m = _pickFrom([-3,-2,-1,1,2,3]);
    var c = _randInt(-5, 5);
    var xTest = _randInt(2, 5);
    var yTest = m * xTest + c;
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var correct = 'y = ' + m + 'x ' + cStr + '; y = ' + yTest + ' when x = ' + xTest;
    var w1 = 'y = ' + m + 'x ' + cStr + '; y = ' + (yTest+1) + ' when x = ' + xTest;
    var w2 = 'y = ' + m + 'x ' + cStr + '; y = ' + (yTest-1) + ' when x = ' + xTest;
    var w3 = 'y = ' + (-m) + 'x ' + cStr + '; y = ' + yTest + ' when x = ' + xTest;
    return {
      q: 'A line has gradient ' + m + ' and y-intercept ' + c + '. Write its equation and find y when x = ' + xTest + '.',
      opts: _buildOpts(correct, [w1, w2, w3]),
      c: 0,
      e: 'Equation: y = ' + m + 'x ' + cStr + '. When x = ' + xTest + ': y = ' + m + '×' + xTest + ' ' + cStr + ' = ' + yTest + '.'
    };
  }},
  // 6. greater-depth — find gradient from equation then find x for a given y
  { depth: 'greater-depth', gen: function () {
    var m = _pickFrom([-2,-1,1,2,3]);
    var c = _randInt(-4, 4);
    var yTarget = _randInt(-5, 10);
    // y = mx + c  =>  x = (yTarget - c) / m — needs integer
    var tries = 0;
    while ((yTarget - c) % m !== 0 && tries < 50) { yTarget = _randInt(-5, 10); tries++; }
    if ((yTarget - c) % m !== 0) { yTarget = m * 2 + c; } // safe fallback
    var xSol = (yTarget - c) / m;
    var cStr = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);
    var w1 = xSol + 1, w2 = xSol - 1, w3 = -xSol;
    if (w3 === xSol) w3 = xSol + 2;
    if (w2 === xSol) w2 = xSol - 2;
    return {
      q: 'On the line y = ' + m + 'x ' + cStr + ', what is x when y = ' + yTarget + '?',
      opts: _buildOpts(String(xSol), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Set ' + yTarget + ' = ' + m + 'x ' + cStr + '. Subtract ' + c + ': ' + (yTarget-c) + ' = ' + m + 'x. Divide by ' + m + ': x = ' + xSol + '.'
    };
  }}
];

// ── m8i-13-2  Distance Between Two Points ─────────────────────────────────────
TEST_GENERATORS["m8i-13-2"] = [
  // 1. medium — horizontal distance (same y)
  { depth: 'medium', gen: function () {
    var y = _randInt(-3, 3);
    var x1 = _randInt(-5, 0), x2 = _randInt(1, 6);
    var dist = x2 - x1;
    var w1 = dist + 1, w2 = dist - 1 > 0 ? dist - 1 : dist + 2, w3 = x1 + x2;
    if (w3 === dist) w3 = dist + 3;
    return {
      q: 'Find the distance between (' + x1 + ', ' + y + ') and (' + x2 + ', ' + y + ').',
      opts: _buildOpts(String(dist), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Same y-coordinate, so distance = |' + x2 + ' − (' + x1 + ')| = |' + (x2-x1) + '| = ' + dist + '.'
    };
  }},
  // 2. medium — vertical distance (same x)
  { depth: 'medium', gen: function () {
    var x = _randInt(-3, 3);
    var y1 = _randInt(-5, 0), y2 = _randInt(1, 6);
    var dist = y2 - y1;
    var w1 = dist + 1, w2 = dist - 1 > 0 ? dist - 1 : dist + 2, w3 = y1 + y2;
    if (w3 === dist) w3 = dist + 3;
    return {
      q: 'Find the distance between (' + x + ', ' + y1 + ') and (' + x + ', ' + y2 + ').',
      opts: _buildOpts(String(dist), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Same x-coordinate, so distance = |' + y2 + ' − (' + y1 + ')| = |' + (y2-y1) + '| = ' + dist + '.'
    };
  }},
  // 3. medium — horizontal distance with both negative x values
  { depth: 'medium', gen: function () {
    var y  = _randInt(-2, 2);
    var x1 = _randInt(-8, -4), x2 = _randInt(-3, -1);
    var dist = x2 - x1;
    var w1 = Math.abs(x1 + x2), w2 = dist + 1, w3 = dist * 2;
    if (w1 === dist) w1 = dist + 2;
    if (w3 === dist) w3 = dist + 3;
    return {
      q: 'What is the distance between (' + x1 + ', ' + y + ') and (' + x2 + ', ' + y + ')?',
      opts: _buildOpts(String(dist), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Distance = |x₂ − x₁| = |' + x2 + ' − (' + x1 + ')| = |' + (x2-x1) + '| = ' + dist + '.'
    };
  }},
  // 4. medium — Pythagorean triple (3-4-5)
  { depth: 'medium', gen: function () {
    var triples = [{a:3,b:4,c:5},{a:6,b:8,c:10},{a:5,b:12,c:13}];
    var tr = _pickFrom(triples);
    var x1 = _randInt(-3, 1), y1 = _randInt(-2, 2);
    var x2 = x1 + tr.a, y2 = y1 + tr.b;
    var w1 = tr.a + tr.b, w2 = tr.c + 1, w3 = tr.c - 1;
    if (w3 === tr.c) w3 = tr.c + 2;
    return {
      q: 'Find the straight-line distance between (' + x1 + ', ' + y1 + ') and (' + x2 + ', ' + y2 + ').',
      opts: _buildOpts(String(tr.c), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Horizontal distance = ' + tr.a + ', vertical distance = ' + tr.b + '. By Pythagoras: √(' + tr.a + '² + ' + tr.b + '²) = √(' + (tr.a*tr.a) + ' + ' + (tr.b*tr.b) + ') = √' + (tr.c*tr.c) + ' = ' + tr.c + '.'
    };
  }},
  // 5. greater-depth — find missing coordinate given distance
  { depth: 'greater-depth', gen: function () {
    var y1 = _randInt(-3, 3);
    var x  = _randInt(-2, 2);
    var dist = _randInt(3, 8);
    var y2 = y1 + dist;
    var w1 = y2 + 1, w2 = y2 - 1, w3 = y1 - dist;
    if (w3 === y2) w3 = y2 + 2;
    return {
      q: 'Point A is (' + x + ', ' + y1 + '). Point B is (' + x + ', k). The distance AB = ' + dist + '. Find k if B is above A.',
      opts: _buildOpts(String(y2), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'B is above A so k > ' + y1 + '. Distance = k − ' + y1 + ' = ' + dist + '. k = ' + y2 + '.'
    };
  }},
  // 6. greater-depth — 5-12-13 triple or scaled 3-4-5
  { depth: 'greater-depth', gen: function () {
    var scales = [{a:5,b:12,c:13},{a:8,b:6,c:10},{a:9,b:12,c:15}];
    var tr = _pickFrom(scales);
    var x1 = _randInt(-4, 0), y1 = _randInt(-2, 2);
    var x2 = x1 + tr.a, y2 = y1 + tr.b;
    var w1 = tr.a + tr.b, w2 = tr.c + 2, w3 = tr.c - 1;
    if (w1 === tr.c) w1 = tr.c + 3;
    if (w3 === tr.c) w3 = tr.c + 3;
    return {
      q: 'Two points are P(' + x1 + ', ' + y1 + ') and Q(' + x2 + ', ' + y2 + '). Find the exact distance PQ.',
      opts: _buildOpts(String(tr.c), [String(w1), String(w2), String(w3)]),
      c: 0,
      e: 'Δx = ' + tr.a + ', Δy = ' + tr.b + '. PQ = √(' + tr.a + '² + ' + tr.b + '²) = √(' + (tr.a*tr.a+tr.b*tr.b) + ') = ' + tr.c + '.'
    };
  }}
];
