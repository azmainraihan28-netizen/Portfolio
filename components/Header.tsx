import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light');
      }
    }
  }, []);

  // Apply theme class to html element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || mobileMenuOpen 
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/5 shadow-sm' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-shadow duration-300">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Nex<span className="text-primary">Flow</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-display font-semibold tracking-wide text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          <div className="flex items-center gap-4 pl-4 border-l border-slate-200 dark:border-slate-800">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 text-base font-display font-bold text-white bg-slate-900 dark:bg-white/10 border border-transparent dark:border-white/10 rounded-full hover:bg-slate-700 dark:hover:bg-white/20 transition-all shadow-lg dark:shadow-none hover:scale-105"
            >
              Book Call
            </a>
          </div>
        </nav>

        {/* Mobile Toggle & Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8 px-6 flex flex-col gap-6 shadow-2xl h-screen">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-display font-bold text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary pl-2 border-l-2 border-transparent hover:border-primary transition-all"
            >
              {link.name}
            </a>
          ))}
          <a 
             href="#contact"
             onClick={(e) => handleNavClick(e, '#contact')}
             className="mt-4 text-center px-6 py-4 text-lg font-display font-bold text-white bg-primary rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;