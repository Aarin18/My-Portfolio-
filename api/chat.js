const MAX_QUERY_LENGTH = 300;
const GEMINI_ENDPOINT =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";

const SYSTEM_INSTRUCTION = `Name: Arin Patel
Education: B.Tech, AI & ML, Parul University, Vadodara. 2nd year, 3rd semester. CGPA 7.46.
Location: Kosamba, Surat, Gujarat, India.

Projects:
1. ProjectMentor AI - feasibility/mentoring tool, Gemini API, Node.js/Express backend, vanilla JS frontend. Live: https://aarin18.github.io/ProjectMentorAI/
2. CivicOS - municipal incident platform for SIH 2026. My role: Mobile Lead (Expo/React Native, camera/GPS, gamification UI), 6-person team.
3. ChatApp - real-time chat, room codes, WebSockets (ws), Node.js. Live: https://aarin18.github.io/chatApp/

Skills: Python, Java, C, C++, JavaScript, HTML, CSS, TensorFlow, PyTorch, React, Node.js, Express, Git, GitHub.
Coding: 110 problems solved on LeetCode (leetcode.com/u/Aarin1), rank ~1,539,110. 355 GitHub contributions, 9-day current streak.
Certifications: Claude 101, Claude Platform 101, Claude Code 101 (Anthropic); HTML and CSS (Certiport/Pearson VUE); Python Assessment - Professional (SkillUprise); Red Hat System Administration I - attendance only, not a pass/fail exam (Red Hat).
Leadership: Social Media Chair, Rotaract Club of Tarsadi Kosamba, 2+ years, RI District 3060.
Goal: AI/ML Engineer and Software Developer, open to internships.

Only answer using these facts. If asked something not covered (salary, availability, personal contact beyond what is public), say you are not sure and point to the Contact section or resume. Keep answers to 2-4 sentences.`;

module.exports = async function chatHandler(request, response) {
  try {
    if (request.method !== "POST") {
      return response.status(405).json({ error: "Method not allowed" });
    }

    const query = request.body && request.body.query;
    if (typeof query !== "string" || !query.trim()) {
      return response.status(400).json({ error: "A query is required" });
    }
    if (query.length > MAX_QUERY_LENGTH) {
      return response.status(413).json({ error: "Query exceeds 300 characters" });
    }
    if (!process.env.GEMINI_API_KEY) {
      return response.status(500).json({
        reply: "Having trouble reaching the instrument right now.",
      });
    }

    const geminiResponse = await fetch(
      `${GEMINI_ENDPOINT}?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_INSTRUCTION }] },
          contents: [{ role: "user", parts: [{ text: query.trim() }] }],
          generationConfig: { maxOutputTokens: 400 },
        }),
      },
    );

    if (!geminiResponse.ok) {
      throw new Error(`Gemini request failed with status ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();
    const parts = data.candidates?.[0]?.content?.parts;
    const reply = Array.isArray(parts)
      ? parts
          .filter((part) => typeof part?.text === "string")
          .map((part) => part.text)
          .join("")
          .trim()
      : "";

    if (!reply) {
      throw new Error("Gemini response did not contain candidate text");
    }

    return response.status(200).json({ reply });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      reply: "Having trouble reaching the instrument right now.",
    });
  }
};