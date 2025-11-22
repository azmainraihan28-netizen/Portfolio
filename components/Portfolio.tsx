import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 relative bg-slate-950">
       {/* Decorative gradient line */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Featured Automations</h2>
            <p className="text-slate-400">Real-world applications delivering measurable efficiency.</p>
          </div>
          <a href="#" className="text-primary hover:text-white transition-colors flex items-center gap-2">
            View All Projects <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-12">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-3 group-hover:rotate-2 transition-transform duration-300 blur-sm" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500 object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-950 to-transparent p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase rounded tracking-wider">Live Demo</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <span className="text-accent font-mono text-sm mb-2 block">{project.category}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-slate-300 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <div className="px-6 py-3 bg-slate-900/50 border-l-4 border-green-500 rounded-r-lg">
                    <p className="text-slate-500 text-xs uppercase tracking-wide">Impact</p>
                    <p className="text-white font-bold text-lg">{project.stat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
