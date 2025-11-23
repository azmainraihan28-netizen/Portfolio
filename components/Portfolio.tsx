import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const stepStyles = [
    {
      bg: "bg-gradient-to-br from-cyan-500/20 to-blue-600/20",
      border: "border-cyan-500/30",
      icon: "text-cyan-600 dark:text-cyan-300",
      line: "from-cyan-500 to-violet-500",
      shadow: "shadow-[0_0_20px_rgba(6,182,212,0.2)]",
      hover: "group-hover/node:border-cyan-400 group-hover/node:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
    },
    {
      bg: "bg-gradient-to-br from-violet-500/20 to-purple-600/20",
      border: "border-violet-500/30",
      icon: "text-violet-600 dark:text-violet-300",
      line: "from-violet-500 to-fuchsia-500",
      shadow: "shadow-[0_0_20px_rgba(139,92,246,0.2)]",
      hover: "group-hover/node:border-violet-400 group-hover/node:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
    },
    {
      bg: "bg-gradient-to-br from-fuchsia-500/20 to-pink-600/20",
      border: "border-fuchsia-500/30",
      icon: "text-fuchsia-600 dark:text-fuchsia-300",
      line: "from-fuchsia-500 to-emerald-500",
      shadow: "shadow-[0_0_20px_rgba(217,70,239,0.2)]",
      hover: "group-hover/node:border-fuchsia-400 group-hover/node:shadow-[0_0_30px_rgba(217,70,239,0.4)]"
    },
    {
      bg: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30",
      icon: "text-emerald-600 dark:text-emerald-300",
      line: "from-emerald-500 to-cyan-500",
      shadow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
      hover: "group-hover/node:border-emerald-400 group-hover/node:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
    }
  ];

  return (
    <section id="portfolio" className="py-24 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
       {/* Decorative gradient line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Featured Automations</h2>
            <p className="text-slate-600 dark:text-slate-400">Real-world applications delivering measurable efficiency.</p>
          </div>
          <a href="#" className="text-primary hover:text-primary/80 dark:hover:text-white transition-colors flex items-center gap-2 font-medium">
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-20">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              {/* Workflow Visualization Side */}
              <div className="w-full md:w-1/2 h-[320px] relative group perspective-1000">
                <div className="absolute inset-0 bg-primary/5 rounded-3xl rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative w-full h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 group-hover:border-primary/30 transition-colors duration-500">
                  
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Connection Line Background (Faint guide) */}
                  <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-8 z-0 opacity-50"></div>

                  {/* Nodes */}
                  <div className="flex justify-between w-full max-w-md z-10 relative">
                    {project.workflowSteps.map((step, i) => {
                      const Icon = step.icon;
                      const style = stepStyles[i % stepStyles.length];
                      
                      return (
                        <div key={i} className="flex flex-col items-center group/node relative">
                          {/* Connector Line (Animated Gradient) */}
                          {i < project.workflowSteps.length - 1 && (
                             <motion.div 
                               className={`absolute top-[calc(50%-2rem)] left-[calc(0%+3rem)] h-0.5 bg-gradient-to-r ${style.line} origin-left z-[-1]`}
                               style={{ width: `calc(${100 / (project.workflowSteps.length - 1)}% - 4rem)`, left: `calc(${ (i * (100 / (project.workflowSteps.length - 1))) }% + 3rem)` }}
                               initial={{ scaleX: 0, opacity: 0 }}
                               whileInView={{ scaleX: 1, opacity: 1 }}
                               viewport={{ once: true }}
                               transition={{ delay: i * 0.4, duration: 0.6, ease: "easeOut" }}
                             />
                          )}

                          <motion.div 
                             initial={{ scale: 0, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             viewport={{ once: true }}
                             transition={{ delay: i * 0.2, type: "spring", stiffness: 200, damping: 15 }}
                             className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl border flex items-center justify-center mb-4 backdrop-blur-sm transition-all duration-300 relative ${style.bg} ${style.border} ${style.shadow} ${style.hover}`}
                          >
                             <Icon className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${style.icon} group-hover/node:text-slate-900 dark:group-hover/node:text-white`} />
                             
                             {/* Pulse Dot - Only on first node */}
                             {i === 0 && (
                               <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                             )}
                          </motion.div>
                          
                          <span className="text-[10px] md:text-xs font-mono text-slate-500 dark:text-slate-400 bg-white/80 dark:bg-slate-950/80 px-2 py-1 rounded border border-slate-200 dark:border-slate-800/50 uppercase tracking-wider group-hover/node:text-slate-900 dark:group-hover/node:text-white group-hover/node:border-slate-300 dark:group-hover/node:border-slate-700 transition-colors">
                            {step.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                   {/* Floating Badge */}
                   <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800/50 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-[10px] text-slate-600 dark:text-slate-400 font-mono">LIVE WORKFLOW</span>
                   </div>

                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <span className="text-accent font-mono text-sm mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-300 text-sm hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-white/50 dark:bg-slate-900/50 border-l-4 border-green-500 rounded-r-lg group shadow-sm dark:shadow-none">
                    <p className="text-slate-500 dark:text-slate-500 text-xs uppercase tracking-wide mb-1">Impact Metric</p>
                    <p className="text-slate-900 dark:text-white font-bold text-xl group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">{project.stat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;