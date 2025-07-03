export interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "Built with React, Vite, and TailwindCSS.",
    tech: ["React", "Vite", "Tailwind"],
    live: "https://your-site.vercel.app",
    github: "https://github.com/your-username/portfolio"
  },
  {
    title: "Task Management App",
    description: "Real-time updates with React, TypeScript, Express, and Socket.io.",
    tech: ["React", "TypeScript", "Socket.io", "Express"],
    live: "https://your-task-app.vercel.app",
    github: "https://github.com/your-username/task-manager"
  }
];