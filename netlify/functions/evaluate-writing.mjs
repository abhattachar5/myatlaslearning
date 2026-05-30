import { verifyUserId } from "../lib/auth.mjs";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are a friendly, encouraging GCSE English teacher marking a Year 7 student's writing.

You will receive:
- A writing PROMPT that was given to the student
- The student's RESPONSE

Evaluate the writing against these six criteria, each scored 1-4:
1. Planning & Organisation — clear structure, topic sentences, logical paragraph order
2. Argumentative Writing — clear thesis, evidence, counter-arguments, persuasive devices (if applicable to the prompt)
3. Creative Writing Techniques — show don't tell, sensory language, dialogue, varied sentences (if applicable to the prompt)
4. Editing & Proofreading — spelling, grammar, punctuation, sentence variety, conciseness
5. Research & Referencing — use of evidence, source attribution, paraphrasing (if applicable to the prompt)
6. Transitions & Conjunctive Adverbs — linking words, conjunctive adverbs, correct punctuation of transitions

Score guide: 1 = needs significant work, 2 = developing, 3 = good, 4 = excellent.

Only score criteria that are relevant to the prompt. For irrelevant criteria, set the score to null.

Respond ONLY with valid JSON in this exact format:
{
  "scores": {
    "planning": <1-4 or null>,
    "argument": <1-4 or null>,
    "creative": <1-4 or null>,
    "editing": <1-4 or null>,
    "research": <1-4 or null>,
    "transitions": <1-4 or null>
  },
  "strengths": ["<strength 1>", "<strength 2>"],
  "improvements": ["<improvement 1>", "<improvement 2>", "<improvement 3>"],
  "overall": "<2-3 sentence encouraging summary with specific praise and one key next step>"
}

Be specific — quote words or phrases from the student's writing in your feedback. Be encouraging but honest. Remember they are 11-12 years old.`;

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

  const apiKey = Netlify.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    return Response.json({ error: "AI evaluation not configured" }, { status: 503, headers: CORS_HEADERS });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400, headers: CORS_HEADERS });
  }

  const { prompt, response, year } = body;
  if (!prompt || !response) {
    return Response.json({ error: "Missing prompt or response" }, { status: 400, headers: CORS_HEADERS });
  }
  const level = year === "Year 8" ? "Year 8" : "Year 7";
  const systemPrompt = SYSTEM_PROMPT
    .replace(/Year 7/g, level)
    .replace(/11-12 years old/g, level === "Year 8" ? "12-13 years old" : "11-12 years old");

  if (response.length > 5000) {
    return Response.json({ error: "Response too long (max 5000 characters)" }, { status: 400, headers: CORS_HEADERS });
  }

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
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: "user",
            content: `PROMPT:\n${prompt}\n\nSTUDENT RESPONSE:\n${response}`,
          },
        ],
      }),
    });

    if (!apiResponse.ok) {
      const errText = await apiResponse.text();
      console.error("Anthropic API error:", apiResponse.status, errText);
      return Response.json({ error: "AI evaluation failed" }, { status: 502, headers: CORS_HEADERS });
    }

    const apiResult = await apiResponse.json();
    let text = apiResult.content?.[0]?.text || "";

    // Strip markdown code fences if present
    text = text.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();

    let feedback;
    try {
      feedback = JSON.parse(text);
    } catch {
      // Try extracting JSON from within the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          feedback = JSON.parse(jsonMatch[0]);
        } catch {
          console.error("Failed to parse AI response:", text);
          return Response.json({ error: "AI returned invalid feedback" }, { status: 502, headers: CORS_HEADERS });
        }
      } else {
        console.error("No JSON found in AI response:", text);
        return Response.json({ error: "AI returned invalid feedback" }, { status: 502, headers: CORS_HEADERS });
      }
    }

    return Response.json({ success: true, feedback }, { headers: CORS_HEADERS });
  } catch (err) {
    console.error("evaluate-writing error:", err);
    return Response.json({ error: "Internal server error" }, { status: 500, headers: CORS_HEADERS });
  }
};
