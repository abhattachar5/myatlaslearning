// content/y9/science/islands/t11.js — Year 9 Science Topic 11: Energy Stores & Transfers
// Islands s9i-11-1 .. s9i-11-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-11-1 — Energy Stores
  {id:"s9fc-11-1-1", islandId:"s9i-11-1", front:"Name the eight energy stores.",
   back:"1. Kinetic — energy of a moving object\n2. Gravitational potential — energy due to height in a gravitational field\n3. Elastic potential — energy stored in a stretched or compressed object\n4. Chemical — energy stored in chemical bonds (fuels, food, batteries)\n5. Thermal — energy related to the temperature of an object\n6. Magnetic — energy in magnetic fields\n7. Electrostatic — energy due to charges\n8. Nuclear — energy stored in the nucleus of an atom", difficulty:1, category:"definition"},
  {id:"s9fc-11-1-2", islandId:"s9i-11-1", front:"What are the four energy transfer pathways?",
   back:"Energy can be transferred between stores by:\n\n1. Mechanically — by a force acting on an object (e.g. pushing, pulling)\n2. Electrically — by charges moving through a circuit\n3. By heating — energy flows from hot to cold objects\n4. By radiation — energy transferred by waves (light, sound, infrared)", difficulty:1, category:"concept"},
  {id:"s9fc-11-1-3", islandId:"s9i-11-1", front:"Describe the energy transfers when a ball is thrown upwards.",
   back:"1. Chemical store (in muscles) → kinetic store (ball moves upwards) — transferred mechanically\n2. As the ball rises: kinetic store decreases → gravitational potential store increases\n3. At the highest point: kinetic = 0, gravitational PE is at maximum\n4. As the ball falls: gravitational PE decreases → kinetic store increases\n5. Some energy is transferred to thermal stores of ball and air (by heating due to air resistance)", difficulty:2, category:"application"},
  {id:"s9fc-11-1-4", islandId:"s9i-11-1", front:"What does the principle of conservation of energy state?",
   back:"Energy can be transferred between stores and dissipated, but it cannot be created or destroyed.\n\nThe total energy in a closed system always remains the same.\n\nEnergy that is 'lost' (e.g. to thermal stores due to friction) has not disappeared — it has been transferred to the surroundings and is no longer useful.", difficulty:1, category:"concept"},
  {id:"s9fc-11-1-5", islandId:"s9i-11-1", front:"What is meant by 'dissipated' energy?",
   back:"Dissipated energy is energy that has spread out to the surroundings (usually as heat) and is no longer useful.\n\nFor example, friction converts kinetic energy to thermal energy in the surroundings. The energy still exists but is too spread out to do useful work.\n\nReducing dissipation (e.g. using lubricants, insulation) increases efficiency.", difficulty:2, category:"concept"},

  // s9i-11-2 — Calculating KE & GPE
  {id:"s9fc-11-2-1", islandId:"s9i-11-2", front:"State the formula for kinetic energy.",
   back:"KE = ½mv²\n\nWhere:\n• KE = kinetic energy (joules, J)\n• m = mass (kilograms, kg)\n• v = speed (metres per second, m/s)\n\nKinetic energy depends on mass and the SQUARE of speed — doubling speed quadruples KE.", difficulty:1, category:"definition"},
  {id:"s9fc-11-2-2", islandId:"s9i-11-2", front:"State the formula for gravitational potential energy.",
   back:"GPE = mgh\n\nWhere:\n• GPE = gravitational potential energy (joules, J)\n• m = mass (kilograms, kg)\n• g = gravitational field strength (N/kg) — on Earth, g ≈ 10 N/kg\n• h = height (metres, m)", difficulty:1, category:"definition"},
  {id:"s9fc-11-2-3", islandId:"s9i-11-2", front:"Calculate the KE of a 2 kg ball moving at 5 m/s.",
   back:"KE = ½mv²\n= ½ × 2 × 5²\n= ½ × 2 × 25\n= 25 J\n\nRemember to square the speed first, then multiply by mass and halve.", difficulty:2, category:"calculation"},
  {id:"s9fc-11-2-4", islandId:"s9i-11-2", front:"A 60 kg person climbs 4 m. Calculate their gain in GPE. (g = 10 N/kg)",
   back:"GPE = mgh\n= 60 × 10 × 4\n= 2400 J\n\nThe person has gained 2400 J of gravitational potential energy.", difficulty:2, category:"calculation"},
  {id:"s9fc-11-2-5", islandId:"s9i-11-2", front:"A 3 kg object is dropped from 5 m. What is its speed just before hitting the ground? (g = 10 N/kg)",
   back:"GPE at top = KE at bottom (conservation of energy, ignoring air resistance)\nmgh = ½mv²\n\nThe mass cancels:\ngh = ½v²\n10 × 5 = ½v²\n50 = ½v²\nv² = 100\nv = 10 m/s\n\nThe object hits the ground at 10 m/s.", difficulty:2, category:"calculation"},

  // s9i-11-3 — Conservation & Efficiency
  {id:"s9fc-11-3-1", islandId:"s9i-11-3", front:"State the formula for efficiency.",
   back:"Efficiency = useful output energy ÷ total input energy\n\nOr as a percentage:\nEfficiency = (useful output ÷ total input) × 100%\n\nEfficiency can also be calculated using power:\nEfficiency = useful output power ÷ total input power", difficulty:1, category:"definition"},
  {id:"s9fc-11-3-2", islandId:"s9i-11-3", front:"A light bulb uses 60 J of electrical energy and produces 9 J of light energy. Calculate its efficiency.",
   back:"Efficiency = useful output ÷ total input × 100%\n= 9 ÷ 60 × 100%\n= 15%\n\nThe remaining 85% (51 J) is dissipated as thermal energy (heat) to the surroundings.", difficulty:2, category:"calculation"},
  {id:"s9fc-11-3-3", islandId:"s9i-11-3", front:"What is a Sankey diagram?",
   back:"A Sankey diagram is a flow diagram that shows energy transfers. The width of each arrow is proportional to the amount of energy.\n\n• The input arrow enters from the left\n• Useful energy outputs go to the right\n• Wasted (dissipated) energy typically goes downward\n\nYou can read off the efficiency by comparing the width of the useful arrow to the input arrow.", difficulty:1, category:"concept"},
  {id:"s9fc-11-3-4", islandId:"s9i-11-3", front:"How can efficiency be improved in everyday devices?",
   back:"• Lubrication — reduces friction, so less energy is wasted as heat\n• Insulation — reduces energy lost by heating (e.g. loft insulation in houses)\n• Streamlining — reduces air resistance and drag\n• LED bulbs — convert more electrical energy to light and less to heat than filament bulbs\n\nNo device can ever be 100% efficient — some energy is always dissipated.", difficulty:2, category:"application"},
  {id:"s9fc-11-3-5", islandId:"s9i-11-3", front:"A motor has an input power of 500 W and a useful output power of 350 W. What is its efficiency?",
   back:"Efficiency = useful output power ÷ total input power × 100%\n= 350 ÷ 500 × 100%\n= 70%\n\n30% of the input power (150 W) is wasted, mostly as heat due to friction and resistance.", difficulty:2, category:"calculation"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-11-1": [
    {q:"A stretched spring stores energy in which store?",
     opts:["Kinetic","Gravitational potential","Elastic potential","Thermal"], c:2,
     e:"A stretched (or compressed) spring stores energy in the elastic potential energy store. When released, this energy can be transferred to kinetic energy. Gravitational PE relates to height; kinetic to movement; thermal to temperature."},
    {q:"Energy is transferred from a hot cup of tea to the surrounding air. The pathway is:",
     opts:["Mechanically","Electrically","By radiation and heating","By nuclear decay"], c:2,
     e:"Heat energy is transferred from the hot tea to the cooler air by conduction, convection and radiation — all forms of heating/radiation pathways. No mechanical force or electrical circuit is involved."},
    {q:"Which statement about energy conservation is correct?",
     opts:["Energy can be created in chemical reactions","Energy can be destroyed by friction","Energy cannot be created or destroyed, only transferred","Energy is always 100% useful"], c:2,
     e:"The principle of conservation of energy states that energy cannot be created or destroyed. It can only be transferred between stores or dissipated to the surroundings. The total energy in a closed system is always constant."},
    {q:"A car brakes and comes to a stop. What happens to the kinetic energy?",
     opts:["It is destroyed","It is transferred to thermal energy in the brakes and surroundings","It is converted to gravitational potential energy","It is stored in the battery"], c:1,
     e:"When brakes are applied, friction converts the car's kinetic energy into thermal energy — the brakes, tyres and road heat up. The energy is not destroyed; it is dissipated to the surroundings as heat."},
    {q:"A battery powers a torch. The energy transfer is:",
     opts:["Chemical → light + thermal (by electrical pathway)","Nuclear → kinetic","Gravitational → elastic","Thermal → chemical"], c:0,
     e:"The battery stores chemical energy. When the circuit is complete, energy is transferred electrically to the bulb, where it is converted to light energy (useful) and thermal energy (wasted). Chemical → electrical → light + thermal."}
  ],
  "s9i-11-2": [
    {q:"Calculate the kinetic energy of a 4 kg object moving at 3 m/s.",
     opts:["6 J","12 J","18 J","36 J"], c:2,
     e:"KE = ½mv² = ½ × 4 × 3² = ½ × 4 × 9 = 18 J. Remember to square the speed first."},
    {q:"A 50 kg student climbs stairs to a height of 3 m. What is the gain in GPE? (g = 10 N/kg)",
     opts:["150 J","500 J","1500 J","15 J"], c:2,
     e:"GPE = mgh = 50 × 10 × 3 = 1500 J. Always use consistent SI units (kg, N/kg, m)."},
    {q:"If the speed of an object doubles, its kinetic energy:",
     opts:["Doubles","Halves","Quadruples","Stays the same"], c:2,
     e:"KE = ½mv². Since speed is squared, doubling speed gives: ½m(2v)² = ½m × 4v² = 4 × ½mv². Kinetic energy quadruples when speed doubles."},
    {q:"A ball at the top of a hill has 200 J of GPE. Ignoring friction, what is its KE at the bottom?",
     opts:["0 J","100 J","200 J","400 J"], c:2,
     e:"By conservation of energy (no friction), all GPE is converted to KE: 200 J of GPE becomes 200 J of KE at the bottom. In reality, some energy would be dissipated as thermal energy due to air resistance."},
    {q:"The formula GPE = mgh: what unit is 'g' measured in?",
     opts:["m/s²","J/kg","N/kg","kg/m"], c:2,
     e:"g is the gravitational field strength, measured in newtons per kilogram (N/kg). On Earth, g ≈ 10 N/kg (or more precisely 9.8 N/kg). This is numerically equal to the acceleration due to gravity (9.8 m/s²)."}
  ],
  "s9i-11-3": [
    {q:"A machine uses 400 J of energy and produces 300 J of useful output. What is its efficiency?",
     opts:["75%","133%","25%","30%"], c:0,
     e:"Efficiency = (useful output ÷ total input) × 100% = (300 ÷ 400) × 100% = 75%. The remaining 25% (100 J) is wasted as heat. Efficiency can never exceed 100%."},
    {q:"On a Sankey diagram, the width of an arrow represents:",
     opts:["The temperature of the energy","The amount (quantity) of energy transferred","The speed of the energy transfer","The colour of the energy"], c:1,
     e:"In a Sankey diagram, the width of each arrow is proportional to the amount of energy it represents. Wider arrows = more energy. The useful output arrow is usually narrower than the input arrow because some energy is wasted."},
    {q:"Which improvement would increase the efficiency of a car engine?",
     opts:["Using a heavier car body","Reducing friction with better lubrication","Driving faster to use more fuel","Removing the exhaust system"], c:1,
     e:"Reducing friction means less energy is wasted as heat, so more of the fuel's chemical energy is converted to useful kinetic energy. Better lubrication is one way to reduce friction. A heavier car requires more energy to move; driving faster increases air resistance losses."},
    {q:"Can any device be 100% efficient?",
     opts:["Yes, if it has no moving parts","Yes, if it uses renewable energy","No — some energy is always dissipated","Yes — electric motors are 100% efficient"], c:2,
     e:"No real device can be 100% efficient. Some energy is always dissipated (usually as thermal energy due to friction or electrical resistance). Even the best electric motors waste a small amount of energy as heat. This is a consequence of the laws of thermodynamics."},
    {q:"An LED bulb and a filament bulb both use 60 J of electrical energy. The LED produces 30 J of light; the filament bulb produces 6 J. Which is more efficient?",
     opts:["The filament bulb","They are equally efficient","The LED bulb","Neither produces useful light"], c:2,
     e:"LED efficiency = 30/60 × 100% = 50%. Filament efficiency = 6/60 × 100% = 10%. The LED is five times more efficient because it wastes less energy as heat."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-11-1': `
<h2>Energy Stores</h2>
<div class="lesson-diagram" data-diagram="energy-stores"><p class="diagram-caption">The energy stores</p></div>
<p>Energy is one of the most fundamental concepts in physics. Everything that happens &mdash; from a ball bouncing to a star shining &mdash; involves energy being transferred between stores.</p>

<h3>The Eight Energy Stores</h3>
<ul>
  <li><strong>Kinetic</strong> &mdash; energy of a moving object</li>
  <li><strong>Gravitational potential</strong> &mdash; energy due to height above the ground</li>
  <li><strong>Elastic potential</strong> &mdash; energy in a stretched or compressed object</li>
  <li><strong>Chemical</strong> &mdash; stored in bonds (food, fuel, batteries)</li>
  <li><strong>Thermal</strong> &mdash; related to temperature</li>
  <li><strong>Magnetic</strong> &mdash; energy of magnets</li>
  <li><strong>Electrostatic</strong> &mdash; energy of electric charges</li>
  <li><strong>Nuclear</strong> &mdash; stored in atomic nuclei</li>
</ul>

<h3>Transfer Pathways</h3>
<p>Energy moves between stores by four pathways: <strong>mechanically</strong> (forces), <strong>electrically</strong> (charges in circuits), <strong>by heating</strong> (conduction, convection), and <strong>by radiation</strong> (light, sound, infrared).</p>

<h3>Worked Example</h3>
<p>Describe the energy transfers when a person kicks a football and it rises into the air.</p>
<p>Chemical energy store (in muscles) &rarr; kinetic energy store (ball moves) via mechanical transfer. As the ball rises, its kinetic energy decreases and gravitational potential energy increases. Some energy is dissipated to thermal stores of the ball and air due to friction and air resistance.</p>

<h3>Common Mistake</h3>
<p>Students sometimes say energy is "used up" or "lost." Energy is never destroyed &mdash; it is transferred to other stores (often thermal) and dissipated to the surroundings. Use the correct language: "energy is transferred" or "energy is dissipated," not "energy is lost."</p>
`,

's9i-11-2': `
<h2>Calculating KE &amp; GPE</h2>
<p>Two of the most important energy store calculations at GCSE are kinetic energy and gravitational potential energy. You need to know the formulas, how to substitute values, and how to rearrange them.</p>

<h3>Kinetic Energy</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>KE = &frac12;mv&sup2;</strong></p>
<p>KE in joules (J), m in kilograms (kg), v in metres per second (m/s). Since v is squared, doubling speed <strong>quadruples</strong> the kinetic energy.</p>

<h3>Gravitational Potential Energy</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>GPE = mgh</strong></p>
<p>GPE in joules (J), m in kg, g = gravitational field strength (10 N/kg on Earth), h in metres (m).</p>

<h3>Worked Example</h3>
<p>A 0.5 kg ball is dropped from 20 m. Calculate (a) its GPE at the top and (b) its speed just before hitting the ground. (g = 10 N/kg, ignore air resistance.)</p>
<p>(a) GPE = mgh = 0.5 &times; 10 &times; 20 = <strong>100 J</strong></p>
<p>(b) At the bottom, all GPE has been converted to KE: KE = 100 J<br>
100 = &frac12; &times; 0.5 &times; v&sup2;<br>
100 = 0.25v&sup2;<br>
v&sup2; = 400<br>
v = <strong>20 m/s</strong></p>

<h3>Common Mistake</h3>
<p>Forgetting to square the speed when calculating KE is very common. Always compute v&sup2; first, then multiply by mass and divide by 2. When rearranging to find v, remember to take the square root at the end. Also, make sure all values are in SI units before substituting.</p>
`,

's9i-11-3': `
<h2>Conservation &amp; Efficiency</h2>
<div class="lesson-diagram" data-diagram="sankey-diagram"><p class="diagram-caption">A Sankey diagram showing efficiency</p></div>
<p>No device converts all its input energy into useful output &mdash; some is always wasted. Understanding efficiency helps us design better machines and reduce energy waste.</p>

<h3>Conservation of Energy</h3>
<p>Energy cannot be created or destroyed, only transferred between stores. In a closed system, the total energy remains constant. Energy that seems to &ldquo;disappear&rdquo; has actually been dissipated to thermal stores in the surroundings.</p>

<h3>Efficiency</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Efficiency = (useful output energy &divide; total input energy) &times; 100%</strong></p>
<p>Efficiency is always less than 100% in real devices. Higher efficiency means less energy is wasted.</p>

<h3>Sankey Diagrams</h3>
<p>A Sankey diagram uses arrows whose widths are proportional to energy. The input enters from the left; useful output goes right; wasted energy (usually heat) goes downward. Reading the widths lets you calculate efficiency at a glance.</p>

<h3>Worked Example</h3>
<p>A motor takes in 800 J of electrical energy and does 600 J of useful work. (a) What is its efficiency? (b) How much energy is wasted?</p>
<p>(a) Efficiency = (600 &divide; 800) &times; 100% = <strong>75%</strong><br>
(b) Wasted energy = 800 &minus; 600 = <strong>200 J</strong> (dissipated as heat due to friction and resistance)</p>

<h3>Common Mistake</h3>
<p>Students sometimes calculate efficiency greater than 100%. If your answer exceeds 100%, recheck your values &mdash; you may have swapped the useful output and total input. Also, remember that efficiency can be expressed as a decimal (0.75) or a percentage (75%) depending on the question.</p>
`

});
