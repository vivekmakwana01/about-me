export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "Built with React, Vite, and TailwindCSS.",
    tech: ["React", "Vite", "Tailwind"],
    liveUrl: "https://your-site.vercel.app",
    githubUrl: "https://github.com/your-username/portfolio"
  },
  {
    title: "Task Management App",
    description: "Real-time updates with React, TypeScript, Express, and Socket.io.",
    tech: ["React", "TypeScript", "Socket.io", "Express"],
    liveUrl: "https://your-task-app.vercel.app",
    githubUrl: "https://github.com/your-username/task-manager"
  }
];