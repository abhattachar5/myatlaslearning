import { getStore } from "@netlify/blobs";

function getUserIdFromToken(authHeader) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7);
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  try {
    const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    return payload.sub || null;
  } catch {
    return null;
  }
}

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

  const userId = getUserIdFromToken(req.headers.get("authorization"));
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
