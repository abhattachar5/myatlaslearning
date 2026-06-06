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
