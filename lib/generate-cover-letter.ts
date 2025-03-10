"use server"

import { generateText } from "ai"
import { mistral } from "@ai-sdk/mistral"
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.MISTRAL_API_KEY;

if (!apiKey) {
  throw new Error("MISTRAL_API_KEY is not defined in environment variables.");
}

export async function generateCoverLetter(
  cvText: string,
  jobDescription: string,
  name?: string,
  email?: string,
  phone?: string,
): Promise<string> {
  try {
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    const contactInfo = [name ? `${name}` : "", email ? `${email}` : "", phone ? `${phone}` : ""]
      .filter(Boolean)
      .join("\n")

    const prompt = `
You are an expert in writing professional cover letters. Create a personalized cover letter based on the following CV and job description.

CV/RESUME:
${cvText}

JOB DESCRIPTION:
${jobDescription}

${contactInfo ? `CONTACT INFORMATION:\n${contactInfo}` : ""}

Please write a professional cover letter that:
1. Addresses the specific requirements in the job description
2. Highlights relevant skills and experiences from the CV
3. Shows enthusiasm for the role and company
4. Is concise (3-4 paragraphs)
5. Has a professional tone
6. Includes today's date (${currentDate}) at the top
7. Includes a proper greeting, body, and closing
8. Does not include placeholder text that needs to be filled in

Format the letter properly with date, greeting, body paragraphs, and a professional closing.
`

    const { text } = await generateText({
      model: mistral("mistral-large-latest"),
      apiKey,
      prompt: prompt,
      temperature: 0.7,
      maxTokens: 1000,
      system: "You are an expert cover letter writer who creates personalized, professional cover letters.",
    })

    return text || "Failed to generate cover letter. Please try again."
  } catch (error) {
    console.error("Error generating cover letter:", error)
    throw new Error("Failed to generate cover letter")
  }
}

