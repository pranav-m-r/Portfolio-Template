import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import News from './sections/News';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Awards from './sections/Awards';
import Publications from './sections/Publications';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Teaching from './sections/Teaching';
import Service from './sections/Service';
import Contact from './sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#050507] transition-colors duration-300">
        <ThemeToggle />
        <main>
          <Hero />
          <News />
          <Education />
          <Experience />
          <Publications />
          <Projects />
          <Awards />
          <Certificates />
          <Teaching />
          <Service />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
