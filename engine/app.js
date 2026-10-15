// app.js — Shared utilities, auth, and progress management

const LEVELS = [
  { level: 1, title: 'Beginner',  minXP: 0,    maxXP: 99   },
  { level: 2, title: 'Explorer',  minXP: 100,  maxXP: 249  },
  { level: 3, title: 'Student',   minXP: 250,  maxXP: 499  },
  { level: 4, title: 'Scholar',   minXP: 500,  maxXP: 999  },
  { level: 5, title: 'Expert',    minXP: 1000, maxXP: 1979 },
  { level: 6, title: 'Master',    minXP: 1980, maxXP: Infinity }
];

const STATUS_LABELS = ['Not Started', 'Explored', 'Learning', 'Proficient', 'Mastered'];
const STATUS_COLORS = ['#9ca3af', '#f59e0b', '#3b82f6', '#8b5cf6', '#22c55e'];

// ── Netlify Identity Init ────────────────────────────────────────────────────
if (typeof netlifyIdentity !== 'undefined') {
  netlifyIdentity.init({
    APIUrl: 'https://myatlaslearning.netlify.app/.netlify/identity'
  });
}

// ── Auth (Netlify Identity) ──────────────────────────────────────────────────
function getIdentityUser() {
  return typeof netlifyIdentity !== 'undefined' ? netlifyIdentity.currentUser() : null;
}
function getUser() {
  // DEF-001: tolerate corrupt profile JSON — return null (→ redirect to login)
  // and drop the bad key rather than letting a SyntaxError blank the page.
  try { return JSON.parse(localStorage.getItem('sm_active_profile') || 'null'); }
  catch (e) { localStorage.removeItem('sm_active_profile'); return null; }
}
// Safe localStorage JSON read: returns the fallback on missing/corrupt data.
function _safeLS(key, fb) { try { var v = localStorage.getItem(key); return v == null ? fb : JSON.parse(v); } catch (e) { return fb; } }
function setUser(user) {
  localStorage.setItem('sm_active_profile', JSON.stringify(user));
}
function logout() {
  flushSyncNow();   // save this account's final state before we wipe local data
  // Clear GoTrue token synchronously so index.html won't see an active session
  localStorage.removeItem('gotrue.user');
  // Wipe ALL per-account data so it can't bleed into the next account on this browser
  clearAccountData();
  // Fire async logout to revoke server-side token (best-effort)
  if (typeof netlifyIdentity !== 'undefined') {
    try { netlifyIdentity.logout(); } catch (e) { /* token already cleared */ }
  }
  window.location.href = 'index.html';
}
function requireAuth() {
  const identity = getIdentityUser();
  if (!identity) { window.location.href = 'index.html'; return null; }
  const profile = getUser();
  if (!profile) { window.location.href = 'index.html'; return null; }
  return profile;
}

// ── Server Sync ─────────────────────────────────────────────────────────────
async function fetchWithAuth(url, options = {}) {
  const identity = getIdentityUser();
  if (!identity) throw new Error('Not authenticated');
  await identity.jwt();
  options.headers = {
    ...options.headers,
    'Authorization': 'Bearer ' + identity.token.access_token
  };
  return fetch(url, options);
}

// ── Per-account local data ───────────────────────────────────────────────────
// Every localStorage key that belongs to a logged-in account. Cleared on logout
// and before a clean restore, so one account/device can never bleed its data
// into another. (sm_theme is a per-browser UI preference and is left alone.)
var ACCOUNT_KEYS = ['sm_active_profile','sm_progress','sm_assignments','sm_test_results',
  'sm_revision_done','sm_active_days','sm_study_plan','sm_streak','sm_last_study',
  'sm_sync_base','sm_sync_dirty'];
function clearAccountData() {
  ACCOUNT_KEYS.forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
  // Comprehension keys are dynamic (sm_comp_<id> / sm_compdraft_<id>) — sweep them.
  try {
    var del = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && (k.indexOf('sm_comp_') === 0 || k.indexOf('sm_compdraft_') === 0)) del.push(k);
    }
    del.forEach(function (k) { localStorage.removeItem(k); });
  } catch (e) {}
}

// Full progress payload from local state — the single source for both the
// debounced sync and the flush-on-close.
function buildSyncPayload() {
  const profile = getUser();
  if (!profile) return null;
  var testResults = {};
  try { testResults = JSON.parse(localStorage.getItem('sm_test_results') || '{}'); } catch(e) {}
  var revisionDone = {};
  try { revisionDone = JSON.parse(localStorage.getItem('sm_revision_done') || '{}'); } catch(e) {}
  var assignments = [];
  try { assignments = JSON.parse(localStorage.getItem('sm_assignments') || '[]'); } catch(e) {}
  return {
    name: profile.name,
    parentName: profile.parentName || '',
    year: profile.year,
    school: profile.school,
    tier: profile.tier || 'free',
    xp: profile.xp || 0,
    streak: getStreak(),
    lastStudy: localStorage.getItem('sm_last_study'),
    joinDate: profile.joinDate,
    preferences: { theme: localStorage.getItem('sm_theme') || 'light' },
    progress: getAllProgress(),
    testResults: testResults,
    revisionDone: revisionDone,
    comprehension: getAllComprehension(),
    yearHistory: profile.yearHistory || [],
    parentPin: profile.parentPin || '',
    assignments: assignments,
    activeDays: getActiveDays(),
    studyPlan: _safeLS('sm_study_plan', null)   // DEF-002
  };
}

// ── Multi-device sync ───────────────────────────────────────────────────────
// sm_sync_base  = the server `updatedAt` this device last synced with. Sent with
//                 every save; if the server has moved on since, it MERGES rather
//                 than overwrites (see netlify/lib/merge.mjs), so a stale device
//                 (e.g. a parent's laptop) can't wipe progress made elsewhere.
// sm_sync_dirty = local changes not yet confirmed by the server.
var SYNC_BASE_KEY = 'sm_sync_base', SYNC_DIRTY_KEY = 'sm_sync_dirty';
var _syncSeq = 0;          // bumps on every local change
var _forceMerge = false;   // after a mid-session merge, in-memory page state may be stale

function _syncBase() { return _forceMerge ? null : localStorage.getItem(SYNC_BASE_KEY); }

// Write a server blob into localStorage (login restore, pull-on-load, merged saves).
function applyServerData(d) {
  if (!d) return;
  var prev = getUser() || {};
  setUser(Object.assign({}, prev, {
    name: d.name, parentName: d.parentName || prev.parentName || '', year: d.year || '',
    school: d.school || '', tier: d.tier || 'free', xp: d.xp || 0,
    joinDate: d.joinDate || prev.joinDate || new Date().toISOString(),
    yearHistory: d.yearHistory || [], parentPin: d.parentPin || ''
  }));
  localStorage.setItem('sm_progress', JSON.stringify(d.progress || {}));
  localStorage.setItem('sm_streak', String(d.streak || 0));
  if (d.lastStudy) localStorage.setItem('sm_last_study', d.lastStudy);
  localStorage.setItem('sm_test_results', JSON.stringify(d.testResults || {}));
  localStorage.setItem('sm_revision_done', JSON.stringify(d.revisionDone || {}));
  localStorage.setItem('sm_assignments', JSON.stringify(d.assignments || []));
  localStorage.setItem('sm_active_days', JSON.stringify(d.activeDays || []));
  if (d.studyPlan) localStorage.setItem('sm_study_plan', JSON.stringify(d.studyPlan));
  restoreComprehension(d.comprehension);
  if (d.updatedAt) localStorage.setItem(SYNC_BASE_KEY, d.updatedAt);
}

// Push local state now. Returns the server response ({ merged, data }) or null.
async function _pushNow() {
  var seq = _syncSeq;
  var payload = buildSyncPayload();
  if (!payload) return null;
  payload.baseUpdatedAt = _syncBase();
  var res = await fetchWithAuth('/.netlify/functions/save-progress', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  var out = await res.json();
  if (out && out.data && getUser()) {   // getUser() null => logged out meanwhile
    if (out.merged) {
      applyServerData(out.data);
      _forceMerge = true;   // the open page may hold pre-merge state in memory
    }
    localStorage.setItem(SYNC_BASE_KEY, out.data.updatedAt);
    if (seq === _syncSeq) localStorage.removeItem(SYNC_DIRTY_KEY);
  }
  return out;
}

var _syncTimer = null;
function syncProgressToServer() {
  _syncSeq++;
  try { localStorage.setItem(SYNC_DIRTY_KEY, '1'); } catch (e) {}
  if (_syncTimer) clearTimeout(_syncTimer);
  _syncTimer = setTimeout(async function() {
    _syncTimer = null;
    try { await _pushNow(); }
    catch (err) {
      console.warn('Sync to server failed (will retry on next change):', err.message);
    }
  }, 2000);
}

// On every app page load, bring this device up to date BEFORE the learner works:
// push any unsynced local changes (server merges them), or pull if the server has
// newer data from another device. If local data changed, reload once so the page
// renders the fresh state instead of the stale copy.
async function syncOnLoad() {
  if (!getIdentityUser() || !getUser()) return;
  if (/(^|\/)(index\.html)?$/.test(location.pathname)) return;   // login page handles its own restore
  var seq = _syncSeq, changed = false;
  try {
    if (!localStorage.getItem(SYNC_DIRTY_KEY)) {
      var d = await loadProgressFromServer();
      if (!d || !d.updatedAt || d.updatedAt === localStorage.getItem(SYNC_BASE_KEY)) return;
      if (seq === _syncSeq) { applyServerData(d); changed = true; }
    }
    if (!changed) {
      // Unsynced local changes (from earlier, or made while we were pulling):
      // push them now and let the server merge with the newer copy.
      if (_syncTimer) { clearTimeout(_syncTimer); _syncTimer = null; }
      seq = _syncSeq;
      var out = await _pushNow();
      changed = !!(out && out.merged);
    }
  } catch (e) { console.warn('Sync on load failed:', e.message); return; }
  // Reload only while the page is fresh and untouched, never mid-activity.
  if (changed && seq === _syncSeq && performance.now() < 8000) {
    var last = +sessionStorage.getItem('sm_sync_reload') || 0;
    if (Date.now() - last > 10000) {
      sessionStorage.setItem('sm_sync_reload', String(Date.now()));
      location.reload();
    }
  }
}
if (typeof window !== 'undefined') syncOnLoad();

// Flush the latest state immediately (no debounce), using a keepalive request so
// it completes even while the tab is closing or backgrounding. Without this, work
// done in the last ~2s before leaving the page never reached the server — the
// main cause of "yesterday's work didn't show up on my other device".
function flushSyncNow() {
  try {
    const identity = getIdentityUser();
    if (!identity || !identity.token || !identity.token.access_token) return;
    if (!localStorage.getItem(SYNC_DIRTY_KEY)) return;   // nothing unsynced — don't rewrite the server copy
    const payload = buildSyncPayload();
    if (!payload) return;
    payload.baseUpdatedAt = _syncBase();
    if (_syncTimer) { clearTimeout(_syncTimer); _syncTimer = null; }
    var seq = _syncSeq;
    fetch('/.netlify/functions/save-progress', {
      method: 'PUT',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + identity.token.access_token
      },
      body: JSON.stringify(payload)
    }).then(function (res) { return res.ok ? res.json() : null; }).then(function (out) {
      // Only reached if the page survives (tab switch, not close).
      if (!out || !out.data || !getUser()) return;
      if (out.merged) { applyServerData(out.data); _forceMerge = true; }
      localStorage.setItem(SYNC_BASE_KEY, out.data.updatedAt);
      if (seq === _syncSeq) localStorage.removeItem(SYNC_DIRTY_KEY);
    }).catch(function () {});
  } catch (e) { /* best-effort */ }
}
if (typeof window !== 'undefined') {
  document.addEventListener('visibilitychange', function () { if (document.hidden) flushSyncNow(); });
  window.addEventListener('pagehide', flushSyncNow);
}

async function loadProgressFromServer() {
  try {
    const res = await fetchWithAuth('/.netlify/functions/get-progress');
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.warn('Failed to load progress from server:', err.message);
    return null;
  }
}

async function migrateLocalProgress() {
  var oldUser = _safeLS('sm_user', null);          // DEF-009
  var oldProgress = _safeLS('sm_progress', null);  // DEF-009
  if (!oldUser && !oldProgress) return null;

  var payload = {
    name: oldUser ? oldUser.name : '',
    year: oldUser ? oldUser.year : '',
    school: oldUser ? oldUser.school : '',
    xp: oldUser ? (oldUser.xp || 0) : 0,
    streak: parseInt(localStorage.getItem('sm_streak') || '0'),
    lastStudy: localStorage.getItem('sm_last_study'),
    joinDate: oldUser ? oldUser.joinDate : null,
    preferences: { theme: localStorage.getItem('sm_theme') || 'light' },
    progress: oldProgress || {}
  };

  try {
    var res = await fetchWithAuth('/.netlify/functions/merge-progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) return null;
    var result = await res.json();
    if (result.success) {
      localStorage.removeItem('sm_user');
      localStorage.removeItem('sm_profiles');
    }
    return result.data;
  } catch (err) {
    console.warn('Migration failed (old data preserved):', err.message);
    return null;
  }
}

// ── Progress ──────────────────────────────────────────────────────────────────
function getAllProgress() {
  return _safeLS('sm_progress', {});   // DEF-009 (same corrupt-JSON risk)
}
function saveAllProgress(progress) {
  localStorage.setItem('sm_progress', JSON.stringify(progress));
}
function getIslandProgress(islandId) {
  const all = getAllProgress();
  return all[islandId] || {
    lessonViewed: false,
    flashcardsLearned: [],
    quizBestScore: -1,
    quizAttempts: 0,
    xpAwarded: []
  };
}
function saveIslandProgress(islandId, data) {
  const all = getAllProgress();
  all[islandId] = data;
  saveAllProgress(all);
  syncProgressToServer();
}

// ── Comprehension progress (keyed by passage id, stored as sm_comp_<id>) ──────
// Gathered into one object for server sync and restored on login.
function getAllComprehension() {
  var out = {};
  try {
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf('sm_comp_') === 0) {
        try { out[k.slice(8)] = JSON.parse(localStorage.getItem(k)); } catch (e) { /* skip */ }
      }
    }
  } catch (e) { /* ignore */ }
  return out;
}
function restoreComprehension(map) {
  if (!map || typeof map !== 'object') return;
  Object.keys(map).forEach(function (id) {
    try { localStorage.setItem('sm_comp_' + id, JSON.stringify(map[id])); } catch (e) { /* ignore */ }
  });
}

// ── Assignments (parent-set homework & mock exams) ────────────────────────────
// Stored in localStorage 'sm_assignments' as an array; synced to the server blob.
// Each record: { id, type:'practice'|'exam', assignedTo (childId), subjectId,
//   topicId, islandIds, numQuestions, difficulty,        // practice
//   timeLimitMin, snapshotTopicIds,                       // exam
//   note, dueDate, createdAt, status:'assigned'|'done', result }
function getAssignments() {
  try { return JSON.parse(localStorage.getItem('sm_assignments') || '[]'); } catch (e) { return []; }
}
function saveAssignments(list) {
  localStorage.setItem('sm_assignments', JSON.stringify(Array.isArray(list) ? list : []));
  syncProgressToServer();
}
function addAssignment(a) {
  var list = getAssignments();
  list.push(a);
  saveAssignments(list);
  return a;
}
function updateAssignment(id, patch) {
  var list = getAssignments();
  var i = list.findIndex(function (x) { return x.id === id; });
  if (i === -1) return null;
  list[i] = Object.assign({}, list[i], patch);
  saveAssignments(list);
  return list[i];
}
function removeAssignment(id) {
  var list = getAssignments().filter(function (x) { return x.id !== id; });
  saveAssignments(list);
  return list;
}

// ── Parent Zone PIN ───────────────────────────────────────────────────────────
function getParentPin() {
  var u = getUser();
  return u ? (u.parentPin || '') : '';
}
function setParentPin(pin) {
  var u = getUser();
  if (!u) return;
  u.parentPin = pin;
  setUser(u);
  syncProgressToServer();
}

// ── XP & Levels ──────────────────────────────────────────────────────────────
function getTotalXP() {
  const user = getUser();
  return user ? (user.xp || 0) : 0;
}
function addXP(amount, reason) {
  const user = getUser();
  if (!user) return 0;
  user.xp = (user.xp || 0) + amount;
  setUser(user);
  showXPToast(amount, reason);
  syncProgressToServer();
  return user.xp;
}
function getUserLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) return LEVELS[i];
  }
  return LEVELS[0];
}
function getLevelProgress(xp) {
  const lvl = getUserLevel(xp);
  if (lvl.maxXP === Infinity) return 100;
  const range = lvl.maxXP - lvl.minXP + 1;
  const earned = xp - lvl.minXP;
  return Math.min(100, Math.round((earned / range) * 100));
}

// ── Flashcard ID normalisation ────────────────────────────────────────────────
// Cards in older content files have explicit IDs; newer files may omit them.
// Ensure every card has a stable derived ID before any progress code runs.
(function normaliseFlashcardIds() {
  if (typeof FLASHCARDS === 'undefined') return;
  var counts = {};
  FLASHCARDS.forEach(function(c) {
    if (!c.id) {
      counts[c.islandId] = (counts[c.islandId] || 0) + 1;
      c.id = c.islandId + '-fc-' + counts[c.islandId];
    }
  });
})();

// ── Island Progress Calculations ─────────────────────────────────────────────
//
// Progress is built from three equal steps so 100% is always reachable:
//   Step 1 — Lesson viewed         → +33
//   Step 2 — All flashcards learned → +33
//   Step 3 — Quiz passed (≥ 70%)   → +34
//
function calcIslandProgress(islandId) {
  const p = getIslandProgress(islandId);
  const cards = typeof FLASHCARDS !== 'undefined'
    ? FLASHCARDS.filter(function(f) { return f.islandId === islandId; }) : [];
  const qs = typeof QUESTIONS !== 'undefined'
    ? (QUESTIONS[islandId] || []) : [];

  var score = 0;

  // Step 1 — Lesson viewed (33 pts, binary)
  if (p.lessonViewed) score += 33;

  // Step 2 — Flashcards (33 pts, proportional). DEF-006: an island with no
  // flashcards has nothing to learn here, so award the points automatically.
  if (cards.length === 0) {
    score += 33;
  } else {
    var learned = cards.filter(function(c) {
      return p.flashcardsLearned.includes(c.id);
    }).length;
    score += Math.round((learned / cards.length) * 33);
  }

  // Step 3 — Quiz passed: ≥ 70% correct (34 pts). DEF-006: an island with no
  // questions has no quiz to pass, so award the points automatically.
  var passMark = qs.length > 0 ? Math.ceil(qs.length * 0.7) : 0;
  if (qs.length === 0 || p.quizBestScore >= passMark) score += 34;

  return Math.min(100, score);
}

function getIslandStatus(islandId) {
  const p = getIslandProgress(islandId);
  const cards = typeof FLASHCARDS !== 'undefined'
    ? FLASHCARDS.filter(f => f.islandId === islandId) : [];
  const qs = typeof QUESTIONS !== 'undefined'
    ? (QUESTIONS[islandId] || []) : [];

  // DEF-006: treat an empty dimension as auto-satisfied (nothing to do there),
  // so lesson-only / no-flashcard islands can still reach Mastered.
  const allCardsLearned = cards.length === 0 ||
    cards.every(c => p.flashcardsLearned.includes(c.id));
  const quizPassed = qs.length === 0 || p.quizBestScore >= Math.ceil(qs.length * 0.7);

  if (quizPassed && allCardsLearned && p.lessonViewed) return 4; // Mastered
  if (allCardsLearned && p.lessonViewed) return 3;              // Proficient
  // DEF-012: check flashcards (Learning = 2) BEFORE lesson-only (Explored = 1)
  // so the scale is monotonic — starting flashcards never reports a lower status
  // than only viewing the lesson.
  if (p.flashcardsLearned.length > 0) return 2;                // Learning
  if (p.lessonViewed) return 1;                                // Explored
  return 0;                                                     // Not Started
}

function isIslandUnlocked(island, allProgress) {
  // Prerequisite gating is opt-in via CONFIG.enforcePrerequisites (default off,
  // i.e. everything unlocked). When on, an island unlocks only once every
  // prerequisite is Proficient (status >= 3) or better.
  if (typeof CONFIG === 'undefined' || !CONFIG.enforcePrerequisites) return true;
  var prereqs = (island && island.prerequisites) || [];
  for (var i = 0; i < prereqs.length; i++) {
    if (getIslandStatus(prereqs[i]) < 3) return false;
  }
  return true;
}

// ── Progress Ring SVG ─────────────────────────────────────────────────────────
function createProgressRing(progress, color, size = 56) {
  const r = (size - 10) / 2;
  const cx = size / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.max(0, Math.min(100, progress)) / 100);
  const pct = Math.round(progress);
  // UX-A11y-010: expose as a progressbar with its value to screen readers.
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"
    role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"
    aria-label="Progress: ${pct}%">
    <circle cx="${cx}" cy="${cx}" r="${r}" fill="none" stroke="var(--ring-track)" stroke-width="5"/>
    <circle cx="${cx}" cy="${cx}" r="${r}" fill="none" stroke="${color}" stroke-width="5"
      stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
      stroke-linecap="round" transform="rotate(-90 ${cx} ${cx})"/>
    <text x="${cx}" y="${cx}" text-anchor="middle" dominant-baseline="central"
      font-size="11" font-weight="700"
      fill="${progress > 0 ? color : 'var(--text-muted)'}">${pct}%</text>
  </svg>`;
}

// ── Streak ────────────────────────────────────────────────────────────────────
function getStreak() {
  return parseInt(localStorage.getItem('sm_streak') || '0');
}
function touchStreak() {
  markActiveDay();
  const today = new Date().toDateString();
  const last = localStorage.getItem('sm_last_study');
  const streak = getStreak();
  if (last === today) return streak;            // already counted today
  // Forgiving streak: a gap of up to 2 missed days keeps the run alive.
  // gap = calendar days between last study and today (1 = studied yesterday).
  let next = 1;
  if (last) {
    const lastMid = new Date(last); lastMid.setHours(0, 0, 0, 0);
    const todayMid = new Date(today); todayMid.setHours(0, 0, 0, 0);
    const gap = Math.round((todayMid - lastMid) / 86400000);
    next = (gap >= 1 && gap <= 3) ? streak + 1 : 1;  // gap 1–3 => ≤2 missed days
  }
  localStorage.setItem('sm_streak', next);
  localStorage.setItem('sm_last_study', today);
  syncProgressToServer();
  return next;
}

// ── Active days (event-driven; a day is "active" when the learner studies) ──────
// Stored in localStorage 'sm_active_days' as ['YYYY-MM-DD', ...]; synced to the blob.
// Marked from touchStreak(), so it reflects real study activity, not presence/time.
function getActiveDays() {
  try { return JSON.parse(localStorage.getItem('sm_active_days') || '[]'); } catch (e) { return []; }
}
function markActiveDay() {
  var d = new Date();
  var key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  var days = getActiveDays();
  if (days.indexOf(key) === -1) {
    days.push(key);
    if (days.length > 120) days = days.slice(-120); // bound stored history
    localStorage.setItem('sm_active_days', JSON.stringify(days));
  }
}

// ── Year-group <select> ─────────────────────────────────────────────────────
// Populated from CONFIG on every page that has #edit-year, so adding a year is
// just a CONFIG.active change — no per-page option lists to maintain.
function fillYearSelect() {
  var sel = document.getElementById('edit-year');
  if (!sel || typeof CONFIG === 'undefined') return;
  var active = CONFIG.active || [];
  sel.innerHTML = (CONFIG.years || []).map(function (code) {
    var label = (CONFIG.yearLabel && CONFIG.yearLabel[code]) || code;
    var on = active.indexOf(code) !== -1;
    return '<option value="' + label + '"' + (on ? '' : ' disabled') + '>' +
           label + (on ? '' : ' — Coming Soon') + '</option>';
  }).join('');
}
if (typeof document !== 'undefined') document.addEventListener('DOMContentLoaded', fillYearSelect);

// ── Theme ─────────────────────────────────────────────────────────────────────
function initTheme() {
  const t = localStorage.getItem('sm_theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
  return t;
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('sm_theme', next);
  syncProgressToServer();
  return next;
}

// ── Toast Notifications ───────────────────────────────────────────────────────
function showXPToast(amount, reason = '') {
  const toast = document.createElement('div');
  toast.className = 'xp-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.setAttribute('aria-atomic', 'true');
  toast.innerHTML = `<span class="xp-toast-amount">+${amount} XP</span>${reason ? `<span class="xp-toast-reason">${reason}</span>` : ''}`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('xp-toast--show'));
  setTimeout(() => {
    toast.classList.remove('xp-toast--show');
    setTimeout(() => toast.remove(), 400);
  }, 2200);
}
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  // UX-A11y-009: errors/warnings interrupt (assertive); other toasts are polite.
  const assertive = (type === 'error' || type === 'warning');
  toast.setAttribute('role', assertive ? 'alert' : 'status');
  toast.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
  toast.setAttribute('aria-atomic', 'true');
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--show'));
  setTimeout(() => {
    toast.classList.remove('toast--show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}

// UX-A11y-014: accessible replacement for window.confirm(). Builds a focus-trapped
// role="dialog" modal; runs onConfirm only if confirmed; Esc / overlay-click / Cancel
// dismiss; focus returns to the triggering element on close.
function atlasConfirm(message, onConfirm, opts) {
  opts = opts || {};
  var prev = document.activeElement;
  var overlay = document.createElement('div');
  overlay.className = 'atlas-modal-overlay';
  overlay.innerHTML =
    '<div class="atlas-modal" role="dialog" aria-modal="true" aria-labelledby="atlas-dlg-msg">' +
      '<p id="atlas-dlg-msg" class="atlas-modal-msg"></p>' +
      '<div class="atlas-modal-actions">' +
        '<button type="button" class="btn btn-secondary" data-act="cancel"></button>' +
        '<button type="button" class="btn btn-primary" data-act="ok"></button>' +
      '</div></div>';
  overlay.querySelector('.atlas-modal-msg').textContent = message;
  var cancelBtn = overlay.querySelector('[data-act="cancel"]');
  var okBtn = overlay.querySelector('[data-act="ok"]');
  cancelBtn.textContent = opts.cancelText || 'Cancel';
  okBtn.textContent = opts.confirmText || 'Confirm';
  document.body.appendChild(overlay);
  function close() {
    if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
    document.removeEventListener('keydown', onKey, true);
    if (prev && prev.focus) prev.focus();
  }
  function onKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'Tab') { e.preventDefault(); (document.activeElement === okBtn ? cancelBtn : okBtn).focus(); }
  }
  cancelBtn.onclick = close;
  okBtn.onclick = function () { close(); if (typeof onConfirm === 'function') onConfirm(); };
  overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
  document.addEventListener('keydown', onKey, true);
  okBtn.focus();
}

// ── Utility ───────────────────────────────────────────────────────────────────
function formatDate(iso) {
  if (!iso) return 'Never';
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
function getDifficultyLabel(n) {
  return ['', 'Foundation', 'Higher', 'Challenge'][n] || '';
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Stats Summary ─────────────────────────────────────────────────────────────
function getGlobalStats() {
  const all = getAllProgress();
  let started = 0, mastered = 0;
  const islands = typeof CURRICULUM !== 'undefined' ? CURRICULUM : [];
  islands.forEach(island => {
    const s = getIslandStatus(island.id);
    if (s > 0) started++;
    if (s === 4) mastered++;
  });
  return { started, mastered, total: islands.length, xp: getTotalXP(), streak: getStreak() };
}
