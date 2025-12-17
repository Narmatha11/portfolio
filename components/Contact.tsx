import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-900/50">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 md:p-12 overflow-hidden relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-20">
          <div>
            <h2 className="text-3xl font-bold font-heading text-white mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8">
              I'm actively looking for opportunities in Backend Development, AI, and IoT. 
              Feel free to reach out for collaborations or just a friendly hello!
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:m.narmatha23cb@psnacet.edu.in" 
                className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group cursor-pointer relative z-30"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary/20">
                  <Mail className="w-5 h-5" />
                </div>
                m.narmatha23cb@psnacet.edu.in
              </a>
              <a 
                href="tel:+918015791252" 
                className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors group cursor-pointer relative z-30"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-primary/20">
                  <Phone className="w-5 h-5" />
                </div>
                +91 80157 91252
              </a>
              <div className="flex items-center gap-4 text-slate-300 group">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                Dindigul, India
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-700/50 relative z-20">
                <p className="text-slate-400 italic mb-4">
                  "I aim to use my skills to build useful and socially impactful digital solutions."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">N</div>
                    <div>
                        <div className="text-white font-bold">Narmatha M</div>
                        <div className="text-xs text-slate-500">Google Student Ambassador</div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-8 md:mt-0 justify-end">
               {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all relative z-30 cursor-pointer"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
               ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-slate-600 text-sm mt-12 relative z-10">
        © {new Date().getFullYear()} Narmatha M. All rights reserved.
      </div>
    </Section>
  );
};

export default Contact;