import React from 'react';
import Section from './Section';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section id="skills" title="Technical Skills" subtitle="My technical toolkit and areas of expertise">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {SKILL_CATEGORIES.map((category) => (
          <motion.div 
            key={category.title}
            variants={item}
            className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:bg-slate-800/60 transition-all group"
          >
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-700">
              <category.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-sm bg-slate-900/50 border border-slate-700/50 text-slate-300 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Skills;