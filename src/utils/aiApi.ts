import axios from "axios";


const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const API_BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;


export const fetchAIResponse = async (query: string): Promise<string> => {
  try {
    console.log("Sending request with query:", query);

    const payload = {
      contents: [
        {
          parts: [
            {
              text: query, // User's input
            },
          ],
        },
      ],
    };

    const response = await axios.post(API_BASE_URL, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("API Response:", response.data);

    // Extract the response text
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    throw new Error("Failed to fetch AI response");
  }
};
