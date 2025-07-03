import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { ProjectCardProps } from "../types";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300"
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-800 dark:bg-white text-gray-100 dark:text-gray-900 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-center gap-6 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 text-sm font-medium transition"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
