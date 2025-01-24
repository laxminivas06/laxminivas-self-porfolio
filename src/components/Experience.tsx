import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Lightbulb, Edit, GraduationCap} from 'lucide-react';

const organizations = [
  {
    name: 'Padma Tutorials',
    icon: BookOpen,
    role: 'Founder & Lead Instructor',
    period: '2023 - Present',
    description: 'Revolutionizing education through personalized learning experiences.',
    highlights: [
      'Conducted free bootcamps for underprivileged students',
      'Developed comprehensive study materials',
      'Implemented hybrid learning model',
      'Mentored 100+ students',
    ],
    projects: [
      {
        title: 'Online Learning Platform',
        description: 'Created an interactive platform for remote learning',
        image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?fit=crop&w=800&h=500',
      },
      {
        title: 'Student Success Program',
        description: 'Mentorship program with 95% success rate',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&h=500',
      },
    ],
  },
  {
    name: 'Smart N Light Innovation',
    icon: Lightbulb,
    role: 'Founder & Tech Lead',
    period: '2023 - Present',
    description: 'Developing innovative solutions for everyday challenges.',
    highlights: [
      	'Hello: Medical management simplified',
      'VID: Virtual identification platform',
      	'Help: Technology-driven social welfare',
      	'Swasthya: Recycling medical waste.',
    ],
    projects: [
      {
        title: 'Smart Home Automation',
        description: 'Energy-efficient home control system',
        image: 'images/iot.jpeg',
      },
      {
        title: 'IoT Weather Station',
        description: 'Real-time environmental monitoring system',
        image: 'images/rt.jpeg',
      },
    ],
  },
  {
    name: 'Nivas Editz',
    icon: Edit,
    role: 'Founder & Creative Director',
    period: '2023 - Present',
    description: 'Creating engaging social media content and marketing strategies.',
    highlights: [
      'Managed social media campaigns',
      'Created viral marketing content',
      'Built brand identities',
      'Increased client engagement by 200%',
    ],
    projects: [
      {
        title: 'Brand Revival Campaign',
        description: 'Successful rebranding for local business',
        image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?fit=crop&w=800&h=500',
      },
      {
        title: 'Social Media Growth',
        description: 'Organic growth strategy implementation',
        image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?fit=crop&w=800&h=500',
      },
    ],
  },
  {
    name: 'Wisdom Roots',
    icon: GraduationCap,
    role: 'Founder & Educational Consultant',
    period: '2024 - Present',
    description: 'Bridging the gap between theory and practical applications in education.',
    highlights: [
      'Developed practical learning modules',
      'Conducted hands-on workshops',
      'Created industry-aligned curriculum',
      'Mentored junior students',
    ],
    projects: [
      {
        title: 'Practical Learning Lab',
        description: 'Hands-on experience center for students',
        image: 'images/pl.png',
      },
      {
        title: 'Industry Connect Program',
        description: 'Bridge program for students and professionals',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?fit=crop&w=800&h=500',
      },
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-montserrat mb-4 text-gray-900 dark:text-white">
            Experience & Organizations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Founded and led multiple organizations focused on education, innovation, and digital marketing.
          </p>
        </motion.div>

        <div className="space-y-16">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex items-center mb-4">
                    <org.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {org.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{org.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{org.description}</p>
                  <ul className="space-y-2">
                    {org.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-2" />
                        <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {org.projects.map((project, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="group relative overflow-hidden rounded-lg shadow-lg"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <h4 className="text-white font-bold mb-2">{project.title}</h4>
                        <p className="text-gray-200 text-sm">{project.description}</p>
                        <button className="mt-4 flex items-center text-primary-400 hover:text-primary-300 transition-colors">
                          {/* <span className="text-sm">Learn More</span>
                          <ExternalLink className="w-4 h-4 ml-1" /> */}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;