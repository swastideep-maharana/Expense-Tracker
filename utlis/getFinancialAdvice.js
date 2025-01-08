const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ensure API key is loaded
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    "Google Generative AI API key is missing. Check your .env file."
  );
}

const genAI = new GoogleGenerativeAI({ apiKey });

// Use the correct method to initialize the model
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const prompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD
      - Expenses: ${totalSpend} USD
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Use the appropriate method from the library
    const result = await model.generateContent({ prompt });

    // Log the entire result object to inspect its structure
    console.log("Result from AI model:", result);

    // Ensure the result contains valid candidates and is iterable
    if (
      result &&
      Array.isArray(result.candidates) &&
      result.candidates.length > 0
    ) {
      const responseText = result.candidates[0].content;
      console.log("Generated Advice:", responseText);
      return responseText;
    } else {
      throw new Error("No valid response received from the AI model.");
    }
  } catch (error) {
    console.error("Error fetching financial advice:", error.message);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
