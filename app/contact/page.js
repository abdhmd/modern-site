'use client';

import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
          >
            Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  aria-label="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  aria-label="Your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  aria-label="Subject of your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  aria-label="Your message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
              >
                Send Message <FiSend className="ml-2" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg text-blue-600">
                    <FiMail size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                    <a href="mailto:hello@example.com" className="text-gray-900 hover:text-blue-600 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-purple-50 p-3 rounded-lg text-purple-600">
                    <FiMapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                    <p className="text-gray-900">
                      123 Design Street<br />
                      Creative City, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-50 p-3 rounded-lg text-indigo-600">
                    <FiPhone size={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                    <a href="tel:+11234567890" className="text-gray-900 hover:text-blue-600 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>

              {/* Updated Follow Us Section with Icons */}
              <div className="mt-12">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <FiTwitter className="w-5 h-5" />, label: "Twitter", color: "hover:text-blue-400" },
                    { icon: <FiFacebook className="w-5 h-5" />, label: "Facebook", color: "hover:text-blue-600" },
                    { icon: <FiInstagram className="w-5 h-5" />, label: "Instagram", color: "hover:text-pink-500" },
                    { icon: <FiLinkedin className="w-5 h-5" />, label: "LinkedIn", color: "hover:text-blue-700" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -3 }}
                      href="#"
                      className={`text-gray-600 ${social.color} transition-colors`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden shadow-lg h-96"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center m-4 text-center">
            <p className="text-lg font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full">
              Interactive Map Would Display Here
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
