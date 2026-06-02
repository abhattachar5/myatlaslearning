// content/y11/math/islands/t08.js — Year 11 Maths Topic 8: Sine & Cosine Rules
// Islands m11i-08-1 .. m11i-08-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-08-1 — The Sine Rule
  {id:"m11fc-08-1-1", islandId:"m11i-08-1", front:"State the sine rule.",
   back:"a/sin A = b/sin B = c/sin C.\n\nEach side is paired with the angle OPPOSITE it.", difficulty:2, category:"definition"},
  {id:"m11fc-08-1-2", islandId:"m11i-08-1", front:"When do you use the sine rule?",
   back:"When you have a side and its opposite angle, plus one more side or angle.\n\nIt works in any triangle, not just right-angled ones.", difficulty:2, category:"concept"},
  {id:"m11fc-08-1-3", islandId:"m11i-08-1", front:"How do you label sides and angles for the sine rule?",
   back:"Side a is opposite angle A, side b opposite B, side c opposite C.\n\nMatch each side to the angle across from it.", difficulty:2, category:"concept"},
  {id:"m11fc-08-1-4", islandId:"m11i-08-1", front:"In a triangle, A = 40°, a = 8, B = 60°. Find b.",
   back:"b ≈ 10.8\n\nb = (8 × sin 60°)/sin 40° ≈ (8 × 0.866)/0.643 ≈ 10.8.", difficulty:3, category:"calculation"},
  {id:"m11fc-08-1-5", islandId:"m11i-08-1", front:"To find an angle, which way up do you write the sine rule?",
   back:"Flip it: sin A/a = sin B/b.\n\nPutting the sines on top makes finding an angle easier.", difficulty:3, category:"concept"},
  {id:"m11fc-08-1-6", islandId:"m11i-08-1", front:"Why is the sine rule useful beyond right-angled triangles?",
   back:"SOHCAHTOA only works in right-angled triangles; the sine rule works in ANY triangle given the right information.", difficulty:2, category:"concept"},

  // m11i-08-2 — The Cosine Rule
  {id:"m11fc-08-2-1", islandId:"m11i-08-2", front:"State the cosine rule.",
   back:"a² = b² + c² − 2bc cos A.\n\nUse it when the sine rule can't start.", difficulty:2, category:"definition"},
  {id:"m11fc-08-2-2", islandId:"m11i-08-2", front:"When do you use the cosine rule?",
   back:"Two cases: (1) two sides and the INCLUDED angle (to find the third side); (2) all THREE sides (to find an angle).", difficulty:2, category:"concept"},
  {id:"m11fc-08-2-3", islandId:"m11i-08-2", front:"Find side a when b = 5, c = 7, A = 60°.",
   back:"a ≈ 6.24\n\na² = 25 + 49 − 2(5)(7)cos 60° = 74 − 35 = 39, so a = √39 ≈ 6.24.", difficulty:3, category:"calculation"},
  {id:"m11fc-08-2-4", islandId:"m11i-08-2", front:"How do you rearrange the cosine rule to find an angle?",
   back:"cos A = (b² + c² − a²)/(2bc).\n\nThen A = cos⁻¹ of that value.", difficulty:3, category:"concept"},
  {id:"m11fc-08-2-5", islandId:"m11i-08-2", front:"Which rule do you try first, sine or cosine?",
   back:"Try the SINE rule first — it's simpler. Use the cosine rule only when the sine rule can't get started.", difficulty:2, category:"concept"},
  {id:"m11fc-08-2-6", islandId:"m11i-08-2", front:"Find the largest angle of a triangle with sides 4, 5, 6.",
   back:"≈ 82.8°\n\nThe largest angle is opposite the longest side (6): cos A = (16 + 25 − 36)/(2·4·5) = 5/40 = 0.125, A ≈ 82.8°.", difficulty:3, category:"application"},

  // m11i-08-3 — Area of a Triangle
  {id:"m11fc-08-3-1", islandId:"m11i-08-3", front:"State the trig area formula for a triangle.",
   back:"Area = ½ab sin C.\n\nUse two sides and the INCLUDED angle between them.", difficulty:2, category:"definition"},
  {id:"m11fc-08-3-2", islandId:"m11i-08-3", front:"Which angle goes in ½ab sin C?",
   back:"The angle BETWEEN the two sides a and b (the included angle).", difficulty:2, category:"concept"},
  {id:"m11fc-08-3-3", islandId:"m11i-08-3", front:"Find the area with sides 6 and 8 and included angle 30°.",
   back:"12\n\nArea = ½ × 6 × 8 × sin 30° = 24 × 0.5 = 12.", difficulty:2, category:"calculation"},
  {id:"m11fc-08-3-4", islandId:"m11i-08-3", front:"When can't you use ½ × base × height directly?",
   back:"When you don't know the perpendicular height.\n\nIf you have two sides and the angle between them, use ½ab sin C instead.", difficulty:3, category:"concept"},
  {id:"m11fc-08-3-5", islandId:"m11i-08-3", front:"Find the area with sides 10 and 10 and included angle 90°.",
   back:"50\n\n½ × 10 × 10 × sin 90° = 50 × 1 = 50 (sin 90° = 1).", difficulty:2, category:"application"},
  {id:"m11fc-08-3-6", islandId:"m11i-08-3", front:"Sides 9 and 12 with included angle 60°. Find the area.",
   back:"≈ 46.8\n\n½ × 9 × 12 × sin 60° = 54 × 0.866 ≈ 46.8.", difficulty:3, category:"calculation"}
);

Object.assign(QUESTIONS, {
  "m11i-08-1": [
    {q:"The sine rule is:", opts:["a/sin A = b/sin B","a² = b² + c² − 2bc cos A","sin A = opp/hyp","½ab sin C"], c:0,
     e:"a/sin A = b/sin B = c/sin C."},
    {q:"Each side is paired with:", opts:["The angle opposite it","The angle next to it","The right angle","The largest angle"], c:0,
     e:"Side a is opposite angle A, and so on."},
    {q:"Use the sine rule when you have:", opts:["A side and its opposite angle","Three sides only","Two sides and the included angle","A right angle only"], c:0,
     e:"A matching side–angle pair plus one more piece of information."},
    {q:"To find a missing angle, write the sine rule as:", opts:["sin A/a = sin B/b","a/sin A = b/sin B","a² = b² + c²","½ab sin C"], c:0,
     e:"Flip it so the sines are on top when finding an angle."},
    {q:"The sine rule works in:", opts:["Any triangle","Only right-angled triangles","Only equilateral triangles","Only isosceles triangles"], c:0,
     e:"Unlike SOHCAHTOA, the sine rule applies to any triangle."}
  ],
  "m11i-08-2": [
    {q:"The cosine rule for a side is:", opts:["a² = b² + c² − 2bc cos A","a/sin A = b/sin B","½ab sin C","a² + b² = c²"], c:0,
     e:"a² = b² + c² − 2bc cos A."},
    {q:"Use the cosine rule when you have:", opts:["Two sides and the included angle","A side and its opposite angle","A right angle","Two angles"], c:0,
     e:"Two sides + included angle (for a side), or three sides (for an angle)."},
    {q:"Find a² when b = 4, c = 6, A = 60°.", opts:["28","52","76","100"], c:0,
     e:"a² = 16 + 36 − 2(4)(6)(0.5) = 52 − 24 = 28."},
    {q:"To find an angle, the cosine rule rearranges to:", opts:["cos A = (b² + c² − a²)/(2bc)","cos A = a/b","cos A = 2bc","cos A = b² + c²"], c:0,
     e:"cos A = (b² + c² − a²)/(2bc), then A = cos⁻¹(…)."},
    {q:"Which rule should you try first?", opts:["Sine rule","Cosine rule","Pythagoras","Area formula"], c:0,
     e:"The sine rule is simpler; use the cosine rule only when it can't start."}
  ],
  "m11i-08-3": [
    {q:"The area of a triangle (trig formula) is:", opts:["½ab sin C","½ base × height only","ab sin C","a² + b²"], c:0,
     e:"Area = ½ab sin C, using the included angle."},
    {q:"In ½ab sin C, angle C is:", opts:["Between sides a and b","Opposite side a","The right angle","The largest angle"], c:0,
     e:"It is the included angle between the two sides used."},
    {q:"Sides 5 and 8, included angle 30°. Area =", opts:["10","20","40","6.5"], c:0,
     e:"½ × 5 × 8 × sin 30° = 20 × 0.5 = 10."},
    {q:"Sides 6 and 6, included angle 90°. Area =", opts:["18","36","12","9"], c:0,
     e:"½ × 6 × 6 × sin 90° = 18 × 1 = 18."},
    {q:"You use ½ab sin C when you do not know the:", opts:["Perpendicular height","Two sides","Included angle","Triangle type"], c:0,
     e:"It avoids needing the perpendicular height — just two sides and the angle between them."}
  ]
});

Object.assign(LESSONS, {
  "m11i-08-1": `<h2>The Sine Rule</h2>
<p>The <strong>sine rule</strong> works in any triangle: <strong>a/sin A = b/sin B = c/sin C</strong>, where each side pairs with the angle opposite it. Use it when you have a side with its opposite angle, plus one more side or angle.</p>
<div class="lesson-diagram" data-diagram="math-sine-cosine-rule"><p class="diagram-caption">Side a is opposite angle A, b opposite B, c opposite C</p></div>
<h3>Worked example</h3>
<p>A = 40°, a = 8, B = 60°. Find b: b = (8 × sin 60°)/sin 40° ≈ <strong>10.8</strong>.</p>
<h3>Common mistake</h3>
<p>To find an <em>angle</em>, flip the rule so the sines are on top: sin A/a = sin B/b. Keep each side with its opposite angle.</p>`,

  "m11i-08-2": `<h2>The Cosine Rule</h2>
<p>Use the <strong>cosine rule</strong> when the sine rule can't start: <strong>a² = b² + c² − 2bc cos A</strong>. The two situations are (1) two sides and the <em>included</em> angle (find the third side), and (2) all three sides (find an angle, via cos A = (b² + c² − a²)/(2bc)).</p>
<h3>Worked example</h3>
<p>b = 5, c = 7, A = 60°: a² = 25 + 49 − 2(5)(7)(0.5) = 74 − 35 = 39, so a = √39 ≈ <strong>6.24</strong>.</p>
<h3>Common mistake</h3>
<p>Try the sine rule first — it is simpler. Reach for the cosine rule only when you have SAS or SSS and the sine rule can't begin.</p>`,

  "m11i-08-3": `<h2>Area of a Triangle</h2>
<p>When you know two sides and the angle between them, the area is <strong>½ab sin C</strong>, where C is the <strong>included angle</strong>. This avoids needing the perpendicular height.</p>
<h3>Worked example</h3>
<p>Sides 9 and 12 with an included angle of 60°: Area = ½ × 9 × 12 × sin 60° = 54 × 0.866 ≈ <strong>46.8</strong>.</p>
<h3>Common mistake</h3>
<p>The angle must be <em>between</em> the two sides you use. If you only have a base and perpendicular height, the ordinary ½ × base × height still applies.</p>`
});
