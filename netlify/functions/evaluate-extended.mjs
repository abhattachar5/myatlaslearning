import { verifyUserId } from "../lib/auth.mjs";

// AI marking for GCSE extended-response answers across Science (6-mark),
// History (12/16-mark) and Geography (9-mark). Mirrors evaluate-comprehension.mjs:
// same auth, CORS, JSON-parsing and defensive clamping; a subject-aware,
// levels-of-response system prompt is assembled per request.

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// Subject-specific marking guidance. Each block teaches the model how the real
// AQA papers award the marks for that question type, so the levels and feedback
// match what a teacher would write.
const SUBJECT_RULES = {
  science: `SUBJECT: GCSE Combined Science (AQA Trilogy 8464). This is an extended-response question (usually 6 marks).
Mark using LEVELS OF RESPONSE, not a point per line:
- Level 3 (5-6): a detailed, coherent, logically linked explanation that uses correct scientific terminology; most of the indicative content is covered and the reasoning is sustained.
- Level 2 (3-4): a clear explanation with some linkage; relevant points but gaps or some loss of logical thread.
- Level 1 (1-2): simple, fragmented statements; some correct knowledge but little or no linkage.
- 0: nothing creditworthy.
Reward correct use of key terms and cause-and-effect chains. A correct but very brief answer caps at Level 2 — depth and linkage move it to Level 3.`,
  history: `SUBJECT: GCSE History (AQA 8145). Apply the level for the question type:
- 12-mark "Explain why / Explain two ..." — assess explanation and supported reasoning (AO1 knowledge + AO2 explanation): Level 4 (10-12) analytical, well-supported, sustained explanation; Level 3 (7-9) developed explanation with accurate detail; Level 2 (4-6) some explanation, limited support; Level 1 (1-3) basic, general, little accurate detail.
- 16-mark essay ("How far do you agree?") — assess a sustained, balanced argument reaching a justified judgement (AO1 + AO2): Level 4 (13-16) sustained, well-supported, evaluative judgement considering both sides; Level 3 (9-12) developed analysis of more than one factor with some judgement; Level 2 (5-8) some analysis, mostly description; Level 1 (1-4) basic, descriptive, unsupported.
Reward SPECIFIC, accurate historical detail (names, dates, events). Generic assertion without evidence stays in the lower levels. Credit a clear line of argument and a supported judgement.`,
  geography: `SUBJECT: GCSE Geography (AQA 8035). This is an extended-response question (usually 9 marks), assessing AO1 knowledge, AO2 application/understanding and AO3 evaluation.
Mark using LEVELS OF RESPONSE:
- Level 3 (7-9): detailed, accurate knowledge applied to the question with clear evaluation/conclusion; named place/case-study detail used to support; balanced and well-developed.
- Level 2 (4-6): some accurate knowledge and application, partial evaluation; case-study detail thin or general.
- Level 1 (1-3): basic, generalised points; little application or evaluation; no specific place detail.
- 0: nothing creditworthy.
For 9-mark questions reward SPECIFIC named-example/case-study evidence and a clear judgement that answers the command word (assess / evaluate / "to what extent"). SPaG is also assessed — note clarity and accuracy in feedback.`,
};

const SUBJECT_LABEL = { science: "Science", history: "History", geography: "Geography" };

export default async (req) => {
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

  const { subject, year, question, marks, command, indicative, response } = body;
  const rules = SUBJECT_RULES[subject];
  if (!rules || !question || !response) {
    return Response.json({ error: "Missing subject, question or response" }, { status: 400, headers: CORS_HEADERS });
  }
  const max = Math.max(1, Math.min(20, parseInt(marks, 10) || 6));
  if (response.length > 6000) {
    return Response.json({ error: "Response too long (max 6000 characters)" }, { status: 400, headers: CORS_HEADERS });
  }

  const indicativeBlock = Array.isArray(indicative) && indicative.length
    ? `\n\nINDICATIVE CONTENT (a strong answer might include some of these — students need not include all; credit any other valid, relevant point):\n- ${indicative.slice(0, 12).join("\n- ")}`
    : "";

  const systemPrompt =
    `You are a fair, encouraging GCSE examiner marking a UK ${year || "Year 11"} student's extended-response answer. ` +
    `${rules}\n\n` +
    `Marking principles: reward what the student HAS done; be realistic for a 14-16 year old; be generous within reason but accurate to the level descriptors; never exceed the maximum mark. ` +
    `Identify the level the answer reaches and award a whole-number mark within that level's range.\n\n` +
    `Respond ONLY with valid JSON in EXACTLY this shape:\n` +
    `{\n` +
    `  "marks": <int 0..${max}>,\n` +
    `  "max": ${max},\n` +
    `  "level": "<e.g. 'Level 2' or 'Level 3' — the band the answer reached>",\n` +
    `  "www": ["1-2 short 'What went well' points; quote the student where possible"],\n` +
    `  "ebi": ["2-3 short, specific, actionable 'Even better if' points that would move the answer up a level"],\n` +
    `  "overall": "<2-3 sentence encouraging summary naming the single most important next step>"\n` +
    `}`;

  const userMessage =
    `SUBJECT: ${SUBJECT_LABEL[subject]}\n` +
    `QUESTION (${max} marks${command ? ", command word: " + command : ""}): ${question}` +
    indicativeBlock +
    `\n\nSTUDENT ANSWER:\n${response}`;

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
        max_tokens: 1536,
        system: systemPrompt,
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

    // Defensive clamping — never trust the model's arithmetic blindly.
    feedback.max = max;
    let m = Number(feedback.marks);
    if (!isFinite(m) || m < 0) m = 0;
    if (m > max) m = max;
    feedback.marks = Math.round(m);
    if (typeof feedback.level !== "string") feedback.level = "";
    if (!Array.isArray(feedback.www)) feedback.www = [];
    if (!Array.isArray(feedback.ebi)) feedback.ebi = [];
    if (typeof feedback.overall !== "string") feedback.overall = "";

    return Response.json({ success: true, feedback }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("evaluate-extended error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
