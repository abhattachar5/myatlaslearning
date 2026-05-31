// core/config.js — the single source of truth for which years/subjects exist.
// Flip a year from `years` into `active` to switch it on across the whole app.
var CONFIG = {
  years:    ['y7', 'y8', 'y9', 'y10', 'y11'],
  active:   ['y7', 'y8'],   // both years migrated; Y7 loads first so Y8 reuse resolves
  subjects: ['math', 'english', 'science', 'history', 'geography', 'comprehension'],

  // Human-friendly labels
  yearLabel:    { y7: 'Year 7', y8: 'Year 8', y9: 'Year 9', y10: 'Year 10', y11: 'Year 11' },
  subjectLabel: { math: 'Mathematics', english: 'English', science: 'Science',
                  history: 'History', geography: 'Geography', comprehension: 'Comprehension' },

  // ── Year-aware content sources (the single place pages/planner resolve "which
  // year's content?"). Adding a year = add a block here (+ its content + manifest).
  // Getters are LAZY — they resolve the (const) topic arrays at call-time, after
  // content has loaded. Keyed by the display year (matches user.year).
  byYear: {
    'Year 7': {
      topics: {
        math:      function () { return typeof MATH_TOPICS       !== 'undefined' ? MATH_TOPICS       : []; },
        english:   function () { return typeof ENGLISH_TOPICS    !== 'undefined' ? ENGLISH_TOPICS    : []; },
        science:   function () { return typeof SCIENCE_Y7_TOPICS !== 'undefined' ? SCIENCE_Y7_TOPICS : []; },
        history:   function () { return typeof HISTORY_TOPICS    !== 'undefined' ? HISTORY_TOPICS    : []; },
        geography: function () { return typeof GEOGRAPHY_TOPICS  !== 'undefined' ? GEOGRAPHY_TOPICS  : []; }
      },
      passages:             function () { return typeof COMPREHENSION_PASSAGES !== 'undefined' ? COMPREHENSION_PASSAGES : []; },
      comprehensionTopicId: 'et-04',
      writingTopicId:       'et-06',
      writingPrompts:       function () { return typeof WRITING_PROMPTS !== 'undefined' ? WRITING_PROMPTS : []; },
      writingWordRange:     [200, 400]
    },
    'Year 8': {
      topics: {
        math:      function () { return typeof MATH_TOPICS_Y8      !== 'undefined' ? MATH_TOPICS_Y8      : []; },
        english:   function () { return typeof ENGLISH_TOPICS_Y8   !== 'undefined' ? ENGLISH_TOPICS_Y8   : []; },
        science:   function () { return typeof SCIENCE_TOPICS_Y8   !== 'undefined' ? SCIENCE_TOPICS_Y8   : []; },
        history:   function () { return typeof HISTORY_TOPICS_Y8   !== 'undefined' ? HISTORY_TOPICS_Y8   : []; },
        geography: function () { return typeof GEOGRAPHY_TOPICS_Y8 !== 'undefined' ? GEOGRAPHY_TOPICS_Y8 : []; }
      },
      passages:             function () { return typeof COMPREHENSION_PASSAGES_Y8 !== 'undefined' ? COMPREHENSION_PASSAGES_Y8 : []; },
      comprehensionTopicId: 'e8t-04',
      writingTopicId:       'e8t-06',
      writingPrompts:       function () { return typeof WRITING_PROMPTS_Y8 !== 'undefined' ? WRITING_PROMPTS_Y8 : []; },
      writingWordRange:     [300, 500]
    },
    'Year 9': {
      // Pilot: maths only. Other subjects return [] until authored.
      topics: {
        math: function () { return typeof MATH_TOPICS_Y9 !== 'undefined' ? MATH_TOPICS_Y9 : []; }
      },
      passages:             function () { return typeof COMPREHENSION_PASSAGES_Y9 !== 'undefined' ? COMPREHENSION_PASSAGES_Y9 : []; },
      comprehensionTopicId: 'e9t-04',
      writingTopicId:       'e9t-06',
      writingPrompts:       function () { return typeof WRITING_PROMPTS_Y9 !== 'undefined' ? WRITING_PROMPTS_Y9 : []; },
      writingWordRange:     [350, 600]
    }
  }
};
