const { GoogleGenerativeAI } = require("@google/generative-ai");

// Ensure API key is loaded correctly
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
if (!apiKey) {
  throw new Error(
    "Google Generative AI API key is missing. Check your .env file."
  );
}

const genAI = new GoogleGenerativeAI({ apiKey });
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

    const result = await model.generateMessage({ prompt });
    const responseText =
      result?.candidates?.[0]?.content || "No response from AI.";
    console.log(responseText);

    return responseText;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
