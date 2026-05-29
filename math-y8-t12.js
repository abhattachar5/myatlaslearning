// math-y8-t12.js — Year 8 Maths Topic 12: Units of Measurement
// Islands: m8i-12-1 .. m8i-12-4
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-12-1 — Metric Conversions
  {id:"m8fc-12-1-1",islandId:"m8i-12-1",front:"State the metric conversions for length: km, m, cm, mm.",
   back:"1 km = 1000 m\n1 m = 100 cm\n1 m = 1000 mm\n1 cm = 10 mm\n\nTo convert to a smaller unit: multiply.\nTo convert to a larger unit: divide.\nExample: 3.5 km = 3500 m (× 1000).",difficulty:1,category:"definition"},
  {id:"m8fc-12-1-2",islandId:"m8i-12-1",front:"Convert 4.2 kg to grams.",
   back:"4200 g\n\n1 kg = 1000 g\n4.2 × 1000 = 4200 g\n\nMoving to a smaller unit (kg → g), so multiply by 1000.",difficulty:1,category:"calculation"},
  {id:"m8fc-12-1-3",islandId:"m8i-12-1",front:"Convert 850 ml to litres.",
   back:"0.85 litres\n\n1 litre = 1000 ml\n850 ÷ 1000 = 0.85 litres\n\nMoving to a larger unit (ml → l), so divide by 1000.",difficulty:1,category:"calculation"},
  {id:"m8fc-12-1-4",islandId:"m8i-12-1",front:"State the metric conversions for mass: kg, g, mg.",
   back:"1 kg = 1000 g\n1 g = 1000 mg\n1 kg = 1 000 000 mg\n\nExample: 2.5 g = 2500 mg (× 1000)\nExample: 750 mg = 0.75 g (÷ 1000).",difficulty:1,category:"definition"},
  {id:"m8fc-12-1-5",islandId:"m8i-12-1",front:"A ribbon is 3 m 45 cm long. How many centimetres is that?",
   back:"345 cm\n\nConvert the metres: 3 m = 300 cm\nAdd the remaining centimetres: 300 + 45 = 345 cm\n\nAlways convert all parts to the same unit before combining.",difficulty:2,category:"application"},
  {id:"m8fc-12-1-6",islandId:"m8i-12-1",front:"A bottle contains 1.5 litres of water. How many millilitres is that?",
   back:"1500 ml\n\n1 litre = 1000 ml\n1.5 × 1000 = 1500 ml\n\nCapacity conversions: litres → ml, multiply by 1000.",difficulty:1,category:"calculation"},

  // m8i-12-2 — Imperial & Mixed Conversions
  {id:"m8fc-12-2-1",islandId:"m8i-12-2",front:"State the common imperial length conversions.",
   back:"12 inches = 1 foot\n3 feet = 1 yard\n1760 yards = 1 mile\n5280 feet = 1 mile\n\nExample: 36 inches = 3 feet (÷ 12).",difficulty:1,category:"definition"},
  {id:"m8fc-12-2-2",islandId:"m8i-12-2",front:"State the common imperial mass and capacity conversions.",
   back:"Mass: 16 ounces = 1 pound (lb); 14 pounds = 1 stone; 2240 pounds = 1 ton\nCapacity: 8 pints = 1 gallon; 20 fluid ounces = 1 pint\n\nExample: 5 gallons = 40 pints (× 8).",difficulty:2,category:"definition"},
  {id:"m8fc-12-2-3",islandId:"m8i-12-2",front:"Approximately how many kilometres are in a mile?",
   back:"1 mile ≈ 1.6 km (more precisely 1.609 km)\n\nTo convert miles to km: multiply by 1.6\nTo convert km to miles: divide by 1.6\n\nExample: 5 miles ≈ 8 km.",difficulty:2,category:"concept"},
  {id:"m8fc-12-2-4",islandId:"m8i-12-2",front:"Convert 5 feet 6 inches to inches only.",
   back:"66 inches\n\n5 feet × 12 = 60 inches\n60 + 6 = 66 inches\n\nConvert the feet part first, then add the remaining inches.",difficulty:1,category:"calculation"},
  {id:"m8fc-12-2-5",islandId:"m8i-12-2",front:"A person weighs 9 stone 4 pounds. Convert this to pounds only.",
   back:"130 pounds\n\n9 stone × 14 = 126 pounds\n126 + 4 = 130 pounds\n\n1 stone = 14 pounds; convert stone to pounds then add remaining pounds.",difficulty:2,category:"calculation"},
  {id:"m8fc-12-2-6",islandId:"m8i-12-2",front:"Approximately how many litres are in 1 gallon?",
   back:"1 gallon ≈ 4.5 litres (more precisely 4.546 litres)\n\nTo convert gallons to litres: multiply by 4.5\nTo convert litres to gallons: divide by 4.5\n\nExample: 10 gallons ≈ 45 litres.",difficulty:2,category:"concept"},

  // m8i-12-3 — Area & Volume Unit Conversions
  {id:"m8fc-12-3-1",islandId:"m8i-12-3",front:"How many cm² are in 1 m²?",
   back:"10 000 cm²\n\n1 m = 100 cm\n1 m² = 100 cm × 100 cm = 10 000 cm²\n\nFor area conversions, square the linear conversion factor.\nSo 1 m² = 100² cm² = 10 000 cm².",difficulty:2,category:"definition"},
  {id:"m8fc-12-3-2",islandId:"m8i-12-3",front:"What is a hectare, and how does it relate to m²?",
   back:"1 hectare (ha) = 10 000 m²\n\nA hectare is a metric unit of area often used for land.\nImagine a square field 100 m × 100 m — that is 1 hectare.\n\nExample: 3.5 ha = 35 000 m².",difficulty:1,category:"definition"},
  {id:"m8fc-12-3-3",islandId:"m8i-12-3",front:"What is the relationship between cm³ and ml?",
   back:"1 cm³ = 1 ml\n\nThis is an exact equivalence:\n• A cube with sides of 1 cm has a volume of 1 cm³, which holds exactly 1 ml of liquid.\n\nAlso: 1000 cm³ = 1 litre.",difficulty:1,category:"definition"},
  {id:"m8fc-12-3-4",islandId:"m8i-12-3",front:"Convert 2.5 m² to cm².",
   back:"25 000 cm²\n\n1 m² = 10 000 cm²\n2.5 × 10 000 = 25 000 cm²\n\nMultiply by 10 000 when converting from m² to cm².",difficulty:2,category:"calculation"},
  {id:"m8fc-12-3-5",islandId:"m8i-12-3",front:"A fish tank has a volume of 60 000 cm³. How many litres does it hold?",
   back:"60 litres\n\n1000 cm³ = 1 litre\n60 000 ÷ 1000 = 60 litres\n\nDivide by 1000 to convert cm³ to litres.",difficulty:2,category:"application"},
  {id:"m8fc-12-3-6",islandId:"m8i-12-3",front:"How many mm² are in 1 cm²?",
   back:"100 mm²\n\n1 cm = 10 mm\n1 cm² = 10 mm × 10 mm = 100 mm²\n\nSquare the linear factor: 10² = 100.\nExample: 4.5 cm² = 450 mm².",difficulty:2,category:"calculation"},

  // m8i-12-4 — Precision & Estimation
  {id:"m8fc-12-4-1",islandId:"m8i-12-4",front:"What does 'precision' mean in measurement?",
   back:"Precision refers to how exact or detailed a measurement is.\n\nA measurement is more precise if it uses smaller units or more decimal places.\nExample: 3.45 m is more precise than 3 m.\n\nPrecision depends on the measuring instrument used.",difficulty:1,category:"concept"},
  {id:"m8fc-12-4-2",islandId:"m8i-12-4",front:"What unit would you use to measure the length of a football pitch?",
   back:"Metres (m)\n\nA football pitch is roughly 100 m long — metres give a sensible, readable number.\n\nUsing km would give 0.1 km (inconveniently small).\nUsing cm would give 10 000 cm (inconveniently large).\n\nChoose a unit that gives a manageable number.",difficulty:1,category:"application"},
  {id:"m8fc-12-4-3",islandId:"m8i-12-4",front:"Estimate the mass of a standard bag of flour in metric units.",
   back:"About 1.5 kg (a typical bag of flour is 1 kg or 1.5 kg)\n\nCommon reference masses:\n• A paperclip ≈ 1 g\n• A £1 coin ≈ 8.75 g\n• A bag of sugar ≈ 1 kg\n• An average adult ≈ 70 kg",difficulty:2,category:"application"},
  {id:"m8fc-12-4-4",islandId:"m8i-12-4",front:"A distance is given as 6 km. What is the maximum possible error if this is rounded to the nearest km?",
   back:"±0.5 km\n\nWhen a value is rounded to the nearest km, any original value from 5.5 km up to (but not including) 6.5 km rounds to 6 km.\n\nSo the maximum error is 0.5 km either way.",difficulty:3,category:"concept"},
  {id:"m8fc-12-4-5",islandId:"m8i-12-4",front:"Estimate 1 foot in centimetres.",
   back:"About 30 cm (exactly 30.48 cm)\n\nUseful imperial-metric estimates:\n• 1 inch ≈ 2.5 cm\n• 1 foot ≈ 30 cm\n• 1 yard ≈ 90 cm (just under 1 m)\n• 1 mile ≈ 1.6 km",difficulty:2,category:"application"},
  {id:"m8fc-12-4-6",islandId:"m8i-12-4",front:"Which is the most appropriate unit to measure the capacity of a kitchen bowl: ml, cl or litres?",
   back:"Litres (or millilitres for small amounts).\n\nA typical kitchen bowl holds 1–3 litres.\nUsing ml would give 1000–3000 ml (correct but unwieldy).\nUsing litres gives a clean, practical number.\n\nChoose the unit that makes the value easy to read and understand.",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-12-1":[
    {q:"How many metres are in 3.7 km?",opts:["37 m","370 m","3700 m","37 000 m"],c:2,e:"1 km = 1000 m, so 3.7 km = 3.7 × 1000 = 3700 m."},
    {q:"A parcel has a mass of 2450 g. What is this in kilograms?",opts:["24.5 kg","2.45 kg","0.245 kg","245 kg"],c:1,e:"1 kg = 1000 g. 2450 ÷ 1000 = 2.45 kg. Dividing by 1000 because g is smaller than kg."},
    {q:"Which of these is the same as 5.6 litres?",opts:["56 ml","560 ml","5600 ml","56 000 ml"],c:2,e:"1 litre = 1000 ml. 5.6 × 1000 = 5600 ml."},
    {q:"A runner completes a race of 1500 m. How many kilometres is that?",opts:["150 km","15 km","1.5 km","0.15 km"],c:2,e:"1 km = 1000 m. 1500 ÷ 1000 = 1.5 km. Dividing because km is a larger unit."},
    {q:"Convert 3200 mg to grams.",opts:["0.032 g","0.32 g","3.2 g","32 g"],c:2,e:"1 g = 1000 mg. 3200 ÷ 1000 = 3.2 g."}
  ],
  "m8i-12-2":[
    {q:"How many inches are in 4 feet?",opts:["40","48","36","52"],c:1,e:"1 foot = 12 inches. 4 × 12 = 48 inches."},
    {q:"Convert 3 stone to pounds.",opts:["30 lb","36 lb","42 lb","48 lb"],c:2,e:"1 stone = 14 pounds. 3 × 14 = 42 pounds."},
    {q:"A car travels 40 miles. Approximately how many kilometres is that?",opts:["25 km","40 km","56 km","64 km"],c:3,e:"1 mile ≈ 1.6 km. 40 × 1.6 = 64 km."},
    {q:"How many pints are in 3 gallons?",opts:["16","20","24","32"],c:2,e:"1 gallon = 8 pints. 3 × 8 = 24 pints."},
    {q:"Sam is 5 feet 9 inches tall. What is his height in inches?",opts:["59 inches","65 inches","69 inches","74 inches"],c:2,e:"5 feet = 5 × 12 = 60 inches. 60 + 9 = 69 inches."}
  ],
  "m8i-12-3":[
    {q:"How many cm² are in 3 m²?",opts:["300 cm²","3000 cm²","30 000 cm²","300 000 cm²"],c:2,e:"1 m² = 100 × 100 = 10 000 cm². So 3 × 10 000 = 30 000 cm²."},
    {q:"A swimming pool holds 450 000 cm³ of water. How many litres is that?",opts:["45 litres","450 litres","4500 litres","450 000 litres"],c:1,e:"1000 cm³ = 1 litre. 450 000 ÷ 1000 = 450 litres."},
    {q:"A field has an area of 2.5 hectares. What is this in m²?",opts:["250 m²","2500 m²","25 000 m²","250 000 m²"],c:2,e:"1 hectare = 10 000 m². 2.5 × 10 000 = 25 000 m²."},
    {q:"Which statement about cm³ and ml is correct?",opts:["1 cm³ = 10 ml","1 cm³ = 100 ml","1 cm³ = 1 ml","10 cm³ = 1 ml"],c:2,e:"1 cm³ is exactly equal to 1 ml. This means 1000 cm³ = 1 litre."},
    {q:"How many mm² are there in 1 cm²?",opts:["10 mm²","100 mm²","1000 mm²","10 000 mm²"],c:1,e:"1 cm = 10 mm, so 1 cm² = 10 × 10 = 100 mm². Square the linear conversion factor."}
  ],
  "m8i-12-4":[
    {q:"Which unit is most appropriate for measuring the distance between two cities?",opts:["mm","cm","m","km"],c:3,e:"Cities are tens or hundreds of kilometres apart. Using km gives a sensible number (e.g. 250 km). Using metres would give 250 000 m — unwieldy."},
    {q:"A length is recorded as 8 m (to the nearest metre). What is the smallest it could actually be?",opts:["7 m","7.5 m","8 m","8.5 m"],c:1,e:"When rounded to the nearest metre, values from 7.5 m up to (but not including) 8.5 m round to 8 m. So the smallest possible value is 7.5 m."},
    {q:"Which measurement is the most precise?",opts:["5 m","5.0 m","5.00 m","500 cm"],c:2,e:"5.00 m has three significant figures and is recorded to the nearest centimetre — making it the most precise. More decimal places indicate greater precision."},
    {q:"Approximately how many centimetres are in 1 inch?",opts:["1.5 cm","2.0 cm","2.5 cm","3.0 cm"],c:2,e:"1 inch ≈ 2.54 cm, which we round to approximately 2.5 cm. This is a key metric-imperial conversion to remember."},
    {q:"Which unit would you use to measure the mass of a vitamin tablet?",opts:["tonnes","kg","g","mg"],c:3,e:"A vitamin tablet is very light — typically 200–500 mg. Using mg gives a sensible whole number. Using grams would give 0.2–0.5 g, which is workable but mg is more natural for such small masses."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-12-1': `
<h2>Metric Conversions</h2>
<p>The metric system is based on powers of 10, which makes converting between units straightforward — you just multiply or divide by 10, 100 or 1000. The key is knowing whether you are moving to a <strong>larger</strong> or <strong>smaller</strong> unit.</p>

<h3>Length conversions</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Conversion</th><th style="padding:8px;border:1px solid #ccc">Factor</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">km → m</td><td style="padding:8px;border:1px solid #ccc">× 1000</td><td style="padding:8px;border:1px solid #ccc">2.4 km = 2400 m</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">m → cm</td><td style="padding:8px;border:1px solid #ccc">× 100</td><td style="padding:8px;border:1px solid #ccc">3.5 m = 350 cm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">cm → mm</td><td style="padding:8px;border:1px solid #ccc">× 10</td><td style="padding:8px;border:1px solid #ccc">4.8 cm = 48 mm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">m → mm</td><td style="padding:8px;border:1px solid #ccc">× 1000</td><td style="padding:8px;border:1px solid #ccc">0.6 m = 600 mm</td></tr>
</table>

<h3>Mass &amp; capacity conversions</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Conversion</th><th style="padding:8px;border:1px solid #ccc">Factor</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">kg → g</td><td style="padding:8px;border:1px solid #ccc">× 1000</td><td style="padding:8px;border:1px solid #ccc">1.25 kg = 1250 g</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">g → mg</td><td style="padding:8px;border:1px solid #ccc">× 1000</td><td style="padding:8px;border:1px solid #ccc">0.5 g = 500 mg</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">litres → ml</td><td style="padding:8px;border:1px solid #ccc">× 1000</td><td style="padding:8px;border:1px solid #ccc">2.75 l = 2750 ml</td></tr>
</table>

<div class="example-box">
<p><strong>Example:</strong> A plank of wood is 2 m 35 cm long. How many centimetres is that?</p>
<p><strong>Solution:</strong> Convert metres to centimetres: 2 m = 200 cm.<br>
Add the remaining centimetres: 200 + 35 = <strong>235 cm</strong>.</p>
</div>

<h3>Rule of thumb</h3>
<p>Moving to a <strong>smaller</strong> unit (e.g. kg to g): <strong>multiply</strong>.<br>
Moving to a <strong>larger</strong> unit (e.g. ml to litres): <strong>divide</strong>.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Metric system</dt><dd>A decimal system of measurement using units such as metre, kilogram and litre.</dd>
<dt>Prefix</dt><dd>A word part added to a unit to change its size (kilo = × 1000, centi = ÷ 100, milli = ÷ 1000).</dd>
<dt>Capacity</dt><dd>The amount a container can hold, measured in litres or millilitres.</dd>
<dt>Mass</dt><dd>The amount of matter in an object, measured in kg, g or mg.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Dividing when you should multiply — ✅ going to a smaller unit always means multiplying.</li>
<li>❌ Confusing 1 m = 100 cm with 1 m² = 100 cm² — ✅ squared units are covered separately.</li>
<li>❌ Forgetting to convert both parts of a mixed unit (e.g. 3 m 45 cm) — ✅ convert each part then add.</li>
</ul>`,

'm8i-12-2': `
<h2>Imperial &amp; Mixed Conversions</h2>
<p>The imperial system is still used in the UK alongside metric — for example, road signs use miles and people often describe their height in feet and inches. You need to know the key imperial conversions and be able to switch between the two systems.</p>

<h3>Imperial length</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Conversion</th><th style="padding:8px;border:1px solid #ccc">Fact</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Inches to feet</td><td style="padding:8px;border:1px solid #ccc">12 inches = 1 foot</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Feet to yards</td><td style="padding:8px;border:1px solid #ccc">3 feet = 1 yard</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Yards to miles</td><td style="padding:8px;border:1px solid #ccc">1760 yards = 1 mile</td></tr>
</table>

<h3>Imperial mass &amp; capacity</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Conversion</th><th style="padding:8px;border:1px solid #ccc">Fact</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Ounces to pounds</td><td style="padding:8px;border:1px solid #ccc">16 ounces = 1 pound</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Pounds to stone</td><td style="padding:8px;border:1px solid #ccc">14 pounds = 1 stone</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Pints to gallons</td><td style="padding:8px;border:1px solid #ccc">8 pints = 1 gallon</td></tr>
</table>

<h3>Metric ↔ Imperial approximations</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Imperial</th><th style="padding:8px;border:1px solid #ccc">Approximate metric</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 mile</td><td style="padding:8px;border:1px solid #ccc">≈ 1.6 km</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 inch</td><td style="padding:8px;border:1px solid #ccc">≈ 2.5 cm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 foot</td><td style="padding:8px;border:1px solid #ccc">≈ 30 cm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 gallon</td><td style="padding:8px;border:1px solid #ccc">≈ 4.5 litres</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 kg</td><td style="padding:8px;border:1px solid #ccc">≈ 2.2 pounds</td></tr>
</table>

<div class="example-box">
<p><strong>Example:</strong> A motorway sign says the next exit is 12 miles away. About how many kilometres is that?</p>
<p><strong>Solution:</strong> 1 mile ≈ 1.6 km<br>
12 × 1.6 = <strong>19.2 km</strong>.</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Imperial system</dt><dd>An older system of units (inches, feet, pounds, pints) still used alongside metric in the UK.</dd>
<dt>Approximation</dt><dd>A value that is close but not exactly equal (indicated by ≈).</dd>
<dt>Mixed units</dt><dd>A measurement expressed using two units, e.g. 5 feet 3 inches.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using 10 inches = 1 foot — ✅ there are 12 inches in a foot.</li>
<li>❌ Using 12 pounds = 1 stone — ✅ there are 14 pounds in a stone.</li>
<li>❌ Treating conversions as exact — ✅ metric-imperial conversions are approximations (use ≈ not =).</li>
</ul>`,

'm8i-12-3': `
<h2>Area &amp; Volume Unit Conversions</h2>
<p>When converting <strong>area</strong> units, you must square the linear conversion factor. When converting <strong>volume</strong> units, you cube it. This is because area is two-dimensional and volume is three-dimensional.</p>

<h3>Area conversions</h3>
<div class="example-box">
<p><strong>Why 1 m² = 10 000 cm²:</strong></p>
<p>1 m = 100 cm<br>
1 m² = (100 cm) × (100 cm) = <strong>10 000 cm²</strong></p>
</div>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Conversion</th><th style="padding:8px;border:1px solid #ccc">Factor</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">m² to cm²</td><td style="padding:8px;border:1px solid #ccc">× 10 000</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">cm² to mm²</td><td style="padding:8px;border:1px solid #ccc">× 100</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">m² to hectares</td><td style="padding:8px;border:1px solid #ccc">÷ 10 000</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">hectares to m²</td><td style="padding:8px;border:1px solid #ccc">× 10 000</td></tr>
</table>

<h3>Linking cm³ to ml and litres</h3>
<p>Volume and capacity are linked through a crucial equivalence:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ccc">Volume</th><th style="padding:8px;border:1px solid #ccc">Capacity</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 cm³</td><td style="padding:8px;border:1px solid #ccc">= 1 ml</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1000 cm³</td><td style="padding:8px;border:1px solid #ccc">= 1 litre</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1 m³</td><td style="padding:8px;border:1px solid #ccc">= 1000 litres</td></tr>
</table>

<div class="example-box">
<p><strong>Example:</strong> A storage box has a volume of 48 000 cm³. How many litres can it hold?</p>
<p><strong>Solution:</strong> 1000 cm³ = 1 litre<br>
48 000 ÷ 1000 = <strong>48 litres</strong>.</p>
</div>

<h3>Hectares</h3>
<p>A <strong>hectare</strong> is used to measure large areas of land. It is equivalent to a square 100 m by 100 m.</p>
<p>1 hectare (ha) = 10 000 m² = 100 m × 100 m</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Area</dt><dd>The amount of space inside a 2D shape, measured in square units (cm², m², etc.).</dd>
<dt>Volume</dt><dd>The amount of space inside a 3D shape, measured in cubic units (cm³, m³, etc.).</dd>
<dt>Hectare (ha)</dt><dd>A unit of area equal to 10 000 m², used for measuring land.</dd>
<dt>Capacity</dt><dd>How much a container can hold; 1 cm³ = 1 ml exactly.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Saying 1 m² = 100 cm² — ✅ you must square the factor: 1 m² = 10 000 cm².</li>
<li>❌ Confusing 1 cm³ = 1 litre — ✅ it is 1000 cm³ = 1 litre (and 1 cm³ = 1 ml).</li>
<li>❌ Converting hectares using ÷ 100 — ✅ 1 ha = 10 000 m², so divide or multiply by 10 000.</li>
</ul>`,

'm8i-12-4': `
<h2>Precision &amp; Estimation</h2>
<p>Choosing the right unit and understanding the limits of a measurement are key skills. A more precise measurement gives more information — but it also depends on the instrument and the context.</p>

<h3>Choosing appropriate units</h3>
<p>A good choice of unit produces a number that is neither too large nor too small, and feels natural in context.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">What you are measuring</th><th style="padding:8px;border:1px solid #ccc">Sensible unit</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Thickness of a coin</td><td style="padding:8px;border:1px solid #ccc">mm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Height of a person</td><td style="padding:8px;border:1px solid #ccc">m or cm</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Distance between cities</td><td style="padding:8px;border:1px solid #ccc">km</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Mass of a medicine tablet</td><td style="padding:8px;border:1px solid #ccc">mg</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Mass of a person</td><td style="padding:8px;border:1px solid #ccc">kg</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Capacity of a teaspoon</td><td style="padding:8px;border:1px solid #ccc">ml</td></tr>
</table>

<h3>Precision and rounding errors</h3>
<p>When a measurement is rounded, the true value lies within a range around the given value. The <strong>maximum error</strong> is half the rounding unit.</p>
<div class="example-box">
<p><strong>Example:</strong> A road is 5 km long (rounded to the nearest km). What are the upper and lower bounds?</p>
<p>Lower bound: 5 − 0.5 = <strong>4.5 km</strong><br>
Upper bound: 5 + 0.5 = <strong>5.5 km</strong> (up to, but not including)<br>
So the true length is anywhere in the range [4.5 km, 5.5 km).</p>
</div>

<h3>Estimating metric measurements</h3>
<p>Use everyday reference objects to build your estimation skills:</p>
<ul>
<li>A door is about <strong>2 m</strong> tall.</li>
<li>A standard ruler is <strong>30 cm</strong> long.</li>
<li>A bag of sugar is <strong>1 kg</strong>.</li>
<li>A large bottle of water is <strong>2 litres</strong>.</li>
<li>A standard classroom is about <strong>10 m × 8 m</strong>.</li>
</ul>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Precision</dt><dd>How exact a measurement is; a measurement with more decimal places is more precise.</dd>
<dt>Lower bound</dt><dd>The smallest value that rounds to the given measurement.</dd>
<dt>Upper bound</dt><dd>The largest value that would still round to the given measurement.</dd>
<dt>Estimation</dt><dd>An approximate value obtained by using reference objects or mental calculation.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Confusing accuracy with precision — ✅ accuracy means close to the true value; precision means how finely the measurement is expressed.</li>
<li>❌ Saying the upper bound is included — ✅ it is the value up to but not including the upper bound.</li>
<li>❌ Choosing units that make numbers impractically large or small — ✅ pick units that give a sensible number (e.g. use km not mm for motorway distances).</li>
</ul>`

});
