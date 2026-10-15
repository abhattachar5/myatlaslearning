import { getStore } from "@netlify/blobs";
import { verifyUserId } from "../lib/auth.mjs";
import { mergeBlobs } from "../lib/merge.mjs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "PUT, OPTIONS",
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
    const key = `user_${userId}`;

    let data = {
      name: body.name || "",
      parentName: body.parentName || "",
      year: body.year || "",
      school: body.school || "",
      tier: body.tier || "free",
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
      parentPin: body.parentPin || "",
      assignments: Array.isArray(body.assignments) ? body.assignments : [],
      activeDays: Array.isArray(body.activeDays) ? body.activeDays : [],
      studyPlan: body.studyPlan || null,
    };

    // A device whose last-seen version doesn't match the server's is stale —
    // merge instead of overwriting, so it can't wipe newer progress made on
    // another device. (Old clients send no baseUpdatedAt and always merge.)
    const existing = await store.get(key, { type: "json" });
    const merged = !!(existing && existing.updatedAt && body.baseUpdatedAt !== existing.updatedAt);
    if (merged) data = mergeBlobs(existing, data);
    data.updatedAt = new Date().toISOString();

    await store.setJSON(key, data);

    return Response.json({ success: true, merged, data }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("save-progress error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
