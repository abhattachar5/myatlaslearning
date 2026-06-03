// science-y11-t08.js — Year 11 Science Topic 8: Space Physics
// Islands: s11i-08-1 .. s11i-08-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-08-1 — The Solar System & Orbits
  {id:"s11fc-08-1-1",islandId:"s11i-08-1",front:"List the eight planets of the Solar System in order from the Sun.",
   back:"Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.\n\nMemory aid: My Very Eager Mother Just Served Us Nachos.\n\nThe first four are rocky (terrestrial); the last four are gas/ice giants.",difficulty:1,category:"definition"},
  {id:"s11fc-08-1-2",islandId:"s11i-08-1",front:"What keeps planets in orbit around the Sun?",
   back:"Gravity.\n\nThe Sun's gravitational pull provides the centripetal force needed to keep the planets moving in approximately circular (actually slightly elliptical) orbits.\n\nThe planet's velocity is perpendicular to the gravitational force, so it continuously falls towards the Sun but never reaches it.",difficulty:2,category:"concept"},
  {id:"s11fc-08-1-3",islandId:"s11i-08-1",front:"What is the difference between a natural satellite and an artificial satellite?",
   back:"A natural satellite is a celestial body that orbits a planet naturally (e.g. the Moon orbits Earth).\n\nAn artificial satellite is a human-made object placed in orbit (e.g. the International Space Station, GPS satellites).",difficulty:1,category:"definition"},
  {id:"s11fc-08-1-4",islandId:"s11i-08-1",front:"How does the orbital speed of a planet change with distance from the Sun?",
   back:"Planets closer to the Sun orbit faster than those further away.\n\nThis is because the gravitational force is stronger closer to the Sun, requiring a higher orbital speed to maintain a stable orbit. Mercury orbits much faster than Neptune.",difficulty:2,category:"concept"},
  {id:"s11fc-08-1-5",islandId:"s11i-08-1",front:"What is a dwarf planet? Give an example.",
   back:"A dwarf planet orbits the Sun and has enough mass for gravity to make it roughly spherical, but it has NOT cleared its orbital neighbourhood of other debris.\n\nExample: Pluto (reclassified from planet to dwarf planet in 2006).",difficulty:1,category:"definition"},

  // s11i-08-2 — Life Cycle of Stars
  {id:"s11fc-08-2-1",islandId:"s11i-08-2",front:"Describe the life cycle of a star about the same size as the Sun.",
   back:"1. Nebula (cloud of dust and gas)\n2. Protostar (gravity pulls material together; temperature rises)\n3. Main sequence star (hydrogen fuses to helium; stable for billions of years)\n4. Red giant (hydrogen runs out; outer layers expand)\n5. White dwarf (outer layers shed; hot dense core remains)\n6. Eventually cools to a black dwarf.",difficulty:2,category:"concept"},
  {id:"s11fc-08-2-2",islandId:"s11i-08-2",front:"How does the life cycle differ for a star much more massive than the Sun?",
   back:"Massive stars also start as a nebula → protostar → main sequence, but then:\n\n4. Red supergiant (expands even more than a red giant)\n5. Supernova (spectacular explosion; elements heavier than iron are formed)\n6. Neutron star (extremely dense remnant) or black hole (if the remaining core is massive enough).",difficulty:3,category:"concept"},
  {id:"s11fc-08-2-3",islandId:"s11i-08-2",front:"Where do elements heavier than iron come from?",
   back:"Elements heavier than iron are only formed during a supernova explosion.\n\nThe enormous energy and pressure during the explosion forces nuclei together to create heavy elements (gold, uranium, etc.). These are scattered into space and can become part of new stars and planets.",difficulty:2,category:"concept"},
  {id:"s11fc-08-2-4",islandId:"s11i-08-2",front:"What is red shift?",
   back:"Red shift is the stretching of light waves from distant galaxies, shifting them towards the red end of the spectrum.\n\nIt occurs because the galaxies are moving away from us. The greater the red shift, the faster the galaxy is receding. This is evidence that the universe is expanding.",difficulty:2,category:"definition"},
  {id:"s11fc-08-2-5",islandId:"s11i-08-2",front:"What is the Big Bang theory?",
   back:"The Big Bang theory states that the universe began from a single point about 13.8 billion years ago in a massive expansion.\n\nEvidence includes:\n1. Red shift — galaxies are moving apart.\n2. Cosmic microwave background radiation (CMBR) — leftover thermal radiation from the early universe.",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-08-1":[
    {q:"What provides the force that keeps planets in orbit around the Sun?",opts:["Magnetism","Friction","Gravity","Air resistance"],c:2,e:"The Sun's gravitational pull acts as the centripetal force needed to keep the planets moving in their orbits. There is no air in space, so friction and air resistance do not apply."},
    {q:"Which planet has the shortest orbital period?",opts:["Earth","Venus","Mars","Mercury"],c:3,e:"Mercury is closest to the Sun, so it experiences the strongest gravitational pull and orbits fastest. Its orbital period is about 88 Earth days."},
    {q:"Which of these is an artificial satellite?",opts:["The Moon","Phobos (moon of Mars)","The International Space Station","Europa (moon of Jupiter)"],c:2,e:"The ISS is a human-made structure placed in orbit around Earth. The Moon, Phobos and Europa are all natural satellites of their respective planets."},
    {q:"What is the correct order of the four inner (rocky) planets from the Sun?",opts:["Earth, Venus, Mars, Mercury","Mercury, Venus, Earth, Mars","Mars, Earth, Venus, Mercury","Venus, Mercury, Earth, Mars"],c:1,e:"The rocky planets in order from the Sun are Mercury, Venus, Earth, Mars. The gas giants (Jupiter, Saturn, Uranus, Neptune) lie further out."},
    {q:"Why was Pluto reclassified as a dwarf planet?",opts:["It is too cold","It does not orbit the Sun","It has not cleared its orbital neighbourhood","It has no moons"],c:2,e:"Pluto meets two of the three criteria for a planet (orbits the Sun, roughly spherical) but has not cleared other objects from its orbital zone, so it was reclassified as a dwarf planet in 2006."}
  ],
  "s11i-08-2":[
    {q:"Which stage comes immediately after a main sequence star runs out of hydrogen fuel?",opts:["White dwarf","Supernova","Nebula","Red giant"],c:3,e:"When a Sun-sized star exhausts its hydrogen, the core contracts while the outer layers expand and cool, forming a red giant. (For massive stars, this stage is a red supergiant.)"},
    {q:"Where are elements heavier than iron formed?",opts:["Inside the Sun","In red giants","During supernova explosions","In nebulae"],c:2,e:"The extreme temperatures and pressures during a supernova explosion provide enough energy to fuse nuclei into elements heavier than iron. These elements are then dispersed into space."},
    {q:"What happens to a very massive star after a supernova?",opts:["It becomes a white dwarf","It becomes a red giant again","It becomes a neutron star or black hole","It becomes a new nebula only"],c:2,e:"After a supernova, if the remaining core is extremely massive, it collapses into a black hole. If the core is less massive (but still very dense), it becomes a neutron star."},
    {q:"Red shift of distant galaxies provides evidence that:",opts:["The universe is contracting","Stars are getting hotter","The universe is expanding","Light always changes colour"],c:2,e:"Red shift shows that galaxies are moving away from us, and the further away they are, the faster they recede. This supports the idea that the universe is expanding — a key piece of evidence for the Big Bang theory."},
    {q:"What is cosmic microwave background radiation (CMBR)?",opts:["Radiation from mobile phones","Microwave radiation from the Sun","Leftover thermal radiation from the early universe","Radiation from nuclear power stations"],c:2,e:"CMBR is low-level microwave radiation detected in every direction in space. It is the remnant heat from the Big Bang, now cooled to about 2.7 K, and provides strong evidence for the Big Bang theory."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-08-1': `
<h2>The Solar System &amp; Orbits</h2>
<div class="lesson-diagram" data-diagram="solar-system"><p class="diagram-caption">The solar system</p></div>
<p>Our <strong>Solar System</strong> consists of the Sun (a star), eight planets, dwarf planets, moons, asteroids and comets, all held together by <strong>gravity</strong>.</p>

<h3>The planets</h3>
<p>In order from the Sun: <strong>Mercury, Venus, Earth, Mars</strong> (rocky, terrestrial planets), then <strong>Jupiter, Saturn, Uranus, Neptune</strong> (gas and ice giants).</p>

<h3>Gravity and orbits</h3>
<p>The Sun's gravitational field provides the <strong>centripetal force</strong> that keeps the planets in orbit. Closer planets experience stronger gravity and orbit faster with shorter orbital periods. For example, Mercury orbits in 88 days while Neptune takes about 165 years.</p>

<h3>Satellites</h3>
<p><strong>Natural satellites</strong> (moons) orbit planets; <strong>artificial satellites</strong> (human-made) orbit Earth for communication, navigation, weather monitoring and research.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why the Moon stays in orbit around the Earth.</p>
<p><strong>A:</strong> The Earth's gravity pulls the Moon towards it, providing the centripetal force needed for circular motion. The Moon has a velocity perpendicular to this pull, so it continuously "falls" towards Earth but moves sideways fast enough to keep missing it, maintaining a stable orbit.</p>

<h3>Common mistake</h3>
<p>Students sometimes say there is "no gravity in space." There is gravity everywhere — it just gets weaker with distance. Astronauts appear weightless because they are in <strong>free fall</strong> (falling at the same rate as their spacecraft), not because gravity is absent.</p>`,

's11i-08-2': `
<h2>Life Cycle of Stars</h2>
<p>Stars are born, live and die over millions to billions of years. Their fate depends on their <strong>mass</strong>.</p>

<h3>Sun-sized stars</h3>
<p><strong>Nebula → Protostar → Main sequence star → Red giant → White dwarf → (eventually) Black dwarf</strong></p>
<ul>
<li>A <strong>nebula</strong> is a cloud of dust and gas. Gravity pulls material together to form a <strong>protostar</strong>.</li>
<li>When the core is hot enough, hydrogen nuclei fuse into helium — the star joins the <strong>main sequence</strong> (our Sun is here).</li>
<li>When hydrogen runs out, the outer layers expand into a <strong>red giant</strong>.</li>
<li>The outer layers are shed as a planetary nebula, leaving a hot, dense <strong>white dwarf</strong> that slowly cools.</li>
</ul>

<h3>Massive stars</h3>
<p><strong>Nebula → Protostar → Main sequence → Red supergiant → Supernova → Neutron star or Black hole</strong></p>
<p>During a <strong>supernova</strong>, elements heavier than iron are created and scattered into space. If the remaining core is massive enough, it becomes a <strong>black hole</strong>; otherwise a <strong>neutron star</strong>.</p>

<h3>The expanding universe</h3>
<p>Light from distant galaxies is <strong>red-shifted</strong> — its wavelength has been stretched. This shows galaxies are moving away from us, meaning the universe is <strong>expanding</strong>. Combined with <strong>cosmic microwave background radiation (CMBR)</strong>, this is strong evidence for the <strong>Big Bang theory</strong>.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> Explain why we find heavy elements like gold on Earth.</p>
<p><strong>A:</strong> Heavy elements like gold can only be formed during supernova explosions. Our Solar System formed from a nebula that contained debris from previous supernovae. The heavy elements were incorporated into the Earth as it formed, which is why we find them in the Earth's crust today.</p>

<h3>Common mistake</h3>
<p>Students often say the Sun will explode as a supernova. It will not — only <strong>massive</strong> stars end as supernovae. The Sun is a medium-sized star and will end as a <strong>white dwarf</strong>.</p>`

});
