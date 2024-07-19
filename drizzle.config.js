export default {
  dialect: "postgresql",
  schema: "./utlis/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
