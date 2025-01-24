import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Presentation, Users, Lightbulb, Rocket } from 'lucide-react';

const skills = [
  {
    category: 'Technical',
    icon: Code,
    items: [
      { name: 'Frontend Web Development', level: 90 },
      { name: 'Graphic Designing', level: 85 },
      { name: 'AI & its Tools', level: 80 },
      { name: 'UI & UX Designing', level: 75 },
    ],
  },
  {
    category: 'Teaching',
    icon: Presentation,
    items: [
      { name: 'Curriculum Development', level: 95 },
      { name: 'Student Mentoring', level: 90 },
      { name: 'Online Teaching', level: 85 },
      { name: 'Workshop Facilitation', level: 88 },
    ],
  },
  {
    category: 'Marketing',
    icon: Users,
    items: [
      { name: 'Social Media Marketing', level: 85 },
      { name: 'Content Creation', level: 88 },
      { name: 'Brand Strategy', level: 82 },
      { name: 'Digital Marketing', level: 80 },
    ],
  },
];

const bootcamps = [
  {
    title: 'HTML5 Mastery',
    duration: '5 Days',
    icon: Code,
    description: 'Comprehensive bootcamp covering advanced HTML5 features and best practices',
  },
  {
    title: 'Emerging Technologies',
    duration: '3 Days',
    icon: Rocket,
    description: 'Deep dive into blockchain, IoT, and cloud computing',
  },
  {
    title: 'AI Evolution',
    duration: '2 Hours',
    icon: Brain,
    description: 'Understanding the current state and future of artificial intelligence',
  },
  {
    title: 'Innovation Workshop',
    duration: '4 Days',
    icon: Lightbulb,
    description: 'Hands-on experience with cutting-edge technologies',
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-primary-600 dark:bg-primary-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-montserrat mb-4 text-gray-900 dark:text-white">
            Skills & Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse skill set combining technical expertise, teaching abilities, and marketing acumen.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <skillGroup.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>
              {skillGroup.items.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Bootcamps */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Hosted Workshops
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bootcamps.map((bootcamp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <bootcamp.icon className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-2" />
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {bootcamp.duration}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                  {bootcamp.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {bootcamp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;