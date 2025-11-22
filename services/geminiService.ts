import { GoogleGenAI } from "@google/genai";

// Initialize API Client
// Note: In a real production build, ensure process.env.API_KEY is set.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are "NexBot", the AI portfolio assistant for an automation expert. 
Your goal is to answer questions about the services, skills, and projects featured on this portfolio website.
The expert specializes in n8n, Make.com, Zapier, and AI integration using Google Gemini and OpenAI.
Keep answers concise, professional, yet innovative and friendly.
If asked to book a call, suggest they use the contact form below or the "Book Consultation" button.
Do not make up projects not listed on the site, but speak generally about capabilities in automation, RAG, and API integrations.
`;

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  try {
    if (!apiKey) {
      return "AI capabilities are currently in demo mode (API Key missing). Please contact the developer.";
    }

    // Using the requested gemini-3-pro-preview model
    const chat = ai.chats.create({
      model: 'gemini-3-pro-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      })),
    });

    const result = await chat.sendMessage({ message });
    return result.text;

  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently experiencing a high volume of requests. Please try again later or use the contact form.";
  }
};