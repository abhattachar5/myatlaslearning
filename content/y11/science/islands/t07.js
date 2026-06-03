// science-y11-t07.js — Year 11 Science Topic 7: Magnetism & Electromagnetism
// Islands: s11i-07-1 .. s11i-07-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-07-1 — Magnetic Fields
  {id:"s11fc-07-1-1",islandId:"s11i-07-1",front:"What is a magnetic field?",
   back:"A magnetic field is the region around a magnet where a magnetic force is experienced by other magnetic materials or moving charges.\n\nField lines go from north to south outside the magnet. The closer the lines, the stronger the field.",difficulty:1,category:"definition"},
  {id:"s11fc-07-1-2",islandId:"s11i-07-1",front:"Describe the magnetic field around a solenoid.",
   back:"A solenoid (coil of wire carrying a current) produces a field identical to a bar magnet.\n\nThe field is strong and uniform inside the coil, with north and south poles at opposite ends. Outside, the field lines curve from north to south, just like a bar magnet.",difficulty:2,category:"concept"},
  {id:"s11fc-07-1-3",islandId:"s11i-07-1",front:"How can you increase the strength of an electromagnet?",
   back:"1. Increase the current through the coil.\n2. Increase the number of turns (coils) of wire.\n3. Add a soft iron core inside the solenoid.\n\nAll three increase the magnetic field strength.",difficulty:2,category:"application"},
  {id:"s11fc-07-1-4",islandId:"s11i-07-1",front:"What is the difference between a permanent magnet and an induced magnet?",
   back:"A permanent magnet always produces its own magnetic field (e.g. a bar magnet).\n\nAn induced magnet only becomes magnetic when placed in a magnetic field. When removed, it loses most of its magnetism.\n\nInduced magnets are always attracted, never repelled.",difficulty:2,category:"concept"},
  {id:"s11fc-07-1-5",islandId:"s11i-07-1",front:"How can you determine the direction of the field around a current-carrying wire?",
   back:"Use the right-hand grip rule:\n\nPoint your right thumb in the direction of current (conventional, + to −). Your fingers curl in the direction of the magnetic field lines.\n\nThe field forms concentric circles around the wire.",difficulty:2,category:"application"},

  // s11i-07-2 — The Motor Effect
  {id:"s11fc-07-2-1",islandId:"s11i-07-2",front:"What is the motor effect?",
   back:"When a current-carrying wire is placed in a magnetic field, it experiences a force. This is the motor effect.\n\nThe force is greatest when the wire is perpendicular to the field and zero when parallel.",difficulty:1,category:"definition"},
  {id:"s11fc-07-2-2",islandId:"s11i-07-2",front:"State the equation for the force on a current-carrying conductor in a magnetic field.",
   back:"F = BIl\n\nF = force (N)\nB = magnetic flux density (T, tesla)\nI = current (A)\nl = length of wire in the field (m)\n\nThis applies when the wire is at right angles to the field.",difficulty:2,category:"calculation"},
  {id:"s11fc-07-2-3",islandId:"s11i-07-2",front:"A wire of length 0.25 m carries a current of 3 A in a magnetic field of 0.40 T. Calculate the force.",
   back:"F = BIl = 0.40 × 3 × 0.25 = 0.30 N\n\nRemember: B is the magnetic flux density in tesla, I is the current in amps, and l is the length in metres.",difficulty:2,category:"calculation"},
  {id:"s11fc-07-2-4",islandId:"s11i-07-2",front:"How does Fleming's left-hand rule work?",
   back:"Hold your left hand with thumb, first finger and second finger all at right angles:\n\nFirst finger = Field direction (N to S)\nSeCond finger = Current direction (+ to −)\nThuMb = Motion (force) direction\n\nThis predicts the direction the wire will move.",difficulty:2,category:"application"},
  {id:"s11fc-07-2-5",islandId:"s11i-07-2",front:"Describe how a simple DC motor works.",
   back:"A coil of wire sits in a magnetic field. When current flows, the motor effect produces forces on each side of the coil in opposite directions, causing it to spin.\n\nA split-ring commutator reverses the current direction every half turn, keeping the coil spinning in the same direction.",difficulty:3,category:"concept"},

  // s11i-07-3 — Electromagnetic Induction
  {id:"s11fc-07-3-1",islandId:"s11i-07-3",front:"What is electromagnetic induction?",
   back:"When a conductor moves through a magnetic field (or a magnetic field changes around a conductor), a potential difference (voltage) is induced across the conductor.\n\nIf the conductor is part of a complete circuit, a current flows.",difficulty:2,category:"definition"},
  {id:"s11fc-07-3-2",islandId:"s11i-07-3",front:"How can you increase the induced voltage in electromagnetic induction?",
   back:"1. Move the magnet (or wire) faster.\n2. Use a stronger magnet.\n3. Increase the number of turns on the coil.\n\nReversing the direction of movement reverses the direction of the induced current.",difficulty:2,category:"application"},
  {id:"s11fc-07-3-3",islandId:"s11i-07-3",front:"State the transformer equation.",
   back:"Vp / Vs = Np / Ns\n\nVp = primary voltage (V)\nVs = secondary voltage (V)\nNp = number of turns on primary coil\nNs = number of turns on secondary coil\n\nAlso: Vp × Ip = Vs × Is (for a 100% efficient transformer).",difficulty:2,category:"calculation"},
  {id:"s11fc-07-3-4",islandId:"s11i-07-3",front:"A transformer has 200 primary turns and 1000 secondary turns. The input voltage is 25 V. Find the output voltage.",
   back:"Vp / Vs = Np / Ns\n25 / Vs = 200 / 1000\nVs = 25 × (1000 / 200) = 25 × 5 = 125 V\n\nThis is a step-up transformer (more turns on the secondary → higher voltage).",difficulty:2,category:"calculation"},
  {id:"s11fc-07-3-5",islandId:"s11i-07-3",front:"What is the difference between a step-up and a step-down transformer?",
   back:"Step-up transformer: more turns on the secondary coil → output voltage is higher than input voltage.\n\nStep-down transformer: fewer turns on the secondary coil → output voltage is lower than input voltage.\n\nTransformers only work with alternating current (AC).",difficulty:1,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-07-1":[
    {q:"Magnetic field lines around a bar magnet go from:",opts:["South to north","North to south","East to west","Inside the magnet only"],c:1,e:"Outside the magnet, field lines always run from the north pole to the south pole. Inside the magnet, they run from south to north, forming continuous loops."},
    {q:"Which of these will increase the strength of an electromagnet?",opts:["Decreasing the current","Using fewer turns of wire","Adding a soft iron core","Using a wooden core"],c:2,e:"A soft iron core concentrates the magnetic field, making the electromagnet much stronger. Increasing current and adding more turns also help, but a wooden core has no magnetic effect."},
    {q:"An induced magnet is always:",opts:["Repelled by permanent magnets","Attracted to permanent magnets","Stronger than permanent magnets","Unaffected by permanent magnets"],c:1,e:"An induced magnet is magnetised by the field of a nearby permanent magnet. The nearest pole of the induced magnet is always the opposite pole, so it is always attracted."},
    {q:"The magnetic field inside a solenoid is:",opts:["Curved and weak","Strong and uniform","Zero","Only present when there is no current"],c:1,e:"Inside a solenoid carrying a current, the magnetic field is strong and uniform (field lines are parallel and evenly spaced). This makes solenoids very useful as electromagnets."},
    {q:"The right-hand grip rule is used to find:",opts:["The force on a wire","The direction of the magnetic field around a current-carrying wire","The voltage induced in a coil","The resistance of the wire"],c:1,e:"Thumb points in the direction of current; curling fingers show the direction of the circular magnetic field lines around the wire."}
  ],
  "s11i-07-2":[
    {q:"A wire 0.50 m long carries a current of 4.0 A in a field of 0.20 T. What is the force on the wire?",opts:["0.10 N","0.40 N","0.50 N","4.0 N"],c:1,e:"F = BIl = 0.20 × 4.0 × 0.50 = 0.40 N. Make sure the wire is perpendicular to the field for this equation to apply directly."},
    {q:"Fleming's left-hand rule: the thumb represents:",opts:["Field direction","Current direction","Motion (force) direction","Voltage"],c:2,e:"In Fleming's left-hand rule: First finger = Field, seCond finger = Current, thuMb = Motion (the direction of the force or movement)."},
    {q:"The force on a conductor in a magnetic field is zero when:",opts:["The current is very large","The wire is perpendicular to the field","The wire is parallel to the field","The magnetic field is strong"],c:2,e:"When the wire is parallel to the field lines, there is no component of the field cutting across the current, so no force is produced. Maximum force occurs when the wire is perpendicular to the field."},
    {q:"In a DC motor, what is the role of the split-ring commutator?",opts:["To increase the current","To reverse the current direction every half turn","To create a magnetic field","To reduce friction"],c:1,e:"Without the commutator, the coil would rotate half a turn then stop (or oscillate). The split ring reverses the current every half turn, ensuring the force always pushes the coil in the same rotational direction."},
    {q:"How could you increase the force on the wire in a motor?",opts:["Use a weaker magnet","Decrease the current","Increase both the current and the magnetic field strength","Shorten the wire to zero length"],c:2,e:"F = BIl — increasing B (stronger magnet) and I (more current) both increase the force. A longer wire in the field (larger l) also helps. Shortening to zero would give zero force."}
  ],
  "s11i-07-3":[
    {q:"A transformer has 100 primary turns and 500 secondary turns. If the input is 12 V, what is the output?",opts:["2.4 V","12 V","60 V","600 V"],c:2,e:"Vp/Vs = Np/Ns → 12/Vs = 100/500 → Vs = 12 × 5 = 60 V. More turns on the secondary means this is a step-up transformer."},
    {q:"Why do transformers only work with alternating current (AC)?",opts:["DC would melt the transformer","AC is cheaper to produce","A changing current is needed to create a changing magnetic field, which induces a voltage","DC has no voltage"],c:2,e:"Electromagnetic induction requires a changing magnetic field. AC constantly changes direction, producing a continuously changing field in the iron core, which induces a voltage in the secondary coil. DC produces a steady field — no induction."},
    {q:"An efficient transformer has Vp = 230 V, Ip = 2 A and Vs = 23 V. What is Is?",opts:["0.2 A","2 A","20 A","200 A"],c:2,e:"For a 100% efficient transformer: Vp × Ip = Vs × Is → 230 × 2 = 23 × Is → Is = 460/23 = 20 A. Stepping down the voltage steps up the current."},
    {q:"Which action would NOT increase the induced voltage when moving a magnet into a coil?",opts:["Moving the magnet faster","Using a stronger magnet","Using more turns on the coil","Moving the magnet at a constant slow speed"],c:3,e:"Moving the magnet slowly gives a smaller rate of change of field, producing a smaller voltage. To increase the induced voltage you need to move faster, use a stronger magnet or more coil turns."},
    {q:"Electromagnetic induction occurs when:",opts:["A magnet is held stationary inside a coil","A conductor moves through a magnetic field","A battery is connected to a coil","An electromagnet is switched off and stays off"],c:1,e:"Induction requires a change in the magnetic field experienced by the conductor. Moving the conductor through a field (or moving the field past the conductor) causes this change and induces a voltage."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-07-1': `
<h2>Magnetic Fields</h2>
<p>A <strong>magnetic field</strong> is an invisible region around a magnet where a force acts on magnetic materials or moving charges. We represent fields using <strong>field lines</strong> — they show the direction and strength of the field.</p>

<h3>Bar magnets</h3>
<p>Field lines go from the <strong>north pole</strong> to the <strong>south pole</strong> outside the magnet. The closer together the lines, the stronger the field. Like poles repel; unlike poles attract.</p>

<h3>Current-carrying wires and solenoids</h3>
<p>A wire carrying a current creates a circular magnetic field around it. Use the <strong>right-hand grip rule</strong>: thumb points in the direction of current, fingers curl in the direction of the field.</p>
<p>A <strong>solenoid</strong> (coil of wire) produces a field that looks just like a bar magnet — strong and uniform inside, with north and south poles at the ends.</p>

<h3>Electromagnets</h3>
<p>An electromagnet is a solenoid that can be switched on and off. Its strength can be increased by:</p>
<ul>
<li>Increasing the <strong>current</strong></li>
<li>Adding more <strong>turns</strong> of wire</li>
<li>Adding a <strong>soft iron core</strong></li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> A student wraps 50 turns of wire around a nail and connects it to a battery. The electromagnet picks up 8 paperclips. Suggest how to make it pick up more.</p>
<p><strong>A:</strong> Increase the number of turns of wire (e.g. to 100 turns) or increase the current by adding another battery cell. Both increase the magnetic field strength of the electromagnet.</p>

<h3>Common mistake</h3>
<p>Students sometimes draw field lines crossing each other. Field lines <strong>never cross</strong> — at any point in space the field has only one direction.</p>`,

's11i-07-2': `
<h2>The Motor Effect</h2>
<p>When a wire carrying a current is placed in a magnetic field, it experiences a <strong>force</strong>. This is the <strong>motor effect</strong>, and it is the principle behind electric motors.</p>

<h3>The equation</h3>
<p><strong>F = BIl</strong></p>
<ul>
<li><strong>F</strong> = force on the conductor (N)</li>
<li><strong>B</strong> = magnetic flux density (T, tesla)</li>
<li><strong>I</strong> = current (A)</li>
<li><strong>l</strong> = length of wire in the field (m)</li>
</ul>
<p>This equation applies when the wire is at <strong>right angles</strong> to the magnetic field. If the wire is parallel to the field, the force is zero.</p>

<h3>Fleming's left-hand rule</h3>
<p>Hold your left hand with thumb, first finger and second finger all at right angles:</p>
<ul>
<li><strong>F</strong>irst finger = <strong>F</strong>ield (N → S)</li>
<li>Se<strong>C</strong>ond finger = <strong>C</strong>urrent (+ → −)</li>
<li>Thu<strong>M</strong>b = <strong>M</strong>otion (force)</li>
</ul>

<h3>The DC motor</h3>
<p>A rectangular coil sits between two magnets. Current flows through the coil, and the motor effect pushes each side in opposite directions, causing rotation. A <strong>split-ring commutator</strong> reverses the current every half turn so the coil keeps spinning in one direction.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A 0.30 m wire carries 5.0 A in a 0.15 T field. Calculate the force.</p>
<p><strong>A:</strong> F = BIl = 0.15 × 5.0 × 0.30 = <strong>0.225 N</strong>.</p>

<h3>Common mistake</h3>
<p>Students confuse Fleming's <strong>left</strong>-hand rule (motors — force on a current in a field) with the <strong>right</strong>-hand rule (generators — induced current). Left = motor, right = generator.</p>`,

's11i-07-3': `
<h2>Electromagnetic Induction</h2>
<p>If a conductor experiences a <strong>changing magnetic field</strong>, a potential difference (voltage) is <strong>induced</strong> across it. If the conductor is part of a complete circuit, a current flows. This is <strong>electromagnetic induction</strong>.</p>

<h3>Increasing the induced voltage</h3>
<ul>
<li>Move the magnet (or wire) <strong>faster</strong></li>
<li>Use a <strong>stronger</strong> magnet</li>
<li>Increase the <strong>number of turns</strong> on the coil</li>
</ul>
<p>Reversing the direction of motion reverses the direction of the induced current.</p>

<h3>Generators</h3>
<p>A generator is essentially a motor working in reverse. A coil rotates in a magnetic field, and the changing field induces an alternating voltage — this produces <strong>alternating current (AC)</strong>.</p>

<h3>Transformers</h3>
<p>A transformer changes the voltage of an AC supply. It has two coils (primary and secondary) wound around an iron core.</p>
<p><strong>Transformer equation:</strong> Vp / Vs = Np / Ns</p>
<p><strong>Power conservation (100% efficient):</strong> Vp × Ip = Vs × Is</p>
<ul>
<li><strong>Step-up</strong>: Ns &gt; Np → voltage increases, current decreases.</li>
<li><strong>Step-down</strong>: Ns &lt; Np → voltage decreases, current increases.</li>
</ul>

<h3>Worked example</h3>
<p><strong>Q:</strong> A step-down transformer has 4000 primary turns and 200 secondary turns. The input voltage is 400 V. Find the output voltage.</p>
<p><strong>A:</strong> Vp / Vs = Np / Ns<br>
400 / Vs = 4000 / 200<br>
Vs = 400 × (200 / 4000) = 400 × 0.05 = <strong>20 V</strong>.</p>

<h3>Common mistake</h3>
<p>Students forget that transformers only work with <strong>AC</strong>. A steady (DC) current produces a constant magnetic field — no change means no induction and no output voltage.</p>`

});
