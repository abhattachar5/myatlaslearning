// math-y8-t30.js — Year 8 Maths Topic 30: Trigonometry
// Islands: m8i-30-1 (Trig Ratios & Finding Sides), m8i-30-2 (Finding Angles with Trigonometry)
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-30-1 — Trig Ratios & Finding Sides
  {id:"m8fc-30-1-1",islandId:"m8i-30-1",front:"In a right-angled triangle, how do you label the three sides relative to a marked angle?",
   back:"• Hypotenuse (HYP) — the longest side, always opposite the right angle.\n• Opposite (OPP) — the side directly opposite the marked angle.\n• Adjacent (ADJ) — the side next to (touching) the marked angle that is NOT the hypotenuse.",difficulty:1,category:"definition"},
  {id:"m8fc-30-1-2",islandId:"m8i-30-1",front:"State the SOH CAH TOA ratios.",
   back:"SOH: sin θ = Opposite ÷ Hypotenuse\nCAH: cos θ = Adjacent ÷ Hypotenuse\nTOA: tan θ = Opposite ÷ Adjacent\n\nMemory aid: SOH CAH TOA",difficulty:1,category:"definition"},
  {id:"m8fc-30-1-3",islandId:"m8i-30-1",front:"Find the opposite side when the hypotenuse is 10 cm and the angle is 30°.",
   back:"Use SOH: sin 30° = OPP ÷ HYP\nsin 30° = 0.5\nOPP = 10 × 0.5 = 5 cm\n\nAnswer: 5 cm (exact)",difficulty:1,category:"calculation"},
  {id:"m8fc-30-1-4",islandId:"m8i-30-1",front:"Find the adjacent side when the hypotenuse is 8 cm and the angle is 60°.",
   back:"Use CAH: cos 60° = ADJ ÷ HYP\ncos 60° = 0.5\nADJ = 8 × 0.5 = 4 cm\n\nAnswer: 4 cm (exact)",difficulty:2,category:"calculation"},
  {id:"m8fc-30-1-5",islandId:"m8i-30-1",front:"Find the opposite side when the adjacent side is 6 cm and the angle is 45°.",
   back:"Use TOA: tan 45° = OPP ÷ ADJ\ntan 45° = 1\nOPP = 6 × 1 = 6 cm\n\nAnswer: 6 cm (exact — the two legs of a 45° right triangle are equal)",difficulty:2,category:"calculation"},
  {id:"m8fc-30-1-6",islandId:"m8i-30-1",front:"Which trig ratio do you use when you know the hypotenuse and want the adjacent side?",
   back:"Use CAH: cos θ = Adjacent ÷ Hypotenuse\n\nRearrange to find the adjacent:\nADJ = HYP × cos θ\n\nExample: HYP = 12 cm, θ = 60°\nADJ = 12 × cos 60° = 12 × 0.5 = 6 cm",difficulty:2,category:"concept"},

  // m8i-30-2 — Finding Angles with Trigonometry
  {id:"m8fc-30-2-1",islandId:"m8i-30-2",front:"How do you find a missing angle using trigonometry?",
   back:"1. Identify which two sides you know (OPP, ADJ or HYP).\n2. Choose the correct ratio (SOH, CAH or TOA).\n3. Write the ratio as a decimal (e.g. OPP ÷ ADJ).\n4. Apply the inverse trig function: θ = sin⁻¹, cos⁻¹ or tan⁻¹.\n\nMake sure your calculator is in DEGREE mode.",difficulty:1,category:"definition"},
  {id:"m8fc-30-2-2",islandId:"m8i-30-2",front:"A right triangle has opposite = 3 cm and adjacent = 4 cm. Find the marked angle.",
   back:"Use TOA: tan θ = OPP ÷ ADJ = 3 ÷ 4 = 0.75\nθ = tan⁻¹(0.75) = 36.9° (to 1 d.p.)\n\nThis is a 3-4-5 triangle. The angle opposite the side of length 3 is 36.9°.",difficulty:2,category:"calculation"},
  {id:"m8fc-30-2-3",islandId:"m8i-30-2",front:"What is the angle of elevation and how is it measured?",
   back:"The angle of elevation is the angle measured UPWARD from the horizontal to a line of sight.\n\nStand at ground level looking up at the top of a building — the angle your line of sight makes with the horizontal is the angle of elevation.",difficulty:1,category:"definition"},
  {id:"m8fc-30-2-4",islandId:"m8i-30-2",front:"What is the angle of depression and how does it relate to the angle of elevation?",
   back:"The angle of depression is measured DOWNWARD from the horizontal to a line of sight.\n\nAngles of elevation and depression are EQUAL (alternate angles between parallel horizontal lines).\nIf you look up at angle 35°, the person above looks down at angle 35°.",difficulty:2,category:"concept"},
  {id:"m8fc-30-2-5",islandId:"m8i-30-2",front:"A ladder 5 m long leans against a wall. Its base is 3 m from the wall. Find the angle the ladder makes with the ground.",
   back:"HYP = 5 m, ADJ = 3 m, find angle at the base.\nUse CAH: cos θ = ADJ ÷ HYP = 3 ÷ 5 = 0.6\nθ = cos⁻¹(0.6) = 53.1° (to 1 d.p.)\n\n(Note: 3-4-5 triangle; the third side would be 4 m.)",difficulty:2,category:"application"},
  {id:"m8fc-30-2-6",islandId:"m8i-30-2",front:"A person stands 12 m from a tree. The angle of elevation to the top of the tree is 30°. How tall is the tree?",
   back:"ADJ = 12 m (horizontal distance), angle = 30°, find OPP (height).\nUse TOA: tan 30° = OPP ÷ ADJ\nOPP = 12 × tan 30° = 12 × 0.5774 ≈ 6.9 m (to 1 d.p.)\n\n(tan 30° = 1/√3 ≈ 0.5774)",difficulty:3,category:"application"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-30-1":[
    {q:"In a right-angled triangle, relative to a marked angle, which side is the hypotenuse?",opts:["The side opposite the marked angle","The side adjacent to the marked angle","The longest side, opposite the right angle","The shortest side"],c:2,e:"The hypotenuse is always the longest side and is always opposite the right angle, regardless of which angle is marked."},
    {q:"A right triangle has a hypotenuse of 10 cm and an angle of 30°. What is the length of the opposite side?",opts:["8.7 cm","5 cm","6 cm","7.07 cm"],c:1,e:"Use SOH: OPP = HYP × sin 30° = 10 × 0.5 = 5 cm. sin 30° = 0.5 exactly."},
    {q:"Find the adjacent side in a right triangle where the hypotenuse is 12 cm and the angle is 60°.",opts:["10.4 cm","6 cm","8 cm","9 cm"],c:1,e:"Use CAH: ADJ = HYP × cos 60° = 12 × 0.5 = 6 cm. cos 60° = 0.5 exactly."},
    {q:"Which formula correctly rearranges to find the opposite side when you know the adjacent side and the angle?",opts:["OPP = ADJ ÷ tan θ","OPP = ADJ × cos θ","OPP = ADJ × tan θ","OPP = ADJ × sin θ"],c:2,e:"TOA: tan θ = OPP ÷ ADJ, so rearranging: OPP = ADJ × tan θ."},
    {q:"A right triangle has an angle of 45° and the adjacent side is 7 cm. What is the opposite side?",opts:["9.9 cm","4.95 cm","7 cm","3.5 cm"],c:2,e:"Use TOA: OPP = ADJ × tan 45° = 7 × 1 = 7 cm. tan 45° = 1 exactly, so the two legs are equal."}
  ],
  "m8i-30-2":[
    {q:"A right triangle has opposite = 4 cm and hypotenuse = 8 cm. Which calculation finds the angle?",opts:["cos⁻¹(0.5)","tan⁻¹(0.5)","sin⁻¹(0.5)","sin⁻¹(2)"],c:2,e:"OPP and HYP → use SOH. sin θ = 4 ÷ 8 = 0.5, so θ = sin⁻¹(0.5) = 30°."},
    {q:"A right triangle has opposite = 3 cm and adjacent = 4 cm. What is the angle? (to 1 d.p.)",opts:["41.4°","53.1°","36.9°","30.0°"],c:2,e:"tan θ = OPP ÷ ADJ = 3 ÷ 4 = 0.75. θ = tan⁻¹(0.75) ≈ 36.9° (to 1 d.p.)."},
    {q:"What is the angle of elevation?",opts:["The angle measured downward from horizontal","The angle at the top of a triangle","The angle measured upward from horizontal to a line of sight","The angle at the right angle"],c:2,e:"The angle of elevation is measured upward from the horizontal to the line of sight — you tilt your head up from looking straight ahead."},
    {q:"A 5 m ladder leans against a wall with its foot 3 m from the wall. What angle does the ladder make with the ground? (to 1 d.p.)",opts:["36.9°","53.1°","30.0°","45.0°"],c:1,e:"cos θ = ADJ ÷ HYP = 3 ÷ 5 = 0.6. θ = cos⁻¹(0.6) ≈ 53.1° (to 1 d.p.)."},
    {q:"From the top of a cliff, the angle of depression to a boat is 35°. The horizontal distance to the boat is 200 m. How high is the cliff? (to 1 d.p.)",opts:["163.8 m","140.0 m","244.6 m","114.3 m"],c:1,e:"The angle of depression equals the angle at the base of the triangle (alternate angles). Use TOA: height = 200 × tan 35° ≈ 200 × 0.7002 ≈ 140.0 m (to 1 d.p.)."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-30-1': `
<h2>Trig Ratios &amp; Finding Sides</h2>
<p>Trigonometry lets you find unknown sides and angles in <strong>right-angled triangles</strong>. The three ratios — sine, cosine and tangent — link an angle to the ratio of two sides.</p>

<h3>Labelling the sides</h3>
<p>Always label the sides <strong>relative to the marked angle θ</strong> (not the right angle):</p>
<ul>
  <li><strong>Hypotenuse (HYP)</strong> — longest side, opposite the right angle.</li>
  <li><strong>Opposite (OPP)</strong> — the side directly opposite the angle θ.</li>
  <li><strong>Adjacent (ADJ)</strong> — the side next to θ that is not the hypotenuse.</li>
</ul>
<div class="lesson-diagram" data-diagram="math-trig-triangle"></div>

<h3>SOH CAH TOA</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr style="background:#e3f2fd"><th style="padding:8px;border:1px solid #ccc">Name</th><th style="padding:8px;border:1px solid #ccc">Formula</th><th style="padding:8px;border:1px solid #ccc">Use when you know…</th></tr>
  <tr><td style="padding:8px;border:1px solid #ccc"><strong>SOH</strong> — Sine</td><td style="padding:8px;border:1px solid #ccc">sin θ = OPP ÷ HYP</td><td style="padding:8px;border:1px solid #ccc">OPP &amp; HYP</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc"><strong>CAH</strong> — Cosine</td><td style="padding:8px;border:1px solid #ccc">cos θ = ADJ ÷ HYP</td><td style="padding:8px;border:1px solid #ccc">ADJ &amp; HYP</td></tr>
  <tr><td style="padding:8px;border:1px solid #ccc"><strong>TOA</strong> — Tangent</td><td style="padding:8px;border:1px solid #ccc">tan θ = OPP ÷ ADJ</td><td style="padding:8px;border:1px solid #ccc">OPP &amp; ADJ</td></tr>
</table>

<h3>Finding a missing side</h3>
<p>Choose the ratio that involves the side you want and the side you know. Rearrange to isolate the unknown side.</p>
<div class="example-box">
<p><strong>Example 1:</strong> Hypotenuse = 10 cm, angle = 30°. Find the opposite side.</p>
<p>We know HYP and want OPP → use SOH.<br>
sin 30° = OPP ÷ 10<br>
OPP = 10 × sin 30° = 10 × 0.5 = <strong>5 cm</strong> (exact)</p>
</div>
<div class="example-box">
<p><strong>Example 2:</strong> Hypotenuse = 8 cm, angle = 60°. Find the adjacent side.</p>
<p>We know HYP and want ADJ → use CAH.<br>
cos 60° = ADJ ÷ 8<br>
ADJ = 8 × cos 60° = 8 × 0.5 = <strong>4 cm</strong> (exact)</p>
</div>
<div class="example-box">
<p><strong>Example 3:</strong> Adjacent = 6 cm, angle = 45°. Find the opposite side.</p>
<p>We know ADJ and want OPP → use TOA.<br>
tan 45° = OPP ÷ 6<br>
OPP = 6 × tan 45° = 6 × 1 = <strong>6 cm</strong> (exact — both legs equal in a 45° triangle)</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Hypotenuse</dt><dd>The longest side of a right-angled triangle, always opposite the right angle.</dd>
<dt>Opposite</dt><dd>The side across from the marked angle θ.</dd>
<dt>Adjacent</dt><dd>The side next to the marked angle θ (not the hypotenuse).</dd>
<dt>SOH CAH TOA</dt><dd>Memory aid for the three trigonometric ratios: sin = OPP/HYP, cos = ADJ/HYP, tan = OPP/ADJ.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Mislabelling OPP and ADJ — ✅ always label relative to the marked angle, not the right angle.</li>
<li>❌ Forgetting to rearrange — ✅ if OPP is unknown, OPP = HYP × sin θ (multiply, not divide).</li>
<li>❌ Using the wrong ratio — ✅ identify which two sides are involved first, then pick SOH, CAH or TOA.</li>
<li>❌ Calculator in radians — ✅ always check your calculator is set to DEGREES.</li>
</ul>`,

'm8i-30-2': `
<h2>Finding Angles with Trigonometry</h2>
<p>When you know two sides of a right-angled triangle, you can find a missing angle using the <strong>inverse trigonometric functions</strong>: sin⁻¹, cos⁻¹ and tan⁻¹ (also written arcsin, arccos, arctan).</p>

<h3>Using inverse trig to find an angle</h3>
<p>Follow these steps:</p>
<ol>
  <li>Identify the two known sides (OPP, ADJ, HYP).</li>
  <li>Choose the correct ratio: SOH, CAH or TOA.</li>
  <li>Calculate the ratio as a decimal.</li>
  <li>Press sin⁻¹, cos⁻¹ or tan⁻¹ on your calculator.</li>
</ol>
<div class="example-box">
<p><strong>Example:</strong> Opposite = 3 cm, adjacent = 4 cm. Find angle θ.</p>
<p>We know OPP and ADJ → use TOA.<br>
tan θ = 3 ÷ 4 = 0.75<br>
θ = tan⁻¹(0.75) = <strong>36.9°</strong> (to 1 d.p.)</p>
</div>
<div class="example-box">
<p><strong>Example:</strong> Opposite = 4 cm, hypotenuse = 8 cm. Find angle θ.</p>
<p>We know OPP and HYP → use SOH.<br>
sin θ = 4 ÷ 8 = 0.5<br>
θ = sin⁻¹(0.5) = <strong>30°</strong> (exact)</p>
</div>

<h3>Angles of elevation and depression</h3>
<p>These angles are measured from the <strong>horizontal</strong>:</p>
<ul>
  <li><strong>Angle of elevation</strong> — measured <em>upward</em> from horizontal to the line of sight.</li>
  <li><strong>Angle of depression</strong> — measured <em>downward</em> from horizontal to the line of sight.</li>
</ul>
<p>The angle of elevation from A to B equals the angle of depression from B to A (alternate angles between parallel horizontals).</p>

<h3>Real-world problems</h3>
<div class="example-box">
<p><strong>Example:</strong> A 5 m ladder rests against a wall with its foot 3 m from the wall. What angle does the ladder make with the ground?</p>
<p>HYP = 5 m (ladder), ADJ = 3 m (ground), find angle at base.<br>
cos θ = ADJ ÷ HYP = 3 ÷ 5 = 0.6<br>
θ = cos⁻¹(0.6) = <strong>53.1°</strong> (to 1 d.p.)</p>
</div>
<div class="example-box">
<p><strong>Example:</strong> A person stands 12 m from a tree. The angle of elevation to the top is 30°. How tall is the tree?</p>
<p>ADJ = 12 m, angle = 30°, find OPP (height).<br>
tan 30° = OPP ÷ 12<br>
OPP = 12 × tan 30° ≈ 12 × 0.5774 ≈ <strong>6.9 m</strong> (to 1 d.p.)</p>
</div>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Inverse trig (sin⁻¹, cos⁻¹, tan⁻¹)</dt><dd>Functions that reverse sin, cos, tan — they take a ratio and return an angle.</dd>
<dt>Angle of elevation</dt><dd>The angle measured upward from the horizontal to a line of sight.</dd>
<dt>Angle of depression</dt><dd>The angle measured downward from the horizontal to a line of sight.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Using sin instead of sin⁻¹ — ✅ to find an angle from a ratio you must use the inverse function.</li>
<li>❌ Calculator in radians — ✅ always check your calculator is in DEGREES mode.</li>
<li>❌ Confusing elevation and depression — ✅ both are measured from the horizontal; they are equal in magnitude for the same line of sight.</li>
<li>❌ Mixing up OPP and ADJ in a real-world diagram — ✅ always draw and label a sketch before applying the formula.</li>
</ul>`

});
