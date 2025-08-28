
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.GOOGLE_GEMINI_KEY) {
    throw new Error("GOOGLE_GEMINI_KEY is not defined in environment variables");
}

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function generateContent(code) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: code,
            systemInstruction: `
                Act as a senior software developer engineer with over 15 years of professional experience. Your primary task is to act as a code reviewer. I will provide you with a code snippet.

Your response must be structured in three distinct sections and make it short and simple :

1.  **Corrected and Optimized Code:** Provide the complete, revised code. This version should be bug-free, more efficient, more readable, and adhere to industry-standard best practices. Add well-placed comments to explain complex logic or significant changes.
2.  **Summary of Changes:** Use a bulleted list to briefly explain the major changes you made to the code. Focus on why the changes were necessary (e.g., "Corrected a logical error in the loop," "Refactored the function for better readability," "Improved performance by replacing a costly operation").
3.  **Further Recommendations:** Offer a few high-level suggestions for improving the code or the surrounding system. This should go beyond the immediate snippet and might include advice on error handling, security, or alternative architectural approaches.

The code I need reviewed is below. Please apply your expertise.

Return answer in same font 
            `
        });
        return response.text; // note: property, not method
    } catch (error) {
        console.error("Error generating content:", error);
        throw new Error("Failed to generate AI response: " + error.message);
    }
}

export default generateContent;
