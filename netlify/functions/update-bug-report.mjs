// update-bug-report.mjs — Admin-only. Lets the scheduled fix agent mark a
// report's status once it has looked at it, so the next scheduled run doesn't
// redo the same work. Never deletes reports — every status is a permanent
// record of what happened.
//
// Statuses:
//   open        — not yet looked at (or inconclusive, still eligible for retry)
//   in-review   — a fix was made and a PR is open; human needs to review it
//   not-a-bug   — the agent investigated and is confident this isn't a defect
//                 (requires a `note` explaining why — no PR opened)
//   needs-human — the agent looked at this 3 times and still couldn't tell
//                 either way; stop auto-retrying, a person should look directly
//   closed      — fully resolved (set manually once merged/deployed, or reused
//                 for any other terminal human decision)
//
// Auth: same shared-secret pattern as list-bug-reports.mjs (X-Admin-Key vs
// the BUG_AGENT_ADMIN_KEY env var).

import { getStore } from "@netlify/blobs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type, X-Admin-Key",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const VALID_STATUSES = ["open", "in-review", "not-a-bug", "needs-human", "closed"];
const ESCALATE_AFTER_ATTEMPTS = 3;

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: CORS_HEADERS });
  }

  const adminKey = req.headers.get("x-admin-key");
  if (!process.env.BUG_AGENT_ADMIN_KEY || adminKey !== process.env.BUG_AGENT_ADMIN_KEY) {
    return Response.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  try {
    const body = await req.json();
    const id = body.id;
    if (!id) {
      return Response.json({ error: "id is required" }, { status: 400, headers: CORS_HEADERS });
    }
    if (body.status && VALID_STATUSES.indexOf(body.status) === -1) {
      return Response.json({ error: "invalid status" }, { status: 400, headers: CORS_HEADERS });
    }
    if (body.status === "not-a-bug" && !body.note) {
      return Response.json({ error: "note is required when marking not-a-bug" }, { status: 400, headers: CORS_HEADERS });
    }

    const store = getStore("bug-reports");
    const key = `report_${id}`;
    const existing = await store.get(key, { type: "json" });
    if (!existing) {
      return Response.json({ error: "not found" }, { status: 404, headers: CORS_HEADERS });
    }

    if (body.inconclusive) {
      // The agent looked but couldn't confidently decide either way. Track
      // attempts server-side (not left to the agent's own bookkeeping) so a
      // report can't silently get re-investigated forever.
      existing.attempts = (existing.attempts || 0) + 1;
      existing.status = existing.attempts >= ESCALATE_AFTER_ATTEMPTS ? "needs-human" : "open";
    } else if (body.status) {
      existing.status = body.status;
      if (body.status === "in-review" || body.status === "not-a-bug") {
        existing.attempts = 0; // reached a real outcome, drop the retry counter
      }
    }

    if (body.prUrl) existing.prUrl = String(body.prUrl).slice(0, 500);
    if (body.note) existing.note = String(body.note).slice(0, 1000);
    existing.updatedAt = new Date().toISOString();

    await store.setJSON(key, existing);
    return Response.json({ success: true, report: existing }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("update-bug-report error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
