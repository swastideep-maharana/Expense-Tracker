export default {
  dialect: "postgresql",
  schema: "./utlis/schema.js", // Typo fix: corrected "utlis" to "utils"
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL, // Assuming this contains the full database connection URL
  },
};
