// planner.js — Study Plan engine: weekly checklist, progress tracking, export/import
//
// Provides: StudyPlanner global API
// Depends on: app.js (progress helpers), data.js + *-data.js (CURRICULUM)

(function () {
  'use strict';

  // ── Constants ──────────────────────────────────────────────────────────────
  var PLAN_KEY = 'sm_study_plan';

  var SUBJECT_COLORS = {
    math: '#3f6f00', english: '#ba7517', science: '#185fa5',
    history: '#6d28d9', geography: '#0891b2'
  };
  var SUBJECT_EMOJIS = {
    math: '📐', english: '📖', science: '🔬',
    history: '⚔️', geography: '🗺️'
  };
  var SUBJECT_NAMES = {
    math: 'Mathematics', english: 'English', science: 'Science',
    history: 'History', geography: 'Geography'
  };
  var SUBJECT_IDS = ['math', 'english', 'science', 'history', 'geography'];

  // ── Topological Sort (Kahn's algorithm, topic-clustered) ─────────────────
  // Returns islands in prerequisite-safe order within a subject.
  // When choosing the next ready island, same-topic islands are preferred
  // so that all sub-topics within a topic are grouped together rather than
  // interleaved with other topics.
  function topoSortIslands(islands) {
    var idSet = {};
    islands.forEach(function (i) { idSet[i.id] = true; });

    var adj = {};   // adjacency list: prereq → [dependents]
    var inDeg = {};
    var topicOf = {};
    islands.forEach(function (i) {
      adj[i.id] = [];
      inDeg[i.id] = 0;
      topicOf[i.id] = i.topicId || '_solo_' + i.id;
    });

    islands.forEach(function (i) {
      (i.prerequisites || []).forEach(function (preId) {
        if (idSet[preId]) {
          adj[preId].push(i.id);
          inDeg[i.id]++;
        }
      });
    });

    var ready = [];
    islands.forEach(function (i) { if (inDeg[i.id] === 0) ready.push(i.id); });

    var sorted = [];
    var lastTopic = null;

    while (ready.length > 0) {
      // Prefer an island from the same topic as the last one sorted
      var pick = -1;
      if (lastTopic !== null) {
        for (var r = 0; r < ready.length; r++) {
          if (topicOf[ready[r]] === lastTopic) { pick = r; break; }
        }
      }
      if (pick === -1) pick = 0;

      var id = ready.splice(pick, 1)[0];
      sorted.push(id);
      lastTopic = topicOf[id];

      (adj[id] || []).forEach(function (dep) {
        inDeg[dep]--;
        if (inDeg[dep] === 0) ready.push(dep);
      });
    }

    var idMap = {};
    islands.forEach(function (i) { idMap[i.id] = i; });
    return sorted.map(function (id) { return idMap[id]; }).filter(Boolean);
  }

  // ── Build ordered island queues per subject ────────────────────────────────
  // Recomputed from CURRICULUM each time (not stored) so new content is picked up.
  // Filters by the current user's year group.
  function buildSubjectQueues() {
    var user = getUser();
    var year = (user && user.year) ? user.year : 'Year 7';
    var queues = {};
    SUBJECT_IDS.forEach(function (sid) {
      var islands = CURRICULUM.filter(function (i) {
        return i.subjectId === sid && (i.yearGroup || 'Year 7') === year;
      });
      var sorted = topoSortIslands(islands);
      queues[sid] = sorted.map(function (i) { return i.id; });
    });
    return queues;
  }

  // ── Balanced island-to-week assignment ───────────────────────────────────
  // Math & English: distributed independently (enough for weekly coverage).
  // Science: every other week (odd weeks — W1, W3, W5 …).
  // History + Geography: both in even weeks (W2, W4, W6 …), packed so
  // the first 12 even weeks have both subjects, then History alone
  // until its 15 islands are placed.
  function getIslandWeekMap(plan) {
    if (!plan) plan = getStudyPlan();
    if (!plan) return {};

    var queues = buildSubjectQueues();
    var totalWeeks = getTotalStudyWeeks(plan);
    var weekMap = {};

    // Math & English: even spread independently
    ['math', 'english'].forEach(function (sid) {
      var queue = queues[sid];
      var n = queue.length;
      for (var i = 0; i < n; i++) {
        var w = Math.floor(i * totalWeeks / n) + 1;
        if (w > totalWeeks) w = totalWeeks;
        weekMap[queue[i]] = w;
      }
    });

    // Science: odd weeks (W1, W3, W5, …)
    var oddWeeks = [];
    for (var w = 1; w <= totalWeeks; w += 2) oddWeeks.push(w);

    var sciQ = queues.science;
    for (var i = 0; i < sciQ.length; i++) {
      weekMap[sciQ[i]] = oddWeeks[i];
    }

    // History + Geography: even weeks (W2, W4, W6, …)
    var evenWeeks = [];
    for (var w = 2; w <= totalWeeks; w += 2) evenWeeks.push(w);

    var hisQ = queues.history;
    for (var i = 0; i < hisQ.length; i++) {
      weekMap[hisQ[i]] = evenWeeks[i];
    }

    var geoQ = queues.geography;
    for (var i = 0; i < geoQ.length; i++) {
      weekMap[geoQ[i]] = evenWeeks[i];
    }

    return weekMap;
  }

  // ── Next task for an island ────────────────────────────────────────────────
  // lesson → flashcards → quiz → complete
  function getNextTask(islandId) {
    var p = getIslandProgress(islandId);
    var cards = typeof FLASHCARDS !== 'undefined'
      ? FLASHCARDS.filter(function (f) { return f.islandId === islandId; }) : [];
    var qs = typeof QUESTIONS !== 'undefined'
      ? (QUESTIONS[islandId] || []) : [];

    if (!p.lessonViewed) return 'lesson';

    if (cards.length > 0) {
      var learned = cards.filter(function (c) {
        return p.flashcardsLearned.indexOf(c.id) !== -1;
      }).length;
      if (learned < cards.length) return 'flashcards';
    }

    if (qs.length > 0) {
      var passMark = Math.ceil(qs.length * 0.7);
      if (p.quizBestScore < passMark) return 'quiz';
    }

    return 'complete';
  }

  // ── Plan CRUD ──────────────────────────────────────────────────────────────
  function getStudyPlan() {
    return JSON.parse(localStorage.getItem(PLAN_KEY) || 'null');
  }
  function saveStudyPlan(plan) {
    localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }
  function deleteStudyPlan() {
    localStorage.removeItem(PLAN_KEY);
  }

  // ── Create a new plan ──────────────────────────────────────────────────────
  function createStudyPlan() {
    var user = getUser();
    var now = new Date();
    var joinDate = (user && user.joinDate) ? new Date(user.joinDate) : now;
    var startDate = joinDate > now ? joinDate : now;

    // Target: May of the next calendar year from start
    var targetYear = startDate.getFullYear() + 1;

    var plan = {
      startDate: _dateStr(startDate),
      targetMonth: 'May ' + targetYear,
      createdAt: now.toISOString()
    };
    saveStudyPlan(plan);
    return plan;
  }

  // ── Week number relative to plan start ─────────────────────────────────────
  function getWeekNumber(date, startDateStr) {
    var start = new Date(startDateStr);
    var diff = date.getTime() - start.getTime();
    return Math.max(1, Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1);
  }

  function getCurrentWeekNumber() {
    var plan = getStudyPlan();
    if (!plan) return 1;
    return getWeekNumber(new Date(), plan.startDate);
  }

  // ── Total study weeks from start to target ─────────────────────────────────
  function getTotalStudyWeeks(plan) {
    var start = new Date(plan.startDate);
    var monthNames = ['January','February','March','April','May','June',
                      'July','August','September','October','November','December'];
    var parts = plan.targetMonth.split(' ');
    var targetMonthIdx = monthNames.indexOf(parts[0]);
    if (targetMonthIdx === -1) targetMonthIdx = 4; // default May
    var targetYear = parseInt(parts[1], 10);
    var end = new Date(targetYear, targetMonthIdx + 1, 0); // last day of target month

    var diffMs = end.getTime() - start.getTime();
    var weeks = Math.ceil(diffMs / (7 * 24 * 60 * 60 * 1000));
    return Math.max(1, weeks);
  }

  // ── Look up topic name for an island ───────────────────────────────────────
  function getAllTopics() {
    var topics = [];
    if (typeof MATH_TOPICS !== 'undefined') topics = topics.concat(MATH_TOPICS);
    if (typeof MATH_TOPICS_Y8 !== 'undefined') topics = topics.concat(MATH_TOPICS_Y8);
    if (typeof ENGLISH_TOPICS !== 'undefined') topics = topics.concat(ENGLISH_TOPICS);
    if (typeof ENGLISH_TOPICS_Y8 !== 'undefined') topics = topics.concat(ENGLISH_TOPICS_Y8);
    if (typeof SCIENCE_Y7_TOPICS !== 'undefined') topics = topics.concat(SCIENCE_Y7_TOPICS);
    if (typeof HISTORY_TOPICS !== 'undefined') topics = topics.concat(HISTORY_TOPICS);
    if (typeof HISTORY_TOPICS_Y8 !== 'undefined') topics = topics.concat(HISTORY_TOPICS_Y8);
    if (typeof GEOGRAPHY_TOPICS !== 'undefined') topics = topics.concat(GEOGRAPHY_TOPICS);
    if (typeof GEOGRAPHY_TOPICS_Y8 !== 'undefined') topics = topics.concat(GEOGRAPHY_TOPICS_Y8);
    return topics;
  }

  // ── Topic gating helpers ──────────────────────────────────────────────────
  // Determines which topic is the "current" topic per subject and whether
  // it's fully complete (all islands mastered + topic test passed ≥70%).
  var TEST_RESULTS_KEY = 'sm_test_results';
  var REVISION_KEY = 'sm_revision_done';
  var GATE_PASS_MARK = 0.7; // 70%

  function getTestResults() {
    try { return JSON.parse(localStorage.getItem(TEST_RESULTS_KEY) || '{}'); } catch(e) { return {}; }
  }

  function getTopicTestBest(topicId) {
    var all = getTestResults();
    var attempts = all[topicId];
    if (!attempts || !attempts.length) return null;
    var best = 0;
    for (var i = 0; i < attempts.length; i++) {
      if (attempts[i].pct > best) best = attempts[i].pct;
    }
    return best;
  }

  // Returns per-subtopic scores from the most recent test attempt
  function getTopicTestSubtopicScores(topicId) {
    var all = getTestResults();
    var attempts = all[topicId];
    if (!attempts || !attempts.length) return null;
    var latest = attempts[attempts.length - 1];
    return latest.subtopicScores || null;
  }

  function isTopicTestPassed(topicId) {
    var best = getTopicTestBest(topicId);
    return best !== null && best >= GATE_PASS_MARK * 100;
  }

  function getRevisionDone() {
    try { return JSON.parse(localStorage.getItem(REVISION_KEY) || '{}'); } catch(e) { return {}; }
  }

  // Returns ordered list of topics for a subject based on island queue ordering
  function getSubjectTopicOrder(sid) {
    var queue = buildSubjectQueues()[sid];
    var seen = {};
    var order = [];
    for (var i = 0; i < queue.length; i++) {
      var island = CURRICULUM.find(function (c) { return c.id === queue[i]; });
      if (!island) continue;
      var tid = island.topicId || '_solo_' + island.id;
      if (!seen[tid]) {
        seen[tid] = true;
        order.push(tid);
      }
    }
    return order;
  }

  // For a subject, find the first topic that isn't fully complete
  // (all islands mastered AND topic test passed).
  // Returns { topicId, allMastered, testPassed, isGated, gateMessage,
  //           weakSubtopics, revisionDone }
  function getSubjectGateStatus(sid) {
    var topicOrder = getSubjectTopicOrder(sid);
    var allTopics = getAllTopics();
    var topicNameMap = {};
    allTopics.forEach(function (t) { topicNameMap[t.id] = t.name; });

    for (var t = 0; t < topicOrder.length; t++) {
      var tid = topicOrder[t];
      var topicIslands = CURRICULUM.filter(function (c) { return c.topicId === tid; });
      var allMastered = topicIslands.length > 0 && topicIslands.every(function (c) {
        return getIslandStatus(c.id) === 4;
      });

      if (!allMastered) {
        // This topic has incomplete islands — not gated yet (still working on it)
        return { topicId: tid, allMastered: false, testPassed: false,
                 isGated: false, gateMessage: null, weakSubtopics: null, revisionDone: false };
      }

      // All islands mastered — check topic test
      var testPassed = isTopicTestPassed(tid);
      if (testPassed) {
        // This topic is fully complete — move to next
        continue;
      }

      // All islands done but test not passed — this is the gate
      var topicName = topicNameMap[tid] || tid;
      var nextTid = topicOrder[t + 1];
      var nextName = nextTid ? (topicNameMap[nextTid] || nextTid) : null;
      var bestScore = getTopicTestBest(tid);

      // Check for weak subtopics needing revision (from failed test)
      var weakSubtopics = [];
      var revDone = getRevisionDone();
      var allRevisionDone = true;

      if (bestScore !== null && bestScore < GATE_PASS_MARK * 100) {
        // Failed test — identify weak subtopics
        var subtopicScores = getTopicTestSubtopicScores(tid);
        if (subtopicScores) {
          for (var stId in subtopicScores) {
            if (subtopicScores.hasOwnProperty(stId)) {
              var st = subtopicScores[stId];
              if (st.total > 0 && (st.score / st.total) < GATE_PASS_MARK) {
                var stIsland = CURRICULUM.find(function (c) { return c.id === stId; });
                var revised = revDone[tid] && revDone[tid][stId];
                if (!revised) allRevisionDone = false;
                weakSubtopics.push({
                  islandId: stId,
                  islandName: stIsland ? stIsland.name : stId,
                  score: st.score,
                  total: st.total,
                  revised: !!revised
                });
              }
            }
          }
        }
        if (weakSubtopics.length === 0) allRevisionDone = true; // no weak subtopics identified
      } else {
        allRevisionDone = true; // no failed test yet
      }

      var gateMsg = bestScore === null
        ? 'Take the ' + topicName + ' Test' + (nextName ? ' to unlock ' + nextName : '')
        : 'Retake the ' + topicName + ' Test (best: ' + bestScore + '%)' + (nextName ? ' to unlock ' + nextName : '');

      return {
        topicId: tid,
        topicName: topicName,
        nextTopicName: nextName,
        allMastered: true,
        testPassed: false,
        bestScore: bestScore,
        isGated: true,
        gateMessage: gateMsg,
        weakSubtopics: weakSubtopics.length > 0 ? weakSubtopics : null,
        revisionDone: allRevisionDone
      };
    }

    // All topics complete
    return { topicId: null, allMastered: true, testPassed: true,
             isGated: false, gateMessage: null, weakSubtopics: null, revisionDone: true };
  }

  // ── Weekly comprehension assignment ─────────────────────────────────────
  // Odd weeks → fiction, even weeks → non-fiction, 40 passages over 40 weeks
  function getWeeklyComprehension(weekNumber) {
    if (typeof COMPREHENSION_PASSAGES === 'undefined') return null;
    if (weekNumber > 40) return null;

    var fiction = [];
    var nonfiction = [];
    COMPREHENSION_PASSAGES.forEach(function (p) {
      if (p.type === 'fiction') fiction.push(p);
      else nonfiction.push(p);
    });

    var passage;
    if (weekNumber % 2 === 1) {
      // Odd week → fiction
      var fi = Math.floor((weekNumber - 1) / 2);
      passage = fi < fiction.length ? fiction[fi] : null;
    } else {
      // Even week → non-fiction
      var ni = Math.floor((weekNumber - 2) / 2);
      passage = ni < nonfiction.length ? nonfiction[ni] : null;
    }

    if (!passage) return null;

    // Check completion
    var compProgress = null;
    try { compProgress = JSON.parse(localStorage.getItem('sm_comp_' + passage.id)) || null; } catch(e) {}

    return {
      passageId: passage.id,
      title: passage.title,
      type: passage.type,
      typeLabel: passage.type === 'fiction' ? 'Fiction' : 'Non-Fiction',
      complete: compProgress !== null,
      score: compProgress ? compProgress.score : null,
      total: compProgress ? compProgress.total : null
    };
  }

  // ── Weekly checklist ───────────────────────────────────────────────────────
  // Returns structured data for the current week's island list, grouped by
  // subject → topic → islands with 3-step progress dots.
  // Includes topic gating: if a subject is gated (all islands done but test
  // not passed), this week's new islands for that subject are held back and
  // replaced with the gate/revision status.
  function getWeekChecklist(weekNumber) {
    var plan = getStudyPlan();
    if (!plan) return null;

    var totalWeeks = getTotalStudyWeeks(plan);
    var weekMap = getIslandWeekMap(plan);

    if (weekNumber < 1) weekNumber = 1;
    if (weekNumber > totalWeeks) weekNumber = totalWeeks;

    // Build topic lookup
    var allTopics = getAllTopics();
    var topicMap = {};
    allTopics.forEach(function (t) { topicMap[t.id] = t; });

    // Compute gate status for each subject
    var gateStatuses = {};
    SUBJECT_IDS.forEach(function (sid) {
      gateStatuses[sid] = getSubjectGateStatus(sid);
    });

    var subjects = [];
    var totalItems = 0;
    var doneItems = 0;

    SUBJECT_IDS.forEach(function (sid) {
      var queue = buildSubjectQueues()[sid];
      var n = queue.length;
      if (n === 0) return;

      var gate = gateStatuses[sid];

      // Find islands assigned to this week for this subject
      var weekIslandIds = [];
      for (var i = 0; i < n; i++) {
        if (weekMap[queue[i]] === weekNumber) weekIslandIds.push(queue[i]);
      }

      // If gated, check if this week's islands belong to a LATER topic
      var gatedIslands = [];
      var ungatedIslands = [];

      if (gate.isGated && weekIslandIds.length > 0) {
        var subjectTopicOrder = getSubjectTopicOrder(sid);
        var gateIdx = subjectTopicOrder.indexOf(gate.topicId);
        weekIslandIds.forEach(function (islandId) {
          var island = CURRICULUM.find(function (c) { return c.id === islandId; });
          if (!island) return;
          var islandTopic = island.topicId || '_solo_' + island.id;
          var islandIdx = subjectTopicOrder.indexOf(islandTopic);
          if (islandIdx > gateIdx) {
            gatedIslands.push(islandId);
          } else {
            ungatedIslands.push(islandId);
          }
        });
      } else {
        ungatedIslands = weekIslandIds;
      }

      // Build the island items for ungated islands
      var topicGroups = {};
      var topicOrder = [];

      ungatedIslands.forEach(function (islandId) {
        var island = CURRICULUM.find(function (c) { return c.id === islandId; });
        if (!island) return;

        var topicId = island.topicId || '_none_' + islandId;
        if (!topicGroups[topicId]) {
          var topic = topicMap[topicId];
          topicGroups[topicId] = {
            topicId: topicId,
            topicName: topic ? topic.name : island.name,
            islands: []
          };
          topicOrder.push(topicId);
        }

        var status = getIslandStatus(islandId);
        var progress = calcIslandProgress(islandId);
        var dots = Math.floor(progress / 33);
        if (dots > 3) dots = 3;
        var nextTask = getNextTask(islandId);
        var tab = nextTask === 'lesson' ? 'lesson'
                : nextTask === 'flashcards' ? 'flashcards' : 'practice';
        var complete = status === 4;

        if (complete) doneItems++;
        totalItems++;

        topicGroups[topicId].islands.push({
          islandId: islandId,
          islandName: island.name,
          dots: dots,
          complete: complete,
          nextTask: nextTask,
          nextTab: tab
        });
      });

      // Count gated islands as items too (but not done)
      if (gatedIslands.length > 0) {
        totalItems += gatedIslands.length;
      }

      // Only add subject if it has content this week
      if (weekIslandIds.length === 0 && (!gate.isGated)) return;
      if (weekIslandIds.length === 0) return;

      subjects.push({
        subjectId: sid,
        subjectName: SUBJECT_NAMES[sid],
        subjectEmoji: SUBJECT_EMOJIS[sid],
        subjectColor: SUBJECT_COLORS[sid],
        topics: topicOrder.map(function (tid) { return topicGroups[tid]; }),
        islandCount: ungatedIslands.length,
        // Gating info
        gate: gate.isGated ? gate : null,
        gatedCount: gatedIslands.length
      });
    });

    // Weekly comprehension
    var comprehension = getWeeklyComprehension(weekNumber);
    if (comprehension) {
      totalItems++;
      if (comprehension.complete) doneItems++;
    }

    return {
      weekNumber: weekNumber,
      totalWeeks: totalWeeks,
      subjects: subjects,
      totalItems: totalItems,
      doneItems: doneItems,
      allDone: totalItems > 0 && doneItems === totalItems,
      comprehension: comprehension
    };
  }

  // ── Topic-level progress summary ─────────────────────────────────────────
  // Groups curriculum islands by topicId per subject.
  // A topic counts as complete when ALL its islands are mastered (status 4).
  function getTopicProgress() {
    var user = getUser();
    var year = (user && user.year) ? user.year : 'Year 7';
    var allTopics = getAllTopics();
    var topicNameMap = {};
    allTopics.forEach(function (t) { topicNameMap[t.id] = t.name; });

    var subjects = {};
    var grandTotal = 0;
    var grandDone = 0;

    SUBJECT_IDS.forEach(function (sid) {
      var islands = CURRICULUM.filter(function (i) {
        return i.subjectId === sid && (i.yearGroup || 'Year 7') === year;
      });

      // Group islands by topicId
      var topicMap = {};
      islands.forEach(function (i) {
        var tid = i.topicId || '_solo_' + i.id;
        if (!topicMap[tid]) topicMap[tid] = [];
        topicMap[tid].push(i.id);
      });

      var topicIds = Object.keys(topicMap);
      var completed = 0;
      topicIds.forEach(function (tid) {
        var allMastered = topicMap[tid].every(function (islandId) {
          return getIslandStatus(islandId) === 4;
        });
        if (allMastered) completed++;
      });

      subjects[sid] = {
        total: topicIds.length,
        completed: completed,
        percent: topicIds.length > 0 ? Math.round((completed / topicIds.length) * 100) : 0,
        name: SUBJECT_NAMES[sid],
        emoji: SUBJECT_EMOJIS[sid],
        color: SUBJECT_COLORS[sid]
      };
      grandTotal += topicIds.length;
      grandDone += completed;
    });

    return {
      subjects: subjects,
      total: grandTotal,
      completed: grandDone,
      percent: grandTotal > 0 ? Math.round((grandDone / grandTotal) * 100) : 0
    };
  }

  // ── Subject-based roadmap ────────────────────────────────────────────────
  // Returns the full plan organized by subject → topic → islands with week
  // numbers. This is the view a parent uses to see the complete journey.
  function getSubjectRoadmap() {
    var plan = getStudyPlan();
    if (!plan) return null;

    var queues = buildSubjectQueues();
    var totalWeeks = getTotalStudyWeeks(plan);
    var weekMap = getIslandWeekMap(plan);
    var allTopics = getAllTopics();
    var topicNameMap = {};
    allTopics.forEach(function (t) { topicNameMap[t.id] = t; });

    var currentWeek = getCurrentWeekNumber();
    var subjects = [];

    SUBJECT_IDS.forEach(function (sid) {
      var queue = queues[sid];
      var n = queue.length;
      if (n === 0) return;

      var topicGroups = {};
      var topicOrder = [];

      for (var i = 0; i < n; i++) {
        var islandId = queue[i];
        var w = weekMap[islandId] || 1;
        var island = CURRICULUM.find(function (c) { return c.id === islandId; });
        if (!island) continue;

        var topicId = island.topicId || '_solo_' + islandId;
        if (!topicGroups[topicId]) {
          var topic = topicNameMap[topicId];
          topicGroups[topicId] = {
            topicId: topicId,
            topicName: topic ? topic.name : island.name,
            islands: [],
            weekStart: w,
            weekEnd: w
          };
          topicOrder.push(topicId);
        }

        var grp = topicGroups[topicId];
        if (w < grp.weekStart) grp.weekStart = w;
        if (w > grp.weekEnd) grp.weekEnd = w;

        grp.islands.push({
          id: islandId,
          name: island.name,
          week: w,
          mastered: getIslandStatus(islandId) === 4
        });
      }

      subjects.push({
        subjectId: sid,
        name: SUBJECT_NAMES[sid],
        emoji: SUBJECT_EMOJIS[sid],
        color: SUBJECT_COLORS[sid],
        topics: topicOrder.map(function (tid) { return topicGroups[tid]; })
      });
    });

    return { subjects: subjects, totalWeeks: totalWeeks, currentWeek: currentWeek };
  }

  // ── Checkpoint splits for large topics ──────────────────────────────
  // Topics with ≤5 islands: single final test.
  // Larger topics: chunks of ~4-5 islands, each gets a checkpoint; final
  // chunk gets the full topic test.  Returns array of cumulative counts,
  // e.g. [5, 9] means checkpoint after island 5, topic test after island 9.
  function _checkpointSplits(numIslands) {
    if (numIslands <= 5) return [numIslands];
    var numChunks = Math.ceil(numIslands / 5);
    var chunkSize = Math.ceil(numIslands / numChunks);
    var splits = [];
    for (var i = chunkSize; i < numIslands; i += chunkSize) {
      splits.push(i);
    }
    splits.push(numIslands);
    return splits;
  }

  // ── Dynamic weekly grid: weeks as rows, subjects as columns ──────────
  // Completed islands stay at their original scheduled week (with ✓).
  // Remaining islands are projected from *currentWeek* forward, so a
  // subject that falls behind automatically shifts its future content.
  // Post-gate islands are tagged as locked (🔒).
  // Topic-test milestones appear at the end of each topic's span.
  // Weekly comprehension passages appear in the English column.
  function getWeeklyGrid() {
    var plan = getStudyPlan();
    if (!plan) return null;

    var queues = buildSubjectQueues();
    var totalWeeks = getTotalStudyWeeks(plan);
    var originalWeekMap = getIslandWeekMap(plan);
    var currentWeek = getCurrentWeekNumber();

    var allTopics = getAllTopics();
    var topicNameMap = {};
    allTopics.forEach(function (t) { topicNameMap[t.id] = t.name; });

    // Effective week per island (for placing test milestones)
    var effectiveWeek = {};

    // Initialise empty grid: week → subject → []
    var weekData = {};
    for (var w = 1; w <= totalWeeks; w++) {
      weekData[w] = {};
      SUBJECT_IDS.forEach(function (sid) { weekData[w][sid] = []; });
    }

    SUBJECT_IDS.forEach(function (sid) {
      var queue = queues[sid];
      if (queue.length === 0) return;

      var gate = getSubjectGateStatus(sid);
      var topicOrder = getSubjectTopicOrder(sid);
      var gateIdx = gate.isGated ? topicOrder.indexOf(gate.topicId) : -1;

      // Split into mastered vs remaining (keep queue order)
      var completed = [];
      var remaining = [];
      queue.forEach(function (islandId) {
        if (getIslandStatus(islandId) === 4) completed.push(islandId);
        else remaining.push(islandId);
      });

      // ── Completed islands: original week, marked mastered ──────────
      completed.forEach(function (islandId) {
        var wk = originalWeekMap[islandId] || 1;
        effectiveWeek[islandId] = wk;
        var island = CURRICULUM.find(function (c) { return c.id === islandId; });
        if (!island) return;
        var tid = island.topicId || '_solo_' + island.id;
        weekData[wk][sid].push({
          type: 'island', topic: topicNameMap[tid] || island.name,
          island: island.name, islandId: islandId,
          mastered: true, locked: false
        });
      });

      // ── Remaining islands: project from currentWeek forward ────────
      if (remaining.length > 0) {
        // Available weeks for this subject from currentWeek onward
        var slots = [];
        for (var w = currentWeek; w <= totalWeeks; w++) {
          if (sid === 'science' && w % 2 === 0) continue;       // odd weeks
          if ((sid === 'history' || sid === 'geography') && w % 2 === 1) continue; // even weeks
          slots.push(w);
        }
        if (slots.length === 0) slots = [totalWeeks]; // past end — pack into last week

        remaining.forEach(function (islandId, i) {
          var si = Math.floor(i * slots.length / remaining.length);
          if (si >= slots.length) si = slots.length - 1;
          var wk = slots[si];
          effectiveWeek[islandId] = wk;

          var island = CURRICULUM.find(function (c) { return c.id === islandId; });
          if (!island) return;
          var tid = island.topicId || '_solo_' + island.id;
          var tidIdx = topicOrder.indexOf(tid);
          var locked = gate.isGated && tidIdx > gateIdx;

          weekData[wk][sid].push({
            type: 'island', topic: topicNameMap[tid] || island.name,
            island: island.name, islandId: islandId,
            mastered: false, locked: locked
          });
        });
      }

      // ── Topic-test milestones + checkpoints for large topics ────
      topicOrder.forEach(function (tid) {
        if (tid === 'et-04') return;                    // comprehension — no test
        if (tid.indexOf('_solo_') === 0) return;        // virtual solo topic

        var topicIslands = queue.filter(function (id) {
          var c = CURRICULUM.find(function (x) { return x.id === id; });
          return c && c.topicId === tid;
        });
        if (topicIslands.length === 0) return;

        var tidIdx = topicOrder.indexOf(tid);
        var locked = gate.isGated && tidIdx > gateIdx;
        var splits = _checkpointSplits(topicIslands.length);

        for (var s = 0; s < splits.length; s++) {
          var endIdx = splits[s] - 1;
          var lastId = topicIslands[endIdx];
          var testWk = effectiveWeek[lastId] || totalWeeks;
          var isFinal = (s === splits.length - 1);

          if (isFinal) {
            // Full topic test (gating)
            weekData[testWk][sid].push({
              type: 'test', topicId: tid,
              topicName: topicNameMap[tid] || tid,
              passed: isTopicTestPassed(tid), locked: locked
            });
          } else {
            // Non-gating checkpoint covering first N islands
            var coveredIds = topicIslands.slice(0, splits[s]);
            weekData[testWk][sid].push({
              type: 'checkpoint', topicId: tid,
              topicName: topicNameMap[tid] || tid,
              checkpointNum: s + 1,
              coveredIslandIds: coveredIds,
              locked: locked
            });
          }
        }
      });
    });

    // ── Comprehension in English column ─────────────────────────────────
    var maxCompWeek = Math.min(40, totalWeeks);
    for (var w = 1; w <= maxCompWeek; w++) {
      var comp = getWeeklyComprehension(w);
      if (comp) {
        weekData[w].english.push({
          type: 'comprehension', title: comp.title,
          passageId: comp.passageId, typeLabel: comp.typeLabel,
          complete: comp.complete
        });
      }
    }

    // ── Assemble rows ───────────────────────────────────────────────────
    var weeks = [];
    for (var w = 1; w <= totalWeeks; w++) {
      weeks.push({
        week: w, isCurrent: w === currentWeek,
        isPast: w < currentWeek, subjects: weekData[w]
      });
    }

    return {
      weeks: weeks, totalWeeks: totalWeeks,
      currentWeek: currentWeek, subjectIds: SUBJECT_IDS
    };
  }

  // ── Export / Import ────────────────────────────────────────────────────────
  function exportProgress() {
    return JSON.stringify({
      version: 1,
      app: 'StudyMate',
      exportedAt: new Date().toISOString(),
      user: JSON.parse(localStorage.getItem('sm_user') || 'null'),
      profiles: JSON.parse(localStorage.getItem('sm_profiles') || '[]'),
      progress: JSON.parse(localStorage.getItem('sm_progress') || '{}'),
      studyPlan: JSON.parse(localStorage.getItem(PLAN_KEY) || 'null'),
      streak: parseInt(localStorage.getItem('sm_streak') || '0', 10),
      lastStudy: localStorage.getItem('sm_last_study') || null,
      theme: localStorage.getItem('sm_theme') || 'light'
    }, null, 2);
  }

  function importProgress(jsonString) {
    try {
      var data = JSON.parse(jsonString);
      if (!data.version || !data.user) throw new Error('Invalid backup file — missing version or user data.');

      if (data.user)      localStorage.setItem('sm_user',      JSON.stringify(data.user));
      if (data.profiles)  localStorage.setItem('sm_profiles',  JSON.stringify(data.profiles));
      if (data.progress)  localStorage.setItem('sm_progress',  JSON.stringify(data.progress));
      if (data.studyPlan) localStorage.setItem(PLAN_KEY,       JSON.stringify(data.studyPlan));
      if (data.streak !== undefined) localStorage.setItem('sm_streak', String(data.streak));
      if (data.lastStudy) localStorage.setItem('sm_last_study', data.lastStudy);
      if (data.theme)     localStorage.setItem('sm_theme',     data.theme);

      return { success: true, message: 'Progress imported successfully.' };
    } catch (e) {
      return { success: false, message: 'Import failed: ' + e.message };
    }
  }

  function downloadExport() {
    var json = exportProgress();
    var blob = new Blob([json], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'studymate-backup-' + _dateStr(new Date()) + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function triggerImport() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        var result = importProgress(ev.target.result);
        if (result.success) {
          showToast('✅ ' + result.message, 'success');
          setTimeout(function () { location.reload(); }, 1000);
        } else {
          showToast('❌ ' + result.message, 'error');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  function _dateStr(d) {
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return y + '-' + m + '-' + day;
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.StudyPlanner = {
    // Plan management
    getStudyPlan: getStudyPlan,
    saveStudyPlan: saveStudyPlan,
    deleteStudyPlan: deleteStudyPlan,
    createStudyPlan: createStudyPlan,

    // Weekly checklist
    getWeekChecklist: getWeekChecklist,
    getCurrentWeekNumber: getCurrentWeekNumber,
    getTotalStudyWeeks: getTotalStudyWeeks,
    getTopicProgress: getTopicProgress,
    getSubjectRoadmap: getSubjectRoadmap,
    getWeeklyGrid: getWeeklyGrid,

    // Gating & comprehension
    getSubjectGateStatus: getSubjectGateStatus,
    getWeeklyComprehension: getWeeklyComprehension,
    isTopicTestPassed: isTopicTestPassed,

    // Building blocks
    getIslandWeekMap: getIslandWeekMap,
    buildSubjectQueues: buildSubjectQueues,
    getNextTask: getNextTask,
    getWeekNumber: getWeekNumber,

    // Export / import
    exportProgress: exportProgress,
    importProgress: importProgress,
    downloadExport: downloadExport,
    triggerImport: triggerImport,

    // Constants
    SUBJECT_COLORS: SUBJECT_COLORS,
    SUBJECT_EMOJIS: SUBJECT_EMOJIS,
    SUBJECT_NAMES: SUBJECT_NAMES,
    SUBJECT_IDS: SUBJECT_IDS
  };

})();
