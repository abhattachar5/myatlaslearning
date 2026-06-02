// diagrams/y9-math.js — SVG figures for Year 9 maths lessons.
// Adds keys onto the shared DIAGRAMS map (declared in diagrams/science.js, which
// loads first). Each div.lesson-diagram[data-diagram="key"] in a LESSON pulls
// DIAGRAMS[key]; island.html injects it and adds a click-to-enlarge modal.
// Theme: blue #3b82f6 / indigo #6366f1, ink #1e293b, faint guides #cbd5e1.
// Authored by the atlas-content skill for Year 9. Self-contained SVG only.

// ── Prime factor tree of 60 → 2² × 3 × 5 ─────────────────────────────────────
DIAGRAMS["math-factor-tree"] = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Prime Factor Tree of 60</text>
  <!-- branches -->
  <line x1="140" y1="42" x2="92" y2="68" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="140" y1="42" x2="190" y2="68" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="190" y1="84" x2="150" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="190" y1="84" x2="222" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="222" y1="126" x2="190" y2="152" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="222" y1="126" x2="248" y2="152" stroke="#94a3b8" stroke-width="1.5"/>
  <!-- composite nodes -->
  <circle cx="140" cy="34" r="13" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="140" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">60</text>
  <circle cx="190" cy="76" r="13" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="190" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">30</text>
  <circle cx="222" cy="118" r="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.6"/>
  <text x="222" y="122" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">15</text>
  <!-- prime leaves (filled indigo) -->
  <circle cx="92" cy="76" r="12" fill="#6366f1"/><text x="92" y="80" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">2</text>
  <circle cx="150" cy="118" r="12" fill="#6366f1"/><text x="150" y="122" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">2</text>
  <circle cx="190" cy="160" r="12" fill="#6366f1"/><text x="190" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">3</text>
  <circle cx="248" cy="160" r="12" fill="#6366f1"/><text x="248" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">5</text>
  <text x="80" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#3b82f6">60 = 2² × 3 × 5</text>
  <text x="200" y="192" text-anchor="middle" font-size="8.5" fill="#64748b">prime leaves are shaded</text>
</svg>`;

// ── HCF / LCM Venn for 24 = 2³×3 and 36 = 2²×3² ──────────────────────────────
DIAGRAMS["math-prime-venn"] = `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">HCF &amp; LCM of 24 and 36</text>
  <circle cx="108" cy="104" r="72" fill="#3b82f6" fill-opacity="0.10" stroke="#3b82f6" stroke-width="1.6"/>
  <circle cx="172" cy="104" r="72" fill="#6366f1" fill-opacity="0.10" stroke="#6366f1" stroke-width="1.6"/>
  <text x="70" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#3b82f6">24 = 2³×3</text>
  <text x="210" y="40" text-anchor="middle" font-size="11" font-weight="700" fill="#6366f1">36 = 2²×3²</text>
  <!-- left only: spare 2 -->
  <text x="72" y="108" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">2</text>
  <!-- shared (HCF): 2, 2, 3 -->
  <text x="140" y="92" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">2</text>
  <text x="140" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">2</text>
  <text x="140" y="132" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">3</text>
  <!-- right only: spare 3 -->
  <text x="208" y="108" text-anchor="middle" font-size="14" font-weight="700" fill="#1e293b">3</text>
  <text x="140" y="190" text-anchor="middle" font-size="10.5" font-weight="700" fill="#3b82f6">HCF = 2²×3 = 12 (overlap)</text>
  <text x="140" y="204" text-anchor="middle" font-size="10.5" font-weight="700" fill="#6366f1">LCM = 2³×3² = 72 (everything)</text>
</svg>`;

// ── Nested number sets ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ ─────────────────────────────────────────
DIAGRAMS["math-number-sets"] = `<svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="15" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">The Number Sets</text>
  <rect x="12" y="24" width="256" height="158" rx="8" fill="#eef2ff" stroke="#6366f1" stroke-width="1.4"/>
  <text x="20" y="38" font-size="10" font-weight="700" fill="#6366f1">ℝ Real</text>
  <rect x="22" y="44" width="180" height="128" rx="7" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.4"/>
  <text x="30" y="58" font-size="10" font-weight="700" fill="#3b82f6">ℚ Rational</text>
  <rect x="32" y="64" width="140" height="98" rx="6" fill="#fff" stroke="#0ea5e9" stroke-width="1.3"/>
  <text x="40" y="78" font-size="10" font-weight="700" fill="#0ea5e9">ℤ Integers</text>
  <rect x="42" y="84" width="104" height="68" rx="5" fill="#f8fafc" stroke="#64748b" stroke-width="1.2"/>
  <text x="50" y="98" font-size="9.5" font-weight="700" fill="#64748b">Whole</text>
  <rect x="52" y="104" width="70" height="40" rx="4" fill="#fff" stroke="#1e293b" stroke-width="1.2"/>
  <text x="60" y="118" font-size="9.5" font-weight="700" fill="#1e293b">ℕ 1,2,3</text>
  <text x="60" y="136" font-size="9" fill="#475569">0</text>
  <text x="92" y="158" font-size="9" fill="#475569">−4</text>
  <text x="150" y="150" font-size="9" fill="#0369a1">½ , 0.7</text>
  <text x="214" y="150" font-size="10" font-weight="700" fill="#6366f1">√2 , π</text>
  <text x="214" y="164" font-size="8" fill="#64748b">irrational</text>
</svg>`;

// ── Simplifying a surd: √72 = √36 × √2 = 6√2 ──────────────────────────────────
DIAGRAMS["math-surd-simplify"] = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Simplifying √72</text>
  <defs><marker id="sd-ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
  <rect x="14" y="50" width="52" height="34" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.4"/>
  <text x="40" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">√72</text>
  <line x1="68" y1="67" x2="86" y2="67" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#sd-ar)"/>
  <rect x="88" y="50" width="70" height="34" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="123" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b">√(36 × 2)</text>
  <line x1="160" y1="67" x2="178" y2="67" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#sd-ar)"/>
  <rect x="180" y="50" width="58" height="34" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="209" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b">√36·√2</text>
  <line x1="240" y1="67" x2="256" y2="67" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#sd-ar)"/>
  <rect x="232" y="92" width="48" height="30" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.6"/>
  <text x="256" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">6√2</text>
  <text x="118" y="112" text-anchor="middle" font-size="9" fill="#64748b">36 is the largest square factor of 72</text>
</svg>`;

// ── The three index laws ──────────────────────────────────────────────────────
DIAGRAMS["math-index-laws"] = `<svg viewBox="0 0 280 168" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">The Three Index Laws</text>
  <g font-size="13" font-weight="700" fill="#1e293b">
    <rect x="14" y="28" width="252" height="38" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
    <text x="26" y="52">aᵐ × aⁿ = a⁽ᵐ⁺ⁿ⁾</text>
    <text x="150" y="52" font-size="11" font-weight="600" fill="#475569">e.g. 2³ × 2² = 2⁵</text>
    <rect x="14" y="70" width="252" height="38" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
    <text x="26" y="94">aᵐ ÷ aⁿ = a⁽ᵐ⁻ⁿ⁾</text>
    <text x="150" y="94" font-size="11" font-weight="600" fill="#475569">e.g. 2⁵ ÷ 2² = 2³</text>
    <rect x="14" y="112" width="252" height="38" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.2"/>
    <text x="26" y="136">(aᵐ)ⁿ = a⁽ᵐⁿ⁾</text>
    <text x="150" y="136" font-size="11" font-weight="600" fill="#475569">e.g. (2³)² = 2⁶</text>
  </g>
  <text x="140" y="162" text-anchor="middle" font-size="8.5" fill="#64748b">add to multiply · subtract to divide · multiply for a power of a power</text>
</svg>`;

// ── Fractional index: 8^(2/3) = (³√8)² = 2² = 4 ──────────────────────────────
DIAGRAMS["math-frac-index"] = `<svg viewBox="0 0 280 132" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Evaluating 8^(2/3)</text>
  <defs><marker id="fi-ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
  <rect x="12" y="50" width="58" height="34" rx="6" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.4"/>
  <text x="41" y="72" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">8^(2/3)</text>
  <line x1="72" y1="67" x2="92" y2="67" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#fi-ar)"/>
  <text x="110" y="44" text-anchor="middle" font-size="8.5" fill="#64748b">root (÷3)</text>
  <rect x="94" y="50" width="62" height="34" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="125" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b">³√8 = 2</text>
  <line x1="158" y1="67" x2="178" y2="67" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#fi-ar)"/>
  <text x="196" y="44" text-anchor="middle" font-size="8.5" fill="#64748b">power (×2)</text>
  <rect x="180" y="50" width="52" height="34" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="206" y="72" text-anchor="middle" font-size="12" font-weight="600" fill="#1e293b">2²</text>
  <line x1="234" y1="67" x2="250" y2="67" stroke="#94a3b8" stroke-width="1.6" marker-end="url(#fi-ar)"/>
  <rect x="232" y="92" width="44" height="30" rx="6" fill="#eef2ff" stroke="#6366f1" stroke-width="1.6"/>
  <text x="254" y="112" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">4</text>
  <text x="120" y="112" text-anchor="middle" font-size="9" fill="#64748b">bottom = root · top = power · root first keeps it small</text>
</svg>`;

// ── Index ladder: why a⁰ = 1 and negative indices ────────────────────────────
DIAGRAMS["math-index-ladder"] = `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Keep dividing by 2</text>
  <g font-size="12" font-weight="700" fill="#1e293b">
    <text x="60" y="40" text-anchor="end">2³ =</text><text x="70" y="40">8</text>
    <text x="60" y="68" text-anchor="end">2² =</text><text x="70" y="68">4</text>
    <text x="60" y="96" text-anchor="end">2¹ =</text><text x="70" y="96">2</text>
    <text x="60" y="124" text-anchor="end" fill="#3b82f6">2⁰ =</text><text x="70" y="124" fill="#3b82f6">1</text>
    <text x="60" y="152" text-anchor="end" fill="#6366f1">2⁻¹ =</text><text x="70" y="152" fill="#6366f1">½</text>
    <text x="60" y="180" text-anchor="end" fill="#6366f1">2⁻² =</text><text x="70" y="180" fill="#6366f1">¼</text>
  </g>
  <defs><marker id="il-ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
  <g stroke="#94a3b8" stroke-width="1.4">
    <line x1="150" y1="44" x2="150" y2="60" marker-end="url(#il-ar)"/>
    <line x1="150" y1="72" x2="150" y2="88" marker-end="url(#il-ar)"/>
    <line x1="150" y1="100" x2="150" y2="116" marker-end="url(#il-ar)"/>
    <line x1="150" y1="128" x2="150" y2="144" marker-end="url(#il-ar)"/>
    <line x1="150" y1="156" x2="150" y2="172" marker-end="url(#il-ar)"/>
  </g>
  <g font-size="10" fill="#64748b">
    <text x="162" y="56">÷2</text><text x="162" y="84">÷2</text><text x="162" y="112">÷2</text>
    <text x="162" y="140">÷2</text><text x="162" y="168">÷2</text>
  </g>
  <text x="140" y="200" text-anchor="middle" font-size="9" fill="#64748b">each step down divides by 2 — so 2⁰ = 1 and 2⁻¹ = ½</text>
</svg>`;

// ── Standard form: the power of 10 counts the place shift ─────────────────────
DIAGRAMS["math-standard-form"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Standard Form: A × 10ⁿ</text>
  <text x="140" y="44" text-anchor="middle" font-size="15" font-weight="700" fill="#1e293b">6 400 = 6.4 × 10³</text>
  <text x="140" y="62" text-anchor="middle" font-size="9" fill="#64748b">big number → positive power (move point left 3 places)</text>
  <text x="140" y="92" text-anchor="middle" font-size="15" font-weight="700" fill="#6366f1">0.0072 = 7.2 × 10⁻³</text>
  <text x="140" y="110" text-anchor="middle" font-size="9" fill="#64748b">small number → negative power (move point right 3 places)</text>
  <rect x="40" y="122" width="200" height="20" rx="5" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.2"/>
  <text x="140" y="136" text-anchor="middle" font-size="9.5" font-weight="600" fill="#3b82f6">A must be at least 1 but less than 10</text>
</svg>`;

// ── FDP equivalence bar: ¾ = 0.75 = 75% ──────────────────────────────────────
DIAGRAMS["math-fdp-equivalence"] = `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">¾ = 0.75 = 75%</text>
  <g>
    <rect x="20" y="30" width="60" height="40" fill="#3b82f6" fill-opacity="0.5" stroke="#1e293b" stroke-width="1"/>
    <rect x="80" y="30" width="60" height="40" fill="#3b82f6" fill-opacity="0.5" stroke="#1e293b" stroke-width="1"/>
    <rect x="140" y="30" width="60" height="40" fill="#3b82f6" fill-opacity="0.5" stroke="#1e293b" stroke-width="1"/>
    <rect x="200" y="30" width="60" height="40" fill="#fff" stroke="#1e293b" stroke-width="1"/>
  </g>
  <text x="140" y="92" text-anchor="middle" font-size="10" fill="#475569">3 of the 4 equal parts are shaded</text>
  <line x1="20" y1="104" x2="260" y2="104" stroke="#94a3b8" stroke-width="1.2"/>
  <g font-size="9" fill="#64748b" text-anchor="middle">
    <text x="20" y="120">0</text><text x="80" y="120">0.25</text><text x="140" y="120">0.5</text>
    <text x="200" y="120">0.75</text><text x="260" y="120">1</text>
  </g>
  <circle cx="200" cy="104" r="4" fill="#6366f1"/>
</svg>`;

// ── Bounds: error interval on a number line for x = 6.4 (1 d.p.) ──────────────
DIAGRAMS["math-bounds-line"] = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Bounds of 6.4 (rounded to 1 d.p.)</text>
  <line x1="30" y1="64" x2="250" y2="64" stroke="#1e293b" stroke-width="1.6"/>
  <line x1="80" y1="50" x2="80" y2="78" stroke="#6366f1" stroke-width="2"/>
  <line x1="200" y1="50" x2="200" y2="78" stroke="#6366f1" stroke-width="2"/>
  <line x1="140" y1="48" x2="140" y2="80" stroke="#3b82f6" stroke-width="2.5"/>
  <rect x="80" y="58" width="120" height="12" fill="#3b82f6" fill-opacity="0.15"/>
  <text x="80" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="#6366f1">6.35</text>
  <text x="80" y="108" text-anchor="middle" font-size="8" fill="#64748b">lower bound</text>
  <text x="140" y="40" text-anchor="middle" font-size="10" font-weight="700" fill="#3b82f6">6.4</text>
  <text x="200" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="#6366f1">6.45</text>
  <text x="200" y="108" text-anchor="middle" font-size="8" fill="#64748b">upper bound</text>
  <text x="140" y="112" text-anchor="middle" font-size="9.5" font-weight="600" fill="#1e293b">6.35 ≤ x &lt; 6.45</text>
</svg>`;

// ── Ratio bar model: share £40 in 3 : 5 ──────────────────────────────────────
DIAGRAMS["math-ratio-bar"] = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Share £40 in the ratio 3 : 5</text>
  <g stroke="#1e293b" stroke-width="1">
    <rect x="20" y="34" width="30" height="30" fill="#3b82f6" fill-opacity="0.55"/>
    <rect x="50" y="34" width="30" height="30" fill="#3b82f6" fill-opacity="0.55"/>
    <rect x="80" y="34" width="30" height="30" fill="#3b82f6" fill-opacity="0.55"/>
    <rect x="120" y="34" width="30" height="30" fill="#6366f1" fill-opacity="0.55"/>
    <rect x="150" y="34" width="30" height="30" fill="#6366f1" fill-opacity="0.55"/>
    <rect x="180" y="34" width="30" height="30" fill="#6366f1" fill-opacity="0.55"/>
    <rect x="210" y="34" width="30" height="30" fill="#6366f1" fill-opacity="0.55"/>
    <rect x="240" y="34" width="30" height="30" fill="#6366f1" fill-opacity="0.55"/>
  </g>
  <text x="65" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#3b82f6">3 parts = £15</text>
  <text x="195" y="82" text-anchor="middle" font-size="10" font-weight="700" fill="#6366f1">5 parts = £25</text>
  <text x="140" y="106" text-anchor="middle" font-size="9.5" fill="#475569">8 parts = £40, so 1 part = £40 ÷ 8 = £5</text>
  <text x="140" y="120" text-anchor="middle" font-size="9.5" font-weight="600" fill="#1e293b">3 × £5 = £15 and 5 × £5 = £25</text>
</svg>`;

// ── Percentage bar: 20% increase as ×1.2 ─────────────────────────────────────
DIAGRAMS["math-percent-bar"] = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Increase by 20% → multiply by 1.2</text>
  <rect x="20" y="34" width="200" height="26" fill="#3b82f6" fill-opacity="0.5" stroke="#1e293b" stroke-width="1"/>
  <text x="120" y="51" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">100% (original)</text>
  <rect x="220" y="34" width="40" height="26" fill="#6366f1" fill-opacity="0.5" stroke="#1e293b" stroke-width="1"/>
  <text x="240" y="51" text-anchor="middle" font-size="10" font-weight="700" fill="#1e293b">20%</text>
  <text x="140" y="82" text-anchor="middle" font-size="10" fill="#475569">100% + 20% = 120% of the original</text>
  <text x="140" y="102" text-anchor="middle" font-size="10" font-weight="700" fill="#3b82f6">new = original × 1.2  (decrease 20% → × 0.8)</text>
</svg>`;

// ── Expanding brackets with a grid: 3(x + 4) ─────────────────────────────────
DIAGRAMS["math-expand-grid"] = `<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Expanding 3(x + 4)</text>
  <g stroke="#1e293b" stroke-width="1.2" fill="none">
    <rect x="70" y="38" width="70" height="40"/>
    <rect x="140" y="38" width="70" height="40"/>
  </g>
  <text x="55" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6">3</text>
  <text x="105" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">x</text>
  <text x="175" y="32" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">+4</text>
  <text x="105" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">3x</text>
  <text x="175" y="63" text-anchor="middle" font-size="13" font-weight="700" fill="#6366f1">12</text>
  <text x="140" y="104" text-anchor="middle" font-size="12" font-weight="700" fill="#1e293b">3(x + 4) = 3x + 12</text>
</svg>`;

// ── Growing dot pattern for linear sequences (nth term 2n + 1) ────────────────
DIAGRAMS["math-sequence-pattern"] = `<svg viewBox="0 0 280 130" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Sequence 3, 5, 7, 9 …  (+2 each time)</text>
  <g fill="#3b82f6">
    <circle cx="28" cy="44" r="5"/><circle cx="28" cy="60" r="5"/><circle cx="40" cy="52" r="5"/>
  </g>
  <g fill="#3b82f6"><circle cx="86" cy="44" r="5"/><circle cx="86" cy="60" r="5"/><circle cx="98" cy="52" r="5"/><circle cx="110" cy="44" r="5"/><circle cx="110" cy="60" r="5"/></g>
  <g fill="#3b82f6"><circle cx="156" cy="44" r="5"/><circle cx="156" cy="60" r="5"/><circle cx="168" cy="52" r="5"/><circle cx="180" cy="44" r="5"/><circle cx="180" cy="60" r="5"/><circle cx="192" cy="44" r="5"/><circle cx="192" cy="60" r="5"/></g>
  <g fill="#6366f1"><circle cx="232" cy="44" r="5"/><circle cx="232" cy="60" r="5"/><circle cx="244" cy="52" r="5"/><circle cx="256" cy="44" r="5"/><circle cx="256" cy="60" r="5"/><circle cx="268" cy="44" r="5"/><circle cx="268" cy="60" r="5"/><circle cx="244" cy="36" r="5"/><circle cx="244" cy="76" r="5"/></g>
  <g font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">
    <text x="34" y="92">3</text><text x="98" y="92">5</text><text x="174" y="92">7</text><text x="250" y="92">9</text>
  </g>
  <text x="140" y="114" text-anchor="middle" font-size="10" font-weight="700" fill="#6366f1">difference 2 → nth term = 2n + 1</text>
</svg>`;

// ── Locus: fixed distance from a point and from a line ────────────────────────
DIAGRAMS["math-loci"] = `<svg viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Two basic loci</text>
  <circle cx="70" cy="78" r="38" fill="#3b82f6" fill-opacity="0.10" stroke="#3b82f6" stroke-width="1.6" stroke-dasharray="4,3"/>
  <circle cx="70" cy="78" r="3.5" fill="#1e293b"/>
  <text x="70" y="92" text-anchor="middle" font-size="9" fill="#1e293b">P</text>
  <text x="70" y="128" text-anchor="middle" font-size="9" fill="#64748b">distance r from a point</text>
  <line x1="170" y1="78" x2="250" y2="78" stroke="#1e293b" stroke-width="2"/>
  <line x1="170" y1="60" x2="250" y2="60" stroke="#6366f1" stroke-width="1.6" stroke-dasharray="4,3"/>
  <line x1="170" y1="96" x2="250" y2="96" stroke="#6366f1" stroke-width="1.6" stroke-dasharray="4,3"/>
  <text x="210" y="128" text-anchor="middle" font-size="9" fill="#64748b">distance d from a line</text>
</svg>`;

// ── Probability scale 0 to 1 ─────────────────────────────────────────────────
DIAGRAMS["math-prob-scale"] = `<svg viewBox="0 0 280 110" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">The Probability Scale</text>
  <line x1="24" y1="56" x2="256" y2="56" stroke="#1e293b" stroke-width="2"/>
  <g stroke="#1e293b" stroke-width="1.5">
    <line x1="24" y1="50" x2="24" y2="62"/><line x1="140" y1="50" x2="140" y2="62"/><line x1="256" y1="50" x2="256" y2="62"/>
  </g>
  <circle cx="198" cy="56" r="4" fill="#6366f1"/>
  <g font-size="10" font-weight="700" fill="#1e293b" text-anchor="middle">
    <text x="24" y="44">0</text><text x="140" y="44">½</text><text x="256" y="44">1</text>
  </g>
  <g font-size="8.5" fill="#64748b" text-anchor="middle">
    <text x="24" y="78">impossible</text><text x="140" y="78">even chance</text><text x="256" y="78">certain</text>
  </g>
  <text x="198" y="96" text-anchor="middle" font-size="9" fill="#6366f1">likely event</text>
</svg>`;

// ── Probability tree for two events ──────────────────────────────────────────
DIAGRAMS["math-prob-tree"] = `<svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Tree Diagram (two events)</text>
  <g stroke="#94a3b8" stroke-width="1.4" fill="none">
    <line x1="40" y1="80" x2="120" y2="44"/>
    <line x1="40" y1="80" x2="120" y2="116"/>
    <line x1="140" y1="44" x2="220" y2="26"/>
    <line x1="140" y1="44" x2="220" y2="62"/>
    <line x1="140" y1="116" x2="220" y2="98"/>
    <line x1="140" y1="116" x2="220" y2="134"/>
  </g>
  <g font-size="9" fill="#3b82f6" font-weight="700">
    <text x="72" y="54">0.7</text><text x="72" y="106">0.3</text>
    <text x="180" y="30">0.7</text><text x="180" y="60">0.3</text>
    <text x="180" y="102">0.7</text><text x="180" y="132">0.3</text>
  </g>
  <g font-size="10" font-weight="700" fill="#1e293b">
    <text x="126" y="48">W</text><text x="126" y="120">L</text>
    <text x="226" y="30">W</text><text x="226" y="66">L</text><text x="226" y="102">W</text><text x="226" y="138">L</text>
  </g>
  <text x="140" y="154" text-anchor="middle" font-size="9" fill="#64748b">multiply along branches: P(W,W) = 0.7 × 0.7 = 0.49</text>
</svg>`;

// ── Sample space grid for two dice / two spinners ────────────────────────────
DIAGRAMS["math-sample-space"] = `<svg viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg" font-family="system-ui,sans-serif">
  <text x="140" y="16" text-anchor="middle" font-size="11" font-weight="700" fill="#1e293b">Sample Space: two 1–3 spinners</text>
  <g stroke="#cbd5e1" stroke-width="1" fill="none">
    <rect x="80" y="30" width="150" height="100"/>
    <line x1="130" y1="30" x2="130" y2="130"/><line x1="180" y1="30" x2="180" y2="130"/>
    <line x1="80" y1="60" x2="230" y2="60"/><line x1="80" y1="90" x2="230" y2="90"/>
  </g>
  <g font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">
    <text x="105" y="24">1</text><text x="155" y="24">2</text><text x="205" y="24">3</text>
    <text x="68" y="49">1</text><text x="68" y="79">2</text><text x="68" y="109">3</text>
  </g>
  <g font-size="10" fill="#475569" text-anchor="middle">
    <text x="105" y="49">2</text><text x="155" y="49">3</text><text x="205" y="49">4</text>
    <text x="105" y="79">3</text><text x="155" y="79">4</text><text x="205" y="79">5</text>
    <text x="105" y="109">4</text><text x="155" y="109">5</text><text x="205" y="109">6</text>
  </g>
  <text x="140" y="144" text-anchor="middle" font-size="9" fill="#64748b">9 equally likely totals — P(total = 4) = 3/9 = ⅓</text>
</svg>`;
