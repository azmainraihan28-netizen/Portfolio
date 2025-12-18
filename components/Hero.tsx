
import React from 'react';
import { ArrowRight, Zap, Bot, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkflowVisualizer from './WorkflowVisualizer';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-blob opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 animate-blob opacity-30 animation-delay-2000" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: Content */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary text-[10px] font-mono mb-8 tracking-widest uppercase shadow-sm">
                <Sparkles className="w-3 h-3" />
                <span>Next-Gen AI Automation</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-8">
                Automate Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-secondary">
                  Business Future
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
                I build intelligent automation ecosystems using <strong>n8n</strong>, <strong>Make</strong>, and <strong>Gemini AI</strong> that reclaim 40+ hours of your team's time every single week.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#portfolio" 
                  onClick={(e) => handleScroll(e, 'portfolio')}
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-white bg-slate-900 dark:bg-primary rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="inline-flex items-center justify-center px-8 py-4 font-display font-bold text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all hover:border-primary/50"
                >
                  Book a Strategy Call
                </a>
              </div>

              {/* Trust markers */}
              <div className="mt-12 flex flex-wrap items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-mono font-bold">n8n Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span className="text-sm font-mono font-bold">AI Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-emerald-500 rounded-sm" />
                  <span className="text-sm font-mono font-bold">Make Partner</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visualizer */}
          <div className="w-full lg:w-1/2 relative group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10 blur-2xl opacity-50" />
              <WorkflowVisualizer />
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">System Online</span>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-6 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl z-20 hidden md:block"
              >
                <div className="text-center">
                  <span className="block text-2xl font-bold text-primary">99.9%</span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">Uptime Rate</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
