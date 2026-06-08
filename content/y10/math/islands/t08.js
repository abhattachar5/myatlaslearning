// content/y10/math/islands/t08.js — Year 10 Maths Topic 8: Trigonometry (SOHCAHTOA)
// Islands m10i-08-1 .. m10i-08-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-08-1 — Finding a Side
  {id:"m10fc-08-1-1", islandId:"m10i-08-1", front:"What does SOHCAHTOA stand for?",
   back:"sin = Opp/Hyp · cos = Adj/Hyp · tan = Opp/Adj.\n\nThe three ratios link an angle to two sides of a right-angled triangle.", difficulty:1, category:"definition"},
  {id:"m10fc-08-1-2", islandId:"m10i-08-1", front:"How do you label the sides relative to an angle?",
   back:"Hypotenuse = opposite the right angle; Opposite = opposite the marked angle; Adjacent = next to the marked angle.", difficulty:2, category:"definition"},
  {id:"m10fc-08-1-3", islandId:"m10i-08-1", front:"Which ratio uses opposite and hypotenuse?",
   back:"Sine (SOH).\n\nsin(angle) = opposite ÷ hypotenuse.", difficulty:1, category:"concept"},
  {id:"m10fc-08-1-4", islandId:"m10i-08-1", front:"Find the opposite side when the angle is 30° and the hypotenuse is 10 cm.",
   back:"5 cm\n\nsin 30° = opp/10 → opp = 10 × sin 30° = 10 × 0.5 = 5 cm.", difficulty:2, category:"calculation"},
  {id:"m10fc-08-1-5", islandId:"m10i-08-1", front:"How do you choose which ratio to use?",
   back:"Label the two sides you know/want, then pick the ratio that uses exactly those two.\n\nOpp & Hyp → sin; Adj & Hyp → cos; Opp & Adj → tan.", difficulty:2, category:"concept"},
  {id:"m10fc-08-1-6", islandId:"m10i-08-1", front:"Find the adjacent side when the angle is 60° and the hypotenuse is 8 cm.",
   back:"4 cm\n\ncos 60° = adj/8 → adj = 8 × cos 60° = 8 × 0.5 = 4 cm.", difficulty:3, category:"application"},

  // m10i-08-2 — Finding an Angle
  {id:"m10fc-08-2-1", islandId:"m10i-08-2", front:"How do you find a missing angle with trigonometry?",
   back:"Use the inverse function (sin⁻¹, cos⁻¹ or tan⁻¹) on the ratio of the two known sides.", difficulty:2, category:"definition"},
  {id:"m10fc-08-2-2", islandId:"m10i-08-2", front:"Find the angle when opposite = 3 and hypotenuse = 6.",
   back:"30°\n\nsin θ = 3/6 = 0.5, so θ = sin⁻¹(0.5) = 30°.", difficulty:2, category:"calculation"},
  {id:"m10fc-08-2-3", islandId:"m10i-08-2", front:"Find the angle when opposite = 4 and adjacent = 4.",
   back:"45°\n\ntan θ = 4/4 = 1, so θ = tan⁻¹(1) = 45°.", difficulty:2, category:"calculation"},
  {id:"m10fc-08-2-4", islandId:"m10i-08-2", front:"Which inverse function uses adjacent and hypotenuse?",
   back:"cos⁻¹.\n\nIf cos θ = adj/hyp, then θ = cos⁻¹(adj/hyp).", difficulty:2, category:"concept"},
  {id:"m10fc-08-2-5", islandId:"m10i-08-2", front:"Find the angle when adjacent = 5 and hypotenuse = 10.",
   back:"60°\n\ncos θ = 5/10 = 0.5, so θ = cos⁻¹(0.5) = 60°.", difficulty:3, category:"application"},
  {id:"m10fc-08-2-6", islandId:"m10i-08-2", front:"What's the first step to find an angle?",
   back:"Write the ratio of the two known sides, decide if it is sin, cos or tan, then apply the inverse.", difficulty:2, category:"concept"},

  // m10i-08-3 — Exact Values & Applications
  {id:"m10fc-08-3-1", islandId:"m10i-08-3", front:"What are sin 30°, cos 60° and tan 45°?",
   back:"sin 30° = ½, cos 60° = ½, tan 45° = 1.\n\nThese exact values are worth memorising for the non-calculator paper.", difficulty:2, category:"definition"},
  {id:"m10fc-08-3-2", islandId:"m10i-08-3", front:"What is tan 0° and sin 90°?",
   back:"tan 0° = 0 and sin 90° = 1.\n\nAlso cos 0° = 1, sin 0° = 0, cos 90° = 0.", difficulty:2, category:"definition"},
  {id:"m10fc-08-3-3", islandId:"m10i-08-3", front:"What is an angle of elevation?",
   back:"The angle measured UP from the horizontal to an object.\n\nAn angle of depression is measured DOWN from the horizontal.", difficulty:2, category:"concept"},
  {id:"m10fc-08-3-4", islandId:"m10i-08-3", front:"sin 60° and cos 30° both equal what exact value?",
   back:"√3/2.\n\nThey are equal because 60° and 30° are complementary (add to 90°).", difficulty:3, category:"application"},
  {id:"m10fc-08-3-5", islandId:"m10i-08-3", front:"From 20 m away, the angle of elevation to a tree top is 35°. How do you find its height?",
   back:"Use tan: height = 20 × tan 35°.\n\nThe 20 m is adjacent and the height is opposite the 35° angle.", difficulty:3, category:"application"},
  {id:"m10fc-08-3-6", islandId:"m10i-08-3", front:"What is tan 30° as an exact value?",
   back:"1/√3 (or √3/3).\n\nIt comes from the 30-60-90 triangle.", difficulty:3, category:"definition"}
);

Object.assign(QUESTIONS, {
  "m10i-08-1": [
    {q:"Which ratio links opposite and adjacent?", opts:["tan","sin","cos","none"], c:0,
     e:"TOA: tan = opposite ÷ adjacent."},
    {q:"Find the opposite side: angle 30°, hypotenuse 12 cm.", opts:["6 cm","10.4 cm","24 cm","4 cm"], c:0,
     e:"sin 30° = opp/12 → opp = 12 × 0.5 = 6 cm."},
    {q:"The hypotenuse in a right triangle is:", opts:["Opposite the right angle","Opposite the marked angle","Next to the marked angle","The shortest side"], c:0,
     e:"The hypotenuse is the longest side, opposite the right angle."},
    {q:"Find the adjacent side: angle 60°, hypotenuse 14 cm.", opts:["7 cm","12.1 cm","28 cm","6 cm"], c:0,
     e:"cos 60° = adj/14 → adj = 14 × 0.5 = 7 cm."},
    {q:"You know the opposite and the hypotenuse. Which ratio?", opts:["sin","cos","tan","Pythagoras"], c:0,
     e:"SOH: sin = opposite ÷ hypotenuse."}
  ],
  "m10i-08-2": [
    {q:"Find the angle: opposite 5, hypotenuse 10.", opts:["30°","60°","45°","50°"], c:0,
     e:"sin θ = 5/10 = 0.5 → θ = sin⁻¹(0.5) = 30°."},
    {q:"Find the angle: opposite 7, adjacent 7.", opts:["45°","30°","60°","90°"], c:0,
     e:"tan θ = 7/7 = 1 → θ = tan⁻¹(1) = 45°."},
    {q:"To find an angle from adjacent and hypotenuse, use:", opts:["cos⁻¹","sin⁻¹","tan⁻¹","Pythagoras"], c:0,
     e:"cos θ = adj/hyp, so θ = cos⁻¹(adj/hyp)."},
    {q:"Find the angle: adjacent 6, hypotenuse 12.", opts:["60°","30°","45°","50°"], c:0,
     e:"cos θ = 6/12 = 0.5 → θ = cos⁻¹(0.5) = 60°."},
    {q:"sin θ = 0.5 gives θ =", opts:["30°","60°","45°","0.5°"], c:0,
     e:"θ = sin⁻¹(0.5) = 30°."}
  ],
  "m10i-08-3": [
    {q:"What is tan 45°?", opts:["1","0","½","√3"], c:0,
     e:"tan 45° = 1 exactly (opposite equals adjacent)."},
    {q:"What is sin 30°?", opts:["½","1","√3/2","0"], c:0,
     e:"sin 30° = ½."},
    {q:"An angle of elevation is measured:", opts:["Up from the horizontal","Down from the horizontal","From the vertical","From north"], c:0,
     e:"Elevation is measured upward from the horizontal."},
    {q:"From 20 m away, the angle of elevation to a roof is 40°. The height is:", opts:["20 tan 40°","20 sin 40°","20 cos 40°","20 ÷ tan 40°"], c:0,
     e:"The 20 m is adjacent and the height is opposite, so use tan: height = 20 tan 40°."},
    {q:"What is cos 60°?", opts:["½","1","√3/2","0"], c:0,
     e:"cos 60° = ½."}
  ]
});

Object.assign(LESSONS, {
  "m10i-08-1": `<h2>Trigonometry: Finding a Side</h2>
<p><strong>SOHCAHTOA</strong> gives three ratios linking an angle to two sides of a right-angled triangle: sin = Opp/Hyp, cos = Adj/Hyp, tan = Opp/Adj. Label the sides relative to the marked angle, then pick the ratio that uses the two sides you care about.</p>
<div class="lesson-diagram" data-diagram="math-trig-triangle"><p class="diagram-caption">Opposite, adjacent and hypotenuse relative to the marked angle</p></div>
<h3>Worked example</h3>
<p>Angle 30°, hypotenuse 10 cm, find the opposite: sin 30° = opp/10 → opp = 10 × 0.5 = <strong>5 cm</strong>.</p>
<h3>Common mistake</h3>
<p>Label the hypotenuse first (opposite the right angle). Mixing up opposite and adjacent leads to the wrong ratio.</p>`,

  "m10i-08-2": `<h2>Trigonometry: Finding an Angle</h2>
<p>To find a missing <strong>angle</strong>, form the ratio of the two known sides, decide whether it is sin, cos or tan, then apply the <strong>inverse</strong> function (sin⁻¹, cos⁻¹ or tan⁻¹).</p>
<h3>Worked example</h3>
<p>Opposite 3, hypotenuse 6: sin θ = 3/6 = 0.5, so θ = sin⁻¹(0.5) = <strong>30°</strong>.</p>
<h3>Common mistake</h3>
<p>Use the inverse function, not the ordinary one — to get the angle from a ratio you press sin⁻¹, not sin.</p>`,

  "m10i-08-3": `<h2>Exact Values &amp; Applications</h2>
<p>Some trig values are <strong>exact</strong> and worth memorising for the non-calculator paper: sin 30° = ½, cos 60° = ½, tan 45° = 1, sin 60° = cos 30° = √3/2, tan 30° = 1/√3.</p>
<h3>Angles of elevation</h3>
<p>An <strong>angle of elevation</strong> is measured up from the horizontal (depression is downward). From 20 m away, the height of a tree at elevation 35° is height = 20 × tan 35° (the 20 m is adjacent, the height is opposite).</p>
<h3>Common mistake</h3>
<p>Match the sides to the angle before choosing the ratio — for elevation problems the horizontal distance is usually the adjacent side.</p>`
});

// ── m10i-08-4 — 3D Trigonometry ──────────────────────────────────────────────
FLASHCARDS.push(
  {id:"m10fc-08-4-1", islandId:"m10i-08-4", front:"What is the key skill in 3D trigonometry?",
   back:"Finding the correct right-angled triangle INSIDE the 3D shape, then using SOHCAHTOA (or Pythagoras) on that 2D triangle.\n\nOften you must find one length first (using 3D Pythagoras) before you can find an angle.", difficulty:2, category:"concept"},
  {id:"m10fc-08-4-2", islandId:"m10i-08-4", front:"How do you find the angle between a line and a plane?",
   back:"1. Drop the line onto the plane to find its 'shadow' (projection).\n2. The angle is between the line and its projection.\n3. Identify the right-angled triangle (line = hypotenuse) and use SOHCAHTOA.", difficulty:3, category:"concept"},
  {id:"m10fc-08-4-3", islandId:"m10i-08-4", front:"A cuboid is 3 cm × 4 cm × 12 cm. What is the diagonal of its base?",
   back:"Use Pythagoras on the base rectangle: √(3² + 4²) = √(9 + 16) = √25 = 5 cm.\n\nThis base diagonal is the 'adjacent' side when finding the angle to the base.", difficulty:2, category:"application"},
  {id:"m10fc-08-4-4", islandId:"m10i-08-4", front:"For that 3×4×12 cuboid, what angle does the space diagonal make with the base?",
   back:"The right-angled triangle has base diagonal 5 (adjacent) and height 12 (opposite).\ntan θ = 12 / 5 = 2.4\nθ = tan⁻¹(2.4) ≈ 67.4°.", difficulty:3, category:"application"},
  {id:"m10fc-08-4-5", islandId:"m10i-08-4", front:"Why might you need 3D Pythagoras before 3D trig?",
   back:"Because the side you need for the trig ratio (often a diagonal across a face or the base) isn't given directly — you calculate it first with Pythagoras, then use it in SOHCAHTOA.", difficulty:2, category:"concept"}
);
Object.assign(QUESTIONS, {
  "m10i-08-4": [
    {q:"The first step in most 3D trigonometry problems is to:", opts:["Identify a right-angled triangle inside the shape","Use the cosine rule","Add all the edges","Find the volume"], c:0,
     e:"Locate the relevant 2D right-angled triangle within the 3D shape, then apply SOHCAHTOA or Pythagoras."},
    {q:"The base diagonal of a 3 cm × 4 cm rectangle is:", opts:["5 cm","7 cm","12 cm","25 cm"], c:0,
     e:"√(3² + 4²) = √25 = 5 cm."},
    {q:"For a 3×4×12 cuboid, the angle between the space diagonal and the base uses the triangle with opposite = 12 and adjacent =:", opts:["5 (the base diagonal)","3","4","13"], c:0,
     e:"The base diagonal (5 cm) is the adjacent side; the height (12 cm) is opposite."},
    {q:"tan⁻¹(12 ÷ 5) is approximately:", opts:["67.4°","22.6°","2.4°","13°"], c:0,
     e:"tan θ = 2.4 gives θ ≈ 67.4° (and the complementary angle would be ≈ 22.6°)."},
    {q:"To find an angle in 3D you often must first find a length using:", opts:["3D Pythagoras","The quadratic formula","The mean","Standard form"], c:0,
     e:"A needed side (e.g. a face or base diagonal) is usually found with Pythagoras before applying a trig ratio."}
  ]
});
Object.assign(LESSONS, {

'm10i-08-4': `
<h2>3D Trigonometry</h2>
<p>3D trigonometry looks hard but reduces to the same skills as 2D — the challenge is <strong>finding the right-angled triangle hidden inside the 3D shape</strong>, then using SOHCAHTOA or Pythagoras on it.</p>
<h3>The angle between a line and a plane</h3>
<ol>
  <li>Project the line straight down onto the plane to get its 'shadow'.</li>
  <li>The angle you want is between the line and that shadow.</li>
  <li>This forms a right-angled triangle with the line as the hypotenuse — apply SOHCAHTOA.</li>
</ol>
<p>You often have to find a length first (e.g. a base diagonal) using <strong>3D Pythagoras</strong> before you can use a trig ratio.</p>
<h3>Worked example</h3>
<p>A cuboid measures 3 cm × 4 cm × 12 cm. Find the angle between the space diagonal and the base.</p>
<p>Step 1 — base diagonal: √(3² + 4²) = √25 = 5 cm.<br>
Step 2 — the right-angled triangle has adjacent = 5 (base diagonal) and opposite = 12 (height).<br>
Step 3 — tan θ = 12 ÷ 5 = 2.4, so θ = tan⁻¹(2.4) ≈ <strong>67.4°</strong>.</p>
<h3>Common mistake</h3>
<p>Using a given edge instead of the correct diagonal as the adjacent side. Always identify which 2D triangle you are working in and which sides you actually have before choosing the ratio.</p>
`
});
