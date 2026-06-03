// science-y11-t13.js — Year 11 Science Topic 13: Physics Required Practicals
// Islands: s11i-13-1 .. s11i-13-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-13-1 — Physics Practicals 1
  {id:"s11fc-13-1-1",islandId:"s11i-13-1",front:"Describe how to measure the specific heat capacity of a metal block.",
   back:"1. Measure the mass of the metal block (m).\n2. Insert a thermometer and an electric heater into holes in the block.\n3. Record the starting temperature (θ₁).\n4. Switch on the heater for a set time. Record the energy supplied (E = P × t or use a joulemeter).\n5. Record the final temperature (θ₂).\n6. Calculate: c = E ÷ (m × Δθ) where Δθ = θ₂ − θ₁.",difficulty:2,category:"application"},
  {id:"s11fc-13-1-2",islandId:"s11i-13-1",front:"Why is the experimental value of specific heat capacity often higher than the accepted value?",
   back:"Energy is lost to the surroundings as heat (the block is not perfectly insulated).\n\nThis means some of the electrical energy heats the air, not the block. The measured temperature rise is therefore smaller than expected, making the calculated SHC appear larger.",difficulty:2,category:"concept"},
  {id:"s11fc-13-1-3",islandId:"s11i-13-1",front:"How do you investigate the relationship between resistance and the length of a wire?",
   back:"1. Set up a circuit with a battery, ammeter, wire mounted on a ruler and a voltmeter across the wire.\n2. Connect crocodile clips at different lengths along the wire.\n3. For each length, record the current (I) and voltage (V).\n4. Calculate resistance: R = V/I.\n5. Plot a graph of resistance against length.\n\nExpect a straight line through the origin — resistance is proportional to length.",difficulty:2,category:"application"},
  {id:"s11fc-13-1-4",islandId:"s11i-13-1",front:"How do you obtain I–V characteristics for a filament lamp?",
   back:"1. Set up a circuit with a variable resistor, ammeter (series) and voltmeter (parallel with the lamp).\n2. Vary the resistor to change the current.\n3. Record V and I for a range of values.\n4. Reverse the battery and repeat for negative values.\n5. Plot I (y-axis) against V (x-axis).\n\nA filament lamp gives a curved graph — resistance increases as temperature rises.",difficulty:2,category:"application"},
  {id:"s11fc-13-1-5",islandId:"s11i-13-1",front:"What shape is the I–V graph for an ohmic resistor (e.g. a piece of constantan wire)?",
   back:"A straight line through the origin.\n\nThis shows that current is directly proportional to voltage — the resistance is constant. This is Ohm's law: V = IR, with R constant.\n\nThe gradient of the line equals 1/R.",difficulty:1,category:"concept"},

  // s11i-13-2 — Physics Practicals 2
  {id:"s11fc-13-2-1",islandId:"s11i-13-2",front:"Describe how to measure the density of a regular solid (e.g. a rectangular block).",
   back:"1. Measure the mass using a balance (m).\n2. Measure the dimensions (length, width, height) using a ruler or callipers.\n3. Calculate volume: V = l × w × h.\n4. Calculate density: ρ = m / V.\n\nUnits: mass in kg, volume in m³ → density in kg/m³ (or g and cm³ → g/cm³).",difficulty:1,category:"application"},
  {id:"s11fc-13-2-2",islandId:"s11i-13-2",front:"How do you measure the density of an irregular solid?",
   back:"1. Measure the mass on a balance (m).\n2. Fill a eureka (displacement) can with water until it overflows from the spout.\n3. Gently lower the object into the water.\n4. Collect the displaced water in a measuring cylinder — this volume equals the object's volume (V).\n5. Calculate: ρ = m / V.",difficulty:2,category:"application"},
  {id:"s11fc-13-2-3",islandId:"s11i-13-2",front:"Describe the force–extension practical using a spring.",
   back:"1. Clamp a spring vertically and place a ruler alongside.\n2. Record the original length (no load).\n3. Add masses one at a time, recording the new length each time.\n4. Calculate extension = new length − original length.\n5. Plot a graph of force (weight = mg) against extension.\n\nThe straight-line section obeys Hooke's law: F = ke. The gradient is the spring constant, k.",difficulty:2,category:"application"},
  {id:"s11fc-13-2-4",islandId:"s11i-13-2",front:"What does the limit of proportionality mean on a force–extension graph?",
   back:"The limit of proportionality is the point beyond which force and extension are no longer directly proportional.\n\nBefore this point, the graph is a straight line (Hooke's law applies: F = ke). Beyond it, the graph curves — the spring is being permanently deformed.",difficulty:2,category:"concept"},
  {id:"s11fc-13-2-5",islandId:"s11i-13-2",front:"Describe how to measure the speed of waves in a ripple tank.",
   back:"1. Set up a ripple tank with a motor-driven dipper to create waves.\n2. Use a strobe light or freeze-frame to measure the wavelength (λ) — the distance between adjacent wave crests.\n3. Measure the frequency (f) by counting waves passing a point per second.\n4. Calculate wave speed: v = fλ.\n\nAlternatively, time how long it takes a single wavefront to travel a known distance.",difficulty:2,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-13-1":[
    {q:"In the SHC practical, a heater supplies 5000 J to a 1 kg block. The temperature rises by 10 °C. What is the SHC?",opts:["50 J/kg°C","500 J/kg°C","5000 J/kg°C","50000 J/kg°C"],c:1,e:"c = E / (m × Δθ) = 5000 / (1 × 10) = 500 J/kg°C. This is the energy needed to raise 1 kg of the material by 1 °C."},
    {q:"When investigating resistance and wire length, doubling the length should:",opts:["Halve the resistance","Double the resistance","Have no effect on resistance","Quadruple the resistance"],c:1,e:"Resistance is directly proportional to length (R ∝ l). Doubling the length doubles the resistance, as shown by the straight-line graph through the origin."},
    {q:"The I–V graph for a filament lamp curves because:",opts:["The voltage decreases","The resistance increases as the lamp heats up","The ammeter is broken","The wire gets shorter"],c:1,e:"As current increases, the filament heats up. Higher temperature means the metal ions vibrate more, impeding electron flow and increasing resistance. This causes the curve to flatten."},
    {q:"Which component gives a straight-line I–V graph through the origin?",opts:["Filament lamp","Diode","Ohmic resistor (e.g. constantan wire)","LED"],c:2,e:"An ohmic resistor obeys Ohm's law — current is directly proportional to voltage at constant temperature, giving a straight line through the origin."},
    {q:"In the resistance practical, why should the current be kept low?",opts:["To save battery life","To prevent the wire heating up and changing its resistance","To make the voltmeter reading easier","To increase the resistance"],c:1,e:"High current heats the wire, increasing its resistance and making the results unreliable. Low current keeps the temperature (and therefore resistance) constant."}
  ],
  "s11i-13-2":[
    {q:"A block has mass 500 g and dimensions 10 cm × 5 cm × 2 cm. What is its density?",opts:["0.5 g/cm³","5.0 g/cm³","50 g/cm³","500 g/cm³"],c:1,e:"Volume = 10 × 5 × 2 = 100 cm³. Density = 500/100 = 5.0 g/cm³."},
    {q:"In the density practical for an irregular solid, the volume is measured by:",opts:["Calculating length × width × height","Using a displacement can to collect displaced water","Weighing the object in air","Measuring with a ruler"],c:1,e:"An irregular object cannot be measured with a ruler. A eureka (displacement) can overflows water equal to the object's volume when it is submerged, and this water is collected and measured."},
    {q:"A spring obeys Hooke's law. If a force of 4 N causes an extension of 0.02 m, what is the spring constant?",opts:["0.005 N/m","2 N/m","8 N/m","200 N/m"],c:3,e:"F = ke → k = F/e = 4/0.02 = 200 N/m. The spring constant is the force per unit extension."},
    {q:"Beyond the limit of proportionality, a spring:",opts:["Returns to its original length when unloaded","Is permanently deformed and the graph curves","Breaks immediately","Becomes an ohmic conductor"],c:1,e:"Past the limit of proportionality, Hooke's law no longer applies. The spring does not return to its original length when the force is removed — it has been permanently stretched."},
    {q:"In a ripple tank, waves have a frequency of 5 Hz and a wavelength of 0.04 m. What is the wave speed?",opts:["0.008 m/s","0.20 m/s","1.25 m/s","125 m/s"],c:1,e:"v = fλ = 5 × 0.04 = 0.20 m/s. Wave speed equals frequency multiplied by wavelength."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-13-1': `
<h2>Physics Practicals 1</h2>
<p>The AQA Physics required practicals test your ability to measure, record and analyse data. This section covers <strong>specific heat capacity</strong>, <strong>resistance</strong> and <strong>I–V characteristics</strong>.</p>

<h3>Specific heat capacity (SHC)</h3>
<p>The SHC of a material is the energy needed to raise 1 kg of it by 1 °C.</p>
<p><strong>c = E / (m × Δθ)</strong></p>
<ul>
<li>Measure the block's mass, heat it with an electric heater, and record the temperature change.</li>
<li>Energy supplied: E = P × t (or read from a joulemeter).</li>
<li>The result is often too high because heat escapes to the surroundings.</li>
</ul>

<h3>Resistance and wire length</h3>
<p>Set up a circuit with an ammeter, voltmeter and a wire of known material. Vary the length using crocodile clips, record V and I, and calculate R = V/I.</p>
<p>The graph of R vs length should be a <strong>straight line through the origin</strong> — resistance is proportional to length.</p>

<h3>I–V characteristics</h3>
<p>Use a variable resistor to change the current through a component. Record V and I, then plot I against V.</p>
<ul>
<li><strong>Ohmic resistor</strong>: straight line through the origin (constant R).</li>
<li><strong>Filament lamp</strong>: curve that flattens (R increases with temperature).</li>
<li><strong>Diode</strong>: current flows in one direction only; virtually zero in reverse.</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> A heater supplies 12 000 J to a 2 kg aluminium block. The temperature rises from 20 °C to 26.7 °C. Calculate the SHC.</p>
<p><strong>A:</strong> Δθ = 26.7 − 20 = 6.7 °C<br>
c = E / (m × Δθ) = 12 000 / (2 × 6.7) = 12 000 / 13.4 = <strong>896 J/kg°C</strong> (close to the accepted value of 900 J/kg°C for aluminium).</p>

<h3>Common mistake</h3>
<p>In the resistance practical, students forget to keep the <strong>current low</strong>. High current heats the wire, changing its resistance and making results unreliable. Use a low voltage and short measurement times.</p>`,

's11i-13-2': `
<h2>Physics Practicals 2</h2>
<p>This section covers the required practicals on <strong>density</strong>, <strong>force–extension</strong> (Hooke's law) and <strong>wave speed</strong>.</p>

<h3>Measuring density</h3>
<p><strong>ρ = m / V</strong></p>
<ul>
<li><strong>Regular solid</strong>: measure mass with a balance; calculate volume from dimensions (V = l × w × h for a cuboid).</li>
<li><strong>Irregular solid</strong>: measure mass with a balance; find volume by <strong>displacement</strong> — submerge the object in water and measure the volume of water displaced.</li>
</ul>

<h3>Force–extension (Hooke's law)</h3>
<p>Hang masses from a spring and measure the extension (new length − original length).</p>
<p><strong>F = ke</strong></p>
<ul>
<li>F = force (N), k = spring constant (N/m), e = extension (m).</li>
<li>The graph is a straight line up to the <strong>limit of proportionality</strong>. Beyond this point, the spring is permanently deformed.</li>
</ul>

<h3>Measuring wave speed</h3>
<p>In a ripple tank, measure the <strong>wavelength</strong> (distance between adjacent crests) and the <strong>frequency</strong> (waves per second).</p>
<p><strong>v = fλ</strong></p>
<p>Alternatively, time a wavefront travelling a measured distance: v = distance / time.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A spring has a spring constant of 40 N/m. What force is needed to extend it by 0.15 m?</p>
<p><strong>A:</strong> F = ke = 40 × 0.15 = <strong>6 N</strong>.</p>

<h3>Common mistake</h3>
<p>Students confuse <strong>extension</strong> with <strong>total length</strong>. Extension is the <em>increase</em> in length from the original (unstretched) length, not the total stretched length. Always subtract the original length.</p>`

});
