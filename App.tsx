import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import CaseStudies from './components/CaseStudies';

const App: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen font-sans overflow-x-hidden"
    >
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <CaseStudies />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </motion.div>
  );
};

export default App;