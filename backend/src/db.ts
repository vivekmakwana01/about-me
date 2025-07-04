import { Pool } from "pg";

const pool = new Pool({
  host: "postgres-db",
  user: "devuser",
  password: "devpass",
  database: "portfolio",
  port: 5432,
});

export default pool;
