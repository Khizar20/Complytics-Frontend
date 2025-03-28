import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiBarChart2, FiClock, FiDatabase } from 'react-icons/fi';

const features = [
  {
    icon: <FiShield className="w-8 h-8 text-primary-500" />,
    title: "Compliance Automation",
    description: "Automate regulatory compliance processes with our AI-powered platform."
  },
  {
    icon: <FiBarChart2 className="w-8 h-8 text-primary-500" />,
    title: "Real-time Analytics",
    description: "Get actionable insights with our comprehensive dashboard."
  },
  {
    icon: <FiClock className="w-8 h-8 text-primary-500" />,
    title: "Time Saving",
    description: "Reduce manual work by up to 80% with automated workflows."
  },
  {
    icon: <FiDatabase className="w-8 h-8 text-primary-500" />,
    title: "Centralized Data",
    description: "All your compliance data in one secure location."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="bg-hero-gradient bg-clip-text text-transparent">Your Business</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to streamline your compliance processes and reduce risk.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card-gradient p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;