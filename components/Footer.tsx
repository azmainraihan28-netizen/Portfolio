import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">NexFlow</h3>
          <p className="text-slate-600 dark:text-slate-500 text-sm">Empowering businesses with next-gen automation.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/azmainraihan28-netizen" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/azmain-inkiyed-raihan-aba14a392/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:azmainraihan28@gmail.com" className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        
        <div className="text-slate-500 dark:text-slate-600 text-sm">
          © {new Date().getFullYear()} NexFlow Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;