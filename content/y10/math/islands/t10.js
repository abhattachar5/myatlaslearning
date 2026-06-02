// content/y10/math/islands/t10.js — Year 10 Maths Topic 10: Congruence & Similarity
// Islands m10i-10-1 .. m10i-10-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m10i-10-1 — Congruent Triangles
  {id:"m10fc-10-1-1", islandId:"m10i-10-1", front:"What does 'congruent' mean?",
   back:"Exactly the same shape AND size.\n\nCongruent shapes can be placed exactly on top of each other (after turning or flipping).", difficulty:1, category:"definition"},
  {id:"m10fc-10-1-2", islandId:"m10i-10-1", front:"List the four congruence conditions for triangles.",
   back:"SSS, SAS, ASA and RHS.\n\nThree sides; two sides and the included angle; two angles and a corresponding side; right angle, hypotenuse and a side.", difficulty:2, category:"definition"},
  {id:"m10fc-10-1-3", islandId:"m10i-10-1", front:"What does SAS stand for?",
   back:"Side–Angle–Side: two sides and the angle BETWEEN them are equal.\n\nThe angle must be the included angle (between the two sides).", difficulty:2, category:"concept"},
  {id:"m10fc-10-1-4", islandId:"m10i-10-1", front:"Why is 'AAA' not a congruence condition?",
   back:"Equal angles only guarantee the same shape, not the same size.\n\nTwo triangles with the same angles are SIMILAR but may be different sizes.", difficulty:3, category:"concept"},
  {id:"m10fc-10-1-5", islandId:"m10i-10-1", front:"When is RHS used?",
   back:"For right-angled triangles: Right angle, Hypotenuse and one Side equal.\n\nIt is a special case that works because of Pythagoras.", difficulty:2, category:"application"},
  {id:"m10fc-10-1-6", islandId:"m10i-10-1", front:"Two triangles have sides 5, 6, 7 and 5, 6, 7. Are they congruent?",
   back:"Yes, by SSS.\n\nAll three pairs of sides are equal, so the triangles are congruent.", difficulty:2, category:"application"},

  // m10i-10-2 — Similar Shapes & Scale Factors
  {id:"m10fc-10-2-1", islandId:"m10i-10-2", front:"What does 'similar' mean for shapes?",
   back:"Same shape, different size.\n\nCorresponding angles are equal and corresponding sides are in the same ratio (the scale factor).", difficulty:1, category:"definition"},
  {id:"m10fc-10-2-2", islandId:"m10i-10-2", front:"How do you find the linear scale factor between similar shapes?",
   back:"Divide a length on the bigger shape by the matching length on the smaller.\n\nScale factor = new length ÷ old length.", difficulty:2, category:"concept"},
  {id:"m10fc-10-2-3", islandId:"m10i-10-2", front:"Two similar rectangles: the small is 4 cm wide, the large 12 cm. Scale factor?",
   back:"3\n\n12 ÷ 4 = 3, so every length on the large rectangle is 3 times the small one.", difficulty:2, category:"calculation"},
  {id:"m10fc-10-2-4", islandId:"m10i-10-2", front:"A scale factor is 2.5. A 6 cm side on the small shape becomes what on the large?",
   back:"15 cm\n\n6 × 2.5 = 15 cm. Multiply by the scale factor to go from small to large.", difficulty:2, category:"calculation"},
  {id:"m10fc-10-2-5", islandId:"m10i-10-2", front:"To find a small length from a large one, do you multiply or divide by the scale factor?",
   back:"Divide.\n\nGoing from large to small undoes the enlargement, so divide by the scale factor.", difficulty:3, category:"concept"},
  {id:"m10fc-10-2-6", islandId:"m10i-10-2", front:"How do you know two triangles are similar?",
   back:"Their angles are all equal (or their sides are all in the same ratio).\n\nEqual angles is enough for similarity.", difficulty:2, category:"application"},

  // m10i-10-3 — Area & Volume Scale Factors
  {id:"m10fc-10-3-1", islandId:"m10i-10-3", front:"If the linear scale factor is k, what is the area scale factor?",
   back:"k².\n\nArea is two-dimensional, so it scales by the square of the linear scale factor.", difficulty:2, category:"definition"},
  {id:"m10fc-10-3-2", islandId:"m10i-10-3", front:"If the linear scale factor is k, what is the volume scale factor?",
   back:"k³.\n\nVolume is three-dimensional, so it scales by the cube of the linear scale factor.", difficulty:2, category:"definition"},
  {id:"m10fc-10-3-3", islandId:"m10i-10-3", front:"Two similar shapes have linear scale factor 3. How many times bigger is the area?",
   back:"9 times.\n\nArea scale factor = 3² = 9.", difficulty:2, category:"calculation"},
  {id:"m10fc-10-3-4", islandId:"m10i-10-3", front:"Linear scale factor 2. How many times bigger is the volume?",
   back:"8 times.\n\nVolume scale factor = 2³ = 8.", difficulty:2, category:"calculation"},
  {id:"m10fc-10-3-5", islandId:"m10i-10-3", front:"The area of a small shape is 10 cm²; the scale factor is 4. Area of the large shape?",
   back:"160 cm²\n\nArea scale factor = 4² = 16, so 10 × 16 = 160 cm².", difficulty:3, category:"application"},
  {id:"m10fc-10-3-6", islandId:"m10i-10-3", front:"Why isn't the area scale factor the same as the length scale factor?",
   back:"Because area is two lengths multiplied together.\n\nDoubling the length quadruples the area (2² = 4), not doubles it.", difficulty:3, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m10i-10-1": [
    {q:"Which is NOT a congruence condition?", opts:["AAA","SSS","SAS","RHS"], c:0,
     e:"AAA only guarantees similar shapes (same angles, possibly different size), not congruence."},
    {q:"Two triangles have two sides and the included angle equal. They are congruent by:", opts:["SAS","SSS","ASA","RHS"], c:0,
     e:"Two sides and the angle between them is the SAS condition."},
    {q:"Congruent shapes have the same:", opts:["Shape and size","Shape only","Size only","Colour"], c:0,
     e:"Congruent means identical in both shape and size."},
    {q:"Two right-angled triangles share the hypotenuse and one other side. They are congruent by:", opts:["RHS","SSS","ASA","AAA"], c:0,
     e:"Right angle, Hypotenuse and a Side is the RHS condition."},
    {q:"Triangles with sides 6, 8, 10 and 6, 8, 10 are congruent by:", opts:["SSS","SAS","ASA","AAA"], c:0,
     e:"All three sides equal is SSS."}
  ],
  "m10i-10-2": [
    {q:"Similar shapes have equal angles and sides that are:", opts:["In the same ratio","Equal","Perpendicular","Unrelated"], c:0,
     e:"Corresponding sides of similar shapes are in the same ratio (the scale factor)."},
    {q:"Small width 5 cm, large width 20 cm. The scale factor is:", opts:["4","15","100","0.25"], c:0,
     e:"20 ÷ 5 = 4."},
    {q:"Scale factor 3; a 7 cm side on the small shape becomes:", opts:["21 cm","10 cm","2.3 cm","73 cm"], c:0,
     e:"7 × 3 = 21 cm."},
    {q:"To find a small length from a large one you:", opts:["Divide by the scale factor","Multiply by the scale factor","Square the scale factor","Subtract the scale factor"], c:0,
     e:"Going large → small undoes the enlargement, so divide."},
    {q:"A 24 cm side on a large shape, scale factor 4, matches what on the small shape?", opts:["6 cm","96 cm","20 cm","28 cm"], c:0,
     e:"24 ÷ 4 = 6 cm."}
  ],
  "m10i-10-3": [
    {q:"Linear scale factor 5. The area scale factor is:", opts:["25","5","10","125"], c:0,
     e:"Area scale factor = 5² = 25."},
    {q:"Linear scale factor 3. The volume scale factor is:", opts:["27","9","3","6"], c:0,
     e:"Volume scale factor = 3³ = 27."},
    {q:"Small area 8 cm², linear scale factor 3. Large area?", opts:["72 cm²","24 cm²","216 cm²","11 cm²"], c:0,
     e:"Area scale factor 3² = 9, so 8 × 9 = 72 cm²."},
    {q:"Small volume 5 cm³, linear scale factor 2. Large volume?", opts:["40 cm³","10 cm³","20 cm³","25 cm³"], c:0,
     e:"Volume scale factor 2³ = 8, so 5 × 8 = 40 cm³."},
    {q:"If lengths double, the area becomes:", opts:["4 times bigger","2 times bigger","8 times bigger","The same"], c:0,
     e:"Area scale factor = 2² = 4."}
  ]
});

Object.assign(LESSONS, {
  "m10i-10-1": `<h2>Congruent Triangles</h2>
<p>Two shapes are <strong>congruent</strong> if they are identical in shape and size. For triangles, four conditions prove congruence: <strong>SSS</strong> (three sides), <strong>SAS</strong> (two sides and the included angle), <strong>ASA</strong> (two angles and a corresponding side) and <strong>RHS</strong> (right angle, hypotenuse and a side).</p>
<h3>Worked example</h3>
<p>Triangles with sides 5, 6, 7 and 5, 6, 7 are congruent by <strong>SSS</strong> — all three pairs of sides match.</p>
<h3>Common mistake</h3>
<p>'AAA' is not a congruence condition: equal angles only make triangles <em>similar</em> (same shape, possibly different size). For SAS, the angle must be the one <em>between</em> the two sides.</p>`,

  "m10i-10-2": `<h2>Similar Shapes &amp; Scale Factors</h2>
<p>Two shapes are <strong>similar</strong> if they have the same shape but a different size: equal angles, and corresponding sides in the same ratio — the <strong>linear scale factor</strong>.</p>
<div class="lesson-diagram" data-diagram="math-similar-triangles"><p class="diagram-caption">Similar triangles: equal angles, sides in the same ratio</p></div>
<h3>Worked example</h3>
<p>A small rectangle is 4 cm wide and a similar large one is 12 cm wide: scale factor = 12 ÷ 4 = 3. A 6 cm side on the small one becomes 6 × 3 = <strong>18 cm</strong> on the large.</p>
<h3>Common mistake</h3>
<p>Multiply (small → large) but divide (large → small). Mixing these up doubles instead of halves.</p>`,

  "m10i-10-3": `<h2>Area &amp; Volume Scale Factors</h2>
<p>When a shape is enlarged by a <strong>linear scale factor k</strong>, the area scales by <strong>k²</strong> and the volume by <strong>k³</strong> — because area is two lengths multiplied and volume is three.</p>
<h3>Worked example</h3>
<p>Two similar solids have linear scale factor 3. The area is 3² = 9 times bigger and the volume is 3³ = 27 times bigger. A small area of 8 cm² becomes 8 × 9 = <strong>72 cm²</strong>.</p>
<h3>Common mistake</h3>
<p>Don't use the linear scale factor for area or volume. Doubling the lengths makes the area 4× (not 2×) and the volume 8× bigger.</p>`
});
