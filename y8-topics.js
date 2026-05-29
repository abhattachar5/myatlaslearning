// y8-topics.js — Topic wiring for Year 8 Science / History / Geography, whose islands
// are authored flat (no topicId). Maths & English Y8 already use topic→subtopic tiles.
//
//   • Science   — stays FLAT (one topic per unit) but each unit is tagged with its
//                 discipline (Biology / Physics / Chemistry / Working Scientifically)
//                 and a study-order rank so the Road Ahead runs Biology → Physics →
//                 Chemistry, and the dashboard shows a discipline label on each tile.
//   • History   — stays FLAT (one topic per period).
//   • Geography — GROUPED into Physical Geography / Human Geography / Geographical Skills,
//                 with the units as subtopics under each.
//
// MUST load AFTER science-data-y8.js / history-data-y8.js / geography-data-y8.js.

(function () {
  if (typeof CURRICULUM === 'undefined') return;

  function numOf(id) { return String(id).replace(/^[a-z]+8-?/i, ''); }

  // Science discipline + study-order rank (Biology → Physics → Chemistry → Working Sci)
  function sciInfo(id) {
    var n = parseInt(numOf(id), 10);   // numOf('s8-01') -> '01' -> 1
    if (n >= 1 && n <= 5)  return { discipline: 'Biology',  rank: 1 };
    if (n >= 11 && n <= 16) return { discipline: 'Physics',  rank: 2 };
    if (n >= 6 && n <= 10) return { discipline: 'Chemistry', rank: 3 };
    return { discipline: 'Working Scientifically', rank: 4 };
  }

  // Geography grouping: unit id → parent topic id
  var GEO_GROUP = {
    'g8-01': 'g8t-physical', 'g8-02': 'g8t-physical', 'g8-05': 'g8t-physical',
    'g8-06': 'g8t-physical', 'g8-07': 'g8t-physical', 'g8-09': 'g8t-physical',
    'g8-03': 'g8t-human', 'g8-04': 'g8t-human', 'g8-08': 'g8t-human',
    'g8-10': 'g8t-skills'
  };
  var GEO_TOPICS = [
    { id: 'g8t-physical', name: 'Physical Geography', emoji: '🏔️', hasContent: true,
      description: 'Coasts, glaciation, climate change, ecosystems and tropical rainforests, hot deserts, and natural hazards.' },
    { id: 'g8t-human', name: 'Human Geography', emoji: '🏙️', hasContent: true,
      description: 'Urbanisation, development and globalisation, and the Middle East.' },
    { id: 'g8t-skills', name: 'Geographical Skills', emoji: '🧭', hasContent: true,
      description: 'GIS, data collection and presentation, statistics and fieldwork.' }
  ];

  var sciIslands = [], hisTopics = [];

  CURRICULUM.forEach(function (i) {
    if (i.yearGroup !== 'Year 8') return;

    if (i.subjectId === 'science') {
      var info = sciInfo(i.id);
      i.discipline = info.discipline;
      i.disciplineRank = info.rank;
      if (!i.topicId) i.topicId = 's8t-' + numOf(i.id);
      sciIslands.push(i);

    } else if (i.subjectId === 'history') {
      if (!i.topicId) i.topicId = 'h8t-' + numOf(i.id);
      hisTopics.push({
        id: i.topicId, name: i.name, emoji: i.emoji || '📜', description: i.description || '', hasContent: true
      });

    } else if (i.subjectId === 'geography') {
      i.topicId = GEO_GROUP[i.id] || ('g8t-' + numOf(i.id));
    }
  });

  // ── Round-robin study order across disciplines (no long single-discipline runs) ──
  // Each "round" takes one unit from Biology, then Physics, then Chemistry; repeat until
  // those are exhausted, then append Working Scientifically. So the sequence alternates
  // B → P → C → B → P → C …, Biology leading. The planOrder index drives both the Road
  // Ahead (planner.js) and the dashboard tile order.
  var buckets = { Biology: [], Physics: [], Chemistry: [], 'Working Scientifically': [] };
  sciIslands.forEach(function (i) { (buckets[i.discipline] || buckets['Working Scientifically']).push(i); });
  Object.keys(buckets).forEach(function (d) {
    buckets[d].sort(function (a, b) { return parseInt(numOf(a.id), 10) - parseInt(numOf(b.id), 10); });
  });
  var sequence = [];
  var rr = ['Biology', 'Physics', 'Chemistry'];
  var maxLen = Math.max(buckets.Biology.length, buckets.Physics.length, buckets.Chemistry.length);
  for (var r = 0; r < maxLen; r++) {
    rr.forEach(function (d) { if (buckets[d][r]) sequence.push(buckets[d][r]); });
  }
  buckets['Working Scientifically'].forEach(function (i) { sequence.push(i); });
  sequence.forEach(function (i, idx) { i.planOrder = idx; });

  var sciTopics = sequence.map(function (i) {
    return {
      id: i.topicId, name: i.name, emoji: i.emoji || '🔬', description: i.description || '',
      hasContent: true, discipline: i.discipline, disciplineRank: i.disciplineRank, planOrder: i.planOrder
    };
  });

  if (typeof window !== 'undefined') {
    if (!window.SCIENCE_TOPICS_Y8) window.SCIENCE_TOPICS_Y8 = sciTopics;
    if (!window.HISTORY_TOPICS_Y8) window.HISTORY_TOPICS_Y8 = hisTopics;
    if (!window.GEOGRAPHY_TOPICS_Y8) window.GEOGRAPHY_TOPICS_Y8 = GEO_TOPICS;
  }
})();
