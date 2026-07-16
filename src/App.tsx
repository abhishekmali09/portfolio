import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
