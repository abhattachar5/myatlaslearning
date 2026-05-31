# Content template — the canonical layout

This `_TEMPLATE/` folder is the **reference shape** for a year's content. Year 8 follows
it exactly; new years (Y9–Y11) should copy it. (Year 7 is a documented exception — see
`content/y7/_base/README.md`.)

## To add a new year (e.g. Year 9)
1. Copy this `subject/` shape into `content/y9/` for each subject you have:
   `content/y9/math/`, `content/y9/english/`, `content/y9/science/`, …
2. Fill in the files (see the stubs in `subject/`).
3. Add a `y9: { … }` block in `core/manifest.js` (copy the Year 8 block as a model).
4. Add `'y9'` to `CONFIG.active` in `core/config.js`.
5. Commit & push. **No HTML page is ever edited.**

## Canonical subject layout
```
content/<year>/<subject>/
├── topics.js          topic tiles + island/curriculum definitions
├── islands/           one file per island-group: flashcards + questions + lessons
│   ├── 01.js
│   └── 02.js …
└── generators/        (optional) test generators — loaded only on test/exam pages
    └── 01.js
```

## Comprehension is a "subject"
Comprehension passages live at `content/<year>/comprehension/passages/01.js …` and
register `COMPREHENSION_PASSAGES_<YEAR>`.

## The contract
Content files just **populate the shared globals** declared in `core/globals.js`:
`CURRICULUM.push(...)`, `FLASHCARDS.push(...)`, `Object.assign(QUESTIONS, ...)`,
`Object.assign(LESSONS, ...)`, `DIAGRAMS["key"]=...`, `Object.assign(TEST_GENERATORS, ...)`.
Because the globals already exist, file order within a layer doesn't matter.
