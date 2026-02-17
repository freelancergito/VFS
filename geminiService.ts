
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getVisaAssistantResponse = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are a helpful visa assistant for GlobalVisa (inspired by VFS Global). 
        You answer questions about visa requirements, tracking applications, and general travel document inquiries. 
        Keep your tone professional, authoritative, but friendly. 
        If asked for status tracking, tell the user to provide a reference number starting with "REF-". 
        If they provide one, mock a response saying "We've received your application and it is currently being processed by the embassy."`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};

export const checkVisaStatusMock = async (ref: string) => {
  // Simulating a more complex logic that could be AI-driven or DB-driven
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Check status for reference: ${ref}`,
    config: {
        systemInstruction: "You are a visa status system. Return a short, realistic status update for any reference number provided.",
        maxOutputTokens: 100,
    }
  });
  return response.text;
};
