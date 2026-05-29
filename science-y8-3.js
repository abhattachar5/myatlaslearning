// ══════════════════════════════════════════════════════════════════════
// Year 8 Science — Topic 3: Physics & Working Scientifically
// Islands: s8-13, s8-14, s8-15, s8-16, s8-17
// ══════════════════════════════════════════════════════════════════════

// ──────────────────────────────────────────────────────────────────────
// FLASHCARDS
// ──────────────────────────────────────────────────────────────────────
FLASHCARDS.push(

  // s8-13 Magnetism & Electromagnetism
  {id:"s8fc-13-A",islandId:"s8-13",front:"What is a magnetic field?",
   back:"A magnetic field is the region around a magnet where magnetic forces act.\n\nKey points:\n• Field lines run from north pole to south pole outside the magnet.\n• The closer the field lines, the stronger the field.\n• A compass needle aligns with field lines — it points north because of Earth's magnetic field.",
   difficulty:1,category:"definition"},

  {id:"s8fc-13-B",islandId:"s8-13",front:"What are the rules for magnetic poles?",
   back:"Rule: like poles repel; unlike poles attract.\n\n• North + North → repel (push apart)\n• South + South → repel (push apart)\n• North + South → attract (pull together)\n\nMagnetic materials: iron, nickel, cobalt (and steel, which contains iron).\nNon-magnetic materials (e.g. copper, wood, plastic) are not attracted to magnets.",
   difficulty:1,category:"concept"},

  {id:"s8fc-13-C",islandId:"s8-13",front:"How does an electromagnet work?",
   back:"An electromagnet is a temporary magnet made by passing electric current through a coil of wire (solenoid) wrapped around a soft iron core.\n\nHow it works:\n1. Electric current flows through the coil.\n2. This creates a magnetic field around each turn of wire.\n3. The fields combine to act like a bar magnet — with north and south poles.\n4. When current stops, the iron core loses its magnetism.",
   difficulty:2,category:"process"},

  {id:"s8fc-13-D",islandId:"s8-13",front:"What three factors increase the strength of an electromagnet?",
   back:"An electromagnet is stronger when you:\n1. Increase the current — more current → stronger field.\n2. Increase the number of turns of wire on the coil — more turns → stronger field.\n3. Use a soft iron core — iron concentrates the magnetic field lines.\n\nUsing an iron core (rather than air) can increase the field strength many hundreds of times.",
   difficulty:2,category:"concept"},

  {id:"s8fc-13-E",islandId:"s8-13",front:"Give three applications of electromagnetism.",
   back:"Applications of electromagnetism:\n\n1. Electric motor — current-carrying wire in a magnetic field experiences a force; this force rotates the motor.\n2. Loudspeaker — alternating current through a coil makes it vibrate in a magnetic field, producing sound.\n3. Relay switch — a small current switches an electromagnet on, which closes a second circuit carrying a larger current (used in car starters, safety circuits).\n4. Maglev trains — powerful electromagnets levitate and propel the train.",
   difficulty:3,category:"application"},

  // s8-14 Forces & Motion
  {id:"s8fc-14-A",islandId:"s8-14",front:"What is the equation for speed?",
   back:"Speed (m/s) = distance (m) ÷ time (s)\n\nIn symbols: v = d ÷ t\n\nRearrangements:\n• distance = speed × time\n• time = distance ÷ speed\n\nExample: a car travels 300 m in 12 s.\nSpeed = 300 ÷ 12 = 25 m/s",
   difficulty:1,category:"calculation"},

  {id:"s8fc-14-B",islandId:"s8-14",front:"What do the three sections of a distance–time graph represent?",
   back:"A distance–time graph shows how far an object has travelled over time.\n\nSteep straight line → fast, constant speed\nShallow straight line → slow, constant speed\nHorizontal line (flat) → stationary (not moving)\nCurved line (getting steeper) → accelerating\n\nThe gradient (slope) of the line equals the speed.",
   difficulty:2,category:"concept"},

  {id:"s8fc-14-C",islandId:"s8-14",front:"State Newton's three laws of motion.",
   back:"Newton's First Law: An object stays at rest or moves at constant velocity unless a resultant (unbalanced) force acts on it.\n\nNewton's Second Law: Force = mass × acceleration\n  F = m × a  (F in N, m in kg, a in m/s²)\n\nNewton's Third Law: Every action has an equal and opposite reaction.\n  If A exerts a force on B, then B exerts an equal force back on A — in the opposite direction.",
   difficulty:2,category:"concept"},

  {id:"s8fc-14-D",islandId:"s8-14",front:"What is a resultant force and what does it cause?",
   back:"The resultant force is the overall (net) force on an object after all forces are added, accounting for direction.\n\n• If resultant force = 0 N → balanced forces → object stays still or moves at constant speed (Newton's 1st Law).\n• If resultant force > 0 N → unbalanced forces → the object accelerates (Newton's 2nd Law: F = m × a).\n\nExample: a 500 N driving force and 200 N friction → resultant = 300 N forwards.",
   difficulty:2,category:"concept"},

  {id:"s8fc-14-E",islandId:"s8-14",front:"What is pressure and what is its equation?",
   back:"Pressure is the force acting per unit area.\n\nPressure (Pa) = Force (N) ÷ Area (m²)\n  P = F ÷ A\n\n1 Pascal (Pa) = 1 N/m²\n\nKey idea: the same force spread over a smaller area creates greater pressure.\nExamples:\n• Stiletto heel — small area → very high pressure on floor.\n• Snowshoes — large area → low pressure → don't sink into snow.",
   difficulty:2,category:"calculation"},

  // s8-15 Waves & Sound
  {id:"s8fc-15-A",islandId:"s8-15",front:"What are the key properties of a wave?",
   back:"Amplitude: the maximum displacement of a wave from its rest position (rest position to crest). Measured in metres.\n\nWavelength (λ): the distance from one crest to the next (or trough to trough). Measured in metres.\n\nFrequency (f): the number of complete waves passing a point per second. Measured in hertz (Hz).\n\nWave speed (v): how fast the wave travels. Measured in m/s.",
   difficulty:1,category:"definition"},

  {id:"s8fc-15-B",islandId:"s8-15",front:"What is the difference between transverse and longitudinal waves?",
   back:"Transverse waves: vibrations are perpendicular (at right angles) to the direction of travel.\n  Examples: light waves, water waves, waves on a rope.\n\nLongitudinal waves: vibrations are parallel (along the same line) to the direction of travel. They have compressions and rarefactions.\n  Examples: sound waves, seismic P-waves.\n\nSound is a longitudinal mechanical wave — it needs a medium (e.g. air, water, solids) to travel; it cannot travel through a vacuum.",
   difficulty:2,category:"concept"},

  {id:"s8fc-15-C",islandId:"s8-15",front:"What is the wave speed equation?",
   back:"Wave speed (m/s) = frequency (Hz) × wavelength (m)\n  v = f × λ\n\nRearrangements:\n• f = v ÷ λ\n• λ = v ÷ f\n\nExample: a sound wave has frequency 440 Hz and wavelength 0.75 m.\nWave speed = 440 × 0.75 = 330 m/s\n\n(Speed of sound in air ≈ 330–340 m/s; speed of light ≈ 3 × 10⁸ m/s)",
   difficulty:2,category:"calculation"},

  {id:"s8fc-15-D",islandId:"s8-15",front:"How is sound produced, transmitted, and detected?",
   back:"Produced: a vibrating object (e.g. vocal cords, guitar string) causes particles in the surrounding medium to vibrate.\n\nTransmitted: the vibrations pass as a longitudinal wave through a medium (solid, liquid, or gas). Sound travels faster in solids > liquids > gases.\n\nDetected: the vibrations reach the eardrum, which vibrates in response. The ear converts this to nerve signals sent to the brain.\n\nPitch is determined by frequency (higher frequency → higher pitch).\nLoudness is determined by amplitude (greater amplitude → louder sound).",
   difficulty:2,category:"process"},

  {id:"s8fc-15-E",islandId:"s8-15",front:"What is the electromagnetic spectrum and name its main regions in order of wavelength.",
   back:"The electromagnetic spectrum is the family of transverse waves that can all travel through a vacuum at the speed of light (3 × 10⁸ m/s).\n\nIn order of increasing wavelength (decreasing frequency):\n1. Gamma rays (shortest λ, highest f, most energy)\n2. X-rays\n3. Ultraviolet (UV)\n4. Visible light\n5. Infrared (IR)\n6. Microwaves\n7. Radio waves (longest λ, lowest f, least energy)",
   difficulty:3,category:"concept"},

  // s8-16 Light & Optics
  {id:"s8fc-16-A",islandId:"s8-16",front:"State the law of reflection.",
   back:"The law of reflection: the angle of incidence equals the angle of reflection.\n\n  i = r\n\nBoth angles are measured from the normal (a line perpendicular to the mirror surface at the point of incidence).\n\nKey diagram labels:\n• Incident ray — the ray hitting the mirror.\n• Reflected ray — the ray leaving the mirror.\n• Normal — the dashed line at 90° to the surface.",
   difficulty:1,category:"definition"},

  {id:"s8fc-16-B",islandId:"s8-16",front:"What is refraction and why does it occur?",
   back:"Refraction is the bending of light as it passes from one medium into another of different optical density.\n\nWhy it occurs: light changes speed when it crosses a boundary between materials.\n\nRules:\n• Light slows down when entering a denser medium (e.g. air → glass) and bends towards the normal.\n• Light speeds up when entering a less dense medium (e.g. glass → air) and bends away from the normal.\n• If light hits the boundary at 90° (along the normal), it passes straight through with no bending.",
   difficulty:2,category:"concept"},

  {id:"s8fc-16-C",islandId:"s8-16",front:"Compare convex and concave lenses.",
   back:"Convex lens (converging):\n• Thicker in the middle.\n• Converges (brings together) parallel rays to a focal point.\n• Used in: magnifying glasses, cameras, human eye.\n• Produces a real, inverted image for objects beyond the focal point.\n\nConcave lens (diverging):\n• Thinner in the middle.\n• Diverges (spreads out) parallel rays so they appear to come from a virtual focal point.\n• Used in: spectacles for short-sightedness.\n• Always produces a virtual, upright, diminished image.",
   difficulty:2,category:"concept"},

  {id:"s8fc-16-D",islandId:"s8-16",front:"How does the human eye form an image?",
   back:"How the eye works:\n1. Light enters through the cornea, which refracts it.\n2. The iris controls the size of the pupil (controls how much light enters).\n3. The lens (flexible) changes shape to focus light precisely onto the retina — this is called accommodation.\n4. The retina contains rods (black/white, dim light) and cones (colour, bright light).\n5. The optic nerve carries impulses to the brain.\n\nShort sight (myopia): eyeball too long → image forms in front of retina → corrected with a concave lens.\nLong sight (hyperopia): eyeball too short → image forms behind retina → corrected with a convex lens.",
   difficulty:3,category:"process"},

  {id:"s8fc-16-E",islandId:"s8-16",front:"How do colour filters and mixing coloured light work?",
   back:"White light is a mixture of all colours of the visible spectrum (red, orange, yellow, green, blue, indigo, violet).\n\nColour filters:\n• A filter only transmits its own colour and absorbs all others.\n• A red filter transmits red light and absorbs all other colours.\n\nAdditive colour mixing (coloured light):\n• Red + Green + Blue = White\n• Red + Green = Yellow\n• Red + Blue = Magenta\n• Green + Blue = Cyan\n\nSubtractive mixing (paints/pigments) is the opposite principle — pigments absorb (subtract) certain wavelengths.",
   difficulty:2,category:"concept"},

  // s8-17 Scientific Investigation
  {id:"s8fc-17-A",islandId:"s8-17",front:"What is a hypothesis and how should you write one?",
   back:"A hypothesis is a testable prediction, usually written as an 'if … then … because …' statement.\n\nExample: 'If I increase the length of a pendulum, then the period of its swing will increase, because the pendulum has a greater distance to travel.'\n\nA good hypothesis:\n• Makes a specific, measurable prediction.\n• Gives a reason based on scientific knowledge.\n• Can be tested by experiment.",
   difficulty:1,category:"definition"},

  {id:"s8fc-17-B",islandId:"s8-17",front:"Define independent, dependent, and control variables.",
   back:"Independent variable (IV): the variable you deliberately change in an experiment.\n\nDependent variable (DV): the variable you measure to see the effect of your change.\n\nControl variables: all other variables that you keep the same to make the test fair.\n\nExample (investigating how temperature affects reaction rate):\n• IV = temperature\n• DV = reaction rate (e.g. time for colour change)\n• Control = concentration, volume, surface area of reactant",
   difficulty:1,category:"definition"},

  {id:"s8fc-17-C",islandId:"s8-17",front:"What is a fair test and why is it important?",
   back:"A fair test is an experiment where only the independent variable is changed and all other variables are controlled.\n\nWhy it matters: if you change more than one variable at a time, you cannot tell which change caused the observed effect. Your results would be unreliable.\n\nKey steps for a fair test:\n1. Identify the independent variable (what you change).\n2. Identify the dependent variable (what you measure).\n3. List all control variables and explain how you will keep them the same.",
   difficulty:2,category:"concept"},

  {id:"s8fc-17-D",islandId:"s8-17",front:"How do you improve the reliability of experimental results?",
   back:"Reliability means how consistent (repeatable) your results are.\n\nStrategies to improve reliability:\n1. Repeat each measurement at least three times and calculate a mean.\n2. Identify and ignore anomalous results (outliers) before calculating the mean.\n3. Use precise measuring equipment (e.g. a digital thermometer rather than a dial one).\n4. Control all variables carefully.\n5. Use a large sample size where relevant.",
   difficulty:2,category:"process"},

  {id:"s8fc-17-E",islandId:"s8-17",front:"How do you draw a valid conclusion from an experiment?",
   back:"A valid conclusion must:\n1. State whether the results support or refute the hypothesis.\n2. Describe the pattern or trend in the data (refer to specific values).\n3. Explain the pattern using scientific knowledge.\n4. Acknowledge limitations (e.g. small sample size, anomalous results).\n\nExample: 'As temperature increased from 20°C to 60°C, the reaction rate increased, supporting my hypothesis. This is because higher temperatures give particles more kinetic energy, leading to more frequent and more energetic collisions.'",
   difficulty:3,category:"process"}

);

// ──────────────────────────────────────────────────────────────────────
// QUESTIONS
// ──────────────────────────────────────────────────────────────────────
Object.assign(QUESTIONS,{

"s8-13": [
  // Easy (Q1–4)
  {q:"Which of the following materials is attracted to a magnet?",
   opts:["Copper","Plastic","Iron","Aluminium"],c:2,
   e:"Iron is a magnetic material and is attracted to magnets. Copper, plastic and aluminium are all non-magnetic materials — they are not attracted to magnets. The main magnetic materials are iron, nickel and cobalt."},

  {q:"What happens when two north poles of magnets are brought together?",
   opts:["They attract each other","They repel each other","Nothing happens","One pole becomes a south pole"],c:1,
   e:"Like poles repel each other. Two north poles (or two south poles) push apart. Unlike poles (north and south) attract each other. This is the fundamental rule of magnetism."},

  {q:"What does a compass needle do inside a magnetic field?",
   opts:["It spins randomly","It aligns with the field lines, pointing from south to north","It aligns with the field lines, pointing from north to south","It moves to the strongest part of the field"],c:2,
   e:"A compass needle aligns with magnetic field lines. The north-seeking end of the needle points in the direction that the field lines travel — from north pole to south pole outside a magnet. This is how we use a compass to plot field lines."},

  {q:"What is an electromagnet?",
   opts:["A permanent magnet made from steel","A magnet made by passing electric current through a coil of wire around an iron core","A magnet that only works at very low temperatures","A type of ceramic magnet"],c:1,
   e:"An electromagnet is made by passing an electric current through a coil of wire (solenoid) wrapped around a soft iron core. The current creates a magnetic field; when the current is switched off, the iron loses its magnetism. This makes electromagnets temporary, controllable magnets."},

  // Medium (Q5–8)
  {q:"Which change would NOT increase the strength of an electromagnet?",
   opts:["Increasing the number of turns of wire on the coil","Increasing the current through the wire","Replacing the iron core with a copper core","Increasing the voltage of the power supply"],c:2,
   e:"Replacing the iron core with a copper core would not increase strength — copper is not a magnetic material and does not concentrate magnetic field lines. Increasing current, increasing the number of turns, and increasing voltage (which increases current) all strengthen an electromagnet."},

  {q:"A student plots the magnetic field around a bar magnet. Where are the field lines closest together?",
   opts:["In the middle of the magnet","At the poles","Evenly spread around the magnet","Far away from the magnet"],c:1,
   e:"Magnetic field lines are closest together (most concentrated) at the poles of a magnet, where the field is strongest. Field lines spread out and become further apart away from the magnet, indicating a weaker field."},

  {q:"In an electric motor, what causes the coil to rotate?",
   opts:["The weight of the coil","A force on a current-carrying conductor in a magnetic field","Static electricity","Heat from the electric current"],c:1,
   e:"In an electric motor, a current-carrying coil sits in a magnetic field. The magnetic force on the current causes the coil to experience a turning effect (moment), making it rotate. This is the motor effect — the basis of all electric motors."},

  {q:"A relay switch uses a small current to switch a larger current on. Which component makes this possible?",
   opts:["A resistor","A capacitor","An electromagnet","A permanent magnet"],c:2,
   e:"A relay uses an electromagnet. A small current through the electromagnet coil creates a magnetic field that attracts a metal arm, closing a second (high-current) circuit. Relays allow a low-power control circuit to safely switch a high-power circuit, for example in car starter motors."},

  // Hard (Q9–10)
  {q:"A student wraps 20 turns of wire around an iron core and uses a 3 A current. They want to double the magnetic field strength. Which combination achieves this?",
   opts:["Keep 20 turns; reduce current to 1.5 A","Increase to 40 turns; keep current at 3 A","Reduce to 10 turns; increase current to 6 A","Use a copper core with 40 turns"],c:1,
   e:"The strength of an electromagnet depends on the number of turns × current (the ampere-turns). 20 turns × 3 A = 60 ampere-turns. To double: 40 turns × 3 A = 120 ampere-turns. Reducing to 10 turns × 6 A also gives 60 ampere-turns (same, not double). A copper core would not help as copper is non-magnetic."},

  {q:"The Earth acts like a giant bar magnet. What does this tell us about the direction of Earth's geographic and magnetic poles?",
   opts:["Earth's geographic north pole is the same as its magnetic north pole","Earth's geographic north pole is near a magnetic south pole, because opposite poles attract compass needles","Earth's magnetic and geographic poles are identical and have always been in the same position","The Earth has no magnetic field at the poles"],c:1,
   e:"A compass north-seeking pole is attracted towards geographic north, meaning there must be a magnetic south pole near Earth's geographic north pole — because unlike poles attract. Earth's magnetic poles do not exactly coincide with geographic poles, and they slowly shift over time."}
],

"s8-14": [
  // Easy (Q1–4)
  {q:"A cyclist travels 600 m in 40 seconds. What is their speed?",
   opts:["240 m/s","15 m/s","24,000 m/s","0.067 m/s"],c:1,
   e:"Speed = distance ÷ time = 600 ÷ 40 = 15 m/s. Always divide distance by time. Check the units — metres divided by seconds gives m/s."},

  {q:"What does a horizontal (flat) line on a distance–time graph mean?",
   opts:["The object is moving at constant speed","The object is accelerating","The object is stationary (not moving)","The object is decelerating"],c:2,
   e:"A horizontal line on a distance–time graph means the distance is not changing — the object is stationary. A steeper line means a faster speed. A curved line means the speed is changing (acceleration or deceleration)."},

  {q:"Newton's First Law states that an object will remain at rest or move at constant velocity unless...",
   opts:["It is on a flat surface","A resultant (unbalanced) force acts on it","It is very heavy","It has no friction acting on it"],c:1,
   e:"Newton's First Law: an object stays at rest or continues at constant velocity unless acted upon by a resultant (unbalanced) force. This is why a book on a table stays still (balanced forces) and why a spacecraft in space keeps moving without engines (no resultant force to slow it)."},

  {q:"What is the unit of force?",
   opts:["Kilogram (kg)","Metre per second (m/s)","Newton (N)","Pascal (Pa)"],c:2,
   e:"Force is measured in Newtons (N), named after Sir Isaac Newton. Mass is measured in kg, speed in m/s, and pressure in Pascals (Pa). It is important not to confuse mass (kg) with force/weight (N)."},

  // Medium (Q5–8)
  {q:"A resultant force of 24 N acts on a trolley of mass 6 kg. What is the acceleration of the trolley?",
   opts:["144 m/s²","4 m/s²","0.25 m/s²","18 m/s²"],c:1,
   e:"Using Newton's Second Law: F = m × a, so a = F ÷ m = 24 ÷ 6 = 4 m/s². Always rearrange the equation before substituting values. Check: 6 kg × 4 m/s² = 24 N. ✓"},

  {q:"A lorry has a driving force of 8,000 N and a frictional force of 3,000 N. What is the resultant force and what does it cause?",
   opts:["11,000 N backwards; it decelerates","5,000 N forwards; it accelerates","5,000 N backwards; it decelerates","8,000 N forwards; it accelerates"],c:1,
   e:"Resultant force = driving force − friction = 8,000 − 3,000 = 5,000 N in the forward direction. A resultant force in the direction of motion causes acceleration (Newton's Second Law). If friction equalled the driving force, the lorry would travel at constant speed."},

  {q:"A gymnast of mass 50 kg lands on a crash mat. What force does the mat exert on the gymnast according to Newton's Third Law?",
   opts:["50 N upwards","490 N downwards","490 N upwards","Zero, because they are balanced"],c:2,
   e:"Newton's Third Law: every action has an equal and opposite reaction. The gymnast pushes down on the mat with their weight (mass × g = 50 × 9.8 ≈ 490 N). The mat exerts an equal force of 490 N upwards on the gymnast. Note: these forces act on different objects, so they are NOT a balanced pair."},

  {q:"A drawing pin is pushed into a board with a force of 10 N. The point of the pin has an area of 0.000002 m². What is the pressure at the pin tip?",
   opts:["0.00002 Pa","20,000 Pa","5,000,000 Pa","20 Pa"],c:2,
   e:"Pressure = Force ÷ Area = 10 ÷ 0.000002 = 5,000,000 Pa (5 MPa). This extremely high pressure is why a sharp pin easily pierces surfaces — the small area concentrates the force. A blunt pin has a larger area and so creates much lower pressure."},

  // Hard (Q9–10)
  {q:"A car of mass 1,200 kg accelerates from rest to 20 m/s in 8 seconds. What resultant force is needed?",
   opts:["9,600 N","150 N","3,000 N","96,000 N"],c:2,
   e:"First find acceleration: a = (v − u) ÷ t = (20 − 0) ÷ 8 = 2.5 m/s². Then use F = m × a = 1,200 × 2.5 = 3,000 N. Two-step problems require you to calculate acceleration first, then apply Newton's Second Law."},

  {q:"At terminal velocity, a skydiver falls at constant speed. Which statement correctly explains this?",
   opts:["The weight of the skydiver has decreased to zero","The air resistance equals the weight, so the resultant force is zero and there is no acceleration","The skydiver is no longer falling","The air resistance has exceeded the weight, causing upward acceleration"],c:1,
   e:"At terminal velocity the forces are balanced: weight (downwards) equals air resistance (upwards). Resultant force = 0 N. By Newton's First Law, zero resultant force means constant velocity. The skydiver is still falling — just at a constant (maximum) speed."}
],

"s8-15": [
  // Easy (Q1–4)
  {q:"What does the frequency of a wave measure?",
   opts:["The height of the wave from rest","The distance from one crest to the next","The number of complete waves passing a point per second","The speed of the wave"],c:2,
   e:"Frequency measures how many complete waves pass a fixed point every second. It is measured in hertz (Hz). Amplitude measures height from rest position; wavelength measures the distance from crest to crest; wave speed is how fast the wave travels."},

  {q:"Which type of wave is a sound wave?",
   opts:["Transverse","Longitudinal","Electromagnetic","Stationary"],c:1,
   e:"Sound is a longitudinal wave — the particles vibrate parallel to (in the same direction as) the direction of travel. This creates alternating compressions and rarefactions. Sound is also a mechanical wave and needs a medium (matter) to travel through; it cannot travel through a vacuum."},

  {q:"A wave has a frequency of 200 Hz and a wavelength of 1.5 m. What is its speed?",
   opts:["133 m/s","300 m/s","201.5 m/s","198.5 m/s"],c:1,
   e:"Wave speed = frequency × wavelength = 200 × 1.5 = 300 m/s. Always use v = f × λ. Units: Hz × m = m/s. ✓"},

  {q:"Which statement about transverse waves is correct?",
   opts:["Vibrations are parallel to the direction of travel","Vibrations are perpendicular to the direction of travel","They can only travel through solids","They cannot transfer energy"],c:1,
   e:"In a transverse wave, vibrations (oscillations) are at right angles (perpendicular) to the direction the wave travels. Examples include light, water waves and waves on a rope. Sound is longitudinal, not transverse."},

  // Medium (Q5–8)
  {q:"A sound wave has a speed of 330 m/s and a frequency of 660 Hz. What is its wavelength?",
   opts:["217,800 m","0.5 m","2 m","990 m"],c:1,
   e:"Rearranging v = f × λ: λ = v ÷ f = 330 ÷ 660 = 0.5 m. Always rearrange before substituting. Wavelength of 0.5 m is typical for mid-frequency sound waves."},

  {q:"Why does sound travel faster in steel than in air?",
   opts:["Steel is heavier than air","Particles in steel are closer together and interact more strongly, transmitting vibrations more quickly","Sound is a transverse wave in steel but longitudinal in air","Steel is at a higher temperature than air"],c:1,
   e:"Sound travels as vibrations between particles. In solids such as steel, particles are tightly packed and strongly bonded, so they transmit vibrations much more quickly than in air where particles are far apart and weakly interact. Sound travels approximately 340 m/s in air but around 5,100 m/s in steel."},

  {q:"Which part of the electromagnetic spectrum has the shortest wavelength?",
   opts:["Radio waves","Visible light","Infrared","Gamma rays"],c:3,
   e:"Gamma rays have the shortest wavelength and highest frequency of all electromagnetic waves. In order of increasing wavelength: gamma, X-rays, UV, visible light, infrared, microwaves, radio waves. Shorter wavelength means higher frequency and greater energy."},

  {q:"A student increases the amplitude of a sound wave without changing its frequency. What changes?",
   opts:["The pitch of the sound increases","The speed of the sound increases","The loudness of the sound increases","The wavelength of the sound decreases"],c:2,
   e:"Amplitude determines the loudness of a sound. Increasing amplitude means the sound wave carries more energy, making it louder. Frequency determines pitch — not amplitude. Wave speed in a given medium does not change with amplitude or frequency."},

  // Hard (Q9–10)
  {q:"Ultrasound has frequencies above 20,000 Hz (above the human hearing range). A pulse of ultrasound takes 0.0003 s to travel to a boundary and return. If ultrasound travels at 1,500 m/s in tissue, how deep is the boundary?",
   opts:["0.45 m","0.225 m","0.9 m","4.5 m"],c:1,
   e:"The pulse travels to the boundary and back, so total distance = speed × time = 1,500 × 0.0003 = 0.45 m. This is the total path (there and back), so depth = 0.45 ÷ 2 = 0.225 m. This is the principle behind medical ultrasound scanning."},

  {q:"Visible light, microwaves and gamma rays are all part of the electromagnetic spectrum. Which property do they all share?",
   opts:["The same wavelength","The same frequency","They all travel at the same speed in a vacuum (3 × 10⁸ m/s)","They are all longitudinal waves"],c:2,
   e:"All electromagnetic waves travel at the same speed in a vacuum — the speed of light, approximately 3 × 10⁸ m/s. They differ in wavelength and frequency. They are all transverse waves (not longitudinal). This common speed is a defining property of the electromagnetic spectrum."}
],

"s8-16": [
  // Easy (Q1–4)
  {q:"What is the law of reflection?",
   opts:["The angle of incidence is greater than the angle of reflection","The angle of incidence equals the angle of reflection","The angle of incidence equals 90°","Light always reflects towards the normal"],c:1,
   e:"The law of reflection states that the angle of incidence equals the angle of reflection (i = r). Both angles are measured from the normal — a dashed line drawn at 90° to the mirror surface at the point where light hits. This law applies to all surfaces, including rough surfaces (diffuse reflection)."},

  {q:"What does refraction mean?",
   opts:["Light bouncing off a surface","Light bending as it passes from one medium to another","Light spreading through a prism","Light being absorbed by a material"],c:1,
   e:"Refraction is the bending of light as it crosses the boundary between two materials with different optical densities (e.g. air to glass). It is caused by the change in speed of light at the boundary. Reflection is bouncing off a surface; absorption is when light energy is taken in rather than transmitted."},

  {q:"A ray of light enters a glass block from air and slows down. Which way does it bend?",
   opts:["Away from the normal","Towards the normal","It does not bend","Along the surface"],c:1,
   e:"When light enters a denser medium (e.g. air to glass) it slows down and bends towards the normal. When it exits into a less dense medium (e.g. glass to air) it speeds up and bends away from the normal. If it hits the boundary along the normal (at 0°), it passes straight through."},

  {q:"Which type of lens brings parallel rays of light to a focus?",
   opts:["Concave (diverging) lens","Plane mirror","Convex (converging) lens","Flat glass sheet"],c:2,
   e:"A convex (converging) lens is thicker in the middle and brings parallel rays to a focus at the focal point. A concave (diverging) lens is thinner in the middle and spreads rays out so they appear to come from a virtual focal point. Convex lenses are used in magnifying glasses and cameras."},

  // Medium (Q5–8)
  {q:"A ray of light hits a plane mirror. The angle between the incident ray and the mirror surface is 30°. What is the angle of reflection?",
   opts:["30°","60°","90°","15°"],c:1,
   e:"The angle of incidence is measured from the normal. If the ray makes 30° with the mirror surface, then it makes 90° − 30° = 60° with the normal. By the law of reflection, the angle of reflection also equals 60°. Always measure angles from the normal, not the surface."},

  {q:"Which lens is used to correct short sight (myopia)?",
   opts:["Convex lens","Concave lens","Bifocal lens","A flat lens"],c:1,
   e:"Short sight (myopia) means the eyeball is too long, so the image focuses in front of the retina. A concave (diverging) lens spreads the light out before it enters the eye, moving the focal point back onto the retina. Long sight is corrected with a convex lens."},

  {q:"A student shines white light through a triangular glass prism. What does she observe?",
   opts:["The light is reflected back","White light comes out the other side unchanged","The light is separated into a spectrum of colours","The light is absorbed by the glass"],c:2,
   e:"White light is a mixture of all visible colours. Each colour has a different wavelength and is refracted by a slightly different amount as it enters and exits the prism. This separates white light into the colours of the visible spectrum — red, orange, yellow, green, blue, indigo, violet (ROYGBIV). This is called dispersion."},

  {q:"A red filter is placed in front of a white light source. A piece of green paper is placed in the red light. What colour does the paper appear?",
   opts:["Red","Green","Black","Yellow"],c:2,
   e:"The red filter only transmits red light. Green paper reflects green light and absorbs all other colours. When only red light is available, the green paper cannot reflect any of it — it absorbs the red light. The paper therefore appears black (no light is reflected to the eye)."},

  // Hard (Q9–10)
  {q:"The angle of incidence of a ray at a glass–air boundary is gradually increased. At a certain angle, the refracted ray disappears. What is this angle called and what happens to the light?",
   opts:["The critical angle; all light is absorbed by the glass","The critical angle; total internal reflection occurs and all light reflects back into the glass","The normal angle; the light travels along the surface","The reflection angle; the light refracts into the air"],c:1,
   e:"When light travels from a denser to a less dense medium (e.g. glass to air), beyond the critical angle, no refraction occurs. Instead, 100% of the light reflects back inside the denser medium — this is total internal reflection. This is the principle behind optical fibres used in telecommunications and endoscopes."},

  {q:"When drawing a ray diagram for a convex lens with an object placed beyond the focal length, which three construction rays are used?",
   opts:["A ray through the centre of the lens; a ray parallel to the axis that refracts through the focal point; a ray through the near focal point that exits parallel to the axis","A ray along the normal; a ray at the critical angle; a ray reflected at 90°","A ray that reflects off the lens surface; a ray through the centre; a ray absorbed by the lens","A horizontal ray; a vertical ray; a diagonal ray"],c:0,
   e:"The three standard rays for a convex lens ray diagram are: (1) a ray parallel to the principal axis that refracts through the far focal point; (2) a ray through the optical centre that passes straight through undeviated; (3) a ray through the near focal point that exits parallel to the principal axis. Where the rays converge is where the real, inverted image forms."}
],

"s8-17": [
  // Easy (Q1–4)
  {q:"What is a hypothesis?",
   opts:["The conclusion of an experiment","A testable prediction made before an experiment","The equipment used in an experiment","A list of results"],c:1,
   e:"A hypothesis is a testable prediction or explanation made before conducting an experiment. It is usually written as an 'if … then … because …' statement. A conclusion is written after the experiment once results have been collected and analysed."},

  {q:"In an experiment investigating how light intensity affects the rate of photosynthesis, what is the independent variable?",
   opts:["The rate of photosynthesis","The temperature of the water","The type of plant used","The light intensity"],c:3,
   e:"The independent variable is the factor you deliberately change. In this experiment, the scientist changes the light intensity to see its effect. The rate of photosynthesis is the dependent variable (what is measured). Temperature and type of plant should be kept constant as control variables."},

  {q:"Why do scientists repeat their measurements at least three times?",
   opts:["To make the experiment last longer","To make results more reliable and allow anomalous results to be identified","To use more equipment","To change the independent variable more times"],c:1,
   e:"Repeating measurements improves reliability. If a result is very different from the others (an anomalous result), repeating allows you to spot it and exclude it from the mean calculation. A single measurement could be due to chance, so repetition increases confidence in the results."},

  {q:"What is a control variable?",
   opts:["The variable you change in an experiment","The variable you measure in an experiment","A variable that is kept the same to make the test fair","The result of the experiment"],c:2,
   e:"Control variables are all the factors that you keep constant throughout an experiment so that only the independent variable affects the dependent variable. If you failed to control a variable, you could not be sure what caused any change in your results, making the test unfair."},

  // Medium (Q5–8)
  {q:"A student measures the extension of a spring for different weights. Their results are: 1 N → 2 cm; 2 N → 4 cm; 3 N → 9 cm; 4 N → 8 cm. Which result is anomalous?",
   opts:["1 N → 2 cm","2 N → 4 cm","3 N → 9 cm","4 N → 8 cm"],c:2,
   e:"The pattern shows extension doubles as force doubles (2 cm, 4 cm, 8 cm). The result 3 N → 9 cm breaks this pattern — it should be 6 cm. This is the anomalous result. Anomalies may be caused by measurement error, equipment malfunction, or a genuine change in conditions (e.g. the spring going beyond its elastic limit)."},

  {q:"A student investigates the effect of temperature on enzyme activity. They fail to control the pH. What is the problem with this?",
   opts:["The experiment will take too long","They cannot be certain whether any change in enzyme activity was caused by temperature or by pH varying","The hypothesis will be wrong","They will not be able to plot a graph"],c:1,
   e:"If pH is not controlled, it becomes an additional uncontrolled variable. If enzyme activity changes, the student cannot tell whether temperature or pH caused the change. This makes the test unfair and the results invalid. All variables except the independent variable must be controlled."},

  {q:"A student's results show that as the concentration of acid doubles, the rate of reaction doubles. What type of relationship is this?",
   opts:["Inverse (negative) correlation","No correlation","Direct (positive) correlation","Random variation"],c:2,
   e:"When one variable doubles as the other doubles, this is a directly proportional (positive) relationship. On a graph, it would show as a straight line through the origin. A positive correlation means both variables increase together, though not necessarily proportionally. An inverse correlation means as one increases, the other decreases."},

  {q:"A student draws a graph of their results. What is the best type of graph to show how extension varies with force applied to a spring?",
   opts:["Pie chart","Bar chart","Line graph (scatter plot with line of best fit)","Pictogram"],c:2,
   e:"A line graph (or scatter plot with a line of best fit) is best when both variables are continuous numerical data (force in N, extension in cm). Bar charts are used for categoric independent variables. Pie charts show proportions of a whole. Pictograms are used for simple discrete data."},

  // Hard (Q9–10)
  {q:"A student measures the boiling point of water five times: 99.8°C, 100.1°C, 99.9°C, 100.0°C, 100.2°C. What is the mean, and is the data precise?",
   opts:["Mean = 100.0°C; data is not precise because values vary","Mean = 100.0°C; data is precise because all values are close together","Mean = 99.9°C; data is not precise","Mean = 100.1°C; data is precise"],c:1,
   e:"Mean = (99.8 + 100.1 + 99.9 + 100.0 + 100.2) ÷ 5 = 500.0 ÷ 5 = 100.0°C. Precision means how close repeated measurements are to each other — all values are within 0.4°C, so the data is precise. Accuracy means how close the mean is to the true value — 100.0°C is the accepted boiling point of water at sea level, so the data is also accurate."},

  {q:"A student concludes: 'My results prove that increasing temperature always increases the rate of reaction.' Identify TWO problems with this conclusion.",
   opts:["The student used the wrong graph type and the wrong equipment","The word 'proves' is too strong for a limited experiment, and the conclusion does not acknowledge the range of temperatures tested or possible limitations","The student did not repeat the experiment and used the wrong independent variable","The conclusion is correct — there are no problems"],c:1,
   e:"Scientific conclusions should not use 'proves' — experiments provide evidence to support or refute a hypothesis, not absolute proof. The conclusion is also too general: the relationship may only hold within the tested temperature range (e.g. very high temperatures denature enzymes). A good conclusion acknowledges limitations such as sample size, range of variables tested, and sources of uncertainty."}
]

});

// ──────────────────────────────────────────────────────────────────────
// LESSONS
// ──────────────────────────────────────────────────────────────────────
Object.assign(LESSONS,{

's8-13': `
<h2>Magnetism &amp; Electromagnetism</h2>
<p>Magnetism is a non-contact force — magnets can attract or repel other objects without touching them. Understanding how magnetism and electricity are related led to the invention of electric motors, generators, and countless modern technologies.</p>

<h3>Magnetic Poles &amp; Forces</h3>
<p>Every magnet has two poles: north and south. The rules of magnetic force are:</p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Like poles repel; unlike poles attract.</strong><br>
  North + North → repel &nbsp;|&nbsp; South + South → repel<br>
  North + South → attract
</div>
<p><strong>Magnetic materials</strong> (attracted to magnets): iron, nickel, cobalt, and steel (which contains iron).<br>
<strong>Non-magnetic materials</strong>: copper, aluminium, wood, plastic, glass.</p>

<h3>Magnetic Fields</h3>
<p>A magnetic field is the region of space around a magnet where magnetic forces act. We represent magnetic fields with <strong>field lines</strong>:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Feature</th>
    <th style="padding:8px;border:1px solid #ccc">What it tells us</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Direction of field lines</td>
    <td style="padding:8px;border:1px solid #ccc">From north pole to south pole (outside the magnet)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Spacing of field lines</td>
    <td style="padding:8px;border:1px solid #ccc">Closer together = stronger field; further apart = weaker field</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Poles</td>
    <td style="padding:8px;border:1px solid #ccc">Field lines are closest at the poles (strongest field)</td>
  </tr>
</table>
<p>A compass needle aligns with field lines — we use compasses to plot magnetic fields. The Earth has a magnetic field generated by convection currents in its molten iron outer core.</p>

<h3>Electromagnets</h3>
<p>An <strong>electromagnet</strong> is made by passing an electric current through a coil of wire (solenoid) wound around a soft iron core. The current produces a magnetic field; when switched off, the iron loses its magnetism.</p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Three ways to increase the strength of an electromagnet:</strong><br>
  1. Increase the current through the wire.<br>
  2. Increase the number of turns of wire on the coil.<br>
  3. Use a soft iron core (iron concentrates field lines far more than air).
</div>

<h3>Applications of Electromagnetism</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Application</th>
    <th style="padding:8px;border:1px solid #ccc">How electromagnetism is used</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Electric motor</strong></td>
    <td style="padding:8px;border:1px solid #ccc">A force acts on a current-carrying wire in a magnetic field, causing a coil to rotate</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Loudspeaker</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Alternating current through a coil makes it vibrate in a magnetic field, producing sound</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Relay switch</strong></td>
    <td style="padding:8px;border:1px solid #ccc">A small current activates an electromagnet that closes a second high-current circuit</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Maglev trains</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Powerful electromagnets levitate and propel the train, eliminating friction</td>
  </tr>
</table>

<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Key distinction — permanent vs temporary magnets:</strong><br>
  Permanent magnets (e.g. steel) retain their magnetism once magnetised.<br>
  Temporary magnets (e.g. soft iron) lose their magnetism when the magnetising field is removed. Soft iron is used in electromagnet cores for this reason.
</div>
`,

's8-14': `
<h2>Forces &amp; Motion</h2>
<p>Forces cause objects to start moving, stop, speed up, slow down, or change direction. Understanding the relationship between force, mass, and acceleration is fundamental to physics and engineering.</p>

<h3>Speed, Distance &amp; Time</h3>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Speed (m/s) = Distance (m) ÷ Time (s)</strong> &nbsp;&nbsp; v = d ÷ t
</div>
<p><strong>Worked Example:</strong> A runner covers 400 m in 50 s. What is their speed?<br>
Speed = 400 ÷ 50 = <strong>8 m/s</strong></p>

<h3>Distance–Time Graphs</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Shape of line</th>
    <th style="padding:8px;border:1px solid #ccc">Meaning</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Steep straight line</td>
    <td style="padding:8px;border:1px solid #ccc">Fast constant speed</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Shallow straight line</td>
    <td style="padding:8px;border:1px solid #ccc">Slow constant speed</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Horizontal (flat) line</td>
    <td style="padding:8px;border:1px solid #ccc">Stationary (not moving)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Curved line (steepening)</td>
    <td style="padding:8px;border:1px solid #ccc">Accelerating</td>
  </tr>
</table>
<p>The <strong>gradient</strong> of a distance–time graph equals the speed.</p>

<h3>Newton's Laws of Motion</h3>
<p><strong>Newton's First Law:</strong> An object remains at rest or moves at constant velocity unless a resultant (unbalanced) force acts on it. <em>Example: a hockey puck on ice keeps moving until friction or a stick stops it.</em></p>

<p><strong>Newton's Second Law:</strong></p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Force (N) = Mass (kg) × Acceleration (m/s²)</strong> &nbsp;&nbsp; F = m × a<br><br>
  <strong>Worked Example:</strong> A 1,200 kg car accelerates at 3 m/s². What resultant force is needed?<br>
  F = 1,200 × 3 = <strong>3,600 N</strong>
</div>

<p><strong>Newton's Third Law:</strong> Every action has an equal and opposite reaction. If object A exerts a force on object B, then B exerts an equal force on A in the opposite direction. <em>Example: a rocket expels gas downwards (action); the gas pushes the rocket upwards (reaction).</em></p>

<h3>Resultant Forces</h3>
<p>The <strong>resultant force</strong> is the net force found by adding all forces on an object, taking direction into account.</p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  • Resultant force = 0 N → balanced forces → constant velocity (or rest)<br>
  • Resultant force &gt; 0 N → unbalanced forces → acceleration<br><br>
  <strong>Example:</strong> Driving force = 6,000 N; friction = 2,500 N<br>
  Resultant = 6,000 − 2,500 = <strong>3,500 N forwards</strong> → the car accelerates.
</div>

<h3>Pressure</h3>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Pressure (Pa) = Force (N) ÷ Area (m²)</strong> &nbsp;&nbsp; P = F ÷ A<br><br>
  <strong>Worked Example:</strong> A force of 50 N acts on an area of 0.01 m².<br>
  Pressure = 50 ÷ 0.01 = <strong>5,000 Pa</strong><br><br>
  Smaller area → greater pressure (e.g. a sharp knife cuts more easily than a blunt one).
</div>
`,

's8-15': `
<h2>Waves &amp; Sound</h2>
<p>Waves transfer energy from one place to another without permanently transferring matter. They are fundamental to how we see, hear, and communicate — from sound to light to radio signals.</p>

<h3>Wave Properties</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Property</th>
    <th style="padding:8px;border:1px solid #ccc">Definition</th>
    <th style="padding:8px;border:1px solid #ccc">Unit</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Amplitude</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Maximum displacement from the rest position (height of crest from rest)</td>
    <td style="padding:8px;border:1px solid #ccc">metres (m)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Wavelength (λ)</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Distance from one crest to the next (one complete wave)</td>
    <td style="padding:8px;border:1px solid #ccc">metres (m)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Frequency (f)</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Number of complete waves passing a point per second</td>
    <td style="padding:8px;border:1px solid #ccc">hertz (Hz)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Wave speed (v)</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Distance travelled by the wave per second</td>
    <td style="padding:8px;border:1px solid #ccc">m/s</td>
  </tr>
</table>

<h3>Transverse vs Longitudinal Waves</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Type</th>
    <th style="padding:8px;border:1px solid #ccc">Vibration direction</th>
    <th style="padding:8px;border:1px solid #ccc">Examples</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Transverse</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Perpendicular (at right angles) to direction of travel</td>
    <td style="padding:8px;border:1px solid #ccc">Light, water waves, waves on a rope</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Longitudinal</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Parallel (same direction) to direction of travel; compressions and rarefactions</td>
    <td style="padding:8px;border:1px solid #ccc">Sound, seismic P-waves</td>
  </tr>
</table>

<h3>The Wave Speed Equation</h3>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Wave speed (m/s) = Frequency (Hz) × Wavelength (m)</strong> &nbsp;&nbsp; v = f × λ<br><br>
  <strong>Worked Example:</strong> A sound wave has frequency 550 Hz and wavelength 0.6 m.<br>
  Wave speed = 550 × 0.6 = <strong>330 m/s</strong><br><br>
  Rearranging: &nbsp; f = v ÷ λ &nbsp;&nbsp; and &nbsp;&nbsp; λ = v ÷ f
</div>

<h3>Sound Waves</h3>
<p>Sound is a <strong>longitudinal mechanical wave</strong>. It requires a medium (matter) to travel — it cannot travel through a vacuum.</p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Pitch</strong> is determined by <strong>frequency</strong>: higher frequency → higher pitch.<br>
  <strong>Loudness</strong> is determined by <strong>amplitude</strong>: greater amplitude → louder sound.<br><br>
  Speed of sound in air ≈ 330–340 m/s. Sound travels faster in solids than liquids than gases because particles are more closely packed.
</div>

<h3>The Electromagnetic Spectrum</h3>
<p>All electromagnetic (EM) waves are <strong>transverse waves</strong> that travel through a vacuum at the speed of light (3 × 10⁸ m/s). They differ in wavelength and frequency.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Region (shortest λ → longest λ)</th>
    <th style="padding:8px;border:1px solid #ccc">Example use</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Gamma rays</td><td style="padding:8px;border:1px solid #ccc">Treating cancer, sterilising medical equipment</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">X-rays</td><td style="padding:8px;border:1px solid #ccc">Medical imaging, airport security</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Ultraviolet (UV)</td><td style="padding:8px;border:1px solid #ccc">Sun tanning, detecting forged bank notes</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Visible light</td><td style="padding:8px;border:1px solid #ccc">Human vision, photography</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Infrared (IR)</td><td style="padding:8px;border:1px solid #ccc">Thermal imaging, remote controls</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Microwaves</td><td style="padding:8px;border:1px solid #ccc">Cooking, mobile phone signals, satellite communication</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">Radio waves</td><td style="padding:8px;border:1px solid #ccc">Radio and TV broadcasting, MRI scanners</td></tr>
</table>
`,

's8-16': `
<h2>Light &amp; Optics</h2>
<p>Light is a transverse electromagnetic wave. It travels at 3 × 10⁸ m/s in a vacuum and can be reflected, refracted, and absorbed. Understanding optics is essential for designing lenses, cameras, telescopes, and medical instruments.</p>

<h3>Reflection</h3>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Law of Reflection:</strong> Angle of incidence = Angle of reflection &nbsp;&nbsp; (i = r)<br>
  Both angles are measured from the <strong>normal</strong> — a line drawn at 90° to the surface at the point of incidence.
</div>
<p><strong>Regular (specular) reflection</strong> — smooth surfaces (e.g. mirrors): reflected rays are parallel → a clear image.<br>
<strong>Diffuse reflection</strong> — rough surfaces (e.g. paper): reflected rays scatter in all directions → no clear image, but the surface is still visible.</p>

<h3>Refraction</h3>
<p>Refraction is the bending of light as it changes speed at a boundary between two media.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Crossing the boundary</th>
    <th style="padding:8px;border:1px solid #ccc">Speed change</th>
    <th style="padding:8px;border:1px solid #ccc">Bending direction</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Air → Glass (less dense to denser)</td>
    <td style="padding:8px;border:1px solid #ccc">Slows down</td>
    <td style="padding:8px;border:1px solid #ccc">Bends towards the normal</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Glass → Air (denser to less dense)</td>
    <td style="padding:8px;border:1px solid #ccc">Speeds up</td>
    <td style="padding:8px;border:1px solid #ccc">Bends away from the normal</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Along the normal (0°)</td>
    <td style="padding:8px;border:1px solid #ccc">Changes speed</td>
    <td style="padding:8px;border:1px solid #ccc">No bending — passes straight through</td>
  </tr>
</table>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Total Internal Reflection:</strong> When light travels from a denser to a less dense medium and hits the boundary at an angle greater than the <em>critical angle</em>, all light is reflected back inside. Used in optical fibres (telecommunications &amp; endoscopes).
</div>

<h3>Lenses</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Lens type</th>
    <th style="padding:8px;border:1px solid #ccc">Shape</th>
    <th style="padding:8px;border:1px solid #ccc">Effect on rays</th>
    <th style="padding:8px;border:1px solid #ccc">Uses</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Convex (converging)</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Thicker in middle</td>
    <td style="padding:8px;border:1px solid #ccc">Brings parallel rays to a focal point</td>
    <td style="padding:8px;border:1px solid #ccc">Magnifying glass, camera, corrects long sight</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Concave (diverging)</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Thinner in middle</td>
    <td style="padding:8px;border:1px solid #ccc">Spreads parallel rays apart</td>
    <td style="padding:8px;border:1px solid #ccc">Corrects short sight (myopia)</td>
  </tr>
</table>

<h3>The Human Eye</h3>
<p>The eye works like a converging lens system:</p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Cornea</strong> — refracts most of the light entering the eye.<br>
  <strong>Iris/pupil</strong> — controls how much light enters.<br>
  <strong>Lens</strong> — flexible; changes shape (accommodation) to focus light precisely on the retina.<br>
  <strong>Retina</strong> — contains rods (black &amp; white; dim light) and cones (colour; bright light).<br>
  <strong>Optic nerve</strong> — carries electrical impulses to the brain.<br><br>
  <strong>Short sight (myopia):</strong> eyeball too long → image in front of retina → corrected by concave lens.<br>
  <strong>Long sight (hyperopia):</strong> eyeball too short → image behind retina → corrected by convex lens.
</div>

<h3>Colour</h3>
<p>White light is a mixture of all visible colours. A prism disperses white light into the visible spectrum because each colour has a slightly different wavelength and is refracted by a different amount.<br>
A colour <strong>filter</strong> transmits only its own colour and absorbs all others (e.g. a blue filter only lets blue light through).</p>
`,

's8-17': `
<h2>Scientific Investigation</h2>
<p>Scientists follow a systematic process to investigate questions and answer them with reliable, valid evidence. Developing these skills will help you in all science topics and in controlled assessments.</p>

<h3>The Scientific Method</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#6366f1;color:white">
    <th style="padding:8px;border:1px solid #ccc">Stage</th>
    <th style="padding:8px;border:1px solid #ccc">What you do</th>
  </tr>
  <tr><td style="padding:8px;border:1px solid #ccc">1. Question</td><td style="padding:8px;border:1px solid #ccc">Identify what you want to find out</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">2. Hypothesis</td><td style="padding:8px;border:1px solid #ccc">Write a testable prediction: "If … then … because …"</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">3. Plan</td><td style="padding:8px;border:1px solid #ccc">Identify variables (IV, DV, control); write a step-by-step method</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">4. Collect data</td><td style="padding:8px;border:1px solid #ccc">Record results in a neat table; repeat measurements</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">5. Analyse</td><td style="padding:8px;border:1px solid #ccc">Calculate means; plot graphs; identify trends</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">6. Conclude</td><td style="padding:8px;border:1px solid #ccc">State whether results support the hypothesis; explain using science</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc">7. Evaluate</td><td style="padding:8px;border:1px solid #ccc">Assess reliability and validity; suggest improvements</td></tr>
</table>

<h3>Variables</h3>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Independent variable (IV):</strong> what you deliberately change.<br>
  <strong>Dependent variable (DV):</strong> what you measure as a result.<br>
  <strong>Control variables:</strong> everything else you keep the same to make the test fair.<br><br>
  <strong>Example</strong> — investigating how mass affects the extension of a spring:<br>
  IV = mass added (g) &nbsp;|&nbsp; DV = extension of spring (cm) &nbsp;|&nbsp; Controls = same spring, same ruler, same starting position
</div>

<h3>Fair Tests &amp; Reliability</h3>
<p>A <strong>fair test</strong> changes only the independent variable while controlling all others. If multiple variables change at once, you cannot determine which caused the result.</p>
<p><strong>Reliability</strong> means results are repeatable. To improve reliability:</p>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  1. Repeat each measurement at least 3 times.<br>
  2. Calculate the <strong>mean</strong> of your repeated values (exclude anomalous results first).<br>
  3. Use precise, calibrated equipment.<br>
  4. Control all variables carefully.
</div>

<h3>Recording &amp; Presenting Data</h3>
<p><strong>Tables:</strong> independent variable in the left column; dependent variable(s) in subsequent columns; include units in the column headers, not in the cells.<br>
<strong>Graphs:</strong> IV on the x-axis; DV on the y-axis. Use a line graph for continuous data; a bar chart for categoric data. Draw a smooth line of best fit (not dot-to-dot).</p>

<h3>Conclusions &amp; Evaluations</h3>
<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>A good conclusion:</strong><br>
  1. States whether results support or refute the hypothesis.<br>
  2. Describes the trend with specific data values.<br>
  3. Explains the trend using scientific knowledge.<br>
  4. Acknowledges any limitations.<br><br>
  <strong>A good evaluation:</strong><br>
  • Identifies sources of error (random or systematic).<br>
  • Assesses whether results are reliable (consistent repeats) and valid (fair test).<br>
  • Suggests specific improvements (e.g. use a data logger for more precise timing; increase the range of the independent variable).
</div>

<div style="background:#eef2ff;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Tip — Anomalous results:</strong> An anomalous (outlier) result is one that does not fit the pattern. Do NOT include it when calculating the mean. Circle it on your table and your graph. Suggest a reason for it in your evaluation (e.g. measurement error, equipment fault, or a genuine change in conditions).
</div>
`

});
