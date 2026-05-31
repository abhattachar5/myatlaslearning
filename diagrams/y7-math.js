// diagrams/y7-lessons.js - Year 7 maths lesson diagrams, lifted from inline SVGs
// and recoloured to the shared palette. DIAGRAMS is declared in core/globals.js.

DIAGRAMS["y7-math-1-0"] = `<svg width="100%" height="80" viewBox="0 0 480 80" style="max-width:480px;display:block">
    <text x="10" y="18" font-size="12" fill="#555">Ten-thousands: 4 = 4 = 4 → tied, check thousands</text>
    <text x="10" y="36" font-size="12" fill="#555">Thousands: 5 = 5 &lt; 6 → <tspan font-weight="bold" fill="#16a34a">46,000 is largest</tspan></text>
    <text x="10" y="54" font-size="12" fill="#555">Hundreds of remaining: 3 &gt; 1 → <tspan font-weight="bold" fill="#16a34a">45,312 &gt; 45,132</tspan></text>
    <rect x="0" y="64" width="460" height="14" rx="3" fill="#dcfce7"/>
    <text x="10" y="75" font-size="12" fill="#16a34a" font-weight="bold">Final order: 45,132 &lt; 45,312 &lt; 46,000</text>
  </svg>`;
DIAGRAMS["y7-math-1-1"] = `<svg width="100%" height="60" viewBox="0 0 480 60" style="max-width:480px;display:block;margin:0.5em 0">
  <line x1="20" y1="30" x2="460" y2="30" stroke="#555" stroke-width="1.5"/>
  <polygon points="460,30 452,26 452,34" fill="#555"/>
  <g font-size="11" text-anchor="middle" fill="#1e293b">
    <line x1="60"  y1="25" x2="60"  y2="35" stroke="#555"/><text x="60"  y="48">−8</text>
    <line x1="120" y1="25" x2="120" y2="35" stroke="#555"/><text x="120" y="48">−5</text>
    <line x1="180" y1="25" x2="180" y2="35" stroke="#555"/><text x="180" y="48">−3</text>
    <line x1="240" y1="22" x2="240" y2="38" stroke="#16a34a" stroke-width="2"/><text x="240" y="48" font-weight="bold" fill="#16a34a">0</text>
    <line x1="300" y1="25" x2="300" y2="35" stroke="#555"/><text x="300" y="48">2</text>
    <line x1="360" y1="25" x2="360" y2="35" stroke="#555"/><text x="360" y="48">5</text>
    <line x1="420" y1="25" x2="420" y2="35" stroke="#555"/><text x="420" y="48">7</text>
  </g>
  <text x="20" y="18" font-size="10" fill="#dc2626">← smaller</text>
  <text x="390" y="18" font-size="10" fill="#16a34a">larger →</text>
</svg>`;
DIAGRAMS["y7-math-1-2"] = `<svg width="100%" height="110" viewBox="0 0 480 110" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="480" height="100" rx="8" fill="#f0fdf4"/>
  <text x="240" y="28" font-size="13" text-anchor="middle" font-weight="bold" fill="#1b5e20">The Two-Step Rule</text>
  <rect x="20" y="38" width="200" height="56" rx="6" fill="#bbf7d0"/>
  <text x="120" y="58" font-size="12" text-anchor="middle" fill="#1b5e20" font-weight="bold">Next digit is 0–4</text>
  <text x="120" y="76" font-size="11" text-anchor="middle" fill="#16a34a">→ Round DOWN</text>
  <text x="120" y="90" font-size="11" text-anchor="middle" fill="#16a34a">(keep digit the same)</text>
  <rect x="260" y="38" width="200" height="56" rx="6" fill="#fef08a"/>
  <text x="360" y="58" font-size="12" text-anchor="middle" fill="#f57f17" font-weight="bold">Next digit is 5–9</text>
  <text x="360" y="76" font-size="11" text-anchor="middle" fill="#b45309">→ Round UP</text>
  <text x="360" y="90" font-size="11" text-anchor="middle" fill="#b45309">(add 1 to digit)</text>
</svg>`;
DIAGRAMS["y7-math-1-3"] = `<svg width="100%" height="55" viewBox="0 0 400 55" style="max-width:400px;display:block">
    <text x="10"  y="22" font-size="20" font-family="monospace" fill="#1e293b">4</text>
    <text x="30"  y="22" font-size="20" font-family="monospace" fill="#1d4ed8" font-weight="bold">7</text>
    <text x="50"  y="22" font-size="20" font-family="monospace" fill="#dc2626">3</text>
    <text x="70"  y="22" font-size="20" font-family="monospace" fill="#999">8</text>
    <text x="90"  y="22" font-size="20" font-family="monospace" fill="#999">2</text>
    <rect x="25" y="26" width="18" height="3" rx="1" fill="#1d4ed8"/>
    <rect x="46" y="26" width="18" height="3" rx="1" fill="#dc2626"/>
    <text x="28"  y="44" font-size="9" fill="#1d4ed8">rounding here</text>
    <text x="48"  y="44" font-size="9" fill="#dc2626">decider: 3 &lt; 5</text>
    <text x="160" y="22" font-size="14" fill="#16a34a" font-weight="bold">→ Round down → 47,000</text>
  </svg>`;
DIAGRAMS["y7-math-1-4"] = `<svg width="100%" height="70" viewBox="0 0 480 70" style="max-width:480px;display:block">
    <text x="30"  y="24" font-size="18" font-family="monospace" font-weight="bold" fill="#1e293b">3,</text>
    <text x="56"  y="24" font-size="18" font-family="monospace" font-weight="bold" fill="#1d4ed8">405,</text>
    <text x="108" y="24" font-size="18" font-family="monospace" font-weight="bold" fill="#6366f1">072</text>
    <rect x="24"  y="30" width="28" height="3" rx="1" fill="#16a34a"/>
    <rect x="55"  y="30" width="50" height="3" rx="1" fill="#1d4ed8"/>
    <rect x="108" y="30" width="42" height="3" rx="1" fill="#6366f1"/>
    <text x="38"  y="50" font-size="10" text-anchor="middle" fill="#16a34a">millions</text>
    <text x="80"  y="50" font-size="10" text-anchor="middle" fill="#1d4ed8">thousands</text>
    <text x="130" y="50" font-size="10" text-anchor="middle" fill="#6366f1">units</text>
  </svg>`;
DIAGRAMS["y7-math-1-5"] = `<svg width="200" height="100" viewBox="0 0 200 100" style="display:block">
    <text x="20" y="22" font-family="monospace" font-size="18" fill="#1e293b">  4 7 8 6</text>
    <text x="20" y="44" font-family="monospace" font-size="18" fill="#1e293b">+ 2 5 3 9</text>
    <line x1="10" y1="50" x2="150" y2="50" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="70" font-family="monospace" font-size="18" fill="#16a34a" font-weight="bold">  7 3 2 5</text>
    <text x="160" y="70" font-size="10" fill="#888">carry: 1 1 1</text>
    <text x="10" y="90" font-size="10" fill="#555">6+9=15 → write 5, carry 1. Then 8+3+1=12 → write 2, carry 1…</text>
  </svg>`;
DIAGRAMS["y7-math-1-6"] = `<svg width="200" height="75" viewBox="0 0 200 75" style="display:block">
    <text x="20" y="22" font-family="monospace" font-size="18" fill="#1e293b">  6 0 0 3</text>
    <text x="20" y="44" font-family="monospace" font-size="18" fill="#1e293b">− 2 4 6 8</text>
    <line x1="10" y1="50" x2="150" y2="50" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="70" font-family="monospace" font-size="18" fill="#16a34a" font-weight="bold">  3 5 3 5</text>
  </svg>`;
DIAGRAMS["y7-math-1-7"] = `<svg width="100%" height="80" viewBox="0 0 480 80" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="0" width="480" height="80" rx="8" fill="#dcfce7"/>
  <text x="20"  y="30" font-size="14" fill="#1e293b">36 × <tspan font-weight="bold">10</tspan>  = </text>
  <text x="110" y="30" font-size="14" fill="#1d4ed8" font-weight="bold">360</text>
  <text x="20"  y="52" font-size="14" fill="#1e293b">36 × <tspan font-weight="bold">100</tspan> = </text>
  <text x="110" y="52" font-size="14" fill="#6366f1" font-weight="bold">3,600</text>
  <text x="20"  y="72" font-size="14" fill="#1e293b">36 × <tspan font-weight="bold">1000</tspan>= </text>
  <text x="110" y="72" font-size="14" fill="#dc2626" font-weight="bold">36,000</text>
  <text x="230" y="30" font-size="12" fill="#555">digits move 1 place left</text>
  <text x="230" y="52" font-size="12" fill="#555">digits move 2 places left</text>
  <text x="230" y="72" font-size="12" fill="#555">digits move 3 places left</text>
</svg>`;
DIAGRAMS["y7-math-1-8"] = `<svg width="200" height="110" viewBox="0 0 200 110" style="display:block">
    <text x="20" y="22" font-family="monospace" font-size="17" fill="#1e293b">   3 4 2</text>
    <text x="20" y="42" font-family="monospace" font-size="17" fill="#1e293b">×    2 6</text>
    <line x1="10" y1="48" x2="160" y2="48" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="66" font-family="monospace" font-size="17" fill="#1d4ed8"> 2 0 5 2</text>
    <text x="162" y="66" font-size="10" fill="#888">342 × 6</text>
    <text x="20" y="86" font-family="monospace" font-size="17" fill="#6366f1">6 8 4 0</text>
    <text x="162" y="86" font-size="10" fill="#888">342 × 20</text>
    <line x1="10" y1="92" x2="160" y2="92" stroke="#555" stroke-width="1.5"/>
    <text x="20" y="108" font-family="monospace" font-size="17" fill="#16a34a" font-weight="bold">8 8 9 2</text>
  </svg>`;
DIAGRAMS["y7-math-1-9"] = `<svg width="260" height="75" viewBox="0 0 260 75" style="display:block">
    <text x="20"  y="30" font-family="monospace" font-size="20" fill="#1e293b">4 </text>
    <line x1="36" y1="0"  x2="36"  y2="40" stroke="#555" stroke-width="1.5"/>
    <line x1="36" y1="10" x2="160" y2="10" stroke="#555" stroke-width="1.5"/>
    <text x="44"  y="30" font-family="monospace" font-size="20" fill="#1e293b">9 3 6</text>
    <text x="44"  y="55" font-family="monospace" font-size="20" fill="#16a34a" font-weight="bold">2 3 4</text>
    <text x="170" y="22" font-size="11" fill="#888">9÷4=2 r1</text>
    <text x="170" y="38" font-size="11" fill="#888">13÷4=3 r1</text>
    <text x="170" y="54" font-size="11" fill="#888">16÷4=4</text>
  </svg>`;
DIAGRAMS["y7-math-1-10"] = `<svg width="300" height="105" viewBox="0 0 300 105" style="display:block">
    <text x="10"  y="25" font-family="monospace" font-size="16" fill="#1e293b">12 </text>
    <line x1="38" y1="0"  x2="38"  y2="30" stroke="#555" stroke-width="1.5"/>
    <line x1="38" y1="8"  x2="170" y2="8"  stroke="#555" stroke-width="1.5"/>
    <text x="44"  y="25" font-family="monospace" font-size="16" fill="#1e293b">2 8 5 6</text>
    <text x="44"  y="45" font-family="monospace" font-size="16" fill="#16a34a" font-weight="bold">  2 3 8</text>
    <text x="180" y="25" font-size="11" fill="#1d4ed8">28÷12=2, 28−24=4</text>
    <text x="180" y="42" font-size="11" fill="#1d4ed8">bring down 5 → 45</text>
    <text x="180" y="59" font-size="11" fill="#1d4ed8">45÷12=3, 45−36=9</text>
    <text x="180" y="76" font-size="11" fill="#1d4ed8">bring down 6 → 96</text>
    <text x="180" y="93" font-size="11" fill="#1d4ed8">96÷12=8, remainder 0</text>
  </svg>`;
DIAGRAMS["y7-math-1-11"] = `<svg width="100%" height="130" viewBox="0 0 480 130" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="480" height="60" rx="8" fill="#dcfce7"/>
  <text x="30" y="48" font-size="38" font-family="serif" fill="#1d4ed8" font-weight="bold">2</text>
  <text x="62" y="28" font-size="18" font-family="serif" fill="#dc2626" font-weight="bold">5</text>
  <text x="88" y="48" font-size="18" fill="#1e293b">= 2 × 2 × 2 × 2 × 2 = 32</text>
  <!-- Base label: left zone, text-anchor start -->
  <line x1="42" y1="66" x2="42" y2="76" stroke="#555" stroke-width="1.2"/>
  <text x="10" y="89" font-size="11" text-anchor="start" font-weight="bold" fill="#1d4ed8">base</text>
  <text x="10" y="103" font-size="10" text-anchor="start" fill="#555">(the number being multiplied)</text>
  <!-- Index label: right zone starting at x=240, well clear of base label -->
  <line x1="66" y1="66" x2="66" y2="76" stroke="#dc2626" stroke-width="1.2"/>
  <line x1="66" y1="76" x2="238" y2="84" stroke="#dc2626" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="240" y="89" font-size="11" text-anchor="start" font-weight="bold" fill="#dc2626">index / exponent</text>
  <text x="240" y="103" font-size="10" text-anchor="start" fill="#dc2626">(how many times it is multiplied)</text>
</svg>`;
DIAGRAMS["y7-math-1-12"] = `<svg width="100%" height="65" viewBox="0 0 400 65" style="max-width:400px;display:block;margin-top:0.5em">
    <rect x="0" y="0" width="400" height="65" rx="6" fill="#dcfce7"/>
    <text x="10" y="20" font-size="13" fill="#1e293b">Step 1 — Indices:  3 + <tspan font-weight="bold" fill="#dc2626">2³</tspan> × 4 = 3 + <tspan font-weight="bold" fill="#dc2626">8</tspan> × 4</text>
    <text x="10" y="40" font-size="13" fill="#1e293b">Step 2 — Multiply: 3 + <tspan font-weight="bold" fill="#1d4ed8">8 × 4</tspan> = 3 + <tspan font-weight="bold" fill="#1d4ed8">32</tspan></text>
    <text x="10" y="58" font-size="13" fill="#16a34a" font-weight="bold">Step 3 — Add:     3 + 32 = 35</text>
  </svg>`;
DIAGRAMS["y7-math-1-13"] = `<svg width="100%" height="55" viewBox="0 0 480 55" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="480" height="45" rx="8" fill="#dbeafe"/>
  <text x="30"  y="33" font-size="15" fill="#1e293b">5² = 25</text>
  <text x="110" y="33" font-size="20" fill="#555">↔</text>
  <text x="140" y="33" font-size="15" fill="#1d4ed8" font-weight="bold">√25 = 5</text>
  <text x="240" y="33" font-size="13" fill="#666">They are inverses of each other</text>
</svg>`;
DIAGRAMS["y7-math-1-14"] = `<svg width="100%" height="100" viewBox="0 0 480 100" style="max-width:480px;display:block;margin:0.5em 0">
  <rect x="0"   y="20" width="90"  height="60" rx="8" fill="#dbeafe"/>
  <rect x="110" y="20" width="90"  height="60" rx="8" fill="#e0e7ff"/>
  <rect x="220" y="20" width="90"  height="60" rx="8" fill="#fef3c7"/>
  <rect x="330" y="20" width="140" height="60" rx="8" fill="#dcfce7"/>
  <text x="45"  y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">1. Brackets</text>
  <text x="45"  y="62" text-anchor="middle" font-size="11" fill="#1d4ed8">( ) first</text>
  <text x="155" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#6366f1">2. Indices</text>
  <text x="155" y="62" text-anchor="middle" font-size="11" fill="#6366f1">² ³ √ ∛</text>
  <text x="265" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">3. × and ÷</text>
  <text x="265" y="62" text-anchor="middle" font-size="11" fill="#b45309">left to right</text>
  <text x="400" y="45" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">4. + and −</text>
  <text x="400" y="62" text-anchor="middle" font-size="11" fill="#16a34a">left to right</text>
  <line x1="90"  y1="50" x2="110" y2="50" stroke="#999" stroke-width="1.5" marker-end="url(#arr)"/>
  <line x1="200" y1="50" x2="220" y2="50" stroke="#999" stroke-width="1.5"/>
  <line x1="310" y1="50" x2="330" y2="50" stroke="#999" stroke-width="1.5"/>
  <polygon points="108,46 116,50 108,54" fill="#999"/>
  <polygon points="218,46 226,50 218,54" fill="#999"/>
  <polygon points="328,46 336,50 328,54" fill="#999"/>
</svg>`;
DIAGRAMS["y7-math-1-15"] = `<svg width="220" height="130" viewBox="0 0 220 130" style="display:block;margin:0.5em auto">
    <text x="105" y="20" text-anchor="middle" font-size="18" font-weight="bold" fill="#1d4ed8">60</text>
    <line x1="105" y1="24" x2="60"  y2="50" stroke="#555" stroke-width="1.5"/>
    <line x1="105" y1="24" x2="155" y2="50" stroke="#555" stroke-width="1.5"/>
    <text x="55"  y="65" text-anchor="middle" font-size="16" fill="#1e293b">6</text>
    <text x="155" y="65" text-anchor="middle" font-size="16" fill="#1e293b">10</text>
    <line x1="55"  y1="68" x2="30"  y2="94" stroke="#555" stroke-width="1.5"/>
    <line x1="55"  y1="68" x2="80"  y2="94" stroke="#555" stroke-width="1.5"/>
    <line x1="155" y1="68" x2="130" y2="94" stroke="#555" stroke-width="1.5"/>
    <line x1="155" y1="68" x2="180" y2="94" stroke="#555" stroke-width="1.5"/>
    <circle cx="30"  cy="104" r="12" fill="#bbf7d0" stroke="#16a34a"/>
    <circle cx="80"  cy="104" r="12" fill="#bbf7d0" stroke="#16a34a"/>
    <circle cx="130" cy="104" r="12" fill="#bbf7d0" stroke="#16a34a"/>
    <circle cx="180" cy="104" r="12" fill="#bbf7d0" stroke="#16a34a"/>
    <text x="30"  y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">2</text>
    <text x="80"  y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">3</text>
    <text x="130" y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">2</text>
    <text x="180" y="108" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">5</text>
    <text x="110" y="128" text-anchor="middle" font-size="11" fill="#555">60 = 2 × 3 × 2 × 5 = 2² × 3 × 5</text>
  </svg>`;
DIAGRAMS["y7-math-1-16"] = `<svg width="160" height="150" viewBox="0 0 160 150" style="display:block;margin:0.5em 0">
    <text x="20" y="22"  font-family="monospace" font-size="15" fill="#dc2626">2</text>
    <text x="10" y="22" font-size="15" fill="#555">│</text>
    <text x="36" y="22" font-family="monospace" font-size="15" fill="#1e293b">72</text>
    <line x1="8" y1="26" x2="80" y2="26" stroke="#555"/>
    <text x="20" y="42"  font-family="monospace" font-size="15" fill="#dc2626">2</text>
    <text x="10" y="42" font-size="15" fill="#555">│</text>
    <text x="36" y="42" font-family="monospace" font-size="15" fill="#1e293b">36</text>
    <line x1="8" y1="46" x2="80" y2="46" stroke="#555"/>
    <text x="20" y="62"  font-family="monospace" font-size="15" fill="#dc2626">2</text>
    <text x="10" y="62" font-size="15" fill="#555">│</text>
    <text x="36" y="62" font-family="monospace" font-size="15" fill="#1e293b">18</text>
    <line x1="8" y1="66" x2="80" y2="66" stroke="#555"/>
    <text x="20" y="82"  font-family="monospace" font-size="15" fill="#6366f1">3</text>
    <text x="10" y="82" font-size="15" fill="#555">│</text>
    <text x="36" y="82" font-family="monospace" font-size="15" fill="#1e293b">9</text>
    <line x1="8" y1="86" x2="80" y2="86" stroke="#555"/>
    <text x="20" y="102"  font-family="monospace" font-size="15" fill="#6366f1">3</text>
    <text x="10" y="102" font-size="15" fill="#555">│</text>
    <text x="36" y="102" font-family="monospace" font-size="15" fill="#1e293b">3</text>
    <line x1="8" y1="106" x2="80" y2="106" stroke="#555"/>
    <text x="36" y="122" font-family="monospace" font-size="15" fill="#16a34a" font-weight="bold">1</text>
    <text x="10" y="140" font-size="12" fill="#555">72 = 2³ × 3²</text>
  </svg>`;
DIAGRAMS["y7-math-1-17"] = `<svg width="320" height="110" viewBox="0 0 320 110" style="max-width:320px;display:block;margin:0.5em auto">
    <ellipse cx="110" cy="55" rx="100" ry="45" fill="#bfdbfe" fill-opacity="0.5" stroke="#1d4ed8" stroke-width="1.5"/>
    <ellipse cx="200" cy="55" rx="100" ry="45" fill="#bbf7d0" fill-opacity="0.5" stroke="#16a34a" stroke-width="1.5"/>
    <text x="65"  y="50" text-anchor="middle" font-size="13" fill="#1d4ed8" font-weight="bold">2²</text>
    <text x="65"  y="68" text-anchor="middle" font-size="12" fill="#1d4ed8">(only 36)</text>
    <text x="155" y="44" text-anchor="middle" font-size="13" fill="#555" font-weight="bold">2²</text>
    <text x="155" y="60" text-anchor="middle" font-size="13" fill="#555" font-weight="bold">3</text>
    <text x="155" y="76" text-anchor="middle" font-size="10" fill="#777">shared</text>
    <text x="248" y="50" text-anchor="middle" font-size="13" fill="#16a34a" font-weight="bold">3</text>
    <text x="248" y="68" text-anchor="middle" font-size="12" fill="#16a34a">(only 48)</text>
    <text x="55"  y="108" font-size="11" fill="#1d4ed8">36</text>
    <text x="265" y="108" font-size="11" fill="#16a34a">48</text>
  </svg>`;
DIAGRAMS["y7-math-1-18"] = `<svg width="320" height="110" viewBox="0 0 320 110" style="max-width:320px;display:block;margin:0.5em auto">
    <ellipse cx="110" cy="55" rx="100" ry="45" fill="#bfdbfe" fill-opacity="0.5" stroke="#1d4ed8" stroke-width="1.5"/>
    <ellipse cx="200" cy="55" rx="100" ry="45" fill="#bbf7d0" fill-opacity="0.5" stroke="#16a34a" stroke-width="1.5"/>
    <text x="65"  y="50" text-anchor="middle" font-size="13" fill="#1d4ed8" font-weight="bold">2²</text>
    <text x="65"  y="68" text-anchor="middle" font-size="11" fill="#1d4ed8">highest power of 2</text>
    <text x="155" y="52" text-anchor="middle" font-size="12" fill="#555">2, 3</text>
    <text x="155" y="66" text-anchor="middle" font-size="10" fill="#777">shared</text>
    <text x="248" y="50" text-anchor="middle" font-size="13" fill="#16a34a" font-weight="bold">3²</text>
    <text x="248" y="68" text-anchor="middle" font-size="11" fill="#16a34a">highest power of 3</text>
    <text x="55"  y="108" font-size="11" fill="#1d4ed8">12</text>
    <text x="265" y="108" font-size="11" fill="#16a34a">18</text>
  </svg>`;
DIAGRAMS["y7-math-2-0"] = `<svg width="100%" height="40" viewBox="0 0 380 40" style="max-width:380px;display:block">
    <rect x="0" y="10" width="380" height="20" rx="4" fill="#dcfce7"/>
    <text x="10" y="25" font-size="13" fill="#16a34a" font-weight="bold">0.409 &lt; 0.45 &lt; 0.5</text>
  </svg>`;
DIAGRAMS["y7-math-2-1"] = `<svg width="100%" height="80" viewBox="0 0 420 80" style="max-width:420px;display:block;margin:0.75em 0">
  <rect x="0" y="5" width="200" height="70" rx="8" fill="#dcfce7"/>
  <rect x="210" y="5" width="200" height="70" rx="8" fill="#fef08a"/>
  <text x="100" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">Decider is 0–4</text>
  <text x="100" y="48" text-anchor="middle" font-size="12" fill="#16a34a">→ Round DOWN</text>
  <text x="100" y="65" text-anchor="middle" font-size="11" fill="#555">(keep target digit)</text>
  <text x="310" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">Decider is 5–9</text>
  <text x="310" y="48" text-anchor="middle" font-size="12" fill="#b45309">→ Round UP</text>
  <text x="310" y="65" text-anchor="middle" font-size="11" fill="#555">(add 1 to target digit)</text>
</svg>`;
DIAGRAMS["y7-math-2-2"] = `<svg width="220" height="75" viewBox="0 0 220 75" style="display:block">
    <text x="10" y="22" font-family="monospace" font-size="17" fill="#1e293b">  1 2 . 3 4 0</text>
    <text x="10" y="42" font-family="monospace" font-size="17" fill="#1e293b">+  4 . 8 7 6</text>
    <line x1="5" y1="48" x2="175" y2="48" stroke="#555" stroke-width="1.5"/>
    <text x="10" y="68" font-family="monospace" font-size="17" fill="#16a34a" font-weight="bold">  1 7 . 2 1 6</text>
  </svg>`;
DIAGRAMS["y7-math-2-3"] = `<svg width="200" height="75" viewBox="0 0 200 75" style="display:block">
    <text x="10" y="22" font-family="monospace" font-size="17" fill="#1e293b">  8 . 3 0 0</text>
    <text x="10" y="42" font-family="monospace" font-size="17" fill="#1e293b">− 2 . 4 7 6</text>
    <line x1="5" y1="48" x2="160" y2="48" stroke="#555" stroke-width="1.5"/>
    <text x="10" y="68" font-family="monospace" font-size="17" fill="#16a34a" font-weight="bold">  5 . 8 2 4</text>
  </svg>`;
DIAGRAMS["y7-math-2-4"] = `<svg width="100%" height="75" viewBox="0 0 380 75" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="10"  y="10" width="55" height="35" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <rect x="75"  y="10" width="55" height="35" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <rect x="140" y="10" width="55" height="35" rx="5" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5"/>
  <rect x="205" y="10" width="55" height="35" rx="5" fill="#eee" stroke="#aaa" stroke-width="1.5"/>
  <rect x="270" y="10" width="55" height="35" rx="5" fill="#eee" stroke="#aaa" stroke-width="1.5"/>
  <text x="37"  y="32" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">✓</text>
  <text x="102" y="32" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">✓</text>
  <text x="167" y="32" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">✓</text>
  <text x="10" y="65" font-size="11" fill="#555">³⁄₅ — 3 of the 5 equal parts are shaded</text>
</svg>`;
DIAGRAMS["y7-math-2-5"] = `<svg width="100%" height="45" viewBox="0 0 400 45" style="max-width:400px;display:block">
    <text x="10"  y="25" font-size="14" fill="#1e293b" font-weight="bold">²⁄₃</text>
    <text x="40"  y="25" font-size="14" fill="#555">=</text>
    <text x="55"  y="25" font-size="14" fill="#1d4ed8" font-weight="bold">⁴⁄₆</text>
    <text x="85"  y="25" font-size="14" fill="#555">=</text>
    <text x="100" y="25" font-size="14" fill="#6366f1" font-weight="bold">⁶⁄₉</text>
    <text x="130" y="25" font-size="14" fill="#555">=</text>
    <text x="145" y="25" font-size="14" fill="#dc2626" font-weight="bold">¹⁰⁄₁₅</text>
    <text x="190" y="25" font-size="12" fill="#555">all equal the same value</text>
    <text x="55"  y="42" font-size="9"  fill="#1d4ed8">×2</text>
    <text x="100" y="42" font-size="9"  fill="#6366f1">×3</text>
    <text x="145" y="42" font-size="9"  fill="#dc2626">×5</text>
  </svg>`;
DIAGRAMS["y7-math-2-6"] = `<svg width="100%" height="50" viewBox="0 0 380 50" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="0" y="5" width="380" height="40" rx="8" fill="#dcfce7"/>
  <text x="20" y="32" font-size="16" fill="#1e293b">3 × 2/5 = (3×2)/5 = 6/5 = </text>
  <text x="265" y="32" font-size="16" font-weight="bold" fill="#16a34a">1 1/5</text>
</svg>`;
DIAGRAMS["y7-math-2-7"] = `<svg width="100%" height="40" viewBox="0 0 380 40" style="max-width:380px;display:block">
    <text x="10" y="28" font-size="16" fill="#1e293b">2/3 × 4/5 = (2×4)/(3×5) = 8/15</text>
  </svg>`;
DIAGRAMS["y7-math-2-8"] = `<svg width="100%" height="65" viewBox="0 0 380 65" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="0"   y="5" width="110" height="55" rx="8" fill="#dcfce7"/>
  <rect x="130" y="5" width="110" height="55" rx="8" fill="#fef08a"/>
  <rect x="260" y="5" width="110" height="55" rx="8" fill="#dbeafe"/>
  <text x="55"  y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">1. KEEP</text>
  <text x="55"  y="48" text-anchor="middle" font-size="11" fill="#16a34a">first fraction</text>
  <text x="185" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">2. CHANGE</text>
  <text x="185" y="48" text-anchor="middle" font-size="11" fill="#b45309">÷ becomes ×</text>
  <text x="315" y="28" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">3. FLIP</text>
  <text x="315" y="48" text-anchor="middle" font-size="11" fill="#1d4ed8">second fraction</text>
</svg>`;
DIAGRAMS["y7-math-2-9"] = `<svg width="100%" height="60" viewBox="0 0 480 60" style="max-width:480px;display:block;margin:0.75em 0">
  <line x1="20" y1="30" x2="460" y2="30" stroke="#555" stroke-width="1.5"/>
  <polygon points="460,30 452,26 452,34" fill="#555"/>
  <polygon points="20,30 28,26 28,34" fill="#555"/>
  <g font-size="12" text-anchor="middle" fill="#1e293b">
    <line x1="60"  y1="25" x2="60"  y2="35" stroke="#555"/><text x="60"  y="50">−5</text>
    <line x1="110" y1="25" x2="110" y2="35" stroke="#555"/><text x="110" y="50">−4</text>
    <line x1="160" y1="25" x2="160" y2="35" stroke="#555"/><text x="160" y="50">−3</text>
    <line x1="210" y1="25" x2="210" y2="35" stroke="#555"/><text x="210" y="50">−2</text>
    <line x1="260" y1="25" x2="260" y2="35" stroke="#555"/><text x="260" y="50">−1</text>
    <line x1="310" y1="22" x2="310" y2="38" stroke="#16a34a" stroke-width="2"/>
    <text x="310" y="50" font-weight="bold" fill="#16a34a">0</text>
    <line x1="360" y1="25" x2="360" y2="35" stroke="#555"/><text x="360" y="50">1</text>
    <line x1="410" y1="25" x2="410" y2="35" stroke="#555"/><text x="410" y="50">2</text>
  </g>
  <text x="30"  y="18" font-size="10" fill="#dc2626">← smaller</text>
  <text x="400" y="18" font-size="10" fill="#16a34a">larger →</text>
</svg>`;
DIAGRAMS["y7-math-2-10"] = `<svg width="100%" height="55" viewBox="0 0 380 55" style="max-width:380px;display:block;margin:0.5em 0">
  <rect x="0" y="8" width="380" height="40" rx="8" fill="#fef08a"/>
  <text x="20" y="28" font-size="13" fill="#1e293b"><tspan font-weight="bold">− −</tspan> = +</text>
  <text x="80" y="28" font-size="13" fill="#555">Two negatives combine to make a positive.</text>
  <text x="20" y="44" font-size="11" fill="#b45309">Subtracting a negative is the same as adding its positive value.</text>
</svg>`;
DIAGRAMS["y7-math-3-0"] = `<svg width="100%" height="40" viewBox="0 0 380 40" style="max-width:380px;display:block;margin-bottom:0.5em">
    <text x="10"  y="26" font-size="16" fill="#1e293b" font-weight="bold">12 : 18</text>
    <text x="100" y="26" font-size="14" fill="#555">HCF = 6</text>
    <text x="185" y="26" font-size="14" fill="#555">÷6 each part</text>
    <text x="310" y="26" font-size="16" fill="#16a34a" font-weight="bold">2 : 3</text>
  </svg>`;
DIAGRAMS["y7-math-3-1"] = `<svg width="100%" height="40" viewBox="0 0 420 40" style="max-width:420px;display:block">
    <text x="10"  y="26" font-size="14" fill="#1e293b" font-weight="bold">3:5</text>
    <text x="50"  y="26" font-size="12" fill="#555">=</text>
    <text x="65"  y="26" font-size="14" fill="#1d4ed8">6:10</text>
    <text x="120" y="26" font-size="12" fill="#555">=</text>
    <text x="135" y="26" font-size="14" fill="#6366f1">15:25</text>
    <text x="200" y="26" font-size="12" fill="#555">=</text>
    <text x="215" y="26" font-size="14" fill="#dc2626">30:50</text>
    <text x="290" y="26" font-size="11" fill="#555">all equivalent</text>
  </svg>`;
DIAGRAMS["y7-math-3-2"] = `<svg width="100%" height="160" viewBox="0 0 300 160" style="max-width:300px;display:block;margin:0.75em auto">
  <polygon points="150,10 10,120 290,120" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <line x1="150" y1="10" x2="150" y2="120" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="150" y="55" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">D</text>
  <text x="80"  y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">S</text>
  <text x="218" y="110" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">T</text>
  <text x="10"  y="145" font-size="10" fill="#555">S = D ÷ T</text>
  <text x="100" y="145" font-size="10" fill="#555">D = S × T</text>
  <text x="200" y="145" font-size="10" fill="#555">T = D ÷ S</text>
</svg>`;
DIAGRAMS["y7-math-3-3"] = `<svg width="100%" height="75" viewBox="0 0 350 75" style="max-width:350px;display:block;margin:0.5em 0">
    <rect x="0" y="5" width="350" height="65" rx="6" fill="#dcfce7"/>
    <text x="10" y="25" font-size="12" fill="#1e293b">10% = £260 ÷ 10 = £26</text>
    <text x="10" y="43" font-size="12" fill="#1e293b">30% = 3 × £26 = £78</text>
    <text x="10" y="61" font-size="12" fill="#1e293b">5% = £26 ÷ 2 = £13 &nbsp;→&nbsp; 35% = £78 + £13 = <tspan font-weight="bold">£91</tspan></text>
  </svg>`;
DIAGRAMS["y7-math-3-4"] = `<svg width="100%" height="105" viewBox="0 0 340 105" style="max-width:340px;display:block;margin:0.75em 0">
  <text x="100" y="36" font-size="26" font-family="serif" fill="#1e293b">5</text>
  <text x="130" y="36" font-size="26" font-family="serif" fill="#1d4ed8" font-weight="bold">x</text>
  <text x="163" y="36" font-size="26" font-family="serif" fill="#1e293b">+</text>
  <text x="196" y="36" font-size="26" font-family="serif" fill="#dc2626">7</text>
  <line x1="107" y1="48" x2="72" y2="68" stroke="#555" stroke-width="1"/>
  <text x="72" y="84" font-size="10" text-anchor="middle" fill="#555">coefficient</text>
  <line x1="137" y1="48" x2="162" y2="68" stroke="#1d4ed8" stroke-width="1"/>
  <text x="162" y="84" font-size="10" text-anchor="middle" fill="#1d4ed8">variable</text>
  <line x1="203" y1="48" x2="258" y2="68" stroke="#dc2626" stroke-width="1"/>
  <text x="258" y="84" font-size="10" text-anchor="middle" fill="#dc2626">constant</text>
</svg>`;
DIAGRAMS["y7-math-3-5"] = `<svg width="100%" height="55" viewBox="0 0 380 55" style="max-width:380px;display:block;margin-bottom:0.5em">
    <text x="10" y="28" font-size="18" fill="#dc2626" font-weight="bold">3</text>
    <text x="26" y="28" font-size="18" fill="#1e293b">(</text>
    <text x="36" y="28" font-size="18" fill="#1d4ed8" font-weight="bold">2x</text>
    <text x="62" y="28" font-size="18" fill="#1e293b">−</text>
    <text x="76" y="28" font-size="18" fill="#6366f1" font-weight="bold">5</text>
    <text x="90" y="28" font-size="18" fill="#1e293b">)</text>
    <path d="M22,32 Q40,50 48,32" stroke="#dc2626" stroke-width="1.5" fill="none"/>
    <path d="M22,32 Q65,50 78,32" stroke="#dc2626" stroke-width="1.5" fill="none"/>
    <text x="115" y="28" font-size="16" fill="#555">= 3×2x − 3×5 = </text>
    <text x="270" y="28" font-size="18" fill="#16a34a" font-weight="bold">6x − 15</text>
  </svg>`;
DIAGRAMS["y7-math-3-6"] = `<svg width="100%" height="80" viewBox="0 0 350 80" style="max-width:350px;display:block;margin:0.75em auto">
  <line x1="175" y1="15" x2="175" y2="55" stroke="#555" stroke-width="2"/>
  <line x1="60"  y1="55" x2="290" y2="55" stroke="#555" stroke-width="2"/>
  <line x1="60"  y1="55" x2="60"  y2="70" stroke="#555" stroke-width="2"/>
  <line x1="290" y1="55" x2="290" y2="70" stroke="#555" stroke-width="2"/>
  <rect x="20"  y="38" width="80" height="20" rx="4" fill="#dbeafe"/>
  <rect x="250" y="38" width="80" height="20" rx="4" fill="#dcfce7"/>
  <text x="60"  y="52" text-anchor="middle" font-size="13" fill="#1d4ed8" font-weight="bold">x + 7</text>
  <text x="290" y="52" text-anchor="middle" font-size="13" fill="#16a34a" font-weight="bold">15</text>
  <text x="175" y="75" text-anchor="middle" font-size="10" fill="#555">balanced — must keep both sides equal</text>
</svg>`;
DIAGRAMS["y7-math-3-7"] = `<svg width="100%" height="140" viewBox="0 0 280 140" style="max-width:280px;display:block;margin:0.75em auto">
  <line x1="30" y1="10" x2="30"  y2="115" stroke="#555" stroke-width="1.5"/>
  <line x1="30" y1="115" x2="270" y2="115" stroke="#555" stroke-width="1.5"/>
  <rect x="45"  y="45"  width="40" height="70" fill="#93c5fd"/>
  <rect x="100" y="65"  width="40" height="50" fill="#86efac"/>
  <rect x="155" y="30"  width="40" height="85" fill="#ef9a9a"/>
  <rect x="210" y="55"  width="40" height="60" fill="#fff176"/>
  <text x="65"  y="128" text-anchor="middle" font-size="9" fill="#555">Maths</text>
  <text x="120" y="128" text-anchor="middle" font-size="9" fill="#555">English</text>
  <text x="175" y="128" text-anchor="middle" font-size="9" fill="#555">Science</text>
  <text x="230" y="128" text-anchor="middle" font-size="9" fill="#555">Art</text>
  <text x="22" y="118" font-size="8" fill="#555">0</text>
  <text x="18" y="88"  font-size="8" fill="#555">10</text>
  <text x="18" y="58"  font-size="8" fill="#555">20</text>
  <text x="18" y="28"  font-size="8" fill="#555">30</text>
</svg>`;
DIAGRAMS["y7-math-3-8"] = `<svg width="100%" height="50" viewBox="0 0 440 50" style="max-width:440px;display:block;margin:0.75em 0">
  <line x1="55" y1="24" x2="385" y2="24" stroke="#555" stroke-width="2"/>
  <circle cx="55"  cy="24" r="5" fill="#dc2626"/>
  <circle cx="220" cy="24" r="5" fill="#b45309"/>
  <circle cx="385" cy="24" r="5" fill="#16a34a"/>
  <text x="55"  y="15" text-anchor="middle" font-size="11" fill="#dc2626">0</text>
  <text x="220" y="15" text-anchor="middle" font-size="11" fill="#b45309">0.5</text>
  <text x="385" y="15" text-anchor="middle" font-size="11" fill="#16a34a">1</text>
  <text x="55"  y="42" text-anchor="middle" font-size="10" fill="#dc2626">Impossible</text>
  <text x="220" y="42" text-anchor="middle" font-size="10" fill="#b45309">Even chance</text>
  <text x="385" y="42" text-anchor="middle" font-size="10" fill="#16a34a">Certain</text>
</svg>`;
DIAGRAMS["y7-math-3-9"] = `<svg width="100%" height="120" viewBox="0 0 480 120" style="max-width:480px;display:block;margin:0.75em 0">
  <rect x="0" y="0" width="150" height="115" rx="8" fill="#dcfce7"/>
  <rect x="165" y="0" width="150" height="115" rx="8" fill="#fce7f3"/>
  <rect x="330" y="0" width="150" height="115" rx="8" fill="#dbeafe"/>
  <text x="75" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Positive correlation</text>
  <circle cx="20" cy="95" r="3" fill="#16a34a"/><circle cx="35" cy="85" r="3" fill="#16a34a"/>
  <circle cx="55" cy="70" r="3" fill="#16a34a"/><circle cx="75" cy="60" r="3" fill="#16a34a"/>
  <circle cx="95" cy="45" r="3" fill="#16a34a"/><circle cx="115" cy="35" r="3" fill="#16a34a"/>
  <circle cx="130" cy="30" r="3" fill="#16a34a"/>
  <text x="75" y="112" text-anchor="middle" font-size="9" fill="#555">As x increases, y increases</text>
  <text x="240" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Negative correlation</text>
  <circle cx="185" cy="35" r="3" fill="#dc2626"/><circle cx="200" cy="40" r="3" fill="#dc2626"/>
  <circle cx="215" cy="55" r="3" fill="#dc2626"/><circle cx="235" cy="65" r="3" fill="#dc2626"/>
  <circle cx="255" cy="75" r="3" fill="#dc2626"/><circle cx="275" cy="85" r="3" fill="#dc2626"/>
  <circle cx="290" cy="95" r="3" fill="#dc2626"/>
  <text x="240" y="112" text-anchor="middle" font-size="9" fill="#555">As x increases, y decreases</text>
  <text x="405" y="18" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">No correlation</text>
  <circle cx="350" cy="50" r="3" fill="#1d4ed8"/><circle cx="370" cy="85" r="3" fill="#1d4ed8"/>
  <circle cx="390" cy="40" r="3" fill="#1d4ed8"/><circle cx="410" cy="70" r="3" fill="#1d4ed8"/>
  <circle cx="430" cy="35" r="3" fill="#1d4ed8"/><circle cx="450" cy="90" r="3" fill="#1d4ed8"/>
  <circle cx="460" cy="55" r="3" fill="#1d4ed8"/>
  <text x="405" y="112" text-anchor="middle" font-size="9" fill="#555">No clear pattern</text>
</svg>`;
DIAGRAMS["y7-math-3-10"] = `<svg width="100%" height="160" viewBox="0 0 340 160" style="max-width:340px;display:block;margin:0.75em 0">
  <rect x="0" y="0" width="340" height="160" rx="8" fill="#f5f5f5" stroke="#999"/>
  <text x="320" y="15" text-anchor="end" font-size="11" fill="#555">ξ</text>
  <circle cx="120" cy="85" r="60" fill="rgba(33,150,243,0.2)" stroke="#1d4ed8" stroke-width="1.5"/>
  <circle cx="210" cy="85" r="60" fill="rgba(76,175,80,0.2)" stroke="#16a34a" stroke-width="1.5"/>
  <text x="90" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">A</text>
  <text x="240" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">B</text>
  <text x="85" y="90" text-anchor="middle" font-size="13" fill="#1d4ed8">A only</text>
  <text x="165" y="90" text-anchor="middle" font-size="13" fill="#6366f1">A ∩ B</text>
  <text x="245" y="90" text-anchor="middle" font-size="13" fill="#16a34a">B only</text>
  <text x="305" y="145" text-anchor="middle" font-size="11" fill="#555">Neither</text>
</svg>`;
DIAGRAMS["y7-math-4-0"] = `<svg width="100%" height="70" viewBox="0 0 420 70" style="max-width:420px;display:block;margin:0.75em 0"><rect x="0"   y="5" width="55" height="60" rx="6" fill="#dbeafe"/><rect x="65"  y="5" width="55" height="60" rx="6" fill="#dcfce7"/><rect x="130" y="5" width="115" height="60" rx="6" fill="#fef3c7"/><rect x="255" y="5" width="155" height="60" rx="6" fill="#e0e7ff"/><text x="27"  y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">B</text><text x="27"  y="52" text-anchor="middle" font-size="9"  fill="#1d4ed8">Brackets</text><text x="92"  y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">I</text><text x="92"  y="52" text-anchor="middle" font-size="9"  fill="#16a34a">Indices</text><text x="187" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#b45309">D M</text><text x="187" y="52" text-anchor="middle" font-size="9"  fill="#b45309">Divide &amp; Multiply</text><text x="332" y="32" text-anchor="middle" font-size="14" font-weight="bold" fill="#6366f1">A S</text><text x="332" y="52" text-anchor="middle" font-size="9"  fill="#6366f1">Add &amp; Subtract</text></svg>`;
DIAGRAMS["y7-math-4-1"] = `<svg width="100%" height="90" viewBox="0 0 380 90" style="max-width:380px;display:block;margin:0.75em 0"><rect x="0" y="5" width="380" height="80" rx="8" fill="#dcfce7"/><text x="190" y="24" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Rational Numbers</text><rect x="10" y="30" width="80" height="42" rx="5" fill="#bbf7d0"/><rect x="100" y="30" width="80" height="42" rx="5" fill="#bbf7d0"/><rect x="190" y="30" width="80" height="42" rx="5" fill="#bbf7d0"/><rect x="280" y="30" width="90" height="42" rx="5" fill="#bbf7d0"/><text x="50" y="54" text-anchor="middle" font-size="10" fill="#16a34a">Whole numbers</text><text x="140" y="54" text-anchor="middle" font-size="10" fill="#16a34a">Fractions</text><text x="230" y="48" text-anchor="middle" font-size="10" fill="#16a34a">Terminating</text><text x="230" y="61" text-anchor="middle" font-size="10" fill="#16a34a">decimals</text><text x="325" y="48" text-anchor="middle" font-size="10" fill="#16a34a">Recurring</text><text x="325" y="61" text-anchor="middle" font-size="10" fill="#16a34a">decimals</text></svg>`;
DIAGRAMS["y7-math-4-2"] = `<svg width="100%" height="50" viewBox="0 0 300 50" style="max-width:300px;display:block;margin:0.5em 0"><line x1="20" y1="25" x2="280" y2="25" stroke="#555" stroke-width="1.5"/><line x1="20"  y1="20" x2="20"  y2="30" stroke="#555"/><text x="20"  y="42" text-anchor="middle" font-size="11">−1</text><line x1="150" y1="20" x2="150" y2="30" stroke="#555"/><text x="150" y="42" text-anchor="middle" font-size="11">0</text><line x1="280" y1="20" x2="280" y2="30" stroke="#555"/><text x="280" y="42" text-anchor="middle" font-size="11">1</text><circle cx="85" cy="25" r="5" fill="#dc2626"/><text x="85" y="14" text-anchor="middle" font-size="10" fill="#dc2626">−¾</text></svg>`;
DIAGRAMS["y7-math-4-3"] = `<svg width="100%" height="80" viewBox="0 0 420 80" style="max-width:420px;display:block;margin:0.75em 0"><rect x="0"   y="10" width="70" height="60" rx="6" fill="#dbeafe"/><rect x="90"  y="10" width="70" height="60" rx="6" fill="#dcfce7"/><rect x="180" y="10" width="70" height="60" rx="6" fill="#fef3c7"/><rect x="270" y="10" width="70" height="60" rx="6" fill="#e0e7ff"/><rect x="360" y="10" width="55" height="60" rx="6" fill="#cffafe"/><text x="35"  y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">1. Read</text><text x="35"  y="54" text-anchor="middle" font-size="9"  fill="#1d4ed8">Twice if needed</text><text x="125" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">2. Identify</text><text x="125" y="54" text-anchor="middle" font-size="9"  fill="#16a34a">Key info</text><text x="215" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">3. Choose</text><text x="215" y="54" text-anchor="middle" font-size="9"  fill="#b45309">Operations</text><text x="305" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">4. Calculate</text><text x="305" y="54" text-anchor="middle" font-size="9"  fill="#6366f1">Step by step</text><text x="387" y="38" text-anchor="middle" font-size="11" font-weight="bold" fill="#0e7490">5. Check</text><text x="387" y="54" text-anchor="middle" font-size="9"  fill="#0e7490">Makes sense?</text></svg>`;
DIAGRAMS["y7-math-4-4"] = `<svg width="100%" height="55" viewBox="0 0 380 55" style="max-width:380px;display:block;margin:0.5em 0"><rect x="0"   y="10" width="55" height="30" rx="5" fill="#dbeafe"/><text x="27"  y="29" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">n</text><text x="65"  y="29" font-size="11" fill="#555">×2</text><rect x="90"  y="10" width="55" height="30" rx="5" fill="#dcfce7"/><text x="117" y="29" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">2n</text><text x="155" y="29" font-size="11" fill="#555">+6</text><rect x="180" y="10" width="80" height="30" rx="5" fill="#fef3c7"/><text x="220" y="29" text-anchor="middle" font-size="12" fill="#b45309" font-weight="bold">2n+6 = 18</text><text x="290" y="17" font-size="10" fill="#dc2626">−6</text><text x="290" y="32" font-size="10" fill="#dc2626">→ 2n = 12</text><text x="290" y="47" font-size="10" fill="#dc2626">→ n = 6</text></svg>`;
DIAGRAMS["y7-math-5-0"] = `<svg width="100%" height="60" viewBox="0 0 420 60" style="max-width:420px;display:block;margin:0.75em 0"><rect x="0" y="8" width="420" height="44" rx="8" fill="#dcfce7"/><text x="20" y="28" font-size="13" fill="#1e293b">£</text><text x="32" y="28" font-size="20" font-family="monospace" font-weight="bold" fill="#1d4ed8">4</text><text x="50" y="28" font-size="20" font-family="monospace" font-weight="bold" fill="#1d4ed8">.</text><text x="62" y="28" font-size="20" font-family="monospace" font-weight="bold" fill="#dc2626">0</text><text x="78" y="28" font-size="20" font-family="monospace" font-weight="bold" fill="#dc2626">7</text><text x="105" y="28" font-size="13" fill="#555">← always 2 decimal places</text><text x="41" y="50" font-size="10" text-anchor="middle" fill="#1d4ed8">pounds</text><text x="78" y="50" font-size="10" text-anchor="middle" fill="#dc2626">pence</text></svg>`;
DIAGRAMS["y7-math-5-1"] = `<svg width="100%" height="70" viewBox="0 0 380 70" style="max-width:380px;display:block;margin:0.5em 0"><rect x="0" y="5" width="110" height="55" rx="6" fill="#dbeafe"/><text x="55" y="26" text-anchor="middle" font-size="12" fill="#1d4ed8">Lunch + Drink</text><text x="55" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">£4.70</text><text x="130" y="36" font-size="18" fill="#555">→</text><rect x="150" y="5" width="100" height="55" rx="6" fill="#dcfce7"/><text x="200" y="26" text-anchor="middle" font-size="12" fill="#16a34a">£6.00 − £4.70</text><text x="200" y="44" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">= £1.30 left</text></svg>`;
DIAGRAMS["y7-math-5-2"] = `<svg width="100%" height="50" viewBox="0 0 380 50" style="max-width:380px;display:block;margin:0.5em 0"><rect x="0" y="10" width="380" height="30" rx="6" fill="#eee"/><rect x="0" y="10" width="304" height="30" rx="6" fill="#bbf7d0"/><text x="152" y="30" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">Sale price 80% → £64</text><rect x="304" y="10" width="76" height="30" fill="#ef9a9a" rx="0" style="border-radius:0 6px 6px 0"/><text x="342" y="30" text-anchor="middle" font-size="11" fill="#dc2626">20% off</text></svg>`;
DIAGRAMS["y7-math-5-3"] = `<svg width="100%" height="55" viewBox="0 0 380 55" style="max-width:380px;display:block;margin:0.5em 0"><rect x="0" y="10" width="380" height="35" rx="6" fill="#eee"/><rect x="0" y="10" width="342" height="35" rx="6" fill="#bbf7d0"/><text x="175" y="32" text-anchor="middle" font-size="12" fill="#16a34a">£36 is 90% of original price (£40)</text><rect x="342" y="10" width="38" height="35" fill="#ef9a9a" style="border-radius:0 6px 6px 0"/><text x="361" y="32" text-anchor="middle" font-size="11" fill="#dc2626">10%</text><text x="0"  y="52" font-size="10" fill="#555">0%</text><text x="365" y="52" font-size="10" fill="#555">100% = £40</text></svg>`;
DIAGRAMS["y7-math-5-4"] = `<svg width="100%" height="70" viewBox="0 0 360 70" style="max-width:360px;display:block;margin:0.5em 0"><rect x="0" y="10" width="300" height="35" rx="0" fill="#bbf7d0" style="border-radius:6px 0 0 6px"/><text x="150" y="32" text-anchor="middle" font-size="12" fill="#16a34a">Pre-VAT price: £50 (100%)</text><rect x="300" y="10" width="60" height="35" fill="#fef08a" style="border-radius:0 6px 6px 0"/><text x="330" y="32" text-anchor="middle" font-size="11" fill="#f57f17">+£10 VAT</text><text x="0" y="60" font-size="10" fill="#555">Total: £60</text></svg>`;
DIAGRAMS["y7-math-5-5"] = `<svg width="100%" height="65" viewBox="0 0 400 65" style="max-width:400px;display:block;margin:0.5em 0"><line x1="20" y1="30" x2="380" y2="30" stroke="#555" stroke-width="2"/><circle cx="20"  cy="30" r="5" fill="#1d4ed8"/><circle cx="200" cy="30" r="5" fill="#6366f1"/><circle cx="380" cy="30" r="5" fill="#16a34a"/><text x="20"  y="20" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">10:45</text><text x="200" y="20" text-anchor="middle" font-size="12" fill="#6366f1" font-weight="bold">13:00</text><text x="380" y="20" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">13:20</text><text x="110" y="50" text-anchor="middle" font-size="11" fill="#6366f1">2h 15min</text><text x="290" y="50" text-anchor="middle" font-size="11" fill="#16a34a">20min</text></svg>`;
DIAGRAMS["y7-math-5-6"] = `<svg width="100%" height="80" viewBox="0 0 400 80" style="max-width:400px;display:block;margin:0.75em 0"><rect x="0"   y="5" width="190" height="65" rx="8" fill="#dbeafe"/><rect x="210" y="5" width="190" height="65" rx="8" fill="#dcfce7"/><text x="95"  y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">12-Hour</text><text x="305" y="26" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">24-Hour</text><text x="95"  y="46" text-anchor="middle" font-size="12" fill="#1d4ed8">12:00 am (midnight)</text><text x="305" y="46" text-anchor="middle" font-size="12" fill="#16a34a">00:00</text><text x="95"  y="62" text-anchor="middle" font-size="12" fill="#1d4ed8">3:45 pm</text><text x="305" y="62" text-anchor="middle" font-size="12" fill="#16a34a">15:45</text></svg>`;
DIAGRAMS["y7-math-5-7"] = `<svg width="100%" height="180" viewBox="0 0 300 180" style="max-width:300px;display:block;margin:0.75em auto"><line x1="10" y1="90" x2="290" y2="90" stroke="#555" stroke-width="1.5"/><polygon points="290,90 282,86 282,94" fill="#555"/><line x1="150" y1="10" x2="150" y2="175" stroke="#555" stroke-width="1.5"/><polygon points="150,10 146,18 154,18" fill="#555"/><text x="285" y="105" font-size="11" fill="#1e293b">x</text><text x="155" y="15" font-size="11" fill="#1e293b">y</text><text x="153" y="103" font-size="10" fill="#555">O</text><g font-size="9" fill="#aaa"><text x="180" y="103">1</text><text x="210" y="103">2</text><text x="240" y="103">3</text><text x="108" y="103">−1</text><text x="75" y="103">−2</text><text x="153" y="73">1</text><text x="153" y="43">2</text><text x="153" y="118">−1</text><text x="153" y="148">−2</text></g><circle cx="210" cy="60" r="5" fill="#dc2626"/><text x="215" y="55" font-size="11" font-weight="bold" fill="#dc2626">(2, 2)</text><circle cx="90" cy="120" r="5" fill="#1d4ed8"/><text x="18" y="140" font-size="11" font-weight="bold" fill="#1d4ed8">(−2, −1)</text><line x1="210" y1="60" x2="210" y2="90" stroke="#dc2626" stroke-dasharray="3,3"/><line x1="210" y1="60" x2="150" y2="60" stroke="#dc2626" stroke-dasharray="3,3"/><line x1="90" y1="120" x2="90" y2="90" stroke="#1d4ed8" stroke-dasharray="3,3"/><line x1="90" y1="120" x2="150" y2="120" stroke="#1d4ed8" stroke-dasharray="3,3"/></svg>`;
DIAGRAMS["y7-math-5-8"] = `<svg width="100%" height="190" viewBox="0 0 300 190" style="max-width:300px;display:block;margin:0.75em auto"><line x1="10" y1="95" x2="290" y2="95" stroke="#555" stroke-width="1.5"/><line x1="150" y1="10" x2="150" y2="180" stroke="#555" stroke-width="1.5"/><rect x="150" y="10"  width="140" height="85" fill="#dcfce7" fill-opacity="0.6"/><rect x="10"  y="10"  width="140" height="85" fill="#dbeafe" fill-opacity="0.6"/><rect x="10"  y="95"  width="140" height="85" fill="#e0e7ff" fill-opacity="0.6"/><rect x="150" y="95"  width="140" height="85" fill="#fef3c7" fill-opacity="0.6"/><text x="220" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">I</text><text x="220" y="70" text-anchor="middle" font-size="10" fill="#16a34a">(+, +)</text><text x="80"  y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">II</text><text x="80"  y="70" text-anchor="middle" font-size="10" fill="#1d4ed8">(−, +)</text><text x="80"  y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#6366f1">III</text><text x="80"  y="155" text-anchor="middle" font-size="10" fill="#6366f1">(−, −)</text><text x="220" y="140" text-anchor="middle" font-size="13" font-weight="bold" fill="#b45309">IV</text><text x="220" y="155" text-anchor="middle" font-size="10" fill="#b45309">(+, −)</text><text x="285" y="107" font-size="10" fill="#555">x</text><text x="155" y="15" font-size="10" fill="#555">y</text></svg>`;
DIAGRAMS["y7-math-5-9"] = `<svg width="100%" height="55" viewBox="0 0 400 55" style="max-width:400px;display:block;margin:0.5em 0"><circle cx="40"  cy="28" r="18" fill="#dcfce7" stroke="#16a34a"/><circle cx="120" cy="28" r="18" fill="#dcfce7" stroke="#16a34a"/><circle cx="200" cy="28" r="18" fill="#dcfce7" stroke="#16a34a"/><circle cx="280" cy="28" r="18" fill="#dcfce7" stroke="#16a34a"/><circle cx="360" cy="28" r="18" fill="#bbf7d0" stroke="#16a34a"/><text x="40"  y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">3</text><text x="120" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">7</text><text x="200" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">11</text><text x="280" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">15</text><text x="360" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#16a34a">?</text><text x="80"  y="15" text-anchor="middle" font-size="11" fill="#555">+4</text><text x="160" y="15" text-anchor="middle" font-size="11" fill="#555">+4</text><text x="240" y="15" text-anchor="middle" font-size="11" fill="#555">+4</text><text x="320" y="15" text-anchor="middle" font-size="11" fill="#555">+4</text></svg>`;
DIAGRAMS["y7-math-5-10"] = `<svg width="100%" height="55" viewBox="0 0 400 55" style="max-width:400px;display:block;margin:0.5em 0"><circle cx="40"  cy="28" r="18" fill="#dbeafe" stroke="#1d4ed8"/><circle cx="120" cy="28" r="18" fill="#dbeafe" stroke="#1d4ed8"/><circle cx="200" cy="28" r="18" fill="#dbeafe" stroke="#1d4ed8"/><circle cx="280" cy="28" r="18" fill="#dbeafe" stroke="#1d4ed8"/><circle cx="360" cy="28" r="18" fill="#bfdbfe" stroke="#1d4ed8"/><text x="40"  y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">2</text><text x="120" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">6</text><text x="200" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">18</text><text x="280" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">54</text><text x="360" y="33" text-anchor="middle" font-size="14" font-weight="bold" fill="#1d4ed8">?</text><text x="80"  y="15" text-anchor="middle" font-size="11" fill="#555">×3</text><text x="160" y="15" text-anchor="middle" font-size="11" fill="#555">×3</text><text x="240" y="15" text-anchor="middle" font-size="11" fill="#555">×3</text><text x="320" y="15" text-anchor="middle" font-size="11" fill="#555">×3</text></svg>`;
DIAGRAMS["y7-math-6-0"] = `<svg width="100%" height="130" viewBox="0 0 400 130" style="max-width:400px;display:block;margin:0.75em 0"><text x="0" y="16" font-size="12" font-weight="bold" fill="#1d4ed8">x &gt; 3</text><line x1="20" y1="30" x2="380" y2="30" stroke="#ccc" stroke-width="1.5"/><line x1="200" y1="30" x2="370" y2="30" stroke="#1d4ed8" stroke-width="3"/><circle cx="200" cy="30" r="6" fill="white" stroke="#1d4ed8" stroke-width="2"/><polygon points="370,30 360,25 360,35" fill="#1d4ed8"/><text x="197" y="48" text-anchor="middle" font-size="11" fill="#555">3</text><text x="0" y="66" font-size="12" font-weight="bold" fill="#dc2626">x ≤ −1</text><line x1="20" y1="80" x2="380" y2="80" stroke="#ccc" stroke-width="1.5"/><line x1="160" y1="80" x2="30" y2="80" stroke="#dc2626" stroke-width="3"/><circle cx="160" cy="80" r="6" fill="#dc2626" stroke="#dc2626" stroke-width="2"/><polygon points="30,80 40,75 40,85" fill="#dc2626"/><text x="157" y="98" text-anchor="middle" font-size="11" fill="#555">−1</text><text x="0" y="116" font-size="12" font-weight="bold" fill="#16a34a">5 ≤ x ≤ 10</text><line x1="20" y1="120" x2="380" y2="120" stroke="#ccc" stroke-width="1.5"/><line x1="170" y1="120" x2="320" y2="120" stroke="#16a34a" stroke-width="3"/><circle cx="170" cy="120" r="6" fill="#16a34a" stroke="#16a34a"/><circle cx="320" cy="120" r="6" fill="#16a34a" stroke="#16a34a"/><text x="167" y="138" text-anchor="middle" font-size="11" fill="#555">5</text><text x="317" y="138" text-anchor="middle" font-size="11" fill="#555">10</text></svg>`;
DIAGRAMS["y7-math-6-1"] = `<svg width="100%" height="110" viewBox="0 0 400 110" style="max-width:400px;display:block;margin:0.75em 0"><text x="0" y="16" font-size="11" fill="#16a34a">x &gt; 7 — open circle, arrow right</text><line x1="20" y1="30" x2="380" y2="30" stroke="#ccc" stroke-width="1.5"/><line x1="210" y1="30" x2="370" y2="30" stroke="#16a34a" stroke-width="2.5"/><circle cx="210" cy="30" r="5" fill="white" stroke="#16a34a" stroke-width="2"/><polygon points="370,30 360,26 360,34" fill="#16a34a"/><text x="208" y="46" text-anchor="middle" font-size="10" fill="#555">7</text><text x="0" y="66" font-size="11" fill="#1d4ed8">x ≥ −4 — closed circle, arrow right</text><line x1="20" y1="80" x2="380" y2="80" stroke="#ccc" stroke-width="1.5"/><line x1="140" y1="80" x2="370" y2="80" stroke="#1d4ed8" stroke-width="2.5"/><circle cx="140" cy="80" r="5" fill="#1d4ed8" stroke="#1d4ed8" stroke-width="2"/><polygon points="370,80 360,76 360,84" fill="#1d4ed8"/><text x="138" y="96" text-anchor="middle" font-size="10" fill="#555">−4</text></svg>`;
DIAGRAMS["y7-math-6-2"] = `<svg width="100%" height="65" viewBox="0 0 380 65" style="max-width:380px;display:block;margin:0.75em 0"><rect x="0"   y="10" width="100" height="45" rx="8" fill="#dbeafe"/><text x="50"  y="30" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">x (input)</text><text x="50"  y="47" text-anchor="middle" font-size="11" fill="#1d4ed8">You choose</text><rect x="140" y="10" width="100" height="45" rx="8" fill="#fef3c7"/><text x="190" y="30" text-anchor="middle" font-size="12" fill="#b45309" font-weight="bold">y = 3x − 2</text><text x="190" y="47" text-anchor="middle" font-size="11" fill="#b45309">Formula</text><rect x="280" y="10" width="100" height="45" rx="8" fill="#dcfce7"/><text x="330" y="30" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">y (output)</text><text x="330" y="47" text-anchor="middle" font-size="11" fill="#16a34a">Calculated</text><polygon points="100,32 138,32" stroke="#555" stroke-width="1.5" fill="none"/><polygon points="136,28 140,32 136,36" fill="#555"/><polygon points="240,32 278,32" stroke="#555" stroke-width="1.5" fill="none"/><polygon points="276,28 280,32 276,36" fill="#555"/></svg>`;
DIAGRAMS["y7-math-6-3"] = `<svg width="100%" height="200" viewBox="0 0 280 200" style="max-width:280px;display:block;margin:0.75em auto"><line x1="40" y1="10" x2="40"  y2="180" stroke="#ccc" stroke-width="1"/><line x1="40" y1="180" x2="260" y2="180" stroke="#ccc" stroke-width="1"/><g stroke="#eee" stroke-width="0.5"><line x1="90"  y1="10" x2="90"  y2="180"/><line x1="140" y1="10" x2="140" y2="180"/><line x1="190" y1="10" x2="190" y2="180"/><line x1="240" y1="10" x2="240" y2="180"/><line x1="40" y1="130" x2="260" y2="130"/><line x1="40" y1="80"  x2="260" y2="80"/><line x1="40" y1="30"  x2="260" y2="30"/></g><line x1="40" y1="155" x2="230" y2="25" stroke="#1d4ed8" stroke-width="2"/><circle cx="40"  cy="155" r="4" fill="#dc2626"/><circle cx="90"  cy="130" r="4" fill="#dc2626"/><circle cx="140" cy="105" r="4" fill="#dc2626"/><circle cx="190" cy="80"  r="4" fill="#dc2626"/><text x="30" y="185" font-size="10" fill="#555">0</text><text x="85" y="195" font-size="10" fill="#555">1</text><text x="135" y="195" font-size="10" fill="#555">2</text><text x="185" y="195" font-size="10" fill="#555">3</text><text x="22" y="158" font-size="10" fill="#555">3</text><text x="22" y="133" font-size="10" fill="#555">5</text><text x="22" y="108" font-size="10" fill="#555">7</text><text x="22" y="83"  font-size="10" fill="#555">9</text><text x="60" y="35" font-size="11" fill="#1d4ed8" font-weight="bold">y = 2x + 3</text><text x="22" y="10" font-size="10" fill="#555">y</text><text x="255" y="185" font-size="10" fill="#555">x</text></svg>`;
DIAGRAMS["y7-math-6-4"] = `<svg width="100%" height="155" viewBox="0 0 300 155" style="max-width:300px;display:block;margin:0.75em auto"><line x1="30" y1="10"  x2="30"  y2="130" stroke="#555" stroke-width="1.5"/><line x1="30" y1="130" x2="280" y2="130" stroke="#555" stroke-width="1.5"/><polyline points="30,130 80,70 130,70 180,30 230,110 280,110" stroke="#1d4ed8" stroke-width="2.5" fill="none"/><text x="50"  y="95"  font-size="10" fill="#16a34a">Fast</text><text x="100" y="65"  font-size="10" fill="#dc2626">Stopped</text><text x="148" y="45"  font-size="10" fill="#6366f1">Faster</text><text x="198" y="80"  font-size="10" fill="#b45309">Return</text><text x="248" y="105" font-size="10" fill="#dc2626">Stopped</text><text x="5"  y="135" font-size="9" fill="#555">0</text><text x="2"  y="10"  font-size="10" fill="#555">d</text><text x="275" y="143" font-size="10" fill="#555">t</text></svg>`;
DIAGRAMS["y7-math-6-5"] = `<svg width="100%" height="90" viewBox="0 0 420 90" style="max-width:420px;display:block;margin:0.75em 0"><rect x="0"   y="5" width="62" height="80" rx="6" fill="#dbeafe"/><rect x="70"  y="5" width="62" height="80" rx="6" fill="#dcfce7"/><rect x="140" y="5" width="62" height="80" rx="6" fill="#fef3c7"/><rect x="210" y="5" width="62" height="80" rx="6" fill="#e0e7ff"/><rect x="280" y="5" width="62" height="80" rx="6" fill="#fce7f3"/><rect x="350" y="5" width="62" height="80" rx="6" fill="#cffafe"/><text x="31"  y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">Acute</text><text x="31"  y="48" text-anchor="middle" font-size="10" fill="#1d4ed8">0° – 90°</text><text x="101" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Right</text><text x="101" y="48" text-anchor="middle" font-size="10" fill="#16a34a">= 90°</text><text x="171" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">Obtuse</text><text x="171" y="48" text-anchor="middle" font-size="10" fill="#b45309">90°–180°</text><text x="241" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">Straight</text><text x="241" y="48" text-anchor="middle" font-size="10" fill="#6366f1">= 180°</text><text x="311" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Reflex</text><text x="311" y="48" text-anchor="middle" font-size="10" fill="#dc2626">180°–360°</text><text x="381" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#0e7490">Full turn</text><text x="381" y="48" text-anchor="middle" font-size="10" fill="#0e7490">= 360°</text><line x1="10" y1="72" x2="55" y2="72" stroke="#1d4ed8" stroke-width="1.5"/><line x1="10" y1="72" x2="30" y2="58" stroke="#1d4ed8" stroke-width="1.5"/><line x1="80" y1="72" x2="125" y2="72" stroke="#16a34a" stroke-width="1.5"/><line x1="80" y1="72" x2="80"  y2="56" stroke="#16a34a" stroke-width="1.5"/><rect x="80" y="56" width="8" height="8" fill="none" stroke="#16a34a" stroke-width="1.5"/></svg>`;
DIAGRAMS["y7-math-6-6"] = `<svg width="100%" height="155" viewBox="0 0 300 155" style="max-width:300px;display:block;margin:0.75em auto"><line x1="20"  y1="50"  x2="280" y2="50"  stroke="#1d4ed8" stroke-width="2"/><line x1="20"  y1="110" x2="280" y2="110" stroke="#1d4ed8" stroke-width="2"/><line x1="80"  y1="10"  x2="200" y2="150" stroke="#dc2626" stroke-width="2"/><text x="22"  y="44"  font-size="10" fill="#1d4ed8">parallel line 1</text><text x="22"  y="104" font-size="10" fill="#1d4ed8">parallel line 2</text><text x="128" y="30"  font-size="11" fill="#16a34a" font-weight="bold">a</text><text x="150" y="45"  font-size="11" fill="#16a34a" font-weight="bold">b</text><text x="128" y="62"  font-size="11" fill="#b45309" font-weight="bold">c</text><text x="148" y="105" font-size="11" fill="#16a34a" font-weight="bold">a</text><text x="168" y="125" font-size="11" fill="#6366f1" font-weight="bold">d</text><text x="200" y="72"  font-size="9"  fill="#555">F-shape</text><text x="200" y="85"  font-size="9"  fill="#555">Z-shape</text><text x="200" y="98"  font-size="9"  fill="#555">C-shape</text></svg>`;
DIAGRAMS["y7-math-6-7"] = `<svg width="100%" height="82" viewBox="0 0 480 82" style="max-width:480px;display:block;margin:0.75em 0"><polygon points="60,5 35,50 85,50" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><rect x="120" y="5" width="48" height="45" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><ellipse cx="245" cy="27" rx="40" ry="22" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><polygon points="350,5 420,50 365,50" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.5"/><text x="60"  y="62" text-anchor="middle" font-size="10" fill="#16a34a" font-weight="bold">Equil. △</text><text x="144" y="62" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="bold">Square</text><text x="245" y="62" text-anchor="middle" font-size="10" fill="#b45309" font-weight="bold">Parallelogram</text><text x="378" y="62" text-anchor="middle" font-size="10" fill="#6366f1" font-weight="bold">Scalene △</text><text x="60"  y="76" text-anchor="middle" font-size="9"  fill="#555">Order 3</text><text x="144" y="76" text-anchor="middle" font-size="9"  fill="#555">Order 4</text><text x="245" y="76" text-anchor="middle" font-size="9"  fill="#555">Order 2</text><text x="378" y="76" text-anchor="middle" font-size="9"  fill="#555">Order 1</text></svg>`;
DIAGRAMS["y7-math-6-8"] = `<svg width="100%" height="105" viewBox="0 0 250 105" style="max-width:250px;display:block;margin:0.5em auto"><line x1="125" y1="5" x2="125" y2="100" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/><text x="128" y="14" font-size="10" fill="#dc2626">y-axis</text><rect x="135" y="25" width="60" height="50" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="55"  y="25" width="60" height="50" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="165" y="55" text-anchor="middle" font-size="10" fill="#1d4ed8">Original</text><text x="85"  y="55" text-anchor="middle" font-size="10" fill="#16a34a">Reflection</text></svg>`;
DIAGRAMS["y7-math-6-9"] = `<svg width="100%" height="140" viewBox="0 0 300 140" style="max-width:300px;display:block;margin:0.75em 0"><line x1="50" y1="70" x2="250" y2="70" stroke="#1e293b" stroke-width="2"/><circle cx="50" cy="70" r="3" fill="#1e293b"/><circle cx="250" cy="70" r="3" fill="#1e293b"/><text x="45" y="90" text-anchor="middle" font-size="11">A</text><text x="255" y="90" text-anchor="middle" font-size="11">B</text><path d="M 150 10 L 150 130" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6,3"/><path d="M 50 70 Q 100 10 150 10 Q 200 10 250 70" fill="none" stroke="#999" stroke-width="1" stroke-dasharray="4,3"/><path d="M 50 70 Q 100 130 150 130 Q 200 130 250 70" fill="none" stroke="#999" stroke-width="1" stroke-dasharray="4,3"/><text x="150" y="8" text-anchor="middle" font-size="10" fill="#1d4ed8">Perpendicular bisector</text></svg>`;
DIAGRAMS["y7-math-7-0"] = `<svg width="100%" height="100" viewBox="0 0 380 100" style="max-width:380px;display:block;margin:0.75em 0"><rect x="0"   y="5" width="180" height="90" rx="8" fill="#dbeafe"/><rect x="200" y="5" width="180" height="90" rx="8" fill="#dcfce7"/><text x="90"  y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">Prism</text><text x="290" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">Pyramid</text><text x="90"  y="44" text-anchor="middle" font-size="11" fill="#1d4ed8">2 identical parallel bases</text><text x="290" y="44" text-anchor="middle" font-size="11" fill="#16a34a">1 polygonal base</text><text x="90"  y="62" text-anchor="middle" font-size="11" fill="#1d4ed8">Rectangular faces between</text><text x="290" y="62" text-anchor="middle" font-size="11" fill="#16a34a">Triangular faces meet at apex</text><text x="90"  y="80" text-anchor="middle" font-size="11" fill="#555">e.g. triangular prism</text><text x="290" y="80" text-anchor="middle" font-size="11" fill="#555">e.g. square pyramid</text></svg>`;
DIAGRAMS["y7-math-7-1"] = `<svg width="100%" height="155" viewBox="0 0 350 155" style="max-width:350px;display:block;margin:0.75em auto"><rect x="20"  y="50" width="40" height="40" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="60"  y="50" width="40" height="40" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="100" y="50" width="40" height="40" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="60"  y="10" width="40" height="40" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="60"  y="90" width="40" height="40" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/><rect x="140" y="50" width="40" height="40" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><text x="90"  y="146" text-anchor="middle" font-size="10" fill="#1d4ed8">One valid net of a cube</text><text x="260" y="30"  text-anchor="middle" font-size="11" fill="#555">Fold up along</text><text x="260" y="46"  text-anchor="middle" font-size="11" fill="#555">the dashed lines</text><text x="260" y="62"  text-anchor="middle" font-size="11" fill="#555">→ cube forms</text><text x="260" y="100" text-anchor="middle" font-size="22" fill="#1d4ed8">⬛</text></svg>`;
DIAGRAMS["y7-math-7-2"] = `<svg width="100%" height="90" viewBox="0 0 380 90" style="max-width:380px;display:block;margin:0.75em 0"><rect x="0"   y="10" width="115" height="70" rx="8" fill="#dbeafe"/><rect x="130" y="10" width="115" height="70" rx="8" fill="#dcfce7"/><rect x="260" y="10" width="115" height="70" rx="8" fill="#fef3c7"/><text x="57"  y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Plan view</text><text x="187" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Front elevation</text><text x="317" y="32" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">Side elevation</text><text x="57"  y="52" text-anchor="middle" font-size="10" fill="#1d4ed8">Looking directly</text><text x="187" y="52" text-anchor="middle" font-size="10" fill="#16a34a">Looking directly</text><text x="317" y="52" text-anchor="middle" font-size="10" fill="#b45309">Looking directly</text><text x="57"  y="68" text-anchor="middle" font-size="10" fill="#1d4ed8">DOWN from above</text><text x="187" y="68" text-anchor="middle" font-size="10" fill="#16a34a">from the FRONT</text><text x="317" y="68" text-anchor="middle" font-size="10" fill="#b45309">from the SIDE</text></svg>`;
DIAGRAMS["y7-math-7-3"] = `<svg width="100%" height="75" viewBox="0 0 380 75" style="max-width:380px;display:block;margin:0.5em 0"><polygon points="30,65 130,65 130,15 30,15" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><text x="80" y="45" text-anchor="middle" font-size="11" fill="#1d4ed8">Rectangle</text><text x="80" y="72" text-anchor="middle" font-size="10" fill="#555">l × w</text><polygon points="160,65 240,65 220,20 180,20" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><line x1="200" y1="20" x2="200" y2="65" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,3"/><text x="200" y="72" text-anchor="middle" font-size="10" fill="#555">½ × b × h</text><text x="207" y="45" font-size="9" fill="#16a34a">h</text><polygon points="270,65 350,65 370,20 290,20" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/><line x1="320" y1="20" x2="320" y2="65" stroke="#b45309" stroke-width="1" stroke-dasharray="3,3"/><text x="315" y="72" text-anchor="middle" font-size="10" fill="#555">b × h</text><text x="325" y="45" font-size="9" fill="#b45309">h</text></svg>`;
DIAGRAMS["y7-math-7-4"] = `<svg width="100%" height="110" viewBox="0 0 300 110" style="max-width:300px;display:block;margin:0.75em auto"><polygon points="60,20 220,20 260,90 20,90" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><line x1="150" y1="20" x2="150" y2="90" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3"/><text x="140" y="58" font-size="11" fill="#1d4ed8">h</text><text x="140" y="16" font-size="11" text-anchor="middle" fill="#1d4ed8">a</text><text x="140" y="103" font-size="11" text-anchor="middle" fill="#1d4ed8">b</text><rect x="146" y="20" width="8" height="8" fill="none" stroke="#1d4ed8" stroke-width="1"/><text x="240" y="55" font-size="13" fill="#1e293b" font-weight="bold">A = ½(a+b)h</text></svg>`;
DIAGRAMS["y7-math-7-5"] = `<svg width="100%" height="130" viewBox="0 0 300 130" style="max-width:300px;display:block;margin:0.75em auto"><rect x="20"  y="20"  width="120" height="80" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5" stroke-dasharray="4,3"/><rect x="140" y="60"  width="80"  height="40" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/><polygon points="20,20 140,20 140,100 220,100 220,60 140,60 140,20" fill="none" stroke="#1e293b" stroke-width="2"/><text x="80"  y="65" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="bold">Part A</text><text x="180" y="85" text-anchor="middle" font-size="12" fill="#16a34a" font-weight="bold">Part B</text><text x="80"  y="80" text-anchor="middle" font-size="10" fill="#1d4ed8">120 × 80 = 9,600</text><text x="180" y="120" text-anchor="middle" font-size="10" fill="#16a34a">80 × 40 = 3,200</text><text x="150" y="125" text-anchor="middle" font-size="11" fill="#1e293b" font-weight="bold">Total = 12,800 mm²</text></svg>`;
DIAGRAMS["y7-math-7-6"] = `<svg width="100%" height="110" viewBox="0 0 300 110" style="max-width:300px;display:block;margin:0.75em auto"><polygon points="40,80 120,80 120,30 40,30" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/><polygon points="120,30 160,10 160,60 120,80" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/><polygon points="40,30 80,10 160,10 120,30" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/><line x1="40" y1="80" x2="40" y2="30" stroke="#1d4ed8" stroke-width="1.5"/><text x="25" y="58" font-size="11" fill="#1d4ed8">h</text><text x="76" y="93" font-size="11" fill="#1d4ed8">length</text><text x="143" y="42" font-size="11" fill="#1d4ed8">w</text><text x="190" y="50" font-size="14" fill="#1e293b" font-weight="bold">V = l × w × h</text><text x="190" y="70" font-size="12" fill="#555">e.g. 6 × 4 × 3 = 72 cm³</text></svg>`;
DIAGRAMS["y7-math-7-7"] = `<svg width="100%" height="90" viewBox="0 0 380 90" style="max-width:380px;display:block;margin:0.75em 0"><rect x="0"   y="10" width="170" height="70" rx="8" fill="#dcfce7"/><rect x="210" y="10" width="170" height="70" rx="8" fill="#fce7f3"/><text x="85"  y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">Income</text><text x="295" y="32" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">Expenditure</text><text x="85"  y="52" text-anchor="middle" font-size="10" fill="#16a34a">wages · allowances</text><text x="295" y="52" text-anchor="middle" font-size="10" fill="#dc2626">rent · food · bills</text><text x="85"  y="68" text-anchor="middle" font-size="10" fill="#16a34a">benefits · investments</text><text x="295" y="68" text-anchor="middle" font-size="10" fill="#dc2626">transport · entertainment</text></svg>`;
DIAGRAMS["y7-math-7-8"] = `<svg width="100%" height="140" viewBox="0 0 200 140" style="max-width:200px;display:block;margin:0.75em 0"><polygon points="20,120 180,120 20,20" fill="none" stroke="#1e293b" stroke-width="2"/><rect x="20" y="100" width="20" height="20" fill="none" stroke="#1d4ed8" stroke-width="1.5"/><text x="95" y="135" text-anchor="middle" font-size="11">a</text><text x="8" y="75" text-anchor="middle" font-size="11">b</text><line x1="20" y1="20" x2="180" y2="120" stroke="#dc2626" stroke-width="2.5"/><text x="110" y="60" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">c (hypotenuse)</text></svg>`;
