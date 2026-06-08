// math-diagrams.js — SVG diagrams for maths lessons
// Adds keys onto the shared DIAGRAMS map (declared in science-diagrams.js).
// Each div.lesson-diagram[data-diagram="key"] in a LESSON pulls DIAGRAMS[key].
// Theme: blue #3b82f6 / indigo #6366f1, faint construction arcs in #cbd5e1.
// Relies on `const DIAGRAMS` being declared by science-diagrams.js (loaded first).

// ── Perpendicular Bisector of a segment AB ───────────────────────────────────
// Faint circles centred on A(60,120) and B(220,120), radius 101, intersect
// exactly on x=140 at P(140,58) and Q(140,182) — the perpendicular bisector.
DIAGRAMS["math-perp-bisector"] = `<svg viewBox="0 0 280 244" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Perpendicular Bisector of AB</text>
  <!-- equal-radius construction arcs from A and B -->
  <circle cx="60" cy="122" r="101" fill="none" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="220" cy="122" r="101" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
  <!-- segment AB -->
  <line x1="60" y1="122" x2="220" y2="122" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="60" cy="122" r="4" fill="#1e293b"/>
  <circle cx="220" cy="122" r="4" fill="#1e293b"/>
  <text x="52" y="126" text-anchor="end" font-size="12" font-weight="700" fill="#1e293b">A</text>
  <text x="228" y="126" text-anchor="start" font-size="12" font-weight="700" fill="#1e293b">B</text>
  <!-- perpendicular bisector PQ through the two intersection points -->
  <line x1="140" y1="40" x2="140" y2="214" stroke="#3b82f6" stroke-width="2.5"/>
  <circle cx="140" cy="60" r="3.5" fill="#6366f1"/>
  <circle cx="140" cy="184" r="3.5" fill="#6366f1"/>
  <text x="148" y="56" font-size="11" font-weight="700" fill="#6366f1">P</text>
  <text x="148" y="196" font-size="11" font-weight="700" fill="#6366f1">Q</text>
  <!-- midpoint M and right-angle mark -->
  <circle cx="140" cy="122" r="3.5" fill="#3b82f6"/>
  <text x="135" y="140" text-anchor="end" font-size="11" font-weight="700" fill="#3b82f6">M</text>
  <rect x="140" y="108" width="14" height="14" fill="none" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="140" y="236" text-anchor="middle" font-size="9" fill="#64748b">arcs of equal radius from A and B meet at P and Q</text>
</svg>`;

// ── Angle Bisector of angle ABC (vertex B) ───────────────────────────────────
// Vertex B(40,170). Arc from B (r=95) cuts the arms at P and Q. Equal arcs
// from P and Q (r=45) cross at R on the bisector ray.
DIAGRAMS["math-angle-bisector"] = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Angle Bisector (vertex B)</text>
  <!-- two arms of the angle from vertex B -->
  <line x1="40" y1="170" x2="252" y2="54" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="40" y1="170" x2="252" y2="170" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="40" cy="170" r="4" fill="#1e293b"/>
  <text x="31" y="178" text-anchor="end" font-size="12" font-weight="700" fill="#1e293b">B</text>
  <text x="258" y="52" font-size="12" font-weight="700" fill="#1e293b">A</text>
  <text x="258" y="174" font-size="12" font-weight="700" fill="#1e293b">C</text>
  <!-- arc from B cutting both arms at P and Q -->
  <circle cx="40" cy="170" r="95" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="123" cy="124" r="3.5" fill="#6366f1"/>
  <circle cx="135" cy="170" r="3.5" fill="#6366f1"/>
  <text x="115" y="120" text-anchor="end" font-size="11" font-weight="700" fill="#6366f1">P</text>
  <text x="135" y="188" text-anchor="middle" font-size="11" font-weight="700" fill="#6366f1">Q</text>
  <!-- equal arcs from P and Q crossing at R -->
  <circle cx="123" cy="124" r="45" fill="none" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="135" cy="170" r="45" fill="none" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3"/>
  <circle cx="166" cy="135" r="3.5" fill="#3b82f6"/>
  <text x="173" y="133" font-size="11" font-weight="700" fill="#3b82f6">R</text>
  <!-- bisector ray from B through R -->
  <line x1="40" y1="170" x2="252" y2="113" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="206" y="106" font-size="9" fill="#3b82f6">bisector</text>
</svg>`;

// ── Pythagoras' theorem: squares on the sides of a 3-4-5 triangle ────────────
DIAGRAMS["math-pythagoras"] = `<svg viewBox="0 0 270 256" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="135" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">a² + b² = c²</text>
  <!-- square on hypotenuse c (area 25) -->
  <polygon points="95,96 167,150 221,78 149,24" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.8"/>
  <text x="158" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="#b45309">c² = 25</text>
  <!-- square on leg a (area 9) -->
  <polygon points="95,150 95,96 41,96 41,150" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.8"/>
  <text x="68" y="127" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">a² = 9</text>
  <!-- square on leg b (area 16) -->
  <polygon points="95,150 167,150 167,222 95,222" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.8"/>
  <text x="131" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#4338ca">b² = 16</text>
  <!-- the right triangle -->
  <polygon points="95,150 167,150 95,96" fill="#fff" stroke="#1e293b" stroke-width="2.2"/>
  <rect x="95" y="135" width="15" height="15" fill="none" stroke="#1e293b" stroke-width="1.4"/>
  <text x="135" y="246" text-anchor="middle" font-size="10" fill="#64748b">9 + 16 = 25, so c = √25 = 5</text>
</svg>`;

// ── Trigonometry: labelling a right-angled triangle (SOH CAH TOA) ────────────
DIAGRAMS["math-trig-triangle"] = `<svg viewBox="0 0 280 224" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">SOH · CAH · TOA</text>
  <!-- right triangle: angle theta at L, right angle at R -->
  <polygon points="48,176 224,176 224,60" fill="#eff6ff" stroke="#1e293b" stroke-width="2.2"/>
  <!-- right-angle mark -->
  <rect x="209" y="161" width="15" height="15" fill="none" stroke="#1e293b" stroke-width="1.4"/>
  <!-- angle theta arc -->
  <path d="M 88 176 A 40 40 0 0 0 79 153" fill="none" stroke="#ef4444" stroke-width="1.8"/>
  <text x="74" y="170" font-size="12" font-weight="700" fill="#ef4444">θ</text>
  <circle cx="48" cy="176" r="3.5" fill="#1e293b"/>
  <!-- side labels -->
  <text x="136" y="194" text-anchor="middle" font-size="11" font-weight="700" fill="#0ea5e9">Adjacent</text>
  <text x="231" y="122" text-anchor="start" font-size="11" font-weight="700" fill="#6366f1">Opposite</text>
  <text x="118" y="108" text-anchor="middle" font-size="11" font-weight="700" fill="#f59e0b" transform="rotate(-33 118 108)">Hypotenuse</text>
  <text x="140" y="216" text-anchor="middle" font-size="9" fill="#64748b">label sides relative to the angle θ, not the right angle</text>
</svg>`;

// ── Construction: equilateral triangle from base AB ──────────────────────────
DIAGRAMS["math-equilateral-construction"] = `<svg viewBox="0 0 280 212" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Equilateral Triangle ABC</text>
  <!-- equal-radius arcs from A and B meeting at C -->
  <path d="M 94 42 A 140 140 0 0 1 177 90" fill="none" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3"/>
  <path d="M 103 90 A 140 140 0 0 1 186 42" fill="none" stroke="#94a3b8" stroke-width="1.3" stroke-dasharray="4,3"/>
  <!-- triangle -->
  <polygon points="70,180 210,180 140,59" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.2"/>
  <circle cx="70" cy="180" r="4" fill="#1e293b"/>
  <circle cx="210" cy="180" r="4" fill="#1e293b"/>
  <circle cx="140" cy="59" r="4" fill="#6366f1"/>
  <text x="60" y="194" text-anchor="end" font-size="12" font-weight="700" fill="#1e293b">A</text>
  <text x="220" y="194" text-anchor="start" font-size="12" font-weight="700" fill="#1e293b">B</text>
  <text x="140" y="50" text-anchor="middle" font-size="12" font-weight="700" fill="#6366f1">C</text>
  <text x="140" y="204" text-anchor="middle" font-size="9" fill="#64748b">arcs of radius AB from A and B cross at C — all sides equal</text>
</svg>`;

// ── Construction: regular hexagon inscribed in a circle ──────────────────────
DIAGRAMS["math-hexagon-construction"] = `<svg viewBox="0 0 280 222" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Regular Hexagon (side = radius)</text>
  <circle cx="140" cy="115" r="70" fill="none" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4,3"/>
  <polygon points="210,115 175,54.4 105,54.4 70,115 105,175.6 175,175.6" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.2"/>
  <!-- centre and radius marker -->
  <circle cx="140" cy="115" r="3" fill="#1e293b"/>
  <text x="134" y="112" text-anchor="end" font-size="10" font-weight="700" fill="#1e293b">O</text>
  <line x1="140" y1="115" x2="210" y2="115" stroke="#6366f1" stroke-width="1.6"/>
  <text x="172" y="110" text-anchor="middle" font-size="9" font-weight="700" fill="#6366f1">r</text>
  <!-- vertices -->
  <circle cx="210" cy="115" r="3.5" fill="#6366f1"/>
  <circle cx="175" cy="54.4" r="3.5" fill="#6366f1"/>
  <circle cx="105" cy="54.4" r="3.5" fill="#6366f1"/>
  <circle cx="70" cy="115" r="3.5" fill="#6366f1"/>
  <circle cx="105" cy="175.6" r="3.5" fill="#6366f1"/>
  <circle cx="175" cy="175.6" r="3.5" fill="#6366f1"/>
  <text x="140" y="212" text-anchor="middle" font-size="9" fill="#64748b">keep the compass at radius r for all six steps</text>
</svg>`;

// ── Angle types: acute, right, obtuse, reflex ────────────────────────────────
DIAGRAMS["math-angle-types"] = `<svg viewBox="0 0 280 118" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- acute -->
  <line x1="22" y1="78" x2="60" y2="78" stroke="#1e293b" stroke-width="2"/>
  <line x1="22" y1="78" x2="46" y2="47" stroke="#1e293b" stroke-width="2"/>
  <path d="M 40 78 A 18 18 0 0 0 33 64" fill="none" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="35" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Acute</text>
  <text x="35" y="112" text-anchor="middle" font-size="8" fill="#64748b">&lt; 90°</text>
  <!-- right -->
  <line x1="92" y1="78" x2="130" y2="78" stroke="#1e293b" stroke-width="2"/>
  <line x1="92" y1="78" x2="92" y2="42" stroke="#1e293b" stroke-width="2"/>
  <rect x="92" y="64" width="14" height="14" fill="none" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="108" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Right</text>
  <text x="108" y="112" text-anchor="middle" font-size="8" fill="#64748b">= 90°</text>
  <!-- obtuse -->
  <line x1="162" y1="78" x2="200" y2="78" stroke="#1e293b" stroke-width="2"/>
  <line x1="162" y1="78" x2="139" y2="50" stroke="#1e293b" stroke-width="2"/>
  <path d="M 180 78 A 18 18 0 0 0 148 67" fill="none" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="178" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Obtuse</text>
  <text x="178" y="112" text-anchor="middle" font-size="8" fill="#64748b">90–180°</text>
  <!-- reflex -->
  <line x1="245" y1="78" x2="283" y2="78" stroke="#1e293b" stroke-width="2"/>
  <line x1="245" y1="78" x2="217" y2="97" stroke="#1e293b" stroke-width="2"/>
  <path d="M 263 78 A 18 18 0 1 0 235 88" fill="none" stroke="#f59e0b" stroke-width="1.6"/>
  <text x="250" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Reflex</text>
  <text x="250" y="112" text-anchor="middle" font-size="8" fill="#64748b">180–360°</text>
</svg>`;

// ── Interior angles of a polygon: pentagon split into 3 triangles ────────────
DIAGRAMS["math-polygon-angles"] = `<svg viewBox="0 0 280 212" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Interior Angles of a Pentagon</text>
  <polygon points="140,38 211,89 184,173 96,173 69,89" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.2"/>
  <!-- diagonals from top vertex split into 3 triangles -->
  <line x1="140" y1="38" x2="96" y2="173" stroke="#6366f1" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="140" y1="38" x2="184" y2="173" stroke="#6366f1" stroke-width="1.4" stroke-dasharray="4,3"/>
  <text x="112" y="128" text-anchor="middle" font-size="10" fill="#6366f1">180°</text>
  <text x="140" y="120" text-anchor="middle" font-size="10" fill="#6366f1">180°</text>
  <text x="168" y="128" text-anchor="middle" font-size="10" fill="#6366f1">180°</text>
  <!-- one interior angle marked -->
  <text x="96" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="#1d4ed8">108°</text>
  <text x="140" y="200" text-anchor="middle" font-size="9" fill="#64748b">3 triangles → (5−2)×180° = 540°, each angle 108°</text>
</svg>`;

// ── Parallel lines cut by a transversal ──────────────────────────────────────
DIAGRAMS["math-parallel-transversal"] = `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Parallel Lines &amp; a Transversal</text>
  <!-- two parallel lines -->
  <line x1="28" y1="72" x2="252" y2="72" stroke="#1e293b" stroke-width="2.2"/>
  <line x1="28" y1="158" x2="252" y2="158" stroke="#1e293b" stroke-width="2.2"/>
  <!-- parallel arrow marks -->
  <path d="M 150 67 l 7 5 l -7 5" fill="none" stroke="#1e293b" stroke-width="1.4"/>
  <path d="M 150 153 l 7 5 l -7 5" fill="none" stroke="#1e293b" stroke-width="1.4"/>
  <!-- transversal -->
  <line x1="70" y1="38" x2="210" y2="192" stroke="#f59e0b" stroke-width="2.2"/>
  <!-- intersection points P1(98,72) P2(182,158) -->
  <!-- angle a (acute) corresponding pair, blue -->
  <text x="116" y="86" font-size="11" font-weight="700" fill="#1d4ed8">a</text>
  <text x="200" y="172" font-size="11" font-weight="700" fill="#1d4ed8">a</text>
  <!-- angle b (obtuse) co-interior with lower a, orange -->
  <text x="196" y="150" font-size="11" font-weight="700" fill="#b45309">b</text>
  <text x="140" y="206" text-anchor="middle" font-size="9" fill="#64748b">corresponding a = a · alternate (Z) equal · co-interior a + b = 180°</text>
</svg>`;

// ── Vertically opposite angles ───────────────────────────────────────────────
DIAGRAMS["math-vertically-opposite"] = `<svg viewBox="0 0 280 172" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Vertically Opposite Angles</text>
  <line x1="40" y1="52" x2="240" y2="132" stroke="#1e293b" stroke-width="2.2"/>
  <line x1="40" y1="132" x2="240" y2="52" stroke="#1e293b" stroke-width="2.2"/>
  <circle cx="140" cy="92" r="3" fill="#1e293b"/>
  <text x="140" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">a</text>
  <text x="140" y="118" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">a</text>
  <text x="106" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">b</text>
  <text x="174" y="96" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">b</text>
  <text x="140" y="162" text-anchor="middle" font-size="9" fill="#64748b">opposite angles are equal · a + b = 180°</text>
</svg>`;

// ── Parts of a circle ────────────────────────────────────────────────────────
DIAGRAMS["math-circle-parts"] = `<svg viewBox="0 0 280 230" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Parts of a Circle</text>
  <!-- sector shading -->
  <path d="M 138 116 L 138 36 A 80 80 0 0 1 207 76 Z" fill="#fef3c7" stroke="none"/>
  <circle cx="138" cy="116" r="80" fill="none" stroke="#3b82f6" stroke-width="2.2"/>
  <!-- diameter -->
  <line x1="58" y1="116" x2="218" y2="116" stroke="#6366f1" stroke-width="1.8"/>
  <text x="86" y="131" font-size="9" font-weight="700" fill="#6366f1">diameter</text>
  <!-- radius -->
  <line x1="138" y1="116" x2="138" y2="36" stroke="#ef4444" stroke-width="1.8"/>
  <text x="132" y="64" text-anchor="end" font-size="9" font-weight="700" fill="#ef4444">radius</text>
  <!-- centre -->
  <circle cx="138" cy="116" r="3" fill="#1e293b"/>
  <text x="132" y="113" text-anchor="end" font-size="9" font-weight="700" fill="#1e293b">O</text>
  <!-- chord -->
  <line x1="74" y1="160" x2="202" y2="160" stroke="#0ea5e9" stroke-width="1.8"/>
  <text x="138" y="175" text-anchor="middle" font-size="9" font-weight="700" fill="#0ea5e9">chord</text>
  <!-- tangent -->
  <line x1="218" y1="80" x2="218" y2="152" stroke="#16a34a" stroke-width="1.8"/>
  <text x="224" y="118" font-size="9" font-weight="700" fill="#16a34a">tangent</text>
  <!-- sector label -->
  <text x="170" y="64" font-size="9" font-weight="700" fill="#b45309">sector</text>
  <text x="140" y="222" text-anchor="middle" font-size="9" fill="#64748b">diameter = 2 × radius</text>
</svg>`;

// ── Reflection in a mirror line ──────────────────────────────────────────────
DIAGRAMS["math-reflection"] = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><pattern id="grid-refl" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern></defs>
  <rect x="0" y="0" width="280" height="200" fill="url(#grid-refl)"/>
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Reflection</text>
  <!-- mirror line -->
  <line x1="140" y1="28" x2="140" y2="184" stroke="#ef4444" stroke-width="1.6" stroke-dasharray="5,4"/>
  <text x="140" y="196" text-anchor="middle" font-size="9" font-weight="700" fill="#ef4444">mirror line</text>
  <!-- object -->
  <polygon points="95,55 95,135 55,135" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="73" y="128" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">object</text>
  <!-- image (reflected: x' = 280 - x) -->
  <polygon points="185,55 185,135 225,135" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="207" y="128" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">image</text>
</svg>`;

// ── Translation by a vector ──────────────────────────────────────────────────
DIAGRAMS["math-translation"] = `<svg viewBox="0 0 280 196" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <pattern id="grid-trans" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern>
    <marker id="arrow-trans" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#16a34a"/></marker>
  </defs>
  <rect x="0" y="0" width="280" height="196" fill="url(#grid-trans)"/>
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Translation</text>
  <!-- object -->
  <polygon points="50,55 50,105 90,105" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="56" y="98" font-size="9" font-weight="700" fill="#1d4ed8">A</text>
  <!-- image (slid +110, +45) -->
  <polygon points="160,100 160,150 200,150" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="166" y="143" font-size="9" font-weight="700" fill="#b45309">A′</text>
  <!-- translation vector arrow -->
  <line x1="50" y1="55" x2="152" y2="97" stroke="#16a34a" stroke-width="1.8" marker-end="url(#arrow-trans)"/>
  <text x="108" y="68" font-size="9" font-weight="700" fill="#16a34a">vector (a, b)</text>
</svg>`;

// ── Rotation about a centre ──────────────────────────────────────────────────
DIAGRAMS["math-rotation"] = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <pattern id="grid-rot" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern>
    <marker id="arrow-rot" markerWidth="9" markerHeight="9" refX="5" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#6366f1"/></marker>
  </defs>
  <rect x="0" y="0" width="280" height="200" fill="url(#grid-rot)"/>
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Rotation 90° anticlockwise about O</text>
  <!-- object -->
  <polygon points="162,110 228,110 228,66" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <!-- image: (x,y)->(-y,x) about O(140,110) -->
  <polygon points="140,88 140,22 96,22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <!-- centre -->
  <circle cx="140" cy="110" r="3.5" fill="#1e293b"/>
  <text x="134" y="123" text-anchor="end" font-size="10" font-weight="700" fill="#1e293b">O</text>
  <!-- rotation arc arrow -->
  <path d="M 196 96 A 60 60 0 0 0 126 56" fill="none" stroke="#6366f1" stroke-width="1.6" marker-end="url(#arrow-rot)"/>
</svg>`;

// ── Enlargement from a centre, scale factor 2 ────────────────────────────────
DIAGRAMS["math-enlargement"] = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><pattern id="grid-enl" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern></defs>
  <rect x="0" y="0" width="280" height="200" fill="url(#grid-enl)"/>
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Enlargement, scale factor 2</text>
  <!-- rays from centre through object vertices to image vertices -->
  <line x1="40" y1="170" x2="100" y2="90" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="40" y1="170" x2="160" y2="90" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="40" y1="170" x2="100" y2="30" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- image (larger) -->
  <polygon points="100,90 160,90 100,30" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="150" y="50" font-size="9" font-weight="700" fill="#b45309">image</text>
  <!-- object (smaller) -->
  <polygon points="70,130 100,130 70,100" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="104" y="124" font-size="9" font-weight="700" fill="#1d4ed8">object</text>
  <!-- centre of enlargement -->
  <circle cx="40" cy="170" r="3.5" fill="#1e293b"/>
  <text x="46" y="183" font-size="9" font-weight="700" fill="#1e293b">centre</text>
</svg>`;

// ── Area of triangle, parallelogram and trapezium ────────────────────────────
DIAGRAMS["math-area-quad"] = `<svg viewBox="0 0 280 158" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- triangle -->
  <polygon points="18,108 92,108 64,52" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <line x1="64" y1="52" x2="64" y2="108" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="64" y="98" width="10" height="10" fill="none" stroke="#1e293b" stroke-width="1"/>
  <text x="55" y="124" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">b</text>
  <text x="70" y="84" font-size="9" font-weight="700" fill="#1e293b">h</text>
  <text x="55" y="140" text-anchor="middle" font-size="9" fill="#1d4ed8">½ × b × h</text>
  <!-- parallelogram -->
  <polygon points="108,108 168,108 184,52 124,52" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
  <line x1="124" y1="52" x2="124" y2="108" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,2"/>
  <rect x="124" y="98" width="10" height="10" fill="none" stroke="#1e293b" stroke-width="1"/>
  <text x="146" y="124" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">b</text>
  <text x="130" y="84" font-size="9" font-weight="700" fill="#1e293b">h</text>
  <text x="146" y="140" text-anchor="middle" font-size="9" fill="#4338ca">b × h</text>
  <!-- trapezium -->
  <polygon points="206,108 274,108 260,52 220,52" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <line x1="240" y1="52" x2="240" y2="108" stroke="#1e293b" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="240" y="49" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">a</text>
  <text x="240" y="124" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">b</text>
  <text x="246" y="84" font-size="9" font-weight="700" fill="#1e293b">h</text>
  <text x="240" y="140" text-anchor="middle" font-size="9" fill="#b45309">½(a+b)h</text>
</svg>`;

// ── Volume of a prism and a cylinder ─────────────────────────────────────────
DIAGRAMS["math-prism-cylinder"] = `<svg viewBox="0 0 280 168" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Volume = cross-section × length</text>
  <!-- triangular prism: front triangle + offset back triangle -->
  <!-- back triangle (behind) -->
  <polygon points="78,104 138,104 93,58" fill="#eff6ff" stroke="#94a3b8" stroke-width="1.4"/>
  <!-- connecting edges -->
  <line x1="35" y1="122" x2="78" y2="104" stroke="#94a3b8" stroke-width="1.4"/>
  <line x1="95" y1="122" x2="138" y2="104" stroke="#94a3b8" stroke-width="1.4"/>
  <line x1="50" y1="64" x2="93" y2="58" stroke="#94a3b8" stroke-width="1.4"/>
  <!-- front triangle (cross-section) -->
  <polygon points="35,122 95,122 50,64" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="46" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">cross-</text>
  <text x="46" y="109" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">section</text>
  <text x="104" y="122" font-size="9" fill="#475569">length</text>
  <!-- cylinder -->
  <ellipse cx="210" cy="60" rx="34" ry="11" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <line x1="176" y1="60" x2="176" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <line x1="244" y1="60" x2="244" y2="130" stroke="#f59e0b" stroke-width="2"/>
  <path d="M 176 130 A 34 11 0 0 0 244 130" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <path d="M 176 130 A 34 11 0 0 1 244 130" fill="none" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3,2"/>
  <line x1="210" y1="60" x2="244" y2="60" stroke="#b45309" stroke-width="1.4"/>
  <text x="226" y="56" font-size="9" font-weight="700" fill="#b45309">r</text>
  <text x="250" y="98" font-size="9" font-weight="700" fill="#b45309">h</text>
  <text x="210" y="156" text-anchor="middle" font-size="9" fill="#64748b">cylinder: V = πr²h</text>
</svg>`;

// ── Net of a cuboid ──────────────────────────────────────────────────────────
DIAGRAMS["math-net-cuboid"] = `<svg viewBox="0 0 210 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="105" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Net of a Cuboid</text>
  <g stroke="#3b82f6" stroke-width="1.8" fill="#eff6ff">
    <rect x="70" y="24" width="70" height="40"/>
    <rect x="70" y="64" width="70" height="50"/>
    <rect x="70" y="114" width="70" height="40"/>
    <rect x="70" y="154" width="70" height="50"/>
    <rect x="30" y="64" width="40" height="50"/>
    <rect x="140" y="64" width="40" height="50"/>
  </g>
  <text x="105" y="48" text-anchor="middle" font-size="9" fill="#1d4ed8">top</text>
  <text x="105" y="93" text-anchor="middle" font-size="9" fill="#1d4ed8">front</text>
  <text x="105" y="138" text-anchor="middle" font-size="9" fill="#1d4ed8">bottom</text>
  <text x="105" y="182" text-anchor="middle" font-size="9" fill="#1d4ed8">back</text>
  <text x="50" y="93" text-anchor="middle" font-size="9" fill="#1d4ed8">side</text>
  <text x="160" y="93" text-anchor="middle" font-size="9" fill="#1d4ed8">side</text>
</svg>`;

// ── Plan and elevations of a cuboid ──────────────────────────────────────────
DIAGRAMS["math-plan-elevation"] = `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Plan &amp; Elevations</text>
  <!-- isometric cuboid -->
  <polygon points="40,80 100,80 100,140 40,140" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="40,80 60,58 120,58 100,80" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <polygon points="100,80 120,58 120,118 100,140" fill="#93c5fd" stroke="#3b82f6" stroke-width="2"/>
  <text x="70" y="158" text-anchor="middle" font-size="9" fill="#475569">solid</text>
  <!-- three views -->
  <rect x="170" y="40" width="44" height="34" fill="#eff6ff" stroke="#6366f1" stroke-width="1.6"/>
  <text x="220" y="60" font-size="9" fill="#4338ca">front</text>
  <rect x="170" y="84" width="30" height="34" fill="#eff6ff" stroke="#6366f1" stroke-width="1.6"/>
  <text x="206" y="104" font-size="9" fill="#4338ca">side</text>
  <rect x="170" y="128" width="44" height="26" fill="#eff6ff" stroke="#6366f1" stroke-width="1.6"/>
  <text x="220" y="144" font-size="9" fill="#4338ca">plan</text>
</svg>`;

// ── Similar triangles ────────────────────────────────────────────────────────
DIAGRAMS["math-similar-triangles"] = `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Similar Triangles (scale factor 1.5)</text>
  <!-- small triangle ABC -->
  <polygon points="28,140 96,140 28,84" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <rect x="28" y="130" width="10" height="10" fill="none" stroke="#1e293b" stroke-width="1"/>
  <text x="22" y="144" text-anchor="end" font-size="10" font-weight="700" fill="#1e293b">A</text>
  <text x="102" y="144" font-size="10" font-weight="700" fill="#1e293b">B</text>
  <text x="22" y="84" text-anchor="end" font-size="10" font-weight="700" fill="#1e293b">C</text>
  <text x="60" y="153" text-anchor="middle" font-size="8" fill="#1d4ed8">4</text>
  <!-- large triangle DEF -->
  <polygon points="150,150 252,150 150,66" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <rect x="150" y="140" width="10" height="10" fill="none" stroke="#1e293b" stroke-width="1"/>
  <text x="144" y="154" text-anchor="end" font-size="10" font-weight="700" fill="#1e293b">D</text>
  <text x="258" y="154" font-size="10" font-weight="700" fill="#1e293b">E</text>
  <text x="144" y="66" text-anchor="end" font-size="10" font-weight="700" fill="#1e293b">F</text>
  <text x="200" y="163" text-anchor="middle" font-size="8" fill="#b45309">6</text>
  <text x="140" y="34" text-anchor="middle" font-size="9" fill="#64748b">same angles · sides in ratio 4 : 6 = 1 : 1.5</text>
</svg>`;

// ── Coordinate plane: four quadrants ─────────────────────────────────────────
DIAGRAMS["math-quadrants"] = `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <pattern id="grid-quad" width="18" height="18" patternUnits="userSpaceOnUse"><path d="M 18 0 L 0 0 0 18" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern>
    <marker id="ax-quad" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#1e293b"/></marker>
  </defs>
  <rect x="12" y="14" width="216" height="192" fill="url(#grid-quad)"/>
  <!-- axes -->
  <line x1="14" y1="110" x2="226" y2="110" stroke="#1e293b" stroke-width="1.6" marker-end="url(#ax-quad)"/>
  <line x1="120" y1="206" x2="120" y2="16" stroke="#1e293b" stroke-width="1.6" marker-end="url(#ax-quad)"/>
  <text x="222" y="124" font-size="9" font-weight="700" fill="#1e293b">x</text>
  <text x="126" y="24" font-size="9" font-weight="700" fill="#1e293b">y</text>
  <text x="110" y="124" font-size="8" fill="#64748b">O</text>
  <!-- quadrant labels -->
  <text x="186" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8">I (+,+)</text>
  <text x="58" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8">II (−,+)</text>
  <text x="58" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8">III (−,−)</text>
  <text x="186" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#94a3b8">IV (+,−)</text>
  <!-- plotted point (2,2) -->
  <line x1="120" y1="110" x2="156" y2="110" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="156" y1="110" x2="156" y2="74" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,2"/>
  <circle cx="156" cy="74" r="3.5" fill="#3b82f6"/>
  <text x="162" y="92" font-size="9" font-weight="700" fill="#1d4ed8">(2, 2)</text>
</svg>`;

// ── Gradient and y-intercept of a straight line ──────────────────────────────
DIAGRAMS["math-gradient-intercept"] = `<svg viewBox="0 0 240 216" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><pattern id="grid-grad" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M 22 0 L 0 0 0 22" fill="none" stroke="#eef2f7" stroke-width="1"/></pattern></defs>
  <rect x="40" y="18" width="186" height="162" fill="url(#grid-grad)"/>
  <text x="130" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">y = mx + c</text>
  <!-- axes -->
  <line x1="40" y1="180" x2="226" y2="180" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="40" y1="180" x2="40" y2="20" stroke="#1e293b" stroke-width="1.6"/>
  <text x="220" y="195" font-size="9" font-weight="700" fill="#1e293b">x</text>
  <text x="26" y="28" font-size="9" font-weight="700" fill="#1e293b">y</text>
  <!-- line through (0,2)=(40,136) with gradient -->
  <line x1="40" y1="136" x2="150" y2="26" stroke="#3b82f6" stroke-width="2.4"/>
  <!-- gradient triangle: run then rise -->
  <line x1="40" y1="136" x2="84" y2="136" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="4,3"/>
  <line x1="84" y1="136" x2="84" y2="92" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="4,3"/>
  <text x="62" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">run</text>
  <text x="90" y="118" font-size="9" font-weight="700" fill="#16a34a">rise</text>
  <text x="150" y="64" font-size="9" fill="#475569">m = rise ÷ run</text>
  <!-- y-intercept -->
  <circle cx="40" cy="136" r="3.5" fill="#f59e0b"/>
  <text x="46" y="132" font-size="9" font-weight="700" fill="#b45309">c (y-intercept)</text>
</svg>`;

// ── Inequalities on a number line ────────────────────────────────────────────
DIAGRAMS["math-inequality-line"] = `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="ineq-r" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#3b82f6"/></marker>
    <marker id="ineq-l" markerWidth="9" markerHeight="9" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 Z" fill="#f59e0b"/></marker>
  </defs>
  <!-- line A: x > 3 (open circle, arrow right) -->
  <text x="14" y="38" font-size="10" font-weight="700" fill="#1d4ed8">x &gt; 3</text>
  <line x1="60" y1="48" x2="266" y2="48" stroke="#1e293b" stroke-width="1.4"/>
  <g stroke="#1e293b" stroke-width="1">
    <line x1="80" y1="44" x2="80" y2="52"/><line x1="110" y1="44" x2="110" y2="52"/><line x1="140" y1="44" x2="140" y2="52"/>
    <line x1="170" y1="44" x2="170" y2="52"/><line x1="200" y1="44" x2="200" y2="52"/><line x1="230" y1="44" x2="230" y2="52"/>
  </g>
  <text x="140" y="66" text-anchor="middle" font-size="8" fill="#64748b">3</text>
  <line x1="140" y1="48" x2="255" y2="48" stroke="#3b82f6" stroke-width="3" marker-end="url(#ineq-r)"/>
  <circle cx="140" cy="48" r="5" fill="#fff" stroke="#3b82f6" stroke-width="2.4"/>
  <!-- line B: x <= -1 (closed circle, arrow left) -->
  <text x="14" y="104" font-size="10" font-weight="700" fill="#b45309">x ≤ −1</text>
  <line x1="60" y1="114" x2="266" y2="114" stroke="#1e293b" stroke-width="1.4"/>
  <g stroke="#1e293b" stroke-width="1">
    <line x1="80" y1="110" x2="80" y2="118"/><line x1="110" y1="110" x2="110" y2="118"/><line x1="140" y1="110" x2="140" y2="118"/>
    <line x1="170" y1="110" x2="170" y2="118"/><line x1="200" y1="110" x2="200" y2="118"/><line x1="230" y1="110" x2="230" y2="118"/>
  </g>
  <text x="110" y="132" text-anchor="middle" font-size="8" fill="#64748b">−1</text>
  <line x1="110" y1="114" x2="68" y2="114" stroke="#f59e0b" stroke-width="3" marker-end="url(#ineq-l)"/>
  <circle cx="110" cy="114" r="5" fill="#f59e0b"/>
</svg>`;

// ── Sector of a circle (arc length & sector area) ────────────────────────────
DIAGRAMS["math-sector"] = `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Sector of a Circle</text>
  <!-- full circle outline (faint) -->
  <circle cx="120" cy="118" r="70" fill="none" stroke="#cbd5e1" stroke-width="1.4" stroke-dasharray="3 3"/>
  <!-- shaded sector: centre (120,118), from 0deg (right) up to -60deg -->
  <path d="M 120 118 L 190 118 A 70 70 0 0 0 155 57.4 Z" fill="#dbeafe" stroke="#3b82f6" stroke-width="2.2"/>
  <!-- two radii -->
  <line x1="120" y1="118" x2="190" y2="118" stroke="#6366f1" stroke-width="1.8"/>
  <line x1="120" y1="118" x2="155" y2="57.4" stroke="#6366f1" stroke-width="1.8"/>
  <!-- radius label -->
  <text x="150" y="113" text-anchor="middle" font-size="9" font-weight="700" fill="#6366f1">r</text>
  <!-- centre dot and angle -->
  <circle cx="120" cy="118" r="3" fill="#1e293b"/>
  <text x="113" y="115" text-anchor="end" font-size="9" font-weight="700" fill="#1e293b">O</text>
  <path d="M 142 118 A 22 22 0 0 0 131 99" fill="none" stroke="#ef4444" stroke-width="1.4"/>
  <text x="150" y="100" font-size="10" font-weight="700" fill="#ef4444">θ</text>
  <!-- arc label -->
  <text x="200" y="86" font-size="9" font-weight="700" fill="#3b82f6">arc</text>
  <text x="140" y="202" text-anchor="middle" font-size="9" fill="#64748b">fraction of circle = θ ÷ 360</text>
</svg>`;
