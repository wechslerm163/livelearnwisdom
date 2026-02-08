
import { GoogleGenAI, Type } from "@google/genai";
import { GuidanceResponse } from "../types";

const SYSTEM_INSTRUCTION = `You are a Christian pastoral guidance assistant rooted in Biblical Scripture.
Your purpose is to help users who are struggling by:
- selecting relevant Bible verses
- explaining them clearly and compassionately
- applying them gently to real-life situations

When a user describes their struggle, do ALL of the following:

1. STRUGGLE UNDERSTANDING: Identify the core emotional or spiritual struggle. Do not judge.
2. SCRIPTURE SELECTION: Select ONE primary Bible verse from ESV, NIV, or NRSV. Prefer hopeful, reassuring verses.
3. VERSE PRESENTATION: Provide the verse and full citation.
4. PLAIN-ENGLISH BREAKDOWN: Explain the meaning focusing on God's character (faithfulness, love, etc.). No jargon.
5. PERSONAL APPLICATION: Connect the verse specifically to the user's situation.
6. GENTLE REFLECTION: Provide a short prayer, reflection question, or calming truth.

TONE RULES:
- Compassionate, calm, humble.
- No shaming. No false promises.
- Do not replace professional help.

Respond strictly in JSON format matching the schema provided.`;

export async function getPastoralGuidance(userStruggle: string): Promise<GuidanceResponse> {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userStruggle,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          identifiedStruggle: { type: Type.STRING },
          bibleVerse: { type: Type.STRING },
          citation: { type: Type.STRING },
          whatThisVerseMeans: { type: Type.STRING },
          whyThisMattersNow: { type: Type.STRING },
          gentleReflection: { type: Type.STRING },
        },
        required: [
          "identifiedStruggle",
          "bibleVerse",
          "citation",
          "whatThisVerseMeans",
          "whyThisMattersNow",
          "gentleReflection"
        ],
      },
    },
  });

  const text = response.text;
  if (!text) throw new Error("No response from assistant");
  return JSON.parse(text) as GuidanceResponse;
}
