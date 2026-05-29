// english-y8-reuse.js — Reuse Year 7 English content for Year 8 islands whose skill
// is essentially identical (build once, reuse across years). English content is static
// (no generators), so we alias the QUESTIONS and LESSONS banks by reference and clone the
// flashcards with new ids onto the Year 8 island.
//
// MUST load AFTER the Year 7 english-content-*.js and english-lessons-*.js files AND after
// the fresh english-y8-*.js files (the !exists guards prevent overwriting fresh content).

(function () {
  // Year 8 island  ←  Year 7 source island (same skill)
  var MAP = {
    "e8i-01-1": "ei-01-2", // Word Roots & Etymology      ← Greek & Latin Roots
    "e8i-03-1": "ei-03-4", // Semicolons & Colons          ← Colons, Semicolons & Dashes
    "e8i-05-2": "ei-05-2", // Structural Analysis          ← Text Structure
    "e8i-06-1": "ei-06-2", // Persuasive Writing           ← Argumentative Writing
    "e8i-06-3": "ei-06-3", // Creative Writing Techniques  ← Creative Writing Techniques
    "e8i-06-5": "ei-06-4", // Editing, Proofreading & Redrafting ← Editing & Proofreading
    "e8i-07-1": "ei-07-3", // Analysing Unseen Poetry      ← Analysing a Poem
    "e8i-07-3": "ei-07-2", // Poetic Form & Structure      ← Form & Structure
    "e8i-08-2": "ei-08-3", // Dramatic Techniques          ← Dramatic Devices
    "e8i-08-4": "ei-08-4"  // Writing Analytical Essays    ← Writing About Shakespeare
  };

  var y8, src;

  // Alias static test-question banks and lesson HTML by reference.
  for (y8 in MAP) {
    src = MAP[y8];
    if (typeof QUESTIONS !== "undefined" && QUESTIONS[src] && !QUESTIONS[y8]) {
      QUESTIONS[y8] = QUESTIONS[src];
    }
    if (typeof LESSONS !== "undefined" && LESSONS[src] && !LESSONS[y8]) {
      LESSONS[y8] = LESSONS[src];
    }
  }

  // Clone flashcards onto the Year 8 island ids (cards carry islandId, so we copy).
  if (typeof FLASHCARDS !== "undefined") {
    var existing = {};
    FLASHCARDS.forEach(function (f) { existing[f.id] = true; });
    var alreadyHas = {};
    FLASHCARDS.forEach(function (f) { alreadyHas[f.islandId] = true; });

    var clones = [];
    Object.keys(MAP).forEach(function (target) {
      if (alreadyHas[target]) return; // a fresh file already supplied this island
      var source = MAP[target];
      FLASHCARDS.forEach(function (f) {
        if (f.islandId === source) {
          var c = {};
          for (var k in f) c[k] = f[k];
          c.islandId = target;
          c.id = "e8fc-r-" + f.id.replace(/^efc-?/, "");
          if (!existing[c.id]) { existing[c.id] = true; clones.push(c); }
        }
      });
    });
    clones.forEach(function (c) { FLASHCARDS.push(c); });
  }
})();
