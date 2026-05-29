// y8-topics.js — Year 8 Science / History / Geography were authored as flat islands
// (one island per topic) with no topicId and no topic-tile arrays. Maths & English Y8
// use the topic-tile + islands-with-topicId model. This shim brings the other three in
// line: it tags each Y8 science/history/geography island with a topicId and builds the
// SCIENCE_TOPICS_Y8 / HISTORY_TOPICS_Y8 / GEOGRAPHY_TOPICS_Y8 tile arrays.
//
// Topic ids use the prefixes test.html already expects: s8t- / h8t- / g8t-.
// One island per topic, so topic "s8t-01" contains island "s8-01".
//
// MUST load AFTER science-data-y8.js / history-data-y8.js / geography-data-y8.js.

(function () {
  if (typeof CURRICULUM === 'undefined') return;
  var PREFIX = { science: 's8t-', history: 'h8t-', geography: 'g8t-' };
  var out = { science: [], history: [], geography: [] };

  CURRICULUM.forEach(function (i) {
    if (i.yearGroup !== 'Year 8' || !PREFIX[i.subjectId]) return;
    if (!i.topicId) {
      // s8-01 -> s8t-01 , h8-03 -> h8t-03 , g8-10 -> g8t-10
      var num = String(i.id).replace(/^[a-z]+8-?/i, '');
      i.topicId = PREFIX[i.subjectId] + num;
    }
    out[i.subjectId].push({
      id: i.topicId,
      name: i.name,
      emoji: i.emoji || '📘',
      description: i.description || '',
      hasContent: true
    });
  });

  if (typeof window !== 'undefined') {
    if (!window.SCIENCE_TOPICS_Y8) window.SCIENCE_TOPICS_Y8 = out.science;
    if (!window.HISTORY_TOPICS_Y8) window.HISTORY_TOPICS_Y8 = out.history;
    if (!window.GEOGRAPHY_TOPICS_Y8) window.GEOGRAPHY_TOPICS_Y8 = out.geography;
  }
})();
