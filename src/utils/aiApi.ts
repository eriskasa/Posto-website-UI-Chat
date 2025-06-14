import axios from "axios";

export const fetchAIResponse = async (query: string): Promise<string> => {
  console.log("Received query:", query);
  return `This is a mock response for your input: "${query}"`;
};
