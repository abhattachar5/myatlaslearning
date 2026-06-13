// engine/adaptive.js — adaptive difficulty for topic tests.
//
// The app's only end-to-end difficulty signal is binary: each question is
// either 'medium' or 'greater-depth' (q.depth). Adaptive mode builds two pools
// from that signal and serves the next question from whichever band matches the
// student's running performance: a correct streak escalates to greater-depth,
// a wrong streak eases back to medium. Foundation-tier students stay on medium.
//
// Pure-ish: every function operates on an explicit state object passed in.
// Reuses globals from test-generator.js (_islandGenerators, _genDistinctQ) and
// globals.js (shuffle, shuffleOptions), so this file must load after both.
(function () {
  'use strict';

  var ESCALATE_AFTER = 2;   // consecutive correct to step UP to greater-depth
  var EASE_AFTER     = 2;   // consecutive wrong to step DOWN to medium

  // Build the two difficulty pools for a set of islands.
  // Returns { med:[q...], gd:[q...] } with options already shuffled.
  function buildPools(islands, opts) {
    opts = opts || {};
    var med = [], gd = [];
    for (var i = 0; i < islands.length; i++) {
      var island = islands[i];
      var gens = (typeof _islandGenerators === 'function') ? _islandGenerators(island.id) : null;
      if (!gens || !gens.length) continue;
      for (var g = 0; g < gens.length; g++) {
        var q = _genDistinctQ(gens[g]);
        q.depth = gens[g].depth;
        q.subtopic = island.name;
        q.islandId = island.id;
        if (typeof shuffleOptions === 'function') q = shuffleOptions(q);
        if (q.depth === 'greater-depth') gd.push(q); else med.push(q);
      }
    }
    if (typeof shuffle === 'function') { shuffle(med); shuffle(gd); }
    return { med: med, gd: gd };
  }

  // Fresh run state. tier: 'foundation' caps adaptation at the medium band.
  // target: how many questions the run will serve.
  function createState(pools, opts) {
    opts = opts || {};
    return {
      med: pools.med.slice(),
      gd: pools.gd.slice(),
      tier: opts.tier || 'higher',
      target: opts.target || (pools.med.length + pools.gd.length),
      band: 'medium',
      correctStreak: 0,
      wrongStreak: 0,
      peakBand: 'medium',   // hardest band reached (for the results summary)
      served: 0
    };
  }

  // Is the running student answer correct? Handles scalar and multi-select (array) c.
  function grade(q, answer) {
    if (!q) return false;
    if (Array.isArray(q.c)) {
      var u = Array.isArray(answer) ? answer.slice().sort(function (a, b) { return a - b; }) : [];
      var c = q.c.slice().sort(function (a, b) { return a - b; });
      return u.length === c.length && u.every(function (v, j) { return v === c[j]; });
    }
    return answer === q.c;
  }

  // Record the result of the question just answered and adjust the band.
  function record(state, isCorrect) {
    if (isCorrect) { state.correctStreak++; state.wrongStreak = 0; }
    else { state.wrongStreak++; state.correctStreak = 0; }

    if (state.band === 'medium'
        && state.correctStreak >= ESCALATE_AFTER
        && state.tier !== 'foundation'
        && state.gd.length > 0) {
      state.band = 'greater-depth';
      state.correctStreak = 0;
      state.peakBand = 'greater-depth';
    } else if (state.band === 'greater-depth'
        && state.wrongStreak >= EASE_AFTER) {
      state.band = 'medium';
      state.wrongStreak = 0;
    }
    return state.band;
  }

  // Pop the next question for the current band, falling back to the other pool
  // when the preferred one is exhausted. Returns null when both pools are empty.
  function next(state) {
    var prefer = state.band === 'greater-depth' ? state.gd : state.med;
    var other  = state.band === 'greater-depth' ? state.med : state.gd;
    var q = prefer.length ? prefer.shift() : (other.length ? other.shift() : null);
    if (q) state.served++;
    return q;
  }

  window.AtlasAdaptive = {
    buildPools: buildPools,
    createState: createState,
    grade: grade,
    record: record,
    next: next
  };
})();
