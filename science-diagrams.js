// science-diagrams.js — SVG diagrams for science flashcards
// Each key matches the `image` field on a flashcard in data.js

const DIAGRAMS = {};

// ── CELLS ────────────────────────────────────────────────────────────────────
DIAGRAMS["cell-comparison"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="70" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Animal Cell</text>
  <text x="210" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Plant Cell</text>
  <line x1="140" y1="17" x2="140" y2="158" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- animal cell -->
  <ellipse cx="70" cy="88" rx="58" ry="62" fill="#dbeafe" stroke="#6366f1" stroke-width="2"/>
  <circle cx="70" cy="82" r="17" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
  <text x="70" y="86" text-anchor="middle" font-size="7.5" fill="#1e3a5f">nucleus</text>
  <ellipse cx="44" cy="65" rx="12" ry="6" fill="#fde68a" stroke="#ca8a04" stroke-width="1.2" transform="rotate(-25 44 65)"/>
  <ellipse cx="99" cy="107" rx="12" ry="6" fill="#fde68a" stroke="#ca8a04" stroke-width="1.2" transform="rotate(20 99 107)"/>
  <text x="18" y="129" font-size="7" fill="#ca8a04">mitochondria</text>
  <text x="50" y="118" font-size="6.5" fill="#475569">cytoplasm</text>
  <text x="8" y="157" font-size="7" fill="#6366f1">cell membrane</text>
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
  <text x="140" y="96" text-anchor="middle" font-size="7" fill="#475569">~10% of energy passes to the next level; rest is used in life processes</text>
</svg>`;

// ── PARTICLES ────────────────────────────────────────────────────────────────
DIAGRAMS["particle-states"] = `<svg viewBox="0 0 280 152" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <rect x="3" y="4" width="84" height="94" rx="6" fill="#f8fafc" stroke="#6366f1" stroke-width="1.5"/>
  <rect x="98" y="4" width="84" height="94" rx="6" fill="#f8fafc" stroke="#6366f1" stroke-width="1.5"/>
  <rect x="193" y="4" width="84" height="94" rx="6" fill="#f8fafc" stroke="#6366f1" stroke-width="1.5"/>
  <!-- SOLID grid -->
  <g fill="#6366f1">
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
  <text x="45" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#6366f1">SOLID</text>
  <text x="140" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#3b82f6">LIQUID</text>
  <text x="235" y="110" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">GAS</text>
  <text x="45" y="122" text-anchor="middle" font-size="7.5" fill="#475569">close, ordered</text>
  <text x="45" y="132" text-anchor="middle" font-size="7.5" fill="#475569">vibrate in place</text>
  <text x="140" y="122" text-anchor="middle" font-size="7.5" fill="#475569">close, random</text>
  <text x="140" y="132" text-anchor="middle" font-size="7.5" fill="#475569">slide past each other</text>
  <text x="235" y="122" text-anchor="middle" font-size="7.5" fill="#475569">spread apart</text>
  <text x="235" y="132" text-anchor="middle" font-size="7.5" fill="#475569">move fast &amp; freely</text>
  <text x="140" y="148" text-anchor="middle" font-size="7" fill="#94a3b8">Heating: solid → melting → liquid → boiling → gas</text>
</svg>`;

// ── FORCES ───────────────────────────────────────────────────────────────────
DIAGRAMS["force-arrows"] = `<svg viewBox="0 0 280 118" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#ef4444"/></marker>
  </defs>
  <!-- BALANCED -->
  <text x="70" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">BALANCED</text>
  <rect x="36" y="38" width="68" height="36" rx="5" fill="#dbeafe" stroke="#6366f1" stroke-width="2"/>
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
  <rect x="100" y="58" width="80" height="44" rx="8" fill="#f0f9ff" stroke="#6366f1" stroke-width="2"/>
  <text x="140" y="76" text-anchor="middle" font-size="9" font-weight="700" fill="#6366f1">EXPERIMENT</text>
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
  <rect x="10" y="34" width="120" height="70" rx="4" fill="none" stroke="#6366f1" stroke-width="2"/>
  <!-- battery symbol (left side) -->
  <line x1="10" y1="61" x2="10" y2="47" stroke="#6366f1" stroke-width="2"/>
  <line x1="4" y1="61" x2="16" y2="61" stroke="#6366f1" stroke-width="3"/>
  <line x1="7" y1="66" x2="13" y2="66" stroke="#6366f1" stroke-width="1.5"/>
  <text x="10" y="82" text-anchor="middle" font-size="7" fill="#6366f1">+/−</text>
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
  <line x1="152" y1="34" x2="270" y2="34" stroke="#6366f1" stroke-width="2"/>
  <line x1="152" y1="104" x2="270" y2="104" stroke="#6366f1" stroke-width="2"/>
  <line x1="152" y1="34" x2="152" y2="104" stroke="#6366f1" stroke-width="2"/>
  <line x1="270" y1="34" x2="270" y2="104" stroke="#6366f1" stroke-width="2"/>
  <!-- battery (left side) -->
  <line x1="152" y1="61" x2="152" y2="47" stroke="#6366f1" stroke-width="2"/>
  <line x1="146" y1="61" x2="158" y2="61" stroke="#6366f1" stroke-width="3"/>
  <line x1="149" y1="66" x2="155" y2="66" stroke="#6366f1" stroke-width="1.5"/>
  <!-- branch lines -->
  <line x1="200" y1="34" x2="200" y2="104" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="2,1"/>
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
    <marker id="wpa" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#6366f1"/></marker>
    <marker id="wpb" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto"><polygon points="6 0,0 3,6 6" fill="#6366f1"/></marker>
    <marker id="wpc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#dc2626"/></marker>
  </defs>
  <!-- Title -->
  <text x="90" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Transverse Wave Properties</text>
  <!-- Equilibrium line -->
  <line x1="14" y1="75" x2="266" y2="75" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
  <!-- Wave (2 full cycles) -->
  <path d="M14,75 C36,35 58,35 80,75 C102,115 124,115 146,75 C168,35 190,35 212,75 C234,115 256,115 266,75" fill="none" stroke="#6366f1" stroke-width="2.5"/>
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
  <rect x="150" y="28" width="34" height="28" rx="2" fill="#3b82f6"/>
  <rect x="186" y="28" width="34" height="28" rx="2" fill="#3b82f6"/>
  <rect x="222" y="28" width="52" height="28" rx="2" fill="#6366f1"/>
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
  <line x1="212" y1="82" x2="258" y2="82" stroke="#6366f1" stroke-width="2" marker-end="url(#pha)"/>
  <text x="228" y="96" font-size="8" fill="#6366f1">O₂</text>
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

// ── REPRODUCTION ──────────────────────────────────────────────────────────────
DIAGRAMS["pollination-diagram"] = `<svg viewBox="0 0 280 145" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="pda" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0,7 3.5,0 7" fill="#ca8a04"/>
    </marker>
  </defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Pollination: Flower Parts</text>
  <!-- STAMEN box -->
  <rect x="4" y="18" width="110" height="110" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.8"/>
  <text x="59" y="32" text-anchor="middle" font-size="9" font-weight="700" fill="#92400e">Stamen &#x2642;</text>
  <!-- Anther (pollen-producing) -->
  <ellipse cx="59" cy="56" rx="26" ry="13" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
  <text x="59" y="59" text-anchor="middle" font-size="7.5" fill="#78350f">anther</text>
  <!-- Pollen grains released from anther -->
  <circle cx="28" cy="51" r="4" fill="#d97706"/>
  <circle cx="24" cy="60" r="4" fill="#d97706"/>
  <circle cx="92" cy="50" r="4" fill="#d97706"/>
  <circle cx="95" cy="60" r="4" fill="#d97706"/>
  <!-- Filament (stamen stem) -->
  <rect x="55" y="69" width="8" height="42" rx="3" fill="#16a34a"/>
  <text x="68" y="94" font-size="7" fill="#15803d">filament</text>
  <!-- Legend key -->
  <circle cx="13" cy="119" r="4" fill="#d97706"/>
  <text x="20" y="122" font-size="6.5" fill="#92400e">= pollen grains</text>
  <!-- Dashed pollen transfer arrow -->
  <line x1="116" y1="54" x2="163" y2="46" stroke="#ca8a04" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#pda)"/>
  <text x="140" y="42" text-anchor="middle" font-size="7" fill="#ca8a04">pollen transfer</text>
  <!-- PISTIL box -->
  <rect x="168" y="18" width="108" height="110" rx="6" fill="#fdf4ff" stroke="#7c3aed" stroke-width="1.8"/>
  <text x="222" y="32" text-anchor="middle" font-size="9" font-weight="700" fill="#a855f7">Pistil &#x2640;</text>
  <!-- Stigma (receives pollen) -->
  <ellipse cx="222" cy="48" rx="24" ry="10" fill="#c084fc" stroke="#7c3aed" stroke-width="2"/>
  <text x="222" y="51" text-anchor="middle" font-size="7.5" fill="#3b0764">stigma</text>
  <!-- Style (connects stigma to ovary) -->
  <rect x="219" y="58" width="6" height="28" rx="2" fill="#a78bfa"/>
  <text x="233" y="74" font-size="7" fill="#a855f7">style</text>
  <!-- Ovary (contains ovules) -->
  <ellipse cx="222" cy="100" rx="22" ry="14" fill="#e9d5ff" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="222" y="97" text-anchor="middle" font-size="7.5" fill="#4c1d95">ovary</text>
  <!-- Ovule inside ovary -->
  <circle cx="222" cy="106" r="5.5" fill="#c084fc" stroke="#7c3aed" stroke-width="1.2"/>
  <line x1="228" y1="104" x2="240" y2="104" stroke="#7c3aed" stroke-width="1"/>
  <text x="242" y="107" font-size="6.5" fill="#4c1d95">ovule</text>
  <!-- Bottom legend -->
  <text x="140" y="138" text-anchor="middle" font-size="7" fill="#475569">anther &#x2192; pollen &#x2192; stigma &#x2192; style &#x2192; fertilises ovule &#x2192; seed forms</text>
</svg>`;

// ── ELEMENTS &amp; REACTIONS ───────────────────────────────────────────────────────
DIAGRAMS["separation-techniques"] = `<svg viewBox="0 0 280 152" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Three boxes -->
  <rect x="4" y="4" width="82" height="98" rx="6" fill="#f0f9ff" stroke="#6366f1" stroke-width="1.5"/>
  <rect x="99" y="4" width="82" height="98" rx="6" fill="#fff7ed" stroke="#ea580c" stroke-width="1.5"/>
  <rect x="194" y="4" width="82" height="98" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <!-- === FILTRATION === -->
  <text x="45" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#6366f1">Filtration</text>
  <!-- Funnel (trapezoid) -->
  <polygon points="12,24 78,24 60,58 30,58" fill="#bfdbfe" stroke="#6366f1" stroke-width="1.5" fill-opacity="0.6"/>
  <!-- Filter paper (diagonal fold line inside funnel) -->
  <line x1="30" y1="58" x2="60" y2="24" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4,3"/>
  <!-- Residue on filter paper -->
  <ellipse cx="34" cy="46" rx="8" ry="4" fill="#94a3b8" opacity="0.9" transform="rotate(-30 34 46)"/>
  <!-- Funnel stem -->
  <rect x="41" y="58" width="8" height="17" rx="2" fill="#93c5fd" stroke="#6366f1" stroke-width="1"/>
  <!-- Collection flask -->
  <ellipse cx="45" cy="84" rx="14" ry="9" fill="#dbeafe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="14" y="44" font-size="6.5" fill="#475569">residue</text>
  <text x="45" y="96" text-anchor="middle" font-size="7" fill="#3b82f6">filtrate</text>
  <!-- === EVAPORATION === -->
  <text x="140" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#ea580c">Evaporation</text>
  <!-- Evaporating dish (shallow bowl shape) -->
  <path d="M106,65 Q140,55 174,65 L170,73 Q140,81 110,73 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.5"/>
  <!-- Crystal deposits on dish -->
  <polygon points="131,63 134,57 137,63" fill="#f97316"/>
  <polygon points="143,63 146,57 149,63" fill="#f97316"/>
  <!-- Tripod legs -->
  <line x1="113" y1="74" x2="108" y2="88" stroke="#64748b" stroke-width="1.5"/>
  <line x1="167" y1="74" x2="172" y2="88" stroke="#64748b" stroke-width="1.5"/>
  <!-- Bunsen flame -->
  <path d="M128,90 Q131,82 134,90 Q136,79 138,90 Q140,82 142,90 Q144,79 146,90 Q148,83 151,90 Z" fill="#f97316" opacity="0.85"/>
  <!-- Water vapour rising (dashed paths) -->
  <path d="M116,53 Q113,45 116,37" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M140,51 Q137,43 140,35" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M164,53 Q167,45 164,37" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="140" y="30" text-anchor="middle" font-size="6.5" fill="#94a3b8">H&#x2082;O vapour &#x2191;</text>
  <!-- === CHROMATOGRAPHY === -->
  <text x="235" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#16a34a">Chromatography</text>
  <!-- Paper strip -->
  <rect x="219" y="22" width="34" height="66" fill="#fafaf9" stroke="#78716c" stroke-width="1.5"/>
  <!-- Solvent line near bottom -->
  <line x1="219" y1="80" x2="253" y2="80" stroke="#3b82f6" stroke-width="2"/>
  <!-- Origin spot (mixture applied here) -->
  <circle cx="236" cy="81" r="4" fill="#1e293b"/>
  <!-- Separated component spots at different heights -->
  <ellipse cx="236" cy="70" rx="5" ry="3.5" fill="#dc2626" opacity="0.85"/>
  <ellipse cx="236" cy="58" rx="5" ry="3.5" fill="#f97316" opacity="0.85"/>
  <ellipse cx="236" cy="45" rx="5" ry="3.5" fill="#7c3aed" opacity="0.85"/>
  <text x="257" y="73" font-size="6" fill="#dc2626">A</text>
  <text x="257" y="61" font-size="6" fill="#f97316">B</text>
  <text x="257" y="48" font-size="6" fill="#7c3aed">C</text>
  <text x="201" y="83" font-size="6" fill="#3b82f6">solvent</text>
  <!-- Below-box labels -->
  <text x="45" y="113" text-anchor="middle" font-size="7" fill="#6366f1">Insoluble solid</text>
  <text x="45" y="123" text-anchor="middle" font-size="7" fill="#6366f1">from a liquid</text>
  <text x="140" y="113" text-anchor="middle" font-size="7" fill="#ea580c">Dissolved solid</text>
  <text x="140" y="123" text-anchor="middle" font-size="7" fill="#ea580c">from a solvent</text>
  <text x="235" y="113" text-anchor="middle" font-size="7" fill="#16a34a">Soluble pigments</text>
  <text x="235" y="123" text-anchor="middle" font-size="7" fill="#16a34a">in a mixture</text>
  <text x="140" y="140" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1e293b">Separation Techniques</text>
  <text x="140" y="150" text-anchor="middle" font-size="6.5" fill="#475569">Choose the right method for the type of mixture</text>
</svg>`;

// ── ENERGY TRANSFERS ──────────────────────────────────────────────────────────
DIAGRAMS["heat-transfer-methods"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="hta" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0,7 3.5,0 7" fill="#f97316"/>
    </marker>
    <marker id="htb" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <polygon points="0 0,7 3.5,0 7" fill="#3b82f6"/>
    </marker>
  </defs>
  <!-- Three boxes -->
  <rect x="4" y="4" width="82" height="98" rx="6" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <rect x="99" y="4" width="82" height="98" rx="6" fill="#eff6ff" stroke="#6366f1" stroke-width="1.5"/>
  <rect x="194" y="4" width="82" height="98" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <!-- === CONDUCTION === -->
  <text x="45" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#c2410c">Conduction</text>
  <!-- Solid bar with particle grid -->
  <rect x="8" y="26" width="74" height="46" rx="4" fill="#f0f9ff" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="10" y="23" font-size="7" fill="#dc2626">HOT</text>
  <text x="62" y="23" font-size="7" fill="#6366f1">COOL</text>
  <!-- Row 1: particles red &#x2192; blue left to right -->
  <circle cx="18" cy="38" r="6" fill="#ef4444"/>
  <circle cx="30" cy="44" r="6" fill="#f97316"/>
  <circle cx="42" cy="38" r="6" fill="#fbbf24"/>
  <circle cx="54" cy="44" r="6" fill="#93c5fd"/>
  <circle cx="66" cy="38" r="6" fill="#3b82f6"/>
  <!-- Row 2 -->
  <circle cx="24" cy="56" r="6" fill="#ef4444"/>
  <circle cx="36" cy="62" r="6" fill="#f97316"/>
  <circle cx="48" cy="56" r="6" fill="#fbbf24"/>
  <circle cx="60" cy="62" r="6" fill="#93c5fd"/>
  <circle cx="72" cy="56" r="6" fill="#3b82f6"/>
  <!-- Heat flow arrow -->
  <line x1="10" y1="82" x2="78" y2="82" stroke="#f97316" stroke-width="2.5" marker-end="url(#hta)"/>
  <text x="45" y="95" text-anchor="middle" font-size="7" fill="#f97316">heat &#x2192;</text>
  <!-- Label -->
  <text x="45" y="112" text-anchor="middle" font-size="7" fill="#475569">Solid: vibrating</text>
  <text x="45" y="122" text-anchor="middle" font-size="7" fill="#475569">particles pass energy</text>
  <!-- === CONVECTION === -->
  <text x="140" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1d4ed8">Convection</text>
  <!-- Fluid container -->
  <rect x="108" y="24" width="64" height="60" rx="3" fill="#bfdbfe" stroke="#6366f1" stroke-width="1.5" opacity="0.5"/>
  <!-- Hot fluid rising (left side) -->
  <circle cx="118" cy="72" r="5" fill="#ef4444" opacity="0.9"/>
  <circle cx="118" cy="58" r="5" fill="#f97316" opacity="0.9"/>
  <circle cx="118" cy="44" r="5" fill="#fbbf24" opacity="0.85"/>
  <line x1="118" y1="78" x2="118" y2="33" stroke="#ef4444" stroke-width="1.5" marker-end="url(#hta)"/>
  <!-- Cool fluid sinking (right side) -->
  <circle cx="162" cy="36" r="5" fill="#93c5fd" opacity="0.9"/>
  <circle cx="162" cy="50" r="5" fill="#60a5fa" opacity="0.9"/>
  <circle cx="162" cy="64" r="5" fill="#3b82f6" opacity="0.85"/>
  <line x1="162" y1="30" x2="162" y2="75" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#htb)"/>
  <!-- Circulation arrows at top and bottom -->
  <line x1="123" y1="28" x2="157" y2="28" stroke="#f97316" stroke-width="1.5" marker-end="url(#hta)"/>
  <line x1="157" y1="78" x2="123" y2="78" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#htb)"/>
  <!-- Flame below container -->
  <path d="M128,96 Q131,88 134,96 Q136,84 138,96 Q140,88 142,96 Q144,84 146,96 Q149,89 152,96 Z" fill="#f97316" opacity="0.85"/>
  <text x="106" y="82" font-size="6.5" fill="#dc2626">&#x2191;hot</text>
  <text x="156" y="32" font-size="6.5" fill="#6366f1">&#x2193;cool</text>
  <!-- Label -->
  <text x="140" y="112" text-anchor="middle" font-size="7" fill="#475569">Fluid: warm rises,</text>
  <text x="140" y="122" text-anchor="middle" font-size="7" fill="#475569">cool sinks (current)</text>
  <!-- === RADIATION === -->
  <text x="235" y="17" text-anchor="middle" font-size="8.5" font-weight="700" fill="#dc2626">Radiation</text>
  <!-- Hot source -->
  <circle cx="210" cy="55" r="14" fill="#fde68a" stroke="#f59e0b" stroke-width="2"/>
  <text x="210" y="59" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">HOT</text>
  <!-- Infrared EM waves (wavy lines) -->
  <path d="M226,43 Q232,39 238,43 Q244,47 250,43 Q256,39 262,43 Q268,47 274,43" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M226,55 Q232,51 238,55 Q244,59 250,55 Q256,51 262,55 Q268,59 274,55" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M226,67 Q232,63 238,67 Q244,71 250,67 Q256,63 262,67 Q268,71 274,67" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="251" y="34" text-anchor="middle" font-size="6.5" fill="#dc2626">infrared</text>
  <text x="251" y="43" text-anchor="middle" font-size="6" fill="#dc2626">waves &#x2192;</text>
  <!-- No medium needed badge -->
  <rect x="198" y="76" width="72" height="18" rx="3" fill="#fef9c3" stroke="#ca8a04" stroke-width="1"/>
  <text x="234" y="88" text-anchor="middle" font-size="6.5" font-weight="600" fill="#92400e">no medium needed</text>
  <!-- Label -->
  <text x="235" y="112" text-anchor="middle" font-size="7" fill="#475569">EM waves: works even</text>
  <text x="235" y="122" text-anchor="middle" font-size="7" fill="#475569">in a vacuum</text>
  <!-- Overall footer -->
  <text x="140" y="140" text-anchor="middle" font-size="8.5" font-weight="700" fill="#1e293b">Heat Transfer Methods</text>
  <text x="140" y="151" text-anchor="middle" font-size="6.5" fill="#475569">Only radiation travels through a vacuum &#x2014; conduction and convection need matter</text>
</svg>`;

// ── CLASSIFICATION ────────────────────────────────────────────────────────────
DIAGRAMS["five-kingdoms"] = `<svg viewBox="0 0 280 145" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Five Kingdoms</text>
  <!-- Five kingdom columns -->
  <rect x="4" y="18" width="48" height="116" rx="5" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <rect x="57" y="18" width="48" height="116" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <rect x="110" y="18" width="48" height="116" rx="5" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <rect x="163" y="18" width="48" height="116" rx="5" fill="#dbeafe" stroke="#6366f1" stroke-width="1.5"/>
  <rect x="216" y="18" width="48" height="116" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <!-- ANIMALIA -->
  <text x="28" y="37" text-anchor="middle" font-size="17">&#x1F981;</text>
  <text x="28" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#92400e">Animalia</text>
  <text x="28" y="63" text-anchor="middle" font-size="6" fill="#475569">Multicellular</text>
  <text x="28" y="73" text-anchor="middle" font-size="6" fill="#475569">No cell wall</text>
  <text x="28" y="83" text-anchor="middle" font-size="6" fill="#475569">Heterotroph</text>
  <line x1="6" y1="90" x2="50" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="28" y="101" text-anchor="middle" font-size="5.5" fill="#92400e" font-style="italic">Lion, human</text>
  <!-- PLANTAE -->
  <text x="81" y="37" text-anchor="middle" font-size="17">&#x1F33F;</text>
  <text x="81" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#15803d">Plantae</text>
  <text x="81" y="63" text-anchor="middle" font-size="6" fill="#475569">Multicellular</text>
  <text x="81" y="73" text-anchor="middle" font-size="6" fill="#475569">Cellulose wall</text>
  <text x="81" y="83" text-anchor="middle" font-size="6" fill="#475569">Autotroph</text>
  <line x1="59" y1="90" x2="103" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="81" y="101" text-anchor="middle" font-size="5.5" fill="#15803d" font-style="italic">Oak, fern</text>
  <!-- FUNGI -->
  <text x="134" y="37" text-anchor="middle" font-size="17">&#x1F344;</text>
  <text x="134" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#5b21b6">Fungi</text>
  <text x="134" y="63" text-anchor="middle" font-size="6" fill="#475569">Chitin wall</text>
  <text x="134" y="73" text-anchor="middle" font-size="6" fill="#475569">Saprotrophic</text>
  <text x="134" y="83" text-anchor="middle" font-size="6" fill="#475569">Decomposer</text>
  <line x1="112" y1="90" x2="156" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="134" y="101" text-anchor="middle" font-size="5.5" fill="#5b21b6" font-style="italic">Mushroom, yeast</text>
  <!-- PROTISTA -->
  <text x="187" y="37" text-anchor="middle" font-size="17">&#x1F52C;</text>
  <text x="187" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Protista</text>
  <text x="187" y="63" text-anchor="middle" font-size="6" fill="#475569">Unicellular</text>
  <text x="187" y="73" text-anchor="middle" font-size="6" fill="#475569">Eukaryotic</text>
  <text x="187" y="83" text-anchor="middle" font-size="6" fill="#475569">Diverse group</text>
  <line x1="165" y1="90" x2="209" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="187" y="101" text-anchor="middle" font-size="5.5" fill="#1d4ed8" font-style="italic">Amoeba, algae</text>
  <!-- PROKARYOTA -->
  <text x="240" y="37" text-anchor="middle" font-size="17">&#x1F9A0;</text>
  <text x="240" y="51" text-anchor="middle" font-size="7" font-weight="700" fill="#991b1b">Prokaryota</text>
  <text x="240" y="63" text-anchor="middle" font-size="6" fill="#475569">Unicellular</text>
  <text x="240" y="73" text-anchor="middle" font-size="6" fill="#475569">No nucleus</text>
  <text x="240" y="83" text-anchor="middle" font-size="6" fill="#475569">No organelles</text>
  <line x1="218" y1="90" x2="262" y2="90" stroke="#e2e8f0" stroke-width="1"/>
  <text x="240" y="101" text-anchor="middle" font-size="5.5" fill="#991b1b" font-style="italic">Bacteria</text>
  <!-- Comparison rows (nucleus presence + cell type) -->
  <text x="28" y="114" text-anchor="middle" font-size="6" fill="#16a34a">nucleus &#x2713;</text>
  <text x="81" y="114" text-anchor="middle" font-size="6" fill="#16a34a">nucleus &#x2713;</text>
  <text x="134" y="114" text-anchor="middle" font-size="6" fill="#16a34a">nucleus &#x2713;</text>
  <text x="187" y="114" text-anchor="middle" font-size="6" fill="#16a34a">nucleus &#x2713;</text>
  <text x="240" y="114" text-anchor="middle" font-size="6" fill="#dc2626">nucleus &#x2717;</text>
  <text x="28" y="126" text-anchor="middle" font-size="6" fill="#475569">multi</text>
  <text x="81" y="126" text-anchor="middle" font-size="6" fill="#475569">multi</text>
  <text x="134" y="126" text-anchor="middle" font-size="6" fill="#475569">uni/multi</text>
  <text x="187" y="126" text-anchor="middle" font-size="6" fill="#475569">uni</text>
  <text x="240" y="126" text-anchor="middle" font-size="6" fill="#475569">uni</text>
  <!-- Footer -->
  <text x="140" y="142" text-anchor="middle" font-size="7" fill="#475569">Key divide: Eukaryota (nucleus &#x2713;) vs Prokaryota (no nucleus)</text>
</svg>`;

// ── CELL ORGANISATION ────────────────────────────────────────────────────────
DIAGRAMS["cell-organisation"] = `<svg viewBox="0 0 280 105" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="coa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#64748b"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Levels of Organisation</text>
  <!-- Cell -->
  <rect x="4" y="22" width="42" height="38" rx="6" fill="#dbeafe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="25" y="36" text-anchor="middle" font-size="13">&#x1F52C;</text>
  <text x="25" y="50" text-anchor="middle" font-size="7" font-weight="700" fill="#6366f1">Cell</text>
  <line x1="48" y1="41" x2="56" y2="41" stroke="#64748b" stroke-width="2" marker-end="url(#coa)"/>
  <!-- Tissue -->
  <rect x="58" y="22" width="42" height="38" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="79" y="36" text-anchor="middle" font-size="13">&#x1F9EB;</text>
  <text x="79" y="50" text-anchor="middle" font-size="7" font-weight="700" fill="#15803d">Tissue</text>
  <line x1="102" y1="41" x2="110" y2="41" stroke="#64748b" stroke-width="2" marker-end="url(#coa)"/>
  <!-- Organ -->
  <rect x="112" y="22" width="42" height="38" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="133" y="36" text-anchor="middle" font-size="13">&#x1FAC0;</text>
  <text x="133" y="50" text-anchor="middle" font-size="7" font-weight="700" fill="#92400e">Organ</text>
  <line x1="156" y1="41" x2="164" y2="41" stroke="#64748b" stroke-width="2" marker-end="url(#coa)"/>
  <!-- Organ System -->
  <rect x="166" y="22" width="52" height="38" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="192" y="36" text-anchor="middle" font-size="13">&#x1FAC1;</text>
  <text x="192" y="50" text-anchor="middle" font-size="6.5" font-weight="700" fill="#5b21b6">Organ Sys.</text>
  <line x1="220" y1="41" x2="228" y2="41" stroke="#64748b" stroke-width="2" marker-end="url(#coa)"/>
  <!-- Organism -->
  <rect x="230" y="22" width="46" height="38" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="253" y="36" text-anchor="middle" font-size="13">&#x1F9D1;</text>
  <text x="253" y="50" text-anchor="middle" font-size="6.5" font-weight="700" fill="#991b1b">Organism</text>
  <!-- Example row -->
  <text x="25" y="74" text-anchor="middle" font-size="6" fill="#475569">Muscle</text>
  <text x="25" y="82" text-anchor="middle" font-size="6" fill="#475569">cell</text>
  <text x="79" y="74" text-anchor="middle" font-size="6" fill="#475569">Muscle</text>
  <text x="79" y="82" text-anchor="middle" font-size="6" fill="#475569">tissue</text>
  <text x="133" y="78" text-anchor="middle" font-size="6" fill="#475569">Heart</text>
  <text x="192" y="74" text-anchor="middle" font-size="6" fill="#475569">Circulatory</text>
  <text x="192" y="82" text-anchor="middle" font-size="6" fill="#475569">system</text>
  <text x="253" y="78" text-anchor="middle" font-size="6" fill="#475569">Human</text>
  <text x="140" y="100" text-anchor="middle" font-size="7.5" fill="#475569">Each level is built from many of the level below it</text>
</svg>`;

// ── CHANGES OF STATE ─────────────────────────────────────────────────────────
DIAGRAMS["changes-of-state"] = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="csa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#dc2626"/></marker>
    <marker id="csb" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#3b82f6"/></marker>
  </defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Changes of State</text>
  <!-- Three state boxes -->
  <rect x="8" y="40" width="70" height="36" rx="8" fill="#dbeafe" stroke="#6366f1" stroke-width="2"/>
  <text x="43" y="63" text-anchor="middle" font-size="11" font-weight="700" fill="#6366f1">SOLID</text>
  <rect x="105" y="40" width="70" height="36" rx="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="140" y="63" text-anchor="middle" font-size="11" font-weight="700" fill="#3b82f6">LIQUID</text>
  <rect x="202" y="40" width="70" height="36" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
  <text x="237" y="63" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">GAS</text>
  <!-- Forward arrows (heating) -->
  <line x1="80" y1="50" x2="103" y2="50" stroke="#dc2626" stroke-width="2" marker-end="url(#csa)"/>
  <text x="92" y="44" text-anchor="middle" font-size="6.5" fill="#dc2626">melting</text>
  <line x1="177" y1="50" x2="200" y2="50" stroke="#dc2626" stroke-width="2" marker-end="url(#csa)"/>
  <text x="188" y="38" text-anchor="middle" font-size="6.5" fill="#dc2626">boiling /</text>
  <text x="188" y="46" text-anchor="middle" font-size="6.5" fill="#dc2626">evaporating</text>
  <!-- Reverse arrows (cooling) -->
  <line x1="103" y1="68" x2="80" y2="68" stroke="#3b82f6" stroke-width="2" marker-end="url(#csb)"/>
  <text x="92" y="82" text-anchor="middle" font-size="6.5" fill="#3b82f6">freezing</text>
  <line x1="200" y1="68" x2="177" y2="68" stroke="#3b82f6" stroke-width="2" marker-end="url(#csb)"/>
  <text x="188" y="82" text-anchor="middle" font-size="6.5" fill="#3b82f6">condensing</text>
  <!-- Sublimation arc -->
  <path d="M43,40 C43,18 237,18 237,40" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#csa)"/>
  <text x="140" y="26" text-anchor="middle" font-size="7" fill="#d97706">sublimation (solid &#x2192; gas directly)</text>
  <!-- Footer -->
  <text x="140" y="100" text-anchor="middle" font-size="7.5" fill="#dc2626">&#x2192; Heating: gives particles more energy</text>
  <text x="140" y="112" text-anchor="middle" font-size="7.5" fill="#3b82f6">&#x2190; Cooling: particles lose energy</text>
</svg>`;

// ── DIGESTIVE SYSTEM ─────────────────────────────────────────────────────────
DIAGRAMS["digestive-system"] = `<svg viewBox="0 0 280 178" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="80" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Digestive System</text>
  <!-- Mouth -->
  <ellipse cx="80" cy="30" rx="18" ry="10" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="80" y="33" text-anchor="middle" font-size="7" fill="#7f1d1d">Mouth</text>
  <text x="130" y="28" font-size="6" fill="#475569">chewing + amylase</text>
  <line x1="100" y1="28" x2="126" y2="28" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
  <!-- Oesophagus -->
  <rect x="76" y="40" width="8" height="22" rx="3" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="130" y="52" font-size="6" fill="#475569">oesophagus</text>
  <line x1="86" y1="51" x2="126" y2="51" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
  <!-- Stomach -->
  <path d="M60,62 Q55,62 52,72 Q48,90 60,98 Q80,108 100,95 Q108,88 104,72 Q100,62 96,62 Z" fill="#fde68a" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="78" y="82" text-anchor="middle" font-size="7" fill="#78350f">Stomach</text>
  <text x="130" y="76" font-size="6" fill="#475569">acid + protease</text>
  <line x1="100" y1="76" x2="126" y2="76" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
  <!-- Small intestine -->
  <path d="M78,100 Q50,112 60,120 Q70,128 90,120 Q110,112 100,128 Q90,140 70,132" fill="none" stroke="#f97316" stroke-width="4" stroke-linecap="round"/>
  <text x="135" y="118" font-size="6" fill="#c2410c" font-weight="600">Small intestine</text>
  <text x="135" y="128" font-size="6" fill="#475569">digestion + absorption</text>
  <line x1="102" y1="118" x2="131" y2="118" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
  <!-- Large intestine -->
  <path d="M70,132 Q30,132 30,148 Q30,164 80,164 Q120,164 120,150 Q120,140 100,138" fill="none" stroke="#16a34a" stroke-width="5" stroke-linecap="round"/>
  <text x="135" y="152" font-size="6" fill="#15803d" font-weight="600">Large intestine</text>
  <text x="135" y="162" font-size="6" fill="#475569">absorbs water</text>
  <line x1="120" y1="152" x2="131" y2="152" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="2,2"/>
  <!-- Accessory organs -->
  <rect x="200" y="62" width="70" height="50" rx="5" fill="#f0f9ff" stroke="#6366f1" stroke-width="1"/>
  <text x="235" y="74" text-anchor="middle" font-size="7" font-weight="600" fill="#6366f1">Accessory organs</text>
  <text x="235" y="86" text-anchor="middle" font-size="6.5" fill="#475569">Liver: makes bile</text>
  <text x="235" y="96" text-anchor="middle" font-size="6.5" fill="#475569">Pancreas: enzymes</text>
  <text x="235" y="106" text-anchor="middle" font-size="6.5" fill="#475569">(help small intestine)</text>
  <text x="140" y="176" text-anchor="middle" font-size="7" fill="#475569">Mouth &#x2192; Oesophagus &#x2192; Stomach &#x2192; Small intestine &#x2192; Large intestine &#x2192; Rectum</text>
</svg>`;

// ── REFLEX ARC ───────────────────────────────────────────────────────────────
DIAGRAMS["reflex-arc"] = `<svg viewBox="0 0 280 118" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="rfa" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#dc2626"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Reflex Arc</text>
  <!-- Stimulus -->
  <text x="16" y="56" text-anchor="middle" font-size="16">&#x1F525;</text>
  <text x="16" y="72" text-anchor="middle" font-size="6.5" fill="#dc2626">stimulus</text>
  <!-- Receptor -->
  <rect x="38" y="40" width="42" height="28" rx="5" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="59" y="53" text-anchor="middle" font-size="7" font-weight="600" fill="#991b1b">Receptor</text>
  <text x="59" y="63" text-anchor="middle" font-size="6" fill="#991b1b">(skin)</text>
  <line x1="82" y1="54" x2="92" y2="54" stroke="#dc2626" stroke-width="2" marker-end="url(#rfa)"/>
  <!-- Sensory neuron -->
  <rect x="94" y="40" width="42" height="28" rx="5" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="115" y="53" text-anchor="middle" font-size="6.5" font-weight="600" fill="#92400e">Sensory</text>
  <text x="115" y="63" text-anchor="middle" font-size="6.5" fill="#92400e">neuron</text>
  <line x1="115" y1="40" x2="115" y2="24" stroke="#dc2626" stroke-width="2" marker-end="url(#rfa)"/>
  <!-- Relay neuron (spinal cord) -->
  <rect x="95" y="4" width="86" height="18" rx="5" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="138" y="16" text-anchor="middle" font-size="7" font-weight="600" fill="#5b21b6">Relay neuron (spinal cord)</text>
  <line x1="163" y1="22" x2="163" y2="38" stroke="#dc2626" stroke-width="2" marker-end="url(#rfa)"/>
  <!-- Motor neuron -->
  <rect x="142" y="40" width="42" height="28" rx="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="163" y="53" text-anchor="middle" font-size="6.5" font-weight="600" fill="#15803d">Motor</text>
  <text x="163" y="63" text-anchor="middle" font-size="6.5" fill="#15803d">neuron</text>
  <line x1="186" y1="54" x2="196" y2="54" stroke="#dc2626" stroke-width="2" marker-end="url(#rfa)"/>
  <!-- Effector -->
  <rect x="198" y="40" width="42" height="28" rx="5" fill="#dbeafe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="219" y="53" text-anchor="middle" font-size="7" font-weight="600" fill="#1e3a5f">Effector</text>
  <text x="219" y="63" text-anchor="middle" font-size="6" fill="#1e3a5f">(muscle)</text>
  <!-- Response -->
  <text x="256" y="56" text-anchor="middle" font-size="16">&#x270B;</text>
  <text x="256" y="72" text-anchor="middle" font-size="6.5" fill="#6366f1">response</text>
  <!-- Info box -->
  <rect x="30" y="82" width="220" height="30" rx="5" fill="#f0f9ff" stroke="#6366f1" stroke-width="1"/>
  <text x="140" y="94" text-anchor="middle" font-size="7" fill="#475569">Reflex arc bypasses the brain &#x2192; extremely fast response</text>
  <text x="140" y="106" text-anchor="middle" font-size="7" fill="#475569">Brain is informed AFTER the reflex has already happened</text>
</svg>`;

// ── DNA, GENES & CHROMOSOMES ─────────────────────────────────────────────────
DIAGRAMS["dna-genes-chromosomes"] = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">DNA, Genes &amp; Chromosomes</text>
  <!-- Cell -->
  <ellipse cx="40" cy="60" rx="28" ry="30" fill="#dbeafe" stroke="#6366f1" stroke-width="1.5"/>
  <circle cx="40" cy="60" r="14" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="40" y="63" text-anchor="middle" font-size="7" fill="#1e3a5f">nucleus</text>
  <text x="40" y="98" text-anchor="middle" font-size="7.5" font-weight="600" fill="#6366f1">Cell</text>
  <!-- Arrow 1 -->
  <line x1="70" y1="60" x2="86" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Chromosome -->
  <path d="M98,40 Q94,60 98,80" fill="none" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
  <path d="M106,40 Q110,60 106,80" fill="none" stroke="#7c3aed" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="102" cy="60" rx="7" ry="4" fill="#7c3aed"/>
  <text x="102" y="98" text-anchor="middle" font-size="7" font-weight="600" fill="#5b21b6">Chromosome</text>
  <text x="102" y="110" text-anchor="middle" font-size="6.5" fill="#475569">(46 in humans)</text>
  <!-- Arrow 2 -->
  <line x1="116" y1="60" x2="132" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- DNA double helix -->
  <path d="M140,34 Q150,40 140,46 Q130,52 140,58 Q150,64 140,70 Q130,76 140,82" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M156,34 Q146,40 156,46 Q166,52 156,58 Q146,64 156,70 Q166,76 156,82" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <line x1="143" y1="40" x2="153" y2="40" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="136" y1="52" x2="160" y2="52" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="143" y1="64" x2="153" y2="64" stroke="#16a34a" stroke-width="1.5"/>
  <line x1="136" y1="76" x2="160" y2="76" stroke="#16a34a" stroke-width="1.5"/>
  <text x="148" y="98" text-anchor="middle" font-size="7" font-weight="600" fill="#dc2626">DNA</text>
  <text x="148" y="110" text-anchor="middle" font-size="6.5" fill="#475569">(double helix)</text>
  <!-- Arrow 3 -->
  <line x1="170" y1="60" x2="186" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,2"/>
  <!-- Gene -->
  <rect x="188" y="40" width="84" height="42" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="230" y="56" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">GENE</text>
  <text x="230" y="68" text-anchor="middle" font-size="6.5" fill="#475569">= section of DNA</text>
  <text x="230" y="78" text-anchor="middle" font-size="6.5" fill="#475569">coding for one protein</text>
  <text x="230" y="98" text-anchor="middle" font-size="7" font-weight="600" fill="#15803d">Gene</text>
  <text x="230" y="110" text-anchor="middle" font-size="6.5" fill="#475569">(inherited unit)</text>
</svg>`;

// ── RESPIRATION COMPARISON ───────────────────────────────────────────────────
DIAGRAMS["respiration-comparison"] = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Aerobic vs Anaerobic Respiration</text>
  <line x1="140" y1="20" x2="140" y2="126" stroke="#e2e8f0" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Aerobic -->
  <rect x="6" y="22" width="128" height="100" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="70" y="37" text-anchor="middle" font-size="9" font-weight="700" fill="#15803d">AEROBIC</text>
  <text x="70" y="49" text-anchor="middle" font-size="7" fill="#475569">(with oxygen)</text>
  <text x="70" y="64" text-anchor="middle" font-size="7" fill="#15803d">Glucose + O&#x2082; &#x2192;</text>
  <text x="70" y="76" text-anchor="middle" font-size="7" fill="#15803d">CO&#x2082; + H&#x2082;O + LOTS energy</text>
  <text x="70" y="92" text-anchor="middle" font-size="7" fill="#475569">Where: mitochondria</text>
  <text x="70" y="104" text-anchor="middle" font-size="7" fill="#475569">When: most of the time</text>
  <text x="70" y="116" text-anchor="middle" font-size="8" fill="#16a34a">&#x2B06; more energy released</text>
  <!-- Anaerobic -->
  <rect x="146" y="22" width="128" height="100" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="210" y="37" text-anchor="middle" font-size="9" font-weight="700" fill="#92400e">ANAEROBIC</text>
  <text x="210" y="49" text-anchor="middle" font-size="7" fill="#475569">(without oxygen)</text>
  <text x="210" y="64" text-anchor="middle" font-size="7" fill="#92400e">In muscles:</text>
  <text x="210" y="76" text-anchor="middle" font-size="7" fill="#92400e">Glucose &#x2192; Lactic acid</text>
  <text x="210" y="92" text-anchor="middle" font-size="7" fill="#475569">Where: cytoplasm</text>
  <text x="210" y="104" text-anchor="middle" font-size="7" fill="#475569">When: intense exercise</text>
  <text x="210" y="116" text-anchor="middle" font-size="8" fill="#ca8a04">&#x2B07; less energy released</text>
</svg>`;

// ── CARBON CYCLE ─────────────────────────────────────────────────────────────
DIAGRAMS["carbon-cycle"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="cca" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#16a34a"/></marker>
    <marker id="ccb" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#dc2626"/></marker>
    <marker id="ccc" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#64748b"/></marker>
  </defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Carbon Cycle</text>
  <!-- Atmosphere CO2 -->
  <rect x="85" y="20" width="110" height="24" rx="6" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="140" y="36" text-anchor="middle" font-size="8" font-weight="700" fill="#3730a3">CO&#x2082; in atmosphere</text>
  <!-- Plant -->
  <text x="30" y="78" text-anchor="middle" font-size="22">&#x1F33F;</text>
  <text x="30" y="96" text-anchor="middle" font-size="7" fill="#15803d">Plants</text>
  <!-- Animal -->
  <text x="140" y="82" text-anchor="middle" font-size="22">&#x1F404;</text>
  <text x="140" y="100" text-anchor="middle" font-size="7" fill="#92400e">Animals</text>
  <!-- Factory -->
  <text x="250" y="78" text-anchor="middle" font-size="22">&#x1F3ED;</text>
  <text x="250" y="96" text-anchor="middle" font-size="7" fill="#475569">Combustion</text>
  <!-- Fossil fuels -->
  <rect x="180" y="118" width="90" height="26" rx="5" fill="#a8a29e" stroke="#78716c" stroke-width="1.5"/>
  <text x="225" y="135" text-anchor="middle" font-size="7" fill="#1e293b">Fossil fuels (stored C)</text>
  <!-- Decomposers -->
  <text x="80" y="134" text-anchor="middle" font-size="7" fill="#78716c">&#x1F342; Decomposers release CO&#x2082;</text>
  <!-- Photosynthesis arrow (green: removes CO2) -->
  <path d="M100,44 C60,50 40,58 35,66" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#cca)"/>
  <text x="52" y="52" font-size="6" fill="#16a34a">photosynthesis</text>
  <!-- Respiration arrows (red: adds CO2) -->
  <path d="M38,66 C45,55 75,40 90,34" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#ccb)"/>
  <text x="48" y="42" font-size="5.5" fill="#dc2626">respiration</text>
  <path d="M140,70 C140,56 140,48 138,44" fill="none" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ccb)"/>
  <text x="150" y="60" font-size="5.5" fill="#dc2626">respiration</text>
  <!-- Combustion arrow -->
  <path d="M248,66 C240,52 200,40 195,36" fill="none" stroke="#dc2626" stroke-width="1.5" marker-end="url(#ccb)"/>
  <text x="230" y="50" font-size="5.5" fill="#dc2626">combustion</text>
  <!-- Feeding arrow -->
  <path d="M50,80 C70,80 100,80 120,80" fill="none" stroke="#64748b" stroke-width="1.5" marker-end="url(#ccc)"/>
  <text x="85" y="76" font-size="5.5" fill="#64748b">feeding</text>
  <!-- Fossil fuel link -->
  <path d="M250,100 L250,116" fill="none" stroke="#78716c" stroke-width="1.2" stroke-dasharray="2,2"/>
  <text x="140" y="152" text-anchor="middle" font-size="7" fill="#475569">Green = CO&#x2082; removed  |  Red = CO&#x2082; released</text>
</svg>`;

// ── ENERGY STORES ────────────────────────────────────────────────────────────
DIAGRAMS["energy-stores"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Energy Stores</text>
  <!-- Row 1 -->
  <rect x="6" y="22" width="84" height="46" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="48" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Kinetic</text>
  <text x="48" y="50" text-anchor="middle" font-size="6.5" fill="#475569">moving objects</text>
  <text x="48" y="60" text-anchor="middle" font-size="6" fill="#94a3b8">&#x1F697; car moving</text>
  <rect x="98" y="22" width="84" height="46" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="140" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">Thermal</text>
  <text x="140" y="50" text-anchor="middle" font-size="6.5" fill="#475569">hot objects</text>
  <text x="140" y="60" text-anchor="middle" font-size="6" fill="#94a3b8">&#x2615; hot tea</text>
  <rect x="190" y="22" width="84" height="46" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="232" y="38" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">Chemical</text>
  <text x="232" y="50" text-anchor="middle" font-size="6.5" fill="#475569">stored in bonds</text>
  <text x="232" y="60" text-anchor="middle" font-size="6" fill="#94a3b8">&#x1F50B; food, fuel</text>
  <!-- Row 2 -->
  <rect x="6" y="74" width="84" height="46" rx="6" fill="#dbeafe" stroke="#6366f1" stroke-width="1.5"/>
  <text x="48" y="86" text-anchor="middle" font-size="7" font-weight="700" fill="#1e3a5f">Gravitational</text>
  <text x="48" y="96" text-anchor="middle" font-size="7" font-weight="700" fill="#1e3a5f">Potential</text>
  <text x="48" y="108" text-anchor="middle" font-size="6.5" fill="#475569">raised objects</text>
  <text x="48" y="116" text-anchor="middle" font-size="6" fill="#94a3b8">&#x1F4DA; book on shelf</text>
  <rect x="98" y="74" width="84" height="46" rx="6" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="140" y="88" text-anchor="middle" font-size="7" font-weight="700" fill="#5b21b6">Elastic</text>
  <text x="140" y="98" text-anchor="middle" font-size="7" font-weight="700" fill="#5b21b6">Potential</text>
  <text x="140" y="108" text-anchor="middle" font-size="6.5" fill="#475569">stretched/compressed</text>
  <text x="140" y="116" text-anchor="middle" font-size="6" fill="#94a3b8">rubber band</text>
  <rect x="190" y="74" width="84" height="46" rx="6" fill="#fff7ed" stroke="#f97316" stroke-width="1.5"/>
  <text x="232" y="88" text-anchor="middle" font-size="8" font-weight="700" fill="#c2410c">Nuclear</text>
  <text x="232" y="100" text-anchor="middle" font-size="6.5" fill="#475569">inside atoms</text>
  <text x="232" y="112" text-anchor="middle" font-size="6" fill="#94a3b8">&#x2622; reactor, Sun</text>
  <!-- Footer -->
  <rect x="20" y="128" width="240" height="18" rx="4" fill="#f0f9ff"/>
  <text x="140" y="140" text-anchor="middle" font-size="7.5" font-weight="600" fill="#1e293b">Energy is NEVER created or destroyed &#x2014; only transferred between stores</text>
</svg>`;

// ── SANKEY DIAGRAM ───────────────────────────────────────────────────────────
DIAGRAMS["sankey-diagram"] = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Sankey Diagram: Light Bulb</text>
  <!-- Input arrow (100J wide) -->
  <rect x="8" y="25" width="60" height="60" rx="2" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/>
  <text x="38" y="52" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">100 J</text>
  <text x="38" y="64" text-anchor="middle" font-size="7" fill="#92400e">electrical</text>
  <text x="38" y="74" text-anchor="middle" font-size="7" fill="#92400e">energy IN</text>
  <!-- Useful output (narrow: 20J) -->
  <polygon points="70,25 180,40 180,52 70,37" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="190" y="50" font-size="7" font-weight="700" fill="#16a34a">20 J</text>
  <text x="190" y="60" font-size="6.5" fill="#16a34a">useful light</text>
  <!-- Wasted output (wide: 80J) -->
  <polygon points="70,49 180,72 180,112 70,85" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="190" y="90" font-size="7" font-weight="700" fill="#dc2626">80 J</text>
  <text x="190" y="100" font-size="6.5" fill="#dc2626">wasted heat</text>
  <!-- Bulb icon -->
  <text x="125" y="30" text-anchor="middle" font-size="18">&#x1F4A1;</text>
  <!-- Efficiency calc -->
  <rect x="50" y="108" width="180" height="18" rx="4" fill="#f0f9ff" stroke="#6366f1" stroke-width="1"/>
  <text x="140" y="120" text-anchor="middle" font-size="7.5" font-weight="600" fill="#6366f1">Efficiency = useful out &#xF7; total in = 20/100 = 20%</text>
</svg>`;

// ── PERIODIC TABLE ──────────────────────────────────────────────────────────
DIAGRAMS["periodic-table"] = (function() {
  var els = [
    [1,"H",1,1,"nm"],[2,"He",1,18,"ng"],
    [3,"Li",2,1,"am"],[4,"Be",2,2,"ae"],
    [5,"B",2,13,"ml"],[6,"C",2,14,"nm"],[7,"N",2,15,"nm"],[8,"O",2,16,"nm"],[9,"F",2,17,"ha"],[10,"Ne",2,18,"ng"],
    [11,"Na",3,1,"am"],[12,"Mg",3,2,"ae"],
    [13,"Al",3,13,"pt"],[14,"Si",3,14,"ml"],[15,"P",3,15,"nm"],[16,"S",3,16,"nm"],[17,"Cl",3,17,"ha"],[18,"Ar",3,18,"ng"],
    [19,"K",4,1,"am"],[20,"Ca",4,2,"ae"],
    [21,"Sc",4,3,"tm"],[22,"Ti",4,4,"tm"],[23,"V",4,5,"tm"],[24,"Cr",4,6,"tm"],[25,"Mn",4,7,"tm"],
    [26,"Fe",4,8,"tm"],[27,"Co",4,9,"tm"],[28,"Ni",4,10,"tm"],[29,"Cu",4,11,"tm"],[30,"Zn",4,12,"tm"],
    [31,"Ga",4,13,"pt"],[32,"Ge",4,14,"ml"],[33,"As",4,15,"ml"],[34,"Se",4,16,"nm"],[35,"Br",4,17,"ha"],[36,"Kr",4,18,"ng"],
    [37,"Rb",5,1,"am"],[38,"Sr",5,2,"ae"],
    [39,"Y",5,3,"tm"],[40,"Zr",5,4,"tm"],[41,"Nb",5,5,"tm"],[42,"Mo",5,6,"tm"],[43,"Tc",5,7,"tm"],
    [44,"Ru",5,8,"tm"],[45,"Rh",5,9,"tm"],[46,"Pd",5,10,"tm"],[47,"Ag",5,11,"tm"],[48,"Cd",5,12,"tm"],
    [49,"In",5,13,"pt"],[50,"Sn",5,14,"pt"],[51,"Sb",5,15,"ml"],[52,"Te",5,16,"ml"],[53,"I",5,17,"ha"],[54,"Xe",5,18,"ng"],
    [55,"Cs",6,1,"am"],[56,"Ba",6,2,"ae"],
    [72,"Hf",6,4,"tm"],[73,"Ta",6,5,"tm"],[74,"W",6,6,"tm"],[75,"Re",6,7,"tm"],
    [76,"Os",6,8,"tm"],[77,"Ir",6,9,"tm"],[78,"Pt",6,10,"tm"],[79,"Au",6,11,"tm"],[80,"Hg",6,12,"tm"],
    [81,"Tl",6,13,"pt"],[82,"Pb",6,14,"pt"],[83,"Bi",6,15,"pt"],[84,"Po",6,16,"pt"],[85,"At",6,17,"ha"],[86,"Rn",6,18,"ng"],
    [87,"Fr",7,1,"am"],[88,"Ra",7,2,"ae"],
    [104,"Rf",7,4,"tm"],[105,"Db",7,5,"tm"],[106,"Sg",7,6,"tm"],[107,"Bh",7,7,"tm"],
    [108,"Hs",7,8,"tm"],[109,"Mt",7,9,"uk"],[110,"Ds",7,10,"uk"],[111,"Rg",7,11,"uk"],[112,"Cn",7,12,"tm"],
    [113,"Nh",7,13,"uk"],[114,"Fl",7,14,"pt"],[115,"Mc",7,15,"uk"],[116,"Lv",7,16,"uk"],[117,"Ts",7,17,"ha"],[118,"Og",7,18,"ng"],
    [57,"La",9,4,"la"],[58,"Ce",9,5,"la"],[59,"Pr",9,6,"la"],[60,"Nd",9,7,"la"],
    [61,"Pm",9,8,"la"],[62,"Sm",9,9,"la"],[63,"Eu",9,10,"la"],[64,"Gd",9,11,"la"],
    [65,"Tb",9,12,"la"],[66,"Dy",9,13,"la"],[67,"Ho",9,14,"la"],[68,"Er",9,15,"la"],
    [69,"Tm",9,16,"la"],[70,"Yb",9,17,"la"],[71,"Lu",9,18,"la"],
    [89,"Ac",10,4,"ac"],[90,"Th",10,5,"ac"],[91,"Pa",10,6,"ac"],[92,"U",10,7,"ac"],
    [93,"Np",10,8,"ac"],[94,"Pu",10,9,"ac"],[95,"Am",10,10,"ac"],[96,"Cm",10,11,"ac"],
    [97,"Bk",10,12,"ac"],[98,"Cf",10,13,"ac"],[99,"Es",10,14,"ac"],[100,"Fm",10,15,"ac"],
    [101,"Md",10,16,"ac"],[102,"No",10,17,"ac"],[103,"Lr",10,18,"ac"]
  ];

  var colors = {
    am:"#f4c2c2", ae:"#f6dfc8", tm:"#fdedb0", pt:"#c8e6c9",
    ml:"#b2dfdb", nm:"#bbdefb", ha:"#d1c4e9", ng:"#e8c9df",
    la:"#f8d0c8", ac:"#cce8d0", uk:"#e0e0e0"
  };
  var textColors = {
    am:"#5a1a1a", ae:"#5c3a1a", tm:"#5a4b0e", pt:"#1b5e20",
    ml:"#004d40", nm:"#0d47a1", ha:"#311b92", ng:"#6a1b5a",
    la:"#5d2018", ac:"#1b5e30", uk:"#424242"
  };
  var catNames = {
    am:"Alkali metals", ae:"Alkaline earth metals", tm:"Transition metals",
    pt:"Post-transition metals", ml:"Metalloids", nm:"Non-metals",
    ha:"Halogens", ng:"Noble gases", la:"Lanthanides", ac:"Actinides", uk:"Unknown"
  };

  var cellW = 48, cellH = 52, gap = 1;
  var offsetX = 40, offsetY = 50;
  var svgW = offsetX + 18 * (cellW + gap) + 10;
  var svgH = 630;

  function cellX(col) { return offsetX + (col - 1) * (cellW + gap); }
  function cellY(row) {
    if (row <= 7) return offsetY + (row - 1) * (cellH + gap);
    // Lanthanides/actinides: row 9 and 10 with extra gap
    return offsetY + 7.5 * (cellH + gap) + (row - 9) * (cellH + gap);
  }

  var svg = '<svg viewBox="0 0 ' + svgW + ' ' + svgH + '" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif" style="background:#fff">';

  // Title
  svg += '<text x="' + (svgW / 2) + '" y="30" text-anchor="middle" font-size="18" font-weight="700" fill="#1e293b">The Periodic Table of Elements</text>';

  // Group headers (1-18)
  for (var g = 1; g <= 18; g++) {
    svg += '<text x="' + (cellX(g) + cellW / 2) + '" y="' + (offsetY - 5) + '" text-anchor="middle" font-size="9" fill="#64748b">' + g + '</text>';
  }

  // Period labels (1-7)
  for (var p = 1; p <= 7; p++) {
    svg += '<text x="' + (offsetX - 12) + '" y="' + (cellY(p) + cellH / 2 + 3) + '" text-anchor="middle" font-size="9" fill="#64748b">' + p + '</text>';
  }

  // Lanthanide/actinide indicators at (6,3) and (7,3)
  var indX = cellX(3), indY6 = cellY(6), indY7 = cellY(7);
  svg += '<rect x="' + indX + '" y="' + indY6 + '" width="' + cellW + '" height="' + cellH + '" rx="4" fill="' + colors.la + '" stroke="#e8b0a8" stroke-width="1"/>';
  svg += '<text x="' + (indX + cellW / 2) + '" y="' + (indY6 + cellH / 2 - 4) + '" text-anchor="middle" font-size="8" fill="' + textColors.la + '">57-71</text>';
  svg += '<text x="' + (indX + cellW / 2) + '" y="' + (indY6 + cellH / 2 + 8) + '" text-anchor="middle" font-size="7" fill="' + textColors.la + '">La-Lu</text>';

  svg += '<rect x="' + indX + '" y="' + indY7 + '" width="' + cellW + '" height="' + cellH + '" rx="4" fill="' + colors.ac + '" stroke="#a8d4ab" stroke-width="1"/>';
  svg += '<text x="' + (indX + cellW / 2) + '" y="' + (indY7 + cellH / 2 - 4) + '" text-anchor="middle" font-size="8" fill="' + textColors.ac + '">89-103</text>';
  svg += '<text x="' + (indX + cellW / 2) + '" y="' + (indY7 + cellH / 2 + 8) + '" text-anchor="middle" font-size="7" fill="' + textColors.ac + '">Ac-Lr</text>';

  // Draw all element cells
  for (var i = 0; i < els.length; i++) {
    var el = els[i];
    var num = el[0], sym = el[1], row = el[2], col = el[3], cat = el[4];
    var x = cellX(col), y = cellY(row);
    var bg = colors[cat], tc = textColors[cat];

    svg += '<rect x="' + x + '" y="' + y + '" width="' + cellW + '" height="' + cellH + '" rx="4" fill="' + bg + '" stroke="#c8c8c8" stroke-width="0.5"/>';
    svg += '<text x="' + (x + 4) + '" y="' + (y + 11) + '" font-size="7.5" fill="' + tc + '">' + num + '</text>';
    svg += '<text x="' + (x + cellW / 2) + '" y="' + (y + cellH / 2 + 5) + '" text-anchor="middle" font-size="14" font-weight="700" fill="' + tc + '">' + sym + '</text>';
  }

  // Legend
  var legendY = svgH - 40;
  var catKeys = ["am","ae","tm","pt","ml","nm","ha","ng","la","ac","uk"];
  var legendX = 40;
  svg += '<text x="' + legendX + '" y="' + (legendY - 12) + '" font-size="9" font-weight="700" fill="#1e293b">Legend:</text>';
  for (var k = 0; k < catKeys.length; k++) {
    var lx = legendX + k * 82;
    if (k >= 6) { lx = legendX + (k - 6) * 82; legendY = svgH - 18; }
    if (k === 6) { legendY = svgH - 18; }
    var ly = (k < 6) ? svgH - 40 : svgH - 18;
    svg += '<rect x="' + lx + '" y="' + (ly) + '" width="10" height="10" rx="2" fill="' + colors[catKeys[k]] + '"/>';
    svg += '<text x="' + (lx + 14) + '" y="' + (ly + 9) + '" font-size="7.5" fill="#334155">' + catNames[catKeys[k]] + '</text>';
  }

  svg += '</svg>';
  return svg;
})();

// ══════════════════════════════════════════════════════════════════════
// YEAR 8 ADDITIONS — net-new diagrams for Y8 gap topics
// ══════════════════════════════════════════════════════════════════════

// ── RESPIRATORY SYSTEM (s8-02) ───────────────────────────────────────────────
DIAGRAMS["respiratory-system"] = `<svg viewBox="0 0 280 192" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Respiratory System</text>
  <rect x="96" y="20" width="13" height="46" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2"/>
  <text x="58" y="40" font-size="7.5" fill="#475569">trachea</text>
  <line x1="80" y1="38" x2="95" y2="40" stroke="#94a3b8" stroke-width="0.7"/>
  <path d="M103 64 L82 90" stroke="#94a3b8" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M103 64 L124 90" stroke="#94a3b8" stroke-width="5" fill="none" stroke-linecap="round"/>
  <text x="125" y="84" font-size="7.5" fill="#475569">bronchus</text>
  <path d="M80 88 C56 92 50 132 60 152 C68 164 88 160 89 144 L89 96 C89 90 85 87 80 88 Z" fill="#fecaca" stroke="#ef4444" stroke-width="1.5"/>
  <path d="M126 88 C150 92 156 132 146 152 C138 164 118 160 117 144 L117 96 C117 90 121 87 126 88 Z" fill="#fecaca" stroke="#ef4444" stroke-width="1.5"/>
  <text x="28" y="120" font-size="7.5" fill="#b91c1c">lung</text>
  <line x1="42" y1="118" x2="62" y2="124" stroke="#94a3b8" stroke-width="0.7"/>
  <path d="M50 158 Q103 174 156 158" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
  <text x="159" y="167" font-size="7.5" fill="#7c3aed">diaphragm</text>
  <circle cx="226" cy="74" r="35" fill="#ffffff" stroke="#3b82f6" stroke-width="1.2" stroke-dasharray="3,2"/>
  <circle cx="214" cy="66" r="11" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <circle cx="236" cy="63" r="10" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <circle cx="228" cy="86" r="11" fill="#dbeafe" stroke="#3b82f6" stroke-width="1"/>
  <text x="226" y="122" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">alveoli</text>
  <text x="140" y="188" text-anchor="middle" font-size="6.6" fill="#475569">gas exchange: O₂ diffuses in, CO₂ diffuses out</text>
  <line x1="146" y1="118" x2="198" y2="92" stroke="#93c5fd" stroke-width="0.8" stroke-dasharray="2,2"/>
</svg>`;

// ── IMMUNE RESPONSE (s8-04) ───────────────────────────────────────────────────
DIAGRAMS["immune-response"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="ir" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#64748b"/></marker></defs>
  <text x="140" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">How the Immune System Responds</text>
  <circle cx="48" cy="60" r="29" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <circle cx="42" cy="55" r="12" fill="#c4b5fd" stroke="#6d28d9" stroke-width="1"/>
  <circle cx="58" cy="58" r="8" fill="#fca5a5" stroke="#dc2626" stroke-width="1"/>
  <text x="48" y="101" text-anchor="middle" font-size="7" font-weight="700" fill="#5b21b6">1. Phagocyte</text>
  <text x="48" y="110" text-anchor="middle" font-size="6.2" fill="#475569">engulfs pathogen</text>
  <line x1="83" y1="60" x2="100" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#ir)"/>
  <circle cx="140" cy="60" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <circle cx="140" cy="60" r="12" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1"/>
  <g stroke="#1e40af" stroke-width="1.4" fill="none">
    <path d="M119 38 l-4 -6 M119 38 l4 -6 M119 38 l0 7"/>
    <path d="M164 42 l-4 -6 M164 42 l4 -6 M164 42 l0 7"/>
    <path d="M167 80 l-4 -6 M167 80 l4 -6 M167 80 l0 7"/>
  </g>
  <text x="140" y="101" text-anchor="middle" font-size="7" font-weight="700" fill="#1e40af">2. Lymphocyte</text>
  <text x="140" y="110" text-anchor="middle" font-size="6.2" fill="#475569">makes antibodies</text>
  <line x1="175" y1="60" x2="192" y2="60" stroke="#64748b" stroke-width="1.5" marker-end="url(#ir)"/>
  <circle cx="232" cy="60" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <circle cx="232" cy="60" r="12" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <text x="232" y="64" text-anchor="middle" font-size="9" font-weight="700" fill="#14532d">M</text>
  <text x="232" y="101" text-anchor="middle" font-size="7" font-weight="700" fill="#15803d">3. Memory cell</text>
  <text x="232" y="110" text-anchor="middle" font-size="6.2" fill="#475569">faster next time</text>
  <text x="140" y="134" text-anchor="middle" font-size="6.6" fill="#475569">Antibodies fit one antigen only (lock &amp; key) → this gives immunity</text>
</svg>`;

// ── pH SCALE (s8-08) ──────────────────────────────────────────────────────────
DIAGRAMS["ph-scale"] = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The pH Scale</text>
  <g stroke="#ffffff" stroke-width="0.5">
    <rect x="8"   y="22" width="17.6" height="22" fill="#c62828"/>
    <rect x="25.6" y="22" width="17.6" height="22" fill="#e53935"/>
    <rect x="43.2" y="22" width="17.6" height="22" fill="#ef5350"/>
    <rect x="60.8" y="22" width="17.6" height="22" fill="#ff7043"/>
    <rect x="78.4" y="22" width="17.6" height="22" fill="#ffa726"/>
    <rect x="96"   y="22" width="17.6" height="22" fill="#ffca28"/>
    <rect x="113.6" y="22" width="17.6" height="22" fill="#d4e157"/>
    <rect x="131.2" y="22" width="17.6" height="22" fill="#66bb6a"/>
    <rect x="148.8" y="22" width="17.6" height="22" fill="#26a69a"/>
    <rect x="166.4" y="22" width="17.6" height="22" fill="#29b6f6"/>
    <rect x="184"  y="22" width="17.6" height="22" fill="#42a5f5"/>
    <rect x="201.6" y="22" width="17.6" height="22" fill="#3f51b5"/>
    <rect x="219.2" y="22" width="17.6" height="22" fill="#5c6bc0"/>
    <rect x="236.8" y="22" width="17.6" height="22" fill="#7e57c2"/>
    <rect x="254.4" y="22" width="17.6" height="22" fill="#6a1b9a"/>
  </g>
  <g font-size="7.5" fill="#ffffff" font-weight="700" text-anchor="middle">
    <text x="16.8" y="37">0</text><text x="34.4" y="37">1</text><text x="52" y="37">2</text><text x="69.6" y="37">3</text>
    <text x="87.2" y="37">4</text><text x="104.8" y="37">5</text><text x="122.4" y="37">6</text><text x="140" y="37" fill="#1b5e20">7</text>
    <text x="157.6" y="37">8</text><text x="175.2" y="37">9</text><text x="192.8" y="37">10</text><text x="210.4" y="37">11</text>
    <text x="228" y="37">12</text><text x="245.6" y="37">13</text><text x="263.2" y="37">14</text>
  </g>
  <text x="62" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#c62828">ACIDIC</text>
  <text x="140" y="58" text-anchor="middle" font-size="7.5" font-weight="700" fill="#2e7d32">NEUTRAL</text>
  <text x="218" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#6a1b9a">ALKALINE</text>
  <text x="34" y="78" text-anchor="middle" font-size="6.4" fill="#475569">lemon</text>
  <text x="34" y="87" text-anchor="middle" font-size="6.4" fill="#475569">juice (2)</text>
  <text x="140" y="78" text-anchor="middle" font-size="6.4" fill="#475569">pure</text>
  <text x="140" y="87" text-anchor="middle" font-size="6.4" fill="#475569">water (7)</text>
  <text x="245" y="78" text-anchor="middle" font-size="6.4" fill="#475569">bleach</text>
  <text x="245" y="87" text-anchor="middle" font-size="6.4" fill="#475569">(13)</text>
  <text x="140" y="108" text-anchor="middle" font-size="6.6" fill="#475569">Universal indicator: red = acid · green = neutral · purple = alkali</text>
</svg>`;

// ── REACTIVITY SERIES (s8-09) ──────────────────────────────────────────────────
DIAGRAMS["reactivity-series"] = `<svg viewBox="0 0 280 212" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Reactivity Series</text>
  <line x1="26" y1="30" x2="26" y2="184" stroke="#64748b" stroke-width="2"/>
  <polygon points="20,182 32,182 26,196" fill="#64748b"/>
  <text x="14" y="62" font-size="6.8" fill="#16a34a" transform="rotate(-90 14 62)" text-anchor="middle">most reactive</text>
  <text x="14" y="156" font-size="6.8" fill="#b91c1c" transform="rotate(-90 14 156)" text-anchor="middle">least reactive</text>
  <g font-size="7.5" text-anchor="middle" font-weight="600">
    <rect x="92" y="24" width="96" height="13" rx="3" fill="#dbeafe" stroke="#3b82f6"/><text x="140" y="33" fill="#1e3a5f">Potassium  K</text>
    <rect x="92" y="38.5" width="96" height="13" rx="3" fill="#dbeafe" stroke="#3b82f6"/><text x="140" y="47.5" fill="#1e3a5f">Sodium  Na</text>
    <rect x="92" y="53" width="96" height="13" rx="3" fill="#dbeafe" stroke="#3b82f6"/><text x="140" y="62" fill="#1e3a5f">Calcium  Ca</text>
    <rect x="92" y="67.5" width="96" height="13" rx="3" fill="#dbeafe" stroke="#3b82f6"/><text x="140" y="76.5" fill="#1e3a5f">Magnesium  Mg</text>
    <rect x="92" y="82" width="96" height="13" rx="3" fill="#dbeafe" stroke="#3b82f6"/><text x="140" y="91" fill="#1e3a5f">Aluminium  Al</text>
    <rect x="92" y="96.5" width="96" height="13" rx="3" fill="#fef9c3" stroke="#ca8a04"/><text x="140" y="105.5" fill="#92400e">( Carbon  C )</text>
    <rect x="92" y="111" width="96" height="13" rx="3" fill="#e2e8f0" stroke="#94a3b8"/><text x="140" y="120" fill="#334155">Zinc  Zn</text>
    <rect x="92" y="125.5" width="96" height="13" rx="3" fill="#e2e8f0" stroke="#94a3b8"/><text x="140" y="134.5" fill="#334155">Iron  Fe</text>
    <rect x="92" y="140" width="96" height="13" rx="3" fill="#fef9c3" stroke="#ca8a04"/><text x="140" y="149" fill="#92400e">( Hydrogen  H )</text>
    <rect x="92" y="154.5" width="96" height="13" rx="3" fill="#fee2e2" stroke="#ef4444"/><text x="140" y="163.5" fill="#991b1b">Copper  Cu</text>
    <rect x="92" y="169" width="96" height="13" rx="3" fill="#fee2e2" stroke="#ef4444"/><text x="140" y="178" fill="#991b1b">Silver  Ag</text>
    <rect x="92" y="183.5" width="96" height="13" rx="3" fill="#fee2e2" stroke="#ef4444"/><text x="140" y="192.5" fill="#991b1b">Gold  Au</text>
  </g>
  <line x1="196" y1="24" x2="196" y2="95" stroke="#16a34a" stroke-width="1.5"/>
  <text x="200" y="50" font-size="6.4" fill="#15803d">extracted by</text>
  <text x="200" y="59" font-size="6.4" fill="#15803d">electrolysis</text>
  <line x1="196" y1="111" x2="196" y2="196" stroke="#b45309" stroke-width="1.5"/>
  <text x="200" y="150" font-size="6.4" fill="#b45309">extracted by</text>
  <text x="200" y="159" font-size="6.4" fill="#b45309">reduction with</text>
  <text x="200" y="168" font-size="6.4" fill="#b45309">carbon</text>
  <text x="240" y="206" font-size="6" fill="#94a3b8" text-anchor="middle">( ) = non-metals</text>
</svg>`;


// ── MAGNETIC FIELD (s8-13) ─────────────────────────────────────────────────────
DIAGRAMS["magnetic-field"] = `<svg viewBox="0 0 280 162" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="mf" markerWidth="9" markerHeight="9" refX="4" refY="4.5" orient="auto"><polygon points="0 1,8 4.5,0 8" fill="#475569"/></marker></defs>
  <text x="140" y="15" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Magnetic Field of a Bar Magnet</text>
  <g fill="none" stroke="#64748b" stroke-width="1.2">
    <path d="M108 72 Q140 52 172 72"/>
    <path d="M102 74 Q140 36 178 74"/>
    <path d="M96 76 Q140 22 184 76"/>
    <path d="M108 92 Q140 112 172 92"/>
    <path d="M102 90 Q140 128 178 90"/>
    <path d="M96 88 Q140 142 184 88"/>
  </g>
  <g fill="none" stroke="#64748b" stroke-width="1.3" marker-end="url(#mf)">
    <path d="M134 42 L146 42"/>
    <path d="M134 122 L146 122"/>
  </g>
  <rect x="100" y="74" width="40" height="16" fill="#ef4444"/>
  <rect x="140" y="74" width="40" height="16" fill="#2563eb"/>
  <rect x="100" y="74" width="80" height="16" fill="none" stroke="#1e293b" stroke-width="0.8"/>
  <text x="120" y="86.5" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">N</text>
  <text x="160" y="86.5" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">S</text>
  <text x="140" y="150" text-anchor="middle" font-size="6.8" fill="#475569">Field lines run N → S and are closest together at the poles</text>
  <text x="140" y="159" text-anchor="middle" font-size="6.8" fill="#475569">Like poles repel · unlike poles attract</text>
</svg>`;

// ── DISTANCE–TIME GRAPH (s8-14) ─────────────────────────────────────────────────
DIAGRAMS["distance-time-graph"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Distance–Time Graph</text>
  <line x1="40" y1="22" x2="40" y2="128" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="40" y1="128" x2="252" y2="128" stroke="#1e293b" stroke-width="1.5"/>
  <text x="18" y="78" font-size="7.5" fill="#475569" transform="rotate(-90 18 78)" text-anchor="middle">distance</text>
  <text x="146" y="145" font-size="7.5" fill="#475569" text-anchor="middle">time</text>
  <polyline points="40,128 110,78" fill="none" stroke="#6366f1" stroke-width="2.5"/>
  <polyline points="110,78 165,78" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <polyline points="165,78 230,30" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <text x="70" y="118" font-size="6.4" fill="#4f46e5" text-anchor="middle">constant</text>
  <text x="70" y="126" font-size="6.4" fill="#4f46e5" text-anchor="middle">speed</text>
  <text x="137" y="72" font-size="6.4" fill="#b45309" text-anchor="middle">stationary</text>
  <text x="206" y="55" font-size="6.4" fill="#15803d" text-anchor="middle">faster</text>
  <text x="206" y="63" font-size="6.4" fill="#15803d" text-anchor="middle">(steeper)</text>
  <text x="140" y="160" text-anchor="middle" font-size="6.8" fill="#475569">Steeper line = faster · Flat line = not moving · Gradient = speed</text>
</svg>`;

// ── TRANSVERSE vs LONGITUDINAL WAVES (s8-15) ────────────────────────────────────
DIAGRAMS["longitudinal-wave"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="12" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Transverse vs Longitudinal Waves</text>
  <text x="10" y="30" font-size="8" font-weight="700" fill="#2563eb">Transverse</text>
  <line x1="14" y1="55" x2="266" y2="55" stroke="#cbd5e1" stroke-width="0.8" stroke-dasharray="3,2"/>
  <path d="M14 55 Q40 25 66 55 T118 55 T170 55 T222 55 T266 55" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="40" y1="55" x2="40" y2="32" stroke="#16a34a" stroke-width="1.2"/>
  <text x="46" y="40" font-size="6.2" fill="#15803d">amplitude</text>
  <line x1="40" y1="40" x2="92" y2="40" stroke="#7c3aed" stroke-width="1" marker-start="url(#lw)" marker-end="url(#lw)"/>
  <defs><marker id="lw" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#7c3aed"/></marker></defs>
  <text x="66" y="36" font-size="6.2" fill="#7c3aed" text-anchor="middle">wavelength</text>
  <text x="200" y="78" font-size="6.2" fill="#475569">vibration ⟂ to wave direction →</text>
  <text x="10" y="100" font-size="8" font-weight="700" fill="#dc2626">Longitudinal (sound)</text>
  <g stroke="#dc2626" stroke-width="1.4">
    <line x1="20" y1="112" x2="20" y2="140"/><line x1="30" y1="112" x2="30" y2="140"/>
    <line x1="46" y1="112" x2="46" y2="140"/><line x1="62" y1="112" x2="62" y2="140"/>
    <line x1="72" y1="112" x2="72" y2="140"/><line x1="80" y1="112" x2="80" y2="140"/>
    <line x1="100" y1="112" x2="100" y2="140"/><line x1="120" y1="112" x2="120" y2="140"/>
    <line x1="130" y1="112" x2="130" y2="140"/><line x1="140" y1="112" x2="140" y2="140"/>
    <line x1="160" y1="112" x2="160" y2="140"/><line x1="180" y1="112" x2="180" y2="140"/>
    <line x1="190" y1="112" x2="190" y2="140"/><line x1="198" y1="112" x2="198" y2="140"/>
    <line x1="218" y1="112" x2="218" y2="140"/><line x1="238" y1="112" x2="238" y2="140"/>
  </g>
  <text x="75" y="152" font-size="6.2" fill="#991b1b" text-anchor="middle">compression</text>
  <text x="170" y="152" font-size="6.2" fill="#991b1b" text-anchor="middle">rarefaction</text>
  <line x1="75" y1="146" x2="75" y2="141" stroke="#991b1b" stroke-width="0.8"/>
  <line x1="170" y1="146" x2="170" y2="141" stroke="#991b1b" stroke-width="0.8"/>
</svg>`;

// ── LEAF STRUCTURE (s8-03) ──────────────────────────────────────────────────────
DIAGRAMS["leaf-structure"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Cross-Section of a Leaf</text>
  <rect x="20" y="22" width="170" height="8" fill="#fde68a" stroke="#d97706" stroke-width="0.6"/>
  <rect x="20" y="30" width="170" height="16" fill="#d9f99d" stroke="#65a30d" stroke-width="0.6"/>
  <g fill="#4ade80" stroke="#15803d" stroke-width="0.6">
    <rect x="22" y="46" width="13" height="34" rx="2"/><rect x="37" y="46" width="13" height="34" rx="2"/>
    <rect x="52" y="46" width="13" height="34" rx="2"/><rect x="67" y="46" width="13" height="34" rx="2"/>
    <rect x="82" y="46" width="13" height="34" rx="2"/><rect x="97" y="46" width="13" height="34" rx="2"/>
    <rect x="112" y="46" width="13" height="34" rx="2"/><rect x="127" y="46" width="13" height="34" rx="2"/>
    <rect x="142" y="46" width="13" height="34" rx="2"/><rect x="157" y="46" width="13" height="34" rx="2"/>
    <rect x="172" y="46" width="13" height="34" rx="2"/>
  </g>
  <g fill="#86efac" stroke="#16a34a" stroke-width="0.6">
    <circle cx="32" cy="92" r="7"/><circle cx="52" cy="98" r="7"/><circle cx="72" cy="90" r="7"/><circle cx="92" cy="99" r="7"/>
    <circle cx="112" cy="91" r="7"/><circle cx="132" cy="99" r="7"/><circle cx="152" cy="91" r="7"/><circle cx="174" cy="98" r="7"/>
  </g>
  <rect x="20" y="108" width="170" height="12" fill="#d9f99d" stroke="#65a30d" stroke-width="0.6"/>
  <rect x="92" y="120" width="10" height="6" fill="#bbf7d0" stroke="#15803d" stroke-width="0.8"/>
  <rect x="108" y="120" width="10" height="6" fill="#bbf7d0" stroke="#15803d" stroke-width="0.8"/>
  <circle cx="105" cy="123" r="3" fill="#ffffff" stroke="#475569" stroke-width="0.6"/>
  <g font-size="6.6" fill="#1e293b">
    <text x="196" y="29">waxy cuticle</text>
    <text x="196" y="42">upper epidermis</text>
    <text x="196" y="65">palisade mesophyll</text>
    <text x="196" y="74" fill="#15803d" font-size="6">(most chloroplasts)</text>
    <text x="196" y="97">spongy mesophyll</text>
    <text x="196" y="106" fill="#15803d" font-size="6">(air spaces for gases)</text>
    <text x="196" y="118">lower epidermis</text>
    <text x="124" y="135" font-size="6.4">stoma &amp; guard cells</text>
  </g>
  <text x="105" y="148" text-anchor="middle" font-size="6.6" fill="#475569">Stomata let CO₂ in and O₂ out; guard cells open/close them</text>
</svg>`;

// ── VENTILATION MECHANISM (s8-02) ───────────────────────────────────────────────
DIAGRAMS["ventilation-mechanism"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="vm" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#2563eb"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Breathing In and Out</text>
  <text x="68" y="30" text-anchor="middle" font-size="8.5" font-weight="700" fill="#16a34a">INHALE</text>
  <path d="M40 38 h56 v66 h-56 Z" fill="#eff6ff" stroke="#94a3b8" stroke-width="1.2"/>
  <g stroke="#dc2626" stroke-width="2" fill="none"><path d="M44 50 h48"/><path d="M44 60 h48"/><path d="M44 70 h48"/></g>
  <ellipse cx="68" cy="80" rx="22" ry="16" fill="#fecaca" stroke="#ef4444" stroke-width="1.2"/>
  <path d="M44 104 Q68 110 92 104" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
  <text x="68" y="120" text-anchor="middle" font-size="6.4" fill="#475569">diaphragm flattens</text>
  <text x="68" y="129" text-anchor="middle" font-size="6.4" fill="#475569">ribs up &amp; out · volume ↑</text>
  <text x="68" y="138" text-anchor="middle" font-size="6.4" fill="#16a34a">pressure ↓ → air in</text>
  <line x1="68" y1="46" x2="68" y2="36" stroke="#2563eb" stroke-width="1.4" marker-end="url(#vm)"/>
  <text x="212" y="30" text-anchor="middle" font-size="8.5" font-weight="700" fill="#b45309">EXHALE</text>
  <path d="M184 38 h56 v66 h-56 Z" fill="#fff7ed" stroke="#94a3b8" stroke-width="1.2"/>
  <g stroke="#dc2626" stroke-width="2" fill="none"><path d="M190 56 h44"/><path d="M190 64 h44"/><path d="M190 72 h44"/></g>
  <ellipse cx="212" cy="78" rx="17" ry="12" fill="#fecaca" stroke="#ef4444" stroke-width="1.2"/>
  <path d="M188 100 Q212 88 236 100" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
  <text x="212" y="120" text-anchor="middle" font-size="6.4" fill="#475569">diaphragm domes up</text>
  <text x="212" y="129" text-anchor="middle" font-size="6.4" fill="#475569">ribs down &amp; in · volume ↓</text>
  <text x="212" y="138" text-anchor="middle" font-size="6.4" fill="#b45309">pressure ↑ → air out</text>
  <line x1="212" y1="36" x2="212" y2="46" stroke="#2563eb" stroke-width="1.4" marker-end="url(#vm)"/>
  <text x="140" y="156" text-anchor="middle" font-size="6.6" fill="#475569">Ventilation is a mechanical process driven by pressure changes</text>
</svg>`;

// ── ALVEOLUS GAS EXCHANGE (s8-02) ───────────────────────────────────────────────
DIAGRAMS["alveolus-gas-exchange"] = `<svg viewBox="0 0 280 158" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="ag" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#475569"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Gas Exchange in an Alveolus</text>
  <circle cx="105" cy="82" r="56" fill="#e0f2fe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="105" y="50" text-anchor="middle" font-size="7.5" font-weight="700" fill="#1d4ed8">alveolus (air sac)</text>
  <path d="M150 40 C200 50 200 120 150 124" fill="none" stroke="#dc2626" stroke-width="9" stroke-linecap="round"/>
  <path d="M150 40 C200 50 200 120 150 124" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round"/>
  <text x="205" y="84" font-size="7" font-weight="700" fill="#b91c1c" transform="rotate(90 205 84)" text-anchor="middle">capillary (blood)</text>
  <line x1="120" y1="70" x2="158" y2="64" stroke="#16a34a" stroke-width="1.6" marker-end="url(#ag)"/>
  <text x="138" y="60" text-anchor="middle" font-size="7" fill="#15803d">O₂ in</text>
  <line x1="158" y1="100" x2="120" y2="96" stroke="#7c3aed" stroke-width="1.6" marker-end="url(#ag)"/>
  <text x="138" y="114" text-anchor="middle" font-size="7" fill="#6d28d9">CO₂ out</text>
  <text x="140" y="146" text-anchor="middle" font-size="6.5" fill="#475569">Thin walls · large surface area · moist · rich blood supply → fast diffusion</text>
</svg>`;

// ── PHOTOSYNTHESIS RATE / LIMITING FACTORS (s8-03) ──────────────────────────────
DIAGRAMS["photosynthesis-rate"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Limiting Factors of Photosynthesis</text>
  <line x1="42" y1="24" x2="42" y2="126" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="42" y1="126" x2="252" y2="126" stroke="#1e293b" stroke-width="1.5"/>
  <text x="20" y="80" font-size="7" fill="#475569" transform="rotate(-90 20 80)" text-anchor="middle">rate of photosynthesis</text>
  <text x="146" y="143" font-size="7" fill="#475569" text-anchor="middle">light intensity / CO₂ concentration</text>
  <path d="M42 126 C90 60 150 46 240 44" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <line x1="150" y1="46" x2="150" y2="126" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="3,2"/>
  <text x="92" y="86" font-size="6.4" fill="#15803d" text-anchor="middle">factor is limiting</text>
  <text x="92" y="94" font-size="6.4" fill="#15803d" text-anchor="middle">(rate rises)</text>
  <text x="200" y="38" font-size="6.4" fill="#b45309" text-anchor="middle">levels off — another</text>
  <text x="200" y="46" font-size="6.4" fill="#b45309" text-anchor="middle">factor now limits</text>
  <text x="140" y="158" text-anchor="middle" font-size="6.6" fill="#475569">The limiting factor is whichever is in shortest supply</text>
</svg>`;

// ── PATHOGEN TYPES (s8-04) ──────────────────────────────────────────────────────
DIAGRAMS["pathogen-types"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Four Types of Pathogen</text>
  <rect x="8" y="22" width="62" height="116" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
  <ellipse cx="39" cy="50" rx="16" ry="9" fill="#fca5a5" stroke="#b91c1c" stroke-width="1"/>
  <path d="M55 50 q8 -2 10 -6" stroke="#b91c1c" stroke-width="1" fill="none"/>
  <text x="39" y="78" text-anchor="middle" font-size="7.5" font-weight="700" fill="#991b1b">Bacteria</text>
  <text x="39" y="92" text-anchor="middle" font-size="6" fill="#475569">living cells;</text>
  <text x="39" y="100" text-anchor="middle" font-size="6" fill="#475569">release toxins</text>
  <text x="39" y="114" text-anchor="middle" font-size="6" fill="#334155">e.g. Salmonella</text>
  <text x="39" y="122" text-anchor="middle" font-size="6" fill="#334155">→ food poisoning</text>
  <rect x="74" y="22" width="62" height="116" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
  <polygon points="105,40 116,48 112,60 98,60 94,48" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1"/>
  <text x="105" y="78" text-anchor="middle" font-size="7.5" font-weight="700" fill="#1e40af">Viruses</text>
  <text x="105" y="92" text-anchor="middle" font-size="6" fill="#475569">not living;</text>
  <text x="105" y="100" text-anchor="middle" font-size="6" fill="#475569">hijack cells</text>
  <text x="105" y="114" text-anchor="middle" font-size="6" fill="#334155">e.g. influenza</text>
  <text x="105" y="122" text-anchor="middle" font-size="6" fill="#334155">→ flu</text>
  <rect x="140" y="22" width="62" height="116" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="1.2"/>
  <line x1="171" y1="42" x2="171" y2="62" stroke="#a16207" stroke-width="1.5"/>
  <circle cx="171" cy="40" r="6" fill="#fde047" stroke="#a16207" stroke-width="1"/>
  <text x="171" y="78" text-anchor="middle" font-size="7.5" font-weight="700" fill="#92400e">Fungi</text>
  <text x="171" y="92" text-anchor="middle" font-size="6" fill="#475569">spores spread</text>
  <text x="171" y="100" text-anchor="middle" font-size="6" fill="#475569">by air/contact</text>
  <text x="171" y="114" text-anchor="middle" font-size="6" fill="#334155">e.g. Tinea</text>
  <text x="171" y="122" text-anchor="middle" font-size="6" fill="#334155">→ athlete's foot</text>
  <rect x="206" y="22" width="66" height="116" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.2"/>
  <path d="M239 40 q-12 6 0 16 q12 6 0 12" fill="#86efac" stroke="#15803d" stroke-width="1"/>
  <text x="239" y="78" text-anchor="middle" font-size="7.5" font-weight="700" fill="#15803d">Protists</text>
  <text x="239" y="92" text-anchor="middle" font-size="6" fill="#475569">often carried</text>
  <text x="239" y="100" text-anchor="middle" font-size="6" fill="#475569">by a vector</text>
  <text x="239" y="114" text-anchor="middle" font-size="6" fill="#334155">e.g. Plasmodium</text>
  <text x="239" y="122" text-anchor="middle" font-size="6" fill="#334155">→ malaria</text>
</svg>`;

// ── ANTIBIOTIC RESISTANCE (s8-04) ───────────────────────────────────────────────
DIAGRAMS["antibiotic-resistance"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="ar" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#64748b"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">How Antibiotic Resistance Develops</text>
  <g>
    <text x="40" y="30" text-anchor="middle" font-size="6.6" fill="#475569">1. Population with</text>
    <text x="40" y="38" text-anchor="middle" font-size="6.6" fill="#475569">a few resistant</text>
    <circle cx="26" cy="56" r="5" fill="#93c5fd"/><circle cx="40" cy="52" r="5" fill="#93c5fd"/><circle cx="54" cy="58" r="5" fill="#93c5fd"/>
    <circle cx="33" cy="68" r="5" fill="#93c5fd"/><circle cx="48" cy="70" r="5" fill="#f87171"/>
  </g>
  <line x1="62" y1="60" x2="82" y2="60" stroke="#64748b" stroke-width="1.4" marker-end="url(#ar)"/>
  <g>
    <text x="108" y="30" text-anchor="middle" font-size="6.6" fill="#475569">2. Antibiotic kills</text>
    <text x="108" y="38" text-anchor="middle" font-size="6.6" fill="#475569">non-resistant</text>
    <circle cx="94" cy="56" r="5" fill="#cbd5e1" stroke="#94a3b8" stroke-dasharray="2,1"/><circle cx="108" cy="52" r="5" fill="#cbd5e1" stroke="#94a3b8" stroke-dasharray="2,1"/>
    <circle cx="122" cy="58" r="5" fill="#cbd5e1" stroke="#94a3b8" stroke-dasharray="2,1"/>
    <circle cx="116" cy="70" r="5" fill="#f87171"/>
  </g>
  <line x1="130" y1="60" x2="150" y2="60" stroke="#64748b" stroke-width="1.4" marker-end="url(#ar)"/>
  <g>
    <text x="176" y="30" text-anchor="middle" font-size="6.6" fill="#475569">3. Resistant ones</text>
    <text x="176" y="38" text-anchor="middle" font-size="6.6" fill="#475569">survive &amp; reproduce</text>
    <circle cx="166" cy="56" r="5" fill="#f87171"/><circle cx="180" cy="54" r="5" fill="#f87171"/>
    <circle cx="172" cy="68" r="5" fill="#f87171"/><circle cx="186" cy="66" r="5" fill="#f87171"/>
  </g>
  <line x1="196" y1="60" x2="216" y2="60" stroke="#64748b" stroke-width="1.4" marker-end="url(#ar)"/>
  <g>
    <text x="246" y="30" text-anchor="middle" font-size="6.6" fill="#475569">4. Resistant strain</text>
    <text x="246" y="38" text-anchor="middle" font-size="6.6" fill="#475569">spreads</text>
    <circle cx="232" cy="56" r="5" fill="#dc2626"/><circle cx="246" cy="52" r="5" fill="#dc2626"/><circle cx="260" cy="58" r="5" fill="#dc2626"/>
    <circle cx="239" cy="68" r="5" fill="#dc2626"/><circle cx="253" cy="70" r="5" fill="#dc2626"/>
  </g>
  <rect x="20" y="92" width="240" height="44" rx="5" fill="#fef2f2" stroke="#ef4444" stroke-width="1"/>
  <text x="140" y="106" text-anchor="middle" font-size="6.8" fill="#991b1b">This is natural selection. To slow it: finish every course of antibiotics,</text>
  <text x="140" y="118" text-anchor="middle" font-size="6.8" fill="#991b1b">don't use them for viral infections, and reduce use in farming.</text>
  <text x="140" y="130" text-anchor="middle" font-size="6.4" fill="#64748b">Blue = killed by antibiotic · Red = resistant</text>
</svg>`;

// ── QUADRAT SAMPLING (s8-05) ────────────────────────────────────────────────────
DIAGRAMS["quadrat-sampling"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Estimating Population with a Quadrat</text>
  <rect x="20" y="22" width="150" height="110" rx="4" fill="#f0fdf4" stroke="#86efac" stroke-width="1.2"/>
  <rect x="58" y="46" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <g stroke="#1e293b" stroke-width="0.6"><line x1="80" y1="46" x2="80" y2="90"/><line x1="58" y1="68" x2="102" y2="68"/></g>
  <g fill="#16a34a"><circle cx="68" cy="56" r="3"/><circle cx="92" cy="58" r="3"/><circle cx="64" cy="80" r="3"/><circle cx="88" cy="82" r="3"/><circle cx="78" cy="70" r="3"/></g>
  <g fill="#bbf7d0"><circle cx="34" cy="40" r="3"/><circle cx="150" cy="36" r="3"/><circle cx="40" cy="116" r="3"/><circle cx="150" cy="118" r="3"/><circle cx="120" cy="100" r="3"/></g>
  <text x="80" y="104" text-anchor="middle" font-size="6.4" fill="#475569">quadrat (0.5 m × 0.5 m)</text>
  <rect x="180" y="30" width="92" height="100" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="226" y="44" text-anchor="middle" font-size="7" font-weight="700" fill="#1e293b">Method</text>
  <text x="186" y="58" font-size="6.3" fill="#334155">1. Place quadrats</text>
  <text x="186" y="68" font-size="6.3" fill="#334155">   randomly</text>
  <text x="186" y="80" font-size="6.3" fill="#334155">2. Count species</text>
  <text x="186" y="92" font-size="6.3" fill="#334155">3. Find the mean</text>
  <text x="186" y="104" font-size="6.3" fill="#334155">4. × by total area</text>
  <text x="186" y="116" font-size="6.3" fill="#334155">   ÷ quadrat area</text>
  <text x="140" y="148" text-anchor="middle" font-size="6.4" fill="#475569">Use a transect (a line of quadrats) to study how a population changes across an area</text>
</svg>`;

// ── FOOD WEB (s8-05) ────────────────────────────────────────────────────────────
DIAGRAMS["food-web"] = `<svg viewBox="0 0 280 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="fw" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#94a3b8"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">A Food Web</text>
  <circle cx="50" cy="130" r="18" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="50" y="127" text-anchor="middle" font-size="13">🌿</text><text x="50" y="140" text-anchor="middle" font-size="6">grass</text>
  <circle cx="140" cy="135" r="18" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/><text x="140" y="132" text-anchor="middle" font-size="13">🌳</text><text x="140" y="145" text-anchor="middle" font-size="6">plants</text>
  <circle cx="55" cy="74" r="18" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/><text x="55" y="71" text-anchor="middle" font-size="13">🐇</text><text x="55" y="84" text-anchor="middle" font-size="6">rabbit</text>
  <circle cx="140" cy="72" r="18" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5"/><text x="140" y="69" text-anchor="middle" font-size="13">🐁</text><text x="140" y="82" text-anchor="middle" font-size="6">mouse</text>
  <circle cx="225" cy="100" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/><text x="225" y="97" text-anchor="middle" font-size="13">🦊</text><text x="225" y="110" text-anchor="middle" font-size="6">fox</text>
  <circle cx="210" cy="38" r="18" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/><text x="210" y="35" text-anchor="middle" font-size="13">🦉</text><text x="210" y="48" text-anchor="middle" font-size="6">owl</text>
  <g stroke="#94a3b8" stroke-width="1.3" fill="none">
    <line x1="50" y1="112" x2="54" y2="92" marker-end="url(#fw)"/>
    <line x1="130" y1="120" x2="62" y2="88" marker-end="url(#fw)"/>
    <line x1="138" y1="118" x2="140" y2="90" marker-end="url(#fw)"/>
    <line x1="70" y1="68" x2="208" y2="44" marker-end="url(#fw)"/>
    <line x1="72" y1="80" x2="208" y2="96" marker-end="url(#fw)"/>
    <line x1="150" y1="60" x2="204" y2="48" marker-end="url(#fw)"/>
    <line x1="152" y1="80" x2="210" y2="92" marker-end="url(#fw)"/>
  </g>
  <text x="140" y="160" text-anchor="middle" font-size="6.5" fill="#475569">Arrows point in the direction energy flows. Overlapping chains = a food web.</text>
</svg>`;

// ── CONSERVATION OF MASS (s8-07) ────────────────────────────────────────────────
DIAGRAMS["conservation-of-mass"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Conservation of Mass</text>
  <text x="70" y="32" text-anchor="middle" font-size="7.5" font-weight="700" fill="#475569">REACTANTS</text>
  <rect x="22" y="40" width="44" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.2"/>
  <text x="44" y="58" text-anchor="middle" font-size="6.6" fill="#1e40af">magnesium</text>
  <text x="44" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#1e40af">2.4 g</text>
  <text x="76" y="64" text-anchor="middle" font-size="11" fill="#475569">+</text>
  <rect x="86" y="40" width="44" height="40" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="1.2"/>
  <text x="108" y="58" text-anchor="middle" font-size="6.6" fill="#1e40af">oxygen</text>
  <text x="108" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#1e40af">1.6 g</text>
  <text x="150" y="64" text-anchor="middle" font-size="13" fill="#16a34a">→</text>
  <text x="218" y="32" text-anchor="middle" font-size="7.5" font-weight="700" fill="#475569">PRODUCT</text>
  <rect x="170" y="40" width="96" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.2"/>
  <text x="218" y="58" text-anchor="middle" font-size="6.6" fill="#15803d">magnesium oxide</text>
  <text x="218" y="72" text-anchor="middle" font-size="8" font-weight="700" fill="#15803d">4.0 g</text>
  <rect x="44" y="98" width="178" height="22" rx="11" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.2"/>
  <text x="133" y="113" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">2.4 g + 1.6 g = 4.0 g</text>
  <text x="140" y="138" text-anchor="middle" font-size="6.6" fill="#475569">No atoms are made or lost — they are just rearranged, so total mass stays the same</text>
</svg>`;

// ── EXOTHERMIC / ENDOTHERMIC ENERGY DIAGRAM (s8-07) ─────────────────────────────
DIAGRAMS["energy-level-diagram"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs>
    <marker id="el" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#475569"/></marker>
  </defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Exothermic vs Endothermic</text>
  <text x="68" y="28" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">Exothermic</text>
  <line x1="22" y1="34" x2="22" y2="120" stroke="#1e293b" stroke-width="1"/>
  <line x1="22" y1="120" x2="120" y2="120" stroke="#1e293b" stroke-width="1"/>
  <text x="12" y="80" font-size="6" fill="#475569" transform="rotate(-90 12 80)" text-anchor="middle">energy</text>
  <path d="M30 50 h22 q10 0 14 12 q6 18 18 26 h22" fill="none" stroke="#dc2626" stroke-width="2"/>
  <line x1="40" y1="50" x2="40" y2="104" stroke="#16a34a" stroke-width="1.2" marker-end="url(#el)"/>
  <text x="44" y="80" font-size="6" fill="#15803d">energy</text>
  <text x="44" y="88" font-size="6" fill="#15803d">released</text>
  <text x="34" y="48" font-size="6" fill="#475569">reactants</text>
  <text x="92" y="100" font-size="6" fill="#475569">products</text>
  <text x="68" y="134" text-anchor="middle" font-size="6.3" fill="#475569">products lower → releases heat</text>
  <text x="212" y="28" text-anchor="middle" font-size="8" font-weight="700" fill="#2563eb">Endothermic</text>
  <line x1="166" y1="34" x2="166" y2="120" stroke="#1e293b" stroke-width="1"/>
  <line x1="166" y1="120" x2="264" y2="120" stroke="#1e293b" stroke-width="1"/>
  <path d="M174 100 h22 q10 0 14 -12 q6 -18 18 -26 h22" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="184" y1="100 " x2="184" y2="52" stroke="#7c3aed" stroke-width="1.2" marker-end="url(#el)"/>
  <text x="188" y="78" font-size="6" fill="#6d28d9">energy</text>
  <text x="188" y="86" font-size="6" fill="#6d28d9">absorbed</text>
  <text x="178" y="112" font-size="6" fill="#475569">reactants</text>
  <text x="238" y="50" font-size="6" fill="#475569">products</text>
  <text x="212" y="134" text-anchor="middle" font-size="6.3" fill="#475569">products higher → takes in heat</text>
  <text x="140" y="152" text-anchor="middle" font-size="6.4" fill="#94a3b8">e.g. combustion (exo) · thermal decomposition (endo)</text>
</svg>`;

// ── DISPLACEMENT REACTION (s8-09) ───────────────────────────────────────────────
DIAGRAMS["displacement-reaction"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Displacement Reaction</text>
  <text x="70" y="30" text-anchor="middle" font-size="7" fill="#475569">iron nail in copper sulfate</text>
  <path d="M34 40 h72 l-8 70 h-56 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <rect x="66" y="34" width="8" height="60" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
  <text x="112" y="50" font-size="6.4" fill="#0369a1">blue solution</text>
  <text x="112" y="59" font-size="6.4" fill="#475569">(copper sulfate)</text>
  <text x="44" y="124" text-anchor="middle" font-size="6.4" fill="#475569">BEFORE</text>
  <text x="140" y="74" text-anchor="middle" font-size="16" fill="#16a34a">→</text>
  <path d="M174 40 h72 l-8 70 h-56 Z" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.2"/>
  <rect x="206" y="34" width="8" height="60" rx="2" fill="#f97316" stroke="#c2410c" stroke-width="1"/>
  <circle cx="210" cy="80" r="3" fill="#ea580c"/><circle cx="204" cy="88" r="2.5" fill="#ea580c"/>
  <text x="252" y="50" font-size="6.4" fill="#15803d">paler / green</text>
  <text x="252" y="59" font-size="6.4" fill="#c2410c">copper coats nail</text>
  <text x="210" y="124" text-anchor="middle" font-size="6.4" fill="#475569">AFTER</text>
  <text x="140" y="140" text-anchor="middle" font-size="6.8" fill="#334155">iron + copper sulfate → iron sulfate + copper  (more reactive metal displaces less reactive)</text>
</svg>`;

// ── POLYMERS: THERMOSOFTENING vs THERMOSETTING (s8-10) ──────────────────────────
DIAGRAMS["polymers-comparison"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Thermosoftening vs Thermosetting Polymers</text>
  <rect x="10" y="22" width="128" height="116" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="74" y="36" text-anchor="middle" font-size="7.8" font-weight="700" fill="#1e40af">Thermosoftening</text>
  <g stroke="#2563eb" stroke-width="1.6" fill="none">
    <path d="M22 50 q12 -8 24 0 t24 0 t24 0 t24 0"/>
    <path d="M22 62 q12 8 24 0 t24 0 t24 0 t24 0"/>
    <path d="M22 74 q12 -8 24 0 t24 0 t24 0 t24 0"/>
  </g>
  <text x="74" y="98" text-anchor="middle" font-size="6.4" fill="#475569">separate chains, no links</text>
  <text x="74" y="110" text-anchor="middle" font-size="6.4" fill="#16a34a">melts &amp; can be remoulded</text>
  <text x="74" y="122" text-anchor="middle" font-size="6.4" fill="#334155">e.g. polythene bottles</text>
  <text x="74" y="132" text-anchor="middle" font-size="6" fill="#94a3b8">recyclable</text>
  <rect x="142" y="22" width="128" height="116" rx="6" fill="#fef2f2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="206" y="36" text-anchor="middle" font-size="7.8" font-weight="700" fill="#991b1b">Thermosetting</text>
  <g stroke="#dc2626" stroke-width="1.6" fill="none">
    <path d="M154 50 q12 -8 24 0 t24 0 t24 0 t24 0"/>
    <path d="M154 70 q12 8 24 0 t24 0 t24 0 t24 0"/>
    <line x1="166" y1="50" x2="166" y2="70"/><line x1="190" y1="50" x2="190" y2="70"/><line x1="214" y1="50" x2="214" y2="70"/><line x1="238" y1="50" x2="238" y2="70"/>
  </g>
  <text x="206" y="98" text-anchor="middle" font-size="6.4" fill="#475569">cross-links lock chains</text>
  <text x="206" y="110" text-anchor="middle" font-size="6.4" fill="#dc2626">does NOT melt; heat-resistant</text>
  <text x="206" y="122" text-anchor="middle" font-size="6.4" fill="#334155">e.g. plug casings, saucepan handles</text>
  <text x="206" y="132" text-anchor="middle" font-size="6" fill="#94a3b8">cannot be remoulded</text>
</svg>`;

// ── CIRCUIT SYMBOLS (s8-12) ─────────────────────────────────────────────────────
DIAGRAMS["circuit-symbols"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Common Circuit Symbols</text>
  <g stroke="#1e293b" stroke-width="1.6" fill="none">
    <line x1="20" y1="38" x2="36" y2="38"/><line x1="44" y1="30" x2="44" y2="46"/><line x1="44" y1="34" x2="50" y2="34"/><line x1="50" y1="42" x2="50" y2="26"/><line x1="50" y1="38" x2="66" y2="38"/>
    <line x1="106" y1="38" x2="122" y2="38"/><rect x="122" y="32" width="20" height="12" fill="none"/><line x1="142" y1="38" x2="158" y2="38"/>
    <line x1="198" y1="38" x2="214" y2="38"/><circle cx="226" cy="38" r="12"/><path d="M218 38 h16 M226 30 v16" /><line x1="238" y1="38" x2="254" y2="38"/>
    <line x1="20" y1="92" x2="36" y2="92"/><circle cx="48" cy="92" r="12"/><line x1="40" y1="84" x2="56" y2="100"/><line x1="40" y1="100" x2="56" y2="84"/><line x1="60" y1="92" x2="66" y2="92"/>
    <line x1="106" y1="92" x2="122" y2="92"/><circle cx="134" cy="92" r="12"/><text x="134" y="96" font-size="10" stroke="none" fill="#1e293b" text-anchor="middle">A</text><line x1="146" y1="92" x2="158" y2="92"/>
    <line x1="198" y1="92" x2="214" y2="92"/><circle cx="226" cy="92" r="12"/><text x="226" y="96" font-size="10" stroke="none" fill="#1e293b" text-anchor="middle">V</text><line x1="238" y1="92" x2="254" y2="92"/>
  </g>
  <g font-size="6.6" fill="#475569" text-anchor="middle">
    <text x="43" y="60">cell</text><text x="132" y="60">resistor</text><text x="226" y="60">bulb</text>
    <text x="43" y="114">motor</text><text x="132" y="114">ammeter</text><text x="226" y="114">voltmeter</text>
  </g>
  <text x="140" y="140" text-anchor="middle" font-size="6.6" fill="#475569">Ohm's Law: V = I × R  (voltage = current × resistance)</text>
</svg>`;

// ── ELECTROMAGNET / SOLENOID (s8-13) ────────────────────────────────────────────
DIAGRAMS["electromagnet"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="em2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#2563eb"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">An Electromagnet (Solenoid)</text>
  <rect x="70" y="58" width="130" height="22" rx="3" fill="#cbd5e1" stroke="#64748b" stroke-width="1.2"/>
  <text x="135" y="73" text-anchor="middle" font-size="6.6" fill="#475569">soft iron core</text>
  <g stroke="#b45309" stroke-width="2.4" fill="none">
    <path d="M78 58 q6 -14 12 0"/><path d="M96 58 q6 -14 12 0"/><path d="M114 58 q6 -14 12 0"/><path d="M132 58 q6 -14 12 0"/><path d="M150 58 q6 -14 12 0"/><path d="M168 58 q6 -14 12 0"/>
    <path d="M78 80 q6 14 12 0"/><path d="M96 80 q6 14 12 0"/><path d="M114 80 q6 14 12 0"/><path d="M132 80 q6 14 12 0"/><path d="M150 80 q6 14 12 0"/><path d="M168 80 q6 14 12 0"/>
  </g>
  <text x="135" y="44" text-anchor="middle" font-size="6.4" fill="#b45309">coil of wire</text>
  <line x1="186" y1="69" x2="230" y2="69" stroke="#1e293b" stroke-width="1.4"/>
  <line x1="74" y1="69" x2="40" y2="69" stroke="#1e293b" stroke-width="1.4"/>
  <line x1="40" y1="69" x2="40" y2="100" stroke="#1e293b" stroke-width="1.4"/>
  <line x1="230" y1="69" x2="230" y2="100" stroke="#1e293b" stroke-width="1.4"/>
  <line x1="40" y1="100" x2="120" y2="100" stroke="#1e293b" stroke-width="1.4"/>
  <line x1="150" y1="100" x2="230" y2="100" stroke="#1e293b" stroke-width="1.4"/>
  <line x1="125" y1="94" x2="125" y2="106" stroke="#1e293b" stroke-width="1.4"/><line x1="131" y1="90" x2="131" y2="110" stroke="#1e293b" stroke-width="1.4"/><line x1="139" y1="94" x2="139" y2="106" stroke="#1e293b" stroke-width="1.4"/><line x1="145" y1="90" x2="145" y2="110" stroke="#1e293b" stroke-width="1.4"/>
  <text x="135" y="120" text-anchor="middle" font-size="6.2" fill="#475569">cell</text>
  <rect x="14" y="123" width="252" height="25" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="0.8"/>
  <text x="140" y="134" text-anchor="middle" font-size="6.3" fill="#1e40af">Stronger with: more current · more turns on the coil · an iron core.</text>
  <text x="140" y="144" text-anchor="middle" font-size="6.3" fill="#1e40af">Switch the current off and the magnetism stops.</text>
</svg>`;

// ── REFRACTION (s8-16) ──────────────────────────────────────────────────────────
DIAGRAMS["refraction"] = `<svg viewBox="0 0 280 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="rf" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#f59e0b"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Refraction of Light</text>
  <rect x="20" y="78" width="240" height="60" fill="#dbeafe" stroke="#93c5fd" stroke-width="0.8"/>
  <text x="44" y="58" font-size="6.6" fill="#475569">air (less dense)</text>
  <text x="44" y="98" font-size="6.6" fill="#1e40af">glass (more dense)</text>
  <line x1="140" y1="24" x2="140" y2="134" stroke="#94a3b8" stroke-width="0.8" stroke-dasharray="4,3"/>
  <text x="146" y="32" font-size="6" fill="#94a3b8">normal</text>
  <line x1="70" y1="34" x2="140" y2="78" stroke="#f59e0b" stroke-width="2" marker-end="url(#rf)"/>
  <line x1="140" y1="78" x2="186" y2="134" stroke="#f59e0b" stroke-width="2" marker-end="url(#rf)"/>
  <path d="M140 60 A18 18 0 0 1 128 70" fill="none" stroke="#16a34a" stroke-width="0.9"/>
  <text x="120" y="62" font-size="6" fill="#15803d">i</text>
  <path d="M140 96 A18 18 0 0 0 152 106" fill="none" stroke="#dc2626" stroke-width="0.9"/>
  <text x="156" y="104" font-size="6" fill="#b91c1c">r</text>
  <text x="140" y="150" text-anchor="middle" font-size="6.6" fill="#475569">Entering glass, light slows and bends TOWARD the normal (i &gt; r)</text>
</svg>`;

// ── LENSES: CONVEX vs CONCAVE (s8-16) ───────────────────────────────────────────
DIAGRAMS["lenses"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <defs><marker id="ln" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#2563eb"/></marker></defs>
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Convex vs Concave Lenses</text>
  <text x="70" y="30" text-anchor="middle" font-size="7.6" font-weight="700" fill="#16a34a">Convex (converging)</text>
  <path d="M70 38 Q86 70 70 102 Q54 70 70 38 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.2"/>
  <g stroke="#2563eb" stroke-width="1.4">
    <line x1="20" y1="55" x2="70" y2="55" marker-end="url(#ln)"/><line x1="70" y1="55" x2="116" y2="70"/>
    <line x1="20" y1="70" x2="70" y2="70" marker-end="url(#ln)"/><line x1="70" y1="70" x2="116" y2="70"/>
    <line x1="20" y1="85" x2="70" y2="85" marker-end="url(#ln)"/><line x1="70" y1="85" x2="116" y2="70"/>
  </g>
  <circle cx="116" cy="70" r="2.5" fill="#dc2626"/><text x="116" y="86" font-size="6" fill="#b91c1c" text-anchor="middle">focal point</text>
  <text x="70" y="116" text-anchor="middle" font-size="6.3" fill="#475569">rays bend INWARD to a focus</text>
  <text x="210" y="30" text-anchor="middle" font-size="7.6" font-weight="700" fill="#b45309">Concave (diverging)</text>
  <path d="M204 38 Q214 70 204 102 L218 102 Q208 70 218 38 Z" fill="#fde68a" stroke="#b45309" stroke-width="1.2"/>
  <g stroke="#b45309" stroke-width="1.4">
    <line x1="160" y1="55" x2="210" y2="55" marker-end="url(#ln)"/><line x1="210" y1="55" x2="256" y2="44"/>
    <line x1="160" y1="70" x2="210" y2="70" marker-end="url(#ln)"/><line x1="210" y1="70" x2="256" y2="70"/>
    <line x1="160" y1="85" x2="210" y2="85" marker-end="url(#ln)"/><line x1="210" y1="85" x2="256" y2="96"/>
  </g>
  <text x="210" y="116" text-anchor="middle" font-size="6.3" fill="#475569">rays spread OUTWARD (diverge)</text>
  <text x="140" y="140" text-anchor="middle" font-size="6.4" fill="#94a3b8">Convex lenses are used in magnifying glasses and the eye</text>
</svg>`;

// ── THE HUMAN EYE (s8-16) ───────────────────────────────────────────────────────
DIAGRAMS["the-eye"] = `<svg viewBox="0 0 280 158" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Human Eye</text>
  <path d="M40 78 Q120 18 200 78 Q120 138 40 78 Z" fill="#eff6ff" stroke="#94a3b8" stroke-width="1.2"/>
  <circle cx="120" cy="78" r="60" fill="none" stroke="#cbd5e1" stroke-width="0.8"/>
  <path d="M60 78 Q70 60 80 78 Q70 96 60 78 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="1.2"/>
  <rect x="58" y="70" width="6" height="16" rx="2" fill="#1e293b"/>
  <ellipse cx="92" cy="78" rx="9" ry="20" fill="#bae6fd" stroke="#0284c7" stroke-width="1.2"/>
  <path d="M178 50 Q188 78 178 106" fill="none" stroke="#f59e0b" stroke-width="3"/>
  <circle cx="178" cy="78" r="2.5" fill="#dc2626"/>
  <g font-size="6.4" fill="#1e293b">
    <text x="40" y="60">cornea</text><line x1="56" y1="62" x2="64" y2="72" stroke="#94a3b8" stroke-width="0.5"/>
    <text x="44" y="120">pupil/iris</text><line x1="62" y1="114" x2="62" y2="90" stroke="#94a3b8" stroke-width="0.5"/>
    <text x="92" y="116" text-anchor="middle">lens</text><line x1="92" y1="110" x2="92" y2="98" stroke="#94a3b8" stroke-width="0.5"/>
    <text x="206" y="50">retina</text><text x="206" y="59" font-size="5.6" fill="#b91c1c">(light-sensitive)</text>
    <text x="206" y="112">optic</text><text x="206" y="120">nerve</text>
  </g>
  <line x1="190" y1="106" x2="204" y2="112" stroke="#94a3b8" stroke-width="0.5"/>
  <text x="140" y="150" text-anchor="middle" font-size="6.5" fill="#475569">Cornea + lens focus light onto the retina; the optic nerve sends signals to the brain</text>
</svg>`;

// ── COLOUR MIXING / FILTERS (s8-16) ─────────────────────────────────────────────
DIAGRAMS["colour-mixing"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Mixing Coloured Light (Additive)</text>
  <g style="mix-blend-mode:screen">
    <circle cx="118" cy="58" r="32" fill="#ff0000"/>
    <circle cx="98" cy="92" r="32" fill="#00ff00"/>
    <circle cx="138" cy="92" r="32" fill="#0000ff"/>
  </g>
  <text x="118" y="40" text-anchor="middle" font-size="6.6" font-weight="700" fill="#dc2626">RED</text>
  <text x="72" y="108" text-anchor="middle" font-size="6.6" font-weight="700" fill="#16a34a">GREEN</text>
  <text x="166" y="108" text-anchor="middle" font-size="6.6" font-weight="700" fill="#2563eb">BLUE</text>
  <text x="118" y="80" text-anchor="middle" font-size="6" fill="#1e293b">white</text>
  <rect x="196" y="34" width="76" height="46" rx="4" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="234" y="48" text-anchor="middle" font-size="6.6" font-weight="700" fill="#1e293b">Primary mixes</text>
  <text x="202" y="60" font-size="6" fill="#475569">R + G = yellow</text>
  <text x="202" y="69" font-size="6" fill="#475569">G + B = cyan</text>
  <text x="202" y="78" font-size="6" fill="#475569">R + B = magenta</text>
  <rect x="196" y="86" width="76" height="40" rx="4" fill="#fef9c3" stroke="#ca8a04"/>
  <text x="234" y="99" text-anchor="middle" font-size="6.4" font-weight="700" fill="#92400e">Filters</text>
  <text x="202" y="110" font-size="5.9" fill="#92400e">absorb all colours</text>
  <text x="202" y="119" font-size="5.9" fill="#92400e">except their own</text>
  <text x="140" y="142" text-anchor="middle" font-size="6.4" fill="#475569">Red + Green + Blue light = white. A red filter only lets red light through.</text>
</svg>`;
