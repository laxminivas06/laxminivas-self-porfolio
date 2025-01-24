import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import { 
 
  Linkedin, 
 
  Instagram,
  Heart 
} from 'lucide-react';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },

  { to: 'vision', label: 'Vision' },
  { to: 'contact', label: 'Contact' },
];

const socialLinks = [
  
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'www.linkedin.com/in/laxmi-nivas-morishetty-02468m',
  },
  
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/laxminivasmorishetty/',
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-playfair text-primary-600 dark:text-primary-400">
              Laxmi Nivas Morishetty
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
            Entrepreneur• Creator • Motivator
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-primary-600 text-white rounded-r-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Laxmi Nivas Morishetty. All rights reserved.
            </p>
            <p className="flex items-center text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
              Made with 
              <Heart className="w-4 h-4 text-red-500 mx-1" />
              in Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
