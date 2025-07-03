import express, { Request, Response } from "express";
import cors from "cors";
import { projects } from "./data/projects";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/projects", (_req: Request, res: Response) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
