import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { CheckCircle, ArrowRight, BarChart3, Target, Zap } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);

  return (
    <section id="case-studies" className="py-24 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Deep Dive: Case Studies</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A detailed look at the problems solved and value delivered.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Tab Navigation - Left Side */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                  activeTab === study.id 
                    ? 'bg-slate-50 dark:bg-slate-900 border-primary/50 shadow-lg shadow-primary/5' 
                    : 'bg-transparent border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900/50'
                }`}
              >
                {/* Active Indicator */}
                {activeTab === study.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                  />
                )}

                <span className="text-xs font-mono text-slate-500 mb-2 block">{study.industry}</span>
                <h3 className={`text-xl font-bold mb-1 transition-colors ${activeTab === study.id ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                  {study.title}
                </h3>
                <p className="text-sm text-slate-500">{study.client}</p>
              </button>
            ))}
          </div>

          {/* Content Area - Right Side */}
          <div className="lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              {CASE_STUDIES.map((study) => (
                activeTab === study.id && (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-slate-50/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
                       <div>
                         <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">{study.title}</h3>
                         <p className="text-primary font-medium flex items-center gap-2">
                           <Target className="w-4 h-4" /> {study.client}
                         </p>
                       </div>
                       {/* Hidden on mobile, shown on desktop */}
                       <div className="hidden md:block">
                         <div className="p-2 bg-slate-200 dark:bg-slate-800/50 rounded-lg border border-slate-300 dark:border-slate-700/50">
                           <Zap className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                         </div>
                       </div>
                    </div>

                    {/* Grid Content */}
                    <div className="grid md:grid-cols-2 gap-12">
                      
                      {/* Challenge & Solution */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-rose-500 dark:text-rose-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)]" /> The Challenge
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            {study.challenge}
                          </p>
                        </div>
                        
                        <div className="relative">
                           <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                           <h4 className="text-blue-500 dark:text-blue-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.6)]" /> The Solution
                          </h4>
                          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results Section - Redesigned */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                           <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg border border-emerald-200 dark:border-emerald-500/20">
                             <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                           </div>
                           <h4 className="text-lg font-bold text-slate-900 dark:text-white">Measurable Impact</h4>
                        </div>
                        
                        <div className="flex flex-col gap-3 mb-8">
                          {study.results.map((result, i) => (
                            <motion.div 
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                              className="group relative p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/30 hover:shadow-[0_4px_20px_rgba(16,185,129,0.05)] transition-all duration-300"
                            >
                              {/* Hover Accent Strip */}
                              <div className="absolute left-0 top-2 bottom-2 w-1 bg-emerald-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              
                              <div className="flex items-start gap-3 pl-2 transition-all duration-300 group-hover:pl-3">
                                <div className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-500/70 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                                   <CheckCircle className="w-5 h-5" />
                                </div>
                                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200">{result}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                           <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-3">Powered By</p>
                           <div className="flex flex-wrap gap-2">
                            {study.techStack.map(tech => (
                              <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800/40 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 hover:text-primary hover:bg-white dark:hover:bg-slate-800/80 transition-all cursor-default">
                                {tech}
                              </span>
                            ))}
                           </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;