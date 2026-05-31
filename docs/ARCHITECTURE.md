# Atlas 2 — Content Architecture

A re-architecture of the Atlas learning app so it scales cleanly to five year
groups (Y7–Y11) and stays easy to maintain **without any build step** — you edit
files and push to GitHub, Netlify auto-deploys.

## Goals
- One **standard file layout** for every year and subject.
- Adding a new year = drop files in a folder + edit **one list** — never touch the HTML pages.
- One diagram system (no Year 7 vs Year 8 split).
- No command line, no build tooling, no npm.

## Folder layout
```
atlas2/
├── *.html                      pages
├── styles.css
├── netlify/functions/*.mjs     AI marking etc.
├── core/                       the loading FRAMEWORK (year-agnostic, no app logic)
│   ├── globals.js              declares all shared globals + Atlas.register()
│   ├── config.js               which years/subjects exist + which are active
│   ├── manifest.js             the ONE list of content modules (edit to add a year)
│   └── loader.js               loads content in order, fires `atlas:ready`
├── engine/                     the APPLICATION logic
│   ├── app.js                  page controllers, auth, server sync
│   ├── planner.js              study-plan / Road Ahead
│   ├── test-generator.js       question generation (loaded only on test/exam pages)
│   └── auth-shim.js            GoTrue wrapper
├── diagrams/                   shared, cross-year SVG registries
│   ├── math.js  science.js  geography.js  y7-math.js
└── content/
    ├── _TEMPLATE/              canonical layout to copy when adding a year
    ├── y7/                     legacy layout (see y7/_base/README.md — intentional exception)
    ├── y8/                     canonical: <subject>/{ topics.js, islands/*.js, generators/*.js }
    └── y9/ y10/ y11/           README placeholder until built
```

## How loading works (the load contract)
`core/globals.js` declares the shared containers **once**:
`CURRICULUM`, `FLASHCARDS`, `QUESTIONS`, `LESSONS`, `DIAGRAMS`
(`TEST_GENERATORS` is declared by `test-generator.js`).

Content files just **populate** them — `CURRICULUM.push(...)`,
`Object.assign(LESSONS, ...)`, `DIAGRAMS["key"]=...`. Because the containers
already exist, file order within a layer no longer matters.

`core/loader.js` reads `MANIFEST.order` and injects every content script with
`async = false` (so they execute in order but download in parallel), then fires
a one-off `atlas:ready` event. Each page runs its logic inside
`Atlas.onReady(function(){ ... })`.

Every page therefore needs only four bootstrap tags:
```html
<script src="core/globals.js"></script>
<script src="core/config.js"></script>
<script src="core/manifest.js"></script>
<script src="core/loader.js"></script>
```

## Adding Year 9 later (the whole process)
1. Create `content/y9/<subject>/…` and drop in `topics.js`, `islands/*.js`, `generators/*.js`.
2. Add a `y9: { … }` block in `core/manifest.js`.
3. Add `'y9'` to `CONFIG.active` in `core/config.js`.
4. Commit & push. Done — **no HTML page is edited.**

## Decisions (ADRs)
- **ADR-0** Standard module contract via `Atlas.register()`; legacy files keep populating globals directly. Both routes coexist.
- **ADR-1** Manifest-driven runtime loading (not hand-maintained `<script>` tags, not a build).
- **ADR-2** **No build step** — pure static, GitHub → Netlify auto-deploy.
- **ADR-3** Role-based files (`topics` / `islands` / `generators`), folder per year+subject; split into numbered parts when large.
- **ADR-4** One diagram system. Year 7's inline SVGs are migrated mechanically into `diagrams/*.js` (same artwork) so both years share it.

## Deployment & data safety (read before cutover)

The re-architecture changes how content **files** are organised — it does **not**
touch the progress data model, its storage, or its keys. All data code is copied
byte-for-byte from the current site.

**What stays identical (so existing progress keeps working):**
- Blob store `getStore("user-progress")`, key `user_${userId}` (the 5 functions are unchanged).
- localStorage keys: `sm_progress`, `sm_active_profile`, `sm_comp_*`, `sm_test_results`, `sm_streak`, …
- Progress is keyed by **island ID** (`m8i-26-1`, …), and island IDs are unchanged because content was copied verbatim.

**What the server syncs** (payload built in `engine/app.js` → `save-progress.mjs` blob → restored in
`index.html` on login): profile, `xp`, `streak`, `lastStudy`, `progress`, `testResults`,
`revisionDone`, `comprehension`, `yearHistory`, `assignments`, `activeDays`, **`studyPlan`**, preferences.
The **study plan (`sm_study_plan`) is synced** so it follows the user across devices/browsers — it
pushes immediately on activation and on every progress change. (`merge-progress.mjs` preserves it
during the one-time legacy migration.)

**The one rule — deploy atlas2 to the *same* Netlify site, never a new one.**
Netlify Blobs, Identity (login) users, the custom domain, and `ANTHROPIC_API_KEY`
are all scoped to a **site**. A brand-new site would start with an **empty**
`user-progress` store and **no** users — everyone would appear to lose progress
and be unable to log in.

Safe cutover:
1. Keep the existing Netlify **site** (same site ID).
2. Point it at the new files — Netlify → *Site settings → Build & deploy → link to the new repo/branch*. Blobs, users, domain, and env vars all carry over.
3. Same domain ⇒ users' **localStorage carries over too** (it's per-domain, on their device).
4. Rollback is instant — Netlify keeps every deploy; restoring a previous one never rewrites blob data.

**Same site + same domain = zero data impact.**

## Migration status
- [x] Core architecture (globals, config, manifest, loader)
- [x] Year 8 Maths migrated as the reference vertical
- [x] Remaining Year 8 subjects (English, Science, History, Geography, Comprehension) + sci/hist/geo topic shim
      — verified: 180 islands, 40 comprehension passages, topic arrays built.
      NOTE: 14 Year 8 *reused* English islands stay empty until Year 7 is migrated (their content
      is aliased from Year 7 — cross-year reuse needs both years loaded, exactly as on the live site).
- [x] Year 7 migrated (legacy layout preserved via explicit `_order`; `data.js`/`lessons.js`
      container declarations converted to populate the globals). `CONFIG.active = ['y7','y8']`.
- [x] **Parity verified** — atlas2 (Y7+Y8) loads byte-for-byte identical totals to the live site:
      399 islands, 409 lessons, 1640 flashcards, 395 question banks, 278 generators, 40 passages.
      Reused English islands now populate; Y7 object-lessons + inline SVGs render.
- [ ] (Optional, deferred) Mechanically lift Y7's 76 inline SVGs into `diagrams/*.js` for full
      visual consistency — purely cosmetic; they render fine inline today.
- [x] All 10 HTML pages converted to the bootstrap (login/parent = auth-only; content pages = full
      4-tag bootstrap + auth-shim + app, +planner where used). `loader.js` uses document.write during
      parse so existing page init code is unchanged. Verified in-browser: login (gotrueAuth defined),
      dashboard (Year 8 plan + subjects), island lesson + diagram injection all render correctly.
- [ ] Push atlas2 to a Git repo and point the SAME Netlify site at it (data-safe — see above).
- [x] Tests opt-in: `MANIFEST.tests` (test-generator.js + generators) loads only when a page sets
      `window.ATLAS_NEEDS_TESTS = true` (test.html, exam.html). Other pages skip the ~756 KB engine.
- [x] Lifted all 76 Year 7 maths inline SVGs into `diagrams/y7-lessons.js`, recoloured to the
      shared palette, and replaced inline with `data-diagram` divs (now click-to-enlarge like Y8).
      Verified: no parse errors, parity intact (399/409/1640), all 76 refs resolve.
