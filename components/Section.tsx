import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;