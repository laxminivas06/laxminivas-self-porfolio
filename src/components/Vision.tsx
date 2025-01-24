import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Globe, 
  Lightbulb, 
  Users,
  Quote
} from 'lucide-react';

const visionCards = [
  {
    icon: TrendingUp,
    title: 'Global Impact',
    description: 'Aspiring to become a millionaire and global influencer, following in the footsteps of visionaries like Elon Musk.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Leader',
    description: 'Developing groundbreaking innovations that address real-world challenges and improve lives.',
  },
  {
    icon: Globe,
    title: 'Tech Revolution',
    description: 'Leading the next wave of technological advancement in cybersecurity and artificial intelligence.',
  },
  {
    icon: Users,
    title: 'Education Impact',
    description: 'Transforming education through technology and making quality learning accessible to all.',
  },
];

const quotes = [
  {
    text: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
    author: "Dr. A.P.J. Abdul Kalam",
  },
  {
    text: "Arise, awake, and stop not until the goal is reached.",
    author: "Swami Vivekananda",
  },
  {
    text: "When something is important enough, you do it even if the odds are not in your favor.",
    author: "Elon Musk",
  },
  {
    text: "Don't become an Audience for the World... Be a seller Be a Speaker",
    author: "Alakh Pandey",
  },
];

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="vision" ref={ref} className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-montserrat mb-4 text-gray-900 dark:text-white">
            Vision & Goals
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ambitious goals and aspirations that drive innovation and positive change.
          </p>
        </motion.div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform" />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl transform -rotate-1 group-hover:-rotate-2 transition-transform">
                <card.icon className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inspirational Quotes */}
        <div className="max-w-4xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Words That Inspire
          </motion.h3>
          <div className="space-y-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
              >
                <div className="flex items-start">
                  <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4 flex-shrink-0" />
                  <div>
                    <p className="text-lg italic mb-2 text-gray-800 dark:text-gray-200">
                      "{quote.text}"
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      - {quote.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block">
            <div className="relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full">
              <p className="text-white font-bold">
                The Journey Continues...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;