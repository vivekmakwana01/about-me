import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, CodeIcon, Code, FileText, Zap, Terminal, Cpu, Database } from 'lucide-react';
import SkillCard from './SkillCard';
import type { Project, Skill } from '../types';
import ProjectCard from './ProjectCard';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React', icon: <Code /> },
    { name: 'TypeScript', icon: <FileText /> },
    { name: 'JavaScript', icon: <Zap /> },
    { name: 'Tailwind CSS', icon: <Terminal /> },
    { name: 'Node.js', icon: <Cpu /> },
    { name: 'Python', icon: <Database /> }
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Personal Portfolio',
      description: 'A responsive developer portfolio built using React, Vite, and TailwindCSS.',
      tech: ["React", "Vite", "Tailwind"],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tech: ['React', 'TypeScript', 'Socket.io', 'Express'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div
            className="relative inline-block mb-6"
          >
            {/* Animated Code Icon */}
            <motion.div
              className="inline-block mb-6 relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CodeIcon className="w-10 h-10 text-gray-700 dark:text-gray-200" />
              <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-4 border-white"></div>
            </motion.div>
          </div>

          <h1 className="text-4xl font-bold text-gray-700 dark:text-gray-200 mb-2">Vivek P. Makwana</h1>
          <p className="text-xl text-gray-700 dark:text-gray-200 mb-4">Full Stack Developer</p>

          <div className="flex justify-center items-center space-x-6 text-sm text-gray-700 dark:text-gray-200">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Ahmedabad, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>5+ years experience</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">About Me</h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            I'm a dedicated full-stack developer with over 5 years of professional experience building robust, user-focused web applications using PHP, MySQL, and modern JavaScript tools. I specialize in turning complex business requirements into clean, scalable solutions — and I take pride in writing code that's both maintainable and performant.
          </p>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            When I'm not coding, I'm usually exploring new tech stacks, learning about AI integration, or optimizing developer workflows. I'm driven by curiosity and a strong belief in continuous learning, and I'm actively building a portfolio to level up both technically and professionally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill: Skill, index: number) => (
              <SkillCard key={skill.name} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              <Mail className="w-5 h-5" />
              <span>Hire Me</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;