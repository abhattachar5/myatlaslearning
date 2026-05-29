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
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are a fair, encouraging GCSE English examiner marking a UK Year 8 student's WRITTEN reading-comprehension answers.

You will receive:
- The PASSAGE the questions are based on.
- A numbered list of QUESTIONS. Each question has: the question text, its maximum MARKS, a MARK SCHEME / indicative content, and the student's ANSWER.

For EACH question, award a whole-number mark from 0 to its maximum, using the mark scheme. Marking principles:
- Reward what the student HAS done; never penalise for missing content beyond the max.
- Short retrieval questions: award a mark per valid point, capped at the max.
- Language/structure/evaluation questions: use a levels-based judgement — reference to the text + identification of method + explanation of effect earns higher marks; vague or unsupported answers earn lower marks. A blank or off-topic answer scores 0.
- Be realistic for a 12–13 year old. Be generous within reason but accurate.

For each question give:
- "marks": the whole-number mark awarded (0..max)
- "max": the maximum marks
- "www": 1–2 short "What went well" points (quote the student where possible)
- "ebi": 1–2 short "Even better if" points (specific, actionable)

Respond ONLY with valid JSON in EXACTLY this shape (results array in the SAME ORDER as the questions):
{
  "results": [
    { "marks": <int>, "max": <int>, "www": ["..."], "ebi": ["..."] }
  ],
  "overall": "<2-3 sentence encouraging summary with one key next step>"
}`;

export default async (req, context) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405, headers: CORS_HEADERS });
  }

  const userId = getUserIdFromToken(req.headers.get("authorization"));
  if (!userId) {
    return Response.json({ error: "Unauthorized" }, { status: 401, headers: CORS_HEADERS });
  }

  const apiKey = Netlify.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    return Response.json({ error: "AI marking not configured" }, { status: 503, headers: CORS_HEADERS });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400, headers: CORS_HEADERS });
  }

  const { passageTitle, passageText, items } = body;
  if (!passageText || !Array.isArray(items) || items.length === 0) {
    return Response.json({ error: "Missing passage or items" }, { status: 400, headers: CORS_HEADERS });
  }
  if (passageText.length > 8000) {
    return Response.json({ error: "Passage too long" }, { status: 400, headers: CORS_HEADERS });
  }

  // Build the user message
  let qBlock = "";
  items.forEach((it, i) => {
    const resp = (it.response || "").slice(0, 2500);
    qBlock +=
      `\n--- QUESTION ${i + 1} (${it.marks} marks) ---\n` +
      `QUESTION: ${it.q}\n` +
      `MARK SCHEME: ${it.guidance || "Use professional judgement."}\n` +
      `STUDENT ANSWER: ${resp || "(no answer given)"}\n`;
  });

  const userMessage =
    `PASSAGE TITLE: ${passageTitle || "Untitled"}\n\nPASSAGE:\n${passageText}\n\n` +
    `Mark the following ${items.length} answers. Return results in the same order.\n${qBlock}`;

  try {
    const apiResponse = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 2048,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!apiResponse.ok) {
      const errText = await apiResponse.text();
      console.error("Anthropic API error:", apiResponse.status, errText);
      return Response.json({ error: "AI marking failed" }, { status: 502, headers: CORS_HEADERS });
    }

    const apiResult = await apiResponse.json();
    let text = apiResult.content?.[0]?.text || "";
    text = text.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();

    let feedback;
    try {
      feedback = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try { feedback = JSON.parse(jsonMatch[0]); }
        catch { return Response.json({ error: "AI returned invalid feedback" }, { status: 502, headers: CORS_HEADERS }); }
      } else {
        return Response.json({ error: "AI returned invalid feedback" }, { status: 502, headers: CORS_HEADERS });
      }
    }

    // Clamp marks to [0, max] defensively
    if (Array.isArray(feedback.results)) {
      feedback.results.forEach((r, i) => {
        const max = items[i] ? items[i].marks : (r.max || 0);
        r.max = max;
        let m = Number(r.marks);
        if (!isFinite(m) || m < 0) m = 0;
        if (m > max) m = max;
        r.marks = Math.round(m);
        if (!Array.isArray(r.www)) r.www = [];
        if (!Array.isArray(r.ebi)) r.ebi = [];
      });
    }

    return Response.json({ success: true, feedback }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("evaluate-comprehension error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
