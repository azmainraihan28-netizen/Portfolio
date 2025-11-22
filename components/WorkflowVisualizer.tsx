import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Database, MessageSquare, FileText, CheckCircle, Zap } from 'lucide-react';

const WorkflowVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 0, icon: MessageSquare, label: 'Trigger', sub: 'New Lead Form', color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { id: 1, icon: Database, label: 'Enrich', sub: 'Clearbit API', color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { id: 2, icon: Zap, label: 'Process', sub: 'Gemini AI', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    { id: 3, icon: Mail, label: 'Action', sub: 'Send Email', color: 'text-pink-400', bg: 'bg-pink-500/20' },
    { id: 4, icon: CheckCircle, label: 'Complete', sub: 'Update CRM', color: 'text-green-400', bg: 'bg-green-500/20' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-12 p-8 rounded-2xl glass-panel border border-slate-700 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-accent"
          animate={{ width: `${(activeStep + 1) * 20}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 md:gap-4">
        {nodes.map((node, index) => {
            const Icon = node.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <div key={node.id} className="relative flex flex-col items-center group">
                {/* Connecting Line (Desktop) */}
                {index !== nodes.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-800 -z-10">
                     <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: "0%" }}
                        animate={{ width: isPast ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                     />
                  </div>
                )}

                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                    isActive || isPast ? node.bg : 'bg-slate-800'
                  } ${isActive ? 'ring-2 ring-primary shadow-[0_0_20px_rgba(99,102,241,0.5)]' : ''}`}
                  animate={{ scale: isActive ? 1.1 : 1 }}
                >
                  <Icon className={`w-6 h-6 ${isActive || isPast ? node.color : 'text-slate-500'}`} />
                </motion.div>
                
                <div className="text-center">
                  <p className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-500'}`}>{node.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{node.sub}</p>
                </div>
              </div>
            );
        })}
      </div>

      <div className="mt-8 p-4 bg-slate-900/50 rounded-lg font-mono text-xs text-emerald-400 overflow-hidden h-24 flex flex-col-reverse border border-slate-800">
         {activeStep === 0 && <p>{'>'} Event received: form_submission_id_9928</p>}
         {activeStep === 1 && <p>{'>'} Enrichment successful: Role="CTO", Company="TechCorp"</p>}
         {activeStep === 2 && <p>{'>'} AI Thinking: Generating personalized intro based on LinkedIn bio...</p>}
         {activeStep === 3 && <p>{'>'} Email Drafted: Sending via Gmail API...</p>}
         {activeStep === 4 && <p>{'>'} CRM Updated: HubSpot Deal Created (Stage: Qualified)</p>}
         <p className="text-slate-600 italic"># Live Workflow Execution Log</p>
      </div>
    </div>
  );
};

export default WorkflowVisualizer;
