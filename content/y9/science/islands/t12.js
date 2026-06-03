// content/y9/science/islands/t12.js — Year 9 Science Topic 12: Forces & Motion
// Islands s9i-12-1 .. s9i-12-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-12-1 — Speed & Distance–Time Graphs
  {id:"s9fc-12-1-1", islandId:"s9i-12-1", front:"State the formula for speed.",
   back:"speed = distance ÷ time\n\nOr: s = d / t\n\nWhere:\n• s = speed (metres per second, m/s)\n• d = distance (metres, m)\n• t = time (seconds, s)\n\nRearranged: d = s × t and t = d / s.", difficulty:1, category:"definition"},
  {id:"s9fc-12-1-2", islandId:"s9i-12-1", front:"A car travels 150 m in 10 s. Calculate its speed.",
   back:"speed = distance ÷ time\n= 150 ÷ 10\n= 15 m/s\n\nAlways include the unit in your answer.", difficulty:1, category:"calculation"},
  {id:"s9fc-12-1-3", islandId:"s9i-12-1", front:"How do you read a distance–time graph?",
   back:"On a distance–time graph:\n\n• A horizontal line means the object is stationary (not moving)\n• A straight diagonal line means constant speed\n• A steeper line means a faster speed\n• A curved line means the speed is changing (accelerating or decelerating)\n\nThe gradient (slope) of a distance–time graph equals the speed.", difficulty:2, category:"concept"},
  {id:"s9fc-12-1-4", islandId:"s9i-12-1", front:"What is the difference between speed and velocity?",
   back:"Speed is a scalar — it only has magnitude (size).\nVelocity is a vector — it has both magnitude AND direction.\n\nFor example: a car travelling at 30 m/s (speed) vs a car travelling at 30 m/s due north (velocity).\n\nFor GCSE, you mainly use speed, but be aware that velocity includes direction.", difficulty:2, category:"concept"},
  {id:"s9fc-12-1-5", islandId:"s9i-12-1", front:"Calculate the gradient of a distance–time graph that rises from 0 m at 0 s to 120 m at 40 s.",
   back:"Gradient = change in distance ÷ change in time\n= (120 − 0) ÷ (40 − 0)\n= 120 ÷ 40\n= 3 m/s\n\nThe gradient of a distance–time graph gives the speed. This object is travelling at a constant 3 m/s.", difficulty:2, category:"calculation"},

  // s9i-12-2 — Resultant Forces
  {id:"s9fc-12-2-1", islandId:"s9i-12-2", front:"What is a resultant force?",
   back:"The resultant force is the single force that has the same effect as all the individual forces acting on an object combined.\n\nForces in the same direction: add them\nForces in opposite directions: subtract the smaller from the larger\n\nThe resultant has the direction of the larger force.", difficulty:1, category:"definition"},
  {id:"s9fc-12-2-2", islandId:"s9i-12-2", front:"A box has a 10 N force pushing right and a 4 N force pushing left. What is the resultant?",
   back:"Forces are in opposite directions, so subtract:\n10 − 4 = 6 N to the right\n\nThe resultant force is 6 N to the right. The box will accelerate to the right.", difficulty:1, category:"calculation"},
  {id:"s9fc-12-2-3", islandId:"s9i-12-2", front:"What happens when forces are balanced (resultant = 0)?",
   back:"When forces are balanced:\n\n• A stationary object stays stationary\n• A moving object continues at the same speed in the same direction (constant velocity)\n\nBalanced forces do NOT mean the object is not moving — they mean there is no change in its motion.\n\nThis links to Newton's first law.", difficulty:2, category:"concept"},
  {id:"s9fc-12-2-4", islandId:"s9i-12-2", front:"What happens when forces are unbalanced (resultant ≠ 0)?",
   back:"An unbalanced (resultant) force causes an object to:\n\n• Speed up (accelerate) if the resultant is in the direction of motion\n• Slow down (decelerate) if the resultant opposes the motion\n• Change direction\n\nThe size of the acceleration depends on the resultant force and the mass of the object (F = ma).", difficulty:2, category:"concept"},
  {id:"s9fc-12-2-5", islandId:"s9i-12-2", front:"A parachutist has a weight of 800 N and air resistance of 800 N. Describe their motion.",
   back:"Weight (downward) = 800 N\nAir resistance (upward) = 800 N\nResultant force = 0 N\n\nThe forces are balanced, so the parachutist moves at a constant velocity. This is called terminal velocity.\n\nThe parachutist does NOT stop — they continue falling at a steady speed.", difficulty:2, category:"application"},

  // s9i-12-3 — Acceleration & Newton's First Law
  {id:"s9fc-12-3-1", islandId:"s9i-12-3", front:"State Newton's first law of motion.",
   back:"An object at rest stays at rest, and an object in motion continues at the same velocity, unless acted upon by a resultant (unbalanced) force.\n\nIn other words: if the resultant force is zero, the object's motion does not change.\n\nThis is sometimes called the law of inertia.", difficulty:1, category:"definition"},
  {id:"s9fc-12-3-2", islandId:"s9i-12-3", front:"State the formula linking force, mass and acceleration.",
   back:"F = ma\n\nWhere:\n• F = resultant force (newtons, N)\n• m = mass (kilograms, kg)\n• a = acceleration (metres per second squared, m/s²)\n\nRearranged: a = F / m and m = F / a.", difficulty:1, category:"definition"},
  {id:"s9fc-12-3-3", islandId:"s9i-12-3", front:"What is acceleration?",
   back:"Acceleration is the rate of change of velocity.\n\nacceleration = change in velocity ÷ time\na = (v − u) / t\n\nWhere:\n• v = final velocity (m/s)\n• u = initial velocity (m/s)\n• t = time (s)\n\nPositive acceleration = speeding up\nNegative acceleration (deceleration) = slowing down", difficulty:1, category:"definition"},
  {id:"s9fc-12-3-4", islandId:"s9i-12-3", front:"A resultant force of 20 N acts on a 4 kg object. Calculate the acceleration.",
   back:"a = F / m\n= 20 / 4\n= 5 m/s²\n\nThe object accelerates at 5 m/s², gaining 5 m/s of speed every second.", difficulty:2, category:"calculation"},
  {id:"s9fc-12-3-5", islandId:"s9i-12-3", front:"A car of mass 1200 kg accelerates from 0 to 20 m/s in 8 seconds. Calculate the resultant force.",
   back:"Step 1: Find acceleration\na = (v − u) / t = (20 − 0) / 8 = 2.5 m/s²\n\nStep 2: Find force\nF = ma = 1200 × 2.5 = 3000 N\n\nThe resultant force on the car is 3000 N.", difficulty:2, category:"calculation"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-12-1": [
    {q:"A cyclist travels 600 m in 2 minutes. What is their speed?",
     opts:["300 m/s","5 m/s","10 m/s","600 m/s"], c:1,
     e:"Convert time to seconds: 2 minutes = 120 s. Speed = distance ÷ time = 600 ÷ 120 = 5 m/s. Always convert minutes to seconds before calculating."},
    {q:"On a distance–time graph, a horizontal line indicates:",
     opts:["The object is accelerating","The object is moving at constant speed","The object is stationary","The object is decelerating"], c:2,
     e:"A horizontal line on a distance–time graph means the distance is not changing over time — the object is stationary (not moving). A diagonal line would indicate movement; a steeper diagonal means faster speed."},
    {q:"The gradient of a distance–time graph represents:",
     opts:["Acceleration","Force","Speed","Energy"], c:2,
     e:"The gradient (slope) of a distance–time graph equals the speed. A steeper gradient means a greater speed. If the line curves upwards, the gradient is increasing, meaning the object is accelerating."},
    {q:"A car travels at 20 m/s for 30 seconds. How far does it travel?",
     opts:["0.67 m","600 m","1.5 m","50 m"], c:1,
     e:"Distance = speed × time = 20 × 30 = 600 m. This is a simple rearrangement of the speed formula: d = s × t."},
    {q:"Speed is a scalar quantity. This means it has:",
     opts:["Both magnitude and direction","Only direction","Only magnitude (size)","Neither magnitude nor direction"], c:2,
     e:"A scalar has magnitude (size) only. Speed tells you how fast something is going but not in which direction. Velocity is the equivalent vector — it has both magnitude and direction."}
  ],
  "s9i-12-2": [
    {q:"Two forces act on a box: 15 N to the right and 9 N to the left. The resultant force is:",
     opts:["24 N to the right","6 N to the right","6 N to the left","24 N to the left"], c:1,
     e:"Forces in opposite directions: subtract. 15 − 9 = 6 N. The resultant is in the direction of the larger force, i.e. to the right. The box will accelerate to the right."},
    {q:"An aeroplane flies at constant altitude and constant speed. The forces on it are:",
     opts:["Unbalanced — thrust is greater than drag","Balanced — resultant force is zero","Unbalanced — lift is greater than weight","There are no forces acting on it"], c:1,
     e:"Constant speed and constant altitude mean no change in motion. By Newton's first law, the resultant force must be zero — thrust equals drag, and lift equals weight. The forces are balanced."},
    {q:"A resultant force acts on a moving object in the opposite direction to its motion. The object will:",
     opts:["Speed up","Maintain constant speed","Slow down (decelerate)","Change mass"], c:2,
     e:"A resultant force opposing the direction of motion causes the object to decelerate (slow down). If the force continues, the object will eventually stop and may start moving in the opposite direction."},
    {q:"What is terminal velocity?",
     opts:["The fastest possible speed of any object","The speed at which the resultant force is zero and the object falls at constant velocity","The speed of an object when it first starts moving","The initial velocity of a falling object"], c:1,
     e:"Terminal velocity is reached when the drag force (e.g. air resistance) equals the weight of a falling object. The resultant force becomes zero, so by Newton's first law, the object continues at constant velocity rather than accelerating further."},
    {q:"A book sits on a table. The two forces acting on it are:",
     opts:["Gravity pulling down and friction pushing sideways","Its weight pulling down and the normal reaction force pushing up","Thrust forward and drag backward","Lift upward and weight downward"], c:1,
     e:"The book has weight (gravity pulling it downward) and the normal contact force from the table pushing it upward. These are balanced (equal and opposite), so the book remains stationary."}
  ],
  "s9i-12-3": [
    {q:"Newton's first law states that an object will remain at rest or at constant velocity unless:",
     opts:["It has a very large mass","A resultant force acts on it","It is on a frictionless surface","It runs out of energy"], c:1,
     e:"Newton's first law: an object stays at rest or moves at constant velocity unless acted upon by a resultant (unbalanced) force. If all forces are balanced, there is no change in the object's motion."},
    {q:"A force of 50 N acts on a 10 kg trolley. What is the acceleration?",
     opts:["500 m/s²","5 m/s²","0.2 m/s²","60 m/s²"], c:1,
     e:"a = F/m = 50/10 = 5 m/s². The trolley accelerates at 5 metres per second squared — it gains 5 m/s of speed every second the force is applied."},
    {q:"An object accelerates from 0 to 12 m/s in 4 seconds. What is its acceleration?",
     opts:["48 m/s²","3 m/s²","16 m/s²","8 m/s²"], c:1,
     e:"a = (v − u)/t = (12 − 0)/4 = 12/4 = 3 m/s². The velocity increases by 3 m/s every second."},
    {q:"If the mass of an object doubles but the resultant force stays the same, the acceleration will:",
     opts:["Double","Stay the same","Halve","Quadruple"], c:2,
     e:"From F = ma, if F is constant and m doubles: a = F/(2m), so acceleration halves. Greater mass means more inertia — the same force produces less acceleration."},
    {q:"A 1500 kg car has a driving force of 4500 N and a friction force of 1500 N. Calculate the acceleration.",
     opts:["3 m/s²","2 m/s²","4 m/s²","1 m/s²"], c:1,
     e:"Resultant force = 4500 − 1500 = 3000 N. Then a = F/m = 3000/1500 = 2 m/s². Always find the resultant force first when multiple forces act."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-12-1': `
<h2>Speed &amp; Distance&ndash;Time Graphs</h2>
<p>Speed and motion are central to physics. At GCSE, you need to calculate speed, interpret distance&ndash;time graphs, and understand the difference between scalars and vectors.</p>

<h3>The Speed Formula</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>speed = distance &divide; time &nbsp;&nbsp; (s = d / t)</strong></p>
<p>Units: speed in m/s, distance in m, time in s. Always convert minutes to seconds before calculating.</p>

<h3>Distance&ndash;Time Graphs</h3>
<ul>
  <li><strong>Horizontal line</strong> &rarr; stationary (not moving)</li>
  <li><strong>Straight diagonal line</strong> &rarr; constant speed (steeper = faster)</li>
  <li><strong>Curved line</strong> &rarr; changing speed (acceleration or deceleration)</li>
  <li>The <strong>gradient</strong> of the line equals the speed</li>
</ul>

<h3>Worked Example</h3>
<p>A jogger runs 1500 m in 5 minutes. Calculate their average speed.</p>
<p>Convert time: 5 min = 300 s. Speed = 1500 &divide; 300 = <strong>5 m/s</strong></p>

<h3>Common Mistake</h3>
<p>Students often forget to convert units. If time is given in minutes, convert to seconds. If distance is in kilometres, convert to metres (or use km/h for speed). Also, on a distance&ndash;time graph, a line going back down does NOT mean the object is decelerating &mdash; it means the object is returning towards the start.</p>
`,

's9i-12-2': `
<h2>Resultant Forces</h2>
<p>Forces rarely act alone. To predict how an object will move, you need to find the single resultant force that represents the combined effect of all forces.</p>

<h3>Calculating Resultant Force</h3>
<ul>
  <li>Forces in the <strong>same direction</strong>: add them</li>
  <li>Forces in <strong>opposite directions</strong>: subtract the smaller from the larger; the resultant acts in the direction of the larger force</li>
</ul>

<h3>Balanced vs Unbalanced</h3>
<ul>
  <li><strong>Balanced forces</strong> (resultant = 0) &rarr; no change in motion. A stationary object stays still; a moving object continues at constant velocity.</li>
  <li><strong>Unbalanced forces</strong> (resultant &ne; 0) &rarr; the object accelerates (speeds up, slows down or changes direction).</li>
</ul>

<h3>Worked Example</h3>
<p>A car has a driving force of 3000 N and friction of 1200 N. Calculate the resultant and describe the car's motion.</p>
<p>Resultant = 3000 &minus; 1200 = <strong>1800 N forward</strong>. Since the resultant is in the direction of motion (forward), the car accelerates.</p>

<h3>Common Mistake</h3>
<p>Students often think "balanced forces" means "not moving." This is only true if the object was already stationary. An object moving at constant velocity also has balanced forces &mdash; think of a car cruising at a steady 30 m/s on a motorway. The driving force exactly balances friction and air resistance.</p>
`,

's9i-12-3': `
<h2>Acceleration &amp; Newton's First Law</h2>
<p>Newton's laws of motion explain the relationship between forces and the way objects move. At Year 9, you need Newton's first law and the equation F = ma.</p>

<h3>Newton's First Law</h3>
<p>An object at rest remains at rest, and an object moving at constant velocity continues at that velocity, <strong>unless a resultant force acts on it</strong>.</p>

<h3>Acceleration</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>a = (v &minus; u) / t</strong></p>
<p>a = acceleration (m/s&sup2;), v = final velocity (m/s), u = initial velocity (m/s), t = time (s).</p>

<h3>Force, Mass and Acceleration</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>F = ma</strong></p>
<p>F = resultant force (N), m = mass (kg), a = acceleration (m/s&sup2;). A larger force produces a larger acceleration; a larger mass reduces the acceleration for the same force.</p>

<h3>Worked Example</h3>
<p>A 800 kg car accelerates from 5 m/s to 25 m/s in 10 seconds. Calculate the resultant force.</p>
<p>a = (v &minus; u)/t = (25 &minus; 5)/10 = 20/10 = 2 m/s&sup2;<br>
F = ma = 800 &times; 2 = <strong>1600 N</strong></p>

<h3>Common Mistake</h3>
<p>When using F = ma, the force must be the <strong>resultant</strong> force, not just any single force. If friction or air resistance is present, find the resultant first (driving force minus resistive force), then apply F = ma. Also, remember that deceleration is negative acceleration &mdash; if the object is slowing down, the acceleration has a negative value.</p>
`

});
