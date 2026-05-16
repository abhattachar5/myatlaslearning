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

// ── Auth ─────────────────────────────────────────────────────────────────────
function getUser() {
  return JSON.parse(localStorage.getItem('sm_user') || 'null');
}
function setUser(user) {
  localStorage.setItem('sm_user', JSON.stringify(user));
}
function logout() {
  localStorage.removeItem('sm_user');
  window.location.href = 'index.html';
}
function requireAuth() {
  const user = getUser();
  if (!user) { window.location.href = 'index.html'; return null; }
  return user;
}

// ── Progress ──────────────────────────────────────────────────────────────────
function getAllProgress() {
  return JSON.parse(localStorage.getItem('sm_progress') || '{}');
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
// Progress is built from four equal 25-point steps so 100% is always reachable:
//   Step 1 — Lesson viewed         → +25
//   Step 2 — All flashcards seen   → +25 (proportional to cards marked learned)
//   Step 3 — Quiz attempted        → +25 (any score, just try it)
//   Step 4 — Quiz passed (≥ 70%)   → +25
//
function calcIslandProgress(islandId) {
  const p = getIslandProgress(islandId);
  const cards = typeof FLASHCARDS !== 'undefined'
    ? FLASHCARDS.filter(function(f) { return f.islandId === islandId; }) : [];
  const qs = typeof QUESTIONS !== 'undefined'
    ? (QUESTIONS[islandId] || []) : [];

  var score = 0;

  // Step 1 — Lesson viewed (25 pts, binary)
  if (p.lessonViewed) score += 25;

  // Step 2 — Flashcards (25 pts, proportional to cards marked learned)
  if (cards.length > 0) {
    var learned = cards.filter(function(c) {
      return p.flashcardsLearned.includes(c.id);
    }).length;
    score += Math.round((learned / cards.length) * 25);
  }

  // Step 3 — Quiz attempted (25 pts, binary — just try it)
  if (qs.length > 0 && p.quizBestScore >= 0) score += 25;

  // Step 4 — Quiz passed: ≥ 70% correct (25 pts, binary)
  var passMark = qs.length > 0 ? Math.ceil(qs.length * 0.7) : 0;
  if (qs.length > 0 && p.quizBestScore >= passMark) score += 25;

  return Math.min(100, score);
}

function getIslandStatus(islandId) {
  const p = getIslandProgress(islandId);
  const cards = typeof FLASHCARDS !== 'undefined'
    ? FLASHCARDS.filter(f => f.islandId === islandId) : [];
  const qs = typeof QUESTIONS !== 'undefined'
    ? (QUESTIONS[islandId] || []) : [];

  const allCardsLearned = cards.length > 0 &&
    cards.every(c => p.flashcardsLearned.includes(c.id));
  const quizPassed = qs.length > 0 && p.quizBestScore >= Math.ceil(qs.length * 0.7);

  if (quizPassed && allCardsLearned) return 4;      // Mastered
  if (allCardsLearned) return 3;                    // Proficient
  if (p.flashcardsLearned.length > 0) return 2;    // Learning
  if (p.lessonViewed) return 1;                     // Explored
  return 0;                                         // Not Started
}

function isIslandUnlocked(island, allProgress) {
  if (!island.prerequisites || island.prerequisites.length === 0) return true;
  return island.prerequisites.every(prereqId => {
    const prog = allProgress[prereqId];
    return prog && (prog.lessonViewed || (prog.flashcardsLearned && prog.flashcardsLearned.length > 0));
  });
}

// ── Progress Ring SVG ─────────────────────────────────────────────────────────
function createProgressRing(progress, color, size = 56) {
  const r = (size - 10) / 2;
  const cx = size / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.max(0, Math.min(100, progress)) / 100);
  const pct = Math.round(progress);
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
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
  const today = new Date().toDateString();
  const last = localStorage.getItem('sm_last_study');
  const streak = getStreak();
  if (last === today) return streak;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const next = last === yesterday ? streak + 1 : 1;
  localStorage.setItem('sm_streak', next);
  localStorage.setItem('sm_last_study', today);
  return next;
}

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
  return next;
}

// ── Toast Notifications ───────────────────────────────────────────────────────
function showXPToast(amount, reason = '') {
  const toast = document.createElement('div');
  toast.className = 'xp-toast';
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
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('toast--show'));
  setTimeout(() => {
    toast.classList.remove('toast--show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
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
