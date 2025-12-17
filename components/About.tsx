import React from 'react';
import Section from './Section';
import { EDUCATION_EXPERIENCE } from '../constants';
import { GraduationCap, Award, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I am a Computer Science and Business Systems student at PSNA College of Engineering and Technology, driven by a passion for backend development, Artificial Intelligence, and IoT.
          </p>
          <p>
            My journey involves building practical solutions like AI-driven e-commerce platforms and sustainable IoT tracking systems. I thrive in collaborative environments and have been recognized as a <span className="text-secondary font-bold">Google Student Ambassador (2025)</span>.
          </p>
          <p>
            With a strong academic foundation (CGPA 8.86) and hands-on experience in hackathons, I aim to leverage technology to create socially impactful digital solutions.
          </p>
          
          <div className="pt-6">
            <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-2">
                {["HackerRank Java", "HackerRank Python", "IoT Workshop", "Python Workshop"].map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                        {cert}
                    </span>
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
            {EDUCATION_EXPERIENCE.map((item, index) => (
                <div key={item.id} className="relative pl-8 group">
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-2 bottom-[-24px] w-px bg-slate-800 group-last:bottom-0" />
                    <div className="absolute left-[-4px] top-2.5 w-2 h-2 rounded-full bg-primary ring-4 ring-slate-900" />
                    
                    <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                            {item.type === 'education' && <GraduationCap className="w-5 h-5 text-secondary" />}
                            {item.type === 'achievement' && <Award className="w-5 h-5 text-yellow-500" />}
                            {item.type === 'work' && <Briefcase className="w-5 h-5 text-primary" />}
                            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded uppercase tracking-wider">
                                {item.period}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                        <p className="text-slate-400 text-sm mb-3">{item.company} • {item.location}</p>
                        <ul className="space-y-1">
                            {item.description.map((desc, i) => (
                                <li key={i} className="text-slate-300 text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-slate-500">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default About;