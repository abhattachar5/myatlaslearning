// report-bug.mjs — Accepts a bug report from a logged-in user and stores it in
// the "bug-reports" Blobs store. Each report gets its own key (report_<id>) so
// concurrent submissions never race on a read-modify-write of a shared list.
//
// Read back by list-bug-reports.mjs (admin-only) and updated by
// update-bug-report.mjs once the scheduled fix agent has opened a PR for it.

import { getStore } from "@netlify/blobs";
import { verifyUserId } from "../lib/auth.mjs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function clip(v, max) {
  return (v === undefined || v === null) ? "" : String(v).slice(0, max);
}

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: CORS_HEADERS });
  }

  const userId = await verifyUserId(req.headers.get("authorization"));
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  try {
    const body = await req.json();
    const description = clip(body.description, 2000).trim();
    if (!description) {
      return Response.json({ error: "description is required" }, { status: 400, headers: CORS_HEADERS });
    }

    const id = Date.now() + "_" + Math.random().toString(36).slice(2, 8);
    const report = {
      id,
      status: "open",
      createdAt: new Date().toISOString(),
      userId,
      page: clip(body.page, 300),
      islandId: clip(body.islandId, 100),
      questionText: clip(body.questionText, 2000),
      selectedOption: clip(body.selectedOption, 500),
      correctOption: clip(body.correctOption, 500),
      explanation: clip(body.explanation, 2000),
      description,
    };

    const store = getStore("bug-reports");
    await store.setJSON(`report_${id}`, report);

    return Response.json({ success: true, id }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("report-bug error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
