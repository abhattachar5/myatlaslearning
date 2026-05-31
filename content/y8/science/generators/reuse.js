// science-y8-reuse.js — Reuse Year 7 science generators for matching Year 8 topics.
//
// Year 7 science already has generative TEST_GENERATORS (in science-test-generators-y7.js).
// Many Year 8 science topics are the same KS3 topics, so we alias the Year 8 island ids onto
// the existing Year 7 generator arrays — giving those topic tests infinite-variation,
// depth-tagged questions for free (build once, reuse across years). Year-8 islands with no
// close Year 7 equivalent (Breathing & Gas Exchange, Health & Disease, Acids & Alkalis,
// Materials & Earth Resources) fall back to their hand-written static QUESTIONS banks.
//
// MUST load AFTER test-generator.js AND science-test-generators-y7.js.

(function () {
  if (typeof TEST_GENERATORS === "undefined") return;
  var G = TEST_GENERATORS;

  function reuse(y8Id, srcIds) {
    var arr = [];
    for (var i = 0; i < srcIds.length; i++) {
      if (G[srcIds[i]] && G[srcIds[i]].length) arr = arr.concat(G[srcIds[i]]);
    }
    if (arr.length) G[y8Id] = arr;
  }

  reuse("s8-01", ["island-60"]);                         // Nutrition & Digestion
  reuse("s8-03", ["island-44"]);                         // Photosynthesis (& Respiration)
  reuse("s8-05", ["island-12"]);                         // Ecology & Biodiversity ← Ecosystems & Food Webs
  reuse("s8-06", ["island-62"]);                         // The Periodic Table
  reuse("s8-07", ["island-29"]);                         // Chemical Reactions ← Elements, Compounds & Reactions
  reuse("s8-09", ["island-63"]);                         // Metals & Reactivity ← Materials & Reactivity
  reuse("s8-11", ["island-30"]);                         // Energy Transfers ← Energy Stores & Transfers
  reuse("s8-12", ["island-39"]);                         // Electricity & Circuits ← Electricity & Magnetism
  reuse("s8-13", ["island-39"]);                         // Magnetism & Electromagnetism ← Electricity & Magnetism
  reuse("s8-14", ["island-14", "island-66", "island-61"]); // Forces & Motion (+ Distance–Time, Pressure)
  reuse("s8-15", ["island-15", "island-40"]);            // Waves & Sound ← Light & Sound + Waves & EM
  reuse("s8-16", ["island-15", "island-40"]);            // Light & Optics ← Light & Sound + Waves & EM
  reuse("s8-17", ["island-38"]);                         // Scientific Investigation ← Scientific Skills & Enquiry
})();
