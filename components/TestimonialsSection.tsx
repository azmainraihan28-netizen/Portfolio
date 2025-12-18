
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">
          What Our Clients Say, <span className="text-primary">About Us!</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg mb-16">
          We're proud to showcase the experiences and results shared by our clients. Explore their stories and see how our platform drives growth, productivity, and real business value.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="py-20 border-y border-slate-100 dark:border-slate-900"
        >
          <h3 className="text-5xl md:text-8xl font-display font-black text-slate-100 dark:text-slate-900 tracking-tighter">
            COMING SOON......
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
