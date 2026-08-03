// list-bug-reports.mjs — Admin-only. Lets the scheduled fix agent pull every
// bug report out of the "bug-reports" Blobs store so it doesn't need repo/file
// access to know what's outstanding.
//
// Auth: a shared secret (X-Admin-Key header) checked against the
// BUG_AGENT_ADMIN_KEY env var — set in the Netlify UI, same place as
// ANTHROPIC_API_KEY. This is a machine-to-machine credential, not a user
// login, so it does NOT go through verifyUserId/Netlify Identity.
//
// By default returns reports that still need work (status != "closed").
// Pass ?status=open|in-review|closed to filter, or ?status=all for everything.

import { getStore } from "@netlify/blobs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type, X-Admin-Key",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const adminKey = req.headers.get("x-admin-key");
  if (!process.env.BUG_AGENT_ADMIN_KEY || adminKey !== process.env.BUG_AGENT_ADMIN_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  try {
    const url = new URL(req.url);
    const statusFilter = url.searchParams.get("status") || "open+in-review";

    const store = getStore("bug-reports");
    const { blobs } = await store.list();

    const reports = [];
    for (const b of blobs) {
      const data = await store.get(b.key, { type: "json" });
      if (!data) continue;
      if (statusFilter === "all") {
        reports.push(data);
      } else if (statusFilter === "open+in-review") {
        if (data.status !== "closed") reports.push(data);
      } else if (data.status === statusFilter) {
        reports.push(data);
      }
    }
    reports.sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1));

    return Response.json({ reports }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("list-bug-reports error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
