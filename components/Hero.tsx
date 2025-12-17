import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Brain, Cpu, Database, Wifi, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-secondary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Open to Work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
              Narmatha M
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg">
            Backend Developer, AI Enthusiast, and IoT Innovator. 
            Google Student Ambassador 2025. Building scalable solutions that bridge software and hardware.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-8 py-3 bg-primary hover:bg-indigo-600 text-white rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary/25 cursor-pointer z-30"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="tel:+918015791252"
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 cursor-pointer z-30"
            >
              <Phone className="w-4 h-4" /> Contact Me
            </a>
          </div>

          <div className="flex gap-4 pt-8 border-t border-slate-800/50">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors relative z-30 cursor-pointer"
                title={link.platform}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Updated Right Side Visual - Floating Cards Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center h-[500px]"
        >
          <div className="relative w-full max-w-md h-full flex items-center justify-center">
             
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-[60px]" />

            {/* Central Card: Backend */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-20 w-64 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl shadow-2xl shadow-black/50"
            >
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Backend Core</h3>
              <p className="text-xs text-slate-400 mb-4">Scalable Architecture</p>
              
              <div className="space-y-3">
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "90%" }} className="h-full bg-indigo-500 rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>API</span>
                  <span>98%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                   <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} className="h-full bg-indigo-400 rounded-full" />
                </div>
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>DB</span>
                  <span>OPTIMIZED</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Card Top Right: AI */}
            <motion.div 
              animate={{ y: [15, -15, 15], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-12 -right-4 z-10 w-48 bg-slate-800/80 backdrop-blur-xl border border-slate-600/50 p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-500/20 rounded-md text-purple-400">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">AI Models</div>
                  <div className="text-[10px] text-slate-400">LLM Integration</div>
                </div>
              </div>
              <div className="flex gap-1">
                 <div className="h-1 w-1 rounded-full bg-purple-400 animate-pulse" />
                 <div className="h-1 w-1 rounded-full bg-purple-400 animate-pulse delay-75" />
                 <div className="h-1 w-1 rounded-full bg-purple-400 animate-pulse delay-150" />
              </div>
            </motion.div>

            {/* Floating Card Bottom Left: IoT */}
            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-8 z-30 w-52 bg-slate-800/90 backdrop-blur-xl border border-teal-500/30 p-4 rounded-xl shadow-xl"
            >
              <div className="flex items-start justify-between mb-2">
                 <div className="p-2 bg-teal-500/20 rounded-md text-teal-400">
                    <Cpu className="w-5 h-5" />
                 </div>
                 <div className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 flex items-center gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                   ONLINE
                 </div>
              </div>
              <div className="text-sm font-bold text-white mb-1">IoT Systems</div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="bg-slate-900/50 p-2 rounded text-center border border-slate-700">
                     <Wifi className="w-3 h-3 text-slate-400 mx-auto mb-1" />
                     <span className="text-[10px] text-slate-300">Connected</span>
                  </div>
                  <div className="bg-slate-900/50 p-2 rounded text-center border border-slate-700">
                     <Database className="w-3 h-3 text-slate-400 mx-auto mb-1" />
                     <span className="text-[10px] text-slate-300">Logging</span>
                  </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;