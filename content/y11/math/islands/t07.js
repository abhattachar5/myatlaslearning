// content/y11/math/islands/t07.js — Year 11 Maths Topic 7: Circle Theorems
// Islands m11i-07-1 .. m11i-07-3. Authored by the atlas-content skill. All original.

FLASHCARDS.push(
  // m11i-07-1 — Angles in a Circle
  {id:"m11fc-07-1-1", islandId:"m11i-07-1", front:"State the 'angle at the centre' theorem.",
   back:"The angle at the centre is TWICE the angle at the circumference (from the same arc).\n\nCentre angle = 2 × circumference angle.", difficulty:2, category:"definition"},
  {id:"m11fc-07-1-2", islandId:"m11i-07-1", front:"What is the angle in a semicircle?",
   back:"90°.\n\nAn angle at the circumference standing on a diameter is always a right angle.", difficulty:2, category:"definition"},
  {id:"m11fc-07-1-3", islandId:"m11i-07-1", front:"State the 'same segment' theorem.",
   back:"Angles in the same segment (from the same arc) are equal.\n\nThey all sit on the same chord, on the same side.", difficulty:2, category:"definition"},
  {id:"m11fc-07-1-4", islandId:"m11i-07-1", front:"The angle at the centre is 140°. What is the angle at the circumference?",
   back:"70°\n\nThe circumference angle is half the centre angle: 140 ÷ 2 = 70°.", difficulty:2, category:"calculation"},
  {id:"m11fc-07-1-5", islandId:"m11i-07-1", front:"A triangle is drawn in a semicircle. One angle is 35°. Find the other two.",
   back:"90° and 55°.\n\nThe angle on the diameter is 90°; the third is 180 − 90 − 35 = 55°.", difficulty:3, category:"application"},
  {id:"m11fc-07-1-6", islandId:"m11i-07-1", front:"Why must you give a reason in circle-theorem questions?",
   back:"Marks are awarded for the correct named reason, not just the number.\n\nE.g. 'angle at the centre is twice the angle at the circumference'.", difficulty:2, category:"concept"},

  // m11i-07-2 — Tangents & Chords
  {id:"m11fc-07-2-1", islandId:"m11i-07-2", front:"What angle does a tangent make with the radius at the point of contact?",
   back:"90°.\n\nA tangent is always perpendicular to the radius drawn to the point where it touches.", difficulty:2, category:"definition"},
  {id:"m11fc-07-2-2", islandId:"m11i-07-2", front:"What is true of two tangents drawn from the same external point?",
   back:"They are equal in length.\n\nThe two tangent segments from a point to a circle are the same length.", difficulty:2, category:"definition"},
  {id:"m11fc-07-2-3", islandId:"m11i-07-2", front:"What does the perpendicular from the centre to a chord do?",
   back:"It bisects the chord (cuts it exactly in half).\n\nThis often combines with Pythagoras to find lengths.", difficulty:3, category:"concept"},
  {id:"m11fc-07-2-4", islandId:"m11i-07-2", front:"A tangent meets a radius. The triangle formed with another line has angles 90° and 50°. Find the third.",
   back:"40°\n\n180 − 90 − 50 = 40°.", difficulty:2, category:"calculation"},
  {id:"m11fc-07-2-5", islandId:"m11i-07-2", front:"What is the alternate segment theorem (in words)?",
   back:"The angle between a tangent and a chord equals the angle in the alternate segment.\n\nThe tangent–chord angle matches the inscribed angle on the other side of the chord.", difficulty:3, category:"definition"},
  {id:"m11fc-07-2-6", islandId:"m11i-07-2", front:"Two tangents from a point make the radii meet the circle at 90°. If the angle at the point is 50°, the angle at the centre is?",
   back:"130°\n\nThe quadrilateral has two 90° angles, so the remaining two add to 180°: centre angle = 180 − 50 = 130°.", difficulty:3, category:"application"},

  // m11i-07-3 — Cyclic Quadrilaterals & Proof
  {id:"m11fc-07-3-1", islandId:"m11i-07-3", front:"What is a cyclic quadrilateral?",
   back:"A four-sided shape with all four vertices on the circle's circumference.", difficulty:1, category:"definition"},
  {id:"m11fc-07-3-2", islandId:"m11i-07-3", front:"State the cyclic-quadrilateral angle theorem.",
   back:"Opposite angles add up to 180°.\n\nThe two pairs of opposite angles are each supplementary.", difficulty:2, category:"definition"},
  {id:"m11fc-07-3-3", islandId:"m11i-07-3", front:"A cyclic quadrilateral has one angle 95°. What is the opposite angle?",
   back:"85°\n\nOpposite angles sum to 180°: 180 − 95 = 85°.", difficulty:2, category:"calculation"},
  {id:"m11fc-07-3-4", islandId:"m11i-07-3", front:"How do you tackle a multi-step circle problem?",
   back:"Find one angle using a theorem, state the reason, then use it to find the next.\n\nWork step by step, giving a reason each time.", difficulty:3, category:"concept"},
  {id:"m11fc-07-3-5", islandId:"m11i-07-3", front:"Three angles of a cyclic quadrilateral are 70°, 100°, 110°. Find the fourth.",
   back:"80°\n\nOpposite pairs sum to 180: the angle opposite 100° is 80°.", difficulty:3, category:"application"},
  {id:"m11fc-07-3-6", islandId:"m11i-07-3", front:"What kind of reasons are accepted in circle proofs?",
   back:"The named theorem in words.\n\nE.g. 'opposite angles in a cyclic quadrilateral sum to 180°' or 'angle in a semicircle is 90°'.", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "m11i-07-1": [
    {q:"The angle at the centre is 100°. The angle at the circumference (same arc) is:", opts:["50°","100°","200°","25°"], c:0,
     e:"Circumference angle = half the centre angle = 50°."},
    {q:"An angle in a semicircle is always:", opts:["90°","180°","60°","45°"], c:0,
     e:"An angle standing on a diameter is a right angle."},
    {q:"Angles in the same segment are:", opts:["Equal","Supplementary","Complementary","Doubled"], c:0,
     e:"Angles subtended by the same arc, in the same segment, are equal."},
    {q:"Angle at circumference is 40°. The angle at the centre (same arc) is:", opts:["80°","20°","40°","140°"], c:0,
     e:"Centre angle = twice the circumference angle = 80°."},
    {q:"In circle questions, marks are given for:", opts:["The correct reason","Neat diagrams","Guessing","Using a protractor"], c:0,
     e:"You must state the named theorem as your reason."}
  ],
  "m11i-07-2": [
    {q:"A tangent meets the radius at the point of contact at:", opts:["90°","45°","60°","180°"], c:0,
     e:"A tangent is perpendicular to the radius at the point of contact."},
    {q:"Two tangents from the same external point are:", opts:["Equal in length","Perpendicular","Parallel","Different lengths"], c:0,
     e:"Tangents from a common external point are equal."},
    {q:"The perpendicular from the centre to a chord:", opts:["Bisects the chord","Doubles the chord","Is a tangent","Equals the radius"], c:0,
     e:"It cuts the chord exactly in half."},
    {q:"A right-angled triangle from a tangent has angles 90° and 35°. The third angle is:", opts:["55°","65°","45°","90°"], c:0,
     e:"180 − 90 − 35 = 55°."},
    {q:"The angle between a tangent and a chord equals:", opts:["The angle in the alternate segment","90°","The radius","The arc"], c:0,
     e:"That is the alternate segment theorem."}
  ],
  "m11i-07-3": [
    {q:"Opposite angles of a cyclic quadrilateral sum to:", opts:["180°","360°","90°","270°"], c:0,
     e:"Each pair of opposite angles is supplementary (180°)."},
    {q:"One angle of a cyclic quadrilateral is 120°. Its opposite angle is:", opts:["60°","120°","240°","30°"], c:0,
     e:"180 − 120 = 60°."},
    {q:"A cyclic quadrilateral's vertices all lie:", opts:["On the circle","At the centre","Outside the circle","On a tangent"], c:0,
     e:"All four vertices are on the circumference."},
    {q:"Three angles are 85°, 95°, 100°. The fourth (opposite the 95°) is:", opts:["85°","95°","80°","100°"], c:0,
     e:"Opposite the 95° angle: 180 − 95 = 85°."},
    {q:"A valid reason in a circle proof is:", opts:["A named theorem","'It looks right'","A measured angle","The colour"], c:0,
     e:"State the named circle theorem as the reason."}
  ]
});

Object.assign(LESSONS, {
  "m11i-07-1": `<h2>Angles in a Circle</h2>
<p>Three key theorems handle angles in circles: the <strong>angle at the centre is twice</strong> the angle at the circumference (same arc); the <strong>angle in a semicircle is 90°</strong>; and angles <strong>in the same segment are equal</strong>.</p>
<div class="lesson-diagram" data-diagram="math-circle-theorems"><p class="diagram-caption">Angle at the centre = 2 × angle at the circumference; semicircle angle = 90°</p></div>
<h3>Worked example</h3>
<p>If the angle at the centre is 140°, the angle at the circumference on the same arc is 140 ÷ 2 = <strong>70°</strong>.</p>
<h3>Common mistake</h3>
<p>Always write the <em>reason</em> — e.g. 'angle at the centre is twice the angle at the circumference'. The number alone does not earn full marks.</p>`,

  "m11i-07-2": `<h2>Tangents &amp; Chords</h2>
<p>Tangent and chord facts: a <strong>tangent meets the radius at 90°</strong> at the point of contact; <strong>two tangents from a point are equal</strong>; and the <strong>perpendicular from the centre bisects a chord</strong>. The <strong>alternate segment theorem</strong> says the tangent–chord angle equals the angle in the alternate segment.</p>
<h3>Worked example</h3>
<p>Two tangents from a point touch a circle; the radii meet them at 90°. If the angle at the point is 50°, the four angles of the quadrilateral sum to 360°, so the angle at the centre is 360 − 90 − 90 − 50 = <strong>130°</strong>.</p>
<h3>Common mistake</h3>
<p>Use the right-angle facts: the radius–tangent angle is exactly 90°, which often unlocks the rest of the problem with Pythagoras or angle sums.</p>`,

  "m11i-07-3": `<h2>Cyclic Quadrilaterals &amp; Proof</h2>
<p>A <strong>cyclic quadrilateral</strong> has all four vertices on the circle. Its key property: <strong>opposite angles add to 180°</strong>. Harder questions combine several theorems — find one angle, state the reason, and use it to reach the next.</p>
<h3>Worked example</h3>
<p>Three angles of a cyclic quadrilateral are 70°, 100° and 110°. The angle opposite the 100° is 180 − 100 = <strong>80°</strong>.</p>
<h3>Common mistake</h3>
<p>Set out the reasoning step by step with a named reason each time — examiners award marks for the theorem used, not just the final angle.</p>`
});
