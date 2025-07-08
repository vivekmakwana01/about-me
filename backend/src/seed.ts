import pool from "./db";

const seedProjects = async () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Responsive dev portfolio built with React, Vite, Tailwind.",
      tech: ["React", "Typescript", "Tailwind"],
      live: "https://your-portfolio.vercel.app",
      github: "https://github.com/vivekmakwana01/about-me"
    },
    {
      title: "Volume Step Indicator",
      description: "A minimal Android utility that displays a floating overlay when volume keys are pressed, showing current volume in a system-wide overlay.",
      tech: ["Android", "Kotlin"],
      live: "https://volume-step-indicator.vercel.app",
      github: "https://github.com/vivekmakwana01/volume-step-indicator"
    },
    {
      title: "PHP Inlline Sql Formatter (VSCode)",
      description: "A lightweight Visual Studio Code extension that formats SQL queries inside PHP string assignments.",
      tech: ["Typescript", "VSCode"],
      live: "https://php-inline-sql-formatter.vercel.app",
      github: "https://github.com/vivekmakwana01/php-inline-sql-formatter"
    },
    {
      title: "Document Extraction API",
      description: "This application uses Google's Gemini API to extract structured data from invoices and shipping documents (CMRs).",
      tech: ["Python", "Google Gemini"],
      live: "https://php-inline-sql-formatter.vercel.app",
      github: "https://github.com/vivekmakwana01/Data-Extract"
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
