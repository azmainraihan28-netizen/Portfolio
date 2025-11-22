import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-slate-950">
       {/* Decorative gradient line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Automations</h2>
            <p className="text-slate-400">Real-world applications delivering measurable efficiency.</p>
          </div>
          <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-2">
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
                <div className="relative w-full h-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-6 group-hover:border-primary/30 transition-colors duration-500">
                  
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                  
                  {/* Connection Line Background */}
                  <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-slate-800 -translate-y-8 z-0"></div>

                  {/* Nodes */}
                  <div className="flex justify-between w-full max-w-md z-10 relative">
                    {project.workflowSteps.map((step, i) => {
                      const Icon = step.icon;
                      return (
                        <div key={i} className="flex flex-col items-center group/node">
                          {/* Connector Line (Animated) */}
                          {i < project.workflowSteps.length - 1 && (
                             <motion.div 
                               className="absolute top-[calc(50%-2rem)] left-[calc(0%+3rem)] h-0.5 bg-primary origin-left z-[-1]"
                               style={{ width: `calc(${100 / (project.workflowSteps.length - 1)}% - 4rem)`, left: `calc(${ (i * (100 / (project.workflowSteps.length - 1))) }% + 3rem)` }}
                               initial={{ scaleX: 0, opacity: 0 }}
                               whileInView={{ scaleX: 1, opacity: 1 }}
                               viewport={{ once: true }}
                               transition={{ delay: i * 0.4, duration: 0.5 }}
                             />
                          )}

                          <motion.div 
                             initial={{ scale: 0, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             viewport={{ once: true }}
                             transition={{ delay: i * 0.2, type: "spring" }}
                             className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg mb-4 group-hover/node:border-primary/50 group-hover/node:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 relative bg-gradient-to-b from-slate-800 to-slate-900"
                          >
                             <Icon className="w-6 h-6 md:w-7 md:h-7 text-slate-400 group-hover/node:text-primary transition-colors duration-300" />
                             
                             {/* Pulse Dot */}
                             {i === 0 && (
                               <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse" />
                             )}
                          </motion.div>
                          
                          <span className="text-[10px] md:text-xs font-mono text-slate-500 bg-slate-950/80 px-2 py-1 rounded border border-slate-800/50 uppercase tracking-wider">
                            {step.label}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                   {/* Floating Badge */}
                   <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/50 border border-slate-800/50 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-[10px] text-slate-400 font-mono">LIVE WORKFLOW</span>
                   </div>

                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <span className="text-accent font-mono text-sm mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-slate-300 text-sm hover:border-slate-500 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-900/50 border-l-4 border-green-500 rounded-r-lg group">
                    <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Impact Metric</p>
                    <p className="text-white font-bold text-xl group-hover:text-green-400 transition-colors">{project.stat}</p>
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