import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { ingredients } = await req.json();

    const prompt = `
You are a helpful recipe generator.

Given the following list of ingredients, generate a JSON array of at least 3 creative recipes.  
If the ingredient list is rich and varied enough to support more recipes, generate up to 5.

Each recipe must be returned as a JSON object in the following format:

{
  "title": "string",
  "time": "string",
  "difficulty": "string",
  "description": "string",
  "ingredients": ["string", "..."],
  "instructions": ["string", "..."],
  "nutrition": {
    "calories": "string",
    "protein": "string",
    "fat": "string",
    "carbs": "string"
  }
}

Respond with a clean JSON array, without any extra text or explanation.

Ingredients: ${ingredients.join(", ")}
`;
    // Call Gemini API
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const result = await geminiRes.json();

    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        {
          error: "Gemini API response did not include valid text",
          raw: result,
        },
        { status: 500 }
      );
    }

    try {
      // Extract JSON inside code block or fallback
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
      const cleanedText = jsonMatch ? jsonMatch[1].trim() : text.trim();

      const recipeJSON = JSON.parse(cleanedText);

      return NextResponse.json({ recipe: recipeJSON });
    } catch (parseError) {
      return NextResponse.json(
        {
          error: "Failed to parse Gemini response",
          raw: text,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to contact Gemini API",
        detail: error.message,
      },
      { status: 500 }
    );
  }
}
