
import React from 'react';
import { Mail, Zap, Linkedin, ShoppingBag, ArrowRight, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Ready to <span className="text-primary">Scale?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Let's discuss how automation can save you time and money. I'm currently accepting new projects and partnerships for next-gen AI implementation.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {/* Fiverr Gig Card */}
            <motion.a 
              href="https://www.fiverr.com/s/o8Gj8vx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all hover:border-[#1dbf73]/50 group shadow-lg dark:shadow-none"
            >
              <div className="bg-[#1dbf73]/20 p-4 rounded-2xl text-[#1dbf73] group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Hire Me on Fiverr</p>
                <span className="text-lg md:text-xl text-slate-900 dark:text-white font-bold">
                  Official Fiverr Gig
                </span>
              </div>
            </motion.a>

            {/* Email card */}
            <motion.a 
              href="mailto:azmainraihan28@gmail.com"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all hover:border-primary/50 group shadow-lg dark:shadow-none"
            >
              <div className="bg-primary/20 p-4 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Email Me Directly</p>
                <span className="text-lg md:text-xl text-slate-900 dark:text-white font-bold break-all">
                  azmainraihan28@gmail.com
                </span>
              </div>
            </motion.a>

            {/* LinkedIn card */}
            <motion.a 
              href="https://www.linkedin.com/in/azmain-inkiyed-raihan-aba14a392/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center gap-4 transition-all hover:border-[#0077b5]/50 group shadow-lg dark:shadow-none"
            >
              <div className="bg-[#0077b5]/20 p-4 rounded-2xl text-[#0077b5] group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest font-bold mb-1">Connect on LinkedIn</p>
                <span className="text-lg md:text-xl text-slate-900 dark:text-white font-bold">
                  Azmain Raihan
                </span>
              </div>
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-4xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800 -z-10 hidden md:block" />
            
            <div className="flex flex-col items-center gap-4 bg-white dark:bg-slate-950 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold text-lg border-2 border-primary/20">1</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Discovery Call</h4>
                <p className="text-slate-500 text-sm">15-min chat to understand your bottlenecks.</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white dark:bg-slate-950 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold text-lg border-2 border-primary/20">2</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Strategy Proposal</h4>
                <p className="text-slate-500 text-sm">I'll map out the exact workflow architecture.</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 bg-white dark:bg-slate-950 px-4">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold text-lg border-2 border-primary/20">3</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold mb-1">Build & Handover</h4>
                <p className="text-slate-500 text-sm">Rapid development with full documentation.</p>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20"
          >
            <a 
              href="https://www.fiverr.com/s/o8Gj8vx" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 dark:bg-primary text-white font-display font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all group"
            >
              Hire Me on Fiverr
              <Zap className="w-5 h-5 text-yellow-400 group-hover:rotate-12 transition-transform" />
            </a>
            <p className="mt-6 text-slate-500 text-sm font-medium italic">
              * Average project turnaround: 14 business days
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
