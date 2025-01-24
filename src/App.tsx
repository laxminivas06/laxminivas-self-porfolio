import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/600.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'vision', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="font-poppins bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full h-30 bg-white/100 dark:bg-gray-900/80 backdrop-blur-lg z-50 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="cursor-pointer flex items-center"
        >
        <img
          src="https://i.postimg.cc/mDyCJ55W/lg101.png" // Replace with the actual path to your image
          alt="Laxmi Groups"
          style={{ backgroundColor: "transparent" }}
          className="h-50 w-20" // Adjust the height and width as needed
        />
        
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
          >
            {item.label}
          </ScrollLink>
          ))}
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
          </button>
          <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          )}
          </button>
        </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-800"
        >
          <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
            >
              {item.label}
            </ScrollLink>
            ))}
          </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      
      <Vision />
      <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
