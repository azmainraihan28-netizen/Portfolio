
import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            How It's <span className="text-primary">Works</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See how easy it is to automate, optimize, and grow your business with NexFlow — from setup to scaling.
          </p>
        </div>

        <div className="space-y-12">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center rounded-[2.5rem] overflow-hidden ${step.bgColor} border border-slate-200 dark:border-slate-800 shadow-xl group`}
            >
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary font-bold text-xl`}>
                  {step.id}
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                  {step.title}
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
