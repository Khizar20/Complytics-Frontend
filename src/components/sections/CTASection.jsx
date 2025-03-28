import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CTASection = () => {
  return (
    <section id="cta" className="py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-primary-500 to-primary-600">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Compliance Process?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses who trust Complytics for their compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              Get Started <FiArrowRight className="ml-2" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:bg-opacity-10 transition-all duration-300">
              Request Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;