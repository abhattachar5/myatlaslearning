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

// ════════════════════════════════════════════════════════════════════════════
// APPENDED ISLANDS: s10i-14-3, s10i-14-4, s10i-14-5
// ════════════════════════════════════════════════════════════════════════════

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-14-3 — Work, Energy & Power
  {id:"s10fc-14-3-1", islandId:"s10i-14-3", front:"What is work done, and how is it calculated?",
   back:"Work is done whenever a force moves an object through a distance. Work done equals the energy transferred.\n\nWork done = force × distance\nW = F s\n\nWhere:\n• W = work done in joules (J)\n• F = force in newtons (N)\n• s = distance moved along the line of action of the force in metres (m)\n\n1 joule = 1 newton-metre: one joule of work is done when a force of 1 N moves an object 1 m.", difficulty:1, category:"definition"},
  {id:"s10fc-14-3-2", islandId:"s10i-14-3", front:"A force of 25 N pushes a box 4 m across the floor. Calculate the work done.",
   back:"W = F s\nW = 25 × 4\nW = 100 J\n\n100 joules of energy are transferred. If the box moves at a steady speed, this energy is transferred to the thermal store of the box and floor by friction.", difficulty:1, category:"calculation"},
  {id:"s10fc-14-3-3", islandId:"s10i-14-3", front:"What happens to energy when work is done against friction?",
   back:"When work is done against friction, energy is transferred to the thermal (internal) energy stores of the surfaces in contact.\n\n• The surfaces heat up\n• This energy is usually dissipated to the surroundings\n• It is no longer useful, so we call it 'wasted' energy\n\nThis is why rubbing your hands together or braking a car makes things warm.", difficulty:2, category:"concept"},
  {id:"s10fc-14-3-4", islandId:"s10i-14-3", front:"What is power, and how is it calculated?",
   back:"Power is the rate of doing work, or the rate at which energy is transferred.\n\nP = W ÷ t = E ÷ t\n\nWhere:\n• P = power in watts (W)\n• W = work done in joules (J)\n• E = energy transferred in joules (J)\n• t = time taken in seconds (s)\n\n1 watt = 1 joule per second. A more powerful device transfers the same energy in less time.", difficulty:1, category:"definition"},
  {id:"s10fc-14-3-5", islandId:"s10i-14-3", front:"A motor does 600 J of work in 5 s. Calculate its power.",
   back:"P = W ÷ t\nP = 600 ÷ 5\nP = 120 W\n\nThe motor has a power output of 120 watts — it transfers 120 joules of energy every second.", difficulty:1, category:"calculation"},

  // s10i-14-4 — Elasticity & Hooke's Law
  {id:"s10fc-14-4-1", islandId:"s10i-14-4", front:"What is the difference between elastic and inelastic (plastic) deformation?",
   back:"Both happen when a force changes an object's shape.\n\n• Elastic deformation: the object returns to its original shape and size when the force is removed (e.g. a stretched spring within its limit).\n• Inelastic (plastic) deformation: the object does NOT return to its original shape when the force is removed — it stays permanently deformed (e.g. bending a paperclip too far).", difficulty:1, category:"definition"},
  {id:"s10fc-14-4-2", islandId:"s10i-14-4", front:"State Hooke's law and the equation.",
   back:"Hooke's law: the extension of an elastic object is directly proportional to the force applied, provided the limit of proportionality is not exceeded.\n\nF = k e\n\nWhere:\n• F = force in newtons (N)\n• k = spring constant in newtons per metre (N/m)\n• e = extension in metres (m)\n\nA stiffer spring has a larger spring constant.", difficulty:1, category:"definition"},
  {id:"s10fc-14-4-3", islandId:"s10i-14-4", front:"What is the limit of proportionality?",
   back:"The limit of proportionality is the point beyond which extension is no longer directly proportional to force.\n\n• Below this limit, a force–extension graph is a straight line through the origin (obeys Hooke's law).\n• Beyond this limit, the line curves and the spring may deform inelastically (it won't return to its original length).\n\nIt is sometimes shown on a graph as the point where the line stops being straight.", difficulty:2, category:"concept"},
  {id:"s10fc-14-4-4", islandId:"s10i-14-4", front:"A spring extends by 0.05 m when a force of 4 N is applied. Calculate the spring constant.",
   back:"F = k e, so k = F ÷ e\nk = 4 ÷ 0.05\nk = 80 N/m\n\nThe spring constant is 80 newtons per metre. This means a force of 80 N would be needed to extend the spring by 1 metre (within its limit of proportionality).", difficulty:2, category:"calculation"},
  {id:"s10fc-14-4-5", islandId:"s10i-14-4", front:"How do you calculate the elastic potential energy stored in a spring?",
   back:"Elastic potential energy stored in a stretched (or compressed) spring:\n\nEe = ½ k e²\n\nWhere:\n• Ee = elastic potential energy in joules (J)\n• k = spring constant in newtons per metre (N/m)\n• e = extension in metres (m)\n\nThis assumes the spring is not stretched beyond its limit of proportionality. Note the extension is squared.", difficulty:2, category:"calculation"},

  // s10i-14-5 — Scalars, Vectors & Resultant Forces
  {id:"s10fc-14-5-1", islandId:"s10i-14-5", front:"What is the difference between a scalar and a vector quantity?",
   back:"• A scalar has magnitude (size) only.\nExamples: distance, speed, mass, energy, time, temperature.\n\n• A vector has both magnitude and direction.\nExamples: displacement, velocity, force, acceleration, weight, momentum.\n\nVectors are often drawn as arrows: the length shows the magnitude and the arrow points in the direction.", difficulty:1, category:"definition"},
  {id:"s10fc-14-5-2", islandId:"s10i-14-5", front:"What is a free-body diagram?",
   back:"A free-body diagram shows a single object on its own with all the forces acting on it drawn as arrows.\n\n• Each arrow starts at the object.\n• The length of each arrow represents the size of the force.\n• The direction of each arrow represents the direction of the force.\n\nFree-body diagrams make it easier to identify and combine forces to find the resultant.", difficulty:1, category:"concept"},
  {id:"s10fc-14-5-3", islandId:"s10i-14-5", front:"What is a resultant force?",
   back:"A resultant force is the single force that has the same effect as all the forces acting on an object combined.\n\n• Forces in the same direction: add them.\n• Forces in opposite directions: subtract them (take the difference; the resultant acts in the direction of the larger force).\n\nIf the resultant force is zero, the object is in equilibrium (balanced).", difficulty:1, category:"definition"},
  {id:"s10fc-14-5-4", islandId:"s10i-14-5", front:"A box has a 30 N force pulling it right and a 12 N friction force acting left. Calculate the resultant force.",
   back:"The forces act along the same line in opposite directions, so subtract:\n\nResultant = 30 − 12 = 18 N to the right\n\nThe resultant force is 18 N in the direction of motion (right). Because the resultant is not zero, the box accelerates.", difficulty:1, category:"calculation"},
  {id:"s10fc-14-5-5", islandId:"s10i-14-5", front:"How can two perpendicular forces be combined into a resultant?",
   back:"Two forces acting at right angles can be combined using a scale drawing:\n\n• Draw each force as an arrow to scale, tip-to-tail (or as a rectangle / parallelogram).\n• The diagonal arrow from the start to the finish is the resultant.\n• Measure its length (and scale back) to find the magnitude, and measure the angle to find the direction.\n\nA single force can also be resolved into two perpendicular components in the reverse way.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-14-3": [
    {q:"A force of 50 N moves an object 6 m in the direction of the force. How much work is done?",
     opts:["56 J","300 J","8.3 J","44 J"], c:1,
     e:"W = F s = 50 × 6 = 300 J. Work done equals the energy transferred, measured in joules."},
    {q:"What is 1 joule equal to?",
     opts:["1 newton per metre","1 newton-metre","1 watt per second","1 newton per second"], c:1,
     e:"1 joule = 1 newton-metre. One joule of work is done when a force of 1 N moves an object 1 m along the line of action of the force."},
    {q:"When work is done against friction as a box slides across a floor, where does the energy go?",
     opts:["To the kinetic store of the box only","To the thermal (internal) energy stores of the surfaces","It disappears completely","To the gravitational store of the box"], c:1,
     e:"Work done against friction transfers energy to the thermal energy stores of the surfaces in contact, which warm up. This energy is usually dissipated and 'wasted'."},
    {q:"A crane lifts a load, doing 8000 J of work in 20 s. What is the crane's power?",
     opts:["160 000 W","400 W","0.0025 W","2.5 W"], c:1,
     e:"P = W ÷ t = 8000 ÷ 20 = 400 W. Power is the rate of energy transfer, measured in watts (1 W = 1 J/s)."},
    {q:"Two motors transfer the same amount of energy, but motor A takes less time than motor B. Which has the greater power?",
     opts:["Motor B","Motor A","They have equal power","Cannot be determined"], c:1,
     e:"Power = energy ÷ time. For the same energy, a shorter time gives greater power. Motor A transfers the energy faster, so it is more powerful."}
  ],
  "s10i-14-4": [
    {q:"Which statement describes elastic deformation?",
     opts:["The object stays permanently deformed","The object returns to its original shape when the force is removed","The object breaks apart","The object gets hotter and melts"], c:1,
     e:"In elastic deformation the object returns to its original shape and size once the force is removed. Permanent change is inelastic (plastic) deformation."},
    {q:"A spring has a spring constant of 25 N/m. What force is needed to extend it by 0.2 m?",
     opts:["5 N","125 N","0.008 N","12.5 N"], c:0,
     e:"F = k e = 25 × 0.2 = 5 N. The extension must be in metres and the spring constant in N/m."},
    {q:"What does the limit of proportionality represent on a force–extension graph?",
     opts:["The point where the spring snaps","The point beyond which extension is no longer directly proportional to force","The maximum extension ever possible","The starting point of the graph"], c:1,
     e:"Up to the limit of proportionality the graph is a straight line through the origin (Hooke's law holds). Beyond it, the line curves and extension is no longer proportional to force."},
    {q:"In the force–extension required practical, what shape is the graph before the limit of proportionality?",
     opts:["A curve bending upwards","A horizontal straight line","A straight line through the origin","A straight line with a negative gradient"], c:2,
     e:"While Hooke's law holds, force is directly proportional to extension, so the graph is a straight line passing through the origin. The gradient equals the spring constant k."},
    {q:"A spring with a spring constant of 200 N/m is extended by 0.1 m. How much elastic potential energy is stored?",
     opts:["20 J","2 J","1 J","10 J"], c:2,
     e:"Ee = ½ k e² = 0.5 × 200 × (0.1)² = 0.5 × 200 × 0.01 = 1 J. Remember to square the extension before multiplying."}
  ],
  "s10i-14-5": [
    {q:"Which of the following is a vector quantity?",
     opts:["Mass","Speed","Velocity","Energy"], c:2,
     e:"Velocity is a vector because it has both magnitude and direction. Mass, speed and energy are scalars (magnitude only)."},
    {q:"Which set contains only scalar quantities?",
     opts:["Distance, speed, mass, energy","Displacement, velocity, force","Force, acceleration, weight","Velocity, momentum, displacement"], c:0,
     e:"Distance, speed, mass and energy all have magnitude only, so they are scalars. The other options contain vectors such as velocity, force and acceleration."},
    {q:"A car experiences a 500 N driving force forwards and 200 N of resistive forces backwards. What is the resultant force?",
     opts:["700 N forwards","300 N backwards","300 N forwards","250 N forwards"], c:2,
     e:"Forces along the same line in opposite directions are subtracted: 500 − 200 = 300 N. The resultant acts in the direction of the larger force, i.e. forwards."},
    {q:"On a free-body diagram, what does the length of each force arrow represent?",
     opts:["The time the force acts","The magnitude (size) of the force","The mass of the object","The speed of the object"], c:1,
     e:"In a free-body diagram, the length of each arrow represents the magnitude of the force, and the direction of the arrow shows the direction the force acts."},
    {q:"Two forces of 3 N and 4 N act on an object at right angles to each other. What is the magnitude of the resultant force?",
     opts:["7 N","1 N","5 N","12 N"], c:2,
     e:"For perpendicular forces the resultant is the diagonal of a rectangle. By a scale drawing (or Pythagoras): √(3² + 4²) = √25 = 5 N."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-14-3': `
<h2>Work, Energy &amp; Power</h2>
<div class="lesson-diagram" data-diagram="energy-stores"><p class="diagram-caption">Doing work transfers energy from one store to another &mdash; for example from a chemical store to a kinetic or thermal store.</p></div>
<p>Whenever a force makes an object move, <strong>work is done</strong>. Work done is exactly equal to the energy transferred, and both are measured in joules (J).</p>

<h3>Calculating Work Done</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Work done (J) = force (N) &times; distance (m)&nbsp;&nbsp;&rarr;&nbsp;&nbsp;W = F s</strong></p>
<p>The distance must be measured along the line of action of the force. One joule is the work done when a force of one newton moves an object one metre, so <strong>1 J = 1 N&middot;m (one newton-metre)</strong>.</p>

<h3>Work Done Against Friction</h3>
<p>When you push an object at a steady speed, you are doing work against friction. This energy is transferred to the <strong>thermal energy stores</strong> of the object and the surface, so they warm up. The energy is dissipated to the surroundings and becomes wasted energy.</p>

<h3>Power</h3>
<p>Power is the <strong>rate</strong> of doing work, or the rate at which energy is transferred:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>P = W &divide; t = E &divide; t</strong></p>
<p>Power is measured in watts (W), where 1 W = 1 joule per second. A more powerful machine transfers the same energy in a shorter time.</p>

<h3>Worked Example</h3>
<p>A student lifts a 150 N box onto a shelf 2 m high, taking 4 s.</p>
<p>Work done: W = F s = 150 &times; 2 = <strong>300 J</strong><br>
Power: P = W &divide; t = 300 &divide; 4 = <strong>75 W</strong></p>
<p>The student transfers 300 J of energy to the gravitational store of the box, at a rate of 75 joules every second.</p>

<h3>Common Mistake</h3>
<p>Students sometimes confuse work (energy, in joules) with power (rate, in watts). Power always involves <em>time</em>. Also, only the distance moved <em>in the direction of the force</em> counts &mdash; if a force is applied but the object does not move, no work is done.</p>
`,

's10i-14-4': `
<h2>Elasticity &amp; Hooke&rsquo;s Law</h2>
<p>When a force is applied to an object it can stretch, compress or bend. How the object responds depends on whether the deformation is elastic or inelastic.</p>

<h3>Elastic and Inelastic Deformation</h3>
<p><strong>Elastic deformation:</strong> the object returns to its original shape and size when the force is removed (e.g. a spring stretched within its limit).<br>
<strong>Inelastic (plastic) deformation:</strong> the object is permanently changed and does not return to its original shape (e.g. over-bending a metal wire).</p>

<h3>Hooke&rsquo;s Law</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>F = k e</strong></p>
<p>Force F is in newtons (N), the spring constant k is in newtons per metre (N/m), and the extension e is in metres (m). Hooke&rsquo;s law states that extension is <strong>directly proportional</strong> to the force applied, as long as the <strong>limit of proportionality</strong> is not exceeded. Beyond this limit, extension is no longer proportional to force.</p>

<h3>Required Practical: Force &amp; Extension</h3>
<p>Hang a spring from a clamp stand and measure its natural length. Add masses one at a time, calculating the weight (force) of each, and measure the new length to find the extension each time. Plot a graph of <strong>force (y-axis) against extension (x-axis)</strong>. The result is a straight line through the origin until the limit of proportionality, after which the line curves. The gradient of the straight section equals the spring constant k.</p>

<h3>Elastic Potential Energy</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Ee = &frac12; k e&sup2;</strong></p>
<p>This is the energy stored in a spring stretched within its limit of proportionality (Ee in joules).</p>

<h3>Worked Example</h3>
<p>A spring has a spring constant of 50 N/m and is stretched by 0.2 m (within its limit of proportionality).</p>
<p>Force needed: F = k e = 50 &times; 0.2 = <strong>10 N</strong><br>
Energy stored: Ee = &frac12; k e&sup2; = 0.5 &times; 50 &times; (0.2)&sup2; = 0.5 &times; 50 &times; 0.04 = <strong>1 J</strong></p>

<h3>Common Mistake</h3>
<p>In Ee = &frac12; k e&sup2;, only the extension is squared &mdash; not the whole expression. Work out e&sup2; first, then multiply by &frac12; and k. Also remember to convert any extension given in centimetres into metres before substituting.</p>
`,

's10i-14-5': `
<h2>Scalars, Vectors &amp; Resultant Forces</h2>
<div class="lesson-diagram" data-diagram="force-arrows"><p class="diagram-caption">Forces are drawn as arrows: the length shows the size of the force and the arrowhead shows its direction.</p></div>
<p>Physical quantities fall into two groups. A <strong>scalar</strong> has magnitude only; a <strong>vector</strong> has both magnitude and direction.</p>

<h3>Scalars and Vectors</h3>
<p><strong>Scalars:</strong> distance, speed, mass, energy, time, temperature.<br>
<strong>Vectors:</strong> displacement, velocity, force, acceleration, weight, momentum.<br>
Vectors are represented by arrows &mdash; the length is drawn to scale to show the magnitude, and the direction of the arrow shows the direction of the quantity.</p>

<h3>Free-Body Diagrams</h3>
<p>A free-body diagram shows a single object with all the forces acting on it drawn as arrows from the object. They make it easy to see which forces to combine.</p>

<h3>Resultant Forces</h3>
<p>The <strong>resultant force</strong> is the single force that has the same effect as all the forces combined. For forces acting along a straight line: add forces in the same direction, and subtract forces in opposite directions. If the resultant is zero, the object is in equilibrium.</p>
<p>Two forces at right angles can be combined using a <strong>scale drawing</strong>: draw each force to scale tip-to-tail, then the diagonal arrow from start to finish is the resultant. Measuring its length and angle gives the magnitude and direction. The reverse process &mdash; splitting one force into two perpendicular components &mdash; is called resolving.</p>

<h3>Worked Example</h3>
<p>A sledge is pulled with a 40 N force forwards while friction provides 15 N backwards along the same line.</p>
<p>Resultant = 40 &minus; 15 = <strong>25 N forwards</strong></p>
<p>For perpendicular forces: a boat is pushed by a 6 N current and a 8 N engine force at right angles. By scale drawing (or Pythagoras): resultant = &radic;(6&sup2; + 8&sup2;) = &radic;100 = <strong>10 N</strong>, acting along the diagonal.</p>

<h3>Common Mistake</h3>
<p>A common error is adding the magnitudes of forces that act at an angle &mdash; e.g. saying 6 N and 8 N at right angles give 14 N. Perpendicular forces must be combined using a scale drawing (the diagonal of a rectangle), giving 10 N, not 14 N.</p>
`

});
