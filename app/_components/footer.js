// src/app/_components/footer.jsx
'use client';

import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  
  // Use the same links as your navbar
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, label: "Facebook" },
    { icon: <FiTwitter />, label: "Twitter" },
    { icon: <FiInstagram />, label: "Instagram" },
    { icon: <FiLinkedin />, label: "LinkedIn" }
  ];

  const companyInfo = [
    { icon: <FiMail />, text: "hello@modernsite.com" },
    { icon: <FiPhone />, text: "+1 (555) 123-4567" },
    { icon: <FiMapPin />, text: "123 Tech Street, San Francisco, CA" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Modern<span className="font-light">Site</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building the future with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation links (same as navbar) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${
                      pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                    } transition-colors`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {companyInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-5 w-5 text-gray-400 mt-0.5">
                    {info.icon}
                  </span>
                  <span className="ml-3">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ModernSite. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}