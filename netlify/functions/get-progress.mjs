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

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
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
    const store = getStore("user-progress");
    const data = await store.get(`user_${userId}`, { type: "json" });

    if (!data) {
      return Response.json(
        { name: "", parentName: "", year: "", school: "", tier: "free", xp: 0, streak: 0, lastStudy: null, joinDate: null, preferences: { theme: "light" }, progress: {}, testResults: {}, revisionDone: {} },
        { headers: CORS_HEADERS }
      );
    }

    return Response.json(data, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("get-progress error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
