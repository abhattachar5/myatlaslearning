// content/<year>/<subject>/islands/01.js — CANONICAL TEMPLATE (copy, don't load this).
// One file per island-group: its flashcards + questions + lessons together.

// Flashcards (push onto the shared array):
// FLASHCARDS.push(
//   { id:'fc-…', islandId:'m9i-01-1', front:'…', back:'…', difficulty:1, category:'…' },
// );

// Static question bank (merged into QUESTIONS, keyed by island id):
// Object.assign(QUESTIONS, {
//   'm9i-01-1': [ { q:'…', opts:['…','…','…','…'], c:0, e:'…explanation' } ],
// });

// Lesson HTML (merged into LESSONS, keyed by island id). Use <div class="lesson-diagram"
// data-diagram="key"></div> to drop in a diagram from diagrams/*.js:
// Object.assign(LESSONS, {
//   'm9i-01-1': `<h2>…</h2><p>…</p>`,
// });
