// content/y10/science/islands/t12.js — Year 10 Science Topic 12: Particle Model & Density
// Islands s10i-12-1 .. s10i-12-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-12-1 — Density & States of Matter
  {id:"s10fc-12-1-1", islandId:"s10i-12-1", front:"What is the formula for density?",
   back:"Density = mass ÷ volume\n\nρ = m ÷ V\n\nWhere:\n• ρ (rho) = density in kg/m³ (or g/cm³)\n• m = mass in kg (or g)\n• V = volume in m³ (or cm³)\n\nRearranged:\nm = ρ × V\nV = m ÷ ρ", difficulty:1, category:"definition"},
  {id:"s10fc-12-1-2", islandId:"s10i-12-1", front:"Use the particle model to describe the three states of matter.",
   back:"Solid:\n• Particles in a fixed, regular arrangement\n• Vibrate about fixed positions\n• Strong forces between particles\n• Definite shape and volume\n\nLiquid:\n• Particles close together but irregularly arranged\n• Free to move around each other\n• Moderate forces between particles\n• Fixed volume, takes shape of container\n\nGas:\n• Particles far apart, random motion\n• Very weak forces between particles\n• No fixed shape or volume", difficulty:1, category:"concept"},
  {id:"s10fc-12-1-3", islandId:"s10i-12-1", front:"An object has a mass of 450 g and a volume of 50 cm³. Calculate its density.",
   back:"ρ = m ÷ V\nρ = 450 ÷ 50\nρ = 9 g/cm³\n\nThis is a high density — the object would sink in water (water has a density of 1 g/cm³ or 1000 kg/m³).", difficulty:1, category:"calculation"},
  {id:"s10fc-12-1-4", islandId:"s10i-12-1", front:"Describe what happens to particles during changes of state.",
   back:"Melting (solid → liquid):\n• Particles gain energy, vibrate more, break free from fixed positions\n\nBoiling/evaporation (liquid → gas):\n• Particles gain enough energy to overcome all intermolecular forces and escape\n\nCondensing (gas → liquid):\n• Particles lose energy, forces pull them closer together\n\nFreezing (liquid → solid):\n• Particles lose energy and form a fixed, regular arrangement\n\nSublimation (solid → gas directly):\n• Particles go from fixed positions to complete freedom\n\nDuring a change of state, temperature remains constant as energy is used to change bonds, not increase kinetic energy.", difficulty:2, category:"concept"},
  {id:"s10fc-12-1-5", islandId:"s10i-12-1", front:"What is latent heat?",
   back:"Latent heat is the energy needed to change the state of a substance without changing its temperature.\n\nSpecific latent heat of fusion (Lf) = energy to change 1 kg from solid to liquid\nSpecific latent heat of vaporisation (Lv) = energy to change 1 kg from liquid to gas\n\nFormula: E = m × L\n\nWhere:\n• E = energy (J)\n• m = mass (kg)\n• L = specific latent heat (J/kg)\n\nLv is always larger than Lf because more energy is needed to completely separate particles.", difficulty:2, category:"definition"},

  // s10i-12-2 — Specific Heat Capacity
  {id:"s10fc-12-2-1", islandId:"s10i-12-2", front:"What is specific heat capacity?",
   back:"Specific heat capacity (c) is the amount of energy required to raise the temperature of 1 kg of a substance by 1 °C.\n\nFormula: ΔE = m × c × Δθ\n\nWhere:\n• ΔE = change in thermal energy (J)\n• m = mass (kg)\n• c = specific heat capacity (J/kg°C)\n• Δθ = change in temperature (°C)\n\nWater has a high SHC (4200 J/kg°C) — it takes a lot of energy to heat up.", difficulty:1, category:"definition"},
  {id:"s10fc-12-2-2", islandId:"s10i-12-2", front:"Calculate the energy needed to heat 2 kg of water from 20 °C to 70 °C. (c = 4200 J/kg°C)",
   back:"ΔE = m × c × Δθ\nΔE = 2 × 4200 × (70 − 20)\nΔE = 2 × 4200 × 50\nΔE = 420 000 J (420 kJ)\n\nIt takes 420 000 J of energy to heat 2 kg of water by 50 °C.", difficulty:2, category:"calculation"},
  {id:"s10fc-12-2-3", islandId:"s10i-12-2", front:"Describe the specific heat capacity required practical.",
   back:"Method:\n1. Measure the mass of the metal block (in kg)\n2. Insert a heater and thermometer into holes in the block\n3. Record the starting temperature\n4. Turn on the heater and record the joulemeter reading (or use E = Pt)\n5. Heat for a set time, then record the final temperature and total energy supplied\n6. Calculate: c = ΔE ÷ (m × Δθ)\n\nInsulation (e.g. lagging) reduces heat loss to the surroundings for a more accurate result.", difficulty:2, category:"application"},
  {id:"s10fc-12-2-4", islandId:"s10i-12-2", front:"A 0.5 kg block of aluminium is heated with 11 200 J of energy. Its temperature rises by 25 °C. Calculate the specific heat capacity.",
   back:"c = ΔE ÷ (m × Δθ)\nc = 11 200 ÷ (0.5 × 25)\nc = 11 200 ÷ 12.5\nc = 896 J/kg°C\n\nThe accepted value for aluminium is about 900 J/kg°C, so this result is very close. Small differences are due to heat losses in the experiment.", difficulty:2, category:"calculation"},
  {id:"s10fc-12-2-5", islandId:"s10i-12-2", front:"Why does water have a high specific heat capacity and why is this useful?",
   back:"Water has an SHC of 4200 J/kg°C — much higher than most substances. This means water can absorb or release a lot of energy with only a small temperature change.\n\nThis is useful because:\n• Water is an excellent coolant (car engines, power stations)\n• Central heating systems use water to transfer heat efficiently\n• The sea moderates coastal climates — it heats up and cools down slowly\n• The human body (mostly water) maintains a stable temperature", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-12-1": [
    {q:"An object has a mass of 600 g and a volume of 200 cm³. What is its density?",
     opts:["0.33 g/cm³","3 g/cm³","120 000 g/cm³","800 g/cm³"], c:1,
     e:"ρ = m ÷ V = 600 ÷ 200 = 3 g/cm³. Always ensure mass and volume units are compatible before dividing."},
    {q:"In which state of matter are particles arranged in a fixed, regular pattern?",
     opts:["Solid","Liquid","Gas","Plasma"], c:0,
     e:"In a solid, particles are held in fixed positions in a regular lattice by strong intermolecular forces. They can vibrate but cannot change position. In liquids, particles are close but irregularly arranged; in gases, they are far apart."},
    {q:"During melting, the temperature of a pure substance remains constant because:",
     opts:["No energy is being supplied","Energy is used to break intermolecular forces, not increase kinetic energy","The thermometer is faulty","The substance is cooling down"], c:1,
     e:"During a change of state, the energy supplied is used to overcome the forces between particles (breaking bonds/attractions), not to increase kinetic energy. Since temperature is a measure of kinetic energy, it stays constant until the change is complete."},
    {q:"Which formula relates energy, mass and specific latent heat?",
     opts:["E = mcΔθ","E = mL","E = Pt","E = ½mv²"], c:1,
     e:"E = mL is the latent heat equation: E is energy (J), m is mass (kg) and L is the specific latent heat (J/kg). E = mcΔθ is the specific heat capacity equation used when temperature changes, not during a change of state."},
    {q:"The density of water is 1 g/cm³. An object with density 0.8 g/cm³ placed in water will:",
     opts:["Sink to the bottom","Float on the surface","Hover in the middle","Dissolve"], c:1,
     e:"An object floats if its density is less than the density of the liquid. Since 0.8 g/cm³ is less than 1 g/cm³ (water), the object will float on the surface."}
  ],
  "s10i-12-2": [
    {q:"How much energy is needed to heat 5 kg of water by 10 °C? (SHC of water = 4200 J/kg°C)",
     opts:["2100 J","21 000 J","42 000 J","210 000 J"], c:3,
     e:"ΔE = mcΔθ = 5 × 4200 × 10 = 210 000 J. Always multiply mass × SHC × temperature change."},
    {q:"Which of the following materials has the highest specific heat capacity?",
     opts:["Copper (390 J/kg°C)","Aluminium (900 J/kg°C)","Iron (450 J/kg°C)","Water (4200 J/kg°C)"], c:3,
     e:"Water has the highest SHC at 4200 J/kg°C. This means it requires the most energy per kilogram to raise its temperature by 1 °C. This makes water an excellent medium for storing and transferring thermal energy."},
    {q:"In the SHC practical, why is the metal block wrapped in insulation?",
     opts:["To make it heat up faster","To reduce heat loss to the surroundings","To protect the student from burns","To increase the current"], c:1,
     e:"Insulation reduces energy transfer to the surroundings, so more of the electrical energy goes into heating the block. This gives a more accurate value when calculating c = ΔE ÷ (m × Δθ)."},
    {q:"A heater supplies 8000 J to a 2 kg block, raising its temperature by 10 °C. What is the SHC?",
     opts:["400 J/kg°C","800 J/kg°C","4000 J/kg°C","160 J/kg°C"], c:0,
     e:"c = ΔE ÷ (m × Δθ) = 8000 ÷ (2 × 10) = 8000 ÷ 20 = 400 J/kg°C."},
    {q:"Which equation would you use to calculate the energy needed during a change of state?",
     opts:["E = mcΔθ","E = mL","P = IV","E = Pt"], c:1,
     e:"During a change of state, temperature remains constant, so E = mcΔθ does not apply. Instead, use E = mL, where L is the specific latent heat (of fusion or vaporisation)."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-12-1': `
<h2>Density &amp; States of Matter</h2>
<div class="lesson-diagram" data-diagram="particle-states"><p class="diagram-caption">The particle model of solids, liquids and gases</p></div>
<p>The particle model describes how particles are arranged and behave in solids, liquids and gases. It explains density, changes of state and latent heat.</p>

<h3>Density</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>&rho; = m &divide; V</strong></p>
<p>Density is mass per unit volume, where &rho; is density, m is mass and V is volume. Solids are generally the densest (particles tightly packed); gases are the least dense (particles far apart). If an object&rsquo;s density is less than the fluid it is in, it floats.</p>
<p>The SI unit of density is the <strong>kilogram per cubic metre (kg/m³)</strong>, using mass in kilograms (kg) and volume in cubic metres (m³). It can also be quoted in g/cm³. As a key reference value, the density of water is approximately <strong>1000 kg/m³</strong> (equivalent to about 1 g/cm³).</p>

<h3>Worked Example: Density in SI Units</h3>
<p>A block of aluminium has a mass of 5.4 kg and a volume of 0.002 m³. Calculate its density in kg/m³.</p>
<p>&rho; = m &divide; V = 5.4 &divide; 0.002 = <strong>2700 kg/m³</strong><br>
Since 2700 kg/m³ &gt; 1000 kg/m³ (water), the aluminium is denser than water and would sink.</p>

<h3>Required Practical: Measuring Density</h3>
<p>To find the density of a material, measure its mass and its volume, then divide using &rho; = m &divide; V.</p>
<ul>
  <li><strong>Mass:</strong> measure with a balance (in kg or g).</li>
  <li><strong>Volume of a regular solid:</strong> measure its dimensions with a ruler and calculate (e.g. V = length &times; width &times; height for a cuboid).</li>
  <li><strong>Volume of an irregular solid:</strong> use displacement &mdash; lower the object into a eureka (displacement) can filled to the spout and collect the displaced water in a measuring cylinder; the volume of water displaced equals the volume of the object. Alternatively, lower it into a measuring cylinder of water and record the rise in level.</li>
  <li><strong>Volume of a liquid:</strong> pour it into a measuring cylinder to read the volume; find its mass by weighing the cylinder empty and again with the liquid on a balance.</li>
</ul>
<p>Then calculate density = mass &divide; volume for each sample.</p>

<h3>States of Matter</h3>
<ul>
  <li><strong>Solid:</strong> fixed, regular arrangement; particles vibrate in place; definite shape and volume</li>
  <li><strong>Liquid:</strong> close but irregular; particles slide past each other; fixed volume, takes container shape</li>
  <li><strong>Gas:</strong> far apart, random motion; no fixed shape or volume; easily compressed</li>
</ul>

<h3>Changes of State and Latent Heat</h3>
<p>During a change of state, temperature stays constant because the energy supplied is used to overcome intermolecular forces rather than increase kinetic energy. The energy required is called <strong>latent heat</strong>:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>E = m &times; L</strong></p>
<ul>
  <li><strong>E</strong> = energy transferred, in joules (J)</li>
  <li><strong>m</strong> = mass, in kilograms (kg)</li>
  <li><strong>L</strong> = specific latent heat, in joules per kilogram (J/kg)</li>
</ul>
<ul>
  <li>Specific latent heat of fusion (L<sub>f</sub>) &mdash; solid &harr; liquid</li>
  <li>Specific latent heat of vaporisation (L<sub>v</sub>) &mdash; liquid &harr; gas</li>
</ul>

<h3>Worked Example: Latent Heat</h3>
<p>Calculate the energy needed to melt 0.5 kg of ice. The specific latent heat of fusion of water is 334 000 J/kg.</p>
<p>E = m &times; L = 0.5 &times; 334 000 = <strong>167 000 J</strong> (167 kJ)<br>
This energy is absorbed without any change in temperature &mdash; it breaks the forces holding the solid together.</p>

<h3>Worked Example</h3>
<p>A stone has a mass of 250 g and a volume of 100 cm³. Calculate its density and state whether it will float in water (&rho; = 1 g/cm³).</p>
<p>&rho; = 250 &divide; 100 = <strong>2.5 g/cm³</strong><br>
Since 2.5 g/cm³ &gt; 1 g/cm³, the stone is denser than water and will <strong>sink</strong>.</p>

<h3>Common Mistake</h3>
<p>Students often forget that during a change of state the temperature is <em>constant</em>, and mistakenly try to use &Delta;E = mc&Delta;&theta; (which requires a temperature change). During melting or boiling, use E = mL instead.</p>
`,

's10i-12-2': `
<h2>Specific Heat Capacity</h2>
<p>Specific heat capacity (SHC) tells you how much energy a material needs to warm up. Materials with high SHC (like water) take a lot of energy to heat but also release a lot when they cool — making them excellent for storing thermal energy.</p>

<h3>The Equation</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>&Delta;E = m &times; c &times; &Delta;&theta;</strong></p>
<p>Where &Delta;E = change in energy (J), m = mass (kg), c = specific heat capacity (J/kg&deg;C), &Delta;&theta; = change in temperature (&deg;C).</p>

<h3>The Required Practical</h3>
<ul>
  <li>Measure the mass of a metal block</li>
  <li>Insert an electric heater and thermometer into the block</li>
  <li>Record the starting temperature</li>
  <li>Switch on the heater; use a joulemeter (or calculate E = Pt) to measure energy supplied</li>
  <li>Record the final temperature after a set time</li>
  <li>Calculate: c = &Delta;E &divide; (m &times; &Delta;&theta;)</li>
</ul>
<p>Wrap the block in insulation to reduce heat loss for more accurate results.</p>

<h3>Worked Example</h3>
<p>A 50 W heater is used to heat a 1 kg copper block (c = 390 J/kg&deg;C) for 120 seconds. Calculate the expected temperature rise.</p>
<p>Energy supplied: E = Pt = 50 &times; 120 = 6000 J<br>
&Delta;&theta; = &Delta;E &divide; (m &times; c) = 6000 &divide; (1 &times; 390) = <strong>15.4 &deg;C</strong></p>

<h3>Common Mistake</h3>
<p>Students frequently confuse specific heat capacity with latent heat. SHC (&Delta;E = mc&Delta;&theta;) is used when the <em>temperature changes</em>. Latent heat (E = mL) is used during a <em>change of state</em> when the temperature stays constant. Make sure you identify which situation applies before choosing the formula.</p>
`

});

// ── APPENDED ISLANDS: s10i-12-3, s10i-12-4 ───────────────────────────────────

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-12-3 — Internal Energy & Latent Heat
  {id:"s10fc-12-3-1", islandId:"s10i-12-3", front:"What is the internal energy of a substance?",
   back:"Internal energy is the TOTAL energy stored by the particles of a substance.\n\nIt is the sum of:\n• The KINETIC energy of the particles (due to their movement/vibration)\n• The POTENTIAL energy stored in the forces (bonds) between particles\n\nHeating a substance increases its internal energy by raising either the kinetic energy (temperature rises) or the potential energy (state changes).", difficulty:1, category:"definition"},
  {id:"s10fc-12-3-2", islandId:"s10i-12-3", front:"When you heat a substance, what two things can happen to it?",
   back:"Heating increases internal energy, which causes either:\n\n1. A rise in TEMPERATURE — the particles' KINETIC energy increases (they move/vibrate faster)\n\nOR\n\n2. A change of STATE — the particles' POTENTIAL energy increases as bonds/attractions are broken, while the temperature stays constant\n\nDuring a change of state, all the energy goes into potential energy, so the temperature does not change.", difficulty:2, category:"concept"},
  {id:"s10fc-12-3-3", islandId:"s10i-12-3", front:"What is specific latent heat? Give the equation with units.",
   back:"Specific latent heat (L) is the energy needed to change the state of 1 kg of a substance with NO change in temperature.\n\nE = m × L\n\n• E = energy (J)\n• m = mass (kg)\n• L = specific latent heat (J/kg)\n\nFusion (Lf): solid ↔ liquid (melting/freezing)\nVaporisation (Lv): liquid ↔ gas (boiling/condensing)", difficulty:1, category:"definition"},
  {id:"s10fc-12-3-4", islandId:"s10i-12-3", front:"What do the flat sections on a heating curve represent?",
   back:"On a temperature–time (heating) graph, the FLAT (horizontal) sections are where a CHANGE OF STATE is happening.\n\nDuring these sections:\n• Energy is still being supplied\n• Temperature stays constant\n• Energy goes into breaking bonds (increasing potential energy), not increasing kinetic energy\n\nThe first flat section is melting; the second (longer) flat section is boiling. The sloped sections are where the temperature is rising.", difficulty:2, category:"concept"},
  {id:"s10fc-12-3-5", islandId:"s10i-12-3", front:"Calculate the energy needed to boil away 0.2 kg of water. (Lv of water = 2 260 000 J/kg)",
   back:"E = m × L\nE = 0.2 × 2 260 000\nE = 452 000 J (452 kJ)\n\nThis energy is absorbed at constant temperature (100 °C) to turn the liquid water completely into steam. Vaporisation needs much more energy than melting because all the particle bonds must be fully broken.", difficulty:2, category:"calculation"},

  // s10i-12-4 — Particle Motion & Gas Pressure
  {id:"s10fc-12-4-1", islandId:"s10i-12-4", front:"What causes the pressure of a gas?",
   back:"Gas pressure is caused by the gas PARTICLES COLLIDING with the walls of their container.\n\n• Each collision exerts a tiny force on the wall\n• Billions of collisions every second produce a steady overall pressure\n• Pressure = force ÷ area of the wall\n\nThe particles move in random directions at high speed, so they hit all the walls equally.", difficulty:1, category:"concept"},
  {id:"s10fc-12-4-2", islandId:"s10i-12-4", front:"Why does increasing the temperature of a gas at constant volume increase its pressure?",
   back:"Increasing temperature increases the KINETIC energy of the particles, so they move FASTER.\n\nAs a result:\n• The particles hit the walls MORE FREQUENTLY\n• Each collision is HARDER (more force)\n\nSince the volume is fixed, more frequent and harder collisions mean a greater total force on the same wall area, so the PRESSURE INCREASES.", difficulty:2, category:"concept"},
  {id:"s10fc-12-4-3", islandId:"s10i-12-4", front:"State the relationship between pressure and volume for a fixed mass of gas at constant temperature.",
   back:"For a fixed mass of gas at constant temperature:\n\npressure × volume = constant\n\npV = constant\n\nSo p₁V₁ = p₂V₂\n\nIf the volume DECREASES, the pressure INCREASES (and vice versa). This is because the same number of particles in a smaller space hit the walls more often.", difficulty:2, category:"definition"},
  {id:"s10fc-12-4-4", islandId:"s10i-12-4", front:"Why does a bicycle pump get warm when you compress the air inside it?",
   back:"When you push the pump's plunger, you do WORK on the gas (you transfer energy to it by applying a force over a distance).\n\nThis work increases the INTERNAL ENERGY of the gas. With the same number of particles, the extra energy raises their kinetic energy, so the TEMPERATURE rises.\n\nThis is why the pump (and the compressed air) feels warm. Compressing a gas quickly transfers energy to it.", difficulty:2, category:"application"},
  {id:"s10fc-12-4-5", islandId:"s10i-12-4", front:"A gas has a volume of 0.5 m³ at a pressure of 200 kPa. It is compressed to 0.2 m³ at constant temperature. Find the new pressure.",
   back:"Use pV = constant, so p₁V₁ = p₂V₂\n\np₂ = p₁V₁ ÷ V₂\np₂ = (200 000 × 0.5) ÷ 0.2\np₂ = 100 000 ÷ 0.2\np₂ = 500 000 Pa = 500 kPa\n\nThe smaller volume gives a higher pressure, as expected.", difficulty:2, category:"calculation"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-12-3": [
    {q:"The internal energy of a substance is the total of which two stores?",
     opts:["Kinetic and gravitational energy","Kinetic and potential energy of the particles","Chemical and nuclear energy","Heat and light energy"], c:1,
     e:"Internal energy is the sum of the kinetic energy of the particles (due to their motion) and the potential energy stored in the forces between them."},
    {q:"During a change of state, the temperature stays constant because the energy supplied:",
     opts:["Is reflected away","Increases the kinetic energy of the particles","Is used to break the forces between particles (potential energy)","Is converted to light"], c:2,
     e:"During melting or boiling, the supplied energy increases the potential energy of the particles by breaking their bonds/attractions, rather than increasing kinetic energy, so the temperature does not change."},
    {q:"Which equation is used to calculate the energy needed to change the state of a substance?",
     opts:["E = mcΔθ","E = mL","E = ½mv²","P = IV"], c:1,
     e:"E = mL is the specific latent heat equation: E is energy (J), m is mass (kg) and L is the specific latent heat (J/kg). It applies during a change of state at constant temperature."},
    {q:"On a heating curve, what does a flat (horizontal) section represent?",
     opts:["The substance cooling down","A change of state at constant temperature","The substance gaining mass","A faster rise in temperature"], c:1,
     e:"A flat section shows a change of state. Energy is still supplied, but the temperature stays constant because the energy breaks bonds (increases potential energy) rather than raising kinetic energy."},
    {q:"How much energy is needed to melt 2 kg of ice? (Lf of water = 334 000 J/kg)",
     opts:["167 000 J","334 000 J","668 000 J","6 680 J"], c:2,
     e:"E = mL = 2 × 334 000 = 668 000 J. The latent heat of fusion is the energy to change 1 kg from solid to liquid, so 2 kg needs twice that energy."}
  ],
  "s10i-12-4": [
    {q:"What causes the pressure exerted by a gas on its container?",
     opts:["The weight of the gas particles","Particles colliding with the container walls","The gas dissolving into the walls","Heat radiating from the gas"], c:1,
     e:"Gas pressure is caused by the random collisions of gas particles with the walls of the container. Each collision exerts a small force; billions of collisions produce a steady pressure."},
    {q:"At constant volume, what happens to the pressure of a gas if its temperature is increased?",
     opts:["It decreases","It increases","It stays the same","It becomes zero"], c:1,
     e:"Higher temperature means the particles move faster, hitting the walls more often and harder. With the volume fixed, this increases the pressure."},
    {q:"For a fixed mass of gas at constant temperature, which relationship is correct?",
     opts:["p ÷ V = constant","p × V = constant","p + V = constant","p × V² = constant"], c:1,
     e:"At constant temperature for a fixed mass of gas, pressure × volume = constant (pV = constant), so p₁V₁ = p₂V₂. Decreasing the volume increases the pressure."},
    {q:"A gas at 100 kPa occupies 0.6 m³. At constant temperature it is compressed to 0.2 m³. What is the new pressure?",
     opts:["33 kPa","300 kPa","100 kPa","120 kPa"], c:1,
     e:"Using p₁V₁ = p₂V₂: p₂ = (100 × 0.6) ÷ 0.2 = 60 ÷ 0.2 = 300 kPa. The smaller volume gives a higher pressure."},
    {q:"Why does the air in a bike pump get warmer when it is compressed quickly?",
     opts:["The pump adds chemical energy","Work is done on the gas, increasing its internal energy and temperature","The particles lose kinetic energy","The volume increases"], c:1,
     e:"Compressing the gas does work on it, transferring energy. This increases the gas's internal energy, raising the kinetic energy of the particles and so its temperature."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-12-3': `
<h2>Internal Energy &amp; Latent Heat</h2>
<div class="lesson-diagram" data-diagram="changes-of-state"><p class="diagram-caption">Changes of state and the energy involved</p></div>
<p>Every substance stores energy in its particles. Understanding <strong>internal energy</strong> explains why heating sometimes raises the temperature and sometimes changes the state of a material.</p>

<h3>Internal Energy</h3>
<p><strong>Internal energy</strong> is the total energy stored by the particles of a substance. It is made up of two parts:</p>
<ul>
  <li>The <strong>kinetic energy</strong> of the particles (due to their movement and vibration)</li>
  <li>The <strong>potential energy</strong> stored in the forces between the particles</li>
</ul>
<p>Heating a substance always increases its internal energy. That extra energy goes into <em>either</em> raising the temperature <em>or</em> changing the state.</p>

<h3>Temperature Change vs Change of State</h3>
<ul>
  <li><strong>Temperature rises:</strong> the particles&rsquo; <em>kinetic</em> energy increases &mdash; they move or vibrate faster.</li>
  <li><strong>State changes:</strong> the particles&rsquo; <em>potential</em> energy increases as bonds and attractions are broken. The temperature stays <strong>constant</strong> during the change.</li>
</ul>
<p>On a heating curve (temperature against time), the <strong>flat sections</strong> show changes of state, and the <strong>sloped sections</strong> show the temperature rising.</p>

<h3>Specific Latent Heat</h3>
<p><strong>Specific latent heat (L)</strong> is the energy needed to change the state of 1 kg of a substance with no change in temperature.</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>E = m &times; L</strong></p>
<ul>
  <li><strong>E</strong> = energy transferred, in joules (J)</li>
  <li><strong>m</strong> = mass, in kilograms (kg)</li>
  <li><strong>L</strong> = specific latent heat, in joules per kilogram (J/kg)</li>
</ul>
<p>There are two types: latent heat of <strong>fusion</strong> (melting/freezing) and latent heat of <strong>vaporisation</strong> (boiling/condensing). Vaporisation needs more energy because the particle bonds must be broken completely.</p>

<h3>Worked Example</h3>
<p>Calculate the energy needed to melt 0.4 kg of ice at 0 &deg;C. The specific latent heat of fusion of water is 334 000 J/kg.</p>
<p>E = m &times; L = 0.4 &times; 334 000 = <strong>133 600 J</strong> (about 134 kJ)<br>
This energy is absorbed at a constant temperature of 0 &deg;C while the ice turns to water.</p>

<h3>Common Mistake</h3>
<p>Students often try to use &Delta;E = mc&Delta;&theta; during melting or boiling. That equation only applies when the <em>temperature changes</em>. During a change of state the temperature is constant, so you must use E = mL instead.</p>
`,

's10i-12-4': `
<h2>Particle Motion &amp; Gas Pressure</h2>
<div class="lesson-diagram" data-diagram="particle-states"><p class="diagram-caption">Gas particles in random motion colliding with the container walls</p></div>
<p>The particle model explains how gases create pressure and how that pressure changes when you alter the temperature or volume of the gas.</p>

<h3>The Cause of Gas Pressure</h3>
<p>Gas particles move in <strong>random directions</strong> at high speed. They constantly <strong>collide with the walls</strong> of their container. Each collision exerts a tiny force, and billions of collisions every second produce a steady overall <strong>pressure</strong> (pressure = force &divide; area).</p>

<h3>Temperature and Pressure (Constant Volume)</h3>
<p>Raising the temperature increases the kinetic energy of the particles, so they move <strong>faster</strong>. They then hit the walls <strong>more frequently</strong> and <strong>harder</strong>. With the volume fixed, this means a greater total force on the same wall area, so the <strong>pressure increases</strong>.</p>

<h3>Pressure and Volume (Constant Temperature)</h3>
<p>For a fixed mass of gas at constant temperature:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>p &times; V = constant &nbsp;&nbsp;&nbsp; so &nbsp;&nbsp;&nbsp; p&#8321;V&#8321; = p&#8322;V&#8322;</strong></p>
<p>where p is pressure (Pa) and V is volume (m³). If the volume <strong>decreases</strong>, the same number of particles are squeezed into a smaller space, so they hit the walls more often and the <strong>pressure increases</strong>.</p>

<h3>Doing Work on a Gas</h3>
<p>Compressing a gas, for example pushing the plunger of a bicycle pump, means you <strong>do work</strong> on the gas (a force acts over a distance). This transfers energy to the gas, increasing its <strong>internal energy</strong> and raising its <strong>temperature</strong> &mdash; which is why a pump feels warm after use.</p>

<h3>Worked Example</h3>
<p>A sealed syringe contains 80 cm³ of gas at a pressure of 100 kPa. The plunger is pushed in until the volume is 50 cm³, keeping the temperature constant. Calculate the new pressure.</p>
<p>p&#8321;V&#8321; = p&#8322;V&#8322;<br>
p&#8322; = (p&#8321;V&#8321;) &divide; V&#8322; = (100 &times; 80) &divide; 50<br>
p&#8322; = 8000 &divide; 50 = <strong>160 kPa</strong><br>
The smaller volume gives a higher pressure, as expected. (Because the ratio of volumes is used, the cm³ units cancel.)</p>

<h3>Common Mistake</h3>
<p>The relationship pV = constant only holds at <em>constant temperature</em> for a <em>fixed mass</em> of gas. If the gas is heated or cooled, you cannot simply use p&#8321;V&#8321; = p&#8322;V&#8322;. Always check that the temperature is unchanged before applying it.</p>
`

});
