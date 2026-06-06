// content/y10/science/islands/t11.js — Year 10 Science Topic 11: Electricity: Series, Parallel & Mains
// Islands s10i-11-1 .. s10i-11-3. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-11-1 — Series & Parallel Rules
  {id:"s10fc-11-1-1", islandId:"s10i-11-1", front:"State the current and voltage rules for a series circuit.",
   back:"In a series circuit:\n\n• Current is the SAME at all points\n  I₁ = I₂ = I₃\n\n• Voltage is SHARED between components\n  V_total = V₁ + V₂ + V₃\n\n• Total resistance = sum of individual resistances\n  R_total = R₁ + R₂ + R₃\n\nThere is only one path for the current to flow.", difficulty:1, category:"definition"},
  {id:"s10fc-11-1-2", islandId:"s10i-11-1", front:"State the current and voltage rules for a parallel circuit.",
   back:"In a parallel circuit:\n\n• Voltage is the SAME across each branch\n  V₁ = V₂ = V₃ = V_supply\n\n• Current is SHARED between branches\n  I_total = I₁ + I₂ + I₃\n\n• Total resistance is LESS than the smallest individual resistance\n\nThere are multiple paths for the current to flow.", difficulty:1, category:"definition"},
  {id:"s10fc-11-1-3", islandId:"s10i-11-1", front:"Two resistors of 4 Ω and 6 Ω are connected in series. What is the total resistance?",
   back:"In series: R_total = R₁ + R₂\nR_total = 4 + 6 = 10 Ω\n\nIn series, resistances simply add up because the current must pass through both resistors one after the other.", difficulty:1, category:"calculation"},
  {id:"s10fc-11-1-4", islandId:"s10i-11-1", front:"A series circuit has a 12 V battery and two lamps. Lamp A has 5 V across it. What is the voltage across lamp B?",
   back:"In series, voltages add up to the supply voltage:\nV_total = V_A + V_B\n12 = 5 + V_B\nV_B = 12 − 5 = 7 V\n\nThe voltage is shared: lamp B has 7 V across it.\n\nIf the lamps had equal resistance, the voltage would be split equally (6 V each).", difficulty:2, category:"calculation"},
  {id:"s10fc-11-1-5", islandId:"s10i-11-1", front:"Why does adding more lamps in series make each lamp dimmer?",
   back:"Adding more lamps in series increases the total resistance of the circuit.\n\nSince V = IR and the battery voltage stays the same, the current through the circuit decreases.\n\nAlso, the battery voltage is shared between more lamps, so each gets a smaller share of the voltage.\n\nLess current and less voltage per lamp means less power and therefore dimmer light.", difficulty:2, category:"concept"},

  // s10i-11-2 — Power & Energy in Circuits
  {id:"s10fc-11-2-1", islandId:"s10i-11-2", front:"State the two power equations for electrical circuits.",
   back:"Power is the rate of energy transfer:\n\nP = I × V\nP = I² × R\n\nWhere:\n• P = power in watts (W)\n• I = current in amps (A)\n• V = potential difference in volts (V)\n• R = resistance in ohms (Ω)\n\nAlso: P = V² ÷ R (from combining P = IV with V = IR)", difficulty:1, category:"definition"},
  {id:"s10fc-11-2-2", islandId:"s10i-11-2", front:"A kettle operates at 230 V and draws a current of 10 A. Calculate its power.",
   back:"P = I × V\nP = 10 × 230\nP = 2300 W (or 2.3 kW)\n\nThe kettle transfers 2300 joules of electrical energy into heat energy every second.", difficulty:1, category:"calculation"},
  {id:"s10fc-11-2-3", islandId:"s10i-11-2", front:"How do you calculate the energy transferred by an electrical device?",
   back:"Energy transferred = power × time\n\nE = P × t\n\nWhere:\n• E = energy in joules (J)\n• P = power in watts (W)\n• t = time in seconds (s)\n\nAlso: E = I × V × t (substituting P = IV)\n\nFor electricity bills: energy is measured in kilowatt-hours (kWh)\nE (kWh) = power (kW) × time (hours)", difficulty:2, category:"calculation"},
  {id:"s10fc-11-2-4", islandId:"s10i-11-2", front:"A 2 kW heater runs for 3 hours. The cost of electricity is 30p per kWh. What is the cost?",
   back:"Step 1: Energy = power × time\nE = 2 kW × 3 h = 6 kWh\n\nStep 2: Cost = energy × price per unit\nCost = 6 × 30p = 180p = £1.80\n\nRemember: use kW (not W) and hours (not seconds) when calculating kWh.", difficulty:2, category:"calculation"},
  {id:"s10fc-11-2-5", islandId:"s10i-11-2", front:"A 5 A current flows through a 10 Ω resistor. Calculate the power dissipated.",
   back:"P = I² × R\nP = 5² × 10\nP = 25 × 10\nP = 250 W\n\nThe resistor dissipates 250 W of power as heat.\n\nAlternatively: V = IR = 5 × 10 = 50 V, then P = IV = 5 × 50 = 250 W (same answer).", difficulty:2, category:"calculation"},

  // s10i-11-3 — Mains Electricity & Safety
  {id:"s10fc-11-3-1", islandId:"s10i-11-3", front:"Describe the UK mains electricity supply.",
   back:"The UK mains supply provides:\n\n• Alternating current (ac) — the direction of current reverses 50 times per second\n• Voltage: ~230 V\n• Frequency: 50 Hz\n\nThis is different from batteries, which provide direct current (dc) — current flows in one direction only.\n\nMains voltage is dangerous and can cause electrocution if safety precautions are not followed.", difficulty:1, category:"definition"},
  {id:"s10fc-11-3-2", islandId:"s10i-11-3", front:"Name the three wires in a three-pin plug and their colours.",
   back:"1. Live wire (brown) — carries the alternating current from the supply; alternates between +230 V and −230 V\n2. Neutral wire (blue) — completes the circuit; at approximately 0 V\n3. Earth wire (green and yellow stripes) — safety wire connected to the metal casing; carries current to earth if a fault occurs\n\nThe earth wire is only connected in appliances with metal casings.", difficulty:1, category:"definition"},
  {id:"s10fc-11-3-3", islandId:"s10i-11-3", front:"How does a fuse protect an appliance?",
   back:"A fuse is a thin wire inside a ceramic casing, connected in the live wire.\n\nIf the current exceeds the fuse rating:\n1. The fuse wire melts (blows)\n2. This breaks the circuit\n3. The current stops flowing\n4. The appliance and user are protected from overheating or fire\n\nThe fuse rating should be just above the normal operating current. For example, if a device draws 3 A, use a 5 A fuse (not 13 A).", difficulty:2, category:"concept"},
  {id:"s10fc-11-3-4", islandId:"s10i-11-3", front:"What is the role of the earth wire?",
   back:"The earth wire is a safety wire in appliances with metal casings.\n\nIf a fault occurs and the live wire touches the metal casing:\n1. A large current flows through the earth wire to the ground\n2. This large current blows the fuse (or trips the RCD)\n3. The circuit is broken immediately\n4. The casing is no longer live — preventing electrocution\n\nDouble-insulated appliances (plastic casing) do not need an earth wire.", difficulty:2, category:"concept"},
  {id:"s10fc-11-3-5", islandId:"s10i-11-3", front:"What is an RCD (Residual Current Device)?",
   back:"An RCD is a safety device that detects a difference in current between the live and neutral wires.\n\nNormally, the current in the live and neutral wires is equal. If some current leaks to earth (e.g. through a person), the RCD detects the imbalance and breaks the circuit in milliseconds.\n\nRCDs are faster than fuses and can be reset after tripping. They provide protection against electrocution.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-11-1": [
    {q:"In a series circuit with a 6 V battery and three identical lamps, what is the voltage across each lamp?",
     opts:["6 V","2 V","3 V","18 V"], c:1,
     e:"In series, the total voltage is shared equally between identical components. 6 V ÷ 3 lamps = 2 V across each lamp."},
    {q:"Two resistors of 3 Ω and 7 Ω are connected in series. What is the total resistance?",
     opts:["4 Ω","10 Ω","2.1 Ω","21 Ω"], c:1,
     e:"In series, total resistance = R₁ + R₂ = 3 + 7 = 10 Ω. Resistances simply add together because the current passes through each one in turn."},
    {q:"In a parallel circuit, the voltage across each branch is:",
     opts:["Different for each branch","Shared between branches","The same as the supply voltage","Zero"], c:2,
     e:"In parallel, each branch is connected directly across the supply, so the voltage across every branch equals the supply voltage."},
    {q:"Why does adding more lamps in parallel to a circuit make each lamp brighter than in series?",
     opts:["Each lamp gets more current because resistance increases","Each lamp gets the full supply voltage and its own path for current","The battery produces more voltage","The wire has less resistance in parallel"], c:1,
     e:"In parallel, each lamp receives the full supply voltage and operates independently. Each has its own path for current flow, so adding more lamps does not affect the brightness of the others (assuming the battery can supply enough current)."},
    {q:"The current through a series circuit with a 12 V battery and total resistance of 4 Ω is:",
     opts:["3 A","48 A","0.33 A","16 A"], c:0,
     e:"Using V = IR: I = V ÷ R = 12 ÷ 4 = 3 A. In a series circuit, this current flows through every component."}
  ],
  "s10i-11-2": [
    {q:"A lamp operates at 12 V with a current of 2 A. What is its power?",
     opts:["6 W","14 W","24 W","144 W"], c:2,
     e:"P = I × V = 2 × 12 = 24 W. The lamp transfers 24 joules of electrical energy per second."},
    {q:"How much energy does a 100 W light bulb transfer in 60 seconds?",
     opts:["0.6 J","60 J","6000 J","100 J"], c:2,
     e:"E = P × t = 100 × 60 = 6000 J. Energy = power × time, where power is in watts and time is in seconds."},
    {q:"A 3 kW oven runs for 2 hours. How many kWh of energy does it use?",
     opts:["6 kWh","1.5 kWh","5 kWh","600 kWh"], c:0,
     e:"E = P × t = 3 kW × 2 h = 6 kWh. When calculating kWh, use power in kW and time in hours (not watts and seconds)."},
    {q:"The electricity cost is 28p per kWh. A 2 kW heater runs for 5 hours. What is the cost?",
     opts:["£1.40","£2.80","£14.00","£0.28"], c:1,
     e:"E = 2 × 5 = 10 kWh. Cost = 10 × 28p = 280p = £2.80."},
    {q:"Which formula would you use to calculate the power dissipated by a resistor if you know the current and resistance?",
     opts:["P = I × V","P = I² × R","P = V ÷ I","P = R × V"], c:1,
     e:"P = I²R is used when you know current and resistance but not voltage. This is derived from P = IV combined with V = IR."}
  ],
  "s10i-11-3": [
    {q:"What colour is the live wire in a UK three-pin plug?",
     opts:["Blue","Green and yellow","Brown","Red"], c:2,
     e:"The live wire is brown. The neutral wire is blue. The earth wire is green and yellow striped. These colour codes are standard in the UK and must be remembered."},
    {q:"What is the frequency and voltage of the UK mains supply?",
     opts:["230 V, 50 Hz","120 V, 60 Hz","230 V, 60 Hz","120 V, 50 Hz"], c:0,
     e:"The UK mains supply provides approximately 230 V of alternating current at a frequency of 50 Hz. This means the current changes direction 50 times per second."},
    {q:"A device normally draws 4 A. Which fuse should be used?",
     opts:["3 A","5 A","13 A","1 A"], c:1,
     e:"The fuse rating should be just above the normal operating current. A 5 A fuse is the closest rating above 4 A. A 3 A fuse would blow during normal operation; a 13 A fuse would not protect the device adequately."},
    {q:"What is the role of the earth wire in a three-pin plug?",
     opts:["It carries the current to the appliance","It provides a safe path for current to flow to the ground if a fault occurs","It increases the voltage","It reduces the resistance"], c:1,
     e:"The earth wire connects the metal casing of an appliance to the ground. If a fault causes the live wire to touch the casing, a large current flows safely to earth via the earth wire, blowing the fuse and disconnecting the supply."},
    {q:"Why do double-insulated appliances not need an earth wire?",
     opts:["They use lower voltage","Their plastic casing cannot become live, so there is no risk of electric shock","They have thicker fuses","They only use direct current"], c:1,
     e:"Double-insulated appliances have a plastic outer casing that does not conduct electricity. Even if a fault occurs inside, the user cannot touch any live metal parts, so an earth wire is unnecessary."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-11-1': `
<h2>Series &amp; Parallel Rules</h2>
<div class="lesson-diagram" data-diagram="circuit-comparison"><p class="diagram-caption">Series and parallel circuits</p></div>
<p>Electrical circuits come in two basic arrangements: <strong>series</strong> (one path) and <strong>parallel</strong> (multiple paths). The rules for current and voltage are different in each, and understanding these is essential for circuit analysis.</p>

<h3>Series Circuits</h3>
<ul>
  <li><strong>Current:</strong> the same through every component (I₁ = I₂ = I₃)</li>
  <li><strong>Voltage:</strong> shared between components (V<sub>total</sub> = V₁ + V₂ + V₃)</li>
  <li><strong>Resistance:</strong> R<sub>total</sub> = R₁ + R₂ + R₃</li>
</ul>

<h3>Parallel Circuits</h3>
<ul>
  <li><strong>Voltage:</strong> the same across each branch (V₁ = V₂ = V<sub>supply</sub>)</li>
  <li><strong>Current:</strong> shared between branches (I<sub>total</sub> = I₁ + I₂ + I₃)</li>
  <li><strong>Resistance:</strong> total resistance is less than the smallest individual resistor</li>
</ul>
<p>This last point can seem surprising. Adding a resistor in <strong>parallel</strong> always <em>reduces</em> the total resistance to a value <strong>less than the smallest individual resistor</strong>. This is because each extra resistor provides another path for the current to flow. With more paths available, the total current drawn from the supply increases, and since R = V &divide; I a larger current for the same potential difference means a smaller total resistance.</p>

<h3>Ohm&rsquo;s Law</h3>
<p>The relationship between potential difference, current and resistance is given by Ohm&rsquo;s law:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>V = I &times; R</strong></p>
<ul>
  <li><strong>V</strong> = potential difference, in volts (V)</li>
  <li><strong>I</strong> = current, in amps (A)</li>
  <li><strong>R</strong> = resistance, in ohms (&Omega;)</li>
</ul>
<p>This can be rearranged to I = V &divide; R or R = V &divide; I, and is used throughout circuit analysis.</p>

<h3>Worked Example</h3>
<p>A series circuit contains a 9 V battery and two resistors: 3 &Omega; and 6 &Omega;. Calculate the current and the voltage across each resistor.</p>
<p>Total resistance = 3 + 6 = 9 &Omega;<br>
Current: I = V &divide; R = 9 &divide; 9 = <strong>1 A</strong> (same throughout)<br>
Voltage across 3 &Omega; resistor: V = IR = 1 &times; 3 = <strong>3 V</strong><br>
Voltage across 6 &Omega; resistor: V = IR = 1 &times; 6 = <strong>6 V</strong><br>
Check: 3 V + 6 V = 9 V &check;</p>

<h3>Common Mistake</h3>
<p>Students often confuse the rules, applying series rules to parallel circuits and vice versa. A useful way to remember: in <em>series</em>, the current is the <em>same</em> (it has no choice — one path). In <em>parallel</em>, the voltage is the <em>same</em> (each branch connects directly to the supply).</p>
`,

's10i-11-2': `
<h2>Power &amp; Energy in Circuits</h2>
<p>Power is the rate at which energy is transferred. In electrical circuits, we can calculate power and energy using simple equations, and work out the cost of running electrical devices.</p>

<h3>Power Equations</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>P = I &times; V &nbsp;&nbsp;&nbsp; P = I² &times; R</strong></p>
<p>Where P is power (W), I is current (A), V is voltage (V), R is resistance (&Omega;).</p>

<h3>Energy Transferred</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>E = P &times; t &nbsp;&nbsp;&nbsp; E = I &times; V &times; t</strong></p>
<p>Where E is energy (J) and t is time (s).</p>

<h3>Charge Flow and Energy Transferred</h3>
<p>Charge is carried by the moving charged particles in a circuit. The charge that flows depends on the current and the time for which it flows:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Q = I &times; t</strong></p>
<ul>
  <li><strong>Q</strong> = charge, in coulombs (C)</li>
  <li><strong>I</strong> = current, in amps (A)</li>
  <li><strong>t</strong> = time, in seconds (s)</li>
</ul>
<p>The energy transferred when charge flows through a potential difference is:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>E = Q &times; V</strong></p>
<ul>
  <li><strong>E</strong> = energy transferred, in joules (J)</li>
  <li><strong>Q</strong> = charge, in coulombs (C)</li>
  <li><strong>V</strong> = potential difference, in volts (V)</li>
</ul>

<h3>Worked Example: Charge and Energy</h3>
<p>A current of 3 A flows for 120 s. Calculate the charge that flows, then the energy transferred if the potential difference is 230 V.</p>
<p>Charge: Q = I &times; t = 3 &times; 120 = <strong>360 C</strong><br>
Energy: E = Q &times; V = 360 &times; 230 = <strong>82 800 J</strong> (82.8 kJ)</p>

<h3>Cost of Electricity</h3>
<p>Electricity bills use kilowatt-hours (kWh):</p>
<ul>
  <li>Energy (kWh) = power (kW) &times; time (hours)</li>
  <li>Cost = energy (kWh) &times; price per kWh</li>
</ul>

<h3>Worked Example</h3>
<p>A 2.5 kW tumble dryer runs for 1.5 hours. Electricity costs 28p per kWh. Calculate the cost.</p>
<p>Energy = 2.5 &times; 1.5 = 3.75 kWh<br>
Cost = 3.75 &times; 28 = 105p = <strong>&pound;1.05</strong></p>

<h3>Common Mistake</h3>
<p>When calculating cost, students often mix up units — using watts instead of kilowatts, or seconds instead of hours. For kWh calculations, always use <em>kW</em> (divide watts by 1000) and <em>hours</em> (divide seconds by 3600).</p>
`,

's10i-11-3': `
<h2>Mains Electricity &amp; Safety</h2>
<p>Understanding the UK mains supply and electrical safety is vital — mains electricity at 230 V can be lethal if misused. You need to know how a plug is wired and how fuses, earth wires and RCDs protect users.</p>

<h3>UK Mains Supply</h3>
<ul>
  <li><strong>Type:</strong> alternating current (ac) — current direction reverses repeatedly</li>
  <li><strong>Voltage:</strong> approximately 230 V</li>
  <li><strong>Frequency:</strong> 50 Hz (current changes direction 50 times per second)</li>
</ul>

<h3>The Three-Pin Plug</h3>
<ul>
  <li><strong>Live (brown)</strong> — carries the current at high voltage</li>
  <li><strong>Neutral (blue)</strong> — completes the circuit; approximately 0 V</li>
  <li><strong>Earth (green and yellow)</strong> — safety wire; only carries current during a fault</li>
</ul>
<p>The fuse is always connected in the <strong>live wire</strong>, so that when it blows, no current reaches the appliance through the live wire.</p>

<h3>Safety Devices</h3>
<ul>
  <li><strong>Fuse</strong> — melts and breaks the circuit if current exceeds the rating</li>
  <li><strong>Earth wire</strong> — carries fault current to ground, triggering the fuse</li>
  <li><strong>RCD (Residual Current Device)</strong> — detects imbalance between live and neutral currents and disconnects in milliseconds</li>
</ul>

<h3>Worked Example</h3>
<p>A toaster operates at 230 V and has a power rating of 920 W. What fuse should be used?</p>
<p>I = P &divide; V = 920 &divide; 230 = 4 A<br>
The fuse should be just above the normal current. Standard fuse values are 3 A, 5 A and 13 A.<br>
Use a <strong>5 A</strong> fuse (a 3 A fuse would blow during normal use; 13 A is too high to protect the device).</p>

<h3>Common Mistake</h3>
<p>Students often forget that the fuse must be in the <em>live</em> wire. If it were in the neutral wire, the appliance could still be connected to the dangerous live supply even after the fuse blew, creating a serious electrocution risk.</p>
`

});

// ── APPENDED ISLANDS: s10i-11-4, s10i-11-5 ───────────────────────────────────

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-11-4 — Circuit Components & I–V Characteristics
  {id:"s10fc-11-4-1", islandId:"s10i-11-4", front:"Describe the I–V characteristic of an ohmic resistor at constant temperature.",
   back:"For an ohmic resistor (a fixed resistor at constant temperature):\n\n• The I–V graph is a STRAIGHT LINE through the ORIGIN\n• Current is directly proportional to potential difference (I ∝ V)\n• The resistance is CONSTANT\n\nThis obeys Ohm's law: V = I × R, so the gradient of an I–V graph (I against V) equals 1 ÷ R.", difficulty:1, category:"concept"},
  {id:"s10fc-11-4-2", islandId:"s10i-11-4", front:"Why is the I–V graph of a filament lamp an S-shaped curve?",
   back:"As the current increases, the filament gets hotter.\n\nThe higher temperature makes the metal ions vibrate more, so they obstruct the flow of electrons more. This means the RESISTANCE INCREASES as the lamp heats up.\n\nBecause resistance rises with current, equal increases in pd produce smaller and smaller increases in current — the curve gradient decreases, giving the characteristic S-shape.\n\nA filament lamp is therefore a non-ohmic component.", difficulty:2, category:"concept"},
  {id:"s10fc-11-4-3", islandId:"s10i-11-4", front:"Describe the I–V characteristic of a diode.",
   back:"A diode only allows current to flow in ONE direction (the forward direction).\n\n• Forward direction: very little current flows until a small threshold pd is reached, then current rises sharply\n• Reverse direction: the resistance is VERY HIGH, so almost no current flows\n\nThe I–V graph is flat (near zero) for negative pd and curves upward for positive pd. Diodes are used to make sure current flows the correct way round.", difficulty:2, category:"concept"},
  {id:"s10fc-11-4-4", islandId:"s10i-11-4", front:"How do the resistances of an LDR and a thermistor change, and what are they used for?",
   back:"LDR (light-dependent resistor):\n• Resistance FALLS as light intensity INCREASES\n• Used in light sensors, e.g. automatic street lights and camera light meters\n\nThermistor:\n• Resistance FALLS as temperature INCREASES\n• Used in temperature sensors, e.g. thermostats, ovens and fire alarms\n\nBoth are used in sensing circuits to detect and respond to changes in their surroundings.", difficulty:2, category:"application"},
  {id:"s10fc-11-4-5", islandId:"s10i-11-4", front:"Describe the I–V required practical.",
   back:"Aim: investigate how current varies with potential difference for a component.\n\nMethod:\n1. Connect the component in series with an ammeter and a variable resistor\n2. Connect a voltmeter in parallel across the component\n3. Adjust the variable resistor to change the pd across the component\n4. Record several pairs of current (I) and potential difference (V) readings\n5. Reverse the connections to the battery to obtain negative values\n6. Plot a graph of current (y-axis) against potential difference (x-axis)\n\nThe shape of the graph reveals the component's I–V characteristic.", difficulty:2, category:"application"},

  // s10i-11-5 — Static Electricity & Electric Fields
  {id:"s10fc-11-5-1", islandId:"s10i-11-5", front:"How does an insulator become charged by friction?",
   back:"When two insulators are rubbed together, ELECTRONS are transferred from one to the other.\n\n• The material that GAINS electrons becomes NEGATIVELY charged\n• The material that LOSES electrons becomes POSITIVELY charged\n\nOnly electrons move — the positive nuclei stay fixed. For example, rubbing a polythene rod with a cloth gives the rod a negative charge as it gains electrons from the cloth.", difficulty:1, category:"concept"},
  {id:"s10fc-11-5-2", islandId:"s10i-11-5", front:"State the rule for forces between electric charges.",
   back:"• LIKE charges REPEL (two positives, or two negatives, push apart)\n• OPPOSITE charges ATTRACT (a positive and a negative pull together)\n\nThis is a non-contact force, acting through the electric field around each charged object. The force gets stronger as the charges are brought closer together.", difficulty:1, category:"definition"},
  {id:"s10fc-11-5-3", islandId:"s10i-11-5", front:"What is an electric field and how is its strength shown?",
   back:"An electric field is the region around a charged object where another charge experiences a force.\n\n• Shown using FIELD LINES with arrows\n• Arrows point AWAY from a positive charge and TOWARDS a negative charge\n• The field is STRONGER where the lines are CLOSER together — i.e. nearer the charge\n\nThe closer you are to the charged object, the stronger the field and the larger the force on another charge.", difficulty:2, category:"definition"},
  {id:"s10fc-11-5-4", islandId:"s10i-11-5", front:"Explain how a spark is produced by static electricity.",
   back:"As charge builds up on an object, the electric field around it becomes stronger.\n\nIf the field becomes strong enough, it can IONISE the air — pulling electrons off air molecules so the air becomes a conductor.\n\nCharge then flows suddenly through the ionised air, which we see and hear as a SPARK (and feel as a shock). This is also the cause of lightning, where huge charges build up in clouds.", difficulty:2, category:"concept"},
  {id:"s10fc-11-5-5", islandId:"s10i-11-5", front:"Why do you sometimes get a shock after walking across a carpet?",
   back:"Walking across a carpet rubs your shoes against it, transferring electrons by friction. Your body becomes charged (you are an insulator from the ground if wearing rubber-soled shoes).\n\nWhen you then touch a metal object (e.g. a door handle), the charge flows quickly to earth through the conductor.\n\nThis sudden movement of charge is felt as a small electric shock, and may produce a tiny spark as the air briefly ionises.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-11-4": [
    {q:"The I–V graph of a component is a straight line through the origin. What does this tell you?",
     opts:["The resistance increases with current","The resistance is constant (ohmic conductor)","Current only flows one way","The component is a diode"], c:1,
     e:"A straight line through the origin means current is directly proportional to potential difference, so the resistance is constant. This is the characteristic of an ohmic conductor, such as a fixed resistor at constant temperature."},
    {q:"Why does the resistance of a filament lamp increase as the current increases?",
     opts:["The filament cools down","The filament heats up, so the metal ions vibrate more and obstruct the electrons","The voltage decreases","Electrons are used up"], c:1,
     e:"A larger current heats the filament. The hotter metal ions vibrate more vigorously, making it harder for electrons to pass, so the resistance increases. This produces the S-shaped I–V curve."},
    {q:"What is the key property of a diode?",
     opts:["It has constant resistance","It only allows current to flow in one direction","Its resistance falls with light","It stores charge"], c:1,
     e:"A diode allows current to flow in one direction only (the forward direction). In the reverse direction its resistance is very high, so virtually no current flows."},
    {q:"How does the resistance of an LDR change as the light gets brighter?",
     opts:["It increases","It decreases","It stays the same","It becomes infinite"], c:1,
     e:"In a light-dependent resistor (LDR), resistance falls as light intensity increases. This makes LDRs useful in light-sensing circuits such as automatic street lights."},
    {q:"In the I–V required practical, what is the purpose of the variable resistor?",
     opts:["To measure the current","To change the potential difference across the component","To measure the voltage","To protect the voltmeter"], c:1,
     e:"The variable resistor is adjusted to change the current and therefore the potential difference across the component, allowing several pairs of I and V readings to be recorded and plotted."}
  ],
  "s10i-11-5": [
    {q:"A polythene rod is rubbed with a cloth and becomes negatively charged. What has happened?",
     opts:["The rod has lost electrons","The rod has gained electrons from the cloth","The rod has gained protons","The cloth has gained electrons"], c:1,
     e:"Charging by friction transfers electrons. A negatively charged rod has gained electrons; the cloth, which lost those electrons, becomes positively charged. Only electrons move."},
    {q:"Two objects both carry a positive charge. What force acts between them?",
     opts:["They attract","They repel","No force acts","They first attract then repel"], c:1,
     e:"Like charges repel. Two positively charged objects push apart. Only opposite charges (one positive, one negative) attract each other."},
    {q:"Where is an electric field strongest around a charged sphere?",
     opts:["Far from the sphere","Nearest to the sphere where field lines are closest together","Field strength is the same everywhere","At the centre only"], c:1,
     e:"The electric field is strongest where the field lines are closest together, which is nearest to the charged object. The field gets weaker with distance as the lines spread out."},
    {q:"What happens when the electric field around a charged object becomes strong enough?",
     opts:["The charge disappears","It ionises the air, allowing a spark to jump","The object gains mass","The field reverses direction"], c:1,
     e:"A very strong electric field can ionise the air (knock electrons off air molecules), turning it into a conductor. Charge then flows suddenly through the air, producing a spark."},
    {q:"In which direction do electric field lines point around a single negative charge?",
     opts:["Away from the charge","Towards the charge","In circles around the charge","There are no field lines"], c:1,
     e:"Field lines point in the direction of the force on a positive test charge. Around a negative charge, the lines point inwards, towards the charge. Around a positive charge they point outwards."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-11-4': `
<h2>Circuit Components &amp; I&ndash;V Characteristics</h2>
<div class="lesson-diagram" data-diagram="circuit-symbols"><p class="diagram-caption">Standard circuit symbols for common components</p></div>
<p>An <strong>I&ndash;V characteristic</strong> is a graph of current (I) against potential difference (V) for a component. Its shape tells us how the resistance of that component behaves. Some components have constant resistance; others change as conditions change.</p>

<h3>Ohmic Resistor</h3>
<p>For a fixed resistor kept at constant temperature, the I&ndash;V graph is a <strong>straight line through the origin</strong>. Current is directly proportional to potential difference (I &prop; V), so the <strong>resistance is constant</strong>. This obeys Ohm&rsquo;s law:</p>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>V = I &times; R</strong></p>
<p>where V is potential difference (V), I is current (A) and R is resistance (&Omega;).</p>

<h3>Filament Lamp</h3>
<p>The I&ndash;V graph of a filament lamp is an <strong>S-shaped curve</strong>. As current increases, the filament heats up. The hot metal ions vibrate more and obstruct the electrons, so the <strong>resistance increases</strong>. The curve becomes less steep at higher pd because larger increases in voltage produce smaller increases in current.</p>

<h3>Diode</h3>
<p>A diode allows current to flow in <strong>one direction only</strong>. In the forward direction, very little current flows until a small threshold pd is reached, then current rises sharply. In the reverse direction the resistance is <strong>very high</strong>, so almost no current flows.</p>

<h3>LDR and Thermistor (Sensors)</h3>
<ul>
  <li><strong>LDR (light-dependent resistor):</strong> resistance <em>falls</em> as light gets brighter. Used in light sensors such as automatic street lights.</li>
  <li><strong>Thermistor:</strong> resistance <em>falls</em> as temperature rises. Used in temperature sensors such as thermostats and fire alarms.</li>
</ul>

<h3>Required Practical: I&ndash;V Characteristics</h3>
<p>Connect the component in series with an ammeter and a variable resistor, and a voltmeter in parallel across it. Adjust the variable resistor to change the pd, recording pairs of I and V readings. Reverse the battery to get negative values, then plot current against potential difference.</p>

<h3>Worked Example</h3>
<p>An ohmic resistor carries a current of 0.4 A when the pd across it is 6 V. Calculate its resistance, and predict the current when the pd is increased to 9 V.</p>
<p>R = V &divide; I = 6 &divide; 0.4 = <strong>15 &Omega;</strong><br>
Because the resistor is ohmic, R stays constant. At 9 V: I = V &divide; R = 9 &divide; 15 = <strong>0.6 A</strong></p>

<h3>Common Mistake</h3>
<p>Students often assume every component obeys Ohm&rsquo;s law. Only an ohmic resistor at constant temperature has a straight-line I&ndash;V graph. A filament lamp and a diode are <em>non-ohmic</em> &mdash; their resistance changes, so you cannot use a single fixed value of R across the whole graph.</p>
`,

's10i-11-5': `
<h2>Static Electricity &amp; Electric Fields</h2>
<p>Static electricity is the build-up of electric charge on the surface of an insulator. It explains everyday effects such as shocks, sparks and clinging materials, and introduces the idea of an electric field.</p>

<h3>Charging by Friction</h3>
<p>When two insulators are rubbed together, <strong>electrons are transferred</strong> from one to the other. Only electrons move &mdash; the positive nuclei stay put.</p>
<ul>
  <li>The material that <strong>gains electrons</strong> becomes <strong>negatively charged</strong>.</li>
  <li>The material that <strong>loses electrons</strong> becomes <strong>positively charged</strong>.</li>
</ul>
<p>For example, rubbing a polythene rod with a cloth gives the rod a negative charge because it gains electrons from the cloth.</p>

<h3>Forces Between Charges</h3>
<ul>
  <li><strong>Like charges repel</strong> (two positives, or two negatives, push apart).</li>
  <li><strong>Opposite charges attract</strong> (a positive and a negative pull together).</li>
</ul>
<p>This is a <strong>non-contact force</strong>: the charges affect each other without touching, through the electric field around them. The force is stronger when the charges are closer.</p>

<h3>Electric Fields</h3>
<p>An <strong>electric field</strong> is the region around a charged object where another charge feels a force. We draw it using <strong>field lines</strong> with arrows that point away from a positive charge and towards a negative charge. The field is <strong>stronger nearer the charge</strong>, shown by the field lines being closer together. As you move away, the lines spread out and the field weakens.</p>

<h3>Sparks and Shocks</h3>
<p>As charge builds up, the electric field around the object grows stronger. If the field becomes strong enough, it can <strong>ionise the air</strong> &mdash; pulling electrons off air molecules so the air becomes a conductor. Charge then flows suddenly through the ionised air, which we see as a <strong>spark</strong> and feel as a shock. Lightning is a large-scale example.</p>

<h3>Worked Example</h3>
<p>A balloon is rubbed on a jumper and then sticks to a wall. Explain, using charge, why this happens.</p>
<p>Rubbing transfers electrons to the balloon, giving it a <strong>negative charge</strong>. When held near the neutral wall, the balloon&rsquo;s field pushes electrons in the wall&rsquo;s surface slightly away, leaving the near surface of the wall <strong>positively charged</strong> (induced charge). The opposite charges <strong>attract</strong>, so the balloon sticks.</p>

<h3>Common Mistake</h3>
<p>Students sometimes say protons are transferred when an object is charged. This is wrong &mdash; protons are locked in the nuclei and do not move. Charging always involves the transfer of <em>electrons</em> only: gaining electrons gives a negative charge, losing them gives a positive charge.</p>
`

});
