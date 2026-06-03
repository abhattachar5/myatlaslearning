// core/manifest.js — declares every content module, grouped by year + subject.
//
// THIS is the only file you edit to add a year/subject. Drop the files into
// content/yN/<subject>/ and add a block below; make sure the year is in
// core/config.js (CONFIG.active). No HTML page ever changes.
//
// Two registration styles per year:
//   • Role-based (clean, e.g. Year 8): give each subject { topics, islands, passages, generators }.
//   • Explicit lists (legacy layout, e.g. Year 7): `_order` for content, `_tests` for generators.
//
// Output:
//   MANIFEST.order  — content loaded on EVERY page: diagrams + (topics → islands → passages).
//   MANIFEST.tests  — the test engine + generators, loaded ONLY on pages that set
//                     window.ATLAS_NEEDS_TESTS = true (test.html, exam.html). This keeps the
//                     big test-generator.js (~756 KB) off lesson/dashboard pages.

var MANIFEST = (function () {
  function nFiles(base, a, b) { var o = []; for (var i = a; i <= b; i++) o.push(base + i + '.js'); return o; }
  function pad2(n) { return (n < 10 ? '0' : '') + n; }
  function tFiles(base, a, b, extra) { var o = []; for (var i = a; i <= b; i++) o.push(base + 't' + pad2(i) + '.js'); return o.concat(extra || []); }

  var engine   = ['engine/test-generator.js'];                                // test-only (declares TEST_GENERATORS)
  var diagrams = ['diagrams/science.js', 'diagrams/math.js', 'diagrams/geography.js', 'diagrams/y7-math.js', 'diagrams/y9-math.js', 'diagrams/y10-math.js', 'diagrams/y11-math.js'];

  var content = {

    // ── YEAR 7 — legacy layout, explicit lists ──────────────────────────────
    y7: {
      _order: [
        'content/y7/_base/curriculum.js'                                   // islands (sci/hist/geo) + base flashcards/questions
      ].concat([
        'content/y7/math/topics.js'                                        // cleanOldMath + real maths islands + MATH_TOPICS
      ], nFiles('content/y7/math/islands/', 1, 7),                          // maths flashcards + questions
        ['content/y7/english/topics.js'],                                  // ENGLISH_TOPICS + english islands
        nFiles('content/y7/english/islands/', 1, 8),                        // english flashcards + questions
        ['content/y7/science/topics.js',                                   // topic tiles only (islands live in _base)
         'content/y7/history/topics.js',
         'content/y7/geography/topics.js',
         'content/y7/_base/lessons.js'],                                   // base lessons (sci/hist/geo)
        nFiles('content/y7/math/lessons/', 1, 7),                           // maths lessons (inline SVGs, render as-is)
        ['content/y7/english/lessons/1.js','content/y7/english/lessons/2.js','content/y7/english/lessons/3.js',
         'content/y7/english/lessons/5.js','content/y7/english/lessons/6.js','content/y7/english/lessons/7.js',
         'content/y7/english/lessons/8.js'],
        ['content/y7/english/writing.js']),                                  // WRITING_PROMPTS (writing-test.html)
      _tests: ['content/y7/science/generators.js']                         // TEST_GENERATORS["island-N"]
    },

    // ── YEAR 8 — role-based layout ──────────────────────────────────────────
    y8: {
      _shared: ['content/y8/_topics-shim.js'],
      math: {
        topics:     'content/y8/math/topics.js',
        islands:    tFiles('content/y8/math/islands/', 1, 30, [
                      'content/y8/math/islands/expansion-1.js',
                      'content/y8/math/islands/expansion-2.js'
                    ]),
        generators: ['content/y8/math/generators/main.js'].concat(nFiles('content/y8/math/generators/gen-', 1, 6))
      },
      english: {
        topics:  'content/y8/english/topics.js',
        islands: nFiles('content/y8/english/islands/', 1, 7).concat(['content/y8/english/islands/zz-reuse.js']),
        writing: ['content/y8/english/writing.js']                          // WRITING_PROMPTS_Y8
      },
      science:   { topics: 'content/y8/science/topics.js',   islands: nFiles('content/y8/science/islands/', 1, 3),
                   generators: ['content/y8/science/generators/reuse.js'] },
      history:   { topics: 'content/y8/history/topics.js',   islands: nFiles('content/y8/history/islands/', 1, 2) },
      geography: { topics: 'content/y8/geography/topics.js', islands: nFiles('content/y8/geography/islands/', 1, 2) },
      comprehension: { passages: nFiles('content/y8/comprehension/passages/', 1, 8) }
    },

    // ── YEAR 9 — role-based layout (authoring in progress) ──────────────────
    y9: {
      english: {
        topics:  'content/y9/english/topics.js',
        islands: ['content/y9/english/islands/t01.js','content/y9/english/islands/t02.js',
                  'content/y9/english/islands/t03.js','content/y9/english/islands/t05.js',
                  'content/y9/english/islands/t06.js','content/y9/english/islands/t07.js',
                  'content/y9/english/islands/t08.js'],   // t04 = comprehension (passages, tbc)
        writing: ['content/y9/english/writing.js']
      },
      math: {
        topics:     'content/y9/math/topics.js',
        islands:    tFiles('content/y9/math/islands/', 1, 14),      // t01–t14
        generators: ['content/y9/math/generators/gen-1.js',
                     'content/y9/math/generators/gen-2.js',
                     'content/y9/math/generators/gen-3.js',
                     'content/y9/math/generators/gen-4.js',
                     'content/y9/math/generators/gen-5.js',
                     'content/y9/math/generators/gen-6.js',
                     'content/y9/math/generators/gen-7.js',
                     'content/y9/math/generators/gen-8.js',
                     'content/y9/math/generators/gen-9.js',
                     'content/y9/math/generators/gen-10.js',
                     'content/y9/math/generators/gen-11.js',
                     'content/y9/math/generators/gen-12.js',
                     'content/y9/math/generators/gen-14.js']
      }
    },

    // ── YEAR 10 — role-based layout (authoring in progress) ─────────────────
    y10: {
      english: {
        topics:  'content/y10/english/topics.js',
        islands: ['content/y10/english/islands/t01.js','content/y10/english/islands/t02.js',
                  'content/y10/english/islands/t03.js','content/y10/english/islands/t05.js',
                  'content/y10/english/islands/t06.js','content/y10/english/islands/t07.js',
                  'content/y10/english/islands/t08.js'],
        writing: ['content/y10/english/writing.js']
      },
      math: {
        topics:     'content/y10/math/topics.js',
        islands:    tFiles('content/y10/math/islands/', 1, 14),      // t01–t14
        generators: ['content/y10/math/generators/gen-1.js',
                     'content/y10/math/generators/gen-2.js',
                     'content/y10/math/generators/gen-5.js',
                     'content/y10/math/generators/gen-6.js',
                     'content/y10/math/generators/gen-7.js',
                     'content/y10/math/generators/gen-8.js',
                     'content/y10/math/generators/gen-9.js',
                     'content/y10/math/generators/gen-10.js',
                     'content/y10/math/generators/gen-11.js',
                     'content/y10/math/generators/gen-12.js']
      }
    },

    // ── YEAR 11 — role-based layout (authoring in progress) ─────────────────
    y11: {
      math: {
        topics:     'content/y11/math/topics.js',
        islands:    tFiles('content/y11/math/islands/', 1, 14),      // t01–t14
        generators: ['content/y11/math/generators/gen-5.js',
                     'content/y11/math/generators/gen-6.js',
                     'content/y11/math/generators/gen-8.js',
                     'content/y11/math/generators/gen-9.js',
                     'content/y11/math/generators/gen-11.js',
                     'content/y11/math/generators/gen-12.js',
                     'content/y11/math/generators/gen-13.js']
      }
    }
  };

  // ── build the two ordered load lists ──────────────────────────────────────
  // Normal pages load only CONFIG.active years. The Content Studio (curator.html)
  // sets window.ATLAS_PREVIEW_ALL = true to also load DRAFT years (everything in
  // `content`), so unreleased content can be reviewed before going live. Student
  // pages never set the flag, so production is unaffected.
  var previewAll = (typeof window !== 'undefined' && window.ATLAS_PREVIEW_ALL);
  var active = previewAll ? Object.keys(content)
             : (typeof CONFIG !== 'undefined' ? CONFIG.active : Object.keys(content));
  function subjectsOf(y) { return Object.keys(content[y] || {}).filter(function (k) { return k.charAt(0) !== '_'; }); }

  function yearContent(y) {                                  // everything EXCEPT generators
    var blk = content[y] || {};
    if (blk._order) return blk._order;                       // explicit (legacy)
    var o = [];
    subjectsOf(y).forEach(function (s) { if (blk[s].topics) o.push(blk[s].topics); });
    (blk._shared || []).forEach(function (f) { o.push(f); });
    subjectsOf(y).forEach(function (s) { (blk[s].islands  || []).forEach(function (f) { o.push(f); }); });
    subjectsOf(y).forEach(function (s) { (blk[s].passages || []).forEach(function (f) { o.push(f); }); });
    subjectsOf(y).forEach(function (s) { (blk[s].writing  || []).forEach(function (f) { o.push(f); }); });
    return o;
  }
  function yearTests(y) {                                    // generators only
    var blk = content[y] || {};
    if (blk._tests) return blk._tests;                       // explicit (legacy)
    var o = [];
    subjectsOf(y).forEach(function (s) { (blk[s].generators || []).forEach(function (f) { o.push(f); }); });
    return o;
  }

  var order = [].concat(diagrams);                           // diagrams load on every page
  active.forEach(function (y) { order = order.concat(yearContent(y)); });

  var tests = [].concat(engine);                             // test engine first
  active.forEach(function (y) { tests = tests.concat(yearTests(y)); });

  return { order: order, tests: tests, content: content, diagrams: diagrams };
})();
