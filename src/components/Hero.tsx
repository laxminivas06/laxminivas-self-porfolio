import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          {/* Animated background particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                Laxmi Nivas Morishetty
              </span>
            </h1>
            <div className="text-xl md:text-2xl font-playfair mb-8 text-gray-700 dark:text-gray-300">
              <TypeAnimation
                sequence={[
                  'Entrepreneur',
                  2000,
                  'Motivator',
                  2000,            
                  'Innovator',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-open-sans">
            “A visionary mind shaping the future through innovation and purpose. Passionate about bridging the gap between knowledge and real-world impact, with an unwavering drive to inspire and create meaningful change.”
            </p>
            <div className="flex gap-4">
             
            
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <img
                src="https://i.postimg.cc/kgLQb8bz/hello.jpg"
                alt="Laxmi Nivas Morishetty"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
            </div>
          </motion.div>
        </div>
      </div>

      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </ScrollLink>
    </section>
  );
};

export default Hero;
