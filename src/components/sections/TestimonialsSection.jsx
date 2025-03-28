import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Compliance Manager, FinTech Corp",
    content: "Complytics reduced our audit preparation time from weeks to just days. The platform is incredibly intuitive.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Director of Risk, BankSecure",
    content: "We've seen a 40% reduction in compliance-related incidents since implementing Complytics.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "COO, HealthGuard",
    content: "The automated reporting features have been a game-changer for our compliance team.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="bg-hero-gradient bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies who have transformed their compliance processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;