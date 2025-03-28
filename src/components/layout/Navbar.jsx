import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-12 lg:px-24 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Complytics
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
            Features
          </a>
          <a href="#solutions" className="text-gray-600 hover:text-gray-900 font-medium">
            Solutions
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium">
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <a href="#features" className="block text-gray-600 hover:text-gray-900 font-medium">
            Features
          </a>
          <a href="#solutions" className="block text-gray-600 hover:text-gray-900 font-medium">
            Solutions
          </a>
          <a href="#pricing" className="block text-gray-600 hover:text-gray-900 font-medium">
            Pricing
          </a>
          <a href="#contact" className="block text-gray-600 hover:text-gray-900 font-medium">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;