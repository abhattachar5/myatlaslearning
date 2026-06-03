// science-y11-t09.js — Year 11 Science Topic 9: Newton's Laws & Momentum
// Islands: s11i-09-1 .. s11i-09-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-09-1 — Newton's Three Laws
  {id:"s11fc-09-1-1",islandId:"s11i-09-1",front:"State Newton's first law of motion.",
   back:"An object at rest stays at rest, and an object in motion stays in motion at a constant velocity, unless acted on by a resultant (unbalanced) force.\n\nThis is the law of inertia — objects resist changes to their state of motion.",difficulty:1,category:"definition"},
  {id:"s11fc-09-1-2",islandId:"s11i-09-1",front:"State Newton's second law and give the equation.",
   back:"The resultant force on an object is equal to its mass times its acceleration.\n\nF = ma\n\nF = resultant force (N)\nm = mass (kg)\na = acceleration (m/s²)\n\nA larger force gives a larger acceleration; a larger mass gives a smaller acceleration.",difficulty:2,category:"calculation"},
  {id:"s11fc-09-1-3",islandId:"s11i-09-1",front:"State Newton's third law of motion.",
   back:"When two objects interact, they exert equal and opposite forces on each other.\n\nFor example, when you push against a wall, the wall pushes back on you with an equal force in the opposite direction.\n\nThe two forces act on different objects and are always the same type (e.g. both gravitational or both contact).",difficulty:2,category:"definition"},
  {id:"s11fc-09-1-4",islandId:"s11i-09-1",front:"A resultant force of 600 N acts on a 200 kg go-kart. Calculate the acceleration.",
   back:"F = ma\n600 = 200 × a\na = 600 ÷ 200 = 3 m/s²\n\nThe go-kart accelerates at 3 metres per second squared in the direction of the resultant force.",difficulty:2,category:"calculation"},
  {id:"s11fc-09-1-5",islandId:"s11i-09-1",front:"What is inertia?",
   back:"Inertia is the tendency of an object to resist a change in its state of motion.\n\nThe more massive an object, the greater its inertia — it is harder to start moving, stop moving or change direction.\n\nInertia is directly related to mass.",difficulty:1,category:"definition"},

  // s11i-09-2 — Momentum & Conservation
  {id:"s11fc-09-2-1",islandId:"s11i-09-2",front:"What is momentum? State the equation.",
   back:"Momentum is a measure of how difficult it is to stop a moving object.\n\np = mv\n\np = momentum (kg m/s)\nm = mass (kg)\nv = velocity (m/s)\n\nMomentum is a vector quantity — it has both magnitude and direction.",difficulty:1,category:"definition"},
  {id:"s11fc-09-2-2",islandId:"s11i-09-2",front:"State the law of conservation of momentum.",
   back:"In a closed system (no external forces), the total momentum before an event equals the total momentum after the event.\n\nThis applies to collisions and explosions:\ntotal momentum before = total momentum after.",difficulty:2,category:"concept"},
  {id:"s11fc-09-2-3",islandId:"s11i-09-2",front:"A 1500 kg car travelling at 20 m/s collides with a stationary 500 kg car. They stick together. Calculate their velocity after the collision.",
   back:"Conservation of momentum:\nm₁v₁ + m₂v₂ = (m₁ + m₂) × v₃\n(1500 × 20) + (500 × 0) = (1500 + 500) × v₃\n30 000 = 2000 × v₃\nv₃ = 30 000 ÷ 2000 = 15 m/s",difficulty:3,category:"calculation"},
  {id:"s11fc-09-2-4",islandId:"s11i-09-2",front:"Calculate the momentum of a 70 kg runner moving at 8 m/s.",
   back:"p = mv = 70 × 8 = 560 kg m/s\n\nThe momentum is 560 kg m/s in the direction the runner is moving.",difficulty:1,category:"calculation"},
  {id:"s11fc-09-2-5",islandId:"s11i-09-2",front:"In an explosion, two objects fly apart. How does conservation of momentum apply?",
   back:"Before the explosion, total momentum is zero (objects are stationary).\n\nAfter the explosion, the objects move in opposite directions with equal and opposite momenta:\nm₁v₁ + m₂v₂ = 0\n\nSo m₁v₁ = −m₂v₂. The lighter object moves faster.",difficulty:3,category:"application"},

  // s11i-09-3 — Stopping Distances & Safety
  {id:"s11fc-09-3-1",islandId:"s11i-09-3",front:"What is stopping distance?",
   back:"Stopping distance = thinking distance + braking distance.\n\nThinking distance: the distance travelled while the driver reacts (before braking starts).\nBraking distance: the distance travelled after the brakes are applied until the vehicle stops.",difficulty:1,category:"definition"},
  {id:"s11fc-09-3-2",islandId:"s11i-09-3",front:"Give three factors that increase thinking distance.",
   back:"1. Higher speed — the car covers more distance in the reaction time.\n2. Tiredness or distraction — slower reaction time.\n3. Alcohol or drugs — impaired reaction time.\n\nThinking distance is affected by anything that increases reaction time or speed.",difficulty:2,category:"application"},
  {id:"s11fc-09-3-3",islandId:"s11i-09-3",front:"Give three factors that increase braking distance.",
   back:"1. Higher speed — more kinetic energy to dissipate.\n2. Wet or icy roads — reduced friction between tyres and road.\n3. Worn tyres or brakes — less effective braking.\n\nBraking distance depends on the vehicle's speed and the road/tyre conditions.",difficulty:2,category:"application"},
  {id:"s11fc-09-3-4",islandId:"s11i-09-3",front:"Explain how crumple zones reduce injury in a crash.",
   back:"Crumple zones are designed to deform (crush) on impact, increasing the time over which the vehicle decelerates.\n\nFrom F = ma (or F = Δp/Δt): increasing the time of deceleration reduces the force on the occupants, reducing injury.",difficulty:2,category:"concept"},
  {id:"s11fc-09-3-5",islandId:"s11i-09-3",front:"How do seatbelts reduce the risk of injury?",
   back:"Seatbelts stretch slightly on impact, increasing the time taken for the passenger to decelerate.\n\nThis reduces the force (F = Δp/Δt — longer Δt means smaller F). They also prevent the passenger from being thrown forward into the dashboard or windscreen.",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-09-1":[
    {q:"A force of 240 N is applied to a 60 kg trolley. What is the acceleration?",opts:["0.25 m/s²","4 m/s²","14 400 m/s²","180 m/s²"],c:1,e:"F = ma → a = F/m = 240/60 = 4 m/s². Always divide force by mass to find acceleration."},
    {q:"A cyclist travels at constant velocity. What can you say about the forces?",opts:["The driving force is greater than friction","The forces are balanced (resultant force is zero)","There are no forces acting","Friction is greater than the driving force"],c:1,e:"Newton's first law: constant velocity means no change in motion, which requires a zero resultant force. The driving force exactly balances friction and air resistance."},
    {q:"Newton's third law states that action and reaction forces:",opts:["Act on the same object","Are equal in size and act in the same direction","Are equal in size and opposite in direction, acting on different objects","Always cancel each other out"],c:2,e:"Third-law pairs are equal, opposite and act on different objects. They do NOT cancel out because they act on different bodies."},
    {q:"Which object has the greatest inertia?",opts:["A 50 g tennis ball","A 500 g football","A 5 kg bowling ball","A 0.5 kg basketball"],c:2,e:"Inertia depends on mass. The 5 kg bowling ball has the greatest mass and therefore the greatest inertia — it is the hardest to start or stop moving."},
    {q:"A 1200 kg car accelerates at 2.5 m/s². What resultant force is needed?",opts:["480 N","3000 N","4800 N","300 N"],c:1,e:"F = ma = 1200 × 2.5 = 3000 N. The resultant force must be 3000 N in the direction of acceleration."}
  ],
  "s11i-09-2":[
    {q:"Calculate the momentum of a 0.5 kg ball moving at 12 m/s.",opts:["0.042 kg m/s","6 kg m/s","12.5 kg m/s","24 kg m/s"],c:1,e:"p = mv = 0.5 × 12 = 6 kg m/s. Momentum is mass multiplied by velocity."},
    {q:"A 2 kg toy car moving at 3 m/s hits a stationary 1 kg toy car. They stick together. What is their velocity?",opts:["1 m/s","2 m/s","3 m/s","6 m/s"],c:1,e:"Conservation of momentum: (2×3) + (1×0) = (2+1) × v → 6 = 3v → v = 2 m/s."},
    {q:"Before an explosion, a stationary firework has zero momentum. After it explodes, the total momentum is:",opts:["Greater than zero","Less than zero","Zero","Impossible to calculate"],c:2,e:"Conservation of momentum: total momentum before (zero) = total momentum after. The pieces fly in different directions with momenta that cancel out."},
    {q:"Which quantity is NOT needed to calculate momentum?",opts:["Mass","Velocity","Acceleration","Direction"],c:2,e:"Momentum = mass × velocity. Acceleration is not part of the momentum equation. Direction matters because momentum is a vector."},
    {q:"A lorry and a car travel at the same speed. Which has more momentum?",opts:["The car","The lorry","They have the same momentum","It depends on the road surface"],c:1,e:"p = mv. At the same speed (v), the lorry has a much greater mass (m), so it has greater momentum."}
  ],
  "s11i-09-3":[
    {q:"Stopping distance equals:",opts:["Thinking distance × braking distance","Thinking distance + braking distance","Speed × time","Braking distance only"],c:1,e:"Stopping distance is the sum of thinking distance (reacting) and braking distance (decelerating). Both contribute to the total distance needed to stop."},
    {q:"Which factor affects thinking distance but NOT braking distance?",opts:["Wet roads","Worn brakes","Driver tiredness","Tyre condition"],c:2,e:"Driver tiredness increases reaction time, which increases thinking distance. Wet roads, worn brakes and tyre condition affect braking distance (how quickly the car can slow down)."},
    {q:"How do crumple zones reduce the force on passengers?",opts:["By making the car lighter","By increasing the time of deceleration","By removing the seatbelts","By making the car travel faster"],c:1,e:"Crumple zones deform on impact, extending the time over which the car decelerates. Since F = change in momentum / time, a longer time means a smaller force on the occupants."},
    {q:"At higher speeds, braking distance increases because:",opts:["The driver's reaction time is longer","The car has more kinetic energy to dissipate","The brakes become weaker","The road becomes more slippery"],c:1,e:"Kinetic energy is proportional to v². At higher speeds, the car has much more kinetic energy, requiring more work (force × distance) to stop — so braking distance increases significantly."},
    {q:"A car's total stopping distance at 30 mph is about 23 m. At 60 mph it is about 73 m. This shows that stopping distance:",opts:["Doubles when speed doubles","More than doubles when speed doubles","Stays the same at all speeds","Halves when speed doubles"],c:1,e:"73 m is more than double 23 m. This is because braking distance increases with the square of speed (kinetic energy ∝ v²), so doubling speed more than doubles the total stopping distance."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-09-1': `
<h2>Newton's Three Laws</h2>
<p>Sir Isaac Newton's three laws of motion describe how forces affect the movement of objects. They are fundamental to GCSE Physics.</p>

<h3>First law — Inertia</h3>
<p>An object remains at rest or moves at constant velocity <strong>unless acted on by a resultant force</strong>. This resistance to change is called <strong>inertia</strong>, and it depends on mass.</p>

<h3>Second law — F = ma</h3>
<p>The resultant force on an object equals its mass multiplied by its acceleration:</p>
<p><strong>F = ma</strong></p>
<ul>
<li>F = resultant force (N)</li>
<li>m = mass (kg)</li>
<li>a = acceleration (m/s²)</li>
</ul>
<p>Rearranging: a = F/m or m = F/a.</p>

<h3>Third law — Action and reaction</h3>
<p>When object A exerts a force on object B, object B exerts an <strong>equal and opposite</strong> force on object A. The two forces are the same type and act on <strong>different objects</strong>.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A resultant force of 900 N acts on a 450 kg motorbike. Calculate the acceleration.</p>
<p><strong>A:</strong> a = F / m = 900 / 450 = <strong>2 m/s²</strong>.</p>

<h3>Common mistake</h3>
<p>Students often think Newton's third-law pairs cancel out. They do <strong>not</strong>, because they act on <em>different</em> objects. If you push a box, the box pushes back on you — but these forces are on different bodies, so they cannot cancel.</p>`,

's11i-09-2': `
<h2>Momentum &amp; Conservation</h2>
<p><strong>Momentum</strong> is a measure of how hard it is to stop a moving object. It depends on both mass and velocity.</p>

<h3>The equation</h3>
<p><strong>p = mv</strong></p>
<ul>
<li>p = momentum (kg m/s)</li>
<li>m = mass (kg)</li>
<li>v = velocity (m/s)</li>
</ul>
<p>Momentum is a <strong>vector</strong> — direction matters.</p>

<h3>Conservation of momentum</h3>
<p>In a <strong>closed system</strong> (no external forces), total momentum before an event = total momentum after.</p>
<p>This applies to <strong>collisions</strong> (objects crash into each other) and <strong>explosions</strong> (objects push apart from rest).</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A 3 kg ball moving at 4 m/s collides with a stationary 1 kg ball. They stick together. Find their velocity after the collision.</p>
<p><strong>A:</strong><br>
Total momentum before = (3 × 4) + (1 × 0) = 12 kg m/s<br>
Total momentum after = (3 + 1) × v = 4v<br>
12 = 4v<br>
v = <strong>3 m/s</strong></p>

<h3>Explosions</h3>
<p>Before an explosion, total momentum = 0 (everything is stationary).<br>
After: m₁v₁ + m₂v₂ = 0, so the objects fly apart with equal and opposite momenta.</p>

<h3>Common mistake</h3>
<p>Students forget that momentum is a <strong>vector</strong>. If two objects move in opposite directions, one velocity must be taken as negative when applying conservation of momentum.</p>`,

's11i-09-3': `
<h2>Stopping Distances &amp; Safety</h2>
<p>When a driver sees a hazard, the vehicle does not stop instantly. The total <strong>stopping distance</strong> has two parts.</p>

<h3>Stopping distance = thinking distance + braking distance</h3>
<ul>
<li><strong>Thinking distance</strong> — the distance covered during the driver's reaction time (before brakes are applied).</li>
<li><strong>Braking distance</strong> — the distance covered while the brakes slow the car to a stop.</li>
</ul>

<h3>Factors affecting each</h3>
<p><strong>Thinking distance</strong> increases with: higher speed, tiredness, distraction, alcohol/drugs (all increase reaction time or the distance covered per second).</p>
<p><strong>Braking distance</strong> increases with: higher speed (kinetic energy ∝ v²), wet/icy roads, worn tyres or brakes (all reduce friction or increase the energy that must be dissipated).</p>

<h3>Safety features</h3>
<p><strong>Crumple zones, seatbelts and airbags</strong> all work by <strong>increasing the time</strong> over which the occupant decelerates. Since force = change in momentum ÷ time, increasing the time <strong>reduces the force</strong> and therefore the risk of injury.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why braking distance quadruples when speed doubles.</p>
<p><strong>A:</strong> Kinetic energy = ½mv². Doubling the speed quadruples the kinetic energy. The brakes must do work equal to the kinetic energy to stop the car, and since the braking force is roughly constant, four times the energy requires four times the distance.</p>

<h3>Common mistake</h3>
<p>Students often think stopping distance doubles when speed doubles. Thinking distance doubles (it is proportional to speed), but braking distance <strong>quadruples</strong> (proportional to speed²), so total stopping distance more than doubles.</p>`

});
