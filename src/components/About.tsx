import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Rocket, Heart, Music, Code, Camera } from 'lucide-react';

const timeline = [
  {
    year: '2023',
    title: 'B.Tech in Computer Science Engineering',
    subtitle: 'Sphoorthy Engineering College, Hyderabad',
    description: 'Specializing in CSE-Cyber Security',
  },
  {
    year: '2021',
    title: 'Little Flower Junior College',
    subtitle: 'Intermediate Education',
    description: 'Focused on Mathematics and Science',
  },
  {
    year: '2020',
    title: 'Naagarjunaa High School',
    subtitle: 'Secondary Education',
    description: 'Strong foundation in academics',
  },
];

const hobbies = [
  { icon: Book, label: 'Reading' },
  { icon: Rocket, label: 'Innovation' },
  { icon: Heart, label: 'Volunteering' },
  { icon: Music, label: 'Music' },
  { icon: Code, label: 'Coding' },
  { icon: Camera, label: 'Photography' },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-montserrat mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-open-sans">
          “A passionate and driven individual pursuing a Bachelor’s in Computer Science and Engineering (Cyber Security), I thrive on creativity, innovation, and problem-solving. With a deep interest in technology and a commitment to making a difference, I strive to bridge the gap between ideas and impactful solutions. Always eager to learn and grow, I aim to inspire and contribute to a future shaped by innovation and meaningful change.”
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-4 mb-8"
            >
              <div className="md:w-1/3 text-right">
                <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {item.year}
                </span>
              </div>
              <div className="md:w-2/3 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hobbies & Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Hobbies & Interests
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <hobby.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-2" />
                <span className="text-gray-700 dark:text-gray-300">
                  {hobby.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;