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