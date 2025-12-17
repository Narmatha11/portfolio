import React from 'react';
import Section from './Section';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy } from 'lucide-react';

const Projects: React.FC = () => {
  // Helper to find LinkedIn URL for the Demo button fallback
  const linkedInUrl = SOCIAL_LINKS.find(link => link.platform === "LinkedIn")?.url || "#";

  return (
    <Section id="projects" title="Featured Projects" subtitle="Innovative solutions bridging AI, Backend, and IoT">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10 flex flex-col z-10"
          >
            {/* Top decorative gradient line */}
            <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                   <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.role}</span>
                   <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                    {project.title}
                   </h3>
                </div>
              </div>

              {project.award && (
                <div className="mb-4 flex items-center gap-2 text-yellow-400 text-sm font-medium bg-yellow-400/10 px-3 py-1.5 rounded-lg border border-yellow-400/20">
                  <Trophy className="w-4 h-4" />
                  {project.award}
                </div>
              )}

              <p className="text-slate-400 mb-6 text-sm flex-1">
                {project.description[0]}
              </p>

              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  <a 
                    href={project.link || "#"} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={linkedInUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer z-20"
                  >
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;