import React from 'react';
import { motion } from 'framer-motion';
import type { SkillCardProps } from '../types';

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-2">
        {skill.icon && <div className="text-3xl text-gray-700">{skill.icon}</div>}
        <h3 className="text-lg font-medium text-gray-800">{skill.name}</h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;
