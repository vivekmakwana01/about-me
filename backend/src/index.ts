import express, { Request, Response } from "express";
import cors from "cors";
import pool from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/projects", async (_req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM projects");
    res.json(result.rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch projects" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
