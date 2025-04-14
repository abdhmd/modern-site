// src/app/services/page.js
'use client';

import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone, FiBarChart2, FiServer, FiDatabase } from 'react-icons/fi';

export default function Services() {
  const services = [
    {
      icon: <FiCode size={24} />,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      features: ["React/Next.js", "Tailwind CSS", "API Integration", "Responsive Design"]
    },
    {
      icon: <FiLayers size={24} />,
      title: "UI/UX Design",
      description: "Beautiful interfaces designed with user psychology and conversion optimization in mind.",
      features: ["Figma Prototypes", "User Testing", "Design Systems", "Accessibility"]
    },
    {
      icon: <FiSmartphone size={24} />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications that work seamlessly on iOS and Android.",
      features: ["React Native", "Expo", "Native Features", "App Store Optimization"]
    },
    {
      icon: <FiBarChart2 size={24} />,
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your online presence and customer base.",
      features: ["SEO", "Content Marketing", "Social Media", "PPC Campaigns"]
    },
    {
      icon: <FiServer size={24} />,
      title: "Cloud Solutions",
      description: "Scalable infrastructure to support your business as it grows.",
      features: ["AWS", "Google Cloud", "CI/CD Pipelines", "Serverless Architecture"]
    },
    {
      icon: <FiDatabase size={24} />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with powerful visualization tools.",
      features: ["BigQuery", "Tableau", "Predictive Modeling", "KPI Dashboards"]
    }
  ];

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
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive solutions tailored to your business needs. We combine strategy, design, and technology to deliver exceptional results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Learn more →
                </motion.button>
              </div>
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
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Schedule a free consultation with our experts to discuss your project needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <button className="px-8 py-3 rounded-full bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl transition-all">
              Book a Call
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}