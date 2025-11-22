import React from 'react';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { motion } from 'framer-motion';
import WorkflowVisualizer from './WorkflowVisualizer';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-blob opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-secondary/10 rounded-full blur-[100px] -z-10 opacity-30" />

      <div className="container mx-auto px-6 text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-accent text-xs font-mono mb-6">
            AI AUTOMATION EXPERT
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
            Automate Your Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Scale Without Limits
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I build intelligent, automated systems using n8n, Make, and Gemini AI to replace manual work with seamless digital workflows.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-200 flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start Automating <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#case-studies" 
              className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-medium hover:bg-slate-800 transition-colors duration-200"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16"
        >
           <WorkflowVisualizer />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce">
        <MousePointer2 className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;