// content/y9/science/islands/t13.js — Year 9 Science Topic 13: Waves & the EM Spectrum
// Islands s9i-13-1 .. s9i-13-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s9i-13-1 — Wave Properties
  {id:"s9fc-13-1-1", islandId:"s9i-13-1", front:"What is the difference between transverse and longitudinal waves?",
   back:"Transverse waves: the oscillations (vibrations) are perpendicular (at right angles) to the direction of energy transfer.\nExamples: light, water waves, all EM waves, waves on a string.\n\nLongitudinal waves: the oscillations are parallel to the direction of energy transfer, creating compressions and rarefactions.\nExamples: sound waves, ultrasound, seismic P-waves.", difficulty:1, category:"definition"},
  {id:"s9fc-13-1-2", islandId:"s9i-13-1", front:"Define amplitude, wavelength, frequency and period.",
   back:"Amplitude — the maximum displacement of a point from its rest position (measured in metres, m). Related to the energy of the wave.\n\nWavelength (λ) — the distance from one point on a wave to the equivalent point on the next wave (e.g. crest to crest), in metres.\n\nFrequency (f) — the number of complete waves passing a point per second, in hertz (Hz).\n\nPeriod (T) — the time for one complete wave to pass, in seconds. T = 1/f.", difficulty:1, category:"definition"},
  {id:"s9fc-13-1-3", islandId:"s9i-13-1", front:"State the wave equation.",
   back:"wave speed = frequency × wavelength\n\nv = f × λ\n\nWhere:\n• v = wave speed (metres per second, m/s)\n• f = frequency (hertz, Hz)\n• λ = wavelength (metres, m)\n\nRearranged: f = v / λ and λ = v / f.", difficulty:1, category:"definition"},
  {id:"s9fc-13-1-4", islandId:"s9i-13-1", front:"A wave has a frequency of 500 Hz and a wavelength of 0.6 m. Calculate the wave speed.",
   back:"v = f × λ\n= 500 × 0.6\n= 300 m/s\n\nAlways include the correct unit (m/s).", difficulty:2, category:"calculation"},
  {id:"s9fc-13-1-5", islandId:"s9i-13-1", front:"What do waves transfer?",
   back:"Waves transfer ENERGY from one place to another without transferring matter.\n\nThe particles of the medium (in mechanical waves) vibrate about their rest positions but do not travel with the wave.\n\nFor example, a cork on a water wave bobs up and down but does not move along with the wave.", difficulty:1, category:"concept"},

  // s9i-13-2 — The Electromagnetic Spectrum
  {id:"s9fc-13-2-1", islandId:"s9i-13-2", front:"List the electromagnetic spectrum in order from longest wavelength to shortest.",
   back:"Radio waves → Microwaves → Infrared → Visible light → Ultraviolet → X-rays → Gamma rays\n\nMemory aid: 'Real Men Inspire Very Unusual X-treme Grins'\n\nAll EM waves travel at the speed of light in a vacuum: 3 × 10⁸ m/s.\nLonger wavelength = lower frequency.\nShorter wavelength = higher frequency.", difficulty:1, category:"definition"},
  {id:"s9fc-13-2-2", islandId:"s9i-13-2", front:"Give one use and one danger for each type of EM radiation.",
   back:"Radio waves — use: TV and radio broadcasting; danger: generally considered low risk\nMicrowaves — use: cooking, mobile phone signals; danger: can heat body tissue\nInfrared — use: thermal imaging, remote controls; danger: skin burns\nVisible light — use: seeing, optical fibres; danger: eye damage if very intense\nUltraviolet — use: security marking, sun beds; danger: skin cancer, sunburn, eye damage\nX-rays — use: medical imaging of bones; danger: can cause mutations/cancer\nGamma rays — use: sterilising equipment, cancer treatment; danger: can cause mutations/cancer", difficulty:2, category:"application"},
  {id:"s9fc-13-2-3", islandId:"s9i-13-2", front:"What properties do all electromagnetic waves share?",
   back:"All EM waves:\n• Are transverse waves\n• Travel at the speed of light in a vacuum (3 × 10⁸ m/s)\n• Transfer energy\n• Do not need a medium — they can travel through a vacuum\n• Can be reflected, refracted and absorbed\n\nThey differ in wavelength, frequency, and how they interact with matter.", difficulty:2, category:"concept"},
  {id:"s9fc-13-2-4", islandId:"s9i-13-2", front:"Why are gamma rays more dangerous than radio waves?",
   back:"Gamma rays have a much shorter wavelength and much higher frequency than radio waves.\n\nHigher frequency means each photon carries more energy.\n\nThis higher energy can ionise atoms (knock electrons off) — damaging or killing cells and potentially causing mutations that lead to cancer.\n\nRadio waves have very low energy and are not ionising.", difficulty:2, category:"concept"},
  {id:"s9fc-13-2-5", islandId:"s9i-13-2", front:"An EM wave has a frequency of 5 × 10¹⁴ Hz. Calculate its wavelength. (Speed of light = 3 × 10⁸ m/s)",
   back:"λ = v / f\n= 3 × 10⁸ / 5 × 10¹⁴\n= 6 × 10⁻⁷ m\n= 600 nm\n\nThis is in the visible light range (orange/red light).", difficulty:2, category:"calculation"},
  {id:"s9fc-13-2-6", islandId:"s9i-13-2", front:"What is the relationship between wavelength and frequency for EM waves?",
   back:"Wavelength and frequency are inversely proportional.\n\nAs wavelength increases, frequency decreases (and vice versa).\n\nThis is because all EM waves travel at the same speed (c = 3 × 10⁸ m/s):\nv = fλ → if v is constant, when λ goes up, f must come down.", difficulty:2, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s9i-13-1": [
    {q:"In a transverse wave, the oscillations are:",
     opts:["Parallel to the direction of energy transfer","Perpendicular to the direction of energy transfer","In the same direction as the wave speed","Circular around the direction of travel"], c:1,
     e:"In transverse waves, particles oscillate at right angles (perpendicular) to the direction the wave travels. Examples include water waves and all electromagnetic waves. In longitudinal waves, oscillations are parallel to the direction of travel."},
    {q:"A wave has a frequency of 200 Hz and a wavelength of 1.5 m. What is the wave speed?",
     opts:["133 m/s","300 m/s","201.5 m/s","400 m/s"], c:1,
     e:"v = f × λ = 200 × 1.5 = 300 m/s. Multiply frequency by wavelength to get wave speed."},
    {q:"The amplitude of a wave is:",
     opts:["The distance from crest to trough","The maximum displacement from the rest position","The number of waves per second","The distance between two crests"], c:1,
     e:"Amplitude is the maximum displacement of a point from its undisturbed (rest) position. It is measured from the middle to the top of a crest (or to the bottom of a trough), NOT from crest to trough (that is twice the amplitude)."},
    {q:"Sound waves are an example of:",
     opts:["Transverse waves","Electromagnetic waves","Longitudinal waves","Gamma waves"], c:2,
     e:"Sound waves are longitudinal — the air particles vibrate parallel to the direction the sound travels, creating alternating compressions and rarefactions. Sound requires a medium and cannot travel through a vacuum."},
    {q:"Waves transfer:",
     opts:["Matter from one place to another","Energy without transferring matter","Both energy and matter","Neither energy nor matter"], c:1,
     e:"Waves transfer energy from one place to another without transferring matter. The particles in the medium vibrate about their rest positions but do not travel along with the wave."}
  ],
  "s9i-13-2": [
    {q:"Which EM wave has the longest wavelength?",
     opts:["Gamma rays","X-rays","Visible light","Radio waves"], c:3,
     e:"Radio waves have the longest wavelength (up to thousands of metres) and the lowest frequency. Gamma rays have the shortest wavelength and highest frequency. The order is: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma."},
    {q:"All electromagnetic waves travel at the same speed in a vacuum. That speed is:",
     opts:["340 m/s","3 × 10⁸ m/s","3 × 10⁶ m/s","300 m/s"], c:1,
     e:"All EM waves travel at the speed of light in a vacuum: approximately 3 × 10⁸ m/s (300,000,000 m/s). This is one of the most important constants in physics. 340 m/s is the approximate speed of sound in air."},
    {q:"Which type of EM radiation is used for medical imaging of bones?",
     opts:["Radio waves","Infrared","X-rays","Microwaves"], c:2,
     e:"X-rays can pass through soft tissue but are absorbed by dense materials like bone. This produces shadow images on photographic film or digital detectors. X-rays are ionising, so exposure should be minimised."},
    {q:"As wavelength decreases across the EM spectrum, what happens to frequency?",
     opts:["Frequency also decreases","Frequency stays the same","Frequency increases","There is no relationship"], c:2,
     e:"Wavelength and frequency are inversely proportional: v = fλ, and v is constant for all EM waves. So as wavelength decreases, frequency must increase. Shorter wavelength = higher frequency = more energy per photon."},
    {q:"Which type of EM radiation can cause sunburn and increase the risk of skin cancer?",
     opts:["Infrared","Visible light","Radio waves","Ultraviolet"], c:3,
     e:"Ultraviolet (UV) radiation has enough energy to damage skin cells and DNA, causing sunburn and increasing the risk of skin cancer. Suncream protects by absorbing UV radiation before it reaches the skin. Infrared causes heating but not sunburn."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's9i-13-1': `
<h2>Wave Properties</h2>
<div class="lesson-diagram" data-diagram="wave-properties"><p class="diagram-caption">Wavelength, amplitude and frequency</p></div>
<p>Waves are everywhere &mdash; from the sound you hear to the light you see. Understanding how waves behave and the maths behind them is essential for GCSE Physics.</p>

<h3>Types of Wave</h3>
<ul>
  <li><strong>Transverse</strong> &mdash; oscillations are perpendicular to the direction of energy transfer (e.g. light, water waves, all EM waves)</li>
  <li><strong>Longitudinal</strong> &mdash; oscillations are parallel to the direction of energy transfer, creating compressions and rarefactions (e.g. sound waves)</li>
</ul>
<p>All waves transfer <strong>energy</strong> without transferring matter.</p>

<h3>Key Wave Properties</h3>
<ul>
  <li><strong>Amplitude</strong> &mdash; maximum displacement from rest position (related to energy/loudness)</li>
  <li><strong>Wavelength (&lambda;)</strong> &mdash; distance from one crest to the next (in metres)</li>
  <li><strong>Frequency (f)</strong> &mdash; number of complete waves per second (in hertz, Hz)</li>
  <li><strong>Period (T)</strong> &mdash; time for one complete wave (T = 1/f)</li>
</ul>

<h3>The Wave Equation</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>v = f &times; &lambda;</strong></p>

<h3>Worked Example</h3>
<p>A sound wave has a frequency of 256 Hz and travels at 340 m/s. Calculate its wavelength.</p>
<p>&lambda; = v / f = 340 / 256 = <strong>1.33 m</strong> (to 3 s.f.)</p>

<h3>Common Mistake</h3>
<p>Students often confuse amplitude with wavelength. Amplitude is measured vertically (rest position to crest or trough). Wavelength is measured horizontally (crest to crest or trough to trough). Also remember: waves transfer energy, not matter &mdash; a duck on a pond bobs up and down but does not travel with the wave.</p>
`,

's9i-13-2': `
<h2>The Electromagnetic Spectrum</h2>
<div class="lesson-diagram" data-diagram="em-spectrum"><p class="diagram-caption">The electromagnetic spectrum</p></div>
<p>The electromagnetic (EM) spectrum is a continuous range of waves that all travel at the speed of light. From radio waves to gamma rays, each type has different wavelengths, frequencies, uses and dangers.</p>

<h3>The Spectrum in Order</h3>
<p style="text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Radio &rarr; Microwave &rarr; Infrared &rarr; Visible &rarr; Ultraviolet &rarr; X-ray &rarr; Gamma</strong><br><em>longest &lambda;, lowest f &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; shortest &lambda;, highest f</em></p>

<h3>Shared Properties</h3>
<p>All EM waves are transverse, travel at <strong>3 &times; 10&#8312; m/s</strong> in a vacuum, transfer energy, and can be reflected, refracted and absorbed. They do not need a medium.</p>

<h3>Uses and Dangers</h3>
<ul>
  <li><strong>Radio</strong> &mdash; TV/radio broadcasting; low danger</li>
  <li><strong>Microwave</strong> &mdash; cooking, mobile signals; can heat body tissue</li>
  <li><strong>Infrared</strong> &mdash; thermal cameras, remotes; skin burns</li>
  <li><strong>Visible</strong> &mdash; sight, optical fibres; eye damage at high intensity</li>
  <li><strong>Ultraviolet</strong> &mdash; security marks, sun beds; skin cancer, sunburn</li>
  <li><strong>X-ray</strong> &mdash; medical imaging; mutations/cancer</li>
  <li><strong>Gamma</strong> &mdash; sterilisation, cancer treatment; mutations/cancer</li>
</ul>

<h3>Worked Example</h3>
<p>A radio station broadcasts at a frequency of 1.5 &times; 10&#8310; Hz. Calculate the wavelength. (c = 3 &times; 10&#8312; m/s)</p>
<p>&lambda; = v / f = 3 &times; 10&#8312; / 1.5 &times; 10&#8310; = <strong>200 m</strong></p>

<h3>Common Mistake</h3>
<p>Students sometimes think visible light is "not part of the EM spectrum" or is somehow different. It is simply the narrow band of EM radiation that our eyes can detect. Also, remember that higher frequency means higher energy and greater danger &mdash; which is why gamma rays and X-rays are more hazardous than radio waves.</p>
`

});
