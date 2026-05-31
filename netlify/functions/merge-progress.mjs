import { getStore } from "@netlify/blobs";
import { verifyUserId } from "../lib/auth.mjs";

function mergeProgress(existing, incoming) {
  const merged = {};
  const allIslands = new Set([...Object.keys(existing), ...Object.keys(incoming)]);

  for (const id of allIslands) {
    const e = existing[id] || {};
    const i = incoming[id] || {};

    merged[id] = {
      lessonViewed: e.lessonViewed || i.lessonViewed || false,
      flashcardsLearned: [...new Set([...(e.flashcardsLearned || []), ...(i.flashcardsLearned || [])])],
      quizBestScore: Math.max(e.quizBestScore ?? -1, i.quizBestScore ?? -1),
      quizAttempts: Math.max(e.quizAttempts || 0, i.quizAttempts || 0),
      xpAwarded: [...new Set([...(e.xpAwarded || []), ...(i.xpAwarded || [])])],
    };
  }

  return merged;
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const userId = await verifyUserId(req.headers.get("authorization"));
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  try {
    const body = await req.json();
    const store = getStore("user-progress");
    const existing = await store.get(`user_${userId}`, { type: "json" });

    let merged;

    if (!existing) {
      merged = {
        name: body.name || "",
        parentName: body.parentName || "",
        year: body.year || "",
        school: body.school || "",
        tier: "free",
        xp: body.xp || 0,
        streak: body.streak || 0,
        lastStudy: body.lastStudy || null,
        joinDate: body.joinDate || null,
        preferences: body.preferences || { theme: "light" },
        progress: body.progress || {},
        testResults: body.testResults || {},
        revisionDone: body.revisionDone || {},
        comprehension: body.comprehension || {},
        yearHistory: body.yearHistory || [],
        studyPlan: body.studyPlan || null,
        updatedAt: new Date().toISOString(),
      };
    } else {
      merged = {
        name: existing.name || body.name || "",
        parentName: existing.parentName || body.parentName || "",
        year: existing.year || body.year || "",
        school: existing.school || body.school || "",
        tier: existing.tier || "free",
        xp: Math.max(existing.xp || 0, body.xp || 0),
        streak: Math.max(existing.streak || 0, body.streak || 0),
        lastStudy: existing.lastStudy || body.lastStudy || null,
        joinDate: existing.joinDate || body.joinDate || null,
        preferences: { ...{ theme: "light" }, ...(existing.preferences || {}), ...(body.preferences || {}) },
        progress: mergeProgress(existing.progress || {}, body.progress || {}),
        testResults: { ...(body.testResults || {}), ...(existing.testResults || {}) },
        revisionDone: { ...(body.revisionDone || {}), ...(existing.revisionDone || {}) },
        comprehension: { ...(body.comprehension || {}), ...(existing.comprehension || {}) },
        yearHistory: (existing.yearHistory && existing.yearHistory.length) ? existing.yearHistory : (body.yearHistory || []),
        studyPlan: existing.studyPlan || body.studyPlan || null,
        updatedAt: new Date().toISOString(),
      };
    }

    await store.setJSON(`user_${userId}`, merged);

    return Response.json({ success: true, data: merged }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("merge-progress error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
