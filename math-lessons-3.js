// math-lessons-3.js — Lesson HTML for Topics 9-13
// Aligned to island names in math-data.js

Object.assign(LESSONS, {

// ── mi-09-1: Write & Simplify Ratios ─────────────────────────────────────────
'mi-09-1': `
<h2>Write &amp; Simplify Ratios</h2>
<p>A <strong>ratio</strong> compares two or more quantities of the same kind. It tells you the relative size of each part compared to the others. Ratios can be written as a:b, "a to b", or as a fraction a/b.</p>

<h3>Writing Ratios</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> A class has 12 boys and 18 girls.<br>
  Ratio of boys to girls = <strong>12:18</strong><br>
  <span style="font-size:0.9em;color:#555">Order matters — boys:girls is different from girls:boys</span>
</div>

<h3>Simplifying Ratios</h3>
<p>Divide all parts by their HCF — exactly like simplifying a fraction. The simplified ratio must still have whole number parts.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="100%" height="40" viewBox="0 0 380 40" style="max-width:380px;display:block;margin-bottom:0.5em">
    <text x="10"  y="26" font-size="16" fill="#333" font-weight="bold">12 : 18</text>
    <text x="100" y="26" font-size="14" fill="#555">HCF = 6</text>
    <text x="185" y="26" font-size="14" fill="#555">÷6 each part</text>
    <text x="310" y="26" font-size="16" fill="#2e7d32" font-weight="bold">2 : 3</text>
  </svg>
  Simplify 24:36: HCF(24,36) = 12. &nbsp; 24÷12 : 36÷12 = <strong>2:3</strong>
</div>

<h3>Ratios as Fractions of the Total</h3>
<p>In ratio 3:5, there are 3+5 = 8 parts total. The first quantity is 3/8 of the total, the second is 5/8.</p>

<h3>Unitary Form (1:n)</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Write 5:8 in the form 1:n. &nbsp; Divide both by 5: <strong>1:1.6</strong><br>
  This makes it easy to compare two ratios — convert both to 1:n form.
</div>`,

// ── mi-09-2: Equivalent Ratios & Ratio Tables ─────────────────────────────────
'mi-09-2': `
<h2>Equivalent Ratios &amp; Ratio Tables</h2>

<h3>Equivalent Ratios</h3>
<p>Multiply or divide all parts by the same non-zero number to create an equivalent ratio. The proportion stays the same.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="100%" height="40" viewBox="0 0 420 40" style="max-width:420px;display:block">
    <text x="10"  y="26" font-size="14" fill="#333" font-weight="bold">3:5</text>
    <text x="50"  y="26" font-size="12" fill="#555">=</text>
    <text x="65"  y="26" font-size="14" fill="#1565c0">6:10</text>
    <text x="120" y="26" font-size="12" fill="#555">=</text>
    <text x="135" y="26" font-size="14" fill="#6a1b9a">15:25</text>
    <text x="200" y="26" font-size="12" fill="#555">=</text>
    <text x="215" y="26" font-size="14" fill="#c62828">30:50</text>
    <text x="290" y="26" font-size="11" fill="#555">all equivalent</text>
  </svg>
</div>

<h3>Ratio Tables</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Orange (parts)</th>
    <th style="padding:8px;border:1px solid #ccc">Lemonade (parts)</th>
    <th style="padding:8px;border:1px solid #ccc">Total (ml)</th>
    <th style="padding:8px;border:1px solid #ccc">Scale factor</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">2</td><td style="padding:8px;border:1px solid #ccc">3</td><td style="padding:8px;border:1px solid #ccc">500</td><td style="padding:8px;border:1px solid #ccc">×1</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">4</td><td style="padding:8px;border:1px solid #ccc">6</td><td style="padding:8px;border:1px solid #ccc">1,000</td><td style="padding:8px;border:1px solid #ccc">×2</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">10</td><td style="padding:8px;border:1px solid #ccc">15</td><td style="padding:8px;border:1px solid #ccc">2,500</td><td style="padding:8px;border:1px solid #ccc">×5</td></tr>
</table>

<h3>Dividing in a Given Ratio</h3>
<ol>
  <li>Add all ratio parts to find the total number of shares.</li>
  <li>Divide the quantity by the total shares → value of 1 share.</li>
  <li>Multiply each ratio number by the value of 1 share.</li>
</ol>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Divide £84 in ratio 3:4</strong><br>
  Total parts = 3 + 4 = 7. &nbsp; 1 part = £84 ÷ 7 = £12.<br>
  Shares: 3 × £12 = £36 &nbsp; and &nbsp; 4 × £12 = <strong>£48</strong>.<br>
  Check: £36 + £48 = £84 ✓
</div>`,

// ── mi-09-3: Unit Rates & Speed ───────────────────────────────────────────────
'mi-09-3': `
<h2>Unit Rates &amp; Speed</h2>
<p>A <strong>rate</strong> compares two quantities with different units (km/h, £/kg, words/minute). A <strong>unit rate</strong> expresses this with a denominator of 1 — "per one unit".</p>

<h3>Finding Unit Rate</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  5 pens cost £3.25. &nbsp; Cost per pen = £3.25 ÷ 5 = <strong>65p each</strong>
</div>

<h3>Speed, Distance, Time</h3>
<p>The three formulas are related — cover the one you want to find with your thumb in the triangle below.</p>

<svg width="100%" height="160" viewBox="0 0 300 160" style="max-width:300px;display:block;margin:0.75em auto">
  <polygon points="150,10 10,120 290,120" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
  <line x1="150" y1="10" x2="150" y2="120" stroke="#2e7d32" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="150" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="#2e7d32">D</text>
  <text x="80"  y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#1565c0">S</text>
  <text x="218" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#c62828">T</text>
  <text x="10"  y="145" font-size="10" fill="#555">S = D ÷ T</text>
  <text x="100" y="145" font-size="10" fill="#555">D = S × T</text>
  <text x="200" y="145" font-size="10" fill="#555">T = D ÷ S</text>
</svg>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  Car travels 150 km in 2.5 hours.<br>
  Speed = 150 ÷ 2.5 = <strong>60 km/h</strong>
</div>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Train travels at 80 km/h for 1 hour 45 minutes.<br>
  1h 45min = 1.75 hours. Distance = 80 × 1.75 = <strong>140 km</strong>
</div>

<h3>Best Value Comparisons</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  400g for £2.00 → £2.00 ÷ 400 = 0.5p/g<br>
  600g for £2.70 → £2.70 ÷ 600 = 0.45p/g<br>
  <strong>600g is better value</strong> (lower cost per gram).
</div>`,

// ── mi-09-4: Solve Proportions & Scale Drawings ───────────────────────────────
'mi-09-4': `
<h2>Solve Proportions &amp; Scale Drawings</h2>

<h3>Direct Proportion</h3>
<p>Two quantities are in <strong>direct proportion</strong> if they increase or decrease at the same rate — doubling one doubles the other. The ratio between them is always constant.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Unitary method:</strong> 6 pens cost £4.20.<br>
  1 pen = £4.20 ÷ 6 = £0.70.<br>
  10 pens = 10 × £0.70 = <strong>£7.00</strong>
</div>

<h3>Scale Drawings</h3>
<p>A scale of 1:50,000 means every 1 cm on the map represents 50,000 cm (= 500 m = 0.5 km) in reality.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  Map distance = 6 cm. Scale 1:50,000.<br>
  Real distance = 6 × 50,000 = 300,000 cm = <strong>3 km</strong>
</div>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Real distance = 2.4 km = 240,000 cm. Scale 1:40,000.<br>
  Map distance = 240,000 ÷ 40,000 = <strong>6 cm</strong>
</div>

<h3>Inverse Proportion</h3>
<p>When one quantity increases and the other decreases proportionally — their product is constant.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  3 workers take 12 days. &nbsp; Total work = 3 × 12 = 36 worker-days.<br>
  6 workers take 36 ÷ 6 = <strong>6 days</strong>.<br>
  <span style="font-size:0.85em;color:#555">More workers → fewer days (inverse).</span>
</div>`,

// ── mi-09-5: Bar Diagram Ratio Problems ─────────────────────────────────────
'mi-09-5': `<h2>Bar Diagram Ratio Problems</h2>

<h3>What Is a Bar Diagram?</h3>
<p>A bar diagram (also called a <strong>tape diagram</strong>) uses equal-sized bars to represent ratio parts visually. Each bar represents one "part" of the ratio.</p>

<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Ratio 3 : 2</strong><br><br>
  Quantity A: <span style="display:inline-block;width:40px;height:20px;background:#42a5f5;border:1px solid #1976d2;margin:0 2px"></span><span style="display:inline-block;width:40px;height:20px;background:#42a5f5;border:1px solid #1976d2;margin:0 2px"></span><span style="display:inline-block;width:40px;height:20px;background:#42a5f5;border:1px solid #1976d2;margin:0 2px"></span> (3 bars)<br>
  Quantity B: <span style="display:inline-block;width:40px;height:20px;background:#ef5350;border:1px solid #c62828;margin:0 2px"></span><span style="display:inline-block;width:40px;height:20px;background:#ef5350;border:1px solid #c62828;margin:0 2px"></span> (2 bars)<br><br>
  Total = 5 bars. Each bar has the <strong>same value</strong>.
</div>

<h3>Finding Shares From a Total</h3>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Share £35 in ratio 3 : 2<br><br>
  Step 1: Total parts = 3 + 2 = 5<br>
  Step 2: Value of 1 bar = £35 ÷ 5 = £7<br>
  Step 3: First share = 3 × £7 = <strong>£21</strong><br>
  Step 4: Second share = 2 × £7 = <strong>£14</strong><br>
  Check: £21 + £14 = £35 ✓
</div>

<h3>Using the Difference</h3>
<p>Sometimes you know the <strong>difference</strong> between the two shares instead of the total.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Ratio 5 : 2. The larger share exceeds the smaller by 18.<br><br>
  Difference in bars = 5 − 2 = 3 bars<br>
  3 bars = 18 → 1 bar = 6<br>
  Larger share = 5 × 6 = <strong>30</strong><br>
  Smaller share = 2 × 6 = <strong>12</strong><br>
  Check: 30 − 12 = 18 ✓
</div>

<h3>Three-Part Ratios</h3>
<div style="background:#f3e5f5;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Share 60 sweets in ratio 1 : 2 : 3<br><br>
  Total bars = 1 + 2 + 3 = 6<br>
  1 bar = 60 ÷ 6 = 10<br>
  Shares: 10, 20, 30. Check: 10 + 20 + 30 = 60 ✓
</div>

<div style="background:#fce4ec;padding:1em;border-radius:8px;margin:1em 0">
  <strong>⚠️ Top tip:</strong> Always draw the bars to help you see the problem. Label each bar with its value once you calculate it. Check that your shares add up to the total (or match the given difference).
</div>`,

// ── mi-10-1: Convert Between %, Fractions & Decimals ──────────────────────────
'mi-10-1': `
<h2>Convert Between %, Fractions &amp; Decimals</h2>
<p>"Per cent" means "out of 100". So 45% = 45/100 = 0.45. All three forms represent the same value — choose whichever is most useful for the calculation.</p>

<h3>Conversion Methods</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">From → To</th>
    <th style="padding:8px;border:1px solid #ccc">Method</th>
    <th style="padding:8px;border:1px solid #ccc">Example</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">% → Decimal</td><td style="padding:8px;border:1px solid #ccc">÷ 100 (shift digits 2 places right)</td><td style="padding:8px;border:1px solid #ccc">37% → 0.37</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Decimal → %</td><td style="padding:8px;border:1px solid #ccc">× 100 (shift digits 2 places left)</td><td style="padding:8px;border:1px solid #ccc">0.625 → 62.5%</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Fraction → %</td><td style="padding:8px;border:1px solid #ccc">Divide numerator by denominator, then × 100</td><td style="padding:8px;border:1px solid #ccc">3/8 → 0.375 → 37.5%</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">% → Fraction</td><td style="padding:8px;border:1px solid #ccc">Write over 100, then simplify (÷ HCF)</td><td style="padding:8px;border:1px solid #ccc">35% → 35/100 → 7/20</td></tr>
</table>

<h3>Key Equivalences to Memorise</h3>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">½ = 0.5 = 50%</div>
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">¼ = 0.25 = 25%</div>
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">¾ = 0.75 = 75%</div>
  <div style="background:#e8f5e9;padding:7px;border-radius:5px">⅕ = 0.2 = 20%</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">⅛ = 0.125 = 12.5%</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">⅓ ≈ 0.333 ≈ 33.3%</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">⅔ ≈ 0.667 ≈ 66.7%</div>
  <div style="background:#c8e6c9;padding:7px;border-radius:5px">1/10 = 0.1 = 10%</div>
</div>`,

// ── mi-10-2: Percentages of Amounts ──────────────────────────────────────────
'mi-10-2': `
<h2>Percentages of Amounts</h2>

<h3>Non-Calculator: Build Up from 10%</h3>
<p>Find 10% first (divide by 10), then combine results for any percentage.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Find 35% of £260</strong>
  <svg width="100%" height="75" viewBox="0 0 350 75" style="max-width:350px;display:block;margin:0.5em 0">
    <rect x="0" y="5" width="350" height="65" rx="6" fill="#e8f5e9"/>
    <text x="10" y="25" font-size="12" fill="#333">10% = £260 ÷ 10 = £26</text>
    <text x="10" y="43" font-size="12" fill="#333">30% = 3 × £26 = £78</text>
    <text x="10" y="61" font-size="12" fill="#333">5% = £26 ÷ 2 = £13 &nbsp;→&nbsp; 35% = £78 + £13 = <tspan font-weight="bold">£91</tspan></text>
  </svg>
</div>

<h3>Calculator: Decimal Multiplier (fastest method)</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  35% of £260 = 0.35 × 260 = <strong>£91</strong><br>
  <span style="font-size:0.85em;color:#555">Convert the percentage to a decimal (÷100) and multiply directly.</span>
</div>

<h3>Percentage Increases and Decreases — Multiplier Method</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:10px;border-radius:8px">
    <strong>+20% (increase)</strong><br>
    Multiplier = 1.20<br>
    £80 × 1.20 = <strong>£96</strong>
  </div>
  <div style="background:#fce4ec;padding:10px;border-radius:8px">
    <strong>−15% (decrease)</strong><br>
    Multiplier = 0.85<br>
    £80 × 0.85 = <strong>£68</strong>
  </div>
</div>`,

// ── mi-10-3: Find What % One Number Is of Another ─────────────────────────────
'mi-10-3': `
<h2>Find What % One Number Is of Another</h2>
<p>This answers: "A is what percentage of B?" Always identify which number is the <em>part</em> (A) and which is the <em>whole</em> (B).</p>

<h3>Formula</h3>
<p style="text-align:center;background:#e8f5e9;padding:0.6em;border-radius:6px;font-size:1.05em"><strong>Percentage = (part ÷ whole) × 100</strong></p>

<h3>Worked Examples</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>What % of 80 is 20?</strong><br>
    (20 ÷ 80) × 100<br>
    = 0.25 × 100 = <strong>25%</strong>
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>36 as a % of 150</strong><br>
    (36 ÷ 150) × 100<br>
    = 0.24 × 100 = <strong>24%</strong>
  </div>
</div>

<h3>Percentage Change</h3>
<p style="text-align:center;background:#e8f5e9;padding:0.5em;border-radius:6px;font-size:1.05em"><strong>% change = (change ÷ original) × 100</strong></p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Increase:</strong> Price rises from £50 to £65. Change = £15.<br>
  % increase = (15 ÷ 50) × 100 = <strong>30%</strong><br><br>
  <strong>Decrease:</strong> Mass drops from 200g to 170g. Change = 30g.<br>
  % decrease = (30 ÷ 200) × 100 = <strong>15%</strong>
</div>`,

// ── mi-10-4: Percentage Problems ─────────────────────────────────────────────
'mi-10-4': `
<h2>Percentage Problems</h2>

<h3>Reverse Percentages</h3>
<p>Find the <em>original</em> value when you know the result <em>after</em> a percentage change. Divide by the multiplier — do not subtract the percentage from the changed value.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>After 25% increase → £125. Original?</strong><br>
    £125 = 125% = 1.25 × original<br>
    Original = £125 ÷ 1.25 = <strong>£100</strong>
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>After 20% discount → £72. Original?</strong><br>
    £72 = 80% = 0.80 × original<br>
    Original = £72 ÷ 0.80 = <strong>£90</strong>
  </div>
</div>

<div style="background:#fce4ec;padding:1em;border-radius:8px;margin:1em 0">
  <strong>⚠️ Common mistake:</strong> After 20% off, don't add 20% back on. Adding 20% to £72 gives £86.40 — not £90. You must divide by 0.80.
</div>

<h3>Compound Percentage Changes</h3>
<p>When a percentage change is applied repeatedly, each increase/decrease builds on the previous result — this is compound growth.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  House worth £200,000, increases 10% per year. Value after 2 years?<br>
  Year 1: £200,000 × 1.10 = £220,000<br>
  Year 2: £220,000 × 1.10 = <strong>£242,000</strong><br>
  <span style="font-size:0.85em;color:#555">Note: NOT £200,000 + 20% = £240,000 — the second year's 10% is applied to £220,000, not £200,000.</span>
</div>`,

// ── mi-10-5: Percent Models & Estimation ────────────────────────────────────
'mi-10-5': `<h2>Percent Models &amp; Estimation</h2>

<h3>Grid Models (10×10 Grids)</h3>
<p>A 10×10 grid has <strong>100 small squares</strong>. Each square represents <strong>1%</strong>.</p>

<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Shade 35% on a grid<br><br>
  Shade 35 out of 100 squares — that's 3 full rows (30 squares) plus 5 more squares.<br><br>
  Unshaded = 100 − 35 = <strong>65%</strong>
</div>

<h3>Bar Models for Percentages</h3>
<p>Draw a bar representing the whole amount, then divide it into sections to find the percent you need.</p>

<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Find 30% of 80<br><br>
  Step 1: Draw a bar for 80. Divide into 10 equal parts.<br>
  Step 2: Each part = 80 ÷ 10 = 8 (this is 10%).<br>
  Step 3: 30% = 3 parts = 3 × 8 = <strong>24</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Splitting strategy:</strong> Find 35% of 120<br><br>
  Split: 35% = 25% + 10%<br>
  25% of 120 = 120 ÷ 4 = 30<br>
  10% of 120 = 12<br>
  35% = 30 + 12 = <strong>42</strong>
</div>

<h3>Estimating Percentages</h3>
<p>Use <strong>benchmark percentages</strong> (10%, 25%, 50%, 1%) to estimate quickly.</p>

<div style="background:#f3e5f5;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Estimate 48% of 210<br><br>
  48% ≈ 50% (half)<br>
  50% of 210 = 105<br>
  So 48% of 210 ≈ <strong>105</strong><br><br>
  For a closer estimate: 48% = 50% − 2%<br>
  2% of 210 = 4.2<br>
  48% ≈ 105 − 4.2 = <strong>100.8</strong>
</div>

<div style="background:#fce4ec;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Key benchmarks to memorise:</strong><br>
  50% = ½ &nbsp;|&nbsp; 25% = ¼ &nbsp;|&nbsp; 10% = ÷10 &nbsp;|&nbsp; 1% = ÷100 &nbsp;|&nbsp; 75% = ¾ &nbsp;|&nbsp; 33⅓% ≈ ⅓
</div>`,

// ── mi-11-1: Write & Evaluate Expressions ────────────────────────────────────
'mi-11-1': `
<h2>Write &amp; Evaluate Expressions</h2>

<h3>Parts of an Algebraic Expression</h3>
<p>An expression uses numbers, variables, and operations — but has <strong>no equals sign</strong>. It cannot be "solved", only simplified or evaluated.</p>

<svg width="100%" height="105" viewBox="0 0 340 105" style="max-width:340px;display:block;margin:0.75em 0">
  <text x="100" y="36" font-size="26" font-family="serif" fill="#333">5</text>
  <text x="130" y="36" font-size="26" font-family="serif" fill="#1565c0" font-weight="bold">x</text>
  <text x="163" y="36" font-size="26" font-family="serif" fill="#333">+</text>
  <text x="196" y="36" font-size="26" font-family="serif" fill="#c62828">7</text>
  <line x1="107" y1="48" x2="72" y2="68" stroke="#555" stroke-width="1"/>
  <text x="72" y="84" font-size="10" text-anchor="middle" fill="#555">coefficient</text>
  <line x1="137" y1="48" x2="162" y2="68" stroke="#1565c0" stroke-width="1"/>
  <text x="162" y="84" font-size="10" text-anchor="middle" fill="#1565c0">variable</text>
  <line x1="203" y1="48" x2="258" y2="68" stroke="#c62828" stroke-width="1"/>
  <text x="258" y="84" font-size="10" text-anchor="middle" fill="#c62828">constant</text>
</svg>

<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Part</th>
    <th style="padding:8px;border:1px solid #ccc">Meaning</th>
    <th style="padding:8px;border:1px solid #ccc">Example</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Variable</td><td style="padding:8px;border:1px solid #ccc">An unknown quantity</td><td style="padding:8px;border:1px solid #ccc">x, y, n</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Coefficient</td><td style="padding:8px;border:1px solid #ccc">Number multiplying the variable</td><td style="padding:8px;border:1px solid #ccc">5 in 5x</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Constant</td><td style="padding:8px;border:1px solid #ccc">A fixed number with no variable</td><td style="padding:8px;border:1px solid #ccc">7 in 3x+7</td></tr>
</table>

<h3>Writing Expressions from Words</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  "5 more than triple y" → <strong>3y + 5</strong><br>
  "4 less than twice n" → <strong>2n − 4</strong><br>
  "the product of p and q, divided by 3" → <strong>pq / 3</strong>
</div>

<h3>Evaluating Expressions (Substitution)</h3>
<p>Replace each variable with its given value, then calculate using BIDMAS.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Find 4x² − 1 when x = 3</strong><br>
  = 4(3²) − 1 = 4 × 9 − 1 = 36 − 1 = <strong>35</strong>
</div>`,

// ── mi-11-2: Like Terms & Simplifying ────────────────────────────────────────
'mi-11-2': `
<h2>Like Terms &amp; Simplifying</h2>

<h3>What are Like Terms?</h3>
<p>Like terms have exactly the same variable(s) raised to exactly the same power(s). Only like terms can be added or subtracted — you cannot add apples and oranges.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:10px;border-radius:8px">
    <strong style="color:#2e7d32">Like terms ✓</strong><br>
    3x and 7x<br>
    2y² and −5y²<br>
    4ab and −ab
  </div>
  <div style="background:#fce4ec;padding:10px;border-radius:8px">
    <strong style="color:#c62828">Unlike terms ✗</strong><br>
    3x and 3y (different variables)<br>
    5x and 5x² (different powers)<br>
    4ab and 4a (different variables)
  </div>
</div>

<h3>Collecting Like Terms</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Simplify: 5x + 3y − 2x + 4y − 1</strong><br>
  Group: (5x − 2x) + (3y + 4y) − 1<br>
  = <strong>3x + 7y − 1</strong>
</div>

<h3>Multiplying Terms</h3>
<p>When multiplying, multiply the coefficients and add the indices of matching variables.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  3a × 4b = <strong>12ab</strong> &nbsp; (multiply coefficients; join variables)<br>
  2x² × 3x = <strong>6x³</strong> &nbsp; (2×3=6; x² × x¹ = x²⁺¹ = x³)
</div>`,

// ── mi-11-3: Distributive Property ───────────────────────────────────────────
'mi-11-3': `
<h2>Distributive Property</h2>
<p>The distributive property lets you remove brackets by multiplying each term inside the bracket by the term (or expression) outside. Every term inside gets multiplied — not just the first.</p>

<h3>Expanding Single Brackets</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <svg width="100%" height="55" viewBox="0 0 380 55" style="max-width:380px;display:block;margin-bottom:0.5em">
    <text x="10" y="28" font-size="18" fill="#c62828" font-weight="bold">3</text>
    <text x="26" y="28" font-size="18" fill="#333">(</text>
    <text x="36" y="28" font-size="18" fill="#1565c0" font-weight="bold">2x</text>
    <text x="62" y="28" font-size="18" fill="#333">−</text>
    <text x="76" y="28" font-size="18" fill="#6a1b9a" font-weight="bold">5</text>
    <text x="90" y="28" font-size="18" fill="#333">)</text>
    <path d="M22,32 Q40,50 48,32" stroke="#c62828" stroke-width="1.5" fill="none"/>
    <path d="M22,32 Q65,50 78,32" stroke="#c62828" stroke-width="1.5" fill="none"/>
    <text x="115" y="28" font-size="16" fill="#555">= 3×2x − 3×5 = </text>
    <text x="270" y="28" font-size="18" fill="#2e7d32" font-weight="bold">6x − 15</text>
  </svg>
  <strong>−2(4 + x)</strong> = −2×4 + (−2)×x = <strong>−8 − 2x</strong><br>
  <span style="font-size:0.85em;color:#555">Take care with negatives outside the bracket — every term inside changes sign.</span>
</div>

<h3>Expand and Simplify</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>2(x + 3) + 4(x − 1)</strong><br>
  = 2x + 6 + 4x − 4<br>
  = <strong>6x + 2</strong>
</div>

<h3>Expanding Double Brackets — FOIL</h3>
<p>Multiply each term in the first bracket by each term in the second: <strong>F</strong>irst, <strong>O</strong>uter, <strong>I</strong>nner, <strong>L</strong>ast.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>(x + 3)(x + 2)</strong><br>
  F: x × x = x² &nbsp; O: x × 2 = 2x &nbsp; I: 3 × x = 3x &nbsp; L: 3 × 2 = 6<br>
  = x² + 2x + 3x + 6 = <strong>x² + 5x + 6</strong>
</div>`,

// ── mi-11-4: Factorise Linear Expressions ────────────────────────────────────
'mi-11-4': `
<h2>Factorise Linear Expressions</h2>
<p>Factorising is the <strong>reverse of expanding</strong>. You find the HCF of all terms and write it outside a bracket. The expression inside the bracket should have no common factor remaining.</p>

<h3>Steps</h3>
<ol>
  <li>Find the HCF of all the terms (both numbers and variables).</li>
  <li>Write the HCF outside the bracket.</li>
  <li>Divide each term by the HCF to find what goes inside the bracket.</li>
  <li>Check by expanding — you should get back to the original expression.</li>
</ol>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>Factorise 6x + 9</strong><br>
    HCF(6, 9) = 3<br>
    = <strong>3(2x + 3)</strong><br>
    Check: 3×2x + 3×3 = 6x + 9 ✓
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>Factorise 12x² + 8x</strong><br>
    HCF = 4x<br>
    = <strong>4x(3x + 2)</strong><br>
    Check: 4x×3x + 4x×2 = 12x² + 8x ✓
  </div>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Factorise 15a²b − 10ab²</strong><br>
  HCF = 5ab<br>
  = <strong>5ab(3a − 2b)</strong>
</div>`,

// ── mi-11-5: Properties of Operations ────────────────────────────────────────
'mi-11-5': `<h2>Properties of Operations</h2>

<h3>Commutative Property</h3>
<p>The <strong>order</strong> of numbers can be swapped without changing the result.</p>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Addition:</strong> a + b = b + a &nbsp;&nbsp; Example: 3 + 7 = 7 + 3 = 10<br>
  <strong>Multiplication:</strong> a × b = b × a &nbsp;&nbsp; Example: 4 × 5 = 5 × 4 = 20<br><br>
  ⚠️ Subtraction and division are <strong>NOT</strong> commutative: 5 − 3 ≠ 3 − 5
</div>

<h3>Associative Property</h3>
<p>The <strong>grouping</strong> of numbers can change without affecting the result.</p>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Addition:</strong> (a + b) + c = a + (b + c)<br>
  Example: (2 + 3) + 4 = 2 + (3 + 4) = 9<br><br>
  <strong>Multiplication:</strong> (a × b) × c = a × (b × c)<br>
  Example: (2 × 5) × 3 = 2 × (5 × 3) = 30<br><br>
  <strong>Useful for mental maths:</strong> 4 × 7 × 25 → 4 × 25 × 7 = 100 × 7 = 700
</div>

<h3>Identity & Zero Properties</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Additive identity:</strong> a + 0 = a (adding 0 changes nothing)<br>
  <strong>Multiplicative identity:</strong> a × 1 = a (multiplying by 1 changes nothing)<br>
  <strong>Zero property:</strong> a × 0 = 0 (anything times zero is zero)
</div>

<h3>Writing Equivalent Expressions</h3>
<p>Use these properties to rewrite expressions in easier or equivalent forms.</p>
<div style="background:#f3e5f5;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Rewrite 3 × 17 × 2 for easier mental maths:<br>
  = 3 × 2 × 17 (commutative) = 6 × 17 = <strong>102</strong><br><br>
  <strong>Example:</strong> If n × 8 = 56, find n:<br>
  n = 56 ÷ 8 = <strong>7</strong> (using the multiplicative inverse)
</div>`,

// ── mi-12-1: Number Sequences ────────────────────────────────────────────────
'mi-12-1': `
<h2>Number Sequences</h2>

<h3>Arithmetic Sequences</h3>
<p>A sequence with a constant <strong>common difference</strong> between consecutive terms — the same amount is added (or subtracted) each time.</p>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:1em 0;font-size:0.9em">
  <div style="background:#e8f5e9;padding:8px;border-radius:8px">5, 9, 13, 17…<br><strong>d = +4</strong></div>
  <div style="background:#e3f2fd;padding:8px;border-radius:8px">−2, 1, 4, 7…<br><strong>d = +3</strong></div>
  <div style="background:#fff3e0;padding:8px;border-radius:8px">20, 15, 10, 5…<br><strong>d = −5</strong></div>
</div>

<h3>Finding the nth Term</h3>
<ol>
  <li>Find the common difference <em>d</em>.</li>
  <li>Write <em>dn</em> — this is the "skeleton" formula.</li>
  <li>Substitute n=1 and compare to the first term to find the constant c.</li>
  <li>nth term = <em>dn + c</em></li>
</ol>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Sequence: 7, 10, 13, 16…</strong> (d = 3)<br>
  Skeleton: 3n. At n=1: 3(1)=3, but first term is 7. So c = 7 − 3 = 4.<br>
  nth term = <strong>3n + 4</strong>. &nbsp; Check n=3: 9+4=13 ✓
</div>

<h3>Is a Value in the Sequence?</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Is 55 in the sequence with nth term 4n+3?<br>
  4n + 3 = 55 → 4n = 52 → n = 13 (whole number → <strong>Yes, 55 is the 13th term</strong>).<br><br>
  Is 60 in the same sequence?<br>
  4n + 3 = 60 → 4n = 57 → n = 14.25 (not whole → <strong>No</strong>).
</div>`,

// ── mi-12-2: Solve One-Step Equations ────────────────────────────────────────
'mi-12-2': `
<h2>Solve One-Step Equations</h2>
<p>An equation is balanced — like a set of scales. Whatever operation you apply to one side, you must apply to the other to keep the balance.</p>

<svg width="100%" height="80" viewBox="0 0 350 80" style="max-width:350px;display:block;margin:0.75em auto">
  <line x1="175" y1="15" x2="175" y2="55" stroke="#555" stroke-width="2"/>
  <line x1="60"  y1="55" x2="290" y2="55" stroke="#555" stroke-width="2"/>
  <line x1="60"  y1="55" x2="60"  y2="70" stroke="#555" stroke-width="2"/>
  <line x1="290" y1="55" x2="290" y2="70" stroke="#555" stroke-width="2"/>
  <rect x="20"  y="38" width="80" height="20" rx="4" fill="#e3f2fd"/>
  <rect x="250" y="38" width="80" height="20" rx="4" fill="#e8f5e9"/>
  <text x="60"  y="52" text-anchor="middle" font-size="13" fill="#1565c0" font-weight="bold">x + 7</text>
  <text x="290" y="52" text-anchor="middle" font-size="13" fill="#2e7d32" font-weight="bold">15</text>
  <text x="175" y="75" text-anchor="middle" font-size="10" fill="#555">balanced — must keep both sides equal</text>
</svg>

<h3>Using Inverse Operations</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">If the equation has…</th>
    <th style="padding:8px;border:1px solid #ccc">…use the inverse</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">+ a</td><td style="padding:8px;border:1px solid #ccc">Subtract a from both sides</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">× a</td><td style="padding:8px;border:1px solid #ccc">Divide both sides by a</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">÷ a</td><td style="padding:8px;border:1px solid #ccc">Multiply both sides by a</td></tr>
</table>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  x + 7 = 15 → subtract 7 both sides: <strong>x = 8</strong><br>
  4m = 28 → divide by 4: <strong>m = 7</strong><br>
  n/5 = 6 → multiply by 5: <strong>n = 30</strong><br>
  y − 9 = 3 → add 9: <strong>y = 12</strong>
</div>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Always check:</strong> Substitute back into the original equation.<br>
  Check x = 8 in x + 7 = 15: &nbsp; 8 + 7 = 15 ✓
</div>`,

// ── mi-12-3: Solve Two-Step Equations ────────────────────────────────────────
'mi-12-3': `
<h2>Solve Two-Step Equations</h2>
<p>Undo operations in <strong>reverse BIDMAS order</strong>: deal with + and − first, then × and ÷. Think of "undoing" what was done to x, in reverse order.</p>

<h3>Worked Examples</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>3x + 4 = 19</strong><br>
    Step 1 (−4): 3x = 15<br>
    Step 2 (÷3): <strong>x = 5</strong><br>
    Check: 3(5)+4 = 19 ✓
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>x/4 + 3 = 9</strong><br>
    Step 1 (−3): x/4 = 6<br>
    Step 2 (×4): <strong>x = 24</strong><br>
    Check: 24/4+3 = 9 ✓
  </div>
</div>

<h3>Equations with Brackets</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>2(x − 3) = 10</strong><br>
  Method 1 — divide first: x − 3 = 5 → <strong>x = 8</strong><br>
  Method 2 — expand first: 2x − 6 = 10 → 2x = 16 → <strong>x = 8</strong>
</div>

<h3>Variables on Both Sides</h3>
<p>Collect the variable terms on one side first by adding or subtracting.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>5x + 2 = 3x + 10</strong><br>
  Subtract 3x: 2x + 2 = 10<br>
  Subtract 2: 2x = 8 → <strong>x = 4</strong><br>
  Check: 5(4)+2 = 22, 3(4)+10 = 22 ✓
</div>`,

// ── mi-12-4: Inequalities ─────────────────────────────────────────────────────
'mi-12-4': `
<h2>Inequalities</h2>
<p>An inequality says that two expressions are not equal — one is greater or smaller than the other. Unlike equations, the solution is usually a range of values, not a single answer.</p>

<h3>Inequality Symbols</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Symbol</th>
    <th style="padding:8px;border:1px solid #ccc">Meaning</th>
    <th style="padding:8px;border:1px solid #ccc">Includes boundary?</th>
    <th style="padding:8px;border:1px solid #ccc">Example</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc;text-align:center;font-size:1.2em"><strong>&gt;</strong></td><td style="padding:8px;border:1px solid #ccc">Greater than</td><td style="padding:8px;border:1px solid #ccc;color:#c62828">No</td><td style="padding:8px;border:1px solid #ccc">x &gt; 3 (x is more than 3)</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc;text-align:center;font-size:1.2em"><strong>&lt;</strong></td><td style="padding:8px;border:1px solid #ccc">Less than</td><td style="padding:8px;border:1px solid #ccc;color:#c62828">No</td><td style="padding:8px;border:1px solid #ccc">x &lt; 7</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;text-align:center;font-size:1.2em"><strong>≥</strong></td><td style="padding:8px;border:1px solid #ccc">Greater than or equal to</td><td style="padding:8px;border:1px solid #ccc;color:#2e7d32">Yes</td><td style="padding:8px;border:1px solid #ccc">x ≥ 5</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc;text-align:center;font-size:1.2em"><strong>≤</strong></td><td style="padding:8px;border:1px solid #ccc">Less than or equal to</td><td style="padding:8px;border:1px solid #ccc;color:#2e7d32">Yes</td><td style="padding:8px;border:1px solid #ccc">x ≤ 10</td></tr>
</table>

<h3>Solving Inequalities</h3>
<p>Solve exactly like equations — with one critical exception:</p>
<div style="background:#fce4ec;padding:1em;border-radius:8px;margin:1em 0;border-left:4px solid #c62828">
  <strong>⚠️ When you multiply or divide both sides by a negative number, FLIP the inequality sign.</strong>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>3x + 1 &gt; 10</strong><br>
    3x &gt; 9<br>
    <strong>x &gt; 3</strong> (no flip — ÷ positive)
  </div>
  <div style="background:#f1f8e9;padding:10px;border-radius:8px">
    <strong>−2x ≤ 8</strong><br>
    ÷ −2 — sign flips!<br>
    <strong>x ≥ −4</strong>
  </div>
</div>`,

// ── mi-12-5: Expressions vs Equations & Tiles ───────────────────────────────
'mi-12-5': `<h2>Expressions vs Equations &amp; Algebra Tiles</h2>

<h3>Expression vs Equation</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e3f2fd;padding:1em;border-radius:8px">
    <strong>Expression</strong><br>
    No equals sign.<br>
    Can be evaluated or simplified.<br>
    Examples: 3x + 5, &nbsp; 2a − b
  </div>
  <div style="background:#e8f5e9;padding:1em;border-radius:8px">
    <strong>Equation</strong><br>
    Has an equals sign.<br>
    Can be solved for the unknown.<br>
    Examples: 3x + 5 = 20, &nbsp; y = 2x
  </div>
</div>

<h3>Algebra Tiles</h3>
<p>Algebra tiles are a visual way to model equations. There are two types of tile:</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <span style="display:inline-block;width:40px;height:20px;background:#42a5f5;border:1px solid #1976d2;text-align:center;line-height:20px;color:white;font-weight:bold;font-size:12px">x</span> = one x-tile (unknown)<br>
  <span style="display:inline-block;width:20px;height:20px;background:#ffb74d;border:1px solid #f57c00;text-align:center;line-height:20px;font-weight:bold;font-size:12px">1</span> = one unit tile (value of 1)
</div>

<h3>Solving With Tiles</h3>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> x + 3 = 7<br><br>
  Left side: 1 x-tile + 3 unit tiles<br>
  Right side: 7 unit tiles<br><br>
  Remove 3 unit tiles from <strong>both</strong> sides:<br>
  Left: 1 x-tile &nbsp;&nbsp; Right: 4 unit tiles<br>
  So <strong>x = 4</strong>
</div>

<h3>Matching Word Problems to Equations</h3>
<div style="background:#f3e5f5;padding:1em;border-radius:8px;margin:1em 0">
  "A number doubled, plus 3, equals 15"<br>
  → 2x + 3 = 15<br><br>
  "Three identical bags weigh 24 kg"<br>
  → 3x = 24<br><br>
  <strong>Tip:</strong> Underline the key words (doubled → ×2, plus → +, equals → =).
</div>`,

// ── mi-13-1: Mean, Median, Mode & Range ──────────────────────────────────────
'mi-13-1': `
<h2>Mean, Median, Mode &amp; Range</h2>

<h3>The Three Averages</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0;font-size:0.9em">
  <tr style="background:#e8f5e9">
    <th style="padding:8px;border:1px solid #ccc">Average</th>
    <th style="padding:8px;border:1px solid #ccc">How to find it</th>
    <th style="padding:8px;border:1px solid #ccc">Use it when…</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#1565c0">Mean</td>
    <td style="padding:8px;border:1px solid #ccc">Sum of all values ÷ count</td>
    <td style="padding:8px;border:1px solid #ccc">No extreme outliers</td>
  </tr>
  <tr style="background:#f9f9f9">
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#2e7d32">Median</td>
    <td style="padding:8px;border:1px solid #ccc">Middle value when ordered</td>
    <td style="padding:8px;border:1px solid #ccc">Data has outliers</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#c62828">Mode</td>
    <td style="padding:8px;border:1px solid #ccc">Most frequent value</td>
    <td style="padding:8px;border:1px solid #ccc">Categorical or discrete data</td>
  </tr>
</table>
<p><strong>Range</strong> = largest value − smallest value. It measures the <em>spread</em> of the data, not the centre.</p>

<h3>Finding the Median</h3>
<p>For <em>n</em> values in order: if n is odd, the median is the ((n+1)/2)th value. If n is even, average the two middle values.</p>

<h3>Worked Example</h3>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  Data: 3, 7, 4, 9, 4, 6, 2<br>
  Ordered: 2, 3, <strong style="color:#555">4, 4</strong>, 6, 7, 9<br>
  Mean = (2+3+4+4+6+7+9) ÷ 7 = 35 ÷ 7 = <strong>5</strong><br>
  Median = 4th of 7 values = <strong>4</strong><br>
  Mode = <strong>4</strong> (only value appearing more than once)<br>
  Range = 9 − 2 = <strong>7</strong>
</div>`,

// ── mi-13-2: Bar Charts & Pie Charts ─────────────────────────────────────────
'mi-13-2': `
<h2>Bar Charts &amp; Pie Charts</h2>

<h3>Bar Charts</h3>
<p>Bar charts compare discrete categories. The height (or length) of each bar shows the frequency or value. Equal bar widths and gaps between bars are essential for readability.</p>

<svg width="100%" height="140" viewBox="0 0 280 140" style="max-width:280px;display:block;margin:0.75em auto">
  <line x1="30" y1="10" x2="30"  y2="115" stroke="#555" stroke-width="1.5"/>
  <line x1="30" y1="115" x2="270" y2="115" stroke="#555" stroke-width="1.5"/>
  <rect x="45"  y="45"  width="40" height="70" fill="#90caf9"/>
  <rect x="100" y="65"  width="40" height="50" fill="#a5d6a7"/>
  <rect x="155" y="30"  width="40" height="85" fill="#ef9a9a"/>
  <rect x="210" y="55"  width="40" height="60" fill="#fff176"/>
  <text x="65"  y="128" text-anchor="middle" font-size="9" fill="#555">Maths</text>
  <text x="120" y="128" text-anchor="middle" font-size="9" fill="#555">English</text>
  <text x="175" y="128" text-anchor="middle" font-size="9" fill="#555">Science</text>
  <text x="230" y="128" text-anchor="middle" font-size="9" fill="#555">Art</text>
  <text x="22" y="118" font-size="8" fill="#555">0</text>
  <text x="18" y="88"  font-size="8" fill="#555">10</text>
  <text x="18" y="58"  font-size="8" fill="#555">20</text>
  <text x="18" y="28"  font-size="8" fill="#555">30</text>
</svg>

<h3>Pie Charts</h3>
<p>Pie charts show each category as a proportion of the whole. The full circle = 360° = 100% of the data.</p>
<p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>Angle = (frequency ÷ total) × 360°</strong></p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  30 students, 12 chose Maths.<br>
  Angle = (12 ÷ 30) × 360° = 0.4 × 360° = <strong>144°</strong>
</div>

<h3>Choosing the Right Chart</h3>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Bar chart</strong><br>Comparing quantities across categories</div>
  <div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Pie chart</strong><br>Showing proportions of a whole</div>
</div>`,

// ── mi-13-3: Stem-and-Leaf Plots & Line Graphs ────────────────────────────────
'mi-13-3': `
<h2>Stem-and-Leaf Plots &amp; Line Graphs</h2>

<h3>Stem-and-Leaf Diagrams</h3>
<p>A stem-and-leaf plot shows every individual data value while revealing the distribution's shape. The <em>stem</em> is the leading digit(s); the <em>leaf</em> is the final digit. Values must be listed in order.</p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Data:</strong> 23, 27, 31, 35, 38, 42, 44<br><br>
  <table style="border-collapse:collapse;font-family:monospace;font-size:1em">
    <tr><td style="padding:3px 8px;border-right:2px solid #555;font-weight:bold;color:#1565c0">2</td><td style="padding:3px 8px">3 &nbsp; 7</td></tr>
    <tr><td style="padding:3px 8px;border-right:2px solid #555;font-weight:bold;color:#1565c0">3</td><td style="padding:3px 8px">1 &nbsp; 5 &nbsp; 8</td></tr>
    <tr><td style="padding:3px 8px;border-right:2px solid #555;font-weight:bold;color:#1565c0">4</td><td style="padding:3px 8px">2 &nbsp; 4</td></tr>
  </table>
  <p style="margin:0.5em 0 0;font-size:0.85em;color:#555">Key: 2 | 3 means 23</p>
</div>
<p>Reading directly: Median = 4th of 7 values = 35. Mode = none (all unique). Range = 44 − 23 = 21.</p>

<h3>Line Graphs</h3>
<p>Line graphs show how a quantity changes over time. Points are plotted in time order and connected with straight lines — the slope shows rate of change.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0;font-size:0.9em">
  <div style="background:#e8f5e9;padding:8px;border-radius:8px">Steep line → rapid change</div>
  <div style="background:#e3f2fd;padding:8px;border-radius:8px">Flat line → no change</div>
  <div style="background:#fff3e0;padding:8px;border-radius:8px">Rising line → increasing</div>
  <div style="background:#fce4ec;padding:8px;border-radius:8px">Falling line → decreasing</div>
</div>`,

// ── mi-13-4: Probability of Events ────────────────────────────────────────────
'mi-13-4': `
<h2>Probability of Events</h2>
<p>Probability measures how likely an event is to happen, expressed as a number from 0 (impossible) to 1 (certain). It can also be written as a percentage or fraction.</p>

<svg width="100%" height="50" viewBox="0 0 440 50" style="max-width:440px;display:block;margin:0.75em 0">
  <line x1="55" y1="24" x2="385" y2="24" stroke="#555" stroke-width="2"/>
  <circle cx="55"  cy="24" r="5" fill="#c62828"/>
  <circle cx="220" cy="24" r="5" fill="#e65100"/>
  <circle cx="385" cy="24" r="5" fill="#2e7d32"/>
  <text x="55"  y="15" text-anchor="middle" font-size="11" fill="#c62828">0</text>
  <text x="220" y="15" text-anchor="middle" font-size="11" fill="#e65100">0.5</text>
  <text x="385" y="15" text-anchor="middle" font-size="11" fill="#2e7d32">1</text>
  <text x="55"  y="42" text-anchor="middle" font-size="10" fill="#c62828">Impossible</text>
  <text x="220" y="42" text-anchor="middle" font-size="10" fill="#e65100">Even chance</text>
  <text x="385" y="42" text-anchor="middle" font-size="10" fill="#2e7d32">Certain</text>
</svg>

<h3>Calculating Probability</h3>
<p style="text-align:center;background:#e8f5e9;padding:0.6em;border-radius:6px"><strong>P(event) = number of favourable outcomes ÷ total equally likely outcomes</strong></p>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  A bag has 3 red and 5 blue balls. (8 balls total)<br>
  P(red) = 3/8 &nbsp;|&nbsp; P(blue) = 5/8 &nbsp;|&nbsp; P(green) = 0/8 = 0
</div>

<h3>Complementary Events</h3>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  <strong>P(A) + P(not A) = 1</strong><br>
  If P(rain tomorrow) = 0.3, then P(no rain) = 1 − 0.3 = <strong>0.7</strong>
</div>

<h3>Mutually Exclusive Events</h3>
<p>Events that cannot happen at the same time. P(A or B) = P(A) + P(B).</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  Rolling a 2 or a 5 on a fair six-sided die:<br>
  P(2 or 5) = 1/6 + 1/6 = 2/6 = <strong>1/3</strong>
</div>`,

// ── mi-13-5: Data Displays & Graph Types ──────────────────────────────────
'mi-13-5': `<h2>Data Displays &amp; Graph Types</h2>

<h3>Pictograms</h3>
<p>A <strong>pictogram</strong> uses pictures or symbols to represent data. Every pictogram needs a <strong>key</strong> that tells the reader what each symbol stands for.</p>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example:</strong> Key: ★ = 4 books<br>
  Monday: ★★★ = 12 books<br>
  Tuesday: ★★½ = 10 books<br>
  Half a symbol = half the key value.
</div>

<h3>Line Plots</h3>
<p>A <strong>line plot</strong> (dot plot) uses a number line with Xs or dots stacked above each value. Great for small data sets — you can see the mode and spread at a glance.</p>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  Data: 2, 3, 3, 4, 4, 4, 5<br>
  Plot an X above each value on the number line. The tallest stack (three Xs above 4) is the mode.
</div>

<h3>Frequency Tables</h3>
<p>A <strong>frequency table</strong> records how often each value (or group of values) occurs. Grouped frequency tables use <strong>class intervals</strong> like 0–9, 10–19, 20–29.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <table style="border-collapse:collapse;width:100%;font-size:0.9em">
    <tr style="background:#c8e6c9"><th style="padding:6px;border:1px solid #ccc">Score</th><th style="padding:6px;border:1px solid #ccc">Tally</th><th style="padding:6px;border:1px solid #ccc">Frequency</th></tr>
    <tr><td style="padding:6px;border:1px solid #ccc">0–9</td><td style="padding:6px;border:1px solid #ccc">||||</td><td style="padding:6px;border:1px solid #ccc">4</td></tr>
    <tr style="background:#f9f9f9"><td style="padding:6px;border:1px solid #ccc">10–19</td><td style="padding:6px;border:1px solid #ccc">|||| ||</td><td style="padding:6px;border:1px solid #ccc">7</td></tr>
    <tr><td style="padding:6px;border:1px solid #ccc">20–29</td><td style="padding:6px;border:1px solid #ccc">|||</td><td style="padding:6px;border:1px solid #ccc">3</td></tr>
  </table>
  Total frequency = 4 + 7 + 3 = 14
</div>

<h3>Double Bar &amp; Double Line Graphs</h3>
<p>A <strong>double bar graph</strong> places two sets of bars side by side for easy comparison. A <strong>double line graph</strong> plots two data sets on the same axes to compare trends over time.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Double bar graph</strong><br>Compare amounts (e.g. boys vs girls in each sport)</div>
  <div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Double line graph</strong><br>Compare trends (e.g. two cities' temperatures over months)</div>
</div>

<h3>Choosing the Right Graph</h3>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <ul style="margin:0;padding-left:1.3em">
    <li><strong>Categories:</strong> bar chart or pictogram</li>
    <li><strong>Change over time:</strong> line graph</li>
    <li><strong>Proportions of a whole:</strong> pie chart</li>
    <li><strong>Two-variable relationship:</strong> scatter graph</li>
    <li><strong>Comparing two groups:</strong> double bar or double line graph</li>
    <li><strong>Spread of data:</strong> stem-and-leaf or box plot</li>
  </ul>
</div>`,

// ── mi-13-6: Sampling, Bias & Distributions ───────────────────────────────
'mi-13-6': `<h2>Sampling, Bias &amp; Distributions</h2>

<h3>Statistical vs Non-Statistical Questions</h3>
<p>A <strong>statistical question</strong> is one where the answers vary — you expect different data from different sources.</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:1em 0">
  <div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Statistical</strong><br>"How many siblings do Year 7 students have?" (answers vary)</div>
  <div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Not statistical</strong><br>"How many days are in June?" (one fixed answer: 30)</div>
</div>

<h3>Populations &amp; Samples</h3>
<p>The <strong>population</strong> is the entire group you want information about. A <strong>sample</strong> is a smaller subset chosen from the population.</p>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Why sample?</strong> It is often too expensive or impractical to survey the whole population. A well-chosen sample lets you draw conclusions about the population.
</div>

<h3>Bias in Samples</h3>
<p>A sample is <strong>biased</strong> if it does not fairly represent the population. Bias leads to conclusions that may be wrong.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Common sources of bias:</strong>
  <ul style="margin:0.5em 0 0;padding-left:1.3em">
    <li>Convenience sampling (only surveying people nearby)</li>
    <li>Voluntary response (only keen people reply)</li>
    <li>Leading questions that push towards a particular answer</li>
    <li>Excluding groups (e.g. surveying only one gender)</li>
  </ul>
</div>
<p>The best way to reduce bias is <strong>random sampling</strong> — every member of the population has an equal chance of being selected.</p>

<h3>Outliers</h3>
<p>An <strong>outlier</strong> is a value that is much higher or lower than the rest of the data.</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  Data: 3, 4, 5, 5, 6, 6, 7, <strong>25</strong><br>
  25 is an outlier — it pulls the <strong>mean</strong> upward and increases the <strong>range</strong>.<br>
  The <strong>median</strong> and <strong>mode</strong> are less affected by outliers.
</div>

<h3>Data Distributions</h3>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:1em 0;text-align:center;font-size:0.9em">
  <div style="background:#e8f5e9;padding:8px;border-radius:8px"><strong>Symmetric</strong><br>Data is balanced around the centre</div>
  <div style="background:#e3f2fd;padding:8px;border-radius:8px"><strong>Skewed left</strong><br>Tail stretches to the left (few low values)</div>
  <div style="background:#fff3e0;padding:8px;border-radius:8px"><strong>Skewed right</strong><br>Tail stretches to the right (few high values)</div>
</div>`,

// ── mi-13-7: Combined & Predicted Probability ─────────────────────────────
'mi-13-7': `<h2>Combined &amp; Predicted Probability</h2>

<h3>Mutually Exclusive Events</h3>
<p>Events are <strong>mutually exclusive</strong> if they cannot happen at the same time. For mutually exclusive events A and B:</p>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>P(A or B) = P(A) + P(B)</strong>
</div>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> Rolling a 2 or a 5 on a fair die:<br>
  P(2 or 5) = 1/6 + 1/6 = 2/6 = <strong>1/3</strong>
</div>

<h3>Overlapping Events</h3>
<p>Events <strong>overlap</strong> if they can happen at the same time. You must subtract the overlap to avoid double-counting:</p>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>P(A or B) = P(A) + P(B) − P(A and B)</strong>
</div>
<div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0">
  <strong>Example:</strong> From a deck of 52 cards: P(red) = 26/52, P(king) = 4/52, P(red king) = 2/52.<br>
  P(red or king) = 26/52 + 4/52 − 2/52 = <strong>28/52 = 7/13</strong>
</div>

<h3>Predictions from Theoretical Probability</h3>
<p>If you know the theoretical probability, multiply by the number of trials to predict outcomes:</p>
<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Expected outcomes = P(event) × number of trials</strong><br><br>
  P(heads) = 0.5. Flip 200 times → expect about <strong>100 heads</strong>.<br>
  P(rolling a 3) = 1/6. Roll 60 times → expect about <strong>10 threes</strong>.
</div>

<h3>Experimental Probability</h3>
<p><strong>Experimental probability</strong> is based on actual results:</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0;text-align:center">
  <strong>P(event) = times event occurred ÷ total trials</strong>
</div>
<p>With more trials, experimental probability gets closer to theoretical probability — this is the <strong>Law of Large Numbers</strong>.</p>
<div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.5em 0">
  A coin is flipped 1,000 times and lands heads 520 times.<br>
  Experimental P(heads) = 520/1000 = 0.52 — close to the theoretical 0.5.
</div>`,

// ── mi-13-8: Scatter Graphs & Bivariate Data ─────────────────────────────────
'mi-13-8': `<h2>Scatter Graphs &amp; Bivariate Data</h2>

<h3>What is a Scatter Graph?</h3>
<p>A <strong>scatter graph</strong> (scatter plot) shows the relationship between two variables. Each point represents one data item with an x-value and a y-value.</p>

<h3>Types of Correlation</h3>
<svg width="100%" height="120" viewBox="0 0 480 120" style="max-width:480px;display:block;margin:0.75em 0">
  <rect x="0" y="0" width="150" height="115" rx="8" fill="#e8f5e9"/>
  <rect x="165" y="0" width="150" height="115" rx="8" fill="#fce4ec"/>
  <rect x="330" y="0" width="150" height="115" rx="8" fill="#e3f2fd"/>
  <text x="75" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#2e7d32">Positive correlation</text>
  <circle cx="20" cy="95" r="3" fill="#2e7d32"/><circle cx="35" cy="85" r="3" fill="#2e7d32"/>
  <circle cx="55" cy="70" r="3" fill="#2e7d32"/><circle cx="75" cy="60" r="3" fill="#2e7d32"/>
  <circle cx="95" cy="45" r="3" fill="#2e7d32"/><circle cx="115" cy="35" r="3" fill="#2e7d32"/>
  <circle cx="130" cy="30" r="3" fill="#2e7d32"/>
  <text x="75" y="112" text-anchor="middle" font-size="9" fill="#555">As x increases, y increases</text>
  <text x="240" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#c62828">Negative correlation</text>
  <circle cx="185" cy="35" r="3" fill="#c62828"/><circle cx="200" cy="40" r="3" fill="#c62828"/>
  <circle cx="215" cy="55" r="3" fill="#c62828"/><circle cx="235" cy="65" r="3" fill="#c62828"/>
  <circle cx="255" cy="75" r="3" fill="#c62828"/><circle cx="275" cy="85" r="3" fill="#c62828"/>
  <circle cx="290" cy="95" r="3" fill="#c62828"/>
  <text x="240" y="112" text-anchor="middle" font-size="9" fill="#555">As x increases, y decreases</text>
  <text x="405" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1565c0">No correlation</text>
  <circle cx="350" cy="50" r="3" fill="#1565c0"/><circle cx="370" cy="85" r="3" fill="#1565c0"/>
  <circle cx="390" cy="40" r="3" fill="#1565c0"/><circle cx="410" cy="70" r="3" fill="#1565c0"/>
  <circle cx="430" cy="35" r="3" fill="#1565c0"/><circle cx="450" cy="90" r="3" fill="#1565c0"/>
  <circle cx="460" cy="55" r="3" fill="#1565c0"/>
  <text x="405" y="112" text-anchor="middle" font-size="9" fill="#555">No clear pattern</text>
</svg>

<h3>Line of Best Fit</h3>
<p>A <strong>line of best fit</strong> is a straight line drawn through the middle of the data points on a scatter graph. It should:</p>
<ul>
  <li>Follow the general trend of the data</li>
  <li>Have roughly equal numbers of points above and below</li>
  <li>Pass through the mean point (x̄, ȳ) if possible</li>
</ul>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Using the line of best fit:</strong> You can <strong>interpolate</strong> (estimate within the data range) or <strong>extrapolate</strong> (estimate beyond the data range — less reliable) by reading values from the line.
</div>

<h3>Common Mistakes</h3>
<p>❌ Drawing the line through the first and last points — ✅ Draw through the middle of the cloud of points</p>
<p>❌ Saying "no correlation" when there is a weak correlation — ✅ Describe strength: strong, moderate or weak</p>`,

// ── mi-13-9: Venn Diagrams for Probability ───────────────────────────────────
'mi-13-9': `<h2>Venn Diagrams for Probability</h2>

<h3>What is a Venn Diagram?</h3>
<p>A <strong>Venn diagram</strong> uses overlapping circles inside a rectangle to show how items belong to different sets. The rectangle represents the <strong>universal set</strong> (all items).</p>

<svg width="100%" height="160" viewBox="0 0 340 160" style="max-width:340px;display:block;margin:0.75em 0">
  <rect x="0" y="0" width="340" height="160" rx="8" fill="#f5f5f5" stroke="#999"/>
  <text x="320" y="15" text-anchor="end" font-size="11" fill="#555">ξ</text>
  <circle cx="120" cy="85" r="60" fill="rgba(33,150,243,0.2)" stroke="#1565c0" stroke-width="1.5"/>
  <circle cx="210" cy="85" r="60" fill="rgba(76,175,80,0.2)" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="90" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#1565c0">A</text>
  <text x="240" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#2e7d32">B</text>
  <text x="85" y="90" text-anchor="middle" font-size="13" fill="#1565c0">A only</text>
  <text x="165" y="90" text-anchor="middle" font-size="13" fill="#6a1b9a">A ∩ B</text>
  <text x="245" y="90" text-anchor="middle" font-size="13" fill="#2e7d32">B only</text>
  <text x="305" y="145" text-anchor="middle" font-size="11" fill="#555">Neither</text>
</svg>

<h3>Set Notation</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Symbol</th><th style="padding:8px;border:1px solid #ccc">Meaning</th><th style="padding:8px;border:1px solid #ccc">Region</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;text-align:centre">A ∩ B</td><td style="padding:8px;border:1px solid #ccc">Intersection — in both A and B</td><td style="padding:8px;border:1px solid #ccc">Overlap</td></tr>
  <tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc;text-align:centre">A ∪ B</td><td style="padding:8px;border:1px solid #ccc">Union — in A or B or both</td><td style="padding:8px;border:1px solid #ccc">Both circles combined</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc;text-align:centre">A'</td><td style="padding:8px;border:1px solid #ccc">Complement — not in A</td><td style="padding:8px;border:1px solid #ccc">Everything outside circle A</td></tr>
</table>

<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Worked Example:</strong> 30 pupils were asked about pets. 18 have a cat, 12 have a dog, 7 have both.<br>
  Cat only = 18 − 7 = 11 &nbsp;|&nbsp; Dog only = 12 − 7 = 5 &nbsp;|&nbsp; Both = 7<br>
  Neither = 30 − 11 − 7 − 5 = <strong>7</strong><br><br>
  P(cat or dog) = (11 + 7 + 5) ÷ 30 = 23/30<br>
  P(neither) = 7/30
</div>

<h3>Common Mistakes</h3>
<p>❌ Forgetting to subtract the intersection from each circle — ✅ Always fill in the overlap first, then subtract</p>
<p>❌ Adding all the numbers without checking the total — ✅ All four regions must add up to the universal set</p>`

});
