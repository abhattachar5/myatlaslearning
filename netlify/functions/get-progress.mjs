import { getStore } from "@netlify/blobs";
import { verifyUserId } from "../lib/auth.mjs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
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
    const store = getStore("user-progress");
    const data = await store.get(`user_${userId}`, { type: "json" });

    if (!data) {
      return Response.json(
        { name: "", parentName: "", year: "", school: "", tier: "free", xp: 0, streak: 0, lastStudy: null, joinDate: null, preferences: { theme: "light" }, progress: {}, testResults: {}, revisionDone: {}, comprehension: {}, yearHistory: [], parentPin: "", assignments: [], activity: {} },
        { headers: CORS_HEADERS }
      );
    }

    return Response.json(data, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("get-progress error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
