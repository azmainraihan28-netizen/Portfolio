import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CASE_STUDIES } from '../constants';
import { CheckCircle, ArrowRight, BarChart3, Target, Zap } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState(CASE_STUDIES[0].id);

  return (
    <section id="case-studies" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Deep Dive: Case Studies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
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
                    ? 'bg-slate-900 border-primary/50 shadow-lg shadow-primary/5' 
                    : 'bg-transparent border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
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
                <h3 className={`text-xl font-bold mb-1 transition-colors ${activeTab === study.id ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
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
                    className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-800">
                       <div>
                         <h3 className="text-3xl font-display font-bold text-white mb-2">{study.title}</h3>
                         <p className="text-primary font-medium flex items-center gap-2">
                           <Target className="w-4 h-4" /> {study.client}
                         </p>
                       </div>
                       <div className="hidden md:flex gap-2">
                         {study.techStack.map(tech => (
                           <span key={tech} className="px-3 py-1 bg-slate-950 rounded-full text-xs text-slate-400 border border-slate-800">
                             {tech}
                           </span>
                         ))}
                       </div>
                    </div>

                    {/* Grid Content */}
                    <div className="grid md:grid-cols-2 gap-12">
                      
                      {/* Challenge & Solution */}
                      <div className="space-y-8">
                        <div>
                          <h4 className="text-rose-400 font-bold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-rose-500 rounded-full" /> The Challenge
                          </h4>
                          <p className="text-slate-300 leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" /> The Solution
                          </h4>
                          <p className="text-slate-300 leading-relaxed">
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
                        <h4 className="text-emerald-400 font-bold mb-6 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5" /> Measurable Results
                        </h4>
                        <ul className="space-y-4">
                          {study.results.map((result, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 + (i * 0.1) }}
                              className="flex items-start gap-3 text-slate-200"
                            >
                              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{result}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-800">
                           <p className="text-sm text-slate-500 mb-4">Tech Stack Used:</p>
                           <div className="flex flex-wrap gap-2">
                            {study.techStack.map(tech => (
                              <span key={tech} className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-300 border border-slate-700">
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