// planner.js — Study Plan engine: scheduling, progress tracking, export/import
//
// Item 1 of the Study Planner feature.
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

  // ── Weekly Timetable ───────────────────────────────────────────────────────
  // Core subjects (math, english) appear every study day.
  // Rotating subjects alternate by odd/even week:
  //   Odd  weeks → Science 3×, History 3×, Geography 2×
  //   Even weeks → Science 3×, Geography 3×, History 2×
  //
  // dayOfWeek: 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
  function getSubjectsForDay(dayOfWeek, weekNumber) {
    var core = ['math', 'english'];
    var isOdd = weekNumber % 2 === 1;

    // Only add rotating subjects on weekdays (Mon-Fri / Sat-Sun if chosen)
    var rotating = [];
    switch (dayOfWeek) {
      case 1: // Mon
        rotating = ['science', isOdd ? 'history' : 'geography'];
        break;
      case 2: // Tue
        rotating = ['science'];
        break;
      case 3: // Wed
        rotating = [isOdd ? 'geography' : 'history', isOdd ? 'history' : 'geography'];
        break;
      case 4: // Thu
        rotating = ['science'];
        break;
      case 5: // Fri
        rotating = [isOdd ? 'geography' : 'history', isOdd ? 'history' : 'geography'];
        break;
      case 6: // Sat
        rotating = ['science', isOdd ? 'history' : 'geography'];
        break;
      case 0: // Sun
        rotating = ['science', isOdd ? 'geography' : 'history'];
        break;
    }
    return core.concat(rotating);
  }

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

  var TASK_LABELS = {
    lesson: 'Complete lesson',
    flashcards: 'Learn flashcards',
    quiz: 'Take quiz',
    complete: 'Completed',
    review: 'Review completed topics'
  };

  // ── Current (next incomplete) island for a subject ─────────────────────────
  function getCurrentIsland(subjectId, queues) {
    var queue = queues[subjectId] || [];
    for (var idx = 0; idx < queue.length; idx++) {
      if (getIslandStatus(queue[idx]) < 4) return queue[idx];
    }
    return null; // subject fully mastered
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
  // For existing students the plan starts today but already-completed islands
  // are skipped automatically by getCurrentIsland().
  function createStudyPlan(studyDays) {
    var user = getUser();
    var now = new Date();

    // Use the user's join date as the logical start, but never earlier than today
    var joinDate = (user && user.joinDate) ? new Date(user.joinDate) : now;
    var startDate = joinDate > now ? joinDate : now;

    // Target: May of the next calendar year from start
    var targetYear = startDate.getFullYear() + 1;
    // If start is already Jun–Dec, May of next year is < 12 months — still fine
    // If start is Jan–May, May of next year is 12–16 months — also fine

    var plan = {
      startDate: _dateStr(startDate),
      targetMonth: 'May ' + targetYear,
      studyDays: studyDays || [1, 2, 3, 4, 5], // Mon–Fri
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

  // ── Study-day count from plan start to a given date ────────────────────────
  function countStudyDays(startDateStr, endDate, studyDays) {
    var d = new Date(startDateStr);
    var count = 0;
    while (d <= endDate) {
      if (studyDays.indexOf(d.getDay()) !== -1) count++;
      d.setDate(d.getDate() + 1);
    }
    return count;
  }

  // ── Today's tasks ──────────────────────────────────────────────────────────
  function getTodaysTasks() {
    var plan = getStudyPlan();
    if (!plan) return null;

    var today = new Date();
    var dayOfWeek = today.getDay();
    var weekNumber = getWeekNumber(today, plan.startDate);

    if (plan.studyDays.indexOf(dayOfWeek) === -1) {
      return { isStudyDay: false, tasks: [], dayOfWeek: dayOfWeek, weekNumber: weekNumber, date: _dateStr(today) };
    }

    var queues = buildSubjectQueues();
    var subjects = getSubjectsForDay(dayOfWeek, weekNumber);
    var tasks = [];

    subjects.forEach(function (sid) {
      var islandId = getCurrentIsland(sid, queues);
      if (!islandId) {
        tasks.push(_makeTask(sid, null, 'review'));
        return;
      }
      var task = getNextTask(islandId);
      tasks.push(_makeTask(sid, islandId, task));
    });

    return { isStudyDay: true, tasks: tasks, dayOfWeek: dayOfWeek, weekNumber: weekNumber, date: _dateStr(today) };
  }

  // ── Week schedule (for planner page) ───────────────────────────────────────
  function getWeekSchedule(weekNumber) {
    var plan = getStudyPlan();
    if (!plan) return null;

    // Find the Monday that starts the requested week
    var start = new Date(plan.startDate);
    var monday = new Date(start);
    monday.setDate(monday.getDate() + (weekNumber - 1) * 7);
    // Align to Monday
    var off = monday.getDay() === 0 ? -6 : 1 - monday.getDay();
    monday.setDate(monday.getDate() + off);

    var queues = buildSubjectQueues();
    var days = [];

    for (var d = 0; d < 7; d++) {
      var date = new Date(monday);
      date.setDate(monday.getDate() + d);
      var dow = date.getDay();
      var isStudy = plan.studyDays.indexOf(dow) !== -1;
      var today = new Date();

      var dayInfo = {
        date: _dateStr(date),
        dayOfWeek: dow,
        dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dow],
        dayNumber: date.getDate(),
        monthName: date.toLocaleDateString('en-GB', { month: 'short' }),
        isStudyDay: isStudy,
        isToday: date.toDateString() === today.toDateString(),
        isPast: date < today && date.toDateString() !== today.toDateString(),
        isFuture: date > today,
        subjects: []
      };

      if (isStudy) {
        var subjects = getSubjectsForDay(dow, weekNumber);
        subjects.forEach(function (sid) {
          var islandId = getCurrentIsland(sid, queues);
          var task = islandId ? getNextTask(islandId) : 'review';
          dayInfo.subjects.push(_makeTask(sid, islandId, task));
        });
      }

      days.push(dayInfo);
    }

    return { weekNumber: weekNumber, days: days };
  }

  // ── Progress summary (for planner page header) ─────────────────────────────
  function getProgressSummary() {
    var plan = getStudyPlan();
    if (!plan) return null;

    var queues = buildSubjectQueues();
    var subjects = {};
    var totalIslands = 0;
    var totalCompleted = 0;

    SUBJECT_IDS.forEach(function (sid) {
      var queue = queues[sid] || [];
      var done = 0;
      queue.forEach(function (id) { if (getIslandStatus(id) === 4) done++; });
      subjects[sid] = {
        total: queue.length, completed: done,
        percent: queue.length > 0 ? Math.round((done / queue.length) * 100) : 0,
        name: SUBJECT_NAMES[sid], emoji: SUBJECT_EMOJIS[sid], color: SUBJECT_COLORS[sid]
      };
      totalIslands += queue.length;
      totalCompleted += done;
    });

    // Pace tracking
    var startDate = new Date(plan.startDate);
    var now = new Date();
    var elapsedDays = Math.max(1, Math.floor((now - startDate) / 86400000));
    var totalDays = 305; // ~10 months of calendar time
    var expectedPct = Math.min(100, Math.round((elapsedDays / totalDays) * 100));
    var actualPct = totalIslands > 0 ? Math.round((totalCompleted / totalIslands) * 100) : 0;

    var diff = actualPct - expectedPct;
    var paceStatus, paceMessage;
    if (diff >= 3) {
      paceStatus = 'ahead';
      paceMessage = "You're ahead of schedule — great work!";
    } else if (diff >= -5) {
      paceStatus = 'ontrack';
      paceMessage = "You're on track";
    } else {
      paceStatus = 'behind';
      paceMessage = "You're a bit behind — let's catch up!";
    }

    return {
      subjects: subjects,
      totalIslands: totalIslands,
      totalCompleted: totalCompleted,
      totalPercent: actualPct,
      weekNumber: getWeekNumber(now, plan.startDate),
      totalWeeks: Math.ceil(totalDays / 7),
      paceStatus: paceStatus,
      paceMessage: paceMessage,
      startDate: plan.startDate,
      targetMonth: plan.targetMonth
    };
  }

  // ── Month calendar data ────────────────────────────────────────────────────
  function getMonthCalendar(year, month) {
    var plan = getStudyPlan();
    if (!plan) return null;

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var today = new Date();
    var days = [];

    for (var d = 1; d <= lastDay.getDate(); d++) {
      var date = new Date(year, month, d);
      var dow = date.getDay();
      var isStudy = plan.studyDays.indexOf(dow) !== -1;

      days.push({
        date: _dateStr(date),
        day: d,
        dayOfWeek: dow,
        isStudyDay: isStudy,
        isToday: date.toDateString() === today.toDateString(),
        isPast: date < today && date.toDateString() !== today.toDateString(),
        isFuture: date > today
      });
    }

    return {
      year: year,
      month: month,
      monthName: firstDay.toLocaleDateString('en-GB', { month: 'long' }),
      startDayOfWeek: firstDay.getDay(),
      days: days
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

  function _makeTask(subjectId, islandId, task) {
    var island = islandId ? CURRICULUM.find(function (i) { return i.id === islandId; }) : null;
    return {
      subjectId: subjectId,
      subjectName: SUBJECT_NAMES[subjectId],
      subjectEmoji: SUBJECT_EMOJIS[subjectId],
      subjectColor: SUBJECT_COLORS[subjectId],
      islandId: islandId,
      islandName: island ? island.name : (task === 'review' ? 'Review' : 'All done'),
      task: task,
      taskLabel: TASK_LABELS[task] || task,
      complete: task === 'complete'
    };
  }

  // ── Public API ─────────────────────────────────────────────────────────────
  window.StudyPlanner = {
    // Plan management
    getStudyPlan: getStudyPlan,
    saveStudyPlan: saveStudyPlan,
    deleteStudyPlan: deleteStudyPlan,
    createStudyPlan: createStudyPlan,

    // Daily / weekly / monthly views
    getTodaysTasks: getTodaysTasks,
    getWeekSchedule: getWeekSchedule,
    getMonthCalendar: getMonthCalendar,
    getProgressSummary: getProgressSummary,

    // Building blocks
    buildSubjectQueues: buildSubjectQueues,
    getNextTask: getNextTask,
    getCurrentIsland: getCurrentIsland,
    getSubjectsForDay: getSubjectsForDay,
    getWeekNumber: getWeekNumber,
    countStudyDays: countStudyDays,

    // Export / import
    exportProgress: exportProgress,
    importProgress: importProgress,
    downloadExport: downloadExport,
    triggerImport: triggerImport,

    // Constants
    SUBJECT_COLORS: SUBJECT_COLORS,
    SUBJECT_EMOJIS: SUBJECT_EMOJIS,
    SUBJECT_NAMES: SUBJECT_NAMES,
    SUBJECT_IDS: SUBJECT_IDS,
    TASK_LABELS: TASK_LABELS
  };

})();
