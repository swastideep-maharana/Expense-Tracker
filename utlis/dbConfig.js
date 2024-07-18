import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const sql = neon(
  "postgresql://FinanceSmart_owner:JCuqP6fWn8FV@ep-rough-fire-a58pgmgu.us-east-2.aws.neon.tech/FinanceSmart?sslmode=require"
);

export const db = drizzle(sql, { schema });
