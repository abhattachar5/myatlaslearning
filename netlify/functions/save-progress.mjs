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
  "Access-Control-Allow-Methods": "PUT, OPTIONS",
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

    const data = {
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
      updatedAt: new Date().toISOString(),
    };

    await store.setJSON(`user_${userId}`, data);

    return Response.json({ success: true, data }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("save-progress error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
