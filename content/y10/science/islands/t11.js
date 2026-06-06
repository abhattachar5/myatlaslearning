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
