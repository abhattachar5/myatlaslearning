// content/y9/science/islands/t14.js — Year 9 Science Topic 14: Electricity: Circuits & Charge
// Islands s9i-14-1 .. s9i-14-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-14-1 — Current, Voltage & Resistance
  {id:"s9fc-14-1-1", islandId:"s9i-14-1", front:"Define electric current.",
   back:"Electric current is the rate of flow of electric charge.\n\nI = Q / t\n\nWhere:\n• I = current (amperes, A)\n• Q = charge (coulombs, C)\n• t = time (seconds, s)\n\nIn a metal wire, current is carried by the flow of electrons (which carry negative charge). Conventional current flows from positive to negative.", difficulty:1, category:"definition"},
  {id:"s9fc-14-1-2", islandId:"s9i-14-1", front:"Define potential difference (voltage).",
   back:"Potential difference (p.d., or voltage) is the energy transferred per unit of charge that passes between two points.\n\nV = E / Q\n\nWhere:\n• V = potential difference (volts, V)\n• E = energy transferred (joules, J)\n• Q = charge (coulombs, C)\n\nA 1 V p.d. means 1 joule of energy is transferred for every 1 coulomb of charge.", difficulty:1, category:"definition"},
  {id:"s9fc-14-1-3", islandId:"s9i-14-1", front:"Define resistance and state Ohm's law.",
   back:"Resistance opposes the flow of current. It is measured in ohms (Ω).\n\nOhm's law: V = IR\n\nWhere:\n• V = potential difference (volts, V)\n• I = current (amperes, A)\n• R = resistance (ohms, Ω)\n\nRearranged: I = V / R and R = V / I.\n\nFor an ohmic conductor (at constant temperature), V and I are directly proportional — the graph is a straight line through the origin.", difficulty:1, category:"definition"},
  {id:"s9fc-14-1-4", islandId:"s9i-14-1", front:"A resistor has a p.d. of 12 V across it and a current of 3 A flowing through it. Calculate the resistance.",
   back:"R = V / I\n= 12 / 3\n= 4 Ω\n\nAlways state the unit (ohms, Ω).", difficulty:2, category:"calculation"},
  {id:"s9fc-14-1-5", islandId:"s9i-14-1", front:"What is an ohmic conductor?",
   back:"An ohmic conductor has a constant resistance — the current through it is directly proportional to the p.d. across it (at constant temperature).\n\nOn an I–V graph, an ohmic conductor gives a straight line through the origin.\n\nA filament lamp is NOT ohmic — as current increases, the wire heats up, resistance increases, and the I–V graph curves.\n\nA diode only allows current to flow in one direction.", difficulty:2, category:"concept"},

  // s9i-14-2 — Series & Parallel Circuits
  {id:"s9fc-14-2-1", islandId:"s9i-14-2", front:"State the current rule for series circuits.",
   back:"In a series circuit, the current is the SAME at all points.\n\nThere is only one path for the current to flow, so all charges pass through every component.\n\nI₁ = I₂ = I₃ = ...\n\nThe current is determined by the total resistance and the supply voltage: I = V / R_total.", difficulty:1, category:"concept"},
  {id:"s9fc-14-2-2", islandId:"s9i-14-2", front:"State the voltage rule for series circuits.",
   back:"In a series circuit, the supply voltage is shared between the components.\n\nV_supply = V₁ + V₂ + V₃ + ...\n\nThe voltage across each component depends on its resistance — a higher resistance gets a larger share of the voltage.\n\nThe sum of all the individual voltages equals the total supply voltage.", difficulty:1, category:"concept"},
  {id:"s9fc-14-2-3", islandId:"s9i-14-2", front:"State the current and voltage rules for parallel circuits.",
   back:"Current: the total current from the supply splits at junctions. The current through each branch depends on the resistance of that branch.\nI_total = I₁ + I₂ + I₃ + ...\n\nVoltage: the p.d. across each branch is the SAME as the supply voltage.\nV₁ = V₂ = V₃ = V_supply\n\nComponents in parallel are independently controlled.", difficulty:2, category:"concept"},
  {id:"s9fc-14-2-4", islandId:"s9i-14-2", front:"Two resistors of 6 Ω and 4 Ω are connected in series. What is the total resistance?",
   back:"In series: R_total = R₁ + R₂\n= 6 + 4\n= 10 Ω\n\nIn series, resistances simply add up because the current must flow through each resistor in turn.", difficulty:1, category:"calculation"},
  {id:"s9fc-14-2-5", islandId:"s9i-14-2", front:"In a series circuit with a 12 V battery and two identical resistors, what is the voltage across each?",
   back:"If the resistors are identical, they share the voltage equally.\n\nV across each = 12 ÷ 2 = 6 V\n\nThe total voltage across all components adds up to the supply voltage: 6 + 6 = 12 V.\n\nIf the resistors were different, the larger resistance would have the larger voltage.", difficulty:2, category:"calculation"},

  // s9i-14-3 — Charge & Energy in Circuits
  {id:"s9fc-14-3-1", islandId:"s9i-14-3", front:"State the formula Q = It and explain what it means.",
   back:"Q = It\n\nWhere:\n• Q = charge (coulombs, C)\n• I = current (amperes, A)\n• t = time (seconds, s)\n\nThis means: charge = current × time.\n\nIf a current of 1 A flows for 1 second, 1 coulomb of charge passes.", difficulty:1, category:"definition"},
  {id:"s9fc-14-3-2", islandId:"s9i-14-3", front:"State the formula E = QV and explain what it means.",
   back:"E = QV\n\nWhere:\n• E = energy transferred (joules, J)\n• Q = charge (coulombs, C)\n• V = potential difference (volts, V)\n\nThis means: energy = charge × voltage.\n\nThe energy transferred by a component equals the charge flowing through it multiplied by the p.d. across it.", difficulty:1, category:"definition"},
  {id:"s9fc-14-3-3", islandId:"s9i-14-3", front:"A current of 0.5 A flows through a lamp for 2 minutes. Calculate the charge.",
   back:"Convert time: 2 minutes = 120 s\n\nQ = It\n= 0.5 × 120\n= 60 C\n\n60 coulombs of charge pass through the lamp.", difficulty:2, category:"calculation"},
  {id:"s9fc-14-3-4", islandId:"s9i-14-3", front:"A charge of 20 C passes through a heater with a p.d. of 230 V. Calculate the energy transferred.",
   back:"E = QV\n= 20 × 230\n= 4600 J\n\nThe heater transfers 4600 J (4.6 kJ) of energy.", difficulty:2, category:"calculation"},
  {id:"s9fc-14-3-5", islandId:"s9i-14-3", front:"Explain how energy is transferred in a simple circuit.",
   back:"The battery has a chemical energy store. It does work on charges, giving them electrical energy.\n\nAs charges flow through the circuit, they transfer energy to each component:\n• In a lamp → energy is transferred to light and thermal stores\n• In a resistor → energy is transferred to the thermal store (heating)\n• In a motor → energy is transferred to the kinetic store\n\nThe charges return to the battery with less energy, and the battery 'tops them up' again.\n\nVoltage tells you how much energy is transferred per coulomb at each component.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-14-1": [
    {q:"A current of 2 A flows through a resistor with a resistance of 5 Ω. What is the p.d. across it?",
     opts:["2.5 V","7 V","10 V","3 V"], c:2,
     e:"V = IR = 2 × 5 = 10 V. Ohm's law links voltage, current and resistance. Always state the formula, substitute values, and include the unit."},
    {q:"Resistance is measured in:",
     opts:["Amperes (A)","Volts (V)","Ohms (Ω)","Coulombs (C)"], c:2,
     e:"Resistance is measured in ohms (Ω). Current is measured in amperes (A), potential difference in volts (V), and charge in coulombs (C)."},
    {q:"Which statement about an ohmic conductor is correct?",
     opts:["Its resistance increases with temperature","Current is directly proportional to p.d. at constant temperature","It only conducts in one direction","It has zero resistance"], c:1,
     e:"An ohmic conductor has a constant resistance at constant temperature, so V and I are directly proportional — the I–V graph is a straight line through the origin. A filament lamp is not ohmic because its resistance increases as it heats up."},
    {q:"In a metal wire, what carries the electric current?",
     opts:["Protons","Neutrons","Free (delocalised) electrons","Ions"], c:2,
     e:"In a metal, current is carried by free (delocalised) electrons. These move through the lattice of positive metal ions when a p.d. is applied. Conventional current is defined as flowing from positive to negative (opposite to electron flow)."},
    {q:"If the resistance of a component is doubled and the voltage stays the same, the current will:",
     opts:["Double","Stay the same","Halve","Quadruple"], c:2,
     e:"From V = IR: I = V/R. If R doubles and V is constant, I = V/(2R), so the current halves. Greater resistance means less current flows for the same voltage."}
  ],
  "s9i-14-2": [
    {q:"In a series circuit, the current is:",
     opts:["Different at each component","Largest near the battery","The same at all points","Zero between components"], c:2,
     e:"In a series circuit there is only one path, so the same current flows through every component. The current is determined by the total resistance: I = V_supply / R_total."},
    {q:"Three resistors of 2 Ω, 3 Ω and 5 Ω are connected in series. What is the total resistance?",
     opts:["10 Ω","0.1 Ω","30 Ω","3.3 Ω"], c:0,
     e:"In series: R_total = R₁ + R₂ + R₃ = 2 + 3 + 5 = 10 Ω. Resistances simply add together in series."},
    {q:"In a parallel circuit, the voltage across each branch is:",
     opts:["Shared between the branches","Different for each branch","The same as the supply voltage","Zero"], c:2,
     e:"In a parallel circuit, each branch is connected directly across the supply. Therefore the p.d. across each branch equals the supply voltage. Current splits between branches, but voltage is the same everywhere."},
    {q:"A 12 V battery is connected to two resistors in series: 4 Ω and 8 Ω. What is the voltage across the 8 Ω resistor?",
     opts:["4 V","8 V","12 V","6 V"], c:1,
     e:"Total resistance = 4 + 8 = 12 Ω. Current = V/R = 12/12 = 1 A. Voltage across 8 Ω = IR = 1 × 8 = 8 V. The larger resistor gets the larger share of the voltage in series."},
    {q:"Why are household circuits wired in parallel rather than series?",
     opts:["Parallel circuits use less wire","Each appliance gets the full mains voltage and can be switched on or off independently","Parallel circuits have higher resistance","Series circuits are more dangerous"], c:1,
     e:"In parallel, each branch receives the full supply voltage, and switching one appliance off does not affect others. In series, if one device fails, the whole circuit breaks, and the voltage would be shared (reducing each device's supply)."}
  ],
  "s9i-14-3": [
    {q:"A current of 3 A flows for 10 seconds. How much charge passes?",
     opts:["30 C","3.3 C","0.3 C","13 C"], c:0,
     e:"Q = It = 3 × 10 = 30 C. 30 coulombs of charge pass in 10 seconds. Always convert time to seconds if given in other units."},
    {q:"A charge of 50 C passes through a component with a p.d. of 6 V. What is the energy transferred?",
     opts:["300 J","8.3 J","56 J","0.12 J"], c:0,
     e:"E = QV = 50 × 6 = 300 J. The component transfers 300 joules of electrical energy into other forms (heat, light, etc.)."},
    {q:"1 volt means:",
     opts:["1 ampere per second","1 joule of energy per coulomb of charge","1 coulomb per second","1 ohm per ampere"], c:1,
     e:"Voltage (p.d.) is defined as the energy transferred per unit charge: V = E/Q. So 1 V = 1 J/C. A 12 V battery transfers 12 joules of energy for every coulomb of charge that passes through it."},
    {q:"In a circuit, where do the charges get their energy?",
     opts:["From the wires","From the resistors","From the battery (or power supply)","From the switch"], c:2,
     e:"The battery converts chemical energy into electrical energy, doing work on the charges. As charges flow through components, they transfer this energy (e.g. to light or heat). The charges then return to the battery to be 'recharged' with energy."},
    {q:"A 2 A current flows through a 12 V heater for 5 minutes. Calculate the energy transferred.",
     opts:["120 J","7200 J","1200 J","24 J"], c:1,
     e:"Step 1: Q = It = 2 × 300 = 600 C (5 min = 300 s). Step 2: E = QV = 600 × 12 = 7200 J. Or directly: E = VIt = 12 × 2 × 300 = 7200 J."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-14-1': `
<h2>Current, Voltage &amp; Resistance</h2>
<p>Electricity is one of the most important topics in physics. Understanding how current, voltage and resistance relate to each other is the foundation for all circuit analysis.</p>

<h3>Current</h3>
<p>Electric current is the rate of flow of charge. In a metal wire, it is carried by free (delocalised) electrons.</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>I = Q / t</strong> &nbsp; (current = charge &divide; time)</p>
<p>Measured in <strong>amperes (A)</strong> using an ammeter connected in <strong>series</strong>.</p>

<h3>Potential Difference (Voltage)</h3>
<p>Voltage is the energy transferred per unit charge between two points.</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>V = E / Q</strong> &nbsp; (voltage = energy &divide; charge)</p>
<p>Measured in <strong>volts (V)</strong> using a voltmeter connected in <strong>parallel</strong>.</p>

<h3>Resistance &amp; Ohm's Law</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>V = IR</strong></p>
<p>Resistance (in ohms, &Omega;) opposes current flow. For an ohmic conductor at constant temperature, V and I are directly proportional.</p>

<h3>Worked Example</h3>
<p>A lamp has a resistance of 8 &Omega; and a p.d. of 24 V across it. Calculate the current.</p>
<p>I = V / R = 24 / 8 = <strong>3 A</strong></p>

<h3>Common Mistake</h3>
<p>Students often connect ammeters and voltmeters incorrectly. An ammeter must be in <strong>series</strong> (so all the current flows through it). A voltmeter must be in <strong>parallel</strong> (across the component, to measure the energy difference). Swapping them will give incorrect readings or damage the ammeter.</p>
`,

's9i-14-2': `
<h2>Series &amp; Parallel Circuits</h2>
<p>Components can be connected in series (one path) or in parallel (multiple paths). The rules for current and voltage are different in each type of circuit.</p>

<h3>Series Circuits</h3>
<ul>
  <li><strong>Current</strong> &mdash; the same at all points (only one path)</li>
  <li><strong>Voltage</strong> &mdash; shared between components (V&#8321; + V&#8322; = V<sub>supply</sub>)</li>
  <li><strong>Resistance</strong> &mdash; R<sub>total</sub> = R&#8321; + R&#8322; + &hellip; (resistances add up)</li>
</ul>

<h3>Parallel Circuits</h3>
<ul>
  <li><strong>Current</strong> &mdash; splits at junctions; I<sub>total</sub> = I&#8321; + I&#8322; + &hellip;</li>
  <li><strong>Voltage</strong> &mdash; the same across each branch (equals supply voltage)</li>
  <li><strong>Resistance</strong> &mdash; total resistance is always less than the smallest individual resistor</li>
</ul>

<h3>Worked Example</h3>
<p>A 6 V battery is connected to a 3 &Omega; and a 6 &Omega; resistor in series. Calculate the current and the voltage across each resistor.</p>
<p>R<sub>total</sub> = 3 + 6 = 9 &Omega;<br>
I = V / R = 6 / 9 = 0.67 A<br>
V across 3 &Omega; = IR = 0.67 &times; 3 = <strong>2 V</strong><br>
V across 6 &Omega; = IR = 0.67 &times; 6 = <strong>4 V</strong><br>
Check: 2 + 4 = 6 V = supply &check;</p>

<h3>Common Mistake</h3>
<p>Students often think that in a series circuit the voltage is the same everywhere. It is the <em>current</em> that is the same in series, not the voltage. Voltage is shared. In parallel circuits, it is the other way round: voltage is the same across each branch, but current splits.</p>
`,

's9i-14-3': `
<h2>Charge &amp; Energy in Circuits</h2>
<p>To fully understand circuits, you need to connect the ideas of charge, current, voltage and energy. Two key equations tie everything together.</p>

<h3>Charge</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Q = It</strong> &nbsp; (charge = current &times; time)</p>
<p>Q in coulombs (C), I in amperes (A), t in seconds (s). One coulomb is the charge carried by a current of 1 A in 1 second.</p>

<h3>Energy Transferred</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>E = QV</strong> &nbsp; (energy = charge &times; voltage)</p>
<p>E in joules (J), Q in coulombs (C), V in volts (V). This tells you how much energy each component transfers.</p>

<h3>Combining the Two</h3>
<p>Since Q = It, you can substitute to get: <strong>E = VIt</strong> &mdash; useful when you know current and time directly.</p>

<h3>Worked Example</h3>
<p>A 3 A current flows through a 230 V kettle for 3 minutes. Calculate (a) the charge and (b) the energy transferred.</p>
<p>(a) Q = It = 3 &times; 180 = <strong>540 C</strong> (3 min = 180 s)<br>
(b) E = QV = 540 &times; 230 = <strong>124,200 J</strong> (124.2 kJ)</p>

<h3>Common Mistake</h3>
<p>The most common error is forgetting to convert time from minutes to seconds. Q = It requires time in seconds. Also, remember that voltage tells you the energy transferred <em>per coulomb</em>, not the total energy. To find total energy, multiply by the total charge (E = QV).</p>
`

});
