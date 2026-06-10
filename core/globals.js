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

  // ── GCSE tier (Foundation / Higher) ───────────────────────────────────────
  // Maths only for now. Content that is examined on the HIGHER tier ONLY is
  // listed here in ONE place (rather than tagging every island object), so the
  // mapping is easy to audit and adjust. An island is Higher-only if its id is
  // in HIGHER_ONLY_ISLANDS or its topicId is in HIGHER_ONLY_TOPICS.
  // NB: profile.tier is the BILLING tier (free/paid) — the exam tier is a
  // separate field, profile.examTier ('foundation' | 'higher'), default 'higher'
  // so nothing is ever hidden until a student/parent opts into Foundation.
  var HIGHER_ONLY_TOPICS = {
    'm9t-01': 1,                                   // Surds (Year 9)
    'm11t-01': 1,                                  // Quadratic formula & completing the square
    'm11t-03': 1,                                  // Simultaneous (linear & quadratic)
    'm11t-04': 1,                                  // Algebraic fractions & manipulation
    'm11t-05': 1,                                  // Functions
    'm11t-06': 1,                                  // Sequences: quadratic nth term & geometric
    'm11t-07': 1,                                  // Circle theorems
    'm11t-08': 1,                                  // Sine & cosine rules
    'm11t-09': 1,                                  // Vectors
    'm11t-10': 1,                                  // Trig graphs & transformations
    'm11t-12': 1,                                  // Histograms & cumulative frequency
    'm11t-13': 1,                                  // Conditional probability & set notation
    'm11t-14': 1                                   // Gradients, areas under graphs & proof
  };
  var HIGHER_ONLY_ISLANDS = {
    // Year 10 — Higher-only islands inside otherwise mixed-tier topics
    'm10i-03-4': 1, 'm10i-03-5': 1,                // expanding 3 brackets; factorising ax²+bx+c
    'm10i-08-3': 1, 'm10i-08-4': 1,                // exact trig values; 3D trigonometry
    'm10i-07-3': 1,                                // 3D Pythagoras
    'm10i-10-3': 1,                                // area & volume scale factors
    'm10i-11-2': 1,                                // inverse proportion
    'm10i-13-2': 1,                                // stratified sampling
    'm10i-14-3': 1,                                // combined & conditional probability
    // Year 11 — Higher-only islands inside mixed-tier topics
    'm11i-02-2': 1, 'm11i-02-4': 1                 // cubic/reciprocal graphs; exponential graphs
  };

  function isHigherOnly(island) {
    if (!island) return false;
    var id = (typeof island === 'string') ? island : island.id;
    var tid = (typeof island === 'object') ? island.topicId : null;
    if (id && HIGHER_ONLY_ISLANDS[id]) return true;
    if (tid && HIGHER_ONLY_TOPICS[tid]) return true;
    // string form: also treat a topic id passed directly as Higher-only
    if (id && HIGHER_ONLY_TOPICS[id]) return true;
    return false;
  }
  function topicIsHigherOnly(topicId) { return !!HIGHER_ONLY_TOPICS[topicId]; }

  // Read the student's chosen exam tier from the active profile (default higher).
  function getExamTier() {
    try {
      var p = JSON.parse(localStorage.getItem('sm_active_profile') || 'null');
      return (p && p.examTier === 'foundation') ? 'foundation' : 'higher';
    } catch (e) { return 'higher'; }
  }
  function setExamTier(t) {
    try {
      var p = JSON.parse(localStorage.getItem('sm_active_profile') || 'null');
      if (!p) return;
      p.examTier = (t === 'foundation') ? 'foundation' : 'higher';
      localStorage.setItem('sm_active_profile', JSON.stringify(p));
    } catch (e) {}
  }
  // A Foundation student cannot access Higher-only islands; everyone else can.
  function tierAllows(island) {
    return getExamTier() === 'higher' || !isHigherOnly(island);
  }

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
    // ── GCSE tier helpers ─────────────────────────────────────────────────
    isHigherOnly: isHigherOnly,
    topicIsHigherOnly: topicIsHigherOnly,
    getExamTier: getExamTier,
    setExamTier: setExamTier,
    tierAllows: tierAllows,

    topics: function (year, subject) { return (TOPICS[year] || {})[subject] || []; },
    allTopics: function () { return TOPICS; },
    isReady: function () { return ready; },
    _markReady: function () { ready = true; },
    // onReady runs the callback now if content already loaded, else on the event
    onReady: function (cb) {
      if (ready) { cb(); }
      else { document.addEventListener('atlas:ready', function () { cb(); }, { once: true }); }
    },

    // ── Year-aware content resolution (driven by CONFIG.byYear) ───────────────
    // Every "which year's content?" decision routes through these, so adding a
    // year = add one CONFIG.byYear block; no page/planner edits needed.
    yearTopics: function (subject, year) {
      var y = (typeof CONFIG !== 'undefined' && CONFIG.byYear) ? CONFIG.byYear[year] : null;
      var f = y && y.topics && y.topics[subject];
      var arr = (typeof f === 'function') ? f() : null;
      return Array.isArray(arr) ? arr : [];
    },
    yearPassages: function (year) {
      var y = (typeof CONFIG !== 'undefined' && CONFIG.byYear) ? CONFIG.byYear[year] : null;
      var arr = (y && typeof y.passages === 'function') ? y.passages() : null;
      return Array.isArray(arr) ? arr : [];
    },
    // Flat list of every topic across all configured years × subjects.
    everyTopic: function () {
      var by = (typeof CONFIG !== 'undefined' && CONFIG.byYear) ? CONFIG.byYear : {};
      var subs = (typeof CONFIG !== 'undefined' && CONFIG.subjects) ? CONFIG.subjects : ['math', 'english', 'science', 'history', 'geography'];
      var self = this, out = [];
      Object.keys(by).forEach(function (yr) {
        subs.forEach(function (s) { out = out.concat(self.yearTopics(s, yr)); });
      });
      return out;
    },
    findTopic: function (topicId) {
      return this.everyTopic().find(function (t) { return t.id === topicId; }) || null;
    },
    isComprehensionTopic: function (topicId) {
      var by = (typeof CONFIG !== 'undefined' && CONFIG.byYear) ? CONFIG.byYear : {};
      return Object.keys(by).some(function (yr) { return by[yr].comprehensionTopicId === topicId; });
    },
    writingConfig: function (topicId) {
      var by = (typeof CONFIG !== 'undefined' && CONFIG.byYear) ? CONFIG.byYear : {};
      var yr = Object.keys(by).filter(function (y) { return by[y].writingTopicId === topicId; })[0];
      if (!yr) return null;
      var b = by[yr];
      return {
        year: yr,
        prompts: (typeof b.writingPrompts === 'function' ? b.writingPrompts() : []),
        wordRange: (Array.isArray(b.writingWordRange) ? b.writingWordRange : [200, 400])
      };
    },
    isWritingTopic: function (topicId) { return !!this.writingConfig(topicId); }
  };
})();
