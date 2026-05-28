// math-content-3.js — Flashcards & Questions for Topics 9-13
// Topic 9: Ratio & Rates | Topic 10: Percentages | Topic 11: Algebra Expressions
// Topic 12: Algebra Equations & Sequences | Topic 13: Statistics & Probability

// ─── TOPIC 9: RATIO & RATES ──────────────────────────────────────────────────

FLASHCARDS.push(
  // mi-09-1: Understanding Ratios
  { islandId:'mi-09-1', front:'What is a ratio?', back:'A ratio compares two or more quantities. Written as a:b, a to b, or a/b.' },
  { islandId:'mi-09-1', front:'Simplify the ratio 12:8', back:'Divide both by HCF (4): 12÷4 : 8÷4 = 3:2' },
  { islandId:'mi-09-1', front:'If a ratio is 3:5, what fraction is the first part?', back:'3/(3+5) = 3/8' },

  // mi-09-2: Equivalent Ratios & Scaling
  { islandId:'mi-09-2', front:'How do you find an equivalent ratio?', back:'Multiply or divide both parts by the same number. e.g. 2:3 = 4:6 = 10:15' },
  { islandId:'mi-09-2', front:'A recipe uses 2 cups flour for 3 cups sugar. For 9 cups sugar, how much flour?', back:'Scale factor: 9÷3=3. Flour = 2×3 = 6 cups.' },
  { islandId:'mi-09-2', front:'Divide £60 in the ratio 2:3', back:'Total parts = 5. Each part = £12. Shares: £24 and £36.' },

  // mi-09-3: Rates & Unit Rates
  { islandId:'mi-09-3', front:'What is a unit rate?', back:'A rate with a denominator of 1. e.g. 60 miles per 1 hour = 60 mph.' },
  { islandId:'mi-09-3', front:'A car travels 150 km in 3 hours. What is its speed?', back:'Speed = 150÷3 = 50 km/h' },
  { islandId:'mi-09-3', front:'Which is better value: 400g for £2.00 or 600g for £2.70?', back:'400g: £0.50/100g. 600g: £0.45/100g. 600g is better value.' },

  // mi-09-4: Ratio Problem Solving
  { islandId:'mi-09-4', front:'Tom and Sam share sweets in ratio 4:1. Tom gets 28. How many does Sam get?', back:'1 part = 28÷4 = 7. Sam gets 7 sweets.' },
  { islandId:'mi-09-4', front:'What does "direct proportion" mean?', back:'Two quantities are in direct proportion if they increase/decrease at the same rate.' },
  { islandId:'mi-09-4', front:'If 5 pens cost £3.50, how much do 8 pens cost?', back:'Cost per pen = £3.50÷5 = £0.70. 8 pens = 8×£0.70 = £5.60.' },

  // mi-09-5: Bar Diagram Ratio Problems
  { islandId:'mi-09-5', front:'What is a bar diagram (tape diagram) for ratios?', back:'A visual model where bars of equal size represent ratio parts.\n\nFor ratio 3:2, draw 3 equal bars for one quantity and 2 for the other.\n\nTotal = 5 bars. Each bar = Total ÷ 5.' },
  { islandId:'mi-09-5', front:'Ratio 2:5. Total = 35. Use a bar diagram to find each share.', back:'Draw 2 bars + 5 bars = 7 bars total.\nEach bar = 35 ÷ 7 = 5.\nFirst share = 2 × 5 = 10.\nSecond share = 5 × 5 = 25.\nCheck: 10 + 25 = 35 ✓' },
  { islandId:'mi-09-5', front:'Ratio 4:1. The difference is 24. Find each amount.', back:'Draw 4 bars vs 1 bar. Difference = 4 − 1 = 3 bars.\n3 bars = 24, so 1 bar = 8.\nLarger = 4 × 8 = 32.\nSmaller = 1 × 8 = 8.\nCheck: 32 − 8 = 24 ✓' }
);

// ─── TOPIC 10: PERCENTAGES ───────────────────────────────────────────────────

FLASHCARDS.push(
  // mi-10-1: Understanding Percentages
  { islandId:'mi-10-1', front:'What does "per cent" mean?', back:'"Per cent" means "out of 100". 45% = 45/100 = 0.45.' },
  { islandId:'mi-10-1', front:'Convert 3/8 to a percentage', back:'3÷8 = 0.375. 0.375×100 = 37.5%' },
  { islandId:'mi-10-1', front:'Write 0.07 as a percentage', back:'0.07 × 100 = 7%' },

  // mi-10-2: Finding Percentages of Amounts
  { islandId:'mi-10-2', front:'Find 35% of £240', back:'10% = £24. 35% = 3×£24 + 5% = £72 + £12 = £84.' },
  { islandId:'mi-10-2', front:'What is 17.5% of 80?', back:'10% = 8, 5% = 4, 2.5% = 2. 17.5% = 8+4+2 = 14.' },
  { islandId:'mi-10-2', front:'Find 1% of a quantity. What is it useful for?', back:'1% = amount ÷ 100. Then multiply by any % needed.' },

  // mi-10-3: Percentage Change
  { islandId:'mi-10-3', front:'Formula for percentage increase/decrease', back:'% change = (change ÷ original) × 100' },
  { islandId:'mi-10-3', front:'A price rises from £50 to £65. What is the % increase?', back:'Change = £15. % increase = (15÷50)×100 = 30%' },
  { islandId:'mi-10-3', front:'Apply a 20% discount to £90', back:'Discount = 20% of £90 = £18. New price = £90−£18 = £72.' },

  // mi-10-4: Reverse Percentages & Comparison
  { islandId:'mi-10-4', front:'After 25% increase, price is £125. What was the original?', back:'125% → £125. 1% → £1. 100% → £100.' },
  { islandId:'mi-10-4', front:'Which is larger: 3/8 or 37%?', back:'3/8 = 37.5%. So 3/8 > 37%.' },
  { islandId:'mi-10-4', front:'Express £18 as a % of £72', back:'(18÷72) × 100 = 25%' },

  // mi-10-5: Percent Models & Estimation
  { islandId:'mi-10-5', front:'How does a 10×10 grid model represent percentages?', back:'A 10×10 grid has 100 small squares. Each square = 1%.\n\nShade 35 squares → 35%.\nShade 100 squares → 100% (the whole grid).\n\nUseful for visualising what a percentage looks like.' },
  { islandId:'mi-10-5', front:'How do you use a bar model to find 30% of 80?', back:'Draw a bar for 80. Divide into 10 equal sections (each = 10% = 8).\n\n30% = 3 sections = 3 × 8 = 24.\n\nBar models make it easy to see the relationship between part and whole.' },
  { islandId:'mi-10-5', front:'Estimate 48% of 210.', back:'48% ≈ 50% (half).\n50% of 210 = 105.\n\nSo 48% of 210 ≈ 105.\n\nBenchmarks: 10%=21, 50%=105, 25%=52.5, 1%=2.1.\nExact: 48% = 50% − 2% = 105 − 4.2 = 100.8' }
);

// ─── TOPIC 11: ALGEBRA EXPRESSIONS ──────────────────────────────────────────

FLASHCARDS.push(
  // mi-11-1: Algebraic Notation
  { islandId:'mi-11-1', front:'What does 3n mean?', back:'3 multiplied by n. The number 3 is the coefficient of n.' },
  { islandId:'mi-11-1', front:'Difference between a term, expression, and equation', back:'Term: single part (3x). Expression: terms combined (3x+2). Equation: expression = value (3x+2=8).' },
  { islandId:'mi-11-1', front:'Simplify: a × a × a', back:'a³ (a cubed)' },

  // mi-11-2: Simplifying Expressions
  { islandId:'mi-11-2', front:'Collect like terms: 5x + 3y − 2x + y', back:'(5x−2x) + (3y+y) = 3x + 4y' },
  { islandId:'mi-11-2', front:'Expand: 3(2x − 5)', back:'3×2x − 3×5 = 6x − 15' },
  { islandId:'mi-11-2', front:'Factorise: 12x + 8', back:'HCF of 12 and 8 is 4. Answer: 4(3x + 2).' },

  // mi-11-3: Substitution
  { islandId:'mi-11-3', front:'If x=3, find the value of 4x² − 1', back:'4(3²)−1 = 4(9)−1 = 36−1 = 35' },
  { islandId:'mi-11-3', front:'Given a=2, b=−3: find 2a − b', back:'2(2)−(−3) = 4+3 = 7' },
  { islandId:'mi-11-3', front:'Evaluate p + q² when p=5, q=4', back:'5 + 4² = 5 + 16 = 21' },

  // mi-11-4: Writing & Using Expressions
  { islandId:'mi-11-4', front:'Write an expression: "5 more than triple y"', back:'3y + 5' },
  { islandId:'mi-11-4', front:'A rectangle has length (2x+3) and width 4. Write an expression for its perimeter.', back:'P = 2(2x+3+4) = 2(2x+7) = 4x+14' },
  { islandId:'mi-11-4', front:'Simplify: 2x² + 5x − x² + 3x', back:'(2x²−x²) + (5x+3x) = x² + 8x' },

  // mi-11-5: Properties of Operations
  { islandId:'mi-11-5', front:'What are the commutative properties?', back:'Addition: a + b = b + a (order doesn\'t matter)\nMultiplication: a × b = b × a\n\nExamples: 3 + 7 = 7 + 3 = 10\n4 × 5 = 5 × 4 = 20\n\n⚠️ Subtraction and division are NOT commutative.' },
  { islandId:'mi-11-5', front:'What are the associative properties?', back:'Addition: (a + b) + c = a + (b + c) (grouping doesn\'t matter)\nMultiplication: (a × b) × c = a × (b × c)\n\nExample: (2 + 3) + 4 = 2 + (3 + 4) = 9\n(2 × 3) × 4 = 2 × (3 × 4) = 24' },
  { islandId:'mi-11-5', front:'What are the identity and zero properties?', back:'Additive identity: a + 0 = a (adding 0 changes nothing)\nMultiplicative identity: a × 1 = a (multiplying by 1 changes nothing)\nZero property: a × 0 = 0 (anything times 0 is 0)' }
);

// ─── TOPIC 12: ALGEBRA EQUATIONS & SEQUENCES ────────────────────────────────

FLASHCARDS.push(
  // mi-12-1: Solving One-Step Equations
  { islandId:'mi-12-1', front:'Solve: x + 7 = 15', back:'x = 15 − 7 = 8' },
  { islandId:'mi-12-1', front:'Solve: 4m = 28', back:'m = 28 ÷ 4 = 7' },
  { islandId:'mi-12-1', front:'What does "solving an equation" mean?', back:'Finding the value of the unknown variable that makes the equation true.' },

  // mi-12-2: Solving Two-Step Equations
  { islandId:'mi-12-2', front:'Solve: 3x − 4 = 11', back:'3x = 15, x = 5' },
  { islandId:'mi-12-2', front:'Solve: (x/2) + 3 = 9', back:'x/2 = 6, x = 12' },
  { islandId:'mi-12-2', front:'Why do we do the same operation to both sides of an equation?', back:'To keep the equation balanced — like a set of scales.' },

  // mi-12-3: Number Sequences
  { islandId:'mi-12-3', front:'What is the nth term of the sequence 3, 5, 7, 9, …?', back:'Common difference = 2. nth term = 2n + 1.' },
  { islandId:'mi-12-3', front:'Find the 10th term of: 4n − 3', back:'4(10)−3 = 37' },
  { islandId:'mi-12-3', front:'Is 50 a term in the sequence 3n + 2?', back:'3n+2=50 → 3n=48 → n=16. Yes, it is the 16th term.' },

  // mi-12-4: Formulae & Function Machines
  { islandId:'mi-12-4', front:'Using F=ma, find F when m=5 and a=3', back:'F = 5×3 = 15 (Newtons)' },
  { islandId:'mi-12-4', front:'Rearrange y = 3x − 2 to make x the subject', back:'y+2 = 3x → x = (y+2)/3' },
  { islandId:'mi-12-4', front:'A function machine: input → ×3 → −5 → output. Input=4, find output.', back:'4×3=12. 12−5=7. Output = 7.' },

  // mi-12-5: Expressions vs Equations & Tiles
  { islandId:'mi-12-5', front:'What is the difference between an expression and an equation?', back:'Expression: a mathematical phrase with numbers, variables, and operations (no equals sign).\nExample: 3x + 5\n\nEquation: a statement that two expressions are equal (HAS an equals sign).\nExample: 3x + 5 = 20' },
  { islandId:'mi-12-5', front:'How do algebra tiles represent x + 3 = 7?', back:'Left side: 1 x-tile + 3 unit tiles.\nRight side: 7 unit tiles.\n\nTo solve: remove 3 unit tiles from both sides.\nLeft: 1 x-tile. Right: 4 unit tiles.\nSo x = 4.' },
  { islandId:'mi-12-5', front:'"Tom is 5 years older than Sam. Tom is 17." Write an equation.', back:'Let Sam\'s age = x.\nTom is 5 years older: x + 5.\nTom is 17: x + 5 = 17.\n\nSolve: x = 17 − 5 = 12. Sam is 12.' }
);

// ─── TOPIC 13: STATISTICS & PROBABILITY ─────────────────────────────────────

FLASHCARDS.push(
  // mi-13-1: Averages & Range
  { islandId:'mi-13-1', front:'Define mean, median, and mode', back:'Mean: total÷count. Median: middle value when ordered. Mode: most frequent value.' },
  { islandId:'mi-13-1', front:'Find the median of: 3, 7, 1, 9, 5', back:'Ordered: 1,3,5,7,9. Median = 5.' },
  { islandId:'mi-13-1', front:'What is the range and what does it measure?', back:'Range = largest − smallest. It measures the spread of the data.' },

  // mi-13-2: Charts & Diagrams
  { islandId:'mi-13-2', front:'When is a bar chart more appropriate than a pie chart?', back:'Bar charts compare quantities across categories; pie charts show proportions of a whole.' },
  { islandId:'mi-13-2', front:'What does a frequency table show?', back:'How many times each value or category occurs in a data set.' },
  { islandId:'mi-13-2', front:'What is a stem-and-leaf diagram used for?', back:'Displaying individual data values while also showing distribution and shape of data.' },

  // mi-13-3: Probability Basics
  { islandId:'mi-13-3', front:'What is the probability scale?', back:'Runs from 0 (impossible) to 1 (certain). Probabilities are fractions, decimals, or percentages.' },
  { islandId:'mi-13-3', front:'A bag has 3 red and 5 blue balls. P(red) = ?', back:'P(red) = 3/(3+5) = 3/8' },
  { islandId:'mi-13-3', front:'What are complementary events?', back:'Two events where one must happen. P(A) + P(not A) = 1.' },

  // mi-13-4: Data Analysis & Interpretation
  { islandId:'mi-13-4', front:'What is the difference between primary and secondary data?', back:'Primary: collected by you (survey). Secondary: collected by others (census data).' },
  { islandId:'mi-13-4', front:'What does an outlier do to the mean?', back:'An outlier pulls the mean towards it, making it less representative of the data.' },
  { islandId:'mi-13-4', front:'What is a two-way table used for?', back:'Organising and comparing data across two variables at once.' },

  // mi-13-5: Data Displays & Graph Types
  { islandId:'mi-13-5', front:'What must a pictogram always include?', back:'A key showing what each symbol represents (e.g. ★ = 4 items). Half symbols represent half the key value.' },
  { islandId:'mi-13-5', front:'When should you use a double bar graph?', back:'When comparing the same categories across two groups or time periods (e.g. boys vs girls in each sport).' },
  { islandId:'mi-13-5', front:'What is the class width in a grouped frequency table?', back:'The range of values each group covers. For 0–9, 10–19, 20–29 the class width is 10.' },

  // mi-13-6: Sampling, Bias & Distributions
  { islandId:'mi-13-6', front:'What is the difference between a statistical and a non-statistical question?', back:'A statistical question expects variability in the answers (e.g. "How tall are Year 7 students?"). A non-statistical question has one fixed answer (e.g. "How tall is the Eiffel Tower?").' },
  { islandId:'mi-13-6', front:'What makes a sample biased?', back:'A sample is biased if it does not fairly represent the whole population — e.g. surveying only your friends about a school policy.' },
  { islandId:'mi-13-6', front:'What is an outlier?', back:'A value that is much higher or much lower than the rest of the data. Outliers can distort the mean and increase the range.' },

  // mi-13-7: Combined & Predicted Probability
  { islandId:'mi-13-7', front:'What are mutually exclusive events?', back:'Events that cannot happen at the same time. P(A or B) = P(A) + P(B). Example: rolling a 2 or a 5 on one die.' },
  { islandId:'mi-13-7', front:'How do you make a prediction using theoretical probability?', back:'Multiply the probability by the number of trials. E.g. P(heads) = 0.5, flip 200 times → expect about 100 heads.' },
  { islandId:'mi-13-7', front:'What is experimental probability?', back:'Probability based on actual results: P(event) = number of times event occurred ÷ total trials. It approaches theoretical probability with more trials.' },

  // mi-13-8: Scatter Graphs & Bivariate Data
  { islandId:'mi-13-8', front:'What is a scatter graph used for?', back:'A scatter graph shows the relationship between two variables. Each data point is plotted as a cross or dot. It helps identify correlation (positive, negative, or none).' },
  { islandId:'mi-13-8', front:'Describe the three types of correlation.', back:'Positive: as one variable increases, so does the other (points slope upwards).\nNegative: as one variable increases, the other decreases (points slope downwards).\nNone: no clear pattern between the variables.' },
  { islandId:'mi-13-8', front:'What is a line of best fit?', back:'A straight line drawn through the middle of the data points on a scatter graph. It should have roughly equal numbers of points above and below. Used to estimate (interpolate or extrapolate) values.' },

  // mi-13-9: Venn Diagrams for Probability
  { islandId:'mi-13-9', front:'What does the intersection (A ∩ B) mean on a Venn diagram?', back:'The overlap region — elements that are in BOTH set A AND set B.' },
  { islandId:'mi-13-9', front:'What does the union (A ∪ B) mean?', back:'Everything in set A OR set B OR both. It is the entire area covered by both circles on the Venn diagram.' },
  { islandId:'mi-13-9', front:'30 students: 18 play football, 10 play tennis, 5 play both. How many play neither?', back:'Football only = 18 − 5 = 13\nTennis only = 10 − 5 = 5\nBoth = 5\nTotal playing = 13 + 5 + 5 = 23\nNeither = 30 − 23 = 7' }
);

// ─── QUESTIONS ────────────────────────────────────────────────────────────────

Object.assign(QUESTIONS, {

  // ── mi-09-1: Understanding Ratios ──────────────────────────────────────────
  'mi-09-1': [
    { gen: function() {
        var f = pickFrom([2,3,4,5]), a = f*randInt(2,5), b = f*randInt(2,5);
        while(a===b) b=f*randInt(2,5);
        function gcd(x,y){return y?gcd(y,x%y):x;}
        var g=gcd(a,b), sA=a/g, sB=b/g;
        var opts = buildOpts(sA+':'+sB, [a+':'+b, sB+':'+sA, (sA+1)+':'+(sB+1)]);
        return { q: 'Simplify the ratio ' + a + ':' + b,
                 opts: opts, c: 0,
                 e: 'HCF('+a+','+b+')='+g+'. '+a+'÷'+g+'='+sA+'; '+b+'÷'+g+'='+sB+'. Simplified: '+sA+':'+sB+'.' };
    }},
    { gen: function() {
        var f = pickFrom([2,3,4,5]), a = f*randInt(2,5), b = f*randInt(2,5);
        while(a===b) b=f*randInt(2,5);
        function gcd(x,y){return y?gcd(y,x%y):x;}
        var g=gcd(a,b), sA=a/g, sB=b/g;
        var total = sA+sB;
        var ans = sA+'/'+total;
        var opts = buildOpts(ans, [sA+'/'+sB, sB+'/'+total, sA+'/'+(total+1)]);
        return { q: 'Write the ratio '+sA+':'+sB+' as a fraction of the first part to the total.',
                 opts: opts, c: 0,
                 e: 'Total parts = '+sA+'+'+sB+'='+total+'. First part fraction = '+ans+'.' };
    }},
    { question:'Which ratio is equivalent to 4:6?', options:['2:4','2:3','8:10','6:9'], answer:1, explanation:'4:6 simplified by dividing by 2 = 2:3.' },
    { question:'A class has 12 boys and 18 girls. Write the ratio of boys to girls in simplest form.', options:['12:18','2:3','3:2','6:9'], answer:1, explanation:'HCF=6. 12:18 = 2:3.' },
    { question:'In a ratio 5:3, the larger quantity is 40. What is the smaller?', options:['24','30','8','16'], answer:0, explanation:'1 part = 40÷5 = 8. Smaller = 3×8 = 24.' },
    { question:'Orange juice and lemonade are mixed in ratio 3:2. How much orange is in 500ml total?', options:['200ml','250ml','300ml','150ml'], answer:2, explanation:'3/5 × 500 = 300ml orange juice.' },
    { question:'Divide 56 in ratio 3:5.', options:['21 and 35','24 and 32','28 and 28','14 and 42'], answer:0, explanation:'8 parts total. 1 part=7. 3×7=21, 5×7=35.' },
    { question:'A map uses scale 1:50,000. A road is 4cm on the map. How long is the real road?', options:['2km','4km','20km','200km'], answer:0, explanation:'4 × 50,000 = 200,000 cm = 2 km.' },
    { question:'The ratio of red to blue to green counters is 2:3:5. What percentage are green?', options:['50%','30%','20%','25%'], answer:0, explanation:'Total = 10 parts. Green = 5 parts. 5/10 = 50%.' },
    { question:'Sarah, Tom and Lily share £180 in ratio 2:3:4. How much does Tom receive?', options:['£40','£60','£80','£20'], answer:1, explanation:'9 parts total. 1 part = £20. Tom = 3×£20 = £60.' }
  ],

  // ── mi-09-2: Equivalent Ratios & Scaling ───────────────────────────────────
  'mi-09-2': [
    { question:'Which pair shows equivalent ratios?', options:['3:4 and 6:10','2:5 and 4:10','1:3 and 2:5','4:6 and 6:10'], answer:1, explanation:'2:5 multiplied by 2 = 4:10.' },
    { gen: function() {
        // Pre-compute clean splits so total ÷ parts is always an integer
        var combos = [
          {total:40,a:1,b:3},{total:40,a:1,b:4},{total:40,a:3,b:5},
          {total:60,a:1,b:2},{total:60,a:1,b:3},{total:60,a:1,b:4},{total:60,a:2,b:3},
          {total:80,a:1,b:3},{total:80,a:3,b:5},
          {total:100,a:1,b:4},{total:100,a:2,b:3},{total:100,a:3,b:7},
          {total:120,a:1,b:2},{total:120,a:1,b:3},{total:120,a:1,b:5},{total:120,a:2,b:3},
          {total:150,a:1,b:2},{total:150,a:2,b:3}
        ];
        var c = pickFrom(combos);
        var total=c.total, a=c.a, b=c.b;
        var parts = a+b, perPart = total/parts, shareA = a*perPart, shareB = b*perPart;
        var opts = buildOpts('£'+shareA+' and £'+shareB, ['£'+shareB+' and £'+shareA, '£'+total/2+' and £'+total/2, '£'+(a*total/10)+' and £'+(b*total/10)]);
        return { q: 'Divide £'+total+' in the ratio '+a+':'+b+'.',
                 opts: opts, c: 0,
                 e: 'Total parts: '+parts+'. Each part: £'+perPart+'. Shares: £'+shareA+' and £'+shareB+'.' };
    }},
    { gen: function() {
        var servings = pickFrom([4,5,6]), amount = pickFrom([200,250,300,400,500]);
        var newServings = servings * pickFrom([2,3]);
        var ans = amount * newServings / servings;
        var opts = buildOpts(ans+'g', [(ans-50)+'g', (ans+50)+'g', (amount*2)+'g']);
        return { q: 'A recipe for '+servings+' servings needs '+amount+'g flour. How much for '+newServings+' servings?',
                 opts: opts, c: 0,
                 e: 'Scale = '+newServings+'/'+servings+' = '+(newServings/servings)+'. '+amount+'×'+(newServings/servings)+' = '+ans+'g.' };
    }},
    { question:'Find the missing value: 5:8 = ?:40', options:['20','25','15','32'], answer:1, explanation:'8×5=40, so multiply by 5. 5×5=25.' },
    { gen: function() {
        var total = pickFrom([40,60,80,100,120,150]);
        var a = pickFrom([1,2,3]), b = pickFrom([2,3,4]);
        while(a===b) b=pickFrom([2,3,4]);
        var parts = a+b, shareA = Math.round(total*a/parts), shareB = total-shareA;
        var opts = buildOpts(shareA+' and '+shareB, [shareB+' and '+shareA, total/2+' and '+total/2, (shareA+5)+' and '+(shareB-5)]);
        return { q: 'Divide '+total+' in ratio '+a+':'+b+'.',
                 opts: opts, c: 0,
                 e: parts+' parts. 1 part='+total/parts+'. Shares: '+shareA+' and '+shareB+'.' };
    }},
    { question:'A model car is made to scale 1:20. The model is 15cm long. How long is the real car?', options:['30cm','150cm','300cm','3m'], answer:2, explanation:'15 × 20 = 300cm = 3m.' },
    { question:'Juice concentrate to water ratio is 1:4. How much water is needed with 250ml concentrate?', options:['500ml','750ml','1000ml','1250ml'], answer:2, explanation:'Water = 4×250 = 1000ml.' },
    { question:'Two numbers are in ratio 3:5. The smaller is 27. What is the larger?', options:['35','40','45','50'], answer:2, explanation:'1 part = 9. Larger = 5×9 = 45.' },
    { question:'A map is drawn at 1:25,000. Two towns are 8cm apart on the map. What is the real distance in km?', options:['2km','25km','200km','0.2km'], answer:0, explanation:'8 × 25,000 = 200,000cm = 2km.' },
    { question:'Three friends invest in ratio 2:3:5. The total investment is £2,000. How much does the person with the largest share invest?', options:['£400','£600','£1,000','£800'], answer:2, explanation:'10 parts = £2,000. 1 part = £200. Largest = 5×£200 = £1,000.' }
  ],

  // ── mi-09-3: Rates & Unit Rates ────────────────────────────────────────────
  'mi-09-3': [
    { gen: function() {
        var speed = pickFrom([40,50,60,80,100]), time = randInt(2,5);
        var dist = speed*time;
        var opts = buildOpts(speed+' km/h', [(speed+10)+' km/h', (dist/time/2).toFixed(0)+' km/h', (speed-10)+' km/h']);
        return { q: 'A car travels '+dist+' km in '+time+' hours. What is its average speed?',
                 opts: opts, c: 0,
                 e: 'Speed = distance ÷ time = '+dist+' ÷ '+time+' = '+speed+' km/h.' };
    }},
    { question:'Which is better value: 250g for £1.50 or 400g for £2.20?', options:['250g','400g','Same','Cannot tell'], answer:1, explanation:'250g: 60p/100g. 400g: 55p/100g. 400g is better value.' },
    { question:'A worker earns £84 for 7 hours. What is the hourly rate?', options:['£10/h','£11/h','£12/h','£14/h'], answer:2, explanation:'£84÷7 = £12 per hour.' },
    { question:'5 notebooks cost £6.25. What do 8 cost?', options:['£8.00','£9.00','£10.00','£12.50'], answer:2, explanation:'£6.25÷5 = £1.25 each. 8×£1.25 = £10.00.' },
    { question:'A tap fills 3 litres every 5 minutes. How long to fill 24 litres?', options:['30 min','35 min','40 min','45 min'], answer:2, explanation:'Rate = 3/5 L/min. Time = 24÷(3/5) = 24×5/3 = 40 min.' },
    { question:'A train covers 180km in 2.5 hours. Find its speed in km/h.', options:['60km/h','72km/h','80km/h','90km/h'], answer:1, explanation:'180÷2.5 = 72 km/h.' },
    { question:'Jan types 240 words in 6 minutes and Kim types 350 words in 7 minutes. Who is faster?', options:['Jan','Kim','Same speed','Cannot tell'], answer:1, explanation:'Jan: 40 wpm. Kim: 50 wpm. Kim is faster.' },
    { question:'A cyclist travels at 15km/h. How far in 2.5 hours?', options:['30km','35km','37.5km','40km'], answer:2, explanation:'Distance = 15×2.5 = 37.5 km.' },
    { question:'Shop A: 3 for £1.50. Shop B: 5 for £2.20. Which shop gives the better unit price?', options:['Shop A','Shop B','Same','Depends on quantity'], answer:1, explanation:'A: 50p each. B: 44p each. Shop B is cheaper per item.' },
    { question:'A recipe needs 400g of pasta for 5 people. A chef needs to serve 35 people. How much pasta is needed?', options:['2,400g','2,600g','2,800g','3,000g'], answer:2, explanation:'Scale = 35÷5 = 7. 400×7 = 2,800g.' }
  ],

  // ── mi-09-4: Ratio Problem Solving ─────────────────────────────────────────
  'mi-09-4': [
    { gen: function() {
        var unit = randInt(2,8), ratio = pickFrom([2,3,4,5]), total = unit*(ratio+1);
        var opts = buildOpts(unit, [unit+1, unit*2, ratio]);
        return { q: 'Two friends share '+total+' items in the ratio '+ratio+':1. The larger share is '+unit*ratio+'. What is the smaller share?',
                 opts: opts, c: 0,
                 e: '1 part = '+unit*ratio+'÷'+ratio+' = '+unit+'. Smaller share = '+unit+'.' };
    }},
    { gen: function() {
        var k = randInt(2,8), x1 = randInt(2,6), y1 = k*x1, x2 = randInt(2,9);
        while(x2===x1) x2=randInt(2,9);
        var ans = k*x2;
        var opts = buildOpts(ans, [ans+k, ans-k, x2+y1]);
        return { q: 'y is directly proportional to x. When x='+x1+', y='+y1+'. Find y when x='+x2+'.',
                 opts: opts, c: 0,
                 e: 'k='+y1+'/'+x1+'='+k+'. y='+k+'x. When x='+x2+': y='+k+'×'+x2+'='+ans+'.' };
    }},
    { question:'A and B share money in ratio 3:4. A gets £45. What is the total?', options:['£60','£80','£100','£105'], answer:3, explanation:'1 part=£15. Total parts=7. Total=7×£15=£105.' },
    { question:'The angles in a triangle are in ratio 2:3:7. Find the largest angle.', options:['60°','90°','105°','126°'], answer:2, explanation:'2+3+7=12 parts. 180÷12=15° per part. Largest=7×15°=105°.' },
    { question:'A picture is enlarged so all lengths increase in ratio 3:8. Original width=12cm. New width=?', options:['24cm','32cm','36cm','48cm'], answer:1, explanation:'Scale factor=8/3. New width=12×(8/3)=32cm.' },
    { question:'Paint is mixed red:white = 1:3. How much red is needed to make 2 litres of pink paint?', options:['0.4L','0.5L','0.6L','1.0L'], answer:1, explanation:'Red = 1/4 of total. 1/4 × 2 = 0.5 litres.' },
    { question:'If y ∝ x and y=30 when x=6, find x when y=45.', options:['7','8','9','10'], answer:2, explanation:'k=30/6=5. 45=5x → x=9.' },
    { question:'Two metals are alloyed in ratio 5:3. The alloy weighs 400g. How much of the heavier metal?', options:['150g','200g','250g','300g'], answer:2, explanation:'8 parts=400g. 1 part=50g. Heavier (5 parts)=250g.' },
    { question:'A car uses 6 litres of fuel per 100km. At this rate, how many litres for 350km?', options:['18L','19L','21L','24L'], answer:2, explanation:'6/100 × 350 = 21 litres.' },
    { question:'Three taps can fill a pool in 4 hours. At the same rate, how long would 6 taps take?', options:['1h','2h','3h','8h'], answer:1, explanation:'Inverse proportion. 3×4=6×t. t=12/6=2 hours.' }
  ],

  // ── mi-09-5: Bar Diagram Ratio Problems ───────────────────────────────────
  'mi-09-5': [
    { gen: function() {
        var a = randInt(2,5), b = randInt(1,4);
        while(a===b) b=randInt(1,4);
        var parts = a + b;
        var bar = randInt(3,8);
        var total = parts * bar;
        var shareA = a * bar, shareB = b * bar;
        var opts = buildOpts(shareA + ' and ' + shareB, [shareB + ' and ' + shareA, (shareA+1) + ' and ' + (shareB-1), total + ' and ' + bar]);
        return { q: 'Share ' + total + ' in the ratio ' + a + ':' + b + ' using a bar diagram. What are the two shares?',
                 opts: opts, c: 0,
                 e: 'Total parts = ' + a + '+' + b + ' = ' + parts + '. One bar = ' + total + '÷' + parts + ' = ' + bar + '. Shares: ' + a + '×' + bar + '=' + shareA + ' and ' + b + '×' + bar + '=' + shareB + '.' };
    }},
    { gen: function() {
        var a = randInt(3,6), b = randInt(1,a-1);
        var diff = a - b;
        var bar = randInt(2,8);
        var diffVal = diff * bar;
        var ans = a * bar;
        var opts = buildOpts(ans, [b*bar, (a+b)*bar, diffVal]);
        return { q: 'Two amounts are in ratio ' + a + ':' + b + '. The difference between them is ' + diffVal + '. Use a bar diagram to find the larger amount.',
                 opts: opts, c: 0,
                 e: 'Difference = ' + a + '−' + b + ' = ' + diff + ' parts. 1 part = ' + diffVal + '÷' + diff + ' = ' + bar + '. Larger = ' + a + '×' + bar + ' = ' + ans + '.' };
    }},
    { gen: function() {
        var a = randInt(2,5), b = randInt(1,4);
        while(a===b) b=randInt(1,4);
        var bar = randInt(4,10);
        var total = (a+b)*bar;
        var ans = b * bar;
        var opts = buildOpts(ans, [a*bar, total, bar]);
        return { q: 'A bar diagram shows ' + a + ' bars for red beads and ' + b + ' bars for blue beads. There are ' + total + ' beads in total. How many blue beads?',
                 opts: opts, c: 0,
                 e: 'Total bars = ' + (a+b) + '. Each bar = ' + total + '÷' + (a+b) + ' = ' + bar + '. Blue = ' + b + '×' + bar + ' = ' + ans + '.' };
    }},
    { gen: function() {
        var a = randInt(2,4), b = randInt(1,3), c = randInt(1,3);
        var parts = a + b + c;
        var bar = randInt(2,6);
        var total = parts * bar;
        var largest = Math.max(a,b,c) * bar;
        var opts = buildOpts(largest, [(a+1)*bar, parts*bar, bar]);
        return { q: 'Three friends share £' + total + ' in ratio ' + a + ':' + b + ':' + c + '. Draw a bar diagram. What is the largest share?',
                 opts: opts, c: 0,
                 e: 'Total parts = ' + parts + '. 1 part = £' + total + '÷' + parts + ' = £' + bar + '. Largest ratio part = ' + Math.max(a,b,c) + '. Largest share = ' + Math.max(a,b,c) + '×£' + bar + ' = £' + largest + '.' };
    }},
    { gen: function() {
        var a = randInt(2,5), b = randInt(1,4);
        while(a===b) b=randInt(1,4);
        var bar = randInt(5,10);
        var shareA = a * bar;
        var ans = (a+b)*bar;
        var opts = buildOpts(ans, [shareA + b*bar + bar, a*b*bar, shareA]);
        return { q: 'In a bar diagram, the first quantity has ' + a + ' bars and equals ' + shareA + '. The ratio is ' + a + ':' + b + '. What is the total?',
                 opts: opts, c: 0,
                 e: '1 bar = ' + shareA + '÷' + a + ' = ' + bar + '. Second quantity = ' + b + '×' + bar + ' = ' + b*bar + '. Total = ' + shareA + '+' + b*bar + ' = ' + ans + '.' };
    }},
    { question:'A bar diagram shows ratio 3:7. The smaller part is 15. What is the total?', options:['35','50','70','105'], answer:1, explanation:'3 parts = 15. 1 part = 5. Total = 10 parts = 50.' },
    { question:'Ratio of boys to girls is 5:3. There are 40 students. A bar diagram has 8 bars total. How many girls?', options:['15','20','24','25'], answer:0, explanation:'8 bars = 40 students. 1 bar = 5. Girls = 3 bars = 15.' },
    { question:'A bar diagram for ratio 2:5 shows the difference is 12. What is the total?', options:['20','24','28','36'], answer:2, explanation:'Difference = 5−2 = 3 parts = 12. 1 part = 4. Total = 7 parts = 28.' },
    { question:'Juice and water mixed in ratio 1:4. Total = 500 ml. How much water?', options:['100 ml','125 ml','375 ml','400 ml'], answer:3, explanation:'5 bars = 500 ml. 1 bar = 100 ml. Water = 4 bars = 400 ml.' },
    { question:'A bar diagram has 6 equal bars for cats and 2 for dogs. There are 24 cats. How many dogs?', options:['4','6','8','12'], answer:2, explanation:'6 bars = 24 cats. 1 bar = 4. Dogs = 2 bars = 8.' }
  ],

  // ── mi-10-1: Understanding Percentages ─────────────────────────────────────
  'mi-10-1': [
    { question:'Write 45% as a decimal.', options:['4.5','0.45','0.045','45'], answer:1, explanation:'Divide by 100: 45÷100=0.45.' },
    { gen: function() {
        var denoms = [4,5,8,10,20,25]; var d = pickFrom(denoms);
        var n = randInt(1,d-1);
        var ans = parseFloat((n/d*100).toFixed(1));
        var opts = buildOpts(ans+'%', [(n*d)+'%', (n+d)+'%', parseFloat((ans+5).toFixed(1))+'%']);
        return { q: 'Convert ' + n+'/'+d + ' to a percentage.',
                 opts: opts, c: 0,
                 e: n+'÷'+d+'='+parseFloat((n/d).toFixed(4))+'. ×100 = '+ans+'%.' };
    }},
    { question:'Which is largest: 0.6, 58%, or 3/5?', options:['0.6','58%','3/5','All equal'], answer:0, explanation:'0.6=60%, 3/5=60%, 58%=58%. 0.6 and 3/5 are both 60%, which is larger than 58%. 0.6 is one of the largest values.' },
    { question:'Write 130% as a decimal.', options:['1.3','13','0.13','130'], answer:0, explanation:'130÷100=1.3.' },
    { gen: function() {
        var denoms = [4,5,8,10,20,25]; var d = pickFrom(denoms);
        var n = randInt(1,d-1);
        var ans = parseFloat((n/d*100).toFixed(1));
        var opts = buildOpts(ans+'%', [(n*d)+'%', parseFloat((ans-5).toFixed(1))+'%', parseFloat((ans+10).toFixed(1))+'%']);
        return { q: 'What percentage is equivalent to '+n+'/'+d+'?',
                 opts: opts, c: 0,
                 e: n+'÷'+d+'='+parseFloat((n/d).toFixed(4))+'. ×100 = '+ans+'%.' };
    }},
    { question:'Order from smallest to largest: 2/5, 45%, 0.39', options:['0.39, 2/5, 45%','2/5, 0.39, 45%','45%, 2/5, 0.39','0.39, 45%, 2/5'], answer:0, explanation:'2/5=40%, 45%=45%, 0.39=39%. Order: 0.39, 2/5, 45%.' },
    { question:'Express 72 out of 200 as a percentage.', options:['36%','72%','28%','14.4%'], answer:0, explanation:'72/200=0.36=36%.' },
    { question:'Convert 0.625 to a percentage and then a fraction in lowest terms.', options:['62.5% = 5/8','62.5% = 62.5/100','6.25% = 1/16','625% = 25/4'], answer:0, explanation:'0.625×100=62.5%. 62.5/100=625/1000=5/8.' },
    { question:'Which is equivalent to 12.5%?', options:['1/9','1/8','12/50','1/4'], answer:1, explanation:'12.5%=12.5/100=1/8.' },
    { question:'A survey of 400 students: 110 walk to school. What percentage is this?', options:['22.5%','27.5%','25%','11%'], answer:1, explanation:'110/400=0.275=27.5%.' }
  ],

  // ── mi-10-2: Finding Percentages of Amounts ────────────────────────────────
  'mi-10-2': [
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var vatTotal = base + ans;
        var opts = buildOpts('£'+vatTotal, ['£'+ans, '£'+(base+pct), '£'+(vatTotal+pct)]);
        return { q: 'A shirt costs £'+base+'. VAT at '+pct+'% is added. What is the total price?',
                 opts: opts, c: 0,
                 e: pct+'% of £'+base+'=£'+ans+'. Total=£'+base+'+£'+ans+'=£'+vatTotal+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,25,50,75]);
        var classSize = pickFrom([20,24,28,32,40]);
        var ans = pct*classSize/100;
        var opts = buildOpts(ans, [ans+2, ans-2, classSize-ans]);
        return { q: 'In a class of '+classSize+' students, '+pct+'% pass a test. How many pass?',
                 opts: opts, c: 0,
                 e: pct+'% of '+classSize+' = '+pct+'/100 × '+classSize+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,15,20,25,30,35,40,50,60,75]);
        var base = pickFrom([80,100,120,150,200,250,300,400,500]);
        var ans = pct*base/100;
        var opts = buildOpts(ans, [pct+base, pct*base, ans*2]);
        return { q: 'What is ' + pct + '% of ' + base + '?',
                 opts: opts, c: 0,
                 e: pct+'% of '+base+' = '+pct+'/100 × '+base+' = '+ans+'.' };
    }}
  ],

  // ── mi-10-3: Percentage Change ─────────────────────────────────────────────
  'mi-10-3': [
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,200]);
        var newVal = orig + pickFrom([5,8,10,12,15,20,25,30]);
        var change = newVal-orig;
        var ans = parseFloat((change/orig*100).toFixed(1));
        var opts = buildOpts(ans+'%', [parseFloat((change/newVal*100).toFixed(1))+'%', change+'%', (ans+5)+'%']);
        return { q: 'A price rises from £'+orig+' to £'+newVal+'. What is the percentage increase?',
                 opts: opts, c: 0,
                 e: 'Change = £'+change+'. % increase = '+change+'/'+orig+' × 100 = '+ans+'%.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,200]);
        var newVal = orig - pickFrom([5,8,10,12,15,20,25,30]);
        var change = orig-newVal;
        var ans = parseFloat((change/orig*100).toFixed(1));
        var opts = buildOpts(ans+'%', [parseFloat((change/newVal*100).toFixed(1))+'%', change+'%', (ans+5)+'%']);
        return { q: 'A price falls from £'+orig+' to £'+newVal+'. What is the percentage decrease?',
                 opts: opts, c: 0,
                 e: 'Change = £'+change+'. % decrease = '+change+'/'+orig+' × 100 = '+ans+'%.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,150,200]);
        var pct = pickFrom([10,15,20,25,30,50]);
        var change = orig*pct/100;
        var newVal = orig + change;
        var opts = buildOpts('£'+newVal, ['£'+change, '£'+(orig-change), '£'+(orig+pct)]);
        return { q: 'Apply a ' + pct + '% increase to £' + orig + '.',
                 opts: opts, c: 0,
                 e: pct+'% of £'+orig+' = £'+change+'. New price = £'+orig+' + £'+change+' = £'+newVal+'.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,200]);
        var newVal = orig + pickFrom([5,8,10,12,15,20,25,30]);
        var change = newVal-orig;
        var ans = parseFloat((change/orig*100).toFixed(1));
        var opts = buildOpts(ans+'%', [parseFloat((change/newVal*100).toFixed(1))+'%', change+'%', (ans+5)+'%']);
        return { q: 'A quantity grows from '+orig+' to '+newVal+'. What is the percentage increase?',
                 opts: opts, c: 0,
                 e: 'Change = '+change+'. % increase = '+change+'/'+orig+' × 100 = '+ans+'%.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,150,200]);
        var pct = pickFrom([10,15,20,25,30,50]);
        var change = orig*pct/100;
        var newVal = orig - change;
        var opts = buildOpts('£'+newVal, ['£'+change, '£'+(orig+change), '£'+(orig-pct)]);
        return { q: 'Apply a ' + pct + '% discount to £' + orig + '.',
                 opts: opts, c: 0,
                 e: 'Discount = '+pct+'% of £'+orig+' = £'+change+'. New price = £'+orig+' − £'+change+' = £'+newVal+'.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,200]);
        var newVal = orig + pickFrom([5,8,10,12,15,20,25,30]);
        var change = newVal-orig;
        var ans = parseFloat((change/orig*100).toFixed(1));
        var opts = buildOpts(ans+'%', [parseFloat((change/newVal*100).toFixed(1))+'%', change+'%', (ans+5)+'%']);
        return { q: 'A price rises from £'+orig+' to £'+newVal+'. What is the percentage increase?',
                 opts: opts, c: 0,
                 e: 'Change = £'+change+'. % increase = '+change+'/'+orig+' × 100 = '+ans+'%.' };
    }},
    { question:'What is the multiplier for a 35% increase?', options:['0.65','0.35','1.35','3.5'], answer:2, explanation:'Multiplier = 1 + 0.35 = 1.35.' },
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,200]);
        var newVal = orig - pickFrom([5,8,10,12,15,20,25,30]);
        var change = orig-newVal;
        var ans = parseFloat((change/orig*100).toFixed(1));
        var opts = buildOpts(ans+'%', [parseFloat((change/newVal*100).toFixed(1))+'%', change+'%', (ans+5)+'%']);
        return { q: 'A value falls from '+orig+' to '+newVal+'. Find the percentage decrease.',
                 opts: opts, c: 0,
                 e: 'Change = '+change+'. % decrease = '+change+'/'+orig+' × 100 = '+ans+'%.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,150,200]);
        var pct = pickFrom([10,15,20,25,30,50]);
        var change = orig*pct/100;
        var newVal = orig - change;
        var opts = buildOpts('£'+newVal, ['£'+change, '£'+(orig+change), '£'+(orig-pct)]);
        return { q: 'An item costs £'+orig+'. It is reduced by '+pct+'%. What is the new price?',
                 opts: opts, c: 0,
                 e: pct+'% of £'+orig+' = £'+change+'. New price = £'+orig+' − £'+change+' = £'+newVal+'.' };
    }},
    { question:'Over two years, a house increased by 10% then by 10% again. What is the total % increase?', options:['20%','21%','22%','25%'], answer:1, explanation:'After yr1: ×1.1. After yr2: ×1.1 again. Total=1.21×original=21% increase.' }
  ],

  // ── mi-10-4: Reverse Percentages & Comparison ──────────────────────────────
  'mi-10-4': [
    { gen: function() {
        var pct = pickFrom([10,20,25,50]); var result = pickFrom([80,90,100,120,150]);
        var orig = result*100/(100+pct);
        var opts = buildOpts('£'+orig, ['£'+(result-pct), '£'+result*pct/100, '£'+(orig+pct)]);
        return { q: 'After a ' + pct + '% increase, a price is £'+result+'. What was the original price?',
                 opts: opts, c: 0,
                 e: (100+pct)+'% → £'+result+'. 1% → £'+(result/(100+pct)).toFixed(2)+'. 100% → £'+orig+'.' };
    }},
    { gen: function() {
        // Pre-compute clean (pct, result) pairs so original is always a whole number
        var combos = [
          {pct:10, result:72, orig:80},  {pct:10, result:81, orig:90},   {pct:10, result:90, orig:100},
          {pct:10, result:108, orig:120},{pct:10, result:135, orig:150},
          {pct:20, result:64, orig:80},  {pct:20, result:72, orig:90},   {pct:20, result:80, orig:100},
          {pct:20, result:96, orig:120}, {pct:20, result:120, orig:150},
          {pct:25, result:60, orig:80},  {pct:25, result:75, orig:100},  {pct:25, result:90, orig:120},
          {pct:50, result:40, orig:80},  {pct:50, result:50, orig:100},  {pct:50, result:75, orig:150}
        ];
        var c = pickFrom(combos);
        var pct=c.pct, result=c.result, orig=c.orig;
        var opts = buildOpts('£'+orig, ['£'+(result+pct), '£'+result*pct/100, '£'+(orig+pct)]);
        return { q: 'After a ' + pct + '% reduction, a price is £'+result+'. What was the original price?',
                 opts: opts, c: 0,
                 e: (100-pct)+'% → £'+result+'. 1% → £'+(result/(100-pct)).toFixed(2)+'. 100% → £'+orig+'.' };
    }},
    { question:'Which deal gives the biggest saving? A: 20% off £45 B: 25% off £50 C: £8 off £36', options:['A','B','C','All the same'], answer:1, explanation:'A saves: 20% of £45 = £9. B saves: 25% of £50 = £12.50. C saves: £8. Biggest saving is B (£12.50).' },
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,150,200]);
        var pct = pickFrom([10,15,20,25,30,50]);
        var change = orig*pct/100;
        var newVal = orig - change;
        var opts = buildOpts(pct+'%', [(pct+5)+'%', (pct-5)+'%', change+'%']);
        return { q: 'A sale ticket says "Was £'+orig+', Now £'+newVal+'". What % off is this?',
                 opts: opts, c: 0,
                 e: 'Saving=£'+change+'. %=('+change+'/'+orig+')×100='+pct+'%.' };
    }},
    { gen: function() {
        var pct = pickFrom([10,20,25,50]); var result = pickFrom([80,90,100,120,150,200]);
        var orig = result*100/(100+pct);
        var opts = buildOpts(orig, [result-pct, result*pct/100, orig+pct]);
        return { q: 'After a '+pct+'% increase, a value is '+result+'. What was the original?',
                 opts: opts, c: 0,
                 e: (100+pct)+'% = '+result+'. 1% = '+(result/(100+pct)).toFixed(2)+'. 100% = '+orig+'.' };
    }},
    { question:'Rank from best to worst value: 2/5 off, 35% off, 0.38 off', options:['2/5, 0.38, 35%','2/5, 35%, 0.38','35%, 2/5, 0.38','0.38, 2/5, 35%'], answer:0, explanation:'2/5=40%, 0.38=38%, 35%=35%. Best to worst: 40%, 38%, 35%.' },
    { gen: function() {
        var pct = pickFrom([10,20,25,50]); var result = pickFrom([80,90,100,120,150]);
        var orig = result*100/(100+pct);
        var opts = buildOpts('£'+orig, ['£'+(result-pct), '£'+result*pct/100, '£'+(orig+pct)]);
        return { q: 'After a ' + pct + '% increase, a price is £'+result+'. What was the original price?',
                 opts: opts, c: 0,
                 e: (100+pct)+'% → £'+result+'. 1% → £'+(result/(100+pct)).toFixed(2)+'. 100% → £'+orig+'.' };
    }},
    { gen: function() {
        var total = pickFrom([80,100,120,150,200,250,400]);
        var frac = pickFrom([0.1,0.2,0.25,0.3,0.4,0.5]);
        var part = total*frac;
        var ans = parseFloat((part/total*100).toFixed(1));
        var opts = buildOpts(ans+'%', [(ans+5)+'%', (ans-5)+'%', (part/10)+'%']);
        return { q: 'Express '+part+' as a percentage of '+total+'.',
                 opts: opts, c: 0,
                 e: '('+part+'÷'+total+')×100 = '+ans+'%.' };
    }},
    { gen: function() {
        var orig = pickFrom([40,50,60,80,100,120,200]);
        var newVal = orig + pickFrom([5,8,10,12,15,20,25,30]);
        var change = newVal-orig;
        var ans = parseFloat((change/orig*100).toFixed(1));
        var opts = buildOpts(ans+'%', [parseFloat((change/newVal*100).toFixed(1))+'%', change+'%', (ans+5)+'%']);
        return { q: 'A quantity grows from '+orig+' to '+newVal+'. What is the percentage increase?',
                 opts: opts, c: 0,
                 e: 'Change = '+change+'. % increase = '+change+'/'+orig+' × 100 = '+ans+'%.' };
    }},
    { question:'Shop A offers "buy 3 get 1 free" on £4 items. Shop B offers 25% off everything. Which is better for buying 4 items?', options:['Shop A','Shop B','Same price','Depends'], answer:2, explanation:'Shop A: pay 3×£4=£12 for 4. Shop B: 4×£4×0.75=£12. Same price!' }
  ],

  // ── mi-10-5: Percent Models & Estimation ──────────────────────────────────
  'mi-10-5': [
    { gen: function() {
        var pct = pickFrom([15,20,25,30,35,40,45,55,60,65,70,75,80,85]);
        var opts = buildOpts(pct, [100-pct, pct+10, pct-10]);
        return { q: 'On a 10×10 grid, ' + pct + ' squares are shaded. What percentage is shaded?',
                 opts: opts, c: 0,
                 e: 'A 10×10 grid has 100 squares. ' + pct + ' shaded out of 100 = ' + pct + '%.' };
    }},
    { gen: function() {
        var whole = pickFrom([40,50,60,80,100,120,150,200]);
        var pct = pickFrom([10,20,25,30,40,50,75]);
        var ans = whole * pct / 100;
        var opts = buildOpts(ans, [whole - ans, ans + whole/10, pct]);
        return { q: 'Use a bar model: find ' + pct + '% of ' + whole + '.',
                 opts: opts, c: 0,
                 e: '10% of ' + whole + ' = ' + (whole/10) + '. ' + pct + '% = ' + (pct/10) + ' × ' + (whole/10) + ' = ' + ans + '.' };
    }},
    { gen: function() {
        var whole = pickFrom([198,302,405,497,601,798,1003]);
        var nearWhole = Math.round(whole/10)*10;
        var tenPct = nearWhole / 10;
        var ans = tenPct * 5;
        var opts = buildOpts('≈ ' + ans, ['≈ ' + (ans+10), '≈ ' + (ans-10), '≈ ' + whole]);
        return { q: 'Estimate 50% of ' + whole + '.',
                 opts: opts, c: 0,
                 e: whole + ' ≈ ' + nearWhole + '. 50% of ' + nearWhole + ' = ' + ans + '.' };
    }},
    { gen: function() {
        var whole = pickFrom([60,80,100,120,150,200,240,300]);
        var pct = pickFrom([10,20,25,50]);
        var shaded = whole * pct / 100;
        var sections = 100 / pct;
        var opts = buildOpts(pct + '%', [(pct+10)+'%', (pct-5)+'%', (100-pct)+'%']);
        return { q: 'A bar model of ' + whole + ' is divided into ' + sections + ' equal sections. One section = ' + shaded + '. What percent is one section?',
                 opts: opts, c: 0,
                 e: sections + ' equal sections means each = 100%÷' + sections + ' = ' + pct + '%. Check: ' + pct + '% of ' + whole + ' = ' + shaded + ' ✓.' };
    }},
    { gen: function() {
        var whole = pickFrom([40,50,80,100,120,200]);
        var pctA = 25, pctB = 10;
        var ansA = whole * pctA / 100, ansB = whole * pctB / 100;
        var ans = ansA + ansB;
        var opts = buildOpts(ans, [ansA, ansB, whole - ans]);
        return { q: 'Using a bar model, find 35% of ' + whole + ' by splitting into 25% + 10%.',
                 opts: opts, c: 0,
                 e: '25% of ' + whole + ' = ' + ansA + '. 10% of ' + whole + ' = ' + ansB + '. 35% = ' + ansA + ' + ' + ansB + ' = ' + ans + '.' };
    }},
    { question:'A 10×10 grid has 73 squares shaded. What percentage is NOT shaded?', options:['27%','73%','37%','23%'], answer:0, explanation:'100 − 73 = 27 squares unshaded = 27%.' },
    { question:'Estimate 9% of 400.', options:['≈ 36','≈ 40','≈ 90','≈ 360'], answer:0, explanation:'9% ≈ 10% = 40. But 9% is slightly less, so ≈ 36. Exact: 0.09 × 400 = 36.' },
    { question:'A bar is divided into 4 equal parts. 3 parts are shaded. What percent is shaded?', options:['75%','60%','25%','34%'], answer:0, explanation:'Each part = 25%. 3 parts = 75%.' },
    { question:'Estimate 26% of 80.', options:['≈ 20','≈ 26','≈ 8','≈ 32'], answer:0, explanation:'26% ≈ 25% = ¼. ¼ of 80 = 20.' },
    { question:'On a grid model, you shade 1 full row. What percentage is that?', options:['10%','1%','20%','100%'], answer:0, explanation:'1 row = 10 squares out of 100 = 10%.' }
  ],

  // ── mi-11-1: Algebraic Notation ────────────────────────────────────────────
  'mi-11-1': [
    { question:'What does the coefficient mean in the term 7x?', options:['The variable','The value of x','The number multiplying x','The power of x'], answer:2, explanation:'The coefficient is the number in front of the variable. Here it is 7.' },
    { question:'Simplify: b × b', options:['2b','b²','bb','2b²'], answer:1, explanation:'b × b = b².' },
    { question:'Which is an expression (not an equation)?', options:['3x = 12','x + 5 = y','4x − 2','y > 6'], answer:2, explanation:'An expression has no equals sign: 4x − 2.' },
    { question:'Write "4 less than twice p" as an expression.', options:['4 − 2p','2p − 4','2(p−4)','4p − 2'], answer:1, explanation:'"Twice p" = 2p. "4 less than" means subtract 4: 2p − 4.' },
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8), n = randInt(2,7);
        var ans = a*n + b;
        var opts = buildOpts(ans, [a*n, a+b, a*(n+b)]);
        return { q: 'Evaluate ' + a + 'n + ' + b + ' when n = ' + n + '.',
                 opts: opts, c: 0,
                 e: a+'×'+n+'+'+b+' = '+a*n+'+'+b+' = '+ans+'.' };
    }},
    { question:'How many terms does the expression 3x² − 2x + 7 have?', options:['1','2','3','4'], answer:2, explanation:'Three terms: 3x², −2x, and 7.' },
    { question:'Which pairs are like terms?', options:['3x and 3y','5x² and 5x','4ab and 4ba','2x and x²'], answer:2, explanation:'4ab and 4ba are the same (multiplication is commutative): both = 4ab.' },
    { question:'Write an expression for the perimeter of a regular hexagon with side length k.', options:['k + 6','6k','k⁶','k/6'], answer:1, explanation:'Perimeter = 6 × k = 6k.' },
    { question:'Simplify: 3 × m × 4 × n', options:['7mn','12mn','12m+n','3m4n'], answer:1, explanation:'Multiply the numbers: 3×4=12. Then mn. Answer: 12mn.' },
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8), n = randInt(2,7);
        var ans = a*n + b;
        var opts = buildOpts(ans, [a*n, a+b, a*(n+b)]);
        return { q: 'Evaluate ' + a + 'n + ' + b + ' when n = ' + n + '.',
                 opts: opts, c: 0,
                 e: a+'×'+n+'+'+b+' = '+a*n+'+'+b+' = '+ans+'.' };
    }}
  ],

  // ── mi-11-2: Simplifying Expressions ──────────────────────────────────────
  'mi-11-2': [
    { gen: function() {
        var a = randInt(2,6), b = randInt(2,5), c = randInt(1,4);
        var ans = (a+b)+'x + '+c;
        var opts = buildOpts(ans, [(a+b+1)+'x + '+c, (a+b)+'x', (a+b)+'x + '+(c+1)]);
        return { q: 'Simplify: ' + a + 'x + ' + c + ' + ' + b + 'x',
                 opts: opts, c: 0,
                 e: 'Collect like terms: ('+a+'+'+b+')x + '+c+' = '+ans+'.' };
    }},
    { question:'Expand: 5(3 − 2x)', options:['15 − 2x','15x − 10','15 − 10x','8 − 7x'], answer:2, explanation:'5×3 − 5×2x = 15 − 10x.' },
    { question:'Factorise: 6x + 9', options:['6(x+3)','3(2x+3)','9(x+1)','2(3x+4)'], answer:1, explanation:'HCF of 6 and 9 is 3. 3(2x + 3).' },
    { gen: function() {
        var a = randInt(2,6), b = randInt(2,5), c = randInt(1,4), d = randInt(1,3);
        var coeff = a - b; var lin = c + d;
        var ans = coeff+'x² + '+lin+'x';
        var opts = buildOpts(ans, [(coeff+1)+'x² + '+lin+'x', coeff+'x² + '+(lin+1)+'x', coeff+'x² - '+lin+'x']);
        return { q: 'Simplify: '+a+'x² + '+c+'x − '+b+'x² + '+d+'x',
                 opts: opts, c: 0,
                 e: '('+a+'x²−'+b+'x²) + ('+c+'x+'+d+'x) = '+ans+'.' };
    }},
    { question:'Expand and simplify: 2(x + 3) + 4(x − 1)', options:['6x + 10','6x + 2','6x − 2','6x + 1'], answer:1, explanation:'2x+6+4x−4 = 6x+2.' },
    { question:'Factorise fully: 15y − 10', options:['5(3y−2)','5(y−2)','10(y−1)','2(7y−5)'], answer:0, explanation:'HCF=5. 5(3y − 2).' },
    { gen: function() {
        var a = randInt(2,6), b = randInt(2,5), c = randInt(1,4);
        var ans = (a+b)+'x + '+c;
        var opts = buildOpts(ans, [(a+b+1)+'x + '+c, (a+b)+'x', (a+b)+'x + '+(c+1)]);
        return { q: 'Simplify: ' + a + 'x + ' + c + ' + ' + b + 'x',
                 opts: opts, c: 0,
                 e: 'Collect like terms: ('+a+'+'+b+')x + '+c+' = '+ans+'.' };
    }},
    { question:'Expand: (x + 3)(x + 2)', options:['x² + 5x + 6','x² + 6x + 5','x² + 5x + 5','x² + 6x + 6'], answer:0, explanation:'x²+2x+3x+6 = x²+5x+6.' },
    { question:'Factorise: x² + 5x', options:['x(x+5)','5(x+1)','x²(5)','(x+5)(x+1)'], answer:0, explanation:'HCF=x. x(x + 5).' },
    { question:'Simplify: (24a²b) ÷ (6ab)', options:['4ab','4a','18a','4a²'], answer:1, explanation:'24÷6=4. a²÷a=a. b÷b=1. Answer: 4a.' }
  ],

  // ── mi-11-3: Substitution ──────────────────────────────────────────────────
  'mi-11-3': [
    { gen: function() {
        var a = randInt(2,5), b = randInt(1,6), x = randInt(2,6), y = randInt(1,5);
        var ans = a*x + b*y;
        var opts = buildOpts(ans, [a*x, a*y+b*x, ans+a]);
        return { q: 'If x = '+x+' and y = '+y+', find '+a+'x + '+b+'y.',
                 opts: opts, c: 0,
                 e: a+'×'+x+' + '+b+'×'+y+' = '+a*x+' + '+b*y+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,5), x = randInt(2,6);
        var ans = 2*a*x*x;
        var opts = buildOpts(ans, [a*x*x, 2*a*x, ans+a]);
        return { q: 'Find the value of 2ax² when a = '+a+' and x = '+x+'.',
                 opts: opts, c: 0,
                 e: '2×'+a+'×'+x+'² = 2×'+a+'×'+x*x+' = '+ans+'.' };
    }},
    { gen: function() {
        var b = pickFrom([4,6,8,10,12]), h = pickFrom([3,4,5,6,8]);
        var ans = b*h/2;
        var opts = buildOpts(ans, [b*h, b+h, ans+b]);
        return { q: 'The formula for the area of a triangle is A = ½bh. Find A when b = '+b+', h = '+h+'.',
                 opts: opts, c: 0,
                 e: 'A = ½×'+b+'×'+h+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,5), b = randInt(1,6), x = randInt(2,8);
        var ans = a*x - b;
        var opts = buildOpts(ans, [a*x+b, a*x, ans-a]);
        return { q: 'Evaluate '+a+'x − '+b+' when x = '+x+'.',
                 opts: opts, c: 0,
                 e: a+'×'+x+' − '+b+' = '+a*x+' − '+b+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,5), x = randInt(2,6);
        var ans = a*x*x;
        var opts = buildOpts(ans, [a*x, 2*a*x, ans+x]);
        return { q: 'Find '+a+'x² when x = '+x+'.',
                 opts: opts, c: 0,
                 e: a+'×'+x+'² = '+a+'×'+x*x+' = '+ans+'.' };
    }},
    { gen: function() {
        var p = randInt(2,8), q = randInt(2,6);
        var ans = p + q*q;
        var opts = buildOpts(ans, [p+q, p*q*q, ans+1]);
        return { q: 'Evaluate p + q² when p = '+p+' and q = '+q+'.',
                 opts: opts, c: 0,
                 e: p+' + '+q+'² = '+p+' + '+q*q+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,4), b = randInt(1,5), x = randInt(2,5);
        var ans = a*x*x + b*x;
        var opts = buildOpts(ans, [a*x+b*x, a*x*x, ans+a]);
        return { q: 'Find '+a+'x² + '+b+'x when x = '+x+'.',
                 opts: opts, c: 0,
                 e: a+'×'+x*x+' + '+b+'×'+x+' = '+a*x*x+' + '+b*x+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,5), b = randInt(1,6), x = randInt(2,6), y = randInt(1,5);
        var ans = a*x - b*y;
        var opts = buildOpts(ans, [a*x+b*y, b*x-a*y, ans+b]);
        return { q: 'If x = '+x+' and y = '+y+', find '+a+'x − '+b+'y.',
                 opts: opts, c: 0,
                 e: a+'×'+x+' − '+b+'×'+y+' = '+a*x+' − '+b*y+' = '+ans+'.' };
    }},
    { gen: function() {
        var r = pickFrom([2,3,4,5,6,7]);
        var ans = Math.round(3.14*r*r*10)/10;
        var opts = buildOpts(ans, [2*3.14*r, 3.14*r, ans+3.14]);
        return { q: 'Using A = πr² and π ≈ 3.14, find A when r = '+r+'. Give your answer to 1 d.p.',
                 opts: opts, c: 0,
                 e: '3.14 × '+r+'² = 3.14 × '+r*r+' = '+ans+'.' };
    }},
    { gen: function() {
        var u = randInt(2,8), a = randInt(2,5), t = randInt(2,5);
        var ans = u*t + a*t*t/2;
        var opts = buildOpts(ans, [u*t, u+a*t, ans+t]);
        return { q: 'Using s = ut + ½at², find s when u = '+u+', a = '+a+', t = '+t+'.',
                 opts: opts, c: 0,
                 e: 'ut = '+u*t+'. ½at² = ½×'+a+'×'+t*t+' = '+a*t*t/2+'. s = '+u*t+' + '+a*t*t/2+' = '+ans+'.' };
    }}
  ],

  // ── mi-11-4: Writing & Using Expressions ───────────────────────────────────
  'mi-11-4': [
    { question:'Write an expression: "7 more than four times n"', options:['7n + 4','4n + 7','4(n+7)','n + 28'], answer:1, explanation:'Four times n = 4n. Seven more: 4n + 7.' },
    { question:'A rectangle has length (x + 5) and width 3. Write an expression for its area.', options:['3x + 5','3x + 15','x + 8','3(x+5)'], answer:3, explanation:'Area = 3(x+5) = 3x+15, but in factored form: 3(x+5). Both 3x+15 and 3(x+5) are correct — here 3(x+5) is listed.' },
    { question:'Tickets cost £t for adults and £c for children. A family of 2 adults and 3 children. Write the total cost.', options:['2t + 3c','5(t+c)','3t + 2c','6tc'], answer:0, explanation:'2 adult tickets + 3 child tickets = 2t + 3c.' },
    { question:'Simplify the perimeter of a regular pentagon with side (2x − 1).', options:['10x − 1','10x − 5','5x − 5','5(2x−5)'], answer:1, explanation:'P = 5(2x−1) = 10x − 5.' },
    { question:'n consecutive integers starting from n. Write the sum of the first three.', options:['3n+3','3n','3n+6','n+3'], answer:0, explanation:'n + (n+1) + (n+2) = 3n + 3.' },
    { question:'An expression has value 20 when n=4. It has value 35 when n=7. Which expression fits?', options:['5n','4n+4','3n+8','5n−1'], answer:0, explanation:'5×4=20 ✓ and 5×7=35 ✓. Answer: 5n.' },
    { question:'The cost of printing: £15 setup + £0.30 per leaflet. Write an expression for n leaflets.', options:['15n+0.30','0.30n+15','15+30n','0.30+15n'], answer:1, explanation:'Fixed cost £15 plus £0.30 per leaflet: 0.30n + 15.' },
    { question:'A square has perimeter (12x + 20). Write an expression for one side.', options:['3x + 5','6x + 10','4x + 5','3x + 20'], answer:0, explanation:'Side = perimeter÷4 = (12x+20)÷4 = 3x+5.' },
    { question:'Two consecutive even numbers sum to 4n+2. What are they?', options:['2n and 2n+2','2n and 4n+2','n and 3n+2','4n and 2'], answer:0, explanation:'2n + (2n+2) = 4n+2. The numbers are 2n and 2n+2.' },
    { question:'Prove that the sum of any three consecutive integers is divisible by 3.', options:['n+(n+1)+(n+2)=3n+3=3(n+1) ✓','n+(n+2)+(n+4)=3n+6 ✓','3n is always divisible by 3 ✓','Cannot be proven with algebra'], answer:0, explanation:'n+(n+1)+(n+2)=3n+3=3(n+1), which is always divisible by 3.' }
  ],

  // ── mi-11-5: Properties of Operations ─────────────────────────────────────
  'mi-11-5': [
    { question:'Which property does 7 + 3 = 3 + 7 demonstrate?', options:['Commutative property of addition','Associative property of addition','Identity property','Distributive property'], answer:0, explanation:'Changing the order of addends: a + b = b + a. This is the commutative property of addition.' },
    { question:'Which property does (2 × 5) × 3 = 2 × (5 × 3) demonstrate?', options:['Associative property of multiplication','Commutative property','Distributive property','Identity property'], answer:0, explanation:'Changing the grouping: (a × b) × c = a × (b × c). This is the associative property of multiplication.' },
    { question:'n × 1 = n. Which property is this?', options:['Multiplicative identity','Additive identity','Zero property','Commutative property'], answer:0, explanation:'Multiplying by 1 gives the same number. This is the multiplicative identity property.' },
    { question:'Which expression is equivalent to 4 × (6 + 3) using the distributive property?', options:['4 × 6 + 4 × 3','4 × 6 + 3','4 + 6 × 3','(4 × 6) + 3'], answer:0, explanation:'Distributive: a(b + c) = ab + ac. So 4(6+3) = 4×6 + 4×3 = 24 + 12 = 36.' },
    { gen: function() {
        var a = randInt(2, 9), b = randInt(2, 9), c = randInt(2, 9);
        var ans = a * (b + c);
        var opts = buildOpts(ans, [a * b + c, a + b * c, a * b * c]);
        return { q: 'Use the distributive property to find ' + a + ' × (' + b + ' + ' + c + ').',
                 opts: opts, c: 0,
                 e: a + ' × ' + b + ' + ' + a + ' × ' + c + ' = ' + (a*b) + ' + ' + (a*c) + ' = ' + ans + '.' };
    }},
    { question:'Which property explains why 0 × 458 = 0?', options:['Zero property of multiplication','Identity property','Commutative property','Associative property'], answer:0, explanation:'Any number multiplied by 0 equals 0. This is the zero property.' },
    { question:'Rewrite 3 × 8 × 5 to make it easier to calculate mentally.', options:['3 × 5 × 8 = 15 × 8 = 120','8 × 5 × 3 = 40 × 3 = 120','Both A and B','Neither'], answer:2, explanation:'Both use the commutative property to reorder. Grouping 3×5=15 or 5×8=40 first makes the mental maths easier.' },
    { question:'If a × b = 0 and a ≠ 0, what must b equal?', options:['0','1','a','Cannot tell'], answer:0, explanation:'By the zero property, if a product is 0 and one factor is not 0, the other must be 0.' },
    { gen: function() {
        var a = randInt(2, 8), b = randInt(2, 8);
        var product = a * b;
        var opts = buildOpts(a, [b, product, a + b]);
        return { q: 'If n × ' + b + ' = ' + product + ', what is n? (Use the multiplicative inverse.)',
                 opts: opts, c: 0,
                 e: 'n = ' + product + ' ÷ ' + b + ' = ' + a + '.' };
    }},
    { question:'Which is NOT a valid use of properties? (A) 5+0=5 (B) 3×4=4×3 (C) 8−3=3−8 (D) (2+6)+4=2+(6+4)', options:['C: subtraction is not commutative','A: identity property is wrong','B: commutative is wrong','D: associative is wrong'], answer:0, explanation:'8 − 3 = 5 but 3 − 8 = −5. Subtraction is NOT commutative.' }
  ],

  // ── mi-12-1: Solving One-Step Equations ────────────────────────────────────
  'mi-12-1': [
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + rhs,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+': '+a+'x = '+(rhs-b)+'. Divide by '+a+': x = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + rhs,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+': '+a+'x = '+(rhs-b)+'. Divide by '+a+': x = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,9);
        var ans = randInt(2,9);
        var rhs = a*ans;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs+a]);
        return { q: 'Solve: ' + a + 'm = ' + rhs,
                 opts: opts, c: 0,
                 e: 'm = '+rhs+'÷'+a+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,8);
        var ans = randInt(2,9);
        var rhs = ans*a;
        var opts = buildOpts(ans, [ans+1, ans-1, a]);
        return { q: 'Solve: n/'+a+' = '+ans,
                 opts: opts, c: 0,
                 e: 'n = '+ans+'×'+a+' = '+rhs+'.' };
    }},
    { gen: function() {
        var b = randInt(1,8);
        var ans = randInt(2,9);
        var rhs = ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs]);
        return { q: 'Solve: ' + b + ' + p = ' + rhs,
                 opts: opts, c: 0,
                 e: 'p = '+rhs+'−'+b+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,9);
        var ans = randInt(2,8);
        var rhs = a*ans;
        var opts = buildOpts(rhs, [rhs+a, rhs-a, rhs*2]);
        return { q: 'Solve: t/'+a+' = '+ans+'. What is t?',
                 opts: opts, c: 0,
                 e: 't = '+ans+'×'+a+' = '+rhs+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + rhs,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+': '+a+'x = '+(rhs-b)+'. Divide by '+a+': x = '+ans+'.' };
    }},
    { gen: function() {
        var b = randInt(2,12);
        var ans = b;
        var opts = buildOpts(ans, [0, ans+1, ans-1]);
        return { q: 'Solve: w − '+b+' = 0',
                 opts: opts, c: 0,
                 e: 'w = 0+'+b+' = '+ans+'.' };
    }},
    { gen: function() {
        var ans = randInt(3,12);
        var rhs = ans*2;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs]);
        return { q: 'A number doubled is '+rhs+'. What is the number?',
                 opts: opts, c: 0,
                 e: 'n×2='+rhs+' → n='+ans+'.' };
    }},
    { gen: function() {
        var b = randInt(2,10);
        var ans = randInt(b+1, 20);
        var rhs = ans - b;
        var opts = buildOpts(ans, [rhs, ans+b, ans-1]);
        return { q: 'I think of a number, subtract '+b+', and get '+rhs+'. What is my number?',
                 opts: opts, c: 0,
                 e: 'n−'+b+'='+rhs+' → n='+ans+'.' };
    }}
  ],

  // ── mi-12-2: Solving Two-Step Equations ────────────────────────────────────
  'mi-12-2': [
    { gen: function() {
        var ans = randInt(2,8), a = randInt(3,7), b = randInt(1,a-1), c = randInt(1,6);
        var rhs = b*ans + c;
        var lhs_str = a+'x', rhs_str = b+'x + '+c;
        var opts = buildOpts(ans, [ans+1, ans-1, c]);
        return { q: 'Solve: ' + lhs_str + ' = ' + rhs_str,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+'x: '+(a-b)+'x = '+c+'. x = '+c+'/'+(a-b)+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'y − ' + b + ' = ' + (rhs-2*b),
                 opts: opts, c: 0,
                 e: 'Add '+b+': '+a+'y = '+(rhs-b)+'. Divide by '+a+': y = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'x + ' + b + ' = ' + rhs,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+': '+a+'x = '+(rhs-b)+'. Divide by '+a+': x = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'p + ' + b + ' = ' + rhs,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+': '+a+'p = '+(rhs-b)+'. Divide by '+a+': p = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: ' + a + 'm − ' + b + ' = ' + (rhs-2*b),
                 opts: opts, c: 0,
                 e: 'Add '+b+': '+a+'m = '+(rhs-b)+'. Divide by '+a+': m = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,5), c = randInt(1,6);
        var ans = randInt(2,7);
        var rhs = a*(ans-c);
        var opts = buildOpts(ans, [ans+1, ans-1, rhs]);
        return { q: 'Solve: '+a+'(x − '+c+') = '+rhs,
                 opts: opts, c: 0,
                 e: 'x−'+c+' = '+rhs/a+'. x = '+(rhs/a)+'+'+c+' = '+ans+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8);
        var ans = randInt(2,8);
        var rhs = a*ans + b;
        var opts = buildOpts(ans, [ans+1, ans-1, rhs-b]);
        return { q: 'Solve: x/'+a+' + '+b+' = '+(ans+b),
                 opts: opts, c: 0,
                 e: 'x/'+a+' = '+ans+'. x = '+ans+'×'+a+' = '+a*ans+'.' };
    }},
    { question:'Why do we do the same operation to both sides of an equation?', options:['To keep the equation balanced — like a set of scales','To make the numbers smaller','To remove all variables','Because the rules say so'], answer:0, explanation:'Doing the same to both sides keeps the equation balanced.' },
    { gen: function() {
        var ans = randInt(2,8), a = randInt(3,7), b = randInt(1,a-1), c = randInt(1,6);
        var rhs_str = b+'x + '+c;
        var opts = buildOpts(ans, [ans+1, ans-1, c]);
        return { q: 'Solve: '+a+'x = ' + rhs_str,
                 opts: opts, c: 0,
                 e: 'Subtract '+b+'x: '+(a-b)+'x = '+c+'. x = '+c+'/'+(a-b)+' = '+ans+'.' };
    }},
    { gen: function() {
        var callout = pickFrom([20,25,30,40,50]);
        var rate = pickFrom([10,15,20,25]);
        var hours = randInt(2,6);
        var total = callout + rate*hours;
        var opts = buildOpts(hours, [hours+1, hours-1, total/rate]);
        return { q: 'A plumber charges £'+callout+' call-out plus £'+rate+'/hour. Total bill is £'+total+'. How many hours did they work?',
                 opts: opts, c: 0,
                 e: callout+'+'+rate+'h='+total+' → '+rate+'h='+(total-callout)+' → h='+hours+'.' };
    }}
  ],

  // ── mi-12-3: Number Sequences ──────────────────────────────────────────────
  'mi-12-3': [
    { gen: function() {
        var start = randInt(2,10), diff = pickFrom([3,4,5,6,7,8]);
        var terms = [start, start+diff, start+2*diff, start+3*diff];
        var next = start + 4*diff;
        var opts = buildOpts(next, [next+diff, next-diff, next+1]);
        return { q: 'Find the next term: ' + terms.join(', ') + ', ___',
                 opts: opts, c: 0,
                 e: 'Common difference: +'+diff+'. Next: '+(start+3*diff)+' + '+diff+' = '+next+'.' };
    }},
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8), n = randInt(3,8);
        var ans = a*n + b;
        var opts = buildOpts(ans, [a*n, a*(n+1)+b, a*n+b+1]);
        return { q: 'The nth term of a sequence is '+a+'n + '+b+'. What is the '+n+'th term?',
                 opts: opts, c: 0,
                 e: a+'×'+n+' + '+b+' = '+a*n+' + '+b+' = '+ans+'.' };
    }},
    { question:'Find the nth term of: 5, 8, 11, 14, …', options:['3n+2','3n+5','2n+3','n+4'], answer:0, explanation:'First term=5, d=3. nth term = 3n+(5−3) = 3n+2.' },
    { question:'Is 100 in the sequence 4n + 1?', options:['Yes, 25th term','Yes, 33rd term','No','Yes, 100th term'], answer:2, explanation:'4n+1=100 → 4n=99 → n=24.75. Not a whole number, so 100 is NOT in the sequence.' },
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8), n = randInt(3,8);
        var ans = a*n + b;
        var opts = buildOpts(ans, [a*n, a*(n+1)+b, a*n+b+1]);
        return { q: 'The nth term of a sequence is '+a+'n + '+b+'. What is the '+n+'th term?',
                 opts: opts, c: 0,
                 e: a+'×'+n+' + '+b+' = '+a*n+' + '+b+' = '+ans+'.' };
    }},
    { question:'The sequence 2, 5, 10, 17, 26… What is the pattern?', options:['Add 3 each time','Square numbers + 1','n² +1','Odd numbers'], answer:2, explanation:'1²+1=2, 2²+1=5, 3²+1=10, 4²+1=17. Pattern: n²+1.' },
    { gen: function() {
        var a = randInt(2,6), b = randInt(1,8), n = randInt(3,8);
        var ans = a*n + b;
        var opts = buildOpts(ans, [a*n, a*(n+1)+b, a*n+b+1]);
        return { q: 'The nth term of a sequence is '+a+'n + '+b+'. What is the '+n+'th term?',
                 opts: opts, c: 0,
                 e: a+'×'+n+' + '+b+' = '+a*n+' + '+b+' = '+ans+'.' };
    }},
    { question:'A sequence starts 3, 9, 27, 81… What is the rule?', options:['Add 6','Multiply by 2','Multiply by 3','Add 18'], answer:2, explanation:'Each term is multiplied by 3. Geometric sequence.' },
    { question:'The nth term of a sequence is 100 − 7n. Which term is the first negative term?', options:['Term 14','Term 15','Term 16','Term 13'], answer:1, explanation:'100−7n<0 → n>100/7≈14.3. First whole number is n=15. Check: term 14=100−98=2 (positive), term 15=100−105=−5 (negative). First negative term is Term 15.' },
    { question:'Two sequences: A: 3n+1 and B: 4n−2. For what value of n are both sequences equal?', options:['n=1','n=2','n=3','n=4'], answer:2, explanation:'3n+1=4n−2 → n=3. Check: A=10, B=10 ✓.' }
  ],

  // ── mi-12-4: Formulae & Function Machines ──────────────────────────────────
  'mi-12-4': [
    { question:'Using F = ma, find F when m = 8 and a = 4.', options:['12','24','32','2'], answer:2, explanation:'F = 8×4 = 32.' },
    { question:'A function machine: ×2 then +3. Input = 5. Find the output.', options:['10','11','13','16'], answer:2, explanation:'5×2=10. 10+3=13.' },
    { question:'Rearrange to make r the subject: P = 4r', options:['r = 4P','r = P/4','r = P+4','r = P−4'], answer:1, explanation:'Divide both sides by 4: r = P/4.' },
    { question:'The formula for speed is v = d/t. Rearrange for t.', options:['t = v/d','t = dv','t = d/v','t = d−v'], answer:2, explanation:'t = d/v (multiply both sides by t then divide by v).' },
    { question:'A function machine output is 11, rule is ×3 −1. What was the input?', options:['3','4','5','6'], answer:1, explanation:'Reverse: 11+1=12. 12÷3=4.' },
    { question:'Area of a circle: A = πr². Find A when r = 7. (Use π ≈ 3.14)', options:['21.98','43.96','153.86','21.98'], answer:2, explanation:'A = 3.14 × 49 = 153.86.' },
    { question:'Make x the subject: y = 5x + 3', options:['x = (y−3)/5','x = y/5+3','x = 5y−3','x = (y+3)/5'], answer:0, explanation:'y−3=5x → x=(y−3)/5.' },
    { question:'Perimeter of a rectangle: P = 2(l + w). If P=36 and l=11, find w.', options:['w=7','w=8','w=9','w=14'], answer:0, explanation:'36=2(11+w) → 18=11+w → w=7.' },
    { question:'Using E = ½mv², find E when m=10 and v=6.', options:['30','60','180','360'], answer:2, explanation:'E = ½×10×36 = 5×36 = 180.' },
    { question:'A machine converts Celsius to Fahrenheit: F = 9C/5 + 32. Body temperature is 37°C. What is this in °F?', options:['95°F','98.6°F','100°F','104°F'], answer:1, explanation:'F = 9(37)/5 + 32 = 333/5 + 32 = 66.6+32 = 98.6°F.' }
  ],

  // ── mi-12-5: Expressions vs Equations & Tiles ─────────────────────────────
  'mi-12-5': [
    { question:'Which of these is an equation?', options:['2x + 5 = 13','3y − 7','4a + 2b','x² + 1'], answer:0, explanation:'Only 2x + 5 = 13 has an equals sign, making it an equation. The others are expressions.' },
    { question:'Which is an expression (not an equation)?', options:['7n − 3','x = 5','2y + 1 = 9','a + b = c'], answer:0, explanation:'7n − 3 has no equals sign — it is an expression.' },
    { question:'Algebra tiles show: 2 x-tiles + 5 unit tiles = 11 unit tiles. What is x?', options:['3','5','6','8'], answer:0, explanation:'Remove 5 from both sides: 2x = 6. Divide by 2: x = 3.' },
    { question:'"A number doubled, plus 3, equals 15." Which equation matches?', options:['2x + 3 = 15','2(x + 3) = 15','x + 6 = 15','3x + 2 = 15'], answer:0, explanation:'Doubled: 2x. Plus 3: 2x + 3. Equals 15: 2x + 3 = 15.' },
    { question:'"I think of a number, subtract 4, and get 9." Which equation matches?', options:['x − 4 = 9','4 − x = 9','x + 4 = 9','x ÷ 4 = 9'], answer:0, explanation:'Number minus 4 equals 9: x − 4 = 9. So x = 13.' },
    { gen: function() {
        var a = randInt(2, 6), b = randInt(1, 8), x = randInt(2, 8);
        var rhs = a * x + b;
        var opts = buildOpts(x, [x + 1, x - 1, rhs]);
        return { q: 'Algebra tiles model: ' + a + ' x-tiles + ' + b + ' unit tiles = ' + rhs + ' unit tiles. Find x.',
                 opts: opts, c: 0,
                 e: 'Remove ' + b + ' from both sides: ' + a + 'x = ' + (rhs-b) + '. Divide: x = ' + x + '.' };
    }},
    { gen: function() {
        var x = randInt(2, 10), add = randInt(1, 8);
        var total = x + add;
        var opts = buildOpts('x + ' + add + ' = ' + total, ['x − ' + add + ' = ' + total, add + 'x = ' + total, 'x + ' + total + ' = ' + add]);
        return { q: '"A number plus ' + add + ' equals ' + total + '." Write the equation.',
                 opts: opts, c: 0,
                 e: 'x + ' + add + ' = ' + total + '. Solve: x = ' + x + '.' };
    }},
    { question:'Which word problem matches the equation 3x = 24?', options:['Three identical bags weigh 24 kg total. Find the weight of one bag.','A bag weighs 3 kg more than 24 kg.','Three bags each weigh 24 kg.','24 bags each weigh 3 kg.'], answer:0, explanation:'3 bags × weight per bag = 24. So 3x = 24, x = 8 kg.' },
    { question:'Is "5x − 2" an expression or an equation?', options:['Expression','Equation','Neither','Both'], answer:0, explanation:'No equals sign → expression. An equation would be 5x − 2 = something.' },
    { question:'Model with tiles: x + 4 = 10. Remove 4 unit tiles from both sides. What remains?', options:['x = 6','x = 14','x = 4','2x = 6'], answer:0, explanation:'x + 4 − 4 = 10 − 4. Left: x. Right: 6. So x = 6.' }
  ],

  // ── mi-13-1: Averages & Range ──────────────────────────────────────────────
  'mi-13-1': [
    { gen: function() {
        var n = randInt(4,6);
        var vals = [];
        for(var i=0;i<n;i++) vals.push(randInt(3,15));
        var sum = vals.reduce(function(a,b){return a+b;},0);
        var mean = parseFloat((sum/n).toFixed(1));
        var opts = buildOpts(mean, [mean+1, mean-1, sum]);
        return { q: 'Find the mean of: ' + vals.join(', '),
                 opts: opts, c: 0,
                 e: 'Sum = '+sum+'. Mean = '+sum+' ÷ '+n+' = '+mean+'.' };
    }},
    { gen: function() {
        var n = randInt(4,6);
        var vals = [];
        for(var i=0;i<n;i++) vals.push(randInt(3,15));
        var sum = vals.reduce(function(a,b){return a+b;},0);
        var mean = parseFloat((sum/n).toFixed(1));
        var opts = buildOpts(mean, [mean+1, mean-1, sum]);
        return { q: 'Find the mean of: ' + vals.join(', '),
                 opts: opts, c: 0,
                 e: 'Sum = '+sum+'. Mean = '+sum+' ÷ '+n+' = '+mean+'.' };
    }},
    { question:'Find the mode of: 5, 3, 5, 7, 3, 5, 2.', options:['3','5','7','2'], answer:1, explanation:'5 appears 3 times — the most frequent. Mode = 5.' },
    { gen: function() {
        var vals = [];
        for(var i=0;i<5;i++) vals.push(randInt(2,20));
        vals.sort(function(a,b){return a-b;});
        var range = vals[4]-vals[0];
        var opts = buildOpts(range, [vals[4], vals[0], range+1]);
        return { q: 'Find the range of: ' + vals.join(', '),
                 opts: opts, c: 0,
                 e: 'Range = '+vals[4]+'−'+vals[0]+' = '+range+'.' };
    }},
    { gen: function() {
        var n = 5, targetMean = randInt(5,10);
        var known = [];
        for(var i=0;i<n-1;i++) known.push(randInt(2,15));
        var knownSum = known.reduce(function(a,b){return a+b;},0);
        var fifth = n*targetMean - knownSum;
        if(fifth < 1 || fifth > 20) { fifth = 10; known = [8,7,9,6]; knownSum = known.reduce(function(a,b){return a+b;},0); targetMean = Math.round((knownSum+fifth)/n); }
        var opts = buildOpts(fifth, [fifth+1, fifth-1, fifth+2]);
        return { q: 'The mean of five numbers is '+targetMean+'. The first four are '+known.join(', ')+'. Find the fifth.',
                 opts: opts, c: 0,
                 e: 'Total = '+targetMean+'×'+n+'='+n*targetMean+'. Sum of 4 known='+knownSum+'. Fifth='+n*targetMean+'−'+knownSum+'='+fifth+'.' };
    }},
    { question:'Which average is most affected by extreme values?', options:['Mean','Median','Mode','Range'], answer:0, explanation:'The mean is pulled by outliers; median is more resistant.' },
    { gen: function() {
        var n = randInt(4,6);
        var vals = [];
        for(var i=0;i<n;i++) vals.push(randInt(3,15));
        var sum = vals.reduce(function(a,b){return a+b;},0);
        var mean = parseFloat((sum/n).toFixed(1));
        var opts = buildOpts(mean, [mean+1, mean-1, sum]);
        return { q: 'Find the mean of: ' + vals.join(', '),
                 opts: opts, c: 0,
                 e: 'Sum = '+sum+'. Mean = '+sum+' ÷ '+n+' = '+mean+'.' };
    }},
    { gen: function() {
        var n = randInt(4,6);
        var vals = [];
        for(var i=0;i<n;i++) vals.push(randInt(3,15));
        var sum = vals.reduce(function(a,b){return a+b;},0);
        var mean = parseFloat((sum/n).toFixed(1));
        var opts = buildOpts(mean, [mean+1, mean-1, sum]);
        return { q: 'Find the mean of: ' + vals.join(', '),
                 opts: opts, c: 0,
                 e: 'Sum = '+sum+'. Mean = '+sum+' ÷ '+n+' = '+mean+'.' };
    }},
    { question:'Why might a teacher prefer to use the median rather than the mean for test scores?', options:['It is easier to calculate','It is not affected by very high or low scores','It shows the most common score','It always equals the mean'], answer:1, explanation:'Median is resistant to extreme outliers — one very high or low score won\'t distort it.' },
    { question:'These two data sets have the same mean. Which has the greater spread? A: 4,5,6,5,5 B: 1,5,8,9,2.', options:['Set A','Set B','Same spread','Cannot tell'], answer:1, explanation:'Set A range=2. Set B range=8. Set B has greater spread.' }
  ],

  // ── mi-13-2: Charts & Diagrams ─────────────────────────────────────────────
  'mi-13-2': [
    { question:'What type of graph is best for showing how a quantity changes over time?', options:['Bar chart','Pie chart','Line graph','Scatter graph'], answer:2, explanation:'Line graphs show trends and changes over time.' },
    { gen: function() {
        var angle = pickFrom([45,60,72,90,120,180]);
        var pct = parseFloat((angle/360*100).toFixed(1));
        var opts = buildOpts(pct+'%', [(pct+5)+'%', (pct-5)+'%', angle+'%']);
        return { q: 'A pie chart represents 360°. A sector is '+angle+'°. What percentage does it represent?',
                 opts: opts, c: 0,
                 e: angle+'/360 = '+(angle/360).toFixed(4)+' = '+pct+'%.' };
    }},
    { question:'What does the height of a bar in a frequency bar chart represent?', options:['The category label','The range','The frequency (count)','The mean'], answer:2, explanation:'Height = frequency (how many in that group).' },
    { question:'Data: 15, 23, 27, 31, 18. In a stem-and-leaf diagram, what stems are needed?', options:['1, 2, 3','1, 2, 3, 4','10, 20, 30','0, 1, 2, 3'], answer:0, explanation:'Tens digits: 1(5,8), 2(3,7), 3(1). Stems: 1, 2, 3.' },
    { gen: function() {
        var each = pickFrom([5,10,20,25]), whole = randInt(2,5), half = pickFrom([0,1]);
        var stars = whole + half*0.5;
        var ans = stars * each;
        var opts = buildOpts(ans, [whole*each, ans+each, ans-each]);
        return { q: 'A pictogram uses ★ = '+each+' students. There are '+stars+' stars for Year 7. How many Year 7 students?',
                 opts: opts, c: 0,
                 e: stars+' × '+each+' = '+ans+' students.' };
    }},
    { gen: function() {
        var total = pickFrom([30,40,50,60]), both = randInt(5,15);
        var tea = total - randInt(5,10);
        var teaOnly = tea - both;
        var opts = buildOpts(teaOnly, [tea, both, teaOnly+5]);
        return { q: 'In a two-way table, '+tea+' people like tea and '+both+' like both tea and coffee. How many like tea only?',
                 opts: opts, c: 0,
                 e: 'Tea only = '+tea+'−'+both+' = '+teaOnly+'.' };
    }},
    { question:'Which diagram displays individual data values while showing the data\'s shape?', options:['Bar chart','Stem-and-leaf','Pie chart','Frequency polygon'], answer:1, explanation:'Stem-and-leaf plots preserve individual values.' },
    { gen: function() {
        var maths = randInt(20,50), eng = randInt(15,35), sci = randInt(10,30);
        var total = maths+eng+sci;
        var angle = Math.round(maths/total*360);
        var opts = buildOpts(angle+'°', [(angle+5)+'°', (angle-5)+'°', Math.round(eng/total*360)+'°']);
        return { q: 'A bar chart shows: Maths '+maths+' students, English '+eng+', Science '+sci+'. What angle represents Maths in a pie chart?',
                 opts: opts, c: 0,
                 e: 'Total='+total+'. Maths angle='+maths+'/'+total+'×360='+angle+'°.' };
    }},
    { question:'What does a scatter graph show?', options:['How data changes over time','The relationship (correlation) between two variables','Frequency of categories','Individual values in order'], answer:1, explanation:'Scatter graphs show correlation between two variables.' },
    { question:'Class results as a stem-and-leaf: stem 5 | leaves 2 4 7 9. What values does this represent?', options:['52, 54, 57, 59','5, 2, 4, 7, 9','25, 45, 75, 95','520, 540, 570, 590'], answer:0, explanation:'Stem 5 + leaf = 52, 54, 57, 59.' }
  ],

  // ── mi-13-3: Probability Basics ────────────────────────────────────────────
  'mi-13-3': [
    { question:'A fair coin is tossed. P(Heads) = ?', options:['0','1/4','1/2','1'], answer:2, explanation:'Two equally likely outcomes. P(H) = 1/2.' },
    { gen: function() {
        var total = pickFrom([6,8,10,12,15,20]);
        var fav = randInt(1,total-1);
        function gcd(a,b){return b?gcd(b,a%b):a;}
        var g=gcd(fav,total); var sn=fav/g, sd=total/g;
        var ans = sd===1?String(sn):sn+'/'+sd;
        var opts = buildOpts(ans, [fav+'/'+total === ans ? (fav+1)+'/'+total : fav+'/'+total, (total-fav)+'/'+total, '1/'+total]);
        return { q: 'A bag has '+total+' counters, '+fav+' of which are red. What is the probability of picking a red counter?',
                 opts: opts, c: 0,
                 e: 'P(red) = favourable ÷ total = '+fav+'/'+total+(g>1?' = '+ans:'')+'.' };
    }},
    { question:'If P(rain) = 0.3, what is P(no rain)?', options:['0.3','0.6','0.7','1.3'], answer:2, explanation:'Complementary probability: 1−0.3=0.7.' },
    { question:'A fair six-sided die is rolled. P(even) = ?', options:['1/6','1/3','1/2','2/3'], answer:2, explanation:'Even numbers: 2,4,6. P(even)=3/6=1/2.' },
    { question:'Which event has probability 0?', options:['Rolling a 7 on a standard die','Getting a tail on a coin','Drawing a red card from a deck','Rolling a 6'], answer:0, explanation:'A standard die has faces 1–6. Rolling 7 is impossible: P = 0.' },
    { question:'A spinner has 5 equal sections: 1 red, 2 blue, 2 green. P(not red) = ?', options:['1/5','2/5','3/5','4/5'], answer:3, explanation:'P(red)=1/5. P(not red)=1−1/5=4/5.' },
    { question:'Letters of MATHEMATICS are put in a bag. P(picking M) = ?', options:['1/11','2/11','3/11','2/10'], answer:1, explanation:'MATHEMATICS has 11 letters. M appears twice. P(M)=2/11.' },
    { question:'P(A) = 0.4, P(B) = 0.35. A and B cannot both happen. P(A or B) = ?', options:['0.04','0.14','0.75','1.0'], answer:2, explanation:'Mutually exclusive: P(A or B) = 0.4+0.35 = 0.75.' },
    { gen: function() {
        var total = pickFrom([6,8,10,12,15,20]);
        var fav = randInt(1,total-1);
        function gcd(a,b){return b?gcd(b,a%b):a;}
        var g=gcd(fav,total); var sn=fav/g, sd=total/g;
        var ans = sd===1?String(sn):sn+'/'+sd;
        var opts = buildOpts(ans, [fav+'/'+total === ans ? (fav+1)+'/'+total : fav+'/'+total, (total-fav)+'/'+total, '1/'+total]);
        return { q: 'A bag has '+total+' counters, '+fav+' of which are red. What is the probability of picking a red counter?',
                 opts: opts, c: 0,
                 e: 'P(red) = favourable ÷ total = '+fav+'/'+total+(g>1?' = '+ans:'')+'.' };
    }},
    { question:'A student says "there are 3 outcomes so each has probability 1/3". Is this correct for rolling 1, 2, or other on a fair die?', options:['Yes, 3 outcomes means 1/3 each','No, outcomes must be equally likely','Yes, probability always divides evenly','No, it should be 1/6'], answer:1, explanation:'Equally likely only if outcomes are symmetric. "Other" covers 4 numbers, not 1: P(other)=4/6, not 1/3.' }
  ],

  // ── mi-13-4: Data Analysis & Interpretation ────────────────────────────────
  'mi-13-4': [
    { question:'What is the difference between a sample and a population?', options:['A sample is larger','A population is a subset of a sample','A sample is a subset of the population','They are the same'], answer:2, explanation:'A population is the whole group; a sample is a selected part of it.' },
    { question:'A set of data: 2, 3, 3, 4, 100. Which average best represents the data?', options:['Mean','Median','Mode','Range'], answer:1, explanation:'Mean=22.4 (distorted by 100). Median=3 is more representative.' },
    { question:'Which type of data is "favourite colour"?', options:['Continuous','Discrete','Categorical','Ordinal'], answer:2, explanation:'Favourite colour is qualitative/categorical data — no numerical value.' },
    { gen: function() {
        var total = pickFrom([20,25,30,40,50]);
        var freq = randInt(2,total/2);
        function gcd(a,b){return b?gcd(b,a%b):a;}
        var g=gcd(freq,total); var sn=freq/g, sd=total/g;
        var ans = sn+'/'+sd;
        var opts = buildOpts(ans, [freq+'/'+total === ans ? (freq+1)+'/'+total : freq+'/'+total, freq+'%', '1/'+total]);
        return { q: total+' people were surveyed. '+freq+' gave a particular answer. What is the relative frequency?',
                 opts: opts, c: 0,
                 e: 'Relative frequency = '+freq+'/'+total+(g>1?' = '+ans:'')+'.' };
    }},
    { question:'What is a biased sample?', options:['A sample that is very large','A sample that does not fairly represent the population','A sample with no outliers','A sample taken randomly'], answer:1, explanation:'A biased sample systematically over- or under-represents certain groups.' },
    { question:'A two-way table shows 40 boys and 60 girls. 25 boys and 45 girls prefer maths. What fraction of girls prefer maths?', options:['3/4','5/8','45/60','45/100'], answer:2, explanation:'Fraction of girls = 45/60 = 3/4.' },
    { question:'The mean of a data set is 12 and the range is 10. A new value of 4 is added. What effect does this have?', options:['Mean increases, range decreases','Mean decreases, range increases','Mean stays same, range increases','Mean decreases, range stays same'], answer:1, explanation:'4 < current mean, so mean decreases. If original range was [lowest, highest], new value 4 may extend range downward.' },
    { question:'Which graph would you use to show whether taller students have larger shoe sizes?', options:['Bar chart','Pie chart','Scatter graph','Line graph'], answer:2, explanation:'Scatter graphs show correlation between two variables.' },
    { gen: function() {
        var pct = pickFrom([10,20,25,40,50]);
        var surveyed = pickFrom([100,200,300,400,500]);
        var ans = pct*surveyed/100;
        var opts = buildOpts(ans, [ans+pct, ans/2, surveyed]);
        return { q: 'In a survey of '+surveyed+' people, '+pct+'% said they exercise. How many people is that?',
                 opts: opts, c: 0,
                 e: pct+'% of '+surveyed+' = '+pct+'/100 × '+surveyed+' = '+ans+'.' };
    }},
    { question:'A frequency polygon is drawn by plotting points at the midpoint of class intervals. Why midpoints?', options:['To make the line straight','To represent the whole class interval fairly','To find the mode','Because the data is continuous'], answer:1, explanation:'The midpoint represents the class interval as a whole — we assume data is evenly spread within each class.' }
  ],

  // ── mi-13-5: Data Displays & Graph Types ────────────────────────────────
  'mi-13-5': [
    { question:'A pictogram uses ★ = 4 books. If 14 books were read, how many symbols should be drawn?', options:['3 and a half','3','4','14'], answer:0, explanation:'14 ÷ 4 = 3.5 symbols (3 full stars and a half star).' },
    { question:'Which graph is best for comparing the same data from two different years?', options:['Double bar graph','Single pie chart','Pictogram','Scatter graph'], answer:0, explanation:'Double bar graphs place bars side by side so you can compare two data sets easily.' },
    { question:'What is the advantage of a double line graph over two separate line graphs?', options:['Easier to compare trends on the same axes','Uses less ink','Always more accurate','Shows individual values better'], answer:0, explanation:'Plotting both lines on the same axes makes it easy to see how the two data sets compare over time.' },
    { gen: function() {
        var key = pickFrom([2, 4, 5, 10]);
        var value = key * randInt(3, 8);
        var symbols = value / key;
        var opts = buildOpts(symbols + ' symbols', [(symbols + 1) + ' symbols', value + ' symbols', (key) + ' symbols']);
        return { q: 'A pictogram uses one icon = ' + key + ' items. How many icons represent ' + value + ' items?',
                 opts: opts, c: 0,
                 e: value + ' ÷ ' + key + ' = ' + symbols + ' icons.' };
    }},
    { gen: function() {
        var vals = [randInt(2, 15), randInt(2, 15), randInt(2, 15), randInt(2, 15)];
        var total = vals[0] + vals[1] + vals[2] + vals[3];
        var opts = buildOpts(total, [total + vals[0], total - vals[0], vals[0] * 4]);
        return { q: 'A frequency table shows: Cat=' + vals[0] + ', Dog=' + vals[1] + ', Fish=' + vals[2] + ', Bird=' + vals[3] + '. What is the total frequency?',
                 opts: opts, c: 0,
                 e: vals[0] + '+' + vals[1] + '+' + vals[2] + '+' + vals[3] + '=' + total + '.' };
    }},
    { question:'A line plot shows 5 Xs above 3, 2 Xs above 5, and 1 X above 7. How many data points are there?', options:['8','3','15','5'], answer:0, explanation:'Count all Xs: 5+2+1=8 data points.' },
    { question:'Which type of graph would be most appropriate to display how temperature changes over a week?', options:['Line graph','Bar chart','Pie chart','Pictogram'], answer:0, explanation:'Line graphs are ideal for showing change over time — each point is plotted and connected.' },
    { question:'A frequency table groups data into classes 0–9, 10–19, 20–29. What is the class width?', options:['10','9','20','5'], answer:0, explanation:'Each class covers 10 values (e.g. 0,1,2,...,9), so the class width is 10.' },
    { gen: function() {
        var a = randInt(10, 30), b = randInt(10, 30);
        var diff = Math.abs(a - b);
        var opts = buildOpts(diff, [a + b, Math.max(a, b), Math.min(a, b)]);
        return { q: 'A double bar graph shows Year A: ' + a + ' and Year B: ' + b + ' for maths scores. What is the difference?',
                 opts: opts, c: 0,
                 e: '|' + a + '−' + b + '| = ' + diff + '.' };
    }},
    { question:'Why might a pictogram be misleading if the key is not shown?', options:['You cannot tell how many items each symbol represents','The shapes look different','It has too many colours','It only works for small data sets'], answer:0, explanation:'Without a key, readers may assume each symbol = 1, leading to incorrect readings.' }
  ],

  // ── mi-13-6: Sampling, Bias & Distributions ────────────────────────────────
  'mi-13-6': [
    { question:'Which is a statistical question?', options:['How many pets do students in our class have?','How many legs does a spider have?','What is the capital of France?','What year is it?'], answer:0, explanation:'A statistical question expects a variety of answers from different people — the pet question has variability.' },
    { question:'A school has 800 students. A researcher surveys 50. What is the population?', options:['All 800 students','The 50 surveyed','The researcher','The school building'], answer:0, explanation:'The population is the entire group you want to learn about — all 800 students.' },
    { question:'A survey about school lunches is given only to students who buy hot meals. Is this biased?', options:['Yes — it excludes students who bring packed lunches','No — hot-meal students eat at school','No — all students were invited','Yes — but only slightly'], answer:0, explanation:'The sample is biased because it only captures one group\'s views, ignoring packed-lunch students.' },
    { question:'Data set: 3, 4, 5, 5, 6, 6, 7, 25. Which value is an outlier?', options:['25','7','3','6'], answer:0, explanation:'25 is much larger than the rest of the data, making it an outlier.' },
    { question:'What effect does removing an outlier typically have on the mean?', options:['The mean moves closer to the median','The mean stays the same','The mean doubles','The median changes dramatically'], answer:0, explanation:'An outlier pulls the mean away from the centre; removing it brings the mean closer to the median.' },
    { gen: function() {
        var n = pickFrom([50, 100, 200, 500]);
        var sample = pickFrom([10, 20, 25, 50]);
        var opts = buildOpts(sample + ' out of ' + n, [n + ' out of ' + sample, sample + ' out of ' + sample, n + ' out of ' + n]);
        return { q: 'A town has ' + n + ' households. ' + sample + ' are randomly selected for a survey. What is the sample size?',
                 opts: opts, c: 0,
                 e: 'The sample is the ' + sample + ' households selected. The population is all ' + n + '.' };
    }},
    { question:'Which sampling method is most likely to be unbiased?', options:['Randomly selecting names from the full school register','Asking volunteers','Surveying your friends','Picking people at the bus stop'], answer:0, explanation:'Random selection from the full population gives every member an equal chance of being chosen — reducing bias.' },
    { question:'A data set is described as "skewed right." What does this mean?', options:['Most data is on the left, with a tail stretching right','Most data is on the right','Data is evenly spread','All values are the same'], answer:0, explanation:'Right-skewed (positively skewed) means a long tail extends to the right — most values cluster on the left.' },
    { gen: function() {
        var vals = [2, 3, 4, 4, 5, 5, 5, 6, 6, pickFrom([20, 25, 30])];
        var outlier = vals[vals.length - 1];
        var sum = 0; for(var i=0;i<vals.length;i++) sum+=vals[i];
        var mean = Math.round(sum/vals.length*10)/10;
        var opts = buildOpts(outlier, [vals[0], mean, 5]);
        return { q: 'Data: 2, 3, 4, 4, 5, 5, 5, 6, 6, ' + outlier + '. Which value is the outlier?',
                 opts: opts, c: 0,
                 e: outlier + ' is much larger than the rest, which cluster around 4–6.' };
    }},
    { question:'Why is a larger sample generally better than a smaller one?', options:['It is more likely to represent the population accurately','It is cheaper','It always eliminates bias','It is faster to collect'], answer:0, explanation:'Larger samples reduce the effect of unusual values and give a more reliable picture of the population.' }
  ],

  // ── mi-13-7: Combined & Predicted Probability ──────────────────────────────
  'mi-13-7': [
    { question:'Rolling a die: are "rolling a 2" and "rolling a 5" mutually exclusive?', options:['Yes — you cannot roll both at once','No — they can happen together','Only if the die is fair','It depends on the number of rolls'], answer:0, explanation:'On a single roll you get one outcome, so rolling 2 and rolling 5 cannot both happen — they are mutually exclusive.' },
    { question:'P(A)=1/4, P(B)=1/3, A and B are mutually exclusive. What is P(A or B)?', options:['7/12','1/12','1/7','1/2'], answer:0, explanation:'P(A or B) = P(A) + P(B) = 1/4 + 1/3 = 3/12 + 4/12 = 7/12.' },
    { question:'Are "drawing a red card" and "drawing a king" from a standard deck mutually exclusive?', options:['No — the king of hearts and king of diamonds are both red and kings','Yes — a card is either red or a king','Only with jokers removed','It depends on the suit'], answer:0, explanation:'These events overlap because the king of hearts and king of diamonds are both red AND kings.' },
    { gen: function() {
        var p = pickFrom([0.1, 0.2, 0.25, 0.5, 0.75]);
        var trials = pickFrom([40, 60, 80, 100, 200]);
        var expected = p * trials;
        var opts = buildOpts(expected, [trials, p * 10, expected + trials]);
        return { q: 'The probability of winning a game is ' + p + '. If you play ' + trials + ' times, how many wins do you expect?',
                 opts: opts, c: 0,
                 e: 'Expected wins = ' + p + ' × ' + trials + ' = ' + expected + '.' };
    }},
    { gen: function() {
        var total = pickFrom([50, 100, 200]);
        var successes = pickFrom([10, 20, 25, 30, 40, 50]);
        while (successes >= total) successes = pickFrom([10, 20, 25, 30]);
        var ep = successes + '/' + total;
        function gcd(a,b){return b?gcd(b,a%b):a;}
        var g = gcd(successes, total);
        var simplified = (successes/g) + '/' + (total/g);
        var opts = buildOpts(simplified, [(total - successes) + '/' + total, successes + '/' + (total * 2), '1/' + total]);
        return { q: 'In ' + total + ' trials, an event occurred ' + successes + ' times. What is the experimental probability?',
                 opts: opts, c: 0,
                 e: 'P = ' + successes + '/' + total + ' = ' + simplified + '.' };
    }},
    { gen: function() {
        var sides = pickFrom([6, 8, 10, 12]);
        var target = randInt(1, sides);
        var opts = buildOpts('1/' + sides, ['1/' + (sides - 1), target + '/' + sides, '1/' + (sides + 1)]);
        return { q: 'A fair ' + sides + '-sided die is rolled. What is P(rolling a ' + target + ')?',
                 opts: opts, c: 0,
                 e: 'Each face is equally likely: P = 1/' + sides + '.' };
    }},
    { question:'A spinner has P(red)=0.3 and P(blue)=0.5. If red and blue are mutually exclusive, what is P(red or blue)?', options:['0.8','0.15','0.2','1.0'], answer:0, explanation:'P(red or blue) = 0.3 + 0.5 = 0.8.' },
    { gen: function() {
        var p = pickFrom([0.2, 0.25, 0.3, 0.4, 0.5]);
        var trials = pickFrom([100, 200, 500]);
        var expected = p * trials;
        var notExpected = trials - expected;
        var opts = buildOpts(notExpected, [expected, trials, p * trials * 2]);
        return { q: 'P(rain) = ' + p + '. In ' + trials + ' days, how many dry days do you expect?',
                 opts: opts, c: 0,
                 e: 'P(no rain) = 1 − ' + p + ' = ' + (1-p) + '. Expected dry days = ' + (1-p) + ' × ' + trials + ' = ' + notExpected + '.' };
    }},
    { question:'After 1,000 coin flips you got 520 heads. Is the experimental probability close to the theoretical?', options:['Yes — 520/1000 = 0.52, close to 0.5','No — it should be exactly 500','No — 20 extra heads proves bias','Cannot tell without more flips'], answer:0, explanation:'0.52 is very close to the theoretical 0.5 — small deviations are normal with large samples.' },
    { question:'P(A)=0.4, P(B)=0.3, P(A and B)=0.1. What is P(A or B)?', options:['0.6','0.7','0.1','1.0'], answer:0, explanation:'P(A or B) = P(A) + P(B) − P(A and B) = 0.4 + 0.3 − 0.1 = 0.6 (inclusion-exclusion for overlapping events).' }
  ],

  // ── mi-13-8: Scatter Graphs & Bivariate Data ──────────────────────────────
  'mi-13-8': [
    // Easy (Q1–3)
    { question:'What type of graph shows the relationship between two variables using plotted points?', options:['Scatter graph','Bar chart','Pie chart','Line graph'], answer:0, explanation:'A scatter graph plots individual data points to show the relationship between two variables.' },
    { question:'As temperature increases, ice cream sales increase. What type of correlation is this?', options:['Positive correlation','Negative correlation','No correlation','Inverse correlation'], answer:0, explanation:'Both variables increase together — this is positive correlation.' },
    { question:'As the age of a car increases, its value decreases. What type of correlation is this?', options:['Negative correlation','Positive correlation','No correlation','Perfect correlation'], answer:0, explanation:'One variable increases while the other decreases — this is negative correlation.' },
    // Medium (Q4–6)
    { question:'What should a line of best fit do?', options:['Pass through the middle of the data with roughly equal points above and below','Pass through the first and last points','Pass through every data point','Always pass through the origin'], answer:0, explanation:'A line of best fit should follow the trend and have approximately equal numbers of points on each side.' },
    { question:'A scatter graph shows no clear pattern. How would you describe the correlation?', options:['No correlation','Weak positive correlation','Strong negative correlation','Perfect correlation'], answer:0, explanation:'When points are scattered randomly with no clear direction, there is no correlation between the variables.' },
    { question:'Using a line of best fit to estimate a value within the range of the data is called:', options:['Interpolation','Extrapolation','Correlation','Estimation'], answer:0, explanation:'Interpolation means estimating within the range of the data. Extrapolation means estimating beyond the range (less reliable).' },
    // Greater Depth (Q7–8)
    { question:'A student says "The scatter graph proves that eating breakfast causes better test scores." Is this correct?', options:['No — correlation does not prove causation','Yes — the positive correlation proves it','Yes — scatter graphs always show causes','No — you need a pie chart to prove causation'], answer:0, explanation:'Correlation does not prove causation. There may be other factors (confounding variables) involved.' },
    { question:'Why is extrapolation less reliable than interpolation?', options:['The pattern may not continue beyond the data range','Because the line of best fit is inaccurate','Because you use a different formula','Extrapolation is actually more reliable'], answer:0, explanation:'The trend observed in the data may not continue outside the range. The further you extrapolate, the less reliable the estimate.' }
  ],

  // ── mi-13-9: Venn Diagrams for Probability ────────────────────────────────
  'mi-13-9': [
    // Easy (Q1–3)
    { question:'On a Venn diagram, what does the overlapping region of two circles represent?', options:['Elements in both sets (intersection)','Elements in neither set','The universal set','Elements in only one set'], answer:0, explanation:'The overlap shows elements that belong to both sets — the intersection (A ∩ B).' },
    { question:'What does the rectangle around the circles on a Venn diagram represent?', options:['The universal set','The intersection','The union','The complement'], answer:0, explanation:'The rectangle represents the universal set — all possible elements being considered.' },
    { question:'In a class of 25, 15 like maths and 10 like science. 6 like both. How many like maths only?', options:['9','15','6','19'], answer:0, explanation:'Maths only = total maths − both = 15 − 6 = 9.' },
    // Medium (Q4–6)
    { question:'40 people were surveyed. 22 own a cat, 17 own a dog, 8 own both. How many own neither?', options:['9','15','31','3'], answer:0, explanation:'Cat only = 22−8=14. Dog only = 17−8=9. Both = 8. Total with pets = 14+9+8=31. Neither = 40−31 = 9.' },
    { question:'Using the previous Venn diagram (40 people, 22 cat, 17 dog, 8 both), what is P(cat or dog)?', options:['31/40','22/40','8/40','9/40'], answer:0, explanation:'People with cat or dog or both = 14+9+8 = 31. P(cat or dog) = 31/40.' },
    { question:'What is the complement of set A (written A′)?', options:['Everything NOT in set A','Everything in set A','The intersection of A and B','The universal set'], answer:0, explanation:'The complement A′ contains all elements in the universal set that are NOT in A.' },
    // Greater Depth (Q7–8)
    { question:'50 students: 30 study French, 25 study Spanish, 10 study both. What is P(neither)?', options:['5/50 = 1/10','10/50','15/50','45/50'], answer:0, explanation:'French only = 30−10=20. Spanish only = 25−10=15. Both = 10. Total studying = 20+15+10=45. Neither = 50−45=5. P = 5/50 = 1/10.' },
    { question:'In a Venn diagram, if A∩B = ∅ (empty set), what does this tell you about events A and B?', options:['They are mutually exclusive','They are certain','They are complementary','They always happen together'], answer:0, explanation:'If the intersection is empty, the events cannot happen at the same time — they are mutually exclusive.' }
  ]

});
