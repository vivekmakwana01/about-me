import pool from "./db";

const seedProjects = async () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Responsive dev portfolio built with React, Vite, Tailwind.",
      tech: ["React", "Vite", "Tailwind"],
      live: "https://your-portfolio.vercel.app",
      github: "https://github.com/your-username/portfolio"
    },
    {
      title: "Task Manager App",
      description: "Real-time app using React, Fastify, and WebSockets.",
      tech: ["React", "Fastify", "WebSocket"],
      live: "https://task-app.vercel.app",
      github: "https://github.com/your-username/task-manager"
    }
  ];

  try {
    await pool.query("DELETE FROM projects"); // Clear existing
    for (const project of projects) {
      await pool.query(
        `INSERT INTO projects (title, description, tech, live, github)
         VALUES ($1, $2, $3, $4, $5)`,
        [project.title, project.description, project.tech, project.live, project.github]
      );
    }
    console.log("✅ Seeded successfully");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await pool.end();
  }
};

seedProjects();
