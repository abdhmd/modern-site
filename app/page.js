'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Modern</span> Websites
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Create stunning digital experiences with our cutting-edge platform. 
              Perfect for startups, agencies, and innovative brands.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Get Started <FiArrowRight className="inline ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 rounded-full bg-white text-gray-700 font-medium border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-lg"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Modern website design"
                width={1470}
                height={980}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We combine beautiful design with powerful technology to deliver exceptional results.
          </motion.p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Lightning Fast",
              description: "Optimized for performance with instant page loads",
              icon: "⚡"
            },
            {
              title: "Responsive Design",
              description: "Flawless experience on all devices",
              icon: "📱"
            },
            {
              title: "SEO Optimized",
              description: "Built to rank higher in search results",
              icon: "🔍"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Ready to Transform Your Online Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Join thousands of satisfied customers who&apos;ve elevated their brand with our platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl transition-all flex items-center mx-auto">
              Start Free Trial <FiArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
