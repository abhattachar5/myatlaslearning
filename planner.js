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

  // ── Topological Sort (Kahn's algorithm) ────────────────────────────────────
  // Returns islands in prerequisite-safe order within a subject.
  function topoSortIslands(islands) {
    var idSet = {};
    islands.forEach(function (i) { idSet[i.id] = true; });

    var adj = {};   // adjacency list: prereq → [dependents]
    var inDeg = {};
    islands.forEach(function (i) { adj[i.id] = []; inDeg[i.id] = 0; });

    islands.forEach(function (i) {
      (i.prerequisites || []).forEach(function (preId) {
        if (idSet[preId]) {
          adj[preId].push(i.id);
          inDeg[i.id]++;
        }
      });
    });

    var queue = [];
    islands.forEach(function (i) { if (inDeg[i.id] === 0) queue.push(i.id); });

    var sorted = [];
    while (queue.length > 0) {
      var id = queue.shift();
      sorted.push(id);
      (adj[id] || []).forEach(function (dep) {
        inDeg[dep]--;
        if (inDeg[dep] === 0) queue.push(dep);
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

  // ── Weekly checklist ───────────────────────────────────────────────────────
  // Returns structured data for the current week's island list, grouped by
  // subject → topic → islands with 4-step progress dots.
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

    var subjects = [];
    var totalItems = 0;
    var doneItems = 0;

    SUBJECT_IDS.forEach(function (sid) {
      var queue = buildSubjectQueues()[sid];
      var n = queue.length;
      if (n === 0) return;

      // Find islands assigned to this week for this subject
      var weekIslandIds = [];
      for (var i = 0; i < n; i++) {
        if (weekMap[queue[i]] === weekNumber) weekIslandIds.push(queue[i]);
      }

      if (weekIslandIds.length === 0) return;

      // Group by topic
      var topicGroups = {};
      var topicOrder = [];

      weekIslandIds.forEach(function (islandId) {
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
        var dots = Math.floor(progress / 25);
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

      subjects.push({
        subjectId: sid,
        subjectName: SUBJECT_NAMES[sid],
        subjectEmoji: SUBJECT_EMOJIS[sid],
        subjectColor: SUBJECT_COLORS[sid],
        topics: topicOrder.map(function (tid) { return topicGroups[tid]; }),
        islandCount: weekIslandIds.length
      });
    });

    return {
      weekNumber: weekNumber,
      totalWeeks: totalWeeks,
      subjects: subjects,
      totalItems: totalItems,
      doneItems: doneItems,
      allDone: totalItems > 0 && doneItems === totalItems
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

  // ── Weekly grid: weeks as rows, subjects as columns ─────────────────────
  // Returns a table-ready structure: each week gets one row with topic names
  // listed per subject column.  Duplicate topic names within a week+subject
  // are collapsed so the cell reads cleanly.
  function getWeeklyGrid() {
    var plan = getStudyPlan();
    if (!plan) return null;

    var queues = buildSubjectQueues();
    var totalWeeks = getTotalStudyWeeks(plan);
    var weekMap = getIslandWeekMap(plan);
    var currentWeek = getCurrentWeekNumber();

    var allTopics = getAllTopics();
    var topicNameMap = {};
    allTopics.forEach(function (t) { topicNameMap[t.id] = t.name; });

    // Initialise empty grid: week → subject → []
    var weekData = {};
    for (var w = 1; w <= totalWeeks; w++) {
      weekData[w] = {};
      SUBJECT_IDS.forEach(function (sid) { weekData[w][sid] = []; });
    }

    SUBJECT_IDS.forEach(function (sid) {
      var queue = queues[sid];
      var n = queue.length;
      for (var i = 0; i < n; i++) {
        var islandId = queue[i];
        var wk = weekMap[islandId] || 1;

        var island = CURRICULUM.find(function (c) { return c.id === islandId; });
        if (!island) continue;

        var topicId = island.topicId || '_solo_' + islandId;
        var topicName = topicNameMap[topicId] || island.name;

        weekData[wk][sid].push({
          topic: topicName,
          island: island.name
        });
      }
    });

    var weeks = [];
    for (var w = 1; w <= totalWeeks; w++) {
      weeks.push({
        week: w,
        isCurrent: w === currentWeek,
        isPast: w < currentWeek,
        subjects: weekData[w]
      });
    }

    return {
      weeks: weeks,
      totalWeeks: totalWeeks,
      currentWeek: currentWeek,
      subjectIds: SUBJECT_IDS
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
