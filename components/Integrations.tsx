
import React from 'react';
import { motion } from 'framer-motion';
import { INTEGRATIONS } from '../constants';

const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary/5 -z-10" />
      
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
          Integrate Your <span className="text-primary">Favorite Apps</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
          Discover the Powerful Features That Make <span className="font-bold text-slate-900 dark:text-white">NexFlow</span> the Ultimate Platform for Scaling Your Business
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {INTEGRATIONS.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-lg dark:shadow-none hover:shadow-primary/20 transition-all duration-300">
                  <Icon className={`w-10 h-10 ${app.color}`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
