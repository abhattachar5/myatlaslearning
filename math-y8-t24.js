// math-y8-t24.js — Year 8 Maths Topic 24: Congruence & Similarity
// Islands: m8i-24-1 .. m8i-24-3
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // m8i-24-1 — Congruent Figures
  {id:"m8fc-24-1-1",islandId:"m8i-24-1",front:"What does it mean for two figures to be congruent?",
   back:"Two figures are congruent if they have exactly the same shape and exactly the same size.\n\nOne figure is a rigid transformation (reflection, rotation or translation) of the other — no stretching or shrinking.\nSymbol: ≅  Example: Triangle ABC ≅ Triangle DEF.",difficulty:1,category:"definition"},
  {id:"m8fc-24-1-2",islandId:"m8i-24-1",front:"What are corresponding parts in a congruence statement?",
   back:"Corresponding parts are the matching sides and angles in two congruent figures.\n\nThe order of letters in a congruence statement tells you which parts match.\nIf △ABC ≅ △PQR, then:\n• A ↔ P, B ↔ Q, C ↔ R (angles)\n• AB ↔ PQ, BC ↔ QR, AC ↔ PR (sides)",difficulty:2,category:"concept"},
  {id:"m8fc-24-1-3",islandId:"m8i-24-1",front:"△KLM ≅ △XYZ. Side KL = 8 cm. What is the length of XY?",
   back:"XY = 8 cm\n\nBecause △KLM ≅ △XYZ, corresponding sides are equal.\nK ↔ X and L ↔ Y, so KL corresponds to XY.\nTherefore XY = KL = 8 cm.",difficulty:1,category:"calculation"},
  {id:"m8fc-24-1-4",islandId:"m8i-24-1",front:"△ABC ≅ △DEF. Angle B = 47°. What is angle E?",
   back:"Angle E = 47°\n\nIn the congruence statement △ABC ≅ △DEF, the second letters B and E are corresponding angles.\nCorresponding angles in congruent figures are equal, so ∠E = ∠B = 47°.",difficulty:1,category:"calculation"},
  {id:"m8fc-24-1-5",islandId:"m8i-24-1",front:"How can you tell if two shapes are congruent without measuring every side and angle?",
   back:"You can check whether one shape can be mapped onto the other using only rigid transformations:\n• Reflection (flip)\n• Rotation (turn)\n• Translation (slide)\n\nIf one of these maps one shape exactly onto the other, the shapes are congruent. Rigid transformations preserve both shape and size.",difficulty:2,category:"concept"},
  {id:"m8fc-24-1-6",islandId:"m8i-24-1",front:"Two congruent rectangles: Rectangle ABCD ≅ Rectangle PQRS. AB = 12 cm, BC = 5 cm. Find PQ and QR.",
   back:"PQ = 12 cm, QR = 5 cm\n\nCorresponding sides:\nA ↔ P, B ↔ Q, C ↔ R, D ↔ S\nSo AB ↔ PQ and BC ↔ QR.\nPQ = AB = 12 cm and QR = BC = 5 cm.",difficulty:2,category:"application"},

  // m8i-24-2 — Similar Figures
  {id:"m8fc-24-2-1",islandId:"m8i-24-2",front:"What does it mean for two figures to be similar?",
   back:"Two figures are similar if they have the same shape but can be different sizes.\n\n• All corresponding angles are equal.\n• All corresponding sides are in the same ratio (the scale factor).\nSymbol: ∼  Example: △ABC ∼ △DEF.",difficulty:1,category:"definition"},
  {id:"m8fc-24-2-2",islandId:"m8i-24-2",front:"What is a scale factor in similar figures?",
   back:"The scale factor is the ratio by which every length in one figure is multiplied to get the corresponding length in the other figure.\n\nScale factor = corresponding side in image ÷ corresponding side in original\n\nExample: if original side = 4 cm and image side = 10 cm, scale factor = 10 ÷ 4 = 2.5",difficulty:2,category:"definition"},
  {id:"m8fc-24-2-3",islandId:"m8i-24-2",front:"△ABC ∼ △PQR. AB = 6 cm, PQ = 9 cm, BC = 8 cm. Find QR.",
   back:"QR = 12 cm\n\nStep 1 — find the scale factor:\nScale factor = PQ ÷ AB = 9 ÷ 6 = 1.5\n\nStep 2 — multiply the corresponding original side:\nQR = BC × scale factor = 8 × 1.5 = 12 cm",difficulty:2,category:"calculation"},
  {id:"m8fc-24-2-4",islandId:"m8i-24-2",front:"Two similar triangles: the smaller has sides 5 cm, 8 cm and 10 cm; the larger has its shortest side = 15 cm. Find the other two sides of the larger triangle.",
   back:"Longer sides: 24 cm and 30 cm\n\nStep 1 — scale factor = 15 ÷ 5 = 3\n\nStep 2 — multiply each side:\n8 × 3 = 24 cm\n10 × 3 = 30 cm\n\nLarger triangle: 15 cm, 24 cm, 30 cm.",difficulty:2,category:"calculation"},
  {id:"m8fc-24-2-5",islandId:"m8i-24-2",front:"What is true about the corresponding angles of similar figures?",
   back:"Corresponding angles in similar figures are always equal.\n\nOnly the side lengths change (by the scale factor) — the angles are preserved.\n\nExample: if △ABC ∼ △DEF, then ∠A = ∠D, ∠B = ∠E and ∠C = ∠F regardless of the scale factor.",difficulty:1,category:"concept"},
  {id:"m8fc-24-2-6",islandId:"m8i-24-2",front:"Rectangle ABCD is similar to rectangle EFGH. AB = 4 cm, BC = 6 cm, EF = 10 cm. Find FG.",
   back:"FG = 15 cm\n\nStep 1 — scale factor = EF ÷ AB = 10 ÷ 4 = 2.5\n\nStep 2 — find FG (corresponds to BC):\nFG = BC × scale factor = 6 × 2.5 = 15 cm",difficulty:2,category:"application"},

  // m8i-24-3 — Indirect Measurement
  {id:"m8fc-24-3-1",islandId:"m8i-24-3",front:"What is indirect measurement?",
   back:"Indirect measurement is a method of finding a length or height that is difficult to measure directly, by using similar triangles and proportions.\n\nCommon situations: finding the height of a building using its shadow, or the width of a river using similar triangles on the bank.",difficulty:1,category:"definition"},
  {id:"m8fc-24-3-2",islandId:"m8i-24-3",front:"A 1.8 m tall person casts a shadow of 2.4 m. A tree casts a shadow of 16 m. How tall is the tree?",
   back:"Tree height = 12 m\n\nThe person and tree are similar 'triangles' (vertical objects + shadows).\n\nSet up the proportion:\nPerson's height / Person's shadow = Tree's height / Tree's shadow\n1.8 / 2.4 = h / 16\n\nh = (1.8 × 16) / 2.4 = 28.8 / 2.4 = 12 m",difficulty:2,category:"calculation"},
  {id:"m8fc-24-3-3",islandId:"m8i-24-3",front:"How do you set up a proportion from similar triangles to find a missing length?",
   back:"Match corresponding sides from the two similar triangles.\n\nGeneral method:\ncorresponding side 1 (small) / corresponding side 1 (large) = corresponding side 2 (small) / corresponding side 2 (large)\n\nCross-multiply, then divide to solve for the unknown.\n\nAlways check the sides you compare are truly corresponding.",difficulty:2,category:"concept"},
  {id:"m8fc-24-3-4",islandId:"m8i-24-3",front:"A 2 m stick casts a 3 m shadow. At the same time, a telegraph pole casts a 21 m shadow. How tall is the pole?",
   back:"Pole height = 14 m\n\nProportion:\n2 / 3 = h / 21\n\nCross-multiply:\n3h = 2 × 21 = 42\nh = 42 / 3 = 14 m\n\nThe telegraph pole is 14 m tall.",difficulty:2,category:"application"},
  {id:"m8fc-24-3-5",islandId:"m8i-24-3",front:"Two similar triangles are used to find the width of a river. The near bank triangle has base 8 m and height 6 m; the far bank triangle has base 20 m. What is its height (the river width)?",
   back:"River width = 15 m\n\nThe triangles are similar, so corresponding sides are in the same ratio.\n\nScale factor = 20 ÷ 8 = 2.5\n\nHeight of larger triangle = 6 × 2.5 = 15 m\n\nAlternatively, proportion: 6/8 = h/20 → h = (6 × 20)/8 = 15 m",difficulty:3,category:"application"},
  {id:"m8fc-24-3-6",islandId:"m8i-24-3",front:"A 3 m ladder leans against a wall, forming a triangle with the ground. A similar, scaled-up arrangement uses a 7.5 m ladder. If the base of the small triangle is 1.2 m, what is the base of the larger triangle?",
   back:"Base of larger triangle = 3 m\n\nScale factor = 7.5 ÷ 3 = 2.5\n\nLarger base = 1.2 × 2.5 = 3 m",difficulty:3,category:"calculation"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "m8i-24-1":[
    {q:"△ABC ≅ △PQR. Side AC = 13 cm. Which side of △PQR has the same length?",opts:["PQ","QR","PR","RP"],c:2,e:"In the congruence statement △ABC ≅ △PQR, A ↔ P and C ↔ R, so AC corresponds to PR. Therefore PR = 13 cm."},
    {q:"△DEF ≅ △XYZ and ∠F = 65°. What is ∠Z?",opts:["25°","65°","115°","130°"],c:1,e:"F is the third letter of △DEF and Z is the third letter of △XYZ, so ∠F ↔ ∠Z. Corresponding angles in congruent figures are equal, so ∠Z = 65°."},
    {q:"Which transformation produces a congruent figure?",opts:["Dilation by scale factor 2","Enlargement","Rotation by 90°","Stretching horizontally"],c:2,e:"Rotation is a rigid transformation that preserves both shape and size, so the image is congruent to the original. Dilations and stretches change size."},
    {q:"Rectangle ABCD ≅ Rectangle EFGH. AB = 7 cm, BC = 3 cm. What is EF?",opts:["3 cm","7 cm","10 cm","21 cm"],c:1,e:"A ↔ E and B ↔ F, so AB corresponds to EF. Congruent figures have equal corresponding sides, so EF = AB = 7 cm."},
    {q:"Which statement is always true for congruent figures?",opts:["They have the same perimeter only","They have the same area only","They have the same shape and size","They must be in the same orientation"],c:2,e:"Congruent figures have exactly the same shape and size. They may be in different orientations (e.g. one may be reflected). Both their perimeters and areas are equal, but the defining property is same shape and size."}
  ],
  "m8i-24-2":[
    {q:"△PQR ∼ △STU. PQ = 5 cm and ST = 15 cm. What is the scale factor from △PQR to △STU?",opts:["0.33","3","5","15"],c:1,e:"Scale factor = ST ÷ PQ = 15 ÷ 5 = 3. Each side of △STU is 3 times the corresponding side of △PQR."},
    {q:"Two similar triangles have a scale factor of 4. The smaller triangle has a side of 6 cm. What is the corresponding side in the larger triangle?",opts:["1.5 cm","10 cm","24 cm","36 cm"],c:2,e:"Multiply the known side by the scale factor: 6 × 4 = 24 cm. The larger triangle's corresponding side is 24 cm."},
    {q:"△ABC ∼ △DEF. AB = 8 cm, DE = 12 cm, BC = 9 cm. Find EF.",opts:["6 cm","13.5 cm","18 cm","24 cm"],c:1,e:"Scale factor = DE ÷ AB = 12 ÷ 8 = 1.5. EF = BC × 1.5 = 9 × 1.5 = 13.5 cm."},
    {q:"In two similar figures, ∠A = 72°. What is the corresponding angle in the second figure?",opts:["18°","36°","72°","108°"],c:2,e:"Corresponding angles in similar figures are always equal regardless of the scale factor. The corresponding angle is also 72°."},
    {q:"A photograph is 10 cm wide and 15 cm tall. It is enlarged so that the width becomes 18 cm. How tall is the enlarged photograph?",opts:["20 cm","23 cm","27 cm","30 cm"],c:2,e:"Scale factor = 18 ÷ 10 = 1.8. New height = 15 × 1.8 = 27 cm."}
  ],
  "m8i-24-3":[
    {q:"A 1.6 m tall person casts a 2 m shadow. A flagpole casts a 12.5 m shadow at the same time. How tall is the flagpole?",opts:["8 m","10 m","15.6 m","20 m"],c:1,e:"Proportion: 1.6/2 = h/12.5. Cross-multiply: h = (1.6 × 12.5) / 2 = 20 / 2 = 10 m."},
    {q:"Two similar triangles are used in a surveying problem. The small triangle has sides 3 m and 5 m. The large triangle has its short side equal to 9 m. What is its long side?",opts:["7 m","11 m","15 m","45 m"],c:2,e:"Scale factor = 9 ÷ 3 = 3. Long side = 5 × 3 = 15 m."},
    {q:"A tree casts a shadow of 18 m. A 2 m stick casts a shadow of 3 m at the same time. How tall is the tree?",opts:["9 m","12 m","27 m","36 m"],c:1,e:"Proportion: 2/3 = h/18. Cross-multiply: 3h = 36, so h = 12 m."},
    {q:"A building is 30 m tall and casts a shadow of 20 m. A nearby lamppost casts a shadow of 6 m. How tall is the lamppost?",opts:["4 m","9 m","10 m","18 m"],c:1,e:"Proportion: 30/20 = h/6. Cross-multiply: 20h = 30 × 6 = 180, so h = 9 m."},
    {q:"Which pair of triangles can be used for indirect measurement in a shadow problem?",opts:["Any two right-angled triangles","Congruent triangles only","Similar triangles created by the sun's parallel rays","Equilateral triangles only"],c:2,e:"The sun's rays are effectively parallel, so the object and its shadow form a triangle that is similar to any other object and its shadow measured at the same time. This is why similar triangles apply."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

'm8i-24-1': `
<h2>Congruent Figures</h2>
<p>Two figures are <strong>congruent</strong> if they are exactly the same shape and exactly the same size. You can move one onto the other using only <em>rigid transformations</em> — reflections, rotations and translations — without any stretching or shrinking.</p>

<h3>The congruence symbol and statements</h3>
<p>Congruence is written with the symbol <strong>≅</strong>. The order of letters in a congruence statement tells you which parts match.</p>
<div class="example-box">
<p><strong>Example:</strong> △ABC ≅ △PQR</p>
<p>This tells us:<br>
∠A = ∠P, &nbsp; ∠B = ∠Q, &nbsp; ∠C = ∠R<br>
AB = PQ, &nbsp; BC = QR, &nbsp; AC = PR<br>
The <em>order of letters</em> is crucial — never assume a match without checking the statement.</p>
</div>

<h3>Finding missing measurements</h3>
<p>Because corresponding parts of congruent figures are equal (often written CPCTC — Corresponding Parts of Congruent Triangles are Congruent), you can find any unknown side or angle directly.</p>
<div class="example-box">
<p><strong>Example:</strong> △KLM ≅ △XYZ. KL = 9 cm and ∠M = 55°. Find XY and ∠Z.</p>
<p>K ↔ X, L ↔ Y, M ↔ Z, so:<br>
XY = KL = <strong>9 cm</strong><br>
∠Z = ∠M = <strong>55°</strong></p>
</div>

<h3>Rigid transformations</h3>
<p>A <strong>translation</strong> slides a shape; a <strong>rotation</strong> turns it; a <strong>reflection</strong> flips it. All three keep every length and angle unchanged, so the result is always congruent to the original.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Congruent (≅)</dt><dd>Same shape and same size.</dd>
<dt>Corresponding parts</dt><dd>Matching sides or angles in two congruent figures (determined by the order of letters in the congruence statement).</dd>
<dt>Rigid transformation</dt><dd>A transformation that preserves shape and size (reflection, rotation, translation).</dd>
<dt>CPCTC</dt><dd>Corresponding Parts of Congruent Triangles are Congruent — once congruence is established, every pair of corresponding parts is equal.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Ignoring the order of letters in a congruence statement — ✅ △ABC ≅ △PQR means A ↔ P, not A ↔ Q.</li>
<li>❌ Thinking shapes must look identical (same orientation) to be congruent — ✅ a reflected or rotated copy is still congruent.</li>
<li>❌ Confusing congruence with similarity — ✅ congruent means same size AND shape; similar means same shape but possibly different size.</li>
</ul>`,

'm8i-24-2': `
<h2>Similar Figures</h2>
<p>Two figures are <strong>similar</strong> if they have the same shape but are not necessarily the same size. All corresponding angles are equal, and all corresponding sides are in the same ratio — the <strong>scale factor</strong>.</p>

<h3>Identifying the scale factor</h3>
<p>The scale factor from the original to the image is found by dividing a side in the image by the corresponding side in the original.</p>
<div class="example-box">
<p><strong>Example:</strong> △ABC ∼ △DEF. AB = 5 cm, DE = 8 cm.</p>
<p>Scale factor = DE ÷ AB = 8 ÷ 5 = <strong>1.6</strong><br>
Every side of △DEF is 1.6 times the corresponding side of △ABC.</p>
</div>

<h3>Finding missing sides</h3>
<p>Once you know the scale factor, multiply (or divide) any known side to find its corresponding side.</p>
<div class="example-box">
<p><strong>Example:</strong> △ABC ∼ △PQR. AB = 6 cm, PQ = 9 cm, BC = 8 cm. Find QR.</p>
<p>Scale factor = PQ ÷ AB = 9 ÷ 6 = 1.5<br>
QR = BC × 1.5 = 8 × 1.5 = <strong>12 cm</strong></p>
</div>
<div class="lesson-diagram" data-diagram="math-similar-triangles"></div>

<h3>Similarity statements</h3>
<p>The symbol for similarity is <strong>∼</strong>. As with congruence, the order of letters gives the correspondence. △ABC ∼ △DEF means ∠A = ∠D, ∠B = ∠E, ∠C = ∠F and all corresponding sides share the same ratio.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Similar (∼)</dt><dd>Same shape, corresponding angles equal, corresponding sides in the same ratio.</dd>
<dt>Scale factor</dt><dd>The ratio by which every length of the original is multiplied to give the image.</dd>
<dt>Corresponding sides</dt><dd>Matching sides in two similar figures, always in the same ratio.</dd>
<dt>Corresponding angles</dt><dd>Matching angles in two similar figures, always equal.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Adding the scale factor instead of multiplying — ✅ multiply by the scale factor: new side = old side × scale factor.</li>
<li>❌ Matching non-corresponding sides (e.g. longest with shortest) — ✅ always use the similarity statement to identify which sides correspond.</li>
<li>❌ Thinking angles also change with the scale factor — ✅ corresponding angles are always equal in similar figures; only side lengths change.</li>
</ul>`,

'm8i-24-3': `
<h2>Indirect Measurement</h2>
<p><strong>Indirect measurement</strong> lets you find a length that is impossible or impractical to measure directly — such as the height of a building or the width of a river — by using similar triangles and proportions.</p>

<h3>Shadow problems</h3>
<p>At any given moment, the sun's rays are parallel. This means a vertical object and its shadow form a triangle that is similar to the triangle formed by any other vertical object and its shadow measured at the same time.</p>
<div class="example-box">
<p><strong>Example:</strong> A 2 m post casts a 3 m shadow. At the same time, a tree casts a 15 m shadow. How tall is the tree?</p>
<p>The post triangle and tree triangle are similar, so:<br>
post height / post shadow = tree height / tree shadow<br>
2 / 3 = h / 15<br>
Cross-multiply: 3h = 30<br>
h = 30 ÷ 3 = <strong>10 m</strong></p>
</div>

<h3>River-width and survey problems</h3>
<p>Surveyors place stakes to create two similar triangles. They measure the reachable sides and then use proportions to calculate the inaccessible distance.</p>
<div class="example-box">
<p><strong>Example:</strong> Two similar triangles are formed across a river. The near triangle has base 6 m and height 4 m; the far triangle has base 18 m. What is the river width (far height)?</p>
<p>Scale factor = 18 ÷ 6 = 3<br>
River width = 4 × 3 = <strong>12 m</strong></p>
</div>

<h3>Setting up proportions</h3>
<p>Always pair <em>corresponding</em> sides and write the proportion carefully before cross-multiplying.</p>

<h3>📖 Key Vocabulary</h3>
<dl>
<dt>Indirect measurement</dt><dd>Finding a length using similar triangles and proportions rather than direct measurement.</dd>
<dt>Proportion</dt><dd>An equation stating that two ratios are equal, e.g. a/b = c/d.</dd>
<dt>Cross-multiplication</dt><dd>Solving a proportion by multiplying the numerator of each fraction by the denominator of the other: if a/b = c/d then ad = bc.</dd>
<dt>Similar triangles</dt><dd>Triangles with equal corresponding angles and proportional corresponding sides.</dd>
</dl>

<h3>⚠️ Common Mistakes to Avoid</h3>
<ul>
<li>❌ Mixing up corresponding sides in the proportion — ✅ keep the same figure's measurements on the same side of each ratio (small/small = large/large, or height/shadow = height/shadow).</li>
<li>❌ Forgetting to check that shadows are measured at the same time — ✅ shadows must be concurrent for the sun's angle to be the same and the triangles to be similar.</li>
<li>❌ Arithmetic errors when cross-multiplying — ✅ write out the full multiplication step before dividing.</li>
</ul>`

});
