// const GEMINI_API_KEY = "AIzaSyCpArcTrll3NJ_IiDAmvTjSGF6-1mzBaBc";

// // To run this code you need to install the following dependencies:
// // npm install @google/genai mime
// // npm install -D @types/node

// import { GoogleGenAI } from "@google/genai";

// async function main() {
//   const ai = new GoogleGenAI({
//     apiKey: process.env.GEMINI_API_KEY,
//   });
//   const tools = [
//     {
//       googleSearch: {},
//     },
//   ];
//   const config = {
//     thinkingConfig: {
//       thinkingBudget: -1,
//     },
//     tools,
//     responseMimeType: "text/plain",
//   };
//   const model = "gemini-2.5-pro";
//   const contents = [
//     {
//       role: "user",
//       parts: [
//         {
//           text: `INSERT_INPUT_HERE`,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
//   let fileIndex = 0;
//   for await (const chunk of response) {
//     console.log(chunk.text);
//   }
// }

// main();


// src/server/geminiApi.js
// No type annotations needed for dotenv or CommonJS module syntax

require("dotenv").config(); // Install dotenv: npm install dotenv
const { GoogleGenerativeAI } = require("@google/generative-ai"); // Use require for CommonJS modules

const API_KEY = "AIzaSyCpArcTrll3NJ_IiDAmvTjSGF6-1mzBaBc";

if (!API_KEY) {
  console.error("GEMINI_API_KEY is not set in your environment variables.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContentWithGemini(prompt, modelName = "gemini-2.5-pro") {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}

export default generateContentWithGemini; // Export for CommonJS
