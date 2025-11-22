import React from 'react';
import { motion } from 'framer-motion';
import { Search, Workflow, Cpu, ShieldCheck, Rocket, Zap, GitBranch, Code2 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Discovery & Audit",
      description: "We start by dissecting your current operations. I identify bottlenecks, redundant data entry points, and high-value opportunities for automation.",
      icon: Search,
      tags: ["Process Mapping", "ROI Analysis", "Feasibility Study"]
    },
    {
      id: 2,
      title: "Architecture Design",
      description: "Before coding, I design the entire system topology. This includes selecting the right stack (n8n vs Make), database schema design, and API strategy.",
      icon: Workflow,
      tags: ["System Topology", "Schema Design", "Tech Stack Selection"]
    },
    {
      id: 3,
      title: "Intelligent Development",
      description: "Building the actual workflows. This involves writing custom scripts, setting up webhooks, and integrating GenAI models for cognitive tasks.",
      icon: Code2,
      tags: ["n8n/Make Scenarios", "TypeScript Functions", "LLM Prompts"]
    },
    {
      id: 4,
      title: "Testing & Resilience",
      description: "Rigorous stress-testing. I implement error handling nodes, retry mechanisms, and notification systems to ensure zero data loss.",
      icon: ShieldCheck,
      tags: ["Error Boundaries", "Edge Case Testing", "Self-Healing Logic"]
    },
    {
      id: 5,
      title: "Deployment & Handoff",
      description: "Live launch with monitoring dashboards. You receive full documentation and training videos to maintain ownership of your new system.",
      icon: Rocket,
      tags: ["Live Monitoring", "Documentation", "Training"]
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
         {/* Section Header */}
         <div className="text-center mb-20">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4"
             >
               <GitBranch className="w-3 h-3" />
               <span>METHODOLOGY</span>
             </motion.div>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                The Optimization Protocol
             </h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                A rigorous, engineering-first approach to building resilient automation systems that scale with your business.
             </p>
         </div>

         {/* Vertical Node Timeline */}
         <div className="relative max-w-5xl mx-auto">
             {/* Central Connection Line */}
             <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-purple-500 to-accent opacity-30"></div>

             {steps.map((step, index) => {
                 const isEven = index % 2 === 0;
                 return (
                     <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative w-full group ${isEven ? 'md:flex-row-reverse' : ''}`}
                     >
                        {/* Spacer for desktop alignment */}
                        <div className="hidden md:block w-5/12" />

                        {/* Center Node Marker */}
                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:translate-x-[-50%] flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-4 border-slate-800 z-20 shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300">
                            <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></div>
                        </div>

                        {/* Content Card */}
                        <div className="w-full md:w-5/12 pl-12 md:pl-0">
                            <div className={`p-6 md:p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10`}>
                                
                                {/* Subtle Grid Background inside card */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px]" />
                                
                                <div className="relative z-10">
                                  <div className="flex items-center justify-between mb-4">
                                      <div className={`p-3 rounded-xl bg-slate-800 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300`}>
                                          <step.icon className="w-6 h-6" />
                                      </div>
                                      <span className="text-6xl font-display font-bold text-slate-800/50 group-hover:text-slate-700/50 transition-colors select-none">
                                        0{step.id}
                                      </span>
                                  </div>
                                  
                                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                                  <p className="text-slate-400 mb-6 leading-relaxed">
                                      {step.description}
                                  </p>

                                  <div className="flex flex-wrap gap-2">
                                      {step.tags.map(tag => (
                                          <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-xs text-slate-500 font-mono uppercase tracking-wider group-hover:border-primary/30 group-hover:text-primary/70 transition-colors">
                                              {tag}
                                          </span>
                                      ))}
                                  </div>
                                </div>
                            </div>
                        </div>
                     </motion.div>
                 )
             })}
         </div>

         {/* Bottom CTA */}
         <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-center mt-12"
         >
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent">
              <a href="#contact" className="block px-8 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white transition-colors flex items-center gap-2 group">
                  Start Your Transformation <Zap className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
              </a>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

export default Process;