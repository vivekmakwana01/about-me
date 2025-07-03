export interface Skill {
  name: string;
  icon?: React.ReactNode;
}

export interface SkillCardProps {
  skill: {
    name: string;
    icon?: React.ReactNode; // optional emoji or icon
  };
  delay?: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
  delay?: number;
}