// content/y10/science/islands/t09.js — Year 10 Science Topic 9: Rates of Reaction
// Islands s10i-09-1 .. s10i-09-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-09-1 — Factors Affecting Rate
  {id:"s10fc-09-1-1", islandId:"s10i-09-1", front:"Name four factors that affect the rate of a chemical reaction.",
   back:"1. Temperature — increasing temperature increases the rate\n2. Concentration (or pressure for gases) — higher concentration increases the rate\n3. Surface area — smaller pieces (greater surface area) increase the rate\n4. Catalyst — a catalyst increases the rate without being used up\n\nAll four can be explained using collision theory.", difficulty:1, category:"definition"},
  {id:"s10fc-09-1-2", islandId:"s10i-09-1", front:"How does increasing temperature increase the rate of reaction?",
   back:"At higher temperatures:\n\n1. Particles have more kinetic energy, so they move faster\n2. Particles collide more frequently\n3. A greater proportion of collisions have energy equal to or greater than the activation energy\n\nBoth effects increase the number of successful collisions per second, so the rate increases.", difficulty:2, category:"concept"},
  {id:"s10fc-09-1-3", islandId:"s10i-09-1", front:"How does increasing concentration increase the rate of reaction?",
   back:"At higher concentration, there are more reactant particles in the same volume.\n\nThis means:\n• Particles are closer together\n• Collisions occur more frequently\n• More successful collisions per second\n\nSo the rate of reaction increases.\n\nFor gases, increasing the pressure has the same effect — more particles in a given volume.", difficulty:2, category:"concept"},
  {id:"s10fc-09-1-4", islandId:"s10i-09-1", front:"How does a catalyst increase the rate of reaction?",
   back:"A catalyst increases the rate of a reaction without being chemically changed or used up.\n\nIt works by providing an alternative reaction pathway with a lower activation energy.\n\nThis means a greater proportion of particles have enough energy to react on collision, increasing the frequency of successful collisions.\n\nCatalysts are specific to particular reactions.", difficulty:2, category:"concept"},
  {id:"s10fc-09-1-5", islandId:"s10i-09-1", front:"How does surface area affect the rate of reaction?",
   back:"Breaking a solid into smaller pieces increases its surface area.\n\nMore surface area means:\n• More reactant particles are exposed to the other reactant\n• More collisions can occur per second\n• The rate of reaction increases\n\nExample: powdered calcium carbonate reacts faster with acid than large lumps because the powder has a much greater surface area.", difficulty:1, category:"concept"},

  // s10i-09-2 — Collision Theory & Rate Graphs
  {id:"s10fc-09-2-1", islandId:"s10i-09-2", front:"What is collision theory?",
   back:"Collision theory states that for a reaction to occur:\n\n1. Particles must collide\n2. The collision must have sufficient energy (≥ activation energy)\n3. The particles must collide with the correct orientation\n\nCollisions that meet these conditions are called 'successful collisions'. Anything that increases the frequency or energy of collisions increases the rate.", difficulty:1, category:"definition"},
  {id:"s10fc-09-2-2", islandId:"s10i-09-2", front:"How do you calculate the mean rate of reaction?",
   back:"Mean rate of reaction = amount of product formed ÷ time taken\n\nOr: Mean rate = amount of reactant used ÷ time taken\n\nUnits depend on measurements:\n• If measuring volume of gas: cm³/s\n• If measuring mass: g/s\n• If measuring concentration: mol/dm³/s\n\nThe mean rate gives an average over the entire reaction.", difficulty:2, category:"calculation"},
  {id:"s10fc-09-2-3", islandId:"s10i-09-2", front:"How do you interpret a graph of volume of gas against time?",
   back:"On a volume vs time graph:\n\n• The steeper the line, the faster the rate of reaction\n• The line is steepest at the start (highest concentration of reactants)\n• The line flattens when the reaction is complete (one reactant used up)\n• The final volume reached tells you the total amount of product\n\nComparing curves at different temperatures: a higher temperature gives a steeper line but reaches the same final volume (if amounts of reactant are the same).", difficulty:2, category:"concept"},
  {id:"s10fc-09-2-4", islandId:"s10i-09-2", front:"A reaction produces 60 cm³ of gas in 30 seconds. What is the mean rate?",
   back:"Mean rate = amount of product ÷ time\n= 60 cm³ ÷ 30 s\n= 2 cm³/s\n\nThis is the average rate over the 30 seconds. The actual rate will have been faster at the start (when reactant concentration was highest) and slower towards the end.", difficulty:1, category:"calculation"},
  {id:"s10fc-09-2-5", islandId:"s10i-09-2", front:"How can you find the rate at a particular time from a graph?",
   back:"To find the instantaneous rate at a specific point on a curved graph:\n\n1. Draw a tangent to the curve at that point\n2. Use the tangent line to calculate the gradient\n3. Gradient = change in y ÷ change in x = rate at that time\n\nThe tangent at the start of the graph gives the initial rate (the fastest rate). As the reaction proceeds, the gradient (and thus the rate) decreases.", difficulty:3, category:"calculation"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-09-1": [
    {q:"Why does increasing the concentration of a reactant increase the rate of reaction?",
     opts:["The particles become larger","There are more particles in the same volume, so collisions are more frequent","The activation energy decreases","The temperature increases automatically"], c:1,
     e:"Higher concentration means more reactant particles per unit volume. Particles are closer together, leading to more frequent collisions and therefore more successful collisions per second. The activation energy and temperature remain unchanged."},
    {q:"A catalyst increases the rate of reaction by:",
     opts:["Increasing the temperature of the reaction","Increasing the concentration of reactants","Providing an alternative pathway with lower activation energy","Adding more reactant particles"], c:2,
     e:"A catalyst provides an alternative reaction pathway that has a lower activation energy. This means more particles have sufficient energy to react on collision, increasing the rate. The catalyst itself is not consumed."},
    {q:"Powdered marble reacts faster with acid than marble chips because:",
     opts:["The powder has a higher temperature","The powder has a greater surface area exposed to the acid","The powder is a different chemical compound","The powder has lower activation energy"], c:1,
     e:"Powdered marble has a much greater total surface area than the same mass of marble chips. More surface area means more particles of CaCO₃ are exposed to the acid, leading to more frequent collisions and a faster reaction rate."},
    {q:"Which of the following would NOT increase the rate of reaction between magnesium and hydrochloric acid?",
     opts:["Using more concentrated acid","Increasing the temperature","Using larger pieces of magnesium","Adding a catalyst"], c:2,
     e:"Using larger pieces of magnesium decreases the surface area, which would slow the reaction down, not speed it up. Smaller pieces (more surface area), higher concentration, higher temperature and a catalyst all increase the rate."},
    {q:"At higher temperatures, particles have more kinetic energy. This means:",
     opts:["Fewer collisions occur","Particles move slower","A greater proportion of collisions exceed the activation energy","The activation energy increases"], c:2,
     e:"With more kinetic energy, particles move faster (more frequent collisions) and a greater proportion of those collisions have enough energy to exceed the activation energy. Both effects contribute to a higher rate of reaction."}
  ],
  "s10i-09-2": [
    {q:"What is a 'successful collision'?",
     opts:["Any collision between reactant particles","A collision with energy equal to or greater than the activation energy and correct orientation","A collision that produces heat","A collision involving a catalyst"], c:1,
     e:"A successful collision is one where the particles have at least the activation energy and collide in the correct orientation. Only successful collisions lead to a reaction. Not every collision is successful."},
    {q:"On a graph of gas volume vs time, what does a steeper line at the start indicate?",
     opts:["The reaction is endothermic","The reaction has a higher initial rate","Less product is being formed","The reaction is not occurring"], c:1,
     e:"A steeper gradient means a faster rate. At the start of a reaction, reactant concentrations are highest, so collisions are most frequent and the rate is at its fastest — this gives the steepest part of the curve."},
    {q:"A reaction produces 45 cm³ of gas in 15 seconds. What is the mean rate of reaction?",
     opts:["3 cm³/s","0.33 cm³/s","60 cm³/s","675 cm³/s"], c:0,
     e:"Mean rate = amount of product ÷ time = 45 ÷ 15 = 3 cm³/s. Always divide the quantity of product by the time taken."},
    {q:"Why does the line on a volume vs time graph eventually become flat?",
     opts:["The reaction gets hotter","The catalyst has been used up","One of the reactants has been completely used up","The gas escapes from the container"], c:2,
     e:"The line becomes flat (horizontal) when no more product is being formed. This happens because the limiting reactant has been completely used up, so the reaction has stopped. The volume remains constant."},
    {q:"How do you find the instantaneous rate at a particular time from a curved graph?",
     opts:["Read the value directly from the y-axis","Calculate the mean rate for the whole experiment","Draw a tangent at that point and find its gradient","Measure the total area under the curve"], c:2,
     e:"To find the rate at a specific instant, draw a tangent (a straight line touching the curve at one point) and calculate its gradient (change in y ÷ change in x). This gives the rate at that exact moment."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-09-1': `
<h2>Factors Affecting Rate</h2>
<p>The rate of a chemical reaction is a measure of how quickly reactants are turned into products. Several factors can change this rate, and all of them can be explained by <strong>collision theory</strong>.</p>

<h3>The Four Key Factors</h3>
<ul>
  <li><strong>Temperature</strong> — higher temperature means particles move faster, collide more often, and a greater proportion of collisions have enough energy to react</li>
  <li><strong>Concentration</strong> (or pressure for gases) — more particles in the same volume means more frequent collisions</li>
  <li><strong>Surface area</strong> — breaking a solid into smaller pieces exposes more particles to the other reactant, increasing collision frequency</li>
  <li><strong>Catalyst</strong> — provides an alternative pathway with lower activation energy, so more particles can react per collision</li>
</ul>

<h3>Investigating Rate</h3>
<p>Common methods for measuring rate include:</p>
<ul>
  <li>Collecting gas in a gas syringe and measuring volume over time</li>
  <li>Placing the reaction on a balance and recording mass loss over time</li>
  <li>Timing how long it takes for a solution to become opaque (disappearing cross method)</li>
</ul>

<h3>Worked Example</h3>
<p>Explain why using powdered zinc instead of zinc granules increases the rate of reaction with hydrochloric acid.</p>
<p>Powdered zinc has a much greater total surface area than the same mass of zinc granules. This means more zinc particles are exposed to the acid, so there are more frequent collisions between zinc atoms and hydrogen ions per second. More successful collisions per second means the rate of reaction is faster.</p>

<h3>Common Mistake</h3>
<p>When explaining the effect of temperature, students often only mention that particles move faster and collide more often. For full marks, you must also state that a <em>greater proportion of collisions have energy equal to or greater than the activation energy</em>. This second point is actually the more significant factor.</p>
`,

's10i-09-2': `
<h2>Collision Theory &amp; Rate Graphs</h2>
<p>Collision theory is the model that explains why reaction rates change. It also helps you interpret and draw graphs of rate experiments.</p>

<h3>Collision Theory</h3>
<p>For a reaction to occur, particles must:</p>
<ul>
  <li><strong>Collide</strong> with each other</li>
  <li>Have <strong>sufficient energy</strong> (&ge; activation energy)</li>
  <li>Collide in the <strong>correct orientation</strong></li>
</ul>
<p>Only collisions meeting all three conditions are <em>successful</em> and lead to a reaction. Increasing the frequency or energy of collisions increases the rate.</p>

<h3>Calculating Mean Rate</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>mean rate = amount of product formed &divide; time taken</strong></p>
<p>Units: cm³/s (gas volume), g/s (mass), or mol/dm³/s (concentration)</p>

<h3>Interpreting Rate Graphs</h3>
<ul>
  <li>Steep line &rarr; fast rate</li>
  <li>Shallow line &rarr; slow rate</li>
  <li>Flat line &rarr; reaction has finished</li>
  <li>The gradient at any point gives the instantaneous rate (draw a tangent and calculate the gradient)</li>
</ul>

<h3>Worked Example</h3>
<p>Two experiments use the same mass of marble chips with 50 cm³ of 1 mol/dm³ HCl at 20 °C (experiment A) and at 40 °C (experiment B). Describe how the volume–time graphs would differ.</p>
<p>Both graphs reach the <strong>same final volume</strong> (same amounts of reactant). Experiment B has a <strong>steeper initial gradient</strong> because the higher temperature increases collision frequency and energy. Experiment B reaches the final volume in <strong>less time</strong> (the curve flattens sooner). Experiment A is less steep and takes longer to reach the same final volume.</p>

<h3>Common Mistake</h3>
<p>A common error is thinking that changing temperature or concentration changes the <em>total amount</em> of product. It does not — the total product depends on the amounts of reactant. Changing conditions only affects how <em>quickly</em> you reach that total. On a graph, the curves end at the same height but the faster reaction gets there sooner.</p>
`

});
