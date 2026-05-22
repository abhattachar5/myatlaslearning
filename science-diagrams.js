// science-diagrams.js — SVG diagrams for science flashcards
// Each key matches the `image` field on a flashcard in data.js

const DIAGRAMS = {};

// ── CELLS ────────────────────────────────────────────────────────────────────
DIAGRAMS["cell-comparison"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="70" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Animal Cell</text>
  <text x="210" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Plant Cell</text>
  <line x1="140" y1="17" x2="140" y2="158" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- animal cell -->
  <ellipse cx="70" cy="88" rx="58" ry="62" fill="#dbeafe" stroke="#185fa5" stroke-width="2"/>
  <circle cx="70" cy="82" r="17" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="70" y="86" text-anchor="middle" font-size="7.5" fill="#1e3a5f">nucleus</text>
  <ellipse cx="44" cy="65" rx="12" ry="6" fill="#fde68a" stroke="#ca8a04" stroke-width="1.2" transform="rotate(-25 44 65)"/>
  <ellipse cx="99" cy="107" rx="12" ry="6" fill="#fde68a" stroke="#ca8a04" stroke-width="1.2" transform="rotate(20 99 107)"/>
  <text x="18" y="129" font-size="7" fill="#ca8a04">mitochondria</text>
  <text x="8" y="157" font-size="7" fill="#185fa5">cell membrane</text>
  <!-- plant cell -->
  <rect x="153" y="22" width="114" height="130" rx="4" fill="#22c55e" stroke="#15803d" stroke-width="3"/>
  <rect x="158" y="27" width="104" height="120" rx="2" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
  <circle cx="210" cy="80" r="17" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
  <text x="210" y="84" text-anchor="middle" font-size="7.5" fill="#14532d">nucleus</text>
  <ellipse cx="174" cy="50" rx="13" ry="7" fill="#16a34a" stroke="#14532d" stroke-width="1.2"/>
  <ellipse cx="244" cy="50" rx="13" ry="7" fill="#16a34a" stroke="#14532d" stroke-width="1.2"/>
  <text x="157" y="45" font-size="7" fill="#14532d">chloroplast</text>
  <ellipse cx="238" cy="112" rx="20" ry="23" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="3,2"/>
  <text x="238" y="116" text-anchor="middle" font-size="7.5" fill="#1d4ed8">vacuole</text>
  <text x="155" y="163" font-size="7.5" fill="#15803d">thick cell wall (green border)</text>
</svg>`;

// ── ECOSYSTEMS ───────────────────────────────────────────────────────────────
DIAGRAMS["food-chain"] = `<svg viewBox="0 0 280 100" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="fca" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#64748b"/></marker></defs>
  <circle cx="26" cy="44" r="19" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="26" y="47" text-anchor="middle" font-size="16">🌿</text>
  <text x="26" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">Grass</text>
  <text x="26" y="82" text-anchor="middle" font-size="7" fill="#64748b">producer</text>
  <line x1="48" y1="44" x2="72" y2="44" stroke="#64748b" stroke-width="2" marker-end="url(#fca)"/>
  <text x="60" y="38" text-anchor="middle" font-size="7" fill="#64748b">energy</text>
  <circle cx="91" cy="44" r="19" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="91" y="47" text-anchor="middle" font-size="16">🐇</text>
  <text x="91" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">Rabbit</text>
  <text x="91" y="82" text-anchor="middle" font-size="7" fill="#64748b">1° consumer</text>
  <line x1="113" y1="44" x2="137" y2="44" stroke="#64748b" stroke-width="2" marker-end="url(#fca)"/>
  <text x="125" y="38" text-anchor="middle" font-size="7" fill="#64748b">energy</text>
  <circle cx="156" cy="44" r="19" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="156" y="47" text-anchor="middle" font-size="16">🦊</text>
  <text x="156" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Fox</text>
  <text x="156" y="82" text-anchor="middle" font-size="7" fill="#64748b">2° consumer</text>
  <line x1="178" y1="44" x2="202" y2="44" stroke="#64748b" stroke-width="2" marker-end="url(#fca)"/>
  <circle cx="221" cy="44" r="19" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="221" y="47" text-anchor="middle" font-size="16">🦅</text>
  <text x="221" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#5b21b6">Eagle</text>
  <text x="221" y="82" text-anchor="middle" font-size="7" fill="#64748b">3° consumer</text>
  <text x="260" y="36" text-anchor="middle" font-size="7" fill="#94a3b8">▶ = energy</text>
  <text x="260" y="46" text-anchor="middle" font-size="7" fill="#94a3b8">transfer</text>
</svg>`;

// ── PARTICLES ────────────────────────────────────────────────────────────────
DIAGRAMS["particle-states"] = `<svg viewBox="0 0 280 152" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect x="3" y="4" width="84" height="94" rx="6" fill="#f8fafc" stroke="#185fa5" stroke-width="1.5"/>
  <rect x="98" y="4" width="84" height="94" rx="6" fill="#f8fafc" stroke="#185fa5" stroke-width="1.5"/>
  <rect x="193" y="4" width="84" height="94" rx="6" fill="#f8fafc" stroke="#185fa5" stroke-width="1.5"/>
  <!-- SOLID grid -->
  <g fill="#185fa5">
    <circle cx="19" cy="20" r="7"/><circle cx="35" cy="20" r="7"/><circle cx="51" cy="20" r="7"/><circle cx="67" cy="20" r="7"/>
    <circle cx="19" cy="36" r="7"/><circle cx="35" cy="36" r="7"/><circle cx="51" cy="36" r="7"/><circle cx="67" cy="36" r="7"/>
    <circle cx="19" cy="52" r="7"/><circle cx="35" cy="52" r="7"/><circle cx="51" cy="52" r="7"/><circle cx="67" cy="52" r="7"/>
    <circle cx="19" cy="68" r="7"/><circle cx="35" cy="68" r="7"/><circle cx="51" cy="68" r="7"/><circle cx="67" cy="68" r="7"/>
    <circle cx="19" cy="84" r="7"/><circle cx="35" cy="84" r="7"/><circle cx="51" cy="84" r="7"/><circle cx="67" cy="84" r="7"/>
  </g>
  <!-- LIQUID irregular -->
  <g fill="#3b82f6">
    <circle cx="113" cy="18" r="7"/><circle cx="132" cy="22" r="7"/><circle cx="152" cy="17" r="7"/><circle cx="170" cy="21" r="7"/>
    <circle cx="109" cy="37" r="7"/><circle cx="129" cy="39" r="7"/><circle cx="150" cy="36" r="7"/><circle cx="169" cy="40" r="7"/>
    <circle cx="115" cy="55" r="7"/><circle cx="135" cy="57" r="7"/><circle cx="154" cy="53" r="7"/><circle cx="172" cy="57" r="7"/>
    <circle cx="110" cy="72" r="7"/><circle cx="131" cy="73" r="7"/><circle cx="152" cy="71" r="7"/><circle cx="170" cy="75" r="7"/>
    <circle cx="117" cy="89" r="7"/><circle cx="138" cy="88" r="7"/><circle cx="158" cy="90" r="7"/><circle cx="175" cy="87" r="7"/>
  </g>
  <!-- GAS sparse -->
  <g fill="#7c3aed">
    <circle cx="212" cy="17" r="6"/><circle cx="252" cy="21" r="6"/><circle cx="270" cy="13" r="6"/>
    <circle cx="205" cy="47" r="6"/><circle cx="242" cy="52" r="6"/><circle cx="271" cy="44" r="6"/>
    <circle cx="219" cy="74" r="6"/><circle cx="258" cy="70" r="6"/><circle cx="274" cy="83" r="6"/>
    <circle cx="203" cy="89" r="6"/>
  </g>
  <!-- Labels -->
  <text x="45" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#185fa5">SOLID</text>
  <text x="140" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#3b82f6">LIQUID</text>
  <text x="235" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">GAS</text>
  <text x="45" y="122" text-anchor="middle" font-size="7.5" fill="#475569">close, ordered</text>
  <text x="45" y="132" text-anchor="middle" font-size="7.5" fill="#475569">vibrate in place</text>
  <text x="140" y="122" text-anchor="middle" font-size="7.5" fill="#475569">close, random</text>
  <text x="140" y="132" text-anchor="middle" font-size="7.5" fill="#475569">slide past each other</text>
  <text x="235" y="122" text-anchor="middle" font-size="7.5" fill="#475569">spread apart</text>
  <text x="235" y="132" text-anchor="middle" font-size="7.5" fill="#475569">move fast &amp; freely</text>
</svg>`;

// ── FORCES ───────────────────────────────────────────────────────────────────
DIAGRAMS["force-arrows"] = `<svg viewBox="0 0 280 118" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#ef4444"/></marker>
  </defs>
  <!-- BALANCED -->
  <text x="70" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">BALANCED</text>
  <rect x="36" y="38" width="68" height="36" rx="5" fill="#dbeafe" stroke="#185fa5" stroke-width="2"/>
  <text x="70" y="61" text-anchor="middle" font-size="9" fill="#1e3a5f" font-weight="600">object</text>
  <line x1="4" y1="56" x2="34" y2="56" stroke="#ef4444" stroke-width="2.5" marker-end="url(#ar)"/>
  <text x="19" y="48" text-anchor="middle" font-size="8" fill="#ef4444">10 N</text>
  <line x1="136" y1="56" x2="106" y2="56" stroke="#ef4444" stroke-width="2.5" marker-end="url(#ar)"/>
  <text x="121" y="48" text-anchor="middle" font-size="8" fill="#ef4444">10 N</text>
  <text x="70" y="92" text-anchor="middle" font-size="8" fill="#475569">net force = 0</text>
  <text x="70" y="105" text-anchor="middle" font-size="8" fill="#475569">stays still OR constant speed</text>
  <!-- Divider -->
  <line x1="148" y1="10" x2="148" y2="114" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- UNBALANCED -->
  <text x="214" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#dc2626">UNBALANCED</text>
  <rect x="170" y="38" width="68" height="36" rx="5" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="204" y="61" text-anchor="middle" font-size="9" fill="#1e3a5f" font-weight="600">object</text>
  <line x1="156" y1="56" x2="168" y2="56" stroke="#ef4444" stroke-width="2.5" marker-end="url(#ar)"/>
  <text x="162" y="48" text-anchor="middle" font-size="7.5" fill="#ef4444">5 N</text>
  <line x1="240" y1="56" x2="274" y2="56" stroke="#ef4444" stroke-width="3.5" marker-end="url(#ar)"/>
  <text x="258" y="48" text-anchor="middle" font-size="8" fill="#ef4444">20 N</text>
  <text x="214" y="92" text-anchor="middle" font-size="8" fill="#475569">net force = 15 N →</text>
  <text x="214" y="105" text-anchor="middle" font-size="8" fill="#475569">accelerates rightward</text>
</svg>`;

// ── LIGHT ─────────────────────────────────────────────────────────────────────
DIAGRAMS["law-of-reflection"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="lra" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#f59e0b"/></marker>
    <marker id="lra2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#3b82f6"/></marker>
  </defs>
  <!-- Mirror surface -->
  <line x1="20" y1="110" x2="260" y2="110" stroke="#64748b" stroke-width="3"/>
  <text x="140" y="128" text-anchor="middle" font-size="9" fill="#475569">mirror surface</text>
  <!-- Hatching below mirror -->
  <g stroke="#94a3b8" stroke-width="1" opacity="0.6">
    <line x1="20" y1="110" x2="10" y2="122"/><line x1="40" y1="110" x2="30" y2="122"/><line x1="60" y1="110" x2="50" y2="122"/>
    <line x1="80" y1="110" x2="70" y2="122"/><line x1="100" y1="110" x2="90" y2="122"/><line x1="120" y1="110" x2="110" y2="122"/>
    <line x1="140" y1="110" x2="130" y2="122"/><line x1="160" y1="110" x2="150" y2="122"/><line x1="180" y1="110" x2="170" y2="122"/>
    <line x1="200" y1="110" x2="190" y2="122"/><line x1="220" y1="110" x2="210" y2="122"/><line x1="240" y1="110" x2="230" y2="122"/>
    <line x1="260" y1="110" x2="250" y2="122"/>
  </g>
  <!-- Normal (vertical dashed) -->
  <line x1="140" y1="18" x2="140" y2="110" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
  <text x="142" y="15" font-size="8" fill="#94a3b8">normal</text>
  <!-- Incident ray (top-left → point of incidence) -->
  <line x1="52" y1="22" x2="138" y2="108" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#lra)"/>
  <text x="54" y="18" font-size="9" font-weight="600" fill="#d97706">incident ray</text>
  <!-- Reflected ray (point of incidence → top-right) -->
  <line x1="142" y1="108" x2="228" y2="22" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#lra2)"/>
  <text x="188" y="18" font-size="9" font-weight="600" fill="#2563eb">reflected ray</text>
  <!-- Angle of incidence arc (symmetric with angle r) -->
  <path d="M119,89 A30,30 0 0,1 140,80" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="104" y="80" font-size="8" fill="#d97706">angle i</text>
  <!-- Angle of reflection arc (mirror of angle i) -->
  <path d="M140,80 A30,30 0 0,1 161,89" fill="none" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="158" y="80" font-size="8" fill="#2563eb">angle r</text>
  <!-- Rule -->
  <rect x="40" y="140" width="200" height="18" rx="4" fill="#dbeafe"/>
  <text x="140" y="153" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">angle i  =  angle r</text>
</svg>`;

// ── SCIENTIFIC SKILLS ─────────────────────────────────────────────────────────
DIAGRAMS["variables-diagram"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="va" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#64748b"/></marker></defs>
  <!-- Central experiment box -->
  <rect x="100" y="58" width="80" height="44" rx="8" fill="#f0f9ff" stroke="#185fa5" stroke-width="2"/>
  <text x="140" y="76" text-anchor="middle" font-size="9" font-weight="700" fill="#185fa5">EXPERIMENT</text>
  <text x="140" y="91" text-anchor="middle" font-size="7.5" fill="#475569">fair test</text>
  <!-- Independent variable (YOU CHANGE) — left -->
  <rect x="2" y="60" width="84" height="40" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.8"/>
  <text x="44" y="75" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">INDEPENDENT</text>
  <text x="44" y="87" text-anchor="middle" font-size="7.5" fill="#15803d">variable</text>
  <text x="44" y="97" text-anchor="middle" font-size="7" fill="#64748b">(you CHANGE)</text>
  <line x1="88" y1="80" x2="98" y2="80" stroke="#64748b" stroke-width="2" marker-end="url(#va)"/>
  <!-- Dependent variable (YOU MEASURE) — right -->
  <rect x="194" y="60" width="84" height="40" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.8"/>
  <text x="236" y="75" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">DEPENDENT</text>
  <text x="236" y="87" text-anchor="middle" font-size="7.5" fill="#92400e">variable</text>
  <text x="236" y="97" text-anchor="middle" font-size="7" fill="#64748b">(you MEASURE)</text>
  <line x1="182" y1="80" x2="192" y2="80" stroke="#64748b" stroke-width="2" marker-end="url(#va)"/>
  <!-- Control variables (KEEP SAME) — below -->
  <rect x="60" y="120" width="160" height="30" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="140" y="133" text-anchor="middle" font-size="8" font-weight="700" fill="#5b21b6">CONTROL variables</text>
  <text x="140" y="145" text-anchor="middle" font-size="7.5" fill="#5b21b6">keep everything ELSE the same</text>
  <line x1="140" y1="104" x2="140" y2="118" stroke="#64748b" stroke-width="2" marker-end="url(#va)"/>
  <!-- Title -->
  <text x="140" y="18" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Three Types of Variable</text>
  <text x="140" y="33" text-anchor="middle" font-size="8.5" fill="#475569">Example: testing how temperature affects reaction rate</text>
  <text x="140" y="46" text-anchor="middle" font-size="8" fill="#16a34a">IV: temperature</text>
  <text x="140" y="57" text-anchor="middle" font-size="8" fill="#92400e">DV: rate of reaction</text>
</svg>`;

// ── ELECTRICITY ───────────────────────────────────────────────────────────────
DIAGRAMS["circuit-comparison"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="70" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Series Circuit</text>
  <text x="210" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Parallel Circuit</text>
  <line x1="140" y1="16" x2="140" y2="150" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- SERIES: rectangle with battery + 2 bulbs in one loop -->
  <!-- wires -->
  <rect x="10" y="34" width="120" height="70" rx="4" fill="none" stroke="#185fa5" stroke-width="2"/>
  <!-- battery symbol (left side) -->
  <line x1="10" y1="61" x2="10" y2="47" stroke="#185fa5" stroke-width="2"/>
  <line x1="4" y1="61" x2="16" y2="61" stroke="#185fa5" stroke-width="3"/>
  <line x1="7" y1="66" x2="13" y2="66" stroke="#185fa5" stroke-width="1.5"/>
  <text x="10" y="82" text-anchor="middle" font-size="7" fill="#185fa5">+/−</text>
  <!-- bulb 1 (top, middle-left) -->
  <circle cx="52" cy="34" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <line x1="46" y1="40" x2="58" y2="28" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="46" y1="28" x2="58" y2="40" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="52" y="26" text-anchor="middle" font-size="7" fill="#d97706">B1</text>
  <!-- bulb 2 (top, middle-right) -->
  <circle cx="92" cy="34" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <line x1="86" y1="40" x2="98" y2="28" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="86" y1="28" x2="98" y2="40" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="92" y="26" text-anchor="middle" font-size="7" fill="#d97706">B2</text>
  <text x="70" y="121" text-anchor="middle" font-size="8" fill="#dc2626">✗ one breaks → both out</text>
  <text x="70" y="134" text-anchor="middle" font-size="7.5" fill="#475569">voltage shared between bulbs</text>
  <!-- PARALLEL -->
  <!-- outer rectangle -->
  <line x1="152" y1="34" x2="270" y2="34" stroke="#185fa5" stroke-width="2"/>
  <line x1="152" y1="104" x2="270" y2="104" stroke="#185fa5" stroke-width="2"/>
  <line x1="152" y1="34" x2="152" y2="104" stroke="#185fa5" stroke-width="2"/>
  <line x1="270" y1="34" x2="270" y2="104" stroke="#185fa5" stroke-width="2"/>
  <!-- battery (left side) -->
  <line x1="152" y1="61" x2="152" y2="47" stroke="#185fa5" stroke-width="2"/>
  <line x1="146" y1="61" x2="158" y2="61" stroke="#185fa5" stroke-width="3"/>
  <line x1="149" y1="66" x2="155" y2="66" stroke="#185fa5" stroke-width="1.5"/>
  <!-- branch lines -->
  <line x1="200" y1="34" x2="200" y2="104" stroke="#185fa5" stroke-width="1.5" stroke-dasharray="2,1"/>
  <!-- bulb 1 (top branch) -->
  <circle cx="230" cy="34" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <line x1="224" y1="40" x2="236" y2="28" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="224" y1="28" x2="236" y2="40" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="230" y="26" text-anchor="middle" font-size="7" fill="#d97706">B1</text>
  <!-- bulb 2 (bottom branch) -->
  <circle cx="230" cy="104" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <line x1="224" y1="110" x2="236" y2="98" stroke="#f59e0b" stroke-width="1.5"/>
  <line x1="224" y1="98" x2="236" y2="110" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="230" y="120" text-anchor="middle" font-size="7" fill="#d97706">B2</text>
  <text x="211" y="134" text-anchor="middle" font-size="8" fill="#16a34a">✓ one breaks → other stays on</text>
  <text x="211" y="147" text-anchor="middle" font-size="7.5" fill="#475569">each branch gets full voltage</text>
</svg>`;

// ── WAVES ─────────────────────────────────────────────────────────────────────
DIAGRAMS["wave-properties"] = `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="wpa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#185fa5"/></marker>
    <marker id="wpb" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><polygon points="6 0,0 3,6 6" fill="#185fa5"/></marker>
    <marker id="wpc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#dc2626"/></marker>
  </defs>
  <!-- Title -->
  <text x="90" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Transverse Wave Properties</text>
  <!-- Equilibrium line -->
  <line x1="14" y1="75" x2="266" y2="75" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Wave (2 full cycles) -->
  <path d="M14,75 C36,35 58,35 80,75 C102,115 124,115 146,75 C168,35 190,35 212,75 C234,115 256,115 266,75" fill="none" stroke="#185fa5" stroke-width="2.5"/>
  <!-- Direction arrow -->
  <line x1="220" y1="24" x2="268" y2="24" stroke="#dc2626" stroke-width="2" marker-end="url(#wpc)"/>
  <text x="244" y="18" text-anchor="middle" font-size="7.5" fill="#dc2626">direction →</text>
  <!-- Amplitude arrow (vertical, from equilibrium to crest) -->
  <line x1="80" y1="75" x2="80" y2="36" stroke="#16a34a" stroke-width="2" marker-end="url(#wpa)"/>
  <line x1="80" y1="75" x2="80" y2="36" stroke="#16a34a" stroke-width="2" marker-start="url(#wpb)"/>
  <text x="85" y="57" font-size="8" fill="#16a34a">amplitude</text>
  <!-- Wavelength arrow (horizontal, crest to crest) -->
  <line x1="14" y1="100" x2="145" y2="100" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="14" y1="96" x2="14" y2="104" stroke="#7c3aed" stroke-width="1.5"/>
  <line x1="145" y1="96" x2="145" y2="104" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="80" y="116" text-anchor="middle" font-size="8" fill="#7c3aed">wavelength (λ)</text>
  <text x="80" y="126" text-anchor="middle" font-size="7.5" fill="#7c3aed">one complete wave</text>
  <!-- Particle motion arrow -->
  <line x1="146" y1="55" x2="146" y2="40" stroke="#f59e0b" stroke-width="2" marker-end="url(#wpa)"/>
  <line x1="146" y1="55" x2="146" y2="70" stroke="#f59e0b" stroke-width="2" marker-end="url(#wpa)"/>
  <text x="150" y="57" font-size="7.5" fill="#d97706">particle</text>
  <text x="150" y="67" font-size="7.5" fill="#d97706">vibration</text>
  <text x="140" y="138" text-anchor="middle" font-size="8" fill="#475569">Wave speed = frequency × wavelength   (v = f × λ)</text>
</svg>`;

DIAGRAMS["em-spectrum"] = `<svg viewBox="0 0 280 108" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Electromagnetic Spectrum</text>
  <!-- frequency arrow -->
  <defs><marker id="ema" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#dc2626"/></marker></defs>
  <line x1="6" y1="22" x2="274" y2="22" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ema)"/>
  <text x="4" y="19" font-size="7.5" fill="#dc2626">low freq</text>
  <text x="245" y="19" font-size="7.5" fill="#dc2626">high freq</text>
  <!-- Coloured bands -->
  <rect x="6" y="28" width="34" height="28" rx="2" fill="#6366f1"/>
  <rect x="42" y="28" width="34" height="28" rx="2" fill="#8b5cf6"/>
  <rect x="78" y="28" width="34" height="28" rx="2" fill="#ec4899"/>
  <rect x="114" y="28" width="34" height="28" rx="2" fill="#f59e0b"/>
  <rect x="150" y="28" width="34" height="28" rx="2" fill="#10b981"/>
  <rect x="186" y="28" width="34" height="28" rx="2" fill="#3b82f6"/>
  <rect x="222" y="28" width="52" height="28" rx="2" fill="#185fa5"/>
  <!-- Wave squiggles (indicative) -->
  <path d="M11,42 C14,37 17,37 20,42 C23,47 26,47 29,42 C32,37 35,37 38,42" fill="none" stroke="white" stroke-width="1.2"/>
  <path d="M47,42 C49,38 51,38 53,42 C55,46 57,46 59,42 C61,38 63,38 65,42 C67,46 69,46 71,42" fill="none" stroke="white" stroke-width="1.2"/>
  <path d="M81,42 C82,39 83,39 84,42 C85,45 86,45 87,42 C88,39 89,39 90,42 C91,45 92,45 93,42 C94,39 95,39 96,42 C97,45 98,45 99,42 C100,39 101,39 102,42 C103,45 104,45 105,42 C106,39 107,39 108,42" fill="none" stroke="white" stroke-width="1.2"/>
  <!-- Labels -->
  <text x="23" y="66" text-anchor="middle" font-size="7" fill="#1e293b">Radio</text>
  <text x="59" y="66" text-anchor="middle" font-size="7" fill="#1e293b">Micro-</text>
  <text x="59" y="74" text-anchor="middle" font-size="7" fill="#1e293b">wave</text>
  <text x="95" y="66" text-anchor="middle" font-size="7" fill="#1e293b">Infra-</text>
  <text x="95" y="74" text-anchor="middle" font-size="7" fill="#1e293b">red</text>
  <text x="131" y="66" text-anchor="middle" font-size="7" fill="#1e293b">Visible</text>
  <text x="131" y="74" text-anchor="middle" font-size="7" fill="#1e293b">light</text>
  <text x="167" y="66" text-anchor="middle" font-size="7" fill="#1e293b">Ultra-</text>
  <text x="167" y="74" text-anchor="middle" font-size="7" fill="#1e293b">violet</text>
  <text x="203" y="66" text-anchor="middle" font-size="7" fill="#1e293b">X-rays</text>
  <text x="248" y="66" text-anchor="middle" font-size="7" fill="#1e293b">Gamma</text>
  <text x="248" y="74" text-anchor="middle" font-size="7" fill="#1e293b">rays</text>
  <text x="140" y="90" text-anchor="middle" font-size="7.5" fill="#475569">All EM waves travel at 3×10⁸ m/s in a vacuum</text>
  <text x="140" y="101" text-anchor="middle" font-size="7.5" fill="#475569">Higher frequency = shorter wavelength = more energy</text>
</svg>`;

// ── BODY SYSTEMS ──────────────────────────────────────────────────────────────
DIAGRAMS["heart-diagram"] = `<svg viewBox="0 0 280 168" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="hda" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#dc2626"/></marker>
    <marker id="hdb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#3b82f6"/></marker>
  </defs>
  <text x="140" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Double Circulation</text>
  <!-- HEART outline -->
  <ellipse cx="140" cy="95" rx="50" ry="52" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
  <!-- Septum (divides heart) -->
  <line x1="140" y1="48" x2="140" y2="142" stroke="#991b1b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Right side (deoxygenated - blue) -->
  <rect x="92" y="58" width="44" height="32" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="114" y="69" text-anchor="middle" font-size="7.5" fill="#1e3a5f" font-weight="600">Right</text>
  <text x="114" y="80" text-anchor="middle" font-size="7.5" fill="#1e3a5f">Atrium</text>
  <rect x="92" y="96" width="44" height="40" rx="6" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="114" y="110" text-anchor="middle" font-size="7.5" fill="#1e3a5f" font-weight="600">Right</text>
  <text x="114" y="120" text-anchor="middle" font-size="7.5" fill="#1e3a5f">Ventricle</text>
  <!-- Left side (oxygenated - red) -->
  <rect x="144" y="58" width="44" height="32" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="166" y="69" text-anchor="middle" font-size="7.5" fill="#7f1d1d" font-weight="600">Left</text>
  <text x="166" y="80" text-anchor="middle" font-size="7.5" fill="#7f1d1d">Atrium</text>
  <rect x="144" y="96" width="44" height="40" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="166" y="110" text-anchor="middle" font-size="7.5" fill="#7f1d1d" font-weight="600">Left</text>
  <text x="166" y="120" text-anchor="middle" font-size="7.5" fill="#7f1d1d">Ventricle</text>
  <!-- Flow arrows -->
  <!-- Body → right atrium -->
  <line x1="36" y1="72" x2="89" y2="72" stroke="#3b82f6" stroke-width="2" marker-end="url(#hdb)"/>
  <text x="22" y="65" font-size="7" fill="#3b82f6">from</text>
  <text x="22" y="74" font-size="7" fill="#3b82f6">body</text>
  <!-- Right ventricle → lungs -->
  <line x1="114" y1="142" x2="114" y2="158" stroke="#3b82f6" stroke-width="2" marker-end="url(#hdb)"/>
  <text x="68" y="162" font-size="7.5" fill="#3b82f6">→ to lungs (picks up O₂)</text>
  <!-- Lungs → left atrium -->
  <line x1="191" y1="72" x2="245" y2="72" stroke="#dc2626" stroke-width="2" marker-end="url(#hda)"/>
  <text x="248" y="65" font-size="7" fill="#dc2626">from</text>
  <text x="248" y="74" font-size="7" fill="#dc2626">lungs</text>
  <!-- Left ventricle → body -->
  <line x1="166" y1="142" x2="166" y2="158" stroke="#dc2626" stroke-width="2" marker-end="url(#hda)"/>
  <text x="155" y="162" font-size="7.5" fill="#dc2626">→ to body</text>
</svg>`;

// ── GENETICS ──────────────────────────────────────────────────────────────────
DIAGRAMS["punnett-square"] = `<svg viewBox="0 0 200 185" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="100" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Punnett Square: Tt × Tt</text>
  <!-- Parent 1 alleles (top) -->
  <text x="100" y="28" text-anchor="middle" font-size="8.5" fill="#475569">Parent 1</text>
  <text x="110" y="48" text-anchor="middle" font-size="15" font-weight="700" fill="#7c3aed">T</text>
  <text x="155" y="46" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">t</text>
  <!-- Parent 2 alleles (left) -->
  <text x="44" y="30" text-anchor="middle" font-size="8.5" fill="#475569">Parent 2</text>
  <text x="52" y="90" text-anchor="middle" font-size="15" font-weight="700" fill="#7c3aed">T</text>
  <text x="52" y="140" text-anchor="middle" font-size="15" font-weight="700" fill="#dc2626">t</text>
  <!-- Grid -->
  <rect x="70" y="52" width="90" height="90" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="115" y1="52" x2="115" y2="142" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="70" y1="97" x2="160" y2="97" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- Cell TT -->
  <rect x="70" y="52" width="45" height="45" rx="2" fill="#dbeafe"/>
  <text x="92" y="78" text-anchor="middle" font-size="16" font-weight="700" fill="#1d4ed8">TT</text>
  <!-- Cell Tt (top right) -->
  <rect x="115" y="52" width="45" height="45" rx="2" fill="#ede9fe"/>
  <text x="137" y="78" text-anchor="middle" font-size="16" font-weight="700" fill="#5b21b6">Tt</text>
  <!-- Cell Tt (bottom left) -->
  <rect x="70" y="97" width="45" height="45" rx="2" fill="#ede9fe"/>
  <text x="92" y="123" text-anchor="middle" font-size="16" font-weight="700" fill="#5b21b6">Tt</text>
  <!-- Cell tt -->
  <rect x="115" y="97" width="45" height="45" rx="2" fill="#fef9c3"/>
  <text x="137" y="123" text-anchor="middle" font-size="16" font-weight="700" fill="#92400e">tt</text>
  <!-- Key -->
  <text x="100" y="157" text-anchor="middle" font-size="8.5" fill="#1d4ed8">TT = tall (25%)   Tt = tall (50%)</text>
  <text x="100" y="169" text-anchor="middle" font-size="8.5" fill="#92400e">tt = short (25%)</text>
  <text x="100" y="181" text-anchor="middle" font-size="8" fill="#475569">Ratio: 3 tall : 1 short</text>
</svg>`;

// ── PHOTOSYNTHESIS ────────────────────────────────────────────────────────────
DIAGRAMS["photosynthesis-diagram"] = `<svg viewBox="0 0 280 158" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="pha" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#16a34a"/></marker>
    <marker id="phb" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#3b82f6"/></marker>
  </defs>
  <!-- Sun -->
  <circle cx="30" cy="30" r="18" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <text x="30" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#92400e">SUN</text>
  <!-- Leaf shape -->
  <path d="M140,30 C160,10 200,20 210,50 C215,65 200,90 180,100 C165,108 145,108 130,100 C110,88 100,65 105,48 C110,35 125,35 140,30Z" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
  <text x="157" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="white">LEAF</text>
  <text x="157" y="82" text-anchor="middle" font-size="7.5" fill="white">(chloroplasts)</text>
  <!-- Light arrow: Sun → leaf -->
  <line x1="50" y1="36" x2="102" y2="54" stroke="#f59e0b" stroke-width="2" marker-end="url(#pha)"/>
  <text x="68" y="40" font-size="7.5" fill="#d97706">light energy</text>
  <!-- CO2 arrow in -->
  <line x1="22" y1="75" x2="102" y2="75" stroke="#64748b" stroke-width="2" marker-end="url(#pha)"/>
  <text x="10" y="70" font-size="8" fill="#475569">CO₂</text>
  <!-- H2O arrow in (from below) -->
  <line x1="140" y1="148" x2="140" y2="108" stroke="#3b82f6" stroke-width="2" marker-end="url(#phb)"/>
  <text x="120" y="155" font-size="8" fill="#3b82f6">H₂O</text>
  <!-- Glucose arrow out (right) -->
  <line x1="212" y1="65" x2="258" y2="65" stroke="#16a34a" stroke-width="2" marker-end="url(#pha)"/>
  <text x="225" y="59" font-size="8" fill="#16a34a">glucose</text>
  <!-- O2 arrow out (right) -->
  <line x1="212" y1="82" x2="258" y2="82" stroke="#185fa5" stroke-width="2" marker-end="url(#pha)"/>
  <text x="228" y="96" font-size="8" fill="#185fa5">O₂</text>
  <!-- Equation box -->
  <rect x="8" y="116" width="264" height="30" rx="5" fill="#dcfce7"/>
  <text x="140" y="128" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">CO₂  +  H₂O  →  glucose  +  O₂</text>
  <text x="140" y="140" text-anchor="middle" font-size="7.5" fill="#475569">(using light energy in chloroplasts)</text>
</svg>`;

// ── ROCKS ─────────────────────────────────────────────────────────────────────
DIAGRAMS["earth-layers"] = `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="100" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Layers of the Earth</text>
  <!-- Inner core -->
  <circle cx="100" cy="100" r="28" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
  <text x="100" y="97" text-anchor="middle" font-size="7.5" font-weight="700" fill="#92400e">Inner</text>
  <text x="100" y="107" text-anchor="middle" font-size="7.5" font-weight="700" fill="#92400e">Core</text>
  <!-- Outer core -->
  <circle cx="100" cy="100" r="48" fill="none" stroke="#f97316" stroke-width="14" opacity="0.5"/>
  <circle cx="100" cy="100" r="41" fill="none" stroke="#fb923c" stroke-width="14" opacity="0.6"/>
  <!-- Mantle -->
  <circle cx="100" cy="100" r="68" fill="none" stroke="#ef4444" stroke-width="18" opacity="0.35"/>
  <!-- Crust (thin outer) -->
  <circle cx="100" cy="100" r="82" fill="none" stroke="#78716c" stroke-width="7" opacity="0.75"/>
  <!-- Labels with lines (right side, stacked) -->
  <line x1="100" y1="70" x2="100" y2="28" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="108" y="30" font-size="7.5" fill="#d97706">Inner core (solid, ~5500 °C)</text>
  <line x1="130" y1="82" x2="194" y2="60" stroke="#f97316" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="196" y="56" font-size="7.5" fill="#ea580c">Outer core</text>
  <text x="196" y="66" font-size="7" fill="#ea580c">(liquid iron/nickel)</text>
  <line x1="144" y1="100" x2="196" y2="88" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="198" y="84" font-size="7.5" fill="#dc2626">Mantle</text>
  <text x="198" y="94" font-size="7" fill="#dc2626">(semi-molten rock)</text>
  <line x1="156" y1="130" x2="198" y2="140" stroke="#78716c" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="200" y="137" font-size="7.5" fill="#57534e">Crust</text>
  <text x="200" y="147" font-size="7" fill="#57534e">(thin rocky layer)</text>
  <!-- Bottom summary -->
  <text x="140" y="172" text-anchor="middle" font-size="7.5" fill="#475569">Thinnest at surface → hottest at centre</text>
</svg>`;

DIAGRAMS["rock-cycle"] = `<svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="rca" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#475569"/></marker>
  </defs>
  <text x="140" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Rock Cycle</text>
  <!-- Magma (bottom centre) -->
  <ellipse cx="140" cy="148" rx="44" ry="18" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/>
  <text x="140" y="145" text-anchor="middle" font-size="9" font-weight="700" fill="#9a3412">MAGMA</text>
  <text x="140" y="157" text-anchor="middle" font-size="7" fill="#9a3412">(molten rock)</text>
  <!-- Igneous (top left) -->
  <ellipse cx="54" cy="55" rx="44" ry="20" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2"/>
  <text x="54" y="51" text-anchor="middle" font-size="9" font-weight="700" fill="#3730a3">IGNEOUS</text>
  <text x="54" y="62" text-anchor="middle" font-size="7" fill="#3730a3">cools from magma</text>
  <!-- Sedimentary (top right) -->
  <ellipse cx="226" cy="55" rx="44" ry="20" fill="#fef9c3" stroke="#ca8a04" stroke-width="2"/>
  <text x="226" y="51" text-anchor="middle" font-size="9" font-weight="700" fill="#854d0e">SEDIMENTARY</text>
  <text x="226" y="62" text-anchor="middle" font-size="7" fill="#854d0e">compressed layers</text>
  <!-- Metamorphic (middle) -->
  <ellipse cx="140" cy="92" rx="44" ry="20" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
  <text x="140" y="88" text-anchor="middle" font-size="9" font-weight="700" fill="#9d174d">METAMORPHIC</text>
  <text x="140" y="99" text-anchor="middle" font-size="7" fill="#9d174d">heat &amp; pressure</text>
  <!-- Arrows and labels -->
  <!-- Igneous → sedimentary: weathering/erosion -->
  <path d="M96,48 C150,28 170,35 182,48" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#rca)"/>
  <text x="140" y="32" text-anchor="middle" font-size="7.5" fill="#475569">weathering &amp; erosion</text>
  <!-- Sedimentary → metamorphic: heat/pressure -->
  <path d="M198,68 C180,82 168,86 182,90" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#rca)"/>
  <text x="218" y="86" font-size="7" fill="#475569">heat &amp;</text>
  <text x="218" y="95" font-size="7" fill="#475569">pressure</text>
  <!-- Metamorphic → magma: melting -->
  <path d="M140,112 L140,128" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#rca)"/>
  <text x="144" y="124" font-size="7" fill="#475569">melting</text>
  <!-- Magma → igneous: cooling -->
  <path d="M100,142 C75,130 60,100 58,78" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#rca)"/>
  <text x="48" y="120" font-size="7" fill="#475569">cooling</text>
  <!-- Igneous → metamorphic -->
  <path d="M72,68 C90,80 110,86 96,90" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#rca)"/>
  <text x="60" y="86" font-size="7" fill="#475569">heat &amp;</text>
  <text x="60" y="95" font-size="7" fill="#475569">pressure</text>
</svg>`;

// ── EARTH'S CYCLES ────────────────────────────────────────────────────────────
DIAGRAMS["water-cycle"] = `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="wca" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#3b82f6"/></marker>
    <marker id="wcb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#94a3b8"/></marker>
  </defs>
  <!-- Sky -->
  <rect x="0" y="0" width="280" height="162" rx="0" fill="#f0f9ff"/>
  <!-- Ground -->
  <rect x="0" y="120" width="280" height="42" fill="#d1fae5" rx="0"/>
  <!-- Ocean/sea -->
  <ellipse cx="36" cy="122" rx="36" ry="14" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="36" y="124" text-anchor="middle" font-size="8" fill="#1d4ed8">sea</text>
  <!-- Mountain -->
  <polygon points="180,120 220,58 260,120" fill="#d6d3d1" stroke="#78716c" stroke-width="1.5"/>
  <polygon points="205,82 220,58 235,82" fill="white" stroke="#94a3b8" stroke-width="1"/>
  <text x="220" y="116" text-anchor="middle" font-size="7.5" fill="#57534e">mountain</text>
  <!-- Cloud -->
  <ellipse cx="120" cy="36" rx="36" ry="18" fill="white" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="100" cy="40" rx="22" ry="14" fill="white" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="144" cy="40" rx="22" ry="14" fill="white" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="120" y="40" text-anchor="middle" font-size="8" fill="#475569">cloud</text>
  <!-- Evaporation arrows (sea → cloud) -->
  <path d="M28,108 C28,70 70,50 85,46" fill="none" stroke="#3b82f6" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#wca)"/>
  <text x="20" y="80" font-size="7.5" fill="#3b82f6" transform="rotate(-70 20 80)">evaporation</text>
  <!-- Precipitation (rain arrows) -->
  <line x1="100" y1="56" x2="92" y2="78" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#wca)"/>
  <line x1="118" y1="58" x2="110" y2="82" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#wca)"/>
  <line x1="134" y1="57" x2="128" y2="80" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#wca)"/>
  <text x="80" y="74" font-size="7.5" fill="#1d4ed8">precipitation</text>
  <!-- Run-off arrow (ground → sea) -->
  <path d="M150,122 C120,124 80,122 72,122" fill="none" stroke="#3b82f6" stroke-width="1.8" marker-end="url(#wca)"/>
  <text x="110" y="136" text-anchor="middle" font-size="7.5" fill="#3b82f6">surface run-off</text>
  <!-- Transpiration (tree leaf) -->
  <text x="165" y="116" font-size="20">🌳</text>
  <path d="M168,100 C164,80 140,58 134,54" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#wca)"/>
  <text x="174" y="88" font-size="7.5" fill="#16a34a">transpiration</text>
  <!-- Condensation label -->
  <text x="62" y="28" font-size="7.5" fill="#475569">condensation</text>
  <path d="M82,30 L96,32" stroke="#94a3b8" stroke-width="1" marker-end="url(#wcb)"/>
</svg>`;

// ── ASTRONOMY ─────────────────────────────────────────────────────────────────
DIAGRAMS["moon-phases"] = `<svg viewBox="0 0 280 102" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="11" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Phases of the Moon</text>
  <!-- New Moon -->
  <circle cx="18" cy="50" r="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="18" y="72" text-anchor="middle" font-size="6.5" fill="#475569">New</text>
  <!-- Waxing crescent -->
  <circle cx="52" cy="50" r="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M52,36 A14,14 0 1,1 52,64 A8,14 0 1,0 52,36" fill="#f1f5f9"/>
  <text x="52" y="72" text-anchor="middle" font-size="6.5" fill="#475569">Waxing</text>
  <text x="52" y="80" text-anchor="middle" font-size="6.5" fill="#475569">crescent</text>
  <!-- First quarter -->
  <circle cx="86" cy="50" r="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M86,36 A14,14 0 0,1 86,64 Z" fill="#f1f5f9"/>
  <text x="86" y="72" text-anchor="middle" font-size="6.5" fill="#475569">First</text>
  <text x="86" y="80" text-anchor="middle" font-size="6.5" fill="#475569">quarter</text>
  <!-- Waxing gibbous -->
  <circle cx="120" cy="50" r="14" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M120,36 A14,14 0 0,0 120,64 A8,14 0 0,0 120,36" fill="#1e293b"/>
  <text x="120" y="72" text-anchor="middle" font-size="6.5" fill="#475569">Waxing</text>
  <text x="120" y="80" text-anchor="middle" font-size="6.5" fill="#475569">gibbous</text>
  <!-- Full Moon -->
  <circle cx="154" cy="50" r="14" fill="#fef9c3" stroke="#f59e0b" stroke-width="2"/>
  <text x="154" y="72" text-anchor="middle" font-size="6.5" fill="#475569">Full</text>
  <!-- Waning gibbous -->
  <circle cx="188" cy="50" r="14" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M188,36 A14,14 0 0,1 188,64 A8,14 0 0,1 188,36" fill="#1e293b"/>
  <text x="188" y="72" text-anchor="middle" font-size="6.5" fill="#475569">Waning</text>
  <text x="188" y="80" text-anchor="middle" font-size="6.5" fill="#475569">gibbous</text>
  <!-- Last quarter -->
  <circle cx="222" cy="50" r="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M222,36 A14,14 0 0,0 222,64 Z" fill="#f1f5f9"/>
  <text x="222" y="72" text-anchor="middle" font-size="6.5" fill="#475569">Last</text>
  <text x="222" y="80" text-anchor="middle" font-size="6.5" fill="#475569">quarter</text>
  <!-- Waning crescent -->
  <circle cx="256" cy="50" r="14" fill="#1e293b" stroke="#94a3b8" stroke-width="1.5"/>
  <path d="M256,36 A14,14 0 1,0 256,64 A8,14 0 1,1 256,36" fill="#f1f5f9"/>
  <text x="256" y="72" text-anchor="middle" font-size="6.5" fill="#475569">Waning</text>
  <text x="256" y="80" text-anchor="middle" font-size="6.5" fill="#475569">crescent</text>
  <!-- Sun position note -->
  <text x="140" y="96" text-anchor="middle" font-size="7.5" fill="#94a3b8">☀ Sun is to the right — lit side faces sun. Moon orbits Earth every ~29 days.</text>
</svg>`;

DIAGRAMS["solar-system"] = `<svg viewBox="0 0 280 95" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="10" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Solar System — planets in order</text>
  <!-- orbital line -->
  <line x1="26" y1="44" x2="220" y2="44" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2"/>
  <!-- Sun -->
  <circle cx="14" cy="44" r="11" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <text x="14" y="64" text-anchor="middle" font-size="6" fill="#d97706">Sun</text>
  <!-- Mercury -->
  <circle cx="38" cy="44" r="3.5" fill="#a8a29e"/>
  <text x="38" y="56" text-anchor="middle" font-size="5.5" fill="#78716c">Mer.</text>
  <!-- Venus -->
  <circle cx="56" cy="44" r="4.5" fill="#fde68a"/>
  <text x="56" y="64" text-anchor="middle" font-size="5.5" fill="#78716c">Venus</text>
  <!-- Earth -->
  <circle cx="76" cy="44" r="5" fill="#3b82f6"/>
  <text x="76" y="56" text-anchor="middle" font-size="5.5" fill="#78716c">Earth</text>
  <!-- Mars -->
  <circle cx="96" cy="44" r="4" fill="#ef4444"/>
  <text x="96" y="64" text-anchor="middle" font-size="5.5" fill="#78716c">Mars</text>
  <!-- Asteroid belt -->
  <text x="112" y="47" font-size="6" fill="#94a3b8">···</text>
  <!-- Jupiter -->
  <circle cx="134" cy="44" r="9" fill="#fbbf24"/>
  <text x="134" y="62" text-anchor="middle" font-size="5.5" fill="#78716c">Jupiter</text>
  <!-- Saturn with rings -->
  <ellipse cx="162" cy="44" rx="16" ry="3" fill="none" stroke="#d97706" stroke-width="2" opacity="0.6"/>
  <circle cx="162" cy="44" r="7" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="162" y="62" text-anchor="middle" font-size="5.5" fill="#78716c">Saturn</text>
  <!-- Uranus -->
  <circle cx="192" cy="44" r="6" fill="#a5f3fc"/>
  <text x="192" y="62" text-anchor="middle" font-size="5.5" fill="#78716c">Uranus</text>
  <!-- Neptune -->
  <circle cx="216" cy="44" r="6" fill="#3b82f6"/>
  <text x="216" y="62" text-anchor="middle" font-size="5.5" fill="#78716c">Neptune</text>
  <!-- Mnemonic -->
  <rect x="234" y="26" width="44" height="36" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
  <text x="256" y="39" text-anchor="middle" font-size="6.5" fill="#475569">My Very</text>
  <text x="256" y="48" text-anchor="middle" font-size="6.5" fill="#475569">Educated</text>
  <text x="256" y="57" text-anchor="middle" font-size="6.5" fill="#475569">Mother...</text>
  <!-- Full names below -->
  <text x="140" y="78" text-anchor="middle" font-size="6.5" fill="#475569">Mercury · Venus · Earth · Mars · Jupiter · Saturn · Uranus · Neptune</text>
  <text x="140" y="90" text-anchor="middle" font-size="7" fill="#94a3b8">"My Very Educated Mother Just Served Us Nachos"</text>
</svg>`;
