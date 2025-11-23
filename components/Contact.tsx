import React, { useState } from 'react';
import { Send, Check, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after delay
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 dark:to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Ready to <span className="text-primary">Scale?</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Let's discuss how automation can save you time and money. Whether it's a simple integration or a complex AI agent, I'm here to build it.
            </p>
            
            <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center gap-4">
              <div className="bg-primary/20 p-3 rounded-lg text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Email me directly</p>
                <a href="mailto:azmainraihan28@gmail.com" className="text-slate-900 dark:text-white font-bold text-lg hover:text-primary transition-colors">
                  azmainraihan28@gmail.com
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">1</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold">Discovery Call</h4>
                  <p className="text-slate-500 text-sm">15-min chat to understand your bottlenecks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">2</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold">Strategy Proposal</h4>
                  <p className="text-slate-500 text-sm">I'll map out the exact workflow architecture.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">3</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold">Build & Handover</h4>
                  <p className="text-slate-500 text-sm">Rapid development with full documentation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl relative">
              {formState === 'success' ? (
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="flex flex-col items-center justify-center h-80 text-center"
                 >
                   <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                     <Check className="w-8 h-8" />
                   </div>
                   <h3 className="text-2xl text-slate-900 dark:text-white font-bold mb-2">Message Sent!</h3>
                   <p className="text-slate-500 dark:text-slate-400">I'll get back to you at your email shortly.</p>
                 </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 text-sm mb-2">Name</label>
                    <input type="text" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 text-sm mb-2">Email</label>
                    <input type="email" required className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-slate-600 dark:text-slate-400 text-sm mb-2">Project Details</label>
                    <textarea required rows={4} className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="I need to automate my lead qualification process..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={formState === 'submitting'}
                    className="w-full bg-gradient-to-r from-primary to-violet-600 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Sending...' : (
                      <>Send Message <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;