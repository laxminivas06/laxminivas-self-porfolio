import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          {/* Animated background particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full"
              animate={{
                x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                repeatType: 'mirror',
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 text-center px-4 mt-60">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 text-gray-900 dark:text-white">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
            Laxmi Nivas Morishetty
          </span>
        </h1>
        <div className="text-xl md:text-2xl font-playfair mb-8 text-gray-700 dark:text-gray-300">
          <TypeAnimation
            sequence={[
              ' Entrepreneur',
              2000,
              ' Designer',
              2000,
              ' Innovator',
              2000,
              ' Motivator',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-serif">
          “A visionary mind shaping the future through innovation and purpose. Passionate about bridging the gap between knowledge and real-world impact, with an unwavering drive to inspire and create meaningful change.”
        </p>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="inline-block mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </ScrollLink>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md mx-auto mt-4"
      >
        <div className="relative w-full aspect-square">
          <img
            src="https://i.postimg.cc/kgLQb8bz/hello.jpg"
            alt="Laxmi Nivas Morishetty"
            className="w-full h-full object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-600/20 to-accent-600/20" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
