// src/app/about/page.js
'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiAward, FiGlobe } from 'react-icons/fi';

export default function About() {
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
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Company</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We're a team of passionate designers, developers, and strategists dedicated to creating exceptional digital experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-lg"></div>
          <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Our team"
              className="w-full h-96 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-6 text-gray-600">
              Founded in 2020, we started as a small team with a big vision - to make web development accessible, beautiful, and powerful for everyone.
            </p>
            <p className="mt-4 text-gray-600">
              What began as a passion project has grown into a full-service digital agency serving clients worldwide. We've stayed true to our core values while expanding our capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <FiUsers size={32} />, value: "50+", label: "Team Members" },
              { icon: <FiAward size={32} />, value: "200+", label: "Projects Completed" },
              { icon: <FiGlobe size={32} />, value: "15+", label: "Countries Served" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="text-blue-600 mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our Core Values
          </motion.h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description: "We push boundaries and explore new possibilities in every project.",
              color: "from-blue-500 to-blue-600"
            },
            {
              title: "Excellence",
              description: "Quality is never compromised in our work and relationships.",
              color: "from-purple-500 to-purple-600"
            },
            {
              title: "Collaboration",
              description: "Great things happen when we work together with our clients.",
              color: "from-indigo-500 to-indigo-600"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${value.color} p-0.5 rounded-xl`}
            >
              <div className="bg-white rounded-lg p-8 h-full">
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}