// content/y10/science/islands/t14.js — Year 10 Science Topic 14: Forces & Pressure
// Islands s10i-14-1 .. s10i-14-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-14-1 — Forces & Moments
  {id:"s10fc-14-1-1", islandId:"s10i-14-1", front:"What is a moment and how is it calculated?",
   back:"A moment is the turning effect of a force around a pivot (fulcrum).\n\nMoment = force × distance from pivot\nM = F × d\n\nWhere:\n• M = moment in newton-metres (Nm)\n• F = force in newtons (N)\n• d = perpendicular distance from the pivot to the line of action of the force (m)\n\nMoments can be clockwise or anticlockwise.", difficulty:1, category:"definition"},
  {id:"s10fc-14-1-2", islandId:"s10i-14-1", front:"State the principle of moments.",
   back:"The principle of moments states that for an object in equilibrium (balanced):\n\nSum of clockwise moments = Sum of anticlockwise moments\n\nThis means if a beam is balanced on a pivot, the total turning effect on one side must equal the total turning effect on the other side.\n\nThis principle is used to solve problems with seesaws, levers and balanced beams.", difficulty:2, category:"concept"},
  {id:"s10fc-14-1-3", islandId:"s10i-14-1", front:"A force of 20 N acts 0.3 m from a pivot. Calculate the moment.",
   back:"M = F × d\nM = 20 × 0.3\nM = 6 Nm\n\nThe force produces a moment of 6 newton-metres about the pivot.\n\nRemember: the distance must be the perpendicular distance from the pivot to the line of action of the force.", difficulty:1, category:"calculation"},
  {id:"s10fc-14-1-4", islandId:"s10i-14-1", front:"A beam is balanced. On the left, a 40 N weight sits 2 m from the pivot. What force is needed on the right, 4 m from the pivot, to balance it?",
   back:"Using the principle of moments:\nClockwise moment = Anticlockwise moment\n\n40 × 2 = F × 4\n80 = 4F\nF = 80 ÷ 4\nF = 20 N\n\nA force of 20 N is needed at 4 m from the pivot. A larger distance means a smaller force is needed for the same moment.", difficulty:2, category:"calculation"},
  {id:"s10fc-14-1-5", islandId:"s10i-14-1", front:"Give a real-world example of the principle of moments.",
   back:"A seesaw is a classic example:\n\n• Two people of different weights can balance if the heavier person sits closer to the pivot\n• The product of weight × distance must be equal on both sides\n\nOther examples:\n• Using a crowbar to lever open a lid (longer handle = bigger moment with less force)\n• A wheelbarrow (the wheel is the pivot; a long handle reduces the effort needed)\n• Scissors, nutcrackers and spanners all use moments", difficulty:1, category:"application"},

  // s10i-14-2 — Pressure in Fluids
  {id:"s10fc-14-2-1", islandId:"s10i-14-2", front:"What is pressure and how is it calculated?",
   back:"Pressure is the force per unit area:\n\nPressure = force ÷ area\nP = F ÷ A\n\nWhere:\n• P = pressure in pascals (Pa)\n• F = force in newtons (N)\n• A = area in metres squared (m²)\n\n1 Pa = 1 N/m²\n\nA smaller area with the same force gives a higher pressure (e.g. sharp knives, stiletto heels).", difficulty:1, category:"definition"},
  {id:"s10fc-14-2-2", islandId:"s10i-14-2", front:"A box weighs 600 N and sits on a surface with an area of 2 m². Calculate the pressure.",
   back:"P = F ÷ A\nP = 600 ÷ 2\nP = 300 Pa\n\nThe box exerts a pressure of 300 pascals on the surface.\n\nIf the box were turned so it sat on a smaller face (e.g. 0.5 m²), the pressure would be:\nP = 600 ÷ 0.5 = 1200 Pa — four times more.", difficulty:1, category:"calculation"},
  {id:"s10fc-14-2-3", islandId:"s10i-14-2", front:"What causes atmospheric pressure?",
   back:"Atmospheric pressure is caused by the weight of the column of air above a point pressing down on the surface below.\n\nAt sea level, atmospheric pressure is approximately 101 325 Pa (about 101 kPa).\n\nAs altitude increases:\n• There is less air above\n• The weight of air pressing down decreases\n• Atmospheric pressure decreases\n\nAtmospheric pressure acts in all directions, not just downward.", difficulty:2, category:"concept"},
  {id:"s10fc-14-2-4", islandId:"s10i-14-2", front:"How do you calculate pressure in a liquid column?",
   back:"Pressure due to a column of liquid:\n\nP = h × ρ × g\n\nWhere:\n• P = pressure in pascals (Pa)\n• h = height (depth) of the liquid column (m)\n• ρ (rho) = density of the liquid (kg/m³)\n• g = gravitational field strength (N/kg) — use 9.8 or 10\n\nPressure in a liquid increases with depth and with the density of the liquid.\n\nThis equation does not include atmospheric pressure — add it for total pressure.", difficulty:2, category:"calculation"},
  {id:"s10fc-14-2-5", islandId:"s10i-14-2", front:"Calculate the pressure at a depth of 5 m in water. (ρ = 1000 kg/m³, g = 10 N/kg)",
   back:"P = h × ρ × g\nP = 5 × 1000 × 10\nP = 50 000 Pa (50 kPa)\n\nThis is the pressure due to the water alone. The total pressure at this depth would also include atmospheric pressure:\n\nTotal = 50 000 + 101 325 ≈ 151 325 Pa ≈ 151 kPa", difficulty:2, category:"calculation"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-14-1": [
    {q:"A force of 15 N acts at a distance of 0.4 m from a pivot. What is the moment?",
     opts:["3.75 Nm","6 Nm","60 Nm","37.5 Nm"], c:1,
     e:"M = F × d = 15 × 0.4 = 6 Nm. Always multiply force (in newtons) by the perpendicular distance from the pivot (in metres)."},
    {q:"A beam is balanced. A 60 N weight is placed 1 m from the pivot on the left. What weight must be placed 3 m from the pivot on the right?",
     opts:["20 N","60 N","180 N","30 N"], c:0,
     e:"Clockwise = Anticlockwise: 60 × 1 = W × 3 → W = 60 ÷ 3 = 20 N. The further from the pivot, the less force is needed to create the same moment."},
    {q:"Which of the following increases the moment of a force?",
     opts:["Decreasing the force","Moving the force closer to the pivot","Increasing the perpendicular distance from the pivot","Reducing the area of contact"], c:2,
     e:"Moment = Force × Distance. Increasing the perpendicular distance from the pivot increases the moment. This is why longer spanners make it easier to turn tight nuts — greater distance means a bigger turning effect."},
    {q:"A spanner applies a force of 50 N at a distance of 0.25 m from the centre of a nut. What moment is applied?",
     opts:["12.5 Nm","200 Nm","2 Nm","125 Nm"], c:0,
     e:"M = F × d = 50 × 0.25 = 12.5 Nm. The moment tells you the turning effect the spanner exerts on the nut."},
    {q:"For an object to be in equilibrium (balanced), which condition must be met?",
     opts:["The forces must all be in the same direction","The clockwise moments must equal the anticlockwise moments","The object must not be touching anything","There must be no forces acting on it at all"], c:1,
     e:"The principle of moments states that for an object in rotational equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point."}
  ],
  "s10i-14-2": [
    {q:"A force of 200 N acts on an area of 0.5 m². What is the pressure?",
     opts:["100 Pa","400 Pa","0.0025 Pa","200.5 Pa"], c:1,
     e:"P = F ÷ A = 200 ÷ 0.5 = 400 Pa. Pressure increases when the same force acts on a smaller area."},
    {q:"Why does atmospheric pressure decrease with altitude?",
     opts:["The air gets warmer","There is less air above, so the weight of air pressing down is less","Gravity gets stronger at higher altitudes","Wind blows the air away"], c:1,
     e:"Atmospheric pressure is caused by the weight of the column of air above a point. At higher altitudes, there is less air above, so the weight pressing down is less and the pressure is lower."},
    {q:"Calculate the pressure at a depth of 10 m in water. (ρ = 1000 kg/m³, g = 10 N/kg)",
     opts:["100 Pa","1000 Pa","10 000 Pa","100 000 Pa"], c:3,
     e:"P = hρg = 10 × 1000 × 10 = 100 000 Pa (100 kPa). This is the pressure due to the water column alone; total pressure would also include atmospheric pressure above the water."},
    {q:"Why does a sharp knife cut better than a blunt one?",
     opts:["It applies more force","The same force acts on a smaller area, creating higher pressure","It is heavier","It moves faster"], c:1,
     e:"A sharp knife has a very thin cutting edge — a very small area. Since P = F ÷ A, the same force applied to a smaller area produces a much higher pressure, which cuts through material more easily."},
    {q:"Which formula calculates pressure in a liquid column?",
     opts:["P = F ÷ A","P = hρg","P = mgh","P = ρV"], c:1,
     e:"P = hρg gives the pressure at a certain depth in a fluid, where h is the depth, ρ is the fluid density, and g is gravitational field strength. P = F ÷ A is for pressure from a force on a surface. P = mgh is gravitational potential energy, not pressure."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-14-1': `
<h2>Forces &amp; Moments</h2>
<p>A moment is the turning effect of a force. Understanding moments is essential for analysing levers, seesaws and any situation where objects rotate about a pivot.</p>

<h3>Calculating Moments</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Moment (Nm) = Force (N) &times; perpendicular distance from pivot (m)</strong></p>
<p>The moment depends on two things: the size of the force and how far from the pivot it acts. A larger force or a greater distance both produce a bigger turning effect.</p>

<h3>The Principle of Moments</h3>
<p>For a balanced (equilibrium) object:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Sum of clockwise moments = Sum of anticlockwise moments</strong></p>
<p>This allows us to calculate unknown forces or distances in balanced systems such as seesaws and levers.</p>

<h3>Worked Example</h3>
<p>A uniform beam is balanced on a pivot at its centre. A 30 N weight is placed 0.6 m to the left of the pivot. Where should a 20 N weight be placed on the right to balance the beam?</p>
<p>Anticlockwise moment = 30 &times; 0.6 = 18 Nm<br>
For balance: clockwise moment = 18 Nm<br>
20 &times; d = 18<br>
d = 18 &divide; 20 = <strong>0.9 m</strong> to the right of the pivot</p>

<h3>Common Mistake</h3>
<p>Students often use the total length of the beam instead of the <em>perpendicular distance from the pivot</em> to the line of action of the force. Always measure from the pivot to where the force acts, and ensure the distance is perpendicular to the force&rsquo;s direction.</p>
`,

's10i-14-2': `
<h2>Pressure in Fluids</h2>
<p>Pressure is the force acting per unit area. In fluids (liquids and gases), pressure acts in all directions and increases with depth.</p>

<h3>Pressure on a Surface</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>P = F &divide; A</strong></p>
<p>Where P is pressure (Pa), F is force (N), and A is area (m&sup2;). Reducing the area increases the pressure &mdash; this is why sharp objects cut easily and why snowshoes spread weight over a larger area to avoid sinking.</p>

<h3>Atmospheric Pressure</h3>
<p>The atmosphere is a layer of air surrounding the Earth. Atmospheric pressure is caused by the weight of the air above pressing down. At sea level it is approximately 101 kPa. It decreases with altitude because there is less air above.</p>

<h3>Pressure in a Liquid Column</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>P = h &times; &rho; &times; g</strong></p>
<p>Where h is the depth (m), &rho; is the liquid density (kg/m&sup3;), and g is gravitational field strength (N/kg). Pressure in a liquid increases with depth and with the density of the liquid. It does not depend on the shape of the container.</p>

<h3>Worked Example</h3>
<p>A diver is at a depth of 25 m in seawater (&rho; = 1025 kg/m&sup3;, g = 9.8 N/kg). Calculate the pressure due to the water and the total pressure.</p>
<p>Pressure due to water: P = h&rho;g = 25 &times; 1025 &times; 9.8 = <strong>251 125 Pa</strong> (&asymp; 251 kPa)<br>
Total pressure = water pressure + atmospheric pressure<br>
= 251 125 + 101 325 = <strong>352 450 Pa</strong> (&asymp; 352 kPa)</p>

<h3>Common Mistake</h3>
<p>Students often forget to add atmospheric pressure when asked for the <em>total</em> pressure at a certain depth. The formula P = h&rho;g only gives the pressure due to the liquid. If the question asks for total or absolute pressure, you must add atmospheric pressure (approximately 101 kPa) on top.</p>
`

});
