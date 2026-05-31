// core/globals.js — the single place every shared global is declared.
// Loaded FIRST on every page (before manifest/loader and all content).
//
// Why this exists: in the old layout these globals were declared scattered
// across data.js / lessons.js / science-diagrams.js, so load order was fragile.
// Declaring them here once means every content file can simply populate them
// (CURRICULUM.push(...), Object.assign(LESSONS, ...), DIAGRAMS["key"]=...) with
// no dependency on which other file loaded first.

// ── Shared content containers ───────────────────────────────────────────────
var CURRICULUM = (typeof CURRICULUM !== 'undefined' && CURRICULUM) || [];   // island/topic definitions
var FLASHCARDS = (typeof FLASHCARDS !== 'undefined' && FLASHCARDS) || [];   // flashcards
var QUESTIONS  = (typeof QUESTIONS  !== 'undefined' && QUESTIONS)  || {};   // static question banks, keyed by island id
var LESSONS    = (typeof LESSONS    !== 'undefined' && LESSONS)    || {};   // lesson HTML, keyed by island id
var DIAGRAMS   = (typeof DIAGRAMS   !== 'undefined' && DIAGRAMS)   || {};   // SVG diagrams, keyed by data-diagram name
// NOTE: TEST_GENERATORS is declared by engine/test-generator.js (which also owns
// the generation engine). It loads before any generators content file.

// ── Atlas namespace: forward-looking registration API + lifecycle ───────────
// New content can use Atlas.register({...}) instead of poking globals directly.
// Migrated (legacy) files keep using the globals above — both routes work.
var Atlas = (function () {
  var TOPICS = {};   // TOPICS[year][subject] = [ topic tiles ]
  var ready = false;

  function register(mod) {
    // mod: { year, subject, topics?, islands?, flashcards?, questions?, lessons?, generators? }
    if (mod.topics) {
      TOPICS[mod.year] = TOPICS[mod.year] || {};
      TOPICS[mod.year][mod.subject] = (TOPICS[mod.year][mod.subject] || []).concat(mod.topics);
    }
    if (mod.islands)   { for (var i = 0; i < mod.islands.length; i++) CURRICULUM.push(mod.islands[i]); }
    if (mod.flashcards){ for (var j = 0; j < mod.flashcards.length; j++) FLASHCARDS.push(mod.flashcards[j]); }
    if (mod.questions) { Object.assign(QUESTIONS, mod.questions); }
    if (mod.lessons)   { Object.assign(LESSONS, mod.lessons); }
    if (mod.generators && typeof TEST_GENERATORS !== 'undefined') { Object.assign(TEST_GENERATORS, mod.generators); }
  }

  return {
    register: register,
    topics: function (year, subject) { return (TOPICS[year] || {})[subject] || []; },
    allTopics: function () { return TOPICS; },
    isReady: function () { return ready; },
    _markReady: function () { ready = true; },
    // onReady runs the callback now if content already loaded, else on the event
    onReady: function (cb) {
      if (ready) { cb(); }
      else { document.addEventListener('atlas:ready', function () { cb(); }, { once: true }); }
    }
  };
})();
