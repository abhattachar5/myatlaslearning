// math-lessons-6.js — Lessons for Topics 22-25
Object.assign(LESSONS, {

'mi-22-1': {
  title: 'Graph Inequalities',
  sections: [
    {
      heading: 'Inequality Symbols',
      content: '<p>Inequalities describe a <strong>range</strong> of possible values rather than a single value. The key distinction to master is whether the boundary value itself is included.</p><table style="border-collapse:collapse;width:100%;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Symbol</th><th style="border:1px solid #ccc;padding:8px">Meaning</th><th style="border:1px solid #ccc;padding:8px">Boundary included?</th><th style="border:1px solid #ccc;padding:8px">Circle on number line</th></tr><tr><td style="border:1px solid #ccc;padding:8px;text-align:center;font-size:1.2em"><strong>&lt;</strong></td><td style="border:1px solid #ccc;padding:8px">Less than</td><td style="border:1px solid #ccc;padding:8px;color:#c62828">No</td><td style="border:1px solid #ccc;padding:8px">Open ○</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px;text-align:center;font-size:1.2em"><strong>≤</strong></td><td style="border:1px solid #ccc;padding:8px">Less than or equal to</td><td style="border:1px solid #ccc;padding:8px;color:#2e7d32">Yes</td><td style="border:1px solid #ccc;padding:8px">Closed ●</td></tr><tr><td style="border:1px solid #ccc;padding:8px;text-align:center;font-size:1.2em"><strong>&gt;</strong></td><td style="border:1px solid #ccc;padding:8px">Greater than</td><td style="border:1px solid #ccc;padding:8px;color:#c62828">No</td><td style="border:1px solid #ccc;padding:8px">Open ○</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px;text-align:center;font-size:1.2em"><strong>≥</strong></td><td style="border:1px solid #ccc;padding:8px">Greater than or equal to</td><td style="border:1px solid #ccc;padding:8px;color:#2e7d32">Yes</td><td style="border:1px solid #ccc;padding:8px">Closed ●</td></tr></table>'
    },
    {
      heading: 'Graphing on a Number Line',
      content: '<p>A number line diagram makes the solution set of an inequality immediately visual. The arrow shows all values in the solution; the circle shows whether the boundary is included.</p><svg width="100%" height="130" viewBox="0 0 400 130" style="max-width:400px;display:block;margin:0.75em 0"><text x="0" y="16" font-size="12" font-weight="bold" fill="#1565c0">x &gt; 3</text><line x1="20" y1="30" x2="380" y2="30" stroke="#ccc" stroke-width="1.5"/><line x1="200" y1="30" x2="370" y2="30" stroke="#1565c0" stroke-width="3"/><circle cx="200" cy="30" r="6" fill="white" stroke="#1565c0" stroke-width="2"/><polygon points="370,30 360,25 360,35" fill="#1565c0"/><text x="197" y="48" text-anchor="middle" font-size="11" fill="#555">3</text><text x="0" y="66" font-size="12" font-weight="bold" fill="#c62828">x ≤ −1</text><line x1="20" y1="80" x2="380" y2="80" stroke="#ccc" stroke-width="1.5"/><line x1="160" y1="80" x2="30" y2="80" stroke="#c62828" stroke-width="3"/><circle cx="160" cy="80" r="6" fill="#c62828" stroke="#c62828" stroke-width="2"/><polygon points="30,80 40,75 40,85" fill="#c62828"/><text x="157" y="98" text-anchor="middle" font-size="11" fill="#555">−1</text><text x="0" y="116" font-size="12" font-weight="bold" fill="#2e7d32">5 ≤ x ≤ 10</text><line x1="20" y1="120" x2="380" y2="120" stroke="#ccc" stroke-width="1.5"/><line x1="170" y1="120" x2="320" y2="120" stroke="#2e7d32" stroke-width="3"/><circle cx="170" cy="120" r="6" fill="#2e7d32" stroke="#2e7d32"/><circle cx="320" cy="120" r="6" fill="#2e7d32" stroke="#2e7d32"/><text x="167" y="138" text-anchor="middle" font-size="11" fill="#555">5</text><text x="317" y="138" text-anchor="middle" font-size="11" fill="#555">10</text></svg>'
    },
    {
      heading: 'Writing Inequalities from Words',
      content: '<p>Real-life situations often contain inequality language. Learn these key phrases and the symbol each maps to.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>"at least 18"</strong> → x ≥ 18<br><span style="font-size:0.85em;color:#555">includes 18</span></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>"more than 5"</strong> → x &gt; 5<br><span style="font-size:0.85em;color:#555">excludes 5</span></div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>"no more than 100"</strong> → x ≤ 100<br><span style="font-size:0.85em;color:#555">includes 100</span></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>"fewer than 20"</strong> → x &lt; 20<br><span style="font-size:0.85em;color:#555">excludes 20</span></div></div>'
    }
  ]
},

'mi-22-2': {
  title: 'Solve One-Step Inequalities',
  sections: [
    {
      heading: 'Solving Inequalities',
      content: '<p>Solve inequalities using the same inverse operations as equations — but with one crucial extra rule that catches many students out.</p><div style="background:#fce4ec;padding:1em;border-radius:8px;border-left:4px solid #c62828;margin:0.75em 0"><strong>⚠️ The Flip Rule:</strong> When you <em>multiply or divide both sides by a negative number</em>, the inequality sign must REVERSE direction.<br>Example: −2x &lt; 6 &nbsp;→ divide by −2 → x <strong>&gt;</strong> −3 (sign flips!)</div><p><strong>Why?</strong> Think of the number line: if 2 &lt; 5, then multiplying both by −1 gives −2 and −5. But −2 &gt; −5 — the order reverses.</p>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>x + 5 &gt; 12</strong><br>−5 from both sides<br>x &gt; <strong>7</strong><br><span style="font-size:0.85em;color:#555">No sign change (no ÷ by negative)</span></div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>−2x ≤ 8</strong><br>÷ −2 both sides<br><em>Sign flips!</em><br>x ≥ <strong>−4</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>x/3 &lt; 5</strong><br>× 3 both sides<br>x &lt; <strong>15</strong><br><span style="font-size:0.85em;color:#555">No sign change (× positive)</span></div></div>'
    },
    {
      heading: 'Graphing the Solution',
      content: '<p>After solving, always represent the solution on a number line. The type of circle (open or closed) and the direction of the arrow must both be correct.</p><svg width="100%" height="110" viewBox="0 0 400 110" style="max-width:400px;display:block;margin:0.75em 0"><text x="0" y="16" font-size="11" fill="#2e7d32">x &gt; 7 — open circle, arrow right</text><line x1="20" y1="30" x2="380" y2="30" stroke="#ccc" stroke-width="1.5"/><line x1="210" y1="30" x2="370" y2="30" stroke="#2e7d32" stroke-width="2.5"/><circle cx="210" cy="30" r="5" fill="white" stroke="#2e7d32" stroke-width="2"/><polygon points="370,30 360,26 360,34" fill="#2e7d32"/><text x="208" y="46" text-anchor="middle" font-size="10" fill="#555">7</text><text x="0" y="66" font-size="11" fill="#1565c0">x ≥ −4 — closed circle, arrow right</text><line x1="20" y1="80" x2="380" y2="80" stroke="#ccc" stroke-width="1.5"/><line x1="140" y1="80" x2="370" y2="80" stroke="#1565c0" stroke-width="2.5"/><circle cx="140" cy="80" r="5" fill="#1565c0" stroke="#1565c0" stroke-width="2"/><polygon points="370,80 360,76 360,84" fill="#1565c0"/><text x="138" y="96" text-anchor="middle" font-size="10" fill="#555">−4</text></svg>'
    }
  ]
},

'mi-22-3': {
  title: 'Inequality Word Problems',
  sections: [
    {
      heading: 'Writing Inequalities from Word Problems',
      content: '<p>Identify the variable, then find the key phrase that tells you the type of inequality. Circle that phrase in the problem before writing anything.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e8f5e9;padding:8px;border-radius:8px;font-size:0.9em">"at least" / "minimum" → <strong>≥</strong></div><div style="background:#e3f2fd;padding:8px;border-radius:8px;font-size:0.9em">"at most" / "no more than" → <strong>≤</strong></div><div style="background:#fff3e0;padding:8px;border-radius:8px;font-size:0.9em">"more than" / "exceeds" → <strong>&gt;</strong></div><div style="background:#fce4ec;padding:8px;border-radius:8px;font-size:0.9em">"fewer than" / "less than" → <strong>&lt;</strong></div></div><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> "You need <em>at least</em> 50 points to pass."<br>Let p = points scored. &nbsp; p ≥ 50</div>'
    },
    {
      heading: 'Solving and Interpreting',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 1:</strong> A taxi charges £2 plus £1.50 per mile. Stay under £14.<br>2 + 1.5m &lt; 14<br>1.5m &lt; 12<br>m &lt; 8<br><strong>You can travel fewer than 8 miles.</strong></div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 2:</strong> A lift holds at most 600 kg. Average person weighs 75 kg.<br>75n ≤ 600<br>n ≤ 8<br><strong>Maximum 8 people in the lift.</strong></div>'
    },
    {
      heading: 'Check Your Answer',
      content: '<p>After solving, always substitute a value back into the original word problem to check your answer makes sense in context. Test a boundary value and a value just inside the solution.</p><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>For m &lt; 8 (taxi example):</strong><br>Try m = 7.9: cost = £2 + 1.5(7.9) = £2 + £11.85 = £13.85 ✓ (under £14)<br>Try m = 8: cost = £2 + £12 = £14 — this equals, not under, so m = 8 is NOT valid ✓<br>The strict inequality &lt; (not ≤) was correct — the cost must be <em>under</em> £14.</div>'
    }
  ]
},

'mi-23-1': {
  title: 'Two-Variable Equations',
  sections: [
    {
      heading: 'What are Two-Variable Equations?',
      content: '<p>A <strong>two-variable equation</strong> such as y = 2x + 1 relates two quantities. Unlike a one-variable equation (which has one solution), a two-variable equation has <em>infinitely many solutions</em> — any ordered pair (x, y) that makes it true.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Solutions of y = 2x + 1:</strong><table style="border-collapse:collapse;width:100%;margin-top:0.5em;font-size:0.9em"><tr style="background:#c8e6c9"><td style="padding:6px 10px;border:1px solid #ccc"><strong>x</strong></td><td style="padding:6px 10px;border:1px solid #ccc">0</td><td style="padding:6px 10px;border:1px solid #ccc">1</td><td style="padding:6px 10px;border:1px solid #ccc">2</td><td style="padding:6px 10px;border:1px solid #ccc">3</td><td style="padding:6px 10px;border:1px solid #ccc">−1</td></tr><tr><td style="padding:6px 10px;border:1px solid #ccc"><strong>y</strong></td><td style="padding:6px 10px;border:1px solid #ccc">1</td><td style="padding:6px 10px;border:1px solid #ccc">3</td><td style="padding:6px 10px;border:1px solid #ccc">5</td><td style="padding:6px 10px;border:1px solid #ccc">7</td><td style="padding:6px 10px;border:1px solid #ccc">−1</td></tr></table>Each column is a solution: (0,1), (1,3), (2,5)…</div>'
    },
    {
      heading: 'Checking Solutions',
      content: '<p>To check if (a, b) is a solution: substitute x = a into the equation and see whether y = b results. If yes — it is a solution. If not — it isn\'t.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Is (3, 7) a solution to y = 2x + 1?</strong><br>y = 2(3) + 1 = 7 ✓<br><strong>Yes</strong></div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Is (2, 5) a solution to y = −x − 2?</strong><br>y = −(2) − 2 = −4 ≠ 5 ✗<br><strong>No</strong></div></div>'
    },
    {
      heading: 'Independent and Dependent Variables',
      content: '<p>In y = 3x − 2, the variable x is the <strong>independent variable</strong> (you choose its value freely) and y is the <strong>dependent variable</strong> (its value is determined by x).</p><svg width="100%" height="65" viewBox="0 0 380 65" style="max-width:380px;display:block;margin:0.75em 0"><rect x="0"   y="10" width="100" height="45" rx="8" fill="#e3f2fd"/><text x="50"  y="30" text-anchor="middle" font-size="12" fill="#1565c0" font-weight="bold">x (input)</text><text x="50"  y="47" text-anchor="middle" font-size="11" fill="#1565c0">You choose</text><rect x="140" y="10" width="100" height="45" rx="8" fill="#fff3e0"/><text x="190" y="30" text-anchor="middle" font-size="12" fill="#e65100" font-weight="bold">y = 3x − 2</text><text x="190" y="47" text-anchor="middle" font-size="11" fill="#e65100">Formula</text><rect x="280" y="10" width="100" height="45" rx="8" fill="#e8f5e9"/><text x="330" y="30" text-anchor="middle" font-size="12" fill="#2e7d32" font-weight="bold">y (output)</text><text x="330" y="47" text-anchor="middle" font-size="11" fill="#2e7d32">Calculated</text><polygon points="100,32 138,32" stroke="#555" stroke-width="1.5" fill="none"/><polygon points="136,28 140,32 136,36" fill="#555"/><polygon points="240,32 278,32" stroke="#555" stroke-width="1.5" fill="none"/><polygon points="276,28 280,32 276,36" fill="#555"/></svg><p>Real-life example: y = total cost, x = number of items bought. The cost depends on how many you buy — so cost is the dependent variable.</p>'
    }
  ]
},

'mi-23-2': {
  title: 'Tables & Graphs of Linear Equations',
  sections: [
    {
      heading: 'Completing a Table of Values',
      content: '<p>Substitute each value of x into the equation to find the matching y. Always show substitution working clearly — one arithmetic slip changes the whole graph.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example: y = 2x + 3, for x = 0, 1, 2, 3</strong><table style="border-collapse:collapse;width:100%;margin-top:0.5em;font-size:0.9em"><tr style="background:#c8e6c9"><th style="padding:7px;border:1px solid #ccc">x</th><th style="padding:7px;border:1px solid #ccc">Working</th><th style="padding:7px;border:1px solid #ccc">y</th></tr><tr><td style="padding:7px;border:1px solid #ccc">0</td><td style="padding:7px;border:1px solid #ccc">2(0)+3</td><td style="padding:7px;border:1px solid #ccc"><strong>3</strong></td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">1</td><td style="padding:7px;border:1px solid #ccc">2(1)+3</td><td style="padding:7px;border:1px solid #ccc"><strong>5</strong></td></tr><tr><td style="padding:7px;border:1px solid #ccc">2</td><td style="padding:7px;border:1px solid #ccc">2(2)+3</td><td style="padding:7px;border:1px solid #ccc"><strong>7</strong></td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">3</td><td style="padding:7px;border:1px solid #ccc">2(3)+3</td><td style="padding:7px;border:1px solid #ccc"><strong>9</strong></td></tr></table></div>'
    },
    {
      heading: 'Plotting a Straight-Line Graph',
      content: '<p>Plot each (x, y) pair from your table as a point on a grid, then join them with a straight line using a ruler. The line can be extended beyond your plotted points.</p><svg width="100%" height="200" viewBox="0 0 280 200" style="max-width:280px;display:block;margin:0.75em auto"><line x1="40" y1="10" x2="40"  y2="180" stroke="#ccc" stroke-width="1"/><line x1="40" y1="180" x2="260" y2="180" stroke="#ccc" stroke-width="1"/><g stroke="#eee" stroke-width="0.5"><line x1="90"  y1="10" x2="90"  y2="180"/><line x1="140" y1="10" x2="140" y2="180"/><line x1="190" y1="10" x2="190" y2="180"/><line x1="240" y1="10" x2="240" y2="180"/><line x1="40" y1="130" x2="260" y2="130"/><line x1="40" y1="80"  x2="260" y2="80"/><line x1="40" y1="30"  x2="260" y2="30"/></g><line x1="40" y1="155" x2="230" y2="25" stroke="#1565c0" stroke-width="2"/><circle cx="40"  cy="155" r="4" fill="#c62828"/><circle cx="90"  cy="130" r="4" fill="#c62828"/><circle cx="140" cy="105" r="4" fill="#c62828"/><circle cx="190" cy="80"  r="4" fill="#c62828"/><text x="30" y="185" font-size="10" fill="#555">0</text><text x="85" y="195" font-size="10" fill="#555">1</text><text x="135" y="195" font-size="10" fill="#555">2</text><text x="185" y="195" font-size="10" fill="#555">3</text><text x="22" y="158" font-size="10" fill="#555">3</text><text x="22" y="133" font-size="10" fill="#555">5</text><text x="22" y="108" font-size="10" fill="#555">7</text><text x="22" y="83"  font-size="10" fill="#555">9</text><text x="60" y="35" font-size="11" fill="#1565c0" font-weight="bold">y = 2x + 3</text><text x="22" y="10" font-size="10" fill="#555">y</text><text x="255" y="185" font-size="10" fill="#555">x</text></svg><p><strong>y-intercept</strong> (where the line crosses the y-axis): the constant in the equation. For y = 2x + 3, the y-intercept is <strong>3</strong>. <strong>Gradient</strong>: how steep the line is. Here it is <strong>2</strong> — y increases by 2 for every 1 increase in x.</p>'
    },
    {
      heading: 'Reading the Graph',
      content: '<p>Once plotted, the graph lets you find values without substituting into the equation. Trace vertically from an x value to the line, then horizontally to the y-axis.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Positive gradient</strong><br>Line slopes ↗ upward left to right<br>y increases as x increases</div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Negative gradient</strong><br>Line slopes ↘ downward left to right<br>y decreases as x increases</div></div>'
    }
  ]
},

'mi-23-3': {
  title: 'Interpret Graphs',
  sections: [
    {
      heading: 'Reading Information from Graphs',
      content: '<p>Before reading any values, always check: What do the axes represent? What are the units? What does the gradient mean in context?</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>y-intercept</strong><br>Starting value when x = 0<br><span style="font-size:0.85em;color:#555">e.g. fixed cost, initial distance</span></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>x-intercept</strong><br>When y = 0<br><span style="font-size:0.85em;color:#555">e.g. break-even point, return to start</span></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Gradient</strong><br>Rate of change<br><span style="font-size:0.85em;color:#555">e.g. speed, cost per unit</span></div><div style="background:#f3e5f5;padding:10px;border-radius:8px"><strong>Flat section</strong><br>No change<br><span style="font-size:0.85em;color:#555">e.g. stationary, constant temperature</span></div></div>'
    },
    {
      heading: 'Distance-Time Graphs',
      content: '<p>On a distance-time graph, the gradient gives the <strong>speed</strong>. A steeper gradient = faster speed.</p><svg width="100%" height="155" viewBox="0 0 300 155" style="max-width:300px;display:block;margin:0.75em auto"><line x1="30" y1="10"  x2="30"  y2="130" stroke="#555" stroke-width="1.5"/><line x1="30" y1="130" x2="280" y2="130" stroke="#555" stroke-width="1.5"/><polyline points="30,130 80,70 130,70 180,30 230,110 280,110" stroke="#1565c0" stroke-width="2.5" fill="none"/><text x="50"  y="95"  font-size="10" fill="#2e7d32">Fast</text><text x="100" y="65"  font-size="10" fill="#c62828">Stopped</text><text x="148" y="45"  font-size="10" fill="#6a1b9a">Faster</text><text x="198" y="80"  font-size="10" fill="#e65100">Return</text><text x="248" y="105" font-size="10" fill="#c62828">Stopped</text><text x="5"  y="135" font-size="9" fill="#555">0</text><text x="2"  y="10"  font-size="10" fill="#555">d</text><text x="275" y="143" font-size="10" fill="#555">t</text></svg><p>A <strong>horizontal line</strong> means stationary — time passes but distance from start doesn\'t change. A <strong>downward slope</strong> means returning towards the start point.</p>'
    },
    {
      heading: 'Other Real-World Graphs',
      content: '<p>The same skills apply to many types of real-life graphs — always read the labels and units before interpreting.</p><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px;font-size:0.9em"><strong>Cost graphs</strong><br>y-intercept = fixed cost<br>gradient = cost per unit</div><div style="background:#fff3e0;padding:10px;border-radius:8px;font-size:0.9em"><strong>Temperature</strong><br>Positive gradient = heating<br>Negative = cooling</div><div style="background:#f3e5f5;padding:10px;border-radius:8px;font-size:0.9em"><strong>Profit graphs</strong><br>x-intercept = break-even<br>(profit = 0)</div></div>'
    }
  ]
},

'mi-24-1': {
  title: 'Classify Polygons & Angles',
  sections: [
    {
      heading: 'Types of Angles',
      content: '<svg width="100%" height="90" viewBox="0 0 420 90" style="max-width:420px;display:block;margin:0.75em 0"><rect x="0"   y="5" width="62" height="80" rx="6" fill="#e3f2fd"/><rect x="70"  y="5" width="62" height="80" rx="6" fill="#e8f5e9"/><rect x="140" y="5" width="62" height="80" rx="6" fill="#fff3e0"/><rect x="210" y="5" width="62" height="80" rx="6" fill="#f3e5f5"/><rect x="280" y="5" width="62" height="80" rx="6" fill="#fce4ec"/><rect x="350" y="5" width="62" height="80" rx="6" fill="#e0f7fa"/><text x="31"  y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#1565c0">Acute</text><text x="31"  y="48" text-anchor="middle" font-size="10" fill="#1565c0">0° – 90°</text><text x="101" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#2e7d32">Right</text><text x="101" y="48" text-anchor="middle" font-size="10" fill="#2e7d32">= 90°</text><text x="171" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#e65100">Obtuse</text><text x="171" y="48" text-anchor="middle" font-size="10" fill="#e65100">90°–180°</text><text x="241" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#6a1b9a">Straight</text><text x="241" y="48" text-anchor="middle" font-size="10" fill="#6a1b9a">= 180°</text><text x="311" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#c62828">Reflex</text><text x="311" y="48" text-anchor="middle" font-size="10" fill="#c62828">180°–360°</text><text x="381" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#00695c">Full turn</text><text x="381" y="48" text-anchor="middle" font-size="10" fill="#00695c">= 360°</text><line x1="10" y1="72" x2="55" y2="72" stroke="#1565c0" stroke-width="1.5"/><line x1="10" y1="72" x2="30" y2="58" stroke="#1565c0" stroke-width="1.5"/><line x1="80" y1="72" x2="125" y2="72" stroke="#2e7d32" stroke-width="1.5"/><line x1="80" y1="72" x2="80"  y2="56" stroke="#2e7d32" stroke-width="1.5"/><rect x="80" y="56" width="8" height="8" fill="none" stroke="#2e7d32" stroke-width="1.5"/></svg>'
    },
    {
      heading: 'Triangles',
      content: '<p>Triangles are classified in two independent ways — by their angles and by their sides.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div><strong>By angles:</strong><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin-top:0.4em"><tr style="background:#e3f2fd"><td style="padding:6px;border:1px solid #ccc">Acute</td><td style="padding:6px;border:1px solid #ccc">All angles &lt; 90°</td></tr><tr><td style="padding:6px;border:1px solid #ccc">Right-angled</td><td style="padding:6px;border:1px solid #ccc">One angle = 90°</td></tr><tr style="background:#e3f2fd"><td style="padding:6px;border:1px solid #ccc">Obtuse</td><td style="padding:6px;border:1px solid #ccc">One angle &gt; 90°</td></tr></table></div><div><strong>By sides:</strong><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin-top:0.4em"><tr style="background:#e8f5e9"><td style="padding:6px;border:1px solid #ccc">Equilateral</td><td style="padding:6px;border:1px solid #ccc">3 equal sides, 60° each</td></tr><tr><td style="padding:6px;border:1px solid #ccc">Isosceles</td><td style="padding:6px;border:1px solid #ccc">2 equal sides, 2 equal base angles</td></tr><tr style="background:#e8f5e9"><td style="padding:6px;border:1px solid #ccc">Scalene</td><td style="padding:6px;border:1px solid #ccc">All sides different</td></tr></table></div></div>'
    },
    {
      heading: 'Quadrilaterals and Polygons',
      content: '<p>Key quadrilaterals and their distinguishing properties:</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Shape</th><th style="padding:7px;border:1px solid #ccc">Key properties</th></tr><tr><td style="padding:7px;border:1px solid #ccc"><strong>Square</strong></td><td style="padding:7px;border:1px solid #ccc">4 equal sides, 4 right angles, 4 lines of symmetry</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc"><strong>Rectangle</strong></td><td style="padding:7px;border:1px solid #ccc">Opposite sides equal, 4 right angles</td></tr><tr><td style="padding:7px;border:1px solid #ccc"><strong>Rhombus</strong></td><td style="padding:7px;border:1px solid #ccc">4 equal sides, opposite angles equal, no right angles</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc"><strong>Parallelogram</strong></td><td style="padding:7px;border:1px solid #ccc">Opposite sides parallel and equal</td></tr><tr><td style="padding:7px;border:1px solid #ccc"><strong>Trapezium</strong></td><td style="padding:7px;border:1px solid #ccc">Exactly one pair of parallel sides</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc"><strong>Kite</strong></td><td style="padding:7px;border:1px solid #ccc">Two pairs of adjacent equal sides</td></tr></table><p>Polygon names: triangle (3), quadrilateral (4), pentagon (5), hexagon (6), heptagon (7), octagon (8), nonagon (9), decagon (10). A <strong>regular</strong> polygon has all sides and all angles equal.</p>'
    }
  ]
},

'mi-24-2': {
  title: 'Angles in Triangles & Quadrilaterals',
  sections: [
    {
      heading: 'Angle Sum Rules',
      content: '<p>These rules are essential for finding missing angles — learn them so well you never have to look them up.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:12px;border-radius:8px;text-align:center"><strong style="font-size:1.1em;color:#2e7d32">Triangle</strong><br><span style="font-size:1.5em;font-weight:bold;color:#2e7d32">180°</span><br><span style="font-size:0.85em;color:#555">Always — no exceptions</span></div><div style="background:#e3f2fd;padding:12px;border-radius:8px;text-align:center"><strong style="font-size:1.1em;color:#1565c0">Quadrilateral</strong><br><span style="font-size:1.5em;font-weight:bold;color:#1565c0">360°</span><br><span style="font-size:0.85em;color:#555">Any 4-sided shape</span></div></div><p><strong>General polygon formula:</strong> Interior angle sum = (n − 2) × 180°, where n = number of sides.<br>Pentagon (n=5): (5−2) × 180° = 540°. Each interior angle of a <em>regular</em> pentagon = 540° ÷ 5 = <strong>108°</strong></p>'
    },
    {
      heading: 'Finding Missing Angles',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>Triangle example</strong><br>Two angles: 47° and 68°<br>Third = 180° − 47° − 68°<br>= <strong>65°</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Quadrilateral example</strong><br>Three angles: 90°, 110°, 75°<br>Fourth = 360° − 275°<br>= <strong>85°</strong></div></div><p><strong>Tip:</strong> Always add your known angles first — one subtraction is less error-prone than multiple subtractions.</p>'
    },
    {
      heading: 'Special Cases',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Isosceles triangle:</strong> The two base angles are always equal. If the apex angle is given as 70°, the base angles each = (180° − 70°) ÷ 2 = <strong>55°</strong>.</div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Parallelogram:</strong> Opposite angles are equal. Adjacent angles are supplementary (add to 180°). If one angle is 120°, the adjacent angle = <strong>60°</strong>, and the opposite angle = <strong>120°</strong>.</div>'
    }
  ]
},

'mi-24-3': {
  title: 'Parallel Lines & Transversals',
  sections: [
    {
      heading: 'Angle Relationships',
      content: '<p>When a straight line (called a <strong>transversal</strong>) crosses two parallel lines, it creates three types of angle pairs — all of which can be found from a single given angle.</p><svg width="100%" height="155" viewBox="0 0 300 155" style="max-width:300px;display:block;margin:0.75em auto"><line x1="20"  y1="50"  x2="280" y2="50"  stroke="#1565c0" stroke-width="2"/><line x1="20"  y1="110" x2="280" y2="110" stroke="#1565c0" stroke-width="2"/><line x1="80"  y1="10"  x2="200" y2="150" stroke="#c62828" stroke-width="2"/><text x="22"  y="44"  font-size="10" fill="#1565c0">parallel line 1</text><text x="22"  y="104" font-size="10" fill="#1565c0">parallel line 2</text><text x="128" y="30"  font-size="11" fill="#2e7d32" font-weight="bold">a</text><text x="150" y="45"  font-size="11" fill="#2e7d32" font-weight="bold">b</text><text x="128" y="62"  font-size="11" fill="#e65100" font-weight="bold">c</text><text x="148" y="105" font-size="11" fill="#2e7d32" font-weight="bold">a</text><text x="168" y="125" font-size="11" fill="#6a1b9a" font-weight="bold">d</text><text x="200" y="72"  font-size="9"  fill="#555">F-shape</text><text x="200" y="85"  font-size="9"  fill="#555">Z-shape</text><text x="200" y="98"  font-size="9"  fill="#555">C-shape</text></svg><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.5em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Pair type</th><th style="padding:7px;border:1px solid #ccc">Nickname</th><th style="padding:7px;border:1px solid #ccc">Relationship</th></tr><tr><td style="padding:7px;border:1px solid #ccc">Corresponding</td><td style="padding:7px;border:1px solid #ccc">F-angles</td><td style="padding:7px;border:1px solid #ccc;font-weight:bold">Equal</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Alternate</td><td style="padding:7px;border:1px solid #ccc">Z-angles</td><td style="padding:7px;border:1px solid #ccc;font-weight:bold">Equal</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Co-interior</td><td style="padding:7px;border:1px solid #ccc">C-angles</td><td style="padding:7px;border:1px solid #ccc;font-weight:bold">Sum to 180°</td></tr></table>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Given angle = 65°. Find the other angles.</strong><br><table style="border-collapse:collapse;width:100%;margin-top:0.5em;font-size:0.9em"><tr style="background:#c8e6c9"><td style="padding:6px;border:1px solid #ccc">Corresponding angle</td><td style="padding:6px;border:1px solid #ccc;font-weight:bold">65°</td><td style="padding:6px;border:1px solid #ccc">Equal (F-angles)</td></tr><tr><td style="padding:6px;border:1px solid #ccc">Alternate angle</td><td style="padding:6px;border:1px solid #ccc;font-weight:bold">65°</td><td style="padding:6px;border:1px solid #ccc">Equal (Z-angles)</td></tr><tr style="background:#c8e6c9"><td style="padding:6px;border:1px solid #ccc">Co-interior angle</td><td style="padding:6px;border:1px solid #ccc;font-weight:bold">115°</td><td style="padding:6px;border:1px solid #ccc">180° − 65° (C-angles)</td></tr></table></div>'
    },
    {
      heading: 'Writing Geometric Reasons',
      content: '<p>In exam questions that ask you to "give a reason", you must state both the angle relationship <em>and</em> the fact that the lines are parallel.</p><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Acceptable reasons:</strong><ul style="margin:0.3em 0"><li>"Corresponding angles, lines AB and CD are parallel"</li><li>"Alternate angles, lines PQ and RS are parallel"</li><li>"Co-interior angles sum to 180°, as PQ ∥ RS"</li></ul></div><p>Saying just "F-angles" or "Z-angles" without mentioning that the lines are parallel will not earn full marks.</p>'
    }
  ]
},

'mi-25-1': {
  title: 'Line & Rotational Symmetry',
  sections: [
    {
      heading: 'Lines of Symmetry',
      content: '<p>A <strong>line of symmetry</strong> (also called a mirror line) divides a shape into two halves that are exact reflections of each other. Fold along the line — the two halves must match perfectly.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Shape</th><th style="padding:7px;border:1px solid #ccc">Lines of symmetry</th></tr><tr><td style="padding:7px;border:1px solid #ccc">Equilateral triangle</td><td style="padding:7px;border:1px solid #ccc">3</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Square</td><td style="padding:7px;border:1px solid #ccc">4</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Rectangle (non-square)</td><td style="padding:7px;border:1px solid #ccc">2</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Regular hexagon</td><td style="padding:7px;border:1px solid #ccc">6</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Circle</td><td style="padding:7px;border:1px solid #ccc">Infinite</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Scalene triangle</td><td style="padding:7px;border:1px solid #ccc">0</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Regular n-gon</td><td style="padding:7px;border:1px solid #ccc">n</td></tr></table>'
    },
    {
      heading: 'Rotational Symmetry',
      content: '<p>A shape has <strong>rotational symmetry</strong> if it looks identical after rotating by less than 360°. The <strong>order</strong> is how many times it maps onto itself in a full turn.</p><svg width="100%" height="82" viewBox="0 0 480 82" style="max-width:480px;display:block;margin:0.75em 0"><polygon points="60,5 35,50 85,50" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/><rect x="120" y="5" width="48" height="45" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/><ellipse cx="245" cy="27" rx="40" ry="22" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/><polygon points="350,5 420,50 365,50" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/><text x="60"  y="62" text-anchor="middle" font-size="10" fill="#2e7d32" font-weight="bold">Equil. △</text><text x="144" y="62" text-anchor="middle" font-size="10" fill="#1565c0" font-weight="bold">Square</text><text x="245" y="62" text-anchor="middle" font-size="10" fill="#e65100" font-weight="bold">Parallelogram</text><text x="378" y="62" text-anchor="middle" font-size="10" fill="#6a1b9a" font-weight="bold">Scalene △</text><text x="60"  y="76" text-anchor="middle" font-size="9"  fill="#555">Order 3</text><text x="144" y="76" text-anchor="middle" font-size="9"  fill="#555">Order 4</text><text x="245" y="76" text-anchor="middle" font-size="9"  fill="#555">Order 2</text><text x="378" y="76" text-anchor="middle" font-size="9"  fill="#555">Order 1</text></svg><p>Order 1 means <em>no rotational symmetry</em> — the shape only looks the same after a full 360° turn.</p>'
    },
    {
      heading: 'Completing Symmetric Patterns',
      content: '<p>To complete a pattern with a line of symmetry: for each marked point or line, count the perpendicular distance to the mirror line, then place the corresponding point at the same distance on the other side.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Steps:</strong><ol style="margin:0.3em 0;padding-left:1.3em"><li>Draw a perpendicular from each point to the mirror line.</li><li>Measure the distance to the mirror line.</li><li>Mark the same distance on the other side.</li><li>Join the reflected points to complete the shape.</li></ol></div>'
    }
  ]
},

'mi-25-2': {
  title: 'Reflections & Translations',
  sections: [
    {
      heading: 'Reflections',
      content: '<p>A <strong>reflection</strong> flips a shape across a mirror line. Every point moves perpendicularly to the mirror line and lands the same distance on the other side. The shape is not rotated or resized.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Reflect in x-axis</strong> (y = 0)<br>(x, y) → (x, −y)<br>Example: (4, 3) → <strong>(4, −3)</strong></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Reflect in y-axis</strong> (x = 0)<br>(x, y) → (−x, y)<br>Example: (4, 3) → <strong>(−4, 3)</strong></div></div><svg width="100%" height="105" viewBox="0 0 250 105" style="max-width:250px;display:block;margin:0.5em auto"><line x1="125" y1="5" x2="125" y2="100" stroke="#c62828" stroke-width="1.5" stroke-dasharray="4,3"/><text x="128" y="14" font-size="10" fill="#c62828">y-axis</text><rect x="135" y="25" width="60" height="50" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/><rect x="55"  y="25" width="60" height="50" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/><text x="165" y="55" text-anchor="middle" font-size="10" fill="#1565c0">Original</text><text x="85"  y="55" text-anchor="middle" font-size="10" fill="#2e7d32">Reflection</text></svg>'
    },
    {
      heading: 'Translations',
      content: '<p>A <strong>translation</strong> slides a shape by a fixed amount in a given direction. It is described by a vector — a column vector or written as (a, b).</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px">Vector (a, b): move <strong>a</strong> right (negative = left), <strong>b</strong> up (negative = down)</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Translate point (3, −1) by vector (−2, 5):<br>New x = 3 + (−2) = 1<br>New y = −1 + 5 = 4<br>New position: <strong>(1, 4)</strong></div><p>Under a translation, the shape does not rotate or reflect — it simply moves. Every point moves by exactly the same vector.</p>'
    },
    {
      heading: 'Properties Preserved',
      content: '<p>Both reflections and translations are <strong>isometries</strong> — they preserve both shape and size. The resulting image is <strong>congruent</strong> to the original.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Property</th><th style="padding:7px;border:1px solid #ccc">Reflection</th><th style="padding:7px;border:1px solid #ccc">Translation</th></tr><tr><td style="padding:7px;border:1px solid #ccc">Side lengths</td><td style="padding:7px;border:1px solid #ccc">Preserved ✓</td><td style="padding:7px;border:1px solid #ccc">Preserved ✓</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc">Angles</td><td style="padding:7px;border:1px solid #ccc">Preserved ✓</td><td style="padding:7px;border:1px solid #ccc">Preserved ✓</td></tr><tr><td style="padding:7px;border:1px solid #ccc">Orientation</td><td style="padding:7px;border:1px solid #ccc">Reversed (flipped) ✗</td><td style="padding:7px;border:1px solid #ccc">Unchanged ✓</td></tr></table>'
    }
  ]
},

'mi-25-3': {
  title: 'Congruent Figures',
  sections: [
    {
      heading: 'What is Congruence?',
      content: '<p>Two shapes are <strong>congruent</strong> if they have exactly the same size and shape — all corresponding sides are equal AND all corresponding angles are equal. One shape could be a reflection, rotation, or translation of the other.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Congruent ✓</strong><br>Same size and shape<br>Reflections, rotations, translations preserve congruence</div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Not congruent ✗</strong><br>Different size (even same shape)<br>Enlargements do NOT preserve congruence</div></div>'
    },
    {
      heading: 'Congruence Statements',
      content: '<p>A congruence statement specifies exactly which vertices correspond, allowing you to read off all equal sides and angles.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>△ABC ≅ △DEF</strong> tells us:<br><table style="border-collapse:collapse;width:100%;margin-top:0.5em;font-size:0.9em"><tr style="background:#c8e6c9"><td style="padding:6px;border:1px solid #ccc">Equal sides</td><td style="padding:6px;border:1px solid #ccc">AB = DE</td><td style="padding:6px;border:1px solid #ccc">BC = EF</td><td style="padding:6px;border:1px solid #ccc">AC = DF</td></tr><tr><td style="padding:6px;border:1px solid #ccc">Equal angles</td><td style="padding:6px;border:1px solid #ccc">∠A = ∠D</td><td style="padding:6px;border:1px solid #ccc">∠B = ∠E</td><td style="padding:6px;border:1px solid #ccc">∠C = ∠F</td></tr></table></div>'
    },
    {
      heading: 'Proving Congruence',
      content: '<p>To prove two triangles are congruent, you need one of four conditions. Only three pieces of information are needed — but they must be the right three.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:7px;border:1px solid #ccc">Condition</th><th style="padding:7px;border:1px solid #ccc">What you need</th></tr><tr><td style="padding:7px;border:1px solid #ccc;font-weight:bold">SSS</td><td style="padding:7px;border:1px solid #ccc">All three pairs of sides equal</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc;font-weight:bold">SAS</td><td style="padding:7px;border:1px solid #ccc">Two sides and the <em>included</em> angle equal</td></tr><tr><td style="padding:7px;border:1px solid #ccc;font-weight:bold">ASA / AAS</td><td style="padding:7px;border:1px solid #ccc">Two angles and a corresponding side equal</td></tr><tr style="background:#f9f9f9"><td style="padding:7px;border:1px solid #ccc;font-weight:bold">RHS</td><td style="padding:7px;border:1px solid #ccc">Right angle, hypotenuse, and one other side equal</td></tr></table><div style="background:#fce4ec;padding:0.75em 1em;border-radius:8px;margin:0.5em 0"><strong>⚠️ AAA is NOT sufficient</strong> — three equal angles only proves the triangles are similar (same shape), not congruent (same size). They could be different sizes.</div>'
    }
  ]
}

});
