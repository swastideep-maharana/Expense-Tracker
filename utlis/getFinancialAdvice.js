const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
//   try {
//     const userPrompt = `
//       Based on the following financial data:
//       - Total Budget: ${totalBudget} USD
//       - Expenses: ${totalSpend} USD
//       - Incomes: ${totalIncome} USD
//       Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
//     `;

//     // Send the prompt to the OpenAI API
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: [{ role: "user", content: userPrompt }],
//     });

//     // Process and return the response
//     const advice = chatCompletion.choices[0].message.content.trim();

//     console.log(advice);
//     return advice;
//   } catch (error) {
//     console.error("Error fetching financial advice:", error);
//     return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
//   }
// };

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const prompt = `
            Based on the following financial data:
             - Total Budget: ${totalBudget} USD 
             - Expenses: ${totalSpend} USD 
             - Incomes: ${totalIncome} USD
             Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
           `;

    const result = await model.generateContent(prompt);
    const response =  result.response;
    const text = response.text();
    console.log(text);
    return text;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
