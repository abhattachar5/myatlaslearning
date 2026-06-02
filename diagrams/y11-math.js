// diagrams/y11-math.js — SVG figures for Year 11 maths lessons.
// Adds keys onto the shared DIAGRAMS map (declared in diagrams/science.js, first).
// Theme: blue #3b82f6 / indigo #6366f1, ink #1e293b, guides #94a3b8.
// Authored by the atlas-content skill for Year 11. Self-contained SVG only.

// ── Parabola: roots, turning point, line of symmetry, y-intercept ────────────
DIAGRAMS["math-parabola"] = `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">A Parabola y = x² − 6x + 5</text>
  <line x1="30" y1="140" x2="260" y2="140" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="60" y1="20" x2="60" y2="150" stroke="#1e293b" stroke-width="1.3"/>
  <path d="M70,40 Q150,210 230,40" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <line x1="150" y1="20" x2="150" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="150" y="168" text-anchor="middle" font-size="8.5" fill="#64748b">line of symmetry</text>
  <circle cx="95" cy="140" r="3.5" fill="#6366f1"/><circle cx="205" cy="140" r="3.5" fill="#6366f1"/>
  <text x="95" y="132" text-anchor="middle" font-size="8.5" fill="#6366f1">root</text>
  <text x="205" y="132" text-anchor="middle" font-size="8.5" fill="#6366f1">root</text>
  <circle cx="150" cy="128" r="4" fill="#3b82f6"/>
  <text x="160" y="126" font-size="8.5" fill="#3b82f6">turning point (3, −4)</text>
  <circle cx="60" cy="58" r="3.5" fill="#1e293b"/>
  <text x="52" y="56" text-anchor="end" font-size="8.5" fill="#1e293b">y-int (0, 5)</text>
</svg>`;

// ── Cubic and reciprocal graphs ──────────────────────────────────────────────
DIAGRAMS["math-cubic-reciprocal"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="14" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Cubic and Reciprocal Graphs</text>
  <!-- cubic -->
  <line x1="20" y1="80" x2="120" y2="80" stroke="#1e293b" stroke-width="1"/>
  <line x1="70" y1="30" x2="70" y2="130" stroke="#1e293b" stroke-width="1"/>
  <path d="M30,124 C60,124 60,36 110,36" fill="none" stroke="#3b82f6" stroke-width="2.2"/>
  <text x="70" y="146" text-anchor="middle" font-size="9" fill="#3b82f6">y = x³</text>
  <!-- reciprocal -->
  <line x1="160" y1="80" x2="260" y2="80" stroke="#1e293b" stroke-width="1"/>
  <line x1="210" y1="30" x2="210" y2="130" stroke="#1e293b" stroke-width="1"/>
  <path d="M214,34 C220,70 225,75 252,77" fill="none" stroke="#6366f1" stroke-width="2.2"/>
  <path d="M168,83 C195,85 200,90 206,126" fill="none" stroke="#6366f1" stroke-width="2.2"/>
  <text x="210" y="146" text-anchor="middle" font-size="9" fill="#6366f1">y = 1/x</text>
</svg>`;

// ── Circle theorems: centre angle = 2 × circumference angle ──────────────────
DIAGRAMS["math-circle-theorems"] = `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Angle at the Centre = 2 × at the Circumference</text>
  <circle cx="140" cy="95" r="62" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="140" cy="95" r="3" fill="#1e293b"/>
  <text x="140" y="110" text-anchor="middle" font-size="8" fill="#64748b">O</text>
  <!-- arc endpoints A and B, point P on circumference (top) -->
  <line x1="140" y1="95" x2="86" y2="125" stroke="#3b82f6" stroke-width="1.8"/>
  <line x1="140" y1="95" x2="194" y2="125" stroke="#3b82f6" stroke-width="1.8"/>
  <line x1="140" y1="33" x2="86" y2="125" stroke="#6366f1" stroke-width="1.8"/>
  <line x1="140" y1="33" x2="194" y2="125" stroke="#6366f1" stroke-width="1.8"/>
  <circle cx="86" cy="125" r="3" fill="#1e293b"/><text x="78" y="135" font-size="9" fill="#1e293b">A</text>
  <circle cx="194" cy="125" r="3" fill="#1e293b"/><text x="198" y="135" font-size="9" fill="#1e293b">B</text>
  <circle cx="140" cy="33" r="3" fill="#1e293b"/><text x="140" y="29" text-anchor="middle" font-size="9" fill="#1e293b">P</text>
  <text x="140" y="122" text-anchor="middle" font-size="9" font-weight="700" fill="#3b82f6">2x</text>
  <text x="140" y="52" text-anchor="middle" font-size="9" font-weight="700" fill="#6366f1">x</text>
</svg>`;

// ── Non-right triangle for sine / cosine rule ────────────────────────────────
DIAGRAMS["math-sine-cosine-rule"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Labelling a Triangle</text>
  <polygon points="50,120 230,120 110,40" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
  <text x="44" y="124" text-anchor="end" font-size="11" font-weight="700" fill="#6366f1">A</text>
  <text x="238" y="124" text-anchor="start" font-size="11" font-weight="700" fill="#6366f1">B</text>
  <text x="110" y="34" text-anchor="middle" font-size="11" font-weight="700" fill="#6366f1">C</text>
  <text x="140" y="134" text-anchor="middle" font-size="10" fill="#1e293b">c</text>
  <text x="180" y="78" text-anchor="middle" font-size="10" fill="#1e293b">a</text>
  <text x="72" y="78" text-anchor="middle" font-size="10" fill="#1e293b">b</text>
  <text x="140" y="148" text-anchor="middle" font-size="8.5" fill="#64748b">side a is opposite angle A, and so on</text>
</svg>`;

// ── Vector addition (tip to tail) ────────────────────────────────────────────
DIAGRAMS["math-vectors"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Vector Addition: a + b</text>
  <defs><marker id="v-ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1e293b"/></marker></defs>
  <line x1="40" y1="120" x2="140" y2="80" stroke="#3b82f6" stroke-width="2.4" marker-end="url(#v-ar)"/>
  <text x="86" y="92" font-size="11" font-weight="700" fill="#3b82f6">a</text>
  <line x1="140" y1="80" x2="230" y2="50" stroke="#6366f1" stroke-width="2.4" marker-end="url(#v-ar)"/>
  <text x="188" y="58" font-size="11" font-weight="700" fill="#6366f1">b</text>
  <line x1="40" y1="120" x2="230" y2="50" stroke="#1e293b" stroke-width="2.4" stroke-dasharray="5,3" marker-end="url(#v-ar)"/>
  <text x="120" y="108" font-size="10" font-weight="700" fill="#1e293b">a + b (resultant)</text>
</svg>`;

// ── Sine curve ───────────────────────────────────────────────────────────────
DIAGRAMS["math-trig-graph"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">y = sin x</text>
  <line x1="20" y1="80" x2="262" y2="80" stroke="#1e293b" stroke-width="1.2"/>
  <line x1="30" y1="35" x2="30" y2="125" stroke="#1e293b" stroke-width="1.2"/>
  <path d="M30,80 Q70,30 110,80 T190,80 T270,80" fill="none" stroke="#3b82f6" stroke-width="2.4"/>
  <g font-size="8" fill="#64748b">
    <text x="110" y="94">180°</text><text x="190" y="94">360°</text>
    <text x="24" y="40" text-anchor="end">1</text><text x="24" y="122" text-anchor="end">−1</text>
  </g>
  <text x="140" y="142" text-anchor="middle" font-size="8.5" fill="#64748b">period 360°, between −1 and 1</text>
</svg>`;

// ── Histogram with unequal class widths (frequency density) ──────────────────
DIAGRAMS["math-histogram"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Histogram (frequency density)</text>
  <line x1="34" y1="130" x2="258" y2="130" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="34" y1="28" x2="34" y2="130" stroke="#1e293b" stroke-width="1.3"/>
  <g fill="#3b82f6" fill-opacity="0.55" stroke="#1e293b" stroke-width="1">
    <rect x="34" y="96" width="30" height="34"/>
    <rect x="64" y="60" width="50" height="70"/>
    <rect x="114" y="44" width="40" height="86"/>
    <rect x="154" y="84" width="70" height="46"/>
    <rect x="224" y="110" width="30" height="20"/>
  </g>
  <text x="12" y="80" text-anchor="middle" font-size="8.5" fill="#64748b" transform="rotate(-90 12 80)">freq density</text>
  <text x="140" y="148" text-anchor="middle" font-size="8.5" fill="#64748b">unequal widths · area = frequency</text>
</svg>`;

// ── Cumulative frequency curve (ogive) with median read-off ──────────────────
DIAGRAMS["math-cumulative-frequency"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Cumulative Frequency Curve</text>
  <line x1="36" y1="130" x2="258" y2="130" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="36" y1="26" x2="36" y2="130" stroke="#1e293b" stroke-width="1.3"/>
  <path d="M36,128 C90,124 130,96 160,70 C190,44 220,32 250,30" fill="none" stroke="#3b82f6" stroke-width="2.4"/>
  <line x1="36" y1="79" x2="160" y2="79" stroke="#6366f1" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="160" y1="79" x2="160" y2="130" stroke="#6366f1" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="30" y="82" text-anchor="end" font-size="8" fill="#6366f1">n/2</text>
  <text x="160" y="142" text-anchor="middle" font-size="8" fill="#6366f1">median</text>
  <text x="14" y="80" text-anchor="middle" font-size="8" fill="#64748b" transform="rotate(-90 14 80)">cum. freq</text>
</svg>`;

// ── Box plot (five-number summary) ───────────────────────────────────────────
DIAGRAMS["math-box-plot"] = `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Box Plot</text>
  <line x1="30" y1="55" x2="250" y2="55" stroke="#64748b" stroke-width="1"/>
  <!-- whiskers -->
  <line x1="46" y1="55" x2="96" y2="55" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="190" y1="55" x2="234" y2="55" stroke="#1e293b" stroke-width="1.6"/>
  <!-- box -->
  <rect x="96" y="40" width="94" height="30" fill="#3b82f6" fill-opacity="0.2" stroke="#3b82f6" stroke-width="1.8"/>
  <line x1="140" y1="40" x2="140" y2="70" stroke="#6366f1" stroke-width="2.2"/>
  <!-- end caps -->
  <line x1="46" y1="47" x2="46" y2="63" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="234" y1="47" x2="234" y2="63" stroke="#1e293b" stroke-width="1.6"/>
  <g font-size="8" fill="#64748b" text-anchor="middle">
    <text x="46" y="84">min</text><text x="96" y="84">LQ</text><text x="140" y="84">median</text>
    <text x="190" y="84">UQ</text><text x="234" y="84">max</text>
  </g>
  <text x="143" y="100" text-anchor="middle" font-size="8.5" fill="#3b82f6">the box is the interquartile range</text>
</svg>`;

// ── Area under a curve by trapezium strips ───────────────────────────────────
DIAGRAMS["math-area-under-graph"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Estimating Area with Strips</text>
  <line x1="34" y1="125" x2="258" y2="125" stroke="#1e293b" stroke-width="1.3"/>
  <line x1="34" y1="25" x2="34" y2="125" stroke="#1e293b" stroke-width="1.3"/>
  <g fill="#3b82f6" fill-opacity="0.18" stroke="#3b82f6" stroke-width="1">
    <path d="M44,125 L44,96 L88,82 L88,125 Z"/>
    <path d="M88,125 L88,82 L132,62 L132,125 Z"/>
    <path d="M132,125 L132,62 L176,48 L176,125 Z"/>
    <path d="M176,125 L176,48 L220,40 L220,125 Z"/>
  </g>
  <path d="M44,96 Q140,40 220,40" fill="none" stroke="#6366f1" stroke-width="2.2"/>
  <text x="140" y="142" text-anchor="middle" font-size="8.5" fill="#64748b">thinner strips give a better estimate</text>
</svg>`;
