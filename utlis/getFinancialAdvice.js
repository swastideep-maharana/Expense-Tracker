const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (ensure it's set in .env file)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Get financial advice based on user inputs
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const prompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD
      - Expenses: ${totalSpend} USD
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Generate content using the model
    const result = await model.generateContent({ prompt });

    // Ensure the result object has the expected structure
    const responseText = result.response
      ? result.response.text
      : "No response from AI.";
    console.log(responseText);

    return responseText;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
