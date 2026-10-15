// Merge a STALE device's progress blob into the server's copy.
//
// save-progress used to overwrite the blob with whatever the device sent. A
// device that hadn't pulled for a while (e.g. a parent's laptop opened days
// later) would push its old snapshot on tab-switch/close and wipe the child's
// newer work. Now each save carries the server `updatedAt` the device last saw;
// when that doesn't match, the save goes through mergeBlobs() so learning
// progress only ever accumulates.
//
// Trade-off: on a stale save, a deletion made on that stale device (un-learning
// a flashcard, removing an assignment) can be undone by the union. Saves from an
// up-to-date device take the fast path and keep deletions.

const ts = (v) => {
  const t = v ? new Date(v).getTime() : NaN;
  return Number.isFinite(t) ? t : -Infinity;
};
const union = (a, b) => [...new Set([...(a || []), ...(b || [])])];

export function mergeIslandProgress(existing = {}, incoming = {}) {
  const merged = {};
  for (const id of new Set([...Object.keys(existing), ...Object.keys(incoming)])) {
    const e = existing[id] || {};
    const i = incoming[id] || {};
    merged[id] = {
      ...e,
      ...i,
      lessonViewed: !!(e.lessonViewed || i.lessonViewed),
      flashcardsLearned: union(e.flashcardsLearned, i.flashcardsLearned),
      quizBestScore: Math.max(e.quizBestScore ?? -1, i.quizBestScore ?? -1),
      quizAttempts: Math.max(e.quizAttempts || 0, i.quizAttempts || 0),
      xpAwarded: union(e.xpAwarded, i.xpAwarded),
    };
  }
  return merged;
}

// { topicId: [ {date, ...}, ... ] } — union attempts by date, keep the last 10.
function mergeTestResults(existing = {}, incoming = {}) {
  const out = {};
  for (const k of new Set([...Object.keys(existing), ...Object.keys(incoming)])) {
    const byDate = new Map();
    for (const r of [...(existing[k] || []), ...(incoming[k] || [])]) {
      if (r) byDate.set(r.date || JSON.stringify(r), r);
    }
    out[k] = [...byDate.values()].sort((a, b) => ts(a.date) - ts(b.date)).slice(-10);
  }
  return out;
}

// { topicId: { subtopicId: ... } }
function mergeRevisionDone(existing = {}, incoming = {}) {
  const out = { ...existing };
  for (const [k, v] of Object.entries(incoming)) {
    out[k] = (v && typeof v === 'object' && out[k] && typeof out[k] === 'object') ? { ...out[k], ...v } : v;
  }
  return out;
}

// { passageId: { score, total, date } } — keep the most recent attempt.
function mergeComprehension(existing = {}, incoming = {}) {
  const out = { ...existing };
  for (const [k, v] of Object.entries(incoming)) {
    if (!out[k] || ts(v && v.date) > ts(out[k].date)) out[k] = v;
  }
  return out;
}

// Merge by id; a completed assignment beats an open one.
function mergeAssignments(existing = [], incoming = []) {
  const byId = new Map();
  for (const a of existing) if (a && a.id) byId.set(a.id, a);
  for (const a of incoming) {
    if (!a || !a.id) continue;
    const e = byId.get(a.id);
    if (!e || (a.status === 'done' && e.status !== 'done')) byId.set(a.id, a);
  }
  return [...byId.values()];
}

export function mergeBlobs(existing, incoming) {
  const incomingNewerStudy = ts(incoming.lastStudy) > ts(existing.lastStudy);
  return {
    // Profile/settings: the server copy wins over a stale device.
    name: existing.name || incoming.name || "",
    parentName: existing.parentName || incoming.parentName || "",
    year: existing.year || incoming.year || "",
    school: existing.school || incoming.school || "",
    tier: existing.tier || incoming.tier || "free",
    joinDate: existing.joinDate || incoming.joinDate || null,
    preferences: existing.preferences || incoming.preferences || { theme: "light" },
    yearHistory: (existing.yearHistory && existing.yearHistory.length) ? existing.yearHistory : (incoming.yearHistory || []),
    parentPin: existing.parentPin || incoming.parentPin || "",
    studyPlan: existing.studyPlan || incoming.studyPlan || null,
    // Learning progress: only ever accumulates.
    xp: Math.max(existing.xp || 0, incoming.xp || 0),
    streak: incomingNewerStudy ? (incoming.streak || 0) : (existing.streak || 0),
    lastStudy: incomingNewerStudy ? incoming.lastStudy : (existing.lastStudy || incoming.lastStudy || null),
    progress: mergeIslandProgress(existing.progress, incoming.progress),
    testResults: mergeTestResults(existing.testResults, incoming.testResults),
    revisionDone: mergeRevisionDone(existing.revisionDone, incoming.revisionDone),
    comprehension: mergeComprehension(existing.comprehension, incoming.comprehension),
    assignments: mergeAssignments(existing.assignments, incoming.assignments),
    activeDays: union(existing.activeDays, incoming.activeDays).sort().slice(-120),
  };
}
