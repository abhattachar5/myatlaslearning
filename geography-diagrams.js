// geography-diagrams.js — SVG diagrams for geography flashcards
// Each key matches the `image` field on a flashcard in data.js

// ── PLATE TECTONICS ─────────────────────────────────────────────────────────
DIAGRAMS["plate-boundaries"] = `<svg viewBox="0 0 340 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="57" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Constructive</text>
  <text x="170" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Destructive</text>
  <text x="283" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Conservative</text>
  <!-- dividers -->
  <line x1="113" y1="4" x2="113" y2="165" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="227" y1="4" x2="227" y2="165" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- CONSTRUCTIVE: plates pulling apart, magma rising -->
  <rect x="4" y="60" width="48" height="50" fill="#a3765c" stroke="#7c5a3c" stroke-width="1.5" rx="2"/>
  <rect x="62" y="60" width="48" height="50" fill="#a3765c" stroke="#7c5a3c" stroke-width="1.5" rx="2"/>
  <text x="28" y="88" text-anchor="middle" font-size="7" fill="#fff" font-weight="600">Plate</text>
  <text x="86" y="88" text-anchor="middle" font-size="7" fill="#fff" font-weight="600">Plate</text>
  <!-- arrows moving apart -->
  <line x1="38" y1="42" x2="16" y2="42" stroke="#dc2626" stroke-width="2" marker-end="url(#geoArr)"/>
  <line x1="76" y1="42" x2="98" y2="42" stroke="#dc2626" stroke-width="2" marker-end="url(#geoArr)"/>
  <!-- magma rising -->
  <path d="M57 110 Q54 85 57 65 Q60 85 57 110" fill="#ef4444" opacity="0.7"/>
  <text x="57" y="125" text-anchor="middle" font-size="6.5" fill="#dc2626">magma rises</text>
  <!-- new crust label -->
  <text x="57" y="55" text-anchor="middle" font-size="6" fill="#16a34a">new crust</text>
  <text x="57" y="140" text-anchor="middle" font-size="6" fill="#64748b">e.g. Mid-Atlantic Ridge</text>

  <!-- DESTRUCTIVE: oceanic subducting under continental -->
  <defs>
    <marker id="geoArr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#dc2626"/></marker>
    <marker id="geoArrBlue" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><polygon points="0 0,7 3.5,0 7" fill="#2563eb"/></marker>
  </defs>
  <rect x="117" y="55" width="48" height="30" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" rx="2"/>
  <text x="141" y="73" text-anchor="middle" font-size="6" fill="#fff" font-weight="600">Oceanic</text>
  <rect x="169" y="45" width="54" height="40" fill="#a3765c" stroke="#7c5a3c" stroke-width="1.5" rx="2"/>
  <text x="196" y="68" text-anchor="middle" font-size="6" fill="#fff" font-weight="600">Continental</text>
  <!-- subduction curve -->
  <path d="M140 85 Q145 105 155 120 Q160 130 165 135" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="175" y="135" font-size="6" fill="#1d4ed8">subduction</text>
  <!-- arrows converging -->
  <line x1="125" y1="38" x2="150" y2="38" stroke="#dc2626" stroke-width="2" marker-end="url(#geoArr)"/>
  <line x1="215" y1="38" x2="190" y2="38" stroke="#dc2626" stroke-width="2" marker-end="url(#geoArr)"/>
  <!-- volcano -->
  <polygon points="185,45 196,22 207,45" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
  <text x="196" y="19" text-anchor="middle" font-size="6" fill="#dc2626">volcano</text>
  <text x="170" y="152" text-anchor="middle" font-size="6" fill="#64748b">e.g. Andes mountains</text>

  <!-- CONSERVATIVE: plates sliding past -->
  <rect x="232" y="55" width="48" height="40" fill="#a3765c" stroke="#7c5a3c" stroke-width="1.5" rx="2"/>
  <rect x="284" y="65" width="48" height="40" fill="#a3765c" stroke="#7c5a3c" stroke-width="1.5" rx="2"/>
  <text x="256" y="78" text-anchor="middle" font-size="7" fill="#fff" font-weight="600">Plate</text>
  <text x="308" y="88" text-anchor="middle" font-size="7" fill="#fff" font-weight="600">Plate</text>
  <!-- arrows sliding past -->
  <line x1="265" y1="42" x2="245" y2="42" stroke="#dc2626" stroke-width="2" marker-end="url(#geoArr)"/>
  <line x1="298" y1="115" x2="320" y2="115" stroke="#dc2626" stroke-width="2" marker-end="url(#geoArr)"/>
  <!-- friction zone -->
  <line x1="280" y1="52" x2="280" y2="108" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="3,2"/>
  <text x="283" y="125" text-anchor="middle" font-size="6" fill="#f59e0b" font-weight="600">friction zone</text>
  <text x="283" y="135" text-anchor="middle" font-size="6" fill="#64748b">→ earthquakes</text>
  <text x="283" y="152" text-anchor="middle" font-size="6" fill="#64748b">e.g. San Andreas Fault</text>
</svg>`;

// ── EARTH STRUCTURE ─────────────────────────────────────────────────────────
DIAGRAMS["earth-structure-geo"] = `<svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- full earth circle -->
  <circle cx="105" cy="90" r="80" fill="#5b8c3e" stroke="#3d6b2e" stroke-width="2"/>
  <!-- mantle -->
  <circle cx="105" cy="90" r="65" fill="#e87d2f" stroke="#c0621c" stroke-width="1.5"/>
  <!-- outer core -->
  <circle cx="105" cy="90" r="40" fill="#f5a623" stroke="#d48b0f" stroke-width="1.5"/>
  <!-- inner core -->
  <circle cx="105" cy="90" r="20" fill="#fcd34d" stroke="#eab308" stroke-width="1.5"/>
  <!-- cut-away wedge to reveal layers -->
  <path d="M105 90 L105 10 A80 80 0 0 1 175 50 Z" fill="#5b8c3e" stroke="#3d6b2e" stroke-width="1"/>
  <path d="M105 90 L105 25 A65 65 0 0 1 160 55 Z" fill="#e87d2f" stroke="#c0621c" stroke-width="0.5"/>
  <path d="M105 90 L105 50 A40 40 0 0 1 138 68 Z" fill="#f5a623" stroke="#d48b0f" stroke-width="0.5"/>
  <path d="M105 90 L105 70 A20 20 0 0 1 122 80 Z" fill="#fcd34d" stroke="#eab308" stroke-width="0.5"/>
  <!-- labels with lines -->
  <line x1="140" y1="18" x2="195" y2="12" stroke="#475569" stroke-width="0.8"/>
  <text x="197" y="16" font-size="8" font-weight="700" fill="#3d6b2e">Crust</text>
  <text x="197" y="25" font-size="6.5" fill="#64748b">5–70 km thick</text>
  <line x1="150" y1="42" x2="195" y2="40" stroke="#475569" stroke-width="0.8"/>
  <text x="197" y="44" font-size="8" font-weight="700" fill="#c0621c">Mantle</text>
  <text x="197" y="53" font-size="6.5" fill="#64748b">~2,900 km thick</text>
  <text x="197" y="62" font-size="6.5" fill="#64748b">semi-molten rock</text>
  <line x1="135" y1="65" x2="195" y2="78" stroke="#475569" stroke-width="0.8"/>
  <text x="197" y="82" font-size="8" font-weight="700" fill="#d48b0f">Outer Core</text>
  <text x="197" y="91" font-size="6.5" fill="#64748b">~2,200 km thick</text>
  <text x="197" y="100" font-size="6.5" fill="#64748b">liquid iron &amp; nickel</text>
  <line x1="118" y1="82" x2="195" y2="116" stroke="#475569" stroke-width="0.8"/>
  <text x="197" y="120" font-size="8" font-weight="700" fill="#eab308">Inner Core</text>
  <text x="197" y="129" font-size="6.5" fill="#64748b">~1,300 km radius</text>
  <text x="197" y="138" font-size="6.5" fill="#64748b">solid iron &amp; nickel</text>
  <text x="197" y="147" font-size="6.5" fill="#64748b">up to 5,000°C</text>
  <!-- convection arrows in mantle -->
  <path d="M60 55 Q50 90 65 120" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#geoArrW)"/>
  <path d="M85 120 Q95 90 80 55" fill="none" stroke="#fff" stroke-width="1.5" stroke-dasharray="3,2" marker-end="url(#geoArrW)"/>
  <defs><marker id="geoArrW" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#fff"/></marker></defs>
  <text x="72" y="145" text-anchor="middle" font-size="6" fill="#fff">convection</text>
  <text x="72" y="153" text-anchor="middle" font-size="6" fill="#fff">currents</text>
  <text x="140" y="170" text-anchor="middle" font-size="7" fill="#475569">Tectonic plates float on the mantle</text>
</svg>`;

// ── RIVERS: MEANDER & OXBOW LAKE ────────────────────────────────────────────
DIAGRAMS["meander-formation"] = `<svg viewBox="0 0 320 155" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- Stage 1: gentle bend -->
  <text x="40" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#1e293b">1. Bend forms</text>
  <rect x="3" y="17" width="74" height="100" rx="4" fill="#f0fdf4" stroke="#d1d5db" stroke-width="0.8"/>
  <path d="M20 25 Q40 45 40 60 Q40 75 25 95" fill="none" stroke="#3b82f6" stroke-width="5" stroke-linecap="round"/>
  <path d="M20 25 Q40 45 40 60 Q40 75 25 95" fill="none" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
  <text x="55" y="50" font-size="6" fill="#dc2626">erosion</text>
  <path d="M50 47 L44 50" stroke="#dc2626" stroke-width="0.8" marker-end="url(#geoArrR)"/>
  <text x="55" y="80" font-size="6" fill="#16a34a">deposit</text>
  <path d="M50 77 L35 74" stroke="#16a34a" stroke-width="0.8"/>
  <text x="40" y="130" text-anchor="middle" font-size="6" fill="#64748b">faster flow on</text>
  <text x="40" y="138" text-anchor="middle" font-size="6" fill="#64748b">outside of bend</text>

  <!-- Stage 2: pronounced meander -->
  <text x="120" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#1e293b">2. Meander grows</text>
  <rect x="83" y="17" width="74" height="100" rx="4" fill="#f0fdf4" stroke="#d1d5db" stroke-width="0.8"/>
  <path d="M100 25 Q130 35 130 60 Q130 85 100 95" fill="none" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
  <path d="M100 25 Q130 35 130 60 Q130 85 100 95" fill="none" stroke="#60a5fa" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="133" cy="60" r="3" fill="#dc2626" opacity="0.5"/>
  <text x="142" y="55" font-size="5.5" fill="#dc2626">lateral</text>
  <text x="142" y="62" font-size="5.5" fill="#dc2626">erosion</text>
  <path d="M97 60 L93 60" stroke="#16a34a" stroke-width="2"/>
  <text x="91" y="56" font-size="5.5" fill="#16a34a" text-anchor="end">slip-off</text>
  <text x="91" y="63" font-size="5.5" fill="#16a34a" text-anchor="end">slope</text>
  <text x="120" y="130" text-anchor="middle" font-size="6" fill="#64748b">neck narrows</text>

  <!-- Stage 3: neck almost cut off -->
  <text x="200" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#1e293b">3. Neck narrows</text>
  <rect x="163" y="17" width="74" height="100" rx="4" fill="#f0fdf4" stroke="#d1d5db" stroke-width="0.8"/>
  <path d="M185 25 Q220 30 218 60 Q216 90 185 95" fill="none" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
  <path d="M185 25 Q220 30 218 60 Q216 90 185 95" fill="none" stroke="#60a5fa" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="185" y1="25" x2="185" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="178" y="62" font-size="5.5" fill="#dc2626" text-anchor="end">flood</text>
  <text x="178" y="69" font-size="5.5" fill="#dc2626" text-anchor="end">cuts</text>
  <text x="178" y="76" font-size="5.5" fill="#dc2626" text-anchor="end">through</text>
  <text x="200" y="130" text-anchor="middle" font-size="6" fill="#64748b">river about to</text>
  <text x="200" y="138" text-anchor="middle" font-size="6" fill="#64748b">break through</text>

  <!-- Stage 4: oxbow lake -->
  <text x="280" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#1e293b">4. Oxbow lake</text>
  <rect x="243" y="17" width="74" height="100" rx="4" fill="#f0fdf4" stroke="#d1d5db" stroke-width="0.8"/>
  <line x1="265" y1="25" x2="265" y2="95" stroke="#3b82f6" stroke-width="5" stroke-linecap="round"/>
  <line x1="265" y1="25" x2="265" y2="95" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/>
  <path d="M275 35 Q305 38 303 60 Q301 82 275 85" fill="none" stroke="#93c5fd" stroke-width="4" stroke-linecap="round"/>
  <ellipse cx="295" cy="60" rx="14" ry="22" fill="#bfdbfe" stroke="#93c5fd" stroke-width="1.5" fill-opacity="0.5"/>
  <text x="295" y="57" text-anchor="middle" font-size="5.5" fill="#1d4ed8">oxbow</text>
  <text x="295" y="64" text-anchor="middle" font-size="5.5" fill="#1d4ed8">lake</text>
  <text x="258" y="62" font-size="5.5" fill="#3b82f6" text-anchor="end">new</text>
  <text x="258" y="69" font-size="5.5" fill="#3b82f6" text-anchor="end">course</text>
  <text x="280" y="130" text-anchor="middle" font-size="6" fill="#64748b">deposition seals</text>
  <text x="280" y="138" text-anchor="middle" font-size="6" fill="#64748b">off the old loop</text>

  <!-- arrows between stages -->
  <defs><marker id="geoArrR" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#dc2626"/></marker></defs>
  <text x="81" y="70" font-size="10" fill="#94a3b8">›</text>
  <text x="161" y="70" font-size="10" fill="#94a3b8">›</text>
  <text x="241" y="70" font-size="10" fill="#94a3b8">›</text>
</svg>`;

// ── RIVERS: DRAINAGE BASIN ──────────────────────────────────────────────────
DIAGRAMS["drainage-basin"] = `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- watershed boundary (dashed ridge line) -->
  <path d="M140 8 Q60 20 30 70 Q15 110 40 145 Q70 175 140 172 Q210 175 240 145 Q265 110 250 70 Q220 20 140 8Z" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3" fill-opacity="0.5"/>
  <text x="60" y="22" font-size="7" fill="#16a34a" font-weight="700" transform="rotate(-25 60 22)">watershed</text>
  <text x="220" y="22" font-size="7" fill="#16a34a" font-weight="700" transform="rotate(25 220 22)">watershed</text>

  <!-- source (spring at top) -->
  <circle cx="140" cy="30" r="5" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
  <text x="140" y="25" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">source</text>

  <!-- main river channel -->
  <path d="M140 35 Q135 55 130 75 Q125 95 130 115 Q135 135 140 155 Q142 162 145 168" fill="none" stroke="#3b82f6" stroke-width="3.5" stroke-linecap="round"/>

  <!-- tributary 1 (left) -->
  <path d="M65 50 Q85 60 105 72 Q120 80 128 88" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
  <circle cx="65" cy="50" r="3" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>

  <!-- tributary 2 (right) -->
  <path d="M215 55 Q195 65 175 78 Q155 88 138 95" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round"/>
  <circle cx="215" cy="55" r="3" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1"/>

  <!-- tributary 3 (left lower) -->
  <path d="M55 110 Q75 115 95 120 Q115 126 128 130" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round"/>

  <!-- confluence markers -->
  <circle cx="128" cy="88" r="3" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
  <circle cx="138" cy="95" r="3" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>
  <circle cx="128" cy="130" r="3" fill="#f59e0b" stroke="#d97706" stroke-width="1"/>

  <!-- mouth (where river meets sea) -->
  <path d="M135 165 Q140 172 145 168 Q150 175 155 172 Q148 178 140 178 Q132 178 125 172 Q130 175 135 165Z" fill="#3b82f6" opacity="0.4"/>
  <rect x="100" y="170" width="80" height="10" fill="#bfdbfe" rx="2" opacity="0.6"/>
  <text x="140" y="178" text-anchor="middle" font-size="6.5" fill="#1d4ed8" font-weight="600">sea</text>

  <!-- labels -->
  <line x1="55" y1="48" x2="30" y2="38" stroke="#475569" stroke-width="0.6"/>
  <text x="15" y="38" font-size="7" fill="#64748b">tributary</text>

  <line x1="128" y1="85" x2="80" y2="78" stroke="#475569" stroke-width="0.6"/>
  <text x="42" y="78" font-size="7" fill="#d97706" font-weight="600">confluence</text>

  <text x="145" y="170" font-size="7" font-weight="700" fill="#1e293b">mouth</text>

  <line x1="130" y1="115" x2="165" y2="112" stroke="#475569" stroke-width="0.6"/>
  <text x="167" y="110" font-size="6.5" fill="#3b82f6" font-weight="600">main</text>
  <text x="167" y="118" font-size="6.5" fill="#3b82f6" font-weight="600">channel</text>

  <!-- flow arrow -->
  <defs><marker id="geoArrB" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#3b82f6"/></marker></defs>
  <line x1="155" y1="140" x2="155" y2="155" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#geoArrB)"/>
  <text x="164" y="150" font-size="6" fill="#3b82f6">flow</text>

  <text x="140" y="15" text-anchor="middle" font-size="6" fill="#16a34a">ridge = highest land</text>
</svg>`;

// ── RIVERS: LONG PROFILE & CROSS-SECTIONS ───────────────────────────────────
DIAGRAMS["river-long-profile"] = `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- long profile curve -->
  <text x="150" y="12" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">River Long Profile</text>
  <rect x="30" y="18" width="260" height="70" rx="4" fill="#f8fafc" stroke="#d1d5db" stroke-width="0.8"/>
  <!-- axes -->
  <line x1="40" y1="28" x2="40" y2="80" stroke="#475569" stroke-width="1.2"/>
  <line x1="40" y1="80" x2="280" y2="80" stroke="#475569" stroke-width="1.2"/>
  <text x="36" y="55" text-anchor="end" font-size="6" fill="#64748b" transform="rotate(-90 36 55)">altitude</text>
  <text x="160" y="88" text-anchor="middle" font-size="6" fill="#64748b">distance from source</text>
  <!-- profile curve -->
  <path d="M45 30 Q80 35 120 50 Q180 68 275 78" fill="none" stroke="#3b82f6" stroke-width="2.5"/>
  <!-- zone labels -->
  <text x="65" y="40" text-anchor="middle" font-size="6.5" fill="#dc2626" font-weight="600">Upper</text>
  <text x="140" y="58" text-anchor="middle" font-size="6.5" fill="#f59e0b" font-weight="600">Middle</text>
  <text x="230" y="73" text-anchor="middle" font-size="6.5" fill="#16a34a" font-weight="600">Lower</text>
  <!-- source and mouth -->
  <circle cx="45" cy="30" r="2.5" fill="#3b82f6"/>
  <text x="48" y="28" font-size="6" fill="#1d4ed8">source</text>
  <circle cx="275" cy="78" r="2.5" fill="#3b82f6"/>
  <text x="268" y="76" font-size="6" fill="#1d4ed8" text-anchor="end">mouth</text>

  <!-- Cross-sections below -->
  <text x="55" y="103" text-anchor="middle" font-size="7.5" font-weight="700" fill="#dc2626">Upper Course</text>
  <path d="M20 145 L40 115 L50 112 L60 115 L80 145" fill="#e7d5b0" stroke="#a3765c" stroke-width="1.5"/>
  <path d="M42 115 Q50 120 58 115" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="128" text-anchor="middle" font-size="5.5" fill="#64748b">V-shaped</text>
  <text x="50" y="135" text-anchor="middle" font-size="5.5" fill="#64748b">valley</text>
  <text x="50" y="155" text-anchor="middle" font-size="5" fill="#dc2626">vertical erosion</text>
  <text x="50" y="162" text-anchor="middle" font-size="5" fill="#64748b">narrow, shallow</text>

  <text x="155" y="103" text-anchor="middle" font-size="7.5" font-weight="700" fill="#f59e0b">Middle Course</text>
  <path d="M115 145 L125 120 L145 115 L165 115 L175 120 L185 145" fill="#e7d5b0" stroke="#a3765c" stroke-width="1.5"/>
  <path d="M130 118 Q150 128 170 118" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="150" y="132" text-anchor="middle" font-size="5.5" fill="#64748b">wider valley</text>
  <text x="150" y="155" text-anchor="middle" font-size="5" fill="#f59e0b">lateral erosion</text>
  <text x="150" y="162" text-anchor="middle" font-size="5" fill="#64748b">wider, deeper</text>

  <text x="250" y="103" text-anchor="middle" font-size="7.5" font-weight="700" fill="#16a34a">Lower Course</text>
  <path d="M210 145 L215 130 L225 125 L270 125 L280 130 L285 145" fill="#e7d5b0" stroke="#a3765c" stroke-width="1.5"/>
  <path d="M220 125 Q250 135 275 125" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="250" y="138" text-anchor="middle" font-size="5.5" fill="#64748b">flat floodplain</text>
  <text x="250" y="155" text-anchor="middle" font-size="5" fill="#16a34a">deposition</text>
  <text x="250" y="162" text-anchor="middle" font-size="5" fill="#64748b">wide, deep</text>
</svg>`;

// ── WEATHER: GREENHOUSE EFFECT ──────────────────────────────────────────────
DIAGRAMS["greenhouse-effect"] = `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- sky background -->
  <rect x="0" y="0" width="280" height="110" fill="#e0f2fe" rx="4"/>
  <!-- atmosphere band -->
  <rect x="0" y="65" width="280" height="45" fill="#a5d8ff" opacity="0.35" rx="2"/>
  <text x="275" y="80" text-anchor="end" font-size="7" fill="#0369a1" font-weight="600">atmosphere</text>
  <text x="275" y="89" text-anchor="end" font-size="6" fill="#0369a1">(CO₂, CH₄, H₂O)</text>
  <!-- ground -->
  <rect x="0" y="110" width="280" height="60" fill="#86efac" stroke="#16a34a" stroke-width="1" rx="0"/>
  <rect x="0" y="110" width="280" height="8" fill="#4ade80"/>
  <!-- sun -->
  <circle cx="40" cy="22" r="18" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
  <text x="40" y="26" text-anchor="middle" font-size="10" fill="#92400e">☀</text>
  <!-- incoming solar radiation arrows (yellow) -->
  <line x1="60" y1="25" x2="120" y2="105" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#geoArrY)"/>
  <line x1="70" y1="20" x2="160" y2="105" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#geoArrY)"/>
  <text x="75" y="55" font-size="7" fill="#92400e" transform="rotate(55 75 55)">solar energy in</text>
  <!-- reflected heat from ground (red, going up) -->
  <line x1="130" y1="112" x2="130" y2="75" stroke="#ef4444" stroke-width="2" marker-end="url(#geoArrRe)"/>
  <line x1="170" y1="112" x2="170" y2="75" stroke="#ef4444" stroke-width="2" marker-end="url(#geoArrRe)"/>
  <text x="150" y="120" text-anchor="middle" font-size="6.5" fill="#dc2626">heat radiated back</text>
  <!-- trapped heat (re-radiated back down) -->
  <path d="M130 78 Q120 60 110 78" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="3,2"/>
  <line x1="110" y1="78" x2="110" y2="108" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="3,2" marker-end="url(#geoArrRe)"/>
  <path d="M170 78 Q180 60 190 78" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="3,2"/>
  <line x1="190" y1="78" x2="190" y2="108" stroke="#ef4444" stroke-width="1.8" stroke-dasharray="3,2" marker-end="url(#geoArrRe)"/>
  <text x="150" y="68" text-anchor="middle" font-size="6.5" fill="#dc2626" font-weight="600">trapped &amp; re-radiated ↓</text>
  <!-- some heat escapes -->
  <line x1="220" y1="112" x2="220" y2="15" stroke="#16a34a" stroke-width="1.8" marker-end="url(#geoArrG)"/>
  <text x="232" y="45" font-size="6.5" fill="#16a34a">some heat</text>
  <text x="232" y="53" font-size="6.5" fill="#16a34a">escapes to</text>
  <text x="232" y="61" font-size="6.5" fill="#16a34a">space</text>
  <!-- key -->
  <text x="20" y="135" font-size="7" fill="#1e293b" font-weight="700">Enhanced effect:</text>
  <text x="20" y="145" font-size="6.5" fill="#64748b">More CO₂ → more heat trapped</text>
  <text x="20" y="155" font-size="6.5" fill="#64748b">→ global temperatures rise</text>
  <!-- markers -->
  <defs>
    <marker id="geoArrY" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#f59e0b"/></marker>
    <marker id="geoArrRe" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#ef4444"/></marker>
    <marker id="geoArrG" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#16a34a"/></marker>
  </defs>
</svg>`;

// ── WEATHER: RELIEF RAINFALL ────────────────────────────────────────────────
DIAGRAMS["relief-rainfall"] = `<svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- sea on left -->
  <rect x="0" y="115" width="60" height="45" fill="#bfdbfe" rx="0"/>
  <text x="30" y="135" text-anchor="middle" font-size="8" fill="#1d4ed8" font-weight="600">Sea</text>
  <!-- ground on right -->
  <rect x="60" y="115" width="240" height="45" fill="#86efac" rx="0"/>
  <!-- mountain -->
  <polygon points="60,115 150,35 240,115" fill="#a3765c" stroke="#7c5a3c" stroke-width="1.5"/>
  <polygon points="60,115 150,35 150,115" fill="#8b6a4f"/>
  <!-- snow cap -->
  <polygon points="140,45 150,35 160,45" fill="#fff" stroke="#d1d5db" stroke-width="0.5"/>
  <!-- windward label -->
  <text x="90" y="100" text-anchor="middle" font-size="7" fill="#fff" font-weight="700" transform="rotate(-40 90 100)">windward</text>
  <!-- leeward label -->
  <text x="210" y="100" text-anchor="middle" font-size="7" fill="#fff" font-weight="700" transform="rotate(40 210 100)">leeward</text>

  <!-- Step 1: moist air from sea -->
  <path d="M15 95 Q35 90 55 85" fill="none" stroke="#3b82f6" stroke-width="2" marker-end="url(#geoArrBl)"/>
  <text x="10" y="82" font-size="6" fill="#3b82f6">moist air</text>
  <text x="10" y="90" font-size="6" fill="#3b82f6">from sea</text>

  <!-- Step 2: air rises and cools -->
  <path d="M70 100 Q90 75 115 55" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#geoArrBl)"/>
  <text x="68" y="65" font-size="6" fill="#0369a1">air rises</text>
  <text x="68" y="73" font-size="6" fill="#0369a1">&amp; cools</text>

  <!-- Step 3: clouds and rain on windward side -->
  <ellipse cx="115" cy="38" rx="22" ry="10" fill="#94a3b8" opacity="0.7"/>
  <ellipse cx="130" cy="35" rx="18" ry="9" fill="#94a3b8" opacity="0.6"/>
  <text x="100" y="28" font-size="6.5" fill="#475569" font-weight="600">clouds form</text>
  <!-- rain drops -->
  <line x1="105" y1="48" x2="103" y2="58" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="112" y1="48" x2="110" y2="58" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="119" y1="48" x2="117" y2="58" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="126" y1="45" x2="124" y2="55" stroke="#3b82f6" stroke-width="1.5" stroke-linecap="round"/>
  <text x="98" y="48" font-size="5.5" fill="#3b82f6" text-anchor="end">heavy</text>
  <text x="98" y="55" font-size="5.5" fill="#3b82f6" text-anchor="end">rain</text>

  <!-- Step 4: dry air descends on leeward -->
  <path d="M170 50 Q200 70 230 95" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,2" marker-end="url(#geoArrO)"/>
  <text x="220" y="65" font-size="6" fill="#d97706">dry air</text>
  <text x="220" y="73" font-size="6" fill="#d97706">descends</text>
  <text x="220" y="81" font-size="6" fill="#d97706">&amp; warms</text>

  <!-- rain shadow label -->
  <rect x="225" y="100" width="65" height="15" rx="3" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="257" y="110" text-anchor="middle" font-size="7" fill="#92400e" font-weight="700">rain shadow</text>

  <!-- key at bottom -->
  <text x="10" y="150" font-size="6.5" fill="#64748b">Western UK = wetter (windward) · Eastern UK = drier (rain shadow)</text>

  <defs>
    <marker id="geoArrBl" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#3b82f6"/></marker>
    <marker id="geoArrO" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#f59e0b"/></marker>
  </defs>
</svg>`;

// ── BIOMES: GERSMEHL NUTRIENT CYCLE ─────────────────────────────────────────
DIAGRAMS["gersmehl-model"] = `<svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Gersmehl Nutrient Cycle — Tropical Rainforest</text>

  <!-- Biomass circle (largest — rainforest stores most nutrients in living matter) -->
  <circle cx="140" cy="60" r="38" fill="#22c55e" opacity="0.25" stroke="#16a34a" stroke-width="2.5"/>
  <text x="140" y="55" text-anchor="middle" font-size="9" font-weight="700" fill="#15803d">Biomass</text>
  <text x="140" y="65" text-anchor="middle" font-size="7" fill="#16a34a">(largest store)</text>

  <!-- Litter circle (smallest) -->
  <circle cx="65" cy="140" r="20" fill="#f59e0b" opacity="0.2" stroke="#d97706" stroke-width="2"/>
  <text x="65" y="138" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">Litter</text>
  <text x="65" y="148" text-anchor="middle" font-size="6" fill="#d97706">(smallest)</text>

  <!-- Soil circle (medium) -->
  <circle cx="215" cy="140" r="28" fill="#a3765c" opacity="0.25" stroke="#7c5a3c" stroke-width="2"/>
  <text x="215" y="138" text-anchor="middle" font-size="8" font-weight="700" fill="#5c3a1e">Soil</text>
  <text x="215" y="148" text-anchor="middle" font-size="6" fill="#7c5a3c">(medium)</text>

  <!-- Transfer arrows -->
  <!-- Biomass → Litter (dead leaves fall) -->
  <path d="M108 85 Q80 100 72 118" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#geoArrDk)"/>
  <text x="72" y="100" font-size="5.5" fill="#475569">leaf fall</text>

  <!-- Litter → Soil (decomposition) -->
  <path d="M85 140 Q120 148 188 142" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#geoArrDk)"/>
  <text x="135" y="158" text-anchor="middle" font-size="5.5" fill="#475569">rapid decomposition</text>

  <!-- Soil → Biomass (uptake by roots) -->
  <path d="M200 115 Q180 90 168 78" fill="none" stroke="#475569" stroke-width="1.8" marker-end="url(#geoArrDk)"/>
  <text x="205" y="95" font-size="5.5" fill="#475569">root uptake</text>

  <!-- Input: precipitation -->
  <line x1="140" y1="18" x2="140" y2="22" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="195" y="30" font-size="6" fill="#3b82f6">↓ precipitation input</text>

  <!-- Loss: leaching from soil -->
  <path d="M235 158 Q245 168 255 170" fill="none" stroke="#dc2626" stroke-width="1.5" marker-end="url(#geoArrRd)"/>
  <text x="245" y="165" font-size="5.5" fill="#dc2626">leaching</text>
  <text x="258" y="173" font-size="5.5" fill="#dc2626">→ loss</text>

  <!-- Loss: runoff -->
  <path d="M45 148 Q30 155 20 162" fill="none" stroke="#dc2626" stroke-width="1.5" marker-end="url(#geoArrRd)"/>
  <text x="15" y="157" font-size="5.5" fill="#dc2626">runoff</text>

  <!-- Key note -->
  <text x="140" y="173" text-anchor="middle" font-size="6" fill="#64748b">Circle size = amount of nutrients stored</text>

  <defs>
    <marker id="geoArrDk" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#475569"/></marker>
    <marker id="geoArrRd" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0,6 3,0 6" fill="#dc2626"/></marker>
  </defs>
</svg>`;

// ── BIOMES: RAINFOREST LAYERS ───────────────────────────────────────────────
DIAGRAMS["rainforest-layers"] = `<svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- height scale on left -->
  <line x1="25" y1="15" x2="25" y2="165" stroke="#475569" stroke-width="1"/>
  <text x="15" y="12" font-size="6" fill="#64748b">metres</text>
  <line x1="22" y1="20" x2="28" y2="20" stroke="#475569" stroke-width="1"/>
  <text x="18" y="23" font-size="6" fill="#64748b" text-anchor="end">50</text>
  <line x1="22" y1="50" x2="28" y2="50" stroke="#475569" stroke-width="1"/>
  <text x="18" y="53" font-size="6" fill="#64748b" text-anchor="end">40</text>
  <line x1="22" y1="80" x2="28" y2="80" stroke="#475569" stroke-width="1"/>
  <text x="18" y="83" font-size="6" fill="#64748b" text-anchor="end">30</text>
  <line x1="22" y1="100" x2="28" y2="100" stroke="#475569" stroke-width="1"/>
  <text x="18" y="103" font-size="6" fill="#64748b" text-anchor="end">20</text>
  <line x1="22" y1="130" x2="28" y2="130" stroke="#475569" stroke-width="1"/>
  <text x="18" y="133" font-size="6" fill="#64748b" text-anchor="end">10</text>
  <line x1="22" y1="160" x2="28" y2="160" stroke="#475569" stroke-width="1"/>
  <text x="18" y="163" font-size="6" fill="#64748b" text-anchor="end">0</text>

  <!-- forest floor -->
  <rect x="30" y="155" width="175" height="10" fill="#5c3a1e" rx="1"/>
  <text x="115" y="163" text-anchor="middle" font-size="6" fill="#d4c5a9">leaf litter &amp; roots</text>

  <!-- understory (shrub layer) 0-10m -->
  <rect x="30" y="130" width="175" height="25" fill="#166534" opacity="0.2" rx="2"/>
  <ellipse cx="60" cy="142" rx="15" ry="10" fill="#22c55e" opacity="0.5"/>
  <ellipse cx="100" cy="145" rx="12" ry="8" fill="#16a34a" opacity="0.5"/>
  <ellipse cx="145" cy="140" rx="14" ry="9" fill="#22c55e" opacity="0.4"/>
  <ellipse cx="180" cy="144" rx="11" ry="8" fill="#16a34a" opacity="0.5"/>
  <!-- tree trunks -->
  <rect x="70" y="90" width="4" height="65" fill="#92400e" rx="1"/>
  <rect x="120" y="50" width="5" height="105" fill="#78350f" rx="1"/>
  <rect x="160" y="80" width="4" height="75" fill="#92400e" rx="1"/>
  <rect x="55" y="70" width="4" height="85" fill="#78350f" rx="1"/>
  <rect x="185" y="95" width="4" height="60" fill="#92400e" rx="1"/>

  <!-- canopy layer 20-40m -->
  <rect x="30" y="50" width="175" height="50" fill="#15803d" opacity="0.12" rx="2"/>
  <ellipse cx="57" cy="72" rx="22" ry="15" fill="#22c55e" opacity="0.7" stroke="#16a34a" stroke-width="0.8"/>
  <ellipse cx="90" cy="78" rx="18" ry="12" fill="#4ade80" opacity="0.6" stroke="#16a34a" stroke-width="0.8"/>
  <ellipse cx="72" cy="90" rx="20" ry="10" fill="#16a34a" opacity="0.5"/>
  <ellipse cx="122" cy="68" rx="25" ry="18" fill="#22c55e" opacity="0.7" stroke="#16a34a" stroke-width="0.8"/>
  <ellipse cx="162" cy="82" rx="22" ry="14" fill="#4ade80" opacity="0.6" stroke="#16a34a" stroke-width="0.8"/>
  <ellipse cx="187" cy="95" rx="18" ry="12" fill="#22c55e" opacity="0.6" stroke="#16a34a" stroke-width="0.8"/>

  <!-- emergent layer 40m+ (tall trees poking above) -->
  <ellipse cx="122" cy="38" rx="20" ry="16" fill="#15803d" opacity="0.8" stroke="#166534" stroke-width="1.2"/>
  <ellipse cx="57" cy="52" rx="14" ry="12" fill="#166534" opacity="0.6"/>

  <!-- layer labels on right -->
  <rect x="210" y="16" width="68" height="18" rx="3" fill="#166534" opacity="0.15"/>
  <text x="244" y="28" text-anchor="middle" font-size="7.5" font-weight="700" fill="#166534">Emergent</text>
  <line x1="205" y1="25" x2="145" y2="38" stroke="#166534" stroke-width="0.8" stroke-dasharray="3,2"/>

  <rect x="210" y="58" width="68" height="18" rx="3" fill="#22c55e" opacity="0.15"/>
  <text x="244" y="70" text-anchor="middle" font-size="7.5" font-weight="700" fill="#15803d">Canopy</text>
  <line x1="205" y1="67" x2="180" y2="75" stroke="#15803d" stroke-width="0.8" stroke-dasharray="3,2"/>

  <rect x="210" y="100" width="68" height="18" rx="3" fill="#4ade80" opacity="0.15"/>
  <text x="244" y="112" text-anchor="middle" font-size="7.5" font-weight="700" fill="#16a34a">Under-storey</text>
  <line x1="205" y1="109" x2="195" y2="115" stroke="#16a34a" stroke-width="0.8" stroke-dasharray="3,2"/>

  <rect x="210" y="130" width="68" height="18" rx="3" fill="#166534" opacity="0.1"/>
  <text x="244" y="137" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Shrub layer</text>
  <text x="244" y="145" text-anchor="middle" font-size="6" fill="#64748b">little light</text>

  <rect x="210" y="152" width="68" height="15" rx="3" fill="#5c3a1e" opacity="0.15"/>
  <text x="244" y="162" text-anchor="middle" font-size="7" font-weight="700" fill="#5c3a1e">Forest floor</text>

  <!-- sunlight arrow -->
  <text x="35" y="20" font-size="8" fill="#f59e0b">☀</text>
  <text x="48" y="24" font-size="6" fill="#f59e0b">sunlight</text>
  <text x="115" y="176" text-anchor="middle" font-size="6" fill="#64748b">Only ~2% of sunlight reaches the forest floor</text>
</svg>`;

// ── POPULATION: POPULATION PYRAMIDS ─────────────────────────────────────────
DIAGRAMS["population-pyramid"] = `<svg viewBox="0 0 310 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <line x1="155" y1="5" x2="155" y2="165" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- HIC pyramid (left) — narrow base, wider middle, tapering top -->
  <text x="75" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">HIC (e.g. UK)</text>
  <!-- age labels center -->
  <text x="75" y="28" text-anchor="middle" font-size="5.5" fill="#64748b">Age</text>
  <!-- bars: male (left of axis at x=75), female (right of axis at x=75) -->
  <!-- 80+ -->
  <rect x="62" y="32" width="8" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="32" width="9" height="8" fill="#ec4899" rx="1"/>
  <text x="57" y="39" text-anchor="end" font-size="5" fill="#64748b">80+</text>
  <!-- 70-79 -->
  <rect x="58" y="41" width="12" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="41" width="13" height="8" fill="#ec4899" rx="1"/>
  <text x="57" y="48" text-anchor="end" font-size="5" fill="#64748b">70</text>
  <!-- 60-69 -->
  <rect x="53" y="50" width="17" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="50" width="18" height="8" fill="#ec4899" rx="1"/>
  <text x="57" y="57" text-anchor="end" font-size="5" fill="#64748b">60</text>
  <!-- 50-59 -->
  <rect x="50" y="59" width="20" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="59" width="21" height="8" fill="#ec4899" rx="1"/>
  <!-- 40-49 -->
  <rect x="48" y="68" width="22" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="68" width="23" height="8" fill="#ec4899" rx="1"/>
  <!-- 30-39 -->
  <rect x="49" y="77" width="21" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="77" width="22" height="8" fill="#ec4899" rx="1"/>
  <!-- 20-29 -->
  <rect x="51" y="86" width="19" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="86" width="20" height="8" fill="#ec4899" rx="1"/>
  <!-- 10-19 -->
  <rect x="52" y="95" width="18" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="95" width="19" height="8" fill="#ec4899" rx="1"/>
  <!-- 0-9 -->
  <rect x="53" y="104" width="17" height="8" fill="#3b82f6" rx="1"/><rect x="75" y="104" width="18" height="8" fill="#ec4899" rx="1"/>
  <text x="57" y="111" text-anchor="end" font-size="5" fill="#64748b">0</text>
  <!-- shape label -->
  <text x="75" y="122" text-anchor="middle" font-size="6.5" fill="#475569" font-weight="600">Column shape</text>
  <text x="75" y="131" text-anchor="middle" font-size="6" fill="#64748b">low birth rate</text>
  <text x="75" y="139" text-anchor="middle" font-size="6" fill="#64748b">low death rate</text>
  <text x="75" y="147" text-anchor="middle" font-size="6" fill="#64748b">ageing population</text>
  <!-- key -->
  <rect x="35" y="155" width="8" height="6" fill="#3b82f6" rx="1"/><text x="45" y="161" font-size="5.5" fill="#64748b">Male</text>
  <rect x="65" y="155" width="8" height="6" fill="#ec4899" rx="1"/><text x="75" y="161" font-size="5.5" fill="#64748b">Female</text>

  <!-- LIC pyramid (right) — wide base, rapidly tapering -->
  <text x="235" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">LIC (e.g. Nigeria)</text>
  <text x="235" y="28" text-anchor="middle" font-size="5.5" fill="#64748b">Age</text>
  <!-- 80+ -->
  <rect x="230" y="32" width="4" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="32" width="4" height="8" fill="#ec4899" rx="1"/>
  <text x="225" y="39" text-anchor="end" font-size="5" fill="#64748b">80+</text>
  <!-- 70-79 -->
  <rect x="227" y="41" width="7" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="41" width="7" height="8" fill="#ec4899" rx="1"/>
  <text x="225" y="48" text-anchor="end" font-size="5" fill="#64748b">70</text>
  <!-- 60-69 -->
  <rect x="224" y="50" width="10" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="50" width="10" height="8" fill="#ec4899" rx="1"/>
  <text x="225" y="57" text-anchor="end" font-size="5" fill="#64748b">60</text>
  <!-- 50-59 -->
  <rect x="220" y="59" width="14" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="59" width="14" height="8" fill="#ec4899" rx="1"/>
  <!-- 40-49 -->
  <rect x="216" y="68" width="18" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="68" width="18" height="8" fill="#ec4899" rx="1"/>
  <!-- 30-39 -->
  <rect x="211" y="77" width="23" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="77" width="23" height="8" fill="#ec4899" rx="1"/>
  <!-- 20-29 -->
  <rect x="206" y="86" width="28" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="86" width="28" height="8" fill="#ec4899" rx="1"/>
  <!-- 10-19 -->
  <rect x="200" y="95" width="34" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="95" width="34" height="8" fill="#ec4899" rx="1"/>
  <!-- 0-9 -->
  <rect x="196" y="104" width="38" height="8" fill="#3b82f6" rx="1"/><rect x="235" y="104" width="38" height="8" fill="#ec4899" rx="1"/>
  <text x="225" y="111" text-anchor="end" font-size="5" fill="#64748b">0</text>
  <!-- shape label -->
  <text x="235" y="122" text-anchor="middle" font-size="6.5" fill="#475569" font-weight="600">Triangle shape</text>
  <text x="235" y="131" text-anchor="middle" font-size="6" fill="#64748b">high birth rate</text>
  <text x="235" y="139" text-anchor="middle" font-size="6" fill="#64748b">high death rate</text>
  <text x="235" y="147" text-anchor="middle" font-size="6" fill="#64748b">youthful population</text>
</svg>`;

// ── POPULATION: DEMOGRAPHIC TRANSITION MODEL ────────────────────────────────
DIAGRAMS["dtm-model"] = `<svg viewBox="0 0 310 175" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="155" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Demographic Transition Model</text>

  <!-- axes -->
  <line x1="35" y1="25" x2="35" y2="120" stroke="#475569" stroke-width="1.2"/>
  <line x1="35" y1="120" x2="295" y2="120" stroke="#475569" stroke-width="1.2"/>
  <text x="30" y="75" text-anchor="middle" font-size="6" fill="#64748b" transform="rotate(-90 30 75)">rate / population</text>
  <text x="165" y="130" text-anchor="middle" font-size="6" fill="#64748b">time →</text>

  <!-- stage dividers -->
  <line x1="87" y1="22" x2="87" y2="120" stroke="#e2e8f0" stroke-width="0.8" stroke-dasharray="3,2"/>
  <line x1="139" y1="22" x2="139" y2="120" stroke="#e2e8f0" stroke-width="0.8" stroke-dasharray="3,2"/>
  <line x1="191" y1="22" x2="191" y2="120" stroke="#e2e8f0" stroke-width="0.8" stroke-dasharray="3,2"/>
  <line x1="243" y1="22" x2="243" y2="120" stroke="#e2e8f0" stroke-width="0.8" stroke-dasharray="3,2"/>

  <!-- stage labels -->
  <text x="61" y="22" text-anchor="middle" font-size="7" font-weight="700" fill="#475569">1</text>
  <text x="113" y="22" text-anchor="middle" font-size="7" font-weight="700" fill="#475569">2</text>
  <text x="165" y="22" text-anchor="middle" font-size="7" font-weight="700" fill="#475569">3</text>
  <text x="217" y="22" text-anchor="middle" font-size="7" font-weight="700" fill="#475569">4</text>
  <text x="269" y="22" text-anchor="middle" font-size="7" font-weight="700" fill="#475569">5</text>

  <!-- Birth rate line (red) — starts high, stays high, then drops -->
  <path d="M40 32 L87 33 Q110 34 139 40 Q160 55 191 75 Q215 90 243 95 L290 100" fill="none" stroke="#dc2626" stroke-width="2.5"/>

  <!-- Death rate line (blue) — starts high, drops earlier and faster -->
  <path d="M40 35 Q60 36 87 38 Q105 50 120 65 Q135 82 155 92 Q175 98 191 100 Q220 103 243 103 L290 108" fill="none" stroke="#3b82f6" stroke-width="2.5"/>

  <!-- Total population line (green, dashed) — grows where gap between BR and DR is large -->
  <path d="M40 112 L87 110 Q110 108 130 100 Q155 85 180 65 Q200 50 220 42 Q245 38 270 35 L290 38" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>

  <!-- legend -->
  <line x1="40" y1="138" x2="55" y2="138" stroke="#dc2626" stroke-width="2.5"/>
  <text x="58" y="141" font-size="6.5" fill="#dc2626" font-weight="600">Birth rate</text>
  <line x1="105" y1="138" x2="120" y2="138" stroke="#3b82f6" stroke-width="2.5"/>
  <text x="123" y="141" font-size="6.5" fill="#3b82f6" font-weight="600">Death rate</text>
  <line x1="175" y1="138" x2="190" y2="138" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="193" y="141" font-size="6.5" fill="#16a34a" font-weight="600">Total population</text>

  <!-- stage descriptions -->
  <text x="61" y="150" text-anchor="middle" font-size="5" fill="#64748b">High BR</text>
  <text x="61" y="157" text-anchor="middle" font-size="5" fill="#64748b">High DR</text>
  <text x="61" y="164" text-anchor="middle" font-size="5" fill="#64748b">Low pop.</text>
  <text x="113" y="150" text-anchor="middle" font-size="5" fill="#64748b">High BR</text>
  <text x="113" y="157" text-anchor="middle" font-size="5" fill="#64748b">Falling DR</text>
  <text x="113" y="164" text-anchor="middle" font-size="5" fill="#64748b">Pop. rises</text>
  <text x="165" y="150" text-anchor="middle" font-size="5" fill="#64748b">Falling BR</text>
  <text x="165" y="157" text-anchor="middle" font-size="5" fill="#64748b">Low DR</text>
  <text x="165" y="164" text-anchor="middle" font-size="5" fill="#64748b">Pop. rises</text>
  <text x="217" y="150" text-anchor="middle" font-size="5" fill="#64748b">Low BR</text>
  <text x="217" y="157" text-anchor="middle" font-size="5" fill="#64748b">Low DR</text>
  <text x="217" y="164" text-anchor="middle" font-size="5" fill="#64748b">Stable pop.</text>
  <text x="269" y="150" text-anchor="middle" font-size="5" fill="#64748b">Very low BR</text>
  <text x="269" y="157" text-anchor="middle" font-size="5" fill="#64748b">Low DR</text>
  <text x="269" y="164" text-anchor="middle" font-size="5" fill="#64748b">Pop. decline</text>

  <!-- natural increase label -->
  <text x="140" y="60" font-size="5.5" fill="#15803d" font-weight="600">natural</text>
  <text x="140" y="67" font-size="5.5" fill="#15803d" font-weight="600">increase</text>
  <path d="M148 70 L150 80" fill="none" stroke="#15803d" stroke-width="0.8"/>
</svg>`;

// ── MAP SKILLS: GRID REFERENCES ─────────────────────────────────────────────
DIAGRAMS["grid-reference"] = `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Grid References</text>

  <!-- Grid -->
  <rect x="30" y="20" width="120" height="120" fill="#f8fafc" stroke="#94a3b8" stroke-width="0.5"/>
  <!-- vertical grid lines -->
  <line x1="60" y1="20" x2="60" y2="140" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="90" y1="20" x2="90" y2="140" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="120" y1="20" x2="120" y2="140" stroke="#94a3b8" stroke-width="0.8"/>
  <!-- horizontal grid lines -->
  <line x1="30" y1="50" x2="150" y2="50" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="30" y1="80" x2="150" y2="80" stroke="#94a3b8" stroke-width="0.8"/>
  <line x1="30" y1="110" x2="150" y2="110" stroke="#94a3b8" stroke-width="0.8"/>

  <!-- easting numbers (bottom) -->
  <text x="30" y="152" text-anchor="middle" font-size="8" font-weight="600" fill="#1e293b">23</text>
  <text x="60" y="152" text-anchor="middle" font-size="8" font-weight="600" fill="#1e293b">24</text>
  <text x="90" y="152" text-anchor="middle" font-size="8" font-weight="600" fill="#1e293b">25</text>
  <text x="120" y="152" text-anchor="middle" font-size="8" font-weight="600" fill="#1e293b">26</text>
  <text x="150" y="152" text-anchor="middle" font-size="8" font-weight="600" fill="#1e293b">27</text>
  <text x="90" y="163" text-anchor="middle" font-size="7" fill="#3b82f6" font-weight="600">Eastings →</text>

  <!-- northing numbers (left) -->
  <text x="22" y="143" text-anchor="end" font-size="8" font-weight="600" fill="#1e293b">56</text>
  <text x="22" y="113" text-anchor="end" font-size="8" font-weight="600" fill="#1e293b">57</text>
  <text x="22" y="83" text-anchor="end" font-size="8" font-weight="600" fill="#1e293b">58</text>
  <text x="22" y="53" text-anchor="end" font-size="8" font-weight="600" fill="#1e293b">59</text>
  <text x="22" y="23" text-anchor="end" font-size="8" font-weight="600" fill="#1e293b">60</text>
  <text x="12" y="80" text-anchor="middle" font-size="7" fill="#dc2626" font-weight="600" transform="rotate(-90 12 80)">↑ Northings</text>

  <!-- feature marker (church symbol in square 2558) -->
  <text x="105" y="98" text-anchor="middle" font-size="12">⛪</text>

  <!-- 4-figure highlight: square 25,58 -->
  <rect x="90" y="50" width="30" height="30" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" stroke-width="2"/>

  <!-- 6-figure crosshair at 257,583 -->
  <circle cx="111" cy="60" r="3" fill="#dc2626" stroke="#fff" stroke-width="1"/>
  <line x1="105" y1="60" x2="117" y2="60" stroke="#dc2626" stroke-width="0.8"/>
  <line x1="111" y1="54" x2="111" y2="66" stroke="#dc2626" stroke-width="0.8"/>

  <!-- explanation panel on right -->
  <rect x="160" y="22" width="115" height="55" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
  <text x="217" y="35" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">4-figure: 2558</text>
  <text x="217" y="46" text-anchor="middle" font-size="6.5" fill="#64748b">Easting first (25)</text>
  <text x="217" y="55" text-anchor="middle" font-size="6.5" fill="#64748b">then Northing (58)</text>
  <text x="217" y="66" text-anchor="middle" font-size="6" fill="#3b82f6">= the whole square</text>

  <rect x="160" y="82" width="115" height="55" rx="4" fill="#fef2f2" stroke="#dc2626" stroke-width="1"/>
  <text x="217" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">6-figure: 257583</text>
  <text x="217" y="106" text-anchor="middle" font-size="6.5" fill="#64748b">Divide square into 10ths</text>
  <text x="217" y="115" text-anchor="middle" font-size="6.5" fill="#64748b">25|7 across, 58|3 up</text>
  <text x="217" y="126" text-anchor="middle" font-size="6" fill="#dc2626">= exact point ●</text>

  <!-- memory aid -->
  <text x="217" y="150" text-anchor="middle" font-size="7" fill="#475569" font-weight="600">"Along the corridor,</text>
  <text x="217" y="160" text-anchor="middle" font-size="7" fill="#475569" font-weight="600">up the stairs"</text>
</svg>`;

// ── MAP SKILLS: CONTOUR LINES & CROSS-SECTION ──────────────────────────────
DIAGRAMS["contour-cross-section"] = `<svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- top: contour map -->
  <text x="75" y="12" text-anchor="middle" font-size="8" font-weight="700" fill="#1e293b">Contour Map (plan view)</text>
  <rect x="10" y="16" width="130" height="80" rx="4" fill="#f0fdf4" stroke="#d1d5db" stroke-width="0.8"/>
  <!-- contour rings (hill) -->
  <ellipse cx="75" cy="50" rx="55" ry="32" fill="none" stroke="#a3765c" stroke-width="1.2"/>
  <text x="130" y="52" font-size="6" fill="#a3765c">100m</text>
  <ellipse cx="75" cy="50" rx="42" ry="24" fill="none" stroke="#a3765c" stroke-width="1.2"/>
  <text x="117" y="44" font-size="6" fill="#a3765c">200m</text>
  <ellipse cx="75" cy="50" rx="28" ry="16" fill="none" stroke="#a3765c" stroke-width="1.2"/>
  <text x="103" y="38" font-size="6" fill="#a3765c">300m</text>
  <ellipse cx="75" cy="50" rx="14" ry="8" fill="none" stroke="#a3765c" stroke-width="1.2"/>
  <text x="89" y="50" font-size="6" fill="#a3765c">400m</text>
  <!-- cross-section line A-B -->
  <line x1="20" y1="50" x2="130" y2="50" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="15" y="50" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">A</text>
  <text x="135" y="50" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">B</text>
  <!-- steep vs gentle -->
  <text x="35" y="75" font-size="5.5" fill="#16a34a">close together</text>
  <text x="35" y="82" font-size="5.5" fill="#16a34a">= steep</text>
  <text x="95" y="85" font-size="5.5" fill="#3b82f6">far apart</text>
  <text x="95" y="92" font-size="5.5" fill="#3b82f6">= gentle</text>

  <!-- bottom: cross-section profile -->
  <text x="75" y="110" text-anchor="middle" font-size="8" font-weight="700" fill="#1e293b">Cross-Section (side view)</text>
  <rect x="10" y="114" width="130" height="55" rx="4" fill="#f8fafc" stroke="#d1d5db" stroke-width="0.8"/>
  <!-- axes -->
  <line x1="20" y1="118" x2="20" y2="162" stroke="#475569" stroke-width="0.8"/>
  <line x1="20" y1="162" x2="130" y2="162" stroke="#475569" stroke-width="0.8"/>
  <!-- height labels -->
  <text x="17" y="162" text-anchor="end" font-size="5" fill="#64748b">0</text>
  <text x="17" y="151" text-anchor="end" font-size="5" fill="#64748b">100</text>
  <text x="17" y="140" text-anchor="end" font-size="5" fill="#64748b">200</text>
  <text x="17" y="129" text-anchor="end" font-size="5" fill="#64748b">300</text>
  <text x="17" y="121" text-anchor="end" font-size="5" fill="#64748b">400</text>
  <!-- terrain profile -->
  <path d="M20 162 Q35 158 45 150 Q55 138 65 125 Q72 120 75 118 Q78 120 85 125 Q95 138 105 150 Q115 158 130 162" fill="#e7d5b0" stroke="#a3765c" stroke-width="1.5" fill-opacity="0.5"/>
  <!-- A-B labels -->
  <text x="20" y="170" text-anchor="middle" font-size="7" font-weight="700" fill="#dc2626">A</text>
  <text x="130" y="170" text-anchor="middle" font-size="7" font-weight="700" fill="#dc2626">B</text>
  <!-- peak label -->
  <text x="75" y="116" text-anchor="middle" font-size="6" fill="#a3765c">summit</text>

  <!-- explanation panel on right -->
  <rect x="150" y="18" width="125" height="148" rx="5" fill="#f8fafc" stroke="#d1d5db" stroke-width="0.8"/>
  <text x="212" y="34" text-anchor="middle" font-size="7.5" font-weight="700" fill="#1e293b">Key Rules</text>
  <text x="160" y="50" font-size="6.5" fill="#475569">• Lines CLOSE together</text>
  <text x="165" y="60" font-size="6.5" fill="#16a34a" font-weight="600">  = steep slope</text>
  <text x="160" y="75" font-size="6.5" fill="#475569">• Lines FAR apart</text>
  <text x="165" y="85" font-size="6.5" fill="#3b82f6" font-weight="600">  = gentle slope</text>
  <text x="160" y="100" font-size="6.5" fill="#475569">• Lines never cross</text>
  <text x="160" y="115" font-size="6.5" fill="#475569">• Each line = same</text>
  <text x="165" y="125" font-size="6.5" fill="#475569">  height above sea level</text>
  <text x="160" y="142" font-size="6.5" fill="#475569">• Contour interval =</text>
  <text x="165" y="152" font-size="6.5" fill="#475569">  height difference</text>
  <text x="165" y="162" font-size="6.5" fill="#475569">  between lines</text>
</svg>`;

// ── INTRO: LATITUDE & LONGITUDE ─────────────────────────────────────────────
DIAGRAMS["lat-long-globe"] = `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <!-- globe outline -->
  <circle cx="100" cy="85" r="70" fill="#e0f2fe" stroke="#1d4ed8" stroke-width="1.5"/>

  <!-- longitude lines (vertical curves) -->
  <ellipse cx="100" cy="85" rx="10" ry="70" fill="none" stroke="#93c5fd" stroke-width="0.7"/>
  <ellipse cx="100" cy="85" rx="30" ry="70" fill="none" stroke="#93c5fd" stroke-width="0.7"/>
  <ellipse cx="100" cy="85" rx="50" ry="70" fill="none" stroke="#93c5fd" stroke-width="0.7"/>
  <line x1="100" y1="15" x2="100" y2="155" stroke="#3b82f6" stroke-width="1.2"/>

  <!-- latitude lines (horizontal) -->
  <line x1="30" y1="85" x2="170" y2="85" stroke="#dc2626" stroke-width="2"/>
  <ellipse cx="100" cy="48" rx="60" ry="5" fill="none" stroke="#fca5a5" stroke-width="0.8"/>
  <ellipse cx="100" cy="65" rx="67" ry="5" fill="none" stroke="#fca5a5" stroke-width="0.8"/>
  <ellipse cx="100" cy="105" rx="67" ry="5" fill="none" stroke="#fca5a5" stroke-width="0.8"/>
  <ellipse cx="100" cy="122" rx="60" ry="5" fill="none" stroke="#fca5a5" stroke-width="0.8"/>

  <!-- key lines labelled -->
  <!-- Equator -->
  <text x="172" y="82" font-size="7" fill="#dc2626" font-weight="700">Equator 0°</text>
  <!-- Tropics -->
  <text x="168" y="68" font-size="6" fill="#f59e0b">Tropic of Cancer 23.5°N</text>
  <text x="168" y="108" font-size="6" fill="#f59e0b">Tropic of Capricorn 23.5°S</text>
  <!-- Arctic/Antarctic -->
  <text x="160" y="50" font-size="5.5" fill="#6366f1">Arctic Circle 66.5°N</text>
  <text x="160" y="125" font-size="5.5" fill="#6366f1">Antarctic Circle 66.5°S</text>
  <!-- Prime Meridian -->
  <text x="104" y="20" font-size="6" fill="#3b82f6" font-weight="600">Prime Meridian 0°</text>

  <!-- North/South poles -->
  <circle cx="100" cy="15" r="2.5" fill="#1d4ed8"/>
  <text x="100" y="12" text-anchor="middle" font-size="6" fill="#1d4ed8" font-weight="600">N</text>
  <circle cx="100" cy="155" r="2.5" fill="#1d4ed8"/>
  <text x="100" y="165" text-anchor="middle" font-size="6" fill="#1d4ed8" font-weight="600">S</text>

  <!-- explanation panel -->
  <rect x="175" y="130" width="100" height="36" rx="4" fill="#f8fafc" stroke="#d1d5db" stroke-width="0.8"/>
  <rect x="178" y="133" width="8" height="6" fill="#dc2626" rx="1"/>
  <text x="189" y="139" font-size="6.5" fill="#dc2626" font-weight="600">Latitude</text>
  <text x="240" y="139" font-size="6" fill="#64748b">= N/S</text>
  <rect x="178" y="145" width="8" height="6" fill="#3b82f6" rx="1"/>
  <text x="189" y="151" font-size="6.5" fill="#3b82f6" font-weight="600">Longitude</text>
  <text x="245" y="151" font-size="6" fill="#64748b">= E/W</text>
  <text x="210" y="162" text-anchor="middle" font-size="5.5" fill="#64748b">"Lat = flat, Long = long"</text>
</svg>`;

// ── TECTONICS: VOLCANO CROSS-SECTION ────────────────────────────────────────
DIAGRAMS["volcano-cross-section"] = `<svg viewBox="0 0 280 175" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Volcano Cross-Section</text>

  <!-- ground level -->
  <rect x="0" y="130" width="280" height="45" fill="#a3765c"/>
  <rect x="0" y="125" width="280" height="8" fill="#86efac"/>

  <!-- volcano cone (layers of lava and ash) -->
  <polygon points="50,125 140,30 230,125" fill="#78350f" stroke="#5c2d0e" stroke-width="1.5"/>
  <!-- alternating layers -->
  <path d="M65 115 Q140 85 215 115" fill="none" stroke="#a3765c" stroke-width="1" opacity="0.5"/>
  <path d="M80 105 Q140 75 200 105" fill="none" stroke="#d4a574" stroke-width="1" opacity="0.5"/>
  <path d="M95 95 Q140 65 185 95" fill="none" stroke="#a3765c" stroke-width="1" opacity="0.5"/>
  <path d="M108 85 Q140 58 172 85" fill="none" stroke="#d4a574" stroke-width="1" opacity="0.5"/>
  <text x="190" y="100" font-size="5.5" fill="#d4a574">layers of</text>
  <text x="190" y="107" font-size="5.5" fill="#d4a574">lava &amp; ash</text>

  <!-- crater at top -->
  <ellipse cx="140" cy="32" rx="12" ry="4" fill="#5c2d0e" stroke="#3d1a05" stroke-width="1"/>
  <text x="160" y="28" font-size="7" fill="#1e293b" font-weight="600">crater</text>

  <!-- main vent (pipe up through cone) -->
  <rect x="136" y="32" width="8" height="98" fill="#ef4444" opacity="0.6" rx="2"/>
  <text x="120" y="75" font-size="6.5" fill="#dc2626" text-anchor="end" font-weight="600">main</text>
  <text x="120" y="83" font-size="6.5" fill="#dc2626" text-anchor="end" font-weight="600">vent</text>

  <!-- secondary vent -->
  <path d="M144 90 Q160 70 175 60" fill="none" stroke="#ef4444" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
  <text x="180" y="57" font-size="6" fill="#dc2626">side vent</text>

  <!-- magma chamber (underground) -->
  <ellipse cx="140" cy="155" rx="50" ry="18" fill="#ef4444" opacity="0.5" stroke="#dc2626" stroke-width="1.5"/>
  <ellipse cx="140" cy="153" rx="40" ry="12" fill="#fbbf24" opacity="0.4"/>
  <text x="140" y="157" text-anchor="middle" font-size="7.5" font-weight="700" fill="#7f1d1d">magma chamber</text>

  <!-- lava flow from crater -->
  <path d="M135 32 Q120 25 100 28 Q85 32 75 40" fill="none" stroke="#ef4444" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <text x="72" y="38" font-size="6" fill="#dc2626" text-anchor="end">lava flow</text>

  <!-- ash cloud -->
  <ellipse cx="140" cy="18" rx="25" ry="8" fill="#94a3b8" opacity="0.5"/>
  <ellipse cx="130" cy="14" rx="18" ry="6" fill="#94a3b8" opacity="0.4"/>
  <ellipse cx="150" cy="16" rx="15" ry="5" fill="#94a3b8" opacity="0.3"/>
  <text x="175" y="18" font-size="6" fill="#64748b">ash cloud</text>

  <!-- label: magma vs lava -->
  <text x="5" y="145" font-size="6" fill="#64748b">Magma = underground</text>
  <text x="5" y="153" font-size="6" fill="#64748b">Lava = on the surface</text>
</svg>`;

// ── GLOBALISATION: FOOD MILES / SUPPLY CHAIN ────────────────────────────────
DIAGRAMS["supply-chain-map"] = `<svg viewBox="0 0 300 165" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="150" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">Food Miles — How Far Does Our Food Travel?</text>

  <!-- simplified world map outlines -->
  <!-- UK (destination) -->
  <rect x="128" y="32" width="10" height="14" rx="2" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.2"/>
  <text x="133" y="30" text-anchor="middle" font-size="6" fill="#1d4ed8" font-weight="700">UK</text>

  <!-- Source regions -->
  <!-- South America (Brazil - coffee) -->
  <ellipse cx="80" cy="100" rx="18" ry="22" fill="#22c55e" opacity="0.3" stroke="#16a34a" stroke-width="1"/>
  <text x="80" y="98" text-anchor="middle" font-size="5.5" fill="#15803d">Brazil</text>
  <text x="80" y="106" text-anchor="middle" font-size="5" fill="#15803d">☕ coffee</text>

  <!-- Africa (Kenya - green beans) -->
  <ellipse cx="155" cy="90" rx="15" ry="20" fill="#f59e0b" opacity="0.2" stroke="#d97706" stroke-width="1"/>
  <text x="155" y="88" text-anchor="middle" font-size="5.5" fill="#92400e">Kenya</text>
  <text x="155" y="96" text-anchor="middle" font-size="5" fill="#92400e">🫘 beans</text>

  <!-- Spain (oranges) -->
  <rect x="118" y="50" width="12" height="10" rx="2" fill="#f59e0b" opacity="0.3" stroke="#d97706" stroke-width="0.8"/>
  <text x="124" y="58" text-anchor="middle" font-size="5" fill="#92400e">Spain</text>
  <text x="124" y="66" text-anchor="middle" font-size="5" fill="#92400e">🍊</text>

  <!-- India (rice/tea) -->
  <ellipse cx="210" cy="72" rx="14" ry="16" fill="#ec4899" opacity="0.2" stroke="#be185d" stroke-width="0.8"/>
  <text x="210" y="70" text-anchor="middle" font-size="5.5" fill="#9d174d">India</text>
  <text x="210" y="78" text-anchor="middle" font-size="5" fill="#9d174d">🍚 rice</text>

  <!-- New Zealand (lamb) -->
  <ellipse cx="270" cy="120" rx="12" ry="10" fill="#6366f1" opacity="0.2" stroke="#4f46e5" stroke-width="0.8"/>
  <text x="270" y="118" text-anchor="middle" font-size="5" fill="#4338ca">NZ</text>
  <text x="270" y="126" text-anchor="middle" font-size="5" fill="#4338ca">🐑 lamb</text>

  <!-- USA (wheat) -->
  <ellipse cx="50" cy="50" rx="20" ry="15" fill="#3b82f6" opacity="0.15" stroke="#2563eb" stroke-width="0.8"/>
  <text x="50" y="48" text-anchor="middle" font-size="5.5" fill="#1d4ed8">USA</text>
  <text x="50" y="56" text-anchor="middle" font-size="5" fill="#1d4ed8">🌾 wheat</text>

  <!-- Trade arrows to UK -->
  <defs><marker id="geoArrTr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><polygon points="0 0,5 2.5,0 5" fill="#dc2626"/></marker></defs>
  <path d="M80 80 Q100 55 128 40" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2" marker-end="url(#geoArrTr)"/>
  <path d="M155 72 Q145 55 136 44" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2" marker-end="url(#geoArrTr)"/>
  <path d="M124 52 L130 45" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2" marker-end="url(#geoArrTr)"/>
  <path d="M200 62 Q170 45 138 40" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2" marker-end="url(#geoArrTr)"/>
  <path d="M260 112 Q200 60 138 42" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2" marker-end="url(#geoArrTr)"/>
  <path d="M60 42 Q90 30 128 38" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2" marker-end="url(#geoArrTr)"/>

  <!-- distance labels -->
  <text x="88" y="62" font-size="5" fill="#dc2626">~9,500 km</text>
  <text x="225" y="55" font-size="5" fill="#dc2626">~6,700 km</text>
  <text x="215" y="110" font-size="5" fill="#dc2626">~18,800 km</text>

  <!-- key -->
  <rect x="5" y="135" width="290" height="28" rx="4" fill="#fef2f2" stroke="#fca5a5" stroke-width="0.8"/>
  <text x="150" y="148" text-anchor="middle" font-size="7" fill="#1e293b" font-weight="600">Food miles = distance food travels from farm to plate</text>
  <text x="150" y="158" text-anchor="middle" font-size="6" fill="#64748b">More miles → more transport emissions → bigger carbon footprint</text>
</svg>`;

// ── UK: PHYSICAL REGIONS ────────────────────────────────────────────────────
DIAGRAMS["uk-physical-regions"] = `<svg viewBox="0 0 240 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="120" y="13" text-anchor="middle" font-size="9" font-weight="700" fill="#1e293b">UK Physical Regions</text>

  <!-- simplified UK outline -->
  <!-- Scotland -->
  <path d="M75 20 Q65 25 60 35 Q55 42 58 48 Q62 50 65 55 Q68 58 72 60 Q78 62 82 58 Q85 55 90 50 Q92 46 95 42 Q98 38 95 32 Q90 25 82 22 Z" fill="#7c3aed" opacity="0.3" stroke="#6d28d9" stroke-width="1.2"/>
  <text x="78" y="40" text-anchor="middle" font-size="5.5" fill="#5b21b6" font-weight="600">Scottish</text>
  <text x="78" y="47" text-anchor="middle" font-size="5.5" fill="#5b21b6" font-weight="600">Highlands</text>
  <!-- Scottish Lowlands -->
  <path d="M65 55 Q68 58 72 60 Q78 62 82 58 Q85 60 88 63 Q82 68 75 68 Q68 66 65 62 Z" fill="#a78bfa" opacity="0.3" stroke="#7c3aed" stroke-width="0.8"/>
  <text x="76" y="65" text-anchor="middle" font-size="4.5" fill="#7c3aed">Lowlands</text>

  <!-- Northern England -->
  <path d="M65 62 Q68 66 75 68 Q82 68 88 63 Q92 68 90 75 Q88 82 85 88 Q78 92 72 88 Q65 82 62 75 Q60 68 65 62 Z" fill="#16a34a" opacity="0.25" stroke="#15803d" stroke-width="1"/>
  <!-- Pennines spine -->
  <line x1="77" y1="65" x2="78" y2="88" stroke="#15803d" stroke-width="2" stroke-linecap="round"/>
  <text x="86" y="73" font-size="5" fill="#15803d" font-weight="600">Pennines</text>
  <!-- Lake District -->
  <circle cx="68" cy="72" r="5" fill="#3b82f6" opacity="0.3" stroke="#2563eb" stroke-width="0.8"/>
  <text x="58" y="72" font-size="4" fill="#2563eb" text-anchor="end">Lake</text>
  <text x="58" y="77" font-size="4" fill="#2563eb" text-anchor="end">District</text>

  <!-- Wales -->
  <path d="M60 88 Q55 95 52 102 Q50 108 55 112 Q60 114 65 112 Q68 108 70 102 Q72 96 68 90 Z" fill="#dc2626" opacity="0.2" stroke="#dc2626" stroke-width="1"/>
  <text x="60" y="103" text-anchor="middle" font-size="5" fill="#dc2626" font-weight="600">Wales</text>
  <text x="60" y="109" text-anchor="middle" font-size="4" fill="#dc2626">Snowdonia</text>

  <!-- Midlands & Southern England -->
  <path d="M68 90 Q72 96 70 102 Q68 108 65 112 Q68 118 72 122 Q78 128 85 132 Q92 136 98 132 Q102 126 100 118 Q98 110 95 102 Q92 96 88 92 Q82 88 75 88 Z" fill="#f59e0b" opacity="0.15" stroke="#d97706" stroke-width="0.8"/>
  <text x="82" y="100" text-anchor="middle" font-size="5" fill="#92400e">Midlands</text>
  <text x="88" y="120" text-anchor="middle" font-size="5" fill="#92400e">SE Lowlands</text>

  <!-- SW peninsula -->
  <path d="M60 122 Q55 128 50 132 Q48 135 52 138 Q58 140 65 136 Q68 130 68 125 Z" fill="#f59e0b" opacity="0.1" stroke="#d97706" stroke-width="0.8"/>
  <text x="55" y="133" text-anchor="middle" font-size="4" fill="#92400e">SW</text>

  <!-- Major rivers -->
  <path d="M90 130 Q92 125 88 118 Q85 112 82 108" fill="none" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="96" y="128" font-size="4.5" fill="#1d4ed8">Thames</text>
  <path d="M62 110 Q68 115 75 112 Q82 108 85 102" fill="none" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="65" y="118" font-size="4.5" fill="#1d4ed8">Severn</text>
  <path d="M80 82 Q82 78 85 75" fill="none" stroke="#3b82f6" stroke-width="1"/>
  <text x="90" y="82" font-size="4.5" fill="#1d4ed8">Trent</text>

  <!-- key/legend on right side -->
  <rect x="115" y="22" width="120" height="115" rx="5" fill="#f8fafc" stroke="#d1d5db" stroke-width="0.8"/>
  <text x="175" y="36" text-anchor="middle" font-size="7.5" font-weight="700" fill="#1e293b">Key Features</text>
  <rect x="120" y="42" width="10" height="8" fill="#7c3aed" opacity="0.3" rx="1"/><text x="134" y="49" font-size="6" fill="#5b21b6" font-weight="600">Highlands</text><text x="134" y="57" font-size="5.5" fill="#64748b">mountains, rugged</text>
  <rect x="120" y="62" width="10" height="8" fill="#16a34a" opacity="0.25" rx="1"/><text x="134" y="69" font-size="6" fill="#15803d" font-weight="600">Uplands</text><text x="134" y="77" font-size="5.5" fill="#64748b">Pennines, moors</text>
  <rect x="120" y="82" width="10" height="8" fill="#f59e0b" opacity="0.15" rx="1"/><text x="134" y="89" font-size="6" fill="#92400e" font-weight="600">Lowlands</text><text x="134" y="97" font-size="5.5" fill="#64748b">flat, fertile farmland</text>
  <line x1="120" y1="106" x2="130" y2="106" stroke="#3b82f6" stroke-width="1.5"/><text x="134" y="109" font-size="6" fill="#1d4ed8" font-weight="600">Major rivers</text>
  <text x="175" y="122" text-anchor="middle" font-size="5.5" fill="#475569">North &amp; West = higher</text>
  <text x="175" y="130" text-anchor="middle" font-size="5.5" fill="#475569">South &amp; East = lower</text>

  <!-- cities -->
  <circle cx="78" y="30" r="1.5" fill="#1e293b"/><text x="84" y="32" font-size="4" fill="#1e293b">Edinburgh</text>
  <circle cx="82" y="82" r="1.5" fill="#1e293b"/><text x="57" y="84" font-size="4" fill="#1e293b">Manchester</text>
  <circle cx="88" y="118" r="1.5" fill="#1e293b"/><text x="95" y="116" font-size="4" fill="#1e293b">London</text>

  <text x="120" y="170" text-anchor="middle" font-size="6" fill="#64748b">The Tees–Exe line divides highland N/W from lowland S/E</text>
</svg>`;

// ── DEVELOPMENT & AID ───────────────────────────────────────────────────────
DIAGRAMS["types-of-aid"] = `<svg viewBox="0 0 340 180" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="170" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">Types of International Aid</text>

  <!-- Bilateral -->
  <rect x="10" y="26" width="155" height="66" rx="6" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="87" y="40" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Bilateral Aid</text>
  <text x="87" y="51" text-anchor="middle" font-size="6.5" fill="#334155">Government → Government</text>
  <rect x="20" y="56" width="40" height="28" rx="4" fill="#93c5fd"/>
  <text x="40" y="68" text-anchor="middle" font-size="6" font-weight="600" fill="#1e3a5f">Donor</text>
  <text x="40" y="77" text-anchor="middle" font-size="5" fill="#1e3a5f">e.g. UK</text>
  <path d="M64 70 L96 70" stroke="#1d4ed8" stroke-width="1.5" marker-end="url(#aidArrow)"/>
  <text x="80" y="66" text-anchor="middle" font-size="5" fill="#1d4ed8">funds</text>
  <rect x="100" y="56" width="55" height="28" rx="4" fill="#93c5fd"/>
  <text x="127" y="68" text-anchor="middle" font-size="6" font-weight="600" fill="#1e3a5f">Recipient</text>
  <text x="127" y="77" text-anchor="middle" font-size="5" fill="#1e3a5f">e.g. Kenya</text>

  <!-- Multilateral -->
  <rect x="175" y="26" width="155" height="66" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="252" y="40" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">Multilateral Aid</text>
  <text x="252" y="51" text-anchor="middle" font-size="6.5" fill="#334155">Through organisations</text>
  <rect x="185" y="56" width="50" height="28" rx="4" fill="#fde68a"/>
  <text x="210" y="68" text-anchor="middle" font-size="6" font-weight="600" fill="#78350f">Many</text>
  <text x="210" y="77" text-anchor="middle" font-size="5" fill="#78350f">donors</text>
  <path d="M239 70 L261 70" stroke="#92400e" stroke-width="1.5" marker-end="url(#aidArrow2)"/>
  <text x="250" y="64" text-anchor="middle" font-size="4.5" fill="#92400e">UN /</text>
  <text x="250" y="69" text-anchor="middle" font-size="4.5" fill="#92400e">World Bank</text>
  <rect x="265" y="56" width="55" height="28" rx="4" fill="#fde68a"/>
  <text x="292" y="68" text-anchor="middle" font-size="6" font-weight="600" fill="#78350f">Recipient</text>
  <text x="292" y="77" text-anchor="middle" font-size="5" fill="#78350f">countries</text>

  <!-- Short-term -->
  <rect x="10" y="100" width="155" height="66" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="87" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Short-term / Emergency</text>
  <text x="87" y="125" text-anchor="middle" font-size="6.5" fill="#334155">Immediate disaster relief</text>
  <text x="40" y="140" text-anchor="middle" font-size="15">🚑</text>
  <text x="87" y="148" text-anchor="middle" font-size="5.5" fill="#7f1d1d">Food, water, shelter, medicine</text>
  <text x="87" y="158" text-anchor="middle" font-size="5" fill="#64748b">e.g. after earthquake or drought</text>

  <!-- Long-term -->
  <rect x="175" y="100" width="155" height="66" rx="6" fill="#dcfce7" stroke="#22c55e" stroke-width="1.2"/>
  <text x="252" y="114" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Long-term / Development</text>
  <text x="252" y="125" text-anchor="middle" font-size="6.5" fill="#334155">Building capacity over time</text>
  <text x="210" y="140" text-anchor="middle" font-size="15">🏗️</text>
  <text x="252" y="148" text-anchor="middle" font-size="5.5" fill="#14532d">Schools, roads, hospitals, training</text>
  <text x="252" y="158" text-anchor="middle" font-size="5" fill="#64748b">Aims for self-sufficiency</text>

  <text x="170" y="177" text-anchor="middle" font-size="5.5" fill="#64748b">Aid works best when it is long-term, locally led and combined with trade</text>

  <defs>
    <marker id="aidArrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill="#1d4ed8"/></marker>
    <marker id="aidArrow2" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill="#92400e"/></marker>
  </defs>
</svg>`;

// ── FIELDWORK & ENQUIRY ─────────────────────────────────────────────────────
DIAGRAMS["fieldwork-enquiry"] = `<svg viewBox="0 0 340 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="170" y="14" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">The Geographical Enquiry Process</text>

  <!-- Step boxes in a flow -->
  <rect x="5" y="24" width="72" height="32" rx="5" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="41" y="37" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">1. Question</text>
  <text x="41" y="48" text-anchor="middle" font-size="5" fill="#334155">What do we</text>
  <text x="41" y="54" text-anchor="middle" font-size="5" fill="#334155">want to find out?</text>

  <path d="M80 40 L87 40" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrow)"/>

  <rect x="90" y="24" width="72" height="32" rx="5" fill="#e0e7ff" stroke="#6366f1" stroke-width="1.2"/>
  <text x="126" y="37" text-anchor="middle" font-size="7" font-weight="700" fill="#4338ca">2. Hypothesis</text>
  <text x="126" y="48" text-anchor="middle" font-size="5" fill="#334155">A testable</text>
  <text x="126" y="54" text-anchor="middle" font-size="5" fill="#334155">prediction</text>

  <path d="M165 40 L172 40" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrow)"/>

  <rect x="175" y="24" width="72" height="32" rx="5" fill="#fae8ff" stroke="#a855f7" stroke-width="1.2"/>
  <text x="211" y="37" text-anchor="middle" font-size="7" font-weight="700" fill="#7e22ce">3. Method</text>
  <text x="211" y="48" text-anchor="middle" font-size="5" fill="#334155">How will we</text>
  <text x="211" y="54" text-anchor="middle" font-size="5" fill="#334155">collect data?</text>

  <path d="M250 40 L257 40" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrow)"/>

  <rect x="260" y="24" width="72" height="32" rx="5" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.2"/>
  <text x="296" y="37" text-anchor="middle" font-size="6.5" font-weight="700" fill="#92400e">4. Collection</text>
  <text x="296" y="48" text-anchor="middle" font-size="5" fill="#334155">Gather primary</text>
  <text x="296" y="54" text-anchor="middle" font-size="5" fill="#334155">& secondary data</text>

  <!-- Arrow down from Collection to Presentation -->
  <path d="M296 58 L296 72" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrow)"/>

  <!-- Second row (right to left) -->
  <rect x="260" y="75" width="72" height="32" rx="5" fill="#ffedd5" stroke="#f97316" stroke-width="1.2"/>
  <text x="296" y="88" text-anchor="middle" font-size="6.5" font-weight="700" fill="#c2410c">5. Presentation</text>
  <text x="296" y="99" text-anchor="middle" font-size="5" fill="#334155">Graphs, charts,</text>
  <text x="296" y="105" text-anchor="middle" font-size="5" fill="#334155">maps, tables</text>

  <path d="M257 91 L250 91" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrowL)"/>

  <rect x="175" y="75" width="72" height="32" rx="5" fill="#fee2e2" stroke="#ef4444" stroke-width="1.2"/>
  <text x="211" y="88" text-anchor="middle" font-size="7" font-weight="700" fill="#991b1b">6. Analysis</text>
  <text x="211" y="99" text-anchor="middle" font-size="5" fill="#334155">What patterns</text>
  <text x="211" y="105" text-anchor="middle" font-size="5" fill="#334155">does the data show?</text>

  <path d="M172 91 L165 91" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrowL)"/>

  <rect x="90" y="75" width="72" height="32" rx="5" fill="#dcfce7" stroke="#22c55e" stroke-width="1.2"/>
  <text x="126" y="88" text-anchor="middle" font-size="6.5" font-weight="700" fill="#166534">7. Conclusion</text>
  <text x="126" y="99" text-anchor="middle" font-size="5" fill="#334155">Answer the question</text>
  <text x="126" y="105" text-anchor="middle" font-size="5" fill="#334155">using evidence</text>

  <path d="M87 91 L80 91" stroke="#64748b" stroke-width="1.2" marker-end="url(#fwArrowL)"/>

  <rect x="5" y="75" width="72" height="32" rx="5" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.2"/>
  <text x="41" y="88" text-anchor="middle" font-size="6.5" font-weight="700" fill="#15803d">8. Evaluation</text>
  <text x="41" y="99" text-anchor="middle" font-size="5" fill="#334155">Reliable? Accurate?</text>
  <text x="41" y="105" text-anchor="middle" font-size="5" fill="#334155">What to improve?</text>

  <!-- Key sampling types -->
  <rect x="10" y="118" width="100" height="36" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="60" y="130" text-anchor="middle" font-size="6" font-weight="600" fill="#334155">Sampling Types</text>
  <text x="60" y="139" text-anchor="middle" font-size="5" fill="#64748b">Random | Systematic | Stratified</text>
  <text x="60" y="148" text-anchor="middle" font-size="4.5" fill="#94a3b8">chance | regular intervals | sub-groups</text>

  <!-- Key data presentation -->
  <rect x="120" y="118" width="100" height="36" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="170" y="130" text-anchor="middle" font-size="6" font-weight="600" fill="#334155">Data Presentation</text>
  <text x="170" y="139" text-anchor="middle" font-size="5" fill="#64748b">Bar | Line | Pie | Choropleth</text>
  <text x="170" y="148" text-anchor="middle" font-size="4.5" fill="#94a3b8">compare | trend | proportion | area</text>

  <!-- Key averages -->
  <rect x="230" y="118" width="100" height="36" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8"/>
  <text x="280" y="130" text-anchor="middle" font-size="6" font-weight="600" fill="#334155">Averages</text>
  <text x="280" y="139" text-anchor="middle" font-size="5" fill="#64748b">Mean | Median | Mode</text>
  <text x="280" y="148" text-anchor="middle" font-size="4.5" fill="#94a3b8">total÷n | middle | most common</text>

  <defs>
    <marker id="fwArrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4" fill="#64748b"/></marker>
    <marker id="fwArrowL" markerWidth="6" markerHeight="4" refX="1" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4" fill="#64748b"/></marker>
  </defs>
</svg>`;
