import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">How I Can Help</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto">Comprehensive automation solutions tailored to your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group relative overflow-hidden shadow-lg dark:shadow-none hover:shadow-2xl dark:hover:shadow-none"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl -mr-16 -mt-16 group-hover:from-primary/20 transition-all" />
                 
                 <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm dark:shadow-none border border-slate-100 dark:border-transparent group-hover:scale-110 transition-transform duration-300">
                   <Icon className="w-7 h-7 text-primary group-hover:text-primary dark:group-hover:text-white transition-colors" />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                 <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{service.description}</p>
                 
                 <ul className="space-y-2">
                   {service.features.map((feat, i) => (
                     <li key={i} className="flex items-center text-sm text-slate-500 dark:text-slate-300">
                       <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                       {feat}
                     </li>
                   ))}
                 </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;