// diagrams/y10-math.js — SVG figures for Year 10 maths lessons.
// Adds keys onto the shared DIAGRAMS map (declared in diagrams/science.js,
// loaded first). Theme: blue #3b82f6 / indigo #6366f1, ink #1e293b.
// Authored by the atlas-content skill for Year 10. Self-contained SVG only.

// ── Equation as a balance: 2x + 5 = 17 ───────────────────────────────────────
DIAGRAMS["math-equation-balance"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">An equation balances both sides</text>
  <!-- beam -->
  <line x1="40" y1="46" x2="240" y2="46" stroke="#1e293b" stroke-width="3"/>
  <!-- fulcrum -->
  <polygon points="140,46 128,96 152,96" fill="#94a3b8"/>
  <line x1="118" y1="96" x2="162" y2="96" stroke="#64748b" stroke-width="3"/>
  <!-- left pan -->
  <line x1="80" y1="46" x2="80" y2="70" stroke="#64748b" stroke-width="1.4"/>
  <rect x="44" y="70" width="72" height="34" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="80" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">2x + 5</text>
  <!-- right pan -->
  <line x1="200" y1="46" x2="200" y2="70" stroke="#64748b" stroke-width="1.4"/>
  <rect x="170" y="70" width="60" height="34" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.6"/>
  <text x="200" y="92" text-anchor="middle" font-size="14" font-weight="700" fill="#6366f1">17</text>
  <text x="140" y="124" text-anchor="middle" font-size="10" fill="#475569">do the SAME to both sides to keep it level</text>
  <text x="140" y="140" text-anchor="middle" font-size="10" font-weight="700" fill="#3b82f6">−5 then ÷2  →  x = 6</text>
</svg>`;

// ── Double-bracket grid: (x + 3)(x + 4) = x² + 7x + 12 ───────────────────────
DIAGRAMS["math-quad-grid"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">(x + 3)(x + 4)</text>
  <g stroke="#1e293b" stroke-width="1.2" fill="none">
    <rect x="90" y="34" width="80" height="40"/>
    <rect x="170" y="34" width="60" height="40"/>
    <rect x="90" y="74" width="80" height="40"/>
    <rect x="170" y="74" width="60" height="40"/>
  </g>
  <text x="130" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">x</text>
  <text x="200" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">+4</text>
  <text x="82" y="58" text-anchor="end" font-size="12" font-weight="700" fill="#1e293b">x</text>
  <text x="82" y="98" text-anchor="end" font-size="12" font-weight="700" fill="#1e293b">+3</text>
  <text x="130" y="59" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">x²</text>
  <text x="200" y="59" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">4x</text>
  <text x="130" y="99" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">3x</text>
  <text x="200" y="99" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">12</text>
  <text x="140" y="138" text-anchor="middle" font-size="11" font-weight="700" fill="#3b82f6">= x² + 7x + 12</text>
</svg>`;

// ── Distance–time graph: travel, stop, return ────────────────────────────────
DIAGRAMS["math-distance-time"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Distance–Time Graph</text>
  <line x1="40" y1="130" x2="250" y2="130" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="40" y1="130" x2="40" y2="30" stroke="#1e293b" stroke-width="1.5"/>
  <text x="145" y="150" text-anchor="middle" font-size="9" fill="#64748b">time</text>
  <text x="18" y="80" text-anchor="middle" font-size="9" fill="#64748b" transform="rotate(-90 18 80)">distance</text>
  <polyline points="40,130 110,60 160,60 250,130" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="68" y="88" font-size="8.5" fill="#3b82f6">moving</text>
  <text x="120" y="54" font-size="8.5" fill="#475569">stopped</text>
  <text x="200" y="92" font-size="8.5" fill="#6366f1">returning</text>
</svg>`;

// ── Speed formula triangle (D over S × T) ────────────────────────────────────
DIAGRAMS["math-formula-triangle"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Speed Formula Triangle</text>
  <polygon points="140,28 70,124 210,124" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.8"/>
  <line x1="70" y1="80" x2="210" y2="80" stroke="#3b82f6" stroke-width="1.5"/>
  <line x1="140" y1="80" x2="140" y2="124" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="140" y="64" text-anchor="middle" font-size="16" font-weight="700" fill="#1e293b">D</text>
  <text x="108" y="108" text-anchor="middle" font-size="16" font-weight="700" fill="#1e293b">S</text>
  <text x="174" y="108" text-anchor="middle" font-size="16" font-weight="700" fill="#1e293b">T</text>
  <text x="140" y="142" text-anchor="middle" font-size="9.5" fill="#475569">cover D → S×T · cover S → D÷T · cover T → D÷S</text>
</svg>`;

// ── Scatter graph with positive correlation + line of best fit ───────────────
DIAGRAMS["math-scatter"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Positive Correlation</text>
  <line x1="40" y1="130" x2="250" y2="130" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="40" y1="130" x2="40" y2="30" stroke="#1e293b" stroke-width="1.5"/>
  <g fill="#3b82f6">
    <circle cx="64" cy="118" r="3.5"/><circle cx="86" cy="108" r="3.5"/><circle cx="104" cy="112" r="3.5"/>
    <circle cx="126" cy="96" r="3.5"/><circle cx="146" cy="88" r="3.5"/><circle cx="168" cy="80" r="3.5"/>
    <circle cx="190" cy="66" r="3.5"/><circle cx="210" cy="60" r="3.5"/><circle cx="232" cy="48" r="3.5"/>
  </g>
  <line x1="56" y1="120" x2="240" y2="46" stroke="#6366f1" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="150" y="150" text-anchor="middle" font-size="9" fill="#64748b">line of best fit follows the trend</text>
</svg>`;

// ── Two-set Venn diagram ─────────────────────────────────────────────────────
DIAGRAMS["math-venn-2set"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Venn Diagram: A and B</text>
  <rect x="24" y="26" width="232" height="116" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.2"/>
  <circle cx="112" cy="86" r="56" fill="#3b82f6" fill-opacity="0.12" stroke="#3b82f6" stroke-width="1.6"/>
  <circle cx="168" cy="86" r="56" fill="#6366f1" fill-opacity="0.12" stroke="#6366f1" stroke-width="1.6"/>
  <text x="72" y="44" font-size="12" font-weight="700" fill="#3b82f6">A</text>
  <text x="208" y="44" font-size="12" font-weight="700" fill="#6366f1">B</text>
  <text x="84" y="90" text-anchor="middle" font-size="9" fill="#1e293b">A only</text>
  <text x="140" y="90" text-anchor="middle" font-size="9" font-weight="700" fill="#0f172a">A∩B</text>
  <text x="196" y="90" text-anchor="middle" font-size="9" fill="#1e293b">B only</text>
  <text x="240" y="136" text-anchor="end" font-size="8.5" fill="#64748b">outside = A′ ∩ B′ (neither)</text>
</svg>`;
