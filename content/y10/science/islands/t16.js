// content/y10/science/islands/t16.js — Year 10 Science Topic 16: Light (Triple-only optics & lenses)
// Islands s10i-16-1 .. s10i-16-3. Flashcards, static question banks, lessons.
// AQA GCSE Physics (8463). Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-16-1 — Reflection & Refraction of Light
  {id:"s10fc-16-1-1", islandId:"s10i-16-1", front:"State the law of reflection.",
   back:"The law of reflection states:\n\nAngle of incidence = angle of reflection\n\nBoth angles are measured between the ray and the NORMAL — an imaginary line drawn at 90° to the surface at the point where the ray hits.\n\n• The incident ray, the reflected ray and the normal all lie in the same plane.\n• Never measure the angles from the surface itself.", difficulty:1, category:"definition"},
  {id:"s10fc-16-1-2", islandId:"s10i-16-1", front:"What is the difference between specular and diffuse reflection?",
   back:"Both obey the law of reflection at every point.\n\n• Specular reflection: occurs at a smooth, flat surface (e.g. a mirror). Parallel rays stay parallel after reflecting, so a clear image is formed.\n• Diffuse reflection: occurs at a rough surface (e.g. paper). The normals point in many different directions, so rays are scattered and no clear image forms.", difficulty:2, category:"concept"},
  {id:"s10fc-16-1-3", islandId:"s10i-16-1", front:"What is refraction, and what causes it?",
   back:"Refraction is the change in direction of a light ray as it passes from one transparent medium into another.\n\nIt is caused by a change in the SPEED of light:\n• Light slows down when it enters a denser medium (e.g. air → glass).\n• Light speeds up when it enters a less dense medium (e.g. glass → air).\n\nThe change in speed at the boundary makes the ray bend (unless it hits the boundary along the normal).", difficulty:2, category:"definition"},
  {id:"s10fc-16-1-4", islandId:"s10i-16-1", front:"Which way does light bend when entering and leaving a denser medium?",
   back:"• Entering a denser medium (e.g. air → glass): light slows down and bends TOWARDS the normal. The angle of refraction is smaller than the angle of incidence.\n• Leaving a denser medium (e.g. glass → air): light speeds up and bends AWAY from the normal. The angle of refraction is larger than the angle of incidence.\n\nIf the ray meets the boundary along the normal (90° to the surface), it does not bend.", difficulty:2, category:"concept"},
  {id:"s10fc-16-1-5", islandId:"s10i-16-1", front:"Why does a straw look bent where it enters water?",
   back:"Light reflecting off the submerged part of the straw refracts as it leaves the water and enters the air.\n\n• As it passes from water (denser) into air (less dense), the light speeds up and bends away from the normal.\n• Your eyes assume light has travelled in a straight line, so the submerged part appears to be in a different place.\n\nThe result is that the straw looks bent or broken at the water surface.", difficulty:1, category:"application"},

  // s10i-16-2 — Lenses: Convex & Concave
  {id:"s10fc-16-2-1", islandId:"s10i-16-2", front:"What does a convex (converging) lens do to parallel rays of light?",
   back:"A convex lens is thicker in the middle than at the edges. It is a converging lens.\n\n• Parallel rays of light are refracted so that they all meet (converge) at a single point.\n• This point is called the principal focus (focal point).\n\nConvex lenses are used in magnifying glasses, cameras and the human eye.", difficulty:1, category:"definition"},
  {id:"s10fc-16-2-2", islandId:"s10i-16-2", front:"What does a concave (diverging) lens do to parallel rays of light?",
   back:"A concave lens is thinner in the middle than at the edges. It is a diverging lens.\n\n• Parallel rays of light are refracted so that they spread out (diverge).\n• The rays appear to come from a single point behind the lens — the (virtual) principal focus.\n\nConcave lenses always produce a virtual, upright, diminished image.", difficulty:1, category:"definition"},
  {id:"s10fc-16-2-3", islandId:"s10i-16-2", front:"What are the principal focus and the focal length of a lens?",
   back:"• Principal focus (focal point): the point on the principal axis where rays parallel to the axis converge (convex lens) or appear to diverge from (concave lens).\n• Focal length: the distance from the centre of the lens to the principal focus.\n\nA more powerful (more strongly curved) lens has a SHORTER focal length, because it bends the light more.", difficulty:2, category:"definition"},
  {id:"s10fc-16-2-4", islandId:"s10i-16-2", front:"What is the difference between a real image and a virtual image?",
   back:"• Real image: formed where light rays actually meet (converge). It can be projected onto a screen. A convex lens forms a real image when the object is beyond the principal focus.\n• Virtual image: formed where rays only APPEAR to come from — the rays do not actually meet there. It cannot be projected onto a screen (e.g. the image in a magnifying glass or any image from a concave lens).", difficulty:2, category:"concept"},
  {id:"s10fc-16-2-5", islandId:"s10i-16-2", front:"How do you calculate the magnification produced by a lens?",
   back:"Magnification = image height ÷ object height\n\n• It is a ratio, so it has NO units.\n• A magnification greater than 1 means the image is larger than the object (magnified).\n• A magnification less than 1 means the image is smaller than the object (diminished).\n\nExample: a 2 cm object forms a 6 cm image → magnification = 6 ÷ 2 = 3.", difficulty:2, category:"calculation"},

  // s10i-16-3 — Visible Light & Colour
  {id:"s10fc-16-3-1", islandId:"s10i-16-3", front:"How does visible light fit into the electromagnetic spectrum?",
   back:"Visible light is the narrow part of the electromagnetic (EM) spectrum that human eyes can detect.\n\n• It is a continuous range of wavelengths from red to violet.\n• Red has the LONGEST wavelength of visible light.\n• Violet has the SHORTEST wavelength of visible light.\n\nThe order (long → short wavelength) is: red, orange, yellow, green, blue, violet.", difficulty:1, category:"definition"},
  {id:"s10fc-16-3-2", islandId:"s10i-16-3", front:"Why does an opaque object appear a particular colour?",
   back:"The colour of an opaque object depends on which wavelengths of light it reflects and which it absorbs.\n\n• It reflects the wavelengths of its own colour and absorbs the rest.\n• A red apple reflects red light and absorbs the other colours.\n\nSpecial cases:\n• A WHITE object reflects all visible wavelengths.\n• A BLACK object absorbs all visible wavelengths (reflects none).", difficulty:2, category:"concept"},
  {id:"s10fc-16-3-3", islandId:"s10i-16-3", front:"How does a colour filter work?",
   back:"A colour filter transmits (lets through) light of its own colour and absorbs all the other colours.\n\n• A red filter transmits red light and absorbs the rest.\n• A blue filter transmits blue light and absorbs the rest.\n\nIf white light passes through a red filter, only red light comes out the other side. If you then add a blue filter, no light gets through, because each filter absorbs the other's colour.", difficulty:2, category:"concept"},
  {id:"s10fc-16-3-4", islandId:"s10i-16-3", front:"What is the difference between transparent, translucent and opaque materials?",
   back:"• Transparent: transmits light without scattering it, so you can see clearly through it (e.g. clear glass).\n• Translucent: transmits some light but scatters it, so objects behind look blurred (e.g. frosted glass, tissue paper).\n• Opaque: does not transmit any light — it either reflects or absorbs it, so you cannot see through it (e.g. wood, metal).", difficulty:1, category:"definition"},
  {id:"s10fc-16-3-5", islandId:"s10i-16-3", front:"What colour does a red object look under blue light?",
   back:"It looks BLACK (or very dark).\n\n• A red object only reflects red light and absorbs all other colours.\n• Under pure blue light, there is no red light for it to reflect.\n• Since it absorbs the blue light and there is no red to reflect, almost no light reaches your eye, so it appears black.\n\nThis shows that an object's apparent colour depends on the light shining on it.", difficulty:2, category:"application"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-16-1": [
    {q:"A ray of light hits a mirror at an angle of incidence of 35° to the normal. What is the angle of reflection?",
     opts:["55°","35°","70°","17.5°"], c:1,
     e:"By the law of reflection, the angle of incidence equals the angle of reflection, both measured from the normal. So the angle of reflection is also 35°."},
    {q:"From which line are the angles of incidence and reflection always measured?",
     opts:["The surface of the mirror","The horizontal","The normal (a line at 90° to the surface)","The reflected ray"], c:2,
     e:"Both angles are measured between the ray and the normal — the line drawn at right angles to the surface at the point the ray strikes it. They are never measured from the surface itself."},
    {q:"Which statement best describes diffuse reflection?",
     opts:["Parallel rays stay parallel and form a clear image","Light is scattered in many directions by a rough surface","It only happens to coloured light","The law of reflection is not obeyed"], c:1,
     e:"Diffuse reflection happens at a rough surface. The surface normals point in many directions, so reflected rays are scattered and no clear image forms — but the law of reflection is still obeyed at each point."},
    {q:"What happens to a ray of light as it passes from air into glass (a denser medium)?",
     opts:["It speeds up and bends away from the normal","It slows down and bends towards the normal","It slows down and bends away from the normal","It travels straight on at the same speed"], c:1,
     e:"Going from air into a denser medium such as glass, light slows down and bends towards the normal, so the angle of refraction is smaller than the angle of incidence."},
    {q:"Why does a straw in a glass of water appear bent at the water surface?",
     opts:["The water magnifies the straw","Light from the straw refracts as it leaves the water and enters the air","The straw actually bends in water","The water reflects the straw"], c:1,
     e:"Light from the submerged straw refracts (bends away from the normal) as it passes from water into air. Your eyes assume the light travelled in a straight line, so the straw appears displaced and looks bent."}
  ],
  "s10i-16-2": [
    {q:"What happens to parallel rays of light passing through a convex (converging) lens?",
     opts:["They spread out as if from a point behind the lens","They are brought together at the principal focus","They pass straight through unchanged","They are absorbed by the lens"], c:1,
     e:"A convex lens is a converging lens. It refracts parallel rays so that they meet at a single point on the principal axis called the principal focus."},
    {q:"A concave (diverging) lens always produces what kind of image?",
     opts:["A real, inverted, magnified image","A virtual, upright, diminished image","A real, upright image the same size","No image at all"], c:1,
     e:"A concave lens spreads light out, so the rays only appear to come from a point. It always forms a virtual, upright and diminished (smaller) image."},
    {q:"What is the focal length of a lens?",
     opts:["The width of the lens","The distance from the lens to the object","The distance from the centre of the lens to the principal focus","The height of the image"], c:2,
     e:"The focal length is the distance from the centre of the lens to its principal focus. A more powerful lens bends light more strongly and has a shorter focal length."},
    {q:"An object 4 cm tall produces an image 12 cm tall through a convex lens. What is the magnification?",
     opts:["3","0.33","8","48"], c:0,
     e:"Magnification = image height ÷ object height = 12 ÷ 4 = 3. The image is three times taller than the object. Magnification is a ratio and has no units."},
    {q:"Which statement about a real image is correct?",
     opts:["It can be projected onto a screen because the rays actually meet","It can never be formed by a convex lens","It is always upright and the same size as the object","The light rays only appear to come from it"], c:0,
     e:"A real image is formed where light rays actually converge, so it can be captured on a screen. A convex lens forms a real image when the object is beyond the principal focus. A virtual image (where rays only appear to come from) cannot be projected."}
  ],
  "s10i-16-3": [
    {q:"Which colour of visible light has the longest wavelength?",
     opts:["Violet","Green","Blue","Red"], c:3,
     e:"Within the visible spectrum, red light has the longest wavelength and violet has the shortest. The order from longest to shortest is red, orange, yellow, green, blue, violet."},
    {q:"A white object is described as white because it...",
     opts:["absorbs all visible wavelengths","reflects all visible wavelengths","transmits all light through it","only reflects white light, which is a single colour"], c:1,
     e:"A white object reflects all the wavelengths of visible light equally, so we see it as white. (A black object absorbs all wavelengths and reflects none.)"},
    {q:"White light is shone through a green filter. What comes out the other side?",
     opts:["White light","All colours except green","Green light only","No light at all"], c:2,
     e:"A colour filter transmits its own colour and absorbs the rest. A green filter transmits green light and absorbs all the other wavelengths, so only green light emerges."},
    {q:"A red jumper is viewed under pure blue light. What colour does it appear?",
     opts:["Red","Blue","Purple","Black"], c:3,
     e:"A red object only reflects red light and absorbs all other colours. Under blue light there is no red to reflect, and the blue is absorbed, so almost no light reaches the eye and the jumper looks black."},
    {q:"Which word describes a material that transmits some light but scatters it, so objects behind appear blurred?",
     opts:["Transparent","Translucent","Opaque","Reflective"], c:1,
     e:"A translucent material (such as frosted glass or tissue paper) lets some light through but scatters it. Transparent materials transmit light without scattering it; opaque materials transmit none."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-16-1': `
<h2>Reflection &amp; Refraction of Light</h2>
<div class="lesson-diagram" data-diagram="refraction"><p class="diagram-caption">A ray slows down and bends towards the normal as it enters glass, then speeds up and bends away from the normal as it leaves.</p></div>
<p>Light travels in straight lines until it meets a boundary. At a boundary it can be reflected, or it can pass through and be refracted.</p>

<h3>The Law of Reflection</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Angle of incidence = angle of reflection</strong></p>
<p>Both angles are measured between the ray and the <strong>normal</strong> &mdash; a line drawn at 90&deg; to the surface where the ray strikes it. The angles are never measured from the surface.</p>

<h3>Specular and Diffuse Reflection</h3>
<p><strong>Specular reflection</strong> happens at a smooth, flat surface such as a mirror. Parallel rays stay parallel, so a clear image is formed. <strong>Diffuse reflection</strong> happens at a rough surface such as paper: the normals point in many directions, so the rays are scattered and no clear image forms. Both still obey the law of reflection at every point.</p>

<h3>Refraction</h3>
<p>Refraction is the change in direction of light as it passes from one transparent medium into another. It is caused by a change in the <strong>speed</strong> of light. Going from air into a denser medium such as glass, light slows down and bends <strong>towards</strong> the normal. Leaving the glass, it speeds up and bends <strong>away</strong> from the normal. A ray that meets the boundary along the normal does not bend at all.</p>

<h3>Worked Example</h3>
<p>A ray of light strikes a glass block at an angle of incidence of 40&deg;. It refracts and travels through the glass at 25&deg; to the normal. Explain what has happened.</p>
<p>The ray has passed from air into a denser medium (glass), so it has <strong>slowed down and bent towards the normal</strong>. That is why the angle of refraction (25&deg;) is smaller than the angle of incidence (40&deg;).</p>

<h3>Common Mistake</h3>
<p>Students often measure the angles of incidence, reflection and refraction from the surface instead of from the normal. Always measure from the normal &mdash; the line at right angles to the surface. A 40&deg; angle of incidence is 40&deg; from the normal, which is 50&deg; from the surface.</p>
`,

's10i-16-2': `
<h2>Lenses: Convex &amp; Concave</h2>
<div class="lesson-diagram" data-diagram="lenses"><p class="diagram-caption">A convex lens converges parallel rays to a principal focus; a concave lens makes them diverge as if from a focus behind the lens.</p></div>
<p>A lens refracts light to form an image. The two types behave in opposite ways: convex lenses bring light together, concave lenses spread it out.</p>

<h3>Convex and Concave Lenses</h3>
<p>A <strong>convex (converging) lens</strong> is thicker in the middle. It refracts parallel rays so they meet at the <strong>principal focus</strong>. A <strong>concave (diverging) lens</strong> is thinner in the middle. It spreads parallel rays out so they appear to come from a principal focus behind the lens. The distance from the centre of the lens to the principal focus is the <strong>focal length</strong>.</p>

<h3>Drawing a Ray Diagram for a Convex Lens</h3>
<p>To find the image, draw two rays from the top of the object: one ray parallel to the axis that refracts through the principal focus, and one ray straight through the centre of the lens (undeviated). Where the rays cross is the top of the image. If the object is beyond the principal focus, the rays cross to form a <strong>real, inverted</strong> image that can be put on a screen.</p>

<h3>Real and Virtual Images</h3>
<p>A <strong>real image</strong> forms where rays actually meet and can be projected onto a screen. A <strong>virtual image</strong> forms where rays only appear to come from; it cannot be projected. A magnifying glass and any concave lens produce virtual images.</p>

<h3>Magnification</h3>
<p style="font-size:1.1em;text-align:center;padding:0.5em;background:#ecfdf5;border-radius:6px"><strong>Magnification = image height &divide; object height</strong></p>
<p>Magnification is a ratio, so it has <strong>no units</strong>. A value above 1 means the image is larger than the object.</p>

<h3>Worked Example</h3>
<p>An object is 5 mm tall. A convex lens forms an image that is 20 mm tall. Calculate the magnification.</p>
<p>Magnification = image height &divide; object height = 20 &divide; 5 = <strong>4</strong></p>
<p>The image is four times taller than the object, so the lens has magnified it.</p>

<h3>Common Mistake</h3>
<p>Students sometimes give magnification a unit such as cm or mm. It is a <em>ratio</em> of two heights, so the units cancel and the answer has no unit. Also make sure both heights are in the same unit before dividing.</p>
`,

's10i-16-3': `
<h2>Visible Light &amp; Colour</h2>
<div class="lesson-diagram" data-diagram="colour-mixing"><p class="diagram-caption">Objects appear coloured because they reflect some wavelengths and absorb the rest; filters transmit their own colour and absorb the others.</p></div>
<p>Visible light is the small part of the electromagnetic spectrum our eyes can detect. The colour we see depends on the wavelengths that reach the eye.</p>

<h3>Visible Light and the Spectrum</h3>
<p>Visible light is a continuous range of wavelengths. <strong>Red</strong> has the longest wavelength and <strong>violet</strong> has the shortest. The order from longest to shortest is red, orange, yellow, green, blue, violet. White light is a mixture of all of these wavelengths together.</p>

<h3>Why Opaque Objects Have Colour</h3>
<p>An opaque object reflects the wavelengths of its own colour and absorbs the rest. A red book reflects red light and absorbs the others. A <strong>white</strong> object reflects all wavelengths; a <strong>black</strong> object absorbs all wavelengths and reflects none. This is why an object can appear a different colour depending on the light shining on it &mdash; a red object under pure blue light looks black, because there is no red light for it to reflect.</p>

<h3>Colour Filters</h3>
<p>A colour filter transmits (lets through) light of its own colour and absorbs the other wavelengths. A red filter transmits red and absorbs the rest, so white light becomes red after passing through it. Placing a red filter and a blue filter together lets no light through, because each absorbs the other's colour.</p>

<h3>Transparent, Translucent and Opaque</h3>
<p><strong>Transparent</strong> materials transmit light without scattering it (clear glass). <strong>Translucent</strong> materials transmit some light but scatter it, so objects behind look blurred (frosted glass). <strong>Opaque</strong> materials transmit no light, only reflecting or absorbing it (wood).</p>

<h3>Worked Example</h3>
<p>A green leaf is viewed under a red lamp. What colour does it appear, and why?</p>
<p>The leaf reflects only green light and absorbs all other colours. Under red light there is no green to reflect, and the red is absorbed, so almost no light reaches the eye. The leaf therefore appears <strong>black</strong>.</p>

<h3>Common Mistake</h3>
<p>Students often think an object &ldquo;contains&rdquo; its colour and will look the same under any light. In fact the colour we see depends on both the object and the light shining on it. Change the light and a coloured object can look completely different &mdash; even black.</p>
`

});
